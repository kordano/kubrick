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
var append_BANG___2 = (function (parent,child){var G__14367 = dommy.template.__GT_node_like.call(null,parent);G__14367.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__14367;
});
var append_BANG___3 = (function() { 
var G__14372__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__14368_14373 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__14369_14374 = null;var count__14370_14375 = 0;var i__14371_14376 = 0;while(true){
if((i__14371_14376 < count__14370_14375))
{var c_14377 = cljs.core._nth.call(null,chunk__14369_14374,i__14371_14376);append_BANG_.call(null,parent__$1,c_14377);
{
var G__14378 = seq__14368_14373;
var G__14379 = chunk__14369_14374;
var G__14380 = count__14370_14375;
var G__14381 = (i__14371_14376 + 1);
seq__14368_14373 = G__14378;
chunk__14369_14374 = G__14379;
count__14370_14375 = G__14380;
i__14371_14376 = G__14381;
continue;
}
} else
{var temp__4092__auto___14382 = cljs.core.seq.call(null,seq__14368_14373);if(temp__4092__auto___14382)
{var seq__14368_14383__$1 = temp__4092__auto___14382;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14368_14383__$1))
{var c__6940__auto___14384 = cljs.core.chunk_first.call(null,seq__14368_14383__$1);{
var G__14385 = cljs.core.chunk_rest.call(null,seq__14368_14383__$1);
var G__14386 = c__6940__auto___14384;
var G__14387 = cljs.core.count.call(null,c__6940__auto___14384);
var G__14388 = 0;
seq__14368_14373 = G__14385;
chunk__14369_14374 = G__14386;
count__14370_14375 = G__14387;
i__14371_14376 = G__14388;
continue;
}
} else
{var c_14389 = cljs.core.first.call(null,seq__14368_14383__$1);append_BANG_.call(null,parent__$1,c_14389);
{
var G__14390 = cljs.core.next.call(null,seq__14368_14383__$1);
var G__14391 = null;
var G__14392 = 0;
var G__14393 = 0;
seq__14368_14373 = G__14390;
chunk__14369_14374 = G__14391;
count__14370_14375 = G__14392;
i__14371_14376 = G__14393;
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
var G__14372 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14372__delegate.call(this,parent,child,more_children);};
G__14372.cljs$lang$maxFixedArity = 2;
G__14372.cljs$lang$applyTo = (function (arglist__14394){
var parent = cljs.core.first(arglist__14394);
arglist__14394 = cljs.core.next(arglist__14394);
var child = cljs.core.first(arglist__14394);
var more_children = cljs.core.rest(arglist__14394);
return G__14372__delegate(parent,child,more_children);
});
G__14372.cljs$core$IFn$_invoke$arity$variadic = G__14372__delegate;
return G__14372;
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
var prepend_BANG___2 = (function (parent,child){var G__14400 = dommy.template.__GT_node_like.call(null,parent);G__14400.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__14400;
});
var prepend_BANG___3 = (function() { 
var G__14405__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__14401_14406 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__14402_14407 = null;var count__14403_14408 = 0;var i__14404_14409 = 0;while(true){
if((i__14404_14409 < count__14403_14408))
{var c_14410 = cljs.core._nth.call(null,chunk__14402_14407,i__14404_14409);prepend_BANG_.call(null,parent__$1,c_14410);
{
var G__14411 = seq__14401_14406;
var G__14412 = chunk__14402_14407;
var G__14413 = count__14403_14408;
var G__14414 = (i__14404_14409 + 1);
seq__14401_14406 = G__14411;
chunk__14402_14407 = G__14412;
count__14403_14408 = G__14413;
i__14404_14409 = G__14414;
continue;
}
} else
{var temp__4092__auto___14415 = cljs.core.seq.call(null,seq__14401_14406);if(temp__4092__auto___14415)
{var seq__14401_14416__$1 = temp__4092__auto___14415;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14401_14416__$1))
{var c__6940__auto___14417 = cljs.core.chunk_first.call(null,seq__14401_14416__$1);{
var G__14418 = cljs.core.chunk_rest.call(null,seq__14401_14416__$1);
var G__14419 = c__6940__auto___14417;
var G__14420 = cljs.core.count.call(null,c__6940__auto___14417);
var G__14421 = 0;
seq__14401_14406 = G__14418;
chunk__14402_14407 = G__14419;
count__14403_14408 = G__14420;
i__14404_14409 = G__14421;
continue;
}
} else
{var c_14422 = cljs.core.first.call(null,seq__14401_14416__$1);prepend_BANG_.call(null,parent__$1,c_14422);
{
var G__14423 = cljs.core.next.call(null,seq__14401_14416__$1);
var G__14424 = null;
var G__14425 = 0;
var G__14426 = 0;
seq__14401_14406 = G__14423;
chunk__14402_14407 = G__14424;
count__14403_14408 = G__14425;
i__14404_14409 = G__14426;
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
var G__14405 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14405__delegate.call(this,parent,child,more_children);};
G__14405.cljs$lang$maxFixedArity = 2;
G__14405.cljs$lang$applyTo = (function (arglist__14427){
var parent = cljs.core.first(arglist__14427);
arglist__14427 = cljs.core.next(arglist__14427);
var child = cljs.core.first(arglist__14427);
var more_children = cljs.core.rest(arglist__14427);
return G__14405__delegate(parent,child,more_children);
});
G__14405.cljs$core$IFn$_invoke$arity$variadic = G__14405__delegate;
return G__14405;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___14428 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___14428))
{var next_14429 = temp__4090__auto___14428;parent.insertBefore(actual_node,next_14429);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__14431 = dommy.template.__GT_node_like.call(null,parent);G__14431.innerHTML = "";
dommy.core.append_BANG_.call(null,G__14431,node_like);
return G__14431;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__14433 = elem__$1.parentNode;G__14433.removeChild(elem__$1);
return G__14433;
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
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__14434_SHARP_){return p1__14434_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__14435_SHARP_){return !((p1__14435_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__14436){var vec__14437 = p__14436;var special_mouse_event = cljs.core.nth.call(null,vec__14437,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__14437,1,null);return cljs.core.PersistentVector.fromArray([special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3943__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3943__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__14438){
var elem = cljs.core.first(arglist__14438);
arglist__14438 = cljs.core.next(arglist__14438);
var f = cljs.core.first(arglist__14438);
var args = cljs.core.rest(arglist__14438);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__14439_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__14439_SHARP_));
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
var vec__14463_14486 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_14487 = cljs.core.nth.call(null,vec__14463_14486,0,null);var selector_14488 = cljs.core.nth.call(null,vec__14463_14486,1,null);var seq__14464_14489 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__14471_14490 = null;var count__14472_14491 = 0;var i__14473_14492 = 0;while(true){
if((i__14473_14492 < count__14472_14491))
{var vec__14480_14493 = cljs.core._nth.call(null,chunk__14471_14490,i__14473_14492);var orig_type_14494 = cljs.core.nth.call(null,vec__14480_14493,0,null);var f_14495 = cljs.core.nth.call(null,vec__14480_14493,1,null);var seq__14474_14496 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14494,cljs.core.PersistentArrayMap.fromArray([orig_type_14494,cljs.core.identity], true)));var chunk__14476_14497 = null;var count__14477_14498 = 0;var i__14478_14499 = 0;while(true){
if((i__14478_14499 < count__14477_14498))
{var vec__14481_14500 = cljs.core._nth.call(null,chunk__14476_14497,i__14478_14499);var actual_type_14501 = cljs.core.nth.call(null,vec__14481_14500,0,null);var factory_14502 = cljs.core.nth.call(null,vec__14481_14500,1,null);var canonical_f_14503 = (cljs.core.truth_(selector_14488)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14487,selector_14488):cljs.core.identity).call(null,factory_14502.call(null,f_14495));dommy.core.update_event_listeners_BANG_.call(null,elem_14487,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_14488,actual_type_14501,f_14495], true),canonical_f_14503);
if(cljs.core.truth_(elem_14487.addEventListener))
{elem_14487.addEventListener(cljs.core.name.call(null,actual_type_14501),canonical_f_14503);
} else
{elem_14487.attachEvent(cljs.core.name.call(null,actual_type_14501),canonical_f_14503);
}
{
var G__14504 = seq__14474_14496;
var G__14505 = chunk__14476_14497;
var G__14506 = count__14477_14498;
var G__14507 = (i__14478_14499 + 1);
seq__14474_14496 = G__14504;
chunk__14476_14497 = G__14505;
count__14477_14498 = G__14506;
i__14478_14499 = G__14507;
continue;
}
} else
{var temp__4092__auto___14508 = cljs.core.seq.call(null,seq__14474_14496);if(temp__4092__auto___14508)
{var seq__14474_14509__$1 = temp__4092__auto___14508;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14474_14509__$1))
{var c__6940__auto___14510 = cljs.core.chunk_first.call(null,seq__14474_14509__$1);{
var G__14511 = cljs.core.chunk_rest.call(null,seq__14474_14509__$1);
var G__14512 = c__6940__auto___14510;
var G__14513 = cljs.core.count.call(null,c__6940__auto___14510);
var G__14514 = 0;
seq__14474_14496 = G__14511;
chunk__14476_14497 = G__14512;
count__14477_14498 = G__14513;
i__14478_14499 = G__14514;
continue;
}
} else
{var vec__14482_14515 = cljs.core.first.call(null,seq__14474_14509__$1);var actual_type_14516 = cljs.core.nth.call(null,vec__14482_14515,0,null);var factory_14517 = cljs.core.nth.call(null,vec__14482_14515,1,null);var canonical_f_14518 = (cljs.core.truth_(selector_14488)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14487,selector_14488):cljs.core.identity).call(null,factory_14517.call(null,f_14495));dommy.core.update_event_listeners_BANG_.call(null,elem_14487,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_14488,actual_type_14516,f_14495], true),canonical_f_14518);
if(cljs.core.truth_(elem_14487.addEventListener))
{elem_14487.addEventListener(cljs.core.name.call(null,actual_type_14516),canonical_f_14518);
} else
{elem_14487.attachEvent(cljs.core.name.call(null,actual_type_14516),canonical_f_14518);
}
{
var G__14519 = cljs.core.next.call(null,seq__14474_14509__$1);
var G__14520 = null;
var G__14521 = 0;
var G__14522 = 0;
seq__14474_14496 = G__14519;
chunk__14476_14497 = G__14520;
count__14477_14498 = G__14521;
i__14478_14499 = G__14522;
continue;
}
}
} else
{}
}
break;
}
{
var G__14523 = seq__14464_14489;
var G__14524 = chunk__14471_14490;
var G__14525 = count__14472_14491;
var G__14526 = (i__14473_14492 + 1);
seq__14464_14489 = G__14523;
chunk__14471_14490 = G__14524;
count__14472_14491 = G__14525;
i__14473_14492 = G__14526;
continue;
}
} else
{var temp__4092__auto___14527 = cljs.core.seq.call(null,seq__14464_14489);if(temp__4092__auto___14527)
{var seq__14464_14528__$1 = temp__4092__auto___14527;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14464_14528__$1))
{var c__6940__auto___14529 = cljs.core.chunk_first.call(null,seq__14464_14528__$1);{
var G__14530 = cljs.core.chunk_rest.call(null,seq__14464_14528__$1);
var G__14531 = c__6940__auto___14529;
var G__14532 = cljs.core.count.call(null,c__6940__auto___14529);
var G__14533 = 0;
seq__14464_14489 = G__14530;
chunk__14471_14490 = G__14531;
count__14472_14491 = G__14532;
i__14473_14492 = G__14533;
continue;
}
} else
{var vec__14483_14534 = cljs.core.first.call(null,seq__14464_14528__$1);var orig_type_14535 = cljs.core.nth.call(null,vec__14483_14534,0,null);var f_14536 = cljs.core.nth.call(null,vec__14483_14534,1,null);var seq__14465_14537 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14535,cljs.core.PersistentArrayMap.fromArray([orig_type_14535,cljs.core.identity], true)));var chunk__14467_14538 = null;var count__14468_14539 = 0;var i__14469_14540 = 0;while(true){
if((i__14469_14540 < count__14468_14539))
{var vec__14484_14541 = cljs.core._nth.call(null,chunk__14467_14538,i__14469_14540);var actual_type_14542 = cljs.core.nth.call(null,vec__14484_14541,0,null);var factory_14543 = cljs.core.nth.call(null,vec__14484_14541,1,null);var canonical_f_14544 = (cljs.core.truth_(selector_14488)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14487,selector_14488):cljs.core.identity).call(null,factory_14543.call(null,f_14536));dommy.core.update_event_listeners_BANG_.call(null,elem_14487,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_14488,actual_type_14542,f_14536], true),canonical_f_14544);
if(cljs.core.truth_(elem_14487.addEventListener))
{elem_14487.addEventListener(cljs.core.name.call(null,actual_type_14542),canonical_f_14544);
} else
{elem_14487.attachEvent(cljs.core.name.call(null,actual_type_14542),canonical_f_14544);
}
{
var G__14545 = seq__14465_14537;
var G__14546 = chunk__14467_14538;
var G__14547 = count__14468_14539;
var G__14548 = (i__14469_14540 + 1);
seq__14465_14537 = G__14545;
chunk__14467_14538 = G__14546;
count__14468_14539 = G__14547;
i__14469_14540 = G__14548;
continue;
}
} else
{var temp__4092__auto___14549__$1 = cljs.core.seq.call(null,seq__14465_14537);if(temp__4092__auto___14549__$1)
{var seq__14465_14550__$1 = temp__4092__auto___14549__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14465_14550__$1))
{var c__6940__auto___14551 = cljs.core.chunk_first.call(null,seq__14465_14550__$1);{
var G__14552 = cljs.core.chunk_rest.call(null,seq__14465_14550__$1);
var G__14553 = c__6940__auto___14551;
var G__14554 = cljs.core.count.call(null,c__6940__auto___14551);
var G__14555 = 0;
seq__14465_14537 = G__14552;
chunk__14467_14538 = G__14553;
count__14468_14539 = G__14554;
i__14469_14540 = G__14555;
continue;
}
} else
{var vec__14485_14556 = cljs.core.first.call(null,seq__14465_14550__$1);var actual_type_14557 = cljs.core.nth.call(null,vec__14485_14556,0,null);var factory_14558 = cljs.core.nth.call(null,vec__14485_14556,1,null);var canonical_f_14559 = (cljs.core.truth_(selector_14488)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14487,selector_14488):cljs.core.identity).call(null,factory_14558.call(null,f_14536));dommy.core.update_event_listeners_BANG_.call(null,elem_14487,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_14488,actual_type_14557,f_14536], true),canonical_f_14559);
if(cljs.core.truth_(elem_14487.addEventListener))
{elem_14487.addEventListener(cljs.core.name.call(null,actual_type_14557),canonical_f_14559);
} else
{elem_14487.attachEvent(cljs.core.name.call(null,actual_type_14557),canonical_f_14559);
}
{
var G__14560 = cljs.core.next.call(null,seq__14465_14550__$1);
var G__14561 = null;
var G__14562 = 0;
var G__14563 = 0;
seq__14465_14537 = G__14560;
chunk__14467_14538 = G__14561;
count__14468_14539 = G__14562;
i__14469_14540 = G__14563;
continue;
}
}
} else
{}
}
break;
}
{
var G__14564 = cljs.core.next.call(null,seq__14464_14528__$1);
var G__14565 = null;
var G__14566 = 0;
var G__14567 = 0;
seq__14464_14489 = G__14564;
chunk__14471_14490 = G__14565;
count__14472_14491 = G__14566;
i__14473_14492 = G__14567;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__14568){
var elem_sel = cljs.core.first(arglist__14568);
var type_fs = cljs.core.rest(arglist__14568);
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
var vec__14592_14615 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_14616 = cljs.core.nth.call(null,vec__14592_14615,0,null);var selector_14617 = cljs.core.nth.call(null,vec__14592_14615,1,null);var seq__14593_14618 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__14600_14619 = null;var count__14601_14620 = 0;var i__14602_14621 = 0;while(true){
if((i__14602_14621 < count__14601_14620))
{var vec__14609_14622 = cljs.core._nth.call(null,chunk__14600_14619,i__14602_14621);var orig_type_14623 = cljs.core.nth.call(null,vec__14609_14622,0,null);var f_14624 = cljs.core.nth.call(null,vec__14609_14622,1,null);var seq__14603_14625 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14623,cljs.core.PersistentArrayMap.fromArray([orig_type_14623,cljs.core.identity], true)));var chunk__14605_14626 = null;var count__14606_14627 = 0;var i__14607_14628 = 0;while(true){
if((i__14607_14628 < count__14606_14627))
{var vec__14610_14629 = cljs.core._nth.call(null,chunk__14605_14626,i__14607_14628);var actual_type_14630 = cljs.core.nth.call(null,vec__14610_14629,0,null);var __14631 = cljs.core.nth.call(null,vec__14610_14629,1,null);var keys_14632 = cljs.core.PersistentVector.fromArray([selector_14617,actual_type_14630,f_14624], true);var canonical_f_14633 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14616),keys_14632);dommy.core.update_event_listeners_BANG_.call(null,elem_14616,dommy.utils.dissoc_in,keys_14632);
if(cljs.core.truth_(elem_14616.removeEventListener))
{elem_14616.removeEventListener(cljs.core.name.call(null,actual_type_14630),canonical_f_14633);
} else
{elem_14616.detachEvent(cljs.core.name.call(null,actual_type_14630),canonical_f_14633);
}
{
var G__14634 = seq__14603_14625;
var G__14635 = chunk__14605_14626;
var G__14636 = count__14606_14627;
var G__14637 = (i__14607_14628 + 1);
seq__14603_14625 = G__14634;
chunk__14605_14626 = G__14635;
count__14606_14627 = G__14636;
i__14607_14628 = G__14637;
continue;
}
} else
{var temp__4092__auto___14638 = cljs.core.seq.call(null,seq__14603_14625);if(temp__4092__auto___14638)
{var seq__14603_14639__$1 = temp__4092__auto___14638;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14603_14639__$1))
{var c__6940__auto___14640 = cljs.core.chunk_first.call(null,seq__14603_14639__$1);{
var G__14641 = cljs.core.chunk_rest.call(null,seq__14603_14639__$1);
var G__14642 = c__6940__auto___14640;
var G__14643 = cljs.core.count.call(null,c__6940__auto___14640);
var G__14644 = 0;
seq__14603_14625 = G__14641;
chunk__14605_14626 = G__14642;
count__14606_14627 = G__14643;
i__14607_14628 = G__14644;
continue;
}
} else
{var vec__14611_14645 = cljs.core.first.call(null,seq__14603_14639__$1);var actual_type_14646 = cljs.core.nth.call(null,vec__14611_14645,0,null);var __14647 = cljs.core.nth.call(null,vec__14611_14645,1,null);var keys_14648 = cljs.core.PersistentVector.fromArray([selector_14617,actual_type_14646,f_14624], true);var canonical_f_14649 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14616),keys_14648);dommy.core.update_event_listeners_BANG_.call(null,elem_14616,dommy.utils.dissoc_in,keys_14648);
if(cljs.core.truth_(elem_14616.removeEventListener))
{elem_14616.removeEventListener(cljs.core.name.call(null,actual_type_14646),canonical_f_14649);
} else
{elem_14616.detachEvent(cljs.core.name.call(null,actual_type_14646),canonical_f_14649);
}
{
var G__14650 = cljs.core.next.call(null,seq__14603_14639__$1);
var G__14651 = null;
var G__14652 = 0;
var G__14653 = 0;
seq__14603_14625 = G__14650;
chunk__14605_14626 = G__14651;
count__14606_14627 = G__14652;
i__14607_14628 = G__14653;
continue;
}
}
} else
{}
}
break;
}
{
var G__14654 = seq__14593_14618;
var G__14655 = chunk__14600_14619;
var G__14656 = count__14601_14620;
var G__14657 = (i__14602_14621 + 1);
seq__14593_14618 = G__14654;
chunk__14600_14619 = G__14655;
count__14601_14620 = G__14656;
i__14602_14621 = G__14657;
continue;
}
} else
{var temp__4092__auto___14658 = cljs.core.seq.call(null,seq__14593_14618);if(temp__4092__auto___14658)
{var seq__14593_14659__$1 = temp__4092__auto___14658;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14593_14659__$1))
{var c__6940__auto___14660 = cljs.core.chunk_first.call(null,seq__14593_14659__$1);{
var G__14661 = cljs.core.chunk_rest.call(null,seq__14593_14659__$1);
var G__14662 = c__6940__auto___14660;
var G__14663 = cljs.core.count.call(null,c__6940__auto___14660);
var G__14664 = 0;
seq__14593_14618 = G__14661;
chunk__14600_14619 = G__14662;
count__14601_14620 = G__14663;
i__14602_14621 = G__14664;
continue;
}
} else
{var vec__14612_14665 = cljs.core.first.call(null,seq__14593_14659__$1);var orig_type_14666 = cljs.core.nth.call(null,vec__14612_14665,0,null);var f_14667 = cljs.core.nth.call(null,vec__14612_14665,1,null);var seq__14594_14668 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14666,cljs.core.PersistentArrayMap.fromArray([orig_type_14666,cljs.core.identity], true)));var chunk__14596_14669 = null;var count__14597_14670 = 0;var i__14598_14671 = 0;while(true){
if((i__14598_14671 < count__14597_14670))
{var vec__14613_14672 = cljs.core._nth.call(null,chunk__14596_14669,i__14598_14671);var actual_type_14673 = cljs.core.nth.call(null,vec__14613_14672,0,null);var __14674 = cljs.core.nth.call(null,vec__14613_14672,1,null);var keys_14675 = cljs.core.PersistentVector.fromArray([selector_14617,actual_type_14673,f_14667], true);var canonical_f_14676 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14616),keys_14675);dommy.core.update_event_listeners_BANG_.call(null,elem_14616,dommy.utils.dissoc_in,keys_14675);
if(cljs.core.truth_(elem_14616.removeEventListener))
{elem_14616.removeEventListener(cljs.core.name.call(null,actual_type_14673),canonical_f_14676);
} else
{elem_14616.detachEvent(cljs.core.name.call(null,actual_type_14673),canonical_f_14676);
}
{
var G__14677 = seq__14594_14668;
var G__14678 = chunk__14596_14669;
var G__14679 = count__14597_14670;
var G__14680 = (i__14598_14671 + 1);
seq__14594_14668 = G__14677;
chunk__14596_14669 = G__14678;
count__14597_14670 = G__14679;
i__14598_14671 = G__14680;
continue;
}
} else
{var temp__4092__auto___14681__$1 = cljs.core.seq.call(null,seq__14594_14668);if(temp__4092__auto___14681__$1)
{var seq__14594_14682__$1 = temp__4092__auto___14681__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14594_14682__$1))
{var c__6940__auto___14683 = cljs.core.chunk_first.call(null,seq__14594_14682__$1);{
var G__14684 = cljs.core.chunk_rest.call(null,seq__14594_14682__$1);
var G__14685 = c__6940__auto___14683;
var G__14686 = cljs.core.count.call(null,c__6940__auto___14683);
var G__14687 = 0;
seq__14594_14668 = G__14684;
chunk__14596_14669 = G__14685;
count__14597_14670 = G__14686;
i__14598_14671 = G__14687;
continue;
}
} else
{var vec__14614_14688 = cljs.core.first.call(null,seq__14594_14682__$1);var actual_type_14689 = cljs.core.nth.call(null,vec__14614_14688,0,null);var __14690 = cljs.core.nth.call(null,vec__14614_14688,1,null);var keys_14691 = cljs.core.PersistentVector.fromArray([selector_14617,actual_type_14689,f_14667], true);var canonical_f_14692 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14616),keys_14691);dommy.core.update_event_listeners_BANG_.call(null,elem_14616,dommy.utils.dissoc_in,keys_14691);
if(cljs.core.truth_(elem_14616.removeEventListener))
{elem_14616.removeEventListener(cljs.core.name.call(null,actual_type_14689),canonical_f_14692);
} else
{elem_14616.detachEvent(cljs.core.name.call(null,actual_type_14689),canonical_f_14692);
}
{
var G__14693 = cljs.core.next.call(null,seq__14594_14682__$1);
var G__14694 = null;
var G__14695 = 0;
var G__14696 = 0;
seq__14594_14668 = G__14693;
chunk__14596_14669 = G__14694;
count__14597_14670 = G__14695;
i__14598_14671 = G__14696;
continue;
}
}
} else
{}
}
break;
}
{
var G__14697 = cljs.core.next.call(null,seq__14593_14659__$1);
var G__14698 = null;
var G__14699 = 0;
var G__14700 = 0;
seq__14593_14618 = G__14697;
chunk__14600_14619 = G__14698;
count__14601_14620 = G__14699;
i__14602_14621 = G__14700;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__14701){
var elem_sel = cljs.core.first(arglist__14701);
var type_fs = cljs.core.rest(arglist__14701);
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
var vec__14709_14716 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_14717 = cljs.core.nth.call(null,vec__14709_14716,0,null);var selector_14718 = cljs.core.nth.call(null,vec__14709_14716,1,null);var seq__14710_14719 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__14711_14720 = null;var count__14712_14721 = 0;var i__14713_14722 = 0;while(true){
if((i__14713_14722 < count__14712_14721))
{var vec__14714_14723 = cljs.core._nth.call(null,chunk__14711_14720,i__14713_14722);var type_14724 = cljs.core.nth.call(null,vec__14714_14723,0,null);var f_14725 = cljs.core.nth.call(null,vec__14714_14723,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_14724,((function (seq__14710_14719,chunk__14711_14720,count__14712_14721,i__14713_14722,vec__14714_14723,type_14724,f_14725){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_14724,this_fn);
return f_14725.call(null,e);
});})(seq__14710_14719,chunk__14711_14720,count__14712_14721,i__14713_14722,vec__14714_14723,type_14724,f_14725))
);
{
var G__14726 = seq__14710_14719;
var G__14727 = chunk__14711_14720;
var G__14728 = count__14712_14721;
var G__14729 = (i__14713_14722 + 1);
seq__14710_14719 = G__14726;
chunk__14711_14720 = G__14727;
count__14712_14721 = G__14728;
i__14713_14722 = G__14729;
continue;
}
} else
{var temp__4092__auto___14730 = cljs.core.seq.call(null,seq__14710_14719);if(temp__4092__auto___14730)
{var seq__14710_14731__$1 = temp__4092__auto___14730;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14710_14731__$1))
{var c__6940__auto___14732 = cljs.core.chunk_first.call(null,seq__14710_14731__$1);{
var G__14733 = cljs.core.chunk_rest.call(null,seq__14710_14731__$1);
var G__14734 = c__6940__auto___14732;
var G__14735 = cljs.core.count.call(null,c__6940__auto___14732);
var G__14736 = 0;
seq__14710_14719 = G__14733;
chunk__14711_14720 = G__14734;
count__14712_14721 = G__14735;
i__14713_14722 = G__14736;
continue;
}
} else
{var vec__14715_14737 = cljs.core.first.call(null,seq__14710_14731__$1);var type_14738 = cljs.core.nth.call(null,vec__14715_14737,0,null);var f_14739 = cljs.core.nth.call(null,vec__14715_14737,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_14738,((function (seq__14710_14719,chunk__14711_14720,count__14712_14721,i__14713_14722,vec__14715_14737,type_14738,f_14739,seq__14710_14731__$1,temp__4092__auto___14730){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_14738,this_fn);
return f_14739.call(null,e);
});})(seq__14710_14719,chunk__14711_14720,count__14712_14721,i__14713_14722,vec__14715_14737,type_14738,f_14739,seq__14710_14731__$1,temp__4092__auto___14730))
);
{
var G__14740 = cljs.core.next.call(null,seq__14710_14731__$1);
var G__14741 = null;
var G__14742 = 0;
var G__14743 = 0;
seq__14710_14719 = G__14740;
chunk__14711_14720 = G__14741;
count__14712_14721 = G__14742;
i__14713_14722 = G__14743;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__14744){
var elem_sel = cljs.core.first(arglist__14744);
var type_fs = cljs.core.rest(arglist__14744);
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
var fire_BANG___delegate = function (node,event_type,p__14745){var vec__14747 = p__14745;var update_event_BANG_ = cljs.core.nth.call(null,vec__14747,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__14745 = null;if (arguments.length > 2) {
  p__14745 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__14745);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__14748){
var node = cljs.core.first(arglist__14748);
arglist__14748 = cljs.core.next(arglist__14748);
var event_type = cljs.core.first(arglist__14748);
var p__14745 = cljs.core.rest(arglist__14748);
return fire_BANG___delegate(node,event_type,p__14745);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
