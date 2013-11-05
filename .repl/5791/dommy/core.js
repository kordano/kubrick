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
var append_BANG___2 = (function (parent,child){var G__14358 = dommy.template.__GT_node_like.call(null,parent);G__14358.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__14358;
});
var append_BANG___3 = (function() { 
var G__14363__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__14359_14364 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__14360_14365 = null;var count__14361_14366 = 0;var i__14362_14367 = 0;while(true){
if((i__14362_14367 < count__14361_14366))
{var c_14368 = cljs.core._nth.call(null,chunk__14360_14365,i__14362_14367);append_BANG_.call(null,parent__$1,c_14368);
{
var G__14369 = seq__14359_14364;
var G__14370 = chunk__14360_14365;
var G__14371 = count__14361_14366;
var G__14372 = (i__14362_14367 + 1);
seq__14359_14364 = G__14369;
chunk__14360_14365 = G__14370;
count__14361_14366 = G__14371;
i__14362_14367 = G__14372;
continue;
}
} else
{var temp__4092__auto___14373 = cljs.core.seq.call(null,seq__14359_14364);if(temp__4092__auto___14373)
{var seq__14359_14374__$1 = temp__4092__auto___14373;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14359_14374__$1))
{var c__7190__auto___14375 = cljs.core.chunk_first.call(null,seq__14359_14374__$1);{
var G__14376 = cljs.core.chunk_rest.call(null,seq__14359_14374__$1);
var G__14377 = c__7190__auto___14375;
var G__14378 = cljs.core.count.call(null,c__7190__auto___14375);
var G__14379 = 0;
seq__14359_14364 = G__14376;
chunk__14360_14365 = G__14377;
count__14361_14366 = G__14378;
i__14362_14367 = G__14379;
continue;
}
} else
{var c_14380 = cljs.core.first.call(null,seq__14359_14374__$1);append_BANG_.call(null,parent__$1,c_14380);
{
var G__14381 = cljs.core.next.call(null,seq__14359_14374__$1);
var G__14382 = null;
var G__14383 = 0;
var G__14384 = 0;
seq__14359_14364 = G__14381;
chunk__14360_14365 = G__14382;
count__14361_14366 = G__14383;
i__14362_14367 = G__14384;
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
var G__14363 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14363__delegate.call(this,parent,child,more_children);};
G__14363.cljs$lang$maxFixedArity = 2;
G__14363.cljs$lang$applyTo = (function (arglist__14385){
var parent = cljs.core.first(arglist__14385);
arglist__14385 = cljs.core.next(arglist__14385);
var child = cljs.core.first(arglist__14385);
var more_children = cljs.core.rest(arglist__14385);
return G__14363__delegate(parent,child,more_children);
});
G__14363.cljs$core$IFn$_invoke$arity$variadic = G__14363__delegate;
return G__14363;
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
var prepend_BANG___2 = (function (parent,child){var G__14391 = dommy.template.__GT_node_like.call(null,parent);G__14391.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__14391;
});
var prepend_BANG___3 = (function() { 
var G__14396__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__14392_14397 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__14393_14398 = null;var count__14394_14399 = 0;var i__14395_14400 = 0;while(true){
if((i__14395_14400 < count__14394_14399))
{var c_14401 = cljs.core._nth.call(null,chunk__14393_14398,i__14395_14400);prepend_BANG_.call(null,parent__$1,c_14401);
{
var G__14402 = seq__14392_14397;
var G__14403 = chunk__14393_14398;
var G__14404 = count__14394_14399;
var G__14405 = (i__14395_14400 + 1);
seq__14392_14397 = G__14402;
chunk__14393_14398 = G__14403;
count__14394_14399 = G__14404;
i__14395_14400 = G__14405;
continue;
}
} else
{var temp__4092__auto___14406 = cljs.core.seq.call(null,seq__14392_14397);if(temp__4092__auto___14406)
{var seq__14392_14407__$1 = temp__4092__auto___14406;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14392_14407__$1))
{var c__7190__auto___14408 = cljs.core.chunk_first.call(null,seq__14392_14407__$1);{
var G__14409 = cljs.core.chunk_rest.call(null,seq__14392_14407__$1);
var G__14410 = c__7190__auto___14408;
var G__14411 = cljs.core.count.call(null,c__7190__auto___14408);
var G__14412 = 0;
seq__14392_14397 = G__14409;
chunk__14393_14398 = G__14410;
count__14394_14399 = G__14411;
i__14395_14400 = G__14412;
continue;
}
} else
{var c_14413 = cljs.core.first.call(null,seq__14392_14407__$1);prepend_BANG_.call(null,parent__$1,c_14413);
{
var G__14414 = cljs.core.next.call(null,seq__14392_14407__$1);
var G__14415 = null;
var G__14416 = 0;
var G__14417 = 0;
seq__14392_14397 = G__14414;
chunk__14393_14398 = G__14415;
count__14394_14399 = G__14416;
i__14395_14400 = G__14417;
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
var G__14396 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14396__delegate.call(this,parent,child,more_children);};
G__14396.cljs$lang$maxFixedArity = 2;
G__14396.cljs$lang$applyTo = (function (arglist__14418){
var parent = cljs.core.first(arglist__14418);
arglist__14418 = cljs.core.next(arglist__14418);
var child = cljs.core.first(arglist__14418);
var more_children = cljs.core.rest(arglist__14418);
return G__14396__delegate(parent,child,more_children);
});
G__14396.cljs$core$IFn$_invoke$arity$variadic = G__14396__delegate;
return G__14396;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___14419 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___14419))
{var next_14420 = temp__4090__auto___14419;parent.insertBefore(actual_node,next_14420);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__14422 = dommy.template.__GT_node_like.call(null,parent);G__14422.innerHTML = "";
dommy.core.append_BANG_.call(null,G__14422,node_like);
return G__14422;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__14424 = elem__$1.parentNode;G__14424.removeChild(elem__$1);
return G__14424;
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
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__14425_SHARP_){return p1__14425_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__14426_SHARP_){return !((p1__14426_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__14427){var vec__14428 = p__14427;var special_mouse_event = cljs.core.nth.call(null,vec__14428,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__14428,1,null);return cljs.core.PersistentVector.fromArray([special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3943__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3943__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__14429){
var elem = cljs.core.first(arglist__14429);
arglist__14429 = cljs.core.next(arglist__14429);
var f = cljs.core.first(arglist__14429);
var args = cljs.core.rest(arglist__14429);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__14430_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__14430_SHARP_));
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
var vec__14454_14477 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_14478 = cljs.core.nth.call(null,vec__14454_14477,0,null);var selector_14479 = cljs.core.nth.call(null,vec__14454_14477,1,null);var seq__14455_14480 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__14462_14481 = null;var count__14463_14482 = 0;var i__14464_14483 = 0;while(true){
if((i__14464_14483 < count__14463_14482))
{var vec__14471_14484 = cljs.core._nth.call(null,chunk__14462_14481,i__14464_14483);var orig_type_14485 = cljs.core.nth.call(null,vec__14471_14484,0,null);var f_14486 = cljs.core.nth.call(null,vec__14471_14484,1,null);var seq__14465_14487 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14485,cljs.core.PersistentArrayMap.fromArray([orig_type_14485,cljs.core.identity], true)));var chunk__14467_14488 = null;var count__14468_14489 = 0;var i__14469_14490 = 0;while(true){
if((i__14469_14490 < count__14468_14489))
{var vec__14472_14491 = cljs.core._nth.call(null,chunk__14467_14488,i__14469_14490);var actual_type_14492 = cljs.core.nth.call(null,vec__14472_14491,0,null);var factory_14493 = cljs.core.nth.call(null,vec__14472_14491,1,null);var canonical_f_14494 = (cljs.core.truth_(selector_14479)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14478,selector_14479):cljs.core.identity).call(null,factory_14493.call(null,f_14486));dommy.core.update_event_listeners_BANG_.call(null,elem_14478,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_14479,actual_type_14492,f_14486], true),canonical_f_14494);
if(cljs.core.truth_(elem_14478.addEventListener))
{elem_14478.addEventListener(cljs.core.name.call(null,actual_type_14492),canonical_f_14494);
} else
{elem_14478.attachEvent(cljs.core.name.call(null,actual_type_14492),canonical_f_14494);
}
{
var G__14495 = seq__14465_14487;
var G__14496 = chunk__14467_14488;
var G__14497 = count__14468_14489;
var G__14498 = (i__14469_14490 + 1);
seq__14465_14487 = G__14495;
chunk__14467_14488 = G__14496;
count__14468_14489 = G__14497;
i__14469_14490 = G__14498;
continue;
}
} else
{var temp__4092__auto___14499 = cljs.core.seq.call(null,seq__14465_14487);if(temp__4092__auto___14499)
{var seq__14465_14500__$1 = temp__4092__auto___14499;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14465_14500__$1))
{var c__7190__auto___14501 = cljs.core.chunk_first.call(null,seq__14465_14500__$1);{
var G__14502 = cljs.core.chunk_rest.call(null,seq__14465_14500__$1);
var G__14503 = c__7190__auto___14501;
var G__14504 = cljs.core.count.call(null,c__7190__auto___14501);
var G__14505 = 0;
seq__14465_14487 = G__14502;
chunk__14467_14488 = G__14503;
count__14468_14489 = G__14504;
i__14469_14490 = G__14505;
continue;
}
} else
{var vec__14473_14506 = cljs.core.first.call(null,seq__14465_14500__$1);var actual_type_14507 = cljs.core.nth.call(null,vec__14473_14506,0,null);var factory_14508 = cljs.core.nth.call(null,vec__14473_14506,1,null);var canonical_f_14509 = (cljs.core.truth_(selector_14479)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14478,selector_14479):cljs.core.identity).call(null,factory_14508.call(null,f_14486));dommy.core.update_event_listeners_BANG_.call(null,elem_14478,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_14479,actual_type_14507,f_14486], true),canonical_f_14509);
if(cljs.core.truth_(elem_14478.addEventListener))
{elem_14478.addEventListener(cljs.core.name.call(null,actual_type_14507),canonical_f_14509);
} else
{elem_14478.attachEvent(cljs.core.name.call(null,actual_type_14507),canonical_f_14509);
}
{
var G__14510 = cljs.core.next.call(null,seq__14465_14500__$1);
var G__14511 = null;
var G__14512 = 0;
var G__14513 = 0;
seq__14465_14487 = G__14510;
chunk__14467_14488 = G__14511;
count__14468_14489 = G__14512;
i__14469_14490 = G__14513;
continue;
}
}
} else
{}
}
break;
}
{
var G__14514 = seq__14455_14480;
var G__14515 = chunk__14462_14481;
var G__14516 = count__14463_14482;
var G__14517 = (i__14464_14483 + 1);
seq__14455_14480 = G__14514;
chunk__14462_14481 = G__14515;
count__14463_14482 = G__14516;
i__14464_14483 = G__14517;
continue;
}
} else
{var temp__4092__auto___14518 = cljs.core.seq.call(null,seq__14455_14480);if(temp__4092__auto___14518)
{var seq__14455_14519__$1 = temp__4092__auto___14518;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14455_14519__$1))
{var c__7190__auto___14520 = cljs.core.chunk_first.call(null,seq__14455_14519__$1);{
var G__14521 = cljs.core.chunk_rest.call(null,seq__14455_14519__$1);
var G__14522 = c__7190__auto___14520;
var G__14523 = cljs.core.count.call(null,c__7190__auto___14520);
var G__14524 = 0;
seq__14455_14480 = G__14521;
chunk__14462_14481 = G__14522;
count__14463_14482 = G__14523;
i__14464_14483 = G__14524;
continue;
}
} else
{var vec__14474_14525 = cljs.core.first.call(null,seq__14455_14519__$1);var orig_type_14526 = cljs.core.nth.call(null,vec__14474_14525,0,null);var f_14527 = cljs.core.nth.call(null,vec__14474_14525,1,null);var seq__14456_14528 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14526,cljs.core.PersistentArrayMap.fromArray([orig_type_14526,cljs.core.identity], true)));var chunk__14458_14529 = null;var count__14459_14530 = 0;var i__14460_14531 = 0;while(true){
if((i__14460_14531 < count__14459_14530))
{var vec__14475_14532 = cljs.core._nth.call(null,chunk__14458_14529,i__14460_14531);var actual_type_14533 = cljs.core.nth.call(null,vec__14475_14532,0,null);var factory_14534 = cljs.core.nth.call(null,vec__14475_14532,1,null);var canonical_f_14535 = (cljs.core.truth_(selector_14479)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14478,selector_14479):cljs.core.identity).call(null,factory_14534.call(null,f_14527));dommy.core.update_event_listeners_BANG_.call(null,elem_14478,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_14479,actual_type_14533,f_14527], true),canonical_f_14535);
if(cljs.core.truth_(elem_14478.addEventListener))
{elem_14478.addEventListener(cljs.core.name.call(null,actual_type_14533),canonical_f_14535);
} else
{elem_14478.attachEvent(cljs.core.name.call(null,actual_type_14533),canonical_f_14535);
}
{
var G__14536 = seq__14456_14528;
var G__14537 = chunk__14458_14529;
var G__14538 = count__14459_14530;
var G__14539 = (i__14460_14531 + 1);
seq__14456_14528 = G__14536;
chunk__14458_14529 = G__14537;
count__14459_14530 = G__14538;
i__14460_14531 = G__14539;
continue;
}
} else
{var temp__4092__auto___14540__$1 = cljs.core.seq.call(null,seq__14456_14528);if(temp__4092__auto___14540__$1)
{var seq__14456_14541__$1 = temp__4092__auto___14540__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14456_14541__$1))
{var c__7190__auto___14542 = cljs.core.chunk_first.call(null,seq__14456_14541__$1);{
var G__14543 = cljs.core.chunk_rest.call(null,seq__14456_14541__$1);
var G__14544 = c__7190__auto___14542;
var G__14545 = cljs.core.count.call(null,c__7190__auto___14542);
var G__14546 = 0;
seq__14456_14528 = G__14543;
chunk__14458_14529 = G__14544;
count__14459_14530 = G__14545;
i__14460_14531 = G__14546;
continue;
}
} else
{var vec__14476_14547 = cljs.core.first.call(null,seq__14456_14541__$1);var actual_type_14548 = cljs.core.nth.call(null,vec__14476_14547,0,null);var factory_14549 = cljs.core.nth.call(null,vec__14476_14547,1,null);var canonical_f_14550 = (cljs.core.truth_(selector_14479)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14478,selector_14479):cljs.core.identity).call(null,factory_14549.call(null,f_14527));dommy.core.update_event_listeners_BANG_.call(null,elem_14478,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_14479,actual_type_14548,f_14527], true),canonical_f_14550);
if(cljs.core.truth_(elem_14478.addEventListener))
{elem_14478.addEventListener(cljs.core.name.call(null,actual_type_14548),canonical_f_14550);
} else
{elem_14478.attachEvent(cljs.core.name.call(null,actual_type_14548),canonical_f_14550);
}
{
var G__14551 = cljs.core.next.call(null,seq__14456_14541__$1);
var G__14552 = null;
var G__14553 = 0;
var G__14554 = 0;
seq__14456_14528 = G__14551;
chunk__14458_14529 = G__14552;
count__14459_14530 = G__14553;
i__14460_14531 = G__14554;
continue;
}
}
} else
{}
}
break;
}
{
var G__14555 = cljs.core.next.call(null,seq__14455_14519__$1);
var G__14556 = null;
var G__14557 = 0;
var G__14558 = 0;
seq__14455_14480 = G__14555;
chunk__14462_14481 = G__14556;
count__14463_14482 = G__14557;
i__14464_14483 = G__14558;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__14559){
var elem_sel = cljs.core.first(arglist__14559);
var type_fs = cljs.core.rest(arglist__14559);
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
var vec__14583_14606 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_14607 = cljs.core.nth.call(null,vec__14583_14606,0,null);var selector_14608 = cljs.core.nth.call(null,vec__14583_14606,1,null);var seq__14584_14609 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__14591_14610 = null;var count__14592_14611 = 0;var i__14593_14612 = 0;while(true){
if((i__14593_14612 < count__14592_14611))
{var vec__14600_14613 = cljs.core._nth.call(null,chunk__14591_14610,i__14593_14612);var orig_type_14614 = cljs.core.nth.call(null,vec__14600_14613,0,null);var f_14615 = cljs.core.nth.call(null,vec__14600_14613,1,null);var seq__14594_14616 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14614,cljs.core.PersistentArrayMap.fromArray([orig_type_14614,cljs.core.identity], true)));var chunk__14596_14617 = null;var count__14597_14618 = 0;var i__14598_14619 = 0;while(true){
if((i__14598_14619 < count__14597_14618))
{var vec__14601_14620 = cljs.core._nth.call(null,chunk__14596_14617,i__14598_14619);var actual_type_14621 = cljs.core.nth.call(null,vec__14601_14620,0,null);var __14622 = cljs.core.nth.call(null,vec__14601_14620,1,null);var keys_14623 = cljs.core.PersistentVector.fromArray([selector_14608,actual_type_14621,f_14615], true);var canonical_f_14624 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14607),keys_14623);dommy.core.update_event_listeners_BANG_.call(null,elem_14607,dommy.utils.dissoc_in,keys_14623);
if(cljs.core.truth_(elem_14607.removeEventListener))
{elem_14607.removeEventListener(cljs.core.name.call(null,actual_type_14621),canonical_f_14624);
} else
{elem_14607.detachEvent(cljs.core.name.call(null,actual_type_14621),canonical_f_14624);
}
{
var G__14625 = seq__14594_14616;
var G__14626 = chunk__14596_14617;
var G__14627 = count__14597_14618;
var G__14628 = (i__14598_14619 + 1);
seq__14594_14616 = G__14625;
chunk__14596_14617 = G__14626;
count__14597_14618 = G__14627;
i__14598_14619 = G__14628;
continue;
}
} else
{var temp__4092__auto___14629 = cljs.core.seq.call(null,seq__14594_14616);if(temp__4092__auto___14629)
{var seq__14594_14630__$1 = temp__4092__auto___14629;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14594_14630__$1))
{var c__7190__auto___14631 = cljs.core.chunk_first.call(null,seq__14594_14630__$1);{
var G__14632 = cljs.core.chunk_rest.call(null,seq__14594_14630__$1);
var G__14633 = c__7190__auto___14631;
var G__14634 = cljs.core.count.call(null,c__7190__auto___14631);
var G__14635 = 0;
seq__14594_14616 = G__14632;
chunk__14596_14617 = G__14633;
count__14597_14618 = G__14634;
i__14598_14619 = G__14635;
continue;
}
} else
{var vec__14602_14636 = cljs.core.first.call(null,seq__14594_14630__$1);var actual_type_14637 = cljs.core.nth.call(null,vec__14602_14636,0,null);var __14638 = cljs.core.nth.call(null,vec__14602_14636,1,null);var keys_14639 = cljs.core.PersistentVector.fromArray([selector_14608,actual_type_14637,f_14615], true);var canonical_f_14640 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14607),keys_14639);dommy.core.update_event_listeners_BANG_.call(null,elem_14607,dommy.utils.dissoc_in,keys_14639);
if(cljs.core.truth_(elem_14607.removeEventListener))
{elem_14607.removeEventListener(cljs.core.name.call(null,actual_type_14637),canonical_f_14640);
} else
{elem_14607.detachEvent(cljs.core.name.call(null,actual_type_14637),canonical_f_14640);
}
{
var G__14641 = cljs.core.next.call(null,seq__14594_14630__$1);
var G__14642 = null;
var G__14643 = 0;
var G__14644 = 0;
seq__14594_14616 = G__14641;
chunk__14596_14617 = G__14642;
count__14597_14618 = G__14643;
i__14598_14619 = G__14644;
continue;
}
}
} else
{}
}
break;
}
{
var G__14645 = seq__14584_14609;
var G__14646 = chunk__14591_14610;
var G__14647 = count__14592_14611;
var G__14648 = (i__14593_14612 + 1);
seq__14584_14609 = G__14645;
chunk__14591_14610 = G__14646;
count__14592_14611 = G__14647;
i__14593_14612 = G__14648;
continue;
}
} else
{var temp__4092__auto___14649 = cljs.core.seq.call(null,seq__14584_14609);if(temp__4092__auto___14649)
{var seq__14584_14650__$1 = temp__4092__auto___14649;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14584_14650__$1))
{var c__7190__auto___14651 = cljs.core.chunk_first.call(null,seq__14584_14650__$1);{
var G__14652 = cljs.core.chunk_rest.call(null,seq__14584_14650__$1);
var G__14653 = c__7190__auto___14651;
var G__14654 = cljs.core.count.call(null,c__7190__auto___14651);
var G__14655 = 0;
seq__14584_14609 = G__14652;
chunk__14591_14610 = G__14653;
count__14592_14611 = G__14654;
i__14593_14612 = G__14655;
continue;
}
} else
{var vec__14603_14656 = cljs.core.first.call(null,seq__14584_14650__$1);var orig_type_14657 = cljs.core.nth.call(null,vec__14603_14656,0,null);var f_14658 = cljs.core.nth.call(null,vec__14603_14656,1,null);var seq__14585_14659 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14657,cljs.core.PersistentArrayMap.fromArray([orig_type_14657,cljs.core.identity], true)));var chunk__14587_14660 = null;var count__14588_14661 = 0;var i__14589_14662 = 0;while(true){
if((i__14589_14662 < count__14588_14661))
{var vec__14604_14663 = cljs.core._nth.call(null,chunk__14587_14660,i__14589_14662);var actual_type_14664 = cljs.core.nth.call(null,vec__14604_14663,0,null);var __14665 = cljs.core.nth.call(null,vec__14604_14663,1,null);var keys_14666 = cljs.core.PersistentVector.fromArray([selector_14608,actual_type_14664,f_14658], true);var canonical_f_14667 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14607),keys_14666);dommy.core.update_event_listeners_BANG_.call(null,elem_14607,dommy.utils.dissoc_in,keys_14666);
if(cljs.core.truth_(elem_14607.removeEventListener))
{elem_14607.removeEventListener(cljs.core.name.call(null,actual_type_14664),canonical_f_14667);
} else
{elem_14607.detachEvent(cljs.core.name.call(null,actual_type_14664),canonical_f_14667);
}
{
var G__14668 = seq__14585_14659;
var G__14669 = chunk__14587_14660;
var G__14670 = count__14588_14661;
var G__14671 = (i__14589_14662 + 1);
seq__14585_14659 = G__14668;
chunk__14587_14660 = G__14669;
count__14588_14661 = G__14670;
i__14589_14662 = G__14671;
continue;
}
} else
{var temp__4092__auto___14672__$1 = cljs.core.seq.call(null,seq__14585_14659);if(temp__4092__auto___14672__$1)
{var seq__14585_14673__$1 = temp__4092__auto___14672__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14585_14673__$1))
{var c__7190__auto___14674 = cljs.core.chunk_first.call(null,seq__14585_14673__$1);{
var G__14675 = cljs.core.chunk_rest.call(null,seq__14585_14673__$1);
var G__14676 = c__7190__auto___14674;
var G__14677 = cljs.core.count.call(null,c__7190__auto___14674);
var G__14678 = 0;
seq__14585_14659 = G__14675;
chunk__14587_14660 = G__14676;
count__14588_14661 = G__14677;
i__14589_14662 = G__14678;
continue;
}
} else
{var vec__14605_14679 = cljs.core.first.call(null,seq__14585_14673__$1);var actual_type_14680 = cljs.core.nth.call(null,vec__14605_14679,0,null);var __14681 = cljs.core.nth.call(null,vec__14605_14679,1,null);var keys_14682 = cljs.core.PersistentVector.fromArray([selector_14608,actual_type_14680,f_14658], true);var canonical_f_14683 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14607),keys_14682);dommy.core.update_event_listeners_BANG_.call(null,elem_14607,dommy.utils.dissoc_in,keys_14682);
if(cljs.core.truth_(elem_14607.removeEventListener))
{elem_14607.removeEventListener(cljs.core.name.call(null,actual_type_14680),canonical_f_14683);
} else
{elem_14607.detachEvent(cljs.core.name.call(null,actual_type_14680),canonical_f_14683);
}
{
var G__14684 = cljs.core.next.call(null,seq__14585_14673__$1);
var G__14685 = null;
var G__14686 = 0;
var G__14687 = 0;
seq__14585_14659 = G__14684;
chunk__14587_14660 = G__14685;
count__14588_14661 = G__14686;
i__14589_14662 = G__14687;
continue;
}
}
} else
{}
}
break;
}
{
var G__14688 = cljs.core.next.call(null,seq__14584_14650__$1);
var G__14689 = null;
var G__14690 = 0;
var G__14691 = 0;
seq__14584_14609 = G__14688;
chunk__14591_14610 = G__14689;
count__14592_14611 = G__14690;
i__14593_14612 = G__14691;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__14692){
var elem_sel = cljs.core.first(arglist__14692);
var type_fs = cljs.core.rest(arglist__14692);
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
var vec__14700_14707 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_14708 = cljs.core.nth.call(null,vec__14700_14707,0,null);var selector_14709 = cljs.core.nth.call(null,vec__14700_14707,1,null);var seq__14701_14710 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__14702_14711 = null;var count__14703_14712 = 0;var i__14704_14713 = 0;while(true){
if((i__14704_14713 < count__14703_14712))
{var vec__14705_14714 = cljs.core._nth.call(null,chunk__14702_14711,i__14704_14713);var type_14715 = cljs.core.nth.call(null,vec__14705_14714,0,null);var f_14716 = cljs.core.nth.call(null,vec__14705_14714,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_14715,((function (seq__14701_14710,chunk__14702_14711,count__14703_14712,i__14704_14713,vec__14705_14714,type_14715,f_14716){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_14715,this_fn);
return f_14716.call(null,e);
});})(seq__14701_14710,chunk__14702_14711,count__14703_14712,i__14704_14713,vec__14705_14714,type_14715,f_14716))
);
{
var G__14717 = seq__14701_14710;
var G__14718 = chunk__14702_14711;
var G__14719 = count__14703_14712;
var G__14720 = (i__14704_14713 + 1);
seq__14701_14710 = G__14717;
chunk__14702_14711 = G__14718;
count__14703_14712 = G__14719;
i__14704_14713 = G__14720;
continue;
}
} else
{var temp__4092__auto___14721 = cljs.core.seq.call(null,seq__14701_14710);if(temp__4092__auto___14721)
{var seq__14701_14722__$1 = temp__4092__auto___14721;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14701_14722__$1))
{var c__7190__auto___14723 = cljs.core.chunk_first.call(null,seq__14701_14722__$1);{
var G__14724 = cljs.core.chunk_rest.call(null,seq__14701_14722__$1);
var G__14725 = c__7190__auto___14723;
var G__14726 = cljs.core.count.call(null,c__7190__auto___14723);
var G__14727 = 0;
seq__14701_14710 = G__14724;
chunk__14702_14711 = G__14725;
count__14703_14712 = G__14726;
i__14704_14713 = G__14727;
continue;
}
} else
{var vec__14706_14728 = cljs.core.first.call(null,seq__14701_14722__$1);var type_14729 = cljs.core.nth.call(null,vec__14706_14728,0,null);var f_14730 = cljs.core.nth.call(null,vec__14706_14728,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_14729,((function (seq__14701_14710,chunk__14702_14711,count__14703_14712,i__14704_14713,vec__14706_14728,type_14729,f_14730,seq__14701_14722__$1,temp__4092__auto___14721){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_14729,this_fn);
return f_14730.call(null,e);
});})(seq__14701_14710,chunk__14702_14711,count__14703_14712,i__14704_14713,vec__14706_14728,type_14729,f_14730,seq__14701_14722__$1,temp__4092__auto___14721))
);
{
var G__14731 = cljs.core.next.call(null,seq__14701_14722__$1);
var G__14732 = null;
var G__14733 = 0;
var G__14734 = 0;
seq__14701_14710 = G__14731;
chunk__14702_14711 = G__14732;
count__14703_14712 = G__14733;
i__14704_14713 = G__14734;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__14735){
var elem_sel = cljs.core.first(arglist__14735);
var type_fs = cljs.core.rest(arglist__14735);
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
var fire_BANG___delegate = function (node,event_type,p__14736){var vec__14738 = p__14736;var update_event_BANG_ = cljs.core.nth.call(null,vec__14738,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__14736 = null;if (arguments.length > 2) {
  p__14736 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__14736);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__14739){
var node = cljs.core.first(arglist__14739);
arglist__14739 = cljs.core.next(arglist__14739);
var event_type = cljs.core.first(arglist__14739);
var p__14736 = cljs.core.rest(arglist__14739);
return fire_BANG___delegate(node,event_type,p__14736);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
