<template>
    <div>
        <p @click="$router.back()">订单</p>
    </div>
</template>

<script>
import { mapState,mapMutations } from "vuex";
export default {
        name:'order',
        created() {
           this.change1()
        },
        methods:{
           change1(){
               this.$store.commit('change',2)
           }
        },

}
</script>

<style>

</style>

