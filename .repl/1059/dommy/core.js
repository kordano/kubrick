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
var append_BANG___2 = (function (parent,child){var G__27018 = dommy.template.__GT_node_like.call(null,parent);G__27018.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__27018;
});
var append_BANG___3 = (function() { 
var G__27023__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__27019_27024 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__27020_27025 = null;var count__27021_27026 = 0;var i__27022_27027 = 0;while(true){
if((i__27022_27027 < count__27021_27026))
{var c_27028 = cljs.core._nth.call(null,chunk__27020_27025,i__27022_27027);append_BANG_.call(null,parent__$1,c_27028);
{
var G__27029 = seq__27019_27024;
var G__27030 = chunk__27020_27025;
var G__27031 = count__27021_27026;
var G__27032 = (i__27022_27027 + 1);
seq__27019_27024 = G__27029;
chunk__27020_27025 = G__27030;
count__27021_27026 = G__27031;
i__27022_27027 = G__27032;
continue;
}
} else
{var temp__4092__auto___27033 = cljs.core.seq.call(null,seq__27019_27024);if(temp__4092__auto___27033)
{var seq__27019_27034__$1 = temp__4092__auto___27033;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27019_27034__$1))
{var c__19849__auto___27035 = cljs.core.chunk_first.call(null,seq__27019_27034__$1);{
var G__27036 = cljs.core.chunk_rest.call(null,seq__27019_27034__$1);
var G__27037 = c__19849__auto___27035;
var G__27038 = cljs.core.count.call(null,c__19849__auto___27035);
var G__27039 = 0;
seq__27019_27024 = G__27036;
chunk__27020_27025 = G__27037;
count__27021_27026 = G__27038;
i__27022_27027 = G__27039;
continue;
}
} else
{var c_27040 = cljs.core.first.call(null,seq__27019_27034__$1);append_BANG_.call(null,parent__$1,c_27040);
{
var G__27041 = cljs.core.next.call(null,seq__27019_27034__$1);
var G__27042 = null;
var G__27043 = 0;
var G__27044 = 0;
seq__27019_27024 = G__27041;
chunk__27020_27025 = G__27042;
count__27021_27026 = G__27043;
i__27022_27027 = G__27044;
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
var G__27023 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__27023__delegate.call(this,parent,child,more_children);};
G__27023.cljs$lang$maxFixedArity = 2;
G__27023.cljs$lang$applyTo = (function (arglist__27045){
var parent = cljs.core.first(arglist__27045);
arglist__27045 = cljs.core.next(arglist__27045);
var child = cljs.core.first(arglist__27045);
var more_children = cljs.core.rest(arglist__27045);
return G__27023__delegate(parent,child,more_children);
});
G__27023.cljs$core$IFn$_invoke$arity$variadic = G__27023__delegate;
return G__27023;
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
var prepend_BANG___2 = (function (parent,child){var G__27051 = dommy.template.__GT_node_like.call(null,parent);G__27051.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__27051;
});
var prepend_BANG___3 = (function() { 
var G__27056__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__27052_27057 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__27053_27058 = null;var count__27054_27059 = 0;var i__27055_27060 = 0;while(true){
if((i__27055_27060 < count__27054_27059))
{var c_27061 = cljs.core._nth.call(null,chunk__27053_27058,i__27055_27060);prepend_BANG_.call(null,parent__$1,c_27061);
{
var G__27062 = seq__27052_27057;
var G__27063 = chunk__27053_27058;
var G__27064 = count__27054_27059;
var G__27065 = (i__27055_27060 + 1);
seq__27052_27057 = G__27062;
chunk__27053_27058 = G__27063;
count__27054_27059 = G__27064;
i__27055_27060 = G__27065;
continue;
}
} else
{var temp__4092__auto___27066 = cljs.core.seq.call(null,seq__27052_27057);if(temp__4092__auto___27066)
{var seq__27052_27067__$1 = temp__4092__auto___27066;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27052_27067__$1))
{var c__19849__auto___27068 = cljs.core.chunk_first.call(null,seq__27052_27067__$1);{
var G__27069 = cljs.core.chunk_rest.call(null,seq__27052_27067__$1);
var G__27070 = c__19849__auto___27068;
var G__27071 = cljs.core.count.call(null,c__19849__auto___27068);
var G__27072 = 0;
seq__27052_27057 = G__27069;
chunk__27053_27058 = G__27070;
count__27054_27059 = G__27071;
i__27055_27060 = G__27072;
continue;
}
} else
{var c_27073 = cljs.core.first.call(null,seq__27052_27067__$1);prepend_BANG_.call(null,parent__$1,c_27073);
{
var G__27074 = cljs.core.next.call(null,seq__27052_27067__$1);
var G__27075 = null;
var G__27076 = 0;
var G__27077 = 0;
seq__27052_27057 = G__27074;
chunk__27053_27058 = G__27075;
count__27054_27059 = G__27076;
i__27055_27060 = G__27077;
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
var G__27056 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__27056__delegate.call(this,parent,child,more_children);};
G__27056.cljs$lang$maxFixedArity = 2;
G__27056.cljs$lang$applyTo = (function (arglist__27078){
var parent = cljs.core.first(arglist__27078);
arglist__27078 = cljs.core.next(arglist__27078);
var child = cljs.core.first(arglist__27078);
var more_children = cljs.core.rest(arglist__27078);
return G__27056__delegate(parent,child,more_children);
});
G__27056.cljs$core$IFn$_invoke$arity$variadic = G__27056__delegate;
return G__27056;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___27079 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___27079))
{var next_27080 = temp__4090__auto___27079;parent.insertBefore(actual_node,next_27080);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__27082 = dommy.template.__GT_node_like.call(null,parent);G__27082.innerHTML = "";
dommy.core.append_BANG_.call(null,G__27082,node_like);
return G__27082;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__27084 = elem__$1.parentNode;G__27084.removeChild(elem__$1);
return G__27084;
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
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__27085_SHARP_){return p1__27085_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__27086_SHARP_){return !((p1__27086_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__27087){var vec__27088 = p__27087;var special_mouse_event = cljs.core.nth.call(null,vec__27088,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__27088,1,null);return cljs.core.PersistentVector.fromArray([special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3943__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3943__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__27089){
var elem = cljs.core.first(arglist__27089);
arglist__27089 = cljs.core.next(arglist__27089);
var f = cljs.core.first(arglist__27089);
var args = cljs.core.rest(arglist__27089);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__27090_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__27090_SHARP_));
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
var vec__27114_27137 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_27138 = cljs.core.nth.call(null,vec__27114_27137,0,null);var selector_27139 = cljs.core.nth.call(null,vec__27114_27137,1,null);var seq__27115_27140 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__27122_27141 = null;var count__27123_27142 = 0;var i__27124_27143 = 0;while(true){
if((i__27124_27143 < count__27123_27142))
{var vec__27131_27144 = cljs.core._nth.call(null,chunk__27122_27141,i__27124_27143);var orig_type_27145 = cljs.core.nth.call(null,vec__27131_27144,0,null);var f_27146 = cljs.core.nth.call(null,vec__27131_27144,1,null);var seq__27125_27147 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_27145,cljs.core.PersistentArrayMap.fromArray([orig_type_27145,cljs.core.identity], true)));var chunk__27127_27148 = null;var count__27128_27149 = 0;var i__27129_27150 = 0;while(true){
if((i__27129_27150 < count__27128_27149))
{var vec__27132_27151 = cljs.core._nth.call(null,chunk__27127_27148,i__27129_27150);var actual_type_27152 = cljs.core.nth.call(null,vec__27132_27151,0,null);var factory_27153 = cljs.core.nth.call(null,vec__27132_27151,1,null);var canonical_f_27154 = (cljs.core.truth_(selector_27139)?cljs.core.partial.call(null,dommy.core.live_listener,elem_27138,selector_27139):cljs.core.identity).call(null,factory_27153.call(null,f_27146));dommy.core.update_event_listeners_BANG_.call(null,elem_27138,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_27139,actual_type_27152,f_27146], true),canonical_f_27154);
if(cljs.core.truth_(elem_27138.addEventListener))
{elem_27138.addEventListener(cljs.core.name.call(null,actual_type_27152),canonical_f_27154);
} else
{elem_27138.attachEvent(cljs.core.name.call(null,actual_type_27152),canonical_f_27154);
}
{
var G__27155 = seq__27125_27147;
var G__27156 = chunk__27127_27148;
var G__27157 = count__27128_27149;
var G__27158 = (i__27129_27150 + 1);
seq__27125_27147 = G__27155;
chunk__27127_27148 = G__27156;
count__27128_27149 = G__27157;
i__27129_27150 = G__27158;
continue;
}
} else
{var temp__4092__auto___27159 = cljs.core.seq.call(null,seq__27125_27147);if(temp__4092__auto___27159)
{var seq__27125_27160__$1 = temp__4092__auto___27159;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27125_27160__$1))
{var c__19849__auto___27161 = cljs.core.chunk_first.call(null,seq__27125_27160__$1);{
var G__27162 = cljs.core.chunk_rest.call(null,seq__27125_27160__$1);
var G__27163 = c__19849__auto___27161;
var G__27164 = cljs.core.count.call(null,c__19849__auto___27161);
var G__27165 = 0;
seq__27125_27147 = G__27162;
chunk__27127_27148 = G__27163;
count__27128_27149 = G__27164;
i__27129_27150 = G__27165;
continue;
}
} else
{var vec__27133_27166 = cljs.core.first.call(null,seq__27125_27160__$1);var actual_type_27167 = cljs.core.nth.call(null,vec__27133_27166,0,null);var factory_27168 = cljs.core.nth.call(null,vec__27133_27166,1,null);var canonical_f_27169 = (cljs.core.truth_(selector_27139)?cljs.core.partial.call(null,dommy.core.live_listener,elem_27138,selector_27139):cljs.core.identity).call(null,factory_27168.call(null,f_27146));dommy.core.update_event_listeners_BANG_.call(null,elem_27138,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_27139,actual_type_27167,f_27146], true),canonical_f_27169);
if(cljs.core.truth_(elem_27138.addEventListener))
{elem_27138.addEventListener(cljs.core.name.call(null,actual_type_27167),canonical_f_27169);
} else
{elem_27138.attachEvent(cljs.core.name.call(null,actual_type_27167),canonical_f_27169);
}
{
var G__27170 = cljs.core.next.call(null,seq__27125_27160__$1);
var G__27171 = null;
var G__27172 = 0;
var G__27173 = 0;
seq__27125_27147 = G__27170;
chunk__27127_27148 = G__27171;
count__27128_27149 = G__27172;
i__27129_27150 = G__27173;
continue;
}
}
} else
{}
}
break;
}
{
var G__27174 = seq__27115_27140;
var G__27175 = chunk__27122_27141;
var G__27176 = count__27123_27142;
var G__27177 = (i__27124_27143 + 1);
seq__27115_27140 = G__27174;
chunk__27122_27141 = G__27175;
count__27123_27142 = G__27176;
i__27124_27143 = G__27177;
continue;
}
} else
{var temp__4092__auto___27178 = cljs.core.seq.call(null,seq__27115_27140);if(temp__4092__auto___27178)
{var seq__27115_27179__$1 = temp__4092__auto___27178;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27115_27179__$1))
{var c__19849__auto___27180 = cljs.core.chunk_first.call(null,seq__27115_27179__$1);{
var G__27181 = cljs.core.chunk_rest.call(null,seq__27115_27179__$1);
var G__27182 = c__19849__auto___27180;
var G__27183 = cljs.core.count.call(null,c__19849__auto___27180);
var G__27184 = 0;
seq__27115_27140 = G__27181;
chunk__27122_27141 = G__27182;
count__27123_27142 = G__27183;
i__27124_27143 = G__27184;
continue;
}
} else
{var vec__27134_27185 = cljs.core.first.call(null,seq__27115_27179__$1);var orig_type_27186 = cljs.core.nth.call(null,vec__27134_27185,0,null);var f_27187 = cljs.core.nth.call(null,vec__27134_27185,1,null);var seq__27116_27188 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_27186,cljs.core.PersistentArrayMap.fromArray([orig_type_27186,cljs.core.identity], true)));var chunk__27118_27189 = null;var count__27119_27190 = 0;var i__27120_27191 = 0;while(true){
if((i__27120_27191 < count__27119_27190))
{var vec__27135_27192 = cljs.core._nth.call(null,chunk__27118_27189,i__27120_27191);var actual_type_27193 = cljs.core.nth.call(null,vec__27135_27192,0,null);var factory_27194 = cljs.core.nth.call(null,vec__27135_27192,1,null);var canonical_f_27195 = (cljs.core.truth_(selector_27139)?cljs.core.partial.call(null,dommy.core.live_listener,elem_27138,selector_27139):cljs.core.identity).call(null,factory_27194.call(null,f_27187));dommy.core.update_event_listeners_BANG_.call(null,elem_27138,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_27139,actual_type_27193,f_27187], true),canonical_f_27195);
if(cljs.core.truth_(elem_27138.addEventListener))
{elem_27138.addEventListener(cljs.core.name.call(null,actual_type_27193),canonical_f_27195);
} else
{elem_27138.attachEvent(cljs.core.name.call(null,actual_type_27193),canonical_f_27195);
}
{
var G__27196 = seq__27116_27188;
var G__27197 = chunk__27118_27189;
var G__27198 = count__27119_27190;
var G__27199 = (i__27120_27191 + 1);
seq__27116_27188 = G__27196;
chunk__27118_27189 = G__27197;
count__27119_27190 = G__27198;
i__27120_27191 = G__27199;
continue;
}
} else
{var temp__4092__auto___27200__$1 = cljs.core.seq.call(null,seq__27116_27188);if(temp__4092__auto___27200__$1)
{var seq__27116_27201__$1 = temp__4092__auto___27200__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27116_27201__$1))
{var c__19849__auto___27202 = cljs.core.chunk_first.call(null,seq__27116_27201__$1);{
var G__27203 = cljs.core.chunk_rest.call(null,seq__27116_27201__$1);
var G__27204 = c__19849__auto___27202;
var G__27205 = cljs.core.count.call(null,c__19849__auto___27202);
var G__27206 = 0;
seq__27116_27188 = G__27203;
chunk__27118_27189 = G__27204;
count__27119_27190 = G__27205;
i__27120_27191 = G__27206;
continue;
}
} else
{var vec__27136_27207 = cljs.core.first.call(null,seq__27116_27201__$1);var actual_type_27208 = cljs.core.nth.call(null,vec__27136_27207,0,null);var factory_27209 = cljs.core.nth.call(null,vec__27136_27207,1,null);var canonical_f_27210 = (cljs.core.truth_(selector_27139)?cljs.core.partial.call(null,dommy.core.live_listener,elem_27138,selector_27139):cljs.core.identity).call(null,factory_27209.call(null,f_27187));dommy.core.update_event_listeners_BANG_.call(null,elem_27138,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_27139,actual_type_27208,f_27187], true),canonical_f_27210);
if(cljs.core.truth_(elem_27138.addEventListener))
{elem_27138.addEventListener(cljs.core.name.call(null,actual_type_27208),canonical_f_27210);
} else
{elem_27138.attachEvent(cljs.core.name.call(null,actual_type_27208),canonical_f_27210);
}
{
var G__27211 = cljs.core.next.call(null,seq__27116_27201__$1);
var G__27212 = null;
var G__27213 = 0;
var G__27214 = 0;
seq__27116_27188 = G__27211;
chunk__27118_27189 = G__27212;
count__27119_27190 = G__27213;
i__27120_27191 = G__27214;
continue;
}
}
} else
{}
}
break;
}
{
var G__27215 = cljs.core.next.call(null,seq__27115_27179__$1);
var G__27216 = null;
var G__27217 = 0;
var G__27218 = 0;
seq__27115_27140 = G__27215;
chunk__27122_27141 = G__27216;
count__27123_27142 = G__27217;
i__27124_27143 = G__27218;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__27219){
var elem_sel = cljs.core.first(arglist__27219);
var type_fs = cljs.core.rest(arglist__27219);
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
var vec__27243_27266 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_27267 = cljs.core.nth.call(null,vec__27243_27266,0,null);var selector_27268 = cljs.core.nth.call(null,vec__27243_27266,1,null);var seq__27244_27269 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__27251_27270 = null;var count__27252_27271 = 0;var i__27253_27272 = 0;while(true){
if((i__27253_27272 < count__27252_27271))
{var vec__27260_27273 = cljs.core._nth.call(null,chunk__27251_27270,i__27253_27272);var orig_type_27274 = cljs.core.nth.call(null,vec__27260_27273,0,null);var f_27275 = cljs.core.nth.call(null,vec__27260_27273,1,null);var seq__27254_27276 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_27274,cljs.core.PersistentArrayMap.fromArray([orig_type_27274,cljs.core.identity], true)));var chunk__27256_27277 = null;var count__27257_27278 = 0;var i__27258_27279 = 0;while(true){
if((i__27258_27279 < count__27257_27278))
{var vec__27261_27280 = cljs.core._nth.call(null,chunk__27256_27277,i__27258_27279);var actual_type_27281 = cljs.core.nth.call(null,vec__27261_27280,0,null);var __27282 = cljs.core.nth.call(null,vec__27261_27280,1,null);var keys_27283 = cljs.core.PersistentVector.fromArray([selector_27268,actual_type_27281,f_27275], true);var canonical_f_27284 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_27267),keys_27283);dommy.core.update_event_listeners_BANG_.call(null,elem_27267,dommy.utils.dissoc_in,keys_27283);
if(cljs.core.truth_(elem_27267.removeEventListener))
{elem_27267.removeEventListener(cljs.core.name.call(null,actual_type_27281),canonical_f_27284);
} else
{elem_27267.detachEvent(cljs.core.name.call(null,actual_type_27281),canonical_f_27284);
}
{
var G__27285 = seq__27254_27276;
var G__27286 = chunk__27256_27277;
var G__27287 = count__27257_27278;
var G__27288 = (i__27258_27279 + 1);
seq__27254_27276 = G__27285;
chunk__27256_27277 = G__27286;
count__27257_27278 = G__27287;
i__27258_27279 = G__27288;
continue;
}
} else
{var temp__4092__auto___27289 = cljs.core.seq.call(null,seq__27254_27276);if(temp__4092__auto___27289)
{var seq__27254_27290__$1 = temp__4092__auto___27289;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27254_27290__$1))
{var c__19849__auto___27291 = cljs.core.chunk_first.call(null,seq__27254_27290__$1);{
var G__27292 = cljs.core.chunk_rest.call(null,seq__27254_27290__$1);
var G__27293 = c__19849__auto___27291;
var G__27294 = cljs.core.count.call(null,c__19849__auto___27291);
var G__27295 = 0;
seq__27254_27276 = G__27292;
chunk__27256_27277 = G__27293;
count__27257_27278 = G__27294;
i__27258_27279 = G__27295;
continue;
}
} else
{var vec__27262_27296 = cljs.core.first.call(null,seq__27254_27290__$1);var actual_type_27297 = cljs.core.nth.call(null,vec__27262_27296,0,null);var __27298 = cljs.core.nth.call(null,vec__27262_27296,1,null);var keys_27299 = cljs.core.PersistentVector.fromArray([selector_27268,actual_type_27297,f_27275], true);var canonical_f_27300 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_27267),keys_27299);dommy.core.update_event_listeners_BANG_.call(null,elem_27267,dommy.utils.dissoc_in,keys_27299);
if(cljs.core.truth_(elem_27267.removeEventListener))
{elem_27267.removeEventListener(cljs.core.name.call(null,actual_type_27297),canonical_f_27300);
} else
{elem_27267.detachEvent(cljs.core.name.call(null,actual_type_27297),canonical_f_27300);
}
{
var G__27301 = cljs.core.next.call(null,seq__27254_27290__$1);
var G__27302 = null;
var G__27303 = 0;
var G__27304 = 0;
seq__27254_27276 = G__27301;
chunk__27256_27277 = G__27302;
count__27257_27278 = G__27303;
i__27258_27279 = G__27304;
continue;
}
}
} else
{}
}
break;
}
{
var G__27305 = seq__27244_27269;
var G__27306 = chunk__27251_27270;
var G__27307 = count__27252_27271;
var G__27308 = (i__27253_27272 + 1);
seq__27244_27269 = G__27305;
chunk__27251_27270 = G__27306;
count__27252_27271 = G__27307;
i__27253_27272 = G__27308;
continue;
}
} else
{var temp__4092__auto___27309 = cljs.core.seq.call(null,seq__27244_27269);if(temp__4092__auto___27309)
{var seq__27244_27310__$1 = temp__4092__auto___27309;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27244_27310__$1))
{var c__19849__auto___27311 = cljs.core.chunk_first.call(null,seq__27244_27310__$1);{
var G__27312 = cljs.core.chunk_rest.call(null,seq__27244_27310__$1);
var G__27313 = c__19849__auto___27311;
var G__27314 = cljs.core.count.call(null,c__19849__auto___27311);
var G__27315 = 0;
seq__27244_27269 = G__27312;
chunk__27251_27270 = G__27313;
count__27252_27271 = G__27314;
i__27253_27272 = G__27315;
continue;
}
} else
{var vec__27263_27316 = cljs.core.first.call(null,seq__27244_27310__$1);var orig_type_27317 = cljs.core.nth.call(null,vec__27263_27316,0,null);var f_27318 = cljs.core.nth.call(null,vec__27263_27316,1,null);var seq__27245_27319 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_27317,cljs.core.PersistentArrayMap.fromArray([orig_type_27317,cljs.core.identity], true)));var chunk__27247_27320 = null;var count__27248_27321 = 0;var i__27249_27322 = 0;while(true){
if((i__27249_27322 < count__27248_27321))
{var vec__27264_27323 = cljs.core._nth.call(null,chunk__27247_27320,i__27249_27322);var actual_type_27324 = cljs.core.nth.call(null,vec__27264_27323,0,null);var __27325 = cljs.core.nth.call(null,vec__27264_27323,1,null);var keys_27326 = cljs.core.PersistentVector.fromArray([selector_27268,actual_type_27324,f_27318], true);var canonical_f_27327 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_27267),keys_27326);dommy.core.update_event_listeners_BANG_.call(null,elem_27267,dommy.utils.dissoc_in,keys_27326);
if(cljs.core.truth_(elem_27267.removeEventListener))
{elem_27267.removeEventListener(cljs.core.name.call(null,actual_type_27324),canonical_f_27327);
} else
{elem_27267.detachEvent(cljs.core.name.call(null,actual_type_27324),canonical_f_27327);
}
{
var G__27328 = seq__27245_27319;
var G__27329 = chunk__27247_27320;
var G__27330 = count__27248_27321;
var G__27331 = (i__27249_27322 + 1);
seq__27245_27319 = G__27328;
chunk__27247_27320 = G__27329;
count__27248_27321 = G__27330;
i__27249_27322 = G__27331;
continue;
}
} else
{var temp__4092__auto___27332__$1 = cljs.core.seq.call(null,seq__27245_27319);if(temp__4092__auto___27332__$1)
{var seq__27245_27333__$1 = temp__4092__auto___27332__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27245_27333__$1))
{var c__19849__auto___27334 = cljs.core.chunk_first.call(null,seq__27245_27333__$1);{
var G__27335 = cljs.core.chunk_rest.call(null,seq__27245_27333__$1);
var G__27336 = c__19849__auto___27334;
var G__27337 = cljs.core.count.call(null,c__19849__auto___27334);
var G__27338 = 0;
seq__27245_27319 = G__27335;
chunk__27247_27320 = G__27336;
count__27248_27321 = G__27337;
i__27249_27322 = G__27338;
continue;
}
} else
{var vec__27265_27339 = cljs.core.first.call(null,seq__27245_27333__$1);var actual_type_27340 = cljs.core.nth.call(null,vec__27265_27339,0,null);var __27341 = cljs.core.nth.call(null,vec__27265_27339,1,null);var keys_27342 = cljs.core.PersistentVector.fromArray([selector_27268,actual_type_27340,f_27318], true);var canonical_f_27343 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_27267),keys_27342);dommy.core.update_event_listeners_BANG_.call(null,elem_27267,dommy.utils.dissoc_in,keys_27342);
if(cljs.core.truth_(elem_27267.removeEventListener))
{elem_27267.removeEventListener(cljs.core.name.call(null,actual_type_27340),canonical_f_27343);
} else
{elem_27267.detachEvent(cljs.core.name.call(null,actual_type_27340),canonical_f_27343);
}
{
var G__27344 = cljs.core.next.call(null,seq__27245_27333__$1);
var G__27345 = null;
var G__27346 = 0;
var G__27347 = 0;
seq__27245_27319 = G__27344;
chunk__27247_27320 = G__27345;
count__27248_27321 = G__27346;
i__27249_27322 = G__27347;
continue;
}
}
} else
{}
}
break;
}
{
var G__27348 = cljs.core.next.call(null,seq__27244_27310__$1);
var G__27349 = null;
var G__27350 = 0;
var G__27351 = 0;
seq__27244_27269 = G__27348;
chunk__27251_27270 = G__27349;
count__27252_27271 = G__27350;
i__27253_27272 = G__27351;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__27352){
var elem_sel = cljs.core.first(arglist__27352);
var type_fs = cljs.core.rest(arglist__27352);
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
var vec__27360_27367 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_27368 = cljs.core.nth.call(null,vec__27360_27367,0,null);var selector_27369 = cljs.core.nth.call(null,vec__27360_27367,1,null);var seq__27361_27370 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__27362_27371 = null;var count__27363_27372 = 0;var i__27364_27373 = 0;while(true){
if((i__27364_27373 < count__27363_27372))
{var vec__27365_27374 = cljs.core._nth.call(null,chunk__27362_27371,i__27364_27373);var type_27375 = cljs.core.nth.call(null,vec__27365_27374,0,null);var f_27376 = cljs.core.nth.call(null,vec__27365_27374,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_27375,((function (seq__27361_27370,chunk__27362_27371,count__27363_27372,i__27364_27373,vec__27365_27374,type_27375,f_27376){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_27375,this_fn);
return f_27376.call(null,e);
});})(seq__27361_27370,chunk__27362_27371,count__27363_27372,i__27364_27373,vec__27365_27374,type_27375,f_27376))
);
{
var G__27377 = seq__27361_27370;
var G__27378 = chunk__27362_27371;
var G__27379 = count__27363_27372;
var G__27380 = (i__27364_27373 + 1);
seq__27361_27370 = G__27377;
chunk__27362_27371 = G__27378;
count__27363_27372 = G__27379;
i__27364_27373 = G__27380;
continue;
}
} else
{var temp__4092__auto___27381 = cljs.core.seq.call(null,seq__27361_27370);if(temp__4092__auto___27381)
{var seq__27361_27382__$1 = temp__4092__auto___27381;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27361_27382__$1))
{var c__19849__auto___27383 = cljs.core.chunk_first.call(null,seq__27361_27382__$1);{
var G__27384 = cljs.core.chunk_rest.call(null,seq__27361_27382__$1);
var G__27385 = c__19849__auto___27383;
var G__27386 = cljs.core.count.call(null,c__19849__auto___27383);
var G__27387 = 0;
seq__27361_27370 = G__27384;
chunk__27362_27371 = G__27385;
count__27363_27372 = G__27386;
i__27364_27373 = G__27387;
continue;
}
} else
{var vec__27366_27388 = cljs.core.first.call(null,seq__27361_27382__$1);var type_27389 = cljs.core.nth.call(null,vec__27366_27388,0,null);var f_27390 = cljs.core.nth.call(null,vec__27366_27388,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_27389,((function (seq__27361_27370,chunk__27362_27371,count__27363_27372,i__27364_27373,vec__27366_27388,type_27389,f_27390,seq__27361_27382__$1,temp__4092__auto___27381){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_27389,this_fn);
return f_27390.call(null,e);
});})(seq__27361_27370,chunk__27362_27371,count__27363_27372,i__27364_27373,vec__27366_27388,type_27389,f_27390,seq__27361_27382__$1,temp__4092__auto___27381))
);
{
var G__27391 = cljs.core.next.call(null,seq__27361_27382__$1);
var G__27392 = null;
var G__27393 = 0;
var G__27394 = 0;
seq__27361_27370 = G__27391;
chunk__27362_27371 = G__27392;
count__27363_27372 = G__27393;
i__27364_27373 = G__27394;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__27395){
var elem_sel = cljs.core.first(arglist__27395);
var type_fs = cljs.core.rest(arglist__27395);
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
var fire_BANG___delegate = function (node,event_type,p__27396){var vec__27398 = p__27396;var update_event_BANG_ = cljs.core.nth.call(null,vec__27398,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__27396 = null;if (arguments.length > 2) {
  p__27396 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__27396);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__27399){
var node = cljs.core.first(arglist__27399);
arglist__27399 = cljs.core.next(arglist__27399);
var event_type = cljs.core.first(arglist__27399);
var p__27396 = cljs.core.rest(arglist__27399);
return fire_BANG___delegate(node,event_type,p__27396);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
