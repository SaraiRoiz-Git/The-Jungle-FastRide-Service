(this.webpackJsonpe=this.webpackJsonpe||[]).push([[0],{45:function(e,n,t){},46:function(e,n,t){},72:function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/ico-01.f10f49f4.svg"},73:function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/ico-02.97603741.svg"},74:function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/ico-03.237c47a5.svg"},75:function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/ico-g-03.96cb8188.svg"},76:function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/ico-g-01.b07897b4.svg"},77:function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/ico-04.cb124183.svg"},78:function(e,n,t){"use strict";t.r(n);var i=t(0),c=t.n(i),a=t(18),r=t.n(a),o=(t(45),t(3)),s=t(2),d=(t(46),t(5)),l=t(11),u=t(15),j=t.n(u),b=function(e){for(var n=0,t=0;t<e.length;t++){var i=Number(e.charAt(t));if(isNaN(i))return null;if(i%2===0)n+=i;else{var c=2*i;n+=c>9?Math.floor(c/10)+c%10:c}}return String.fromCharCode(n+65)},f="ON_ENTER",p="ON_PIN_ENTER",h="ID",x=function(e){return function(n){return n({type:p,payload:e})}},m=t(17),O=t.n(m),g=t(21),v=t(19),w=t.n(v),y="433898df4a3e992b8411004109e4d574a90695e39e";w.a.defaults.baseURL="http://fast-rider.herokuapp.com/api";var k,z,T,C=function(){var e=Object(g.a)(O.a.mark((function e(n,t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w.a.get("/v1/rides",{params:{token:y}}).then((function(e){n(e.data)})).catch((function(e){t(e)}));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),E=function(){var e=Object(g.a)(O.a.mark((function e(n,t,i,c){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w.a.post("/v1/tickets",{token:y,pin:i,ride_id:c}).then((function(e){console.log("response",e),n(e)})).catch((function(e){console.log("response-failyer",e.response.data),t(e)}));case 1:case"end":return e.stop()}}),e)})));return function(n,t,i,c){return e.apply(this,arguments)}}(),N=t(79),S=t(1);function I(e){return Object(S.jsxs)(M,{display:e.display?"flex":"none",children:[Object(S.jsx)(_,{onClick:e.closeModal,children:"X"}),Object(S.jsx)(H,{children:e.message})]})}var A,F,R,M=s.a.div(k||(k=Object(o.a)(["\nposition: absolute;\nbackground-color:  #373737;\nmargin: auto;\nwidth: 400px;\nleft:50%;\nmargin-left:-200px;\ntop:-50px;\ndisplay:",";\nflex-direction: column;\nalign-items: center;\nborder:0.5px solid white  ;\n\n@media (max-width: 480px) {\n    width: 90vw;\n}\n"])),(function(e){return e.display})),_=s.a.div(z||(z=Object(o.a)(["\nalign-self: flex-end;\ncolor: white;\nfont-weight: 500;\npadding:20px 20px 0  0;\n"]))),H=s.a.div(T||(T=Object(o.a)(["\nfont-size: 1.1rem;\nfont-weight: 500;\npadding:1rem;\npadding-bottom: 3.5rem\n"])));function J(){var e=Object(d.b)(),n=Object(i.useState)(""),t=Object(l.a)(n,2),c=t[0],a=t[1],r=Object(i.useState)(!1),o=Object(l.a)(r,2),s=o[0],u=o[1],f=Object(i.useState)(""),p=Object(l.a)(f,2),h=p[0],m=p[1],O=Object(d.c)((function(e){return e.id})),g=Object(N.d)(),v=function(n){n&&(console.log("callbackSucss",n.data),e(x(n.data)),g.push("/confirmation"))},w=function(n){console.log("setErrors",n.response.data.message),e(x("")),m(n.response.data.message),console.log("setErrors2",h),u(!0)},y=function(e){var n;!function(){var e=parseInt(j()().format("HH"));return 9<=e&&e<19}()?(u(!0),m("The Jungle FastRider is now close!  The opening hours is between 9:00 to 19:00 ")):0==O?(u(!0),m("You need to choose a ride")):15!==(n=c).length||"J"!==n.charAt(0)||"N"!==n.charAt(1)||"-"!==n.charAt(2)||"-"!==n.charAt(7)||"-"!==n.charAt(12)||b(n.substring(3,7))!==n.charAt(13)||b(n.substring(8,12))!==n.charAt(14)?(u(!0),m("Incorrect pin number")):E(v,w,c,O)};return Object(S.jsxs)(P,{children:[Object(S.jsx)(B,{type:"text",placeholder:"#PIN",name:"pin",value:c,onChange:function(e){return a(e.target.value)}}),Object(S.jsx)(L,{type:"button",onClick:function(){return y()},children:"SUBMIT"}),Object(S.jsx)(I,{closeModal:function(){return u(!1)},message:h,display:s})]})}var P=s.a.div(A||(A=Object(o.a)(["\n    display:flex;\n    border-top:1px solid grey;\n    margin: 2rem 0;\n    position: relative;\n    @media (max-width: 480px) {\n        display:block;\n      }\n"]))),B=s.a.input(F||(F=Object(o.a)(["\n    text-align: left;\n    color:black;\n    padding 8px;\n    width: 77%;\n    @media (max-width: 480px) {\n        width: 100%;\n      }\n"]))),L=s.a.button(R||(R=Object(o.a)(["\n    background-color: #4c4c4b;\n    width: 23%;\n    color:white;\n    border:none;\n    &:hover{\n        background-color: #606060; \n    }\n\n    @media (max-width: 480px) {\n        border-top:1px solid grey;\n        width: 100%;\n        padding:1rem;\n        position:fixed;\n        z-index:99;\n        left:0;\n        right:0;\n        bottom:0;\n        font-size:1.1rem;\n      }\n"])));var U,D,W=function(e){return Object(S.jsxs)("div",{children:[Object(S.jsx)("img",{className:"image",src:e.img,alt:""}),Object(S.jsx)("p",{children:e.data})]})};function X(){return Object(S.jsxs)(V,{children:[Object(S.jsx)(Z,{children:Object(S.jsx)(W,{img:t(72).default,data:"Enter your park ticket #PIN number, then select the desired ride while noting the ststed return time"})}),Object(S.jsx)(Z,{children:Object(S.jsx)(W,{img:t(73).default,data:"Press 'submit' to confirm and retrive your access code"})}),Object(S.jsx)(Z,{children:Object(S.jsx)(W,{img:t(74).default,data:"When the time comes, use the special FastRider line to cut out a considerable wait time"})})]})}var Y,q,G,K,Q,V=s.a.div(U||(U=Object(o.a)(["\ndisplay: flex;\njustify-content: space-between;\n@media (max-width: 768px) {\n    flex-direction: column;\n    align-items:center;\n}\n"]))),Z=s.a.div(D||(D=Object(o.a)(["\nwidth: 30%;\nfont-size: 1.1rem;\n@media (max-width: 768px) {\n    width: 80%;\n  }\n"])));function $(e){var n=e.obj,c=n.id,a=Object(d.b)(),r=Object(i.useState)(!1),o=Object(l.a)(r,2),s=o[0],u=o[1],b=Object(i.useState)(c),f=Object(l.a)(b,2),p=f[0],x=f[1],m=j()(n.retuidme).format("HH:mm"),O=Object(d.c)((function(e){return e.id}));Object(i.useEffect)((function(){console.log("chosenId",O,typeof O),console.log("Id",c,typeof c),c!==O&&u(!1)}),[O]);return Object(S.jsxs)(ne,{value:n.id,color:n.zone.color,onClick:function(){u(!s),x(s?c:0),a(function(e){return function(n){return n({type:h,payload:e})}}(p))},backgroundColor:s?n.zone.color:"#373737",children:[Object(S.jsx)(ce,{children:n.zone.name}),Object(S.jsx)(ae,{children:n.name}),Object(S.jsxs)(te,{children:[Object(S.jsxs)(ie,{children:[Object(S.jsx)("img",{src:t(75).default,alt:""}),Object(S.jsx)("div",{children:m})]}),Object(S.jsxs)(ie,{children:[Object(S.jsx)("img",{src:t(76).default,alt:""}),Object(S.jsx)("div",{children:n.remaining_tickets})]})]})]})}var ee,ne=s.a.div(Y||(Y=Object(o.a)(["\nbackground-color:",";\nmargin:5px 0;\npadding: 5px 10px;\nborder-top: 4px solid "," ;\nwidth: 142px;\nheight: 142px;\ndisplay:flex;\nflex-direction: column;\njustify-content:space-between;\n@media (max-width: 768px) {\n    width:25.5vw;\n    height: 25.5vw;\n  }\n@media (max-width: 480px) {\n    width:44vw;\n    height: 44vw;\n  }\n\n"])),(function(e){return e.backgroundColor}),(function(e){return e.color})),te=s.a.div(q||(q=Object(o.a)(["\ndisplay:flex;\njustify-content:space-between;\n"]))),ie=s.a.div(G||(G=Object(o.a)(["\ndisplay:flex;\nalign-items:center;\nhight:0.8rem;\nfont-size: 0.7rem;\npadding-bottom: 5px;\n"]))),ce=s.a.div(K||(K=Object(o.a)(["\nalign-self:flex-end;\nfont-size: 0.9rem;\n@media (max-width: 480px) {\n    font-size: 1.1rem;\n  }\n"]))),ae=s.a.div(Q||(Q=Object(o.a)(["\ncolor: white; \nfont-size: 1.3rem;\n@media (max-width: 480px) {\n    font-size: 1.5rem;\n  }\n"])));function re(){var e=Object(d.b)(),n=Object(i.useState)(""),t=Object(l.a)(n,2),c=(t[0],t[1]),a=function(n){var t;n&&e((t=n,function(e){return e({type:f,payload:t})}))},r=function(){c("Email is alredy exit")};Object(i.useEffect)((function(){C(a,r)}),[]);var o=Object(d.c)((function(e){return e.availableTickets})),s=o?o.map((function(e){return Object(S.jsx)($,{obj:e})})):null;return Object(S.jsx)(le,{children:s})}var oe,se,de,le=s.a.div(ee||(ee=Object(o.a)(["\ndisplay:flex;\njustify-content:space-between;\nflex-wrap: wrap;\n"])));function ue(){return Object(S.jsxs)(be,{children:[Object(S.jsx)(fe,{children:"The Jungle"}),Object(S.jsx)(pe,{children:"TM"})," ",Object(S.jsx)(fe,{children:" FastRider Service"})]})}var je,be=s.a.div(oe||(oe=Object(o.a)(["\ndisplay:flex;\nmargin: 0 auto 2rem auto;\n"]))),fe=s.a.h1(se||(se=Object(o.a)(["\nfont-weight: 300;\nfont-size: 1.9em;\ncolor: white;\n\n@media (max-width: 480px) {\n    font-size: 1.6rem;\n  }\n\n"]))),pe=s.a.div(de||(de=Object(o.a)(["\ncolor: white;\nfont-size: 0.5rem;\nmargin-right: 0.8em;\npadding-top: 2rem;\n@media (max-width: 480px) {\n    padding-top: 1.6rem;\n  }\n"])));var he,xe,me,Oe,ge,ve,we=function(){var e=Object(d.c)((function(e){return e}));return Object(i.useEffect)((function(){return console.log("test state ",e)}),[e]),Object(S.jsxs)(ye,{children:[Object(S.jsx)(ue,{}),Object(S.jsx)(X,{}),Object(S.jsx)(J,{}),Object(S.jsx)(re,{})]})},ye=s.a.div(je||(je=Object(o.a)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nwidth: 600px;\n\n@media (max-width: 768px) {\n  width: 80%;\n}\n@media (max-width: 480px) {\n  width: 90%;\n}\n"])));function ke(){var e=Object(d.c)((function(e){return e.userOrder})),n=j()(e.return_time).format("HH:mm");return Object(S.jsxs)(Ce,{color:e.ride.zone.color,children:[Object(S.jsxs)(Ee,{children:[Object(S.jsx)(Se,{children:e.ride.name}),Object(S.jsx)(Ne,{children:e.ride.zone.name})]}),Object(S.jsxs)("div",{children:[Object(S.jsx)(Ie,{children:"Return At"}),Object(S.jsx)(Ae,{children:n})]}),Object(S.jsxs)("div",{children:[Object(S.jsx)(Ie,{children:"Use Access Code"}),Object(S.jsx)(Ae,{children:e.access_code})]})]})}var ze,Te,Ce=s.a.div(he||(he=Object(o.a)(["\nbackground-color: #373737;\nmargin:3rem auto;\npadding: 5px 10px 20px 10px;\nborder-top: 5px solid "," ;\n\ndisplay:flex;\nflex-direction: column;\n"])),(function(e){return e.color})),Ee=s.a.div(xe||(xe=Object(o.a)(["\ndisplay:flex;\njustify-content:space-between;\npadding-bottom: 20px;\n"]))),Ne=s.a.div(me||(me=Object(o.a)(["\nfont-size: 1rem;\n"]))),Se=Object(s.a)(Ne)(Oe||(Oe=Object(o.a)(["\ncolor: white; \n"]))),Ie=s.a.div(ge||(ge=Object(o.a)(["\n"]))),Ae=Object(s.a)(Se)(ve||(ve=Object(o.a)(["\nfont-size: 1.8rem;\n"])));function Fe(){return Object(S.jsxs)(Me,{children:[Object(S.jsx)(ue,{}),Object(S.jsxs)(_e,{children:[Object(S.jsx)(W,{img:t(77).default,data:"Thank you for using The Jungle MT FastRider ticket system = access code is now redy"}),Object(S.jsx)(ke,{})]})]})}var Re,Me=s.a.div(ze||(ze=Object(o.a)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\n"]))),_e=s.a.div(Te||(Te=Object(o.a)(["\nwidth: 30vw;\n@media (max-width: 768px) {\n    width: 80%;\n  }\n  @media (max-width: 480px) {\n    width: 90%;\n  }\n  \n"]))),He=t(9),Je=Object(He.a)();var Pe=function(){return Object(S.jsxs)(Be,{children:[Object(S.jsx)(N.b,{history:Je,children:Object(S.jsxs)(N.c,{children:[Object(S.jsx)(N.a,{exact:!0,path:"/",component:we}),Object(S.jsx)(N.a,{path:"/confirmation",component:Fe})]})}),","]})},Be=s.a.div(Re||(Re=Object(o.a)(["\nbackground-color:  #232323;\ndisplay: flex;\njustify-content: center;\n"]))),Le=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,80)).then((function(n){var t=n.getCLS,i=n.getFID,c=n.getFCP,a=n.getLCP,r=n.getTTFB;t(e),i(e),c(e),a(e),r(e)}))},Ue=t(24),De=t(39),We=t(14),Xe={availableTickets:"",userOrder:"",id:0},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case f:return Object(We.a)(Object(We.a)({},e),{},{availableTickets:n.payload});case p:return Object(We.a)(Object(We.a)({},e),{},{userOrder:n.payload});case h:return Object(We.a)(Object(We.a)({},e),{},{id:n.payload});default:return e}},qe=[De.a],Ge=Object(Ue.b)(Ye,Ue.a.apply(void 0,qe));r.a.render(Object(S.jsx)(d.a,{store:Ge,children:Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(Pe,{})})}),document.getElementById("root")),Le()}},[[78,1,2]]]);
//# sourceMappingURL=main.6e791ef1.chunk.js.map