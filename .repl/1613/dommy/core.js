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
var append_BANG___2 = (function (parent,child){var G__27273 = dommy.template.__GT_node_like.call(null,parent);G__27273.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__27273;
});
var append_BANG___3 = (function() { 
var G__27278__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__27274_27279 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__27275_27280 = null;var count__27276_27281 = 0;var i__27277_27282 = 0;while(true){
if((i__27277_27282 < count__27276_27281))
{var c_27283 = cljs.core._nth.call(null,chunk__27275_27280,i__27277_27282);append_BANG_.call(null,parent__$1,c_27283);
{
var G__27284 = seq__27274_27279;
var G__27285 = chunk__27275_27280;
var G__27286 = count__27276_27281;
var G__27287 = (i__27277_27282 + 1);
seq__27274_27279 = G__27284;
chunk__27275_27280 = G__27285;
count__27276_27281 = G__27286;
i__27277_27282 = G__27287;
continue;
}
} else
{var temp__4092__auto___27288 = cljs.core.seq.call(null,seq__27274_27279);if(temp__4092__auto___27288)
{var seq__27274_27289__$1 = temp__4092__auto___27288;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27274_27289__$1))
{var c__19844__auto___27290 = cljs.core.chunk_first.call(null,seq__27274_27289__$1);{
var G__27291 = cljs.core.chunk_rest.call(null,seq__27274_27289__$1);
var G__27292 = c__19844__auto___27290;
var G__27293 = cljs.core.count.call(null,c__19844__auto___27290);
var G__27294 = 0;
seq__27274_27279 = G__27291;
chunk__27275_27280 = G__27292;
count__27276_27281 = G__27293;
i__27277_27282 = G__27294;
continue;
}
} else
{var c_27295 = cljs.core.first.call(null,seq__27274_27289__$1);append_BANG_.call(null,parent__$1,c_27295);
{
var G__27296 = cljs.core.next.call(null,seq__27274_27289__$1);
var G__27297 = null;
var G__27298 = 0;
var G__27299 = 0;
seq__27274_27279 = G__27296;
chunk__27275_27280 = G__27297;
count__27276_27281 = G__27298;
i__27277_27282 = G__27299;
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
var G__27278 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__27278__delegate.call(this,parent,child,more_children);};
G__27278.cljs$lang$maxFixedArity = 2;
G__27278.cljs$lang$applyTo = (function (arglist__27300){
var parent = cljs.core.first(arglist__27300);
arglist__27300 = cljs.core.next(arglist__27300);
var child = cljs.core.first(arglist__27300);
var more_children = cljs.core.rest(arglist__27300);
return G__27278__delegate(parent,child,more_children);
});
G__27278.cljs$core$IFn$_invoke$arity$variadic = G__27278__delegate;
return G__27278;
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
var prepend_BANG___2 = (function (parent,child){var G__27306 = dommy.template.__GT_node_like.call(null,parent);G__27306.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__27306;
});
var prepend_BANG___3 = (function() { 
var G__27311__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__27307_27312 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__27308_27313 = null;var count__27309_27314 = 0;var i__27310_27315 = 0;while(true){
if((i__27310_27315 < count__27309_27314))
{var c_27316 = cljs.core._nth.call(null,chunk__27308_27313,i__27310_27315);prepend_BANG_.call(null,parent__$1,c_27316);
{
var G__27317 = seq__27307_27312;
var G__27318 = chunk__27308_27313;
var G__27319 = count__27309_27314;
var G__27320 = (i__27310_27315 + 1);
seq__27307_27312 = G__27317;
chunk__27308_27313 = G__27318;
count__27309_27314 = G__27319;
i__27310_27315 = G__27320;
continue;
}
} else
{var temp__4092__auto___27321 = cljs.core.seq.call(null,seq__27307_27312);if(temp__4092__auto___27321)
{var seq__27307_27322__$1 = temp__4092__auto___27321;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27307_27322__$1))
{var c__19844__auto___27323 = cljs.core.chunk_first.call(null,seq__27307_27322__$1);{
var G__27324 = cljs.core.chunk_rest.call(null,seq__27307_27322__$1);
var G__27325 = c__19844__auto___27323;
var G__27326 = cljs.core.count.call(null,c__19844__auto___27323);
var G__27327 = 0;
seq__27307_27312 = G__27324;
chunk__27308_27313 = G__27325;
count__27309_27314 = G__27326;
i__27310_27315 = G__27327;
continue;
}
} else
{var c_27328 = cljs.core.first.call(null,seq__27307_27322__$1);prepend_BANG_.call(null,parent__$1,c_27328);
{
var G__27329 = cljs.core.next.call(null,seq__27307_27322__$1);
var G__27330 = null;
var G__27331 = 0;
var G__27332 = 0;
seq__27307_27312 = G__27329;
chunk__27308_27313 = G__27330;
count__27309_27314 = G__27331;
i__27310_27315 = G__27332;
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
var G__27311 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__27311__delegate.call(this,parent,child,more_children);};
G__27311.cljs$lang$maxFixedArity = 2;
G__27311.cljs$lang$applyTo = (function (arglist__27333){
var parent = cljs.core.first(arglist__27333);
arglist__27333 = cljs.core.next(arglist__27333);
var child = cljs.core.first(arglist__27333);
var more_children = cljs.core.rest(arglist__27333);
return G__27311__delegate(parent,child,more_children);
});
G__27311.cljs$core$IFn$_invoke$arity$variadic = G__27311__delegate;
return G__27311;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___27334 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___27334))
{var next_27335 = temp__4090__auto___27334;parent.insertBefore(actual_node,next_27335);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__27337 = dommy.template.__GT_node_like.call(null,parent);G__27337.innerHTML = "";
dommy.core.append_BANG_.call(null,G__27337,node_like);
return G__27337;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__27339 = elem__$1.parentNode;G__27339.removeChild(elem__$1);
return G__27339;
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
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__27340_SHARP_){return p1__27340_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__27341_SHARP_){return !((p1__27341_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__27342){var vec__27343 = p__27342;var special_mouse_event = cljs.core.nth.call(null,vec__27343,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__27343,1,null);return cljs.core.PersistentVector.fromArray([special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3943__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3943__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__27344){
var elem = cljs.core.first(arglist__27344);
arglist__27344 = cljs.core.next(arglist__27344);
var f = cljs.core.first(arglist__27344);
var args = cljs.core.rest(arglist__27344);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__27345_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__27345_SHARP_));
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
var vec__27369_27392 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_27393 = cljs.core.nth.call(null,vec__27369_27392,0,null);var selector_27394 = cljs.core.nth.call(null,vec__27369_27392,1,null);var seq__27370_27395 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__27377_27396 = null;var count__27378_27397 = 0;var i__27379_27398 = 0;while(true){
if((i__27379_27398 < count__27378_27397))
{var vec__27386_27399 = cljs.core._nth.call(null,chunk__27377_27396,i__27379_27398);var orig_type_27400 = cljs.core.nth.call(null,vec__27386_27399,0,null);var f_27401 = cljs.core.nth.call(null,vec__27386_27399,1,null);var seq__27380_27402 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_27400,cljs.core.PersistentArrayMap.fromArray([orig_type_27400,cljs.core.identity], true)));var chunk__27382_27403 = null;var count__27383_27404 = 0;var i__27384_27405 = 0;while(true){
if((i__27384_27405 < count__27383_27404))
{var vec__27387_27406 = cljs.core._nth.call(null,chunk__27382_27403,i__27384_27405);var actual_type_27407 = cljs.core.nth.call(null,vec__27387_27406,0,null);var factory_27408 = cljs.core.nth.call(null,vec__27387_27406,1,null);var canonical_f_27409 = (cljs.core.truth_(selector_27394)?cljs.core.partial.call(null,dommy.core.live_listener,elem_27393,selector_27394):cljs.core.identity).call(null,factory_27408.call(null,f_27401));dommy.core.update_event_listeners_BANG_.call(null,elem_27393,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_27394,actual_type_27407,f_27401], true),canonical_f_27409);
if(cljs.core.truth_(elem_27393.addEventListener))
{elem_27393.addEventListener(cljs.core.name.call(null,actual_type_27407),canonical_f_27409);
} else
{elem_27393.attachEvent(cljs.core.name.call(null,actual_type_27407),canonical_f_27409);
}
{
var G__27410 = seq__27380_27402;
var G__27411 = chunk__27382_27403;
var G__27412 = count__27383_27404;
var G__27413 = (i__27384_27405 + 1);
seq__27380_27402 = G__27410;
chunk__27382_27403 = G__27411;
count__27383_27404 = G__27412;
i__27384_27405 = G__27413;
continue;
}
} else
{var temp__4092__auto___27414 = cljs.core.seq.call(null,seq__27380_27402);if(temp__4092__auto___27414)
{var seq__27380_27415__$1 = temp__4092__auto___27414;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27380_27415__$1))
{var c__19844__auto___27416 = cljs.core.chunk_first.call(null,seq__27380_27415__$1);{
var G__27417 = cljs.core.chunk_rest.call(null,seq__27380_27415__$1);
var G__27418 = c__19844__auto___27416;
var G__27419 = cljs.core.count.call(null,c__19844__auto___27416);
var G__27420 = 0;
seq__27380_27402 = G__27417;
chunk__27382_27403 = G__27418;
count__27383_27404 = G__27419;
i__27384_27405 = G__27420;
continue;
}
} else
{var vec__27388_27421 = cljs.core.first.call(null,seq__27380_27415__$1);var actual_type_27422 = cljs.core.nth.call(null,vec__27388_27421,0,null);var factory_27423 = cljs.core.nth.call(null,vec__27388_27421,1,null);var canonical_f_27424 = (cljs.core.truth_(selector_27394)?cljs.core.partial.call(null,dommy.core.live_listener,elem_27393,selector_27394):cljs.core.identity).call(null,factory_27423.call(null,f_27401));dommy.core.update_event_listeners_BANG_.call(null,elem_27393,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_27394,actual_type_27422,f_27401], true),canonical_f_27424);
if(cljs.core.truth_(elem_27393.addEventListener))
{elem_27393.addEventListener(cljs.core.name.call(null,actual_type_27422),canonical_f_27424);
} else
{elem_27393.attachEvent(cljs.core.name.call(null,actual_type_27422),canonical_f_27424);
}
{
var G__27425 = cljs.core.next.call(null,seq__27380_27415__$1);
var G__27426 = null;
var G__27427 = 0;
var G__27428 = 0;
seq__27380_27402 = G__27425;
chunk__27382_27403 = G__27426;
count__27383_27404 = G__27427;
i__27384_27405 = G__27428;
continue;
}
}
} else
{}
}
break;
}
{
var G__27429 = seq__27370_27395;
var G__27430 = chunk__27377_27396;
var G__27431 = count__27378_27397;
var G__27432 = (i__27379_27398 + 1);
seq__27370_27395 = G__27429;
chunk__27377_27396 = G__27430;
count__27378_27397 = G__27431;
i__27379_27398 = G__27432;
continue;
}
} else
{var temp__4092__auto___27433 = cljs.core.seq.call(null,seq__27370_27395);if(temp__4092__auto___27433)
{var seq__27370_27434__$1 = temp__4092__auto___27433;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27370_27434__$1))
{var c__19844__auto___27435 = cljs.core.chunk_first.call(null,seq__27370_27434__$1);{
var G__27436 = cljs.core.chunk_rest.call(null,seq__27370_27434__$1);
var G__27437 = c__19844__auto___27435;
var G__27438 = cljs.core.count.call(null,c__19844__auto___27435);
var G__27439 = 0;
seq__27370_27395 = G__27436;
chunk__27377_27396 = G__27437;
count__27378_27397 = G__27438;
i__27379_27398 = G__27439;
continue;
}
} else
{var vec__27389_27440 = cljs.core.first.call(null,seq__27370_27434__$1);var orig_type_27441 = cljs.core.nth.call(null,vec__27389_27440,0,null);var f_27442 = cljs.core.nth.call(null,vec__27389_27440,1,null);var seq__27371_27443 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_27441,cljs.core.PersistentArrayMap.fromArray([orig_type_27441,cljs.core.identity], true)));var chunk__27373_27444 = null;var count__27374_27445 = 0;var i__27375_27446 = 0;while(true){
if((i__27375_27446 < count__27374_27445))
{var vec__27390_27447 = cljs.core._nth.call(null,chunk__27373_27444,i__27375_27446);var actual_type_27448 = cljs.core.nth.call(null,vec__27390_27447,0,null);var factory_27449 = cljs.core.nth.call(null,vec__27390_27447,1,null);var canonical_f_27450 = (cljs.core.truth_(selector_27394)?cljs.core.partial.call(null,dommy.core.live_listener,elem_27393,selector_27394):cljs.core.identity).call(null,factory_27449.call(null,f_27442));dommy.core.update_event_listeners_BANG_.call(null,elem_27393,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_27394,actual_type_27448,f_27442], true),canonical_f_27450);
if(cljs.core.truth_(elem_27393.addEventListener))
{elem_27393.addEventListener(cljs.core.name.call(null,actual_type_27448),canonical_f_27450);
} else
{elem_27393.attachEvent(cljs.core.name.call(null,actual_type_27448),canonical_f_27450);
}
{
var G__27451 = seq__27371_27443;
var G__27452 = chunk__27373_27444;
var G__27453 = count__27374_27445;
var G__27454 = (i__27375_27446 + 1);
seq__27371_27443 = G__27451;
chunk__27373_27444 = G__27452;
count__27374_27445 = G__27453;
i__27375_27446 = G__27454;
continue;
}
} else
{var temp__4092__auto___27455__$1 = cljs.core.seq.call(null,seq__27371_27443);if(temp__4092__auto___27455__$1)
{var seq__27371_27456__$1 = temp__4092__auto___27455__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27371_27456__$1))
{var c__19844__auto___27457 = cljs.core.chunk_first.call(null,seq__27371_27456__$1);{
var G__27458 = cljs.core.chunk_rest.call(null,seq__27371_27456__$1);
var G__27459 = c__19844__auto___27457;
var G__27460 = cljs.core.count.call(null,c__19844__auto___27457);
var G__27461 = 0;
seq__27371_27443 = G__27458;
chunk__27373_27444 = G__27459;
count__27374_27445 = G__27460;
i__27375_27446 = G__27461;
continue;
}
} else
{var vec__27391_27462 = cljs.core.first.call(null,seq__27371_27456__$1);var actual_type_27463 = cljs.core.nth.call(null,vec__27391_27462,0,null);var factory_27464 = cljs.core.nth.call(null,vec__27391_27462,1,null);var canonical_f_27465 = (cljs.core.truth_(selector_27394)?cljs.core.partial.call(null,dommy.core.live_listener,elem_27393,selector_27394):cljs.core.identity).call(null,factory_27464.call(null,f_27442));dommy.core.update_event_listeners_BANG_.call(null,elem_27393,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_27394,actual_type_27463,f_27442], true),canonical_f_27465);
if(cljs.core.truth_(elem_27393.addEventListener))
{elem_27393.addEventListener(cljs.core.name.call(null,actual_type_27463),canonical_f_27465);
} else
{elem_27393.attachEvent(cljs.core.name.call(null,actual_type_27463),canonical_f_27465);
}
{
var G__27466 = cljs.core.next.call(null,seq__27371_27456__$1);
var G__27467 = null;
var G__27468 = 0;
var G__27469 = 0;
seq__27371_27443 = G__27466;
chunk__27373_27444 = G__27467;
count__27374_27445 = G__27468;
i__27375_27446 = G__27469;
continue;
}
}
} else
{}
}
break;
}
{
var G__27470 = cljs.core.next.call(null,seq__27370_27434__$1);
var G__27471 = null;
var G__27472 = 0;
var G__27473 = 0;
seq__27370_27395 = G__27470;
chunk__27377_27396 = G__27471;
count__27378_27397 = G__27472;
i__27379_27398 = G__27473;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__27474){
var elem_sel = cljs.core.first(arglist__27474);
var type_fs = cljs.core.rest(arglist__27474);
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
var vec__27498_27521 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_27522 = cljs.core.nth.call(null,vec__27498_27521,0,null);var selector_27523 = cljs.core.nth.call(null,vec__27498_27521,1,null);var seq__27499_27524 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__27506_27525 = null;var count__27507_27526 = 0;var i__27508_27527 = 0;while(true){
if((i__27508_27527 < count__27507_27526))
{var vec__27515_27528 = cljs.core._nth.call(null,chunk__27506_27525,i__27508_27527);var orig_type_27529 = cljs.core.nth.call(null,vec__27515_27528,0,null);var f_27530 = cljs.core.nth.call(null,vec__27515_27528,1,null);var seq__27509_27531 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_27529,cljs.core.PersistentArrayMap.fromArray([orig_type_27529,cljs.core.identity], true)));var chunk__27511_27532 = null;var count__27512_27533 = 0;var i__27513_27534 = 0;while(true){
if((i__27513_27534 < count__27512_27533))
{var vec__27516_27535 = cljs.core._nth.call(null,chunk__27511_27532,i__27513_27534);var actual_type_27536 = cljs.core.nth.call(null,vec__27516_27535,0,null);var __27537 = cljs.core.nth.call(null,vec__27516_27535,1,null);var keys_27538 = cljs.core.PersistentVector.fromArray([selector_27523,actual_type_27536,f_27530], true);var canonical_f_27539 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_27522),keys_27538);dommy.core.update_event_listeners_BANG_.call(null,elem_27522,dommy.utils.dissoc_in,keys_27538);
if(cljs.core.truth_(elem_27522.removeEventListener))
{elem_27522.removeEventListener(cljs.core.name.call(null,actual_type_27536),canonical_f_27539);
} else
{elem_27522.detachEvent(cljs.core.name.call(null,actual_type_27536),canonical_f_27539);
}
{
var G__27540 = seq__27509_27531;
var G__27541 = chunk__27511_27532;
var G__27542 = count__27512_27533;
var G__27543 = (i__27513_27534 + 1);
seq__27509_27531 = G__27540;
chunk__27511_27532 = G__27541;
count__27512_27533 = G__27542;
i__27513_27534 = G__27543;
continue;
}
} else
{var temp__4092__auto___27544 = cljs.core.seq.call(null,seq__27509_27531);if(temp__4092__auto___27544)
{var seq__27509_27545__$1 = temp__4092__auto___27544;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27509_27545__$1))
{var c__19844__auto___27546 = cljs.core.chunk_first.call(null,seq__27509_27545__$1);{
var G__27547 = cljs.core.chunk_rest.call(null,seq__27509_27545__$1);
var G__27548 = c__19844__auto___27546;
var G__27549 = cljs.core.count.call(null,c__19844__auto___27546);
var G__27550 = 0;
seq__27509_27531 = G__27547;
chunk__27511_27532 = G__27548;
count__27512_27533 = G__27549;
i__27513_27534 = G__27550;
continue;
}
} else
{var vec__27517_27551 = cljs.core.first.call(null,seq__27509_27545__$1);var actual_type_27552 = cljs.core.nth.call(null,vec__27517_27551,0,null);var __27553 = cljs.core.nth.call(null,vec__27517_27551,1,null);var keys_27554 = cljs.core.PersistentVector.fromArray([selector_27523,actual_type_27552,f_27530], true);var canonical_f_27555 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_27522),keys_27554);dommy.core.update_event_listeners_BANG_.call(null,elem_27522,dommy.utils.dissoc_in,keys_27554);
if(cljs.core.truth_(elem_27522.removeEventListener))
{elem_27522.removeEventListener(cljs.core.name.call(null,actual_type_27552),canonical_f_27555);
} else
{elem_27522.detachEvent(cljs.core.name.call(null,actual_type_27552),canonical_f_27555);
}
{
var G__27556 = cljs.core.next.call(null,seq__27509_27545__$1);
var G__27557 = null;
var G__27558 = 0;
var G__27559 = 0;
seq__27509_27531 = G__27556;
chunk__27511_27532 = G__27557;
count__27512_27533 = G__27558;
i__27513_27534 = G__27559;
continue;
}
}
} else
{}
}
break;
}
{
var G__27560 = seq__27499_27524;
var G__27561 = chunk__27506_27525;
var G__27562 = count__27507_27526;
var G__27563 = (i__27508_27527 + 1);
seq__27499_27524 = G__27560;
chunk__27506_27525 = G__27561;
count__27507_27526 = G__27562;
i__27508_27527 = G__27563;
continue;
}
} else
{var temp__4092__auto___27564 = cljs.core.seq.call(null,seq__27499_27524);if(temp__4092__auto___27564)
{var seq__27499_27565__$1 = temp__4092__auto___27564;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27499_27565__$1))
{var c__19844__auto___27566 = cljs.core.chunk_first.call(null,seq__27499_27565__$1);{
var G__27567 = cljs.core.chunk_rest.call(null,seq__27499_27565__$1);
var G__27568 = c__19844__auto___27566;
var G__27569 = cljs.core.count.call(null,c__19844__auto___27566);
var G__27570 = 0;
seq__27499_27524 = G__27567;
chunk__27506_27525 = G__27568;
count__27507_27526 = G__27569;
i__27508_27527 = G__27570;
continue;
}
} else
{var vec__27518_27571 = cljs.core.first.call(null,seq__27499_27565__$1);var orig_type_27572 = cljs.core.nth.call(null,vec__27518_27571,0,null);var f_27573 = cljs.core.nth.call(null,vec__27518_27571,1,null);var seq__27500_27574 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_27572,cljs.core.PersistentArrayMap.fromArray([orig_type_27572,cljs.core.identity], true)));var chunk__27502_27575 = null;var count__27503_27576 = 0;var i__27504_27577 = 0;while(true){
if((i__27504_27577 < count__27503_27576))
{var vec__27519_27578 = cljs.core._nth.call(null,chunk__27502_27575,i__27504_27577);var actual_type_27579 = cljs.core.nth.call(null,vec__27519_27578,0,null);var __27580 = cljs.core.nth.call(null,vec__27519_27578,1,null);var keys_27581 = cljs.core.PersistentVector.fromArray([selector_27523,actual_type_27579,f_27573], true);var canonical_f_27582 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_27522),keys_27581);dommy.core.update_event_listeners_BANG_.call(null,elem_27522,dommy.utils.dissoc_in,keys_27581);
if(cljs.core.truth_(elem_27522.removeEventListener))
{elem_27522.removeEventListener(cljs.core.name.call(null,actual_type_27579),canonical_f_27582);
} else
{elem_27522.detachEvent(cljs.core.name.call(null,actual_type_27579),canonical_f_27582);
}
{
var G__27583 = seq__27500_27574;
var G__27584 = chunk__27502_27575;
var G__27585 = count__27503_27576;
var G__27586 = (i__27504_27577 + 1);
seq__27500_27574 = G__27583;
chunk__27502_27575 = G__27584;
count__27503_27576 = G__27585;
i__27504_27577 = G__27586;
continue;
}
} else
{var temp__4092__auto___27587__$1 = cljs.core.seq.call(null,seq__27500_27574);if(temp__4092__auto___27587__$1)
{var seq__27500_27588__$1 = temp__4092__auto___27587__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27500_27588__$1))
{var c__19844__auto___27589 = cljs.core.chunk_first.call(null,seq__27500_27588__$1);{
var G__27590 = cljs.core.chunk_rest.call(null,seq__27500_27588__$1);
var G__27591 = c__19844__auto___27589;
var G__27592 = cljs.core.count.call(null,c__19844__auto___27589);
var G__27593 = 0;
seq__27500_27574 = G__27590;
chunk__27502_27575 = G__27591;
count__27503_27576 = G__27592;
i__27504_27577 = G__27593;
continue;
}
} else
{var vec__27520_27594 = cljs.core.first.call(null,seq__27500_27588__$1);var actual_type_27595 = cljs.core.nth.call(null,vec__27520_27594,0,null);var __27596 = cljs.core.nth.call(null,vec__27520_27594,1,null);var keys_27597 = cljs.core.PersistentVector.fromArray([selector_27523,actual_type_27595,f_27573], true);var canonical_f_27598 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_27522),keys_27597);dommy.core.update_event_listeners_BANG_.call(null,elem_27522,dommy.utils.dissoc_in,keys_27597);
if(cljs.core.truth_(elem_27522.removeEventListener))
{elem_27522.removeEventListener(cljs.core.name.call(null,actual_type_27595),canonical_f_27598);
} else
{elem_27522.detachEvent(cljs.core.name.call(null,actual_type_27595),canonical_f_27598);
}
{
var G__27599 = cljs.core.next.call(null,seq__27500_27588__$1);
var G__27600 = null;
var G__27601 = 0;
var G__27602 = 0;
seq__27500_27574 = G__27599;
chunk__27502_27575 = G__27600;
count__27503_27576 = G__27601;
i__27504_27577 = G__27602;
continue;
}
}
} else
{}
}
break;
}
{
var G__27603 = cljs.core.next.call(null,seq__27499_27565__$1);
var G__27604 = null;
var G__27605 = 0;
var G__27606 = 0;
seq__27499_27524 = G__27603;
chunk__27506_27525 = G__27604;
count__27507_27526 = G__27605;
i__27508_27527 = G__27606;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__27607){
var elem_sel = cljs.core.first(arglist__27607);
var type_fs = cljs.core.rest(arglist__27607);
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
var vec__27615_27622 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_27623 = cljs.core.nth.call(null,vec__27615_27622,0,null);var selector_27624 = cljs.core.nth.call(null,vec__27615_27622,1,null);var seq__27616_27625 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__27617_27626 = null;var count__27618_27627 = 0;var i__27619_27628 = 0;while(true){
if((i__27619_27628 < count__27618_27627))
{var vec__27620_27629 = cljs.core._nth.call(null,chunk__27617_27626,i__27619_27628);var type_27630 = cljs.core.nth.call(null,vec__27620_27629,0,null);var f_27631 = cljs.core.nth.call(null,vec__27620_27629,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_27630,((function (seq__27616_27625,chunk__27617_27626,count__27618_27627,i__27619_27628,vec__27620_27629,type_27630,f_27631){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_27630,this_fn);
return f_27631.call(null,e);
});})(seq__27616_27625,chunk__27617_27626,count__27618_27627,i__27619_27628,vec__27620_27629,type_27630,f_27631))
);
{
var G__27632 = seq__27616_27625;
var G__27633 = chunk__27617_27626;
var G__27634 = count__27618_27627;
var G__27635 = (i__27619_27628 + 1);
seq__27616_27625 = G__27632;
chunk__27617_27626 = G__27633;
count__27618_27627 = G__27634;
i__27619_27628 = G__27635;
continue;
}
} else
{var temp__4092__auto___27636 = cljs.core.seq.call(null,seq__27616_27625);if(temp__4092__auto___27636)
{var seq__27616_27637__$1 = temp__4092__auto___27636;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27616_27637__$1))
{var c__19844__auto___27638 = cljs.core.chunk_first.call(null,seq__27616_27637__$1);{
var G__27639 = cljs.core.chunk_rest.call(null,seq__27616_27637__$1);
var G__27640 = c__19844__auto___27638;
var G__27641 = cljs.core.count.call(null,c__19844__auto___27638);
var G__27642 = 0;
seq__27616_27625 = G__27639;
chunk__27617_27626 = G__27640;
count__27618_27627 = G__27641;
i__27619_27628 = G__27642;
continue;
}
} else
{var vec__27621_27643 = cljs.core.first.call(null,seq__27616_27637__$1);var type_27644 = cljs.core.nth.call(null,vec__27621_27643,0,null);var f_27645 = cljs.core.nth.call(null,vec__27621_27643,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_27644,((function (seq__27616_27625,chunk__27617_27626,count__27618_27627,i__27619_27628,vec__27621_27643,type_27644,f_27645,seq__27616_27637__$1,temp__4092__auto___27636){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_27644,this_fn);
return f_27645.call(null,e);
});})(seq__27616_27625,chunk__27617_27626,count__27618_27627,i__27619_27628,vec__27621_27643,type_27644,f_27645,seq__27616_27637__$1,temp__4092__auto___27636))
);
{
var G__27646 = cljs.core.next.call(null,seq__27616_27637__$1);
var G__27647 = null;
var G__27648 = 0;
var G__27649 = 0;
seq__27616_27625 = G__27646;
chunk__27617_27626 = G__27647;
count__27618_27627 = G__27648;
i__27619_27628 = G__27649;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__27650){
var elem_sel = cljs.core.first(arglist__27650);
var type_fs = cljs.core.rest(arglist__27650);
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
var fire_BANG___delegate = function (node,event_type,p__27651){var vec__27653 = p__27651;var update_event_BANG_ = cljs.core.nth.call(null,vec__27653,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__27651 = null;if (arguments.length > 2) {
  p__27651 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__27651);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__27654){
var node = cljs.core.first(arglist__27654);
arglist__27654 = cljs.core.next(arglist__27654);
var event_type = cljs.core.first(arglist__27654);
var p__27651 = cljs.core.rest(arglist__27654);
return fire_BANG___delegate(node,event_type,p__27651);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
