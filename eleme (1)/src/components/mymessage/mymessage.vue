<template>
    <div>
        <p @click="$router.back()">我的</p>
    </div>
</template>

<script>
export default {
        name:'mymessage',
           created() {
           this.change1()
        },
        methods:{
           change1(){
               this.$store.commit('change',3)
           }
        },
}
</script>

<style>

</style>

