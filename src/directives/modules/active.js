//切换高亮指令

export default {
  bind(el, binding) {
    //实现初始化页面指定第一个高亮
    initParams(el, binding)
  },
  update(el, binding) {
    const { defaultClass, _childrens } = initParams(el, binding)
    //清除上一个标签的高亮样式
    const _oldInd = binding.oldValue.currentInd
    _childrens[_oldInd].className = ` ${defaultClass}`
  }
}

//默认高亮
function initParams(el, binding) {
  const _opts = binding.value
  const { activeClass, defaultClass, currentInd } = _opts
  //获取所有的以defaultClass为类名的DOM元素,以数组形式返回
  const _childrens = el.getElementsByClassName(defaultClass)
  //默认索引为0的标签高亮
  _childrens[currentInd].className += ` ${activeClass}`
  //返回defaultClass与_childrens给切换类名逻辑使用
  return {
    defaultClass,
    _childrens
  }
}
