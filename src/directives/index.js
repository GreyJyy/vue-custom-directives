import focus from './modules/focus'
import throttle from './modules/throttle'
import active from './modules/active'

const directives = {
  focus,
  throttle,
  active
}

export default {
  install(app) {
    Object.keys(directives).forEach(key => app.directive(key, directives[key]))
  }
}
