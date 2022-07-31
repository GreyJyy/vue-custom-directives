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
import BaseEllipsis from './examples/BaseEllipsis.vue'
export default {
  data() {
    return {
      currentCpn: 'BaseFocus',
      cpns: ['BaseThrottle', 'BaseFocus', 'BaseActive', 'BaseEllipsis']
    }
  },
  components: {
    BaseThrottle,
    BaseFocus,
    BaseActive,
    BaseEllipsis
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

button {
  padding: 10px 15px;
  margin-left: 0;
  margin-right: 10px;
  font-size: 16px;
  border-radius: 13px;
  background-color: #50bfff;
  border-color: #50bfff;
}

button:hover {
  background-color: rgb(115, 204, 255);
  border-color: rgb(115, 204, 255);
}
</style>
