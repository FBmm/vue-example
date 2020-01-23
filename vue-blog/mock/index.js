const express = require('express')

var bodyParser = require('body-parser');//解析,用req.body获取post参数
const app = express()
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//     next();
// });

const result = {
    data: { role: '1', 'X_TOKEN': 'DACZZCWEER23DFSCHEJRYSD' },
}
app.post('/login', (req, res) => {
        // res.cookie('isVisit', 1, {maxAge: 60 * 1000, httpOnly: true}) // 该处是设置 cookie 与 httpOnly 
        
        const reqParams = req.body;
        console.log(reqParams)
        if (reqParams.username == 'admin' && reqParams.password == 'wq123') {
            result.code = 0;
            result.msg = '';
        } else {
            result.code = 1;
            result.msg = '密码错误';
        }
        res.send(result);
    }
)
app.listen(3000, () => console.log('Example app listening on port 3000!'))