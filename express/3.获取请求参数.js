const express = require("express");

const app = express();

app.get("/request", (req, res) => {
  // 原生操作
  //   console.log(req.method);
  //   console.log(req.url);
  //   console.log(req.httpVersion);
  //   console.log(req.headers);

  // express 操作
  console.log(req.path);
  console.log(req.query);

  // 获取IP
  console.log(req.ip);

  res.end("hello express");
});

app.listen(3000, () => {
  console.log("服务已启动");
});
