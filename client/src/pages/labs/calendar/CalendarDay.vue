<template>
  <div class="day">
    <div class="day-banner">{{ day.abbvTitle.toUpperCase() }}</div>
    <div class="day-details">
      <div class="day_number">{{ day.id }}</div>
      <CalendarEvent v-for="(event, index) in day.events" :key="index" :event="event" :day="day"  />
    </div>
  </div>
</template>

<script>
import CalendarEvent from './CalendarEvent.vue';

export default {
  name: 'CalendarDay',
  components: {
    CalendarEvent,
  },
  props: ['day'],
};
</script>
<style lang="less" scoped>
.day {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  background-color: #fff;
  border-radius: 1rem;
  padding: 1rem;
  margin: 0.5rem;
}
</style>
