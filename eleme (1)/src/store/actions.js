export default {
    asyReduce({commit},n){
      //在异步当中做异步请求，模拟下请求数据需要一秒
     setTimeout(() => {
       //触发mutations函数中的方法
    //  context.commit('reduce',n);
    commit('reduce',n);
     }, 1000);
   }
}