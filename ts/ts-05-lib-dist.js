(function () {
    app.cfg = app.cfg || {};
    let ctx = global["ctx"] || (global["ctx"] = {});
    ctx.sys = ctx.sys || {};
    ctx.fw = ctx.fw || {};
    ctx.ts = ctx.ts || {};
    ctx.fw.ds = ctx.fw.ds || [];
    ctx.fw.envReady = ctx.fw.envReady || false;
    ctx.fw.isTest = ctx.fw.isTest || false;
    ctx.fw.mth = ctx.fw.mth || null;
    ctx.fw.cfg = ctx.fw.cfg || {};
    app.cache = app.cache || {};
    app.cache.currentApp = app.cache.currentApp || {};
    ctx.fw.curApp = ctx.fw.curApp || app.cache.currentApp;
})();

(function () {
    { // 基础函数库
        function mySleep(ms) {
            let start = Date.now();
            while (Date.now() - start < ms) {
                try {
                    sleep(100);
                } catch (e) {}
            }
        }
        ctx.sys.mySleep = (ms) => {
            return mySleep(ms);
        };

        function isUndef(input) {
            return typeof input == "undefined";
        };
        ctx.sys.isUndef = (input) => {
            return isUndef(input);
        };

        function trim(input) {
            return input.replace(/^\s+|\s+$/gm, '');
        };
        ctx.sys.trim = (input) => {
            return trim(input);
        };

        function rd(max, min) {
            min = min || 0;
            return (max - min) * random() + min
        };
        ctx.sys.rd = (max, min) => {
            return rd(max, min);
        };

        function r(max, min) {
            return Math.round(rd(max, min))
        };
        ctx.sys.r = (max, min) => {
            return r(max, min);
        };

        function padLeft(num, total, pad) {
            total = total || 2;
            return (Array(total).join(pad || 0) + num).slice(-total);
        };
        ctx.sys.padLeft = (num, total, pad) => {
            return padLeft(num, total, pad);
        };

        function fmtDate(obj) {
            let date = new Date(obj);
            let y = 1900 + date.getYear();
            return y + "-" + padLeft(date.getMonth() + 1) + "-" + padLeft(date.getDate());
        };
        ctx.sys.fmtDate = (obj) => {
            return fmtDate(obj);
        };

        function getInt(txt) {
            return parseInt(txt.replace(/[^0-9]/ig, ""));
        };
        ctx.sys.getInt = (txt) => {
            return getInt(txt);
        };

        function getNum(txt) {
            txt = txt + "";
            let num = /-?([1-9]\d*\.\d*|0\.\d+|[1-9]\d*|0)/.exec(txt.replace(",", ""));
            let n = num ? num[0] : "0";
            return parseFloat(n);
        };
        ctx.sys.getNum = (txt) => {
            return getNum(txt);
        };

        function threadsRun(func, time, options) {
            options = options || {};
            time = time || 5000;
            let th = threads.start(function () {
                let start = Date.now();
                let end = false;
                while (Date.now() - start < time && !end) {
                    end = func();
                }
            });
            th.waitFor();
        }
        ctx.sys.threadsRun = (func, time, options) => {
            return threadsRun(func, time, options);
        };

        function awaitFunc(func) {
            let lock = true;
            threads.start(function () {
                func();
                lock = false;
            });
            while (lock) {
                mySleep(100);
            }
        };
        ctx.sys.awaitFunc = (func) => {
            return awaitFunc(func);
        };

        function waitUntil(func, timeout, options) {
            options = options || {};
            timeout = timeout || 30 * 1000;
            options.interval = options.interval || 100;
            let start = Date.now();
            let checkFunc = () => {
                try {
                    return func();
                } catch (e) {}
            };
            while (!checkFunc() && Date.now() - start < timeout) {
                mySleep(options.interval);
            }
        }
        ctx.sys.waitUntil = (func, timeout, options) => {
            return waitUntil(func, timeout, options);
        };

        function retryFunc(func, maxTimes, logFunc) {
            maxTimes = maxTimes || 3;
            for (let i = 0; i < maxTimes; i++) {
                try {
                    func();
                    break;
                } catch (e) {
                    let msg = (i == maxTimes - 1) ? ("达到最大重试次数:" + (i + 1) + "，发生错误：" + e) : "将第" + (i + 1) + "次重试，发生错误：" + e;
                    logFunc && logFunc(msg);
                    sleep(1000);
                }
            }
        };
        ctx.sys.retryFunc = (func, maxTimes, logFunc) => {
            return retryFunc(func, maxTimes, logFunc);
        };
    } { // 控件分析库
        function getParent(c) {
            return c ? c.parent() : null;
        }
        ctx.sys.getParent = (c) => {
            return getParent(c);
        };

        function getChild(c, index) {
            index = index || 0;
            if (c && c.children().length > index) {
                return c.child(index);
            }
            return null;
        }
        ctx.sys.getChild = (c, index) => {
            return getChild(c, index);
        };

        function getBrother(c, index) {
            let p = getParent(c);
            return getChild(p, index || 0);
        }
        ctx.sys.getBrother = (c, index) => {
            return getBrother(c, index);
        };

        function getBrotherR(c, delta) {
            let p = getParent(c);
            return p ? getChild(p, c.indexInParent() + (delta || 1)) : null;
        }
        ctx.sys.getBrotherR = (c, delta) => {
            return getBrotherR(c, delta);
        };

        function getText(ctrl) {
            return ctrl ? (ctrl.text() || ctrl.desc() || "") : "";
        };
        ctx.sys.getText = (ctrl) => {
            return getText(ctrl);
        };

        function getNumCtrl(ctrl) {
            return getNum(getText(ctrl));
        };
        ctx.sys.getNumCtrl = (ctrl) => {
            return getNumCtrl(ctrl);
        };

        function myText(txt, time, options) {
            options = options || {};
            time = time || 100;
            return text(txt).findOne(time) || desc(txt).findOne(time);
        };
        ctx.sys.text = (txt, time, options) => {
            return myText(txt, time, options);
        };

        function myTextAll(txt, time, options) {
            options = options || {};
            time > 0 && text(txt).findOne(time);
            let res = text(txt).find();
            if (res.length == 0) {
                res = desc(txt).find();
            }
            return res;
        };
        ctx.sys.textAll = (txt, time, options) => {
            return myTextAll(txt, time, options);
        };

        function myTextStartsWith(txt, time, options) {
            options = options || {};
            time = time || 100;
            return textStartsWith(txt).findOne(time) || descStartsWith(txt).findOne(time);
        };
        ctx.sys.textStartsWith = (txt, time, options) => {
            return myTextStartsWith(txt, time, options);
        };

        function myTextStartsWithAll(txt, time, options) {
            options = options || {};
            time > 0 && textStartsWith(txt).findOne(time);
            let res = textStartsWith(txt).find();
            if (res.length == 0) {
                res = descStartsWith(txt).find();
            }
            return res;
        };
        ctx.sys.textStartsWithAll = (txt, time, options) => {
            return myTextStartsWithAll(txt, time, options);
        };

        function myTextEndsWith(txt, time, options) {
            options = options || {};
            time = time || 100;
            return textEndsWith(txt).findOne(time) || descEndsWith(txt).findOne(time);
        };
        ctx.sys.textEndsWith = (txt, time, options) => {
            return myTextEndsWith(txt, time, options);
        };

        function myTextEndsWithAll(txt, time, options) {
            options = options || {};
            time > 0 && textEndsWith(txt).findOne(time);
            let res = textEndsWith(txt).find();
            if (res.length == 0) {
                res = descEndsWith(txt).find();
            }
            return res;
        };
        ctx.sys.textEndsWithAll = (txt, time, options) => {
            return myTextEndsWithAll(txt, time, options);
        };

        function myTextContains(txt, time, options) {
            options = options || {};
            time = time || 100;
            return textContains(txt).findOne(time) || descContains(txt).findOne(time);
        };
        ctx.sys.textContains = (txt, time, options) => {
            return myTextContains(txt, time, options);
        };

        function myTextContainsAll(txt, time, options) {
            options = options || {};
            time > 0 && textContains(txt).findOne(time);
            let res = textContains(txt).find();
            if (res.length == 0) {
                res = descContains(txt).find();
            }
            return res;
        };
        ctx.sys.textContainsAll = (txt, time, options) => {
            return myTextContainsAll(txt, time, options);
        };

        function myTextMatches(txt, time, options) {
            options = options || {};
            time = time || 100;
            return textMatches(txt).findOne(time) || descMatches(txt).findOne(time);
        };
        ctx.sys.textMatches = (txt, time, options) => {
            return myTextMatches(txt, time, options);
        };

        function myTextMatchesAll(txt, time, options) {
            options = options || {};
            time > 0 && textMatches(txt).findOne(time);
            let res = textMatches(txt).find();
            if (res.length == 0) {
                res = descMatches(txt).find();
            }
            return res;
        };
        ctx.sys.textMatchesAll = (txt, time, options) => {
            return myTextMatchesAll(txt, time, options);
        };

        function myId(txt, time, options) {
            options = options || {};
            return idEndsWith(txt).findOne(time || 100);
        };
        ctx.sys.id = (txt, time, options) => {
            return myId(txt, time, options);
        };

        function myIds(txt, time, options) {
            options = options || {};
            time > 0 && idEndsWith(txt).findOne(time);
            return idEndsWith(txt).find();
        };
        ctx.sys.ids = (txt, time, options) => {
            return myIds(txt, time, options);
        };

        function myIdMatches(txt, time, options) {
            options = options || {};
            return idMatches(txt).findOne(time || 100);
        };
        ctx.sys.idMatches = (txt, time, options) => {
            return myIdMatches(txt, time, options);
        };

        function myIdMatchesAll(txt, time, options) {
            options = options || {};
            time > 0 && idMatches(txt).findOne(time);
            return idMatches(txt).find();
        };
        ctx.sys.idMatchesAll = (txt, time, options) => {
            return myIdMatchesAll(txt, time, options);
        };

        function myClassName(txt, time, options) {
            options = options || {};
            return classNameEndsWith(txt).findOne(time || 100);
        };
        ctx.sys.className = (txt, time, options) => {
            return myClassName(txt, time, options);
        };

        function myClassNameAll(txt, time, options) {
            options = options || {};
            time > 0 && classNameEndsWith(txt).findOne(time);
            return classNameEndsWith(txt).find();
        };
        ctx.sys.classNameAll = (txt, time, options) => {
            return myClassNameAll(txt, time, options);
        };
    } { // 点击滑动库
        function myClick(ctrl, time) {
            if (ctrl) {
                ctrl.click();
                mySleep(time || 1000);
                return true;
            }
        };
        ctx.sys.click = (ctrl, time) => {
            return myClick(ctrl, time);
        };

        function myClickP(ctrl, time) {
            let p = getParent(ctrl);
            if (p) {
                p.click();
                sleep(time || 1000);
                return true;
            }
        };
        ctx.sys.clickP = (ctrl, time) => {
            return myClickP(ctrl, time);
        };

        function myClickCo(ctrl, time, margin) {
            margin = margin || 200;
            if (ctrl) {
                let b = ctrl.bounds();
                let x = b.centerX();
                let y = b.centerY();
                if (x > 0 && y > margin && x < device.width && y < device.height - margin) {
                    click(x, y);
                    mySleep(time || 1000);
                    return true;
                }
            }
            return false;
        };
        ctx.sys.clickCo = (ctrl, time, margin) => {
            return myClickCo(ctrl, time, margin);
        };

        function myClickPt(point, time, ow, oh) {
            ow = ow || 10;
            oh = oh || 10;
            if (point) {
                click(point.x + ow, point.y + oh);
                mySleep(time || 1000);
                return true;
            }
            return false;
        };
        ctx.sys.clickPt = (point, time, ow, oh) => {
            return myClickPt(point, time, ow, oh);
        };

        function myPressCo(ctrl, time, margin, dur) {
            margin = margin || 200;
            if (ctrl) {
                let b = ctrl.bounds();
                let x = b.centerX();
                let y = b.centerY();
                if (x > 0 && y > margin && x < device.width && y < device.height - margin) {
                    press(x, y, dur || 50);
                    mySleep(time || 1000);
                    return true;
                }
            }
            return false;
        };
        ctx.sys.pressCo = (ctrl, time, margin, dur) => {
            return myPressCo(ctrl, time, margin, dur);
        };

        function myClickT(text, time, slp) {
            return myClick(myText(text, time || 1000), slp);
        }
        ctx.sys.clickT = (text, time, slp) => {
            return myClickT(text, time, slp);
        };

        function myClickTP(text, time, slp) {
            return myClick(getParent(myText(text, time || 1000), slp));
        }
        ctx.sys.clickTP = (text, time, slp) => {
            return myClickTP(text, time, slp);
        };

        function myClickI(id, time, slp) {
            return myClick(myId(id, time || 1000), slp);
        }
        ctx.sys.clickI = (id, time, slp) => {
            return myClickI(id, time, slp);
        };

        function swipeUp(slp, margin, time, options) {
            slp = slp || 0;
            margin = margin || 0.17;
            time = time || 400;
            options = options || {};
            options.divide = options.divide || r(15, 5);
            options.simple = options.simple || false;
            options.endMargin = options.endMargin || rd(0.15, 0.14);

            let cx = device.width;
            let cy = device.height;
            margin = margin > 1 ? margin : (cy * margin);
            margin = margin + cy * rd(options.simple ? 0.01 : 0.07, 0);

            let startX = cx * rd(0.3, 0.65);
            let startY = cy - margin;

            let endX = cx * rd(0.9, 0.45);
            let endY = options.simple ? cy * options.endMargin : Math.min(cy * rd(0.15, 0.45), cy - margin - cy * 0.3); //至少有一定的y高度

            let delX = endX - startX;
            let delY = startY - endY;

            let k = delY / delX / delX;

            let perX = delX / options.divide;

            let points = [
                [startX, startY]
            ];

            for (let i = 0; i < options.divide; i++) {
                let x = startX + (i + 1) * perX;
                let y = k * (x - endX) * (x - endX) + endY;
                points.push([x, y]);
            }

            gesture(time, points);

            let min = slp + 500;
            min = min > 0 ? min : 0;
            let s = options.sleep || r(slp + 3000, min);
            mySleep(s);
        };
        ctx.sys.swipeUp = (slp, margin, time, options) => {
            return swipeUp(slp, margin, time, options);
        };

        function swipeDown(slp, margin, time, options) {
            slp = slp || 0;
            margin = margin || 0.2;
            time = time || 400;
            options = options || {};
            options.divide = options.divide || r(15, 5);
            options.simple = options.simple || false;
            options.endMargin = options.endMargin || rd(0.83, 0.84);

            let cx = device.width;
            let cy = device.height;
            margin = margin > 1 ? margin : (cy * margin);
            margin = margin + cy * rd(options.simple ? 0.01 : 0.07, 0);

            let startX = cx * rd(0.8, 0.45);
            let startY = margin;

            let endX = cx * rd(0.3, 0.75);
            let endY = options.simple ? cy * options.endMargin : Math.max(cy * rd(0.8, 0.55), cy - margin - cy * 0.3);

            let delX = endX - startX;
            let delY = endY - startY;

            let k = delY / delX / delX;

            let perX = delX / options.divide;

            let points = [
                [startX, startY]
            ];

            for (let i = 0; i < options.divide; i++) {
                let x = startX + (i + 1) * perX;
                let y = k * (x - startX) * (x - startX) + startY;
                points.push([x, y]);
            }

            gesture(time, points);

            let min = slp + 500;
            min = min > 0 ? min : 0;
            let s = options.sleep || r(slp + 3000, min);
            mySleep(s);
        };
        ctx.sys.swipeDown = (slp, margin, time, options) => {
            return swipeDown(slp, margin, time, options);
        };

        function swipeLeft(slp, margin, time, options) {
            options = options || {};
            slp = slp || 0;
            margin = margin || ctx.sys.rd(0.1, 0.05);
            time = time || 400;
            let cx = device.width;
            let cy = device.height / 2;
            let x1 = margin > 1 ? (cx - margin) : (cx * (1 - margin));
            let y1 = cy * ctx.sys.rd(1.1, 0.9);
            let x2 = margin > 1 ? margin : (cx * margin);
            let y2 = cy * ctx.sys.rd(1.7, 1.2);
            swipe(x1, y1, x2, y2, time);
            let min = slp + 500;
            min = min > 0 ? min : 0;
            let s = options.sleep || ctx.sys.r(slp + 3000, min);
            mySleep(s);
        };
        ctx.sys.swipeLeft = (slp, margin, time, options) => {
            return swipeLeft(slp, margin, time, options);
        };

        function showCtrl(ctrlFunc, options) {
            options = options || {};
            options.swipeTimes = options.swipeTimes || 5;
            options.dir = options.dir || "up";
            options.top = isUndef(options.top) ? 0.2 : options.top;
            options.bottom = options.bottom || 0.8;
            let c = null;
            let dh = device.height;
            let tb = dh * options.top; //上边界
            let bb = dh * options.bottom; //下边界
            for (let i = 0; i < options.swipeTimes * 3; i++) {
                c = ctrlFunc();
                if (c) break;
                if (options.dir == "up") {
                    i < options.swipeTimes ? swipeUp(-3000, 0.3) : swipeDown(-3000, 0.3);
                } else {
                    i < options.swipeTimes ? swipeDown(-3000, 0.3) : swipeUp(-3000, 0.3);
                }
            }
            let top = c ? c.bounds().top : 0;
            let max = 20;
            while (c && (top < tb - 1 || top > bb + 1) && max > 0) {
                if (top < tb) swipeDown(-3000, top > 0 ? 0.4 : 0.3);
                else if (top > bb) swipeUp(-3000, top < dh ? 0.4 : 0.3);
                max--;
                c = ctrlFunc();
                top = c ? c.bounds().top : 0;
            }
            return c;
        }
        ctx.sys.showCtrl = (ctrlFunc, options) => {
            return showCtrl(ctrlFunc, options);
        };
    } { // 存储功能库

        let fw_storage = "fw";
        let fw_storage_setting_key = "fw_setting";
        let fw_storage_today_key = "fw_today_obj";
        let fw_attr_last_tool_code = "lastToolCode";
        let fw_attr_last_app = "lastApp";

        function getStorage(key) {
            let s = storages.create(fw_storage);
            return s.get(key) || {};
        };
        ctx.sys.getStorage = (key) => {
            return getStorage(key);
        };

        function setStorage(key, obj) {
            let s = storages.create(fw_storage);
            s.put(key, obj);
        };
        ctx.sys.setStorage = (key, obj) => {
            return setStorage(key, obj);
        };

        function getSetting() {
            return getStorage(fw_storage_setting_key);
        };
        ctx.sys.getSetting = () => {
            return getSetting();
        };

        function setSetting(obj) {
            setStorage(fw_storage_setting_key, obj);
        };
        ctx.sys.setSetting = (obj) => {
            return setSetting(obj);
        };

        function getTSetting() {
            let tc = getLastCode();
            if (tc) {
                return getStorage(fw_storage_setting_key + "-" + tc);
            }
            return {};
        };
        ctx.sys.getTSetting = () => {
            return getTSetting();
        };

        function setTSetting(obj) {
            let tc = getLastCode();
            if (tc) {
                return setStorage(fw_storage_setting_key + "-" + tc, obj);
            }
        };
        ctx.sys.setTSetting = (obj) => {
            return setTSetting(obj);
        };

        function getTodayObj() {
            let obj = getStorage(fw_storage_today_key);
            if (obj && obj.date == new Date().getDate()) {
                return obj;
            }
            return {
                date: new Date().getDate()
            };
        };
        ctx.sys.getTodayObj = () => {
            return getTodayObj();
        };


        function setTodayObj(obj) {
            setStorage(fw_storage_today_key, obj);
        };
        ctx.sys.setTodayObj = (obj) => {
            return setTodayObj(obj);
        };

        function getTTObj() {
            let tc = getLastCode();
            if (tc) {
                let obj = getStorage(fw_storage_today_key + "-" + tc);
                if (obj && obj.date == new Date().getDate()) {
                    return obj;
                }
            }
            return {
                date: new Date().getDate()
            };
        };
        ctx.sys.getTTObj = () => {
            return getTTObj();
        };

        function setTTObj(obj) {
            let tc = getLastCode();
            if (tc) {
                setStorage(fw_storage_today_key + "-" + tc, obj);
            }
        };
        ctx.sys.setTTObj = (obj) => {
            return setTTObj(obj);
        };

        function getTAObj() {
            if (ctx.fw.curApp.id) {
                let tc = getLastCode() || "";
                let obj = getStorage(fw_storage_today_key + "-" + tc + "-" + ctx.fw.curApp.id);
                if (obj && obj.date == new Date().getDate()) {
                    return obj;
                }
            }
            return {
                date: new Date().getDate()
            };
        };
        ctx.sys.getTAObj = () => {
            return getTAObj();
        };

        function setTAObj(obj) {
            if (ctx.fw.curApp.id) {
                let tc = getLastCode() || "";
                setStorage(fw_storage_today_key + "-" + tc + "-" + ctx.fw.curApp.id, obj)
            }
        }
        ctx.sys.setTAObj = (obj) => {
            return setTAObj(obj);
        };

        function getLastCode() {
            return getSetting()[fw_attr_last_tool_code];
        };
        ctx.sys.getLastCode = () => {
            return getLastCode();
        };

        function setLastCode(code) {
            let obj = getSetting();
            obj[fw_attr_last_tool_code] = code;
            setSetting(obj);
        }
        ctx.sys.setLastCode = (code) => {
            return setLastCode(code);
        };

        function getLastApp() {
            return getTSetting()[fw_attr_last_app];
        };
        ctx.sys.getLastApp = () => {
            return getLastApp();
        };

        function setLastApp(appID) {
            let obj = getTSetting();
            obj[fw_attr_last_app] = appID;
            setTSetting(obj);
        };
        ctx.sys.setLastApp = (appID) => {
            return setLastApp(appID);
        };

        function getDSItem(code) {
            let ds = ctx.fw.ds;
            for (let i = 0; i < ds.length; i++) {
                if (ds[i].code == code) {
                    return ds[i];
                }
            }
            return null;
        }
        ctx.sys.getDSItem = (code) => {
            return getDSItem(code);
        };
    } { // 手机设备功能信息库
        function getMc(way) {
            if (device.serial && device.serial.toLowerCase() != "unknown") {
                return device.serial;
            }
            importClass(android.os.Build);
            try {
                if (Build.serial.toLowerCase() == "unknown") {
                    let tm = context.getSystemService(context.TELEPHONY_SERVICE);
                    return "D-" + tm.getDeviceId();
                }
                return Build.serial;
            } catch (e) {
                try {
                    return "I-" + device.getIMEI();
                } catch (e) {
                    return "unknown";
                }
            }
        };
        ctx.sys.getMc = (way) => {
            return getMc(way);
        };

        function isFlyOn() {
            importClass(android.provider.Settings);
            return Settings.Global.getInt(context.getContentResolver(), Settings.Global.AIRPLANE_MODE_ON, 0) != 0;
        }
        ctx.sys.isFlyOn = () => {
            return isFlyOn();
        }

        function showInAlbum(fn, path) {
            importClass(android.provider.MediaStore);
            importClass(android.net.Uri);
            MediaStore.Images.Media.insertImage(context.getContentResolver(),
                path, fn, null);
            context.sendBroadcast(new Intent(Intent.ACTION_MEDIA_SCANNER_SCAN_FILE, Uri.parse("file://" + path)));
        }
        ctx.sys.showInAlbum = (fn, path) => {
            return showInAlbum(fn, path);
        };

        function isWifi() {
            let cm = context.getSystemService(context.CONNECTIVITY_SERVICE);
            let ni = cm.getActiveNetworkInfo();
            if (ni) {
                return ni.getType() == cm.TYPE_WIFI;
            }
            return false;
        };
        ctx.sys.isWifi = () => {
            return isWifi();
        };

        function isVpn() {
            try {
                importClass(java.net.NetworkInterface);
                importClass(java.util.Collections);
                let list = NetworkInterface.getNetworkInterfaces();
                let cs = Collections.list(list);
                let arr = cs.toArray();
                for (let p in arr) {
                    let name = arr[p].getName();
                    if (name == "ppp0" || name == "tun0") {
                        return true;
                    }
                }
            } catch (e) {

            }
            return false;
        }
        ctx.sys.isVpn = () => {
            return isVpn();
        };

        function isXiaomi() {
            return device.brand.toLowerCase() == "xiaomi";
        }
        ctx.sys.isXiaomi = () => {
            return isXiaomi();
        }

        function isMeizu() {
            return device.brand.toLowerCase() == "meizu";
        }
        ctx.sys.isMeizu = () => {
            return isMeizu();
        }

        function goDesktop() {
            for (let i = 0; i < 3; i++) {
                home();
                mySleep(300);
            }
            mySleep(1000);
        };
        ctx.sys.goDesktop = () => {
            return goDesktop();
        };

        function backToDesktop(time) {
            time = time || 400;
            let max = 10;
            while (max > 0 && !currentActivity().toLowerCase().endsWith("launcher")) {
                back();
                max--;
                sleep(time);
            }
            home();
        };
        ctx.sys.backToDesktop = (time) => {
            return backToDesktop(time);
        };
    } { // 手机适配操作库

        function clearBPAll() {
            // 适配
            if (isXiaomi()) {
                goDesktop();
                let c = myId("progressBar");
                myClick(c, 3000);
            } else if (isMeizu()) {
                //NOTE: 需要将手机的导航和多任务设置成安卓导航栏方式
                goDesktop();
                let c_icon = myText("一键加速");
                myClickP(c_icon, 5000);
            }
        };
        ctx.sys.clearBPAll = () => {
            return clearBPAll();
        };

        function allowOpen(allow) {
            if (ctx.sys.isXiaomi()) {
                if (ctx.sys.textContains("正在尝试开启") && ctx.sys.textContains("是否允许")) {
                    ctx.sys.clickT(allow ? "允许" : "拒绝");
                }
            } else if (ctx.sys.isMeizu()) {

            }
        };
        ctx.sys.allowOpen = (allow) => {
            return allowOpen(allow);
        };

        function noResponse() {
            if (ctx.sys.textContains("无响应") && ctx.sys.textContains("要将其关闭吗")) {
                ctx.sys.clickT("确定");
            }
        }
        ctx.sys.noResponse = () => {
            return noResponse();
        };


    } { // 业务功能库
        function showDlg(content, title, options) {
            options = options || {};
            options.title = options.title || title || "信息";
            options.dur = options.dur || 10;
            options.content = options.content || content || "";
            options.appendDefault = options.appendDefault || true;
            if (options.appendDefault) {
                options.content += ("\n本窗口将在" + options.dur + "秒后自动关闭");
            }
            options.positive = "知道了";
            options.positiveColor = "black";
            let dlg = null;
            let end = false;
            let start = Date.now();
            threads.start(function () {
                dlg = dialogs.build(options)
                    .on("positive", () => {
                        end = true;
                        if (options.positiveFunc) {
                            options.positiveFunc();
                        }
                    }).on("negative", () => {
                        end = true;
                        if (options.negativeFunc) {
                            options.negativeFunc();
                        }
                    }).on("neutral", () => {
                        end = true;
                        if (options.neutralFunc) {
                            options.neutralFunc();
                        }
                    }).on("check", (checked) => {
                        end = true;
                        if (options.checkFunc) {
                            options.checkFunc(checked);
                        }
                    }).show();
            });

            while (Date.now() - start < options.dur * 1000 && !end) {}

            if (dlg) {
                dlg.dismiss();
            }
        }
        ctx.sys.showDlg = (content, title, options) => {
            return showDlg(content, title, options);
        };

        function myLog(msg, prefix, title) {
            let code = getLastCode();
            let dsi = getDSItem(code);
            msg = "" + msg;
            if (msg.indexOf("InterruptedException") > -1) {
                msg = "脚本已强制终止";
            } else if (msg.indexOf("com.stardust.") > -1) {
                return;
            }
            msg = (prefix || ctx.fw.curApp.name || "系统") + ":" + msg;
            msg = msg.replace("aut" + "ojs", "ze" + "us").replace("Aut" + "ojs", "Ze" + "us").replace("js", "").replace("jav" + "asc" + "ript", "lua");
            let mm = msg.toLowerCase();
            if (mm.indexOf("jav" + "asc" + "ript") > -1 || mm.indexOf("aut" + "ojs") > -1) {
                return;
            }
            if (!app.cfg.version || ctx.fw.isTest) {
                toast(msg);
            }
            try {
                let date = fmtDate(Date());
                title = title || (dsi ? dsi.title : "");
                let fn = "/sdcard/001/log_" + date + (title ? ("_" + title) : "") + ".txt";
                files.createWithDirs(fn);
                let d = new Date();
                let time = padLeft(d.getHours()) + ":" + padLeft(d.getMinutes()) + ":" + padLeft(d.getSeconds()) + " ";
                files.append(fn, time + msg + "\r\n");
            } catch (e) {
                log(e);
            }
            log(msg);
        };
        ctx.sys.log = (msg, prefix, title) => {
            return myLog(msg, prefix, title);
        };

        function getIP() {
            let res = http.get('http://pv.sohu.com/cityjson?ie=utf-8');
            let resJsonStr = res.body.string();
            try {
                let idx = resJsonStr.indexOf("=") + 2;
                let data = resJsonStr.substring(idx, resJsonStr.length - 1);
                let obj = JSON.parse(data);
                return obj.cip;
            } catch (e) {}
        }
        ctx.sys.getIP = () => {
            return getIP();
        }

        function stat(webviewCtrl, qsJson, options) {
            options = options || {};
            let qsStr = "";
            for (qs in qsJson) {
                qsStr += qs + "=" + qsJson[qs] + "&";
            }
            qsStr = qsStr.length > 0 ? qsStr.slice(0, -1) : "";
            let url = "http://tiantiansvc.coding.me/wsa/ts-p00-intro/stat-baidu.html?" + qsStr;
            try {
                ui.run(() => webviewCtrl.loadUrl(url));
            } catch (e) {}
        }
        ctx.sys.stat = (webviewCtrl, qsJson, options) => {
            return stat(webviewCtrl, qsJson, options);
        };

        function getCfgValue(valueStr, def) {
            if (valueStr == "0") {
                return 0;
            }
            if (typeof def == "function") {
                def = def();
            }
            if (!valueStr) {
                return def;
            }
            valueStr = valueStr.replace(",", ";");
            let num1 = getNum(valueStr);
            let idx = valueStr.indexOf(";");
            let res = num1 || def;
            if (idx > 0) {
                let num2 = getNum(valueStr.substring(idx));
                res = r(num1, num2);
            }
            ctx.sys.log("获取设定值：" + res);
            return res;
        }
        ctx.sys.getCfgValue = (valueStr, def) => {
            return getCfgValue(valueStr, def);
        };

        function guagua(ctrl, options) {
            options = options || {};
            options.offset = options.offset || 100;
            options.distance = options.distance || 200;
            options.maxTimesOneSide = options.maxTimesOneSide || 3;
            options.duration = options.duration || 6000;
            if (ctrl) {
                let b = ctrl.bounds();
                if (b) {
                    let cx = b.centerX();
                    let cy = b.centerY();
                    let w = b.width();
                    let h = b.height();
                    let d = Math.min(h - 50, options.distance);
                    let times = Math.min(options.maxTimesOneSide, w / (2 * options.offset));
                    let points = [];
                    for (let i = 0; i < times; i++) {
                        points.push([cx - (times - i) * options.offset, cy - d]);
                        points.push([cx - (times - i) * options.offset, cy + d]);
                    }
                    for (let i = 0; i < times; i++) {
                        points.push([cx + i * options.offset, cy - d]);
                        points.push([cx + i * options.offset, cy + d]);
                    }
                    gesture(options.duration, points);
                }
            }
        }

        ctx.sys.guagua = (ctrl, options) => {
            return guagua(ctrl, options);
        };
    } { // 微信业务功能
        function wxLogin() {
            let cfm = ctx.sys.text("确认登录", 5000) || ctx.sys.text("同意");
            return ctx.sys.click(cfm);
        }
        ctx.sys.wxLogin = () => {
            return wxLogin();
        };
    }

})();
