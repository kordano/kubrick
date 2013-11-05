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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11402 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11402');

/**
* @constructor
*/
cljs.core.async.t11402 = (function (f,fn_handler,meta11403){
this.f = f;
this.fn_handler = fn_handler;
this.meta11403 = meta11403;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11402.cljs$lang$type = true;
cljs.core.async.t11402.cljs$lang$ctorStr = "cljs.core.async/t11402";
cljs.core.async.t11402.cljs$lang$ctorPrWriter = (function (this__6747__auto__,writer__6748__auto__,opt__6749__auto__){return cljs.core._write.call(null,writer__6748__auto__,"cljs.core.async/t11402");
});
cljs.core.async.t11402.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11402.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return true;
});
cljs.core.async.t11402.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
return self__.f;
});
cljs.core.async.t11402.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11404){var self__ = this;
return self__.meta11403;
});
cljs.core.async.t11402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11404,meta11403__$1){var self__ = this;
return (new cljs.core.async.t11402(self__.f,self__.fn_handler,meta11403__$1));
});
cljs.core.async.__GT_t11402 = (function __GT_t11402(f__$1,fn_handler__$1,meta11403){return (new cljs.core.async.t11402(f__$1,fn_handler__$1,meta11403));
});
}
return (new cljs.core.async.t11402(f,fn_handler,null));
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
{var val_11405 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11405);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_11405);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__7146__auto___11406 = n;var x_11407 = 0;while(true){
if((x_11407 < n__7146__auto___11406))
{(a[x_11407] = 0);
{
var G__11408 = (x_11407 + 1);
x_11407 = G__11408;
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
var G__11409 = (i + 1);
i = G__11409;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11413 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11413');

/**
* @constructor
*/
cljs.core.async.t11413 = (function (flag,alt_flag,meta11414){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11414 = meta11414;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11413.cljs$lang$type = true;
cljs.core.async.t11413.cljs$lang$ctorStr = "cljs.core.async/t11413";
cljs.core.async.t11413.cljs$lang$ctorPrWriter = (function (this__6747__auto__,writer__6748__auto__,opt__6749__auto__){return cljs.core._write.call(null,writer__6748__auto__,"cljs.core.async/t11413");
});
cljs.core.async.t11413.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11413.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t11413.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t11413.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11415){var self__ = this;
return self__.meta11414;
});
cljs.core.async.t11413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11415,meta11414__$1){var self__ = this;
return (new cljs.core.async.t11413(self__.flag,self__.alt_flag,meta11414__$1));
});
cljs.core.async.__GT_t11413 = (function __GT_t11413(flag__$1,alt_flag__$1,meta11414){return (new cljs.core.async.t11413(flag__$1,alt_flag__$1,meta11414));
});
}
return (new cljs.core.async.t11413(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11419 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11419');

/**
* @constructor
*/
cljs.core.async.t11419 = (function (cb,flag,alt_handler,meta11420){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11420 = meta11420;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11419.cljs$lang$type = true;
cljs.core.async.t11419.cljs$lang$ctorStr = "cljs.core.async/t11419";
cljs.core.async.t11419.cljs$lang$ctorPrWriter = (function (this__6747__auto__,writer__6748__auto__,opt__6749__auto__){return cljs.core._write.call(null,writer__6748__auto__,"cljs.core.async/t11419");
});
cljs.core.async.t11419.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11419.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11419.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11421){var self__ = this;
return self__.meta11420;
});
cljs.core.async.t11419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11421,meta11420__$1){var self__ = this;
return (new cljs.core.async.t11419(self__.cb,self__.flag,self__.alt_handler,meta11420__$1));
});
cljs.core.async.__GT_t11419 = (function __GT_t11419(cb__$1,flag__$1,alt_handler__$1,meta11420){return (new cljs.core.async.t11419(cb__$1,flag__$1,alt_handler__$1,meta11420));
});
}
return (new cljs.core.async.t11419(cb,flag,alt_handler,null));
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
return (function (p1__11422_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__11422_SHARP_,port], true));
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
var G__11423 = (i + 1);
i = G__11423;
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
var alts_BANG___delegate = function (ports,p__11424){var map__11426 = p__11424;var map__11426__$1 = ((cljs.core.seq_QMARK_.call(null,map__11426))?cljs.core.apply.call(null,cljs.core.hash_map,map__11426):map__11426);var opts = map__11426__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11424 = null;if (arguments.length > 1) {
  p__11424 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11424);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11427){
var ports = cljs.core.first(arglist__11427);
var p__11424 = cljs.core.rest(arglist__11427);
return alts_BANG___delegate(ports,p__11424);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11435 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11435');

/**
* @constructor
*/
cljs.core.async.t11435 = (function (ch,f,map_LT_,meta11436){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11436 = meta11436;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11435.cljs$lang$type = true;
cljs.core.async.t11435.cljs$lang$ctorStr = "cljs.core.async/t11435";
cljs.core.async.t11435.cljs$lang$ctorPrWriter = (function (this__6747__auto__,writer__6748__auto__,opt__6749__auto__){return cljs.core._write.call(null,writer__6748__auto__,"cljs.core.async/t11435");
});
cljs.core.async.t11435.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11435.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11435.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11435.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11438 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11438');

/**
* @constructor
*/
cljs.core.async.t11438 = (function (fn1,_,meta11436,ch,f,map_LT_,meta11439){
this.fn1 = fn1;
this._ = _;
this.meta11436 = meta11436;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11439 = meta11439;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11438.cljs$lang$type = true;
cljs.core.async.t11438.cljs$lang$ctorStr = "cljs.core.async/t11438";
cljs.core.async.t11438.cljs$lang$ctorPrWriter = (function (this__6747__auto__,writer__6748__auto__,opt__6749__auto__){return cljs.core._write.call(null,writer__6748__auto__,"cljs.core.async/t11438");
});
cljs.core.async.t11438.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11438.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$2){var self__ = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t11438.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$2){var self__ = this;
return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t11438.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$2){var self__ = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1){
return (function (p1__11428_SHARP_){return f1.call(null,(((p1__11428_SHARP_ == null))?null:self__.f.call(null,p1__11428_SHARP_)));
});
;})(f1))
});
cljs.core.async.t11438.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11440){var self__ = this;
return self__.meta11439;
});
cljs.core.async.t11438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11440,meta11439__$1){var self__ = this;
return (new cljs.core.async.t11438(self__.fn1,self__._,self__.meta11436,self__.ch,self__.f,self__.map_LT_,meta11439__$1));
});
cljs.core.async.__GT_t11438 = (function __GT_t11438(fn1__$1,___$1,meta11436__$1,ch__$2,f__$2,map_LT___$2,meta11439){return (new cljs.core.async.t11438(fn1__$1,___$1,meta11436__$1,ch__$2,f__$2,map_LT___$2,meta11439));
});
}
return (new cljs.core.async.t11438(fn1,_,self__.meta11436,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t11435.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11435.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11437){var self__ = this;
return self__.meta11436;
});
cljs.core.async.t11435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11437,meta11436__$1){var self__ = this;
return (new cljs.core.async.t11435(self__.ch,self__.f,self__.map_LT_,meta11436__$1));
});
cljs.core.async.__GT_t11435 = (function __GT_t11435(ch__$1,f__$1,map_LT___$1,meta11436){return (new cljs.core.async.t11435(ch__$1,f__$1,map_LT___$1,meta11436));
});
}
return (new cljs.core.async.t11435(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11444 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11444');

/**
* @constructor
*/
cljs.core.async.t11444 = (function (ch,f,map_GT_,meta11445){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11445 = meta11445;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11444.cljs$lang$type = true;
cljs.core.async.t11444.cljs$lang$ctorStr = "cljs.core.async/t11444";
cljs.core.async.t11444.cljs$lang$ctorPrWriter = (function (this__6747__auto__,writer__6748__auto__,opt__6749__auto__){return cljs.core._write.call(null,writer__6748__auto__,"cljs.core.async/t11444");
});
cljs.core.async.t11444.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11444.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11444.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11444.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11444.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11444.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11444.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11446){var self__ = this;
return self__.meta11445;
});
cljs.core.async.t11444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11446,meta11445__$1){var self__ = this;
return (new cljs.core.async.t11444(self__.ch,self__.f,self__.map_GT_,meta11445__$1));
});
cljs.core.async.__GT_t11444 = (function __GT_t11444(ch__$1,f__$1,map_GT___$1,meta11445){return (new cljs.core.async.t11444(ch__$1,f__$1,map_GT___$1,meta11445));
});
}
return (new cljs.core.async.t11444(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11450 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11450');

/**
* @constructor
*/
cljs.core.async.t11450 = (function (ch,p,filter_GT_,meta11451){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11451 = meta11451;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11450.cljs$lang$type = true;
cljs.core.async.t11450.cljs$lang$ctorStr = "cljs.core.async/t11450";
cljs.core.async.t11450.cljs$lang$ctorPrWriter = (function (this__6747__auto__,writer__6748__auto__,opt__6749__auto__){return cljs.core._write.call(null,writer__6748__auto__,"cljs.core.async/t11450");
});
cljs.core.async.t11450.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11450.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11450.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11450.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11450.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11450.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11450.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11452){var self__ = this;
return self__.meta11451;
});
cljs.core.async.t11450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11452,meta11451__$1){var self__ = this;
return (new cljs.core.async.t11450(self__.ch,self__.p,self__.filter_GT_,meta11451__$1));
});
cljs.core.async.__GT_t11450 = (function __GT_t11450(ch__$1,p__$1,filter_GT___$1,meta11451){return (new cljs.core.async.t11450(ch__$1,p__$1,filter_GT___$1,meta11451));
});
}
return (new cljs.core.async.t11450(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8257__auto___11527 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8258__auto__ = (function (){var switch__8195__auto__ = (function (state_11510){var state_val_11511 = (state_11510[1]);if((state_val_11511 === 1))
{var state_11510__$1 = state_11510;var statearr_11512_11528 = state_11510__$1;(statearr_11512_11528[2] = null);
(statearr_11512_11528[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11511 === 2))
{var state_11510__$1 = state_11510;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11510__$1,4,ch);
} else
{if((state_val_11511 === 3))
{var inst_11508 = (state_11510[2]);var state_11510__$1 = state_11510;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11510__$1,inst_11508);
} else
{if((state_val_11511 === 4))
{var inst_11492 = (state_11510[5]);var inst_11492__$1 = (state_11510[2]);var inst_11493 = (inst_11492__$1 == null);var state_11510__$1 = (function (){var statearr_11513 = state_11510;(statearr_11513[5] = inst_11492__$1);
return statearr_11513;
})();if(cljs.core.truth_(inst_11493))
{var statearr_11514_11529 = state_11510__$1;(statearr_11514_11529[1] = 5);
} else
{var statearr_11515_11530 = state_11510__$1;(statearr_11515_11530[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11511 === 5))
{var inst_11495 = cljs.core.async.close_BANG_.call(null,out);var state_11510__$1 = state_11510;var statearr_11516_11531 = state_11510__$1;(statearr_11516_11531[2] = inst_11495);
(statearr_11516_11531[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11511 === 6))
{var inst_11492 = (state_11510[5]);var inst_11497 = p.call(null,inst_11492);var state_11510__$1 = state_11510;if(cljs.core.truth_(inst_11497))
{var statearr_11517_11532 = state_11510__$1;(statearr_11517_11532[1] = 8);
} else
{var statearr_11518_11533 = state_11510__$1;(statearr_11518_11533[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11511 === 7))
{var inst_11506 = (state_11510[2]);var state_11510__$1 = state_11510;var statearr_11519_11534 = state_11510__$1;(statearr_11519_11534[2] = inst_11506);
(statearr_11519_11534[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11511 === 8))
{var inst_11492 = (state_11510[5]);var state_11510__$1 = state_11510;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11510__$1,11,out,inst_11492);
} else
{if((state_val_11511 === 9))
{var state_11510__$1 = state_11510;var statearr_11520_11535 = state_11510__$1;(statearr_11520_11535[2] = null);
(statearr_11520_11535[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11511 === 10))
{var inst_11503 = (state_11510[2]);var state_11510__$1 = (function (){var statearr_11521 = state_11510;(statearr_11521[6] = inst_11503);
return statearr_11521;
})();var statearr_11522_11536 = state_11510__$1;(statearr_11522_11536[2] = null);
(statearr_11522_11536[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11511 === 11))
{var inst_11500 = (state_11510[2]);var state_11510__$1 = state_11510;var statearr_11523_11537 = state_11510__$1;(statearr_11523_11537[2] = inst_11500);
(statearr_11523_11537[1] = 10);
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
});return ((function (switch__8195__auto__){
return (function() {
var state_machine__8196__auto__ = null;
var state_machine__8196__auto____0 = (function (){var statearr_11525 = (new Array(7));(statearr_11525[0] = state_machine__8196__auto__);
(statearr_11525[1] = 1);
return statearr_11525;
});
var state_machine__8196__auto____1 = (function (state_11510){while(true){
var result__8197__auto__ = switch__8195__auto__.call(null,state_11510);if(cljs.core.keyword_identical_QMARK_.call(null,result__8197__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8197__auto__;
}
break;
}
});
state_machine__8196__auto__ = function(state_11510){
switch(arguments.length){
case 0:
return state_machine__8196__auto____0.call(this);
case 1:
return state_machine__8196__auto____1.call(this,state_11510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8196__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8196__auto____0;
state_machine__8196__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8196__auto____1;
return state_machine__8196__auto__;
})()
;})(switch__8195__auto__))
})();var state__8259__auto__ = (function (){var statearr_11526 = f__8258__auto__.call(null);(statearr_11526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8257__auto___11527);
return statearr_11526;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8259__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__8257__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8258__auto__ = (function (){var switch__8195__auto__ = (function (state_11685){var state_val_11686 = (state_11685[1]);if((state_val_11686 === 1))
{var state_11685__$1 = state_11685;var statearr_11687_11720 = state_11685__$1;(statearr_11687_11720[2] = null);
(statearr_11687_11720[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11686 === 2))
{var state_11685__$1 = state_11685;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11685__$1,4,in$);
} else
{if((state_val_11686 === 3))
{var inst_11683 = (state_11685[2]);var state_11685__$1 = state_11685;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11685__$1,inst_11683);
} else
{if((state_val_11686 === 4))
{var inst_11631 = (state_11685[5]);var inst_11631__$1 = (state_11685[2]);var inst_11632 = (inst_11631__$1 == null);var state_11685__$1 = (function (){var statearr_11688 = state_11685;(statearr_11688[5] = inst_11631__$1);
return statearr_11688;
})();if(cljs.core.truth_(inst_11632))
{var statearr_11689_11721 = state_11685__$1;(statearr_11689_11721[1] = 5);
} else
{var statearr_11690_11722 = state_11685__$1;(statearr_11690_11722[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11686 === 5))
{var inst_11634 = cljs.core.async.close_BANG_.call(null,out);var state_11685__$1 = state_11685;var statearr_11691_11723 = state_11685__$1;(statearr_11691_11723[2] = inst_11634);
(statearr_11691_11723[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11686 === 6))
{var inst_11631 = (state_11685[5]);var inst_11636 = f.call(null,inst_11631);var inst_11641 = cljs.core.seq.call(null,inst_11636);var inst_11642 = inst_11641;var inst_11643 = null;var inst_11644 = 0;var inst_11645 = 0;var state_11685__$1 = (function (){var statearr_11692 = state_11685;(statearr_11692[6] = inst_11643);
(statearr_11692[7] = inst_11644);
(statearr_11692[8] = inst_11645);
(statearr_11692[9] = inst_11642);
return statearr_11692;
})();var statearr_11693_11724 = state_11685__$1;(statearr_11693_11724[2] = null);
(statearr_11693_11724[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11686 === 7))
{var inst_11681 = (state_11685[2]);var state_11685__$1 = state_11685;var statearr_11694_11725 = state_11685__$1;(statearr_11694_11725[2] = inst_11681);
(statearr_11694_11725[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11686 === 8))
{var inst_11644 = (state_11685[7]);var inst_11645 = (state_11685[8]);var inst_11647 = (inst_11645 < inst_11644);var inst_11648 = inst_11647;var state_11685__$1 = state_11685;if(cljs.core.truth_(inst_11648))
{var statearr_11695_11726 = state_11685__$1;(statearr_11695_11726[1] = 10);
} else
{var statearr_11696_11727 = state_11685__$1;(statearr_11696_11727[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11686 === 9))
{var inst_11678 = (state_11685[2]);var state_11685__$1 = (function (){var statearr_11697 = state_11685;(statearr_11697[10] = inst_11678);
return statearr_11697;
})();var statearr_11698_11728 = state_11685__$1;(statearr_11698_11728[2] = null);
(statearr_11698_11728[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11686 === 10))
{var inst_11643 = (state_11685[6]);var inst_11645 = (state_11685[8]);var inst_11650 = cljs.core._nth.call(null,inst_11643,inst_11645);var state_11685__$1 = state_11685;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11685__$1,13,out,inst_11650);
} else
{if((state_val_11686 === 11))
{var inst_11656 = (state_11685[11]);var inst_11642 = (state_11685[9]);var inst_11656__$1 = cljs.core.seq.call(null,inst_11642);var state_11685__$1 = (function (){var statearr_11702 = state_11685;(statearr_11702[11] = inst_11656__$1);
return statearr_11702;
})();if(inst_11656__$1)
{var statearr_11703_11729 = state_11685__$1;(statearr_11703_11729[1] = 14);
} else
{var statearr_11704_11730 = state_11685__$1;(statearr_11704_11730[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11686 === 12))
{var inst_11676 = (state_11685[2]);var state_11685__$1 = state_11685;var statearr_11705_11731 = state_11685__$1;(statearr_11705_11731[2] = inst_11676);
(statearr_11705_11731[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11686 === 13))
{var inst_11643 = (state_11685[6]);var inst_11644 = (state_11685[7]);var inst_11645 = (state_11685[8]);var inst_11642 = (state_11685[9]);var inst_11652 = (state_11685[2]);var inst_11653 = (inst_11645 + 1);var tmp11699 = inst_11643;var tmp11700 = inst_11644;var tmp11701 = inst_11642;var inst_11642__$1 = tmp11701;var inst_11643__$1 = tmp11699;var inst_11644__$1 = tmp11700;var inst_11645__$1 = inst_11653;var state_11685__$1 = (function (){var statearr_11706 = state_11685;(statearr_11706[6] = inst_11643__$1);
(statearr_11706[7] = inst_11644__$1);
(statearr_11706[12] = inst_11652);
(statearr_11706[8] = inst_11645__$1);
(statearr_11706[9] = inst_11642__$1);
return statearr_11706;
})();var statearr_11707_11732 = state_11685__$1;(statearr_11707_11732[2] = null);
(statearr_11707_11732[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11686 === 14))
{var inst_11656 = (state_11685[11]);var inst_11658 = cljs.core.chunked_seq_QMARK_.call(null,inst_11656);var state_11685__$1 = state_11685;if(inst_11658)
{var statearr_11708_11733 = state_11685__$1;(statearr_11708_11733[1] = 17);
} else
{var statearr_11709_11734 = state_11685__$1;(statearr_11709_11734[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11686 === 15))
{var state_11685__$1 = state_11685;var statearr_11710_11735 = state_11685__$1;(statearr_11710_11735[2] = null);
(statearr_11710_11735[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11686 === 16))
{var inst_11674 = (state_11685[2]);var state_11685__$1 = state_11685;var statearr_11711_11736 = state_11685__$1;(statearr_11711_11736[2] = inst_11674);
(statearr_11711_11736[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11686 === 17))
{var inst_11656 = (state_11685[11]);var inst_11660 = cljs.core.chunk_first.call(null,inst_11656);var inst_11661 = cljs.core.chunk_rest.call(null,inst_11656);var inst_11662 = cljs.core.count.call(null,inst_11660);var inst_11642 = inst_11661;var inst_11643 = inst_11660;var inst_11644 = inst_11662;var inst_11645 = 0;var state_11685__$1 = (function (){var statearr_11712 = state_11685;(statearr_11712[6] = inst_11643);
(statearr_11712[7] = inst_11644);
(statearr_11712[8] = inst_11645);
(statearr_11712[9] = inst_11642);
return statearr_11712;
})();var statearr_11713_11737 = state_11685__$1;(statearr_11713_11737[2] = null);
(statearr_11713_11737[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11686 === 18))
{var inst_11656 = (state_11685[11]);var inst_11665 = cljs.core.first.call(null,inst_11656);var state_11685__$1 = state_11685;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11685__$1,20,out,inst_11665);
} else
{if((state_val_11686 === 19))
{var inst_11671 = (state_11685[2]);var state_11685__$1 = state_11685;var statearr_11714_11738 = state_11685__$1;(statearr_11714_11738[2] = inst_11671);
(statearr_11714_11738[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11686 === 20))
{var inst_11656 = (state_11685[11]);var inst_11667 = (state_11685[2]);var inst_11668 = cljs.core.next.call(null,inst_11656);var inst_11642 = inst_11668;var inst_11643 = null;var inst_11644 = 0;var inst_11645 = 0;var state_11685__$1 = (function (){var statearr_11715 = state_11685;(statearr_11715[6] = inst_11643);
(statearr_11715[7] = inst_11644);
(statearr_11715[8] = inst_11645);
(statearr_11715[9] = inst_11642);
(statearr_11715[13] = inst_11667);
return statearr_11715;
})();var statearr_11716_11739 = state_11685__$1;(statearr_11716_11739[2] = null);
(statearr_11716_11739[1] = 8);
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
});return ((function (switch__8195__auto__){
return (function() {
var state_machine__8196__auto__ = null;
var state_machine__8196__auto____0 = (function (){var statearr_11718 = (new Array(14));(statearr_11718[0] = state_machine__8196__auto__);
(statearr_11718[1] = 1);
return statearr_11718;
});
var state_machine__8196__auto____1 = (function (state_11685){while(true){
var result__8197__auto__ = switch__8195__auto__.call(null,state_11685);if(cljs.core.keyword_identical_QMARK_.call(null,result__8197__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8197__auto__;
}
break;
}
});
state_machine__8196__auto__ = function(state_11685){
switch(arguments.length){
case 0:
return state_machine__8196__auto____0.call(this);
case 1:
return state_machine__8196__auto____1.call(this,state_11685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8196__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8196__auto____0;
state_machine__8196__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8196__auto____1;
return state_machine__8196__auto__;
})()
;})(switch__8195__auto__))
})();var state__8259__auto__ = (function (){var statearr_11719 = f__8258__auto__.call(null);(statearr_11719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8257__auto__);
return statearr_11719;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8259__auto__);
}));
return c__8257__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__8257__auto___11812 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8258__auto__ = (function (){var switch__8195__auto__ = (function (state_11795){var state_val_11796 = (state_11795[1]);if((state_val_11796 === 1))
{var state_11795__$1 = state_11795;var statearr_11797_11813 = state_11795__$1;(statearr_11797_11813[2] = null);
(statearr_11797_11813[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11796 === 2))
{var state_11795__$1 = state_11795;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11795__$1,4,from);
} else
{if((state_val_11796 === 3))
{var inst_11793 = (state_11795[2]);var state_11795__$1 = state_11795;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11795__$1,inst_11793);
} else
{if((state_val_11796 === 4))
{var inst_11778 = (state_11795[5]);var inst_11778__$1 = (state_11795[2]);var inst_11779 = (inst_11778__$1 == null);var state_11795__$1 = (function (){var statearr_11798 = state_11795;(statearr_11798[5] = inst_11778__$1);
return statearr_11798;
})();if(cljs.core.truth_(inst_11779))
{var statearr_11799_11814 = state_11795__$1;(statearr_11799_11814[1] = 5);
} else
{var statearr_11800_11815 = state_11795__$1;(statearr_11800_11815[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11796 === 5))
{var state_11795__$1 = state_11795;if(cljs.core.truth_(close_QMARK_))
{var statearr_11801_11816 = state_11795__$1;(statearr_11801_11816[1] = 8);
} else
{var statearr_11802_11817 = state_11795__$1;(statearr_11802_11817[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11796 === 6))
{var inst_11778 = (state_11795[5]);var state_11795__$1 = state_11795;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11795__$1,11,to,inst_11778);
} else
{if((state_val_11796 === 7))
{var inst_11791 = (state_11795[2]);var state_11795__$1 = state_11795;var statearr_11803_11818 = state_11795__$1;(statearr_11803_11818[2] = inst_11791);
(statearr_11803_11818[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11796 === 8))
{var inst_11782 = cljs.core.async.close_BANG_.call(null,to);var state_11795__$1 = state_11795;var statearr_11804_11819 = state_11795__$1;(statearr_11804_11819[2] = inst_11782);
(statearr_11804_11819[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11796 === 9))
{var state_11795__$1 = state_11795;var statearr_11805_11820 = state_11795__$1;(statearr_11805_11820[2] = null);
(statearr_11805_11820[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11796 === 10))
{var inst_11785 = (state_11795[2]);var state_11795__$1 = state_11795;var statearr_11806_11821 = state_11795__$1;(statearr_11806_11821[2] = inst_11785);
(statearr_11806_11821[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11796 === 11))
{var inst_11788 = (state_11795[2]);var state_11795__$1 = (function (){var statearr_11807 = state_11795;(statearr_11807[6] = inst_11788);
return statearr_11807;
})();var statearr_11808_11822 = state_11795__$1;(statearr_11808_11822[2] = null);
(statearr_11808_11822[1] = 2);
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
});return ((function (switch__8195__auto__){
return (function() {
var state_machine__8196__auto__ = null;
var state_machine__8196__auto____0 = (function (){var statearr_11810 = (new Array(7));(statearr_11810[0] = state_machine__8196__auto__);
(statearr_11810[1] = 1);
return statearr_11810;
});
var state_machine__8196__auto____1 = (function (state_11795){while(true){
var result__8197__auto__ = switch__8195__auto__.call(null,state_11795);if(cljs.core.keyword_identical_QMARK_.call(null,result__8197__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8197__auto__;
}
break;
}
});
state_machine__8196__auto__ = function(state_11795){
switch(arguments.length){
case 0:
return state_machine__8196__auto____0.call(this);
case 1:
return state_machine__8196__auto____1.call(this,state_11795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8196__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8196__auto____0;
state_machine__8196__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8196__auto____1;
return state_machine__8196__auto__;
})()
;})(switch__8195__auto__))
})();var state__8259__auto__ = (function (){var statearr_11811 = f__8258__auto__.call(null);(statearr_11811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8257__auto___11812);
return statearr_11811;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8259__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__8257__auto___11901 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8258__auto__ = (function (){var switch__8195__auto__ = (function (state_11883){var state_val_11884 = (state_11883[1]);if((state_val_11884 === 1))
{var state_11883__$1 = state_11883;var statearr_11885_11902 = state_11883__$1;(statearr_11885_11902[2] = null);
(statearr_11885_11902[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11884 === 2))
{var state_11883__$1 = state_11883;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11883__$1,4,ch);
} else
{if((state_val_11884 === 3))
{var inst_11881 = (state_11883[2]);var state_11883__$1 = state_11883;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11883__$1,inst_11881);
} else
{if((state_val_11884 === 4))
{var inst_11864 = (state_11883[5]);var inst_11864__$1 = (state_11883[2]);var inst_11865 = (inst_11864__$1 == null);var state_11883__$1 = (function (){var statearr_11886 = state_11883;(statearr_11886[5] = inst_11864__$1);
return statearr_11886;
})();if(cljs.core.truth_(inst_11865))
{var statearr_11887_11903 = state_11883__$1;(statearr_11887_11903[1] = 5);
} else
{var statearr_11888_11904 = state_11883__$1;(statearr_11888_11904[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11884 === 5))
{var inst_11867 = cljs.core.async.close_BANG_.call(null,tc);var inst_11868 = cljs.core.async.close_BANG_.call(null,fc);var state_11883__$1 = (function (){var statearr_11889 = state_11883;(statearr_11889[6] = inst_11867);
return statearr_11889;
})();var statearr_11890_11905 = state_11883__$1;(statearr_11890_11905[2] = inst_11868);
(statearr_11890_11905[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11884 === 6))
{var inst_11864 = (state_11883[5]);var inst_11870 = p.call(null,inst_11864);var state_11883__$1 = state_11883;if(cljs.core.truth_(inst_11870))
{var statearr_11891_11906 = state_11883__$1;(statearr_11891_11906[1] = 9);
} else
{var statearr_11892_11907 = state_11883__$1;(statearr_11892_11907[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11884 === 7))
{var inst_11879 = (state_11883[2]);var state_11883__$1 = state_11883;var statearr_11893_11908 = state_11883__$1;(statearr_11893_11908[2] = inst_11879);
(statearr_11893_11908[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11884 === 8))
{var inst_11876 = (state_11883[2]);var state_11883__$1 = (function (){var statearr_11894 = state_11883;(statearr_11894[7] = inst_11876);
return statearr_11894;
})();var statearr_11895_11909 = state_11883__$1;(statearr_11895_11909[2] = null);
(statearr_11895_11909[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11884 === 9))
{var state_11883__$1 = state_11883;var statearr_11896_11910 = state_11883__$1;(statearr_11896_11910[2] = tc);
(statearr_11896_11910[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11884 === 10))
{var state_11883__$1 = state_11883;var statearr_11897_11911 = state_11883__$1;(statearr_11897_11911[2] = fc);
(statearr_11897_11911[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11884 === 11))
{var inst_11864 = (state_11883[5]);var inst_11874 = (state_11883[2]);var state_11883__$1 = state_11883;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11883__$1,8,inst_11874,inst_11864);
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
});return ((function (switch__8195__auto__){
return (function() {
var state_machine__8196__auto__ = null;
var state_machine__8196__auto____0 = (function (){var statearr_11899 = (new Array(8));(statearr_11899[0] = state_machine__8196__auto__);
(statearr_11899[1] = 1);
return statearr_11899;
});
var state_machine__8196__auto____1 = (function (state_11883){while(true){
var result__8197__auto__ = switch__8195__auto__.call(null,state_11883);if(cljs.core.keyword_identical_QMARK_.call(null,result__8197__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8197__auto__;
}
break;
}
});
state_machine__8196__auto__ = function(state_11883){
switch(arguments.length){
case 0:
return state_machine__8196__auto____0.call(this);
case 1:
return state_machine__8196__auto____1.call(this,state_11883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8196__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8196__auto____0;
state_machine__8196__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8196__auto____1;
return state_machine__8196__auto__;
})()
;})(switch__8195__auto__))
})();var state__8259__auto__ = (function (){var statearr_11900 = f__8258__auto__.call(null);(statearr_11900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8257__auto___11901);
return statearr_11900;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8259__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__8257__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8258__auto__ = (function (){var switch__8195__auto__ = (function (state_11954){var state_val_11955 = (state_11954[1]);if((state_val_11955 === 7))
{var inst_11950 = (state_11954[2]);var state_11954__$1 = state_11954;var statearr_11956_11968 = state_11954__$1;(statearr_11956_11968[2] = inst_11950);
(statearr_11956_11968[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11955 === 6))
{var inst_11940 = (state_11954[5]);var inst_11943 = (state_11954[6]);var inst_11947 = f.call(null,inst_11940,inst_11943);var inst_11940__$1 = inst_11947;var state_11954__$1 = (function (){var statearr_11957 = state_11954;(statearr_11957[5] = inst_11940__$1);
return statearr_11957;
})();var statearr_11958_11969 = state_11954__$1;(statearr_11958_11969[2] = null);
(statearr_11958_11969[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11955 === 5))
{var inst_11940 = (state_11954[5]);var state_11954__$1 = state_11954;var statearr_11959_11970 = state_11954__$1;(statearr_11959_11970[2] = inst_11940);
(statearr_11959_11970[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11955 === 4))
{var inst_11943 = (state_11954[6]);var inst_11943__$1 = (state_11954[2]);var inst_11944 = (inst_11943__$1 == null);var state_11954__$1 = (function (){var statearr_11960 = state_11954;(statearr_11960[6] = inst_11943__$1);
return statearr_11960;
})();if(cljs.core.truth_(inst_11944))
{var statearr_11961_11971 = state_11954__$1;(statearr_11961_11971[1] = 5);
} else
{var statearr_11962_11972 = state_11954__$1;(statearr_11962_11972[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11955 === 3))
{var inst_11952 = (state_11954[2]);var state_11954__$1 = state_11954;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11954__$1,inst_11952);
} else
{if((state_val_11955 === 2))
{var state_11954__$1 = state_11954;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11954__$1,4,ch);
} else
{if((state_val_11955 === 1))
{var inst_11940 = init;var state_11954__$1 = (function (){var statearr_11963 = state_11954;(statearr_11963[5] = inst_11940);
return statearr_11963;
})();var statearr_11964_11973 = state_11954__$1;(statearr_11964_11973[2] = null);
(statearr_11964_11973[1] = 2);
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
});return ((function (switch__8195__auto__){
return (function() {
var state_machine__8196__auto__ = null;
var state_machine__8196__auto____0 = (function (){var statearr_11966 = (new Array(7));(statearr_11966[0] = state_machine__8196__auto__);
(statearr_11966[1] = 1);
return statearr_11966;
});
var state_machine__8196__auto____1 = (function (state_11954){while(true){
var result__8197__auto__ = switch__8195__auto__.call(null,state_11954);if(cljs.core.keyword_identical_QMARK_.call(null,result__8197__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8197__auto__;
}
break;
}
});
state_machine__8196__auto__ = function(state_11954){
switch(arguments.length){
case 0:
return state_machine__8196__auto____0.call(this);
case 1:
return state_machine__8196__auto____1.call(this,state_11954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8196__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8196__auto____0;
state_machine__8196__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8196__auto____1;
return state_machine__8196__auto__;
})()
;})(switch__8195__auto__))
})();var state__8259__auto__ = (function (){var statearr_11967 = f__8258__auto__.call(null);(statearr_11967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8257__auto__);
return statearr_11967;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8259__auto__);
}));
return c__8257__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__8257__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8258__auto__ = (function (){var switch__8195__auto__ = (function (state_12031){var state_val_12032 = (state_12031[1]);if((state_val_12032 === 1))
{var inst_12011 = cljs.core.seq.call(null,coll);var inst_12012 = inst_12011;var state_12031__$1 = (function (){var statearr_12033 = state_12031;(statearr_12033[5] = inst_12012);
return statearr_12033;
})();var statearr_12034_12048 = state_12031__$1;(statearr_12034_12048[2] = null);
(statearr_12034_12048[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12032 === 2))
{var inst_12012 = (state_12031[5]);var state_12031__$1 = state_12031;if(cljs.core.truth_(inst_12012))
{var statearr_12035_12049 = state_12031__$1;(statearr_12035_12049[1] = 4);
} else
{var statearr_12036_12050 = state_12031__$1;(statearr_12036_12050[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12032 === 3))
{var inst_12029 = (state_12031[2]);var state_12031__$1 = state_12031;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12031__$1,inst_12029);
} else
{if((state_val_12032 === 4))
{var inst_12012 = (state_12031[5]);var inst_12015 = cljs.core.first.call(null,inst_12012);var state_12031__$1 = state_12031;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12031__$1,7,ch,inst_12015);
} else
{if((state_val_12032 === 5))
{var state_12031__$1 = state_12031;if(cljs.core.truth_(close_QMARK_))
{var statearr_12037_12051 = state_12031__$1;(statearr_12037_12051[1] = 8);
} else
{var statearr_12038_12052 = state_12031__$1;(statearr_12038_12052[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12032 === 6))
{var inst_12027 = (state_12031[2]);var state_12031__$1 = state_12031;var statearr_12039_12053 = state_12031__$1;(statearr_12039_12053[2] = inst_12027);
(statearr_12039_12053[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12032 === 7))
{var inst_12012 = (state_12031[5]);var inst_12017 = (state_12031[2]);var inst_12018 = cljs.core.next.call(null,inst_12012);var inst_12012__$1 = inst_12018;var state_12031__$1 = (function (){var statearr_12040 = state_12031;(statearr_12040[6] = inst_12017);
(statearr_12040[5] = inst_12012__$1);
return statearr_12040;
})();var statearr_12041_12054 = state_12031__$1;(statearr_12041_12054[2] = null);
(statearr_12041_12054[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12032 === 8))
{var inst_12022 = cljs.core.async.close_BANG_.call(null,ch);var state_12031__$1 = state_12031;var statearr_12042_12055 = state_12031__$1;(statearr_12042_12055[2] = inst_12022);
(statearr_12042_12055[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12032 === 9))
{var state_12031__$1 = state_12031;var statearr_12043_12056 = state_12031__$1;(statearr_12043_12056[2] = null);
(statearr_12043_12056[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12032 === 10))
{var inst_12025 = (state_12031[2]);var state_12031__$1 = state_12031;var statearr_12044_12057 = state_12031__$1;(statearr_12044_12057[2] = inst_12025);
(statearr_12044_12057[1] = 6);
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
});return ((function (switch__8195__auto__){
return (function() {
var state_machine__8196__auto__ = null;
var state_machine__8196__auto____0 = (function (){var statearr_12046 = (new Array(7));(statearr_12046[0] = state_machine__8196__auto__);
(statearr_12046[1] = 1);
return statearr_12046;
});
var state_machine__8196__auto____1 = (function (state_12031){while(true){
var result__8197__auto__ = switch__8195__auto__.call(null,state_12031);if(cljs.core.keyword_identical_QMARK_.call(null,result__8197__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8197__auto__;
}
break;
}
});
state_machine__8196__auto__ = function(state_12031){
switch(arguments.length){
case 0:
return state_machine__8196__auto____0.call(this);
case 1:
return state_machine__8196__auto____1.call(this,state_12031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8196__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8196__auto____0;
state_machine__8196__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8196__auto____1;
return state_machine__8196__auto__;
})()
;})(switch__8195__auto__))
})();var state__8259__auto__ = (function (){var statearr_12047 = f__8258__auto__.call(null);(statearr_12047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8257__auto__);
return statearr_12047;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8259__auto__);
}));
return c__8257__auto__;
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
{var x__6814__auto__ = (((_ == null))?null:_);return (function (){var or__3943__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6814__auto__)]);if(or__3943__auto__)
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
{var x__6814__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6814__auto__)]);if(or__3943__auto__)
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
{var x__6814__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6814__auto__)]);if(or__3943__auto__)
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
{var x__6814__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6814__auto__)]);if(or__3943__auto__)
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12270 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12270');

/**
* @constructor
*/
cljs.core.async.t12270 = (function (cs,ch,mult,meta12271){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12271 = meta12271;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12270.cljs$lang$type = true;
cljs.core.async.t12270.cljs$lang$ctorStr = "cljs.core.async/t12270";
cljs.core.async.t12270.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6747__auto__,writer__6748__auto__,opt__6749__auto__){return cljs.core._write.call(null,writer__6748__auto__,"cljs.core.async/t12270");
});})(cs))
;
cljs.core.async.t12270.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12270.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12270.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12270.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12270.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12270.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
return self__.ch;
});})(cs))
;
cljs.core.async.t12270.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12272){var self__ = this;
return self__.meta12271;
});})(cs))
;
cljs.core.async.t12270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12272,meta12271__$1){var self__ = this;
return (new cljs.core.async.t12270(self__.cs,self__.ch,self__.mult,meta12271__$1));
});})(cs))
;
cljs.core.async.__GT_t12270 = ((function (cs){
return (function __GT_t12270(cs__$1,ch__$1,mult__$1,meta12271){return (new cljs.core.async.t12270(cs__$1,ch__$1,mult__$1,meta12271));
});})(cs))
;
}
return (new cljs.core.async.t12270(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__8257__auto___12482 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8258__auto__ = (function (){var switch__8195__auto__ = (function (state_12400){var state_val_12401 = (state_12400[1]);if((state_val_12401 === 32))
{try{var inst_12275 = (state_12400[5]);var inst_12351 = (state_12400[6]);var inst_12357 = cljs.core.async.put_BANG_.call(null,inst_12351,inst_12275,done);var state_12400__$1 = state_12400;var statearr_12404_12483 = state_12400__$1;(statearr_12404_12483[2] = inst_12357);
(statearr_12404_12483[1] = 30);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e12402){if((e12402 instanceof Object))
{var ex__8183__auto__ = e12402;var statearr_12403_12484 = state_12400;(statearr_12403_12484[1] = 31);
(statearr_12403_12484[2] = ex__8183__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12402;
} else
{return null;
}
}
}} else
{if((state_val_12401 === 1))
{var state_12400__$1 = state_12400;var statearr_12405_12485 = state_12400__$1;(statearr_12405_12485[2] = null);
(statearr_12405_12485[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 33))
{var inst_12363 = (state_12400[7]);var inst_12365 = cljs.core.chunked_seq_QMARK_.call(null,inst_12363);var state_12400__$1 = state_12400;if(inst_12365)
{var statearr_12406_12486 = state_12400__$1;(statearr_12406_12486[1] = 36);
} else
{var statearr_12407_12487 = state_12400__$1;(statearr_12407_12487[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 2))
{var state_12400__$1 = state_12400;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12400__$1,4,ch);
} else
{if((state_val_12401 === 34))
{var state_12400__$1 = state_12400;var statearr_12408_12488 = state_12400__$1;(statearr_12408_12488[2] = null);
(statearr_12408_12488[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 3))
{var inst_12398 = (state_12400[2]);var state_12400__$1 = state_12400;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12400__$1,inst_12398);
} else
{if((state_val_12401 === 35))
{var inst_12387 = (state_12400[2]);var state_12400__$1 = state_12400;var statearr_12409_12489 = state_12400__$1;(statearr_12409_12489[2] = inst_12387);
(statearr_12409_12489[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 4))
{var inst_12275 = (state_12400[5]);var inst_12275__$1 = (state_12400[2]);var inst_12276 = (inst_12275__$1 == null);var state_12400__$1 = (function (){var statearr_12410 = state_12400;(statearr_12410[5] = inst_12275__$1);
return statearr_12410;
})();if(cljs.core.truth_(inst_12276))
{var statearr_12411_12490 = state_12400__$1;(statearr_12411_12490[1] = 5);
} else
{var statearr_12412_12491 = state_12400__$1;(statearr_12412_12491[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 36))
{var inst_12363 = (state_12400[7]);var inst_12367 = cljs.core.chunk_first.call(null,inst_12363);var inst_12368 = cljs.core.chunk_rest.call(null,inst_12363);var inst_12369 = cljs.core.count.call(null,inst_12367);var inst_12343 = inst_12368;var inst_12344 = inst_12367;var inst_12345 = inst_12369;var inst_12346 = 0;var state_12400__$1 = (function (){var statearr_12413 = state_12400;(statearr_12413[8] = inst_12346);
(statearr_12413[9] = inst_12345);
(statearr_12413[10] = inst_12344);
(statearr_12413[11] = inst_12343);
return statearr_12413;
})();var statearr_12414_12492 = state_12400__$1;(statearr_12414_12492[2] = null);
(statearr_12414_12492[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 5))
{var inst_12282 = cljs.core.deref.call(null,cs);var inst_12283 = cljs.core.seq.call(null,inst_12282);var inst_12284 = inst_12283;var inst_12285 = null;var inst_12286 = 0;var inst_12287 = 0;var state_12400__$1 = (function (){var statearr_12415 = state_12400;(statearr_12415[12] = inst_12286);
(statearr_12415[13] = inst_12287);
(statearr_12415[14] = inst_12284);
(statearr_12415[15] = inst_12285);
return statearr_12415;
})();var statearr_12416_12493 = state_12400__$1;(statearr_12416_12493[2] = null);
(statearr_12416_12493[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 37))
{var inst_12363 = (state_12400[7]);var inst_12372 = cljs.core.first.call(null,inst_12363);var state_12400__$1 = (function (){var statearr_12417 = state_12400;(statearr_12417[16] = inst_12372);
return statearr_12417;
})();var statearr_12418_12494 = state_12400__$1;(statearr_12418_12494[2] = null);
(statearr_12418_12494[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 6))
{var inst_12334 = cljs.core.deref.call(null,cs);var inst_12335 = cljs.core.keys.call(null,inst_12334);var inst_12336 = cljs.core.count.call(null,inst_12335);var inst_12337 = cljs.core.reset_BANG_.call(null,dctr,inst_12336);var inst_12342 = cljs.core.seq.call(null,inst_12335);var inst_12343 = inst_12342;var inst_12344 = null;var inst_12345 = 0;var inst_12346 = 0;var state_12400__$1 = (function (){var statearr_12419 = state_12400;(statearr_12419[8] = inst_12346);
(statearr_12419[17] = inst_12337);
(statearr_12419[9] = inst_12345);
(statearr_12419[10] = inst_12344);
(statearr_12419[11] = inst_12343);
return statearr_12419;
})();var statearr_12420_12495 = state_12400__$1;(statearr_12420_12495[2] = null);
(statearr_12420_12495[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 38))
{var inst_12384 = (state_12400[2]);var state_12400__$1 = state_12400;var statearr_12421_12496 = state_12400__$1;(statearr_12421_12496[2] = inst_12384);
(statearr_12421_12496[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 7))
{var inst_12396 = (state_12400[2]);var state_12400__$1 = state_12400;var statearr_12422_12497 = state_12400__$1;(statearr_12422_12497[2] = inst_12396);
(statearr_12422_12497[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 39))
{var inst_12363 = (state_12400[7]);var inst_12380 = (state_12400[2]);var inst_12381 = cljs.core.next.call(null,inst_12363);var inst_12343 = inst_12381;var inst_12344 = null;var inst_12345 = 0;var inst_12346 = 0;var state_12400__$1 = (function (){var statearr_12423 = state_12400;(statearr_12423[18] = inst_12380);
(statearr_12423[8] = inst_12346);
(statearr_12423[9] = inst_12345);
(statearr_12423[10] = inst_12344);
(statearr_12423[11] = inst_12343);
return statearr_12423;
})();var statearr_12424_12498 = state_12400__$1;(statearr_12424_12498[2] = null);
(statearr_12424_12498[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 8))
{var inst_12286 = (state_12400[12]);var inst_12287 = (state_12400[13]);var inst_12289 = (inst_12287 < inst_12286);var inst_12290 = inst_12289;var state_12400__$1 = state_12400;if(cljs.core.truth_(inst_12290))
{var statearr_12425_12499 = state_12400__$1;(statearr_12425_12499[1] = 10);
} else
{var statearr_12426_12500 = state_12400__$1;(statearr_12426_12500[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 40))
{var inst_12372 = (state_12400[16]);var inst_12373 = (state_12400[2]);var inst_12374 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12375 = cljs.core.async.untap_STAR_.call(null,m,inst_12372);var state_12400__$1 = (function (){var statearr_12427 = state_12400;(statearr_12427[19] = inst_12374);
(statearr_12427[20] = inst_12373);
return statearr_12427;
})();var statearr_12428_12501 = state_12400__$1;(statearr_12428_12501[2] = inst_12375);
(statearr_12428_12501[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 9))
{var inst_12332 = (state_12400[2]);var state_12400__$1 = state_12400;var statearr_12429_12502 = state_12400__$1;(statearr_12429_12502[2] = inst_12332);
(statearr_12429_12502[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 41))
{try{var inst_12275 = (state_12400[5]);var inst_12372 = (state_12400[16]);var inst_12378 = cljs.core.async.put_BANG_.call(null,inst_12372,inst_12275,done);var state_12400__$1 = state_12400;var statearr_12432_12503 = state_12400__$1;(statearr_12432_12503[2] = inst_12378);
(statearr_12432_12503[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e12430){if((e12430 instanceof Object))
{var ex__8183__auto__ = e12430;var statearr_12431_12504 = state_12400;(statearr_12431_12504[1] = 40);
(statearr_12431_12504[2] = ex__8183__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12430;
} else
{return null;
}
}
}} else
{if((state_val_12401 === 10))
{var inst_12287 = (state_12400[13]);var inst_12285 = (state_12400[15]);var inst_12293 = cljs.core._nth.call(null,inst_12285,inst_12287);var inst_12294 = cljs.core.nth.call(null,inst_12293,0,null);var inst_12295 = cljs.core.nth.call(null,inst_12293,1,null);var state_12400__$1 = (function (){var statearr_12433 = state_12400;(statearr_12433[21] = inst_12294);
return statearr_12433;
})();if(cljs.core.truth_(inst_12295))
{var statearr_12434_12505 = state_12400__$1;(statearr_12434_12505[1] = 13);
} else
{var statearr_12435_12506 = state_12400__$1;(statearr_12435_12506[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 42))
{var inst_12393 = (state_12400[2]);var state_12400__$1 = (function (){var statearr_12436 = state_12400;(statearr_12436[22] = inst_12393);
return statearr_12436;
})();var statearr_12437_12507 = state_12400__$1;(statearr_12437_12507[2] = null);
(statearr_12437_12507[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 11))
{var inst_12304 = (state_12400[23]);var inst_12284 = (state_12400[14]);var inst_12304__$1 = cljs.core.seq.call(null,inst_12284);var state_12400__$1 = (function (){var statearr_12438 = state_12400;(statearr_12438[23] = inst_12304__$1);
return statearr_12438;
})();if(inst_12304__$1)
{var statearr_12439_12508 = state_12400__$1;(statearr_12439_12508[1] = 16);
} else
{var statearr_12440_12509 = state_12400__$1;(statearr_12440_12509[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 12))
{var inst_12330 = (state_12400[2]);var state_12400__$1 = state_12400;var statearr_12441_12510 = state_12400__$1;(statearr_12441_12510[2] = inst_12330);
(statearr_12441_12510[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 13))
{var inst_12294 = (state_12400[21]);var inst_12297 = cljs.core.async.close_BANG_.call(null,inst_12294);var state_12400__$1 = state_12400;var statearr_12445_12511 = state_12400__$1;(statearr_12445_12511[2] = inst_12297);
(statearr_12445_12511[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 14))
{var state_12400__$1 = state_12400;var statearr_12446_12512 = state_12400__$1;(statearr_12446_12512[2] = null);
(statearr_12446_12512[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 15))
{var inst_12286 = (state_12400[12]);var inst_12287 = (state_12400[13]);var inst_12284 = (state_12400[14]);var inst_12285 = (state_12400[15]);var inst_12300 = (state_12400[2]);var inst_12301 = (inst_12287 + 1);var tmp12442 = inst_12286;var tmp12443 = inst_12284;var tmp12444 = inst_12285;var inst_12284__$1 = tmp12443;var inst_12285__$1 = tmp12444;var inst_12286__$1 = tmp12442;var inst_12287__$1 = inst_12301;var state_12400__$1 = (function (){var statearr_12447 = state_12400;(statearr_12447[24] = inst_12300);
(statearr_12447[12] = inst_12286__$1);
(statearr_12447[13] = inst_12287__$1);
(statearr_12447[14] = inst_12284__$1);
(statearr_12447[15] = inst_12285__$1);
return statearr_12447;
})();var statearr_12448_12513 = state_12400__$1;(statearr_12448_12513[2] = null);
(statearr_12448_12513[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 16))
{var inst_12304 = (state_12400[23]);var inst_12306 = cljs.core.chunked_seq_QMARK_.call(null,inst_12304);var state_12400__$1 = state_12400;if(inst_12306)
{var statearr_12449_12514 = state_12400__$1;(statearr_12449_12514[1] = 19);
} else
{var statearr_12450_12515 = state_12400__$1;(statearr_12450_12515[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 17))
{var state_12400__$1 = state_12400;var statearr_12451_12516 = state_12400__$1;(statearr_12451_12516[2] = null);
(statearr_12451_12516[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 18))
{var inst_12328 = (state_12400[2]);var state_12400__$1 = state_12400;var statearr_12452_12517 = state_12400__$1;(statearr_12452_12517[2] = inst_12328);
(statearr_12452_12517[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 19))
{var inst_12304 = (state_12400[23]);var inst_12308 = cljs.core.chunk_first.call(null,inst_12304);var inst_12309 = cljs.core.chunk_rest.call(null,inst_12304);var inst_12310 = cljs.core.count.call(null,inst_12308);var inst_12284 = inst_12309;var inst_12285 = inst_12308;var inst_12286 = inst_12310;var inst_12287 = 0;var state_12400__$1 = (function (){var statearr_12453 = state_12400;(statearr_12453[12] = inst_12286);
(statearr_12453[13] = inst_12287);
(statearr_12453[14] = inst_12284);
(statearr_12453[15] = inst_12285);
return statearr_12453;
})();var statearr_12454_12518 = state_12400__$1;(statearr_12454_12518[2] = null);
(statearr_12454_12518[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 20))
{var inst_12304 = (state_12400[23]);var inst_12314 = cljs.core.first.call(null,inst_12304);var inst_12315 = cljs.core.nth.call(null,inst_12314,0,null);var inst_12316 = cljs.core.nth.call(null,inst_12314,1,null);var state_12400__$1 = (function (){var statearr_12455 = state_12400;(statearr_12455[25] = inst_12315);
return statearr_12455;
})();if(cljs.core.truth_(inst_12316))
{var statearr_12456_12519 = state_12400__$1;(statearr_12456_12519[1] = 22);
} else
{var statearr_12457_12520 = state_12400__$1;(statearr_12457_12520[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 21))
{var inst_12325 = (state_12400[2]);var state_12400__$1 = state_12400;var statearr_12458_12521 = state_12400__$1;(statearr_12458_12521[2] = inst_12325);
(statearr_12458_12521[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 22))
{var inst_12315 = (state_12400[25]);var inst_12318 = cljs.core.async.close_BANG_.call(null,inst_12315);var state_12400__$1 = state_12400;var statearr_12459_12522 = state_12400__$1;(statearr_12459_12522[2] = inst_12318);
(statearr_12459_12522[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 23))
{var state_12400__$1 = state_12400;var statearr_12460_12523 = state_12400__$1;(statearr_12460_12523[2] = null);
(statearr_12460_12523[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 24))
{var inst_12304 = (state_12400[23]);var inst_12321 = (state_12400[2]);var inst_12322 = cljs.core.next.call(null,inst_12304);var inst_12284 = inst_12322;var inst_12285 = null;var inst_12286 = 0;var inst_12287 = 0;var state_12400__$1 = (function (){var statearr_12461 = state_12400;(statearr_12461[12] = inst_12286);
(statearr_12461[13] = inst_12287);
(statearr_12461[14] = inst_12284);
(statearr_12461[15] = inst_12285);
(statearr_12461[26] = inst_12321);
return statearr_12461;
})();var statearr_12462_12524 = state_12400__$1;(statearr_12462_12524[2] = null);
(statearr_12462_12524[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 25))
{var inst_12346 = (state_12400[8]);var inst_12345 = (state_12400[9]);var inst_12348 = (inst_12346 < inst_12345);var inst_12349 = inst_12348;var state_12400__$1 = state_12400;if(cljs.core.truth_(inst_12349))
{var statearr_12463_12525 = state_12400__$1;(statearr_12463_12525[1] = 27);
} else
{var statearr_12464_12526 = state_12400__$1;(statearr_12464_12526[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 26))
{var inst_12391 = (state_12400[2]);var state_12400__$1 = (function (){var statearr_12465 = state_12400;(statearr_12465[27] = inst_12391);
return statearr_12465;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12400__$1,42,dchan);
} else
{if((state_val_12401 === 27))
{var inst_12346 = (state_12400[8]);var inst_12344 = (state_12400[10]);var inst_12351 = cljs.core._nth.call(null,inst_12344,inst_12346);var state_12400__$1 = (function (){var statearr_12466 = state_12400;(statearr_12466[6] = inst_12351);
return statearr_12466;
})();var statearr_12467_12527 = state_12400__$1;(statearr_12467_12527[2] = null);
(statearr_12467_12527[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 28))
{var inst_12343 = (state_12400[11]);var inst_12363 = (state_12400[7]);var inst_12363__$1 = cljs.core.seq.call(null,inst_12343);var state_12400__$1 = (function (){var statearr_12471 = state_12400;(statearr_12471[7] = inst_12363__$1);
return statearr_12471;
})();if(inst_12363__$1)
{var statearr_12472_12528 = state_12400__$1;(statearr_12472_12528[1] = 33);
} else
{var statearr_12473_12529 = state_12400__$1;(statearr_12473_12529[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 29))
{var inst_12389 = (state_12400[2]);var state_12400__$1 = state_12400;var statearr_12474_12530 = state_12400__$1;(statearr_12474_12530[2] = inst_12389);
(statearr_12474_12530[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 30))
{var inst_12346 = (state_12400[8]);var inst_12345 = (state_12400[9]);var inst_12344 = (state_12400[10]);var inst_12343 = (state_12400[11]);var inst_12359 = (state_12400[2]);var inst_12360 = (inst_12346 + 1);var tmp12468 = inst_12345;var tmp12469 = inst_12344;var tmp12470 = inst_12343;var inst_12343__$1 = tmp12470;var inst_12344__$1 = tmp12469;var inst_12345__$1 = tmp12468;var inst_12346__$1 = inst_12360;var state_12400__$1 = (function (){var statearr_12475 = state_12400;(statearr_12475[8] = inst_12346__$1);
(statearr_12475[9] = inst_12345__$1);
(statearr_12475[10] = inst_12344__$1);
(statearr_12475[11] = inst_12343__$1);
(statearr_12475[28] = inst_12359);
return statearr_12475;
})();var statearr_12476_12531 = state_12400__$1;(statearr_12476_12531[2] = null);
(statearr_12476_12531[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12401 === 31))
{var inst_12351 = (state_12400[6]);var inst_12352 = (state_12400[2]);var inst_12353 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12354 = cljs.core.async.untap_STAR_.call(null,m,inst_12351);var state_12400__$1 = (function (){var statearr_12477 = state_12400;(statearr_12477[29] = inst_12352);
(statearr_12477[30] = inst_12353);
return statearr_12477;
})();var statearr_12478_12532 = state_12400__$1;(statearr_12478_12532[2] = inst_12354);
(statearr_12478_12532[1] = 30);
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
});return ((function (switch__8195__auto__){
return (function() {
var state_machine__8196__auto__ = null;
var state_machine__8196__auto____0 = (function (){var statearr_12480 = (new Array(31));(statearr_12480[0] = state_machine__8196__auto__);
(statearr_12480[1] = 1);
return statearr_12480;
});
var state_machine__8196__auto____1 = (function (state_12400){while(true){
var result__8197__auto__ = switch__8195__auto__.call(null,state_12400);if(cljs.core.keyword_identical_QMARK_.call(null,result__8197__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8197__auto__;
}
break;
}
});
state_machine__8196__auto__ = function(state_12400){
switch(arguments.length){
case 0:
return state_machine__8196__auto____0.call(this);
case 1:
return state_machine__8196__auto____1.call(this,state_12400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8196__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8196__auto____0;
state_machine__8196__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8196__auto____1;
return state_machine__8196__auto__;
})()
;})(switch__8195__auto__))
})();var state__8259__auto__ = (function (){var statearr_12481 = f__8258__auto__.call(null);(statearr_12481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8257__auto___12482);
return statearr_12481;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8259__auto__);
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
{var x__6814__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6814__auto__)]);if(or__3943__auto__)
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
{var x__6814__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6814__auto__)]);if(or__3943__auto__)
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
{var x__6814__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6814__auto__)]);if(or__3943__auto__)
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
{var x__6814__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6814__auto__)]);if(or__3943__auto__)
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
{var x__6814__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6814__auto__)]);if(or__3943__auto__)
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
;var m = (function (){if(typeof cljs.core.async.t12653 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12653');

/**
* @constructor
*/
cljs.core.async.t12653 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta12654){
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
this.meta12654 = meta12654;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12653.cljs$lang$type = true;
cljs.core.async.t12653.cljs$lang$ctorStr = "cljs.core.async/t12653";
cljs.core.async.t12653.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6747__auto__,writer__6748__auto__,opt__6749__auto__){return cljs.core._write.call(null,writer__6748__auto__,"cljs.core.async/t12653");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12653.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12653.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12653.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12653.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12653.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12653.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12653.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12653.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12653.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12655){var self__ = this;
return self__.meta12654;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12655,meta12654__$1){var self__ = this;
return (new cljs.core.async.t12653(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta12654__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12653 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12653(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12654){return (new cljs.core.async.t12653(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12654));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12653(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__8257__auto___12773 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8258__auto__ = (function (){var switch__8195__auto__ = (function (state_12726){var state_val_12727 = (state_12726[1]);if((state_val_12727 === 1))
{var inst_12659 = (state_12726[5]);var inst_12659__$1 = calc_state.call(null);var inst_12660 = cljs.core.seq_QMARK_.call(null,inst_12659__$1);var state_12726__$1 = (function (){var statearr_12728 = state_12726;(statearr_12728[5] = inst_12659__$1);
return statearr_12728;
})();if(inst_12660)
{var statearr_12729_12774 = state_12726__$1;(statearr_12729_12774[1] = 2);
} else
{var statearr_12730_12775 = state_12726__$1;(statearr_12730_12775[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12727 === 2))
{var inst_12659 = (state_12726[5]);var inst_12662 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12659);var state_12726__$1 = state_12726;var statearr_12731_12776 = state_12726__$1;(statearr_12731_12776[2] = inst_12662);
(statearr_12731_12776[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12727 === 3))
{var inst_12659 = (state_12726[5]);var state_12726__$1 = state_12726;var statearr_12732_12777 = state_12726__$1;(statearr_12732_12777[2] = inst_12659);
(statearr_12732_12777[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12727 === 4))
{var inst_12659 = (state_12726[5]);var inst_12665 = (state_12726[2]);var inst_12666 = cljs.core.get.call(null,inst_12665,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12667 = cljs.core.get.call(null,inst_12665,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12668 = cljs.core.get.call(null,inst_12665,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12669 = inst_12659;var state_12726__$1 = (function (){var statearr_12733 = state_12726;(statearr_12733[6] = inst_12666);
(statearr_12733[7] = inst_12667);
(statearr_12733[8] = inst_12668);
(statearr_12733[9] = inst_12669);
return statearr_12733;
})();var statearr_12734_12778 = state_12726__$1;(statearr_12734_12778[2] = null);
(statearr_12734_12778[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12727 === 5))
{var inst_12669 = (state_12726[9]);var inst_12672 = cljs.core.seq_QMARK_.call(null,inst_12669);var state_12726__$1 = state_12726;if(inst_12672)
{var statearr_12735_12779 = state_12726__$1;(statearr_12735_12779[1] = 7);
} else
{var statearr_12736_12780 = state_12726__$1;(statearr_12736_12780[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12727 === 6))
{var inst_12724 = (state_12726[2]);var state_12726__$1 = state_12726;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12726__$1,inst_12724);
} else
{if((state_val_12727 === 7))
{var inst_12669 = (state_12726[9]);var inst_12674 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12669);var state_12726__$1 = state_12726;var statearr_12737_12781 = state_12726__$1;(statearr_12737_12781[2] = inst_12674);
(statearr_12737_12781[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12727 === 8))
{var inst_12669 = (state_12726[9]);var state_12726__$1 = state_12726;var statearr_12738_12782 = state_12726__$1;(statearr_12738_12782[2] = inst_12669);
(statearr_12738_12782[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12727 === 9))
{var inst_12677 = (state_12726[10]);var inst_12677__$1 = (state_12726[2]);var inst_12678 = cljs.core.get.call(null,inst_12677__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12679 = cljs.core.get.call(null,inst_12677__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12680 = cljs.core.get.call(null,inst_12677__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12726__$1 = (function (){var statearr_12739 = state_12726;(statearr_12739[11] = inst_12680);
(statearr_12739[10] = inst_12677__$1);
(statearr_12739[12] = inst_12679);
return statearr_12739;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12726__$1,10,inst_12678);
} else
{if((state_val_12727 === 10))
{var inst_12686 = (state_12726[13]);var inst_12684 = (state_12726[14]);var inst_12683 = (state_12726[2]);var inst_12684__$1 = cljs.core.nth.call(null,inst_12683,0,null);var inst_12685 = cljs.core.nth.call(null,inst_12683,1,null);var inst_12686__$1 = (inst_12684__$1 == null);var state_12726__$1 = (function (){var statearr_12740 = state_12726;(statearr_12740[13] = inst_12686__$1);
(statearr_12740[15] = inst_12685);
(statearr_12740[14] = inst_12684__$1);
return statearr_12740;
})();if(cljs.core.truth_(inst_12686__$1))
{var statearr_12741_12783 = state_12726__$1;(statearr_12741_12783[1] = 11);
} else
{var statearr_12742_12784 = state_12726__$1;(statearr_12742_12784[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12727 === 11))
{var inst_12686 = (state_12726[13]);var state_12726__$1 = state_12726;var statearr_12743_12785 = state_12726__$1;(statearr_12743_12785[2] = inst_12686);
(statearr_12743_12785[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12727 === 12))
{var inst_12685 = (state_12726[15]);var inst_12689 = cljs.core._EQ_.call(null,inst_12685,change);var state_12726__$1 = state_12726;var statearr_12744_12786 = state_12726__$1;(statearr_12744_12786[2] = inst_12689);
(statearr_12744_12786[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12727 === 13))
{var inst_12691 = (state_12726[2]);var state_12726__$1 = state_12726;if(cljs.core.truth_(inst_12691))
{var statearr_12745_12787 = state_12726__$1;(statearr_12745_12787[1] = 14);
} else
{var statearr_12746_12788 = state_12726__$1;(statearr_12746_12788[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12727 === 14))
{var inst_12684 = (state_12726[14]);var inst_12693 = (inst_12684 == null);var state_12726__$1 = state_12726;if(cljs.core.truth_(inst_12693))
{var statearr_12747_12789 = state_12726__$1;(statearr_12747_12789[1] = 17);
} else
{var statearr_12748_12790 = state_12726__$1;(statearr_12748_12790[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12727 === 15))
{var inst_12702 = (state_12726[16]);var inst_12680 = (state_12726[11]);var inst_12685 = (state_12726[15]);var inst_12702__$1 = inst_12680.call(null,inst_12685);var state_12726__$1 = (function (){var statearr_12749 = state_12726;(statearr_12749[16] = inst_12702__$1);
return statearr_12749;
})();if(cljs.core.truth_(inst_12702__$1))
{var statearr_12750_12791 = state_12726__$1;(statearr_12750_12791[1] = 20);
} else
{var statearr_12751_12792 = state_12726__$1;(statearr_12751_12792[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12727 === 16))
{var inst_12722 = (state_12726[2]);var state_12726__$1 = state_12726;var statearr_12752_12793 = state_12726__$1;(statearr_12752_12793[2] = inst_12722);
(statearr_12752_12793[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12727 === 17))
{var inst_12685 = (state_12726[15]);var inst_12695 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12685);var state_12726__$1 = state_12726;var statearr_12753_12794 = state_12726__$1;(statearr_12753_12794[2] = inst_12695);
(statearr_12753_12794[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12727 === 18))
{var state_12726__$1 = state_12726;var statearr_12754_12795 = state_12726__$1;(statearr_12754_12795[2] = null);
(statearr_12754_12795[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12727 === 19))
{var inst_12698 = (state_12726[2]);var inst_12699 = calc_state.call(null);var inst_12669 = inst_12699;var state_12726__$1 = (function (){var statearr_12755 = state_12726;(statearr_12755[9] = inst_12669);
(statearr_12755[17] = inst_12698);
return statearr_12755;
})();var statearr_12756_12796 = state_12726__$1;(statearr_12756_12796[2] = null);
(statearr_12756_12796[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12727 === 20))
{var inst_12702 = (state_12726[16]);var state_12726__$1 = state_12726;var statearr_12757_12797 = state_12726__$1;(statearr_12757_12797[2] = inst_12702);
(statearr_12757_12797[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12727 === 21))
{var inst_12680 = (state_12726[11]);var inst_12705 = (state_12726[18]);var inst_12705__$1 = cljs.core.empty_QMARK_.call(null,inst_12680);var state_12726__$1 = (function (){var statearr_12758 = state_12726;(statearr_12758[18] = inst_12705__$1);
return statearr_12758;
})();if(inst_12705__$1)
{var statearr_12759_12798 = state_12726__$1;(statearr_12759_12798[1] = 23);
} else
{var statearr_12760_12799 = state_12726__$1;(statearr_12760_12799[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12727 === 22))
{var inst_12713 = (state_12726[2]);var state_12726__$1 = state_12726;if(cljs.core.truth_(inst_12713))
{var statearr_12761_12800 = state_12726__$1;(statearr_12761_12800[1] = 26);
} else
{var statearr_12762_12801 = state_12726__$1;(statearr_12762_12801[1] = 27);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12727 === 23))
{var inst_12685 = (state_12726[15]);var inst_12679 = (state_12726[12]);var inst_12707 = inst_12679.call(null,inst_12685);var inst_12708 = cljs.core.not.call(null,inst_12707);var state_12726__$1 = state_12726;var statearr_12763_12802 = state_12726__$1;(statearr_12763_12802[2] = inst_12708);
(statearr_12763_12802[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12727 === 24))
{var inst_12705 = (state_12726[18]);var state_12726__$1 = state_12726;var statearr_12764_12803 = state_12726__$1;(statearr_12764_12803[2] = inst_12705);
(statearr_12764_12803[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12727 === 25))
{var inst_12711 = (state_12726[2]);var state_12726__$1 = state_12726;var statearr_12765_12804 = state_12726__$1;(statearr_12765_12804[2] = inst_12711);
(statearr_12765_12804[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12727 === 26))
{var inst_12684 = (state_12726[14]);var state_12726__$1 = state_12726;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12726__$1,29,out,inst_12684);
} else
{if((state_val_12727 === 27))
{var state_12726__$1 = state_12726;var statearr_12766_12805 = state_12726__$1;(statearr_12766_12805[2] = null);
(statearr_12766_12805[1] = 28);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12727 === 28))
{var inst_12677 = (state_12726[10]);var inst_12719 = (state_12726[2]);var inst_12669 = inst_12677;var state_12726__$1 = (function (){var statearr_12767 = state_12726;(statearr_12767[19] = inst_12719);
(statearr_12767[9] = inst_12669);
return statearr_12767;
})();var statearr_12768_12806 = state_12726__$1;(statearr_12768_12806[2] = null);
(statearr_12768_12806[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12727 === 29))
{var inst_12716 = (state_12726[2]);var state_12726__$1 = state_12726;var statearr_12769_12807 = state_12726__$1;(statearr_12769_12807[2] = inst_12716);
(statearr_12769_12807[1] = 28);
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
});return ((function (switch__8195__auto__){
return (function() {
var state_machine__8196__auto__ = null;
var state_machine__8196__auto____0 = (function (){var statearr_12771 = (new Array(20));(statearr_12771[0] = state_machine__8196__auto__);
(statearr_12771[1] = 1);
return statearr_12771;
});
var state_machine__8196__auto____1 = (function (state_12726){while(true){
var result__8197__auto__ = switch__8195__auto__.call(null,state_12726);if(cljs.core.keyword_identical_QMARK_.call(null,result__8197__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8197__auto__;
}
break;
}
});
state_machine__8196__auto__ = function(state_12726){
switch(arguments.length){
case 0:
return state_machine__8196__auto____0.call(this);
case 1:
return state_machine__8196__auto____1.call(this,state_12726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8196__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8196__auto____0;
state_machine__8196__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8196__auto____1;
return state_machine__8196__auto__;
})()
;})(switch__8195__auto__))
})();var state__8259__auto__ = (function (){var statearr_12772 = f__8258__auto__.call(null);(statearr_12772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8257__auto___12773);
return statearr_12772;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8259__auto__);
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
{var x__6814__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6814__auto__)]);if(or__3943__auto__)
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
{var x__6814__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6814__auto__)]);if(or__3943__auto__)
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
{var x__6814__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6814__auto__)]);if(or__3943__auto__)
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
{var x__6814__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6814__auto__)]);if(or__3943__auto__)
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
return (function (p1__12808_SHARP_){if(cljs.core.truth_(p1__12808_SHARP_.call(null,topic)))
{return p1__12808_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12808_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3943__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12932 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12932');

/**
* @constructor
*/
cljs.core.async.t12932 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12933){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12933 = meta12933;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12932.cljs$lang$type = true;
cljs.core.async.t12932.cljs$lang$ctorStr = "cljs.core.async/t12932";
cljs.core.async.t12932.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6747__auto__,writer__6748__auto__,opt__6749__auto__){return cljs.core._write.call(null,writer__6748__auto__,"cljs.core.async/t12932");
});})(mults,ensure_mult))
;
cljs.core.async.t12932.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12932.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12932.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12932.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12932.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12932.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12932.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12932.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12934){var self__ = this;
return self__.meta12933;
});})(mults,ensure_mult))
;
cljs.core.async.t12932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12934,meta12933__$1){var self__ = this;
return (new cljs.core.async.t12932(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12933__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12932 = ((function (mults,ensure_mult){
return (function __GT_t12932(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12933){return (new cljs.core.async.t12932(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12933));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12932(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__8257__auto___13055 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8258__auto__ = (function (){var switch__8195__auto__ = (function (state_13007){var state_val_13008 = (state_13007[1]);if((state_val_13008 === 1))
{var state_13007__$1 = state_13007;var statearr_13009_13056 = state_13007__$1;(statearr_13009_13056[2] = null);
(statearr_13009_13056[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13008 === 2))
{var state_13007__$1 = state_13007;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13007__$1,4,ch);
} else
{if((state_val_13008 === 3))
{var inst_13005 = (state_13007[2]);var state_13007__$1 = state_13007;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13007__$1,inst_13005);
} else
{if((state_val_13008 === 4))
{var inst_12937 = (state_13007[5]);var inst_12937__$1 = (state_13007[2]);var inst_12938 = (inst_12937__$1 == null);var state_13007__$1 = (function (){var statearr_13010 = state_13007;(statearr_13010[5] = inst_12937__$1);
return statearr_13010;
})();if(cljs.core.truth_(inst_12938))
{var statearr_13011_13057 = state_13007__$1;(statearr_13011_13057[1] = 5);
} else
{var statearr_13012_13058 = state_13007__$1;(statearr_13012_13058[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13008 === 5))
{var inst_12944 = cljs.core.deref.call(null,mults);var inst_12945 = cljs.core.vals.call(null,inst_12944);var inst_12946 = cljs.core.seq.call(null,inst_12945);var inst_12947 = inst_12946;var inst_12948 = null;var inst_12949 = 0;var inst_12950 = 0;var state_13007__$1 = (function (){var statearr_13013 = state_13007;(statearr_13013[6] = inst_12950);
(statearr_13013[7] = inst_12948);
(statearr_13013[8] = inst_12947);
(statearr_13013[9] = inst_12949);
return statearr_13013;
})();var statearr_13014_13059 = state_13007__$1;(statearr_13014_13059[2] = null);
(statearr_13014_13059[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13008 === 6))
{var inst_12985 = (state_13007[10]);var inst_12987 = (state_13007[11]);var inst_12937 = (state_13007[5]);var inst_12985__$1 = topic_fn.call(null,inst_12937);var inst_12986 = cljs.core.deref.call(null,mults);var inst_12987__$1 = cljs.core.get.call(null,inst_12986,inst_12985__$1);var state_13007__$1 = (function (){var statearr_13015 = state_13007;(statearr_13015[10] = inst_12985__$1);
(statearr_13015[11] = inst_12987__$1);
return statearr_13015;
})();if(cljs.core.truth_(inst_12987__$1))
{var statearr_13016_13060 = state_13007__$1;(statearr_13016_13060[1] = 19);
} else
{var statearr_13017_13061 = state_13007__$1;(statearr_13017_13061[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13008 === 7))
{var inst_13003 = (state_13007[2]);var state_13007__$1 = state_13007;var statearr_13018_13062 = state_13007__$1;(statearr_13018_13062[2] = inst_13003);
(statearr_13018_13062[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13008 === 8))
{var inst_12950 = (state_13007[6]);var inst_12949 = (state_13007[9]);var inst_12952 = (inst_12950 < inst_12949);var inst_12953 = inst_12952;var state_13007__$1 = state_13007;if(cljs.core.truth_(inst_12953))
{var statearr_13022_13063 = state_13007__$1;(statearr_13022_13063[1] = 10);
} else
{var statearr_13023_13064 = state_13007__$1;(statearr_13023_13064[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13008 === 9))
{var inst_12983 = (state_13007[2]);var state_13007__$1 = state_13007;var statearr_13024_13065 = state_13007__$1;(statearr_13024_13065[2] = inst_12983);
(statearr_13024_13065[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13008 === 10))
{var inst_12950 = (state_13007[6]);var inst_12948 = (state_13007[7]);var inst_12947 = (state_13007[8]);var inst_12949 = (state_13007[9]);var inst_12955 = cljs.core._nth.call(null,inst_12948,inst_12950);var inst_12956 = cljs.core.async.muxch_STAR_.call(null,inst_12955);var inst_12957 = cljs.core.async.close_BANG_.call(null,inst_12956);var inst_12958 = (inst_12950 + 1);var tmp13019 = inst_12948;var tmp13020 = inst_12947;var tmp13021 = inst_12949;var inst_12947__$1 = tmp13020;var inst_12948__$1 = tmp13019;var inst_12949__$1 = tmp13021;var inst_12950__$1 = inst_12958;var state_13007__$1 = (function (){var statearr_13025 = state_13007;(statearr_13025[12] = inst_12957);
(statearr_13025[6] = inst_12950__$1);
(statearr_13025[7] = inst_12948__$1);
(statearr_13025[8] = inst_12947__$1);
(statearr_13025[9] = inst_12949__$1);
return statearr_13025;
})();var statearr_13026_13066 = state_13007__$1;(statearr_13026_13066[2] = null);
(statearr_13026_13066[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13008 === 11))
{var inst_12947 = (state_13007[8]);var inst_12961 = (state_13007[13]);var inst_12961__$1 = cljs.core.seq.call(null,inst_12947);var state_13007__$1 = (function (){var statearr_13027 = state_13007;(statearr_13027[13] = inst_12961__$1);
return statearr_13027;
})();if(inst_12961__$1)
{var statearr_13028_13067 = state_13007__$1;(statearr_13028_13067[1] = 13);
} else
{var statearr_13029_13068 = state_13007__$1;(statearr_13029_13068[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13008 === 12))
{var inst_12981 = (state_13007[2]);var state_13007__$1 = state_13007;var statearr_13030_13069 = state_13007__$1;(statearr_13030_13069[2] = inst_12981);
(statearr_13030_13069[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13008 === 13))
{var inst_12961 = (state_13007[13]);var inst_12963 = cljs.core.chunked_seq_QMARK_.call(null,inst_12961);var state_13007__$1 = state_13007;if(inst_12963)
{var statearr_13031_13070 = state_13007__$1;(statearr_13031_13070[1] = 16);
} else
{var statearr_13032_13071 = state_13007__$1;(statearr_13032_13071[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13008 === 14))
{var state_13007__$1 = state_13007;var statearr_13033_13072 = state_13007__$1;(statearr_13033_13072[2] = null);
(statearr_13033_13072[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13008 === 15))
{var inst_12979 = (state_13007[2]);var state_13007__$1 = state_13007;var statearr_13034_13073 = state_13007__$1;(statearr_13034_13073[2] = inst_12979);
(statearr_13034_13073[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13008 === 16))
{var inst_12961 = (state_13007[13]);var inst_12965 = cljs.core.chunk_first.call(null,inst_12961);var inst_12966 = cljs.core.chunk_rest.call(null,inst_12961);var inst_12967 = cljs.core.count.call(null,inst_12965);var inst_12947 = inst_12966;var inst_12948 = inst_12965;var inst_12949 = inst_12967;var inst_12950 = 0;var state_13007__$1 = (function (){var statearr_13035 = state_13007;(statearr_13035[6] = inst_12950);
(statearr_13035[7] = inst_12948);
(statearr_13035[8] = inst_12947);
(statearr_13035[9] = inst_12949);
return statearr_13035;
})();var statearr_13036_13074 = state_13007__$1;(statearr_13036_13074[2] = null);
(statearr_13036_13074[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13008 === 17))
{var inst_12961 = (state_13007[13]);var inst_12970 = cljs.core.first.call(null,inst_12961);var inst_12971 = cljs.core.async.muxch_STAR_.call(null,inst_12970);var inst_12972 = cljs.core.async.close_BANG_.call(null,inst_12971);var inst_12973 = cljs.core.next.call(null,inst_12961);var inst_12947 = inst_12973;var inst_12948 = null;var inst_12949 = 0;var inst_12950 = 0;var state_13007__$1 = (function (){var statearr_13037 = state_13007;(statearr_13037[6] = inst_12950);
(statearr_13037[14] = inst_12972);
(statearr_13037[7] = inst_12948);
(statearr_13037[8] = inst_12947);
(statearr_13037[9] = inst_12949);
return statearr_13037;
})();var statearr_13038_13075 = state_13007__$1;(statearr_13038_13075[2] = null);
(statearr_13038_13075[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13008 === 18))
{var inst_12976 = (state_13007[2]);var state_13007__$1 = state_13007;var statearr_13039_13076 = state_13007__$1;(statearr_13039_13076[2] = inst_12976);
(statearr_13039_13076[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13008 === 19))
{var state_13007__$1 = state_13007;var statearr_13040_13077 = state_13007__$1;(statearr_13040_13077[2] = null);
(statearr_13040_13077[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13008 === 20))
{var state_13007__$1 = state_13007;var statearr_13041_13078 = state_13007__$1;(statearr_13041_13078[2] = null);
(statearr_13041_13078[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13008 === 21))
{var inst_13000 = (state_13007[2]);var state_13007__$1 = (function (){var statearr_13042 = state_13007;(statearr_13042[15] = inst_13000);
return statearr_13042;
})();var statearr_13043_13079 = state_13007__$1;(statearr_13043_13079[2] = null);
(statearr_13043_13079[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13008 === 22))
{var inst_12997 = (state_13007[2]);var state_13007__$1 = state_13007;var statearr_13044_13080 = state_13007__$1;(statearr_13044_13080[2] = inst_12997);
(statearr_13044_13080[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13008 === 23))
{var inst_12985 = (state_13007[10]);var inst_12989 = (state_13007[2]);var inst_12990 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12985);var state_13007__$1 = (function (){var statearr_13045 = state_13007;(statearr_13045[16] = inst_12989);
return statearr_13045;
})();var statearr_13046_13081 = state_13007__$1;(statearr_13046_13081[2] = inst_12990);
(statearr_13046_13081[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13008 === 24))
{try{var inst_12987 = (state_13007[11]);var inst_12937 = (state_13007[5]);var inst_12993 = cljs.core.async.muxch_STAR_.call(null,inst_12987);var state_13007__$1 = state_13007;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13007__$1,25,inst_12993,inst_12937);
}catch (e13047){if((e13047 instanceof Object))
{var ex__8183__auto__ = e13047;var statearr_13048_13082 = state_13007;(statearr_13048_13082[1] = 23);
(statearr_13048_13082[2] = ex__8183__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13047;
} else
{return null;
}
}
}} else
{if((state_val_13008 === 25))
{try{var inst_12995 = (state_13007[2]);var state_13007__$1 = state_13007;var statearr_13051_13083 = state_13007__$1;(statearr_13051_13083[2] = inst_12995);
(statearr_13051_13083[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e13049){if((e13049 instanceof Object))
{var ex__8183__auto__ = e13049;var statearr_13050_13084 = state_13007;(statearr_13050_13084[1] = 23);
(statearr_13050_13084[2] = ex__8183__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13049;
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
});return ((function (switch__8195__auto__){
return (function() {
var state_machine__8196__auto__ = null;
var state_machine__8196__auto____0 = (function (){var statearr_13053 = (new Array(17));(statearr_13053[0] = state_machine__8196__auto__);
(statearr_13053[1] = 1);
return statearr_13053;
});
var state_machine__8196__auto____1 = (function (state_13007){while(true){
var result__8197__auto__ = switch__8195__auto__.call(null,state_13007);if(cljs.core.keyword_identical_QMARK_.call(null,result__8197__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8197__auto__;
}
break;
}
});
state_machine__8196__auto__ = function(state_13007){
switch(arguments.length){
case 0:
return state_machine__8196__auto____0.call(this);
case 1:
return state_machine__8196__auto____1.call(this,state_13007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8196__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8196__auto____0;
state_machine__8196__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8196__auto____1;
return state_machine__8196__auto__;
})()
;})(switch__8195__auto__))
})();var state__8259__auto__ = (function (){var statearr_13054 = f__8258__auto__.call(null);(statearr_13054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8257__auto___13055);
return statearr_13054;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8259__auto__);
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
,cljs.core.range.call(null,cnt));var c__8257__auto___13215 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8258__auto__ = (function (){var switch__8195__auto__ = (function (state_13187){var state_val_13188 = (state_13187[1]);if((state_val_13188 === 1))
{var state_13187__$1 = state_13187;var statearr_13189_13216 = state_13187__$1;(statearr_13189_13216[2] = null);
(statearr_13189_13216[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13188 === 2))
{var inst_13151 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13152 = 0;var state_13187__$1 = (function (){var statearr_13190 = state_13187;(statearr_13190[5] = inst_13152);
(statearr_13190[6] = inst_13151);
return statearr_13190;
})();var statearr_13191_13217 = state_13187__$1;(statearr_13191_13217[2] = null);
(statearr_13191_13217[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13188 === 3))
{var inst_13185 = (state_13187[2]);var state_13187__$1 = state_13187;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13187__$1,inst_13185);
} else
{if((state_val_13188 === 4))
{var inst_13152 = (state_13187[5]);var inst_13154 = (inst_13152 < cnt);var state_13187__$1 = state_13187;if(cljs.core.truth_(inst_13154))
{var statearr_13192_13218 = state_13187__$1;(statearr_13192_13218[1] = 6);
} else
{var statearr_13193_13219 = state_13187__$1;(statearr_13193_13219[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13188 === 5))
{var inst_13171 = (state_13187[2]);var state_13187__$1 = (function (){var statearr_13194 = state_13187;(statearr_13194[7] = inst_13171);
return statearr_13194;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13187__$1,12,dchan);
} else
{if((state_val_13188 === 6))
{var state_13187__$1 = state_13187;var statearr_13195_13220 = state_13187__$1;(statearr_13195_13220[2] = null);
(statearr_13195_13220[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13188 === 7))
{var state_13187__$1 = state_13187;var statearr_13196_13221 = state_13187__$1;(statearr_13196_13221[2] = null);
(statearr_13196_13221[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13188 === 8))
{var inst_13169 = (state_13187[2]);var state_13187__$1 = state_13187;var statearr_13197_13222 = state_13187__$1;(statearr_13197_13222[2] = inst_13169);
(statearr_13197_13222[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13188 === 9))
{var inst_13152 = (state_13187[5]);var inst_13164 = (state_13187[2]);var inst_13165 = (inst_13152 + 1);var inst_13152__$1 = inst_13165;var state_13187__$1 = (function (){var statearr_13198 = state_13187;(statearr_13198[5] = inst_13152__$1);
(statearr_13198[8] = inst_13164);
return statearr_13198;
})();var statearr_13199_13223 = state_13187__$1;(statearr_13199_13223[2] = null);
(statearr_13199_13223[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13188 === 10))
{var inst_13156 = (state_13187[2]);var inst_13157 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13187__$1 = (function (){var statearr_13200 = state_13187;(statearr_13200[9] = inst_13156);
return statearr_13200;
})();var statearr_13201_13224 = state_13187__$1;(statearr_13201_13224[2] = inst_13157);
(statearr_13201_13224[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13188 === 11))
{try{var inst_13152 = (state_13187[5]);var inst_13160 = chs__$1.call(null,inst_13152);var inst_13161 = done.call(null,inst_13152);var inst_13162 = cljs.core.async.take_BANG_.call(null,inst_13160,inst_13161);var state_13187__$1 = state_13187;var statearr_13204_13225 = state_13187__$1;(statearr_13204_13225[2] = inst_13162);
(statearr_13204_13225[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e13202){if((e13202 instanceof Object))
{var ex__8183__auto__ = e13202;var statearr_13203_13226 = state_13187;(statearr_13203_13226[1] = 10);
(statearr_13203_13226[2] = ex__8183__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13202;
} else
{return null;
}
}
}} else
{if((state_val_13188 === 12))
{var inst_13173 = (state_13187[10]);var inst_13173__$1 = (state_13187[2]);var inst_13174 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13173__$1);var state_13187__$1 = (function (){var statearr_13205 = state_13187;(statearr_13205[10] = inst_13173__$1);
return statearr_13205;
})();if(cljs.core.truth_(inst_13174))
{var statearr_13206_13227 = state_13187__$1;(statearr_13206_13227[1] = 13);
} else
{var statearr_13207_13228 = state_13187__$1;(statearr_13207_13228[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13188 === 13))
{var inst_13176 = cljs.core.async.close_BANG_.call(null,out);var state_13187__$1 = state_13187;var statearr_13208_13229 = state_13187__$1;(statearr_13208_13229[2] = inst_13176);
(statearr_13208_13229[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13188 === 14))
{var inst_13173 = (state_13187[10]);var inst_13178 = cljs.core.apply.call(null,f,inst_13173);var state_13187__$1 = state_13187;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13187__$1,16,out,inst_13178);
} else
{if((state_val_13188 === 15))
{var inst_13183 = (state_13187[2]);var state_13187__$1 = state_13187;var statearr_13209_13230 = state_13187__$1;(statearr_13209_13230[2] = inst_13183);
(statearr_13209_13230[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13188 === 16))
{var inst_13180 = (state_13187[2]);var state_13187__$1 = (function (){var statearr_13210 = state_13187;(statearr_13210[11] = inst_13180);
return statearr_13210;
})();var statearr_13211_13231 = state_13187__$1;(statearr_13211_13231[2] = null);
(statearr_13211_13231[1] = 2);
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
});return ((function (switch__8195__auto__){
return (function() {
var state_machine__8196__auto__ = null;
var state_machine__8196__auto____0 = (function (){var statearr_13213 = (new Array(12));(statearr_13213[0] = state_machine__8196__auto__);
(statearr_13213[1] = 1);
return statearr_13213;
});
var state_machine__8196__auto____1 = (function (state_13187){while(true){
var result__8197__auto__ = switch__8195__auto__.call(null,state_13187);if(cljs.core.keyword_identical_QMARK_.call(null,result__8197__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8197__auto__;
}
break;
}
});
state_machine__8196__auto__ = function(state_13187){
switch(arguments.length){
case 0:
return state_machine__8196__auto____0.call(this);
case 1:
return state_machine__8196__auto____1.call(this,state_13187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8196__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8196__auto____0;
state_machine__8196__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8196__auto____1;
return state_machine__8196__auto__;
})()
;})(switch__8195__auto__))
})();var state__8259__auto__ = (function (){var statearr_13214 = f__8258__auto__.call(null);(statearr_13214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8257__auto___13215);
return statearr_13214;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8259__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8257__auto___13331 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8258__auto__ = (function (){var switch__8195__auto__ = (function (state_13311){var state_val_13312 = (state_13311[1]);if((state_val_13312 === 1))
{var inst_13282 = cljs.core.vec.call(null,chs);var inst_13283 = inst_13282;var state_13311__$1 = (function (){var statearr_13313 = state_13311;(statearr_13313[5] = inst_13283);
return statearr_13313;
})();var statearr_13314_13332 = state_13311__$1;(statearr_13314_13332[2] = null);
(statearr_13314_13332[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13312 === 2))
{var inst_13283 = (state_13311[5]);var inst_13285 = cljs.core.count.call(null,inst_13283);var inst_13286 = (inst_13285 > 0);var state_13311__$1 = state_13311;if(cljs.core.truth_(inst_13286))
{var statearr_13315_13333 = state_13311__$1;(statearr_13315_13333[1] = 4);
} else
{var statearr_13316_13334 = state_13311__$1;(statearr_13316_13334[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13312 === 3))
{var inst_13309 = (state_13311[2]);var state_13311__$1 = state_13311;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13311__$1,inst_13309);
} else
{if((state_val_13312 === 4))
{var inst_13283 = (state_13311[5]);var state_13311__$1 = state_13311;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13311__$1,7,inst_13283);
} else
{if((state_val_13312 === 5))
{var inst_13305 = cljs.core.async.close_BANG_.call(null,out);var state_13311__$1 = state_13311;var statearr_13317_13335 = state_13311__$1;(statearr_13317_13335[2] = inst_13305);
(statearr_13317_13335[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13312 === 6))
{var inst_13307 = (state_13311[2]);var state_13311__$1 = state_13311;var statearr_13318_13336 = state_13311__$1;(statearr_13318_13336[2] = inst_13307);
(statearr_13318_13336[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13312 === 7))
{var inst_13290 = (state_13311[6]);var inst_13291 = (state_13311[7]);var inst_13290__$1 = (state_13311[2]);var inst_13291__$1 = cljs.core.nth.call(null,inst_13290__$1,0,null);var inst_13292 = cljs.core.nth.call(null,inst_13290__$1,1,null);var inst_13293 = (inst_13291__$1 == null);var state_13311__$1 = (function (){var statearr_13319 = state_13311;(statearr_13319[6] = inst_13290__$1);
(statearr_13319[7] = inst_13291__$1);
(statearr_13319[8] = inst_13292);
return statearr_13319;
})();if(cljs.core.truth_(inst_13293))
{var statearr_13320_13337 = state_13311__$1;(statearr_13320_13337[1] = 8);
} else
{var statearr_13321_13338 = state_13311__$1;(statearr_13321_13338[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13312 === 8))
{var inst_13290 = (state_13311[6]);var inst_13291 = (state_13311[7]);var inst_13283 = (state_13311[5]);var inst_13292 = (state_13311[8]);var inst_13295 = (function (){var c = inst_13292;var v = inst_13291;var vec__13288 = inst_13290;var cs = inst_13283;return ((function (c,v,vec__13288,cs,inst_13290,inst_13291,inst_13283,inst_13292,state_val_13312){
return (function (p1__13232_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13232_SHARP_);
});
;})(c,v,vec__13288,cs,inst_13290,inst_13291,inst_13283,inst_13292,state_val_13312))
})();var inst_13296 = cljs.core.filterv.call(null,inst_13295,inst_13283);var inst_13283__$1 = inst_13296;var state_13311__$1 = (function (){var statearr_13322 = state_13311;(statearr_13322[5] = inst_13283__$1);
return statearr_13322;
})();var statearr_13323_13339 = state_13311__$1;(statearr_13323_13339[2] = null);
(statearr_13323_13339[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13312 === 9))
{var inst_13291 = (state_13311[7]);var state_13311__$1 = state_13311;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13311__$1,11,out,inst_13291);
} else
{if((state_val_13312 === 10))
{var inst_13303 = (state_13311[2]);var state_13311__$1 = state_13311;var statearr_13325_13340 = state_13311__$1;(statearr_13325_13340[2] = inst_13303);
(statearr_13325_13340[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13312 === 11))
{var inst_13283 = (state_13311[5]);var inst_13300 = (state_13311[2]);var tmp13324 = inst_13283;var inst_13283__$1 = tmp13324;var state_13311__$1 = (function (){var statearr_13326 = state_13311;(statearr_13326[5] = inst_13283__$1);
(statearr_13326[9] = inst_13300);
return statearr_13326;
})();var statearr_13327_13341 = state_13311__$1;(statearr_13327_13341[2] = null);
(statearr_13327_13341[1] = 2);
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
});return ((function (switch__8195__auto__){
return (function() {
var state_machine__8196__auto__ = null;
var state_machine__8196__auto____0 = (function (){var statearr_13329 = (new Array(10));(statearr_13329[0] = state_machine__8196__auto__);
(statearr_13329[1] = 1);
return statearr_13329;
});
var state_machine__8196__auto____1 = (function (state_13311){while(true){
var result__8197__auto__ = switch__8195__auto__.call(null,state_13311);if(cljs.core.keyword_identical_QMARK_.call(null,result__8197__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8197__auto__;
}
break;
}
});
state_machine__8196__auto__ = function(state_13311){
switch(arguments.length){
case 0:
return state_machine__8196__auto____0.call(this);
case 1:
return state_machine__8196__auto____1.call(this,state_13311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8196__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8196__auto____0;
state_machine__8196__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8196__auto____1;
return state_machine__8196__auto__;
})()
;})(switch__8195__auto__))
})();var state__8259__auto__ = (function (){var statearr_13330 = f__8258__auto__.call(null);(statearr_13330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8257__auto___13331);
return statearr_13330;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8259__auto__);
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
