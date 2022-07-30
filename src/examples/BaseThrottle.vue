<template>
  <div>
    <!-- v-throttle test -->
    <h3>v-throttle</h3>
    <div class="center">Submit Count:{{ count }}</div>
    <div class="center"><button v-throttle:2000="test1">Submit</button></div>
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
