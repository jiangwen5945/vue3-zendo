import slideIn from './slideIn'
import waterMarker from './waterMarker'
import draggable from './draggable'
import debounce from './debounce'

const directives = {
  slideIn,
  waterMarker,
  draggable,
  debounce
}

export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key])
    })
  }
}
