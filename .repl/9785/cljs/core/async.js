goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11694 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11694');

/**
* @constructor
*/
cljs.core.async.t11694 = (function (f,fn_handler,meta11695){
this.f = f;
this.fn_handler = fn_handler;
this.meta11695 = meta11695;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11694.cljs$lang$type = true;
cljs.core.async.t11694.cljs$lang$ctorStr = "cljs.core.async/t11694";
cljs.core.async.t11694.cljs$lang$ctorPrWriter = (function (this__6725__auto__,writer__6726__auto__,opt__6727__auto__){return cljs.core._write.call(null,writer__6726__auto__,"cljs.core.async/t11694");
});
cljs.core.async.t11694.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11694.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return true;
});
cljs.core.async.t11694.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
return self__.f;
});
cljs.core.async.t11694.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11696){var self__ = this;
return self__.meta11695;
});
cljs.core.async.t11694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11696,meta11695__$1){var self__ = this;
return (new cljs.core.async.t11694(self__.f,self__.fn_handler,meta11695__$1));
});
cljs.core.async.__GT_t11694 = (function __GT_t11694(f__$1,fn_handler__$1,meta11695){return (new cljs.core.async.t11694(f__$1,fn_handler__$1,meta11695));
});
}
return (new cljs.core.async.t11694(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_11697 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11697);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_11697);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3941__auto__ = ret;if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3941__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__6978__auto___11698 = n;var x_11699 = 0;while(true){
if((x_11699 < n__6978__auto___11698))
{(a[x_11699] = 0);
{
var G__11700 = (x_11699 + 1);
x_11699 = G__11700;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__11701 = (i + 1);
i = G__11701;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11705 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11705');

/**
* @constructor
*/
cljs.core.async.t11705 = (function (flag,alt_flag,meta11706){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11706 = meta11706;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11705.cljs$lang$type = true;
cljs.core.async.t11705.cljs$lang$ctorStr = "cljs.core.async/t11705";
cljs.core.async.t11705.cljs$lang$ctorPrWriter = (function (this__6725__auto__,writer__6726__auto__,opt__6727__auto__){return cljs.core._write.call(null,writer__6726__auto__,"cljs.core.async/t11705");
});
cljs.core.async.t11705.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11705.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t11705.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t11705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11707){var self__ = this;
return self__.meta11706;
});
cljs.core.async.t11705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11707,meta11706__$1){var self__ = this;
return (new cljs.core.async.t11705(self__.flag,self__.alt_flag,meta11706__$1));
});
cljs.core.async.__GT_t11705 = (function __GT_t11705(flag__$1,alt_flag__$1,meta11706){return (new cljs.core.async.t11705(flag__$1,alt_flag__$1,meta11706));
});
}
return (new cljs.core.async.t11705(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11711 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11711');

/**
* @constructor
*/
cljs.core.async.t11711 = (function (cb,flag,alt_handler,meta11712){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11712 = meta11712;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11711.cljs$lang$type = true;
cljs.core.async.t11711.cljs$lang$ctorStr = "cljs.core.async/t11711";
cljs.core.async.t11711.cljs$lang$ctorPrWriter = (function (this__6725__auto__,writer__6726__auto__,opt__6727__auto__){return cljs.core._write.call(null,writer__6726__auto__,"cljs.core.async/t11711");
});
cljs.core.async.t11711.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11711.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11711.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11711.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11713){var self__ = this;
return self__.meta11712;
});
cljs.core.async.t11711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11713,meta11712__$1){var self__ = this;
return (new cljs.core.async.t11711(self__.cb,self__.flag,self__.alt_handler,meta11712__$1));
});
cljs.core.async.__GT_t11711 = (function __GT_t11711(cb__$1,flag__$1,alt_handler__$1,meta11712){return (new cljs.core.async.t11711(cb__$1,flag__$1,alt_handler__$1,meta11712));
});
}
return (new cljs.core.async.t11711(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).call(null,opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,cljs.core.PersistentVector.fromArray([null,wport], true));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11714_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__11714_SHARP_,port], true));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,cljs.core.PersistentVector.fromArray([cljs.core.deref.call(null,vbox),(function (){var or__3943__auto__ = wport;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return port;
}
})()], true));
} else
{{
var G__11715 = (i + 1);
i = G__11715;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3943__auto__ = ret;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3941__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3941__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"default","default",2558708147).call(null,opts),new cljs.core.Keyword(null,"default","default",2558708147)], true));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__11716){var map__11718 = p__11716;var map__11718__$1 = ((cljs.core.seq_QMARK_.call(null,map__11718))?cljs.core.apply.call(null,cljs.core.hash_map,map__11718):map__11718);var opts = map__11718__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11716 = null;if (arguments.length > 1) {
  p__11716 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11716);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11719){
var ports = cljs.core.first(arglist__11719);
var p__11716 = cljs.core.rest(arglist__11719);
return alts_BANG___delegate(ports,p__11716);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11727 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11727');

/**
* @constructor
*/
cljs.core.async.t11727 = (function (ch,f,map_LT_,meta11728){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11728 = meta11728;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11727.cljs$lang$type = true;
cljs.core.async.t11727.cljs$lang$ctorStr = "cljs.core.async/t11727";
cljs.core.async.t11727.cljs$lang$ctorPrWriter = (function (this__6725__auto__,writer__6726__auto__,opt__6727__auto__){return cljs.core._write.call(null,writer__6726__auto__,"cljs.core.async/t11727");
});
cljs.core.async.t11727.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11727.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11727.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11727.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11730 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11730');

/**
* @constructor
*/
cljs.core.async.t11730 = (function (fn1,_,meta11728,ch,f,map_LT_,meta11731){
this.fn1 = fn1;
this._ = _;
this.meta11728 = meta11728;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11731 = meta11731;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11730.cljs$lang$type = true;
cljs.core.async.t11730.cljs$lang$ctorStr = "cljs.core.async/t11730";
cljs.core.async.t11730.cljs$lang$ctorPrWriter = (function (this__6725__auto__,writer__6726__auto__,opt__6727__auto__){return cljs.core._write.call(null,writer__6726__auto__,"cljs.core.async/t11730");
});
cljs.core.async.t11730.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11730.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$2){var self__ = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t11730.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$2){var self__ = this;
return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t11730.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$2){var self__ = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1){
return (function (p1__11720_SHARP_){return f1.call(null,(((p1__11720_SHARP_ == null))?null:self__.f.call(null,p1__11720_SHARP_)));
});
;})(f1))
});
cljs.core.async.t11730.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11732){var self__ = this;
return self__.meta11731;
});
cljs.core.async.t11730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11732,meta11731__$1){var self__ = this;
return (new cljs.core.async.t11730(self__.fn1,self__._,self__.meta11728,self__.ch,self__.f,self__.map_LT_,meta11731__$1));
});
cljs.core.async.__GT_t11730 = (function __GT_t11730(fn1__$1,___$1,meta11728__$1,ch__$2,f__$2,map_LT___$2,meta11731){return (new cljs.core.async.t11730(fn1__$1,___$1,meta11728__$1,ch__$2,f__$2,map_LT___$2,meta11731));
});
}
return (new cljs.core.async.t11730(fn1,_,self__.meta11728,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3941__auto__ = ret;if(cljs.core.truth_(and__3941__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3941__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t11727.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11727.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11727.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11729){var self__ = this;
return self__.meta11728;
});
cljs.core.async.t11727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11729,meta11728__$1){var self__ = this;
return (new cljs.core.async.t11727(self__.ch,self__.f,self__.map_LT_,meta11728__$1));
});
cljs.core.async.__GT_t11727 = (function __GT_t11727(ch__$1,f__$1,map_LT___$1,meta11728){return (new cljs.core.async.t11727(ch__$1,f__$1,map_LT___$1,meta11728));
});
}
return (new cljs.core.async.t11727(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11736 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11736');

/**
* @constructor
*/
cljs.core.async.t11736 = (function (ch,f,map_GT_,meta11737){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11737 = meta11737;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11736.cljs$lang$type = true;
cljs.core.async.t11736.cljs$lang$ctorStr = "cljs.core.async/t11736";
cljs.core.async.t11736.cljs$lang$ctorPrWriter = (function (this__6725__auto__,writer__6726__auto__,opt__6727__auto__){return cljs.core._write.call(null,writer__6726__auto__,"cljs.core.async/t11736");
});
cljs.core.async.t11736.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11736.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11736.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11736.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11736.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11736.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11736.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11738){var self__ = this;
return self__.meta11737;
});
cljs.core.async.t11736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11738,meta11737__$1){var self__ = this;
return (new cljs.core.async.t11736(self__.ch,self__.f,self__.map_GT_,meta11737__$1));
});
cljs.core.async.__GT_t11736 = (function __GT_t11736(ch__$1,f__$1,map_GT___$1,meta11737){return (new cljs.core.async.t11736(ch__$1,f__$1,map_GT___$1,meta11737));
});
}
return (new cljs.core.async.t11736(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11742 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11742');

/**
* @constructor
*/
cljs.core.async.t11742 = (function (ch,p,filter_GT_,meta11743){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11743 = meta11743;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11742.cljs$lang$type = true;
cljs.core.async.t11742.cljs$lang$ctorStr = "cljs.core.async/t11742";
cljs.core.async.t11742.cljs$lang$ctorPrWriter = (function (this__6725__auto__,writer__6726__auto__,opt__6727__auto__){return cljs.core._write.call(null,writer__6726__auto__,"cljs.core.async/t11742");
});
cljs.core.async.t11742.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11742.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11742.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11742.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11742.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11742.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11742.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11744){var self__ = this;
return self__.meta11743;
});
cljs.core.async.t11742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11744,meta11743__$1){var self__ = this;
return (new cljs.core.async.t11742(self__.ch,self__.p,self__.filter_GT_,meta11743__$1));
});
cljs.core.async.__GT_t11742 = (function __GT_t11742(ch__$1,p__$1,filter_GT___$1,meta11743){return (new cljs.core.async.t11742(ch__$1,p__$1,filter_GT___$1,meta11743));
});
}
return (new cljs.core.async.t11742(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9894__auto___11819 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__9895__auto__ = (function (){var switch__9844__auto__ = (function (state_11802){var state_val_11803 = (state_11802[1]);if((state_val_11803 === 1))
{var state_11802__$1 = state_11802;var statearr_11804_11820 = state_11802__$1;(statearr_11804_11820[2] = null);
(statearr_11804_11820[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11803 === 2))
{var state_11802__$1 = state_11802;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11802__$1,4,ch);
} else
{if((state_val_11803 === 3))
{var inst_11800 = (state_11802[2]);var state_11802__$1 = state_11802;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11802__$1,inst_11800);
} else
{if((state_val_11803 === 4))
{var inst_11784 = (state_11802[5]);var inst_11784__$1 = (state_11802[2]);var inst_11785 = (inst_11784__$1 == null);var state_11802__$1 = (function (){var statearr_11805 = state_11802;(statearr_11805[5] = inst_11784__$1);
return statearr_11805;
})();if(cljs.core.truth_(inst_11785))
{var statearr_11806_11821 = state_11802__$1;(statearr_11806_11821[1] = 5);
} else
{var statearr_11807_11822 = state_11802__$1;(statearr_11807_11822[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11803 === 5))
{var inst_11787 = cljs.core.async.close_BANG_.call(null,out);var state_11802__$1 = state_11802;var statearr_11808_11823 = state_11802__$1;(statearr_11808_11823[2] = inst_11787);
(statearr_11808_11823[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11803 === 6))
{var inst_11784 = (state_11802[5]);var inst_11789 = p.call(null,inst_11784);var state_11802__$1 = state_11802;if(cljs.core.truth_(inst_11789))
{var statearr_11809_11824 = state_11802__$1;(statearr_11809_11824[1] = 8);
} else
{var statearr_11810_11825 = state_11802__$1;(statearr_11810_11825[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11803 === 7))
{var inst_11798 = (state_11802[2]);var state_11802__$1 = state_11802;var statearr_11811_11826 = state_11802__$1;(statearr_11811_11826[2] = inst_11798);
(statearr_11811_11826[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11803 === 8))
{var inst_11784 = (state_11802[5]);var state_11802__$1 = state_11802;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11802__$1,11,out,inst_11784);
} else
{if((state_val_11803 === 9))
{var state_11802__$1 = state_11802;var statearr_11812_11827 = state_11802__$1;(statearr_11812_11827[2] = null);
(statearr_11812_11827[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11803 === 10))
{var inst_11795 = (state_11802[2]);var state_11802__$1 = (function (){var statearr_11813 = state_11802;(statearr_11813[6] = inst_11795);
return statearr_11813;
})();var statearr_11814_11828 = state_11802__$1;(statearr_11814_11828[2] = null);
(statearr_11814_11828[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11803 === 11))
{var inst_11792 = (state_11802[2]);var state_11802__$1 = state_11802;var statearr_11815_11829 = state_11802__$1;(statearr_11815_11829[2] = inst_11792);
(statearr_11815_11829[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__9844__auto__){
return (function() {
var state_machine__9845__auto__ = null;
var state_machine__9845__auto____0 = (function (){var statearr_11817 = (new Array(7));(statearr_11817[0] = state_machine__9845__auto__);
(statearr_11817[1] = 1);
return statearr_11817;
});
var state_machine__9845__auto____1 = (function (state_11802){while(true){
var result__9846__auto__ = switch__9844__auto__.call(null,state_11802);if(cljs.core.keyword_identical_QMARK_.call(null,result__9846__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9846__auto__;
}
break;
}
});
state_machine__9845__auto__ = function(state_11802){
switch(arguments.length){
case 0:
return state_machine__9845__auto____0.call(this);
case 1:
return state_machine__9845__auto____1.call(this,state_11802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9845__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9845__auto____0;
state_machine__9845__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9845__auto____1;
return state_machine__9845__auto__;
})()
;})(switch__9844__auto__))
})();var state__9896__auto__ = (function (){var statearr_11818 = f__9895__auto__.call(null);(statearr_11818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9894__auto___11819);
return statearr_11818;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9896__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__9894__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__9895__auto__ = (function (){var switch__9844__auto__ = (function (state_11977){var state_val_11978 = (state_11977[1]);if((state_val_11978 === 1))
{var state_11977__$1 = state_11977;var statearr_11979_12012 = state_11977__$1;(statearr_11979_12012[2] = null);
(statearr_11979_12012[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11978 === 2))
{var state_11977__$1 = state_11977;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11977__$1,4,in$);
} else
{if((state_val_11978 === 3))
{var inst_11975 = (state_11977[2]);var state_11977__$1 = state_11977;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11977__$1,inst_11975);
} else
{if((state_val_11978 === 4))
{var inst_11923 = (state_11977[5]);var inst_11923__$1 = (state_11977[2]);var inst_11924 = (inst_11923__$1 == null);var state_11977__$1 = (function (){var statearr_11980 = state_11977;(statearr_11980[5] = inst_11923__$1);
return statearr_11980;
})();if(cljs.core.truth_(inst_11924))
{var statearr_11981_12013 = state_11977__$1;(statearr_11981_12013[1] = 5);
} else
{var statearr_11982_12014 = state_11977__$1;(statearr_11982_12014[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11978 === 5))
{var inst_11926 = cljs.core.async.close_BANG_.call(null,out);var state_11977__$1 = state_11977;var statearr_11983_12015 = state_11977__$1;(statearr_11983_12015[2] = inst_11926);
(statearr_11983_12015[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11978 === 6))
{var inst_11923 = (state_11977[5]);var inst_11928 = f.call(null,inst_11923);var inst_11933 = cljs.core.seq.call(null,inst_11928);var inst_11934 = inst_11933;var inst_11935 = null;var inst_11936 = 0;var inst_11937 = 0;var state_11977__$1 = (function (){var statearr_11984 = state_11977;(statearr_11984[6] = inst_11934);
(statearr_11984[7] = inst_11936);
(statearr_11984[8] = inst_11935);
(statearr_11984[9] = inst_11937);
return statearr_11984;
})();var statearr_11985_12016 = state_11977__$1;(statearr_11985_12016[2] = null);
(statearr_11985_12016[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11978 === 7))
{var inst_11973 = (state_11977[2]);var state_11977__$1 = state_11977;var statearr_11986_12017 = state_11977__$1;(statearr_11986_12017[2] = inst_11973);
(statearr_11986_12017[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11978 === 8))
{var inst_11936 = (state_11977[7]);var inst_11937 = (state_11977[9]);var inst_11939 = (inst_11937 < inst_11936);var inst_11940 = inst_11939;var state_11977__$1 = state_11977;if(cljs.core.truth_(inst_11940))
{var statearr_11987_12018 = state_11977__$1;(statearr_11987_12018[1] = 10);
} else
{var statearr_11988_12019 = state_11977__$1;(statearr_11988_12019[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11978 === 9))
{var inst_11970 = (state_11977[2]);var state_11977__$1 = (function (){var statearr_11989 = state_11977;(statearr_11989[10] = inst_11970);
return statearr_11989;
})();var statearr_11990_12020 = state_11977__$1;(statearr_11990_12020[2] = null);
(statearr_11990_12020[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11978 === 10))
{var inst_11935 = (state_11977[8]);var inst_11937 = (state_11977[9]);var inst_11942 = cljs.core._nth.call(null,inst_11935,inst_11937);var state_11977__$1 = state_11977;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11977__$1,13,out,inst_11942);
} else
{if((state_val_11978 === 11))
{var inst_11948 = (state_11977[11]);var inst_11934 = (state_11977[6]);var inst_11948__$1 = cljs.core.seq.call(null,inst_11934);var state_11977__$1 = (function (){var statearr_11994 = state_11977;(statearr_11994[11] = inst_11948__$1);
return statearr_11994;
})();if(inst_11948__$1)
{var statearr_11995_12021 = state_11977__$1;(statearr_11995_12021[1] = 14);
} else
{var statearr_11996_12022 = state_11977__$1;(statearr_11996_12022[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11978 === 12))
{var inst_11968 = (state_11977[2]);var state_11977__$1 = state_11977;var statearr_11997_12023 = state_11977__$1;(statearr_11997_12023[2] = inst_11968);
(statearr_11997_12023[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11978 === 13))
{var inst_11934 = (state_11977[6]);var inst_11936 = (state_11977[7]);var inst_11935 = (state_11977[8]);var inst_11937 = (state_11977[9]);var inst_11944 = (state_11977[2]);var inst_11945 = (inst_11937 + 1);var tmp11991 = inst_11934;var tmp11992 = inst_11936;var tmp11993 = inst_11935;var inst_11934__$1 = tmp11991;var inst_11935__$1 = tmp11993;var inst_11936__$1 = tmp11992;var inst_11937__$1 = inst_11945;var state_11977__$1 = (function (){var statearr_11998 = state_11977;(statearr_11998[12] = inst_11944);
(statearr_11998[6] = inst_11934__$1);
(statearr_11998[7] = inst_11936__$1);
(statearr_11998[8] = inst_11935__$1);
(statearr_11998[9] = inst_11937__$1);
return statearr_11998;
})();var statearr_11999_12024 = state_11977__$1;(statearr_11999_12024[2] = null);
(statearr_11999_12024[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11978 === 14))
{var inst_11948 = (state_11977[11]);var inst_11950 = cljs.core.chunked_seq_QMARK_.call(null,inst_11948);var state_11977__$1 = state_11977;if(inst_11950)
{var statearr_12000_12025 = state_11977__$1;(statearr_12000_12025[1] = 17);
} else
{var statearr_12001_12026 = state_11977__$1;(statearr_12001_12026[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11978 === 15))
{var state_11977__$1 = state_11977;var statearr_12002_12027 = state_11977__$1;(statearr_12002_12027[2] = null);
(statearr_12002_12027[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11978 === 16))
{var inst_11966 = (state_11977[2]);var state_11977__$1 = state_11977;var statearr_12003_12028 = state_11977__$1;(statearr_12003_12028[2] = inst_11966);
(statearr_12003_12028[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11978 === 17))
{var inst_11948 = (state_11977[11]);var inst_11952 = cljs.core.chunk_first.call(null,inst_11948);var inst_11953 = cljs.core.chunk_rest.call(null,inst_11948);var inst_11954 = cljs.core.count.call(null,inst_11952);var inst_11934 = inst_11953;var inst_11935 = inst_11952;var inst_11936 = inst_11954;var inst_11937 = 0;var state_11977__$1 = (function (){var statearr_12004 = state_11977;(statearr_12004[6] = inst_11934);
(statearr_12004[7] = inst_11936);
(statearr_12004[8] = inst_11935);
(statearr_12004[9] = inst_11937);
return statearr_12004;
})();var statearr_12005_12029 = state_11977__$1;(statearr_12005_12029[2] = null);
(statearr_12005_12029[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11978 === 18))
{var inst_11948 = (state_11977[11]);var inst_11957 = cljs.core.first.call(null,inst_11948);var state_11977__$1 = state_11977;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11977__$1,20,out,inst_11957);
} else
{if((state_val_11978 === 19))
{var inst_11963 = (state_11977[2]);var state_11977__$1 = state_11977;var statearr_12006_12030 = state_11977__$1;(statearr_12006_12030[2] = inst_11963);
(statearr_12006_12030[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11978 === 20))
{var inst_11948 = (state_11977[11]);var inst_11959 = (state_11977[2]);var inst_11960 = cljs.core.next.call(null,inst_11948);var inst_11934 = inst_11960;var inst_11935 = null;var inst_11936 = 0;var inst_11937 = 0;var state_11977__$1 = (function (){var statearr_12007 = state_11977;(statearr_12007[13] = inst_11959);
(statearr_12007[6] = inst_11934);
(statearr_12007[7] = inst_11936);
(statearr_12007[8] = inst_11935);
(statearr_12007[9] = inst_11937);
return statearr_12007;
})();var statearr_12008_12031 = state_11977__$1;(statearr_12008_12031[2] = null);
(statearr_12008_12031[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__9844__auto__){
return (function() {
var state_machine__9845__auto__ = null;
var state_machine__9845__auto____0 = (function (){var statearr_12010 = (new Array(14));(statearr_12010[0] = state_machine__9845__auto__);
(statearr_12010[1] = 1);
return statearr_12010;
});
var state_machine__9845__auto____1 = (function (state_11977){while(true){
var result__9846__auto__ = switch__9844__auto__.call(null,state_11977);if(cljs.core.keyword_identical_QMARK_.call(null,result__9846__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9846__auto__;
}
break;
}
});
state_machine__9845__auto__ = function(state_11977){
switch(arguments.length){
case 0:
return state_machine__9845__auto____0.call(this);
case 1:
return state_machine__9845__auto____1.call(this,state_11977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9845__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9845__auto____0;
state_machine__9845__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9845__auto____1;
return state_machine__9845__auto__;
})()
;})(switch__9844__auto__))
})();var state__9896__auto__ = (function (){var statearr_12011 = f__9895__auto__.call(null);(statearr_12011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9894__auto__);
return statearr_12011;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9896__auto__);
}));
return c__9894__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__9894__auto___12104 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__9895__auto__ = (function (){var switch__9844__auto__ = (function (state_12087){var state_val_12088 = (state_12087[1]);if((state_val_12088 === 1))
{var state_12087__$1 = state_12087;var statearr_12089_12105 = state_12087__$1;(statearr_12089_12105[2] = null);
(statearr_12089_12105[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12088 === 2))
{var state_12087__$1 = state_12087;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12087__$1,4,from);
} else
{if((state_val_12088 === 3))
{var inst_12085 = (state_12087[2]);var state_12087__$1 = state_12087;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12087__$1,inst_12085);
} else
{if((state_val_12088 === 4))
{var inst_12070 = (state_12087[5]);var inst_12070__$1 = (state_12087[2]);var inst_12071 = (inst_12070__$1 == null);var state_12087__$1 = (function (){var statearr_12090 = state_12087;(statearr_12090[5] = inst_12070__$1);
return statearr_12090;
})();if(cljs.core.truth_(inst_12071))
{var statearr_12091_12106 = state_12087__$1;(statearr_12091_12106[1] = 5);
} else
{var statearr_12092_12107 = state_12087__$1;(statearr_12092_12107[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12088 === 5))
{var state_12087__$1 = state_12087;if(cljs.core.truth_(close_QMARK_))
{var statearr_12093_12108 = state_12087__$1;(statearr_12093_12108[1] = 8);
} else
{var statearr_12094_12109 = state_12087__$1;(statearr_12094_12109[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12088 === 6))
{var inst_12070 = (state_12087[5]);var state_12087__$1 = state_12087;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12087__$1,11,to,inst_12070);
} else
{if((state_val_12088 === 7))
{var inst_12083 = (state_12087[2]);var state_12087__$1 = state_12087;var statearr_12095_12110 = state_12087__$1;(statearr_12095_12110[2] = inst_12083);
(statearr_12095_12110[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12088 === 8))
{var inst_12074 = cljs.core.async.close_BANG_.call(null,to);var state_12087__$1 = state_12087;var statearr_12096_12111 = state_12087__$1;(statearr_12096_12111[2] = inst_12074);
(statearr_12096_12111[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12088 === 9))
{var state_12087__$1 = state_12087;var statearr_12097_12112 = state_12087__$1;(statearr_12097_12112[2] = null);
(statearr_12097_12112[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12088 === 10))
{var inst_12077 = (state_12087[2]);var state_12087__$1 = state_12087;var statearr_12098_12113 = state_12087__$1;(statearr_12098_12113[2] = inst_12077);
(statearr_12098_12113[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12088 === 11))
{var inst_12080 = (state_12087[2]);var state_12087__$1 = (function (){var statearr_12099 = state_12087;(statearr_12099[6] = inst_12080);
return statearr_12099;
})();var statearr_12100_12114 = state_12087__$1;(statearr_12100_12114[2] = null);
(statearr_12100_12114[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__9844__auto__){
return (function() {
var state_machine__9845__auto__ = null;
var state_machine__9845__auto____0 = (function (){var statearr_12102 = (new Array(7));(statearr_12102[0] = state_machine__9845__auto__);
(statearr_12102[1] = 1);
return statearr_12102;
});
var state_machine__9845__auto____1 = (function (state_12087){while(true){
var result__9846__auto__ = switch__9844__auto__.call(null,state_12087);if(cljs.core.keyword_identical_QMARK_.call(null,result__9846__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9846__auto__;
}
break;
}
});
state_machine__9845__auto__ = function(state_12087){
switch(arguments.length){
case 0:
return state_machine__9845__auto____0.call(this);
case 1:
return state_machine__9845__auto____1.call(this,state_12087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9845__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9845__auto____0;
state_machine__9845__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9845__auto____1;
return state_machine__9845__auto__;
})()
;})(switch__9844__auto__))
})();var state__9896__auto__ = (function (){var statearr_12103 = f__9895__auto__.call(null);(statearr_12103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9894__auto___12104);
return statearr_12103;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9896__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__9894__auto___12193 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__9895__auto__ = (function (){var switch__9844__auto__ = (function (state_12175){var state_val_12176 = (state_12175[1]);if((state_val_12176 === 1))
{var state_12175__$1 = state_12175;var statearr_12177_12194 = state_12175__$1;(statearr_12177_12194[2] = null);
(statearr_12177_12194[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12176 === 2))
{var state_12175__$1 = state_12175;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12175__$1,4,ch);
} else
{if((state_val_12176 === 3))
{var inst_12173 = (state_12175[2]);var state_12175__$1 = state_12175;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12175__$1,inst_12173);
} else
{if((state_val_12176 === 4))
{var inst_12156 = (state_12175[5]);var inst_12156__$1 = (state_12175[2]);var inst_12157 = (inst_12156__$1 == null);var state_12175__$1 = (function (){var statearr_12178 = state_12175;(statearr_12178[5] = inst_12156__$1);
return statearr_12178;
})();if(cljs.core.truth_(inst_12157))
{var statearr_12179_12195 = state_12175__$1;(statearr_12179_12195[1] = 5);
} else
{var statearr_12180_12196 = state_12175__$1;(statearr_12180_12196[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12176 === 5))
{var inst_12159 = cljs.core.async.close_BANG_.call(null,tc);var inst_12160 = cljs.core.async.close_BANG_.call(null,fc);var state_12175__$1 = (function (){var statearr_12181 = state_12175;(statearr_12181[6] = inst_12159);
return statearr_12181;
})();var statearr_12182_12197 = state_12175__$1;(statearr_12182_12197[2] = inst_12160);
(statearr_12182_12197[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12176 === 6))
{var inst_12156 = (state_12175[5]);var inst_12162 = p.call(null,inst_12156);var state_12175__$1 = state_12175;if(cljs.core.truth_(inst_12162))
{var statearr_12183_12198 = state_12175__$1;(statearr_12183_12198[1] = 9);
} else
{var statearr_12184_12199 = state_12175__$1;(statearr_12184_12199[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12176 === 7))
{var inst_12171 = (state_12175[2]);var state_12175__$1 = state_12175;var statearr_12185_12200 = state_12175__$1;(statearr_12185_12200[2] = inst_12171);
(statearr_12185_12200[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12176 === 8))
{var inst_12168 = (state_12175[2]);var state_12175__$1 = (function (){var statearr_12186 = state_12175;(statearr_12186[7] = inst_12168);
return statearr_12186;
})();var statearr_12187_12201 = state_12175__$1;(statearr_12187_12201[2] = null);
(statearr_12187_12201[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12176 === 9))
{var state_12175__$1 = state_12175;var statearr_12188_12202 = state_12175__$1;(statearr_12188_12202[2] = tc);
(statearr_12188_12202[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12176 === 10))
{var state_12175__$1 = state_12175;var statearr_12189_12203 = state_12175__$1;(statearr_12189_12203[2] = fc);
(statearr_12189_12203[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12176 === 11))
{var inst_12156 = (state_12175[5]);var inst_12166 = (state_12175[2]);var state_12175__$1 = state_12175;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12175__$1,8,inst_12166,inst_12156);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__9844__auto__){
return (function() {
var state_machine__9845__auto__ = null;
var state_machine__9845__auto____0 = (function (){var statearr_12191 = (new Array(8));(statearr_12191[0] = state_machine__9845__auto__);
(statearr_12191[1] = 1);
return statearr_12191;
});
var state_machine__9845__auto____1 = (function (state_12175){while(true){
var result__9846__auto__ = switch__9844__auto__.call(null,state_12175);if(cljs.core.keyword_identical_QMARK_.call(null,result__9846__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9846__auto__;
}
break;
}
});
state_machine__9845__auto__ = function(state_12175){
switch(arguments.length){
case 0:
return state_machine__9845__auto____0.call(this);
case 1:
return state_machine__9845__auto____1.call(this,state_12175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9845__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9845__auto____0;
state_machine__9845__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9845__auto____1;
return state_machine__9845__auto__;
})()
;})(switch__9844__auto__))
})();var state__9896__auto__ = (function (){var statearr_12192 = f__9895__auto__.call(null);(statearr_12192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9894__auto___12193);
return statearr_12192;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9896__auto__);
}));
return cljs.core.PersistentVector.fromArray([tc,fc], true);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__9894__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__9895__auto__ = (function (){var switch__9844__auto__ = (function (state_12246){var state_val_12247 = (state_12246[1]);if((state_val_12247 === 7))
{var inst_12242 = (state_12246[2]);var state_12246__$1 = state_12246;var statearr_12248_12260 = state_12246__$1;(statearr_12248_12260[2] = inst_12242);
(statearr_12248_12260[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12247 === 6))
{var inst_12235 = (state_12246[5]);var inst_12232 = (state_12246[6]);var inst_12239 = f.call(null,inst_12232,inst_12235);var inst_12232__$1 = inst_12239;var state_12246__$1 = (function (){var statearr_12249 = state_12246;(statearr_12249[6] = inst_12232__$1);
return statearr_12249;
})();var statearr_12250_12261 = state_12246__$1;(statearr_12250_12261[2] = null);
(statearr_12250_12261[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12247 === 5))
{var inst_12232 = (state_12246[6]);var state_12246__$1 = state_12246;var statearr_12251_12262 = state_12246__$1;(statearr_12251_12262[2] = inst_12232);
(statearr_12251_12262[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12247 === 4))
{var inst_12235 = (state_12246[5]);var inst_12235__$1 = (state_12246[2]);var inst_12236 = (inst_12235__$1 == null);var state_12246__$1 = (function (){var statearr_12252 = state_12246;(statearr_12252[5] = inst_12235__$1);
return statearr_12252;
})();if(cljs.core.truth_(inst_12236))
{var statearr_12253_12263 = state_12246__$1;(statearr_12253_12263[1] = 5);
} else
{var statearr_12254_12264 = state_12246__$1;(statearr_12254_12264[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12247 === 3))
{var inst_12244 = (state_12246[2]);var state_12246__$1 = state_12246;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12246__$1,inst_12244);
} else
{if((state_val_12247 === 2))
{var state_12246__$1 = state_12246;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12246__$1,4,ch);
} else
{if((state_val_12247 === 1))
{var inst_12232 = init;var state_12246__$1 = (function (){var statearr_12255 = state_12246;(statearr_12255[6] = inst_12232);
return statearr_12255;
})();var statearr_12256_12265 = state_12246__$1;(statearr_12256_12265[2] = null);
(statearr_12256_12265[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__9844__auto__){
return (function() {
var state_machine__9845__auto__ = null;
var state_machine__9845__auto____0 = (function (){var statearr_12258 = (new Array(7));(statearr_12258[0] = state_machine__9845__auto__);
(statearr_12258[1] = 1);
return statearr_12258;
});
var state_machine__9845__auto____1 = (function (state_12246){while(true){
var result__9846__auto__ = switch__9844__auto__.call(null,state_12246);if(cljs.core.keyword_identical_QMARK_.call(null,result__9846__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9846__auto__;
}
break;
}
});
state_machine__9845__auto__ = function(state_12246){
switch(arguments.length){
case 0:
return state_machine__9845__auto____0.call(this);
case 1:
return state_machine__9845__auto____1.call(this,state_12246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9845__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9845__auto____0;
state_machine__9845__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9845__auto____1;
return state_machine__9845__auto__;
})()
;})(switch__9844__auto__))
})();var state__9896__auto__ = (function (){var statearr_12259 = f__9895__auto__.call(null);(statearr_12259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9894__auto__);
return statearr_12259;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9896__auto__);
}));
return c__9894__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__9894__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__9895__auto__ = (function (){var switch__9844__auto__ = (function (state_12323){var state_val_12324 = (state_12323[1]);if((state_val_12324 === 1))
{var inst_12303 = cljs.core.seq.call(null,coll);var inst_12304 = inst_12303;var state_12323__$1 = (function (){var statearr_12325 = state_12323;(statearr_12325[5] = inst_12304);
return statearr_12325;
})();var statearr_12326_12340 = state_12323__$1;(statearr_12326_12340[2] = null);
(statearr_12326_12340[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12324 === 2))
{var inst_12304 = (state_12323[5]);var state_12323__$1 = state_12323;if(cljs.core.truth_(inst_12304))
{var statearr_12327_12341 = state_12323__$1;(statearr_12327_12341[1] = 4);
} else
{var statearr_12328_12342 = state_12323__$1;(statearr_12328_12342[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12324 === 3))
{var inst_12321 = (state_12323[2]);var state_12323__$1 = state_12323;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12323__$1,inst_12321);
} else
{if((state_val_12324 === 4))
{var inst_12304 = (state_12323[5]);var inst_12307 = cljs.core.first.call(null,inst_12304);var state_12323__$1 = state_12323;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12323__$1,7,ch,inst_12307);
} else
{if((state_val_12324 === 5))
{var state_12323__$1 = state_12323;if(cljs.core.truth_(close_QMARK_))
{var statearr_12329_12343 = state_12323__$1;(statearr_12329_12343[1] = 8);
} else
{var statearr_12330_12344 = state_12323__$1;(statearr_12330_12344[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12324 === 6))
{var inst_12319 = (state_12323[2]);var state_12323__$1 = state_12323;var statearr_12331_12345 = state_12323__$1;(statearr_12331_12345[2] = inst_12319);
(statearr_12331_12345[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12324 === 7))
{var inst_12304 = (state_12323[5]);var inst_12309 = (state_12323[2]);var inst_12310 = cljs.core.next.call(null,inst_12304);var inst_12304__$1 = inst_12310;var state_12323__$1 = (function (){var statearr_12332 = state_12323;(statearr_12332[5] = inst_12304__$1);
(statearr_12332[6] = inst_12309);
return statearr_12332;
})();var statearr_12333_12346 = state_12323__$1;(statearr_12333_12346[2] = null);
(statearr_12333_12346[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12324 === 8))
{var inst_12314 = cljs.core.async.close_BANG_.call(null,ch);var state_12323__$1 = state_12323;var statearr_12334_12347 = state_12323__$1;(statearr_12334_12347[2] = inst_12314);
(statearr_12334_12347[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12324 === 9))
{var state_12323__$1 = state_12323;var statearr_12335_12348 = state_12323__$1;(statearr_12335_12348[2] = null);
(statearr_12335_12348[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12324 === 10))
{var inst_12317 = (state_12323[2]);var state_12323__$1 = state_12323;var statearr_12336_12349 = state_12323__$1;(statearr_12336_12349[2] = inst_12317);
(statearr_12336_12349[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__9844__auto__){
return (function() {
var state_machine__9845__auto__ = null;
var state_machine__9845__auto____0 = (function (){var statearr_12338 = (new Array(7));(statearr_12338[0] = state_machine__9845__auto__);
(statearr_12338[1] = 1);
return statearr_12338;
});
var state_machine__9845__auto____1 = (function (state_12323){while(true){
var result__9846__auto__ = switch__9844__auto__.call(null,state_12323);if(cljs.core.keyword_identical_QMARK_.call(null,result__9846__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9846__auto__;
}
break;
}
});
state_machine__9845__auto__ = function(state_12323){
switch(arguments.length){
case 0:
return state_machine__9845__auto____0.call(this);
case 1:
return state_machine__9845__auto____1.call(this,state_12323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9845__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9845__auto____0;
state_machine__9845__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9845__auto____1;
return state_machine__9845__auto__;
})()
;})(switch__9844__auto__))
})();var state__9896__auto__ = (function (){var statearr_12339 = f__9895__auto__.call(null);(statearr_12339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9894__auto__);
return statearr_12339;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9896__auto__);
}));
return c__9894__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = {};
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3941__auto__ = _;if(and__3941__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3941__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__6787__auto__ = (((_ == null))?null:_);return (function (){var or__3943__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6787__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = {};
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3941__auto__ = m;if(and__3941__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3941__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__6787__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6787__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3941__auto__ = m;if(and__3941__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__6787__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6787__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3941__auto__ = m;if(and__3941__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3941__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__6787__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6787__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12562 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12562');

/**
* @constructor
*/
cljs.core.async.t12562 = (function (cs,ch,mult,meta12563){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12563 = meta12563;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12562.cljs$lang$type = true;
cljs.core.async.t12562.cljs$lang$ctorStr = "cljs.core.async/t12562";
cljs.core.async.t12562.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6725__auto__,writer__6726__auto__,opt__6727__auto__){return cljs.core._write.call(null,writer__6726__auto__,"cljs.core.async/t12562");
});})(cs))
;
cljs.core.async.t12562.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12562.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12562.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12562.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12562.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12562.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
return self__.ch;
});})(cs))
;
cljs.core.async.t12562.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12564){var self__ = this;
return self__.meta12563;
});})(cs))
;
cljs.core.async.t12562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12564,meta12563__$1){var self__ = this;
return (new cljs.core.async.t12562(self__.cs,self__.ch,self__.mult,meta12563__$1));
});})(cs))
;
cljs.core.async.__GT_t12562 = ((function (cs){
return (function __GT_t12562(cs__$1,ch__$1,mult__$1,meta12563){return (new cljs.core.async.t12562(cs__$1,ch__$1,mult__$1,meta12563));
});})(cs))
;
}
return (new cljs.core.async.t12562(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__9894__auto___12774 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__9895__auto__ = (function (){var switch__9844__auto__ = (function (state_12692){var state_val_12693 = (state_12692[1]);if((state_val_12693 === 32))
{try{var inst_12567 = (state_12692[5]);var inst_12643 = (state_12692[6]);var inst_12649 = cljs.core.async.put_BANG_.call(null,inst_12643,inst_12567,done);var state_12692__$1 = state_12692;var statearr_12696_12775 = state_12692__$1;(statearr_12696_12775[2] = inst_12649);
(statearr_12696_12775[1] = 30);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e12694){if((e12694 instanceof Object))
{var ex__9838__auto__ = e12694;var statearr_12695_12776 = state_12692;(statearr_12695_12776[1] = 31);
(statearr_12695_12776[2] = ex__9838__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12694;
} else
{return null;
}
}
}} else
{if((state_val_12693 === 1))
{var state_12692__$1 = state_12692;var statearr_12697_12777 = state_12692__$1;(statearr_12697_12777[2] = null);
(statearr_12697_12777[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12693 === 33))
{var inst_12655 = (state_12692[7]);var inst_12657 = cljs.core.chunked_seq_QMARK_.call(null,inst_12655);var state_12692__$1 = state_12692;if(inst_12657)
{var statearr_12698_12778 = state_12692__$1;(statearr_12698_12778[1] = 36);
} else
{var statearr_12699_12779 = state_12692__$1;(statearr_12699_12779[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12693 === 2))
{var state_12692__$1 = state_12692;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12692__$1,4,ch);
} else
{if((state_val_12693 === 34))
{var state_12692__$1 = state_12692;var statearr_12700_12780 = state_12692__$1;(statearr_12700_12780[2] = null);
(statearr_12700_12780[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12693 === 3))
{var inst_12690 = (state_12692[2]);var state_12692__$1 = state_12692;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12692__$1,inst_12690);
} else
{if((state_val_12693 === 35))
{var inst_12679 = (state_12692[2]);var state_12692__$1 = state_12692;var statearr_12701_12781 = state_12692__$1;(statearr_12701_12781[2] = inst_12679);
(statearr_12701_12781[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12693 === 4))
{var inst_12567 = (state_12692[5]);var inst_12567__$1 = (state_12692[2]);var inst_12568 = (inst_12567__$1 == null);var state_12692__$1 = (function (){var statearr_12702 = state_12692;(statearr_12702[5] = inst_12567__$1);
return statearr_12702;
})();if(cljs.core.truth_(inst_12568))
{var statearr_12703_12782 = state_12692__$1;(statearr_12703_12782[1] = 5);
} else
{var statearr_12704_12783 = state_12692__$1;(statearr_12704_12783[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12693 === 36))
{var inst_12655 = (state_12692[7]);var inst_12659 = cljs.core.chunk_first.call(null,inst_12655);var inst_12660 = cljs.core.chunk_rest.call(null,inst_12655);var inst_12661 = cljs.core.count.call(null,inst_12659);var inst_12635 = inst_12660;var inst_12636 = inst_12659;var inst_12637 = inst_12661;var inst_12638 = 0;var state_12692__$1 = (function (){var statearr_12705 = state_12692;(statearr_12705[8] = inst_12638);
(statearr_12705[9] = inst_12637);
(statearr_12705[10] = inst_12635);
(statearr_12705[11] = inst_12636);
return statearr_12705;
})();var statearr_12706_12784 = state_12692__$1;(statearr_12706_12784[2] = null);
(statearr_12706_12784[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12693 === 5))
{var inst_12574 = cljs.core.deref.call(null,cs);var inst_12575 = cljs.core.seq.call(null,inst_12574);var inst_12576 = inst_12575;var inst_12577 = null;var inst_12578 = 0;var inst_12579 = 0;var state_12692__$1 = (function (){var statearr_12707 = state_12692;(statearr_12707[12] = inst_12578);
(statearr_12707[13] = inst_12579);
(statearr_12707[14] = inst_12577);
(statearr_12707[15] = inst_12576);
return statearr_12707;
})();var statearr_12708_12785 = state_12692__$1;(statearr_12708_12785[2] = null);
(statearr_12708_12785[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12693 === 37))
{var inst_12655 = (state_12692[7]);var inst_12664 = cljs.core.first.call(null,inst_12655);var state_12692__$1 = (function (){var statearr_12709 = state_12692;(statearr_12709[16] = inst_12664);
return statearr_12709;
})();var statearr_12710_12786 = state_12692__$1;(statearr_12710_12786[2] = null);
(statearr_12710_12786[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12693 === 6))
{var inst_12626 = cljs.core.deref.call(null,cs);var inst_12627 = cljs.core.keys.call(null,inst_12626);var inst_12628 = cljs.core.count.call(null,inst_12627);var inst_12629 = cljs.core.reset_BANG_.call(null,dctr,inst_12628);var inst_12634 = cljs.core.seq.call(null,inst_12627);var inst_12635 = inst_12634;var inst_12636 = null;var inst_12637 = 0;var inst_12638 = 0;var state_12692__$1 = (function (){var statearr_12711 = state_12692;(statearr_12711[8] = inst_12638);
(statearr_12711[9] = inst_12637);
(statearr_12711[17] = inst_12629);
(statearr_12711[10] = inst_12635);
(statearr_12711[11] = inst_12636);
return statearr_12711;
})();var statearr_12712_12787 = state_12692__$1;(statearr_12712_12787[2] = null);
(statearr_12712_12787[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12693 === 38))
{var inst_12676 = (state_12692[2]);var state_12692__$1 = state_12692;var statearr_12713_12788 = state_12692__$1;(statearr_12713_12788[2] = inst_12676);
(statearr_12713_12788[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12693 === 7))
{var inst_12688 = (state_12692[2]);var state_12692__$1 = state_12692;var statearr_12714_12789 = state_12692__$1;(statearr_12714_12789[2] = inst_12688);
(statearr_12714_12789[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12693 === 39))
{var inst_12655 = (state_12692[7]);var inst_12672 = (state_12692[2]);var inst_12673 = cljs.core.next.call(null,inst_12655);var inst_12635 = inst_12673;var inst_12636 = null;var inst_12637 = 0;var inst_12638 = 0;var state_12692__$1 = (function (){var statearr_12715 = state_12692;(statearr_12715[8] = inst_12638);
(statearr_12715[9] = inst_12637);
(statearr_12715[18] = inst_12672);
(statearr_12715[10] = inst_12635);
(statearr_12715[11] = inst_12636);
return statearr_12715;
})();var statearr_12716_12790 = state_12692__$1;(statearr_12716_12790[2] = null);
(statearr_12716_12790[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12693 === 8))
{var inst_12578 = (state_12692[12]);var inst_12579 = (state_12692[13]);var inst_12581 = (inst_12579 < inst_12578);var inst_12582 = inst_12581;var state_12692__$1 = state_12692;if(cljs.core.truth_(inst_12582))
{var statearr_12717_12791 = state_12692__$1;(statearr_12717_12791[1] = 10);
} else
{var statearr_12718_12792 = state_12692__$1;(statearr_12718_12792[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12693 === 40))
{var inst_12664 = (state_12692[16]);var inst_12665 = (state_12692[2]);var inst_12666 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12667 = cljs.core.async.untap_STAR_.call(null,m,inst_12664);var state_12692__$1 = (function (){var statearr_12719 = state_12692;(statearr_12719[19] = inst_12666);
(statearr_12719[20] = inst_12665);
return statearr_12719;
})();var statearr_12720_12793 = state_12692__$1;(statearr_12720_12793[2] = inst_12667);
(statearr_12720_12793[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12693 === 9))
{var inst_12624 = (state_12692[2]);var state_12692__$1 = state_12692;var statearr_12721_12794 = state_12692__$1;(statearr_12721_12794[2] = inst_12624);
(statearr_12721_12794[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12693 === 41))
{try{var inst_12664 = (state_12692[16]);var inst_12567 = (state_12692[5]);var inst_12670 = cljs.core.async.put_BANG_.call(null,inst_12664,inst_12567,done);var state_12692__$1 = state_12692;var statearr_12724_12795 = state_12692__$1;(statearr_12724_12795[2] = inst_12670);
(statearr_12724_12795[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e12722){if((e12722 instanceof Object))
{var ex__9838__auto__ = e12722;var statearr_12723_12796 = state_12692;(statearr_12723_12796[1] = 40);
(statearr_12723_12796[2] = ex__9838__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12722;
} else
{return null;
}
}
}} else
{if((state_val_12693 === 10))
{var inst_12579 = (state_12692[13]);var inst_12577 = (state_12692[14]);var inst_12585 = cljs.core._nth.call(null,inst_12577,inst_12579);var inst_12586 = cljs.core.nth.call(null,inst_12585,0,null);var inst_12587 = cljs.core.nth.call(null,inst_12585,1,null);var state_12692__$1 = (function (){var statearr_12725 = state_12692;(statearr_12725[21] = inst_12586);
return statearr_12725;
})();if(cljs.core.truth_(inst_12587))
{var statearr_12726_12797 = state_12692__$1;(statearr_12726_12797[1] = 13);
} else
{var statearr_12727_12798 = state_12692__$1;(statearr_12727_12798[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12693 === 42))
{var inst_12685 = (state_12692[2]);var state_12692__$1 = (function (){var statearr_12728 = state_12692;(statearr_12728[22] = inst_12685);
return statearr_12728;
})();var statearr_12729_12799 = state_12692__$1;(statearr_12729_12799[2] = null);
(statearr_12729_12799[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12693 === 11))
{var inst_12596 = (state_12692[23]);var inst_12576 = (state_12692[15]);var inst_12596__$1 = cljs.core.seq.call(null,inst_12576);var state_12692__$1 = (function (){var statearr_12730 = state_12692;(statearr_12730[23] = inst_12596__$1);
return statearr_12730;
})();if(inst_12596__$1)
{var statearr_12731_12800 = state_12692__$1;(statearr_12731_12800[1] = 16);
} else
{var statearr_12732_12801 = state_12692__$1;(statearr_12732_12801[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12693 === 12))
{var inst_12622 = (state_12692[2]);var state_12692__$1 = state_12692;var statearr_12733_12802 = state_12692__$1;(statearr_12733_12802[2] = inst_12622);
(statearr_12733_12802[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12693 === 13))
{var inst_12586 = (state_12692[21]);var inst_12589 = cljs.core.async.close_BANG_.call(null,inst_12586);var state_12692__$1 = state_12692;var statearr_12737_12803 = state_12692__$1;(statearr_12737_12803[2] = inst_12589);
(statearr_12737_12803[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12693 === 14))
{var state_12692__$1 = state_12692;var statearr_12738_12804 = state_12692__$1;(statearr_12738_12804[2] = null);
(statearr_12738_12804[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12693 === 15))
{var inst_12578 = (state_12692[12]);var inst_12579 = (state_12692[13]);var inst_12577 = (state_12692[14]);var inst_12576 = (state_12692[15]);var inst_12592 = (state_12692[2]);var inst_12593 = (inst_12579 + 1);var tmp12734 = inst_12578;var tmp12735 = inst_12577;var tmp12736 = inst_12576;var inst_12576__$1 = tmp12736;var inst_12577__$1 = tmp12735;var inst_12578__$1 = tmp12734;var inst_12579__$1 = inst_12593;var state_12692__$1 = (function (){var statearr_12739 = state_12692;(statearr_12739[24] = inst_12592);
(statearr_12739[12] = inst_12578__$1);
(statearr_12739[13] = inst_12579__$1);
(statearr_12739[14] = inst_12577__$1);
(statearr_12739[15] = inst_12576__$1);
return statearr_12739;
})();var statearr_12740_12805 = state_12692__$1;(statearr_12740_12805[2] = null);
(statearr_12740_12805[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12693 === 16))
{var inst_12596 = (state_12692[23]);var inst_12598 = cljs.core.chunked_seq_QMARK_.call(null,inst_12596);var state_12692__$1 = state_12692;if(inst_12598)
{var statearr_12741_12806 = state_12692__$1;(statearr_12741_12806[1] = 19);
} else
{var statearr_12742_12807 = state_12692__$1;(statearr_12742_12807[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12693 === 17))
{var state_12692__$1 = state_12692;var statearr_12743_12808 = state_12692__$1;(statearr_12743_12808[2] = null);
(statearr_12743_12808[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12693 === 18))
{var inst_12620 = (state_12692[2]);var state_12692__$1 = state_12692;var statearr_12744_12809 = state_12692__$1;(statearr_12744_12809[2] = inst_12620);
(statearr_12744_12809[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12693 === 19))
{var inst_12596 = (state_12692[23]);var inst_12600 = cljs.core.chunk_first.call(null,inst_12596);var inst_12601 = cljs.core.chunk_rest.call(null,inst_12596);var inst_12602 = cljs.core.count.call(null,inst_12600);var inst_12576 = inst_12601;var inst_12577 = inst_12600;var inst_12578 = inst_12602;var inst_12579 = 0;var state_12692__$1 = (function (){var statearr_12745 = state_12692;(statearr_12745[12] = inst_12578);
(statearr_12745[13] = inst_12579);
(statearr_12745[14] = inst_12577);
(statearr_12745[15] = inst_12576);
return statearr_12745;
})();var statearr_12746_12810 = state_12692__$1;(statearr_12746_12810[2] = null);
(statearr_12746_12810[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12693 === 20))
{var inst_12596 = (state_12692[23]);var inst_12606 = cljs.core.first.call(null,inst_12596);var inst_12607 = cljs.core.nth.call(null,inst_12606,0,null);var inst_12608 = cljs.core.nth.call(null,inst_12606,1,null);var state_12692__$1 = (function (){var statearr_12747 = state_12692;(statearr_12747[25] = inst_12607);
return statearr_12747;
})();if(cljs.core.truth_(inst_12608))
{var statearr_12748_12811 = state_12692__$1;(statearr_12748_12811[1] = 22);
} else
{var statearr_12749_12812 = state_12692__$1;(statearr_12749_12812[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12693 === 21))
{var inst_12617 = (state_12692[2]);var state_12692__$1 = state_12692;var statearr_12750_12813 = state_12692__$1;(statearr_12750_12813[2] = inst_12617);
(statearr_12750_12813[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12693 === 22))
{var inst_12607 = (state_12692[25]);var inst_12610 = cljs.core.async.close_BANG_.call(null,inst_12607);var state_12692__$1 = state_12692;var statearr_12751_12814 = state_12692__$1;(statearr_12751_12814[2] = inst_12610);
(statearr_12751_12814[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12693 === 23))
{var state_12692__$1 = state_12692;var statearr_12752_12815 = state_12692__$1;(statearr_12752_12815[2] = null);
(statearr_12752_12815[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12693 === 24))
{var inst_12596 = (state_12692[23]);var inst_12613 = (state_12692[2]);var inst_12614 = cljs.core.next.call(null,inst_12596);var inst_12576 = inst_12614;var inst_12577 = null;var inst_12578 = 0;var inst_12579 = 0;var state_12692__$1 = (function (){var statearr_12753 = state_12692;(statearr_12753[12] = inst_12578);
(statearr_12753[13] = inst_12579);
(statearr_12753[26] = inst_12613);
(statearr_12753[14] = inst_12577);
(statearr_12753[15] = inst_12576);
return statearr_12753;
})();var statearr_12754_12816 = state_12692__$1;(statearr_12754_12816[2] = null);
(statearr_12754_12816[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12693 === 25))
{var inst_12638 = (state_12692[8]);var inst_12637 = (state_12692[9]);var inst_12640 = (inst_12638 < inst_12637);var inst_12641 = inst_12640;var state_12692__$1 = state_12692;if(cljs.core.truth_(inst_12641))
{var statearr_12755_12817 = state_12692__$1;(statearr_12755_12817[1] = 27);
} else
{var statearr_12756_12818 = state_12692__$1;(statearr_12756_12818[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12693 === 26))
{var inst_12683 = (state_12692[2]);var state_12692__$1 = (function (){var statearr_12757 = state_12692;(statearr_12757[27] = inst_12683);
return statearr_12757;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12692__$1,42,dchan);
} else
{if((state_val_12693 === 27))
{var inst_12638 = (state_12692[8]);var inst_12636 = (state_12692[11]);var inst_12643 = cljs.core._nth.call(null,inst_12636,inst_12638);var state_12692__$1 = (function (){var statearr_12758 = state_12692;(statearr_12758[6] = inst_12643);
return statearr_12758;
})();var statearr_12759_12819 = state_12692__$1;(statearr_12759_12819[2] = null);
(statearr_12759_12819[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12693 === 28))
{var inst_12655 = (state_12692[7]);var inst_12635 = (state_12692[10]);var inst_12655__$1 = cljs.core.seq.call(null,inst_12635);var state_12692__$1 = (function (){var statearr_12763 = state_12692;(statearr_12763[7] = inst_12655__$1);
return statearr_12763;
})();if(inst_12655__$1)
{var statearr_12764_12820 = state_12692__$1;(statearr_12764_12820[1] = 33);
} else
{var statearr_12765_12821 = state_12692__$1;(statearr_12765_12821[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12693 === 29))
{var inst_12681 = (state_12692[2]);var state_12692__$1 = state_12692;var statearr_12766_12822 = state_12692__$1;(statearr_12766_12822[2] = inst_12681);
(statearr_12766_12822[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12693 === 30))
{var inst_12638 = (state_12692[8]);var inst_12637 = (state_12692[9]);var inst_12635 = (state_12692[10]);var inst_12636 = (state_12692[11]);var inst_12651 = (state_12692[2]);var inst_12652 = (inst_12638 + 1);var tmp12760 = inst_12637;var tmp12761 = inst_12635;var tmp12762 = inst_12636;var inst_12635__$1 = tmp12761;var inst_12636__$1 = tmp12762;var inst_12637__$1 = tmp12760;var inst_12638__$1 = inst_12652;var state_12692__$1 = (function (){var statearr_12767 = state_12692;(statearr_12767[8] = inst_12638__$1);
(statearr_12767[9] = inst_12637__$1);
(statearr_12767[28] = inst_12651);
(statearr_12767[10] = inst_12635__$1);
(statearr_12767[11] = inst_12636__$1);
return statearr_12767;
})();var statearr_12768_12823 = state_12692__$1;(statearr_12768_12823[2] = null);
(statearr_12768_12823[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12693 === 31))
{var inst_12643 = (state_12692[6]);var inst_12644 = (state_12692[2]);var inst_12645 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12646 = cljs.core.async.untap_STAR_.call(null,m,inst_12643);var state_12692__$1 = (function (){var statearr_12769 = state_12692;(statearr_12769[29] = inst_12644);
(statearr_12769[30] = inst_12645);
return statearr_12769;
})();var statearr_12770_12824 = state_12692__$1;(statearr_12770_12824[2] = inst_12646);
(statearr_12770_12824[1] = 30);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__9844__auto__){
return (function() {
var state_machine__9845__auto__ = null;
var state_machine__9845__auto____0 = (function (){var statearr_12772 = (new Array(31));(statearr_12772[0] = state_machine__9845__auto__);
(statearr_12772[1] = 1);
return statearr_12772;
});
var state_machine__9845__auto____1 = (function (state_12692){while(true){
var result__9846__auto__ = switch__9844__auto__.call(null,state_12692);if(cljs.core.keyword_identical_QMARK_.call(null,result__9846__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9846__auto__;
}
break;
}
});
state_machine__9845__auto__ = function(state_12692){
switch(arguments.length){
case 0:
return state_machine__9845__auto____0.call(this);
case 1:
return state_machine__9845__auto____1.call(this,state_12692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9845__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9845__auto____0;
state_machine__9845__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9845__auto____1;
return state_machine__9845__auto__;
})()
;})(switch__9844__auto__))
})();var state__9896__auto__ = (function (){var statearr_12773 = f__9895__auto__.call(null);(statearr_12773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9894__auto___12774);
return statearr_12773;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9896__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = {};
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3941__auto__ = m;if(and__3941__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__6787__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6787__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3941__auto__ = m;if(and__3941__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__6787__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6787__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3941__auto__ = m;if(and__3941__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3941__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__6787__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6787__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3941__auto__ = m;if(and__3941__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__6787__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6787__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3941__auto__ = m;if(and__3941__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__6787__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6787__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], true);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((function (){var and__3941__auto__ = cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424));if(and__3941__auto__)
{return !(cljs.core.empty_QMARK_.call(null,solos));
} else
{return and__3941__auto__;
}
})())?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], true);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12945 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12945');

/**
* @constructor
*/
cljs.core.async.t12945 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta12946){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta12946 = meta12946;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12945.cljs$lang$type = true;
cljs.core.async.t12945.cljs$lang$ctorStr = "cljs.core.async/t12945";
cljs.core.async.t12945.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6725__auto__,writer__6726__auto__,opt__6727__auto__){return cljs.core._write.call(null,writer__6726__auto__,"cljs.core.async/t12945");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12945.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12945.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12945.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12945.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12945.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12945.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12945.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12945.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12945.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12947){var self__ = this;
return self__.meta12946;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12947,meta12946__$1){var self__ = this;
return (new cljs.core.async.t12945(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta12946__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12945 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12945(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12946){return (new cljs.core.async.t12945(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12946));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12945(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__9894__auto___13065 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__9895__auto__ = (function (){var switch__9844__auto__ = (function (state_13018){var state_val_13019 = (state_13018[1]);if((state_val_13019 === 1))
{var inst_12951 = (state_13018[5]);var inst_12951__$1 = calc_state.call(null);var inst_12952 = cljs.core.seq_QMARK_.call(null,inst_12951__$1);var state_13018__$1 = (function (){var statearr_13020 = state_13018;(statearr_13020[5] = inst_12951__$1);
return statearr_13020;
})();if(inst_12952)
{var statearr_13021_13066 = state_13018__$1;(statearr_13021_13066[1] = 2);
} else
{var statearr_13022_13067 = state_13018__$1;(statearr_13022_13067[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13019 === 2))
{var inst_12951 = (state_13018[5]);var inst_12954 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12951);var state_13018__$1 = state_13018;var statearr_13023_13068 = state_13018__$1;(statearr_13023_13068[2] = inst_12954);
(statearr_13023_13068[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13019 === 3))
{var inst_12951 = (state_13018[5]);var state_13018__$1 = state_13018;var statearr_13024_13069 = state_13018__$1;(statearr_13024_13069[2] = inst_12951);
(statearr_13024_13069[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13019 === 4))
{var inst_12951 = (state_13018[5]);var inst_12957 = (state_13018[2]);var inst_12958 = cljs.core.get.call(null,inst_12957,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12959 = cljs.core.get.call(null,inst_12957,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12960 = cljs.core.get.call(null,inst_12957,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12961 = inst_12951;var state_13018__$1 = (function (){var statearr_13025 = state_13018;(statearr_13025[6] = inst_12959);
(statearr_13025[7] = inst_12958);
(statearr_13025[8] = inst_12961);
(statearr_13025[9] = inst_12960);
return statearr_13025;
})();var statearr_13026_13070 = state_13018__$1;(statearr_13026_13070[2] = null);
(statearr_13026_13070[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13019 === 5))
{var inst_12961 = (state_13018[8]);var inst_12964 = cljs.core.seq_QMARK_.call(null,inst_12961);var state_13018__$1 = state_13018;if(inst_12964)
{var statearr_13027_13071 = state_13018__$1;(statearr_13027_13071[1] = 7);
} else
{var statearr_13028_13072 = state_13018__$1;(statearr_13028_13072[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13019 === 6))
{var inst_13016 = (state_13018[2]);var state_13018__$1 = state_13018;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13018__$1,inst_13016);
} else
{if((state_val_13019 === 7))
{var inst_12961 = (state_13018[8]);var inst_12966 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12961);var state_13018__$1 = state_13018;var statearr_13029_13073 = state_13018__$1;(statearr_13029_13073[2] = inst_12966);
(statearr_13029_13073[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13019 === 8))
{var inst_12961 = (state_13018[8]);var state_13018__$1 = state_13018;var statearr_13030_13074 = state_13018__$1;(statearr_13030_13074[2] = inst_12961);
(statearr_13030_13074[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13019 === 9))
{var inst_12969 = (state_13018[10]);var inst_12969__$1 = (state_13018[2]);var inst_12970 = cljs.core.get.call(null,inst_12969__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12971 = cljs.core.get.call(null,inst_12969__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12972 = cljs.core.get.call(null,inst_12969__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_13018__$1 = (function (){var statearr_13031 = state_13018;(statearr_13031[10] = inst_12969__$1);
(statearr_13031[11] = inst_12972);
(statearr_13031[12] = inst_12971);
return statearr_13031;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13018__$1,10,inst_12970);
} else
{if((state_val_13019 === 10))
{var inst_12976 = (state_13018[13]);var inst_12978 = (state_13018[14]);var inst_12975 = (state_13018[2]);var inst_12976__$1 = cljs.core.nth.call(null,inst_12975,0,null);var inst_12977 = cljs.core.nth.call(null,inst_12975,1,null);var inst_12978__$1 = (inst_12976__$1 == null);var state_13018__$1 = (function (){var statearr_13032 = state_13018;(statearr_13032[13] = inst_12976__$1);
(statearr_13032[15] = inst_12977);
(statearr_13032[14] = inst_12978__$1);
return statearr_13032;
})();if(cljs.core.truth_(inst_12978__$1))
{var statearr_13033_13075 = state_13018__$1;(statearr_13033_13075[1] = 11);
} else
{var statearr_13034_13076 = state_13018__$1;(statearr_13034_13076[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13019 === 11))
{var inst_12978 = (state_13018[14]);var state_13018__$1 = state_13018;var statearr_13035_13077 = state_13018__$1;(statearr_13035_13077[2] = inst_12978);
(statearr_13035_13077[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13019 === 12))
{var inst_12977 = (state_13018[15]);var inst_12981 = cljs.core._EQ_.call(null,inst_12977,change);var state_13018__$1 = state_13018;var statearr_13036_13078 = state_13018__$1;(statearr_13036_13078[2] = inst_12981);
(statearr_13036_13078[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13019 === 13))
{var inst_12983 = (state_13018[2]);var state_13018__$1 = state_13018;if(cljs.core.truth_(inst_12983))
{var statearr_13037_13079 = state_13018__$1;(statearr_13037_13079[1] = 14);
} else
{var statearr_13038_13080 = state_13018__$1;(statearr_13038_13080[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13019 === 14))
{var inst_12976 = (state_13018[13]);var inst_12985 = (inst_12976 == null);var state_13018__$1 = state_13018;if(cljs.core.truth_(inst_12985))
{var statearr_13039_13081 = state_13018__$1;(statearr_13039_13081[1] = 17);
} else
{var statearr_13040_13082 = state_13018__$1;(statearr_13040_13082[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13019 === 15))
{var inst_12994 = (state_13018[16]);var inst_12977 = (state_13018[15]);var inst_12972 = (state_13018[11]);var inst_12994__$1 = inst_12972.call(null,inst_12977);var state_13018__$1 = (function (){var statearr_13041 = state_13018;(statearr_13041[16] = inst_12994__$1);
return statearr_13041;
})();if(cljs.core.truth_(inst_12994__$1))
{var statearr_13042_13083 = state_13018__$1;(statearr_13042_13083[1] = 20);
} else
{var statearr_13043_13084 = state_13018__$1;(statearr_13043_13084[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13019 === 16))
{var inst_13014 = (state_13018[2]);var state_13018__$1 = state_13018;var statearr_13044_13085 = state_13018__$1;(statearr_13044_13085[2] = inst_13014);
(statearr_13044_13085[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13019 === 17))
{var inst_12977 = (state_13018[15]);var inst_12987 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12977);var state_13018__$1 = state_13018;var statearr_13045_13086 = state_13018__$1;(statearr_13045_13086[2] = inst_12987);
(statearr_13045_13086[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13019 === 18))
{var state_13018__$1 = state_13018;var statearr_13046_13087 = state_13018__$1;(statearr_13046_13087[2] = null);
(statearr_13046_13087[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13019 === 19))
{var inst_12990 = (state_13018[2]);var inst_12991 = calc_state.call(null);var inst_12961 = inst_12991;var state_13018__$1 = (function (){var statearr_13047 = state_13018;(statearr_13047[17] = inst_12990);
(statearr_13047[8] = inst_12961);
return statearr_13047;
})();var statearr_13048_13088 = state_13018__$1;(statearr_13048_13088[2] = null);
(statearr_13048_13088[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13019 === 20))
{var inst_12994 = (state_13018[16]);var state_13018__$1 = state_13018;var statearr_13049_13089 = state_13018__$1;(statearr_13049_13089[2] = inst_12994);
(statearr_13049_13089[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13019 === 21))
{var inst_12972 = (state_13018[11]);var inst_12997 = (state_13018[18]);var inst_12997__$1 = cljs.core.empty_QMARK_.call(null,inst_12972);var state_13018__$1 = (function (){var statearr_13050 = state_13018;(statearr_13050[18] = inst_12997__$1);
return statearr_13050;
})();if(inst_12997__$1)
{var statearr_13051_13090 = state_13018__$1;(statearr_13051_13090[1] = 23);
} else
{var statearr_13052_13091 = state_13018__$1;(statearr_13052_13091[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13019 === 22))
{var inst_13005 = (state_13018[2]);var state_13018__$1 = state_13018;if(cljs.core.truth_(inst_13005))
{var statearr_13053_13092 = state_13018__$1;(statearr_13053_13092[1] = 26);
} else
{var statearr_13054_13093 = state_13018__$1;(statearr_13054_13093[1] = 27);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13019 === 23))
{var inst_12977 = (state_13018[15]);var inst_12971 = (state_13018[12]);var inst_12999 = inst_12971.call(null,inst_12977);var inst_13000 = cljs.core.not.call(null,inst_12999);var state_13018__$1 = state_13018;var statearr_13055_13094 = state_13018__$1;(statearr_13055_13094[2] = inst_13000);
(statearr_13055_13094[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13019 === 24))
{var inst_12997 = (state_13018[18]);var state_13018__$1 = state_13018;var statearr_13056_13095 = state_13018__$1;(statearr_13056_13095[2] = inst_12997);
(statearr_13056_13095[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13019 === 25))
{var inst_13003 = (state_13018[2]);var state_13018__$1 = state_13018;var statearr_13057_13096 = state_13018__$1;(statearr_13057_13096[2] = inst_13003);
(statearr_13057_13096[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13019 === 26))
{var inst_12976 = (state_13018[13]);var state_13018__$1 = state_13018;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13018__$1,29,out,inst_12976);
} else
{if((state_val_13019 === 27))
{var state_13018__$1 = state_13018;var statearr_13058_13097 = state_13018__$1;(statearr_13058_13097[2] = null);
(statearr_13058_13097[1] = 28);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13019 === 28))
{var inst_12969 = (state_13018[10]);var inst_13011 = (state_13018[2]);var inst_12961 = inst_12969;var state_13018__$1 = (function (){var statearr_13059 = state_13018;(statearr_13059[19] = inst_13011);
(statearr_13059[8] = inst_12961);
return statearr_13059;
})();var statearr_13060_13098 = state_13018__$1;(statearr_13060_13098[2] = null);
(statearr_13060_13098[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13019 === 29))
{var inst_13008 = (state_13018[2]);var state_13018__$1 = state_13018;var statearr_13061_13099 = state_13018__$1;(statearr_13061_13099[2] = inst_13008);
(statearr_13061_13099[1] = 28);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__9844__auto__){
return (function() {
var state_machine__9845__auto__ = null;
var state_machine__9845__auto____0 = (function (){var statearr_13063 = (new Array(20));(statearr_13063[0] = state_machine__9845__auto__);
(statearr_13063[1] = 1);
return statearr_13063;
});
var state_machine__9845__auto____1 = (function (state_13018){while(true){
var result__9846__auto__ = switch__9844__auto__.call(null,state_13018);if(cljs.core.keyword_identical_QMARK_.call(null,result__9846__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9846__auto__;
}
break;
}
});
state_machine__9845__auto__ = function(state_13018){
switch(arguments.length){
case 0:
return state_machine__9845__auto____0.call(this);
case 1:
return state_machine__9845__auto____1.call(this,state_13018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9845__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9845__auto____0;
state_machine__9845__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9845__auto____1;
return state_machine__9845__auto__;
})()
;})(switch__9844__auto__))
})();var state__9896__auto__ = (function (){var statearr_13064 = f__9895__auto__.call(null);(statearr_13064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9894__auto___13065);
return statearr_13064;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9896__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = {};
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3941__auto__ = p;if(and__3941__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3941__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__6787__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6787__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3941__auto__ = p;if(and__3941__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3941__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__6787__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6787__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3941__auto__ = p;if(and__3941__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3941__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__6787__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6787__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3941__auto__ = p;if(and__3941__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__6787__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6787__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3943__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3943__auto__,mults){
return (function (p1__13100_SHARP_){if(cljs.core.truth_(p1__13100_SHARP_.call(null,topic)))
{return p1__13100_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13100_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3943__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13224 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t13224');

/**
* @constructor
*/
cljs.core.async.t13224 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13225){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13225 = meta13225;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13224.cljs$lang$type = true;
cljs.core.async.t13224.cljs$lang$ctorStr = "cljs.core.async/t13224";
cljs.core.async.t13224.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6725__auto__,writer__6726__auto__,opt__6727__auto__){return cljs.core._write.call(null,writer__6726__auto__,"cljs.core.async/t13224");
});})(mults,ensure_mult))
;
cljs.core.async.t13224.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13224.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13224.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13224.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13224.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13224.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13224.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13224.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13226){var self__ = this;
return self__.meta13225;
});})(mults,ensure_mult))
;
cljs.core.async.t13224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13226,meta13225__$1){var self__ = this;
return (new cljs.core.async.t13224(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13225__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13224 = ((function (mults,ensure_mult){
return (function __GT_t13224(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13225){return (new cljs.core.async.t13224(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13225));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13224(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__9894__auto___13347 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__9895__auto__ = (function (){var switch__9844__auto__ = (function (state_13299){var state_val_13300 = (state_13299[1]);if((state_val_13300 === 1))
{var state_13299__$1 = state_13299;var statearr_13301_13348 = state_13299__$1;(statearr_13301_13348[2] = null);
(statearr_13301_13348[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13300 === 2))
{var state_13299__$1 = state_13299;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13299__$1,4,ch);
} else
{if((state_val_13300 === 3))
{var inst_13297 = (state_13299[2]);var state_13299__$1 = state_13299;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13299__$1,inst_13297);
} else
{if((state_val_13300 === 4))
{var inst_13229 = (state_13299[5]);var inst_13229__$1 = (state_13299[2]);var inst_13230 = (inst_13229__$1 == null);var state_13299__$1 = (function (){var statearr_13302 = state_13299;(statearr_13302[5] = inst_13229__$1);
return statearr_13302;
})();if(cljs.core.truth_(inst_13230))
{var statearr_13303_13349 = state_13299__$1;(statearr_13303_13349[1] = 5);
} else
{var statearr_13304_13350 = state_13299__$1;(statearr_13304_13350[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13300 === 5))
{var inst_13236 = cljs.core.deref.call(null,mults);var inst_13237 = cljs.core.vals.call(null,inst_13236);var inst_13238 = cljs.core.seq.call(null,inst_13237);var inst_13239 = inst_13238;var inst_13240 = null;var inst_13241 = 0;var inst_13242 = 0;var state_13299__$1 = (function (){var statearr_13305 = state_13299;(statearr_13305[6] = inst_13239);
(statearr_13305[7] = inst_13241);
(statearr_13305[8] = inst_13242);
(statearr_13305[9] = inst_13240);
return statearr_13305;
})();var statearr_13306_13351 = state_13299__$1;(statearr_13306_13351[2] = null);
(statearr_13306_13351[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13300 === 6))
{var inst_13277 = (state_13299[10]);var inst_13229 = (state_13299[5]);var inst_13279 = (state_13299[11]);var inst_13277__$1 = topic_fn.call(null,inst_13229);var inst_13278 = cljs.core.deref.call(null,mults);var inst_13279__$1 = cljs.core.get.call(null,inst_13278,inst_13277__$1);var state_13299__$1 = (function (){var statearr_13307 = state_13299;(statearr_13307[10] = inst_13277__$1);
(statearr_13307[11] = inst_13279__$1);
return statearr_13307;
})();if(cljs.core.truth_(inst_13279__$1))
{var statearr_13308_13352 = state_13299__$1;(statearr_13308_13352[1] = 19);
} else
{var statearr_13309_13353 = state_13299__$1;(statearr_13309_13353[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13300 === 7))
{var inst_13295 = (state_13299[2]);var state_13299__$1 = state_13299;var statearr_13310_13354 = state_13299__$1;(statearr_13310_13354[2] = inst_13295);
(statearr_13310_13354[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13300 === 8))
{var inst_13241 = (state_13299[7]);var inst_13242 = (state_13299[8]);var inst_13244 = (inst_13242 < inst_13241);var inst_13245 = inst_13244;var state_13299__$1 = state_13299;if(cljs.core.truth_(inst_13245))
{var statearr_13314_13355 = state_13299__$1;(statearr_13314_13355[1] = 10);
} else
{var statearr_13315_13356 = state_13299__$1;(statearr_13315_13356[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13300 === 9))
{var inst_13275 = (state_13299[2]);var state_13299__$1 = state_13299;var statearr_13316_13357 = state_13299__$1;(statearr_13316_13357[2] = inst_13275);
(statearr_13316_13357[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13300 === 10))
{var inst_13239 = (state_13299[6]);var inst_13241 = (state_13299[7]);var inst_13242 = (state_13299[8]);var inst_13240 = (state_13299[9]);var inst_13247 = cljs.core._nth.call(null,inst_13240,inst_13242);var inst_13248 = cljs.core.async.muxch_STAR_.call(null,inst_13247);var inst_13249 = cljs.core.async.close_BANG_.call(null,inst_13248);var inst_13250 = (inst_13242 + 1);var tmp13311 = inst_13239;var tmp13312 = inst_13241;var tmp13313 = inst_13240;var inst_13239__$1 = tmp13311;var inst_13240__$1 = tmp13313;var inst_13241__$1 = tmp13312;var inst_13242__$1 = inst_13250;var state_13299__$1 = (function (){var statearr_13317 = state_13299;(statearr_13317[6] = inst_13239__$1);
(statearr_13317[7] = inst_13241__$1);
(statearr_13317[8] = inst_13242__$1);
(statearr_13317[9] = inst_13240__$1);
(statearr_13317[12] = inst_13249);
return statearr_13317;
})();var statearr_13318_13358 = state_13299__$1;(statearr_13318_13358[2] = null);
(statearr_13318_13358[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13300 === 11))
{var inst_13239 = (state_13299[6]);var inst_13253 = (state_13299[13]);var inst_13253__$1 = cljs.core.seq.call(null,inst_13239);var state_13299__$1 = (function (){var statearr_13319 = state_13299;(statearr_13319[13] = inst_13253__$1);
return statearr_13319;
})();if(inst_13253__$1)
{var statearr_13320_13359 = state_13299__$1;(statearr_13320_13359[1] = 13);
} else
{var statearr_13321_13360 = state_13299__$1;(statearr_13321_13360[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13300 === 12))
{var inst_13273 = (state_13299[2]);var state_13299__$1 = state_13299;var statearr_13322_13361 = state_13299__$1;(statearr_13322_13361[2] = inst_13273);
(statearr_13322_13361[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13300 === 13))
{var inst_13253 = (state_13299[13]);var inst_13255 = cljs.core.chunked_seq_QMARK_.call(null,inst_13253);var state_13299__$1 = state_13299;if(inst_13255)
{var statearr_13323_13362 = state_13299__$1;(statearr_13323_13362[1] = 16);
} else
{var statearr_13324_13363 = state_13299__$1;(statearr_13324_13363[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13300 === 14))
{var state_13299__$1 = state_13299;var statearr_13325_13364 = state_13299__$1;(statearr_13325_13364[2] = null);
(statearr_13325_13364[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13300 === 15))
{var inst_13271 = (state_13299[2]);var state_13299__$1 = state_13299;var statearr_13326_13365 = state_13299__$1;(statearr_13326_13365[2] = inst_13271);
(statearr_13326_13365[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13300 === 16))
{var inst_13253 = (state_13299[13]);var inst_13257 = cljs.core.chunk_first.call(null,inst_13253);var inst_13258 = cljs.core.chunk_rest.call(null,inst_13253);var inst_13259 = cljs.core.count.call(null,inst_13257);var inst_13239 = inst_13258;var inst_13240 = inst_13257;var inst_13241 = inst_13259;var inst_13242 = 0;var state_13299__$1 = (function (){var statearr_13327 = state_13299;(statearr_13327[6] = inst_13239);
(statearr_13327[7] = inst_13241);
(statearr_13327[8] = inst_13242);
(statearr_13327[9] = inst_13240);
return statearr_13327;
})();var statearr_13328_13366 = state_13299__$1;(statearr_13328_13366[2] = null);
(statearr_13328_13366[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13300 === 17))
{var inst_13253 = (state_13299[13]);var inst_13262 = cljs.core.first.call(null,inst_13253);var inst_13263 = cljs.core.async.muxch_STAR_.call(null,inst_13262);var inst_13264 = cljs.core.async.close_BANG_.call(null,inst_13263);var inst_13265 = cljs.core.next.call(null,inst_13253);var inst_13239 = inst_13265;var inst_13240 = null;var inst_13241 = 0;var inst_13242 = 0;var state_13299__$1 = (function (){var statearr_13329 = state_13299;(statearr_13329[6] = inst_13239);
(statearr_13329[7] = inst_13241);
(statearr_13329[8] = inst_13242);
(statearr_13329[9] = inst_13240);
(statearr_13329[14] = inst_13264);
return statearr_13329;
})();var statearr_13330_13367 = state_13299__$1;(statearr_13330_13367[2] = null);
(statearr_13330_13367[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13300 === 18))
{var inst_13268 = (state_13299[2]);var state_13299__$1 = state_13299;var statearr_13331_13368 = state_13299__$1;(statearr_13331_13368[2] = inst_13268);
(statearr_13331_13368[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13300 === 19))
{var state_13299__$1 = state_13299;var statearr_13332_13369 = state_13299__$1;(statearr_13332_13369[2] = null);
(statearr_13332_13369[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13300 === 20))
{var state_13299__$1 = state_13299;var statearr_13333_13370 = state_13299__$1;(statearr_13333_13370[2] = null);
(statearr_13333_13370[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13300 === 21))
{var inst_13292 = (state_13299[2]);var state_13299__$1 = (function (){var statearr_13334 = state_13299;(statearr_13334[15] = inst_13292);
return statearr_13334;
})();var statearr_13335_13371 = state_13299__$1;(statearr_13335_13371[2] = null);
(statearr_13335_13371[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13300 === 22))
{var inst_13289 = (state_13299[2]);var state_13299__$1 = state_13299;var statearr_13336_13372 = state_13299__$1;(statearr_13336_13372[2] = inst_13289);
(statearr_13336_13372[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13300 === 23))
{var inst_13277 = (state_13299[10]);var inst_13281 = (state_13299[2]);var inst_13282 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13277);var state_13299__$1 = (function (){var statearr_13337 = state_13299;(statearr_13337[16] = inst_13281);
return statearr_13337;
})();var statearr_13338_13373 = state_13299__$1;(statearr_13338_13373[2] = inst_13282);
(statearr_13338_13373[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13300 === 24))
{try{var inst_13229 = (state_13299[5]);var inst_13279 = (state_13299[11]);var inst_13285 = cljs.core.async.muxch_STAR_.call(null,inst_13279);var state_13299__$1 = state_13299;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13299__$1,25,inst_13285,inst_13229);
}catch (e13339){if((e13339 instanceof Object))
{var ex__9838__auto__ = e13339;var statearr_13340_13374 = state_13299;(statearr_13340_13374[1] = 23);
(statearr_13340_13374[2] = ex__9838__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13339;
} else
{return null;
}
}
}} else
{if((state_val_13300 === 25))
{try{var inst_13287 = (state_13299[2]);var state_13299__$1 = state_13299;var statearr_13343_13375 = state_13299__$1;(statearr_13343_13375[2] = inst_13287);
(statearr_13343_13375[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e13341){if((e13341 instanceof Object))
{var ex__9838__auto__ = e13341;var statearr_13342_13376 = state_13299;(statearr_13342_13376[1] = 23);
(statearr_13342_13376[2] = ex__9838__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13341;
} else
{return null;
}
}
}} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__9844__auto__){
return (function() {
var state_machine__9845__auto__ = null;
var state_machine__9845__auto____0 = (function (){var statearr_13345 = (new Array(17));(statearr_13345[0] = state_machine__9845__auto__);
(statearr_13345[1] = 1);
return statearr_13345;
});
var state_machine__9845__auto____1 = (function (state_13299){while(true){
var result__9846__auto__ = switch__9844__auto__.call(null,state_13299);if(cljs.core.keyword_identical_QMARK_.call(null,result__9846__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9846__auto__;
}
break;
}
});
state_machine__9845__auto__ = function(state_13299){
switch(arguments.length){
case 0:
return state_machine__9845__auto____0.call(this);
case 1:
return state_machine__9845__auto____1.call(this,state_13299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9845__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9845__auto____0;
state_machine__9845__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9845__auto____1;
return state_machine__9845__auto__;
})()
;})(switch__9844__auto__))
})();var state__9896__auto__ = (function (){var statearr_13346 = f__9895__auto__.call(null);(statearr_13346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9894__auto___13347);
return statearr_13346;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9896__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,java.util.Arrays.copyOf.call(null,rets,cnt));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__9894__auto___13507 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__9895__auto__ = (function (){var switch__9844__auto__ = (function (state_13479){var state_val_13480 = (state_13479[1]);if((state_val_13480 === 1))
{var state_13479__$1 = state_13479;var statearr_13481_13508 = state_13479__$1;(statearr_13481_13508[2] = null);
(statearr_13481_13508[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13480 === 2))
{var inst_13443 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13444 = 0;var state_13479__$1 = (function (){var statearr_13482 = state_13479;(statearr_13482[5] = inst_13444);
(statearr_13482[6] = inst_13443);
return statearr_13482;
})();var statearr_13483_13509 = state_13479__$1;(statearr_13483_13509[2] = null);
(statearr_13483_13509[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13480 === 3))
{var inst_13477 = (state_13479[2]);var state_13479__$1 = state_13479;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13479__$1,inst_13477);
} else
{if((state_val_13480 === 4))
{var inst_13444 = (state_13479[5]);var inst_13446 = (inst_13444 < cnt);var state_13479__$1 = state_13479;if(cljs.core.truth_(inst_13446))
{var statearr_13484_13510 = state_13479__$1;(statearr_13484_13510[1] = 6);
} else
{var statearr_13485_13511 = state_13479__$1;(statearr_13485_13511[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13480 === 5))
{var inst_13463 = (state_13479[2]);var state_13479__$1 = (function (){var statearr_13486 = state_13479;(statearr_13486[7] = inst_13463);
return statearr_13486;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13479__$1,12,dchan);
} else
{if((state_val_13480 === 6))
{var state_13479__$1 = state_13479;var statearr_13487_13512 = state_13479__$1;(statearr_13487_13512[2] = null);
(statearr_13487_13512[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13480 === 7))
{var state_13479__$1 = state_13479;var statearr_13488_13513 = state_13479__$1;(statearr_13488_13513[2] = null);
(statearr_13488_13513[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13480 === 8))
{var inst_13461 = (state_13479[2]);var state_13479__$1 = state_13479;var statearr_13489_13514 = state_13479__$1;(statearr_13489_13514[2] = inst_13461);
(statearr_13489_13514[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13480 === 9))
{var inst_13444 = (state_13479[5]);var inst_13456 = (state_13479[2]);var inst_13457 = (inst_13444 + 1);var inst_13444__$1 = inst_13457;var state_13479__$1 = (function (){var statearr_13490 = state_13479;(statearr_13490[5] = inst_13444__$1);
(statearr_13490[8] = inst_13456);
return statearr_13490;
})();var statearr_13491_13515 = state_13479__$1;(statearr_13491_13515[2] = null);
(statearr_13491_13515[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13480 === 10))
{var inst_13448 = (state_13479[2]);var inst_13449 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13479__$1 = (function (){var statearr_13492 = state_13479;(statearr_13492[9] = inst_13448);
return statearr_13492;
})();var statearr_13493_13516 = state_13479__$1;(statearr_13493_13516[2] = inst_13449);
(statearr_13493_13516[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13480 === 11))
{try{var inst_13444 = (state_13479[5]);var inst_13452 = chs__$1.call(null,inst_13444);var inst_13453 = done.call(null,inst_13444);var inst_13454 = cljs.core.async.take_BANG_.call(null,inst_13452,inst_13453);var state_13479__$1 = state_13479;var statearr_13496_13517 = state_13479__$1;(statearr_13496_13517[2] = inst_13454);
(statearr_13496_13517[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e13494){if((e13494 instanceof Object))
{var ex__9838__auto__ = e13494;var statearr_13495_13518 = state_13479;(statearr_13495_13518[1] = 10);
(statearr_13495_13518[2] = ex__9838__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13494;
} else
{return null;
}
}
}} else
{if((state_val_13480 === 12))
{var inst_13465 = (state_13479[10]);var inst_13465__$1 = (state_13479[2]);var inst_13466 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13465__$1);var state_13479__$1 = (function (){var statearr_13497 = state_13479;(statearr_13497[10] = inst_13465__$1);
return statearr_13497;
})();if(cljs.core.truth_(inst_13466))
{var statearr_13498_13519 = state_13479__$1;(statearr_13498_13519[1] = 13);
} else
{var statearr_13499_13520 = state_13479__$1;(statearr_13499_13520[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13480 === 13))
{var inst_13468 = cljs.core.async.close_BANG_.call(null,out);var state_13479__$1 = state_13479;var statearr_13500_13521 = state_13479__$1;(statearr_13500_13521[2] = inst_13468);
(statearr_13500_13521[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13480 === 14))
{var inst_13465 = (state_13479[10]);var inst_13470 = cljs.core.apply.call(null,f,inst_13465);var state_13479__$1 = state_13479;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13479__$1,16,out,inst_13470);
} else
{if((state_val_13480 === 15))
{var inst_13475 = (state_13479[2]);var state_13479__$1 = state_13479;var statearr_13501_13522 = state_13479__$1;(statearr_13501_13522[2] = inst_13475);
(statearr_13501_13522[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13480 === 16))
{var inst_13472 = (state_13479[2]);var state_13479__$1 = (function (){var statearr_13502 = state_13479;(statearr_13502[11] = inst_13472);
return statearr_13502;
})();var statearr_13503_13523 = state_13479__$1;(statearr_13503_13523[2] = null);
(statearr_13503_13523[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__9844__auto__){
return (function() {
var state_machine__9845__auto__ = null;
var state_machine__9845__auto____0 = (function (){var statearr_13505 = (new Array(12));(statearr_13505[0] = state_machine__9845__auto__);
(statearr_13505[1] = 1);
return statearr_13505;
});
var state_machine__9845__auto____1 = (function (state_13479){while(true){
var result__9846__auto__ = switch__9844__auto__.call(null,state_13479);if(cljs.core.keyword_identical_QMARK_.call(null,result__9846__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9846__auto__;
}
break;
}
});
state_machine__9845__auto__ = function(state_13479){
switch(arguments.length){
case 0:
return state_machine__9845__auto____0.call(this);
case 1:
return state_machine__9845__auto____1.call(this,state_13479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9845__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9845__auto____0;
state_machine__9845__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9845__auto____1;
return state_machine__9845__auto__;
})()
;})(switch__9844__auto__))
})();var state__9896__auto__ = (function (){var statearr_13506 = f__9895__auto__.call(null);(statearr_13506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9894__auto___13507);
return statearr_13506;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9896__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9894__auto___13623 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__9895__auto__ = (function (){var switch__9844__auto__ = (function (state_13603){var state_val_13604 = (state_13603[1]);if((state_val_13604 === 1))
{var inst_13574 = cljs.core.vec.call(null,chs);var inst_13575 = inst_13574;var state_13603__$1 = (function (){var statearr_13605 = state_13603;(statearr_13605[5] = inst_13575);
return statearr_13605;
})();var statearr_13606_13624 = state_13603__$1;(statearr_13606_13624[2] = null);
(statearr_13606_13624[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13604 === 2))
{var inst_13575 = (state_13603[5]);var inst_13577 = cljs.core.count.call(null,inst_13575);var inst_13578 = (inst_13577 > 0);var state_13603__$1 = state_13603;if(cljs.core.truth_(inst_13578))
{var statearr_13607_13625 = state_13603__$1;(statearr_13607_13625[1] = 4);
} else
{var statearr_13608_13626 = state_13603__$1;(statearr_13608_13626[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13604 === 3))
{var inst_13601 = (state_13603[2]);var state_13603__$1 = state_13603;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13603__$1,inst_13601);
} else
{if((state_val_13604 === 4))
{var inst_13575 = (state_13603[5]);var state_13603__$1 = state_13603;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13603__$1,7,inst_13575);
} else
{if((state_val_13604 === 5))
{var inst_13597 = cljs.core.async.close_BANG_.call(null,out);var state_13603__$1 = state_13603;var statearr_13609_13627 = state_13603__$1;(statearr_13609_13627[2] = inst_13597);
(statearr_13609_13627[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13604 === 6))
{var inst_13599 = (state_13603[2]);var state_13603__$1 = state_13603;var statearr_13610_13628 = state_13603__$1;(statearr_13610_13628[2] = inst_13599);
(statearr_13610_13628[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13604 === 7))
{var inst_13582 = (state_13603[6]);var inst_13583 = (state_13603[7]);var inst_13582__$1 = (state_13603[2]);var inst_13583__$1 = cljs.core.nth.call(null,inst_13582__$1,0,null);var inst_13584 = cljs.core.nth.call(null,inst_13582__$1,1,null);var inst_13585 = (inst_13583__$1 == null);var state_13603__$1 = (function (){var statearr_13611 = state_13603;(statearr_13611[8] = inst_13584);
(statearr_13611[6] = inst_13582__$1);
(statearr_13611[7] = inst_13583__$1);
return statearr_13611;
})();if(cljs.core.truth_(inst_13585))
{var statearr_13612_13629 = state_13603__$1;(statearr_13612_13629[1] = 8);
} else
{var statearr_13613_13630 = state_13603__$1;(statearr_13613_13630[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13604 === 8))
{var inst_13584 = (state_13603[8]);var inst_13582 = (state_13603[6]);var inst_13583 = (state_13603[7]);var inst_13575 = (state_13603[5]);var inst_13587 = (function (){var c = inst_13584;var v = inst_13583;var vec__13580 = inst_13582;var cs = inst_13575;return ((function (c,v,vec__13580,cs,inst_13584,inst_13582,inst_13583,inst_13575,state_val_13604){
return (function (p1__13524_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13524_SHARP_);
});
;})(c,v,vec__13580,cs,inst_13584,inst_13582,inst_13583,inst_13575,state_val_13604))
})();var inst_13588 = cljs.core.filterv.call(null,inst_13587,inst_13575);var inst_13575__$1 = inst_13588;var state_13603__$1 = (function (){var statearr_13614 = state_13603;(statearr_13614[5] = inst_13575__$1);
return statearr_13614;
})();var statearr_13615_13631 = state_13603__$1;(statearr_13615_13631[2] = null);
(statearr_13615_13631[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13604 === 9))
{var inst_13583 = (state_13603[7]);var state_13603__$1 = state_13603;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13603__$1,11,out,inst_13583);
} else
{if((state_val_13604 === 10))
{var inst_13595 = (state_13603[2]);var state_13603__$1 = state_13603;var statearr_13617_13632 = state_13603__$1;(statearr_13617_13632[2] = inst_13595);
(statearr_13617_13632[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13604 === 11))
{var inst_13575 = (state_13603[5]);var inst_13592 = (state_13603[2]);var tmp13616 = inst_13575;var inst_13575__$1 = tmp13616;var state_13603__$1 = (function (){var statearr_13618 = state_13603;(statearr_13618[9] = inst_13592);
(statearr_13618[5] = inst_13575__$1);
return statearr_13618;
})();var statearr_13619_13633 = state_13603__$1;(statearr_13619_13633[2] = null);
(statearr_13619_13633[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__9844__auto__){
return (function() {
var state_machine__9845__auto__ = null;
var state_machine__9845__auto____0 = (function (){var statearr_13621 = (new Array(10));(statearr_13621[0] = state_machine__9845__auto__);
(statearr_13621[1] = 1);
return statearr_13621;
});
var state_machine__9845__auto____1 = (function (state_13603){while(true){
var result__9846__auto__ = switch__9844__auto__.call(null,state_13603);if(cljs.core.keyword_identical_QMARK_.call(null,result__9846__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9846__auto__;
}
break;
}
});
state_machine__9845__auto__ = function(state_13603){
switch(arguments.length){
case 0:
return state_machine__9845__auto____0.call(this);
case 1:
return state_machine__9845__auto____1.call(this,state_13603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9845__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9845__auto____0;
state_machine__9845__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9845__auto____1;
return state_machine__9845__auto__;
})()
;})(switch__9844__auto__))
})();var state__9896__auto__ = (function (){var statearr_13622 = f__9895__auto__.call(null);(statearr_13622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9894__auto___13623);
return statearr_13622;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9896__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
