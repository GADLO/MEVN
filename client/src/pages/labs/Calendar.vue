<template>
  <div class="calendar">
    <h1>Calender</h1>
    <CalendarWeek />
    <CalendarEntry />
  </div>
</template>

<script>
import CalendarWeek from './calendar/CalendarWeek.vue';
import CalendarEntry from './calendar/CalendarEntry.vue';

export default {
  components: {
    CalendarWeek,
    CalendarEntry,
  },
};
</script>

<style lang="less" scoped>
.calendar {
  padding: 2rem;
  height: 100vh;
}
</style>
