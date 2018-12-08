<template>
  <div class="home">
    <Banner></Banner>
    <ad></ad>
    <Homelist></Homelist>
  </div>
</template>

<script>
import Banner from './Banner.vue';	
import ad from './ad.vue';	
import Homelist from './Homelist.vue';	


export default {
  name: 'Home',
  components:{
  	Banner,ad,Homelist
  },
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url('../../../styles/main.less');
.home{
	.padding(98,0,60,0);
}



</style>
