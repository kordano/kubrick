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
{var x__19722__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (dommy.template._elem[goog.typeOf(x__19722__auto__)]);if(or__3943__auto__)
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
{var str_27419 = node_str.substring(base_idx);while(true){
var next_idx_27420 = dommy.template.next_css_index.call(null,str_27419,1);var frag_27421 = (((next_idx_27420 >= 0))?str_27419.substring(0,next_idx_27420):str_27419);var G__27418_27422 = frag_27421.charAt(0);if(cljs.core._EQ_.call(null,"#",G__27418_27422))
{node.setAttribute("id",frag_27421.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__27418_27422))
{dommy.attrs.add_class_BANG_.call(null,node,frag_27421.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_27421.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_27420 >= 0))
{{
var G__27423 = str_27419.substring(next_idx_27420);
str_27419 = G__27423;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__27429 = data;if(G__27429)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__27429.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__27429.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__27429);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__27429);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__27430_27434 = cljs.core.seq.call(null,data);var chunk__27431_27435 = null;var count__27432_27436 = 0;var i__27433_27437 = 0;while(true){
if((i__27433_27437 < count__27432_27436))
{var child_27438 = cljs.core._nth.call(null,chunk__27431_27435,i__27433_27437);__GT_document_fragment.call(null,result_frag,child_27438);
{
var G__27439 = seq__27430_27434;
var G__27440 = chunk__27431_27435;
var G__27441 = count__27432_27436;
var G__27442 = (i__27433_27437 + 1);
seq__27430_27434 = G__27439;
chunk__27431_27435 = G__27440;
count__27432_27436 = G__27441;
i__27433_27437 = G__27442;
continue;
}
} else
{var temp__4092__auto___27443 = cljs.core.seq.call(null,seq__27430_27434);if(temp__4092__auto___27443)
{var seq__27430_27444__$1 = temp__4092__auto___27443;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27430_27444__$1))
{var c__19849__auto___27445 = cljs.core.chunk_first.call(null,seq__27430_27444__$1);{
var G__27446 = cljs.core.chunk_rest.call(null,seq__27430_27444__$1);
var G__27447 = c__19849__auto___27445;
var G__27448 = cljs.core.count.call(null,c__19849__auto___27445);
var G__27449 = 0;
seq__27430_27434 = G__27446;
chunk__27431_27435 = G__27447;
count__27432_27436 = G__27448;
i__27433_27437 = G__27449;
continue;
}
} else
{var child_27450 = cljs.core.first.call(null,seq__27430_27444__$1);__GT_document_fragment.call(null,result_frag,child_27450);
{
var G__27451 = cljs.core.next.call(null,seq__27430_27444__$1);
var G__27452 = null;
var G__27453 = 0;
var G__27454 = 0;
seq__27430_27434 = G__27451;
chunk__27431_27435 = G__27452;
count__27432_27436 = G__27453;
i__27433_27437 = G__27454;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__27456 = data;if(G__27456)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__27456.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__27456.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__27456);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__27456);
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
dommy.template.compound_element = (function compound_element(p__27457){var vec__27476 = p__27457;var tag_name = cljs.core.nth.call(null,vec__27476,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__27476,1,null);var children = cljs.core.nthnext.call(null,vec__27476,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((function (){var and__3941__auto__ = cljs.core.map_QMARK_.call(null,maybe_attrs);if(and__3941__auto__)
{return !((function (){var G__27477 = maybe_attrs;if(G__27477)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__27477.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__27477.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__27477);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__27477);
}
})());
} else
{return and__3941__auto__;
}
})())?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__27478_27494 = cljs.core.seq.call(null,attrs);var chunk__27479_27495 = null;var count__27480_27496 = 0;var i__27481_27497 = 0;while(true){
if((i__27481_27497 < count__27480_27496))
{var vec__27482_27498 = cljs.core._nth.call(null,chunk__27479_27495,i__27481_27497);var k_27499 = cljs.core.nth.call(null,vec__27482_27498,0,null);var v_27500 = cljs.core.nth.call(null,vec__27482_27498,1,null);var G__27483_27501 = k_27499;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__27483_27501))
{var seq__27484_27502 = cljs.core.seq.call(null,v_27500);var chunk__27485_27503 = null;var count__27486_27504 = 0;var i__27487_27505 = 0;while(true){
if((i__27487_27505 < count__27486_27504))
{var c_27506 = cljs.core._nth.call(null,chunk__27485_27503,i__27487_27505);dommy.attrs.add_class_BANG_.call(null,n,c_27506);
{
var G__27507 = seq__27484_27502;
var G__27508 = chunk__27485_27503;
var G__27509 = count__27486_27504;
var G__27510 = (i__27487_27505 + 1);
seq__27484_27502 = G__27507;
chunk__27485_27503 = G__27508;
count__27486_27504 = G__27509;
i__27487_27505 = G__27510;
continue;
}
} else
{var temp__4092__auto___27511 = cljs.core.seq.call(null,seq__27484_27502);if(temp__4092__auto___27511)
{var seq__27484_27512__$1 = temp__4092__auto___27511;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27484_27512__$1))
{var c__19849__auto___27513 = cljs.core.chunk_first.call(null,seq__27484_27512__$1);{
var G__27514 = cljs.core.chunk_rest.call(null,seq__27484_27512__$1);
var G__27515 = c__19849__auto___27513;
var G__27516 = cljs.core.count.call(null,c__19849__auto___27513);
var G__27517 = 0;
seq__27484_27502 = G__27514;
chunk__27485_27503 = G__27515;
count__27486_27504 = G__27516;
i__27487_27505 = G__27517;
continue;
}
} else
{var c_27518 = cljs.core.first.call(null,seq__27484_27512__$1);dommy.attrs.add_class_BANG_.call(null,n,c_27518);
{
var G__27519 = cljs.core.next.call(null,seq__27484_27512__$1);
var G__27520 = null;
var G__27521 = 0;
var G__27522 = 0;
seq__27484_27502 = G__27519;
chunk__27485_27503 = G__27520;
count__27486_27504 = G__27521;
i__27487_27505 = G__27522;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__27483_27501))
{dommy.attrs.add_class_BANG_.call(null,n,v_27500);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_27499,v_27500);
} else
{}
}
}
{
var G__27523 = seq__27478_27494;
var G__27524 = chunk__27479_27495;
var G__27525 = count__27480_27496;
var G__27526 = (i__27481_27497 + 1);
seq__27478_27494 = G__27523;
chunk__27479_27495 = G__27524;
count__27480_27496 = G__27525;
i__27481_27497 = G__27526;
continue;
}
} else
{var temp__4092__auto___27527 = cljs.core.seq.call(null,seq__27478_27494);if(temp__4092__auto___27527)
{var seq__27478_27528__$1 = temp__4092__auto___27527;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27478_27528__$1))
{var c__19849__auto___27529 = cljs.core.chunk_first.call(null,seq__27478_27528__$1);{
var G__27530 = cljs.core.chunk_rest.call(null,seq__27478_27528__$1);
var G__27531 = c__19849__auto___27529;
var G__27532 = cljs.core.count.call(null,c__19849__auto___27529);
var G__27533 = 0;
seq__27478_27494 = G__27530;
chunk__27479_27495 = G__27531;
count__27480_27496 = G__27532;
i__27481_27497 = G__27533;
continue;
}
} else
{var vec__27488_27534 = cljs.core.first.call(null,seq__27478_27528__$1);var k_27535 = cljs.core.nth.call(null,vec__27488_27534,0,null);var v_27536 = cljs.core.nth.call(null,vec__27488_27534,1,null);var G__27489_27537 = k_27535;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__27489_27537))
{var seq__27490_27538 = cljs.core.seq.call(null,v_27536);var chunk__27491_27539 = null;var count__27492_27540 = 0;var i__27493_27541 = 0;while(true){
if((i__27493_27541 < count__27492_27540))
{var c_27542 = cljs.core._nth.call(null,chunk__27491_27539,i__27493_27541);dommy.attrs.add_class_BANG_.call(null,n,c_27542);
{
var G__27543 = seq__27490_27538;
var G__27544 = chunk__27491_27539;
var G__27545 = count__27492_27540;
var G__27546 = (i__27493_27541 + 1);
seq__27490_27538 = G__27543;
chunk__27491_27539 = G__27544;
count__27492_27540 = G__27545;
i__27493_27541 = G__27546;
continue;
}
} else
{var temp__4092__auto___27547__$1 = cljs.core.seq.call(null,seq__27490_27538);if(temp__4092__auto___27547__$1)
{var seq__27490_27548__$1 = temp__4092__auto___27547__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27490_27548__$1))
{var c__19849__auto___27549 = cljs.core.chunk_first.call(null,seq__27490_27548__$1);{
var G__27550 = cljs.core.chunk_rest.call(null,seq__27490_27548__$1);
var G__27551 = c__19849__auto___27549;
var G__27552 = cljs.core.count.call(null,c__19849__auto___27549);
var G__27553 = 0;
seq__27490_27538 = G__27550;
chunk__27491_27539 = G__27551;
count__27492_27540 = G__27552;
i__27493_27541 = G__27553;
continue;
}
} else
{var c_27554 = cljs.core.first.call(null,seq__27490_27548__$1);dommy.attrs.add_class_BANG_.call(null,n,c_27554);
{
var G__27555 = cljs.core.next.call(null,seq__27490_27548__$1);
var G__27556 = null;
var G__27557 = 0;
var G__27558 = 0;
seq__27490_27538 = G__27555;
chunk__27491_27539 = G__27556;
count__27492_27540 = G__27557;
i__27493_27541 = G__27558;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__27489_27537))
{dommy.attrs.add_class_BANG_.call(null,n,v_27536);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_27535,v_27536);
} else
{}
}
}
{
var G__27559 = cljs.core.next.call(null,seq__27478_27528__$1);
var G__27560 = null;
var G__27561 = 0;
var G__27562 = 0;
seq__27478_27494 = G__27559;
chunk__27479_27495 = G__27560;
count__27480_27496 = G__27561;
i__27481_27497 = G__27562;
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
}catch (e27563){if((e27563 instanceof ReferenceError))
{var __27564 = e27563;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27563;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__27566 = data;if(G__27566)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__27566.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__27566.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__27566);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__27566);
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
