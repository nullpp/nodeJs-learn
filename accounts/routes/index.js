var express = require("express");
var router = express.Router();

// 导入 lowdb
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapters = new FileSync(__dirname + "/../data/db.json");

// 获取db对象
const db = low(adapters);

// 导入shortid
const shortid = require("shortid");

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// 列表--页面
router.get("/account", function (req, res, next) {
  let accounts = db.get("accounts").value();
  res.render("list", { accounts });
});

// 添加记录--页面
router.get("/account/create", function (req, res, next) {
  res.render("create");
});

// 新增记录
router.post("./account", (req, res) => {
  let id = shortid.generate();
  // 写入文件
  db.get("accounts").unshift({
    id: id,
    ...req.body,
  });

  res.render("success", { msg: "添加成功", url: "/account" });
});

// 删除记录
router.get("/account/:id", (req, res) => {
  // 获取id
  let id = req.params.id;

  db.get("accounts").remove({ id }).write();

  res.render("success", { msg: "删除成功", url: "/account" });
});

module.exports = router;
