<template>
    <div id="app">
        <h3>v-backtop</h3>
        <div v-backtop:300 class="top"> 回到顶部 </div>
        <div v-backtop class="top2"> 回到顶部 </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
#app {
    position: relative;
    width: 300px;
    height: 700px;
    margin: 0 auto;
    border: 1px solid black;
}

.top {
    position: fixed;
    top: 400px;
    right: 50px;
    width: 80px;
    height: 30px;
    border: 1px solid red;
}

.top2 {
    position: fixed;
    top: 400px;
    left: 50px;
    width: 80px;
    height: 30px;
    border: 1px solid red;
}
</style>