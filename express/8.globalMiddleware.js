/**
 * 全局中间件--js文件名，不能中文，否则node 中文 命令启动不了
 * 记录每个请求的url与ip地址
 *
 */
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

// 声明中间件函数
function recordMiddleware(req, res, next) {
  // 获取url和IP
  let { url, ip } = req;
  console.log(url, ip);
  // 将信息保存在文件中 access.log
  fs.appendFileSync(
    path.resolve(__dirname, "./access.log"),
    `${url} ${ip}\r\n`
  );

  // 调用next
  next();
}

// 使用中间件函数
app.use(recordMiddleware);

// 创建路由
app.get("/home", (req, res) => {
  res.send("首页");
});

app.get("/admin", (req, res) => {
  res.send("后台");
});

app.all("*", (req, res) => {
  res.send(`<h1>404 Not Found</h1>`);
});

app
  .listen(3000, () => {
    console.log("服务已启动");
  })
  .on("error", (err) => {
    console.error(err);
  });
