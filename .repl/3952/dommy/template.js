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
{var x__6820__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (dommy.template._elem[goog.typeOf(x__6820__auto__)]);if(or__3943__auto__)
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
{var str_14768 = node_str.substring(base_idx);while(true){
var next_idx_14769 = dommy.template.next_css_index.call(null,str_14768,1);var frag_14770 = (((next_idx_14769 >= 0))?str_14768.substring(0,next_idx_14769):str_14768);var G__14767_14771 = frag_14770.charAt(0);if(cljs.core._EQ_.call(null,"#",G__14767_14771))
{node.setAttribute("id",frag_14770.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__14767_14771))
{dommy.attrs.add_class_BANG_.call(null,node,frag_14770.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_14770.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_14769 >= 0))
{{
var G__14772 = str_14768.substring(next_idx_14769);
str_14768 = G__14772;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__14778 = data;if(G__14778)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__14778.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14778.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14778);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14778);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__14779_14783 = cljs.core.seq.call(null,data);var chunk__14780_14784 = null;var count__14781_14785 = 0;var i__14782_14786 = 0;while(true){
if((i__14782_14786 < count__14781_14785))
{var child_14787 = cljs.core._nth.call(null,chunk__14780_14784,i__14782_14786);__GT_document_fragment.call(null,result_frag,child_14787);
{
var G__14788 = seq__14779_14783;
var G__14789 = chunk__14780_14784;
var G__14790 = count__14781_14785;
var G__14791 = (i__14782_14786 + 1);
seq__14779_14783 = G__14788;
chunk__14780_14784 = G__14789;
count__14781_14785 = G__14790;
i__14782_14786 = G__14791;
continue;
}
} else
{var temp__4092__auto___14792 = cljs.core.seq.call(null,seq__14779_14783);if(temp__4092__auto___14792)
{var seq__14779_14793__$1 = temp__4092__auto___14792;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14779_14793__$1))
{var c__6940__auto___14794 = cljs.core.chunk_first.call(null,seq__14779_14793__$1);{
var G__14795 = cljs.core.chunk_rest.call(null,seq__14779_14793__$1);
var G__14796 = c__6940__auto___14794;
var G__14797 = cljs.core.count.call(null,c__6940__auto___14794);
var G__14798 = 0;
seq__14779_14783 = G__14795;
chunk__14780_14784 = G__14796;
count__14781_14785 = G__14797;
i__14782_14786 = G__14798;
continue;
}
} else
{var child_14799 = cljs.core.first.call(null,seq__14779_14793__$1);__GT_document_fragment.call(null,result_frag,child_14799);
{
var G__14800 = cljs.core.next.call(null,seq__14779_14793__$1);
var G__14801 = null;
var G__14802 = 0;
var G__14803 = 0;
seq__14779_14783 = G__14800;
chunk__14780_14784 = G__14801;
count__14781_14785 = G__14802;
i__14782_14786 = G__14803;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__14805 = data;if(G__14805)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__14805.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14805.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14805);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14805);
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
dommy.template.compound_element = (function compound_element(p__14806){var vec__14825 = p__14806;var tag_name = cljs.core.nth.call(null,vec__14825,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__14825,1,null);var children = cljs.core.nthnext.call(null,vec__14825,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((function (){var and__3941__auto__ = cljs.core.map_QMARK_.call(null,maybe_attrs);if(and__3941__auto__)
{return !((function (){var G__14826 = maybe_attrs;if(G__14826)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__14826.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14826.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14826);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14826);
}
})());
} else
{return and__3941__auto__;
}
})())?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__14827_14843 = cljs.core.seq.call(null,attrs);var chunk__14828_14844 = null;var count__14829_14845 = 0;var i__14830_14846 = 0;while(true){
if((i__14830_14846 < count__14829_14845))
{var vec__14831_14847 = cljs.core._nth.call(null,chunk__14828_14844,i__14830_14846);var k_14848 = cljs.core.nth.call(null,vec__14831_14847,0,null);var v_14849 = cljs.core.nth.call(null,vec__14831_14847,1,null);var G__14832_14850 = k_14848;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__14832_14850))
{var seq__14833_14851 = cljs.core.seq.call(null,v_14849);var chunk__14834_14852 = null;var count__14835_14853 = 0;var i__14836_14854 = 0;while(true){
if((i__14836_14854 < count__14835_14853))
{var c_14855 = cljs.core._nth.call(null,chunk__14834_14852,i__14836_14854);dommy.attrs.add_class_BANG_.call(null,n,c_14855);
{
var G__14856 = seq__14833_14851;
var G__14857 = chunk__14834_14852;
var G__14858 = count__14835_14853;
var G__14859 = (i__14836_14854 + 1);
seq__14833_14851 = G__14856;
chunk__14834_14852 = G__14857;
count__14835_14853 = G__14858;
i__14836_14854 = G__14859;
continue;
}
} else
{var temp__4092__auto___14860 = cljs.core.seq.call(null,seq__14833_14851);if(temp__4092__auto___14860)
{var seq__14833_14861__$1 = temp__4092__auto___14860;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14833_14861__$1))
{var c__6940__auto___14862 = cljs.core.chunk_first.call(null,seq__14833_14861__$1);{
var G__14863 = cljs.core.chunk_rest.call(null,seq__14833_14861__$1);
var G__14864 = c__6940__auto___14862;
var G__14865 = cljs.core.count.call(null,c__6940__auto___14862);
var G__14866 = 0;
seq__14833_14851 = G__14863;
chunk__14834_14852 = G__14864;
count__14835_14853 = G__14865;
i__14836_14854 = G__14866;
continue;
}
} else
{var c_14867 = cljs.core.first.call(null,seq__14833_14861__$1);dommy.attrs.add_class_BANG_.call(null,n,c_14867);
{
var G__14868 = cljs.core.next.call(null,seq__14833_14861__$1);
var G__14869 = null;
var G__14870 = 0;
var G__14871 = 0;
seq__14833_14851 = G__14868;
chunk__14834_14852 = G__14869;
count__14835_14853 = G__14870;
i__14836_14854 = G__14871;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__14832_14850))
{dommy.attrs.add_class_BANG_.call(null,n,v_14849);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_14848,v_14849);
} else
{}
}
}
{
var G__14872 = seq__14827_14843;
var G__14873 = chunk__14828_14844;
var G__14874 = count__14829_14845;
var G__14875 = (i__14830_14846 + 1);
seq__14827_14843 = G__14872;
chunk__14828_14844 = G__14873;
count__14829_14845 = G__14874;
i__14830_14846 = G__14875;
continue;
}
} else
{var temp__4092__auto___14876 = cljs.core.seq.call(null,seq__14827_14843);if(temp__4092__auto___14876)
{var seq__14827_14877__$1 = temp__4092__auto___14876;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14827_14877__$1))
{var c__6940__auto___14878 = cljs.core.chunk_first.call(null,seq__14827_14877__$1);{
var G__14879 = cljs.core.chunk_rest.call(null,seq__14827_14877__$1);
var G__14880 = c__6940__auto___14878;
var G__14881 = cljs.core.count.call(null,c__6940__auto___14878);
var G__14882 = 0;
seq__14827_14843 = G__14879;
chunk__14828_14844 = G__14880;
count__14829_14845 = G__14881;
i__14830_14846 = G__14882;
continue;
}
} else
{var vec__14837_14883 = cljs.core.first.call(null,seq__14827_14877__$1);var k_14884 = cljs.core.nth.call(null,vec__14837_14883,0,null);var v_14885 = cljs.core.nth.call(null,vec__14837_14883,1,null);var G__14838_14886 = k_14884;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__14838_14886))
{var seq__14839_14887 = cljs.core.seq.call(null,v_14885);var chunk__14840_14888 = null;var count__14841_14889 = 0;var i__14842_14890 = 0;while(true){
if((i__14842_14890 < count__14841_14889))
{var c_14891 = cljs.core._nth.call(null,chunk__14840_14888,i__14842_14890);dommy.attrs.add_class_BANG_.call(null,n,c_14891);
{
var G__14892 = seq__14839_14887;
var G__14893 = chunk__14840_14888;
var G__14894 = count__14841_14889;
var G__14895 = (i__14842_14890 + 1);
seq__14839_14887 = G__14892;
chunk__14840_14888 = G__14893;
count__14841_14889 = G__14894;
i__14842_14890 = G__14895;
continue;
}
} else
{var temp__4092__auto___14896__$1 = cljs.core.seq.call(null,seq__14839_14887);if(temp__4092__auto___14896__$1)
{var seq__14839_14897__$1 = temp__4092__auto___14896__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14839_14897__$1))
{var c__6940__auto___14898 = cljs.core.chunk_first.call(null,seq__14839_14897__$1);{
var G__14899 = cljs.core.chunk_rest.call(null,seq__14839_14897__$1);
var G__14900 = c__6940__auto___14898;
var G__14901 = cljs.core.count.call(null,c__6940__auto___14898);
var G__14902 = 0;
seq__14839_14887 = G__14899;
chunk__14840_14888 = G__14900;
count__14841_14889 = G__14901;
i__14842_14890 = G__14902;
continue;
}
} else
{var c_14903 = cljs.core.first.call(null,seq__14839_14897__$1);dommy.attrs.add_class_BANG_.call(null,n,c_14903);
{
var G__14904 = cljs.core.next.call(null,seq__14839_14897__$1);
var G__14905 = null;
var G__14906 = 0;
var G__14907 = 0;
seq__14839_14887 = G__14904;
chunk__14840_14888 = G__14905;
count__14841_14889 = G__14906;
i__14842_14890 = G__14907;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__14838_14886))
{dommy.attrs.add_class_BANG_.call(null,n,v_14885);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_14884,v_14885);
} else
{}
}
}
{
var G__14908 = cljs.core.next.call(null,seq__14827_14877__$1);
var G__14909 = null;
var G__14910 = 0;
var G__14911 = 0;
seq__14827_14843 = G__14908;
chunk__14828_14844 = G__14909;
count__14829_14845 = G__14910;
i__14830_14846 = G__14911;
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
}catch (e14912){if((e14912 instanceof ReferenceError))
{var __14913 = e14912;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14912;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__14915 = data;if(G__14915)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__14915.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14915.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14915);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14915);
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
