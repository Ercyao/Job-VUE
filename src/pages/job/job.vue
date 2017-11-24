<template>
	<div>
		<head-top class="btop">   
			<div slot="select">
			  	<ul>
					<li class="dropdown" v-for="(item,index) in items" @click="addLiClass(index)" :key="item.id">
			       	 	 {{item.name}} <span class="glyphicon" :class="changeIcon==index?'glyphicon-chevron-up':'glyphicon-chevron-down'"></span>
			  	 	</li>
			 	</ul>
			</div>	
    	</head-top> 
    	<div class="select_box">
			<div class="selectlist" >
				<ul  v-if="id===0">
			   		 <li v-for="(type, index) in types" :class="{ active:changeRed===index}" @click="change(index)">{{type.name}}</li>
			   </ul>
				<ul  v-else-if="id===1">
					<li v-for="(di, index) in dis" :class="{ active:changeRed===index}" @click="change(index)">{{di.disname}}</li>
				</ul>
				<ul  v-else-if="id===2">
					<li v-for="(sex, index) in sexs" :class="{ active:changeRed===index}" @click="change(index)">{{sex.name}}</li>
				</ul>
			    <div class="selectbtn_box"  v-show="shadeShow"><span @click="cancelBtn()">取消</span><span @click="confirmBtn()">确定</span></div>
			</div>
			<div class="shade"  v-show="shadeShow" @click="closeLi"></div>
		</div>	
    	
    	<!--兼职信息 start-->
    	<div class="box">
			<div class="index_box">
				<jobList></jobList>
			</div>
		</div>
		<!--兼职信息 end-->
		
		<footernav></footernav>
	</div>
</template>

<script>
import headTop from '../../components/header/header'
import jobList from '../../components/common/joblist'
import footernav from '../../components/footer/footer'
import axios from 'axios'


export default {
	data(){
		return{
			dis:[],
			types:[],
			changeRed:-1,
			id:'',
			changeIcon:-1,
			shadeShow:false,
			items: [
	        {
	          	name:'类型'
	        },{
	          	name:'区域'
	        },{
	          	name:'筛选'
	        }],
	      	sexs: [
	      	{
	          	name:'男'
	       },{
	          	name:'女'
	       }]
		}
		
	},
	created(){
		this.currentDis(),
		this.typeData()
 	},
	methods:{
		currentDis(){                   //获取当前位置	
			let i,j,n;
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
								if(loc==this.citys[i].cities[j].id){this.dis=this.citys[i].cities[j].dis;}
					   		}	
				   		}
					}).catch((err)=>{		console.log("err");		});
			 	}else{
			  	  	$.getScript('/static/js/currentCity.js', _result=> { 
						if (remote_ip_info.ret == '1') { 
							n=remote_ip_info.city+'市'; 
						} else { 
							alert('没有找到匹配的地址信息！'); 
						} 
					});
					axios.get('/static/json/citylistData.json').then(res=> {		
						this.citys = res.data;
						for (i in this.citys) {
							for (j in this.citys[i].cities) {
								if(n==this.citys[i].cities[j].name){
									this.dis=this.citys[i].cities[j].dis;
									
								}
							}
						 }	
					}).catch((err)=>{		
						console.log("err");		
					});
			 	}
			}
			
		},
		typeData(){              
			axios.get('/static/json/typeData.json').then(res=> {		
				this.types = res.data;
			}).catch((err)=>{		
				console.log("err");		
			});
		},
		change(index){
            this.changeRed = index;
         },
		addLiClass(index){
		    this.id= index;
		    this.changeIcon = index;
			this.shadeShow=true			
		},
		closeLi(){
			this.id= '';
		    this.changeIcon = -1;
			this.shadeShow=false
		},
		cancelBtn(){
			this.changeRed = -1;
		},
		confirmBtn(){
			this.id= '';
			this.changeIcon = -1;
			this.shadeShow=false
		}
		
	},
	components:{
		headTop,
		jobList,
		footernav
	}
}
</script>

<style lang="less" scoped>
@import '../../assets/less/less.less';

.br{
	border-right: 1px solid #888;
}
.mb14{
	padding-bottom: 1.4rem;
}


.select{
	width: 104%;
	height: @headtop/1.8;
	 	
}
ul{width: 101%;}
.dropdown{
	float: left;
	width: 33.3%;
	border-right: 1px solid #888;
	font-size: 4rem;
	height: 5rem;
}
.select_box{
	position: fixed;
	left: 0;
    right: 0;
    top: @headtop;
	z-index: 99;
	text-align: center;
	 
	.selectlist{
		position: relative;
	    z-index: 999;
	    width: 100%;
	    overflow-x: hidden;
	    ul{
	    	height: 50rem;
		    background-color: @white;
		    border: 1px solid #ccc;
		    -webkit-box-shadow: 0 6px 12px rgba(0,0,0,.175);
		    box-shadow: 0 6px 12px rgba(0,0,0,.175);
	    }
	    li{
	    	line-height: 7rem;
	    }
	    .active{
	    	background-color: rgb(247,247,247);
	    	color: @red;
	    } 
	    .selectbtn_box{
	    	position: fixed;
	    	z-index: 999;
	    	top: 50rem + @headtop;
	    	width: 100%;
	    	height: @headtop/1.5;
	    	line-height: @headtop/1.5;
	    	color: @white;
	    	span{border: 1px solid #ccc;}
	    	span:first-child{
	    		width: 40%;
	    		background: @black;
	    	}
	    	span:last-child{
	    		width: 60%;
	    		background: @red;
	    	}
		} 
	}
	
	.shade{
		position: fixed;
		top: 0;
	    width: 100%;
	    height: 100%;
	    opacity: 0.4;
	    background: #000;
	}
}
</style>