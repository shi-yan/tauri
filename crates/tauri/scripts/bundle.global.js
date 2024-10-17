var __TAURI_IIFE__=function(e){"use strict";function n(e,n,t,i){if("a"===t&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof n?e!==n||!i:!n.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===t?i:"a"===t?i.call(e):i?i.value:n.get(e)}function t(e,n,t,i,r){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof n?e!==n||!r:!n.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?r.call(e,t):r?r.value=t:n.set(e,t),t}var i,r,a,s;function l(e,n=!1){return window.__TAURI_INTERNALS__.transformCallback(e,n)}"function"==typeof SuppressedError&&SuppressedError;class o{constructor(){this.__TAURI_CHANNEL_MARKER__=!0,i.set(this,(()=>{})),r.set(this,0),a.set(this,{}),this.id=l((({message:e,id:s})=>{if(s===n(this,r,"f")){t(this,r,s+1,"f"),n(this,i,"f").call(this,e);const l=Object.keys(n(this,a,"f"));if(l.length>0){let e=s+1;for(const t of l.sort()){if(parseInt(t)!==e)break;{const r=n(this,a,"f")[t];delete n(this,a,"f")[t],n(this,i,"f").call(this,r),e+=1}}t(this,r,e,"f")}}else n(this,a,"f")[s.toString()]=e}))}set onmessage(e){t(this,i,e,"f")}get onmessage(){return n(this,i,"f")}toJSON(){return`__CHANNEL__:${this.id}`}}i=new WeakMap,r=new WeakMap,a=new WeakMap;class u{constructor(e,n,t){this.plugin=e,this.event=n,this.channelId=t}async unregister(){return c(`plugin:${this.plugin}|remove_listener`,{event:this.event,channelId:this.channelId})}}async function c(e,n={},t){return window.__TAURI_INTERNALS__.invoke(e,n,t)}class d{get rid(){return n(this,s,"f")}constructor(e){s.set(this,void 0),t(this,s,e,"f")}async close(){return c("plugin:resources|close",{rid:this.rid})}}s=new WeakMap;const p="__TAURI_TO_IPC_KEY__";var h=Object.freeze({__proto__:null,Channel:o,PluginListener:u,Resource:d,ToIPCKey:p,addPluginListener:async function(e,n,t){const i=new o;return i.onmessage=t,c(`plugin:${e}|register_listener`,{event:n,handler:i}).then((()=>new u(e,n,i.id)))},checkPermissions:async function(e){return c(`plugin:${e}|check_permissions`)},convertFileSrc:function(e,n="asset"){return window.__TAURI_INTERNALS__.convertFileSrc(e,n)},invoke:c,isTauri:function(){return"isTauri"in window&&!!window.isTauri},requestPermissions:async function(e){return c(`plugin:${e}|request_permissions`)},transformCallback:l});class w extends d{constructor(e){super(e)}static async new(e,n,t){return c("plugin:image|new",{rgba:y(e),width:n,height:t}).then((e=>new w(e)))}static async fromBytes(e){return c("plugin:image|from_bytes",{bytes:y(e)}).then((e=>new w(e)))}static async fromPath(e){return c("plugin:image|from_path",{path:e}).then((e=>new w(e)))}async rgba(){return c("plugin:image|rgba",{rid:this.rid}).then((e=>new Uint8Array(e)))}async size(){return c("plugin:image|size",{rid:this.rid})}}function y(e){return null==e?null:"string"==typeof e?e:e instanceof w?e.rid:e}var _=Object.freeze({__proto__:null,Image:w,transformImage:y});var g=Object.freeze({__proto__:null,defaultWindowIcon:async function(){return c("plugin:app|default_window_icon").then((e=>e?new w(e):null))},getName:async function(){return c("plugin:app|name")},getTauriVersion:async function(){return c("plugin:app|tauri_version")},getVersion:async function(){return c("plugin:app|version")},hide:async function(){return c("plugin:app|app_hide")},setTheme:async function(e){return c("plugin:app|set_app_theme",{theme:e})},show:async function(){return c("plugin:app|app_show")}});class b{constructor(...e){this.type="Logical",1===e.length?"Logical"in e[0]?(this.width=e[0].Logical.width,this.height=e[0].Logical.height):(this.width=e[0].width,this.height=e[0].height):(this.width=e[0],this.height=e[1])}toPhysical(e){return new m(this.width*e,this.height*e)}[p](){return{Logical:{width:this.width,height:this.height}}}toJSON(){return this[p]()}}class m{constructor(...e){this.type="Physical",1===e.length?"Physical"in e[0]?(this.width=e[0].Physical.width,this.height=e[0].Physical.height):(this.width=e[0].width,this.height=e[0].height):(this.width=e[0],this.height=e[1])}toLogical(e){return new b(this.width/e,this.height/e)}[p](){return{Physical:{width:this.width,height:this.height}}}toJSON(){return this[p]()}}class v{constructor(...e){this.type="Logical",1===e.length?"Logical"in e[0]?(this.x=e[0].Logical.x,this.y=e[0].Logical.y):(this.x=e[0].x,this.y=e[0].y):(this.x=e[0],this.y=e[1])}toPhysical(e){return new f(this.x*e,this.x*e)}[p](){return{Logical:{x:this.x,y:this.y}}}toJSON(){return this[p]()}}class f{constructor(...e){this.type="Physical",1===e.length?"Physical"in e[0]?(this.x=e[0].Physical.x,this.y=e[0].Physical.y):(this.x=e[0].x,this.y=e[0].y):(this.x=e[0],this.y=e[1])}[p](){return{Physical:{x:this.x,y:this.y}}}toJSON(){return this[p]()}}var k,A=Object.freeze({__proto__:null,LogicalPosition:v,LogicalSize:b,PhysicalPosition:f,PhysicalSize:m});async function E(e,n){await c("plugin:event|unlisten",{event:e,eventId:n})}async function T(e,n,t){var i;const r="string"==typeof(null==t?void 0:t.target)?{kind:"AnyLabel",label:t.target}:null!==(i=null==t?void 0:t.target)&&void 0!==i?i:{kind:"Any"};return c("plugin:event|listen",{event:e,target:r,handler:l(n)}).then((n=>async()=>E(e,n)))}async function D(e,n,t){return T(e,(t=>{E(e,t.id),n(t)}),t)}async function I(e,n){await c("plugin:event|emit",{event:e,payload:n})}async function R(e,n,t){const i="string"==typeof e?{kind:"AnyLabel",label:e}:e;await c("plugin:event|emit_to",{target:i,event:n,payload:t})}!function(e){e.WINDOW_RESIZED="tauri://resize",e.WINDOW_MOVED="tauri://move",e.WINDOW_CLOSE_REQUESTED="tauri://close-requested",e.WINDOW_DESTROYED="tauri://destroyed",e.WINDOW_FOCUS="tauri://focus",e.WINDOW_BLUR="tauri://blur",e.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",e.WINDOW_THEME_CHANGED="tauri://theme-changed",e.WINDOW_CREATED="tauri://window-created",e.WEBVIEW_CREATED="tauri://webview-created",e.DRAG_ENTER="tauri://drag-enter",e.DRAG_OVER="tauri://drag-over",e.DRAG_DROP="tauri://drag-drop",e.DRAG_LEAVE="tauri://drag-leave"}(k||(k={}));var S,L,x,C=Object.freeze({__proto__:null,get TauriEvent(){return k},emit:I,emitTo:R,listen:T,once:D});function N(e){var n;if("items"in e)e.items=null===(n=e.items)||void 0===n?void 0:n.map((e=>"rid"in e?e:N(e)));else if("action"in e&&e.action){const n=new o;return n.onmessage=e.action,delete e.action,{...e,handler:n}}return e}async function W(e,n){const t=new o;let i=null;return n&&"object"==typeof n&&("action"in n&&n.action&&(t.onmessage=n.action,delete n.action),"items"in n&&n.items&&(i=n.items.map((e=>{var n;return"rid"in e?[e.rid,e.kind]:("item"in e&&"object"==typeof e.item&&(null===(n=e.item.About)||void 0===n?void 0:n.icon)&&(e.item.About.icon=y(e.item.About.icon)),"icon"in e&&e.icon&&(e.icon=y(e.icon)),N(e))})))),c("plugin:menu|new",{kind:e,options:n?{...n,items:i}:void 0,handler:t})}class P extends d{get id(){return n(this,S,"f")}get kind(){return n(this,L,"f")}constructor(e,n,i){super(e),S.set(this,void 0),L.set(this,void 0),t(this,S,n,"f"),t(this,L,i,"f")}}S=new WeakMap,L=new WeakMap;class O extends P{constructor(e,n){super(e,n,"MenuItem")}static async new(e){return W("MenuItem",e).then((([e,n])=>new O(e,n)))}async text(){return c("plugin:menu|text",{rid:this.rid,kind:this.kind})}async setText(e){return c("plugin:menu|set_text",{rid:this.rid,kind:this.kind,text:e})}async isEnabled(){return c("plugin:menu|is_enabled",{rid:this.rid,kind:this.kind})}async setEnabled(e){return c("plugin:menu|set_enabled",{rid:this.rid,kind:this.kind,enabled:e})}async setAccelerator(e){return c("plugin:menu|set_accelerator",{rid:this.rid,kind:this.kind,accelerator:e})}}class z extends P{constructor(e,n){super(e,n,"Check")}static async new(e){return W("Check",e).then((([e,n])=>new z(e,n)))}async text(){return c("plugin:menu|text",{rid:this.rid,kind:this.kind})}async setText(e){return c("plugin:menu|set_text",{rid:this.rid,kind:this.kind,text:e})}async isEnabled(){return c("plugin:menu|is_enabled",{rid:this.rid,kind:this.kind})}async setEnabled(e){return c("plugin:menu|set_enabled",{rid:this.rid,kind:this.kind,enabled:e})}async setAccelerator(e){return c("plugin:menu|set_accelerator",{rid:this.rid,kind:this.kind,accelerator:e})}async isChecked(){return c("plugin:menu|is_checked",{rid:this.rid})}async setChecked(e){return c("plugin:menu|set_checked",{rid:this.rid,checked:e})}}!function(e){e.Add="Add",e.Advanced="Advanced",e.Bluetooth="Bluetooth",e.Bookmarks="Bookmarks",e.Caution="Caution",e.ColorPanel="ColorPanel",e.ColumnView="ColumnView",e.Computer="Computer",e.EnterFullScreen="EnterFullScreen",e.Everyone="Everyone",e.ExitFullScreen="ExitFullScreen",e.FlowView="FlowView",e.Folder="Folder",e.FolderBurnable="FolderBurnable",e.FolderSmart="FolderSmart",e.FollowLinkFreestanding="FollowLinkFreestanding",e.FontPanel="FontPanel",e.GoLeft="GoLeft",e.GoRight="GoRight",e.Home="Home",e.IChatTheater="IChatTheater",e.IconView="IconView",e.Info="Info",e.InvalidDataFreestanding="InvalidDataFreestanding",e.LeftFacingTriangle="LeftFacingTriangle",e.ListView="ListView",e.LockLocked="LockLocked",e.LockUnlocked="LockUnlocked",e.MenuMixedState="MenuMixedState",e.MenuOnState="MenuOnState",e.MobileMe="MobileMe",e.MultipleDocuments="MultipleDocuments",e.Network="Network",e.Path="Path",e.PreferencesGeneral="PreferencesGeneral",e.QuickLook="QuickLook",e.RefreshFreestanding="RefreshFreestanding",e.Refresh="Refresh",e.Remove="Remove",e.RevealFreestanding="RevealFreestanding",e.RightFacingTriangle="RightFacingTriangle",e.Share="Share",e.Slideshow="Slideshow",e.SmartBadge="SmartBadge",e.StatusAvailable="StatusAvailable",e.StatusNone="StatusNone",e.StatusPartiallyAvailable="StatusPartiallyAvailable",e.StatusUnavailable="StatusUnavailable",e.StopProgressFreestanding="StopProgressFreestanding",e.StopProgress="StopProgress",e.TrashEmpty="TrashEmpty",e.TrashFull="TrashFull",e.User="User",e.UserAccounts="UserAccounts",e.UserGroup="UserGroup",e.UserGuest="UserGuest"}(x||(x={}));class F extends P{constructor(e,n){super(e,n,"Icon")}static async new(e){return W("Icon",e).then((([e,n])=>new F(e,n)))}async text(){return c("plugin:menu|text",{rid:this.rid,kind:this.kind})}async setText(e){return c("plugin:menu|set_text",{rid:this.rid,kind:this.kind,text:e})}async isEnabled(){return c("plugin:menu|is_enabled",{rid:this.rid,kind:this.kind})}async setEnabled(e){return c("plugin:menu|set_enabled",{rid:this.rid,kind:this.kind,enabled:e})}async setAccelerator(e){return c("plugin:menu|set_accelerator",{rid:this.rid,kind:this.kind,accelerator:e})}async setIcon(e){return c("plugin:menu|set_icon",{rid:this.rid,icon:y(e)})}}class M extends P{constructor(e,n){super(e,n,"Predefined")}static async new(e){return W("Predefined",e).then((([e,n])=>new M(e,n)))}async text(){return c("plugin:menu|text",{rid:this.rid,kind:this.kind})}async setText(e){return c("plugin:menu|set_text",{rid:this.rid,kind:this.kind,text:e})}}function U([e,n,t]){switch(t){case"Submenu":return new B(e,n);case"Predefined":return new M(e,n);case"Check":return new z(e,n);case"Icon":return new F(e,n);default:return new O(e,n)}}class B extends P{constructor(e,n){super(e,n,"Submenu")}static async new(e){return W("Submenu",e).then((([e,n])=>new B(e,n)))}async text(){return c("plugin:menu|text",{rid:this.rid,kind:this.kind})}async setText(e){return c("plugin:menu|set_text",{rid:this.rid,kind:this.kind,text:e})}async isEnabled(){return c("plugin:menu|is_enabled",{rid:this.rid,kind:this.kind})}async setEnabled(e){return c("plugin:menu|set_enabled",{rid:this.rid,kind:this.kind,enabled:e})}async append(e){return c("plugin:menu|append",{rid:this.rid,kind:this.kind,items:(Array.isArray(e)?e:[e]).map((e=>"rid"in e?[e.rid,e.kind]:e))})}async prepend(e){return c("plugin:menu|prepend",{rid:this.rid,kind:this.kind,items:(Array.isArray(e)?e:[e]).map((e=>"rid"in e?[e.rid,e.kind]:e))})}async insert(e,n){return c("plugin:menu|insert",{rid:this.rid,kind:this.kind,items:(Array.isArray(e)?e:[e]).map((e=>"rid"in e?[e.rid,e.kind]:e)),position:n})}async remove(e){return c("plugin:menu|remove",{rid:this.rid,kind:this.kind,item:[e.rid,e.kind]})}async removeAt(e){return c("plugin:menu|remove_at",{rid:this.rid,kind:this.kind,position:e}).then(U)}async items(){return c("plugin:menu|items",{rid:this.rid,kind:this.kind}).then((e=>e.map(U)))}async get(e){return c("plugin:menu|get",{rid:this.rid,kind:this.kind,id:e}).then((e=>e?U(e):null))}async popup(e,n){var t;return c("plugin:menu|popup",{rid:this.rid,kind:this.kind,window:null!==(t=null==n?void 0:n.label)&&void 0!==t?t:null,at:e})}async setAsWindowsMenuForNSApp(){return c("plugin:menu|set_as_windows_menu_for_nsapp",{rid:this.rid})}async setAsHelpMenuForNSApp(){return c("plugin:menu|set_as_help_menu_for_nsapp",{rid:this.rid})}}function j([e,n,t]){switch(t){case"Submenu":return new B(e,n);case"Predefined":return new M(e,n);case"Check":return new z(e,n);case"Icon":return new F(e,n);default:return new O(e,n)}}class V extends P{constructor(e,n){super(e,n,"Menu")}static async new(e){return W("Menu",e).then((([e,n])=>new V(e,n)))}static async default(){return c("plugin:menu|create_default").then((([e,n])=>new V(e,n)))}async append(e){return c("plugin:menu|append",{rid:this.rid,kind:this.kind,items:(Array.isArray(e)?e:[e]).map((e=>"rid"in e?[e.rid,e.kind]:e))})}async prepend(e){return c("plugin:menu|prepend",{rid:this.rid,kind:this.kind,items:(Array.isArray(e)?e:[e]).map((e=>"rid"in e?[e.rid,e.kind]:e))})}async insert(e,n){return c("plugin:menu|insert",{rid:this.rid,kind:this.kind,items:(Array.isArray(e)?e:[e]).map((e=>"rid"in e?[e.rid,e.kind]:e)),position:n})}async remove(e){return c("plugin:menu|remove",{rid:this.rid,kind:this.kind,item:[e.rid,e.kind]})}async removeAt(e){return c("plugin:menu|remove_at",{rid:this.rid,kind:this.kind,position:e}).then(j)}async items(){return c("plugin:menu|items",{rid:this.rid,kind:this.kind}).then((e=>e.map(j)))}async get(e){return c("plugin:menu|get",{rid:this.rid,kind:this.kind,id:e}).then((e=>e?j(e):null))}async popup(e,n){var t;return c("plugin:menu|popup",{rid:this.rid,kind:this.kind,window:null!==(t=null==n?void 0:n.label)&&void 0!==t?t:null,at:e})}async setAsAppMenu(){return c("plugin:menu|set_as_app_menu",{rid:this.rid}).then((e=>e?new V(e[0],e[1]):null))}async setAsWindowMenu(e){var n;return c("plugin:menu|set_as_window_menu",{rid:this.rid,window:null!==(n=null==e?void 0:e.label)&&void 0!==n?n:null}).then((e=>e?new V(e[0],e[1]):null))}}var G=Object.freeze({__proto__:null,CheckMenuItem:z,IconMenuItem:F,Menu:V,MenuItem:O,get NativeIcon(){return x},PredefinedMenuItem:M,Submenu:B});function H(){var e;window.__TAURI_INTERNALS__=null!==(e=window.__TAURI_INTERNALS__)&&void 0!==e?e:{}}var $,q=Object.freeze({__proto__:null,clearMocks:function(){var e,n,t;"object"==typeof window.__TAURI_INTERNALS__&&((null===(e=window.__TAURI_INTERNALS__)||void 0===e?void 0:e.convertFileSrc)&&delete window.__TAURI_INTERNALS__.convertFileSrc,(null===(n=window.__TAURI_INTERNALS__)||void 0===n?void 0:n.invoke)&&delete window.__TAURI_INTERNALS__.invoke,(null===(t=window.__TAURI_INTERNALS__)||void 0===t?void 0:t.metadata)&&delete window.__TAURI_INTERNALS__.metadata)},mockConvertFileSrc:function(e){H(),window.__TAURI_INTERNALS__.convertFileSrc=function(n,t="asset"){const i=encodeURIComponent(n);return"windows"===e?`http://${t}.localhost/${i}`:`${t}://localhost/${i}`}},mockIPC:function(e){H(),window.__TAURI_INTERNALS__.transformCallback=function(e,n=!1){const t=window.crypto.getRandomValues(new Uint32Array(1))[0],i=`_${t}`;return Object.defineProperty(window,i,{value:t=>(n&&Reflect.deleteProperty(window,i),e&&e(t)),writable:!1,configurable:!0}),t},window.__TAURI_INTERNALS__.invoke=function(n,t,i){return e(n,t)}},mockWindows:function(e,...n){H(),window.__TAURI_INTERNALS__.metadata={currentWindow:{label:e},currentWebview:{windowLabel:e,label:e}}}});!function(e){e[e.Audio=1]="Audio",e[e.Cache=2]="Cache",e[e.Config=3]="Config",e[e.Data=4]="Data",e[e.LocalData=5]="LocalData",e[e.Document=6]="Document",e[e.Download=7]="Download",e[e.Picture=8]="Picture",e[e.Public=9]="Public",e[e.Video=10]="Video",e[e.Resource=11]="Resource",e[e.Temp=12]="Temp",e[e.AppConfig=13]="AppConfig",e[e.AppData=14]="AppData",e[e.AppLocalData=15]="AppLocalData",e[e.AppCache=16]="AppCache",e[e.AppLog=17]="AppLog",e[e.Desktop=18]="Desktop",e[e.Executable=19]="Executable",e[e.Font=20]="Font",e[e.Home=21]="Home",e[e.Runtime=22]="Runtime",e[e.Template=23]="Template"}($||($={}));var J=Object.freeze({__proto__:null,get BaseDirectory(){return $},appCacheDir:async function(){return c("plugin:path|resolve_directory",{directory:$.AppCache})},appConfigDir:async function(){return c("plugin:path|resolve_directory",{directory:$.AppConfig})},appDataDir:async function(){return c("plugin:path|resolve_directory",{directory:$.AppData})},appLocalDataDir:async function(){return c("plugin:path|resolve_directory",{directory:$.AppLocalData})},appLogDir:async function(){return c("plugin:path|resolve_directory",{directory:$.AppLog})},audioDir:async function(){return c("plugin:path|resolve_directory",{directory:$.Audio})},basename:async function(e,n){return c("plugin:path|basename",{path:e,ext:n})},cacheDir:async function(){return c("plugin:path|resolve_directory",{directory:$.Cache})},configDir:async function(){return c("plugin:path|resolve_directory",{directory:$.Config})},dataDir:async function(){return c("plugin:path|resolve_directory",{directory:$.Data})},delimiter:function(){return window.__TAURI_INTERNALS__.plugins.path.delimiter},desktopDir:async function(){return c("plugin:path|resolve_directory",{directory:$.Desktop})},dirname:async function(e){return c("plugin:path|dirname",{path:e})},documentDir:async function(){return c("plugin:path|resolve_directory",{directory:$.Document})},downloadDir:async function(){return c("plugin:path|resolve_directory",{directory:$.Download})},executableDir:async function(){return c("plugin:path|resolve_directory",{directory:$.Executable})},extname:async function(e){return c("plugin:path|extname",{path:e})},fontDir:async function(){return c("plugin:path|resolve_directory",{directory:$.Font})},homeDir:async function(){return c("plugin:path|resolve_directory",{directory:$.Home})},isAbsolute:async function(e){return c("plugin:path|isAbsolute",{path:e})},join:async function(...e){return c("plugin:path|join",{paths:e})},localDataDir:async function(){return c("plugin:path|resolve_directory",{directory:$.LocalData})},normalize:async function(e){return c("plugin:path|normalize",{path:e})},pictureDir:async function(){return c("plugin:path|resolve_directory",{directory:$.Picture})},publicDir:async function(){return c("plugin:path|resolve_directory",{directory:$.Public})},resolve:async function(...e){return c("plugin:path|resolve",{paths:e})},resolveResource:async function(e){return c("plugin:path|resolve_directory",{directory:$.Resource,path:e})},resourceDir:async function(){return c("plugin:path|resolve_directory",{directory:$.Resource})},runtimeDir:async function(){return c("plugin:path|resolve_directory",{directory:$.Runtime})},sep:function(){return window.__TAURI_INTERNALS__.plugins.path.sep},tempDir:async function(){return c("plugin:path|resolve_directory",{directory:$.Temp})},templateDir:async function(){return c("plugin:path|resolve_directory",{directory:$.Template})},videoDir:async function(){return c("plugin:path|resolve_directory",{directory:$.Video})}});class Q extends d{constructor(e,n){super(e),this.id=n}static async getById(e){return c("plugin:tray|get_by_id",{id:e}).then((n=>n?new Q(n,e):null))}static async removeById(e){return c("plugin:tray|remove_by_id",{id:e})}static async new(e){(null==e?void 0:e.menu)&&(e.menu=[e.menu.rid,e.menu.kind]),(null==e?void 0:e.icon)&&(e.icon=y(e.icon));const n=new o;if(null==e?void 0:e.action){const t=e.action;n.onmessage=e=>t(function(e){const n=e;return n.position=new f(e.position),n.rect.position=new f(e.rect.position),n.rect.size=new m(e.rect.size),n}(e)),delete e.action}return c("plugin:tray|new",{options:null!=e?e:{},handler:n}).then((([e,n])=>new Q(e,n)))}async setIcon(e){let n=null;return e&&(n=y(e)),c("plugin:tray|set_icon",{rid:this.rid,icon:n})}async setMenu(e){return e&&(e=[e.rid,e.kind]),c("plugin:tray|set_menu",{rid:this.rid,menu:e})}async setTooltip(e){return c("plugin:tray|set_tooltip",{rid:this.rid,tooltip:e})}async setTitle(e){return c("plugin:tray|set_title",{rid:this.rid,title:e})}async setVisible(e){return c("plugin:tray|set_visible",{rid:this.rid,visible:e})}async setTempDirPath(e){return c("plugin:tray|set_temp_dir_path",{rid:this.rid,path:e})}async setIconAsTemplate(e){return c("plugin:tray|set_icon_as_template",{rid:this.rid,asTemplate:e})}async setMenuOnLeftClick(e){return c("plugin:tray|set_show_menu_on_left_click",{rid:this.rid,onLeft:e})}}var K,Z,Y=Object.freeze({__proto__:null,TrayIcon:Q});!function(e){e[e.Critical=1]="Critical",e[e.Informational=2]="Informational"}(K||(K={}));class X{constructor(e){this._preventDefault=!1,this.event=e.event,this.id=e.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}}function ee(){return new ie(window.__TAURI_INTERNALS__.metadata.currentWindow.label,{skip:!0})}async function ne(){return c("plugin:window|get_all_windows").then((e=>e.map((e=>new ie(e,{skip:!0})))))}!function(e){e.None="none",e.Normal="normal",e.Indeterminate="indeterminate",e.Paused="paused",e.Error="error"}(Z||(Z={}));const te=["tauri://created","tauri://error"];class ie{constructor(e,n={}){var t;this.label=e,this.listeners=Object.create(null),(null==n?void 0:n.skip)||c("plugin:window|create",{options:{...n,parent:"string"==typeof n.parent?n.parent:null===(t=n.parent)||void 0===t?void 0:t.label,label:e}}).then((async()=>this.emit("tauri://created"))).catch((async e=>this.emit("tauri://error",e)))}static async getByLabel(e){var n;return null!==(n=(await ne()).find((n=>n.label===e)))&&void 0!==n?n:null}static getCurrent(){return ee()}static async getAll(){return ne()}static async getFocusedWindow(){for(const e of await ne())if(await e.isFocused())return e;return null}async listen(e,n){return this._handleTauriEvent(e,n)?()=>{const t=this.listeners[e];t.splice(t.indexOf(n),1)}:T(e,n,{target:{kind:"Window",label:this.label}})}async once(e,n){return this._handleTauriEvent(e,n)?()=>{const t=this.listeners[e];t.splice(t.indexOf(n),1)}:D(e,n,{target:{kind:"Window",label:this.label}})}async emit(e,n){if(!te.includes(e))return I(e,n);for(const t of this.listeners[e]||[])t({event:e,id:-1,payload:n})}async emitTo(e,n,t){if(!te.includes(n))return R(e,n,t);for(const e of this.listeners[n]||[])e({event:n,id:-1,payload:t})}_handleTauriEvent(e,n){return!!te.includes(e)&&(e in this.listeners?this.listeners[e].push(n):this.listeners[e]=[n],!0)}async scaleFactor(){return c("plugin:window|scale_factor",{label:this.label})}async innerPosition(){return c("plugin:window|inner_position",{label:this.label}).then((e=>new f(e)))}async outerPosition(){return c("plugin:window|outer_position",{label:this.label}).then((e=>new f(e)))}async innerSize(){return c("plugin:window|inner_size",{label:this.label}).then((e=>new m(e)))}async outerSize(){return c("plugin:window|outer_size",{label:this.label}).then((e=>new m(e)))}async isFullscreen(){return c("plugin:window|is_fullscreen",{label:this.label})}async isMinimized(){return c("plugin:window|is_minimized",{label:this.label})}async isMaximized(){return c("plugin:window|is_maximized",{label:this.label})}async isFocused(){return c("plugin:window|is_focused",{label:this.label})}async isDecorated(){return c("plugin:window|is_decorated",{label:this.label})}async isResizable(){return c("plugin:window|is_resizable",{label:this.label})}async isMaximizable(){return c("plugin:window|is_maximizable",{label:this.label})}async isMinimizable(){return c("plugin:window|is_minimizable",{label:this.label})}async isClosable(){return c("plugin:window|is_closable",{label:this.label})}async isVisible(){return c("plugin:window|is_visible",{label:this.label})}async title(){return c("plugin:window|title",{label:this.label})}async theme(){return c("plugin:window|theme",{label:this.label})}async center(){return c("plugin:window|center",{label:this.label})}async requestUserAttention(e){let n=null;return e&&(n=e===K.Critical?{type:"Critical"}:{type:"Informational"}),c("plugin:window|request_user_attention",{label:this.label,value:n})}async setResizable(e){return c("plugin:window|set_resizable",{label:this.label,value:e})}async setEnabled(e){return c("plugin:window|set_enabled",{label:this.label,value:e})}async isEnabled(){return c("plugin:window|is_enabled",{label:this.label})}async setMaximizable(e){return c("plugin:window|set_maximizable",{label:this.label,value:e})}async setMinimizable(e){return c("plugin:window|set_minimizable",{label:this.label,value:e})}async setClosable(e){return c("plugin:window|set_closable",{label:this.label,value:e})}async setTitle(e){return c("plugin:window|set_title",{label:this.label,value:e})}async maximize(){return c("plugin:window|maximize",{label:this.label})}async unmaximize(){return c("plugin:window|unmaximize",{label:this.label})}async toggleMaximize(){return c("plugin:window|toggle_maximize",{label:this.label})}async minimize(){return c("plugin:window|minimize",{label:this.label})}async unminimize(){return c("plugin:window|unminimize",{label:this.label})}async show(){return c("plugin:window|show",{label:this.label})}async hide(){return c("plugin:window|hide",{label:this.label})}async close(){return c("plugin:window|close",{label:this.label})}async destroy(){return c("plugin:window|destroy",{label:this.label})}async setDecorations(e){return c("plugin:window|set_decorations",{label:this.label,value:e})}async setShadow(e){return c("plugin:window|set_shadow",{label:this.label,value:e})}async setEffects(e){return c("plugin:window|set_effects",{label:this.label,value:e})}async clearEffects(){return c("plugin:window|set_effects",{label:this.label,value:null})}async setAlwaysOnTop(e){return c("plugin:window|set_always_on_top",{label:this.label,value:e})}async setAlwaysOnBottom(e){return c("plugin:window|set_always_on_bottom",{label:this.label,value:e})}async setContentProtected(e){return c("plugin:window|set_content_protected",{label:this.label,value:e})}async setSize(e){return c("plugin:window|set_size",{label:this.label,value:e})}async setMinSize(e){return c("plugin:window|set_min_size",{label:this.label,value:e})}async setMaxSize(e){return c("plugin:window|set_max_size",{label:this.label,value:e})}async setSizeConstraints(e){function n(e){return e?{Logical:e}:null}return c("plugin:window|set_size_constraints",{label:this.label,value:{minWidth:n(null==e?void 0:e.minWidth),minHeight:n(null==e?void 0:e.minHeight),maxWidth:n(null==e?void 0:e.maxWidth),maxHeight:n(null==e?void 0:e.maxHeight)}})}async setPosition(e){return c("plugin:window|set_position",{label:this.label,value:e})}async setFullscreen(e){return c("plugin:window|set_fullscreen",{label:this.label,value:e})}async setFocus(){return c("plugin:window|set_focus",{label:this.label})}async setIcon(e){return c("plugin:window|set_icon",{label:this.label,value:y(e)})}async setSkipTaskbar(e){return c("plugin:window|set_skip_taskbar",{label:this.label,value:e})}async setCursorGrab(e){return c("plugin:window|set_cursor_grab",{label:this.label,value:e})}async setCursorVisible(e){return c("plugin:window|set_cursor_visible",{label:this.label,value:e})}async setCursorIcon(e){return c("plugin:window|set_cursor_icon",{label:this.label,value:e})}async setCursorPosition(e){return c("plugin:window|set_cursor_position",{label:this.label,value:e})}async setIgnoreCursorEvents(e){return c("plugin:window|set_ignore_cursor_events",{label:this.label,value:e})}async startDragging(){return c("plugin:window|start_dragging",{label:this.label})}async startResizeDragging(e){return c("plugin:window|start_resize_dragging",{label:this.label,value:e})}async setProgressBar(e){return c("plugin:window|set_progress_bar",{label:this.label,value:e})}async setVisibleOnAllWorkspaces(e){return c("plugin:window|set_visible_on_all_workspaces",{label:this.label,value:e})}async setTitleBarStyle(e){return c("plugin:window|set_title_bar_style",{label:this.label,value:e})}async setTheme(e){return c("plugin:window|set_theme",{label:this.label,value:e})}async onResized(e){return this.listen(k.WINDOW_RESIZED,(n=>{n.payload=new m(n.payload),e(n)}))}async onMoved(e){return this.listen(k.WINDOW_MOVED,(n=>{n.payload=new f(n.payload),e(n)}))}async onCloseRequested(e){return this.listen(k.WINDOW_CLOSE_REQUESTED,(async n=>{const t=new X(n);await e(t),t.isPreventDefault()||await this.destroy()}))}async onDragDropEvent(e){const n=await this.listen(k.DRAG_ENTER,(n=>{e({...n,payload:{type:"enter",paths:n.payload.paths,position:new f(n.payload.position)}})})),t=await this.listen(k.DRAG_OVER,(n=>{e({...n,payload:{type:"over",position:new f(n.payload.position)}})})),i=await this.listen(k.DRAG_DROP,(n=>{e({...n,payload:{type:"drop",paths:n.payload.paths,position:new f(n.payload.position)}})})),r=await this.listen(k.DRAG_LEAVE,(n=>{e({...n,payload:{type:"leave"}})}));return()=>{n(),i(),t(),r()}}async onFocusChanged(e){const n=await this.listen(k.WINDOW_FOCUS,(n=>{e({...n,payload:!0})})),t=await this.listen(k.WINDOW_BLUR,(n=>{e({...n,payload:!1})}));return()=>{n(),t()}}async onScaleChanged(e){return this.listen(k.WINDOW_SCALE_FACTOR_CHANGED,e)}async onThemeChanged(e){return this.listen(k.WINDOW_THEME_CHANGED,e)}}var re,ae;function se(e){return null===e?null:{name:e.name,scaleFactor:e.scaleFactor,position:new f(e.position),size:new m(e.size)}}!function(e){e.AppearanceBased="appearanceBased",e.Light="light",e.Dark="dark",e.MediumLight="mediumLight",e.UltraDark="ultraDark",e.Titlebar="titlebar",e.Selection="selection",e.Menu="menu",e.Popover="popover",e.Sidebar="sidebar",e.HeaderView="headerView",e.Sheet="sheet",e.WindowBackground="windowBackground",e.HudWindow="hudWindow",e.FullScreenUI="fullScreenUI",e.Tooltip="tooltip",e.ContentBackground="contentBackground",e.UnderWindowBackground="underWindowBackground",e.UnderPageBackground="underPageBackground",e.Mica="mica",e.Blur="blur",e.Acrylic="acrylic",e.Tabbed="tabbed",e.TabbedDark="tabbedDark",e.TabbedLight="tabbedLight"}(re||(re={})),function(e){e.FollowsWindowActiveState="followsWindowActiveState",e.Active="active",e.Inactive="inactive"}(ae||(ae={}));var le=Object.freeze({__proto__:null,CloseRequestedEvent:X,get Effect(){return re},get EffectState(){return ae},LogicalPosition:v,LogicalSize:b,PhysicalPosition:f,PhysicalSize:m,get ProgressBarStatus(){return Z},get UserAttentionType(){return K},Window:ie,availableMonitors:async function(){return c("plugin:window|available_monitors").then((e=>e.map(se)))},currentMonitor:async function(){return c("plugin:window|current_monitor").then(se)},cursorPosition:async function(){return c("plugin:window|cursor_position").then((e=>new f(e)))},getAllWindows:ne,getCurrentWindow:ee,monitorFromPoint:async function(e,n){return c("plugin:window|monitor_from_point",{x:e,y:n}).then(se)},primaryMonitor:async function(){return c("plugin:window|primary_monitor").then(se)}});function oe(){return new de(ee(),window.__TAURI_INTERNALS__.metadata.currentWebview.label,{skip:!0})}async function ue(){return c("plugin:webview|get_all_webviews").then((e=>e.map((e=>new de(new ie(e.windowLabel,{skip:!0}),e.label,{skip:!0})))))}const ce=["tauri://created","tauri://error"];class de{constructor(e,n,t){this.window=e,this.label=n,this.listeners=Object.create(null),(null==t?void 0:t.skip)||c("plugin:webview|create_webview",{windowLabel:e.label,label:n,options:t}).then((async()=>this.emit("tauri://created"))).catch((async e=>this.emit("tauri://error",e)))}static async getByLabel(e){var n;return null!==(n=(await ue()).find((n=>n.label===e)))&&void 0!==n?n:null}static getCurrent(){return oe()}static async getAll(){return ue()}async listen(e,n){return this._handleTauriEvent(e,n)?()=>{const t=this.listeners[e];t.splice(t.indexOf(n),1)}:T(e,n,{target:{kind:"Webview",label:this.label}})}async once(e,n){return this._handleTauriEvent(e,n)?()=>{const t=this.listeners[e];t.splice(t.indexOf(n),1)}:D(e,n,{target:{kind:"Webview",label:this.label}})}async emit(e,n){if(!ce.includes(e))return I(e,n);for(const t of this.listeners[e]||[])t({event:e,id:-1,payload:n})}async emitTo(e,n,t){if(!ce.includes(n))return R(e,n,t);for(const e of this.listeners[n]||[])e({event:n,id:-1,payload:t})}_handleTauriEvent(e,n){return!!ce.includes(e)&&(e in this.listeners?this.listeners[e].push(n):this.listeners[e]=[n],!0)}async position(){return c("plugin:webview|webview_position",{label:this.label}).then((e=>new f(e)))}async size(){return c("plugin:webview|webview_size",{label:this.label}).then((e=>new m(e)))}async close(){return c("plugin:webview|close",{label:this.label})}async setSize(e){return c("plugin:webview|set_webview_size",{label:this.label,value:e})}async setPosition(e){return c("plugin:webview|set_webview_position",{label:this.label,value:e})}async setFocus(){return c("plugin:webview|set_webview_focus",{label:this.label})}async hide(){return c("plugin:webview|webview_hide",{label:this.label})}async show(){return c("plugin:webview|webview_show",{label:this.label})}async setZoom(e){return c("plugin:webview|set_webview_zoom",{label:this.label,value:e})}async reparent(e){return c("plugin:webview|reparent",{label:this.label,window:"string"==typeof e?e:e.label})}async clearAllBrowsingData(){return c("plugin:webview|clear_all_browsing_data")}async onDragDropEvent(e){const n=await this.listen(k.DRAG_ENTER,(n=>{e({...n,payload:{type:"enter",paths:n.payload.paths,position:new f(n.payload.position)}})})),t=await this.listen(k.DRAG_OVER,(n=>{e({...n,payload:{type:"over",position:new f(n.payload.position)}})})),i=await this.listen(k.DRAG_DROP,(n=>{e({...n,payload:{type:"drop",paths:n.payload.paths,position:new f(n.payload.position)}})})),r=await this.listen(k.DRAG_LEAVE,(n=>{e({...n,payload:{type:"leave"}})}));return()=>{n(),i(),t(),r()}}}var pe,he,we=Object.freeze({__proto__:null,Webview:de,getAllWebviews:ue,getCurrentWebview:oe});function ye(){const e=oe();return new ge(e.label,{skip:!0})}async function _e(){return c("plugin:window|get_all_windows").then((e=>e.map((e=>new ge(e,{skip:!0})))))}class ge{constructor(e,n={}){var t;this.label=e,this.listeners=Object.create(null),(null==n?void 0:n.skip)||c("plugin:webview|create_webview_window",{options:{...n,parent:"string"==typeof n.parent?n.parent:null===(t=n.parent)||void 0===t?void 0:t.label,label:e}}).then((async()=>this.emit("tauri://created"))).catch((async e=>this.emit("tauri://error",e)))}static async getByLabel(e){var n;const t=null!==(n=(await _e()).find((n=>n.label===e)))&&void 0!==n?n:null;return t?new ge(t.label,{skip:!0}):null}static getCurrent(){return ye()}static async getAll(){return _e()}async listen(e,n){return this._handleTauriEvent(e,n)?()=>{const t=this.listeners[e];t.splice(t.indexOf(n),1)}:T(e,n,{target:{kind:"WebviewWindow",label:this.label}})}async once(e,n){return this._handleTauriEvent(e,n)?()=>{const t=this.listeners[e];t.splice(t.indexOf(n),1)}:D(e,n,{target:{kind:"WebviewWindow",label:this.label}})}}pe=ge,he=[ie,de],(Array.isArray(he)?he:[he]).forEach((e=>{Object.getOwnPropertyNames(e.prototype).forEach((n=>{var t;"object"==typeof pe.prototype&&pe.prototype&&n in pe.prototype||Object.defineProperty(pe.prototype,n,null!==(t=Object.getOwnPropertyDescriptor(e.prototype,n))&&void 0!==t?t:Object.create(null))}))}));var be=Object.freeze({__proto__:null,WebviewWindow:ge,getAllWebviewWindows:_e,getCurrentWebviewWindow:ye});return e.app=g,e.core=h,e.dpi=A,e.event=C,e.image=_,e.menu=G,e.mocks=q,e.path=J,e.tray=Y,e.webview=we,e.webviewWindow=be,e.window=le,e}({});window.__TAURI__=__TAURI_IIFE__;
