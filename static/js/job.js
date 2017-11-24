

new Vue({
	el:"#app",
	data:{
		joblist:[]    
	},
	/*filters:{
		formatMoney:function (value){
			return "￥"+value.toFixed(2);
		}
	},*/
	mounted:function(){
		this.cartView();
	},
	methods:{
	   cartView: function(){
		   	this.$http.get('../json/joblist.json').then(res => {
		   	 	 this.joblist = res.data.list;
	       });
	   }
	}
});
