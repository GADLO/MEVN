<template>
  <h1>数组</h1>
  <h1>对象</h1>
  <div class="code-container">
    <div class="bar left">
      <span class="dot" style="background: #ed594a;"></span>
      <span class="dot" style="background: #fdd800;"></span>
      <span class="dot" style="background: #5ac05a;"></span>
    </div>
    <vue-code-highlight> //Paste your code here </vue-code-highlight>
  </div>
</template>
<script>
import '../../node_modules/vue-code-highlight/themes/prism.css';
import { component as VueCodeHighlight } from 'vue-code-highlight';

export default {
  component: {
    VueCodeHighlight,
  },
};
</script>

<style lang="less">
code {
  // color: indianred;
  padding: 2px 5px;
  border-radius: 3px;
  font-weight: 200;
  font-family: monospace, sans-serif;
  letter-spacing: 0;
  font-size: 12px;
  text-align: left;
}

pre {
  box-sizing: border-box;
  display: block;
  background-color: rgb(235, 235, 235);
  padding: 15px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  margin: 0 !important;
}
.code-container {
  width: 30%;
  border-radius: 8px;
  background-color: #ccc;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  padding: 0;
  margin: 0;

  /* Three dots */
  .dot {
    margin: 8px 4px;
    height: 15px;
    width: 15px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
  }

  .bar {
    display: flex;
    align-items: center;
    margin-left: 5px;
    width: 100%;
  }

  .left {
    width: 30%;
  }
}
</style>
