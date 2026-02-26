// 条件渲染
/**
 * 通过isLogin 决定最终的输出内容
 *
 */
const ejs = require("ejs");
const fs = require("fs");

let isLogin = true;

// 原生js
// if(isLogin){
//     console.log('<span>欢迎回来</span>')
// }else{
//     console.log('<button>登录</button> <button>注册</button>')
// }

// EJS实现
// 读取 HTML 内容
let html = fs.readFileSync("./03_home.html").toString();
let result = ejs.render(html, { isLogin: isLogin });

console.log(result);
