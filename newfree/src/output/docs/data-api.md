<!--#[/ajax/register.php]-->

 
注册
---------
- url: [/ajax/register.php](/ajax/register.php)
- type: `GET`

#### Request:
```js
{
    "email": "nimo@qq.com",
    "name": "nimo",
    "password": "123456",
    "password2": "123456",
    "_password2": "重复输入的密码"
}
```
#### Response:
**success:**  
```js
{
    "status": "success"
}
```
**error:**  
```js
{
    "status": "error",
    "msg": "Error detail"
}
```

 
<!--#[/ajax/wx_bind.php]-->

 
绑定微信
---------
- url: [/ajax/wx_bind.php](/ajax/wx_bind.php)
- type: `POST`

#### Request:
```js
{
    "email": "nimo@qq.com",
    "password": "123456"
}
```
#### Response:
**success:**  
```js
{
    "status": "success"
}
```
**error:**  
```js
{
    "status": "error",
    "msg": "Error detail"
}
```

 
<!--#[/ajax/login.php]-->

 
登录
---------
- url: [/ajax/login.php](/ajax/login.php)
- type: `POST`

#### Request:
```js
{
    "email": "nimo@qq.com",
    "password": "******"
}
```
#### Response:
**success:**  
```js
{
    "status": "success"
}
```
**error:**  
```js
{
    "status": "error",
    "msg": "Error detail"
}
```

 
<!--#[/ajax/user.php]-->

 
获取用户信息
---------
- url: [/ajax/user.php](/ajax/user.php)
- type: `GET`

#### Response:
**success:**  
```js
S.SERVER = {"USER":{"name":"nimo","id":2,"email":"mail@qq.com","avatar":"/dist/img/logo.png","_avatar":"用户头像"}}
```
**error:**  
```js
S.SERVER = {"USER":{}}
```

 
<!--#[/ajax/activity_list_official.php]-->

 
官方活动
---------
- url: [/ajax/activity_list_official.php](/ajax/activity_list_official.php)
- type: `GET`

#### Request:
```js
{
    "p": 2
}
```
#### Response:
**success:**  
```js
{
    "view": [
        {
            "photo_src": "http://dummyimage.com/320x200/000/fff&text=8",
            "id": 2,
            "title": "骨灰级元老讲述020小区无忧如何融到2000万美金",
            "join": 133,
            "_join": "报名人数",
            "bm": 1,
            "_bm": "是否允许报名",
            "type": 0,
            "start_date": "5月1日 16:00",
            "location": "上海市 静安区 淮海中路999号"
        },
        {
            "photo_src": "http://dummyimage.com/320x200/000/fff&text=8",
            "id": 1,
            "title": "骨灰级元老讲述020小区无忧如何融到2000万美金",
            "join": 133,
            "bm": 0,
            "_bm": "是否允许报名",
            "type": 1,
            "start_date": "5月1日 16:00",
            "location": "上海市 静安区 淮海中路999号"
        },
        {
            "photo_src": "http://dummyimage.com/320x200/000/fff&text=8",
            "id": 2,
            "title": "骨灰级元老讲述020小区无忧如何融到2000万美金",
            "join": 133,
            "type": 2,
            "start_date": "5月1日 16:00",
            "location": "上海市 静安区 淮海中路999号"
        }
    ]
}
```
**error:**  
```js
{
    "view": [
        
    ]
}
```

 
<!--#[/ajax/activity_detail.php]-->

 
/ajax/activity_detail.php
---------
- url: [/ajax/activity_detail.php](/ajax/activity_detail.php)
- type: `GET`

#### Request:
```js
{
    "id": 2
}
```
#### Response:
**success:**  
```js
{
    "main_photo": "http://dummyimage.com/600x400/000/fff",
    "_main_photo": "banner图",
    "title": "活动标题",
    "codepic": "http://service.freepa.cn/ajax/102.png",
    "bmxh": 23,
    "join": 12,
    "_join": "参加人数",
    "start_date": "12-12 10:12",
    "_start_data": "活动开始时间",
    "bm": 1,
    "type": 0,
    "_type": "活动状态分别是 0 1 2 未开始 正在进行 已结束",
    "location": "上海傻干山路 1203号",
    "_location": "活动举办地点",
    "money": "123",
    "_money": "报名费",
    "content": "<strong></strong>活动详情介绍，富文本编辑器生成的内容",
    "link_price": "?报名跳转链接",
    "is_join": true,
    "people": [
        {
            "xh": "1",
            "_xh": "自增的序号",
            "avatar": "http://dummyimage.com/600x400/000/fff",
            "id": "2",
            "name": "夜夜",
            "tag": [
                "运营",
                "合伙人"
            ],
            "_tag": "本人标签",
            "find_tag": "设计 投资者",
            "_find_tag": "择友标签",
            "introduction": "freepartner创始人、创业孵化、创投对接、free公众号策划运营、o2o社群运营、品牌策划、活动策划、众筹策划、人性漫画作者",
            "_introduction": "自我介绍",
            "job": "vghd",
            "_job": "职位",
            "company": "cfrvgr",
            "_company": "公司"
        },
        {
            "xh": "1",
            "_xh": "自增的序号",
            "avatar": "http://dummyimage.com/600x400/000/fff",
            "id": "2",
            "name": "夜夜",
            "tag": [
                "运营",
                "合伙人"
            ],
            "_tag": "本人标签",
            "find_tag": "设计 投资者",
            "_find_tag": "择友标签",
            "introduction": "freepartner创始人、创业孵化、创投对接、free公众号策划运营、o2o社群运营、品牌策划、活动策划、众筹策划、人性漫画作者",
            "_introduction": "自我介绍",
            "job": "vghd",
            "_job": "职位",
            "company": "cfrvgr",
            "_company": "公司"
        },
        {
            "xh": "1",
            "_xh": "自增的序号",
            "avatar": "http://dummyimage.com/600x400/000/fff",
            "id": "2",
            "name": "夜夜",
            "tag": [
                "运营",
                "合伙人"
            ],
            "_tag": "本人标签",
            "find_tag": "设计 投资者",
            "_find_tag": "择友标签",
            "introduction": "freepartner创始人、创业孵化、创投对接、free公众号策划运营、o2o社群运营、品牌策划、活动策划、众筹策划、人性漫画作者",
            "_introduction": "自我介绍",
            "job": "vghd",
            "_job": "职位",
            "company": "cfrvgr",
            "_company": "公司"
        },
        {
            "xh": "1",
            "_xh": "自增的序号",
            "avatar": "http://dummyimage.com/600x400/000/fff",
            "id": "2",
            "name": "夜夜",
            "tag": [
                "运营",
                "合伙人"
            ],
            "_tag": "本人标签",
            "find_tag": "设计 投资者",
            "_find_tag": "择友标签",
            "introduction": "freepartner创始人、创业孵化、创投对接、free公众号策划运营、o2o社群运营、品牌策划、活动策划、众筹策划、人性漫画作者",
            "_introduction": "自我介绍",
            "job": "vghd",
            "_job": "职位",
            "company": "cfrvgr",
            "_company": "公司"
        },
        {
            "xh": "1",
            "_xh": "自增的序号",
            "avatar": "http://dummyimage.com/600x400/000/fff",
            "id": "2",
            "name": "夜夜",
            "tag": [
                "运营",
                "合伙人"
            ],
            "_tag": "本人标签",
            "find_tag": "设计 投资者",
            "_find_tag": "择友标签",
            "introduction": "freepartner创始人、创业孵化、创投对接、free公众号策划运营、o2o社群运营、品牌策划、活动策划、众筹策划、人性漫画作者",
            "_introduction": "自我介绍",
            "job": "vghd",
            "_job": "职位",
            "company": "cfrvgr",
            "_company": "公司"
        },
        {
            "xh": "1",
            "_xh": "自增的序号",
            "avatar": "http://dummyimage.com/600x400/000/fff",
            "id": "2",
            "name": "夜夜",
            "tag": [
                "运营",
                "合伙人"
            ],
            "_tag": "本人标签",
            "find_tag": "设计 投资者",
            "_find_tag": "择友标签",
            "introduction": "freepartner创始人、创业孵化、创投对接、free公众号策划运营、o2o社群运营、品牌策划、活动策划、众筹策划、人性漫画作者",
            "_introduction": "自我介绍",
            "job": "vghd",
            "_job": "职位",
            "company": "cfrvgr",
            "_company": "公司"
        },
        {
            "xh": "1",
            "_xh": "自增的序号",
            "avatar": "http://dummyimage.com/600x400/000/fff",
            "id": "2",
            "name": "夜夜",
            "tag": [
                "运营",
                "合伙人"
            ],
            "_tag": "本人标签",
            "find_tag": "设计 投资者",
            "_find_tag": "择友标签",
            "introduction": "freepartner创始人、创业孵化、创投对接、free公众号策划运营、o2o社群运营、品牌策划、活动策划、众筹策划、人性漫画作者",
            "_introduction": "自我介绍",
            "job": "vghd",
            "_job": "职位",
            "company": "cfrvgr",
            "_company": "公司"
        },
        {
            "xh": "1",
            "_xh": "自增的序号",
            "avatar": "http://dummyimage.com/600x400/000/fff",
            "id": "2",
            "name": "夜夜",
            "tag": [
                "运营",
                "合伙人"
            ],
            "_tag": "本人标签",
            "find_tag": "设计 投资者",
            "_find_tag": "择友标签",
            "introduction": "freepartner创始人、创业孵化、创投对接、free公众号策划运营、o2o社群运营、品牌策划、活动策划、众筹策划、人性漫画作者",
            "_introduction": "自我介绍",
            "job": "vghd",
            "_job": "职位",
            "company": "cfrvgr",
            "_company": "公司"
        },
        {
            "xh": "1",
            "_xh": "自增的序号",
            "avatar": "http://dummyimage.com/600x400/000/fff",
            "id": "2",
            "name": "夜夜",
            "tag": [
                "运营",
                "合伙人"
            ],
            "_tag": "本人标签",
            "find_tag": "设计 投资者",
            "_find_tag": "择友标签",
            "introduction": "freepartner创始人、创业孵化、创投对接、free公众号策划运营、o2o社群运营、品牌策划、活动策划、众筹策划、人性漫画作者",
            "_introduction": "自我介绍",
            "job": "vghd",
            "_job": "职位",
            "company": "cfrvgr",
            "_company": "公司"
        },
        {
            "xh": "1",
            "_xh": "自增的序号",
            "avatar": "http://dummyimage.com/600x400/000/fff",
            "id": "2",
            "name": "夜夜",
            "tag": [
                "运营",
                "合伙人"
            ],
            "_tag": "本人标签",
            "find_tag": "设计 投资者",
            "_find_tag": "择友标签",
            "introduction": "freepartner创始人、创业孵化、创投对接、free公众号策划运营、o2o社群运营、品牌策划、活动策划、众筹策划、人性漫画作者",
            "_introduction": "自我介绍",
            "job": "vghd",
            "_job": "职位",
            "company": "cfrvgr",
            "_company": "公司"
        },
        {
            "xh": "1",
            "_xh": "自增的序号",
            "avatar": "http://dummyimage.com/600x400/000/fff",
            "id": "2",
            "name": "夜夜",
            "tag": [
                "运营",
                "合伙人"
            ],
            "_tag": "本人标签",
            "find_tag": "设计 投资者",
            "_find_tag": "择友标签",
            "introduction": "freepartner创始人、创业孵化、创投对接、free公众号策划运营、o2o社群运营、品牌策划、活动策划、众筹策划、人性漫画作者",
            "_introduction": "自我介绍",
            "job": "vghd",
            "_job": "职位",
            "company": "cfrvgr",
            "_company": "公司"
        },
        {
            "xh": "1",
            "_xh": "自增的序号",
            "avatar": "http://dummyimage.com/600x400/000/fff",
            "id": "2",
            "name": "夜夜",
            "tag": [
                "运营",
                "合伙人"
            ],
            "_tag": "本人标签",
            "find_tag": "设计 投资者",
            "_find_tag": "择友标签",
            "introduction": "freepartner创始人、创业孵化、创投对接、free公众号策划运营、o2o社群运营、品牌策划、活动策划、众筹策划、人性漫画作者",
            "_introduction": "自我介绍",
            "job": "vghd",
            "_job": "职位",
            "company": "cfrvgr",
            "_company": "公司"
        },
        {
            "xh": "1",
            "_xh": "自增的序号",
            "avatar": "http://dummyimage.com/600x400/000/fff",
            "id": "2",
            "name": "夜夜",
            "tag": [
                "运营",
                "合伙人"
            ],
            "_tag": "本人标签",
            "find_tag": "设计 投资者",
            "_find_tag": "择友标签",
            "introduction": "freepartner创始人、创业孵化、创投对接、free公众号策划运营、o2o社群运营、品牌策划、活动策划、众筹策划、人性漫画作者",
            "_introduction": "自我介绍",
            "job": "vghd",
            "_job": "职位",
            "company": "cfrvgr",
            "_company": "公司"
        }
    ],
    "summary": "<strong></strong>活动总结，富文本编辑器生成的内容",
    "gallery": [
        "http://dummyimage.com/600x400/000/fff",
        "http://dummyimage.com/600x400/000/fff",
        "http://dummyimage.com/600x400/000/fff",
        "http://dummyimage.com/600x400/000/fff",
        "http://dummyimage.com/600x400/000/fff",
        "http://dummyimage.com/600x400/000/fff",
        "http://dummyimage.com/600x400/000/fff",
        "http://dummyimage.com/600x400/000/fff",
        "http://dummyimage.com/600x400/000/fff",
        "http://dummyimage.com/600x400/000/fff",
        "http://dummyimage.com/600x400/000/fff"
    ]
}
```
**error:**  
```js
{
    "status": "error",
    "msg": "Error detail"
}
```

 
<!--#[/ajax/board.php]-->

 
/ajax/board.php
---------
- url: [/ajax/board.php](/ajax/board.php)
- type: `GET`

#### Response:
**error:**  
```js
{
    "status": "error",
    "msg": "Error detail"
}
```

 
<!--#[/ajax/join_history_list.php]-->

 
参加过的活动
---------
- url: [/ajax/join_history_list.php](/ajax/join_history_list.php)
- type: `GET`

#### Request:
```js
{
    "p": 2
}
```
#### Response:
**success:**  
```js
{
    "view": [
        {
            "photo_src": "http://dummyimage.com/320x200/000/fff&text=8",
            "id": 2,
            "title": "骨灰级元老讲述020小区无忧如何融到2000万美金",
            "join": 133,
            "_join": "报名人数",
            "start_date": "5月1日 16:00",
            "location": "上海市 静安区 淮海中路999号",
            "qrcode": "http://dummyimage.com/400x400/06c/fff?text=qrcode"
        },
        {
            "photo_src": "http://dummyimage.com/320x200/000/fff&text=8",
            "id": 2,
            "title": "骨灰级元老讲述020小区无忧如何融到2000万美金",
            "join": 133,
            "start_date": "5月1日 16:00",
            "location": "上海市 静安区 淮海中路999号",
            "qrcode": "http://dummyimage.com/400x400/06c/fff?text=qrcode"
        },
        {
            "photo_src": "http://dummyimage.com/320x200/000/fff&text=8",
            "id": 2,
            "title": "骨灰级元老讲述020小区无忧如何融到2000万美金",
            "join": 133,
            "start_date": "5月1日 16:00",
            "location": "上海市 静安区 淮海中路999号",
            "qrcode": "http://dummyimage.com/400x400/06c/fff?text=qrcode"
        }
    ]
}
```
**error:**  
```js
{
    "view": [
        
    ]
}
```

 
<!--#[/ajax/concat.php]-->

 
/ajax/concat.php
---------
- url: [/ajax/concat.php](/ajax/concat.php)
- type: `POST`

#### Response:
**success:**  
```js
{
    "status": "success"
}
```
**error:**  
```js
{
    "status": "error",
    "msg": "详细错误原因"
}
```

 
<!--#[/ajax/appoint.php]-->

 
/ajax/appoint.php
---------
- url: [/ajax/appoint.php](/ajax/appoint.php)
- type: `POST`

#### Response:
**success:**  
```js
{
    "status": "success"
}
```
**error:**  
```js
{
    "status": "error",
    "msg": "详细错误原因"
}
```

 
<!-- Created by www.nodeajax.org  -->