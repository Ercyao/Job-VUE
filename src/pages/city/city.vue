<template>
	<div>
	    <head-top class="btop" go-back='true' :head-title="citytitle"></head-top> 
    	
    	<div class="box">
    		<!--搜索框 start-->
			<div class="flex-between city_sea">
				<div class="txt">
					<span class="glyphicon glyphicon-search" id="search-icon"></span>
					<input type="text" v-model="searchval" @focus="cancelShow()" placeholder="请输入兼职名称或类型" class="search_text">
					<span class="glyphicon glyphicon-remove" id="cancel-icon" v-show="xShow" @click="cancelTxt()"></span>
				</div>
				<div class="btn">
					<span @click="searchResult()">搜索</span>
				</div>
			</div>
			<!--搜索框 end-->

			<!--城市列表 start-->
			<div v-show="cityShow">
				<!--当前城市 start-->
				<div class="city_now" >
					<span>当前定位</span>
					<router-link :to="{path: '/home'}" id="cur_city" tag="div">
						<span class="glyphicon glyphicon-map-marker"></span>
						<span id="curcity">{{curcity}}</span>
					</router-link>
				</div>
				<!--当前城市  end-->	
				
				<div class="separatrix"></div>	
				
				<div class="city_box">	
					<ul  v-show="isShow" id="listname"><li v-for="item in citys" @click.native="jump(index)">{{item.tag}}</li></ul>	
					<router-link v-for="item in citys" :key="item.name" to="/home" tag="div">
						<div class="title d_jump" :name="item.tag">{{item.tag}}</div>
							<ul id="cityname" >
								<router-link :to="{path: '/home',query: {id:city.id}}" v-for="city in item.cities" :key="city.cityid" tag="li">{{city.name}}</router-link>
							</ul>
						<div class="separatrix"></div>		
					</router-link>			
				</div>
			</div>
			<!--城市列表 end-->
			
			<!--搜索结果 start-->
			<div v-show="searchShow" class="city_result">	
				<div v-html="cityval"></div>
				<div class="text-center" v-show="noShow">
					抱歉，未查询到结果┑(￣Д ￣)┍ 
				</div>
			</div>
			<!--搜索结果 end-->
			
		</div>
		
	</div>
</template>

<script>
import headTop from '../../components/header/header'
import axios from 'axios'

export default {
	data () {
		return{
			citys:[],
			curcity:'',
			citytitle:'城市选择',
			isShow:false,
			xShow:false,
			cityShow:true,
			searchShow:false,
			searchval:'',
			cityval:'',
			noShow:false
		}	
	},
	created(){
		this.cityListData(),
		this.currentCity()
    },
    mounted () {
 		window.addEventListener('scroll', this.tabScroll),
 		this.$nextTick(function () {
	      window.addEventListener('scroll', this.onScroll)
	    })
	},
	destroyed () {
	 	window.removeEventListener('scroll', this.tabScroll)
	},
    methods: { 
    	onScroll () {
	      let scrolled = document.documentElement.scrollTop || document.body.scrollTop
	　　　 // 586、1063分别为第二个和第三个锚点对应的距离
	      if (scrolled >= 1063) {
	        this.steps.active = 2
	      } else if (scrolled < 1063 && scrolled >= 586) {
	        this.steps.active = 1
	      } else {
	        this.steps.active = 0
	      }
	    },
    	jump(index) {
			$('html body').animate({scrollTop: total}, 500);
	    },
    	currentCity(){                   //获取当前位置	
			$.getScript('/static/js/currentCity.js', _result=> { 
				if (remote_ip_info.ret == '1') { 
					this.curcity=remote_ip_info.city+'市'; 
				} else { 
					alert('没有找到匹配的地址信息！'); 
				} 
			});
		},
    	cityListData () {                  //获取城市列表	
			axios.get('/static/json/citylistData.json').then(res=> {		
				this.citys = res.data
			}).catch((err)=>{		
				console.log("err");		
			});
        },
        tabScroll () {
		  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
		  if (scrollTop > 500) {
		    this.isShow = true
		  } else {
		    this.isShow = false
		  }
		},
		cancelShow () {                 //搜索框
			this.xShow = true,
			this.cityShow=false,
			this.searchShow=true
		},
		cancelTxt () {                   //搜索框的关闭按钮
			this.searchval="",
			this.cityval="",
			this.cityShow=true,
			this.searchShow=false,
			this.xShow = false
		},
        searchResult () {	             //搜索按钮
           let i,j;  
           this.cityval =''
           	for (i = 0; i < this.citys.length; i++) {
	    		for (j in this.citys[i].cities) {
	    			if((this.citys[i].cities[j].name).indexOf(this.searchval)>-1){
	    				if(this.citys[i].cities[j].name!=this.cityval){		
	    					this.cityval += "<a href="+'#/home?id='+this.citys[i].cities[j].id+">"+ this.citys[i].cities[j].name+ "</a>";
						}
					}
	    		}
			}   
	    	if(this.cityval!=''){
	    		this.noShow=false
	    	}else{
	    		this.noShow=true
	    	}
		}
    },
	components:{
		headTop
	}
}
</script>

<style  lang="less">
@import '../../assets/less/less.less';

.city_sea{
	position: relative;
	padding: 3%;
	.txt{
		width: 80%;
		span{
			position: absolute;
			top: @headtop/2.2;
		}
		#search-icon{
			left: 5%;
		}
		#cancel-icon{
			right: 25%;
			opacity: 0.5;
		}
		.search_text{
			width: 100%;
		    height: @headtop/1.5;
		    border: 1px solid #888;
		    padding: 0 3% 0 10%;
		    box-shadow: 0 1rem 2rem rgba(80,80,80,0.2);
		}
	}
	.btn{
		width: 15%;
		span{
			margin-top: -15px;
			font-size: 3rem;
			background: #3E8F3E;
		    color: #fff;
		    line-height:@headtop/1.3;
		    width: 100%;
		    .border-radius(50%);
		    box-shadow: 0 1rem 2rem  rgba(0,0,0,0.4);
		}
	}
}
.city_now{
	padding: 0 5% 5%;
	span{
		font-size: 4rem;
	}
	#cur_city {
	    height:  @headtop/1.3;
	    line-height: @headtop/1.3;
	    margin: 1rem 3rem;
	    border: 0.2rem solid;
	    .border-radius(4rem);
	    text-align: center;
	    .act
	}
	.glyphicon{margin: 0 5% 0 -5%;}
}

.city_box{
	#listname {
		position: fixed;
		top: @headtop*2;
		right: 3%;
		font-size: 3rem;
		color: darkorange;
		text-align: center;
		li {
			width: 30px;
		}
	}
	.title {
	    font-size: 4rem;
	    display: block;
	    width: 90%;
	    line-height: @headtop/1.3;
	    border-bottom: 0.2rem solid #888;
	    margin: 0 5%;
	    color: #3E8F3E;
	    font-weight: 600;
	}
	#cityname {
	    line-height: @headtop/1.5;
	    margin: 2% 8%;
	    color: #888888;
	    li {
		    border-bottom: 0.2rem solid #F1F1F1;
		}
	}
}
.city_result{
	line-height: @headtop/1.2;
	div:first-child{
		padding: 0 5% 0;
		border-top: 2rem solid #f1f1f1;
		a{
			display: -webkit-box;
			border-bottom: 0.1rem solid #ccc;
			color: @black;	
		}
	}	
}


</style>