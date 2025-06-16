$(function () {
    $('#pc_btn').on('click', function () {
  
      // ────────── 원래 있던 코드 시작 ──────────
      //Stop form submission & check the validation
      // e.preventDefault();
      
      // Variable declaration
      var error = false;
      const regex1 = /^[|가-힣a-zA-Z\s+]+$/;
      const regex  = /^[|0-9|]+$/;
      var regExp   = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var position = $('#pc_select').val();
      var name     = $('#pc_name').val();
      var phone    = $('#pc_phone').val();
      var message  = $('#message').val();
      var agree    = $('#agree12').is(':checked');
      
// PC 상담-폼 입력 요소
$('#pc_name, #pc_phone, #pc_select, #agree12')
  .on('click', function () {
    $(this).removeClass('error_input');
  });
        


        //  // Form field validation
        //  if(!regex1.test(name) || name.length<0 ){
        //     var error = true;
        //     $('#pc_name').addClass("error_input");
        //    alert("이름 입력을 확인하세요.");
        // }else{
        //     $('#pc_name').removeClass("error_input");
        // }

        if (agree == false){
            var error = true;
            $('#agree12').addClass("error_input");
            alert("개인정보동의를 확인하세요.");
        }else{
            $('#agree12').removeClass("error_input");
        }
        
        
        // If there is no validation error, next to process the mail function
        if(error == false){
           // Disable submit button just after the form processed 1st time successfully.
          
           $('#form_e12').prop("action", "https://docs.google.com/forms/u/0/d/e/1FAIpQLScjfBo-TLn94LZMHgsUg2e5oBpCXdHtj9WcMlvziZZ29LWKAw/formResponse");
           $('#pc_btn').text('전송 중');
           $('#pc_btn').css({background:"#000"});         
            $('.go_btn, #pc_btn').prop("disabled", false);
            $('#pc_btn').css({transition:"1s"});
            $('#pc_btn').css({color:"#fff"});
            $('#hidden_iframe12').attr("onload", "hoa2();");

        }
    });    

   

});


function dll2(){
     window.karrotPixel.track('SubmitApplication');
    alert("무료 상담 신청을 해주셔서 감사합니다. 빠른 안내 진행드리겠습니다");

    $('#pc_btn').text('신청완료');
    $('#pc_alert').text("신청이 완료 되었습니다.");
   hoa2();
}
 
function maxLengthCheck(object){
  if (object.value.length > object.maxLength){
    object.value = object.value.slice(0, object.maxLength);
  }    
}
 
function hoa2(){
    setTimeout( function(){
        alert("상담 신청이 완료되었습니다.");
        // $(window).scrollTop(0);
        window.location.href = './thanks.html';
      },1200);
    // $(window).scrollTop(0);
    //  window.location.reload();
  }
 
 function site1111(){
  //$('#mc-embedded-subscribe').click();
  

  window.location.reload();
 }


 function form_check1(){

    const regex2 = /^[가-힣]+$/;
    const regex = /^[|0-9|]+$/;
    var regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var position = $('#pc_select').val();
    // var id = $('#id-number').val();
    var name = $('#pc_name').val();
    // var email = $('#email').val();
    var phone = $('#pc_phone').val();
    var message = $('#message').val();
    var agree = $('#agree12').is(":checked");

    // if (license != null)
    // {

    if(regex2.test(name) && name.length > 1 )
    {
        if(phone.substr(0, 3) == "010" && phone.length ==11 && regex.test(phone))
        {

        // if(email.match(regExp) != null)
        // {
           
            // if(regex.test(id) && id.length == 2 && id >=24 && id <51)
            // {
            
                if( position != null )
                {
              
                    if (agree == true)
                    {
                        $('#pc_btn').css({transition:"1s"});
                       $('#pc_btn').prop("disabled", false);
                       $('#pc_btn').text("상담 신청");
                       $('#pc_alert').text("");
                       $('#pc_btn').css({transition:"1s"});
                       $('#pc_btn').css({background:"#AC9173"});
                       $('#pc_btn').css({border:"1px soild #fff"});
                       $('.go_btn, #pc_btn').css({cursor:"pointer"});
                    }
                    else
                    {
                        $('#pc_btn').css({transition:"1s"});
                        $('#pc_btn').prop("disabled", true);
                        $('#pc_alert').text("개인정보 동의를 확인하세요");
                        $('#pc_btn').css({color:"#fff"});
                        $('#pc_btn').css({background:"#000"});
                        $('#pc_btn').css({cursor:"default"});     
                    }
                    
                }
                else
                {
                    $('#pc_btn').css({transition:"1s"});
                    $('#pc_btn').prop("disabled", true);
                    $('#pc_alert').text("상담 유형을 확인하세요.");
                    $('#pc_btn').css({color:"#fff"});
                    $('#pc_btn').css({background:"#000"});
                    $('#pc_btn').css({cursor:"default"});     
                }
  
            // }
            // else if(id.length==0)
            //  {
            // $('#pc_btn').css({transition:"1s"});
            // $('#pc_btn').prop("disabled", true);
            // $('#pc_btn').text("나이를 입력하세요.");
            // $('#pc_btn').css({background:"#595959"});
            // $('#pc_btn').css({cursor:"default"});     
            // }
            // else 
            // {
            // $('#pc_btn').css({transition:"1s"});
            // $('#pc_btn').prop("disabled", true);
            // $('#pc_btn').text("24 ~ 50세까지 가능합니다.");
            // $('#pc_btn').css({background:"#595959"});
            // $('#pc_btn').css({cursor:"default"});     
            // }
           
        // }
        // else if(email.length>0)
        // {
        //     $('#pc_btn').css({transition:"1s"});
        //     $('#pc_btn').prop("disabled", true);
        //     $('#pc_btn').text("이메일 주소 입력을 확인하세요.");
        //     $('#pc_btn').css({background:"#595959"});
        //     $('#pc_btn').css({cursor:"default"});     
        // }
        // else
        // {
        //     $('#pc_btn').css({transition:"1s"});
        //     $('#pc_btn').prop("disabled", true);
        //     $('#pc_btn').text("이메일 주소를 입력하세요.");
        //     $('#pc_btn').css({background:"#595959"});
        //     $('#pc_btn').css({cursor:"default"});     
        // }

    }
    else if(phone.length==0)
     {
        $('#pc_btn').css({transition:"1s"});
        $('#pc_btn').prop("disabled", true);
        $('#pc_alert').text("전화번호 입력을 확인하세요.");
        $('#pc_btn').css({color:"#fff"});
        $('#pc_btn').css({background:"#000"});
        $('#pc_btn').css({cursor:"default"});    
    }
    else 
    {
        $('#pc_btn').css({transition:"1s"});
        $('#pc_btn').prop("disabled", true);
        $('#pc_alert').text("전화번호 입력을 확인하세요.");
        $('#pc_btn').css({color:"#fff"});
        $('#pc_btn').css({background:"#000"});
        $('#pc_btn').css({cursor:"default"});     
    }

    }
    else if(name.length>0)
    {
        $('#pc_btn').css({transition:"1s"});
        $('#pc_btn').prop("disabled", true);
        $('#pc_alert').text("성함 입력을 확인하세요.");
        $('#pc_btn').css({color:"#fff"});
        $('#pc_btn').css({background:"#000"});
        $('#pc_btn').css({cursor:"default"});     
    }
    else
    {
        $('#pc_btn').css({transition:"1s"});
        $('#pc_btn').prop("disabled", true);
        $('#pc_alert').text("성함 입력을 확인하세요.");
        $('#pc_btn').css({color:"#fff"});
        $('#pc_btn').css({background:"#000"});
        $('#pc_btn').css({cursor:"default"});     
    }
    // }
    // else
    // {
    //     $('#pc_btn').css({transition:"1s"});
    //     $('#pc_btn').prop("disabled", true);
    //     $('#pc_btn').text("자격증 종류를 선택하세요.");
    //     $('#pc_btn').css({background:"#595959"});
    //     $('#pc_btn').css({cursor:"default"});        
    // }
 }



  

$(function(){
 $('#pc_name,#agree12,#pc_phone,#pc_select').on("keyup click change",form_check1);
//  $('#name,#phone,#position,#id-number,#message,#license').bind("keyup click change",form_check1);
//  $('#license').bind("keyup click change",lic_pick);
})
