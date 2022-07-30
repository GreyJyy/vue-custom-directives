<template>
  <div>
    <div class="wrap" style="margin-bottom: 50px">
      <div v-for="(item, index) in cpns" :key="index">
        <button @click="currentCpn = item">{{ item }}</button>
      </div>
    </div>
    <hr />
    <component :is="currentCpn"></component>
  </div>
</template>
<script>
import BaseThrottle from '@/examples/BaseThrottle.vue'
import BaseFocus from '@/examples/BaseFocus.vue'
import BaseActive from '@/examples/BaseActive.vue'
export default {
  data() {
    return {
      currentCpn: 'BaseFocus',
      cpns: ['BaseThrottle', 'BaseFocus', 'BaseActive']
    }
  },
  components: {
    BaseThrottle,
    BaseFocus,
    BaseActive
  }
}
</script>
<style>
.wrap {
  display: flex;
  justify-content: space-evenly;
}
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
