<template>
	<header id="head_top" class="navbar-fixed-top">
		<slot name="city"></slot>
		<slot name="search"></slot>
		<slot name="select"></slot>
		<section class="head_goback" v-if="goBack" @click="$router.go(-1)">
           <span class="glyphicon glyphicon-chevron-left"></span>
      	</section>
		<section class="head_title" v-if="headTitle"><span>{{headTitle}}</span></section>
		<section  class="small_title" v-if="smallTitle"><span>{{smallTitle}}</span></section>
	</header>
</template>

<script>
export default{
	props: ['headTitle','smallTitle', 'goBack']
}
</script>

<style lang="less" scoped>
@import '../../assets/less/less.less';
#head_top{
	width: 100%;
	height: @headtop;
    text-align: center;
    padding:@headtop/5 0;
    line-height:@headtop - (@headtop/2.5);  
}
.head_goback{position: absolute;left: 3%;top: @headtop/5;}
.head_title{font-size: 4rem;}
.small_title{position: absolute;right: 3%;top: @headtop/5;}
.wtop{color:@white;}
.scroll{
    background: @yellow;
    .botshadow;
}
.btop{background: @white;.botshadow;}

</style>