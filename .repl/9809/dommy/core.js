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
var append_BANG___2 = (function (parent,child){var G__14099 = dommy.template.__GT_node_like.call(null,parent);G__14099.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__14099;
});
var append_BANG___3 = (function() { 
var G__14104__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__14100_14105 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__14101_14106 = null;var count__14102_14107 = 0;var i__14103_14108 = 0;while(true){
if((i__14103_14108 < count__14102_14107))
{var c_14109 = cljs.core._nth.call(null,chunk__14101_14106,i__14103_14108);append_BANG_.call(null,parent__$1,c_14109);
{
var G__14110 = seq__14100_14105;
var G__14111 = chunk__14101_14106;
var G__14112 = count__14102_14107;
var G__14113 = (i__14103_14108 + 1);
seq__14100_14105 = G__14110;
chunk__14101_14106 = G__14111;
count__14102_14107 = G__14112;
i__14103_14108 = G__14113;
continue;
}
} else
{var temp__4092__auto___14114 = cljs.core.seq.call(null,seq__14100_14105);if(temp__4092__auto___14114)
{var seq__14100_14115__$1 = temp__4092__auto___14114;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14100_14115__$1))
{var c__6962__auto___14116 = cljs.core.chunk_first.call(null,seq__14100_14115__$1);{
var G__14117 = cljs.core.chunk_rest.call(null,seq__14100_14115__$1);
var G__14118 = c__6962__auto___14116;
var G__14119 = cljs.core.count.call(null,c__6962__auto___14116);
var G__14120 = 0;
seq__14100_14105 = G__14117;
chunk__14101_14106 = G__14118;
count__14102_14107 = G__14119;
i__14103_14108 = G__14120;
continue;
}
} else
{var c_14121 = cljs.core.first.call(null,seq__14100_14115__$1);append_BANG_.call(null,parent__$1,c_14121);
{
var G__14122 = cljs.core.next.call(null,seq__14100_14115__$1);
var G__14123 = null;
var G__14124 = 0;
var G__14125 = 0;
seq__14100_14105 = G__14122;
chunk__14101_14106 = G__14123;
count__14102_14107 = G__14124;
i__14103_14108 = G__14125;
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
var G__14104 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14104__delegate.call(this,parent,child,more_children);};
G__14104.cljs$lang$maxFixedArity = 2;
G__14104.cljs$lang$applyTo = (function (arglist__14126){
var parent = cljs.core.first(arglist__14126);
arglist__14126 = cljs.core.next(arglist__14126);
var child = cljs.core.first(arglist__14126);
var more_children = cljs.core.rest(arglist__14126);
return G__14104__delegate(parent,child,more_children);
});
G__14104.cljs$core$IFn$_invoke$arity$variadic = G__14104__delegate;
return G__14104;
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
var prepend_BANG___2 = (function (parent,child){var G__14132 = dommy.template.__GT_node_like.call(null,parent);G__14132.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__14132;
});
var prepend_BANG___3 = (function() { 
var G__14137__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__14133_14138 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__14134_14139 = null;var count__14135_14140 = 0;var i__14136_14141 = 0;while(true){
if((i__14136_14141 < count__14135_14140))
{var c_14142 = cljs.core._nth.call(null,chunk__14134_14139,i__14136_14141);prepend_BANG_.call(null,parent__$1,c_14142);
{
var G__14143 = seq__14133_14138;
var G__14144 = chunk__14134_14139;
var G__14145 = count__14135_14140;
var G__14146 = (i__14136_14141 + 1);
seq__14133_14138 = G__14143;
chunk__14134_14139 = G__14144;
count__14135_14140 = G__14145;
i__14136_14141 = G__14146;
continue;
}
} else
{var temp__4092__auto___14147 = cljs.core.seq.call(null,seq__14133_14138);if(temp__4092__auto___14147)
{var seq__14133_14148__$1 = temp__4092__auto___14147;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14133_14148__$1))
{var c__6962__auto___14149 = cljs.core.chunk_first.call(null,seq__14133_14148__$1);{
var G__14150 = cljs.core.chunk_rest.call(null,seq__14133_14148__$1);
var G__14151 = c__6962__auto___14149;
var G__14152 = cljs.core.count.call(null,c__6962__auto___14149);
var G__14153 = 0;
seq__14133_14138 = G__14150;
chunk__14134_14139 = G__14151;
count__14135_14140 = G__14152;
i__14136_14141 = G__14153;
continue;
}
} else
{var c_14154 = cljs.core.first.call(null,seq__14133_14148__$1);prepend_BANG_.call(null,parent__$1,c_14154);
{
var G__14155 = cljs.core.next.call(null,seq__14133_14148__$1);
var G__14156 = null;
var G__14157 = 0;
var G__14158 = 0;
seq__14133_14138 = G__14155;
chunk__14134_14139 = G__14156;
count__14135_14140 = G__14157;
i__14136_14141 = G__14158;
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
var G__14137 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14137__delegate.call(this,parent,child,more_children);};
G__14137.cljs$lang$maxFixedArity = 2;
G__14137.cljs$lang$applyTo = (function (arglist__14159){
var parent = cljs.core.first(arglist__14159);
arglist__14159 = cljs.core.next(arglist__14159);
var child = cljs.core.first(arglist__14159);
var more_children = cljs.core.rest(arglist__14159);
return G__14137__delegate(parent,child,more_children);
});
G__14137.cljs$core$IFn$_invoke$arity$variadic = G__14137__delegate;
return G__14137;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___14160 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___14160))
{var next_14161 = temp__4090__auto___14160;parent.insertBefore(actual_node,next_14161);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__14163 = dommy.template.__GT_node_like.call(null,parent);G__14163.innerHTML = "";
dommy.core.append_BANG_.call(null,G__14163,node_like);
return G__14163;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__14165 = elem__$1.parentNode;G__14165.removeChild(elem__$1);
return G__14165;
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
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__14166_SHARP_){return p1__14166_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__14167_SHARP_){return !((p1__14167_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__14168){var vec__14169 = p__14168;var special_mouse_event = cljs.core.nth.call(null,vec__14169,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__14169,1,null);return cljs.core.PersistentVector.fromArray([special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3943__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3943__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__14170){
var elem = cljs.core.first(arglist__14170);
arglist__14170 = cljs.core.next(arglist__14170);
var f = cljs.core.first(arglist__14170);
var args = cljs.core.rest(arglist__14170);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__14171_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__14171_SHARP_));
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
var vec__14195_14218 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_14219 = cljs.core.nth.call(null,vec__14195_14218,0,null);var selector_14220 = cljs.core.nth.call(null,vec__14195_14218,1,null);var seq__14196_14221 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__14203_14222 = null;var count__14204_14223 = 0;var i__14205_14224 = 0;while(true){
if((i__14205_14224 < count__14204_14223))
{var vec__14212_14225 = cljs.core._nth.call(null,chunk__14203_14222,i__14205_14224);var orig_type_14226 = cljs.core.nth.call(null,vec__14212_14225,0,null);var f_14227 = cljs.core.nth.call(null,vec__14212_14225,1,null);var seq__14206_14228 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14226,cljs.core.PersistentArrayMap.fromArray([orig_type_14226,cljs.core.identity], true)));var chunk__14208_14229 = null;var count__14209_14230 = 0;var i__14210_14231 = 0;while(true){
if((i__14210_14231 < count__14209_14230))
{var vec__14213_14232 = cljs.core._nth.call(null,chunk__14208_14229,i__14210_14231);var actual_type_14233 = cljs.core.nth.call(null,vec__14213_14232,0,null);var factory_14234 = cljs.core.nth.call(null,vec__14213_14232,1,null);var canonical_f_14235 = (cljs.core.truth_(selector_14220)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14219,selector_14220):cljs.core.identity).call(null,factory_14234.call(null,f_14227));dommy.core.update_event_listeners_BANG_.call(null,elem_14219,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_14220,actual_type_14233,f_14227], true),canonical_f_14235);
if(cljs.core.truth_(elem_14219.addEventListener))
{elem_14219.addEventListener(cljs.core.name.call(null,actual_type_14233),canonical_f_14235);
} else
{elem_14219.attachEvent(cljs.core.name.call(null,actual_type_14233),canonical_f_14235);
}
{
var G__14236 = seq__14206_14228;
var G__14237 = chunk__14208_14229;
var G__14238 = count__14209_14230;
var G__14239 = (i__14210_14231 + 1);
seq__14206_14228 = G__14236;
chunk__14208_14229 = G__14237;
count__14209_14230 = G__14238;
i__14210_14231 = G__14239;
continue;
}
} else
{var temp__4092__auto___14240 = cljs.core.seq.call(null,seq__14206_14228);if(temp__4092__auto___14240)
{var seq__14206_14241__$1 = temp__4092__auto___14240;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14206_14241__$1))
{var c__6962__auto___14242 = cljs.core.chunk_first.call(null,seq__14206_14241__$1);{
var G__14243 = cljs.core.chunk_rest.call(null,seq__14206_14241__$1);
var G__14244 = c__6962__auto___14242;
var G__14245 = cljs.core.count.call(null,c__6962__auto___14242);
var G__14246 = 0;
seq__14206_14228 = G__14243;
chunk__14208_14229 = G__14244;
count__14209_14230 = G__14245;
i__14210_14231 = G__14246;
continue;
}
} else
{var vec__14214_14247 = cljs.core.first.call(null,seq__14206_14241__$1);var actual_type_14248 = cljs.core.nth.call(null,vec__14214_14247,0,null);var factory_14249 = cljs.core.nth.call(null,vec__14214_14247,1,null);var canonical_f_14250 = (cljs.core.truth_(selector_14220)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14219,selector_14220):cljs.core.identity).call(null,factory_14249.call(null,f_14227));dommy.core.update_event_listeners_BANG_.call(null,elem_14219,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_14220,actual_type_14248,f_14227], true),canonical_f_14250);
if(cljs.core.truth_(elem_14219.addEventListener))
{elem_14219.addEventListener(cljs.core.name.call(null,actual_type_14248),canonical_f_14250);
} else
{elem_14219.attachEvent(cljs.core.name.call(null,actual_type_14248),canonical_f_14250);
}
{
var G__14251 = cljs.core.next.call(null,seq__14206_14241__$1);
var G__14252 = null;
var G__14253 = 0;
var G__14254 = 0;
seq__14206_14228 = G__14251;
chunk__14208_14229 = G__14252;
count__14209_14230 = G__14253;
i__14210_14231 = G__14254;
continue;
}
}
} else
{}
}
break;
}
{
var G__14255 = seq__14196_14221;
var G__14256 = chunk__14203_14222;
var G__14257 = count__14204_14223;
var G__14258 = (i__14205_14224 + 1);
seq__14196_14221 = G__14255;
chunk__14203_14222 = G__14256;
count__14204_14223 = G__14257;
i__14205_14224 = G__14258;
continue;
}
} else
{var temp__4092__auto___14259 = cljs.core.seq.call(null,seq__14196_14221);if(temp__4092__auto___14259)
{var seq__14196_14260__$1 = temp__4092__auto___14259;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14196_14260__$1))
{var c__6962__auto___14261 = cljs.core.chunk_first.call(null,seq__14196_14260__$1);{
var G__14262 = cljs.core.chunk_rest.call(null,seq__14196_14260__$1);
var G__14263 = c__6962__auto___14261;
var G__14264 = cljs.core.count.call(null,c__6962__auto___14261);
var G__14265 = 0;
seq__14196_14221 = G__14262;
chunk__14203_14222 = G__14263;
count__14204_14223 = G__14264;
i__14205_14224 = G__14265;
continue;
}
} else
{var vec__14215_14266 = cljs.core.first.call(null,seq__14196_14260__$1);var orig_type_14267 = cljs.core.nth.call(null,vec__14215_14266,0,null);var f_14268 = cljs.core.nth.call(null,vec__14215_14266,1,null);var seq__14197_14269 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14267,cljs.core.PersistentArrayMap.fromArray([orig_type_14267,cljs.core.identity], true)));var chunk__14199_14270 = null;var count__14200_14271 = 0;var i__14201_14272 = 0;while(true){
if((i__14201_14272 < count__14200_14271))
{var vec__14216_14273 = cljs.core._nth.call(null,chunk__14199_14270,i__14201_14272);var actual_type_14274 = cljs.core.nth.call(null,vec__14216_14273,0,null);var factory_14275 = cljs.core.nth.call(null,vec__14216_14273,1,null);var canonical_f_14276 = (cljs.core.truth_(selector_14220)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14219,selector_14220):cljs.core.identity).call(null,factory_14275.call(null,f_14268));dommy.core.update_event_listeners_BANG_.call(null,elem_14219,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_14220,actual_type_14274,f_14268], true),canonical_f_14276);
if(cljs.core.truth_(elem_14219.addEventListener))
{elem_14219.addEventListener(cljs.core.name.call(null,actual_type_14274),canonical_f_14276);
} else
{elem_14219.attachEvent(cljs.core.name.call(null,actual_type_14274),canonical_f_14276);
}
{
var G__14277 = seq__14197_14269;
var G__14278 = chunk__14199_14270;
var G__14279 = count__14200_14271;
var G__14280 = (i__14201_14272 + 1);
seq__14197_14269 = G__14277;
chunk__14199_14270 = G__14278;
count__14200_14271 = G__14279;
i__14201_14272 = G__14280;
continue;
}
} else
{var temp__4092__auto___14281__$1 = cljs.core.seq.call(null,seq__14197_14269);if(temp__4092__auto___14281__$1)
{var seq__14197_14282__$1 = temp__4092__auto___14281__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14197_14282__$1))
{var c__6962__auto___14283 = cljs.core.chunk_first.call(null,seq__14197_14282__$1);{
var G__14284 = cljs.core.chunk_rest.call(null,seq__14197_14282__$1);
var G__14285 = c__6962__auto___14283;
var G__14286 = cljs.core.count.call(null,c__6962__auto___14283);
var G__14287 = 0;
seq__14197_14269 = G__14284;
chunk__14199_14270 = G__14285;
count__14200_14271 = G__14286;
i__14201_14272 = G__14287;
continue;
}
} else
{var vec__14217_14288 = cljs.core.first.call(null,seq__14197_14282__$1);var actual_type_14289 = cljs.core.nth.call(null,vec__14217_14288,0,null);var factory_14290 = cljs.core.nth.call(null,vec__14217_14288,1,null);var canonical_f_14291 = (cljs.core.truth_(selector_14220)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14219,selector_14220):cljs.core.identity).call(null,factory_14290.call(null,f_14268));dommy.core.update_event_listeners_BANG_.call(null,elem_14219,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_14220,actual_type_14289,f_14268], true),canonical_f_14291);
if(cljs.core.truth_(elem_14219.addEventListener))
{elem_14219.addEventListener(cljs.core.name.call(null,actual_type_14289),canonical_f_14291);
} else
{elem_14219.attachEvent(cljs.core.name.call(null,actual_type_14289),canonical_f_14291);
}
{
var G__14292 = cljs.core.next.call(null,seq__14197_14282__$1);
var G__14293 = null;
var G__14294 = 0;
var G__14295 = 0;
seq__14197_14269 = G__14292;
chunk__14199_14270 = G__14293;
count__14200_14271 = G__14294;
i__14201_14272 = G__14295;
continue;
}
}
} else
{}
}
break;
}
{
var G__14296 = cljs.core.next.call(null,seq__14196_14260__$1);
var G__14297 = null;
var G__14298 = 0;
var G__14299 = 0;
seq__14196_14221 = G__14296;
chunk__14203_14222 = G__14297;
count__14204_14223 = G__14298;
i__14205_14224 = G__14299;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__14300){
var elem_sel = cljs.core.first(arglist__14300);
var type_fs = cljs.core.rest(arglist__14300);
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
var vec__14324_14347 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_14348 = cljs.core.nth.call(null,vec__14324_14347,0,null);var selector_14349 = cljs.core.nth.call(null,vec__14324_14347,1,null);var seq__14325_14350 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__14332_14351 = null;var count__14333_14352 = 0;var i__14334_14353 = 0;while(true){
if((i__14334_14353 < count__14333_14352))
{var vec__14341_14354 = cljs.core._nth.call(null,chunk__14332_14351,i__14334_14353);var orig_type_14355 = cljs.core.nth.call(null,vec__14341_14354,0,null);var f_14356 = cljs.core.nth.call(null,vec__14341_14354,1,null);var seq__14335_14357 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14355,cljs.core.PersistentArrayMap.fromArray([orig_type_14355,cljs.core.identity], true)));var chunk__14337_14358 = null;var count__14338_14359 = 0;var i__14339_14360 = 0;while(true){
if((i__14339_14360 < count__14338_14359))
{var vec__14342_14361 = cljs.core._nth.call(null,chunk__14337_14358,i__14339_14360);var actual_type_14362 = cljs.core.nth.call(null,vec__14342_14361,0,null);var __14363 = cljs.core.nth.call(null,vec__14342_14361,1,null);var keys_14364 = cljs.core.PersistentVector.fromArray([selector_14349,actual_type_14362,f_14356], true);var canonical_f_14365 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14348),keys_14364);dommy.core.update_event_listeners_BANG_.call(null,elem_14348,dommy.utils.dissoc_in,keys_14364);
if(cljs.core.truth_(elem_14348.removeEventListener))
{elem_14348.removeEventListener(cljs.core.name.call(null,actual_type_14362),canonical_f_14365);
} else
{elem_14348.detachEvent(cljs.core.name.call(null,actual_type_14362),canonical_f_14365);
}
{
var G__14366 = seq__14335_14357;
var G__14367 = chunk__14337_14358;
var G__14368 = count__14338_14359;
var G__14369 = (i__14339_14360 + 1);
seq__14335_14357 = G__14366;
chunk__14337_14358 = G__14367;
count__14338_14359 = G__14368;
i__14339_14360 = G__14369;
continue;
}
} else
{var temp__4092__auto___14370 = cljs.core.seq.call(null,seq__14335_14357);if(temp__4092__auto___14370)
{var seq__14335_14371__$1 = temp__4092__auto___14370;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14335_14371__$1))
{var c__6962__auto___14372 = cljs.core.chunk_first.call(null,seq__14335_14371__$1);{
var G__14373 = cljs.core.chunk_rest.call(null,seq__14335_14371__$1);
var G__14374 = c__6962__auto___14372;
var G__14375 = cljs.core.count.call(null,c__6962__auto___14372);
var G__14376 = 0;
seq__14335_14357 = G__14373;
chunk__14337_14358 = G__14374;
count__14338_14359 = G__14375;
i__14339_14360 = G__14376;
continue;
}
} else
{var vec__14343_14377 = cljs.core.first.call(null,seq__14335_14371__$1);var actual_type_14378 = cljs.core.nth.call(null,vec__14343_14377,0,null);var __14379 = cljs.core.nth.call(null,vec__14343_14377,1,null);var keys_14380 = cljs.core.PersistentVector.fromArray([selector_14349,actual_type_14378,f_14356], true);var canonical_f_14381 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14348),keys_14380);dommy.core.update_event_listeners_BANG_.call(null,elem_14348,dommy.utils.dissoc_in,keys_14380);
if(cljs.core.truth_(elem_14348.removeEventListener))
{elem_14348.removeEventListener(cljs.core.name.call(null,actual_type_14378),canonical_f_14381);
} else
{elem_14348.detachEvent(cljs.core.name.call(null,actual_type_14378),canonical_f_14381);
}
{
var G__14382 = cljs.core.next.call(null,seq__14335_14371__$1);
var G__14383 = null;
var G__14384 = 0;
var G__14385 = 0;
seq__14335_14357 = G__14382;
chunk__14337_14358 = G__14383;
count__14338_14359 = G__14384;
i__14339_14360 = G__14385;
continue;
}
}
} else
{}
}
break;
}
{
var G__14386 = seq__14325_14350;
var G__14387 = chunk__14332_14351;
var G__14388 = count__14333_14352;
var G__14389 = (i__14334_14353 + 1);
seq__14325_14350 = G__14386;
chunk__14332_14351 = G__14387;
count__14333_14352 = G__14388;
i__14334_14353 = G__14389;
continue;
}
} else
{var temp__4092__auto___14390 = cljs.core.seq.call(null,seq__14325_14350);if(temp__4092__auto___14390)
{var seq__14325_14391__$1 = temp__4092__auto___14390;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14325_14391__$1))
{var c__6962__auto___14392 = cljs.core.chunk_first.call(null,seq__14325_14391__$1);{
var G__14393 = cljs.core.chunk_rest.call(null,seq__14325_14391__$1);
var G__14394 = c__6962__auto___14392;
var G__14395 = cljs.core.count.call(null,c__6962__auto___14392);
var G__14396 = 0;
seq__14325_14350 = G__14393;
chunk__14332_14351 = G__14394;
count__14333_14352 = G__14395;
i__14334_14353 = G__14396;
continue;
}
} else
{var vec__14344_14397 = cljs.core.first.call(null,seq__14325_14391__$1);var orig_type_14398 = cljs.core.nth.call(null,vec__14344_14397,0,null);var f_14399 = cljs.core.nth.call(null,vec__14344_14397,1,null);var seq__14326_14400 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14398,cljs.core.PersistentArrayMap.fromArray([orig_type_14398,cljs.core.identity], true)));var chunk__14328_14401 = null;var count__14329_14402 = 0;var i__14330_14403 = 0;while(true){
if((i__14330_14403 < count__14329_14402))
{var vec__14345_14404 = cljs.core._nth.call(null,chunk__14328_14401,i__14330_14403);var actual_type_14405 = cljs.core.nth.call(null,vec__14345_14404,0,null);var __14406 = cljs.core.nth.call(null,vec__14345_14404,1,null);var keys_14407 = cljs.core.PersistentVector.fromArray([selector_14349,actual_type_14405,f_14399], true);var canonical_f_14408 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14348),keys_14407);dommy.core.update_event_listeners_BANG_.call(null,elem_14348,dommy.utils.dissoc_in,keys_14407);
if(cljs.core.truth_(elem_14348.removeEventListener))
{elem_14348.removeEventListener(cljs.core.name.call(null,actual_type_14405),canonical_f_14408);
} else
{elem_14348.detachEvent(cljs.core.name.call(null,actual_type_14405),canonical_f_14408);
}
{
var G__14409 = seq__14326_14400;
var G__14410 = chunk__14328_14401;
var G__14411 = count__14329_14402;
var G__14412 = (i__14330_14403 + 1);
seq__14326_14400 = G__14409;
chunk__14328_14401 = G__14410;
count__14329_14402 = G__14411;
i__14330_14403 = G__14412;
continue;
}
} else
{var temp__4092__auto___14413__$1 = cljs.core.seq.call(null,seq__14326_14400);if(temp__4092__auto___14413__$1)
{var seq__14326_14414__$1 = temp__4092__auto___14413__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14326_14414__$1))
{var c__6962__auto___14415 = cljs.core.chunk_first.call(null,seq__14326_14414__$1);{
var G__14416 = cljs.core.chunk_rest.call(null,seq__14326_14414__$1);
var G__14417 = c__6962__auto___14415;
var G__14418 = cljs.core.count.call(null,c__6962__auto___14415);
var G__14419 = 0;
seq__14326_14400 = G__14416;
chunk__14328_14401 = G__14417;
count__14329_14402 = G__14418;
i__14330_14403 = G__14419;
continue;
}
} else
{var vec__14346_14420 = cljs.core.first.call(null,seq__14326_14414__$1);var actual_type_14421 = cljs.core.nth.call(null,vec__14346_14420,0,null);var __14422 = cljs.core.nth.call(null,vec__14346_14420,1,null);var keys_14423 = cljs.core.PersistentVector.fromArray([selector_14349,actual_type_14421,f_14399], true);var canonical_f_14424 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14348),keys_14423);dommy.core.update_event_listeners_BANG_.call(null,elem_14348,dommy.utils.dissoc_in,keys_14423);
if(cljs.core.truth_(elem_14348.removeEventListener))
{elem_14348.removeEventListener(cljs.core.name.call(null,actual_type_14421),canonical_f_14424);
} else
{elem_14348.detachEvent(cljs.core.name.call(null,actual_type_14421),canonical_f_14424);
}
{
var G__14425 = cljs.core.next.call(null,seq__14326_14414__$1);
var G__14426 = null;
var G__14427 = 0;
var G__14428 = 0;
seq__14326_14400 = G__14425;
chunk__14328_14401 = G__14426;
count__14329_14402 = G__14427;
i__14330_14403 = G__14428;
continue;
}
}
} else
{}
}
break;
}
{
var G__14429 = cljs.core.next.call(null,seq__14325_14391__$1);
var G__14430 = null;
var G__14431 = 0;
var G__14432 = 0;
seq__14325_14350 = G__14429;
chunk__14332_14351 = G__14430;
count__14333_14352 = G__14431;
i__14334_14353 = G__14432;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__14433){
var elem_sel = cljs.core.first(arglist__14433);
var type_fs = cljs.core.rest(arglist__14433);
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
var vec__14441_14448 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_14449 = cljs.core.nth.call(null,vec__14441_14448,0,null);var selector_14450 = cljs.core.nth.call(null,vec__14441_14448,1,null);var seq__14442_14451 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__14443_14452 = null;var count__14444_14453 = 0;var i__14445_14454 = 0;while(true){
if((i__14445_14454 < count__14444_14453))
{var vec__14446_14455 = cljs.core._nth.call(null,chunk__14443_14452,i__14445_14454);var type_14456 = cljs.core.nth.call(null,vec__14446_14455,0,null);var f_14457 = cljs.core.nth.call(null,vec__14446_14455,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_14456,((function (seq__14442_14451,chunk__14443_14452,count__14444_14453,i__14445_14454,vec__14446_14455,type_14456,f_14457){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_14456,this_fn);
return f_14457.call(null,e);
});})(seq__14442_14451,chunk__14443_14452,count__14444_14453,i__14445_14454,vec__14446_14455,type_14456,f_14457))
);
{
var G__14458 = seq__14442_14451;
var G__14459 = chunk__14443_14452;
var G__14460 = count__14444_14453;
var G__14461 = (i__14445_14454 + 1);
seq__14442_14451 = G__14458;
chunk__14443_14452 = G__14459;
count__14444_14453 = G__14460;
i__14445_14454 = G__14461;
continue;
}
} else
{var temp__4092__auto___14462 = cljs.core.seq.call(null,seq__14442_14451);if(temp__4092__auto___14462)
{var seq__14442_14463__$1 = temp__4092__auto___14462;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14442_14463__$1))
{var c__6962__auto___14464 = cljs.core.chunk_first.call(null,seq__14442_14463__$1);{
var G__14465 = cljs.core.chunk_rest.call(null,seq__14442_14463__$1);
var G__14466 = c__6962__auto___14464;
var G__14467 = cljs.core.count.call(null,c__6962__auto___14464);
var G__14468 = 0;
seq__14442_14451 = G__14465;
chunk__14443_14452 = G__14466;
count__14444_14453 = G__14467;
i__14445_14454 = G__14468;
continue;
}
} else
{var vec__14447_14469 = cljs.core.first.call(null,seq__14442_14463__$1);var type_14470 = cljs.core.nth.call(null,vec__14447_14469,0,null);var f_14471 = cljs.core.nth.call(null,vec__14447_14469,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_14470,((function (seq__14442_14451,chunk__14443_14452,count__14444_14453,i__14445_14454,vec__14447_14469,type_14470,f_14471,seq__14442_14463__$1,temp__4092__auto___14462){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_14470,this_fn);
return f_14471.call(null,e);
});})(seq__14442_14451,chunk__14443_14452,count__14444_14453,i__14445_14454,vec__14447_14469,type_14470,f_14471,seq__14442_14463__$1,temp__4092__auto___14462))
);
{
var G__14472 = cljs.core.next.call(null,seq__14442_14463__$1);
var G__14473 = null;
var G__14474 = 0;
var G__14475 = 0;
seq__14442_14451 = G__14472;
chunk__14443_14452 = G__14473;
count__14444_14453 = G__14474;
i__14445_14454 = G__14475;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__14476){
var elem_sel = cljs.core.first(arglist__14476);
var type_fs = cljs.core.rest(arglist__14476);
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
var fire_BANG___delegate = function (node,event_type,p__14477){var vec__14479 = p__14477;var update_event_BANG_ = cljs.core.nth.call(null,vec__14479,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__14477 = null;if (arguments.length > 2) {
  p__14477 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__14477);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__14480){
var node = cljs.core.first(arglist__14480);
arglist__14480 = cljs.core.next(arglist__14480);
var event_type = cljs.core.first(arglist__14480);
var p__14477 = cljs.core.rest(arglist__14480);
return fire_BANG___delegate(node,event_type,p__14477);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
