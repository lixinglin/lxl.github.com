seajs.use(['$','handlebars','querystring'], function ($, Handlebars, qs) {
    var iPeople_id
    var $win = $(window)
    var $card = $('#card')
    var videoTpl = __inline("hbs/video.handlebars")
    var video = videoTpl({
        id: qs.parse(location.search).id || 'e015412lx6s',
        width: $win.width()-400,
        height: $win.height()
    })
    $('#iframebox').html(video)
    var cardtemplate = __inline("hbs/card.handlebars")
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