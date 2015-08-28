seajs.use(['$', 'handlebars', 'handlebars-helper-is/0.0.4/index'], function ($, Handlebars, helperIs) {
	Handlebars.registerHelper('is', helperIs)
    var $official = $('#official')
    var $officialloading = $('#officiallistloading')
    var $win = $(window)
    var $doc = $(document)
    var officialTemplate = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"item item-"
    + ((stack1 = (helpers.is || (depth0 && depth0.is) || alias1).call(depth0,(depth0 != null ? depth0.type : depth0),0,{"name":"is","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.is || (depth0 && depth0.is) || alias1).call(depth0,(depth0 != null ? depth0.type : depth0),1,{"name":"is","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.is || (depth0 && depth0.is) || alias1).call(depth0,(depth0 != null ? depth0.type : depth0),2,{"name":"is","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\n    <!--<div class=\"photo\">\n        <a href=\"/view/activity_detail.html?id="
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n            <img src=\""
    + alias3(((helper = (helper = helpers.photo_src || (depth0 != null ? depth0.photo_src : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"photo_src","hash":{},"data":data}) : helper)))
    + "\" class=\"ui-loading\" alt=\""
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" >\n        </a>\n    </div>-->\n    <div class=\"detail\">\n        <a class=\"title\" href=\"/view/activity_detail.html?id="
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "\n        <div class=\"ui-grid\">\n            <div class=\"ui-grid-row\">\n            <div class=\"ui-grid-row\">\n                <div class=\"ui-grid-12 p-ui-list\">\n                    <span class=\"iconfont\">&#xe604;</span>\n                    "
    + alias3(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"location","hash":{},"data":data}) : helper)))
    + "\n                </div>\n            </div>\n                  <div class=\"ui-grid-3 p-ui-list\">\n                      <div class=\"prestart \">未开始</div>\n                        <div class=\"starting\">正在进行</div>\n                        <div class=\"started\">已结束</div>\n                  </div>\n                <div class=\"ui-grid-9 p-ui-list\">\n                    "
    + alias3(((helper = (helper = helpers.start_date || (depth0 != null ? depth0.start_date : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"start_date","hash":{},"data":data}) : helper)))
    + "\n                </div>\n                <!--\n                <div class=\"ui-grid-3 p-ui-list\">\n                    "
    + alias3(((helper = (helper = helpers.join || (depth0 != null ? depth0.join : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"join","hash":{},"data":data}) : helper)))
    + "人已报名\n                </div>\n                -->\n                         </a>\n            </div>\n        </div>\n    </div>\n</div>\n";
},"2":function(depth0,helpers,partials,data) {
    return "prestart";
},"4":function(depth0,helpers,partials,data) {
    return "starting";
},"6":function(depth0,helpers,partials,data) {
    return "started";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options;

  stack1 = ((helper = (helper = helpers.view || (depth0 != null ? depth0.view : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"view","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.view) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { return stack1; }
  else { return ''; }
},"useData":true})
    
    $win.on('scroll.updateOfficial', function () {
        // 页面滚动到了底部
        if ($doc.scrollTop() >= $doc.height() - $win.height()) {
            getOfficialList()
        }
        
    })
    function getOfficialList () {
        if ($official.data('ajax-busy')) {
            return false
        }
        $official.data('ajax-busy', true)
        $officialloading.show()
        $.getJSON('/ajax/activity_list_official.php', {
            p: $official.data('page')
        }).done(updateOfficialControl)
    }

    // 根据返回结果控制是否更新页面
    function updateOfficialControl (data) {
        $officialloading.hide()
        $official.data('ajax-busy', false)
        // 返回数据有内容才更新页码和更新页面
        if (data.view.length !== 0) {
            $official.data('page', $official.data('page') + 1)
            updateOfficial(data)
        }
        else {
            $win.off('scroll.updateOfficial')
        }
    }
    // 根据JSON更新官方活动列表
    function updateOfficial (data) {
        $official.append($(officialTemplate(data)))
    }

    // 页面打开时获取官方活动列表
    getOfficialList()

})