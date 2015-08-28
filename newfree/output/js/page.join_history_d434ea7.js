seajs.use(['$', 'handlebars'], function ($, Handlebars) {
$(function () {


    var $join_history = $('#join_history')
    var $join_historyloading = $('#join_historylistloading')
    var $win = $(window)
    var $doc = $(document)

    var join_historyTemplate = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"item\">\n    <div class=\"photo\">\n        <a href=\"/view/activity_detail.html?id="
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n            <img src=\""
    + alias3(((helper = (helper = helpers.photo_src || (depth0 != null ? depth0.photo_src : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"photo_src","hash":{},"data":data}) : helper)))
    + "\" class=\"ui-loading\" alt=\""
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" >\n        </a>\n    </div>\n    <div class=\"detail\">\n        <a class=\"title\" href=\"/view/activity_detail.html?id="
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a>\n        <div class=\"ui-grid\">\n            <div class=\"ui-grid-row\">\n                <div class=\"ui-grid-6\">\n                    <span class=\"iconfont\">&#xe611;</span>\n                    "
    + alias3(((helper = (helper = helpers.join || (depth0 != null ? depth0.join : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"join","hash":{},"data":data}) : helper)))
    + "人已报名\n                </div>\n                <div class=\"ui-grid-6\">\n                    <span class=\"iconfont\">&#xe603;</span>\n                    "
    + alias3(((helper = (helper = helpers.start_date || (depth0 != null ? depth0.start_date : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"start_date","hash":{},"data":data}) : helper)))
    + "\n                </div>\n            </div>\n            <div class=\"ui-grid-row\">\n                <div class=\"ui-grid-12\">\n                    <span class=\"iconfont\">&#xe604;</span>\n                    "
    + alias3(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"location","hash":{},"data":data}) : helper)))
    + "\n                </div>\n            </div>\n        </div>\n    </div>\n    <img src=\""
    + ((stack1 = ((helper = (helper = helpers.qrcode || (depth0 != null ? depth0.qrcode : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"qrcode","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\" alt=\"\" class=\"qrcode\"/>\n</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options;

  stack1 = ((helper = (helper = helpers.view || (depth0 != null ? depth0.view : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"view","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.view) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { return stack1; }
  else { return ''; }
},"useData":true})

    $win.on('scroll.updatejoin_history', function () {
        // 页面滚动到了底部
        if ($doc.scrollTop() >= $doc.height() - $win.height()) {
            getjoin_historyList()
        }
        
    })
    function getjoin_historyList () {
        if ($join_history.data('ajax-busy')) {
            return false
        }
        $join_history.data('ajax-busy', true)
        $join_historyloading.show()
        $.getJSON('/ajax/join_history_list.php', {
            p: $join_history.data('page')
        }).done(updatejoin_historyControl)
    }

    // 根据返回结果控制是否更新页面
    function updatejoin_historyControl (data) {
        $join_historyloading.hide()
        $join_history.data('ajax-busy', false)
        // 返回数据有内容才更新页码和更新页面
        // 如果第一次就返回空就提示没有内容
        if ($join_history.find('.item').length === 0 && data.view.length == 0) {
            $join_history.html('<div class="b-nodata">您还未报名任何活动！</div>')
        }
        if (data.view.length !== 0) {
            $join_history.data('page', $join_history.data('page') + 1)
            updatejoin_history(data)
        }
        else {
            $win.off('scroll.updatejoin_history')
        }
    }
    // 根据JSON更新参加过的活动列表
    function updatejoin_history (data) {
        $join_history.append($(join_historyTemplate(data)))
    }
    if (S.data.renderData.isLogin) {
        getjoin_historyList()
    }
    else {
        $join_history.html('<div class="b-nodata">请<a href="/view/login.html?pathname=/view/join_history.html">登录</a>后再查看此页面</div>')
    }
    
})
})