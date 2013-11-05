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
var G__27822 = (i + class$.length);
start_from = G__27822;
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
{var temp__4090__auto___27847 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___27847))
{var class_list_27848 = temp__4090__auto___27847;var seq__27835_27849 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__27836_27850 = null;var count__27837_27851 = 0;var i__27838_27852 = 0;while(true){
if((i__27838_27852 < count__27837_27851))
{var class_27853 = cljs.core._nth.call(null,chunk__27836_27850,i__27838_27852);class_list_27848.add(class_27853);
{
var G__27854 = seq__27835_27849;
var G__27855 = chunk__27836_27850;
var G__27856 = count__27837_27851;
var G__27857 = (i__27838_27852 + 1);
seq__27835_27849 = G__27854;
chunk__27836_27850 = G__27855;
count__27837_27851 = G__27856;
i__27838_27852 = G__27857;
continue;
}
} else
{var temp__4092__auto___27858 = cljs.core.seq.call(null,seq__27835_27849);if(temp__4092__auto___27858)
{var seq__27835_27859__$1 = temp__4092__auto___27858;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27835_27859__$1))
{var c__19844__auto___27860 = cljs.core.chunk_first.call(null,seq__27835_27859__$1);{
var G__27861 = cljs.core.chunk_rest.call(null,seq__27835_27859__$1);
var G__27862 = c__19844__auto___27860;
var G__27863 = cljs.core.count.call(null,c__19844__auto___27860);
var G__27864 = 0;
seq__27835_27849 = G__27861;
chunk__27836_27850 = G__27862;
count__27837_27851 = G__27863;
i__27838_27852 = G__27864;
continue;
}
} else
{var class_27865 = cljs.core.first.call(null,seq__27835_27859__$1);class_list_27848.add(class_27865);
{
var G__27866 = cljs.core.next.call(null,seq__27835_27859__$1);
var G__27867 = null;
var G__27868 = 0;
var G__27869 = 0;
seq__27835_27849 = G__27866;
chunk__27836_27850 = G__27867;
count__27837_27851 = G__27868;
i__27838_27852 = G__27869;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_27870 = elem__$1.className;var seq__27839_27871 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__27840_27872 = null;var count__27841_27873 = 0;var i__27842_27874 = 0;while(true){
if((i__27842_27874 < count__27841_27873))
{var class_27875 = cljs.core._nth.call(null,chunk__27840_27872,i__27842_27874);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_27870,class_27875)))
{} else
{elem__$1.className = (((class_name_27870 === ""))?class_27875:[cljs.core.str(class_name_27870),cljs.core.str(" "),cljs.core.str(class_27875)].join(''));
}
{
var G__27876 = seq__27839_27871;
var G__27877 = chunk__27840_27872;
var G__27878 = count__27841_27873;
var G__27879 = (i__27842_27874 + 1);
seq__27839_27871 = G__27876;
chunk__27840_27872 = G__27877;
count__27841_27873 = G__27878;
i__27842_27874 = G__27879;
continue;
}
} else
{var temp__4092__auto___27880 = cljs.core.seq.call(null,seq__27839_27871);if(temp__4092__auto___27880)
{var seq__27839_27881__$1 = temp__4092__auto___27880;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27839_27881__$1))
{var c__19844__auto___27882 = cljs.core.chunk_first.call(null,seq__27839_27881__$1);{
var G__27883 = cljs.core.chunk_rest.call(null,seq__27839_27881__$1);
var G__27884 = c__19844__auto___27882;
var G__27885 = cljs.core.count.call(null,c__19844__auto___27882);
var G__27886 = 0;
seq__27839_27871 = G__27883;
chunk__27840_27872 = G__27884;
count__27841_27873 = G__27885;
i__27842_27874 = G__27886;
continue;
}
} else
{var class_27887 = cljs.core.first.call(null,seq__27839_27881__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_27870,class_27887)))
{} else
{elem__$1.className = (((class_name_27870 === ""))?class_27887:[cljs.core.str(class_name_27870),cljs.core.str(" "),cljs.core.str(class_27887)].join(''));
}
{
var G__27888 = cljs.core.next.call(null,seq__27839_27881__$1);
var G__27889 = null;
var G__27890 = 0;
var G__27891 = 0;
seq__27839_27871 = G__27888;
chunk__27840_27872 = G__27889;
count__27841_27873 = G__27890;
i__27842_27874 = G__27891;
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
var G__27892__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__27843_27893 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__27844_27894 = null;var count__27845_27895 = 0;var i__27846_27896 = 0;while(true){
if((i__27846_27896 < count__27845_27895))
{var c_27897 = cljs.core._nth.call(null,chunk__27844_27894,i__27846_27896);add_class_BANG_.call(null,elem__$1,c_27897);
{
var G__27898 = seq__27843_27893;
var G__27899 = chunk__27844_27894;
var G__27900 = count__27845_27895;
var G__27901 = (i__27846_27896 + 1);
seq__27843_27893 = G__27898;
chunk__27844_27894 = G__27899;
count__27845_27895 = G__27900;
i__27846_27896 = G__27901;
continue;
}
} else
{var temp__4092__auto___27902 = cljs.core.seq.call(null,seq__27843_27893);if(temp__4092__auto___27902)
{var seq__27843_27903__$1 = temp__4092__auto___27902;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27843_27903__$1))
{var c__19844__auto___27904 = cljs.core.chunk_first.call(null,seq__27843_27903__$1);{
var G__27905 = cljs.core.chunk_rest.call(null,seq__27843_27903__$1);
var G__27906 = c__19844__auto___27904;
var G__27907 = cljs.core.count.call(null,c__19844__auto___27904);
var G__27908 = 0;
seq__27843_27893 = G__27905;
chunk__27844_27894 = G__27906;
count__27845_27895 = G__27907;
i__27846_27896 = G__27908;
continue;
}
} else
{var c_27909 = cljs.core.first.call(null,seq__27843_27903__$1);add_class_BANG_.call(null,elem__$1,c_27909);
{
var G__27910 = cljs.core.next.call(null,seq__27843_27903__$1);
var G__27911 = null;
var G__27912 = 0;
var G__27913 = 0;
seq__27843_27893 = G__27910;
chunk__27844_27894 = G__27911;
count__27845_27895 = G__27912;
i__27846_27896 = G__27913;
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
var G__27892 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__27892__delegate.call(this,elem,classes,more_classes);};
G__27892.cljs$lang$maxFixedArity = 2;
G__27892.cljs$lang$applyTo = (function (arglist__27914){
var elem = cljs.core.first(arglist__27914);
arglist__27914 = cljs.core.next(arglist__27914);
var classes = cljs.core.first(arglist__27914);
var more_classes = cljs.core.rest(arglist__27914);
return G__27892__delegate(elem,classes,more_classes);
});
G__27892.cljs$core$IFn$_invoke$arity$variadic = G__27892__delegate;
return G__27892;
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
var G__27915 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__27915;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___27924 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___27924))
{var class_list_27925 = temp__4090__auto___27924;class_list_27925.remove(class$__$1);
} else
{var class_name_27926 = elem__$1.className;var new_class_name_27927 = dommy.attrs.remove_class_str.call(null,class_name_27926,class$__$1);if((class_name_27926 === new_class_name_27927))
{} else
{elem__$1.className = new_class_name_27927;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__27928__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__27920 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__27921 = null;var count__27922 = 0;var i__27923 = 0;while(true){
if((i__27923 < count__27922))
{var c = cljs.core._nth.call(null,chunk__27921,i__27923);remove_class_BANG_.call(null,elem__$1,c);
{
var G__27929 = seq__27920;
var G__27930 = chunk__27921;
var G__27931 = count__27922;
var G__27932 = (i__27923 + 1);
seq__27920 = G__27929;
chunk__27921 = G__27930;
count__27922 = G__27931;
i__27923 = G__27932;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__27920);if(temp__4092__auto__)
{var seq__27920__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27920__$1))
{var c__19844__auto__ = cljs.core.chunk_first.call(null,seq__27920__$1);{
var G__27933 = cljs.core.chunk_rest.call(null,seq__27920__$1);
var G__27934 = c__19844__auto__;
var G__27935 = cljs.core.count.call(null,c__19844__auto__);
var G__27936 = 0;
seq__27920 = G__27933;
chunk__27921 = G__27934;
count__27922 = G__27935;
i__27923 = G__27936;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__27920__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__27937 = cljs.core.next.call(null,seq__27920__$1);
var G__27938 = null;
var G__27939 = 0;
var G__27940 = 0;
seq__27920 = G__27937;
chunk__27921 = G__27938;
count__27922 = G__27939;
i__27923 = G__27940;
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
var G__27928 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__27928__delegate.call(this,elem,class$,classes);};
G__27928.cljs$lang$maxFixedArity = 2;
G__27928.cljs$lang$applyTo = (function (arglist__27941){
var elem = cljs.core.first(arglist__27941);
arglist__27941 = cljs.core.next(arglist__27941);
var class$ = cljs.core.first(arglist__27941);
var classes = cljs.core.rest(arglist__27941);
return G__27928__delegate(elem,class$,classes);
});
G__27928.cljs$core$IFn$_invoke$arity$variadic = G__27928__delegate;
return G__27928;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___27942 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___27942))
{var class_list_27943 = temp__4090__auto___27942;class_list_27943.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__27946){var vec__27947 = p__27946;var k = cljs.core.nth.call(null,vec__27947,0,null);var v = cljs.core.nth.call(null,vec__27947,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__27954_27960 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__27955_27961 = null;var count__27956_27962 = 0;var i__27957_27963 = 0;while(true){
if((i__27957_27963 < count__27956_27962))
{var vec__27958_27964 = cljs.core._nth.call(null,chunk__27955_27961,i__27957_27963);var k_27965 = cljs.core.nth.call(null,vec__27958_27964,0,null);var v_27966 = cljs.core.nth.call(null,vec__27958_27964,1,null);(style[cljs.core.name.call(null,k_27965)] = v_27966);
{
var G__27967 = seq__27954_27960;
var G__27968 = chunk__27955_27961;
var G__27969 = count__27956_27962;
var G__27970 = (i__27957_27963 + 1);
seq__27954_27960 = G__27967;
chunk__27955_27961 = G__27968;
count__27956_27962 = G__27969;
i__27957_27963 = G__27970;
continue;
}
} else
{var temp__4092__auto___27971 = cljs.core.seq.call(null,seq__27954_27960);if(temp__4092__auto___27971)
{var seq__27954_27972__$1 = temp__4092__auto___27971;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27954_27972__$1))
{var c__19844__auto___27973 = cljs.core.chunk_first.call(null,seq__27954_27972__$1);{
var G__27974 = cljs.core.chunk_rest.call(null,seq__27954_27972__$1);
var G__27975 = c__19844__auto___27973;
var G__27976 = cljs.core.count.call(null,c__19844__auto___27973);
var G__27977 = 0;
seq__27954_27960 = G__27974;
chunk__27955_27961 = G__27975;
count__27956_27962 = G__27976;
i__27957_27963 = G__27977;
continue;
}
} else
{var vec__27959_27978 = cljs.core.first.call(null,seq__27954_27972__$1);var k_27979 = cljs.core.nth.call(null,vec__27959_27978,0,null);var v_27980 = cljs.core.nth.call(null,vec__27959_27978,1,null);(style[cljs.core.name.call(null,k_27979)] = v_27980);
{
var G__27981 = cljs.core.next.call(null,seq__27954_27972__$1);
var G__27982 = null;
var G__27983 = 0;
var G__27984 = 0;
seq__27954_27960 = G__27981;
chunk__27955_27961 = G__27982;
count__27956_27962 = G__27983;
i__27957_27963 = G__27984;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__27985){
var elem = cljs.core.first(arglist__27985);
var kvs = cljs.core.rest(arglist__27985);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__27992_27998 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__27993_27999 = null;var count__27994_28000 = 0;var i__27995_28001 = 0;while(true){
if((i__27995_28001 < count__27994_28000))
{var vec__27996_28002 = cljs.core._nth.call(null,chunk__27993_27999,i__27995_28001);var k_28003 = cljs.core.nth.call(null,vec__27996_28002,0,null);var v_28004 = cljs.core.nth.call(null,vec__27996_28002,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_28003,[cljs.core.str(v_28004),cljs.core.str("px")].join(''));
{
var G__28005 = seq__27992_27998;
var G__28006 = chunk__27993_27999;
var G__28007 = count__27994_28000;
var G__28008 = (i__27995_28001 + 1);
seq__27992_27998 = G__28005;
chunk__27993_27999 = G__28006;
count__27994_28000 = G__28007;
i__27995_28001 = G__28008;
continue;
}
} else
{var temp__4092__auto___28009 = cljs.core.seq.call(null,seq__27992_27998);if(temp__4092__auto___28009)
{var seq__27992_28010__$1 = temp__4092__auto___28009;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27992_28010__$1))
{var c__19844__auto___28011 = cljs.core.chunk_first.call(null,seq__27992_28010__$1);{
var G__28012 = cljs.core.chunk_rest.call(null,seq__27992_28010__$1);
var G__28013 = c__19844__auto___28011;
var G__28014 = cljs.core.count.call(null,c__19844__auto___28011);
var G__28015 = 0;
seq__27992_27998 = G__28012;
chunk__27993_27999 = G__28013;
count__27994_28000 = G__28014;
i__27995_28001 = G__28015;
continue;
}
} else
{var vec__27997_28016 = cljs.core.first.call(null,seq__27992_28010__$1);var k_28017 = cljs.core.nth.call(null,vec__27997_28016,0,null);var v_28018 = cljs.core.nth.call(null,vec__27997_28016,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_28017,[cljs.core.str(v_28018),cljs.core.str("px")].join(''));
{
var G__28019 = cljs.core.next.call(null,seq__27992_28010__$1);
var G__28020 = null;
var G__28021 = 0;
var G__28022 = 0;
seq__27992_27998 = G__28019;
chunk__27993_27999 = G__28020;
count__27994_28000 = G__28021;
i__27995_28001 = G__28022;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__28023){
var elem = cljs.core.first(arglist__28023);
var kvs = cljs.core.rest(arglist__28023);
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
{var G__28032 = dommy.template.__GT_node_like.call(null,elem);(G__28032[cljs.core.name.call(null,k)] = v);
return G__28032;
} else
{var G__28033 = dommy.template.__GT_node_like.call(null,elem);G__28033.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__28033;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__28040__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__28034_28041 = cljs.core.seq.call(null,cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([k,v], true),cljs.core.partition.call(null,2,kvs)));var chunk__28035_28042 = null;var count__28036_28043 = 0;var i__28037_28044 = 0;while(true){
if((i__28037_28044 < count__28036_28043))
{var vec__28038_28045 = cljs.core._nth.call(null,chunk__28035_28042,i__28037_28044);var k_28046__$1 = cljs.core.nth.call(null,vec__28038_28045,0,null);var v_28047__$1 = cljs.core.nth.call(null,vec__28038_28045,1,null);set_attr_BANG_.call(null,elem__$1,k_28046__$1,v_28047__$1);
{
var G__28048 = seq__28034_28041;
var G__28049 = chunk__28035_28042;
var G__28050 = count__28036_28043;
var G__28051 = (i__28037_28044 + 1);
seq__28034_28041 = G__28048;
chunk__28035_28042 = G__28049;
count__28036_28043 = G__28050;
i__28037_28044 = G__28051;
continue;
}
} else
{var temp__4092__auto___28052 = cljs.core.seq.call(null,seq__28034_28041);if(temp__4092__auto___28052)
{var seq__28034_28053__$1 = temp__4092__auto___28052;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28034_28053__$1))
{var c__19844__auto___28054 = cljs.core.chunk_first.call(null,seq__28034_28053__$1);{
var G__28055 = cljs.core.chunk_rest.call(null,seq__28034_28053__$1);
var G__28056 = c__19844__auto___28054;
var G__28057 = cljs.core.count.call(null,c__19844__auto___28054);
var G__28058 = 0;
seq__28034_28041 = G__28055;
chunk__28035_28042 = G__28056;
count__28036_28043 = G__28057;
i__28037_28044 = G__28058;
continue;
}
} else
{var vec__28039_28059 = cljs.core.first.call(null,seq__28034_28053__$1);var k_28060__$1 = cljs.core.nth.call(null,vec__28039_28059,0,null);var v_28061__$1 = cljs.core.nth.call(null,vec__28039_28059,1,null);set_attr_BANG_.call(null,elem__$1,k_28060__$1,v_28061__$1);
{
var G__28062 = cljs.core.next.call(null,seq__28034_28053__$1);
var G__28063 = null;
var G__28064 = 0;
var G__28065 = 0;
seq__28034_28041 = G__28062;
chunk__28035_28042 = G__28063;
count__28036_28043 = G__28064;
i__28037_28044 = G__28065;
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
var G__28040 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__28040__delegate.call(this,elem,k,v,kvs);};
G__28040.cljs$lang$maxFixedArity = 3;
G__28040.cljs$lang$applyTo = (function (arglist__28066){
var elem = cljs.core.first(arglist__28066);
arglist__28066 = cljs.core.next(arglist__28066);
var k = cljs.core.first(arglist__28066);
arglist__28066 = cljs.core.next(arglist__28066);
var v = cljs.core.first(arglist__28066);
var kvs = cljs.core.rest(arglist__28066);
return G__28040__delegate(elem,k,v,kvs);
});
G__28040.cljs$core$IFn$_invoke$arity$variadic = G__28040__delegate;
return G__28040;
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
var G__28075__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__28071_28076 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__28072_28077 = null;var count__28073_28078 = 0;var i__28074_28079 = 0;while(true){
if((i__28074_28079 < count__28073_28078))
{var k_28080__$1 = cljs.core._nth.call(null,chunk__28072_28077,i__28074_28079);remove_attr_BANG_.call(null,elem__$1,k_28080__$1);
{
var G__28081 = seq__28071_28076;
var G__28082 = chunk__28072_28077;
var G__28083 = count__28073_28078;
var G__28084 = (i__28074_28079 + 1);
seq__28071_28076 = G__28081;
chunk__28072_28077 = G__28082;
count__28073_28078 = G__28083;
i__28074_28079 = G__28084;
continue;
}
} else
{var temp__4092__auto___28085 = cljs.core.seq.call(null,seq__28071_28076);if(temp__4092__auto___28085)
{var seq__28071_28086__$1 = temp__4092__auto___28085;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28071_28086__$1))
{var c__19844__auto___28087 = cljs.core.chunk_first.call(null,seq__28071_28086__$1);{
var G__28088 = cljs.core.chunk_rest.call(null,seq__28071_28086__$1);
var G__28089 = c__19844__auto___28087;
var G__28090 = cljs.core.count.call(null,c__19844__auto___28087);
var G__28091 = 0;
seq__28071_28076 = G__28088;
chunk__28072_28077 = G__28089;
count__28073_28078 = G__28090;
i__28074_28079 = G__28091;
continue;
}
} else
{var k_28092__$1 = cljs.core.first.call(null,seq__28071_28086__$1);remove_attr_BANG_.call(null,elem__$1,k_28092__$1);
{
var G__28093 = cljs.core.next.call(null,seq__28071_28086__$1);
var G__28094 = null;
var G__28095 = 0;
var G__28096 = 0;
seq__28071_28076 = G__28093;
chunk__28072_28077 = G__28094;
count__28073_28078 = G__28095;
i__28074_28079 = G__28096;
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
var G__28075 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__28075__delegate.call(this,elem,k,ks);};
G__28075.cljs$lang$maxFixedArity = 2;
G__28075.cljs$lang$applyTo = (function (arglist__28097){
var elem = cljs.core.first(arglist__28097);
arglist__28097 = cljs.core.next(arglist__28097);
var k = cljs.core.first(arglist__28097);
var ks = cljs.core.rest(arglist__28097);
return G__28075__delegate(elem,k,ks);
});
G__28075.cljs$core$IFn$_invoke$arity$variadic = G__28075__delegate;
return G__28075;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__28099 = dommy.template.__GT_node_like.call(null,elem);G__28099.style.display = ((show_QMARK_)?"":"none");
return G__28099;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__28101 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__28101,false);
return G__28101;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__28103 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__28103,true);
return G__28103;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__28105 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__28105["constructor"] = Object);
return G__28105;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
