(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["App.vue"],{"1f44":function(e,t,n){"use strict";n.r(t),n.d(t,"App",(function(){return z})),n.d(t,"Vue",(function(){return B["a"]}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticStyle:{width:"320px",padding:"25px"},attrs:{action:"https://somespeed.com/",target:"_blank",id:"app"}},[e._m(0),e.rawAllTaxonomies.models?n("models-select",{directives:[{name:"show",rawName:"v-show",value:e.rawAllTaxonomies.models.ready,expression:"rawAllTaxonomies.models.ready"}],attrs:{taxonomy:e.rawAllTaxonomies.models,value:0},on:{ready:function(t){return e.rawAllTaxonomies.models.ready=t}}}):e._e(),e.rawAllTaxonomies.models&&e.rawAllTaxonomies.models.ready?e._e():n("loading-skeleton"),e.rawAllTaxonomies.years?n("years-input",{directives:[{name:"show",rawName:"v-show",value:e.rawAllTaxonomies.years.ready,expression:"rawAllTaxonomies.years.ready"}],attrs:{taxonomy:e.rawAllTaxonomies.years,value:2e3},on:{ready:function(t){return e.rawAllTaxonomies.years.ready=t}}}):e._e(),e.rawAllTaxonomies.years&&e.rawAllTaxonomies.years.ready?e._e():n("loading-skeleton"),e.rawAllTaxonomies.generation?n("generation-select",{directives:[{name:"show",rawName:"v-show",value:e.rawAllTaxonomies.generation.ready,expression:"rawAllTaxonomies.generation.ready"}],attrs:{taxonomy:e.rawAllTaxonomies.generation},on:{ready:function(t){return e.rawAllTaxonomies.generation.ready=t}},model:{value:e.selectedGeneration,callback:function(t){e.selectedGeneration=e._n(t)},expression:"selectedGeneration"}}):e._e(),e.rawAllTaxonomies.generation&&e.rawAllTaxonomies.generation.ready?e._e():n("loading-skeleton"),n("hr"),n("pre",[e._v("selectedModelId: 0\nselectedYearTermId: "+e._s(e.selectedYearTermId)+"\nselectedGeneration: "+e._s(e.selectedGeneration)+"\n\t\t")]),n("input",{attrs:{type:"submit"}})],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",[e._v(" Search query:"),n("br"),n("input",{attrs:{type:"search",name:"s"}})])}],s=(n("96cf"),n("1da1")),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"filter-container model-filter-container"},e._l(e.notEmptySections,(function(t,r){return n("label",{key:t.id},[e._v(" Choose "),n("span",0===r?[e._v("brand")]:1===r?[e._v(e._s(e.notEmptySections[r-1].items.get(e.notEmptySections[r-1].state).name)+" model")]:[e._v("trim")]),e._v(": "),n("alphabetical-select",{attrs:{options:t.items,value:t.state},on:{input:function(t){return e.rebuildSections(t,r)}}})],1)})),0)},i=[],u=(n("99af"),n("d81d"),n("a434"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("2909")),c=n("b85c"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("select",{domProps:{value:e.value},on:{input:e.emit}},[n("option",{domProps:{value:0}},[e._v(e._s(e.anyText))]),e._l(e.groups,(function(t){return n("optgroup",{key:t.label,attrs:{label:t.label}},e._l(t.items,(function(t){return n("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name))])})),0)}))],2)])},m=[],p=(n("4160"),n("4e82"),n("b0c0"),n("e25e"),n("159b"),{name:"AlphabeticalSelect",props:{options:{type:Map},value:{default:0},anyText:{default:"Any",type:String}},computed:{sortedOptions:function(){return Object(u["a"])(this.options).map((function(e){return e[1]})).sort((function(e,t){return e.name.toUpperCase()<t.name.toUpperCase()?-1:e.name.toUpperCase()===t.name.toUpperCase()?0:1}))},groups:function(){var e=[];return this.sortedOptions.forEach((function(t){var n=t.name.charAt(0).toUpperCase();e[e.length-1]&&e[e.length-1].label===n||e.push({label:n,items:[]}),e[e.length-1].items.push(t)})),e}},methods:{emit:function(e){this.$emit("input",parseInt(e.target.value))}}}),d=p,f=n("2877"),h=Object(f["a"])(d,l,m,!1,null,"e4861912",null),v=h.exports;function x(e){return w.apply(this,arguments)}function w(){return w=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,s=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:{},e.next=3,fetch(t,n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)}))),w.apply(this,arguments)}n("0481"),n("4069"),n("ac1f"),n("466d");function y(e){return b.apply(this,arguments)}function b(){return b=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,s,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,r=n.json(),a=Promise.resolve([]),s=n.headers.get("link"),s&&(o=s.match(/<([^>]+)>; rel="next"/),o&&o[1]&&(a=y(o[1]))),e.next=9,Promise.all([r,a]);case 9:return i=e.sent,e.abrupt("return",i.flat());case 11:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}var g={name:"ModelsSelect",components:{AlphabeticalSelect:v},props:["taxonomy","value"],data:function(){return{sections:[]}},computed:{loadedIDs:function(){return this.terms_tree.map((function(e){return e.id}))},notEmptySections:function(){var e,t=[],n=Object(c["a"])(this.sections);try{for(n.s();!(e=n.n()).done;){var r=e.value;if(r.items.size<1)return t;t.push(r)}}catch(a){n.e(a)}finally{n.f()}return t},lastValue:function(){var e,t=0,n=Object(c["a"])(this.notEmptySections);try{for(n.s();!(e=n.n()).done;){var r=e.value;0!==r.state&&(t=r.state)}}catch(a){n.e(a)}finally{n.f()}return t}},methods:{rebuildSections:function(e,t){var n=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,s,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(a=n.sections[t],a.state=e,n.sections.splice(t+1),!e){r.next=11;break}return s=a.items.get(e),r.t0=s.id||0,r.next=8,n.loadTerms(s.id);case 8:r.t1=r.sent,o={id:r.t0,items:r.t1,state:0},n.sections.push(o);case 11:case"end":return r.stop()}}),r)})))()},loadTerm:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r,a,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return",{});case 2:if(!t.notEmptySections.length){n.next=20;break}r=Object(c["a"])(t.notEmptySections),n.prev=4,r.s();case 6:if((a=r.n()).done){n.next=12;break}if(s=a.value,!s.items.has(e)){n.next=10;break}return n.abrupt("return",s.items.get(e));case 10:n.next=6;break;case 12:n.next=17;break;case 14:n.prev=14,n.t0=n["catch"](4),r.e(n.t0);case 17:return n.prev=17,r.f(),n.finish(17);case 20:return n.abrupt("return",x(t.taxonomy._links["wp:items"][0].href+"/"+e));case 21:case"end":return n.stop()}}),n,null,[[4,14,17,20]])})))()},loadTerms:function(){var e=arguments,t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.length>0&&void 0!==e[0]?e[0]:0,n.next=3,y(t.taxonomy._links["wp:items"][0].href+"?hide_empty=1&per_page=100&parent="+r);case 3:return a=n.sent,n.abrupt("return",new Map(a.map((function(e){return[e.id,e]}))));case 5:case"end":return n.stop()}}),n)})))()},setupInitialValue:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.value){t.next=11;break}return t.t0=(n=e.sections).push,t.t1=n,t.t2=u["a"],t.next=6,e.buildSectionFromChild(e.value);case 6:t.t3=t.sent,t.t4=(0,t.t2)(t.t3),t.t0.apply.call(t.t0,t.t1,t.t4),t.next=19;break;case 11:return t.t5=(r=e.sections).push,t.t6=r,t.t7=u["a"],t.next=16,e.buildSectionsFromParent(0);case 16:t.t8=t.sent,t.t9=(0,t.t7)(t.t8),t.t5.apply.call(t.t5,t.t6,t.t9);case 19:case"end":return t.stop()}}),t)})))()},buildSectionFromChild:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r,a,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return",[]);case 2:return n.next=4,t.loadTerm(e);case 4:if(r=n.sent,void 0!==r.parent){n.next=7;break}return n.abrupt("return",[]);case 7:return n.next=9,t.loadTerm(r.parent);case 9:return a=n.sent,n.t0=a.id||0,n.next=13,t.loadTerms(a.id);case 13:return n.t1=n.sent,n.t2=e,s={id:n.t0,items:n.t1,state:n.t2},n.t3=[],n.t4=u["a"],n.next=20,t.buildSectionFromChild(a.id);case 20:return n.t5=n.sent,n.t6=(0,n.t4)(n.t5),n.t7=[s],n.abrupt("return",n.t3.concat.call(n.t3,n.t6,n.t7));case 24:case"end":return n.stop()}}),n)})))()},buildSectionsFromParent:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.loadTerm(e);case 2:return r=n.sent,n.t0=e,n.next=6,t.loadTerms(r.id);case 6:return n.t1=n.sent,a={id:n.t0,items:n.t1,state:0},n.abrupt("return",[a]);case 9:case"end":return n.stop()}}),n)})))()}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.setupInitialValue();case 2:e.$emit("ready",!0);case 3:case"end":return t.stop()}}),t)})))()},watch:{sections:{deep:!0,handler:function(e){var t,n=Object(c["a"])(this.notEmptySections);try{for(n.s();!(t=n.n()).done;){var r=t.value;0!==r.state&&r.state}}catch(a){n.e(a)}finally{n.f()}}}}},_=g,k=Object(f["a"])(_,o,i,!1,null,null,null),T=k.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.flatYears.length?n("label",{staticClass:"filter-container year-filter-container"},[e._v(" Choose year: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedYear,expression:"selectedYear"}],attrs:{list:"years-list",type:"number",min:e.minYear,max:e.maxYear,placeholder:"2000"},domProps:{value:e.selectedYear},on:{input:function(t){t.target.composing||(e.selectedYear=t.target.value)}}}),n("datalist",{attrs:{id:"years-list"}},e._l(e.flatYears,(function(e){return n("option",{key:e,domProps:{value:e}})})),0)]):e._e()},O=[],j=(n("4de4"),n("7db0"),n("0d03"),{name:"YearsInput",props:["taxonomy","value"],data:function(){return{terms:[],selectedYear:""}},computed:{flatYears:function(){return this.terms.map((function(e){return parseInt(e.slug,10)})).filter((function(e){return!isNaN(e)})).sort((function(e,t){return e-t}))},minYear:function(){return this.flatYears.length?Math.min.apply(Math,Object(u["a"])(this.flatYears)):1900},maxYear:function(){return this.flatYears.length?Math.max.apply(Math,Object(u["a"])(this.flatYears)):(new Date).getFullYear()},selectedTermId:function(){var e=this,t=this.terms.find((function(t){return t.slug===e.selectedYear}));return t?t.id:0}},methods:{loadAllTerms:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.t0=(n=e.terms).push,t.t1=n,t.t2=u["a"],t.next=5,y(e.taxonomy._links["wp:items"][0].href+"?hide_empty=1&per_page=100");case 5:t.t3=t.sent,t.t4=(0,t.t2)(t.t3),t.t0.apply.call(t.t0,t.t1,t.t4);case 8:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.loadAllTerms();case 2:e.$emit("ready",!0);case 3:case"end":return t.stop()}}),t)})))()},watch:{selectedYear:function(){this.$emit("input",this.selectedTermId)}}}),R=j,S=Object(f["a"])(R,A,O,!1,null,"3ffd88c7",null),Y=S.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.sortedOptions.length?n("label",[e._v(" Choose generation: "),n("select",{domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}},[n("option",{domProps:{value:0}},[e._v("Any")]),e._l(e.sortedOptions,(function(t){return n("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name))])}))],2)]):e._e()},C=[],I={name:"GenerationSelect",props:["taxonomy","value"],data:function(){return{terms:[]}},computed:{sortedOptions:function(){return Object(u["a"])(this.terms).sort((function(e,t){var n=parseInt(e.name),r=parseInt(t.name);return r-n}))}},methods:{loadAllTerms:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.t0=(n=e.terms).push,t.t1=n,t.t2=u["a"],t.next=5,y(e.taxonomy._links["wp:items"][0].href+"?hide_empty=1&per_page=100");case 5:t.t3=t.sent,t.t4=(0,t.t2)(t.t3),t.t0.apply.call(t.t0,t.t1,t.t4);case 8:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.loadAllTerms();case 2:e.$emit("ready",!0);case 3:case"end":return t.stop()}}),t)})))()}},$=I,P=Object(f["a"])($,E,C,!1,null,"76fd3b2e",null),M=P.exports,G=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},F=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",[n("span",{staticClass:"skeleton"},[e._v("Choose brand:")]),n("input",{staticClass:"skeleton",attrs:{type:"text",disabled:""}})])}],N={name:"LoadingSkeleton"},U=N,V=(n("cfd1"),Object(f["a"])(U,G,F,!1,null,"7bb1622c",null)),D=V.exports,J={name:"App",components:{LoadingSkeleton:D,GenerationSelect:M,YearsInput:Y,ModelsSelect:T},data:function(){return{rawAllTaxonomies:{},selectedYearTermId:2e3,selectedGeneration:3381}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,x("https://somespeed.com/wp-json/wp/v2/taxonomies?type=post");case 2:n=t.sent,n.models.ready=!1,n.years.ready=!1,n.generation.ready=!1,e.rawAllTaxonomies={models:n.models,years:n.years,generation:n.generation};case 7:case"end":return t.stop()}}),t)})))()}},L=J,q=Object(f["a"])(L,r,a,!1,null,null,null),z=q.exports,B=n("2b0e")},cfd1:function(e,t,n){"use strict";var r=n("d899"),a=n.n(r);a.a},d899:function(e,t,n){}}]);
//# sourceMappingURL=App.vue.js.map