// 导入mongoose
const mongoose = require("mongoose");

// 连接mongodb 服务
mongoose.connect("mongodb://127.0.0.1:27017/bilibili");

// 设置回调
// 设置连接成功的回调
// once 事件回调函数只执行一次
mongoose.connection.once("open", () => {
  console.log("连接成功");
});
// 设置连接错误的回调
mongoose.connection.on("error", () => {
  console.log("连接失败");
});
// 设置连接关闭的回调
mongoose.connection.on("close", () => {
  console.log("连接关闭");
});

// 关闭mongodb
setTimeout(() => {
  mongoose.disconnect();
}, 2000);
