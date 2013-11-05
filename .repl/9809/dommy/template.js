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
{var x__6841__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (dommy.template._elem[goog.typeOf(x__6841__auto__)]);if(or__3943__auto__)
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
{var str_14500 = node_str.substring(base_idx);while(true){
var next_idx_14501 = dommy.template.next_css_index.call(null,str_14500,1);var frag_14502 = (((next_idx_14501 >= 0))?str_14500.substring(0,next_idx_14501):str_14500);var G__14499_14503 = frag_14502.charAt(0);if(cljs.core._EQ_.call(null,"#",G__14499_14503))
{node.setAttribute("id",frag_14502.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__14499_14503))
{dommy.attrs.add_class_BANG_.call(null,node,frag_14502.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_14502.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_14501 >= 0))
{{
var G__14504 = str_14500.substring(next_idx_14501);
str_14500 = G__14504;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__14510 = data;if(G__14510)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__14510.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14510.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14510);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14510);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__14511_14515 = cljs.core.seq.call(null,data);var chunk__14512_14516 = null;var count__14513_14517 = 0;var i__14514_14518 = 0;while(true){
if((i__14514_14518 < count__14513_14517))
{var child_14519 = cljs.core._nth.call(null,chunk__14512_14516,i__14514_14518);__GT_document_fragment.call(null,result_frag,child_14519);
{
var G__14520 = seq__14511_14515;
var G__14521 = chunk__14512_14516;
var G__14522 = count__14513_14517;
var G__14523 = (i__14514_14518 + 1);
seq__14511_14515 = G__14520;
chunk__14512_14516 = G__14521;
count__14513_14517 = G__14522;
i__14514_14518 = G__14523;
continue;
}
} else
{var temp__4092__auto___14524 = cljs.core.seq.call(null,seq__14511_14515);if(temp__4092__auto___14524)
{var seq__14511_14525__$1 = temp__4092__auto___14524;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14511_14525__$1))
{var c__6962__auto___14526 = cljs.core.chunk_first.call(null,seq__14511_14525__$1);{
var G__14527 = cljs.core.chunk_rest.call(null,seq__14511_14525__$1);
var G__14528 = c__6962__auto___14526;
var G__14529 = cljs.core.count.call(null,c__6962__auto___14526);
var G__14530 = 0;
seq__14511_14515 = G__14527;
chunk__14512_14516 = G__14528;
count__14513_14517 = G__14529;
i__14514_14518 = G__14530;
continue;
}
} else
{var child_14531 = cljs.core.first.call(null,seq__14511_14525__$1);__GT_document_fragment.call(null,result_frag,child_14531);
{
var G__14532 = cljs.core.next.call(null,seq__14511_14525__$1);
var G__14533 = null;
var G__14534 = 0;
var G__14535 = 0;
seq__14511_14515 = G__14532;
chunk__14512_14516 = G__14533;
count__14513_14517 = G__14534;
i__14514_14518 = G__14535;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__14537 = data;if(G__14537)
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
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.__GT_document_fragment.call(null,data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__14538){var vec__14557 = p__14538;var tag_name = cljs.core.nth.call(null,vec__14557,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__14557,1,null);var children = cljs.core.nthnext.call(null,vec__14557,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((function (){var and__3941__auto__ = cljs.core.map_QMARK_.call(null,maybe_attrs);if(and__3941__auto__)
{return !((function (){var G__14558 = maybe_attrs;if(G__14558)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__14558.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14558.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14558);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14558);
}
})());
} else
{return and__3941__auto__;
}
})())?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__14559_14575 = cljs.core.seq.call(null,attrs);var chunk__14560_14576 = null;var count__14561_14577 = 0;var i__14562_14578 = 0;while(true){
if((i__14562_14578 < count__14561_14577))
{var vec__14563_14579 = cljs.core._nth.call(null,chunk__14560_14576,i__14562_14578);var k_14580 = cljs.core.nth.call(null,vec__14563_14579,0,null);var v_14581 = cljs.core.nth.call(null,vec__14563_14579,1,null);var G__14564_14582 = k_14580;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__14564_14582))
{var seq__14565_14583 = cljs.core.seq.call(null,v_14581);var chunk__14566_14584 = null;var count__14567_14585 = 0;var i__14568_14586 = 0;while(true){
if((i__14568_14586 < count__14567_14585))
{var c_14587 = cljs.core._nth.call(null,chunk__14566_14584,i__14568_14586);dommy.attrs.add_class_BANG_.call(null,n,c_14587);
{
var G__14588 = seq__14565_14583;
var G__14589 = chunk__14566_14584;
var G__14590 = count__14567_14585;
var G__14591 = (i__14568_14586 + 1);
seq__14565_14583 = G__14588;
chunk__14566_14584 = G__14589;
count__14567_14585 = G__14590;
i__14568_14586 = G__14591;
continue;
}
} else
{var temp__4092__auto___14592 = cljs.core.seq.call(null,seq__14565_14583);if(temp__4092__auto___14592)
{var seq__14565_14593__$1 = temp__4092__auto___14592;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14565_14593__$1))
{var c__6962__auto___14594 = cljs.core.chunk_first.call(null,seq__14565_14593__$1);{
var G__14595 = cljs.core.chunk_rest.call(null,seq__14565_14593__$1);
var G__14596 = c__6962__auto___14594;
var G__14597 = cljs.core.count.call(null,c__6962__auto___14594);
var G__14598 = 0;
seq__14565_14583 = G__14595;
chunk__14566_14584 = G__14596;
count__14567_14585 = G__14597;
i__14568_14586 = G__14598;
continue;
}
} else
{var c_14599 = cljs.core.first.call(null,seq__14565_14593__$1);dommy.attrs.add_class_BANG_.call(null,n,c_14599);
{
var G__14600 = cljs.core.next.call(null,seq__14565_14593__$1);
var G__14601 = null;
var G__14602 = 0;
var G__14603 = 0;
seq__14565_14583 = G__14600;
chunk__14566_14584 = G__14601;
count__14567_14585 = G__14602;
i__14568_14586 = G__14603;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__14564_14582))
{dommy.attrs.add_class_BANG_.call(null,n,v_14581);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_14580,v_14581);
} else
{}
}
}
{
var G__14604 = seq__14559_14575;
var G__14605 = chunk__14560_14576;
var G__14606 = count__14561_14577;
var G__14607 = (i__14562_14578 + 1);
seq__14559_14575 = G__14604;
chunk__14560_14576 = G__14605;
count__14561_14577 = G__14606;
i__14562_14578 = G__14607;
continue;
}
} else
{var temp__4092__auto___14608 = cljs.core.seq.call(null,seq__14559_14575);if(temp__4092__auto___14608)
{var seq__14559_14609__$1 = temp__4092__auto___14608;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14559_14609__$1))
{var c__6962__auto___14610 = cljs.core.chunk_first.call(null,seq__14559_14609__$1);{
var G__14611 = cljs.core.chunk_rest.call(null,seq__14559_14609__$1);
var G__14612 = c__6962__auto___14610;
var G__14613 = cljs.core.count.call(null,c__6962__auto___14610);
var G__14614 = 0;
seq__14559_14575 = G__14611;
chunk__14560_14576 = G__14612;
count__14561_14577 = G__14613;
i__14562_14578 = G__14614;
continue;
}
} else
{var vec__14569_14615 = cljs.core.first.call(null,seq__14559_14609__$1);var k_14616 = cljs.core.nth.call(null,vec__14569_14615,0,null);var v_14617 = cljs.core.nth.call(null,vec__14569_14615,1,null);var G__14570_14618 = k_14616;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__14570_14618))
{var seq__14571_14619 = cljs.core.seq.call(null,v_14617);var chunk__14572_14620 = null;var count__14573_14621 = 0;var i__14574_14622 = 0;while(true){
if((i__14574_14622 < count__14573_14621))
{var c_14623 = cljs.core._nth.call(null,chunk__14572_14620,i__14574_14622);dommy.attrs.add_class_BANG_.call(null,n,c_14623);
{
var G__14624 = seq__14571_14619;
var G__14625 = chunk__14572_14620;
var G__14626 = count__14573_14621;
var G__14627 = (i__14574_14622 + 1);
seq__14571_14619 = G__14624;
chunk__14572_14620 = G__14625;
count__14573_14621 = G__14626;
i__14574_14622 = G__14627;
continue;
}
} else
{var temp__4092__auto___14628__$1 = cljs.core.seq.call(null,seq__14571_14619);if(temp__4092__auto___14628__$1)
{var seq__14571_14629__$1 = temp__4092__auto___14628__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14571_14629__$1))
{var c__6962__auto___14630 = cljs.core.chunk_first.call(null,seq__14571_14629__$1);{
var G__14631 = cljs.core.chunk_rest.call(null,seq__14571_14629__$1);
var G__14632 = c__6962__auto___14630;
var G__14633 = cljs.core.count.call(null,c__6962__auto___14630);
var G__14634 = 0;
seq__14571_14619 = G__14631;
chunk__14572_14620 = G__14632;
count__14573_14621 = G__14633;
i__14574_14622 = G__14634;
continue;
}
} else
{var c_14635 = cljs.core.first.call(null,seq__14571_14629__$1);dommy.attrs.add_class_BANG_.call(null,n,c_14635);
{
var G__14636 = cljs.core.next.call(null,seq__14571_14629__$1);
var G__14637 = null;
var G__14638 = 0;
var G__14639 = 0;
seq__14571_14619 = G__14636;
chunk__14572_14620 = G__14637;
count__14573_14621 = G__14638;
i__14574_14622 = G__14639;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__14570_14618))
{dommy.attrs.add_class_BANG_.call(null,n,v_14617);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_14616,v_14617);
} else
{}
}
}
{
var G__14640 = cljs.core.next.call(null,seq__14559_14609__$1);
var G__14641 = null;
var G__14642 = 0;
var G__14643 = 0;
seq__14559_14575 = G__14640;
chunk__14560_14576 = G__14641;
count__14561_14577 = G__14642;
i__14562_14578 = G__14643;
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
}catch (e14644){if((e14644 instanceof ReferenceError))
{var __14645 = e14644;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14644;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__14647 = data;if(G__14647)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__14647.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14647.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14647);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14647);
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
