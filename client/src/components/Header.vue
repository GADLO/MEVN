<template>
  <el-header class="header">
    <router-link to="/" class="link">Frontend</router-link>
    <Dropdown />
  </el-header>
</template>
<script>
import Dropdown from './Dropdown.vue';

export default {
  components: {
    Dropdown,
  },
};
</script>
<style>
.header {
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-weight: 700;
  position: fixed;
  width: 100%;
  top: 0;
}

.link {
  text-decoration: none;
}
</style>
