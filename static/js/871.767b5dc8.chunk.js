"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[871],{3871:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var a=n(2791),r=n(9434),s="ContactList_list__csErn",c="ContactList_listItem__SptUx",l="ContactList_btn__6Piat",i="ContactList_text__+NWAW",o=function(e){return e.contacts.items},u=function(e){return e.filter},m=function(e){return e.contacts.error},d=function(e){return e.contacts.isLoading},_=n(3634),f=n(184),h=function(){var e=(0,r.v9)(o),t=(0,r.I0)(),n=(0,r.v9)(m),h=(0,r.v9)(d),p=(0,r.v9)(u).filter.toLowerCase(),x=e?e.filter((function(e){return e.name.toLowerCase().includes(p)})):null;(0,a.useEffect)((function(){t((0,_.yF)())}),[t]);return(0,f.jsxs)("ul",{className:s,children:[n&&(0,f.jsx)("p",{children:n}),h&&(0,f.jsx)("p",{children:"Loading...."}),x&&x.map((function(e){var n=e.name,a=e.number,r=e.id;return(0,f.jsxs)("li",{className:c,children:[(0,f.jsxs)("p",{className:i,children:[n,": ",a]}),(0,f.jsx)("button",{onClick:function(){return e=r,void t((0,_.GK)(e));var e},className:l,children:"Delete"})]},r)}))]})},p=n(7762),x="ContactForm_form__dhl+T",b="ContactForm_formLabel__TSwxK",v="ContactForm_formInput__GszVU",j="ContactForm_btn__wll+u",N=function(){var e=(0,r.I0)(),t=(0,r.v9)(o);return(0,f.jsxs)("form",{onSubmit:function(n){n.preventDefault();var a,r=n.target,s={name:r.elements.name.value,number:r.elements.number.value},c=(0,p.Z)(t);try{for(c.s();!(a=c.n()).done;){if(a.value.name===s.name)return void alert("".concat(s.name," is already in contacts."))}}catch(l){c.e(l)}finally{c.f()}e((0,_.uK)(s)),r.reset()},className:x,children:[(0,f.jsxs)("label",{htmlFor:"name",className:b,children:[" Name",(0,f.jsx)("input",{className:v,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,f.jsxs)("label",{htmlFor:"tel",className:b,children:[" Number",(0,f.jsx)("input",{className:v,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,f.jsx)("button",{type:"submit",className:j,children:" Add contact"})]})},C="Filter_labelFilter__7SBy1",y="Filter_inputFilter__8QMOp",F=n(4808),w=function(){var e=(0,r.I0)();return(0,f.jsxs)("label",{className:C,children:[" Find contacts by name",(0,f.jsx)("input",{type:"text",onChange:function(t){return e((0,F.K)(t.target.value))},className:y})]})},L="Contacts_title__LxdN4",g="Contacts_container__WzsIr";function k(){var e=(0,r.I0)(),t=(0,r.v9)(d);return(0,a.useEffect)((function(){e((0,_.yF)())}),[e]),(0,f.jsxs)("div",{className:g,children:[(0,f.jsx)("h1",{className:L,children:"Add new contact to your phonebook:"}),(0,f.jsx)(N,{}),(0,f.jsx)("h2",{className:L,children:"Here is your contact list:"}),(0,f.jsx)(w,{}),(0,f.jsx)(h,{}),(0,f.jsx)("div",{children:t&&"Request in progress..."})]})}}}]);
//# sourceMappingURL=871.767b5dc8.chunk.js.map