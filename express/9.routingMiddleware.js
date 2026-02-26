/**
 * 路由中间件
 *
 * 针对 /admin /setting 的请求，要求URL携带 code=521 参数,未携带，提示 暗号错误
 *
 */

const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.send("首页");
});

// 声明中间件
let checkCodeMiddleware = (req, res, next) => {
  // 判断 URL 中是否 code 参数等于521
  if (req.query.code === "521") {
    next();
  } else {
    res.send("暗号错误");
  }
};

app.get("/admin", checkCodeMiddleware, (req, res) => {
  res.send("后台首页");
});

app.get("/setting", checkCodeMiddleware, (req, res) => {
  res.send("设置");
});

app.all("*", (req, res) => {
  res.send(`<h1>404 Not Found</h1>`);
});

app.listen(3000, () => {
  console.log("服务已启动");
});
