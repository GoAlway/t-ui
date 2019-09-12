// 全局引入所有组件
import fbutton from './button'

const components = [
    fbutton
]

const install = function(Vue) {
    if(install.installed) return
    components.map(component => Vue.component(component.name, component))
}

if(typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    fbutton
}