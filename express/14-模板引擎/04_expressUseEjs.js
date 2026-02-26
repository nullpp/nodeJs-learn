/**
 * express中使用ejs
 */
const express = require("express");

const path = require("path");

const app = express();

// 1.设置模板引擎
app.set("view engine", "ejs");

// 2.设置模板文件存放位置 模板文件：具有模板语法内容的文件
app.set("views", path.resolve(__dirname, "./views"));

app.get("/home", (req, res) => {
  // 3.响应
  // res.render('模板的文件名','数据')
  let title = "EJS";
  res.render("home", { title });
});

app.listen(3000, () => {
  console.log("服务已启动。。。。。。。。。。");
});
