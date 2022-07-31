// //节流指令

export default {
  bind(el, binding) {
    let _val = binding.value, //获取指令传递的参数
      _wait = 500, //_wait默认500毫秒
      _type = 'click', //默认为点击事件
      _params = [], //默认参数为空
      _func
    if (_val == null) return //如果没有传递任何参数则什么也不做
    if (typeof _val !== 'object' && typeof _val !== 'function') return //如果传递的参数既不是对象也不是函数则也什么都不做
    if (binding.arg) _wait = +binding.arg //获取冒号后面的参数并转化为数字型
    if (typeof _val === 'function') _func = _val //如果传递的是函数则直接赋给func
    if (typeof _val === 'object') {
      //如果是对象则对对象进行解析
      _func = _val.func || function () { }
      _type = _val.type || 'click'
      _params = _val.params || []
    }
    el.$type = _type //为了将_type共享到unbind生命周期中
    //proxy函数可以给func传递参数，同时保证func中的this指向
    el.$handle = throttle(function proxy(...args) {
      return _func.apply(this, [..._params, ...args])
    }, _wait)
    el.addEventListener(_type, el.$handle) //监听指定事件
  },
  unbind(el) {
    el.removeEventListener(el.$type, el.$handle) //解绑时移除事件监听
  }
}

//节流函数 --注意这里默认采用时间戳实现节流,首次立即执行,停止触发事件后执行函数也停止触发,更加符合实际开发场景(比如防止表单重复提交)
/**
 *
 * @param {Function} func 待执行的回调函数
 * @param {Number} wait 节流时间
 * @returns
 */

function throttle(callback, delay) {
  let preTimeStamp = 0
  return function (...args) {
    const nowTimeStamp = +new Date()
    if (nowTimeStamp - preTimeStamp <= delay) return
    callback.apply(this, args)
    preTimeStamp = nowTimeStamp
  }
}

//定时器时间戳结合版本 --如果需要的是首次立即执行,停止触发后也要再执行一次可以使用定时器与时间戳结合版本
/**
 function throttle(callback, delay) {
  let preTimeStamp = 0,
    timeout = null
  return function (...args) {
    //记录触发瞬间的时间戳
    const nowTimeStamp = +new Date(),
      difTimeStamp = nowTimeStamp - preTimeStamp
    if (difTimeStamp < delay) {
      //多次触发时,监测是否已经设置了定时器,如果有则等待已设置的定时器执行
      if (timeout) return
      //如果两次触发间隔在delay毫秒内,则设置一个定时器,在剩余时间(delay-两次触发间隔)后调用回调函数
      timeout = setTimeout(() => {
        callback.apply(this, args)
        //调用瞬间置空timeout便于下次执行
        timeout = null
        //将起始时间戳重置为调用瞬间的时间
        preTimeStamp = +new Date()
      }, delay - difTimeStamp)
      return
    }
    //如果两次触发间隔大于delay毫秒,则移除遗留的定时器
    clearTimeout(timeout)
    //置空timeout便于下次执行
    timeout = null
    //直接调用函数
    callback.apply(this, args)
    //将起始时间戳重置为触发瞬间的时间戳
    preTimeStamp = nowTimeStamp
  }
}
 */