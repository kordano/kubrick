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
var G__14617 = (i + class$.length);
start_from = G__14617;
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
{var temp__4090__auto___14642 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___14642))
{var class_list_14643 = temp__4090__auto___14642;var seq__14630_14644 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__14631_14645 = null;var count__14632_14646 = 0;var i__14633_14647 = 0;while(true){
if((i__14633_14647 < count__14632_14646))
{var class_14648 = cljs.core._nth.call(null,chunk__14631_14645,i__14633_14647);class_list_14643.add(class_14648);
{
var G__14649 = seq__14630_14644;
var G__14650 = chunk__14631_14645;
var G__14651 = count__14632_14646;
var G__14652 = (i__14633_14647 + 1);
seq__14630_14644 = G__14649;
chunk__14631_14645 = G__14650;
count__14632_14646 = G__14651;
i__14633_14647 = G__14652;
continue;
}
} else
{var temp__4092__auto___14653 = cljs.core.seq.call(null,seq__14630_14644);if(temp__4092__auto___14653)
{var seq__14630_14654__$1 = temp__4092__auto___14653;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14630_14654__$1))
{var c__6932__auto___14655 = cljs.core.chunk_first.call(null,seq__14630_14654__$1);{
var G__14656 = cljs.core.chunk_rest.call(null,seq__14630_14654__$1);
var G__14657 = c__6932__auto___14655;
var G__14658 = cljs.core.count.call(null,c__6932__auto___14655);
var G__14659 = 0;
seq__14630_14644 = G__14656;
chunk__14631_14645 = G__14657;
count__14632_14646 = G__14658;
i__14633_14647 = G__14659;
continue;
}
} else
{var class_14660 = cljs.core.first.call(null,seq__14630_14654__$1);class_list_14643.add(class_14660);
{
var G__14661 = cljs.core.next.call(null,seq__14630_14654__$1);
var G__14662 = null;
var G__14663 = 0;
var G__14664 = 0;
seq__14630_14644 = G__14661;
chunk__14631_14645 = G__14662;
count__14632_14646 = G__14663;
i__14633_14647 = G__14664;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_14665 = elem__$1.className;var seq__14634_14666 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__14635_14667 = null;var count__14636_14668 = 0;var i__14637_14669 = 0;while(true){
if((i__14637_14669 < count__14636_14668))
{var class_14670 = cljs.core._nth.call(null,chunk__14635_14667,i__14637_14669);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_14665,class_14670)))
{} else
{elem__$1.className = (((class_name_14665 === ""))?class_14670:[cljs.core.str(class_name_14665),cljs.core.str(" "),cljs.core.str(class_14670)].join(''));
}
{
var G__14671 = seq__14634_14666;
var G__14672 = chunk__14635_14667;
var G__14673 = count__14636_14668;
var G__14674 = (i__14637_14669 + 1);
seq__14634_14666 = G__14671;
chunk__14635_14667 = G__14672;
count__14636_14668 = G__14673;
i__14637_14669 = G__14674;
continue;
}
} else
{var temp__4092__auto___14675 = cljs.core.seq.call(null,seq__14634_14666);if(temp__4092__auto___14675)
{var seq__14634_14676__$1 = temp__4092__auto___14675;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14634_14676__$1))
{var c__6932__auto___14677 = cljs.core.chunk_first.call(null,seq__14634_14676__$1);{
var G__14678 = cljs.core.chunk_rest.call(null,seq__14634_14676__$1);
var G__14679 = c__6932__auto___14677;
var G__14680 = cljs.core.count.call(null,c__6932__auto___14677);
var G__14681 = 0;
seq__14634_14666 = G__14678;
chunk__14635_14667 = G__14679;
count__14636_14668 = G__14680;
i__14637_14669 = G__14681;
continue;
}
} else
{var class_14682 = cljs.core.first.call(null,seq__14634_14676__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_14665,class_14682)))
{} else
{elem__$1.className = (((class_name_14665 === ""))?class_14682:[cljs.core.str(class_name_14665),cljs.core.str(" "),cljs.core.str(class_14682)].join(''));
}
{
var G__14683 = cljs.core.next.call(null,seq__14634_14676__$1);
var G__14684 = null;
var G__14685 = 0;
var G__14686 = 0;
seq__14634_14666 = G__14683;
chunk__14635_14667 = G__14684;
count__14636_14668 = G__14685;
i__14637_14669 = G__14686;
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
var G__14687__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14638_14688 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__14639_14689 = null;var count__14640_14690 = 0;var i__14641_14691 = 0;while(true){
if((i__14641_14691 < count__14640_14690))
{var c_14692 = cljs.core._nth.call(null,chunk__14639_14689,i__14641_14691);add_class_BANG_.call(null,elem__$1,c_14692);
{
var G__14693 = seq__14638_14688;
var G__14694 = chunk__14639_14689;
var G__14695 = count__14640_14690;
var G__14696 = (i__14641_14691 + 1);
seq__14638_14688 = G__14693;
chunk__14639_14689 = G__14694;
count__14640_14690 = G__14695;
i__14641_14691 = G__14696;
continue;
}
} else
{var temp__4092__auto___14697 = cljs.core.seq.call(null,seq__14638_14688);if(temp__4092__auto___14697)
{var seq__14638_14698__$1 = temp__4092__auto___14697;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14638_14698__$1))
{var c__6932__auto___14699 = cljs.core.chunk_first.call(null,seq__14638_14698__$1);{
var G__14700 = cljs.core.chunk_rest.call(null,seq__14638_14698__$1);
var G__14701 = c__6932__auto___14699;
var G__14702 = cljs.core.count.call(null,c__6932__auto___14699);
var G__14703 = 0;
seq__14638_14688 = G__14700;
chunk__14639_14689 = G__14701;
count__14640_14690 = G__14702;
i__14641_14691 = G__14703;
continue;
}
} else
{var c_14704 = cljs.core.first.call(null,seq__14638_14698__$1);add_class_BANG_.call(null,elem__$1,c_14704);
{
var G__14705 = cljs.core.next.call(null,seq__14638_14698__$1);
var G__14706 = null;
var G__14707 = 0;
var G__14708 = 0;
seq__14638_14688 = G__14705;
chunk__14639_14689 = G__14706;
count__14640_14690 = G__14707;
i__14641_14691 = G__14708;
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
var G__14687 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14687__delegate.call(this,elem,classes,more_classes);};
G__14687.cljs$lang$maxFixedArity = 2;
G__14687.cljs$lang$applyTo = (function (arglist__14709){
var elem = cljs.core.first(arglist__14709);
arglist__14709 = cljs.core.next(arglist__14709);
var classes = cljs.core.first(arglist__14709);
var more_classes = cljs.core.rest(arglist__14709);
return G__14687__delegate(elem,classes,more_classes);
});
G__14687.cljs$core$IFn$_invoke$arity$variadic = G__14687__delegate;
return G__14687;
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
var G__14710 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__14710;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___14719 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___14719))
{var class_list_14720 = temp__4090__auto___14719;class_list_14720.remove(class$__$1);
} else
{var class_name_14721 = elem__$1.className;var new_class_name_14722 = dommy.attrs.remove_class_str.call(null,class_name_14721,class$__$1);if((class_name_14721 === new_class_name_14722))
{} else
{elem__$1.className = new_class_name_14722;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__14723__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14715 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__14716 = null;var count__14717 = 0;var i__14718 = 0;while(true){
if((i__14718 < count__14717))
{var c = cljs.core._nth.call(null,chunk__14716,i__14718);remove_class_BANG_.call(null,elem__$1,c);
{
var G__14724 = seq__14715;
var G__14725 = chunk__14716;
var G__14726 = count__14717;
var G__14727 = (i__14718 + 1);
seq__14715 = G__14724;
chunk__14716 = G__14725;
count__14717 = G__14726;
i__14718 = G__14727;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14715);if(temp__4092__auto__)
{var seq__14715__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14715__$1))
{var c__6932__auto__ = cljs.core.chunk_first.call(null,seq__14715__$1);{
var G__14728 = cljs.core.chunk_rest.call(null,seq__14715__$1);
var G__14729 = c__6932__auto__;
var G__14730 = cljs.core.count.call(null,c__6932__auto__);
var G__14731 = 0;
seq__14715 = G__14728;
chunk__14716 = G__14729;
count__14717 = G__14730;
i__14718 = G__14731;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__14715__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__14732 = cljs.core.next.call(null,seq__14715__$1);
var G__14733 = null;
var G__14734 = 0;
var G__14735 = 0;
seq__14715 = G__14732;
chunk__14716 = G__14733;
count__14717 = G__14734;
i__14718 = G__14735;
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
var G__14723 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14723__delegate.call(this,elem,class$,classes);};
G__14723.cljs$lang$maxFixedArity = 2;
G__14723.cljs$lang$applyTo = (function (arglist__14736){
var elem = cljs.core.first(arglist__14736);
arglist__14736 = cljs.core.next(arglist__14736);
var class$ = cljs.core.first(arglist__14736);
var classes = cljs.core.rest(arglist__14736);
return G__14723__delegate(elem,class$,classes);
});
G__14723.cljs$core$IFn$_invoke$arity$variadic = G__14723__delegate;
return G__14723;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___14737 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___14737))
{var class_list_14738 = temp__4090__auto___14737;class_list_14738.toggle(class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__14741){var vec__14742 = p__14741;var k = cljs.core.nth.call(null,vec__14742,0,null);var v = cljs.core.nth.call(null,vec__14742,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__14749_14755 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__14750_14756 = null;var count__14751_14757 = 0;var i__14752_14758 = 0;while(true){
if((i__14752_14758 < count__14751_14757))
{var vec__14753_14759 = cljs.core._nth.call(null,chunk__14750_14756,i__14752_14758);var k_14760 = cljs.core.nth.call(null,vec__14753_14759,0,null);var v_14761 = cljs.core.nth.call(null,vec__14753_14759,1,null);(style[cljs.core.name.call(null,k_14760)] = v_14761);
{
var G__14762 = seq__14749_14755;
var G__14763 = chunk__14750_14756;
var G__14764 = count__14751_14757;
var G__14765 = (i__14752_14758 + 1);
seq__14749_14755 = G__14762;
chunk__14750_14756 = G__14763;
count__14751_14757 = G__14764;
i__14752_14758 = G__14765;
continue;
}
} else
{var temp__4092__auto___14766 = cljs.core.seq.call(null,seq__14749_14755);if(temp__4092__auto___14766)
{var seq__14749_14767__$1 = temp__4092__auto___14766;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14749_14767__$1))
{var c__6932__auto___14768 = cljs.core.chunk_first.call(null,seq__14749_14767__$1);{
var G__14769 = cljs.core.chunk_rest.call(null,seq__14749_14767__$1);
var G__14770 = c__6932__auto___14768;
var G__14771 = cljs.core.count.call(null,c__6932__auto___14768);
var G__14772 = 0;
seq__14749_14755 = G__14769;
chunk__14750_14756 = G__14770;
count__14751_14757 = G__14771;
i__14752_14758 = G__14772;
continue;
}
} else
{var vec__14754_14773 = cljs.core.first.call(null,seq__14749_14767__$1);var k_14774 = cljs.core.nth.call(null,vec__14754_14773,0,null);var v_14775 = cljs.core.nth.call(null,vec__14754_14773,1,null);(style[cljs.core.name.call(null,k_14774)] = v_14775);
{
var G__14776 = cljs.core.next.call(null,seq__14749_14767__$1);
var G__14777 = null;
var G__14778 = 0;
var G__14779 = 0;
seq__14749_14755 = G__14776;
chunk__14750_14756 = G__14777;
count__14751_14757 = G__14778;
i__14752_14758 = G__14779;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__14780){
var elem = cljs.core.first(arglist__14780);
var kvs = cljs.core.rest(arglist__14780);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14787_14793 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__14788_14794 = null;var count__14789_14795 = 0;var i__14790_14796 = 0;while(true){
if((i__14790_14796 < count__14789_14795))
{var vec__14791_14797 = cljs.core._nth.call(null,chunk__14788_14794,i__14790_14796);var k_14798 = cljs.core.nth.call(null,vec__14791_14797,0,null);var v_14799 = cljs.core.nth.call(null,vec__14791_14797,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_14798,[cljs.core.str(v_14799),cljs.core.str("px")].join(''));
{
var G__14800 = seq__14787_14793;
var G__14801 = chunk__14788_14794;
var G__14802 = count__14789_14795;
var G__14803 = (i__14790_14796 + 1);
seq__14787_14793 = G__14800;
chunk__14788_14794 = G__14801;
count__14789_14795 = G__14802;
i__14790_14796 = G__14803;
continue;
}
} else
{var temp__4092__auto___14804 = cljs.core.seq.call(null,seq__14787_14793);if(temp__4092__auto___14804)
{var seq__14787_14805__$1 = temp__4092__auto___14804;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14787_14805__$1))
{var c__6932__auto___14806 = cljs.core.chunk_first.call(null,seq__14787_14805__$1);{
var G__14807 = cljs.core.chunk_rest.call(null,seq__14787_14805__$1);
var G__14808 = c__6932__auto___14806;
var G__14809 = cljs.core.count.call(null,c__6932__auto___14806);
var G__14810 = 0;
seq__14787_14793 = G__14807;
chunk__14788_14794 = G__14808;
count__14789_14795 = G__14809;
i__14790_14796 = G__14810;
continue;
}
} else
{var vec__14792_14811 = cljs.core.first.call(null,seq__14787_14805__$1);var k_14812 = cljs.core.nth.call(null,vec__14792_14811,0,null);var v_14813 = cljs.core.nth.call(null,vec__14792_14811,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_14812,[cljs.core.str(v_14813),cljs.core.str("px")].join(''));
{
var G__14814 = cljs.core.next.call(null,seq__14787_14805__$1);
var G__14815 = null;
var G__14816 = 0;
var G__14817 = 0;
seq__14787_14793 = G__14814;
chunk__14788_14794 = G__14815;
count__14789_14795 = G__14816;
i__14790_14796 = G__14817;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__14818){
var elem = cljs.core.first(arglist__14818);
var kvs = cljs.core.rest(arglist__14818);
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
{var G__14827 = dommy.template.__GT_node_like.call(null,elem);(G__14827[cljs.core.name.call(null,k)] = v);
return G__14827;
} else
{var G__14828 = dommy.template.__GT_node_like.call(null,elem);G__14828.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__14828;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__14835__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14829_14836 = cljs.core.seq.call(null,cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([k,v], true),cljs.core.partition.call(null,2,kvs)));var chunk__14830_14837 = null;var count__14831_14838 = 0;var i__14832_14839 = 0;while(true){
if((i__14832_14839 < count__14831_14838))
{var vec__14833_14840 = cljs.core._nth.call(null,chunk__14830_14837,i__14832_14839);var k_14841__$1 = cljs.core.nth.call(null,vec__14833_14840,0,null);var v_14842__$1 = cljs.core.nth.call(null,vec__14833_14840,1,null);set_attr_BANG_.call(null,elem__$1,k_14841__$1,v_14842__$1);
{
var G__14843 = seq__14829_14836;
var G__14844 = chunk__14830_14837;
var G__14845 = count__14831_14838;
var G__14846 = (i__14832_14839 + 1);
seq__14829_14836 = G__14843;
chunk__14830_14837 = G__14844;
count__14831_14838 = G__14845;
i__14832_14839 = G__14846;
continue;
}
} else
{var temp__4092__auto___14847 = cljs.core.seq.call(null,seq__14829_14836);if(temp__4092__auto___14847)
{var seq__14829_14848__$1 = temp__4092__auto___14847;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14829_14848__$1))
{var c__6932__auto___14849 = cljs.core.chunk_first.call(null,seq__14829_14848__$1);{
var G__14850 = cljs.core.chunk_rest.call(null,seq__14829_14848__$1);
var G__14851 = c__6932__auto___14849;
var G__14852 = cljs.core.count.call(null,c__6932__auto___14849);
var G__14853 = 0;
seq__14829_14836 = G__14850;
chunk__14830_14837 = G__14851;
count__14831_14838 = G__14852;
i__14832_14839 = G__14853;
continue;
}
} else
{var vec__14834_14854 = cljs.core.first.call(null,seq__14829_14848__$1);var k_14855__$1 = cljs.core.nth.call(null,vec__14834_14854,0,null);var v_14856__$1 = cljs.core.nth.call(null,vec__14834_14854,1,null);set_attr_BANG_.call(null,elem__$1,k_14855__$1,v_14856__$1);
{
var G__14857 = cljs.core.next.call(null,seq__14829_14848__$1);
var G__14858 = null;
var G__14859 = 0;
var G__14860 = 0;
seq__14829_14836 = G__14857;
chunk__14830_14837 = G__14858;
count__14831_14838 = G__14859;
i__14832_14839 = G__14860;
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
var G__14835 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__14835__delegate.call(this,elem,k,v,kvs);};
G__14835.cljs$lang$maxFixedArity = 3;
G__14835.cljs$lang$applyTo = (function (arglist__14861){
var elem = cljs.core.first(arglist__14861);
arglist__14861 = cljs.core.next(arglist__14861);
var k = cljs.core.first(arglist__14861);
arglist__14861 = cljs.core.next(arglist__14861);
var v = cljs.core.first(arglist__14861);
var kvs = cljs.core.rest(arglist__14861);
return G__14835__delegate(elem,k,v,kvs);
});
G__14835.cljs$core$IFn$_invoke$arity$variadic = G__14835__delegate;
return G__14835;
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
var G__14870__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14866_14871 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__14867_14872 = null;var count__14868_14873 = 0;var i__14869_14874 = 0;while(true){
if((i__14869_14874 < count__14868_14873))
{var k_14875__$1 = cljs.core._nth.call(null,chunk__14867_14872,i__14869_14874);remove_attr_BANG_.call(null,elem__$1,k_14875__$1);
{
var G__14876 = seq__14866_14871;
var G__14877 = chunk__14867_14872;
var G__14878 = count__14868_14873;
var G__14879 = (i__14869_14874 + 1);
seq__14866_14871 = G__14876;
chunk__14867_14872 = G__14877;
count__14868_14873 = G__14878;
i__14869_14874 = G__14879;
continue;
}
} else
{var temp__4092__auto___14880 = cljs.core.seq.call(null,seq__14866_14871);if(temp__4092__auto___14880)
{var seq__14866_14881__$1 = temp__4092__auto___14880;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14866_14881__$1))
{var c__6932__auto___14882 = cljs.core.chunk_first.call(null,seq__14866_14881__$1);{
var G__14883 = cljs.core.chunk_rest.call(null,seq__14866_14881__$1);
var G__14884 = c__6932__auto___14882;
var G__14885 = cljs.core.count.call(null,c__6932__auto___14882);
var G__14886 = 0;
seq__14866_14871 = G__14883;
chunk__14867_14872 = G__14884;
count__14868_14873 = G__14885;
i__14869_14874 = G__14886;
continue;
}
} else
{var k_14887__$1 = cljs.core.first.call(null,seq__14866_14881__$1);remove_attr_BANG_.call(null,elem__$1,k_14887__$1);
{
var G__14888 = cljs.core.next.call(null,seq__14866_14881__$1);
var G__14889 = null;
var G__14890 = 0;
var G__14891 = 0;
seq__14866_14871 = G__14888;
chunk__14867_14872 = G__14889;
count__14868_14873 = G__14890;
i__14869_14874 = G__14891;
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
var G__14870 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14870__delegate.call(this,elem,k,ks);};
G__14870.cljs$lang$maxFixedArity = 2;
G__14870.cljs$lang$applyTo = (function (arglist__14892){
var elem = cljs.core.first(arglist__14892);
arglist__14892 = cljs.core.next(arglist__14892);
var k = cljs.core.first(arglist__14892);
var ks = cljs.core.rest(arglist__14892);
return G__14870__delegate(elem,k,ks);
});
G__14870.cljs$core$IFn$_invoke$arity$variadic = G__14870__delegate;
return G__14870;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__14894 = dommy.template.__GT_node_like.call(null,elem);G__14894.style.display = ((show_QMARK_)?"":"none");
return G__14894;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__14896 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__14896,false);
return G__14896;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__14898 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__14898,true);
return G__14898;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__14900 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__14900["constructor"] = Object);
return G__14900;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
