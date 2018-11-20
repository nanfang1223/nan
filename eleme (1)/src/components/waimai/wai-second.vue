<template>
<div id="wrap">
<div id="top" >
<img :src="['//elm.cangdu.org/img/'+url]" id="bcimg" >
<div id="topA" >
    <div id="right-img">
<img :src="['//elm.cangdu.org/img/'+url]" id="bcimg1" >
    </div>
    <div id="left-text">
<p id="shopname">{{shops.name}}</p>
<p id="jie">
    <span>商家配送 /</span>
    <span>分钟送达 /</span>
    <span>{{5}}</span>
</p>
<p id="gong">
    {{shops.promotion_info}}
</p>
    </div>
</div>
</div>

<!-- / -->
<div id="dao">
<p id="shop1" :class="classA" @click="$router.push({name:'goufoot',params:{shoplatitude:$store.state.latitude,shoplongitude:$store.state.longitude,shopid:$store.state.shopid}})" @mousedown=" changecolorA()">商品</p>
<p id="pinjia" :class="classB" @mousedown=" changecolorB()" @click="$router.push({name:'pinjia',params:{shopid:$store.state.shopid}})">评价</p>
</div>
  <router-view></router-view>
   </div>
 
</template>

<script>
export default {
    name:'WaiSecond',
    data(){
return{
    url:'',
    shops:{},
    classA:'a',
    classB:''
    
}
    },
    created() {
    this.getlong()
     this.getlati();
     console.log(this.$route.params);
     this.changeid();
     this.getshop();
     console.log(this.$store.state.latitude);
     this.$router.push({name:'goufoot',params:{shoplatitude:this.$store.state.latitude,shoplongitude:this.$store.state.longitude,shopid:this.$store.state.shopid}});
     },
     methods:{
           changeid(){
               this.$store.commit('changeid',this.$route.params.shopid)
           },
            getlati(){
               this.$store.commit('changelatitude',this.$route.params.shoplatitude)
           },
           getlong(){
 this.$store.commit('changelongitude',this.$route.params.shoplongitude)
           },
         getshop(){
                  this.$http({
                        method:'get',
                        url:"https://elm.cangdu.org/shopping/restaurant/"+this.$store.state.shopid
                    }).then((res)=>{
                             this.shops = res.data; 
                             console.log(res.data);
this.url=res.data.image_path;
                    });
         },
         changecolorA(){
             this.classA='a';
             this.classB='';
         },
          changecolorB(){
             this.classA='';
             this.classB='b';
         }
       
     }
     


}
</script>
<style scoped>
#wrap{
    background-color: white;
}
#top{
    width: 100%;
    height: 1rem;
    overflow: hidden;
}
#bcimg{
    width: 100%;
    filter: blur(5px);
}
#topA{
     width: 100%;
    height: 1rem;
    position: absolute;
    top: 0; 
}
#right-img{
width: 0.8rem;
height: 0.8rem;
margin: 0.1rem 0 0 0.2rem;
float: left;
}
#bcimg1{
    width: 100%;
}
#left-text{
    float: right;
    margin-right: 0.1rem;
}
#shopname{
    height: 0.25rem;
    margin-top: 0.1rem;
    color: white;
font-size: 0.18rem;
line-height: 0.25rem;
}
#jie{
    height: 0.2rem;
    margin-top: 0.08rem;
    color: white;
}
#gong{
    color: white;
    margin-top: 0.1rem;
    height: 0.2rem;
}
#dao{
    height: 0.4rem;
    margin-top: 0.1rem;
    width: 100%;
    border-bottom: 0.01rem solid #999;
}
#shop1{
    float: left;
    width: 10%;
    margin: 0 20%;
    text-align: center;
    line-height: 0.4rem;
    font-size: 0.18rem;
}
#pinjia{
    float: right;
    width: 10%;
    margin: 0 20%;
    text-align: center;
    line-height: 0.4rem;
    font-size: 0.18rem;
}
.a{
    color: #3190e8;
    border-bottom: #3190e8 0.04rem solid;
}
.b{
 color: #3190e8;
    border-bottom: #3190e8 0.04rem solid;
}

</style>
