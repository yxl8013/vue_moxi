<template>
  <div class="ad">
    <div class="top">
      <ul>
        <li v-for='(item,index) in arr' :key='index'>
          <img v-lazy="item.url">
          <p>{{item.name}}</p>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <img v-lazy="imgurl">
    </div>
  
  </div>

</template>

<script>
import Vue from 'vue';
import { Lazyload } from 'mint-ui'; //懒加载
Vue.use(Lazyload);  

export default {
  name: 'Ad',
  data () {
    return {
      imgurl: '',
      arr:[{name:'每日签到',url:'http://weixin.moximoxi.net/MoxiWap/img/sign.png'},{name:'品牌一览',url:'http://weixin.moximoxi.net/MoxiWap/img/brand.png'},{name:'代购代拍',url:'http://weixin.moximoxi.net/MoxiWap/img/shequ.png'},{name:'天天分享',url:'http://weixin.moximoxi.net/MoxiWap/img/share.png'}]
    }
  },
  methods:{
  	getdata(){
  		this.$axios.get('http://api.moximoxi.net/api/Home/GetHomeList?Id=209&pageStart=0&pageEnd=10')
  		.then((res)=>{
  			// console.log(res.data.ReturnObjects.result.BnnerImgList);
  			this.imgurl = res.data.ReturnObjects.result.ActivityImgList[0].BannerImagesUrl;
        // console.log(this.imgurl);

  		}).catch((err)=>{
  			console.log(err);
  		})
  	}
  },
  created(){
  		this.getdata();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url('../../../styles/main.less');
.ad{
  .top{
      ul{
        display: flex;
        justify-content:space-around;
        .padding(2,18,2,18);
        li{
          .w(65);
          .padding(12,0,12,0);
          text-align: center;
          img{
          .w(30);
          .h(30);
          }
          p{
            .fs(14);
            .h(26);
            .lh(26);
          }
        }
      }
  }
  .bottom{
    img{
      .w(375);
      .h(120);
    }
  }
	
}



</style>