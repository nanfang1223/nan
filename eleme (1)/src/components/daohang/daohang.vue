<template>
   <div >

       <router-view></router-view>


       <div id="foot">
               <div>
                   <router-link :to="{name:'waimai'}">
  <img v-if="$store.state.page != 0" :src='waimai' >
  <img v-else src='../../../static/img/SSS1.png' > 
                   <p>外卖</p>
                   </router-link>
             
           </div>
         
           <div>
               <router-link :to="{name:'search'}">
              <img v-if="$store.state.page != 1" :src="search" > 
              <img v-else src='../../../static/img/zhinanzhen1.png' >
              <p>搜索</p>
              </router-link>
              
           </div>
           <div >
               <router-link :to="{name:'order'}"
               >
               <img :src="order" v-if='$store.state.page!=2'> 
               <img src="../../../static/img/dingdan2.png"  v-else> 
               <p>订单</p>
               </router-link>
              
              
           </div>
           <div>
             <router-link :to="{name:'mymessage'}">
             <img :src="my" v-if='$store.state.page!=3'> 
             <img src="../../../static/img/touxiang1.png" v-else>
              <p>我的</p>
            </router-link>
              
           </div>


       </div>




   </div>

</template>
<script>
export default {
    name:"daohang",
    data(){
        return{
            waimai:'../../../static/img/SSS.png',
           search:'../../../static/img/zhinanzhen.png',
           order:'../../../static/img/dingdan1.png',
           my:'../../../static/img/touxiang2.png'
        }
    },
    created() {
       
    },
    computed:{
       

    }
}
</script>
<style scoped>

#foot{
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-around;
    bottom: 0%;
    background-color: #fff;
}
#foot div{
    width: 25%;
    height: 0.45rem;
    text-align: center;
}
#foot div img{
    height: 0.25rem;
}
#foot div p{
    margin: 0.02rem;
    color: #666;
}
</style>


