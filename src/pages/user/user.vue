<template>
	<div>
	    <head-top class="btop" :head-title="usertitle"></head-top> 
    	
    	<div class="box">  		
    		<!--头像显示处 start-->
			<div class="head_portrait">
				<div class="img_box"><img src="../../assets/img/head_portrait.jpg" /></div>
				<p>独立日</p>
				<p>未提交</p>
			</div>
			<!--头像显示处 end-->		
			
			<div class="separatrix"></div>

			<!--各种信息查看 start-->
			<ul class="user_list">
				<router-link v-for='item in items' :to="item.link" :key="item.name" class="flex-between" tag="li">
					<span :class="item.icon"></span><span class="user_row" v-html="item.name"></span><span class="glyphicon glyphicon-chevron-right"></span>
				</router-link>   
			</ul>			
			<!--各种信息查看 end-->			
		</div>
		
		<footernav></footernav>
	</div>
</template>

<script>
import headTop from '../../components/header/header'
import footernav from '../../components/footer/footer'
export default {
	data () {
		return{
			usertitle:'个人中心',
			items:[
		        {
		          	link:"/user/resume",
		        	icon:"glyphicon glyphicon-list-alt",
		            name: "我的简历"
		        },{
		        	link:"/job",
		        	icon:"glyphicon glyphicon-tasks",
		            name: "我的收藏"
		        },{
		        	link:"/user",
		        	icon:"glyphicon glyphicon-camera",
		            name: "实名认证"
		         },{
		         	link:"/user",
		         	icon:"glyphicon glyphicon-credit-card",
		            name: "我的钱包"
		        },{
		        	link:"/user",
		        	icon:"glyphicon glyphicon-certificate",
		            name: "我的信用"
		        },{
		        	link:"/user",
		        	icon:"glyphicon glyphicon-compressed",
		            name: "健康证"
		         },{
		         	link:"/user/jobSet",
		         	icon:"glyphicon glyphicon-wrench",
		            name: "求职意向设置"
		        },{
		         	link:"/user",
		         	icon:"glyphicon glyphicon-comment",
		            name: "用户反馈"
		        }]　
		}	
	},
	components:{
		headTop,
		footernav
	}
}
</script>

<style  lang="less" scoped>
@import '../../assets/less/less.less';
.head_portrait{
	width: 100%;
    height: 50rem;
	background: url(../../assets/img/head_bg.jpg);
    background-size: 100% 100%;
    padding: 10rem 0 5rem;
    text-align: center;
    color: @white;	
	.img_box {
	    width: 100%;  
	    img{
		    width: 22rem;
		    height: 22rem;
		    border-radius: 50%;
		    padding: 1.2rem;
		    border: 1px solid #fff;
	    }
	}
}
.user_list{
	color:@darkgray;
	padding: 0 3%;
	li{
		span:first-child{
			font-size:@big*1.4;
		}
		span:last-child{
			line-height: @big;
			opacity: 0.3;
		}
		padding: @big/1.2 2%;
    	border-bottom: 1px solid #DCDCDC;
    	.user_row{
    		width:80%;
    		font-size:@big;
    	} 	
	}
}
</style>