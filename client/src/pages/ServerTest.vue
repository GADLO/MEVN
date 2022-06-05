<template>
  <div class="posts">
    <h1>ServerTest</h1>
    This file will list all the posts.

    <div v-for="d in data" :key="d.title">
      <p>
        <span
          ><b>{{ d.title }}</b></span
        ><br />
        <span>{{ d.description }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import api from '../api/api';

export default {
  name: 'ServerTest',
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      const response = await api.get('servertest');
      this.data = response.data;
    },
  },
};
</script>
