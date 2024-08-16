//Fri Aug 16 2024 17:08:40 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("入会开卡领取礼包通用");
console.log("配置代理池: OPENCARD_GLOBAL_AGENT_HTTP_PROXY_URL");
console.log("配置api代理: OPENCARD_API_PROXY_URL");
let proenv_0x414c1e = false;
if (!process.env.OPENCARD_API_PROXY_URL) {
  if (process.env.OPENCARD_GLOBAL_AGENT_HTTP_PROXY_URL) {
    proenv_0x414c1e = true;
    require("global-agent/bootstrap");
    global.GLOBAL_AGENT.HTTP_PROXY = process.env.OPENCARD_GLOBAL_AGENT_HTTP_PROXY_URL || "";
  }
}
let proenv_0x4c1fc0 = false;
if (process.env.OPENCARD_API_PROXY_URL) {
  proenv_0x4c1fc0 = true;
  your_proxy_url = process.env.OPENCARD_API_PROXY_URL;
}
console.log("配置代理池: " + (proenv_0x414c1e == true ? "已配置" : "未配置") + " ");
console.log("配置api代理: " + (proenv_0x4c1fc0 == true ? "已配置" : "未配置"));
const proenv_0x4cf76c = $.isNode() ? require("./jdCookie.js") : "";
const proenv_0x58ddbf = require("crypto-js");
const proenv_0x159865 = require("axios");
const proenv_0x5af160 = require("tunnel");
const proenv_0xf89cad = process.env.VENDER_ID || "";
let proenv_0x1594df = [],
  proenv_0x16920b = "";
if ($.isNode()) {
  Object.keys(proenv_0x4cf76c).forEach(_0x442580 => {
    proenv_0x1594df.push(proenv_0x4cf76c[_0x442580]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  proenv_0x1594df = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...proenv_0x3a7753($.getdata("CookiesJD") || "[]").map(_0x20ea3f => _0x20ea3f.cookie)].filter(_0x1e9874 => !!_0x1e9874);
}
allMessage = "";
message = "";
!(async () => {
  if (!proenv_0x1594df[0]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    process.exit(1);
    return;
  }
  if (!proenv_0xf89cad) {
    console.log("【问题反馈】https://t.me/proenvc ");
    console.log("export VENDER_ID=\"xxx\" 未设置 退出！！！");
    process.exit(1);
    return;
  }
  console.log("");
  console.log("问题反馈: https://t.me/proenvc");
  for (let _0x12f82f = 0; _0x12f82f < proenv_0x1594df.length; _0x12f82f++) {
    proenv_0x16920b = proenv_0x1594df[_0x12f82f];
    if (proenv_0x16920b) {
      $.UserName = decodeURIComponent(proenv_0x16920b.match(/pt_pin=([^; ]+)(?=;?)/) && proenv_0x16920b.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x12f82f + 1;
      message = "";
      $.nickName = "";
      $.UserName = $.nickName || $.UserName;
      console.log("******开始【京东账号" + $.index + "】" + $.UserName + "*********");
      await proenv_0xedbb5c();
      await proenv_0x3e80f4();
      await $.wait(parseInt(Math.random() * 2500 + 2500, 10));
    }
  }
  if (allMessage) {
    $.msg($.name, "", "" + allMessage);
  }
  process.exit(1);
})().catch(_0x19fd23 => $.logErr(_0x19fd23)).finally(() => $.done());
async function proenv_0x3e80f4() {
  try {
    $.ERR_BAD_REQUEST = 0;
    if (proenv_0x4c1fc0 == true) {
      await proenv_0xf6e76b();
      if ($.getIpStatus == false) {
        await proenv_0xf6e76b();
        console.log("代理获取失败，跳过此次执行！");
        return;
      }
    }
    let _0x3fd217 = proenv_0xf89cad.split("&");
    if (_0x3fd217.length >= 1) {
      for (let _0x434b45 = 0; _0x434b45 < _0x3fd217.length; _0x434b45++) {
        if (_0x3fd217[_0x434b45].length <= 4) {
          console.log("当前设置的VENDER_ID: " + _0x3fd217[_0x434b45] + " 可能有问题");
          continue;
        }
        $.joinVenderId = _0x3fd217[_0x434b45];
        $.errorJoinShop = "";
        await $.wait(parseInt(Math.random() * 1000 + 500, 10));
        await proenv_0x3af2ea("getShopOpenCardInfo");
        await $.wait(parseInt(Math.random() * 500 + 500, 10));
        await proenv_0x3af2ea("bindWithVender");
        await $.wait(parseInt(Math.random() * 500 + 500, 10));
        if ($.errorJoinShop.indexOf("开卡失败，请稍后重试~") > -1 || $.errorJoinShop.indexOf("活动太火爆，请稍后再试") > -1 || $.errorJoinShop.indexOf("加入店铺会员失败") > -1) {
          console.log("第1次重试");
          await proenv_0x3af2ea("getShopOpenCardInfo");
          await $.wait(parseInt(Math.random() * 500 + 500, 10));
          await proenv_0x3af2ea("bindWithVender");
          await $.wait(parseInt(Math.random() * 500 + 500, 10));
          if ($.errorJoinShop.indexOf("活动太火爆，请稍后再试") > -1) {
            console.log("账号分太低或者是ip有问题, 跳过此账号");
            $.continueFlag = true;
            break;
          }
        }
        if (proenv_0x4c1fc0 == true || proenv_0x414c1e == true) {
          await $.wait(parseInt(Math.random() * 250 + 250, 10));
        } else {
          await $.wait(parseInt(Math.random() * 500 + 500, 10));
        }
        console.log();
      }
    } else {
      console.log("export VENDER_ID=\"未设置\" 退出执行");
      process.exit(1);
    }
  } catch (_0xe5b95a) {
    console.log(_0xe5b95a);
  }
}
async function proenv_0x3af2ea(_0x5dc371) {
  if ($.outFlag || $.continueFlag) {
    return;
  }
  let _0x3c03a0 = "";
  let _0x217f60 = "POST";
  switch (_0x5dc371) {
    case "getShopOpenCardInfo":
      _0x217f60 = "post";
      if (!$.joinVenderId) {
        console.log("没有开卡id");
        break;
      }
      const _0x5f45f9 = {
        venderId: $.joinVenderId,
        channel: 102,
        payUpShop: true,
        queryVersion: "10.5.2",
        appid: "27004",
        needSecurity: true,
        bizId: "shopmember_m_jd_com"
      };
      _0x3c03a0 = _0x5f45f9;
      h5st = await proenv_0x411c6d("27004", _0x3c03a0);
      h5st = encodeURIComponent(h5st);
      await $.wait(parseInt(Math.random() * 250 + 150, 10));
      url = "https://api.m.jd.com/client.action?functionId=getShopOpenCardInfo&body=" + encodeURIComponent(JSON.stringify(_0x3c03a0)) + "&t=" + Date.now() + "&appid=shopmember_m_jd_com&clientVersion=9.2.0&client=H5&area=1_72_2799_0&uuid=88888&h5st=" + h5st + "&x-api-eid-token=";
      _0x3c03a0 = "";
      break;
    case "bindWithVender":
      if (!$.joinVenderId) {
        console.log("没有开卡id");
        break;
      }
      _0x217f60 = "post";
      if ($.shopactivityId == "") {
        const _0x140998 = {
          venderId: $.joinVenderId,
          shopId: $.joinVenderId,
          bindByVerifyCodeFlag: 1,
          registerExtend: {},
          writeChildFlag: 0,
          channel: 102,
          appid: "27004",
          needSecurity: true,
          bizId: "shopmember_m_jd_com"
        };
        _0x3c03a0 = _0x140998;
      } else {
        const _0x1bbf25 = {
          venderId: $.joinVenderId,
          shopId: $.joinVenderId,
          bindByVerifyCodeFlag: 1,
          registerExtend: {},
          writeChildFlag: 0,
          activityId: $.shopactivityId,
          channel: 102,
          appid: "27004",
          needSecurity: true,
          bizId: "shopmember_m_jd_com"
        };
        _0x3c03a0 = _0x1bbf25;
      }
      h5st = await proenv_0x411c6d("27004", _0x3c03a0);
      h5st = encodeURIComponent(h5st);
      await $.wait(parseInt(Math.random() * 250 + 150, 10));
      url = "https://api.m.jd.com/client.action?functionId=bindWithVender&body=" + encodeURIComponent(JSON.stringify(_0x3c03a0)) + "&t=" + Date.now() + "&appid=shopmember_m_jd_com&clientVersion=9.2.0&client=H5&area=1_72_2799_0&uuid=88888&h5st=" + h5st + "&x-api-eid-token=";
      _0x3c03a0 = "";
      break;
    default:
      console.log("错误" + _0x5dc371);
  }
  let _0x9c68b6 = proenv_0x4ae82a(_0x5dc371, url, _0x3c03a0, _0x217f60);
  if (proenv_0x4c1fc0 == true || proenv_0x414c1e == true) {
    await $.wait(parseInt(Math.random() * 500 + 500, 10));
  } else {
    await $.wait(parseInt(Math.random() * 500 + 500, 10));
  }
  options = {};
  if (proenv_0x4c1fc0 == true) {
    const _0x180ce8 = {
      host: $.ip,
      port: $.ipo
    };
    const _0x255554 = {
      proxy: _0x180ce8
    };
    httpAgent = proenv_0x5af160.httpOverHttp(_0x255554);
    const _0x5af194 = {
      host: $.ip,
      port: $.ipo
    };
    const _0x3e5c42 = {
      proxy: _0x5af194
    };
    httpsAgent = proenv_0x5af160.httpsOverHttp(_0x3e5c42);
    const _0xbd1de1 = {
      headers: _0x9c68b6.headers,
      timeout: _0x9c68b6.timeout,
      proxy: false,
      httpAgent: httpAgent,
      httpsAgent: httpsAgent
    };
    options = _0xbd1de1;
  } else {
    const _0x43b4d5 = {
      headers: _0x9c68b6.headers,
      timeout: _0x9c68b6.timeout
    };
    options = _0x43b4d5;
  }
  if (_0x217f60.toLowerCase().includes("post")) {
    return proenv_0x159865.post(url, _0x3c03a0, options).then(function (_0x5d07a9) {
      _0x5d07a9 = proenv_0xd58efc(_0x5d07a9);
      if (_0x5d07a9) {
        proenv_0x343131(_0x5dc371, _0x5d07a9);
      }
    }).catch(async function (_0x37b0a1) {
      if (_0x37b0a1.response) {
        console.log(_0x37b0a1.response.status);
        if (!(proenv_0x4c1fc0 == true || proenv_0x414c1e == true)) {
          if (_0x37b0a1.response.status == "493") {
            console.log("ip可能已经被限制， 过十分钟再来！！！");
            $.outFlag = true;
            process.exit(1);
          }
        }
        _0x37b0a1.response.status == "403";
      }
      console.log("错误码1: " + _0x5dc371 + " - " + _0x37b0a1.code);
      if (_0x37b0a1.code == "ECONNABORTED" || _0x37b0a1.code == "ERR_BAD_REQUEST" && !["isvObfuscator", "getCk"].includes(_0x5dc371) || _0x37b0a1.code == "ERR_BAD_RESPONSE") {
        if ($.ERR_BAD_REQUEST >= 5) {
          $.ERR_BAD_REQUEST = 0;
        } else {
          $.ERR_BAD_REQUEST += 1;
          await $.wait(parseInt(Math.random() * 500 + 500, 10));
          await proenv_0x3af2ea(_0x5dc371);
        }
      }
      if (_0x37b0a1.code == "ECONNRESET") {
        await $.wait(parseInt(Math.random() * 500 + 350, 10));
        if (proenv_0x4c1fc0 == true) {
          $.getIpStatus = true;
          await proenv_0xf6e76b();
          await proenv_0x3af2ea(_0x5dc371);
        }
      }
    });
  } else {
    if (_0x217f60.toLowerCase().includes("get")) {
      return proenv_0x159865.get(url, options).then(function (_0x59d199) {
        _0x59d199 = proenv_0xd58efc(_0x59d199);
        if (_0x59d199) {
          proenv_0x343131(_0x5dc371, _0x59d199);
        }
      }).catch(async function (_0xcfe566) {
        if (_0xcfe566.response) {
          console.log(_0xcfe566.response.status);
          if (!(proenv_0x4c1fc0 == true || proenv_0x414c1e == true)) {
            if (_0xcfe566.response.status == "493") {
              console.log("ip可能已经被限制， 过十分钟再来！！！");
              $.outFlag = true;
              process.exit(1);
            }
          }
          _0xcfe566.response.status == "403";
        }
        console.log("错误码1: " + _0x5dc371 + " - " + _0xcfe566.code);
        if (_0xcfe566.code == "ECONNABORTED" || _0xcfe566.code == "ERR_BAD_REQUEST" && !["isvObfuscator", "getCk"].includes(_0x5dc371) || _0xcfe566.code == "ERR_BAD_RESPONSE") {
          if ($.ERR_BAD_REQUEST >= 5) {
            $.ERR_BAD_REQUEST = 0;
          } else {
            $.ERR_BAD_REQUEST += 1;
            await $.wait(parseInt(Math.random() * 500 + 500, 10));
            await proenv_0x3af2ea(_0x5dc371);
          }
        }
        if (_0xcfe566.code == "ECONNRESET") {
          await $.wait(parseInt(Math.random() * 500 + 350, 10));
          if (proenv_0x4c1fc0 == true) {
            $.getIpStatus = true;
            await proenv_0xf6e76b();
            await proenv_0x3af2ea(_0x5dc371);
          }
        }
      });
    }
  }
}
function proenv_0x343131(_0x47b17b = "", _0x44a86c = "") {
  return new Promise(async _0x203d0e => {
    let _0x12018b = "";
    try {
      if (!["accessLog", "attendLog", "getCk", "drawContent", "accessLogWithAD", "accessLog"].includes(_0x47b17b)) {
        if (_0x44a86c) {
          _0x12018b = JSON.parse(_0x44a86c);
        }
      }
    } catch (_0x4d01cf) {
      console.log(_0x47b17b + " 执行任务异常");
      await $.wait(parseInt(Math.random() * 500 + 500, 10));
    }
    try {
      switch (_0x47b17b) {
        case "getShopOpenCardInfo":
          if (_0x44a86c) {
            _0x44a86c = _0x44a86c && _0x44a86c.match(/jsonp_.*?\((.*?)\);/) && _0x44a86c.match(/jsonp_.*?\((.*?)\);/)[1] || _0x44a86c;
            _0x12018b = JSON.parse(_0x44a86c);
            if (_0x12018b && _0x12018b.success == true) {
              openCardStatus = _0x12018b.result[0].userInfo.openCardStatus || 0;
              venderCardName = _0x12018b.result[0].shopMemberCardInfo.venderCardName || "";
              if (openCardStatus === 1) {
                console.log("已入会: " + $.joinVenderId + " - " + venderCardName);
              } else {
                if (openCardStatus == 0) {
                  console.log("去开卡: " + $.joinVenderId + " - " + venderCardName);
                }
              }
              $.shopactivityId = _0x12018b.result[0].interestsRuleList && _0x12018b.result[0].interestsRuleList[0] && _0x12018b.result[0].interestsRuleList[0].interestsInfo && _0x12018b.result[0].interestsRuleList[0].interestsInfo.activityId || "";
            } else {
              _0x12018b.busiCode == "9001";
              _0x12018b.busiCode == "1";
            }
          }
          break;
        case "bindWithVender":
          if (_0x44a86c) {
            _0x44a86c = _0x44a86c && _0x44a86c.match(/jsonp_.*?\((.*?)\);/) && _0x44a86c.match(/jsonp_.*?\((.*?)\);/)[1] || _0x44a86c;
            _0x44a86c.indexOf("加入店铺会员成功") > -1 || _0x44a86c.indexOf("已经是本店会员") > -1;
            _0x44a86c.indexOf("活动太火爆，请稍后再试") > -1;
            _0x12018b = JSON.parse(_0x44a86c);
            if (_0x12018b && _0x12018b.success === true) {
              if (_0x12018b.busiCode == 0) {
                console.log("" + _0x12018b.message);
              } else {
                console.log(_0x12018b.busiCode + ": " + _0x12018b.message);
              }
              $.errorJoinShop = _0x12018b.message || "";
              if (_0x12018b.result && _0x12018b.result.giftInfo) {
                for (let _0x2fbda8 of _0x12018b.result.giftInfo.giftList) {
                  console.log("入会获得: " + _0x2fbda8.discountString + _0x2fbda8.prizeName + _0x2fbda8.secondLineDesc);
                }
              }
            } else {
              if (_0x12018b && typeof _0x12018b == "object" && _0x12018b.message) {
                $.errorJoinShop = _0x12018b.message || "";
                console.log(_0x12018b.busiCode + ": " + _0x12018b.message);
                _0x12018b.busiCode == "2001";
                _0x12018b.busiCode == "9002";
                _0x12018b.busiCode == "9003";
                _0x12018b.busiCode == "0";
              } else {
                console.log(_0x44a86c);
              }
            }
          }
          break;
        default:
          console.log(_0x47b17b + "-> " + _0x44a86c);
          break;
      }
    } catch (_0x129407) {
      console.log(_0x47b17b + " 执行任务异常！！！");
      await $.wait(parseInt(Math.random() * 500 + 500, 10));
    }
    _0x203d0e(_0x44a86c || "");
  });
}
function proenv_0x4ae82a(_0x2c0c2d, _0x3dade0, _0x387b75, _0x42caea = "post") {
  const _0x1a76be = {
    Accept: "application/json",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-cn",
    Connection: "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    Cookie: proenv_0x16920b,
    "User-Agent": $.UA,
    "X-Requested-With": "XMLHttpRequest"
  };
  let _0x468c26 = _0x1a76be;
  if (_0x3dade0.indexOf("https://lzdz1-isv.isvjcloud.com") > -1) {
    _0x468c26.Referer = "https://lzdz1-isv.isvjcloud.com/m/unite/dzlh0001/?activityId=" + $.activityId + "&venderId=" + $.userId + "&adSource=&shareUuid=" + $.shareUuid;
    _0x468c26.Cookie = "" + (lz_jdpin_token_cookie && lz_jdpin_token_cookie || "") + ($.Pin && "AUTH_C_USER=" + $.Pin + ";" || "") + activityCookie;
  }
  if (["getShopOpenCardInfo", "bindWithVender"].includes(_0x2c0c2d)) {
    const _0x4888f4 = {
      Accept: "*/*",
      "User-Agent": $.UA,
      "content-type": "application/x-www-form-urlencoded",
      "x-rp-client": "h5_1.0.0",
      "x-referer-page": "https://pages.jd.com/member/shopcard",
      origin: "https://pages.jd.com",
      "X-Requested-With": "com.jingdong.app.mall",
      "Sec-Fetch-Site": "same-site",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      Referer: "https://pages.jd.com/",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      Cookie: proenv_0x16920b
    };
    _0x468c26 = _0x4888f4;
  }
  if (_0x42caea.toLowerCase().includes("get")) {
    const _0x548b0e = {
      url: _0x3dade0,
      method: _0x42caea,
      headers: _0x468c26,
      timeout: 30000
    };
    return _0x548b0e;
  } else {
    if (_0x42caea.toLowerCase().includes("post")) {
      const _0x498a4e = {
        url: _0x3dade0,
        method: _0x42caea,
        headers: _0x468c26,
        body: _0x387b75,
        timeout: 30000
      };
      return _0x498a4e;
    }
  }
}
async function proenv_0xedbb5c() {
  try {
    let _0x26d80a = ["jdapp;android;12.2.0;;;M/5.0;appBuild/2397;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0x56fb90(proenv_0x58ddbf.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0x56fb90(proenv_0x58ddbf.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jd.jdlite%22%7D;Mozilla/5.0(Linux;Android10;BKL-AL20Build/HUAWEIBKL-AL20;wv)AppleWebKit/537.36(KHTML,likeGecko)Version/4.0Chrome/89.0.4389.72MQQBrowser/6.2TBS/046249MobileSafari/537.36", "jdapp;android;12.2.0;;;M/5.0;appBuild/2397;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0x56fb90(proenv_0x58ddbf.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0x56fb90(proenv_0x58ddbf.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jd.jdlite%22%7D;Mozilla/5.0(Linux;U;Android10;zh-CN;TAS-AL00Build/HUAWEITAS-AL00)AppleWebKit/537.36(KHTML,likeGecko)Version/4.0Chrome/78.0.3904.108UCBrowser/13.1.8.1098MobileSafari/537.36", "jdapp;android;12.2.0;;;M/5.0;appBuild/2397;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0x56fb90(proenv_0x58ddbf.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0x56fb90(proenv_0x58ddbf.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jd.jdlite%22%7D;Mozilla/5.0(Linux;Android10;MI9Build/QKQ1.190825.002;wv)AppleWebKit/537.36(KHTML,likeGecko)Version/4.0Chrome/77.0.3865.120MQQBrowser/6.2TBS/045415MobileSafari/537.36", "jdapp;android;12.0.8;;;M/5.0;appBuild/22709;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0x56fb90(proenv_0x58ddbf.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0x56fb90(proenv_0x58ddbf.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 9; ONEPLUS A3000 Build/PKQ1.181203.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046247 Mobile Safari/537.36", "jdapp;android;12.0.8;;;M/5.0;appBuild/22709;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0x56fb90(proenv_0x58ddbf.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0x56fb90(proenv_0x58ddbf.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 12; Redmi Note 9 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36", "jdapp;android;12.0.8;;;M/5.0;appBuild/22709;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0x56fb90(proenv_0x58ddbf.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0x56fb90(proenv_0x58ddbf.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 11; RMX2001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36", "jdapp;android;12.0.8;;;M/5.0;appBuild/22709;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0x56fb90(proenv_0x58ddbf.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0x56fb90(proenv_0x58ddbf.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 13; M2012K11C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Mobile Safari/537.36", "jdapp;android;12.0.8;;;M/5.0;appBuild/22709;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0x56fb90(proenv_0x58ddbf.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0x56fb90(proenv_0x58ddbf.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 13) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.5414.117 Mobile Safari/537.36", "jdapp;android;12.0.8;;;M/5.0;appBuild/22709;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0x56fb90(proenv_0x58ddbf.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0x56fb90(proenv_0x58ddbf.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 10; Redmi 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.28 Mobile Safari/537.36", "jdapp;android;12.0.8;;;M/5.0;appBuild/22709;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0x56fb90(proenv_0x58ddbf.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0x56fb90(proenv_0x58ddbf.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 10; Redmi Note 7) AppleWebKit/537.36 (KHTML, like Gecko) Brave Chrome/89.0.4389.86 Mobile Safari/537.36", "jdapp;android;12.0.8;;;M/5.0;appBuild/22709;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0x56fb90(proenv_0x58ddbf.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0x56fb90(proenv_0x58ddbf.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 9; MI 9) AppleWebKit/537.36 (KHTML, like Gecko) Brave Chrome/88.0.4324.96 Mobile Safari/537.36", "jdapp;android;12.0.8;;;M/5.0;appBuild/22709;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0x56fb90(proenv_0x58ddbf.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0x56fb90(proenv_0x58ddbf.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 8.0.0; Pixel C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.111 Safari/537.36", "jdapp;android;12.0.8;;;M/5.0;appBuild/22709;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0x56fb90(proenv_0x58ddbf.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0x56fb90(proenv_0x58ddbf.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 8.1.0; OPPO R11; Build/OPM1.171019.011) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.4280.141 Mobile Safari/537.36 Firefox-KiToBrowser/115.0"];
    let _0x3a44a6 = parseInt(Math.random() * _0x26d80a.length);
    let _0x44a5de = _0x26d80a[_0x3a44a6];
    $.UA = _0x44a5de;
    return _0x44a5de;
  } catch (_0x2878dc) {
    console.log(_0x2878dc);
  }
}
function proenv_0x56fb90(_0x3a5cbb, _0x488344) {
  _0x39e43a = _0x39e43a || "KLMNOPQRSTABCDEFGHIJUVWXYZabcdopqrstuvwxefghijklmnyz0123456789+/";
  var _0x5374ba = "";
  var _0x4d7d5a, _0x52194b, _0x16bb0b, _0x405b5c, _0x108b17, _0x152da7;
  var _0x1cab7f = 0;
  _0x3a5cbb = _0x3a5cbb.replace(/rn/g, "n");
  var _0x39e43a = "";
  for (var _0x5374ba = 0; _0x5374ba < _0x3a5cbb.length; _0x5374ba++) {
    {
      var _0xf173e3 = _0x3a5cbb.charCodeAt(_0x5374ba);
      if (_0xf173e3 < 128) {
        _0x39e43a += String.fromCharCode(_0xf173e3);
      } else {
        _0xf173e3 > 127 && _0xf173e3 < 2048 ? (_0x39e43a += String.fromCharCode(_0xf173e3 >> 6 | 192), _0x39e43a += String.fromCharCode(_0xf173e3 & 63 | 128)) : (_0x39e43a += String.fromCharCode(_0xf173e3 >> 12 | 224), _0x39e43a += String.fromCharCode(_0xf173e3 >> 6 & 63 | 128), _0x39e43a += String.fromCharCode(_0xf173e3 & 63 | 128));
      }
    }
  }
  while (_0x1cab7f < _0x3a5cbb.length) {
    _0xf173e3 = _0x3a5cbb.charCodeAt(_0x1cab7f++);
    _0x4d7d5a = _0x3a5cbb.charCodeAt(_0x1cab7f++);
    _0x52194b = _0x3a5cbb.charCodeAt(_0x1cab7f++);
    _0x16bb0b = _0xf173e3 >> 2;
    _0x405b5c = (_0xf173e3 & 3) << 4 | _0x4d7d5a >> 4;
    _0x108b17 = (_0x4d7d5a & 15) << 2 | _0x52194b >> 6;
    _0x152da7 = _0x52194b & 63;
    if (isNaN(_0x4d7d5a)) {
      _0x108b17 = _0x152da7 = 64;
    } else {
      isNaN(_0x52194b) && (_0x152da7 = 64);
    }
    _0x5374ba = _0x5374ba + _0x39e43a.charAt(_0x16bb0b) + _0x39e43a.charAt(_0x405b5c) + _0x39e43a.charAt(_0x108b17) + _0x39e43a.charAt(_0x152da7);
  }
  while (_0x5374ba.length % 4 > 1) {
    _0x5374ba += "=";
  }
  return _0x5374ba;
}
function proenv_0x6a3207(_0x6ed62) {
  _0x6ed62 = _0x6ed62 || 32;
  let _0x507c55 = "abcdef0123456789",
    _0x563fe0 = _0x507c55.length,
    _0x26e71f = "";
  for (i = 0; i < _0x6ed62; i++) {
    _0x26e71f += _0x507c55.charAt(Math.floor(Math.random() * _0x563fe0));
  }
  return _0x26e71f;
}
function proenv_0x3a7753(_0x5b4426) {
  if (typeof _0x5b4426 == "string") {
    try {
      return JSON.parse(_0x5b4426);
    } catch (_0x9f3b76) {
      console.log(_0x9f3b76);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
async function proenv_0x411c6d(_0xc1c0e2, _0x20ec30) {
  return new Promise(_0x447585 => {
    const _0xfb9049 = {
      "User-Agent": "jdapp;android;11.4.1;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 10; PCCM0o410 Build/QKQ1.191021.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046011 Mobile Safari/537.36"
    };
    const _0x31e730 = {
      url: "http://hz.feverrun.top:99/share/card/getH5st410",
      body: "bid=" + _0xc1c0e2 + "&body=" + JSON.stringify(_0x20ec30),
      headers: _0xfb9049,
      timeout: 60000
    };
    $.post(_0x31e730, (_0x3bfa98, _0x338baa, _0x1faf2e) => {
      try {
        if (_0x3bfa98) {
          console.log("请求失败，请检查网路");
          console.log(_0x3bfa98);
        } else {
          try {
            _0x1faf2e = _0x1faf2e;
          } catch (_0x6bea26) {
            _0x1faf2e = "";
          }
        }
      } catch (_0xc730f0) {} finally {
        _0x447585(_0x1faf2e || "");
      }
    });
  });
}
function proenv_0xd58efc(_0x1cece4) {
  if (_0x1cece4.status == 200 && _0x1cece4.data) {
    _0x1cece4 = _0x1cece4.data;
    if (typeof _0x1cece4 == "object") {
      return JSON.stringify(_0x1cece4);
    } else {
      return _0x1cece4;
    }
  } else {
    return "";
  }
}
function proenv_0x2291db(_0x9be8ab, _0x2bd33f) {
  return Math.floor(Math.random() * (_0x2bd33f - _0x9be8ab)) + _0x9be8ab;
}
async function proenv_0xf6e76b() {
  return new Promise(async _0x10011b => {
    try {
      await $.wait(parseInt(Math.random() * 250 + 150, 10));
      let _0x18ecd0 = await proenv_0x5313f5();
      if (_0x18ecd0 != "") {
        $.getIpStatus = true;
        console.log("当前: " + _0x18ecd0);
        ips = _0x18ecd0.split(":");
        $.ip = ips[0];
        $.ipo = ips[1];
        await $.wait(parseInt(Math.random() * 250 + 150, 10));
      } else {
        $.getIpStatus = false;
        console.log("代理获取失败");
      }
    } catch (_0x155a41) {
      $.getIpStatus = false;
      console.log("代理获取失败");
    }
    if ($.getIpStatus == false) {
      try {
        await $.wait(parseInt(Math.random() * 250 + 150, 10));
        let _0x1cd46a = await proenv_0x5313f5();
        if (_0x1cd46a != "") {
          $.getIpStatus = true;
          console.log("当前: " + _0x1cd46a);
          ips = _0x1cd46a.split(":");
          $.ip = ips[0];
          $.ipo = ips[1];
          await $.wait(parseInt(Math.random() * 250 + 150, 10));
        } else {
          $.getIpStatus = false;
          console.log("代理获取失败");
        }
      } catch (_0x23228d) {
        $.getIpStatus = false;
        console.log("代理获取失败");
      }
    }
    if ($.getIpStatus == false) {
      console.log("代理获取失败，跳过此次执行！");
      _0x10011b(false);
    } else {
      _0x10011b(true);
    }
  });
}
function proenv_0x5313f5() {
  try {
    return new Promise(_0x1e34b0 => {
      const _0x59caec = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/538.38"
      };
      const _0x46f9a6 = {
        url: your_proxy_url,
        headers: _0x59caec,
        timeout: 30000
      };
      $.get(_0x46f9a6, (_0x76ac63, _0x205367, _0xf1e5ec) => {
        try {
          if (_0x76ac63) {
            console.log("获取Ip失败");
          } else {
            try {
              if (_0xf1e5ec.indexOf("\r\n") > -1) {
                _0xf1e5ec = _0xf1e5ec.split("\r\n");
                if (_0xf1e5ec.length >= 1) {
                  _0xf1e5ec = _0xf1e5ec[0];
                }
              } else {
                if (_0xf1e5ec.indexOf("\n") > -1) {
                  _0xf1e5ec = _0xf1e5ec.split("\n");
                  if (_0xf1e5ec.length >= 1) {
                    _0xf1e5ec = _0xf1e5ec[0];
                  }
                } else {
                  if (_0xf1e5ec.indexOf("\r") > -1) {
                    _0xf1e5ec = _0xf1e5ec.split("\r");
                    if (_0xf1e5ec.length >= 1) {
                      _0xf1e5ec = _0xf1e5ec[0];
                    }
                  } else {
                    if (_0xf1e5ec.indexOf("\t") > -1) {
                      _0xf1e5ec = _0xf1e5ec.split("\t");
                      if (_0xf1e5ec.length >= 1) {
                        _0xf1e5ec = _0xf1e5ec[0];
                      }
                    }
                  }
                }
              }
            } catch (_0x5e091e) {
              _0xf1e5ec = "";
            }
          }
        } catch (_0x2ad45e) {} finally {
          _0x1e34b0(_0xf1e5ec || "");
        }
      });
    });
  } catch (_0x52adca) {
    console.log(_0x52adca.message);
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