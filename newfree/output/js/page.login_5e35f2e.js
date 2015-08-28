seajs.use(['$', 'arale/validator/0.9.7/validator', 'arale/dialog/1.3.0/dialog', 'querystring'], function ($, Validator, Dialog, qs) {    
    var $loginform = $('#login-form')
    var $loginformsubmit = $loginform.find('[type=submit]')
    var validator = new Validator({
        element: $loginform,
        autoSubmit: false,
        onFormValidated: function (err, results, element) {
            if (err) return
            $loginformsubmit.prop('disabled', true)
            var url = $loginform.attr('action')
            var type = $loginform.attr('method')
            $.ajax(url, {
                type: type,
                data: $loginform.serializeArray(),
                dataType: 'json'
            }).done(function (data) {
                $loginformsubmit.prop('disabled', false)
                if (data.status === "error") {
                    if (data.msg) {
                        alert(data.msg)
                    }
                }
                if (data.status === 'success') {
                    if (qs.parse(location.search).id) {
                        location.href = '/view/activity_detail.html?id=' + qs.parse(location.search).id
                        return false
                    }
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
    validator.addItem({
        element: '#password',
        display: '密码',
        required: true,
        rule: 'minlength{min:6} maxlength{max:16}'
    })
    $('#registerBtn').on('click', function () {
        S.method.rememberthislink('/view/register.html')
        return false;
    })
})