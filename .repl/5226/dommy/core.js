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
var append_BANG___2 = (function (parent,child){var G__14068 = dommy.template.__GT_node_like.call(null,parent);G__14068.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__14068;
});
var append_BANG___3 = (function() { 
var G__14073__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__14069_14074 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__14070_14075 = null;var count__14071_14076 = 0;var i__14072_14077 = 0;while(true){
if((i__14072_14077 < count__14071_14076))
{var c_14078 = cljs.core._nth.call(null,chunk__14070_14075,i__14072_14077);append_BANG_.call(null,parent__$1,c_14078);
{
var G__14079 = seq__14069_14074;
var G__14080 = chunk__14070_14075;
var G__14081 = count__14071_14076;
var G__14082 = (i__14072_14077 + 1);
seq__14069_14074 = G__14079;
chunk__14070_14075 = G__14080;
count__14071_14076 = G__14081;
i__14072_14077 = G__14082;
continue;
}
} else
{var temp__4092__auto___14083 = cljs.core.seq.call(null,seq__14069_14074);if(temp__4092__auto___14083)
{var seq__14069_14084__$1 = temp__4092__auto___14083;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14069_14084__$1))
{var c__6932__auto___14085 = cljs.core.chunk_first.call(null,seq__14069_14084__$1);{
var G__14086 = cljs.core.chunk_rest.call(null,seq__14069_14084__$1);
var G__14087 = c__6932__auto___14085;
var G__14088 = cljs.core.count.call(null,c__6932__auto___14085);
var G__14089 = 0;
seq__14069_14074 = G__14086;
chunk__14070_14075 = G__14087;
count__14071_14076 = G__14088;
i__14072_14077 = G__14089;
continue;
}
} else
{var c_14090 = cljs.core.first.call(null,seq__14069_14084__$1);append_BANG_.call(null,parent__$1,c_14090);
{
var G__14091 = cljs.core.next.call(null,seq__14069_14084__$1);
var G__14092 = null;
var G__14093 = 0;
var G__14094 = 0;
seq__14069_14074 = G__14091;
chunk__14070_14075 = G__14092;
count__14071_14076 = G__14093;
i__14072_14077 = G__14094;
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
var G__14073 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14073__delegate.call(this,parent,child,more_children);};
G__14073.cljs$lang$maxFixedArity = 2;
G__14073.cljs$lang$applyTo = (function (arglist__14095){
var parent = cljs.core.first(arglist__14095);
arglist__14095 = cljs.core.next(arglist__14095);
var child = cljs.core.first(arglist__14095);
var more_children = cljs.core.rest(arglist__14095);
return G__14073__delegate(parent,child,more_children);
});
G__14073.cljs$core$IFn$_invoke$arity$variadic = G__14073__delegate;
return G__14073;
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
var prepend_BANG___2 = (function (parent,child){var G__14101 = dommy.template.__GT_node_like.call(null,parent);G__14101.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__14101;
});
var prepend_BANG___3 = (function() { 
var G__14106__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__14102_14107 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__14103_14108 = null;var count__14104_14109 = 0;var i__14105_14110 = 0;while(true){
if((i__14105_14110 < count__14104_14109))
{var c_14111 = cljs.core._nth.call(null,chunk__14103_14108,i__14105_14110);prepend_BANG_.call(null,parent__$1,c_14111);
{
var G__14112 = seq__14102_14107;
var G__14113 = chunk__14103_14108;
var G__14114 = count__14104_14109;
var G__14115 = (i__14105_14110 + 1);
seq__14102_14107 = G__14112;
chunk__14103_14108 = G__14113;
count__14104_14109 = G__14114;
i__14105_14110 = G__14115;
continue;
}
} else
{var temp__4092__auto___14116 = cljs.core.seq.call(null,seq__14102_14107);if(temp__4092__auto___14116)
{var seq__14102_14117__$1 = temp__4092__auto___14116;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14102_14117__$1))
{var c__6932__auto___14118 = cljs.core.chunk_first.call(null,seq__14102_14117__$1);{
var G__14119 = cljs.core.chunk_rest.call(null,seq__14102_14117__$1);
var G__14120 = c__6932__auto___14118;
var G__14121 = cljs.core.count.call(null,c__6932__auto___14118);
var G__14122 = 0;
seq__14102_14107 = G__14119;
chunk__14103_14108 = G__14120;
count__14104_14109 = G__14121;
i__14105_14110 = G__14122;
continue;
}
} else
{var c_14123 = cljs.core.first.call(null,seq__14102_14117__$1);prepend_BANG_.call(null,parent__$1,c_14123);
{
var G__14124 = cljs.core.next.call(null,seq__14102_14117__$1);
var G__14125 = null;
var G__14126 = 0;
var G__14127 = 0;
seq__14102_14107 = G__14124;
chunk__14103_14108 = G__14125;
count__14104_14109 = G__14126;
i__14105_14110 = G__14127;
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
var G__14106 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14106__delegate.call(this,parent,child,more_children);};
G__14106.cljs$lang$maxFixedArity = 2;
G__14106.cljs$lang$applyTo = (function (arglist__14128){
var parent = cljs.core.first(arglist__14128);
arglist__14128 = cljs.core.next(arglist__14128);
var child = cljs.core.first(arglist__14128);
var more_children = cljs.core.rest(arglist__14128);
return G__14106__delegate(parent,child,more_children);
});
G__14106.cljs$core$IFn$_invoke$arity$variadic = G__14106__delegate;
return G__14106;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___14129 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___14129))
{var next_14130 = temp__4090__auto___14129;parent.insertBefore(actual_node,next_14130);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__14132 = dommy.template.__GT_node_like.call(null,parent);G__14132.innerHTML = "";
dommy.core.append_BANG_.call(null,G__14132,node_like);
return G__14132;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__14134 = elem__$1.parentNode;G__14134.removeChild(elem__$1);
return G__14134;
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
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__14135_SHARP_){return p1__14135_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__14136_SHARP_){return !((p1__14136_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__14137){var vec__14138 = p__14137;var special_mouse_event = cljs.core.nth.call(null,vec__14138,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__14138,1,null);return cljs.core.PersistentVector.fromArray([special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3943__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3943__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__14139){
var elem = cljs.core.first(arglist__14139);
arglist__14139 = cljs.core.next(arglist__14139);
var f = cljs.core.first(arglist__14139);
var args = cljs.core.rest(arglist__14139);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__14140_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__14140_SHARP_));
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
var vec__14164_14187 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_14188 = cljs.core.nth.call(null,vec__14164_14187,0,null);var selector_14189 = cljs.core.nth.call(null,vec__14164_14187,1,null);var seq__14165_14190 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__14172_14191 = null;var count__14173_14192 = 0;var i__14174_14193 = 0;while(true){
if((i__14174_14193 < count__14173_14192))
{var vec__14181_14194 = cljs.core._nth.call(null,chunk__14172_14191,i__14174_14193);var orig_type_14195 = cljs.core.nth.call(null,vec__14181_14194,0,null);var f_14196 = cljs.core.nth.call(null,vec__14181_14194,1,null);var seq__14175_14197 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14195,cljs.core.PersistentArrayMap.fromArray([orig_type_14195,cljs.core.identity], true)));var chunk__14177_14198 = null;var count__14178_14199 = 0;var i__14179_14200 = 0;while(true){
if((i__14179_14200 < count__14178_14199))
{var vec__14182_14201 = cljs.core._nth.call(null,chunk__14177_14198,i__14179_14200);var actual_type_14202 = cljs.core.nth.call(null,vec__14182_14201,0,null);var factory_14203 = cljs.core.nth.call(null,vec__14182_14201,1,null);var canonical_f_14204 = (cljs.core.truth_(selector_14189)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14188,selector_14189):cljs.core.identity).call(null,factory_14203.call(null,f_14196));dommy.core.update_event_listeners_BANG_.call(null,elem_14188,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_14189,actual_type_14202,f_14196], true),canonical_f_14204);
if(cljs.core.truth_(elem_14188.addEventListener))
{elem_14188.addEventListener(cljs.core.name.call(null,actual_type_14202),canonical_f_14204);
} else
{elem_14188.attachEvent(cljs.core.name.call(null,actual_type_14202),canonical_f_14204);
}
{
var G__14205 = seq__14175_14197;
var G__14206 = chunk__14177_14198;
var G__14207 = count__14178_14199;
var G__14208 = (i__14179_14200 + 1);
seq__14175_14197 = G__14205;
chunk__14177_14198 = G__14206;
count__14178_14199 = G__14207;
i__14179_14200 = G__14208;
continue;
}
} else
{var temp__4092__auto___14209 = cljs.core.seq.call(null,seq__14175_14197);if(temp__4092__auto___14209)
{var seq__14175_14210__$1 = temp__4092__auto___14209;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14175_14210__$1))
{var c__6932__auto___14211 = cljs.core.chunk_first.call(null,seq__14175_14210__$1);{
var G__14212 = cljs.core.chunk_rest.call(null,seq__14175_14210__$1);
var G__14213 = c__6932__auto___14211;
var G__14214 = cljs.core.count.call(null,c__6932__auto___14211);
var G__14215 = 0;
seq__14175_14197 = G__14212;
chunk__14177_14198 = G__14213;
count__14178_14199 = G__14214;
i__14179_14200 = G__14215;
continue;
}
} else
{var vec__14183_14216 = cljs.core.first.call(null,seq__14175_14210__$1);var actual_type_14217 = cljs.core.nth.call(null,vec__14183_14216,0,null);var factory_14218 = cljs.core.nth.call(null,vec__14183_14216,1,null);var canonical_f_14219 = (cljs.core.truth_(selector_14189)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14188,selector_14189):cljs.core.identity).call(null,factory_14218.call(null,f_14196));dommy.core.update_event_listeners_BANG_.call(null,elem_14188,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_14189,actual_type_14217,f_14196], true),canonical_f_14219);
if(cljs.core.truth_(elem_14188.addEventListener))
{elem_14188.addEventListener(cljs.core.name.call(null,actual_type_14217),canonical_f_14219);
} else
{elem_14188.attachEvent(cljs.core.name.call(null,actual_type_14217),canonical_f_14219);
}
{
var G__14220 = cljs.core.next.call(null,seq__14175_14210__$1);
var G__14221 = null;
var G__14222 = 0;
var G__14223 = 0;
seq__14175_14197 = G__14220;
chunk__14177_14198 = G__14221;
count__14178_14199 = G__14222;
i__14179_14200 = G__14223;
continue;
}
}
} else
{}
}
break;
}
{
var G__14224 = seq__14165_14190;
var G__14225 = chunk__14172_14191;
var G__14226 = count__14173_14192;
var G__14227 = (i__14174_14193 + 1);
seq__14165_14190 = G__14224;
chunk__14172_14191 = G__14225;
count__14173_14192 = G__14226;
i__14174_14193 = G__14227;
continue;
}
} else
{var temp__4092__auto___14228 = cljs.core.seq.call(null,seq__14165_14190);if(temp__4092__auto___14228)
{var seq__14165_14229__$1 = temp__4092__auto___14228;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14165_14229__$1))
{var c__6932__auto___14230 = cljs.core.chunk_first.call(null,seq__14165_14229__$1);{
var G__14231 = cljs.core.chunk_rest.call(null,seq__14165_14229__$1);
var G__14232 = c__6932__auto___14230;
var G__14233 = cljs.core.count.call(null,c__6932__auto___14230);
var G__14234 = 0;
seq__14165_14190 = G__14231;
chunk__14172_14191 = G__14232;
count__14173_14192 = G__14233;
i__14174_14193 = G__14234;
continue;
}
} else
{var vec__14184_14235 = cljs.core.first.call(null,seq__14165_14229__$1);var orig_type_14236 = cljs.core.nth.call(null,vec__14184_14235,0,null);var f_14237 = cljs.core.nth.call(null,vec__14184_14235,1,null);var seq__14166_14238 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14236,cljs.core.PersistentArrayMap.fromArray([orig_type_14236,cljs.core.identity], true)));var chunk__14168_14239 = null;var count__14169_14240 = 0;var i__14170_14241 = 0;while(true){
if((i__14170_14241 < count__14169_14240))
{var vec__14185_14242 = cljs.core._nth.call(null,chunk__14168_14239,i__14170_14241);var actual_type_14243 = cljs.core.nth.call(null,vec__14185_14242,0,null);var factory_14244 = cljs.core.nth.call(null,vec__14185_14242,1,null);var canonical_f_14245 = (cljs.core.truth_(selector_14189)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14188,selector_14189):cljs.core.identity).call(null,factory_14244.call(null,f_14237));dommy.core.update_event_listeners_BANG_.call(null,elem_14188,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_14189,actual_type_14243,f_14237], true),canonical_f_14245);
if(cljs.core.truth_(elem_14188.addEventListener))
{elem_14188.addEventListener(cljs.core.name.call(null,actual_type_14243),canonical_f_14245);
} else
{elem_14188.attachEvent(cljs.core.name.call(null,actual_type_14243),canonical_f_14245);
}
{
var G__14246 = seq__14166_14238;
var G__14247 = chunk__14168_14239;
var G__14248 = count__14169_14240;
var G__14249 = (i__14170_14241 + 1);
seq__14166_14238 = G__14246;
chunk__14168_14239 = G__14247;
count__14169_14240 = G__14248;
i__14170_14241 = G__14249;
continue;
}
} else
{var temp__4092__auto___14250__$1 = cljs.core.seq.call(null,seq__14166_14238);if(temp__4092__auto___14250__$1)
{var seq__14166_14251__$1 = temp__4092__auto___14250__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14166_14251__$1))
{var c__6932__auto___14252 = cljs.core.chunk_first.call(null,seq__14166_14251__$1);{
var G__14253 = cljs.core.chunk_rest.call(null,seq__14166_14251__$1);
var G__14254 = c__6932__auto___14252;
var G__14255 = cljs.core.count.call(null,c__6932__auto___14252);
var G__14256 = 0;
seq__14166_14238 = G__14253;
chunk__14168_14239 = G__14254;
count__14169_14240 = G__14255;
i__14170_14241 = G__14256;
continue;
}
} else
{var vec__14186_14257 = cljs.core.first.call(null,seq__14166_14251__$1);var actual_type_14258 = cljs.core.nth.call(null,vec__14186_14257,0,null);var factory_14259 = cljs.core.nth.call(null,vec__14186_14257,1,null);var canonical_f_14260 = (cljs.core.truth_(selector_14189)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14188,selector_14189):cljs.core.identity).call(null,factory_14259.call(null,f_14237));dommy.core.update_event_listeners_BANG_.call(null,elem_14188,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_14189,actual_type_14258,f_14237], true),canonical_f_14260);
if(cljs.core.truth_(elem_14188.addEventListener))
{elem_14188.addEventListener(cljs.core.name.call(null,actual_type_14258),canonical_f_14260);
} else
{elem_14188.attachEvent(cljs.core.name.call(null,actual_type_14258),canonical_f_14260);
}
{
var G__14261 = cljs.core.next.call(null,seq__14166_14251__$1);
var G__14262 = null;
var G__14263 = 0;
var G__14264 = 0;
seq__14166_14238 = G__14261;
chunk__14168_14239 = G__14262;
count__14169_14240 = G__14263;
i__14170_14241 = G__14264;
continue;
}
}
} else
{}
}
break;
}
{
var G__14265 = cljs.core.next.call(null,seq__14165_14229__$1);
var G__14266 = null;
var G__14267 = 0;
var G__14268 = 0;
seq__14165_14190 = G__14265;
chunk__14172_14191 = G__14266;
count__14173_14192 = G__14267;
i__14174_14193 = G__14268;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__14269){
var elem_sel = cljs.core.first(arglist__14269);
var type_fs = cljs.core.rest(arglist__14269);
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
var vec__14293_14316 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_14317 = cljs.core.nth.call(null,vec__14293_14316,0,null);var selector_14318 = cljs.core.nth.call(null,vec__14293_14316,1,null);var seq__14294_14319 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__14301_14320 = null;var count__14302_14321 = 0;var i__14303_14322 = 0;while(true){
if((i__14303_14322 < count__14302_14321))
{var vec__14310_14323 = cljs.core._nth.call(null,chunk__14301_14320,i__14303_14322);var orig_type_14324 = cljs.core.nth.call(null,vec__14310_14323,0,null);var f_14325 = cljs.core.nth.call(null,vec__14310_14323,1,null);var seq__14304_14326 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14324,cljs.core.PersistentArrayMap.fromArray([orig_type_14324,cljs.core.identity], true)));var chunk__14306_14327 = null;var count__14307_14328 = 0;var i__14308_14329 = 0;while(true){
if((i__14308_14329 < count__14307_14328))
{var vec__14311_14330 = cljs.core._nth.call(null,chunk__14306_14327,i__14308_14329);var actual_type_14331 = cljs.core.nth.call(null,vec__14311_14330,0,null);var __14332 = cljs.core.nth.call(null,vec__14311_14330,1,null);var keys_14333 = cljs.core.PersistentVector.fromArray([selector_14318,actual_type_14331,f_14325], true);var canonical_f_14334 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14317),keys_14333);dommy.core.update_event_listeners_BANG_.call(null,elem_14317,dommy.utils.dissoc_in,keys_14333);
if(cljs.core.truth_(elem_14317.removeEventListener))
{elem_14317.removeEventListener(cljs.core.name.call(null,actual_type_14331),canonical_f_14334);
} else
{elem_14317.detachEvent(cljs.core.name.call(null,actual_type_14331),canonical_f_14334);
}
{
var G__14335 = seq__14304_14326;
var G__14336 = chunk__14306_14327;
var G__14337 = count__14307_14328;
var G__14338 = (i__14308_14329 + 1);
seq__14304_14326 = G__14335;
chunk__14306_14327 = G__14336;
count__14307_14328 = G__14337;
i__14308_14329 = G__14338;
continue;
}
} else
{var temp__4092__auto___14339 = cljs.core.seq.call(null,seq__14304_14326);if(temp__4092__auto___14339)
{var seq__14304_14340__$1 = temp__4092__auto___14339;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14304_14340__$1))
{var c__6932__auto___14341 = cljs.core.chunk_first.call(null,seq__14304_14340__$1);{
var G__14342 = cljs.core.chunk_rest.call(null,seq__14304_14340__$1);
var G__14343 = c__6932__auto___14341;
var G__14344 = cljs.core.count.call(null,c__6932__auto___14341);
var G__14345 = 0;
seq__14304_14326 = G__14342;
chunk__14306_14327 = G__14343;
count__14307_14328 = G__14344;
i__14308_14329 = G__14345;
continue;
}
} else
{var vec__14312_14346 = cljs.core.first.call(null,seq__14304_14340__$1);var actual_type_14347 = cljs.core.nth.call(null,vec__14312_14346,0,null);var __14348 = cljs.core.nth.call(null,vec__14312_14346,1,null);var keys_14349 = cljs.core.PersistentVector.fromArray([selector_14318,actual_type_14347,f_14325], true);var canonical_f_14350 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14317),keys_14349);dommy.core.update_event_listeners_BANG_.call(null,elem_14317,dommy.utils.dissoc_in,keys_14349);
if(cljs.core.truth_(elem_14317.removeEventListener))
{elem_14317.removeEventListener(cljs.core.name.call(null,actual_type_14347),canonical_f_14350);
} else
{elem_14317.detachEvent(cljs.core.name.call(null,actual_type_14347),canonical_f_14350);
}
{
var G__14351 = cljs.core.next.call(null,seq__14304_14340__$1);
var G__14352 = null;
var G__14353 = 0;
var G__14354 = 0;
seq__14304_14326 = G__14351;
chunk__14306_14327 = G__14352;
count__14307_14328 = G__14353;
i__14308_14329 = G__14354;
continue;
}
}
} else
{}
}
break;
}
{
var G__14355 = seq__14294_14319;
var G__14356 = chunk__14301_14320;
var G__14357 = count__14302_14321;
var G__14358 = (i__14303_14322 + 1);
seq__14294_14319 = G__14355;
chunk__14301_14320 = G__14356;
count__14302_14321 = G__14357;
i__14303_14322 = G__14358;
continue;
}
} else
{var temp__4092__auto___14359 = cljs.core.seq.call(null,seq__14294_14319);if(temp__4092__auto___14359)
{var seq__14294_14360__$1 = temp__4092__auto___14359;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14294_14360__$1))
{var c__6932__auto___14361 = cljs.core.chunk_first.call(null,seq__14294_14360__$1);{
var G__14362 = cljs.core.chunk_rest.call(null,seq__14294_14360__$1);
var G__14363 = c__6932__auto___14361;
var G__14364 = cljs.core.count.call(null,c__6932__auto___14361);
var G__14365 = 0;
seq__14294_14319 = G__14362;
chunk__14301_14320 = G__14363;
count__14302_14321 = G__14364;
i__14303_14322 = G__14365;
continue;
}
} else
{var vec__14313_14366 = cljs.core.first.call(null,seq__14294_14360__$1);var orig_type_14367 = cljs.core.nth.call(null,vec__14313_14366,0,null);var f_14368 = cljs.core.nth.call(null,vec__14313_14366,1,null);var seq__14295_14369 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14367,cljs.core.PersistentArrayMap.fromArray([orig_type_14367,cljs.core.identity], true)));var chunk__14297_14370 = null;var count__14298_14371 = 0;var i__14299_14372 = 0;while(true){
if((i__14299_14372 < count__14298_14371))
{var vec__14314_14373 = cljs.core._nth.call(null,chunk__14297_14370,i__14299_14372);var actual_type_14374 = cljs.core.nth.call(null,vec__14314_14373,0,null);var __14375 = cljs.core.nth.call(null,vec__14314_14373,1,null);var keys_14376 = cljs.core.PersistentVector.fromArray([selector_14318,actual_type_14374,f_14368], true);var canonical_f_14377 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14317),keys_14376);dommy.core.update_event_listeners_BANG_.call(null,elem_14317,dommy.utils.dissoc_in,keys_14376);
if(cljs.core.truth_(elem_14317.removeEventListener))
{elem_14317.removeEventListener(cljs.core.name.call(null,actual_type_14374),canonical_f_14377);
} else
{elem_14317.detachEvent(cljs.core.name.call(null,actual_type_14374),canonical_f_14377);
}
{
var G__14378 = seq__14295_14369;
var G__14379 = chunk__14297_14370;
var G__14380 = count__14298_14371;
var G__14381 = (i__14299_14372 + 1);
seq__14295_14369 = G__14378;
chunk__14297_14370 = G__14379;
count__14298_14371 = G__14380;
i__14299_14372 = G__14381;
continue;
}
} else
{var temp__4092__auto___14382__$1 = cljs.core.seq.call(null,seq__14295_14369);if(temp__4092__auto___14382__$1)
{var seq__14295_14383__$1 = temp__4092__auto___14382__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14295_14383__$1))
{var c__6932__auto___14384 = cljs.core.chunk_first.call(null,seq__14295_14383__$1);{
var G__14385 = cljs.core.chunk_rest.call(null,seq__14295_14383__$1);
var G__14386 = c__6932__auto___14384;
var G__14387 = cljs.core.count.call(null,c__6932__auto___14384);
var G__14388 = 0;
seq__14295_14369 = G__14385;
chunk__14297_14370 = G__14386;
count__14298_14371 = G__14387;
i__14299_14372 = G__14388;
continue;
}
} else
{var vec__14315_14389 = cljs.core.first.call(null,seq__14295_14383__$1);var actual_type_14390 = cljs.core.nth.call(null,vec__14315_14389,0,null);var __14391 = cljs.core.nth.call(null,vec__14315_14389,1,null);var keys_14392 = cljs.core.PersistentVector.fromArray([selector_14318,actual_type_14390,f_14368], true);var canonical_f_14393 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14317),keys_14392);dommy.core.update_event_listeners_BANG_.call(null,elem_14317,dommy.utils.dissoc_in,keys_14392);
if(cljs.core.truth_(elem_14317.removeEventListener))
{elem_14317.removeEventListener(cljs.core.name.call(null,actual_type_14390),canonical_f_14393);
} else
{elem_14317.detachEvent(cljs.core.name.call(null,actual_type_14390),canonical_f_14393);
}
{
var G__14394 = cljs.core.next.call(null,seq__14295_14383__$1);
var G__14395 = null;
var G__14396 = 0;
var G__14397 = 0;
seq__14295_14369 = G__14394;
chunk__14297_14370 = G__14395;
count__14298_14371 = G__14396;
i__14299_14372 = G__14397;
continue;
}
}
} else
{}
}
break;
}
{
var G__14398 = cljs.core.next.call(null,seq__14294_14360__$1);
var G__14399 = null;
var G__14400 = 0;
var G__14401 = 0;
seq__14294_14319 = G__14398;
chunk__14301_14320 = G__14399;
count__14302_14321 = G__14400;
i__14303_14322 = G__14401;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__14402){
var elem_sel = cljs.core.first(arglist__14402);
var type_fs = cljs.core.rest(arglist__14402);
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
var vec__14410_14417 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_14418 = cljs.core.nth.call(null,vec__14410_14417,0,null);var selector_14419 = cljs.core.nth.call(null,vec__14410_14417,1,null);var seq__14411_14420 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__14412_14421 = null;var count__14413_14422 = 0;var i__14414_14423 = 0;while(true){
if((i__14414_14423 < count__14413_14422))
{var vec__14415_14424 = cljs.core._nth.call(null,chunk__14412_14421,i__14414_14423);var type_14425 = cljs.core.nth.call(null,vec__14415_14424,0,null);var f_14426 = cljs.core.nth.call(null,vec__14415_14424,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_14425,((function (seq__14411_14420,chunk__14412_14421,count__14413_14422,i__14414_14423,vec__14415_14424,type_14425,f_14426){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_14425,this_fn);
return f_14426.call(null,e);
});})(seq__14411_14420,chunk__14412_14421,count__14413_14422,i__14414_14423,vec__14415_14424,type_14425,f_14426))
);
{
var G__14427 = seq__14411_14420;
var G__14428 = chunk__14412_14421;
var G__14429 = count__14413_14422;
var G__14430 = (i__14414_14423 + 1);
seq__14411_14420 = G__14427;
chunk__14412_14421 = G__14428;
count__14413_14422 = G__14429;
i__14414_14423 = G__14430;
continue;
}
} else
{var temp__4092__auto___14431 = cljs.core.seq.call(null,seq__14411_14420);if(temp__4092__auto___14431)
{var seq__14411_14432__$1 = temp__4092__auto___14431;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14411_14432__$1))
{var c__6932__auto___14433 = cljs.core.chunk_first.call(null,seq__14411_14432__$1);{
var G__14434 = cljs.core.chunk_rest.call(null,seq__14411_14432__$1);
var G__14435 = c__6932__auto___14433;
var G__14436 = cljs.core.count.call(null,c__6932__auto___14433);
var G__14437 = 0;
seq__14411_14420 = G__14434;
chunk__14412_14421 = G__14435;
count__14413_14422 = G__14436;
i__14414_14423 = G__14437;
continue;
}
} else
{var vec__14416_14438 = cljs.core.first.call(null,seq__14411_14432__$1);var type_14439 = cljs.core.nth.call(null,vec__14416_14438,0,null);var f_14440 = cljs.core.nth.call(null,vec__14416_14438,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_14439,((function (seq__14411_14420,chunk__14412_14421,count__14413_14422,i__14414_14423,vec__14416_14438,type_14439,f_14440,seq__14411_14432__$1,temp__4092__auto___14431){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_14439,this_fn);
return f_14440.call(null,e);
});})(seq__14411_14420,chunk__14412_14421,count__14413_14422,i__14414_14423,vec__14416_14438,type_14439,f_14440,seq__14411_14432__$1,temp__4092__auto___14431))
);
{
var G__14441 = cljs.core.next.call(null,seq__14411_14432__$1);
var G__14442 = null;
var G__14443 = 0;
var G__14444 = 0;
seq__14411_14420 = G__14441;
chunk__14412_14421 = G__14442;
count__14413_14422 = G__14443;
i__14414_14423 = G__14444;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__14445){
var elem_sel = cljs.core.first(arglist__14445);
var type_fs = cljs.core.rest(arglist__14445);
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
var fire_BANG___delegate = function (node,event_type,p__14446){var vec__14448 = p__14446;var update_event_BANG_ = cljs.core.nth.call(null,vec__14448,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__14446 = null;if (arguments.length > 2) {
  p__14446 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__14446);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__14449){
var node = cljs.core.first(arglist__14449);
arglist__14449 = cljs.core.next(arglist__14449);
var event_type = cljs.core.first(arglist__14449);
var p__14446 = cljs.core.rest(arglist__14449);
return fire_BANG___delegate(node,event_type,p__14446);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
