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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12351 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12351');

/**
* @constructor
*/
cljs.core.async.t12351 = (function (f,fn_handler,meta12352){
this.f = f;
this.fn_handler = fn_handler;
this.meta12352 = meta12352;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12351.cljs$lang$type = true;
cljs.core.async.t12351.cljs$lang$ctorStr = "cljs.core.async/t12351";
cljs.core.async.t12351.cljs$lang$ctorPrWriter = (function (this__6744__auto__,writer__6745__auto__,opt__6746__auto__){return cljs.core._write.call(null,writer__6745__auto__,"cljs.core.async/t12351");
});
cljs.core.async.t12351.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12351.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return true;
});
cljs.core.async.t12351.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
return self__.f;
});
cljs.core.async.t12351.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12353){var self__ = this;
return self__.meta12352;
});
cljs.core.async.t12351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12353,meta12352__$1){var self__ = this;
return (new cljs.core.async.t12351(self__.f,self__.fn_handler,meta12352__$1));
});
cljs.core.async.__GT_t12351 = (function __GT_t12351(f__$1,fn_handler__$1,meta12352){return (new cljs.core.async.t12351(f__$1,fn_handler__$1,meta12352));
});
}
return (new cljs.core.async.t12351(f,fn_handler,null));
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
{var val_12354 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12354);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_12354);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__7045__auto___12355 = n;var x_12356 = 0;while(true){
if((x_12356 < n__7045__auto___12355))
{(a[x_12356] = 0);
{
var G__12357 = (x_12356 + 1);
x_12356 = G__12357;
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
var G__12358 = (i + 1);
i = G__12358;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12362 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12362');

/**
* @constructor
*/
cljs.core.async.t12362 = (function (flag,alt_flag,meta12363){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12363 = meta12363;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12362.cljs$lang$type = true;
cljs.core.async.t12362.cljs$lang$ctorStr = "cljs.core.async/t12362";
cljs.core.async.t12362.cljs$lang$ctorPrWriter = (function (this__6744__auto__,writer__6745__auto__,opt__6746__auto__){return cljs.core._write.call(null,writer__6745__auto__,"cljs.core.async/t12362");
});
cljs.core.async.t12362.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12362.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t12362.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t12362.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12364){var self__ = this;
return self__.meta12363;
});
cljs.core.async.t12362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12364,meta12363__$1){var self__ = this;
return (new cljs.core.async.t12362(self__.flag,self__.alt_flag,meta12363__$1));
});
cljs.core.async.__GT_t12362 = (function __GT_t12362(flag__$1,alt_flag__$1,meta12363){return (new cljs.core.async.t12362(flag__$1,alt_flag__$1,meta12363));
});
}
return (new cljs.core.async.t12362(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12368 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12368');

/**
* @constructor
*/
cljs.core.async.t12368 = (function (cb,flag,alt_handler,meta12369){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12369 = meta12369;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12368.cljs$lang$type = true;
cljs.core.async.t12368.cljs$lang$ctorStr = "cljs.core.async/t12368";
cljs.core.async.t12368.cljs$lang$ctorPrWriter = (function (this__6744__auto__,writer__6745__auto__,opt__6746__auto__){return cljs.core._write.call(null,writer__6745__auto__,"cljs.core.async/t12368");
});
cljs.core.async.t12368.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12368.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12368.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12368.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12370){var self__ = this;
return self__.meta12369;
});
cljs.core.async.t12368.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12370,meta12369__$1){var self__ = this;
return (new cljs.core.async.t12368(self__.cb,self__.flag,self__.alt_handler,meta12369__$1));
});
cljs.core.async.__GT_t12368 = (function __GT_t12368(cb__$1,flag__$1,alt_handler__$1,meta12369){return (new cljs.core.async.t12368(cb__$1,flag__$1,alt_handler__$1,meta12369));
});
}
return (new cljs.core.async.t12368(cb,flag,alt_handler,null));
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
return (function (p1__12371_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__12371_SHARP_,port], true));
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
var G__12372 = (i + 1);
i = G__12372;
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
var alts_BANG___delegate = function (ports,p__12373){var map__12375 = p__12373;var map__12375__$1 = ((cljs.core.seq_QMARK_.call(null,map__12375))?cljs.core.apply.call(null,cljs.core.hash_map,map__12375):map__12375);var opts = map__12375__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__12373 = null;if (arguments.length > 1) {
  p__12373 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12373);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12376){
var ports = cljs.core.first(arglist__12376);
var p__12373 = cljs.core.rest(arglist__12376);
return alts_BANG___delegate(ports,p__12373);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t12384 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12384');

/**
* @constructor
*/
cljs.core.async.t12384 = (function (ch,f,map_LT_,meta12385){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12385 = meta12385;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12384.cljs$lang$type = true;
cljs.core.async.t12384.cljs$lang$ctorStr = "cljs.core.async/t12384";
cljs.core.async.t12384.cljs$lang$ctorPrWriter = (function (this__6744__auto__,writer__6745__auto__,opt__6746__auto__){return cljs.core._write.call(null,writer__6745__auto__,"cljs.core.async/t12384");
});
cljs.core.async.t12384.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12384.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t12384.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12384.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t12387 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12387');

/**
* @constructor
*/
cljs.core.async.t12387 = (function (fn1,_,meta12385,ch,f,map_LT_,meta12388){
this.fn1 = fn1;
this._ = _;
this.meta12385 = meta12385;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12388 = meta12388;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12387.cljs$lang$type = true;
cljs.core.async.t12387.cljs$lang$ctorStr = "cljs.core.async/t12387";
cljs.core.async.t12387.cljs$lang$ctorPrWriter = (function (this__6744__auto__,writer__6745__auto__,opt__6746__auto__){return cljs.core._write.call(null,writer__6745__auto__,"cljs.core.async/t12387");
});
cljs.core.async.t12387.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12387.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$2){var self__ = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t12387.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$2){var self__ = this;
return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t12387.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$2){var self__ = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1){
return (function (p1__12377_SHARP_){return f1.call(null,(((p1__12377_SHARP_ == null))?null:self__.f.call(null,p1__12377_SHARP_)));
});
;})(f1))
});
cljs.core.async.t12387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12389){var self__ = this;
return self__.meta12388;
});
cljs.core.async.t12387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12389,meta12388__$1){var self__ = this;
return (new cljs.core.async.t12387(self__.fn1,self__._,self__.meta12385,self__.ch,self__.f,self__.map_LT_,meta12388__$1));
});
cljs.core.async.__GT_t12387 = (function __GT_t12387(fn1__$1,___$1,meta12385__$1,ch__$2,f__$2,map_LT___$2,meta12388){return (new cljs.core.async.t12387(fn1__$1,___$1,meta12385__$1,ch__$2,f__$2,map_LT___$2,meta12388));
});
}
return (new cljs.core.async.t12387(fn1,_,self__.meta12385,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t12384.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12384.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12384.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12386){var self__ = this;
return self__.meta12385;
});
cljs.core.async.t12384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12386,meta12385__$1){var self__ = this;
return (new cljs.core.async.t12384(self__.ch,self__.f,self__.map_LT_,meta12385__$1));
});
cljs.core.async.__GT_t12384 = (function __GT_t12384(ch__$1,f__$1,map_LT___$1,meta12385){return (new cljs.core.async.t12384(ch__$1,f__$1,map_LT___$1,meta12385));
});
}
return (new cljs.core.async.t12384(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t12393 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12393');

/**
* @constructor
*/
cljs.core.async.t12393 = (function (ch,f,map_GT_,meta12394){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta12394 = meta12394;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12393.cljs$lang$type = true;
cljs.core.async.t12393.cljs$lang$ctorStr = "cljs.core.async/t12393";
cljs.core.async.t12393.cljs$lang$ctorPrWriter = (function (this__6744__auto__,writer__6745__auto__,opt__6746__auto__){return cljs.core._write.call(null,writer__6745__auto__,"cljs.core.async/t12393");
});
cljs.core.async.t12393.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12393.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t12393.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12393.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12393.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12393.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12395){var self__ = this;
return self__.meta12394;
});
cljs.core.async.t12393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12395,meta12394__$1){var self__ = this;
return (new cljs.core.async.t12393(self__.ch,self__.f,self__.map_GT_,meta12394__$1));
});
cljs.core.async.__GT_t12393 = (function __GT_t12393(ch__$1,f__$1,map_GT___$1,meta12394){return (new cljs.core.async.t12393(ch__$1,f__$1,map_GT___$1,meta12394));
});
}
return (new cljs.core.async.t12393(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t12399 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12399');

/**
* @constructor
*/
cljs.core.async.t12399 = (function (ch,p,filter_GT_,meta12400){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta12400 = meta12400;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12399.cljs$lang$type = true;
cljs.core.async.t12399.cljs$lang$ctorStr = "cljs.core.async/t12399";
cljs.core.async.t12399.cljs$lang$ctorPrWriter = (function (this__6744__auto__,writer__6745__auto__,opt__6746__auto__){return cljs.core._write.call(null,writer__6745__auto__,"cljs.core.async/t12399");
});
cljs.core.async.t12399.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12399.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t12399.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12399.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12399.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12399.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12399.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12401){var self__ = this;
return self__.meta12400;
});
cljs.core.async.t12399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12401,meta12400__$1){var self__ = this;
return (new cljs.core.async.t12399(self__.ch,self__.p,self__.filter_GT_,meta12400__$1));
});
cljs.core.async.__GT_t12399 = (function __GT_t12399(ch__$1,p__$1,filter_GT___$1,meta12400){return (new cljs.core.async.t12399(ch__$1,p__$1,filter_GT___$1,meta12400));
});
}
return (new cljs.core.async.t12399(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8272__auto___12476 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8273__auto__ = (function (){var switch__8220__auto__ = (function (state_12459){var state_val_12460 = (state_12459[1]);if((state_val_12460 === 1))
{var state_12459__$1 = state_12459;var statearr_12461_12477 = state_12459__$1;(statearr_12461_12477[2] = null);
(statearr_12461_12477[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12460 === 2))
{var state_12459__$1 = state_12459;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12459__$1,4,ch);
} else
{if((state_val_12460 === 3))
{var inst_12457 = (state_12459[2]);var state_12459__$1 = state_12459;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12459__$1,inst_12457);
} else
{if((state_val_12460 === 4))
{var inst_12441 = (state_12459[5]);var inst_12441__$1 = (state_12459[2]);var inst_12442 = (inst_12441__$1 == null);var state_12459__$1 = (function (){var statearr_12462 = state_12459;(statearr_12462[5] = inst_12441__$1);
return statearr_12462;
})();if(cljs.core.truth_(inst_12442))
{var statearr_12463_12478 = state_12459__$1;(statearr_12463_12478[1] = 5);
} else
{var statearr_12464_12479 = state_12459__$1;(statearr_12464_12479[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12460 === 5))
{var inst_12444 = cljs.core.async.close_BANG_.call(null,out);var state_12459__$1 = state_12459;var statearr_12465_12480 = state_12459__$1;(statearr_12465_12480[2] = inst_12444);
(statearr_12465_12480[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12460 === 6))
{var inst_12441 = (state_12459[5]);var inst_12446 = p.call(null,inst_12441);var state_12459__$1 = state_12459;if(cljs.core.truth_(inst_12446))
{var statearr_12466_12481 = state_12459__$1;(statearr_12466_12481[1] = 8);
} else
{var statearr_12467_12482 = state_12459__$1;(statearr_12467_12482[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12460 === 7))
{var inst_12455 = (state_12459[2]);var state_12459__$1 = state_12459;var statearr_12468_12483 = state_12459__$1;(statearr_12468_12483[2] = inst_12455);
(statearr_12468_12483[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12460 === 8))
{var inst_12441 = (state_12459[5]);var state_12459__$1 = state_12459;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12459__$1,11,out,inst_12441);
} else
{if((state_val_12460 === 9))
{var state_12459__$1 = state_12459;var statearr_12469_12484 = state_12459__$1;(statearr_12469_12484[2] = null);
(statearr_12469_12484[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12460 === 10))
{var inst_12452 = (state_12459[2]);var state_12459__$1 = (function (){var statearr_12470 = state_12459;(statearr_12470[6] = inst_12452);
return statearr_12470;
})();var statearr_12471_12485 = state_12459__$1;(statearr_12471_12485[2] = null);
(statearr_12471_12485[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12460 === 11))
{var inst_12449 = (state_12459[2]);var state_12459__$1 = state_12459;var statearr_12472_12486 = state_12459__$1;(statearr_12472_12486[2] = inst_12449);
(statearr_12472_12486[1] = 10);
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
});return ((function (switch__8220__auto__){
return (function() {
var state_machine__8221__auto__ = null;
var state_machine__8221__auto____0 = (function (){var statearr_12474 = (new Array(7));(statearr_12474[0] = state_machine__8221__auto__);
(statearr_12474[1] = 1);
return statearr_12474;
});
var state_machine__8221__auto____1 = (function (state_12459){while(true){
var result__8222__auto__ = switch__8220__auto__.call(null,state_12459);if(cljs.core.keyword_identical_QMARK_.call(null,result__8222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8222__auto__;
}
break;
}
});
state_machine__8221__auto__ = function(state_12459){
switch(arguments.length){
case 0:
return state_machine__8221__auto____0.call(this);
case 1:
return state_machine__8221__auto____1.call(this,state_12459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8221__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8221__auto____0;
state_machine__8221__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8221__auto____1;
return state_machine__8221__auto__;
})()
;})(switch__8220__auto__))
})();var state__8274__auto__ = (function (){var statearr_12475 = f__8273__auto__.call(null);(statearr_12475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8272__auto___12476);
return statearr_12475;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8274__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__8272__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8273__auto__ = (function (){var switch__8220__auto__ = (function (state_12634){var state_val_12635 = (state_12634[1]);if((state_val_12635 === 1))
{var state_12634__$1 = state_12634;var statearr_12636_12669 = state_12634__$1;(statearr_12636_12669[2] = null);
(statearr_12636_12669[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12635 === 2))
{var state_12634__$1 = state_12634;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12634__$1,4,in$);
} else
{if((state_val_12635 === 3))
{var inst_12632 = (state_12634[2]);var state_12634__$1 = state_12634;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12634__$1,inst_12632);
} else
{if((state_val_12635 === 4))
{var inst_12580 = (state_12634[5]);var inst_12580__$1 = (state_12634[2]);var inst_12581 = (inst_12580__$1 == null);var state_12634__$1 = (function (){var statearr_12637 = state_12634;(statearr_12637[5] = inst_12580__$1);
return statearr_12637;
})();if(cljs.core.truth_(inst_12581))
{var statearr_12638_12670 = state_12634__$1;(statearr_12638_12670[1] = 5);
} else
{var statearr_12639_12671 = state_12634__$1;(statearr_12639_12671[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12635 === 5))
{var inst_12583 = cljs.core.async.close_BANG_.call(null,out);var state_12634__$1 = state_12634;var statearr_12640_12672 = state_12634__$1;(statearr_12640_12672[2] = inst_12583);
(statearr_12640_12672[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12635 === 6))
{var inst_12580 = (state_12634[5]);var inst_12585 = f.call(null,inst_12580);var inst_12590 = cljs.core.seq.call(null,inst_12585);var inst_12591 = inst_12590;var inst_12592 = null;var inst_12593 = 0;var inst_12594 = 0;var state_12634__$1 = (function (){var statearr_12641 = state_12634;(statearr_12641[6] = inst_12594);
(statearr_12641[7] = inst_12592);
(statearr_12641[8] = inst_12593);
(statearr_12641[9] = inst_12591);
return statearr_12641;
})();var statearr_12642_12673 = state_12634__$1;(statearr_12642_12673[2] = null);
(statearr_12642_12673[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12635 === 7))
{var inst_12630 = (state_12634[2]);var state_12634__$1 = state_12634;var statearr_12643_12674 = state_12634__$1;(statearr_12643_12674[2] = inst_12630);
(statearr_12643_12674[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12635 === 8))
{var inst_12594 = (state_12634[6]);var inst_12593 = (state_12634[8]);var inst_12596 = (inst_12594 < inst_12593);var inst_12597 = inst_12596;var state_12634__$1 = state_12634;if(cljs.core.truth_(inst_12597))
{var statearr_12644_12675 = state_12634__$1;(statearr_12644_12675[1] = 10);
} else
{var statearr_12645_12676 = state_12634__$1;(statearr_12645_12676[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12635 === 9))
{var inst_12627 = (state_12634[2]);var state_12634__$1 = (function (){var statearr_12646 = state_12634;(statearr_12646[10] = inst_12627);
return statearr_12646;
})();var statearr_12647_12677 = state_12634__$1;(statearr_12647_12677[2] = null);
(statearr_12647_12677[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12635 === 10))
{var inst_12594 = (state_12634[6]);var inst_12592 = (state_12634[7]);var inst_12599 = cljs.core._nth.call(null,inst_12592,inst_12594);var state_12634__$1 = state_12634;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12634__$1,13,out,inst_12599);
} else
{if((state_val_12635 === 11))
{var inst_12605 = (state_12634[11]);var inst_12591 = (state_12634[9]);var inst_12605__$1 = cljs.core.seq.call(null,inst_12591);var state_12634__$1 = (function (){var statearr_12651 = state_12634;(statearr_12651[11] = inst_12605__$1);
return statearr_12651;
})();if(inst_12605__$1)
{var statearr_12652_12678 = state_12634__$1;(statearr_12652_12678[1] = 14);
} else
{var statearr_12653_12679 = state_12634__$1;(statearr_12653_12679[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12635 === 12))
{var inst_12625 = (state_12634[2]);var state_12634__$1 = state_12634;var statearr_12654_12680 = state_12634__$1;(statearr_12654_12680[2] = inst_12625);
(statearr_12654_12680[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12635 === 13))
{var inst_12594 = (state_12634[6]);var inst_12592 = (state_12634[7]);var inst_12593 = (state_12634[8]);var inst_12591 = (state_12634[9]);var inst_12601 = (state_12634[2]);var inst_12602 = (inst_12594 + 1);var tmp12648 = inst_12592;var tmp12649 = inst_12593;var tmp12650 = inst_12591;var inst_12591__$1 = tmp12650;var inst_12592__$1 = tmp12648;var inst_12593__$1 = tmp12649;var inst_12594__$1 = inst_12602;var state_12634__$1 = (function (){var statearr_12655 = state_12634;(statearr_12655[6] = inst_12594__$1);
(statearr_12655[7] = inst_12592__$1);
(statearr_12655[8] = inst_12593__$1);
(statearr_12655[9] = inst_12591__$1);
(statearr_12655[12] = inst_12601);
return statearr_12655;
})();var statearr_12656_12681 = state_12634__$1;(statearr_12656_12681[2] = null);
(statearr_12656_12681[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12635 === 14))
{var inst_12605 = (state_12634[11]);var inst_12607 = cljs.core.chunked_seq_QMARK_.call(null,inst_12605);var state_12634__$1 = state_12634;if(inst_12607)
{var statearr_12657_12682 = state_12634__$1;(statearr_12657_12682[1] = 17);
} else
{var statearr_12658_12683 = state_12634__$1;(statearr_12658_12683[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12635 === 15))
{var state_12634__$1 = state_12634;var statearr_12659_12684 = state_12634__$1;(statearr_12659_12684[2] = null);
(statearr_12659_12684[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12635 === 16))
{var inst_12623 = (state_12634[2]);var state_12634__$1 = state_12634;var statearr_12660_12685 = state_12634__$1;(statearr_12660_12685[2] = inst_12623);
(statearr_12660_12685[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12635 === 17))
{var inst_12605 = (state_12634[11]);var inst_12609 = cljs.core.chunk_first.call(null,inst_12605);var inst_12610 = cljs.core.chunk_rest.call(null,inst_12605);var inst_12611 = cljs.core.count.call(null,inst_12609);var inst_12591 = inst_12610;var inst_12592 = inst_12609;var inst_12593 = inst_12611;var inst_12594 = 0;var state_12634__$1 = (function (){var statearr_12661 = state_12634;(statearr_12661[6] = inst_12594);
(statearr_12661[7] = inst_12592);
(statearr_12661[8] = inst_12593);
(statearr_12661[9] = inst_12591);
return statearr_12661;
})();var statearr_12662_12686 = state_12634__$1;(statearr_12662_12686[2] = null);
(statearr_12662_12686[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12635 === 18))
{var inst_12605 = (state_12634[11]);var inst_12614 = cljs.core.first.call(null,inst_12605);var state_12634__$1 = state_12634;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12634__$1,20,out,inst_12614);
} else
{if((state_val_12635 === 19))
{var inst_12620 = (state_12634[2]);var state_12634__$1 = state_12634;var statearr_12663_12687 = state_12634__$1;(statearr_12663_12687[2] = inst_12620);
(statearr_12663_12687[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12635 === 20))
{var inst_12605 = (state_12634[11]);var inst_12616 = (state_12634[2]);var inst_12617 = cljs.core.next.call(null,inst_12605);var inst_12591 = inst_12617;var inst_12592 = null;var inst_12593 = 0;var inst_12594 = 0;var state_12634__$1 = (function (){var statearr_12664 = state_12634;(statearr_12664[6] = inst_12594);
(statearr_12664[7] = inst_12592);
(statearr_12664[8] = inst_12593);
(statearr_12664[9] = inst_12591);
(statearr_12664[13] = inst_12616);
return statearr_12664;
})();var statearr_12665_12688 = state_12634__$1;(statearr_12665_12688[2] = null);
(statearr_12665_12688[1] = 8);
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
});return ((function (switch__8220__auto__){
return (function() {
var state_machine__8221__auto__ = null;
var state_machine__8221__auto____0 = (function (){var statearr_12667 = (new Array(14));(statearr_12667[0] = state_machine__8221__auto__);
(statearr_12667[1] = 1);
return statearr_12667;
});
var state_machine__8221__auto____1 = (function (state_12634){while(true){
var result__8222__auto__ = switch__8220__auto__.call(null,state_12634);if(cljs.core.keyword_identical_QMARK_.call(null,result__8222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8222__auto__;
}
break;
}
});
state_machine__8221__auto__ = function(state_12634){
switch(arguments.length){
case 0:
return state_machine__8221__auto____0.call(this);
case 1:
return state_machine__8221__auto____1.call(this,state_12634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8221__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8221__auto____0;
state_machine__8221__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8221__auto____1;
return state_machine__8221__auto__;
})()
;})(switch__8220__auto__))
})();var state__8274__auto__ = (function (){var statearr_12668 = f__8273__auto__.call(null);(statearr_12668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8272__auto__);
return statearr_12668;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8274__auto__);
}));
return c__8272__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__8272__auto___12761 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8273__auto__ = (function (){var switch__8220__auto__ = (function (state_12744){var state_val_12745 = (state_12744[1]);if((state_val_12745 === 1))
{var state_12744__$1 = state_12744;var statearr_12746_12762 = state_12744__$1;(statearr_12746_12762[2] = null);
(statearr_12746_12762[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12745 === 2))
{var state_12744__$1 = state_12744;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12744__$1,4,from);
} else
{if((state_val_12745 === 3))
{var inst_12742 = (state_12744[2]);var state_12744__$1 = state_12744;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12744__$1,inst_12742);
} else
{if((state_val_12745 === 4))
{var inst_12727 = (state_12744[5]);var inst_12727__$1 = (state_12744[2]);var inst_12728 = (inst_12727__$1 == null);var state_12744__$1 = (function (){var statearr_12747 = state_12744;(statearr_12747[5] = inst_12727__$1);
return statearr_12747;
})();if(cljs.core.truth_(inst_12728))
{var statearr_12748_12763 = state_12744__$1;(statearr_12748_12763[1] = 5);
} else
{var statearr_12749_12764 = state_12744__$1;(statearr_12749_12764[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12745 === 5))
{var state_12744__$1 = state_12744;if(cljs.core.truth_(close_QMARK_))
{var statearr_12750_12765 = state_12744__$1;(statearr_12750_12765[1] = 8);
} else
{var statearr_12751_12766 = state_12744__$1;(statearr_12751_12766[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12745 === 6))
{var inst_12727 = (state_12744[5]);var state_12744__$1 = state_12744;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12744__$1,11,to,inst_12727);
} else
{if((state_val_12745 === 7))
{var inst_12740 = (state_12744[2]);var state_12744__$1 = state_12744;var statearr_12752_12767 = state_12744__$1;(statearr_12752_12767[2] = inst_12740);
(statearr_12752_12767[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12745 === 8))
{var inst_12731 = cljs.core.async.close_BANG_.call(null,to);var state_12744__$1 = state_12744;var statearr_12753_12768 = state_12744__$1;(statearr_12753_12768[2] = inst_12731);
(statearr_12753_12768[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12745 === 9))
{var state_12744__$1 = state_12744;var statearr_12754_12769 = state_12744__$1;(statearr_12754_12769[2] = null);
(statearr_12754_12769[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12745 === 10))
{var inst_12734 = (state_12744[2]);var state_12744__$1 = state_12744;var statearr_12755_12770 = state_12744__$1;(statearr_12755_12770[2] = inst_12734);
(statearr_12755_12770[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12745 === 11))
{var inst_12737 = (state_12744[2]);var state_12744__$1 = (function (){var statearr_12756 = state_12744;(statearr_12756[6] = inst_12737);
return statearr_12756;
})();var statearr_12757_12771 = state_12744__$1;(statearr_12757_12771[2] = null);
(statearr_12757_12771[1] = 2);
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
});return ((function (switch__8220__auto__){
return (function() {
var state_machine__8221__auto__ = null;
var state_machine__8221__auto____0 = (function (){var statearr_12759 = (new Array(7));(statearr_12759[0] = state_machine__8221__auto__);
(statearr_12759[1] = 1);
return statearr_12759;
});
var state_machine__8221__auto____1 = (function (state_12744){while(true){
var result__8222__auto__ = switch__8220__auto__.call(null,state_12744);if(cljs.core.keyword_identical_QMARK_.call(null,result__8222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8222__auto__;
}
break;
}
});
state_machine__8221__auto__ = function(state_12744){
switch(arguments.length){
case 0:
return state_machine__8221__auto____0.call(this);
case 1:
return state_machine__8221__auto____1.call(this,state_12744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8221__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8221__auto____0;
state_machine__8221__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8221__auto____1;
return state_machine__8221__auto__;
})()
;})(switch__8220__auto__))
})();var state__8274__auto__ = (function (){var statearr_12760 = f__8273__auto__.call(null);(statearr_12760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8272__auto___12761);
return statearr_12760;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8274__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__8272__auto___12850 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8273__auto__ = (function (){var switch__8220__auto__ = (function (state_12832){var state_val_12833 = (state_12832[1]);if((state_val_12833 === 1))
{var state_12832__$1 = state_12832;var statearr_12834_12851 = state_12832__$1;(statearr_12834_12851[2] = null);
(statearr_12834_12851[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12833 === 2))
{var state_12832__$1 = state_12832;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12832__$1,4,ch);
} else
{if((state_val_12833 === 3))
{var inst_12830 = (state_12832[2]);var state_12832__$1 = state_12832;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12832__$1,inst_12830);
} else
{if((state_val_12833 === 4))
{var inst_12813 = (state_12832[5]);var inst_12813__$1 = (state_12832[2]);var inst_12814 = (inst_12813__$1 == null);var state_12832__$1 = (function (){var statearr_12835 = state_12832;(statearr_12835[5] = inst_12813__$1);
return statearr_12835;
})();if(cljs.core.truth_(inst_12814))
{var statearr_12836_12852 = state_12832__$1;(statearr_12836_12852[1] = 5);
} else
{var statearr_12837_12853 = state_12832__$1;(statearr_12837_12853[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12833 === 5))
{var inst_12816 = cljs.core.async.close_BANG_.call(null,tc);var inst_12817 = cljs.core.async.close_BANG_.call(null,fc);var state_12832__$1 = (function (){var statearr_12838 = state_12832;(statearr_12838[6] = inst_12816);
return statearr_12838;
})();var statearr_12839_12854 = state_12832__$1;(statearr_12839_12854[2] = inst_12817);
(statearr_12839_12854[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12833 === 6))
{var inst_12813 = (state_12832[5]);var inst_12819 = p.call(null,inst_12813);var state_12832__$1 = state_12832;if(cljs.core.truth_(inst_12819))
{var statearr_12840_12855 = state_12832__$1;(statearr_12840_12855[1] = 9);
} else
{var statearr_12841_12856 = state_12832__$1;(statearr_12841_12856[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12833 === 7))
{var inst_12828 = (state_12832[2]);var state_12832__$1 = state_12832;var statearr_12842_12857 = state_12832__$1;(statearr_12842_12857[2] = inst_12828);
(statearr_12842_12857[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12833 === 8))
{var inst_12825 = (state_12832[2]);var state_12832__$1 = (function (){var statearr_12843 = state_12832;(statearr_12843[7] = inst_12825);
return statearr_12843;
})();var statearr_12844_12858 = state_12832__$1;(statearr_12844_12858[2] = null);
(statearr_12844_12858[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12833 === 9))
{var state_12832__$1 = state_12832;var statearr_12845_12859 = state_12832__$1;(statearr_12845_12859[2] = tc);
(statearr_12845_12859[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12833 === 10))
{var state_12832__$1 = state_12832;var statearr_12846_12860 = state_12832__$1;(statearr_12846_12860[2] = fc);
(statearr_12846_12860[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12833 === 11))
{var inst_12813 = (state_12832[5]);var inst_12823 = (state_12832[2]);var state_12832__$1 = state_12832;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12832__$1,8,inst_12823,inst_12813);
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
});return ((function (switch__8220__auto__){
return (function() {
var state_machine__8221__auto__ = null;
var state_machine__8221__auto____0 = (function (){var statearr_12848 = (new Array(8));(statearr_12848[0] = state_machine__8221__auto__);
(statearr_12848[1] = 1);
return statearr_12848;
});
var state_machine__8221__auto____1 = (function (state_12832){while(true){
var result__8222__auto__ = switch__8220__auto__.call(null,state_12832);if(cljs.core.keyword_identical_QMARK_.call(null,result__8222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8222__auto__;
}
break;
}
});
state_machine__8221__auto__ = function(state_12832){
switch(arguments.length){
case 0:
return state_machine__8221__auto____0.call(this);
case 1:
return state_machine__8221__auto____1.call(this,state_12832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8221__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8221__auto____0;
state_machine__8221__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8221__auto____1;
return state_machine__8221__auto__;
})()
;})(switch__8220__auto__))
})();var state__8274__auto__ = (function (){var statearr_12849 = f__8273__auto__.call(null);(statearr_12849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8272__auto___12850);
return statearr_12849;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8274__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__8272__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8273__auto__ = (function (){var switch__8220__auto__ = (function (state_12903){var state_val_12904 = (state_12903[1]);if((state_val_12904 === 7))
{var inst_12899 = (state_12903[2]);var state_12903__$1 = state_12903;var statearr_12905_12917 = state_12903__$1;(statearr_12905_12917[2] = inst_12899);
(statearr_12905_12917[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12904 === 6))
{var inst_12889 = (state_12903[5]);var inst_12892 = (state_12903[6]);var inst_12896 = f.call(null,inst_12889,inst_12892);var inst_12889__$1 = inst_12896;var state_12903__$1 = (function (){var statearr_12906 = state_12903;(statearr_12906[5] = inst_12889__$1);
return statearr_12906;
})();var statearr_12907_12918 = state_12903__$1;(statearr_12907_12918[2] = null);
(statearr_12907_12918[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12904 === 5))
{var inst_12889 = (state_12903[5]);var state_12903__$1 = state_12903;var statearr_12908_12919 = state_12903__$1;(statearr_12908_12919[2] = inst_12889);
(statearr_12908_12919[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12904 === 4))
{var inst_12892 = (state_12903[6]);var inst_12892__$1 = (state_12903[2]);var inst_12893 = (inst_12892__$1 == null);var state_12903__$1 = (function (){var statearr_12909 = state_12903;(statearr_12909[6] = inst_12892__$1);
return statearr_12909;
})();if(cljs.core.truth_(inst_12893))
{var statearr_12910_12920 = state_12903__$1;(statearr_12910_12920[1] = 5);
} else
{var statearr_12911_12921 = state_12903__$1;(statearr_12911_12921[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12904 === 3))
{var inst_12901 = (state_12903[2]);var state_12903__$1 = state_12903;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12903__$1,inst_12901);
} else
{if((state_val_12904 === 2))
{var state_12903__$1 = state_12903;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12903__$1,4,ch);
} else
{if((state_val_12904 === 1))
{var inst_12889 = init;var state_12903__$1 = (function (){var statearr_12912 = state_12903;(statearr_12912[5] = inst_12889);
return statearr_12912;
})();var statearr_12913_12922 = state_12903__$1;(statearr_12913_12922[2] = null);
(statearr_12913_12922[1] = 2);
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
});return ((function (switch__8220__auto__){
return (function() {
var state_machine__8221__auto__ = null;
var state_machine__8221__auto____0 = (function (){var statearr_12915 = (new Array(7));(statearr_12915[0] = state_machine__8221__auto__);
(statearr_12915[1] = 1);
return statearr_12915;
});
var state_machine__8221__auto____1 = (function (state_12903){while(true){
var result__8222__auto__ = switch__8220__auto__.call(null,state_12903);if(cljs.core.keyword_identical_QMARK_.call(null,result__8222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8222__auto__;
}
break;
}
});
state_machine__8221__auto__ = function(state_12903){
switch(arguments.length){
case 0:
return state_machine__8221__auto____0.call(this);
case 1:
return state_machine__8221__auto____1.call(this,state_12903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8221__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8221__auto____0;
state_machine__8221__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8221__auto____1;
return state_machine__8221__auto__;
})()
;})(switch__8220__auto__))
})();var state__8274__auto__ = (function (){var statearr_12916 = f__8273__auto__.call(null);(statearr_12916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8272__auto__);
return statearr_12916;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8274__auto__);
}));
return c__8272__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__8272__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8273__auto__ = (function (){var switch__8220__auto__ = (function (state_12980){var state_val_12981 = (state_12980[1]);if((state_val_12981 === 1))
{var inst_12960 = cljs.core.seq.call(null,coll);var inst_12961 = inst_12960;var state_12980__$1 = (function (){var statearr_12982 = state_12980;(statearr_12982[5] = inst_12961);
return statearr_12982;
})();var statearr_12983_12997 = state_12980__$1;(statearr_12983_12997[2] = null);
(statearr_12983_12997[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12981 === 2))
{var inst_12961 = (state_12980[5]);var state_12980__$1 = state_12980;if(cljs.core.truth_(inst_12961))
{var statearr_12984_12998 = state_12980__$1;(statearr_12984_12998[1] = 4);
} else
{var statearr_12985_12999 = state_12980__$1;(statearr_12985_12999[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12981 === 3))
{var inst_12978 = (state_12980[2]);var state_12980__$1 = state_12980;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12980__$1,inst_12978);
} else
{if((state_val_12981 === 4))
{var inst_12961 = (state_12980[5]);var inst_12964 = cljs.core.first.call(null,inst_12961);var state_12980__$1 = state_12980;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12980__$1,7,ch,inst_12964);
} else
{if((state_val_12981 === 5))
{var state_12980__$1 = state_12980;if(cljs.core.truth_(close_QMARK_))
{var statearr_12986_13000 = state_12980__$1;(statearr_12986_13000[1] = 8);
} else
{var statearr_12987_13001 = state_12980__$1;(statearr_12987_13001[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12981 === 6))
{var inst_12976 = (state_12980[2]);var state_12980__$1 = state_12980;var statearr_12988_13002 = state_12980__$1;(statearr_12988_13002[2] = inst_12976);
(statearr_12988_13002[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12981 === 7))
{var inst_12961 = (state_12980[5]);var inst_12966 = (state_12980[2]);var inst_12967 = cljs.core.next.call(null,inst_12961);var inst_12961__$1 = inst_12967;var state_12980__$1 = (function (){var statearr_12989 = state_12980;(statearr_12989[6] = inst_12966);
(statearr_12989[5] = inst_12961__$1);
return statearr_12989;
})();var statearr_12990_13003 = state_12980__$1;(statearr_12990_13003[2] = null);
(statearr_12990_13003[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12981 === 8))
{var inst_12971 = cljs.core.async.close_BANG_.call(null,ch);var state_12980__$1 = state_12980;var statearr_12991_13004 = state_12980__$1;(statearr_12991_13004[2] = inst_12971);
(statearr_12991_13004[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12981 === 9))
{var state_12980__$1 = state_12980;var statearr_12992_13005 = state_12980__$1;(statearr_12992_13005[2] = null);
(statearr_12992_13005[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12981 === 10))
{var inst_12974 = (state_12980[2]);var state_12980__$1 = state_12980;var statearr_12993_13006 = state_12980__$1;(statearr_12993_13006[2] = inst_12974);
(statearr_12993_13006[1] = 6);
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
});return ((function (switch__8220__auto__){
return (function() {
var state_machine__8221__auto__ = null;
var state_machine__8221__auto____0 = (function (){var statearr_12995 = (new Array(7));(statearr_12995[0] = state_machine__8221__auto__);
(statearr_12995[1] = 1);
return statearr_12995;
});
var state_machine__8221__auto____1 = (function (state_12980){while(true){
var result__8222__auto__ = switch__8220__auto__.call(null,state_12980);if(cljs.core.keyword_identical_QMARK_.call(null,result__8222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8222__auto__;
}
break;
}
});
state_machine__8221__auto__ = function(state_12980){
switch(arguments.length){
case 0:
return state_machine__8221__auto____0.call(this);
case 1:
return state_machine__8221__auto____1.call(this,state_12980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8221__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8221__auto____0;
state_machine__8221__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8221__auto____1;
return state_machine__8221__auto__;
})()
;})(switch__8220__auto__))
})();var state__8274__auto__ = (function (){var statearr_12996 = f__8273__auto__.call(null);(statearr_12996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8272__auto__);
return statearr_12996;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8274__auto__);
}));
return c__8272__auto__;
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
{var x__6820__auto__ = (((_ == null))?null:_);return (function (){var or__3943__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6820__auto__)]);if(or__3943__auto__)
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
{var x__6820__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6820__auto__)]);if(or__3943__auto__)
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
{var x__6820__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6820__auto__)]);if(or__3943__auto__)
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
{var x__6820__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6820__auto__)]);if(or__3943__auto__)
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13219 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t13219');

/**
* @constructor
*/
cljs.core.async.t13219 = (function (cs,ch,mult,meta13220){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13220 = meta13220;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13219.cljs$lang$type = true;
cljs.core.async.t13219.cljs$lang$ctorStr = "cljs.core.async/t13219";
cljs.core.async.t13219.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6744__auto__,writer__6745__auto__,opt__6746__auto__){return cljs.core._write.call(null,writer__6745__auto__,"cljs.core.async/t13219");
});})(cs))
;
cljs.core.async.t13219.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13219.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13219.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13219.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13219.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13219.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
return self__.ch;
});})(cs))
;
cljs.core.async.t13219.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13221){var self__ = this;
return self__.meta13220;
});})(cs))
;
cljs.core.async.t13219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13221,meta13220__$1){var self__ = this;
return (new cljs.core.async.t13219(self__.cs,self__.ch,self__.mult,meta13220__$1));
});})(cs))
;
cljs.core.async.__GT_t13219 = ((function (cs){
return (function __GT_t13219(cs__$1,ch__$1,mult__$1,meta13220){return (new cljs.core.async.t13219(cs__$1,ch__$1,mult__$1,meta13220));
});})(cs))
;
}
return (new cljs.core.async.t13219(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__8272__auto___13431 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8273__auto__ = (function (){var switch__8220__auto__ = (function (state_13349){var state_val_13350 = (state_13349[1]);if((state_val_13350 === 32))
{try{var inst_13224 = (state_13349[5]);var inst_13300 = (state_13349[6]);var inst_13306 = cljs.core.async.put_BANG_.call(null,inst_13300,inst_13224,done);var state_13349__$1 = state_13349;var statearr_13353_13432 = state_13349__$1;(statearr_13353_13432[2] = inst_13306);
(statearr_13353_13432[1] = 30);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e13351){if((e13351 instanceof Object))
{var ex__8214__auto__ = e13351;var statearr_13352_13433 = state_13349;(statearr_13352_13433[1] = 31);
(statearr_13352_13433[2] = ex__8214__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13351;
} else
{return null;
}
}
}} else
{if((state_val_13350 === 1))
{var state_13349__$1 = state_13349;var statearr_13354_13434 = state_13349__$1;(statearr_13354_13434[2] = null);
(statearr_13354_13434[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13350 === 33))
{var inst_13312 = (state_13349[7]);var inst_13314 = cljs.core.chunked_seq_QMARK_.call(null,inst_13312);var state_13349__$1 = state_13349;if(inst_13314)
{var statearr_13355_13435 = state_13349__$1;(statearr_13355_13435[1] = 36);
} else
{var statearr_13356_13436 = state_13349__$1;(statearr_13356_13436[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13350 === 2))
{var state_13349__$1 = state_13349;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13349__$1,4,ch);
} else
{if((state_val_13350 === 34))
{var state_13349__$1 = state_13349;var statearr_13357_13437 = state_13349__$1;(statearr_13357_13437[2] = null);
(statearr_13357_13437[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13350 === 3))
{var inst_13347 = (state_13349[2]);var state_13349__$1 = state_13349;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13349__$1,inst_13347);
} else
{if((state_val_13350 === 35))
{var inst_13336 = (state_13349[2]);var state_13349__$1 = state_13349;var statearr_13358_13438 = state_13349__$1;(statearr_13358_13438[2] = inst_13336);
(statearr_13358_13438[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13350 === 4))
{var inst_13224 = (state_13349[5]);var inst_13224__$1 = (state_13349[2]);var inst_13225 = (inst_13224__$1 == null);var state_13349__$1 = (function (){var statearr_13359 = state_13349;(statearr_13359[5] = inst_13224__$1);
return statearr_13359;
})();if(cljs.core.truth_(inst_13225))
{var statearr_13360_13439 = state_13349__$1;(statearr_13360_13439[1] = 5);
} else
{var statearr_13361_13440 = state_13349__$1;(statearr_13361_13440[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13350 === 36))
{var inst_13312 = (state_13349[7]);var inst_13316 = cljs.core.chunk_first.call(null,inst_13312);var inst_13317 = cljs.core.chunk_rest.call(null,inst_13312);var inst_13318 = cljs.core.count.call(null,inst_13316);var inst_13292 = inst_13317;var inst_13293 = inst_13316;var inst_13294 = inst_13318;var inst_13295 = 0;var state_13349__$1 = (function (){var statearr_13362 = state_13349;(statearr_13362[8] = inst_13293);
(statearr_13362[9] = inst_13292);
(statearr_13362[10] = inst_13295);
(statearr_13362[11] = inst_13294);
return statearr_13362;
})();var statearr_13363_13441 = state_13349__$1;(statearr_13363_13441[2] = null);
(statearr_13363_13441[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13350 === 5))
{var inst_13231 = cljs.core.deref.call(null,cs);var inst_13232 = cljs.core.seq.call(null,inst_13231);var inst_13233 = inst_13232;var inst_13234 = null;var inst_13235 = 0;var inst_13236 = 0;var state_13349__$1 = (function (){var statearr_13364 = state_13349;(statearr_13364[12] = inst_13233);
(statearr_13364[13] = inst_13236);
(statearr_13364[14] = inst_13235);
(statearr_13364[15] = inst_13234);
return statearr_13364;
})();var statearr_13365_13442 = state_13349__$1;(statearr_13365_13442[2] = null);
(statearr_13365_13442[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13350 === 37))
{var inst_13312 = (state_13349[7]);var inst_13321 = cljs.core.first.call(null,inst_13312);var state_13349__$1 = (function (){var statearr_13366 = state_13349;(statearr_13366[16] = inst_13321);
return statearr_13366;
})();var statearr_13367_13443 = state_13349__$1;(statearr_13367_13443[2] = null);
(statearr_13367_13443[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13350 === 6))
{var inst_13283 = cljs.core.deref.call(null,cs);var inst_13284 = cljs.core.keys.call(null,inst_13283);var inst_13285 = cljs.core.count.call(null,inst_13284);var inst_13286 = cljs.core.reset_BANG_.call(null,dctr,inst_13285);var inst_13291 = cljs.core.seq.call(null,inst_13284);var inst_13292 = inst_13291;var inst_13293 = null;var inst_13294 = 0;var inst_13295 = 0;var state_13349__$1 = (function (){var statearr_13368 = state_13349;(statearr_13368[17] = inst_13286);
(statearr_13368[8] = inst_13293);
(statearr_13368[9] = inst_13292);
(statearr_13368[10] = inst_13295);
(statearr_13368[11] = inst_13294);
return statearr_13368;
})();var statearr_13369_13444 = state_13349__$1;(statearr_13369_13444[2] = null);
(statearr_13369_13444[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13350 === 38))
{var inst_13333 = (state_13349[2]);var state_13349__$1 = state_13349;var statearr_13370_13445 = state_13349__$1;(statearr_13370_13445[2] = inst_13333);
(statearr_13370_13445[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13350 === 7))
{var inst_13345 = (state_13349[2]);var state_13349__$1 = state_13349;var statearr_13371_13446 = state_13349__$1;(statearr_13371_13446[2] = inst_13345);
(statearr_13371_13446[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13350 === 39))
{var inst_13312 = (state_13349[7]);var inst_13329 = (state_13349[2]);var inst_13330 = cljs.core.next.call(null,inst_13312);var inst_13292 = inst_13330;var inst_13293 = null;var inst_13294 = 0;var inst_13295 = 0;var state_13349__$1 = (function (){var statearr_13372 = state_13349;(statearr_13372[8] = inst_13293);
(statearr_13372[9] = inst_13292);
(statearr_13372[10] = inst_13295);
(statearr_13372[11] = inst_13294);
(statearr_13372[18] = inst_13329);
return statearr_13372;
})();var statearr_13373_13447 = state_13349__$1;(statearr_13373_13447[2] = null);
(statearr_13373_13447[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13350 === 8))
{var inst_13236 = (state_13349[13]);var inst_13235 = (state_13349[14]);var inst_13238 = (inst_13236 < inst_13235);var inst_13239 = inst_13238;var state_13349__$1 = state_13349;if(cljs.core.truth_(inst_13239))
{var statearr_13374_13448 = state_13349__$1;(statearr_13374_13448[1] = 10);
} else
{var statearr_13375_13449 = state_13349__$1;(statearr_13375_13449[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13350 === 40))
{var inst_13321 = (state_13349[16]);var inst_13322 = (state_13349[2]);var inst_13323 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13324 = cljs.core.async.untap_STAR_.call(null,m,inst_13321);var state_13349__$1 = (function (){var statearr_13376 = state_13349;(statearr_13376[19] = inst_13323);
(statearr_13376[20] = inst_13322);
return statearr_13376;
})();var statearr_13377_13450 = state_13349__$1;(statearr_13377_13450[2] = inst_13324);
(statearr_13377_13450[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13350 === 9))
{var inst_13281 = (state_13349[2]);var state_13349__$1 = state_13349;var statearr_13378_13451 = state_13349__$1;(statearr_13378_13451[2] = inst_13281);
(statearr_13378_13451[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13350 === 41))
{try{var inst_13321 = (state_13349[16]);var inst_13224 = (state_13349[5]);var inst_13327 = cljs.core.async.put_BANG_.call(null,inst_13321,inst_13224,done);var state_13349__$1 = state_13349;var statearr_13381_13452 = state_13349__$1;(statearr_13381_13452[2] = inst_13327);
(statearr_13381_13452[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e13379){if((e13379 instanceof Object))
{var ex__8214__auto__ = e13379;var statearr_13380_13453 = state_13349;(statearr_13380_13453[1] = 40);
(statearr_13380_13453[2] = ex__8214__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13379;
} else
{return null;
}
}
}} else
{if((state_val_13350 === 10))
{var inst_13236 = (state_13349[13]);var inst_13234 = (state_13349[15]);var inst_13242 = cljs.core._nth.call(null,inst_13234,inst_13236);var inst_13243 = cljs.core.nth.call(null,inst_13242,0,null);var inst_13244 = cljs.core.nth.call(null,inst_13242,1,null);var state_13349__$1 = (function (){var statearr_13382 = state_13349;(statearr_13382[21] = inst_13243);
return statearr_13382;
})();if(cljs.core.truth_(inst_13244))
{var statearr_13383_13454 = state_13349__$1;(statearr_13383_13454[1] = 13);
} else
{var statearr_13384_13455 = state_13349__$1;(statearr_13384_13455[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13350 === 42))
{var inst_13342 = (state_13349[2]);var state_13349__$1 = (function (){var statearr_13385 = state_13349;(statearr_13385[22] = inst_13342);
return statearr_13385;
})();var statearr_13386_13456 = state_13349__$1;(statearr_13386_13456[2] = null);
(statearr_13386_13456[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13350 === 11))
{var inst_13233 = (state_13349[12]);var inst_13253 = (state_13349[23]);var inst_13253__$1 = cljs.core.seq.call(null,inst_13233);var state_13349__$1 = (function (){var statearr_13387 = state_13349;(statearr_13387[23] = inst_13253__$1);
return statearr_13387;
})();if(inst_13253__$1)
{var statearr_13388_13457 = state_13349__$1;(statearr_13388_13457[1] = 16);
} else
{var statearr_13389_13458 = state_13349__$1;(statearr_13389_13458[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13350 === 12))
{var inst_13279 = (state_13349[2]);var state_13349__$1 = state_13349;var statearr_13390_13459 = state_13349__$1;(statearr_13390_13459[2] = inst_13279);
(statearr_13390_13459[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13350 === 13))
{var inst_13243 = (state_13349[21]);var inst_13246 = cljs.core.async.close_BANG_.call(null,inst_13243);var state_13349__$1 = state_13349;var statearr_13394_13460 = state_13349__$1;(statearr_13394_13460[2] = inst_13246);
(statearr_13394_13460[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13350 === 14))
{var state_13349__$1 = state_13349;var statearr_13395_13461 = state_13349__$1;(statearr_13395_13461[2] = null);
(statearr_13395_13461[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13350 === 15))
{var inst_13233 = (state_13349[12]);var inst_13236 = (state_13349[13]);var inst_13235 = (state_13349[14]);var inst_13234 = (state_13349[15]);var inst_13249 = (state_13349[2]);var inst_13250 = (inst_13236 + 1);var tmp13391 = inst_13233;var tmp13392 = inst_13235;var tmp13393 = inst_13234;var inst_13233__$1 = tmp13391;var inst_13234__$1 = tmp13393;var inst_13235__$1 = tmp13392;var inst_13236__$1 = inst_13250;var state_13349__$1 = (function (){var statearr_13396 = state_13349;(statearr_13396[12] = inst_13233__$1);
(statearr_13396[13] = inst_13236__$1);
(statearr_13396[14] = inst_13235__$1);
(statearr_13396[15] = inst_13234__$1);
(statearr_13396[24] = inst_13249);
return statearr_13396;
})();var statearr_13397_13462 = state_13349__$1;(statearr_13397_13462[2] = null);
(statearr_13397_13462[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13350 === 16))
{var inst_13253 = (state_13349[23]);var inst_13255 = cljs.core.chunked_seq_QMARK_.call(null,inst_13253);var state_13349__$1 = state_13349;if(inst_13255)
{var statearr_13398_13463 = state_13349__$1;(statearr_13398_13463[1] = 19);
} else
{var statearr_13399_13464 = state_13349__$1;(statearr_13399_13464[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13350 === 17))
{var state_13349__$1 = state_13349;var statearr_13400_13465 = state_13349__$1;(statearr_13400_13465[2] = null);
(statearr_13400_13465[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13350 === 18))
{var inst_13277 = (state_13349[2]);var state_13349__$1 = state_13349;var statearr_13401_13466 = state_13349__$1;(statearr_13401_13466[2] = inst_13277);
(statearr_13401_13466[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13350 === 19))
{var inst_13253 = (state_13349[23]);var inst_13257 = cljs.core.chunk_first.call(null,inst_13253);var inst_13258 = cljs.core.chunk_rest.call(null,inst_13253);var inst_13259 = cljs.core.count.call(null,inst_13257);var inst_13233 = inst_13258;var inst_13234 = inst_13257;var inst_13235 = inst_13259;var inst_13236 = 0;var state_13349__$1 = (function (){var statearr_13402 = state_13349;(statearr_13402[12] = inst_13233);
(statearr_13402[13] = inst_13236);
(statearr_13402[14] = inst_13235);
(statearr_13402[15] = inst_13234);
return statearr_13402;
})();var statearr_13403_13467 = state_13349__$1;(statearr_13403_13467[2] = null);
(statearr_13403_13467[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13350 === 20))
{var inst_13253 = (state_13349[23]);var inst_13263 = cljs.core.first.call(null,inst_13253);var inst_13264 = cljs.core.nth.call(null,inst_13263,0,null);var inst_13265 = cljs.core.nth.call(null,inst_13263,1,null);var state_13349__$1 = (function (){var statearr_13404 = state_13349;(statearr_13404[25] = inst_13264);
return statearr_13404;
})();if(cljs.core.truth_(inst_13265))
{var statearr_13405_13468 = state_13349__$1;(statearr_13405_13468[1] = 22);
} else
{var statearr_13406_13469 = state_13349__$1;(statearr_13406_13469[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13350 === 21))
{var inst_13274 = (state_13349[2]);var state_13349__$1 = state_13349;var statearr_13407_13470 = state_13349__$1;(statearr_13407_13470[2] = inst_13274);
(statearr_13407_13470[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13350 === 22))
{var inst_13264 = (state_13349[25]);var inst_13267 = cljs.core.async.close_BANG_.call(null,inst_13264);var state_13349__$1 = state_13349;var statearr_13408_13471 = state_13349__$1;(statearr_13408_13471[2] = inst_13267);
(statearr_13408_13471[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13350 === 23))
{var state_13349__$1 = state_13349;var statearr_13409_13472 = state_13349__$1;(statearr_13409_13472[2] = null);
(statearr_13409_13472[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13350 === 24))
{var inst_13253 = (state_13349[23]);var inst_13270 = (state_13349[2]);var inst_13271 = cljs.core.next.call(null,inst_13253);var inst_13233 = inst_13271;var inst_13234 = null;var inst_13235 = 0;var inst_13236 = 0;var state_13349__$1 = (function (){var statearr_13410 = state_13349;(statearr_13410[12] = inst_13233);
(statearr_13410[26] = inst_13270);
(statearr_13410[13] = inst_13236);
(statearr_13410[14] = inst_13235);
(statearr_13410[15] = inst_13234);
return statearr_13410;
})();var statearr_13411_13473 = state_13349__$1;(statearr_13411_13473[2] = null);
(statearr_13411_13473[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13350 === 25))
{var inst_13295 = (state_13349[10]);var inst_13294 = (state_13349[11]);var inst_13297 = (inst_13295 < inst_13294);var inst_13298 = inst_13297;var state_13349__$1 = state_13349;if(cljs.core.truth_(inst_13298))
{var statearr_13412_13474 = state_13349__$1;(statearr_13412_13474[1] = 27);
} else
{var statearr_13413_13475 = state_13349__$1;(statearr_13413_13475[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13350 === 26))
{var inst_13340 = (state_13349[2]);var state_13349__$1 = (function (){var statearr_13414 = state_13349;(statearr_13414[27] = inst_13340);
return statearr_13414;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13349__$1,42,dchan);
} else
{if((state_val_13350 === 27))
{var inst_13293 = (state_13349[8]);var inst_13295 = (state_13349[10]);var inst_13300 = cljs.core._nth.call(null,inst_13293,inst_13295);var state_13349__$1 = (function (){var statearr_13415 = state_13349;(statearr_13415[6] = inst_13300);
return statearr_13415;
})();var statearr_13416_13476 = state_13349__$1;(statearr_13416_13476[2] = null);
(statearr_13416_13476[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13350 === 28))
{var inst_13312 = (state_13349[7]);var inst_13292 = (state_13349[9]);var inst_13312__$1 = cljs.core.seq.call(null,inst_13292);var state_13349__$1 = (function (){var statearr_13420 = state_13349;(statearr_13420[7] = inst_13312__$1);
return statearr_13420;
})();if(inst_13312__$1)
{var statearr_13421_13477 = state_13349__$1;(statearr_13421_13477[1] = 33);
} else
{var statearr_13422_13478 = state_13349__$1;(statearr_13422_13478[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13350 === 29))
{var inst_13338 = (state_13349[2]);var state_13349__$1 = state_13349;var statearr_13423_13479 = state_13349__$1;(statearr_13423_13479[2] = inst_13338);
(statearr_13423_13479[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13350 === 30))
{var inst_13293 = (state_13349[8]);var inst_13292 = (state_13349[9]);var inst_13295 = (state_13349[10]);var inst_13294 = (state_13349[11]);var inst_13308 = (state_13349[2]);var inst_13309 = (inst_13295 + 1);var tmp13417 = inst_13293;var tmp13418 = inst_13292;var tmp13419 = inst_13294;var inst_13292__$1 = tmp13418;var inst_13293__$1 = tmp13417;var inst_13294__$1 = tmp13419;var inst_13295__$1 = inst_13309;var state_13349__$1 = (function (){var statearr_13424 = state_13349;(statearr_13424[28] = inst_13308);
(statearr_13424[8] = inst_13293__$1);
(statearr_13424[9] = inst_13292__$1);
(statearr_13424[10] = inst_13295__$1);
(statearr_13424[11] = inst_13294__$1);
return statearr_13424;
})();var statearr_13425_13480 = state_13349__$1;(statearr_13425_13480[2] = null);
(statearr_13425_13480[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13350 === 31))
{var inst_13300 = (state_13349[6]);var inst_13301 = (state_13349[2]);var inst_13302 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13303 = cljs.core.async.untap_STAR_.call(null,m,inst_13300);var state_13349__$1 = (function (){var statearr_13426 = state_13349;(statearr_13426[29] = inst_13302);
(statearr_13426[30] = inst_13301);
return statearr_13426;
})();var statearr_13427_13481 = state_13349__$1;(statearr_13427_13481[2] = inst_13303);
(statearr_13427_13481[1] = 30);
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
});return ((function (switch__8220__auto__){
return (function() {
var state_machine__8221__auto__ = null;
var state_machine__8221__auto____0 = (function (){var statearr_13429 = (new Array(31));(statearr_13429[0] = state_machine__8221__auto__);
(statearr_13429[1] = 1);
return statearr_13429;
});
var state_machine__8221__auto____1 = (function (state_13349){while(true){
var result__8222__auto__ = switch__8220__auto__.call(null,state_13349);if(cljs.core.keyword_identical_QMARK_.call(null,result__8222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8222__auto__;
}
break;
}
});
state_machine__8221__auto__ = function(state_13349){
switch(arguments.length){
case 0:
return state_machine__8221__auto____0.call(this);
case 1:
return state_machine__8221__auto____1.call(this,state_13349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8221__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8221__auto____0;
state_machine__8221__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8221__auto____1;
return state_machine__8221__auto__;
})()
;})(switch__8220__auto__))
})();var state__8274__auto__ = (function (){var statearr_13430 = f__8273__auto__.call(null);(statearr_13430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8272__auto___13431);
return statearr_13430;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8274__auto__);
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
{var x__6820__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6820__auto__)]);if(or__3943__auto__)
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
{var x__6820__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6820__auto__)]);if(or__3943__auto__)
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
{var x__6820__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6820__auto__)]);if(or__3943__auto__)
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
{var x__6820__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6820__auto__)]);if(or__3943__auto__)
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
{var x__6820__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6820__auto__)]);if(or__3943__auto__)
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
;var m = (function (){if(typeof cljs.core.async.t13602 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t13602');

/**
* @constructor
*/
cljs.core.async.t13602 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta13603){
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
this.meta13603 = meta13603;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13602.cljs$lang$type = true;
cljs.core.async.t13602.cljs$lang$ctorStr = "cljs.core.async/t13602";
cljs.core.async.t13602.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6744__auto__,writer__6745__auto__,opt__6746__auto__){return cljs.core._write.call(null,writer__6745__auto__,"cljs.core.async/t13602");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13602.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13602.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13602.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13602.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13602.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13602.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13602.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13602.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13602.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13604){var self__ = this;
return self__.meta13603;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13604,meta13603__$1){var self__ = this;
return (new cljs.core.async.t13602(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta13603__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13602 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13602(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13603){return (new cljs.core.async.t13602(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13603));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13602(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__8272__auto___13722 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8273__auto__ = (function (){var switch__8220__auto__ = (function (state_13675){var state_val_13676 = (state_13675[1]);if((state_val_13676 === 1))
{var inst_13608 = (state_13675[5]);var inst_13608__$1 = calc_state.call(null);var inst_13609 = cljs.core.seq_QMARK_.call(null,inst_13608__$1);var state_13675__$1 = (function (){var statearr_13677 = state_13675;(statearr_13677[5] = inst_13608__$1);
return statearr_13677;
})();if(inst_13609)
{var statearr_13678_13723 = state_13675__$1;(statearr_13678_13723[1] = 2);
} else
{var statearr_13679_13724 = state_13675__$1;(statearr_13679_13724[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13676 === 2))
{var inst_13608 = (state_13675[5]);var inst_13611 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13608);var state_13675__$1 = state_13675;var statearr_13680_13725 = state_13675__$1;(statearr_13680_13725[2] = inst_13611);
(statearr_13680_13725[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13676 === 3))
{var inst_13608 = (state_13675[5]);var state_13675__$1 = state_13675;var statearr_13681_13726 = state_13675__$1;(statearr_13681_13726[2] = inst_13608);
(statearr_13681_13726[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13676 === 4))
{var inst_13608 = (state_13675[5]);var inst_13614 = (state_13675[2]);var inst_13615 = cljs.core.get.call(null,inst_13614,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13616 = cljs.core.get.call(null,inst_13614,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13617 = cljs.core.get.call(null,inst_13614,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_13618 = inst_13608;var state_13675__$1 = (function (){var statearr_13682 = state_13675;(statearr_13682[6] = inst_13617);
(statearr_13682[7] = inst_13616);
(statearr_13682[8] = inst_13618);
(statearr_13682[9] = inst_13615);
return statearr_13682;
})();var statearr_13683_13727 = state_13675__$1;(statearr_13683_13727[2] = null);
(statearr_13683_13727[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13676 === 5))
{var inst_13618 = (state_13675[8]);var inst_13621 = cljs.core.seq_QMARK_.call(null,inst_13618);var state_13675__$1 = state_13675;if(inst_13621)
{var statearr_13684_13728 = state_13675__$1;(statearr_13684_13728[1] = 7);
} else
{var statearr_13685_13729 = state_13675__$1;(statearr_13685_13729[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13676 === 6))
{var inst_13673 = (state_13675[2]);var state_13675__$1 = state_13675;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13675__$1,inst_13673);
} else
{if((state_val_13676 === 7))
{var inst_13618 = (state_13675[8]);var inst_13623 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13618);var state_13675__$1 = state_13675;var statearr_13686_13730 = state_13675__$1;(statearr_13686_13730[2] = inst_13623);
(statearr_13686_13730[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13676 === 8))
{var inst_13618 = (state_13675[8]);var state_13675__$1 = state_13675;var statearr_13687_13731 = state_13675__$1;(statearr_13687_13731[2] = inst_13618);
(statearr_13687_13731[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13676 === 9))
{var inst_13626 = (state_13675[10]);var inst_13626__$1 = (state_13675[2]);var inst_13627 = cljs.core.get.call(null,inst_13626__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13628 = cljs.core.get.call(null,inst_13626__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13629 = cljs.core.get.call(null,inst_13626__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_13675__$1 = (function (){var statearr_13688 = state_13675;(statearr_13688[10] = inst_13626__$1);
(statearr_13688[11] = inst_13628);
(statearr_13688[12] = inst_13629);
return statearr_13688;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13675__$1,10,inst_13627);
} else
{if((state_val_13676 === 10))
{var inst_13635 = (state_13675[13]);var inst_13633 = (state_13675[14]);var inst_13632 = (state_13675[2]);var inst_13633__$1 = cljs.core.nth.call(null,inst_13632,0,null);var inst_13634 = cljs.core.nth.call(null,inst_13632,1,null);var inst_13635__$1 = (inst_13633__$1 == null);var state_13675__$1 = (function (){var statearr_13689 = state_13675;(statearr_13689[15] = inst_13634);
(statearr_13689[13] = inst_13635__$1);
(statearr_13689[14] = inst_13633__$1);
return statearr_13689;
})();if(cljs.core.truth_(inst_13635__$1))
{var statearr_13690_13732 = state_13675__$1;(statearr_13690_13732[1] = 11);
} else
{var statearr_13691_13733 = state_13675__$1;(statearr_13691_13733[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13676 === 11))
{var inst_13635 = (state_13675[13]);var state_13675__$1 = state_13675;var statearr_13692_13734 = state_13675__$1;(statearr_13692_13734[2] = inst_13635);
(statearr_13692_13734[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13676 === 12))
{var inst_13634 = (state_13675[15]);var inst_13638 = cljs.core._EQ_.call(null,inst_13634,change);var state_13675__$1 = state_13675;var statearr_13693_13735 = state_13675__$1;(statearr_13693_13735[2] = inst_13638);
(statearr_13693_13735[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13676 === 13))
{var inst_13640 = (state_13675[2]);var state_13675__$1 = state_13675;if(cljs.core.truth_(inst_13640))
{var statearr_13694_13736 = state_13675__$1;(statearr_13694_13736[1] = 14);
} else
{var statearr_13695_13737 = state_13675__$1;(statearr_13695_13737[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13676 === 14))
{var inst_13633 = (state_13675[14]);var inst_13642 = (inst_13633 == null);var state_13675__$1 = state_13675;if(cljs.core.truth_(inst_13642))
{var statearr_13696_13738 = state_13675__$1;(statearr_13696_13738[1] = 17);
} else
{var statearr_13697_13739 = state_13675__$1;(statearr_13697_13739[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13676 === 15))
{var inst_13634 = (state_13675[15]);var inst_13651 = (state_13675[16]);var inst_13629 = (state_13675[12]);var inst_13651__$1 = inst_13629.call(null,inst_13634);var state_13675__$1 = (function (){var statearr_13698 = state_13675;(statearr_13698[16] = inst_13651__$1);
return statearr_13698;
})();if(cljs.core.truth_(inst_13651__$1))
{var statearr_13699_13740 = state_13675__$1;(statearr_13699_13740[1] = 20);
} else
{var statearr_13700_13741 = state_13675__$1;(statearr_13700_13741[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13676 === 16))
{var inst_13671 = (state_13675[2]);var state_13675__$1 = state_13675;var statearr_13701_13742 = state_13675__$1;(statearr_13701_13742[2] = inst_13671);
(statearr_13701_13742[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13676 === 17))
{var inst_13634 = (state_13675[15]);var inst_13644 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13634);var state_13675__$1 = state_13675;var statearr_13702_13743 = state_13675__$1;(statearr_13702_13743[2] = inst_13644);
(statearr_13702_13743[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13676 === 18))
{var state_13675__$1 = state_13675;var statearr_13703_13744 = state_13675__$1;(statearr_13703_13744[2] = null);
(statearr_13703_13744[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13676 === 19))
{var inst_13647 = (state_13675[2]);var inst_13648 = calc_state.call(null);var inst_13618 = inst_13648;var state_13675__$1 = (function (){var statearr_13704 = state_13675;(statearr_13704[8] = inst_13618);
(statearr_13704[17] = inst_13647);
return statearr_13704;
})();var statearr_13705_13745 = state_13675__$1;(statearr_13705_13745[2] = null);
(statearr_13705_13745[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13676 === 20))
{var inst_13651 = (state_13675[16]);var state_13675__$1 = state_13675;var statearr_13706_13746 = state_13675__$1;(statearr_13706_13746[2] = inst_13651);
(statearr_13706_13746[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13676 === 21))
{var inst_13629 = (state_13675[12]);var inst_13654 = (state_13675[18]);var inst_13654__$1 = cljs.core.empty_QMARK_.call(null,inst_13629);var state_13675__$1 = (function (){var statearr_13707 = state_13675;(statearr_13707[18] = inst_13654__$1);
return statearr_13707;
})();if(inst_13654__$1)
{var statearr_13708_13747 = state_13675__$1;(statearr_13708_13747[1] = 23);
} else
{var statearr_13709_13748 = state_13675__$1;(statearr_13709_13748[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13676 === 22))
{var inst_13662 = (state_13675[2]);var state_13675__$1 = state_13675;if(cljs.core.truth_(inst_13662))
{var statearr_13710_13749 = state_13675__$1;(statearr_13710_13749[1] = 26);
} else
{var statearr_13711_13750 = state_13675__$1;(statearr_13711_13750[1] = 27);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13676 === 23))
{var inst_13634 = (state_13675[15]);var inst_13628 = (state_13675[11]);var inst_13656 = inst_13628.call(null,inst_13634);var inst_13657 = cljs.core.not.call(null,inst_13656);var state_13675__$1 = state_13675;var statearr_13712_13751 = state_13675__$1;(statearr_13712_13751[2] = inst_13657);
(statearr_13712_13751[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13676 === 24))
{var inst_13654 = (state_13675[18]);var state_13675__$1 = state_13675;var statearr_13713_13752 = state_13675__$1;(statearr_13713_13752[2] = inst_13654);
(statearr_13713_13752[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13676 === 25))
{var inst_13660 = (state_13675[2]);var state_13675__$1 = state_13675;var statearr_13714_13753 = state_13675__$1;(statearr_13714_13753[2] = inst_13660);
(statearr_13714_13753[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13676 === 26))
{var inst_13633 = (state_13675[14]);var state_13675__$1 = state_13675;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13675__$1,29,out,inst_13633);
} else
{if((state_val_13676 === 27))
{var state_13675__$1 = state_13675;var statearr_13715_13754 = state_13675__$1;(statearr_13715_13754[2] = null);
(statearr_13715_13754[1] = 28);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13676 === 28))
{var inst_13626 = (state_13675[10]);var inst_13668 = (state_13675[2]);var inst_13618 = inst_13626;var state_13675__$1 = (function (){var statearr_13716 = state_13675;(statearr_13716[8] = inst_13618);
(statearr_13716[19] = inst_13668);
return statearr_13716;
})();var statearr_13717_13755 = state_13675__$1;(statearr_13717_13755[2] = null);
(statearr_13717_13755[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13676 === 29))
{var inst_13665 = (state_13675[2]);var state_13675__$1 = state_13675;var statearr_13718_13756 = state_13675__$1;(statearr_13718_13756[2] = inst_13665);
(statearr_13718_13756[1] = 28);
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
});return ((function (switch__8220__auto__){
return (function() {
var state_machine__8221__auto__ = null;
var state_machine__8221__auto____0 = (function (){var statearr_13720 = (new Array(20));(statearr_13720[0] = state_machine__8221__auto__);
(statearr_13720[1] = 1);
return statearr_13720;
});
var state_machine__8221__auto____1 = (function (state_13675){while(true){
var result__8222__auto__ = switch__8220__auto__.call(null,state_13675);if(cljs.core.keyword_identical_QMARK_.call(null,result__8222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8222__auto__;
}
break;
}
});
state_machine__8221__auto__ = function(state_13675){
switch(arguments.length){
case 0:
return state_machine__8221__auto____0.call(this);
case 1:
return state_machine__8221__auto____1.call(this,state_13675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8221__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8221__auto____0;
state_machine__8221__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8221__auto____1;
return state_machine__8221__auto__;
})()
;})(switch__8220__auto__))
})();var state__8274__auto__ = (function (){var statearr_13721 = f__8273__auto__.call(null);(statearr_13721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8272__auto___13722);
return statearr_13721;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8274__auto__);
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
{var x__6820__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6820__auto__)]);if(or__3943__auto__)
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
{var x__6820__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6820__auto__)]);if(or__3943__auto__)
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
{var x__6820__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6820__auto__)]);if(or__3943__auto__)
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
{var x__6820__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6820__auto__)]);if(or__3943__auto__)
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
return (function (p1__13757_SHARP_){if(cljs.core.truth_(p1__13757_SHARP_.call(null,topic)))
{return p1__13757_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13757_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3943__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13881 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t13881');

/**
* @constructor
*/
cljs.core.async.t13881 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13882){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13882 = meta13882;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13881.cljs$lang$type = true;
cljs.core.async.t13881.cljs$lang$ctorStr = "cljs.core.async/t13881";
cljs.core.async.t13881.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6744__auto__,writer__6745__auto__,opt__6746__auto__){return cljs.core._write.call(null,writer__6745__auto__,"cljs.core.async/t13881");
});})(mults,ensure_mult))
;
cljs.core.async.t13881.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13881.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13881.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13881.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13881.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13881.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13881.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13881.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13883){var self__ = this;
return self__.meta13882;
});})(mults,ensure_mult))
;
cljs.core.async.t13881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13883,meta13882__$1){var self__ = this;
return (new cljs.core.async.t13881(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13882__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13881 = ((function (mults,ensure_mult){
return (function __GT_t13881(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13882){return (new cljs.core.async.t13881(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13882));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13881(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__8272__auto___14004 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8273__auto__ = (function (){var switch__8220__auto__ = (function (state_13956){var state_val_13957 = (state_13956[1]);if((state_val_13957 === 1))
{var state_13956__$1 = state_13956;var statearr_13958_14005 = state_13956__$1;(statearr_13958_14005[2] = null);
(statearr_13958_14005[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13957 === 2))
{var state_13956__$1 = state_13956;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13956__$1,4,ch);
} else
{if((state_val_13957 === 3))
{var inst_13954 = (state_13956[2]);var state_13956__$1 = state_13956;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13956__$1,inst_13954);
} else
{if((state_val_13957 === 4))
{var inst_13886 = (state_13956[5]);var inst_13886__$1 = (state_13956[2]);var inst_13887 = (inst_13886__$1 == null);var state_13956__$1 = (function (){var statearr_13959 = state_13956;(statearr_13959[5] = inst_13886__$1);
return statearr_13959;
})();if(cljs.core.truth_(inst_13887))
{var statearr_13960_14006 = state_13956__$1;(statearr_13960_14006[1] = 5);
} else
{var statearr_13961_14007 = state_13956__$1;(statearr_13961_14007[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13957 === 5))
{var inst_13893 = cljs.core.deref.call(null,mults);var inst_13894 = cljs.core.vals.call(null,inst_13893);var inst_13895 = cljs.core.seq.call(null,inst_13894);var inst_13896 = inst_13895;var inst_13897 = null;var inst_13898 = 0;var inst_13899 = 0;var state_13956__$1 = (function (){var statearr_13962 = state_13956;(statearr_13962[6] = inst_13898);
(statearr_13962[7] = inst_13899);
(statearr_13962[8] = inst_13897);
(statearr_13962[9] = inst_13896);
return statearr_13962;
})();var statearr_13963_14008 = state_13956__$1;(statearr_13963_14008[2] = null);
(statearr_13963_14008[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13957 === 6))
{var inst_13886 = (state_13956[5]);var inst_13936 = (state_13956[10]);var inst_13934 = (state_13956[11]);var inst_13934__$1 = topic_fn.call(null,inst_13886);var inst_13935 = cljs.core.deref.call(null,mults);var inst_13936__$1 = cljs.core.get.call(null,inst_13935,inst_13934__$1);var state_13956__$1 = (function (){var statearr_13964 = state_13956;(statearr_13964[10] = inst_13936__$1);
(statearr_13964[11] = inst_13934__$1);
return statearr_13964;
})();if(cljs.core.truth_(inst_13936__$1))
{var statearr_13965_14009 = state_13956__$1;(statearr_13965_14009[1] = 19);
} else
{var statearr_13966_14010 = state_13956__$1;(statearr_13966_14010[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13957 === 7))
{var inst_13952 = (state_13956[2]);var state_13956__$1 = state_13956;var statearr_13967_14011 = state_13956__$1;(statearr_13967_14011[2] = inst_13952);
(statearr_13967_14011[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13957 === 8))
{var inst_13898 = (state_13956[6]);var inst_13899 = (state_13956[7]);var inst_13901 = (inst_13899 < inst_13898);var inst_13902 = inst_13901;var state_13956__$1 = state_13956;if(cljs.core.truth_(inst_13902))
{var statearr_13971_14012 = state_13956__$1;(statearr_13971_14012[1] = 10);
} else
{var statearr_13972_14013 = state_13956__$1;(statearr_13972_14013[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13957 === 9))
{var inst_13932 = (state_13956[2]);var state_13956__$1 = state_13956;var statearr_13973_14014 = state_13956__$1;(statearr_13973_14014[2] = inst_13932);
(statearr_13973_14014[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13957 === 10))
{var inst_13898 = (state_13956[6]);var inst_13899 = (state_13956[7]);var inst_13897 = (state_13956[8]);var inst_13896 = (state_13956[9]);var inst_13904 = cljs.core._nth.call(null,inst_13897,inst_13899);var inst_13905 = cljs.core.async.muxch_STAR_.call(null,inst_13904);var inst_13906 = cljs.core.async.close_BANG_.call(null,inst_13905);var inst_13907 = (inst_13899 + 1);var tmp13968 = inst_13898;var tmp13969 = inst_13897;var tmp13970 = inst_13896;var inst_13896__$1 = tmp13970;var inst_13897__$1 = tmp13969;var inst_13898__$1 = tmp13968;var inst_13899__$1 = inst_13907;var state_13956__$1 = (function (){var statearr_13974 = state_13956;(statearr_13974[6] = inst_13898__$1);
(statearr_13974[7] = inst_13899__$1);
(statearr_13974[12] = inst_13906);
(statearr_13974[8] = inst_13897__$1);
(statearr_13974[9] = inst_13896__$1);
return statearr_13974;
})();var statearr_13975_14015 = state_13956__$1;(statearr_13975_14015[2] = null);
(statearr_13975_14015[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13957 === 11))
{var inst_13910 = (state_13956[13]);var inst_13896 = (state_13956[9]);var inst_13910__$1 = cljs.core.seq.call(null,inst_13896);var state_13956__$1 = (function (){var statearr_13976 = state_13956;(statearr_13976[13] = inst_13910__$1);
return statearr_13976;
})();if(inst_13910__$1)
{var statearr_13977_14016 = state_13956__$1;(statearr_13977_14016[1] = 13);
} else
{var statearr_13978_14017 = state_13956__$1;(statearr_13978_14017[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13957 === 12))
{var inst_13930 = (state_13956[2]);var state_13956__$1 = state_13956;var statearr_13979_14018 = state_13956__$1;(statearr_13979_14018[2] = inst_13930);
(statearr_13979_14018[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13957 === 13))
{var inst_13910 = (state_13956[13]);var inst_13912 = cljs.core.chunked_seq_QMARK_.call(null,inst_13910);var state_13956__$1 = state_13956;if(inst_13912)
{var statearr_13980_14019 = state_13956__$1;(statearr_13980_14019[1] = 16);
} else
{var statearr_13981_14020 = state_13956__$1;(statearr_13981_14020[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13957 === 14))
{var state_13956__$1 = state_13956;var statearr_13982_14021 = state_13956__$1;(statearr_13982_14021[2] = null);
(statearr_13982_14021[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13957 === 15))
{var inst_13928 = (state_13956[2]);var state_13956__$1 = state_13956;var statearr_13983_14022 = state_13956__$1;(statearr_13983_14022[2] = inst_13928);
(statearr_13983_14022[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13957 === 16))
{var inst_13910 = (state_13956[13]);var inst_13914 = cljs.core.chunk_first.call(null,inst_13910);var inst_13915 = cljs.core.chunk_rest.call(null,inst_13910);var inst_13916 = cljs.core.count.call(null,inst_13914);var inst_13896 = inst_13915;var inst_13897 = inst_13914;var inst_13898 = inst_13916;var inst_13899 = 0;var state_13956__$1 = (function (){var statearr_13984 = state_13956;(statearr_13984[6] = inst_13898);
(statearr_13984[7] = inst_13899);
(statearr_13984[8] = inst_13897);
(statearr_13984[9] = inst_13896);
return statearr_13984;
})();var statearr_13985_14023 = state_13956__$1;(statearr_13985_14023[2] = null);
(statearr_13985_14023[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13957 === 17))
{var inst_13910 = (state_13956[13]);var inst_13919 = cljs.core.first.call(null,inst_13910);var inst_13920 = cljs.core.async.muxch_STAR_.call(null,inst_13919);var inst_13921 = cljs.core.async.close_BANG_.call(null,inst_13920);var inst_13922 = cljs.core.next.call(null,inst_13910);var inst_13896 = inst_13922;var inst_13897 = null;var inst_13898 = 0;var inst_13899 = 0;var state_13956__$1 = (function (){var statearr_13986 = state_13956;(statearr_13986[6] = inst_13898);
(statearr_13986[7] = inst_13899);
(statearr_13986[8] = inst_13897);
(statearr_13986[14] = inst_13921);
(statearr_13986[9] = inst_13896);
return statearr_13986;
})();var statearr_13987_14024 = state_13956__$1;(statearr_13987_14024[2] = null);
(statearr_13987_14024[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13957 === 18))
{var inst_13925 = (state_13956[2]);var state_13956__$1 = state_13956;var statearr_13988_14025 = state_13956__$1;(statearr_13988_14025[2] = inst_13925);
(statearr_13988_14025[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13957 === 19))
{var state_13956__$1 = state_13956;var statearr_13989_14026 = state_13956__$1;(statearr_13989_14026[2] = null);
(statearr_13989_14026[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13957 === 20))
{var state_13956__$1 = state_13956;var statearr_13990_14027 = state_13956__$1;(statearr_13990_14027[2] = null);
(statearr_13990_14027[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13957 === 21))
{var inst_13949 = (state_13956[2]);var state_13956__$1 = (function (){var statearr_13991 = state_13956;(statearr_13991[15] = inst_13949);
return statearr_13991;
})();var statearr_13992_14028 = state_13956__$1;(statearr_13992_14028[2] = null);
(statearr_13992_14028[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13957 === 22))
{var inst_13946 = (state_13956[2]);var state_13956__$1 = state_13956;var statearr_13993_14029 = state_13956__$1;(statearr_13993_14029[2] = inst_13946);
(statearr_13993_14029[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13957 === 23))
{var inst_13934 = (state_13956[11]);var inst_13938 = (state_13956[2]);var inst_13939 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13934);var state_13956__$1 = (function (){var statearr_13994 = state_13956;(statearr_13994[16] = inst_13938);
return statearr_13994;
})();var statearr_13995_14030 = state_13956__$1;(statearr_13995_14030[2] = inst_13939);
(statearr_13995_14030[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13957 === 24))
{try{var inst_13886 = (state_13956[5]);var inst_13936 = (state_13956[10]);var inst_13942 = cljs.core.async.muxch_STAR_.call(null,inst_13936);var state_13956__$1 = state_13956;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13956__$1,25,inst_13942,inst_13886);
}catch (e13996){if((e13996 instanceof Object))
{var ex__8214__auto__ = e13996;var statearr_13997_14031 = state_13956;(statearr_13997_14031[1] = 23);
(statearr_13997_14031[2] = ex__8214__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13996;
} else
{return null;
}
}
}} else
{if((state_val_13957 === 25))
{try{var inst_13944 = (state_13956[2]);var state_13956__$1 = state_13956;var statearr_14000_14032 = state_13956__$1;(statearr_14000_14032[2] = inst_13944);
(statearr_14000_14032[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e13998){if((e13998 instanceof Object))
{var ex__8214__auto__ = e13998;var statearr_13999_14033 = state_13956;(statearr_13999_14033[1] = 23);
(statearr_13999_14033[2] = ex__8214__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13998;
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
});return ((function (switch__8220__auto__){
return (function() {
var state_machine__8221__auto__ = null;
var state_machine__8221__auto____0 = (function (){var statearr_14002 = (new Array(17));(statearr_14002[0] = state_machine__8221__auto__);
(statearr_14002[1] = 1);
return statearr_14002;
});
var state_machine__8221__auto____1 = (function (state_13956){while(true){
var result__8222__auto__ = switch__8220__auto__.call(null,state_13956);if(cljs.core.keyword_identical_QMARK_.call(null,result__8222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8222__auto__;
}
break;
}
});
state_machine__8221__auto__ = function(state_13956){
switch(arguments.length){
case 0:
return state_machine__8221__auto____0.call(this);
case 1:
return state_machine__8221__auto____1.call(this,state_13956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8221__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8221__auto____0;
state_machine__8221__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8221__auto____1;
return state_machine__8221__auto__;
})()
;})(switch__8220__auto__))
})();var state__8274__auto__ = (function (){var statearr_14003 = f__8273__auto__.call(null);(statearr_14003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8272__auto___14004);
return statearr_14003;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8274__auto__);
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
,cljs.core.range.call(null,cnt));var c__8272__auto___14164 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8273__auto__ = (function (){var switch__8220__auto__ = (function (state_14136){var state_val_14137 = (state_14136[1]);if((state_val_14137 === 1))
{var state_14136__$1 = state_14136;var statearr_14138_14165 = state_14136__$1;(statearr_14138_14165[2] = null);
(statearr_14138_14165[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14137 === 2))
{var inst_14100 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14101 = 0;var state_14136__$1 = (function (){var statearr_14139 = state_14136;(statearr_14139[5] = inst_14101);
(statearr_14139[6] = inst_14100);
return statearr_14139;
})();var statearr_14140_14166 = state_14136__$1;(statearr_14140_14166[2] = null);
(statearr_14140_14166[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14137 === 3))
{var inst_14134 = (state_14136[2]);var state_14136__$1 = state_14136;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14136__$1,inst_14134);
} else
{if((state_val_14137 === 4))
{var inst_14101 = (state_14136[5]);var inst_14103 = (inst_14101 < cnt);var state_14136__$1 = state_14136;if(cljs.core.truth_(inst_14103))
{var statearr_14141_14167 = state_14136__$1;(statearr_14141_14167[1] = 6);
} else
{var statearr_14142_14168 = state_14136__$1;(statearr_14142_14168[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14137 === 5))
{var inst_14120 = (state_14136[2]);var state_14136__$1 = (function (){var statearr_14143 = state_14136;(statearr_14143[7] = inst_14120);
return statearr_14143;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14136__$1,12,dchan);
} else
{if((state_val_14137 === 6))
{var state_14136__$1 = state_14136;var statearr_14144_14169 = state_14136__$1;(statearr_14144_14169[2] = null);
(statearr_14144_14169[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14137 === 7))
{var state_14136__$1 = state_14136;var statearr_14145_14170 = state_14136__$1;(statearr_14145_14170[2] = null);
(statearr_14145_14170[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14137 === 8))
{var inst_14118 = (state_14136[2]);var state_14136__$1 = state_14136;var statearr_14146_14171 = state_14136__$1;(statearr_14146_14171[2] = inst_14118);
(statearr_14146_14171[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14137 === 9))
{var inst_14101 = (state_14136[5]);var inst_14113 = (state_14136[2]);var inst_14114 = (inst_14101 + 1);var inst_14101__$1 = inst_14114;var state_14136__$1 = (function (){var statearr_14147 = state_14136;(statearr_14147[5] = inst_14101__$1);
(statearr_14147[8] = inst_14113);
return statearr_14147;
})();var statearr_14148_14172 = state_14136__$1;(statearr_14148_14172[2] = null);
(statearr_14148_14172[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14137 === 10))
{var inst_14105 = (state_14136[2]);var inst_14106 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14136__$1 = (function (){var statearr_14149 = state_14136;(statearr_14149[9] = inst_14105);
return statearr_14149;
})();var statearr_14150_14173 = state_14136__$1;(statearr_14150_14173[2] = inst_14106);
(statearr_14150_14173[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14137 === 11))
{try{var inst_14101 = (state_14136[5]);var inst_14109 = chs__$1.call(null,inst_14101);var inst_14110 = done.call(null,inst_14101);var inst_14111 = cljs.core.async.take_BANG_.call(null,inst_14109,inst_14110);var state_14136__$1 = state_14136;var statearr_14153_14174 = state_14136__$1;(statearr_14153_14174[2] = inst_14111);
(statearr_14153_14174[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e14151){if((e14151 instanceof Object))
{var ex__8214__auto__ = e14151;var statearr_14152_14175 = state_14136;(statearr_14152_14175[1] = 10);
(statearr_14152_14175[2] = ex__8214__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14151;
} else
{return null;
}
}
}} else
{if((state_val_14137 === 12))
{var inst_14122 = (state_14136[10]);var inst_14122__$1 = (state_14136[2]);var inst_14123 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14122__$1);var state_14136__$1 = (function (){var statearr_14154 = state_14136;(statearr_14154[10] = inst_14122__$1);
return statearr_14154;
})();if(cljs.core.truth_(inst_14123))
{var statearr_14155_14176 = state_14136__$1;(statearr_14155_14176[1] = 13);
} else
{var statearr_14156_14177 = state_14136__$1;(statearr_14156_14177[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14137 === 13))
{var inst_14125 = cljs.core.async.close_BANG_.call(null,out);var state_14136__$1 = state_14136;var statearr_14157_14178 = state_14136__$1;(statearr_14157_14178[2] = inst_14125);
(statearr_14157_14178[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14137 === 14))
{var inst_14122 = (state_14136[10]);var inst_14127 = cljs.core.apply.call(null,f,inst_14122);var state_14136__$1 = state_14136;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14136__$1,16,out,inst_14127);
} else
{if((state_val_14137 === 15))
{var inst_14132 = (state_14136[2]);var state_14136__$1 = state_14136;var statearr_14158_14179 = state_14136__$1;(statearr_14158_14179[2] = inst_14132);
(statearr_14158_14179[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14137 === 16))
{var inst_14129 = (state_14136[2]);var state_14136__$1 = (function (){var statearr_14159 = state_14136;(statearr_14159[11] = inst_14129);
return statearr_14159;
})();var statearr_14160_14180 = state_14136__$1;(statearr_14160_14180[2] = null);
(statearr_14160_14180[1] = 2);
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
});return ((function (switch__8220__auto__){
return (function() {
var state_machine__8221__auto__ = null;
var state_machine__8221__auto____0 = (function (){var statearr_14162 = (new Array(12));(statearr_14162[0] = state_machine__8221__auto__);
(statearr_14162[1] = 1);
return statearr_14162;
});
var state_machine__8221__auto____1 = (function (state_14136){while(true){
var result__8222__auto__ = switch__8220__auto__.call(null,state_14136);if(cljs.core.keyword_identical_QMARK_.call(null,result__8222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8222__auto__;
}
break;
}
});
state_machine__8221__auto__ = function(state_14136){
switch(arguments.length){
case 0:
return state_machine__8221__auto____0.call(this);
case 1:
return state_machine__8221__auto____1.call(this,state_14136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8221__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8221__auto____0;
state_machine__8221__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8221__auto____1;
return state_machine__8221__auto__;
})()
;})(switch__8220__auto__))
})();var state__8274__auto__ = (function (){var statearr_14163 = f__8273__auto__.call(null);(statearr_14163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8272__auto___14164);
return statearr_14163;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8274__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8272__auto___14280 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8273__auto__ = (function (){var switch__8220__auto__ = (function (state_14260){var state_val_14261 = (state_14260[1]);if((state_val_14261 === 1))
{var inst_14231 = cljs.core.vec.call(null,chs);var inst_14232 = inst_14231;var state_14260__$1 = (function (){var statearr_14262 = state_14260;(statearr_14262[5] = inst_14232);
return statearr_14262;
})();var statearr_14263_14281 = state_14260__$1;(statearr_14263_14281[2] = null);
(statearr_14263_14281[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14261 === 2))
{var inst_14232 = (state_14260[5]);var inst_14234 = cljs.core.count.call(null,inst_14232);var inst_14235 = (inst_14234 > 0);var state_14260__$1 = state_14260;if(cljs.core.truth_(inst_14235))
{var statearr_14264_14282 = state_14260__$1;(statearr_14264_14282[1] = 4);
} else
{var statearr_14265_14283 = state_14260__$1;(statearr_14265_14283[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14261 === 3))
{var inst_14258 = (state_14260[2]);var state_14260__$1 = state_14260;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14260__$1,inst_14258);
} else
{if((state_val_14261 === 4))
{var inst_14232 = (state_14260[5]);var state_14260__$1 = state_14260;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14260__$1,7,inst_14232);
} else
{if((state_val_14261 === 5))
{var inst_14254 = cljs.core.async.close_BANG_.call(null,out);var state_14260__$1 = state_14260;var statearr_14266_14284 = state_14260__$1;(statearr_14266_14284[2] = inst_14254);
(statearr_14266_14284[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14261 === 6))
{var inst_14256 = (state_14260[2]);var state_14260__$1 = state_14260;var statearr_14267_14285 = state_14260__$1;(statearr_14267_14285[2] = inst_14256);
(statearr_14267_14285[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14261 === 7))
{var inst_14240 = (state_14260[6]);var inst_14239 = (state_14260[7]);var inst_14239__$1 = (state_14260[2]);var inst_14240__$1 = cljs.core.nth.call(null,inst_14239__$1,0,null);var inst_14241 = cljs.core.nth.call(null,inst_14239__$1,1,null);var inst_14242 = (inst_14240__$1 == null);var state_14260__$1 = (function (){var statearr_14268 = state_14260;(statearr_14268[8] = inst_14241);
(statearr_14268[6] = inst_14240__$1);
(statearr_14268[7] = inst_14239__$1);
return statearr_14268;
})();if(cljs.core.truth_(inst_14242))
{var statearr_14269_14286 = state_14260__$1;(statearr_14269_14286[1] = 8);
} else
{var statearr_14270_14287 = state_14260__$1;(statearr_14270_14287[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14261 === 8))
{var inst_14241 = (state_14260[8]);var inst_14240 = (state_14260[6]);var inst_14239 = (state_14260[7]);var inst_14232 = (state_14260[5]);var inst_14244 = (function (){var c = inst_14241;var v = inst_14240;var vec__14237 = inst_14239;var cs = inst_14232;return ((function (c,v,vec__14237,cs,inst_14241,inst_14240,inst_14239,inst_14232,state_val_14261){
return (function (p1__14181_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14181_SHARP_);
});
;})(c,v,vec__14237,cs,inst_14241,inst_14240,inst_14239,inst_14232,state_val_14261))
})();var inst_14245 = cljs.core.filterv.call(null,inst_14244,inst_14232);var inst_14232__$1 = inst_14245;var state_14260__$1 = (function (){var statearr_14271 = state_14260;(statearr_14271[5] = inst_14232__$1);
return statearr_14271;
})();var statearr_14272_14288 = state_14260__$1;(statearr_14272_14288[2] = null);
(statearr_14272_14288[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14261 === 9))
{var inst_14240 = (state_14260[6]);var state_14260__$1 = state_14260;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14260__$1,11,out,inst_14240);
} else
{if((state_val_14261 === 10))
{var inst_14252 = (state_14260[2]);var state_14260__$1 = state_14260;var statearr_14274_14289 = state_14260__$1;(statearr_14274_14289[2] = inst_14252);
(statearr_14274_14289[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14261 === 11))
{var inst_14232 = (state_14260[5]);var inst_14249 = (state_14260[2]);var tmp14273 = inst_14232;var inst_14232__$1 = tmp14273;var state_14260__$1 = (function (){var statearr_14275 = state_14260;(statearr_14275[9] = inst_14249);
(statearr_14275[5] = inst_14232__$1);
return statearr_14275;
})();var statearr_14276_14290 = state_14260__$1;(statearr_14276_14290[2] = null);
(statearr_14276_14290[1] = 2);
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
});return ((function (switch__8220__auto__){
return (function() {
var state_machine__8221__auto__ = null;
var state_machine__8221__auto____0 = (function (){var statearr_14278 = (new Array(10));(statearr_14278[0] = state_machine__8221__auto__);
(statearr_14278[1] = 1);
return statearr_14278;
});
var state_machine__8221__auto____1 = (function (state_14260){while(true){
var result__8222__auto__ = switch__8220__auto__.call(null,state_14260);if(cljs.core.keyword_identical_QMARK_.call(null,result__8222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8222__auto__;
}
break;
}
});
state_machine__8221__auto__ = function(state_14260){
switch(arguments.length){
case 0:
return state_machine__8221__auto____0.call(this);
case 1:
return state_machine__8221__auto____1.call(this,state_14260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8221__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8221__auto____0;
state_machine__8221__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8221__auto____1;
return state_machine__8221__auto__;
})()
;})(switch__8220__auto__))
})();var state__8274__auto__ = (function (){var statearr_14279 = f__8273__auto__.call(null);(statearr_14279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8272__auto___14280);
return statearr_14279;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8274__auto__);
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
