<template>
	<div class='head'>
		<div class="header">
		    <div class='toback' @click='back()'><i class="fa fa-chevron-left" aria-hidden="true"></i></div>
		    <p>{{titles}}</p>
		    <a href="javascript:;" class="carlogo"><i class="fa fa-shopping-cart" aria-hidden="true"></i></a>
  		</div>



	</div>


</template>
<script>

export default{
	name:'Head',
	data(){
		return {
		
		}
	},
	props:['titles'],
	methods:{
		back(){
			this.$router.back(-1);
		}
		
	}

}	

</script>
<style lang="less" scoped>
@import url('../../../styles/main.less');
.head{
	background-color: #fff;
	border-bottom:1px solid #ccc;
	.h(60);
	.w(375);
	box-sizing:border-box;
	position: fixed;
	top:0;
	left:0;
	right:0;
	z-index: 100;
	.carlogo{
		.mr-l(20);
		.fs(30);
		i{
			color:#000;
		}

	}
	p{
		.w(230);
		.h(48);
		.lh(38);
		.fs(14);
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
}
	.header{
		box-sizing:border-box;
		.w(375);
		.h(60);
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
	
	}


</style>