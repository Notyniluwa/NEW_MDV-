const _0x49db36=_0x2305;(function(_0x9666c3,_0x540990){const _0x238b93=_0x2305,_0x4fd7de=_0x9666c3();while(!![]){try{const _0x1a5d9b=-parseInt(_0x238b93(0x191))/0x1*(-parseInt(_0x238b93(0x185))/0x2)+parseInt(_0x238b93(0x1ac))/0x3+parseInt(_0x238b93(0x17b))/0x4*(parseInt(_0x238b93(0x17a))/0x5)+-parseInt(_0x238b93(0x164))/0x6+-parseInt(_0x238b93(0x1b5))/0x7+parseInt(_0x238b93(0x178))/0x8*(-parseInt(_0x238b93(0x1ae))/0x9)+-parseInt(_0x238b93(0x1a8))/0xa*(-parseInt(_0x238b93(0x1b8))/0xb);if(_0x1a5d9b===_0x540990)break;else _0x4fd7de['push'](_0x4fd7de['shift']());}catch(_0x520dd5){_0x4fd7de['push'](_0x4fd7de['shift']());}}}(_0x4a04,0x456c9));function _0x4a04(){const _0x3de081=['caption','function','express','key','conversation','map','stickerMessage','photo','readdirSync','./config','body','hey\x20I\x20am\x20alive,\x20Queen_Anju\x20Is\x20started✅','readMessages','loggedOut','pino','Sin\x20Nombre','\x0a\x0a---\x20Thank\x20you\x20for\x20using\x20**Queen_Anju\x20MD**.\x20\x0aWe\x27re\x20here\x20to\x20make\x20your\x20experience\x20enjoyable\x20and\x20seamless.\x20\x0aIf\x20you\x20need\x20any\x20help\x20or\x20have\x20questions,\x20don\x27t\x20hesitate\x20to\x20ask.\x20\x0a\x0a**Enjoy\x20your\x20time\x20with\x20us!**\x20😊\x20','silent','output','Server\x20listening\x20on\x20port\x20http://localhost:','710IkUypD','AUTO_READ_STATUS','groups','sendMessage','93168txthwV','fromMe','1917693aKsHOr','sendFileUrl','Queen_Anju\x20Session\x20downloaded\x20✅','true','listen','alias','audio','605220xKyKcL','quotedMessage','head','36443VdIoYf','extname','join','existsSync','axios','MODE','participants','./command','gif','log','extendedTextMessage','image','trim','writeFile','imageMessage','.js','application/pdf','message','util','shift','content-type','open','SESSION_ID','get','type','PORT','ephemeralMessage','pattern','Please\x20add\x20your\x20session\x20to\x20SESSION_ID\x20env\x20!!','forEach','Connecting\x20Queen_Anju\x20🧬...','Plugins\x20installed\x20successful\x20✅','toLowerCase','./lib/msg','1621974rBknpF','find','audio/mpeg','length','@s.whatsapp.net','private','statusCode','connection.update','Firefox','send','94717775628','/auth_info_baileys/','Queen_Anju\x20Is\x20Installing...\x20','split','https://mega.nz/file/','video','commands','macOS','contextInfo','videoMessage','8oKMEEv','text','19080gUbsVp','556qZzrwT','status@broadcast','groupMetadata','READ_CMD','subject','startsWith','sticker','./plugins/','path','./lib/functions','394FKpLUi','error','react','@g.us','includes','pushName','[PLUGIN\x20ERROR]\x20','qrcode-terminal','close','\x0a🚀\x20**Queen_Anju\x20MD\x20Connected\x20Successfully!**\x20✅\x20\x0a\x0a---\x20**🎉\x20Welcome\x20to\x20Queen_Anju\x20MD!**\x20🎉\x20\x0a\x0a**🔹\x20PREFIX:**\x20','@whiskeysockets/baileys','user','292GjhpLu','remoteJid','slice'];_0x4a04=function(){return _0x3de081;};return _0x4a04();}const {default:makeWASocket,useMultiFileAuthState,DisconnectReason,jidNormalizedUser,getContentType,fetchLatestBaileysVersion,Browsers}=require(_0x49db36(0x18f)),{getBuffer,getGroupAdmins,getRandom,h2k,isUrl,Json,runtime,sleep,fetchJson}=require(_0x49db36(0x184)),fs=require('fs'),P=require(_0x49db36(0x1a2)),config=require(_0x49db36(0x19d)),qrcode=require(_0x49db36(0x18c)),util=require(_0x49db36(0x154)),{sms,downloadMediaMessage}=require(_0x49db36(0x163)),axios=require(_0x49db36(0x1bc)),{File}=require('megajs'),prefix='.',ownerNumber=[_0x49db36(0x16e)];if(!fs[_0x49db36(0x1bb)](__dirname+'/auth_info_baileys/creds.json')){if(!config[_0x49db36(0x158)])return console[_0x49db36(0x1c1)](_0x49db36(0x15e));const sessdata=config[_0x49db36(0x158)],filer=File['fromURL'](_0x49db36(0x172)+sessdata);filer['download']((_0x4acf84,_0x5a3b2f)=>{const _0x413d6e=_0x49db36;if(_0x4acf84)throw _0x4acf84;fs[_0x413d6e(0x1c5)](__dirname+'/auth_info_baileys/creds.json',_0x5a3b2f,()=>{const _0x1a1b5f=_0x413d6e;console[_0x1a1b5f(0x1c1)](_0x1a1b5f(0x1b0));});});}function _0x2305(_0x364f56,_0x45a4a4){const _0x4a0403=_0x4a04();return _0x2305=function(_0x230588,_0x16099e){_0x230588=_0x230588-0x154;let _0x1c2144=_0x4a0403[_0x230588];return _0x1c2144;},_0x2305(_0x364f56,_0x45a4a4);}const express=require(_0x49db36(0x196)),app=express(),port=process['env'][_0x49db36(0x15b)]||0x1f40;async function connectToWA(){const _0x45c41f=_0x49db36;console[_0x45c41f(0x1c1)](_0x45c41f(0x160));const {state:_0x1594ee,saveCreds:_0x4c821b}=await useMultiFileAuthState(__dirname+_0x45c41f(0x16f));var {version:_0x11d6f6}=await fetchLatestBaileysVersion();const _0x4498e0=makeWASocket({'logger':P({'level':_0x45c41f(0x1a5)}),'printQRInTerminal':![],'browser':Browsers[_0x45c41f(0x175)](_0x45c41f(0x16c)),'syncFullHistory':!![],'auth':_0x1594ee,'version':_0x11d6f6});_0x4498e0['ev']['on'](_0x45c41f(0x16b),_0x57d5ca=>{const _0x418967=_0x45c41f,{connection:_0x1f8fdb,lastDisconnect:_0x5a41b9}=_0x57d5ca;if(_0x1f8fdb===_0x418967(0x18d))_0x5a41b9[_0x418967(0x186)][_0x418967(0x1a6)][_0x418967(0x16a)]!==DisconnectReason[_0x418967(0x1a1)]&&connectToWA();else{if(_0x1f8fdb===_0x418967(0x157)){console[_0x418967(0x1c1)](_0x418967(0x170));const _0x3ab6e1=require(_0x418967(0x183));fs[_0x418967(0x19c)](_0x418967(0x182))[_0x418967(0x15f)](_0x3f87b2=>{const _0x2adf88=_0x418967;_0x3ab6e1[_0x2adf88(0x1b9)](_0x3f87b2)[_0x2adf88(0x162)]()==_0x2adf88(0x1c7)&&require(_0x2adf88(0x182)+_0x3f87b2);}),console['log'](_0x418967(0x161)),console[_0x418967(0x1c1)]('Queen_Anju\x20connected\x20to\x20whatsapp\x20✅');let _0x350a71=_0x418967(0x18e)+prefix+'\x0a\x0a**🔹\x20OWNER:**\x20\x20'+ownerNumber+_0x418967(0x1a4);_0x4498e0['sendMessage'](config['BOT_NUMBER']+'@s.whatsapp.net',{'image':{'url':'https://telegra.ph/file/adc46970456c26cad0c15.jpg'},'caption':_0x350a71});}}}),_0x4498e0['ev']['on']('creds.update',_0x4c821b),_0x4498e0['ev']['on']('messages.upsert',async _0x1ecfdc=>{const _0x5a1c96=_0x45c41f;_0x1ecfdc=_0x1ecfdc['messages'][0x0];if(!_0x1ecfdc['message'])return;_0x1ecfdc[_0x5a1c96(0x1c9)]=getContentType(_0x1ecfdc['message'])===_0x5a1c96(0x15c)?_0x1ecfdc['message'][_0x5a1c96(0x15c)]['message']:_0x1ecfdc[_0x5a1c96(0x1c9)];_0x1ecfdc['key']&&_0x1ecfdc[_0x5a1c96(0x197)][_0x5a1c96(0x192)]===_0x5a1c96(0x17c)&&config[_0x5a1c96(0x1a9)]==='true'&&await _0x4498e0[_0x5a1c96(0x1a0)]([_0x1ecfdc[_0x5a1c96(0x197)]]);const _0x4bde91=sms(_0x4498e0,_0x1ecfdc),_0x3531c1=getContentType(_0x1ecfdc[_0x5a1c96(0x1c9)]),_0xe5dbc6=JSON['stringify'](_0x1ecfdc['message']),_0x21d98b=_0x1ecfdc[_0x5a1c96(0x197)][_0x5a1c96(0x192)],_0x3d900c=_0x3531c1==_0x5a1c96(0x1c2)&&_0x1ecfdc['message'][_0x5a1c96(0x1c2)][_0x5a1c96(0x176)]!=null?_0x1ecfdc['message'][_0x5a1c96(0x1c2)][_0x5a1c96(0x176)][_0x5a1c96(0x1b6)]||[]:[],_0x48e123=_0x3531c1==='conversation'?_0x1ecfdc[_0x5a1c96(0x1c9)][_0x5a1c96(0x198)]:_0x3531c1==='extendedTextMessage'?_0x1ecfdc[_0x5a1c96(0x1c9)]['extendedTextMessage'][_0x5a1c96(0x179)]:_0x3531c1==_0x5a1c96(0x1c6)&&_0x1ecfdc['message'][_0x5a1c96(0x1c6)][_0x5a1c96(0x194)]?_0x1ecfdc[_0x5a1c96(0x1c9)][_0x5a1c96(0x1c6)][_0x5a1c96(0x194)]:_0x3531c1==_0x5a1c96(0x177)&&_0x1ecfdc['message'][_0x5a1c96(0x177)][_0x5a1c96(0x194)]?_0x1ecfdc[_0x5a1c96(0x1c9)][_0x5a1c96(0x177)][_0x5a1c96(0x194)]:'',_0x566713=_0x48e123[_0x5a1c96(0x180)](prefix),_0x374925=_0x566713?_0x48e123['slice'](prefix[_0x5a1c96(0x167)])['trim']()[_0x5a1c96(0x171)]('\x20')[_0x5a1c96(0x155)]()[_0x5a1c96(0x162)]():'',_0x1ce9ea=_0x48e123[_0x5a1c96(0x1c4)]()['split'](/ +/)[_0x5a1c96(0x193)](0x1),_0x2a8a62=_0x1ce9ea[_0x5a1c96(0x1ba)]('\x20'),_0x2819fb=_0x21d98b['endsWith'](_0x5a1c96(0x188)),_0x1ec641=_0x1ecfdc['key'][_0x5a1c96(0x1ad)]?_0x4498e0[_0x5a1c96(0x190)]['id']['split'](':')[0x0]+_0x5a1c96(0x168)||_0x4498e0[_0x5a1c96(0x190)]['id']:_0x1ecfdc['key']['participant']||_0x1ecfdc['key'][_0x5a1c96(0x192)],_0x5c9fd6=_0x1ec641[_0x5a1c96(0x171)]('@')[0x0],_0x12463d=_0x4498e0[_0x5a1c96(0x190)]['id'][_0x5a1c96(0x171)](':')[0x0],_0xcf3ced=_0x1ecfdc[_0x5a1c96(0x18a)]||_0x5a1c96(0x1a3),_0x48c4ee=_0x12463d[_0x5a1c96(0x189)](_0x5c9fd6),_0x463eb5=ownerNumber[_0x5a1c96(0x189)](_0x5c9fd6)||_0x48c4ee,_0x25df09=await jidNormalizedUser(_0x4498e0[_0x5a1c96(0x190)]['id']),_0x1e8c4f=_0x2819fb?await _0x4498e0[_0x5a1c96(0x17d)](_0x21d98b)['catch'](_0x4d4ba9=>{}):'',_0x2242bd=_0x2819fb?_0x1e8c4f[_0x5a1c96(0x17f)]:'',_0x1c4aad=_0x2819fb?await _0x1e8c4f[_0x5a1c96(0x1be)]:'',_0x16fd4f=_0x2819fb?await getGroupAdmins(_0x1c4aad):'',_0xb7b6f8=_0x2819fb?_0x16fd4f[_0x5a1c96(0x189)](_0x25df09):![],_0x1e397d=_0x2819fb?_0x16fd4f[_0x5a1c96(0x189)](_0x1ec641):![],_0x3eca10=_0x33ab46=>{const _0x2fd198=_0x5a1c96;_0x4498e0[_0x2fd198(0x1ab)](_0x21d98b,{'text':_0x33ab46},{'quoted':_0x1ecfdc});};_0x4498e0[_0x5a1c96(0x1af)]=async(_0x3a388e,_0x24105c,_0x3e8d93,_0xbdd68,_0x5dd8b9={})=>{const _0x8fca8e=_0x5a1c96;let _0x5b5470='',_0x385cd3=await axios[_0x8fca8e(0x1b7)](_0x24105c);_0x5b5470=_0x385cd3['headers'][_0x8fca8e(0x156)];if(_0x5b5470[_0x8fca8e(0x171)]('/')[0x1]===_0x8fca8e(0x1c0))return _0x4498e0[_0x8fca8e(0x1ab)](_0x3a388e,{'video':await getBuffer(_0x24105c),'caption':_0x3e8d93,'gifPlayback':!![],..._0x5dd8b9},{'quoted':_0xbdd68,..._0x5dd8b9});let _0x2813b7=_0x5b5470['split']('/')[0x0]+'Message';if(_0x5b5470===_0x8fca8e(0x1c8))return _0x4498e0[_0x8fca8e(0x1ab)](_0x3a388e,{'document':await getBuffer(_0x24105c),'mimetype':_0x8fca8e(0x1c8),'caption':_0x3e8d93,..._0x5dd8b9},{'quoted':_0xbdd68,..._0x5dd8b9});if(_0x5b5470[_0x8fca8e(0x171)]('/')[0x0]===_0x8fca8e(0x1c3))return _0x4498e0[_0x8fca8e(0x1ab)](_0x3a388e,{'image':await getBuffer(_0x24105c),'caption':_0x3e8d93,..._0x5dd8b9},{'quoted':_0xbdd68,..._0x5dd8b9});if(_0x5b5470[_0x8fca8e(0x171)]('/')[0x0]===_0x8fca8e(0x173))return _0x4498e0[_0x8fca8e(0x1ab)](_0x3a388e,{'video':await getBuffer(_0x24105c),'caption':_0x3e8d93,'mimetype':'video/mp4',..._0x5dd8b9},{'quoted':_0xbdd68,..._0x5dd8b9});if(_0x5b5470[_0x8fca8e(0x171)]('/')[0x0]===_0x8fca8e(0x1b4))return _0x4498e0['sendMessage'](_0x3a388e,{'audio':await getBuffer(_0x24105c),'caption':_0x3e8d93,'mimetype':_0x8fca8e(0x166),..._0x5dd8b9},{'quoted':_0xbdd68,..._0x5dd8b9});};_0x566713&&config[_0x5a1c96(0x17e)]===_0x5a1c96(0x1b1)&&await _0x4498e0[_0x5a1c96(0x1a0)]([_0x1ecfdc[_0x5a1c96(0x197)]]);if(!_0x463eb5&&config[_0x5a1c96(0x1bd)]===_0x5a1c96(0x169))return;if(!_0x463eb5&&_0x2819fb&&config[_0x5a1c96(0x1bd)]==='inbox')return;if(!_0x463eb5&&!_0x2819fb&&config['MODE']===_0x5a1c96(0x1aa))return;const _0x69dad5=require(_0x5a1c96(0x1bf)),_0x3020ff=_0x566713?_0x48e123[_0x5a1c96(0x193)](0x1)[_0x5a1c96(0x1c4)]()[_0x5a1c96(0x171)]('\x20')[0x0][_0x5a1c96(0x162)]():![];if(_0x566713){const _0x3e9873=_0x69dad5[_0x5a1c96(0x174)][_0x5a1c96(0x165)](_0x60ab02=>_0x60ab02[_0x5a1c96(0x15d)]===_0x3020ff)||_0x69dad5[_0x5a1c96(0x174)]['find'](_0x49686d=>_0x49686d[_0x5a1c96(0x1b3)]&&_0x49686d[_0x5a1c96(0x1b3)][_0x5a1c96(0x189)](_0x3020ff));if(_0x3e9873){if(_0x3e9873[_0x5a1c96(0x187)])_0x4498e0[_0x5a1c96(0x1ab)](_0x21d98b,{'react':{'text':_0x3e9873[_0x5a1c96(0x187)],'key':_0x1ecfdc[_0x5a1c96(0x197)]}});try{_0x3e9873['function'](_0x4498e0,_0x1ecfdc,_0x4bde91,{'from':_0x21d98b,'quoted':_0x3d900c,'body':_0x48e123,'isCmd':_0x566713,'command':_0x374925,'args':_0x1ce9ea,'q':_0x2a8a62,'isGroup':_0x2819fb,'sender':_0x1ec641,'senderNumber':_0x5c9fd6,'botNumber2':_0x25df09,'botNumber':_0x12463d,'pushname':_0xcf3ced,'isMe':_0x48c4ee,'isOwner':_0x463eb5,'groupMetadata':_0x1e8c4f,'groupName':_0x2242bd,'participants':_0x1c4aad,'groupAdmins':_0x16fd4f,'isBotAdmins':_0xb7b6f8,'isAdmins':_0x1e397d,'reply':_0x3eca10});}catch(_0x35d007){console['error'](_0x5a1c96(0x18b)+_0x35d007);}}}_0x69dad5['commands'][_0x5a1c96(0x199)](async _0x2d6ac8=>{const _0x1948c8=_0x5a1c96;if(_0x48e123&&_0x2d6ac8['on']===_0x1948c8(0x19e))_0x2d6ac8['function'](_0x4498e0,_0x1ecfdc,_0x4bde91,{'from':_0x21d98b,'l':l,'quoted':_0x3d900c,'body':_0x48e123,'isCmd':_0x566713,'command':_0x2d6ac8,'args':_0x1ce9ea,'q':_0x2a8a62,'isGroup':_0x2819fb,'sender':_0x1ec641,'senderNumber':_0x5c9fd6,'botNumber2':_0x25df09,'botNumber':_0x12463d,'pushname':_0xcf3ced,'isMe':_0x48c4ee,'isOwner':_0x463eb5,'groupMetadata':_0x1e8c4f,'groupName':_0x2242bd,'participants':_0x1c4aad,'groupAdmins':_0x16fd4f,'isBotAdmins':_0xb7b6f8,'isAdmins':_0x1e397d,'reply':_0x3eca10});else{if(_0x1ecfdc['q']&&_0x2d6ac8['on']==='text')_0x2d6ac8[_0x1948c8(0x195)](_0x4498e0,_0x1ecfdc,_0x4bde91,{'from':_0x21d98b,'l':l,'quoted':_0x3d900c,'body':_0x48e123,'isCmd':_0x566713,'command':_0x2d6ac8,'args':_0x1ce9ea,'q':_0x2a8a62,'isGroup':_0x2819fb,'sender':_0x1ec641,'senderNumber':_0x5c9fd6,'botNumber2':_0x25df09,'botNumber':_0x12463d,'pushname':_0xcf3ced,'isMe':_0x48c4ee,'isOwner':_0x463eb5,'groupMetadata':_0x1e8c4f,'groupName':_0x2242bd,'participants':_0x1c4aad,'groupAdmins':_0x16fd4f,'isBotAdmins':_0xb7b6f8,'isAdmins':_0x1e397d,'reply':_0x3eca10});else{if((_0x2d6ac8['on']==='image'||_0x2d6ac8['on']===_0x1948c8(0x19b))&&_0x1ecfdc[_0x1948c8(0x15a)]==='imageMessage')_0x2d6ac8['function'](_0x4498e0,_0x1ecfdc,_0x4bde91,{'from':_0x21d98b,'l':l,'quoted':_0x3d900c,'body':_0x48e123,'isCmd':_0x566713,'command':_0x2d6ac8,'args':_0x1ce9ea,'q':_0x2a8a62,'isGroup':_0x2819fb,'sender':_0x1ec641,'senderNumber':_0x5c9fd6,'botNumber2':_0x25df09,'botNumber':_0x12463d,'pushname':_0xcf3ced,'isMe':_0x48c4ee,'isOwner':_0x463eb5,'groupMetadata':_0x1e8c4f,'groupName':_0x2242bd,'participants':_0x1c4aad,'groupAdmins':_0x16fd4f,'isBotAdmins':_0xb7b6f8,'isAdmins':_0x1e397d,'reply':_0x3eca10});else _0x2d6ac8['on']===_0x1948c8(0x181)&&_0x1ecfdc[_0x1948c8(0x15a)]===_0x1948c8(0x19a)&&_0x2d6ac8['function'](_0x4498e0,_0x1ecfdc,_0x4bde91,{'from':_0x21d98b,'l':l,'quoted':_0x3d900c,'body':_0x48e123,'isCmd':_0x566713,'command':_0x2d6ac8,'args':_0x1ce9ea,'q':_0x2a8a62,'isGroup':_0x2819fb,'sender':_0x1ec641,'senderNumber':_0x5c9fd6,'botNumber2':_0x25df09,'botNumber':_0x12463d,'pushname':_0xcf3ced,'isMe':_0x48c4ee,'isOwner':_0x463eb5,'groupMetadata':_0x1e8c4f,'groupName':_0x2242bd,'participants':_0x1c4aad,'groupAdmins':_0x16fd4f,'isBotAdmins':_0xb7b6f8,'isAdmins':_0x1e397d,'reply':_0x3eca10});}}});});}app[_0x49db36(0x159)]('/',(_0x1cb9ec,_0x215606)=>{const _0x56d1a4=_0x49db36;_0x215606[_0x56d1a4(0x16d)](_0x56d1a4(0x19f));}),app[_0x49db36(0x1b2)](port,()=>console[_0x49db36(0x1c1)](_0x49db36(0x1a7)+port)),setTimeout(()=>{connectToWA();},0xfa0);
