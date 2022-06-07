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
          <el-checkbox label="unknown" name="type" />
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
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import api from '../../api/api';

const route = useRoute();
// const router = useRouter();
let web = {};

// do not use same name with ref
const form = reactive({
  name: '',
  url: '',
  icon: '',
  desc: '',
  ver: '',
  type: [],
});

const fetchWeb = async () => {
  const response = await api.get(`/web/getweb/${route.params.id}`);
  web = response.data;
  form.name = web.name;
  form.url = web.url;
  form.icon = web.icon;
  form.ver = web.ver;
  form.type = web.type;
  form.desc = web.desc;
};

onMounted(() => {
  fetchWeb();
});

const onSubmit = async () => {
  //   router.replace({ path: '/explore' });

  const response = await api.put(`/web/updateweb/${route.params.id}`, {
    name: form.name,
    url: form.url,
    icon: form.icon,
    desc: form.desc,
    ver: form.ver,
    type: form.type,
  });

  alert(response);
};
</script>

<style scoped>
.wrap {
  width: 100vw;
  /* height: 100%; */
}

.form {
  width: 40vw;
}
</style>
