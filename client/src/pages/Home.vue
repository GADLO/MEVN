<template>
  <div class="main">
    <el-carousel trigger="click" height="300px" id="carousel">
      <el-carousel-item class="row" v-for="item in items" :key="item">
        <div class="center">
          <h1>{{ item.description }}</h1>
        </div>
        <div class="center">
          <img class="logo" :src="item.name" alt="" />
        </div>
      </el-carousel-item>
    </el-carousel>
    <div class="staff">
      <div>
        <Button text="毕" class="button-square" />
      </div>
      <div>
        <Button text="EXPLORE" class="button-color" />
      </div>
    </div>
  </div>
</template>

<script>
import html from './icons8-html-5-480.svg';
import css from './icons8-css3-480.svg';
// import js from './icons8-javascript-480.svg';
import ship from './color-gradient-spacecraft_animated.svg';

export default {
  data() {
    return {
      items: [
        { name: html, description: 'HTML 定义了网页的内容' },
        { name: css, description: 'CSS 描述了网页的布局' },
        { name: ship, description: 'JavaScript 控制了网页的行为' },
      ],
    };
  },
  create() {
    setInterval(() => {
      document.querySelector('#carousel').click();
    }, 1500);
  },
};
</script>

<style lang="less" scoped>
.main {
  height: 100vh;

  .row {
    display: flex;
    justify-content: space-evenly;
  }
  .center {
    display: grid;
    place-content: center;

    h1 {
      color: #fff;
    }
  }

  .logo {
    width: 300px;
    height: 300px;
    color: black;
    /* font-size: 20px; */
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #464e5a;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #323436;
  }
}

/* CSS */

.staff {
  display: grid;
  place-content: center;
  height: 60vh;
}
</style>
