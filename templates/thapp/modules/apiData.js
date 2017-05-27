/**
 * Created by Diogo on 2017年2月21日10:06:20.
 * 命名规则: 驼峰式
 * 命名规范: isXXXX 是做判断  getXXX 是获取数据   doXXXX 是提交数据
 * 错误返回值:
 */
let app = require("common");

var date = {

    /**
     * @description 用户注册类,检测用户是否已经注册 (手机号码)
     * @returns {"status":"EXSIT"} 存在    {"status":"NONE"} 不存在
     */
    isCheck: {
        url: "cloud2.member.api/member/userInfo/phoneRegisted.do",
        param: "phone,comId",
        // type: "post"
    }


};



module.exports = app.moduleFactory(date);