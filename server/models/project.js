const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 这是web模型的基本数据结构
const projectSchema = new Schema({
  name: String,
  url: String,
  tech: Array,
  desc: String,
  timestamp: String,
});

//输出新的模型，我可以用nodejs去更改它
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;