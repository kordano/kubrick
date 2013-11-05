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
var G__14907 = (i + class$.length);
start_from = G__14907;
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
{var temp__4090__auto___14932 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___14932))
{var class_list_14933 = temp__4090__auto___14932;var seq__14920_14934 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__14921_14935 = null;var count__14922_14936 = 0;var i__14923_14937 = 0;while(true){
if((i__14923_14937 < count__14922_14936))
{var class_14938 = cljs.core._nth.call(null,chunk__14921_14935,i__14923_14937);class_list_14933.add(class_14938);
{
var G__14939 = seq__14920_14934;
var G__14940 = chunk__14921_14935;
var G__14941 = count__14922_14936;
var G__14942 = (i__14923_14937 + 1);
seq__14920_14934 = G__14939;
chunk__14921_14935 = G__14940;
count__14922_14936 = G__14941;
i__14923_14937 = G__14942;
continue;
}
} else
{var temp__4092__auto___14943 = cljs.core.seq.call(null,seq__14920_14934);if(temp__4092__auto___14943)
{var seq__14920_14944__$1 = temp__4092__auto___14943;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14920_14944__$1))
{var c__7190__auto___14945 = cljs.core.chunk_first.call(null,seq__14920_14944__$1);{
var G__14946 = cljs.core.chunk_rest.call(null,seq__14920_14944__$1);
var G__14947 = c__7190__auto___14945;
var G__14948 = cljs.core.count.call(null,c__7190__auto___14945);
var G__14949 = 0;
seq__14920_14934 = G__14946;
chunk__14921_14935 = G__14947;
count__14922_14936 = G__14948;
i__14923_14937 = G__14949;
continue;
}
} else
{var class_14950 = cljs.core.first.call(null,seq__14920_14944__$1);class_list_14933.add(class_14950);
{
var G__14951 = cljs.core.next.call(null,seq__14920_14944__$1);
var G__14952 = null;
var G__14953 = 0;
var G__14954 = 0;
seq__14920_14934 = G__14951;
chunk__14921_14935 = G__14952;
count__14922_14936 = G__14953;
i__14923_14937 = G__14954;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_14955 = elem__$1.className;var seq__14924_14956 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__14925_14957 = null;var count__14926_14958 = 0;var i__14927_14959 = 0;while(true){
if((i__14927_14959 < count__14926_14958))
{var class_14960 = cljs.core._nth.call(null,chunk__14925_14957,i__14927_14959);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_14955,class_14960)))
{} else
{elem__$1.className = (((class_name_14955 === ""))?class_14960:[cljs.core.str(class_name_14955),cljs.core.str(" "),cljs.core.str(class_14960)].join(''));
}
{
var G__14961 = seq__14924_14956;
var G__14962 = chunk__14925_14957;
var G__14963 = count__14926_14958;
var G__14964 = (i__14927_14959 + 1);
seq__14924_14956 = G__14961;
chunk__14925_14957 = G__14962;
count__14926_14958 = G__14963;
i__14927_14959 = G__14964;
continue;
}
} else
{var temp__4092__auto___14965 = cljs.core.seq.call(null,seq__14924_14956);if(temp__4092__auto___14965)
{var seq__14924_14966__$1 = temp__4092__auto___14965;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14924_14966__$1))
{var c__7190__auto___14967 = cljs.core.chunk_first.call(null,seq__14924_14966__$1);{
var G__14968 = cljs.core.chunk_rest.call(null,seq__14924_14966__$1);
var G__14969 = c__7190__auto___14967;
var G__14970 = cljs.core.count.call(null,c__7190__auto___14967);
var G__14971 = 0;
seq__14924_14956 = G__14968;
chunk__14925_14957 = G__14969;
count__14926_14958 = G__14970;
i__14927_14959 = G__14971;
continue;
}
} else
{var class_14972 = cljs.core.first.call(null,seq__14924_14966__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_14955,class_14972)))
{} else
{elem__$1.className = (((class_name_14955 === ""))?class_14972:[cljs.core.str(class_name_14955),cljs.core.str(" "),cljs.core.str(class_14972)].join(''));
}
{
var G__14973 = cljs.core.next.call(null,seq__14924_14966__$1);
var G__14974 = null;
var G__14975 = 0;
var G__14976 = 0;
seq__14924_14956 = G__14973;
chunk__14925_14957 = G__14974;
count__14926_14958 = G__14975;
i__14927_14959 = G__14976;
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
var G__14977__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14928_14978 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__14929_14979 = null;var count__14930_14980 = 0;var i__14931_14981 = 0;while(true){
if((i__14931_14981 < count__14930_14980))
{var c_14982 = cljs.core._nth.call(null,chunk__14929_14979,i__14931_14981);add_class_BANG_.call(null,elem__$1,c_14982);
{
var G__14983 = seq__14928_14978;
var G__14984 = chunk__14929_14979;
var G__14985 = count__14930_14980;
var G__14986 = (i__14931_14981 + 1);
seq__14928_14978 = G__14983;
chunk__14929_14979 = G__14984;
count__14930_14980 = G__14985;
i__14931_14981 = G__14986;
continue;
}
} else
{var temp__4092__auto___14987 = cljs.core.seq.call(null,seq__14928_14978);if(temp__4092__auto___14987)
{var seq__14928_14988__$1 = temp__4092__auto___14987;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14928_14988__$1))
{var c__7190__auto___14989 = cljs.core.chunk_first.call(null,seq__14928_14988__$1);{
var G__14990 = cljs.core.chunk_rest.call(null,seq__14928_14988__$1);
var G__14991 = c__7190__auto___14989;
var G__14992 = cljs.core.count.call(null,c__7190__auto___14989);
var G__14993 = 0;
seq__14928_14978 = G__14990;
chunk__14929_14979 = G__14991;
count__14930_14980 = G__14992;
i__14931_14981 = G__14993;
continue;
}
} else
{var c_14994 = cljs.core.first.call(null,seq__14928_14988__$1);add_class_BANG_.call(null,elem__$1,c_14994);
{
var G__14995 = cljs.core.next.call(null,seq__14928_14988__$1);
var G__14996 = null;
var G__14997 = 0;
var G__14998 = 0;
seq__14928_14978 = G__14995;
chunk__14929_14979 = G__14996;
count__14930_14980 = G__14997;
i__14931_14981 = G__14998;
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
var G__14977 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14977__delegate.call(this,elem,classes,more_classes);};
G__14977.cljs$lang$maxFixedArity = 2;
G__14977.cljs$lang$applyTo = (function (arglist__14999){
var elem = cljs.core.first(arglist__14999);
arglist__14999 = cljs.core.next(arglist__14999);
var classes = cljs.core.first(arglist__14999);
var more_classes = cljs.core.rest(arglist__14999);
return G__14977__delegate(elem,classes,more_classes);
});
G__14977.cljs$core$IFn$_invoke$arity$variadic = G__14977__delegate;
return G__14977;
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
var G__15000 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__15000;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___15009 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___15009))
{var class_list_15010 = temp__4090__auto___15009;class_list_15010.remove(class$__$1);
} else
{var class_name_15011 = elem__$1.className;var new_class_name_15012 = dommy.attrs.remove_class_str.call(null,class_name_15011,class$__$1);if((class_name_15011 === new_class_name_15012))
{} else
{elem__$1.className = new_class_name_15012;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__15013__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__15005 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__15006 = null;var count__15007 = 0;var i__15008 = 0;while(true){
if((i__15008 < count__15007))
{var c = cljs.core._nth.call(null,chunk__15006,i__15008);remove_class_BANG_.call(null,elem__$1,c);
{
var G__15014 = seq__15005;
var G__15015 = chunk__15006;
var G__15016 = count__15007;
var G__15017 = (i__15008 + 1);
seq__15005 = G__15014;
chunk__15006 = G__15015;
count__15007 = G__15016;
i__15008 = G__15017;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__15005);if(temp__4092__auto__)
{var seq__15005__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15005__$1))
{var c__7190__auto__ = cljs.core.chunk_first.call(null,seq__15005__$1);{
var G__15018 = cljs.core.chunk_rest.call(null,seq__15005__$1);
var G__15019 = c__7190__auto__;
var G__15020 = cljs.core.count.call(null,c__7190__auto__);
var G__15021 = 0;
seq__15005 = G__15018;
chunk__15006 = G__15019;
count__15007 = G__15020;
i__15008 = G__15021;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__15005__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__15022 = cljs.core.next.call(null,seq__15005__$1);
var G__15023 = null;
var G__15024 = 0;
var G__15025 = 0;
seq__15005 = G__15022;
chunk__15006 = G__15023;
count__15007 = G__15024;
i__15008 = G__15025;
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
var G__15013 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15013__delegate.call(this,elem,class$,classes);};
G__15013.cljs$lang$maxFixedArity = 2;
G__15013.cljs$lang$applyTo = (function (arglist__15026){
var elem = cljs.core.first(arglist__15026);
arglist__15026 = cljs.core.next(arglist__15026);
var class$ = cljs.core.first(arglist__15026);
var classes = cljs.core.rest(arglist__15026);
return G__15013__delegate(elem,class$,classes);
});
G__15013.cljs$core$IFn$_invoke$arity$variadic = G__15013__delegate;
return G__15013;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___15027 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___15027))
{var class_list_15028 = temp__4090__auto___15027;class_list_15028.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__15031){var vec__15032 = p__15031;var k = cljs.core.nth.call(null,vec__15032,0,null);var v = cljs.core.nth.call(null,vec__15032,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__15039_15045 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__15040_15046 = null;var count__15041_15047 = 0;var i__15042_15048 = 0;while(true){
if((i__15042_15048 < count__15041_15047))
{var vec__15043_15049 = cljs.core._nth.call(null,chunk__15040_15046,i__15042_15048);var k_15050 = cljs.core.nth.call(null,vec__15043_15049,0,null);var v_15051 = cljs.core.nth.call(null,vec__15043_15049,1,null);(style[cljs.core.name.call(null,k_15050)] = v_15051);
{
var G__15052 = seq__15039_15045;
var G__15053 = chunk__15040_15046;
var G__15054 = count__15041_15047;
var G__15055 = (i__15042_15048 + 1);
seq__15039_15045 = G__15052;
chunk__15040_15046 = G__15053;
count__15041_15047 = G__15054;
i__15042_15048 = G__15055;
continue;
}
} else
{var temp__4092__auto___15056 = cljs.core.seq.call(null,seq__15039_15045);if(temp__4092__auto___15056)
{var seq__15039_15057__$1 = temp__4092__auto___15056;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15039_15057__$1))
{var c__7190__auto___15058 = cljs.core.chunk_first.call(null,seq__15039_15057__$1);{
var G__15059 = cljs.core.chunk_rest.call(null,seq__15039_15057__$1);
var G__15060 = c__7190__auto___15058;
var G__15061 = cljs.core.count.call(null,c__7190__auto___15058);
var G__15062 = 0;
seq__15039_15045 = G__15059;
chunk__15040_15046 = G__15060;
count__15041_15047 = G__15061;
i__15042_15048 = G__15062;
continue;
}
} else
{var vec__15044_15063 = cljs.core.first.call(null,seq__15039_15057__$1);var k_15064 = cljs.core.nth.call(null,vec__15044_15063,0,null);var v_15065 = cljs.core.nth.call(null,vec__15044_15063,1,null);(style[cljs.core.name.call(null,k_15064)] = v_15065);
{
var G__15066 = cljs.core.next.call(null,seq__15039_15057__$1);
var G__15067 = null;
var G__15068 = 0;
var G__15069 = 0;
seq__15039_15045 = G__15066;
chunk__15040_15046 = G__15067;
count__15041_15047 = G__15068;
i__15042_15048 = G__15069;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__15070){
var elem = cljs.core.first(arglist__15070);
var kvs = cljs.core.rest(arglist__15070);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__15077_15083 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__15078_15084 = null;var count__15079_15085 = 0;var i__15080_15086 = 0;while(true){
if((i__15080_15086 < count__15079_15085))
{var vec__15081_15087 = cljs.core._nth.call(null,chunk__15078_15084,i__15080_15086);var k_15088 = cljs.core.nth.call(null,vec__15081_15087,0,null);var v_15089 = cljs.core.nth.call(null,vec__15081_15087,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_15088,[cljs.core.str(v_15089),cljs.core.str("px")].join(''));
{
var G__15090 = seq__15077_15083;
var G__15091 = chunk__15078_15084;
var G__15092 = count__15079_15085;
var G__15093 = (i__15080_15086 + 1);
seq__15077_15083 = G__15090;
chunk__15078_15084 = G__15091;
count__15079_15085 = G__15092;
i__15080_15086 = G__15093;
continue;
}
} else
{var temp__4092__auto___15094 = cljs.core.seq.call(null,seq__15077_15083);if(temp__4092__auto___15094)
{var seq__15077_15095__$1 = temp__4092__auto___15094;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15077_15095__$1))
{var c__7190__auto___15096 = cljs.core.chunk_first.call(null,seq__15077_15095__$1);{
var G__15097 = cljs.core.chunk_rest.call(null,seq__15077_15095__$1);
var G__15098 = c__7190__auto___15096;
var G__15099 = cljs.core.count.call(null,c__7190__auto___15096);
var G__15100 = 0;
seq__15077_15083 = G__15097;
chunk__15078_15084 = G__15098;
count__15079_15085 = G__15099;
i__15080_15086 = G__15100;
continue;
}
} else
{var vec__15082_15101 = cljs.core.first.call(null,seq__15077_15095__$1);var k_15102 = cljs.core.nth.call(null,vec__15082_15101,0,null);var v_15103 = cljs.core.nth.call(null,vec__15082_15101,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_15102,[cljs.core.str(v_15103),cljs.core.str("px")].join(''));
{
var G__15104 = cljs.core.next.call(null,seq__15077_15095__$1);
var G__15105 = null;
var G__15106 = 0;
var G__15107 = 0;
seq__15077_15083 = G__15104;
chunk__15078_15084 = G__15105;
count__15079_15085 = G__15106;
i__15080_15086 = G__15107;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__15108){
var elem = cljs.core.first(arglist__15108);
var kvs = cljs.core.rest(arglist__15108);
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
{var G__15117 = dommy.template.__GT_node_like.call(null,elem);(G__15117[cljs.core.name.call(null,k)] = v);
return G__15117;
} else
{var G__15118 = dommy.template.__GT_node_like.call(null,elem);G__15118.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__15118;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__15125__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__15119_15126 = cljs.core.seq.call(null,cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([k,v], true),cljs.core.partition.call(null,2,kvs)));var chunk__15120_15127 = null;var count__15121_15128 = 0;var i__15122_15129 = 0;while(true){
if((i__15122_15129 < count__15121_15128))
{var vec__15123_15130 = cljs.core._nth.call(null,chunk__15120_15127,i__15122_15129);var k_15131__$1 = cljs.core.nth.call(null,vec__15123_15130,0,null);var v_15132__$1 = cljs.core.nth.call(null,vec__15123_15130,1,null);set_attr_BANG_.call(null,elem__$1,k_15131__$1,v_15132__$1);
{
var G__15133 = seq__15119_15126;
var G__15134 = chunk__15120_15127;
var G__15135 = count__15121_15128;
var G__15136 = (i__15122_15129 + 1);
seq__15119_15126 = G__15133;
chunk__15120_15127 = G__15134;
count__15121_15128 = G__15135;
i__15122_15129 = G__15136;
continue;
}
} else
{var temp__4092__auto___15137 = cljs.core.seq.call(null,seq__15119_15126);if(temp__4092__auto___15137)
{var seq__15119_15138__$1 = temp__4092__auto___15137;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15119_15138__$1))
{var c__7190__auto___15139 = cljs.core.chunk_first.call(null,seq__15119_15138__$1);{
var G__15140 = cljs.core.chunk_rest.call(null,seq__15119_15138__$1);
var G__15141 = c__7190__auto___15139;
var G__15142 = cljs.core.count.call(null,c__7190__auto___15139);
var G__15143 = 0;
seq__15119_15126 = G__15140;
chunk__15120_15127 = G__15141;
count__15121_15128 = G__15142;
i__15122_15129 = G__15143;
continue;
}
} else
{var vec__15124_15144 = cljs.core.first.call(null,seq__15119_15138__$1);var k_15145__$1 = cljs.core.nth.call(null,vec__15124_15144,0,null);var v_15146__$1 = cljs.core.nth.call(null,vec__15124_15144,1,null);set_attr_BANG_.call(null,elem__$1,k_15145__$1,v_15146__$1);
{
var G__15147 = cljs.core.next.call(null,seq__15119_15138__$1);
var G__15148 = null;
var G__15149 = 0;
var G__15150 = 0;
seq__15119_15126 = G__15147;
chunk__15120_15127 = G__15148;
count__15121_15128 = G__15149;
i__15122_15129 = G__15150;
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
var G__15125 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15125__delegate.call(this,elem,k,v,kvs);};
G__15125.cljs$lang$maxFixedArity = 3;
G__15125.cljs$lang$applyTo = (function (arglist__15151){
var elem = cljs.core.first(arglist__15151);
arglist__15151 = cljs.core.next(arglist__15151);
var k = cljs.core.first(arglist__15151);
arglist__15151 = cljs.core.next(arglist__15151);
var v = cljs.core.first(arglist__15151);
var kvs = cljs.core.rest(arglist__15151);
return G__15125__delegate(elem,k,v,kvs);
});
G__15125.cljs$core$IFn$_invoke$arity$variadic = G__15125__delegate;
return G__15125;
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
var G__15160__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__15156_15161 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__15157_15162 = null;var count__15158_15163 = 0;var i__15159_15164 = 0;while(true){
if((i__15159_15164 < count__15158_15163))
{var k_15165__$1 = cljs.core._nth.call(null,chunk__15157_15162,i__15159_15164);remove_attr_BANG_.call(null,elem__$1,k_15165__$1);
{
var G__15166 = seq__15156_15161;
var G__15167 = chunk__15157_15162;
var G__15168 = count__15158_15163;
var G__15169 = (i__15159_15164 + 1);
seq__15156_15161 = G__15166;
chunk__15157_15162 = G__15167;
count__15158_15163 = G__15168;
i__15159_15164 = G__15169;
continue;
}
} else
{var temp__4092__auto___15170 = cljs.core.seq.call(null,seq__15156_15161);if(temp__4092__auto___15170)
{var seq__15156_15171__$1 = temp__4092__auto___15170;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15156_15171__$1))
{var c__7190__auto___15172 = cljs.core.chunk_first.call(null,seq__15156_15171__$1);{
var G__15173 = cljs.core.chunk_rest.call(null,seq__15156_15171__$1);
var G__15174 = c__7190__auto___15172;
var G__15175 = cljs.core.count.call(null,c__7190__auto___15172);
var G__15176 = 0;
seq__15156_15161 = G__15173;
chunk__15157_15162 = G__15174;
count__15158_15163 = G__15175;
i__15159_15164 = G__15176;
continue;
}
} else
{var k_15177__$1 = cljs.core.first.call(null,seq__15156_15171__$1);remove_attr_BANG_.call(null,elem__$1,k_15177__$1);
{
var G__15178 = cljs.core.next.call(null,seq__15156_15171__$1);
var G__15179 = null;
var G__15180 = 0;
var G__15181 = 0;
seq__15156_15161 = G__15178;
chunk__15157_15162 = G__15179;
count__15158_15163 = G__15180;
i__15159_15164 = G__15181;
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
var G__15160 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15160__delegate.call(this,elem,k,ks);};
G__15160.cljs$lang$maxFixedArity = 2;
G__15160.cljs$lang$applyTo = (function (arglist__15182){
var elem = cljs.core.first(arglist__15182);
arglist__15182 = cljs.core.next(arglist__15182);
var k = cljs.core.first(arglist__15182);
var ks = cljs.core.rest(arglist__15182);
return G__15160__delegate(elem,k,ks);
});
G__15160.cljs$core$IFn$_invoke$arity$variadic = G__15160__delegate;
return G__15160;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__15184 = dommy.template.__GT_node_like.call(null,elem);G__15184.style.display = ((show_QMARK_)?"":"none");
return G__15184;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__15186 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__15186,false);
return G__15186;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__15188 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__15188,true);
return G__15188;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__15190 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__15190["constructor"] = Object);
return G__15190;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
