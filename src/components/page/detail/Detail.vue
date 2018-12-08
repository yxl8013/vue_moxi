<template>
    <div class='detail'>
        <Head :titles='title'></Head>
        <Foot></Foot>
       <div class="content">
          <div class='pic'><img v-lazy='bigpicUrl'></div>
          <div class="title">
              <h2>{{title}}</h2>
          </div>
          <div class="table">
              <el-row>
                  <el-col :span="12" v-for='(item,index) in detail' :key='index' class='table_item'>
                        <span>{{item.attrName}} </span><strong>:</strong><span>{{item.attrValue}}</span>
                  </el-col>
                  <el-col :span="12" class='table_item'>
                    <span>销量 </span><strong>:</strong><span>{{desc.saleCount}}</span>
                  </el-col>
                  <el-col :span="12" class='table_item'>
                    <span>库存 </span><strong>:</strong><span>{{desc.TotalStockCount}}</span>
                  </el-col>
                  <el-col :span="12" class='table_item'>
                    <span>重量 </span><strong>:</strong><span>{{desc.proWeight}}kg</span>
                  </el-col>
                  <el-col :span="12" class='table_item'> <span>售价 </span><strong>:</strong><span class="red"> ¥ {{desc.proUnitPrice}} </span><del> ¥ {{desc.referPrice}} </del></el-col>
              </el-row>
          </div>
          <div class="tips">
              <img src="http://weixin.moximoxi.net/MoxiWap/img/niu.png">
              <div class="tipsbox">
                <h5>么么酱点评</h5>
                <p>{{tips}}</p>
              </div>
          </div>
          <p class='other'><span>其他小伙伴说</span><i class="fa fa-chevron-right" aria-hidden="true"></i></p>
       </div>
       <div class='ad'>
         <div class="adpic" @click='gohome()'><img src="http://weixin.moximoxi.net/MoxiWap/img/892%E5%8F%8C%E5%8D%81%E4%B8%80(1).jpg"></div>
         <ul>
            <li><img src="http://weixin.moximoxi.net/MoxiWap/img/%E7%BB%84%2032.png"><p>摩西日购</p></li>
            <li><img src="http://weixin.moximoxi.net/MoxiWap/img/%E7%BB%84%2029.png"><p>正品保障</p></li>
            <li><img src="http://weixin.moximoxi.net/MoxiWap/img/%E7%BB%84%2030.png"><p>日本直邮</p></li>
            <li><img src="http://weixin.moximoxi.net/MoxiWap/img/%E7%BB%84%2031.png"><p>无忧退货</p></li>
          </ul>
       </div>
       <div class="tab_box">
          <div class="tabs"><span class="nobr" :class='sel==1?"sel":""' @click='sel=1'> 产品详情</span><span :class='sel==2?"sel":""' @click='sel=2'>直邮FAQ</span></div>
          <transition  
            enter-active-class='animated fadeIn'
            leave-active-class='animated fadeOut'
          >
            <div class="xiangqing" v-html='content' v-show='sel==1'>  </div>
          </transition>
          <transition  
            enter-active-class='animated fadeIn'
            leave-active-class='animated fadeOut'
          >
            <div class="zhiyou" v-show='sel==2'>
              <img src="http://weixin.moximoxi.net/MoxiWap/img/FAQ1.png">
              <img src="http://weixin.moximoxi.net/MoxiWap/img/FAQ2.png">
              <img src="http://weixin.moximoxi.net/MoxiWap/img/FAQ3.png">
            </div>
          </transition> 
       </div>
    </div>
    
  
</template>
<script>
import Vue from 'vue'
import { Toast } from 'mint-ui';
import { Lazyload } from 'mint-ui'; //懒加载
Vue.use(Lazyload);  

//引入组件
  import Head from './Head.vue'
  import Foot from './Foot.vue'


  export default{
    name:'Detail',
    components:{
      Head,Foot
    },
    data(){
      return {
        data : {},
        bigpicUrl:'',
        title:'',
        detail : [],
        desc : {},
        tips : '',
        content : '',
        sel: 1
     
      }
    },
    created(){
        let id = this.$route.params.id;
        this.getData(id);
    },
    mounted(){
      
    },
    methods:{
        gohome(){
            this.$router.push('/home');
        },
        getData(id){
            let toast = Toast({
              message: '数据加载中...',
              duration: -1,
              iconClass: 'fa fa-spinner fa-spin'
            });

            this.$axios.get('http://api.moximoxi.net/API/Product/ProductDetail?proId='+id)
            .then((res)=>{
              // console.log(res.data.ReturnObjects.result[0]); 
              toast.close();
              let obj = res.data.ReturnObjects.result[0];
              this.data = obj ;
              this.bigpicUrl = obj.ProductJsons[0].proImg;
              this.title = obj.ProductJsons[0].proName ;
              this.detail = obj.AttrJsons;
              this.desc = obj.ProductJsons[0] ;
              this.tips = obj.ProductJsons[0].Tips  ;
              this.content = obj.ProductJsons[0].proContent ;
              Vue.nextTick(()=>{
                //修改图片样式
                  let tables = document.querySelectorAll('.xiangqing table');
                  // console.log(tables);
                  for(var i=0;i<tables.length;i++){
                    tables[i].style.width = 100+"%";
                    tables[i].style.height = 'auto';
                  }
                  let imgs =  document.querySelectorAll('.xiangqing p img');
                  for(var i=0;i<imgs.length;i++){
                    imgs[i].style.width = 100+"%";
                    imgs[i].style.height = 'auto';
                  }
                  //让y滚动条置顶
                   window.scrollTo(0,0);
              })

            }).catch((err)=>{
              toast.close();
              console.log(err);
            })
        }
    }
  }

</script>

<style lang="less" scoped>
@import url("../../../styles/main.less");
.zhiyou{
  .w(375);
   img{
    .w(375);
   }
}
.xiangqing{
  .w(350);
  overflow: hidden;
  margin:0 auto;
  .padding(0,12,0,13);
  p{
    text-align: center;
  }
}
.detail{
  .w(375);
  .padding(60,0,60,0);
  background-color:#F3F3F3;
}
  .content{
    .pic{      
      text-align: center;
      img{
          .w(360);
          .h(360);

      }
    }
    .title h2{
        color: #333;
        .fs(14);
        .lh(20);
        .padding(12,12,6,12);
        border-bottom: solid 1px #ccc;
    }
    .table{
        .padding(12 ,0,16,12);
         border-bottom: solid 1px #ccc;
       .table_item{
           .w(180);
           .fs(14);
           color:#666;
           .lh(22);
           .red{
            color:red;
            .fs(16);
            font-weight: 600;
           }

       }
    }
    .tips{
      display: flex;
      .padding(12,12,12,12);
      justify-content: space-around;
      img{
        .w(66);
        .h(99);
      }
      .tipsbox{
        .w(300);
        .padding(0 ,0,20,12);
          h5{
            .fs(14);
            color:#000;
          }
          p{
             .fs(12);
             color:#666;
             .lh(20);
          }
      } 
    }
    .other{
          display: flex;
          justify-content: space-between;
          .fs(16);
          .h(36);
          .lh(36);
          border-bottom: 1px solid #ccc;
          border-top:1px solid #ccc;
          .padding(0,12,0,12);
          .mr-b(10);
          i{
            .mr-t(12);
          }
    }
  }
  .adpic{
    text-align: center;
    img{
      .w(343);
      .h(75);
     
    }
  }
  .ad ul{
      display: flex;
      justify-content: space-around;
      .padding(18,12,26,12);
      li{
          img{
            .w(70);
            .h(70);

          }
          p{
            .fs(14);
            .lh(18);
            text-align: center;
          }
      }
  }
  .tab_box{
      .tabs{
        text-align: center;
        .mr-b(12);
        .nbr{
          border-right:none;
        }
        .sel{
                  background: #333;
                  color: white;
            }
        span{
            border: solid 1px #333;
            .w(147);
            .h(42);
            display: inline-block;
            .lh(42);
            .fs(16);
            color: #333;
            
        }    
      }
  }




</style>