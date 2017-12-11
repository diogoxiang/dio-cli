const fs = require("fs");
const { resolveCwd } = require("./utils");

module.exports = () => {
  if (fs.existsSync(resolveCwd(".dioconfig/config"))) {
    try {
      return fs.readFileSync(resolveCwd(".dioconfig/config"));
    } catch (err) {
      console.error("获取 .dioconfig/config.js 配置文件 出错");
      console.error(err);
    }
  } else if (fs.existsSync(resolveCwd(".dioconfig/config.js"))) {
    return require(resolveCwd(".dioconfig/config.js"));
  } else if (fs.existsSync(resolveCwd(".dioconfig/config.json"))) {
    return require(resolveCwd(".dioconfig/config.json"));
  } else {
    return;
  }
};
