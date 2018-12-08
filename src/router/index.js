//配置组件路由
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../components/page/home/Home.vue'
import indexNav from '../components/page/indexnav/indexNav.vue'
import Classify from '../components/page/classify/Classify.vue'
import List from '../components/page/list/List.vue'
import Search from '../components/page/search/Search.vue'
import Searchlist from '../components/page/search/Searchlist.vue'
import Detail from '../components/page/detail/Detail.vue'

let router = new VueRouter({
	routes:[
		{path:'/',redirect:'/home'}, //重定向
		{path:'/home',component:Home,name:'home'},
		{path:'/indexnav/:id',component:indexNav,name:'indexnav'},
		{path:'/classify',component:Classify,name:'classify'},
		{path:'/list/:keyword',component:List,name:'list'},
		{path:'/search',component:Search,name:'search'},
		{path:'/searchlist/:keyword',component:Searchlist,name:'searchlist'},
		{path:'/detail/:id',component:Detail,name:'detail'},
	]

})
export default router 
