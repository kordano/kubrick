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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11491 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11491');

/**
* @constructor
*/
cljs.core.async.t11491 = (function (f,fn_handler,meta11492){
this.f = f;
this.fn_handler = fn_handler;
this.meta11492 = meta11492;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11491.cljs$lang$type = true;
cljs.core.async.t11491.cljs$lang$ctorStr = "cljs.core.async/t11491";
cljs.core.async.t11491.cljs$lang$ctorPrWriter = (function (this__6727__auto__,writer__6728__auto__,opt__6729__auto__){return cljs.core._write.call(null,writer__6728__auto__,"cljs.core.async/t11491");
});
cljs.core.async.t11491.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11491.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return true;
});
cljs.core.async.t11491.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
return self__.f;
});
cljs.core.async.t11491.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11493){var self__ = this;
return self__.meta11492;
});
cljs.core.async.t11491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11493,meta11492__$1){var self__ = this;
return (new cljs.core.async.t11491(self__.f,self__.fn_handler,meta11492__$1));
});
cljs.core.async.__GT_t11491 = (function __GT_t11491(f__$1,fn_handler__$1,meta11492){return (new cljs.core.async.t11491(f__$1,fn_handler__$1,meta11492));
});
}
return (new cljs.core.async.t11491(f,fn_handler,null));
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
{var val_11494 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11494);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_11494);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__7122__auto___11495 = n;var x_11496 = 0;while(true){
if((x_11496 < n__7122__auto___11495))
{(a[x_11496] = 0);
{
var G__11497 = (x_11496 + 1);
x_11496 = G__11497;
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
var G__11498 = (i + 1);
i = G__11498;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11502 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11502');

/**
* @constructor
*/
cljs.core.async.t11502 = (function (flag,alt_flag,meta11503){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11503 = meta11503;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11502.cljs$lang$type = true;
cljs.core.async.t11502.cljs$lang$ctorStr = "cljs.core.async/t11502";
cljs.core.async.t11502.cljs$lang$ctorPrWriter = (function (this__6727__auto__,writer__6728__auto__,opt__6729__auto__){return cljs.core._write.call(null,writer__6728__auto__,"cljs.core.async/t11502");
});
cljs.core.async.t11502.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11502.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t11502.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t11502.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11504){var self__ = this;
return self__.meta11503;
});
cljs.core.async.t11502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11504,meta11503__$1){var self__ = this;
return (new cljs.core.async.t11502(self__.flag,self__.alt_flag,meta11503__$1));
});
cljs.core.async.__GT_t11502 = (function __GT_t11502(flag__$1,alt_flag__$1,meta11503){return (new cljs.core.async.t11502(flag__$1,alt_flag__$1,meta11503));
});
}
return (new cljs.core.async.t11502(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11508 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11508');

/**
* @constructor
*/
cljs.core.async.t11508 = (function (cb,flag,alt_handler,meta11509){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11509 = meta11509;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11508.cljs$lang$type = true;
cljs.core.async.t11508.cljs$lang$ctorStr = "cljs.core.async/t11508";
cljs.core.async.t11508.cljs$lang$ctorPrWriter = (function (this__6727__auto__,writer__6728__auto__,opt__6729__auto__){return cljs.core._write.call(null,writer__6728__auto__,"cljs.core.async/t11508");
});
cljs.core.async.t11508.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11508.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11508.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11510){var self__ = this;
return self__.meta11509;
});
cljs.core.async.t11508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11510,meta11509__$1){var self__ = this;
return (new cljs.core.async.t11508(self__.cb,self__.flag,self__.alt_handler,meta11509__$1));
});
cljs.core.async.__GT_t11508 = (function __GT_t11508(cb__$1,flag__$1,alt_handler__$1,meta11509){return (new cljs.core.async.t11508(cb__$1,flag__$1,alt_handler__$1,meta11509));
});
}
return (new cljs.core.async.t11508(cb,flag,alt_handler,null));
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
return (function (p1__11511_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__11511_SHARP_,port], true));
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
var G__11512 = (i + 1);
i = G__11512;
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
var alts_BANG___delegate = function (ports,p__11513){var map__11515 = p__11513;var map__11515__$1 = ((cljs.core.seq_QMARK_.call(null,map__11515))?cljs.core.apply.call(null,cljs.core.hash_map,map__11515):map__11515);var opts = map__11515__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11513 = null;if (arguments.length > 1) {
  p__11513 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11513);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11516){
var ports = cljs.core.first(arglist__11516);
var p__11513 = cljs.core.rest(arglist__11516);
return alts_BANG___delegate(ports,p__11513);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11524 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11524');

/**
* @constructor
*/
cljs.core.async.t11524 = (function (ch,f,map_LT_,meta11525){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11525 = meta11525;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11524.cljs$lang$type = true;
cljs.core.async.t11524.cljs$lang$ctorStr = "cljs.core.async/t11524";
cljs.core.async.t11524.cljs$lang$ctorPrWriter = (function (this__6727__auto__,writer__6728__auto__,opt__6729__auto__){return cljs.core._write.call(null,writer__6728__auto__,"cljs.core.async/t11524");
});
cljs.core.async.t11524.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11524.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11524.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11524.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11527 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11527');

/**
* @constructor
*/
cljs.core.async.t11527 = (function (fn1,_,meta11525,ch,f,map_LT_,meta11528){
this.fn1 = fn1;
this._ = _;
this.meta11525 = meta11525;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11528 = meta11528;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11527.cljs$lang$type = true;
cljs.core.async.t11527.cljs$lang$ctorStr = "cljs.core.async/t11527";
cljs.core.async.t11527.cljs$lang$ctorPrWriter = (function (this__6727__auto__,writer__6728__auto__,opt__6729__auto__){return cljs.core._write.call(null,writer__6728__auto__,"cljs.core.async/t11527");
});
cljs.core.async.t11527.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11527.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$2){var self__ = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t11527.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$2){var self__ = this;
return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t11527.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$2){var self__ = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1){
return (function (p1__11517_SHARP_){return f1.call(null,(((p1__11517_SHARP_ == null))?null:self__.f.call(null,p1__11517_SHARP_)));
});
;})(f1))
});
cljs.core.async.t11527.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11529){var self__ = this;
return self__.meta11528;
});
cljs.core.async.t11527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11529,meta11528__$1){var self__ = this;
return (new cljs.core.async.t11527(self__.fn1,self__._,self__.meta11525,self__.ch,self__.f,self__.map_LT_,meta11528__$1));
});
cljs.core.async.__GT_t11527 = (function __GT_t11527(fn1__$1,___$1,meta11525__$1,ch__$2,f__$2,map_LT___$2,meta11528){return (new cljs.core.async.t11527(fn1__$1,___$1,meta11525__$1,ch__$2,f__$2,map_LT___$2,meta11528));
});
}
return (new cljs.core.async.t11527(fn1,_,self__.meta11525,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t11524.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11524.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11524.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11526){var self__ = this;
return self__.meta11525;
});
cljs.core.async.t11524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11526,meta11525__$1){var self__ = this;
return (new cljs.core.async.t11524(self__.ch,self__.f,self__.map_LT_,meta11525__$1));
});
cljs.core.async.__GT_t11524 = (function __GT_t11524(ch__$1,f__$1,map_LT___$1,meta11525){return (new cljs.core.async.t11524(ch__$1,f__$1,map_LT___$1,meta11525));
});
}
return (new cljs.core.async.t11524(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11533 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11533');

/**
* @constructor
*/
cljs.core.async.t11533 = (function (ch,f,map_GT_,meta11534){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11534 = meta11534;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11533.cljs$lang$type = true;
cljs.core.async.t11533.cljs$lang$ctorStr = "cljs.core.async/t11533";
cljs.core.async.t11533.cljs$lang$ctorPrWriter = (function (this__6727__auto__,writer__6728__auto__,opt__6729__auto__){return cljs.core._write.call(null,writer__6728__auto__,"cljs.core.async/t11533");
});
cljs.core.async.t11533.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11533.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11533.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11533.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11533.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11533.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11533.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11535){var self__ = this;
return self__.meta11534;
});
cljs.core.async.t11533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11535,meta11534__$1){var self__ = this;
return (new cljs.core.async.t11533(self__.ch,self__.f,self__.map_GT_,meta11534__$1));
});
cljs.core.async.__GT_t11533 = (function __GT_t11533(ch__$1,f__$1,map_GT___$1,meta11534){return (new cljs.core.async.t11533(ch__$1,f__$1,map_GT___$1,meta11534));
});
}
return (new cljs.core.async.t11533(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11539 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11539');

/**
* @constructor
*/
cljs.core.async.t11539 = (function (ch,p,filter_GT_,meta11540){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11540 = meta11540;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11539.cljs$lang$type = true;
cljs.core.async.t11539.cljs$lang$ctorStr = "cljs.core.async/t11539";
cljs.core.async.t11539.cljs$lang$ctorPrWriter = (function (this__6727__auto__,writer__6728__auto__,opt__6729__auto__){return cljs.core._write.call(null,writer__6728__auto__,"cljs.core.async/t11539");
});
cljs.core.async.t11539.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11539.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11539.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11539.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11539.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11539.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11539.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11541){var self__ = this;
return self__.meta11540;
});
cljs.core.async.t11539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11541,meta11540__$1){var self__ = this;
return (new cljs.core.async.t11539(self__.ch,self__.p,self__.filter_GT_,meta11540__$1));
});
cljs.core.async.__GT_t11539 = (function __GT_t11539(ch__$1,p__$1,filter_GT___$1,meta11540){return (new cljs.core.async.t11539(ch__$1,p__$1,filter_GT___$1,meta11540));
});
}
return (new cljs.core.async.t11539(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8247__auto___11616 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8248__auto__ = (function (){var switch__8189__auto__ = (function (state_11599){var state_val_11600 = (state_11599[1]);if((state_val_11600 === 1))
{var state_11599__$1 = state_11599;var statearr_11601_11617 = state_11599__$1;(statearr_11601_11617[2] = null);
(statearr_11601_11617[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11600 === 2))
{var state_11599__$1 = state_11599;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11599__$1,4,ch);
} else
{if((state_val_11600 === 3))
{var inst_11597 = (state_11599[2]);var state_11599__$1 = state_11599;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11599__$1,inst_11597);
} else
{if((state_val_11600 === 4))
{var inst_11581 = (state_11599[5]);var inst_11581__$1 = (state_11599[2]);var inst_11582 = (inst_11581__$1 == null);var state_11599__$1 = (function (){var statearr_11602 = state_11599;(statearr_11602[5] = inst_11581__$1);
return statearr_11602;
})();if(cljs.core.truth_(inst_11582))
{var statearr_11603_11618 = state_11599__$1;(statearr_11603_11618[1] = 5);
} else
{var statearr_11604_11619 = state_11599__$1;(statearr_11604_11619[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11600 === 5))
{var inst_11584 = cljs.core.async.close_BANG_.call(null,out);var state_11599__$1 = state_11599;var statearr_11605_11620 = state_11599__$1;(statearr_11605_11620[2] = inst_11584);
(statearr_11605_11620[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11600 === 6))
{var inst_11581 = (state_11599[5]);var inst_11586 = p.call(null,inst_11581);var state_11599__$1 = state_11599;if(cljs.core.truth_(inst_11586))
{var statearr_11606_11621 = state_11599__$1;(statearr_11606_11621[1] = 8);
} else
{var statearr_11607_11622 = state_11599__$1;(statearr_11607_11622[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11600 === 7))
{var inst_11595 = (state_11599[2]);var state_11599__$1 = state_11599;var statearr_11608_11623 = state_11599__$1;(statearr_11608_11623[2] = inst_11595);
(statearr_11608_11623[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11600 === 8))
{var inst_11581 = (state_11599[5]);var state_11599__$1 = state_11599;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11599__$1,11,out,inst_11581);
} else
{if((state_val_11600 === 9))
{var state_11599__$1 = state_11599;var statearr_11609_11624 = state_11599__$1;(statearr_11609_11624[2] = null);
(statearr_11609_11624[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11600 === 10))
{var inst_11592 = (state_11599[2]);var state_11599__$1 = (function (){var statearr_11610 = state_11599;(statearr_11610[6] = inst_11592);
return statearr_11610;
})();var statearr_11611_11625 = state_11599__$1;(statearr_11611_11625[2] = null);
(statearr_11611_11625[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11600 === 11))
{var inst_11589 = (state_11599[2]);var state_11599__$1 = state_11599;var statearr_11612_11626 = state_11599__$1;(statearr_11612_11626[2] = inst_11589);
(statearr_11612_11626[1] = 10);
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
});return ((function (switch__8189__auto__){
return (function() {
var state_machine__8190__auto__ = null;
var state_machine__8190__auto____0 = (function (){var statearr_11614 = (new Array(7));(statearr_11614[0] = state_machine__8190__auto__);
(statearr_11614[1] = 1);
return statearr_11614;
});
var state_machine__8190__auto____1 = (function (state_11599){while(true){
var result__8191__auto__ = switch__8189__auto__.call(null,state_11599);if(cljs.core.keyword_identical_QMARK_.call(null,result__8191__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8191__auto__;
}
break;
}
});
state_machine__8190__auto__ = function(state_11599){
switch(arguments.length){
case 0:
return state_machine__8190__auto____0.call(this);
case 1:
return state_machine__8190__auto____1.call(this,state_11599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8190__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8190__auto____0;
state_machine__8190__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8190__auto____1;
return state_machine__8190__auto__;
})()
;})(switch__8189__auto__))
})();var state__8249__auto__ = (function (){var statearr_11615 = f__8248__auto__.call(null);(statearr_11615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8247__auto___11616);
return statearr_11615;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8249__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__8247__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8248__auto__ = (function (){var switch__8189__auto__ = (function (state_11774){var state_val_11775 = (state_11774[1]);if((state_val_11775 === 1))
{var state_11774__$1 = state_11774;var statearr_11776_11809 = state_11774__$1;(statearr_11776_11809[2] = null);
(statearr_11776_11809[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11775 === 2))
{var state_11774__$1 = state_11774;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11774__$1,4,in$);
} else
{if((state_val_11775 === 3))
{var inst_11772 = (state_11774[2]);var state_11774__$1 = state_11774;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11774__$1,inst_11772);
} else
{if((state_val_11775 === 4))
{var inst_11720 = (state_11774[5]);var inst_11720__$1 = (state_11774[2]);var inst_11721 = (inst_11720__$1 == null);var state_11774__$1 = (function (){var statearr_11777 = state_11774;(statearr_11777[5] = inst_11720__$1);
return statearr_11777;
})();if(cljs.core.truth_(inst_11721))
{var statearr_11778_11810 = state_11774__$1;(statearr_11778_11810[1] = 5);
} else
{var statearr_11779_11811 = state_11774__$1;(statearr_11779_11811[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11775 === 5))
{var inst_11723 = cljs.core.async.close_BANG_.call(null,out);var state_11774__$1 = state_11774;var statearr_11780_11812 = state_11774__$1;(statearr_11780_11812[2] = inst_11723);
(statearr_11780_11812[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11775 === 6))
{var inst_11720 = (state_11774[5]);var inst_11725 = f.call(null,inst_11720);var inst_11730 = cljs.core.seq.call(null,inst_11725);var inst_11731 = inst_11730;var inst_11732 = null;var inst_11733 = 0;var inst_11734 = 0;var state_11774__$1 = (function (){var statearr_11781 = state_11774;(statearr_11781[6] = inst_11731);
(statearr_11781[7] = inst_11732);
(statearr_11781[8] = inst_11733);
(statearr_11781[9] = inst_11734);
return statearr_11781;
})();var statearr_11782_11813 = state_11774__$1;(statearr_11782_11813[2] = null);
(statearr_11782_11813[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11775 === 7))
{var inst_11770 = (state_11774[2]);var state_11774__$1 = state_11774;var statearr_11783_11814 = state_11774__$1;(statearr_11783_11814[2] = inst_11770);
(statearr_11783_11814[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11775 === 8))
{var inst_11733 = (state_11774[8]);var inst_11734 = (state_11774[9]);var inst_11736 = (inst_11734 < inst_11733);var inst_11737 = inst_11736;var state_11774__$1 = state_11774;if(cljs.core.truth_(inst_11737))
{var statearr_11784_11815 = state_11774__$1;(statearr_11784_11815[1] = 10);
} else
{var statearr_11785_11816 = state_11774__$1;(statearr_11785_11816[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11775 === 9))
{var inst_11767 = (state_11774[2]);var state_11774__$1 = (function (){var statearr_11786 = state_11774;(statearr_11786[10] = inst_11767);
return statearr_11786;
})();var statearr_11787_11817 = state_11774__$1;(statearr_11787_11817[2] = null);
(statearr_11787_11817[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11775 === 10))
{var inst_11732 = (state_11774[7]);var inst_11734 = (state_11774[9]);var inst_11739 = cljs.core._nth.call(null,inst_11732,inst_11734);var state_11774__$1 = state_11774;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11774__$1,13,out,inst_11739);
} else
{if((state_val_11775 === 11))
{var inst_11731 = (state_11774[6]);var inst_11745 = (state_11774[11]);var inst_11745__$1 = cljs.core.seq.call(null,inst_11731);var state_11774__$1 = (function (){var statearr_11791 = state_11774;(statearr_11791[11] = inst_11745__$1);
return statearr_11791;
})();if(inst_11745__$1)
{var statearr_11792_11818 = state_11774__$1;(statearr_11792_11818[1] = 14);
} else
{var statearr_11793_11819 = state_11774__$1;(statearr_11793_11819[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11775 === 12))
{var inst_11765 = (state_11774[2]);var state_11774__$1 = state_11774;var statearr_11794_11820 = state_11774__$1;(statearr_11794_11820[2] = inst_11765);
(statearr_11794_11820[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11775 === 13))
{var inst_11731 = (state_11774[6]);var inst_11732 = (state_11774[7]);var inst_11733 = (state_11774[8]);var inst_11734 = (state_11774[9]);var inst_11741 = (state_11774[2]);var inst_11742 = (inst_11734 + 1);var tmp11788 = inst_11731;var tmp11789 = inst_11732;var tmp11790 = inst_11733;var inst_11731__$1 = tmp11788;var inst_11732__$1 = tmp11789;var inst_11733__$1 = tmp11790;var inst_11734__$1 = inst_11742;var state_11774__$1 = (function (){var statearr_11795 = state_11774;(statearr_11795[12] = inst_11741);
(statearr_11795[6] = inst_11731__$1);
(statearr_11795[7] = inst_11732__$1);
(statearr_11795[8] = inst_11733__$1);
(statearr_11795[9] = inst_11734__$1);
return statearr_11795;
})();var statearr_11796_11821 = state_11774__$1;(statearr_11796_11821[2] = null);
(statearr_11796_11821[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11775 === 14))
{var inst_11745 = (state_11774[11]);var inst_11747 = cljs.core.chunked_seq_QMARK_.call(null,inst_11745);var state_11774__$1 = state_11774;if(inst_11747)
{var statearr_11797_11822 = state_11774__$1;(statearr_11797_11822[1] = 17);
} else
{var statearr_11798_11823 = state_11774__$1;(statearr_11798_11823[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11775 === 15))
{var state_11774__$1 = state_11774;var statearr_11799_11824 = state_11774__$1;(statearr_11799_11824[2] = null);
(statearr_11799_11824[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11775 === 16))
{var inst_11763 = (state_11774[2]);var state_11774__$1 = state_11774;var statearr_11800_11825 = state_11774__$1;(statearr_11800_11825[2] = inst_11763);
(statearr_11800_11825[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11775 === 17))
{var inst_11745 = (state_11774[11]);var inst_11749 = cljs.core.chunk_first.call(null,inst_11745);var inst_11750 = cljs.core.chunk_rest.call(null,inst_11745);var inst_11751 = cljs.core.count.call(null,inst_11749);var inst_11731 = inst_11750;var inst_11732 = inst_11749;var inst_11733 = inst_11751;var inst_11734 = 0;var state_11774__$1 = (function (){var statearr_11801 = state_11774;(statearr_11801[6] = inst_11731);
(statearr_11801[7] = inst_11732);
(statearr_11801[8] = inst_11733);
(statearr_11801[9] = inst_11734);
return statearr_11801;
})();var statearr_11802_11826 = state_11774__$1;(statearr_11802_11826[2] = null);
(statearr_11802_11826[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11775 === 18))
{var inst_11745 = (state_11774[11]);var inst_11754 = cljs.core.first.call(null,inst_11745);var state_11774__$1 = state_11774;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11774__$1,20,out,inst_11754);
} else
{if((state_val_11775 === 19))
{var inst_11760 = (state_11774[2]);var state_11774__$1 = state_11774;var statearr_11803_11827 = state_11774__$1;(statearr_11803_11827[2] = inst_11760);
(statearr_11803_11827[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11775 === 20))
{var inst_11745 = (state_11774[11]);var inst_11756 = (state_11774[2]);var inst_11757 = cljs.core.next.call(null,inst_11745);var inst_11731 = inst_11757;var inst_11732 = null;var inst_11733 = 0;var inst_11734 = 0;var state_11774__$1 = (function (){var statearr_11804 = state_11774;(statearr_11804[6] = inst_11731);
(statearr_11804[7] = inst_11732);
(statearr_11804[8] = inst_11733);
(statearr_11804[9] = inst_11734);
(statearr_11804[13] = inst_11756);
return statearr_11804;
})();var statearr_11805_11828 = state_11774__$1;(statearr_11805_11828[2] = null);
(statearr_11805_11828[1] = 8);
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
});return ((function (switch__8189__auto__){
return (function() {
var state_machine__8190__auto__ = null;
var state_machine__8190__auto____0 = (function (){var statearr_11807 = (new Array(14));(statearr_11807[0] = state_machine__8190__auto__);
(statearr_11807[1] = 1);
return statearr_11807;
});
var state_machine__8190__auto____1 = (function (state_11774){while(true){
var result__8191__auto__ = switch__8189__auto__.call(null,state_11774);if(cljs.core.keyword_identical_QMARK_.call(null,result__8191__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8191__auto__;
}
break;
}
});
state_machine__8190__auto__ = function(state_11774){
switch(arguments.length){
case 0:
return state_machine__8190__auto____0.call(this);
case 1:
return state_machine__8190__auto____1.call(this,state_11774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8190__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8190__auto____0;
state_machine__8190__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8190__auto____1;
return state_machine__8190__auto__;
})()
;})(switch__8189__auto__))
})();var state__8249__auto__ = (function (){var statearr_11808 = f__8248__auto__.call(null);(statearr_11808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8247__auto__);
return statearr_11808;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8249__auto__);
}));
return c__8247__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__8247__auto___11901 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8248__auto__ = (function (){var switch__8189__auto__ = (function (state_11884){var state_val_11885 = (state_11884[1]);if((state_val_11885 === 1))
{var state_11884__$1 = state_11884;var statearr_11886_11902 = state_11884__$1;(statearr_11886_11902[2] = null);
(statearr_11886_11902[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11885 === 2))
{var state_11884__$1 = state_11884;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11884__$1,4,from);
} else
{if((state_val_11885 === 3))
{var inst_11882 = (state_11884[2]);var state_11884__$1 = state_11884;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11884__$1,inst_11882);
} else
{if((state_val_11885 === 4))
{var inst_11867 = (state_11884[5]);var inst_11867__$1 = (state_11884[2]);var inst_11868 = (inst_11867__$1 == null);var state_11884__$1 = (function (){var statearr_11887 = state_11884;(statearr_11887[5] = inst_11867__$1);
return statearr_11887;
})();if(cljs.core.truth_(inst_11868))
{var statearr_11888_11903 = state_11884__$1;(statearr_11888_11903[1] = 5);
} else
{var statearr_11889_11904 = state_11884__$1;(statearr_11889_11904[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11885 === 5))
{var state_11884__$1 = state_11884;if(cljs.core.truth_(close_QMARK_))
{var statearr_11890_11905 = state_11884__$1;(statearr_11890_11905[1] = 8);
} else
{var statearr_11891_11906 = state_11884__$1;(statearr_11891_11906[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11885 === 6))
{var inst_11867 = (state_11884[5]);var state_11884__$1 = state_11884;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11884__$1,11,to,inst_11867);
} else
{if((state_val_11885 === 7))
{var inst_11880 = (state_11884[2]);var state_11884__$1 = state_11884;var statearr_11892_11907 = state_11884__$1;(statearr_11892_11907[2] = inst_11880);
(statearr_11892_11907[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11885 === 8))
{var inst_11871 = cljs.core.async.close_BANG_.call(null,to);var state_11884__$1 = state_11884;var statearr_11893_11908 = state_11884__$1;(statearr_11893_11908[2] = inst_11871);
(statearr_11893_11908[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11885 === 9))
{var state_11884__$1 = state_11884;var statearr_11894_11909 = state_11884__$1;(statearr_11894_11909[2] = null);
(statearr_11894_11909[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11885 === 10))
{var inst_11874 = (state_11884[2]);var state_11884__$1 = state_11884;var statearr_11895_11910 = state_11884__$1;(statearr_11895_11910[2] = inst_11874);
(statearr_11895_11910[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11885 === 11))
{var inst_11877 = (state_11884[2]);var state_11884__$1 = (function (){var statearr_11896 = state_11884;(statearr_11896[6] = inst_11877);
return statearr_11896;
})();var statearr_11897_11911 = state_11884__$1;(statearr_11897_11911[2] = null);
(statearr_11897_11911[1] = 2);
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
});return ((function (switch__8189__auto__){
return (function() {
var state_machine__8190__auto__ = null;
var state_machine__8190__auto____0 = (function (){var statearr_11899 = (new Array(7));(statearr_11899[0] = state_machine__8190__auto__);
(statearr_11899[1] = 1);
return statearr_11899;
});
var state_machine__8190__auto____1 = (function (state_11884){while(true){
var result__8191__auto__ = switch__8189__auto__.call(null,state_11884);if(cljs.core.keyword_identical_QMARK_.call(null,result__8191__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8191__auto__;
}
break;
}
});
state_machine__8190__auto__ = function(state_11884){
switch(arguments.length){
case 0:
return state_machine__8190__auto____0.call(this);
case 1:
return state_machine__8190__auto____1.call(this,state_11884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8190__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8190__auto____0;
state_machine__8190__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8190__auto____1;
return state_machine__8190__auto__;
})()
;})(switch__8189__auto__))
})();var state__8249__auto__ = (function (){var statearr_11900 = f__8248__auto__.call(null);(statearr_11900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8247__auto___11901);
return statearr_11900;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8249__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__8247__auto___11990 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8248__auto__ = (function (){var switch__8189__auto__ = (function (state_11972){var state_val_11973 = (state_11972[1]);if((state_val_11973 === 1))
{var state_11972__$1 = state_11972;var statearr_11974_11991 = state_11972__$1;(statearr_11974_11991[2] = null);
(statearr_11974_11991[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11973 === 2))
{var state_11972__$1 = state_11972;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11972__$1,4,ch);
} else
{if((state_val_11973 === 3))
{var inst_11970 = (state_11972[2]);var state_11972__$1 = state_11972;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11972__$1,inst_11970);
} else
{if((state_val_11973 === 4))
{var inst_11953 = (state_11972[5]);var inst_11953__$1 = (state_11972[2]);var inst_11954 = (inst_11953__$1 == null);var state_11972__$1 = (function (){var statearr_11975 = state_11972;(statearr_11975[5] = inst_11953__$1);
return statearr_11975;
})();if(cljs.core.truth_(inst_11954))
{var statearr_11976_11992 = state_11972__$1;(statearr_11976_11992[1] = 5);
} else
{var statearr_11977_11993 = state_11972__$1;(statearr_11977_11993[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11973 === 5))
{var inst_11956 = cljs.core.async.close_BANG_.call(null,tc);var inst_11957 = cljs.core.async.close_BANG_.call(null,fc);var state_11972__$1 = (function (){var statearr_11978 = state_11972;(statearr_11978[6] = inst_11956);
return statearr_11978;
})();var statearr_11979_11994 = state_11972__$1;(statearr_11979_11994[2] = inst_11957);
(statearr_11979_11994[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11973 === 6))
{var inst_11953 = (state_11972[5]);var inst_11959 = p.call(null,inst_11953);var state_11972__$1 = state_11972;if(cljs.core.truth_(inst_11959))
{var statearr_11980_11995 = state_11972__$1;(statearr_11980_11995[1] = 9);
} else
{var statearr_11981_11996 = state_11972__$1;(statearr_11981_11996[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11973 === 7))
{var inst_11968 = (state_11972[2]);var state_11972__$1 = state_11972;var statearr_11982_11997 = state_11972__$1;(statearr_11982_11997[2] = inst_11968);
(statearr_11982_11997[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11973 === 8))
{var inst_11965 = (state_11972[2]);var state_11972__$1 = (function (){var statearr_11983 = state_11972;(statearr_11983[7] = inst_11965);
return statearr_11983;
})();var statearr_11984_11998 = state_11972__$1;(statearr_11984_11998[2] = null);
(statearr_11984_11998[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11973 === 9))
{var state_11972__$1 = state_11972;var statearr_11985_11999 = state_11972__$1;(statearr_11985_11999[2] = tc);
(statearr_11985_11999[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11973 === 10))
{var state_11972__$1 = state_11972;var statearr_11986_12000 = state_11972__$1;(statearr_11986_12000[2] = fc);
(statearr_11986_12000[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11973 === 11))
{var inst_11953 = (state_11972[5]);var inst_11963 = (state_11972[2]);var state_11972__$1 = state_11972;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11972__$1,8,inst_11963,inst_11953);
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
});return ((function (switch__8189__auto__){
return (function() {
var state_machine__8190__auto__ = null;
var state_machine__8190__auto____0 = (function (){var statearr_11988 = (new Array(8));(statearr_11988[0] = state_machine__8190__auto__);
(statearr_11988[1] = 1);
return statearr_11988;
});
var state_machine__8190__auto____1 = (function (state_11972){while(true){
var result__8191__auto__ = switch__8189__auto__.call(null,state_11972);if(cljs.core.keyword_identical_QMARK_.call(null,result__8191__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8191__auto__;
}
break;
}
});
state_machine__8190__auto__ = function(state_11972){
switch(arguments.length){
case 0:
return state_machine__8190__auto____0.call(this);
case 1:
return state_machine__8190__auto____1.call(this,state_11972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8190__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8190__auto____0;
state_machine__8190__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8190__auto____1;
return state_machine__8190__auto__;
})()
;})(switch__8189__auto__))
})();var state__8249__auto__ = (function (){var statearr_11989 = f__8248__auto__.call(null);(statearr_11989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8247__auto___11990);
return statearr_11989;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8249__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__8247__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8248__auto__ = (function (){var switch__8189__auto__ = (function (state_12043){var state_val_12044 = (state_12043[1]);if((state_val_12044 === 7))
{var inst_12039 = (state_12043[2]);var state_12043__$1 = state_12043;var statearr_12045_12057 = state_12043__$1;(statearr_12045_12057[2] = inst_12039);
(statearr_12045_12057[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12044 === 6))
{var inst_12029 = (state_12043[5]);var inst_12032 = (state_12043[6]);var inst_12036 = f.call(null,inst_12029,inst_12032);var inst_12029__$1 = inst_12036;var state_12043__$1 = (function (){var statearr_12046 = state_12043;(statearr_12046[5] = inst_12029__$1);
return statearr_12046;
})();var statearr_12047_12058 = state_12043__$1;(statearr_12047_12058[2] = null);
(statearr_12047_12058[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12044 === 5))
{var inst_12029 = (state_12043[5]);var state_12043__$1 = state_12043;var statearr_12048_12059 = state_12043__$1;(statearr_12048_12059[2] = inst_12029);
(statearr_12048_12059[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12044 === 4))
{var inst_12032 = (state_12043[6]);var inst_12032__$1 = (state_12043[2]);var inst_12033 = (inst_12032__$1 == null);var state_12043__$1 = (function (){var statearr_12049 = state_12043;(statearr_12049[6] = inst_12032__$1);
return statearr_12049;
})();if(cljs.core.truth_(inst_12033))
{var statearr_12050_12060 = state_12043__$1;(statearr_12050_12060[1] = 5);
} else
{var statearr_12051_12061 = state_12043__$1;(statearr_12051_12061[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12044 === 3))
{var inst_12041 = (state_12043[2]);var state_12043__$1 = state_12043;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12043__$1,inst_12041);
} else
{if((state_val_12044 === 2))
{var state_12043__$1 = state_12043;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12043__$1,4,ch);
} else
{if((state_val_12044 === 1))
{var inst_12029 = init;var state_12043__$1 = (function (){var statearr_12052 = state_12043;(statearr_12052[5] = inst_12029);
return statearr_12052;
})();var statearr_12053_12062 = state_12043__$1;(statearr_12053_12062[2] = null);
(statearr_12053_12062[1] = 2);
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
});return ((function (switch__8189__auto__){
return (function() {
var state_machine__8190__auto__ = null;
var state_machine__8190__auto____0 = (function (){var statearr_12055 = (new Array(7));(statearr_12055[0] = state_machine__8190__auto__);
(statearr_12055[1] = 1);
return statearr_12055;
});
var state_machine__8190__auto____1 = (function (state_12043){while(true){
var result__8191__auto__ = switch__8189__auto__.call(null,state_12043);if(cljs.core.keyword_identical_QMARK_.call(null,result__8191__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8191__auto__;
}
break;
}
});
state_machine__8190__auto__ = function(state_12043){
switch(arguments.length){
case 0:
return state_machine__8190__auto____0.call(this);
case 1:
return state_machine__8190__auto____1.call(this,state_12043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8190__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8190__auto____0;
state_machine__8190__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8190__auto____1;
return state_machine__8190__auto__;
})()
;})(switch__8189__auto__))
})();var state__8249__auto__ = (function (){var statearr_12056 = f__8248__auto__.call(null);(statearr_12056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8247__auto__);
return statearr_12056;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8249__auto__);
}));
return c__8247__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__8247__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8248__auto__ = (function (){var switch__8189__auto__ = (function (state_12120){var state_val_12121 = (state_12120[1]);if((state_val_12121 === 1))
{var inst_12100 = cljs.core.seq.call(null,coll);var inst_12101 = inst_12100;var state_12120__$1 = (function (){var statearr_12122 = state_12120;(statearr_12122[5] = inst_12101);
return statearr_12122;
})();var statearr_12123_12137 = state_12120__$1;(statearr_12123_12137[2] = null);
(statearr_12123_12137[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12121 === 2))
{var inst_12101 = (state_12120[5]);var state_12120__$1 = state_12120;if(cljs.core.truth_(inst_12101))
{var statearr_12124_12138 = state_12120__$1;(statearr_12124_12138[1] = 4);
} else
{var statearr_12125_12139 = state_12120__$1;(statearr_12125_12139[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12121 === 3))
{var inst_12118 = (state_12120[2]);var state_12120__$1 = state_12120;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12120__$1,inst_12118);
} else
{if((state_val_12121 === 4))
{var inst_12101 = (state_12120[5]);var inst_12104 = cljs.core.first.call(null,inst_12101);var state_12120__$1 = state_12120;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12120__$1,7,ch,inst_12104);
} else
{if((state_val_12121 === 5))
{var state_12120__$1 = state_12120;if(cljs.core.truth_(close_QMARK_))
{var statearr_12126_12140 = state_12120__$1;(statearr_12126_12140[1] = 8);
} else
{var statearr_12127_12141 = state_12120__$1;(statearr_12127_12141[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12121 === 6))
{var inst_12116 = (state_12120[2]);var state_12120__$1 = state_12120;var statearr_12128_12142 = state_12120__$1;(statearr_12128_12142[2] = inst_12116);
(statearr_12128_12142[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12121 === 7))
{var inst_12101 = (state_12120[5]);var inst_12106 = (state_12120[2]);var inst_12107 = cljs.core.next.call(null,inst_12101);var inst_12101__$1 = inst_12107;var state_12120__$1 = (function (){var statearr_12129 = state_12120;(statearr_12129[6] = inst_12106);
(statearr_12129[5] = inst_12101__$1);
return statearr_12129;
})();var statearr_12130_12143 = state_12120__$1;(statearr_12130_12143[2] = null);
(statearr_12130_12143[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12121 === 8))
{var inst_12111 = cljs.core.async.close_BANG_.call(null,ch);var state_12120__$1 = state_12120;var statearr_12131_12144 = state_12120__$1;(statearr_12131_12144[2] = inst_12111);
(statearr_12131_12144[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12121 === 9))
{var state_12120__$1 = state_12120;var statearr_12132_12145 = state_12120__$1;(statearr_12132_12145[2] = null);
(statearr_12132_12145[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12121 === 10))
{var inst_12114 = (state_12120[2]);var state_12120__$1 = state_12120;var statearr_12133_12146 = state_12120__$1;(statearr_12133_12146[2] = inst_12114);
(statearr_12133_12146[1] = 6);
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
});return ((function (switch__8189__auto__){
return (function() {
var state_machine__8190__auto__ = null;
var state_machine__8190__auto____0 = (function (){var statearr_12135 = (new Array(7));(statearr_12135[0] = state_machine__8190__auto__);
(statearr_12135[1] = 1);
return statearr_12135;
});
var state_machine__8190__auto____1 = (function (state_12120){while(true){
var result__8191__auto__ = switch__8189__auto__.call(null,state_12120);if(cljs.core.keyword_identical_QMARK_.call(null,result__8191__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8191__auto__;
}
break;
}
});
state_machine__8190__auto__ = function(state_12120){
switch(arguments.length){
case 0:
return state_machine__8190__auto____0.call(this);
case 1:
return state_machine__8190__auto____1.call(this,state_12120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8190__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8190__auto____0;
state_machine__8190__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8190__auto____1;
return state_machine__8190__auto__;
})()
;})(switch__8189__auto__))
})();var state__8249__auto__ = (function (){var statearr_12136 = f__8248__auto__.call(null);(statearr_12136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8247__auto__);
return statearr_12136;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8249__auto__);
}));
return c__8247__auto__;
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
{var x__6790__auto__ = (((_ == null))?null:_);return (function (){var or__3943__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6790__auto__)]);if(or__3943__auto__)
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
{var x__6790__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6790__auto__)]);if(or__3943__auto__)
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
{var x__6790__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6790__auto__)]);if(or__3943__auto__)
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
{var x__6790__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6790__auto__)]);if(or__3943__auto__)
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12359 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12359');

/**
* @constructor
*/
cljs.core.async.t12359 = (function (cs,ch,mult,meta12360){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12360 = meta12360;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12359.cljs$lang$type = true;
cljs.core.async.t12359.cljs$lang$ctorStr = "cljs.core.async/t12359";
cljs.core.async.t12359.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6727__auto__,writer__6728__auto__,opt__6729__auto__){return cljs.core._write.call(null,writer__6728__auto__,"cljs.core.async/t12359");
});})(cs))
;
cljs.core.async.t12359.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12359.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12359.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12359.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12359.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12359.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
return self__.ch;
});})(cs))
;
cljs.core.async.t12359.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12361){var self__ = this;
return self__.meta12360;
});})(cs))
;
cljs.core.async.t12359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12361,meta12360__$1){var self__ = this;
return (new cljs.core.async.t12359(self__.cs,self__.ch,self__.mult,meta12360__$1));
});})(cs))
;
cljs.core.async.__GT_t12359 = ((function (cs){
return (function __GT_t12359(cs__$1,ch__$1,mult__$1,meta12360){return (new cljs.core.async.t12359(cs__$1,ch__$1,mult__$1,meta12360));
});})(cs))
;
}
return (new cljs.core.async.t12359(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__8247__auto___12571 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8248__auto__ = (function (){var switch__8189__auto__ = (function (state_12489){var state_val_12490 = (state_12489[1]);if((state_val_12490 === 32))
{try{var inst_12440 = (state_12489[5]);var inst_12364 = (state_12489[6]);var inst_12446 = cljs.core.async.put_BANG_.call(null,inst_12440,inst_12364,done);var state_12489__$1 = state_12489;var statearr_12493_12572 = state_12489__$1;(statearr_12493_12572[2] = inst_12446);
(statearr_12493_12572[1] = 30);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e12491){if((e12491 instanceof Object))
{var ex__8183__auto__ = e12491;var statearr_12492_12573 = state_12489;(statearr_12492_12573[1] = 31);
(statearr_12492_12573[2] = ex__8183__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12491;
} else
{return null;
}
}
}} else
{if((state_val_12490 === 1))
{var state_12489__$1 = state_12489;var statearr_12494_12574 = state_12489__$1;(statearr_12494_12574[2] = null);
(statearr_12494_12574[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12490 === 33))
{var inst_12452 = (state_12489[7]);var inst_12454 = cljs.core.chunked_seq_QMARK_.call(null,inst_12452);var state_12489__$1 = state_12489;if(inst_12454)
{var statearr_12495_12575 = state_12489__$1;(statearr_12495_12575[1] = 36);
} else
{var statearr_12496_12576 = state_12489__$1;(statearr_12496_12576[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12490 === 2))
{var state_12489__$1 = state_12489;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12489__$1,4,ch);
} else
{if((state_val_12490 === 34))
{var state_12489__$1 = state_12489;var statearr_12497_12577 = state_12489__$1;(statearr_12497_12577[2] = null);
(statearr_12497_12577[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12490 === 3))
{var inst_12487 = (state_12489[2]);var state_12489__$1 = state_12489;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12489__$1,inst_12487);
} else
{if((state_val_12490 === 35))
{var inst_12476 = (state_12489[2]);var state_12489__$1 = state_12489;var statearr_12498_12578 = state_12489__$1;(statearr_12498_12578[2] = inst_12476);
(statearr_12498_12578[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12490 === 4))
{var inst_12364 = (state_12489[6]);var inst_12364__$1 = (state_12489[2]);var inst_12365 = (inst_12364__$1 == null);var state_12489__$1 = (function (){var statearr_12499 = state_12489;(statearr_12499[6] = inst_12364__$1);
return statearr_12499;
})();if(cljs.core.truth_(inst_12365))
{var statearr_12500_12579 = state_12489__$1;(statearr_12500_12579[1] = 5);
} else
{var statearr_12501_12580 = state_12489__$1;(statearr_12501_12580[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12490 === 36))
{var inst_12452 = (state_12489[7]);var inst_12456 = cljs.core.chunk_first.call(null,inst_12452);var inst_12457 = cljs.core.chunk_rest.call(null,inst_12452);var inst_12458 = cljs.core.count.call(null,inst_12456);var inst_12432 = inst_12457;var inst_12433 = inst_12456;var inst_12434 = inst_12458;var inst_12435 = 0;var state_12489__$1 = (function (){var statearr_12502 = state_12489;(statearr_12502[8] = inst_12434);
(statearr_12502[9] = inst_12433);
(statearr_12502[10] = inst_12432);
(statearr_12502[11] = inst_12435);
return statearr_12502;
})();var statearr_12503_12581 = state_12489__$1;(statearr_12503_12581[2] = null);
(statearr_12503_12581[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12490 === 5))
{var inst_12371 = cljs.core.deref.call(null,cs);var inst_12372 = cljs.core.seq.call(null,inst_12371);var inst_12373 = inst_12372;var inst_12374 = null;var inst_12375 = 0;var inst_12376 = 0;var state_12489__$1 = (function (){var statearr_12504 = state_12489;(statearr_12504[12] = inst_12376);
(statearr_12504[13] = inst_12374);
(statearr_12504[14] = inst_12375);
(statearr_12504[15] = inst_12373);
return statearr_12504;
})();var statearr_12505_12582 = state_12489__$1;(statearr_12505_12582[2] = null);
(statearr_12505_12582[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12490 === 37))
{var inst_12452 = (state_12489[7]);var inst_12461 = cljs.core.first.call(null,inst_12452);var state_12489__$1 = (function (){var statearr_12506 = state_12489;(statearr_12506[16] = inst_12461);
return statearr_12506;
})();var statearr_12507_12583 = state_12489__$1;(statearr_12507_12583[2] = null);
(statearr_12507_12583[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12490 === 6))
{var inst_12423 = cljs.core.deref.call(null,cs);var inst_12424 = cljs.core.keys.call(null,inst_12423);var inst_12425 = cljs.core.count.call(null,inst_12424);var inst_12426 = cljs.core.reset_BANG_.call(null,dctr,inst_12425);var inst_12431 = cljs.core.seq.call(null,inst_12424);var inst_12432 = inst_12431;var inst_12433 = null;var inst_12434 = 0;var inst_12435 = 0;var state_12489__$1 = (function (){var statearr_12508 = state_12489;(statearr_12508[8] = inst_12434);
(statearr_12508[9] = inst_12433);
(statearr_12508[10] = inst_12432);
(statearr_12508[17] = inst_12426);
(statearr_12508[11] = inst_12435);
return statearr_12508;
})();var statearr_12509_12584 = state_12489__$1;(statearr_12509_12584[2] = null);
(statearr_12509_12584[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12490 === 38))
{var inst_12473 = (state_12489[2]);var state_12489__$1 = state_12489;var statearr_12510_12585 = state_12489__$1;(statearr_12510_12585[2] = inst_12473);
(statearr_12510_12585[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12490 === 7))
{var inst_12485 = (state_12489[2]);var state_12489__$1 = state_12489;var statearr_12511_12586 = state_12489__$1;(statearr_12511_12586[2] = inst_12485);
(statearr_12511_12586[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12490 === 39))
{var inst_12452 = (state_12489[7]);var inst_12469 = (state_12489[2]);var inst_12470 = cljs.core.next.call(null,inst_12452);var inst_12432 = inst_12470;var inst_12433 = null;var inst_12434 = 0;var inst_12435 = 0;var state_12489__$1 = (function (){var statearr_12512 = state_12489;(statearr_12512[8] = inst_12434);
(statearr_12512[9] = inst_12433);
(statearr_12512[18] = inst_12469);
(statearr_12512[10] = inst_12432);
(statearr_12512[11] = inst_12435);
return statearr_12512;
})();var statearr_12513_12587 = state_12489__$1;(statearr_12513_12587[2] = null);
(statearr_12513_12587[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12490 === 8))
{var inst_12376 = (state_12489[12]);var inst_12375 = (state_12489[14]);var inst_12378 = (inst_12376 < inst_12375);var inst_12379 = inst_12378;var state_12489__$1 = state_12489;if(cljs.core.truth_(inst_12379))
{var statearr_12514_12588 = state_12489__$1;(statearr_12514_12588[1] = 10);
} else
{var statearr_12515_12589 = state_12489__$1;(statearr_12515_12589[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12490 === 40))
{var inst_12461 = (state_12489[16]);var inst_12462 = (state_12489[2]);var inst_12463 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12464 = cljs.core.async.untap_STAR_.call(null,m,inst_12461);var state_12489__$1 = (function (){var statearr_12516 = state_12489;(statearr_12516[19] = inst_12462);
(statearr_12516[20] = inst_12463);
return statearr_12516;
})();var statearr_12517_12590 = state_12489__$1;(statearr_12517_12590[2] = inst_12464);
(statearr_12517_12590[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12490 === 9))
{var inst_12421 = (state_12489[2]);var state_12489__$1 = state_12489;var statearr_12518_12591 = state_12489__$1;(statearr_12518_12591[2] = inst_12421);
(statearr_12518_12591[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12490 === 41))
{try{var inst_12461 = (state_12489[16]);var inst_12364 = (state_12489[6]);var inst_12467 = cljs.core.async.put_BANG_.call(null,inst_12461,inst_12364,done);var state_12489__$1 = state_12489;var statearr_12521_12592 = state_12489__$1;(statearr_12521_12592[2] = inst_12467);
(statearr_12521_12592[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e12519){if((e12519 instanceof Object))
{var ex__8183__auto__ = e12519;var statearr_12520_12593 = state_12489;(statearr_12520_12593[1] = 40);
(statearr_12520_12593[2] = ex__8183__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12519;
} else
{return null;
}
}
}} else
{if((state_val_12490 === 10))
{var inst_12376 = (state_12489[12]);var inst_12374 = (state_12489[13]);var inst_12382 = cljs.core._nth.call(null,inst_12374,inst_12376);var inst_12383 = cljs.core.nth.call(null,inst_12382,0,null);var inst_12384 = cljs.core.nth.call(null,inst_12382,1,null);var state_12489__$1 = (function (){var statearr_12522 = state_12489;(statearr_12522[21] = inst_12383);
return statearr_12522;
})();if(cljs.core.truth_(inst_12384))
{var statearr_12523_12594 = state_12489__$1;(statearr_12523_12594[1] = 13);
} else
{var statearr_12524_12595 = state_12489__$1;(statearr_12524_12595[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12490 === 42))
{var inst_12482 = (state_12489[2]);var state_12489__$1 = (function (){var statearr_12525 = state_12489;(statearr_12525[22] = inst_12482);
return statearr_12525;
})();var statearr_12526_12596 = state_12489__$1;(statearr_12526_12596[2] = null);
(statearr_12526_12596[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12490 === 11))
{var inst_12393 = (state_12489[23]);var inst_12373 = (state_12489[15]);var inst_12393__$1 = cljs.core.seq.call(null,inst_12373);var state_12489__$1 = (function (){var statearr_12527 = state_12489;(statearr_12527[23] = inst_12393__$1);
return statearr_12527;
})();if(inst_12393__$1)
{var statearr_12528_12597 = state_12489__$1;(statearr_12528_12597[1] = 16);
} else
{var statearr_12529_12598 = state_12489__$1;(statearr_12529_12598[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12490 === 12))
{var inst_12419 = (state_12489[2]);var state_12489__$1 = state_12489;var statearr_12530_12599 = state_12489__$1;(statearr_12530_12599[2] = inst_12419);
(statearr_12530_12599[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12490 === 13))
{var inst_12383 = (state_12489[21]);var inst_12386 = cljs.core.async.close_BANG_.call(null,inst_12383);var state_12489__$1 = state_12489;var statearr_12534_12600 = state_12489__$1;(statearr_12534_12600[2] = inst_12386);
(statearr_12534_12600[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12490 === 14))
{var state_12489__$1 = state_12489;var statearr_12535_12601 = state_12489__$1;(statearr_12535_12601[2] = null);
(statearr_12535_12601[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12490 === 15))
{var inst_12376 = (state_12489[12]);var inst_12374 = (state_12489[13]);var inst_12375 = (state_12489[14]);var inst_12373 = (state_12489[15]);var inst_12389 = (state_12489[2]);var inst_12390 = (inst_12376 + 1);var tmp12531 = inst_12374;var tmp12532 = inst_12375;var tmp12533 = inst_12373;var inst_12373__$1 = tmp12533;var inst_12374__$1 = tmp12531;var inst_12375__$1 = tmp12532;var inst_12376__$1 = inst_12390;var state_12489__$1 = (function (){var statearr_12536 = state_12489;(statearr_12536[24] = inst_12389);
(statearr_12536[12] = inst_12376__$1);
(statearr_12536[13] = inst_12374__$1);
(statearr_12536[14] = inst_12375__$1);
(statearr_12536[15] = inst_12373__$1);
return statearr_12536;
})();var statearr_12537_12602 = state_12489__$1;(statearr_12537_12602[2] = null);
(statearr_12537_12602[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12490 === 16))
{var inst_12393 = (state_12489[23]);var inst_12395 = cljs.core.chunked_seq_QMARK_.call(null,inst_12393);var state_12489__$1 = state_12489;if(inst_12395)
{var statearr_12538_12603 = state_12489__$1;(statearr_12538_12603[1] = 19);
} else
{var statearr_12539_12604 = state_12489__$1;(statearr_12539_12604[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12490 === 17))
{var state_12489__$1 = state_12489;var statearr_12540_12605 = state_12489__$1;(statearr_12540_12605[2] = null);
(statearr_12540_12605[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12490 === 18))
{var inst_12417 = (state_12489[2]);var state_12489__$1 = state_12489;var statearr_12541_12606 = state_12489__$1;(statearr_12541_12606[2] = inst_12417);
(statearr_12541_12606[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12490 === 19))
{var inst_12393 = (state_12489[23]);var inst_12397 = cljs.core.chunk_first.call(null,inst_12393);var inst_12398 = cljs.core.chunk_rest.call(null,inst_12393);var inst_12399 = cljs.core.count.call(null,inst_12397);var inst_12373 = inst_12398;var inst_12374 = inst_12397;var inst_12375 = inst_12399;var inst_12376 = 0;var state_12489__$1 = (function (){var statearr_12542 = state_12489;(statearr_12542[12] = inst_12376);
(statearr_12542[13] = inst_12374);
(statearr_12542[14] = inst_12375);
(statearr_12542[15] = inst_12373);
return statearr_12542;
})();var statearr_12543_12607 = state_12489__$1;(statearr_12543_12607[2] = null);
(statearr_12543_12607[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12490 === 20))
{var inst_12393 = (state_12489[23]);var inst_12403 = cljs.core.first.call(null,inst_12393);var inst_12404 = cljs.core.nth.call(null,inst_12403,0,null);var inst_12405 = cljs.core.nth.call(null,inst_12403,1,null);var state_12489__$1 = (function (){var statearr_12544 = state_12489;(statearr_12544[25] = inst_12404);
return statearr_12544;
})();if(cljs.core.truth_(inst_12405))
{var statearr_12545_12608 = state_12489__$1;(statearr_12545_12608[1] = 22);
} else
{var statearr_12546_12609 = state_12489__$1;(statearr_12546_12609[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12490 === 21))
{var inst_12414 = (state_12489[2]);var state_12489__$1 = state_12489;var statearr_12547_12610 = state_12489__$1;(statearr_12547_12610[2] = inst_12414);
(statearr_12547_12610[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12490 === 22))
{var inst_12404 = (state_12489[25]);var inst_12407 = cljs.core.async.close_BANG_.call(null,inst_12404);var state_12489__$1 = state_12489;var statearr_12548_12611 = state_12489__$1;(statearr_12548_12611[2] = inst_12407);
(statearr_12548_12611[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12490 === 23))
{var state_12489__$1 = state_12489;var statearr_12549_12612 = state_12489__$1;(statearr_12549_12612[2] = null);
(statearr_12549_12612[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12490 === 24))
{var inst_12393 = (state_12489[23]);var inst_12410 = (state_12489[2]);var inst_12411 = cljs.core.next.call(null,inst_12393);var inst_12373 = inst_12411;var inst_12374 = null;var inst_12375 = 0;var inst_12376 = 0;var state_12489__$1 = (function (){var statearr_12550 = state_12489;(statearr_12550[26] = inst_12410);
(statearr_12550[12] = inst_12376);
(statearr_12550[13] = inst_12374);
(statearr_12550[14] = inst_12375);
(statearr_12550[15] = inst_12373);
return statearr_12550;
})();var statearr_12551_12613 = state_12489__$1;(statearr_12551_12613[2] = null);
(statearr_12551_12613[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12490 === 25))
{var inst_12434 = (state_12489[8]);var inst_12435 = (state_12489[11]);var inst_12437 = (inst_12435 < inst_12434);var inst_12438 = inst_12437;var state_12489__$1 = state_12489;if(cljs.core.truth_(inst_12438))
{var statearr_12552_12614 = state_12489__$1;(statearr_12552_12614[1] = 27);
} else
{var statearr_12553_12615 = state_12489__$1;(statearr_12553_12615[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12490 === 26))
{var inst_12480 = (state_12489[2]);var state_12489__$1 = (function (){var statearr_12554 = state_12489;(statearr_12554[27] = inst_12480);
return statearr_12554;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12489__$1,42,dchan);
} else
{if((state_val_12490 === 27))
{var inst_12433 = (state_12489[9]);var inst_12435 = (state_12489[11]);var inst_12440 = cljs.core._nth.call(null,inst_12433,inst_12435);var state_12489__$1 = (function (){var statearr_12555 = state_12489;(statearr_12555[5] = inst_12440);
return statearr_12555;
})();var statearr_12556_12616 = state_12489__$1;(statearr_12556_12616[2] = null);
(statearr_12556_12616[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12490 === 28))
{var inst_12432 = (state_12489[10]);var inst_12452 = (state_12489[7]);var inst_12452__$1 = cljs.core.seq.call(null,inst_12432);var state_12489__$1 = (function (){var statearr_12560 = state_12489;(statearr_12560[7] = inst_12452__$1);
return statearr_12560;
})();if(inst_12452__$1)
{var statearr_12561_12617 = state_12489__$1;(statearr_12561_12617[1] = 33);
} else
{var statearr_12562_12618 = state_12489__$1;(statearr_12562_12618[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12490 === 29))
{var inst_12478 = (state_12489[2]);var state_12489__$1 = state_12489;var statearr_12563_12619 = state_12489__$1;(statearr_12563_12619[2] = inst_12478);
(statearr_12563_12619[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12490 === 30))
{var inst_12434 = (state_12489[8]);var inst_12433 = (state_12489[9]);var inst_12432 = (state_12489[10]);var inst_12435 = (state_12489[11]);var inst_12448 = (state_12489[2]);var inst_12449 = (inst_12435 + 1);var tmp12557 = inst_12434;var tmp12558 = inst_12433;var tmp12559 = inst_12432;var inst_12432__$1 = tmp12559;var inst_12433__$1 = tmp12558;var inst_12434__$1 = tmp12557;var inst_12435__$1 = inst_12449;var state_12489__$1 = (function (){var statearr_12564 = state_12489;(statearr_12564[8] = inst_12434__$1);
(statearr_12564[9] = inst_12433__$1);
(statearr_12564[10] = inst_12432__$1);
(statearr_12564[28] = inst_12448);
(statearr_12564[11] = inst_12435__$1);
return statearr_12564;
})();var statearr_12565_12620 = state_12489__$1;(statearr_12565_12620[2] = null);
(statearr_12565_12620[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12490 === 31))
{var inst_12440 = (state_12489[5]);var inst_12441 = (state_12489[2]);var inst_12442 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12443 = cljs.core.async.untap_STAR_.call(null,m,inst_12440);var state_12489__$1 = (function (){var statearr_12566 = state_12489;(statearr_12566[29] = inst_12441);
(statearr_12566[30] = inst_12442);
return statearr_12566;
})();var statearr_12567_12621 = state_12489__$1;(statearr_12567_12621[2] = inst_12443);
(statearr_12567_12621[1] = 30);
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
});return ((function (switch__8189__auto__){
return (function() {
var state_machine__8190__auto__ = null;
var state_machine__8190__auto____0 = (function (){var statearr_12569 = (new Array(31));(statearr_12569[0] = state_machine__8190__auto__);
(statearr_12569[1] = 1);
return statearr_12569;
});
var state_machine__8190__auto____1 = (function (state_12489){while(true){
var result__8191__auto__ = switch__8189__auto__.call(null,state_12489);if(cljs.core.keyword_identical_QMARK_.call(null,result__8191__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8191__auto__;
}
break;
}
});
state_machine__8190__auto__ = function(state_12489){
switch(arguments.length){
case 0:
return state_machine__8190__auto____0.call(this);
case 1:
return state_machine__8190__auto____1.call(this,state_12489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8190__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8190__auto____0;
state_machine__8190__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8190__auto____1;
return state_machine__8190__auto__;
})()
;})(switch__8189__auto__))
})();var state__8249__auto__ = (function (){var statearr_12570 = f__8248__auto__.call(null);(statearr_12570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8247__auto___12571);
return statearr_12570;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8249__auto__);
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
{var x__6790__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6790__auto__)]);if(or__3943__auto__)
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
{var x__6790__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6790__auto__)]);if(or__3943__auto__)
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
{var x__6790__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6790__auto__)]);if(or__3943__auto__)
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
{var x__6790__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6790__auto__)]);if(or__3943__auto__)
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
{var x__6790__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6790__auto__)]);if(or__3943__auto__)
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
;var m = (function (){if(typeof cljs.core.async.t12742 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12742');

/**
* @constructor
*/
cljs.core.async.t12742 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta12743){
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
this.meta12743 = meta12743;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12742.cljs$lang$type = true;
cljs.core.async.t12742.cljs$lang$ctorStr = "cljs.core.async/t12742";
cljs.core.async.t12742.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6727__auto__,writer__6728__auto__,opt__6729__auto__){return cljs.core._write.call(null,writer__6728__auto__,"cljs.core.async/t12742");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12742.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12742.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12742.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12742.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12742.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12742.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12742.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12742.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12742.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12744){var self__ = this;
return self__.meta12743;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12744,meta12743__$1){var self__ = this;
return (new cljs.core.async.t12742(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta12743__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12742 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12742(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12743){return (new cljs.core.async.t12742(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12743));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12742(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__8247__auto___12862 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8248__auto__ = (function (){var switch__8189__auto__ = (function (state_12815){var state_val_12816 = (state_12815[1]);if((state_val_12816 === 1))
{var inst_12748 = (state_12815[5]);var inst_12748__$1 = calc_state.call(null);var inst_12749 = cljs.core.seq_QMARK_.call(null,inst_12748__$1);var state_12815__$1 = (function (){var statearr_12817 = state_12815;(statearr_12817[5] = inst_12748__$1);
return statearr_12817;
})();if(inst_12749)
{var statearr_12818_12863 = state_12815__$1;(statearr_12818_12863[1] = 2);
} else
{var statearr_12819_12864 = state_12815__$1;(statearr_12819_12864[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12816 === 2))
{var inst_12748 = (state_12815[5]);var inst_12751 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12748);var state_12815__$1 = state_12815;var statearr_12820_12865 = state_12815__$1;(statearr_12820_12865[2] = inst_12751);
(statearr_12820_12865[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12816 === 3))
{var inst_12748 = (state_12815[5]);var state_12815__$1 = state_12815;var statearr_12821_12866 = state_12815__$1;(statearr_12821_12866[2] = inst_12748);
(statearr_12821_12866[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12816 === 4))
{var inst_12748 = (state_12815[5]);var inst_12754 = (state_12815[2]);var inst_12755 = cljs.core.get.call(null,inst_12754,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12756 = cljs.core.get.call(null,inst_12754,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12757 = cljs.core.get.call(null,inst_12754,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12758 = inst_12748;var state_12815__$1 = (function (){var statearr_12822 = state_12815;(statearr_12822[6] = inst_12758);
(statearr_12822[7] = inst_12755);
(statearr_12822[8] = inst_12756);
(statearr_12822[9] = inst_12757);
return statearr_12822;
})();var statearr_12823_12867 = state_12815__$1;(statearr_12823_12867[2] = null);
(statearr_12823_12867[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12816 === 5))
{var inst_12758 = (state_12815[6]);var inst_12761 = cljs.core.seq_QMARK_.call(null,inst_12758);var state_12815__$1 = state_12815;if(inst_12761)
{var statearr_12824_12868 = state_12815__$1;(statearr_12824_12868[1] = 7);
} else
{var statearr_12825_12869 = state_12815__$1;(statearr_12825_12869[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12816 === 6))
{var inst_12813 = (state_12815[2]);var state_12815__$1 = state_12815;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12815__$1,inst_12813);
} else
{if((state_val_12816 === 7))
{var inst_12758 = (state_12815[6]);var inst_12763 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12758);var state_12815__$1 = state_12815;var statearr_12826_12870 = state_12815__$1;(statearr_12826_12870[2] = inst_12763);
(statearr_12826_12870[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12816 === 8))
{var inst_12758 = (state_12815[6]);var state_12815__$1 = state_12815;var statearr_12827_12871 = state_12815__$1;(statearr_12827_12871[2] = inst_12758);
(statearr_12827_12871[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12816 === 9))
{var inst_12766 = (state_12815[10]);var inst_12766__$1 = (state_12815[2]);var inst_12767 = cljs.core.get.call(null,inst_12766__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12768 = cljs.core.get.call(null,inst_12766__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12769 = cljs.core.get.call(null,inst_12766__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12815__$1 = (function (){var statearr_12828 = state_12815;(statearr_12828[11] = inst_12769);
(statearr_12828[10] = inst_12766__$1);
(statearr_12828[12] = inst_12768);
return statearr_12828;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12815__$1,10,inst_12767);
} else
{if((state_val_12816 === 10))
{var inst_12775 = (state_12815[13]);var inst_12773 = (state_12815[14]);var inst_12772 = (state_12815[2]);var inst_12773__$1 = cljs.core.nth.call(null,inst_12772,0,null);var inst_12774 = cljs.core.nth.call(null,inst_12772,1,null);var inst_12775__$1 = (inst_12773__$1 == null);var state_12815__$1 = (function (){var statearr_12829 = state_12815;(statearr_12829[13] = inst_12775__$1);
(statearr_12829[15] = inst_12774);
(statearr_12829[14] = inst_12773__$1);
return statearr_12829;
})();if(cljs.core.truth_(inst_12775__$1))
{var statearr_12830_12872 = state_12815__$1;(statearr_12830_12872[1] = 11);
} else
{var statearr_12831_12873 = state_12815__$1;(statearr_12831_12873[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12816 === 11))
{var inst_12775 = (state_12815[13]);var state_12815__$1 = state_12815;var statearr_12832_12874 = state_12815__$1;(statearr_12832_12874[2] = inst_12775);
(statearr_12832_12874[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12816 === 12))
{var inst_12774 = (state_12815[15]);var inst_12778 = cljs.core._EQ_.call(null,inst_12774,change);var state_12815__$1 = state_12815;var statearr_12833_12875 = state_12815__$1;(statearr_12833_12875[2] = inst_12778);
(statearr_12833_12875[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12816 === 13))
{var inst_12780 = (state_12815[2]);var state_12815__$1 = state_12815;if(cljs.core.truth_(inst_12780))
{var statearr_12834_12876 = state_12815__$1;(statearr_12834_12876[1] = 14);
} else
{var statearr_12835_12877 = state_12815__$1;(statearr_12835_12877[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12816 === 14))
{var inst_12773 = (state_12815[14]);var inst_12782 = (inst_12773 == null);var state_12815__$1 = state_12815;if(cljs.core.truth_(inst_12782))
{var statearr_12836_12878 = state_12815__$1;(statearr_12836_12878[1] = 17);
} else
{var statearr_12837_12879 = state_12815__$1;(statearr_12837_12879[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12816 === 15))
{var inst_12769 = (state_12815[11]);var inst_12791 = (state_12815[16]);var inst_12774 = (state_12815[15]);var inst_12791__$1 = inst_12769.call(null,inst_12774);var state_12815__$1 = (function (){var statearr_12838 = state_12815;(statearr_12838[16] = inst_12791__$1);
return statearr_12838;
})();if(cljs.core.truth_(inst_12791__$1))
{var statearr_12839_12880 = state_12815__$1;(statearr_12839_12880[1] = 20);
} else
{var statearr_12840_12881 = state_12815__$1;(statearr_12840_12881[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12816 === 16))
{var inst_12811 = (state_12815[2]);var state_12815__$1 = state_12815;var statearr_12841_12882 = state_12815__$1;(statearr_12841_12882[2] = inst_12811);
(statearr_12841_12882[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12816 === 17))
{var inst_12774 = (state_12815[15]);var inst_12784 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12774);var state_12815__$1 = state_12815;var statearr_12842_12883 = state_12815__$1;(statearr_12842_12883[2] = inst_12784);
(statearr_12842_12883[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12816 === 18))
{var state_12815__$1 = state_12815;var statearr_12843_12884 = state_12815__$1;(statearr_12843_12884[2] = null);
(statearr_12843_12884[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12816 === 19))
{var inst_12787 = (state_12815[2]);var inst_12788 = calc_state.call(null);var inst_12758 = inst_12788;var state_12815__$1 = (function (){var statearr_12844 = state_12815;(statearr_12844[6] = inst_12758);
(statearr_12844[17] = inst_12787);
return statearr_12844;
})();var statearr_12845_12885 = state_12815__$1;(statearr_12845_12885[2] = null);
(statearr_12845_12885[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12816 === 20))
{var inst_12791 = (state_12815[16]);var state_12815__$1 = state_12815;var statearr_12846_12886 = state_12815__$1;(statearr_12846_12886[2] = inst_12791);
(statearr_12846_12886[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12816 === 21))
{var inst_12794 = (state_12815[18]);var inst_12769 = (state_12815[11]);var inst_12794__$1 = cljs.core.empty_QMARK_.call(null,inst_12769);var state_12815__$1 = (function (){var statearr_12847 = state_12815;(statearr_12847[18] = inst_12794__$1);
return statearr_12847;
})();if(inst_12794__$1)
{var statearr_12848_12887 = state_12815__$1;(statearr_12848_12887[1] = 23);
} else
{var statearr_12849_12888 = state_12815__$1;(statearr_12849_12888[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12816 === 22))
{var inst_12802 = (state_12815[2]);var state_12815__$1 = state_12815;if(cljs.core.truth_(inst_12802))
{var statearr_12850_12889 = state_12815__$1;(statearr_12850_12889[1] = 26);
} else
{var statearr_12851_12890 = state_12815__$1;(statearr_12851_12890[1] = 27);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12816 === 23))
{var inst_12774 = (state_12815[15]);var inst_12768 = (state_12815[12]);var inst_12796 = inst_12768.call(null,inst_12774);var inst_12797 = cljs.core.not.call(null,inst_12796);var state_12815__$1 = state_12815;var statearr_12852_12891 = state_12815__$1;(statearr_12852_12891[2] = inst_12797);
(statearr_12852_12891[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12816 === 24))
{var inst_12794 = (state_12815[18]);var state_12815__$1 = state_12815;var statearr_12853_12892 = state_12815__$1;(statearr_12853_12892[2] = inst_12794);
(statearr_12853_12892[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12816 === 25))
{var inst_12800 = (state_12815[2]);var state_12815__$1 = state_12815;var statearr_12854_12893 = state_12815__$1;(statearr_12854_12893[2] = inst_12800);
(statearr_12854_12893[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12816 === 26))
{var inst_12773 = (state_12815[14]);var state_12815__$1 = state_12815;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12815__$1,29,out,inst_12773);
} else
{if((state_val_12816 === 27))
{var state_12815__$1 = state_12815;var statearr_12855_12894 = state_12815__$1;(statearr_12855_12894[2] = null);
(statearr_12855_12894[1] = 28);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12816 === 28))
{var inst_12766 = (state_12815[10]);var inst_12808 = (state_12815[2]);var inst_12758 = inst_12766;var state_12815__$1 = (function (){var statearr_12856 = state_12815;(statearr_12856[6] = inst_12758);
(statearr_12856[19] = inst_12808);
return statearr_12856;
})();var statearr_12857_12895 = state_12815__$1;(statearr_12857_12895[2] = null);
(statearr_12857_12895[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12816 === 29))
{var inst_12805 = (state_12815[2]);var state_12815__$1 = state_12815;var statearr_12858_12896 = state_12815__$1;(statearr_12858_12896[2] = inst_12805);
(statearr_12858_12896[1] = 28);
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
});return ((function (switch__8189__auto__){
return (function() {
var state_machine__8190__auto__ = null;
var state_machine__8190__auto____0 = (function (){var statearr_12860 = (new Array(20));(statearr_12860[0] = state_machine__8190__auto__);
(statearr_12860[1] = 1);
return statearr_12860;
});
var state_machine__8190__auto____1 = (function (state_12815){while(true){
var result__8191__auto__ = switch__8189__auto__.call(null,state_12815);if(cljs.core.keyword_identical_QMARK_.call(null,result__8191__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8191__auto__;
}
break;
}
});
state_machine__8190__auto__ = function(state_12815){
switch(arguments.length){
case 0:
return state_machine__8190__auto____0.call(this);
case 1:
return state_machine__8190__auto____1.call(this,state_12815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8190__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8190__auto____0;
state_machine__8190__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8190__auto____1;
return state_machine__8190__auto__;
})()
;})(switch__8189__auto__))
})();var state__8249__auto__ = (function (){var statearr_12861 = f__8248__auto__.call(null);(statearr_12861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8247__auto___12862);
return statearr_12861;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8249__auto__);
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
{var x__6790__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6790__auto__)]);if(or__3943__auto__)
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
{var x__6790__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6790__auto__)]);if(or__3943__auto__)
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
{var x__6790__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6790__auto__)]);if(or__3943__auto__)
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
{var x__6790__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6790__auto__)]);if(or__3943__auto__)
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
return (function (p1__12897_SHARP_){if(cljs.core.truth_(p1__12897_SHARP_.call(null,topic)))
{return p1__12897_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12897_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3943__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13021 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t13021');

/**
* @constructor
*/
cljs.core.async.t13021 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13022){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13022 = meta13022;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13021.cljs$lang$type = true;
cljs.core.async.t13021.cljs$lang$ctorStr = "cljs.core.async/t13021";
cljs.core.async.t13021.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6727__auto__,writer__6728__auto__,opt__6729__auto__){return cljs.core._write.call(null,writer__6728__auto__,"cljs.core.async/t13021");
});})(mults,ensure_mult))
;
cljs.core.async.t13021.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13021.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13021.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13021.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13021.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13021.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13021.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13021.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13023){var self__ = this;
return self__.meta13022;
});})(mults,ensure_mult))
;
cljs.core.async.t13021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13023,meta13022__$1){var self__ = this;
return (new cljs.core.async.t13021(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13022__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13021 = ((function (mults,ensure_mult){
return (function __GT_t13021(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13022){return (new cljs.core.async.t13021(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13022));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13021(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__8247__auto___13144 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8248__auto__ = (function (){var switch__8189__auto__ = (function (state_13096){var state_val_13097 = (state_13096[1]);if((state_val_13097 === 1))
{var state_13096__$1 = state_13096;var statearr_13098_13145 = state_13096__$1;(statearr_13098_13145[2] = null);
(statearr_13098_13145[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13097 === 2))
{var state_13096__$1 = state_13096;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13096__$1,4,ch);
} else
{if((state_val_13097 === 3))
{var inst_13094 = (state_13096[2]);var state_13096__$1 = state_13096;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13096__$1,inst_13094);
} else
{if((state_val_13097 === 4))
{var inst_13026 = (state_13096[5]);var inst_13026__$1 = (state_13096[2]);var inst_13027 = (inst_13026__$1 == null);var state_13096__$1 = (function (){var statearr_13099 = state_13096;(statearr_13099[5] = inst_13026__$1);
return statearr_13099;
})();if(cljs.core.truth_(inst_13027))
{var statearr_13100_13146 = state_13096__$1;(statearr_13100_13146[1] = 5);
} else
{var statearr_13101_13147 = state_13096__$1;(statearr_13101_13147[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13097 === 5))
{var inst_13033 = cljs.core.deref.call(null,mults);var inst_13034 = cljs.core.vals.call(null,inst_13033);var inst_13035 = cljs.core.seq.call(null,inst_13034);var inst_13036 = inst_13035;var inst_13037 = null;var inst_13038 = 0;var inst_13039 = 0;var state_13096__$1 = (function (){var statearr_13102 = state_13096;(statearr_13102[6] = inst_13039);
(statearr_13102[7] = inst_13038);
(statearr_13102[8] = inst_13037);
(statearr_13102[9] = inst_13036);
return statearr_13102;
})();var statearr_13103_13148 = state_13096__$1;(statearr_13103_13148[2] = null);
(statearr_13103_13148[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13097 === 6))
{var inst_13076 = (state_13096[10]);var inst_13074 = (state_13096[11]);var inst_13026 = (state_13096[5]);var inst_13074__$1 = topic_fn.call(null,inst_13026);var inst_13075 = cljs.core.deref.call(null,mults);var inst_13076__$1 = cljs.core.get.call(null,inst_13075,inst_13074__$1);var state_13096__$1 = (function (){var statearr_13104 = state_13096;(statearr_13104[10] = inst_13076__$1);
(statearr_13104[11] = inst_13074__$1);
return statearr_13104;
})();if(cljs.core.truth_(inst_13076__$1))
{var statearr_13105_13149 = state_13096__$1;(statearr_13105_13149[1] = 19);
} else
{var statearr_13106_13150 = state_13096__$1;(statearr_13106_13150[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13097 === 7))
{var inst_13092 = (state_13096[2]);var state_13096__$1 = state_13096;var statearr_13107_13151 = state_13096__$1;(statearr_13107_13151[2] = inst_13092);
(statearr_13107_13151[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13097 === 8))
{var inst_13039 = (state_13096[6]);var inst_13038 = (state_13096[7]);var inst_13041 = (inst_13039 < inst_13038);var inst_13042 = inst_13041;var state_13096__$1 = state_13096;if(cljs.core.truth_(inst_13042))
{var statearr_13111_13152 = state_13096__$1;(statearr_13111_13152[1] = 10);
} else
{var statearr_13112_13153 = state_13096__$1;(statearr_13112_13153[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13097 === 9))
{var inst_13072 = (state_13096[2]);var state_13096__$1 = state_13096;var statearr_13113_13154 = state_13096__$1;(statearr_13113_13154[2] = inst_13072);
(statearr_13113_13154[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13097 === 10))
{var inst_13039 = (state_13096[6]);var inst_13038 = (state_13096[7]);var inst_13037 = (state_13096[8]);var inst_13036 = (state_13096[9]);var inst_13044 = cljs.core._nth.call(null,inst_13037,inst_13039);var inst_13045 = cljs.core.async.muxch_STAR_.call(null,inst_13044);var inst_13046 = cljs.core.async.close_BANG_.call(null,inst_13045);var inst_13047 = (inst_13039 + 1);var tmp13108 = inst_13038;var tmp13109 = inst_13037;var tmp13110 = inst_13036;var inst_13036__$1 = tmp13110;var inst_13037__$1 = tmp13109;var inst_13038__$1 = tmp13108;var inst_13039__$1 = inst_13047;var state_13096__$1 = (function (){var statearr_13114 = state_13096;(statearr_13114[12] = inst_13046);
(statearr_13114[6] = inst_13039__$1);
(statearr_13114[7] = inst_13038__$1);
(statearr_13114[8] = inst_13037__$1);
(statearr_13114[9] = inst_13036__$1);
return statearr_13114;
})();var statearr_13115_13155 = state_13096__$1;(statearr_13115_13155[2] = null);
(statearr_13115_13155[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13097 === 11))
{var inst_13036 = (state_13096[9]);var inst_13050 = (state_13096[13]);var inst_13050__$1 = cljs.core.seq.call(null,inst_13036);var state_13096__$1 = (function (){var statearr_13116 = state_13096;(statearr_13116[13] = inst_13050__$1);
return statearr_13116;
})();if(inst_13050__$1)
{var statearr_13117_13156 = state_13096__$1;(statearr_13117_13156[1] = 13);
} else
{var statearr_13118_13157 = state_13096__$1;(statearr_13118_13157[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13097 === 12))
{var inst_13070 = (state_13096[2]);var state_13096__$1 = state_13096;var statearr_13119_13158 = state_13096__$1;(statearr_13119_13158[2] = inst_13070);
(statearr_13119_13158[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13097 === 13))
{var inst_13050 = (state_13096[13]);var inst_13052 = cljs.core.chunked_seq_QMARK_.call(null,inst_13050);var state_13096__$1 = state_13096;if(inst_13052)
{var statearr_13120_13159 = state_13096__$1;(statearr_13120_13159[1] = 16);
} else
{var statearr_13121_13160 = state_13096__$1;(statearr_13121_13160[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13097 === 14))
{var state_13096__$1 = state_13096;var statearr_13122_13161 = state_13096__$1;(statearr_13122_13161[2] = null);
(statearr_13122_13161[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13097 === 15))
{var inst_13068 = (state_13096[2]);var state_13096__$1 = state_13096;var statearr_13123_13162 = state_13096__$1;(statearr_13123_13162[2] = inst_13068);
(statearr_13123_13162[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13097 === 16))
{var inst_13050 = (state_13096[13]);var inst_13054 = cljs.core.chunk_first.call(null,inst_13050);var inst_13055 = cljs.core.chunk_rest.call(null,inst_13050);var inst_13056 = cljs.core.count.call(null,inst_13054);var inst_13036 = inst_13055;var inst_13037 = inst_13054;var inst_13038 = inst_13056;var inst_13039 = 0;var state_13096__$1 = (function (){var statearr_13124 = state_13096;(statearr_13124[6] = inst_13039);
(statearr_13124[7] = inst_13038);
(statearr_13124[8] = inst_13037);
(statearr_13124[9] = inst_13036);
return statearr_13124;
})();var statearr_13125_13163 = state_13096__$1;(statearr_13125_13163[2] = null);
(statearr_13125_13163[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13097 === 17))
{var inst_13050 = (state_13096[13]);var inst_13059 = cljs.core.first.call(null,inst_13050);var inst_13060 = cljs.core.async.muxch_STAR_.call(null,inst_13059);var inst_13061 = cljs.core.async.close_BANG_.call(null,inst_13060);var inst_13062 = cljs.core.next.call(null,inst_13050);var inst_13036 = inst_13062;var inst_13037 = null;var inst_13038 = 0;var inst_13039 = 0;var state_13096__$1 = (function (){var statearr_13126 = state_13096;(statearr_13126[6] = inst_13039);
(statearr_13126[7] = inst_13038);
(statearr_13126[8] = inst_13037);
(statearr_13126[9] = inst_13036);
(statearr_13126[14] = inst_13061);
return statearr_13126;
})();var statearr_13127_13164 = state_13096__$1;(statearr_13127_13164[2] = null);
(statearr_13127_13164[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13097 === 18))
{var inst_13065 = (state_13096[2]);var state_13096__$1 = state_13096;var statearr_13128_13165 = state_13096__$1;(statearr_13128_13165[2] = inst_13065);
(statearr_13128_13165[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13097 === 19))
{var state_13096__$1 = state_13096;var statearr_13129_13166 = state_13096__$1;(statearr_13129_13166[2] = null);
(statearr_13129_13166[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13097 === 20))
{var state_13096__$1 = state_13096;var statearr_13130_13167 = state_13096__$1;(statearr_13130_13167[2] = null);
(statearr_13130_13167[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13097 === 21))
{var inst_13089 = (state_13096[2]);var state_13096__$1 = (function (){var statearr_13131 = state_13096;(statearr_13131[15] = inst_13089);
return statearr_13131;
})();var statearr_13132_13168 = state_13096__$1;(statearr_13132_13168[2] = null);
(statearr_13132_13168[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13097 === 22))
{var inst_13086 = (state_13096[2]);var state_13096__$1 = state_13096;var statearr_13133_13169 = state_13096__$1;(statearr_13133_13169[2] = inst_13086);
(statearr_13133_13169[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13097 === 23))
{var inst_13074 = (state_13096[11]);var inst_13078 = (state_13096[2]);var inst_13079 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13074);var state_13096__$1 = (function (){var statearr_13134 = state_13096;(statearr_13134[16] = inst_13078);
return statearr_13134;
})();var statearr_13135_13170 = state_13096__$1;(statearr_13135_13170[2] = inst_13079);
(statearr_13135_13170[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13097 === 24))
{try{var inst_13076 = (state_13096[10]);var inst_13026 = (state_13096[5]);var inst_13082 = cljs.core.async.muxch_STAR_.call(null,inst_13076);var state_13096__$1 = state_13096;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13096__$1,25,inst_13082,inst_13026);
}catch (e13136){if((e13136 instanceof Object))
{var ex__8183__auto__ = e13136;var statearr_13137_13171 = state_13096;(statearr_13137_13171[1] = 23);
(statearr_13137_13171[2] = ex__8183__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13136;
} else
{return null;
}
}
}} else
{if((state_val_13097 === 25))
{try{var inst_13084 = (state_13096[2]);var state_13096__$1 = state_13096;var statearr_13140_13172 = state_13096__$1;(statearr_13140_13172[2] = inst_13084);
(statearr_13140_13172[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e13138){if((e13138 instanceof Object))
{var ex__8183__auto__ = e13138;var statearr_13139_13173 = state_13096;(statearr_13139_13173[1] = 23);
(statearr_13139_13173[2] = ex__8183__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13138;
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
});return ((function (switch__8189__auto__){
return (function() {
var state_machine__8190__auto__ = null;
var state_machine__8190__auto____0 = (function (){var statearr_13142 = (new Array(17));(statearr_13142[0] = state_machine__8190__auto__);
(statearr_13142[1] = 1);
return statearr_13142;
});
var state_machine__8190__auto____1 = (function (state_13096){while(true){
var result__8191__auto__ = switch__8189__auto__.call(null,state_13096);if(cljs.core.keyword_identical_QMARK_.call(null,result__8191__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8191__auto__;
}
break;
}
});
state_machine__8190__auto__ = function(state_13096){
switch(arguments.length){
case 0:
return state_machine__8190__auto____0.call(this);
case 1:
return state_machine__8190__auto____1.call(this,state_13096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8190__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8190__auto____0;
state_machine__8190__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8190__auto____1;
return state_machine__8190__auto__;
})()
;})(switch__8189__auto__))
})();var state__8249__auto__ = (function (){var statearr_13143 = f__8248__auto__.call(null);(statearr_13143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8247__auto___13144);
return statearr_13143;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8249__auto__);
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
,cljs.core.range.call(null,cnt));var c__8247__auto___13304 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8248__auto__ = (function (){var switch__8189__auto__ = (function (state_13276){var state_val_13277 = (state_13276[1]);if((state_val_13277 === 1))
{var state_13276__$1 = state_13276;var statearr_13278_13305 = state_13276__$1;(statearr_13278_13305[2] = null);
(statearr_13278_13305[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13277 === 2))
{var inst_13240 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13241 = 0;var state_13276__$1 = (function (){var statearr_13279 = state_13276;(statearr_13279[5] = inst_13241);
(statearr_13279[6] = inst_13240);
return statearr_13279;
})();var statearr_13280_13306 = state_13276__$1;(statearr_13280_13306[2] = null);
(statearr_13280_13306[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13277 === 3))
{var inst_13274 = (state_13276[2]);var state_13276__$1 = state_13276;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13276__$1,inst_13274);
} else
{if((state_val_13277 === 4))
{var inst_13241 = (state_13276[5]);var inst_13243 = (inst_13241 < cnt);var state_13276__$1 = state_13276;if(cljs.core.truth_(inst_13243))
{var statearr_13281_13307 = state_13276__$1;(statearr_13281_13307[1] = 6);
} else
{var statearr_13282_13308 = state_13276__$1;(statearr_13282_13308[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13277 === 5))
{var inst_13260 = (state_13276[2]);var state_13276__$1 = (function (){var statearr_13283 = state_13276;(statearr_13283[7] = inst_13260);
return statearr_13283;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13276__$1,12,dchan);
} else
{if((state_val_13277 === 6))
{var state_13276__$1 = state_13276;var statearr_13284_13309 = state_13276__$1;(statearr_13284_13309[2] = null);
(statearr_13284_13309[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13277 === 7))
{var state_13276__$1 = state_13276;var statearr_13285_13310 = state_13276__$1;(statearr_13285_13310[2] = null);
(statearr_13285_13310[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13277 === 8))
{var inst_13258 = (state_13276[2]);var state_13276__$1 = state_13276;var statearr_13286_13311 = state_13276__$1;(statearr_13286_13311[2] = inst_13258);
(statearr_13286_13311[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13277 === 9))
{var inst_13241 = (state_13276[5]);var inst_13253 = (state_13276[2]);var inst_13254 = (inst_13241 + 1);var inst_13241__$1 = inst_13254;var state_13276__$1 = (function (){var statearr_13287 = state_13276;(statearr_13287[5] = inst_13241__$1);
(statearr_13287[8] = inst_13253);
return statearr_13287;
})();var statearr_13288_13312 = state_13276__$1;(statearr_13288_13312[2] = null);
(statearr_13288_13312[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13277 === 10))
{var inst_13245 = (state_13276[2]);var inst_13246 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13276__$1 = (function (){var statearr_13289 = state_13276;(statearr_13289[9] = inst_13245);
return statearr_13289;
})();var statearr_13290_13313 = state_13276__$1;(statearr_13290_13313[2] = inst_13246);
(statearr_13290_13313[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13277 === 11))
{try{var inst_13241 = (state_13276[5]);var inst_13249 = chs__$1.call(null,inst_13241);var inst_13250 = done.call(null,inst_13241);var inst_13251 = cljs.core.async.take_BANG_.call(null,inst_13249,inst_13250);var state_13276__$1 = state_13276;var statearr_13293_13314 = state_13276__$1;(statearr_13293_13314[2] = inst_13251);
(statearr_13293_13314[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e13291){if((e13291 instanceof Object))
{var ex__8183__auto__ = e13291;var statearr_13292_13315 = state_13276;(statearr_13292_13315[1] = 10);
(statearr_13292_13315[2] = ex__8183__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13291;
} else
{return null;
}
}
}} else
{if((state_val_13277 === 12))
{var inst_13262 = (state_13276[10]);var inst_13262__$1 = (state_13276[2]);var inst_13263 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13262__$1);var state_13276__$1 = (function (){var statearr_13294 = state_13276;(statearr_13294[10] = inst_13262__$1);
return statearr_13294;
})();if(cljs.core.truth_(inst_13263))
{var statearr_13295_13316 = state_13276__$1;(statearr_13295_13316[1] = 13);
} else
{var statearr_13296_13317 = state_13276__$1;(statearr_13296_13317[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13277 === 13))
{var inst_13265 = cljs.core.async.close_BANG_.call(null,out);var state_13276__$1 = state_13276;var statearr_13297_13318 = state_13276__$1;(statearr_13297_13318[2] = inst_13265);
(statearr_13297_13318[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13277 === 14))
{var inst_13262 = (state_13276[10]);var inst_13267 = cljs.core.apply.call(null,f,inst_13262);var state_13276__$1 = state_13276;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13276__$1,16,out,inst_13267);
} else
{if((state_val_13277 === 15))
{var inst_13272 = (state_13276[2]);var state_13276__$1 = state_13276;var statearr_13298_13319 = state_13276__$1;(statearr_13298_13319[2] = inst_13272);
(statearr_13298_13319[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13277 === 16))
{var inst_13269 = (state_13276[2]);var state_13276__$1 = (function (){var statearr_13299 = state_13276;(statearr_13299[11] = inst_13269);
return statearr_13299;
})();var statearr_13300_13320 = state_13276__$1;(statearr_13300_13320[2] = null);
(statearr_13300_13320[1] = 2);
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
});return ((function (switch__8189__auto__){
return (function() {
var state_machine__8190__auto__ = null;
var state_machine__8190__auto____0 = (function (){var statearr_13302 = (new Array(12));(statearr_13302[0] = state_machine__8190__auto__);
(statearr_13302[1] = 1);
return statearr_13302;
});
var state_machine__8190__auto____1 = (function (state_13276){while(true){
var result__8191__auto__ = switch__8189__auto__.call(null,state_13276);if(cljs.core.keyword_identical_QMARK_.call(null,result__8191__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8191__auto__;
}
break;
}
});
state_machine__8190__auto__ = function(state_13276){
switch(arguments.length){
case 0:
return state_machine__8190__auto____0.call(this);
case 1:
return state_machine__8190__auto____1.call(this,state_13276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8190__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8190__auto____0;
state_machine__8190__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8190__auto____1;
return state_machine__8190__auto__;
})()
;})(switch__8189__auto__))
})();var state__8249__auto__ = (function (){var statearr_13303 = f__8248__auto__.call(null);(statearr_13303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8247__auto___13304);
return statearr_13303;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8249__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8247__auto___13420 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8248__auto__ = (function (){var switch__8189__auto__ = (function (state_13400){var state_val_13401 = (state_13400[1]);if((state_val_13401 === 1))
{var inst_13371 = cljs.core.vec.call(null,chs);var inst_13372 = inst_13371;var state_13400__$1 = (function (){var statearr_13402 = state_13400;(statearr_13402[5] = inst_13372);
return statearr_13402;
})();var statearr_13403_13421 = state_13400__$1;(statearr_13403_13421[2] = null);
(statearr_13403_13421[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13401 === 2))
{var inst_13372 = (state_13400[5]);var inst_13374 = cljs.core.count.call(null,inst_13372);var inst_13375 = (inst_13374 > 0);var state_13400__$1 = state_13400;if(cljs.core.truth_(inst_13375))
{var statearr_13404_13422 = state_13400__$1;(statearr_13404_13422[1] = 4);
} else
{var statearr_13405_13423 = state_13400__$1;(statearr_13405_13423[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13401 === 3))
{var inst_13398 = (state_13400[2]);var state_13400__$1 = state_13400;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13400__$1,inst_13398);
} else
{if((state_val_13401 === 4))
{var inst_13372 = (state_13400[5]);var state_13400__$1 = state_13400;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13400__$1,7,inst_13372);
} else
{if((state_val_13401 === 5))
{var inst_13394 = cljs.core.async.close_BANG_.call(null,out);var state_13400__$1 = state_13400;var statearr_13406_13424 = state_13400__$1;(statearr_13406_13424[2] = inst_13394);
(statearr_13406_13424[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13401 === 6))
{var inst_13396 = (state_13400[2]);var state_13400__$1 = state_13400;var statearr_13407_13425 = state_13400__$1;(statearr_13407_13425[2] = inst_13396);
(statearr_13407_13425[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13401 === 7))
{var inst_13379 = (state_13400[6]);var inst_13380 = (state_13400[7]);var inst_13379__$1 = (state_13400[2]);var inst_13380__$1 = cljs.core.nth.call(null,inst_13379__$1,0,null);var inst_13381 = cljs.core.nth.call(null,inst_13379__$1,1,null);var inst_13382 = (inst_13380__$1 == null);var state_13400__$1 = (function (){var statearr_13408 = state_13400;(statearr_13408[8] = inst_13381);
(statearr_13408[6] = inst_13379__$1);
(statearr_13408[7] = inst_13380__$1);
return statearr_13408;
})();if(cljs.core.truth_(inst_13382))
{var statearr_13409_13426 = state_13400__$1;(statearr_13409_13426[1] = 8);
} else
{var statearr_13410_13427 = state_13400__$1;(statearr_13410_13427[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13401 === 8))
{var inst_13372 = (state_13400[5]);var inst_13381 = (state_13400[8]);var inst_13379 = (state_13400[6]);var inst_13380 = (state_13400[7]);var inst_13384 = (function (){var c = inst_13381;var v = inst_13380;var vec__13377 = inst_13379;var cs = inst_13372;return ((function (c,v,vec__13377,cs,inst_13372,inst_13381,inst_13379,inst_13380,state_val_13401){
return (function (p1__13321_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13321_SHARP_);
});
;})(c,v,vec__13377,cs,inst_13372,inst_13381,inst_13379,inst_13380,state_val_13401))
})();var inst_13385 = cljs.core.filterv.call(null,inst_13384,inst_13372);var inst_13372__$1 = inst_13385;var state_13400__$1 = (function (){var statearr_13411 = state_13400;(statearr_13411[5] = inst_13372__$1);
return statearr_13411;
})();var statearr_13412_13428 = state_13400__$1;(statearr_13412_13428[2] = null);
(statearr_13412_13428[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13401 === 9))
{var inst_13380 = (state_13400[7]);var state_13400__$1 = state_13400;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13400__$1,11,out,inst_13380);
} else
{if((state_val_13401 === 10))
{var inst_13392 = (state_13400[2]);var state_13400__$1 = state_13400;var statearr_13414_13429 = state_13400__$1;(statearr_13414_13429[2] = inst_13392);
(statearr_13414_13429[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13401 === 11))
{var inst_13372 = (state_13400[5]);var inst_13389 = (state_13400[2]);var tmp13413 = inst_13372;var inst_13372__$1 = tmp13413;var state_13400__$1 = (function (){var statearr_13415 = state_13400;(statearr_13415[9] = inst_13389);
(statearr_13415[5] = inst_13372__$1);
return statearr_13415;
})();var statearr_13416_13430 = state_13400__$1;(statearr_13416_13430[2] = null);
(statearr_13416_13430[1] = 2);
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
});return ((function (switch__8189__auto__){
return (function() {
var state_machine__8190__auto__ = null;
var state_machine__8190__auto____0 = (function (){var statearr_13418 = (new Array(10));(statearr_13418[0] = state_machine__8190__auto__);
(statearr_13418[1] = 1);
return statearr_13418;
});
var state_machine__8190__auto____1 = (function (state_13400){while(true){
var result__8191__auto__ = switch__8189__auto__.call(null,state_13400);if(cljs.core.keyword_identical_QMARK_.call(null,result__8191__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8191__auto__;
}
break;
}
});
state_machine__8190__auto__ = function(state_13400){
switch(arguments.length){
case 0:
return state_machine__8190__auto____0.call(this);
case 1:
return state_machine__8190__auto____1.call(this,state_13400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8190__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8190__auto____0;
state_machine__8190__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8190__auto____1;
return state_machine__8190__auto__;
})()
;})(switch__8189__auto__))
})();var state__8249__auto__ = (function (){var statearr_13419 = f__8248__auto__.call(null);(statearr_13419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8247__auto___13420);
return statearr_13419;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8249__auto__);
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
