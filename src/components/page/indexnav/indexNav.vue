
<template>
	<div class='indexnav'>
		<div class="pic"><img :src="picUrl"></div>
		<h3>{{name}}</h3>
		<div class="goodslist"
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="30"
    >
	      <el-row>
	        <el-col :span="12" v-for='(item,index) in h_goodslist' :key='index'><div class="goodsitem" @click='goDetail(item.ProductId)'>
	          <img v-lazy="item.ProImg">
	          <p>|&nbsp;&nbsp;&nbsp;{{name}}&nbsp;&nbsp;&nbsp;|</p>
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

export default {
  name: 'indexnav',
  components:{
  	
  },
  data () {
    return {
      loading:false,
      pageindex:0,
      h_goodslist:[],
      picUrl:'',
      name: '' ,
      nodata : false
      
    }
  },
	watch: {
    	'$route' (to, from) {
      		// 对路由变化作出响应...
      		let id = this.$route.params.id;
          this.nodata = false ;
          this.h_goodslist=[];
          this.pageindex = 0;
    		this.getgoods(id);
    	}
    },		
  	methods:{
      loadMore(){
        this.loading =true;
        this.pageindex ++ ;
        let id = this.$route.params.id;
        this.getgoods(id,this.pageindex);

      },
      goDetail(id){
        this.$router.push('/detail/'+id);
      },
      getgoods(id,page){
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
        this.$axios.get('http://api.moximoxi.net/api/Home/GetHomeMenuNavigation?ProClassId='+id+'&pageIndex='+page)
        .then((res)=>{
        	// console.log(res);
        	this.name = res.data.ReturnObjects.result[0].ActivityName;
        	this.picUrl = res.data.ReturnObjects.result[0].BannerImagesUrl;
           //无限加载边界处理if
          if(res.data.ReturnObjects.result[0].ClassLabelList[0].HomeProductList==0){
                  this.nodata = true ;
                  toast.close();
                  this.loading = false;
                  return false ;

          }
          
          this.h_goodslist =this.h_goodslist.concat(res.data.ReturnObjects.result[0].ClassLabelList[0].HomeProductList);

            toast.close();
            this.loading = false;

            // console.log(this.h_goodslist);
        }).catch((err)=>{
          console.log(err);
          toast.close();
          this.loading = false;
        })

      }
  },
  created(){
  	// let id = this.$route.params.id;
   //  this.getgoods(id);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url('../../../styles/main.less');
.indexnav{
	.padding(98,0,60,0);
	.pic{
		img{
			.w(375);
		}
	}
	h3{
		.padding(13,0,13,0);
		color: red;
		.fs(12);
		text-align: center;
		background: url('../../../assets/tab_bg.png') no-repeat bottom;
		border-bottom: 2px solid #efefef;
	}
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