<template>
    <div>
        <div id="head-top">
          <img @click="back()" id="head-back" src="../../../static/img/back.png" alt="">
          <span id="top">密码登录</span>
          </div>
          <div class="shuru">
          <div class="one">
              <input v-model="username" type="text" placeholder="账号">
          </div>
          <div class="one">
              <input v-model="password" :type="type" placeholder="密码">
            <div :class="classA"> 
                 abc...
            </div>
            <div :class="classB" @click="change()">
            </div>
          </div>
        <div class="one">
            <input v-model="codeNumer" type="text" placeholder="验证码">
            <img @click="getCode()" :src="code&&code" alt="">
            <span id="s1">
                看不清
            </span>
            <span id="s2" @click="getCode()">
                换一张
            </span>
        </div>
        </div>
        <p class="p1">温馨提示:未注册过的账号,登录时将自动注册
        </p>
        <p class="p1">注册过的用户可凭账号密码登录
        </p>
        <div class="llogin" @click="login()">登录</div>
        <router-link :to="{name:'reset'}">
         <a id="a11">重置密码?</a>
         </router-link>
         <div v-if="err" class="tishi animated bounce .4s">
           <div class="icon">
               <span></span>
               <span></span>
           </div>
           <p>{{err}}</p>
           <div @click="clear()" class="confrim">确认</div>
         </div>
       </div>
      
</template>
<script>
    export default{
        name:"login",
        data() {
      return {
        code: "",
        username: "",
        password: "",
        codeNumer: "",
        classA:"a",
        classB:"b",
        type:"password",
        err:""
      }
    },
    
    created() {
      this.getCode();

    },
    methods: {
        back(){
               this.$router.back();
           },
        clear(){
           this.err = "";
        },
           change(){
               if (this.classA=="a") {
                   this.classA ="aa",
                   this.classB = "bb",
                   this.type = "text"

               } else {
                   this.classA ="a",
                   this.classB = "b",
                   this.type = "password"
               }
           },

      getCode() {
 
        const url = "https://elm.cangdu.org/v1/captchas";
        this.$http({
          method: 'post',
          url: url,
        //用于表示用户代理是否应该在跨域请求的情况下从其他域发送cookies。不使用缓存数据
          withCredentials: true, // 默认false
        }).then((res) => {
          console.log('tap', res);
            if(res.data.status == 200){}
          this.code = res.data.code
        });
        
      },
      login() {
        const api = "https://elm.cangdu.org/v2/login";
        this.$http({
          method: 'post',
          url: api,
          withCredentials: true, // 默认的
          data: {
            captcha_code: this.codeNumer,
            password: this.password,
            username: this.username
          },

        }).then(res => {
            if (res.data.status!=0) {
                 alert("登陆成功");
                  this.$router.push({name:"home",params:{succ:'succ'}
                  }); 
            } else {
                this.err =res.data.message;
            }
         
          // console.log('---', res);
          console.log('++++',res.data);
          //给vuex保存用户信息  编程式路由跳转，跳转到person.vue页面时，传值

        });

      }
    }
    }
</script>
<style scoped>
#head-top{
     width: 100%;
     height:0.45rem;
     background-color:#3190e8;
     position: fixed;
     left: 0;
     top: 0;
     z-index: 100;
     font-size: 0.16rem;
     color: #fff;
 }
 #head-back{
     left: 0.1rem;
     height: 0.18rem;
     position: absolute;
     top: 50%;
     transform: translateY(-50%);
 }
 #top{
     position: absolute;
     right: 30%;
     top: 50%;
     transform: translate(-50%,-50%); 
     font-size: 0.19rem;
     font-weight: 700;
 }
 .shuru{
    background-color: #fff;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    padding-top: .55rem;
    overflow: hidden;
 }
.one{
    width: 100%;
    border-bottom: 1px solid #f1f1f1;
 }
 .one input{
 padding: .14rem .19rem;
 }
 input::-webkit-input-placeholder {
         font-size:0.16rem;
 }
.a{
    width: 0.55rem;
    height: 0.21rem;
    background-color:rgb(204, 204,204);
    float: right;
    margin-top: .11rem;
    margin-right: .22rem;
    border-radius: 0.15rem;
     color: #fff;
     text-align: center;
    
}
.aa{
    width: 0.55rem;
    height: 0.21rem;
    background-color: #4cd964;
    float: right;
    margin-top: .11rem;
    margin-right: .22rem;
    border-radius: 0.15rem;
    color: #fff;
     text-align: center;
}
.b{
    width:0.3rem;
    height: 0.3rem;
    clear: both;
    border-radius:50%; 
    background-color:rgb(234, 234,234);
    position:absolute;
    top:1.07rem;
    right: 0.52rem;
    transition:  all 0.3s; 
}
.bb{
    width:0.3rem;
    height: 0.3rem;
    clear: both;
    border-radius:50%; 
    background-color:rgb(234, 234,234);
    position:absolute;
    top:1.07rem;
    right: 0.20rem; 
    transition:  all 0.3s; 
}
.one:last-child img{
      height: 0.40rem;
}
.one:last-child span{
    float: right;
}
#s1{
    position:absolute;
    top:1.57rem;
    right: 0.22rem;  
    color: rgb(54, 54,54); 
}
#s2{
    position:absolute;
    top:1.83rem;
    right: 0.22rem;
    color: #3b95e9;
}
.p1{
    font-size: .13rem;
    color: red;
    padding: .09rem .14rem;
    line-height: .12rem;
}
.llogin{
    margin: 0 .12rem .23rem;
    font-size: .16rem;
    color: #fff;
    background-color: #4cd964;
    padding: .12rem 0;
    border: 1px;
    border-radius: .035rem;
    text-align: center;
}
#a11{
    float: right;
    font-size: .15rem;
    color: #3b95e9;
    margin-right: .07rem;
}
.tishi{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -1.4rem;
    margin-left: -1.4rem;
    width: 2.8rem;
    animation: bounce 1s;
    background-color: #fff;
    padding-top: .14rem;
    border: 1px solid gray;
    border-radius: .06rem;
}
.icon{
    width: 0.7rem;
    height: 0.7rem;
    border: .035rem solid #f8cb86;
    border-radius: 50%;
    display: flex;
    margin-left: 36%;
}
.icon span:first-of-type{
    width: .03rem;
    height: 0.35rem;
    background-color: #f8cb86;
    margin-left: 50%;
    margin-top: 10%;
}
.icon span:last-of-type{
    width: .05rem;
    height: .05rem;
    border: 1px;
    border-radius: 50%;
    margin-top: .05rem;
    background-color: #f8cb86;
    margin-left: -5%;
    margin-top: 70%;
}
.tishi p{
   font-size: .16rem;
    color: #333;
    line-height: .2rem;
    text-align: center;
    margin-top: .19rem;
    padding: 0 .1rem;
}
.confrim{
    font-size: .2rem;
    color: #fff;
    font-weight: 700;
    margin-top: .19rem;
    background-color: #4cd964;
    width: 100%;
    text-align: center;
    line-height: .42rem;
    border: 1px;
    border-bottom-left-radius: .06rem;
    border-bottom-right-radius: .06rem;
}
</style>
