<template>
  <div class="wrap">
    <h1>编辑文章</h1>
    <el-form :model="form" label-width="120px" class="form">
      <el-form-item label="标题">
        <el-input v-model="form.title" />
      </el-form-item>
      <el-form-item label="作者">
        <el-input v-model="form.author" />
      </el-form-item>
      <el-form-item label="文章类型">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="JavaScript" name="type" />
          <el-checkbox label="CSS" name="type" />
          <el-checkbox label="Vue" name="type" />
          <el-checkbox label="http" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="内容">
        <el-input v-model="form.content" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="update()">更新</el-button>
        <el-button @click="back">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import api from '../../api/api';

const route = useRoute();
const router = useRouter();

let post = reactive({});

const form = reactive({
  title: '',
  author: '',
  type: [],
  content: '',
});

const fetchPost = async () => {
  const response = await api.get(`/blog/post/${route.params.id}`);
  post = response.data;
  form.title = post.title;
  form.author = post.author;
  form.type = post.type;
  form.content = post.content;
};

onMounted(() => {
  fetchPost();
});

const update = async () => {
  alert('更新成功');
  router.replace({ path: `/blog/post/${route.params.id}` });
  const response = await api.put(`/blog/updatepost/${route.params.id}`, {
    title: form.title,
    author: form.author,
    type: form.type,
    content: form.content,
  });
  console.log(response);

  if (response.status === 200) {
    router.replace({ path: `/blog/post/${route.params.id}` });
  }
};

const back = () => {
  router.replace({ path: `/blog/post/${route.params.id}` });
};
</script>

<style scoped>
.wrap {
  width: 100vw;
  /* height: 100%; */
}

.form {
  width: 60vw;
}
</style>
