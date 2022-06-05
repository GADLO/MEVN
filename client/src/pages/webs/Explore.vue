<template>
  <el-main>
    <h1>前端框架</h1>
    <div class="container">
      <Card v-for="site in sites.frontend" :site="site" :key="site.name" />
    </div>
  </el-main>
  <el-main>
    <h1>后端框架</h1>
    <div class="container">
      <Card v-for="site in sites.backend" :site="site" :key="site.name" />
    </div>
  </el-main>
  <el-main>
    <h1>构建工具</h1>
    <div class="container">
      <Card v-for="site in sites.buildTools" :site="site" :key="site.name" />
    </div>
  </el-main>
</template>
<script>
import Card from '../../components/Card.vue';
import web from '../../../public/data/frontend';

export default {
  components: {
    Card,
  },

  data() {
    return {
      sites: web,
    };
  },
};
</script>
<style>
.container {
  display: flex;
  flex-wrap: wrap;
}
</style>
