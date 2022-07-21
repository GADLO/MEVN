<template>
  <div class="layout">
    <div class="resumeForm">
      <h1>新增项目</h1>
      <el-form :model="form" label-width="120px">
        <el-form-item label="标题">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="URL">
          <el-input v-model="form.url" />
        </el-form-item>
        <el-form-item label="项目技术栈">
          <el-checkbox-group v-model="form.tech">
            <el-checkbox label="JavaScript" name="type" />
            <el-checkbox label="CSS" name="type" />
            <el-checkbox label="Vue" name="type" />
            <el-checkbox label="http" name="type" />
            <el-checkbox label="SASS" name="type" />
            <el-checkbox label="Node" name="type" />
            <el-checkbox label="MongoDB" name="type" />
            <el-checkbox label="Express" name="type" />
            <el-checkbox label="HTML5" name="type" />
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="内容">
          <el-input v-model="form.desc" type="textarea" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="resume">
      <div class="resume-info">
        <img
          src="https://images.unsplash.com/photo-1654354280759-131dd81097fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
          id="tx"
          loading="lazy"
        />
        <div id="workexp">
          <h3>李德劲</h3>
          <h5>前端工程师</h5>
          <h6>1994.10.06</h6>
          <h6>学无止境</h6>
        </div>
        <div id="workexp">
          <h2>联系方式</h2>
          <h6>手机:19842179537</h6>
          <h6>邮箱:geekarea@outlook.com</h6>
        </div>
        <div id="workexp">
          <h2>教育背景</h2>
          <h5>大连理工大学城市学院</h5>
          <h6>2014年9月至2018年6月</h6>
          <h6>统招全日制本科，地理信息专业</h6>
        </div>
        <div id="workexp">
          <h2>工作经历</h2>
          <h5>
            广州中海达定位技术有限公司
            <span style="font-size: 12px;">(2018.7-2022.1)</span>
          </h5>
          <h6>项目经历看右边</h6>
        </div>
        <div id="tech">
          <h2>技术掌握情况</h2>
          <div id="cando"></div>
        </div>
        <p>
          我是一个喜欢网页技术的前端工程师，喜欢编写各种富有创意的网页，善于解决项目过程中的各种问题。阅读英文文档无压力，希望找到能让我充分发挥这些特长的工作！
          :)
        </p>
        <div id="links">
          <div id="linkto">
            <img src="github-alt-brands.svg" alt="" />
            <a href="https://github.com/GADLO">github.com/GADLO</a>
          </div>
          <div id="linkto">
            <img src="favicon.png" alt="" />
            <a href="http://www.letschati.com">letschati.com</a>
          </div>
          <div id="linkto">
            <img
              src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"
              alt=""
            />
            <a href="https://juejin.cn/user/915252445717933">juejin.cn/user</a>
          </div>
          <div id="linkto">
            <img src="favicon.ico" alt="" />
            <a href="http://www.letschati.com:4000/">vue商城</a>
          </div>
        </div>
      </div>
      <div class="project">
        <div
          v-for="project in projects"
          :key="project.name"
          class="project-info"
        >
          <a href="http://www.letschati.com/"
            >{{ project.name
            }}<span style="font-size: 12px;">{{ project.url }} </span></a
          >
          <div>
            <Button
              v-for="tech in project.tech"
              :key="tech"
              :text="tech"
              class="button-74 btn"
            />
          </div>
          <p>{{ project.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../api/api';

export default {
  data() {
    return {
      darren: {},
      projects: [],
      form: {
        name: '',
        url: '',
        tech: [],
        desc: '',
      },
    };
  },
  methods: {
    async fetchProjects() {
      const person = await api.get('./darreninfo');
      const response = await api.get('/about/projects');
      this.darren = [...person.data];
      console.log(this.darren);

      this.projects = response.data;
    },
    async onSubmit() {
      await api.post('/about/createproject', {
        name: this.form.name,
        url: this.form.url,
        tech: this.form.tech,
        desc: this.form.desc,
      });
    },
  },
  mounted() {
    setTimeout(this.fetchProjects, 1000);
  },
};
</script>

<style lang="less" scoped>
.layout {
  display: grid;
  grid-template-columns: 3fr 6fr;

  a {
    text-decoration: none;
    color: white;
    align-self: center;
  }
  #resume {
    #resume-menu {
    }

    ul li {
      margin: 10px;
      text-align: left;
      list-style: none;
      padding: 0;
      color: #fff;
      font-size: 13px;
    }

    #resume-info {
      width: 70%;
      background-color: rgb(204, 199, 199);
    }
  }
}
.resumeForm {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 90vh;
  padding: 2rem;
}

.resume {
  margin: 50px 0;
  background-color: rgb(3, 117, 85);
  width: 840px;
  height: 1188px;
  display: grid;
  grid-template-columns: 3fr 7fr;
  color: #e5e5e5;

  h2,
  h3 {
    margin: 5px;
    text-align: center;
    color: #fff;
  }
  .resume-info {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: #ccc;

    p {
      color: #fff;
      padding: 10px;
      font-size: 13px;
      margin: 5px;
    }
    #links {
      display: grid;
      place-content: center;
      grid-gap: 5px;
    }

    #linkto {
      display: grid;
      place-content: center;
      grid-gap: 5px;
      grid-template-columns: 1fr 6fr;

      img {
        width: 20px;
        margin: 5px;
      }
    }

    #tx {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin: 10px;
      background-color: #fff;
      object-fit: cover;
    }

    #tech {
      margin: 0;
      padding: 10px;
      width: 100%;
    }
    #cando {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    #workexp {
      display: flex;
      flex-direction: column;
      align-items: center;

      h5 {
        margin-top: 5px;
        color: #2196f3;
      }

      h2,
      h4,
      h6 {
        margin: 5px;
      }
    }
  }

  .project {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    text-align: center;

    .project-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 10px;
      width: 90%;
      a {
        color: #2196f3;
        text-decoration: none;
        font-weight: 700;
        font-size: 25px;
        text-align: center;
      }

      h3 {
        margin-top: 10px;
      }
    }

    .tech {
      padding: 5px;
      border-radius: 26px;
      background: #cdc7c7;
      box-shadow: inset 13px 13px 26px #c3bdbd, inset -13px -13px 26px #d7d1d1;

      .btn {
        font-size: 20px;
      }
    }
  }
}
</style>
