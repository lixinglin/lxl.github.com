seajs.use(['$', 'arale/validator/0.9.7/validator', 'arale/dialog/1.3.0/dialog', 'querystring'], function ($, Validator, Dialog, qs) {
    /*$('.p-guest-two').click(function(){
    $('html,body').animate({scrollTop:'1500px'},1000);
    $('html,body').animate({scrollTop:$('.p-guest-form').offset().bottom},1000);
    })*/
     //获取窗口的高度
     var iWinHeight=$(window).height();
     //获取banner图的高度
     var iBannerHeight=$('#guest-banner').height();
     //如果窗口的高度大于banner图的高度
    if(iWinHeight>iBannerHeight){
     //div的高度设成与窗口高度一样
        $('#guest-banner').height(iWinHeight)
    }
    //单击按钮的时候
    $('#banner-btn').click(function(){
        //下面的表单往上滚动
            $('html,body').animate({scrollTop:$('#main-form').offset().top},1000);

    })
    var $guestform = $('#guest-form')
    var $guestformBtn = $guestform.find('[type=submit]')
    var validator = new Validator({
        element: $guestform,
        autoSubmit: false,
        onFormValidated: function (err, results, element) {
            if (err) return
            $guestformBtn.prop('disabled', true)
            var url = $guestform.attr('action')
            var type = $guestform.attr('method')
            $.ajax(url, {
                type: type,
                data: $guestform.serializeArray(),
                dataType: 'json'
            }).done(function (data) {
                $guestformBtn.prop('disabled', false)
                if (data.status === "error") {
                    if (data.msg) {
                        alert(data.msg)
                    }
                }
                if (data.status === 'success') {
                    alert('提交成功')
                }
            })
        }
    })
    validator.addItem({
        element:'#name',
        display:'姓名',
        required: true
    })
    validator.addItem({
        element:'#tel',
        display:'电话',
        required: true
    })
    validator.addItem({
        element:'#email',
        display:'邮箱',
        rule: 'email',
        required: true
    })
    validator.addItem({
        element: '#content',
        display: '内容',
        required: true
    })
  })
