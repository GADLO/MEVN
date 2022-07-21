<template>
  <div class="img-search">
    <div id="inp">
      <el-input></el-input>
    </div>
  </div>
  <div class="mas" @scroll="scrollFunction">
    <div v-for="i in imgnum" :key="i" class="mas-wrap">
      <img class="mas-img" :src="imgurl + i" alt="i" loading="lazy" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgurl: 'https://source.unsplash.com/random/?',
      imgnum: 50,
    };
  },
  methods: {
    scrollFunction() {
      this.imgnum += 5;
      console.log(this.num);
    },
  },
};
</script>

<style lang="less" scoped>
.img-search {
  padding-top: 6rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: center;
  #inp {
    width: 200px;
  }
}
.mas {
  padding: 1rem 8rem;
  column-count: 8;
  column-gap: 0;
  counter-reset: item-counter;
  background-color: #fff;
  @media screen and (min-width: 400px) {
    column-count: 2;
  }

  @media screen and (min-width: 600px) {
    column-count: 3;
  }

  @media screen and (min-width: 800px) {
    column-count: 4;
  }

  @media screen and (min-width: 1100px) {
    column-count: 5;
  }

  .mas-wrap {
    break-inside: avoid;
    padding: 5px;
    border-radius: 1rem;

    .mas-img {
      width: 100%;
      border-radius: 1rem;
      //   background-color: #ccc;
    }
  }
}
</style>
