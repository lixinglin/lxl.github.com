// nodemon -w app.js app.js
function createJoinActPeople() {
    return {
        xh: "1",
        _xh: "自增的序号",
        avatar: "http://dummyimage.com/600x400/000/fff",
        id: "2",
        name: "夜夜",
        tag: ["运营", "合伙人"],
        _tag: "本人标签",
        find_tag: "设计 投资者",
        _find_tag: "择友标签",
        introduction: "freepartner创始人、创业孵化、创投对接、free公众号策划运营、o2o社群运营、品牌策划、活动策划、众筹策划、人性漫画作者",
        _introduction: "自我介绍",
          job:"vghd",
        _job:"职位",
          company:"cfrvgr",
        _company:"公司"
    }
}
var $ = require("nodeajax");
$.run({
    port: 18080,
    html: ["view", "examples"],
    "static": "./output",
    ajaxSettings: {
        timeout: 0
    }
}),
$.ajax("/ajax/register.php", {
    type: "get",
    title: "注册",
    data: {
        email: "nimo@qq.com",
        name: "nimo",
        password: "123456",
        password2: "123456",
        _password2: "重复输入的密码"
    }
}),
$.ajax("/ajax/wx_bind.php", {
    type: "post",
    title: "绑定微信",
    data: {
        email: "nimo@qq.com",
        password: "123456"
    }
}),
$.ajax("/ajax/login.php", {
    type: "post",
    title: "登录",
    data: {
        email: "nimo@qq.com",
        password: "******"
    },
    timeout: 1e3
});
var USER = {
    name: "nimo",
    id: 2,
    email: "mail@qq.com",
    avatar: "/dist/img/logo.png",
    _avatar: "用户头像"
};
$.ajax("/ajax/user.php", {
    type: "get",
    title: "获取用户信息"
}).success("S.SERVER = " + JSON.stringify({
    USER: USER
})).error("S.SERVER = " + JSON.stringify({
    USER: {}
})),
$.ajax("/ajax/activity_list_official.php", {
    type: "get",
    title: "官方活动",
    data: {
        p: 2
    }
}).done({
    view: [{
        photo_src: "http://dummyimage.com/320x200/000/fff&text=8",
        id: 2,
        title: "骨灰级元老讲述020小区无忧如何融到2000万美金",
        join: 133,
        _join: "报名人数",
        bm: 1,
        _bm: "是否允许报名",
        type: 0,
        start_date: "5月1日 16:00",
        location: "上海市 静安区 淮海中路999号"
    },
    {
        photo_src: "http://dummyimage.com/320x200/000/fff&text=8",
        id: 1,
        title: "骨灰级元老讲述020小区无忧如何融到2000万美金",
        join: 133,
        bm: 0,
        _bm: "是否允许报名",
        type: 1,
        start_date: "5月1日 16:00",
        location: "上海市 静安区 淮海中路999号"
    },
    {
        photo_src: "http://dummyimage.com/320x200/000/fff&text=8",
        id: 2,
        title: "骨灰级元老讲述020小区无忧如何融到2000万美金",
        join: 133,
        type: 2,
        start_date: "5月1日 16:00",
        location: "上海市 静安区 淮海中路999号"
    }]
}).error({
    view: []
}),
$.ajax({
    url: "/ajax/activity_detail.php",
    type: "get",
    data: {
        id: 2
    }
}).done({
    main_photo: "http://dummyimage.com/600x400/000/fff",
    _main_photo: "banner图",
    title: "活动标题",
    codepic:'http://service.freepa.cn/ajax/102.png',
    bmxh:23,
    join: 12,
    _join: "参加人数",
    start_date: "12-12 10:12",
    _start_data: "活动开始时间",
    bm:1,
    type: 0,
    _type: "活动状态分别是 0 1 2 未开始 正在进行 已结束",
    location: "上海傻干山路 1203号",
    _location: "活动举办地点",
    money: "123",
    _money: "报名费",
    content: "<strong></strong>活动详情介绍，富文本编辑器生成的内容",
    link_price: "?报名跳转链接",
    is_join: !0,
    people: [createJoinActPeople(), createJoinActPeople(), createJoinActPeople(), createJoinActPeople(), createJoinActPeople(), createJoinActPeople(), createJoinActPeople(), createJoinActPeople(), createJoinActPeople(), createJoinActPeople(), createJoinActPeople(), createJoinActPeople(), createJoinActPeople()],
    summary: "<strong></strong>活动总结，富文本编辑器生成的内容",
    gallery: ["http://dummyimage.com/600x400/000/fff", "http://dummyimage.com/600x400/000/fff", "http://dummyimage.com/600x400/000/fff", "http://dummyimage.com/600x400/000/fff", "http://dummyimage.com/600x400/000/fff", "http://dummyimage.com/600x400/000/fff", "http://dummyimage.com/600x400/000/fff", "http://dummyimage.com/600x400/000/fff", "http://dummyimage.com/600x400/000/fff", "http://dummyimage.com/600x400/000/fff", "http://dummyimage.com/600x400/000/fff"]
}),
$.ajax("/ajax/board.php", {
    type: "get",
    statusCode: [200, 404]
}).done(function() {
    return {
        avatar: "/dist/img/nimo.jpeg",
        name: $.Random.word(5),
        tel: "13641822222",
        wechat: "微信号",
        industry: "互联网",
        tag: "技术 营销",
        find_tag: "设计 投资者",
        introduction: "freepartner创始人、创业孵化、创投对接、free公众号策划运营、o2o社群运营、品牌策划、活动策划、众筹策划、人性漫画作者",
        people_id: 3,
        xh: 42
    }
}),
$.ajax("/ajax/join_history_list.php", {
    type: "get",
    title: "参加过的活动",
    data: {
        p: 2
    },
    timeout: 1e3
}).done({
    view: [{
        photo_src: "http://dummyimage.com/320x200/000/fff&text=8",
        id: 2,
        title: "骨灰级元老讲述020小区无忧如何融到2000万美金",
        join: 133,
        _join: "报名人数",
        start_date: "5月1日 16:00",
        location: "上海市 静安区 淮海中路999号",
        qrcode: "http://dummyimage.com/400x400/06c/fff?text=qrcode"
    },
    {
        photo_src: "http://dummyimage.com/320x200/000/fff&text=8",
        id: 2,
        title: "骨灰级元老讲述020小区无忧如何融到2000万美金",
        join: 133,
        start_date: "5月1日 16:00",
        location: "上海市 静安区 淮海中路999号",
        qrcode: "http://dummyimage.com/400x400/06c/fff?text=qrcode"
    },
    {
        photo_src: "http://dummyimage.com/320x200/000/fff&text=8",
        id: 2,
        title: "骨灰级元老讲述020小区无忧如何融到2000万美金",
        join: 133,
        start_date: "5月1日 16:00",
        location: "上海市 静安区 淮海中路999号",
        qrcode: "http://dummyimage.com/400x400/06c/fff?text=qrcode"
    }]
}).error({
    view: []
}),
$.ajax({
    url: "/ajax/concat.php",
    type: "post"
}).ok({
    status: "success"
}).error({
    status: "error",
    msg: "详细错误原因"
}),
$.ajax({
    url: "/ajax/appoint.php",
    type: "post"
}).ok({
    status: "success"
}).error({
    status: "error",
    msg: "详细错误原因"
})
