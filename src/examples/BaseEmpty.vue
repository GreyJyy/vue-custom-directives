<template>
    <div>
        <h3>v-empty</h3>
        <img v-empty="{
            real, error
        }">
    </div>
</template>
<script>
export default {
    data() {
        return {
            real: 'XX',
            error: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.zhimg.com%2Fv2-7159352e966e87f6e09aa0a19fc67cc6_1440w.jpg%3Fsource%3D172ae18b&refer=http%3A%2F%2Fpic1.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661871414&t=854d8992e5bf9abfea0e1b64ed7b8093'
        }
    }
}
</script>
<style>
</style>