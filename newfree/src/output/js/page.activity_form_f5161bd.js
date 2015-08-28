seajs.use(['$', 'arale/validator/0.9.7/validator', 'arale/dialog/1.3.0/dialog', 'querystring'], function ($, Validator, Dialog, qs) {
 var $activityform = $('#activity-form')
    var $activityformBtn = $activityform.find('[type=submit]')
    var validator = new Validator({
        element: $activityform,
        autoSubmit: false,
        onFormValidated: function (err, results, element) {
            if (err) return
            $activityformBtn.prop('disabled', true)
            var url = $activityform.attr('action')
            var type = $activityform.attr('method')
            $.ajax(url, {
                type: type,
                data: $activityform.serializeArray(),
                dataType: 'json'
            }).done(function (data) {
                $activityformBtn.prop('disabled', false)
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
        element:'#micromessage',
        display:'微信号',
        required: true
    })
    validator.addItem({
        element:'#name',
        display:'姓名',
        required: true
    })
    validator.addItem({
        element:'#tel',
        display:'手机号',
        required: true
    })
    validator.addItem({
        element: '#email',
        display: '邮箱',
        required: true
    })
       validator.addItem({
        element: '#company',
        display: '公司名称',
        required: true
    })
       validator.addItem({
        element: '#job',
        display: '职位',
        required: true
    })
       validator.addItem({
        element: '#provide',
        display: '我能提供',
        required: true
    })
     validator.addItem({
        element: '#resource',
        display: '我需要的资源',
        required: true
    })
  })
