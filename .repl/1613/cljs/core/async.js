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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t25257 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t25257');

/**
* @constructor
*/
cljs.core.async.t25257 = (function (f,fn_handler,meta25258){
this.f = f;
this.fn_handler = fn_handler;
this.meta25258 = meta25258;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25257.cljs$lang$type = true;
cljs.core.async.t25257.cljs$lang$ctorStr = "cljs.core.async/t25257";
cljs.core.async.t25257.cljs$lang$ctorPrWriter = (function (this__19654__auto__,writer__19655__auto__,opt__19656__auto__){return cljs.core._write.call(null,writer__19655__auto__,"cljs.core.async/t25257");
});
cljs.core.async.t25257.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25257.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return true;
});
cljs.core.async.t25257.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
return self__.f;
});
cljs.core.async.t25257.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25259){var self__ = this;
return self__.meta25258;
});
cljs.core.async.t25257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25259,meta25258__$1){var self__ = this;
return (new cljs.core.async.t25257(self__.f,self__.fn_handler,meta25258__$1));
});
cljs.core.async.__GT_t25257 = (function __GT_t25257(f__$1,fn_handler__$1,meta25258){return (new cljs.core.async.t25257(f__$1,fn_handler__$1,meta25258));
});
}
return (new cljs.core.async.t25257(f,fn_handler,null));
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
{var val_25260 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_25260);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_25260);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__19925__auto___25261 = n;var x_25262 = 0;while(true){
if((x_25262 < n__19925__auto___25261))
{(a[x_25262] = 0);
{
var G__25263 = (x_25262 + 1);
x_25262 = G__25263;
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
var G__25264 = (i + 1);
i = G__25264;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t25268 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t25268');

/**
* @constructor
*/
cljs.core.async.t25268 = (function (flag,alt_flag,meta25269){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta25269 = meta25269;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25268.cljs$lang$type = true;
cljs.core.async.t25268.cljs$lang$ctorStr = "cljs.core.async/t25268";
cljs.core.async.t25268.cljs$lang$ctorPrWriter = (function (this__19654__auto__,writer__19655__auto__,opt__19656__auto__){return cljs.core._write.call(null,writer__19655__auto__,"cljs.core.async/t25268");
});
cljs.core.async.t25268.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25268.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t25268.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t25268.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25270){var self__ = this;
return self__.meta25269;
});
cljs.core.async.t25268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25270,meta25269__$1){var self__ = this;
return (new cljs.core.async.t25268(self__.flag,self__.alt_flag,meta25269__$1));
});
cljs.core.async.__GT_t25268 = (function __GT_t25268(flag__$1,alt_flag__$1,meta25269){return (new cljs.core.async.t25268(flag__$1,alt_flag__$1,meta25269));
});
}
return (new cljs.core.async.t25268(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t25274 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t25274');

/**
* @constructor
*/
cljs.core.async.t25274 = (function (cb,flag,alt_handler,meta25275){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta25275 = meta25275;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25274.cljs$lang$type = true;
cljs.core.async.t25274.cljs$lang$ctorStr = "cljs.core.async/t25274";
cljs.core.async.t25274.cljs$lang$ctorPrWriter = (function (this__19654__auto__,writer__19655__auto__,opt__19656__auto__){return cljs.core._write.call(null,writer__19655__auto__,"cljs.core.async/t25274");
});
cljs.core.async.t25274.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25274.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t25274.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t25274.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25276){var self__ = this;
return self__.meta25275;
});
cljs.core.async.t25274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25276,meta25275__$1){var self__ = this;
return (new cljs.core.async.t25274(self__.cb,self__.flag,self__.alt_handler,meta25275__$1));
});
cljs.core.async.__GT_t25274 = (function __GT_t25274(cb__$1,flag__$1,alt_handler__$1,meta25275){return (new cljs.core.async.t25274(cb__$1,flag__$1,alt_handler__$1,meta25275));
});
}
return (new cljs.core.async.t25274(cb,flag,alt_handler,null));
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
return (function (p1__25277_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__25277_SHARP_,port], true));
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
var G__25278 = (i + 1);
i = G__25278;
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
var alts_BANG___delegate = function (ports,p__25279){var map__25281 = p__25279;var map__25281__$1 = ((cljs.core.seq_QMARK_.call(null,map__25281))?cljs.core.apply.call(null,cljs.core.hash_map,map__25281):map__25281);var opts = map__25281__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__25279 = null;if (arguments.length > 1) {
  p__25279 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__25279);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__25282){
var ports = cljs.core.first(arglist__25282);
var p__25279 = cljs.core.rest(arglist__25282);
return alts_BANG___delegate(ports,p__25279);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t25290 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t25290');

/**
* @constructor
*/
cljs.core.async.t25290 = (function (ch,f,map_LT_,meta25291){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25291 = meta25291;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25290.cljs$lang$type = true;
cljs.core.async.t25290.cljs$lang$ctorStr = "cljs.core.async/t25290";
cljs.core.async.t25290.cljs$lang$ctorPrWriter = (function (this__19654__auto__,writer__19655__auto__,opt__19656__auto__){return cljs.core._write.call(null,writer__19655__auto__,"cljs.core.async/t25290");
});
cljs.core.async.t25290.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25290.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t25290.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25290.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t25293 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t25293');

/**
* @constructor
*/
cljs.core.async.t25293 = (function (fn1,_,meta25291,ch,f,map_LT_,meta25294){
this.fn1 = fn1;
this._ = _;
this.meta25291 = meta25291;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25294 = meta25294;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25293.cljs$lang$type = true;
cljs.core.async.t25293.cljs$lang$ctorStr = "cljs.core.async/t25293";
cljs.core.async.t25293.cljs$lang$ctorPrWriter = (function (this__19654__auto__,writer__19655__auto__,opt__19656__auto__){return cljs.core._write.call(null,writer__19655__auto__,"cljs.core.async/t25293");
});
cljs.core.async.t25293.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25293.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$2){var self__ = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t25293.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$2){var self__ = this;
return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t25293.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$2){var self__ = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1){
return (function (p1__25283_SHARP_){return f1.call(null,(((p1__25283_SHARP_ == null))?null:self__.f.call(null,p1__25283_SHARP_)));
});
;})(f1))
});
cljs.core.async.t25293.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25295){var self__ = this;
return self__.meta25294;
});
cljs.core.async.t25293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25295,meta25294__$1){var self__ = this;
return (new cljs.core.async.t25293(self__.fn1,self__._,self__.meta25291,self__.ch,self__.f,self__.map_LT_,meta25294__$1));
});
cljs.core.async.__GT_t25293 = (function __GT_t25293(fn1__$1,___$1,meta25291__$1,ch__$2,f__$2,map_LT___$2,meta25294){return (new cljs.core.async.t25293(fn1__$1,___$1,meta25291__$1,ch__$2,f__$2,map_LT___$2,meta25294));
});
}
return (new cljs.core.async.t25293(fn1,_,self__.meta25291,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t25290.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25290.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25292){var self__ = this;
return self__.meta25291;
});
cljs.core.async.t25290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25292,meta25291__$1){var self__ = this;
return (new cljs.core.async.t25290(self__.ch,self__.f,self__.map_LT_,meta25291__$1));
});
cljs.core.async.__GT_t25290 = (function __GT_t25290(ch__$1,f__$1,map_LT___$1,meta25291){return (new cljs.core.async.t25290(ch__$1,f__$1,map_LT___$1,meta25291));
});
}
return (new cljs.core.async.t25290(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t25299 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t25299');

/**
* @constructor
*/
cljs.core.async.t25299 = (function (ch,f,map_GT_,meta25300){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25300 = meta25300;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25299.cljs$lang$type = true;
cljs.core.async.t25299.cljs$lang$ctorStr = "cljs.core.async/t25299";
cljs.core.async.t25299.cljs$lang$ctorPrWriter = (function (this__19654__auto__,writer__19655__auto__,opt__19656__auto__){return cljs.core._write.call(null,writer__19655__auto__,"cljs.core.async/t25299");
});
cljs.core.async.t25299.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25299.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t25299.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25299.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25299.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25299.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25301){var self__ = this;
return self__.meta25300;
});
cljs.core.async.t25299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25301,meta25300__$1){var self__ = this;
return (new cljs.core.async.t25299(self__.ch,self__.f,self__.map_GT_,meta25300__$1));
});
cljs.core.async.__GT_t25299 = (function __GT_t25299(ch__$1,f__$1,map_GT___$1,meta25300){return (new cljs.core.async.t25299(ch__$1,f__$1,map_GT___$1,meta25300));
});
}
return (new cljs.core.async.t25299(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t25305 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t25305');

/**
* @constructor
*/
cljs.core.async.t25305 = (function (ch,p,filter_GT_,meta25306){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25306 = meta25306;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25305.cljs$lang$type = true;
cljs.core.async.t25305.cljs$lang$ctorStr = "cljs.core.async/t25305";
cljs.core.async.t25305.cljs$lang$ctorPrWriter = (function (this__19654__auto__,writer__19655__auto__,opt__19656__auto__){return cljs.core._write.call(null,writer__19655__auto__,"cljs.core.async/t25305");
});
cljs.core.async.t25305.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25305.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t25305.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25305.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25305.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25305.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25305.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25307){var self__ = this;
return self__.meta25306;
});
cljs.core.async.t25305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25307,meta25306__$1){var self__ = this;
return (new cljs.core.async.t25305(self__.ch,self__.p,self__.filter_GT_,meta25306__$1));
});
cljs.core.async.__GT_t25305 = (function __GT_t25305(ch__$1,p__$1,filter_GT___$1,meta25306){return (new cljs.core.async.t25305(ch__$1,p__$1,filter_GT___$1,meta25306));
});
}
return (new cljs.core.async.t25305(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__21188__auto___25382 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__21189__auto__ = (function (){var switch__21132__auto__ = (function (state_25365){var state_val_25366 = (state_25365[1]);if((state_val_25366 === 1))
{var state_25365__$1 = state_25365;var statearr_25367_25383 = state_25365__$1;(statearr_25367_25383[2] = null);
(statearr_25367_25383[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25366 === 2))
{var state_25365__$1 = state_25365;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25365__$1,4,ch);
} else
{if((state_val_25366 === 3))
{var inst_25363 = (state_25365[2]);var state_25365__$1 = state_25365;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25365__$1,inst_25363);
} else
{if((state_val_25366 === 4))
{var inst_25347 = (state_25365[5]);var inst_25347__$1 = (state_25365[2]);var inst_25348 = (inst_25347__$1 == null);var state_25365__$1 = (function (){var statearr_25368 = state_25365;(statearr_25368[5] = inst_25347__$1);
return statearr_25368;
})();if(cljs.core.truth_(inst_25348))
{var statearr_25369_25384 = state_25365__$1;(statearr_25369_25384[1] = 5);
} else
{var statearr_25370_25385 = state_25365__$1;(statearr_25370_25385[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25366 === 5))
{var inst_25350 = cljs.core.async.close_BANG_.call(null,out);var state_25365__$1 = state_25365;var statearr_25371_25386 = state_25365__$1;(statearr_25371_25386[2] = inst_25350);
(statearr_25371_25386[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25366 === 6))
{var inst_25347 = (state_25365[5]);var inst_25352 = p.call(null,inst_25347);var state_25365__$1 = state_25365;if(cljs.core.truth_(inst_25352))
{var statearr_25372_25387 = state_25365__$1;(statearr_25372_25387[1] = 8);
} else
{var statearr_25373_25388 = state_25365__$1;(statearr_25373_25388[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25366 === 7))
{var inst_25361 = (state_25365[2]);var state_25365__$1 = state_25365;var statearr_25374_25389 = state_25365__$1;(statearr_25374_25389[2] = inst_25361);
(statearr_25374_25389[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25366 === 8))
{var inst_25347 = (state_25365[5]);var state_25365__$1 = state_25365;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25365__$1,11,out,inst_25347);
} else
{if((state_val_25366 === 9))
{var state_25365__$1 = state_25365;var statearr_25375_25390 = state_25365__$1;(statearr_25375_25390[2] = null);
(statearr_25375_25390[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25366 === 10))
{var inst_25358 = (state_25365[2]);var state_25365__$1 = (function (){var statearr_25376 = state_25365;(statearr_25376[6] = inst_25358);
return statearr_25376;
})();var statearr_25377_25391 = state_25365__$1;(statearr_25377_25391[2] = null);
(statearr_25377_25391[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25366 === 11))
{var inst_25355 = (state_25365[2]);var state_25365__$1 = state_25365;var statearr_25378_25392 = state_25365__$1;(statearr_25378_25392[2] = inst_25355);
(statearr_25378_25392[1] = 10);
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
});return ((function (switch__21132__auto__){
return (function() {
var state_machine__21133__auto__ = null;
var state_machine__21133__auto____0 = (function (){var statearr_25380 = (new Array(7));(statearr_25380[0] = state_machine__21133__auto__);
(statearr_25380[1] = 1);
return statearr_25380;
});
var state_machine__21133__auto____1 = (function (state_25365){while(true){
var result__21134__auto__ = switch__21132__auto__.call(null,state_25365);if(cljs.core.keyword_identical_QMARK_.call(null,result__21134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__21134__auto__;
}
break;
}
});
state_machine__21133__auto__ = function(state_25365){
switch(arguments.length){
case 0:
return state_machine__21133__auto____0.call(this);
case 1:
return state_machine__21133__auto____1.call(this,state_25365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__21133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__21133__auto____0;
state_machine__21133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__21133__auto____1;
return state_machine__21133__auto__;
})()
;})(switch__21132__auto__))
})();var state__21190__auto__ = (function (){var statearr_25381 = f__21189__auto__.call(null);(statearr_25381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21188__auto___25382);
return statearr_25381;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__21188__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__21189__auto__ = (function (){var switch__21132__auto__ = (function (state_25540){var state_val_25541 = (state_25540[1]);if((state_val_25541 === 1))
{var state_25540__$1 = state_25540;var statearr_25542_25575 = state_25540__$1;(statearr_25542_25575[2] = null);
(statearr_25542_25575[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25541 === 2))
{var state_25540__$1 = state_25540;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25540__$1,4,in$);
} else
{if((state_val_25541 === 3))
{var inst_25538 = (state_25540[2]);var state_25540__$1 = state_25540;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25540__$1,inst_25538);
} else
{if((state_val_25541 === 4))
{var inst_25486 = (state_25540[5]);var inst_25486__$1 = (state_25540[2]);var inst_25487 = (inst_25486__$1 == null);var state_25540__$1 = (function (){var statearr_25543 = state_25540;(statearr_25543[5] = inst_25486__$1);
return statearr_25543;
})();if(cljs.core.truth_(inst_25487))
{var statearr_25544_25576 = state_25540__$1;(statearr_25544_25576[1] = 5);
} else
{var statearr_25545_25577 = state_25540__$1;(statearr_25545_25577[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25541 === 5))
{var inst_25489 = cljs.core.async.close_BANG_.call(null,out);var state_25540__$1 = state_25540;var statearr_25546_25578 = state_25540__$1;(statearr_25546_25578[2] = inst_25489);
(statearr_25546_25578[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25541 === 6))
{var inst_25486 = (state_25540[5]);var inst_25491 = f.call(null,inst_25486);var inst_25496 = cljs.core.seq.call(null,inst_25491);var inst_25497 = inst_25496;var inst_25498 = null;var inst_25499 = 0;var inst_25500 = 0;var state_25540__$1 = (function (){var statearr_25547 = state_25540;(statearr_25547[6] = inst_25497);
(statearr_25547[7] = inst_25498);
(statearr_25547[8] = inst_25500);
(statearr_25547[9] = inst_25499);
return statearr_25547;
})();var statearr_25548_25579 = state_25540__$1;(statearr_25548_25579[2] = null);
(statearr_25548_25579[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25541 === 7))
{var inst_25536 = (state_25540[2]);var state_25540__$1 = state_25540;var statearr_25549_25580 = state_25540__$1;(statearr_25549_25580[2] = inst_25536);
(statearr_25549_25580[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25541 === 8))
{var inst_25500 = (state_25540[8]);var inst_25499 = (state_25540[9]);var inst_25502 = (inst_25500 < inst_25499);var inst_25503 = inst_25502;var state_25540__$1 = state_25540;if(cljs.core.truth_(inst_25503))
{var statearr_25550_25581 = state_25540__$1;(statearr_25550_25581[1] = 10);
} else
{var statearr_25551_25582 = state_25540__$1;(statearr_25551_25582[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25541 === 9))
{var inst_25533 = (state_25540[2]);var state_25540__$1 = (function (){var statearr_25552 = state_25540;(statearr_25552[10] = inst_25533);
return statearr_25552;
})();var statearr_25553_25583 = state_25540__$1;(statearr_25553_25583[2] = null);
(statearr_25553_25583[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25541 === 10))
{var inst_25498 = (state_25540[7]);var inst_25500 = (state_25540[8]);var inst_25505 = cljs.core._nth.call(null,inst_25498,inst_25500);var state_25540__$1 = state_25540;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25540__$1,13,out,inst_25505);
} else
{if((state_val_25541 === 11))
{var inst_25497 = (state_25540[6]);var inst_25511 = (state_25540[11]);var inst_25511__$1 = cljs.core.seq.call(null,inst_25497);var state_25540__$1 = (function (){var statearr_25557 = state_25540;(statearr_25557[11] = inst_25511__$1);
return statearr_25557;
})();if(inst_25511__$1)
{var statearr_25558_25584 = state_25540__$1;(statearr_25558_25584[1] = 14);
} else
{var statearr_25559_25585 = state_25540__$1;(statearr_25559_25585[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25541 === 12))
{var inst_25531 = (state_25540[2]);var state_25540__$1 = state_25540;var statearr_25560_25586 = state_25540__$1;(statearr_25560_25586[2] = inst_25531);
(statearr_25560_25586[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25541 === 13))
{var inst_25497 = (state_25540[6]);var inst_25498 = (state_25540[7]);var inst_25500 = (state_25540[8]);var inst_25499 = (state_25540[9]);var inst_25507 = (state_25540[2]);var inst_25508 = (inst_25500 + 1);var tmp25554 = inst_25497;var tmp25555 = inst_25498;var tmp25556 = inst_25499;var inst_25497__$1 = tmp25554;var inst_25498__$1 = tmp25555;var inst_25499__$1 = tmp25556;var inst_25500__$1 = inst_25508;var state_25540__$1 = (function (){var statearr_25561 = state_25540;(statearr_25561[6] = inst_25497__$1);
(statearr_25561[7] = inst_25498__$1);
(statearr_25561[12] = inst_25507);
(statearr_25561[8] = inst_25500__$1);
(statearr_25561[9] = inst_25499__$1);
return statearr_25561;
})();var statearr_25562_25587 = state_25540__$1;(statearr_25562_25587[2] = null);
(statearr_25562_25587[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25541 === 14))
{var inst_25511 = (state_25540[11]);var inst_25513 = cljs.core.chunked_seq_QMARK_.call(null,inst_25511);var state_25540__$1 = state_25540;if(inst_25513)
{var statearr_25563_25588 = state_25540__$1;(statearr_25563_25588[1] = 17);
} else
{var statearr_25564_25589 = state_25540__$1;(statearr_25564_25589[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25541 === 15))
{var state_25540__$1 = state_25540;var statearr_25565_25590 = state_25540__$1;(statearr_25565_25590[2] = null);
(statearr_25565_25590[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25541 === 16))
{var inst_25529 = (state_25540[2]);var state_25540__$1 = state_25540;var statearr_25566_25591 = state_25540__$1;(statearr_25566_25591[2] = inst_25529);
(statearr_25566_25591[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25541 === 17))
{var inst_25511 = (state_25540[11]);var inst_25515 = cljs.core.chunk_first.call(null,inst_25511);var inst_25516 = cljs.core.chunk_rest.call(null,inst_25511);var inst_25517 = cljs.core.count.call(null,inst_25515);var inst_25497 = inst_25516;var inst_25498 = inst_25515;var inst_25499 = inst_25517;var inst_25500 = 0;var state_25540__$1 = (function (){var statearr_25567 = state_25540;(statearr_25567[6] = inst_25497);
(statearr_25567[7] = inst_25498);
(statearr_25567[8] = inst_25500);
(statearr_25567[9] = inst_25499);
return statearr_25567;
})();var statearr_25568_25592 = state_25540__$1;(statearr_25568_25592[2] = null);
(statearr_25568_25592[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25541 === 18))
{var inst_25511 = (state_25540[11]);var inst_25520 = cljs.core.first.call(null,inst_25511);var state_25540__$1 = state_25540;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25540__$1,20,out,inst_25520);
} else
{if((state_val_25541 === 19))
{var inst_25526 = (state_25540[2]);var state_25540__$1 = state_25540;var statearr_25569_25593 = state_25540__$1;(statearr_25569_25593[2] = inst_25526);
(statearr_25569_25593[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25541 === 20))
{var inst_25511 = (state_25540[11]);var inst_25522 = (state_25540[2]);var inst_25523 = cljs.core.next.call(null,inst_25511);var inst_25497 = inst_25523;var inst_25498 = null;var inst_25499 = 0;var inst_25500 = 0;var state_25540__$1 = (function (){var statearr_25570 = state_25540;(statearr_25570[6] = inst_25497);
(statearr_25570[7] = inst_25498);
(statearr_25570[8] = inst_25500);
(statearr_25570[9] = inst_25499);
(statearr_25570[13] = inst_25522);
return statearr_25570;
})();var statearr_25571_25594 = state_25540__$1;(statearr_25571_25594[2] = null);
(statearr_25571_25594[1] = 8);
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
});return ((function (switch__21132__auto__){
return (function() {
var state_machine__21133__auto__ = null;
var state_machine__21133__auto____0 = (function (){var statearr_25573 = (new Array(14));(statearr_25573[0] = state_machine__21133__auto__);
(statearr_25573[1] = 1);
return statearr_25573;
});
var state_machine__21133__auto____1 = (function (state_25540){while(true){
var result__21134__auto__ = switch__21132__auto__.call(null,state_25540);if(cljs.core.keyword_identical_QMARK_.call(null,result__21134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__21134__auto__;
}
break;
}
});
state_machine__21133__auto__ = function(state_25540){
switch(arguments.length){
case 0:
return state_machine__21133__auto____0.call(this);
case 1:
return state_machine__21133__auto____1.call(this,state_25540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__21133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__21133__auto____0;
state_machine__21133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__21133__auto____1;
return state_machine__21133__auto__;
})()
;})(switch__21132__auto__))
})();var state__21190__auto__ = (function (){var statearr_25574 = f__21189__auto__.call(null);(statearr_25574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21188__auto__);
return statearr_25574;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
}));
return c__21188__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__21188__auto___25667 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__21189__auto__ = (function (){var switch__21132__auto__ = (function (state_25650){var state_val_25651 = (state_25650[1]);if((state_val_25651 === 1))
{var state_25650__$1 = state_25650;var statearr_25652_25668 = state_25650__$1;(statearr_25652_25668[2] = null);
(statearr_25652_25668[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25651 === 2))
{var state_25650__$1 = state_25650;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25650__$1,4,from);
} else
{if((state_val_25651 === 3))
{var inst_25648 = (state_25650[2]);var state_25650__$1 = state_25650;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25650__$1,inst_25648);
} else
{if((state_val_25651 === 4))
{var inst_25633 = (state_25650[5]);var inst_25633__$1 = (state_25650[2]);var inst_25634 = (inst_25633__$1 == null);var state_25650__$1 = (function (){var statearr_25653 = state_25650;(statearr_25653[5] = inst_25633__$1);
return statearr_25653;
})();if(cljs.core.truth_(inst_25634))
{var statearr_25654_25669 = state_25650__$1;(statearr_25654_25669[1] = 5);
} else
{var statearr_25655_25670 = state_25650__$1;(statearr_25655_25670[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25651 === 5))
{var state_25650__$1 = state_25650;if(cljs.core.truth_(close_QMARK_))
{var statearr_25656_25671 = state_25650__$1;(statearr_25656_25671[1] = 8);
} else
{var statearr_25657_25672 = state_25650__$1;(statearr_25657_25672[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25651 === 6))
{var inst_25633 = (state_25650[5]);var state_25650__$1 = state_25650;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25650__$1,11,to,inst_25633);
} else
{if((state_val_25651 === 7))
{var inst_25646 = (state_25650[2]);var state_25650__$1 = state_25650;var statearr_25658_25673 = state_25650__$1;(statearr_25658_25673[2] = inst_25646);
(statearr_25658_25673[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25651 === 8))
{var inst_25637 = cljs.core.async.close_BANG_.call(null,to);var state_25650__$1 = state_25650;var statearr_25659_25674 = state_25650__$1;(statearr_25659_25674[2] = inst_25637);
(statearr_25659_25674[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25651 === 9))
{var state_25650__$1 = state_25650;var statearr_25660_25675 = state_25650__$1;(statearr_25660_25675[2] = null);
(statearr_25660_25675[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25651 === 10))
{var inst_25640 = (state_25650[2]);var state_25650__$1 = state_25650;var statearr_25661_25676 = state_25650__$1;(statearr_25661_25676[2] = inst_25640);
(statearr_25661_25676[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25651 === 11))
{var inst_25643 = (state_25650[2]);var state_25650__$1 = (function (){var statearr_25662 = state_25650;(statearr_25662[6] = inst_25643);
return statearr_25662;
})();var statearr_25663_25677 = state_25650__$1;(statearr_25663_25677[2] = null);
(statearr_25663_25677[1] = 2);
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
});return ((function (switch__21132__auto__){
return (function() {
var state_machine__21133__auto__ = null;
var state_machine__21133__auto____0 = (function (){var statearr_25665 = (new Array(7));(statearr_25665[0] = state_machine__21133__auto__);
(statearr_25665[1] = 1);
return statearr_25665;
});
var state_machine__21133__auto____1 = (function (state_25650){while(true){
var result__21134__auto__ = switch__21132__auto__.call(null,state_25650);if(cljs.core.keyword_identical_QMARK_.call(null,result__21134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__21134__auto__;
}
break;
}
});
state_machine__21133__auto__ = function(state_25650){
switch(arguments.length){
case 0:
return state_machine__21133__auto____0.call(this);
case 1:
return state_machine__21133__auto____1.call(this,state_25650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__21133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__21133__auto____0;
state_machine__21133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__21133__auto____1;
return state_machine__21133__auto__;
})()
;})(switch__21132__auto__))
})();var state__21190__auto__ = (function (){var statearr_25666 = f__21189__auto__.call(null);(statearr_25666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21188__auto___25667);
return statearr_25666;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__21188__auto___25756 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__21189__auto__ = (function (){var switch__21132__auto__ = (function (state_25738){var state_val_25739 = (state_25738[1]);if((state_val_25739 === 1))
{var state_25738__$1 = state_25738;var statearr_25740_25757 = state_25738__$1;(statearr_25740_25757[2] = null);
(statearr_25740_25757[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25739 === 2))
{var state_25738__$1 = state_25738;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25738__$1,4,ch);
} else
{if((state_val_25739 === 3))
{var inst_25736 = (state_25738[2]);var state_25738__$1 = state_25738;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25738__$1,inst_25736);
} else
{if((state_val_25739 === 4))
{var inst_25719 = (state_25738[5]);var inst_25719__$1 = (state_25738[2]);var inst_25720 = (inst_25719__$1 == null);var state_25738__$1 = (function (){var statearr_25741 = state_25738;(statearr_25741[5] = inst_25719__$1);
return statearr_25741;
})();if(cljs.core.truth_(inst_25720))
{var statearr_25742_25758 = state_25738__$1;(statearr_25742_25758[1] = 5);
} else
{var statearr_25743_25759 = state_25738__$1;(statearr_25743_25759[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25739 === 5))
{var inst_25722 = cljs.core.async.close_BANG_.call(null,tc);var inst_25723 = cljs.core.async.close_BANG_.call(null,fc);var state_25738__$1 = (function (){var statearr_25744 = state_25738;(statearr_25744[6] = inst_25722);
return statearr_25744;
})();var statearr_25745_25760 = state_25738__$1;(statearr_25745_25760[2] = inst_25723);
(statearr_25745_25760[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25739 === 6))
{var inst_25719 = (state_25738[5]);var inst_25725 = p.call(null,inst_25719);var state_25738__$1 = state_25738;if(cljs.core.truth_(inst_25725))
{var statearr_25746_25761 = state_25738__$1;(statearr_25746_25761[1] = 9);
} else
{var statearr_25747_25762 = state_25738__$1;(statearr_25747_25762[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25739 === 7))
{var inst_25734 = (state_25738[2]);var state_25738__$1 = state_25738;var statearr_25748_25763 = state_25738__$1;(statearr_25748_25763[2] = inst_25734);
(statearr_25748_25763[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25739 === 8))
{var inst_25731 = (state_25738[2]);var state_25738__$1 = (function (){var statearr_25749 = state_25738;(statearr_25749[7] = inst_25731);
return statearr_25749;
})();var statearr_25750_25764 = state_25738__$1;(statearr_25750_25764[2] = null);
(statearr_25750_25764[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25739 === 9))
{var state_25738__$1 = state_25738;var statearr_25751_25765 = state_25738__$1;(statearr_25751_25765[2] = tc);
(statearr_25751_25765[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25739 === 10))
{var state_25738__$1 = state_25738;var statearr_25752_25766 = state_25738__$1;(statearr_25752_25766[2] = fc);
(statearr_25752_25766[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25739 === 11))
{var inst_25719 = (state_25738[5]);var inst_25729 = (state_25738[2]);var state_25738__$1 = state_25738;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25738__$1,8,inst_25729,inst_25719);
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
});return ((function (switch__21132__auto__){
return (function() {
var state_machine__21133__auto__ = null;
var state_machine__21133__auto____0 = (function (){var statearr_25754 = (new Array(8));(statearr_25754[0] = state_machine__21133__auto__);
(statearr_25754[1] = 1);
return statearr_25754;
});
var state_machine__21133__auto____1 = (function (state_25738){while(true){
var result__21134__auto__ = switch__21132__auto__.call(null,state_25738);if(cljs.core.keyword_identical_QMARK_.call(null,result__21134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__21134__auto__;
}
break;
}
});
state_machine__21133__auto__ = function(state_25738){
switch(arguments.length){
case 0:
return state_machine__21133__auto____0.call(this);
case 1:
return state_machine__21133__auto____1.call(this,state_25738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__21133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__21133__auto____0;
state_machine__21133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__21133__auto____1;
return state_machine__21133__auto__;
})()
;})(switch__21132__auto__))
})();var state__21190__auto__ = (function (){var statearr_25755 = f__21189__auto__.call(null);(statearr_25755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21188__auto___25756);
return statearr_25755;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__21188__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__21189__auto__ = (function (){var switch__21132__auto__ = (function (state_25809){var state_val_25810 = (state_25809[1]);if((state_val_25810 === 7))
{var inst_25805 = (state_25809[2]);var state_25809__$1 = state_25809;var statearr_25811_25823 = state_25809__$1;(statearr_25811_25823[2] = inst_25805);
(statearr_25811_25823[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25810 === 6))
{var inst_25795 = (state_25809[5]);var inst_25798 = (state_25809[6]);var inst_25802 = f.call(null,inst_25795,inst_25798);var inst_25795__$1 = inst_25802;var state_25809__$1 = (function (){var statearr_25812 = state_25809;(statearr_25812[5] = inst_25795__$1);
return statearr_25812;
})();var statearr_25813_25824 = state_25809__$1;(statearr_25813_25824[2] = null);
(statearr_25813_25824[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25810 === 5))
{var inst_25795 = (state_25809[5]);var state_25809__$1 = state_25809;var statearr_25814_25825 = state_25809__$1;(statearr_25814_25825[2] = inst_25795);
(statearr_25814_25825[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25810 === 4))
{var inst_25798 = (state_25809[6]);var inst_25798__$1 = (state_25809[2]);var inst_25799 = (inst_25798__$1 == null);var state_25809__$1 = (function (){var statearr_25815 = state_25809;(statearr_25815[6] = inst_25798__$1);
return statearr_25815;
})();if(cljs.core.truth_(inst_25799))
{var statearr_25816_25826 = state_25809__$1;(statearr_25816_25826[1] = 5);
} else
{var statearr_25817_25827 = state_25809__$1;(statearr_25817_25827[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25810 === 3))
{var inst_25807 = (state_25809[2]);var state_25809__$1 = state_25809;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25809__$1,inst_25807);
} else
{if((state_val_25810 === 2))
{var state_25809__$1 = state_25809;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25809__$1,4,ch);
} else
{if((state_val_25810 === 1))
{var inst_25795 = init;var state_25809__$1 = (function (){var statearr_25818 = state_25809;(statearr_25818[5] = inst_25795);
return statearr_25818;
})();var statearr_25819_25828 = state_25809__$1;(statearr_25819_25828[2] = null);
(statearr_25819_25828[1] = 2);
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
});return ((function (switch__21132__auto__){
return (function() {
var state_machine__21133__auto__ = null;
var state_machine__21133__auto____0 = (function (){var statearr_25821 = (new Array(7));(statearr_25821[0] = state_machine__21133__auto__);
(statearr_25821[1] = 1);
return statearr_25821;
});
var state_machine__21133__auto____1 = (function (state_25809){while(true){
var result__21134__auto__ = switch__21132__auto__.call(null,state_25809);if(cljs.core.keyword_identical_QMARK_.call(null,result__21134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__21134__auto__;
}
break;
}
});
state_machine__21133__auto__ = function(state_25809){
switch(arguments.length){
case 0:
return state_machine__21133__auto____0.call(this);
case 1:
return state_machine__21133__auto____1.call(this,state_25809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__21133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__21133__auto____0;
state_machine__21133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__21133__auto____1;
return state_machine__21133__auto__;
})()
;})(switch__21132__auto__))
})();var state__21190__auto__ = (function (){var statearr_25822 = f__21189__auto__.call(null);(statearr_25822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21188__auto__);
return statearr_25822;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
}));
return c__21188__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__21188__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__21189__auto__ = (function (){var switch__21132__auto__ = (function (state_25886){var state_val_25887 = (state_25886[1]);if((state_val_25887 === 1))
{var inst_25866 = cljs.core.seq.call(null,coll);var inst_25867 = inst_25866;var state_25886__$1 = (function (){var statearr_25888 = state_25886;(statearr_25888[5] = inst_25867);
return statearr_25888;
})();var statearr_25889_25903 = state_25886__$1;(statearr_25889_25903[2] = null);
(statearr_25889_25903[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25887 === 2))
{var inst_25867 = (state_25886[5]);var state_25886__$1 = state_25886;if(cljs.core.truth_(inst_25867))
{var statearr_25890_25904 = state_25886__$1;(statearr_25890_25904[1] = 4);
} else
{var statearr_25891_25905 = state_25886__$1;(statearr_25891_25905[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25887 === 3))
{var inst_25884 = (state_25886[2]);var state_25886__$1 = state_25886;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25886__$1,inst_25884);
} else
{if((state_val_25887 === 4))
{var inst_25867 = (state_25886[5]);var inst_25870 = cljs.core.first.call(null,inst_25867);var state_25886__$1 = state_25886;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25886__$1,7,ch,inst_25870);
} else
{if((state_val_25887 === 5))
{var state_25886__$1 = state_25886;if(cljs.core.truth_(close_QMARK_))
{var statearr_25892_25906 = state_25886__$1;(statearr_25892_25906[1] = 8);
} else
{var statearr_25893_25907 = state_25886__$1;(statearr_25893_25907[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25887 === 6))
{var inst_25882 = (state_25886[2]);var state_25886__$1 = state_25886;var statearr_25894_25908 = state_25886__$1;(statearr_25894_25908[2] = inst_25882);
(statearr_25894_25908[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25887 === 7))
{var inst_25867 = (state_25886[5]);var inst_25872 = (state_25886[2]);var inst_25873 = cljs.core.next.call(null,inst_25867);var inst_25867__$1 = inst_25873;var state_25886__$1 = (function (){var statearr_25895 = state_25886;(statearr_25895[6] = inst_25872);
(statearr_25895[5] = inst_25867__$1);
return statearr_25895;
})();var statearr_25896_25909 = state_25886__$1;(statearr_25896_25909[2] = null);
(statearr_25896_25909[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25887 === 8))
{var inst_25877 = cljs.core.async.close_BANG_.call(null,ch);var state_25886__$1 = state_25886;var statearr_25897_25910 = state_25886__$1;(statearr_25897_25910[2] = inst_25877);
(statearr_25897_25910[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25887 === 9))
{var state_25886__$1 = state_25886;var statearr_25898_25911 = state_25886__$1;(statearr_25898_25911[2] = null);
(statearr_25898_25911[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25887 === 10))
{var inst_25880 = (state_25886[2]);var state_25886__$1 = state_25886;var statearr_25899_25912 = state_25886__$1;(statearr_25899_25912[2] = inst_25880);
(statearr_25899_25912[1] = 6);
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
});return ((function (switch__21132__auto__){
return (function() {
var state_machine__21133__auto__ = null;
var state_machine__21133__auto____0 = (function (){var statearr_25901 = (new Array(7));(statearr_25901[0] = state_machine__21133__auto__);
(statearr_25901[1] = 1);
return statearr_25901;
});
var state_machine__21133__auto____1 = (function (state_25886){while(true){
var result__21134__auto__ = switch__21132__auto__.call(null,state_25886);if(cljs.core.keyword_identical_QMARK_.call(null,result__21134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__21134__auto__;
}
break;
}
});
state_machine__21133__auto__ = function(state_25886){
switch(arguments.length){
case 0:
return state_machine__21133__auto____0.call(this);
case 1:
return state_machine__21133__auto____1.call(this,state_25886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__21133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__21133__auto____0;
state_machine__21133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__21133__auto____1;
return state_machine__21133__auto__;
})()
;})(switch__21132__auto__))
})();var state__21190__auto__ = (function (){var statearr_25902 = f__21189__auto__.call(null);(statearr_25902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21188__auto__);
return statearr_25902;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
}));
return c__21188__auto__;
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
{var x__19723__auto__ = (((_ == null))?null:_);return (function (){var or__3943__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19723__auto__)]);if(or__3943__auto__)
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
{var x__19723__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19723__auto__)]);if(or__3943__auto__)
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
{var x__19723__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19723__auto__)]);if(or__3943__auto__)
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
{var x__19723__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19723__auto__)]);if(or__3943__auto__)
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t26125 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t26125');

/**
* @constructor
*/
cljs.core.async.t26125 = (function (cs,ch,mult,meta26126){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta26126 = meta26126;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26125.cljs$lang$type = true;
cljs.core.async.t26125.cljs$lang$ctorStr = "cljs.core.async/t26125";
cljs.core.async.t26125.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19654__auto__,writer__19655__auto__,opt__19656__auto__){return cljs.core._write.call(null,writer__19655__auto__,"cljs.core.async/t26125");
});})(cs))
;
cljs.core.async.t26125.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t26125.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t26125.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t26125.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t26125.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26125.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
return self__.ch;
});})(cs))
;
cljs.core.async.t26125.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26127){var self__ = this;
return self__.meta26126;
});})(cs))
;
cljs.core.async.t26125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26127,meta26126__$1){var self__ = this;
return (new cljs.core.async.t26125(self__.cs,self__.ch,self__.mult,meta26126__$1));
});})(cs))
;
cljs.core.async.__GT_t26125 = ((function (cs){
return (function __GT_t26125(cs__$1,ch__$1,mult__$1,meta26126){return (new cljs.core.async.t26125(cs__$1,ch__$1,mult__$1,meta26126));
});})(cs))
;
}
return (new cljs.core.async.t26125(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__21188__auto___26337 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__21189__auto__ = (function (){var switch__21132__auto__ = (function (state_26255){var state_val_26256 = (state_26255[1]);if((state_val_26256 === 32))
{try{var inst_26206 = (state_26255[5]);var inst_26130 = (state_26255[6]);var inst_26212 = cljs.core.async.put_BANG_.call(null,inst_26206,inst_26130,done);var state_26255__$1 = state_26255;var statearr_26259_26338 = state_26255__$1;(statearr_26259_26338[2] = inst_26212);
(statearr_26259_26338[1] = 30);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e26257){if((e26257 instanceof Object))
{var ex__21126__auto__ = e26257;var statearr_26258_26339 = state_26255;(statearr_26258_26339[1] = 31);
(statearr_26258_26339[2] = ex__21126__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26257;
} else
{return null;
}
}
}} else
{if((state_val_26256 === 1))
{var state_26255__$1 = state_26255;var statearr_26260_26340 = state_26255__$1;(statearr_26260_26340[2] = null);
(statearr_26260_26340[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26256 === 33))
{var inst_26218 = (state_26255[7]);var inst_26220 = cljs.core.chunked_seq_QMARK_.call(null,inst_26218);var state_26255__$1 = state_26255;if(inst_26220)
{var statearr_26261_26341 = state_26255__$1;(statearr_26261_26341[1] = 36);
} else
{var statearr_26262_26342 = state_26255__$1;(statearr_26262_26342[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26256 === 2))
{var state_26255__$1 = state_26255;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26255__$1,4,ch);
} else
{if((state_val_26256 === 34))
{var state_26255__$1 = state_26255;var statearr_26263_26343 = state_26255__$1;(statearr_26263_26343[2] = null);
(statearr_26263_26343[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26256 === 3))
{var inst_26253 = (state_26255[2]);var state_26255__$1 = state_26255;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26255__$1,inst_26253);
} else
{if((state_val_26256 === 35))
{var inst_26242 = (state_26255[2]);var state_26255__$1 = state_26255;var statearr_26264_26344 = state_26255__$1;(statearr_26264_26344[2] = inst_26242);
(statearr_26264_26344[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26256 === 4))
{var inst_26130 = (state_26255[6]);var inst_26130__$1 = (state_26255[2]);var inst_26131 = (inst_26130__$1 == null);var state_26255__$1 = (function (){var statearr_26265 = state_26255;(statearr_26265[6] = inst_26130__$1);
return statearr_26265;
})();if(cljs.core.truth_(inst_26131))
{var statearr_26266_26345 = state_26255__$1;(statearr_26266_26345[1] = 5);
} else
{var statearr_26267_26346 = state_26255__$1;(statearr_26267_26346[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26256 === 36))
{var inst_26218 = (state_26255[7]);var inst_26222 = cljs.core.chunk_first.call(null,inst_26218);var inst_26223 = cljs.core.chunk_rest.call(null,inst_26218);var inst_26224 = cljs.core.count.call(null,inst_26222);var inst_26198 = inst_26223;var inst_26199 = inst_26222;var inst_26200 = inst_26224;var inst_26201 = 0;var state_26255__$1 = (function (){var statearr_26268 = state_26255;(statearr_26268[8] = inst_26199);
(statearr_26268[9] = inst_26198);
(statearr_26268[10] = inst_26201);
(statearr_26268[11] = inst_26200);
return statearr_26268;
})();var statearr_26269_26347 = state_26255__$1;(statearr_26269_26347[2] = null);
(statearr_26269_26347[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26256 === 5))
{var inst_26137 = cljs.core.deref.call(null,cs);var inst_26138 = cljs.core.seq.call(null,inst_26137);var inst_26139 = inst_26138;var inst_26140 = null;var inst_26141 = 0;var inst_26142 = 0;var state_26255__$1 = (function (){var statearr_26270 = state_26255;(statearr_26270[12] = inst_26141);
(statearr_26270[13] = inst_26140);
(statearr_26270[14] = inst_26142);
(statearr_26270[15] = inst_26139);
return statearr_26270;
})();var statearr_26271_26348 = state_26255__$1;(statearr_26271_26348[2] = null);
(statearr_26271_26348[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26256 === 37))
{var inst_26218 = (state_26255[7]);var inst_26227 = cljs.core.first.call(null,inst_26218);var state_26255__$1 = (function (){var statearr_26272 = state_26255;(statearr_26272[16] = inst_26227);
return statearr_26272;
})();var statearr_26273_26349 = state_26255__$1;(statearr_26273_26349[2] = null);
(statearr_26273_26349[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26256 === 6))
{var inst_26189 = cljs.core.deref.call(null,cs);var inst_26190 = cljs.core.keys.call(null,inst_26189);var inst_26191 = cljs.core.count.call(null,inst_26190);var inst_26192 = cljs.core.reset_BANG_.call(null,dctr,inst_26191);var inst_26197 = cljs.core.seq.call(null,inst_26190);var inst_26198 = inst_26197;var inst_26199 = null;var inst_26200 = 0;var inst_26201 = 0;var state_26255__$1 = (function (){var statearr_26274 = state_26255;(statearr_26274[8] = inst_26199);
(statearr_26274[9] = inst_26198);
(statearr_26274[10] = inst_26201);
(statearr_26274[17] = inst_26192);
(statearr_26274[11] = inst_26200);
return statearr_26274;
})();var statearr_26275_26350 = state_26255__$1;(statearr_26275_26350[2] = null);
(statearr_26275_26350[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26256 === 38))
{var inst_26239 = (state_26255[2]);var state_26255__$1 = state_26255;var statearr_26276_26351 = state_26255__$1;(statearr_26276_26351[2] = inst_26239);
(statearr_26276_26351[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26256 === 7))
{var inst_26251 = (state_26255[2]);var state_26255__$1 = state_26255;var statearr_26277_26352 = state_26255__$1;(statearr_26277_26352[2] = inst_26251);
(statearr_26277_26352[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26256 === 39))
{var inst_26218 = (state_26255[7]);var inst_26235 = (state_26255[2]);var inst_26236 = cljs.core.next.call(null,inst_26218);var inst_26198 = inst_26236;var inst_26199 = null;var inst_26200 = 0;var inst_26201 = 0;var state_26255__$1 = (function (){var statearr_26278 = state_26255;(statearr_26278[18] = inst_26235);
(statearr_26278[8] = inst_26199);
(statearr_26278[9] = inst_26198);
(statearr_26278[10] = inst_26201);
(statearr_26278[11] = inst_26200);
return statearr_26278;
})();var statearr_26279_26353 = state_26255__$1;(statearr_26279_26353[2] = null);
(statearr_26279_26353[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26256 === 8))
{var inst_26141 = (state_26255[12]);var inst_26142 = (state_26255[14]);var inst_26144 = (inst_26142 < inst_26141);var inst_26145 = inst_26144;var state_26255__$1 = state_26255;if(cljs.core.truth_(inst_26145))
{var statearr_26280_26354 = state_26255__$1;(statearr_26280_26354[1] = 10);
} else
{var statearr_26281_26355 = state_26255__$1;(statearr_26281_26355[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26256 === 40))
{var inst_26227 = (state_26255[16]);var inst_26228 = (state_26255[2]);var inst_26229 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_26230 = cljs.core.async.untap_STAR_.call(null,m,inst_26227);var state_26255__$1 = (function (){var statearr_26282 = state_26255;(statearr_26282[19] = inst_26229);
(statearr_26282[20] = inst_26228);
return statearr_26282;
})();var statearr_26283_26356 = state_26255__$1;(statearr_26283_26356[2] = inst_26230);
(statearr_26283_26356[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26256 === 9))
{var inst_26187 = (state_26255[2]);var state_26255__$1 = state_26255;var statearr_26284_26357 = state_26255__$1;(statearr_26284_26357[2] = inst_26187);
(statearr_26284_26357[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26256 === 41))
{try{var inst_26227 = (state_26255[16]);var inst_26130 = (state_26255[6]);var inst_26233 = cljs.core.async.put_BANG_.call(null,inst_26227,inst_26130,done);var state_26255__$1 = state_26255;var statearr_26287_26358 = state_26255__$1;(statearr_26287_26358[2] = inst_26233);
(statearr_26287_26358[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e26285){if((e26285 instanceof Object))
{var ex__21126__auto__ = e26285;var statearr_26286_26359 = state_26255;(statearr_26286_26359[1] = 40);
(statearr_26286_26359[2] = ex__21126__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26285;
} else
{return null;
}
}
}} else
{if((state_val_26256 === 10))
{var inst_26140 = (state_26255[13]);var inst_26142 = (state_26255[14]);var inst_26148 = cljs.core._nth.call(null,inst_26140,inst_26142);var inst_26149 = cljs.core.nth.call(null,inst_26148,0,null);var inst_26150 = cljs.core.nth.call(null,inst_26148,1,null);var state_26255__$1 = (function (){var statearr_26288 = state_26255;(statearr_26288[21] = inst_26149);
return statearr_26288;
})();if(cljs.core.truth_(inst_26150))
{var statearr_26289_26360 = state_26255__$1;(statearr_26289_26360[1] = 13);
} else
{var statearr_26290_26361 = state_26255__$1;(statearr_26290_26361[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26256 === 42))
{var inst_26248 = (state_26255[2]);var state_26255__$1 = (function (){var statearr_26291 = state_26255;(statearr_26291[22] = inst_26248);
return statearr_26291;
})();var statearr_26292_26362 = state_26255__$1;(statearr_26292_26362[2] = null);
(statearr_26292_26362[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26256 === 11))
{var inst_26159 = (state_26255[23]);var inst_26139 = (state_26255[15]);var inst_26159__$1 = cljs.core.seq.call(null,inst_26139);var state_26255__$1 = (function (){var statearr_26293 = state_26255;(statearr_26293[23] = inst_26159__$1);
return statearr_26293;
})();if(inst_26159__$1)
{var statearr_26294_26363 = state_26255__$1;(statearr_26294_26363[1] = 16);
} else
{var statearr_26295_26364 = state_26255__$1;(statearr_26295_26364[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26256 === 12))
{var inst_26185 = (state_26255[2]);var state_26255__$1 = state_26255;var statearr_26296_26365 = state_26255__$1;(statearr_26296_26365[2] = inst_26185);
(statearr_26296_26365[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26256 === 13))
{var inst_26149 = (state_26255[21]);var inst_26152 = cljs.core.async.close_BANG_.call(null,inst_26149);var state_26255__$1 = state_26255;var statearr_26300_26366 = state_26255__$1;(statearr_26300_26366[2] = inst_26152);
(statearr_26300_26366[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26256 === 14))
{var state_26255__$1 = state_26255;var statearr_26301_26367 = state_26255__$1;(statearr_26301_26367[2] = null);
(statearr_26301_26367[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26256 === 15))
{var inst_26141 = (state_26255[12]);var inst_26140 = (state_26255[13]);var inst_26142 = (state_26255[14]);var inst_26139 = (state_26255[15]);var inst_26155 = (state_26255[2]);var inst_26156 = (inst_26142 + 1);var tmp26297 = inst_26141;var tmp26298 = inst_26140;var tmp26299 = inst_26139;var inst_26139__$1 = tmp26299;var inst_26140__$1 = tmp26298;var inst_26141__$1 = tmp26297;var inst_26142__$1 = inst_26156;var state_26255__$1 = (function (){var statearr_26302 = state_26255;(statearr_26302[12] = inst_26141__$1);
(statearr_26302[13] = inst_26140__$1);
(statearr_26302[14] = inst_26142__$1);
(statearr_26302[24] = inst_26155);
(statearr_26302[15] = inst_26139__$1);
return statearr_26302;
})();var statearr_26303_26368 = state_26255__$1;(statearr_26303_26368[2] = null);
(statearr_26303_26368[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26256 === 16))
{var inst_26159 = (state_26255[23]);var inst_26161 = cljs.core.chunked_seq_QMARK_.call(null,inst_26159);var state_26255__$1 = state_26255;if(inst_26161)
{var statearr_26304_26369 = state_26255__$1;(statearr_26304_26369[1] = 19);
} else
{var statearr_26305_26370 = state_26255__$1;(statearr_26305_26370[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26256 === 17))
{var state_26255__$1 = state_26255;var statearr_26306_26371 = state_26255__$1;(statearr_26306_26371[2] = null);
(statearr_26306_26371[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26256 === 18))
{var inst_26183 = (state_26255[2]);var state_26255__$1 = state_26255;var statearr_26307_26372 = state_26255__$1;(statearr_26307_26372[2] = inst_26183);
(statearr_26307_26372[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26256 === 19))
{var inst_26159 = (state_26255[23]);var inst_26163 = cljs.core.chunk_first.call(null,inst_26159);var inst_26164 = cljs.core.chunk_rest.call(null,inst_26159);var inst_26165 = cljs.core.count.call(null,inst_26163);var inst_26139 = inst_26164;var inst_26140 = inst_26163;var inst_26141 = inst_26165;var inst_26142 = 0;var state_26255__$1 = (function (){var statearr_26308 = state_26255;(statearr_26308[12] = inst_26141);
(statearr_26308[13] = inst_26140);
(statearr_26308[14] = inst_26142);
(statearr_26308[15] = inst_26139);
return statearr_26308;
})();var statearr_26309_26373 = state_26255__$1;(statearr_26309_26373[2] = null);
(statearr_26309_26373[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26256 === 20))
{var inst_26159 = (state_26255[23]);var inst_26169 = cljs.core.first.call(null,inst_26159);var inst_26170 = cljs.core.nth.call(null,inst_26169,0,null);var inst_26171 = cljs.core.nth.call(null,inst_26169,1,null);var state_26255__$1 = (function (){var statearr_26310 = state_26255;(statearr_26310[25] = inst_26170);
return statearr_26310;
})();if(cljs.core.truth_(inst_26171))
{var statearr_26311_26374 = state_26255__$1;(statearr_26311_26374[1] = 22);
} else
{var statearr_26312_26375 = state_26255__$1;(statearr_26312_26375[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26256 === 21))
{var inst_26180 = (state_26255[2]);var state_26255__$1 = state_26255;var statearr_26313_26376 = state_26255__$1;(statearr_26313_26376[2] = inst_26180);
(statearr_26313_26376[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26256 === 22))
{var inst_26170 = (state_26255[25]);var inst_26173 = cljs.core.async.close_BANG_.call(null,inst_26170);var state_26255__$1 = state_26255;var statearr_26314_26377 = state_26255__$1;(statearr_26314_26377[2] = inst_26173);
(statearr_26314_26377[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26256 === 23))
{var state_26255__$1 = state_26255;var statearr_26315_26378 = state_26255__$1;(statearr_26315_26378[2] = null);
(statearr_26315_26378[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26256 === 24))
{var inst_26159 = (state_26255[23]);var inst_26176 = (state_26255[2]);var inst_26177 = cljs.core.next.call(null,inst_26159);var inst_26139 = inst_26177;var inst_26140 = null;var inst_26141 = 0;var inst_26142 = 0;var state_26255__$1 = (function (){var statearr_26316 = state_26255;(statearr_26316[12] = inst_26141);
(statearr_26316[13] = inst_26140);
(statearr_26316[14] = inst_26142);
(statearr_26316[15] = inst_26139);
(statearr_26316[26] = inst_26176);
return statearr_26316;
})();var statearr_26317_26379 = state_26255__$1;(statearr_26317_26379[2] = null);
(statearr_26317_26379[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26256 === 25))
{var inst_26201 = (state_26255[10]);var inst_26200 = (state_26255[11]);var inst_26203 = (inst_26201 < inst_26200);var inst_26204 = inst_26203;var state_26255__$1 = state_26255;if(cljs.core.truth_(inst_26204))
{var statearr_26318_26380 = state_26255__$1;(statearr_26318_26380[1] = 27);
} else
{var statearr_26319_26381 = state_26255__$1;(statearr_26319_26381[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26256 === 26))
{var inst_26246 = (state_26255[2]);var state_26255__$1 = (function (){var statearr_26320 = state_26255;(statearr_26320[27] = inst_26246);
return statearr_26320;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26255__$1,42,dchan);
} else
{if((state_val_26256 === 27))
{var inst_26199 = (state_26255[8]);var inst_26201 = (state_26255[10]);var inst_26206 = cljs.core._nth.call(null,inst_26199,inst_26201);var state_26255__$1 = (function (){var statearr_26321 = state_26255;(statearr_26321[5] = inst_26206);
return statearr_26321;
})();var statearr_26322_26382 = state_26255__$1;(statearr_26322_26382[2] = null);
(statearr_26322_26382[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26256 === 28))
{var inst_26218 = (state_26255[7]);var inst_26198 = (state_26255[9]);var inst_26218__$1 = cljs.core.seq.call(null,inst_26198);var state_26255__$1 = (function (){var statearr_26326 = state_26255;(statearr_26326[7] = inst_26218__$1);
return statearr_26326;
})();if(inst_26218__$1)
{var statearr_26327_26383 = state_26255__$1;(statearr_26327_26383[1] = 33);
} else
{var statearr_26328_26384 = state_26255__$1;(statearr_26328_26384[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26256 === 29))
{var inst_26244 = (state_26255[2]);var state_26255__$1 = state_26255;var statearr_26329_26385 = state_26255__$1;(statearr_26329_26385[2] = inst_26244);
(statearr_26329_26385[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26256 === 30))
{var inst_26199 = (state_26255[8]);var inst_26198 = (state_26255[9]);var inst_26201 = (state_26255[10]);var inst_26200 = (state_26255[11]);var inst_26214 = (state_26255[2]);var inst_26215 = (inst_26201 + 1);var tmp26323 = inst_26199;var tmp26324 = inst_26198;var tmp26325 = inst_26200;var inst_26198__$1 = tmp26324;var inst_26199__$1 = tmp26323;var inst_26200__$1 = tmp26325;var inst_26201__$1 = inst_26215;var state_26255__$1 = (function (){var statearr_26330 = state_26255;(statearr_26330[8] = inst_26199__$1);
(statearr_26330[9] = inst_26198__$1);
(statearr_26330[10] = inst_26201__$1);
(statearr_26330[11] = inst_26200__$1);
(statearr_26330[28] = inst_26214);
return statearr_26330;
})();var statearr_26331_26386 = state_26255__$1;(statearr_26331_26386[2] = null);
(statearr_26331_26386[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26256 === 31))
{var inst_26206 = (state_26255[5]);var inst_26207 = (state_26255[2]);var inst_26208 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_26209 = cljs.core.async.untap_STAR_.call(null,m,inst_26206);var state_26255__$1 = (function (){var statearr_26332 = state_26255;(statearr_26332[29] = inst_26207);
(statearr_26332[30] = inst_26208);
return statearr_26332;
})();var statearr_26333_26387 = state_26255__$1;(statearr_26333_26387[2] = inst_26209);
(statearr_26333_26387[1] = 30);
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
});return ((function (switch__21132__auto__){
return (function() {
var state_machine__21133__auto__ = null;
var state_machine__21133__auto____0 = (function (){var statearr_26335 = (new Array(31));(statearr_26335[0] = state_machine__21133__auto__);
(statearr_26335[1] = 1);
return statearr_26335;
});
var state_machine__21133__auto____1 = (function (state_26255){while(true){
var result__21134__auto__ = switch__21132__auto__.call(null,state_26255);if(cljs.core.keyword_identical_QMARK_.call(null,result__21134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__21134__auto__;
}
break;
}
});
state_machine__21133__auto__ = function(state_26255){
switch(arguments.length){
case 0:
return state_machine__21133__auto____0.call(this);
case 1:
return state_machine__21133__auto____1.call(this,state_26255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__21133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__21133__auto____0;
state_machine__21133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__21133__auto____1;
return state_machine__21133__auto__;
})()
;})(switch__21132__auto__))
})();var state__21190__auto__ = (function (){var statearr_26336 = f__21189__auto__.call(null);(statearr_26336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21188__auto___26337);
return statearr_26336;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
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
{var x__19723__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19723__auto__)]);if(or__3943__auto__)
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
{var x__19723__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19723__auto__)]);if(or__3943__auto__)
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
{var x__19723__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19723__auto__)]);if(or__3943__auto__)
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
{var x__19723__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19723__auto__)]);if(or__3943__auto__)
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
{var x__19723__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19723__auto__)]);if(or__3943__auto__)
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
;var m = (function (){if(typeof cljs.core.async.t26508 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t26508');

/**
* @constructor
*/
cljs.core.async.t26508 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta26509){
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
this.meta26509 = meta26509;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26508.cljs$lang$type = true;
cljs.core.async.t26508.cljs$lang$ctorStr = "cljs.core.async/t26508";
cljs.core.async.t26508.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19654__auto__,writer__19655__auto__,opt__19656__auto__){return cljs.core._write.call(null,writer__19655__auto__,"cljs.core.async/t26508");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26508.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t26508.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26508.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26508.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26508.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26508.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26508.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26508.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26508.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26510){var self__ = this;
return self__.meta26509;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26510,meta26509__$1){var self__ = this;
return (new cljs.core.async.t26508(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta26509__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t26508 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t26508(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta26509){return (new cljs.core.async.t26508(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta26509));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t26508(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__21188__auto___26628 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__21189__auto__ = (function (){var switch__21132__auto__ = (function (state_26581){var state_val_26582 = (state_26581[1]);if((state_val_26582 === 1))
{var inst_26514 = (state_26581[5]);var inst_26514__$1 = calc_state.call(null);var inst_26515 = cljs.core.seq_QMARK_.call(null,inst_26514__$1);var state_26581__$1 = (function (){var statearr_26583 = state_26581;(statearr_26583[5] = inst_26514__$1);
return statearr_26583;
})();if(inst_26515)
{var statearr_26584_26629 = state_26581__$1;(statearr_26584_26629[1] = 2);
} else
{var statearr_26585_26630 = state_26581__$1;(statearr_26585_26630[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26582 === 2))
{var inst_26514 = (state_26581[5]);var inst_26517 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26514);var state_26581__$1 = state_26581;var statearr_26586_26631 = state_26581__$1;(statearr_26586_26631[2] = inst_26517);
(statearr_26586_26631[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26582 === 3))
{var inst_26514 = (state_26581[5]);var state_26581__$1 = state_26581;var statearr_26587_26632 = state_26581__$1;(statearr_26587_26632[2] = inst_26514);
(statearr_26587_26632[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26582 === 4))
{var inst_26514 = (state_26581[5]);var inst_26520 = (state_26581[2]);var inst_26521 = cljs.core.get.call(null,inst_26520,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_26522 = cljs.core.get.call(null,inst_26520,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_26523 = cljs.core.get.call(null,inst_26520,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_26524 = inst_26514;var state_26581__$1 = (function (){var statearr_26588 = state_26581;(statearr_26588[6] = inst_26521);
(statearr_26588[7] = inst_26524);
(statearr_26588[8] = inst_26523);
(statearr_26588[9] = inst_26522);
return statearr_26588;
})();var statearr_26589_26633 = state_26581__$1;(statearr_26589_26633[2] = null);
(statearr_26589_26633[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26582 === 5))
{var inst_26524 = (state_26581[7]);var inst_26527 = cljs.core.seq_QMARK_.call(null,inst_26524);var state_26581__$1 = state_26581;if(inst_26527)
{var statearr_26590_26634 = state_26581__$1;(statearr_26590_26634[1] = 7);
} else
{var statearr_26591_26635 = state_26581__$1;(statearr_26591_26635[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26582 === 6))
{var inst_26579 = (state_26581[2]);var state_26581__$1 = state_26581;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26581__$1,inst_26579);
} else
{if((state_val_26582 === 7))
{var inst_26524 = (state_26581[7]);var inst_26529 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26524);var state_26581__$1 = state_26581;var statearr_26592_26636 = state_26581__$1;(statearr_26592_26636[2] = inst_26529);
(statearr_26592_26636[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26582 === 8))
{var inst_26524 = (state_26581[7]);var state_26581__$1 = state_26581;var statearr_26593_26637 = state_26581__$1;(statearr_26593_26637[2] = inst_26524);
(statearr_26593_26637[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26582 === 9))
{var inst_26532 = (state_26581[10]);var inst_26532__$1 = (state_26581[2]);var inst_26533 = cljs.core.get.call(null,inst_26532__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_26534 = cljs.core.get.call(null,inst_26532__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_26535 = cljs.core.get.call(null,inst_26532__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_26581__$1 = (function (){var statearr_26594 = state_26581;(statearr_26594[11] = inst_26535);
(statearr_26594[12] = inst_26534);
(statearr_26594[10] = inst_26532__$1);
return statearr_26594;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_26581__$1,10,inst_26533);
} else
{if((state_val_26582 === 10))
{var inst_26541 = (state_26581[13]);var inst_26539 = (state_26581[14]);var inst_26538 = (state_26581[2]);var inst_26539__$1 = cljs.core.nth.call(null,inst_26538,0,null);var inst_26540 = cljs.core.nth.call(null,inst_26538,1,null);var inst_26541__$1 = (inst_26539__$1 == null);var state_26581__$1 = (function (){var statearr_26595 = state_26581;(statearr_26595[15] = inst_26540);
(statearr_26595[13] = inst_26541__$1);
(statearr_26595[14] = inst_26539__$1);
return statearr_26595;
})();if(cljs.core.truth_(inst_26541__$1))
{var statearr_26596_26638 = state_26581__$1;(statearr_26596_26638[1] = 11);
} else
{var statearr_26597_26639 = state_26581__$1;(statearr_26597_26639[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26582 === 11))
{var inst_26541 = (state_26581[13]);var state_26581__$1 = state_26581;var statearr_26598_26640 = state_26581__$1;(statearr_26598_26640[2] = inst_26541);
(statearr_26598_26640[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26582 === 12))
{var inst_26540 = (state_26581[15]);var inst_26544 = cljs.core._EQ_.call(null,inst_26540,change);var state_26581__$1 = state_26581;var statearr_26599_26641 = state_26581__$1;(statearr_26599_26641[2] = inst_26544);
(statearr_26599_26641[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26582 === 13))
{var inst_26546 = (state_26581[2]);var state_26581__$1 = state_26581;if(cljs.core.truth_(inst_26546))
{var statearr_26600_26642 = state_26581__$1;(statearr_26600_26642[1] = 14);
} else
{var statearr_26601_26643 = state_26581__$1;(statearr_26601_26643[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26582 === 14))
{var inst_26539 = (state_26581[14]);var inst_26548 = (inst_26539 == null);var state_26581__$1 = state_26581;if(cljs.core.truth_(inst_26548))
{var statearr_26602_26644 = state_26581__$1;(statearr_26602_26644[1] = 17);
} else
{var statearr_26603_26645 = state_26581__$1;(statearr_26603_26645[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26582 === 15))
{var inst_26540 = (state_26581[15]);var inst_26557 = (state_26581[16]);var inst_26535 = (state_26581[11]);var inst_26557__$1 = inst_26535.call(null,inst_26540);var state_26581__$1 = (function (){var statearr_26604 = state_26581;(statearr_26604[16] = inst_26557__$1);
return statearr_26604;
})();if(cljs.core.truth_(inst_26557__$1))
{var statearr_26605_26646 = state_26581__$1;(statearr_26605_26646[1] = 20);
} else
{var statearr_26606_26647 = state_26581__$1;(statearr_26606_26647[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26582 === 16))
{var inst_26577 = (state_26581[2]);var state_26581__$1 = state_26581;var statearr_26607_26648 = state_26581__$1;(statearr_26607_26648[2] = inst_26577);
(statearr_26607_26648[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26582 === 17))
{var inst_26540 = (state_26581[15]);var inst_26550 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26540);var state_26581__$1 = state_26581;var statearr_26608_26649 = state_26581__$1;(statearr_26608_26649[2] = inst_26550);
(statearr_26608_26649[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26582 === 18))
{var state_26581__$1 = state_26581;var statearr_26609_26650 = state_26581__$1;(statearr_26609_26650[2] = null);
(statearr_26609_26650[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26582 === 19))
{var inst_26553 = (state_26581[2]);var inst_26554 = calc_state.call(null);var inst_26524 = inst_26554;var state_26581__$1 = (function (){var statearr_26610 = state_26581;(statearr_26610[17] = inst_26553);
(statearr_26610[7] = inst_26524);
return statearr_26610;
})();var statearr_26611_26651 = state_26581__$1;(statearr_26611_26651[2] = null);
(statearr_26611_26651[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26582 === 20))
{var inst_26557 = (state_26581[16]);var state_26581__$1 = state_26581;var statearr_26612_26652 = state_26581__$1;(statearr_26612_26652[2] = inst_26557);
(statearr_26612_26652[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26582 === 21))
{var inst_26535 = (state_26581[11]);var inst_26560 = (state_26581[18]);var inst_26560__$1 = cljs.core.empty_QMARK_.call(null,inst_26535);var state_26581__$1 = (function (){var statearr_26613 = state_26581;(statearr_26613[18] = inst_26560__$1);
return statearr_26613;
})();if(inst_26560__$1)
{var statearr_26614_26653 = state_26581__$1;(statearr_26614_26653[1] = 23);
} else
{var statearr_26615_26654 = state_26581__$1;(statearr_26615_26654[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26582 === 22))
{var inst_26568 = (state_26581[2]);var state_26581__$1 = state_26581;if(cljs.core.truth_(inst_26568))
{var statearr_26616_26655 = state_26581__$1;(statearr_26616_26655[1] = 26);
} else
{var statearr_26617_26656 = state_26581__$1;(statearr_26617_26656[1] = 27);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26582 === 23))
{var inst_26540 = (state_26581[15]);var inst_26534 = (state_26581[12]);var inst_26562 = inst_26534.call(null,inst_26540);var inst_26563 = cljs.core.not.call(null,inst_26562);var state_26581__$1 = state_26581;var statearr_26618_26657 = state_26581__$1;(statearr_26618_26657[2] = inst_26563);
(statearr_26618_26657[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26582 === 24))
{var inst_26560 = (state_26581[18]);var state_26581__$1 = state_26581;var statearr_26619_26658 = state_26581__$1;(statearr_26619_26658[2] = inst_26560);
(statearr_26619_26658[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26582 === 25))
{var inst_26566 = (state_26581[2]);var state_26581__$1 = state_26581;var statearr_26620_26659 = state_26581__$1;(statearr_26620_26659[2] = inst_26566);
(statearr_26620_26659[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26582 === 26))
{var inst_26539 = (state_26581[14]);var state_26581__$1 = state_26581;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26581__$1,29,out,inst_26539);
} else
{if((state_val_26582 === 27))
{var state_26581__$1 = state_26581;var statearr_26621_26660 = state_26581__$1;(statearr_26621_26660[2] = null);
(statearr_26621_26660[1] = 28);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26582 === 28))
{var inst_26532 = (state_26581[10]);var inst_26574 = (state_26581[2]);var inst_26524 = inst_26532;var state_26581__$1 = (function (){var statearr_26622 = state_26581;(statearr_26622[19] = inst_26574);
(statearr_26622[7] = inst_26524);
return statearr_26622;
})();var statearr_26623_26661 = state_26581__$1;(statearr_26623_26661[2] = null);
(statearr_26623_26661[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26582 === 29))
{var inst_26571 = (state_26581[2]);var state_26581__$1 = state_26581;var statearr_26624_26662 = state_26581__$1;(statearr_26624_26662[2] = inst_26571);
(statearr_26624_26662[1] = 28);
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
});return ((function (switch__21132__auto__){
return (function() {
var state_machine__21133__auto__ = null;
var state_machine__21133__auto____0 = (function (){var statearr_26626 = (new Array(20));(statearr_26626[0] = state_machine__21133__auto__);
(statearr_26626[1] = 1);
return statearr_26626;
});
var state_machine__21133__auto____1 = (function (state_26581){while(true){
var result__21134__auto__ = switch__21132__auto__.call(null,state_26581);if(cljs.core.keyword_identical_QMARK_.call(null,result__21134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__21134__auto__;
}
break;
}
});
state_machine__21133__auto__ = function(state_26581){
switch(arguments.length){
case 0:
return state_machine__21133__auto____0.call(this);
case 1:
return state_machine__21133__auto____1.call(this,state_26581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__21133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__21133__auto____0;
state_machine__21133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__21133__auto____1;
return state_machine__21133__auto__;
})()
;})(switch__21132__auto__))
})();var state__21190__auto__ = (function (){var statearr_26627 = f__21189__auto__.call(null);(statearr_26627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21188__auto___26628);
return statearr_26627;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
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
{var x__19723__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19723__auto__)]);if(or__3943__auto__)
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
{var x__19723__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19723__auto__)]);if(or__3943__auto__)
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
{var x__19723__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19723__auto__)]);if(or__3943__auto__)
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
{var x__19723__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19723__auto__)]);if(or__3943__auto__)
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
return (function (p1__26663_SHARP_){if(cljs.core.truth_(p1__26663_SHARP_.call(null,topic)))
{return p1__26663_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__26663_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3943__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t26787 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t26787');

/**
* @constructor
*/
cljs.core.async.t26787 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26788){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26788 = meta26788;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26787.cljs$lang$type = true;
cljs.core.async.t26787.cljs$lang$ctorStr = "cljs.core.async/t26787";
cljs.core.async.t26787.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19654__auto__,writer__19655__auto__,opt__19656__auto__){return cljs.core._write.call(null,writer__19655__auto__,"cljs.core.async/t26787");
});})(mults,ensure_mult))
;
cljs.core.async.t26787.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t26787.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t26787.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t26787.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t26787.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t26787.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26787.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t26787.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26789){var self__ = this;
return self__.meta26788;
});})(mults,ensure_mult))
;
cljs.core.async.t26787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26789,meta26788__$1){var self__ = this;
return (new cljs.core.async.t26787(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26788__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t26787 = ((function (mults,ensure_mult){
return (function __GT_t26787(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26788){return (new cljs.core.async.t26787(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26788));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t26787(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__21188__auto___26910 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__21189__auto__ = (function (){var switch__21132__auto__ = (function (state_26862){var state_val_26863 = (state_26862[1]);if((state_val_26863 === 1))
{var state_26862__$1 = state_26862;var statearr_26864_26911 = state_26862__$1;(statearr_26864_26911[2] = null);
(statearr_26864_26911[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26863 === 2))
{var state_26862__$1 = state_26862;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26862__$1,4,ch);
} else
{if((state_val_26863 === 3))
{var inst_26860 = (state_26862[2]);var state_26862__$1 = state_26862;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26862__$1,inst_26860);
} else
{if((state_val_26863 === 4))
{var inst_26792 = (state_26862[5]);var inst_26792__$1 = (state_26862[2]);var inst_26793 = (inst_26792__$1 == null);var state_26862__$1 = (function (){var statearr_26865 = state_26862;(statearr_26865[5] = inst_26792__$1);
return statearr_26865;
})();if(cljs.core.truth_(inst_26793))
{var statearr_26866_26912 = state_26862__$1;(statearr_26866_26912[1] = 5);
} else
{var statearr_26867_26913 = state_26862__$1;(statearr_26867_26913[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26863 === 5))
{var inst_26799 = cljs.core.deref.call(null,mults);var inst_26800 = cljs.core.vals.call(null,inst_26799);var inst_26801 = cljs.core.seq.call(null,inst_26800);var inst_26802 = inst_26801;var inst_26803 = null;var inst_26804 = 0;var inst_26805 = 0;var state_26862__$1 = (function (){var statearr_26868 = state_26862;(statearr_26868[6] = inst_26805);
(statearr_26868[7] = inst_26802);
(statearr_26868[8] = inst_26803);
(statearr_26868[9] = inst_26804);
return statearr_26868;
})();var statearr_26869_26914 = state_26862__$1;(statearr_26869_26914[2] = null);
(statearr_26869_26914[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26863 === 6))
{var inst_26792 = (state_26862[5]);var inst_26840 = (state_26862[10]);var inst_26842 = (state_26862[11]);var inst_26840__$1 = topic_fn.call(null,inst_26792);var inst_26841 = cljs.core.deref.call(null,mults);var inst_26842__$1 = cljs.core.get.call(null,inst_26841,inst_26840__$1);var state_26862__$1 = (function (){var statearr_26870 = state_26862;(statearr_26870[10] = inst_26840__$1);
(statearr_26870[11] = inst_26842__$1);
return statearr_26870;
})();if(cljs.core.truth_(inst_26842__$1))
{var statearr_26871_26915 = state_26862__$1;(statearr_26871_26915[1] = 19);
} else
{var statearr_26872_26916 = state_26862__$1;(statearr_26872_26916[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26863 === 7))
{var inst_26858 = (state_26862[2]);var state_26862__$1 = state_26862;var statearr_26873_26917 = state_26862__$1;(statearr_26873_26917[2] = inst_26858);
(statearr_26873_26917[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26863 === 8))
{var inst_26805 = (state_26862[6]);var inst_26804 = (state_26862[9]);var inst_26807 = (inst_26805 < inst_26804);var inst_26808 = inst_26807;var state_26862__$1 = state_26862;if(cljs.core.truth_(inst_26808))
{var statearr_26877_26918 = state_26862__$1;(statearr_26877_26918[1] = 10);
} else
{var statearr_26878_26919 = state_26862__$1;(statearr_26878_26919[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26863 === 9))
{var inst_26838 = (state_26862[2]);var state_26862__$1 = state_26862;var statearr_26879_26920 = state_26862__$1;(statearr_26879_26920[2] = inst_26838);
(statearr_26879_26920[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26863 === 10))
{var inst_26805 = (state_26862[6]);var inst_26802 = (state_26862[7]);var inst_26803 = (state_26862[8]);var inst_26804 = (state_26862[9]);var inst_26810 = cljs.core._nth.call(null,inst_26803,inst_26805);var inst_26811 = cljs.core.async.muxch_STAR_.call(null,inst_26810);var inst_26812 = cljs.core.async.close_BANG_.call(null,inst_26811);var inst_26813 = (inst_26805 + 1);var tmp26874 = inst_26802;var tmp26875 = inst_26803;var tmp26876 = inst_26804;var inst_26802__$1 = tmp26874;var inst_26803__$1 = tmp26875;var inst_26804__$1 = tmp26876;var inst_26805__$1 = inst_26813;var state_26862__$1 = (function (){var statearr_26880 = state_26862;(statearr_26880[6] = inst_26805__$1);
(statearr_26880[12] = inst_26812);
(statearr_26880[7] = inst_26802__$1);
(statearr_26880[8] = inst_26803__$1);
(statearr_26880[9] = inst_26804__$1);
return statearr_26880;
})();var statearr_26881_26921 = state_26862__$1;(statearr_26881_26921[2] = null);
(statearr_26881_26921[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26863 === 11))
{var inst_26816 = (state_26862[13]);var inst_26802 = (state_26862[7]);var inst_26816__$1 = cljs.core.seq.call(null,inst_26802);var state_26862__$1 = (function (){var statearr_26882 = state_26862;(statearr_26882[13] = inst_26816__$1);
return statearr_26882;
})();if(inst_26816__$1)
{var statearr_26883_26922 = state_26862__$1;(statearr_26883_26922[1] = 13);
} else
{var statearr_26884_26923 = state_26862__$1;(statearr_26884_26923[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26863 === 12))
{var inst_26836 = (state_26862[2]);var state_26862__$1 = state_26862;var statearr_26885_26924 = state_26862__$1;(statearr_26885_26924[2] = inst_26836);
(statearr_26885_26924[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26863 === 13))
{var inst_26816 = (state_26862[13]);var inst_26818 = cljs.core.chunked_seq_QMARK_.call(null,inst_26816);var state_26862__$1 = state_26862;if(inst_26818)
{var statearr_26886_26925 = state_26862__$1;(statearr_26886_26925[1] = 16);
} else
{var statearr_26887_26926 = state_26862__$1;(statearr_26887_26926[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26863 === 14))
{var state_26862__$1 = state_26862;var statearr_26888_26927 = state_26862__$1;(statearr_26888_26927[2] = null);
(statearr_26888_26927[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26863 === 15))
{var inst_26834 = (state_26862[2]);var state_26862__$1 = state_26862;var statearr_26889_26928 = state_26862__$1;(statearr_26889_26928[2] = inst_26834);
(statearr_26889_26928[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26863 === 16))
{var inst_26816 = (state_26862[13]);var inst_26820 = cljs.core.chunk_first.call(null,inst_26816);var inst_26821 = cljs.core.chunk_rest.call(null,inst_26816);var inst_26822 = cljs.core.count.call(null,inst_26820);var inst_26802 = inst_26821;var inst_26803 = inst_26820;var inst_26804 = inst_26822;var inst_26805 = 0;var state_26862__$1 = (function (){var statearr_26890 = state_26862;(statearr_26890[6] = inst_26805);
(statearr_26890[7] = inst_26802);
(statearr_26890[8] = inst_26803);
(statearr_26890[9] = inst_26804);
return statearr_26890;
})();var statearr_26891_26929 = state_26862__$1;(statearr_26891_26929[2] = null);
(statearr_26891_26929[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26863 === 17))
{var inst_26816 = (state_26862[13]);var inst_26825 = cljs.core.first.call(null,inst_26816);var inst_26826 = cljs.core.async.muxch_STAR_.call(null,inst_26825);var inst_26827 = cljs.core.async.close_BANG_.call(null,inst_26826);var inst_26828 = cljs.core.next.call(null,inst_26816);var inst_26802 = inst_26828;var inst_26803 = null;var inst_26804 = 0;var inst_26805 = 0;var state_26862__$1 = (function (){var statearr_26892 = state_26862;(statearr_26892[6] = inst_26805);
(statearr_26892[7] = inst_26802);
(statearr_26892[8] = inst_26803);
(statearr_26892[9] = inst_26804);
(statearr_26892[14] = inst_26827);
return statearr_26892;
})();var statearr_26893_26930 = state_26862__$1;(statearr_26893_26930[2] = null);
(statearr_26893_26930[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26863 === 18))
{var inst_26831 = (state_26862[2]);var state_26862__$1 = state_26862;var statearr_26894_26931 = state_26862__$1;(statearr_26894_26931[2] = inst_26831);
(statearr_26894_26931[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26863 === 19))
{var state_26862__$1 = state_26862;var statearr_26895_26932 = state_26862__$1;(statearr_26895_26932[2] = null);
(statearr_26895_26932[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26863 === 20))
{var state_26862__$1 = state_26862;var statearr_26896_26933 = state_26862__$1;(statearr_26896_26933[2] = null);
(statearr_26896_26933[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26863 === 21))
{var inst_26855 = (state_26862[2]);var state_26862__$1 = (function (){var statearr_26897 = state_26862;(statearr_26897[15] = inst_26855);
return statearr_26897;
})();var statearr_26898_26934 = state_26862__$1;(statearr_26898_26934[2] = null);
(statearr_26898_26934[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26863 === 22))
{var inst_26852 = (state_26862[2]);var state_26862__$1 = state_26862;var statearr_26899_26935 = state_26862__$1;(statearr_26899_26935[2] = inst_26852);
(statearr_26899_26935[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26863 === 23))
{var inst_26840 = (state_26862[10]);var inst_26844 = (state_26862[2]);var inst_26845 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26840);var state_26862__$1 = (function (){var statearr_26900 = state_26862;(statearr_26900[16] = inst_26844);
return statearr_26900;
})();var statearr_26901_26936 = state_26862__$1;(statearr_26901_26936[2] = inst_26845);
(statearr_26901_26936[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26863 === 24))
{try{var inst_26792 = (state_26862[5]);var inst_26842 = (state_26862[11]);var inst_26848 = cljs.core.async.muxch_STAR_.call(null,inst_26842);var state_26862__$1 = state_26862;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26862__$1,25,inst_26848,inst_26792);
}catch (e26902){if((e26902 instanceof Object))
{var ex__21126__auto__ = e26902;var statearr_26903_26937 = state_26862;(statearr_26903_26937[1] = 23);
(statearr_26903_26937[2] = ex__21126__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26902;
} else
{return null;
}
}
}} else
{if((state_val_26863 === 25))
{try{var inst_26850 = (state_26862[2]);var state_26862__$1 = state_26862;var statearr_26906_26938 = state_26862__$1;(statearr_26906_26938[2] = inst_26850);
(statearr_26906_26938[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e26904){if((e26904 instanceof Object))
{var ex__21126__auto__ = e26904;var statearr_26905_26939 = state_26862;(statearr_26905_26939[1] = 23);
(statearr_26905_26939[2] = ex__21126__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26904;
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
});return ((function (switch__21132__auto__){
return (function() {
var state_machine__21133__auto__ = null;
var state_machine__21133__auto____0 = (function (){var statearr_26908 = (new Array(17));(statearr_26908[0] = state_machine__21133__auto__);
(statearr_26908[1] = 1);
return statearr_26908;
});
var state_machine__21133__auto____1 = (function (state_26862){while(true){
var result__21134__auto__ = switch__21132__auto__.call(null,state_26862);if(cljs.core.keyword_identical_QMARK_.call(null,result__21134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__21134__auto__;
}
break;
}
});
state_machine__21133__auto__ = function(state_26862){
switch(arguments.length){
case 0:
return state_machine__21133__auto____0.call(this);
case 1:
return state_machine__21133__auto____1.call(this,state_26862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__21133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__21133__auto____0;
state_machine__21133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__21133__auto____1;
return state_machine__21133__auto__;
})()
;})(switch__21132__auto__))
})();var state__21190__auto__ = (function (){var statearr_26909 = f__21189__auto__.call(null);(statearr_26909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21188__auto___26910);
return statearr_26909;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
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
,cljs.core.range.call(null,cnt));var c__21188__auto___27070 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__21189__auto__ = (function (){var switch__21132__auto__ = (function (state_27042){var state_val_27043 = (state_27042[1]);if((state_val_27043 === 1))
{var state_27042__$1 = state_27042;var statearr_27044_27071 = state_27042__$1;(statearr_27044_27071[2] = null);
(statearr_27044_27071[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27043 === 2))
{var inst_27006 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_27007 = 0;var state_27042__$1 = (function (){var statearr_27045 = state_27042;(statearr_27045[5] = inst_27007);
(statearr_27045[6] = inst_27006);
return statearr_27045;
})();var statearr_27046_27072 = state_27042__$1;(statearr_27046_27072[2] = null);
(statearr_27046_27072[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27043 === 3))
{var inst_27040 = (state_27042[2]);var state_27042__$1 = state_27042;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27042__$1,inst_27040);
} else
{if((state_val_27043 === 4))
{var inst_27007 = (state_27042[5]);var inst_27009 = (inst_27007 < cnt);var state_27042__$1 = state_27042;if(cljs.core.truth_(inst_27009))
{var statearr_27047_27073 = state_27042__$1;(statearr_27047_27073[1] = 6);
} else
{var statearr_27048_27074 = state_27042__$1;(statearr_27048_27074[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27043 === 5))
{var inst_27026 = (state_27042[2]);var state_27042__$1 = (function (){var statearr_27049 = state_27042;(statearr_27049[7] = inst_27026);
return statearr_27049;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27042__$1,12,dchan);
} else
{if((state_val_27043 === 6))
{var state_27042__$1 = state_27042;var statearr_27050_27075 = state_27042__$1;(statearr_27050_27075[2] = null);
(statearr_27050_27075[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27043 === 7))
{var state_27042__$1 = state_27042;var statearr_27051_27076 = state_27042__$1;(statearr_27051_27076[2] = null);
(statearr_27051_27076[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27043 === 8))
{var inst_27024 = (state_27042[2]);var state_27042__$1 = state_27042;var statearr_27052_27077 = state_27042__$1;(statearr_27052_27077[2] = inst_27024);
(statearr_27052_27077[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27043 === 9))
{var inst_27007 = (state_27042[5]);var inst_27019 = (state_27042[2]);var inst_27020 = (inst_27007 + 1);var inst_27007__$1 = inst_27020;var state_27042__$1 = (function (){var statearr_27053 = state_27042;(statearr_27053[5] = inst_27007__$1);
(statearr_27053[8] = inst_27019);
return statearr_27053;
})();var statearr_27054_27078 = state_27042__$1;(statearr_27054_27078[2] = null);
(statearr_27054_27078[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27043 === 10))
{var inst_27011 = (state_27042[2]);var inst_27012 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_27042__$1 = (function (){var statearr_27055 = state_27042;(statearr_27055[9] = inst_27011);
return statearr_27055;
})();var statearr_27056_27079 = state_27042__$1;(statearr_27056_27079[2] = inst_27012);
(statearr_27056_27079[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27043 === 11))
{try{var inst_27007 = (state_27042[5]);var inst_27015 = chs__$1.call(null,inst_27007);var inst_27016 = done.call(null,inst_27007);var inst_27017 = cljs.core.async.take_BANG_.call(null,inst_27015,inst_27016);var state_27042__$1 = state_27042;var statearr_27059_27080 = state_27042__$1;(statearr_27059_27080[2] = inst_27017);
(statearr_27059_27080[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e27057){if((e27057 instanceof Object))
{var ex__21126__auto__ = e27057;var statearr_27058_27081 = state_27042;(statearr_27058_27081[1] = 10);
(statearr_27058_27081[2] = ex__21126__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27057;
} else
{return null;
}
}
}} else
{if((state_val_27043 === 12))
{var inst_27028 = (state_27042[10]);var inst_27028__$1 = (state_27042[2]);var inst_27029 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27028__$1);var state_27042__$1 = (function (){var statearr_27060 = state_27042;(statearr_27060[10] = inst_27028__$1);
return statearr_27060;
})();if(cljs.core.truth_(inst_27029))
{var statearr_27061_27082 = state_27042__$1;(statearr_27061_27082[1] = 13);
} else
{var statearr_27062_27083 = state_27042__$1;(statearr_27062_27083[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27043 === 13))
{var inst_27031 = cljs.core.async.close_BANG_.call(null,out);var state_27042__$1 = state_27042;var statearr_27063_27084 = state_27042__$1;(statearr_27063_27084[2] = inst_27031);
(statearr_27063_27084[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27043 === 14))
{var inst_27028 = (state_27042[10]);var inst_27033 = cljs.core.apply.call(null,f,inst_27028);var state_27042__$1 = state_27042;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27042__$1,16,out,inst_27033);
} else
{if((state_val_27043 === 15))
{var inst_27038 = (state_27042[2]);var state_27042__$1 = state_27042;var statearr_27064_27085 = state_27042__$1;(statearr_27064_27085[2] = inst_27038);
(statearr_27064_27085[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27043 === 16))
{var inst_27035 = (state_27042[2]);var state_27042__$1 = (function (){var statearr_27065 = state_27042;(statearr_27065[11] = inst_27035);
return statearr_27065;
})();var statearr_27066_27086 = state_27042__$1;(statearr_27066_27086[2] = null);
(statearr_27066_27086[1] = 2);
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
});return ((function (switch__21132__auto__){
return (function() {
var state_machine__21133__auto__ = null;
var state_machine__21133__auto____0 = (function (){var statearr_27068 = (new Array(12));(statearr_27068[0] = state_machine__21133__auto__);
(statearr_27068[1] = 1);
return statearr_27068;
});
var state_machine__21133__auto____1 = (function (state_27042){while(true){
var result__21134__auto__ = switch__21132__auto__.call(null,state_27042);if(cljs.core.keyword_identical_QMARK_.call(null,result__21134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__21134__auto__;
}
break;
}
});
state_machine__21133__auto__ = function(state_27042){
switch(arguments.length){
case 0:
return state_machine__21133__auto____0.call(this);
case 1:
return state_machine__21133__auto____1.call(this,state_27042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__21133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__21133__auto____0;
state_machine__21133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__21133__auto____1;
return state_machine__21133__auto__;
})()
;})(switch__21132__auto__))
})();var state__21190__auto__ = (function (){var statearr_27069 = f__21189__auto__.call(null);(statearr_27069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21188__auto___27070);
return statearr_27069;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__21188__auto___27186 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__21189__auto__ = (function (){var switch__21132__auto__ = (function (state_27166){var state_val_27167 = (state_27166[1]);if((state_val_27167 === 1))
{var inst_27137 = cljs.core.vec.call(null,chs);var inst_27138 = inst_27137;var state_27166__$1 = (function (){var statearr_27168 = state_27166;(statearr_27168[5] = inst_27138);
return statearr_27168;
})();var statearr_27169_27187 = state_27166__$1;(statearr_27169_27187[2] = null);
(statearr_27169_27187[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27167 === 2))
{var inst_27138 = (state_27166[5]);var inst_27140 = cljs.core.count.call(null,inst_27138);var inst_27141 = (inst_27140 > 0);var state_27166__$1 = state_27166;if(cljs.core.truth_(inst_27141))
{var statearr_27170_27188 = state_27166__$1;(statearr_27170_27188[1] = 4);
} else
{var statearr_27171_27189 = state_27166__$1;(statearr_27171_27189[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27167 === 3))
{var inst_27164 = (state_27166[2]);var state_27166__$1 = state_27166;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27166__$1,inst_27164);
} else
{if((state_val_27167 === 4))
{var inst_27138 = (state_27166[5]);var state_27166__$1 = state_27166;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27166__$1,7,inst_27138);
} else
{if((state_val_27167 === 5))
{var inst_27160 = cljs.core.async.close_BANG_.call(null,out);var state_27166__$1 = state_27166;var statearr_27172_27190 = state_27166__$1;(statearr_27172_27190[2] = inst_27160);
(statearr_27172_27190[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27167 === 6))
{var inst_27162 = (state_27166[2]);var state_27166__$1 = state_27166;var statearr_27173_27191 = state_27166__$1;(statearr_27173_27191[2] = inst_27162);
(statearr_27173_27191[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27167 === 7))
{var inst_27145 = (state_27166[6]);var inst_27146 = (state_27166[7]);var inst_27145__$1 = (state_27166[2]);var inst_27146__$1 = cljs.core.nth.call(null,inst_27145__$1,0,null);var inst_27147 = cljs.core.nth.call(null,inst_27145__$1,1,null);var inst_27148 = (inst_27146__$1 == null);var state_27166__$1 = (function (){var statearr_27174 = state_27166;(statearr_27174[8] = inst_27147);
(statearr_27174[6] = inst_27145__$1);
(statearr_27174[7] = inst_27146__$1);
return statearr_27174;
})();if(cljs.core.truth_(inst_27148))
{var statearr_27175_27192 = state_27166__$1;(statearr_27175_27192[1] = 8);
} else
{var statearr_27176_27193 = state_27166__$1;(statearr_27176_27193[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27167 === 8))
{var inst_27147 = (state_27166[8]);var inst_27145 = (state_27166[6]);var inst_27146 = (state_27166[7]);var inst_27138 = (state_27166[5]);var inst_27150 = (function (){var c = inst_27147;var v = inst_27146;var vec__27143 = inst_27145;var cs = inst_27138;return ((function (c,v,vec__27143,cs,inst_27147,inst_27145,inst_27146,inst_27138,state_val_27167){
return (function (p1__27087_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__27087_SHARP_);
});
;})(c,v,vec__27143,cs,inst_27147,inst_27145,inst_27146,inst_27138,state_val_27167))
})();var inst_27151 = cljs.core.filterv.call(null,inst_27150,inst_27138);var inst_27138__$1 = inst_27151;var state_27166__$1 = (function (){var statearr_27177 = state_27166;(statearr_27177[5] = inst_27138__$1);
return statearr_27177;
})();var statearr_27178_27194 = state_27166__$1;(statearr_27178_27194[2] = null);
(statearr_27178_27194[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27167 === 9))
{var inst_27146 = (state_27166[7]);var state_27166__$1 = state_27166;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27166__$1,11,out,inst_27146);
} else
{if((state_val_27167 === 10))
{var inst_27158 = (state_27166[2]);var state_27166__$1 = state_27166;var statearr_27180_27195 = state_27166__$1;(statearr_27180_27195[2] = inst_27158);
(statearr_27180_27195[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27167 === 11))
{var inst_27138 = (state_27166[5]);var inst_27155 = (state_27166[2]);var tmp27179 = inst_27138;var inst_27138__$1 = tmp27179;var state_27166__$1 = (function (){var statearr_27181 = state_27166;(statearr_27181[9] = inst_27155);
(statearr_27181[5] = inst_27138__$1);
return statearr_27181;
})();var statearr_27182_27196 = state_27166__$1;(statearr_27182_27196[2] = null);
(statearr_27182_27196[1] = 2);
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
});return ((function (switch__21132__auto__){
return (function() {
var state_machine__21133__auto__ = null;
var state_machine__21133__auto____0 = (function (){var statearr_27184 = (new Array(10));(statearr_27184[0] = state_machine__21133__auto__);
(statearr_27184[1] = 1);
return statearr_27184;
});
var state_machine__21133__auto____1 = (function (state_27166){while(true){
var result__21134__auto__ = switch__21132__auto__.call(null,state_27166);if(cljs.core.keyword_identical_QMARK_.call(null,result__21134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__21134__auto__;
}
break;
}
});
state_machine__21133__auto__ = function(state_27166){
switch(arguments.length){
case 0:
return state_machine__21133__auto____0.call(this);
case 1:
return state_machine__21133__auto____1.call(this,state_27166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__21133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__21133__auto____0;
state_machine__21133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__21133__auto____1;
return state_machine__21133__auto__;
})()
;})(switch__21132__auto__))
})();var state__21190__auto__ = (function (){var statearr_27185 = f__21189__auto__.call(null);(statearr_27185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21188__auto___27186);
return statearr_27185;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21190__auto__);
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
