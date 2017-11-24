<template>
	<div>
	    <head-top class="btop" go-back='true' :head-title="detailtitle"></head-top> 
    	
    	<div class="box">  
    		<div class="job_name">
    			<div class="fz5" style="padding-bottom: 2rem;">{{jobname}}</div>
				<div class="flex-between">
					<div><span class="red bold fz4">{{wage}} </span><span class="red fz3"> 元/日  </span> | 周结</div>
					<div>需要人数：{{people}}人</div>
				</div>
    		</div>
    		
    		<div class="separatrix"></div>
    		
    		<!--职位要求 start-->
			<div class="index_box">
				<div class="index_headline"><span class="right_arrows"></span><span class="text-muted">职位要求</span></div>
				<div class="pt10 fz3">					
					<p>性别：{{condition}}</p>						
					<p> 年龄范围：18-26</p>
					<p>学历要求：无学历要求</p>
				</div>
			</div>
			<!--职位要求 end-->
			
			<div class="separatrix"></div>
					
			<!--职位要求 start-->
			<div class="index_box">
				<div class="index_headline"><span class="right_arrows"></span><span class="text-muted">职位要求</span></div>
				<div class="pt10 fz3">
					<p>2017/8/30-2017/9/10</p>
					<p>{{startime}}-{{endtime}}</p>
				</div>
			</div>
			<!--职位要求 end-->	
			
			<div class="separatrix"></div>
			
			<!--工作地址 start-->
			<div class="index_box">
				<div class="index_headline"><span class="right_arrows"></span><span class="text-muted">工作地址</span></div>
				<div  class="flex-space-between pt10">
					<div class="information_title">{{address}}</div>
				</div>
			</div>
			<!--工作地址 end-->	
					
			
			<div class="separatrix"></div>
			
			<!--工作内容 start-->
			<div class="index_box">
				<div class="index_headline"><span class="right_arrows"></span><span class="text-muted">工作内容</span></div>
				<div class="pt10 fz3">
						{{content}}
				</div>
			</div>
			<!--工作内容 end-->	
			
			<div class="separatrix"></div>
				
			<!--注意事项 start-->
			<div class="index_box">
				<div class="index_headline"><span class="red">*</span><span class="ml1">注意事项</span></div>
				<div class="pt10 fz3">
						<p>谨慎报名，不放鸽子</p>
						<p>一切先交钱的兼职都是骗人的</p>
				</div>
			</div>
			<!--工作内容 end-->	
			
		</div>
		
		<div class="nav navbar-fixed-bottom">
			<div class="fz4">
				<div class="zx_sc" @click="changeRed()"><span class="glyphicon glyphicon-heart" :class="{red:isActive}"></span><span class="ml1">收藏</span></div>
				<div class="apply">我要报名</div>
			</div>
		</div>
		
		<div class="inform_popup" style="display: none;">{{inform}}</div>
	</div>
</template>

<script>
import headTop from '../../components/header/header'
import axios from 'axios'

export default {
	data () {
		return{
			detailtitle:'兼职详情',
			isActive:false,
			inform:'',
			jobname:'',
			startime:'',
			endtime:'',
			wage:'',
			wagetypes:'',
			condition:'',
			address:'',
			people:'',
			content:''
			
		}	
	},
	created(){
		this.jobDatil()
  	},
    methods: {
        changeRed () {
        	if(this.isActive==true){
        		this.isActive=false
        		
        		this.inform="取消收藏"
        	}else{
        		this.isActive=true;
        		this.inform="收藏成功"
        	}
        	$('.inform_popup').show().delay(2000).hide(0);
        },
        jobDatil(){                   	
			let url=location.href; 
			let loc = url.substring(url.lastIndexOf('=')+1, url.length);
			let i;
			axios.get('/static/json/jobData.json').then(res=> {		
				this.joblist = res.data;
				for (i in this.joblist) {
					if(loc==this.joblist[i].id){
						this.jobname=this.joblist[i].name;
						this.startime=this.joblist[i].startime;
						this.endtime=this.joblist[i].endtime;
						this.wage=this.joblist[i].wage;
						this.wagetypes=this.joblist[i].wagetypes;
						this.condition=this.joblist[i].condition;
						this.address=this.joblist[i].address;
						this.people=this.joblist[i].people;
						this.content=this.joblist[i].content;
					}	
				}	
			}).catch((err)=>{		
				console.log("err");		
			});	
		}		
    },
	components:{
		headTop
	}
}
</script>

<style  lang="less" scoped>
@import '../../assets/less/less.less';
.pt10{
	padding: 3rem 3% 0;
}
.job_name{
	padding: 4rem 3% 5rem;
}
.zx_sc,
.apply  {
    float: left;
    height: @headtop/1.2;
    line-height:@headtop/1.2;
    color: @white;
    text-align: center;
}
.zx_sc {
    width: 46%;
    background: @black;
}
.apply {
    width: 54%;
    background: @red;
}
.inform_popup{
	position: fixed;
	z-index: 999;
	top: 30%;
	left: 37%;
	width: 26%;
	text-align: center;
	color: @white;
	padding: 1.5% 3%;
	background:@darkgray;
	opacity: 0.8;
	.border-radius(2rem);
}
</style>