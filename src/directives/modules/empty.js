//处理图片错误指令

export default async function (el, binding) {
  const placeholderImage = require('@/images/icon.png') // 默认占位图
  const errorImage = binding.value.error // 外部传入的错误占位图
  el.setAttribute('src', placeholderImage)
  const realImageUrl = binding.value.real // 获取图片地址
  if (realImageUrl) {
    try {
      //资源地址有效
      await imageIsExist(realImageUrl)
      el.setAttribute('src', realImageUrl)
    } catch (error) {
      // 资源地址无效
      el.setAttribute('src', errorImage || placeholderImage)
    }
  }
}

/**
 * @description 检测图片地址是否有效
 * @param url
 */

const imageIsExist = function (url) {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.onload = function () {
      // 图片地址有效
      if (this.complete === true) {
        resolve(image)
      }
    }
    image.onerror = function () {
      // 图片加载失败
      reject('could not load image')
    }
    image.src = url
  })
}
