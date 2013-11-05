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
var G__14627 = (i + class$.length);
start_from = G__14627;
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
{var temp__4090__auto___14652 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___14652))
{var class_list_14653 = temp__4090__auto___14652;var seq__14640_14654 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__14641_14655 = null;var count__14642_14656 = 0;var i__14643_14657 = 0;while(true){
if((i__14643_14657 < count__14642_14656))
{var class_14658 = cljs.core._nth.call(null,chunk__14641_14655,i__14643_14657);class_list_14653.add(class_14658);
{
var G__14659 = seq__14640_14654;
var G__14660 = chunk__14641_14655;
var G__14661 = count__14642_14656;
var G__14662 = (i__14643_14657 + 1);
seq__14640_14654 = G__14659;
chunk__14641_14655 = G__14660;
count__14642_14656 = G__14661;
i__14643_14657 = G__14662;
continue;
}
} else
{var temp__4092__auto___14663 = cljs.core.seq.call(null,seq__14640_14654);if(temp__4092__auto___14663)
{var seq__14640_14664__$1 = temp__4092__auto___14663;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14640_14664__$1))
{var c__6931__auto___14665 = cljs.core.chunk_first.call(null,seq__14640_14664__$1);{
var G__14666 = cljs.core.chunk_rest.call(null,seq__14640_14664__$1);
var G__14667 = c__6931__auto___14665;
var G__14668 = cljs.core.count.call(null,c__6931__auto___14665);
var G__14669 = 0;
seq__14640_14654 = G__14666;
chunk__14641_14655 = G__14667;
count__14642_14656 = G__14668;
i__14643_14657 = G__14669;
continue;
}
} else
{var class_14670 = cljs.core.first.call(null,seq__14640_14664__$1);class_list_14653.add(class_14670);
{
var G__14671 = cljs.core.next.call(null,seq__14640_14664__$1);
var G__14672 = null;
var G__14673 = 0;
var G__14674 = 0;
seq__14640_14654 = G__14671;
chunk__14641_14655 = G__14672;
count__14642_14656 = G__14673;
i__14643_14657 = G__14674;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_14675 = elem__$1.className;var seq__14644_14676 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__14645_14677 = null;var count__14646_14678 = 0;var i__14647_14679 = 0;while(true){
if((i__14647_14679 < count__14646_14678))
{var class_14680 = cljs.core._nth.call(null,chunk__14645_14677,i__14647_14679);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_14675,class_14680)))
{} else
{elem__$1.className = (((class_name_14675 === ""))?class_14680:[cljs.core.str(class_name_14675),cljs.core.str(" "),cljs.core.str(class_14680)].join(''));
}
{
var G__14681 = seq__14644_14676;
var G__14682 = chunk__14645_14677;
var G__14683 = count__14646_14678;
var G__14684 = (i__14647_14679 + 1);
seq__14644_14676 = G__14681;
chunk__14645_14677 = G__14682;
count__14646_14678 = G__14683;
i__14647_14679 = G__14684;
continue;
}
} else
{var temp__4092__auto___14685 = cljs.core.seq.call(null,seq__14644_14676);if(temp__4092__auto___14685)
{var seq__14644_14686__$1 = temp__4092__auto___14685;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14644_14686__$1))
{var c__6931__auto___14687 = cljs.core.chunk_first.call(null,seq__14644_14686__$1);{
var G__14688 = cljs.core.chunk_rest.call(null,seq__14644_14686__$1);
var G__14689 = c__6931__auto___14687;
var G__14690 = cljs.core.count.call(null,c__6931__auto___14687);
var G__14691 = 0;
seq__14644_14676 = G__14688;
chunk__14645_14677 = G__14689;
count__14646_14678 = G__14690;
i__14647_14679 = G__14691;
continue;
}
} else
{var class_14692 = cljs.core.first.call(null,seq__14644_14686__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_14675,class_14692)))
{} else
{elem__$1.className = (((class_name_14675 === ""))?class_14692:[cljs.core.str(class_name_14675),cljs.core.str(" "),cljs.core.str(class_14692)].join(''));
}
{
var G__14693 = cljs.core.next.call(null,seq__14644_14686__$1);
var G__14694 = null;
var G__14695 = 0;
var G__14696 = 0;
seq__14644_14676 = G__14693;
chunk__14645_14677 = G__14694;
count__14646_14678 = G__14695;
i__14647_14679 = G__14696;
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
var G__14697__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14648_14698 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__14649_14699 = null;var count__14650_14700 = 0;var i__14651_14701 = 0;while(true){
if((i__14651_14701 < count__14650_14700))
{var c_14702 = cljs.core._nth.call(null,chunk__14649_14699,i__14651_14701);add_class_BANG_.call(null,elem__$1,c_14702);
{
var G__14703 = seq__14648_14698;
var G__14704 = chunk__14649_14699;
var G__14705 = count__14650_14700;
var G__14706 = (i__14651_14701 + 1);
seq__14648_14698 = G__14703;
chunk__14649_14699 = G__14704;
count__14650_14700 = G__14705;
i__14651_14701 = G__14706;
continue;
}
} else
{var temp__4092__auto___14707 = cljs.core.seq.call(null,seq__14648_14698);if(temp__4092__auto___14707)
{var seq__14648_14708__$1 = temp__4092__auto___14707;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14648_14708__$1))
{var c__6931__auto___14709 = cljs.core.chunk_first.call(null,seq__14648_14708__$1);{
var G__14710 = cljs.core.chunk_rest.call(null,seq__14648_14708__$1);
var G__14711 = c__6931__auto___14709;
var G__14712 = cljs.core.count.call(null,c__6931__auto___14709);
var G__14713 = 0;
seq__14648_14698 = G__14710;
chunk__14649_14699 = G__14711;
count__14650_14700 = G__14712;
i__14651_14701 = G__14713;
continue;
}
} else
{var c_14714 = cljs.core.first.call(null,seq__14648_14708__$1);add_class_BANG_.call(null,elem__$1,c_14714);
{
var G__14715 = cljs.core.next.call(null,seq__14648_14708__$1);
var G__14716 = null;
var G__14717 = 0;
var G__14718 = 0;
seq__14648_14698 = G__14715;
chunk__14649_14699 = G__14716;
count__14650_14700 = G__14717;
i__14651_14701 = G__14718;
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
var G__14697 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14697__delegate.call(this,elem,classes,more_classes);};
G__14697.cljs$lang$maxFixedArity = 2;
G__14697.cljs$lang$applyTo = (function (arglist__14719){
var elem = cljs.core.first(arglist__14719);
arglist__14719 = cljs.core.next(arglist__14719);
var classes = cljs.core.first(arglist__14719);
var more_classes = cljs.core.rest(arglist__14719);
return G__14697__delegate(elem,classes,more_classes);
});
G__14697.cljs$core$IFn$_invoke$arity$variadic = G__14697__delegate;
return G__14697;
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
var G__14720 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__14720;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___14729 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___14729))
{var class_list_14730 = temp__4090__auto___14729;class_list_14730.remove(class$__$1);
} else
{var class_name_14731 = elem__$1.className;var new_class_name_14732 = dommy.attrs.remove_class_str.call(null,class_name_14731,class$__$1);if((class_name_14731 === new_class_name_14732))
{} else
{elem__$1.className = new_class_name_14732;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__14733__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14725 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__14726 = null;var count__14727 = 0;var i__14728 = 0;while(true){
if((i__14728 < count__14727))
{var c = cljs.core._nth.call(null,chunk__14726,i__14728);remove_class_BANG_.call(null,elem__$1,c);
{
var G__14734 = seq__14725;
var G__14735 = chunk__14726;
var G__14736 = count__14727;
var G__14737 = (i__14728 + 1);
seq__14725 = G__14734;
chunk__14726 = G__14735;
count__14727 = G__14736;
i__14728 = G__14737;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14725);if(temp__4092__auto__)
{var seq__14725__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14725__$1))
{var c__6931__auto__ = cljs.core.chunk_first.call(null,seq__14725__$1);{
var G__14738 = cljs.core.chunk_rest.call(null,seq__14725__$1);
var G__14739 = c__6931__auto__;
var G__14740 = cljs.core.count.call(null,c__6931__auto__);
var G__14741 = 0;
seq__14725 = G__14738;
chunk__14726 = G__14739;
count__14727 = G__14740;
i__14728 = G__14741;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__14725__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__14742 = cljs.core.next.call(null,seq__14725__$1);
var G__14743 = null;
var G__14744 = 0;
var G__14745 = 0;
seq__14725 = G__14742;
chunk__14726 = G__14743;
count__14727 = G__14744;
i__14728 = G__14745;
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
var G__14733 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14733__delegate.call(this,elem,class$,classes);};
G__14733.cljs$lang$maxFixedArity = 2;
G__14733.cljs$lang$applyTo = (function (arglist__14746){
var elem = cljs.core.first(arglist__14746);
arglist__14746 = cljs.core.next(arglist__14746);
var class$ = cljs.core.first(arglist__14746);
var classes = cljs.core.rest(arglist__14746);
return G__14733__delegate(elem,class$,classes);
});
G__14733.cljs$core$IFn$_invoke$arity$variadic = G__14733__delegate;
return G__14733;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___14747 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___14747))
{var class_list_14748 = temp__4090__auto___14747;class_list_14748.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__14751){var vec__14752 = p__14751;var k = cljs.core.nth.call(null,vec__14752,0,null);var v = cljs.core.nth.call(null,vec__14752,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__14759_14765 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__14760_14766 = null;var count__14761_14767 = 0;var i__14762_14768 = 0;while(true){
if((i__14762_14768 < count__14761_14767))
{var vec__14763_14769 = cljs.core._nth.call(null,chunk__14760_14766,i__14762_14768);var k_14770 = cljs.core.nth.call(null,vec__14763_14769,0,null);var v_14771 = cljs.core.nth.call(null,vec__14763_14769,1,null);(style[cljs.core.name.call(null,k_14770)] = v_14771);
{
var G__14772 = seq__14759_14765;
var G__14773 = chunk__14760_14766;
var G__14774 = count__14761_14767;
var G__14775 = (i__14762_14768 + 1);
seq__14759_14765 = G__14772;
chunk__14760_14766 = G__14773;
count__14761_14767 = G__14774;
i__14762_14768 = G__14775;
continue;
}
} else
{var temp__4092__auto___14776 = cljs.core.seq.call(null,seq__14759_14765);if(temp__4092__auto___14776)
{var seq__14759_14777__$1 = temp__4092__auto___14776;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14759_14777__$1))
{var c__6931__auto___14778 = cljs.core.chunk_first.call(null,seq__14759_14777__$1);{
var G__14779 = cljs.core.chunk_rest.call(null,seq__14759_14777__$1);
var G__14780 = c__6931__auto___14778;
var G__14781 = cljs.core.count.call(null,c__6931__auto___14778);
var G__14782 = 0;
seq__14759_14765 = G__14779;
chunk__14760_14766 = G__14780;
count__14761_14767 = G__14781;
i__14762_14768 = G__14782;
continue;
}
} else
{var vec__14764_14783 = cljs.core.first.call(null,seq__14759_14777__$1);var k_14784 = cljs.core.nth.call(null,vec__14764_14783,0,null);var v_14785 = cljs.core.nth.call(null,vec__14764_14783,1,null);(style[cljs.core.name.call(null,k_14784)] = v_14785);
{
var G__14786 = cljs.core.next.call(null,seq__14759_14777__$1);
var G__14787 = null;
var G__14788 = 0;
var G__14789 = 0;
seq__14759_14765 = G__14786;
chunk__14760_14766 = G__14787;
count__14761_14767 = G__14788;
i__14762_14768 = G__14789;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__14790){
var elem = cljs.core.first(arglist__14790);
var kvs = cljs.core.rest(arglist__14790);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14797_14803 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__14798_14804 = null;var count__14799_14805 = 0;var i__14800_14806 = 0;while(true){
if((i__14800_14806 < count__14799_14805))
{var vec__14801_14807 = cljs.core._nth.call(null,chunk__14798_14804,i__14800_14806);var k_14808 = cljs.core.nth.call(null,vec__14801_14807,0,null);var v_14809 = cljs.core.nth.call(null,vec__14801_14807,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_14808,[cljs.core.str(v_14809),cljs.core.str("px")].join(''));
{
var G__14810 = seq__14797_14803;
var G__14811 = chunk__14798_14804;
var G__14812 = count__14799_14805;
var G__14813 = (i__14800_14806 + 1);
seq__14797_14803 = G__14810;
chunk__14798_14804 = G__14811;
count__14799_14805 = G__14812;
i__14800_14806 = G__14813;
continue;
}
} else
{var temp__4092__auto___14814 = cljs.core.seq.call(null,seq__14797_14803);if(temp__4092__auto___14814)
{var seq__14797_14815__$1 = temp__4092__auto___14814;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14797_14815__$1))
{var c__6931__auto___14816 = cljs.core.chunk_first.call(null,seq__14797_14815__$1);{
var G__14817 = cljs.core.chunk_rest.call(null,seq__14797_14815__$1);
var G__14818 = c__6931__auto___14816;
var G__14819 = cljs.core.count.call(null,c__6931__auto___14816);
var G__14820 = 0;
seq__14797_14803 = G__14817;
chunk__14798_14804 = G__14818;
count__14799_14805 = G__14819;
i__14800_14806 = G__14820;
continue;
}
} else
{var vec__14802_14821 = cljs.core.first.call(null,seq__14797_14815__$1);var k_14822 = cljs.core.nth.call(null,vec__14802_14821,0,null);var v_14823 = cljs.core.nth.call(null,vec__14802_14821,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_14822,[cljs.core.str(v_14823),cljs.core.str("px")].join(''));
{
var G__14824 = cljs.core.next.call(null,seq__14797_14815__$1);
var G__14825 = null;
var G__14826 = 0;
var G__14827 = 0;
seq__14797_14803 = G__14824;
chunk__14798_14804 = G__14825;
count__14799_14805 = G__14826;
i__14800_14806 = G__14827;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__14828){
var elem = cljs.core.first(arglist__14828);
var kvs = cljs.core.rest(arglist__14828);
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
{var G__14837 = dommy.template.__GT_node_like.call(null,elem);(G__14837[cljs.core.name.call(null,k)] = v);
return G__14837;
} else
{var G__14838 = dommy.template.__GT_node_like.call(null,elem);G__14838.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__14838;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__14845__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14839_14846 = cljs.core.seq.call(null,cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([k,v], true),cljs.core.partition.call(null,2,kvs)));var chunk__14840_14847 = null;var count__14841_14848 = 0;var i__14842_14849 = 0;while(true){
if((i__14842_14849 < count__14841_14848))
{var vec__14843_14850 = cljs.core._nth.call(null,chunk__14840_14847,i__14842_14849);var k_14851__$1 = cljs.core.nth.call(null,vec__14843_14850,0,null);var v_14852__$1 = cljs.core.nth.call(null,vec__14843_14850,1,null);set_attr_BANG_.call(null,elem__$1,k_14851__$1,v_14852__$1);
{
var G__14853 = seq__14839_14846;
var G__14854 = chunk__14840_14847;
var G__14855 = count__14841_14848;
var G__14856 = (i__14842_14849 + 1);
seq__14839_14846 = G__14853;
chunk__14840_14847 = G__14854;
count__14841_14848 = G__14855;
i__14842_14849 = G__14856;
continue;
}
} else
{var temp__4092__auto___14857 = cljs.core.seq.call(null,seq__14839_14846);if(temp__4092__auto___14857)
{var seq__14839_14858__$1 = temp__4092__auto___14857;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14839_14858__$1))
{var c__6931__auto___14859 = cljs.core.chunk_first.call(null,seq__14839_14858__$1);{
var G__14860 = cljs.core.chunk_rest.call(null,seq__14839_14858__$1);
var G__14861 = c__6931__auto___14859;
var G__14862 = cljs.core.count.call(null,c__6931__auto___14859);
var G__14863 = 0;
seq__14839_14846 = G__14860;
chunk__14840_14847 = G__14861;
count__14841_14848 = G__14862;
i__14842_14849 = G__14863;
continue;
}
} else
{var vec__14844_14864 = cljs.core.first.call(null,seq__14839_14858__$1);var k_14865__$1 = cljs.core.nth.call(null,vec__14844_14864,0,null);var v_14866__$1 = cljs.core.nth.call(null,vec__14844_14864,1,null);set_attr_BANG_.call(null,elem__$1,k_14865__$1,v_14866__$1);
{
var G__14867 = cljs.core.next.call(null,seq__14839_14858__$1);
var G__14868 = null;
var G__14869 = 0;
var G__14870 = 0;
seq__14839_14846 = G__14867;
chunk__14840_14847 = G__14868;
count__14841_14848 = G__14869;
i__14842_14849 = G__14870;
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
var G__14845 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__14845__delegate.call(this,elem,k,v,kvs);};
G__14845.cljs$lang$maxFixedArity = 3;
G__14845.cljs$lang$applyTo = (function (arglist__14871){
var elem = cljs.core.first(arglist__14871);
arglist__14871 = cljs.core.next(arglist__14871);
var k = cljs.core.first(arglist__14871);
arglist__14871 = cljs.core.next(arglist__14871);
var v = cljs.core.first(arglist__14871);
var kvs = cljs.core.rest(arglist__14871);
return G__14845__delegate(elem,k,v,kvs);
});
G__14845.cljs$core$IFn$_invoke$arity$variadic = G__14845__delegate;
return G__14845;
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
var G__14880__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14876_14881 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__14877_14882 = null;var count__14878_14883 = 0;var i__14879_14884 = 0;while(true){
if((i__14879_14884 < count__14878_14883))
{var k_14885__$1 = cljs.core._nth.call(null,chunk__14877_14882,i__14879_14884);remove_attr_BANG_.call(null,elem__$1,k_14885__$1);
{
var G__14886 = seq__14876_14881;
var G__14887 = chunk__14877_14882;
var G__14888 = count__14878_14883;
var G__14889 = (i__14879_14884 + 1);
seq__14876_14881 = G__14886;
chunk__14877_14882 = G__14887;
count__14878_14883 = G__14888;
i__14879_14884 = G__14889;
continue;
}
} else
{var temp__4092__auto___14890 = cljs.core.seq.call(null,seq__14876_14881);if(temp__4092__auto___14890)
{var seq__14876_14891__$1 = temp__4092__auto___14890;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14876_14891__$1))
{var c__6931__auto___14892 = cljs.core.chunk_first.call(null,seq__14876_14891__$1);{
var G__14893 = cljs.core.chunk_rest.call(null,seq__14876_14891__$1);
var G__14894 = c__6931__auto___14892;
var G__14895 = cljs.core.count.call(null,c__6931__auto___14892);
var G__14896 = 0;
seq__14876_14881 = G__14893;
chunk__14877_14882 = G__14894;
count__14878_14883 = G__14895;
i__14879_14884 = G__14896;
continue;
}
} else
{var k_14897__$1 = cljs.core.first.call(null,seq__14876_14891__$1);remove_attr_BANG_.call(null,elem__$1,k_14897__$1);
{
var G__14898 = cljs.core.next.call(null,seq__14876_14891__$1);
var G__14899 = null;
var G__14900 = 0;
var G__14901 = 0;
seq__14876_14881 = G__14898;
chunk__14877_14882 = G__14899;
count__14878_14883 = G__14900;
i__14879_14884 = G__14901;
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
var G__14880 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14880__delegate.call(this,elem,k,ks);};
G__14880.cljs$lang$maxFixedArity = 2;
G__14880.cljs$lang$applyTo = (function (arglist__14902){
var elem = cljs.core.first(arglist__14902);
arglist__14902 = cljs.core.next(arglist__14902);
var k = cljs.core.first(arglist__14902);
var ks = cljs.core.rest(arglist__14902);
return G__14880__delegate(elem,k,ks);
});
G__14880.cljs$core$IFn$_invoke$arity$variadic = G__14880__delegate;
return G__14880;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__14904 = dommy.template.__GT_node_like.call(null,elem);G__14904.style.display = ((show_QMARK_)?"":"none");
return G__14904;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__14906 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__14906,false);
return G__14906;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__14908 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__14908,true);
return G__14908;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__14910 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__14910["constructor"] = Object);
return G__14910;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
