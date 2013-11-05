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
{var x__6806__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (dommy.template._elem[goog.typeOf(x__6806__auto__)]);if(or__3943__auto__)
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
{var str_14479 = node_str.substring(base_idx);while(true){
var next_idx_14480 = dommy.template.next_css_index.call(null,str_14479,1);var frag_14481 = (((next_idx_14480 >= 0))?str_14479.substring(0,next_idx_14480):str_14479);var G__14478_14482 = frag_14481.charAt(0);if(cljs.core._EQ_.call(null,"#",G__14478_14482))
{node.setAttribute("id",frag_14481.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__14478_14482))
{dommy.attrs.add_class_BANG_.call(null,node,frag_14481.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_14481.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_14480 >= 0))
{{
var G__14483 = str_14479.substring(next_idx_14480);
str_14479 = G__14483;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__14489 = data;if(G__14489)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__14489.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14489.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14489);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14489);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__14490_14494 = cljs.core.seq.call(null,data);var chunk__14491_14495 = null;var count__14492_14496 = 0;var i__14493_14497 = 0;while(true){
if((i__14493_14497 < count__14492_14496))
{var child_14498 = cljs.core._nth.call(null,chunk__14491_14495,i__14493_14497);__GT_document_fragment.call(null,result_frag,child_14498);
{
var G__14499 = seq__14490_14494;
var G__14500 = chunk__14491_14495;
var G__14501 = count__14492_14496;
var G__14502 = (i__14493_14497 + 1);
seq__14490_14494 = G__14499;
chunk__14491_14495 = G__14500;
count__14492_14496 = G__14501;
i__14493_14497 = G__14502;
continue;
}
} else
{var temp__4092__auto___14503 = cljs.core.seq.call(null,seq__14490_14494);if(temp__4092__auto___14503)
{var seq__14490_14504__$1 = temp__4092__auto___14503;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14490_14504__$1))
{var c__6931__auto___14505 = cljs.core.chunk_first.call(null,seq__14490_14504__$1);{
var G__14506 = cljs.core.chunk_rest.call(null,seq__14490_14504__$1);
var G__14507 = c__6931__auto___14505;
var G__14508 = cljs.core.count.call(null,c__6931__auto___14505);
var G__14509 = 0;
seq__14490_14494 = G__14506;
chunk__14491_14495 = G__14507;
count__14492_14496 = G__14508;
i__14493_14497 = G__14509;
continue;
}
} else
{var child_14510 = cljs.core.first.call(null,seq__14490_14504__$1);__GT_document_fragment.call(null,result_frag,child_14510);
{
var G__14511 = cljs.core.next.call(null,seq__14490_14504__$1);
var G__14512 = null;
var G__14513 = 0;
var G__14514 = 0;
seq__14490_14494 = G__14511;
chunk__14491_14495 = G__14512;
count__14492_14496 = G__14513;
i__14493_14497 = G__14514;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__14516 = data;if(G__14516)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__14516.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14516.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14516);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14516);
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
dommy.template.compound_element = (function compound_element(p__14517){var vec__14536 = p__14517;var tag_name = cljs.core.nth.call(null,vec__14536,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__14536,1,null);var children = cljs.core.nthnext.call(null,vec__14536,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((function (){var and__3941__auto__ = cljs.core.map_QMARK_.call(null,maybe_attrs);if(and__3941__auto__)
{return !((function (){var G__14537 = maybe_attrs;if(G__14537)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__14537.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14537.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14537);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14537);
}
})());
} else
{return and__3941__auto__;
}
})())?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__14538_14554 = cljs.core.seq.call(null,attrs);var chunk__14539_14555 = null;var count__14540_14556 = 0;var i__14541_14557 = 0;while(true){
if((i__14541_14557 < count__14540_14556))
{var vec__14542_14558 = cljs.core._nth.call(null,chunk__14539_14555,i__14541_14557);var k_14559 = cljs.core.nth.call(null,vec__14542_14558,0,null);var v_14560 = cljs.core.nth.call(null,vec__14542_14558,1,null);var G__14543_14561 = k_14559;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__14543_14561))
{var seq__14544_14562 = cljs.core.seq.call(null,v_14560);var chunk__14545_14563 = null;var count__14546_14564 = 0;var i__14547_14565 = 0;while(true){
if((i__14547_14565 < count__14546_14564))
{var c_14566 = cljs.core._nth.call(null,chunk__14545_14563,i__14547_14565);dommy.attrs.add_class_BANG_.call(null,n,c_14566);
{
var G__14567 = seq__14544_14562;
var G__14568 = chunk__14545_14563;
var G__14569 = count__14546_14564;
var G__14570 = (i__14547_14565 + 1);
seq__14544_14562 = G__14567;
chunk__14545_14563 = G__14568;
count__14546_14564 = G__14569;
i__14547_14565 = G__14570;
continue;
}
} else
{var temp__4092__auto___14571 = cljs.core.seq.call(null,seq__14544_14562);if(temp__4092__auto___14571)
{var seq__14544_14572__$1 = temp__4092__auto___14571;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14544_14572__$1))
{var c__6931__auto___14573 = cljs.core.chunk_first.call(null,seq__14544_14572__$1);{
var G__14574 = cljs.core.chunk_rest.call(null,seq__14544_14572__$1);
var G__14575 = c__6931__auto___14573;
var G__14576 = cljs.core.count.call(null,c__6931__auto___14573);
var G__14577 = 0;
seq__14544_14562 = G__14574;
chunk__14545_14563 = G__14575;
count__14546_14564 = G__14576;
i__14547_14565 = G__14577;
continue;
}
} else
{var c_14578 = cljs.core.first.call(null,seq__14544_14572__$1);dommy.attrs.add_class_BANG_.call(null,n,c_14578);
{
var G__14579 = cljs.core.next.call(null,seq__14544_14572__$1);
var G__14580 = null;
var G__14581 = 0;
var G__14582 = 0;
seq__14544_14562 = G__14579;
chunk__14545_14563 = G__14580;
count__14546_14564 = G__14581;
i__14547_14565 = G__14582;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__14543_14561))
{dommy.attrs.add_class_BANG_.call(null,n,v_14560);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_14559,v_14560);
} else
{}
}
}
{
var G__14583 = seq__14538_14554;
var G__14584 = chunk__14539_14555;
var G__14585 = count__14540_14556;
var G__14586 = (i__14541_14557 + 1);
seq__14538_14554 = G__14583;
chunk__14539_14555 = G__14584;
count__14540_14556 = G__14585;
i__14541_14557 = G__14586;
continue;
}
} else
{var temp__4092__auto___14587 = cljs.core.seq.call(null,seq__14538_14554);if(temp__4092__auto___14587)
{var seq__14538_14588__$1 = temp__4092__auto___14587;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14538_14588__$1))
{var c__6931__auto___14589 = cljs.core.chunk_first.call(null,seq__14538_14588__$1);{
var G__14590 = cljs.core.chunk_rest.call(null,seq__14538_14588__$1);
var G__14591 = c__6931__auto___14589;
var G__14592 = cljs.core.count.call(null,c__6931__auto___14589);
var G__14593 = 0;
seq__14538_14554 = G__14590;
chunk__14539_14555 = G__14591;
count__14540_14556 = G__14592;
i__14541_14557 = G__14593;
continue;
}
} else
{var vec__14548_14594 = cljs.core.first.call(null,seq__14538_14588__$1);var k_14595 = cljs.core.nth.call(null,vec__14548_14594,0,null);var v_14596 = cljs.core.nth.call(null,vec__14548_14594,1,null);var G__14549_14597 = k_14595;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__14549_14597))
{var seq__14550_14598 = cljs.core.seq.call(null,v_14596);var chunk__14551_14599 = null;var count__14552_14600 = 0;var i__14553_14601 = 0;while(true){
if((i__14553_14601 < count__14552_14600))
{var c_14602 = cljs.core._nth.call(null,chunk__14551_14599,i__14553_14601);dommy.attrs.add_class_BANG_.call(null,n,c_14602);
{
var G__14603 = seq__14550_14598;
var G__14604 = chunk__14551_14599;
var G__14605 = count__14552_14600;
var G__14606 = (i__14553_14601 + 1);
seq__14550_14598 = G__14603;
chunk__14551_14599 = G__14604;
count__14552_14600 = G__14605;
i__14553_14601 = G__14606;
continue;
}
} else
{var temp__4092__auto___14607__$1 = cljs.core.seq.call(null,seq__14550_14598);if(temp__4092__auto___14607__$1)
{var seq__14550_14608__$1 = temp__4092__auto___14607__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14550_14608__$1))
{var c__6931__auto___14609 = cljs.core.chunk_first.call(null,seq__14550_14608__$1);{
var G__14610 = cljs.core.chunk_rest.call(null,seq__14550_14608__$1);
var G__14611 = c__6931__auto___14609;
var G__14612 = cljs.core.count.call(null,c__6931__auto___14609);
var G__14613 = 0;
seq__14550_14598 = G__14610;
chunk__14551_14599 = G__14611;
count__14552_14600 = G__14612;
i__14553_14601 = G__14613;
continue;
}
} else
{var c_14614 = cljs.core.first.call(null,seq__14550_14608__$1);dommy.attrs.add_class_BANG_.call(null,n,c_14614);
{
var G__14615 = cljs.core.next.call(null,seq__14550_14608__$1);
var G__14616 = null;
var G__14617 = 0;
var G__14618 = 0;
seq__14550_14598 = G__14615;
chunk__14551_14599 = G__14616;
count__14552_14600 = G__14617;
i__14553_14601 = G__14618;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__14549_14597))
{dommy.attrs.add_class_BANG_.call(null,n,v_14596);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_14595,v_14596);
} else
{}
}
}
{
var G__14619 = cljs.core.next.call(null,seq__14538_14588__$1);
var G__14620 = null;
var G__14621 = 0;
var G__14622 = 0;
seq__14538_14554 = G__14619;
chunk__14539_14555 = G__14620;
count__14540_14556 = G__14621;
i__14541_14557 = G__14622;
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
}catch (e14623){if((e14623 instanceof ReferenceError))
{var __14624 = e14623;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14623;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__14626 = data;if(G__14626)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__14626.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14626.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14626);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14626);
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
