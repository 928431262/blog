const express = require('express');
const router = express.Router();
//这是引入首页路由文件
const home = require('./routes/home')

//首页
router.get('/',home.index)
//注册
// const reg = require('./routes/reg')
// router.get('/reg',reg.index)
router.get('/reg',home.reg)
//登录
router.get('/login',home.login)
//发现
router.get('/find',home.find);
//关于我
router.get('/aboutme',home.aboutme)
//推荐
router.get('/tuijian',home.tuijian)
router.get('/remen',home.remen)
router.get('/dengdai',home.dengdai)
router.get('/huati',home.huati)
module.exports = router;

