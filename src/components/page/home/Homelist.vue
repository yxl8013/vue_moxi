<template>
  <div class="homelist">
      <el-row>
        <el-col :span="12" v-for='(item,index) in h_goodslist' :key='index'><div class="goodsitem" @click='goDetail(item.ProductId)'>
          <img v-lazy="item.ProImg">
          <p>|&nbsp;&nbsp;&nbsp;{{item.ProductFrom}}&nbsp;&nbsp;&nbsp;|</p>
          <p>{{item.ProName}}</p>
          <p><span>¥{{item.ProUnitPrice}}</span><i>¥{{item.ReferPrice}}</i></p>
        </div></el-col>
      </el-row>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import { Lazyload } from 'mint-ui'; //懒加载
import Vue from 'vue';
Vue.use(Lazyload);    

export default {
  name: 'Homelist',
  components:{
  	
  },
  data () {
    return {
      h_goodslist:[]
      
    }
  },
  methods:{
      getgoods(){
        let toast = Toast({
          message: '数据加载中...',
          duration: -1,
          iconClass: 'fa fa-spinner fa-spin'
        });
        this.$axios.get('http://api.moximoxi.net/api/Home/GetHomeList?Id=209&pageStart=0&pageEnd=30')
        .then((res)=>{
          toast.close();
          this.h_goodslist = res.data.ReturnObjects.result.ActivityImgList[0].ClassLabelList[0].HomeProductList;
          // console.log(this.h_goodslist);
        }).catch((err)=>{
          toast.close();
          console.log(err);
        })

      },
      goDetail(id){
        this.$router.push('/detail/'+id);
      }
  },
  created(){
      this.getgoods();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url('../../../styles/main.less');
  .goodsitem{
    text-align: center;
    .margin(12,0,12,0);
    .fs(12);
    img{
      // .w(130);
      .h(120);
    }
    p{
      .w(180);
      .h(28);
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      .lh(28);
      span{
        .mr-r(18);
        color:#e83632;
        .fs(14);
      }
      i{
        text-decoration: line-through;
        color:#666;
        .fs(14);
      }
    }

  }




</style>
