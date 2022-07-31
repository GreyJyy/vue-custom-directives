//超出文本省略指令

export default {
  bind(el, binding) {
    el.style.width = `${binding.arg || 100}px`
    el.style.whiteSpace = 'nowrap'
    el.style.overflow = 'hidden'
    el.style.textOverflow = 'ellipsis'
  }
}
