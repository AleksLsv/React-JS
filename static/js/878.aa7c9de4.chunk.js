"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[878],{7878:function(n,e,r){r.r(e),r.d(e,{default:function(){return F}});var s=r(5671),o=r(3144),t=r(136),i=r(516),l=r(2791),a=r(8687),u=r(2938),c=r(5987),g=r(9439),p="Paginator_paginator__g2UYa",f="Paginator_pageNumber__pnpfQ",d="Paginator_selectedPage__GE7aC",h=r(184),P=function(n){for(var e=n.totalItemsCount,r=n.pageSize,s=n.currentPage,o=n.onPageChanged,t=n.portionSize,i=void 0===t?10:t,a=Math.ceil(e/r),u=[],c=1;c<=a;c++)u.push(c);var P=Math.ceil(a/i),j=(0,l.useState)(Math.ceil(s/i)),v=(0,g.Z)(j,2),w=v[0],x=v[1],C=(w-1)*i+1,m=w*i;return(0,h.jsxs)("div",{className:p,children:[w>1&&(0,h.jsx)("button",{onClick:function(){x(w-1)},children:" PREV "}),u.filter((function(n){return n>=C&&n<=m})).map((function(n){return(0,h.jsx)("span",{className:(s===n?d:"")+" "+f,onClick:function(e){o(n)},children:n},n)})),P>w&&(0,h.jsx)("button",{onClick:function(){x(w+1)},children:" NEXT "})]})},j="Users_userPhoto__z18vP",v=r(8478),w=r(1087),x=function(n){var e=n.user,r=n.followingInProgress,s=n.unfollow,o=n.follow;return(0,h.jsxs)("div",{children:[(0,h.jsxs)("span",{children:[(0,h.jsx)("div",{children:(0,h.jsx)(w.OL,{to:"/profile/"+e.id,children:(0,h.jsx)("img",{src:null!=e.photos.small?e.photos.small:v,className:j,alt:"avatar"})})}),(0,h.jsx)("div",{children:e.followed?(0,h.jsx)("button",{disabled:r.some((function(n){return n===e.id})),onClick:function(){s(e.id)},children:" Unfollow "}):(0,h.jsx)("button",{disabled:r.some((function(n){return n===e.id})),onClick:function(){o(e.id)},children:" Follow "})})]}),(0,h.jsxs)("span",{children:[(0,h.jsxs)("span",{children:[(0,h.jsx)("div",{children:e.name}),(0,h.jsxs)("div",{children:[e.status," "]})]}),(0,h.jsxs)("span",{children:[(0,h.jsx)("div",{children:"user.location.country"}),(0,h.jsx)("div",{children:"user.location.city"})]})]})]})},C=["totalUsersCount","pageSize","currentPage","onPageChanged","users"],m=function(n){var e=n.totalUsersCount,r=n.pageSize,s=n.currentPage,o=n.onPageChanged,t=n.users,i=(0,c.Z)(n,C);return(0,h.jsxs)("div",{children:[(0,h.jsx)(P,{currentPage:s,onPageChanged:o,totalItemsCount:e,pageSize:r}),(0,h.jsx)("div",{children:t.map((function(n){return(0,h.jsx)(x,{user:n,followingInProgress:i.followingInProgress,unfollow:i.unfollow,follow:i.follow},n.id)}))})]})},_=r(1539),z=r(7781),S=function(n){return n.usersPage.users},U=function(n){return n.usersPage.pageSize},k=function(n){return n.usersPage.totalUsersCount},b=function(n){return n.usersPage.currentPage},I=function(n){return n.usersPage.isFetching},Z=function(n){return n.usersPage.followingInProgress},y=function(n){(0,t.Z)(r,n);var e=(0,i.Z)(r);function r(){var n;(0,s.Z)(this,r);for(var o=arguments.length,t=new Array(o),i=0;i<o;i++)t[i]=arguments[i];return(n=e.call.apply(e,[this].concat(t))).onPageChanged=function(e){var r=n.props.pageSize;n.props.getUsers(e,r)},n}return(0,o.Z)(r,[{key:"componentDidMount",value:function(){var n=this.props,e=n.currentPage,r=n.pageSize;this.props.getUsers(e,r)}},{key:"render",value:function(){return(0,h.jsxs)(h.Fragment,{children:[this.props.isFetching?(0,h.jsx)(_.Z,{}):null,(0,h.jsx)(m,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),r}(l.Component),F=(0,z.qC)((0,a.$j)((function(n){return{users:S(n),pageSize:U(n),totalUsersCount:k(n),currentPage:b(n),isFetching:I(n),followingInProgress:Z(n)}}),{follow:u.ZN,unfollow:u.fv,setCurrentPage:u.D4,toggleFollowingProgress:u.ZH,getUsers:u.D7}))(y)}}]);
//# sourceMappingURL=878.aa7c9de4.chunk.js.map