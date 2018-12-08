<template>
	<div class='back'>
		<div class="header">
		    <div class='toback' @click='back()'><i class="fa fa-chevron-left" aria-hidden="true"></i></div>
		    <div class="search" @click='gosearch'>
		    	<i class="fa fa-search" aria-hidden="true"></i><input type="text" name="" placeholder="搜索你感兴趣的内容" v-model='keyword'>
		    </div>
  		</div>
  		<div class="sort">
  			<ul>
  				<li @click='from(1)' :class='sel==1?"sel":""'>销量 <i class="fa fa-long-arrow-down" aria-hidden="true"></i></li>
  				<li @click='from(2)' :class='sel==2?"sel":""'>价格 <i class="fa fa-long-arrow-down" aria-hidden="true"></i></li>
  				<li @click='from(3)' :class='sel==3?"sel":""'>最新</li>
  				<li>筛选</li>
  			</ul>
  		</div>



	</div>


</template>
<script>

export default{
	name:'Back',
	data(){
		return {
			saleSort : true,
			priceSort : true,
			sel:''
		}
	},
	props:['callback','keyword'],
	methods:{
		back(){
			this.$router.back(-1);
		},
		gosearch(){
			this.$router.replace('/search');
		},
		from(idx){
			//排序操作
			if(idx==1){
				this.sel =1;
				if(this.saleSort){
				
					 this.callback("AASC")
					
				}else{
					 this.callback("ADESC")
				}
				this.saleSort = !this.saleSort;
			}
			if(idx==2){
				this.sel =2;
				if(this.priceSort){
				
					 this.callback("BASC")
					
				}else{
					 this.callback("BDESC")
				}
				this.priceSort = !this.priceSort;
			}
			if(idx==3){
				this.sel =3;
				if(this.priceSort){
				
					 this.callback("CDESC")
					
				}else{
					 this.callback("ADESC")
				}
				this.priceSort = !this.priceSort;
			}
		}
	}

}	

</script>
<style lang="less" scoped>
@import url('../../../styles/main.less');
	.sel{
		color:red;
	}
	.sort{
		ul{
			display: flex;
			justify-content: space-around;
			box-shadow: inset 0px 0px 10px #efefef;
			li{
				.fs(14);
				.w(40);
				.h(48);
				.lh(48);
				text-align: center;
			}
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