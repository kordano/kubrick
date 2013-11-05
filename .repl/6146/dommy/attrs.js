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
var G__14604 = (i + class$.length);
start_from = G__14604;
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
{var temp__4090__auto___14629 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___14629))
{var class_list_14630 = temp__4090__auto___14629;var seq__14617_14631 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__14618_14632 = null;var count__14619_14633 = 0;var i__14620_14634 = 0;while(true){
if((i__14620_14634 < count__14619_14633))
{var class_14635 = cljs.core._nth.call(null,chunk__14618_14632,i__14620_14634);class_list_14630.add(class_14635);
{
var G__14636 = seq__14617_14631;
var G__14637 = chunk__14618_14632;
var G__14638 = count__14619_14633;
var G__14639 = (i__14620_14634 + 1);
seq__14617_14631 = G__14636;
chunk__14618_14632 = G__14637;
count__14619_14633 = G__14638;
i__14620_14634 = G__14639;
continue;
}
} else
{var temp__4092__auto___14640 = cljs.core.seq.call(null,seq__14617_14631);if(temp__4092__auto___14640)
{var seq__14617_14641__$1 = temp__4092__auto___14640;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14617_14641__$1))
{var c__6912__auto___14642 = cljs.core.chunk_first.call(null,seq__14617_14641__$1);{
var G__14643 = cljs.core.chunk_rest.call(null,seq__14617_14641__$1);
var G__14644 = c__6912__auto___14642;
var G__14645 = cljs.core.count.call(null,c__6912__auto___14642);
var G__14646 = 0;
seq__14617_14631 = G__14643;
chunk__14618_14632 = G__14644;
count__14619_14633 = G__14645;
i__14620_14634 = G__14646;
continue;
}
} else
{var class_14647 = cljs.core.first.call(null,seq__14617_14641__$1);class_list_14630.add(class_14647);
{
var G__14648 = cljs.core.next.call(null,seq__14617_14641__$1);
var G__14649 = null;
var G__14650 = 0;
var G__14651 = 0;
seq__14617_14631 = G__14648;
chunk__14618_14632 = G__14649;
count__14619_14633 = G__14650;
i__14620_14634 = G__14651;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_14652 = elem__$1.className;var seq__14621_14653 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__14622_14654 = null;var count__14623_14655 = 0;var i__14624_14656 = 0;while(true){
if((i__14624_14656 < count__14623_14655))
{var class_14657 = cljs.core._nth.call(null,chunk__14622_14654,i__14624_14656);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_14652,class_14657)))
{} else
{elem__$1.className = (((class_name_14652 === ""))?class_14657:[cljs.core.str(class_name_14652),cljs.core.str(" "),cljs.core.str(class_14657)].join(''));
}
{
var G__14658 = seq__14621_14653;
var G__14659 = chunk__14622_14654;
var G__14660 = count__14623_14655;
var G__14661 = (i__14624_14656 + 1);
seq__14621_14653 = G__14658;
chunk__14622_14654 = G__14659;
count__14623_14655 = G__14660;
i__14624_14656 = G__14661;
continue;
}
} else
{var temp__4092__auto___14662 = cljs.core.seq.call(null,seq__14621_14653);if(temp__4092__auto___14662)
{var seq__14621_14663__$1 = temp__4092__auto___14662;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14621_14663__$1))
{var c__6912__auto___14664 = cljs.core.chunk_first.call(null,seq__14621_14663__$1);{
var G__14665 = cljs.core.chunk_rest.call(null,seq__14621_14663__$1);
var G__14666 = c__6912__auto___14664;
var G__14667 = cljs.core.count.call(null,c__6912__auto___14664);
var G__14668 = 0;
seq__14621_14653 = G__14665;
chunk__14622_14654 = G__14666;
count__14623_14655 = G__14667;
i__14624_14656 = G__14668;
continue;
}
} else
{var class_14669 = cljs.core.first.call(null,seq__14621_14663__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_14652,class_14669)))
{} else
{elem__$1.className = (((class_name_14652 === ""))?class_14669:[cljs.core.str(class_name_14652),cljs.core.str(" "),cljs.core.str(class_14669)].join(''));
}
{
var G__14670 = cljs.core.next.call(null,seq__14621_14663__$1);
var G__14671 = null;
var G__14672 = 0;
var G__14673 = 0;
seq__14621_14653 = G__14670;
chunk__14622_14654 = G__14671;
count__14623_14655 = G__14672;
i__14624_14656 = G__14673;
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
var G__14674__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14625_14675 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__14626_14676 = null;var count__14627_14677 = 0;var i__14628_14678 = 0;while(true){
if((i__14628_14678 < count__14627_14677))
{var c_14679 = cljs.core._nth.call(null,chunk__14626_14676,i__14628_14678);add_class_BANG_.call(null,elem__$1,c_14679);
{
var G__14680 = seq__14625_14675;
var G__14681 = chunk__14626_14676;
var G__14682 = count__14627_14677;
var G__14683 = (i__14628_14678 + 1);
seq__14625_14675 = G__14680;
chunk__14626_14676 = G__14681;
count__14627_14677 = G__14682;
i__14628_14678 = G__14683;
continue;
}
} else
{var temp__4092__auto___14684 = cljs.core.seq.call(null,seq__14625_14675);if(temp__4092__auto___14684)
{var seq__14625_14685__$1 = temp__4092__auto___14684;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14625_14685__$1))
{var c__6912__auto___14686 = cljs.core.chunk_first.call(null,seq__14625_14685__$1);{
var G__14687 = cljs.core.chunk_rest.call(null,seq__14625_14685__$1);
var G__14688 = c__6912__auto___14686;
var G__14689 = cljs.core.count.call(null,c__6912__auto___14686);
var G__14690 = 0;
seq__14625_14675 = G__14687;
chunk__14626_14676 = G__14688;
count__14627_14677 = G__14689;
i__14628_14678 = G__14690;
continue;
}
} else
{var c_14691 = cljs.core.first.call(null,seq__14625_14685__$1);add_class_BANG_.call(null,elem__$1,c_14691);
{
var G__14692 = cljs.core.next.call(null,seq__14625_14685__$1);
var G__14693 = null;
var G__14694 = 0;
var G__14695 = 0;
seq__14625_14675 = G__14692;
chunk__14626_14676 = G__14693;
count__14627_14677 = G__14694;
i__14628_14678 = G__14695;
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
var G__14674 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14674__delegate.call(this,elem,classes,more_classes);};
G__14674.cljs$lang$maxFixedArity = 2;
G__14674.cljs$lang$applyTo = (function (arglist__14696){
var elem = cljs.core.first(arglist__14696);
arglist__14696 = cljs.core.next(arglist__14696);
var classes = cljs.core.first(arglist__14696);
var more_classes = cljs.core.rest(arglist__14696);
return G__14674__delegate(elem,classes,more_classes);
});
G__14674.cljs$core$IFn$_invoke$arity$variadic = G__14674__delegate;
return G__14674;
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
var G__14697 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__14697;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___14706 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___14706))
{var class_list_14707 = temp__4090__auto___14706;class_list_14707.remove(class$__$1);
} else
{var class_name_14708 = elem__$1.className;var new_class_name_14709 = dommy.attrs.remove_class_str.call(null,class_name_14708,class$__$1);if((class_name_14708 === new_class_name_14709))
{} else
{elem__$1.className = new_class_name_14709;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__14710__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14702 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__14703 = null;var count__14704 = 0;var i__14705 = 0;while(true){
if((i__14705 < count__14704))
{var c = cljs.core._nth.call(null,chunk__14703,i__14705);remove_class_BANG_.call(null,elem__$1,c);
{
var G__14711 = seq__14702;
var G__14712 = chunk__14703;
var G__14713 = count__14704;
var G__14714 = (i__14705 + 1);
seq__14702 = G__14711;
chunk__14703 = G__14712;
count__14704 = G__14713;
i__14705 = G__14714;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14702);if(temp__4092__auto__)
{var seq__14702__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14702__$1))
{var c__6912__auto__ = cljs.core.chunk_first.call(null,seq__14702__$1);{
var G__14715 = cljs.core.chunk_rest.call(null,seq__14702__$1);
var G__14716 = c__6912__auto__;
var G__14717 = cljs.core.count.call(null,c__6912__auto__);
var G__14718 = 0;
seq__14702 = G__14715;
chunk__14703 = G__14716;
count__14704 = G__14717;
i__14705 = G__14718;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__14702__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__14719 = cljs.core.next.call(null,seq__14702__$1);
var G__14720 = null;
var G__14721 = 0;
var G__14722 = 0;
seq__14702 = G__14719;
chunk__14703 = G__14720;
count__14704 = G__14721;
i__14705 = G__14722;
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
var G__14710 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14710__delegate.call(this,elem,class$,classes);};
G__14710.cljs$lang$maxFixedArity = 2;
G__14710.cljs$lang$applyTo = (function (arglist__14723){
var elem = cljs.core.first(arglist__14723);
arglist__14723 = cljs.core.next(arglist__14723);
var class$ = cljs.core.first(arglist__14723);
var classes = cljs.core.rest(arglist__14723);
return G__14710__delegate(elem,class$,classes);
});
G__14710.cljs$core$IFn$_invoke$arity$variadic = G__14710__delegate;
return G__14710;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___14724 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___14724))
{var class_list_14725 = temp__4090__auto___14724;class_list_14725.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__14728){var vec__14729 = p__14728;var k = cljs.core.nth.call(null,vec__14729,0,null);var v = cljs.core.nth.call(null,vec__14729,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__14736_14742 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__14737_14743 = null;var count__14738_14744 = 0;var i__14739_14745 = 0;while(true){
if((i__14739_14745 < count__14738_14744))
{var vec__14740_14746 = cljs.core._nth.call(null,chunk__14737_14743,i__14739_14745);var k_14747 = cljs.core.nth.call(null,vec__14740_14746,0,null);var v_14748 = cljs.core.nth.call(null,vec__14740_14746,1,null);(style[cljs.core.name.call(null,k_14747)] = v_14748);
{
var G__14749 = seq__14736_14742;
var G__14750 = chunk__14737_14743;
var G__14751 = count__14738_14744;
var G__14752 = (i__14739_14745 + 1);
seq__14736_14742 = G__14749;
chunk__14737_14743 = G__14750;
count__14738_14744 = G__14751;
i__14739_14745 = G__14752;
continue;
}
} else
{var temp__4092__auto___14753 = cljs.core.seq.call(null,seq__14736_14742);if(temp__4092__auto___14753)
{var seq__14736_14754__$1 = temp__4092__auto___14753;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14736_14754__$1))
{var c__6912__auto___14755 = cljs.core.chunk_first.call(null,seq__14736_14754__$1);{
var G__14756 = cljs.core.chunk_rest.call(null,seq__14736_14754__$1);
var G__14757 = c__6912__auto___14755;
var G__14758 = cljs.core.count.call(null,c__6912__auto___14755);
var G__14759 = 0;
seq__14736_14742 = G__14756;
chunk__14737_14743 = G__14757;
count__14738_14744 = G__14758;
i__14739_14745 = G__14759;
continue;
}
} else
{var vec__14741_14760 = cljs.core.first.call(null,seq__14736_14754__$1);var k_14761 = cljs.core.nth.call(null,vec__14741_14760,0,null);var v_14762 = cljs.core.nth.call(null,vec__14741_14760,1,null);(style[cljs.core.name.call(null,k_14761)] = v_14762);
{
var G__14763 = cljs.core.next.call(null,seq__14736_14754__$1);
var G__14764 = null;
var G__14765 = 0;
var G__14766 = 0;
seq__14736_14742 = G__14763;
chunk__14737_14743 = G__14764;
count__14738_14744 = G__14765;
i__14739_14745 = G__14766;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__14767){
var elem = cljs.core.first(arglist__14767);
var kvs = cljs.core.rest(arglist__14767);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14774_14780 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__14775_14781 = null;var count__14776_14782 = 0;var i__14777_14783 = 0;while(true){
if((i__14777_14783 < count__14776_14782))
{var vec__14778_14784 = cljs.core._nth.call(null,chunk__14775_14781,i__14777_14783);var k_14785 = cljs.core.nth.call(null,vec__14778_14784,0,null);var v_14786 = cljs.core.nth.call(null,vec__14778_14784,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_14785,[cljs.core.str(v_14786),cljs.core.str("px")].join(''));
{
var G__14787 = seq__14774_14780;
var G__14788 = chunk__14775_14781;
var G__14789 = count__14776_14782;
var G__14790 = (i__14777_14783 + 1);
seq__14774_14780 = G__14787;
chunk__14775_14781 = G__14788;
count__14776_14782 = G__14789;
i__14777_14783 = G__14790;
continue;
}
} else
{var temp__4092__auto___14791 = cljs.core.seq.call(null,seq__14774_14780);if(temp__4092__auto___14791)
{var seq__14774_14792__$1 = temp__4092__auto___14791;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14774_14792__$1))
{var c__6912__auto___14793 = cljs.core.chunk_first.call(null,seq__14774_14792__$1);{
var G__14794 = cljs.core.chunk_rest.call(null,seq__14774_14792__$1);
var G__14795 = c__6912__auto___14793;
var G__14796 = cljs.core.count.call(null,c__6912__auto___14793);
var G__14797 = 0;
seq__14774_14780 = G__14794;
chunk__14775_14781 = G__14795;
count__14776_14782 = G__14796;
i__14777_14783 = G__14797;
continue;
}
} else
{var vec__14779_14798 = cljs.core.first.call(null,seq__14774_14792__$1);var k_14799 = cljs.core.nth.call(null,vec__14779_14798,0,null);var v_14800 = cljs.core.nth.call(null,vec__14779_14798,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_14799,[cljs.core.str(v_14800),cljs.core.str("px")].join(''));
{
var G__14801 = cljs.core.next.call(null,seq__14774_14792__$1);
var G__14802 = null;
var G__14803 = 0;
var G__14804 = 0;
seq__14774_14780 = G__14801;
chunk__14775_14781 = G__14802;
count__14776_14782 = G__14803;
i__14777_14783 = G__14804;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__14805){
var elem = cljs.core.first(arglist__14805);
var kvs = cljs.core.rest(arglist__14805);
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
{var G__14814 = dommy.template.__GT_node_like.call(null,elem);(G__14814[cljs.core.name.call(null,k)] = v);
return G__14814;
} else
{var G__14815 = dommy.template.__GT_node_like.call(null,elem);G__14815.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__14815;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__14822__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14816_14823 = cljs.core.seq.call(null,cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([k,v], true),cljs.core.partition.call(null,2,kvs)));var chunk__14817_14824 = null;var count__14818_14825 = 0;var i__14819_14826 = 0;while(true){
if((i__14819_14826 < count__14818_14825))
{var vec__14820_14827 = cljs.core._nth.call(null,chunk__14817_14824,i__14819_14826);var k_14828__$1 = cljs.core.nth.call(null,vec__14820_14827,0,null);var v_14829__$1 = cljs.core.nth.call(null,vec__14820_14827,1,null);set_attr_BANG_.call(null,elem__$1,k_14828__$1,v_14829__$1);
{
var G__14830 = seq__14816_14823;
var G__14831 = chunk__14817_14824;
var G__14832 = count__14818_14825;
var G__14833 = (i__14819_14826 + 1);
seq__14816_14823 = G__14830;
chunk__14817_14824 = G__14831;
count__14818_14825 = G__14832;
i__14819_14826 = G__14833;
continue;
}
} else
{var temp__4092__auto___14834 = cljs.core.seq.call(null,seq__14816_14823);if(temp__4092__auto___14834)
{var seq__14816_14835__$1 = temp__4092__auto___14834;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14816_14835__$1))
{var c__6912__auto___14836 = cljs.core.chunk_first.call(null,seq__14816_14835__$1);{
var G__14837 = cljs.core.chunk_rest.call(null,seq__14816_14835__$1);
var G__14838 = c__6912__auto___14836;
var G__14839 = cljs.core.count.call(null,c__6912__auto___14836);
var G__14840 = 0;
seq__14816_14823 = G__14837;
chunk__14817_14824 = G__14838;
count__14818_14825 = G__14839;
i__14819_14826 = G__14840;
continue;
}
} else
{var vec__14821_14841 = cljs.core.first.call(null,seq__14816_14835__$1);var k_14842__$1 = cljs.core.nth.call(null,vec__14821_14841,0,null);var v_14843__$1 = cljs.core.nth.call(null,vec__14821_14841,1,null);set_attr_BANG_.call(null,elem__$1,k_14842__$1,v_14843__$1);
{
var G__14844 = cljs.core.next.call(null,seq__14816_14835__$1);
var G__14845 = null;
var G__14846 = 0;
var G__14847 = 0;
seq__14816_14823 = G__14844;
chunk__14817_14824 = G__14845;
count__14818_14825 = G__14846;
i__14819_14826 = G__14847;
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
var G__14822 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__14822__delegate.call(this,elem,k,v,kvs);};
G__14822.cljs$lang$maxFixedArity = 3;
G__14822.cljs$lang$applyTo = (function (arglist__14848){
var elem = cljs.core.first(arglist__14848);
arglist__14848 = cljs.core.next(arglist__14848);
var k = cljs.core.first(arglist__14848);
arglist__14848 = cljs.core.next(arglist__14848);
var v = cljs.core.first(arglist__14848);
var kvs = cljs.core.rest(arglist__14848);
return G__14822__delegate(elem,k,v,kvs);
});
G__14822.cljs$core$IFn$_invoke$arity$variadic = G__14822__delegate;
return G__14822;
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
var G__14857__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14853_14858 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__14854_14859 = null;var count__14855_14860 = 0;var i__14856_14861 = 0;while(true){
if((i__14856_14861 < count__14855_14860))
{var k_14862__$1 = cljs.core._nth.call(null,chunk__14854_14859,i__14856_14861);remove_attr_BANG_.call(null,elem__$1,k_14862__$1);
{
var G__14863 = seq__14853_14858;
var G__14864 = chunk__14854_14859;
var G__14865 = count__14855_14860;
var G__14866 = (i__14856_14861 + 1);
seq__14853_14858 = G__14863;
chunk__14854_14859 = G__14864;
count__14855_14860 = G__14865;
i__14856_14861 = G__14866;
continue;
}
} else
{var temp__4092__auto___14867 = cljs.core.seq.call(null,seq__14853_14858);if(temp__4092__auto___14867)
{var seq__14853_14868__$1 = temp__4092__auto___14867;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14853_14868__$1))
{var c__6912__auto___14869 = cljs.core.chunk_first.call(null,seq__14853_14868__$1);{
var G__14870 = cljs.core.chunk_rest.call(null,seq__14853_14868__$1);
var G__14871 = c__6912__auto___14869;
var G__14872 = cljs.core.count.call(null,c__6912__auto___14869);
var G__14873 = 0;
seq__14853_14858 = G__14870;
chunk__14854_14859 = G__14871;
count__14855_14860 = G__14872;
i__14856_14861 = G__14873;
continue;
}
} else
{var k_14874__$1 = cljs.core.first.call(null,seq__14853_14868__$1);remove_attr_BANG_.call(null,elem__$1,k_14874__$1);
{
var G__14875 = cljs.core.next.call(null,seq__14853_14868__$1);
var G__14876 = null;
var G__14877 = 0;
var G__14878 = 0;
seq__14853_14858 = G__14875;
chunk__14854_14859 = G__14876;
count__14855_14860 = G__14877;
i__14856_14861 = G__14878;
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
var G__14857 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14857__delegate.call(this,elem,k,ks);};
G__14857.cljs$lang$maxFixedArity = 2;
G__14857.cljs$lang$applyTo = (function (arglist__14879){
var elem = cljs.core.first(arglist__14879);
arglist__14879 = cljs.core.next(arglist__14879);
var k = cljs.core.first(arglist__14879);
var ks = cljs.core.rest(arglist__14879);
return G__14857__delegate(elem,k,ks);
});
G__14857.cljs$core$IFn$_invoke$arity$variadic = G__14857__delegate;
return G__14857;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__14881 = dommy.template.__GT_node_like.call(null,elem);G__14881.style.display = ((show_QMARK_)?"":"none");
return G__14881;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__14883 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__14883,false);
return G__14883;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__14885 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__14885,true);
return G__14885;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__14887 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__14887["constructor"] = Object);
return G__14887;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
