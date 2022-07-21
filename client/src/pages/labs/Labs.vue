<template>
  <div class="container">
    <div v-for="lab in labs" class="lab" :key="lab">
      <router-link :to="lab" class="lab-text">{{ lab }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labs: [
        'Flexbox',
        'Upvote',
        'Calendar',
        'Masonry',
        'Echart',
        'test',
        'test',
        'test',
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  height: 100vh;
  width: 100wh;
  padding: 50px;
  flex-wrap: wrap;
  background-image: radial-gradient(
      ellipse at bottom left,
      rgba(0, 163, 203, 1) 40%,
      rgba(0, 163, 203, 0) 40%
    ),
    radial-gradient(
      ellipse at top right,
      rgba(0, 163, 203, 1) 30%,
      rgba(0, 163, 203, 0) 30%
    ),
    linear-gradient(
      to right,
      rgba(98, 87, 147, 1) 0%,
      rgba(98, 87, 147, 1) 33%,
      rgba(213, 93, 100, 1) 33%,
      rgba(213, 93, 100, 1) 66%,
      rgba(228, 145, 41, 1) 66%
    );
  gap: 20px;
}

// @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Sacramento&display=swap');

@cursive: 'Great Vibes', cursive;
@handwriting: 'Sacramento', cursive;

@white: #fff;
@black: #000;

.lab-text {
  color: #fff !important;
  font-weight: 700;
}
.lab {
  font-family: @cursive;
  font-size: 3em;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 10px solid rgb(rgb(228, 225, 225), 0.1);

  margin: auto;
  padding: 2em;
  border-radius: 1em;
  backdrop-filter: blur(10px);
  background-color: rgb(#fff, 0.3);
  transition: 0.8s ease transform;
  box-shadow: 1rem 1rem 2rem rgba(0, 0, 0, 0.25);

  &:hover {
    transform: scale(1.1);
  }
}
</style>
