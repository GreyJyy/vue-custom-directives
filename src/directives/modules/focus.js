//自动聚焦指令

export default {
  inserted(el) {
    //获取可聚焦元素
    el = getType(el)
    //自动聚焦
    el.focus()
  }
}

//限制有效类型
const _validTypes = ['INPUT', 'TEXTAREA'] //有效类型列表

//匹配有效类型
function getType(el) {
  //原生DOM上匹配
  if (_validTypes.includes(el.tagName)) {
    return el
  } else {
    //如果使用在自定义组件上,去组件的子节点找有效类型
    const _childInput = el.querySelector('input')
    //找到子input元素
    if (_childInput) return _childInput
    const _childTextArea = el.querySelector('textarea')
    //找到子textarea元素
    if (_childTextArea) return _childTextArea
    //找不到抛出错误
    throw new Error('Can not find the valid element for v-focus')
  }
}
