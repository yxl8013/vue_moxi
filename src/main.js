// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'   

import App from './App'  //引入根组件

import './styles/reset.css' //引入重置样式

import '../static/lib/animate.css' //引入动画样式

import Axios from 'axios' // 引入vue中发送请求插件
Vue.prototype.$axios = Axios;  //写进原型对象,实例可以随时调用

//引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)     //mintui 有内置的swipe 轮播图  可以不引入swiper

//引入路由 然后挂载
import router from './router/index.js'

import store from './store/index.js' //引入vux ,挂载到实例

import ElementUI from 'element-ui';   //引入ele-ui
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);   //使用element-ui

//全局注册一个过滤器 过滤字符串[]
Vue.filter('filter_fkh',(value)=>{
	let reg = /(\【[\u4e00-\u9fa5]*\】)/g;
	let res = value.replace(reg,'');
	return res ;
	

})
Vue.filter('getsrc',(value)=>{
	let res = 'http://weixin.moximoxi.net/MoxiWap/img/'+value+'.png';
	return res ;
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  components: { App },
  template: '<App/>'
})
