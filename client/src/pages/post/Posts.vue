<template>
  <div class="wrap">
    <el-skeleton v-if="!posts.length" class="wait" :rows="15" animated />
    <div class="posts">
      <div
        class="post"
        v-for="post in posts"
        :key="post._id"
        @click="toPost(post._id)"
      >
        <h2 class="title">
          {{ post.title }}
        </h2>
        <p class="info">
          <!-- <span>{{ post.author }}</span>
          <span>{{ post.timestamp }}</span> -->
          <span
            >{{
              post.content.length / 400 > 1
                ? Math.round(post.content.length / 400)
                : 1
            }}
            min read
          </span>
          <span v-for="tag in post.type" :id="tag" :key="tag">{{ tag }}</span>
        </p>
        <div class="content" v-html="post.content.substring(0, 50)"></div>
        <div>...</div>
      </div>
      <div>
        <Button @click="toCreatePost()" text="新建" />
      </div>
    </div>
  </div>
</template>

<script>
import api from '../../api/api';

export default {
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    async fetchPosts() {
      const response = await api.get('/blog/posts');
      this.posts = response.data;
    },
    toPost(id) {
      this.$router.replace({ path: `/blog/post/${id}` });
    },
    toCreatePost() {
      this.$router.replace({ path: '/blog/createpost' });
    },
  },
  mounted() {
    setTimeout(this.fetchPosts, 1000);
  },
};
</script>

<style lang="less" scope="this api replaced by slot-scope in 2.5.0+">
.wrap {
  width: 100vw;
  padding: 10rem 0;
  display: grid;
  place-content: center;
  .posts {
    width: 70vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 5rem;

    .post {
      background-image: linear-gradient(
        130deg,
        rgba(173, 252, 234, 1) 26.8%,
        rgba(192, 229, 246, 1) 64%
      );
      clip-path: polygon(100% 0, 100% 80%, 50% 100%, 0 80%, 0 0);

      padding: 1rem;
      // border: 1px solid #ccc;
      border-radius: 0.5rem;
      height: 15rem;
      // display: grid;
      // grid-template-areas:
      //   'title'
      //   'info info info'
      //   'content';
      transition: 0.3s;

      &:hover {
        transform: scale(1.02);
        box-shadow: 5px 5px 30px #cacaca, -5px -5px 30px #e5e5e5;
      }

      .title {
        margin-top: 0;
        grid-area: tilte;
      }

      .info {
        grid-area: info;
        display: flex;
        justify-content: space-evenly;
        span {
          display: grid;
          place-content: center;
          color: green;
          border: 1px solid green;
          border-radius: 1rem;
          padding: 0.1rem 0.5rem;
        }
        #CSS {
          color: rgb(66, 165, 245);
          border: 1px solid rgb(66, 165, 245);
          font-size: 10px;
          padding: 3px 0.3rem;
        }
        #vue {
          color: rgb(0, 150, 136);
          border: 1px solid rgb(0, 150, 136);
          font-size: 10px;
          padding: 3px 0.3rem;
        }
        #http {
          color: rgb(36, 87, 145);
          border: 1px solid rgb(36, 87, 145);
          font-size: 10px;
          padding: 3px 0.3rem;
        }
        #JavaScript {
          color: rgb(228, 172, 3);
          border: 1px solid rgb(240, 180, 0);
          font-size: 10px;
          padding: 3px 0.3rem;
        }
      }

      .content {
        margin-top: 1rem;
        grid-area: content;
      }
    }
  }
}

.wait {
  margin-top: 5rem;
}
</style>
