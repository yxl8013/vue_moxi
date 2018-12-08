<template>
  <div class="classify">
      <div class="tab">
        <span class="sel">分类</span>
        <strong>|</strong>
        <span>品牌</span>
      </div>
      <ul class='list'>
        <li v-for='(item ,index) in classifyList' :key='index'>
          <div class="picbox">
            <a href="javascript:;">
              <img :src="item.proClassID|getsrc">
            </a>
            <div class="desc">{{item.proClassName}}</div>
          </div>
          <div class="conbox">
            <a href="javascript:;" v-for='(item1,index1) in item.ThirdJsons' @click='golist(item1.proClassName)'>{{item1.proClassName}}</a>
          </div>
          <div class="more">点击显示更多分类</div>
        </li>
      </ul>
  </div>
</template>

<script>

export default {
  name: 'Classify',
  components:{
  	
  },
  data () {
    return {
      classifyList : []
      
    }
  },
  methods:{
    getData(){
      this.$axios.get('http://api.moximoxi.net/api/Category/ProClassCategory',{})
      .then((res)=>{
        // console.log(res.data.ReturnObjects.result);
        this.classifyList = res.data.ReturnObjects.result;
      }).catch((err)=>{
        console.log(err);
      })
    },
    golist(kw){
      let reg = /[\/]/g;
      let res = kw.replace(reg,'%2f');
      // console.log(res);
      this.$router.push('/list/'+res);
    }

  },
  created(){
     this.getData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url('../../../styles/main.less');
.tab{
  border-top:1px solid #ccc;
  display: flex;
  background-color:#fff;
  .fs(12);
  justify-content: space-around;
  .h(38);
  .lh(38);
  box-sizing: border-box;
  span{
    .w(183);
    text-align: center;
  }
  .sel{
      border-bottom: solid 3px #ff3333;
      color: #ff3333;
  }
}
.classify{
	.padding(60,0,60,0);
  background-color:#efefef;
  li{
    background-color:#fff;
  }
}
.picbox{
  position: relative;
  a{
    display: block;
    img{
      .w(375);
      .h(100);
    }
  }
  .desc{
    position: absolute;
    top:0;
    left:0;
    .w(375);
    .h(100);
    text-align: center;
    .lh(100);
    background-color:rgba(0,0,0,.6);
    color:#fff;
    font-weight: 900;
    .fs(16);
    z-index: 99;
  }

}
.conbox{
  .padding(0,16,12,16);
  overflow: hidden;
  a{
    float: left;
    .fs(12);
    color:#333;
    .mr-r(18);
    .h(26);
    .lh(26);
  }
}
.more{
  .w(375);
  text-align: center;
  color:red;
  .fs(12);
  .lh(28);
  .h(28);
  .mr-b(20);
}

</style>