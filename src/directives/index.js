import focus from './modules/focus'
import throttle from './modules/throttle'
import active from './modules/active'
import ellipsis from './modules/ellipsis'

const directives = {
  focus,
  throttle,
  active,
  ellipsis
}

export default {
  install(app) {
    Object.keys(directives).forEach(key => app.directive(key, directives[key]))
  }
}
