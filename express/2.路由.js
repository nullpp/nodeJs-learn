const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.end("hello express");
});

// 首页路由
app.get("/", (req, res) => {
  console.log(req.ip);
});

app.post("/login", (req, res) => {
  res.end("login");
});

// 匹配所有的方法
app.all("/test", (req, res) => {
  res.end("test");
});

// 404 响应
app.all("*", (req, res) => {
  res.end("404 not Found");
});

// 监听端口
app.listen(3000, () => {
  console.log("服务已启动");
});
