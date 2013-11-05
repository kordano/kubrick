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
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t13399 !== 'undefined')
{} else
{goog.provide('cljs.core.async.impl.ioc_helpers.t13399');

/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t13399 = (function (f,fn_handler,meta13400){
this.f = f;
this.fn_handler = fn_handler;
this.meta13400 = meta13400;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t13399.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t13399.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t13399";
cljs.core.async.impl.ioc_helpers.t13399.cljs$lang$ctorPrWriter = (function (this__6747__auto__,writer__6748__auto__,opt__6749__auto__){return cljs.core._write.call(null,writer__6748__auto__,"cljs.core.async.impl.ioc-helpers/t13399");
});
cljs.core.async.impl.ioc_helpers.t13399.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t13399.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return true;
});
cljs.core.async.impl.ioc_helpers.t13399.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
return self__.f;
});
cljs.core.async.impl.ioc_helpers.t13399.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13401){var self__ = this;
return self__.meta13400;
});
cljs.core.async.impl.ioc_helpers.t13399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13401,meta13400__$1){var self__ = this;
return (new cljs.core.async.impl.ioc_helpers.t13399(self__.f,self__.fn_handler,meta13400__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t13399 = (function __GT_t13399(f__$1,fn_handler__$1,meta13400){return (new cljs.core.async.impl.ioc_helpers.t13399(f__$1,fn_handler__$1,meta13400));
});
}
return (new cljs.core.async.impl.ioc_helpers.t13399(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e13403){if((e13403 instanceof Object))
{var ex = e13403;cljs.core.async.impl.protocols.close_BANG_.call(null,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.USER_START_IDX));
throw ex;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13403;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4090__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){var statearr_13406_13408 = state;(statearr_13406_13408[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_13406_13408[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_13407_13409 = state;(statearr_13407_13409[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_13407_13409[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (){var statearr_13412_13414 = state;(statearr_13412_13414[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_13412_13414[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_13413_13415 = state;(statearr_13413_13415[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_13413_13415[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__13416){var map__13421 = p__13416;var map__13421__$1 = ((cljs.core.seq_QMARK_.call(null,map__13421))?cljs.core.apply.call(null,cljs.core.hash_map,map__13421):map__13421);var opts = map__13421__$1;var statearr_13422_13425 = state;(statearr_13422_13425[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts.call(null,(function (val){var statearr_13423_13426 = state;(statearr_13423_13426[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;var statearr_13424_13427 = state;(statearr_13424_13427[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__13416 = null;if (arguments.length > 3) {
  p__13416 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__13416);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__13428){
var state = cljs.core.first(arglist__13428);
arglist__13428 = cljs.core.next(arglist__13428);
var cont_block = cljs.core.first(arglist__13428);
arglist__13428 = cljs.core.next(arglist__13428);
var ports = cljs.core.first(arglist__13428);
var p__13416 = cljs.core.rest(arglist__13428);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__13416);
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
