<template>
  <div>
    <h3>v-active</h3>
    <div
      class="nav-bar"
      v-active="{
        cNode: 'nav-item',
        activeClass: 'nav-active',
        currentInd
      }"
    >
      <div
        class="nav-item"
        v-for="(item, index) in arr"
        :key="index"
        @click="currentInd = index"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentInd: 0,
      arr: ['Option1', 'Option2', 'Option3']
    }
  }
}
</script>
<style scoped>
.nav-bar {
  display: flex;
}
.nav-item {
  width: 100px;
  height: 30px;
  margin: auto;
  text-align: center;
  line-height: 30px;
  border: 1px solid black;
}

/* for activeClass*/
.nav-active {
  background-color: aquamarine;
}
</style>
