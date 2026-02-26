// 图片防盗链
const express = require("express");

const app = express();

// 声明中间件
app.use((req, res, next) => {
  // 检测请求头中的 referer 是否为 127.0.0.1
  // 获取referer
  let referer = req.get("referer");
  if (referer) {
    // 实例化
    let url = new URL(referer);
    // 获取hostname
    let hostname = url.hostname;
    // 判断
    if (hostname !== "127.0.0.1") {
      res.status(404).send("<h1>404 Not Found</h1>");
      return;
    }
  }

  next();
});

app.use(express.static(__dirname + "/public"));

app.listen(3000, () => {
  console.log("服务已启动");
});
