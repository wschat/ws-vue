import * as Base from './base'
import Icon from './icon'
import {Button,BtnGroup} from './button'
import {Col,Row} from './layout'
import Modal from './modal'
import Message from './message'
import MessageBox from './message-box'
import Tag from './tag'
import {Carousel,CarouselItem} from './carousel'

const components={
	...Base,
	Icon,
	Button,
	BtnGroup,
	Row,
	Col,
	Tag,
	Carousel,
	CarouselItem,
}
const install=function(Vue,options={}){
	if(install.installed)return;
	Object.keys(components).forEach(key => {
        Vue.component(key, components[key])
    })

    
    
    Vue.prototype.$modal=Modal.Instance(Vue)
    Vue.prototype.$msg=Message.Instance(Vue).message
    Vue.prototype.$msgbox=MessageBox.Instance(Vue).open

}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}
const api={
	version:'1.0.0',
	install,
	...components,
}
export default api