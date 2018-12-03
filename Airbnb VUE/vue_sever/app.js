//使用express构建web服务器 --11:25
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const cors=require("cors");

/*引入路由模块*/
const index = require("./routes/index");
const user = require("./routes/user");
const pinglun = require("./routes/pinglun")
const details=require("./routes/houseDetails.js")

var app = express();
app.use(cors({
    origin:'http://localhost:8080',
    credentials:true
  }))
var server = app.listen(8000);
//使用body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }));
//托管静态资源到public目录下
app.use(express.static('public'));
// app.use(express.static('css'));
// app.use(express.static('js'));
// app.use(express.static('img_house'));
// app.use(express.static('touxiang'));

app.use(session({   //配置session中间件 请求中可使用req.session
    secret: '128位随机字符串',
    resave: false,
    cookie:{maxAge:60*1000*30},
    saveUninitialized: true,
}))
app.use(function (req, res, next) {
    　　res.header("Access-Control-Allow-Credentials", "true");
    　　res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    　　// res.header('Access-Control-Allow-Origin', '*');
    　　res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    　　res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    　　if (req.method == 'OPTIONS') {
    　　　　res.send(200); /*让options请求快速返回*/
    　　} else {
    　　　　next();
    　　}
})
/*使用路由器来管理路由*/
app.use("/index", index);
app.use("/user",user);
app.use("/pinglun",pinglun)
app.use("/lunbo",details)