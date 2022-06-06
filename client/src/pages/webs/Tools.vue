<template>
  <el-main>
    <h1>实用工具</h1>
    <div class="container">
      <Card
        class="npm-color"
        v-for="site in npm"
        :site="site"
        :key="site.name"
      />
    </div>
  </el-main>
</template>
<script>
import Card from '../../components/Card.vue';
import api from '../../api/api';
// import web from '../../../public/data/frontend';

export default {
  components: {
    Card,
  },

  data() {
    return {
      npm: [],
      sites: [],
    };
  },
  methods: {
    async fetchWebs() {
      const response = await api.get('/web/webs');
      this.sites = await response.data;
      this.sites.forEach((site) => {
        if (site.type.includes('npm')) {
          this.npm.push(site);
        }
      });
    },
    toCreateWeb() {
      this.$router.replace({ path: '/createweb' });
    },
  },
  mounted() {
    this.fetchWebs();
  },
};
</script>

<style>
.npm-color {
  color: #bb2e3e !important;
}
</style>
