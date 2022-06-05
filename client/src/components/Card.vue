<template>
  <el-card shadow="hover" class="card" @click="open(site)">
    <h1>
      <i class="iconfont" :class="site.icon"></i>
      {{ site.name }}
      <span class="version">v{{ site.version }}</span>
    </h1>
    <p>{{ site.description }}</p>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      type: true,
    };
  },
  props: ['site'],
  methods: {
    open(site) {
      window.open(site.url, 'target');
    },
  },
};
</script>
<style>
.card {
  width: 300px;
  height: 200px;
  background-size: cover;
  background-image: rgba(0, 0, 0, 0, 0.5);
  margin: 20px;
}

i {
  font-size: 30px !important;
}

p {
  text-align: left;
}

.version {
  font-size: 8px;
  color: #ccc;
  border: 1px solid #ccc;
  border-radius: 1rem;
  padding: 0.1rem 0.3rem;
}
</style>
