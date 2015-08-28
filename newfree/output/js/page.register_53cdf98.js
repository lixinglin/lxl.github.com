seajs.use(['$', 'arale/validator/0.9.7/validator'], function ($, Validator) {    
    var $registerform = $('#login-form')
    var $registerformsubmit = $registerform.find('[type=submit]')
    var validator = new Validator({
        element: $registerform,
        autoSubmit: false,
        onFormValidated: function (err, results, element) {
            if (err) return
            $registerformsubmit.prop('disabled', true)
            var url = $registerform.attr('action')
            var type = $registerform.attr('method')
            $.ajax(url, {
                type: type,
                data: $registerform.serializeArray(),
                dataType: 'json'
            }).done(function (data) {
                $registerformsubmit.prop('disabled', false)
                if (data.msg) {
                    alert(data.msg)
                }
                if (data.status === 'success') {
                    S.method.link()
                }
            })
        }
    })
    validator.addItem({ 
        element: '#email',
        display: '邮箱',
        required: true
    })
    // validator.addItem({ 
    //     element: '#name',
    //     display: '微信昵称',
    //     required: true
    // })
    validator.addItem({ 
        element: '#password',
        display: '密码',
        required: true,
        rule: 'minlength{min:6} maxlength{max:16}'
    })
    validator.addItem({ 
        element: '#password2',
        display: '重复密码',
        required: true,
        rule: 'confirmation{target: "#password"}'
    })

})
