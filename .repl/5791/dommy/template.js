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
{var x__7073__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (dommy.template._elem[goog.typeOf(x__7073__auto__)]);if(or__3943__auto__)
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
{var str_14759 = node_str.substring(base_idx);while(true){
var next_idx_14760 = dommy.template.next_css_index.call(null,str_14759,1);var frag_14761 = (((next_idx_14760 >= 0))?str_14759.substring(0,next_idx_14760):str_14759);var G__14758_14762 = frag_14761.charAt(0);if(cljs.core._EQ_.call(null,"#",G__14758_14762))
{node.setAttribute("id",frag_14761.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__14758_14762))
{dommy.attrs.add_class_BANG_.call(null,node,frag_14761.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_14761.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_14760 >= 0))
{{
var G__14763 = str_14759.substring(next_idx_14760);
str_14759 = G__14763;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__14769 = data;if(G__14769)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__14769.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14769.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14769);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14769);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__14770_14774 = cljs.core.seq.call(null,data);var chunk__14771_14775 = null;var count__14772_14776 = 0;var i__14773_14777 = 0;while(true){
if((i__14773_14777 < count__14772_14776))
{var child_14778 = cljs.core._nth.call(null,chunk__14771_14775,i__14773_14777);__GT_document_fragment.call(null,result_frag,child_14778);
{
var G__14779 = seq__14770_14774;
var G__14780 = chunk__14771_14775;
var G__14781 = count__14772_14776;
var G__14782 = (i__14773_14777 + 1);
seq__14770_14774 = G__14779;
chunk__14771_14775 = G__14780;
count__14772_14776 = G__14781;
i__14773_14777 = G__14782;
continue;
}
} else
{var temp__4092__auto___14783 = cljs.core.seq.call(null,seq__14770_14774);if(temp__4092__auto___14783)
{var seq__14770_14784__$1 = temp__4092__auto___14783;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14770_14784__$1))
{var c__7190__auto___14785 = cljs.core.chunk_first.call(null,seq__14770_14784__$1);{
var G__14786 = cljs.core.chunk_rest.call(null,seq__14770_14784__$1);
var G__14787 = c__7190__auto___14785;
var G__14788 = cljs.core.count.call(null,c__7190__auto___14785);
var G__14789 = 0;
seq__14770_14774 = G__14786;
chunk__14771_14775 = G__14787;
count__14772_14776 = G__14788;
i__14773_14777 = G__14789;
continue;
}
} else
{var child_14790 = cljs.core.first.call(null,seq__14770_14784__$1);__GT_document_fragment.call(null,result_frag,child_14790);
{
var G__14791 = cljs.core.next.call(null,seq__14770_14784__$1);
var G__14792 = null;
var G__14793 = 0;
var G__14794 = 0;
seq__14770_14774 = G__14791;
chunk__14771_14775 = G__14792;
count__14772_14776 = G__14793;
i__14773_14777 = G__14794;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__14796 = data;if(G__14796)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__14796.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14796.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14796);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14796);
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
dommy.template.compound_element = (function compound_element(p__14797){var vec__14816 = p__14797;var tag_name = cljs.core.nth.call(null,vec__14816,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__14816,1,null);var children = cljs.core.nthnext.call(null,vec__14816,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((function (){var and__3941__auto__ = cljs.core.map_QMARK_.call(null,maybe_attrs);if(and__3941__auto__)
{return !((function (){var G__14817 = maybe_attrs;if(G__14817)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__14817.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14817.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14817);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14817);
}
})());
} else
{return and__3941__auto__;
}
})())?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__14818_14834 = cljs.core.seq.call(null,attrs);var chunk__14819_14835 = null;var count__14820_14836 = 0;var i__14821_14837 = 0;while(true){
if((i__14821_14837 < count__14820_14836))
{var vec__14822_14838 = cljs.core._nth.call(null,chunk__14819_14835,i__14821_14837);var k_14839 = cljs.core.nth.call(null,vec__14822_14838,0,null);var v_14840 = cljs.core.nth.call(null,vec__14822_14838,1,null);var G__14823_14841 = k_14839;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__14823_14841))
{var seq__14824_14842 = cljs.core.seq.call(null,v_14840);var chunk__14825_14843 = null;var count__14826_14844 = 0;var i__14827_14845 = 0;while(true){
if((i__14827_14845 < count__14826_14844))
{var c_14846 = cljs.core._nth.call(null,chunk__14825_14843,i__14827_14845);dommy.attrs.add_class_BANG_.call(null,n,c_14846);
{
var G__14847 = seq__14824_14842;
var G__14848 = chunk__14825_14843;
var G__14849 = count__14826_14844;
var G__14850 = (i__14827_14845 + 1);
seq__14824_14842 = G__14847;
chunk__14825_14843 = G__14848;
count__14826_14844 = G__14849;
i__14827_14845 = G__14850;
continue;
}
} else
{var temp__4092__auto___14851 = cljs.core.seq.call(null,seq__14824_14842);if(temp__4092__auto___14851)
{var seq__14824_14852__$1 = temp__4092__auto___14851;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14824_14852__$1))
{var c__7190__auto___14853 = cljs.core.chunk_first.call(null,seq__14824_14852__$1);{
var G__14854 = cljs.core.chunk_rest.call(null,seq__14824_14852__$1);
var G__14855 = c__7190__auto___14853;
var G__14856 = cljs.core.count.call(null,c__7190__auto___14853);
var G__14857 = 0;
seq__14824_14842 = G__14854;
chunk__14825_14843 = G__14855;
count__14826_14844 = G__14856;
i__14827_14845 = G__14857;
continue;
}
} else
{var c_14858 = cljs.core.first.call(null,seq__14824_14852__$1);dommy.attrs.add_class_BANG_.call(null,n,c_14858);
{
var G__14859 = cljs.core.next.call(null,seq__14824_14852__$1);
var G__14860 = null;
var G__14861 = 0;
var G__14862 = 0;
seq__14824_14842 = G__14859;
chunk__14825_14843 = G__14860;
count__14826_14844 = G__14861;
i__14827_14845 = G__14862;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__14823_14841))
{dommy.attrs.add_class_BANG_.call(null,n,v_14840);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_14839,v_14840);
} else
{}
}
}
{
var G__14863 = seq__14818_14834;
var G__14864 = chunk__14819_14835;
var G__14865 = count__14820_14836;
var G__14866 = (i__14821_14837 + 1);
seq__14818_14834 = G__14863;
chunk__14819_14835 = G__14864;
count__14820_14836 = G__14865;
i__14821_14837 = G__14866;
continue;
}
} else
{var temp__4092__auto___14867 = cljs.core.seq.call(null,seq__14818_14834);if(temp__4092__auto___14867)
{var seq__14818_14868__$1 = temp__4092__auto___14867;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14818_14868__$1))
{var c__7190__auto___14869 = cljs.core.chunk_first.call(null,seq__14818_14868__$1);{
var G__14870 = cljs.core.chunk_rest.call(null,seq__14818_14868__$1);
var G__14871 = c__7190__auto___14869;
var G__14872 = cljs.core.count.call(null,c__7190__auto___14869);
var G__14873 = 0;
seq__14818_14834 = G__14870;
chunk__14819_14835 = G__14871;
count__14820_14836 = G__14872;
i__14821_14837 = G__14873;
continue;
}
} else
{var vec__14828_14874 = cljs.core.first.call(null,seq__14818_14868__$1);var k_14875 = cljs.core.nth.call(null,vec__14828_14874,0,null);var v_14876 = cljs.core.nth.call(null,vec__14828_14874,1,null);var G__14829_14877 = k_14875;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__14829_14877))
{var seq__14830_14878 = cljs.core.seq.call(null,v_14876);var chunk__14831_14879 = null;var count__14832_14880 = 0;var i__14833_14881 = 0;while(true){
if((i__14833_14881 < count__14832_14880))
{var c_14882 = cljs.core._nth.call(null,chunk__14831_14879,i__14833_14881);dommy.attrs.add_class_BANG_.call(null,n,c_14882);
{
var G__14883 = seq__14830_14878;
var G__14884 = chunk__14831_14879;
var G__14885 = count__14832_14880;
var G__14886 = (i__14833_14881 + 1);
seq__14830_14878 = G__14883;
chunk__14831_14879 = G__14884;
count__14832_14880 = G__14885;
i__14833_14881 = G__14886;
continue;
}
} else
{var temp__4092__auto___14887__$1 = cljs.core.seq.call(null,seq__14830_14878);if(temp__4092__auto___14887__$1)
{var seq__14830_14888__$1 = temp__4092__auto___14887__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14830_14888__$1))
{var c__7190__auto___14889 = cljs.core.chunk_first.call(null,seq__14830_14888__$1);{
var G__14890 = cljs.core.chunk_rest.call(null,seq__14830_14888__$1);
var G__14891 = c__7190__auto___14889;
var G__14892 = cljs.core.count.call(null,c__7190__auto___14889);
var G__14893 = 0;
seq__14830_14878 = G__14890;
chunk__14831_14879 = G__14891;
count__14832_14880 = G__14892;
i__14833_14881 = G__14893;
continue;
}
} else
{var c_14894 = cljs.core.first.call(null,seq__14830_14888__$1);dommy.attrs.add_class_BANG_.call(null,n,c_14894);
{
var G__14895 = cljs.core.next.call(null,seq__14830_14888__$1);
var G__14896 = null;
var G__14897 = 0;
var G__14898 = 0;
seq__14830_14878 = G__14895;
chunk__14831_14879 = G__14896;
count__14832_14880 = G__14897;
i__14833_14881 = G__14898;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__14829_14877))
{dommy.attrs.add_class_BANG_.call(null,n,v_14876);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_14875,v_14876);
} else
{}
}
}
{
var G__14899 = cljs.core.next.call(null,seq__14818_14868__$1);
var G__14900 = null;
var G__14901 = 0;
var G__14902 = 0;
seq__14818_14834 = G__14899;
chunk__14819_14835 = G__14900;
count__14820_14836 = G__14901;
i__14821_14837 = G__14902;
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
}catch (e14903){if((e14903 instanceof ReferenceError))
{var __14904 = e14903;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14903;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__14906 = data;if(G__14906)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__14906.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14906.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14906);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14906);
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
