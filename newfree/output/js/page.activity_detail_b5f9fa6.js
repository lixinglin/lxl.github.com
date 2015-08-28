seajs.use(['$','handlebars','querystring', 'handlebars-helper-is/0.0.4/index'], function ($, Handlebars, qs, helperIs) {
    Handlebars.registerHelper('is', helperIs)
    Handlebars.registerHelper('add', function(arg1, arg2) {
      return Number(arg1) + Number(arg2)
    });
    $.getJSON('/ajax/activity_detail.php', {
        id: qs.parse(location.search).id
    }, function (data) {

        var activity_detailTpl = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "                        <img alt=\"未开始\" class=\"status-photo\" src=\"/img/prestart.png\">\n";
},"3":function(depth0,helpers,partials,data) {
    return "                        <img alt=\"正在进行\" class=\"status-photo\" src=\"/img/starting.png\">\n";
},"5":function(depth0,helpers,partials,data) {
    return "                        <img alt=\"已结束\" class=\"status-photo\" src=\"/img/started.png\">\n";
},"7":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                        <li>\n                            <img src=\""
    + alias3(((helper = (helper = helpers.avatar || (depth0 != null ? depth0.avatar : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"avatar","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n                        </li>\n";
},"9":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <div class=\"item\">\n        <span class=\"sort\">"
    + alias3(((helper = (helper = helpers.xh || (depth0 != null ? depth0.xh : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"xh","hash":{},"data":data}) : helper)))
    + "</span>\n        <div class=\"ui-grid\">\n            <div class=\"ui-grid-row\">\n                <div class=\"ui-grid-3\">\n                    <img class=\"avatar\" src=\""
    + alias3(((helper = (helper = helpers.avatar || (depth0 != null ? depth0.avatar : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"avatar","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n                </div>\n                <div class=\"ui-grid-9\">\n                    <div class=\"title\">\n                            <div class=\"ui-grid-row\">\n                            <div class=\"ui-grid-4 label\">\n                                <span class=\"name\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n                            </div>\n                        </div>\n\n                         <div class=\"ui-grid-row\">\n                            <div class=\"ui-grid-4 label\">\n                                <span>公司：</span>\n                            </div>\n                            <div class=\"ui-grid-8\">\n                                "
    + alias3(((helper = (helper = helpers.company || (depth0 != null ? depth0.company : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"company","hash":{},"data":data}) : helper)))
    + "\n                            </div>\n                        </div>\n\n                        <div class=\"ui-grid-row\">\n                          <div class=\"ui-grid-4 label\">\n                                职位：\n                            </div>\n                            <div class=\"ui-grid-8\">\n                                "
    + alias3(((helper = (helper = helpers.job || (depth0 != null ? depth0.job : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"job","hash":{},"data":data}) : helper)))
    + "\n                            </div>\n                        </div>\n                        <div class=\"ui-grid-row\">\n                            <div class=\"ui-grid-4 label\">\n                                自我介绍：\n                            </div>\n                            <div class=\"ui-grid-8\">\n                                "
    + alias3(((helper = (helper = helpers.introduction || (depth0 != null ? depth0.introduction : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"introduction","hash":{},"data":data}) : helper)))
    + "\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n";
},"11":function(depth0,helpers,partials,data) {
    return "<!---->\n    <div class=\"b-nodata\">暂无参与人员</div>\n";
},"13":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "        "
    + ((stack1 = ((helper = (helper = helpers.summary || (depth0 != null ? depth0.summary : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"summary","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n";
},"15":function(depth0,helpers,partials,data) {
    return "    <div class=\"nodata\">还没有相关信息，请期待!</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, buffer = 
  "<img src=\""
    + alias3(((helper = (helper = helpers.main_photo || (depth0 != null ? depth0.main_photo : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"main_photo","hash":{},"data":data}) : helper)))
    + "\" alt=\"\" class=\"main-photo\">\n<div class=\"c-tab\" id=\"tab\">\n    <div class=\"ui-grid\">\n        <div class=\"ui-grid-row\">\n            <div class=\"ui-grid-4\">\n                <span class=\"tab tab-active\">\n                    通知\n                </span>\n            </div>\n\n            <div class=\"ui-grid-4\">\n                <span class=\"tab\">\n                    名单\n                </span>\n            </div>\n            <!--\n            <div class=\"ui-grid-4\">\n                <span class=\"tab\">\n                    图片\n                </span>\n            </div>\n            -->\n\n            <div class=\"ui-grid-4\">\n                <span class=\"tab\">\n                    总结\n                </span>\n            </div>\n\n        </div>\n    </div>\n</div>\n<div class=\"detail s-tab-box\">\n    <h1 class=\"title\">\n        "
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "\n    </h1>\n    <div class=\"ui-grid\">\n        <div class=\"ui-grid-row\">\n        <ul class=\"info\">\n                    <!--<li>\n                        <span class=\"iconfont\">&#xe611;</span>\n                "
    + alias3(((helper = (helper = helpers.join || (depth0 != null ? depth0.join : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"join","hash":{},"data":data}) : helper)))
    + "人已报名\n                    </li>\n                    -->\n                    <li>\n                        <span class=\"iconfont\">&#xe603;</span>"
    + alias3(((helper = (helper = helpers.start_date || (depth0 != null ? depth0.start_date : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"start_date","hash":{},"data":data}) : helper)))
    + "\n                    </li>\n                    <li>\n                        <span class=\"iconfont\">&#xe604;</span>"
    + alias3(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"location","hash":{},"data":data}) : helper)))
    + "\n                    </li>\n                    <li>\n                        <span class=\"iconfont\">&#xe621;</span>\n                        ￥"
    + alias3(((helper = (helper = helpers.money || (depth0 != null ? depth0.money : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"money","hash":{},"data":data}) : helper)))
    + "/人\n                    </li>\n                    <li class=\"status-wrap\">\n"
    + ((stack1 = (helpers.is || (depth0 && depth0.is) || alias1).call(depth0,(depth0 != null ? depth0.type : depth0),0,{"name":"is","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.is || (depth0 && depth0.is) || alias1).call(depth0,(depth0 != null ? depth0.type : depth0),1,{"name":"is","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.is || (depth0 && depth0.is) || alias1).call(depth0,(depth0 != null ? depth0.type : depth0),2,{"name":"is","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n                <li>\n               <div id=\"p-code\" class=\"p-border iconfont\" >&#xe605;报名二维码</div>\n                        <div id=\"p-gray\" class=\"p-gray\"></div>\n                </li>\n                </ul>\n                <div class=\"people\">\n                <div class=\"ui-grid sub-title\">\n                    <div class=\"ui-grid-row\">\n                      <!--  <div class=\"ui-grid-6\">\n                            已报名\n                        </div>\n                        <div class=\"ui-grid-6\">\n                            <div class=\"more\" id=\"more-people\">更多 >></div>\n                        </div>-->\n                    </div>\n                </div>\n\n                <!--<div class=\"list\">\n                    <ul class=\"fn-clear\" id=\"people-list\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.people : depth0),{"name":"each","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                    </ul>\n                </div>-->\n            </div>\n                <div class=\"content\">\n                    <div class=\"sub-title\">\n                        活动介绍\n                    </div>\n                    <div class=\"view s-html\">\n                        "
    + ((stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n                    </div>\n                </div>\n\n                <div id=\"p-sign\" class=\"p-sign\" >\n                         <div class=\"p-bm\">\n                                 <span class=\"p-signup\">您已报名成功</span><br>\n                                  <span class=\"p-signid\" >报名序号为 "
    + alias3(((helper = (helper = helpers.bmxh || (depth0 != null ? depth0.bmxh : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"bmxh","hash":{},"data":data}) : helper)))
    + "号</span></br>\n                        </div>\n                        <div class=\"p-codepic\" id=\"p-codepic\" data-url=\""
    + alias3(((helper = (helper = helpers.codepic || (depth0 != null ? depth0.codepic : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"codepic","hash":{},"data":data}) : helper)))
    + "\" >\n                                <img src=\""
    + alias3(((helper = (helper = helpers.codepic || (depth0 != null ? depth0.codepic : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"codepic","hash":{},"data":data}) : helper)))
    + "\"/>\n                          </div>\n                  </div>\n\n               </div>\n\n            </div>\n    </div>\n</div>\n\n<div class=\"peoplelist s-tab-box fn-clear\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.people : depth0),{"name":"each","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    ";
  stack1 = ((helper = (helper = helpers.people || (depth0 != null ? depth0.people : depth0)) != null ? helper : alias1),(options={"name":"people","hash":{},"fn":this.noop,"inverse":this.program(11, data, 0),"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.people) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n<div class=\"summary s-tab-box s-html\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.summary : depth0),{"name":"if","hash":{},"fn":this.program(13, data, 0),"inverse":this.program(15, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true})
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