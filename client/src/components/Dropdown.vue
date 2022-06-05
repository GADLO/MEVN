<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    router="true"
  >
    <el-menu-item index="/explore">探索前端</el-menu-item>
    <el-menu-item index="/codeblocks">Codeblocks</el-menu-item>
    <el-menu-item index="/tools">实用工具</el-menu-item>
    <el-menu-item index="/blog/posts">博客</el-menu-item>
    <el-menu-item index="4">Orders</el-menu-item>
  </el-menu>
</template>
