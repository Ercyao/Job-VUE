<template>
	<div id="footer_nav"  class="navbar-fixed-bottom">
		<nav class="nav">
			<div class="container-fluid">
				<ul class="row" >
   　					<router-link class="col-xs-3 col-sm-3"  v-for='item in items' :key="item.id" :to="item.link" :class='{active:$route.path===item.link}' tag="li">
					   	<span :class="item.icon"></span><p v-html="item.name"></p>
					</router-link>    					
				</ul>
			</div>
		</nav>
	</div>
</template>

<script>
export default {
	data () {
　	　return {
        items:[
        {
          	link:"/home",
        	icon:"glyphicon glyphicon-home",
            name: "首页"
        },{
        	link:"/job",
        	icon:"glyphicon glyphicon-globe",
            name: "全部"
        },{
        	link:"/manage",
        	icon:"glyphicon glyphicon-tower",
            name: "管理"
         },{
         	link:"/user",
         	icon:"glyphicon glyphicon-user",
            name: "我的"
        }]
	  }
　　}
}
</script>

<style lang="less">
@import '../../assets/less/less.less';
#footer_nav{
	.nav{
		text-align: center;
		background:@yellow;
  		padding-top: 1rem;
  		ul{
  			margin-bottom: 0.5rem;
  		}
  		span{
  			font-size: 5.5rem;
  			height: 60px;
  		}
  		p{
  			font-size: 3rem;
  			margin: 0;
  		}
 		.active {
 			color: @red;
 			span{
 				font-size: 3.5rem;
 			} 			
 		}
	}
}
</style>