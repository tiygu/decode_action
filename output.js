//Fri Aug 16 2024 17:00:49 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("店铺抽奖");
const notify = $.isNode() ? require("./sendNotify") : "";
const jdCookieNode = $.isNode() ? require("./jdCookie.js") : "";
let cookiesArr = [],
  cookie = "",
  message;
let jd_shop_draw_ids = process.env.jd_shop_draw_ids ? process.env.jd_shop_draw_ids : "";
let jd_shop_draw_num = process.env.jd_shop_draw_num ? process.env.jd_shop_draw_num : 15;
const JD_API_HOST = "https://api.m.jd.com/client.action";
let ids = [];
if (jd_shop_draw_ids.indexOf("&") > -1) {
  ids = jd_shop_draw_ids.split("&");
} else {
  ids = [jd_shop_draw_ids];
}
if ($.isNode()) {
  Object.keys(jdCookieNode).forEach(_0x529be8 => {
    cookiesArr.push(jdCookieNode[_0x529be8]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  cookiesArr = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonParse($.getdata("CookiesJD") || "[]").map(_0x41f9c2 => _0x41f9c2.cookie)].filter(_0x592d22 => !!_0x592d22);
}
!(async () => {
  if (!cookiesArr[0]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }
  if (ids.length < 1 || !jd_shop_draw_ids) {
    console.log("【加入环境频道】https://t.me/proenvc ");
    console.log("export jd_shop_draw_ids=\"shop1&shop2&shop3...\" 未设置 退出！！！");
    return;
  }
  console.log("加入环境频道: https://t.me/proenvc");
  for (let _0x52c718 = 0; _0x52c718 < ids.length; _0x52c718++) {
    $.ii = _0x52c718 + 1;
    $.shopId = ids[_0x52c718];
    console.log();
    console.log("店铺Id: " + $.shopId);
    for (let _0x21c19e = 0; _0x21c19e < cookiesArr.length; _0x21c19e++) {
      if (cookiesArr[_0x21c19e]) {
        cookie = cookiesArr[_0x21c19e];
        $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
        $.index = _0x21c19e + 1;
        $.isLogin = true;
        $.nickName = "";
        $.activityId = "";
        message = "";
        console.log("******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********");
        if (!$.isLogin) {
          const _0x19e041 = {
            "open-url": "https://bean.m.jd.com/bean/signIndex.action"
          };
          $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x19e041);
          if ($.isNode()) {
            await notify.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie");
          }
          continue;
        }
        if ($.index > jd_shop_draw_num) {
          console.log("最多执行" + jd_shop_draw_num + "个号， 退出！");
          break;
        }
        try {
          await $.wait(parseInt(Math.random() * 1000 + 500, 10));
          if ($.index == 1) {
            await getShopHomeBaseInfo();
            console.log("venderId: " + $.venderId);
            await getSignInfo();
            await signActivityRule();
          }
          await $.wait(parseInt(Math.random() * 1000 + 500, 10));
          await sign();
          await $.wait(parseInt(Math.random() * 500 + 500, 10));
        } catch (_0x2b5ec1) {
          console.log("可能是黑号也可能是活动结束了");
          await $.wait(parseInt(Math.random() * 500 + 500, 10));
        }
      }
    }
  }
  process.exit(1);
})().catch(_0x562767 => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x562767 + "!", "");
}).finally(() => {
  $.done();
});
async function getShopHomeActivityInfo() {
  return new Promise(async _0x354764 => {
    let _0x846d4f = "0." + parseInt(Math.random() * 50 + 10, 10) + parseInt(Math.random() * 9 + 1, 10);
    const _0x110774 = {
      RNVersion: _0x846d4f,
      abtest: "",
      lat: "",
      latWs: "",
      lng: "",
      lngWs: "",
      refer: "m_destination_page_null",
      shopId: $.shopId,
      source: "app-shop",
      sourceRpc: "shop_app_home_home"
    };
    let _0x82e5b3 = await getSign("getShopHomeActivityInfo", _0x110774);
    $.post(apptaskUrl("getShopHomeActivityInfo", _0x110774, _0x82e5b3), (_0x1f044b, _0x4b9e08, _0x3d3942) => {
      try {
        if (_0x1f044b) {
          console.log("" + JSON.stringify(_0x1f044b));
          console.log("getShopHomeActivityInfo API请求失败，请检查网路重试");
        } else {
          if (safeGet(_0x3d3942)) {
            res = JSON.parse(_0x3d3942);
            if (res.code == 0 && res.result) {
              try {
                $.activityId = res.result.activityId ? res.result.activityId : "";
              } catch (_0x97d601) {
                $.activityId = "";
              }
              if ($.index == 1 && $.activityId) {
                if (res.result.shopGifts.length >= 1) {
                  console.log("奖品: " + JSON.stringify(res.result.shopGifts));
                }
              }
            } else {
              console.log(_0x3d3942);
            }
          }
        }
      } catch (_0x115f7b) {
        $.logErr(_0x115f7b, _0x4b9e08);
      } finally {
        _0x354764();
      }
    });
  });
}
async function getShopHomeBaseInfo() {
  return new Promise(async _0x4dca8a => {
    let _0x478bb7 = "0." + parseInt(Math.random() * 50 + 10, 10) + parseInt(Math.random() * 9 + 1, 10);
    const _0x208f49 = {
      RNVersion: _0x478bb7,
      abtest: "",
      lat: "",
      latWs: "",
      lng: "",
      lngWs: "",
      refer: "m_destination_page_null",
      shopId: $.shopId,
      source: "app-shop",
      sourceRpc: "shop_app_home_home"
    };
    let _0x5882a6 = await getSign("getShopHomeBaseInfo", _0x208f49);
    $.post(apptaskUrl("getShopHomeBaseInfo", _0x208f49, _0x5882a6), (_0x3acefe, _0x24a997, _0x5ac85b) => {
      try {
        if (_0x3acefe) {
          console.log("" + JSON.stringify(_0x3acefe));
          console.log("getShopHomeBaseInfo API请求失败，请检查网路重试");
        } else {
          if (safeGet(_0x5ac85b)) {
            res = JSON.parse(_0x5ac85b);
            if (res.code == 0 && res.result) {
              $.shopInfo = res.result.shopInfo;
              console.log("第" + $.ii + "个活动");
              $.venderId = $.shopInfo.venderId;
            } else {
              console.log(_0x5ac85b);
            }
          }
        }
      } catch (_0x11e574) {
        $.logErr(_0x11e574, _0x24a997);
      } finally {
        _0x4dca8a();
      }
    });
  });
}
async function signActivityRule() {
  return new Promise(async _0x106ff9 => {
    const _0x54960e = {
      vendorId: $.venderId
    };
    let _0x48ac1e = await getSign("signActivityRule", _0x54960e);
    $.post(apptaskUrl("signActivityRule", _0x54960e, _0x48ac1e), (_0x385b93, _0x3c5ec0, _0x2ccd35) => {
      try {
        if (_0x385b93) {
          console.log("" + JSON.stringify(_0x385b93));
          console.log("getShopHomeActivityInfo API请求失败，请检查网路重试");
        } else {
          if (safeGet(_0x2ccd35)) {
            res = JSON.parse(_0x2ccd35);
            if (res.code == 0 && res.result) {
              console.log("活动: " + res.result.awardName);
              console.log("时间: " + res.result.activityTime);
              console.log("奖励: " + res.result.awardDescription);
            }
          }
        }
      } catch (_0x5c96ac) {
        $.logErr(_0x5c96ac, _0x3c5ec0);
      } finally {
        _0x106ff9();
      }
    });
  });
}
async function getSignInfo() {
  return new Promise(async _0x50d91c => {
    const _0x592986 = {
      vendorId: $.venderId
    };
    let _0x54e67e = await getSign("getSignInfo", _0x592986);
    $.post(apptaskUrl("getSignInfo", _0x592986, _0x54e67e), (_0x202e14, _0x40cd33, _0x49ba03) => {
      try {
        if (_0x202e14) {
          console.log("" + JSON.stringify(_0x202e14));
          console.log("getSignInfo API请求失败，请检查网路重试");
        } else {
          if (!safeGet(_0x49ba03)) {
            console.log(_0x49ba03);
          }
        }
      } catch (_0x56f209) {
        $.logErr(_0x56f209, _0x40cd33);
      } finally {
        _0x50d91c();
      }
    });
  });
}
async function sign() {
  return new Promise(async _0x3b0a97 => {
    const _0x49e905 = {
      sourceRpc: "shop_app_sign_home",
      vendorId: $.venderId
    };
    let _0x41f4d6 = await getSign("sign", _0x49e905);
    $.post(apptaskUrl("sign ", _0x49e905, _0x41f4d6), (_0x41f206, _0x4eba03, _0x79fcc2) => {
      try {
        if (_0x41f206) {
          console.log("" + JSON.stringify(_0x41f206));
          console.log("sign API请求失败，请检查网路重试");
        } else {
          if (safeGet(_0x79fcc2)) {
            res = JSON.parse(_0x79fcc2);
            if (res.code == 0 && res.result) {
              console.log("" + res.result.signTitleAttach);
              try {
                if (res.result.signTitleAttach.indexOf("恭喜中奖") > -1) {
                  console.log("抽奖: " + res.result.signReward.name);
                } else {
                  console.log("抽奖: 空气");
                }
              } catch (_0x35ddf5) {
                console.log("抽奖: 空气");
              }
            }
          } else {
            console.log(_0x79fcc2);
          }
        }
      } catch (_0x2c30a6) {
        $.logErr(_0x2c30a6, _0x4eba03);
      } finally {
        _0x3b0a97();
      }
    });
  });
}
async function getSign(_0xc84ccd, _0xcf169d) {
  return new Promise(_0x86c5d1 => {
    const _0x24fb0a = {
      "User-Agent": "jdapp;android;11.3.4;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 10; PCCM0o Build/QKQ1.191021.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046011 Mobile Safari/537.36"
    };
    const _0xdb637 = {
      url: "http://hz.feverrun.top:99/share/card/getSign",
      body: "fn=" + _0xc84ccd + "&body=" + JSON.stringify(_0xcf169d),
      headers: _0x24fb0a,
      timeout: 60000
    };
    $.post(_0xdb637, (_0x45876b, _0x2fb2e9, _0x3e8251) => {
      try {
        if (_0x45876b) {
          console.log("请求失败，请检查网路");
        } else {
          try {
            _0x3e8251 = _0x3e8251;
          } catch (_0x1cc874) {
            _0x3e8251 = "";
          }
        }
      } catch (_0x2df078) {} finally {
        _0x86c5d1(_0x3e8251 || "");
      }
    });
  });
}
function apptaskUrl(_0x2a1cd6 = "", _0x3aafff = "", _0x2bf845) {
  const _0x5c9a40 = {
    url: "" + JD_API_HOST,
    body: "body=" + encodeURIComponent(JSON.stringify(_0x3aafff)) + "&" + _0x2bf845,
    headers: {},
    timeout: 60000
  };
  _0x5c9a40.headers.Cookie = cookie;
  _0x5c9a40.headers["Content-Type"] = "application/x-www-form-urlencoded; charset=UTF-8";
  _0x5c9a40.headers["User-Agent"] = "okhttp/3.12.1;jdmall;android;version/11.3.4;build/" + parseInt(Math.random() * 9999 + 90000, 10) + ";";
  _0x5c9a40.headers["Accept-Language"] = "zh-Hans-CN;q=1";
  _0x5c9a40.headers["Accept-Encoding"] = "gzip,deflate";
  return _0x5c9a40;
}
function taskUrl(_0x12928b, _0x515796 = {}) {
  const _0x1b3b08 = {
    url: JD_API_HOST + "?functionId=" + _0x12928b + "&body=" + encodeURIComponent(JSON.stringify(_0x515796)),
    headers: {}
  };
  _0x1b3b08.headers.Cookie = cookie;
  _0x1b3b08.headers.Host = "api.m.jd.com";
  _0x1b3b08.headers.Connection = "keep-alive";
  _0x1b3b08.headers["Content-Type"] = "application/json";
  _0x1b3b08.headers.Referer = "http://wq.jd.com/wxapp/pages/hd-interaction/index/index";
  _0x1b3b08.headers["User-Agent"] = $.isNode() ? process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : require("./USER_AGENTS").USER_AGENT : $.getdata("JDUA") ? $.getdata("JDUA") : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1";
  _0x1b3b08.headers["Accept-Language"] = "zh-cn";
  _0x1b3b08.headers["Accept-Encoding"] = "gzip, deflate, br";
  return _0x1b3b08;
}
function safeGet(_0x281c26) {
  try {
    if (typeof JSON.parse(_0x281c26) == "object") {
      return true;
    }
  } catch (_0x21c0ed) {
    console.log(_0x21c0ed);
    console.log("京东服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function jsonParse(_0x1ede5b) {
  if (typeof _0x1ede5b == "string") {
    try {
      return JSON.parse(_0x1ede5b);
    } catch (_0x44c1f3) {
      console.log(_0x44c1f3);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null);
            e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = "POST";
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            this.initGotEnv(t);
            const {
              url: s,
              ...i
            } = t;
            this.got.post(s, i).then(t => {
              const {
                statusCode: s,
                statusCode: i,
                headers: r,
                body: o
              } = t;
              e(null, {
                status: s,
                statusCode: i,
                headers: r,
                body: o
              }, o);
            }, t => {
              const {
                message: s,
                response: i
              } = t;
              e(s, i, i && i.body);
            });
          }
        }
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : void 0;
        }
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}