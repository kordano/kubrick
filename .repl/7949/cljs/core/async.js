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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12045 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12045');

/**
* @constructor
*/
cljs.core.async.t12045 = (function (f,fn_handler,meta12046){
this.f = f;
this.fn_handler = fn_handler;
this.meta12046 = meta12046;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12045.cljs$lang$type = true;
cljs.core.async.t12045.cljs$lang$ctorStr = "cljs.core.async/t12045";
cljs.core.async.t12045.cljs$lang$ctorPrWriter = (function (this__6740__auto__,writer__6741__auto__,opt__6742__auto__){return cljs.core._write.call(null,writer__6741__auto__,"cljs.core.async/t12045");
});
cljs.core.async.t12045.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12045.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return true;
});
cljs.core.async.t12045.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
return self__.f;
});
cljs.core.async.t12045.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12047){var self__ = this;
return self__.meta12046;
});
cljs.core.async.t12045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12047,meta12046__$1){var self__ = this;
return (new cljs.core.async.t12045(self__.f,self__.fn_handler,meta12046__$1));
});
cljs.core.async.__GT_t12045 = (function __GT_t12045(f__$1,fn_handler__$1,meta12046){return (new cljs.core.async.t12045(f__$1,fn_handler__$1,meta12046));
});
}
return (new cljs.core.async.t12045(f,fn_handler,null));
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
{var val_12048 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12048);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_12048);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__7002__auto___12049 = n;var x_12050 = 0;while(true){
if((x_12050 < n__7002__auto___12049))
{(a[x_12050] = 0);
{
var G__12051 = (x_12050 + 1);
x_12050 = G__12051;
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
var G__12052 = (i + 1);
i = G__12052;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12056 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12056');

/**
* @constructor
*/
cljs.core.async.t12056 = (function (flag,alt_flag,meta12057){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12057 = meta12057;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12056.cljs$lang$type = true;
cljs.core.async.t12056.cljs$lang$ctorStr = "cljs.core.async/t12056";
cljs.core.async.t12056.cljs$lang$ctorPrWriter = (function (this__6740__auto__,writer__6741__auto__,opt__6742__auto__){return cljs.core._write.call(null,writer__6741__auto__,"cljs.core.async/t12056");
});
cljs.core.async.t12056.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12056.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t12056.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t12056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12058){var self__ = this;
return self__.meta12057;
});
cljs.core.async.t12056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12058,meta12057__$1){var self__ = this;
return (new cljs.core.async.t12056(self__.flag,self__.alt_flag,meta12057__$1));
});
cljs.core.async.__GT_t12056 = (function __GT_t12056(flag__$1,alt_flag__$1,meta12057){return (new cljs.core.async.t12056(flag__$1,alt_flag__$1,meta12057));
});
}
return (new cljs.core.async.t12056(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12062 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12062');

/**
* @constructor
*/
cljs.core.async.t12062 = (function (cb,flag,alt_handler,meta12063){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12063 = meta12063;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12062.cljs$lang$type = true;
cljs.core.async.t12062.cljs$lang$ctorStr = "cljs.core.async/t12062";
cljs.core.async.t12062.cljs$lang$ctorPrWriter = (function (this__6740__auto__,writer__6741__auto__,opt__6742__auto__){return cljs.core._write.call(null,writer__6741__auto__,"cljs.core.async/t12062");
});
cljs.core.async.t12062.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12062.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12062.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12064){var self__ = this;
return self__.meta12063;
});
cljs.core.async.t12062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12064,meta12063__$1){var self__ = this;
return (new cljs.core.async.t12062(self__.cb,self__.flag,self__.alt_handler,meta12063__$1));
});
cljs.core.async.__GT_t12062 = (function __GT_t12062(cb__$1,flag__$1,alt_handler__$1,meta12063){return (new cljs.core.async.t12062(cb__$1,flag__$1,alt_handler__$1,meta12063));
});
}
return (new cljs.core.async.t12062(cb,flag,alt_handler,null));
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
return (function (p1__12065_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__12065_SHARP_,port], true));
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
var G__12066 = (i + 1);
i = G__12066;
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
var alts_BANG___delegate = function (ports,p__12067){var map__12069 = p__12067;var map__12069__$1 = ((cljs.core.seq_QMARK_.call(null,map__12069))?cljs.core.apply.call(null,cljs.core.hash_map,map__12069):map__12069);var opts = map__12069__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__12067 = null;if (arguments.length > 1) {
  p__12067 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12067);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12070){
var ports = cljs.core.first(arglist__12070);
var p__12067 = cljs.core.rest(arglist__12070);
return alts_BANG___delegate(ports,p__12067);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t12078 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12078');

/**
* @constructor
*/
cljs.core.async.t12078 = (function (ch,f,map_LT_,meta12079){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12079 = meta12079;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12078.cljs$lang$type = true;
cljs.core.async.t12078.cljs$lang$ctorStr = "cljs.core.async/t12078";
cljs.core.async.t12078.cljs$lang$ctorPrWriter = (function (this__6740__auto__,writer__6741__auto__,opt__6742__auto__){return cljs.core._write.call(null,writer__6741__auto__,"cljs.core.async/t12078");
});
cljs.core.async.t12078.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12078.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t12078.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12078.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t12081 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12081');

/**
* @constructor
*/
cljs.core.async.t12081 = (function (fn1,_,meta12079,ch,f,map_LT_,meta12082){
this.fn1 = fn1;
this._ = _;
this.meta12079 = meta12079;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12082 = meta12082;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12081.cljs$lang$type = true;
cljs.core.async.t12081.cljs$lang$ctorStr = "cljs.core.async/t12081";
cljs.core.async.t12081.cljs$lang$ctorPrWriter = (function (this__6740__auto__,writer__6741__auto__,opt__6742__auto__){return cljs.core._write.call(null,writer__6741__auto__,"cljs.core.async/t12081");
});
cljs.core.async.t12081.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12081.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$2){var self__ = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t12081.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$2){var self__ = this;
return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t12081.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$2){var self__ = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1){
return (function (p1__12071_SHARP_){return f1.call(null,(((p1__12071_SHARP_ == null))?null:self__.f.call(null,p1__12071_SHARP_)));
});
;})(f1))
});
cljs.core.async.t12081.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12083){var self__ = this;
return self__.meta12082;
});
cljs.core.async.t12081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12083,meta12082__$1){var self__ = this;
return (new cljs.core.async.t12081(self__.fn1,self__._,self__.meta12079,self__.ch,self__.f,self__.map_LT_,meta12082__$1));
});
cljs.core.async.__GT_t12081 = (function __GT_t12081(fn1__$1,___$1,meta12079__$1,ch__$2,f__$2,map_LT___$2,meta12082){return (new cljs.core.async.t12081(fn1__$1,___$1,meta12079__$1,ch__$2,f__$2,map_LT___$2,meta12082));
});
}
return (new cljs.core.async.t12081(fn1,_,self__.meta12079,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t12078.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12078.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12078.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12080){var self__ = this;
return self__.meta12079;
});
cljs.core.async.t12078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12080,meta12079__$1){var self__ = this;
return (new cljs.core.async.t12078(self__.ch,self__.f,self__.map_LT_,meta12079__$1));
});
cljs.core.async.__GT_t12078 = (function __GT_t12078(ch__$1,f__$1,map_LT___$1,meta12079){return (new cljs.core.async.t12078(ch__$1,f__$1,map_LT___$1,meta12079));
});
}
return (new cljs.core.async.t12078(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t12087 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12087');

/**
* @constructor
*/
cljs.core.async.t12087 = (function (ch,f,map_GT_,meta12088){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta12088 = meta12088;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12087.cljs$lang$type = true;
cljs.core.async.t12087.cljs$lang$ctorStr = "cljs.core.async/t12087";
cljs.core.async.t12087.cljs$lang$ctorPrWriter = (function (this__6740__auto__,writer__6741__auto__,opt__6742__auto__){return cljs.core._write.call(null,writer__6741__auto__,"cljs.core.async/t12087");
});
cljs.core.async.t12087.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12087.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t12087.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12087.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12087.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12087.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12089){var self__ = this;
return self__.meta12088;
});
cljs.core.async.t12087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12089,meta12088__$1){var self__ = this;
return (new cljs.core.async.t12087(self__.ch,self__.f,self__.map_GT_,meta12088__$1));
});
cljs.core.async.__GT_t12087 = (function __GT_t12087(ch__$1,f__$1,map_GT___$1,meta12088){return (new cljs.core.async.t12087(ch__$1,f__$1,map_GT___$1,meta12088));
});
}
return (new cljs.core.async.t12087(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t12093 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12093');

/**
* @constructor
*/
cljs.core.async.t12093 = (function (ch,p,filter_GT_,meta12094){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta12094 = meta12094;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12093.cljs$lang$type = true;
cljs.core.async.t12093.cljs$lang$ctorStr = "cljs.core.async/t12093";
cljs.core.async.t12093.cljs$lang$ctorPrWriter = (function (this__6740__auto__,writer__6741__auto__,opt__6742__auto__){return cljs.core._write.call(null,writer__6741__auto__,"cljs.core.async/t12093");
});
cljs.core.async.t12093.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12093.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t12093.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12093.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12093.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12093.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12095){var self__ = this;
return self__.meta12094;
});
cljs.core.async.t12093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12095,meta12094__$1){var self__ = this;
return (new cljs.core.async.t12093(self__.ch,self__.p,self__.filter_GT_,meta12094__$1));
});
cljs.core.async.__GT_t12093 = (function __GT_t12093(ch__$1,p__$1,filter_GT___$1,meta12094){return (new cljs.core.async.t12093(ch__$1,p__$1,filter_GT___$1,meta12094));
});
}
return (new cljs.core.async.t12093(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8281__auto___12170 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8282__auto__ = (function (){var switch__8218__auto__ = (function (state_12153){var state_val_12154 = (state_12153[1]);if((state_val_12154 === 1))
{var state_12153__$1 = state_12153;var statearr_12155_12171 = state_12153__$1;(statearr_12155_12171[2] = null);
(statearr_12155_12171[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12154 === 2))
{var state_12153__$1 = state_12153;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12153__$1,4,ch);
} else
{if((state_val_12154 === 3))
{var inst_12151 = (state_12153[2]);var state_12153__$1 = state_12153;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12153__$1,inst_12151);
} else
{if((state_val_12154 === 4))
{var inst_12135 = (state_12153[5]);var inst_12135__$1 = (state_12153[2]);var inst_12136 = (inst_12135__$1 == null);var state_12153__$1 = (function (){var statearr_12156 = state_12153;(statearr_12156[5] = inst_12135__$1);
return statearr_12156;
})();if(cljs.core.truth_(inst_12136))
{var statearr_12157_12172 = state_12153__$1;(statearr_12157_12172[1] = 5);
} else
{var statearr_12158_12173 = state_12153__$1;(statearr_12158_12173[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12154 === 5))
{var inst_12138 = cljs.core.async.close_BANG_.call(null,out);var state_12153__$1 = state_12153;var statearr_12159_12174 = state_12153__$1;(statearr_12159_12174[2] = inst_12138);
(statearr_12159_12174[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12154 === 6))
{var inst_12135 = (state_12153[5]);var inst_12140 = p.call(null,inst_12135);var state_12153__$1 = state_12153;if(cljs.core.truth_(inst_12140))
{var statearr_12160_12175 = state_12153__$1;(statearr_12160_12175[1] = 8);
} else
{var statearr_12161_12176 = state_12153__$1;(statearr_12161_12176[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12154 === 7))
{var inst_12149 = (state_12153[2]);var state_12153__$1 = state_12153;var statearr_12162_12177 = state_12153__$1;(statearr_12162_12177[2] = inst_12149);
(statearr_12162_12177[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12154 === 8))
{var inst_12135 = (state_12153[5]);var state_12153__$1 = state_12153;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12153__$1,11,out,inst_12135);
} else
{if((state_val_12154 === 9))
{var state_12153__$1 = state_12153;var statearr_12163_12178 = state_12153__$1;(statearr_12163_12178[2] = null);
(statearr_12163_12178[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12154 === 10))
{var inst_12146 = (state_12153[2]);var state_12153__$1 = (function (){var statearr_12164 = state_12153;(statearr_12164[6] = inst_12146);
return statearr_12164;
})();var statearr_12165_12179 = state_12153__$1;(statearr_12165_12179[2] = null);
(statearr_12165_12179[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12154 === 11))
{var inst_12143 = (state_12153[2]);var state_12153__$1 = state_12153;var statearr_12166_12180 = state_12153__$1;(statearr_12166_12180[2] = inst_12143);
(statearr_12166_12180[1] = 10);
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
});return ((function (switch__8218__auto__){
return (function() {
var state_machine__8219__auto__ = null;
var state_machine__8219__auto____0 = (function (){var statearr_12168 = (new Array(7));(statearr_12168[0] = state_machine__8219__auto__);
(statearr_12168[1] = 1);
return statearr_12168;
});
var state_machine__8219__auto____1 = (function (state_12153){while(true){
var result__8220__auto__ = switch__8218__auto__.call(null,state_12153);if(cljs.core.keyword_identical_QMARK_.call(null,result__8220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8220__auto__;
}
break;
}
});
state_machine__8219__auto__ = function(state_12153){
switch(arguments.length){
case 0:
return state_machine__8219__auto____0.call(this);
case 1:
return state_machine__8219__auto____1.call(this,state_12153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8219__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8219__auto____0;
state_machine__8219__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8219__auto____1;
return state_machine__8219__auto__;
})()
;})(switch__8218__auto__))
})();var state__8283__auto__ = (function (){var statearr_12169 = f__8282__auto__.call(null);(statearr_12169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8281__auto___12170);
return statearr_12169;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8283__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__8281__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8282__auto__ = (function (){var switch__8218__auto__ = (function (state_12328){var state_val_12329 = (state_12328[1]);if((state_val_12329 === 1))
{var state_12328__$1 = state_12328;var statearr_12330_12363 = state_12328__$1;(statearr_12330_12363[2] = null);
(statearr_12330_12363[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12329 === 2))
{var state_12328__$1 = state_12328;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12328__$1,4,in$);
} else
{if((state_val_12329 === 3))
{var inst_12326 = (state_12328[2]);var state_12328__$1 = state_12328;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12328__$1,inst_12326);
} else
{if((state_val_12329 === 4))
{var inst_12274 = (state_12328[5]);var inst_12274__$1 = (state_12328[2]);var inst_12275 = (inst_12274__$1 == null);var state_12328__$1 = (function (){var statearr_12331 = state_12328;(statearr_12331[5] = inst_12274__$1);
return statearr_12331;
})();if(cljs.core.truth_(inst_12275))
{var statearr_12332_12364 = state_12328__$1;(statearr_12332_12364[1] = 5);
} else
{var statearr_12333_12365 = state_12328__$1;(statearr_12333_12365[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12329 === 5))
{var inst_12277 = cljs.core.async.close_BANG_.call(null,out);var state_12328__$1 = state_12328;var statearr_12334_12366 = state_12328__$1;(statearr_12334_12366[2] = inst_12277);
(statearr_12334_12366[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12329 === 6))
{var inst_12274 = (state_12328[5]);var inst_12279 = f.call(null,inst_12274);var inst_12284 = cljs.core.seq.call(null,inst_12279);var inst_12285 = inst_12284;var inst_12286 = null;var inst_12287 = 0;var inst_12288 = 0;var state_12328__$1 = (function (){var statearr_12335 = state_12328;(statearr_12335[6] = inst_12286);
(statearr_12335[7] = inst_12287);
(statearr_12335[8] = inst_12285);
(statearr_12335[9] = inst_12288);
return statearr_12335;
})();var statearr_12336_12367 = state_12328__$1;(statearr_12336_12367[2] = null);
(statearr_12336_12367[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12329 === 7))
{var inst_12324 = (state_12328[2]);var state_12328__$1 = state_12328;var statearr_12337_12368 = state_12328__$1;(statearr_12337_12368[2] = inst_12324);
(statearr_12337_12368[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12329 === 8))
{var inst_12287 = (state_12328[7]);var inst_12288 = (state_12328[9]);var inst_12290 = (inst_12288 < inst_12287);var inst_12291 = inst_12290;var state_12328__$1 = state_12328;if(cljs.core.truth_(inst_12291))
{var statearr_12338_12369 = state_12328__$1;(statearr_12338_12369[1] = 10);
} else
{var statearr_12339_12370 = state_12328__$1;(statearr_12339_12370[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12329 === 9))
{var inst_12321 = (state_12328[2]);var state_12328__$1 = (function (){var statearr_12340 = state_12328;(statearr_12340[10] = inst_12321);
return statearr_12340;
})();var statearr_12341_12371 = state_12328__$1;(statearr_12341_12371[2] = null);
(statearr_12341_12371[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12329 === 10))
{var inst_12286 = (state_12328[6]);var inst_12288 = (state_12328[9]);var inst_12293 = cljs.core._nth.call(null,inst_12286,inst_12288);var state_12328__$1 = state_12328;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12328__$1,13,out,inst_12293);
} else
{if((state_val_12329 === 11))
{var inst_12285 = (state_12328[8]);var inst_12299 = (state_12328[11]);var inst_12299__$1 = cljs.core.seq.call(null,inst_12285);var state_12328__$1 = (function (){var statearr_12345 = state_12328;(statearr_12345[11] = inst_12299__$1);
return statearr_12345;
})();if(inst_12299__$1)
{var statearr_12346_12372 = state_12328__$1;(statearr_12346_12372[1] = 14);
} else
{var statearr_12347_12373 = state_12328__$1;(statearr_12347_12373[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12329 === 12))
{var inst_12319 = (state_12328[2]);var state_12328__$1 = state_12328;var statearr_12348_12374 = state_12328__$1;(statearr_12348_12374[2] = inst_12319);
(statearr_12348_12374[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12329 === 13))
{var inst_12286 = (state_12328[6]);var inst_12287 = (state_12328[7]);var inst_12285 = (state_12328[8]);var inst_12288 = (state_12328[9]);var inst_12295 = (state_12328[2]);var inst_12296 = (inst_12288 + 1);var tmp12342 = inst_12286;var tmp12343 = inst_12287;var tmp12344 = inst_12285;var inst_12285__$1 = tmp12344;var inst_12286__$1 = tmp12342;var inst_12287__$1 = tmp12343;var inst_12288__$1 = inst_12296;var state_12328__$1 = (function (){var statearr_12349 = state_12328;(statearr_12349[6] = inst_12286__$1);
(statearr_12349[7] = inst_12287__$1);
(statearr_12349[8] = inst_12285__$1);
(statearr_12349[12] = inst_12295);
(statearr_12349[9] = inst_12288__$1);
return statearr_12349;
})();var statearr_12350_12375 = state_12328__$1;(statearr_12350_12375[2] = null);
(statearr_12350_12375[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12329 === 14))
{var inst_12299 = (state_12328[11]);var inst_12301 = cljs.core.chunked_seq_QMARK_.call(null,inst_12299);var state_12328__$1 = state_12328;if(inst_12301)
{var statearr_12351_12376 = state_12328__$1;(statearr_12351_12376[1] = 17);
} else
{var statearr_12352_12377 = state_12328__$1;(statearr_12352_12377[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12329 === 15))
{var state_12328__$1 = state_12328;var statearr_12353_12378 = state_12328__$1;(statearr_12353_12378[2] = null);
(statearr_12353_12378[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12329 === 16))
{var inst_12317 = (state_12328[2]);var state_12328__$1 = state_12328;var statearr_12354_12379 = state_12328__$1;(statearr_12354_12379[2] = inst_12317);
(statearr_12354_12379[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12329 === 17))
{var inst_12299 = (state_12328[11]);var inst_12303 = cljs.core.chunk_first.call(null,inst_12299);var inst_12304 = cljs.core.chunk_rest.call(null,inst_12299);var inst_12305 = cljs.core.count.call(null,inst_12303);var inst_12285 = inst_12304;var inst_12286 = inst_12303;var inst_12287 = inst_12305;var inst_12288 = 0;var state_12328__$1 = (function (){var statearr_12355 = state_12328;(statearr_12355[6] = inst_12286);
(statearr_12355[7] = inst_12287);
(statearr_12355[8] = inst_12285);
(statearr_12355[9] = inst_12288);
return statearr_12355;
})();var statearr_12356_12380 = state_12328__$1;(statearr_12356_12380[2] = null);
(statearr_12356_12380[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12329 === 18))
{var inst_12299 = (state_12328[11]);var inst_12308 = cljs.core.first.call(null,inst_12299);var state_12328__$1 = state_12328;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12328__$1,20,out,inst_12308);
} else
{if((state_val_12329 === 19))
{var inst_12314 = (state_12328[2]);var state_12328__$1 = state_12328;var statearr_12357_12381 = state_12328__$1;(statearr_12357_12381[2] = inst_12314);
(statearr_12357_12381[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12329 === 20))
{var inst_12299 = (state_12328[11]);var inst_12310 = (state_12328[2]);var inst_12311 = cljs.core.next.call(null,inst_12299);var inst_12285 = inst_12311;var inst_12286 = null;var inst_12287 = 0;var inst_12288 = 0;var state_12328__$1 = (function (){var statearr_12358 = state_12328;(statearr_12358[13] = inst_12310);
(statearr_12358[6] = inst_12286);
(statearr_12358[7] = inst_12287);
(statearr_12358[8] = inst_12285);
(statearr_12358[9] = inst_12288);
return statearr_12358;
})();var statearr_12359_12382 = state_12328__$1;(statearr_12359_12382[2] = null);
(statearr_12359_12382[1] = 8);
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
});return ((function (switch__8218__auto__){
return (function() {
var state_machine__8219__auto__ = null;
var state_machine__8219__auto____0 = (function (){var statearr_12361 = (new Array(14));(statearr_12361[0] = state_machine__8219__auto__);
(statearr_12361[1] = 1);
return statearr_12361;
});
var state_machine__8219__auto____1 = (function (state_12328){while(true){
var result__8220__auto__ = switch__8218__auto__.call(null,state_12328);if(cljs.core.keyword_identical_QMARK_.call(null,result__8220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8220__auto__;
}
break;
}
});
state_machine__8219__auto__ = function(state_12328){
switch(arguments.length){
case 0:
return state_machine__8219__auto____0.call(this);
case 1:
return state_machine__8219__auto____1.call(this,state_12328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8219__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8219__auto____0;
state_machine__8219__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8219__auto____1;
return state_machine__8219__auto__;
})()
;})(switch__8218__auto__))
})();var state__8283__auto__ = (function (){var statearr_12362 = f__8282__auto__.call(null);(statearr_12362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8281__auto__);
return statearr_12362;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8283__auto__);
}));
return c__8281__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__8281__auto___12455 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8282__auto__ = (function (){var switch__8218__auto__ = (function (state_12438){var state_val_12439 = (state_12438[1]);if((state_val_12439 === 1))
{var state_12438__$1 = state_12438;var statearr_12440_12456 = state_12438__$1;(statearr_12440_12456[2] = null);
(statearr_12440_12456[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 2))
{var state_12438__$1 = state_12438;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12438__$1,4,from);
} else
{if((state_val_12439 === 3))
{var inst_12436 = (state_12438[2]);var state_12438__$1 = state_12438;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12438__$1,inst_12436);
} else
{if((state_val_12439 === 4))
{var inst_12421 = (state_12438[5]);var inst_12421__$1 = (state_12438[2]);var inst_12422 = (inst_12421__$1 == null);var state_12438__$1 = (function (){var statearr_12441 = state_12438;(statearr_12441[5] = inst_12421__$1);
return statearr_12441;
})();if(cljs.core.truth_(inst_12422))
{var statearr_12442_12457 = state_12438__$1;(statearr_12442_12457[1] = 5);
} else
{var statearr_12443_12458 = state_12438__$1;(statearr_12443_12458[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 5))
{var state_12438__$1 = state_12438;if(cljs.core.truth_(close_QMARK_))
{var statearr_12444_12459 = state_12438__$1;(statearr_12444_12459[1] = 8);
} else
{var statearr_12445_12460 = state_12438__$1;(statearr_12445_12460[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 6))
{var inst_12421 = (state_12438[5]);var state_12438__$1 = state_12438;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12438__$1,11,to,inst_12421);
} else
{if((state_val_12439 === 7))
{var inst_12434 = (state_12438[2]);var state_12438__$1 = state_12438;var statearr_12446_12461 = state_12438__$1;(statearr_12446_12461[2] = inst_12434);
(statearr_12446_12461[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 8))
{var inst_12425 = cljs.core.async.close_BANG_.call(null,to);var state_12438__$1 = state_12438;var statearr_12447_12462 = state_12438__$1;(statearr_12447_12462[2] = inst_12425);
(statearr_12447_12462[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 9))
{var state_12438__$1 = state_12438;var statearr_12448_12463 = state_12438__$1;(statearr_12448_12463[2] = null);
(statearr_12448_12463[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 10))
{var inst_12428 = (state_12438[2]);var state_12438__$1 = state_12438;var statearr_12449_12464 = state_12438__$1;(statearr_12449_12464[2] = inst_12428);
(statearr_12449_12464[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 11))
{var inst_12431 = (state_12438[2]);var state_12438__$1 = (function (){var statearr_12450 = state_12438;(statearr_12450[6] = inst_12431);
return statearr_12450;
})();var statearr_12451_12465 = state_12438__$1;(statearr_12451_12465[2] = null);
(statearr_12451_12465[1] = 2);
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
});return ((function (switch__8218__auto__){
return (function() {
var state_machine__8219__auto__ = null;
var state_machine__8219__auto____0 = (function (){var statearr_12453 = (new Array(7));(statearr_12453[0] = state_machine__8219__auto__);
(statearr_12453[1] = 1);
return statearr_12453;
});
var state_machine__8219__auto____1 = (function (state_12438){while(true){
var result__8220__auto__ = switch__8218__auto__.call(null,state_12438);if(cljs.core.keyword_identical_QMARK_.call(null,result__8220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8220__auto__;
}
break;
}
});
state_machine__8219__auto__ = function(state_12438){
switch(arguments.length){
case 0:
return state_machine__8219__auto____0.call(this);
case 1:
return state_machine__8219__auto____1.call(this,state_12438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8219__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8219__auto____0;
state_machine__8219__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8219__auto____1;
return state_machine__8219__auto__;
})()
;})(switch__8218__auto__))
})();var state__8283__auto__ = (function (){var statearr_12454 = f__8282__auto__.call(null);(statearr_12454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8281__auto___12455);
return statearr_12454;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8283__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__8281__auto___12544 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8282__auto__ = (function (){var switch__8218__auto__ = (function (state_12526){var state_val_12527 = (state_12526[1]);if((state_val_12527 === 1))
{var state_12526__$1 = state_12526;var statearr_12528_12545 = state_12526__$1;(statearr_12528_12545[2] = null);
(statearr_12528_12545[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12527 === 2))
{var state_12526__$1 = state_12526;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12526__$1,4,ch);
} else
{if((state_val_12527 === 3))
{var inst_12524 = (state_12526[2]);var state_12526__$1 = state_12526;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12526__$1,inst_12524);
} else
{if((state_val_12527 === 4))
{var inst_12507 = (state_12526[5]);var inst_12507__$1 = (state_12526[2]);var inst_12508 = (inst_12507__$1 == null);var state_12526__$1 = (function (){var statearr_12529 = state_12526;(statearr_12529[5] = inst_12507__$1);
return statearr_12529;
})();if(cljs.core.truth_(inst_12508))
{var statearr_12530_12546 = state_12526__$1;(statearr_12530_12546[1] = 5);
} else
{var statearr_12531_12547 = state_12526__$1;(statearr_12531_12547[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12527 === 5))
{var inst_12510 = cljs.core.async.close_BANG_.call(null,tc);var inst_12511 = cljs.core.async.close_BANG_.call(null,fc);var state_12526__$1 = (function (){var statearr_12532 = state_12526;(statearr_12532[6] = inst_12510);
return statearr_12532;
})();var statearr_12533_12548 = state_12526__$1;(statearr_12533_12548[2] = inst_12511);
(statearr_12533_12548[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12527 === 6))
{var inst_12507 = (state_12526[5]);var inst_12513 = p.call(null,inst_12507);var state_12526__$1 = state_12526;if(cljs.core.truth_(inst_12513))
{var statearr_12534_12549 = state_12526__$1;(statearr_12534_12549[1] = 9);
} else
{var statearr_12535_12550 = state_12526__$1;(statearr_12535_12550[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12527 === 7))
{var inst_12522 = (state_12526[2]);var state_12526__$1 = state_12526;var statearr_12536_12551 = state_12526__$1;(statearr_12536_12551[2] = inst_12522);
(statearr_12536_12551[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12527 === 8))
{var inst_12519 = (state_12526[2]);var state_12526__$1 = (function (){var statearr_12537 = state_12526;(statearr_12537[7] = inst_12519);
return statearr_12537;
})();var statearr_12538_12552 = state_12526__$1;(statearr_12538_12552[2] = null);
(statearr_12538_12552[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12527 === 9))
{var state_12526__$1 = state_12526;var statearr_12539_12553 = state_12526__$1;(statearr_12539_12553[2] = tc);
(statearr_12539_12553[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12527 === 10))
{var state_12526__$1 = state_12526;var statearr_12540_12554 = state_12526__$1;(statearr_12540_12554[2] = fc);
(statearr_12540_12554[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12527 === 11))
{var inst_12507 = (state_12526[5]);var inst_12517 = (state_12526[2]);var state_12526__$1 = state_12526;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12526__$1,8,inst_12517,inst_12507);
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
});return ((function (switch__8218__auto__){
return (function() {
var state_machine__8219__auto__ = null;
var state_machine__8219__auto____0 = (function (){var statearr_12542 = (new Array(8));(statearr_12542[0] = state_machine__8219__auto__);
(statearr_12542[1] = 1);
return statearr_12542;
});
var state_machine__8219__auto____1 = (function (state_12526){while(true){
var result__8220__auto__ = switch__8218__auto__.call(null,state_12526);if(cljs.core.keyword_identical_QMARK_.call(null,result__8220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8220__auto__;
}
break;
}
});
state_machine__8219__auto__ = function(state_12526){
switch(arguments.length){
case 0:
return state_machine__8219__auto____0.call(this);
case 1:
return state_machine__8219__auto____1.call(this,state_12526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8219__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8219__auto____0;
state_machine__8219__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8219__auto____1;
return state_machine__8219__auto__;
})()
;})(switch__8218__auto__))
})();var state__8283__auto__ = (function (){var statearr_12543 = f__8282__auto__.call(null);(statearr_12543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8281__auto___12544);
return statearr_12543;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8283__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__8281__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8282__auto__ = (function (){var switch__8218__auto__ = (function (state_12597){var state_val_12598 = (state_12597[1]);if((state_val_12598 === 7))
{var inst_12593 = (state_12597[2]);var state_12597__$1 = state_12597;var statearr_12599_12611 = state_12597__$1;(statearr_12599_12611[2] = inst_12593);
(statearr_12599_12611[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12598 === 6))
{var inst_12583 = (state_12597[5]);var inst_12586 = (state_12597[6]);var inst_12590 = f.call(null,inst_12583,inst_12586);var inst_12583__$1 = inst_12590;var state_12597__$1 = (function (){var statearr_12600 = state_12597;(statearr_12600[5] = inst_12583__$1);
return statearr_12600;
})();var statearr_12601_12612 = state_12597__$1;(statearr_12601_12612[2] = null);
(statearr_12601_12612[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12598 === 5))
{var inst_12583 = (state_12597[5]);var state_12597__$1 = state_12597;var statearr_12602_12613 = state_12597__$1;(statearr_12602_12613[2] = inst_12583);
(statearr_12602_12613[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12598 === 4))
{var inst_12586 = (state_12597[6]);var inst_12586__$1 = (state_12597[2]);var inst_12587 = (inst_12586__$1 == null);var state_12597__$1 = (function (){var statearr_12603 = state_12597;(statearr_12603[6] = inst_12586__$1);
return statearr_12603;
})();if(cljs.core.truth_(inst_12587))
{var statearr_12604_12614 = state_12597__$1;(statearr_12604_12614[1] = 5);
} else
{var statearr_12605_12615 = state_12597__$1;(statearr_12605_12615[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12598 === 3))
{var inst_12595 = (state_12597[2]);var state_12597__$1 = state_12597;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12597__$1,inst_12595);
} else
{if((state_val_12598 === 2))
{var state_12597__$1 = state_12597;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12597__$1,4,ch);
} else
{if((state_val_12598 === 1))
{var inst_12583 = init;var state_12597__$1 = (function (){var statearr_12606 = state_12597;(statearr_12606[5] = inst_12583);
return statearr_12606;
})();var statearr_12607_12616 = state_12597__$1;(statearr_12607_12616[2] = null);
(statearr_12607_12616[1] = 2);
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
});return ((function (switch__8218__auto__){
return (function() {
var state_machine__8219__auto__ = null;
var state_machine__8219__auto____0 = (function (){var statearr_12609 = (new Array(7));(statearr_12609[0] = state_machine__8219__auto__);
(statearr_12609[1] = 1);
return statearr_12609;
});
var state_machine__8219__auto____1 = (function (state_12597){while(true){
var result__8220__auto__ = switch__8218__auto__.call(null,state_12597);if(cljs.core.keyword_identical_QMARK_.call(null,result__8220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8220__auto__;
}
break;
}
});
state_machine__8219__auto__ = function(state_12597){
switch(arguments.length){
case 0:
return state_machine__8219__auto____0.call(this);
case 1:
return state_machine__8219__auto____1.call(this,state_12597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8219__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8219__auto____0;
state_machine__8219__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8219__auto____1;
return state_machine__8219__auto__;
})()
;})(switch__8218__auto__))
})();var state__8283__auto__ = (function (){var statearr_12610 = f__8282__auto__.call(null);(statearr_12610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8281__auto__);
return statearr_12610;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8283__auto__);
}));
return c__8281__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__8281__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8282__auto__ = (function (){var switch__8218__auto__ = (function (state_12674){var state_val_12675 = (state_12674[1]);if((state_val_12675 === 1))
{var inst_12654 = cljs.core.seq.call(null,coll);var inst_12655 = inst_12654;var state_12674__$1 = (function (){var statearr_12676 = state_12674;(statearr_12676[5] = inst_12655);
return statearr_12676;
})();var statearr_12677_12691 = state_12674__$1;(statearr_12677_12691[2] = null);
(statearr_12677_12691[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12675 === 2))
{var inst_12655 = (state_12674[5]);var state_12674__$1 = state_12674;if(cljs.core.truth_(inst_12655))
{var statearr_12678_12692 = state_12674__$1;(statearr_12678_12692[1] = 4);
} else
{var statearr_12679_12693 = state_12674__$1;(statearr_12679_12693[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12675 === 3))
{var inst_12672 = (state_12674[2]);var state_12674__$1 = state_12674;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12674__$1,inst_12672);
} else
{if((state_val_12675 === 4))
{var inst_12655 = (state_12674[5]);var inst_12658 = cljs.core.first.call(null,inst_12655);var state_12674__$1 = state_12674;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12674__$1,7,ch,inst_12658);
} else
{if((state_val_12675 === 5))
{var state_12674__$1 = state_12674;if(cljs.core.truth_(close_QMARK_))
{var statearr_12680_12694 = state_12674__$1;(statearr_12680_12694[1] = 8);
} else
{var statearr_12681_12695 = state_12674__$1;(statearr_12681_12695[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12675 === 6))
{var inst_12670 = (state_12674[2]);var state_12674__$1 = state_12674;var statearr_12682_12696 = state_12674__$1;(statearr_12682_12696[2] = inst_12670);
(statearr_12682_12696[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12675 === 7))
{var inst_12655 = (state_12674[5]);var inst_12660 = (state_12674[2]);var inst_12661 = cljs.core.next.call(null,inst_12655);var inst_12655__$1 = inst_12661;var state_12674__$1 = (function (){var statearr_12683 = state_12674;(statearr_12683[6] = inst_12660);
(statearr_12683[5] = inst_12655__$1);
return statearr_12683;
})();var statearr_12684_12697 = state_12674__$1;(statearr_12684_12697[2] = null);
(statearr_12684_12697[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12675 === 8))
{var inst_12665 = cljs.core.async.close_BANG_.call(null,ch);var state_12674__$1 = state_12674;var statearr_12685_12698 = state_12674__$1;(statearr_12685_12698[2] = inst_12665);
(statearr_12685_12698[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12675 === 9))
{var state_12674__$1 = state_12674;var statearr_12686_12699 = state_12674__$1;(statearr_12686_12699[2] = null);
(statearr_12686_12699[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12675 === 10))
{var inst_12668 = (state_12674[2]);var state_12674__$1 = state_12674;var statearr_12687_12700 = state_12674__$1;(statearr_12687_12700[2] = inst_12668);
(statearr_12687_12700[1] = 6);
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
});return ((function (switch__8218__auto__){
return (function() {
var state_machine__8219__auto__ = null;
var state_machine__8219__auto____0 = (function (){var statearr_12689 = (new Array(7));(statearr_12689[0] = state_machine__8219__auto__);
(statearr_12689[1] = 1);
return statearr_12689;
});
var state_machine__8219__auto____1 = (function (state_12674){while(true){
var result__8220__auto__ = switch__8218__auto__.call(null,state_12674);if(cljs.core.keyword_identical_QMARK_.call(null,result__8220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8220__auto__;
}
break;
}
});
state_machine__8219__auto__ = function(state_12674){
switch(arguments.length){
case 0:
return state_machine__8219__auto____0.call(this);
case 1:
return state_machine__8219__auto____1.call(this,state_12674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8219__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8219__auto____0;
state_machine__8219__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8219__auto____1;
return state_machine__8219__auto__;
})()
;})(switch__8218__auto__))
})();var state__8283__auto__ = (function (){var statearr_12690 = f__8282__auto__.call(null);(statearr_12690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8281__auto__);
return statearr_12690;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8283__auto__);
}));
return c__8281__auto__;
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
{var x__6809__auto__ = (((_ == null))?null:_);return (function (){var or__3943__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6809__auto__)]);if(or__3943__auto__)
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
{var x__6809__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6809__auto__)]);if(or__3943__auto__)
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
{var x__6809__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6809__auto__)]);if(or__3943__auto__)
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
{var x__6809__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6809__auto__)]);if(or__3943__auto__)
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12913 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12913');

/**
* @constructor
*/
cljs.core.async.t12913 = (function (cs,ch,mult,meta12914){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12914 = meta12914;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12913.cljs$lang$type = true;
cljs.core.async.t12913.cljs$lang$ctorStr = "cljs.core.async/t12913";
cljs.core.async.t12913.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6740__auto__,writer__6741__auto__,opt__6742__auto__){return cljs.core._write.call(null,writer__6741__auto__,"cljs.core.async/t12913");
});})(cs))
;
cljs.core.async.t12913.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12913.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12913.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12913.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12913.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12913.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
return self__.ch;
});})(cs))
;
cljs.core.async.t12913.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12915){var self__ = this;
return self__.meta12914;
});})(cs))
;
cljs.core.async.t12913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12915,meta12914__$1){var self__ = this;
return (new cljs.core.async.t12913(self__.cs,self__.ch,self__.mult,meta12914__$1));
});})(cs))
;
cljs.core.async.__GT_t12913 = ((function (cs){
return (function __GT_t12913(cs__$1,ch__$1,mult__$1,meta12914){return (new cljs.core.async.t12913(cs__$1,ch__$1,mult__$1,meta12914));
});})(cs))
;
}
return (new cljs.core.async.t12913(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__8281__auto___13125 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8282__auto__ = (function (){var switch__8218__auto__ = (function (state_13043){var state_val_13044 = (state_13043[1]);if((state_val_13044 === 32))
{try{var inst_12918 = (state_13043[5]);var inst_12994 = (state_13043[6]);var inst_13000 = cljs.core.async.put_BANG_.call(null,inst_12994,inst_12918,done);var state_13043__$1 = state_13043;var statearr_13047_13126 = state_13043__$1;(statearr_13047_13126[2] = inst_13000);
(statearr_13047_13126[1] = 30);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e13045){if((e13045 instanceof Object))
{var ex__8212__auto__ = e13045;var statearr_13046_13127 = state_13043;(statearr_13046_13127[1] = 31);
(statearr_13046_13127[2] = ex__8212__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13045;
} else
{return null;
}
}
}} else
{if((state_val_13044 === 1))
{var state_13043__$1 = state_13043;var statearr_13048_13128 = state_13043__$1;(statearr_13048_13128[2] = null);
(statearr_13048_13128[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13044 === 33))
{var inst_13006 = (state_13043[7]);var inst_13008 = cljs.core.chunked_seq_QMARK_.call(null,inst_13006);var state_13043__$1 = state_13043;if(inst_13008)
{var statearr_13049_13129 = state_13043__$1;(statearr_13049_13129[1] = 36);
} else
{var statearr_13050_13130 = state_13043__$1;(statearr_13050_13130[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13044 === 2))
{var state_13043__$1 = state_13043;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13043__$1,4,ch);
} else
{if((state_val_13044 === 34))
{var state_13043__$1 = state_13043;var statearr_13051_13131 = state_13043__$1;(statearr_13051_13131[2] = null);
(statearr_13051_13131[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13044 === 3))
{var inst_13041 = (state_13043[2]);var state_13043__$1 = state_13043;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13043__$1,inst_13041);
} else
{if((state_val_13044 === 35))
{var inst_13030 = (state_13043[2]);var state_13043__$1 = state_13043;var statearr_13052_13132 = state_13043__$1;(statearr_13052_13132[2] = inst_13030);
(statearr_13052_13132[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13044 === 4))
{var inst_12918 = (state_13043[5]);var inst_12918__$1 = (state_13043[2]);var inst_12919 = (inst_12918__$1 == null);var state_13043__$1 = (function (){var statearr_13053 = state_13043;(statearr_13053[5] = inst_12918__$1);
return statearr_13053;
})();if(cljs.core.truth_(inst_12919))
{var statearr_13054_13133 = state_13043__$1;(statearr_13054_13133[1] = 5);
} else
{var statearr_13055_13134 = state_13043__$1;(statearr_13055_13134[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13044 === 36))
{var inst_13006 = (state_13043[7]);var inst_13010 = cljs.core.chunk_first.call(null,inst_13006);var inst_13011 = cljs.core.chunk_rest.call(null,inst_13006);var inst_13012 = cljs.core.count.call(null,inst_13010);var inst_12986 = inst_13011;var inst_12987 = inst_13010;var inst_12988 = inst_13012;var inst_12989 = 0;var state_13043__$1 = (function (){var statearr_13056 = state_13043;(statearr_13056[8] = inst_12986);
(statearr_13056[9] = inst_12987);
(statearr_13056[10] = inst_12988);
(statearr_13056[11] = inst_12989);
return statearr_13056;
})();var statearr_13057_13135 = state_13043__$1;(statearr_13057_13135[2] = null);
(statearr_13057_13135[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13044 === 5))
{var inst_12925 = cljs.core.deref.call(null,cs);var inst_12926 = cljs.core.seq.call(null,inst_12925);var inst_12927 = inst_12926;var inst_12928 = null;var inst_12929 = 0;var inst_12930 = 0;var state_13043__$1 = (function (){var statearr_13058 = state_13043;(statearr_13058[12] = inst_12930);
(statearr_13058[13] = inst_12929);
(statearr_13058[14] = inst_12927);
(statearr_13058[15] = inst_12928);
return statearr_13058;
})();var statearr_13059_13136 = state_13043__$1;(statearr_13059_13136[2] = null);
(statearr_13059_13136[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13044 === 37))
{var inst_13006 = (state_13043[7]);var inst_13015 = cljs.core.first.call(null,inst_13006);var state_13043__$1 = (function (){var statearr_13060 = state_13043;(statearr_13060[16] = inst_13015);
return statearr_13060;
})();var statearr_13061_13137 = state_13043__$1;(statearr_13061_13137[2] = null);
(statearr_13061_13137[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13044 === 6))
{var inst_12977 = cljs.core.deref.call(null,cs);var inst_12978 = cljs.core.keys.call(null,inst_12977);var inst_12979 = cljs.core.count.call(null,inst_12978);var inst_12980 = cljs.core.reset_BANG_.call(null,dctr,inst_12979);var inst_12985 = cljs.core.seq.call(null,inst_12978);var inst_12986 = inst_12985;var inst_12987 = null;var inst_12988 = 0;var inst_12989 = 0;var state_13043__$1 = (function (){var statearr_13062 = state_13043;(statearr_13062[17] = inst_12980);
(statearr_13062[8] = inst_12986);
(statearr_13062[9] = inst_12987);
(statearr_13062[10] = inst_12988);
(statearr_13062[11] = inst_12989);
return statearr_13062;
})();var statearr_13063_13138 = state_13043__$1;(statearr_13063_13138[2] = null);
(statearr_13063_13138[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13044 === 38))
{var inst_13027 = (state_13043[2]);var state_13043__$1 = state_13043;var statearr_13064_13139 = state_13043__$1;(statearr_13064_13139[2] = inst_13027);
(statearr_13064_13139[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13044 === 7))
{var inst_13039 = (state_13043[2]);var state_13043__$1 = state_13043;var statearr_13065_13140 = state_13043__$1;(statearr_13065_13140[2] = inst_13039);
(statearr_13065_13140[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13044 === 39))
{var inst_13006 = (state_13043[7]);var inst_13023 = (state_13043[2]);var inst_13024 = cljs.core.next.call(null,inst_13006);var inst_12986 = inst_13024;var inst_12987 = null;var inst_12988 = 0;var inst_12989 = 0;var state_13043__$1 = (function (){var statearr_13066 = state_13043;(statearr_13066[8] = inst_12986);
(statearr_13066[9] = inst_12987);
(statearr_13066[10] = inst_12988);
(statearr_13066[18] = inst_13023);
(statearr_13066[11] = inst_12989);
return statearr_13066;
})();var statearr_13067_13141 = state_13043__$1;(statearr_13067_13141[2] = null);
(statearr_13067_13141[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13044 === 8))
{var inst_12930 = (state_13043[12]);var inst_12929 = (state_13043[13]);var inst_12932 = (inst_12930 < inst_12929);var inst_12933 = inst_12932;var state_13043__$1 = state_13043;if(cljs.core.truth_(inst_12933))
{var statearr_13068_13142 = state_13043__$1;(statearr_13068_13142[1] = 10);
} else
{var statearr_13069_13143 = state_13043__$1;(statearr_13069_13143[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13044 === 40))
{var inst_13015 = (state_13043[16]);var inst_13016 = (state_13043[2]);var inst_13017 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13018 = cljs.core.async.untap_STAR_.call(null,m,inst_13015);var state_13043__$1 = (function (){var statearr_13070 = state_13043;(statearr_13070[19] = inst_13017);
(statearr_13070[20] = inst_13016);
return statearr_13070;
})();var statearr_13071_13144 = state_13043__$1;(statearr_13071_13144[2] = inst_13018);
(statearr_13071_13144[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13044 === 9))
{var inst_12975 = (state_13043[2]);var state_13043__$1 = state_13043;var statearr_13072_13145 = state_13043__$1;(statearr_13072_13145[2] = inst_12975);
(statearr_13072_13145[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13044 === 41))
{try{var inst_12918 = (state_13043[5]);var inst_13015 = (state_13043[16]);var inst_13021 = cljs.core.async.put_BANG_.call(null,inst_13015,inst_12918,done);var state_13043__$1 = state_13043;var statearr_13075_13146 = state_13043__$1;(statearr_13075_13146[2] = inst_13021);
(statearr_13075_13146[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e13073){if((e13073 instanceof Object))
{var ex__8212__auto__ = e13073;var statearr_13074_13147 = state_13043;(statearr_13074_13147[1] = 40);
(statearr_13074_13147[2] = ex__8212__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13073;
} else
{return null;
}
}
}} else
{if((state_val_13044 === 10))
{var inst_12930 = (state_13043[12]);var inst_12928 = (state_13043[15]);var inst_12936 = cljs.core._nth.call(null,inst_12928,inst_12930);var inst_12937 = cljs.core.nth.call(null,inst_12936,0,null);var inst_12938 = cljs.core.nth.call(null,inst_12936,1,null);var state_13043__$1 = (function (){var statearr_13076 = state_13043;(statearr_13076[21] = inst_12937);
return statearr_13076;
})();if(cljs.core.truth_(inst_12938))
{var statearr_13077_13148 = state_13043__$1;(statearr_13077_13148[1] = 13);
} else
{var statearr_13078_13149 = state_13043__$1;(statearr_13078_13149[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13044 === 42))
{var inst_13036 = (state_13043[2]);var state_13043__$1 = (function (){var statearr_13079 = state_13043;(statearr_13079[22] = inst_13036);
return statearr_13079;
})();var statearr_13080_13150 = state_13043__$1;(statearr_13080_13150[2] = null);
(statearr_13080_13150[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13044 === 11))
{var inst_12927 = (state_13043[14]);var inst_12947 = (state_13043[23]);var inst_12947__$1 = cljs.core.seq.call(null,inst_12927);var state_13043__$1 = (function (){var statearr_13081 = state_13043;(statearr_13081[23] = inst_12947__$1);
return statearr_13081;
})();if(inst_12947__$1)
{var statearr_13082_13151 = state_13043__$1;(statearr_13082_13151[1] = 16);
} else
{var statearr_13083_13152 = state_13043__$1;(statearr_13083_13152[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13044 === 12))
{var inst_12973 = (state_13043[2]);var state_13043__$1 = state_13043;var statearr_13084_13153 = state_13043__$1;(statearr_13084_13153[2] = inst_12973);
(statearr_13084_13153[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13044 === 13))
{var inst_12937 = (state_13043[21]);var inst_12940 = cljs.core.async.close_BANG_.call(null,inst_12937);var state_13043__$1 = state_13043;var statearr_13088_13154 = state_13043__$1;(statearr_13088_13154[2] = inst_12940);
(statearr_13088_13154[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13044 === 14))
{var state_13043__$1 = state_13043;var statearr_13089_13155 = state_13043__$1;(statearr_13089_13155[2] = null);
(statearr_13089_13155[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13044 === 15))
{var inst_12930 = (state_13043[12]);var inst_12929 = (state_13043[13]);var inst_12927 = (state_13043[14]);var inst_12928 = (state_13043[15]);var inst_12943 = (state_13043[2]);var inst_12944 = (inst_12930 + 1);var tmp13085 = inst_12929;var tmp13086 = inst_12927;var tmp13087 = inst_12928;var inst_12927__$1 = tmp13086;var inst_12928__$1 = tmp13087;var inst_12929__$1 = tmp13085;var inst_12930__$1 = inst_12944;var state_13043__$1 = (function (){var statearr_13090 = state_13043;(statearr_13090[24] = inst_12943);
(statearr_13090[12] = inst_12930__$1);
(statearr_13090[13] = inst_12929__$1);
(statearr_13090[14] = inst_12927__$1);
(statearr_13090[15] = inst_12928__$1);
return statearr_13090;
})();var statearr_13091_13156 = state_13043__$1;(statearr_13091_13156[2] = null);
(statearr_13091_13156[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13044 === 16))
{var inst_12947 = (state_13043[23]);var inst_12949 = cljs.core.chunked_seq_QMARK_.call(null,inst_12947);var state_13043__$1 = state_13043;if(inst_12949)
{var statearr_13092_13157 = state_13043__$1;(statearr_13092_13157[1] = 19);
} else
{var statearr_13093_13158 = state_13043__$1;(statearr_13093_13158[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13044 === 17))
{var state_13043__$1 = state_13043;var statearr_13094_13159 = state_13043__$1;(statearr_13094_13159[2] = null);
(statearr_13094_13159[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13044 === 18))
{var inst_12971 = (state_13043[2]);var state_13043__$1 = state_13043;var statearr_13095_13160 = state_13043__$1;(statearr_13095_13160[2] = inst_12971);
(statearr_13095_13160[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13044 === 19))
{var inst_12947 = (state_13043[23]);var inst_12951 = cljs.core.chunk_first.call(null,inst_12947);var inst_12952 = cljs.core.chunk_rest.call(null,inst_12947);var inst_12953 = cljs.core.count.call(null,inst_12951);var inst_12927 = inst_12952;var inst_12928 = inst_12951;var inst_12929 = inst_12953;var inst_12930 = 0;var state_13043__$1 = (function (){var statearr_13096 = state_13043;(statearr_13096[12] = inst_12930);
(statearr_13096[13] = inst_12929);
(statearr_13096[14] = inst_12927);
(statearr_13096[15] = inst_12928);
return statearr_13096;
})();var statearr_13097_13161 = state_13043__$1;(statearr_13097_13161[2] = null);
(statearr_13097_13161[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13044 === 20))
{var inst_12947 = (state_13043[23]);var inst_12957 = cljs.core.first.call(null,inst_12947);var inst_12958 = cljs.core.nth.call(null,inst_12957,0,null);var inst_12959 = cljs.core.nth.call(null,inst_12957,1,null);var state_13043__$1 = (function (){var statearr_13098 = state_13043;(statearr_13098[25] = inst_12958);
return statearr_13098;
})();if(cljs.core.truth_(inst_12959))
{var statearr_13099_13162 = state_13043__$1;(statearr_13099_13162[1] = 22);
} else
{var statearr_13100_13163 = state_13043__$1;(statearr_13100_13163[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13044 === 21))
{var inst_12968 = (state_13043[2]);var state_13043__$1 = state_13043;var statearr_13101_13164 = state_13043__$1;(statearr_13101_13164[2] = inst_12968);
(statearr_13101_13164[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13044 === 22))
{var inst_12958 = (state_13043[25]);var inst_12961 = cljs.core.async.close_BANG_.call(null,inst_12958);var state_13043__$1 = state_13043;var statearr_13102_13165 = state_13043__$1;(statearr_13102_13165[2] = inst_12961);
(statearr_13102_13165[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13044 === 23))
{var state_13043__$1 = state_13043;var statearr_13103_13166 = state_13043__$1;(statearr_13103_13166[2] = null);
(statearr_13103_13166[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13044 === 24))
{var inst_12947 = (state_13043[23]);var inst_12964 = (state_13043[2]);var inst_12965 = cljs.core.next.call(null,inst_12947);var inst_12927 = inst_12965;var inst_12928 = null;var inst_12929 = 0;var inst_12930 = 0;var state_13043__$1 = (function (){var statearr_13104 = state_13043;(statearr_13104[12] = inst_12930);
(statearr_13104[13] = inst_12929);
(statearr_13104[14] = inst_12927);
(statearr_13104[15] = inst_12928);
(statearr_13104[26] = inst_12964);
return statearr_13104;
})();var statearr_13105_13167 = state_13043__$1;(statearr_13105_13167[2] = null);
(statearr_13105_13167[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13044 === 25))
{var inst_12988 = (state_13043[10]);var inst_12989 = (state_13043[11]);var inst_12991 = (inst_12989 < inst_12988);var inst_12992 = inst_12991;var state_13043__$1 = state_13043;if(cljs.core.truth_(inst_12992))
{var statearr_13106_13168 = state_13043__$1;(statearr_13106_13168[1] = 27);
} else
{var statearr_13107_13169 = state_13043__$1;(statearr_13107_13169[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13044 === 26))
{var inst_13034 = (state_13043[2]);var state_13043__$1 = (function (){var statearr_13108 = state_13043;(statearr_13108[27] = inst_13034);
return statearr_13108;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13043__$1,42,dchan);
} else
{if((state_val_13044 === 27))
{var inst_12987 = (state_13043[9]);var inst_12989 = (state_13043[11]);var inst_12994 = cljs.core._nth.call(null,inst_12987,inst_12989);var state_13043__$1 = (function (){var statearr_13109 = state_13043;(statearr_13109[6] = inst_12994);
return statearr_13109;
})();var statearr_13110_13170 = state_13043__$1;(statearr_13110_13170[2] = null);
(statearr_13110_13170[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13044 === 28))
{var inst_13006 = (state_13043[7]);var inst_12986 = (state_13043[8]);var inst_13006__$1 = cljs.core.seq.call(null,inst_12986);var state_13043__$1 = (function (){var statearr_13114 = state_13043;(statearr_13114[7] = inst_13006__$1);
return statearr_13114;
})();if(inst_13006__$1)
{var statearr_13115_13171 = state_13043__$1;(statearr_13115_13171[1] = 33);
} else
{var statearr_13116_13172 = state_13043__$1;(statearr_13116_13172[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13044 === 29))
{var inst_13032 = (state_13043[2]);var state_13043__$1 = state_13043;var statearr_13117_13173 = state_13043__$1;(statearr_13117_13173[2] = inst_13032);
(statearr_13117_13173[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13044 === 30))
{var inst_12986 = (state_13043[8]);var inst_12987 = (state_13043[9]);var inst_12988 = (state_13043[10]);var inst_12989 = (state_13043[11]);var inst_13002 = (state_13043[2]);var inst_13003 = (inst_12989 + 1);var tmp13111 = inst_12986;var tmp13112 = inst_12987;var tmp13113 = inst_12988;var inst_12986__$1 = tmp13111;var inst_12987__$1 = tmp13112;var inst_12988__$1 = tmp13113;var inst_12989__$1 = inst_13003;var state_13043__$1 = (function (){var statearr_13118 = state_13043;(statearr_13118[8] = inst_12986__$1);
(statearr_13118[9] = inst_12987__$1);
(statearr_13118[10] = inst_12988__$1);
(statearr_13118[28] = inst_13002);
(statearr_13118[11] = inst_12989__$1);
return statearr_13118;
})();var statearr_13119_13174 = state_13043__$1;(statearr_13119_13174[2] = null);
(statearr_13119_13174[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13044 === 31))
{var inst_12994 = (state_13043[6]);var inst_12995 = (state_13043[2]);var inst_12996 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12997 = cljs.core.async.untap_STAR_.call(null,m,inst_12994);var state_13043__$1 = (function (){var statearr_13120 = state_13043;(statearr_13120[29] = inst_12995);
(statearr_13120[30] = inst_12996);
return statearr_13120;
})();var statearr_13121_13175 = state_13043__$1;(statearr_13121_13175[2] = inst_12997);
(statearr_13121_13175[1] = 30);
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
});return ((function (switch__8218__auto__){
return (function() {
var state_machine__8219__auto__ = null;
var state_machine__8219__auto____0 = (function (){var statearr_13123 = (new Array(31));(statearr_13123[0] = state_machine__8219__auto__);
(statearr_13123[1] = 1);
return statearr_13123;
});
var state_machine__8219__auto____1 = (function (state_13043){while(true){
var result__8220__auto__ = switch__8218__auto__.call(null,state_13043);if(cljs.core.keyword_identical_QMARK_.call(null,result__8220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8220__auto__;
}
break;
}
});
state_machine__8219__auto__ = function(state_13043){
switch(arguments.length){
case 0:
return state_machine__8219__auto____0.call(this);
case 1:
return state_machine__8219__auto____1.call(this,state_13043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8219__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8219__auto____0;
state_machine__8219__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8219__auto____1;
return state_machine__8219__auto__;
})()
;})(switch__8218__auto__))
})();var state__8283__auto__ = (function (){var statearr_13124 = f__8282__auto__.call(null);(statearr_13124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8281__auto___13125);
return statearr_13124;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8283__auto__);
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
{var x__6809__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6809__auto__)]);if(or__3943__auto__)
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
{var x__6809__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6809__auto__)]);if(or__3943__auto__)
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
{var x__6809__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6809__auto__)]);if(or__3943__auto__)
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
{var x__6809__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6809__auto__)]);if(or__3943__auto__)
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
{var x__6809__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6809__auto__)]);if(or__3943__auto__)
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
;var m = (function (){if(typeof cljs.core.async.t13296 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t13296');

/**
* @constructor
*/
cljs.core.async.t13296 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta13297){
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
this.meta13297 = meta13297;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13296.cljs$lang$type = true;
cljs.core.async.t13296.cljs$lang$ctorStr = "cljs.core.async/t13296";
cljs.core.async.t13296.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6740__auto__,writer__6741__auto__,opt__6742__auto__){return cljs.core._write.call(null,writer__6741__auto__,"cljs.core.async/t13296");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13296.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13296.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13296.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13296.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13296.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13296.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13296.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13296.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13296.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13298){var self__ = this;
return self__.meta13297;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13298,meta13297__$1){var self__ = this;
return (new cljs.core.async.t13296(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta13297__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13296 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13296(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13297){return (new cljs.core.async.t13296(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13297));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13296(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__8281__auto___13416 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8282__auto__ = (function (){var switch__8218__auto__ = (function (state_13369){var state_val_13370 = (state_13369[1]);if((state_val_13370 === 1))
{var inst_13302 = (state_13369[5]);var inst_13302__$1 = calc_state.call(null);var inst_13303 = cljs.core.seq_QMARK_.call(null,inst_13302__$1);var state_13369__$1 = (function (){var statearr_13371 = state_13369;(statearr_13371[5] = inst_13302__$1);
return statearr_13371;
})();if(inst_13303)
{var statearr_13372_13417 = state_13369__$1;(statearr_13372_13417[1] = 2);
} else
{var statearr_13373_13418 = state_13369__$1;(statearr_13373_13418[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13370 === 2))
{var inst_13302 = (state_13369[5]);var inst_13305 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13302);var state_13369__$1 = state_13369;var statearr_13374_13419 = state_13369__$1;(statearr_13374_13419[2] = inst_13305);
(statearr_13374_13419[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13370 === 3))
{var inst_13302 = (state_13369[5]);var state_13369__$1 = state_13369;var statearr_13375_13420 = state_13369__$1;(statearr_13375_13420[2] = inst_13302);
(statearr_13375_13420[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13370 === 4))
{var inst_13302 = (state_13369[5]);var inst_13308 = (state_13369[2]);var inst_13309 = cljs.core.get.call(null,inst_13308,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13310 = cljs.core.get.call(null,inst_13308,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13311 = cljs.core.get.call(null,inst_13308,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_13312 = inst_13302;var state_13369__$1 = (function (){var statearr_13376 = state_13369;(statearr_13376[6] = inst_13310);
(statearr_13376[7] = inst_13312);
(statearr_13376[8] = inst_13311);
(statearr_13376[9] = inst_13309);
return statearr_13376;
})();var statearr_13377_13421 = state_13369__$1;(statearr_13377_13421[2] = null);
(statearr_13377_13421[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13370 === 5))
{var inst_13312 = (state_13369[7]);var inst_13315 = cljs.core.seq_QMARK_.call(null,inst_13312);var state_13369__$1 = state_13369;if(inst_13315)
{var statearr_13378_13422 = state_13369__$1;(statearr_13378_13422[1] = 7);
} else
{var statearr_13379_13423 = state_13369__$1;(statearr_13379_13423[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13370 === 6))
{var inst_13367 = (state_13369[2]);var state_13369__$1 = state_13369;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13369__$1,inst_13367);
} else
{if((state_val_13370 === 7))
{var inst_13312 = (state_13369[7]);var inst_13317 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13312);var state_13369__$1 = state_13369;var statearr_13380_13424 = state_13369__$1;(statearr_13380_13424[2] = inst_13317);
(statearr_13380_13424[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13370 === 8))
{var inst_13312 = (state_13369[7]);var state_13369__$1 = state_13369;var statearr_13381_13425 = state_13369__$1;(statearr_13381_13425[2] = inst_13312);
(statearr_13381_13425[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13370 === 9))
{var inst_13320 = (state_13369[10]);var inst_13320__$1 = (state_13369[2]);var inst_13321 = cljs.core.get.call(null,inst_13320__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13322 = cljs.core.get.call(null,inst_13320__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13323 = cljs.core.get.call(null,inst_13320__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_13369__$1 = (function (){var statearr_13382 = state_13369;(statearr_13382[11] = inst_13323);
(statearr_13382[12] = inst_13322);
(statearr_13382[10] = inst_13320__$1);
return statearr_13382;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13369__$1,10,inst_13321);
} else
{if((state_val_13370 === 10))
{var inst_13327 = (state_13369[13]);var inst_13329 = (state_13369[14]);var inst_13326 = (state_13369[2]);var inst_13327__$1 = cljs.core.nth.call(null,inst_13326,0,null);var inst_13328 = cljs.core.nth.call(null,inst_13326,1,null);var inst_13329__$1 = (inst_13327__$1 == null);var state_13369__$1 = (function (){var statearr_13383 = state_13369;(statearr_13383[13] = inst_13327__$1);
(statearr_13383[15] = inst_13328);
(statearr_13383[14] = inst_13329__$1);
return statearr_13383;
})();if(cljs.core.truth_(inst_13329__$1))
{var statearr_13384_13426 = state_13369__$1;(statearr_13384_13426[1] = 11);
} else
{var statearr_13385_13427 = state_13369__$1;(statearr_13385_13427[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13370 === 11))
{var inst_13329 = (state_13369[14]);var state_13369__$1 = state_13369;var statearr_13386_13428 = state_13369__$1;(statearr_13386_13428[2] = inst_13329);
(statearr_13386_13428[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13370 === 12))
{var inst_13328 = (state_13369[15]);var inst_13332 = cljs.core._EQ_.call(null,inst_13328,change);var state_13369__$1 = state_13369;var statearr_13387_13429 = state_13369__$1;(statearr_13387_13429[2] = inst_13332);
(statearr_13387_13429[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13370 === 13))
{var inst_13334 = (state_13369[2]);var state_13369__$1 = state_13369;if(cljs.core.truth_(inst_13334))
{var statearr_13388_13430 = state_13369__$1;(statearr_13388_13430[1] = 14);
} else
{var statearr_13389_13431 = state_13369__$1;(statearr_13389_13431[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13370 === 14))
{var inst_13327 = (state_13369[13]);var inst_13336 = (inst_13327 == null);var state_13369__$1 = state_13369;if(cljs.core.truth_(inst_13336))
{var statearr_13390_13432 = state_13369__$1;(statearr_13390_13432[1] = 17);
} else
{var statearr_13391_13433 = state_13369__$1;(statearr_13391_13433[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13370 === 15))
{var inst_13323 = (state_13369[11]);var inst_13345 = (state_13369[16]);var inst_13328 = (state_13369[15]);var inst_13345__$1 = inst_13323.call(null,inst_13328);var state_13369__$1 = (function (){var statearr_13392 = state_13369;(statearr_13392[16] = inst_13345__$1);
return statearr_13392;
})();if(cljs.core.truth_(inst_13345__$1))
{var statearr_13393_13434 = state_13369__$1;(statearr_13393_13434[1] = 20);
} else
{var statearr_13394_13435 = state_13369__$1;(statearr_13394_13435[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13370 === 16))
{var inst_13365 = (state_13369[2]);var state_13369__$1 = state_13369;var statearr_13395_13436 = state_13369__$1;(statearr_13395_13436[2] = inst_13365);
(statearr_13395_13436[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13370 === 17))
{var inst_13328 = (state_13369[15]);var inst_13338 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13328);var state_13369__$1 = state_13369;var statearr_13396_13437 = state_13369__$1;(statearr_13396_13437[2] = inst_13338);
(statearr_13396_13437[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13370 === 18))
{var state_13369__$1 = state_13369;var statearr_13397_13438 = state_13369__$1;(statearr_13397_13438[2] = null);
(statearr_13397_13438[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13370 === 19))
{var inst_13341 = (state_13369[2]);var inst_13342 = calc_state.call(null);var inst_13312 = inst_13342;var state_13369__$1 = (function (){var statearr_13398 = state_13369;(statearr_13398[7] = inst_13312);
(statearr_13398[17] = inst_13341);
return statearr_13398;
})();var statearr_13399_13439 = state_13369__$1;(statearr_13399_13439[2] = null);
(statearr_13399_13439[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13370 === 20))
{var inst_13345 = (state_13369[16]);var state_13369__$1 = state_13369;var statearr_13400_13440 = state_13369__$1;(statearr_13400_13440[2] = inst_13345);
(statearr_13400_13440[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13370 === 21))
{var inst_13323 = (state_13369[11]);var inst_13348 = (state_13369[18]);var inst_13348__$1 = cljs.core.empty_QMARK_.call(null,inst_13323);var state_13369__$1 = (function (){var statearr_13401 = state_13369;(statearr_13401[18] = inst_13348__$1);
return statearr_13401;
})();if(inst_13348__$1)
{var statearr_13402_13441 = state_13369__$1;(statearr_13402_13441[1] = 23);
} else
{var statearr_13403_13442 = state_13369__$1;(statearr_13403_13442[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13370 === 22))
{var inst_13356 = (state_13369[2]);var state_13369__$1 = state_13369;if(cljs.core.truth_(inst_13356))
{var statearr_13404_13443 = state_13369__$1;(statearr_13404_13443[1] = 26);
} else
{var statearr_13405_13444 = state_13369__$1;(statearr_13405_13444[1] = 27);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13370 === 23))
{var inst_13322 = (state_13369[12]);var inst_13328 = (state_13369[15]);var inst_13350 = inst_13322.call(null,inst_13328);var inst_13351 = cljs.core.not.call(null,inst_13350);var state_13369__$1 = state_13369;var statearr_13406_13445 = state_13369__$1;(statearr_13406_13445[2] = inst_13351);
(statearr_13406_13445[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13370 === 24))
{var inst_13348 = (state_13369[18]);var state_13369__$1 = state_13369;var statearr_13407_13446 = state_13369__$1;(statearr_13407_13446[2] = inst_13348);
(statearr_13407_13446[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13370 === 25))
{var inst_13354 = (state_13369[2]);var state_13369__$1 = state_13369;var statearr_13408_13447 = state_13369__$1;(statearr_13408_13447[2] = inst_13354);
(statearr_13408_13447[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13370 === 26))
{var inst_13327 = (state_13369[13]);var state_13369__$1 = state_13369;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13369__$1,29,out,inst_13327);
} else
{if((state_val_13370 === 27))
{var state_13369__$1 = state_13369;var statearr_13409_13448 = state_13369__$1;(statearr_13409_13448[2] = null);
(statearr_13409_13448[1] = 28);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13370 === 28))
{var inst_13320 = (state_13369[10]);var inst_13362 = (state_13369[2]);var inst_13312 = inst_13320;var state_13369__$1 = (function (){var statearr_13410 = state_13369;(statearr_13410[19] = inst_13362);
(statearr_13410[7] = inst_13312);
return statearr_13410;
})();var statearr_13411_13449 = state_13369__$1;(statearr_13411_13449[2] = null);
(statearr_13411_13449[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13370 === 29))
{var inst_13359 = (state_13369[2]);var state_13369__$1 = state_13369;var statearr_13412_13450 = state_13369__$1;(statearr_13412_13450[2] = inst_13359);
(statearr_13412_13450[1] = 28);
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
});return ((function (switch__8218__auto__){
return (function() {
var state_machine__8219__auto__ = null;
var state_machine__8219__auto____0 = (function (){var statearr_13414 = (new Array(20));(statearr_13414[0] = state_machine__8219__auto__);
(statearr_13414[1] = 1);
return statearr_13414;
});
var state_machine__8219__auto____1 = (function (state_13369){while(true){
var result__8220__auto__ = switch__8218__auto__.call(null,state_13369);if(cljs.core.keyword_identical_QMARK_.call(null,result__8220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8220__auto__;
}
break;
}
});
state_machine__8219__auto__ = function(state_13369){
switch(arguments.length){
case 0:
return state_machine__8219__auto____0.call(this);
case 1:
return state_machine__8219__auto____1.call(this,state_13369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8219__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8219__auto____0;
state_machine__8219__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8219__auto____1;
return state_machine__8219__auto__;
})()
;})(switch__8218__auto__))
})();var state__8283__auto__ = (function (){var statearr_13415 = f__8282__auto__.call(null);(statearr_13415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8281__auto___13416);
return statearr_13415;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8283__auto__);
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
{var x__6809__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6809__auto__)]);if(or__3943__auto__)
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
{var x__6809__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6809__auto__)]);if(or__3943__auto__)
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
{var x__6809__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6809__auto__)]);if(or__3943__auto__)
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
{var x__6809__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6809__auto__)]);if(or__3943__auto__)
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
return (function (p1__13451_SHARP_){if(cljs.core.truth_(p1__13451_SHARP_.call(null,topic)))
{return p1__13451_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13451_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3943__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13575 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t13575');

/**
* @constructor
*/
cljs.core.async.t13575 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13576){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13576 = meta13576;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13575.cljs$lang$type = true;
cljs.core.async.t13575.cljs$lang$ctorStr = "cljs.core.async/t13575";
cljs.core.async.t13575.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6740__auto__,writer__6741__auto__,opt__6742__auto__){return cljs.core._write.call(null,writer__6741__auto__,"cljs.core.async/t13575");
});})(mults,ensure_mult))
;
cljs.core.async.t13575.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13575.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13575.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13575.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13575.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13575.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13575.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13575.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13577){var self__ = this;
return self__.meta13576;
});})(mults,ensure_mult))
;
cljs.core.async.t13575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13577,meta13576__$1){var self__ = this;
return (new cljs.core.async.t13575(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13576__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13575 = ((function (mults,ensure_mult){
return (function __GT_t13575(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13576){return (new cljs.core.async.t13575(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13576));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13575(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__8281__auto___13698 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8282__auto__ = (function (){var switch__8218__auto__ = (function (state_13650){var state_val_13651 = (state_13650[1]);if((state_val_13651 === 1))
{var state_13650__$1 = state_13650;var statearr_13652_13699 = state_13650__$1;(statearr_13652_13699[2] = null);
(statearr_13652_13699[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13651 === 2))
{var state_13650__$1 = state_13650;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13650__$1,4,ch);
} else
{if((state_val_13651 === 3))
{var inst_13648 = (state_13650[2]);var state_13650__$1 = state_13650;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13650__$1,inst_13648);
} else
{if((state_val_13651 === 4))
{var inst_13580 = (state_13650[5]);var inst_13580__$1 = (state_13650[2]);var inst_13581 = (inst_13580__$1 == null);var state_13650__$1 = (function (){var statearr_13653 = state_13650;(statearr_13653[5] = inst_13580__$1);
return statearr_13653;
})();if(cljs.core.truth_(inst_13581))
{var statearr_13654_13700 = state_13650__$1;(statearr_13654_13700[1] = 5);
} else
{var statearr_13655_13701 = state_13650__$1;(statearr_13655_13701[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13651 === 5))
{var inst_13587 = cljs.core.deref.call(null,mults);var inst_13588 = cljs.core.vals.call(null,inst_13587);var inst_13589 = cljs.core.seq.call(null,inst_13588);var inst_13590 = inst_13589;var inst_13591 = null;var inst_13592 = 0;var inst_13593 = 0;var state_13650__$1 = (function (){var statearr_13656 = state_13650;(statearr_13656[6] = inst_13593);
(statearr_13656[7] = inst_13590);
(statearr_13656[8] = inst_13592);
(statearr_13656[9] = inst_13591);
return statearr_13656;
})();var statearr_13657_13702 = state_13650__$1;(statearr_13657_13702[2] = null);
(statearr_13657_13702[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13651 === 6))
{var inst_13630 = (state_13650[10]);var inst_13628 = (state_13650[11]);var inst_13580 = (state_13650[5]);var inst_13628__$1 = topic_fn.call(null,inst_13580);var inst_13629 = cljs.core.deref.call(null,mults);var inst_13630__$1 = cljs.core.get.call(null,inst_13629,inst_13628__$1);var state_13650__$1 = (function (){var statearr_13658 = state_13650;(statearr_13658[10] = inst_13630__$1);
(statearr_13658[11] = inst_13628__$1);
return statearr_13658;
})();if(cljs.core.truth_(inst_13630__$1))
{var statearr_13659_13703 = state_13650__$1;(statearr_13659_13703[1] = 19);
} else
{var statearr_13660_13704 = state_13650__$1;(statearr_13660_13704[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13651 === 7))
{var inst_13646 = (state_13650[2]);var state_13650__$1 = state_13650;var statearr_13661_13705 = state_13650__$1;(statearr_13661_13705[2] = inst_13646);
(statearr_13661_13705[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13651 === 8))
{var inst_13593 = (state_13650[6]);var inst_13592 = (state_13650[8]);var inst_13595 = (inst_13593 < inst_13592);var inst_13596 = inst_13595;var state_13650__$1 = state_13650;if(cljs.core.truth_(inst_13596))
{var statearr_13665_13706 = state_13650__$1;(statearr_13665_13706[1] = 10);
} else
{var statearr_13666_13707 = state_13650__$1;(statearr_13666_13707[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13651 === 9))
{var inst_13626 = (state_13650[2]);var state_13650__$1 = state_13650;var statearr_13667_13708 = state_13650__$1;(statearr_13667_13708[2] = inst_13626);
(statearr_13667_13708[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13651 === 10))
{var inst_13593 = (state_13650[6]);var inst_13590 = (state_13650[7]);var inst_13592 = (state_13650[8]);var inst_13591 = (state_13650[9]);var inst_13598 = cljs.core._nth.call(null,inst_13591,inst_13593);var inst_13599 = cljs.core.async.muxch_STAR_.call(null,inst_13598);var inst_13600 = cljs.core.async.close_BANG_.call(null,inst_13599);var inst_13601 = (inst_13593 + 1);var tmp13662 = inst_13590;var tmp13663 = inst_13592;var tmp13664 = inst_13591;var inst_13590__$1 = tmp13662;var inst_13591__$1 = tmp13664;var inst_13592__$1 = tmp13663;var inst_13593__$1 = inst_13601;var state_13650__$1 = (function (){var statearr_13668 = state_13650;(statearr_13668[6] = inst_13593__$1);
(statearr_13668[7] = inst_13590__$1);
(statearr_13668[12] = inst_13600);
(statearr_13668[8] = inst_13592__$1);
(statearr_13668[9] = inst_13591__$1);
return statearr_13668;
})();var statearr_13669_13709 = state_13650__$1;(statearr_13669_13709[2] = null);
(statearr_13669_13709[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13651 === 11))
{var inst_13590 = (state_13650[7]);var inst_13604 = (state_13650[13]);var inst_13604__$1 = cljs.core.seq.call(null,inst_13590);var state_13650__$1 = (function (){var statearr_13670 = state_13650;(statearr_13670[13] = inst_13604__$1);
return statearr_13670;
})();if(inst_13604__$1)
{var statearr_13671_13710 = state_13650__$1;(statearr_13671_13710[1] = 13);
} else
{var statearr_13672_13711 = state_13650__$1;(statearr_13672_13711[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13651 === 12))
{var inst_13624 = (state_13650[2]);var state_13650__$1 = state_13650;var statearr_13673_13712 = state_13650__$1;(statearr_13673_13712[2] = inst_13624);
(statearr_13673_13712[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13651 === 13))
{var inst_13604 = (state_13650[13]);var inst_13606 = cljs.core.chunked_seq_QMARK_.call(null,inst_13604);var state_13650__$1 = state_13650;if(inst_13606)
{var statearr_13674_13713 = state_13650__$1;(statearr_13674_13713[1] = 16);
} else
{var statearr_13675_13714 = state_13650__$1;(statearr_13675_13714[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13651 === 14))
{var state_13650__$1 = state_13650;var statearr_13676_13715 = state_13650__$1;(statearr_13676_13715[2] = null);
(statearr_13676_13715[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13651 === 15))
{var inst_13622 = (state_13650[2]);var state_13650__$1 = state_13650;var statearr_13677_13716 = state_13650__$1;(statearr_13677_13716[2] = inst_13622);
(statearr_13677_13716[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13651 === 16))
{var inst_13604 = (state_13650[13]);var inst_13608 = cljs.core.chunk_first.call(null,inst_13604);var inst_13609 = cljs.core.chunk_rest.call(null,inst_13604);var inst_13610 = cljs.core.count.call(null,inst_13608);var inst_13590 = inst_13609;var inst_13591 = inst_13608;var inst_13592 = inst_13610;var inst_13593 = 0;var state_13650__$1 = (function (){var statearr_13678 = state_13650;(statearr_13678[6] = inst_13593);
(statearr_13678[7] = inst_13590);
(statearr_13678[8] = inst_13592);
(statearr_13678[9] = inst_13591);
return statearr_13678;
})();var statearr_13679_13717 = state_13650__$1;(statearr_13679_13717[2] = null);
(statearr_13679_13717[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13651 === 17))
{var inst_13604 = (state_13650[13]);var inst_13613 = cljs.core.first.call(null,inst_13604);var inst_13614 = cljs.core.async.muxch_STAR_.call(null,inst_13613);var inst_13615 = cljs.core.async.close_BANG_.call(null,inst_13614);var inst_13616 = cljs.core.next.call(null,inst_13604);var inst_13590 = inst_13616;var inst_13591 = null;var inst_13592 = 0;var inst_13593 = 0;var state_13650__$1 = (function (){var statearr_13680 = state_13650;(statearr_13680[6] = inst_13593);
(statearr_13680[7] = inst_13590);
(statearr_13680[8] = inst_13592);
(statearr_13680[9] = inst_13591);
(statearr_13680[14] = inst_13615);
return statearr_13680;
})();var statearr_13681_13718 = state_13650__$1;(statearr_13681_13718[2] = null);
(statearr_13681_13718[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13651 === 18))
{var inst_13619 = (state_13650[2]);var state_13650__$1 = state_13650;var statearr_13682_13719 = state_13650__$1;(statearr_13682_13719[2] = inst_13619);
(statearr_13682_13719[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13651 === 19))
{var state_13650__$1 = state_13650;var statearr_13683_13720 = state_13650__$1;(statearr_13683_13720[2] = null);
(statearr_13683_13720[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13651 === 20))
{var state_13650__$1 = state_13650;var statearr_13684_13721 = state_13650__$1;(statearr_13684_13721[2] = null);
(statearr_13684_13721[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13651 === 21))
{var inst_13643 = (state_13650[2]);var state_13650__$1 = (function (){var statearr_13685 = state_13650;(statearr_13685[15] = inst_13643);
return statearr_13685;
})();var statearr_13686_13722 = state_13650__$1;(statearr_13686_13722[2] = null);
(statearr_13686_13722[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13651 === 22))
{var inst_13640 = (state_13650[2]);var state_13650__$1 = state_13650;var statearr_13687_13723 = state_13650__$1;(statearr_13687_13723[2] = inst_13640);
(statearr_13687_13723[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13651 === 23))
{var inst_13628 = (state_13650[11]);var inst_13632 = (state_13650[2]);var inst_13633 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13628);var state_13650__$1 = (function (){var statearr_13688 = state_13650;(statearr_13688[16] = inst_13632);
return statearr_13688;
})();var statearr_13689_13724 = state_13650__$1;(statearr_13689_13724[2] = inst_13633);
(statearr_13689_13724[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13651 === 24))
{try{var inst_13630 = (state_13650[10]);var inst_13580 = (state_13650[5]);var inst_13636 = cljs.core.async.muxch_STAR_.call(null,inst_13630);var state_13650__$1 = state_13650;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13650__$1,25,inst_13636,inst_13580);
}catch (e13690){if((e13690 instanceof Object))
{var ex__8212__auto__ = e13690;var statearr_13691_13725 = state_13650;(statearr_13691_13725[1] = 23);
(statearr_13691_13725[2] = ex__8212__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13690;
} else
{return null;
}
}
}} else
{if((state_val_13651 === 25))
{try{var inst_13638 = (state_13650[2]);var state_13650__$1 = state_13650;var statearr_13694_13726 = state_13650__$1;(statearr_13694_13726[2] = inst_13638);
(statearr_13694_13726[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e13692){if((e13692 instanceof Object))
{var ex__8212__auto__ = e13692;var statearr_13693_13727 = state_13650;(statearr_13693_13727[1] = 23);
(statearr_13693_13727[2] = ex__8212__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13692;
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
});return ((function (switch__8218__auto__){
return (function() {
var state_machine__8219__auto__ = null;
var state_machine__8219__auto____0 = (function (){var statearr_13696 = (new Array(17));(statearr_13696[0] = state_machine__8219__auto__);
(statearr_13696[1] = 1);
return statearr_13696;
});
var state_machine__8219__auto____1 = (function (state_13650){while(true){
var result__8220__auto__ = switch__8218__auto__.call(null,state_13650);if(cljs.core.keyword_identical_QMARK_.call(null,result__8220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8220__auto__;
}
break;
}
});
state_machine__8219__auto__ = function(state_13650){
switch(arguments.length){
case 0:
return state_machine__8219__auto____0.call(this);
case 1:
return state_machine__8219__auto____1.call(this,state_13650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8219__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8219__auto____0;
state_machine__8219__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8219__auto____1;
return state_machine__8219__auto__;
})()
;})(switch__8218__auto__))
})();var state__8283__auto__ = (function (){var statearr_13697 = f__8282__auto__.call(null);(statearr_13697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8281__auto___13698);
return statearr_13697;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8283__auto__);
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
,cljs.core.range.call(null,cnt));var c__8281__auto___13858 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8282__auto__ = (function (){var switch__8218__auto__ = (function (state_13830){var state_val_13831 = (state_13830[1]);if((state_val_13831 === 1))
{var state_13830__$1 = state_13830;var statearr_13832_13859 = state_13830__$1;(statearr_13832_13859[2] = null);
(statearr_13832_13859[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13831 === 2))
{var inst_13794 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13795 = 0;var state_13830__$1 = (function (){var statearr_13833 = state_13830;(statearr_13833[5] = inst_13794);
(statearr_13833[6] = inst_13795);
return statearr_13833;
})();var statearr_13834_13860 = state_13830__$1;(statearr_13834_13860[2] = null);
(statearr_13834_13860[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13831 === 3))
{var inst_13828 = (state_13830[2]);var state_13830__$1 = state_13830;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13830__$1,inst_13828);
} else
{if((state_val_13831 === 4))
{var inst_13795 = (state_13830[6]);var inst_13797 = (inst_13795 < cnt);var state_13830__$1 = state_13830;if(cljs.core.truth_(inst_13797))
{var statearr_13835_13861 = state_13830__$1;(statearr_13835_13861[1] = 6);
} else
{var statearr_13836_13862 = state_13830__$1;(statearr_13836_13862[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13831 === 5))
{var inst_13814 = (state_13830[2]);var state_13830__$1 = (function (){var statearr_13837 = state_13830;(statearr_13837[7] = inst_13814);
return statearr_13837;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13830__$1,12,dchan);
} else
{if((state_val_13831 === 6))
{var state_13830__$1 = state_13830;var statearr_13838_13863 = state_13830__$1;(statearr_13838_13863[2] = null);
(statearr_13838_13863[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13831 === 7))
{var state_13830__$1 = state_13830;var statearr_13839_13864 = state_13830__$1;(statearr_13839_13864[2] = null);
(statearr_13839_13864[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13831 === 8))
{var inst_13812 = (state_13830[2]);var state_13830__$1 = state_13830;var statearr_13840_13865 = state_13830__$1;(statearr_13840_13865[2] = inst_13812);
(statearr_13840_13865[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13831 === 9))
{var inst_13795 = (state_13830[6]);var inst_13807 = (state_13830[2]);var inst_13808 = (inst_13795 + 1);var inst_13795__$1 = inst_13808;var state_13830__$1 = (function (){var statearr_13841 = state_13830;(statearr_13841[8] = inst_13807);
(statearr_13841[6] = inst_13795__$1);
return statearr_13841;
})();var statearr_13842_13866 = state_13830__$1;(statearr_13842_13866[2] = null);
(statearr_13842_13866[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13831 === 10))
{var inst_13799 = (state_13830[2]);var inst_13800 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13830__$1 = (function (){var statearr_13843 = state_13830;(statearr_13843[9] = inst_13799);
return statearr_13843;
})();var statearr_13844_13867 = state_13830__$1;(statearr_13844_13867[2] = inst_13800);
(statearr_13844_13867[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13831 === 11))
{try{var inst_13795 = (state_13830[6]);var inst_13803 = chs__$1.call(null,inst_13795);var inst_13804 = done.call(null,inst_13795);var inst_13805 = cljs.core.async.take_BANG_.call(null,inst_13803,inst_13804);var state_13830__$1 = state_13830;var statearr_13847_13868 = state_13830__$1;(statearr_13847_13868[2] = inst_13805);
(statearr_13847_13868[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e13845){if((e13845 instanceof Object))
{var ex__8212__auto__ = e13845;var statearr_13846_13869 = state_13830;(statearr_13846_13869[1] = 10);
(statearr_13846_13869[2] = ex__8212__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13845;
} else
{return null;
}
}
}} else
{if((state_val_13831 === 12))
{var inst_13816 = (state_13830[10]);var inst_13816__$1 = (state_13830[2]);var inst_13817 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13816__$1);var state_13830__$1 = (function (){var statearr_13848 = state_13830;(statearr_13848[10] = inst_13816__$1);
return statearr_13848;
})();if(cljs.core.truth_(inst_13817))
{var statearr_13849_13870 = state_13830__$1;(statearr_13849_13870[1] = 13);
} else
{var statearr_13850_13871 = state_13830__$1;(statearr_13850_13871[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13831 === 13))
{var inst_13819 = cljs.core.async.close_BANG_.call(null,out);var state_13830__$1 = state_13830;var statearr_13851_13872 = state_13830__$1;(statearr_13851_13872[2] = inst_13819);
(statearr_13851_13872[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13831 === 14))
{var inst_13816 = (state_13830[10]);var inst_13821 = cljs.core.apply.call(null,f,inst_13816);var state_13830__$1 = state_13830;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13830__$1,16,out,inst_13821);
} else
{if((state_val_13831 === 15))
{var inst_13826 = (state_13830[2]);var state_13830__$1 = state_13830;var statearr_13852_13873 = state_13830__$1;(statearr_13852_13873[2] = inst_13826);
(statearr_13852_13873[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13831 === 16))
{var inst_13823 = (state_13830[2]);var state_13830__$1 = (function (){var statearr_13853 = state_13830;(statearr_13853[11] = inst_13823);
return statearr_13853;
})();var statearr_13854_13874 = state_13830__$1;(statearr_13854_13874[2] = null);
(statearr_13854_13874[1] = 2);
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
});return ((function (switch__8218__auto__){
return (function() {
var state_machine__8219__auto__ = null;
var state_machine__8219__auto____0 = (function (){var statearr_13856 = (new Array(12));(statearr_13856[0] = state_machine__8219__auto__);
(statearr_13856[1] = 1);
return statearr_13856;
});
var state_machine__8219__auto____1 = (function (state_13830){while(true){
var result__8220__auto__ = switch__8218__auto__.call(null,state_13830);if(cljs.core.keyword_identical_QMARK_.call(null,result__8220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8220__auto__;
}
break;
}
});
state_machine__8219__auto__ = function(state_13830){
switch(arguments.length){
case 0:
return state_machine__8219__auto____0.call(this);
case 1:
return state_machine__8219__auto____1.call(this,state_13830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8219__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8219__auto____0;
state_machine__8219__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8219__auto____1;
return state_machine__8219__auto__;
})()
;})(switch__8218__auto__))
})();var state__8283__auto__ = (function (){var statearr_13857 = f__8282__auto__.call(null);(statearr_13857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8281__auto___13858);
return statearr_13857;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8283__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8281__auto___13974 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8282__auto__ = (function (){var switch__8218__auto__ = (function (state_13954){var state_val_13955 = (state_13954[1]);if((state_val_13955 === 1))
{var inst_13925 = cljs.core.vec.call(null,chs);var inst_13926 = inst_13925;var state_13954__$1 = (function (){var statearr_13956 = state_13954;(statearr_13956[5] = inst_13926);
return statearr_13956;
})();var statearr_13957_13975 = state_13954__$1;(statearr_13957_13975[2] = null);
(statearr_13957_13975[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13955 === 2))
{var inst_13926 = (state_13954[5]);var inst_13928 = cljs.core.count.call(null,inst_13926);var inst_13929 = (inst_13928 > 0);var state_13954__$1 = state_13954;if(cljs.core.truth_(inst_13929))
{var statearr_13958_13976 = state_13954__$1;(statearr_13958_13976[1] = 4);
} else
{var statearr_13959_13977 = state_13954__$1;(statearr_13959_13977[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13955 === 3))
{var inst_13952 = (state_13954[2]);var state_13954__$1 = state_13954;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13954__$1,inst_13952);
} else
{if((state_val_13955 === 4))
{var inst_13926 = (state_13954[5]);var state_13954__$1 = state_13954;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13954__$1,7,inst_13926);
} else
{if((state_val_13955 === 5))
{var inst_13948 = cljs.core.async.close_BANG_.call(null,out);var state_13954__$1 = state_13954;var statearr_13960_13978 = state_13954__$1;(statearr_13960_13978[2] = inst_13948);
(statearr_13960_13978[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13955 === 6))
{var inst_13950 = (state_13954[2]);var state_13954__$1 = state_13954;var statearr_13961_13979 = state_13954__$1;(statearr_13961_13979[2] = inst_13950);
(statearr_13961_13979[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13955 === 7))
{var inst_13933 = (state_13954[6]);var inst_13934 = (state_13954[7]);var inst_13933__$1 = (state_13954[2]);var inst_13934__$1 = cljs.core.nth.call(null,inst_13933__$1,0,null);var inst_13935 = cljs.core.nth.call(null,inst_13933__$1,1,null);var inst_13936 = (inst_13934__$1 == null);var state_13954__$1 = (function (){var statearr_13962 = state_13954;(statearr_13962[8] = inst_13935);
(statearr_13962[6] = inst_13933__$1);
(statearr_13962[7] = inst_13934__$1);
return statearr_13962;
})();if(cljs.core.truth_(inst_13936))
{var statearr_13963_13980 = state_13954__$1;(statearr_13963_13980[1] = 8);
} else
{var statearr_13964_13981 = state_13954__$1;(statearr_13964_13981[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13955 === 8))
{var inst_13926 = (state_13954[5]);var inst_13935 = (state_13954[8]);var inst_13933 = (state_13954[6]);var inst_13934 = (state_13954[7]);var inst_13938 = (function (){var c = inst_13935;var v = inst_13934;var vec__13931 = inst_13933;var cs = inst_13926;return ((function (c,v,vec__13931,cs,inst_13926,inst_13935,inst_13933,inst_13934,state_val_13955){
return (function (p1__13875_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13875_SHARP_);
});
;})(c,v,vec__13931,cs,inst_13926,inst_13935,inst_13933,inst_13934,state_val_13955))
})();var inst_13939 = cljs.core.filterv.call(null,inst_13938,inst_13926);var inst_13926__$1 = inst_13939;var state_13954__$1 = (function (){var statearr_13965 = state_13954;(statearr_13965[5] = inst_13926__$1);
return statearr_13965;
})();var statearr_13966_13982 = state_13954__$1;(statearr_13966_13982[2] = null);
(statearr_13966_13982[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13955 === 9))
{var inst_13934 = (state_13954[7]);var state_13954__$1 = state_13954;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13954__$1,11,out,inst_13934);
} else
{if((state_val_13955 === 10))
{var inst_13946 = (state_13954[2]);var state_13954__$1 = state_13954;var statearr_13968_13983 = state_13954__$1;(statearr_13968_13983[2] = inst_13946);
(statearr_13968_13983[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13955 === 11))
{var inst_13926 = (state_13954[5]);var inst_13943 = (state_13954[2]);var tmp13967 = inst_13926;var inst_13926__$1 = tmp13967;var state_13954__$1 = (function (){var statearr_13969 = state_13954;(statearr_13969[5] = inst_13926__$1);
(statearr_13969[9] = inst_13943);
return statearr_13969;
})();var statearr_13970_13984 = state_13954__$1;(statearr_13970_13984[2] = null);
(statearr_13970_13984[1] = 2);
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
});return ((function (switch__8218__auto__){
return (function() {
var state_machine__8219__auto__ = null;
var state_machine__8219__auto____0 = (function (){var statearr_13972 = (new Array(10));(statearr_13972[0] = state_machine__8219__auto__);
(statearr_13972[1] = 1);
return statearr_13972;
});
var state_machine__8219__auto____1 = (function (state_13954){while(true){
var result__8220__auto__ = switch__8218__auto__.call(null,state_13954);if(cljs.core.keyword_identical_QMARK_.call(null,result__8220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8220__auto__;
}
break;
}
});
state_machine__8219__auto__ = function(state_13954){
switch(arguments.length){
case 0:
return state_machine__8219__auto____0.call(this);
case 1:
return state_machine__8219__auto____1.call(this,state_13954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8219__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8219__auto____0;
state_machine__8219__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8219__auto____1;
return state_machine__8219__auto__;
})()
;})(switch__8218__auto__))
})();var state__8283__auto__ = (function (){var statearr_13973 = f__8282__auto__.call(null);(statearr_13973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8281__auto___13974);
return statearr_13973;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8283__auto__);
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
