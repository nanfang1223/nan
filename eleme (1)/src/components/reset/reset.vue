<template>
    <div id="wrap">
        <div id="top">
      <img src="../../../static/img/back.png"  @click="return1()">
     重置密码
    </div>
    <div id="content">
     <div><input type="text" placeholder="账号" v-model="userNam"></div>
     <div><input type="password" placeholder="旧密码" v-model="oldPw"></div>
     <div><input type="password" placeholder="请输入新密码"
     v-model="newPw"></div>
     <div><input type="password" placeholder="请确认密码" v-model="conPw"></div>
     <div id="yan">
         <input type="text" placeholder="验证码"   v-model="cap_code">
        <div id="change" @click="getCode()">
        <p>看不清</p>
        <p id="ph">换一张</p>
      </div>
         <img @click="getCode()" :src="code" >
     
     </div>
    </div>
     <button @click="getset()" id="btn1">确认修改</button>
     <transition enter-active-class='animated bounceIn' mode='out-in'>
    <div id="error" v-show="show1">
<div id="rc">
  !
</div>
<p id="mess">{{err}}</p>
<button id="btn2" @click="errsure()">确认</button>
    </div>
  </transition >
    </div>
</template>
<script>
export default {
    name:'forget',
    data(){
return{
code:'',
userNam:'',
oldPw:'',
newPw:'',
conPw:'',
cap_code:'',
show1:false,
err:''
}
    },
    created() {
        this.getCode();

    },
    methods: {
      getCode() {
        const url = "https://elm.cangdu.org/v1/captchas";
        this.$http({
          method: 'post',
          url: url,
          withCredentials: true,
        }).then((res) => {
          console.log('tap', res);
          this.code = res.data.code
        });
        
      },
getset(){
    var url='https://elm.cangdu.org/v2/changepassword';
this.$http({
    method:'post',
    url:url,
    withCredentials:true,
    data:{
username:this.userNam,
oldpassWord:this.oldPw,
newpassword:this.newPw,
confirmpassword:this.conPw,
captcha_code:this.cap_code
    }
}).then((res)=>{
    console.log(res);
    if (res.data.status==1) {
        alert('修改密码成功')
    } else {
        this.show1=true;
        this.err=res.data.message;
    }
})

},
// 返回上一级
return1(){
  this.$router.go(-1);
},
// 错误信息确认
errsure(){
  this.show1=false;
}
    },

}
</script>


<style scoped>
#wrap{
  width: 100%;
  height: 5rem;
  background-color: rgb(232,232,232);
  overflow: hidden;
}
#top{
 width: 100%;
     height:0.45rem;
     background-color:#3190e8;
     position: fixed;
     left: 0;
     top: 0;
     z-index: 100;
     font-size: 0.19rem;
     color: #fff;
     text-align: center;
     line-height: 0.45rem;
     font-weight: 800;
}
#top>img{
  position: absolute;
  left: 5%;
  height: 0.2rem;
  top: 0.125rem;
}
#content{
    width: 100%;
    margin-top: 0.55rem;
    background-color: white;
    overflow: hidden;
}
#content>div{
    height: 0.5rem;
    border-bottom: 1px solid rgb(232,232,232);
}
#content>div>input{
    height: 0.4rem;
    margin-top: 0.05rem;
    border: none;
    outline: none;
    margin-left: 5%;
}
#content>div>::-webkit-input-placeholder{
    font-size: 0.17rem;
}
#yan>img{
  height: 0.2rem;
  margin-top: 0.15rem;
  float: right;
  margin-right: 8%;
}
#yan>div{
  margin-top: 0.1rem;
   height: 0.2rem;
   float: right;
     margin-right: 8%;
}
#yan>div>p{
height: 0.2rem;
font-size: 0.1rem;
}
#ph{
    color: #3190e8;
}
#btn1{
  width: 95%;
  height: 0.45rem;
    font-size: .2rem;
    color: #fff;
    background-color: #4cd964;
    border: 1px;
    text-align: center;
   margin-left: 2.5%;
   margin-top: 0.2rem;
}
#error{
  width: 80%;
  height: 2rem;
  background-color: white;
  overflow: hidden;
  position: absolute;
  top: 1.8rem;
  margin-left: 10%;
}
#rc{
  width:0.7rem;
  height: 0.7rem;
  border: 4px solid #f8cb86;
  border-radius: 50%;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top:0.3rem; 
  font-size: 0.6rem;
  line-height: 0.7rem;
  text-align: center;
  color: #f8cb86;
}
#mess{
  position: absolute;
  top: 1.2rem;
   left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
}
#btn2{
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 0.45rem;
    font-size: .2rem;
    color: #fff;
    background-color: #4cd964;
    text-align: center;
   border: none;
}
</style>
