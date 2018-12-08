<template>
  <div class="nav">
  	<ul>
  		<li  :class='selinit=="one"?"sel":""' @click='init'><a href="javascript:;">推荐</a></li>
      <!-- <router-link tag='li' to='/home'  active-class='sel'><a href="javascript:;">推荐</a></router-link> -->
  		<li v-for='(item ,index) in navlist' :key='index' :class='selinit==item.actName?"sel":""'><a href="javascript:;" @click='gonav(item.id,item.actName)'>{{item.actName}}</a></li>	
  	</ul>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      navlist:[],
      selinit : 'one'
    }
  },
  methods:{
  	getData(){
  		this.$axios.get('http://api.moximoxi.net/API/TabFloors/GetIndexTab',{})
  		.then((res)=>{
  			// console.log(res.data.ReturnObjects.result);
  			this.navlist = res.data.ReturnObjects.result;
  		}).catch((err)=>{
  			console.log(err);
  		})
  	},
    init(){
      this.selinit = 'one';
      this.$router.push('/home');
    },
    gonav(id,name){
        this.selinit = name;
        this.$router.push('/indexnav/'+id);
    }

  },
  created(){
  	this.getData();

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url('../../styles/main.less');
	.nav{
    .h(38);
    overflow: hidden;
		.mr-l(12);
		.mr-r(12);
	}
	ul{
		display: flex;
		justify-content: space-around;
		.fs(12);
		.sel{
			border-bottom:2px solid #e83632;
		}
		li{
			a{	display: inline-block;
				.h(36);
				.lh(35);
				color: #1f2022;}
		}
	}




</style>