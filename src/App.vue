<template>
  <div>
    <!-- v-focus test -->
    <h3>v-focus</h3>
    <!-- test for input -->
    <div class="center">input:<input type="text" v-focus /></div>
    <!-- test for textarea -->
    <!-- <div class="center">textarea:<textarea v-focus></textarea></div> -->
    <hr />

    <!-- v-throttle test -->
    <h3>v-throttle</h3>
    <div class="center"><button @click="test1" v-throttle>Submit</button></div>
    <hr />
  </div>
</template>
<script>
export default {
  methods: {
    test1() {
      console.log('submit')
    }
  }
}
</script>
<style scoped>
h3 {
  text-align: center;
}
.center {
  display: flex;
  justify-content: center;
  padding: 20px;
}
textarea {
  overflow: hidden;
  resize: none;
}
</style>
