// 静态资源中间件
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("首页");
});

app.use(express.static(__dirname + "/public"));

app.listen(3000, () => {
  console.log("服务已启动");
});
