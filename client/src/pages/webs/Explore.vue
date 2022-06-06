<template>
  <el-main>
    <h1>前端框架</h1>
    <div class="container">
      <Card v-for="site in frontend" :site="site" :key="site.name" />
    </div>
  </el-main>
  <el-main>
    <h1>后端框架</h1>
    <div class="container">
      <Card v-for="site in backend" :site="site" :key="site.name" />
    </div>
  </el-main>
  <el-main>
    <h1>构建工具</h1>
    <div class="container">
      <Card v-for="site in bundler" :site="site" :key="site.name" />
    </div>
  </el-main>
  <el-main>
    <h1>其他</h1>
    <div class="container">
      <Card v-for="site in unknown" :site="site" :key="site.name" />
    </div>
  </el-main>
  <el-button @click="toCreateWeb" type="primary">新增</el-button>
</template>
<script>
import Card from '../../components/Card.vue';
import api from '../../api/api';

export default {
  components: {
    Card,
  },

  data() {
    return {
      sites: [],
      frontend: [],
      backend: [],
      npm: [],
      bundler: [],
      unknown: [],
    };
  },
  methods: {
    async fetchWebs() {
      const response = await api.get('/web/webs');
      this.sites = await response.data;
      this.sites.forEach((site) => {
        if (site.type.includes('frontend')) {
          this.frontend.push(site);
        } else if (site.type.includes('backend')) {
          this.backend.push(site);
        } else if (site.type.includes('npm')) {
          this.npm.push(site);
        } else if (site.type.includes('bundler')) {
          this.bundler.push(site);
        } else {
          this.unknown.push(site);
        }
      });
    },
    toCreateWeb() {
      this.$router.replace({ path: '/createweb' });
    },
  },
  mounted() {
    this.fetchWebs();
    console.log(this.frontend);
  },
};
</script>
<style>
.container {
  display: flex;
  flex-wrap: wrap;
}
</style>
