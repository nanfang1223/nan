<template>
    <div>
        <p @click="$router.back()">搜索</p>
    </div>
</template>

<script>
export default {
        name:'search',
          created() {
           this.change1()
        },
        methods:{
           change1(){
               this.$store.commit('change',1)
           }
        },
}
</script>

<style>

</style>

