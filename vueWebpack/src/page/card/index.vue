<template>
	<div class="">
  <section class="container">
    <div id="slide" class="slide index-slide">
      <!-- 轮播图片数量可自行增减 -->
      <div
        class="img back"
        v-for="(item,index) in imgsList"
        :key="index + '-img'"
        :class="'img'+ (index+1) "
        :ref="'imgs'+(index)"
        :id="'img'+(index)"
      >
        <img :src="item.img" :ref="'innderImgs'+(index)">
      </div>
      <div
        class="img front"
        v-for="(item,index) in imgFront"
        :key="index"
        :class="'img'+ (index+1) "
        :ref="'img'+(index)"
        :id="(index)"
        @click="clickFan(index) "
      >
        <img :src="item" :ref="'innderImg'+(index)">
      </div>
    </div>
    <div class="slide-bt">
      <img
        :src="item.img"
        v-for="(item,index) in imgsList"
        :key="index"
        @click="smallPhotoClick(index)"
        :ref="'li'+(index)"
      >
    </div>
  </section>
  的反对法的
  </div>
</template>

<script>
import reverse_card from "../../assets/login_bg.png";
export default {
  name: "error",
  data() {
    return {
      imgsList: [
        {
          img: "http://img1.qq.com/news/pics/16678/16678931.jpg",
          isSelect: false
        },
        {
          img: "http://img1.gtimg.com/comic/pics/25615/25615217.jpg",
          isSelect: false
        },
        {
          img: "http://img1.gtimg.com/comic/pics/25615/25615214.jpg",
          isSelect: false
        },
        {
          img:
            "https://quickbassdev.oss-cn-shanghai.aliyuncs.com/saas/merchant/2645/191120143413l2DQIkYV",
          isSelect: false
        },
        {
          img:
            "https://quickbassdev.oss-cn-shanghai.aliyuncs.com/saas/merchant/2645/1911181823465btd9sxZ",
          isSelect: false
        },
        {
          img:
            "https://cdndaily.quickbass.com/o2o/merchant/2645/190912152050_JPjFgap!s200",
          isSelect: false
        }
      ],
      imgFront: [],
      slideNub: 6,
      isTurm: false
    };
  },
  beforeCreate() {
    this.$loading.open();
  },
  mounted() {
    let vm = this;
    this.$nextTick(() => {});
    setTimeout(() => {
      this.$loading.close();
    }, 300);

    this.getImg();
    // this.slideLi();
    // this.k_touch();
  },
  methods: {
    getImg() {
      // if (this.slideNub > 5) {
      //   this.$refs.img5[0].className = "img back img5";
      // }
      for (var i = 0; i < this.slideNub; i++) {
        this.imgFront.push(reverse_card);
      }
      setTimeout(() => {
        if (this.slideNub > 5) {
          console.log(this.$refs.img5);
          this.$refs.img5[0].className = "img front img5";
          this.slideLi();
          this.k_touch();
        }
      }, 200);
    },

    //右滑动
    right() {
      let _this = this;
      var fy = new Array();
      for (var i = 0; i < this.slideNub; i++) {
        let gv = "img" + i;
        fy[i] = this.$refs[gv][0].className;
      }
      for (var i = 0; i < this.slideNub; i++) {
        let gv = "img" + i;
        if (i == 0) {
          this.$refs[gv][0].className = fy[this.slideNub - 1];
        } else {
          this.$refs[gv][0].className = fy[i - 1];
        }
      }
      this.slideLi();
    },

    //左滑动
    left() {
      let _this = this;
      var fy = new Array();
      for (var i = 0; i < this.slideNub; i++) {
        let gv = "img" + i;
        fy[i] = this.$refs[gv][0].className;
      }
      for (var i = 0; i < this.slideNub; i++) {
        let gv = "img" + i;
        if (i == this.slideNub - 1) {
          this.$refs[gv][0].className = fy[0];
        } else {
          this.$refs[gv][0].className = fy[i + 1];
        }
      }

      this.slideLi();
    },
    //轮播图片左右图片点击翻页
    imgClickFy() {
      let _this = this;
      let slideList = 0;
    },
    clickFan(id) {
      let _this = this;
      let slideList = 0;
      for (var i = 0; i < this.slideNub; i++) {
        this.$refs["innderImg" + i][0].className = "";
        let gv = "img" + i;
        if (this.$refs[gv][0].className == "img front img3") {
          slideList = parseInt(this.$refs[gv][0].id);
          // 点击选中那个
          if (slideList == id) {
            this.$refs[gv][0].className = "img front img3 fan-front";
            this.$refs["imgs" + slideList][0].className =
              "img back img3 fan-back";
            //this.$refs["innderImg" + slideList][0].className = "img-fan";

            setTimeout(() => {
              // 还原 图片初始
              this.$refs[gv][0].className = "img front img3";
              this.$refs["imgs" + slideList][0].className = "img back img3";
            }, 2000);
          }
        }
      }
      var tzcs = id - slideList;
      if (tzcs > 0) {
        for (var i = 0; i < tzcs; i++) {
          setTimeout(function() {
            _this.right();
          }, 1);
        }
      }
      if (tzcs < 0) {
        tzcs = -tzcs;
        for (var i = 0; i < tzcs; i++) {
          setTimeout(function() {
            _this.left();
          }, 1);
        }
      }
      this.isTurm = !this.isTurm;
    },

    //轮播按钮点击翻页
    smallPhotoClick(id) {
      let _this = this;
      let slideList = 0;
      for (var i = 0; i < this.slideNub; i++) {
        let gv = "img" + i;
        console.log(this.$refs[gv][0].className);
        if (this.$refs[gv][0].className == "img front img3") {
          slideList = parseInt(this.$refs[gv][0].id);
        }
      }
      var tzcs = id - slideList;
      if (tzcs > 0) {
        for (var i = 0; i < tzcs; i++) {
          setTimeout(function() {
            _this.right();
          }, 1);
        }
      }
      if (tzcs < 0) {
        tzcs = -tzcs;
        for (var i = 0; i < tzcs; i++) {
          setTimeout(function() {
            _this.left();
          }, 1);
        }
      }
      _this.slideLi();
    },
    //修改当前最中间图片对应按钮选中状态
    slideLi() {
      var slideList = 0;
      for (var i = 0; i < this.slideNub; i++) {
        let gv = "img" + i;
        if (this.$refs[gv][0].className == "img front img3") {
          slideList = parseInt(this.$refs[gv][0].id);
          // slideList = parseInt(this.$refs[gv][0].id) + 1;
        }
      }
      for (var i = 0; i < this.slideNub; i++) {
        let gv = "li" + i;
        this.$refs[gv][0].className = "";
      }

      if (slideList == 6) {
        slideList = 0;
      }
      this.$refs["li" + slideList][0].className = "on";
    },
    //触摸滑动模块
    k_touch() {
      let _this = this;
      var _start = 0,
        _end = 0,
        _content = document.getElementById("slide");
      _content.addEventListener("touchstart", touchStart, false);
      _content.addEventListener("touchmove", touchMove, false);
      _content.addEventListener("touchend", touchEnd, false);
      function touchStart(event) {
        var touch = event.targetTouches[0];
        _start = touch.pageX;
      }
      function touchMove(event) {
        var touch = event.targetTouches[0];
        _end = _start - touch.pageX;
      }

      function touchEnd(event) {
        if (_end < -100) {
          _this.left();
          _end = 0;
        } else if (_end > 100) {
          _this.right();
          _end = 0;
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
}
.slide {
  width: 100%;
  overflow: hidden;
  position: relative;
  height: 9.38rem;

  perspective: 500;
  -webkit-perspective: 500;  /*3D*/
}
.back {
  transform: rotateY(-180deg);
}
.fan-front {
  transform: rotateY(-180deg);
}
.fan-back {
  transform: rotateY(-360deg);
}
.slide .img {
  overflow: hidden;
  position: absolute;
  transition: width 0.4s, height 0.4s, top 0.4s, left 0.4s, z-index 0.4s;
  perspective: 10000;
  -webkit-perspective: 10000;
  backface-visibility: hidden;
  transition: all 1s;
}
.slide .img img {
  width: calc(100% - 14px);
  height: calc(100% - 14px);
  margin: 7px;
}
.slide .img1 {
  width: 40%;
  height: 40%;
  top: 30%;
  left: -110%;
  z-index: 1;
  opacity: 0.4;
}
.slide .img2 {
  width: 60%;
  height: 60%;
  top: 20%;
  left: -50%;
  z-index: 2;
  opacity: 0.4;
}
.slide .img3 {
  width: 80%;
  height: 80%;
  top: 10%;
  left: 10%;
  z-index: 3;
}
.slide .img4 {
  width: 60%;
  height: 60%;
  top: 20%;
  left: 90%;
  z-index: 2;
  opacity: 0.4;
}
.slide .img5 {
  width: 40%;
  height: 40%;
  top: 30%;
  left: 150%;
  z-index: 1;
  opacity: 0.4;
}
button {
  width: 50px;
  margin: 20px;
}

.slide-bt {
  position: absolute;
  left: 0%;
  bottom: -30%;
  z-index: 10;
  img {
    width: 1.2rem;
    height: 1.5rem;
    margin-top: .2rem;
    margin-left: 0.05rem;
    border-radius: 0.02rem;
  }
  .on {
    border: 0.04rem solid red;
    /*background: #ffd200;*/
  }
}
.slide-bt span {
  width: 24px;
  height: 8px;
  background: #c9caca;
  float: left;
  margin: 5px;
  border-radius: 4px;
}
.slide .slide-bt .on {
  background: #ffd200;
}

.img-fan {
  /*animation:play 1s linear infinite;*/
  animation: play 1.5s ease-in-out;
  transform: translate3d(0, 0, 0);
}
@keyframes play {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}
</style>