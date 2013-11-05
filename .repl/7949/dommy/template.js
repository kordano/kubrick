goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template.PElement = {};
dommy.template._elem = (function _elem(this$){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__6809__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (dommy.template._elem[goog.typeOf(x__6809__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (dommy.template._elem["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PElement.-elem",this$);
}
}
})().call(null,this$);
}
});
/**
* index of css character (#,.) in base-element. bottleneck
*/
dommy.template.next_css_index = (function next_css_index(s,start_idx){var id_idx = s.indexOf("#",start_idx);var class_idx = s.indexOf(".",start_idx);var idx = Math.min(id_idx,class_idx);if((idx < 0))
{return Math.max(id_idx,class_idx);
} else
{return idx;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){var node_str = cljs.core.name.call(null,node_key);var base_idx = dommy.template.next_css_index.call(null,node_str,0);var tag = (((base_idx > 0))?node_str.substring(0,base_idx):(((base_idx === 0))?"div":((new cljs.core.Keyword(null,"else","else",1017020587))?node_str:null)));var node = document.createElement(tag);if((base_idx >= 0))
{var str_14462 = node_str.substring(base_idx);while(true){
var next_idx_14463 = dommy.template.next_css_index.call(null,str_14462,1);var frag_14464 = (((next_idx_14463 >= 0))?str_14462.substring(0,next_idx_14463):str_14462);var G__14461_14465 = frag_14464.charAt(0);if(cljs.core._EQ_.call(null,"#",G__14461_14465))
{node.setAttribute("id",frag_14464.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__14461_14465))
{dommy.attrs.add_class_BANG_.call(null,node,frag_14464.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_14464.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_14463 >= 0))
{{
var G__14466 = str_14462.substring(next_idx_14463);
str_14462 = G__14466;
continue;
}
} else
{}
break;
}
} else
{}
return node;
});
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){throw [cljs.core.str("Don't know how to make node from: "),cljs.core.str(cljs.core.pr_str.call(null,node_data))].join('');
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){return __GT_document_fragment.call(null,document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__14472 = data;if(G__14472)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__14472.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14472.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14472);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14472);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__14473_14477 = cljs.core.seq.call(null,data);var chunk__14474_14478 = null;var count__14475_14479 = 0;var i__14476_14480 = 0;while(true){
if((i__14476_14480 < count__14475_14479))
{var child_14481 = cljs.core._nth.call(null,chunk__14474_14478,i__14476_14480);__GT_document_fragment.call(null,result_frag,child_14481);
{
var G__14482 = seq__14473_14477;
var G__14483 = chunk__14474_14478;
var G__14484 = count__14475_14479;
var G__14485 = (i__14476_14480 + 1);
seq__14473_14477 = G__14482;
chunk__14474_14478 = G__14483;
count__14475_14479 = G__14484;
i__14476_14480 = G__14485;
continue;
}
} else
{var temp__4092__auto___14486 = cljs.core.seq.call(null,seq__14473_14477);if(temp__4092__auto___14486)
{var seq__14473_14487__$1 = temp__4092__auto___14486;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14473_14487__$1))
{var c__6930__auto___14488 = cljs.core.chunk_first.call(null,seq__14473_14487__$1);{
var G__14489 = cljs.core.chunk_rest.call(null,seq__14473_14487__$1);
var G__14490 = c__6930__auto___14488;
var G__14491 = cljs.core.count.call(null,c__6930__auto___14488);
var G__14492 = 0;
seq__14473_14477 = G__14489;
chunk__14474_14478 = G__14490;
count__14475_14479 = G__14491;
i__14476_14480 = G__14492;
continue;
}
} else
{var child_14493 = cljs.core.first.call(null,seq__14473_14487__$1);__GT_document_fragment.call(null,result_frag,child_14493);
{
var G__14494 = cljs.core.next.call(null,seq__14473_14487__$1);
var G__14495 = null;
var G__14496 = 0;
var G__14497 = 0;
seq__14473_14477 = G__14494;
chunk__14474_14478 = G__14495;
count__14475_14479 = G__14496;
i__14476_14480 = G__14497;
continue;
}
}
} else
{}
}
break;
}
return result_frag;
} else
{if((data == null))
{return result_frag;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return dommy.template.throw_unable_to_make_node.call(null,data);
} else
{return null;
}
}
}
}
});
__GT_document_fragment = function(result_frag,data){
switch(arguments.length){
case 1:
return __GT_document_fragment__1.call(this,result_frag);
case 2:
return __GT_document_fragment__2.call(this,result_frag,data);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_document_fragment.cljs$core$IFn$_invoke$arity$1 = __GT_document_fragment__1;
__GT_document_fragment.cljs$core$IFn$_invoke$arity$2 = __GT_document_fragment__2;
return __GT_document_fragment;
})()
;
/**
* take data and return DOM node if it satisfies PElement and tries to
* make a document fragment otherwise
*/
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__14499 = data;if(G__14499)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__14499.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14499.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14499);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14499);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.__GT_document_fragment.call(null,data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__14500){var vec__14519 = p__14500;var tag_name = cljs.core.nth.call(null,vec__14519,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__14519,1,null);var children = cljs.core.nthnext.call(null,vec__14519,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((function (){var and__3941__auto__ = cljs.core.map_QMARK_.call(null,maybe_attrs);if(and__3941__auto__)
{return !((function (){var G__14520 = maybe_attrs;if(G__14520)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__14520.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14520.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14520);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14520);
}
})());
} else
{return and__3941__auto__;
}
})())?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__14521_14537 = cljs.core.seq.call(null,attrs);var chunk__14522_14538 = null;var count__14523_14539 = 0;var i__14524_14540 = 0;while(true){
if((i__14524_14540 < count__14523_14539))
{var vec__14525_14541 = cljs.core._nth.call(null,chunk__14522_14538,i__14524_14540);var k_14542 = cljs.core.nth.call(null,vec__14525_14541,0,null);var v_14543 = cljs.core.nth.call(null,vec__14525_14541,1,null);var G__14526_14544 = k_14542;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__14526_14544))
{var seq__14527_14545 = cljs.core.seq.call(null,v_14543);var chunk__14528_14546 = null;var count__14529_14547 = 0;var i__14530_14548 = 0;while(true){
if((i__14530_14548 < count__14529_14547))
{var c_14549 = cljs.core._nth.call(null,chunk__14528_14546,i__14530_14548);dommy.attrs.add_class_BANG_.call(null,n,c_14549);
{
var G__14550 = seq__14527_14545;
var G__14551 = chunk__14528_14546;
var G__14552 = count__14529_14547;
var G__14553 = (i__14530_14548 + 1);
seq__14527_14545 = G__14550;
chunk__14528_14546 = G__14551;
count__14529_14547 = G__14552;
i__14530_14548 = G__14553;
continue;
}
} else
{var temp__4092__auto___14554 = cljs.core.seq.call(null,seq__14527_14545);if(temp__4092__auto___14554)
{var seq__14527_14555__$1 = temp__4092__auto___14554;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14527_14555__$1))
{var c__6930__auto___14556 = cljs.core.chunk_first.call(null,seq__14527_14555__$1);{
var G__14557 = cljs.core.chunk_rest.call(null,seq__14527_14555__$1);
var G__14558 = c__6930__auto___14556;
var G__14559 = cljs.core.count.call(null,c__6930__auto___14556);
var G__14560 = 0;
seq__14527_14545 = G__14557;
chunk__14528_14546 = G__14558;
count__14529_14547 = G__14559;
i__14530_14548 = G__14560;
continue;
}
} else
{var c_14561 = cljs.core.first.call(null,seq__14527_14555__$1);dommy.attrs.add_class_BANG_.call(null,n,c_14561);
{
var G__14562 = cljs.core.next.call(null,seq__14527_14555__$1);
var G__14563 = null;
var G__14564 = 0;
var G__14565 = 0;
seq__14527_14545 = G__14562;
chunk__14528_14546 = G__14563;
count__14529_14547 = G__14564;
i__14530_14548 = G__14565;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__14526_14544))
{dommy.attrs.add_class_BANG_.call(null,n,v_14543);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_14542,v_14543);
} else
{}
}
}
{
var G__14566 = seq__14521_14537;
var G__14567 = chunk__14522_14538;
var G__14568 = count__14523_14539;
var G__14569 = (i__14524_14540 + 1);
seq__14521_14537 = G__14566;
chunk__14522_14538 = G__14567;
count__14523_14539 = G__14568;
i__14524_14540 = G__14569;
continue;
}
} else
{var temp__4092__auto___14570 = cljs.core.seq.call(null,seq__14521_14537);if(temp__4092__auto___14570)
{var seq__14521_14571__$1 = temp__4092__auto___14570;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14521_14571__$1))
{var c__6930__auto___14572 = cljs.core.chunk_first.call(null,seq__14521_14571__$1);{
var G__14573 = cljs.core.chunk_rest.call(null,seq__14521_14571__$1);
var G__14574 = c__6930__auto___14572;
var G__14575 = cljs.core.count.call(null,c__6930__auto___14572);
var G__14576 = 0;
seq__14521_14537 = G__14573;
chunk__14522_14538 = G__14574;
count__14523_14539 = G__14575;
i__14524_14540 = G__14576;
continue;
}
} else
{var vec__14531_14577 = cljs.core.first.call(null,seq__14521_14571__$1);var k_14578 = cljs.core.nth.call(null,vec__14531_14577,0,null);var v_14579 = cljs.core.nth.call(null,vec__14531_14577,1,null);var G__14532_14580 = k_14578;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__14532_14580))
{var seq__14533_14581 = cljs.core.seq.call(null,v_14579);var chunk__14534_14582 = null;var count__14535_14583 = 0;var i__14536_14584 = 0;while(true){
if((i__14536_14584 < count__14535_14583))
{var c_14585 = cljs.core._nth.call(null,chunk__14534_14582,i__14536_14584);dommy.attrs.add_class_BANG_.call(null,n,c_14585);
{
var G__14586 = seq__14533_14581;
var G__14587 = chunk__14534_14582;
var G__14588 = count__14535_14583;
var G__14589 = (i__14536_14584 + 1);
seq__14533_14581 = G__14586;
chunk__14534_14582 = G__14587;
count__14535_14583 = G__14588;
i__14536_14584 = G__14589;
continue;
}
} else
{var temp__4092__auto___14590__$1 = cljs.core.seq.call(null,seq__14533_14581);if(temp__4092__auto___14590__$1)
{var seq__14533_14591__$1 = temp__4092__auto___14590__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14533_14591__$1))
{var c__6930__auto___14592 = cljs.core.chunk_first.call(null,seq__14533_14591__$1);{
var G__14593 = cljs.core.chunk_rest.call(null,seq__14533_14591__$1);
var G__14594 = c__6930__auto___14592;
var G__14595 = cljs.core.count.call(null,c__6930__auto___14592);
var G__14596 = 0;
seq__14533_14581 = G__14593;
chunk__14534_14582 = G__14594;
count__14535_14583 = G__14595;
i__14536_14584 = G__14596;
continue;
}
} else
{var c_14597 = cljs.core.first.call(null,seq__14533_14591__$1);dommy.attrs.add_class_BANG_.call(null,n,c_14597);
{
var G__14598 = cljs.core.next.call(null,seq__14533_14591__$1);
var G__14599 = null;
var G__14600 = 0;
var G__14601 = 0;
seq__14533_14581 = G__14598;
chunk__14534_14582 = G__14599;
count__14535_14583 = G__14600;
i__14536_14584 = G__14601;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__14532_14580))
{dommy.attrs.add_class_BANG_.call(null,n,v_14579);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_14578,v_14579);
} else
{}
}
}
{
var G__14602 = cljs.core.next.call(null,seq__14521_14571__$1);
var G__14603 = null;
var G__14604 = 0;
var G__14605 = 0;
seq__14521_14537 = G__14602;
chunk__14522_14538 = G__14603;
count__14523_14539 = G__14604;
i__14524_14540 = G__14605;
continue;
}
}
} else
{}
}
break;
}
n.appendChild(dommy.template.__GT_node_like.call(null,children__$1));
return n;
});
(dommy.template.PElement["string"] = true);
(dommy.template._elem["string"] = (function (this$){if((this$ instanceof cljs.core.Keyword))
{return dommy.template.base_element.call(null,this$);
} else
{return document.createTextNode([cljs.core.str(this$)].join(''));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){return document.createTextNode([cljs.core.str(this$)].join(''));
}));
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){return dommy.template.compound_element.call(null,this$);
});
Document.prototype.dommy$template$PElement$ = true;
Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){return this$;
});
Text.prototype.dommy$template$PElement$ = true;
Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){return this$;
});
DocumentFragment.prototype.dommy$template$PElement$ = true;
DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){return this$;
});
HTMLElement.prototype.dommy$template$PElement$ = true;
HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){return this$;
});
try{Window.prototype.dommy$template$PElement$ = true;
Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){return this$;
});
}catch (e14606){if((e14606 instanceof ReferenceError))
{var __14607 = e14606;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14606;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__14609 = data;if(G__14609)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__14609.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14609.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14609);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14609);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){var parent = document.createElement("div");parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq.call(null,Array.prototype.slice.call(parent.childNodes));
});
