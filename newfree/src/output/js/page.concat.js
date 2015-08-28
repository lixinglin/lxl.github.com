seajs.use(["$", "arale/validator/0.9.7/validator", "arale/dialog/1.3.0/dialog", "querystring"],
function(e, a) {
    var t = e("#concat-form"),
    r = t.find("[type=submit]"),
    d = new a({
        element: t,
        autoSubmit: !1,
        onFormValidated: function(a) {
            if (!a) {
                r.prop("disabled", !0);
                var d = t.attr("action"),
                i = t.attr("method");
                e.ajax(d, {
                    type: i,
                    data: t.serializeArray(),
                    dataType: "json"
                }).done(function(e) {
                    r.prop("disabled", !1),
                    "error" === e.status && e.msg && alert(e.msg),
                    "success" === e.status && alert("提交成功")
                })
            }
        }
    });
    d.addItem({
        element: "#name",
        display: "姓名",
        required: !0
    }),
    d.addItem({
        element: "#tel",
        display: "电话",
        required: !0
    }),
    d.addItem({
        element: "#email",
        display: "邮箱",
        rule: "email",
        required: !0
    }),
    d.addItem({
        element: "#important",
        display: "注明",
        required: !0
    })
});