const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 这是web模型的基本数据结构
const postSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  // id: { type: String },
  type: { type: Array, required: true },
  content: { type: String, required: true },
  timestamp: { type: String, required: true },
  //   vote_count: { type: Number, required: true },
  //   comment_count: { type: Number, required: true },
  // votes: [
  // 	{
  // 		vote_id: { type: String},
  // 		voted_user_id: { type: Number, required: true },
  // 		timestamp: { type: String, required: true },
  // 	},
  // ],
});

//输出新的模型，我可以用nodejs去更改它
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
