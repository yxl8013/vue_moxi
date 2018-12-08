<template>
    <div>
      <transition
        enter-active-class='animated fadeIn'
        leave-active-class='animated fadeOut'

      >
        <div class="gotop" @click='totop' v-show='show'>
          <img src="http://weixin.moximoxi.net/MoxiWap/img/goTop.png">
        </div>
      </transition>  
      
    </div>
    
  
</template>
<script>
  export default{
    name:'Gotop',
    data(){
      return {
        show:false
      }
    },
    created(){
      window.addEventListener('scroll',()=>{
        if(window.scrollY>=500){
          if(this.show==false){
             this.show = true;
          }
        }else{
          if(this.show == true){
            this.show = false;
          }
        }
      })
    },
    methods:{
      totop(){
        window.scrollTo(0,0);
      }
    }
  }

</script>

<style lang="less" scoped>
@import url("../../styles/main.less");
.gotop{
  .w(48);
  .h(48);
  position: fixed;
  z-index: 99;
  .bottom(90);
  .right(10);
  .fs(12);
  text-align:center;
  .lh(60);
  img{
    .w(48);
    .h(48);
  }
}



</style>