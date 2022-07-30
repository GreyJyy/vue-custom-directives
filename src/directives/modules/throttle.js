//节流指令

export default {
  bind(el, binding) {
    const throttleTime = setThrottleTime(binding, defaultTime)
    let timer = null
    el.addEventListener(
      defaultEvent,
      event => {
        //首次必定执行
        if (!timer) {
          timer = setTimeout(() => {
            timer = null
          }, throttleTime)
        } else {
          // 阻止事件冒泡并且阻止该元素上同事件类型的监听器被触发
          event && event.stopImmediatePropagation()
        }
      },
      true
    )
  }
}

const defaultTime = 2000 // 默认节流时间
const defaultEvent = 'click' // 默认监听事件

//设置节流时间
function setThrottleTime(binding, defaultTime) {
  let throttleTime = binding.value
  if (!throttleTime) return defaultTime
  return throttleTime
}
