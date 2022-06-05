<template>
  <div>
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
    <div class="center"><h1>万丈高楼平地起</h1></div>
    <div class="center grid-3">
      <div class="center">HTML</div>
      <div class="center">CSS</div>
      <div class="center">JS</div>
    </div>
  </div>
</template>

<script>
import html from './icons8-html-5-480.svg';
import css from './icons8-css3-480.svg';
import js from './icons8-javascript-480.svg';

export default {
  data() {
    return {
      items: [
        { name: html, description: 'HTML 定义了网页的内容' },
        { name: css, description: 'CSS 描述了网页的布局' },
        { name: js, description: 'JavaScript 控制了网页的行为' },
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

<style>
.row {
  display: flex;
  justify-content: space-evenly;
}
.center {
  display: grid;
  place-content: center;
}

.grid-3 {
  display: grid;
  place-content: center;
  grid-template-columns: 1fr 1fr 1fr;
}

.logo {
  width: 300px;
  height: 300px;
  /* font-size: 20px; */
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
