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
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t13543 !== 'undefined')
{} else
{goog.provide('cljs.core.async.impl.ioc_helpers.t13543');

/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t13543 = (function (f,fn_handler,meta13544){
this.f = f;
this.fn_handler = fn_handler;
this.meta13544 = meta13544;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t13543.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t13543.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t13543";
cljs.core.async.impl.ioc_helpers.t13543.cljs$lang$ctorPrWriter = (function (this__6812__auto__,writer__6813__auto__,opt__6814__auto__){return cljs.core._write.call(null,writer__6813__auto__,"cljs.core.async.impl.ioc-helpers/t13543");
});
cljs.core.async.impl.ioc_helpers.t13543.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t13543.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return true;
});
cljs.core.async.impl.ioc_helpers.t13543.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
return self__.f;
});
cljs.core.async.impl.ioc_helpers.t13543.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13545){var self__ = this;
return self__.meta13544;
});
cljs.core.async.impl.ioc_helpers.t13543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13545,meta13544__$1){var self__ = this;
return (new cljs.core.async.impl.ioc_helpers.t13543(self__.f,self__.fn_handler,meta13544__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t13543 = (function __GT_t13543(f__$1,fn_handler__$1,meta13544){return (new cljs.core.async.impl.ioc_helpers.t13543(f__$1,fn_handler__$1,meta13544));
});
}
return (new cljs.core.async.impl.ioc_helpers.t13543(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e13547){if((e13547 instanceof Object))
{var ex = e13547;cljs.core.async.impl.protocols.close_BANG_.call(null,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.USER_START_IDX));
throw ex;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13547;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4090__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){var statearr_13550_13552 = state;(statearr_13550_13552[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_13550_13552[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_13551_13553 = state;(statearr_13551_13553[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_13551_13553[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (){var statearr_13556_13558 = state;(statearr_13556_13558[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_13556_13558[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_13557_13559 = state;(statearr_13557_13559[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_13557_13559[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__13560){var map__13565 = p__13560;var map__13565__$1 = ((cljs.core.seq_QMARK_.call(null,map__13565))?cljs.core.apply.call(null,cljs.core.hash_map,map__13565):map__13565);var opts = map__13565__$1;var statearr_13566_13569 = state;(statearr_13566_13569[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts.call(null,(function (val){var statearr_13567_13570 = state;(statearr_13567_13570[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;var statearr_13568_13571 = state;(statearr_13568_13571[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__13560 = null;if (arguments.length > 3) {
  p__13560 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__13560);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__13572){
var state = cljs.core.first(arglist__13572);
arglist__13572 = cljs.core.next(arglist__13572);
var cont_block = cljs.core.first(arglist__13572);
arglist__13572 = cljs.core.next(arglist__13572);
var ports = cljs.core.first(arglist__13572);
var p__13560 = cljs.core.rest(arglist__13572);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__13560);
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
