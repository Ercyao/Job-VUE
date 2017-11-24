<template>
	<div>
	    <head-top class="btop" go-back='true' :head-title="jobsettitle" :small-title="resettitle"></head-top> 
    	
    	<div class="box">
    		<!--工作地址 start-->
			<div class="jobset_box">
				<p>我意向工作地址<a href="#" class="addtext">+添加</a></p>
				<div class="add_address">
					<img src="../../assets/img/address.png" />	
					<p class="small text-muted">添加意向工作地址能帮你更好的找到工作哦</p>
				</div>
				
			</div>	
			<!--工作地址 end-->
			
			<div class="separatrix"></div>
			
			<!--工作类型 start-->
			<div class="jobset_box">
				<p>工作类型</p>
				<ul class="jobset_list">
					<li v-for="(type, index) in polytype" :class="{act:changetype===index}" @click="clicktype(index)">{{type.name}}</li>
	
				</ul>	
			</div>	
			<!--工作类型 end-->
			
			<div class="separatrix"></div>
			
			<!--空闲时间 start-->
			<div  class="jobset_box">
				<p>空闲时间</p>	
				<p class="small text-muted">>在一周的那些天</p>
				<ul class="jobset_list">
					<li v-for="(week, index) in weekly" :class="{act:changeweek===index}" @click="clickweek(index)">{{week.name}}</li>
				</ul>
				<p class="small text-muted">>在一天的哪些时间段</p>
				<ul class="jobset_list">
					<li v-for="(half, index) in day" :class="{act:changehalf===index}" @click="clickhalf(index)">{{half.name}}</li>
				</ul>
			</div>
			<!--空闲时间 end-->
			
		</div>
		
	</div>
</template>

<script>
import headTop from '../../components/header/header'
export default {
	data () {
		return{
			changetype:-1,
			changeweek:-1,
			changehalf:-1,
			jobsettitle:'求职意向设置',
			resettitle:'重置',
			polytype:[
		        {
		            name: "服务员"
		        },{
		            name: "店员"
		        },{
		            name: "展会"
		        },{
		            name: "促销"
		        },{
		            name: "派发"
		        },{
		            name: "推广"
		        },{
		            name: "文员"
		        },{
		            name: "助教"
		        }
		    ],
		    weekly:[
		        {
		            name: "周六"
		        },{
		            name: "周日"
		        },{
		            name: "周一"
		        },{
		            name: "周二"
		        },{
		            name: "周三"
		        },{
		            name: "周四"
		        },{
		            name: "周五"
		        }
		    ],
		    day:[
		        {
		            name: "上午"
		        },{
		            name: "下午"
		        },{
		            name: "晚上"
		        }
		    ]
		}	
	},
	methods:{
		clicktype(index){
            this.changetype = index;
        },
        clickweek(index){
            this.changeweek = index;
        },
        clickhalf(index){
            this.changehalf = index;
        }
	},
	components:{
		headTop
	}
}
</script>

<style  lang="less">
@import '../../assets/less/less.less';
.jobset_box{
	overflow-y: auto;
	padding: 3% 3% 4%;
	p:first-child{font-size: 4rem;margin:2rem 0;}
}
.jobset_list{	
	font-size:3rem ;
	color:@darkgray;	
	li{
		display: inline-block;
	    width: 21%;
	    height: 6rem;
	    line-height: 6rem;
	    text-align: center;
	    margin: 2% 2% 2%;
	    .border-radius(1rem);
	    .bdgray;
	    box-shadow: 0px 0px 2rem rgba(226, 226, 226, 0.9);
	}	
}
.add_address{
	text-align: center;
	img{
		width:60%;
		margin: 4rem 0 3rem;
	}
}
.addtext{
	float: right;
	color: @red;
}
</style>