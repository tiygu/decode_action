//Fri Aug 16 2024 16:53:46 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("超店通用");
console.log("配置代理池: OPENCARD_GLOBAL_AGENT_HTTP_PROXY_URL");
console.log("配置api代理: OPENCARD_API_PROXY_URL");
let proenv_0x54a036 = false;
if (!process.env.OPENCARD_API_PROXY_URL) {
  if (process.env.OPENCARD_GLOBAL_AGENT_HTTP_PROXY_URL) {
    proenv_0x54a036 = true;
    require("global-agent/bootstrap");
    global.GLOBAL_AGENT.HTTP_PROXY = process.env.OPENCARD_GLOBAL_AGENT_HTTP_PROXY_URL || "";
  }
}
let proenv_0x3425ef = false;
if (process.env.OPENCARD_API_PROXY_URL) {
  proenv_0x3425ef = true;
  your_proxy_url = process.env.OPENCARD_API_PROXY_URL;
}
console.log("配置代理池: " + (proenv_0x54a036 == true ? "已配置" : "未配置") + " ");
console.log("配置api代理: " + (proenv_0x3425ef == true ? "已配置" : "未配置"));
const proenv_0x58a0f0 = $.isNode() ? require("./jdCookie.js") : "";
const proenv_0x4e6ec3 = require("crypto-js");
const proenv_0x138250 = require("axios");
const proenv_0x317abf = require("https-proxy-agent");
let proenv_0x168ee5 = [],
  proenv_0x22037f = "";
let proenv_0x5e526d = process.env.jd_lzdz1_shopLeague_Id ? process.env.jd_lzdz1_shopLeague_Id : "";
let proenv_0xe51d39 = "jdapp;android;11.1.4;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 10; PCCM00 Build/QKQ1.191021.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046011 Mobile Safari/537.36";
let proenv_0x3b5872 = "jdapp;android;11.2.4;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 10; PCCM00 Build/QKQ1.191021.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046011 Mobile Safari/537.36";
let proenv_0x1b55bd = "http://hz.feverrun.top:99/share/card/getToken";
let proenv_0x176c65 = "http://hz.feverrun.top:99/share/card/getCard";
let proenv_0x56b1ab = process.env.jd_card_waitTime ? process.env.jd_card_waitTime : "";
if ($.isNode()) {
  Object.keys(proenv_0x58a0f0).forEach(_0x3e6e0b => {
    proenv_0x168ee5.push(proenv_0x58a0f0[_0x3e6e0b]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  proenv_0x168ee5 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonParse($.getdata("CookiesJD") || "[]").map(_0x57e8ed => _0x57e8ed.cookie)].filter(_0x58cd81 => !!_0x58cd81);
}
allMessage = "";
message = "";
$.hotFlag = false;
$.outFlag = false;
$.continueFlag = false;
$.errStatus = "";
$.activityEnd = false;
let proenv_0xade0f6 = "";
let proenv_0x1f5a2e = "";
let proenv_0x407867 = {};
!(async () => {
  if (process.env.PRO_REDIS_URL) {
    try {
      $.redis = require("redis");
      pro_redis_url = process.env.PRO_REDIS_URL;
      const _0x103e3b = {
        url: pro_redis_url
      };
      $.client = $.redis.createClient(_0x103e3b);
      if ($.client) {
        console.log("本地Redis已检测到配置链接");
        await $.client.connect();
      }
    } catch (_0x9f8156) {
      console.log(_0x9f8156);
      console.log("本地Redis连接失败, 退出执行！！！");
      process.exit(1);
    }
  }
  if (!proenv_0x168ee5[0]) {
    console.log("未检测到cookie");
    process.exit(1);
    return;
  }
  if (!proenv_0x5e526d) {
    console.log("export jd_lzdz1_shopLeague_Id=\"活动id\"");
    console.log("超店铺活动Id, 未填写退出执行！！！");
    process.exit(1);
    return;
  }
  if (proenv_0x5e526d.length <= 20 || proenv_0x5e526d.length >= 64) {
    console.log("请填写正确的超店铺活动Id");
    process.exit(1);
    return;
  }
  try {
    let _0x9f0e2d = await proenv_0x5e4d47(proenv_0x5e526d);
    codeArr = _0x9f0e2d.split("&");
    _0x9f0e2d = codeArr[parseInt(Math.random() * codeArr.length)];
    $.authorCode = _0x9f0e2d;
  } catch (_0x4cc12e) {
    $.authorCode = "";
  }
  $.activityId = proenv_0x5e526d;
  authorCodeList = [$.authorCode];
  $.shareUuid = authorCodeList[proenv_0x1f918e(0, authorCodeList.length)];
  $.oneUuid = "";
  console.log("问题反馈: https://t.me/proenvc");
  for (let _0x53efc2 = 0; _0x53efc2 < proenv_0x168ee5.length; _0x53efc2++) {
    proenv_0x22037f = proenv_0x168ee5[_0x53efc2];
    originCookie = proenv_0x168ee5[_0x53efc2];
    if (proenv_0x22037f) {
      $.UserName = decodeURIComponent(proenv_0x22037f.match(/pt_pin=([^; ]+)(?=;?)/) && proenv_0x22037f.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x53efc2 + 1;
      message = "";
      $.bean = 0;
      $.hotFlag = false;
      $.nickName = "";
      console.log("******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********");
      await proenv_0x5a7e9d();
      await proenv_0x487522();
      if ($.outFlag || $.activityEnd) {
        break;
      }
      if (proenv_0x3425ef == true || proenv_0x54a036 == true) {
        await $.wait(parseInt(Math.random() * 250 + 250, 10));
      } else {
        if (parseInt(proenv_0x56b1ab)) {
          await $.wait(parseInt(Math.random() * 500 + proenv_0x56b1ab * 1000, 10));
        } else {
          await $.wait(parseInt(Math.random() * 2500 + 1500, 10));
        }
      }
    }
  }
  process.exit(1);
})().catch(_0x2183bc => $.logErr(_0x2183bc)).finally(() => $.done());
async function proenv_0x487522() {
  try {
    $.ERR_BAD_REQUEST = 0;
    $.hasEnd = false;
    $.endTime = 0;
    proenv_0xade0f6 = "";
    $.Token = "";
    $.Pin = "";
    let _0xaeb97f = false;
    $.continueFlag = false;
    if (proenv_0x3425ef == true) {
      await proenv_0x3db98a();
      if ($.getIpStatus == false) {
        await proenv_0x3db98a();
        console.log("代理获取失败，跳过此次执行！");
        return;
      }
    }
    $.isvObfuscator = "";
    await proenv_0x39d552();
    if ($.Token == "") {
      console.log("获取[token]失败！");
      return;
    }
    await proenv_0x536417("getCk");
    if (proenv_0x1f5a2e == "") {
      console.log("获取cookie失败");
      return;
    }
    if ($.activityEnd === true) {
      console.log("活动结束");
      return;
    }
    if ($.outFlag) {
      console.log("此ip已被限制，请过10分钟后再执行脚本\n");
      return;
    }
    $.userId = "1000282702";
    $.shopId = "1000282702";
    $.venderId = "1000282702";
    await proenv_0x536417("getMyCidPing");
    await proenv_0x536417("init");
    if (!$.Pin) {
      console.log("获取[Pin]失败！");
      return;
    }
    await proenv_0x536417("accessLogWithAD");
    await proenv_0x536417("getUserInfo");
    await proenv_0x536417("activityContent");
    if ($.index == 1) {
      console.log($.actorUuid);
    }
    if (!$.actorUuid) {
      console.log("获取不到[actorUuid]退出执行，请重新执行");
      return;
    }
    if ($.hasEnd === true || $.endTime && Date.now() > $.endTime) {
      $.activityEnd = true;
      console.log("活动结束");
      return;
    }
    if (proenv_0x3425ef == true || proenv_0x54a036 == true) {
      await $.wait(parseInt(Math.random() * 250 + 250, 10));
    } else {
      await $.wait(parseInt(Math.random() * 1000 + 500, 10));
    }
    $.openList = [];
    $.allOpenCard = false;
    await proenv_0x536417("checkOpenCard");
    let _0x3e8e9b = [];
    let _0x280b07 = [];
    if ($.openList.length >= 1) {
      for (let _0x21b040 of $.openList) {
        _0x3e8e9b.push(_0x21b040.value);
        if (_0x21b040.status == 0) {
          _0x280b07.push(_0x21b040.value);
        }
      }
    }
    console.log("共有卡: " + _0x3e8e9b);
    console.log("还需开:" + _0x280b07);
    if ($.allOpenCard == false) {
      console.log("开卡任务");
      let _0x1acb46 = 0;
      for (o of $.openList) {
        $.openCard = false;
        if (o.status == 0) {
          _0xaeb97f = true;
          $.joinVenderId = o.value;
          $.errorJoinShop = "";
          if (_0x1acb46 != 0 && _0x1acb46 % 9 == 0) {
            await proenv_0x3db98a();
          }
          _0x1acb46 += 1;
          await proenv_0x536417("getShopOpenCardInfo");
          await $.wait(parseInt(Math.random() * 500 + 350, 10));
          await proenv_0x536417("bindWithVender");
          await $.wait(parseInt(Math.random() * 500 + 350, 10));
          if ($.errorJoinShop.indexOf("开卡失败，请稍后重试~") > -1 || $.errorJoinShop.indexOf("活动太火爆，请稍后再试") > -1 || $.errorJoinShop.indexOf("加入店铺会员失败") > -1) {
            console.log("第1次重试");
            await proenv_0x536417("getShopOpenCardInfo");
            await $.wait(parseInt(Math.random() * 500 + 350, 10));
            await proenv_0x536417("bindWithVender");
            await $.wait(parseInt(Math.random() * 500 + 350, 10));
          }
          if ($.errorJoinShop.indexOf("开卡失败，请稍后重试~") > -1 || $.errorJoinShop.indexOf("活动太火爆，请稍后再试") > -1 || $.errorJoinShop.indexOf("加入店铺会员失败") > -1) {
            console.log("账号分太低或者是ip有问题, 跳过此账号");
            $.continueFlag = true;
            break;
          }
          await proenv_0x536417("checkOpenCard");
        }
      }
      if (proenv_0x3425ef == true || proenv_0x54a036 == true) {
        await $.wait(parseInt(Math.random() * 250 + 250, 10));
      } else {
        await $.wait(parseInt(Math.random() * 500 + 350, 10));
      }
      await proenv_0x536417("checkOpenCard");
      await proenv_0x536417("activityContent");
    } else {
      console.log("已全部开卡");
    }
    if ($.continueFlag == true) {
      return;
    }
    $.log("关注: " + $.followShop);
    if (!$.followShop && !$.outFlag) {
      _0xaeb97f = true;
      $.followShopValue = 1;
      await proenv_0x536417("followShop");
      await $.wait(parseInt(Math.random() * 500 + 550, 10));
    }
    $.log("加购: " + $.addSku);
    if (!$.addSku && !$.outFlag) {
      _0xaeb97f = true;
      $.followShopValue = 2;
      await proenv_0x536417("addSku");
      await $.wait(parseInt(Math.random() * 500 + 550, 10));
    }
    $.runFalag = true;
    if (_0xaeb97f) {
      await proenv_0x536417("activityContent");
    }
    if ($.outFlag == true) {
      return;
    }
    await proenv_0x536417("getDrawRecordHasCoupon");
    await proenv_0x536417("getShareRecord");
    console.log($.actorUuid);
    if ($.index == 1) {
      $.shareUuid = $.actorUuid;
      $.oneUuid = $.actorUuid;
      console.log("后面的号都会助力: " + $.oneUuid);
    }
    if ($.index == 1000) {
      $.shareUuid = $.authorCode;
    } else {
      $.shareUuid = $.oneUuid;
      if (!$.oneUuid) {
        $.shareUuid = $.authorCode;
      }
    }
  } catch (_0x595a8b) {
    console.log(_0x595a8b);
  }
}
async function proenv_0x536417(_0x48c7b1) {
  if ($.outFlag || $.continueFlag) {
    return;
  }
  let _0xef0d8f = "https://lzdz1-isv.isvjcloud.com";
  let _0x388f64 = "";
  let _0x2e26ca = "POST";
  switch (_0x48c7b1) {
    case "isvObfuscator":
      url = "https://api.m.jd.com/client.action?functionId=isvObfuscator";
      _0x388f64 = await proenv_0x3fa94a();
      break;
    case "getCk":
      _0x2e26ca = "get";
      url = "https://lzdz1-isv.isvjcloud.com/wxCommonInfo/token?t=" + Date.now();
      break;
    case "getSimpleActInfoVo":
      url = _0xef0d8f + "/dz/common/getSimpleActInfoVo";
      _0x388f64 = "activityId=" + $.activityId;
      break;
    case "getMyCidPing":
      url = _0xef0d8f + "/customer/getMyCidPing";
      _0x388f64 = "userId=" + ($.shopId || $.venderId || "") + "&token=" + $.Token + "&fromType=APP&pin=";
      break;
    case "init":
      url = _0xef0d8f + "/dingzhi/taskact/common/init";
      _0x388f64 = "activityId=" + $.activityId + "&dzActivityType=0&pin=";
      break;
    case "getMyPing":
      url = _0xef0d8f + "/customer/getMyPing";
      _0x388f64 = "userId=" + ($.shopId || $.venderId || "") + "&token=" + $.Token + "&fromType=APP";
      break;
    case "accessLogWithAD":
      url = _0xef0d8f + "/common/accessLogWithAD";
      let _0x12b389 = _0xef0d8f + "/m/1000282702/" + $.activityId + "/?shareUuid=" + $.shareUuid;
      _0x388f64 = "venderId=" + ($.shopId || $.venderId || "") + "&code=99&pin=" + encodeURIComponent($.Pin) + "&activityId=" + $.activityId + "&pageUrl=" + encodeURIComponent(_0x12b389) + "&subType=app&adSource=";
      break;
    case "getUserInfo":
      url = _0xef0d8f + "/wxActionCommon/getUserInfo";
      _0x388f64 = "pin=" + encodeURIComponent($.Pin);
      break;
    case "activityContent":
      url = _0xef0d8f + "/dingzhi/shop/league/activityContent";
      _0x388f64 = "activityId=" + $.activityId + "&pin=" + encodeURIComponent($.Pin) + "&pinImg=" + encodeURIComponent($.attrTouXiang) + "&nick=" + encodeURIComponent($.nickname) + "&cjyxPin=&cjhyPin=&shareUuid=" + $.shareUuid;
      break;
    case "drawContent":
      url = _0xef0d8f + "/dingzhi/taskact/openCardcommon/drawContent";
      _0x388f64 = "activityId=" + $.activityId + "&pin=" + encodeURIComponent($.Pin);
      break;
    case "checkOpenCard":
      url = _0xef0d8f + "/dingzhi/shop/league/checkOpenCard";
      _0x388f64 = "activityId=" + $.activityId + "&actorUuid=" + $.actorUuid + "&pin=" + encodeURIComponent($.Pin) + "&shareUuid=" + $.shareUuid;
      break;
    case "startDraw":
      url = _0xef0d8f + "/dingzhi/shop/league/startDraw";
      _0x388f64 = "activityId=" + $.activityId + "&actorUuid=" + $.actorUuid + "&pin=" + encodeURIComponent($.Pin) + "&type=" + $.drawType;
      break;
    case "startVisitTask":
      url = _0xef0d8f + "/dingzhi/common/visitTask/startVisitTask";
      _0x388f64 = "activityId=" + $.activityId + "&actorUuid=" + $.actorUuid + "&pin=" + encodeURIComponent($.Pin) + "&taskType=" + $.taskType + "&taskValue=" + $.taskValue;
      break;
    case "insertCrmPageVisit":
      url = _0xef0d8f + "/crm/pageVisit/insertCrmPageVisit";
      _0x388f64 = "venderId=" + $.venderId + "&elementId=" + $.elementId + "&pageId=" + $.activityId + "&pin=" + encodeURIComponent($.Pin);
      break;
    case "lsaveTask":
      url = _0xef0d8f + "/dingzhi/shop/league/saveTask";
      _0x388f64 = "activityId=" + $.activityId + "&actorUuid=" + $.actorUuid + "&pin=" + encodeURIComponent($.Pin) + "&shareUuid=" + $.shareUuid + "&taskType=" + $.taskType + "&taskValue=" + $.taskValue + "&taskUuid=6c4f9c2d332a4b98953f16ef4632da3e";
      break;
    case "followShop":
      url = _0xef0d8f + "/dingzhi/shop/league/saveTask";
      _0x388f64 = "activityId=" + $.activityId + "&pin=" + encodeURIComponent($.Pin) + "&actorUuid=" + $.actorUuid + "&shareUuid=" + $.shareUuid + "&taskType=1&taskValue=" + $.followShopValue;
      break;
    case "viewVideo":
    case "visitSku":
    case "toShop":
    case "addSku":
      url = _0xef0d8f + "/dingzhi/shop/league/saveTask";
      let _0x326978 = "";
      let _0x4ff3e4 = "";
      if (_0x48c7b1 == "viewVideo") {
        _0x326978 = 31;
        _0x4ff3e4 = 31;
      } else {
        if (_0x48c7b1 == "visitSku") {
          _0x326978 = 5;
          _0x4ff3e4 = $.visitSkuValue || 5;
        } else {
          if (_0x48c7b1 == "toShop") {
            _0x326978 = 14;
            _0x4ff3e4 = $.toShopValue || 14;
          } else {
            if (_0x48c7b1 == "addSku") {
              _0x326978 = 2;
              _0x4ff3e4 = $.addSkuValue || 2;
            }
          }
        }
      }
      _0x388f64 = "activityId=" + $.activityId + "&pin=" + encodeURIComponent($.Pin) + "&actorUuid=" + $.actorUuid + "&taskType=" + _0x326978 + "&taskValue=" + _0x4ff3e4;
      break;
    case "getDrawRecordHasCoupon":
      url = _0xef0d8f + "/dingzhi/taskact/common/getDrawRecordHasCoupon";
      _0x388f64 = "activityId=" + $.activityId + "&pin=" + encodeURIComponent($.Pin) + "&actorUuid=" + $.actorUuid;
      break;
    case "getShareRecord":
      url = _0xef0d8f + "/dingzhi/taskact/common/getShareRecord";
      _0x388f64 = "activityId=" + $.activityId + "&pin=" + encodeURIComponent($.Pin) + "&actorUuid=" + $.actorUuid;
      break;
    case "getShopOpenCardInfo":
      _0x2e26ca = "post";
      if (!$.joinVenderId) {
        console.log("没有开卡id");
        break;
      }
      const _0x1ebfbd = {
        venderId: $.joinVenderId,
        channel: 102,
        payUpShop: true,
        queryVersion: "10.5.2",
        appid: "27004",
        needSecurity: true,
        bizId: "shopmember_m_jd_com"
      };
      _0x388f64 = _0x1ebfbd;
      h5st = await proenv_0x55620c("27004", _0x388f64);
      h5st = encodeURIComponent(h5st);
      await $.wait(parseInt(Math.random() * 250 + 150, 10));
      url = "https://api.m.jd.com/client.action?functionId=getShopOpenCardInfo&body=" + encodeURIComponent(JSON.stringify(_0x388f64)) + "&t=" + Date.now() + "&appid=shopmember_m_jd_com&clientVersion=9.2.0&client=H5&area=1_72_2799_0&uuid=88888&h5st=" + h5st + "&x-api-eid-token=";
      _0x388f64 = "";
      break;
    case "bindWithVender":
      if (!$.joinVenderId) {
        console.log("没有开卡id");
        break;
      }
      _0x2e26ca = "post";
      if ($.shopactivityId == "") {
        const _0x37cd49 = {
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
        _0x388f64 = _0x37cd49;
      } else {
        const _0x29d4db = {
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
        _0x388f64 = _0x29d4db;
      }
      h5st = await proenv_0x55620c("27004", _0x388f64);
      h5st = encodeURIComponent(h5st);
      await $.wait(parseInt(Math.random() * 250 + 150, 10));
      url = "https://api.m.jd.com/client.action?functionId=bindWithVender&body=" + encodeURIComponent(JSON.stringify(_0x388f64)) + "&t=" + Date.now() + "&appid=shopmember_m_jd_com&clientVersion=9.2.0&client=H5&area=1_72_2799_0&uuid=88888&h5st=" + h5st + "&x-api-eid-token=";
      _0x388f64 = "";
      break;
    default:
      console.log("错误" + _0x48c7b1);
  }
  let _0x2a2876 = proenv_0x445b26(_0x48c7b1, url, _0x388f64, _0x2e26ca);
  if (proenv_0x3425ef == true || proenv_0x54a036 == true) {
    await $.wait(parseInt(Math.random() * 250 + 250, 10));
  } else {
    await $.wait(parseInt(Math.random() * 500 + 350, 10));
  }
  options = {};
  if (proenv_0x3425ef == true) {
    let _0x3653e5 = "http://" + $.ip + ":" + $.ipo;
    let _0x12a2a5 = await new proenv_0x317abf.HttpsProxyAgent(_0x3653e5);
    let _0x32d071 = _0x12a2a5;
    const _0x3044ae = {
      headers: _0x2a2876.headers,
      timeout: _0x2a2876.timeout,
      proxy: false,
      httpAgent: _0x32d071,
      httpsAgent: _0x12a2a5
    };
    options = _0x3044ae;
  } else {
    const _0x3f8f65 = {
      headers: _0x2a2876.headers,
      timeout: _0x2a2876.timeout
    };
    options = _0x3f8f65;
  }
  if (_0x2e26ca.toLowerCase().includes("post")) {
    return proenv_0x138250.post(url, _0x388f64, options).then(function (_0x3cf5ca) {
      _0x3cf5ca = proenv_0x49d730(_0x3cf5ca);
      if (_0x3cf5ca) {
        proenv_0x2a0f41(_0x48c7b1, _0x3cf5ca);
      }
    }).catch(async function (_0x4c74f1) {
      if (_0x4c74f1.response) {
        console.log(_0x4c74f1.response.status);
        if (!(proenv_0x3425ef == true || proenv_0x54a036 == true)) {
          if (_0x4c74f1.response.status == "493") {
            console.log("ip可能已经被限制， 过十分钟再来！！！");
            $.outFlag = true;
            process.exit(1);
          }
        }
        _0x4c74f1.response.status == "403";
      }
      console.log("错误码1: " + _0x48c7b1 + " - " + _0x4c74f1.code);
      if (_0x4c74f1.code == "ECONNABORTED" || _0x4c74f1.code == "ERR_BAD_REQUEST" && !["isvObfuscator", "getCk"].includes(_0x48c7b1) || _0x4c74f1.code == "ERR_BAD_RESPONSE" || _0x4c74f1.code == "EAI_AGAIN") {
        if ($.ERR_BAD_REQUEST >= 5) {
          $.ERR_BAD_REQUEST = 0;
        } else {
          $.ERR_BAD_REQUEST += 1;
          await $.wait(parseInt(Math.random() * 500 + 350, 10));
          await proenv_0x536417(_0x48c7b1);
        }
      }
      if (_0x4c74f1.code == "ECONNRESET" || _0x4c74f1.code == "ECONNREFUSED") {
        await $.wait(parseInt(Math.random() * 500 + 350, 10));
        if (proenv_0x3425ef == true) {
          $.getIpStatus = true;
          await proenv_0x3db98a();
          await proenv_0x536417(_0x48c7b1);
        }
      }
    });
  } else {
    if (_0x2e26ca.toLowerCase().includes("get")) {
      return proenv_0x138250.get(url, options).then(function (_0x9ebb24) {
        _0x9ebb24 = proenv_0x49d730(_0x9ebb24);
        if (_0x9ebb24) {
          proenv_0x2a0f41(_0x48c7b1, _0x9ebb24);
        }
      }).catch(async function (_0x5c3876) {
        if (_0x5c3876.response) {
          console.log(_0x5c3876.response.status);
          if (!(proenv_0x3425ef == true || proenv_0x54a036 == true)) {
            if (_0x5c3876.response.status == "493") {
              console.log("ip可能已经被限制， 过十分钟再来！！！");
              $.outFlag = true;
              process.exit(1);
            }
          }
          _0x5c3876.response.status == "403";
        }
        console.log("错误码2: " + _0x48c7b1 + " - " + _0x5c3876.code);
        if (_0x5c3876.code == "ECONNABORTED" || _0x5c3876.code == "ERR_BAD_REQUEST" && !["isvObfuscator", "getCk"].includes(_0x48c7b1) || _0x5c3876.code == "ERR_BAD_RESPONSE" || _0x5c3876.code == "EAI_AGAIN") {
          if ($.ERR_BAD_REQUEST >= 5) {
            $.ERR_BAD_REQUEST = 0;
          } else {
            $.ERR_BAD_REQUEST += 1;
            await $.wait(parseInt(Math.random() * 500 + 350, 10));
            await proenv_0x536417(_0x48c7b1);
          }
        }
        if (_0x5c3876.code == "ECONNRESET" || _0x5c3876.code == "ECONNREFUSED") {
          await $.wait(parseInt(Math.random() * 500 + 350, 10));
          if (proenv_0x3425ef == true) {
            $.getIpStatus = true;
            await proenv_0x3db98a();
            await proenv_0x536417(_0x48c7b1);
          }
        }
      });
    }
  }
}
function proenv_0x2a0f41(_0x21ccfa, _0x490851) {
  let _0x303a4a = "";
  try {
    if (!["accessLog", "attendLog", "getCk", "drawContent", "accessLogWithAD", "accessLog"].includes(_0x21ccfa)) {
      if (_0x490851) {
        _0x303a4a = JSON.parse(_0x490851);
      }
    }
  } catch (_0xf6aac7) {
    console.log(_0x21ccfa + " 执行任务异常");
    $.runFalag = false;
  }
  try {
    switch (_0x21ccfa) {
      case "isvObfuscator":
        if (typeof _0x303a4a == "object") {
          if (_0x303a4a.errcode == 0) {
            if (typeof _0x303a4a.token != "undefined") {
              $.Token = _0x303a4a.token || "";
            }
          } else {
            if (_0x303a4a.message) {
              console.log("isvObfuscator " + (_0x303a4a.message || ""));
              $.isvObfuscator = _0x303a4a.message;
            } else {
              console.log(_0x490851);
            }
          }
        } else {
          console.log(_0x490851);
        }
        break;
      case "getCk":
        break;
      case "getSimpleActInfoVo":
        if (typeof _0x303a4a == "object") {
          if (_0x303a4a.result && _0x303a4a.result === true) {
            if (typeof _0x303a4a.data.shopId != "undefined") {
              $.shopId = _0x303a4a.data.shopId;
            }
            if (typeof _0x303a4a.data.venderId != "undefined") {
              $.venderId = _0x303a4a.data.venderId;
            }
          } else {
            if (_0x303a4a.errorMessage) {
              console.log(_0x21ccfa + " " + (_0x303a4a.errorMessage || ""));
            } else {
              console.log(_0x21ccfa + " " + _0x490851);
            }
          }
        } else {
          console.log(_0x21ccfa + " " + _0x490851);
        }
        break;
      case "getMyCidPing":
        if (typeof _0x303a4a == "object") {
          if (_0x303a4a.result && _0x303a4a.result === true) {
            if (_0x303a4a.data && typeof _0x303a4a.data.secretPin != "undefined") {
              $.Pin = _0x303a4a.data.secretPin;
            }
            if (_0x303a4a.data && typeof _0x303a4a.data.nickname != "undefined") {
              $.nickname = _0x303a4a.data.nickname;
            }
          } else {
            if (_0x303a4a.errorMessage) {
              console.log(_0x21ccfa + " " + (_0x303a4a.errorMessage || ""));
            } else {
              console.log(_0x21ccfa + " " + _0x490851);
            }
          }
        } else {
          console.log(_0x21ccfa + " " + _0x490851);
        }
        break;
      case "init":
        if (_0x303a4a.result == true && _0x303a4a.data) {
          $.userId = _0x303a4a.data.userId;
          $.venderId = _0x303a4a.data.venderId;
          $.jdActivityId = _0x303a4a.data.jdActivityId;
          $.activityType = _0x303a4a.data.activityType;
          $.startTime = _0x303a4a.data.startTime;
          $.endTime = _0x303a4a.data.endTime;
        }
        break;
      case "getMyPing":
        if (typeof _0x303a4a == "object") {
          if (_0x303a4a.result && _0x303a4a.result === true) {
            if (_0x303a4a.data && typeof _0x303a4a.data.secretPin != "undefined") {
              $.Pin = _0x303a4a.data.secretPin;
            }
            if (_0x303a4a.data && typeof _0x303a4a.data.nickname != "undefined") {
              $.nickname = _0x303a4a.data.nickname;
            }
          } else {
            if (_0x303a4a.errorMessage) {
              console.log(_0x21ccfa + " " + (_0x303a4a.errorMessage || ""));
            } else {
              console.log(_0x21ccfa + " " + _0x490851);
            }
          }
        } else {
          console.log(_0x21ccfa + " " + _0x490851);
        }
        break;
      case "getUserInfo":
        if (typeof _0x303a4a == "object") {
          if (_0x303a4a.result && _0x303a4a.result === true) {
            if (_0x303a4a.data && typeof _0x303a4a.data.yunMidImageUrl != "undefined") {
              $.attrTouXiang = _0x303a4a.data.yunMidImageUrl || "https://img10.360buyimg.com/imgzone/jfs/t1/7020/27/13511/6142/5c5138d8E4df2e764/5a1216a3a5043c5d.png";
            }
          } else {
            if (_0x303a4a.errorMessage) {
              console.log(_0x21ccfa + " " + (_0x303a4a.errorMessage || ""));
            } else {
              console.log(_0x21ccfa + " " + _0x490851);
            }
          }
        } else {
          console.log(_0x21ccfa + " " + _0x490851);
        }
        break;
      case "startDraw":
        console.log(_0x490851);
        break;
      case "startVisitTask":
        if (_0x303a4a.result == true) {
          $.taskUuid = _0x303a4a.data.taskUuid;
          console.log($.taskUuid);
        } else {
          console.log(_0x490851);
        }
        break;
      case "insertCrmPageVisit":
        if (!(_0x303a4a.result == true)) {
          console.log(_0x490851);
        }
        break;
      case "lsaveTask":
        if (!(_0x303a4a.result == true)) {
          console.log(_0x490851);
        }
        break;
      case "activityContent":
        if (typeof _0x303a4a == "object") {
          if (_0x303a4a.result && _0x303a4a.result === true) {
            $.endTime = _0x303a4a.data.endTime || 0;
            $.hasEnd = _0x303a4a.data.hasEnd || false;
            $.actorUuid = _0x303a4a.data.actorUuid || "";
            $.followShop = _0x303a4a.data.followShop.allStatus || false;
            $.addSku = _0x303a4a.data.addSku.allStatus || false;
            if (_0x303a4a.data.followShop && _0x303a4a.data.followShop.settings && _0x303a4a.data.followShop.settings[0]) {
              $.followShopValue = _0x303a4a.data.followShop.settings[0].value || 1;
            }
            if (_0x303a4a.data.addSku && _0x303a4a.data.addSku.settings && _0x303a4a.data.addSku.settings[0]) {
              $.addSkuValue = _0x303a4a.data.addSku.settings[0].value || 2;
            }
          } else {
            if (_0x303a4a.errorMessage) {
              console.log(_0x21ccfa + " " + (_0x303a4a.errorMessage || ""));
            } else {
              console.log(_0x21ccfa + " " + _0x490851);
            }
          }
        } else {
          console.log(_0x21ccfa + " " + _0x490851);
        }
        if (_0x490851.indexOf("活动已结束") > -1 || _0x490851.indexOf("访问过程中出现点小问题哦") > -1) {
          $.outFlag = true;
        }
        break;
      case "checkOpenCard":
        if (typeof _0x303a4a == "object") {
          if (_0x303a4a.result && _0x303a4a.result === true) {
            let _0x92fe08 = _0x303a4a.data.sendBeanNum ? _0x303a4a.data.sendBeanNum : 0;
            let _0x280d51 = _0x303a4a.data.cardList1 || [];
            let _0x5bc703 = _0x303a4a.data.cardList2 || [];
            let _0x50a1a8 = _0x303a4a.data.cardList || [];
            $.openList = [..._0x50a1a8, ..._0x280d51, ..._0x5bc703];
            $.allOpenCard = _0x303a4a.data.allOpenCard || false;
            $.openCardScore1 = _0x303a4a.data.score1 || _0x303a4a.data.drawScore1 || 0;
            $.openCardScore2 = _0x303a4a.data.score2 || _0x303a4a.data.drawScore2 || 0;
            $.openCardScore3 = _0x303a4a.data.score3 || _0x303a4a.data.drawScore3 || 0;
            $.drawScore = _0x303a4a.data.drawScore || 0;
            console.log("开卡获得: " + _0x92fe08 + " 京豆");
          } else {
            if (_0x303a4a.errorMessage) {
              console.log(_0x21ccfa + " " + (_0x303a4a.errorMessage || ""));
            } else {
              console.log(_0x21ccfa + " " + _0x490851);
            }
          }
        } else {
          console.log(_0x21ccfa + " " + _0x490851);
        }
        break;
      case "followShop":
      case "viewVideo":
      case "visitSku":
      case "toShop":
      case "addSku":
        if (typeof _0x303a4a == "object") {
          if (_0x303a4a.result && _0x303a4a.result === true) {
            if (typeof _0x303a4a.data == "object") {
              let _0x537592 = "";
              let _0x347122 = "抽奖";
              if (_0x303a4a.data.addBeanNum && _0x303a4a.data.sendStatus) {
                _0x537592 = _0x303a4a.data.addBeanNum + "京豆";
              }
              if (_0x21ccfa == "followShop") {
                _0x347122 = "关注";
                if (_0x303a4a.data.beanNumMember && _0x303a4a.data.assistSendStatus) {
                  _0x537592 += " 额外获得:" + _0x303a4a.data.beanNumMember + "京豆";
                }
              } else {
                if (_0x21ccfa == "addSku") {
                  _0x347122 = "加购";
                } else {
                  if (_0x21ccfa == "viewVideo") {
                    _0x347122 = "热门文章";
                  } else {
                    if (_0x21ccfa == "toShop") {
                      _0x347122 = "浏览店铺";
                    } else {
                      if (_0x21ccfa == "visitSku") {
                        _0x347122 = "浏览商品";
                      } else {
                        _0x537592 = _0x303a4a.data.drawOk == true && (_0x303a4a.data.drawInfoType == 6 && _0x303a4a.data.name || "") || "空气";
                      }
                    }
                  }
                }
              }
              if (!_0x537592) {
                _0x537592 = "空气";
              }
              console.log(_0x347122 + "获得:" + (_0x537592 || _0x490851));
            } else {
              console.log(_0x21ccfa + " " + _0x490851);
            }
          } else {
            if (_0x303a4a.errorMessage) {
              $.runFalag = false;
              console.log(_0x21ccfa + " " + (_0x303a4a.errorMessage || ""));
            } else {
              console.log(_0x21ccfa + " " + _0x490851);
            }
          }
        } else {
          console.log(_0x21ccfa + " " + _0x490851);
        }
        break;
      case "getDrawRecordHasCoupon":
        if (typeof _0x303a4a == "object") {
          if (_0x303a4a.result && _0x303a4a.result === true) {
            console.log("我的奖品：");
            let _0x3e4a4a = 0;
            let _0x231963 = 0;
            for (let _0x39c937 in _0x303a4a.data) {
              let _0x3e2088 = _0x303a4a.data[_0x39c937];
              if (_0x3e2088.value == "邀请好友") {
                _0x3e4a4a++;
              }
              if (_0x3e2088.value == "邀请好友") {
                _0x231963 = _0x3e2088.infoName.replace("京豆", "");
              }
              if (_0x3e2088.value != "邀请好友") {
                console.log("" + (_0x3e2088.infoType != 10 && _0x3e2088.value + ":" || "") + _0x3e2088.infoName + " " + proenv_0x22ade9(_0x3e2088.createTime));
              }
            }
            if (_0x3e4a4a > 0) {
              console.log("邀请好友(" + _0x3e4a4a + "):" + (_0x3e4a4a * parseInt(_0x231963, 10) || 0) + "京豆");
            }
          } else {
            if (_0x303a4a.errorMessage) {
              console.log(_0x21ccfa + " " + (_0x303a4a.errorMessage || ""));
            } else {
              console.log(_0x21ccfa + " " + _0x490851);
            }
          }
        } else {
          console.log(_0x21ccfa + " " + _0x490851);
        }
        break;
      case "getShareRecord":
        if (typeof _0x303a4a == "object") {
          if (_0x303a4a.result && _0x303a4a.result === true && _0x303a4a.data) {
            $.ShareCount = _0x303a4a.data.length;
            $.log("=========== 你邀请了:" + _0x303a4a.data.length + "个");
          } else {
            if (_0x303a4a.errorMessage) {
              console.log(_0x21ccfa + " " + (_0x303a4a.errorMessage || ""));
            } else {
              console.log(_0x21ccfa + " " + _0x490851);
            }
          }
        } else {
          console.log(_0x21ccfa + " " + _0x490851);
        }
        break;
      case "accessLogWithAD":
      case "drawContent":
        break;
      case "getShopOpenCardInfo":
        if (_0x490851) {
          _0x490851 = _0x490851 && _0x490851.match(/jsonp_.*?\((.*?)\);/) && _0x490851.match(/jsonp_.*?\((.*?)\);/)[1] || _0x490851;
          _0x303a4a = JSON.parse(_0x490851);
          if (_0x303a4a && _0x303a4a.success == true) {
            openCardStatus = _0x303a4a.result[0].userInfo.openCardStatus || 0;
            venderCardName = _0x303a4a.result[0].shopMemberCardInfo.venderCardName || "";
            if (openCardStatus === 1) {
              console.log("已入会: " + $.joinVenderId + " - " + venderCardName);
            } else {
              if (openCardStatus == 0) {
                console.log("去开卡: " + $.joinVenderId + " - " + venderCardName);
              }
            }
            $.shopactivityId = _0x303a4a.result[0].interestsRuleList && _0x303a4a.result[0].interestsRuleList[0] && _0x303a4a.result[0].interestsRuleList[0].interestsInfo && _0x303a4a.result[0].interestsRuleList[0].interestsInfo.activityId || "";
          } else {
            _0x303a4a.busiCode == "9001";
            _0x303a4a.busiCode == "1";
          }
        }
        break;
      case "bindWithVender":
        if (_0x490851) {
          _0x490851 = _0x490851 && _0x490851.match(/jsonp_.*?\((.*?)\);/) && _0x490851.match(/jsonp_.*?\((.*?)\);/)[1] || _0x490851;
          _0x490851.indexOf("加入店铺会员成功") > -1 || _0x490851.indexOf("已经是本店会员") > -1;
          _0x490851.indexOf("活动太火爆，请稍后再试") > -1;
          _0x303a4a = JSON.parse(_0x490851);
          if (_0x303a4a && _0x303a4a.success === true) {
            if (_0x303a4a.busiCode == 0) {
              console.log("" + _0x303a4a.message);
            } else {
              console.log(_0x303a4a.busiCode + ": " + _0x303a4a.message);
            }
            $.errorJoinShop = _0x303a4a.message || "";
            if (_0x303a4a.result && _0x303a4a.result.giftInfo) {
              for (let _0x5449cf of _0x303a4a.result.giftInfo.giftList) {
                console.log("入会获得: " + _0x5449cf.discountString + _0x5449cf.prizeName + _0x5449cf.secondLineDesc);
              }
            }
          } else {
            if (_0x303a4a && typeof _0x303a4a == "object" && _0x303a4a.message) {
              $.errorJoinShop = _0x303a4a.message || "";
              console.log(_0x303a4a.busiCode + ": " + _0x303a4a.message);
              _0x303a4a.busiCode == "2001";
              _0x303a4a.busiCode == "9002";
              _0x303a4a.busiCode == "9003";
              _0x303a4a.busiCode == "0";
            } else {
              console.log(_0x490851);
            }
          }
        }
        break;
      default:
        console.log(_0x21ccfa + "-> " + _0x490851);
    }
  } catch (_0xdc3e13) {
    console.log(_0xdc3e13);
  }
}
function proenv_0x445b26(_0x4a928c, _0x2ebc26, _0xafd2c0, _0x21801f = "post") {
  const _0x1c28b4 = {
    Accept: "application/json",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-cn",
    Connection: "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    Cookie: proenv_0x22037f,
    "User-Agent": $.UA,
    "X-Requested-With": "XMLHttpRequest"
  };
  let _0x5798db = _0x1c28b4;
  if (_0x2ebc26.indexOf("https://lzdz1-isv.isvjcloud.com") > -1) {
    _0x5798db.Referer = "https://lzdz1-isv.isvjcloud.com/m/1000282702/" + $.activityId + "/?shareUuid=" + $.shareUuid;
    _0x5798db.Cookie = "" + (proenv_0xade0f6 && proenv_0xade0f6 || "") + ($.Pin && "AUTH_C_USER=" + $.Pin + ";" || "") + proenv_0x1f5a2e;
  }
  if (["getShopOpenCardInfo", "bindWithVender"].includes(_0x4a928c)) {
    const _0x4de40c = {
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
      Cookie: proenv_0x22037f
    };
    _0x5798db = _0x4de40c;
  }
  if (_0x21801f.toLowerCase().includes("get")) {
    const _0x3d7c63 = {
      url: _0x2ebc26,
      method: _0x21801f,
      headers: _0x5798db,
      timeout: 30000
    };
    return _0x3d7c63;
  } else {
    if (_0x21801f.toLowerCase().includes("post")) {
      const _0x5a6f4d = {
        url: _0x2ebc26,
        method: _0x21801f,
        headers: _0x5798db,
        body: _0xafd2c0,
        timeout: 30000
      };
      return _0x5a6f4d;
    }
  }
}
function proenv_0x26ef52(_0x162a03) {
  if (_0x162a03.headers["set-cookie"]) {
    proenv_0x22037f = originCookie + ";";
    for (let _0x18cb51 of _0x162a03.headers["set-cookie"]) {
      proenv_0x407867[_0x18cb51.split(";")[0].substr(0, _0x18cb51.split(";")[0].indexOf("="))] = _0x18cb51.split(";")[0].substr(_0x18cb51.split(";")[0].indexOf("=") + 1);
    }
    for (const _0x5e2272 of Object.keys(proenv_0x407867)) {
      proenv_0x22037f += _0x5e2272 + "=" + proenv_0x407867[_0x5e2272] + ";";
    }
    proenv_0x1f5a2e = proenv_0x22037f;
  }
}
async function proenv_0x5a7e9d() {
  try {
    let _0x132d7a = ["jdapp;android;12.2.0;;;M/5.0;appBuild/2397;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0x2c7daa(proenv_0x4e6ec3.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0x2c7daa(proenv_0x4e6ec3.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jd.jdlite%22%7D;Mozilla/5.0(Linux;Android10;BKL-AL20Build/HUAWEIBKL-AL20;wv)AppleWebKit/537.36(KHTML,likeGecko)Version/4.0Chrome/89.0.4389.72MQQBrowser/6.2TBS/046249MobileSafari/537.36", "jdapp;android;12.2.0;;;M/5.0;appBuild/2397;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0x2c7daa(proenv_0x4e6ec3.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0x2c7daa(proenv_0x4e6ec3.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jd.jdlite%22%7D;Mozilla/5.0(Linux;U;Android10;zh-CN;TAS-AL00Build/HUAWEITAS-AL00)AppleWebKit/537.36(KHTML,likeGecko)Version/4.0Chrome/78.0.3904.108UCBrowser/13.1.8.1098MobileSafari/537.36", "jdapp;android;12.2.0;;;M/5.0;appBuild/2397;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0x2c7daa(proenv_0x4e6ec3.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0x2c7daa(proenv_0x4e6ec3.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jd.jdlite%22%7D;Mozilla/5.0(Linux;Android10;MI9Build/QKQ1.190825.002;wv)AppleWebKit/537.36(KHTML,likeGecko)Version/4.0Chrome/77.0.3865.120MQQBrowser/6.2TBS/045415MobileSafari/537.36", "jdapp;android;12.0.8;;;M/5.0;appBuild/22709;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0x2c7daa(proenv_0x4e6ec3.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0x2c7daa(proenv_0x4e6ec3.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 9; ONEPLUS A3000 Build/PKQ1.181203.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046247 Mobile Safari/537.36", "jdapp;android;12.0.8;;;M/5.0;appBuild/22709;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0x2c7daa(proenv_0x4e6ec3.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0x2c7daa(proenv_0x4e6ec3.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 12; Redmi Note 9 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36", "jdapp;android;12.0.8;;;M/5.0;appBuild/22709;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0x2c7daa(proenv_0x4e6ec3.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0x2c7daa(proenv_0x4e6ec3.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 11; RMX2001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36", "jdapp;android;12.0.8;;;M/5.0;appBuild/22709;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0x2c7daa(proenv_0x4e6ec3.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0x2c7daa(proenv_0x4e6ec3.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 13; M2012K11C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Mobile Safari/537.36", "jdapp;android;12.0.8;;;M/5.0;appBuild/22709;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0x2c7daa(proenv_0x4e6ec3.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0x2c7daa(proenv_0x4e6ec3.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 13) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.5414.117 Mobile Safari/537.36", "jdapp;android;12.0.8;;;M/5.0;appBuild/22709;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0x2c7daa(proenv_0x4e6ec3.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0x2c7daa(proenv_0x4e6ec3.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 10; Redmi 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.28 Mobile Safari/537.36", "jdapp;android;12.0.8;;;M/5.0;appBuild/22709;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0x2c7daa(proenv_0x4e6ec3.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0x2c7daa(proenv_0x4e6ec3.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 10; Redmi Note 7) AppleWebKit/537.36 (KHTML, like Gecko) Brave Chrome/89.0.4389.86 Mobile Safari/537.36", "jdapp;android;12.0.8;;;M/5.0;appBuild/22709;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0x2c7daa(proenv_0x4e6ec3.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0x2c7daa(proenv_0x4e6ec3.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 9; MI 9) AppleWebKit/537.36 (KHTML, like Gecko) Brave Chrome/88.0.4324.96 Mobile Safari/537.36", "jdapp;android;12.0.8;;;M/5.0;appBuild/22709;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0x2c7daa(proenv_0x4e6ec3.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0x2c7daa(proenv_0x4e6ec3.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 8.0.0; Pixel C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.111 Safari/537.36", "jdapp;android;12.0.8;;;M/5.0;appBuild/22709;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0x2c7daa(proenv_0x4e6ec3.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0x2c7daa(proenv_0x4e6ec3.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 8.1.0; OPPO R11; Build/OPM1.171019.011) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.4280.141 Mobile Safari/537.36 Firefox-KiToBrowser/115.0"];
    let _0x2db506 = parseInt(Math.random() * _0x132d7a.length);
    let _0x114d61 = _0x132d7a[_0x2db506];
    $.UA = _0x114d61;
    return _0x114d61;
  } catch (_0x3a89b3) {
    console.log(_0x3a89b3);
  }
}
function proenv_0x2c7daa(_0x52c0dd, _0x855883) {
  _0x573f5c = _0x573f5c || "KLMNOPQRSTABCDEFGHIJUVWXYZabcdopqrstuvwxefghijklmnyz0123456789+/";
  var _0x21bd6b = "";
  var _0x3a221c, _0x11d865, _0x2d7003, _0x399894, _0x268655, _0x3f217d;
  var _0x3136ad = 0;
  _0x52c0dd = _0x52c0dd.replace(/rn/g, "n");
  var _0x573f5c = "";
  for (var _0x21bd6b = 0; _0x21bd6b < _0x52c0dd.length; _0x21bd6b++) {
    {
      var _0xb63474 = _0x52c0dd.charCodeAt(_0x21bd6b);
      if (_0xb63474 < 128) {
        _0x573f5c += String.fromCharCode(_0xb63474);
      } else {
        _0xb63474 > 127 && _0xb63474 < 2048 ? (_0x573f5c += String.fromCharCode(_0xb63474 >> 6 | 192), _0x573f5c += String.fromCharCode(_0xb63474 & 63 | 128)) : (_0x573f5c += String.fromCharCode(_0xb63474 >> 12 | 224), _0x573f5c += String.fromCharCode(_0xb63474 >> 6 & 63 | 128), _0x573f5c += String.fromCharCode(_0xb63474 & 63 | 128));
      }
    }
  }
  while (_0x3136ad < _0x52c0dd.length) {
    _0xb63474 = _0x52c0dd.charCodeAt(_0x3136ad++);
    _0x3a221c = _0x52c0dd.charCodeAt(_0x3136ad++);
    _0x11d865 = _0x52c0dd.charCodeAt(_0x3136ad++);
    _0x2d7003 = _0xb63474 >> 2;
    _0x399894 = (_0xb63474 & 3) << 4 | _0x3a221c >> 4;
    _0x268655 = (_0x3a221c & 15) << 2 | _0x11d865 >> 6;
    _0x3f217d = _0x11d865 & 63;
    if (isNaN(_0x3a221c)) {
      _0x268655 = _0x3f217d = 64;
    } else {
      isNaN(_0x11d865) && (_0x3f217d = 64);
    }
    _0x21bd6b = _0x21bd6b + _0x573f5c.charAt(_0x2d7003) + _0x573f5c.charAt(_0x399894) + _0x573f5c.charAt(_0x268655) + _0x573f5c.charAt(_0x3f217d);
  }
  while (_0x21bd6b.length % 4 > 1) {
    _0x21bd6b += "=";
  }
  return _0x21bd6b;
}
function proenv_0x2bfb3a(_0x21e63f) {
  _0x21e63f = _0x21e63f || 32;
  let _0x401790 = "abcdef0123456789",
    _0x262a7b = _0x401790.length,
    _0x37d9b1 = "";
  for (i = 0; i < _0x21e63f; i++) {
    _0x37d9b1 += _0x401790.charAt(Math.floor(Math.random() * _0x262a7b));
  }
  return _0x37d9b1;
}
function proenv_0x5613a0() {
  let _0x220cbf = "0123456789";
  let _0x31d840 = 13;
  let _0x3dd5f2 = "";
  for (; _0x31d840--;) {
    _0x3dd5f2 += _0x220cbf[Math.random() * _0x220cbf.length | 0];
  }
  return (_0x3dd5f2 + Date.now()).slice(0, 16);
}
function proenv_0x25db07(_0x41655e, _0x14c997) {
  return new Promise(_0x4e3340 => {
    const _0x809f19 = {
      "User-Agent": proenv_0x3b5872
    };
    const _0x5e75d1 = {
      url: proenv_0x176c65 + "?venderid=" + _0x41655e + "&activityId=" + _0x14c997,
      headers: _0x809f19,
      timeout: 60000
    };
    $.get(_0x5e75d1, (_0x42f061, _0x39ed35, _0x4a8fd7) => {
      try {
        if (_0x42f061) {
          console.log("请求失败，请检查网路");
        } else {
          _0x4a8fd7 = _0x4a8fd7;
        }
      } catch (_0x368417) {} finally {
        _0x4e3340(_0x4a8fd7 || "");
      }
    });
  });
}
function proenv_0x22ade9(_0x39348f = +new Date()) {
  var _0x49122e = new Date(_0x39348f + 28800000);
  return _0x49122e.toJSON().substr(0, 19).replace("T", " ").replace(/-/g, ".");
}
function proenv_0x5e4d47(_0x18c224) {
  return new Promise(_0x5c6214 => {
    const _0x1d47db = {
      "User-Agent": proenv_0xe51d39
    };
    const _0xbe907d = {
      url: "http://hz.feverrun.top:99/share/get/author?flag=lzdz1" + _0x18c224,
      headers: _0x1d47db,
      timeout: 60000
    };
    $.get(_0xbe907d, (_0x40d057, _0x2880a3, _0x455fc8) => {
      try {
        if (_0x40d057) {
          console.log("请求失败，请检查网路");
        } else {
          try {
            _0x455fc8 = _0x455fc8;
          } catch (_0x4935e9) {
            _0x455fc8 = "";
          }
        }
      } catch (_0x4be33d) {} finally {
        _0x5c6214(_0x455fc8 || "");
      }
    });
  });
}
function proenv_0x3fa94a() {
  return new Promise(_0x1b3466 => {
    const _0x10f856 = {
      "User-Agent": proenv_0xe51d39
    };
    const _0x3f2558 = {
      url: proenv_0x1b55bd + "?type=lzdz1",
      headers: _0x10f856,
      timeout: 60000
    };
    $.get(_0x3f2558, (_0xd0142a, _0x19367a, _0x17e0c2) => {
      try {
        if (_0xd0142a) {
          console.log("请求失败，请检查网路");
        } else {
          try {
            _0x17e0c2 = JSON.parse(_0x17e0c2);
            if (_0x17e0c2.code == 0) {
              _0x17e0c2 = _0x17e0c2.data;
            } else {
              _0x17e0c2 = "";
            }
          } catch (_0x57b16b) {
            _0x17e0c2 = "";
          }
        }
      } catch (_0x3fcb15) {} finally {
        _0x1b3466(_0x17e0c2 || "");
      }
    });
  });
}
function proenv_0x1f918e(_0x55f298, _0x3f580d) {
  return Math.floor(Math.random() * (_0x3f580d - _0x55f298)) + _0x55f298;
}
async function proenv_0x55620c(_0x496647, _0x55d4c7) {
  return new Promise(_0x466220 => {
    const _0x2ca058 = {
      "User-Agent": "jdapp;android;11.4.1;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 10; PCCM0o410 Build/QKQ1.191021.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046011 Mobile Safari/537.36"
    };
    const _0x3c6d4f = {
      url: "http://hz.feverrun.top:99/share/card/getH5st410",
      body: "bid=" + _0x496647 + "&body=" + JSON.stringify(_0x55d4c7),
      headers: _0x2ca058,
      timeout: 60000
    };
    $.post(_0x3c6d4f, (_0x5c500b, _0x140f30, _0x36c8ec) => {
      try {
        if (_0x5c500b) {
          console.log("请求失败，请检查网路");
          console.log(_0x5c500b);
        } else {
          try {
            _0x36c8ec = _0x36c8ec;
          } catch (_0x276b48) {
            _0x36c8ec = "";
          }
        }
      } catch (_0x251541) {} finally {
        _0x466220(_0x36c8ec || "");
      }
    });
  });
}
async function proenv_0x36a2df(_0x594b5e, _0x1fc150) {
  await $.wait(parseInt(Math.random() * 350 + 300, 10));
  return new Promise(_0x19ef8c => {
    const _0x546f8d = {
      url: "http://hz.feverrun.top:99/share/sub/subIsvToken",
      body: "pin=" + encodeURIComponent(_0x594b5e) + "&token=" + _0x1fc150,
      headers: {},
      timeout: 60000
    };
    _0x546f8d.headers["User-Agent"] = "jdapp;android;11.5.0;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 10; PCCM0o Build/QKQ1.191021.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046011 Mobile Safari/537.36";
    $.post(_0x546f8d, (_0x5db82d, _0x57e4f3, _0x2adf76) => {
      try {
        if (_0x5db82d) {
          console.log("缓存token失败2");
          _0x2adf76 = "";
        } else {
          try {
            _0x2adf76 = _0x2adf76;
          } catch (_0x27c06c) {
            _0x2adf76 = "";
          }
        }
      } catch (_0x47086a) {
        _0x2adf76 = "";
      } finally {
        _0x19ef8c(_0x2adf76 || "");
      }
    });
  });
}
async function proenv_0xd791ae(_0x2c9c00) {
  await $.wait(parseInt(Math.random() * 350 + 300, 10));
  if ($.client) {
    return new Promise(async _0x25c466 => {
      data = await $.client.get(_0x2c9c00);
      _0x25c466(data || "");
    });
  } else {
    return new Promise(_0x525b2c => {
      const _0x5bbfda = {
        url: "http://hz.feverrun.top:99/share/get/getIsvToken",
        body: "pin=" + encodeURIComponent(_0x2c9c00),
        headers: {},
        timeout: 60000
      };
      _0x5bbfda.headers["User-Agent"] = "jdapp;android;11.5.0;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 10; PCCM0o Build/QKQ1.191021.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046011 Mobile Safari/537.36";
      $.post(_0x5bbfda, (_0xb45ef6, _0x1e97d4, _0x2e0447) => {
        try {
          if (_0xb45ef6) {
            console.log("缓存token失败1");
            _0x2e0447 = "";
          } else {
            try {
              _0x2e0447 = _0x2e0447;
            } catch (_0x45b577) {
              _0x2e0447 = "";
            }
          }
        } catch (_0x1d7661) {
          _0x2e0447 = "";
        } finally {
          _0x525b2c(_0x2e0447 || "");
        }
      });
    });
  }
}
async function proenv_0x39d552() {
  if ($.client) {
    return new Promise(async _0x24e209 => {
      $token = await proenv_0xd791ae(encodeURIComponent($.UserName));
      if ($token != "") {
        console.log("读取缓存token成功");
        $.Token = $token;
      } else {
        for (let _0x2e2210 = 0; _0x2e2210 < 1; _0x2e2210++) {
          await proenv_0x536417("isvObfuscator");
          if ($.Token != "" && $.Token != undefined) {
            console.log("缓存token成功");
            await $.client.set(encodeURIComponent($.UserName), $.Token);
            await $.client.expire(encodeURIComponent($.UserName), 1740);
            break;
          } else {
            console.log("缓存token失败" + (_0x2e2210 + 1));
          }
          if ($.isvObfuscator.indexOf("参数异常") > -1) {
            break;
          }
        }
      }
      _0x24e209();
    });
  } else {
    return new Promise(async _0x427b6c => {
      $token = await proenv_0xd791ae(encodeURIComponent($.UserName));
      if ($token != "") {
        console.log("读取缓存token成功");
        $.Token = $token;
      } else {
        for (let _0x3232cd = 0; _0x3232cd < 1; _0x3232cd++) {
          await proenv_0x536417("isvObfuscator");
          if ($.Token != "" && $.Token != undefined) {
            console.log("缓存token成功");
            await proenv_0x36a2df(encodeURIComponent($.UserName), $.Token);
            break;
          } else {
            console.log("缓存token失败" + (_0x3232cd + 1));
          }
          if ($.isvObfuscator.indexOf("参数异常") > -1) {
            break;
          }
        }
      }
      _0x427b6c();
    });
  }
}
async function proenv_0x3db98a() {
  return new Promise(async _0x5c4f00 => {
    try {
      await $.wait(parseInt(Math.random() * 350 + 250, 10));
      let _0x2d4868 = await proenv_0x152dac();
      if (_0x2d4868 != "") {
        $.getIpStatus = true;
        console.log("当前: " + _0x2d4868);
        ips = _0x2d4868.split(":");
        $.ip = ips[0];
        $.ipo = ips[1];
        await $.wait(parseInt(Math.random() * 350 + 250, 10));
      } else {
        $.getIpStatus = false;
        console.log("代理获取失败");
      }
    } catch (_0x5dcd29) {
      $.getIpStatus = false;
      console.log("代理获取失败");
    }
    if ($.getIpStatus == false) {
      try {
        await $.wait(parseInt(Math.random() * 350 + 250, 10));
        let _0x4b0f3e = await proenv_0x152dac();
        if (_0x4b0f3e != "") {
          $.getIpStatus = true;
          console.log("当前: " + _0x4b0f3e);
          ips = _0x4b0f3e.split(":");
          $.ip = ips[0];
          $.ipo = ips[1];
          await $.wait(parseInt(Math.random() * 350 + 250, 10));
        } else {
          $.getIpStatus = false;
          console.log("代理获取失败");
        }
      } catch (_0x3e8f67) {
        $.getIpStatus = false;
        console.log("代理获取失败");
      }
    }
    if ($.getIpStatus == false) {
      console.log("代理获取失败，跳过此次执行！");
      _0x5c4f00(false);
    } else {
      _0x5c4f00(true);
    }
  });
}
function proenv_0x152dac() {
  try {
    return new Promise(_0x261cf6 => {
      const _0x31d12c = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/538.38"
      };
      const _0x37bb82 = {
        url: your_proxy_url,
        headers: _0x31d12c,
        timeout: 30000
      };
      $.get(_0x37bb82, (_0x113ed4, _0x3f2005, _0x527ecf) => {
        try {
          if (_0x113ed4) {
            console.log("获取Ip失败");
          } else {
            try {
              if (_0x527ecf.indexOf("\r\n") > -1) {
                _0x527ecf = _0x527ecf.split("\r\n");
                if (_0x527ecf.length >= 1) {
                  _0x527ecf = _0x527ecf[0];
                }
              } else {
                if (_0x527ecf.indexOf("\n") > -1) {
                  _0x527ecf = _0x527ecf.split("\n");
                  if (_0x527ecf.length >= 1) {
                    _0x527ecf = _0x527ecf[0];
                  }
                } else {
                  if (_0x527ecf.indexOf("\r") > -1) {
                    _0x527ecf = _0x527ecf.split("\r");
                    if (_0x527ecf.length >= 1) {
                      _0x527ecf = _0x527ecf[0];
                    }
                  } else {
                    if (_0x527ecf.indexOf("\t") > -1) {
                      _0x527ecf = _0x527ecf.split("\t");
                      if (_0x527ecf.length >= 1) {
                        _0x527ecf = _0x527ecf[0];
                      }
                    }
                  }
                }
              }
            } catch (_0x110bb9) {
              _0x527ecf = "";
            }
          }
        } catch (_0x500f2a) {} finally {
          _0x261cf6(_0x527ecf || "");
        }
      });
    });
  } catch (_0x3890f6) {
    console.log(_0x3890f6.message);
  }
}
function proenv_0x49d730(_0x18ab18) {
  proenv_0x26ef52(_0x18ab18);
  if (_0x18ab18.status == 200 && _0x18ab18.data) {
    _0x18ab18 = _0x18ab18.data;
    if (typeof _0x18ab18 == "object") {
      return JSON.stringify(_0x18ab18);
    } else {
      return _0x18ab18;
    }
  } else {
    return "";
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