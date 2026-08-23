(() => {
  const locale = new URLSearchParams(window.location.search).get('lang') === 'ko' ? 'ko' : 'en';
  const isKorean = locale === 'ko';
  const COPY = {
    documentTitle: 'DLY · 인프라 데모',
    documentDescription: '스태프가 소유한 RTP 검토 주변의 출처 있는 맥락을 보여주는 예시 DLY 인프라 화면입니다.',
    scene: '장면',
    medicalSourceLabel: '부서',
    text: {
      '/ Infrastructure demo': '/ 인프라 데모',
      'RTP review context': 'RTP 검토 맥락',
      'Illustrative infrastructure workflow': '예시 인프라 워크플로우',
      'A decision rarely starts in one system.': '하나의 시스템에서 판단이 시작되는 경우는 드뭅니다.',
      'DLY organizes attributable operational context around a staff-owned review.': 'DLY는 스태프가 직접 검토하는 판단 주변의 출처 있는 운영 맥락을 정리합니다.',
      'Illustrative records only.': '예시 기록입니다.',
      'Not a medical recommendation.': '의학적 권고가 아닙니다.',
      'Four systems hold a piece of the same review moment.': '네 시스템이 같은 검토 순간의 일부를 각각 보유합니다.',
      'Medical context': '메디컬',
      'source': '출처',
      'Source': '출처',
      'Medical team': '메디컬 팀',
      'Case': '검토 ID',
      'RTP-017 · lower-limb recovery pathway': 'RTP-017 · 복귀 진행 단계',
      'Practice status': '팀 훈련 참여',
      'Controlled team integration': '제한된 팀 훈련 참여',
      'Restriction': '검토 조건',
      'Review before uncontrolled 5v5': '제한 없는 5대5 전 검토 필요',
      'Next review': '다음 확인',
      'Tue · 14:00': '화 · 14:00',
      'staff-entered': '기록 시각',
      'Tue · 12:18': '화 · 12:18',
      'Performance exposure': '퍼포먼스 노출',
      'Performance system': '퍼포먼스 시스템',
      'Session': '세션',
      'Controlled 4v4': '통제된 4대4',
      'Completed': '완료',
      '16 min': '16분',
      'recorded exposure': '기록된 노출',
      'Tue · 11:42': '화 · 11:42',
      'Team operations': '팀 운영',
      'Planned session': '계획된 세션',
      'Controlled 5v5': '통제된 5대5',
      'Planned exposure': '계획된 노출',
      '18 min': '18분',
      'planned work': '계획된 업무',
      'Tue · 13:15': '화 · 13:15',
      'Decision history': '판단 이력',
      'Review log': '검토 로그',
      'Last review': '마지막 검토',
      'Mon · 17:30': '월 · 17:30',
      'Outcome': '결과',
      'Staff-authored plan recorded': '스태프가 작성한 계획 기록됨',
      'Next checkpoint': '다음 확인 시점',
      'staff-owned': '스태프 소유',
      'No review context yet': '아직 검토 맥락 없음',
      'Next team exposure needs review.': '다음 팀 노출은 검토가 필요합니다.',
      'athlete': '선수',
      'time': '시간',
      'session': '세션',
      'Context ready': '맥락 준비됨',
      'RTP-017 / Next team exposure needs review': 'RTP-017 / 다음 팀 노출은 검토가 필요합니다',
      'Planned next exposure': '계획된 다음 노출',
      'Controlled 5v5 · 18 min': '통제된 5대5 · 18분',
      'Illustrative workflow · staff review pending': '예시 워크플로우 · 스태프 검토 대기',
      'Evidence': '근거',
      'Medical boundary': '메디컬 경계',
      'Medical team · Tue 12:18': '메디컬 팀 · 화 12:18',
      'Recent exposure': '최근 노출',
      'Controlled 4v4 · 16 min completed': '통제된 4대4 · 16분 완료',
      'Performance system · Tue 11:42': '퍼포먼스 시스템 · 화 11:42',
      'Team requirement': '팀 요구사항',
      'Controlled 5v5 · 18 min planned': '통제된 5대5 · 18분 예정',
      'Team operations · Tue 13:15': '팀 운영 · 화 13:15',
      'Staff decision': '스태프 판단',
      'Not set': '미설정',
      'Operational dashboard': '운영 대시보드',
      'preview': '미리보기',
      'RTP review': 'RTP 검토',
      'Review entry': '검토 항목',
      'Staff review pending': '스태프 검토 대기',
      'RTP-017 · Controlled 5v5': 'RTP-017 · 통제된 5대5',
      'Staff review': '스태프 검토',
      'Attributable evidence attached': '출처 있는 근거 연결됨',
      '3 sources': '출처 3개',
      'Decision': '판단',
      'Play': '재생',
      'Pause': '일시 정지',
      'Replay': '다시 재생',
      'Skip to review context': '검토 맥락으로 이동',
      'DLY role': 'DLY 역할',
      'Systems record work.': '시스템은 업무를 기록합니다.',
      'DLY makes the decision context reviewable.': 'DLY는 판단 맥락을 검토 가능하게 만듭니다.',
      'Staff make the decision.': '스태프가 판단합니다.'
    },
    attributes: {
      'Return to DLY RTP dashboard': 'DLY RTP 대시보드로 돌아가기',
      'Language': '언어 선택',
      'Infrastructure demo stage': '인프라 데모 장면',
      'Reviewable context packet prepared for the final motion scene': '마지막 모션 장면을 위해 준비된 검토 가능한 맥락 패킷',
      'Operational dashboard preview': '운영 대시보드 미리보기',
      'Operational dashboard review entry preview': '운영 대시보드 검토 항목 미리보기',
      'Infrastructure demo playback controls': '인프라 데모 재생 제어'
    },
    beats: {
      fragmentedInputs: { label: '분산된 입력', nodeState: '' },
      medicalBoundary: { label: '메디컬 맥락', nodeState: '' },
      recentExposure: { label: '최근 노출', nodeState: '' },
      teamRequirement: { label: '팀 요구사항', nodeState: '' },
      reviewMoment: { label: '검토 순간', nodeState: '' },
      connectContext: { label: 'DLY가 맥락을 연결', nodeState: '' },
      reviewableContext: { label: '검토 가능한 맥락', nodeState: '맥락 준비됨' },
      dashboardHandoff: { label: '대시보드로 전달', nodeState: '맥락 준비됨' }
    }
  };

  const localizeStaticContent = () => {
    if (!isKorean) return;
    document.documentElement.lang = 'ko';
    document.title = COPY.documentTitle;
    document.querySelector('meta[name="description"]')?.setAttribute('content', COPY.documentDescription);
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    textNodes.forEach(node => {
      const original = node.nodeValue;
      const key = original.trim();
      if (!COPY.text[key]) return;
      node.nodeValue = original.replace(key, COPY.text[key]);
    });
    document.querySelector('[data-source="medical"] .field-label')?.replaceChildren(COPY.medicalSourceLabel);
    const medicalRestriction = document.querySelector('[data-source="medical"] .field-row:nth-child(4) .field-value');
    if (medicalRestriction) {
      const reviewPhrase = document.createElement('span');
      reviewPhrase.className = 'keep-together';
      reviewPhrase.textContent = '전 검토 필요';
      medicalRestriction.replaceChildren('제한 없는 5대5 ', reviewPhrase);
    }
    const packetCase = document.querySelector('.packet-case');
    if (packetCase) {
      packetCase.replaceChildren('RTP-017 / 다음 팀 노출은', document.createElement('br'), '검토가 필요합니다');
    }
    document.querySelectorAll('[aria-label]').forEach(element => {
      const label = element.getAttribute('aria-label');
      if (COPY.attributes[label]) element.setAttribute('aria-label', COPY.attributes[label]);
    });
  };

  const stage = document.querySelector('.stage');
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

  if (!stage || !status || !node || !nodeState || !packet || !handoff || !caseLine || !matchingKeys) return;

  localizeStaticContent();
  const sourceLabels = isKorean
    ? { medical: '메디컬', performance: '퍼포먼스', team: '팀 운영', history: '판단 이력' }
    : { medical: 'medical', performance: 'performance', team: 'team operations', history: 'decision history' };
  sourcePanels.forEach(panel => {
    panel.dataset.sourceLabel = sourceLabels[panel.dataset.source];
  });
  document.querySelector('.brand').href = `./?lang=${locale}`;
  const activeLocaleLink = document.getElementById(`locale-${locale}`);
  const inactiveLocaleLink = document.getElementById(`locale-${locale === 'ko' ? 'en' : 'ko'}`);
  activeLocaleLink?.setAttribute('aria-current', 'page');
  inactiveLocaleLink?.removeAttribute('aria-current');

  const localeBeat = key => isKorean ? COPY.beats[key] : null;
  const fragmentedInputs = localeBeat('fragmentedInputs');
  const medicalBoundary = localeBeat('medicalBoundary');
  const recentExposure = localeBeat('recentExposure');
  const teamRequirement = localeBeat('teamRequirement');
  const reviewMoment = localeBeat('reviewMoment');
  const connectContext = localeBeat('connectContext');
  const reviewableContext = localeBeat('reviewableContext');
  const dashboardHandoff = localeBeat('dashboardHandoff');

  const beats = [
    {
      id: 'fragmented-inputs',
      label: fragmentedInputs?.label ?? 'Fragmented inputs',
      duration: 2500,
      sources: [],
      nodeState: fragmentedInputs?.nodeState ?? ''
    },
    {
      id: 'medical-boundary',
      label: medicalBoundary?.label ?? 'Medical context',
      duration: 4500,
      sources: ['medical'],
      nodeState: medicalBoundary?.nodeState ?? ''
    },
    {
      id: 'recent-exposure',
      label: recentExposure?.label ?? 'Recent exposure',
      duration: 4500,
      sources: ['medical', 'performance'],
      nodeState: recentExposure?.nodeState ?? ''
    },
    {
      id: 'team-requirement',
      label: teamRequirement?.label ?? 'Team requirement',
      duration: 4500,
      sources: ['medical', 'performance', 'team'],
      nodeState: teamRequirement?.nodeState ?? ''
    },
    {
      id: 'review-moment',
      label: reviewMoment?.label ?? 'Review moment',
      duration: 9000,
      sources: ['medical', 'performance', 'team', 'history'],
      nodeState: reviewMoment?.nodeState ?? '',
      subphase: {
        after: 4000,
        showCase: true
      }
    },
    {
      id: 'connect-context',
      label: connectContext?.label ?? 'DLY connects context',
      duration: 13000,
      sources: ['medical', 'performance', 'team', 'history'],
      nodeState: connectContext?.nodeState ?? '',
      subphase: {
        after: 8000,
        showKeys: true
      }
    },
    {
      id: 'reviewable-context',
      label: reviewableContext?.label ?? 'Reviewable context',
      duration: 13000,
      sources: ['medical', 'performance', 'team', 'history'],
      nodeState: reviewableContext?.nodeState ?? 'Context ready',
      subphase: {
        after: 8000,
      }
    },
    {
      id: 'dashboard-handoff',
      label: dashboardHandoff?.label ?? 'Dashboard handoff',
      duration: 7000,
      sources: ['medical', 'performance', 'team', 'history'],
      nodeState: dashboardHandoff?.nodeState ?? 'Context ready',
      subphase: {
        after: 4000,
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

  const updateControls = () => {
    controls.play.disabled = isPlaying;
    controls.pause.disabled = !isPlaying;
  };

  const updateStatus = () => {
    const position = String(currentIndex + 1).padStart(2, '0');
    status.innerHTML = `<strong>${isKorean ? COPY.scene : 'Scene'} ${position}</strong>`;
  };

  const setNodeState = value => {
    nodeState.textContent = value;
    nodeState.hidden = !value;
    node.setAttribute('aria-label', value ? `DLY, ${value}` : 'DLY');
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
    setNodeState(beat.nodeState);
    packet.setAttribute('aria-hidden', String(!packetVisible));
    handoff.setAttribute('aria-hidden', String(!handoffVisible));
    packet.style.visibility = packetVisible ? 'visible' : 'hidden';
    handoff.style.visibility = handoffVisible ? 'visible' : 'hidden';
    caseLine.classList.remove('is-visible');
    matchingKeys.classList.remove('is-visible');

    sourcePanels.forEach(panel => {
      panel.classList.toggle('is-revealed', beat.sources.includes(panel.dataset.source));
    });

    updateStatus();
    if (announce) status.setAttribute('aria-label', `${isKorean ? COPY.scene : 'Scene'} ${String(currentIndex + 1).padStart(2, '0')}`);

    if (beat.subphase) {
      subphaseTimer = window.setTimeout(() => {
        if (beat.subphase.showCase) caseLine.classList.add('is-visible');
        if (beat.subphase.showKeys) {
          matchingKeys.classList.add('is-visible');
          stage.dataset.ready = 'true';
        }
        if (beat.subphase.nodeState) setNodeState(beat.subphase.nodeState);
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
