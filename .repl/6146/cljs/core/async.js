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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12039 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12039');

/**
* @constructor
*/
cljs.core.async.t12039 = (function (f,fn_handler,meta12040){
this.f = f;
this.fn_handler = fn_handler;
this.meta12040 = meta12040;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12039.cljs$lang$type = true;
cljs.core.async.t12039.cljs$lang$ctorStr = "cljs.core.async/t12039";
cljs.core.async.t12039.cljs$lang$ctorPrWriter = (function (this__6736__auto__,writer__6737__auto__,opt__6738__auto__){return cljs.core._write.call(null,writer__6737__auto__,"cljs.core.async/t12039");
});
cljs.core.async.t12039.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12039.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return true;
});
cljs.core.async.t12039.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
return self__.f;
});
cljs.core.async.t12039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12041){var self__ = this;
return self__.meta12040;
});
cljs.core.async.t12039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12041,meta12040__$1){var self__ = this;
return (new cljs.core.async.t12039(self__.f,self__.fn_handler,meta12040__$1));
});
cljs.core.async.__GT_t12039 = (function __GT_t12039(f__$1,fn_handler__$1,meta12040){return (new cljs.core.async.t12039(f__$1,fn_handler__$1,meta12040));
});
}
return (new cljs.core.async.t12039(f,fn_handler,null));
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
{var val_12042 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12042);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_12042);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__6965__auto___12043 = n;var x_12044 = 0;while(true){
if((x_12044 < n__6965__auto___12043))
{(a[x_12044] = 0);
{
var G__12045 = (x_12044 + 1);
x_12044 = G__12045;
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
var G__12046 = (i + 1);
i = G__12046;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12050 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12050');

/**
* @constructor
*/
cljs.core.async.t12050 = (function (flag,alt_flag,meta12051){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12051 = meta12051;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12050.cljs$lang$type = true;
cljs.core.async.t12050.cljs$lang$ctorStr = "cljs.core.async/t12050";
cljs.core.async.t12050.cljs$lang$ctorPrWriter = (function (this__6736__auto__,writer__6737__auto__,opt__6738__auto__){return cljs.core._write.call(null,writer__6737__auto__,"cljs.core.async/t12050");
});
cljs.core.async.t12050.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12050.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t12050.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t12050.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12052){var self__ = this;
return self__.meta12051;
});
cljs.core.async.t12050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12052,meta12051__$1){var self__ = this;
return (new cljs.core.async.t12050(self__.flag,self__.alt_flag,meta12051__$1));
});
cljs.core.async.__GT_t12050 = (function __GT_t12050(flag__$1,alt_flag__$1,meta12051){return (new cljs.core.async.t12050(flag__$1,alt_flag__$1,meta12051));
});
}
return (new cljs.core.async.t12050(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12056 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12056');

/**
* @constructor
*/
cljs.core.async.t12056 = (function (cb,flag,alt_handler,meta12057){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12057 = meta12057;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12056.cljs$lang$type = true;
cljs.core.async.t12056.cljs$lang$ctorStr = "cljs.core.async/t12056";
cljs.core.async.t12056.cljs$lang$ctorPrWriter = (function (this__6736__auto__,writer__6737__auto__,opt__6738__auto__){return cljs.core._write.call(null,writer__6737__auto__,"cljs.core.async/t12056");
});
cljs.core.async.t12056.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12056.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12056.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12058){var self__ = this;
return self__.meta12057;
});
cljs.core.async.t12056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12058,meta12057__$1){var self__ = this;
return (new cljs.core.async.t12056(self__.cb,self__.flag,self__.alt_handler,meta12057__$1));
});
cljs.core.async.__GT_t12056 = (function __GT_t12056(cb__$1,flag__$1,alt_handler__$1,meta12057){return (new cljs.core.async.t12056(cb__$1,flag__$1,alt_handler__$1,meta12057));
});
}
return (new cljs.core.async.t12056(cb,flag,alt_handler,null));
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
return (function (p1__12059_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__12059_SHARP_,port], true));
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
var G__12060 = (i + 1);
i = G__12060;
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
var alts_BANG___delegate = function (ports,p__12061){var map__12063 = p__12061;var map__12063__$1 = ((cljs.core.seq_QMARK_.call(null,map__12063))?cljs.core.apply.call(null,cljs.core.hash_map,map__12063):map__12063);var opts = map__12063__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__12061 = null;if (arguments.length > 1) {
  p__12061 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12061);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12064){
var ports = cljs.core.first(arglist__12064);
var p__12061 = cljs.core.rest(arglist__12064);
return alts_BANG___delegate(ports,p__12061);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t12072 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12072');

/**
* @constructor
*/
cljs.core.async.t12072 = (function (ch,f,map_LT_,meta12073){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12073 = meta12073;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12072.cljs$lang$type = true;
cljs.core.async.t12072.cljs$lang$ctorStr = "cljs.core.async/t12072";
cljs.core.async.t12072.cljs$lang$ctorPrWriter = (function (this__6736__auto__,writer__6737__auto__,opt__6738__auto__){return cljs.core._write.call(null,writer__6737__auto__,"cljs.core.async/t12072");
});
cljs.core.async.t12072.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12072.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t12072.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12072.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t12075 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12075');

/**
* @constructor
*/
cljs.core.async.t12075 = (function (fn1,_,meta12073,ch,f,map_LT_,meta12076){
this.fn1 = fn1;
this._ = _;
this.meta12073 = meta12073;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12076 = meta12076;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12075.cljs$lang$type = true;
cljs.core.async.t12075.cljs$lang$ctorStr = "cljs.core.async/t12075";
cljs.core.async.t12075.cljs$lang$ctorPrWriter = (function (this__6736__auto__,writer__6737__auto__,opt__6738__auto__){return cljs.core._write.call(null,writer__6737__auto__,"cljs.core.async/t12075");
});
cljs.core.async.t12075.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12075.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$2){var self__ = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t12075.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$2){var self__ = this;
return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t12075.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$2){var self__ = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1){
return (function (p1__12065_SHARP_){return f1.call(null,(((p1__12065_SHARP_ == null))?null:self__.f.call(null,p1__12065_SHARP_)));
});
;})(f1))
});
cljs.core.async.t12075.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12077){var self__ = this;
return self__.meta12076;
});
cljs.core.async.t12075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12077,meta12076__$1){var self__ = this;
return (new cljs.core.async.t12075(self__.fn1,self__._,self__.meta12073,self__.ch,self__.f,self__.map_LT_,meta12076__$1));
});
cljs.core.async.__GT_t12075 = (function __GT_t12075(fn1__$1,___$1,meta12073__$1,ch__$2,f__$2,map_LT___$2,meta12076){return (new cljs.core.async.t12075(fn1__$1,___$1,meta12073__$1,ch__$2,f__$2,map_LT___$2,meta12076));
});
}
return (new cljs.core.async.t12075(fn1,_,self__.meta12073,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t12072.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12072.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12072.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12074){var self__ = this;
return self__.meta12073;
});
cljs.core.async.t12072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12074,meta12073__$1){var self__ = this;
return (new cljs.core.async.t12072(self__.ch,self__.f,self__.map_LT_,meta12073__$1));
});
cljs.core.async.__GT_t12072 = (function __GT_t12072(ch__$1,f__$1,map_LT___$1,meta12073){return (new cljs.core.async.t12072(ch__$1,f__$1,map_LT___$1,meta12073));
});
}
return (new cljs.core.async.t12072(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t12081 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12081');

/**
* @constructor
*/
cljs.core.async.t12081 = (function (ch,f,map_GT_,meta12082){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta12082 = meta12082;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12081.cljs$lang$type = true;
cljs.core.async.t12081.cljs$lang$ctorStr = "cljs.core.async/t12081";
cljs.core.async.t12081.cljs$lang$ctorPrWriter = (function (this__6736__auto__,writer__6737__auto__,opt__6738__auto__){return cljs.core._write.call(null,writer__6737__auto__,"cljs.core.async/t12081");
});
cljs.core.async.t12081.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12081.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t12081.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12081.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12081.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12081.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12081.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12083){var self__ = this;
return self__.meta12082;
});
cljs.core.async.t12081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12083,meta12082__$1){var self__ = this;
return (new cljs.core.async.t12081(self__.ch,self__.f,self__.map_GT_,meta12082__$1));
});
cljs.core.async.__GT_t12081 = (function __GT_t12081(ch__$1,f__$1,map_GT___$1,meta12082){return (new cljs.core.async.t12081(ch__$1,f__$1,map_GT___$1,meta12082));
});
}
return (new cljs.core.async.t12081(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t12087 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12087');

/**
* @constructor
*/
cljs.core.async.t12087 = (function (ch,p,filter_GT_,meta12088){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta12088 = meta12088;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12087.cljs$lang$type = true;
cljs.core.async.t12087.cljs$lang$ctorStr = "cljs.core.async/t12087";
cljs.core.async.t12087.cljs$lang$ctorPrWriter = (function (this__6736__auto__,writer__6737__auto__,opt__6738__auto__){return cljs.core._write.call(null,writer__6737__auto__,"cljs.core.async/t12087");
});
cljs.core.async.t12087.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12087.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
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
return (new cljs.core.async.t12087(self__.ch,self__.p,self__.filter_GT_,meta12088__$1));
});
cljs.core.async.__GT_t12087 = (function __GT_t12087(ch__$1,p__$1,filter_GT___$1,meta12088){return (new cljs.core.async.t12087(ch__$1,p__$1,filter_GT___$1,meta12088));
});
}
return (new cljs.core.async.t12087(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8306__auto___12164 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8307__auto__ = (function (){var switch__8231__auto__ = (function (state_12147){var state_val_12148 = (state_12147[1]);if((state_val_12148 === 1))
{var state_12147__$1 = state_12147;var statearr_12149_12165 = state_12147__$1;(statearr_12149_12165[2] = null);
(statearr_12149_12165[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12148 === 2))
{var state_12147__$1 = state_12147;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12147__$1,4,ch);
} else
{if((state_val_12148 === 3))
{var inst_12145 = (state_12147[2]);var state_12147__$1 = state_12147;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12147__$1,inst_12145);
} else
{if((state_val_12148 === 4))
{var inst_12129 = (state_12147[5]);var inst_12129__$1 = (state_12147[2]);var inst_12130 = (inst_12129__$1 == null);var state_12147__$1 = (function (){var statearr_12150 = state_12147;(statearr_12150[5] = inst_12129__$1);
return statearr_12150;
})();if(cljs.core.truth_(inst_12130))
{var statearr_12151_12166 = state_12147__$1;(statearr_12151_12166[1] = 5);
} else
{var statearr_12152_12167 = state_12147__$1;(statearr_12152_12167[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12148 === 5))
{var inst_12132 = cljs.core.async.close_BANG_.call(null,out);var state_12147__$1 = state_12147;var statearr_12153_12168 = state_12147__$1;(statearr_12153_12168[2] = inst_12132);
(statearr_12153_12168[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12148 === 6))
{var inst_12129 = (state_12147[5]);var inst_12134 = p.call(null,inst_12129);var state_12147__$1 = state_12147;if(cljs.core.truth_(inst_12134))
{var statearr_12154_12169 = state_12147__$1;(statearr_12154_12169[1] = 8);
} else
{var statearr_12155_12170 = state_12147__$1;(statearr_12155_12170[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12148 === 7))
{var inst_12143 = (state_12147[2]);var state_12147__$1 = state_12147;var statearr_12156_12171 = state_12147__$1;(statearr_12156_12171[2] = inst_12143);
(statearr_12156_12171[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12148 === 8))
{var inst_12129 = (state_12147[5]);var state_12147__$1 = state_12147;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12147__$1,11,out,inst_12129);
} else
{if((state_val_12148 === 9))
{var state_12147__$1 = state_12147;var statearr_12157_12172 = state_12147__$1;(statearr_12157_12172[2] = null);
(statearr_12157_12172[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12148 === 10))
{var inst_12140 = (state_12147[2]);var state_12147__$1 = (function (){var statearr_12158 = state_12147;(statearr_12158[6] = inst_12140);
return statearr_12158;
})();var statearr_12159_12173 = state_12147__$1;(statearr_12159_12173[2] = null);
(statearr_12159_12173[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12148 === 11))
{var inst_12137 = (state_12147[2]);var state_12147__$1 = state_12147;var statearr_12160_12174 = state_12147__$1;(statearr_12160_12174[2] = inst_12137);
(statearr_12160_12174[1] = 10);
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
});return ((function (switch__8231__auto__){
return (function() {
var state_machine__8232__auto__ = null;
var state_machine__8232__auto____0 = (function (){var statearr_12162 = (new Array(7));(statearr_12162[0] = state_machine__8232__auto__);
(statearr_12162[1] = 1);
return statearr_12162;
});
var state_machine__8232__auto____1 = (function (state_12147){while(true){
var result__8233__auto__ = switch__8231__auto__.call(null,state_12147);if(cljs.core.keyword_identical_QMARK_.call(null,result__8233__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8233__auto__;
}
break;
}
});
state_machine__8232__auto__ = function(state_12147){
switch(arguments.length){
case 0:
return state_machine__8232__auto____0.call(this);
case 1:
return state_machine__8232__auto____1.call(this,state_12147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8232__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8232__auto____0;
state_machine__8232__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8232__auto____1;
return state_machine__8232__auto__;
})()
;})(switch__8231__auto__))
})();var state__8308__auto__ = (function (){var statearr_12163 = f__8307__auto__.call(null);(statearr_12163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8306__auto___12164);
return statearr_12163;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8308__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__8306__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8307__auto__ = (function (){var switch__8231__auto__ = (function (state_12322){var state_val_12323 = (state_12322[1]);if((state_val_12323 === 1))
{var state_12322__$1 = state_12322;var statearr_12324_12357 = state_12322__$1;(statearr_12324_12357[2] = null);
(statearr_12324_12357[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 2))
{var state_12322__$1 = state_12322;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12322__$1,4,in$);
} else
{if((state_val_12323 === 3))
{var inst_12320 = (state_12322[2]);var state_12322__$1 = state_12322;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12322__$1,inst_12320);
} else
{if((state_val_12323 === 4))
{var inst_12268 = (state_12322[5]);var inst_12268__$1 = (state_12322[2]);var inst_12269 = (inst_12268__$1 == null);var state_12322__$1 = (function (){var statearr_12325 = state_12322;(statearr_12325[5] = inst_12268__$1);
return statearr_12325;
})();if(cljs.core.truth_(inst_12269))
{var statearr_12326_12358 = state_12322__$1;(statearr_12326_12358[1] = 5);
} else
{var statearr_12327_12359 = state_12322__$1;(statearr_12327_12359[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 5))
{var inst_12271 = cljs.core.async.close_BANG_.call(null,out);var state_12322__$1 = state_12322;var statearr_12328_12360 = state_12322__$1;(statearr_12328_12360[2] = inst_12271);
(statearr_12328_12360[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 6))
{var inst_12268 = (state_12322[5]);var inst_12273 = f.call(null,inst_12268);var inst_12278 = cljs.core.seq.call(null,inst_12273);var inst_12279 = inst_12278;var inst_12280 = null;var inst_12281 = 0;var inst_12282 = 0;var state_12322__$1 = (function (){var statearr_12329 = state_12322;(statearr_12329[6] = inst_12279);
(statearr_12329[7] = inst_12281);
(statearr_12329[8] = inst_12280);
(statearr_12329[9] = inst_12282);
return statearr_12329;
})();var statearr_12330_12361 = state_12322__$1;(statearr_12330_12361[2] = null);
(statearr_12330_12361[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 7))
{var inst_12318 = (state_12322[2]);var state_12322__$1 = state_12322;var statearr_12331_12362 = state_12322__$1;(statearr_12331_12362[2] = inst_12318);
(statearr_12331_12362[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 8))
{var inst_12281 = (state_12322[7]);var inst_12282 = (state_12322[9]);var inst_12284 = (inst_12282 < inst_12281);var inst_12285 = inst_12284;var state_12322__$1 = state_12322;if(cljs.core.truth_(inst_12285))
{var statearr_12332_12363 = state_12322__$1;(statearr_12332_12363[1] = 10);
} else
{var statearr_12333_12364 = state_12322__$1;(statearr_12333_12364[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 9))
{var inst_12315 = (state_12322[2]);var state_12322__$1 = (function (){var statearr_12334 = state_12322;(statearr_12334[10] = inst_12315);
return statearr_12334;
})();var statearr_12335_12365 = state_12322__$1;(statearr_12335_12365[2] = null);
(statearr_12335_12365[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 10))
{var inst_12280 = (state_12322[8]);var inst_12282 = (state_12322[9]);var inst_12287 = cljs.core._nth.call(null,inst_12280,inst_12282);var state_12322__$1 = state_12322;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12322__$1,13,out,inst_12287);
} else
{if((state_val_12323 === 11))
{var inst_12279 = (state_12322[6]);var inst_12293 = (state_12322[11]);var inst_12293__$1 = cljs.core.seq.call(null,inst_12279);var state_12322__$1 = (function (){var statearr_12339 = state_12322;(statearr_12339[11] = inst_12293__$1);
return statearr_12339;
})();if(inst_12293__$1)
{var statearr_12340_12366 = state_12322__$1;(statearr_12340_12366[1] = 14);
} else
{var statearr_12341_12367 = state_12322__$1;(statearr_12341_12367[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 12))
{var inst_12313 = (state_12322[2]);var state_12322__$1 = state_12322;var statearr_12342_12368 = state_12322__$1;(statearr_12342_12368[2] = inst_12313);
(statearr_12342_12368[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 13))
{var inst_12279 = (state_12322[6]);var inst_12281 = (state_12322[7]);var inst_12280 = (state_12322[8]);var inst_12282 = (state_12322[9]);var inst_12289 = (state_12322[2]);var inst_12290 = (inst_12282 + 1);var tmp12336 = inst_12279;var tmp12337 = inst_12281;var tmp12338 = inst_12280;var inst_12279__$1 = tmp12336;var inst_12280__$1 = tmp12338;var inst_12281__$1 = tmp12337;var inst_12282__$1 = inst_12290;var state_12322__$1 = (function (){var statearr_12343 = state_12322;(statearr_12343[6] = inst_12279__$1);
(statearr_12343[7] = inst_12281__$1);
(statearr_12343[8] = inst_12280__$1);
(statearr_12343[9] = inst_12282__$1);
(statearr_12343[12] = inst_12289);
return statearr_12343;
})();var statearr_12344_12369 = state_12322__$1;(statearr_12344_12369[2] = null);
(statearr_12344_12369[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 14))
{var inst_12293 = (state_12322[11]);var inst_12295 = cljs.core.chunked_seq_QMARK_.call(null,inst_12293);var state_12322__$1 = state_12322;if(inst_12295)
{var statearr_12345_12370 = state_12322__$1;(statearr_12345_12370[1] = 17);
} else
{var statearr_12346_12371 = state_12322__$1;(statearr_12346_12371[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 15))
{var state_12322__$1 = state_12322;var statearr_12347_12372 = state_12322__$1;(statearr_12347_12372[2] = null);
(statearr_12347_12372[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 16))
{var inst_12311 = (state_12322[2]);var state_12322__$1 = state_12322;var statearr_12348_12373 = state_12322__$1;(statearr_12348_12373[2] = inst_12311);
(statearr_12348_12373[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 17))
{var inst_12293 = (state_12322[11]);var inst_12297 = cljs.core.chunk_first.call(null,inst_12293);var inst_12298 = cljs.core.chunk_rest.call(null,inst_12293);var inst_12299 = cljs.core.count.call(null,inst_12297);var inst_12279 = inst_12298;var inst_12280 = inst_12297;var inst_12281 = inst_12299;var inst_12282 = 0;var state_12322__$1 = (function (){var statearr_12349 = state_12322;(statearr_12349[6] = inst_12279);
(statearr_12349[7] = inst_12281);
(statearr_12349[8] = inst_12280);
(statearr_12349[9] = inst_12282);
return statearr_12349;
})();var statearr_12350_12374 = state_12322__$1;(statearr_12350_12374[2] = null);
(statearr_12350_12374[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 18))
{var inst_12293 = (state_12322[11]);var inst_12302 = cljs.core.first.call(null,inst_12293);var state_12322__$1 = state_12322;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12322__$1,20,out,inst_12302);
} else
{if((state_val_12323 === 19))
{var inst_12308 = (state_12322[2]);var state_12322__$1 = state_12322;var statearr_12351_12375 = state_12322__$1;(statearr_12351_12375[2] = inst_12308);
(statearr_12351_12375[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 20))
{var inst_12293 = (state_12322[11]);var inst_12304 = (state_12322[2]);var inst_12305 = cljs.core.next.call(null,inst_12293);var inst_12279 = inst_12305;var inst_12280 = null;var inst_12281 = 0;var inst_12282 = 0;var state_12322__$1 = (function (){var statearr_12352 = state_12322;(statearr_12352[13] = inst_12304);
(statearr_12352[6] = inst_12279);
(statearr_12352[7] = inst_12281);
(statearr_12352[8] = inst_12280);
(statearr_12352[9] = inst_12282);
return statearr_12352;
})();var statearr_12353_12376 = state_12322__$1;(statearr_12353_12376[2] = null);
(statearr_12353_12376[1] = 8);
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
});return ((function (switch__8231__auto__){
return (function() {
var state_machine__8232__auto__ = null;
var state_machine__8232__auto____0 = (function (){var statearr_12355 = (new Array(14));(statearr_12355[0] = state_machine__8232__auto__);
(statearr_12355[1] = 1);
return statearr_12355;
});
var state_machine__8232__auto____1 = (function (state_12322){while(true){
var result__8233__auto__ = switch__8231__auto__.call(null,state_12322);if(cljs.core.keyword_identical_QMARK_.call(null,result__8233__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8233__auto__;
}
break;
}
});
state_machine__8232__auto__ = function(state_12322){
switch(arguments.length){
case 0:
return state_machine__8232__auto____0.call(this);
case 1:
return state_machine__8232__auto____1.call(this,state_12322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8232__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8232__auto____0;
state_machine__8232__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8232__auto____1;
return state_machine__8232__auto__;
})()
;})(switch__8231__auto__))
})();var state__8308__auto__ = (function (){var statearr_12356 = f__8307__auto__.call(null);(statearr_12356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8306__auto__);
return statearr_12356;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8308__auto__);
}));
return c__8306__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__8306__auto___12449 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8307__auto__ = (function (){var switch__8231__auto__ = (function (state_12432){var state_val_12433 = (state_12432[1]);if((state_val_12433 === 1))
{var state_12432__$1 = state_12432;var statearr_12434_12450 = state_12432__$1;(statearr_12434_12450[2] = null);
(statearr_12434_12450[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12433 === 2))
{var state_12432__$1 = state_12432;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12432__$1,4,from);
} else
{if((state_val_12433 === 3))
{var inst_12430 = (state_12432[2]);var state_12432__$1 = state_12432;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12432__$1,inst_12430);
} else
{if((state_val_12433 === 4))
{var inst_12415 = (state_12432[5]);var inst_12415__$1 = (state_12432[2]);var inst_12416 = (inst_12415__$1 == null);var state_12432__$1 = (function (){var statearr_12435 = state_12432;(statearr_12435[5] = inst_12415__$1);
return statearr_12435;
})();if(cljs.core.truth_(inst_12416))
{var statearr_12436_12451 = state_12432__$1;(statearr_12436_12451[1] = 5);
} else
{var statearr_12437_12452 = state_12432__$1;(statearr_12437_12452[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12433 === 5))
{var state_12432__$1 = state_12432;if(cljs.core.truth_(close_QMARK_))
{var statearr_12438_12453 = state_12432__$1;(statearr_12438_12453[1] = 8);
} else
{var statearr_12439_12454 = state_12432__$1;(statearr_12439_12454[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12433 === 6))
{var inst_12415 = (state_12432[5]);var state_12432__$1 = state_12432;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12432__$1,11,to,inst_12415);
} else
{if((state_val_12433 === 7))
{var inst_12428 = (state_12432[2]);var state_12432__$1 = state_12432;var statearr_12440_12455 = state_12432__$1;(statearr_12440_12455[2] = inst_12428);
(statearr_12440_12455[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12433 === 8))
{var inst_12419 = cljs.core.async.close_BANG_.call(null,to);var state_12432__$1 = state_12432;var statearr_12441_12456 = state_12432__$1;(statearr_12441_12456[2] = inst_12419);
(statearr_12441_12456[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12433 === 9))
{var state_12432__$1 = state_12432;var statearr_12442_12457 = state_12432__$1;(statearr_12442_12457[2] = null);
(statearr_12442_12457[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12433 === 10))
{var inst_12422 = (state_12432[2]);var state_12432__$1 = state_12432;var statearr_12443_12458 = state_12432__$1;(statearr_12443_12458[2] = inst_12422);
(statearr_12443_12458[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12433 === 11))
{var inst_12425 = (state_12432[2]);var state_12432__$1 = (function (){var statearr_12444 = state_12432;(statearr_12444[6] = inst_12425);
return statearr_12444;
})();var statearr_12445_12459 = state_12432__$1;(statearr_12445_12459[2] = null);
(statearr_12445_12459[1] = 2);
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
});return ((function (switch__8231__auto__){
return (function() {
var state_machine__8232__auto__ = null;
var state_machine__8232__auto____0 = (function (){var statearr_12447 = (new Array(7));(statearr_12447[0] = state_machine__8232__auto__);
(statearr_12447[1] = 1);
return statearr_12447;
});
var state_machine__8232__auto____1 = (function (state_12432){while(true){
var result__8233__auto__ = switch__8231__auto__.call(null,state_12432);if(cljs.core.keyword_identical_QMARK_.call(null,result__8233__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8233__auto__;
}
break;
}
});
state_machine__8232__auto__ = function(state_12432){
switch(arguments.length){
case 0:
return state_machine__8232__auto____0.call(this);
case 1:
return state_machine__8232__auto____1.call(this,state_12432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8232__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8232__auto____0;
state_machine__8232__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8232__auto____1;
return state_machine__8232__auto__;
})()
;})(switch__8231__auto__))
})();var state__8308__auto__ = (function (){var statearr_12448 = f__8307__auto__.call(null);(statearr_12448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8306__auto___12449);
return statearr_12448;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8308__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__8306__auto___12538 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8307__auto__ = (function (){var switch__8231__auto__ = (function (state_12520){var state_val_12521 = (state_12520[1]);if((state_val_12521 === 1))
{var state_12520__$1 = state_12520;var statearr_12522_12539 = state_12520__$1;(statearr_12522_12539[2] = null);
(statearr_12522_12539[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12521 === 2))
{var state_12520__$1 = state_12520;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12520__$1,4,ch);
} else
{if((state_val_12521 === 3))
{var inst_12518 = (state_12520[2]);var state_12520__$1 = state_12520;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12520__$1,inst_12518);
} else
{if((state_val_12521 === 4))
{var inst_12501 = (state_12520[5]);var inst_12501__$1 = (state_12520[2]);var inst_12502 = (inst_12501__$1 == null);var state_12520__$1 = (function (){var statearr_12523 = state_12520;(statearr_12523[5] = inst_12501__$1);
return statearr_12523;
})();if(cljs.core.truth_(inst_12502))
{var statearr_12524_12540 = state_12520__$1;(statearr_12524_12540[1] = 5);
} else
{var statearr_12525_12541 = state_12520__$1;(statearr_12525_12541[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12521 === 5))
{var inst_12504 = cljs.core.async.close_BANG_.call(null,tc);var inst_12505 = cljs.core.async.close_BANG_.call(null,fc);var state_12520__$1 = (function (){var statearr_12526 = state_12520;(statearr_12526[6] = inst_12504);
return statearr_12526;
})();var statearr_12527_12542 = state_12520__$1;(statearr_12527_12542[2] = inst_12505);
(statearr_12527_12542[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12521 === 6))
{var inst_12501 = (state_12520[5]);var inst_12507 = p.call(null,inst_12501);var state_12520__$1 = state_12520;if(cljs.core.truth_(inst_12507))
{var statearr_12528_12543 = state_12520__$1;(statearr_12528_12543[1] = 9);
} else
{var statearr_12529_12544 = state_12520__$1;(statearr_12529_12544[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12521 === 7))
{var inst_12516 = (state_12520[2]);var state_12520__$1 = state_12520;var statearr_12530_12545 = state_12520__$1;(statearr_12530_12545[2] = inst_12516);
(statearr_12530_12545[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12521 === 8))
{var inst_12513 = (state_12520[2]);var state_12520__$1 = (function (){var statearr_12531 = state_12520;(statearr_12531[7] = inst_12513);
return statearr_12531;
})();var statearr_12532_12546 = state_12520__$1;(statearr_12532_12546[2] = null);
(statearr_12532_12546[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12521 === 9))
{var state_12520__$1 = state_12520;var statearr_12533_12547 = state_12520__$1;(statearr_12533_12547[2] = tc);
(statearr_12533_12547[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12521 === 10))
{var state_12520__$1 = state_12520;var statearr_12534_12548 = state_12520__$1;(statearr_12534_12548[2] = fc);
(statearr_12534_12548[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12521 === 11))
{var inst_12501 = (state_12520[5]);var inst_12511 = (state_12520[2]);var state_12520__$1 = state_12520;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12520__$1,8,inst_12511,inst_12501);
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
});return ((function (switch__8231__auto__){
return (function() {
var state_machine__8232__auto__ = null;
var state_machine__8232__auto____0 = (function (){var statearr_12536 = (new Array(8));(statearr_12536[0] = state_machine__8232__auto__);
(statearr_12536[1] = 1);
return statearr_12536;
});
var state_machine__8232__auto____1 = (function (state_12520){while(true){
var result__8233__auto__ = switch__8231__auto__.call(null,state_12520);if(cljs.core.keyword_identical_QMARK_.call(null,result__8233__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8233__auto__;
}
break;
}
});
state_machine__8232__auto__ = function(state_12520){
switch(arguments.length){
case 0:
return state_machine__8232__auto____0.call(this);
case 1:
return state_machine__8232__auto____1.call(this,state_12520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8232__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8232__auto____0;
state_machine__8232__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8232__auto____1;
return state_machine__8232__auto__;
})()
;})(switch__8231__auto__))
})();var state__8308__auto__ = (function (){var statearr_12537 = f__8307__auto__.call(null);(statearr_12537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8306__auto___12538);
return statearr_12537;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8308__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__8306__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8307__auto__ = (function (){var switch__8231__auto__ = (function (state_12591){var state_val_12592 = (state_12591[1]);if((state_val_12592 === 7))
{var inst_12587 = (state_12591[2]);var state_12591__$1 = state_12591;var statearr_12593_12605 = state_12591__$1;(statearr_12593_12605[2] = inst_12587);
(statearr_12593_12605[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12592 === 6))
{var inst_12580 = (state_12591[5]);var inst_12577 = (state_12591[6]);var inst_12584 = f.call(null,inst_12577,inst_12580);var inst_12577__$1 = inst_12584;var state_12591__$1 = (function (){var statearr_12594 = state_12591;(statearr_12594[6] = inst_12577__$1);
return statearr_12594;
})();var statearr_12595_12606 = state_12591__$1;(statearr_12595_12606[2] = null);
(statearr_12595_12606[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12592 === 5))
{var inst_12577 = (state_12591[6]);var state_12591__$1 = state_12591;var statearr_12596_12607 = state_12591__$1;(statearr_12596_12607[2] = inst_12577);
(statearr_12596_12607[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12592 === 4))
{var inst_12580 = (state_12591[5]);var inst_12580__$1 = (state_12591[2]);var inst_12581 = (inst_12580__$1 == null);var state_12591__$1 = (function (){var statearr_12597 = state_12591;(statearr_12597[5] = inst_12580__$1);
return statearr_12597;
})();if(cljs.core.truth_(inst_12581))
{var statearr_12598_12608 = state_12591__$1;(statearr_12598_12608[1] = 5);
} else
{var statearr_12599_12609 = state_12591__$1;(statearr_12599_12609[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12592 === 3))
{var inst_12589 = (state_12591[2]);var state_12591__$1 = state_12591;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12591__$1,inst_12589);
} else
{if((state_val_12592 === 2))
{var state_12591__$1 = state_12591;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12591__$1,4,ch);
} else
{if((state_val_12592 === 1))
{var inst_12577 = init;var state_12591__$1 = (function (){var statearr_12600 = state_12591;(statearr_12600[6] = inst_12577);
return statearr_12600;
})();var statearr_12601_12610 = state_12591__$1;(statearr_12601_12610[2] = null);
(statearr_12601_12610[1] = 2);
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
});return ((function (switch__8231__auto__){
return (function() {
var state_machine__8232__auto__ = null;
var state_machine__8232__auto____0 = (function (){var statearr_12603 = (new Array(7));(statearr_12603[0] = state_machine__8232__auto__);
(statearr_12603[1] = 1);
return statearr_12603;
});
var state_machine__8232__auto____1 = (function (state_12591){while(true){
var result__8233__auto__ = switch__8231__auto__.call(null,state_12591);if(cljs.core.keyword_identical_QMARK_.call(null,result__8233__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8233__auto__;
}
break;
}
});
state_machine__8232__auto__ = function(state_12591){
switch(arguments.length){
case 0:
return state_machine__8232__auto____0.call(this);
case 1:
return state_machine__8232__auto____1.call(this,state_12591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8232__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8232__auto____0;
state_machine__8232__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8232__auto____1;
return state_machine__8232__auto__;
})()
;})(switch__8231__auto__))
})();var state__8308__auto__ = (function (){var statearr_12604 = f__8307__auto__.call(null);(statearr_12604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8306__auto__);
return statearr_12604;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8308__auto__);
}));
return c__8306__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__8306__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8307__auto__ = (function (){var switch__8231__auto__ = (function (state_12668){var state_val_12669 = (state_12668[1]);if((state_val_12669 === 1))
{var inst_12648 = cljs.core.seq.call(null,coll);var inst_12649 = inst_12648;var state_12668__$1 = (function (){var statearr_12670 = state_12668;(statearr_12670[5] = inst_12649);
return statearr_12670;
})();var statearr_12671_12685 = state_12668__$1;(statearr_12671_12685[2] = null);
(statearr_12671_12685[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 2))
{var inst_12649 = (state_12668[5]);var state_12668__$1 = state_12668;if(cljs.core.truth_(inst_12649))
{var statearr_12672_12686 = state_12668__$1;(statearr_12672_12686[1] = 4);
} else
{var statearr_12673_12687 = state_12668__$1;(statearr_12673_12687[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 3))
{var inst_12666 = (state_12668[2]);var state_12668__$1 = state_12668;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12668__$1,inst_12666);
} else
{if((state_val_12669 === 4))
{var inst_12649 = (state_12668[5]);var inst_12652 = cljs.core.first.call(null,inst_12649);var state_12668__$1 = state_12668;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12668__$1,7,ch,inst_12652);
} else
{if((state_val_12669 === 5))
{var state_12668__$1 = state_12668;if(cljs.core.truth_(close_QMARK_))
{var statearr_12674_12688 = state_12668__$1;(statearr_12674_12688[1] = 8);
} else
{var statearr_12675_12689 = state_12668__$1;(statearr_12675_12689[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 6))
{var inst_12664 = (state_12668[2]);var state_12668__$1 = state_12668;var statearr_12676_12690 = state_12668__$1;(statearr_12676_12690[2] = inst_12664);
(statearr_12676_12690[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 7))
{var inst_12649 = (state_12668[5]);var inst_12654 = (state_12668[2]);var inst_12655 = cljs.core.next.call(null,inst_12649);var inst_12649__$1 = inst_12655;var state_12668__$1 = (function (){var statearr_12677 = state_12668;(statearr_12677[5] = inst_12649__$1);
(statearr_12677[6] = inst_12654);
return statearr_12677;
})();var statearr_12678_12691 = state_12668__$1;(statearr_12678_12691[2] = null);
(statearr_12678_12691[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 8))
{var inst_12659 = cljs.core.async.close_BANG_.call(null,ch);var state_12668__$1 = state_12668;var statearr_12679_12692 = state_12668__$1;(statearr_12679_12692[2] = inst_12659);
(statearr_12679_12692[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 9))
{var state_12668__$1 = state_12668;var statearr_12680_12693 = state_12668__$1;(statearr_12680_12693[2] = null);
(statearr_12680_12693[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12669 === 10))
{var inst_12662 = (state_12668[2]);var state_12668__$1 = state_12668;var statearr_12681_12694 = state_12668__$1;(statearr_12681_12694[2] = inst_12662);
(statearr_12681_12694[1] = 6);
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
});return ((function (switch__8231__auto__){
return (function() {
var state_machine__8232__auto__ = null;
var state_machine__8232__auto____0 = (function (){var statearr_12683 = (new Array(7));(statearr_12683[0] = state_machine__8232__auto__);
(statearr_12683[1] = 1);
return statearr_12683;
});
var state_machine__8232__auto____1 = (function (state_12668){while(true){
var result__8233__auto__ = switch__8231__auto__.call(null,state_12668);if(cljs.core.keyword_identical_QMARK_.call(null,result__8233__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8233__auto__;
}
break;
}
});
state_machine__8232__auto__ = function(state_12668){
switch(arguments.length){
case 0:
return state_machine__8232__auto____0.call(this);
case 1:
return state_machine__8232__auto____1.call(this,state_12668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8232__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8232__auto____0;
state_machine__8232__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8232__auto____1;
return state_machine__8232__auto__;
})()
;})(switch__8231__auto__))
})();var state__8308__auto__ = (function (){var statearr_12684 = f__8307__auto__.call(null);(statearr_12684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8306__auto__);
return statearr_12684;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8308__auto__);
}));
return c__8306__auto__;
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
{var x__6795__auto__ = (((_ == null))?null:_);return (function (){var or__3943__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6795__auto__)]);if(or__3943__auto__)
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
{var x__6795__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6795__auto__)]);if(or__3943__auto__)
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
{var x__6795__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6795__auto__)]);if(or__3943__auto__)
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
{var x__6795__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6795__auto__)]);if(or__3943__auto__)
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12907 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12907');

/**
* @constructor
*/
cljs.core.async.t12907 = (function (cs,ch,mult,meta12908){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12908 = meta12908;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12907.cljs$lang$type = true;
cljs.core.async.t12907.cljs$lang$ctorStr = "cljs.core.async/t12907";
cljs.core.async.t12907.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6736__auto__,writer__6737__auto__,opt__6738__auto__){return cljs.core._write.call(null,writer__6737__auto__,"cljs.core.async/t12907");
});})(cs))
;
cljs.core.async.t12907.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12907.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12907.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12907.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12907.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12907.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
return self__.ch;
});})(cs))
;
cljs.core.async.t12907.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12909){var self__ = this;
return self__.meta12908;
});})(cs))
;
cljs.core.async.t12907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12909,meta12908__$1){var self__ = this;
return (new cljs.core.async.t12907(self__.cs,self__.ch,self__.mult,meta12908__$1));
});})(cs))
;
cljs.core.async.__GT_t12907 = ((function (cs){
return (function __GT_t12907(cs__$1,ch__$1,mult__$1,meta12908){return (new cljs.core.async.t12907(cs__$1,ch__$1,mult__$1,meta12908));
});})(cs))
;
}
return (new cljs.core.async.t12907(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__8306__auto___13119 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8307__auto__ = (function (){var switch__8231__auto__ = (function (state_13037){var state_val_13038 = (state_13037[1]);if((state_val_13038 === 32))
{try{var inst_12912 = (state_13037[5]);var inst_12988 = (state_13037[6]);var inst_12994 = cljs.core.async.put_BANG_.call(null,inst_12988,inst_12912,done);var state_13037__$1 = state_13037;var statearr_13041_13120 = state_13037__$1;(statearr_13041_13120[2] = inst_12994);
(statearr_13041_13120[1] = 30);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e13039){if((e13039 instanceof Object))
{var ex__8225__auto__ = e13039;var statearr_13040_13121 = state_13037;(statearr_13040_13121[1] = 31);
(statearr_13040_13121[2] = ex__8225__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13039;
} else
{return null;
}
}
}} else
{if((state_val_13038 === 1))
{var state_13037__$1 = state_13037;var statearr_13042_13122 = state_13037__$1;(statearr_13042_13122[2] = null);
(statearr_13042_13122[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13038 === 33))
{var inst_13000 = (state_13037[7]);var inst_13002 = cljs.core.chunked_seq_QMARK_.call(null,inst_13000);var state_13037__$1 = state_13037;if(inst_13002)
{var statearr_13043_13123 = state_13037__$1;(statearr_13043_13123[1] = 36);
} else
{var statearr_13044_13124 = state_13037__$1;(statearr_13044_13124[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13038 === 2))
{var state_13037__$1 = state_13037;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13037__$1,4,ch);
} else
{if((state_val_13038 === 34))
{var state_13037__$1 = state_13037;var statearr_13045_13125 = state_13037__$1;(statearr_13045_13125[2] = null);
(statearr_13045_13125[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13038 === 3))
{var inst_13035 = (state_13037[2]);var state_13037__$1 = state_13037;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13037__$1,inst_13035);
} else
{if((state_val_13038 === 35))
{var inst_13024 = (state_13037[2]);var state_13037__$1 = state_13037;var statearr_13046_13126 = state_13037__$1;(statearr_13046_13126[2] = inst_13024);
(statearr_13046_13126[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13038 === 4))
{var inst_12912 = (state_13037[5]);var inst_12912__$1 = (state_13037[2]);var inst_12913 = (inst_12912__$1 == null);var state_13037__$1 = (function (){var statearr_13047 = state_13037;(statearr_13047[5] = inst_12912__$1);
return statearr_13047;
})();if(cljs.core.truth_(inst_12913))
{var statearr_13048_13127 = state_13037__$1;(statearr_13048_13127[1] = 5);
} else
{var statearr_13049_13128 = state_13037__$1;(statearr_13049_13128[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13038 === 36))
{var inst_13000 = (state_13037[7]);var inst_13004 = cljs.core.chunk_first.call(null,inst_13000);var inst_13005 = cljs.core.chunk_rest.call(null,inst_13000);var inst_13006 = cljs.core.count.call(null,inst_13004);var inst_12980 = inst_13005;var inst_12981 = inst_13004;var inst_12982 = inst_13006;var inst_12983 = 0;var state_13037__$1 = (function (){var statearr_13050 = state_13037;(statearr_13050[8] = inst_12980);
(statearr_13050[9] = inst_12983);
(statearr_13050[10] = inst_12982);
(statearr_13050[11] = inst_12981);
return statearr_13050;
})();var statearr_13051_13129 = state_13037__$1;(statearr_13051_13129[2] = null);
(statearr_13051_13129[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13038 === 5))
{var inst_12919 = cljs.core.deref.call(null,cs);var inst_12920 = cljs.core.seq.call(null,inst_12919);var inst_12921 = inst_12920;var inst_12922 = null;var inst_12923 = 0;var inst_12924 = 0;var state_13037__$1 = (function (){var statearr_13052 = state_13037;(statearr_13052[12] = inst_12924);
(statearr_13052[13] = inst_12923);
(statearr_13052[14] = inst_12921);
(statearr_13052[15] = inst_12922);
return statearr_13052;
})();var statearr_13053_13130 = state_13037__$1;(statearr_13053_13130[2] = null);
(statearr_13053_13130[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13038 === 37))
{var inst_13000 = (state_13037[7]);var inst_13009 = cljs.core.first.call(null,inst_13000);var state_13037__$1 = (function (){var statearr_13054 = state_13037;(statearr_13054[16] = inst_13009);
return statearr_13054;
})();var statearr_13055_13131 = state_13037__$1;(statearr_13055_13131[2] = null);
(statearr_13055_13131[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13038 === 6))
{var inst_12971 = cljs.core.deref.call(null,cs);var inst_12972 = cljs.core.keys.call(null,inst_12971);var inst_12973 = cljs.core.count.call(null,inst_12972);var inst_12974 = cljs.core.reset_BANG_.call(null,dctr,inst_12973);var inst_12979 = cljs.core.seq.call(null,inst_12972);var inst_12980 = inst_12979;var inst_12981 = null;var inst_12982 = 0;var inst_12983 = 0;var state_13037__$1 = (function (){var statearr_13056 = state_13037;(statearr_13056[8] = inst_12980);
(statearr_13056[17] = inst_12974);
(statearr_13056[9] = inst_12983);
(statearr_13056[10] = inst_12982);
(statearr_13056[11] = inst_12981);
return statearr_13056;
})();var statearr_13057_13132 = state_13037__$1;(statearr_13057_13132[2] = null);
(statearr_13057_13132[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13038 === 38))
{var inst_13021 = (state_13037[2]);var state_13037__$1 = state_13037;var statearr_13058_13133 = state_13037__$1;(statearr_13058_13133[2] = inst_13021);
(statearr_13058_13133[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13038 === 7))
{var inst_13033 = (state_13037[2]);var state_13037__$1 = state_13037;var statearr_13059_13134 = state_13037__$1;(statearr_13059_13134[2] = inst_13033);
(statearr_13059_13134[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13038 === 39))
{var inst_13000 = (state_13037[7]);var inst_13017 = (state_13037[2]);var inst_13018 = cljs.core.next.call(null,inst_13000);var inst_12980 = inst_13018;var inst_12981 = null;var inst_12982 = 0;var inst_12983 = 0;var state_13037__$1 = (function (){var statearr_13060 = state_13037;(statearr_13060[8] = inst_12980);
(statearr_13060[9] = inst_12983);
(statearr_13060[10] = inst_12982);
(statearr_13060[11] = inst_12981);
(statearr_13060[18] = inst_13017);
return statearr_13060;
})();var statearr_13061_13135 = state_13037__$1;(statearr_13061_13135[2] = null);
(statearr_13061_13135[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13038 === 8))
{var inst_12924 = (state_13037[12]);var inst_12923 = (state_13037[13]);var inst_12926 = (inst_12924 < inst_12923);var inst_12927 = inst_12926;var state_13037__$1 = state_13037;if(cljs.core.truth_(inst_12927))
{var statearr_13062_13136 = state_13037__$1;(statearr_13062_13136[1] = 10);
} else
{var statearr_13063_13137 = state_13037__$1;(statearr_13063_13137[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13038 === 40))
{var inst_13009 = (state_13037[16]);var inst_13010 = (state_13037[2]);var inst_13011 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13012 = cljs.core.async.untap_STAR_.call(null,m,inst_13009);var state_13037__$1 = (function (){var statearr_13064 = state_13037;(statearr_13064[19] = inst_13010);
(statearr_13064[20] = inst_13011);
return statearr_13064;
})();var statearr_13065_13138 = state_13037__$1;(statearr_13065_13138[2] = inst_13012);
(statearr_13065_13138[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13038 === 9))
{var inst_12969 = (state_13037[2]);var state_13037__$1 = state_13037;var statearr_13066_13139 = state_13037__$1;(statearr_13066_13139[2] = inst_12969);
(statearr_13066_13139[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13038 === 41))
{try{var inst_12912 = (state_13037[5]);var inst_13009 = (state_13037[16]);var inst_13015 = cljs.core.async.put_BANG_.call(null,inst_13009,inst_12912,done);var state_13037__$1 = state_13037;var statearr_13069_13140 = state_13037__$1;(statearr_13069_13140[2] = inst_13015);
(statearr_13069_13140[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e13067){if((e13067 instanceof Object))
{var ex__8225__auto__ = e13067;var statearr_13068_13141 = state_13037;(statearr_13068_13141[1] = 40);
(statearr_13068_13141[2] = ex__8225__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13067;
} else
{return null;
}
}
}} else
{if((state_val_13038 === 10))
{var inst_12924 = (state_13037[12]);var inst_12922 = (state_13037[15]);var inst_12930 = cljs.core._nth.call(null,inst_12922,inst_12924);var inst_12931 = cljs.core.nth.call(null,inst_12930,0,null);var inst_12932 = cljs.core.nth.call(null,inst_12930,1,null);var state_13037__$1 = (function (){var statearr_13070 = state_13037;(statearr_13070[21] = inst_12931);
return statearr_13070;
})();if(cljs.core.truth_(inst_12932))
{var statearr_13071_13142 = state_13037__$1;(statearr_13071_13142[1] = 13);
} else
{var statearr_13072_13143 = state_13037__$1;(statearr_13072_13143[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13038 === 42))
{var inst_13030 = (state_13037[2]);var state_13037__$1 = (function (){var statearr_13073 = state_13037;(statearr_13073[22] = inst_13030);
return statearr_13073;
})();var statearr_13074_13144 = state_13037__$1;(statearr_13074_13144[2] = null);
(statearr_13074_13144[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13038 === 11))
{var inst_12941 = (state_13037[23]);var inst_12921 = (state_13037[14]);var inst_12941__$1 = cljs.core.seq.call(null,inst_12921);var state_13037__$1 = (function (){var statearr_13075 = state_13037;(statearr_13075[23] = inst_12941__$1);
return statearr_13075;
})();if(inst_12941__$1)
{var statearr_13076_13145 = state_13037__$1;(statearr_13076_13145[1] = 16);
} else
{var statearr_13077_13146 = state_13037__$1;(statearr_13077_13146[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13038 === 12))
{var inst_12967 = (state_13037[2]);var state_13037__$1 = state_13037;var statearr_13078_13147 = state_13037__$1;(statearr_13078_13147[2] = inst_12967);
(statearr_13078_13147[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13038 === 13))
{var inst_12931 = (state_13037[21]);var inst_12934 = cljs.core.async.close_BANG_.call(null,inst_12931);var state_13037__$1 = state_13037;var statearr_13082_13148 = state_13037__$1;(statearr_13082_13148[2] = inst_12934);
(statearr_13082_13148[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13038 === 14))
{var state_13037__$1 = state_13037;var statearr_13083_13149 = state_13037__$1;(statearr_13083_13149[2] = null);
(statearr_13083_13149[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13038 === 15))
{var inst_12924 = (state_13037[12]);var inst_12923 = (state_13037[13]);var inst_12921 = (state_13037[14]);var inst_12922 = (state_13037[15]);var inst_12937 = (state_13037[2]);var inst_12938 = (inst_12924 + 1);var tmp13079 = inst_12923;var tmp13080 = inst_12921;var tmp13081 = inst_12922;var inst_12921__$1 = tmp13080;var inst_12922__$1 = tmp13081;var inst_12923__$1 = tmp13079;var inst_12924__$1 = inst_12938;var state_13037__$1 = (function (){var statearr_13084 = state_13037;(statearr_13084[12] = inst_12924__$1);
(statearr_13084[13] = inst_12923__$1);
(statearr_13084[24] = inst_12937);
(statearr_13084[14] = inst_12921__$1);
(statearr_13084[15] = inst_12922__$1);
return statearr_13084;
})();var statearr_13085_13150 = state_13037__$1;(statearr_13085_13150[2] = null);
(statearr_13085_13150[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13038 === 16))
{var inst_12941 = (state_13037[23]);var inst_12943 = cljs.core.chunked_seq_QMARK_.call(null,inst_12941);var state_13037__$1 = state_13037;if(inst_12943)
{var statearr_13086_13151 = state_13037__$1;(statearr_13086_13151[1] = 19);
} else
{var statearr_13087_13152 = state_13037__$1;(statearr_13087_13152[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13038 === 17))
{var state_13037__$1 = state_13037;var statearr_13088_13153 = state_13037__$1;(statearr_13088_13153[2] = null);
(statearr_13088_13153[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13038 === 18))
{var inst_12965 = (state_13037[2]);var state_13037__$1 = state_13037;var statearr_13089_13154 = state_13037__$1;(statearr_13089_13154[2] = inst_12965);
(statearr_13089_13154[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13038 === 19))
{var inst_12941 = (state_13037[23]);var inst_12945 = cljs.core.chunk_first.call(null,inst_12941);var inst_12946 = cljs.core.chunk_rest.call(null,inst_12941);var inst_12947 = cljs.core.count.call(null,inst_12945);var inst_12921 = inst_12946;var inst_12922 = inst_12945;var inst_12923 = inst_12947;var inst_12924 = 0;var state_13037__$1 = (function (){var statearr_13090 = state_13037;(statearr_13090[12] = inst_12924);
(statearr_13090[13] = inst_12923);
(statearr_13090[14] = inst_12921);
(statearr_13090[15] = inst_12922);
return statearr_13090;
})();var statearr_13091_13155 = state_13037__$1;(statearr_13091_13155[2] = null);
(statearr_13091_13155[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13038 === 20))
{var inst_12941 = (state_13037[23]);var inst_12951 = cljs.core.first.call(null,inst_12941);var inst_12952 = cljs.core.nth.call(null,inst_12951,0,null);var inst_12953 = cljs.core.nth.call(null,inst_12951,1,null);var state_13037__$1 = (function (){var statearr_13092 = state_13037;(statearr_13092[25] = inst_12952);
return statearr_13092;
})();if(cljs.core.truth_(inst_12953))
{var statearr_13093_13156 = state_13037__$1;(statearr_13093_13156[1] = 22);
} else
{var statearr_13094_13157 = state_13037__$1;(statearr_13094_13157[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13038 === 21))
{var inst_12962 = (state_13037[2]);var state_13037__$1 = state_13037;var statearr_13095_13158 = state_13037__$1;(statearr_13095_13158[2] = inst_12962);
(statearr_13095_13158[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13038 === 22))
{var inst_12952 = (state_13037[25]);var inst_12955 = cljs.core.async.close_BANG_.call(null,inst_12952);var state_13037__$1 = state_13037;var statearr_13096_13159 = state_13037__$1;(statearr_13096_13159[2] = inst_12955);
(statearr_13096_13159[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13038 === 23))
{var state_13037__$1 = state_13037;var statearr_13097_13160 = state_13037__$1;(statearr_13097_13160[2] = null);
(statearr_13097_13160[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13038 === 24))
{var inst_12941 = (state_13037[23]);var inst_12958 = (state_13037[2]);var inst_12959 = cljs.core.next.call(null,inst_12941);var inst_12921 = inst_12959;var inst_12922 = null;var inst_12923 = 0;var inst_12924 = 0;var state_13037__$1 = (function (){var statearr_13098 = state_13037;(statearr_13098[26] = inst_12958);
(statearr_13098[12] = inst_12924);
(statearr_13098[13] = inst_12923);
(statearr_13098[14] = inst_12921);
(statearr_13098[15] = inst_12922);
return statearr_13098;
})();var statearr_13099_13161 = state_13037__$1;(statearr_13099_13161[2] = null);
(statearr_13099_13161[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13038 === 25))
{var inst_12983 = (state_13037[9]);var inst_12982 = (state_13037[10]);var inst_12985 = (inst_12983 < inst_12982);var inst_12986 = inst_12985;var state_13037__$1 = state_13037;if(cljs.core.truth_(inst_12986))
{var statearr_13100_13162 = state_13037__$1;(statearr_13100_13162[1] = 27);
} else
{var statearr_13101_13163 = state_13037__$1;(statearr_13101_13163[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13038 === 26))
{var inst_13028 = (state_13037[2]);var state_13037__$1 = (function (){var statearr_13102 = state_13037;(statearr_13102[27] = inst_13028);
return statearr_13102;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13037__$1,42,dchan);
} else
{if((state_val_13038 === 27))
{var inst_12983 = (state_13037[9]);var inst_12981 = (state_13037[11]);var inst_12988 = cljs.core._nth.call(null,inst_12981,inst_12983);var state_13037__$1 = (function (){var statearr_13103 = state_13037;(statearr_13103[6] = inst_12988);
return statearr_13103;
})();var statearr_13104_13164 = state_13037__$1;(statearr_13104_13164[2] = null);
(statearr_13104_13164[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13038 === 28))
{var inst_12980 = (state_13037[8]);var inst_13000 = (state_13037[7]);var inst_13000__$1 = cljs.core.seq.call(null,inst_12980);var state_13037__$1 = (function (){var statearr_13108 = state_13037;(statearr_13108[7] = inst_13000__$1);
return statearr_13108;
})();if(inst_13000__$1)
{var statearr_13109_13165 = state_13037__$1;(statearr_13109_13165[1] = 33);
} else
{var statearr_13110_13166 = state_13037__$1;(statearr_13110_13166[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13038 === 29))
{var inst_13026 = (state_13037[2]);var state_13037__$1 = state_13037;var statearr_13111_13167 = state_13037__$1;(statearr_13111_13167[2] = inst_13026);
(statearr_13111_13167[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13038 === 30))
{var inst_12980 = (state_13037[8]);var inst_12983 = (state_13037[9]);var inst_12982 = (state_13037[10]);var inst_12981 = (state_13037[11]);var inst_12996 = (state_13037[2]);var inst_12997 = (inst_12983 + 1);var tmp13105 = inst_12980;var tmp13106 = inst_12982;var tmp13107 = inst_12981;var inst_12980__$1 = tmp13105;var inst_12981__$1 = tmp13107;var inst_12982__$1 = tmp13106;var inst_12983__$1 = inst_12997;var state_13037__$1 = (function (){var statearr_13112 = state_13037;(statearr_13112[8] = inst_12980__$1);
(statearr_13112[9] = inst_12983__$1);
(statearr_13112[10] = inst_12982__$1);
(statearr_13112[11] = inst_12981__$1);
(statearr_13112[28] = inst_12996);
return statearr_13112;
})();var statearr_13113_13168 = state_13037__$1;(statearr_13113_13168[2] = null);
(statearr_13113_13168[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13038 === 31))
{var inst_12988 = (state_13037[6]);var inst_12989 = (state_13037[2]);var inst_12990 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12991 = cljs.core.async.untap_STAR_.call(null,m,inst_12988);var state_13037__$1 = (function (){var statearr_13114 = state_13037;(statearr_13114[29] = inst_12990);
(statearr_13114[30] = inst_12989);
return statearr_13114;
})();var statearr_13115_13169 = state_13037__$1;(statearr_13115_13169[2] = inst_12991);
(statearr_13115_13169[1] = 30);
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
});return ((function (switch__8231__auto__){
return (function() {
var state_machine__8232__auto__ = null;
var state_machine__8232__auto____0 = (function (){var statearr_13117 = (new Array(31));(statearr_13117[0] = state_machine__8232__auto__);
(statearr_13117[1] = 1);
return statearr_13117;
});
var state_machine__8232__auto____1 = (function (state_13037){while(true){
var result__8233__auto__ = switch__8231__auto__.call(null,state_13037);if(cljs.core.keyword_identical_QMARK_.call(null,result__8233__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8233__auto__;
}
break;
}
});
state_machine__8232__auto__ = function(state_13037){
switch(arguments.length){
case 0:
return state_machine__8232__auto____0.call(this);
case 1:
return state_machine__8232__auto____1.call(this,state_13037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8232__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8232__auto____0;
state_machine__8232__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8232__auto____1;
return state_machine__8232__auto__;
})()
;})(switch__8231__auto__))
})();var state__8308__auto__ = (function (){var statearr_13118 = f__8307__auto__.call(null);(statearr_13118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8306__auto___13119);
return statearr_13118;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8308__auto__);
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
{var x__6795__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6795__auto__)]);if(or__3943__auto__)
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
{var x__6795__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6795__auto__)]);if(or__3943__auto__)
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
{var x__6795__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6795__auto__)]);if(or__3943__auto__)
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
{var x__6795__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6795__auto__)]);if(or__3943__auto__)
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
{var x__6795__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6795__auto__)]);if(or__3943__auto__)
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
;var m = (function (){if(typeof cljs.core.async.t13290 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t13290');

/**
* @constructor
*/
cljs.core.async.t13290 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta13291){
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
this.meta13291 = meta13291;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13290.cljs$lang$type = true;
cljs.core.async.t13290.cljs$lang$ctorStr = "cljs.core.async/t13290";
cljs.core.async.t13290.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6736__auto__,writer__6737__auto__,opt__6738__auto__){return cljs.core._write.call(null,writer__6737__auto__,"cljs.core.async/t13290");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13290.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13290.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13290.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13290.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13290.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13290.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13290.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13290.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13290.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13292){var self__ = this;
return self__.meta13291;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13292,meta13291__$1){var self__ = this;
return (new cljs.core.async.t13290(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta13291__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13290 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13290(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13291){return (new cljs.core.async.t13290(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13291));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13290(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__8306__auto___13410 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8307__auto__ = (function (){var switch__8231__auto__ = (function (state_13363){var state_val_13364 = (state_13363[1]);if((state_val_13364 === 1))
{var inst_13296 = (state_13363[5]);var inst_13296__$1 = calc_state.call(null);var inst_13297 = cljs.core.seq_QMARK_.call(null,inst_13296__$1);var state_13363__$1 = (function (){var statearr_13365 = state_13363;(statearr_13365[5] = inst_13296__$1);
return statearr_13365;
})();if(inst_13297)
{var statearr_13366_13411 = state_13363__$1;(statearr_13366_13411[1] = 2);
} else
{var statearr_13367_13412 = state_13363__$1;(statearr_13367_13412[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13364 === 2))
{var inst_13296 = (state_13363[5]);var inst_13299 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13296);var state_13363__$1 = state_13363;var statearr_13368_13413 = state_13363__$1;(statearr_13368_13413[2] = inst_13299);
(statearr_13368_13413[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13364 === 3))
{var inst_13296 = (state_13363[5]);var state_13363__$1 = state_13363;var statearr_13369_13414 = state_13363__$1;(statearr_13369_13414[2] = inst_13296);
(statearr_13369_13414[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13364 === 4))
{var inst_13296 = (state_13363[5]);var inst_13302 = (state_13363[2]);var inst_13303 = cljs.core.get.call(null,inst_13302,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13304 = cljs.core.get.call(null,inst_13302,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13305 = cljs.core.get.call(null,inst_13302,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_13306 = inst_13296;var state_13363__$1 = (function (){var statearr_13370 = state_13363;(statearr_13370[6] = inst_13304);
(statearr_13370[7] = inst_13305);
(statearr_13370[8] = inst_13306);
(statearr_13370[9] = inst_13303);
return statearr_13370;
})();var statearr_13371_13415 = state_13363__$1;(statearr_13371_13415[2] = null);
(statearr_13371_13415[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13364 === 5))
{var inst_13306 = (state_13363[8]);var inst_13309 = cljs.core.seq_QMARK_.call(null,inst_13306);var state_13363__$1 = state_13363;if(inst_13309)
{var statearr_13372_13416 = state_13363__$1;(statearr_13372_13416[1] = 7);
} else
{var statearr_13373_13417 = state_13363__$1;(statearr_13373_13417[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13364 === 6))
{var inst_13361 = (state_13363[2]);var state_13363__$1 = state_13363;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13363__$1,inst_13361);
} else
{if((state_val_13364 === 7))
{var inst_13306 = (state_13363[8]);var inst_13311 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13306);var state_13363__$1 = state_13363;var statearr_13374_13418 = state_13363__$1;(statearr_13374_13418[2] = inst_13311);
(statearr_13374_13418[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13364 === 8))
{var inst_13306 = (state_13363[8]);var state_13363__$1 = state_13363;var statearr_13375_13419 = state_13363__$1;(statearr_13375_13419[2] = inst_13306);
(statearr_13375_13419[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13364 === 9))
{var inst_13314 = (state_13363[10]);var inst_13314__$1 = (state_13363[2]);var inst_13315 = cljs.core.get.call(null,inst_13314__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13316 = cljs.core.get.call(null,inst_13314__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13317 = cljs.core.get.call(null,inst_13314__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_13363__$1 = (function (){var statearr_13376 = state_13363;(statearr_13376[11] = inst_13316);
(statearr_13376[12] = inst_13317);
(statearr_13376[10] = inst_13314__$1);
return statearr_13376;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13363__$1,10,inst_13315);
} else
{if((state_val_13364 === 10))
{var inst_13323 = (state_13363[13]);var inst_13321 = (state_13363[14]);var inst_13320 = (state_13363[2]);var inst_13321__$1 = cljs.core.nth.call(null,inst_13320,0,null);var inst_13322 = cljs.core.nth.call(null,inst_13320,1,null);var inst_13323__$1 = (inst_13321__$1 == null);var state_13363__$1 = (function (){var statearr_13377 = state_13363;(statearr_13377[13] = inst_13323__$1);
(statearr_13377[15] = inst_13322);
(statearr_13377[14] = inst_13321__$1);
return statearr_13377;
})();if(cljs.core.truth_(inst_13323__$1))
{var statearr_13378_13420 = state_13363__$1;(statearr_13378_13420[1] = 11);
} else
{var statearr_13379_13421 = state_13363__$1;(statearr_13379_13421[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13364 === 11))
{var inst_13323 = (state_13363[13]);var state_13363__$1 = state_13363;var statearr_13380_13422 = state_13363__$1;(statearr_13380_13422[2] = inst_13323);
(statearr_13380_13422[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13364 === 12))
{var inst_13322 = (state_13363[15]);var inst_13326 = cljs.core._EQ_.call(null,inst_13322,change);var state_13363__$1 = state_13363;var statearr_13381_13423 = state_13363__$1;(statearr_13381_13423[2] = inst_13326);
(statearr_13381_13423[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13364 === 13))
{var inst_13328 = (state_13363[2]);var state_13363__$1 = state_13363;if(cljs.core.truth_(inst_13328))
{var statearr_13382_13424 = state_13363__$1;(statearr_13382_13424[1] = 14);
} else
{var statearr_13383_13425 = state_13363__$1;(statearr_13383_13425[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13364 === 14))
{var inst_13321 = (state_13363[14]);var inst_13330 = (inst_13321 == null);var state_13363__$1 = state_13363;if(cljs.core.truth_(inst_13330))
{var statearr_13384_13426 = state_13363__$1;(statearr_13384_13426[1] = 17);
} else
{var statearr_13385_13427 = state_13363__$1;(statearr_13385_13427[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13364 === 15))
{var inst_13317 = (state_13363[12]);var inst_13322 = (state_13363[15]);var inst_13339 = (state_13363[16]);var inst_13339__$1 = inst_13317.call(null,inst_13322);var state_13363__$1 = (function (){var statearr_13386 = state_13363;(statearr_13386[16] = inst_13339__$1);
return statearr_13386;
})();if(cljs.core.truth_(inst_13339__$1))
{var statearr_13387_13428 = state_13363__$1;(statearr_13387_13428[1] = 20);
} else
{var statearr_13388_13429 = state_13363__$1;(statearr_13388_13429[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13364 === 16))
{var inst_13359 = (state_13363[2]);var state_13363__$1 = state_13363;var statearr_13389_13430 = state_13363__$1;(statearr_13389_13430[2] = inst_13359);
(statearr_13389_13430[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13364 === 17))
{var inst_13322 = (state_13363[15]);var inst_13332 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13322);var state_13363__$1 = state_13363;var statearr_13390_13431 = state_13363__$1;(statearr_13390_13431[2] = inst_13332);
(statearr_13390_13431[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13364 === 18))
{var state_13363__$1 = state_13363;var statearr_13391_13432 = state_13363__$1;(statearr_13391_13432[2] = null);
(statearr_13391_13432[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13364 === 19))
{var inst_13335 = (state_13363[2]);var inst_13336 = calc_state.call(null);var inst_13306 = inst_13336;var state_13363__$1 = (function (){var statearr_13392 = state_13363;(statearr_13392[8] = inst_13306);
(statearr_13392[17] = inst_13335);
return statearr_13392;
})();var statearr_13393_13433 = state_13363__$1;(statearr_13393_13433[2] = null);
(statearr_13393_13433[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13364 === 20))
{var inst_13339 = (state_13363[16]);var state_13363__$1 = state_13363;var statearr_13394_13434 = state_13363__$1;(statearr_13394_13434[2] = inst_13339);
(statearr_13394_13434[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13364 === 21))
{var inst_13317 = (state_13363[12]);var inst_13342 = (state_13363[18]);var inst_13342__$1 = cljs.core.empty_QMARK_.call(null,inst_13317);var state_13363__$1 = (function (){var statearr_13395 = state_13363;(statearr_13395[18] = inst_13342__$1);
return statearr_13395;
})();if(inst_13342__$1)
{var statearr_13396_13435 = state_13363__$1;(statearr_13396_13435[1] = 23);
} else
{var statearr_13397_13436 = state_13363__$1;(statearr_13397_13436[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13364 === 22))
{var inst_13350 = (state_13363[2]);var state_13363__$1 = state_13363;if(cljs.core.truth_(inst_13350))
{var statearr_13398_13437 = state_13363__$1;(statearr_13398_13437[1] = 26);
} else
{var statearr_13399_13438 = state_13363__$1;(statearr_13399_13438[1] = 27);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13364 === 23))
{var inst_13316 = (state_13363[11]);var inst_13322 = (state_13363[15]);var inst_13344 = inst_13316.call(null,inst_13322);var inst_13345 = cljs.core.not.call(null,inst_13344);var state_13363__$1 = state_13363;var statearr_13400_13439 = state_13363__$1;(statearr_13400_13439[2] = inst_13345);
(statearr_13400_13439[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13364 === 24))
{var inst_13342 = (state_13363[18]);var state_13363__$1 = state_13363;var statearr_13401_13440 = state_13363__$1;(statearr_13401_13440[2] = inst_13342);
(statearr_13401_13440[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13364 === 25))
{var inst_13348 = (state_13363[2]);var state_13363__$1 = state_13363;var statearr_13402_13441 = state_13363__$1;(statearr_13402_13441[2] = inst_13348);
(statearr_13402_13441[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13364 === 26))
{var inst_13321 = (state_13363[14]);var state_13363__$1 = state_13363;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13363__$1,29,out,inst_13321);
} else
{if((state_val_13364 === 27))
{var state_13363__$1 = state_13363;var statearr_13403_13442 = state_13363__$1;(statearr_13403_13442[2] = null);
(statearr_13403_13442[1] = 28);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13364 === 28))
{var inst_13314 = (state_13363[10]);var inst_13356 = (state_13363[2]);var inst_13306 = inst_13314;var state_13363__$1 = (function (){var statearr_13404 = state_13363;(statearr_13404[19] = inst_13356);
(statearr_13404[8] = inst_13306);
return statearr_13404;
})();var statearr_13405_13443 = state_13363__$1;(statearr_13405_13443[2] = null);
(statearr_13405_13443[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13364 === 29))
{var inst_13353 = (state_13363[2]);var state_13363__$1 = state_13363;var statearr_13406_13444 = state_13363__$1;(statearr_13406_13444[2] = inst_13353);
(statearr_13406_13444[1] = 28);
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
});return ((function (switch__8231__auto__){
return (function() {
var state_machine__8232__auto__ = null;
var state_machine__8232__auto____0 = (function (){var statearr_13408 = (new Array(20));(statearr_13408[0] = state_machine__8232__auto__);
(statearr_13408[1] = 1);
return statearr_13408;
});
var state_machine__8232__auto____1 = (function (state_13363){while(true){
var result__8233__auto__ = switch__8231__auto__.call(null,state_13363);if(cljs.core.keyword_identical_QMARK_.call(null,result__8233__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8233__auto__;
}
break;
}
});
state_machine__8232__auto__ = function(state_13363){
switch(arguments.length){
case 0:
return state_machine__8232__auto____0.call(this);
case 1:
return state_machine__8232__auto____1.call(this,state_13363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8232__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8232__auto____0;
state_machine__8232__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8232__auto____1;
return state_machine__8232__auto__;
})()
;})(switch__8231__auto__))
})();var state__8308__auto__ = (function (){var statearr_13409 = f__8307__auto__.call(null);(statearr_13409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8306__auto___13410);
return statearr_13409;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8308__auto__);
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
{var x__6795__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6795__auto__)]);if(or__3943__auto__)
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
{var x__6795__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6795__auto__)]);if(or__3943__auto__)
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
{var x__6795__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6795__auto__)]);if(or__3943__auto__)
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
{var x__6795__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6795__auto__)]);if(or__3943__auto__)
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
return (function (p1__13445_SHARP_){if(cljs.core.truth_(p1__13445_SHARP_.call(null,topic)))
{return p1__13445_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13445_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3943__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13569 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t13569');

/**
* @constructor
*/
cljs.core.async.t13569 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13570){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13570 = meta13570;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13569.cljs$lang$type = true;
cljs.core.async.t13569.cljs$lang$ctorStr = "cljs.core.async/t13569";
cljs.core.async.t13569.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6736__auto__,writer__6737__auto__,opt__6738__auto__){return cljs.core._write.call(null,writer__6737__auto__,"cljs.core.async/t13569");
});})(mults,ensure_mult))
;
cljs.core.async.t13569.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13569.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13569.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13569.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13569.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13569.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13569.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13569.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13571){var self__ = this;
return self__.meta13570;
});})(mults,ensure_mult))
;
cljs.core.async.t13569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13571,meta13570__$1){var self__ = this;
return (new cljs.core.async.t13569(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13570__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13569 = ((function (mults,ensure_mult){
return (function __GT_t13569(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13570){return (new cljs.core.async.t13569(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13570));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13569(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__8306__auto___13692 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8307__auto__ = (function (){var switch__8231__auto__ = (function (state_13644){var state_val_13645 = (state_13644[1]);if((state_val_13645 === 1))
{var state_13644__$1 = state_13644;var statearr_13646_13693 = state_13644__$1;(statearr_13646_13693[2] = null);
(statearr_13646_13693[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13645 === 2))
{var state_13644__$1 = state_13644;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13644__$1,4,ch);
} else
{if((state_val_13645 === 3))
{var inst_13642 = (state_13644[2]);var state_13644__$1 = state_13644;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13644__$1,inst_13642);
} else
{if((state_val_13645 === 4))
{var inst_13574 = (state_13644[5]);var inst_13574__$1 = (state_13644[2]);var inst_13575 = (inst_13574__$1 == null);var state_13644__$1 = (function (){var statearr_13647 = state_13644;(statearr_13647[5] = inst_13574__$1);
return statearr_13647;
})();if(cljs.core.truth_(inst_13575))
{var statearr_13648_13694 = state_13644__$1;(statearr_13648_13694[1] = 5);
} else
{var statearr_13649_13695 = state_13644__$1;(statearr_13649_13695[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13645 === 5))
{var inst_13581 = cljs.core.deref.call(null,mults);var inst_13582 = cljs.core.vals.call(null,inst_13581);var inst_13583 = cljs.core.seq.call(null,inst_13582);var inst_13584 = inst_13583;var inst_13585 = null;var inst_13586 = 0;var inst_13587 = 0;var state_13644__$1 = (function (){var statearr_13650 = state_13644;(statearr_13650[6] = inst_13587);
(statearr_13650[7] = inst_13586);
(statearr_13650[8] = inst_13584);
(statearr_13650[9] = inst_13585);
return statearr_13650;
})();var statearr_13651_13696 = state_13644__$1;(statearr_13651_13696[2] = null);
(statearr_13651_13696[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13645 === 6))
{var inst_13624 = (state_13644[10]);var inst_13574 = (state_13644[5]);var inst_13622 = (state_13644[11]);var inst_13622__$1 = topic_fn.call(null,inst_13574);var inst_13623 = cljs.core.deref.call(null,mults);var inst_13624__$1 = cljs.core.get.call(null,inst_13623,inst_13622__$1);var state_13644__$1 = (function (){var statearr_13652 = state_13644;(statearr_13652[10] = inst_13624__$1);
(statearr_13652[11] = inst_13622__$1);
return statearr_13652;
})();if(cljs.core.truth_(inst_13624__$1))
{var statearr_13653_13697 = state_13644__$1;(statearr_13653_13697[1] = 19);
} else
{var statearr_13654_13698 = state_13644__$1;(statearr_13654_13698[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13645 === 7))
{var inst_13640 = (state_13644[2]);var state_13644__$1 = state_13644;var statearr_13655_13699 = state_13644__$1;(statearr_13655_13699[2] = inst_13640);
(statearr_13655_13699[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13645 === 8))
{var inst_13587 = (state_13644[6]);var inst_13586 = (state_13644[7]);var inst_13589 = (inst_13587 < inst_13586);var inst_13590 = inst_13589;var state_13644__$1 = state_13644;if(cljs.core.truth_(inst_13590))
{var statearr_13659_13700 = state_13644__$1;(statearr_13659_13700[1] = 10);
} else
{var statearr_13660_13701 = state_13644__$1;(statearr_13660_13701[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13645 === 9))
{var inst_13620 = (state_13644[2]);var state_13644__$1 = state_13644;var statearr_13661_13702 = state_13644__$1;(statearr_13661_13702[2] = inst_13620);
(statearr_13661_13702[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13645 === 10))
{var inst_13587 = (state_13644[6]);var inst_13586 = (state_13644[7]);var inst_13584 = (state_13644[8]);var inst_13585 = (state_13644[9]);var inst_13592 = cljs.core._nth.call(null,inst_13585,inst_13587);var inst_13593 = cljs.core.async.muxch_STAR_.call(null,inst_13592);var inst_13594 = cljs.core.async.close_BANG_.call(null,inst_13593);var inst_13595 = (inst_13587 + 1);var tmp13656 = inst_13586;var tmp13657 = inst_13584;var tmp13658 = inst_13585;var inst_13584__$1 = tmp13657;var inst_13585__$1 = tmp13658;var inst_13586__$1 = tmp13656;var inst_13587__$1 = inst_13595;var state_13644__$1 = (function (){var statearr_13662 = state_13644;(statearr_13662[12] = inst_13594);
(statearr_13662[6] = inst_13587__$1);
(statearr_13662[7] = inst_13586__$1);
(statearr_13662[8] = inst_13584__$1);
(statearr_13662[9] = inst_13585__$1);
return statearr_13662;
})();var statearr_13663_13703 = state_13644__$1;(statearr_13663_13703[2] = null);
(statearr_13663_13703[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13645 === 11))
{var inst_13598 = (state_13644[13]);var inst_13584 = (state_13644[8]);var inst_13598__$1 = cljs.core.seq.call(null,inst_13584);var state_13644__$1 = (function (){var statearr_13664 = state_13644;(statearr_13664[13] = inst_13598__$1);
return statearr_13664;
})();if(inst_13598__$1)
{var statearr_13665_13704 = state_13644__$1;(statearr_13665_13704[1] = 13);
} else
{var statearr_13666_13705 = state_13644__$1;(statearr_13666_13705[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13645 === 12))
{var inst_13618 = (state_13644[2]);var state_13644__$1 = state_13644;var statearr_13667_13706 = state_13644__$1;(statearr_13667_13706[2] = inst_13618);
(statearr_13667_13706[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13645 === 13))
{var inst_13598 = (state_13644[13]);var inst_13600 = cljs.core.chunked_seq_QMARK_.call(null,inst_13598);var state_13644__$1 = state_13644;if(inst_13600)
{var statearr_13668_13707 = state_13644__$1;(statearr_13668_13707[1] = 16);
} else
{var statearr_13669_13708 = state_13644__$1;(statearr_13669_13708[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13645 === 14))
{var state_13644__$1 = state_13644;var statearr_13670_13709 = state_13644__$1;(statearr_13670_13709[2] = null);
(statearr_13670_13709[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13645 === 15))
{var inst_13616 = (state_13644[2]);var state_13644__$1 = state_13644;var statearr_13671_13710 = state_13644__$1;(statearr_13671_13710[2] = inst_13616);
(statearr_13671_13710[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13645 === 16))
{var inst_13598 = (state_13644[13]);var inst_13602 = cljs.core.chunk_first.call(null,inst_13598);var inst_13603 = cljs.core.chunk_rest.call(null,inst_13598);var inst_13604 = cljs.core.count.call(null,inst_13602);var inst_13584 = inst_13603;var inst_13585 = inst_13602;var inst_13586 = inst_13604;var inst_13587 = 0;var state_13644__$1 = (function (){var statearr_13672 = state_13644;(statearr_13672[6] = inst_13587);
(statearr_13672[7] = inst_13586);
(statearr_13672[8] = inst_13584);
(statearr_13672[9] = inst_13585);
return statearr_13672;
})();var statearr_13673_13711 = state_13644__$1;(statearr_13673_13711[2] = null);
(statearr_13673_13711[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13645 === 17))
{var inst_13598 = (state_13644[13]);var inst_13607 = cljs.core.first.call(null,inst_13598);var inst_13608 = cljs.core.async.muxch_STAR_.call(null,inst_13607);var inst_13609 = cljs.core.async.close_BANG_.call(null,inst_13608);var inst_13610 = cljs.core.next.call(null,inst_13598);var inst_13584 = inst_13610;var inst_13585 = null;var inst_13586 = 0;var inst_13587 = 0;var state_13644__$1 = (function (){var statearr_13674 = state_13644;(statearr_13674[14] = inst_13609);
(statearr_13674[6] = inst_13587);
(statearr_13674[7] = inst_13586);
(statearr_13674[8] = inst_13584);
(statearr_13674[9] = inst_13585);
return statearr_13674;
})();var statearr_13675_13712 = state_13644__$1;(statearr_13675_13712[2] = null);
(statearr_13675_13712[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13645 === 18))
{var inst_13613 = (state_13644[2]);var state_13644__$1 = state_13644;var statearr_13676_13713 = state_13644__$1;(statearr_13676_13713[2] = inst_13613);
(statearr_13676_13713[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13645 === 19))
{var state_13644__$1 = state_13644;var statearr_13677_13714 = state_13644__$1;(statearr_13677_13714[2] = null);
(statearr_13677_13714[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13645 === 20))
{var state_13644__$1 = state_13644;var statearr_13678_13715 = state_13644__$1;(statearr_13678_13715[2] = null);
(statearr_13678_13715[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13645 === 21))
{var inst_13637 = (state_13644[2]);var state_13644__$1 = (function (){var statearr_13679 = state_13644;(statearr_13679[15] = inst_13637);
return statearr_13679;
})();var statearr_13680_13716 = state_13644__$1;(statearr_13680_13716[2] = null);
(statearr_13680_13716[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13645 === 22))
{var inst_13634 = (state_13644[2]);var state_13644__$1 = state_13644;var statearr_13681_13717 = state_13644__$1;(statearr_13681_13717[2] = inst_13634);
(statearr_13681_13717[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13645 === 23))
{var inst_13622 = (state_13644[11]);var inst_13626 = (state_13644[2]);var inst_13627 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13622);var state_13644__$1 = (function (){var statearr_13682 = state_13644;(statearr_13682[16] = inst_13626);
return statearr_13682;
})();var statearr_13683_13718 = state_13644__$1;(statearr_13683_13718[2] = inst_13627);
(statearr_13683_13718[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13645 === 24))
{try{var inst_13624 = (state_13644[10]);var inst_13574 = (state_13644[5]);var inst_13630 = cljs.core.async.muxch_STAR_.call(null,inst_13624);var state_13644__$1 = state_13644;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13644__$1,25,inst_13630,inst_13574);
}catch (e13684){if((e13684 instanceof Object))
{var ex__8225__auto__ = e13684;var statearr_13685_13719 = state_13644;(statearr_13685_13719[1] = 23);
(statearr_13685_13719[2] = ex__8225__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13684;
} else
{return null;
}
}
}} else
{if((state_val_13645 === 25))
{try{var inst_13632 = (state_13644[2]);var state_13644__$1 = state_13644;var statearr_13688_13720 = state_13644__$1;(statearr_13688_13720[2] = inst_13632);
(statearr_13688_13720[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e13686){if((e13686 instanceof Object))
{var ex__8225__auto__ = e13686;var statearr_13687_13721 = state_13644;(statearr_13687_13721[1] = 23);
(statearr_13687_13721[2] = ex__8225__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13686;
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
});return ((function (switch__8231__auto__){
return (function() {
var state_machine__8232__auto__ = null;
var state_machine__8232__auto____0 = (function (){var statearr_13690 = (new Array(17));(statearr_13690[0] = state_machine__8232__auto__);
(statearr_13690[1] = 1);
return statearr_13690;
});
var state_machine__8232__auto____1 = (function (state_13644){while(true){
var result__8233__auto__ = switch__8231__auto__.call(null,state_13644);if(cljs.core.keyword_identical_QMARK_.call(null,result__8233__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8233__auto__;
}
break;
}
});
state_machine__8232__auto__ = function(state_13644){
switch(arguments.length){
case 0:
return state_machine__8232__auto____0.call(this);
case 1:
return state_machine__8232__auto____1.call(this,state_13644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8232__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8232__auto____0;
state_machine__8232__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8232__auto____1;
return state_machine__8232__auto__;
})()
;})(switch__8231__auto__))
})();var state__8308__auto__ = (function (){var statearr_13691 = f__8307__auto__.call(null);(statearr_13691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8306__auto___13692);
return statearr_13691;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8308__auto__);
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
,cljs.core.range.call(null,cnt));var c__8306__auto___13852 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8307__auto__ = (function (){var switch__8231__auto__ = (function (state_13824){var state_val_13825 = (state_13824[1]);if((state_val_13825 === 1))
{var state_13824__$1 = state_13824;var statearr_13826_13853 = state_13824__$1;(statearr_13826_13853[2] = null);
(statearr_13826_13853[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13825 === 2))
{var inst_13788 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13789 = 0;var state_13824__$1 = (function (){var statearr_13827 = state_13824;(statearr_13827[5] = inst_13788);
(statearr_13827[6] = inst_13789);
return statearr_13827;
})();var statearr_13828_13854 = state_13824__$1;(statearr_13828_13854[2] = null);
(statearr_13828_13854[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13825 === 3))
{var inst_13822 = (state_13824[2]);var state_13824__$1 = state_13824;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13824__$1,inst_13822);
} else
{if((state_val_13825 === 4))
{var inst_13789 = (state_13824[6]);var inst_13791 = (inst_13789 < cnt);var state_13824__$1 = state_13824;if(cljs.core.truth_(inst_13791))
{var statearr_13829_13855 = state_13824__$1;(statearr_13829_13855[1] = 6);
} else
{var statearr_13830_13856 = state_13824__$1;(statearr_13830_13856[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13825 === 5))
{var inst_13808 = (state_13824[2]);var state_13824__$1 = (function (){var statearr_13831 = state_13824;(statearr_13831[7] = inst_13808);
return statearr_13831;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13824__$1,12,dchan);
} else
{if((state_val_13825 === 6))
{var state_13824__$1 = state_13824;var statearr_13832_13857 = state_13824__$1;(statearr_13832_13857[2] = null);
(statearr_13832_13857[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13825 === 7))
{var state_13824__$1 = state_13824;var statearr_13833_13858 = state_13824__$1;(statearr_13833_13858[2] = null);
(statearr_13833_13858[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13825 === 8))
{var inst_13806 = (state_13824[2]);var state_13824__$1 = state_13824;var statearr_13834_13859 = state_13824__$1;(statearr_13834_13859[2] = inst_13806);
(statearr_13834_13859[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13825 === 9))
{var inst_13789 = (state_13824[6]);var inst_13801 = (state_13824[2]);var inst_13802 = (inst_13789 + 1);var inst_13789__$1 = inst_13802;var state_13824__$1 = (function (){var statearr_13835 = state_13824;(statearr_13835[6] = inst_13789__$1);
(statearr_13835[8] = inst_13801);
return statearr_13835;
})();var statearr_13836_13860 = state_13824__$1;(statearr_13836_13860[2] = null);
(statearr_13836_13860[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13825 === 10))
{var inst_13793 = (state_13824[2]);var inst_13794 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13824__$1 = (function (){var statearr_13837 = state_13824;(statearr_13837[9] = inst_13793);
return statearr_13837;
})();var statearr_13838_13861 = state_13824__$1;(statearr_13838_13861[2] = inst_13794);
(statearr_13838_13861[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13825 === 11))
{try{var inst_13789 = (state_13824[6]);var inst_13797 = chs__$1.call(null,inst_13789);var inst_13798 = done.call(null,inst_13789);var inst_13799 = cljs.core.async.take_BANG_.call(null,inst_13797,inst_13798);var state_13824__$1 = state_13824;var statearr_13841_13862 = state_13824__$1;(statearr_13841_13862[2] = inst_13799);
(statearr_13841_13862[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e13839){if((e13839 instanceof Object))
{var ex__8225__auto__ = e13839;var statearr_13840_13863 = state_13824;(statearr_13840_13863[1] = 10);
(statearr_13840_13863[2] = ex__8225__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13839;
} else
{return null;
}
}
}} else
{if((state_val_13825 === 12))
{var inst_13810 = (state_13824[10]);var inst_13810__$1 = (state_13824[2]);var inst_13811 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13810__$1);var state_13824__$1 = (function (){var statearr_13842 = state_13824;(statearr_13842[10] = inst_13810__$1);
return statearr_13842;
})();if(cljs.core.truth_(inst_13811))
{var statearr_13843_13864 = state_13824__$1;(statearr_13843_13864[1] = 13);
} else
{var statearr_13844_13865 = state_13824__$1;(statearr_13844_13865[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13825 === 13))
{var inst_13813 = cljs.core.async.close_BANG_.call(null,out);var state_13824__$1 = state_13824;var statearr_13845_13866 = state_13824__$1;(statearr_13845_13866[2] = inst_13813);
(statearr_13845_13866[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13825 === 14))
{var inst_13810 = (state_13824[10]);var inst_13815 = cljs.core.apply.call(null,f,inst_13810);var state_13824__$1 = state_13824;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13824__$1,16,out,inst_13815);
} else
{if((state_val_13825 === 15))
{var inst_13820 = (state_13824[2]);var state_13824__$1 = state_13824;var statearr_13846_13867 = state_13824__$1;(statearr_13846_13867[2] = inst_13820);
(statearr_13846_13867[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13825 === 16))
{var inst_13817 = (state_13824[2]);var state_13824__$1 = (function (){var statearr_13847 = state_13824;(statearr_13847[11] = inst_13817);
return statearr_13847;
})();var statearr_13848_13868 = state_13824__$1;(statearr_13848_13868[2] = null);
(statearr_13848_13868[1] = 2);
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
});return ((function (switch__8231__auto__){
return (function() {
var state_machine__8232__auto__ = null;
var state_machine__8232__auto____0 = (function (){var statearr_13850 = (new Array(12));(statearr_13850[0] = state_machine__8232__auto__);
(statearr_13850[1] = 1);
return statearr_13850;
});
var state_machine__8232__auto____1 = (function (state_13824){while(true){
var result__8233__auto__ = switch__8231__auto__.call(null,state_13824);if(cljs.core.keyword_identical_QMARK_.call(null,result__8233__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8233__auto__;
}
break;
}
});
state_machine__8232__auto__ = function(state_13824){
switch(arguments.length){
case 0:
return state_machine__8232__auto____0.call(this);
case 1:
return state_machine__8232__auto____1.call(this,state_13824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8232__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8232__auto____0;
state_machine__8232__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8232__auto____1;
return state_machine__8232__auto__;
})()
;})(switch__8231__auto__))
})();var state__8308__auto__ = (function (){var statearr_13851 = f__8307__auto__.call(null);(statearr_13851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8306__auto___13852);
return statearr_13851;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8308__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8306__auto___13968 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8307__auto__ = (function (){var switch__8231__auto__ = (function (state_13948){var state_val_13949 = (state_13948[1]);if((state_val_13949 === 1))
{var inst_13919 = cljs.core.vec.call(null,chs);var inst_13920 = inst_13919;var state_13948__$1 = (function (){var statearr_13950 = state_13948;(statearr_13950[5] = inst_13920);
return statearr_13950;
})();var statearr_13951_13969 = state_13948__$1;(statearr_13951_13969[2] = null);
(statearr_13951_13969[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13949 === 2))
{var inst_13920 = (state_13948[5]);var inst_13922 = cljs.core.count.call(null,inst_13920);var inst_13923 = (inst_13922 > 0);var state_13948__$1 = state_13948;if(cljs.core.truth_(inst_13923))
{var statearr_13952_13970 = state_13948__$1;(statearr_13952_13970[1] = 4);
} else
{var statearr_13953_13971 = state_13948__$1;(statearr_13953_13971[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13949 === 3))
{var inst_13946 = (state_13948[2]);var state_13948__$1 = state_13948;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13948__$1,inst_13946);
} else
{if((state_val_13949 === 4))
{var inst_13920 = (state_13948[5]);var state_13948__$1 = state_13948;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13948__$1,7,inst_13920);
} else
{if((state_val_13949 === 5))
{var inst_13942 = cljs.core.async.close_BANG_.call(null,out);var state_13948__$1 = state_13948;var statearr_13954_13972 = state_13948__$1;(statearr_13954_13972[2] = inst_13942);
(statearr_13954_13972[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13949 === 6))
{var inst_13944 = (state_13948[2]);var state_13948__$1 = state_13948;var statearr_13955_13973 = state_13948__$1;(statearr_13955_13973[2] = inst_13944);
(statearr_13955_13973[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13949 === 7))
{var inst_13927 = (state_13948[6]);var inst_13928 = (state_13948[7]);var inst_13927__$1 = (state_13948[2]);var inst_13928__$1 = cljs.core.nth.call(null,inst_13927__$1,0,null);var inst_13929 = cljs.core.nth.call(null,inst_13927__$1,1,null);var inst_13930 = (inst_13928__$1 == null);var state_13948__$1 = (function (){var statearr_13956 = state_13948;(statearr_13956[6] = inst_13927__$1);
(statearr_13956[7] = inst_13928__$1);
(statearr_13956[8] = inst_13929);
return statearr_13956;
})();if(cljs.core.truth_(inst_13930))
{var statearr_13957_13974 = state_13948__$1;(statearr_13957_13974[1] = 8);
} else
{var statearr_13958_13975 = state_13948__$1;(statearr_13958_13975[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13949 === 8))
{var inst_13927 = (state_13948[6]);var inst_13928 = (state_13948[7]);var inst_13929 = (state_13948[8]);var inst_13920 = (state_13948[5]);var inst_13932 = (function (){var c = inst_13929;var v = inst_13928;var vec__13925 = inst_13927;var cs = inst_13920;return ((function (c,v,vec__13925,cs,inst_13927,inst_13928,inst_13929,inst_13920,state_val_13949){
return (function (p1__13869_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13869_SHARP_);
});
;})(c,v,vec__13925,cs,inst_13927,inst_13928,inst_13929,inst_13920,state_val_13949))
})();var inst_13933 = cljs.core.filterv.call(null,inst_13932,inst_13920);var inst_13920__$1 = inst_13933;var state_13948__$1 = (function (){var statearr_13959 = state_13948;(statearr_13959[5] = inst_13920__$1);
return statearr_13959;
})();var statearr_13960_13976 = state_13948__$1;(statearr_13960_13976[2] = null);
(statearr_13960_13976[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13949 === 9))
{var inst_13928 = (state_13948[7]);var state_13948__$1 = state_13948;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13948__$1,11,out,inst_13928);
} else
{if((state_val_13949 === 10))
{var inst_13940 = (state_13948[2]);var state_13948__$1 = state_13948;var statearr_13962_13977 = state_13948__$1;(statearr_13962_13977[2] = inst_13940);
(statearr_13962_13977[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13949 === 11))
{var inst_13920 = (state_13948[5]);var inst_13937 = (state_13948[2]);var tmp13961 = inst_13920;var inst_13920__$1 = tmp13961;var state_13948__$1 = (function (){var statearr_13963 = state_13948;(statearr_13963[9] = inst_13937);
(statearr_13963[5] = inst_13920__$1);
return statearr_13963;
})();var statearr_13964_13978 = state_13948__$1;(statearr_13964_13978[2] = null);
(statearr_13964_13978[1] = 2);
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
});return ((function (switch__8231__auto__){
return (function() {
var state_machine__8232__auto__ = null;
var state_machine__8232__auto____0 = (function (){var statearr_13966 = (new Array(10));(statearr_13966[0] = state_machine__8232__auto__);
(statearr_13966[1] = 1);
return statearr_13966;
});
var state_machine__8232__auto____1 = (function (state_13948){while(true){
var result__8233__auto__ = switch__8231__auto__.call(null,state_13948);if(cljs.core.keyword_identical_QMARK_.call(null,result__8233__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8233__auto__;
}
break;
}
});
state_machine__8232__auto__ = function(state_13948){
switch(arguments.length){
case 0:
return state_machine__8232__auto____0.call(this);
case 1:
return state_machine__8232__auto____1.call(this,state_13948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8232__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8232__auto____0;
state_machine__8232__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8232__auto____1;
return state_machine__8232__auto__;
})()
;})(switch__8231__auto__))
})();var state__8308__auto__ = (function (){var statearr_13967 = f__8307__auto__.call(null);(statearr_13967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8306__auto___13968);
return statearr_13967;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8308__auto__);
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
