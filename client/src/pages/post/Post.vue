<template>
  <div class="wrap">
    <!-- <highlightjs autodetect :code="function test() {}" /> -->
    <el-skeleton v-if="wait" class="wait" :rows="15" animated />
    <div v-else class="post">
      <div>
        <h1 class="title">
          {{ post.title }}
        </h1>
        <p class="info">
          <span>{{ post.author }}</span>
          <span>{{ post.timestamp }}</span>
          <span class="read"
            >{{
              post.content.length / 400 > 1
                ? Math.round(post.content.length / 400)
                : 1
            }}
            min read
          </span>
        </p>
        <div class="content" v-html="post.content"></div>
      </div>
    </div>
    <div class="btn">
      <Button v-if="!wait" @click="toUpdatePost()" text="编辑" />
    </div>
  </div>
</template>

<script>
import api from '../../api/api';

export default {
  name: 'Post',
  data() {
    return {
      post: {},
      wait: true,
    };
  },
  methods: {
    async fetchPost() {
      const response = await api.get(`/blog/post/${this.$route.params.id}`);
      this.post = response.data;
      this.wait = false;
    },
    toUpdatePost() {
      this.$router.replace({
        path: `/blog/updatepost/${this.$route.params.id}`,
      });
    },
  },
  mounted() {
    setTimeout(this.fetchPost, 1000);
  },
};
</script>

<style lang="less" scoped>
.wrap {
  width: 100vw;
  padding: 10rem 0;
  display: grid;
  place-content: center;
}

.btn {
  display: grid;
  place-content: center;
  margin: 4rem;

  .el-button {
    width: 100px;
  }
}

.post {
  width: 50vw;
  display: grid;
  grid-template-areas:
    'title'
    'info info info'
    'content';
  .title {
    grid-area: title;
    margin-bottom: 5rem;
  }
  .info {
    color: #ccc;
    grid-area: info;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-around;
    span {
      display: grid;
      place-content: center;
      //   color: green;
      //   border: 1px solid green;
      //   border-radius: 1rem;
      //   padding: 0.1rem 0.5rem;
    }

    .read {
      color: green;
      //   border: 1px solid green;
      //   border-radius: 1rem;
      //   padding: 0.1rem 0.5rem;
    }
  }
  .content {
    letter-spacing: 0.1rem;
    text-align: left;
    margin-top: 5rem;
    grid-area: content;
    line-height: 2rem;
    /deep/ p {
      text-indent: 2.3rem;
    }

    /deep/ img {
      margin-left: 25%;
    }
  }
}
.wait {
  width: 80vw;
  margin-top: 5rem;
}
</style>
<style lang="less">
a {
  text-decoration: none;
  color: green;
}

code {
  color: indianred;
  background-color: rgb(238, 235, 235);
  padding: 2px 5px;
  margin: 0 2px;
  border-radius: 3px;
  font-weight: 200;
  font-family: monospace, sans-serif;
  letter-spacing: 0;
  font-size: 12px;
}

pre {
  display: block;
  background-color: rgb(238, 235, 235);
  border-radius: 6px;
  padding: 15px;

  .language-js {
    color: indianred;
  }

  &::before {
    height: 20px;
  }
}
</style>
