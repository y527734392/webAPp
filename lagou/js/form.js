$(function() {
	//yanzheng
	function checkSelect(sel) {
        if (sel.val() != "") {
            sel.siblings('.error_tip').hide(100);
        } else {
            sel.siblings('.error_tip').show(100);
        }
		if(sel.val() != "0"){
			sel.get(0).style.color='#dcdcdc';
		}
    }

    function checkEmail(email) {
        var reg = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
        if (!reg.test($.trim(email))) {
            return false;
        } else {
            return true;
        }
    }

    function checkPsw(psw) {
        var len = $.trim(psw).length;
        if (len < 6 || len > 16) {
            return false;
        } else {
            return true;
        }
    }

    function checkPhone(phone) {
        var pattern = /(^1[3,4,5,7,8]{1}[0-9]{9}$)/;
        if (pattern.test($.trim(phone))) {
            return true;
        } else {
            return false;
        }
    }

    function checkText(name) {
        var len = name.length;
        if (len < 1 || len > 20) {
            return false;
        } else {
            return true;
        }
    }
    
    // con yanzheng
    $('[node-type="name"]').on('keyup change', function () {
        var name = $(this).val();
        if ($.trim(name) != '' && $.trim(name).length <= 20) {
            $(this).siblings('.error_tip').hide(100);
        } else {
            $(this).siblings('.error_tip').show(100);
        }
        checkStepBtn();
    });
    $('[node-type="companyName"]').on('keyup change', function () {
        var val = $(this).val();
        if ($.trim(val) != '' && $.trim(val).length <= 30) {
            $(this).siblings('.error_tip').hide(100);
        } else {
            $(this).siblings('.error_tip').show(100);
        }
        checkStepBtn();
    });
    $('[node-type="job"]').on('keyup change', function () {
        var val = $(this).val();
        if ($.trim(val) != '' && $.trim(val).length <= 30) {
            $(this).siblings('.error_tip').hide(100);
        } else {
            $(this).siblings('.error_tip').show(100);
        }
        checkStepBtn();
    });
    $('[node-type="year"]').change(function () {
        checkSelect($(this));
        checkStepBtn();
    });
	$('[node-type="email"]').on('keyup change', function () {
        var email = $(this).val();
        if ($.trim(email) != '' && checkEmail(email)) {
            $(this).siblings('.error_tip').hide(100);
        } else {
            $(this).siblings('.error_tip').show(100);
        }
        checkStepBtn();
    });

    $('[node-type="phone"]').on('keyup change', function () {
        var phone = $(this).val();
        if (phone != '' && checkPhone(phone)) {
            $(this).siblings('.error_tip').hide(100);
        } else {
            $(this).siblings('.error_tip').show(100);
        }
        checkStepBtn();
    });
	
	function checkStepBtn() {
        var _name = $('[node-type="name"]');
        var _companyName = $('[node-type="companyName"]');
        var _year = $('[node-type="year"]');
        var _job = $('[node-type="job"]');
        var _phone = $('[node-type="phone"]');
        var _email = $('[node-type="email"]');

        var phone = $.trim(_phone.val());
        var email = $.trim(_email.val());
        var name = $.trim(_name.val());
        var companyName = $.trim(_companyName.val());
        var year = $.trim(_year.val());
        var job = $.trim(_job.val());

        var error = false;
        if (name == '' || name.length > 20) {
            error = true;
        }
        if (companyName == '' || companyName.length > 30) {
            error = true;
        }
        if (job == '') {
            error = true;
        }
        if (year == '') {
            error = true;
        }
        if (phone == '') {
            error = true;
        } else if (!checkPhone(phone)) {
            error = true;
        }
        if (email == '') {
            error = true;
        } else if (!checkEmail(email)) {
            error = true;
        }
        if (error) {
            if (!$(".btn-step1").hasClass("disable")) {
                $(".btn-step1").addClass("disable");
            }
        } else {
            $(".btn-step1").removeClass("disable");
        }
    }
	
	
	var w = document.documentElement.clientWidth + 'px',
		h = document.documentElement.clientHeight + 'px';
	
	//click 提交
	$(".btn-step1").on('click', function () {

        if ($(this).hasClass("disable")) {
            //console.log("disable")
            return false;
        }

        var _name = $('[node-type="name"]');
        var _companyName = $('[node-type="companyName"]');
        var _year = $('[node-type="year"]');
        var _job = $('[node-type="job"]');
        var _phone = $('[node-type="phone"]');
        var _email = $('[node-type="email"]');

        var phone = $.trim(_phone.val());
        var email = $.trim(_email.val());
        var name = $.trim(_name.val());
        var companyName = $.trim(_companyName.val());
        var year = $.trim(_year.val());
        var job = $.trim(_job.val());

        var error = false;

        if (name == '' || name.length > 20) {
            _name.siblings('.error_tip').addClass("wrong").show(100);
            error = true;
        }
        if (companyName == '' || companyName.length > 30) {
            _companyName.siblings('.error_tip').addClass("wrong").show(100);
            error = true;
        }
        if (job == '') {
            error = true;
        }
        if (year == '') {
            error = true;
        }

        if (phone == '') {
            _phone.siblings('.error_tip').html('请填写手机号').show(100);
            error = true;
        } else if (!checkPhone(phone)) {
            _phone.siblings('.error_tip').html('无效手机号').show(100);
            error = true;
        }
        if (email == '') {
            _email.siblings('.error_tip').html('请填写邮箱').show(100);
            error = true;
        } else if (!checkEmail(email)) {
            _email.siblings('.error_tip').html('无效邮箱').show(100);
            error = true;
        }

        if (!error) {
            /*userData.name = name;
            userData.companyName = companyName;
            userData.year = year;
            userData.job = job;
            userData.email = email;
            userData.phone = phone;
            registActivity();
            // //返回step1的时候step2要求清空
            // $('[node-type="phone"]').val("").siblings('.error_tip').hide();
            // $('[node-type="email"]').val("").siblings('.error_tip').hide();

            gotoStep(3);*/
			$('#page5_form').get(0).className ='';
			$('#page5_form').addClass('fadeOutUpBig animated');
			setTimeout(function(){
				$('#page5_form').css({display:'none'});
				$('#page5_form').parent().css({display:'none'});
			},500)
			//var h = document.documentElement.clientHeight;
			$('#page5_form2').get(0).className ='';
			$('#page5_form2').addClass('fadeInRightBig animated');
			$('#page5_form2').css({height:h,'display':'block'});
        } else {

        }
		
		
    });
	
	
    //valid
    $('[node-type="password"]').on('keyup change', function () {
        var password = $.trim($(this).val());
        if (password != '' && checkPsw(password)) {
            $(this).siblings('.error_tip').hide(100);
        } else {
            $(this).siblings('.error_tip').show(100);
        }
        checkStep3Btn();
    });
    function checkStep3Btn() {
        if ($(this).hasClass("disable")) return false;

        var _password = $('[node-type="password"]');
        var password = $.trim(_password.val());
        var error = false;

        if (password == '' || password.length < 6 || password.length > 16) {
            error = true;
        } else if (password.length < 6 || password.length > 16) {
            error = true;
        }

        if (error) {
            if (!$(".btn-step3").hasClass("disable")) {
                $(".btn-step3").addClass("disable");
            }
        } else {
            $(".btn-step3").removeClass("disable");
        }
    }
	//click wancheng
	$('.btn-step3').on('click', function () {
        var _password = $('[node-type="password"]');
        var password = $.trim(_password.val());
        var error = false;

        if (password == '' || password.length < 6 || password.length > 16) {
            error = true;
        }

        if (!error) {
			$('.page_6').removeClass('fadeOutUpBig animated');
			$('.page_6').css({height:h,'display':'block',backgroundSize:w+' '+h,zIndex:12});	
			if($('.page_6').css('display') == 'block'){
				$('.page_6>div').css({'display':'block'});
				$('#page5_form2').hide();	
			}
		}
	});
	
	//click mima
	$('#page5_form2 .eye').click(function () {
        if ($(this).hasClass('openeye')) {
            $(this).removeClass('openeye');
            $(this).siblings('.r_psw').attr("type", "password");
        } else {
            $(this).addClass('openeye');
            $(this).siblings('.r_psw').attr("type", "text");
        }
    });
	
	
	// biaodan w<->h / animate
	var oPage5Form = document.getElementById('page5_form');
	var aPage5Inp = oPage5Form.getElementsByTagName('input');
	var oWorkYear = document.getElementById('workYear');
	oWorkYear.style.lineHeight = 52/960*parseInt(h)+'px';
	for(var i=0;i<aPage5Inp.length;i++){
		aPage5Inp[i].style.lineHeight = 52/960*parseInt(h)+'px';
		aPage5Inp[i].onblur = function(){
			window.scrollTo(1,0);	
		}
	}
	
	var oPage5Form2 = document.getElementById('page5_form2');
	var aPage5Inp2 = oPage5Form2.getElementsByTagName('input');
	for(var j=0;j<aPage5Inp2.length;j++){
		aPage5Inp2[j].style.lineHeight = 59/960*parseInt(h)+'px';
	}
	var oEyeh = 22/960*parseInt(h)+'px',
		oEyew = 35/960*parseInt(w)+'px';
	$('.eye').css({width:oEyew,height:oEyeh});
	
	//click page5_btn
	
	$('#page5_btn').on('click',function(){
		if($('.page_6').get(0).style.zIndex == 12){
			$('.page_6').removeClass('fadeOutUpBig animated');
			$('.page_6').css({height:h,'display':'block',backgroundSize:w+' '+h,zInde:12});	
			if($('.page_6').css('display') == 'block'){
				$('.page_6>div').css({'display':'block'});
				$('#page5_form2').hide();	
			}
			return;	
		}
		$('#page5_form').get(0).className ='';
		$('#page5_form').parent().show();
		$('#page5_form').css('display','block');	
		$('#page5_form').get(0).style.height = h;
		$('#page5_form').addClass('fadeInRightBig animated');
		
	})
	
	//click page5_close
	$('.page5_form_closeBtn').on('click', function(){
		//$(this).parent().hide();
		$(this).parent().get(0).className ='';
		$(this).parent().addClass('fadeOutUpBig animated');
		var _this = $(this)
		setTimeout(function(){
			_this.parent().css({display:'none'});
			_this.parent().parent().css({display:'none'});
		},500)
	});
	
	//click share_closebtn
	$('.page5_fenxiang_closeBtn').on('click', function(){
		$('#share_page').hide();
		//$(this).parent().hide();
		$(this).parent().get(0).className ='';
		$(this).parent().addClass('fadeOutUpBig animated page_6');
		var _this = $(this)
		setTimeout(function(){
			_this.parent().css({display:'none'});
			_this.parent().parent().css({display:'none'});
		},500)
		
	});
});