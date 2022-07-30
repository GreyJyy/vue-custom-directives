<template>
  <div>
    <!-- v-throttle test -->
    <h3>v-throttle</h3>
    <div class="center">Submit Count:{{ count }}</div>
    <div class="center"><button @click="test1" v-throttle>Submit</button></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    test1() {
      this.count++
    }
  }
}
</script>
<style></style>
