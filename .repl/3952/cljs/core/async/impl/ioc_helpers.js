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
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t14332 !== 'undefined')
{} else
{goog.provide('cljs.core.async.impl.ioc_helpers.t14332');

/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t14332 = (function (f,fn_handler,meta14333){
this.f = f;
this.fn_handler = fn_handler;
this.meta14333 = meta14333;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t14332.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t14332.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t14332";
cljs.core.async.impl.ioc_helpers.t14332.cljs$lang$ctorPrWriter = (function (this__6744__auto__,writer__6745__auto__,opt__6746__auto__){return cljs.core._write.call(null,writer__6745__auto__,"cljs.core.async.impl.ioc-helpers/t14332");
});
cljs.core.async.impl.ioc_helpers.t14332.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t14332.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return true;
});
cljs.core.async.impl.ioc_helpers.t14332.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
return self__.f;
});
cljs.core.async.impl.ioc_helpers.t14332.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14334){var self__ = this;
return self__.meta14333;
});
cljs.core.async.impl.ioc_helpers.t14332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14334,meta14333__$1){var self__ = this;
return (new cljs.core.async.impl.ioc_helpers.t14332(self__.f,self__.fn_handler,meta14333__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t14332 = (function __GT_t14332(f__$1,fn_handler__$1,meta14333){return (new cljs.core.async.impl.ioc_helpers.t14332(f__$1,fn_handler__$1,meta14333));
});
}
return (new cljs.core.async.impl.ioc_helpers.t14332(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e14336){if((e14336 instanceof Object))
{var ex = e14336;cljs.core.async.impl.protocols.close_BANG_.call(null,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.USER_START_IDX));
throw ex;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14336;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4090__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){var statearr_14339_14341 = state;(statearr_14339_14341[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_14339_14341[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_14340_14342 = state;(statearr_14340_14342[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_14340_14342[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (){var statearr_14345_14347 = state;(statearr_14345_14347[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_14345_14347[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_14346_14348 = state;(statearr_14346_14348[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_14346_14348[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__14349){var map__14354 = p__14349;var map__14354__$1 = ((cljs.core.seq_QMARK_.call(null,map__14354))?cljs.core.apply.call(null,cljs.core.hash_map,map__14354):map__14354);var opts = map__14354__$1;var statearr_14355_14358 = state;(statearr_14355_14358[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts.call(null,(function (val){var statearr_14356_14359 = state;(statearr_14356_14359[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;var statearr_14357_14360 = state;(statearr_14357_14360[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__14349 = null;if (arguments.length > 3) {
  p__14349 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__14349);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__14361){
var state = cljs.core.first(arglist__14361);
arglist__14361 = cljs.core.next(arglist__14361);
var cont_block = cljs.core.first(arglist__14361);
arglist__14361 = cljs.core.next(arglist__14361);
var ports = cljs.core.first(arglist__14361);
var p__14349 = cljs.core.rest(arglist__14361);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__14349);
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
