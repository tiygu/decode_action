//Fri Aug 16 2024 08:23:34 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
/*
PRO抽奖机任务

jd_pro_lottery_task_id // 活动ID
jd_pro_lottery_task_opencard // 是否入会，默认不入会

走代理，不然403


cron:1 1 1 1 * jd_pro_lottery_task.js

*/

const $ = new Env("PRO\u62BD\u5956\u673A\u4EFB\u52A1");
var iｉl = "jsjiami.com.v7";
function iii1II(_0x375640, _0x55a865) {
  const _0x508ec8 = Iii11l();
  return iii1II = function (_0x2c6155, _0x35f697) {
    _0x2c6155 = _0x2c6155 - 103;
    let _0x552ea4 = _0x508ec8[_0x2c6155];
    if (iii1II["hiznjY"] === undefined) {
      var _0x427e69 = function (_0x264ff3) {
        const _0x49c67d = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let _0x543b3a = "",
          _0x507af6 = "";
        for (let _0x403418 = 0, _0x2e30ef, _0x522abe, _0x3008a6 = 0; _0x522abe = _0x264ff3["charAt"](_0x3008a6++); ~_0x522abe && (_0x2e30ef = _0x403418 % 4 ? _0x2e30ef * 64 + _0x522abe : _0x522abe, _0x403418++ % 4) ? _0x543b3a += String["fromCharCode"](255 & _0x2e30ef >> (-2 * _0x403418 & 6)) : 0) {
          _0x522abe = _0x49c67d["indexOf"](_0x522abe);
        }
        for (let _0x5e0001 = 0, _0x22e27e = _0x543b3a["length"]; _0x5e0001 < _0x22e27e; _0x5e0001++) {
          _0x507af6 += "%" + ("00" + _0x543b3a["charCodeAt"](_0x5e0001)["toString"](16))["slice"](-2);
        }
        return decodeURIComponent(_0x507af6);
      };
      const _0x5b56a3 = function (_0x4d7c8f, _0x229553) {
        let _0x33f4b0 = [],
          _0x1e93e3 = 0,
          _0x413f47,
          _0x2b84d7 = "";
        _0x4d7c8f = _0x427e69(_0x4d7c8f);
        let _0x539a1d;
        for (_0x539a1d = 0; _0x539a1d < 256; _0x539a1d++) {
          _0x33f4b0[_0x539a1d] = _0x539a1d;
        }
        for (_0x539a1d = 0; _0x539a1d < 256; _0x539a1d++) {
          _0x1e93e3 = (_0x1e93e3 + _0x33f4b0[_0x539a1d] + _0x229553["charCodeAt"](_0x539a1d % _0x229553["length"])) % 256, _0x413f47 = _0x33f4b0[_0x539a1d], _0x33f4b0[_0x539a1d] = _0x33f4b0[_0x1e93e3], _0x33f4b0[_0x1e93e3] = _0x413f47;
        }
        _0x539a1d = 0, _0x1e93e3 = 0;
        for (let _0x21996a = 0; _0x21996a < _0x4d7c8f["length"]; _0x21996a++) {
          _0x539a1d = (_0x539a1d + 1) % 256, _0x1e93e3 = (_0x1e93e3 + _0x33f4b0[_0x539a1d]) % 256, _0x413f47 = _0x33f4b0[_0x539a1d], _0x33f4b0[_0x539a1d] = _0x33f4b0[_0x1e93e3], _0x33f4b0[_0x1e93e3] = _0x413f47, _0x2b84d7 += String["fromCharCode"](_0x4d7c8f["charCodeAt"](_0x21996a) ^ _0x33f4b0[(_0x33f4b0[_0x539a1d] + _0x33f4b0[_0x1e93e3]) % 256]);
        }
        return _0x2b84d7;
      };
      iii1II["KvBkum"] = _0x5b56a3, _0x375640 = arguments, iii1II["hiznjY"] = !![];
    }
    const _0x1e577f = _0x508ec8[0],
      _0x44e731 = _0x2c6155 + _0x1e577f,
      _0x43002d = _0x375640[_0x44e731];
    return !_0x43002d ? (iii1II["NkuxXf"] === undefined && (iii1II["NkuxXf"] = !![]), _0x552ea4 = iii1II["KvBkum"](_0x552ea4, _0x35f697), _0x375640[_0x44e731] = _0x552ea4) : _0x552ea4 = _0x43002d, _0x552ea4;
  }, iii1II(_0x375640, _0x55a865);
}
const lIli1i = iii1II;
(function (liil11, iiillI, l1l111, l1iIII, llI1I1, IlIlil, lIli1I) {
  return liil11 = liil11 >> 4, IlIlil = "hs", lIli1I = "hs", function (II1il, lllI11, I1lIll, I1lIli, II1ii) {
    const iiill1 = iii1II;
    I1lIli = "tfi", IlIlil = I1lIli + IlIlil, II1ii = "up", lIli1I += II1ii, IlIlil = I1lIll(IlIlil), lIli1I = I1lIll(lIli1I), I1lIll = 0;
    const IIIIII = II1il();
    while (!![] && --l1iIII + lllI11) {
      try {
        I1lIli = -parseInt(iiill1(157, "(m6n")) / 1 + -parseInt(iiill1(392, "gRCT")) / 2 * (-parseInt(iiill1(343, "nAI)")) / 3) + parseInt(iiill1(206, "bN#N")) / 4 + parseInt(iiill1(135, "PyJ]")) / 5 * (parseInt(iiill1(172, "70L4")) / 6) + -parseInt(iiill1(299, "gRCT")) / 7 + -parseInt(iiill1(445, "%D34")) / 8 + parseInt(iiill1(382, "r[XV")) / 9;
      } catch (lillII) {
        I1lIli = I1lIll;
      } finally {
        II1ii = IIIIII[IlIlil]();
        if (liil11 <= l1iIII) I1lIll ? llI1I1 ? I1lIli = II1ii : llI1I1 = II1ii : I1lIll = II1ii;else {
          if (I1lIll == llI1I1["replace"](/[qnKJRULSINOQMTPB=]/g, "")) {
            if (I1lIli === lllI11) {
              IIIIII["un" + IlIlil](II1ii);
              break;
            }
            IIIIII[lIli1I](II1ii);
          }
        }
      }
    }
  }(l1l111, iiillI, function (ii1ilI, lI1ll1, iIiI1, liil1I, i11ii1, IlIliI, l1iII1) {
    return lI1ll1 = "split", ii1ilI = arguments[0], ii1ilI = ii1ilI[lI1ll1](""), iIiI1 = `\x72\x65\x76\x65\x72\x73\x65`, ii1ilI = ii1ilI[iIiI1]("v"), liil1I = `\x6a\x6f\x69\x6e`, (1498461, ii1ilI[liil1I](""));
  });
}(3024, 896289, Iii11l, 191), Iii11l) && (iｉl = 15351);
const jdCookie = require("./jdCookie"),
  notify = require(lIli1i(199, "OiI!")),
  common = require(lIli1i(335, "6XhC")),
  {
    H5st
  } = require(lIli1i(201, "%BEl"));
console["log"](""), console[lIli1i(146, "7OG1")](lIli1i(453, "p[rg") + $[lIli1i(321, "eIGj")] + lIli1i(296, "quI*")), console[lIli1i(194, "UoV9")]("jd_pro_lottery_task_id // \u6D3B\u52A8ID"), console[lIli1i(233, "PyJ]")](lIli1i(306, "(iU7")), console["log"](lIli1i(453, "p[rg") + $["name"] + "\u63D0\u793A\u7ED3\u675F=========="), console[lIli1i(234, "U])J")]("");
const configCode = process["env"][lIli1i(429, "%D34")] || "",
  joinMember = process["env"][lIli1i(253, "70L4")] === lIli1i(169, "4WMX"),
  isNotify = ![];
let cookie = "";
function Iii11l() {
  const lI1lil = function () {
    return [...[iｉl, "qIjOQsjTNJiKaKRmUiq.coSKmL.Mv7PUPBQnBRNR==", "FSoqEuylWOtcO8kDEJaWWOa", "W6tdOw/cH2rFCq", "jSkrwuD5lSogWQJdSSkEnSo1W6CXnbDd", "W4Ppm0HNqgFcUZu", "W4mty0VcNSoTASov", "D3jsWRhdSqZdUSoz", "b8oczmkfiaVcVcFcSSkSpb9zmmkKsLy", "W5zpoK9m", "WOxcIxxdMmoe", "E8okCfSO", "ghxdRCkcaKa", "W5yLW4LWWRG", "W6xcOCotW4lcPSopWPO", "W5i+b8ooqmoGW5WY", "WPrdzLOkwJ/cPMe", "W4LzWQJdTCkYwCo9BmoNW4pdPW", "W4VcVmosWOldIq", "W6m/W70", "fmoGhG", "dCoiDmk8lrRcNJhcSSkSlXTMi8k/tuzkW5q", "WOBdHCokbNK9W4qXpq", "jSkrwuD5lSodWQZdTCk6hmoVW6GO", "ASkZjmksW7O", "W7zAW5BcQ8ovW7FcICowvmkdrSozjtC", "4PI1CEIUGUweS+wUG+s6Now+PEIMNUEAL+EmQEwGTUwpSEMgLowtRUweUoI9TUIHH+IfMUADRG", "W7GWbq", "yCknpSkWW58", "EJv0WO7dQq", "W4tcV8oVWOVdGdlcUmkxW69Zu01GWQe", "oSopWRLleq", "W5FcRmo3WRtdPG", "kSkex8kW", "W53LV4/LJ5y", "5lQs5yIF5Awy6lsjWOOT", "rwBcGCohra", "WRzFnCkMrG", "4PYOlUADR+IcTUAUO+EGPEImVUwmIoA0HEwkOos/Q+AaSa", "W41AwI5qWRD8fCkSgsfqi8krFCoyWRP+WR5DW6yBoK8ysCklra", "W5H8cW", "W4GVnSo9qa", "WRZcHuddTmoOW6lcImkAW6W3maRcLhNdKSkubez7W4CaWRLzWQjtyq", "cmkNfsjdW6BdKSoxhG", "WPJcRMC", "WQXigmkCBGmCA8kqumkOF1rGW67dOWa", "W4nFWQe", "W5Scba", "WO3cPNhdKCoaW5FcI8kZW5eC", "5Rsc5yMI5BgA5z+mWRK", "bSoczW", "AdOQkq", "Cmk5WOtdVSo7", "h8oBb0JdLx9SCq", "5PEZ5BUT5lIq5yIW5yot5A+P5lInsq", "pZuyW4JdPKFcQYaU", "WPldIxCXWQ7cKZq", "W7FcSSo+gmkvfCk3", "uSkFpCk+W5i", "A3FcL8o8ySo5WOuiWPDbW5tcHmkeWONcH8o+od0cW4iu", "W7tcP1i7p8o0wq", "W5OJladcLW", "hMhdSmkSiKvYrG", "W5bYgfm", "WPxdG20QWR/cIs/dHCor", "W75tWP1FqG", "bCkejdLp", "W6r8uarq", "bmordvNdNgHICbldI8kXWR7dU8kmfdNcJW", "gNxdSmkV", "ymopWOJdISowhsGWW4T/WRarW6ldUa", "cmo9fSkjW6eegW", "W5lKU7ZOS5W", "5Rwd5yIN5AsV5yMN776t", "W6ldPmkYWPpdHMKmW5HAW4ddRIBcOwVcL8oauG", "WPbeEmoZW7ddSmo2FhpcJCk3pNuwdWNcUazm", "WO/cG8o7FSkb", "W6NcTSoZhCkRbCkEf8o/WQ/cHgHIvKq", "ESk6WOW", "W5Xgl18vA0BdTZBcGeZdRKvklCkg", "W5rjWPL9za", "W7tcUmoLcCkQe8kDe8o/WPW", "5yYn6ys56k6g5PUXW4aQW4GWWQhcOSkjcSkRuG", "d3ldSCkOhG", "ENtcUCocCa", "cmo7zCoDWQGuW6JdJr/cJmk/WQbpW5e", "4P67aEACPUEDMUITPUAZHSkZ", "emkPaq", "W4JdJCkxWPddIa", "W4XFWQJdUSkOvG", "b2NdHqNcGN0Xp8ogWQyEWOO", "WOnSpCkBsq", "W50wt1dcOSoJwmoCgeLOuCkNWQ7cSKxcRGf5WQNcNI1UWOPnxSo+W4fKkNyW5PI85zgw5yE/5l6H772w6BQV6k+05lI+5yw75l+n", "xdLtWO3dL8o6WPvmy8kiu8obW4FcIalcR8k/", "W6yLfa9SWQy", "yKfTWOtdNq", "44k95O+W56E244cK6k+r5yEd6i+M5y6nzqxcN8k/W7Dv", "W5H2aLxcVmkC", "yCoAALivWOu", "d3tdKXpcNfutkCobWOyAWPT8sCkVW4mr", "W4XtWR9CqCoL", "W7RKUPlOSym", "W4amcHK", "WRv6w8kmpSk4WOqypSkdWOr0WQ4", "W6n/WQBdSmo5", "dMhdQSkRfxb+ubi", "WPlcSYy", "WPrawmoN", "sEw+VUwMOU+8OoABQUEcTowgQoADSowrGCo0", "W6pcQ8o4hCk3nmkGaSoU", "W6NcQSoW", "W4jFWQldQCkTvmo5zSoMW6ZdSmovW7aNkrtdJG", "kXn2", "W6BdV8kZWOVdO2G", "E8kWWPJdOSoOaSoU", "eCkPaJXSW6ZdOmoChKnXW4ddG8k9rSkfDG", "WRJcMrBcISkrCSkYAmoOW57dL0pdVXLocLi", "zaC4WPldIa"], ...function () {
      return [...["W4RcTmo4WQVdMJhcTmkk", "W63cT8oZdCk/", "dMOMi8kVpSoJWRDFzM0aW7Pk", "uSoPeZ1PW6xdLmkwogDWW5hdHSk4CmkBAXZcGIK3W4O3", "DsCIiCkdWQu", "W6ZcHCkx", "6lAb5y+j5PEL5Psw", "CtWJoCkMWQq5WRG1WPFcUSoQb8oWhtHO", "FvXZ", "lCkqrCkS", "gmoyBSk1iGO", "i21aW7FcMCohCSk/W74ZW6y", "ymopWOJdISowht8SW4r4WRCq", "W6NcTSoZhCkRbCkBe8o4WPJcQhfLsW", "5AsU5yI+5BAl5OM05yEa", "WRnseSkSBai", "tCkRl8kpW5DaWR3cMq", "W7G+eq51WRaKCeFdP8ogqG", "W5jaWRpdQmokWRisdvCfaeZdUWBcO8oEW60acSk+W45cWRfEW71GELBcVSonhIFdHG", "8jQAUaa", "dCkivmk7W5u", "W7mSeCoxqmoGW5WY", "5AAC5yMC5AAt6lsSW5pdPa", "WO/dI30QWRlcHZFdJG", "EZyZd8kLWQ4vWRqKWOdcUmoYg8oJ", "WQ/ORQFMS5JLPjBOT6NdU+kCJ2hML77LKQtLUzlMLz/MJzm", "WOZdJxO0WPdcGX3dJSorWOdcRGVdOCohvCkmWPK", "WQ1igW", "W4rXWOddHCoe", "BMBcKmo/CmkKW48", "W5DmAGfkWRDx", "dg82fmkKjmoNWRTHFgSSW7K", "CmkCahKZ", "hSo5ofBdVq", "vCkLoW", "WRfsd8kb", "W5axFNxcKq", "W4PrysToWR1Khmk3ldzbomkEs8oyWQi", "WPJdGmo/pwG", "jEs6PEs6GUwjTW", "s8kVk8kfW6TfWOhcIsVcQ8kaWQjyW4e", "jh7dRI/cMq", "CdasWQRdHmoNy8kLW4e", "FZOrWRBdHSowtCkTW5a/W4rahmoCWPhcK1m", "5Pwc5BIg5lU+5yU/5yg45A2u5lQLbW", "EmkVWQRdQ8oL", "W4bnjeLkA27cQshcHqVdGW", "A+ISIEAXV+wKG+I0SgVINj3dRq", "WPPoAmokW73dOCouANpcNSkIouibgq", "4P6TWPFOHR/MNz/OV5NOOkxPG7RLIBhKU57PLApORBji", "W7VdN8kspCorW73dTmo/d8ovfrRdJSo+", "W6HTrWH1", "W67cRCoFiCkq", "W6ftWQ7dN8ki", "W41xphn3", "WODvu8opW7JdQG", "dSocBSkv", "zNzxWRtdJqNdHSojWPdcI3NcHXDF", "W7K+eG", "W6tcHCkmWRr+W7nwW5a", "dmo8zmk3W7PZWQtcLH0", "WOJdLNSSWRxcGG", "WO1axmo2", "W4Chy0G", "t+s7UEIWS++/J+whM8oO", "b2/dP8kYaefyrG0EwaRcNMCN", "mmoOWPjYpxxcIa", "dmoeEa", "xUs6R+IYPq", "W5L8ceFcPmkruuKAWQGunrRcMCoeWQhdHW", "W7S5W7Dc", "WOtdKgWUWO7cQZ/dMmowWQdcQHO", "CSk0WOldVCoWmCoQraq", "umoHWOxdGSos", "yCoAALivWOxcTSkhtZ83WOiniq", "W4zEWQldUCk5", "WPDewmoGWPDeWP/cL8oEW4m", "amoqcKddHwLazG", "zmkWWPZdSmo7aConxGhdJ8kdW4i", "z8oEBLGRWOJcLmkg", "W4TryG", "WORcV0RdV8oP", "WRJcKX/cNCkyzCkHBmoVW7q", "WQCkW6yFdmkHE+w9M+wNREobUUs5Nos7IoI2UowpHW", "WRHkzSolW5u", "dxRdQSk3qar7rH8GxaNcMJLJcmoR", "Eci3WQFdHG", "W5dcSCoYWRFdVsdcVW", "kSo1WPrdbNlcK1jmW7CLFmkPbW", "vmkLomkrW7veWPFcMt7cHmkxWR9fW45qWOlcSG", "W6SIbq", "ubCYomke", "6kcm5AsO5PIA5lUK5OQX6lAO", "W4RcSmooWPhdUa", "W6pcVmoJjmkMfmk8aCo/WRZcKw9vqvldSmkybLy", "DmkWWOZdUmoNmCoIwGO", "C8kNWPNdVSo7kmoUrbZdH8kxW48", "W781kGTRWRO/C3ZdSSobtcNcMCoQW5jQmYNdHCkeca", "ocazW4RdHeNcSti", "cNRdHdBcGLK6omo0WQqnWQz7wCkP", "W6jqW5pcJ8ogW7dcSa", "4P6TWOlMNltOGRZMRP/NOOJLPz7NKQ3cHq", "k0qRg8kx", "W6RNURBKU6VLIOhVV4RMNOZPQ5/LJz/OJ4dLVQPh", "vZKVk8kB", "W5brWRFdP8ol", "W5RcRSoUW6dcMa", "WPjvqCoYWOemW7ZdKComW4FdJX4oW5HFh8kyW5tdTMipW64yWQq", "omo/WQvpda", "is4oW5tdPexcHIKdtmkQdG", "WOpdH3KOWPlcSJpdHSoa", "WPhcQgq", "iSkXBG", "WQrJr0OPW6DxlxldQ8oGBXNcLG", "x8knhhq1", "W6NcTSoZhCkRbCkDhCoFWPZcKNq", "zNzxWRtdJqNdKCovWP/cJh7cHG", "W6eXW7Dc"], ...function () {
        return ["W6LAW5lcUCogW7tcVq", "W55FWQFdSCopWRq0heORdrFdUapcPCoeWRG", "W4Hyg3Xc", "CxXxWPZcTr3dV3TQea", "smkQpuW", "kIGgW5xdRvi", "CmkehuGgpwnPnLNcVeCzWRpcOa", "W4iFbXv0", "r8oUDMms", "Fmk/ogGg", "WPpNUjhMNB7MLR7PLQRVVOK", "W6ThWOJdJmkB", "pdqzW4K", "h8kPcc9PW67dQCoyb2C", "5lUP5yU05OML5yMCWPdcKW", "hmoiBSkukrZcSIy", "W4ZcR8oVWOhdGZtcTG", "eCkPaJXSW6ZdPCoygwDBW5RdJmkK", "ALG2W5hdQMHo", "W5L2h0hcQCktCW", "WRhdT8kcWQldVmowWOC6W7CVqq", "i8kksujMCCkUW6ldP8kVpmkVW6nPnWCuzxeIxSkDW5hdMq", "W6DEW4/cPmoiW6FcH8omrCkixmoVpsDlWOq", "W4z2g1pcUSkqr1KpWOCdkaFcLG", "umk+oCkjW5bf", "W4FcU8oVWQy", "W6ZcOmoq", "W7ZdOmk/WPBdUhKL", "WRvgd8kctaC2AW", "6kcy5AsM5PUC5lI+5OIW6lAH", "WPjpAmoRW7JdQCo2", "W5/cI3Sfhq", "WOldMmolfwaoW7mGnr8", "WQFcGSogFmkfWQhcGmkJiSoyjWNdLCodW6xcULa", "W4/cV8o1WQddMZ0", "fCkDvSklW70", "WR1NWQmxW7ZdOSkMdKC7WO1SFW", "ymoZs0iF", "W7NcH8kgWQ9IW6Dv", "sCoWxHPJW5VdK8otpq", "W5OcbXJcVSo/s8ocWPVcMCoeW7tdP8kU", "W44ugHtdV8oxrmkoWOZcMmkTW5ldICo7W67dOq", "WRzgfCkD", "W7ddOxJcGKi", "hComACke", "W41vWQhdTCkVzCoxBSo3", "W5qOD1BcQa", "W6HqW4y", "f2uSo8kspSoN", "kcaEW4a", "DZWr", "4P2uW4xMNytOG6xMRjFNOlROJRRLJ4VMTyZLIPlKVkNMGAe", "W7uOfCoDFmoLW6aIbSk/WRTEWPJdPW", "zhjsWRtdKH7dK8oDWOxcHa", "txNcGSo0xq", "WRlcLehdPSo6", "W5xcVmosW6tcGCodWPiO", "dxOGjSkjlW", "ag4eW4JcISonWRnJx8kbya", "W7yWbX9xWRqnEG", "W4mDrvdcOmoPDCoZfK55", "W6uJgIrXWROu", "n+wfTUs5LEA7P+MaV+w8PownVG", "WR5uqCofWRe", "5REA5yIF5zkO56Ad77Yt", "W4hNUBhMNyhVVy3KU7FMR4FMLRpNGjlMN4dLK6BcSW", "FZayWQhdJ8obrSkHW5Ck", "W5aifYxdP8oPFq", "W5LbWR9EAmoQpd4", "WQHjh8kfDWi+Fq", "hNldTSkI", "WPBcN1tdU8oH", "CdWG", "WPfKDcrlWRj7", "WO3dJf8dWRe", "BZGUpmkyWRqq", "W71IWQ7dL8kc", "5REb5yQj5AwJ5yIZ77+O", "mJhdKCk9iCoXWP0vWOzEW67dRmkRW5e", "WPjiAa", "ChjuWRq", "W6rrAYPhWRzxvmkxfcvq", "W7xcL8ond8kc", "WPZcT3pdNmoeW4FcRSkMW4WsfwNcOrRdQSkZiJLoW7WNWOiJWO94v2HahKrNnhG", "WPNcQfFdKCoEW4/cVCkNW4S", "eKyQeSkl", "ESoEWOVdM8oxq1zQW5PJWQTwW7VcRWJcNG7dOJuP", "b8oiC8kdlqNcNG", "gCoDBmkzoa", "W7NdRSk4WOldJ34cW5K", "WRRcN8onvSkbWQVcSW", "WPhcOrxcNCkn", "W4DHkepcIW", "W5mmfWW", "kmoYWPD4gG", "WO3dMmoc", "W6LAW4ZcQmocW6hcJmocrSkg", "WOVcR1RdTmob", "WQpcKXZcM8kyzCk8Aq", "mgCbm8ks", "WQhcPmkJWPldG2a4WPj8W6tdRZFcPg7cOCohtSoeWQKZBcBdM8kfbCo3ha", "rxrSWPBdIa", "BSk1WOHzphBcJW1tW7CQE8kGbSoLfa", "W7dcUmoKa8ked8kShmo/", "FZOrWRBdHSowsmkPW5CBW65Ae8of", "WOnmW7BdUmkrWQ1abqOwxW", "WOjieSkDzWGVi8kWAmk7BG", "wmkDmmohFfVdItpcISkfmGze", "W7NcLdu", "k8o/WOrE", "W7tcRuu9mSo2EYyZFSk4W7ZcRblcGCkwhq", "o8oylmkrW64", "WPhMN63NUARLPz/LIzJcMq", "W5ODDfxcVmoPqmova3X/qmk8WQhcHexcTG", "vSk/kmkIW7vaWRC", "FgDuWQxdJfFcUmktWPdcLwtdGa4iWQ4MW6/cRK7cHghcHCoKhW", "W5z2c1VcPSkGF0el"];
      }()];
    }()];
  }();
  Iii11l = function () {
    return lI1lil;
  };
  return Iii11l();
}
;
const cookiesArr = Object[lIli1i(208, "%BEl")](jdCookie)[lIli1i(241, "%D34")](l1lIi1 => jdCookie[l1lIi1])[lIli1i(104, "p[rg")](iIli1l => iIli1l);
!cookiesArr[0] && ($[lIli1i(324, "Z$0b")]($["name"], "\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6Cookie"), process["exit"](1));
!(async () => {
  const IIIII1 = lIli1i,
    i1i1II = {
      "Eddpk": IIIII1(310, "r7oo"),
      "Syxvc": IIIII1(210, "U])J"),
      "dZVpr": "\u26A0 \u8BF7\u5148\u5B9A\u4E49\u5FC5\u8981\u7684\u73AF\u5883\u53D8\u91CF\u540E\u518D\u8FD0\u884C\u811A\u672C",
      "jwBdl": "azpLk",
      "OlzSx": IIIII1(423, "lpuD"),
      "QgLCw": function (liiIIl, iil1iI) {
        return liiIIl + iil1iI;
      },
      "tvlsI": IIIII1(387, "H7hT"),
      "NchCI": IIIII1(256, "J9v#"),
      "DwNPZ": function (IlIllI) {
        return IlIllI();
      }
    };
  if (!configCode) {
    if (i1i1II[IIIII1(238, "gRCT")] === "CWUGg") {
      console[IIIII1(254, "R7Jy")](i1i1II[IIIII1(108, "Ntv&")]);
      return;
    } else i1ill1[IIIII1(443, "J9v#")](IIIII1(252, "y7rm"));
  }
  notify[IIIII1(303, "Eedu")]({
    "title": $[IIIII1(449, "PyJ]")]
  });
  for (let lI1li1 = 0; lI1li1 < cookiesArr[IIIII1(311, "R7Jy")]; lI1li1++) {
    if (i1i1II[IIIII1(418, "nAI)")] === i1i1II[IIIII1(134, "x4EX")]) lilIl1["msg"](i1l1ii["name"], i1i1II["Eddpk"]), i1l1["exit"](1);else {
      $["index"] = i1i1II[IIIII1(200, "(u)q")](lI1li1, 1), cookie = cookiesArr[lI1li1], common["setCookie"](cookie), $[IIIII1(155, "!weL")] = decodeURIComponent(common[IIIII1(356, "lpuD")](cookie, i1i1II[IIIII1(246, "CxC@")])), $[IIIII1(328, "I62)")] = notify["create"]($[IIIII1(333, "Z$0b")], $["UserName"]), $[IIIII1(355, "uu7G")] = "", $["fp"] = randomString(32, "0123456789abcdef"), $[IIIII1(178, "H7hT")] = randomString(90, i1i1II[IIIII1(385, "Eedu")])[IIIII1(159, "(iU7")](), console[IIIII1(260, "Eedu")](IIIII1(415, "r7oo") + $[IIIII1(407, "Eedu")] + "\u3011" + ($[IIIII1(391, "(vnT")] || $[IIIII1(229, "f7FR")]) + "******\n"), $["UA"] = common[IIIII1(368, "(iU7")]($["UserName"]), await i1i1II[IIIII1(110, "Eedu")](Main), common["unsetCookie"]();
      if ($[IIIII1(347, "xXrQ")]) break;
      await $[IIIII1(341, "x4EX")](2000);
    }
  }
  isNotify && notify["getMessage"]() && (await notify[IIIII1(111, "p[rg")]());
})()[lIli1i(437, "T)Db")](iIII1I => $["logErr"](iIII1I))["finally"](() => $[lIli1i(388, "bN#N")]());
async function Main() {
  const I1lIlI = lIli1i,
    ilil1i = {
      "BKArK": function (IiI1l, illlII) {
        return IiI1l === illlII;
      },
      "ijUVW": I1lIlI(217, "%MD^"),
      "vHoYK": I1lIlI(281, "70L4"),
      "WyxcP": function (iIII11) {
        return iIII11();
      },
      "vRMQb": function (IiI1i, llll1) {
        return IiI1i > llll1;
      },
      "yBBpO": "woIcW",
      "ZaYvW": I1lIlI(293, "XNel"),
      "EFoJK": function (lil11l, i1i1Il) {
        return lil11l < i1i1Il;
      },
      "hAFYF": function (I1lIl1, lil11i) {
        return I1lIl1 !== lil11i;
      },
      "kXWKL": function (IlIIl) {
        return IlIIl();
      }
    },
    IlIIi = await common[I1lIlI(244, "CxC@")](cookie);
  if (!IlIIi && typeof IlIIi === ilil1i[I1lIlI(425, "CxC@")]) {
    console["log"](I1lIlI(338, "70L4"));
    return;
  }
  try {
    if (I1lIlI(279, "r7oo") === ilil1i[I1lIlI(184, "y7rm")]) IiiIl1["log"]("\u9886\u53D6" + lIIil1[I1lIlI(127, "xXrQ")] + "\u5956\u52B1\u6210\u529F" + (IIli1[I1lIlI(406, "Htna")] ? ": " + II1liI[I1lIlI(372, "gRCT")] + "\u4EAC\u8C46" : ""));else {
      $[I1lIlI(160, "%D34")] = ![], $[I1lIlI(183, "J9v#")] = ![], $[I1lIlI(270, "uu7G")] = ![];
      let i1i1Ii = [],
        lllii = [];
      $[I1lIlI(259, "xXrQ")] = "", await ilil1i["WyxcP"](sendRequestWithRetry);
      if ($[I1lIlI(342, "bN#N")]) return;
      if ($[I1lIlI(218, "FX7V")] && $[I1lIlI(369, "70L4")]?.["moduleBaseInfo"]) {
        if (!$[I1lIlI(431, "Ltjv")]) {
          $[I1lIlI(105, "Ntv&")] = !![];
          $[I1lIlI(209, ")bd$")]["dailyTask"] && $[I1lIlI(451, "T)Db")][I1lIlI(319, "4WMX")][I1lIlI(430, "p[rg")] && $[I1lIlI(288, "OiI!")]["dailyTask"]["taskList"][I1lIlI(432, "7OG1")]((iI11Il, iIII1i) => {
            const ii1ill = I1lIlI;
            if (ii1ill(107, "Htna") === "bwuJd") ilil1i[ii1ill(305, "xXrQ")](IIli1l, 403) && (lili1[ii1ill(271, "Z$0b")] = !![]), lIIii1["log"](ll1i1), IIli1i && (ll1l1[ii1ill(115, "CxC@")] = !![], IllIIi[ii1ill(118, "R7Jy")] && l1ii1[ii1ill(186, "bN#N")][ii1ill(399, "bN#N")](ii1ll));else {
              let il1i11 = "\u7B2C[" + (iIII1i + 1) + ii1ill(435, "(iU7") + iI11Il[ii1ill(257, "6XhC")] * iI11Il[ii1ill(389, "(u)q")] + ii1ill(396, "nAI)") + iI11Il[ii1ill(202, "Z$0b")] + ii1ill(371, "U])J");
              i1i1Ii[ii1ill(367, "xXrQ")](il1i11);
            }
          });
          if ($[I1lIlI(358, "uu7G")]["memberTask"]) {
            let IlIll1 = "\u5F00\u5361\u6700\u9AD8\u53EF\u83B7\u5F97[" + $[I1lIlI(421, "gRCT")][I1lIlI(195, "7OG1")][I1lIlI(165, "nAI)")]["length"] * $[I1lIlI(375, "nAI)")][I1lIlI(414, "quI*")]["memberList"][0]["rewardQuantity"] + I1lIlI(315, "70L4");
            i1i1Ii["push"](IlIll1);
          }
          if ($["moduleGetActivity"][I1lIlI(203, "nAI)")] && $["moduleGetActivity"][I1lIlI(345, "Z$0b")][I1lIlI(344, "tR*l")]) {
            let IlIII = "\u5B8C\u6210\u5168\u90E8\u4EFB\u52A1\u53EF\u989D\u5916\u83B7\u5F97[" + $["moduleGetActivity"][I1lIlI(116, "6XhC")][I1lIlI(410, "I62)")] + I1lIlI(286, "PyJ]");
            i1i1Ii[I1lIlI(283, "4WMX")](IlIII);
          }
          ilil1i[I1lIlI(331, "nAI)")](i1i1Ii["length"], 0) && (ilil1i[I1lIlI(280, "6XhC")] !== "woIcW" ? IiilIl["push"](I1lIlI(176, "eIGj")) : lllii["push"](I1lIlI(287, "U])J")));
          lllii[I1lIlI(395, "(iU7")](...i1i1Ii);
          const iI11Ii = $[I1lIlI(265, "lpuD")](I1lIlI(140, "Hpno"), $[I1lIlI(442, "uu7G")]),
            iIII1l = $[I1lIlI(402, "PyJ]")](ilil1i[I1lIlI(438, "!weL")], $["endTime"]);
          console["log"](($[I1lIlI(131, "UoV9")] && I1lIlI(163, "UoV9") + $["configName"] + "\n") + "\u5F00\u59CB\u65F6\u95F4\uFF1A" + iI11Ii + I1lIlI(109, ")bd$") + iIII1l + "\n" + (lllii ? "" + lllii["join"]("\n") : "") + "\n");
          const lllil = Date["now"]();
          if ($[I1lIlI(144, "Eedu")] && ilil1i["EFoJK"](lllil, $[I1lIlI(215, "R7Jy")])) {
            console[I1lIlI(359, "xXrQ")](I1lIlI(263, "gRCT") + iI11Ii + I1lIlI(322, "WFVa")), $["runEnd"] = !![];
            return;
          }
          if ($["endTime"] && ilil1i[I1lIlI(309, "(u)q")](lllil, $[I1lIlI(129, "H7hT")])) {
            console[I1lIlI(422, "f7FR")]("\u6D3B\u52A8\u5DF2\u4E8E " + iIII1l + I1lIlI(164, "uu7G")), $[I1lIlI(226, "4WMX")] = !![];
            return;
          }
        }
        await ilil1i["WyxcP"](doDailyTask), $["doTaskrun"] && console[I1lIlI(301, "6XhC")](I1lIlI(376, "70L4")), joinMember && (ilil1i["hAFYF"](I1lIlI(440, "%BEl"), I1lIlI(302, "OiI!")) ? await ilil1i[I1lIlI(170, "J9v#")](memberList) : Illl1I[I1lIlI(274, ")bd$")]["fix"](lliiiI)), await ilil1i[I1lIlI(352, "x4EX")](rewardStatus);
      } else console[I1lIlI(171, "lpuD")](I1lIlI(150, "Ntv&"));
    }
  } catch (I1lIii) {
    console[I1lIlI(366, "gRCT")](I1lIlI(381, "UoV9") + I1lIii);
  }
}
async function doDailyTask() {
  const II1iI = lIli1i,
    IiI1I = {
      "FIZMC": "[\u6D4F\u89C8\u5E97\u94FA]",
      "wGQzM": function (i11ill, IIIIIi) {
        return i11ill == IIIIIi;
      },
      "kUaZK": "[\u6D4F\u89C8\u5546\u54C1]",
      "WNrnm": function (IIIIIl, I1lIil) {
        return IIIIIl(I1lIil);
      },
      "YuSWt": function (IIIl1i) {
        return IIIl1i();
      }
    };
  let illlIl = !![];
  for (let liiII1 of $[II1iI(222, "bN#N")]?.[II1iI(404, "I62)")]?.[II1iI(411, "Htna")] || []) {
    if ("NzaxL" !== II1iI(153, "s*Rl")) i1ilil["log"](II1iI(268, "I62)"));else {
      if (liiII1[II1iI(231, "Eedu")] >= liiII1[II1iI(278, "uu7G")]) continue;else illlIl = ![];
      $[II1iI(127, "xXrQ")] = liiII1["groupType"] == 1 ? IiI1I[II1iI(130, ")bd$")] : IiI1I[II1iI(365, "WFVa")](liiII1[II1iI(323, "Z$0b")], 2) ? IiI1I[II1iI(272, "gRCT")] : "", $[II1iI(284, "tR*l")] = liiII1[II1iI(122, "R7Jy")] || 0, $[II1iI(236, "UoV9")] = liiII1["groupType"], $[II1iI(123, "gRCT")] = liiII1["item"][II1iI(156, "y7rm")], $[II1iI(363, "y7rm")] = ![], await IiI1I[II1iI(106, "%D34")](sendRequest, II1iI(441, "p[rg")), await $["wait"](1000);
      if ($[II1iI(362, "70L4")] || $[II1iI(126, "OiI!")]) break;
    }
  }
  if (illlIl) $["doTaskrun"] = !![];
  if (!$["doTaskrun"] && !$[II1iI(189, "r[XV")] && !$[II1iI(147, "y7rm")]) {
    const lllll = II1iI(230, "XNel")[II1iI(223, "XNel")]("|");
    let i11ili = 0;
    while (!![]) {
      switch (lllll[i11ili++]) {
        case "0":
          $["moduleGetActivity"] = "";
          continue;
        case "1":
          await $[II1iI(141, "xXrQ")](1000);
          continue;
        case "2":
          await sendRequestWithRetry();
          continue;
        case "3":
          await IiI1I[II1iI(227, "PyJ]")](doDailyTask);
          continue;
        case "4":
          await $[II1iI(143, "bN#N")](1000);
          continue;
      }
      break;
    }
  }
}
async function memberList() {
  const llI1II = lIli1i,
    iil1l1 = {
      "FebKU": function (lllli, iiili1) {
        return lllli(iiili1);
      },
      "IWOBM": "moduleGetReward"
    };
  $[llI1II(121, "7OG1")] = [];
  for (let ill11i of $[llI1II(401, "R7Jy")]?.["memberTask"]?.[llI1II(408, "eIGj")] || []) {
    $[llI1II(239, "7OG1")] = ill11i["rewardQuantity"] || 0, $["venderId"] = ill11i[llI1II(188, "OiI!")];
    if ($["cannot_open_list"]["includes"]($[llI1II(114, "bN#N")])) continue;
    switch (ill11i["result"]) {
      case 0:
        $["open_flag"] = await common[llI1II(420, "%BEl")]($["venderId"]);
        if ($[llI1II(219, "XNel")]) {
          $["cannot_open_list"][llI1II(247, "x4EX")]($[llI1II(267, "WFVa")]);
          continue;
        }
        await $[llI1II(394, "eIGj")](1000);
      case 1:
        $[llI1II(276, "4WMX")] = "[" + ill11i[llI1II(221, "(u)q")] + llI1II(248, "!weL"), $["groupType"] = "7", $["itemId"] = $[llI1II(197, "quI*")], await iil1l1[llI1II(250, "s*Rl")](sendRequest, iil1l1["IWOBM"]), await $[llI1II(316, "Hpno")](1000);
        break;
      case 2:
        console["log"]("[" + ill11i[llI1II(158, "%D34")] + "]\u5F00\u5361\u5956\u52B1\u5DF2\u9886\u53D6");
        break;
      case 3:
        console[llI1II(264, "bN#N")]("[" + ill11i["cardName"] + llI1II(161, "4WMX"));
        break;
    }
    if ($[llI1II(398, "%BEl")] || $[llI1II(137, "(vnT")]) break;
  }
}
async function rewardStatus() {
  const lIli1l = lIli1i,
    lllill = {
      "QJfOX": lIli1l(204, "T)Db"),
      "lnABM": function (ill11l, I1lIiI) {
        return ill11l(I1lIiI);
      }
    };
  $[lIli1l(288, "OiI!")] = "", await sendRequestWithRetry();
  if ($[lIli1l(329, "6XhC")]?.["moduleBaseInfo"]?.["rewardStatus"] == 1) {
    const lllili = lllill["QJfOX"][lIli1l(187, "bN#N")]("|");
    let IliiiI = 0;
    while (!![]) {
      switch (lllili[IliiiI++]) {
        case "0":
          $[lIli1l(220, "(iU7")] = lIli1l(211, "r[XV");
          continue;
        case "1":
          await $["wait"](2000);
          continue;
        case "2":
          $["groupType"] = "5";
          continue;
        case "3":
          $[lIli1l(336, "lpuD")] = "1";
          continue;
        case "4":
          await lllill[lIli1l(173, "uu7G")](sendRequest, "moduleGetReward");
          continue;
        case "5":
          $[lIli1l(312, "Htna")] = $[lIli1l(330, "quI*")]?.[lIli1l(237, "FX7V")]?.["rewardFinish"];
          continue;
      }
      break;
    }
  }
}
async function sendRequestWithRetry(Ill11 = 3) {
  const lillIi = lIli1i,
    liiIII = {
      "cZgvx": "\u88AB\u5916\u661F\u4EBA\u6293\u8D70",
      "DutGC": "moduleGetActivity",
      "yiUHB": function (iI11I1, il1i1l) {
        return iI11I1 === il1i1l;
      },
      "sLVqx": "vhYDl"
    };
  let li1i11 = 0;
  while (li1i11 < Ill11) {
    $[lillIi(132, "r[XV")] = "", await sendRequest(liiIII[lillIi(162, "eIGj")]);
    if ($["moduleGetActivity"] && $[lillIi(209, ")bd$")]?.["moduleBaseInfo"]) {
      if (liiIII[lillIi(294, "r7oo")](liiIII[lillIi(136, "Htna")], lillIi(196, "J9v#"))) return $["moduleGetActivity"];else llIll1[lillIi(403, "uu7G")][lillIi(409, "WFVa")](liiIII[lillIi(145, "(iU7")]) && (I11iI1[lillIi(285, "U])J")] = !![]), Illl1i[lillIi(292, "I62)")]("\u9886\u53D6" + lIIiil[lillIi(167, "r7oo")] + lillIi(354, "r[XV") + l1lIii[lillIi(304, "Ltjv")]);
    }
    li1i11++;
  }
  return $["moduleGetActivity"];
}
async function handleResponse(IIIl1I, iil1ii) {
  const illIi1 = lIli1i,
    IlIlli = {
      "mQhhb": illIi1(240, "%D34"),
      "hhjUO": "AWNdy",
      "AWTga": "ogrLT",
      "GQmLp": function (il1i1i, lil111) {
        return il1i1i == lil111;
      },
      "LXRdV": illIi1(436, "lpuD"),
      "wACAg": illIi1(346, "U])J"),
      "srDqC": function (i11ilI, ii1ii1) {
        return i11ilI !== ii1ii1;
      },
      "BKziv": illIi1(190, "quI*"),
      "ROHZU": illIi1(416, "H7hT"),
      "seqXB": illIi1(424, "70L4"),
      "TXRNT": "eVnKc",
      "mgMZz": "MKNGG",
      "XGbTF": illIi1(434, "y7rm")
    };
  try {
    if (IlIlli[illIi1(386, "XNel")] === IlIlli[illIi1(193, "%BEl")]) switch (IIIl1I) {
      case illIi1(282, "WFVa"):
        iil1ii["data"] && iil1ii["success"] == !![] ? "ogrLT" !== IlIlli["AWTga"] ? IiiIli["pro_hot"] = !![] : ($[illIi1(307, "(m6n")] = iil1ii?.[illIi1(277, "R7Jy")], $[illIi1(427, "I62)")] = $[illIi1(313, "Ltjv")]?.[illIi1(139, "Hpno")]?.[illIi1(374, "nAI)")], $[illIi1(228, "!weL")] = $[illIi1(259, "xXrQ")]?.["moduleBaseInfo"]?.["endTime"], $[illIi1(112, "6XhC")] = $["moduleGetActivity"]?.["moduleBaseInfo"]?.["configName"]) : console["log"]("\u2753" + IIIl1I + " " + JSON[illIi1(269, "p[rg")](iil1ii));
        break;
      case illIi1(447, "Z$0b"):
        if (IlIlli["GQmLp"](iil1ii["success"], !![])) console[illIi1(390, "%D34")]("\u5B8C\u6210" + $[illIi1(353, "f7FR")] + illIi1(113, "nAI)") + $["rewardQuantity"] + "\u4EAC\u8C46");else {
          if (IlIlli["LXRdV"] === "KjhgQ") (iil1ii["errorMessage"]["includes"]("\u6D3B\u52A8\u592A\u706B\u7206") || iil1ii["errorMessage"]["includes"](illIi1(128, "T)Db")) || iil1ii["errorMessage"][illIi1(332, "CxC@")](IlIlli[illIi1(360, "T)Db")])) && ($["pro_hot"] = !![]), console[illIi1(125, "!weL")]("\u5B8C\u6210" + $[illIi1(353, "f7FR")] + illIi1(249, "WFVa") + iil1ii["errorMessage"]);else {
            IiilI1[illIi1(171, "lpuD")](IlIlli["mQhhb"]);
            return;
          }
        }
        break;
      case illIi1(397, "4WMX"):
        iil1ii["success"] == !![] ? console[illIi1(260, "Eedu")]("\u9886\u53D6" + $[illIi1(348, "gRCT")] + "\u5956\u52B1\u6210\u529F" + ($[illIi1(151, "f7FR")] ? ": " + $[illIi1(406, "Htna")] + "\u4EAC\u8C46" : "")) : IlIlli["srDqC"](IlIlli[illIi1(405, "tR*l")], IlIlli["ROHZU"]) ? (iil1ii[illIi1(428, "I62)")][illIi1(168, "xXrQ")](IlIlli["seqXB"]) && (IlIlli["TXRNT"] === IlIlli[illIi1(452, "XNel")] ? (delete I1l1I1[illIi1(124, "CxC@")], delete I1i111["headers"][illIi1(180, "70L4")]) : $["pro_hot"] = !![]), console[illIi1(125, "!weL")]("\u9886\u53D6" + $["taskName"] + "\u5956\u52B1\u5931\u8D25: " + iil1ii[illIi1(378, "XNel")])) : iliIII[illIi1(261, "Hpno")]("\u274C \u811A\u672C\u8FD0\u884C\u9047\u5230\u4E86\u9519\u8BEF\n" + iIIl1i);
        break;
    } else return i1III[illIi1(212, "(iU7")];
  } catch (ii1iiI) {
    IlIlli[illIi1(191, "R7Jy")](IlIlli[illIi1(242, "gRCT")], IlIlli["XGbTF"]) ? (IllIII[illIi1(213, "gRCT")] = !![], ii1li[illIi1(450, "7OG1")] && IiiIiI[illIi1(361, "s*Rl")][illIi1(337, "(vnT")](lilii)) : console[illIi1(171, "lpuD")](illIi1(433, "uu7G") + IIIl1I + " \u8BF7\u6C42\u54CD\u5E94 " + (ii1iiI[illIi1(274, ")bd$")] || ii1iiI));
  }
}
async function sendRequest(ilil11) {
  const ii1ili = lIli1i,
    illlI1 = {
      "EnYwh": ii1ili(339, "lpuD"),
      "RRhKC": ii1ili(320, "quI*"),
      "xNvhi": "05b33",
      "mNOmE": ii1ili(439, "eIGj"),
      "OSBVW": ii1ili(444, "FX7V"),
      "sfVJH": ii1ili(326, "#kzd"),
      "DuHTv": ii1ili(291, "Z$0b"),
      "FeYIi": "23615",
      "zUDfD": ii1ili(318, "T)Db"),
      "ioBYj": "yMFJI",
      "EmjsI": ii1ili(417, "4WMX"),
      "voxiC": "keep-alive",
      "qNZgE": ii1ili(182, "J9v#"),
      "tRTVU": ii1ili(185, "tR*l"),
      "humhO": ii1ili(273, "s*Rl"),
      "nzAzl": function (IlIli1, illIiI) {
        return IlIli1 === illIiI;
      },
      "TiDxR": function (lI1lli, Ill1l) {
        return lI1lli !== Ill1l;
      },
      "KcCvR": ii1ili(255, "f7FR"),
      "hynaG": function (llI1Il, ii1iii, i11iil) {
        return llI1Il(ii1iii, i11iil);
      },
      "GhrlA": ii1ili(298, "s*Rl")
    };
  if ($["runEnd"]) return;
  let IIIl11 = "",
    I1lIi1 = null,
    liiIIi = null,
    lil11I = ii1ili(103, "Ntv&"),
    Iliii1 = {},
    iIiIi = {};
  switch (ilil11) {
    case illlI1[ii1ili(290, "r[XV")]:
      lil11I = illlI1["RRhKC"], iIiIi = {
        "appId": illlI1[ii1ili(224, "J9v#")],
        "functionId": illlI1["EnYwh"],
        "appid": "jdchoujiang_h5",
        "clientVersion": common[ii1ili(289, "H7hT")](),
        "client": ii1ili(340, "(u)q"),
        "body": {
          "configCode": configCode,
          "fp": $["fp"],
          "eid": $[ii1ili(149, "nAI)")]
        },
        "version": "3.1",
        "t": !![]
      }, Iliii1 = await H5st[ii1ili(166, "Hpno")](iIiIi), IIIl11 = illlI1[ii1ili(275, "Hpno")], liiIIi = Iliii1[ii1ili(152, "(u)q")];
      break;
    case ii1ili(349, "%D34"):
      iIiIi = {
        "appId": "bbfbd",
        "functionId": ii1ili(216, "Htna"),
        "appid": ii1ili(334, "y7rm"),
        "clientVersion": common[ii1ili(235, "bN#N")](),
        "client": illlI1[ii1ili(383, "70L4")],
        "body": {
          "groupType": $["groupType"],
          "configCode": configCode,
          "itemId": $[ii1ili(393, "uu7G")],
          "fp": $["fp"],
          "eid": $[ii1ili(207, "VHoR")]
        },
        "version": illlI1["sfVJH"],
        "t": !![]
      }, Iliii1 = await H5st["getH5st"](iIiIi), IIIl11 = ii1ili(214, "(u)q"), liiIIi = Iliii1[ii1ili(262, "J9v#")];
      break;
    case illlI1["DuHTv"]:
      iIiIi = {
        "appId": illlI1[ii1ili(373, "Ltjv")],
        "functionId": ii1ili(380, "H7hT"),
        "appid": "jdchoujiang_h5",
        "clientVersion": common[ii1ili(426, "Z$0b")](),
        "client": illlI1[ii1ili(154, "J9v#")],
        "body": {
          "groupType": $["groupType"],
          "configCode": configCode,
          "itemId": $[ii1ili(327, "OiI!")],
          "fp": $["fp"],
          "eid": $[ii1ili(258, "J9v#")]
        },
        "version": illlI1["sfVJH"],
        "t": !![]
      }, Iliii1 = await H5st["getH5st"](iIiIi), IIIl11 = ii1ili(120, "FX7V"), I1lIi1 = Iliii1[ii1ili(295, "Z$0b")];
      break;
    default:
      console[ii1ili(412, "70L4")](ii1ili(300, "H7hT") + ilil11);
      return;
  }
  const iil1ll = {};
  I1lIi1 && (illlI1[ii1ili(245, "%BEl")] !== illlI1["ioBYj"] ? Object["assign"](I1lIi1, iil1ll) : lliiil[ii1ili(174, "lpuD")] = !![]);
  liiIIi && Object[ii1ili(314, "r7oo")](liiIIi, iil1ll);
  const iiilil = {
    "url": IIIl11,
    "method": lil11I,
    "headers": {
      "Accept": ii1ili(350, "T)Db"),
      "Accept-Encoding": illlI1["EmjsI"],
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      "Connection": illlI1[ii1ili(142, "%MD^")],
      "Content-Type": illlI1[ii1ili(181, "Z$0b")],
      "Cookie": cookie,
      "Origin": illlI1["tRTVU"],
      "Referer": illlI1[ii1ili(225, "Htna")],
      "User-Agent": $["UA"]
    },
    "params": liiIIi,
    "data": I1lIi1,
    "timeout": 30000
  };
  illlI1["nzAzl"](lil11I, illlI1[ii1ili(175, "Eedu")]) && (delete iiilil[ii1ili(148, "p[rg")], delete iiilil["headers"][ii1ili(205, "xXrQ")]);
  const iil1li = 1;
  let lillIl = 0,
    iIiIl = null,
    iiilii = ![],
    li1i1i = null;
  while (lillIl < iil1li) {
    if (illlI1[ii1ili(377, "I62)")](ii1ili(413, "J9v#"), ii1ili(251, "xXrQ"))) {
      lillIl > 0 && (await $["wait"](1000));
      const ii1iil = await common[ii1ili(117, "#kzd")](iiilil);
      if (!ii1iil["success"]) {
        if (illlI1[ii1ili(198, "y7rm")](illlI1[ii1ili(243, "(m6n")], ii1ili(384, "Z$0b"))) {
          li1i1i = ii1iil[ii1ili(308, "%D34")], iIiIl = "\uD83D\uDEAB " + ilil11 + ii1ili(379, "FX7V") + ii1iil[ii1ili(297, "4WMX")], lillIl++;
          continue;
        } else l1lIll["assign"](I1l1II, IIli1I);
      }
      if (!ii1iil[ii1ili(192, "Hpno")]) {
        iIiIl = ii1ili(351, "(u)q") + ilil11 + ii1ili(357, "PyJ]"), lillIl++;
        continue;
      }
      await illlI1[ii1ili(364, "Ntv&")](handleResponse, ilil11, ii1iil[ii1ili(179, "(u)q")]), iiilii = ![];
      break;
    } else {
      let llI1Ii = "\u5B8C\u6210\u5168\u90E8\u4EFB\u52A1\u53EF\u989D\u5916\u83B7\u5F97[" + lI1Iil[ii1ili(325, "Eedu")]["moduleBaseInfo"][ii1ili(448, "(u)q")] + ii1ili(400, "s*Rl");
      lilIiI[ii1ili(247, "x4EX")](llI1Ii);
    }
  }
  if (lillIl >= iil1li) {
    li1i1i === 403 && ($[ii1ili(419, "CxC@")] = !![]);
    console["log"](iIiIl);
    if (iiilii) {
      if (ii1ili(370, "UoV9") === illlI1[ii1ili(446, "Ntv&")]) $[ii1ili(213, "gRCT")] = !![], $["message"] && $[ii1ili(274, ")bd$")]["fix"](iIiIl);else {
        let li1i1l = "";
        for (let II1i1 = 0; II1i1 < lliii1; II1i1++) {
          li1i1l += IIlll[liliI[ii1ili(266, "I62)")](ll1lI["random"]() * l1iii[ii1ili(311, "R7Jy")])];
        }
        return li1i1l;
      }
    }
  }
}
function randomString(lI1lll, iIiII = "qwertyuiopasdfghjklzxcvbnm") {
  const liil1i = lIli1i,
    iil1lI = {
      "hfIEf": function (li1i1I, illIii) {
        return li1i1I * illIii;
      }
    };
  let iiiliI = "";
  for (let ii1il1 = 0; ii1il1 < lI1lll; ii1il1++) {
    iiiliI += iIiII[Math["floor"](iil1lI[liil1i(232, "CxC@")](Math["random"](), iIiII[liil1i(133, "CxC@")]))];
  }
  return iiiliI;
}
var version_ = "jsjiami.com.v7";
// prettier-ignore
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
      return "POST" === e && (s = this.post), new Promise((e, i) => {
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
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = new Date().getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`);
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
      if (i) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
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
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
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
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
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
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
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
      for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
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
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
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
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i);
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar(), t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
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
            s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar;
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
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      });else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
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
      }, t => e(t));else if (this.isNode()) {
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
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
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
        let t = ["", "==============\uD83D\uDCE3\u7CFB\u7EDF\u901A\u77E5\uD83D\uDCE3=============="];
        t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator));
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
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}