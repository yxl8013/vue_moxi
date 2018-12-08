<template>
  <div class="banner">
  	<mt-swipe :auto="3000">
	  <mt-swipe-item v-for='(item ,index) in bannerlist' :key='index'><img :src="item.ImageUrl"></mt-swipe-item>
	</mt-swipe>
  </div>

</template>

<script>
import Vue from 'vue';	
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

export default {
  name: 'Banner',
  data () {
    return {
      bannerlist: []
    }
  },
  methods:{
  	getBanner(){
  		this.$axios.get('http://api.moximoxi.net/api/Home/GetHomeList?Id=209&pageStart=0&pageEnd=10')
  		.then((res)=>{
  			// console.log(res.data.ReturnObjects.result.BnnerImgList);
  			this.bannerlist = res.data.ReturnObjects.result.BnnerImgList;


  		}).catch((err)=>{
  			console.log(err);
  		})
  	}
  },
  created(){
  		this.getBanner();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url('../../../styles/main.less');
.banner{
	.w(375);
	.h(180);
	img{
		.w(375);
		.h(180);
	}
}



</style>