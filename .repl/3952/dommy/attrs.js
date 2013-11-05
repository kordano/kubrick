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
var G__14916 = (i + class$.length);
start_from = G__14916;
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
{var temp__4090__auto___14941 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___14941))
{var class_list_14942 = temp__4090__auto___14941;var seq__14929_14943 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__14930_14944 = null;var count__14931_14945 = 0;var i__14932_14946 = 0;while(true){
if((i__14932_14946 < count__14931_14945))
{var class_14947 = cljs.core._nth.call(null,chunk__14930_14944,i__14932_14946);class_list_14942.add(class_14947);
{
var G__14948 = seq__14929_14943;
var G__14949 = chunk__14930_14944;
var G__14950 = count__14931_14945;
var G__14951 = (i__14932_14946 + 1);
seq__14929_14943 = G__14948;
chunk__14930_14944 = G__14949;
count__14931_14945 = G__14950;
i__14932_14946 = G__14951;
continue;
}
} else
{var temp__4092__auto___14952 = cljs.core.seq.call(null,seq__14929_14943);if(temp__4092__auto___14952)
{var seq__14929_14953__$1 = temp__4092__auto___14952;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14929_14953__$1))
{var c__6940__auto___14954 = cljs.core.chunk_first.call(null,seq__14929_14953__$1);{
var G__14955 = cljs.core.chunk_rest.call(null,seq__14929_14953__$1);
var G__14956 = c__6940__auto___14954;
var G__14957 = cljs.core.count.call(null,c__6940__auto___14954);
var G__14958 = 0;
seq__14929_14943 = G__14955;
chunk__14930_14944 = G__14956;
count__14931_14945 = G__14957;
i__14932_14946 = G__14958;
continue;
}
} else
{var class_14959 = cljs.core.first.call(null,seq__14929_14953__$1);class_list_14942.add(class_14959);
{
var G__14960 = cljs.core.next.call(null,seq__14929_14953__$1);
var G__14961 = null;
var G__14962 = 0;
var G__14963 = 0;
seq__14929_14943 = G__14960;
chunk__14930_14944 = G__14961;
count__14931_14945 = G__14962;
i__14932_14946 = G__14963;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_14964 = elem__$1.className;var seq__14933_14965 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__14934_14966 = null;var count__14935_14967 = 0;var i__14936_14968 = 0;while(true){
if((i__14936_14968 < count__14935_14967))
{var class_14969 = cljs.core._nth.call(null,chunk__14934_14966,i__14936_14968);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_14964,class_14969)))
{} else
{elem__$1.className = (((class_name_14964 === ""))?class_14969:[cljs.core.str(class_name_14964),cljs.core.str(" "),cljs.core.str(class_14969)].join(''));
}
{
var G__14970 = seq__14933_14965;
var G__14971 = chunk__14934_14966;
var G__14972 = count__14935_14967;
var G__14973 = (i__14936_14968 + 1);
seq__14933_14965 = G__14970;
chunk__14934_14966 = G__14971;
count__14935_14967 = G__14972;
i__14936_14968 = G__14973;
continue;
}
} else
{var temp__4092__auto___14974 = cljs.core.seq.call(null,seq__14933_14965);if(temp__4092__auto___14974)
{var seq__14933_14975__$1 = temp__4092__auto___14974;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14933_14975__$1))
{var c__6940__auto___14976 = cljs.core.chunk_first.call(null,seq__14933_14975__$1);{
var G__14977 = cljs.core.chunk_rest.call(null,seq__14933_14975__$1);
var G__14978 = c__6940__auto___14976;
var G__14979 = cljs.core.count.call(null,c__6940__auto___14976);
var G__14980 = 0;
seq__14933_14965 = G__14977;
chunk__14934_14966 = G__14978;
count__14935_14967 = G__14979;
i__14936_14968 = G__14980;
continue;
}
} else
{var class_14981 = cljs.core.first.call(null,seq__14933_14975__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_14964,class_14981)))
{} else
{elem__$1.className = (((class_name_14964 === ""))?class_14981:[cljs.core.str(class_name_14964),cljs.core.str(" "),cljs.core.str(class_14981)].join(''));
}
{
var G__14982 = cljs.core.next.call(null,seq__14933_14975__$1);
var G__14983 = null;
var G__14984 = 0;
var G__14985 = 0;
seq__14933_14965 = G__14982;
chunk__14934_14966 = G__14983;
count__14935_14967 = G__14984;
i__14936_14968 = G__14985;
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
var G__14986__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14937_14987 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__14938_14988 = null;var count__14939_14989 = 0;var i__14940_14990 = 0;while(true){
if((i__14940_14990 < count__14939_14989))
{var c_14991 = cljs.core._nth.call(null,chunk__14938_14988,i__14940_14990);add_class_BANG_.call(null,elem__$1,c_14991);
{
var G__14992 = seq__14937_14987;
var G__14993 = chunk__14938_14988;
var G__14994 = count__14939_14989;
var G__14995 = (i__14940_14990 + 1);
seq__14937_14987 = G__14992;
chunk__14938_14988 = G__14993;
count__14939_14989 = G__14994;
i__14940_14990 = G__14995;
continue;
}
} else
{var temp__4092__auto___14996 = cljs.core.seq.call(null,seq__14937_14987);if(temp__4092__auto___14996)
{var seq__14937_14997__$1 = temp__4092__auto___14996;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14937_14997__$1))
{var c__6940__auto___14998 = cljs.core.chunk_first.call(null,seq__14937_14997__$1);{
var G__14999 = cljs.core.chunk_rest.call(null,seq__14937_14997__$1);
var G__15000 = c__6940__auto___14998;
var G__15001 = cljs.core.count.call(null,c__6940__auto___14998);
var G__15002 = 0;
seq__14937_14987 = G__14999;
chunk__14938_14988 = G__15000;
count__14939_14989 = G__15001;
i__14940_14990 = G__15002;
continue;
}
} else
{var c_15003 = cljs.core.first.call(null,seq__14937_14997__$1);add_class_BANG_.call(null,elem__$1,c_15003);
{
var G__15004 = cljs.core.next.call(null,seq__14937_14997__$1);
var G__15005 = null;
var G__15006 = 0;
var G__15007 = 0;
seq__14937_14987 = G__15004;
chunk__14938_14988 = G__15005;
count__14939_14989 = G__15006;
i__14940_14990 = G__15007;
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
var G__14986 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14986__delegate.call(this,elem,classes,more_classes);};
G__14986.cljs$lang$maxFixedArity = 2;
G__14986.cljs$lang$applyTo = (function (arglist__15008){
var elem = cljs.core.first(arglist__15008);
arglist__15008 = cljs.core.next(arglist__15008);
var classes = cljs.core.first(arglist__15008);
var more_classes = cljs.core.rest(arglist__15008);
return G__14986__delegate(elem,classes,more_classes);
});
G__14986.cljs$core$IFn$_invoke$arity$variadic = G__14986__delegate;
return G__14986;
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
var G__15009 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__15009;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___15018 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___15018))
{var class_list_15019 = temp__4090__auto___15018;class_list_15019.remove(class$__$1);
} else
{var class_name_15020 = elem__$1.className;var new_class_name_15021 = dommy.attrs.remove_class_str.call(null,class_name_15020,class$__$1);if((class_name_15020 === new_class_name_15021))
{} else
{elem__$1.className = new_class_name_15021;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__15022__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__15014 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__15015 = null;var count__15016 = 0;var i__15017 = 0;while(true){
if((i__15017 < count__15016))
{var c = cljs.core._nth.call(null,chunk__15015,i__15017);remove_class_BANG_.call(null,elem__$1,c);
{
var G__15023 = seq__15014;
var G__15024 = chunk__15015;
var G__15025 = count__15016;
var G__15026 = (i__15017 + 1);
seq__15014 = G__15023;
chunk__15015 = G__15024;
count__15016 = G__15025;
i__15017 = G__15026;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__15014);if(temp__4092__auto__)
{var seq__15014__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15014__$1))
{var c__6940__auto__ = cljs.core.chunk_first.call(null,seq__15014__$1);{
var G__15027 = cljs.core.chunk_rest.call(null,seq__15014__$1);
var G__15028 = c__6940__auto__;
var G__15029 = cljs.core.count.call(null,c__6940__auto__);
var G__15030 = 0;
seq__15014 = G__15027;
chunk__15015 = G__15028;
count__15016 = G__15029;
i__15017 = G__15030;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__15014__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__15031 = cljs.core.next.call(null,seq__15014__$1);
var G__15032 = null;
var G__15033 = 0;
var G__15034 = 0;
seq__15014 = G__15031;
chunk__15015 = G__15032;
count__15016 = G__15033;
i__15017 = G__15034;
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
var G__15022 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15022__delegate.call(this,elem,class$,classes);};
G__15022.cljs$lang$maxFixedArity = 2;
G__15022.cljs$lang$applyTo = (function (arglist__15035){
var elem = cljs.core.first(arglist__15035);
arglist__15035 = cljs.core.next(arglist__15035);
var class$ = cljs.core.first(arglist__15035);
var classes = cljs.core.rest(arglist__15035);
return G__15022__delegate(elem,class$,classes);
});
G__15022.cljs$core$IFn$_invoke$arity$variadic = G__15022__delegate;
return G__15022;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___15036 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___15036))
{var class_list_15037 = temp__4090__auto___15036;class_list_15037.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__15040){var vec__15041 = p__15040;var k = cljs.core.nth.call(null,vec__15041,0,null);var v = cljs.core.nth.call(null,vec__15041,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__15048_15054 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__15049_15055 = null;var count__15050_15056 = 0;var i__15051_15057 = 0;while(true){
if((i__15051_15057 < count__15050_15056))
{var vec__15052_15058 = cljs.core._nth.call(null,chunk__15049_15055,i__15051_15057);var k_15059 = cljs.core.nth.call(null,vec__15052_15058,0,null);var v_15060 = cljs.core.nth.call(null,vec__15052_15058,1,null);(style[cljs.core.name.call(null,k_15059)] = v_15060);
{
var G__15061 = seq__15048_15054;
var G__15062 = chunk__15049_15055;
var G__15063 = count__15050_15056;
var G__15064 = (i__15051_15057 + 1);
seq__15048_15054 = G__15061;
chunk__15049_15055 = G__15062;
count__15050_15056 = G__15063;
i__15051_15057 = G__15064;
continue;
}
} else
{var temp__4092__auto___15065 = cljs.core.seq.call(null,seq__15048_15054);if(temp__4092__auto___15065)
{var seq__15048_15066__$1 = temp__4092__auto___15065;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15048_15066__$1))
{var c__6940__auto___15067 = cljs.core.chunk_first.call(null,seq__15048_15066__$1);{
var G__15068 = cljs.core.chunk_rest.call(null,seq__15048_15066__$1);
var G__15069 = c__6940__auto___15067;
var G__15070 = cljs.core.count.call(null,c__6940__auto___15067);
var G__15071 = 0;
seq__15048_15054 = G__15068;
chunk__15049_15055 = G__15069;
count__15050_15056 = G__15070;
i__15051_15057 = G__15071;
continue;
}
} else
{var vec__15053_15072 = cljs.core.first.call(null,seq__15048_15066__$1);var k_15073 = cljs.core.nth.call(null,vec__15053_15072,0,null);var v_15074 = cljs.core.nth.call(null,vec__15053_15072,1,null);(style[cljs.core.name.call(null,k_15073)] = v_15074);
{
var G__15075 = cljs.core.next.call(null,seq__15048_15066__$1);
var G__15076 = null;
var G__15077 = 0;
var G__15078 = 0;
seq__15048_15054 = G__15075;
chunk__15049_15055 = G__15076;
count__15050_15056 = G__15077;
i__15051_15057 = G__15078;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__15079){
var elem = cljs.core.first(arglist__15079);
var kvs = cljs.core.rest(arglist__15079);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__15086_15092 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__15087_15093 = null;var count__15088_15094 = 0;var i__15089_15095 = 0;while(true){
if((i__15089_15095 < count__15088_15094))
{var vec__15090_15096 = cljs.core._nth.call(null,chunk__15087_15093,i__15089_15095);var k_15097 = cljs.core.nth.call(null,vec__15090_15096,0,null);var v_15098 = cljs.core.nth.call(null,vec__15090_15096,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_15097,[cljs.core.str(v_15098),cljs.core.str("px")].join(''));
{
var G__15099 = seq__15086_15092;
var G__15100 = chunk__15087_15093;
var G__15101 = count__15088_15094;
var G__15102 = (i__15089_15095 + 1);
seq__15086_15092 = G__15099;
chunk__15087_15093 = G__15100;
count__15088_15094 = G__15101;
i__15089_15095 = G__15102;
continue;
}
} else
{var temp__4092__auto___15103 = cljs.core.seq.call(null,seq__15086_15092);if(temp__4092__auto___15103)
{var seq__15086_15104__$1 = temp__4092__auto___15103;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15086_15104__$1))
{var c__6940__auto___15105 = cljs.core.chunk_first.call(null,seq__15086_15104__$1);{
var G__15106 = cljs.core.chunk_rest.call(null,seq__15086_15104__$1);
var G__15107 = c__6940__auto___15105;
var G__15108 = cljs.core.count.call(null,c__6940__auto___15105);
var G__15109 = 0;
seq__15086_15092 = G__15106;
chunk__15087_15093 = G__15107;
count__15088_15094 = G__15108;
i__15089_15095 = G__15109;
continue;
}
} else
{var vec__15091_15110 = cljs.core.first.call(null,seq__15086_15104__$1);var k_15111 = cljs.core.nth.call(null,vec__15091_15110,0,null);var v_15112 = cljs.core.nth.call(null,vec__15091_15110,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_15111,[cljs.core.str(v_15112),cljs.core.str("px")].join(''));
{
var G__15113 = cljs.core.next.call(null,seq__15086_15104__$1);
var G__15114 = null;
var G__15115 = 0;
var G__15116 = 0;
seq__15086_15092 = G__15113;
chunk__15087_15093 = G__15114;
count__15088_15094 = G__15115;
i__15089_15095 = G__15116;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__15117){
var elem = cljs.core.first(arglist__15117);
var kvs = cljs.core.rest(arglist__15117);
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
{var G__15126 = dommy.template.__GT_node_like.call(null,elem);(G__15126[cljs.core.name.call(null,k)] = v);
return G__15126;
} else
{var G__15127 = dommy.template.__GT_node_like.call(null,elem);G__15127.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__15127;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__15134__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__15128_15135 = cljs.core.seq.call(null,cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([k,v], true),cljs.core.partition.call(null,2,kvs)));var chunk__15129_15136 = null;var count__15130_15137 = 0;var i__15131_15138 = 0;while(true){
if((i__15131_15138 < count__15130_15137))
{var vec__15132_15139 = cljs.core._nth.call(null,chunk__15129_15136,i__15131_15138);var k_15140__$1 = cljs.core.nth.call(null,vec__15132_15139,0,null);var v_15141__$1 = cljs.core.nth.call(null,vec__15132_15139,1,null);set_attr_BANG_.call(null,elem__$1,k_15140__$1,v_15141__$1);
{
var G__15142 = seq__15128_15135;
var G__15143 = chunk__15129_15136;
var G__15144 = count__15130_15137;
var G__15145 = (i__15131_15138 + 1);
seq__15128_15135 = G__15142;
chunk__15129_15136 = G__15143;
count__15130_15137 = G__15144;
i__15131_15138 = G__15145;
continue;
}
} else
{var temp__4092__auto___15146 = cljs.core.seq.call(null,seq__15128_15135);if(temp__4092__auto___15146)
{var seq__15128_15147__$1 = temp__4092__auto___15146;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15128_15147__$1))
{var c__6940__auto___15148 = cljs.core.chunk_first.call(null,seq__15128_15147__$1);{
var G__15149 = cljs.core.chunk_rest.call(null,seq__15128_15147__$1);
var G__15150 = c__6940__auto___15148;
var G__15151 = cljs.core.count.call(null,c__6940__auto___15148);
var G__15152 = 0;
seq__15128_15135 = G__15149;
chunk__15129_15136 = G__15150;
count__15130_15137 = G__15151;
i__15131_15138 = G__15152;
continue;
}
} else
{var vec__15133_15153 = cljs.core.first.call(null,seq__15128_15147__$1);var k_15154__$1 = cljs.core.nth.call(null,vec__15133_15153,0,null);var v_15155__$1 = cljs.core.nth.call(null,vec__15133_15153,1,null);set_attr_BANG_.call(null,elem__$1,k_15154__$1,v_15155__$1);
{
var G__15156 = cljs.core.next.call(null,seq__15128_15147__$1);
var G__15157 = null;
var G__15158 = 0;
var G__15159 = 0;
seq__15128_15135 = G__15156;
chunk__15129_15136 = G__15157;
count__15130_15137 = G__15158;
i__15131_15138 = G__15159;
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
var G__15134 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15134__delegate.call(this,elem,k,v,kvs);};
G__15134.cljs$lang$maxFixedArity = 3;
G__15134.cljs$lang$applyTo = (function (arglist__15160){
var elem = cljs.core.first(arglist__15160);
arglist__15160 = cljs.core.next(arglist__15160);
var k = cljs.core.first(arglist__15160);
arglist__15160 = cljs.core.next(arglist__15160);
var v = cljs.core.first(arglist__15160);
var kvs = cljs.core.rest(arglist__15160);
return G__15134__delegate(elem,k,v,kvs);
});
G__15134.cljs$core$IFn$_invoke$arity$variadic = G__15134__delegate;
return G__15134;
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
var G__15169__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__15165_15170 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__15166_15171 = null;var count__15167_15172 = 0;var i__15168_15173 = 0;while(true){
if((i__15168_15173 < count__15167_15172))
{var k_15174__$1 = cljs.core._nth.call(null,chunk__15166_15171,i__15168_15173);remove_attr_BANG_.call(null,elem__$1,k_15174__$1);
{
var G__15175 = seq__15165_15170;
var G__15176 = chunk__15166_15171;
var G__15177 = count__15167_15172;
var G__15178 = (i__15168_15173 + 1);
seq__15165_15170 = G__15175;
chunk__15166_15171 = G__15176;
count__15167_15172 = G__15177;
i__15168_15173 = G__15178;
continue;
}
} else
{var temp__4092__auto___15179 = cljs.core.seq.call(null,seq__15165_15170);if(temp__4092__auto___15179)
{var seq__15165_15180__$1 = temp__4092__auto___15179;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15165_15180__$1))
{var c__6940__auto___15181 = cljs.core.chunk_first.call(null,seq__15165_15180__$1);{
var G__15182 = cljs.core.chunk_rest.call(null,seq__15165_15180__$1);
var G__15183 = c__6940__auto___15181;
var G__15184 = cljs.core.count.call(null,c__6940__auto___15181);
var G__15185 = 0;
seq__15165_15170 = G__15182;
chunk__15166_15171 = G__15183;
count__15167_15172 = G__15184;
i__15168_15173 = G__15185;
continue;
}
} else
{var k_15186__$1 = cljs.core.first.call(null,seq__15165_15180__$1);remove_attr_BANG_.call(null,elem__$1,k_15186__$1);
{
var G__15187 = cljs.core.next.call(null,seq__15165_15180__$1);
var G__15188 = null;
var G__15189 = 0;
var G__15190 = 0;
seq__15165_15170 = G__15187;
chunk__15166_15171 = G__15188;
count__15167_15172 = G__15189;
i__15168_15173 = G__15190;
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
var G__15169 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15169__delegate.call(this,elem,k,ks);};
G__15169.cljs$lang$maxFixedArity = 2;
G__15169.cljs$lang$applyTo = (function (arglist__15191){
var elem = cljs.core.first(arglist__15191);
arglist__15191 = cljs.core.next(arglist__15191);
var k = cljs.core.first(arglist__15191);
var ks = cljs.core.rest(arglist__15191);
return G__15169__delegate(elem,k,ks);
});
G__15169.cljs$core$IFn$_invoke$arity$variadic = G__15169__delegate;
return G__15169;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__15193 = dommy.template.__GT_node_like.call(null,elem);G__15193.style.display = ((show_QMARK_)?"":"none");
return G__15193;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__15195 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__15195,false);
return G__15195;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__15197 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__15197,true);
return G__15197;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__15199 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__15199["constructor"] = Object);
return G__15199;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
