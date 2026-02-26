const ejs = require("ejs");

const xiyou = ["唐僧", "孙悟空", "猪八戒", "沙僧"];

// 原生 JS
// let str = "<ul>";

// xiyou.forEach((item) => {
//   str += `<li>${item}</li>`;
// });

// str += "</ul>";

// console.log(str);

const fs = require("fs");
let html = fs.readFileSync("./02_xiyou.html").toString();
let result = ejs.render(html, { xiyou });

console.log(result);
