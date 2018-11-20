<template>
<div>
       <div id="content">
<div id="left">
<p v-for="(value,index) in shopbiao" :key="index"  @click=" changesty(index)" :class="{pl:index==isActive} "   >
<a :href="'#a'+index" class="aa">{{value.name}}</a>
</p>
</div>
<div id="right">
<div class="right1" v-for="(value,index) in shopbiao" :key="index" :id="'a'+index">
<p class="tit">{{value.name}}</p>
<div class="neirong" v-for="(val,ind) in foods[index]"  :key="ind">
<p class="leftimg"><img :src="['//elm.cangdu.org/img/'+val.image_path]" ></p>
<p class="righttext">
    <span>{{val.name}}</span>
    <span v-if="val.description">{{val.description}}</span>
    <span>{{val.tips}}</span>
    <span class="price">${{val.specfoods[0].price}}</span>
</p>
 <span class="zp" v-if="val.attributes.length!=0">招牌</span>
<p class="jia">
   <span>+</span>
</p>
</div>

</div>

</div>
       </div>

<div id="goufoot">
<p id="p1">
    <img src="../../../static/img/gouwuche.png" >
</p>
<p id="p2">
    <span>$0.00</span>
    <span>配送费$5</span>
</p>
<p id="p3">还差$20起送</p>
</div>
</div>
</template>
<script>
export default {
    name:'GouFoot',
    data(){
return{
    shopbiao:[],
    foods:[],
    classA:'',
   isActive:false
}
    },
    created() {
    console.log(this.$route.params);
         this.getlibiao();
         this.getoheight();
    },
    methods:{
         getlibiao(){
               this.$http({
                        method:'get',
                        url:"https://elm.cangdu.org/shopping/v2/menu?restaurant_id="+this.$store.state.shopid
                    }).then((res)=>{
                             console.log(res.data);
                             this.shopbiao=res.data
                             console.log(res.data)
                            for (let index = 0; index <this.shopbiao.length; index++) {
                               this.foods.push(this.shopbiao[index].foods)
                            }
                            console.log( this.foods[0][1])
                    });
         } ,
         changesty(index){         
this.isActive=index;
         },
         getoheight(){
        var  shopshei=document.getElementsByClassName('right1');
        console.log(shopshei[0].clientHeight)

         }

    }
}
</script>
<style scoped>
#goufoot{
width: 100%;
height: 0.6rem;
position: fixed;
bottom: 0;
background-color:#333; 
}
#p1{
    width: 0.5rem;
    height: 0.5rem;
    border: 0.06rem solid #535356;
    border-radius: 50%;
    position: absolute;
    bottom: 0.25rem;
    left: 5%;
    background-color:#333; 
    text-align: center;
    /* line-height: 0.5rem; */
}
#p2{
    height: 0.6rem;
    position: absolute;
    left: 25%;
}
#p1>img{
    height: 0.4rem;
    margin-top: 0.05rem;
}
#p2>span:nth-of-type(1){
    display: inline-block;
    height: 0.25rem;
    width: 100%;
    line-height: 0.25rem;
    color: white;
    font-size: 0.18rem;
    margin-top: 0.03rem;
}
#p2>span:nth-of-type(2){
    display: inline-block;
    width: 100%;
    color: white;
    font-size: 0.1rem;
    margin-left: 0.02rem;
}
#p3{
    width: 1.2rem;
    height: 0.6rem;
    float: right;
    background-color:#535356; 
    line-height: 0.5rem;
    text-align: center;
    color: white;
    font-size: 0.18rem;
}
#content{
    width: 100%;
    overflow: hidden;
}
#left{
width: 20%;
background-color: #ededed;
float: left;
height: 4rem;
overflow: scroll;
}
#left>p{
height: 0.4rem;
line-height: 0.4rem;
 border-bottom: 0.01rem solid #f8f8f8;
 text-align: center;
 overflow: hidden;
}
.aa{
    color: black;
}
#right{
    width: 80%;
    float: left;
    background-color: #fff;
    position: relative;
     height: 4rem;
overflow: scroll;
}
.tit{
    width: 100%;
    height: 0.4rem;
    background-color: #ededed;
    line-height: 0.4rem;
    font-weight: 600;
}
.right1{
    width: 100%; 
}
.neirong{
    width: 100%;
    overflow: hidden;
    position: relative;
    border-bottom: 0.01rem solid #f8f8f8;
}
.price{
    color: red;
    font-weight: 600;
}
.leftimg{
    width: 0.5rem;
    height: 0.5rem;
    float: left;
    margin-top: 0.1rem;
    margin-left: 0.1rem;
}
.leftimg>img{
    height: 0.4rem;
    margin-top: 0.05rem;
    margin-left: 0.05rem;
}
.righttext{
    float: left;
    width: 70%;
    padding: 0.05rem 0 ;
}
.righttext>span{
    display: inline-block;
    width: 100%;
    margin-left:0.1rem;
    height: 0.18rem;
    font-size: 0.12rem;
}
.righttext>span:nth-of-type(1){
    font-size:0.14rem;
    font-weight: 600;
}
.zp{
    position: absolute;
    width: 0.25rem;
    height: 0.1rem;
    top: 0;
    right:0;
    text-align: right;
    border: 0.01rem solid red;
    font-size: 0.08rem;
    text-align: center;
    border-radius: 0.05rem;
    color: red;
    margin-right: 0.1rem;
    margin-top: 0.1rem;
}
.jia{
    position: absolute;
    bottom: 0.05rem;
    right: 0.2rem;
    background-color: #3190e8;
    border-radius: 50%;
    width: 0.2rem;
    height: 0.2rem;
    color: #fff;
    text-align: left ;
    line-height: 0.2rem;
}
.jia>span{
    display: inline-block;
    color: #fff;
    text-align: left ;
    font-weight: 600;
    /* font-size: 0.18rem; */
    line-height: 0.2rem;
    transform: translate(0.035rem,-0.01rem);
}
.pl{
     background-color: #fff;
    border-left: 0.05rem solid #3190e8;
}
</style>
