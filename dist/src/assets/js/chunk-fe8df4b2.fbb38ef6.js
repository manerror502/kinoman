(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fe8df4b2"],{"2e3c":function(t,e,i){t.exports=i.p+"src/assets/img/profile4.dea62cc8.jpg"},"4d15":function(t,e,i){t.exports=i.p+"src/assets/img/profile2.159c0a81.jpg"},"4dc3":function(t,e,i){},6346:function(t,e,i){"use strict";var n=i("4dc3"),s=i.n(n);s.a},baaa:function(t,e,i){t.exports=i.p+"src/assets/img/profile3.d63a6268.jpg"},c66d:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"profile"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row no-gutters"},[n("div",{staticClass:"col"},[n("div",{staticClass:"profile__name"},[n("h3",[t._v(t._s(t.name))])])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-6"},[n("router-link",{staticClass:"profile__item large",attrs:{tag:"a",to:"/profile/preferences"}},[n("div",{staticClass:"profile__item-img col-lg-3"},[n("img",{staticClass:"img",attrs:{src:i("e5cc"),alt:""}})]),n("div",{staticClass:"col"},[n("h4",[t._v("Ваши предпочтения")]),n("p",[t._v(" Узнайте на сколько точно мы подобрали ваши интересы в кино ")])]),n("button",{staticClass:"profile__item-btn"},[n("svg",{attrs:{viewBox:"0 0 512 512"}},[n("path",{attrs:{fill:"currentColor",d:"M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792\n                H10.667C4.771,245.333,0,250.104,0,256s4.771,10.667,10.667,10.667h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083\n                c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l160-160C513.042,259.375,513.042,252.625,508.875,248.458z\n                "}})])])])],1),n("div",{staticClass:"col-lg-6"},[n("label",{staticClass:"profile__item large",attrs:{for:"theme"}},[t._m(0),t._m(1),n("button",{staticClass:"profile__item-btn",attrs:{id:"theme"},on:{click:t.modalOpen}},[n("svg",{attrs:{viewBox:"0 0 512 512"}},[n("path",{attrs:{fill:"currentColor",d:"M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792\n                H10.667C4.771,245.333,0,250.104,0,256s4.771,10.667,10.667,10.667h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083\n                c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l160-160C513.042,259.375,513.042,252.625,508.875,248.458z\n                "}})])]),t.menu?n("div",{staticClass:"profile__menu"},t._l(t.theme.themeArr,(function(e){return n("button",{key:e.id,on:{click:function(i){return i.preventDefault(),t.themeSet(e.id)}}},[t._v(t._s(e.name))])})),0):t._e()])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-8"},[n("label",{staticClass:"profile__item",attrs:{for:"checkbox"}},[t._m(2),t._m(3),n("div",{staticClass:"switch"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.notifications,expression:"notifications"}],attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(t.notifications)?t._i(t.notifications,null)>-1:t.notifications},on:{click:t.notificationsSet,change:function(e){var i=t.notifications,n=e.target,s=!!n.checked;if(Array.isArray(i)){var a=null,r=t._i(i,a);n.checked?r<0&&(t.notifications=i.concat([a])):r>-1&&(t.notifications=i.slice(0,r).concat(i.slice(r+1)))}else t.notifications=s}}}),n("div",{staticClass:"slider round"})])])]),n("div",{staticClass:"col-lg-8"},[n("label",{staticClass:"profile__item",attrs:{for:"checkbox1"}},[t._m(4),t._m(5),n("div",{staticClass:"switch"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inTheBeginning,expression:"inTheBeginning"}],attrs:{type:"checkbox",id:"checkbox1"},domProps:{checked:Array.isArray(t.inTheBeginning)?t._i(t.inTheBeginning,null)>-1:t.inTheBeginning},on:{click:t.reverseSet,change:function(e){var i=t.inTheBeginning,n=e.target,s=!!n.checked;if(Array.isArray(i)){var a=null,r=t._i(i,a);n.checked?r<0&&(t.inTheBeginning=i.concat([a])):r>-1&&(t.inTheBeginning=i.slice(0,r).concat(i.slice(r+1)))}else t.inTheBeginning=s}}}),n("div",{staticClass:"slider round"})])])])]),n("div",{staticClass:"row justify-content-end"},[n("div",{staticClass:"col-lg-3"},[n("label",{staticClass:"profile__item",attrs:{for:"logout"}},[t._m(6),n("button",{staticClass:"profile__item-btn",attrs:{id:"logout"},on:{click:t.logout}},[n("svg",{attrs:{viewBox:"0 0 512 512"}},[n("path",{attrs:{fill:"currentColor",d:"M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792\n                H10.667C4.771,245.333,0,250.104,0,256s4.771,10.667,10.667,10.667h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083\n                c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l160-160C513.042,259.375,513.042,252.625,508.875,248.458z\n                "}})])])])])])]),t.modal?n("Modal",[n("div",{staticClass:"theme"},[n("h5",[t._v("Выберите тему")]),n("div",{staticClass:"theme__wrap"},t._l(t.theme.themeArr,(function(e){return n("button",{key:e.id,class:{active:t.theme.currentTheme===e.id},on:{click:function(i){return i.preventDefault(),t.themeSet(e.id)}}},[t._v(" "+t._s(e.name)+" ")])})),0)])]):t._e()],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"profile__item-img col-3"},[n("img",{staticClass:"img",attrs:{src:i("4d15"),alt:""}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col"},[i("h4",[t._v("Тема")]),i("p",[t._v(" Выберите цветовую тему которая нравиться именно вам ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"profile__item-img col-2"},[n("img",{staticClass:"img",attrs:{src:i("baaa"),alt:""}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col"},[i("h4",[t._v("Получать уведомления")]),i("p",[t._v(" Мы присылаем сообщения о новый фильмах, сериалах и других важных вещах ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"profile__item-img col-2"},[n("img",{staticClass:"img",attrs:{src:i("2e3c"),alt:""}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col"},[i("h4",[t._v("Добавить в начало")]),i("p",[t._v(" Все новые фильмы и сериалы в плейлисте будут появляться в начале списка ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col"},[i("h4",{staticClass:"logout"},[t._v("Выйти")])])}],a=(i("4de4"),i("b0c0"),i("96cf"),i("1da1")),r=i("5530"),c=i("c592"),o=i("2f62"),l={name:"Profile",data:function(){return{infoUser:null,menu:!1}},components:{Modal:c["a"]},computed:Object(r["a"])(Object(r["a"])({},Object(o["b"])(["theme"])),{},{name:function(){return this.$store.getters.info.name},modal:function(){var t=this.$store.state.app.modalTheme;return t},notifications:function(){return this.$store.getters.info.settings.notifications},inTheBeginning:function(){return this.$store.getters.info.settings.inTheBeginning}}),methods:{themeSet:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function i(){var n,s;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return n=e.$store.state.theme.themeArr,s=n.filter((function(e){return e.id===t}))[0],i.next=4,e.$store.dispatch("setTheme",s);case 4:e.$store.state.app.modalTheme=!1;case 5:case"end":return i.stop()}}),i)})))()},notificationsSet:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i={notifications:!t.notifications},e.prev=1,e.next=4,t.$store.dispatch("uppdateNotifications",i);case 4:t.$store.getters.info.settings.notifications=!t.notifications,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](1),t.$toast.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))()},reverseSet:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i={inTheBeginning:!t.inTheBeginning},e.prev=1,e.next=4,t.$store.dispatch("uppdateReverse",i);case 4:t.$store.getters.info.settings.inTheBeginning=!t.inTheBeginning,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](1),t.$toast.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))()},logout:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("logout");case 2:t.$router.push("/login?message=logout");case 3:case"end":return e.stop()}}),e)})))()},modalOpen:function(){this.$store.state.app.modalTheme=!0}}},u=l,f=(i("6346"),i("2877")),m=Object(f["a"])(u,n,s,!1,null,null,null);e["default"]=m.exports},e5cc:function(t,e,i){t.exports=i.p+"src/assets/img/profile1.5d91aa00.jpg"}}]);
//# sourceMappingURL=chunk-fe8df4b2.fbb38ef6.js.map