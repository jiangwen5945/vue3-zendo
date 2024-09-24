import slideIn from './slideIn'
import waterMarker from './waterMarker'
import draggable from './draggable'
import debounce from './debounce'
import throttle from './throttle'

const directives = {
  slideIn,
  waterMarker,
  draggable,
  debounce,
  throttle
}

export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key])
    })
  }
}
