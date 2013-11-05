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
{var x__6795__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (dommy.template._elem[goog.typeOf(x__6795__auto__)]);if(or__3943__auto__)
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
{var str_14456 = node_str.substring(base_idx);while(true){
var next_idx_14457 = dommy.template.next_css_index.call(null,str_14456,1);var frag_14458 = (((next_idx_14457 >= 0))?str_14456.substring(0,next_idx_14457):str_14456);var G__14455_14459 = frag_14458.charAt(0);if(cljs.core._EQ_.call(null,"#",G__14455_14459))
{node.setAttribute("id",frag_14458.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__14455_14459))
{dommy.attrs.add_class_BANG_.call(null,node,frag_14458.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_14458.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_14457 >= 0))
{{
var G__14460 = str_14456.substring(next_idx_14457);
str_14456 = G__14460;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__14466 = data;if(G__14466)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__14466.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14466.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14466);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14466);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__14467_14471 = cljs.core.seq.call(null,data);var chunk__14468_14472 = null;var count__14469_14473 = 0;var i__14470_14474 = 0;while(true){
if((i__14470_14474 < count__14469_14473))
{var child_14475 = cljs.core._nth.call(null,chunk__14468_14472,i__14470_14474);__GT_document_fragment.call(null,result_frag,child_14475);
{
var G__14476 = seq__14467_14471;
var G__14477 = chunk__14468_14472;
var G__14478 = count__14469_14473;
var G__14479 = (i__14470_14474 + 1);
seq__14467_14471 = G__14476;
chunk__14468_14472 = G__14477;
count__14469_14473 = G__14478;
i__14470_14474 = G__14479;
continue;
}
} else
{var temp__4092__auto___14480 = cljs.core.seq.call(null,seq__14467_14471);if(temp__4092__auto___14480)
{var seq__14467_14481__$1 = temp__4092__auto___14480;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14467_14481__$1))
{var c__6912__auto___14482 = cljs.core.chunk_first.call(null,seq__14467_14481__$1);{
var G__14483 = cljs.core.chunk_rest.call(null,seq__14467_14481__$1);
var G__14484 = c__6912__auto___14482;
var G__14485 = cljs.core.count.call(null,c__6912__auto___14482);
var G__14486 = 0;
seq__14467_14471 = G__14483;
chunk__14468_14472 = G__14484;
count__14469_14473 = G__14485;
i__14470_14474 = G__14486;
continue;
}
} else
{var child_14487 = cljs.core.first.call(null,seq__14467_14481__$1);__GT_document_fragment.call(null,result_frag,child_14487);
{
var G__14488 = cljs.core.next.call(null,seq__14467_14481__$1);
var G__14489 = null;
var G__14490 = 0;
var G__14491 = 0;
seq__14467_14471 = G__14488;
chunk__14468_14472 = G__14489;
count__14469_14473 = G__14490;
i__14470_14474 = G__14491;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__14493 = data;if(G__14493)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__14493.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14493.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14493);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14493);
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
dommy.template.compound_element = (function compound_element(p__14494){var vec__14513 = p__14494;var tag_name = cljs.core.nth.call(null,vec__14513,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__14513,1,null);var children = cljs.core.nthnext.call(null,vec__14513,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((function (){var and__3941__auto__ = cljs.core.map_QMARK_.call(null,maybe_attrs);if(and__3941__auto__)
{return !((function (){var G__14514 = maybe_attrs;if(G__14514)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__14514.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14514.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14514);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14514);
}
})());
} else
{return and__3941__auto__;
}
})())?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__14515_14531 = cljs.core.seq.call(null,attrs);var chunk__14516_14532 = null;var count__14517_14533 = 0;var i__14518_14534 = 0;while(true){
if((i__14518_14534 < count__14517_14533))
{var vec__14519_14535 = cljs.core._nth.call(null,chunk__14516_14532,i__14518_14534);var k_14536 = cljs.core.nth.call(null,vec__14519_14535,0,null);var v_14537 = cljs.core.nth.call(null,vec__14519_14535,1,null);var G__14520_14538 = k_14536;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__14520_14538))
{var seq__14521_14539 = cljs.core.seq.call(null,v_14537);var chunk__14522_14540 = null;var count__14523_14541 = 0;var i__14524_14542 = 0;while(true){
if((i__14524_14542 < count__14523_14541))
{var c_14543 = cljs.core._nth.call(null,chunk__14522_14540,i__14524_14542);dommy.attrs.add_class_BANG_.call(null,n,c_14543);
{
var G__14544 = seq__14521_14539;
var G__14545 = chunk__14522_14540;
var G__14546 = count__14523_14541;
var G__14547 = (i__14524_14542 + 1);
seq__14521_14539 = G__14544;
chunk__14522_14540 = G__14545;
count__14523_14541 = G__14546;
i__14524_14542 = G__14547;
continue;
}
} else
{var temp__4092__auto___14548 = cljs.core.seq.call(null,seq__14521_14539);if(temp__4092__auto___14548)
{var seq__14521_14549__$1 = temp__4092__auto___14548;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14521_14549__$1))
{var c__6912__auto___14550 = cljs.core.chunk_first.call(null,seq__14521_14549__$1);{
var G__14551 = cljs.core.chunk_rest.call(null,seq__14521_14549__$1);
var G__14552 = c__6912__auto___14550;
var G__14553 = cljs.core.count.call(null,c__6912__auto___14550);
var G__14554 = 0;
seq__14521_14539 = G__14551;
chunk__14522_14540 = G__14552;
count__14523_14541 = G__14553;
i__14524_14542 = G__14554;
continue;
}
} else
{var c_14555 = cljs.core.first.call(null,seq__14521_14549__$1);dommy.attrs.add_class_BANG_.call(null,n,c_14555);
{
var G__14556 = cljs.core.next.call(null,seq__14521_14549__$1);
var G__14557 = null;
var G__14558 = 0;
var G__14559 = 0;
seq__14521_14539 = G__14556;
chunk__14522_14540 = G__14557;
count__14523_14541 = G__14558;
i__14524_14542 = G__14559;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__14520_14538))
{dommy.attrs.add_class_BANG_.call(null,n,v_14537);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_14536,v_14537);
} else
{}
}
}
{
var G__14560 = seq__14515_14531;
var G__14561 = chunk__14516_14532;
var G__14562 = count__14517_14533;
var G__14563 = (i__14518_14534 + 1);
seq__14515_14531 = G__14560;
chunk__14516_14532 = G__14561;
count__14517_14533 = G__14562;
i__14518_14534 = G__14563;
continue;
}
} else
{var temp__4092__auto___14564 = cljs.core.seq.call(null,seq__14515_14531);if(temp__4092__auto___14564)
{var seq__14515_14565__$1 = temp__4092__auto___14564;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14515_14565__$1))
{var c__6912__auto___14566 = cljs.core.chunk_first.call(null,seq__14515_14565__$1);{
var G__14567 = cljs.core.chunk_rest.call(null,seq__14515_14565__$1);
var G__14568 = c__6912__auto___14566;
var G__14569 = cljs.core.count.call(null,c__6912__auto___14566);
var G__14570 = 0;
seq__14515_14531 = G__14567;
chunk__14516_14532 = G__14568;
count__14517_14533 = G__14569;
i__14518_14534 = G__14570;
continue;
}
} else
{var vec__14525_14571 = cljs.core.first.call(null,seq__14515_14565__$1);var k_14572 = cljs.core.nth.call(null,vec__14525_14571,0,null);var v_14573 = cljs.core.nth.call(null,vec__14525_14571,1,null);var G__14526_14574 = k_14572;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__14526_14574))
{var seq__14527_14575 = cljs.core.seq.call(null,v_14573);var chunk__14528_14576 = null;var count__14529_14577 = 0;var i__14530_14578 = 0;while(true){
if((i__14530_14578 < count__14529_14577))
{var c_14579 = cljs.core._nth.call(null,chunk__14528_14576,i__14530_14578);dommy.attrs.add_class_BANG_.call(null,n,c_14579);
{
var G__14580 = seq__14527_14575;
var G__14581 = chunk__14528_14576;
var G__14582 = count__14529_14577;
var G__14583 = (i__14530_14578 + 1);
seq__14527_14575 = G__14580;
chunk__14528_14576 = G__14581;
count__14529_14577 = G__14582;
i__14530_14578 = G__14583;
continue;
}
} else
{var temp__4092__auto___14584__$1 = cljs.core.seq.call(null,seq__14527_14575);if(temp__4092__auto___14584__$1)
{var seq__14527_14585__$1 = temp__4092__auto___14584__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14527_14585__$1))
{var c__6912__auto___14586 = cljs.core.chunk_first.call(null,seq__14527_14585__$1);{
var G__14587 = cljs.core.chunk_rest.call(null,seq__14527_14585__$1);
var G__14588 = c__6912__auto___14586;
var G__14589 = cljs.core.count.call(null,c__6912__auto___14586);
var G__14590 = 0;
seq__14527_14575 = G__14587;
chunk__14528_14576 = G__14588;
count__14529_14577 = G__14589;
i__14530_14578 = G__14590;
continue;
}
} else
{var c_14591 = cljs.core.first.call(null,seq__14527_14585__$1);dommy.attrs.add_class_BANG_.call(null,n,c_14591);
{
var G__14592 = cljs.core.next.call(null,seq__14527_14585__$1);
var G__14593 = null;
var G__14594 = 0;
var G__14595 = 0;
seq__14527_14575 = G__14592;
chunk__14528_14576 = G__14593;
count__14529_14577 = G__14594;
i__14530_14578 = G__14595;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__14526_14574))
{dommy.attrs.add_class_BANG_.call(null,n,v_14573);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_14572,v_14573);
} else
{}
}
}
{
var G__14596 = cljs.core.next.call(null,seq__14515_14565__$1);
var G__14597 = null;
var G__14598 = 0;
var G__14599 = 0;
seq__14515_14531 = G__14596;
chunk__14516_14532 = G__14597;
count__14517_14533 = G__14598;
i__14518_14534 = G__14599;
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
}catch (e14600){if((e14600 instanceof ReferenceError))
{var __14601 = e14600;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14600;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__14603 = data;if(G__14603)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__14603.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14603.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14603);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14603);
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
