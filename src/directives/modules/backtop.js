//点击回到顶部指令

export default {
  bind(el, binding) {
    //如果指定了距离参数,初始化时隐藏;如果未指定,初始化时显示
    el.style.visibility = binding.arg ? 'hidden' : 'unset'
  },
  inserted(el, binding) {
    //监听滚动事件控制标签显示与隐藏
    el.$handleScroll = function () {
      el.style.visibility = window.scrollY > +binding.arg ? 'unset' : 'hidden'
    }
    if (binding.arg) window.addEventListener('scroll', el.$handleScroll)
    //点击回到顶部
    el.$handleClick = function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
    el.addEventListener('click', el.$handleClick)
  },
  unbind(el) {
    el.removeEventListener('click', el.$handleScroll)
    window.removeEventListener('scroll', el.$handleClick)
  }
}
