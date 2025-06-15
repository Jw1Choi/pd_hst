const footer = document.getElementById('footer_template');
footer.innerHTML = `


<footer id="footer-section">
  <div class="footer-inner">
    <div class="footer-top">
      <div class="footer-logo">
        <img src="./img/logo-black.png" alt="회사 로고" style="height: 42px;">
      </div>
    </div>

    <div class="footer-mid">
      <div class="footer-contact">
      <p><b>브랜드명</b>: Pinder</p>
        <p><b>은행명</b>: 페퍼저축은행</p>
      <p><b>주소</b>: 경기도 성남시 분당구 황새울로 340(서현동 262-1) 페퍼존빌딩</p>
      <p><b>대표번호</b>: 1599-0722</p>
      <p><b>연락처</b>: 개인 010-3600-7890 / 법인 1599-0722</p>
      <p><b>영업사원명</b>: 김기성</p>
      <p><b>수탁법인명</b>: 피투플러스</p>
      <p><b>금융업협회 등록번호</b>: 10-00050598</p>
      </div>
    </div>

    <div class="footer-disclaimer">
      <p><strong>대출금리</strong>: 연 ~20% 이내 (※ 담보대출에 한해 심사 기준에 따라 차등 적용)</p>
      <p><strong>연체이율</strong>: 연 ~20% 이내</p>
      <p><strong>중개수수료 없음</strong> (중개수수료를 요구하거나 받는 것은 <b>불법</b>이며, 일체 수수료를 받지 않습니다)</p>
      <p><strong>기타 부대비용 없음</strong> (취급수수료 없음)</p>
      <p><strong>상환방법</strong>: 원리금균등상환방식, 만기일시상환방식</p>
      <p><strong>이자 외 추가 비용 없음</strong> (단, 일부 담보대출에 한해 저당설정/해지비용 및 조기상환수수료 발생 가능)</p>
      <p><b>단, 이자와 조기상환 수수료의 합산액은 20%를 초과하지 않음</b></p>
      <p>본 사이트에서 광고되는 모든 상품은 <strong>상환기간 60일 이상</strong>, <strong>최장 120개월 미만</strong>입니다.</p>
      <p><strong>대출 총 비용 예시</strong>:<br>1,000,000원을 연 20% 이자율로 12개월 대출 시 총 상환금액은 <b>1,111,614원</b>입니다. (상품에 따라 달라질 수 있음)</p>
      <p><strong>근로자 안심대출 상담은 100% 무료</strong>이며 <strong>신용점수에 전혀 영향을 주지 않습니다</strong></p>
      <p><b>주의</b>: 과도한 대출은 신용등급 하락 및 재정적 부담을 초래할 수 있습니다</p>
    </div>

    <div class="footer-bottom">
      <p class="footer-copyright">
        Pinder Corp &copy; All rights reserved 2025
      </p>
    </div>
  </div>
</footer>


	
`;

document.body.appendChild(footer.content);