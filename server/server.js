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

app.get('/servertest', (req, res) => {
  res.send([
    {
      title: 'Hello vue',
      description: 'This Msg is from node server',
    },
  ]);
});

const postRoute = require('./routes/post');
app.use('/blog', postRoute);

app.listen(process.env.PORT || 8081);
