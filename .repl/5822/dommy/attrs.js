goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__3941__auto__ = (function (){var or__3943__auto__ = (idx === 0);if(or__3943__auto__)
{return or__3943__auto__;
} else
{return (" " === class_name.charAt((idx - 1)));
}
})();if(cljs.core.truth_(and__3941__auto__))
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{var or__3943__auto__ = (stop === total_len);if(or__3943__auto__)
{return or__3943__auto__;
} else
{return (" " === class_name.charAt(stop));
}
} else
{return null;
}
} else
{return and__3941__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){var start_from = 0;while(true){
var i = class_name.indexOf(class$,start_from);if((i >= 0))
{if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i))
{return i;
} else
{{
var G__14903 = (i + class$.length);
start_from = G__14903;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Does an HTML element have a class. Uses Element::classList if
* available and otherwise does fast parse of className string
*/
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto__))
{var class_list = temp__4090__auto__;return class_list.contains(class$__$1);
} else
{var temp__4092__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4092__auto__))
{var class_name = temp__4092__auto__;var temp__4092__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);if(cljs.core.truth_(temp__4092__auto____$1))
{var i = temp__4092__auto____$1;return (i >= 0);
} else
{return null;
}
} else
{return null;
}
}
});
/**
* add class to element
* @param {...*} var_args
*/
dommy.attrs.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var classes__$1 = clojure.string.trim.call(null,cljs.core.name.call(null,classes));if(cljs.core.seq.call(null,classes__$1))
{var temp__4090__auto___14928 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___14928))
{var class_list_14929 = temp__4090__auto___14928;var seq__14916_14930 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__14917_14931 = null;var count__14918_14932 = 0;var i__14919_14933 = 0;while(true){
if((i__14919_14933 < count__14918_14932))
{var class_14934 = cljs.core._nth.call(null,chunk__14917_14931,i__14919_14933);class_list_14929.add(class_14934);
{
var G__14935 = seq__14916_14930;
var G__14936 = chunk__14917_14931;
var G__14937 = count__14918_14932;
var G__14938 = (i__14919_14933 + 1);
seq__14916_14930 = G__14935;
chunk__14917_14931 = G__14936;
count__14918_14932 = G__14937;
i__14919_14933 = G__14938;
continue;
}
} else
{var temp__4092__auto___14939 = cljs.core.seq.call(null,seq__14916_14930);if(temp__4092__auto___14939)
{var seq__14916_14940__$1 = temp__4092__auto___14939;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14916_14940__$1))
{var c__7211__auto___14941 = cljs.core.chunk_first.call(null,seq__14916_14940__$1);{
var G__14942 = cljs.core.chunk_rest.call(null,seq__14916_14940__$1);
var G__14943 = c__7211__auto___14941;
var G__14944 = cljs.core.count.call(null,c__7211__auto___14941);
var G__14945 = 0;
seq__14916_14930 = G__14942;
chunk__14917_14931 = G__14943;
count__14918_14932 = G__14944;
i__14919_14933 = G__14945;
continue;
}
} else
{var class_14946 = cljs.core.first.call(null,seq__14916_14940__$1);class_list_14929.add(class_14946);
{
var G__14947 = cljs.core.next.call(null,seq__14916_14940__$1);
var G__14948 = null;
var G__14949 = 0;
var G__14950 = 0;
seq__14916_14930 = G__14947;
chunk__14917_14931 = G__14948;
count__14918_14932 = G__14949;
i__14919_14933 = G__14950;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_14951 = elem__$1.className;var seq__14920_14952 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__14921_14953 = null;var count__14922_14954 = 0;var i__14923_14955 = 0;while(true){
if((i__14923_14955 < count__14922_14954))
{var class_14956 = cljs.core._nth.call(null,chunk__14921_14953,i__14923_14955);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_14951,class_14956)))
{} else
{elem__$1.className = (((class_name_14951 === ""))?class_14956:[cljs.core.str(class_name_14951),cljs.core.str(" "),cljs.core.str(class_14956)].join(''));
}
{
var G__14957 = seq__14920_14952;
var G__14958 = chunk__14921_14953;
var G__14959 = count__14922_14954;
var G__14960 = (i__14923_14955 + 1);
seq__14920_14952 = G__14957;
chunk__14921_14953 = G__14958;
count__14922_14954 = G__14959;
i__14923_14955 = G__14960;
continue;
}
} else
{var temp__4092__auto___14961 = cljs.core.seq.call(null,seq__14920_14952);if(temp__4092__auto___14961)
{var seq__14920_14962__$1 = temp__4092__auto___14961;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14920_14962__$1))
{var c__7211__auto___14963 = cljs.core.chunk_first.call(null,seq__14920_14962__$1);{
var G__14964 = cljs.core.chunk_rest.call(null,seq__14920_14962__$1);
var G__14965 = c__7211__auto___14963;
var G__14966 = cljs.core.count.call(null,c__7211__auto___14963);
var G__14967 = 0;
seq__14920_14952 = G__14964;
chunk__14921_14953 = G__14965;
count__14922_14954 = G__14966;
i__14923_14955 = G__14967;
continue;
}
} else
{var class_14968 = cljs.core.first.call(null,seq__14920_14962__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_14951,class_14968)))
{} else
{elem__$1.className = (((class_name_14951 === ""))?class_14968:[cljs.core.str(class_name_14951),cljs.core.str(" "),cljs.core.str(class_14968)].join(''));
}
{
var G__14969 = cljs.core.next.call(null,seq__14920_14962__$1);
var G__14970 = null;
var G__14971 = 0;
var G__14972 = 0;
seq__14920_14952 = G__14969;
chunk__14921_14953 = G__14970;
count__14922_14954 = G__14971;
i__14923_14955 = G__14972;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem__$1;
});
var add_class_BANG___3 = (function() { 
var G__14973__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14924_14974 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__14925_14975 = null;var count__14926_14976 = 0;var i__14927_14977 = 0;while(true){
if((i__14927_14977 < count__14926_14976))
{var c_14978 = cljs.core._nth.call(null,chunk__14925_14975,i__14927_14977);add_class_BANG_.call(null,elem__$1,c_14978);
{
var G__14979 = seq__14924_14974;
var G__14980 = chunk__14925_14975;
var G__14981 = count__14926_14976;
var G__14982 = (i__14927_14977 + 1);
seq__14924_14974 = G__14979;
chunk__14925_14975 = G__14980;
count__14926_14976 = G__14981;
i__14927_14977 = G__14982;
continue;
}
} else
{var temp__4092__auto___14983 = cljs.core.seq.call(null,seq__14924_14974);if(temp__4092__auto___14983)
{var seq__14924_14984__$1 = temp__4092__auto___14983;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14924_14984__$1))
{var c__7211__auto___14985 = cljs.core.chunk_first.call(null,seq__14924_14984__$1);{
var G__14986 = cljs.core.chunk_rest.call(null,seq__14924_14984__$1);
var G__14987 = c__7211__auto___14985;
var G__14988 = cljs.core.count.call(null,c__7211__auto___14985);
var G__14989 = 0;
seq__14924_14974 = G__14986;
chunk__14925_14975 = G__14987;
count__14926_14976 = G__14988;
i__14927_14977 = G__14989;
continue;
}
} else
{var c_14990 = cljs.core.first.call(null,seq__14924_14984__$1);add_class_BANG_.call(null,elem__$1,c_14990);
{
var G__14991 = cljs.core.next.call(null,seq__14924_14984__$1);
var G__14992 = null;
var G__14993 = 0;
var G__14994 = 0;
seq__14924_14974 = G__14991;
chunk__14925_14975 = G__14992;
count__14926_14976 = G__14993;
i__14927_14977 = G__14994;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__14973 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14973__delegate.call(this,elem,classes,more_classes);};
G__14973.cljs$lang$maxFixedArity = 2;
G__14973.cljs$lang$applyTo = (function (arglist__14995){
var elem = cljs.core.first(arglist__14995);
arglist__14995 = cljs.core.next(arglist__14995);
var classes = cljs.core.first(arglist__14995);
var more_classes = cljs.core.rest(arglist__14995);
return G__14973__delegate(elem,classes,more_classes);
});
G__14973.cljs$core$IFn$_invoke$arity$variadic = G__14973__delegate;
return G__14973;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
dommy.attrs.remove_class_str = (function remove_class_str(init_class_name,class$){var class_name = init_class_name;while(true){
var class_len = class_name.length;var temp__4090__auto__ = dommy.attrs.class_index.call(null,class_name,class$);if(cljs.core.truth_(temp__4090__auto__))
{var i = temp__4090__auto__;{
var G__14996 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__14996;
continue;
}
} else
{return class_name;
}
break;
}
});
/**
* remove class from and returns `elem`
* @param {...*} var_args
*/
dommy.attrs.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___15005 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___15005))
{var class_list_15006 = temp__4090__auto___15005;class_list_15006.remove(class$__$1);
} else
{var class_name_15007 = elem__$1.className;var new_class_name_15008 = dommy.attrs.remove_class_str.call(null,class_name_15007,class$__$1);if((class_name_15007 === new_class_name_15008))
{} else
{elem__$1.className = new_class_name_15008;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__15009__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__15001 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__15002 = null;var count__15003 = 0;var i__15004 = 0;while(true){
if((i__15004 < count__15003))
{var c = cljs.core._nth.call(null,chunk__15002,i__15004);remove_class_BANG_.call(null,elem__$1,c);
{
var G__15010 = seq__15001;
var G__15011 = chunk__15002;
var G__15012 = count__15003;
var G__15013 = (i__15004 + 1);
seq__15001 = G__15010;
chunk__15002 = G__15011;
count__15003 = G__15012;
i__15004 = G__15013;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__15001);if(temp__4092__auto__)
{var seq__15001__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15001__$1))
{var c__7211__auto__ = cljs.core.chunk_first.call(null,seq__15001__$1);{
var G__15014 = cljs.core.chunk_rest.call(null,seq__15001__$1);
var G__15015 = c__7211__auto__;
var G__15016 = cljs.core.count.call(null,c__7211__auto__);
var G__15017 = 0;
seq__15001 = G__15014;
chunk__15002 = G__15015;
count__15003 = G__15016;
i__15004 = G__15017;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__15001__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__15018 = cljs.core.next.call(null,seq__15001__$1);
var G__15019 = null;
var G__15020 = 0;
var G__15021 = 0;
seq__15001 = G__15018;
chunk__15002 = G__15019;
count__15003 = G__15020;
i__15004 = G__15021;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__15009 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15009__delegate.call(this,elem,class$,classes);};
G__15009.cljs$lang$maxFixedArity = 2;
G__15009.cljs$lang$applyTo = (function (arglist__15022){
var elem = cljs.core.first(arglist__15022);
arglist__15022 = cljs.core.next(arglist__15022);
var class$ = cljs.core.first(arglist__15022);
var classes = cljs.core.rest(arglist__15022);
return G__15009__delegate(elem,class$,classes);
});
G__15009.cljs$core$IFn$_invoke$arity$variadic = G__15009__delegate;
return G__15009;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.attrs.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___15023 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___15023))
{var class_list_15024 = temp__4090__auto___15023;class_list_15024.toggle(class$);
} else
{toggle_class_BANG_.call(null,elem__$1,class$,!(dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{dommy.attrs.add_class_BANG_.call(null,elem__$1,class$);
} else
{dommy.attrs.remove_class_BANG_.call(null,elem__$1,class$);
}
return elem__$1;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
dommy.attrs.style_str = (function style_str(x){if(typeof x === 'string')
{return x;
} else
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__15027){var vec__15028 = p__15027;var k = cljs.core.nth.call(null,vec__15028,0,null);var v = cljs.core.nth.call(null,vec__15028,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__15035_15041 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__15036_15042 = null;var count__15037_15043 = 0;var i__15038_15044 = 0;while(true){
if((i__15038_15044 < count__15037_15043))
{var vec__15039_15045 = cljs.core._nth.call(null,chunk__15036_15042,i__15038_15044);var k_15046 = cljs.core.nth.call(null,vec__15039_15045,0,null);var v_15047 = cljs.core.nth.call(null,vec__15039_15045,1,null);(style[cljs.core.name.call(null,k_15046)] = v_15047);
{
var G__15048 = seq__15035_15041;
var G__15049 = chunk__15036_15042;
var G__15050 = count__15037_15043;
var G__15051 = (i__15038_15044 + 1);
seq__15035_15041 = G__15048;
chunk__15036_15042 = G__15049;
count__15037_15043 = G__15050;
i__15038_15044 = G__15051;
continue;
}
} else
{var temp__4092__auto___15052 = cljs.core.seq.call(null,seq__15035_15041);if(temp__4092__auto___15052)
{var seq__15035_15053__$1 = temp__4092__auto___15052;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15035_15053__$1))
{var c__7211__auto___15054 = cljs.core.chunk_first.call(null,seq__15035_15053__$1);{
var G__15055 = cljs.core.chunk_rest.call(null,seq__15035_15053__$1);
var G__15056 = c__7211__auto___15054;
var G__15057 = cljs.core.count.call(null,c__7211__auto___15054);
var G__15058 = 0;
seq__15035_15041 = G__15055;
chunk__15036_15042 = G__15056;
count__15037_15043 = G__15057;
i__15038_15044 = G__15058;
continue;
}
} else
{var vec__15040_15059 = cljs.core.first.call(null,seq__15035_15053__$1);var k_15060 = cljs.core.nth.call(null,vec__15040_15059,0,null);var v_15061 = cljs.core.nth.call(null,vec__15040_15059,1,null);(style[cljs.core.name.call(null,k_15060)] = v_15061);
{
var G__15062 = cljs.core.next.call(null,seq__15035_15053__$1);
var G__15063 = null;
var G__15064 = 0;
var G__15065 = 0;
seq__15035_15041 = G__15062;
chunk__15036_15042 = G__15063;
count__15037_15043 = G__15064;
i__15038_15044 = G__15065;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__15066){
var elem = cljs.core.first(arglist__15066);
var kvs = cljs.core.rest(arglist__15066);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){if(cljs.core.truth_(k))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-1640531420,null)))].join('')));
}
return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__15073_15079 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__15074_15080 = null;var count__15075_15081 = 0;var i__15076_15082 = 0;while(true){
if((i__15076_15082 < count__15075_15081))
{var vec__15077_15083 = cljs.core._nth.call(null,chunk__15074_15080,i__15076_15082);var k_15084 = cljs.core.nth.call(null,vec__15077_15083,0,null);var v_15085 = cljs.core.nth.call(null,vec__15077_15083,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_15084,[cljs.core.str(v_15085),cljs.core.str("px")].join(''));
{
var G__15086 = seq__15073_15079;
var G__15087 = chunk__15074_15080;
var G__15088 = count__15075_15081;
var G__15089 = (i__15076_15082 + 1);
seq__15073_15079 = G__15086;
chunk__15074_15080 = G__15087;
count__15075_15081 = G__15088;
i__15076_15082 = G__15089;
continue;
}
} else
{var temp__4092__auto___15090 = cljs.core.seq.call(null,seq__15073_15079);if(temp__4092__auto___15090)
{var seq__15073_15091__$1 = temp__4092__auto___15090;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15073_15091__$1))
{var c__7211__auto___15092 = cljs.core.chunk_first.call(null,seq__15073_15091__$1);{
var G__15093 = cljs.core.chunk_rest.call(null,seq__15073_15091__$1);
var G__15094 = c__7211__auto___15092;
var G__15095 = cljs.core.count.call(null,c__7211__auto___15092);
var G__15096 = 0;
seq__15073_15079 = G__15093;
chunk__15074_15080 = G__15094;
count__15075_15081 = G__15095;
i__15076_15082 = G__15096;
continue;
}
} else
{var vec__15078_15097 = cljs.core.first.call(null,seq__15073_15091__$1);var k_15098 = cljs.core.nth.call(null,vec__15078_15097,0,null);var v_15099 = cljs.core.nth.call(null,vec__15078_15097,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_15098,[cljs.core.str(v_15099),cljs.core.str("px")].join(''));
{
var G__15100 = cljs.core.next.call(null,seq__15073_15091__$1);
var G__15101 = null;
var G__15102 = 0;
var G__15103 = 0;
seq__15073_15079 = G__15100;
chunk__15074_15080 = G__15101;
count__15075_15081 = G__15102;
i__15076_15082 = G__15103;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__15104){
var elem = cljs.core.first(arglist__15104);
var kvs = cljs.core.rest(arglist__15104);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){var pixels = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);if(cljs.core.seq.call(null,pixels))
{return parseInt(pixels);
} else
{return null;
}
});
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.attrs.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__15113 = dommy.template.__GT_node_like.call(null,elem);(G__15113[cljs.core.name.call(null,k)] = v);
return G__15113;
} else
{var G__15114 = dommy.template.__GT_node_like.call(null,elem);G__15114.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__15114;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__15121__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__15115_15122 = cljs.core.seq.call(null,cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([k,v], true),cljs.core.partition.call(null,2,kvs)));var chunk__15116_15123 = null;var count__15117_15124 = 0;var i__15118_15125 = 0;while(true){
if((i__15118_15125 < count__15117_15124))
{var vec__15119_15126 = cljs.core._nth.call(null,chunk__15116_15123,i__15118_15125);var k_15127__$1 = cljs.core.nth.call(null,vec__15119_15126,0,null);var v_15128__$1 = cljs.core.nth.call(null,vec__15119_15126,1,null);set_attr_BANG_.call(null,elem__$1,k_15127__$1,v_15128__$1);
{
var G__15129 = seq__15115_15122;
var G__15130 = chunk__15116_15123;
var G__15131 = count__15117_15124;
var G__15132 = (i__15118_15125 + 1);
seq__15115_15122 = G__15129;
chunk__15116_15123 = G__15130;
count__15117_15124 = G__15131;
i__15118_15125 = G__15132;
continue;
}
} else
{var temp__4092__auto___15133 = cljs.core.seq.call(null,seq__15115_15122);if(temp__4092__auto___15133)
{var seq__15115_15134__$1 = temp__4092__auto___15133;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15115_15134__$1))
{var c__7211__auto___15135 = cljs.core.chunk_first.call(null,seq__15115_15134__$1);{
var G__15136 = cljs.core.chunk_rest.call(null,seq__15115_15134__$1);
var G__15137 = c__7211__auto___15135;
var G__15138 = cljs.core.count.call(null,c__7211__auto___15135);
var G__15139 = 0;
seq__15115_15122 = G__15136;
chunk__15116_15123 = G__15137;
count__15117_15124 = G__15138;
i__15118_15125 = G__15139;
continue;
}
} else
{var vec__15120_15140 = cljs.core.first.call(null,seq__15115_15134__$1);var k_15141__$1 = cljs.core.nth.call(null,vec__15120_15140,0,null);var v_15142__$1 = cljs.core.nth.call(null,vec__15120_15140,1,null);set_attr_BANG_.call(null,elem__$1,k_15141__$1,v_15142__$1);
{
var G__15143 = cljs.core.next.call(null,seq__15115_15134__$1);
var G__15144 = null;
var G__15145 = 0;
var G__15146 = 0;
seq__15115_15122 = G__15143;
chunk__15116_15123 = G__15144;
count__15117_15124 = G__15145;
i__15118_15125 = G__15146;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__15121 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15121__delegate.call(this,elem,k,v,kvs);};
G__15121.cljs$lang$maxFixedArity = 3;
G__15121.cljs$lang$applyTo = (function (arglist__15147){
var elem = cljs.core.first(arglist__15147);
arglist__15147 = cljs.core.next(arglist__15147);
var k = cljs.core.first(arglist__15147);
arglist__15147 = cljs.core.next(arglist__15147);
var v = cljs.core.first(arglist__15147);
var kvs = cljs.core.rest(arglist__15147);
return G__15121__delegate(elem,k,v,kvs);
});
G__15121.cljs$core$IFn$_invoke$arity$variadic = G__15121__delegate;
return G__15121;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.attrs.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),null,new cljs.core.Keyword(null,"classes","classes",1867525016),null], true).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name.call(null,k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__15156__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__15152_15157 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__15153_15158 = null;var count__15154_15159 = 0;var i__15155_15160 = 0;while(true){
if((i__15155_15160 < count__15154_15159))
{var k_15161__$1 = cljs.core._nth.call(null,chunk__15153_15158,i__15155_15160);remove_attr_BANG_.call(null,elem__$1,k_15161__$1);
{
var G__15162 = seq__15152_15157;
var G__15163 = chunk__15153_15158;
var G__15164 = count__15154_15159;
var G__15165 = (i__15155_15160 + 1);
seq__15152_15157 = G__15162;
chunk__15153_15158 = G__15163;
count__15154_15159 = G__15164;
i__15155_15160 = G__15165;
continue;
}
} else
{var temp__4092__auto___15166 = cljs.core.seq.call(null,seq__15152_15157);if(temp__4092__auto___15166)
{var seq__15152_15167__$1 = temp__4092__auto___15166;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15152_15167__$1))
{var c__7211__auto___15168 = cljs.core.chunk_first.call(null,seq__15152_15167__$1);{
var G__15169 = cljs.core.chunk_rest.call(null,seq__15152_15167__$1);
var G__15170 = c__7211__auto___15168;
var G__15171 = cljs.core.count.call(null,c__7211__auto___15168);
var G__15172 = 0;
seq__15152_15157 = G__15169;
chunk__15153_15158 = G__15170;
count__15154_15159 = G__15171;
i__15155_15160 = G__15172;
continue;
}
} else
{var k_15173__$1 = cljs.core.first.call(null,seq__15152_15167__$1);remove_attr_BANG_.call(null,elem__$1,k_15173__$1);
{
var G__15174 = cljs.core.next.call(null,seq__15152_15167__$1);
var G__15175 = null;
var G__15176 = 0;
var G__15177 = 0;
seq__15152_15157 = G__15174;
chunk__15153_15158 = G__15175;
count__15154_15159 = G__15176;
i__15155_15160 = G__15177;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__15156 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15156__delegate.call(this,elem,k,ks);};
G__15156.cljs$lang$maxFixedArity = 2;
G__15156.cljs$lang$applyTo = (function (arglist__15178){
var elem = cljs.core.first(arglist__15178);
arglist__15178 = cljs.core.next(arglist__15178);
var k = cljs.core.first(arglist__15178);
var ks = cljs.core.rest(arglist__15178);
return G__15156__delegate(elem,k,ks);
});
G__15156.cljs$core$IFn$_invoke$arity$variadic = G__15156__delegate;
return G__15156;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
dommy.attrs.attr = (function attr(elem,k){if(cljs.core.truth_(k))
{return dommy.template.__GT_node_like.call(null,elem).getAttribute(cljs.core.name.call(null,k));
} else
{return null;
}
});
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){return ("none" === dommy.template.__GT_node_like.call(null,elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);toggle_BANG_.call(null,elem__$1,dommy.attrs.hidden_QMARK_.call(null,elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__15180 = dommy.template.__GT_node_like.call(null,elem);G__15180.style.display = ((show_QMARK_)?"":"none");
return G__15180;
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__15182 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__15182,false);
return G__15182;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__15184 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__15184,true);
return G__15184;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__15186 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__15186["constructor"] = Object);
return G__15186;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
