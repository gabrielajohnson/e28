(function(t){function i(i){for(var r,a,p=i[0],o=i[1],d=i[2],l=0,c=[];l<p.length;l++)a=p[l],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&c.push(n[a][0]),n[a]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);u&&u(i);while(c.length)c.shift()();return s.push.apply(s,d||[]),e()}function e(){for(var t,i=0;i<s.length;i++){for(var e=s[i],r=!0,p=1;p<e.length;p++){var o=e[p];0!==n[o]&&(r=!1)}r&&(s.splice(i--,1),t=a(a.s=e[0]))}return t}var r={},n={app:0},s=[];function a(i){if(r[i])return r[i].exports;var e=r[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=r,a.d=function(t,i,e){a.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,i){if(1&i&&(t=a(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var r in t)a.d(e,r,function(i){return t[i]}.bind(null,r));return e},a.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(i,"a",i),i},a.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},a.p="/";var p=window["webpackJsonp"]=window["webpackJsonp"]||[],o=p.push.bind(p);p.push=i,p=p.slice();for(var d=0;d<p.length;d++)i(p[d]);var u=o;s.push([0,"chunk-vendors"]),e()})({0:function(t,i,e){t.exports=e("56d7")},"56d7":function(t,i,e){"use strict";e.r(i);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r,n=e("2b0e"),s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"app"}},[e("nav",[e("ul",[e("li",t._l(t.links,(function(i){return e("router-link",{key:i,attrs:{to:t.paths[i],exact:""}},[t._v(t._s(i))])})),1)])]),e("div",{staticClass:"content"},[e("router-view",{attrs:{trips:t.trips,triplists:t.triplists,triplistitems:t.triplistitems,tripdays:t.tripdays},on:{"update-trips":function(i){return t.updateTrips()},"update-trip-lists":function(i){return t.updateTripLists()},"update-trip-list-items":function(i){return t.updateTripListItems()},"update-trip-days":function(i){return t.updateTripDays()}}})],1)])},a=[],p=e("bc3a").create({baseURL:null!==(r="http://e28-api.gabrielajohnson.me")&&void 0!==r?r:"http://e28-api.loc",responseType:"json"}),o={name:"App",data:function(){return{trips:[],triplists:[],triplistitems:[],tripdays:[],links:["trips","add a trip"],paths:{trips:"/","add a trip":"/trips/new"}}},methods:{updateTrips:function(){var t=this;p.get("trip").then((function(i){t.trips=i.data.trip}))},updateTripLists:function(){var t=this;p.get("triplist").then((function(i){t.triplists=i.data.triplist}))},updateTripListItems:function(){var t=this;p.get("triplistitem").then((function(i){t.triplistitems=i.data.triplistitem}))},updateTripDays:function(){var t=this;p.get("tripday").then((function(i){t.tripdays=i.data.tripday}))}},mounted:function(){this.updateTrips(),this.updateTripLists(),this.updateTripListItems(),this.updateTripDays()}},d=o,u=(e("5c0b"),e("2877")),l=Object(u["a"])(d,s,a,!1,null,null,null),c=l.exports,m=e("8c4f"),v=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"trips"}},[e("h1",[t._v("Trips")]),t._l(t.trips,(function(i){return e("router-link",{key:i.id,attrs:{to:"/trips/"+i.id,exact:""}},[e("show-trip",{attrs:{trip:i,triplists:t.triplists,triplistitems:t.triplistitems,tripdays:t.tripdays}})],1)})),0==t.trips.length?e("div",[e("p",[t._v("No Trips Have Been Created")])]):t._e()],2)},f=[],h=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("h3",{staticClass:"text-align-center trip-name"},[t._v(t._s(t.trip.name))]),t.includeDetails?e("div",[e("label",{attrs:{for:"name"}},[t._v("Description")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.trip.description,expression:"trip.description"}],attrs:{type:"text",id:"description",max:"100"},domProps:{value:t.trip.description},on:{keyup:t.editTrip,input:function(i){i.target.composing||t.$set(t.trip,"description",i.target.value)}}}),e("label",{attrs:{for:"name"}},[t._v("Origin")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.trip.origin,expression:"trip.origin"}],attrs:{type:"text",id:"origin",max:"100"},domProps:{value:t.trip.origin},on:{keyup:t.editTrip,input:function(i){i.target.composing||t.$set(t.trip,"origin",i.target.value)}}}),e("label",{attrs:{for:"name"}},[t._v("Destination")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.trip.destination,expression:"trip.destination"}],attrs:{type:"text",id:"destination",max:"100"},domProps:{value:t.trip.destination},on:{keyup:t.editTrip,input:function(i){i.target.composing||t.$set(t.trip,"destination",i.target.value)}}}),e("label",{attrs:{for:"name"}},[t._v("Departure Details")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.trip.departing_travel,expression:"trip.departing_travel"}],attrs:{type:"text",id:"departing_travel",max:"100"},domProps:{value:t.trip.departing_travel},on:{keyup:t.editTrip,input:function(i){i.target.composing||t.$set(t.trip,"departing_travel",i.target.value)}}}),e("label",{attrs:{for:"name"}},[t._v("Returning Travel Details")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.trip.returning_travel,expression:"trip.returning_travel"}],attrs:{type:"text",id:"returning_travel",max:"100"},domProps:{value:t.trip.returning_travel},on:{keyup:t.editTrip,input:function(i){i.target.composing||t.$set(t.trip,"returning_travel",i.target.value)}}}),e("label",{attrs:{for:"name"}},[t._v("Budget")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.trip.budget,expression:"trip.budget"}],attrs:{type:"text",id:"budget",max:"100"},domProps:{value:t.trip.budget},on:{keyup:t.editTrip,input:function(i){i.target.composing||t.$set(t.trip,"budget",i.target.value)}}}),e("label",{attrs:{for:"name"}},[t._v("Hotel")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.trip.hotel,expression:"trip.hotel"}],attrs:{type:"text",id:"hotel",max:"100"},domProps:{value:t.trip.hotel},on:{keyup:t.editTrip,input:function(i){i.target.composing||t.$set(t.trip,"hotel",i.target.value)}}}),e("h3",{staticClass:"text-align-center"},[t._v("Trip Schedule")]),e("div",{staticClass:"calendar"},t._l(t.currentTripDays,(function(i,r){return e("div",{key:r,staticClass:"trip-day",attrs:{value:r}},[e("trip-day",{attrs:{trip:t.trip,i:i},on:{"update-trip-days":function(i){return t.updateTripDays()}}})],1)})),0),e("button",{staticClass:"btn",on:{click:t.addDay}},[t._v("Add Date")]),t.errors?e("p",[e("b",[t._v("Please correct the following error(s):")]),e("ul",t._l(t.errors,(function(i){return e("li",{key:i},[t._v(t._s(i))])})),0)]):t._e(),e("show-trip-list",{attrs:{trip:t.trip,triplists:t.triplists,triplistitems:t.triplistitems},on:{"update-trip-lists":function(i){return t.updateTripLists()},"update-trip-list-items":function(i){return t.updateTripListItems()}}}),e("button",{staticClass:"btn",on:{click:function(i){return t.deleteTrip(t.trip.id)}}},[t._v("Delete Trip")])],1):t._e()])},g=[],_=(e("4de4"),function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.i.date,expression:"i.date"}],attrs:{type:"text",placeholder:"Date",id:"date",max:"100"},domProps:{value:t.i.date},on:{keyup:function(i){return t.editDay(t.i)},input:function(i){i.target.composing||t.$set(t.i,"date",i.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.i.description,expression:"i.description"}],attrs:{type:"text",placeholder:"Description",id:"description",max:"100"},domProps:{value:t.i.description},on:{keyup:function(i){return t.editDay(t.i)},input:function(i){i.target.composing||t.$set(t.i,"description",i.target.value)}}}),e("button",{staticClass:"small-btn delete",on:{click:function(i){return t.deleteDay(t.i)}}},[t._v("Delete")])])}),y=[],b={name:"trip-day",props:["trip","includeDetails","tripdays","i"],data:function(){return{errors:null,tripday:{date:"",description:"",trip_id:this.trip.id}}},methods:{editDay:function(t){var i=this;p.put("/tripday/"+t.id,t).then((function(t){t.data.errors?(i.errors=t.data.errors,i.showConfirmationMessage=!1):(i.$emit("update-trips-days"),i.showConfirmationMessage=!0)}))},deleteDay:function(t){var i=this;p.delete("/tripday/"+t.id).then((function(t){t.data.errors?i.errors=t.data.errors:i.$emit("update-trip-days")}))}}},x=b,w=Object(u["a"])(x,_,y,!1,null,null,null),T=w.exports,$=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("h3",{staticClass:"text-align-center"},[t._v("Lists")]),e("div",{staticClass:"add-list-container"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.triplist.name,expression:"triplist.name"}],attrs:{type:"text",id:"name",max:"100",placeholder:"Enter new list name"},domProps:{value:t.triplist.name},on:{input:function(i){i.target.composing||t.$set(t.triplist,"name",i.target.value)}}}),e("button",{staticClass:"btn add-list",on:{click:t.addList}},[t._v("Add List")])]),e("div",{staticClass:"trip-lists"},t._l(t.currentTripListItems,(function(i,r){return e("div",{key:r,staticClass:"trip-list"},[e("div",{staticClass:"trip-heading"},[e("p",[t._v(t._s(i.name))]),e("button",{staticClass:"small-btn",on:{click:function(e){return t.deleteList(i.id)}}},[t._v("Delete List")])]),e("ul",t._l(t.currentTripListItems[r].items,(function(i,r){return e("li",{key:r},[e("p",[t._v(t._s(i.name))]),e("button",{staticClass:"small-btn",on:{click:function(e){return t.deleteListItem(i.id)}}},[t._v("X")])])})),0),e("div",{staticClass:"add-new-item"},[e("input",{key:i.id,attrs:{type:"text",max:"100",id:t.nameId(i.id),placeholder:"Add a new list item"}}),e("button",{staticClass:"small-btn",on:{click:function(e){return t.addListItem(i.id)}}},[t._v("+")])])])})),0)])},D=[],k=(e("b0c0"),{name:"show-trip-list",props:["id","trip","triplists","triplistitems","tripdays"],data:function(){return{triplist:{name:"",trip_id:this.trip.id},triplistitem:{name:"",trip_id:this.trip.id,triplist_id:""}}},methods:{addList:function(){var t=this;p.post("/triplist",this.triplist).then((function(i){i.data.errors?t.errors=i.data.errors:t.$emit("update-trip-lists")})),this.triplist.name=""},deleteList:function(t){var i=this;for(var e in p.delete("/triplist/"+t).then((function(t){t.data.errors?i.errors=t.data.errors:i.$emit("update-trip-lists")})),this.triplistitems)e.trip_id==t&&this.deleteListItem(e.id);this.$emit("update-trip-list-items")},addListItem:function(t){var i=this,e="name"+t;this.triplistitem.name=document.getElementById(e).value,this.triplistitem.triplist_id=t,p.post("/triplistitem",this.triplistitem).then((function(t){t.data.errors?i.errors=t.data.errors:(i.$emit("update-trip-list-items"),document.getElementById(e).value="")}))},deleteListItem:function(t){var i=this;p.delete("/triplistitem/"+t).then((function(t){t.data.errors?i.errors=t.data.errors:i.$emit("update-trip-list-items")}))},nameId:function(t){return"name"+t}},computed:{currentTripListItems:function(){function t(t){return t.trip_id==this.trip.id}var i=this.triplists.filter(t,this),e=[];function r(t){return t.trip_id==this.trip.id}var n=this.triplistitems.filter(r,this);for(var s in i)for(var a in e.push({name:i[s].name,id:i[s].id,trip_id:i[s].trip_id,items:[]}),n)n[a].triplist_id==i[s].id&&e[e.length-1].items.push(n[a]);return e},tripNotFound:function(){return null==this.trip}}}),C=k,P=Object(u["a"])(C,$,D,!1,null,null,null),L=P.exports,N={name:"show-trip",props:["trip","includeDetails","tripdays","triplists","triplistitems"],data:function(){return{errors:null,tripday:{date:"",description:"",trip_id:this.trip.id}}},components:{"trip-day":T,"show-trip-list":L},methods:{editTrip:function(){var t=this;p.put("/trip/"+this.trip.id,this.trip).then((function(i){i.data.errors?(t.errors=i.data.errors,t.showConfirmationMessage=!1):(t.$emit("update-trips"),t.showConfirmationMessage=!0)}))},addDay:function(){var t=this;p.post("/tripday",this.tripday).then((function(i){i.data.errors?t.errors=i.data.errors:t.$emit("update-trip-days")}))},deleteTrip:function(t){var i=this;for(var e in p.delete("/trip/"+t).then((function(t){t.data.errors&&(i.errors=t.data.errors)})),this.tripdays)e.trip_id==t&&p.delete("/tripdays/"+e.id).then((function(t){t.data.errors&&(i.errors=t.data.errors)}));for(var r in this.triplists)r.trip_id==t&&p.delete("/triplists/"+r.id).then((function(t){t.data.errors&&(i.errors=t.data.errors)}));for(var n in this.triplists)n.trip_id==t&&p.delete("/triplistitems/"+n.id).then((function(t){t.data.errors&&(i.errors=t.data.errors)}));this.$emit("update-trip"),this.$emit("update-trip-days"),this.$emit("update-trip-lists"),this.$emit("update-trip-list-items"),this.$router.push({path:"home"})},updateTrips:function(){this.$emit("update-trips")},updateTripDays:function(){this.$emit("update-trip-days")},updateTripLists:function(){var t=this;p.get("triplist").then((function(i){t.triplists=i.data.triplist}))},updateTripListItems:function(){var t=this;p.get("triplistitem").then((function(i){t.triplistitems=i.data.triplistitem}))}},computed:{currentTripDays:function(){function t(t){return t.trip_id==this.trip.id}return this.tripdays.filter(t,this)},tripNotFound:function(){return null==this.trip}}},O=N,j=Object(u["a"])(O,h,g,!1,null,null,null),I=j.exports,M={name:"",components:{"show-trip":I},props:["trips","triplists","triplistitems","tripdays"],data:function(){return{}}},E=M,A=Object(u["a"])(E,v,f,!1,null,"9f2b3d1a",null),S=A.exports,B=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("h2",[t._v("Add a Trip")]),e("div",{attrs:{id:"inputs"}},[e("label",{attrs:{for:"name"}},[t._v("Name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.trip.name,expression:"trip.name"}],attrs:{type:"text",id:"name",min:"3",max:"100",required:""},domProps:{value:t.trip.name},on:{input:function(i){i.target.composing||t.$set(t.trip,"name",i.target.value)}}}),e("label",{attrs:{for:"name"}},[t._v("Description")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.trip.description,expression:"trip.description"}],attrs:{type:"text",id:"description",max:"100"},domProps:{value:t.trip.description},on:{input:function(i){i.target.composing||t.$set(t.trip,"description",i.target.value)}}}),e("label",{attrs:{for:"name"}},[t._v("Origin")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.trip.origin,expression:"trip.origin"}],attrs:{type:"text",id:"origin",max:"100"},domProps:{value:t.trip.origin},on:{input:function(i){i.target.composing||t.$set(t.trip,"origin",i.target.value)}}}),e("label",{attrs:{for:"name"}},[t._v("Destination")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.trip.destination,expression:"trip.destination"}],attrs:{type:"text",id:"destination",max:"100"},domProps:{value:t.trip.destination},on:{input:function(i){i.target.composing||t.$set(t.trip,"destination",i.target.value)}}}),e("label",{attrs:{for:"name"}},[t._v("Departure Details")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.trip.departing_travel,expression:"trip.departing_travel"}],attrs:{type:"text",id:"departing_travel",max:"100"},domProps:{value:t.trip.departing_travel},on:{input:function(i){i.target.composing||t.$set(t.trip,"departing_travel",i.target.value)}}}),e("label",{attrs:{for:"name"}},[t._v("Returning Travel Details")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.trip.returning_travel,expression:"trip.returning_travel"}],attrs:{type:"text",id:"returning_travel",max:"100"},domProps:{value:t.trip.returning_travel},on:{input:function(i){i.target.composing||t.$set(t.trip,"returning_travel",i.target.value)}}}),e("label",{attrs:{for:"name"}},[t._v("Budget")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.trip.budget,expression:"trip.budget"}],attrs:{type:"text",id:"budget",max:"100"},domProps:{value:t.trip.budget},on:{input:function(i){i.target.composing||t.$set(t.trip,"budget",i.target.value)}}}),e("label",{attrs:{for:"name"}},[t._v("Hotel")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.trip.hotel,expression:"trip.hotel"}],attrs:{type:"text",id:"hotel",max:"100"},domProps:{value:t.trip.hotel},on:{input:function(i){i.target.composing||t.$set(t.trip,"hotel",i.target.value)}}})]),e("button",{on:{click:t.addTrip}},[t._v("Add Trip")]),t.showConfirmationMessage?e("p",[t._v("Trip was added")]):t._e(),t.errors?e("p",[e("b",[t._v("Please correct the following error(s):")]),e("ul",t._l(t.errors,(function(i){return e("li",{key:i},[t._v(t._s(i))])})),0)]):t._e()])},F=[],H={props:["trips"],data:function(){return{errors:null,showConfirmationMessage:!1,trip:{}}},methods:{addTrip:function(){var t=this;p.post("/trip",this.trip).then((function(i){if(i.data.errors)t.errors=i.data.errors,t.showConfirmationMessage=!1;else{for(var e in t.$emit("update-trips"),t.trip)t.trip[e]="";t.showConfirmationMessage=!0}}))}}},R=H,J=(e("c165"),Object(u["a"])(R,B,F,!1,null,"f355f6a2",null)),q=J.exports,U=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"trip-page"}},[t.trip?e("div",[e("show-trip",{attrs:{trip:t.trip,includeDetails:!0,triplists:t.triplists,triplistitems:t.triplistitems,tripdays:t.tripdays},on:{"update-trip-days":function(i){return t.updateTripDays()}}})],1):t._e(),t.tripNotFound?e("div",[e("p",[t._v("trip "+t._s(t.id)+" not found.")])]):t._e()])},X=[],z={name:"",props:["id","trips","triplists","triplistitems","tripdays"],components:{"show-trip":I},data:function(){return{}},methods:{updateTripDays:function(){this.$emit("update-trip-days")}},computed:{trip:function(){var t=this;return this.trips.filter((function(i){return i.id==t.id}),this.id)[0]},triplist:function(){var t=this;return this.triplists.filter((function(i){return i.trip_id==t.trip.id}),this.trip.id)[0]},tripday:function(){var t=this;return this.tripdays.filter((function(i){return i.trip_id==t.trip.id}),this.trip.id)[0]},triplistitem:function(){var t=this;return this.triplistitem.filter((function(i){return i.trip_id==t.trip.id}),this.trip.id)[0]},tripNotFound:function(){return null==this.trip}}},G=z,K=Object(u["a"])(G,U,X,!1,null,null,null),Q=K.exports;n["a"].config.productionTip=!1,n["a"].use(m["a"]);var V=new m["a"]({mode:"history",routes:[{path:"/",component:S},{path:"/trips/new",component:q},{path:"/trips/:id",component:Q,props:!0}]});new n["a"]({router:V,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,i,e){"use strict";e("9c0c")},6973:function(t,i,e){},"9c0c":function(t,i,e){},c165:function(t,i,e){"use strict";e("6973")}});
//# sourceMappingURL=app.fec4bb02.js.map