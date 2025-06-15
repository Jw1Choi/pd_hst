/* ==============================  main.js  ====================================
   모든 개별 <script> 블록을 하나로 합친 통합 파일입니다.                     
   HTML 에서는 <script src="/js/main.js" defer></script> 한 줄만 넣으면 됩니다.
=============================================================================*/

/*──────────────────────── 1. 모바일 내비 & 스크롤 헤더 ─────────────────────*/
(function(){
    function toggleMobile(){
      const panel   = document.getElementById('mobilePanel');
      const burger  = document.getElementById('hamburgerBtn');
      const nav     = document.getElementById('mainNav');
      const logoImg = document.getElementById('logoImg');
  
      panel.classList.toggle('show');
      burger.classList.toggle('open');
      nav.classList.toggle('menu-open', panel.classList.contains('show'));
  
      if(window.pageYOffset===0){
        logoImg.src = panel.classList.contains('show')
          ? logoImg.dataset.srcDark
          : logoImg.dataset.srcLight;
      }
    }
    window.toggleMobile = toggleMobile; // HTML onclick 사용을 위해 공개
  
    const nav     = document.getElementById('mainNav');
    const logoImg = document.getElementById('logoImg');
    let lastY     = window.pageYOffset;
  
    function onScroll(){
      const y = window.pageYOffset;
      if(y <= 0){
        nav.classList.add('transparent');
        nav.classList.remove('solid');
        logoImg.src = logoImg.dataset.srcLight;
      }else{
        nav.classList.remove('transparent');
        nav.classList.add('solid');
        logoImg.src = logoImg.dataset.srcDark;
        nav.classList.remove('menu-open');
        document.getElementById('hamburgerBtn').classList.remove('open');
        document.getElementById('mobilePanel').classList.remove('show');
      }
      if(y>lastY && y>50) nav.classList.add('hide');
      else                nav.classList.remove('hide');
      lastY = y;
    }
    window.addEventListener('scroll', onScroll, {passive:true});
    onScroll();
  })();
  
  /*──────────────────────── 2. 후기 마퀴 슬라이드 ────────────────────────────*/
  (function(){
    function initMarquee(row,{direction='left',speed=30}={}){
      const originals=[...row.children];
      originals.forEach(c=>row.appendChild(c.cloneNode(true)));
      const origW = originals.reduce((w,el)=>w+el.getBoundingClientRect().width+32,-32);
      const dir   = direction==='left'?-1:1;
      let pos=0,last=performance.now();
      function step(now){
        const dt=(now-last)/1000; last=now; pos+=dir*speed*dt;
        if(dir===-1 && Math.abs(pos)>=origW) pos+=origW;
        if(dir=== 1 && pos>=0)              pos-=origW;
        row.style.transform=`translateX(${pos}px)`;
        requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    window.addEventListener('DOMContentLoaded',()=>{
      const top    = document.querySelector('#loan-testimonials .top');
      const bottom = document.querySelector('#loan-testimonials .bottom');
      if(top)    initMarquee(top,{direction:'right',speed:30});
      if(bottom) initMarquee(bottom,{direction:'left', speed:30});
    });
  })();
  
  
  /*──────────────────────── 4. jQuery 기반 메뉴 토글 ─────────────────────────*/
  (function($){
    $(function(){
      $('.navi_btn').click(function(){
        $(this).toggleClass('on');
        $('.navi').stop().fadeToggle();
      });
      $('.lnb h3').click(function(){
        const naviTitle=$(this).next('ul');
        $(this).addClass('on');
        $('.lnb h3').not(this).removeClass('on');
        naviTitle.stop().slideDown();
        $('.lnb h3').next().not(naviTitle).slideUp();
      });
      $('.right_contact .left').click(function(){ $('.right_contact').toggleClass('on'); });
      $('.bottom_contact_mob .top_thumb').click(function(){ $('.bottom_contact_mob').toggleClass('on'); });
      $('.bottom_contact_mob .bottom_con .btn_list .close_btn').click(function(){ $('.bottom_contact_mob').removeClass('on'); });
    });
  })(jQuery);
  
  
  
  
  /*──────────────────────── 8. SAVE 그래프 애니메이션 ─────────────────────*/
  (function(){
    function animateGraphSAVE(){
      document.getElementById('saveGrayBar1').classList.add('animated');
      document.getElementById('saveGrayBar2').classList.add('animated');
      document.getElementById('saveBlueBar').classList.add('animated');
      animateCountSAVE('savePercentCount',0,50,800);
      animateCountSAVE('saveSubPercentCount',0,50,800);
      animateCountSAVE('saveFlagPercentCount',0,50,800);
    }
    function resetGraphSAVE(){
      document.getElementById('saveGrayBar1').classList.remove('animated');
      document.getElementById('saveGrayBar2').classList.remove('animated');
      document.getElementById('saveBlueBar').classList.remove('animated');
      document.getElementById('savePercentCount').textContent=0;
      document.getElementById('saveSubPercentCount').textContent=0;
      document.getElementById('saveFlagPercentCount').textContent=0;
    }
    function animateCountSAVE(id,start,end,duration){
      const obj=document.getElementById(id); let startTime=null;
      function step(ts){
        if(!startTime) startTime=ts;
        const progress=Math.min((ts-startTime)/duration,1);
        const value=Math.floor(progress*(end-start)+start);
        obj.textContent=value;
        if(progress<1) window.requestAnimationFrame(step); else obj.textContent=end;
      }
      window.requestAnimationFrame(step);
    }
    function isElementInViewportSAVE(el){
      const rect=el.getBoundingClientRect();
      return rect.top<window.innerHeight-100 && rect.bottom>100;
    }
    let saveGraphAnimated=false;
    function handleScrollSAVE(){
      const blueBar=document.getElementById('saveBlueBar'); if(!blueBar) return;
      if(isElementInViewportSAVE(blueBar)){
        if(!saveGraphAnimated){animateGraphSAVE(); saveGraphAnimated=true;}
      }else{
        if(saveGraphAnimated){resetGraphSAVE(); saveGraphAnimated=false;}
      }
    }
    window.addEventListener('scroll',handleScrollSAVE);
    window.addEventListener('load',handleScrollSAVE);
    window.addEventListener('resize',handleScrollSAVE);
  })();
  
  /*──────────────────────── 9. MTS 그래프 ─────────────────────────────────*/
  (function(){
    function animateGraphMTS(){
      document.getElementById('mtsGrayBar1').classList.add('animated');
      document.getElementById('mtsGrayBar2').classList.add('animated');
      document.getElementById('mtsRedBar').classList.add('animated');
      animateCountMTS('mtsPercentCount',0,120,800);
      animateCountMTS('mtsSubPercentCount',0,90,800);
      animateCountMTS('mtsFlagPercentCount',0,120,800);
    }
    function resetGraphMTS(){
      document.getElementById('mtsGrayBar1').classList.remove('animated');
      document.getElementById('mtsGrayBar2').classList.remove('animated');
      document.getElementById('mtsRedBar').classList.remove('animated');
      document.getElementById('mtsPercentCount').textContent=0;
      document.getElementById('mtsSubPercentCount').textContent=0;
      document.getElementById('mtsFlagPercentCount').textContent=0;
    }
    function animateCountMTS(id,start,end,duration){
      const obj=document.getElementById(id); let startTime=null;
      function step(ts){
        if(!startTime) startTime=ts;
        const progress=Math.min((ts-startTime)/duration,1);
        const value=Math.floor(progress*(end-start)+start);
        obj.textContent=value;
        if(progress<1) window.requestAnimationFrame(step); else obj.textContent=end;
      }
      window.requestAnimationFrame(step);
    }
    function isElementInViewportMTS(el){
      const rect=el.getBoundingClientRect();
      return rect.top<window.innerHeight-100 && rect.bottom>100;
    }
    let mtsGraphAnimated=false;
    function handleScrollMTS(){
      const redBar=document.getElementById('mtsRedBar'); if(!redBar) return;
      if(isElementInViewportMTS(redBar)){
        if(!mtsGraphAnimated){animateGraphMTS(); mtsGraphAnimated=true;}
      }else{
        if(mtsGraphAnimated){resetGraphMTS(); mtsGraphAnimated=false;}
      }
    }
    window.addEventListener('scroll',handleScrollMTS);
    window.addEventListener('load',handleScrollMTS);
    window.addEventListener('resize',handleScrollMTS);
  })();
  
  /*──────────────────────── 10. DSR 그래프 ───────────────────────────────*/
  (function(){
    function animateDSRCard(){
      document.getElementById('dsrBar1').classList.add('animated');
      document.getElementById('dsrBar2').classList.add('animated');
      animateCountDSR('ltvPercent',0,95,900);
      animateCountDSR('ltvBarPercent',0,95,900);
    }
    function resetDSRCard(){
      document.getElementById('dsrBar1').classList.remove('animated');
      document.getElementById('dsrBar2').classList.remove('animated');
      document.getElementById('ltvPercent').textContent=0;
      document.getElementById('ltvBarPercent').textContent=0;
    }
    function animateCountDSR(id,start,end,duration){
      const obj=document.getElementById(id); let startTime=null;
      function step(ts){
        if(!startTime) startTime=ts;
        const progress=Math.min((ts-startTime)/duration,1);
        const value=Math.floor(progress*(end-start)+start);
        obj.textContent=value;
        if(progress<1) window.requestAnimationFrame(step); else obj.textContent=end;
      }
      window.requestAnimationFrame(step);
    }
    function isDSRCardInView(){
      const bar=document.getElementById('dsrBar2'); if(!bar) return false;
      const rect=bar.getBoundingClientRect();
      return rect.top<window.innerHeight-80 && rect.bottom>80;
    }
    let dsrCardAnimated=false;
    function handleScrollDSR(){
      if(isDSRCardInView()){
        if(!dsrCardAnimated){animateDSRCard(); dsrCardAnimated=true;}
      }else{
        if(dsrCardAnimated){resetDSRCard(); dsrCardAnimated=false;}
      }
    }
    window.addEventListener('scroll',handleScrollDSR);
    window.addEventListener('load',handleScrollDSR);
    window.addEventListener('resize',handleScrollDSR);
  })();
  
  /*──────────────────────── 11. RATE 그래프 ──────────────────────────────*/
  (function(){
    function animateGraphRATE(){
      document.getElementById('rateGrayBar1').classList.add('animated');
      document.getElementById('rateGrayBar2').classList.add('animated');
      document.getElementById('rateBlueBar').classList.add('animated');
      animateCountRATE('ratePercentCount',0,3.2,800,true);
      animateCountRATE('rateSubPercentCount',0,1.3,800,true);
      animateCountRATE('rateFlagPercentCount',0,3.2,800,true);
    }
    function resetGraphRATE(){
      document.getElementById('rateGrayBar1').classList.remove('animated');
      document.getElementById('rateGrayBar2').classList.remove('animated');
      document.getElementById('rateBlueBar').classList.remove('animated');
      document.getElementById('ratePercentCount').textContent=0;
      document.getElementById('rateSubPercentCount').textContent=0;
      document.getElementById('rateFlagPercentCount').textContent=0;
    }
    function animateCountRATE(id,start,end,duration,isFloat){
      const obj=document.getElementById(id); let startTime=null;
      function step(ts){
        if(!startTime) startTime=ts;
        const progress=Math.min((ts-startTime)/duration,1);
        const value=progress*(end-start)+start;
        obj.textContent=isFloat?value.toFixed(1):Math.floor(value);
        if(progress<1){window.requestAnimationFrame(step);} else {
          obj.textContent=isFloat?end.toFixed(1):end;
        }
      }
      window.requestAnimationFrame(step);
    }
    function isElementInViewportRATE(el){
      const rect=el.getBoundingClientRect();
      return rect.top<window.innerHeight-100 && rect.bottom>100;
    }
    let rateGraphAnimated=false;
    function handleScrollRATE(){
      const blueBar=document.getElementById('rateBlueBar'); if(!blueBar) return;
      if(isElementInViewportRATE(blueBar)){
        if(!rateGraphAnimated){animateGraphRATE(); rateGraphAnimated=true;}
      }else{
        if(rateGraphAnimated){resetGraphRATE(); rateGraphAnimated=false;}
      }
    }
    window.addEventListener('scroll',handleScrollRATE);
    window.addEventListener('load',handleScrollRATE);
    window.addEventListener('resize',handleScrollRATE);
  })();
  
  /*──────────────────────── 12. ultra-steps 애니메이션 ───────────────────*/
  (function(){
    function isInViewUltraSteps(){
      const section=document.getElementById('ultra-steps'); if(!section) return false;
      const rect=section.getBoundingClientRect();
      return rect.top<window.innerHeight-80 && rect.bottom>60;
    }
    let animated=false;
    function animateUltraSteps(){
      const steps=document.querySelectorAll('#ultra-steps .ultrasteps__item');
      if(isInViewUltraSteps() && !animated){
        steps.forEach(el=>el.style.animationPlayState='running');
        animated=true;
      }else if(!isInViewUltraSteps() && animated){
        steps.forEach(el=>{el.style.animation='none'; void el.offsetWidth; el.style.animation='';});
        animated=false;
      }
    }
    window.addEventListener('scroll',animateUltraSteps);
    window.addEventListener('load',animateUltraSteps);
    window.addEventListener('resize',animateUltraSteps);
  })();
  
  /*============================  End of main.js  ============================*/
  
  (function(){
    const root = document.getElementById('main-slider-root');
    const permanentBgLayer = document.getElementById('permanent-bg-layer');
    if (!root) return;
  
    const s1 = root.querySelector('.main-slider-section1');
    const s2 = root.querySelector('.main-slider-section2');
    const bgImgs = root.querySelectorAll('.main-slider-bg img');
    const slides = root.querySelectorAll('.main-slider-list li');
    const texts = root.querySelectorAll('.slide-text');
    const fades = [...root.querySelectorAll('.fade-target')];
    const total = slides.length;
  
    let lastSlideReached = false;
    let permanentBackgroundActive = false;
    let prevScrollY = 0;
  
    const MAX_Y = 40, FADE_START = .65, FADE_END = 0, SCALE_MIN = .86, SCALE_MAX = 1;
    let curScale = SCALE_MIN, trgScale = SCALE_MIN, rafId = null, active = false;
    const states = Array.from({length: total}, () => ({op: 1, y: MAX_Y}));
  
    const lerp = (a, b, t) => a + (b - a) * t;
    const vh = () => window.innerHeight || document.documentElement.clientHeight;
  
    function initializeImages() {
      bgImgs.forEach((img, i) => {
        img.classList.remove('active', 'permanent-active');
        if (i === 0) {
          img.classList.add('active');
          img.style.transform = `scale(${curScale})`;
        }
      });
    }
  
    initializeImages();
    slides[0].classList.add('active');
    permanentBgLayer.classList.remove('active', 'permanent');
  
    function animate() {
      curScale = lerp(curScale, trgScale, 0.18);
      bgImgs.forEach(img => {
        if (img.classList.contains('active') || img.classList.contains('permanent-active')) {
          img.style.transform = `scale(${curScale})`;
        }
      });
  
      texts.forEach((el, i) => {
        const st = states[i];
        el.style.opacity = lerp(+el.style.opacity || 1, st.op, 0.25);
        const prev = +el.style.getPropertyValue('--ty') || 0;
        const ny = lerp(prev, st.y, 0.2);
        el.style.transform = `translateY(${ny}px)`;
        el.style.setProperty('--ty', ny);
      });
  
      rafId = requestAnimationFrame(animate);
    }
  
    function updateStates() {
      const viewH = vh(), y = window.scrollY;
      const scrollDirection = y > prevScrollY ? 'down' : 'up';
      prevScrollY = y;
  
      const s2Top = root.offsetTop + s2.offsetTop;
      const start = s2Top - viewH;
      const end = s2Top + viewH * 0.25;
  
      trgScale = (y < start) ? SCALE_MIN : (y > end) ? SCALE_MAX
                : SCALE_MIN + (SCALE_MAX - SCALE_MIN) * ((y - start) / (end - start));
  
      const rootRect = root.getBoundingClientRect();
      if (rootRect.top < viewH && rootRect.bottom > 0) {
        const idx = Math.min(total - 1, Math.max(0, Math.floor((y - s2Top + viewH / 2) / viewH)));
  
        if (idx === total - 1 && !lastSlideReached) {
          lastSlideReached = true;
          permanentBackgroundActive = true;
          permanentBgLayer.classList.add('active', 'permanent');
        } else if (idx !== total - 1 && scrollDirection === 'up' && lastSlideReached) {
          lastSlideReached = false;
          permanentBackgroundActive = false;
          permanentBgLayer.classList.remove('active', 'permanent');
        }
  
        slides.forEach((li, i) => li.classList.toggle('active', i === idx));
  
        if (!permanentBackgroundActive) {
          bgImgs.forEach((img, i) => {
            img.classList.toggle('active', i === idx);
            img.classList.remove('permanent-active');
          });
        } else {
          if (idx === total - 1) {
            bgImgs.forEach((img, i) => {
              img.classList.remove('active');
              if (i === total - 1) img.classList.add('permanent-active');
            });
          } else if (scrollDirection === 'up') {
            bgImgs.forEach((img, i) => {
              img.classList.toggle('active', i === idx);
              img.classList.remove('permanent-active');
            });
          }
        }
      }
  
      const totalHeight = root.offsetHeight;
      const scrollProgress = (y + viewH) - root.offsetTop;
      const endThreshold = totalHeight - viewH * 0.3;
  
      if (scrollProgress >= endThreshold && scrollDirection === 'down' && !permanentBackgroundActive) {
        permanentBackgroundActive = true;
        permanentBgLayer.classList.add('permanent');
        bgImgs.forEach((img, i) => {
          if (i === total - 1) img.classList.add('permanent-active');
        });
      }
  
      texts.forEach((_, i) => {
        const center = s2Top + viewH * i + viewH / 2;
        const dist = ((y + viewH / 2) - center) / viewH;
        if (dist < -FADE_START) states[i] = {op: 0, y: MAX_Y};
        else if (dist < -FADE_END) {
          const p = (dist + FADE_START) / (FADE_START - FADE_END);
          states[i] = {op: p, y: MAX_Y * (1 - p)};
        } else states[i] = {op: 1, y: 0};
      });
  
      root.classList.toggle('s1-out', s1.getBoundingClientRect().bottom < viewH / 2);
    }
  
    function setActive(on) {
      if (on === active) return;
      active = on;
      root.classList.toggle('inview', on);
  
      if (on) {
        window.addEventListener('scroll', updateStates, {passive: true});
        window.addEventListener('resize', updateStates);
        updateStates();
        rafId = requestAnimationFrame(animate);
      } else {
        window.removeEventListener('scroll', updateStates);
        window.removeEventListener('resize', updateStates);
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      }
    }
  
    function applyFade(rect, viewH) {
      const START_LINE = viewH;
      const SPAN = viewH * 0.7;
      const dist = START_LINE - rect.bottom;
      const ratio = dist <= 0 ? 0 : Math.min(0.7, dist / SPAN);
      fades.forEach(el => {
        if (permanentBackgroundActive && el.closest('#permanent-bg-layer')) return;
        el.style.opacity = Math.max(0, 1 - ratio);
      });
    }
  
    function checkPos() {
      const r = root.getBoundingClientRect();
      const v = vh();
  
      // ✅ 화면에 20% 이상 보일 경우 활성화 (모바일에서도 정밀)
      const visibleHeight = Math.min(r.bottom, v) - Math.max(r.top, 0);
      const thresholdRatio = 0.2;
      const isInView = visibleHeight > v * thresholdRatio;
  
      setActive(isInView);
  
      // clipping 처리
      const clipThreshold = v * 0.8;
      root.classList.toggle('clip', r.bottom <= clipThreshold);
  
      applyFade(r, v);
    }
  
    window.addEventListener('scroll', checkPos, {passive: true});
    window.addEventListener('resize', checkPos);
    document.addEventListener('DOMContentLoaded', () => {
      initializeImages();
      checkPos();
    });
    window.addEventListener('load', checkPos);
  })();
  
  
  (function(){
    function animateValue(id,endValue,duration){
      const el=document.getElementById(id); if(!el) return;
      let start=0,startTime=null;
      function step(ts){
        if(!startTime) startTime=ts;
        const progress=Math.min((ts-startTime)/duration,1);
        el.textContent=Math.floor(progress*endValue).toLocaleString('ko-KR');
        if(progress<1) requestAnimationFrame(step); else el.textContent=endValue.toLocaleString('ko-KR');
      }
      requestAnimationFrame(step);
    }
    let animPlayed=false;
    function handleScrollTrigger(){
      const meter=document.getElementById('ratePercent'); if(!meter) return;
      const rect=meter.getBoundingClientRect();
      const inView = rect.top<window.innerHeight*0.75 && rect.bottom>window.innerHeight*0.25;
      if(inView && !animPlayed){
        animateValue('savingCount',120,1200);
        animateValue('ratePercent',3.9,1000);
        animateValue('termCount',120,1200);
        animateValue('interestWon',17000,1500);
        animPlayed=true;
      }
      if(!inView && animPlayed && (rect.bottom<0 || rect.top>window.innerHeight)){
        document.getElementById('savingCount').textContent='0';
        document.getElementById('ratePercent').textContent='0';
        document.getElementById('termCount').textContent='0';
        document.getElementById('interestWon').textContent='0';
        animPlayed=false;
      }
    }
    window.addEventListener('scroll',handleScrollTrigger,{passive:true});
    window.addEventListener('load',handleScrollTrigger);
  })();
  
  
  /* ─── Super-cards ‘reveal-on-scroll’ (add at the very end of main.js) ─── */
  document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('#section-supercards .supercard');
  
    /** once-only IntersectionObserver → 성능 부담 ZERO  */
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show'); // ① 화면에 보이면 애니메이션
          obs.unobserve(entry.target);        // ② 한 번 실행 후 관찰 해제
        }
      });
    }, { threshold: 0.25 });
  
    cards.forEach(card => io.observe(card));
  });
  
  /* ─── Super-cards ‘reveal-on-scroll’ (add at the very end of main.js) ─── */
  document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('#section-supercards .supercard');
  
  /** once-only IntersectionObserver → 성능 부담 ZERO  */
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show'); // ① 화면에 보이면 애니메이션
        obs.unobserve(entry.target);        // ② 한 번 실행 후 관찰 해제
      }
    });
  }, { threshold: 0.25 });
  
  cards.forEach(card => io.observe(card));
  });
  
  
  document.addEventListener('DOMContentLoaded', function(){
    const slides = document.querySelectorAll('#slide-intro2 .slide');
    const indicators = document.querySelector('#slide-intro2 .indicators');
    const slider = document.querySelector('#slide-intro2 .slides');
  
    let current = 0,
        startX = 0,
        isDown = false,
        autoInterval;
  
    // [dot 생성]
    slides.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      indicators.appendChild(dot);
    });
  
    const dots = document.querySelectorAll('#slide-intro2 .dot');
  
    function startAuto() {
      autoInterval = setInterval(() => {
        goToSlide((current + 1) % slides.length, false);
      }, 5000);
    }
  
    function resetAuto() {
      clearInterval(autoInterval);
      startAuto();
    }
  
    function goToSlide(idx, manual = true) {
      // 모두 off
      slides[current].classList.remove('active');
      dots[current].classList.remove('active');
      current = idx;
      slides[current].classList.add('active');
      dots[current].classList.add('active');
      if (manual) resetAuto();
    }
  
    // dot 클릭 이벤트
    dots.forEach((dot, i) =>
      dot.addEventListener('click', () => goToSlide(i))
    );
  
    // 자동 슬라이드 시작
    startAuto();
  
    // 마우스 드래그
    slider.addEventListener('mousedown', e => {
      isDown = true; startX = e.clientX;
      slider.classList.add('grabbing');
    });
    slider.addEventListener('mouseup', e => {
      if (!isDown) return;
      const dx = e.clientX - startX;
      if (dx > 50)  goToSlide((current - 1 + slides.length) % slides.length);
      if (dx < -50) goToSlide((current + 1) % slides.length);
      isDown = false; slider.classList.remove('grabbing');
    });
    slider.addEventListener('mouseleave', () => {
      isDown = false; slider.classList.remove('grabbing');
    });
  
    // 터치 스와이프
    slider.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
    });
    slider.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - startX;
      if (dx > 50)  goToSlide((current - 1 + slides.length) % slides.length);
      if (dx < -50) goToSlide((current + 1) % slides.length);
    });
  });