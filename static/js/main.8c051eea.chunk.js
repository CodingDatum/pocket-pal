(this["webpackJsonppocket-pal"]=this["webpackJsonppocket-pal"]||[]).push([[0],[,,,function(e,t,n){e.exports={"tip-calculator":"TipCalculator_tip-calculator__q6AfM","tip-nums":"TipCalculator_tip-nums__10p5w","tip-amount":"TipCalculator_tip-amount__GT-2V","tip-calculated":"TipCalculator_tip-calculated__W3sE4",neg:"TipCalculator_neg__2ZuSV",pos:"TipCalculator_pos__1WvHZ",dick:"TipCalculator_dick__1OTwp",tip:"TipCalculator_tip__H9ZQ7"}},function(e,t,n){e.exports={budget:"Budget_budget__2wTe8","animate-budget":"Budget_animate-budget__3X-4A","budget-container":"Budget_budget-container__s-f3E","budget-buttons":"Budget_budget-buttons__2PBw_","budget-tracker":"Budget_budget-tracker__1EAJ-",tracker:"Budget_tracker__3mJLU"}},function(e,t,n){e.exports={"event-pal":"EventPal_event-pal__DsY9X","event-tabs":"EventPal_event-tabs__1Hd5Q","event-tab":"EventPal_event-tab__1Kjcf"}},function(e,t,n){e.exports={"nav-bar":"NavBar_nav-bar__GXwFc","hamburger-container":"NavBar_hamburger-container__3edxX",hamburger:"NavBar_hamburger__1qeYw","hamburger-container--x":"NavBar_hamburger-container--x__3jqt5"}},function(e,t,n){e.exports={container:"List_container__2R-9a",heading:"List_heading__3BhxT","list-container":"List_list-container__3pICb"}},,,function(e,t,n){e.exports={"nav-col":"NavCol_nav-col__2lbzn","nav-col-animation":"NavCol_nav-col-animation__1JZoY"}},function(e,t,n){e.exports={home:"HomePage_home__3P7pu"}},function(e,t,n){e.exports={btn:"Button_btn__Vaap_"}},function(e,t,n){e.exports={"home-page":"HomePageButtons_home-page__2DF2-"}},function(e,t,n){e.exports={"list-pal":"ListPal_list-pal__2NxWs"}},function(e,t,n){e.exports={games:"Games_games__10gQt"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(9),s=n.n(i),l=(n(20),n(2)),r=n(6),j=n.n(r),o=n(0),b=function(e){return Object(o.jsxs)("nav",{className:j.a["nav-bar"],children:[Object(o.jsx)("h1",{children:"PocketPal"}),Object(o.jsx)("div",{className:e.navColIsOpen?"".concat(j.a["hamburger-container--x"]):"".concat(j.a["hamburger-container"]),onClick:e.hamburgerClickHandler,children:Object(o.jsx)("div",{className:j.a.hamburger})})]})},u=n(10),d=n.n(u),h=function(e){return Object(o.jsxs)("div",{className:d.a["nav-col"],children:[Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{onClick:e.goHome,children:"Home"}),Object(o.jsx)("li",{children:"About"}),Object(o.jsx)("li",{children:"Contact"})]}),Object(o.jsx)("div",{children:"\xa9"})]})},O=n(11),x=n.n(O),m=n(12),v=n.n(m),_=function(e){return Object(o.jsx)("button",{className:v.a.btn,onClick:e.onClick,children:e.buttonName},Math.random())},p=n(13),g=n.n(p),f=function(e){return Object(o.jsxs)("ul",{className:g.a["home-page"],children:[Object(o.jsx)("li",{children:Object(o.jsx)(_,{buttonName:"Budget Pal",onClick:e.renderBudgetPal})}),Object(o.jsx)("li",{children:Object(o.jsx)(_,{buttonName:"Tip Calculator",onClick:e.renderTipCalc})}),Object(o.jsx)("li",{children:Object(o.jsx)(_,{buttonName:"List Pal",onClick:e.renderListPal})}),Object(o.jsx)("li",{children:Object(o.jsx)(_,{buttonName:"Event Pal",onClick:e.renderEventPal})}),Object(o.jsx)("li",{children:Object(o.jsx)(_,{buttonName:"Games",onClick:e.renderGames})})]})},N=n(4),C=n.n(N),k=function(e){return Object(o.jsxs)("div",{className:C.a.budget,children:[Object(o.jsx)("h2",{children:"Budget Pal"}),Object(o.jsxs)("div",{className:C.a["budget-container"],children:[Object(o.jsxs)("div",{className:C.a["budget-buttons"],children:[Object(o.jsx)(_,{buttonName:"Set Goal"}),Object(o.jsx)(_,{buttonName:"Add $"}),Object(o.jsx)(_,{buttonName:"Refresh"})]}),Object(o.jsx)("div",{className:C.a["budget-tracker"],children:Object(o.jsx)("div",{className:C.a.tracker})})]}),Object(o.jsx)("div",{className:C.a["budget-footer"]})]})},E=n(3),A=n.n(E),P=function(e){var t=Object(c.useState)(!1),n=Object(l.a)(t,2),a=n[0],i=n[1],s=Object(c.useState)(0),r=Object(l.a)(s,2),j=r[0],b=r[1],u=Object(c.useState)(20),d=Object(l.a)(u,2),h=d[0],O=d[1],x=Object(c.useState)(!1),m=Object(l.a)(x,2),v=m[0],_=m[1],p=Object(c.useState)(!1),g=Object(l.a)(p,2),f=g[0],N=g[1],C=function(e){e.preventDefault(),i(!0);var t=e.target.value;b(a?j+t:t)},k=function(){var e=h;N(+j*(e=+(e="."+e)))};return Object(o.jsxs)("div",{className:A.a["tip-calculator"],children:[!a&&Object(o.jsx)("span",{children:"Enter Amount"}),a&&Object(o.jsx)("span",{children:j}),Object(o.jsxs)("div",{className:A.a["tip-nums"],children:[Object(o.jsx)("button",{onClick:C,value:"1",children:"1"}),Object(o.jsx)("button",{onClick:C,value:"2",children:"2"}),Object(o.jsx)("button",{onClick:C,value:"3",children:"3"}),Object(o.jsx)("button",{onClick:C,value:"4",children:"4"}),Object(o.jsx)("button",{onClick:C,value:"5",children:"5"}),Object(o.jsx)("button",{onClick:C,value:"6",children:"6"}),Object(o.jsx)("button",{onClick:C,value:"7",children:"7"}),Object(o.jsx)("button",{onClick:C,value:"8",children:"8"}),Object(o.jsx)("button",{onClick:C,value:"9",children:"9"}),Object(o.jsx)("button",{onClick:function(){var e=j+"";b(e+=".")},children:"."}),Object(o.jsx)("button",{onClick:C,value:"0",children:"0"}),Object(o.jsx)("button",{onClick:function(){N(!1),i(!1),b(null)},children:"cl"})]}),Object(o.jsxs)("div",{className:A.a["tip-amount"],children:[Object(o.jsx)("button",{className:A.a.neg,onClick:function(){a&&(15===h?_(!0):(O(h-1),k()))},children:"-"}),!v&&Object(o.jsxs)("span",{children:[h,"%"]}),v&&Object(o.jsx)("div",{className:A.a.dick,children:"Dont Be A Dick"}),Object(o.jsx)("button",{className:A.a.pos,onClick:function(){a&&(O(h+1),_(!1),k())},children:"+"})]}),!f&&Object(o.jsx)("div",{className:A.a.tip,children:"Calculated Tip"}),f&&Object(o.jsx)("div",{className:A.a.tip,children:f})]})},B=n(14),I=n.n(B),T=a.a.createContext({lists:[]}),w=n(7),G=n.n(w),M=function(e){var t=Object(c.useState)(!1),n=Object(l.a)(t,2),a=n[0],i=n[1],s=e.listItems.map((function(e){return Object(o.jsx)("li",{children:e},Math.random())}));return Object(o.jsxs)("div",{className:G.a.container,children:[Object(o.jsxs)("div",{className:G.a.heading,children:[Object(o.jsx)("span",{children:"\u2795"}),Object(o.jsx)("h4",{children:e.name}),Object(o.jsx)("span",{onClick:function(){i(!a)},children:"\u2b07"})]}),Object(o.jsx)("div",{className:G.a["list-container"],children:a&&Object(o.jsx)("ul",{children:s})})]})},L=function(e){var t=Object(c.useContext)(T).lists.map((function(e){return Object(o.jsx)(M,{name:e.listName,listItems:e.listItems},Math.random())}));return Object(o.jsxs)("div",{className:I.a["list-pal"],children:[Object(o.jsx)(_,{buttonName:"Add List",onClick:function(){console.log("Make List Button Clicked")}}),Object(o.jsx)("h3",{children:"My Lists:"}),Object(o.jsx)("div",{children:t})]})},S=n(5),y=n.n(S),H=function(e){return Object(o.jsxs)("div",{className:y.a["event-pal"],children:[Object(o.jsx)("button",{children:"Add Event"}),Object(o.jsxs)("div",{className:y.a["event-tabs"],children:[Object(o.jsxs)("div",{className:y.a["event-tab"],children:[Object(o.jsx)("h3",{children:"today/thisweek"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"Event Info"}),Object(o.jsx)("li",{children:"Event Info"}),Object(o.jsx)("li",{children:"Event Info"})]})]}),Object(o.jsxs)("div",{className:y.a["event-tab"],children:[Object(o.jsx)("h3",{children:"today/thisweek"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"Event Info"}),Object(o.jsx)("li",{children:"Event Info"}),Object(o.jsx)("li",{children:"Event Info"})]})]}),Object(o.jsxs)("div",{className:y.a["event-tab"],children:[Object(o.jsx)("h3",{children:"today/thisweek"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"Event Info"}),Object(o.jsx)("li",{children:"Event Info"}),Object(o.jsx)("li",{children:"Event Info"})]})]})]})]})},F=n(15),D=n.n(F),J=function(e){return Object(o.jsxs)("div",{className:D.a.games,children:[Object(o.jsx)("button",{children:"GAME"}),Object(o.jsx)("button",{children:"GAME"}),Object(o.jsx)("button",{children:"GAME"}),Object(o.jsx)("button",{children:"GAME"}),Object(o.jsx)("button",{children:"GAME"}),Object(o.jsx)("button",{children:"GAME"}),Object(o.jsx)("button",{children:"GAME"}),Object(o.jsx)("button",{children:"GAME"}),Object(o.jsx)("button",{children:"GAME"})]})},X=function(e){return Object(o.jsx)(T.Provider,{value:{lists:[{listName:"Name 1",listItems:["test1","test1again"]},{listName:"Name 2",listItems:["test2","testing22"]}]},children:e.children})},Z=function(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),a=n[0],i=n[1];"home"!==a&&e.home&&i("home");return Object(o.jsxs)("div",{className:x.a.home,children:["home"===a&&Object(o.jsx)(f,{renderBudgetPal:function(){e.goAway(),i("budget")},renderTipCalc:function(){e.goAway(),i("tip")},renderListPal:function(){e.goAway(),i("list")},renderEventPal:function(){e.goAway(),i("event")},renderGames:function(){e.goAway(),i("game")}}),"budget"===a&&Object(o.jsx)(k,{}),"tip"===a&&Object(o.jsx)(P,{}),"list"===a&&Object(o.jsx)(X,{children:Object(o.jsx)(L,{})}),"event"===a&&Object(o.jsx)(H,{}),"game"===a&&Object(o.jsx)(J,{})]})};var q=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(!0),r=Object(l.a)(s,2),j=r[0],u=r[1];return Object(o.jsxs)(a.a.Fragment,{children:[n&&Object(o.jsx)(h,{goHome:function(){i(!1),u(!0)}}),Object(o.jsx)(b,{hamburgerClickHandler:function(){i(!n)},navColIsOpen:n}),Object(o.jsx)(Z,{home:j,goAway:function(){u(!1)}})]})},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(q,{})}),document.getElementById("root")),Q()}],[[22,1,2]]]);
//# sourceMappingURL=main.8c051eea.chunk.js.map