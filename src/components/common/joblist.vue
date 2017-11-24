<template>
	<div class="information">
		<ul>
			<router-link v-for="item in joblist" :key="item.id" :to="{path: '/job/jobDetail', query:{id: item.id}}" tag="li">
				<div class="title">[{{item.type}}] {{item.name}}</div>		
				<div class="black">{{item.startime}}-{{item.endtime}} | {{item.condition}}</div>
				<div class="flex-between">
					<div><span class="red mr1"><span class="fz4">{{item.wage}}</span><span class="fz3"> 元/日  </span></span><span>{{item.wagetypes}}</span></div>
					<div class="text-muted">{{item.distance}}km</div>
				</div>
			</router-link>
		</ul>
	</div>
</template>

<script>
import axios from 'axios'
export default{
    data(){
        return {
			joblist:[]
		}; 
    },
    created(){
		this.jobListData();
    },
    methods: {
        jobListData () {
        	  axios.get('/static/json/jobData.json').then((res)=> {		
				this.joblist = res.data;
			}).catch((err)=>{		
				console.log("err");		
			});
        }
    }

}
</script>
<style lang="less">
@import '../../assets/less/less.less';
.information{
	margin: 0 2%;
	li{
	width: 100%;
    margin: 3.5% 0;
    padding: 25px 4%;
    background: @white;
    border-radius: 0.5rem;
    box-shadow: 0px 0px 3rem rgba(200, 190, 220,0.2);
	    .title{
	    	width: 70%;
	    	height: 7rem;
 			  font-weight: bold;
	    	font-size: 4.5rem;
		    overflow: hidden;
		    white-space: nowrap;
		    text-overflow: ellipsis;
	    }
  }
}
</style>