(this.webpackJsonpe=this.webpackJsonpe||[]).push([[0],{46:function(e,n,t){},47:function(e,n,t){},73:function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/ico-01.f10f49f4.svg"},74:function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/ico-02.97603741.svg"},75:function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/ico-03.237c47a5.svg"},76:function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/ico-g-03.96cb8188.svg"},77:function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/ico-g-01.b07897b4.svg"},78:function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/ico-04.cb124183.svg"},79:function(e,n,t){"use strict";t.r(n);var i=t(0),c=t.n(i),a=t(19),r=t.n(a),o=(t(46),t(2)),s=t(3),d=(t(47),t(11)),l=t(6),u=t(17),j=t.n(u),b=function(e){for(var n=0,t=0;t<e.length;t++){var i=Number(e.charAt(t));if(isNaN(i))return null;if(i%2===0)n+=i;else{var c=2*i;n+=c>9?Math.floor(c/10)+c%10:c}}return String.fromCharCode(n+65)},f="ON_ENTER",h="ON_PIN_ENTER",p="ID",x=function(e){return function(n){return n({type:h,payload:e})}},m=t(18),O=t.n(m),g=t(24),v=t(20),w=t.n(v),y="433898df4a3e992b8411004109e4d574a90695e39e";w.a.defaults.baseURL="https://fast-rider.herokuapp.com/api";var k,z,T,C=function(){var e=Object(g.a)(O.a.mark((function e(n,t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w.a.get("/v1/rides",{params:{token:y}}).then((function(e){n(e.data)})).catch((function(e){t(e)}));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),N=function(){var e=Object(g.a)(O.a.mark((function e(n,t,i,c){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w.a.post("/v1/tickets",{token:y,pin:i,ride_id:c}).then((function(e){n(e)})).catch((function(e){t(e)}));case 1:case"end":return e.stop()}}),e)})));return function(n,t,i,c){return e.apply(this,arguments)}}(),S=t(5),R=t(1);function E(e){return Object(R.jsxs)(M,{display:e.display?"flex":"none",children:[Object(R.jsx)(H,{onClick:e.closeModal,children:"X"}),Object(R.jsx)(P,{children:e.message})]})}var A,I,F,M=s.a.div(k||(k=Object(o.a)(["\nposition: absolute;\nbackground-color:  #373737;\nmargin: auto;\nwidth: 400px;\nleft:50%;\nmargin-left:-200px;\ntop:-50px;\ndisplay:",";\nflex-direction: column;\nalign-items: center;\nborder:0.5px solid white  ;\n\n@media (max-width: 480px) {\n    width: 90vw;\n    position: none;\n    left:0;\n    margin-left:0;\n}\n"])),(function(e){return e.display})),H=s.a.div(z||(z=Object(o.a)(["\nalign-self: flex-end;\ncolor: white;\nfont-weight: 500;\npadding:20px 20px 0  0;\n"]))),P=s.a.div(T||(T=Object(o.a)(["\nfont-size: 1.1rem;\nfont-weight: 500;\npadding:1rem;\npadding-bottom: 3.5rem\n"])));function _(e){var n=Object(l.b)(),t=Object(i.useState)(""),c=Object(d.a)(t,2),a=c[0],r=c[1],o=Object(i.useState)(!1),s=Object(d.a)(o,2),u=s[0],f=s[1],h=Object(i.useState)(""),p=Object(d.a)(h,2),m=p[0],O=p[1],g=Object(l.c)((function(e){return e.id})),v=Object(S.e)(),w=function(e){e&&(n(x(e.data)),v.push("/confirmation"))},y=function(e){n(x("")),O(e.response.data.message),f(!0)},k=function(e){var n;!function(){var e=parseInt(j()().format("HH"));return 9<=e&&e<19}()?(f(!0),O("The Jungle FastRider is now close!  The opening hours is between 9:00 to 19:00 ")):0===g?(f(!0),O("You need to choose a ride")):15!==(n=a).length||"J"!==n.charAt(0)||"N"!==n.charAt(1)||"-"!==n.charAt(2)||"-"!==n.charAt(7)||"-"!==n.charAt(12)||b(n.substring(3,7))!==n.charAt(13)||b(n.substring(8,12))!==n.charAt(14)?(f(!0),O("Incorrect pin number")):N(w,y,a,g)};return Object(R.jsxs)(B,{children:[Object(R.jsx)(L,{className:"bo",type:"text",placeholder:"#PIN",name:"pin",value:a,onChange:function(e){return r(e.target.value)}}),Object(R.jsx)(U,{display:e.display,className:"botton",type:"button",onClick:function(){return k()},children:"SUBMIT"}),Object(R.jsx)(E,{closeModal:function(){return f(!1)},message:m,display:u})]})}var J,B=s.a.div(A||(A=Object(o.a)(["\n    display:flex;\n    border-top:1px solid grey;\n    margin: 2rem 0;\n    position: relative;\n    @media (max-width: 480px) {\n        display:block;\n      }\n"]))),L=s.a.input(I||(I=Object(o.a)(["\n    text-align: left;\n    color:black;\n    padding 8px;\n    width: 77%;\n    @media (max-width: 480px) {\n        width: 100%;\n      }\n"]))),U=s.a.button(F||(F=Object(o.a)(["\n    background-color: #4c4c4b;\n    width: 23%;\n    color:white;\n    border:none;\n    &:hover{\n        background-color: #606060; \n    }\n\n    @media (max-width: 480px) {\n        border-top:1px solid grey;\n        width: 100%;\n        padding:1rem;\n        position:fixed;\n        z-index:99;\n        left:0;\n        right:0;\n        bottom:0;\n        font-size:1.1rem;\n        display:",";\n      }\n"])),(function(e){return e.display?"bolck":"none"}));function D(e){return Object(R.jsxs)("div",{children:[Object(R.jsx)(Y,{src:e.img,alt:""}),Object(R.jsx)("p",{children:e.data})]})}var W,X,Y=s.a.img(J||(J=Object(o.a)(["\nbackground-color:   #373737 ;\nborder-radius: 50%;\npadding: 5px;\nheight: 3rem;\nposition: relative;\n"])));function q(){return Object(R.jsxs)(ee,{children:[Object(R.jsx)(ne,{children:Object(R.jsx)(D,{img:t(73).default,data:"Enter your park ticket #PIN number, then select the desired ride while noting the stated return time"})}),Object(R.jsx)(ne,{children:Object(R.jsx)(D,{img:t(74).default,data:"Press 'submit' to confirm and retrive your access code"})}),Object(R.jsx)(ne,{children:Object(R.jsx)(D,{img:t(75).default,data:"When the time comes, use the special FastRider line to cut out a considerable wait time"})})]})}var G,K,Q,V,Z,$,ee=s.a.div(W||(W=Object(o.a)(["\ndisplay: flex;\njustify-content: space-between;\n@media (max-width: 768px) {\n    flex-direction: column;\n    align-items:center;\n}\n"]))),ne=s.a.div(X||(X=Object(o.a)(["\nwidth: 30%;\nfont-size: 1.1rem;\n@media (max-width: 768px) {\n    width: 80%;\n  }\n"])));function te(e){var n=e.obj,c=n.id,a=Object(l.b)(),r=Object(i.useState)(!1),o=Object(d.a)(r,2),s=o[0],u=o[1],b=Object(i.useState)(c),f=Object(d.a)(b,2),h=f[0],x=f[1],m=j()(n.retuidme).format("HH:mm"),O=Object(l.c)((function(e){return e.id}));Object(i.useEffect)((function(){c!==O&&u(!1)}),[O]);return Object(R.jsxs)(ce,{value:n.id,color:n.zone.color,onClick:function(){u(!s),x(s?c:0),a(function(e){return function(n){return n({type:p,payload:e})}}(h))},backgroundColor:s?n.zone.color:"#373737",children:[Object(R.jsx)(oe,{children:n.zone.name}),Object(R.jsx)(se,{children:n.name}),Object(R.jsxs)(ae,{children:[Object(R.jsxs)(re,{children:[Object(R.jsx)(de,{src:t(76).default,alt:""}),Object(R.jsx)("div",{children:m})]}),Object(R.jsxs)(re,{children:[Object(R.jsx)(de,{src:t(77).default,alt:""}),Object(R.jsx)("div",{children:n.remaining_tickets})]})]})]})}var ie,ce=s.a.div(G||(G=Object(o.a)(["\nbackground-color:",";\nmargin:5px 0;\npadding: 5px 10px;\nborder-top: 4px solid "," ;\nwidth: 142px;\nheight: 142px;\ndisplay:flex;\nflex-direction: column;\njustify-content:space-between;\n&:hover {\n    cursor: pointer;\n  }\n@media (max-width: 768px) {\n    width:25.5vw;\n    height: 25.5vw;\n  }\n@media (max-width: 480px) {\n    width:44vw;\n    height: 44vw;\n  }\n"])),(function(e){return e.backgroundColor}),(function(e){return e.color})),ae=s.a.div(K||(K=Object(o.a)(["\ndisplay:flex;\njustify-content:space-between;\n"]))),re=s.a.div(Q||(Q=Object(o.a)(["\ndisplay:flex;\nalign-items:center;\nhight:0.8rem;\nfont-size: 0.7rem;\npadding-bottom: 5px;\n"]))),oe=s.a.div(V||(V=Object(o.a)(["\nalign-self:flex-end;\nfont-size: 0.9rem;\n@media (max-width: 480px) {\n    font-size: 1.1rem;\n  }\n"]))),se=s.a.div(Z||(Z=Object(o.a)(["\ncolor: white; \nfont-size: 1.3rem;\n@media (max-width: 480px) {\n    font-size: 1.5rem;\n  }\n"]))),de=s.a.img($||($=Object(o.a)(["\nheight: 1.2rem;\n@media (max-width: 480px) {\n    height: 1.5rem;\n}\n"])));function le(e){var n=Object(l.b)(),t=Object(i.useState)(""),c=Object(d.a)(t,2),a=c[0],r=c[1],o=Object(i.useState)(!1),s=Object(d.a)(o,2),u=s[0],j=s[1],b=function(e){var t;e&&n((t=e,function(e){return e({type:f,payload:t})}))},h=function(){r("Problem with server"),j(!0)};Object(i.useEffect)((function(){C(b,h)}),[]);var p=Object(l.c)((function(e){return e.availableTickets})),x=p?p.map((function(e){return Object(R.jsx)(te,{obj:e})})):null;return Object(R.jsxs)(fe,{ref:e.galleryRef,children:[x,Object(R.jsx)(E,{closeModal:function(){return j(!1)},message:a,display:u})]})}var ue,je,be,fe=s.a.div(ie||(ie=Object(o.a)(["\ndisplay:flex;\njustify-content:space-between;\nflex-wrap: wrap;\nmargin-bottom:100px;\n"])));function he(){return Object(R.jsxs)(xe,{children:[Object(R.jsx)(me,{children:"The Jungle"}),Object(R.jsx)(Oe,{children:"TM"})," ",Object(R.jsx)(me,{children:" FastRider Service"})]})}var pe,xe=s.a.div(ue||(ue=Object(o.a)(["\ndisplay:flex;\nmargin: 0 auto 2rem auto;\n"]))),me=s.a.h1(je||(je=Object(o.a)(["\nfont-weight: 300;\nfont-size: 1.9em;\ncolor: white;\n\n@media (max-width: 480px) {\n    font-size: 1.6rem;\n  }\n"]))),Oe=s.a.div(be||(be=Object(o.a)(["\ncolor: white;\nfont-size: 0.5rem;\nmargin-right: 0.8em;\npadding-top: 2rem;\n@media (max-width: 480px) {\n    padding-top: 1.6rem;\n}\n"])));function ge(){var e=Object(l.c)((function(e){return e})),n=Object(i.useRef)(null);Object(i.useEffect)((function(){return console.log("test state ",e)}),[e]);var t=Object(i.useState)(!1),c=Object(d.a)(t,2),a=c[0],r=c[1];return Object(i.useEffect)((function(){window.addEventListener("scroll",(function(){var e=n.current.getBoundingClientRect();e.top+200<window.innerHeight&&e.bottom>=0?r(!0):r(!1)}))}),[]),Object(R.jsxs)(Ce,{children:[Object(R.jsx)(he,{}),Object(R.jsx)(q,{}),Object(R.jsx)(_,{display:a}),Object(R.jsx)(le,{galleryRef:n})]})}var ve,we,ye,ke,ze,Te,Ce=s.a.div(pe||(pe=Object(o.a)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nwidth: 600px;\n\n@media (max-width: 768px) {\n  width: 80%;\n}\n@media (max-width: 480px) {\n  width: 90%;\n}\n"])));function Ne(){var e=Object(l.c)((function(e){return e.userOrder})),n=j()(e.return_time).format("HH:mm");return Object(R.jsxs)(Ee,{color:e.ride.zone.color,children:[Object(R.jsxs)(Ae,{children:[Object(R.jsx)(Fe,{children:e.ride.name}),Object(R.jsx)(Ie,{children:e.ride.zone.name})]}),Object(R.jsxs)("div",{children:[Object(R.jsx)(Me,{children:"Return At"}),Object(R.jsx)(He,{children:n})]}),Object(R.jsxs)("div",{children:[Object(R.jsx)(Me,{children:"Use Access Code"}),Object(R.jsx)(He,{children:e.access_code})]})]})}var Se,Re,Ee=s.a.div(ve||(ve=Object(o.a)(["\nbackground-color: #373737;\nmargin:3rem auto;\npadding: 5px 10px 20px 10px;\nborder-top: 5px solid "," ;\ndisplay:flex;\nflex-direction: column;\n"])),(function(e){return e.color})),Ae=s.a.div(we||(we=Object(o.a)(["\ndisplay:flex;\njustify-content:space-between;\npadding-bottom: 20px;\n"]))),Ie=s.a.div(ye||(ye=Object(o.a)(["\nfont-size: 1rem;\n"]))),Fe=Object(s.a)(Ie)(ke||(ke=Object(o.a)(["\ncolor: white; \n"]))),Me=s.a.div(ze||(ze=Object(o.a)(["\n"]))),He=Object(s.a)(Fe)(Te||(Te=Object(o.a)(["\nfont-size: 1.8rem;\n"])));function Pe(){return Object(R.jsxs)(Je,{children:[Object(R.jsx)(he,{}),Object(R.jsxs)(Be,{children:[Object(R.jsx)(D,{img:t(78).default,data:"Thank you for using The Jungle MT FastRider ticket system = access code is now redy"}),Object(R.jsx)(Ne,{})]})]})}var _e,Je=s.a.div(Se||(Se=Object(o.a)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\n"]))),Be=s.a.div(Re||(Re=Object(o.a)(["\nwidth: 30vw;\n@media (max-width: 768px) {\n    width: 80%;\n}\n  @media (max-width: 480px) {\n    width: 90%;\n}\n  \n"]))),Le=t(23);var Ue=function(){return Object(R.jsx)(De,{children:Object(R.jsxs)(Le.a,{children:[Object(R.jsx)(S.a,{exact:!0,path:"/",children:Object(R.jsx)(ge,{})}),Object(R.jsx)(S.a,{exact:!0,path:"/confirmation",children:Object(R.jsx)(Pe,{})})]})})},De=s.a.div(_e||(_e=Object(o.a)(["\nbackground-color:  #232323;\ndisplay: flex;\njustify-content: center;\n"]))),We=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,80)).then((function(n){var t=n.getCLS,i=n.getFID,c=n.getFCP,a=n.getLCP,r=n.getTTFB;t(e),i(e),c(e),a(e),r(e)}))},Xe=t(27),Ye=t(41),qe=t(15),Ge={availableTickets:"",userOrder:"",id:0},Ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case f:return Object(qe.a)(Object(qe.a)({},e),{},{availableTickets:n.payload});case h:return Object(qe.a)(Object(qe.a)({},e),{},{userOrder:n.payload});case p:return Object(qe.a)(Object(qe.a)({},e),{},{id:n.payload});default:return e}},Qe=[Ye.a],Ve=Object(Xe.b)(Ke,Xe.a.apply(void 0,Qe));r.a.render(Object(R.jsx)(l.a,{store:Ve,children:Object(R.jsx)(c.a.StrictMode,{children:Object(R.jsx)(Ue,{})})}),document.getElementById("root")),We()}},[[79,1,2]]]);
//# sourceMappingURL=main.f683a82b.chunk.js.map