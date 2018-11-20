<template>
   <div id="wrap">
<div id="top1">
    <p id="left1">
        <span>4.7</span>
        <span>综合评价</span>
        <span>高于周边</span>
    </p>
    <div id="right1">
<p id="p1">
    <span>服务态度</span>
    <img src="../../../static/img/wujiaoxing.png">
    <span>4.7</span>
</p>
<p id="p2">
    <span>菜品评价</span>
    <img src="../../../static/img/wujiaoxing.png">
    <span>4.8</span>
</p>
<p id="p3">
    <span>送达时间</span>
    <span>0分钟</span>
</p>
    </div>
</div>

<div id="content2">
<p v-for="(value,index) in fenleis" :key="index" :id="'c'+index"> {{value.name}}({{value.count}})</p>
</div>
   </div>
</template>
<script>
export default {
    name:'pingjia',
    data(){
return{
fenleis:[]
}
    },
    created() {
        this.getmessage();
        console.log(this.$route.params.shopid)
        this.getfen();
    },
    methods:{
        getmessage(){
             this.$http({
                        method:'get',
                        url:"https://elm.cangdu.org/ugc/v2/restaurants/"+this.$route.params.shopid+"/ratings?offset=0&limit=10"
                    }).then((res)=>{
                             console.log(res.data);

                    })
        },
        getfen(){
            this.$http({
                        method:'get',
                        url:"https://elm.cangdu.org/ugc/v2/restaurants/"+this.$route.params.shopid+"/ratings/tags"
                    }).then((res)=>{
                             console.log(res.data);
                             this.fenleis=res.data;
                    })
        }
    }
}
</script>
<style scoped>
#wrap{
    background-color: #e4e4e4;
}
#top1{
   background-color: #fff;  
   overflow: hidden;
   width: 100%;
}
#left1{
    float: left;
    width: 40%;
     padding: 0.2rem 0; 
     text-align: center;
}
#left1>span{
    display: inline-block;
    height: 0.2rem;
    width: 100%;
}
#left1>span:nth-of-type(1){
    color: #f60;
    font-size: 0.3rem;
    font-weight: 600;
}
#left1>span:nth-of-type(2){
    font-size: 0.18rem;
     margin-top: 0.1rem;
}
#left1>span:nth-of-type(3){
    font-size: 0.12rem;
    margin-top: 0.08rem;
    color: #999;
}
#right1{
    width: 60%;
    float: right;
    padding: 0.2rem 0;
    background-color: #fff;
}
#p1,#p2,#p3{
    width: 100%;
    height: 0.3rem;
    overflow: hidden;
}
#p1>span,#p2>span,#p3>span{
    display: inline-block;
    height: 0.3rem;
    line-height: 0.2rem;
}
#p1>img{
    height: 0.2rem;
}
#p2>img{
    height: 0.2rem;
}
#p1>span:nth-of-type(1){
    font-size: 0.18rem;
    margin-right: 0.1rem;
}
#p1>span:nth-of-type(2){
    font-size: 0.18rem;
     color: #f60;
     margin-left: 0.2rem;
}
#p2>span:nth-of-type(1){
    font-size: 0.18rem;
    margin-right: 0.1rem;
}
#p2>span:nth-of-type(2){
    font-size: 0.18rem;
     color: #f60;
     margin-left: 0.2rem;
}
#p3>span:nth-of-type(1){
    font-size: 0.18rem;
    margin-right: 0.1rem;
}
#p3>span:nth-of-type(2){
    font-size: 0.13rem;
    color: #999;
}
#content2{
    width: 96%;
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    margin-top: 0.1rem;
    justify-content:space-between;
    padding: 2%;
}
#content2>p{
height: 0.2rem;
line-height: 0.2rem;
color: #6d7885;
background-color: #ebf5ff;
margin-bottom: 0.1rem;
border: 0.01rem solid #fff;
border-radius: 0.1rem;
padding: 0.05rem;
}
#c0{
    color: #fff!important;
    background-color: #3190e8!important;
}
#c2{
    color: #aaa!important;
    background-color: #f5f5f5!important;
}
</style>

