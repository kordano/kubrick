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
var G__14648 = (i + class$.length);
start_from = G__14648;
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
{var temp__4090__auto___14673 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___14673))
{var class_list_14674 = temp__4090__auto___14673;var seq__14661_14675 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__14662_14676 = null;var count__14663_14677 = 0;var i__14664_14678 = 0;while(true){
if((i__14664_14678 < count__14663_14677))
{var class_14679 = cljs.core._nth.call(null,chunk__14662_14676,i__14664_14678);class_list_14674.add(class_14679);
{
var G__14680 = seq__14661_14675;
var G__14681 = chunk__14662_14676;
var G__14682 = count__14663_14677;
var G__14683 = (i__14664_14678 + 1);
seq__14661_14675 = G__14680;
chunk__14662_14676 = G__14681;
count__14663_14677 = G__14682;
i__14664_14678 = G__14683;
continue;
}
} else
{var temp__4092__auto___14684 = cljs.core.seq.call(null,seq__14661_14675);if(temp__4092__auto___14684)
{var seq__14661_14685__$1 = temp__4092__auto___14684;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14661_14685__$1))
{var c__6962__auto___14686 = cljs.core.chunk_first.call(null,seq__14661_14685__$1);{
var G__14687 = cljs.core.chunk_rest.call(null,seq__14661_14685__$1);
var G__14688 = c__6962__auto___14686;
var G__14689 = cljs.core.count.call(null,c__6962__auto___14686);
var G__14690 = 0;
seq__14661_14675 = G__14687;
chunk__14662_14676 = G__14688;
count__14663_14677 = G__14689;
i__14664_14678 = G__14690;
continue;
}
} else
{var class_14691 = cljs.core.first.call(null,seq__14661_14685__$1);class_list_14674.add(class_14691);
{
var G__14692 = cljs.core.next.call(null,seq__14661_14685__$1);
var G__14693 = null;
var G__14694 = 0;
var G__14695 = 0;
seq__14661_14675 = G__14692;
chunk__14662_14676 = G__14693;
count__14663_14677 = G__14694;
i__14664_14678 = G__14695;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_14696 = elem__$1.className;var seq__14665_14697 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__14666_14698 = null;var count__14667_14699 = 0;var i__14668_14700 = 0;while(true){
if((i__14668_14700 < count__14667_14699))
{var class_14701 = cljs.core._nth.call(null,chunk__14666_14698,i__14668_14700);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_14696,class_14701)))
{} else
{elem__$1.className = (((class_name_14696 === ""))?class_14701:[cljs.core.str(class_name_14696),cljs.core.str(" "),cljs.core.str(class_14701)].join(''));
}
{
var G__14702 = seq__14665_14697;
var G__14703 = chunk__14666_14698;
var G__14704 = count__14667_14699;
var G__14705 = (i__14668_14700 + 1);
seq__14665_14697 = G__14702;
chunk__14666_14698 = G__14703;
count__14667_14699 = G__14704;
i__14668_14700 = G__14705;
continue;
}
} else
{var temp__4092__auto___14706 = cljs.core.seq.call(null,seq__14665_14697);if(temp__4092__auto___14706)
{var seq__14665_14707__$1 = temp__4092__auto___14706;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14665_14707__$1))
{var c__6962__auto___14708 = cljs.core.chunk_first.call(null,seq__14665_14707__$1);{
var G__14709 = cljs.core.chunk_rest.call(null,seq__14665_14707__$1);
var G__14710 = c__6962__auto___14708;
var G__14711 = cljs.core.count.call(null,c__6962__auto___14708);
var G__14712 = 0;
seq__14665_14697 = G__14709;
chunk__14666_14698 = G__14710;
count__14667_14699 = G__14711;
i__14668_14700 = G__14712;
continue;
}
} else
{var class_14713 = cljs.core.first.call(null,seq__14665_14707__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_14696,class_14713)))
{} else
{elem__$1.className = (((class_name_14696 === ""))?class_14713:[cljs.core.str(class_name_14696),cljs.core.str(" "),cljs.core.str(class_14713)].join(''));
}
{
var G__14714 = cljs.core.next.call(null,seq__14665_14707__$1);
var G__14715 = null;
var G__14716 = 0;
var G__14717 = 0;
seq__14665_14697 = G__14714;
chunk__14666_14698 = G__14715;
count__14667_14699 = G__14716;
i__14668_14700 = G__14717;
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
var G__14718__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14669_14719 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__14670_14720 = null;var count__14671_14721 = 0;var i__14672_14722 = 0;while(true){
if((i__14672_14722 < count__14671_14721))
{var c_14723 = cljs.core._nth.call(null,chunk__14670_14720,i__14672_14722);add_class_BANG_.call(null,elem__$1,c_14723);
{
var G__14724 = seq__14669_14719;
var G__14725 = chunk__14670_14720;
var G__14726 = count__14671_14721;
var G__14727 = (i__14672_14722 + 1);
seq__14669_14719 = G__14724;
chunk__14670_14720 = G__14725;
count__14671_14721 = G__14726;
i__14672_14722 = G__14727;
continue;
}
} else
{var temp__4092__auto___14728 = cljs.core.seq.call(null,seq__14669_14719);if(temp__4092__auto___14728)
{var seq__14669_14729__$1 = temp__4092__auto___14728;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14669_14729__$1))
{var c__6962__auto___14730 = cljs.core.chunk_first.call(null,seq__14669_14729__$1);{
var G__14731 = cljs.core.chunk_rest.call(null,seq__14669_14729__$1);
var G__14732 = c__6962__auto___14730;
var G__14733 = cljs.core.count.call(null,c__6962__auto___14730);
var G__14734 = 0;
seq__14669_14719 = G__14731;
chunk__14670_14720 = G__14732;
count__14671_14721 = G__14733;
i__14672_14722 = G__14734;
continue;
}
} else
{var c_14735 = cljs.core.first.call(null,seq__14669_14729__$1);add_class_BANG_.call(null,elem__$1,c_14735);
{
var G__14736 = cljs.core.next.call(null,seq__14669_14729__$1);
var G__14737 = null;
var G__14738 = 0;
var G__14739 = 0;
seq__14669_14719 = G__14736;
chunk__14670_14720 = G__14737;
count__14671_14721 = G__14738;
i__14672_14722 = G__14739;
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
var G__14718 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14718__delegate.call(this,elem,classes,more_classes);};
G__14718.cljs$lang$maxFixedArity = 2;
G__14718.cljs$lang$applyTo = (function (arglist__14740){
var elem = cljs.core.first(arglist__14740);
arglist__14740 = cljs.core.next(arglist__14740);
var classes = cljs.core.first(arglist__14740);
var more_classes = cljs.core.rest(arglist__14740);
return G__14718__delegate(elem,classes,more_classes);
});
G__14718.cljs$core$IFn$_invoke$arity$variadic = G__14718__delegate;
return G__14718;
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
var G__14741 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__14741;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___14750 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___14750))
{var class_list_14751 = temp__4090__auto___14750;class_list_14751.remove(class$__$1);
} else
{var class_name_14752 = elem__$1.className;var new_class_name_14753 = dommy.attrs.remove_class_str.call(null,class_name_14752,class$__$1);if((class_name_14752 === new_class_name_14753))
{} else
{elem__$1.className = new_class_name_14753;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__14754__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14746 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__14747 = null;var count__14748 = 0;var i__14749 = 0;while(true){
if((i__14749 < count__14748))
{var c = cljs.core._nth.call(null,chunk__14747,i__14749);remove_class_BANG_.call(null,elem__$1,c);
{
var G__14755 = seq__14746;
var G__14756 = chunk__14747;
var G__14757 = count__14748;
var G__14758 = (i__14749 + 1);
seq__14746 = G__14755;
chunk__14747 = G__14756;
count__14748 = G__14757;
i__14749 = G__14758;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14746);if(temp__4092__auto__)
{var seq__14746__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14746__$1))
{var c__6962__auto__ = cljs.core.chunk_first.call(null,seq__14746__$1);{
var G__14759 = cljs.core.chunk_rest.call(null,seq__14746__$1);
var G__14760 = c__6962__auto__;
var G__14761 = cljs.core.count.call(null,c__6962__auto__);
var G__14762 = 0;
seq__14746 = G__14759;
chunk__14747 = G__14760;
count__14748 = G__14761;
i__14749 = G__14762;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__14746__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__14763 = cljs.core.next.call(null,seq__14746__$1);
var G__14764 = null;
var G__14765 = 0;
var G__14766 = 0;
seq__14746 = G__14763;
chunk__14747 = G__14764;
count__14748 = G__14765;
i__14749 = G__14766;
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
var G__14754 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14754__delegate.call(this,elem,class$,classes);};
G__14754.cljs$lang$maxFixedArity = 2;
G__14754.cljs$lang$applyTo = (function (arglist__14767){
var elem = cljs.core.first(arglist__14767);
arglist__14767 = cljs.core.next(arglist__14767);
var class$ = cljs.core.first(arglist__14767);
var classes = cljs.core.rest(arglist__14767);
return G__14754__delegate(elem,class$,classes);
});
G__14754.cljs$core$IFn$_invoke$arity$variadic = G__14754__delegate;
return G__14754;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___14768 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___14768))
{var class_list_14769 = temp__4090__auto___14768;class_list_14769.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__14772){var vec__14773 = p__14772;var k = cljs.core.nth.call(null,vec__14773,0,null);var v = cljs.core.nth.call(null,vec__14773,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__14780_14786 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__14781_14787 = null;var count__14782_14788 = 0;var i__14783_14789 = 0;while(true){
if((i__14783_14789 < count__14782_14788))
{var vec__14784_14790 = cljs.core._nth.call(null,chunk__14781_14787,i__14783_14789);var k_14791 = cljs.core.nth.call(null,vec__14784_14790,0,null);var v_14792 = cljs.core.nth.call(null,vec__14784_14790,1,null);(style[cljs.core.name.call(null,k_14791)] = v_14792);
{
var G__14793 = seq__14780_14786;
var G__14794 = chunk__14781_14787;
var G__14795 = count__14782_14788;
var G__14796 = (i__14783_14789 + 1);
seq__14780_14786 = G__14793;
chunk__14781_14787 = G__14794;
count__14782_14788 = G__14795;
i__14783_14789 = G__14796;
continue;
}
} else
{var temp__4092__auto___14797 = cljs.core.seq.call(null,seq__14780_14786);if(temp__4092__auto___14797)
{var seq__14780_14798__$1 = temp__4092__auto___14797;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14780_14798__$1))
{var c__6962__auto___14799 = cljs.core.chunk_first.call(null,seq__14780_14798__$1);{
var G__14800 = cljs.core.chunk_rest.call(null,seq__14780_14798__$1);
var G__14801 = c__6962__auto___14799;
var G__14802 = cljs.core.count.call(null,c__6962__auto___14799);
var G__14803 = 0;
seq__14780_14786 = G__14800;
chunk__14781_14787 = G__14801;
count__14782_14788 = G__14802;
i__14783_14789 = G__14803;
continue;
}
} else
{var vec__14785_14804 = cljs.core.first.call(null,seq__14780_14798__$1);var k_14805 = cljs.core.nth.call(null,vec__14785_14804,0,null);var v_14806 = cljs.core.nth.call(null,vec__14785_14804,1,null);(style[cljs.core.name.call(null,k_14805)] = v_14806);
{
var G__14807 = cljs.core.next.call(null,seq__14780_14798__$1);
var G__14808 = null;
var G__14809 = 0;
var G__14810 = 0;
seq__14780_14786 = G__14807;
chunk__14781_14787 = G__14808;
count__14782_14788 = G__14809;
i__14783_14789 = G__14810;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__14811){
var elem = cljs.core.first(arglist__14811);
var kvs = cljs.core.rest(arglist__14811);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14818_14824 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__14819_14825 = null;var count__14820_14826 = 0;var i__14821_14827 = 0;while(true){
if((i__14821_14827 < count__14820_14826))
{var vec__14822_14828 = cljs.core._nth.call(null,chunk__14819_14825,i__14821_14827);var k_14829 = cljs.core.nth.call(null,vec__14822_14828,0,null);var v_14830 = cljs.core.nth.call(null,vec__14822_14828,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_14829,[cljs.core.str(v_14830),cljs.core.str("px")].join(''));
{
var G__14831 = seq__14818_14824;
var G__14832 = chunk__14819_14825;
var G__14833 = count__14820_14826;
var G__14834 = (i__14821_14827 + 1);
seq__14818_14824 = G__14831;
chunk__14819_14825 = G__14832;
count__14820_14826 = G__14833;
i__14821_14827 = G__14834;
continue;
}
} else
{var temp__4092__auto___14835 = cljs.core.seq.call(null,seq__14818_14824);if(temp__4092__auto___14835)
{var seq__14818_14836__$1 = temp__4092__auto___14835;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14818_14836__$1))
{var c__6962__auto___14837 = cljs.core.chunk_first.call(null,seq__14818_14836__$1);{
var G__14838 = cljs.core.chunk_rest.call(null,seq__14818_14836__$1);
var G__14839 = c__6962__auto___14837;
var G__14840 = cljs.core.count.call(null,c__6962__auto___14837);
var G__14841 = 0;
seq__14818_14824 = G__14838;
chunk__14819_14825 = G__14839;
count__14820_14826 = G__14840;
i__14821_14827 = G__14841;
continue;
}
} else
{var vec__14823_14842 = cljs.core.first.call(null,seq__14818_14836__$1);var k_14843 = cljs.core.nth.call(null,vec__14823_14842,0,null);var v_14844 = cljs.core.nth.call(null,vec__14823_14842,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_14843,[cljs.core.str(v_14844),cljs.core.str("px")].join(''));
{
var G__14845 = cljs.core.next.call(null,seq__14818_14836__$1);
var G__14846 = null;
var G__14847 = 0;
var G__14848 = 0;
seq__14818_14824 = G__14845;
chunk__14819_14825 = G__14846;
count__14820_14826 = G__14847;
i__14821_14827 = G__14848;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__14849){
var elem = cljs.core.first(arglist__14849);
var kvs = cljs.core.rest(arglist__14849);
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
{var G__14858 = dommy.template.__GT_node_like.call(null,elem);(G__14858[cljs.core.name.call(null,k)] = v);
return G__14858;
} else
{var G__14859 = dommy.template.__GT_node_like.call(null,elem);G__14859.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__14859;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__14866__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14860_14867 = cljs.core.seq.call(null,cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([k,v], true),cljs.core.partition.call(null,2,kvs)));var chunk__14861_14868 = null;var count__14862_14869 = 0;var i__14863_14870 = 0;while(true){
if((i__14863_14870 < count__14862_14869))
{var vec__14864_14871 = cljs.core._nth.call(null,chunk__14861_14868,i__14863_14870);var k_14872__$1 = cljs.core.nth.call(null,vec__14864_14871,0,null);var v_14873__$1 = cljs.core.nth.call(null,vec__14864_14871,1,null);set_attr_BANG_.call(null,elem__$1,k_14872__$1,v_14873__$1);
{
var G__14874 = seq__14860_14867;
var G__14875 = chunk__14861_14868;
var G__14876 = count__14862_14869;
var G__14877 = (i__14863_14870 + 1);
seq__14860_14867 = G__14874;
chunk__14861_14868 = G__14875;
count__14862_14869 = G__14876;
i__14863_14870 = G__14877;
continue;
}
} else
{var temp__4092__auto___14878 = cljs.core.seq.call(null,seq__14860_14867);if(temp__4092__auto___14878)
{var seq__14860_14879__$1 = temp__4092__auto___14878;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14860_14879__$1))
{var c__6962__auto___14880 = cljs.core.chunk_first.call(null,seq__14860_14879__$1);{
var G__14881 = cljs.core.chunk_rest.call(null,seq__14860_14879__$1);
var G__14882 = c__6962__auto___14880;
var G__14883 = cljs.core.count.call(null,c__6962__auto___14880);
var G__14884 = 0;
seq__14860_14867 = G__14881;
chunk__14861_14868 = G__14882;
count__14862_14869 = G__14883;
i__14863_14870 = G__14884;
continue;
}
} else
{var vec__14865_14885 = cljs.core.first.call(null,seq__14860_14879__$1);var k_14886__$1 = cljs.core.nth.call(null,vec__14865_14885,0,null);var v_14887__$1 = cljs.core.nth.call(null,vec__14865_14885,1,null);set_attr_BANG_.call(null,elem__$1,k_14886__$1,v_14887__$1);
{
var G__14888 = cljs.core.next.call(null,seq__14860_14879__$1);
var G__14889 = null;
var G__14890 = 0;
var G__14891 = 0;
seq__14860_14867 = G__14888;
chunk__14861_14868 = G__14889;
count__14862_14869 = G__14890;
i__14863_14870 = G__14891;
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
var G__14866 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__14866__delegate.call(this,elem,k,v,kvs);};
G__14866.cljs$lang$maxFixedArity = 3;
G__14866.cljs$lang$applyTo = (function (arglist__14892){
var elem = cljs.core.first(arglist__14892);
arglist__14892 = cljs.core.next(arglist__14892);
var k = cljs.core.first(arglist__14892);
arglist__14892 = cljs.core.next(arglist__14892);
var v = cljs.core.first(arglist__14892);
var kvs = cljs.core.rest(arglist__14892);
return G__14866__delegate(elem,k,v,kvs);
});
G__14866.cljs$core$IFn$_invoke$arity$variadic = G__14866__delegate;
return G__14866;
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
var G__14901__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14897_14902 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__14898_14903 = null;var count__14899_14904 = 0;var i__14900_14905 = 0;while(true){
if((i__14900_14905 < count__14899_14904))
{var k_14906__$1 = cljs.core._nth.call(null,chunk__14898_14903,i__14900_14905);remove_attr_BANG_.call(null,elem__$1,k_14906__$1);
{
var G__14907 = seq__14897_14902;
var G__14908 = chunk__14898_14903;
var G__14909 = count__14899_14904;
var G__14910 = (i__14900_14905 + 1);
seq__14897_14902 = G__14907;
chunk__14898_14903 = G__14908;
count__14899_14904 = G__14909;
i__14900_14905 = G__14910;
continue;
}
} else
{var temp__4092__auto___14911 = cljs.core.seq.call(null,seq__14897_14902);if(temp__4092__auto___14911)
{var seq__14897_14912__$1 = temp__4092__auto___14911;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14897_14912__$1))
{var c__6962__auto___14913 = cljs.core.chunk_first.call(null,seq__14897_14912__$1);{
var G__14914 = cljs.core.chunk_rest.call(null,seq__14897_14912__$1);
var G__14915 = c__6962__auto___14913;
var G__14916 = cljs.core.count.call(null,c__6962__auto___14913);
var G__14917 = 0;
seq__14897_14902 = G__14914;
chunk__14898_14903 = G__14915;
count__14899_14904 = G__14916;
i__14900_14905 = G__14917;
continue;
}
} else
{var k_14918__$1 = cljs.core.first.call(null,seq__14897_14912__$1);remove_attr_BANG_.call(null,elem__$1,k_14918__$1);
{
var G__14919 = cljs.core.next.call(null,seq__14897_14912__$1);
var G__14920 = null;
var G__14921 = 0;
var G__14922 = 0;
seq__14897_14902 = G__14919;
chunk__14898_14903 = G__14920;
count__14899_14904 = G__14921;
i__14900_14905 = G__14922;
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
var G__14901 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14901__delegate.call(this,elem,k,ks);};
G__14901.cljs$lang$maxFixedArity = 2;
G__14901.cljs$lang$applyTo = (function (arglist__14923){
var elem = cljs.core.first(arglist__14923);
arglist__14923 = cljs.core.next(arglist__14923);
var k = cljs.core.first(arglist__14923);
var ks = cljs.core.rest(arglist__14923);
return G__14901__delegate(elem,k,ks);
});
G__14901.cljs$core$IFn$_invoke$arity$variadic = G__14901__delegate;
return G__14901;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__14925 = dommy.template.__GT_node_like.call(null,elem);G__14925.style.display = ((show_QMARK_)?"":"none");
return G__14925;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__14927 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__14927,false);
return G__14927;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__14929 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__14929,true);
return G__14929;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__14931 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__14931["constructor"] = Object);
return G__14931;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
