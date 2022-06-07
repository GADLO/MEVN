const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 这是web模型的基本数据结构
const webSchema = new Schema({
  name: String,
  url: String,
  icon: String,
  desc: String,
  ver: String,
  type: Array,
  timestamp: String,
});

//输出新的模型，我可以用nodejs去更改它
const Web = mongoose.model('Web', webSchema);

module.exports = Web;
