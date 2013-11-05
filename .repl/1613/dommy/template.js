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
{var x__19723__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (dommy.template._elem[goog.typeOf(x__19723__auto__)]);if(or__3943__auto__)
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
{var str_27674 = node_str.substring(base_idx);while(true){
var next_idx_27675 = dommy.template.next_css_index.call(null,str_27674,1);var frag_27676 = (((next_idx_27675 >= 0))?str_27674.substring(0,next_idx_27675):str_27674);var G__27673_27677 = frag_27676.charAt(0);if(cljs.core._EQ_.call(null,"#",G__27673_27677))
{node.setAttribute("id",frag_27676.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__27673_27677))
{dommy.attrs.add_class_BANG_.call(null,node,frag_27676.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_27676.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_27675 >= 0))
{{
var G__27678 = str_27674.substring(next_idx_27675);
str_27674 = G__27678;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__27684 = data;if(G__27684)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__27684.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__27684.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__27684);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__27684);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__27685_27689 = cljs.core.seq.call(null,data);var chunk__27686_27690 = null;var count__27687_27691 = 0;var i__27688_27692 = 0;while(true){
if((i__27688_27692 < count__27687_27691))
{var child_27693 = cljs.core._nth.call(null,chunk__27686_27690,i__27688_27692);__GT_document_fragment.call(null,result_frag,child_27693);
{
var G__27694 = seq__27685_27689;
var G__27695 = chunk__27686_27690;
var G__27696 = count__27687_27691;
var G__27697 = (i__27688_27692 + 1);
seq__27685_27689 = G__27694;
chunk__27686_27690 = G__27695;
count__27687_27691 = G__27696;
i__27688_27692 = G__27697;
continue;
}
} else
{var temp__4092__auto___27698 = cljs.core.seq.call(null,seq__27685_27689);if(temp__4092__auto___27698)
{var seq__27685_27699__$1 = temp__4092__auto___27698;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27685_27699__$1))
{var c__19844__auto___27700 = cljs.core.chunk_first.call(null,seq__27685_27699__$1);{
var G__27701 = cljs.core.chunk_rest.call(null,seq__27685_27699__$1);
var G__27702 = c__19844__auto___27700;
var G__27703 = cljs.core.count.call(null,c__19844__auto___27700);
var G__27704 = 0;
seq__27685_27689 = G__27701;
chunk__27686_27690 = G__27702;
count__27687_27691 = G__27703;
i__27688_27692 = G__27704;
continue;
}
} else
{var child_27705 = cljs.core.first.call(null,seq__27685_27699__$1);__GT_document_fragment.call(null,result_frag,child_27705);
{
var G__27706 = cljs.core.next.call(null,seq__27685_27699__$1);
var G__27707 = null;
var G__27708 = 0;
var G__27709 = 0;
seq__27685_27689 = G__27706;
chunk__27686_27690 = G__27707;
count__27687_27691 = G__27708;
i__27688_27692 = G__27709;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__27711 = data;if(G__27711)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__27711.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__27711.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__27711);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__27711);
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
dommy.template.compound_element = (function compound_element(p__27712){var vec__27731 = p__27712;var tag_name = cljs.core.nth.call(null,vec__27731,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__27731,1,null);var children = cljs.core.nthnext.call(null,vec__27731,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((function (){var and__3941__auto__ = cljs.core.map_QMARK_.call(null,maybe_attrs);if(and__3941__auto__)
{return !((function (){var G__27732 = maybe_attrs;if(G__27732)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__27732.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__27732.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__27732);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__27732);
}
})());
} else
{return and__3941__auto__;
}
})())?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__27733_27749 = cljs.core.seq.call(null,attrs);var chunk__27734_27750 = null;var count__27735_27751 = 0;var i__27736_27752 = 0;while(true){
if((i__27736_27752 < count__27735_27751))
{var vec__27737_27753 = cljs.core._nth.call(null,chunk__27734_27750,i__27736_27752);var k_27754 = cljs.core.nth.call(null,vec__27737_27753,0,null);var v_27755 = cljs.core.nth.call(null,vec__27737_27753,1,null);var G__27738_27756 = k_27754;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__27738_27756))
{var seq__27739_27757 = cljs.core.seq.call(null,v_27755);var chunk__27740_27758 = null;var count__27741_27759 = 0;var i__27742_27760 = 0;while(true){
if((i__27742_27760 < count__27741_27759))
{var c_27761 = cljs.core._nth.call(null,chunk__27740_27758,i__27742_27760);dommy.attrs.add_class_BANG_.call(null,n,c_27761);
{
var G__27762 = seq__27739_27757;
var G__27763 = chunk__27740_27758;
var G__27764 = count__27741_27759;
var G__27765 = (i__27742_27760 + 1);
seq__27739_27757 = G__27762;
chunk__27740_27758 = G__27763;
count__27741_27759 = G__27764;
i__27742_27760 = G__27765;
continue;
}
} else
{var temp__4092__auto___27766 = cljs.core.seq.call(null,seq__27739_27757);if(temp__4092__auto___27766)
{var seq__27739_27767__$1 = temp__4092__auto___27766;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27739_27767__$1))
{var c__19844__auto___27768 = cljs.core.chunk_first.call(null,seq__27739_27767__$1);{
var G__27769 = cljs.core.chunk_rest.call(null,seq__27739_27767__$1);
var G__27770 = c__19844__auto___27768;
var G__27771 = cljs.core.count.call(null,c__19844__auto___27768);
var G__27772 = 0;
seq__27739_27757 = G__27769;
chunk__27740_27758 = G__27770;
count__27741_27759 = G__27771;
i__27742_27760 = G__27772;
continue;
}
} else
{var c_27773 = cljs.core.first.call(null,seq__27739_27767__$1);dommy.attrs.add_class_BANG_.call(null,n,c_27773);
{
var G__27774 = cljs.core.next.call(null,seq__27739_27767__$1);
var G__27775 = null;
var G__27776 = 0;
var G__27777 = 0;
seq__27739_27757 = G__27774;
chunk__27740_27758 = G__27775;
count__27741_27759 = G__27776;
i__27742_27760 = G__27777;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__27738_27756))
{dommy.attrs.add_class_BANG_.call(null,n,v_27755);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_27754,v_27755);
} else
{}
}
}
{
var G__27778 = seq__27733_27749;
var G__27779 = chunk__27734_27750;
var G__27780 = count__27735_27751;
var G__27781 = (i__27736_27752 + 1);
seq__27733_27749 = G__27778;
chunk__27734_27750 = G__27779;
count__27735_27751 = G__27780;
i__27736_27752 = G__27781;
continue;
}
} else
{var temp__4092__auto___27782 = cljs.core.seq.call(null,seq__27733_27749);if(temp__4092__auto___27782)
{var seq__27733_27783__$1 = temp__4092__auto___27782;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27733_27783__$1))
{var c__19844__auto___27784 = cljs.core.chunk_first.call(null,seq__27733_27783__$1);{
var G__27785 = cljs.core.chunk_rest.call(null,seq__27733_27783__$1);
var G__27786 = c__19844__auto___27784;
var G__27787 = cljs.core.count.call(null,c__19844__auto___27784);
var G__27788 = 0;
seq__27733_27749 = G__27785;
chunk__27734_27750 = G__27786;
count__27735_27751 = G__27787;
i__27736_27752 = G__27788;
continue;
}
} else
{var vec__27743_27789 = cljs.core.first.call(null,seq__27733_27783__$1);var k_27790 = cljs.core.nth.call(null,vec__27743_27789,0,null);var v_27791 = cljs.core.nth.call(null,vec__27743_27789,1,null);var G__27744_27792 = k_27790;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__27744_27792))
{var seq__27745_27793 = cljs.core.seq.call(null,v_27791);var chunk__27746_27794 = null;var count__27747_27795 = 0;var i__27748_27796 = 0;while(true){
if((i__27748_27796 < count__27747_27795))
{var c_27797 = cljs.core._nth.call(null,chunk__27746_27794,i__27748_27796);dommy.attrs.add_class_BANG_.call(null,n,c_27797);
{
var G__27798 = seq__27745_27793;
var G__27799 = chunk__27746_27794;
var G__27800 = count__27747_27795;
var G__27801 = (i__27748_27796 + 1);
seq__27745_27793 = G__27798;
chunk__27746_27794 = G__27799;
count__27747_27795 = G__27800;
i__27748_27796 = G__27801;
continue;
}
} else
{var temp__4092__auto___27802__$1 = cljs.core.seq.call(null,seq__27745_27793);if(temp__4092__auto___27802__$1)
{var seq__27745_27803__$1 = temp__4092__auto___27802__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27745_27803__$1))
{var c__19844__auto___27804 = cljs.core.chunk_first.call(null,seq__27745_27803__$1);{
var G__27805 = cljs.core.chunk_rest.call(null,seq__27745_27803__$1);
var G__27806 = c__19844__auto___27804;
var G__27807 = cljs.core.count.call(null,c__19844__auto___27804);
var G__27808 = 0;
seq__27745_27793 = G__27805;
chunk__27746_27794 = G__27806;
count__27747_27795 = G__27807;
i__27748_27796 = G__27808;
continue;
}
} else
{var c_27809 = cljs.core.first.call(null,seq__27745_27803__$1);dommy.attrs.add_class_BANG_.call(null,n,c_27809);
{
var G__27810 = cljs.core.next.call(null,seq__27745_27803__$1);
var G__27811 = null;
var G__27812 = 0;
var G__27813 = 0;
seq__27745_27793 = G__27810;
chunk__27746_27794 = G__27811;
count__27747_27795 = G__27812;
i__27748_27796 = G__27813;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__27744_27792))
{dommy.attrs.add_class_BANG_.call(null,n,v_27791);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_27790,v_27791);
} else
{}
}
}
{
var G__27814 = cljs.core.next.call(null,seq__27733_27783__$1);
var G__27815 = null;
var G__27816 = 0;
var G__27817 = 0;
seq__27733_27749 = G__27814;
chunk__27734_27750 = G__27815;
count__27735_27751 = G__27816;
i__27736_27752 = G__27817;
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
}catch (e27818){if((e27818 instanceof ReferenceError))
{var __27819 = e27818;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27818;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__27821 = data;if(G__27821)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__27821.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__27821.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__27821);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__27821);
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
