import focus from './modules/focus'
import throttle from './modules/throttle'
import active from './modules/active'
import ellipsis from './modules/ellipsis'
import empty from './modules/empty'
import backtop from './modules/backtop'

const directives = {
  focus,
  throttle,
  active,
  ellipsis,
  empty,
  backtop
}

export default {
  install(app) {
    Object.keys(directives).forEach(key => app.directive(key, directives[key]))
  }
}
