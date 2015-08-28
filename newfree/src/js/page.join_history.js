seajs.use(['$', 'handlebars'], function ($, Handlebars) {
$(function () {


    var $join_history = $('#join_history')
    var $join_historyloading = $('#join_historylistloading')
    var $win = $(window)
    var $doc = $(document)

    var join_historyTemplate = __inline('hbs/join_history.handlebars')

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