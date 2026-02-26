// 路由模块化
/**
 * 针对 /admin /setting 的请求，要求URL 携带 code=521 参数，如未携带提示【暗号错误】
 */

const express = require("express");
const homeRouter = require("./router/homeRouter");
const adminRouter = require("./router/adminRouter");

// 创建应用对象
const app = express();

app.use(homeRouter);
app.use(adminRouter);

app.all("*", (req, res) => {
  res.send("<h1>404 Not Found</h1>");
});

app.listen(3000, () => {
  console.log("服务已启动");
});
