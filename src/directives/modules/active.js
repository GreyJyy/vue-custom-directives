export default {
  bind(el, binding) {
    initParams(el, binding)
  },
  update(el, binding) {
    const { cNode, _childrens } = initParams(el, binding)
    //清除上一个标签的高亮样式
    const oldInd = binding.oldValue.currentInd
    _childrens[oldInd].className = ` ${cNode}`
  }
}

//默认高亮
function initParams(el, binding) {
  const _opts = binding.value
  const { activeClass, cNode, currentInd } = _opts
  //获取所有的以cNode为类名的DOM元素,以数组形式返回
  const _childrens = el.getElementsByClassName(cNode)
  //默认索引为0的标签高亮
  _childrens[currentInd].className += ` ${activeClass}`
  //返回cNode与_childrens给切换类名逻辑使用
  return {
    cNode,
    _childrens
  }
}
