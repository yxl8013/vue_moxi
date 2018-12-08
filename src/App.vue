<template>
  <div id="app">
  <!--   <Header v-show='$route.name!=="list"'></Header> -->
    <Header v-show='show'></Header>
    <keep-alive include ='Home,Classify'>
       <router-view></router-view>

    </keep-alive>
   
   <!--  <Footer v-show='$route.name!=="list"'></Footer> -->
    <Footer v-show='show'></Footer>
    <Gotop></Gotop>
  </div>
</template>

<script>
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Home from './components/page/home/Home'
import Gotop from './components/common/Gotop'
import indexNav from './components/page/indexnav/indexNav'
import Classify from './components/page/classify/Classify'
import List from './components/page/list/List'
import Search from './components/page/search/Search'
import Searchlist from './components/page/search/Searchlist'
import Detail from './components/page/detail/Detail'

export default {
  name: 'App',
  components: {
        Header,
        Home,
        Footer,
        Gotop,
        indexNav,
        Classify,
        List,
        Search,
        Searchlist,
        Detail
  },
  methods:{

  },
  data(){
    return {
        show: true
    
    }

  },
  watch: {
      '$route' (to, from) {
        //header footer 组件隐藏
         if(this.$route.name=="list"){
              this.show = false;
          }else if(this.$route.name =='search'){
                  this.show  = false;
          }else if(this.$route.name =='searchlist'){
                  this.show  = false;
          }else if(this.$route.name =='detail'){
                  this.show  = false;
          }else{
                this.show = true ;
          }
      }
  },  
  created(){
      if(this.$route.name=="list"){
              this.show = false;
          }else if(this.$route.name =='search'){
                  this.show  = false;
          }else if(this.$route.name =='searchlist'){
                  this.show  = false;
          }else if(this.$route.name =='detail'){
                  this.show  = false;
          }else{
                this.show = true ;
          }

  }
 
}
</script>

<style lang="less" scoped>
@import url('./styles/main.less');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  .fs(16);

  
}
</style>
