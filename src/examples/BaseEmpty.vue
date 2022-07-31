<template>
    <div>
        <h3>v-empty</h3>
        <div style="height:40px;width:100px;" v-empty="{
            content: '暂无列表',
            img: require('@/images/icon.png'),
        }" @click="msg = 'changed'">{{ msg }}</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg: 'default content'
        }
    }
}
</script>
<style>
</style>