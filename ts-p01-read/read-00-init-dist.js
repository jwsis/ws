var a=['<button\x20id=\x22btn_test\x22\x20text=\x22测试运行\x22\x20margin=\x225\x200\x22\x20textSize=\x2212sp\x22\x20w=\x22*\x22\x20h=\x2240\x22\x20/>','\x20\x20\x20\x20<radiogroup\x20orientation=\x22horizontal\x22\x20marginTop=\x225\x22>','</linear>','<linear\x20margin=\x225\x20-5\x22\x20>','\x20\x20\x20\x20<button\x20id=\x22btn_reset\x22\x20margin=\x225\x200\x200\x205\x22\x20text=\x22重置App设置1\x22\x20textSize=\x2210sp\x22\x20layout_weight=\x221\x22\x20w=\x221\x22\x20h=\x2240\x22\x20/>','<frame\x20id=\x22ph\x22></frame>','tool_read','服务器6-1连接不成功','funcs','getText','end','way','cfg','cfgs','isChecked','setting','getTSetting','sp_p1s','rdo_s2','setChecked','setText','hbInterval','widget','FrameLayout','LayoutParams','tip','Images','allowOpen','sp_oc','btn_dld','btn_buy','已注册用户可直接登录购卡，\x0a未注册用户请找介绍人索取邀请链接注册后购卡','then','text','clearBPAll','bounds','sys','input','后台弹出界面','web','ILeXJ','VQ8Wo','charCodeAt','charAt','html','get','log','body','string','d7b3960d','msgs','2e6525e2','init','fmtDate','stringify','msg','length','join','curApp','inner','appInfo','coin','getTTObj','setTTObj','请检查网络是否正常，或者是否到期！','round','envReady','click','rdo_s1'];var b=function(c,d){c=c-0x0;var e=a[c];return e;};'ui';(function(){let c=function(){let d='<ScrollView><vertical>';d+=b('0x0');d+='<linear\x20margin=\x225\x200\x22\x20>';d+=b('0x1');d+='\x20\x20\x20\x20\x20\x20\x20\x20<radio\x20id=\x22rdo_s1\x22\x20margin=\x225\x200\x205\x200\x22\x20text=\x22方案一\x22\x20w=\x2280\x22\x20checked=\x22true\x22\x20/>';d+='\x20\x20\x20\x20\x20\x20\x20\x20<radio\x20id=\x22rdo_s2\x22\x20margin=\x225\x200\x205\x200\x22\x20text=\x22方案二\x22\x20w=\x2280\x22\x20checked=\x22false\x22\x20/>';d+='\x20\x20\x20\x20\x20\x20\x20\x20<checkbox\x20id=\x22chb_clearCache\x22\x20margin=\x225\x200\x205\x205\x22\x20checked=\x22false\x22\x20text=\x22清缓存\x22\x20/>';d+='\x20\x20\x20\x20\x20\x20\x20\x20<checkbox\x20id=\x22chb_highPerformance\x22\x20margin=\x225\x200\x205\x205\x22\x20checked=\x22false\x22\x20text=\x22高性能\x22\x20/>';d+='\x20\x20\x20\x20</radiogroup>';d+='</linear>';d+='<linear\x20margin=\x225\x20-5\x22\x20>';d+='\x20\x20\x20\x20<text\x20id=\x22txt_from1\x22\x20text=\x22从：\x22\x20marginLeft=\x2210\x22\x20typeface=\x22monospace\x22\x20/>';d+='\x20\x20\x20\x20<spinner\x20id=\x22sp_p1s\x22\x20entries=\x2223点|24点|1点|2点|3点|4点|5点\x22></spinner>';d+='\x20\x20\x20\x20<text\x20id=\x22txt_to1\x22\x20text=\x22到\x22\x20typeface=\x22monospace\x22\x20/>';d+='\x20\x20\x20\x20<spinner\x20id=\x22sp_p1e\x22\x20entries=\x225点|6点|7点\x22></spinner>';d+='\x20\x20\x20\x20<spinner\x20id=\x22sp_p1c\x22\x20entries=\x22方案一|方案二|休息\x22></spinner>';d+=b('0x2');d+=b('0x3');d+='\x20\x20\x20\x20<text\x20id=\x22txt_other\x22\x20text=\x22其余时间:\x22\x20marginLeft=\x2210\x22\x20typeface=\x22monospace\x22\x20/>';d+='\x20\x20\x20\x20<spinner\x20id=\x22sp_oc\x22\x20entries=\x22方案一|方案二\x22></spinner>';d+='\x20\x20\x20\x20<text\x20id=\x22txt_hb\x22\x20text=\x22红包间隔(分钟):\x22\x20marginLeft=\x221\x22\x20typeface=\x22monospace\x22\x20/>';d+='\x20\x20\x20\x20<input\x20id=\x22et_hb\x22\x20text=\x220\x22\x20textSize=\x2212sp\x22\x20layout_width=\x2230\x22\x20hint=\x22\x22\x20/>';d+='</linear>';d+='<linear\x20margin=\x225\x200\x22\x20>';d+='\x20\x20\x20\x20<checkbox\x20id=\x22chb_wxFS\x22\x20margin=\x225\x200\x205\x205\x22\x20checked=\x22false\x22\x20text=\x22模拟分享\x22\x20/>';d+='\x20\x20\x20\x20<checkbox\x20id=\x22chb_wxRS\x22\x20margin=\x225\x200\x205\x205\x22\x20checked=\x22false\x22\x20text=\x22朋友圈真实分享2条\x22\x20/>';d+='\x20\x20\x20\x20<checkbox\x20id=\x22chb_video\x22\x20margin=\x225\x200\x205\x205\x22\x20checked=\x22false\x22\x20text=\x22看视频\x22\x20/>';d+='</linear>';d+='<linear\x20margin=\x225\x200\x22\x20>';d+='\x20\x20\x20\x20<button\x20id=\x22btn_getMC\x22\x20margin=\x225\x200\x200\x205\x22\x20text=\x22设备码\x22\x20textSize=\x2210sp\x22\x20layout_weight=\x221\x22\x20w=\x221\x22\x20h=\x2240\x22\x20/>';d+='\x20\x20\x20\x20<button\x20id=\x22btn_inputCode\x22\x20margin=\x225\x200\x200\x205\x22\x20text=\x22输入卡密\x22\x20textSize=\x2210sp\x22\x20layout_weight=\x221\x22\x20w=\x221\x22\x20h=\x2240\x22\x20/>';d+='\x20\x20\x20\x20<button\x20id=\x22btn_dld\x22\x20margin=\x225\x200\x200\x205\x22\x20text=\x22一键安装\x22\x20h=\x2240\x22\x20textSize=\x2210sp\x22\x20layout_weight=\x221\x22\x20w=\x221\x22\x20h=\x2240\x22\x20/>';d+='</linear>';d+='<linear\x20margin=\x225\x200\x22\x20>';d+=b('0x4');d+='\x20\x20\x20\x20<button\x20id=\x22btn_feedback\x22\x20margin=\x225\x200\x200\x205\x22\x20text=\x22问题反馈\x22\x20textSize=\x2210sp\x22\x20layout_weight=\x221\x22\x20w=\x221\x22\x20h=\x2240\x22\x20/>';d+='</linear>';d+='<text\x20id=\x22txt_desc\x22\x20textColor=\x22blue\x22\x20marginLeft=\x2230\x22\x20h=\x220\x22\x20typeface=\x22monospace\x22\x20/>';d+='<text\x20id=\x22txt_notice\x22\x20textColor=\x22red\x22\x20marginLeft=\x2230\x22\x20h=\x220\x22\x20typeface=\x22monospace\x22\x20/>';d+='<frame\x20id=\x22btns\x22\x20h=\x22*\x22\x20w=\x22*\x22></frame>';d+='</vertical></ScrollView>';return eval(d);}();let e=function(f){let g='<vertical\x20bg=\x22#ccB6C1\x22\x20h=\x22330\x22\x20>';g+='<ScrollView\x20h=\x22280\x22><vertical\x20bg=\x22#ccB6C1\x22\x20w=\x22310\x22\x20>';g+='<text\x20id=\x22title\x22\x20marginTop=\x2230\x22\x20gravity=\x22center\x22\x20textSize=\x2220sp\x22>'+f+'设定</text>';g+=b('0x5');g+='</vertical></ScrollView>';g+='<linear\x20><button\x20id=\x22cancel\x22\x20layout_weight=\x221\x22\x20text=\x22取消\x22></button><button\x20id=\x22ok\x22\x20layout_weight=\x221\x22\x20text=\x22完成\x22></button></linear>';g+='</vertical>';return eval(g);};let h={'funcs':{}};let i='1';let j=b('0x6');let k='ws-read-cp';let l=![];let m={};let n=0x0;let o={};let p=!![];let q={};let r='41';String['prototype']['padLeft']=Number['prototype']['padLeft']=function(s,t){return(Array(s)['join'](t||0x0)+this)['slice'](-s);};function u(){let v='ts-p01-read/read-02-apps-dist.js';let w=http['get']('http://jwauto.oss-cn-hangzhou.aliyuncs.com/ws/'+v);if(w['statusCode']!=0xc8){let x=b('0x7');ctx['sys']['log'](x);throw new Error(x);}h=eval(w['body']['string']());}function y(){let z='<vertical>';let A=0x0;for(let B in h['funcs']){let C=h[b('0x8')][B];C['key']=B;if(C['hide']){continue;}A++;let D=C['cfg']?'<button\x20id=\x22set_'+B+'\x22\x20text=\x22设置\x22\x20w=\x2250\x22\x20h=\x2245\x22\x20textSize=\x2210sp\x22></button>':'';z+='<linear\x20margin=\x225\x200\x22\x20><text>'+A['padLeft'](0x2)+'</text><checkbox\x20id=\x22'+B+'\x22\x20/><button\x20id=\x22btn_get_'+B+'\x22\x20/>'+D+'<text\x20id=\x22t_'+B+'\x22/></linear>';};z+='</vertical>';return eval(z);}function E(F){threads['start'](function(){let G=floaty['rawWindow'](e(h[b('0x8')][F]['name']));G['setPosition'](0x64,0x12c);let H=setInterval(()=>{},0xbb8);let I=q[F];G['cancel']['on']('click',function(){G['close']();clearInterval(H);});G['ok']['on']('click',function(){for(let J in h['funcs'][F]['cfg']){let K=h['funcs'][F]['cfg'][J];if(!K['t']||K['t']=='text'){I[J]=G['v_'+J][b('0x9')]()['toString']();}}a1();G['close']();clearInterval(H);});let L='<vertical>';for(let M in h['funcs'][F]['cfg']){let N=h[b('0x8')][F]['cfg'][M];let O='';if(!N['t']||N['t']=='text'){O='<input\x20id=\x22v_'+M+'\x22\x20w=\x22120\x22>'+I[M]+'</input>';}L+='<linear\x20id=\x22l_'+M+'\x22\x20marginRight=\x2210\x22><text\x20id=\x22t_'+M+'\x22\x20w=\x22150\x22\x20gravity=\x22right\x22>'+N['name']+':</text>'+O+'</linear>';}L+='</vertical>';ui['run'](()=>{G['ph']['addView'](ui['inflate'](eval(L)),new android['widget']['FrameLayout']['LayoutParams'](-0x1,-0x1));for(let P in h['funcs'][F]['cfg']){let Q=h['funcs'][F]['cfg'][P];if(!Q['t']||Q['t']=='text'){G['v_'+P]['on']('touch_down',function(){G['requestFocus']();G['v_'+P]['requestFocus']();});}}});});}function R(){return's'+i;}function S(T){let U=new Date()['getHours']();if(T['start']>0x1&&U>T['start']-0x2&&U<T['end']+0x5){return!![];}else if(T['start']<0x2&&(U>T['start']+0x16||U<T[b('0xa')]+0x5)){return!![];}return![];}function V(){let W=m['setting'];if(!W){return![];}let X=W['po'];let Y=W['p1'];let Z='';if(S(Y)){Z=Y[b('0xb')]==0x0?'1':Y['way']==0x1?'2':i;}else{Z=X['way']==0x0?'1':'2';}let a0=i==Z;i=Z;i=='1'?ui['rdo_s1']['setChecked'](!![]):ui['rdo_s2']['setChecked'](!![]);return a0;}function a1(){let a2=ctx['sys']['getTSetting']();a2=a2||{};let a3={};for(let a4 in h['funcs']){if(ui[a4]){a3[a4]=ui[a4]['isChecked']();}}let a5={};try{let a6=ui['sp_p1s']['getSelectedItemPosition']();let a7=ui['sp_p1e']['getSelectedItemPosition']();let a8=ui['sp_p1c']['getSelectedItemPosition']();let a9=ui['sp_oc']['getSelectedItemPosition']();a2['po']={'way':a9};a2['p1']={'start':a6,'end':a7,'way':a8};a5=a2[R()]={'apps':a3,'wxFS':ui['chb_wxFS']['isChecked'](),'wxRS':ui['chb_wxRS']['isChecked'](),'video':ui['chb_video']['isChecked']()};}catch(aa){ctx['sys']['log']('保存设置出错1:'+aa);}try{let ab=ui['et_hb'][b('0x9')]()['toString']();a5['hbInterval']=ab==r?0x0:ab;a5['cfgs']={};for(let a4 in h['funcs']){let ad=h['funcs'][a4];if(ad['cfg']){for(let ae in ad['cfg']){if(q[a4]&&q[a4][ae]!=ad[b('0xc')][ae]['value']){a5['cfgs'][a4]=a5[b('0xd')][a4]||{};a5['cfgs'][a4][ae]=q[a4][ae];}}}}a2['clearCache']=ui['chb_clearCache'][b('0xe')]();a2['highPerformance']=ui['chb_highPerformance']['isChecked']();}catch(af){}ctx['sys']['setTSetting'](a2);m[b('0xf')]=a2;ctx['fw']['cfg']['read_video']=a5['video'];ctx['fw']['cfg']['wxFS']=a5['wxFS'];ctx['fw']['cfg']['wxRS']=a5['wxRS'];ctx['fw']['cfg']['highPerformance']=a2['highPerformance'];ctx['fw']['cfg']['hbInterval']=a5['hbInterval']||r;ctx['fw']['cfg']['cfgs']=a5['cfgs'];return a2;}function ag(){let ah=ctx['sys'][b('0x10')]();ah=ah||{};ah['po']=ah['po']||{};ah['p1']=ah['p1']||{};ah['po']['way']=ah['po']['way']||0x0;ah['p1']['start']=ah['p1']['start']||0x0;ah['p1']['end']=ah['p1']['end']||0x0;ah['p1']['way']=ctx['sys']['isUndef'](ah['p1']['way'])?0x1:ah['p1']['way'];ui['sp_oc']['setSelection'](ah['po']['way']);ui[b('0x11')]['setSelection'](ah['p1']['start']);ui['sp_p1e']['setSelection'](ah['p1']['end']);ui['sp_p1c']['setSelection'](ah['p1']['way']);i=='1'?ui['rdo_s1']['setChecked'](!![]):ui[b('0x12')]['setChecked'](!![]);let ai=ah[R()];if(ai){ai['cfgs']=ai['cfgs']||{};let aj={};for(let ak in h[b('0x8')]){try{if(ui[ak]){ui[ak][b('0x13')](ai['apps'][ak]);}if(ui['btn_get_'+ak]&&ah['appInfo']&&ah['appInfo'][ak]&&ah['appInfo'][ak]['coin']){ui['btn_get_'+ak][b('0x14')](h['funcs'][ak]['name']+'\x0a'+ah['appInfo'][ak]['coin']);}if(ui['set_'+ak]){aj[ak]=ai['cfgs'][ak]||{};for(let al in h['funcs'][ak]['cfg']){aj[ak][al]=aj[ak][al]||h['funcs'][ak]['cfg'][al]['value'];}}}catch(am){}}try{ui['chb_wxFS']['setChecked'](ai['wxFS']);ui['chb_wxRS']['setChecked'](ai['wxRS']);ui['chb_video']['setChecked'](ai['video']);ui['et_hb']['setText'](ai[b('0x15')]||r);q=aj;}catch(an){}}try{ui['chb_clearCache']['setChecked'](ah['clearCache']);ui['chb_highPerformance']['setChecked'](ah['highPerformance']);}catch(ao){}m['setting']=ah;return ah;}function ap(){let aq={};ui['run'](()=>{if(!V()){aq=ag();}aq=a1();});return aq;}function ar(){ui['run'](()=>{ui['btns']['addView'](ui['inflate'](y()),new android[(b('0x16'))][(b('0x17'))][(b('0x18'))](-0x1,-0x1));});for(let as in h['funcs']){let at=h['funcs'][as];let au=at['link'];let av=at['code'];let aw=at['img'];let ax=at['id'];let ay=as;if(ui['set_'+ay]){ui['set_'+ay]['click'](function(){let az=q[ay]=q[ay]||{};for(let aA in at['cfg']){az[aA]=az[aA]||at['cfg'][aA]['value'];}E(ay);});}let aB=ui['btn_get_'+as];if(aB){aB['setTextSize'](0xa);aB['attr']('w',0x96);aB['attr']('h',0x2d);let aC=ui[as];if(aC){aC['attr']('margin','5\x200\x205\x205');aC['attr']('w','28');aC['attr']('checked',![]);aC['on']('click',()=>{a1();});}let aD=ui['t_'+as];if(aD){aD['setText'](at[b('0x19')]||'');}aB['click'](function(){if(av){setClip(av);alert('已复制邀请码：'+av);}if(au){app['openUrl'](au);}else if(aw){threads['start'](function(){importClass(android['provider']['MediaStore']);importClass(android['net']['Uri']);let aE=images['load'](aw);let aF='invite'+Date['now']()+'.png';let aG='/sdcard/001/invite/'+aF;files['createWithDirs'](aG);aE['saveTo'](aG);aE['recycle']();MediaStore[b('0x1a')]['Media']['insertImage'](context['getContentResolver'](),aG,aF,null);context['sendBroadcast'](new Intent(Intent['ACTION_MEDIA_SCANNER_SCAN_FILE'],Uri['parse']('file://'+aG)));alert('二维码已保存到相册，用微信扫码即可下载');});}else{threads['start'](function(){let aH=app['launch'](ax);sleep(0x3e8);ctx['sys'][b('0x1b')]();if(!aH){ctx['sys']['downloadFromStore'](ax);}});}});aB['setText'](at['name']);}}ui['txt_notice']&&ui['txt_notice']['setText']('');[ui['chb_wxFS'],ui['chb_wxRS'],ui['chb_video'],ui['chb_clearCache'],ui['chb_highPerformance']]['forEach'](aI=>{aI&&aI['on']('click',a1);});ui['sp_oc']&&ui[b('0x1c')]['on']('item_click',a1);let aJ={'onItemSelected':a1,'onNothingSelected':function(aK){}};ui['sp_oc']&&ui['sp_oc']['setOnItemSelectedListener'](aJ);ui['sp_p1s']&&ui['sp_p1s']['setOnItemSelectedListener'](aJ);ui['sp_p1e']&&ui['sp_p1e']['setOnItemSelectedListener'](aJ);ui['sp_p1c']&&ui['sp_p1c']['setOnItemSelectedListener'](aJ);ui[b('0x1d')]&&ui[b('0x1d')]['click'](()=>{aP();});ui['btn_reset']&&ui['btn_reset']['click'](()=>{confirm('确定要恢复所有App的设置为默认参数？')['then'](aL=>{if(aL){q={};for(let as in h['funcs']){if(h['funcs'][as]['cfg']){q[as]={};for(let aN in h['funcs'][as]['cfg']){q[as][aN]=h['funcs'][as]['cfg'][aN]['value'];}}}a1();toast('所有App的参数已恢复默认值');}});});ui['btn_buy']&&ui[b('0x1e')]['click'](function(){if(context['getPackageName']()=='com.anzhiyc.tsbl'){alert('暂未开通');return;}confirm(b('0x1f'))[b('0x20')](aO=>{if(aO){app['openUrl']('https://baoljyj.github.io/tfpages/index.html?login');}});});ui['btn_feedback']&&ui['btn_feedback']['click'](()=>{app['openUrl']('https://jinshuju.net/f/JNlObd');});ui['et_hb']['addTextChangedListener'](new android[(b('0x21'))]['TextWatcher']({'afterTextChanged':a1}));}function aP(){let aQ=[];for(let aR in h['funcs']){if(ui[aR]&&ui[aR][b('0xe')]()){aQ['push'](aR);}}threads['start'](function(){for(let aS=0x0;aS<aQ['length'];aS++){let aT=aQ[aS];let aU=h['funcs'][aT]['id'];let aV=h['funcs'][aT]['name'];let aW=h['funcs'][aT]['download'];if(getAppName(aU)){continue;}if(!aW||aW==0x0){ctx['sys']['clearBPAll']();toastLog('即将下载安装：'+aV);ctx['sys']['downloadFromStore'](aU);}}toastLog('下载安装已完成!');ctx['sys'][b('0x22')]();});};function aX(aY){let aZ=function(b0,b1){b1=b1||0xa;let b2=()=>{let b3=b0();return b3&&b3['bounds']()['height']()>0xa&&b3['bounds']()['top']<device['height']-0xc8&&b3[b('0x23')]()['top']>0x64;};for(let b4=0x0;b4<b1;b4++){if(!b2())ctx[b('0x24')]['swipeUp'](-0xbb8);else break;}for(let b5=0x0;b5<b1;b5++){if(!b2())ctx['sys']['swipeDown'](-0xbb8);else break;}};ctx['sys']['goDesktop']();if(!click('设置')){return;}aZ(()=>ctx['sys']['text']('授权管理'));if(!click('授权管理')){return;}sleep(0x1f4);if(!click('应用权限管理')){return;}let b6=ctx['sys']['id'](b('0x25'),0x7d0);if(b6){ctx['sys']['clickCo'](b6);let b7=ctx['sys']['ids']('input',0x7d0);b7[0x1]['setText'](aY);sleep(0x1f4);}else{aZ(()=>ctx['sys']['text'](aY));}if(!click(aY)){return;}aZ(()=>ctx['sys']['text']('后台弹出界面'));sleep(0x1f4);ctx['sys']['clickCo'](ctx[b('0x24')]['text'](b('0x26')),null,0x1);sleep(0x1f4);ctx['sys']['clickCo'](ctx['sys']['text']('允许'));}let b8=threads['start'](function(){try{require(encodeURI('ts4sys.js','UTF-8'));sleep(0x190);}catch(b9){}u();let ba=function(){return ctx['sys']['mc']();};function bb(){let bc=ctx['sys']['getTTObj']();if(bc['stat_open']){return;}let bd='';for(let be in h['funcs']){if(ui[be]&&ui[be]['isChecked']()){bd=bd+(bd==''?'':'_')+be;}}ui['web']&&ctx['sys']['stat'](ui[b('0x27')],{'t':'evt','cat':'read_open','act':ba(),'lbl':bd});bc['stat_open']=!![];ctx['sys']['setTTObj'](bc);};let bf=function(bg){bg=bg['replace'](/\r\n/g,'\x0a');let bh='';for(let bi=0x0;bi<bg['length'];bi++){let bj=bg['charCodeAt'](bi);if(bj<0x80){bh+=String['fromCharCode'](bj);}else if(bj>0x7f&&bj<0x800){bh+=String['fromCharCode'](bj>>0x6|0xc0);bh+=String['fromCharCode'](bj&0x3f|0x80);}else{bh+=String['fromCharCode'](bj>>0xc|0xe0);bh+=String['fromCharCode'](bj>>0x6&0x3f|0x80);bh+=String['fromCharCode'](bj&0x3f|0x80);}}return bh;};let bk=function(bl){let bm=b('0x28')+'M3CEZ'+'=dfgO';let bn='P6STU'+'qrAjk'+'FGYlm';let bo='/bK2R'+'hivwN'+b('0x29');let bp='01Hst'+'4pxu9'+'+D7_y'+'z5Bcn';let bq=bm+bn+bo+bp;let br='';let bs,bt,bu,bv,bw,bx,by;let bz=0x0;bl=bf(bl);while(bz<bl['length']){bs=bl['charCodeAt'](bz++);bt=bl['charCodeAt'](bz++);bu=bl[b('0x2a')](bz++);bv=bs>>0x2;bw=(bs&0x3)<<0x4|bt>>0x4;bx=(bt&0xf)<<0x2|bu>>0x6;by=bu&0x3f;if(isNaN(bt)){bx=by=0x40;}else if(isNaN(bu)){by=0x40;}br=br+bq['charAt'](bv)+bq['charAt'](bw)+bq[b('0x2b')](bx)+bq['charAt'](by);}return br;};let bA=function(){let bB=m['setting']['p1'];return bB['way']==0x2&&S(bB);};let bC=function(bD){if(o[bD['key']]&&o[bD['key']]['html']){return o[bD['key']][b('0x2c')];}let bE=bD['cat']||'read';let bF=bE+'/'+bD['url'];let bG=http[b('0x2d')]('http://jwauto.oss-cn-hangzhou.aliyuncs.com/ws/'+bF);if(bG['statusCode']!=0xc8){let bH='服务器4-1连接不成功';ctx['sys'][b('0x2e')](bH);throw new Error(bH);}let bI=bG[b('0x2f')][b('0x30')]();o[bD['key']]=o[bD['key']]||{};o[bD['key']]['html']=bI;return bI;};let bJ=function(){let bK='ts-p01-read/read-01-cfg-dist.js';let bL=http['get']('http://jwauto.oss-cn-hangzhou.aliyuncs.com/ws/'+bK);if(bL['statusCode']!=0xc8){let bM='服务器5-1连接不成功';ctx['sys']['log'](bM);throw new Error(bM);}return bL['body']['string']();};let bN=function(){let bO=![];for(let bP in h['funcs']){let bQ=h['funcs'][bP];if(m['setting'][R()]['apps'][bP]&&!bQ['unsafe']){bO=!![];break;}}if(!bO){return;}let bR=ctx[b('0x24')]['getTTObj']();if(bR['check_cfgDT']&&Date['now']()-bR['check_cfgDT']<0x3e8*0x3c*0x3c){if(['2e6525e2',b('0x31')]['indexOf'](ctx['sys']['mc']())==-0x1){return;}}try{bR['check_cfgDT']=Date['now']();ctx['sys']['setTTObj'](bR);ctx['sys']['log']('获取版本更新信息');let bS=bJ();let bT=eval(bS);let bU=ctx['sys']['getTSetting']();bU=bU||{};bU['msgs']=bU['msgs']||{};if(bT&&bT['msgs']){for(let bP in bT['msgs']){if(!bU['msgs'][bP]){let bW=bT['msgs'][bP];ctx['sys']['log']('显示公告:\x20'+bW['msg']);ctx['sys']['showDlg'](bW['msg'],bW['title'],{'positiveFunc':function(){bU['msgs'][bP]=!![];}});ctx['sys']['log']('关闭该公告');break;}}for(let bP in bU['msgs']){if(!bT[b('0x32')][bP]){delete bU['msgs'][bP];}}ctx[b('0x24')]['setTSetting'](bU);for(let bP in bT['apps']){let bZ=bT['apps'][bP];let c0=o[bP];if(c0&&c0['ver']==bZ['ver']){continue;}o[bP]={'ver':bZ['ver']};}if(bT['init']){let c1=bU['initVer'];bU['initVer']=bT['init']['ver'];ctx['sys']['setTSetting'](bU);if([b('0x33'),'d7b3960d','16782a62','adf1b87','28721f25','79f02fb7','9bdb6843','dca347a7','c7d14639','db64458b','2f99becf']['indexOf'](ctx[b('0x24')]['mc']())>-0x1){toastLog('===测试机器===');bT[b('0x34')]['ver']=Date['now']();}if(!p&&c1!=bT['init']['ver']){try{ctx['sys']['log']('环境更新，需要重启');b8['interrupt']();b8['sleep'](0x3e8);ctx['sys']['waitUntil'](()=>{return!b8['isAlive']();},0xbb8);}catch(c2){ctx['sys']['log']('停止环境出错：'+c2);}}p=![];}}}catch(c3){ctx['sys']['log']('配置信息出错：'+c3);}};let c4=function(){try{let c5='http://47.98.125.242:3101/dapi/cp/try';let c6={'toolCode':k,'clientCode':ba()};let c7=bk(JSON['stringify'](c6));let c8=http['post'](c5,{'info':c7});let c9=c8['body']['string']();let ca=JSON['parse'](c9);let cb=ctx['sys'][b('0x35')](ca['data']['exp']);toast((ca['data']['activated']?'已激活；':'未激活；')+'期限到：'+cb);return cb;}catch(cc){}};let cd=function(ce){try{let cf='http://47.98.125.242:3101/dapi/cp/reg';let cg={'cardCode':ce,'toolCode':k,'clientCode':ba()};let ch=bk(JSON[b('0x36')](cg));let ci=http['post'](cf,{'info':ch});let cj=ci['body']['string']();let ck=JSON['parse'](cj);if(ck&&ck['code']==0x1f4&&ck[b('0x37')]){alert(ck['msg']);}let cl=ctx[b('0x24')]['fmtDate'](ck['data']['exp']);return cl;}catch(cm){}};let cn=function(){try{let co='http://47.98.125.242:3101/dapi/cp/check';let cp={'toolCode':k,'clientCode':ba()};let cq=bk(JSON['stringify'](cp));let cr=http['post'](co,{'info':cq});let cs=cr['body']['string']();let ct=JSON['parse'](cs);return ct;}catch(cu){}};let cv=function(cw){return java['lang']['String'](android['util']['Base64']['decode'](java['lang']['String'](cw)['getBytes'](),0x2));};let cx=function(cy,cz){cz=cz<0x1?0x1:cz;let cA=[];let cB=[];for(let cC=0x0;cC<cy['length'];cC++){if((cC+0x1)%cz>0x0){cB['push'](cy[cC]);}else{cB['push'](cy[cC]);cA=cA['concat'](cB['reverse']());cB=[];}if(cC==cy[b('0x38')]-0x1){cA=cA['concat'](cB['reverse']());}}return cA;};let cD=function(){if(m['exp']){let cE=m['exp']-Date['now']();let cF=0x3e8*0x3c*0x3c;if(cE>0x18*cF&&random()<0.9){return!![];}else if(cE>cF&&random()<0.8){return!![];}}let cG=0x3;let cH=![];while(cG>0x0&&!cH){cG--;let cI=cn();cH=cI&&cI['data']&&cI['data']['valid'];if(cH){try{let cJ=cx(cI['data']['t'],0x3)[b('0x39')]('')['replace'](/#/g,'=');cJ=cv(cJ);let cK=cJ['split']('#');m['ds']=cK[0x1];m['exp']=new Date(cK[0x3])['getTime']();}catch(cL){}return!![];}else if(cI&&cI['code']){return![];}sleep(0x14*0x3e8);}};let cM=function(cN){let cO=ctx['sys']['getTAObj']();cO['a_start']=cO['a_start']||Date['now']();cO['a_totalCost']=cO['a_totalCost']||0x0;cO['a_curStart']=Date['now']();ctx['sys']['setTAObj'](cO);let cP=cO['a_curStart'];try{if(random()<0.2*n&&(m['exp']<Date['now']()||ctx['sys']['mc']()!=m['ds'])){app['launch'](ctx['fw'][b('0x3a')]['id']);sleep(0x3e8*ctx['sys']['r'](0x258,0x190));let cQ=ctx['sys']['r'](0xa,0x1);if(cQ==0x1){let cO={};let cS=cO[b('0x3b')]['children']();}else if(cQ==0x2){exit();}}else{eval(cN);}}catch(cT){ctx['sys']['log'](cT);if(currentPackage()=='com.miui.home'&&ctx['sys']['isXiaomi']()){aX(app['getAppName'](context['getPackageName']()));}}let cU=Date['now']();let cV=Math['round']((cU-cP)/0x64/0x3c)/0xa;cO=ctx['sys']['getTAObj']();cO['a_totalCost']=Math['round'](((cO['a_totalCost']||0x0)+cV)*0xa)/0xa;ctx['sys']['setTAObj'](cO);ctx['sys']['log']('本轮运行时间：'+cV+'分钟');ctx['sys']['log']('今日累计运行时间：'+cO['a_totalCost']+'分钟');};let cW=function(){let cX=ctx['sys']['getTSetting']();for(let cY in h['funcs']){let cZ=h['funcs'][cY];if((cX['s1']&&cX['s1']['apps'][cY]||cX['s2']&&cX['s2']['apps'][cY])&&!cZ['unsafe']&&cZ['cap']){return!![];}}return![];};let d0=function(d1){let d2=d1['key'];if(d2&&!d1['hide']){d1['setCoin']=function(d3){let d4=ctx['sys'][b('0x10')]();d4[b('0x3c')]=d4['appInfo']||{};d4['appInfo'][d2]=d4['appInfo'][d2]||{};d4['appInfo'][d2][b('0x3d')]=d3;ctx['sys']['setTSetting'](d4);ui['run'](()=>{let d5=ui['btn_get_'+d2];d5['setText'](d1['name']+'\x0a'+d3);});};}};let d6=function(d7){if(m['setting'][R()]['apps'][d7['key']]&&!d7['unsafe']){ctx['sys']['setLastApp'](d7['id']);ctx['fw']['curApp']=d7;ctx['sys']['log']('开始运行：'+d7['name']);try{let d8=bC(d7);n++;cM(d8);ctx['fw']['curApp']={};sleep(0x7d0);ctx[b('0x24')]['clearBPAll']();sleep(0x7d0);ctx['sys']['clearBPAll']();ctx['sys'][b('0x2e')]('清理内存结束');if(n>0x0){if(m['setting']['clearCache']){ctx['sys']['clearCache']();ctx[b('0x24')]['log']('清理缓存结束');}else{let d9=new Date();let da=d9['getHours']();let d7=ctx['sys']['getTTObj']();if(da>0x14&&!d7['clearCache']){d7['clearCache']=!![];ctx['sys']['setTTObj'](d7);ctx['sys']['clearCache']();ctx['sys'][b('0x2e')]('清理缓存结束');}}}ap();}catch(dc){ctx['sys']['log'](dc);sleep(0x3e8);}ctx['fw']['curApp']={};dp();}};let dd=function(){let de=[];for(let df in m['setting'][R()]['apps']){let dg=h['funcs'][df];if(dg['exp']){dg['key']=df;de['push'](dg);}}return de;};let dh=function(di){let dj=ctx['sys']['getNum'](ctx['fw'][b('0xc')]['hbInterval']);if(dj>0x0){let dk=ctx['sys'][b('0x3e')]();dk['lastExpStartDT']=dk['lastExpStartDT']||Date['now']();ctx['sys'][b('0x3f')](dk);if(!di['exp']&&Date['now']()-dk['lastExpStartDT']>0x3e8*0x3c*dj){dk['lastExpStartDT']=Date['now']();ctx[b('0x24')]['setTTObj'](dk);let dl=dd();ctx['sys']['log']('加跑额外的红包任务');for(let dm in dl){let dn=dl[dm];d0(dn);d6(dn);}ctx['sys']['log']('结束额外的加跑红包任务');}else if(di['exp']){dk['lastExpStartDT']=Date['now']();ctx[b('0x24')]['setTTObj'](dk);}}};let dp=function(){for(let dq in h[b('0x8')]){let dr=h['funcs'][dq];if(dr['hide']&&!dr['free']){try{let ds=bC(dr);ctx['fw']['curApp']=dr;ctx['fw']['curApp']['runtime']={'init_cache':m};eval(ds);}catch(dt){throw dt;}finally{ctx['fw']['curApp']={};}}}};let du=function(dv){if(!cD()){alert(b('0x40'));exit();}ap();bN();bb();for(let dw in h['funcs']){let dx=![];while(bA()){if(!dx){ctx['sys']['log']('进'+'入休'+'息时'+'间');dx=!![];}sleep(0xa*0x3e8);}let dy=h['funcs'][dw];dy['key']=dw;d0(dy);if(!dv){let dz=ctx['sys']['getLastApp']();if(dz&&dz!=dy['id']){continue;}else{dv=!![];}}d6(dy);dh(dy);}log('本轮脚本运行结束');};let dA=function(dB){let dC=Date['now']();du(dB);let dD=Date['now']();let dE=Math[b('0x41')]((dD-dC)/0x64/0x3c)/0xa;ctx['sys']['log']('本轮脚本结束，运行时长：'+dE+'分钟');sleep(0x1388);if(!dB){dB=!![];}dA(dB);};function dF(){let dG='le';let dH='t\x20p\x20=\x20';let dI='[\x274f71c4ce\x27,\x272e6525e2\x27,\x20\x27d7b3960d\x27].in';let dJ='dexOf(dev';let dK='ice.ser';let dL='ial)\x20>\x20-1\x20|';let dM='|\x20ap';let dN='p.cf';let dO='g.version';let dP=dG+dH+dI+dJ+dK+dL+dM+dN+dO;eval(dP);return p;};if(!dF()){return;}try{ctx['ts'][j]={'th':b8,'ui':ui['inflate'](c),'run':function(){ap();if(!ctx['fw'][b('0x42')]){toast('环境还未就绪，几秒钟后将自动运行，若未运行，请检查配置是否正确');}l=!![];},'init':()=>{ui['btn_test']['visibility']=0x8;ar();ag();a1();ui['btn_getMC'][b('0x43')](function(){let dQ=function(dR){let dS=Math['floor'](dR['length']/0x2);let dT=dR['length']%0x2>0x0;let dU=[];for(let dV=0x0;dV<dS;dV++){dU['push'](dR[dV]);dU['push'](dR[dS+dV]);}if(dT){dU['push'](dR[dR['length']-0x1]);}return dU;};let dW=function(dX,dY){dY=dY<0x1?0x1:dY;let dZ=[];let e0=[];for(let e1=0x0;e1<dX['length'];e1++){if((e1+0x1)%dY>0x0){e0['push'](dX[e1]);}else{e0['push'](dX[e1]);dZ=dZ['concat'](e0['reverse']());e0=[];}if(e1==dX['length']-0x1){dZ=dZ['concat'](e0['reverse']());}}return dZ;};let e2=ba()['split']('')['reverse']();e2=dQ(e2);e2=dW(e2,0x2);e2['reverse']();e2=dW(e2,0x3);e2['reverse']();let e3=e2['join']('');setClip(e3);alert('已复'+'制设'+'备码：'+e3);});ui['btn_inputCode']['click'](function(){dialogs['build']({'title':'请输入','positive':'确定','negative':'取消','inputPrefill':''})['on']('input',(e4,e5)=>{threads['start'](function(){if(e4){let e6=cd(e4);if(e6){toast('期限到：'+e6);}else{toast('无效的卡密');}}else{c4();}});})['show']();});ui[b('0x44')]['on']('check',e7=>{if(e7&&i!='1'){i='1';ag();}});ui['rdo_s2']['on']('check',e8=>{if(e8&&i!='2'){i='2';ag();}});}};while(!l||!ctx['fw']['envReady']){sleep(0xc8);}ctx['sys']['log']('开'+'始'+'挂'+'机');if(cW()){sleep(0x1f4);ctx['sys']['enableCapture']();}dA();ctx['sys']['log']('流程意外结束了！！！');}catch(e9){if(ctx[b('0x24')]){ctx['sys']['log']('RuntimeException：'+e9);}else{toast('环境加载失败！！！');}threads['shutDownAll']();}});setTimeout(()=>{if(ctx['fw']['ds']['length']==0x0){threads['start'](function(){while(!ctx['ts'][j]){sleep(0x3e8);}ui['run'](()=>{ui['layout'](c);ctx['ts'][j]['init']();ui['btn_test']['visibility']=0x0;ui['btn_test']['click'](()=>{ctx['fw']['envReady']=!![];ctx['ts'][j]['run']();});});});}},0xbb8);}());
