<template>
  <div class="day-event">
    <div>
      <p class="details">{{ event.details }}</p>
      <div class="icons">
        <i class="iconfont icon-s-order"></i>
        <i class="iconfont icon-delete-solid"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['day', 'event'],
};
</script>

<style lang="less" scoped>
.day-event {
  background-color: #2196f3;
  border-radius: 0.6rem;
  padding: 0.6rem;
  margin: 1rem 0;
  color: white;
}

.icons {
  // margin: 0.5rem;
  // visibility: hidden;
  transition: 0.4s;
}
.iconfont {
  font-size: 15px !important;
  color: #fff;
  margin: 0.2rem .5rem;
  transition: 0.2s;
  &:hover {
    color: tomato;
  }
}

.details {
  margin: .2rem 0;
  text-align: center;
}
</style>
