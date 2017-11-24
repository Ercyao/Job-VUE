<template>
	<div>
	    <head-top class="wtop" go-back='true' :small-title="previewtitle"></head-top> 
	    
    	<!--头像显示处 start-->
		<div class="backdrop">
			<div class="img_box"><img src="../../assets/img/head_portrait.jpg" /></div>
		</div>
		<!--头像显示处 end-->			
		<div class="separatrix"></div>
		<!--各种信息查看 start-->
		<ul class="res_list">
			<router-link v-for='item in items' :to="item.link" :key="item.name" tag="li">
				<p v-html="item.name"></p>
				<p style="text-align:right">0%</p>
				<p>完善度</p>
			</router-link>   
		</ul>			
		<!--各种信息查看 end-->
		
	</div>
</template>

<script>
import headTop from '../../components/header/header'
export default {
	data () {
		return{　
			previewtitle:'预览',
			items:[
		        {
		          	link:"/user/resume",
		            name: "基本信息"
		        },{
		        	link:"/user/resume",
		            name: "教育经历"
		        },{
		        	link:"/user/resume",
		            name: "兼职经历"
		         },{
		         	link:"/user/resume",
		            name: "自我评价"
		        }]　
		}	
	},
	components:{
		headTop
	}
}
</script>

<style lang="less">
@import '../../assets/less/less.less';
.scroll{
    background: @white;
    .botshadow;
}
.backdrop{
	width: 100%;
    height: 40rem;
	background: url(../../assets/img/load.jpg);
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
.res_list{
	overflow-y: auto;
	background: #F5F5F5;
	li{
		background: @white;
		p{margin: 0;}
		p:first-child{
			font-size:@big;
		}
		p:last-child{
			opacity: 0.6;
			font-size:@big*0.8;
		}
		padding:2% 6% 2% 3%;
		margin-bottom: 25px;
		.botshadow;
	}
}
</style>