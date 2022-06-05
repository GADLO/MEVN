const express = require('express');
const router = express.Router();
const postControl = require('../controllers/postControl');

//加载所有Post
router.get('/posts', postControl.Posts);

//加载单个Post
router.get('/post/:id', postControl.Post);

//添加新的Post
router.post('/createpost', postControl.createPost);

//更新Post
router.put('/updatepost/:id', postControl.updatePost);

//删除Post
router.delete('/deletepost', postControl.deletePost);

module.exports = router;
