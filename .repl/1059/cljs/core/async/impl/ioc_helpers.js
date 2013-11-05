goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = 0;
cljs.core.async.impl.ioc_helpers.STATE_IDX = 1;
cljs.core.async.impl.ioc_helpers.VALUE_IDX = 2;
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = 3;
cljs.core.async.impl.ioc_helpers.USER_START_IDX = 4;
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){return cljs.core.keyword_identical_QMARK_.call(null,(state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),new cljs.core.Keyword(null,"finished","finished",4635210724));
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t26983 !== 'undefined')
{} else
{goog.provide('cljs.core.async.impl.ioc_helpers.t26983');

/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t26983 = (function (f,fn_handler,meta26984){
this.f = f;
this.fn_handler = fn_handler;
this.meta26984 = meta26984;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t26983.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t26983.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t26983";
cljs.core.async.impl.ioc_helpers.t26983.cljs$lang$ctorPrWriter = (function (this__19659__auto__,writer__19660__auto__,opt__19661__auto__){return cljs.core._write.call(null,writer__19660__auto__,"cljs.core.async.impl.ioc-helpers/t26983");
});
cljs.core.async.impl.ioc_helpers.t26983.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t26983.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return true;
});
cljs.core.async.impl.ioc_helpers.t26983.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
return self__.f;
});
cljs.core.async.impl.ioc_helpers.t26983.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26985){var self__ = this;
return self__.meta26984;
});
cljs.core.async.impl.ioc_helpers.t26983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26985,meta26984__$1){var self__ = this;
return (new cljs.core.async.impl.ioc_helpers.t26983(self__.f,self__.fn_handler,meta26984__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t26983 = (function __GT_t26983(f__$1,fn_handler__$1,meta26984){return (new cljs.core.async.impl.ioc_helpers.t26983(f__$1,fn_handler__$1,meta26984));
});
}
return (new cljs.core.async.impl.ioc_helpers.t26983(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e26987){if((e26987 instanceof Object))
{var ex = e26987;cljs.core.async.impl.protocols.close_BANG_.call(null,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.USER_START_IDX));
throw ex;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26987;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4090__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){var statearr_26990_26992 = state;(statearr_26990_26992[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_26990_26992[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_26991_26993 = state;(statearr_26991_26993[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_26991_26993[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (){var statearr_26996_26998 = state;(statearr_26996_26998[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_26996_26998[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_26997_26999 = state;(statearr_26997_26999[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_26997_26999[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__27000){var map__27005 = p__27000;var map__27005__$1 = ((cljs.core.seq_QMARK_.call(null,map__27005))?cljs.core.apply.call(null,cljs.core.hash_map,map__27005):map__27005);var opts = map__27005__$1;var statearr_27006_27009 = state;(statearr_27006_27009[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts.call(null,(function (val){var statearr_27007_27010 = state;(statearr_27007_27010[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;var statearr_27008_27011 = state;(statearr_27008_27011[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__27000 = null;if (arguments.length > 3) {
  p__27000 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__27000);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__27012){
var state = cljs.core.first(arglist__27012);
arglist__27012 = cljs.core.next(arglist__27012);
var cont_block = cljs.core.first(arglist__27012);
arglist__27012 = cljs.core.next(arglist__27012);
var ports = cljs.core.first(arglist__27012);
var p__27000 = cljs.core.rest(arglist__27012);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__27000);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);if((value == null))
{} else
{cljs.core.async.impl.protocols.put_BANG_.call(null,c,value,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (){return null;
})));
}
cljs.core.async.impl.protocols.close_BANG_.call(null,c);
return c;
});
