<template>
<div>
<header>
    <div id="my_header">
        <a href="#">
            <span class="house_header">人民币</span>
        </a>
        <a href="#">
            <span class="house_header">手机端</span>
        </a>
        <a href="#">
            <span class="house_header">发布房源/体验</span>
        </a>
        <a href="#">
            <span class="house_header">故事</span>
        </a>
        <a href="#">
            <span class="house_header">赚取旅行基金</span>
        </a>
        <a href="#">
            <span class="house_header">帮助</span>
        </a>
        <a href="#" @click="regist">
            <span class="house_header">注册</span>
        </a>
        <a href="#" class="deng" @click="signin" v-if="!isLogin">
            <span class="house_header">登录</span>
        </a>
        <a href="#" class="user_name house_header" v-if="isLogin">Welcome <span id="uname" >{{uname}}</span></a>
        <!--<a id="btnSignout" href="javascript:;">注销</a>-->
    </div>
</header>
        <div id="loginWinDiv" :class="loginWinDivShow">
           <user @hide="loginWinDivHide"></user>
        </div>
</div>
</template>
<script>
import user from "./son/user.vue"
  export default {
    data () {
        return {
            loginWinDivShow:"hide",
            isLogin:false,
            uname:"",
            registWinDivShow:"hide"
        }
    },
    methods: {
        signin(){
           this.loginWinDivShow="show";
        },
        loginWinDivHide(uname){
           this.loginWinDivShow="hide";
           this.isLogin=true;
           console.log("fu:"+uname);
           this.uname=uname;
        },
       regist(){
           this.registWinDivShow="show"
       }
     },
     components:{
         user
     }  
  }
</script>
<style scoped>
#my_header{
    margin-top: 40px;
    text-align: right;
    font-size:12px;
}
.house_header{
    color:black;
    font:normal normal bold 20px "微软雅黑";
     padding-right:30px; 
}
 .hide{
     display:none;
 }
 .show{
     display:block;
 }
</style>
