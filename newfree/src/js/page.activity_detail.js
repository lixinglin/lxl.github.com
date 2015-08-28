seajs.use(['$','handlebars','querystring', 'handlebars-helper-is/0.0.4/index'], function ($, Handlebars, qs, helperIs) {
    Handlebars.registerHelper('is', helperIs)
    Handlebars.registerHelper('add', function(arg1, arg2) {
      return Number(arg1) + Number(arg2)
    });
    $.getJSON('/ajax/activity_detail.php', {
        id: qs.parse(location.search).id
    }, function (data) {

        var activity_detailTpl = __inline('hbs/activity_detail.handlebars')
        data.id = qs.parse(location.search).id
        data.user_id = S.SERVER.USER.id
        $('#act-detail').html(
            activity_detailTpl(data)
            ).removeClass('ui-loading')


              if(data.bm==0){
                        $(".join-link").css("display","none");
                        console.log("aaa");
            }
            if(data.bm==1){
                        $(".join-link").css("display","block");
                        console.log("bbb");
            }

          if(data.bmxh){
                        $("#p-code").show();
                    }
                    if(!data.bmxh){
                        $("#p-code").hide();
                     }


         $('#p-code').click(function(){
           var top=$(document).scrollTop();
           if(top!=0){
                    $(document).scrollTop(0,0);
          }

                    if (!S.data.renderData.isLogin) {
                            $('#p-sign').hide();
                            $("#p-codepic").hide();
                            $("#p-gray").hide();
                            alert("请先登录");
                         S.method.rememberthislink('/view/login.html');
                        return false;
                    }

                  if (S.data.renderData.isLogin) {
                        $('#p-sign').show();
                        $("#p-codepic").show();
                        $("#p-gray").show();
        }

        })
        $('#more-people').on('click', function () {
            var $peoplelist = $('#people-list')
            var $this = $(this)
            if ($peoplelist.hasClass('allshow')) {
                $this.html('更多 >>')
            }
            else {
                $this.html('收起 >>')
            }
            $peoplelist.toggleClass('allshow')

        })

        $('#join-link').on('click', function () {
            // 没有登录的用户先登录
            if (!S.data.renderData.isLogin) {
                S.method.rememberthislink('/view/login.html')
                return false
            }
        })
        var $tabs = $('#tab .tab')
        var $boxs = $('.s-tab-box')
        $tabs.on('click', function () {
            var $this = $(this)
            var index = $tabs.index($this)
            $boxs.hide().eq(index).show()
            $tabs.removeClass('tab-active').eq(index).addClass('tab-active')
        })
        // 将富文本内容的图片全部设置为100%
         $('.s-html img').width('100%')

$(function(){

})
                $('#p-sign').click(function(){
                $('#p-sign').hide();
                $("#p-codepic").hide();
                $("#p-gray").hide();
})
})
})