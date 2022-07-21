<template>
  <div class="flexbox">
    <div class="menu">
      <div v-for="item in menu" class="item" :key="item">{{ item }}</div>
    </div>
    <div class="content">
      <div class="bar"><p v-for="i in 5" :key="i">FLEXBOX</p></div>
      <div class="main">
        <div class="left">
          <div class="info">
            <div class="square"></div>
            <div class="list"></div>
          </div>
          <div class="info">
            <div class="list"></div>
            <div class="square"></div>
          </div>
        </div>
        <div class="right">
          <div v-for="item in menu" class="item" :key="item">{{ item }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu: [
        'Hello',
        'Halo',
        '你好',
        'Bonjour',
        'Ciao',
        'Здравствулте! z',
        'Guten Tag',
        'hej',
        'Olá',
        'tere.',
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.flexbox {
  box-sizing: border-box;
  padding: 10px;
  gap: 10px;
  width: 100vw;
  height: 100vh;
  display: flex;
}

.menu {
  flex-grow: 1;
  background-color: #fff;
  border-radius: 1rem;

  .item {
    background-color: #a8dadc;
    padding: 1rem 0.2rem;
    margin: 5px;
    border-radius: 0.8rem;
    transition: 0.2s;

    &:hover {
      transform: scale(1.05) translateX(5px);
    }

    &:nth-child(odd) {
      background-color: #219ebc;
    }
  }
}

.content {
  gap: 10px;
  border-radius: 1rem;
  flex-grow: 4;
  display: flex;
  flex-direction: column;
}

.bar {
  background-color: #fff;
  border-radius: 1rem;
  flex-grow: 1;
  display: flex;

  p {
    background-color: #e85d04;
    padding: 1rem 0.2rem;
    margin: 5px;
    border-radius: 0.8rem;
    display: grid;
    place-content: center;
  }

  p:nth-child(odd) {
    background-color: #d00000;
    flex-grow: 2;
  }
}

.main {
  gap: 10px;
  flex-grow: 5;
  display: flex;
}

.left {
  background-color: #fff;
  border-radius: 1rem;
  flex-grow: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .info {
    box-sizing: border-box;
    flex-grow: 1;
    background-color: #94d2bd;
    padding: 1rem;
    margin: 5px;
    border-radius: 0.8rem;
    transition: 0.2s;
    width: 98%;

    display: flex;

    .square {
        border-radius: 0.8rem;
      background-color: #caffbf;
      flex-grow: 1;
    }

    .list {
        border-radius: 0.8rem;
      flex-grow: 1;
    }
  }
}

.right {
  background-color: #fff;
  border-radius: 1rem;
  flex-grow: 1;
  .item {
    background-color: #94d2bd;
    padding: 1rem 0.2rem;
    margin: 5px;
    border-radius: 0.8rem;
    transition: 0.2s;

    &:hover {
      transform: scale(1.05) translateX(-5px);
    }

    &:nth-child(odd) {
      background-color: #2ec4b6;
    }
  }
}
</style>
