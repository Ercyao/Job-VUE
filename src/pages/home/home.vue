<template>
  <div class="home mb10">
    <head-top class="wtop"  :class='{scroll: isActive}'>
    		<router-link to="/city" class="col-xs-4 col-sm-3" slot="city" tag="div">
					<span id="curcity">{{curcity}}</span><span class="ml1 glyphicon glyphicon-map-marker"></span>
				</router-link>
				<router-link to="/search"  class="col-xs-8 col-sm-8 searchbox text-center" slot="search"  tag="div">
				  	<span class="bg"></span>
						<span class="txt">搜索兼职、品牌或地点</span>					
				</router-link>
    </head-top> 
    
    <!-- 轮播图 start-->
    <div class="carousel">
    	<div id="WBAQPage" class="WBAQPage">
        <carousel :slides="slides" :inv="invTime"></carousel>
      </div>
    </div>   
    <!-- 轮播图 end-->
    
  <!--主体 start-->
  
		<div class="separatrix"></div>
		
		<!--分类查看 start-->
		<div class="index_box">
			<div class="index_headline"><span class="right_arrows"></span><span class="text-muted">分类查看</span></div>
			<div class="classify text-center">
				<ul class="row flex-between">
					<router-link to="/job" class="col-xs-3 col-sm-3 allcolor" tag="li">
						<span class="glyphicon glyphicon-th-large"></span>
						<p>全部</p>
					</router-link>
					<router-link to="/job" class="col-xs-3 col-sm-3 nearbycolor" tag="li">
						<span class="glyphicon glyphicon-road"></span>
						<p>附近</p>
					</router-link>
					<router-link to="/job" class="col-xs-3 col-sm-3 weekendscolor" tag="li">
						<span class="glyphicon glyphicon-calendar"></span>
						<p>周末</p>
					</router-link>
				</ul>
			</div>
		</div>
		<!--分类查看 end-->
		
		<div class="separatrix"></div>
				
		<!--精选推荐 start-->
		<div class="index_box">
			<div class="index_headline"><span class="right_arrows"></span><span class="text-muted">精选推荐</span></div>
			<jobList></jobList>
		</div>
		<!--精选推荐 end-->
		
	<!--主体 end--> 

   <footernav></footernav>
  </div>
</template>
<script>
import headTop from '../../components/header/header'
import footernav from '../../components/footer/footer'
import carousel from '../../components/carousel/carousel'
import jobList from '../../components/common/joblist'
import axios from 'axios'


export default {
  data () {
    return {
			curcity:'',
    	isActive:false,
      invTime: 2000,
      slides: [
        {
          src:require('../../assets/img/head_1.jpg'),
          title:'1', 
        },{
          src:require('../../assets/img/head_2.jpg'),
          title:'2'
        },{
          src:require('../../assets/img/head_3.jpg'),
          title:'3'
        },{
          src:require('../../assets/img/head_4.jpg'),
          title:'4'
        }
      ]
    }
  },
  components: {
    headTop,
		footernav,
		carousel,
		jobList
  },
  mounted () {
 		window.addEventListener('scroll', this.headTopScroll)
	},
	destroyed () {
	  window.removeEventListener('scroll', this.headTopScroll)
	},
	created(){
		this.currentCity()
  },
  methods: {
		headTopScroll () {
		  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
		  if (scrollTop > 500) {
		    this.isActive = true
		  } else {
		    this.isActive = false
		  }
		},
    currentCity(){                   //获取当前位置	
			let url=location.href; 
			let loc = url.substring(url.lastIndexOf('=')+1, url.length);
			if(loc ){
				if( !isNaN( loc ) )
			  {
					let i,j;
					axios.get('/static/json/citylistData.json').then(res=> {		
					this.citys = res.data;
					for (i in this.citys) {
						for (j in this.citys[i].cities) {
							if(loc==this.citys[i].cities[j].id){this.curcity=this.citys[i].cities[j].name;}
				   	}	
			   	}
					}).catch((err)=>{		console.log("err");		});
			  }else{
			    $.getScript('/static/js/currentCity.js', _result=> { 
						if (remote_ip_info.ret == '1') { 
							this.curcity=remote_ip_info.city+'市'; 
						}else { 
							alert('没有找到匹配的地址信息！'); 
						} 
					});
			  }
			}
		}		
	}
}
</script>

<style lang="less" scoped>
@import '../../assets/less/less.less';
.searchbox{
  position: relative;
	border-radius: 1.5rem;
	.bg{
	  position: absolute;
	  left: 0;
		width: 100%;
		height: @headtop/1.8;
		opacity: 0.3;
		background: @white;
		 .border-radius(1rem;);
	}
	.txt{
	  position: absolute;
	  left: 0;
		z-index: 6;
		width: 100%;
	}
} 


.classify {
  color: @white;  
    li{
    	height: 14rem;
    	margin: 3% 0;
    	padding: 2%;
		  border-radius: 1rem;
		  box-shadow: 0.7rem 1rem 1.6rem rgba(0,0,0,0.2);
		  span{
		   	font-size: 8rem;
  		  height: 60px;
		  } 
		}
}

</style>