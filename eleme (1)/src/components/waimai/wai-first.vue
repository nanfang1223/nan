<template>
<div>
   <div id="head-top">
          <img src="../../../static/img/fangdajing.png" id="search">
          <div id="top" @click="$router.push({name:'home'})">
             你的
              </div>
         <router-link to="/daohang">
              <img  id="toux"     src="../../../static/img/touxiang.png" >
         </router-link>
  </div>
  <div id="content1">

  </div>
  <div id="content2">
<p id="house">
    <img src="../../../static/img/Group-.png"  >
    <span>附近商家</span>
</p>

<div class="shopstore" v-for="(value,index) in shops" :key="index"   @click="$router.push({name:'waisecond',params:{shoplatitude:value.latitude,shoplongitude:value.longitude,shopid:value.id}})">
   <p class="p1" v-if="value.supports[0].icon_name=='保'">保</p>
   <p class="p2" >准</p>
   <p class="p3" >票</p>
<div class="shop1">
 <p class="shop-title">
     <img :src="['//elm.cangdu.org/img/'+value.image_path]">
 </p>
<p class="shopname">
    <span>品牌</span>
    <span>{{value.name}}</span>
</p>
<div class="shop2">
<p><img src="../../../static/img/wujiaoxing.png" class="wu">
</p>
<span>{{value.rating}}</span>
<span>月售 {{value.recent_order_num}}</span>
<span>准时达</span>
<span v-if="value.delivery_mode.is_solid">蜂鸟专送</span>
</div>
<p class="shop3">
    <span class="sp4">{{value.float_minimum_order_amount}}起送 / </span>
    <span class="sp0">{{value.piecewise_agent_fee.tips}}</span>
    <span class="sp2">{{value.order_lead_time}}</span>
    <span class="sp1">{{value.distance}} / </span>
</p>

</div>
</div>
  </div>
</div>
 

</template>
<script>
export default {
    name:'WaiFirst',
    data(){
     return{
         shops:[]
     }
    },
     created() {
            this.change1()
            this.getlati()
            this.getlong()
            this.getallshop()
            console.log(this.$store.state.latitude)
            // this.$router.push({name:'goufoot'})
        },
        methods:{
           change1(){
               this.$store.commit('change',0)
           },
           getlati(){
               this.$store.commit('changelatitude',this.$route.params.shoplatitude)
           },
           getlong(){
 this.$store.commit('changelongitude',this.$route.params.shoplongitude)
           },
           getallshop(){
               this.$http({
                        method:'get',
                        url:"https://elm.cangdu.org/shopping/restaurants?latitude="+this.$store.state.latitude+"&longitude="+this.$store.state.longitude
                    }).then((res)=>{
                             this.shops = res.data; 
                             console.log(res.data);
                           
                            console.log(res.data[0].license.business_license_image);
                    });
           }
        },
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
 #head-logo{
     left: 0.1rem;
     font-weight: 400;
     position: absolute;
     top: 50%;
     transform: translateY(-50%);
 }
 #top{
     width: 50%;
     position: absolute;
     left: 25%;
      height: 0.35rem;
      top: 30%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
 }
 #search{
     height: 0.35rem;
    position: absolute;
    left: 0.13rem;
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
 #content1{
    padding-top: 0.49rem;
    background-color: #fff;
    border-bottom: .006rem solid #e4e4e4;
    height: 2.47rem;
    border: 1px solid rebeccapurple;
 }
 #content2{
     margin-top: 0.2rem;
     background-color: #fff;
     overflow: hidden;
 }
 #house{
     height: 0.4rem;
margin-top: 0.1rem;
line-height: 0.4rem;
 }
 #house>img{
     height: 0.3rem;
     margin-left: 5%;
 }
 #house>span{
     display: inline-block;
     transform: translateY(-0.1rem);
     margin-left: 2%;
         color: #999
 }
 .shopstore{
     position: relative;
     padding: 0 0.05rem;
 }
 .shop1{
margin-top: 0.1rem;
 }
 .shop-title{
     height: 0.6rem;
     width: 0.6rem;
     float: left;
 }
 .shop-title>img{
     height: 0.6rem;
 }
.shopname{
    height: 0.15rem;
   transform: translateX(0.1rem);
}
.shopname>span:nth-of-type(1){
    background-color: #ffd930;
    padding: 0 0.05rem;
    display: inline-block;
    height: 0.15rem;
    font-weight: 520;
    font-size: 0.14rem;
}
.shopname>span:nth-of-type(2){
   margin-left: 3%;
   font-size: 0.15rem;
   font-weight: 600;
}
.shop2{
    height: 0.2rem;
    margin-top: 0.1rem;
 margin-left: 0.7rem;
}
.shop2>p{
    width:0.5rem;
    height: 0.15rem;
    float: left;
}
.wu{
    height: 0.18rem;
}
.shop2>span:nth-of-type(1){
    color: red;
    display: inline-block;
    margin-left: 2%;
}
.shop2>span:nth-of-type(2){
    display: inline-block;
    font-size: 0.12rem;
     color: #999;
}
.shop2>span:nth-of-type(3){
    display: inline-block;
    font-size: 0.12rem;
    float: right;
    height: 0.13rem;
    font-size: 0.1rem;
    line-height: 0.15rem;
    border: 0.01rem solid #3190e8;
    color: #3190e8;
    margin-right: 0.05rem;
    border-radius: 0.02rem;

}
.shop2>span:nth-of-type(4){
    display: inline-block;
    height: 0.15rem;
    font-size: 0.1rem;
    line-height: 0.15rem;
    float: right;
    margin-right: 1%;
    background-color: #3190e8;
    padding: 0 0.02rem;
    color: #fff;
}
.shop3>span{
    font-size: 0.1rem;
}
.sp0,.sp4{
    color: #999;
}
.shop3{
    height: 0.2rem;
    margin-top: 0.05rem;
   transform: translateX(0.1rem)
}
.sp1,.sp2{
    float: right;
    color: #999;
}
.sp2{
    margin-right: 8%;
    color: #3190e8;
    margin-left: 0.02rem;
}
.p1,.p2,.p3{
    color: #999;
    border: 0.01rem solid #999;
    width: 0.12rem;
    height: 0.12rem;
    position: absolute;
    font-size: 0.1rem;
    text-align: center;
    line-height: 0.12rem;
    border-radius: 0.02rem;
}
.p3{
    right: 0.1rem;
}
.p2{
    right: 0.26rem;
}
.p1{
    right: 0.43rem;
}
</style>
