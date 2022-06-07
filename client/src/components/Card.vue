<template>
  <el-card shadow="hover" class="card" @click="open(site)">
    <h1>
      <i class="iconfont" :class="site.icon"></i>
      {{ site.name }}
      <span class="version">v{{ site.ver }}</span>
    </h1>
    <p>
      {{ site.desc }}
    </p>
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
      /* eslint no-underscore-dangle: 0 */
      // this.$router.replace({ path: `/updateweb/${site._id}` });
    },
  },
};
</script>
<style>
.card {
  width: 300px;
  height: 200px;
  /* background-size: cover; */
  background-image: linear-gradient(
    130deg,
    rgba(173, 252, 234, 1) 26.8%,
    rgba(192, 229, 246, 1) 64%
  );
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
