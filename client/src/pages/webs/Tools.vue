<template>
  <el-main>
    <h1>实用工具</h1>
    <div class="container">
      <Card
        class="npm-color"
        v-for="site in sites.jsTools"
        :site="site"
        :key="site.name"
      />
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
.npm-color {
  color: #bb2e3e !important;
}
</style>
