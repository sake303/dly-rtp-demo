(() => {
  const stage = document.querySelector('.stage');
  const stageTitle = document.getElementById('stage-title');
  const status = document.getElementById('motion-status');
  const sourcePanels = [...document.querySelectorAll('[data-motion-role="source-panel"]')];
  const node = document.querySelector('[data-motion-role="dly-node"]');
  const nodeState = node?.querySelector('.node-state');
  const packet = document.querySelector('[data-motion-role="reviewable-context"]');
  const handoff = document.querySelector('[data-motion-role="dashboard-handoff"]');
  const caseLine = document.querySelector('[data-motion-role="case-line"]');
  const matchingKeys = document.querySelector('[data-motion-role="matching-keys"]');
  const controls = Object.fromEntries([...document.querySelectorAll('[data-motion-control]')].map(button => [button.dataset.motionControl, button]));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (!stage || !stageTitle || !status || !node || !nodeState || !packet || !handoff || !caseLine || !matchingKeys) return;

  const beats = [
    {
      id: 'fragmented-inputs',
      label: 'Fragmented inputs',
      caption: 'A decision rarely starts in one system.',
      duration: 2500,
      sources: [],
      nodeState: 'No review context yet'
    },
    {
      id: 'medical-boundary',
      label: 'Medical context',
      caption: 'MEDICAL CONTEXT\nPractice status · Controlled team integration\nRestriction · Review before uncontrolled 5v5\nNext review · Tue 14:00',
      duration: 4500,
      sources: ['medical'],
      nodeState: 'Medical boundary available'
    },
    {
      id: 'recent-exposure',
      label: 'Recent exposure',
      caption: 'RECENT EXPOSURE\nControlled 4v4\n16 min · completed',
      duration: 4500,
      sources: ['medical', 'performance'],
      nodeState: 'Two records remain separate'
    },
    {
      id: 'team-requirement',
      label: 'Team requirement',
      caption: 'TEAM REQUIREMENT\nControlled 5v5\n18 min · planned',
      duration: 4500,
      sources: ['medical', 'performance', 'team'],
      nodeState: 'Planned work needs review'
    },
    {
      id: 'review-moment',
      label: 'Review moment',
      caption: 'PREVIOUS REVIEW\nStaff-owned decision\nLast reviewed · Mon 17:30',
      duration: 9000,
      sources: ['medical', 'performance', 'team', 'history'],
      nodeState: 'Review context is incomplete',
      subphase: {
        after: 4000,
        caption: 'RTP-017\nNext team exposure needs review.',
        showCase: true
      }
    },
    {
      id: 'connect-context',
      label: 'DLY connects context',
      caption: 'DLY connects the context around a decision.',
      duration: 13000,
      sources: ['medical', 'performance', 'team', 'history'],
      nodeState: 'Matching relevant context',
      subphase: {
        after: 8000,
        caption: 'Relevant context. Attributable sources.',
        showKeys: true,
        nodeState: 'Review context ready'
      }
    },
    {
      id: 'reviewable-context',
      label: 'Reviewable context',
      caption: 'REVIEWABLE CONTEXT\nPlan · controlled 5v5 · 18 min\nMedical boundary · Recent exposure · Team requirement',
      duration: 13000,
      sources: ['medical', 'performance', 'team', 'history'],
      nodeState: 'Review context ready',
      subphase: {
        after: 8000,
        caption: 'The context is ready for staff review.\nThe decision is still theirs.'
      }
    },
    {
      id: 'dashboard-handoff',
      label: 'Dashboard handoff',
      caption: 'From system records to a review moment.',
      duration: 7000,
      sources: ['medical', 'performance', 'team', 'history'],
      nodeState: 'Review context ready',
      subphase: {
        after: 4000,
        caption: 'Systems record work.\nDLY makes the decision context reviewable.\nStaff make the decision.'
      }
    }
  ];

  let currentIndex = 0;
  let isPlaying = false;
  let beatTimer = 0;
  let subphaseTimer = 0;

  const clearTimers = () => {
    window.clearTimeout(beatTimer);
    window.clearTimeout(subphaseTimer);
    beatTimer = 0;
    subphaseTimer = 0;
  };

  const setCaption = caption => {
    stageTitle.innerHTML = caption.split('\n').map(line => `<span>${line}</span>`).join('<br>');
  };

  const updateControls = () => {
    controls.play.disabled = isPlaying;
    controls.pause.disabled = !isPlaying;
  };

  const updateStatus = beat => {
    const position = String(currentIndex + 1).padStart(2, '0');
    status.innerHTML = `<strong>Scene ${position}</strong> · ${beat.label}`;
  };

  const setBeat = (index, { announce = true } = {}) => {
    clearTimers();
    currentIndex = Math.max(0, Math.min(index, beats.length - 1));
    const beat = beats[currentIndex];
    const packetVisible = beat.id === 'reviewable-context' || beat.id === 'dashboard-handoff';
    const handoffVisible = beat.id === 'dashboard-handoff';

    stage.dataset.beat = beat.id;
    stage.dataset.scene = beat.id;
    stage.dataset.ready = packetVisible ? 'true' : 'false';
    stageTitle.dataset.scene = beat.id;
    setCaption(beat.caption);
    nodeState.textContent = beat.nodeState;
    packet.setAttribute('aria-hidden', String(!packetVisible));
    handoff.setAttribute('aria-hidden', String(!handoffVisible));
    packet.style.visibility = packetVisible ? 'visible' : 'hidden';
    handoff.style.visibility = handoffVisible ? 'visible' : 'hidden';
    caseLine.classList.remove('is-visible');
    matchingKeys.classList.remove('is-visible');

    sourcePanels.forEach(panel => {
      panel.classList.toggle('is-revealed', beat.sources.includes(panel.dataset.source));
    });

    updateStatus(beat);
    if (announce) status.setAttribute('aria-label', `${beat.label}. ${stageTitle.textContent.replace(/\s+/g, ' ').trim()}`);

    if (beat.subphase) {
      subphaseTimer = window.setTimeout(() => {
        setCaption(beat.subphase.caption);
        if (beat.subphase.showCase) caseLine.classList.add('is-visible');
        if (beat.subphase.showKeys) {
          matchingKeys.classList.add('is-visible');
          stage.dataset.ready = 'true';
        }
        if (beat.subphase.nodeState) nodeState.textContent = beat.subphase.nodeState;
      }, reduceMotion.matches ? 120 : beat.subphase.after);
    }
  };

  const scheduleNext = () => {
    const beat = beats[currentIndex];
    beatTimer = window.setTimeout(() => {
      if (!isPlaying) return;
      if (currentIndex === beats.length - 1) {
        isPlaying = false;
        updateControls();
        return;
      }
      setBeat(currentIndex + 1);
      scheduleNext();
    }, reduceMotion.matches ? 120 : beat.duration);
  };

  const play = () => {
    if (isPlaying) return;
    if (currentIndex === beats.length - 1) setBeat(0);
    isPlaying = true;
    updateControls();
    scheduleNext();
  };

  const pause = () => {
    if (!isPlaying) return;
    isPlaying = false;
    clearTimers();
    updateControls();
  };

  const replay = () => {
    isPlaying = true;
    setBeat(0);
    updateControls();
    scheduleNext();
  };

  const skipToReview = () => {
    pause();
    setBeat(beats.findIndex(beat => beat.id === 'reviewable-context'));
    updateControls();
  };

  controls.play.addEventListener('click', play);
  controls.pause.addEventListener('click', pause);
  controls.replay.addEventListener('click', replay);
  controls.skip.addEventListener('click', skipToReview);

  reduceMotion.addEventListener('change', event => {
    pause();
    setBeat(event.matches ? beats.findIndex(beat => beat.id === 'reviewable-context') : 0);
    updateControls();
  });

  document.body.dataset.motionReady = 'true';
  setBeat(reduceMotion.matches ? beats.findIndex(beat => beat.id === 'reviewable-context') : 0, { announce: false });
  updateControls();

  if (!reduceMotion.matches) window.setTimeout(play, 720);

  window.__dlyInfrastructureDemo = {
    getBeat: () => beats[currentIndex].id,
    pause,
    play,
    replay,
    setBeat: id => {
      pause();
      const index = beats.findIndex(beat => beat.id === id);
      if (index >= 0) setBeat(index);
      updateControls();
    },
    skipToReview
  };
})();
