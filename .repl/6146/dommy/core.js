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
var append_BANG___2 = (function (parent,child){var G__14055 = dommy.template.__GT_node_like.call(null,parent);G__14055.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__14055;
});
var append_BANG___3 = (function() { 
var G__14060__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__14056_14061 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__14057_14062 = null;var count__14058_14063 = 0;var i__14059_14064 = 0;while(true){
if((i__14059_14064 < count__14058_14063))
{var c_14065 = cljs.core._nth.call(null,chunk__14057_14062,i__14059_14064);append_BANG_.call(null,parent__$1,c_14065);
{
var G__14066 = seq__14056_14061;
var G__14067 = chunk__14057_14062;
var G__14068 = count__14058_14063;
var G__14069 = (i__14059_14064 + 1);
seq__14056_14061 = G__14066;
chunk__14057_14062 = G__14067;
count__14058_14063 = G__14068;
i__14059_14064 = G__14069;
continue;
}
} else
{var temp__4092__auto___14070 = cljs.core.seq.call(null,seq__14056_14061);if(temp__4092__auto___14070)
{var seq__14056_14071__$1 = temp__4092__auto___14070;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14056_14071__$1))
{var c__6912__auto___14072 = cljs.core.chunk_first.call(null,seq__14056_14071__$1);{
var G__14073 = cljs.core.chunk_rest.call(null,seq__14056_14071__$1);
var G__14074 = c__6912__auto___14072;
var G__14075 = cljs.core.count.call(null,c__6912__auto___14072);
var G__14076 = 0;
seq__14056_14061 = G__14073;
chunk__14057_14062 = G__14074;
count__14058_14063 = G__14075;
i__14059_14064 = G__14076;
continue;
}
} else
{var c_14077 = cljs.core.first.call(null,seq__14056_14071__$1);append_BANG_.call(null,parent__$1,c_14077);
{
var G__14078 = cljs.core.next.call(null,seq__14056_14071__$1);
var G__14079 = null;
var G__14080 = 0;
var G__14081 = 0;
seq__14056_14061 = G__14078;
chunk__14057_14062 = G__14079;
count__14058_14063 = G__14080;
i__14059_14064 = G__14081;
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
var G__14060 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14060__delegate.call(this,parent,child,more_children);};
G__14060.cljs$lang$maxFixedArity = 2;
G__14060.cljs$lang$applyTo = (function (arglist__14082){
var parent = cljs.core.first(arglist__14082);
arglist__14082 = cljs.core.next(arglist__14082);
var child = cljs.core.first(arglist__14082);
var more_children = cljs.core.rest(arglist__14082);
return G__14060__delegate(parent,child,more_children);
});
G__14060.cljs$core$IFn$_invoke$arity$variadic = G__14060__delegate;
return G__14060;
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
var prepend_BANG___2 = (function (parent,child){var G__14088 = dommy.template.__GT_node_like.call(null,parent);G__14088.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__14088;
});
var prepend_BANG___3 = (function() { 
var G__14093__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__14089_14094 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__14090_14095 = null;var count__14091_14096 = 0;var i__14092_14097 = 0;while(true){
if((i__14092_14097 < count__14091_14096))
{var c_14098 = cljs.core._nth.call(null,chunk__14090_14095,i__14092_14097);prepend_BANG_.call(null,parent__$1,c_14098);
{
var G__14099 = seq__14089_14094;
var G__14100 = chunk__14090_14095;
var G__14101 = count__14091_14096;
var G__14102 = (i__14092_14097 + 1);
seq__14089_14094 = G__14099;
chunk__14090_14095 = G__14100;
count__14091_14096 = G__14101;
i__14092_14097 = G__14102;
continue;
}
} else
{var temp__4092__auto___14103 = cljs.core.seq.call(null,seq__14089_14094);if(temp__4092__auto___14103)
{var seq__14089_14104__$1 = temp__4092__auto___14103;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14089_14104__$1))
{var c__6912__auto___14105 = cljs.core.chunk_first.call(null,seq__14089_14104__$1);{
var G__14106 = cljs.core.chunk_rest.call(null,seq__14089_14104__$1);
var G__14107 = c__6912__auto___14105;
var G__14108 = cljs.core.count.call(null,c__6912__auto___14105);
var G__14109 = 0;
seq__14089_14094 = G__14106;
chunk__14090_14095 = G__14107;
count__14091_14096 = G__14108;
i__14092_14097 = G__14109;
continue;
}
} else
{var c_14110 = cljs.core.first.call(null,seq__14089_14104__$1);prepend_BANG_.call(null,parent__$1,c_14110);
{
var G__14111 = cljs.core.next.call(null,seq__14089_14104__$1);
var G__14112 = null;
var G__14113 = 0;
var G__14114 = 0;
seq__14089_14094 = G__14111;
chunk__14090_14095 = G__14112;
count__14091_14096 = G__14113;
i__14092_14097 = G__14114;
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
var G__14093 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14093__delegate.call(this,parent,child,more_children);};
G__14093.cljs$lang$maxFixedArity = 2;
G__14093.cljs$lang$applyTo = (function (arglist__14115){
var parent = cljs.core.first(arglist__14115);
arglist__14115 = cljs.core.next(arglist__14115);
var child = cljs.core.first(arglist__14115);
var more_children = cljs.core.rest(arglist__14115);
return G__14093__delegate(parent,child,more_children);
});
G__14093.cljs$core$IFn$_invoke$arity$variadic = G__14093__delegate;
return G__14093;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___14116 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___14116))
{var next_14117 = temp__4090__auto___14116;parent.insertBefore(actual_node,next_14117);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__14119 = dommy.template.__GT_node_like.call(null,parent);G__14119.innerHTML = "";
dommy.core.append_BANG_.call(null,G__14119,node_like);
return G__14119;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__14121 = elem__$1.parentNode;G__14121.removeChild(elem__$1);
return G__14121;
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
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__14122_SHARP_){return p1__14122_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__14123_SHARP_){return !((p1__14123_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__14124){var vec__14125 = p__14124;var special_mouse_event = cljs.core.nth.call(null,vec__14125,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__14125,1,null);return cljs.core.PersistentVector.fromArray([special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3943__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3943__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__14126){
var elem = cljs.core.first(arglist__14126);
arglist__14126 = cljs.core.next(arglist__14126);
var f = cljs.core.first(arglist__14126);
var args = cljs.core.rest(arglist__14126);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__14127_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__14127_SHARP_));
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
var vec__14151_14174 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_14175 = cljs.core.nth.call(null,vec__14151_14174,0,null);var selector_14176 = cljs.core.nth.call(null,vec__14151_14174,1,null);var seq__14152_14177 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__14159_14178 = null;var count__14160_14179 = 0;var i__14161_14180 = 0;while(true){
if((i__14161_14180 < count__14160_14179))
{var vec__14168_14181 = cljs.core._nth.call(null,chunk__14159_14178,i__14161_14180);var orig_type_14182 = cljs.core.nth.call(null,vec__14168_14181,0,null);var f_14183 = cljs.core.nth.call(null,vec__14168_14181,1,null);var seq__14162_14184 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14182,cljs.core.PersistentArrayMap.fromArray([orig_type_14182,cljs.core.identity], true)));var chunk__14164_14185 = null;var count__14165_14186 = 0;var i__14166_14187 = 0;while(true){
if((i__14166_14187 < count__14165_14186))
{var vec__14169_14188 = cljs.core._nth.call(null,chunk__14164_14185,i__14166_14187);var actual_type_14189 = cljs.core.nth.call(null,vec__14169_14188,0,null);var factory_14190 = cljs.core.nth.call(null,vec__14169_14188,1,null);var canonical_f_14191 = (cljs.core.truth_(selector_14176)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14175,selector_14176):cljs.core.identity).call(null,factory_14190.call(null,f_14183));dommy.core.update_event_listeners_BANG_.call(null,elem_14175,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_14176,actual_type_14189,f_14183], true),canonical_f_14191);
if(cljs.core.truth_(elem_14175.addEventListener))
{elem_14175.addEventListener(cljs.core.name.call(null,actual_type_14189),canonical_f_14191);
} else
{elem_14175.attachEvent(cljs.core.name.call(null,actual_type_14189),canonical_f_14191);
}
{
var G__14192 = seq__14162_14184;
var G__14193 = chunk__14164_14185;
var G__14194 = count__14165_14186;
var G__14195 = (i__14166_14187 + 1);
seq__14162_14184 = G__14192;
chunk__14164_14185 = G__14193;
count__14165_14186 = G__14194;
i__14166_14187 = G__14195;
continue;
}
} else
{var temp__4092__auto___14196 = cljs.core.seq.call(null,seq__14162_14184);if(temp__4092__auto___14196)
{var seq__14162_14197__$1 = temp__4092__auto___14196;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14162_14197__$1))
{var c__6912__auto___14198 = cljs.core.chunk_first.call(null,seq__14162_14197__$1);{
var G__14199 = cljs.core.chunk_rest.call(null,seq__14162_14197__$1);
var G__14200 = c__6912__auto___14198;
var G__14201 = cljs.core.count.call(null,c__6912__auto___14198);
var G__14202 = 0;
seq__14162_14184 = G__14199;
chunk__14164_14185 = G__14200;
count__14165_14186 = G__14201;
i__14166_14187 = G__14202;
continue;
}
} else
{var vec__14170_14203 = cljs.core.first.call(null,seq__14162_14197__$1);var actual_type_14204 = cljs.core.nth.call(null,vec__14170_14203,0,null);var factory_14205 = cljs.core.nth.call(null,vec__14170_14203,1,null);var canonical_f_14206 = (cljs.core.truth_(selector_14176)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14175,selector_14176):cljs.core.identity).call(null,factory_14205.call(null,f_14183));dommy.core.update_event_listeners_BANG_.call(null,elem_14175,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_14176,actual_type_14204,f_14183], true),canonical_f_14206);
if(cljs.core.truth_(elem_14175.addEventListener))
{elem_14175.addEventListener(cljs.core.name.call(null,actual_type_14204),canonical_f_14206);
} else
{elem_14175.attachEvent(cljs.core.name.call(null,actual_type_14204),canonical_f_14206);
}
{
var G__14207 = cljs.core.next.call(null,seq__14162_14197__$1);
var G__14208 = null;
var G__14209 = 0;
var G__14210 = 0;
seq__14162_14184 = G__14207;
chunk__14164_14185 = G__14208;
count__14165_14186 = G__14209;
i__14166_14187 = G__14210;
continue;
}
}
} else
{}
}
break;
}
{
var G__14211 = seq__14152_14177;
var G__14212 = chunk__14159_14178;
var G__14213 = count__14160_14179;
var G__14214 = (i__14161_14180 + 1);
seq__14152_14177 = G__14211;
chunk__14159_14178 = G__14212;
count__14160_14179 = G__14213;
i__14161_14180 = G__14214;
continue;
}
} else
{var temp__4092__auto___14215 = cljs.core.seq.call(null,seq__14152_14177);if(temp__4092__auto___14215)
{var seq__14152_14216__$1 = temp__4092__auto___14215;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14152_14216__$1))
{var c__6912__auto___14217 = cljs.core.chunk_first.call(null,seq__14152_14216__$1);{
var G__14218 = cljs.core.chunk_rest.call(null,seq__14152_14216__$1);
var G__14219 = c__6912__auto___14217;
var G__14220 = cljs.core.count.call(null,c__6912__auto___14217);
var G__14221 = 0;
seq__14152_14177 = G__14218;
chunk__14159_14178 = G__14219;
count__14160_14179 = G__14220;
i__14161_14180 = G__14221;
continue;
}
} else
{var vec__14171_14222 = cljs.core.first.call(null,seq__14152_14216__$1);var orig_type_14223 = cljs.core.nth.call(null,vec__14171_14222,0,null);var f_14224 = cljs.core.nth.call(null,vec__14171_14222,1,null);var seq__14153_14225 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14223,cljs.core.PersistentArrayMap.fromArray([orig_type_14223,cljs.core.identity], true)));var chunk__14155_14226 = null;var count__14156_14227 = 0;var i__14157_14228 = 0;while(true){
if((i__14157_14228 < count__14156_14227))
{var vec__14172_14229 = cljs.core._nth.call(null,chunk__14155_14226,i__14157_14228);var actual_type_14230 = cljs.core.nth.call(null,vec__14172_14229,0,null);var factory_14231 = cljs.core.nth.call(null,vec__14172_14229,1,null);var canonical_f_14232 = (cljs.core.truth_(selector_14176)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14175,selector_14176):cljs.core.identity).call(null,factory_14231.call(null,f_14224));dommy.core.update_event_listeners_BANG_.call(null,elem_14175,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_14176,actual_type_14230,f_14224], true),canonical_f_14232);
if(cljs.core.truth_(elem_14175.addEventListener))
{elem_14175.addEventListener(cljs.core.name.call(null,actual_type_14230),canonical_f_14232);
} else
{elem_14175.attachEvent(cljs.core.name.call(null,actual_type_14230),canonical_f_14232);
}
{
var G__14233 = seq__14153_14225;
var G__14234 = chunk__14155_14226;
var G__14235 = count__14156_14227;
var G__14236 = (i__14157_14228 + 1);
seq__14153_14225 = G__14233;
chunk__14155_14226 = G__14234;
count__14156_14227 = G__14235;
i__14157_14228 = G__14236;
continue;
}
} else
{var temp__4092__auto___14237__$1 = cljs.core.seq.call(null,seq__14153_14225);if(temp__4092__auto___14237__$1)
{var seq__14153_14238__$1 = temp__4092__auto___14237__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14153_14238__$1))
{var c__6912__auto___14239 = cljs.core.chunk_first.call(null,seq__14153_14238__$1);{
var G__14240 = cljs.core.chunk_rest.call(null,seq__14153_14238__$1);
var G__14241 = c__6912__auto___14239;
var G__14242 = cljs.core.count.call(null,c__6912__auto___14239);
var G__14243 = 0;
seq__14153_14225 = G__14240;
chunk__14155_14226 = G__14241;
count__14156_14227 = G__14242;
i__14157_14228 = G__14243;
continue;
}
} else
{var vec__14173_14244 = cljs.core.first.call(null,seq__14153_14238__$1);var actual_type_14245 = cljs.core.nth.call(null,vec__14173_14244,0,null);var factory_14246 = cljs.core.nth.call(null,vec__14173_14244,1,null);var canonical_f_14247 = (cljs.core.truth_(selector_14176)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14175,selector_14176):cljs.core.identity).call(null,factory_14246.call(null,f_14224));dommy.core.update_event_listeners_BANG_.call(null,elem_14175,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_14176,actual_type_14245,f_14224], true),canonical_f_14247);
if(cljs.core.truth_(elem_14175.addEventListener))
{elem_14175.addEventListener(cljs.core.name.call(null,actual_type_14245),canonical_f_14247);
} else
{elem_14175.attachEvent(cljs.core.name.call(null,actual_type_14245),canonical_f_14247);
}
{
var G__14248 = cljs.core.next.call(null,seq__14153_14238__$1);
var G__14249 = null;
var G__14250 = 0;
var G__14251 = 0;
seq__14153_14225 = G__14248;
chunk__14155_14226 = G__14249;
count__14156_14227 = G__14250;
i__14157_14228 = G__14251;
continue;
}
}
} else
{}
}
break;
}
{
var G__14252 = cljs.core.next.call(null,seq__14152_14216__$1);
var G__14253 = null;
var G__14254 = 0;
var G__14255 = 0;
seq__14152_14177 = G__14252;
chunk__14159_14178 = G__14253;
count__14160_14179 = G__14254;
i__14161_14180 = G__14255;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__14256){
var elem_sel = cljs.core.first(arglist__14256);
var type_fs = cljs.core.rest(arglist__14256);
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
var vec__14280_14303 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_14304 = cljs.core.nth.call(null,vec__14280_14303,0,null);var selector_14305 = cljs.core.nth.call(null,vec__14280_14303,1,null);var seq__14281_14306 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__14288_14307 = null;var count__14289_14308 = 0;var i__14290_14309 = 0;while(true){
if((i__14290_14309 < count__14289_14308))
{var vec__14297_14310 = cljs.core._nth.call(null,chunk__14288_14307,i__14290_14309);var orig_type_14311 = cljs.core.nth.call(null,vec__14297_14310,0,null);var f_14312 = cljs.core.nth.call(null,vec__14297_14310,1,null);var seq__14291_14313 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14311,cljs.core.PersistentArrayMap.fromArray([orig_type_14311,cljs.core.identity], true)));var chunk__14293_14314 = null;var count__14294_14315 = 0;var i__14295_14316 = 0;while(true){
if((i__14295_14316 < count__14294_14315))
{var vec__14298_14317 = cljs.core._nth.call(null,chunk__14293_14314,i__14295_14316);var actual_type_14318 = cljs.core.nth.call(null,vec__14298_14317,0,null);var __14319 = cljs.core.nth.call(null,vec__14298_14317,1,null);var keys_14320 = cljs.core.PersistentVector.fromArray([selector_14305,actual_type_14318,f_14312], true);var canonical_f_14321 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14304),keys_14320);dommy.core.update_event_listeners_BANG_.call(null,elem_14304,dommy.utils.dissoc_in,keys_14320);
if(cljs.core.truth_(elem_14304.removeEventListener))
{elem_14304.removeEventListener(cljs.core.name.call(null,actual_type_14318),canonical_f_14321);
} else
{elem_14304.detachEvent(cljs.core.name.call(null,actual_type_14318),canonical_f_14321);
}
{
var G__14322 = seq__14291_14313;
var G__14323 = chunk__14293_14314;
var G__14324 = count__14294_14315;
var G__14325 = (i__14295_14316 + 1);
seq__14291_14313 = G__14322;
chunk__14293_14314 = G__14323;
count__14294_14315 = G__14324;
i__14295_14316 = G__14325;
continue;
}
} else
{var temp__4092__auto___14326 = cljs.core.seq.call(null,seq__14291_14313);if(temp__4092__auto___14326)
{var seq__14291_14327__$1 = temp__4092__auto___14326;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14291_14327__$1))
{var c__6912__auto___14328 = cljs.core.chunk_first.call(null,seq__14291_14327__$1);{
var G__14329 = cljs.core.chunk_rest.call(null,seq__14291_14327__$1);
var G__14330 = c__6912__auto___14328;
var G__14331 = cljs.core.count.call(null,c__6912__auto___14328);
var G__14332 = 0;
seq__14291_14313 = G__14329;
chunk__14293_14314 = G__14330;
count__14294_14315 = G__14331;
i__14295_14316 = G__14332;
continue;
}
} else
{var vec__14299_14333 = cljs.core.first.call(null,seq__14291_14327__$1);var actual_type_14334 = cljs.core.nth.call(null,vec__14299_14333,0,null);var __14335 = cljs.core.nth.call(null,vec__14299_14333,1,null);var keys_14336 = cljs.core.PersistentVector.fromArray([selector_14305,actual_type_14334,f_14312], true);var canonical_f_14337 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14304),keys_14336);dommy.core.update_event_listeners_BANG_.call(null,elem_14304,dommy.utils.dissoc_in,keys_14336);
if(cljs.core.truth_(elem_14304.removeEventListener))
{elem_14304.removeEventListener(cljs.core.name.call(null,actual_type_14334),canonical_f_14337);
} else
{elem_14304.detachEvent(cljs.core.name.call(null,actual_type_14334),canonical_f_14337);
}
{
var G__14338 = cljs.core.next.call(null,seq__14291_14327__$1);
var G__14339 = null;
var G__14340 = 0;
var G__14341 = 0;
seq__14291_14313 = G__14338;
chunk__14293_14314 = G__14339;
count__14294_14315 = G__14340;
i__14295_14316 = G__14341;
continue;
}
}
} else
{}
}
break;
}
{
var G__14342 = seq__14281_14306;
var G__14343 = chunk__14288_14307;
var G__14344 = count__14289_14308;
var G__14345 = (i__14290_14309 + 1);
seq__14281_14306 = G__14342;
chunk__14288_14307 = G__14343;
count__14289_14308 = G__14344;
i__14290_14309 = G__14345;
continue;
}
} else
{var temp__4092__auto___14346 = cljs.core.seq.call(null,seq__14281_14306);if(temp__4092__auto___14346)
{var seq__14281_14347__$1 = temp__4092__auto___14346;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14281_14347__$1))
{var c__6912__auto___14348 = cljs.core.chunk_first.call(null,seq__14281_14347__$1);{
var G__14349 = cljs.core.chunk_rest.call(null,seq__14281_14347__$1);
var G__14350 = c__6912__auto___14348;
var G__14351 = cljs.core.count.call(null,c__6912__auto___14348);
var G__14352 = 0;
seq__14281_14306 = G__14349;
chunk__14288_14307 = G__14350;
count__14289_14308 = G__14351;
i__14290_14309 = G__14352;
continue;
}
} else
{var vec__14300_14353 = cljs.core.first.call(null,seq__14281_14347__$1);var orig_type_14354 = cljs.core.nth.call(null,vec__14300_14353,0,null);var f_14355 = cljs.core.nth.call(null,vec__14300_14353,1,null);var seq__14282_14356 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14354,cljs.core.PersistentArrayMap.fromArray([orig_type_14354,cljs.core.identity], true)));var chunk__14284_14357 = null;var count__14285_14358 = 0;var i__14286_14359 = 0;while(true){
if((i__14286_14359 < count__14285_14358))
{var vec__14301_14360 = cljs.core._nth.call(null,chunk__14284_14357,i__14286_14359);var actual_type_14361 = cljs.core.nth.call(null,vec__14301_14360,0,null);var __14362 = cljs.core.nth.call(null,vec__14301_14360,1,null);var keys_14363 = cljs.core.PersistentVector.fromArray([selector_14305,actual_type_14361,f_14355], true);var canonical_f_14364 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14304),keys_14363);dommy.core.update_event_listeners_BANG_.call(null,elem_14304,dommy.utils.dissoc_in,keys_14363);
if(cljs.core.truth_(elem_14304.removeEventListener))
{elem_14304.removeEventListener(cljs.core.name.call(null,actual_type_14361),canonical_f_14364);
} else
{elem_14304.detachEvent(cljs.core.name.call(null,actual_type_14361),canonical_f_14364);
}
{
var G__14365 = seq__14282_14356;
var G__14366 = chunk__14284_14357;
var G__14367 = count__14285_14358;
var G__14368 = (i__14286_14359 + 1);
seq__14282_14356 = G__14365;
chunk__14284_14357 = G__14366;
count__14285_14358 = G__14367;
i__14286_14359 = G__14368;
continue;
}
} else
{var temp__4092__auto___14369__$1 = cljs.core.seq.call(null,seq__14282_14356);if(temp__4092__auto___14369__$1)
{var seq__14282_14370__$1 = temp__4092__auto___14369__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14282_14370__$1))
{var c__6912__auto___14371 = cljs.core.chunk_first.call(null,seq__14282_14370__$1);{
var G__14372 = cljs.core.chunk_rest.call(null,seq__14282_14370__$1);
var G__14373 = c__6912__auto___14371;
var G__14374 = cljs.core.count.call(null,c__6912__auto___14371);
var G__14375 = 0;
seq__14282_14356 = G__14372;
chunk__14284_14357 = G__14373;
count__14285_14358 = G__14374;
i__14286_14359 = G__14375;
continue;
}
} else
{var vec__14302_14376 = cljs.core.first.call(null,seq__14282_14370__$1);var actual_type_14377 = cljs.core.nth.call(null,vec__14302_14376,0,null);var __14378 = cljs.core.nth.call(null,vec__14302_14376,1,null);var keys_14379 = cljs.core.PersistentVector.fromArray([selector_14305,actual_type_14377,f_14355], true);var canonical_f_14380 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14304),keys_14379);dommy.core.update_event_listeners_BANG_.call(null,elem_14304,dommy.utils.dissoc_in,keys_14379);
if(cljs.core.truth_(elem_14304.removeEventListener))
{elem_14304.removeEventListener(cljs.core.name.call(null,actual_type_14377),canonical_f_14380);
} else
{elem_14304.detachEvent(cljs.core.name.call(null,actual_type_14377),canonical_f_14380);
}
{
var G__14381 = cljs.core.next.call(null,seq__14282_14370__$1);
var G__14382 = null;
var G__14383 = 0;
var G__14384 = 0;
seq__14282_14356 = G__14381;
chunk__14284_14357 = G__14382;
count__14285_14358 = G__14383;
i__14286_14359 = G__14384;
continue;
}
}
} else
{}
}
break;
}
{
var G__14385 = cljs.core.next.call(null,seq__14281_14347__$1);
var G__14386 = null;
var G__14387 = 0;
var G__14388 = 0;
seq__14281_14306 = G__14385;
chunk__14288_14307 = G__14386;
count__14289_14308 = G__14387;
i__14290_14309 = G__14388;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__14389){
var elem_sel = cljs.core.first(arglist__14389);
var type_fs = cljs.core.rest(arglist__14389);
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
var vec__14397_14404 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_14405 = cljs.core.nth.call(null,vec__14397_14404,0,null);var selector_14406 = cljs.core.nth.call(null,vec__14397_14404,1,null);var seq__14398_14407 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__14399_14408 = null;var count__14400_14409 = 0;var i__14401_14410 = 0;while(true){
if((i__14401_14410 < count__14400_14409))
{var vec__14402_14411 = cljs.core._nth.call(null,chunk__14399_14408,i__14401_14410);var type_14412 = cljs.core.nth.call(null,vec__14402_14411,0,null);var f_14413 = cljs.core.nth.call(null,vec__14402_14411,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_14412,((function (seq__14398_14407,chunk__14399_14408,count__14400_14409,i__14401_14410,vec__14402_14411,type_14412,f_14413){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_14412,this_fn);
return f_14413.call(null,e);
});})(seq__14398_14407,chunk__14399_14408,count__14400_14409,i__14401_14410,vec__14402_14411,type_14412,f_14413))
);
{
var G__14414 = seq__14398_14407;
var G__14415 = chunk__14399_14408;
var G__14416 = count__14400_14409;
var G__14417 = (i__14401_14410 + 1);
seq__14398_14407 = G__14414;
chunk__14399_14408 = G__14415;
count__14400_14409 = G__14416;
i__14401_14410 = G__14417;
continue;
}
} else
{var temp__4092__auto___14418 = cljs.core.seq.call(null,seq__14398_14407);if(temp__4092__auto___14418)
{var seq__14398_14419__$1 = temp__4092__auto___14418;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14398_14419__$1))
{var c__6912__auto___14420 = cljs.core.chunk_first.call(null,seq__14398_14419__$1);{
var G__14421 = cljs.core.chunk_rest.call(null,seq__14398_14419__$1);
var G__14422 = c__6912__auto___14420;
var G__14423 = cljs.core.count.call(null,c__6912__auto___14420);
var G__14424 = 0;
seq__14398_14407 = G__14421;
chunk__14399_14408 = G__14422;
count__14400_14409 = G__14423;
i__14401_14410 = G__14424;
continue;
}
} else
{var vec__14403_14425 = cljs.core.first.call(null,seq__14398_14419__$1);var type_14426 = cljs.core.nth.call(null,vec__14403_14425,0,null);var f_14427 = cljs.core.nth.call(null,vec__14403_14425,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_14426,((function (seq__14398_14407,chunk__14399_14408,count__14400_14409,i__14401_14410,vec__14403_14425,type_14426,f_14427,seq__14398_14419__$1,temp__4092__auto___14418){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_14426,this_fn);
return f_14427.call(null,e);
});})(seq__14398_14407,chunk__14399_14408,count__14400_14409,i__14401_14410,vec__14403_14425,type_14426,f_14427,seq__14398_14419__$1,temp__4092__auto___14418))
);
{
var G__14428 = cljs.core.next.call(null,seq__14398_14419__$1);
var G__14429 = null;
var G__14430 = 0;
var G__14431 = 0;
seq__14398_14407 = G__14428;
chunk__14399_14408 = G__14429;
count__14400_14409 = G__14430;
i__14401_14410 = G__14431;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__14432){
var elem_sel = cljs.core.first(arglist__14432);
var type_fs = cljs.core.rest(arglist__14432);
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
var fire_BANG___delegate = function (node,event_type,p__14433){var vec__14435 = p__14433;var update_event_BANG_ = cljs.core.nth.call(null,vec__14435,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__14433 = null;if (arguments.length > 2) {
  p__14433 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__14433);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__14436){
var node = cljs.core.first(arglist__14436);
arglist__14436 = cljs.core.next(arglist__14436);
var event_type = cljs.core.first(arglist__14436);
var p__14433 = cljs.core.rest(arglist__14436);
return fire_BANG___delegate(node,event_type,p__14433);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
