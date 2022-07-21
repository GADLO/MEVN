<template>
  <div class="form">
    <h1>新增文章</h1>
    <el-form :model="form" label-width="120px">
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
        <el-button type="primary" @click="onSubmit">发布</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import api from '../../api/api';

const router = useRouter();

// do not use same name with ref
const form = reactive({
  title: '',
  author: '',
  type: [],
  desc: '',
});

const onSubmit = async () => {
  const response = await api.post('/blog/createpost', {
    title: form.title,
    author: form.author,
    type: form.type,
    content: form.content,
  });
  if (response.status === 200) {
    router.replace({ path: '/blog/posts' });
  }
};
</script>

<style >
.form {
  width: 100vw;
  height: 100vh;
  display: grid;
  place-content: center;
}
</style>
