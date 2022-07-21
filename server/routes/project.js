const express = require('express');
const projectControl = require('../controllers/projectControl');
const router = express.Router();

// post 方法
// 添加数据库里的数据
router.post('/createproject', projectControl.createProject);

router.get('/projects', projectControl.Projects);

// update 方法
// 更新数据库里的数据
router.put('/updateproject/:id', projectControl.updateProject);

// delete 方法
// 删除数据库里的数据
router.delete('/deleteweb', projectControl.deleteProject);

module.exports = router;
