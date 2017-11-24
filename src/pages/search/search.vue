<template>
	<div>
	    <head-top class="wtop scroll" go-back='true'>
	    	<div slot="search">
				<div class="search_txt">
					<input type="text" v-model="searchval" @focus="cancelShow()" placeholder="请输入兼职名称或类型" class="search_text">
					<span class="glyphicon glyphicon-remove" v-show="xShow" @click="cancelTxt()"></span>
				</div>
				<div class="btn">
					<span @click="searchResult()">搜索</span>
				</div>
			</div>
	    </head-top> 
    	
    	<div class="box">
			<div class="sea_box">
				<p>热门搜索</p>
				<ul class="sea_list">
					<li v-for="hot in hots">{{hot.name}}</li>
				</ul>	
			</div>
			<div class="sea_box">
				<p>历史记录</p>
				<ul class="sea_list">
					<li>周末</li>
					<li>下午</li>
				</ul>	
			</div>
			<input type="button" value="清空历史记录" class="clearbtn"/>
		</div>
		
	</div>
</template>

<script>
import headTop from '../../components/header/header'
import axios from 'axios'

export default {
	data () {
		return{
			xShow:false,
			searchval:'',
			hots: [
	        {
	          name:'暑假', 
	        },{
	          name:'寒假'
	        },{
	          name:'周末'
	        },{
	          name:'下午'
	        }
	      ]
		}	
	},
 	methods: { 
		cancelShow () {                 //搜索框
			this.xShow = true
		},
		cancelTxt () {                   //搜索框的关闭按钮
			this.searchval="",
			this.xShow = false
		},
        searchResult () {	             //搜索按钮
		}
    },
	components:{
		headTop
	}
}
</script>

<style  lang="less">
@import '../../assets/less/less.less';
.search_txt{
	position: relative;
	left:@headtop;
	width:70%;
	input{
		color:@darkgray;
		float: left;
		border: 0;
		width:100%;
		padding: 0 8% 0 2%;
		.border-radius(1rem);
	}
	span{
		position: absolute;
		top: @headtop/6;
		right: 2%;
		opacity: 0.3;
		color:@darkgray;
	}
	
}
.btn{
	position: absolute;
	right: @headtop/3;
	top: @headtop/4.5;
	font-size: 3.5rem;
}
.sea_box{
	overflow-y: auto;
	padding: 3% 3% 4%;
	p:first-child{font-size: 3.8rem;margin:1rem 0;}
}
.sea_list{	
	font-size:3rem ;
	color:@darkgray;
	margin: 0 5%;	
	li{
		display: inline-block;
        padding: 0 3%;
	    height: 6rem;
	    line-height: 6rem;
	    text-align: center;
	    margin: 2% 2% 2%;
	    .border-radius(1rem);
	    .bdgray;
	    box-shadow: 0px 0px 2rem rgba(226, 226, 226, 0.9);
	}	
}
.clearbtn{
	width: 92%;
	height: 8rem;
	background: @red;
	color:@white;
	border:0;
	margin:3%;	
}

</style>