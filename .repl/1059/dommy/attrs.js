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
var G__27567 = (i + class$.length);
start_from = G__27567;
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
{var temp__4090__auto___27592 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___27592))
{var class_list_27593 = temp__4090__auto___27592;var seq__27580_27594 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__27581_27595 = null;var count__27582_27596 = 0;var i__27583_27597 = 0;while(true){
if((i__27583_27597 < count__27582_27596))
{var class_27598 = cljs.core._nth.call(null,chunk__27581_27595,i__27583_27597);class_list_27593.add(class_27598);
{
var G__27599 = seq__27580_27594;
var G__27600 = chunk__27581_27595;
var G__27601 = count__27582_27596;
var G__27602 = (i__27583_27597 + 1);
seq__27580_27594 = G__27599;
chunk__27581_27595 = G__27600;
count__27582_27596 = G__27601;
i__27583_27597 = G__27602;
continue;
}
} else
{var temp__4092__auto___27603 = cljs.core.seq.call(null,seq__27580_27594);if(temp__4092__auto___27603)
{var seq__27580_27604__$1 = temp__4092__auto___27603;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27580_27604__$1))
{var c__19849__auto___27605 = cljs.core.chunk_first.call(null,seq__27580_27604__$1);{
var G__27606 = cljs.core.chunk_rest.call(null,seq__27580_27604__$1);
var G__27607 = c__19849__auto___27605;
var G__27608 = cljs.core.count.call(null,c__19849__auto___27605);
var G__27609 = 0;
seq__27580_27594 = G__27606;
chunk__27581_27595 = G__27607;
count__27582_27596 = G__27608;
i__27583_27597 = G__27609;
continue;
}
} else
{var class_27610 = cljs.core.first.call(null,seq__27580_27604__$1);class_list_27593.add(class_27610);
{
var G__27611 = cljs.core.next.call(null,seq__27580_27604__$1);
var G__27612 = null;
var G__27613 = 0;
var G__27614 = 0;
seq__27580_27594 = G__27611;
chunk__27581_27595 = G__27612;
count__27582_27596 = G__27613;
i__27583_27597 = G__27614;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_27615 = elem__$1.className;var seq__27584_27616 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__27585_27617 = null;var count__27586_27618 = 0;var i__27587_27619 = 0;while(true){
if((i__27587_27619 < count__27586_27618))
{var class_27620 = cljs.core._nth.call(null,chunk__27585_27617,i__27587_27619);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_27615,class_27620)))
{} else
{elem__$1.className = (((class_name_27615 === ""))?class_27620:[cljs.core.str(class_name_27615),cljs.core.str(" "),cljs.core.str(class_27620)].join(''));
}
{
var G__27621 = seq__27584_27616;
var G__27622 = chunk__27585_27617;
var G__27623 = count__27586_27618;
var G__27624 = (i__27587_27619 + 1);
seq__27584_27616 = G__27621;
chunk__27585_27617 = G__27622;
count__27586_27618 = G__27623;
i__27587_27619 = G__27624;
continue;
}
} else
{var temp__4092__auto___27625 = cljs.core.seq.call(null,seq__27584_27616);if(temp__4092__auto___27625)
{var seq__27584_27626__$1 = temp__4092__auto___27625;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27584_27626__$1))
{var c__19849__auto___27627 = cljs.core.chunk_first.call(null,seq__27584_27626__$1);{
var G__27628 = cljs.core.chunk_rest.call(null,seq__27584_27626__$1);
var G__27629 = c__19849__auto___27627;
var G__27630 = cljs.core.count.call(null,c__19849__auto___27627);
var G__27631 = 0;
seq__27584_27616 = G__27628;
chunk__27585_27617 = G__27629;
count__27586_27618 = G__27630;
i__27587_27619 = G__27631;
continue;
}
} else
{var class_27632 = cljs.core.first.call(null,seq__27584_27626__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_27615,class_27632)))
{} else
{elem__$1.className = (((class_name_27615 === ""))?class_27632:[cljs.core.str(class_name_27615),cljs.core.str(" "),cljs.core.str(class_27632)].join(''));
}
{
var G__27633 = cljs.core.next.call(null,seq__27584_27626__$1);
var G__27634 = null;
var G__27635 = 0;
var G__27636 = 0;
seq__27584_27616 = G__27633;
chunk__27585_27617 = G__27634;
count__27586_27618 = G__27635;
i__27587_27619 = G__27636;
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
var G__27637__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__27588_27638 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__27589_27639 = null;var count__27590_27640 = 0;var i__27591_27641 = 0;while(true){
if((i__27591_27641 < count__27590_27640))
{var c_27642 = cljs.core._nth.call(null,chunk__27589_27639,i__27591_27641);add_class_BANG_.call(null,elem__$1,c_27642);
{
var G__27643 = seq__27588_27638;
var G__27644 = chunk__27589_27639;
var G__27645 = count__27590_27640;
var G__27646 = (i__27591_27641 + 1);
seq__27588_27638 = G__27643;
chunk__27589_27639 = G__27644;
count__27590_27640 = G__27645;
i__27591_27641 = G__27646;
continue;
}
} else
{var temp__4092__auto___27647 = cljs.core.seq.call(null,seq__27588_27638);if(temp__4092__auto___27647)
{var seq__27588_27648__$1 = temp__4092__auto___27647;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27588_27648__$1))
{var c__19849__auto___27649 = cljs.core.chunk_first.call(null,seq__27588_27648__$1);{
var G__27650 = cljs.core.chunk_rest.call(null,seq__27588_27648__$1);
var G__27651 = c__19849__auto___27649;
var G__27652 = cljs.core.count.call(null,c__19849__auto___27649);
var G__27653 = 0;
seq__27588_27638 = G__27650;
chunk__27589_27639 = G__27651;
count__27590_27640 = G__27652;
i__27591_27641 = G__27653;
continue;
}
} else
{var c_27654 = cljs.core.first.call(null,seq__27588_27648__$1);add_class_BANG_.call(null,elem__$1,c_27654);
{
var G__27655 = cljs.core.next.call(null,seq__27588_27648__$1);
var G__27656 = null;
var G__27657 = 0;
var G__27658 = 0;
seq__27588_27638 = G__27655;
chunk__27589_27639 = G__27656;
count__27590_27640 = G__27657;
i__27591_27641 = G__27658;
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
var G__27637 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__27637__delegate.call(this,elem,classes,more_classes);};
G__27637.cljs$lang$maxFixedArity = 2;
G__27637.cljs$lang$applyTo = (function (arglist__27659){
var elem = cljs.core.first(arglist__27659);
arglist__27659 = cljs.core.next(arglist__27659);
var classes = cljs.core.first(arglist__27659);
var more_classes = cljs.core.rest(arglist__27659);
return G__27637__delegate(elem,classes,more_classes);
});
G__27637.cljs$core$IFn$_invoke$arity$variadic = G__27637__delegate;
return G__27637;
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
var G__27660 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__27660;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___27669 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___27669))
{var class_list_27670 = temp__4090__auto___27669;class_list_27670.remove(class$__$1);
} else
{var class_name_27671 = elem__$1.className;var new_class_name_27672 = dommy.attrs.remove_class_str.call(null,class_name_27671,class$__$1);if((class_name_27671 === new_class_name_27672))
{} else
{elem__$1.className = new_class_name_27672;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__27673__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__27665 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__27666 = null;var count__27667 = 0;var i__27668 = 0;while(true){
if((i__27668 < count__27667))
{var c = cljs.core._nth.call(null,chunk__27666,i__27668);remove_class_BANG_.call(null,elem__$1,c);
{
var G__27674 = seq__27665;
var G__27675 = chunk__27666;
var G__27676 = count__27667;
var G__27677 = (i__27668 + 1);
seq__27665 = G__27674;
chunk__27666 = G__27675;
count__27667 = G__27676;
i__27668 = G__27677;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__27665);if(temp__4092__auto__)
{var seq__27665__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27665__$1))
{var c__19849__auto__ = cljs.core.chunk_first.call(null,seq__27665__$1);{
var G__27678 = cljs.core.chunk_rest.call(null,seq__27665__$1);
var G__27679 = c__19849__auto__;
var G__27680 = cljs.core.count.call(null,c__19849__auto__);
var G__27681 = 0;
seq__27665 = G__27678;
chunk__27666 = G__27679;
count__27667 = G__27680;
i__27668 = G__27681;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__27665__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__27682 = cljs.core.next.call(null,seq__27665__$1);
var G__27683 = null;
var G__27684 = 0;
var G__27685 = 0;
seq__27665 = G__27682;
chunk__27666 = G__27683;
count__27667 = G__27684;
i__27668 = G__27685;
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
var G__27673 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__27673__delegate.call(this,elem,class$,classes);};
G__27673.cljs$lang$maxFixedArity = 2;
G__27673.cljs$lang$applyTo = (function (arglist__27686){
var elem = cljs.core.first(arglist__27686);
arglist__27686 = cljs.core.next(arglist__27686);
var class$ = cljs.core.first(arglist__27686);
var classes = cljs.core.rest(arglist__27686);
return G__27673__delegate(elem,class$,classes);
});
G__27673.cljs$core$IFn$_invoke$arity$variadic = G__27673__delegate;
return G__27673;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___27687 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___27687))
{var class_list_27688 = temp__4090__auto___27687;class_list_27688.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__27691){var vec__27692 = p__27691;var k = cljs.core.nth.call(null,vec__27692,0,null);var v = cljs.core.nth.call(null,vec__27692,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__27699_27705 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__27700_27706 = null;var count__27701_27707 = 0;var i__27702_27708 = 0;while(true){
if((i__27702_27708 < count__27701_27707))
{var vec__27703_27709 = cljs.core._nth.call(null,chunk__27700_27706,i__27702_27708);var k_27710 = cljs.core.nth.call(null,vec__27703_27709,0,null);var v_27711 = cljs.core.nth.call(null,vec__27703_27709,1,null);(style[cljs.core.name.call(null,k_27710)] = v_27711);
{
var G__27712 = seq__27699_27705;
var G__27713 = chunk__27700_27706;
var G__27714 = count__27701_27707;
var G__27715 = (i__27702_27708 + 1);
seq__27699_27705 = G__27712;
chunk__27700_27706 = G__27713;
count__27701_27707 = G__27714;
i__27702_27708 = G__27715;
continue;
}
} else
{var temp__4092__auto___27716 = cljs.core.seq.call(null,seq__27699_27705);if(temp__4092__auto___27716)
{var seq__27699_27717__$1 = temp__4092__auto___27716;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27699_27717__$1))
{var c__19849__auto___27718 = cljs.core.chunk_first.call(null,seq__27699_27717__$1);{
var G__27719 = cljs.core.chunk_rest.call(null,seq__27699_27717__$1);
var G__27720 = c__19849__auto___27718;
var G__27721 = cljs.core.count.call(null,c__19849__auto___27718);
var G__27722 = 0;
seq__27699_27705 = G__27719;
chunk__27700_27706 = G__27720;
count__27701_27707 = G__27721;
i__27702_27708 = G__27722;
continue;
}
} else
{var vec__27704_27723 = cljs.core.first.call(null,seq__27699_27717__$1);var k_27724 = cljs.core.nth.call(null,vec__27704_27723,0,null);var v_27725 = cljs.core.nth.call(null,vec__27704_27723,1,null);(style[cljs.core.name.call(null,k_27724)] = v_27725);
{
var G__27726 = cljs.core.next.call(null,seq__27699_27717__$1);
var G__27727 = null;
var G__27728 = 0;
var G__27729 = 0;
seq__27699_27705 = G__27726;
chunk__27700_27706 = G__27727;
count__27701_27707 = G__27728;
i__27702_27708 = G__27729;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__27730){
var elem = cljs.core.first(arglist__27730);
var kvs = cljs.core.rest(arglist__27730);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__27737_27743 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__27738_27744 = null;var count__27739_27745 = 0;var i__27740_27746 = 0;while(true){
if((i__27740_27746 < count__27739_27745))
{var vec__27741_27747 = cljs.core._nth.call(null,chunk__27738_27744,i__27740_27746);var k_27748 = cljs.core.nth.call(null,vec__27741_27747,0,null);var v_27749 = cljs.core.nth.call(null,vec__27741_27747,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_27748,[cljs.core.str(v_27749),cljs.core.str("px")].join(''));
{
var G__27750 = seq__27737_27743;
var G__27751 = chunk__27738_27744;
var G__27752 = count__27739_27745;
var G__27753 = (i__27740_27746 + 1);
seq__27737_27743 = G__27750;
chunk__27738_27744 = G__27751;
count__27739_27745 = G__27752;
i__27740_27746 = G__27753;
continue;
}
} else
{var temp__4092__auto___27754 = cljs.core.seq.call(null,seq__27737_27743);if(temp__4092__auto___27754)
{var seq__27737_27755__$1 = temp__4092__auto___27754;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27737_27755__$1))
{var c__19849__auto___27756 = cljs.core.chunk_first.call(null,seq__27737_27755__$1);{
var G__27757 = cljs.core.chunk_rest.call(null,seq__27737_27755__$1);
var G__27758 = c__19849__auto___27756;
var G__27759 = cljs.core.count.call(null,c__19849__auto___27756);
var G__27760 = 0;
seq__27737_27743 = G__27757;
chunk__27738_27744 = G__27758;
count__27739_27745 = G__27759;
i__27740_27746 = G__27760;
continue;
}
} else
{var vec__27742_27761 = cljs.core.first.call(null,seq__27737_27755__$1);var k_27762 = cljs.core.nth.call(null,vec__27742_27761,0,null);var v_27763 = cljs.core.nth.call(null,vec__27742_27761,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_27762,[cljs.core.str(v_27763),cljs.core.str("px")].join(''));
{
var G__27764 = cljs.core.next.call(null,seq__27737_27755__$1);
var G__27765 = null;
var G__27766 = 0;
var G__27767 = 0;
seq__27737_27743 = G__27764;
chunk__27738_27744 = G__27765;
count__27739_27745 = G__27766;
i__27740_27746 = G__27767;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__27768){
var elem = cljs.core.first(arglist__27768);
var kvs = cljs.core.rest(arglist__27768);
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
{var G__27777 = dommy.template.__GT_node_like.call(null,elem);(G__27777[cljs.core.name.call(null,k)] = v);
return G__27777;
} else
{var G__27778 = dommy.template.__GT_node_like.call(null,elem);G__27778.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__27778;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__27785__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__27779_27786 = cljs.core.seq.call(null,cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([k,v], true),cljs.core.partition.call(null,2,kvs)));var chunk__27780_27787 = null;var count__27781_27788 = 0;var i__27782_27789 = 0;while(true){
if((i__27782_27789 < count__27781_27788))
{var vec__27783_27790 = cljs.core._nth.call(null,chunk__27780_27787,i__27782_27789);var k_27791__$1 = cljs.core.nth.call(null,vec__27783_27790,0,null);var v_27792__$1 = cljs.core.nth.call(null,vec__27783_27790,1,null);set_attr_BANG_.call(null,elem__$1,k_27791__$1,v_27792__$1);
{
var G__27793 = seq__27779_27786;
var G__27794 = chunk__27780_27787;
var G__27795 = count__27781_27788;
var G__27796 = (i__27782_27789 + 1);
seq__27779_27786 = G__27793;
chunk__27780_27787 = G__27794;
count__27781_27788 = G__27795;
i__27782_27789 = G__27796;
continue;
}
} else
{var temp__4092__auto___27797 = cljs.core.seq.call(null,seq__27779_27786);if(temp__4092__auto___27797)
{var seq__27779_27798__$1 = temp__4092__auto___27797;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27779_27798__$1))
{var c__19849__auto___27799 = cljs.core.chunk_first.call(null,seq__27779_27798__$1);{
var G__27800 = cljs.core.chunk_rest.call(null,seq__27779_27798__$1);
var G__27801 = c__19849__auto___27799;
var G__27802 = cljs.core.count.call(null,c__19849__auto___27799);
var G__27803 = 0;
seq__27779_27786 = G__27800;
chunk__27780_27787 = G__27801;
count__27781_27788 = G__27802;
i__27782_27789 = G__27803;
continue;
}
} else
{var vec__27784_27804 = cljs.core.first.call(null,seq__27779_27798__$1);var k_27805__$1 = cljs.core.nth.call(null,vec__27784_27804,0,null);var v_27806__$1 = cljs.core.nth.call(null,vec__27784_27804,1,null);set_attr_BANG_.call(null,elem__$1,k_27805__$1,v_27806__$1);
{
var G__27807 = cljs.core.next.call(null,seq__27779_27798__$1);
var G__27808 = null;
var G__27809 = 0;
var G__27810 = 0;
seq__27779_27786 = G__27807;
chunk__27780_27787 = G__27808;
count__27781_27788 = G__27809;
i__27782_27789 = G__27810;
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
var G__27785 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__27785__delegate.call(this,elem,k,v,kvs);};
G__27785.cljs$lang$maxFixedArity = 3;
G__27785.cljs$lang$applyTo = (function (arglist__27811){
var elem = cljs.core.first(arglist__27811);
arglist__27811 = cljs.core.next(arglist__27811);
var k = cljs.core.first(arglist__27811);
arglist__27811 = cljs.core.next(arglist__27811);
var v = cljs.core.first(arglist__27811);
var kvs = cljs.core.rest(arglist__27811);
return G__27785__delegate(elem,k,v,kvs);
});
G__27785.cljs$core$IFn$_invoke$arity$variadic = G__27785__delegate;
return G__27785;
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
var G__27820__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__27816_27821 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__27817_27822 = null;var count__27818_27823 = 0;var i__27819_27824 = 0;while(true){
if((i__27819_27824 < count__27818_27823))
{var k_27825__$1 = cljs.core._nth.call(null,chunk__27817_27822,i__27819_27824);remove_attr_BANG_.call(null,elem__$1,k_27825__$1);
{
var G__27826 = seq__27816_27821;
var G__27827 = chunk__27817_27822;
var G__27828 = count__27818_27823;
var G__27829 = (i__27819_27824 + 1);
seq__27816_27821 = G__27826;
chunk__27817_27822 = G__27827;
count__27818_27823 = G__27828;
i__27819_27824 = G__27829;
continue;
}
} else
{var temp__4092__auto___27830 = cljs.core.seq.call(null,seq__27816_27821);if(temp__4092__auto___27830)
{var seq__27816_27831__$1 = temp__4092__auto___27830;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27816_27831__$1))
{var c__19849__auto___27832 = cljs.core.chunk_first.call(null,seq__27816_27831__$1);{
var G__27833 = cljs.core.chunk_rest.call(null,seq__27816_27831__$1);
var G__27834 = c__19849__auto___27832;
var G__27835 = cljs.core.count.call(null,c__19849__auto___27832);
var G__27836 = 0;
seq__27816_27821 = G__27833;
chunk__27817_27822 = G__27834;
count__27818_27823 = G__27835;
i__27819_27824 = G__27836;
continue;
}
} else
{var k_27837__$1 = cljs.core.first.call(null,seq__27816_27831__$1);remove_attr_BANG_.call(null,elem__$1,k_27837__$1);
{
var G__27838 = cljs.core.next.call(null,seq__27816_27831__$1);
var G__27839 = null;
var G__27840 = 0;
var G__27841 = 0;
seq__27816_27821 = G__27838;
chunk__27817_27822 = G__27839;
count__27818_27823 = G__27840;
i__27819_27824 = G__27841;
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
var G__27820 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__27820__delegate.call(this,elem,k,ks);};
G__27820.cljs$lang$maxFixedArity = 2;
G__27820.cljs$lang$applyTo = (function (arglist__27842){
var elem = cljs.core.first(arglist__27842);
arglist__27842 = cljs.core.next(arglist__27842);
var k = cljs.core.first(arglist__27842);
var ks = cljs.core.rest(arglist__27842);
return G__27820__delegate(elem,k,ks);
});
G__27820.cljs$core$IFn$_invoke$arity$variadic = G__27820__delegate;
return G__27820;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__27844 = dommy.template.__GT_node_like.call(null,elem);G__27844.style.display = ((show_QMARK_)?"":"none");
return G__27844;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__27846 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__27846,false);
return G__27846;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__27848 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__27848,true);
return G__27848;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__27850 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__27850["constructor"] = Object);
return G__27850;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
