const express = require("express")
const router = express.Router()
const pool = require("../pool")

router.post("/signin", (req, res) => {    //登陆
    var uname = req.body.uname;
    var upwd = req.body.upwd;
    console.log(uname, upwd);
    pool.query(
      "select * from aby_user where uname=? and upwd=?",
      [uname, upwd],
      (err, result) => {
        if (err) console.log(err);
        res.writeHead(200, {
          "Content-type": "application/json;charset=utf-8", //防止中文乱码
          "Access-Control-Allow-Origin": "*"  //允许任意来源，即允许跨域请求
        });
        //console.log(result[0])
        if (result.length > 0) {
          var user = result[0]
          req.session.uid = user["uid"]
          req.session.uname = user["uname"]
          res.write(JSON.stringify({
            ok: 1,
            msg:"登陆成功"
          }))
        } else {
          res.write(JSON.stringify({
            ok: 0,
            msg: "用户名或密码错误！"
          }))
        }    //测试地址：http://localhost:3000/users/signin?uname=dingding&upwd=123456
        res.end();
      }
    )
  })
router.post("/regisiter",(req,res)=>{
  var uname = req.body.uname;
  var upwd = req.body.upwd;
  if(uname==""||upwd==""){
      res.send({code:400,msg:'用户名或者密码不能为空'});
      return;
  }
  var sql = "INSERT INTO aby_user VALUES(null,?,?)";
  pool.query(sql,[uname,upwd],(err,result)=>{
      if(err)console.log(err);
      if(result.affectedRows > 0){
          res.send({code:200,msg:'注册成功'})
      }else{
          res.send({code:300,msg:'注册失败'})
      }
  });
})
module.exports = router;