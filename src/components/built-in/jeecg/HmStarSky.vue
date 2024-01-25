<template>
  <div id="container">
    <img src="http://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/xingzhan/xing.png" alt="" v-for="item in bigStarNum" :key="item">
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es';

export default {
  props: {
    /**
     * 宽度
     */
     width: {
      type: String,
      default: '600'
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: '300'
    },
    /**
     * 大星星数量
     */
    bigStarNum: {
      type: Number,
      default: 10
    },
    /**
     * 星星数量
     */
    starNum: {
      type: Number,
      default: 1200
    },
    /**
     * 星星大小
     */
    starSize: {
      type: Number,
      default: 8 //数值越大星星越小
    },
    /**
     * 星星速度
     */
    starSpeed: {
      type: Number,
      default: 900000 //数值越大速度越慢,
    },
    /**
     * 星星亮度
     */
    starLight: {
      type: Number,
      default: 0.8 //数值越大亮度越高
    }
  },
  data() {
    return {
      cWidth: '200px',
      cHeight: '200px',
    };
  },
  watch: {
    width: {
      handler: function() {
        this.cWidth = this.getCssUnit(this.width);
      },
      deep: true
    },
    height: {
      handler: function() {
        this.cHeight = this.getCssUnit(this.height);
      },
      deep: true
    },
    starNum: {
      handler: function() {
        this.destroyCanvas();
        this.initCanvas();
      },
      deep: true
    },
    starSize: {
      handler: function() {
        this.destroyCanvas();
        this.initCanvas();
      },
      deep: true
    },
    starSpeed: {
      handler: function() {
        this.destroyCanvas();
        this.initCanvas();
      },
      deep: true
    },
    starLight: {
      handler: function() {
        this.destroyCanvas();
        this.initCanvas();
      },
      deep: true
    }
  },
  mounted() {
    this.cWidth = this.getCssUnit(this.width);
    this.cHeight = this.getCssUnit(this.height);
    this.$nextTick(() => {
      this.initCanvas();
      this.randomPosition()
      anime({
        targets: '#container img',
        opacity: 0,
        easing: 'linear',
        duration: 2000,
        direction: 'alternate',
        loop: true
      })
    })
    
  },
  methods: {
    getCssUnit(value) {
      if (typeof value === 'number') {
        return value + 'px';
      } else if (typeof value === 'string') {
        if (value.indexOf('px') > -1 || value.indexOf('%') > -1) {
          return value;
        } else {
          return value + 'px';
        }
      }
    },
    initCanvas() {
      let self = this;
      //利用canvas与js绘制粒子闪烁动画
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      document.getElementById('container').appendChild(canvas)
      let width = document.getElementById('container').getBoundingClientRect().width;
      let height = document.getElementById('container').getBoundingClientRect().height;
      var w = canvas.width = width;
      var h = canvas.height = height;
      var hue = 217;
      var stars = [];
      var count = 0;
      var maxStars = this.starNum;//星星数量
      var canvas2 = document.createElement('canvas');
      var ctx2 = canvas2.getContext('2d');
      canvas2.width = 100;
      canvas2.height = 100;
      var half = canvas2.width / 2;
      var gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
      gradient2.addColorStop(0.025, '#CCC');
      gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
      gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
      gradient2.addColorStop(1, 'transparent');
      ctx2.fillStyle = gradient2;
      ctx2.beginPath();
      ctx2.arc(half, half, half, 0, Math.PI * 2);
      ctx2.fill();
      // End cache
      function random(min, max) {
        if (arguments.length < 2) {
          max = min;
          min = 0;
        }
        if (min > max) {
          var hold = max;
          max = min;
          min = hold;
        }
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      function maxOrbit(x, y) {
        var max = Math.max(x, y),
          diameter = Math.round(Math.sqrt(max * max + max * max));
        return diameter / 2;
        //星星移动范围，值越大范围越小，
      }
      var Star = function() {
        this.orbitRadius = random(maxOrbit(w, h));
        this.radius = random(60, this.orbitRadius) / self.starSize;
        //星星大小
        this.orbitX = w / 2;
        this.orbitY = h / 2;
        this.timePassed = random(0, maxStars);
        this.speed = random(this.orbitRadius) / self.starSpeed;
        //星星移动速度
        this.alpha = random(2, 10) / 10;
        count++;
        stars[count] = this;
      }
      Star.prototype.draw = function() {
        var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
          y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
          twinkle = random(10);
        if (twinkle === 1 && this.alpha > 0) {
          this.alpha -= 0.05;
        } else if (twinkle === 2 && this.alpha < 1) {
          this.alpha += 0.05;
        }
        ctx.globalAlpha = this.alpha;
        ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
        this.timePassed += this.speed;
      }
      for (var i = 0; i < maxStars; i++) {
        new Star();
      }
      function animation() {
        ctx.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = self.starLight; //尾巴
        ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 1)';
        ctx.fillRect(0, 0, w, h)
        ctx.globalCompositeOperation = 'lighter';
        for (var i = 1, l = stars.length; i < l; i++) {
          stars[i].draw();
        };
        window.requestAnimationFrame(animation);
      }
      animation();
    },

    //随机排列container中的子元素,利用绝对定位
    randomPosition() {
      let container = document.getElementById('container');
      let children = container.children;
      let len = children.length;
      let arr = [];
      for (let i = 0; i < len; i++) {
        arr.push(i);
      }
      arr.sort(function() {
        return Math.random() - 0.5;
      });
      for (let i = 0; i < len; i++) {
        children[i].style.top = Math.random() * 100 + '%';
        children[i].style.left = Math.random() * 100 + '%';
      }
    },

    //销毁canvas
    destroyCanvas() {
      let container = document.getElementById('container');
      let canvas = container.getElementsByTagName('canvas')[0];
      container.removeChild(canvas);
    }
  },
}
</script>

<style lang="less" scoped>
#container {
  width: v-bind(cWidth);
  height: v-bind(cHeight);
  background: #000;
  position: relative;
  img {
    width: 50px;
    position: absolute;
  }
}
</style>