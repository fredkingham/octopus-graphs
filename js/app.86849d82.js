(function(e){function t(t){for(var r,c,o=t[0],s=t[1],l=t[2],f=0,d=[];f<o.length;f++)c=o[f],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},i=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/octopus-graphs/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={id:"app"},i={class:"navbar",role:"navigation","aria-label":"main navigation"},c={class:"navbar-start"},o=Object(r["e"])("Home"),s=Object(r["e"])("Set up");function l(e,t,n,l,u,f){var d=Object(r["s"])("router-link"),p=Object(r["s"])("router-view");return Object(r["o"])(),Object(r["c"])("div",a,[Object(r["f"])("nav",i,[Object(r["f"])("div",c,[Object(r["f"])(d,{"active-class":"is-active",class:"is-size-4 navbar-item",to:{name:"home"}},{default:Object(r["A"])((function(){return[o]})),_:1}),Object(r["f"])(d,{"active-class":"is-active",class:"is-size-4 navbar-item",to:{name:"setup"}},{default:Object(r["A"])((function(){return[s]})),_:1})])]),Object(r["f"])(p)])}var u={name:"App",components:{}},f=n("d959"),d=n.n(f);const p=d()(u,[["render",l]]);var b=p,h=n("6c02"),g=Object(r["f"])("div",null,[Object(r["f"])("nav",{class:"level"},[Object(r["f"])("span",{class:"level-item has-text-centered"},[Object(r["f"])("h1",{class:"title"},"Set up")])])],-1),v={class:"columns"},m=Object(r["f"])("div",{class:"column is-one-quarter"},null,-1),O={class:"column is-half"},j={class:"is-size-4 mt-4 "},y=Object(r["e"])(" Those look great, why don't you check out your power useage for"),w=Object(r["f"])("br",null,null,-1),D=Object(r["e"])("today"),S={class:"column is-half"},x=Object(r["f"])("p",{class:"is-size-4 mt-4 "},[Object(r["e"])(" Hello! You need to grab your user details from octopus."),Object(r["f"])("br"),Object(r["e"])(" You can do that "),Object(r["f"])("a",{href:"https://octopus.energy/dashboard/developer/"},"here")],-1),M=Object(r["f"])("p",{class:" mt-4 is-size-4"}," First we need an api key. ",-1),k={class:"field"},P={class:"control is-expanded"},N=Object(r["f"])("p",{class:"mt-4 is-size-4"}," Your electricity meter-point’s MPAN . ",-1),_={class:"field"},Y={class:"control is-expanded"},z=Object(r["f"])("p",{class:"mt-4 is-size-4"}," Your electricity meter-point’s serial number. ",-1),A={class:"field"},B={class:"control is-expanded"},F=Object(r["f"])("p",{class:"mt-4 is-size-4"}," Your gas meter-point’s MPAN . ",-1),K={class:"field"},U={class:"control is-expanded"},E=Object(r["f"])("p",{class:"mt-4 is-size-4"}," Your gas meter-point’s serial number. ",-1),I={class:"field"},J={class:"control is-expanded"},H={class:"help is-danger is-size-4"},G={class:"help is-danger is-size-4"},V={class:"help is-danger is-size-4"};function T(e,t,n,a,i,c){var o=Object(r["s"])("router-link");return Object(r["o"])(),Object(r["c"])("div",null,[g,Object(r["f"])("div",v,[m,Object(r["B"])(Object(r["f"])("div",O,[Object(r["f"])("p",j,[y,w,Object(r["f"])(o,{to:{name:"home"}},{default:Object(r["A"])((function(){return[D]})),_:1})])],512),[[r["y"],e.success]]),Object(r["B"])(Object(r["f"])("div",S,[x,Object(r["f"])("form",{onSubmit:t[6]||(t[6]=Object(r["C"])((function(e){return c.save()}),["prevent"]))},[M,Object(r["f"])("div",k,[Object(r["f"])("div",P,[Object(r["B"])(Object(r["f"])("input",{class:["input is-medium is-fullwidth ",{"is-danger":"apiKey"===e.error}],type:"text","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.apiKey=t}),placeholder:"Api Key",disabled:e.loading},null,10,["disabled"]),[[r["x"],e.apiKey]])])]),N,Object(r["f"])("div",_,[Object(r["f"])("div",Y,[Object(r["B"])(Object(r["f"])("input",{class:["input is-medium is-fullwidth",{"is-danger":"electricity"===e.error}],type:"text","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.electrictityMeterPoint=t}),placeholder:"e.g. 2001000312329",disabled:e.loading},null,10,["disabled"]),[[r["x"],e.electrictityMeterPoint]])])]),z,Object(r["f"])("div",A,[Object(r["f"])("div",B,[Object(r["B"])(Object(r["f"])("input",{class:["input is-medium is-fullwidth",{"is-danger":"electricity"===e.error}],type:"text","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.electricitySerialNumber=t}),placeholder:"e.g. 35A10332046",disabled:e.loading},null,10,["disabled"]),[[r["x"],e.electricitySerialNumber]])])]),F,Object(r["f"])("div",K,[Object(r["f"])("div",U,[Object(r["B"])(Object(r["f"])("input",{class:["input is-medium is-fullwidth",{"is-danger":"gas"===e.error}],type:"text","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.gasMeterPoint=t}),placeholder:"e.g. 8428144496",disabled:e.loading},null,10,["disabled"]),[[r["x"],e.gasMeterPoint]])])]),E,Object(r["f"])("div",I,[Object(r["f"])("div",J,[Object(r["B"])(Object(r["f"])("input",{class:["input is-medium is-fullwidth",{"is-danger":"gas"===e.error}],type:"text","onUpdate:modelValue":t[5]||(t[5]=function(t){return e.gasSerialNumber=t}),placeholder:"e.g. A1Q21373723634",disabled:e.loading},null,10,["disabled"]),[[r["x"],e.gasSerialNumber]])])]),Object(r["B"])(Object(r["f"])("p",H," Sorry looks like that api key is wrong ",512),[[r["y"],"apiKey"===e.error]]),Object(r["B"])(Object(r["f"])("p",G," Sorry looks like the electricity information is wrong ",512),[[r["y"],"electricity"===e.error]]),Object(r["B"])(Object(r["f"])("p",V," Sorry looks like the gas information is wrong ",512),[[r["y"],"gas"===e.error]]),Object(r["f"])("button",{disabled:e.loading,class:"button is-large"}," save ",8,["disabled"])],32)],512),[[r["y"],!e.success]])])])}n("4160"),n("d3b7"),n("159b"),n("ddb0"),n("99af"),n("4de4"),n("caad"),n("a15b"),n("2532");var L="https://api.octopus.energy/v1/";function R(e,t){var n=new Date(t,e,1,0,0,0,0),r=new Date;r.setDate(r.getDate()+1),n>r&&(n=r);var a=n.toISOString(),i=new Date(t,e-1,1,0,0,0,0);return i=i.toISOString(),"?period_to=".concat(a,"&period_from=").concat(i,"&group_by=day")}var q={getUserStorage:function(){var e=window.localStorage["user"];return e?JSON.parse(e):{}},get:function(e,t){if(e[t])return e[t];if(!e.keys.includes(t))throw"userLocalStorageHandler, does not accept ".concat(t,", only accepts ").concat(e.keys.join(","));return this.getUserStorage()[t]},set:function(e,t,n){if(!e.keys.includes(t))throw"userLocalStorageHandler, does not accept ".concat(t,", only accepts ").concat(e.keys.join(","));var r=this.getUserStorage();return r[t]=n,window.localStorage["user"]=JSON.stringify(r),!0}},C=new Proxy({keys:["apiKey","gasMeterPoint","gasSerialNumber","electrictityMeterPoint","electricitySerialNumber"]},q),Q={user:C,getApiKey:function(){return C.apiKey},setApiKey:function(e){C.apiKey=e},clean:function(e,t){return e.results=e.results.filter((function(e){var n=new Date(e.interval_end);return n.getMonth()===t-1})),e},check:function(){var e=this,t=new Date,n=t.getMonth()+1,r=t.getFullYear();return new Promise((function(t,a){var i=e.getMonthsGas(n,r,!1),c=e.getMonthsElectricity(n,r,!1);c.then((function(){i.then((function(){t()}),(function(){a("gas")}))}),(function(e){401===e.status?a("apiKey"):a("electricity")}))}))},getUrl:function(e){var t=this;return new Promise((function(n,r){var a=new Headers;a.append("Authorization","Basic ".concat(window.btoa(t.user.apiKey)));var i={headers:a,method:"GET"};fetch(e,i).then((function(t){t.ok?t.json().then((function(t){window.localStorage[e]={result:JSON.stringify(t),cacheDate:JSON.stringify(new Date)},n(t)})):r(t)}),(function(e){r(e)}))}))},get:function(e,t){var n=t||"undefined"===typeof t;return n&&window.localStorage[e]&&window.localStorage[e].result?Promise.resolve(JSON.parse(window.localStorage[e].result)):this.getUrl(e)},getMonthsElectricity:function(e,t,n){var r=this,a="".concat(L,"electricity-meter-points/").concat(this.user.electrictityMeterPoint,"/meters/").concat(this.user.electricitySerialNumber,"/consumption/"),i=a+R(e,t),c=new Date;return e===c.getMonth()&&t===c.getFullYear()&&(n=!1),this.get(i,n).then((function(t){return r.clean(t,e)}))},getMonthsGas:function(e,t,n){var r=this,a="".concat(L,"gas-meter-points/").concat(this.user.gasMeterPoint,"/meters/").concat(this.user.gasSerialNumber,"/consumption/"),i=a+R(e,t),c=new Date;return e===c.getMonth()&&t===c.getFullYear()&&(n=!1),this.get(i,n).then((function(t){return r.clean(t,e)}))}},W=Q,X={data:function(){var e={loading:!1,error:"",success:!1};return W.user.keys.forEach((function(t){e[t]=W.user[t]||""})),e},methods:{check:function(){var e=this;this.loading=!0,W.check().then((function(){e.loading=!1,e.success=!0}),(function(t){e.loading=!1,e.error=t}))},save:function(){var e=this;W.user.keys.forEach((function(t){W.user[t]=e[t]})),this.check()},setUp:function(){this.loading=!1,W.user.apiKey&&this.check()},cleanError:function(){this.apiError=!1}}};const Z=d()(X,[["render",T]]);var $=Z,ee={class:"level"},te={class:"level-item has-text-right"},ne={class:"level-item has-text-centered"},re={class:"title"},ae={class:"level-item"},ie={key:0},ce=Object(r["f"])("section",{class:"hero"},[Object(r["f"])("div",{class:"hero-body has-text-centered"},[Object(r["f"])("p",{class:"title"}," No data is available "),Object(r["f"])("p",{class:"subtitle"}," I can't tell the future, I live in the now ")])],-1),oe={key:1};function se(e,t,n,a,i,c){var o=Object(r["s"])("router-link"),s=Object(r["t"])("graph");return Object(r["o"])(),Object(r["c"])("div",null,[Object(r["f"])("nav",ee,[Object(r["f"])("span",te,[Object(r["f"])(o,{to:{name:"date",params:{month:c.previousDate.getMonth()+1,year:c.previousDate.getFullYear()}},class:"button is-info"},{default:Object(r["A"])((function(){return[Object(r["e"])(" ← "+Object(r["v"])(c.monthName(c.previousDate))+" "+Object(r["v"])(c.previousDate.getFullYear()),1)]})),_:1},8,["to"])]),Object(r["f"])("span",ne,[Object(r["f"])("h1",re,Object(r["v"])(c.monthName(c.currentDate))+" "+Object(r["v"])(n.year),1)]),Object(r["f"])("span",ae,[Object(r["f"])(o,{to:{name:"date",params:{month:c.nextDate.getMonth()+1,year:c.nextDate.getFullYear()}},class:"button is-info"},{default:Object(r["A"])((function(){return[Object(r["e"])(Object(r["v"])(c.monthName(c.nextDate))+" "+Object(r["v"])(c.nextDate.getFullYear())+" → ",1)]})),_:1},8,["to"])])]),e.future?(Object(r["o"])(),Object(r["c"])("div",ie,[ce])):Object(r["d"])("",!0),e.future?Object(r["d"])("",!0):(Object(r["o"])(),Object(r["c"])("div",oe,[Object(r["B"])(Object(r["f"])("div",null,null,512),[[s,e.electricityData]]),Object(r["B"])(Object(r["f"])("div",null,null,512),[[s,e.gasData]])]))])}n("ac1f"),n("5319"),n("d81d");var le=n("2ef0"),ue=n.n(le),fe=function(e){var t=new Date(e.getFullYear(),e.getMonth()+1,0),n=t.getDate();return n-e.getDate()},de=function(e,t,n){var r={},a=t.results;ue.a.each(a,(function(e){e.interval_start=new Date(e.interval_start)})),a=ue.a.orderBy(a,"interval_start");var i=a.map((function(e){return e.consumption}));i.forEach((function(e){e>n&&(n=e)})),i.unshift(e);var c=a.map((function(e){var t=new Date(e.interval_start);return t.setMilliseconds(0),t.setSeconds(0),t.setHours(0),t}));if(c.length){var o=c[c.length-1],s=fe(o);ue.a.each(ue.a.range(s),(function(e){c.push(new Date(o.getFullYear(),o.getMonth(),o.getDate()+e)),i.push(null)}))}return c.unshift("x"),r={padding:{top:10},data:{x:"x",columns:[c,i],type:"bar",color:function(e,t){var n=t["x"];return n?0===n.getDay()||6===n.getDay()?"#D2E4D8":"#344F59":"#333"}},axis:{x:{type:"timeseries",tick:{format:"%Y-%m-%d",rotate:45}},y:{max:n}}},r},pe=de,be={name:"DateRange",props:["year","month"],components:{},data:function(){var e={};return{future:!1,electricityData:e,gasData:e}},methods:{monthName:function(e){return e.toLocaleString("default",{month:"long"})},update:function(e,t){var n=new Date,r=new Date(e,t-1,1);if(r>n)this.future=!0;else{this.future=!1;var a=this,i=parseInt(e),c=parseInt(t);W.getMonthsElectricity(c,i).then((function(e){a.electricityData=pe("Electricity consumption",e,70)}),(function(){Oe.replace({name:"setup"})})),W.getMonthsGas(c,i).then((function(e){a.gasData=pe("Gas consumption",e,20)}),(function(){Oe.replace({name:"setup"})}))}}},computed:{currentDate:function(){return new Date(parseInt(this.year),parseInt(this.month-1),1)},nextDate:function(){var e=new Date(this.currentDate);return e.setMonth(e.getMonth()+1),e},previousDate:function(){var e=new Date(this.currentDate);return e.setMonth(e.getMonth()-1),e}},beforeRouteUpdate:function(e){this.update(e.params.year,e.params.month)},mounted:function(){this.update(this.currentDate.getFullYear(),this.currentDate.getMonth()+1)}};const he=d()(be,[["render",se]]);var ge=he,ve=[{path:"/",name:"home",redirect:function(){var e=new Date;return{name:"date",params:{month:e.getMonth()+1,year:e.getFullYear()}}}},{path:"/date/:month/:year/",name:"date",component:ge,props:!0},{path:"/setup",name:"setup",component:$}],me=Object(h["a"])({history:Object(h["b"])("/octopus-graphs/"),routes:ve}),Oe=me,je=n("2d5f"),ye=n.n(je);n("b383");var we=Object(r["b"])(b);we.use(Oe).mount("#app"),we.directive("graph",{mounted:function(e,t){var n=ue.a.cloneDeep(t.value);n.bindto=e,ue.a.size(t.value)&&ye.a.generate(n)},updated:function(e,t){var n=ue.a.cloneDeep(t.value);n.bindto=e,ue.a.size(t.value)&&ye.a.generate(n)}})},b383:function(e,t,n){}});
//# sourceMappingURL=app.86849d82.js.map