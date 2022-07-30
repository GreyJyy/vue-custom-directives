import focus from './modules/focus'
import throttle from './modules/throttle'
const directives = {
  focus,
  throttle
}

export default {
  install(app) {
    Object.keys(directives).forEach(key => app.directive(key, directives[key]))
  }
}
