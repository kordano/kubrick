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
var append_BANG___2 = (function (parent,child){var G__14354 = dommy.template.__GT_node_like.call(null,parent);G__14354.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__14354;
});
var append_BANG___3 = (function() { 
var G__14359__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__14355_14360 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__14356_14361 = null;var count__14357_14362 = 0;var i__14358_14363 = 0;while(true){
if((i__14358_14363 < count__14357_14362))
{var c_14364 = cljs.core._nth.call(null,chunk__14356_14361,i__14358_14363);append_BANG_.call(null,parent__$1,c_14364);
{
var G__14365 = seq__14355_14360;
var G__14366 = chunk__14356_14361;
var G__14367 = count__14357_14362;
var G__14368 = (i__14358_14363 + 1);
seq__14355_14360 = G__14365;
chunk__14356_14361 = G__14366;
count__14357_14362 = G__14367;
i__14358_14363 = G__14368;
continue;
}
} else
{var temp__4092__auto___14369 = cljs.core.seq.call(null,seq__14355_14360);if(temp__4092__auto___14369)
{var seq__14355_14370__$1 = temp__4092__auto___14369;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14355_14370__$1))
{var c__7211__auto___14371 = cljs.core.chunk_first.call(null,seq__14355_14370__$1);{
var G__14372 = cljs.core.chunk_rest.call(null,seq__14355_14370__$1);
var G__14373 = c__7211__auto___14371;
var G__14374 = cljs.core.count.call(null,c__7211__auto___14371);
var G__14375 = 0;
seq__14355_14360 = G__14372;
chunk__14356_14361 = G__14373;
count__14357_14362 = G__14374;
i__14358_14363 = G__14375;
continue;
}
} else
{var c_14376 = cljs.core.first.call(null,seq__14355_14370__$1);append_BANG_.call(null,parent__$1,c_14376);
{
var G__14377 = cljs.core.next.call(null,seq__14355_14370__$1);
var G__14378 = null;
var G__14379 = 0;
var G__14380 = 0;
seq__14355_14360 = G__14377;
chunk__14356_14361 = G__14378;
count__14357_14362 = G__14379;
i__14358_14363 = G__14380;
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
var G__14359 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14359__delegate.call(this,parent,child,more_children);};
G__14359.cljs$lang$maxFixedArity = 2;
G__14359.cljs$lang$applyTo = (function (arglist__14381){
var parent = cljs.core.first(arglist__14381);
arglist__14381 = cljs.core.next(arglist__14381);
var child = cljs.core.first(arglist__14381);
var more_children = cljs.core.rest(arglist__14381);
return G__14359__delegate(parent,child,more_children);
});
G__14359.cljs$core$IFn$_invoke$arity$variadic = G__14359__delegate;
return G__14359;
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
var prepend_BANG___2 = (function (parent,child){var G__14387 = dommy.template.__GT_node_like.call(null,parent);G__14387.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__14387;
});
var prepend_BANG___3 = (function() { 
var G__14392__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__14388_14393 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__14389_14394 = null;var count__14390_14395 = 0;var i__14391_14396 = 0;while(true){
if((i__14391_14396 < count__14390_14395))
{var c_14397 = cljs.core._nth.call(null,chunk__14389_14394,i__14391_14396);prepend_BANG_.call(null,parent__$1,c_14397);
{
var G__14398 = seq__14388_14393;
var G__14399 = chunk__14389_14394;
var G__14400 = count__14390_14395;
var G__14401 = (i__14391_14396 + 1);
seq__14388_14393 = G__14398;
chunk__14389_14394 = G__14399;
count__14390_14395 = G__14400;
i__14391_14396 = G__14401;
continue;
}
} else
{var temp__4092__auto___14402 = cljs.core.seq.call(null,seq__14388_14393);if(temp__4092__auto___14402)
{var seq__14388_14403__$1 = temp__4092__auto___14402;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14388_14403__$1))
{var c__7211__auto___14404 = cljs.core.chunk_first.call(null,seq__14388_14403__$1);{
var G__14405 = cljs.core.chunk_rest.call(null,seq__14388_14403__$1);
var G__14406 = c__7211__auto___14404;
var G__14407 = cljs.core.count.call(null,c__7211__auto___14404);
var G__14408 = 0;
seq__14388_14393 = G__14405;
chunk__14389_14394 = G__14406;
count__14390_14395 = G__14407;
i__14391_14396 = G__14408;
continue;
}
} else
{var c_14409 = cljs.core.first.call(null,seq__14388_14403__$1);prepend_BANG_.call(null,parent__$1,c_14409);
{
var G__14410 = cljs.core.next.call(null,seq__14388_14403__$1);
var G__14411 = null;
var G__14412 = 0;
var G__14413 = 0;
seq__14388_14393 = G__14410;
chunk__14389_14394 = G__14411;
count__14390_14395 = G__14412;
i__14391_14396 = G__14413;
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
var G__14392 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14392__delegate.call(this,parent,child,more_children);};
G__14392.cljs$lang$maxFixedArity = 2;
G__14392.cljs$lang$applyTo = (function (arglist__14414){
var parent = cljs.core.first(arglist__14414);
arglist__14414 = cljs.core.next(arglist__14414);
var child = cljs.core.first(arglist__14414);
var more_children = cljs.core.rest(arglist__14414);
return G__14392__delegate(parent,child,more_children);
});
G__14392.cljs$core$IFn$_invoke$arity$variadic = G__14392__delegate;
return G__14392;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___14415 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___14415))
{var next_14416 = temp__4090__auto___14415;parent.insertBefore(actual_node,next_14416);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__14418 = dommy.template.__GT_node_like.call(null,parent);G__14418.innerHTML = "";
dommy.core.append_BANG_.call(null,G__14418,node_like);
return G__14418;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__14420 = elem__$1.parentNode;G__14420.removeChild(elem__$1);
return G__14420;
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
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__14421_SHARP_){return p1__14421_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__14422_SHARP_){return !((p1__14422_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__14423){var vec__14424 = p__14423;var special_mouse_event = cljs.core.nth.call(null,vec__14424,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__14424,1,null);return cljs.core.PersistentVector.fromArray([special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3943__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3943__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__14425){
var elem = cljs.core.first(arglist__14425);
arglist__14425 = cljs.core.next(arglist__14425);
var f = cljs.core.first(arglist__14425);
var args = cljs.core.rest(arglist__14425);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__14426_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__14426_SHARP_));
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
var vec__14450_14473 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_14474 = cljs.core.nth.call(null,vec__14450_14473,0,null);var selector_14475 = cljs.core.nth.call(null,vec__14450_14473,1,null);var seq__14451_14476 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__14458_14477 = null;var count__14459_14478 = 0;var i__14460_14479 = 0;while(true){
if((i__14460_14479 < count__14459_14478))
{var vec__14467_14480 = cljs.core._nth.call(null,chunk__14458_14477,i__14460_14479);var orig_type_14481 = cljs.core.nth.call(null,vec__14467_14480,0,null);var f_14482 = cljs.core.nth.call(null,vec__14467_14480,1,null);var seq__14461_14483 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14481,cljs.core.PersistentArrayMap.fromArray([orig_type_14481,cljs.core.identity], true)));var chunk__14463_14484 = null;var count__14464_14485 = 0;var i__14465_14486 = 0;while(true){
if((i__14465_14486 < count__14464_14485))
{var vec__14468_14487 = cljs.core._nth.call(null,chunk__14463_14484,i__14465_14486);var actual_type_14488 = cljs.core.nth.call(null,vec__14468_14487,0,null);var factory_14489 = cljs.core.nth.call(null,vec__14468_14487,1,null);var canonical_f_14490 = (cljs.core.truth_(selector_14475)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14474,selector_14475):cljs.core.identity).call(null,factory_14489.call(null,f_14482));dommy.core.update_event_listeners_BANG_.call(null,elem_14474,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_14475,actual_type_14488,f_14482], true),canonical_f_14490);
if(cljs.core.truth_(elem_14474.addEventListener))
{elem_14474.addEventListener(cljs.core.name.call(null,actual_type_14488),canonical_f_14490);
} else
{elem_14474.attachEvent(cljs.core.name.call(null,actual_type_14488),canonical_f_14490);
}
{
var G__14491 = seq__14461_14483;
var G__14492 = chunk__14463_14484;
var G__14493 = count__14464_14485;
var G__14494 = (i__14465_14486 + 1);
seq__14461_14483 = G__14491;
chunk__14463_14484 = G__14492;
count__14464_14485 = G__14493;
i__14465_14486 = G__14494;
continue;
}
} else
{var temp__4092__auto___14495 = cljs.core.seq.call(null,seq__14461_14483);if(temp__4092__auto___14495)
{var seq__14461_14496__$1 = temp__4092__auto___14495;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14461_14496__$1))
{var c__7211__auto___14497 = cljs.core.chunk_first.call(null,seq__14461_14496__$1);{
var G__14498 = cljs.core.chunk_rest.call(null,seq__14461_14496__$1);
var G__14499 = c__7211__auto___14497;
var G__14500 = cljs.core.count.call(null,c__7211__auto___14497);
var G__14501 = 0;
seq__14461_14483 = G__14498;
chunk__14463_14484 = G__14499;
count__14464_14485 = G__14500;
i__14465_14486 = G__14501;
continue;
}
} else
{var vec__14469_14502 = cljs.core.first.call(null,seq__14461_14496__$1);var actual_type_14503 = cljs.core.nth.call(null,vec__14469_14502,0,null);var factory_14504 = cljs.core.nth.call(null,vec__14469_14502,1,null);var canonical_f_14505 = (cljs.core.truth_(selector_14475)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14474,selector_14475):cljs.core.identity).call(null,factory_14504.call(null,f_14482));dommy.core.update_event_listeners_BANG_.call(null,elem_14474,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_14475,actual_type_14503,f_14482], true),canonical_f_14505);
if(cljs.core.truth_(elem_14474.addEventListener))
{elem_14474.addEventListener(cljs.core.name.call(null,actual_type_14503),canonical_f_14505);
} else
{elem_14474.attachEvent(cljs.core.name.call(null,actual_type_14503),canonical_f_14505);
}
{
var G__14506 = cljs.core.next.call(null,seq__14461_14496__$1);
var G__14507 = null;
var G__14508 = 0;
var G__14509 = 0;
seq__14461_14483 = G__14506;
chunk__14463_14484 = G__14507;
count__14464_14485 = G__14508;
i__14465_14486 = G__14509;
continue;
}
}
} else
{}
}
break;
}
{
var G__14510 = seq__14451_14476;
var G__14511 = chunk__14458_14477;
var G__14512 = count__14459_14478;
var G__14513 = (i__14460_14479 + 1);
seq__14451_14476 = G__14510;
chunk__14458_14477 = G__14511;
count__14459_14478 = G__14512;
i__14460_14479 = G__14513;
continue;
}
} else
{var temp__4092__auto___14514 = cljs.core.seq.call(null,seq__14451_14476);if(temp__4092__auto___14514)
{var seq__14451_14515__$1 = temp__4092__auto___14514;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14451_14515__$1))
{var c__7211__auto___14516 = cljs.core.chunk_first.call(null,seq__14451_14515__$1);{
var G__14517 = cljs.core.chunk_rest.call(null,seq__14451_14515__$1);
var G__14518 = c__7211__auto___14516;
var G__14519 = cljs.core.count.call(null,c__7211__auto___14516);
var G__14520 = 0;
seq__14451_14476 = G__14517;
chunk__14458_14477 = G__14518;
count__14459_14478 = G__14519;
i__14460_14479 = G__14520;
continue;
}
} else
{var vec__14470_14521 = cljs.core.first.call(null,seq__14451_14515__$1);var orig_type_14522 = cljs.core.nth.call(null,vec__14470_14521,0,null);var f_14523 = cljs.core.nth.call(null,vec__14470_14521,1,null);var seq__14452_14524 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14522,cljs.core.PersistentArrayMap.fromArray([orig_type_14522,cljs.core.identity], true)));var chunk__14454_14525 = null;var count__14455_14526 = 0;var i__14456_14527 = 0;while(true){
if((i__14456_14527 < count__14455_14526))
{var vec__14471_14528 = cljs.core._nth.call(null,chunk__14454_14525,i__14456_14527);var actual_type_14529 = cljs.core.nth.call(null,vec__14471_14528,0,null);var factory_14530 = cljs.core.nth.call(null,vec__14471_14528,1,null);var canonical_f_14531 = (cljs.core.truth_(selector_14475)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14474,selector_14475):cljs.core.identity).call(null,factory_14530.call(null,f_14523));dommy.core.update_event_listeners_BANG_.call(null,elem_14474,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_14475,actual_type_14529,f_14523], true),canonical_f_14531);
if(cljs.core.truth_(elem_14474.addEventListener))
{elem_14474.addEventListener(cljs.core.name.call(null,actual_type_14529),canonical_f_14531);
} else
{elem_14474.attachEvent(cljs.core.name.call(null,actual_type_14529),canonical_f_14531);
}
{
var G__14532 = seq__14452_14524;
var G__14533 = chunk__14454_14525;
var G__14534 = count__14455_14526;
var G__14535 = (i__14456_14527 + 1);
seq__14452_14524 = G__14532;
chunk__14454_14525 = G__14533;
count__14455_14526 = G__14534;
i__14456_14527 = G__14535;
continue;
}
} else
{var temp__4092__auto___14536__$1 = cljs.core.seq.call(null,seq__14452_14524);if(temp__4092__auto___14536__$1)
{var seq__14452_14537__$1 = temp__4092__auto___14536__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14452_14537__$1))
{var c__7211__auto___14538 = cljs.core.chunk_first.call(null,seq__14452_14537__$1);{
var G__14539 = cljs.core.chunk_rest.call(null,seq__14452_14537__$1);
var G__14540 = c__7211__auto___14538;
var G__14541 = cljs.core.count.call(null,c__7211__auto___14538);
var G__14542 = 0;
seq__14452_14524 = G__14539;
chunk__14454_14525 = G__14540;
count__14455_14526 = G__14541;
i__14456_14527 = G__14542;
continue;
}
} else
{var vec__14472_14543 = cljs.core.first.call(null,seq__14452_14537__$1);var actual_type_14544 = cljs.core.nth.call(null,vec__14472_14543,0,null);var factory_14545 = cljs.core.nth.call(null,vec__14472_14543,1,null);var canonical_f_14546 = (cljs.core.truth_(selector_14475)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14474,selector_14475):cljs.core.identity).call(null,factory_14545.call(null,f_14523));dommy.core.update_event_listeners_BANG_.call(null,elem_14474,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_14475,actual_type_14544,f_14523], true),canonical_f_14546);
if(cljs.core.truth_(elem_14474.addEventListener))
{elem_14474.addEventListener(cljs.core.name.call(null,actual_type_14544),canonical_f_14546);
} else
{elem_14474.attachEvent(cljs.core.name.call(null,actual_type_14544),canonical_f_14546);
}
{
var G__14547 = cljs.core.next.call(null,seq__14452_14537__$1);
var G__14548 = null;
var G__14549 = 0;
var G__14550 = 0;
seq__14452_14524 = G__14547;
chunk__14454_14525 = G__14548;
count__14455_14526 = G__14549;
i__14456_14527 = G__14550;
continue;
}
}
} else
{}
}
break;
}
{
var G__14551 = cljs.core.next.call(null,seq__14451_14515__$1);
var G__14552 = null;
var G__14553 = 0;
var G__14554 = 0;
seq__14451_14476 = G__14551;
chunk__14458_14477 = G__14552;
count__14459_14478 = G__14553;
i__14460_14479 = G__14554;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__14555){
var elem_sel = cljs.core.first(arglist__14555);
var type_fs = cljs.core.rest(arglist__14555);
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
var vec__14579_14602 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_14603 = cljs.core.nth.call(null,vec__14579_14602,0,null);var selector_14604 = cljs.core.nth.call(null,vec__14579_14602,1,null);var seq__14580_14605 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__14587_14606 = null;var count__14588_14607 = 0;var i__14589_14608 = 0;while(true){
if((i__14589_14608 < count__14588_14607))
{var vec__14596_14609 = cljs.core._nth.call(null,chunk__14587_14606,i__14589_14608);var orig_type_14610 = cljs.core.nth.call(null,vec__14596_14609,0,null);var f_14611 = cljs.core.nth.call(null,vec__14596_14609,1,null);var seq__14590_14612 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14610,cljs.core.PersistentArrayMap.fromArray([orig_type_14610,cljs.core.identity], true)));var chunk__14592_14613 = null;var count__14593_14614 = 0;var i__14594_14615 = 0;while(true){
if((i__14594_14615 < count__14593_14614))
{var vec__14597_14616 = cljs.core._nth.call(null,chunk__14592_14613,i__14594_14615);var actual_type_14617 = cljs.core.nth.call(null,vec__14597_14616,0,null);var __14618 = cljs.core.nth.call(null,vec__14597_14616,1,null);var keys_14619 = cljs.core.PersistentVector.fromArray([selector_14604,actual_type_14617,f_14611], true);var canonical_f_14620 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14603),keys_14619);dommy.core.update_event_listeners_BANG_.call(null,elem_14603,dommy.utils.dissoc_in,keys_14619);
if(cljs.core.truth_(elem_14603.removeEventListener))
{elem_14603.removeEventListener(cljs.core.name.call(null,actual_type_14617),canonical_f_14620);
} else
{elem_14603.detachEvent(cljs.core.name.call(null,actual_type_14617),canonical_f_14620);
}
{
var G__14621 = seq__14590_14612;
var G__14622 = chunk__14592_14613;
var G__14623 = count__14593_14614;
var G__14624 = (i__14594_14615 + 1);
seq__14590_14612 = G__14621;
chunk__14592_14613 = G__14622;
count__14593_14614 = G__14623;
i__14594_14615 = G__14624;
continue;
}
} else
{var temp__4092__auto___14625 = cljs.core.seq.call(null,seq__14590_14612);if(temp__4092__auto___14625)
{var seq__14590_14626__$1 = temp__4092__auto___14625;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14590_14626__$1))
{var c__7211__auto___14627 = cljs.core.chunk_first.call(null,seq__14590_14626__$1);{
var G__14628 = cljs.core.chunk_rest.call(null,seq__14590_14626__$1);
var G__14629 = c__7211__auto___14627;
var G__14630 = cljs.core.count.call(null,c__7211__auto___14627);
var G__14631 = 0;
seq__14590_14612 = G__14628;
chunk__14592_14613 = G__14629;
count__14593_14614 = G__14630;
i__14594_14615 = G__14631;
continue;
}
} else
{var vec__14598_14632 = cljs.core.first.call(null,seq__14590_14626__$1);var actual_type_14633 = cljs.core.nth.call(null,vec__14598_14632,0,null);var __14634 = cljs.core.nth.call(null,vec__14598_14632,1,null);var keys_14635 = cljs.core.PersistentVector.fromArray([selector_14604,actual_type_14633,f_14611], true);var canonical_f_14636 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14603),keys_14635);dommy.core.update_event_listeners_BANG_.call(null,elem_14603,dommy.utils.dissoc_in,keys_14635);
if(cljs.core.truth_(elem_14603.removeEventListener))
{elem_14603.removeEventListener(cljs.core.name.call(null,actual_type_14633),canonical_f_14636);
} else
{elem_14603.detachEvent(cljs.core.name.call(null,actual_type_14633),canonical_f_14636);
}
{
var G__14637 = cljs.core.next.call(null,seq__14590_14626__$1);
var G__14638 = null;
var G__14639 = 0;
var G__14640 = 0;
seq__14590_14612 = G__14637;
chunk__14592_14613 = G__14638;
count__14593_14614 = G__14639;
i__14594_14615 = G__14640;
continue;
}
}
} else
{}
}
break;
}
{
var G__14641 = seq__14580_14605;
var G__14642 = chunk__14587_14606;
var G__14643 = count__14588_14607;
var G__14644 = (i__14589_14608 + 1);
seq__14580_14605 = G__14641;
chunk__14587_14606 = G__14642;
count__14588_14607 = G__14643;
i__14589_14608 = G__14644;
continue;
}
} else
{var temp__4092__auto___14645 = cljs.core.seq.call(null,seq__14580_14605);if(temp__4092__auto___14645)
{var seq__14580_14646__$1 = temp__4092__auto___14645;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14580_14646__$1))
{var c__7211__auto___14647 = cljs.core.chunk_first.call(null,seq__14580_14646__$1);{
var G__14648 = cljs.core.chunk_rest.call(null,seq__14580_14646__$1);
var G__14649 = c__7211__auto___14647;
var G__14650 = cljs.core.count.call(null,c__7211__auto___14647);
var G__14651 = 0;
seq__14580_14605 = G__14648;
chunk__14587_14606 = G__14649;
count__14588_14607 = G__14650;
i__14589_14608 = G__14651;
continue;
}
} else
{var vec__14599_14652 = cljs.core.first.call(null,seq__14580_14646__$1);var orig_type_14653 = cljs.core.nth.call(null,vec__14599_14652,0,null);var f_14654 = cljs.core.nth.call(null,vec__14599_14652,1,null);var seq__14581_14655 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14653,cljs.core.PersistentArrayMap.fromArray([orig_type_14653,cljs.core.identity], true)));var chunk__14583_14656 = null;var count__14584_14657 = 0;var i__14585_14658 = 0;while(true){
if((i__14585_14658 < count__14584_14657))
{var vec__14600_14659 = cljs.core._nth.call(null,chunk__14583_14656,i__14585_14658);var actual_type_14660 = cljs.core.nth.call(null,vec__14600_14659,0,null);var __14661 = cljs.core.nth.call(null,vec__14600_14659,1,null);var keys_14662 = cljs.core.PersistentVector.fromArray([selector_14604,actual_type_14660,f_14654], true);var canonical_f_14663 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14603),keys_14662);dommy.core.update_event_listeners_BANG_.call(null,elem_14603,dommy.utils.dissoc_in,keys_14662);
if(cljs.core.truth_(elem_14603.removeEventListener))
{elem_14603.removeEventListener(cljs.core.name.call(null,actual_type_14660),canonical_f_14663);
} else
{elem_14603.detachEvent(cljs.core.name.call(null,actual_type_14660),canonical_f_14663);
}
{
var G__14664 = seq__14581_14655;
var G__14665 = chunk__14583_14656;
var G__14666 = count__14584_14657;
var G__14667 = (i__14585_14658 + 1);
seq__14581_14655 = G__14664;
chunk__14583_14656 = G__14665;
count__14584_14657 = G__14666;
i__14585_14658 = G__14667;
continue;
}
} else
{var temp__4092__auto___14668__$1 = cljs.core.seq.call(null,seq__14581_14655);if(temp__4092__auto___14668__$1)
{var seq__14581_14669__$1 = temp__4092__auto___14668__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14581_14669__$1))
{var c__7211__auto___14670 = cljs.core.chunk_first.call(null,seq__14581_14669__$1);{
var G__14671 = cljs.core.chunk_rest.call(null,seq__14581_14669__$1);
var G__14672 = c__7211__auto___14670;
var G__14673 = cljs.core.count.call(null,c__7211__auto___14670);
var G__14674 = 0;
seq__14581_14655 = G__14671;
chunk__14583_14656 = G__14672;
count__14584_14657 = G__14673;
i__14585_14658 = G__14674;
continue;
}
} else
{var vec__14601_14675 = cljs.core.first.call(null,seq__14581_14669__$1);var actual_type_14676 = cljs.core.nth.call(null,vec__14601_14675,0,null);var __14677 = cljs.core.nth.call(null,vec__14601_14675,1,null);var keys_14678 = cljs.core.PersistentVector.fromArray([selector_14604,actual_type_14676,f_14654], true);var canonical_f_14679 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14603),keys_14678);dommy.core.update_event_listeners_BANG_.call(null,elem_14603,dommy.utils.dissoc_in,keys_14678);
if(cljs.core.truth_(elem_14603.removeEventListener))
{elem_14603.removeEventListener(cljs.core.name.call(null,actual_type_14676),canonical_f_14679);
} else
{elem_14603.detachEvent(cljs.core.name.call(null,actual_type_14676),canonical_f_14679);
}
{
var G__14680 = cljs.core.next.call(null,seq__14581_14669__$1);
var G__14681 = null;
var G__14682 = 0;
var G__14683 = 0;
seq__14581_14655 = G__14680;
chunk__14583_14656 = G__14681;
count__14584_14657 = G__14682;
i__14585_14658 = G__14683;
continue;
}
}
} else
{}
}
break;
}
{
var G__14684 = cljs.core.next.call(null,seq__14580_14646__$1);
var G__14685 = null;
var G__14686 = 0;
var G__14687 = 0;
seq__14580_14605 = G__14684;
chunk__14587_14606 = G__14685;
count__14588_14607 = G__14686;
i__14589_14608 = G__14687;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__14688){
var elem_sel = cljs.core.first(arglist__14688);
var type_fs = cljs.core.rest(arglist__14688);
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
var vec__14696_14703 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_14704 = cljs.core.nth.call(null,vec__14696_14703,0,null);var selector_14705 = cljs.core.nth.call(null,vec__14696_14703,1,null);var seq__14697_14706 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__14698_14707 = null;var count__14699_14708 = 0;var i__14700_14709 = 0;while(true){
if((i__14700_14709 < count__14699_14708))
{var vec__14701_14710 = cljs.core._nth.call(null,chunk__14698_14707,i__14700_14709);var type_14711 = cljs.core.nth.call(null,vec__14701_14710,0,null);var f_14712 = cljs.core.nth.call(null,vec__14701_14710,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_14711,((function (seq__14697_14706,chunk__14698_14707,count__14699_14708,i__14700_14709,vec__14701_14710,type_14711,f_14712){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_14711,this_fn);
return f_14712.call(null,e);
});})(seq__14697_14706,chunk__14698_14707,count__14699_14708,i__14700_14709,vec__14701_14710,type_14711,f_14712))
);
{
var G__14713 = seq__14697_14706;
var G__14714 = chunk__14698_14707;
var G__14715 = count__14699_14708;
var G__14716 = (i__14700_14709 + 1);
seq__14697_14706 = G__14713;
chunk__14698_14707 = G__14714;
count__14699_14708 = G__14715;
i__14700_14709 = G__14716;
continue;
}
} else
{var temp__4092__auto___14717 = cljs.core.seq.call(null,seq__14697_14706);if(temp__4092__auto___14717)
{var seq__14697_14718__$1 = temp__4092__auto___14717;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14697_14718__$1))
{var c__7211__auto___14719 = cljs.core.chunk_first.call(null,seq__14697_14718__$1);{
var G__14720 = cljs.core.chunk_rest.call(null,seq__14697_14718__$1);
var G__14721 = c__7211__auto___14719;
var G__14722 = cljs.core.count.call(null,c__7211__auto___14719);
var G__14723 = 0;
seq__14697_14706 = G__14720;
chunk__14698_14707 = G__14721;
count__14699_14708 = G__14722;
i__14700_14709 = G__14723;
continue;
}
} else
{var vec__14702_14724 = cljs.core.first.call(null,seq__14697_14718__$1);var type_14725 = cljs.core.nth.call(null,vec__14702_14724,0,null);var f_14726 = cljs.core.nth.call(null,vec__14702_14724,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_14725,((function (seq__14697_14706,chunk__14698_14707,count__14699_14708,i__14700_14709,vec__14702_14724,type_14725,f_14726,seq__14697_14718__$1,temp__4092__auto___14717){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_14725,this_fn);
return f_14726.call(null,e);
});})(seq__14697_14706,chunk__14698_14707,count__14699_14708,i__14700_14709,vec__14702_14724,type_14725,f_14726,seq__14697_14718__$1,temp__4092__auto___14717))
);
{
var G__14727 = cljs.core.next.call(null,seq__14697_14718__$1);
var G__14728 = null;
var G__14729 = 0;
var G__14730 = 0;
seq__14697_14706 = G__14727;
chunk__14698_14707 = G__14728;
count__14699_14708 = G__14729;
i__14700_14709 = G__14730;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__14731){
var elem_sel = cljs.core.first(arglist__14731);
var type_fs = cljs.core.rest(arglist__14731);
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
var fire_BANG___delegate = function (node,event_type,p__14732){var vec__14734 = p__14732;var update_event_BANG_ = cljs.core.nth.call(null,vec__14734,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__14732 = null;if (arguments.length > 2) {
  p__14732 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__14732);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__14735){
var node = cljs.core.first(arglist__14735);
arglist__14735 = cljs.core.next(arglist__14735);
var event_type = cljs.core.first(arglist__14735);
var p__14732 = cljs.core.rest(arglist__14735);
return fire_BANG___delegate(node,event_type,p__14732);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
