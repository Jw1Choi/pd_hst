// ============================================
// pc-form-supabase.js
// loan_consultations 테이블로 PC 폼 데이터 전송
// ============================================

// ──────────────────────────────────────────
// ⚠️  본인 Supabase 프로젝트 값으로 교체하세요
// ──────────────────────────────────────────
const SUPABASE_URL  = 'https://yiuioprceyuybwkgxmrm.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpdWlvcHJjZXl1eWJ3a2d4bXJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3NDM1MDIsImV4cCI6MjA5NDMxOTUwMn0.SkkBCH9avPMZu-LeBtdOh5zsppcRMvbnilj38CkHEZs';

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON);


// ── PC 폼 제출 ──
$(function () {

  // 기존 form submit 차단 (Google Forms action 제거)
  $('#form_e12').on('submit', function (e) {
    e.preventDefault();
  });

  // PC 상담-폼 입력 요소 에러 초기화
  $('#pc_name, #pc_phone, #pc_select, #pc_job_type, #pc_collateral, #pc_loan_amount, #pc_no_disqualify, #pc_recent_loan, #pc_call_time, #agree12')
    .on('click', function () {
      $(this).removeClass('error_input');
    });

  $('#pc_btn').on('click', async function () {

    var agree = $('#agree12').is(':checked');

    if (agree === false) {
      $('#agree12').addClass('error_input');
      alert('개인정보동의를 확인하세요.');
      return;
    } else {
      $('#agree12').removeClass('error_input');
    }

    // 버튼 상태 변경
    $('#pc_btn').text('전송 중');
    $('#pc_btn').css({ background: '#000', color: '#fff', transition: '1s' });
    $('.go_btn, #pc_btn').prop('disabled', true);

    // Supabase INSERT
    var { error } = await sb
      .from('loan_consultations')
      .insert([{
        job_type:      $('#pc_job_type').val(),
        collateral:    $('#pc_collateral').val(),
        loan_amount:   $('#pc_loan_amount').val(),
        loan_type:     $('#pc_select').val(),
        no_disqualify: $('#pc_no_disqualify').val(),
        recent_loan:   $('#pc_recent_loan').val(),
        name:          $('#pc_name').val().trim(),
        phone:         $('#pc_phone').val().trim(),
        call_time:     $('#pc_call_time').val(),
        message:       $('#pc_message').val() ? $('#pc_message').val().trim() : null,
        source:        'pc 플로팅 메뉴 신청'
      }]);

    if (error) {
      console.error('Supabase error:', error);

      if (error.code === 'P0001') {
        alert('잠시 후 다시 시도해주세요. (1분 내 중복 신청 제한)');
      } else {
        alert('신청 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      }

      // 버튼 복원
      form_check1();
      return;
    }

    // 성공
    $('#pc_btn').text('신청완료');
    $('#pc_alert').text('신청이 완료 되었습니다.');
    setTimeout(function () {
      alert('상담 신청이 완료되었습니다.');
      window.location.href = './thanks.html';
    }, 1200);
  });
});


// ── 실시간 유효성 검사 ──
function form_check1() {

  const regex2 = /^[가-힣]+$/;
  const regex  = /^[0-9]+$/;

  var name       = $('#pc_name').val();
  var phone      = $('#pc_phone').val();
  var jobType    = $('#pc_job_type').val();
  var collateral = $('#pc_collateral').val();
  var loanAmount = $('#pc_loan_amount').val();
  var loanType   = $('#pc_select').val();
  var noDQ       = $('#pc_no_disqualify').val();
  var recentLoan = $('#pc_recent_loan').val();
  var callTime   = $('#pc_call_time').val();
  var agree      = $('#agree12').is(':checked');

  // 이름 검증
  if (!regex2.test(name) || name.length < 2) {
    if (name.length > 0) {
      setPcBtn(true, '성함 입력을 확인하세요.');
    } else {
      setPcBtn(true, '성함 입력을 확인하세요.');
    }
    return;
  }

  // 전화번호 검증
  if (!(phone.substr(0, 3) === '010' && phone.length === 11 && regex.test(phone))) {
    if (phone.length === 0) {
      setPcBtn(true, '전화번호 입력을 확인하세요.');
    } else {
      setPcBtn(true, '전화번호 입력을 확인하세요.');
    }
    return;
  }

  // 직업종류
  if (jobType == null) {
    setPcBtn(true, '직업 종류를 선택하세요.');
    return;
  }

  // 담보여부
  if (collateral == null) {
    setPcBtn(true, '담보 여부를 선택하세요.');
    return;
  }

  // 희망대출금액
  if (loanAmount == null) {
    setPcBtn(true, '희망 대출금액을 선택하세요.');
    return;
  }

  // 대출유형
  if (loanType == null) {
    setPcBtn(true, '상담 유형을 확인하세요.');
    return;
  }

  // 신용회복/연체
  if (noDQ == null) {
    setPcBtn(true, '신용회복/연체를 선택하세요.');
    return;
  }

  // 최근대출유무
  if (recentLoan == null) {
    setPcBtn(true, '최근 대출 유무를 선택하세요.');
    return;
  }

  // 통화가능시간
  if (callTime == null) {
    setPcBtn(true, '통화 가능 시간을 선택하세요.');
    return;
  }

  // 개인정보 동의
  if (agree === false) {
    setPcBtn(true, '개인정보 동의를 확인하세요.');
    return;
  }

  // 모든 검증 통과
  $('#pc_btn').css({ transition: '1s' });
  $('#pc_btn').prop('disabled', false);
  $('#pc_btn').text('상담 신청');
  $('#pc_alert').text('');
  $('#pc_btn').css({ background: '#AC9173', border: '1px solid #fff' });
  $('.go_btn, #pc_btn').css({ cursor: 'pointer' });
}

function setPcBtn(disabled, alertText) {
  $('#pc_btn').css({ transition: '1s' });
  $('#pc_btn').prop('disabled', disabled);
  $('#pc_alert').text(alertText);
  $('#pc_btn').css({ color: '#fff', background: '#000', cursor: 'default' });
}


// ── 이벤트 바인딩 ──
$(function () {
  $(
    '#pc_name, #pc_phone, #pc_select, #pc_job_type, #pc_collateral, ' +
    '#pc_loan_amount, #pc_no_disqualify, #pc_recent_loan, ' +
    '#pc_call_time, #pc_message, #agree12'
  ).on('keyup click change', form_check1);
});