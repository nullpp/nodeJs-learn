const express = require("express");

const router = express.Router();

// 创建路由规则
// 创建路由
router.get("/home", (req, res) => {
  res.send("首页");
});

router.get("/search", (req, res) => {
  res.send("内容搜索");
});

module.exports = router;
