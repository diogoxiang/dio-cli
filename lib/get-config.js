const fs = require("fs");
const { resolveCwd } = require("./utils");

module.exports = () => {
  if (fs.existsSync(resolveCwd(".dioconfig/init"))) {
    try {
      return fs.readFileSync(resolveCwd(".dioconfig/init"));
    } catch (err) {
      console.error("获取 .dioconfig/init.js 出错");
      console.error(err);
    }
  } else if (fs.existsSync(resolveCwd(".dioconfig/init.js"))) {
    return require(resolveCwd(".dioconfig/init.js"));
  } else if (fs.existsSync(resolveCwd(".dioconfig/init.json"))) {
    return require(resolveCwd(".dioconfig/init.json"));
  } else {
    return;
  }
};
