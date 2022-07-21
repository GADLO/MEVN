<template>
  <div class="calendar-entry">
    <div for="inp" class="event">
      <el-input type="text" id="inp"  v-model="input" :placeholder="input"/>
      <p>日期：<span></span> {{ day }}</p>
      <Button class="button" text="提交" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      day: 'Mon',
      input: 'a',
    };
  },
};
</script>

<style lang="less" scoped>
.calendar-entry {
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .event {
    width: 300px;
    padding: 2rem;
    background-color: #fff;
    border-radius: 1rem;

    .button {
      margin: 1rem;
    }
  }
}
</style>
