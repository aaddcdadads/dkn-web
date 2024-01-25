<template>
  <div class="hm-login">
    <div class="hm-login-loginTitle" :style="titleOption['style']">
      <h2 class="loginTitle">{{ titleOption["title"] }}</h2>
    </div>
    <!-- 登录 -->
    <div class="hm-login-loginView" v-if="viewState == '1'">
      <a-button type="link" class="changeViewState-btn rightTopBtn" @click="changeView(2)"
        >去注册</a-button
      >
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane
          key="account"
          tab="账号登录"
          :style="{ height: activeKey == 'account' ? '100%' : '0px' }"
        >
          <a-form :model="loginData.account">
            <a-form-item name="account">
              <a-input
                size="large"
                v-model:value="loginData.account.username"
                :placeholder="cPlaceholderOpts.username"
              />
            </a-form-item>
            <a-form-item name="password">
              <a-input-password
                size="large"
                v-model:value="loginData.account.password"
                :placeholder="cPlaceholderOpts.password"
                visibilityToggle
              />
            </a-form-item>
            <a-row>
              <a-col :span="12">
                <a-form-item name="captcha">
                  <a-input
                    size="large"
                    v-model:value="loginData.account.captcha"
                    :placeholder="cPlaceholderOpts.captcha"
                    @keyup.enter.native="
                      captchaClick(loginData.account, loginData.account.captcha)
                    "
                  />
                </a-form-item>
              </a-col>
              <a-col :span="6">
                <a-form-item name="password">
                  <img
                    v-if="randCodeData.requestCodeSuccess"
                    style="margin-left: 20%; margin-top: 2px; max-width: initial"
                    :src="randCodeData.randCodeImage"
                    @click="handleChangeCheckCode"
                  />
                  <img
                    v-else
                    style="margin-top: 2px; max-width: initial"
                    src="../../../assets/checkcode.png"
                    @click="handleChangeCheckCode"
                  />
                </a-form-item>
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="12">
                <a-form-item name="remember">
                  <a-checkbox v-model:checked="remember">{{
                    cPlaceholderOpts.remember
                  }}</a-checkbox>
                </a-form-item></a-col
              >
              <a-col :span="12">
                <a-form-item name="forget" :style="{ 'text-align': 'right' }">
                  <a-button type="link" size="small" @click="changeView(3)">{{
                    cPlaceholderOpts.forget
                  }}</a-button>
                </a-form-item>
              </a-col>
            </a-row>
            <a-form-item :wrapper-col="{ span: 24 }">
              <a-button
                type="primary"
                block
                :loading="loading"
                class="loginSubBtn"
                @click="handleLogin(loginData.account)"
                >{{ cPlaceholderOpts.login }}
              </a-button>
            </a-form-item>
          </a-form>
        </a-tab-pane>
        <a-tab-pane
          key="phone"
          tab="验证码登录"
          :style="{ height: activeKey == 'phone' ? '100%' : '0px' }"
        >
          <a-form :model="loginData.phone">
            <a-form-item name="phone">
              <a-input
                size="large"
                v-model:value="loginData.phone.mobile"
                :placeholder="cPlaceholderOpts.mobile"
              />
            </a-form-item>
            <a-form-item name="sms">
              <a-input
                @keyup.enter.native="handleLogin"
                size="large"
                v-model:value="loginData.phone.sms"
                :placeholder="cPlaceholderOpts.sms"
              >
                <template #addonAfter>
                  <a-button
                    class="hmCountBtn"
                    block
                    size="large"
                    :disabled="countBtn.disabled"
                    :loading="countBtn.loading"
                    @click="sendSMS(loginData.phone)"
                  >
                    {{ getButtonText }}
                  </a-button>
                </template>
              </a-input>
            </a-form-item>
            <a-form-item :wrapper-col="{ span: 24 }">
              <a-button
                type="primary"
                block
                :loading="loading"
                class="loginSubBtn"
                @click="handleLogin(loginData.phone)"
                >{{ cPlaceholderOpts.login }}</a-button
              >
            </a-form-item>
          </a-form>
        </a-tab-pane>
        <a-tab-pane
          v-for="(tabItem, tabIndex) in tabs"
          :key="tabItem.key || tabIndex"
          :tab="tabItem.name"
          :style="{ height: activeKey == (tabItem.key || tabIndex) ? '100%' : '0px' }"
        >
          <div class="tab-slot">
            <slot :name="`tab-slot-${tabItem.key || tabIndex}`"> </slot>
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>
    <!-- 注册 -->
    <div class="hm-login-registerView col" v-if="viewState == '2'">
      <a-button type="link" class="changeViewState-btn rightTopBtn" @click="changeView(1)"
        >去登录</a-button
      >
      <a-form :model="registerData" style="width: 100%">
        <a-form-item name="account">
          <a-input
            size="large"
            v-model:value="registerData.username"
            :placeholder="cPlaceholderOpts.username"
          />
        </a-form-item>
        <a-form-item name="password">
          <a-input-password
            size="large"
            v-model:value="registerData.password"
            :placeholder="cPlaceholderOpts.password"
            visibilityToggle
            maxLength="16"
          />
        </a-form-item>
        <a-form-item name="phone">
          <a-input
            size="large"
            v-model:value="registerData.mobile"
            :placeholder="cPlaceholderOpts.mobile"
          />
        </a-form-item>
        <a-form-item name="sms">
          <a-input
            size="large"
            v-model:value="registerData.sms"
            :placeholder="cPlaceholderOpts.sms"
          >
            <template #addonAfter>
              <a-button
                class="get-SMS-Btn"
                block
                size="large"
                :disabled="countBtn.disabled"
                :loading="countBtn.loading"
                @click="sendSMS(registerData)"
              >
                {{ getButtonText }}
              </a-button>
            </template>
          </a-input>
        </a-form-item>
      </a-form>
      <div class="hm-login-registerView_bottomBox col">
        <a-button
          type="primary"
          block
          :loading="loading"
          class="registerSubBtn"
          @click="handleRegister(registerData)"
          >注册</a-button
        >
        <span class="changeViewState-btn"
          >已有账号?
          <a-button type="link" class="changeViewState-btn" @click="changeView(1)"
            >去登录</a-button
          >
        </span>
      </div>
    </div>
    <!-- 忘记密码 -->
    <div class="hm-login-forgetView" v-if="viewState == '3'">
      <a-button type="link" class="changeViewState-btn rightTopBtn" @click="changeView(1)"
        >去登录</a-button
      >
      <a-form :model="forgetData" style="width: 100%">
        <a-form-item name="phone">
          <a-input
            size="large"
            v-model:value="forgetData.phone"
            :placeholder="cPlaceholderOpts.mobile"
          />
        </a-form-item>
        <a-form-item name="sms">
          <a-input
            size="large"
            v-model:value="forgetData.sms"
            :placeholder="cPlaceholderOpts.sms"
          >
            <template #addonAfter>
              <a-button
                class="hmCountBtn"
                block
                size="large"
                :disabled="countBtn.disabled"
                :loading="countBtn.loading"
                @click="sendSMS(forgetData)"
              >
                {{ getButtonText }}
              </a-button>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item name="password">
          <a-input-password
            size="large"
            v-model:value="forgetData.password"
            :placeholder="cPlaceholderOpts.password"
            visibilityToggle
            maxLength="16"
          />
        </a-form-item>
        <a-form-item name="newPassword">
          <a-input-password
            size="large"
            v-model:value="forgetData.newPassword"
            :placeholder="cPlaceholderOpts.newPassword"
            visibilityToggle
            maxLength="16"
          />
        </a-form-item>
      </a-form>
      <div class="hm-login-forgetView_bottomBox col">
        <a-button
          type="primary"
          block
          :loading="loading"
          class="forgetLoginBtn"
          @click="onUpdatePwd(forgetData)"
          >保存修改</a-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import { getAction, postAction } from "/@/request/http";
export default {
  name: "HmCustomLogin",
  props: {
    /**
     * url
     */
    urls: {
      type: Object,
      default: function () {
        return {
          loginUrl: "/api/sys/login",
          phoneUrl: "/api/sys/phoneLogin",
          registerUrl: "/api/sys/user/register",
          forgetUrl: "",
          smsUrl: "/api/sys/sms",
          randomImageUrl:"/api/sys/randomImage/"
        };
      },
    },
    /**
     * params
     */
    params: {
      type: Object,
      default: function () {
        return {
          loginParams: {
            type: "1",
          },
          phoneParams: {},
          registerParams: {},
          forgetParams: {},
          smsParams: {
            smsmode: "1", // ["1","2"]
          },
          randomImageParams:{}
        };
      },
    },
    /**
     * 数据映射
     */
    dataMap: {
      type: Object,
      default: function () {
        return {
          username: "username",
          password: "password",
          mobile: "mobile",
          sms: "yzm",
          // newPassword:""
        };
      },
    },
    /**
     * 附加标签页
     */
    tabs: {
      type: Array,
      default: function () {
        return [
          {
            key: "qrcode",
            name: "二维码登录",
          },
        ];
      },
    },
    /**
     * 字典配置
     */
    dicOption: {
      type: Object,
      default: function () {
        return {
          username: "账号",
          password: "密码",
          captcha: "图形验证码",
          newPassword: "确认密码",
          mobile: "手机号",
          sms: "验证码",
          remember: "记住我",
          forget: "忘记密码",
          login: "登录",
        };
      },
    },
    /**
     * 标题配置
     */
    titleOption: {
      type: Object,
      default: function () {
        return {
          title: "TEST LOGIN VIEW",
          style: {
            height: "120px",
            "font-size": "32px",
            color: "#1890ff",
            "background-color": "rgba(0,0,0,0.4)",
            "background-image":
              "url(https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/NUSEP/%E5%A4%A9%E4%BD%93-%E8%93%9D%E8%89%B2%402x.png)",
            "background-repeat": "repeat",
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
          },
        };
      },
    },
    /**
     * 表单规则
     */
    formRuleOption: {
      type: Object,
      default: function () {
        return {
          pwdRule: "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\\W_]).{8,16}$",
          pwdTooltip: "密码必须由8~16位数字、大小写字母、特殊符号组成",
          mobileRule:
            "^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\\d{8}$",
          mobileTooltip: "请输入合法手机号!!!",
        };
      },
    },
  },
  data() {
    return {
      // 页面状态 登录,注册,忘记密码
      viewState: 1,
      // 账号,手机,二维码
      activeKey: "account",
      // 记住我
      remember: false,
      // 登录按钮加载状态
      loading: false,
      // 登录数据:账号,手机号
      loginData: {
        account: {
          username: "",
          password: "",
          captcha: "",
          checkKey: "",
        },
        phone: {
          mobile: "",
          sms: null,
        },
      },
      // 随机验证码(图形验证码)
      randCodeData: {
        randCodeImage: "",
        requestCodeSuccess: false,
        checkKey: null,
      },
      // 注册数据
      registerData: {
        // 注册数据 账号/密码/手机号/验证码
        username: "",
        password: "",
        mobile: "",
        sms: null,
      },
      // 忘记密码数据
      forgetData: {
        // 忘记密码 手机号/验证码/密码/确认密码
        mobile: "",
        sms: null,
        password: "",
        newPassword: "",
      },
      // 占位符配置
      cPlaceholderOpts: {
        username: "账号",
        password: "密码",
        newPassword: "确认密码",
        mobile: "手机号",
        sms: "验证码",
        remember: "记住我",
        forget: "忘记密码",
        login: "登录",
      },
      // 获取验证码数据
      getButtonText: "获取验证码",
      countBtn: {
        // 获取验证码
        count: 20, // 20s
        step: 1, // -1s
        disabled: false,
        loading: false,
        stop: false,
        startText: "获取验证码",
        endText: "重新获取",
        text: "s 后重新获取",
      },
      // 验证表单规则
      cFormRule: {
        pwdRule: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,16}$/,
        pwdTooltip: "密码必须由8~16位数字、大小写字母、特殊符号组成",
        mobileRule: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
        mobileTooltip: "请输入合法手机号!!!",
      },
    };
  },
  mounted() {
    this.cPlaceholderOpts = JSON.parse(JSON.stringify(this.dicOption));
    this.cFormRule = JSON.parse(JSON.stringify(this.formRuleOption));
    this.handleChangeCheckCode();
  },
  watch: {
    dicOption: {
      handler: function (value, oldValue) {
        this.cPlaceholderOpts = JSON.parse(JSON.stringify(value));
      },
      deep: true,
    },
    formRuleOption: {
      handler: function (value, oldValue) {
        this.cFormRule = JSON.parse(JSON.stringify(value));
      },
      deep: true,
    },
  },
  methods: {
    // 改变随机验证码(图形验证码)
    handleChangeCheckCode() {
      let self = this;
      self.loginData.account.captcha = "";
      let url = self.urls.randomImageUrl;
      if(!url) return;
      let params = self.params.randomImageParams || {};
      //TODO 兼容mock和接口，暂时这样处理
      self.randCodeData.checkKey = 1629428467008; //new Date().getTime();
      self.loginData.account.checkKey = this.randCodeData.checkKey;
      let tempUrl = url + self.randCodeData.checkKey;
      getAction(tempUrl,params)
        .then((res) => {
          self.randCodeData.randCodeImage = res.result;
          self.randCodeData.requestCodeSuccess = true;
        }).captch((error)=>{
          self.$message.error(error.response.data.message);
        });
    },
    // 表单验证
    formRule(dataObj) {
      let self = this;
      //规则判断
      for (let key in dataObj) {
        if (dataObj[key] == "" || dataObj[key] == undefined || !dataObj[key]) {
          let text = "请输入你的" + self.cPlaceholderOpts[key];
          self.$message.error(text, 1);
          return false;
        } else if (key === "mobile") {
          if (!self.mobileRuleFlag(dataObj["mobile"])) return false;
        } else if (key === "password" || key === "newPassword") {
          let reg_pwd = new RegExp(self.cFormRule.pwdRule);
          let text = self.cFormRule.pwdTooltip || "请输入正确密码！";
          if (!reg_pwd.test(dataObj["password"]) || !reg_pwd.test(dataObj["password"])) {
            this.$message.error(text, 1);
            return false;
          }
        }
      }
      // 验证两次密码是否一样
      if (dataObj.hasOwnProperty("password") && dataObj.hasOwnProperty("newPassword")) {
        if (dataObj["password"] !== dataObj["newPassword"]) {
          self.$message.error("两次密码不一致,请重新输入", 1);
          return false;
        }
      }
      return true;
    },
    // 数据映射,转换key
    setDataMap(setDataMap) {
      let newObj = Object.keys(setDataMap).reduce((newData, key) => {
        let newKey = this.dataMap[key] || key;
        newData[newKey] = setDataMap[key];
        return newData;
      }, {});
      return newObj;
    },
    // 进行倒计时
    onCounting() {
      let self = this;
      const count = self.countBtn.count;
      self.countBtn.loading = true;
      setTimeout((e) => {
        let timer = setInterval((e) => {
          self.countBtn.count -= self.countBtn.step;
          self.countBtn.disabled = true;
          self.countBtn.loading = false;
          self.getButtonText = self.countBtn.count + self.countBtn.text || "";
          if (self.countBtn.count <= 0) {
            self.countBtn.disabled = false;
            self.getButtonText = self.countBtn.endText || self.countBtn.startText;
            self.handleEnd();
            self.countBtn.count = count;
            clearInterval(timer);
          } else {
            self.handleing(self.countBtn.count);
          }
        }, 1000);
      }, 1000);
    },
    // 判断电话合法性
    mobileRuleFlag(tel) {
      let self = this;
      let reg_tel = new RegExp(self.cFormRule.mobileRule);
      let text = "";
      if (!tel) {
        text = "请输入你的" + self.cPlaceholderOpts["mobile"];
        self.$message.error(text, 1);
        return false;
      }
      let isValid = reg_tel.test(tel);
      if (!isValid) {
        text = self.cFormRule.mobileTooltip || "请输入合法手机号!!!";
        self.$message.error(text, 1);
        return false;
      }
      return true;
    },
    // 发送验证码
    sendSMS(data) {
      let self = this;
      let flag = self.mobileRuleFlag(data["mobile"]);
      if (!flag) return;
      let url = self.urls.smsUrl;
      // 1:短信接口未配置，请联系管理员2:该用户不存在或未绑定手机号
      let parmas = self.params.smsParams || {};
      if (!url) {
        self.$message.warning("短信接口未配置，请联系管理员");
        return;
      }
      let SMSParmas = { ...self.setDataMap(data), ...parmas };
      postAction(url, SMSParmas).then((res) => {
        if (res.success) {
          self.$message.success("短信已发送，请注意查收");
          self.onCounting();
        } else {
          self.$message.error(res.message, 1);
        }
      });
    },
    // 切换登录,注册页面,忘记密码
    changeView(viewPage) {
      if (viewPage == 1) this.activeKey = "account";
      this.viewState = viewPage;
    },
    // 回车 图形验证码输入框
    captchaClick(data, value) {
      if (value.length < 4) return;
      this.handleLogin(data);
    },
    // 点击登录
    handleLogin(data) {
      let self = this;
      let flag = self.formRule(data);
      if (!flag) return;
      let url;
      let params = {};
      if (self.activeKey == "account") {
        url = self.urls.loginUrl;
        params = self.params.loginParams || {};
      } else {
        url = self.urls.phoneUrl;
        params = self.params.phoneParams || {};
      }
      let loginParams = { ...self.setDataMap(data), ...params };
      if (!url) {
        self.onLogin(loginParams, self.remember);
        return;
      }
      self.loading = true;
      postAction(url, loginParams)
        .then((res) => {
          if (res.success) {
            self.$message.success("登录成功");
            self.onLoginSuccess(loginParams, self.remember);
          } else {
            if (self.activeKey == "account") {
              self.handleChangeCheckCode();
            }
            self.$message.warning(res.message);
          }
          self.loading = false;
        })
        .catch((error) => {
          // 登录失败，提示错误信息
          self.$message.error(error.response.data.message, 1);
        });
    },
    // 点击注册
    handleRegister(data) {
      let self = this;
      let flag = self.formRule(data);
      let url = self.urls.registerUrl;
      let params = self.params.registerParams || {};
      if (!flag || !url) return;
      let registerParams = { ...self.setDataMap(data), ...params };
      postAction(url, registerParams)
        .then((res) => {
          if (res.success) {
            self.$message.success(res.message);
            self.changeView(1);
            let tempObj = self.loginData[self.activeKey];
            self.loginData[self.activeKey] = self.extractSameKeys(tempObj, data);
          } else {
            self.$message.warning(res.message);
          }
        })
        .captch((error) => {
          // 登录失败，提示错误信息
          self.$message.error(error.response.data.message, 1);
        });
    },
    // 更改密码
    onUpdatePwd(data) {
      let self = this;
      let flag = self.formRule(data);
      let url = self.urls.forgetUrl;
      let params = self.params.forgetParams || {};
      if (!flag || !url) return;
      let forgetParams = { ...self.setDataMap(data), ...params };
      postAction(url, forgetParams)
        .then((res) => {
          if (res.success) {
            self.$message.success(res.message);
            self.changeView(1);
            let tempObj = self.loginData[self.activeKey];
            self.loginData[self.activeKey] = self.extractSameKeys(tempObj, data);
          }
        })
        .catch((error) => {
          self.$message.error(error.response.data.message, 1);
        });
    },
    // 返回相同key 值
    extractSameKeys(smallObj, bigObj) {
      // 获取小对象的所有 key
      var smallKeys = Object.keys(smallObj);
      // 从大对象中提取与小对象具有相同 key 值的部分
      var result = smallKeys.reduce(function (acc, key) {
        if (bigObj.hasOwnProperty(key)) {
          acc[key] = bigObj[key];
        }
        return acc;
      }, {});
      return result;
    },
    // 计时结束
    handleEnd(e) {
      this.$emit("handleEnd", e);
    },
    // 计时进行中
    handleing(e) {
      this.$emit("handleing", e);
    },
    // 登录
    onLogin(e) {
      this.$emit("onLogin", e);
    },
    onLoginSuccess(e) {
      this.$emit("onLoginSuccess", e);
    },
    // 修改密码通过
    updatePass(e) {
      this.$emit("updatePass", e);
    },
  },
};
</script>
<style lang="less" scoped>
h1,
h2,
h3,
h4,
h5 {
  margin: 0px;
  padding: 0px;
}
div {
  box-sizing: border-box;
}
.row {
  display: flex;
  flex-direction: row;
}
.col {
  display: flex;
  flex-direction: column;
}
.hm-login {
  width: 100%;
  height: 100%;
  position: relative;
  padding: 40px 16px 12px;
  &-loginTitle {
    margin-top: 12px;
    margin-bottom: 24px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    .loginTitle {
      color: inherit;
    }
  }
  &-loginView {
  }
  &-registerView {
    &_bottomBox {
      width: 100%;
      .registerSubBtn {
        margin: 0 0 12px;
      }
    }
  }
}
.hm-login-loginView,
.hm-login-registerView,
.hm-login-forgetView {
  .rightTopBtn {
    position: absolute;
    top: 0px;
    right: 0px;
  }
}
/deep/ .ant-input-group-addon {
  border: none;
  padding: 0px 0px 0px 12px;
  background-color: transparent;
}
</style>
