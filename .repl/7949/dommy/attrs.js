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
var G__14610 = (i + class$.length);
start_from = G__14610;
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
{var temp__4090__auto___14635 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___14635))
{var class_list_14636 = temp__4090__auto___14635;var seq__14623_14637 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__14624_14638 = null;var count__14625_14639 = 0;var i__14626_14640 = 0;while(true){
if((i__14626_14640 < count__14625_14639))
{var class_14641 = cljs.core._nth.call(null,chunk__14624_14638,i__14626_14640);class_list_14636.add(class_14641);
{
var G__14642 = seq__14623_14637;
var G__14643 = chunk__14624_14638;
var G__14644 = count__14625_14639;
var G__14645 = (i__14626_14640 + 1);
seq__14623_14637 = G__14642;
chunk__14624_14638 = G__14643;
count__14625_14639 = G__14644;
i__14626_14640 = G__14645;
continue;
}
} else
{var temp__4092__auto___14646 = cljs.core.seq.call(null,seq__14623_14637);if(temp__4092__auto___14646)
{var seq__14623_14647__$1 = temp__4092__auto___14646;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14623_14647__$1))
{var c__6930__auto___14648 = cljs.core.chunk_first.call(null,seq__14623_14647__$1);{
var G__14649 = cljs.core.chunk_rest.call(null,seq__14623_14647__$1);
var G__14650 = c__6930__auto___14648;
var G__14651 = cljs.core.count.call(null,c__6930__auto___14648);
var G__14652 = 0;
seq__14623_14637 = G__14649;
chunk__14624_14638 = G__14650;
count__14625_14639 = G__14651;
i__14626_14640 = G__14652;
continue;
}
} else
{var class_14653 = cljs.core.first.call(null,seq__14623_14647__$1);class_list_14636.add(class_14653);
{
var G__14654 = cljs.core.next.call(null,seq__14623_14647__$1);
var G__14655 = null;
var G__14656 = 0;
var G__14657 = 0;
seq__14623_14637 = G__14654;
chunk__14624_14638 = G__14655;
count__14625_14639 = G__14656;
i__14626_14640 = G__14657;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_14658 = elem__$1.className;var seq__14627_14659 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__14628_14660 = null;var count__14629_14661 = 0;var i__14630_14662 = 0;while(true){
if((i__14630_14662 < count__14629_14661))
{var class_14663 = cljs.core._nth.call(null,chunk__14628_14660,i__14630_14662);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_14658,class_14663)))
{} else
{elem__$1.className = (((class_name_14658 === ""))?class_14663:[cljs.core.str(class_name_14658),cljs.core.str(" "),cljs.core.str(class_14663)].join(''));
}
{
var G__14664 = seq__14627_14659;
var G__14665 = chunk__14628_14660;
var G__14666 = count__14629_14661;
var G__14667 = (i__14630_14662 + 1);
seq__14627_14659 = G__14664;
chunk__14628_14660 = G__14665;
count__14629_14661 = G__14666;
i__14630_14662 = G__14667;
continue;
}
} else
{var temp__4092__auto___14668 = cljs.core.seq.call(null,seq__14627_14659);if(temp__4092__auto___14668)
{var seq__14627_14669__$1 = temp__4092__auto___14668;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14627_14669__$1))
{var c__6930__auto___14670 = cljs.core.chunk_first.call(null,seq__14627_14669__$1);{
var G__14671 = cljs.core.chunk_rest.call(null,seq__14627_14669__$1);
var G__14672 = c__6930__auto___14670;
var G__14673 = cljs.core.count.call(null,c__6930__auto___14670);
var G__14674 = 0;
seq__14627_14659 = G__14671;
chunk__14628_14660 = G__14672;
count__14629_14661 = G__14673;
i__14630_14662 = G__14674;
continue;
}
} else
{var class_14675 = cljs.core.first.call(null,seq__14627_14669__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_14658,class_14675)))
{} else
{elem__$1.className = (((class_name_14658 === ""))?class_14675:[cljs.core.str(class_name_14658),cljs.core.str(" "),cljs.core.str(class_14675)].join(''));
}
{
var G__14676 = cljs.core.next.call(null,seq__14627_14669__$1);
var G__14677 = null;
var G__14678 = 0;
var G__14679 = 0;
seq__14627_14659 = G__14676;
chunk__14628_14660 = G__14677;
count__14629_14661 = G__14678;
i__14630_14662 = G__14679;
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
var G__14680__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14631_14681 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__14632_14682 = null;var count__14633_14683 = 0;var i__14634_14684 = 0;while(true){
if((i__14634_14684 < count__14633_14683))
{var c_14685 = cljs.core._nth.call(null,chunk__14632_14682,i__14634_14684);add_class_BANG_.call(null,elem__$1,c_14685);
{
var G__14686 = seq__14631_14681;
var G__14687 = chunk__14632_14682;
var G__14688 = count__14633_14683;
var G__14689 = (i__14634_14684 + 1);
seq__14631_14681 = G__14686;
chunk__14632_14682 = G__14687;
count__14633_14683 = G__14688;
i__14634_14684 = G__14689;
continue;
}
} else
{var temp__4092__auto___14690 = cljs.core.seq.call(null,seq__14631_14681);if(temp__4092__auto___14690)
{var seq__14631_14691__$1 = temp__4092__auto___14690;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14631_14691__$1))
{var c__6930__auto___14692 = cljs.core.chunk_first.call(null,seq__14631_14691__$1);{
var G__14693 = cljs.core.chunk_rest.call(null,seq__14631_14691__$1);
var G__14694 = c__6930__auto___14692;
var G__14695 = cljs.core.count.call(null,c__6930__auto___14692);
var G__14696 = 0;
seq__14631_14681 = G__14693;
chunk__14632_14682 = G__14694;
count__14633_14683 = G__14695;
i__14634_14684 = G__14696;
continue;
}
} else
{var c_14697 = cljs.core.first.call(null,seq__14631_14691__$1);add_class_BANG_.call(null,elem__$1,c_14697);
{
var G__14698 = cljs.core.next.call(null,seq__14631_14691__$1);
var G__14699 = null;
var G__14700 = 0;
var G__14701 = 0;
seq__14631_14681 = G__14698;
chunk__14632_14682 = G__14699;
count__14633_14683 = G__14700;
i__14634_14684 = G__14701;
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
var G__14680 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14680__delegate.call(this,elem,classes,more_classes);};
G__14680.cljs$lang$maxFixedArity = 2;
G__14680.cljs$lang$applyTo = (function (arglist__14702){
var elem = cljs.core.first(arglist__14702);
arglist__14702 = cljs.core.next(arglist__14702);
var classes = cljs.core.first(arglist__14702);
var more_classes = cljs.core.rest(arglist__14702);
return G__14680__delegate(elem,classes,more_classes);
});
G__14680.cljs$core$IFn$_invoke$arity$variadic = G__14680__delegate;
return G__14680;
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
var G__14703 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__14703;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___14712 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___14712))
{var class_list_14713 = temp__4090__auto___14712;class_list_14713.remove(class$__$1);
} else
{var class_name_14714 = elem__$1.className;var new_class_name_14715 = dommy.attrs.remove_class_str.call(null,class_name_14714,class$__$1);if((class_name_14714 === new_class_name_14715))
{} else
{elem__$1.className = new_class_name_14715;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__14716__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14708 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__14709 = null;var count__14710 = 0;var i__14711 = 0;while(true){
if((i__14711 < count__14710))
{var c = cljs.core._nth.call(null,chunk__14709,i__14711);remove_class_BANG_.call(null,elem__$1,c);
{
var G__14717 = seq__14708;
var G__14718 = chunk__14709;
var G__14719 = count__14710;
var G__14720 = (i__14711 + 1);
seq__14708 = G__14717;
chunk__14709 = G__14718;
count__14710 = G__14719;
i__14711 = G__14720;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14708);if(temp__4092__auto__)
{var seq__14708__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14708__$1))
{var c__6930__auto__ = cljs.core.chunk_first.call(null,seq__14708__$1);{
var G__14721 = cljs.core.chunk_rest.call(null,seq__14708__$1);
var G__14722 = c__6930__auto__;
var G__14723 = cljs.core.count.call(null,c__6930__auto__);
var G__14724 = 0;
seq__14708 = G__14721;
chunk__14709 = G__14722;
count__14710 = G__14723;
i__14711 = G__14724;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__14708__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__14725 = cljs.core.next.call(null,seq__14708__$1);
var G__14726 = null;
var G__14727 = 0;
var G__14728 = 0;
seq__14708 = G__14725;
chunk__14709 = G__14726;
count__14710 = G__14727;
i__14711 = G__14728;
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
var G__14716 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14716__delegate.call(this,elem,class$,classes);};
G__14716.cljs$lang$maxFixedArity = 2;
G__14716.cljs$lang$applyTo = (function (arglist__14729){
var elem = cljs.core.first(arglist__14729);
arglist__14729 = cljs.core.next(arglist__14729);
var class$ = cljs.core.first(arglist__14729);
var classes = cljs.core.rest(arglist__14729);
return G__14716__delegate(elem,class$,classes);
});
G__14716.cljs$core$IFn$_invoke$arity$variadic = G__14716__delegate;
return G__14716;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___14730 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___14730))
{var class_list_14731 = temp__4090__auto___14730;class_list_14731.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__14734){var vec__14735 = p__14734;var k = cljs.core.nth.call(null,vec__14735,0,null);var v = cljs.core.nth.call(null,vec__14735,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__14742_14748 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__14743_14749 = null;var count__14744_14750 = 0;var i__14745_14751 = 0;while(true){
if((i__14745_14751 < count__14744_14750))
{var vec__14746_14752 = cljs.core._nth.call(null,chunk__14743_14749,i__14745_14751);var k_14753 = cljs.core.nth.call(null,vec__14746_14752,0,null);var v_14754 = cljs.core.nth.call(null,vec__14746_14752,1,null);(style[cljs.core.name.call(null,k_14753)] = v_14754);
{
var G__14755 = seq__14742_14748;
var G__14756 = chunk__14743_14749;
var G__14757 = count__14744_14750;
var G__14758 = (i__14745_14751 + 1);
seq__14742_14748 = G__14755;
chunk__14743_14749 = G__14756;
count__14744_14750 = G__14757;
i__14745_14751 = G__14758;
continue;
}
} else
{var temp__4092__auto___14759 = cljs.core.seq.call(null,seq__14742_14748);if(temp__4092__auto___14759)
{var seq__14742_14760__$1 = temp__4092__auto___14759;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14742_14760__$1))
{var c__6930__auto___14761 = cljs.core.chunk_first.call(null,seq__14742_14760__$1);{
var G__14762 = cljs.core.chunk_rest.call(null,seq__14742_14760__$1);
var G__14763 = c__6930__auto___14761;
var G__14764 = cljs.core.count.call(null,c__6930__auto___14761);
var G__14765 = 0;
seq__14742_14748 = G__14762;
chunk__14743_14749 = G__14763;
count__14744_14750 = G__14764;
i__14745_14751 = G__14765;
continue;
}
} else
{var vec__14747_14766 = cljs.core.first.call(null,seq__14742_14760__$1);var k_14767 = cljs.core.nth.call(null,vec__14747_14766,0,null);var v_14768 = cljs.core.nth.call(null,vec__14747_14766,1,null);(style[cljs.core.name.call(null,k_14767)] = v_14768);
{
var G__14769 = cljs.core.next.call(null,seq__14742_14760__$1);
var G__14770 = null;
var G__14771 = 0;
var G__14772 = 0;
seq__14742_14748 = G__14769;
chunk__14743_14749 = G__14770;
count__14744_14750 = G__14771;
i__14745_14751 = G__14772;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__14773){
var elem = cljs.core.first(arglist__14773);
var kvs = cljs.core.rest(arglist__14773);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14780_14786 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__14781_14787 = null;var count__14782_14788 = 0;var i__14783_14789 = 0;while(true){
if((i__14783_14789 < count__14782_14788))
{var vec__14784_14790 = cljs.core._nth.call(null,chunk__14781_14787,i__14783_14789);var k_14791 = cljs.core.nth.call(null,vec__14784_14790,0,null);var v_14792 = cljs.core.nth.call(null,vec__14784_14790,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_14791,[cljs.core.str(v_14792),cljs.core.str("px")].join(''));
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
{var c__6930__auto___14799 = cljs.core.chunk_first.call(null,seq__14780_14798__$1);{
var G__14800 = cljs.core.chunk_rest.call(null,seq__14780_14798__$1);
var G__14801 = c__6930__auto___14799;
var G__14802 = cljs.core.count.call(null,c__6930__auto___14799);
var G__14803 = 0;
seq__14780_14786 = G__14800;
chunk__14781_14787 = G__14801;
count__14782_14788 = G__14802;
i__14783_14789 = G__14803;
continue;
}
} else
{var vec__14785_14804 = cljs.core.first.call(null,seq__14780_14798__$1);var k_14805 = cljs.core.nth.call(null,vec__14785_14804,0,null);var v_14806 = cljs.core.nth.call(null,vec__14785_14804,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_14805,[cljs.core.str(v_14806),cljs.core.str("px")].join(''));
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
var set_px_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__14811){
var elem = cljs.core.first(arglist__14811);
var kvs = cljs.core.rest(arglist__14811);
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
{var G__14820 = dommy.template.__GT_node_like.call(null,elem);(G__14820[cljs.core.name.call(null,k)] = v);
return G__14820;
} else
{var G__14821 = dommy.template.__GT_node_like.call(null,elem);G__14821.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__14821;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__14828__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14822_14829 = cljs.core.seq.call(null,cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([k,v], true),cljs.core.partition.call(null,2,kvs)));var chunk__14823_14830 = null;var count__14824_14831 = 0;var i__14825_14832 = 0;while(true){
if((i__14825_14832 < count__14824_14831))
{var vec__14826_14833 = cljs.core._nth.call(null,chunk__14823_14830,i__14825_14832);var k_14834__$1 = cljs.core.nth.call(null,vec__14826_14833,0,null);var v_14835__$1 = cljs.core.nth.call(null,vec__14826_14833,1,null);set_attr_BANG_.call(null,elem__$1,k_14834__$1,v_14835__$1);
{
var G__14836 = seq__14822_14829;
var G__14837 = chunk__14823_14830;
var G__14838 = count__14824_14831;
var G__14839 = (i__14825_14832 + 1);
seq__14822_14829 = G__14836;
chunk__14823_14830 = G__14837;
count__14824_14831 = G__14838;
i__14825_14832 = G__14839;
continue;
}
} else
{var temp__4092__auto___14840 = cljs.core.seq.call(null,seq__14822_14829);if(temp__4092__auto___14840)
{var seq__14822_14841__$1 = temp__4092__auto___14840;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14822_14841__$1))
{var c__6930__auto___14842 = cljs.core.chunk_first.call(null,seq__14822_14841__$1);{
var G__14843 = cljs.core.chunk_rest.call(null,seq__14822_14841__$1);
var G__14844 = c__6930__auto___14842;
var G__14845 = cljs.core.count.call(null,c__6930__auto___14842);
var G__14846 = 0;
seq__14822_14829 = G__14843;
chunk__14823_14830 = G__14844;
count__14824_14831 = G__14845;
i__14825_14832 = G__14846;
continue;
}
} else
{var vec__14827_14847 = cljs.core.first.call(null,seq__14822_14841__$1);var k_14848__$1 = cljs.core.nth.call(null,vec__14827_14847,0,null);var v_14849__$1 = cljs.core.nth.call(null,vec__14827_14847,1,null);set_attr_BANG_.call(null,elem__$1,k_14848__$1,v_14849__$1);
{
var G__14850 = cljs.core.next.call(null,seq__14822_14841__$1);
var G__14851 = null;
var G__14852 = 0;
var G__14853 = 0;
seq__14822_14829 = G__14850;
chunk__14823_14830 = G__14851;
count__14824_14831 = G__14852;
i__14825_14832 = G__14853;
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
var G__14828 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__14828__delegate.call(this,elem,k,v,kvs);};
G__14828.cljs$lang$maxFixedArity = 3;
G__14828.cljs$lang$applyTo = (function (arglist__14854){
var elem = cljs.core.first(arglist__14854);
arglist__14854 = cljs.core.next(arglist__14854);
var k = cljs.core.first(arglist__14854);
arglist__14854 = cljs.core.next(arglist__14854);
var v = cljs.core.first(arglist__14854);
var kvs = cljs.core.rest(arglist__14854);
return G__14828__delegate(elem,k,v,kvs);
});
G__14828.cljs$core$IFn$_invoke$arity$variadic = G__14828__delegate;
return G__14828;
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
var G__14863__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14859_14864 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__14860_14865 = null;var count__14861_14866 = 0;var i__14862_14867 = 0;while(true){
if((i__14862_14867 < count__14861_14866))
{var k_14868__$1 = cljs.core._nth.call(null,chunk__14860_14865,i__14862_14867);remove_attr_BANG_.call(null,elem__$1,k_14868__$1);
{
var G__14869 = seq__14859_14864;
var G__14870 = chunk__14860_14865;
var G__14871 = count__14861_14866;
var G__14872 = (i__14862_14867 + 1);
seq__14859_14864 = G__14869;
chunk__14860_14865 = G__14870;
count__14861_14866 = G__14871;
i__14862_14867 = G__14872;
continue;
}
} else
{var temp__4092__auto___14873 = cljs.core.seq.call(null,seq__14859_14864);if(temp__4092__auto___14873)
{var seq__14859_14874__$1 = temp__4092__auto___14873;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14859_14874__$1))
{var c__6930__auto___14875 = cljs.core.chunk_first.call(null,seq__14859_14874__$1);{
var G__14876 = cljs.core.chunk_rest.call(null,seq__14859_14874__$1);
var G__14877 = c__6930__auto___14875;
var G__14878 = cljs.core.count.call(null,c__6930__auto___14875);
var G__14879 = 0;
seq__14859_14864 = G__14876;
chunk__14860_14865 = G__14877;
count__14861_14866 = G__14878;
i__14862_14867 = G__14879;
continue;
}
} else
{var k_14880__$1 = cljs.core.first.call(null,seq__14859_14874__$1);remove_attr_BANG_.call(null,elem__$1,k_14880__$1);
{
var G__14881 = cljs.core.next.call(null,seq__14859_14874__$1);
var G__14882 = null;
var G__14883 = 0;
var G__14884 = 0;
seq__14859_14864 = G__14881;
chunk__14860_14865 = G__14882;
count__14861_14866 = G__14883;
i__14862_14867 = G__14884;
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
var G__14863 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14863__delegate.call(this,elem,k,ks);};
G__14863.cljs$lang$maxFixedArity = 2;
G__14863.cljs$lang$applyTo = (function (arglist__14885){
var elem = cljs.core.first(arglist__14885);
arglist__14885 = cljs.core.next(arglist__14885);
var k = cljs.core.first(arglist__14885);
var ks = cljs.core.rest(arglist__14885);
return G__14863__delegate(elem,k,ks);
});
G__14863.cljs$core$IFn$_invoke$arity$variadic = G__14863__delegate;
return G__14863;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__14887 = dommy.template.__GT_node_like.call(null,elem);G__14887.style.display = ((show_QMARK_)?"":"none");
return G__14887;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__14889 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__14889,false);
return G__14889;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__14891 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__14891,true);
return G__14891;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__14893 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__14893["constructor"] = Object);
return G__14893;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
