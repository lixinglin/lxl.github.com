seajs.use(['$','handlebars','querystring'], function ($, Handlebars, qs) {
    var iPeople_id
    var $win = $(window)
    var $card = $('#card')
    var videoTpl = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<iframe class=\"p-iframe\" border=\"none\" style=\"border:none;width:"
    + alias3(((helper = (helper = helpers.width || (depth0 != null ? depth0.width : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"width","hash":{},"data":data}) : helper)))
    + "px;height:"
    + alias3(((helper = (helper = helpers.height || (depth0 != null ? depth0.height : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"height","hash":{},"data":data}) : helper)))
    + "px;\" src=\"http://v.qq.com/iframe/player.html?width="
    + alias3(((helper = (helper = helpers.width || (depth0 != null ? depth0.width : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"width","hash":{},"data":data}) : helper)))
    + "&height="
    + alias3(((helper = (helper = helpers.height || (depth0 != null ? depth0.height : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"height","hash":{},"data":data}) : helper)))
    + "&auto=1&vid="
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "&loop=true\"></iframe>";
},"useData":true})
    var video = videoTpl({
        id: qs.parse(location.search).id || 'e015412lx6s',
        width: $win.width()-400,
        height: $win.height()
    })
    $('#iframebox').html(video)
    var cardtemplate = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"banner\">\n    <div class=\"title\">本场报名序号："
    + alias3(((helper = (helper = helpers.xh || (depth0 != null ? depth0.xh : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"xh","hash":{},"data":data}) : helper)))
    + "</div>\n    <img src=\""
    + alias3(((helper = (helper = helpers.avatar || (depth0 != null ? depth0.avatar : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"avatar","hash":{},"data":data}) : helper)))
    + "\"  class=\"bg\">\n    <div class=\"avatar-2\">\n        <div class=\"avatar-1\">\n            <img src=\""
    + alias3(((helper = (helper = helpers.avatar || (depth0 != null ? depth0.avatar : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"avatar","hash":{},"data":data}) : helper)))
    + "\" class=\"avatar\">\n        </div>\n    </div>\n    <div class=\"name\">\n        "
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\n    </div>\n    <div class=\"ui-grid info\">\n        <div class=\"ui-grid-row\">\n            <div class=\"ui-grid-2 label\">\n                <span class=\"iconfont\">\n                    &#xe601;\n                </span>\n            </div>\n            <div class=\"ui-grid-10\">\n                "
    + alias3(((helper = (helper = helpers.tel || (depth0 != null ? depth0.tel : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"tel","hash":{},"data":data}) : helper)))
    + "\n            </div>\n        </div>\n        <div class=\"ui-grid-row\">\n            <div class=\"ui-grid-2 label\">\n                <div class=\"iconfont\">\n                    &#xe602;\n                </div>\n            </div>\n            <div class=\"ui-grid-10\">\n                "
    + alias3(((helper = (helper = helpers.wechat || (depth0 != null ? depth0.wechat : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"wechat","hash":{},"data":data}) : helper)))
    + "\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"detail\">\n    <div class=\"ui-grid\">\n        <div class=\"ui-grid-row\">\n            <div class=\"ui-grid-3 label\">\n                本人行业：\n            </div>\n            <div class=\"ui-grid-9\">\n                "
    + alias3(((helper = (helper = helpers.industry || (depth0 != null ? depth0.industry : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"industry","hash":{},"data":data}) : helper)))
    + "\n            </div>\n        </div>\n        <div class=\"ui-grid-row\">\n            <div class=\"ui-grid-3 label\">\n                本人标签：\n            </div>\n            <div class=\"ui-grid-9\">\n                "
    + alias3(((helper = (helper = helpers.tag || (depth0 != null ? depth0.tag : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"tag","hash":{},"data":data}) : helper)))
    + "\n            </div>\n        </div>\n        <div class=\"ui-grid-row\">\n            <div class=\"ui-grid-3 label\">\n                择友标签：\n            </div>\n            <div class=\"ui-grid-9\">\n                "
    + alias3(((helper = (helper = helpers.find_tag || (depth0 != null ? depth0.find_tag : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"find_tag","hash":{},"data":data}) : helper)))
    + "\n            </div>\n        </div>\n        <div class=\"ui-grid-row\">\n            <div class=\"ui-grid-3 label\">\n                自我介绍：\n            </div>\n            <div class=\"ui-grid-9\">\n                "
    + alias3(((helper = (helper = helpers.introduction || (depth0 != null ? depth0.introduction : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"introduction","hash":{},"data":data}) : helper)))
    + "\n            </div>\n        </div>\n    </div>\n</div>";
},"useData":true})
    function getInfo() {
        var callback = arguments.callee
        $.ajax('/ajax/board.php', {
            type: 'get',
            dataType: 'json',
            data: {
                act_key: qs.parse(location.search).act_key,
                people_id: iPeople_id
            }
        }).done(function (data) {
            // act_key 活动ID
            // people_id 显示的任务ID
            data.act_key = qs.parse(location.search).act_key
            $card.html(cardtemplate(data))
            iPeople_id = data.people_id
        })
        .always(function () {
            setTimeout(function() {
                callback()
            }, 10000)
        })
    }
    getInfo()

    
})