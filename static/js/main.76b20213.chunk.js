(this["webpackJsonppocket-pal"]=this["webpackJsonppocket-pal"]||[]).push([[0],[,,,function(e,t,n){e.exports={"tip-calculator":"TipCalculator_tip-calculator__q6AfM","animate-budget":"TipCalculator_animate-budget__22bo1","tip-nums":"TipCalculator_tip-nums__10p5w","tip-amount":"TipCalculator_tip-amount__GT-2V","tip-calculated":"TipCalculator_tip-calculated__W3sE4",neg:"TipCalculator_neg__2ZuSV",pos:"TipCalculator_pos__1WvHZ",dick:"TipCalculator_dick__1OTwp",tip:"TipCalculator_tip__H9ZQ7",pretip:"TipCalculator_pretip__B-6Iq"}},function(e,t,n){e.exports={budget:"Budget_budget__2wTe8","animate-budget":"Budget_animate-budget__3X-4A","budget-container":"Budget_budget-container__s-f3E","budget-buttons":"Budget_budget-buttons__2PBw_","budget-tracker":"Budget_budget-tracker__1EAJ-",tracker:"Budget_tracker__3mJLU","tracker-inside":"Budget_tracker-inside__3vpDe","budget-footer":"Budget_budget-footer__T9oJs"}},function(e,t,n){e.exports={"event-pal":"EventPal_event-pal__DsY9X","event-tabs":"EventPal_event-tabs__1Hd5Q","event-tab":"EventPal_event-tab__1Kjcf"}},function(e,t,n){e.exports={"nav-bar":"NavBar_nav-bar__GXwFc","hamburger-container":"NavBar_hamburger-container__3edxX",hamburger:"NavBar_hamburger__1qeYw","hamburger-container--x":"NavBar_hamburger-container--x__3jqt5"}},function(e,t,n){e.exports={"modal-container":"NumPad_modal-container__3JnrC","button-container":"NumPad_button-container__14uaI","current-expense":"NumPad_current-expense__FnyFF"}},function(e,t,n){e.exports={container:"List_container__2R-9a",heading:"List_heading__3BhxT","list-container":"List_list-container__3pICb"}},,,function(e,t,n){e.exports={"nav-col":"NavCol_nav-col__2lbzn","nav-col-animation":"NavCol_nav-col-animation__1JZoY"}},function(e,t,n){e.exports={home:"HomePage_home__3P7pu"}},function(e,t,n){e.exports={btn:"Button_btn__Vaap_"}},function(e,t,n){e.exports={"home-page":"HomePageButtons_home-page__2DF2-"}},function(e,t,n){e.exports={"list-pal":"ListPal_list-pal__2NxWs"}},function(e,t,n){e.exports={games:"Games_games__10gQt"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(10),s=n.n(i),l=(n(21),n(2)),r=n(6),o=n.n(r),j=n(0),u=function(e){return Object(j.jsxs)("nav",{className:o.a["nav-bar"],children:[Object(j.jsx)("h1",{children:"PocketPal"}),Object(j.jsx)("div",{className:e.navColIsOpen?"".concat(o.a["hamburger-container--x"]):"".concat(o.a["hamburger-container"]),onClick:e.hamburgerClickHandler,children:Object(j.jsx)("div",{className:o.a.hamburger})})]})},b=n(11),d=n.n(b),O=function(e){return Object(j.jsxs)("div",{className:d.a["nav-col"],children:[Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{onClick:e.goHome,children:"Home"}),Object(j.jsx)("li",{children:"About"}),Object(j.jsx)("li",{children:"Contact"})]}),Object(j.jsx)("div",{children:"\xa9"})]})},h=n(12),x=n.n(h),m=n(13),v=n.n(m),_=function(e){return Object(j.jsx)("button",{className:v.a.btn,onClick:e.onClick,children:e.buttonName},Math.random())},g=n(14),p=n.n(g),f=function(e){return Object(j.jsxs)("ul",{className:p.a["home-page"],children:[Object(j.jsx)("li",{children:Object(j.jsx)(_,{buttonName:"Budget Pal",onClick:e.renderBudgetPal})}),Object(j.jsx)("li",{children:Object(j.jsx)(_,{buttonName:"Tip Calculator",onClick:e.renderTipCalc})}),Object(j.jsx)("li",{children:Object(j.jsx)(_,{buttonName:"List Pal",onClick:e.renderListPal})}),Object(j.jsx)("li",{children:Object(j.jsx)(_,{buttonName:"Event Pal",onClick:e.renderEventPal})}),Object(j.jsx)("li",{children:Object(j.jsx)(_,{buttonName:"Games",onClick:e.renderGames})})]})},C=n(4),k=n.n(C),N=n(7),E=n.n(N),B=function(e){var t=Object(c.useState)(null),n=Object(l.a)(t,2),a=n[0],i=n[1],s=function(e){e.preventDefault();var t=e.target.value;a?i(a+""+(t+="")):i(t+"")};return Object(j.jsxs)("div",{className:E.a["modal-container"],children:[Object(j.jsx)("h4",{children:"How much?"}),Object(j.jsxs)("div",{className:E.a["button-container"],children:[Object(j.jsx)("button",{onClick:s,value:"1",children:"1"}),Object(j.jsx)("button",{onClick:s,value:"2",children:"2"}),Object(j.jsx)("button",{onClick:s,value:"3",children:"3"}),Object(j.jsx)("button",{onClick:s,value:"4",children:"4"}),Object(j.jsx)("button",{onClick:s,value:"5",children:"5"}),Object(j.jsx)("button",{onClick:s,value:"6",children:"6"}),Object(j.jsx)("button",{onClick:s,value:"7",children:"7"}),Object(j.jsx)("button",{onClick:s,value:"8",children:"8"}),Object(j.jsx)("button",{onClick:s,value:"9",children:"9"}),Object(j.jsx)("button",{onClick:s,value:".",children:"."}),Object(j.jsx)("button",{onClick:s,value:"0",children:"0"}),Object(j.jsx)("button",{onClick:function(){i(null)},children:"cl"})]}),Object(j.jsx)("div",{className:E.a["current-expense"],children:a||"expense"}),Object(j.jsx)("button",{onClick:function(){e.submitButton(a)},children:"+"})]})},P=function(e){var t=Object(c.useState)((function(){var e=localStorage.getItem("goal");return JSON.parse(e)||100})),n=Object(l.a)(t,2),a=n[0],i=n[1],s=Object(c.useState)((function(){var e=localStorage.getItem("goal-progress");return JSON.parse(e)||0})),r=Object(l.a)(s,2),o=r[0],u=r[1],b=Object(c.useState)(!1),d=Object(l.a)(b,2),O=d[0],h=d[1],x=Object(c.useState)(!1),m=Object(l.a)(x,2),v=m[0],g=m[1];Object(c.useEffect)((function(){localStorage.setItem("goal",JSON.stringify(a))}),[a]),Object(c.useEffect)((function(){localStorage.setItem("goal-progress",JSON.stringify(o))}),[o]);var p=function(){var e=o/a;return e*=100,e+="%"}();return Object(j.jsxs)("div",{className:k.a.budget,children:[Object(j.jsx)("h2",{children:"Budget Pal"}),Object(j.jsxs)("div",{className:k.a["budget-container"],children:[Object(j.jsxs)("div",{className:k.a["budget-buttons"],children:[Object(j.jsx)(_,{onClick:function(){g(!0)},buttonName:"New Goal"}),Object(j.jsx)(_,{onClick:function(){h(!0)},buttonName:"Add $"}),Object(j.jsx)(_,{onClick:function(){u(0)},buttonName:"Refresh"})]}),Object(j.jsx)("div",{className:k.a["budget-tracker"],children:Object(j.jsx)("div",{className:k.a.tracker,children:Object(j.jsx)("div",{className:k.a["tracker-inside"],style:{height:p}})})})]}),Object(j.jsxs)("div",{className:k.a["budget-footer"],children:["$",o,"/$",a]}),O&&Object(j.jsx)(B,{submitButton:function(e){u(o+ +e),h(!1)}}),v&&Object(j.jsx)(B,{submitButton:function(e){i(e),u(null),g(!1)}})]})},S=n(3),A=n.n(S),I=function(e){var t=Object(c.useState)(!1),n=Object(l.a)(t,2),a=n[0],i=n[1],s=Object(c.useState)(0),r=Object(l.a)(s,2),o=r[0],u=r[1],b=Object(c.useState)(20),d=Object(l.a)(b,2),O=d[0],h=d[1],x=Object(c.useState)(!1),m=Object(l.a)(x,2),v=m[0],_=m[1],g=Object(c.useState)(!1),p=Object(l.a)(g,2),f=p[0],C=p[1],k=Object(c.useState)(!1),N=Object(l.a)(k,2),E=N[0],B=N[1],P=function(e){e.preventDefault(),i(!0);var t=e.target.value;u(a?o+t:t)},S=function(){var e=+o,t=O;t+=1,E||(t-=2),t="."+t,console.log(e),console.log(t),C(e*t)};return Object(j.jsxs)("div",{className:A.a["tip-calculator"],children:[!a&&Object(j.jsx)("span",{children:"Enter Amount Below"}),a&&Object(j.jsx)("span",{children:o}),Object(j.jsxs)("div",{className:A.a["tip-nums"],children:[Object(j.jsx)("button",{onClick:P,value:"1",children:"1"}),Object(j.jsx)("button",{onClick:P,value:"2",children:"2"}),Object(j.jsx)("button",{onClick:P,value:"3",children:"3"}),Object(j.jsx)("button",{onClick:P,value:"4",children:"4"}),Object(j.jsx)("button",{onClick:P,value:"5",children:"5"}),Object(j.jsx)("button",{onClick:P,value:"6",children:"6"}),Object(j.jsx)("button",{onClick:P,value:"7",children:"7"}),Object(j.jsx)("button",{onClick:P,value:"8",children:"8"}),Object(j.jsx)("button",{onClick:P,value:"9",children:"9"}),Object(j.jsx)("button",{onClick:function(){var e=o+"";u(e+=".")},children:"."}),Object(j.jsx)("button",{onClick:P,value:"0",children:"0"}),Object(j.jsx)("button",{onClick:function(){C(!1),i(!1),u(null)},children:"cl"})]}),Object(j.jsxs)("div",{className:A.a["tip-amount"],children:[Object(j.jsx)("button",{className:A.a.neg,onClick:function(){a&&(15===O?_(!0):(B(!1),h(O-1),S()))},children:"-"}),!v&&Object(j.jsxs)("span",{children:[O,"%"]}),v&&Object(j.jsx)("div",{className:A.a.dick,children:"Dont Be A Dick..."}),Object(j.jsx)("button",{className:A.a.pos,onClick:function(){a&&(B(!0),h(O+1),_(!1),S())},children:"+"})]}),!f&&Object(j.jsx)("div",{className:A.a.pretip,children:"(Tip Amount)"}),f&&Object(j.jsx)("div",{className:A.a.tip,children:f})]})},T=n(15),w=n.n(T),G=a.a.createContext({lists:[]}),M=n(8),y=n.n(M),L=function(e){var t=Object(c.useState)(!1),n=Object(l.a)(t,2),a=n[0],i=n[1],s=e.listItems.map((function(e){return Object(j.jsx)("li",{children:e},Math.random())}));return Object(j.jsxs)("div",{className:y.a.container,children:[Object(j.jsxs)("div",{className:y.a.heading,children:[Object(j.jsx)("span",{children:"\u2795"}),Object(j.jsx)("h4",{children:e.name}),Object(j.jsx)("span",{onClick:function(){i(!a)},children:"\u2b07"})]}),Object(j.jsx)("div",{className:y.a["list-container"],children:a&&Object(j.jsx)("ul",{children:s})})]})},H=function(e){var t=Object(c.useContext)(G).lists.map((function(e){return Object(j.jsx)(L,{name:e.listName,listItems:e.listItems},Math.random())}));return Object(j.jsxs)("div",{className:w.a["list-pal"],children:[Object(j.jsx)(_,{buttonName:"Add List",onClick:function(){console.log("Make List Button Clicked")}}),Object(j.jsx)("h3",{children:"My Lists:"}),Object(j.jsx)("div",{children:t})]})},J=n(5),F=n.n(J),D=function(e){return Object(j.jsxs)("div",{className:F.a["event-pal"],children:[Object(j.jsx)("button",{children:"Add Event"}),Object(j.jsxs)("div",{className:F.a["event-tabs"],children:[Object(j.jsxs)("div",{className:F.a["event-tab"],children:[Object(j.jsx)("h3",{children:"today/thisweek"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"Event Info"}),Object(j.jsx)("li",{children:"Event Info"}),Object(j.jsx)("li",{children:"Event Info"})]})]}),Object(j.jsxs)("div",{className:F.a["event-tab"],children:[Object(j.jsx)("h3",{children:"today/thisweek"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"Event Info"}),Object(j.jsx)("li",{children:"Event Info"}),Object(j.jsx)("li",{children:"Event Info"})]})]}),Object(j.jsxs)("div",{className:F.a["event-tab"],children:[Object(j.jsx)("h3",{children:"today/thisweek"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"Event Info"}),Object(j.jsx)("li",{children:"Event Info"}),Object(j.jsx)("li",{children:"Event Info"})]})]})]})]})},q=n(16),X=n.n(q),Z=function(e){return Object(j.jsxs)("div",{className:X.a.games,children:[Object(j.jsx)("button",{children:"GAME"}),Object(j.jsx)("button",{children:"GAME"}),Object(j.jsx)("button",{children:"GAME"}),Object(j.jsx)("button",{children:"GAME"}),Object(j.jsx)("button",{children:"GAME"}),Object(j.jsx)("button",{children:"GAME"}),Object(j.jsx)("button",{children:"GAME"}),Object(j.jsx)("button",{children:"GAME"}),Object(j.jsx)("button",{children:"GAME"})]})},Q=function(e){return Object(j.jsx)(G.Provider,{value:{lists:[{listName:"Name 1",listItems:["test1","test1again"]},{listName:"Name 2",listItems:["test2","testing22"]}]},children:e.children})},V=function(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),a=n[0],i=n[1];"home"!==a&&e.home&&i("home");return Object(j.jsxs)("div",{className:x.a.home,children:["home"===a&&Object(j.jsx)(f,{renderBudgetPal:function(){e.goAway(),i("budget")},renderTipCalc:function(){e.goAway(),i("tip")},renderListPal:function(){e.goAway(),i("list")},renderEventPal:function(){e.goAway(),i("event")},renderGames:function(){e.goAway(),i("game")}}),"budget"===a&&Object(j.jsx)(P,{}),"tip"===a&&Object(j.jsx)(I,{}),"list"===a&&Object(j.jsx)(Q,{children:Object(j.jsx)(H,{})}),"event"===a&&Object(j.jsx)(D,{}),"game"===a&&Object(j.jsx)(Z,{})]})};var W=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(!0),r=Object(l.a)(s,2),o=r[0],b=r[1];return Object(j.jsxs)(a.a.Fragment,{children:[n&&Object(j.jsx)(O,{goHome:function(){i(!1),b(!0)}}),Object(j.jsx)(u,{hamburgerClickHandler:function(){i(!n)},navColIsOpen:n}),Object(j.jsx)(V,{home:o,goAway:function(){b(!1)}})]})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(W,{})}),document.getElementById("root")),Y()}],[[23,1,2]]]);
//# sourceMappingURL=main.76b20213.chunk.js.map