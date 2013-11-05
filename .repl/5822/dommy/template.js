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
{var x__7093__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (dommy.template._elem[goog.typeOf(x__7093__auto__)]);if(or__3943__auto__)
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
{var str_14755 = node_str.substring(base_idx);while(true){
var next_idx_14756 = dommy.template.next_css_index.call(null,str_14755,1);var frag_14757 = (((next_idx_14756 >= 0))?str_14755.substring(0,next_idx_14756):str_14755);var G__14754_14758 = frag_14757.charAt(0);if(cljs.core._EQ_.call(null,"#",G__14754_14758))
{node.setAttribute("id",frag_14757.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__14754_14758))
{dommy.attrs.add_class_BANG_.call(null,node,frag_14757.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_14757.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_14756 >= 0))
{{
var G__14759 = str_14755.substring(next_idx_14756);
str_14755 = G__14759;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__14765 = data;if(G__14765)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__14765.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14765.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14765);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14765);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__14766_14770 = cljs.core.seq.call(null,data);var chunk__14767_14771 = null;var count__14768_14772 = 0;var i__14769_14773 = 0;while(true){
if((i__14769_14773 < count__14768_14772))
{var child_14774 = cljs.core._nth.call(null,chunk__14767_14771,i__14769_14773);__GT_document_fragment.call(null,result_frag,child_14774);
{
var G__14775 = seq__14766_14770;
var G__14776 = chunk__14767_14771;
var G__14777 = count__14768_14772;
var G__14778 = (i__14769_14773 + 1);
seq__14766_14770 = G__14775;
chunk__14767_14771 = G__14776;
count__14768_14772 = G__14777;
i__14769_14773 = G__14778;
continue;
}
} else
{var temp__4092__auto___14779 = cljs.core.seq.call(null,seq__14766_14770);if(temp__4092__auto___14779)
{var seq__14766_14780__$1 = temp__4092__auto___14779;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14766_14780__$1))
{var c__7211__auto___14781 = cljs.core.chunk_first.call(null,seq__14766_14780__$1);{
var G__14782 = cljs.core.chunk_rest.call(null,seq__14766_14780__$1);
var G__14783 = c__7211__auto___14781;
var G__14784 = cljs.core.count.call(null,c__7211__auto___14781);
var G__14785 = 0;
seq__14766_14770 = G__14782;
chunk__14767_14771 = G__14783;
count__14768_14772 = G__14784;
i__14769_14773 = G__14785;
continue;
}
} else
{var child_14786 = cljs.core.first.call(null,seq__14766_14780__$1);__GT_document_fragment.call(null,result_frag,child_14786);
{
var G__14787 = cljs.core.next.call(null,seq__14766_14780__$1);
var G__14788 = null;
var G__14789 = 0;
var G__14790 = 0;
seq__14766_14770 = G__14787;
chunk__14767_14771 = G__14788;
count__14768_14772 = G__14789;
i__14769_14773 = G__14790;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__14792 = data;if(G__14792)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__14792.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14792.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14792);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14792);
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
dommy.template.compound_element = (function compound_element(p__14793){var vec__14812 = p__14793;var tag_name = cljs.core.nth.call(null,vec__14812,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__14812,1,null);var children = cljs.core.nthnext.call(null,vec__14812,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((function (){var and__3941__auto__ = cljs.core.map_QMARK_.call(null,maybe_attrs);if(and__3941__auto__)
{return !((function (){var G__14813 = maybe_attrs;if(G__14813)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__14813.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14813.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14813);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14813);
}
})());
} else
{return and__3941__auto__;
}
})())?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__14814_14830 = cljs.core.seq.call(null,attrs);var chunk__14815_14831 = null;var count__14816_14832 = 0;var i__14817_14833 = 0;while(true){
if((i__14817_14833 < count__14816_14832))
{var vec__14818_14834 = cljs.core._nth.call(null,chunk__14815_14831,i__14817_14833);var k_14835 = cljs.core.nth.call(null,vec__14818_14834,0,null);var v_14836 = cljs.core.nth.call(null,vec__14818_14834,1,null);var G__14819_14837 = k_14835;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__14819_14837))
{var seq__14820_14838 = cljs.core.seq.call(null,v_14836);var chunk__14821_14839 = null;var count__14822_14840 = 0;var i__14823_14841 = 0;while(true){
if((i__14823_14841 < count__14822_14840))
{var c_14842 = cljs.core._nth.call(null,chunk__14821_14839,i__14823_14841);dommy.attrs.add_class_BANG_.call(null,n,c_14842);
{
var G__14843 = seq__14820_14838;
var G__14844 = chunk__14821_14839;
var G__14845 = count__14822_14840;
var G__14846 = (i__14823_14841 + 1);
seq__14820_14838 = G__14843;
chunk__14821_14839 = G__14844;
count__14822_14840 = G__14845;
i__14823_14841 = G__14846;
continue;
}
} else
{var temp__4092__auto___14847 = cljs.core.seq.call(null,seq__14820_14838);if(temp__4092__auto___14847)
{var seq__14820_14848__$1 = temp__4092__auto___14847;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14820_14848__$1))
{var c__7211__auto___14849 = cljs.core.chunk_first.call(null,seq__14820_14848__$1);{
var G__14850 = cljs.core.chunk_rest.call(null,seq__14820_14848__$1);
var G__14851 = c__7211__auto___14849;
var G__14852 = cljs.core.count.call(null,c__7211__auto___14849);
var G__14853 = 0;
seq__14820_14838 = G__14850;
chunk__14821_14839 = G__14851;
count__14822_14840 = G__14852;
i__14823_14841 = G__14853;
continue;
}
} else
{var c_14854 = cljs.core.first.call(null,seq__14820_14848__$1);dommy.attrs.add_class_BANG_.call(null,n,c_14854);
{
var G__14855 = cljs.core.next.call(null,seq__14820_14848__$1);
var G__14856 = null;
var G__14857 = 0;
var G__14858 = 0;
seq__14820_14838 = G__14855;
chunk__14821_14839 = G__14856;
count__14822_14840 = G__14857;
i__14823_14841 = G__14858;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__14819_14837))
{dommy.attrs.add_class_BANG_.call(null,n,v_14836);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_14835,v_14836);
} else
{}
}
}
{
var G__14859 = seq__14814_14830;
var G__14860 = chunk__14815_14831;
var G__14861 = count__14816_14832;
var G__14862 = (i__14817_14833 + 1);
seq__14814_14830 = G__14859;
chunk__14815_14831 = G__14860;
count__14816_14832 = G__14861;
i__14817_14833 = G__14862;
continue;
}
} else
{var temp__4092__auto___14863 = cljs.core.seq.call(null,seq__14814_14830);if(temp__4092__auto___14863)
{var seq__14814_14864__$1 = temp__4092__auto___14863;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14814_14864__$1))
{var c__7211__auto___14865 = cljs.core.chunk_first.call(null,seq__14814_14864__$1);{
var G__14866 = cljs.core.chunk_rest.call(null,seq__14814_14864__$1);
var G__14867 = c__7211__auto___14865;
var G__14868 = cljs.core.count.call(null,c__7211__auto___14865);
var G__14869 = 0;
seq__14814_14830 = G__14866;
chunk__14815_14831 = G__14867;
count__14816_14832 = G__14868;
i__14817_14833 = G__14869;
continue;
}
} else
{var vec__14824_14870 = cljs.core.first.call(null,seq__14814_14864__$1);var k_14871 = cljs.core.nth.call(null,vec__14824_14870,0,null);var v_14872 = cljs.core.nth.call(null,vec__14824_14870,1,null);var G__14825_14873 = k_14871;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__14825_14873))
{var seq__14826_14874 = cljs.core.seq.call(null,v_14872);var chunk__14827_14875 = null;var count__14828_14876 = 0;var i__14829_14877 = 0;while(true){
if((i__14829_14877 < count__14828_14876))
{var c_14878 = cljs.core._nth.call(null,chunk__14827_14875,i__14829_14877);dommy.attrs.add_class_BANG_.call(null,n,c_14878);
{
var G__14879 = seq__14826_14874;
var G__14880 = chunk__14827_14875;
var G__14881 = count__14828_14876;
var G__14882 = (i__14829_14877 + 1);
seq__14826_14874 = G__14879;
chunk__14827_14875 = G__14880;
count__14828_14876 = G__14881;
i__14829_14877 = G__14882;
continue;
}
} else
{var temp__4092__auto___14883__$1 = cljs.core.seq.call(null,seq__14826_14874);if(temp__4092__auto___14883__$1)
{var seq__14826_14884__$1 = temp__4092__auto___14883__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14826_14884__$1))
{var c__7211__auto___14885 = cljs.core.chunk_first.call(null,seq__14826_14884__$1);{
var G__14886 = cljs.core.chunk_rest.call(null,seq__14826_14884__$1);
var G__14887 = c__7211__auto___14885;
var G__14888 = cljs.core.count.call(null,c__7211__auto___14885);
var G__14889 = 0;
seq__14826_14874 = G__14886;
chunk__14827_14875 = G__14887;
count__14828_14876 = G__14888;
i__14829_14877 = G__14889;
continue;
}
} else
{var c_14890 = cljs.core.first.call(null,seq__14826_14884__$1);dommy.attrs.add_class_BANG_.call(null,n,c_14890);
{
var G__14891 = cljs.core.next.call(null,seq__14826_14884__$1);
var G__14892 = null;
var G__14893 = 0;
var G__14894 = 0;
seq__14826_14874 = G__14891;
chunk__14827_14875 = G__14892;
count__14828_14876 = G__14893;
i__14829_14877 = G__14894;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__14825_14873))
{dommy.attrs.add_class_BANG_.call(null,n,v_14872);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_14871,v_14872);
} else
{}
}
}
{
var G__14895 = cljs.core.next.call(null,seq__14814_14864__$1);
var G__14896 = null;
var G__14897 = 0;
var G__14898 = 0;
seq__14814_14830 = G__14895;
chunk__14815_14831 = G__14896;
count__14816_14832 = G__14897;
i__14817_14833 = G__14898;
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
}catch (e14899){if((e14899 instanceof ReferenceError))
{var __14900 = e14899;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14899;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__14902 = data;if(G__14902)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__14902.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14902.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14902);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__14902);
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
