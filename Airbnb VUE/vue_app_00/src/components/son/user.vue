<template>
<div>
       <div id="regisiterDiv" class="reg">
        <div id="regDiv">
            <table id="regtable" cellspacing="0px" cellpadding="1px" align="center">
                <caption>
                    <h4>注册爱彼迎账号</h4>
                </caption>
                <tr>
                    <td align="left">已有账号?</td>
                    <td align="right">
                        <a href="" style="color:blue;">登录</a>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <input type="button" value="手机注册">
                    </td>
                </tr>
                <tr>
                    <td colspan="2" align="center">
                        <input type="button"  value="微信注册">
                    </td>
                </tr>
                <tr>
                    <td colspan="2" align="center">
                        <a href="#" style="color:#666;font-size:12px;">使用其他方式扫描</a>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <div id="loginDiv" class="reg" v-if="is_login">
        <div id="logDiv">
            <table id="logtable" cellspacing="0px" cellpadding="1px" align="left">
                <caption>
                    <h4>登录爱彼迎</h4>
                </caption>
                <tr>
                    <td align="left">
                        <span>还没有账号?</span>
                    </td>
                    <td align="right">
                        <a style="color:blue;" >注册</a>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" align="center">
                        <input type="button" value="微信登录">
                    </td>
                </tr>
                <tr>
                    <td colspan="2" align="center">
                        <input type="text" placeholder="手机号码/邮箱地址" class="uname" v-model="uname">
                    </td>
                </tr>
                <tr>
                    <td colspan="2" align="center">
                        <input type="text" placeholder="密码" class="upwd" v-model="upwd">
                    </td>
                </tr>
                <tr id="infoTd">
                    <td>
                        <input type="checkbox" value="记住我">记住我</td>
                    <td align="right">
                        <div id="forgword">
                            <a href="#" style="color:#03A9F4">手机动态密码登录</a>|
                            <a href="#" style="color:#03A9F4">忘记密码？</a>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" align="center">
                        <input type="button" value="登录" class="login" @click="login">
                    </td>
                </tr>
                <tr>
                    <td colspan="2" align="center">
                        <a href="#" style="color:#666;font-size:12px;">使用其他方式登录</a>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      uname: "",
      upwd: "",
      list: [],
      is_login:false
    };
  },
  methods: {
    show() {
      //$("#loginDiv").css("display", "block")
    },
    login() {
      this.axios
        .post(
          "/app/user/signin",
          Qs.stringify({
            uname: this.uname,
            upwd: this.upwd
          })
        )
        .then(res => {
          this.list = res.data;
          console.log(res.data);
          console.log("zi:"+this.uname);

          this.$emit("hide",this.uname)
          
        });
    },
     regist(){
        this.$http.post("http://localhost:8000/regist",{
        uname:this.uname,upwd:this.upwd
        }).then(res=>{
            this.$toast(res.data.msg);
        })
    },
  }
};
</script>
<style>
.my_nav {
  border-bottom: 1px solid #eee;
  width: 100%;
}
.my_img > div > img:hover {
  filter: brightness(140%);
}
._8tbpu3 {
  font-family: Airmoji_Standalone !important;
  font-weight: normal !important;
}
.reg{
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.75);
    position:fixed;
    top:0;
    left:0;
    /* display:none; */
    z-index: 999;
}
#regDiv{
    background:#FFF;
    border:1px solid #eee;
    position:relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    /* display: inline-block; */
    display:none;
}
#regtable{
    margin: 20px 50px;
}
#regDiv table td{
    padding:10px 0;
}
#regDiv table tr td>input{
    width:200px;
    height:40px;
    font-size:16px;
}
#regDiv table caption>h4{
    margin-bottom:20px;
}
#logDiv{
    background:#FFF;
    border:1px solid #eee;
    position:absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    display: inline-block;
    z-index: 999;
}
#logtable{
    margin: 20px 50px;
}
#logtable td{
    padding:10px 0;
}
#logDiv table tr input[type="button"]{
    width:300px;
    height:40px;
    font-size:16px;
}
#logDiv table tr input[type="text"]{
    width:300px;
    height:40px;
    border: 1px solid #9c9c9c;
    padding-left:8px;
    font-size:16px;
}
#logDiv #infoTd{font-size:12px;}
#logDiv table tr input[type="checkbox"]{
    margin-right: 5px;
    position: relative;
    top: 3px;
}
</style>
