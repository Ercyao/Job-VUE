<template>
  <div class="slide-show" @mouseover="clear" @mouseout="run">
    <div class="slide-img">
      <a>
        <transition name="slide-trans">
          <img v-if="isShow" :src="slides[nowIndex].src">
        </transition>
        <transition name="slide-trans-old">
          <img v-if="!isShow" :src="slides[nowIndex].src">
        </transition>
      </a>
    </div>
    <ul class="slide-pages">
      <li v-for="(item, index) in slides" @click="goto(index)">
        <a :class="{on: index === nowIndex}"></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      default: []
    },
    inv: {
      type: Number,
      default: 1000
    }
  },
  data () {
    return {
      nowIndex: 0,
      isShow: true
    }
  },
  computed: {
    prevIndex () {
      if (this.nowIndex === 0) {
        return this.slides.length - 1
      }
      else {
        return this.nowIndex - 1
      } 
    },
    nextIndex () {
      if (this.nowIndex === this.slides.length - 1) {
        return 0
      }
      else {
        return this.nowIndex + 1
      }
    }
  },
  methods: {
    goto (index) {
      this.isShow = false
      setTimeout(() => {
        this.isShow = true
        this.nowIndex = index
      }, 10)
    },
    run () {
      this.invId = setInterval(() => {
        this.goto(this.nextIndex)
      }, this.inv)
    },
    clear () {
      clearInterval(this.invId)
    }
  },
  mounted () {
    this.run();
  }
}
</script>

<style scoped>
.slide-trans-enter-active {
  transition: all .5s;
}
.slide-trans-enter {
  transform: translateX(900px);
}
.slide-trans-old-leave-active {
  transition: all .5s;
  transform: translateX(-000px);
}
.slide-show {
  width: 100%;
  height: 500px;
  overflow: hidden;
}
.slide-img {
  width: 100%;
}
.slide-img img {
  width: 100%;
  height:500px ; 
}
.slide-pages {
  position: absolute;
  bottom: 10px;
  left: 40%;
}
.slide-pages li{
	float: left;
  padding: 0 10px;
  cursor: pointer;
}
.slide-pages li a{
		display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    opacity: 0.8;
    background: #f1f1f1;
}
.slide-pages li .on {
  background: #3495fe;
}
</style>