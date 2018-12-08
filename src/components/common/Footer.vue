<template>
  <div class="footer">
    <ul>
        <li v-for='(item,index) in arr' :key='index' @click='gopage(item.path)'>
          <img :src="item.url">
          <p>{{item.name}}</p>
        </li>
    </ul>
  </div>

</template>

<script>

export default {
  name: 'Footer',
  data(){
      return {
        arr : [{name:'首页',url:'http://weixin.moximoxi.net/MoxiWap/img/indexAct.png',path:'/home'},{name:'分类',url:'http://weixin.moximoxi.net/MoxiWap/img/classify.png',path:'/classify'},{name:'活动',url:'http://weixin.moximoxi.net/MoxiWap/img/activity.png',path:'/'},{name:'购物车',url:'http://weixin.moximoxi.net/MoxiWap/img/shoppingCart.png',path:'/'},{name:'我的',url:'http://weixin.moximoxi.net/MoxiWap/img/userCenter.png',path:'/'}]
      }
  },
  methods:{
    gopage(path){
      this.$router.push(path);
    }
  }



}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url('../../styles/main.less');
.footer{
  position: fixed;
  z-index: 100;
  // bottom:0;
  .bottom(-1);
  left:0;
  right:0;
  background-color: #fff;
  .h(60);
  ul{
      display: flex;
      justify-content:space-around;
      border-top:1px solid #d1d1d1;
      .padding(4,18,2,18);
      .h(60);
      box-sizing: border-box;
      li{
        .w(65);
        text-align: center;
        img{
        .w(28);
        .h(30);
        }
        p{
          .fs(12);
          .h(21);
          .lh(21);
          color:#666;
        }
      }
  }

}
 



</style>