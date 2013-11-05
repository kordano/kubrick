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
var append_BANG___2 = (function (parent,child){var G__14078 = dommy.template.__GT_node_like.call(null,parent);G__14078.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__14078;
});
var append_BANG___3 = (function() { 
var G__14083__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__14079_14084 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__14080_14085 = null;var count__14081_14086 = 0;var i__14082_14087 = 0;while(true){
if((i__14082_14087 < count__14081_14086))
{var c_14088 = cljs.core._nth.call(null,chunk__14080_14085,i__14082_14087);append_BANG_.call(null,parent__$1,c_14088);
{
var G__14089 = seq__14079_14084;
var G__14090 = chunk__14080_14085;
var G__14091 = count__14081_14086;
var G__14092 = (i__14082_14087 + 1);
seq__14079_14084 = G__14089;
chunk__14080_14085 = G__14090;
count__14081_14086 = G__14091;
i__14082_14087 = G__14092;
continue;
}
} else
{var temp__4092__auto___14093 = cljs.core.seq.call(null,seq__14079_14084);if(temp__4092__auto___14093)
{var seq__14079_14094__$1 = temp__4092__auto___14093;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14079_14094__$1))
{var c__6931__auto___14095 = cljs.core.chunk_first.call(null,seq__14079_14094__$1);{
var G__14096 = cljs.core.chunk_rest.call(null,seq__14079_14094__$1);
var G__14097 = c__6931__auto___14095;
var G__14098 = cljs.core.count.call(null,c__6931__auto___14095);
var G__14099 = 0;
seq__14079_14084 = G__14096;
chunk__14080_14085 = G__14097;
count__14081_14086 = G__14098;
i__14082_14087 = G__14099;
continue;
}
} else
{var c_14100 = cljs.core.first.call(null,seq__14079_14094__$1);append_BANG_.call(null,parent__$1,c_14100);
{
var G__14101 = cljs.core.next.call(null,seq__14079_14094__$1);
var G__14102 = null;
var G__14103 = 0;
var G__14104 = 0;
seq__14079_14084 = G__14101;
chunk__14080_14085 = G__14102;
count__14081_14086 = G__14103;
i__14082_14087 = G__14104;
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
var G__14083 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14083__delegate.call(this,parent,child,more_children);};
G__14083.cljs$lang$maxFixedArity = 2;
G__14083.cljs$lang$applyTo = (function (arglist__14105){
var parent = cljs.core.first(arglist__14105);
arglist__14105 = cljs.core.next(arglist__14105);
var child = cljs.core.first(arglist__14105);
var more_children = cljs.core.rest(arglist__14105);
return G__14083__delegate(parent,child,more_children);
});
G__14083.cljs$core$IFn$_invoke$arity$variadic = G__14083__delegate;
return G__14083;
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
var prepend_BANG___2 = (function (parent,child){var G__14111 = dommy.template.__GT_node_like.call(null,parent);G__14111.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__14111;
});
var prepend_BANG___3 = (function() { 
var G__14116__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__14112_14117 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__14113_14118 = null;var count__14114_14119 = 0;var i__14115_14120 = 0;while(true){
if((i__14115_14120 < count__14114_14119))
{var c_14121 = cljs.core._nth.call(null,chunk__14113_14118,i__14115_14120);prepend_BANG_.call(null,parent__$1,c_14121);
{
var G__14122 = seq__14112_14117;
var G__14123 = chunk__14113_14118;
var G__14124 = count__14114_14119;
var G__14125 = (i__14115_14120 + 1);
seq__14112_14117 = G__14122;
chunk__14113_14118 = G__14123;
count__14114_14119 = G__14124;
i__14115_14120 = G__14125;
continue;
}
} else
{var temp__4092__auto___14126 = cljs.core.seq.call(null,seq__14112_14117);if(temp__4092__auto___14126)
{var seq__14112_14127__$1 = temp__4092__auto___14126;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14112_14127__$1))
{var c__6931__auto___14128 = cljs.core.chunk_first.call(null,seq__14112_14127__$1);{
var G__14129 = cljs.core.chunk_rest.call(null,seq__14112_14127__$1);
var G__14130 = c__6931__auto___14128;
var G__14131 = cljs.core.count.call(null,c__6931__auto___14128);
var G__14132 = 0;
seq__14112_14117 = G__14129;
chunk__14113_14118 = G__14130;
count__14114_14119 = G__14131;
i__14115_14120 = G__14132;
continue;
}
} else
{var c_14133 = cljs.core.first.call(null,seq__14112_14127__$1);prepend_BANG_.call(null,parent__$1,c_14133);
{
var G__14134 = cljs.core.next.call(null,seq__14112_14127__$1);
var G__14135 = null;
var G__14136 = 0;
var G__14137 = 0;
seq__14112_14117 = G__14134;
chunk__14113_14118 = G__14135;
count__14114_14119 = G__14136;
i__14115_14120 = G__14137;
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
var G__14116 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14116__delegate.call(this,parent,child,more_children);};
G__14116.cljs$lang$maxFixedArity = 2;
G__14116.cljs$lang$applyTo = (function (arglist__14138){
var parent = cljs.core.first(arglist__14138);
arglist__14138 = cljs.core.next(arglist__14138);
var child = cljs.core.first(arglist__14138);
var more_children = cljs.core.rest(arglist__14138);
return G__14116__delegate(parent,child,more_children);
});
G__14116.cljs$core$IFn$_invoke$arity$variadic = G__14116__delegate;
return G__14116;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___14139 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___14139))
{var next_14140 = temp__4090__auto___14139;parent.insertBefore(actual_node,next_14140);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__14142 = dommy.template.__GT_node_like.call(null,parent);G__14142.innerHTML = "";
dommy.core.append_BANG_.call(null,G__14142,node_like);
return G__14142;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__14144 = elem__$1.parentNode;G__14144.removeChild(elem__$1);
return G__14144;
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
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__14145_SHARP_){return p1__14145_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__14146_SHARP_){return !((p1__14146_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__14147){var vec__14148 = p__14147;var special_mouse_event = cljs.core.nth.call(null,vec__14148,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__14148,1,null);return cljs.core.PersistentVector.fromArray([special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3943__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3943__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__14149){
var elem = cljs.core.first(arglist__14149);
arglist__14149 = cljs.core.next(arglist__14149);
var f = cljs.core.first(arglist__14149);
var args = cljs.core.rest(arglist__14149);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__14150_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__14150_SHARP_));
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
var vec__14174_14197 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_14198 = cljs.core.nth.call(null,vec__14174_14197,0,null);var selector_14199 = cljs.core.nth.call(null,vec__14174_14197,1,null);var seq__14175_14200 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__14182_14201 = null;var count__14183_14202 = 0;var i__14184_14203 = 0;while(true){
if((i__14184_14203 < count__14183_14202))
{var vec__14191_14204 = cljs.core._nth.call(null,chunk__14182_14201,i__14184_14203);var orig_type_14205 = cljs.core.nth.call(null,vec__14191_14204,0,null);var f_14206 = cljs.core.nth.call(null,vec__14191_14204,1,null);var seq__14185_14207 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14205,cljs.core.PersistentArrayMap.fromArray([orig_type_14205,cljs.core.identity], true)));var chunk__14187_14208 = null;var count__14188_14209 = 0;var i__14189_14210 = 0;while(true){
if((i__14189_14210 < count__14188_14209))
{var vec__14192_14211 = cljs.core._nth.call(null,chunk__14187_14208,i__14189_14210);var actual_type_14212 = cljs.core.nth.call(null,vec__14192_14211,0,null);var factory_14213 = cljs.core.nth.call(null,vec__14192_14211,1,null);var canonical_f_14214 = (cljs.core.truth_(selector_14199)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14198,selector_14199):cljs.core.identity).call(null,factory_14213.call(null,f_14206));dommy.core.update_event_listeners_BANG_.call(null,elem_14198,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_14199,actual_type_14212,f_14206], true),canonical_f_14214);
if(cljs.core.truth_(elem_14198.addEventListener))
{elem_14198.addEventListener(cljs.core.name.call(null,actual_type_14212),canonical_f_14214);
} else
{elem_14198.attachEvent(cljs.core.name.call(null,actual_type_14212),canonical_f_14214);
}
{
var G__14215 = seq__14185_14207;
var G__14216 = chunk__14187_14208;
var G__14217 = count__14188_14209;
var G__14218 = (i__14189_14210 + 1);
seq__14185_14207 = G__14215;
chunk__14187_14208 = G__14216;
count__14188_14209 = G__14217;
i__14189_14210 = G__14218;
continue;
}
} else
{var temp__4092__auto___14219 = cljs.core.seq.call(null,seq__14185_14207);if(temp__4092__auto___14219)
{var seq__14185_14220__$1 = temp__4092__auto___14219;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14185_14220__$1))
{var c__6931__auto___14221 = cljs.core.chunk_first.call(null,seq__14185_14220__$1);{
var G__14222 = cljs.core.chunk_rest.call(null,seq__14185_14220__$1);
var G__14223 = c__6931__auto___14221;
var G__14224 = cljs.core.count.call(null,c__6931__auto___14221);
var G__14225 = 0;
seq__14185_14207 = G__14222;
chunk__14187_14208 = G__14223;
count__14188_14209 = G__14224;
i__14189_14210 = G__14225;
continue;
}
} else
{var vec__14193_14226 = cljs.core.first.call(null,seq__14185_14220__$1);var actual_type_14227 = cljs.core.nth.call(null,vec__14193_14226,0,null);var factory_14228 = cljs.core.nth.call(null,vec__14193_14226,1,null);var canonical_f_14229 = (cljs.core.truth_(selector_14199)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14198,selector_14199):cljs.core.identity).call(null,factory_14228.call(null,f_14206));dommy.core.update_event_listeners_BANG_.call(null,elem_14198,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_14199,actual_type_14227,f_14206], true),canonical_f_14229);
if(cljs.core.truth_(elem_14198.addEventListener))
{elem_14198.addEventListener(cljs.core.name.call(null,actual_type_14227),canonical_f_14229);
} else
{elem_14198.attachEvent(cljs.core.name.call(null,actual_type_14227),canonical_f_14229);
}
{
var G__14230 = cljs.core.next.call(null,seq__14185_14220__$1);
var G__14231 = null;
var G__14232 = 0;
var G__14233 = 0;
seq__14185_14207 = G__14230;
chunk__14187_14208 = G__14231;
count__14188_14209 = G__14232;
i__14189_14210 = G__14233;
continue;
}
}
} else
{}
}
break;
}
{
var G__14234 = seq__14175_14200;
var G__14235 = chunk__14182_14201;
var G__14236 = count__14183_14202;
var G__14237 = (i__14184_14203 + 1);
seq__14175_14200 = G__14234;
chunk__14182_14201 = G__14235;
count__14183_14202 = G__14236;
i__14184_14203 = G__14237;
continue;
}
} else
{var temp__4092__auto___14238 = cljs.core.seq.call(null,seq__14175_14200);if(temp__4092__auto___14238)
{var seq__14175_14239__$1 = temp__4092__auto___14238;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14175_14239__$1))
{var c__6931__auto___14240 = cljs.core.chunk_first.call(null,seq__14175_14239__$1);{
var G__14241 = cljs.core.chunk_rest.call(null,seq__14175_14239__$1);
var G__14242 = c__6931__auto___14240;
var G__14243 = cljs.core.count.call(null,c__6931__auto___14240);
var G__14244 = 0;
seq__14175_14200 = G__14241;
chunk__14182_14201 = G__14242;
count__14183_14202 = G__14243;
i__14184_14203 = G__14244;
continue;
}
} else
{var vec__14194_14245 = cljs.core.first.call(null,seq__14175_14239__$1);var orig_type_14246 = cljs.core.nth.call(null,vec__14194_14245,0,null);var f_14247 = cljs.core.nth.call(null,vec__14194_14245,1,null);var seq__14176_14248 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14246,cljs.core.PersistentArrayMap.fromArray([orig_type_14246,cljs.core.identity], true)));var chunk__14178_14249 = null;var count__14179_14250 = 0;var i__14180_14251 = 0;while(true){
if((i__14180_14251 < count__14179_14250))
{var vec__14195_14252 = cljs.core._nth.call(null,chunk__14178_14249,i__14180_14251);var actual_type_14253 = cljs.core.nth.call(null,vec__14195_14252,0,null);var factory_14254 = cljs.core.nth.call(null,vec__14195_14252,1,null);var canonical_f_14255 = (cljs.core.truth_(selector_14199)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14198,selector_14199):cljs.core.identity).call(null,factory_14254.call(null,f_14247));dommy.core.update_event_listeners_BANG_.call(null,elem_14198,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_14199,actual_type_14253,f_14247], true),canonical_f_14255);
if(cljs.core.truth_(elem_14198.addEventListener))
{elem_14198.addEventListener(cljs.core.name.call(null,actual_type_14253),canonical_f_14255);
} else
{elem_14198.attachEvent(cljs.core.name.call(null,actual_type_14253),canonical_f_14255);
}
{
var G__14256 = seq__14176_14248;
var G__14257 = chunk__14178_14249;
var G__14258 = count__14179_14250;
var G__14259 = (i__14180_14251 + 1);
seq__14176_14248 = G__14256;
chunk__14178_14249 = G__14257;
count__14179_14250 = G__14258;
i__14180_14251 = G__14259;
continue;
}
} else
{var temp__4092__auto___14260__$1 = cljs.core.seq.call(null,seq__14176_14248);if(temp__4092__auto___14260__$1)
{var seq__14176_14261__$1 = temp__4092__auto___14260__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14176_14261__$1))
{var c__6931__auto___14262 = cljs.core.chunk_first.call(null,seq__14176_14261__$1);{
var G__14263 = cljs.core.chunk_rest.call(null,seq__14176_14261__$1);
var G__14264 = c__6931__auto___14262;
var G__14265 = cljs.core.count.call(null,c__6931__auto___14262);
var G__14266 = 0;
seq__14176_14248 = G__14263;
chunk__14178_14249 = G__14264;
count__14179_14250 = G__14265;
i__14180_14251 = G__14266;
continue;
}
} else
{var vec__14196_14267 = cljs.core.first.call(null,seq__14176_14261__$1);var actual_type_14268 = cljs.core.nth.call(null,vec__14196_14267,0,null);var factory_14269 = cljs.core.nth.call(null,vec__14196_14267,1,null);var canonical_f_14270 = (cljs.core.truth_(selector_14199)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14198,selector_14199):cljs.core.identity).call(null,factory_14269.call(null,f_14247));dommy.core.update_event_listeners_BANG_.call(null,elem_14198,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_14199,actual_type_14268,f_14247], true),canonical_f_14270);
if(cljs.core.truth_(elem_14198.addEventListener))
{elem_14198.addEventListener(cljs.core.name.call(null,actual_type_14268),canonical_f_14270);
} else
{elem_14198.attachEvent(cljs.core.name.call(null,actual_type_14268),canonical_f_14270);
}
{
var G__14271 = cljs.core.next.call(null,seq__14176_14261__$1);
var G__14272 = null;
var G__14273 = 0;
var G__14274 = 0;
seq__14176_14248 = G__14271;
chunk__14178_14249 = G__14272;
count__14179_14250 = G__14273;
i__14180_14251 = G__14274;
continue;
}
}
} else
{}
}
break;
}
{
var G__14275 = cljs.core.next.call(null,seq__14175_14239__$1);
var G__14276 = null;
var G__14277 = 0;
var G__14278 = 0;
seq__14175_14200 = G__14275;
chunk__14182_14201 = G__14276;
count__14183_14202 = G__14277;
i__14184_14203 = G__14278;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__14279){
var elem_sel = cljs.core.first(arglist__14279);
var type_fs = cljs.core.rest(arglist__14279);
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
var vec__14303_14326 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_14327 = cljs.core.nth.call(null,vec__14303_14326,0,null);var selector_14328 = cljs.core.nth.call(null,vec__14303_14326,1,null);var seq__14304_14329 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__14311_14330 = null;var count__14312_14331 = 0;var i__14313_14332 = 0;while(true){
if((i__14313_14332 < count__14312_14331))
{var vec__14320_14333 = cljs.core._nth.call(null,chunk__14311_14330,i__14313_14332);var orig_type_14334 = cljs.core.nth.call(null,vec__14320_14333,0,null);var f_14335 = cljs.core.nth.call(null,vec__14320_14333,1,null);var seq__14314_14336 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14334,cljs.core.PersistentArrayMap.fromArray([orig_type_14334,cljs.core.identity], true)));var chunk__14316_14337 = null;var count__14317_14338 = 0;var i__14318_14339 = 0;while(true){
if((i__14318_14339 < count__14317_14338))
{var vec__14321_14340 = cljs.core._nth.call(null,chunk__14316_14337,i__14318_14339);var actual_type_14341 = cljs.core.nth.call(null,vec__14321_14340,0,null);var __14342 = cljs.core.nth.call(null,vec__14321_14340,1,null);var keys_14343 = cljs.core.PersistentVector.fromArray([selector_14328,actual_type_14341,f_14335], true);var canonical_f_14344 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14327),keys_14343);dommy.core.update_event_listeners_BANG_.call(null,elem_14327,dommy.utils.dissoc_in,keys_14343);
if(cljs.core.truth_(elem_14327.removeEventListener))
{elem_14327.removeEventListener(cljs.core.name.call(null,actual_type_14341),canonical_f_14344);
} else
{elem_14327.detachEvent(cljs.core.name.call(null,actual_type_14341),canonical_f_14344);
}
{
var G__14345 = seq__14314_14336;
var G__14346 = chunk__14316_14337;
var G__14347 = count__14317_14338;
var G__14348 = (i__14318_14339 + 1);
seq__14314_14336 = G__14345;
chunk__14316_14337 = G__14346;
count__14317_14338 = G__14347;
i__14318_14339 = G__14348;
continue;
}
} else
{var temp__4092__auto___14349 = cljs.core.seq.call(null,seq__14314_14336);if(temp__4092__auto___14349)
{var seq__14314_14350__$1 = temp__4092__auto___14349;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14314_14350__$1))
{var c__6931__auto___14351 = cljs.core.chunk_first.call(null,seq__14314_14350__$1);{
var G__14352 = cljs.core.chunk_rest.call(null,seq__14314_14350__$1);
var G__14353 = c__6931__auto___14351;
var G__14354 = cljs.core.count.call(null,c__6931__auto___14351);
var G__14355 = 0;
seq__14314_14336 = G__14352;
chunk__14316_14337 = G__14353;
count__14317_14338 = G__14354;
i__14318_14339 = G__14355;
continue;
}
} else
{var vec__14322_14356 = cljs.core.first.call(null,seq__14314_14350__$1);var actual_type_14357 = cljs.core.nth.call(null,vec__14322_14356,0,null);var __14358 = cljs.core.nth.call(null,vec__14322_14356,1,null);var keys_14359 = cljs.core.PersistentVector.fromArray([selector_14328,actual_type_14357,f_14335], true);var canonical_f_14360 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14327),keys_14359);dommy.core.update_event_listeners_BANG_.call(null,elem_14327,dommy.utils.dissoc_in,keys_14359);
if(cljs.core.truth_(elem_14327.removeEventListener))
{elem_14327.removeEventListener(cljs.core.name.call(null,actual_type_14357),canonical_f_14360);
} else
{elem_14327.detachEvent(cljs.core.name.call(null,actual_type_14357),canonical_f_14360);
}
{
var G__14361 = cljs.core.next.call(null,seq__14314_14350__$1);
var G__14362 = null;
var G__14363 = 0;
var G__14364 = 0;
seq__14314_14336 = G__14361;
chunk__14316_14337 = G__14362;
count__14317_14338 = G__14363;
i__14318_14339 = G__14364;
continue;
}
}
} else
{}
}
break;
}
{
var G__14365 = seq__14304_14329;
var G__14366 = chunk__14311_14330;
var G__14367 = count__14312_14331;
var G__14368 = (i__14313_14332 + 1);
seq__14304_14329 = G__14365;
chunk__14311_14330 = G__14366;
count__14312_14331 = G__14367;
i__14313_14332 = G__14368;
continue;
}
} else
{var temp__4092__auto___14369 = cljs.core.seq.call(null,seq__14304_14329);if(temp__4092__auto___14369)
{var seq__14304_14370__$1 = temp__4092__auto___14369;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14304_14370__$1))
{var c__6931__auto___14371 = cljs.core.chunk_first.call(null,seq__14304_14370__$1);{
var G__14372 = cljs.core.chunk_rest.call(null,seq__14304_14370__$1);
var G__14373 = c__6931__auto___14371;
var G__14374 = cljs.core.count.call(null,c__6931__auto___14371);
var G__14375 = 0;
seq__14304_14329 = G__14372;
chunk__14311_14330 = G__14373;
count__14312_14331 = G__14374;
i__14313_14332 = G__14375;
continue;
}
} else
{var vec__14323_14376 = cljs.core.first.call(null,seq__14304_14370__$1);var orig_type_14377 = cljs.core.nth.call(null,vec__14323_14376,0,null);var f_14378 = cljs.core.nth.call(null,vec__14323_14376,1,null);var seq__14305_14379 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14377,cljs.core.PersistentArrayMap.fromArray([orig_type_14377,cljs.core.identity], true)));var chunk__14307_14380 = null;var count__14308_14381 = 0;var i__14309_14382 = 0;while(true){
if((i__14309_14382 < count__14308_14381))
{var vec__14324_14383 = cljs.core._nth.call(null,chunk__14307_14380,i__14309_14382);var actual_type_14384 = cljs.core.nth.call(null,vec__14324_14383,0,null);var __14385 = cljs.core.nth.call(null,vec__14324_14383,1,null);var keys_14386 = cljs.core.PersistentVector.fromArray([selector_14328,actual_type_14384,f_14378], true);var canonical_f_14387 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14327),keys_14386);dommy.core.update_event_listeners_BANG_.call(null,elem_14327,dommy.utils.dissoc_in,keys_14386);
if(cljs.core.truth_(elem_14327.removeEventListener))
{elem_14327.removeEventListener(cljs.core.name.call(null,actual_type_14384),canonical_f_14387);
} else
{elem_14327.detachEvent(cljs.core.name.call(null,actual_type_14384),canonical_f_14387);
}
{
var G__14388 = seq__14305_14379;
var G__14389 = chunk__14307_14380;
var G__14390 = count__14308_14381;
var G__14391 = (i__14309_14382 + 1);
seq__14305_14379 = G__14388;
chunk__14307_14380 = G__14389;
count__14308_14381 = G__14390;
i__14309_14382 = G__14391;
continue;
}
} else
{var temp__4092__auto___14392__$1 = cljs.core.seq.call(null,seq__14305_14379);if(temp__4092__auto___14392__$1)
{var seq__14305_14393__$1 = temp__4092__auto___14392__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14305_14393__$1))
{var c__6931__auto___14394 = cljs.core.chunk_first.call(null,seq__14305_14393__$1);{
var G__14395 = cljs.core.chunk_rest.call(null,seq__14305_14393__$1);
var G__14396 = c__6931__auto___14394;
var G__14397 = cljs.core.count.call(null,c__6931__auto___14394);
var G__14398 = 0;
seq__14305_14379 = G__14395;
chunk__14307_14380 = G__14396;
count__14308_14381 = G__14397;
i__14309_14382 = G__14398;
continue;
}
} else
{var vec__14325_14399 = cljs.core.first.call(null,seq__14305_14393__$1);var actual_type_14400 = cljs.core.nth.call(null,vec__14325_14399,0,null);var __14401 = cljs.core.nth.call(null,vec__14325_14399,1,null);var keys_14402 = cljs.core.PersistentVector.fromArray([selector_14328,actual_type_14400,f_14378], true);var canonical_f_14403 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14327),keys_14402);dommy.core.update_event_listeners_BANG_.call(null,elem_14327,dommy.utils.dissoc_in,keys_14402);
if(cljs.core.truth_(elem_14327.removeEventListener))
{elem_14327.removeEventListener(cljs.core.name.call(null,actual_type_14400),canonical_f_14403);
} else
{elem_14327.detachEvent(cljs.core.name.call(null,actual_type_14400),canonical_f_14403);
}
{
var G__14404 = cljs.core.next.call(null,seq__14305_14393__$1);
var G__14405 = null;
var G__14406 = 0;
var G__14407 = 0;
seq__14305_14379 = G__14404;
chunk__14307_14380 = G__14405;
count__14308_14381 = G__14406;
i__14309_14382 = G__14407;
continue;
}
}
} else
{}
}
break;
}
{
var G__14408 = cljs.core.next.call(null,seq__14304_14370__$1);
var G__14409 = null;
var G__14410 = 0;
var G__14411 = 0;
seq__14304_14329 = G__14408;
chunk__14311_14330 = G__14409;
count__14312_14331 = G__14410;
i__14313_14332 = G__14411;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__14412){
var elem_sel = cljs.core.first(arglist__14412);
var type_fs = cljs.core.rest(arglist__14412);
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
var vec__14420_14427 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_14428 = cljs.core.nth.call(null,vec__14420_14427,0,null);var selector_14429 = cljs.core.nth.call(null,vec__14420_14427,1,null);var seq__14421_14430 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__14422_14431 = null;var count__14423_14432 = 0;var i__14424_14433 = 0;while(true){
if((i__14424_14433 < count__14423_14432))
{var vec__14425_14434 = cljs.core._nth.call(null,chunk__14422_14431,i__14424_14433);var type_14435 = cljs.core.nth.call(null,vec__14425_14434,0,null);var f_14436 = cljs.core.nth.call(null,vec__14425_14434,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_14435,((function (seq__14421_14430,chunk__14422_14431,count__14423_14432,i__14424_14433,vec__14425_14434,type_14435,f_14436){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_14435,this_fn);
return f_14436.call(null,e);
});})(seq__14421_14430,chunk__14422_14431,count__14423_14432,i__14424_14433,vec__14425_14434,type_14435,f_14436))
);
{
var G__14437 = seq__14421_14430;
var G__14438 = chunk__14422_14431;
var G__14439 = count__14423_14432;
var G__14440 = (i__14424_14433 + 1);
seq__14421_14430 = G__14437;
chunk__14422_14431 = G__14438;
count__14423_14432 = G__14439;
i__14424_14433 = G__14440;
continue;
}
} else
{var temp__4092__auto___14441 = cljs.core.seq.call(null,seq__14421_14430);if(temp__4092__auto___14441)
{var seq__14421_14442__$1 = temp__4092__auto___14441;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14421_14442__$1))
{var c__6931__auto___14443 = cljs.core.chunk_first.call(null,seq__14421_14442__$1);{
var G__14444 = cljs.core.chunk_rest.call(null,seq__14421_14442__$1);
var G__14445 = c__6931__auto___14443;
var G__14446 = cljs.core.count.call(null,c__6931__auto___14443);
var G__14447 = 0;
seq__14421_14430 = G__14444;
chunk__14422_14431 = G__14445;
count__14423_14432 = G__14446;
i__14424_14433 = G__14447;
continue;
}
} else
{var vec__14426_14448 = cljs.core.first.call(null,seq__14421_14442__$1);var type_14449 = cljs.core.nth.call(null,vec__14426_14448,0,null);var f_14450 = cljs.core.nth.call(null,vec__14426_14448,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_14449,((function (seq__14421_14430,chunk__14422_14431,count__14423_14432,i__14424_14433,vec__14426_14448,type_14449,f_14450,seq__14421_14442__$1,temp__4092__auto___14441){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_14449,this_fn);
return f_14450.call(null,e);
});})(seq__14421_14430,chunk__14422_14431,count__14423_14432,i__14424_14433,vec__14426_14448,type_14449,f_14450,seq__14421_14442__$1,temp__4092__auto___14441))
);
{
var G__14451 = cljs.core.next.call(null,seq__14421_14442__$1);
var G__14452 = null;
var G__14453 = 0;
var G__14454 = 0;
seq__14421_14430 = G__14451;
chunk__14422_14431 = G__14452;
count__14423_14432 = G__14453;
i__14424_14433 = G__14454;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__14455){
var elem_sel = cljs.core.first(arglist__14455);
var type_fs = cljs.core.rest(arglist__14455);
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
var fire_BANG___delegate = function (node,event_type,p__14456){var vec__14458 = p__14456;var update_event_BANG_ = cljs.core.nth.call(null,vec__14458,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__14456 = null;if (arguments.length > 2) {
  p__14456 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__14456);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__14459){
var node = cljs.core.first(arglist__14459);
arglist__14459 = cljs.core.next(arglist__14459);
var event_type = cljs.core.first(arglist__14459);
var p__14456 = cljs.core.rest(arglist__14459);
return fire_BANG___delegate(node,event_type,p__14456);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
