<template>
	<div class="contain">
		 <div class="header">
		    <div class='logo' @click='gohome()'><h1>摩西海外购</h1><a href="javascript:;" title="摩西海外购"><img src="http://weixin.moximoxi.net/MoxiWap/img/logo.png"></a></div>
		    <div class="search" @click='gosearch'>
		    	<i class="fa fa-search" aria-hidden="true"></i><input type="text" name="" placeholder="搜索你感兴趣的内容">
		    </div>
  		</div>
  		<Nav v-show='$route.name!=="classify"'''></Nav>
	</div>

</template>

<script>

import Nav from './Nav.vue'	
export default {
  name: 'Header',
  components:{
  	Nav

  },
  methods:{
  	gohome(){
  		this.$router.push('/home');
  	},
  	gosearch(){
  			this.$router.push('/search');
  	}
  },
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url('../../styles/main.less');
	.contain{
		position:fixed;
		top:0;
		left: 0;
		right: 0;
		background-color: #fff;
		z-index: 100;
	}
	.header{
		box-sizing:border-box;
		h1{text-indent: -9999px;.w(0);.h(0);}
		.w(375);
		.h(60);
		.padding(12,0,12,0);
		display: flex;
		.logo{
			img{
				.w(36);.h(36);
			}
			.mr-l(20);
			.mr-r(20);
		}
		.search{
			position: relative;
			i{
				position:absolute;
				.left(8);
				.top(6);
				.fs(20);
			}

		}
		.search input{
			box-sizing: border-box;
			.w(265);
			.h(33);
			.b-r(20);
			.fs(14);
			border:1px solid #666;
			.pd-l(36);
			.lh(33);
			outline: none;

		}

	}
</style>