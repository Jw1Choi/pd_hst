// ============================================
// mob-form-supabase.js
// loan_consultations 테이블로 모바일 폼 데이터 전송
// ============================================

// ──────────────────────────────────────────
// ⚠️  본인 Supabase 프로젝트 값으로 교체하세요
// ──────────────────────────────────────────
const SUPABASE_URL  = 'https://yiuioprceyuybwkgxmrm.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpdWlvcHJjZXl1eWJ3a2d4bXJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3NDM1MDIsImV4cCI6MjA5NDMxOTUwMn0.SkkBCH9avPMZu-LeBtdOh5zsppcRMvbnilj38CkHEZs';

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON);


// ── 모바일 폼 제출 ──
$(function () {

  // 기존 form submit 차단 (Google Forms action 제거)
  $('#form_e13').on('submit', function (e) {
    e.preventDefault();
  });

  $('#mob_btn').on('click', async function () {

    var agree = $('#agree13').is(':checked');

    if (agree === false) {
      alert('개인정보동의를 체크해주세요.');
      return;
    }

    // 버튼 상태 변경
    $('#mob_btn').text('전송 중...');
    $('#mob_btn').prop('disabled', true);
    $('.m_go_btn, #mob_btn').css({ background: '#000', color: '#fff', cursor: 'default' });

    // Supabase INSERT
    var { error } = await sb
      .from('loan_consultations')
      .insert([{
        job_type:      $('#mob_job_type').val(),
        collateral:    $('#mob_collateral').val(),
        loan_amount:   $('#mob_loan_amount').val(),
        loan_type:     $('#mob_select').val(),
        no_disqualify: $('#mob_no_disqualify').val(),
        recent_loan:   $('#mob_recent_loan').val(),
        name:          $('#mob_name').val().trim(),
        phone:         $('#mob_phone').val().trim(),
        call_time:     $('#mob_call_time').val(),
        message:       $('#mob_message').val() ? $('#mob_message').val().trim() : null,
        source:        'mobile 신청'
      }]);

    if (error) {
      console.error('Supabase error:', error);

      if (error.code === 'P0001') {
        alert('잠시 후 다시 시도해주세요. (1분 내 중복 신청 제한)');
      } else {
        alert('신청 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      }

      // 버튼 복원
      form_check2();
      return;
    }

    // 성공
    $('#mob_btn').text('신청이 완료되었습니다.');
    setTimeout(function () {
      alert('상담 신청이 완료되었습니다.');
      window.location.href = './thanks.html';
    }, 1200);
  });
});


// ── 실시간 유효성 검사 ──
function form_check2() {

  const nameRegex  = /^[가-힣]+$/;
  const phoneRegex = /^[0-9]+$/;

  var name         = $('#mob_name').val();
  var phone        = $('#mob_phone').val();
  var jobType      = $('#mob_job_type').val();
  var collateral   = $('#mob_collateral').val();
  var loanAmount   = $('#mob_loan_amount').val();
  var loanType     = $('#mob_select').val();
  var noDQ         = $('#mob_no_disqualify').val();
  var recentLoan   = $('#mob_recent_loan').val();
  var callTime     = $('#mob_call_time').val();
  var agree        = $('#agree13').is(':checked');

  // 이름 검증
  if (!nameRegex.test(name) || name.length < 2) {
    if (name.length > 0) {
      setMobBtn(true, '성함 입력을 확인하세요.');
    } else {
      setMobBtn(true, '성함을 입력하세요.');
    }
    return;
  }

  // 전화번호 검증
  if (!(phone.substr(0, 3) === '010' && phone.length === 11 && phoneRegex.test(phone))) {
    if (phone.length === 0) {
      setMobBtn(true, '전화번호를 입력하세요.');
    } else {
      setMobBtn(true, '전화번호 입력을 확인하세요.');
    }
    return;
  }

  // 직업종류
  if (jobType == null) {
    setMobBtn(true, '직업 종류를 선택하세요.');
    return;
  }

  // 담보여부
  if (collateral == null) {
    setMobBtn(true, '담보 여부를 선택하세요.');
    return;
  }

  // 희망대출금액
  if (loanAmount == null) {
    setMobBtn(true, '희망 대출금액을 선택하세요.');
    return;
  }

  // 대출유형
  if (loanType == null) {
    setMobBtn(true, '대출 유형을 선택하세요.');
    return;
  }

  // 신용회복/연체
  if (noDQ == null) {
    setMobBtn(true, '신용회복/연체를 선택하세요.');
    return;
  }

  // 최근대출유무
  if (recentLoan == null) {
    setMobBtn(true, '최근 대출 유무를 선택하세요.');
    return;
  }

  // 통화가능시간
  if (callTime == null) {
    setMobBtn(true, '통화 가능 시간을 선택하세요.');
    return;
  }

  // 개인정보 동의
  if (agree === false) {
    setMobBtn(true, '개인정보 동의를 해주세요.');
    return;
  }

  // 모든 검증 통과
  $('#mob_btn').css({ transition: '1s' });
  $('#mob_btn').prop('disabled', false);
  $('#mob_btn').text('무료 상담 신청하기');
  $('.m_go_btn').css({ transition: '1s' });
  $('.m_go_btn, #mob_btn').css({ background: '#ac9173', cursor: 'pointer' });
}

function setMobBtn(disabled, text) {
  $('#mob_btn').css({ transition: '1s' });
  $('#mob_btn').prop('disabled', disabled);
  $('#mob_btn').text(text);
  $('#mob_btn').css({ color: '#fff' });
  $('.m_go_btn, #mob_btn').css({ background: '#000', cursor: 'default' });
}


// ── 이벤트 바인딩 ──
$(function () {
  $(
    '#mob_name, #mob_phone, #mob_job_type, #mob_collateral, ' +
    '#mob_loan_amount, #mob_select, #mob_no_disqualify, ' +
    '#mob_recent_loan, #mob_call_time, #mob_message, #agree13'
  ).on('keyup click change', form_check2);
});