<template>
  <div class="wrap">
    <h1>新增</h1>
    <el-form :model="form" label-width="120px" class="form">
      <el-form-item label="名字">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="URL">
        <el-input v-model="form.url" />
      </el-form-item>
      <el-form-item label="icon">
        <el-input v-model="form.icon" />
      </el-form-item>
      <el-form-item label="技术方向">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="frontend" name="type" />
          <el-checkbox label="backend" name="type" />
          <el-checkbox label="npm" name="type" />
          <el-checkbox label="bundler" name="type" />
          <el-checkbox label="outsite" name="type" />
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
        <el-button @click="upload">上传</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import api from '../../api/api';
// import web from '../../../public/data/frontend';

const router = useRouter();

// do not use same name with ref
const form = reactive({
  name: 'web',
  url: 'url',
  icon: 'icon',
  desc: 'desc',
  ver: 'ver',
  type: [],
});

const onSubmit = async () => {
  const response = await api.post('/web/createweb', {
    name: form.name,
    url: form.url,
    icon: form.icon,
    desc: form.desc,
    ver: form.ver,
    type: form.type,
  });
  if (response.status === 200) {
    router.replace({ path: '/blog/posts' });
  }
};

// const upload = () => {
//   Object.keys(web).forEach((i) => {
//     api.post('/web/createweb', {
//       name: web[i].name,
//       url: web[i].url,
//       icon: web[i].icon,
//       desc: web[i].desc,
//       ver: web[i].ver,
//       type: web[i].type,
//     });
//   });
// };
</script>

<style scoped>
.wrap {
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  width: 40vw;
}
</style>
