const express = require('express');
const webControl = require('../controllers/webControl');
const router = express.Router();

// post 方法
// 添加数据库里的数据
router.post('/createweb', webControl.createWeb);

router.get('/getweb/:id', webControl.getWeb);

router.get('/webs', webControl.Webs);

// update 方法
// 更新数据库里的数据
router.put('/updateweb/:id', webControl.updateWeb);

// delete 方法
// 删除数据库里的数据
router.delete('/deleteweb', webControl.deleteWeb);

module.exports = router;
