const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

//连接数据库
async function main() {
  await mongoose.connect('mongodb://localhost:27017/mevn');
}
main()
  .then(console.log('数据库连接成功 || connection open'))
  .catch((err) => console.log(err));

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get('/darreninfo', (req, res) => {
  res.send([
    {
      person: {
        name: '李德劲',
        job: '前端工程师',
        born: '1994.10.06',
        slogan: '学无止境',
      },
      educate: {
        time: '2014年9月至2018年6月',
        school: '大连理工大学城市学院',
        major: '统招全日制本科，地理信息专业',
      },
      contact: {
        phone: '19842179537',
        email: 'geekarea@outlook.com',
      },
      desc: '我是一个喜欢网页技术的前端工程师，喜欢编写各种富有创意的网页，善于解决项目过程中的各种问题。阅读英文文档无压力，希望找到能让我充分发挥这些特长的工作！ :)',
      url: {
        blog: 'http://www.letschati.com',
        juejin: 'https://juejin.cn/user/915252445717933',
        github: 'https://github.com/GADLO',
      },
    },
  ]);
});

const postRoute = require('./routes/post');
app.use('/blog', postRoute);

const webRoute = require('./routes/web');
app.use('/web', webRoute);

const projectRoute = require('./routes/project');
app.use('/about', projectRoute);

app.listen(process.env.PORT || 8081);
