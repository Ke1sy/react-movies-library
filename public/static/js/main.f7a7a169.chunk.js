(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{122:function(e,a,t){e.exports=t(135)},127:function(e,a,t){},135:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),c=t.n(l),i=(t(127),t(165)),o=t(167),m=t(51),u=t(163),d=Object(u.a)({title:{flexGrow:1}}),s=function(e){var a=d();return r.a.createElement(i.a,{position:"static"},r.a.createElement(o.a,null,r.a.createElement(m.a,{variant:"h6",className:a.title},"Header")))},p=t(168),b=Object(u.a)((function(e){return{footer:{backgroundColor:e.palette.primary.main,color:e.typography.color}}})),f=function(){var e=b();return r.a.createElement("footer",{className:e.footer},r.a.createElement(p.a,{maxWidth:!1},r.a.createElement(m.a,{variant:"h6"},"Footer")))},g=Object(u.a)({root:{flexGrow:1,backgroundColor:"#212121"}}),v=function(e){var a=g();return r.a.createElement(p.a,{maxWidth:!1,className:a.root},e.children)},E=t(188),h=t(107),O=t(81),j=t(80),C=Object(h.a)({typography:{useNextVariants:!0,color:"#fff"},palette:{type:"dark",primary:{main:"#e52e33"},secondary:O.a,error:j.a,contrastThreshold:3,tonalOffset:.2,contrastText:"#fff"}}),D=t(16),y=t(138),N=t(191),$=t(187),w=t(109),x=t(189),k=function(e){var a=e.children,t=e.value,n=e.index,l=Object(w.a)(e,["children","value","index"]);return r.a.createElement(y.a,Object.assign({component:"div",role:"tabpanel",hidden:t!==n,id:"scrollable-force-tabpanel-".concat(n),"aria-labelledby":"scrollable-force-tab-".concat(n)},l),t===n&&r.a.createElement(x.a,{p:1},a))},S=t(172),I=t(173),M=t(174),U=t(175),W=t(176),T=t(177),A=t(193),q=t(169),Q=t(108),B=t(171),z=t(97),F=t.n(z),L=t(74),R=t.n(L),G=t(98),P=t.n(G),J=Object(u.a)({menuItemText:{paddingLeft:10}}),H=function(e){var a=e.onEdit,t=e.onDelete,l=e.data,c=J(),i=Object(n.useState)(null),o=Object(D.a)(i,2),u=o[0],d=o[1];return r.a.createElement("div",null,r.a.createElement(q.a,{"aria-label":"more","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){var a=e.currentTarget;d(a)}},r.a.createElement(F.a,null)),r.a.createElement(Q.a,{id:"simple-menu",anchorEl:u,keepMounted:!0,open:Boolean(u),onClose:function(){d(null)}},r.a.createElement(B.a,{onClick:function(){return a(l)}},r.a.createElement(P.a,{fontSize:"small"}),r.a.createElement(m.a,{variant:"body2",className:c.menuItemText},"Edit")),r.a.createElement(B.a,{onClick:function(){return t(l)}},r.a.createElement(R.a,{fontSize:"small"}),r.a.createElement(m.a,{variant:"body2",className:c.menuItemText},"Delete"))))},V=Object(u.a)({table:{minWidth:650},tableCell:{padding:5}}),X=function(e){var a=e.movies,t=e.openCreateUpdateDialog,n=e.openDeleteDialog,l=V(),c=function(e){t(!0,e)},i=function(e){n(!0,e)};return r.a.createElement(S.a,{component:"div"},r.a.createElement(I.a,{className:l.table,"aria-label":"caption table"},r.a.createElement(M.a,null,r.a.createElement(U.a,null,r.a.createElement(W.a,null,"Name"),r.a.createElement(W.a,{align:"center"},"Genre"),r.a.createElement(W.a,{align:"center"},"Rate"),r.a.createElement(W.a,{align:"center"},"Director"),r.a.createElement(W.a,{align:"center"},"Watched"),r.a.createElement(W.a,{align:"right"}," "))),r.a.createElement(T.a,null,a.map((function(e){var a=e.id,t=e.name,n=e.genre,o=e.rate,m=e.director,u=e.watched;return r.a.createElement(U.a,{key:a},r.a.createElement(W.a,{className:l.tableCell,component:"th",scope:"row"},t),r.a.createElement(W.a,{className:l.tableCell,align:"center"},n),r.a.createElement(W.a,{className:l.tableCell,align:"center"},o),r.a.createElement(W.a,{className:l.tableCell,align:"center"},m?m.name:null),r.a.createElement(W.a,{className:l.tableCell,align:"center"},r.a.createElement(A.a,{checked:u,disabled:!0,color:"primary",inputProps:{"aria-label":"primary checkbox"}})),r.a.createElement(W.a,{className:l.tableCell,align:"right"},r.a.createElement(H,{data:{id:a,name:t,genre:n,rate:o,director:m,watched:u},onEdit:c,onDelete:i})))})))))},K=t(178),Y=t(99),Z=t.n(Y),_=Object(u.a)((function(e){return{addIcon:{marginRight:e.spacing(1),position:"fixed",bottom:e.spacing(3),right:e.spacing(2)}}})),ee=function(e){var a=e.onClick,t=_();return r.a.createElement(K.a,{color:"primary","aria-label":"add",className:t.addIcon,onClick:a},r.a.createElement(Z.a,null))},ae=t(53),te=t(64),ne=t(195),re=t(179),le=t(180),ce=t(181),ie=t(190),oe=t(182),me=t(183),ue=t(184),de=Object(u.a)((function(e){return{dialog:{paddingBottom:e.spacing(2)},title:{textAlign:"center"},formControl:{marginTop:e.spacing(3),width:"100%"},contentText:{marginBottom:0,textAlign:"center"},content:{overflowX:"hidden"}}})),se=t(54),pe=t.n(se),be=t(77),fe=t.n(be),ge=function(e){var a=e.createUpdateMovie,t=e.isOpen,l=e.movie,c=e.directors,i=e.openCreateUpdateDialog,o=de(),m=Object(n.useState)("add"),u=Object(D.a)(m,2),d=u[0],s=u[1],p=Object(n.useState)({id:null,name:"",genre:"",rate:0,director:"",watched:!1}),b=Object(D.a)(p,2),f=b[0],g=b[1];Object(n.useEffect)((function(){if(l){s("edit");var e=l.id,a=l.name,t=l.genre,n=l.rate,r=l.watched,c=l.director;g({id:e,name:a,genre:t,rate:n,director:c?c.name:"",watched:r})}else s("add"),h()}),[l]);var v=function(e){return function(a){var t=a.target,n=t.type,r=t.value;g(Object(te.a)({},f,Object(ae.a)({},e,"checkbox"===n?t.checked:r)))}},E=function(){i(!1),h()},h=function(){g({id:null,name:"",genre:"",rate:"",director:"",watched:!1})},O=f.name,j=f.genre,C=f.rate,y=f.director,N=f.watched;return r.a.createElement(ne.a,{maxWidth:"sm",fullWidth:!0,open:t,onClose:E,className:o.paper,"aria-labelledby":"form-dialog-title"},r.a.createElement(re.a,{id:"form-dialog-title",className:o.title},"add"===d?"Create New Movie":"Update Movie"),r.a.createElement(le.a,{className:o.content},r.a.createElement(ce.a,{className:o.formControl},r.a.createElement(ie.a,{autoFocus:!0,id:"movieName",label:"Name",type:"text",fullWidth:!0,variant:"outlined",value:O,required:!0,onChange:v("name")})),r.a.createElement(ce.a,{className:o.formControl},r.a.createElement(ie.a,{id:"movieGenre",label:"Genre",type:"text",fullWidth:!0,variant:"outlined",value:j,required:!0,onChange:v("genre")})),r.a.createElement(ce.a,{className:o.formControl},r.a.createElement(ie.a,{id:"movieRate",label:"Rate",type:"number",fullWidth:!0,variant:"outlined",value:C,inputProps:{min:"1",max:"10"},onChange:v("rate")})),r.a.createElement(ce.a,{className:o.formControl},r.a.createElement(ie.a,{id:"movieDirector",select:!0,fullWidth:!0,label:"Director",value:y,variant:"outlined",onChange:v("director")},c.map((function(e){return r.a.createElement(B.a,{key:e.id,value:e.name},e.name)})))),r.a.createElement(oe.a,{className:o.formControl,control:r.a.createElement(A.a,{checked:N,onChange:v("watched"),value:"watched"}),label:"Watched movie"})),r.a.createElement(me.a,null,r.a.createElement(ue.a,{onClick:E,color:"primary"},r.a.createElement(pe.a,{fontSize:"small"}),"Cancel"),r.a.createElement(ue.a,{onClick:function(){var e=f.id,t=f.name,n=f.genre,r=f.rate,l=f.director,i=f.watched,o=l?c.find((function(e){return e.name===l})).id:null;a({id:e,name:t,genre:n,rate:Number(r),directorId:o,watched:i},d),E()},color:"primary"},r.a.createElement(fe.a,{fontSize:"small"}),"add"===d?"Create":"Update")))},ve=t(185),Ee=function(e){var a=e.isOpen,t=e.setIsOpen,n=e.deleteAction,l=e.itemToDelete,c=function(){t(!1)};return r.a.createElement("div",null,r.a.createElement(ne.a,{open:a,onClose:c,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(re.a,{id:"alert-dialog-title"},"Are you sure you want to delete element?"),r.a.createElement(le.a,null,r.a.createElement(ve.a,{id:"alert-dialog-description"},"If you  click 'CONFIRM' the element will be removed from database.")),r.a.createElement(me.a,null,r.a.createElement(ue.a,{onClick:c,color:"primary"},r.a.createElement(pe.a,{fontSize:"small"}),"Cancel"),r.a.createElement(ue.a,{onClick:function(){n(l.id)},color:"primary",autoFocus:!0},r.a.createElement(R.a,{fontSize:"small"}),"Confirm"))))},he=t(196),Oe=t(100),je=t.n(Oe),Ce=Object(u.a)((function(e){return{root:{margin:"15px 0",padding:"2px 4px",display:"flex",alignItems:"center",width:"100%",backgroundColor:"rgba(255, 255, 255, 0.7)"},input:{marginLeft:e.spacing(1),flex:1,color:e.palette.primary.main},iconButton:{padding:10,color:e.palette.primary.main}}})),De=function(e){var a=e.searchAction,t=e.placeholder,l=e.ariaLabel,c=e.liveSearch,i=Ce(),o=Object(n.useState)(""),m=Object(D.a)(o,2),u=m[0],d=m[1],s=Object(n.useState)(null),p=Object(D.a)(s,2),b=p[0],f=p[1],g=c?function(e){var t=e.target.value;b&&clearTimeout(b),d(t),f(setTimeout((function(){a(t)}),300))}:function(e){var a=e.target.value;d(a)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{component:"form",className:i.root,onSubmit:function(e){e.preventDefault(),a(u)}},r.a.createElement(q.a,{type:"submit",className:i.iconButton,"aria-label":"search"},r.a.createElement(je.a,null)),r.a.createElement(he.a,{onChange:g,className:i.input,placeholder:t,value:u,inputProps:{"aria-label":l}})))},ye=function(e){var a=e.movies,t=e.directors,n=e.createUpdateMovie,l=e.dialogIsOpen,c=e.selectedMovie,i=e.openCreateUpdateDialog,o=e.deleteDialogIsOpen,m=e.openDeleteDialog,u=e.deleteMovie,d=e.searchAction;return r.a.createElement(r.a.Fragment,null,r.a.createElement(De,{searchAction:d,liveSearch:!0,placeholder:"Search Movie",ariaLabel:"Search Movie"}),r.a.createElement(ge,{createUpdateMovie:n,isOpen:l,movie:c,directors:t,openCreateUpdateDialog:i}),r.a.createElement(Ee,{isOpen:o,setIsOpen:m,deleteAction:u,itemToDelete:c}),r.a.createElement(X,{movies:a,openCreateUpdateDialog:i,openDeleteDialog:m}),r.a.createElement(ee,{onClick:function(){return i(!0)}}))},Ne=t(60),$e=t(194),we=t(26),xe=t(21);function ke(){var e=Object(we.a)(["\n    query directorsQuery($name: String) {\n        directors(name: $name) {\n            id,\n            name\n        }\n     }\n"]);return ke=function(){return e},e}function Se(){var e=Object(we.a)(["\n    query moviesPageQuery($name: String, $directorsName: String) {\n        movies(name: $name) {\n            id,\n            name,\n            genre,\n            director {\n                name\n            },\n            rate,\n            watched\n         },\n        directors(name: $directorsName) {\n            id,\n            name\n         }\n     }\n"]);return Se=function(){return e},e}var Ie=Object(xe.b)(Se());Object(xe.b)(ke());function Me(){var e=Object(we.a)(["\n    mutation deleteMovie($id: ID) {\n         deleteMovie(id: $id) {\n            name\n         }\n     }\n"]);return Me=function(){return e},e}function Ue(){var e=Object(we.a)(["\n    mutation updateMovie($id: ID, $name: String!, $genre: String!, $directorId: ID, $rate: Int!, $watched: Boolean!) {\n         updateMovie(id: $id, name: $name, genre: $genre, rate: $rate, watched: $watched, directorId: $directorId ) {\n            name\n         }\n     }\n"]);return Ue=function(){return e},e}function We(){var e=Object(we.a)(["\n    mutation addMovie($name: String!, $genre: String!, $directorId: ID,  $rate: Int!, $watched: Boolean!) {\n         addMovie(name: $name, genre: $genre, rate: $rate, watched: $watched, directorId: $directorId) {\n            name\n         }\n     }\n"]);return We=function(){return e},e}var Te=Object(xe.b)(We()),Ae=Object(xe.b)(Ue()),qe=Object(xe.b)(Me()),Qe=Object($e.a)(Ie,{options:function(e){var a=e.name,t=void 0===a?"":a,n=e.directorsName;return{variables:{name:t,directorsName:void 0===n?"":n}}}}),Be=Object(Ne.a)(Object($e.a)(Te,{props:function(e){var a=e.mutate;return{addMovie:function(e){return a({variables:e,refetchQueries:[{query:Ie,variables:{name:"",directorsName:""}}]})}}}}),Object($e.a)(Ae,{props:function(e){var a=e.mutate;return{updateMovie:function(e){return a({variables:e,refetchQueries:[{query:Ie,variables:{name:"",directorsName:""}}]})}}}}),Object($e.a)(qe,{props:function(e){var a=e.mutate;return{deleteMovie:function(e){return a({variables:e,refetchQueries:[{query:Ie,variables:{name:"",directorsName:""}}]})}}}})),ze=Object(Ne.a)(Qe,Be)((function(e){var a=e.data,t=e.addMovie,l=e.deleteMovie,c=e.updateMovie,i=a.movies,o=void 0===i?[]:i,m=a.directors,u=void 0===m?[]:m,d=Object(n.useState)(!1),s=Object(D.a)(d,2),p=s[0],b=s[1],f=Object(n.useState)(!1),g=Object(D.a)(f,2),v=g[0],E=g[1],h=Object(n.useState)(null),O=Object(D.a)(h,2),j=O[0],C=O[1];return r.a.createElement(ye,{movies:o,directors:u,createUpdateMovie:function(e,a){switch(a){case"add":t(e);break;case"edit":c(e);break;default:return!1}},dialogIsOpen:p,selectedMovie:j,openCreateUpdateDialog:function(e,a){C(a||null),b(e)},deleteDialogIsOpen:v,openDeleteDialog:function(e,a){C(a||null),E(e)},deleteMovie:function(e){l({id:e}),E(!1),C(null)},searchAction:function(e){a.fetchMore({variables:{name:e},updateQuery:function(e,a){return a.fetchMoreResult}})}})})),Fe=function(e){var a=e.createUpdateDirector,t=e.isOpen,l=e.director,c=e.openCreateUpdateDialog,i=de(),o=Object(n.useState)("add"),m=Object(D.a)(o,2),u=m[0],d=m[1],s=Object(n.useState)({id:null,name:"",age:0}),p=Object(D.a)(s,2),b=p[0],f=p[1];Object(n.useEffect)((function(){if(l){d("edit");var e=l.name,a=l.age,t=l.id;f({name:e,age:a,id:t})}else d("add"),E()}),[l]);var g=function(e){return function(a){var t=a.target.value;f(Object(te.a)({},b,Object(ae.a)({},e,t)))}},v=function(){c(!1),E()},E=function(){f({id:null,name:"",age:0})},h=b.name,O=b.age;return r.a.createElement(ne.a,{maxWidth:"xs",fullWidth:!0,open:t,onClose:v,className:i.paper,"aria-labelledby":"form-dialog-title"},r.a.createElement(re.a,{id:"form-dialog-title",className:i.title},"add"===u?"Create New Director":"Update Director"),r.a.createElement(le.a,{className:i.content},r.a.createElement(ce.a,{className:i.formControl},r.a.createElement(ie.a,{autoFocus:!0,id:"directorName",label:"Name",type:"text",fullWidth:!0,variant:"outlined",value:h,required:!0,onChange:g("name")})),r.a.createElement(ce.a,{className:i.formControl},r.a.createElement(ie.a,{id:"directorAge",label:"Age",fullWidth:!0,variant:"outlined",value:O,type:"number",required:!0,onChange:g("age")}))),r.a.createElement(me.a,null,r.a.createElement(ue.a,{onClick:v,color:"primary"},r.a.createElement(pe.a,{fontSize:"small"}),"Cancel"),r.a.createElement(ue.a,{onClick:function(){a(Object(te.a)({},b,{age:Number(O)}),u),v()},color:"primary"},r.a.createElement(fe.a,{fontSize:"small"}),"add"===u?"Create":"Update")))},Le=t(170),Re=t(139),Ge=t(186),Pe=Object(u.a)({table:{minWidth:650},tableCell:{padding:5},textCenter:{textAlign:"center"}}),Je=function(e){var a=e.directors,t=e.openCreateUpdateDialog,n=e.openDeleteDialog,l=Pe(),c=function(e){t(!0,e)},i=function(e){n(!0,e)};return r.a.createElement(S.a,{component:"div"},r.a.createElement(I.a,{className:l.table,"aria-label":"caption table"},r.a.createElement(M.a,null,r.a.createElement(U.a,null,r.a.createElement(W.a,null,"Name"),r.a.createElement(W.a,{align:"center"},"Age"),r.a.createElement(W.a,{align:"center"},"Movies"),r.a.createElement(W.a,{align:"right"}," "))),r.a.createElement(T.a,null,a.map((function(e){var a=e.id,t=e.name,n=e.age,o=e.movies;return r.a.createElement(U.a,{key:a},r.a.createElement(W.a,{className:l.tableCell,component:"th",scope:"row"},t),r.a.createElement(W.a,{className:l.tableCell,align:"center"},n),r.a.createElement(W.a,{className:l.tableCell,align:"left"},r.a.createElement(Le.a,null,o.map((function(e,a){return r.a.createElement(Re.a,{key:e.id,className:l.textCenter},r.a.createElement(Ge.a,{primary:a+1+". "+e.name}))})))),r.a.createElement(W.a,{className:l.tableCell,align:"right"},r.a.createElement(H,{data:{id:a,name:t,age:n},onEdit:c,onDelete:i})))})))))},He=function(e){var a=e.createUpdateDirector,t=e.dialogIsOpen,n=e.selectedDirector,l=e.directors,c=e.openCreateUpdateDialog,i=e.openDeleteDialog,o=e.deleteDialogIsOpen,m=e.deleteDirector,u=e.searchAction;return r.a.createElement(r.a.Fragment,null,r.a.createElement(De,{searchAction:u,liveSearch:!0,placeholder:"Search Director",ariaLabel:"Search Director"}),r.a.createElement(Fe,{createUpdateDirector:a,isOpen:t,director:n,openCreateUpdateDialog:c}),r.a.createElement(Ee,{isOpen:o,setIsOpen:i,deleteAction:m,itemToDelete:n}),r.a.createElement(Je,{directors:l,openCreateUpdateDialog:c,openDeleteDialog:i}),r.a.createElement(ee,{onClick:function(){return c(!0)}}))};function Ve(){var e=Object(we.a)(["\n    query directorsQuery($name: String) {\n         directors(name: $name) {\n            id,\n            name,\n            age,\n            movies {\n                id,\n                name\n            }\n         }\n     }\n"]);return Ve=function(){return e},e}var Xe=Object(xe.b)(Ve());function Ke(){var e=Object(we.a)(["\n    mutation deleteDirector($id: ID) {\n         deleteDirector(id: $id) {\n            name\n         }\n     }\n"]);return Ke=function(){return e},e}function Ye(){var e=Object(we.a)(["\n   mutation updateDirector($id: ID, $name: String!, $age: Int!) {\n        updateDirector(id: $id, name: $name, age: $age) {\n            name\n            age\n        }\n    }\n"]);return Ye=function(){return e},e}function Ze(){var e=Object(we.a)(["\n    mutation addDirector($name: String!, $age: Int!) {\n         addDirector(name: $name, age: $age) {\n            name\n         }\n     }\n"]);return Ze=function(){return e},e}var _e=Object(xe.b)(Ze()),ea=Object(xe.b)(Ye()),aa=Object(xe.b)(Ke()),ta=Object($e.a)(Xe,{options:function(e){var a=e.name;return{variables:{name:void 0===a?"":a}}}}),na=Object(Ne.a)(Object($e.a)(_e,{props:function(e){var a=e.mutate;return{addDirector:function(e){return a({variables:e,refetchQueries:[{query:Xe,variables:{name:""}}]})}}}}),Object($e.a)(ea,{props:function(e){var a=e.mutate;return{updateDirector:function(e){return a({variables:e,refetchQueries:[{query:Xe,variables:{name:""}}]})}}}}),Object($e.a)(aa,{props:function(e){var a=e.mutate;return{deleteDirector:function(e){return a({variables:e,refetchQueries:[{query:Xe,variables:{name:""}}]})}}}})),ra=Object(Ne.a)(ta,na)((function(e){var a=e.data,t=e.addDirector,l=e.deleteDirector,c=e.updateDirector,i=a.directors,o=void 0===i?[]:i,m=Object(n.useState)(!1),u=Object(D.a)(m,2),d=u[0],s=u[1],p=Object(n.useState)(!1),b=Object(D.a)(p,2),f=b[0],g=b[1],v=Object(n.useState)(null),E=Object(D.a)(v,2),h=E[0],O=E[1];return r.a.createElement(He,{directors:o,createUpdateDirector:function(e,a){switch(a){case"add":t(e);break;case"edit":c(e);break;default:return!1}},dialogIsOpen:d,deleteDialogIsOpen:f,selectedDirector:h,openCreateUpdateDialog:function(e,a){O(a||null),s(e)},openDeleteDialog:function(e,a){O(a),g(e)},deleteDirector:function(e){l({id:e}),g(!1),O(null)},searchAction:function(e){a.fetchMore({variables:{name:e},updateQuery:function(e,a){return a.fetchMoreResult}})}})})),la=Object(u.a)((function(e){return{paper:{backgroundColor:e.palette.background.paper,marginBottom:e.spacing(2),marginTop:e.spacing(2)},tab:{"&.Mui-selected":{color:e.palette.text.secondary}}}})),ca=function(e){var a=e.tabsList,t=e.selectedTab,n=e.onChangeTab,l=la(),c=t?a.findIndex((function(e){return e===t}))+1:0;return r.a.createElement("div",null,r.a.createElement(y.a,{className:l.paper},r.a.createElement(N.a,{value:c,onChange:function(e,t){n(a[t-1])},indicatorColor:"primary",textColor:"primary",variant:"fullWidth"},a.map((function(e){var a=e.title,t=e.id,n=e.icon;return r.a.createElement($.a,{label:a,icon:n,key:t,className:l.tab})}))),r.a.createElement(k,{value:c,index:0},r.a.createElement(ze,null)),r.a.createElement(k,{value:c,index:1},r.a.createElement(ra,null))))},ia=t(105),oa=t.n(ia),ma=t(106),ua=t.n(ma),da=[{id:1,title:"Movies",icon:r.a.createElement(oa.a,null)},{id:2,title:"Directors",icon:r.a.createElement(ua.a,null)}],sa=function(){var e=Object(n.useState)(null),a=Object(D.a)(e,2),t=a[0],l=a[1];return r.a.createElement(ca,{tabsList:da,selectedTab:t,onChangeTab:function(e){l(e)}})},pa=t(11),ba=new xe.a({uri:"/graphql"}),fa=Object(u.a)((function(e){return{wrapper:{height:"100%",display:"flex",flexDirection:"column",backgroundColor:e.palette.background.paper}}})),ga=function(){var e=fa();return r.a.createElement(pa.b,{client:ba},r.a.createElement(E.a,{theme:C},r.a.createElement(p.a,{maxWidth:"xl",disableGutters:!0,className:e.wrapper},r.a.createElement(s,null),r.a.createElement(v,null,r.a.createElement(sa,null)),r.a.createElement(f,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ga,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[122,1,2]]]);
//# sourceMappingURL=main.f7a7a169.chunk.js.map