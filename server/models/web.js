const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 这是web模型的基本数据结构
const webSchema = new Schema({
  icon: String,
  name: String,
  url: String,
  desc: String,
  version: String,
  type: String,
  timestamp: String,
});

//输出新的模型，我可以用nodejs去更改它
const Web = mongoose.model('Web', WebSchema);

module.exports = Web;
