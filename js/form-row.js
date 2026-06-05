const form_template = document.getElementById('form');
form_template.innerHTML = `
<section id="form-pinder">
<div id="pinder-form-inner">
  <div class="gc-deco"></div>
  <div class="gc-header">
    <h2>신용도 영향 없는<br><span>무료 우대 한도 찾기</span></h2>
    <p>별도의 상담비용 없이 친절상담으로<br>최적의 상품을 제공합니다.</p>
  </div>

  <div class="gc-stepbar">
    <div class="gc-progress"><div class="gc-progress-fill"></div></div>
  </div>

  <form id="form_e11" name="frm_phonecall_web" action="" method="post" target="hidden_iframe11" onsubmit="dll(); submitted=true;"  class="gc-form" novalidate>
    <input type="hidden" name="entry.1351654586" value="본문 신청폼">  
    <input type="hidden" name="entry.1333144875" value="구글">  
    <div class="gc-row">
      <label><span>이름<span class="req">*</span></span>
        <input type="text" id="name" name="entry.930783489"  placeholder="성함을 입력해주세요." maxlength="4">
      </label>
      <label><span>연락처<span class="req">*</span></span>
        <input type="text" id="phone" name="entry.1125794908" placeholder="연락처를 입력해주세요." maxlength="11" required>
      </label>
    </div>

    <div class="gc-row">
      <label><span>상담분야<span class="req">*</span></span>
        <select  name="entry.150561892" id="intro_select" >
          <option selected disabled>대출 유형 선택</option>
          <option value="차량담보대출">차량담보대출</option>
          <option value="주택담보대출">주택담보대출</option>
          <option value="주담대 갈아타기">주담대 갈아타기</option>
          <option value="직장인대출">직장인대출</option>
          <option value="채무통합">채무통합</option>
          <option value="생활비대출">생활비대출</option>
          <option value="사업자대출">사업자대출</option>
          <option value="신용카드소지자대출">신용카드소지자대출</option>
        </select>
      </label>
      <!-- <label class="gc-inline"><span>희망상담일자</span>
        <input type="date">
      </label> -->
    </div>

    <div class="gc-row gc-full">
      <label><span>상담내용</span>
        <textarea name="entry.1551010081" id="message" placeholder="상담하고 싶은 내용을 남겨주세요."></textarea>
      </label>
    </div>

    <div class="gc-row gc-footer">
      <label class="gc-consent">
        <input type="checkbox" name="agree_r1" id="agree11" checked>
        개인정보 수집·이용에 동의합니다.<span class="req">*</span>
        
      </label>
      <span class="privacyBtn" style="color:black;font-weight:400; font-size: 13px;margin-top:-3px;cursor:pointer; " onclick="privacyPopUp()">
        [개인정보취급방침]
    </span>
      <input type="submit" id="send_message" class="gc-button" value="무료 상담 신청하기">
    </div>
  </form>
</div>
</section>
  

<script src="./js/jquery-1.8.3.min.js"></script>
  
<section id="floating-menu">
<div class="bottom_contact pc_img">
    <div class="inner clfix">
        <div class="title">
          <a > 
<span class="tit" style="color:#fff;">신용도 영향 없는</span></a>
            <span class="tel"><a>무료 한도 조회</a><img src="./img/click_icon.png" alt="" class="click_img"></span>
        </div><!-- // title -->
        <div class="input_wrap">
            <form id="form_e12" name="frm_phonecall_web" action="" method="post" target="hidden_iframe12" onsubmit="dll2(); submitted2=true;">
                <input type="hidden" name="entry.1351654586"  value="pc 플로팅 메뉴 신청">

                <ul class="clfix">
                    <li>
                        <span>성명</span>
                        <input type="text" id="pc_name" name="entry.930783489" >
                    </li>
                    <li>
                        <span>연락처</span>
                        <input type="text"  id="pc_phone" name="entry.1125794908" maxlength="11">
                    </li>
                    <li>
        <select name="entry.150561892" id="pc_select" class="select2">
          <option selected disabled>대출 유형 선택</option>
          <option value="차량담보대출">차량담보대출</option>
          <option value="주택담보대출">주택담보대출</option>
          <option value="주담대 갈아타기">주담대 갈아타기</option>
          <option value="직장인대출">직장인대출</option>
          <option value="채무통합">채무통합</option>
          <option value="생활비대출">생활비대출</option>
          <option value="사업자대출">사업자대출</option>
          <option value="신용카드소지자대출">신용카드소지자대출</option>
                                                                
            
        </select>
                    </li>
                </ul><!-- // clfix -->
    <div class="b_check check_bar">
      <input type="checkbox" checked name="policy_agree" value="1" id="agree12" style="display:inline;appearance: auto;margin-left: 40px;">
      <span style="color:#fff;">개인정보 수집 및 이용 동의</span>  <span class="privacyBtn" style="color:fff;font-weight:400; font-size: 13px;margin-top:-3px;cursor:pointer; " onclick="privacyPopUp()">
        [개인정보취급동의]
    </span><span id="pc_alert" style="margin-left:40px;color:#fff;font-size:13px;"></span>
     
      
    </div>
           
        </div><!-- // input_wrap -->
        <div class="go_btn">
            <button id="pc_btn" disabled>상담 신청</button>
        </div>
    </div><!-- // inner -->
</div><!-- // bottom_contact -->
</form>

<div class="bottom_contact_mob mob_img">
    <div class="top_thumb">
<div class="title">
  <a ></a>
  <a  style="display:contents;width:100%;max-width:300px;"> <img src="./img/click_icon.png" alt="" class="click_img">
  <span class="tit">신용 영향 없는</span>
  <span class="tel">30초 무료 한도 조회</span></a>
</div><!-- // title -->
<div class="btn">
  <a href="javascript:void(0)" style="font-size:0.9rem;border-radius:10px;">무료 상담</a>
</div><!-- // btn -->
    </div><!-- // top_thumb -->
    <div class="bottom_con" style="margin-top:-16px;">
        <div class="inner">
            <form name="frm_phonecall_mob" id="form_e13" method="post" target="hidden_iframe13" onsubmit="dll3(); submitted3=true;">
              <input type="hidden" name="entry.1351654586"  value="mobile 신청">
                <ul class="in_wrap clfix">
                    <li>
                        <span>성명</span>
                        <input type="text" class="r_input" name="entry.930783489"  id="mob_name">
                    </li>
                    <li>
                        <span>연락처</span>
                        <input type="text" class="r_input wr_tel" name="entry.1125794908" maxlength="11" id="mob_phone">
                    </li>
                    <li>
        <select name="entry.150561892" id="mob_select" class="select3">
          <option selected disabled>대출 유형 선택</option>
          <option value="차량담보대출">차량담보대출</option>
          <option value="주택담보대출">주택담보대출</option>
          <option value="주담대 갈아타기">주담대 갈아타기</option>
          <option value="직장인대출">직장인대출</option>
          <option value="채무통합">채무통합</option>
          <option value="생활비대출">생활비대출</option>
          <option value="사업자대출">사업자대출</option>
          <option value="신용카드소지자대출">신용카드소지자대출</option>
                                                                        
                                                               
        
        </select>
                    </li>
                </ul><!-- // clfix -->
    <div class="b_check">
      <input type="checkbox" checked name="policy_agree" value="1" id="agree13" style="display: inline;">
      <span>개인정보 수집 및 이용 동의</span>  <span class="privacyBtn" style="color:fff;font-weight:400; font-size: 13px;margin-top:-3px;cursor:pointer; " onclick="privacyPopUp()">
        [개인정보취급동의]
    </span>
    </div>
                <div class="m_go_btn">
                    <button  id="mob_btn" style="color:#fff;width:100%;font-size:1em;padding: 15px 10px;
    border-radius: 10px;background: #000;" disabled>상담신청</button>
                </div>
            </form>
            <script type="text/javascript">var submitted = false;</script>
            <iframe name="hidden_iframe11" id="hidden_iframe11" style="display:none;" onload=""></iframe>
            <script type="text/javascript">var submitted2 = false;</script>
            <iframe name="hidden_iframe12" id="hidden_iframe12" style="display:none;" onload=""></iframe>

            
<script type="text/javascript">var submitted3 = false;</script>
<iframe name="hidden_iframe13" id="hidden_iframe13" style="display:none;" onload=""></iframe>
        </div><!-- // inner -->
    </div><!-- // bottom_con -->
</div><!-- // bottom_contact_mob -->
</section>
`;

document.body.appendChild(form_template.content);