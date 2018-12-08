<template>
  <div class="foot">
    <p class='logo'><a href="javascript:;"><img src="http://weixin.moximoxi.net/MoxiWap/img/favorite.png"><br>收藏</a></p>
    <p class='logo'><a href="javascript:;"><img src="http://weixin.moximoxi.net/MoxiWap/img/kefu.png"><br>客服</a></p>
    <p class="car"><a href="javascript:;">加入购物车</a></p>
    <p class='buy'><a href="javascript:;">立即购买</a></p>
  </div>

</template>

<script>

export default {
  name: 'Foot',
  data(){
      return {
       
      }
  },
  methods:{
    
  }
  



}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url('../../../styles/main.less');
.logo{
  .mr-t(-6);
}
.foot{
  position: fixed;
  .w(375);
  z-index: 900;
  // bottom:0;
  .bottom(-1);
  left:0;
  right:0;
  background-color: #fff;
  .h(60);
  box-sizing:border-box;
  .padding(10,10,0,10);
  display: flex;
  justify-content: space-around;
  p{
    a{
      color:#000;
      .fs(12);
      img{
        .w(26);
        .h(26);
      }
    }
  }
  .car{
     .w(118);
    .h(42);
    box-sizing:border-box;
    .lh(42);
    background: #FF3333;
    color: white;
    text-align: center;
    a{
      color:#fff;
      .fs(14);
      font-weight: 600;
    }
  }
  .buy{
     .w(118);
    .h(42);
    .lh(42);
    box-sizing:border-box;
    background:#fff;
    border :2px solid #ccc;
    text-align: center;
    a{
      color:#000;
      .fs(14);
      font-weight: 600;
    }
  }





}
 



</style>