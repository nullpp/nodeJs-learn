const express = require("express");

const app = express();

app.get("/response", (req, res) => {
  // 原生响应
  //   res.statusCode = 404;
  //   res.statusMessage = "love";
  //   res.setHeader("xxx", "yyy");
  //   res.write("hello express");
  //   res.end("response");

  // express 响应
  //   res.status(500);
  //   res.set("aaa", "bbb");
  //   res.send("你好 Express");
  res.status(500).set("abc", "def").send("这都是OK的");
});

app.listen(3000, () => {
  console.log("服务已启动");
});
