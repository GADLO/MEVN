<template>
  <div id="calendar-week" class="calendar-week">
    <div class="columns">
      <CalendarDay v-for="day in sharedState" :key="day.id" :day="day" />
    </div>
  </div>
</template>

<script>
import store from './store';
import CalendarDay from './CalendarDay.vue';

export default {
  name: 'CalendarWeek',
  components: {
    CalendarDay,
  },
  data() {
    return {
      sharedState: store.state.data,
    };
  },
};
</script>

<style lang="less" scoped>
.calendar-week {
  display: flex;
  justify-content: center;

  .columns{
       display: flex;
  justify-content: center;
  }
}
</style>
