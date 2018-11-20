<template>
    <div>
        <div id="head-top">
          <img @click="back()" id="head-back" src="../../../static/img/back.png" alt="">
          <span id="top">{{guessCity.name}}</span>
          <span @click="back()" id="head-right">切换城市</span>
       </div>
       <div class="con1">
           <div id="con1-1">
             <input v-model="msg" id="search" type="text" placeholder="输入学校,商务楼,地址" >
             <img @click="clear()" v-if="msg" src="../../../static/img/quxiao.png" alt="">
           </div>
              <div>
                 <input @click="submit()" id="sub" type="submit" value="提交">  
              </div>
              
       </div>
       <!-- <p id="history">搜索历史</p> -->
              <ul class="shop">
                  <li :key="index" v-for="(item,index) in shop">
                      <router-link :to="{name:'waimai',params:{cityId:guessCity.id,shopname:item.name,shoplatitude:item.latitude,shoplongitude:item.longitude}}">
                      <h4 id="hh">{{item.name}}</h4>
                      <p id="pp">{{item.address}}</p>
                      </router-link>
                  </li>
              </ul>
        <!-- <div id="footer">清空所有</div> -->
            
       
    </div>
</template>
<script>
 export default{
       name:"city",
       data(){
           return{
             guessCity:{},
             msg:"",
             shop:[]

           }
       },
       created() {
            console.log(this.$route);
            // https://elm.cangdu.org/v1/cities/:id
             this.$http({
                        method:'get',
                        url:"https://elm.cangdu.org/v1/cities/"+this.$route.params.cityId ,
                    }).then((res)=>{
                             this.guessCity = res.data; 
                            //  console.log(res.data);
                             console.log(this.guessCity.id);

                    });
       },
       methods:{
           clear(){
               this.msg = "";
                console.log(1);
           },
           submit(){
               console.log(this.guessCity.id);
               this.$http({
                        method:'get',
                        url:"https://elm.cangdu.org/v1/pois?city_id="+this.guessCity.id+"&keyword="+this.msg
                    }).then((res)=>{
                        console.log(res.data)
                             this.shop = res.data; 
                    }); 
           },
           back(){
               this.$router.go(-1);
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
 #head-right{
    position: absolute;
    right: 0.13rem;
    top: 50%;
    transform: translateY(-50%); 
 }
 #top{
     position: absolute;
     right: 43%;
     top: 50%;
     transform: translate(-50%,-50%); 
     font-size: 0.19rem;
 }
 .con1{
    background-color: #fff;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    padding-top: .55rem;
    overflow: hidden;
 }
 .con1 div{
     width: 90%;
     margin: 0 auto;
     text-align: center;
 }
 #con1-1{
     border: 1px solid #e4e4e4; 
     height: 0.325rem; 
     margin-bottom: .1rem;
 }
 #con1-1 img{
     margin-top: .1rem;
     float: right;
 }
 .con1 input{
     width: 90%;
     font-size: .15rem;
     height: 0.325rem;
     color: #333;
     border-radius: .02rem;
     margin-bottom: .1rem;
 }
 #sub{
     width: 100%;
     background-color: #3190e8;
     color: #fff;
 }
#history{
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    padding-left: .12rem;
    font: .11rem/.18rem Microsoft YaHei;
    background-color:#e4e4e4;
}
.shop{
    background-color: #fff;
    border-top: 1px solid #e4e4e4;
}
.shop li{
    margin: 0 auto;
    padding-top: .15rem;
    border-bottom: 1px solid #e4e4e4
}
.shop li>h4{
    margin: 0 auto .09rem;
    width: 90%;
    font-size: .15rem;
    color: #333;
}
.shop li>p{
    margin: 0 auto .09rem;
    width: 90%;
    font-size: .12rem;
    color: #999;
}
#hh{
     margin: 0 auto .09rem;
    width: 90%;
    font-size: .15rem;
      color: #333;
}
#pp{
    margin: 0 auto .09rem;
    width: 90%;
    font-size: .12rem;
     color: #999;
}
#footer{
    font-size: .16rem;
    color: #666;
    text-align: center;
    line-height: 0.465rem;
    background-color: #fff;
}
</style>
