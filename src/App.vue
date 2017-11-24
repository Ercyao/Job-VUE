<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
	name: 'app'
}
</script>

<style>
*,body{margin: 0;padding: 0;}
img {border: 0 none;width: 100%;height: auto;margin: auto;max-width: 100%;vertical-align: top;letter-spacing: 0;}
a,a:focus,a:active,a:hover{text-decoration: none;}
ul{list-style-type: none;}
span{display: inline-block;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
	height: 100%;
	font-size: 3.5rem;
  overflow-x: hidden;
  -webkit-overflow-scrolling : touch;
}
.separatrix{height: 30px;background: #F5F5F5;}
.right_arrows {
  width: 3rem;
  vertical-align: text-top;
  margin-top: 0.5rem;
  border-top: 1rem solid transparent;
  border-left: 2rem solid #2399fd;
  border-bottom: 1rem solid transparent;
}
.flex-between {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
}
.allcolor {background: #f8838c;}
.nearbycolor{background: #c0ee93;}
.weekendscolor{background: #c7dcff;}
.y_auto{overflow-y: auto;}
.mb10{margin-bottom: 10rem;}
.ml1{margin-left: 1rem;}
.fz3{font-size: 3rem;}
.fz4{font-size: 4rem;}
.fz5{font-size: 5rem;}
.red{color: #ff473d;}
.bold{font-weight: bold;}

.box{margin:10rem 0 12rem ;}
.index_box {
  width: 100%;
  padding: 3%;
}
.index_headline {
  padding: 2% 0;
  border-bottom: 1px solid #DCDCDC;
  font-size: @big;
}
</style>
