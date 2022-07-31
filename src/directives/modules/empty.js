//空状态指令

import Vue from 'vue'

export default {
  update(el, binding) {
    //默认添加相对定位
    el.style.position = el.style.position || 'relative'
    //获取宽高
    const { offsetHeight, offsetWidth } = el
    //定义默认显示内容和图片
    const { content, img } = binding.value
    const image = img ? `<img src="${img}" height="30%" width="30%"></img>` : ''
    //默认样式
    const _defaultStyle =
      'position:absolute;top:0;left:0;z-index:9999;background:#fff;display:flex;justify-content: center;align-items: center;'
    //创建触发指令时显示的标签
    const _empty = Vue.extend({
      template: `<div style="height:${offsetHeight}px;width:${offsetWidth}px;${_defaultStyle}">
        <div style="text-align:center">
          <div>${image}</div>
          <div>${content || '暂无数据'}</div>
        </div>
      </div>`
    })

    //将默认标签显示到原位置
    const component = new _empty().$mount().$el
    el.appendChild(component)
  }
}
