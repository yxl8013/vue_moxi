<template>
	<div class='search'>
		<div class="headers">
		    <div class='toback' @click='back()'><i class="fa fa-chevron-left" aria-hidden="true"></i></div>
		    <div class="search">
		    	<i class="fa fa-search" aria-hidden="true"></i><input type="text" name="" placeholder="搜索你感兴趣的内容" v-model='keyword' @keyup.enter='search'>
		    	<i class="fa fa-times-circle del" aria-hidden="true" @click="del"></i>
		    </div>
  		</div>
  		<div class="other">
  			最近搜索 :
  			<p>无搜索历史</p>
  		</div>
  		



	</div>


</template>
<script>

export default{
	name:'Search',
	data(){
		return {
			keyword :''
		}
	},
	methods:{
		back(){
			this.$router.back(-1);
		},
		del(){
			this.keyword = '' ;
		},
		search(){
			let kw = this.keyword ;
			this.$router.replace('/searchlist/'+kw);
		}
		
		
	}

}	

</script>
<style lang="less" scoped>
@import url('../../../styles/main.less');
.search{
	.w(375);
	box-sizing:border-box;
	.other{
		.fs(12);
		color:#000;
		.padding(20,20,0,20);
		.h(607);
		.w(375);
		box-sizing:border-box;
		background-color: #f3f3f3;
		border-top:1px solid #ccc;
		p{
			.h(32);
			.lh(32);
			.fs(16);
			color:#999;
		}
	}

}
	.headers{
	
		.w(375);
		.h(60);
		box-sizing:border-box;
		.padding(12,0,12,0);
		display: flex;
		.toback{
			i{
				.w(36);.h(36);display: block;
				.fs(26);.lh(36);text-align: center;
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
			.del{
				.left(236);
				.top(1);
				.fs(30);
			}

		}
		.search input{
			box-sizing: border-box;
			box-sizing:border-box;
			.w(265);
			.h(33);
			.b-r(20);
			.fs(14);
			border:1px solid #666;
			.pd-l(36);
			.pd-r(36);
			.lh(33);
			outline: none;

		}

	}


</style>