seajs.use(['$', 'handlebars', 'handlebars-helper-is/0.0.4/index'], function ($, Handlebars, helperIs) {
	Handlebars.registerHelper('is', helperIs)
    var $official = $('#official')
    var $officialloading = $('#officiallistloading')
    var $win = $(window)
    var $doc = $(document)
    var officialTemplate = __inline('hbs/activity_list.handlebars')
    
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