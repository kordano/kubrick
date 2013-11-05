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
{var x__6807__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (dommy.template._elem[goog.typeOf(x__6807__auto__)]);if(or__3943__auto__)
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
{var str_14469 = node_str.substring(base_idx);while(true){
var next_idx_14470 = dommy.template.next_css_index.call(null,str_14469,1);var frag_14471 = (((next_idx_14470 >= 0))?str_14469.substring(0,next_idx_14470):str_14469);var G__14468_14472 = frag_14471.charAt(0);if(cljs.core._EQ_.call(null,"#",G__14468_14472))
{node.setAttribute("id",frag_14471.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__14468_14472))
{dommy.attrs.add_class_BANG_.call(null,node,frag_14471.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_14471.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_14470 >= 0))
{{
var G__14473 = str_14469.substring(next_idx_14470);
str_14469 = G__14473;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__14479 = data;if(G__14479)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__14479.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14479.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14479);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14479);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__14480_14484 = cljs.core.seq.call(null,data);var chunk__14481_14485 = null;var count__14482_14486 = 0;var i__14483_14487 = 0;while(true){
if((i__14483_14487 < count__14482_14486))
{var child_14488 = cljs.core._nth.call(null,chunk__14481_14485,i__14483_14487);__GT_document_fragment.call(null,result_frag,child_14488);
{
var G__14489 = seq__14480_14484;
var G__14490 = chunk__14481_14485;
var G__14491 = count__14482_14486;
var G__14492 = (i__14483_14487 + 1);
seq__14480_14484 = G__14489;
chunk__14481_14485 = G__14490;
count__14482_14486 = G__14491;
i__14483_14487 = G__14492;
continue;
}
} else
{var temp__4092__auto___14493 = cljs.core.seq.call(null,seq__14480_14484);if(temp__4092__auto___14493)
{var seq__14480_14494__$1 = temp__4092__auto___14493;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14480_14494__$1))
{var c__6932__auto___14495 = cljs.core.chunk_first.call(null,seq__14480_14494__$1);{
var G__14496 = cljs.core.chunk_rest.call(null,seq__14480_14494__$1);
var G__14497 = c__6932__auto___14495;
var G__14498 = cljs.core.count.call(null,c__6932__auto___14495);
var G__14499 = 0;
seq__14480_14484 = G__14496;
chunk__14481_14485 = G__14497;
count__14482_14486 = G__14498;
i__14483_14487 = G__14499;
continue;
}
} else
{var child_14500 = cljs.core.first.call(null,seq__14480_14494__$1);__GT_document_fragment.call(null,result_frag,child_14500);
{
var G__14501 = cljs.core.next.call(null,seq__14480_14494__$1);
var G__14502 = null;
var G__14503 = 0;
var G__14504 = 0;
seq__14480_14484 = G__14501;
chunk__14481_14485 = G__14502;
count__14482_14486 = G__14503;
i__14483_14487 = G__14504;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__14506 = data;if(G__14506)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__14506.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14506.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14506);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14506);
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
dommy.template.compound_element = (function compound_element(p__14507){var vec__14526 = p__14507;var tag_name = cljs.core.nth.call(null,vec__14526,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__14526,1,null);var children = cljs.core.nthnext.call(null,vec__14526,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((function (){var and__3941__auto__ = cljs.core.map_QMARK_.call(null,maybe_attrs);if(and__3941__auto__)
{return !((function (){var G__14527 = maybe_attrs;if(G__14527)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__14527.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14527.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14527);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14527);
}
})());
} else
{return and__3941__auto__;
}
})())?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__14528_14544 = cljs.core.seq.call(null,attrs);var chunk__14529_14545 = null;var count__14530_14546 = 0;var i__14531_14547 = 0;while(true){
if((i__14531_14547 < count__14530_14546))
{var vec__14532_14548 = cljs.core._nth.call(null,chunk__14529_14545,i__14531_14547);var k_14549 = cljs.core.nth.call(null,vec__14532_14548,0,null);var v_14550 = cljs.core.nth.call(null,vec__14532_14548,1,null);var G__14533_14551 = k_14549;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__14533_14551))
{var seq__14534_14552 = cljs.core.seq.call(null,v_14550);var chunk__14535_14553 = null;var count__14536_14554 = 0;var i__14537_14555 = 0;while(true){
if((i__14537_14555 < count__14536_14554))
{var c_14556 = cljs.core._nth.call(null,chunk__14535_14553,i__14537_14555);dommy.attrs.add_class_BANG_.call(null,n,c_14556);
{
var G__14557 = seq__14534_14552;
var G__14558 = chunk__14535_14553;
var G__14559 = count__14536_14554;
var G__14560 = (i__14537_14555 + 1);
seq__14534_14552 = G__14557;
chunk__14535_14553 = G__14558;
count__14536_14554 = G__14559;
i__14537_14555 = G__14560;
continue;
}
} else
{var temp__4092__auto___14561 = cljs.core.seq.call(null,seq__14534_14552);if(temp__4092__auto___14561)
{var seq__14534_14562__$1 = temp__4092__auto___14561;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14534_14562__$1))
{var c__6932__auto___14563 = cljs.core.chunk_first.call(null,seq__14534_14562__$1);{
var G__14564 = cljs.core.chunk_rest.call(null,seq__14534_14562__$1);
var G__14565 = c__6932__auto___14563;
var G__14566 = cljs.core.count.call(null,c__6932__auto___14563);
var G__14567 = 0;
seq__14534_14552 = G__14564;
chunk__14535_14553 = G__14565;
count__14536_14554 = G__14566;
i__14537_14555 = G__14567;
continue;
}
} else
{var c_14568 = cljs.core.first.call(null,seq__14534_14562__$1);dommy.attrs.add_class_BANG_.call(null,n,c_14568);
{
var G__14569 = cljs.core.next.call(null,seq__14534_14562__$1);
var G__14570 = null;
var G__14571 = 0;
var G__14572 = 0;
seq__14534_14552 = G__14569;
chunk__14535_14553 = G__14570;
count__14536_14554 = G__14571;
i__14537_14555 = G__14572;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__14533_14551))
{dommy.attrs.add_class_BANG_.call(null,n,v_14550);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_14549,v_14550);
} else
{}
}
}
{
var G__14573 = seq__14528_14544;
var G__14574 = chunk__14529_14545;
var G__14575 = count__14530_14546;
var G__14576 = (i__14531_14547 + 1);
seq__14528_14544 = G__14573;
chunk__14529_14545 = G__14574;
count__14530_14546 = G__14575;
i__14531_14547 = G__14576;
continue;
}
} else
{var temp__4092__auto___14577 = cljs.core.seq.call(null,seq__14528_14544);if(temp__4092__auto___14577)
{var seq__14528_14578__$1 = temp__4092__auto___14577;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14528_14578__$1))
{var c__6932__auto___14579 = cljs.core.chunk_first.call(null,seq__14528_14578__$1);{
var G__14580 = cljs.core.chunk_rest.call(null,seq__14528_14578__$1);
var G__14581 = c__6932__auto___14579;
var G__14582 = cljs.core.count.call(null,c__6932__auto___14579);
var G__14583 = 0;
seq__14528_14544 = G__14580;
chunk__14529_14545 = G__14581;
count__14530_14546 = G__14582;
i__14531_14547 = G__14583;
continue;
}
} else
{var vec__14538_14584 = cljs.core.first.call(null,seq__14528_14578__$1);var k_14585 = cljs.core.nth.call(null,vec__14538_14584,0,null);var v_14586 = cljs.core.nth.call(null,vec__14538_14584,1,null);var G__14539_14587 = k_14585;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__14539_14587))
{var seq__14540_14588 = cljs.core.seq.call(null,v_14586);var chunk__14541_14589 = null;var count__14542_14590 = 0;var i__14543_14591 = 0;while(true){
if((i__14543_14591 < count__14542_14590))
{var c_14592 = cljs.core._nth.call(null,chunk__14541_14589,i__14543_14591);dommy.attrs.add_class_BANG_.call(null,n,c_14592);
{
var G__14593 = seq__14540_14588;
var G__14594 = chunk__14541_14589;
var G__14595 = count__14542_14590;
var G__14596 = (i__14543_14591 + 1);
seq__14540_14588 = G__14593;
chunk__14541_14589 = G__14594;
count__14542_14590 = G__14595;
i__14543_14591 = G__14596;
continue;
}
} else
{var temp__4092__auto___14597__$1 = cljs.core.seq.call(null,seq__14540_14588);if(temp__4092__auto___14597__$1)
{var seq__14540_14598__$1 = temp__4092__auto___14597__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14540_14598__$1))
{var c__6932__auto___14599 = cljs.core.chunk_first.call(null,seq__14540_14598__$1);{
var G__14600 = cljs.core.chunk_rest.call(null,seq__14540_14598__$1);
var G__14601 = c__6932__auto___14599;
var G__14602 = cljs.core.count.call(null,c__6932__auto___14599);
var G__14603 = 0;
seq__14540_14588 = G__14600;
chunk__14541_14589 = G__14601;
count__14542_14590 = G__14602;
i__14543_14591 = G__14603;
continue;
}
} else
{var c_14604 = cljs.core.first.call(null,seq__14540_14598__$1);dommy.attrs.add_class_BANG_.call(null,n,c_14604);
{
var G__14605 = cljs.core.next.call(null,seq__14540_14598__$1);
var G__14606 = null;
var G__14607 = 0;
var G__14608 = 0;
seq__14540_14588 = G__14605;
chunk__14541_14589 = G__14606;
count__14542_14590 = G__14607;
i__14543_14591 = G__14608;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__14539_14587))
{dommy.attrs.add_class_BANG_.call(null,n,v_14586);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_14585,v_14586);
} else
{}
}
}
{
var G__14609 = cljs.core.next.call(null,seq__14528_14578__$1);
var G__14610 = null;
var G__14611 = 0;
var G__14612 = 0;
seq__14528_14544 = G__14609;
chunk__14529_14545 = G__14610;
count__14530_14546 = G__14611;
i__14531_14547 = G__14612;
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
}catch (e14613){if((e14613 instanceof ReferenceError))
{var __14614 = e14613;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14613;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__14616 = data;if(G__14616)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__14616.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14616.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14616);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14616);
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
