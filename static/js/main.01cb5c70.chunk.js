(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{33:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(34),s=n.n(r),i=n(21),o=n(9),u=n(23),l=n(6),j=n(7),b=n.n(j),d=n(12),p=n(25);n(41),n(51),n(52);p.a.initializeApp({apiKey:"AIzaSyAsE4D_-RNiepNFazeHa2tl91075VYvGRc",authDomain:"nwitter-5604a.firebaseapp.com",projectId:"nwitter-5604a",storageBucket:"nwitter-5604a.appspot.com",messagingSenderId:"160413899536",appId:"1:160413899536:web:55c1bd36785957f874e39"});var f=p.a,O=p.a.auth(),h=p.a.firestore(),x=p.a.storage(),m=n(1),v=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(o.a)(r,2),i=s[0],u=s[1],l=Object(a.useState)(!0),j=Object(o.a)(l,2),p=j[0],f=j[1],h=Object(a.useState)(""),x=Object(o.a)(h,2),v=x[0],g=x[1],w=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?c(a):"password"===n&&u(a)},y=function(){var e=Object(d.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!p){e.next=8;break}return e.next=5,O.createUserWithEmailAndPassword(n,i);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,O.signInWithEmailAndPassword(n,i);case 10:a=e.sent;case 11:console.log(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),g(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("form",{onSubmit:y,className:"container",children:[Object(m.jsx)("input",{name:"email",type:"email",placeholder:"Email",value:n,onChange:w,className:"authInput"}),Object(m.jsx)("input",{name:"password",type:"password",placeholder:"Password",value:i,onChange:w,className:"authInput"}),Object(m.jsx)("input",{type:"submit",value:p?"Create Account":"Log In",className:"authInput authSubmit"}),v&&Object(m.jsx)("span",{className:"authError",children:v})]}),Object(m.jsx)("span",{onClick:function(){return f((function(e){return!e}))},className:"authSwitch",children:p?"Create Account":"Sign In"})]})},g=n(13),w=n(24),y=function(){var e=function(){var e=Object(d.a)(b.a.mark((function e(t){var n,a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new f.auth.GoogleAuthProvider:"github"===n&&(a=new f.auth.GithubAuthProvider),e.next=4,O.signInWithPopup(a);case 4:c=e.sent,console.log(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"authContainer",children:[Object(m.jsx)(g.a,{icon:w.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(m.jsx)(v,{}),Object(m.jsxs)("div",{className:"authBtns",children:[Object(m.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(m.jsx)(g.a,{icon:w.b})]}),Object(m.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github ",Object(m.jsx)(g.a,{icon:w.a})]})]})]})},N=n(19),S=function(e){var t=e.nweetObj,n=e.isOwner,c=Object(a.useState)(!1),r=Object(o.a)(c,2),s=r[0],u=r[1],l=Object(a.useState)(t.text),j=Object(o.a)(l,2),p=j[0],f=j[1],O=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this nweet?")){e.next=6;break}return e.next=4,h.doc("nweets/".concat(t.id)).delete();case 4:return e.next=6,x.refFromURL(t.attachmentURL).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){u((function(e){return!e}))},w=function(){var e=Object(d.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,h.doc("nweets/".concat(t.id)).update(Object(i.a)(Object(i.a)({},t),{},{text:p}));case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"nweet",children:s?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("form",{onSubmit:w,className:"container nweetEdit",children:[Object(m.jsx)("input",{type:"text",onChange:function(e){var t=e.target.value;f(t)},value:p,placeholder:"Edit your Nweet",required:!0,autoFocus:!0,className:"formInput"}),Object(m.jsx)("input",{type:"submit",value:"Update Nweet",className:"formBtn"})]}),Object(m.jsx)("span",{onClick:v,className:"formBtn cancelBtn",children:"Cancel"})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(m.jsx)("img",{src:t.attachmentUrl}),n&&Object(m.jsxs)("div",{class:"nweet__actions",children:[Object(m.jsx)("span",{onClick:O,children:Object(m.jsx)(g.a,{icon:N.d})}),Object(m.jsx)("span",{onClick:v,children:Object(m.jsx)(g.a,{icon:N.a})})]})]})})},k=n(54),I=function(e){var t=e.userObj,n=Object(a.useState)(""),c=Object(o.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(""),u=Object(o.a)(i,2),l=u[0],j=u[1],p=function(){var e=Object(d.a)(b.a.mark((function e(n){var a,c,i,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r){e.next=2;break}return e.abrupt("return");case 2:if(a="",""===l){e.next=12;break}return n.preventDefault(),c=x.ref().child("".concat(t.uid,"/").concat(Object(k.a)())),e.next=8,c.putString(l,"data_url");case 8:return i=e.sent,e.next=11,i.ref.getDownloadURL();case 11:a=e.sent;case 12:return o={text:r,createdAt:Date.now(),creatorID:t.uid,attachmentURL:a},e.next=15,h.collection("nweets").add(o);case 15:s(""),j("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("form",{onSubmit:p,className:"factoryForm",children:[Object(m.jsxs)("div",{className:"factoryInput__container",children:[Object(m.jsx)("input",{className:"factoryInput__input",value:r,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(m.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(m.jsxs)("label",{for:"attach-file",className:"factoryInput__label",children:[Object(m.jsx)("span",{children:"Add photos"}),Object(m.jsx)(g.a,{icon:N.b})]}),Object(m.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.target.result;j(t)},n.readAsDataURL(t)},style:{opacity:0}}),l&&Object(m.jsxs)("div",{className:"factoryForm__attachment",children:[Object(m.jsx)("img",{src:l,style:{backgroundImage:l}}),Object(m.jsxs)("div",{className:"factoryForm__clear",onClick:function(){j(""),document.querySelector('input[type="file"]').value=""},children:[Object(m.jsx)("span",{children:"Remove"}),Object(m.jsx)(g.a,{icon:N.c})]})]})]})},C=function(e){var t=e.userObj,n=Object(a.useState)([]),c=Object(o.a)(n,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){h.collection("nweets").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(i.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(I,{userObj:t}),Object(m.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(m.jsx)(S,{nweetObj:e,isOwner:e.creatorID===t.uid},e.id)}))})]})},A=function(e){var t=e.userObj;return Object(m.jsx)("nav",{children:Object(m.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(m.jsx)("li",{children:Object(m.jsx)(u.b,{to:"/",style:{marginRight:10},children:Object(m.jsx)(g.a,{icon:w.c,color:"#04AAFF",size:"2x"})})}),Object(m.jsx)("li",{children:Object(m.jsxs)(u.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(m.jsx)(g.a,{icon:N.e,color:"#04AAFF",size:"2x"}),Object(m.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},F=function(e){var t=e.userObj,n=e.refreshUser,c=Object(l.f)(),r=Object(a.useState)(""),s=Object(o.a)(r,2),i=(s[0],s[1]),u=Object(a.useState)(t.DisplayName),j=Object(o.a)(u,2),p=j[0],f=j[1],x=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.signOut();case 2:c.push("/");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(d.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.collection("nweets").where("creatorID","==",t.uid).orderBy("createdAt","asc").get();case 2:n=e.sent,n.docs.map((function(e){return e.data()})),i();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){v()}),[]);var g=function(){var e=Object(d.a)(b.a.mark((function e(a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),t.DisplayName===p){e.next=4;break}return e.next=4,t.updateProfile({displayName:p});case 4:n();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("form",{onSubmit:g,className:"profileForm",children:[Object(m.jsx)("input",{onChange:function(e){var t=e.target.value;f(t)},type:"text",autoFocus:!0,placeholder:"Display name",value:p,className:"formInput"}),Object(m.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(m.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:x,children:"Log Out"})]})},D=function(e){var t=e.isLoggedIn,n=e.userObj,a=e.refreshUser;return console.log(t),Object(m.jsxs)(u.a,{children:[t&&Object(m.jsx)(A,{userObj:n}),Object(m.jsx)(l.c,{children:t?Object(m.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(m.jsx)(l.a,{exact:!0,path:"/",children:Object(m.jsx)(C,{userObj:n})}),Object(m.jsx)(l.a,{exact:!0,path:"/profile",children:Object(m.jsx)(F,{userObj:n,refreshUser:a})})]}):Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(l.a,{exact:!0,path:"/",children:Object(m.jsx)(y,{})})})})]})};n(33);var U=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),s=Object(o.a)(r,2),u=s[0],l=s[1];return Object(a.useEffect)((function(){O.onAuthStateChanged((function(e){l(e||null),c(!0)}))}),[]),Object(m.jsxs)(m.Fragment,{children:[n?Object(m.jsx)(D,{refreshUser:function(){console.log(O.currentUser.displayName),l(Object(i.a)({},O.currentUser))},isLoggedIn:Boolean(u),userObj:u}):"Initializing...",Object(m.jsxs)("footer",{children:["\xa9 Nwitter",(new Date).getFullYear()]})]})};s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(U,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.01cb5c70.chunk.js.map