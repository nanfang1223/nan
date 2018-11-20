<template>
   <div>
       <div id="head-top">
          <span id="head-logo">ele.me</span>
          <router-link id="rout1"  :to="{name:'login'}">
          <span v-if="logIN" id="head-login">登录丨注册</span>
          </router-link>
         <router-link to="/daohang">
              <img v-if="touX" id="toux"     src="../../../static/img/touxiang.png" >
         </router-link>
          
       </div>
       <nav class="city-nav">
        <div id="city-tip">
           <span>当前定位城市:</span>
           <span>定位不准时,请在城市列表中选择</span>
       </div>
       <router-link  :to="{name:'city',params:{cityId:guessCity.id}}">
       <div class="guess-city">
           <span >{{guessCity.name}}</span>
           <img src="../../../static/img/right.png" alt="">
       </div>
       </router-link>
       </nav>
       <section class="sec1">
           <h4>热门城市</h4>
           <ul class="hotcity">
                   <li :key="index" v-for="(item,index) in hotCity">
                       <router-link id="rout2"  :to="{name:'city',params:{cityId:item.id}}">
                      <span>{{item.name}}</span>
                       </router-link>
                       </li>
           </ul>
       </section>
       <section class="sec2">
           <ul class="az">
               <li :key="index" v-for="(item,index) in groupCity">
                 <h4>
                   {{index}} <span v-if="index == 'A'">(按字母排序)</span> 
                 </h4> 
                 <ul class="city-list">
                     <li :key="index" v-for="(value,index) in item">
                        <router-link id="rout3" :to="{name:'city',params:{cityId:value.id}}">
                         <span> {{value.name}} </span>
                         </router-link>
                     </li>
                 </ul> 
               </li>
           </ul>
           
       </section>
   </div>
</template>
<script  >
   export default{
       name:"home",
       data(){
           return{
              guessCity:{},
              hotCity:[],
              groupCity:{},
              touX:false,
              logIN:true
           }
       },
       created() {
        //   let api  = "https://elm.cangdu.org/v1/cities?type=hot" ;
           this.$http({
                        method:'get',
                        url:"https://elm.cangdu.org/v1/cities?type=guess" ,
                        withCredentials:true
                    }).then((res)=>{
                           
                             this.guessCity = res.data; 
                    });
          this.$http({
                        method:'get',
                        url:"https://elm.cangdu.org/v1/cities?type=hot" ,
                        withCredentials:true
                    }).then((res)=>{
                           
                             this.hotCity = res.data;
                    });
          this.$http({
                        method:'get',
                        url:"https://elm.cangdu.org/v1/cities?type=group" ,
                        withCredentials:true
                    }).then((res)=>{
                           let arr = [];
                           for (const key in res.data) {
                               arr.push(key);
                           }
                           arr.sort();
                           console.log(arr);
                        for (let i = 0; i < arr.length; i++) { 
                           this.$set( this.groupCity[arr[i]] = res.data[arr[i]]); 
                        };
                         
                    });
        if (this.$route.params.succ=="succ") {
            this.logIN = false;
            this.touX = true;
        } else {
            this.logIN = true;
            this.touX = false;
        }

       }



       
   } 
</script>
<style scoped>
#rout1{
   color: #fff; 
}
#rout2{
    color: #3190e8;
}
#rout3{
     color: #666;
}
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
 #head-logo{
     left: 0.1rem;
     font-weight: 400;
     position: absolute;
     top: 50%;
     transform: translateY(-50%);
 }
 #head-login{
    position: absolute;
    right: 0.13rem;
    top: 50%;
    transform: translateY(-50%);
    
 }
 #toux{
    height: 0.35rem;
    position: absolute;
    right: 0.13rem;
    top: 50%;
    transform: translateY(-50%);
 }
 .city-nav{
    padding-top: 0.55rem;
    border-top: 1px solid #e4e4e4;
    background-color: #fff;
    margin-bottom: 0.1rem; 
 }
 #city-tip{
     display: flex;
     padding-top: 0.55rem;
     line-height: 0.34rem;
     padding: 0 0.1rem;
     justify-content: space-between;
 }
 #city-tip span:nth-child(1){
     font-size: 0.13rem;
     color: #666;
 }
 #city-tip span:nth-of-type(2){
    font-weight: 900;
    font-size: .12rem;
    color: #9f9f9f;
 }
 .guess-city{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.42rem;
    padding: 0 0.1rem;
    border-top: 1px solid #e4e4e4;
    border-bottom: 2px solid #e4e4e4;
   

 }
 .guess-city span{
      color: #3190e8;
 }
 .guess-city img{
      height: 0.16rem; 
 }
 .sec1{
    background-color: #fff;
    margin-bottom: .1rem;
 }
 .sec1>h4{
    color: #666;
    text-indent: .1rem;
    border-top: 2px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    font: .13rem/.34rem Helvetica Neue;
 }
 .hotcity{
     overflow: hidden; 
     background-color: #fff;
 }
 .hotcity li{
    box-sizing: border-box;
    float: left;
    text-align: center;
    /* color: #3190e8; */
    border-bottom: .006rem solid #e4e4e4;
    border-right: .006rem solid #e4e4e4;
    width: 25%;
    height: 0.41rem;
    font: 0.14rem/0.41rem Microsoft YaHei;
   
 }
 .az>li{
    margin-bottom: .1rem;
    background-color: #fff;
    border-bottom: 1px solid #e4e4e4;
 }
 .az h4{
    color: #666;
    text-indent: .11rem;
    border-top: 2px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    font: .13rem/.34rem Helvetica Neue;
 }
 .city-list{
     overflow: hidden; 
     background-color: #fff;
   
 }
 .city-list li{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    box-sizing: border-box;
    float: left;
    /* color: #666; */
    text-align: center;
    border-bottom: .006rem solid #e4e4e4;
    border-right: .006rem solid #e4e4e4;
    width: 25%;
    height: 0.41rem;
    font: 0.14rem/0.41rem Microsoft YaHei;
 }
</style>
