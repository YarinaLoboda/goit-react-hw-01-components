(this.webpackJsonptask1=this.webpackJsonptask1||[]).push([[0],[,,function(e){e.exports=JSON.parse('{"username":"Petra Marica","tag":"pmarica","location":"Salvador, Brasil","avatar":"https://cdn-icons-png.flaticon.com/512/1077/1077012.png","stats":{"followers":1000,"views":2000,"likes":3000}}')},,,function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998592.png","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://cdn-icons-png.flaticon.com/512/616/616438.png","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://cdn-icons-png.flaticon.com/512/1623/1623681.png","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://cdn-icons-png.flaticon.com/512/2977/2977285.png","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998749.png","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(1),n=t.n(c),s=t(4),i=t.n(s),r=(t(12),t(13),t(0));var d=function(e){var a=e.username,t=e.avatar,c=e.tag,n=e.location,s=e.stats,i=s.followers,d=s.views,l=s.likes;return Object(r.jsxs)("div",{className:"Profile",children:[Object(r.jsxs)("div",{className:"Description",children:[Object(r.jsx)("img",{src:t,alt:"User avatar",className:"Avatar"}),Object(r.jsx)("p",{className:"Name",children:a}),Object(r.jsxs)("p",{className:"Tag",children:["@",c]}),Object(r.jsx)("p",{className:"Location",children:n})]}),Object(r.jsxs)("ul",{className:"Stats",children:[Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{className:"Label",children:"Followers"}),Object(r.jsxs)("span",{className:"Quantity",children:[" ",i]})]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{className:"Label",children:"Views"}),Object(r.jsxs)("span",{className:"Quantity",children:[" ",d]})]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{className:"Label",children:"Likes"}),Object(r.jsxs)("span",{className:"Quantity",children:[" ",l]})]})]})]})},l=t(2);t(15);function b(e){var a=e.title,t=e.stats;return Object(r.jsxs)("section",{className:"Statistics",children:[a&&Object(r.jsx)("h2",{className:"Title",children:a}),Object(r.jsx)("ul",{className:"Stat-list",children:t.map((function(e){return Object(r.jsxs)("li",{className:"Item",style:{backgroundColor:o()},children:[Object(r.jsx)("span",{className:"Label",children:e.label}),Object(r.jsxs)("span",{className:"Percentage",children:[" ",e.percentage,"%"]})]},e.id)}))})]})}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;function a(e){var a=255-e,t=(0|Math.random()*a+e).toString(16);return 1===t.length?"0"+t:t}return"#"+a(e)+a(e)+a(e)}b.defaultProps={title:""};var j=b,u=t(5);t(16),t(17);var p=function(e){var a=e.isOnline,t=e.avatar,c=e.name;return Object(r.jsxs)("li",{className:"Items",children:[!0===a?Object(r.jsx)("span",{className:"Status-online",children:" "}):Object(r.jsx)("span",{className:"Status",children:" "}),Object(r.jsx)("img",{className:"Avatar",src:t,alt:"User avatar",width:"48"}),Object(r.jsx)("p",{className:"Name",children:c})]})};var m=function(e){var a=e.friends;return Object(r.jsx)("ul",{className:"Friend-list",children:a.map((function(e){var a=e.id,t=e.isOnline,c=e.avatar,n=e.name;return Object(r.jsx)(p,{isOnline:t,avatar:c,name:n},a)}))})},f=t(6);t(18);var h=function(e){var a=e.items;return Object(r.jsxs)("table",{className:"Transaction-history",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Type"}),Object(r.jsx)("th",{children:"Amount"}),Object(r.jsx)("th",{children:"Currency"})]})}),Object(r.jsx)("tbody",{children:a.map((function(e){var a=e.id,t=e.type,c=e.amount,n=e.currency;return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:t}),Object(r.jsx)("td",{children:c}),Object(r.jsx)("td",{children:n})]},a)}))})]})},O=t(7);function y(){return Object(r.jsxs)(c.Fragment,{children:[Object(r.jsx)("div",{children:Object(r.jsx)(d,{username:l.username,tag:l.tag,location:l.location,avatar:l.avatar,stats:l.stats})}),Object(r.jsx)("div",{children:Object(r.jsx)(j,{title:"Upload stats",stats:u})}),Object(r.jsx)("div",{children:Object(r.jsx)(m,{friends:f})}),Object(r.jsx)("div",{children:Object(r.jsx)(h,{items:O})})]})}i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(y,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.db479398.chunk.js.map