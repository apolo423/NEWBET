(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1278:function(e,t,n){"use strict";var r=n(25),a="[COURSES APP] GET COURSES",o="[COURSES APP] SET COURSES SEARCH TEXT";function s(){var e=r.b.get("/courses/get",{params:{mode:"all"}});return function(t){return e.then(function(e){return t({type:a,payload:e.data.doc})})}}function c(e){return{type:o,searchText:e.target.value}}var u=n(13),i=(n(20),n(37)),l=n(77),d="[COURSES APP] GET COURSE",p="[COURSES APP] SAVE COURSE",f="[COURSES APP] OPEN NEW CONTENT DIALOG",m="[COURSES APP] CLOSE NEW CONTENT DIALOG",h="[COURSES APP] OPEN EDIT CONTENT DIALOG",E="[COURSES APP] CLOSE EDIT CONTENT DIALOG",O="[COURSES APP] SAVE CONTENT",b="[COURSES APP] REMOVE CONTENT";function y(e){var t=r.b.get("/courses/contents",{params:e});return function(n){return t.then(function(t){t.data.success||(n(i.j({message:"Get Course Failed"})),l.a.push({pathname:"/manage/courses"})),n({type:d,payload:t.data.data,params:e})})}}function g(e){var t=r.b.post("/courses/contents/save",e);return function(e){return t.then(function(t){return e(i.j({message:"Course Saved"})),e({type:p,payload:t.data,params:{courseId:t.data._id}})})}}function S(e){var t=r.b.post("/courses/setimage",e);return function(n){return t.then(function(t){return n(y({courseId:e.courseId}))})}}function T(){return{type:d,payload:{_id:"",name:"New Course",description:"",slug:"new-course",coverimage:"",contents:[],quizs:[]}}}function v(){return{type:f}}function C(){return{type:m}}function N(e){return{type:h,data:e}}function j(){return{type:E}}function P(e){return function(t,n){var a=n().coursesApp.contents;r.b.post("/courses/contents/add",Object(u.a)({},e,{courseId:a.data._id})).then(function(e){t(i.j({message:"Content Saved"})),Promise.all([t({type:O}),t({type:"new"===a.contentDialog.type?m:E})]).then(function(){return t(y(a.params))})})}}function w(e){return function(t,n){var a=n().coursesApp.contents;r.b.post("/courses/contents/remove",Object(u.a)({},e,{courseId:a.data._id})).then(function(e){t(i.j({message:"Content Removed"})),Promise.all([t({type:b}),t({type:"new"===a.contentDialog.type?m:E})]).then(function(){return t(y(a.params))})})}}n.d(t,"d",function(){return a}),n.d(t,"h",function(){return o}),n.d(t,"l",function(){return s}),n.d(t,"s",function(){return c}),n.d(t,"c",function(){return d}),n.d(t,"g",function(){return p}),n.d(t,"f",function(){return f}),n.d(t,"b",function(){return m}),n.d(t,"e",function(){return h}),n.d(t,"a",function(){return E}),n.d(t,"k",function(){return y}),n.d(t,"r",function(){return g}),n.d(t,"t",function(){return S}),n.d(t,"m",function(){return T}),n.d(t,"o",function(){return v}),n.d(t,"j",function(){return C}),n.d(t,"n",function(){return N}),n.d(t,"i",function(){return j}),n.d(t,"q",function(){return P}),n.d(t,"p",function(){return w})},1324:function(e,t,n){"use strict";var r=n(15),a=n(13),o=n(1278),s={entities:[],searchText:""},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.d:return Object(a.a)({},e,{entities:t.payload});case o.h:return Object(a.a)({},e,{searchText:t.searchText});default:return e}},u={data:null,params:{},contentDialog:{type:"new",props:{open:!1},data:null}},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.c:case o.g:return Object(a.a)({},e,{data:t.payload,params:t.params});case o.f:return Object(a.a)({},e,{contentDialog:{type:"new",props:{open:!0},data:null}});case o.b:return Object(a.a)({},e,{contentDialog:{type:"new",props:{open:!1},data:null}});case o.e:return Object(a.a)({},e,{contentDialog:{type:"edit",props:{open:!0},data:t.data}});case o.a:return Object(a.a)({},e,{contentDialog:{type:"edit",props:{open:!1},data:null}});default:return e}},l=Object(r.d)({courses:c,contents:i});t.a=l},1517:function(e,t,n){"use strict";n.r(t);var r=n(6),a=n(7),o=n(9),s=n(8),c=n(10),u=n(0),i=n.n(u),l=n(35),d=n(1),p=n(20),f=n(15),m=n(16),h=n(168),E=n(19),O=n(561),b=(n(17),n(1278)),y=n(1324),g=n(251),S=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,c=new Array(a),u=0;u<a;u++)c[u]=arguments[u];return(n=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).getFilteredArray=function(e,t){var n=Object.keys(e).map(function(t){return e[t]});return 0===t.length?n:p.s.filterArrayByString(n,t)},n}return Object(c.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){this.props.getCourses()}},{key:"render",value:function(){var e=this,t=this.props,n=t.classes,r=t.courses,a=this.getFilteredArray(r,this.props.searchText);return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.m,{classes:{contentCardWrapper:"sm:p-24 pb-80",leftSidebar:"w-256 border-0",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:i.a.createElement("div",{className:"flex flex-1 items-center justify-between p-8 sm:p-24"},i.a.createElement("div",{className:"flex flex-1 items-center justify-center pr-8 sm:px-12"},i.a.createElement(l.MuiThemeProvider,{theme:this.props.mainTheme},i.a.createElement(p.a,{animation:"transition.slideLeftIn",delay:300},i.a.createElement(d.Q,{className:"flex p-4 items-center w-full max-w-512 px-8 py-4",elevation:1},i.a.createElement(d.B,{className:"mr-8",color:"action"},"search"),i.a.createElement(d.D,{placeholder:"Search for anything",className:"flex flex-1",disableUnderline:!0,fullWidth:!0,value:this.props.searchText,inputProps:{"aria-label":"Search"},onChange:this.props.setSearchText})))))),content:i.a.createElement(p.a,{animation:"transition.slideUpIn",delay:300},i.a.createElement(g.b,{className:"-striped -highlight border-0",getTrProps:function(t,n,r){return{className:"cursor-pointer",onClick:function(t,r){n&&e.props.history.push({pathname:"/manage/courses/"+n.original._id})}}},data:a,columns:[{Header:"Name",accessor:"name",filterable:!0,className:"font-bold",width:160},{Header:"Description",accessor:"description",filterable:!0,className:"font-bold",width:300}],defaultPageSize:10,noDataText:"No courses found"})),innerScroll:!0}),i.a.createElement(p.a,{animation:"transition.expandIn",delay:300},i.a.createElement(d.r,{color:"primary","aria-label":"add",className:n.addButton,component:m.a,to:"/manage/courses/new"},i.a.createElement(d.B,null,"add"))))}}]),t}(u.Component);t.default=Object(O.a)("coursesApp",y.a)(Object(l.withStyles)(function(e){return{addButton:{position:"absolute",right:12,bottom:12,zIndex:99}}},{withTheme:!0})(Object(h.g)(Object(E.b)(function(e){var t=e.coursesApp,n=e.fuse;return{searchText:t.courses.searchText,courses:t.courses.entities,mainTheme:n.settings.mainTheme}},function(e){return Object(f.c)({setSearchText:b.s,getCourses:b.l},e)})(S))))}}]);