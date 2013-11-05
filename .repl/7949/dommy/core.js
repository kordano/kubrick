goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.template');
goog.require('dommy.template');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.core.has_class_QMARK_ = dommy.attrs.has_class_QMARK_;
dommy.core.add_class_BANG_ = dommy.attrs.add_class_BANG_;
dommy.core.remove_class_BANG_ = dommy.attrs.remove_class_BANG_;
dommy.core.toggle_class_BANG_ = dommy.attrs.toggle_class_BANG_;
dommy.core.set_attr_BANG_ = dommy.attrs.set_attr_BANG_;
dommy.core.set_style_BANG_ = dommy.attrs.set_style_BANG_;
dommy.core.set_px_BANG_ = dommy.attrs.set_px_BANG_;
dommy.core.px = dommy.attrs.px;
dommy.core.style_str = dommy.attrs.style_str;
dommy.core.style = dommy.attrs.style;
dommy.core.remove_attr_BANG_ = dommy.attrs.remove_attr_BANG_;
dommy.core.attr = dommy.attrs.attr;
dommy.core.hidden_QMARK_ = dommy.attrs.hidden_QMARK_;
dommy.core.toggle_BANG_ = dommy.attrs.toggle_BANG_;
dommy.core.hide_BANG_ = dommy.attrs.hide_BANG_;
dommy.core.show_BANG_ = dommy.attrs.show_BANG_;
dommy.core.bounding_client_rect = dommy.attrs.bounding_client_rect;
dommy.core.dissoc_in = dommy.utils.dissoc_in;
dommy.core.__GT_Array = dommy.utils.__GT_Array;
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.innerHTML = html;
return elem__$1;
});
dommy.core.html = (function html(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");(elem__$1[prop] = text);
return elem__$1;
});
dommy.core.text = (function text(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var or__3943__auto__ = elem__$1.textContent;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return elem__$1.innerText;
}
});
dommy.core.value = (function value(elem){return dommy.template.__GT_node_like.call(null,elem).value;
});
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.value = value;
return elem__$1;
});
/**
* append `child` to `parent`. 'parent' and 'child' should be node-like
* (work with dommy.template/->node-like). The node-like projection
* of parent is returned after appending child.
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){var G__14061 = dommy.template.__GT_node_like.call(null,parent);G__14061.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__14061;
});
var append_BANG___3 = (function() { 
var G__14066__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__14062_14067 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__14063_14068 = null;var count__14064_14069 = 0;var i__14065_14070 = 0;while(true){
if((i__14065_14070 < count__14064_14069))
{var c_14071 = cljs.core._nth.call(null,chunk__14063_14068,i__14065_14070);append_BANG_.call(null,parent__$1,c_14071);
{
var G__14072 = seq__14062_14067;
var G__14073 = chunk__14063_14068;
var G__14074 = count__14064_14069;
var G__14075 = (i__14065_14070 + 1);
seq__14062_14067 = G__14072;
chunk__14063_14068 = G__14073;
count__14064_14069 = G__14074;
i__14065_14070 = G__14075;
continue;
}
} else
{var temp__4092__auto___14076 = cljs.core.seq.call(null,seq__14062_14067);if(temp__4092__auto___14076)
{var seq__14062_14077__$1 = temp__4092__auto___14076;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14062_14077__$1))
{var c__6930__auto___14078 = cljs.core.chunk_first.call(null,seq__14062_14077__$1);{
var G__14079 = cljs.core.chunk_rest.call(null,seq__14062_14077__$1);
var G__14080 = c__6930__auto___14078;
var G__14081 = cljs.core.count.call(null,c__6930__auto___14078);
var G__14082 = 0;
seq__14062_14067 = G__14079;
chunk__14063_14068 = G__14080;
count__14064_14069 = G__14081;
i__14065_14070 = G__14082;
continue;
}
} else
{var c_14083 = cljs.core.first.call(null,seq__14062_14077__$1);append_BANG_.call(null,parent__$1,c_14083);
{
var G__14084 = cljs.core.next.call(null,seq__14062_14077__$1);
var G__14085 = null;
var G__14086 = 0;
var G__14087 = 0;
seq__14062_14067 = G__14084;
chunk__14063_14068 = G__14085;
count__14064_14069 = G__14086;
i__14065_14070 = G__14087;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__14066 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14066__delegate.call(this,parent,child,more_children);};
G__14066.cljs$lang$maxFixedArity = 2;
G__14066.cljs$lang$applyTo = (function (arglist__14088){
var parent = cljs.core.first(arglist__14088);
arglist__14088 = cljs.core.next(arglist__14088);
var child = cljs.core.first(arglist__14088);
var more_children = cljs.core.rest(arglist__14088);
return G__14066__delegate(parent,child,more_children);
});
G__14066.cljs$core$IFn$_invoke$arity$variadic = G__14066__delegate;
return G__14066;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* prepend `child` to `parent`, both node-like
* return ->node-like projection of `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){var G__14094 = dommy.template.__GT_node_like.call(null,parent);G__14094.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__14094;
});
var prepend_BANG___3 = (function() { 
var G__14099__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__14095_14100 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__14096_14101 = null;var count__14097_14102 = 0;var i__14098_14103 = 0;while(true){
if((i__14098_14103 < count__14097_14102))
{var c_14104 = cljs.core._nth.call(null,chunk__14096_14101,i__14098_14103);prepend_BANG_.call(null,parent__$1,c_14104);
{
var G__14105 = seq__14095_14100;
var G__14106 = chunk__14096_14101;
var G__14107 = count__14097_14102;
var G__14108 = (i__14098_14103 + 1);
seq__14095_14100 = G__14105;
chunk__14096_14101 = G__14106;
count__14097_14102 = G__14107;
i__14098_14103 = G__14108;
continue;
}
} else
{var temp__4092__auto___14109 = cljs.core.seq.call(null,seq__14095_14100);if(temp__4092__auto___14109)
{var seq__14095_14110__$1 = temp__4092__auto___14109;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14095_14110__$1))
{var c__6930__auto___14111 = cljs.core.chunk_first.call(null,seq__14095_14110__$1);{
var G__14112 = cljs.core.chunk_rest.call(null,seq__14095_14110__$1);
var G__14113 = c__6930__auto___14111;
var G__14114 = cljs.core.count.call(null,c__6930__auto___14111);
var G__14115 = 0;
seq__14095_14100 = G__14112;
chunk__14096_14101 = G__14113;
count__14097_14102 = G__14114;
i__14098_14103 = G__14115;
continue;
}
} else
{var c_14116 = cljs.core.first.call(null,seq__14095_14110__$1);prepend_BANG_.call(null,parent__$1,c_14116);
{
var G__14117 = cljs.core.next.call(null,seq__14095_14110__$1);
var G__14118 = null;
var G__14119 = 0;
var G__14120 = 0;
seq__14095_14100 = G__14117;
chunk__14096_14101 = G__14118;
count__14097_14102 = G__14119;
i__14098_14103 = G__14120;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__14099 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14099__delegate.call(this,parent,child,more_children);};
G__14099.cljs$lang$maxFixedArity = 2;
G__14099.cljs$lang$applyTo = (function (arglist__14121){
var parent = cljs.core.first(arglist__14121);
arglist__14121 = cljs.core.next(arglist__14121);
var child = cljs.core.first(arglist__14121);
var more_children = cljs.core.rest(arglist__14121);
return G__14099__delegate(parent,child,more_children);
});
G__14099.cljs$core$IFn$_invoke$arity$variadic = G__14099__delegate;
return G__14099;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* insert `node` before `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);if(cljs.core.truth_(other__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"other","other",-1534461751,null))))].join('')));
}
other__$1.parentNode.insertBefore(actual_node,other__$1);
return actual_node;
});
/**
* insert `node` after `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___14122 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___14122))
{var next_14123 = temp__4090__auto___14122;parent.insertBefore(actual_node,next_14123);
} else
{parent.appendChild(actual_node);
}
return actual_node;
});
/**
* replace `elem` with `new`, both node-like, return node-like projection of new.
* node-like projection of elem must have parent.
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){var new$__$1 = dommy.template.__GT_node_like.call(null,new$);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(elem__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"elem","elem",-1637415608,null))))].join('')));
}
elem__$1.parentNode.replaceChild(new$__$1,elem__$1);
return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__14125 = dommy.template.__GT_node_like.call(null,parent);G__14125.innerHTML = "";
dommy.core.append_BANG_.call(null,G__14125,node_like);
return G__14125;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__14127 = elem__$1.parentNode;G__14127.removeChild(elem__$1);
return G__14127;
});
dommy.core.selector = (function selector(data){if(cljs.core.coll_QMARK_.call(null,data))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else
{if((function (){var or__3943__auto__ = typeof data === 'string';if(or__3943__auto__)
{return or__3943__auto__;
} else
{return (data instanceof cljs.core.Keyword);
}
})())
{return cljs.core.name.call(null,data);
} else
{return null;
}
}
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__14128_SHARP_){return p1__14128_SHARP_.parentNode;
}),dommy.template.__GT_node_like.call(null,elem)));
});
/**
* returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,dommy.template.__GT_node_like.call(null,base)).querySelectorAll(dommy.core.selector.call(null,selector)));return (function (elem){return (matches.indexOf(elem) >= 0);
});
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* closest ancestor of `node` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,selector),dommy.core.ancestor_nodes.call(null,dommy.template.__GT_node_like.call(null,elem))));
});
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__14129_SHARP_){return !((p1__14129_SHARP_ === base__$1));
}),dommy.core.ancestor_nodes.call(null,elem__$1))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* is `descendant` a descendant of `ancestor`?
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){var descendant__$1 = dommy.template.__GT_node_like.call(null,descendant);var ancestor__$1 = dommy.template.__GT_node_like.call(null,ancestor);if(cljs.core.truth_(ancestor__$1.contains))
{return ancestor__$1.contains(descendant__$1);
} else
{if(cljs.core.truth_(ancestor__$1.compareDocumentPosition))
{return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << 4)) != 0);
} else
{return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__14130){var vec__14131 = p__14130;var special_mouse_event = cljs.core.nth.call(null,vec__14131,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__14131,1,null);return cljs.core.PersistentVector.fromArray([special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3943__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3941__auto__ = related_target;if(cljs.core.truth_(and__3941__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__3941__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
})], true)], true);
}),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997),new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780),new cljs.core.Keyword(null,"mouseout","mouseout",894298107)], true)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var temp__4092__auto__ = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_(temp__4092__auto__))
{var selected_target = temp__4092__auto__;event.selectedTarget = selected_target;
return f.call(null,event);
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `nodes`
*/
dommy.core.event_listeners = (function event_listeners(elem){var or__3943__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__14132){
var elem = cljs.core.first(arglist__14132);
arglist__14132 = cljs.core.next(arglist__14132);
var f = cljs.core.first(arglist__14132);
var args = cljs.core.rest(arglist__14132);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__14133_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__14133_SHARP_));
}),cljs.core.rest).call(null,elem_sel);
} else
{return cljs.core.PersistentVector.fromArray([dommy.template.__GT_node_like.call(null,elem_sel),null], true);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__14157_14180 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_14181 = cljs.core.nth.call(null,vec__14157_14180,0,null);var selector_14182 = cljs.core.nth.call(null,vec__14157_14180,1,null);var seq__14158_14183 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__14165_14184 = null;var count__14166_14185 = 0;var i__14167_14186 = 0;while(true){
if((i__14167_14186 < count__14166_14185))
{var vec__14174_14187 = cljs.core._nth.call(null,chunk__14165_14184,i__14167_14186);var orig_type_14188 = cljs.core.nth.call(null,vec__14174_14187,0,null);var f_14189 = cljs.core.nth.call(null,vec__14174_14187,1,null);var seq__14168_14190 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14188,cljs.core.PersistentArrayMap.fromArray([orig_type_14188,cljs.core.identity], true)));var chunk__14170_14191 = null;var count__14171_14192 = 0;var i__14172_14193 = 0;while(true){
if((i__14172_14193 < count__14171_14192))
{var vec__14175_14194 = cljs.core._nth.call(null,chunk__14170_14191,i__14172_14193);var actual_type_14195 = cljs.core.nth.call(null,vec__14175_14194,0,null);var factory_14196 = cljs.core.nth.call(null,vec__14175_14194,1,null);var canonical_f_14197 = (cljs.core.truth_(selector_14182)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14181,selector_14182):cljs.core.identity).call(null,factory_14196.call(null,f_14189));dommy.core.update_event_listeners_BANG_.call(null,elem_14181,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_14182,actual_type_14195,f_14189], true),canonical_f_14197);
if(cljs.core.truth_(elem_14181.addEventListener))
{elem_14181.addEventListener(cljs.core.name.call(null,actual_type_14195),canonical_f_14197);
} else
{elem_14181.attachEvent(cljs.core.name.call(null,actual_type_14195),canonical_f_14197);
}
{
var G__14198 = seq__14168_14190;
var G__14199 = chunk__14170_14191;
var G__14200 = count__14171_14192;
var G__14201 = (i__14172_14193 + 1);
seq__14168_14190 = G__14198;
chunk__14170_14191 = G__14199;
count__14171_14192 = G__14200;
i__14172_14193 = G__14201;
continue;
}
} else
{var temp__4092__auto___14202 = cljs.core.seq.call(null,seq__14168_14190);if(temp__4092__auto___14202)
{var seq__14168_14203__$1 = temp__4092__auto___14202;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14168_14203__$1))
{var c__6930__auto___14204 = cljs.core.chunk_first.call(null,seq__14168_14203__$1);{
var G__14205 = cljs.core.chunk_rest.call(null,seq__14168_14203__$1);
var G__14206 = c__6930__auto___14204;
var G__14207 = cljs.core.count.call(null,c__6930__auto___14204);
var G__14208 = 0;
seq__14168_14190 = G__14205;
chunk__14170_14191 = G__14206;
count__14171_14192 = G__14207;
i__14172_14193 = G__14208;
continue;
}
} else
{var vec__14176_14209 = cljs.core.first.call(null,seq__14168_14203__$1);var actual_type_14210 = cljs.core.nth.call(null,vec__14176_14209,0,null);var factory_14211 = cljs.core.nth.call(null,vec__14176_14209,1,null);var canonical_f_14212 = (cljs.core.truth_(selector_14182)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14181,selector_14182):cljs.core.identity).call(null,factory_14211.call(null,f_14189));dommy.core.update_event_listeners_BANG_.call(null,elem_14181,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_14182,actual_type_14210,f_14189], true),canonical_f_14212);
if(cljs.core.truth_(elem_14181.addEventListener))
{elem_14181.addEventListener(cljs.core.name.call(null,actual_type_14210),canonical_f_14212);
} else
{elem_14181.attachEvent(cljs.core.name.call(null,actual_type_14210),canonical_f_14212);
}
{
var G__14213 = cljs.core.next.call(null,seq__14168_14203__$1);
var G__14214 = null;
var G__14215 = 0;
var G__14216 = 0;
seq__14168_14190 = G__14213;
chunk__14170_14191 = G__14214;
count__14171_14192 = G__14215;
i__14172_14193 = G__14216;
continue;
}
}
} else
{}
}
break;
}
{
var G__14217 = seq__14158_14183;
var G__14218 = chunk__14165_14184;
var G__14219 = count__14166_14185;
var G__14220 = (i__14167_14186 + 1);
seq__14158_14183 = G__14217;
chunk__14165_14184 = G__14218;
count__14166_14185 = G__14219;
i__14167_14186 = G__14220;
continue;
}
} else
{var temp__4092__auto___14221 = cljs.core.seq.call(null,seq__14158_14183);if(temp__4092__auto___14221)
{var seq__14158_14222__$1 = temp__4092__auto___14221;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14158_14222__$1))
{var c__6930__auto___14223 = cljs.core.chunk_first.call(null,seq__14158_14222__$1);{
var G__14224 = cljs.core.chunk_rest.call(null,seq__14158_14222__$1);
var G__14225 = c__6930__auto___14223;
var G__14226 = cljs.core.count.call(null,c__6930__auto___14223);
var G__14227 = 0;
seq__14158_14183 = G__14224;
chunk__14165_14184 = G__14225;
count__14166_14185 = G__14226;
i__14167_14186 = G__14227;
continue;
}
} else
{var vec__14177_14228 = cljs.core.first.call(null,seq__14158_14222__$1);var orig_type_14229 = cljs.core.nth.call(null,vec__14177_14228,0,null);var f_14230 = cljs.core.nth.call(null,vec__14177_14228,1,null);var seq__14159_14231 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14229,cljs.core.PersistentArrayMap.fromArray([orig_type_14229,cljs.core.identity], true)));var chunk__14161_14232 = null;var count__14162_14233 = 0;var i__14163_14234 = 0;while(true){
if((i__14163_14234 < count__14162_14233))
{var vec__14178_14235 = cljs.core._nth.call(null,chunk__14161_14232,i__14163_14234);var actual_type_14236 = cljs.core.nth.call(null,vec__14178_14235,0,null);var factory_14237 = cljs.core.nth.call(null,vec__14178_14235,1,null);var canonical_f_14238 = (cljs.core.truth_(selector_14182)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14181,selector_14182):cljs.core.identity).call(null,factory_14237.call(null,f_14230));dommy.core.update_event_listeners_BANG_.call(null,elem_14181,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_14182,actual_type_14236,f_14230], true),canonical_f_14238);
if(cljs.core.truth_(elem_14181.addEventListener))
{elem_14181.addEventListener(cljs.core.name.call(null,actual_type_14236),canonical_f_14238);
} else
{elem_14181.attachEvent(cljs.core.name.call(null,actual_type_14236),canonical_f_14238);
}
{
var G__14239 = seq__14159_14231;
var G__14240 = chunk__14161_14232;
var G__14241 = count__14162_14233;
var G__14242 = (i__14163_14234 + 1);
seq__14159_14231 = G__14239;
chunk__14161_14232 = G__14240;
count__14162_14233 = G__14241;
i__14163_14234 = G__14242;
continue;
}
} else
{var temp__4092__auto___14243__$1 = cljs.core.seq.call(null,seq__14159_14231);if(temp__4092__auto___14243__$1)
{var seq__14159_14244__$1 = temp__4092__auto___14243__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14159_14244__$1))
{var c__6930__auto___14245 = cljs.core.chunk_first.call(null,seq__14159_14244__$1);{
var G__14246 = cljs.core.chunk_rest.call(null,seq__14159_14244__$1);
var G__14247 = c__6930__auto___14245;
var G__14248 = cljs.core.count.call(null,c__6930__auto___14245);
var G__14249 = 0;
seq__14159_14231 = G__14246;
chunk__14161_14232 = G__14247;
count__14162_14233 = G__14248;
i__14163_14234 = G__14249;
continue;
}
} else
{var vec__14179_14250 = cljs.core.first.call(null,seq__14159_14244__$1);var actual_type_14251 = cljs.core.nth.call(null,vec__14179_14250,0,null);var factory_14252 = cljs.core.nth.call(null,vec__14179_14250,1,null);var canonical_f_14253 = (cljs.core.truth_(selector_14182)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14181,selector_14182):cljs.core.identity).call(null,factory_14252.call(null,f_14230));dommy.core.update_event_listeners_BANG_.call(null,elem_14181,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_14182,actual_type_14251,f_14230], true),canonical_f_14253);
if(cljs.core.truth_(elem_14181.addEventListener))
{elem_14181.addEventListener(cljs.core.name.call(null,actual_type_14251),canonical_f_14253);
} else
{elem_14181.attachEvent(cljs.core.name.call(null,actual_type_14251),canonical_f_14253);
}
{
var G__14254 = cljs.core.next.call(null,seq__14159_14244__$1);
var G__14255 = null;
var G__14256 = 0;
var G__14257 = 0;
seq__14159_14231 = G__14254;
chunk__14161_14232 = G__14255;
count__14162_14233 = G__14256;
i__14163_14234 = G__14257;
continue;
}
}
} else
{}
}
break;
}
{
var G__14258 = cljs.core.next.call(null,seq__14158_14222__$1);
var G__14259 = null;
var G__14260 = 0;
var G__14261 = 0;
seq__14158_14183 = G__14258;
chunk__14165_14184 = G__14259;
count__14166_14185 = G__14260;
i__14167_14186 = G__14261;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__14262){
var elem_sel = cljs.core.first(arglist__14262);
var type_fs = cljs.core.rest(arglist__14262);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__14286_14309 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_14310 = cljs.core.nth.call(null,vec__14286_14309,0,null);var selector_14311 = cljs.core.nth.call(null,vec__14286_14309,1,null);var seq__14287_14312 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__14294_14313 = null;var count__14295_14314 = 0;var i__14296_14315 = 0;while(true){
if((i__14296_14315 < count__14295_14314))
{var vec__14303_14316 = cljs.core._nth.call(null,chunk__14294_14313,i__14296_14315);var orig_type_14317 = cljs.core.nth.call(null,vec__14303_14316,0,null);var f_14318 = cljs.core.nth.call(null,vec__14303_14316,1,null);var seq__14297_14319 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14317,cljs.core.PersistentArrayMap.fromArray([orig_type_14317,cljs.core.identity], true)));var chunk__14299_14320 = null;var count__14300_14321 = 0;var i__14301_14322 = 0;while(true){
if((i__14301_14322 < count__14300_14321))
{var vec__14304_14323 = cljs.core._nth.call(null,chunk__14299_14320,i__14301_14322);var actual_type_14324 = cljs.core.nth.call(null,vec__14304_14323,0,null);var __14325 = cljs.core.nth.call(null,vec__14304_14323,1,null);var keys_14326 = cljs.core.PersistentVector.fromArray([selector_14311,actual_type_14324,f_14318], true);var canonical_f_14327 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14310),keys_14326);dommy.core.update_event_listeners_BANG_.call(null,elem_14310,dommy.utils.dissoc_in,keys_14326);
if(cljs.core.truth_(elem_14310.removeEventListener))
{elem_14310.removeEventListener(cljs.core.name.call(null,actual_type_14324),canonical_f_14327);
} else
{elem_14310.detachEvent(cljs.core.name.call(null,actual_type_14324),canonical_f_14327);
}
{
var G__14328 = seq__14297_14319;
var G__14329 = chunk__14299_14320;
var G__14330 = count__14300_14321;
var G__14331 = (i__14301_14322 + 1);
seq__14297_14319 = G__14328;
chunk__14299_14320 = G__14329;
count__14300_14321 = G__14330;
i__14301_14322 = G__14331;
continue;
}
} else
{var temp__4092__auto___14332 = cljs.core.seq.call(null,seq__14297_14319);if(temp__4092__auto___14332)
{var seq__14297_14333__$1 = temp__4092__auto___14332;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14297_14333__$1))
{var c__6930__auto___14334 = cljs.core.chunk_first.call(null,seq__14297_14333__$1);{
var G__14335 = cljs.core.chunk_rest.call(null,seq__14297_14333__$1);
var G__14336 = c__6930__auto___14334;
var G__14337 = cljs.core.count.call(null,c__6930__auto___14334);
var G__14338 = 0;
seq__14297_14319 = G__14335;
chunk__14299_14320 = G__14336;
count__14300_14321 = G__14337;
i__14301_14322 = G__14338;
continue;
}
} else
{var vec__14305_14339 = cljs.core.first.call(null,seq__14297_14333__$1);var actual_type_14340 = cljs.core.nth.call(null,vec__14305_14339,0,null);var __14341 = cljs.core.nth.call(null,vec__14305_14339,1,null);var keys_14342 = cljs.core.PersistentVector.fromArray([selector_14311,actual_type_14340,f_14318], true);var canonical_f_14343 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14310),keys_14342);dommy.core.update_event_listeners_BANG_.call(null,elem_14310,dommy.utils.dissoc_in,keys_14342);
if(cljs.core.truth_(elem_14310.removeEventListener))
{elem_14310.removeEventListener(cljs.core.name.call(null,actual_type_14340),canonical_f_14343);
} else
{elem_14310.detachEvent(cljs.core.name.call(null,actual_type_14340),canonical_f_14343);
}
{
var G__14344 = cljs.core.next.call(null,seq__14297_14333__$1);
var G__14345 = null;
var G__14346 = 0;
var G__14347 = 0;
seq__14297_14319 = G__14344;
chunk__14299_14320 = G__14345;
count__14300_14321 = G__14346;
i__14301_14322 = G__14347;
continue;
}
}
} else
{}
}
break;
}
{
var G__14348 = seq__14287_14312;
var G__14349 = chunk__14294_14313;
var G__14350 = count__14295_14314;
var G__14351 = (i__14296_14315 + 1);
seq__14287_14312 = G__14348;
chunk__14294_14313 = G__14349;
count__14295_14314 = G__14350;
i__14296_14315 = G__14351;
continue;
}
} else
{var temp__4092__auto___14352 = cljs.core.seq.call(null,seq__14287_14312);if(temp__4092__auto___14352)
{var seq__14287_14353__$1 = temp__4092__auto___14352;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14287_14353__$1))
{var c__6930__auto___14354 = cljs.core.chunk_first.call(null,seq__14287_14353__$1);{
var G__14355 = cljs.core.chunk_rest.call(null,seq__14287_14353__$1);
var G__14356 = c__6930__auto___14354;
var G__14357 = cljs.core.count.call(null,c__6930__auto___14354);
var G__14358 = 0;
seq__14287_14312 = G__14355;
chunk__14294_14313 = G__14356;
count__14295_14314 = G__14357;
i__14296_14315 = G__14358;
continue;
}
} else
{var vec__14306_14359 = cljs.core.first.call(null,seq__14287_14353__$1);var orig_type_14360 = cljs.core.nth.call(null,vec__14306_14359,0,null);var f_14361 = cljs.core.nth.call(null,vec__14306_14359,1,null);var seq__14288_14362 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14360,cljs.core.PersistentArrayMap.fromArray([orig_type_14360,cljs.core.identity], true)));var chunk__14290_14363 = null;var count__14291_14364 = 0;var i__14292_14365 = 0;while(true){
if((i__14292_14365 < count__14291_14364))
{var vec__14307_14366 = cljs.core._nth.call(null,chunk__14290_14363,i__14292_14365);var actual_type_14367 = cljs.core.nth.call(null,vec__14307_14366,0,null);var __14368 = cljs.core.nth.call(null,vec__14307_14366,1,null);var keys_14369 = cljs.core.PersistentVector.fromArray([selector_14311,actual_type_14367,f_14361], true);var canonical_f_14370 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14310),keys_14369);dommy.core.update_event_listeners_BANG_.call(null,elem_14310,dommy.utils.dissoc_in,keys_14369);
if(cljs.core.truth_(elem_14310.removeEventListener))
{elem_14310.removeEventListener(cljs.core.name.call(null,actual_type_14367),canonical_f_14370);
} else
{elem_14310.detachEvent(cljs.core.name.call(null,actual_type_14367),canonical_f_14370);
}
{
var G__14371 = seq__14288_14362;
var G__14372 = chunk__14290_14363;
var G__14373 = count__14291_14364;
var G__14374 = (i__14292_14365 + 1);
seq__14288_14362 = G__14371;
chunk__14290_14363 = G__14372;
count__14291_14364 = G__14373;
i__14292_14365 = G__14374;
continue;
}
} else
{var temp__4092__auto___14375__$1 = cljs.core.seq.call(null,seq__14288_14362);if(temp__4092__auto___14375__$1)
{var seq__14288_14376__$1 = temp__4092__auto___14375__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14288_14376__$1))
{var c__6930__auto___14377 = cljs.core.chunk_first.call(null,seq__14288_14376__$1);{
var G__14378 = cljs.core.chunk_rest.call(null,seq__14288_14376__$1);
var G__14379 = c__6930__auto___14377;
var G__14380 = cljs.core.count.call(null,c__6930__auto___14377);
var G__14381 = 0;
seq__14288_14362 = G__14378;
chunk__14290_14363 = G__14379;
count__14291_14364 = G__14380;
i__14292_14365 = G__14381;
continue;
}
} else
{var vec__14308_14382 = cljs.core.first.call(null,seq__14288_14376__$1);var actual_type_14383 = cljs.core.nth.call(null,vec__14308_14382,0,null);var __14384 = cljs.core.nth.call(null,vec__14308_14382,1,null);var keys_14385 = cljs.core.PersistentVector.fromArray([selector_14311,actual_type_14383,f_14361], true);var canonical_f_14386 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14310),keys_14385);dommy.core.update_event_listeners_BANG_.call(null,elem_14310,dommy.utils.dissoc_in,keys_14385);
if(cljs.core.truth_(elem_14310.removeEventListener))
{elem_14310.removeEventListener(cljs.core.name.call(null,actual_type_14383),canonical_f_14386);
} else
{elem_14310.detachEvent(cljs.core.name.call(null,actual_type_14383),canonical_f_14386);
}
{
var G__14387 = cljs.core.next.call(null,seq__14288_14376__$1);
var G__14388 = null;
var G__14389 = 0;
var G__14390 = 0;
seq__14288_14362 = G__14387;
chunk__14290_14363 = G__14388;
count__14291_14364 = G__14389;
i__14292_14365 = G__14390;
continue;
}
}
} else
{}
}
break;
}
{
var G__14391 = cljs.core.next.call(null,seq__14287_14353__$1);
var G__14392 = null;
var G__14393 = 0;
var G__14394 = 0;
seq__14287_14312 = G__14391;
chunk__14294_14313 = G__14392;
count__14295_14314 = G__14393;
i__14296_14315 = G__14394;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__14395){
var elem_sel = cljs.core.first(arglist__14395);
var type_fs = cljs.core.rest(arglist__14395);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__14403_14410 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_14411 = cljs.core.nth.call(null,vec__14403_14410,0,null);var selector_14412 = cljs.core.nth.call(null,vec__14403_14410,1,null);var seq__14404_14413 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__14405_14414 = null;var count__14406_14415 = 0;var i__14407_14416 = 0;while(true){
if((i__14407_14416 < count__14406_14415))
{var vec__14408_14417 = cljs.core._nth.call(null,chunk__14405_14414,i__14407_14416);var type_14418 = cljs.core.nth.call(null,vec__14408_14417,0,null);var f_14419 = cljs.core.nth.call(null,vec__14408_14417,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_14418,((function (seq__14404_14413,chunk__14405_14414,count__14406_14415,i__14407_14416,vec__14408_14417,type_14418,f_14419){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_14418,this_fn);
return f_14419.call(null,e);
});})(seq__14404_14413,chunk__14405_14414,count__14406_14415,i__14407_14416,vec__14408_14417,type_14418,f_14419))
);
{
var G__14420 = seq__14404_14413;
var G__14421 = chunk__14405_14414;
var G__14422 = count__14406_14415;
var G__14423 = (i__14407_14416 + 1);
seq__14404_14413 = G__14420;
chunk__14405_14414 = G__14421;
count__14406_14415 = G__14422;
i__14407_14416 = G__14423;
continue;
}
} else
{var temp__4092__auto___14424 = cljs.core.seq.call(null,seq__14404_14413);if(temp__4092__auto___14424)
{var seq__14404_14425__$1 = temp__4092__auto___14424;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14404_14425__$1))
{var c__6930__auto___14426 = cljs.core.chunk_first.call(null,seq__14404_14425__$1);{
var G__14427 = cljs.core.chunk_rest.call(null,seq__14404_14425__$1);
var G__14428 = c__6930__auto___14426;
var G__14429 = cljs.core.count.call(null,c__6930__auto___14426);
var G__14430 = 0;
seq__14404_14413 = G__14427;
chunk__14405_14414 = G__14428;
count__14406_14415 = G__14429;
i__14407_14416 = G__14430;
continue;
}
} else
{var vec__14409_14431 = cljs.core.first.call(null,seq__14404_14425__$1);var type_14432 = cljs.core.nth.call(null,vec__14409_14431,0,null);var f_14433 = cljs.core.nth.call(null,vec__14409_14431,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_14432,((function (seq__14404_14413,chunk__14405_14414,count__14406_14415,i__14407_14416,vec__14409_14431,type_14432,f_14433,seq__14404_14425__$1,temp__4092__auto___14424){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_14432,this_fn);
return f_14433.call(null,e);
});})(seq__14404_14413,chunk__14405_14414,count__14406_14415,i__14407_14416,vec__14409_14431,type_14432,f_14433,seq__14404_14425__$1,temp__4092__auto___14424))
);
{
var G__14434 = cljs.core.next.call(null,seq__14404_14425__$1);
var G__14435 = null;
var G__14436 = 0;
var G__14437 = 0;
seq__14404_14413 = G__14434;
chunk__14405_14414 = G__14435;
count__14406_14415 = G__14436;
i__14407_14416 = G__14437;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__14438){
var elem_sel = cljs.core.first(arglist__14438);
var type_fs = cljs.core.rest(arglist__14438);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
/**
* NOTE: ONLY TO BE USED FOR TESTS. May not work at mocking many
* event types or their bubbling behaviours
* 
* Creates an event of type `event-type`, optionally having
* `update-event!` mutate and return an updated event object,
* and fires it on `node`.
* Only works when `node` is in the DOM
* @param {...*} var_args
*/
dommy.core.fire_BANG_ = (function() { 
var fire_BANG___delegate = function (node,event_type,p__14439){var vec__14441 = p__14439;var update_event_BANG_ = cljs.core.nth.call(null,vec__14441,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__3943__auto__ = update_event_BANG_;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.identity;
}
})();if(cljs.core.truth_(document.createEvent))
{var event = document.createEvent("Event");event.initEvent(cljs.core.name.call(null,event_type),true,true);
return node.dispatchEvent(update_event_BANG___$1.call(null,event));
} else
{return node.fireEvent([cljs.core.str("on"),cljs.core.str(cljs.core.name.call(null,event_type))].join(''),update_event_BANG___$1.call(null,document.createEventObject()));
}
};
var fire_BANG_ = function (node,event_type,var_args){
var p__14439 = null;if (arguments.length > 2) {
  p__14439 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__14439);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__14442){
var node = cljs.core.first(arglist__14442);
arglist__14442 = cljs.core.next(arglist__14442);
var event_type = cljs.core.first(arglist__14442);
var p__14439 = cljs.core.rest(arglist__14442);
return fire_BANG___delegate(node,event_type,p__14439);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
