<template>
  <div class="list">
      <Back :callback ='sortby' :keyword='keyword'></Back>
      <div class="goodslist"
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="30"

      >
        <el-row>
          <el-col :span="12" v-for='(item,index) in goodslist' :key='index'><div class="goodsitem" @click='goDetail(item.ProId)'>
            <img v-lazy="item.ProImg">
            <p>|&nbsp;&nbsp;&nbsp;{{item.ProductFrom}}&nbsp;&nbsp;&nbsp;|</p>
            <p>{{item.ProName|filter_fkh}}</p>
            <p><span>¥{{item.ProUnitPrice}}</span><i>¥{{item.ReferPrice}}</i></p>
          </div></el-col>
        </el-row>
      </div>
  </div>
</template>

<script>
import { InfiniteScroll } from 'mint-ui';
import Vue from 'vue';
Vue.use(InfiniteScroll);
import { Toast } from 'mint-ui';
import { Lazyload } from 'mint-ui'; //懒加载
Vue.use(Lazyload);  


import Back from './back.vue';  
export default {
  name : 'List',
  components:{
    Back
  },
  data(){
    return {
      loading:false,
      goodslist : [],
      keyword :'',
      page : 1,
      nodata : false,
      what : 'ADESC'
    }
  },
  methods:{
      loadMore(){
        let keyword = this.$route.params.keyword;
        this.keyword = keyword;
        let what = this.what;
         this.loading = true;
        this.getgoods(keyword,what);

      },
      goDetail(id){
        this.$router.push('/detail/'+id);
      },
      getgoods(keyword,what){  
          if(this.nodata){
              Toast({
                message: '已经到底了哦',
                duration: 2000
            
              });
              return ;
          }

          let toast = Toast({
          message: '数据加载中...',
          duration: -1,
          iconClass: 'fa fa-spinner fa-spin'
          });


          this.$axios.get(`http://api.moximoxi.net/API/SearchProduct/GetCategoryProList?page=${this.page}&top=10&orderBy=${what}&isFree=false&className=${keyword}`)
          .then((res)=>{
            // console.log(res);
            //无限加载边界处理if
             if(res.data.ReturnObjects.result.SearchProductList==0){
                  this.nodata = true ;
                  toast.close();
                  this.loading = false;
                  return false ;

            }

            this.goodslist = this.goodslist.concat(res.data.ReturnObjects.result.SearchProductList);
            this.page++;
            toast.close();
            this.loading = false;
            // console.log(this.goodslist);

          }).catch((err)=>{
             toast.close();
            this.loading = false;
            console.log(err);
          })
      },
      sortby(what){
              this.nodata = false ;
              this.goodslist=[];
              this.page = 1;
              let keyword = this.$route.params.keyword;
              this.keyword = keyword;
              this.what = what;
              this.getgoods(keyword,this.what);

        
      }

  },
  created(){
      // let keyword = this.$route.params.keyword;
      // this.keyword = keyword;
      // let what = 'ADESC';
      // this.getgoods(keyword,what);
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url('../../../styles/main.less');
.list{
  // .padding(98,0,60,0);

}
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