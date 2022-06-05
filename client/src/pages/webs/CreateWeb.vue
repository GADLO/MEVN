<template>
  <div class="wrap">
    <h1>新增文章</h1>
    <el-form :model="form" label-width="120px" class="form">
      <el-form-item label="名字">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="URL">
        <el-input v-model="form.url" />
      </el-form-item>
      <el-form-item label="技术方向">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="frontend" name="type" />
          <el-checkbox label="backend" name="type" />
          <el-checkbox label="npm" name="type" />
          <el-checkbox label="other" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="当前版本">
        <el-input v-model="form.ver" />
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
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
  name: '',
  url: 'form.url',
  desc: 'form.desc',
  ver: 'form.ver',
  type: 'form.type',
});

const onSubmit = async () => {
  const response = await api.post('/blog/createpost', {
    icon: '',
    name: form.name,
    url: form.url,
    desc: form.desc,
    version: form.ver,
    type: form.type,
  });
  if (response.status === 200) {
    router.replace({ path: '/blog/posts' });
  }
};
</script>

<style scoped>
.wrap {
  width: 100vw;
  /* height: 100%; */
}

.form {
  width: 20vw;
}
</style>
