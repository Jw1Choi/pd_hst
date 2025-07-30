const mn = document.getElementById('menu');
mn.innerHTML = `

<nav id="mainNav" class="top-nav transparent">
  <div class="logo-group">
    <a href="./index.html"><img
      id="logoImg"
      src="./img/logo-white.png"
      data-src-light="./img/logo-white.png"
      data-src-dark="./img/logo-black.png"
      alt="Pinder"
    ></a>
    
  </div>

    <div class="menu">
      <a href="./car_loan.html">차량담보대출</a>
      <a href="./house-loan.html">주택담보대출</a>
      <a href="./mortgage-refinance.html">주담대 갈아타기</a>
      <!-- <a href="./interior-loan.html">인테리어 대출</a> -->
      <!-- <a href="./interior-loan.html">정부정책자금</a> -->
     <a href="./salary-loan.html">직장인대출</a>
     <a href="./debt-consolidation.html">채무통합</a>
     <a href="./expense-loan.html">생활비대출</a>
      <a href="./business-capital.html">사업자대출</a>
      <!-- <a href="./credit-card-loan.html">신용카드소지자대출</a> -->
     
    </div>

    <div class="right">
      <button class="phone-btn">전화 상담하기</button>
    </div>

    <button id="hamburgerBtn" class="hamburger" onclick="toggleMobile()">
      <span></span><span></span><span></span>
    </button>

    <div id="mobilePanel" class="mobile-panel">
    <a href="./car_loan.html">차량담보대출</a><a href="./house-loan.html">주택담보대출</a><a href="./mortgage-refinance.html">주담대 갈아타기</a>
    <!-- <a href="./interior-loan.html">인테리어 대출</a>  <a href="./interior-loan.html">정부정책자금</a> -->
      <a href="./salary-loan.html">직장인대출</a><a href="./debt-consolidation.html">채무통합</a><a href="./expense-loan.html">생활비대출</a>
      <a href="./business-capital.html">사업자대출</a><a href="./credit-card-loan.html">신용카드소지자대출</a>
      <!-- <div class="mobile-contact">
        <button class="phone-btn">전화 상담하기</button>
      </div> -->
    </div>
  </nav>


  <div id="privacy">
    <div id="privacyContent">
        <div class="titWrap">
            <span>개인정보취급방침</span>
            <i style="margin-top:-23px !important" class="ion-close-circled closeBtn"></i>
        </div>
        <div style="line-height:1.2" class="conWrap">
            개인정보취급방침<br><br>
            수집하는 개인정보의 항목<br>
            "플로스"는 적법하고 공정한 수단에 의해서만 개인정보를 수집하며, 회원가입약관 또는 개인정보의 제공, 활용 동의서의 내용에 대해 이용자의 개인정보를 수집하는 경우에 당해<br> 이용자가 동의함 또는 동의하지 않음 버튼을 클릭 하는 등의 이용자의 동의를 얻는 절차를 거칩니다.<br>
            <br>
            수집하는 개인정보 항목<br>
            회사는 회원가입, 상담, 서비스 신청 등등을 위해 아래와 같은 개인정보를 수집하고 있습니다.<br><br>
    
            ● 수집항목 : 이름 , 휴대전화번호 , 필요시기, 통화시간, 자격증신청종류 등 개인맞춤 서비스를 제공하기 위해 수집됩니다.<br>
            ● 개인정보 수집방법 : 홈페이지(회원가입.상담게시판.) , 전화를 통한 고객상담.<br>
            <br>
            개인정보의 수집 및 이용목적<br>
            회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.<br><br>
    
            ● 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산<br>
            콘텐츠 제공 , 금융거래 본인 인증 및 금융 서비스<br><br>
            ● 회원 관리<br>
            개인 식별 , 고지사항 전달<br><br>
            ● 마케팅 및 광고에 활용<br>
            이벤트 등 광고성 정보 전달<br><br>
    
            개인정보의 보유 및 이용기간><br>
            원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.<br><br>
    
            보존 항목 : 이름 , 휴대전화번호 , 필요시기, 직업구분, 대출신청종류 등.<br>
            보존 근거 : 고객의요청이 있을시 즉시폐기<br>
            보존 기간 : 3년<br><br>
    
            그리고 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.<br><br>
    
            소비자의 불만 또는 분쟁처리에 관한 기록 : 3년 (전자상거래등에서의 소비자보호에 관한 법률)<br>
            신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년 (신용정보의 이용 및 보호에 관한 법률)<br><br>
    
            개인정보의 파기절차 및 방법<br>
            회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.<br><br>
    
            ● 파기절차<br>
            회원님이 회원가입 등을 위해 입력하신 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기되어집니다.<br><br>
    
            별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유되어지는 이외의 다른 목적으로 이용되지 않습니다.<br><br>
    
            ● 파기방법<br>
            - 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.<br>
            - 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.<br><br>
    
            
            이용자 및 법정대리인의 권리와 그 행사방법<br>
            이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 가입해지를 요청할 수도 있습니다.<br><br>
    
            이용자들의 개인정보 조회,수정을 위해서는 '개인정보변경'(또는 '회원정보수정' 등)을 가입해지(동의철회)를 위해서는 "회원탈퇴"를 클릭하여 본인 확인 절차를 거치신 후 직접 열람, 정정 또는 탈퇴가 가능합니다.<br><br>
    
            혹은 개인정보관리책임자에게 서면, 전화 또는 이메일로 연락하시면 지체없이 조치하겠습니다.<br><br>
    
            귀하가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체없이 통지하여 정정이 이루어지도록 하겠습니다.<br><br>
    
            회사는 이용자의 요청에 의해 해지 또는 삭제된 개인정보는 "회사가 수집하는 개인정보의 보유 및 이용기간"에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.<br><br>
    
    
            개인정보에 관한 민원서비스<br>
            회사는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및 개인정보관리책임자를 지정하고 있습니다.<br>
            <br>
        귀하께서는 회사의 서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을 개인정보관리책임자 혹은 담당부서로 신고하실 수 있습니다. 회사는 이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다.<br><br>
    
            기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.<br>
            1.개인분쟁조정위원회 (https://www.1336.or.kr/1336)<br>
            2.정보보호마크인증위원회 (https://www.eprivacy.or.kr/02-580-0533~4)<br>
            3.대검찰청 인터넷범죄수사센터 (02-3480-3600)<br>
            4.경찰청 사이버테러대응센터 (https://www.ctrc.go.kr/02-392-0330)<br />
            <br />
        </div>
    </div>
</div>
	
`;

document.body.appendChild(mn.content);