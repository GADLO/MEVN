const Post = require('../models/post');
const dayjs = require('dayjs');
const { marked } = require('marked');

// this is our create method
// this method adds newePost in ourePostbase
module.exports.createPost = async (req, res) => {
  const now = dayjs(`${new Date()}`).format('YYYY-MM-DD HH:mm:ss');
  const newPost = new Post({
    ...req.body,
    timestamp: now,
  });

  newPost.save((error) => {
    if (error) {
      console.log(error);
    }
    res.send({
      success: true,
      message: 'from: postControl,Post saved successfully!',
    });
  });
};

module.exports.Posts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

module.exports.Post = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    post.content = marked.parse(post.content);

    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

// 更新
// this method overwrites existingePost in ourePostbase
module.exports.updatePost = async (req, res) => {
  const now = dayjs(`${new Date()}`).format('YYYY-MM-DD HH:mm:ss');
  try {
    const updatedResult = await Post.findByIdAndUpdate(
      req.params.id,
      { ...req.body, timestamp: now },
      {
        new: true,
      }
    );
    console.log(updatedResult);
    res.status(200);
  } catch (err) {
    console.log(err);
  }
};

// this is our delete method
// this method removes existingePost in ourePostbase
module.exports.deletePost = async (req, res) => {
  const { id: _id } = req.params;
  try {
    const deleteePost = await Post.findByIdAndRemove(_id);
    res.status(200).json(deleteePost);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};
