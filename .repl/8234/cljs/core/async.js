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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11418 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11418');

/**
* @constructor
*/
cljs.core.async.t11418 = (function (f,fn_handler,meta11419){
this.f = f;
this.fn_handler = fn_handler;
this.meta11419 = meta11419;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11418.cljs$lang$type = true;
cljs.core.async.t11418.cljs$lang$ctorStr = "cljs.core.async/t11418";
cljs.core.async.t11418.cljs$lang$ctorPrWriter = (function (this__6747__auto__,writer__6748__auto__,opt__6749__auto__){return cljs.core._write.call(null,writer__6748__auto__,"cljs.core.async/t11418");
});
cljs.core.async.t11418.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11418.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return true;
});
cljs.core.async.t11418.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
return self__.f;
});
cljs.core.async.t11418.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11420){var self__ = this;
return self__.meta11419;
});
cljs.core.async.t11418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11420,meta11419__$1){var self__ = this;
return (new cljs.core.async.t11418(self__.f,self__.fn_handler,meta11419__$1));
});
cljs.core.async.__GT_t11418 = (function __GT_t11418(f__$1,fn_handler__$1,meta11419){return (new cljs.core.async.t11418(f__$1,fn_handler__$1,meta11419));
});
}
return (new cljs.core.async.t11418(f,fn_handler,null));
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
{var val_11421 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11421);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_11421);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__7172__auto___11422 = n;var x_11423 = 0;while(true){
if((x_11423 < n__7172__auto___11422))
{(a[x_11423] = 0);
{
var G__11424 = (x_11423 + 1);
x_11423 = G__11424;
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
var G__11425 = (i + 1);
i = G__11425;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11429 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11429');

/**
* @constructor
*/
cljs.core.async.t11429 = (function (flag,alt_flag,meta11430){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11430 = meta11430;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11429.cljs$lang$type = true;
cljs.core.async.t11429.cljs$lang$ctorStr = "cljs.core.async/t11429";
cljs.core.async.t11429.cljs$lang$ctorPrWriter = (function (this__6747__auto__,writer__6748__auto__,opt__6749__auto__){return cljs.core._write.call(null,writer__6748__auto__,"cljs.core.async/t11429");
});
cljs.core.async.t11429.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11429.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t11429.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t11429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11431){var self__ = this;
return self__.meta11430;
});
cljs.core.async.t11429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11431,meta11430__$1){var self__ = this;
return (new cljs.core.async.t11429(self__.flag,self__.alt_flag,meta11430__$1));
});
cljs.core.async.__GT_t11429 = (function __GT_t11429(flag__$1,alt_flag__$1,meta11430){return (new cljs.core.async.t11429(flag__$1,alt_flag__$1,meta11430));
});
}
return (new cljs.core.async.t11429(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11435 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11435');

/**
* @constructor
*/
cljs.core.async.t11435 = (function (cb,flag,alt_handler,meta11436){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11436 = meta11436;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11435.cljs$lang$type = true;
cljs.core.async.t11435.cljs$lang$ctorStr = "cljs.core.async/t11435";
cljs.core.async.t11435.cljs$lang$ctorPrWriter = (function (this__6747__auto__,writer__6748__auto__,opt__6749__auto__){return cljs.core._write.call(null,writer__6748__auto__,"cljs.core.async/t11435");
});
cljs.core.async.t11435.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11435.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11435.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11437){var self__ = this;
return self__.meta11436;
});
cljs.core.async.t11435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11437,meta11436__$1){var self__ = this;
return (new cljs.core.async.t11435(self__.cb,self__.flag,self__.alt_handler,meta11436__$1));
});
cljs.core.async.__GT_t11435 = (function __GT_t11435(cb__$1,flag__$1,alt_handler__$1,meta11436){return (new cljs.core.async.t11435(cb__$1,flag__$1,alt_handler__$1,meta11436));
});
}
return (new cljs.core.async.t11435(cb,flag,alt_handler,null));
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
return (function (p1__11438_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__11438_SHARP_,port], true));
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
var G__11439 = (i + 1);
i = G__11439;
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
var alts_BANG___delegate = function (ports,p__11440){var map__11442 = p__11440;var map__11442__$1 = ((cljs.core.seq_QMARK_.call(null,map__11442))?cljs.core.apply.call(null,cljs.core.hash_map,map__11442):map__11442);var opts = map__11442__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11440 = null;if (arguments.length > 1) {
  p__11440 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11440);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11443){
var ports = cljs.core.first(arglist__11443);
var p__11440 = cljs.core.rest(arglist__11443);
return alts_BANG___delegate(ports,p__11440);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11451 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11451');

/**
* @constructor
*/
cljs.core.async.t11451 = (function (ch,f,map_LT_,meta11452){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11452 = meta11452;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11451.cljs$lang$type = true;
cljs.core.async.t11451.cljs$lang$ctorStr = "cljs.core.async/t11451";
cljs.core.async.t11451.cljs$lang$ctorPrWriter = (function (this__6747__auto__,writer__6748__auto__,opt__6749__auto__){return cljs.core._write.call(null,writer__6748__auto__,"cljs.core.async/t11451");
});
cljs.core.async.t11451.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11451.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11451.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11451.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11454 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11454');

/**
* @constructor
*/
cljs.core.async.t11454 = (function (fn1,_,meta11452,ch,f,map_LT_,meta11455){
this.fn1 = fn1;
this._ = _;
this.meta11452 = meta11452;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11455 = meta11455;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11454.cljs$lang$type = true;
cljs.core.async.t11454.cljs$lang$ctorStr = "cljs.core.async/t11454";
cljs.core.async.t11454.cljs$lang$ctorPrWriter = (function (this__6747__auto__,writer__6748__auto__,opt__6749__auto__){return cljs.core._write.call(null,writer__6748__auto__,"cljs.core.async/t11454");
});
cljs.core.async.t11454.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11454.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$2){var self__ = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t11454.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$2){var self__ = this;
return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t11454.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$2){var self__ = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1){
return (function (p1__11444_SHARP_){return f1.call(null,(((p1__11444_SHARP_ == null))?null:self__.f.call(null,p1__11444_SHARP_)));
});
;})(f1))
});
cljs.core.async.t11454.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11456){var self__ = this;
return self__.meta11455;
});
cljs.core.async.t11454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11456,meta11455__$1){var self__ = this;
return (new cljs.core.async.t11454(self__.fn1,self__._,self__.meta11452,self__.ch,self__.f,self__.map_LT_,meta11455__$1));
});
cljs.core.async.__GT_t11454 = (function __GT_t11454(fn1__$1,___$1,meta11452__$1,ch__$2,f__$2,map_LT___$2,meta11455){return (new cljs.core.async.t11454(fn1__$1,___$1,meta11452__$1,ch__$2,f__$2,map_LT___$2,meta11455));
});
}
return (new cljs.core.async.t11454(fn1,_,self__.meta11452,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t11451.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11451.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11453){var self__ = this;
return self__.meta11452;
});
cljs.core.async.t11451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11453,meta11452__$1){var self__ = this;
return (new cljs.core.async.t11451(self__.ch,self__.f,self__.map_LT_,meta11452__$1));
});
cljs.core.async.__GT_t11451 = (function __GT_t11451(ch__$1,f__$1,map_LT___$1,meta11452){return (new cljs.core.async.t11451(ch__$1,f__$1,map_LT___$1,meta11452));
});
}
return (new cljs.core.async.t11451(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11460 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11460');

/**
* @constructor
*/
cljs.core.async.t11460 = (function (ch,f,map_GT_,meta11461){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11461 = meta11461;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11460.cljs$lang$type = true;
cljs.core.async.t11460.cljs$lang$ctorStr = "cljs.core.async/t11460";
cljs.core.async.t11460.cljs$lang$ctorPrWriter = (function (this__6747__auto__,writer__6748__auto__,opt__6749__auto__){return cljs.core._write.call(null,writer__6748__auto__,"cljs.core.async/t11460");
});
cljs.core.async.t11460.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11460.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11460.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11460.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11460.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11460.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11460.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11462){var self__ = this;
return self__.meta11461;
});
cljs.core.async.t11460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11462,meta11461__$1){var self__ = this;
return (new cljs.core.async.t11460(self__.ch,self__.f,self__.map_GT_,meta11461__$1));
});
cljs.core.async.__GT_t11460 = (function __GT_t11460(ch__$1,f__$1,map_GT___$1,meta11461){return (new cljs.core.async.t11460(ch__$1,f__$1,map_GT___$1,meta11461));
});
}
return (new cljs.core.async.t11460(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11466 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11466');

/**
* @constructor
*/
cljs.core.async.t11466 = (function (ch,p,filter_GT_,meta11467){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11467 = meta11467;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11466.cljs$lang$type = true;
cljs.core.async.t11466.cljs$lang$ctorStr = "cljs.core.async/t11466";
cljs.core.async.t11466.cljs$lang$ctorPrWriter = (function (this__6747__auto__,writer__6748__auto__,opt__6749__auto__){return cljs.core._write.call(null,writer__6748__auto__,"cljs.core.async/t11466");
});
cljs.core.async.t11466.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11466.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11466.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11466.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11466.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11466.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11468){var self__ = this;
return self__.meta11467;
});
cljs.core.async.t11466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11468,meta11467__$1){var self__ = this;
return (new cljs.core.async.t11466(self__.ch,self__.p,self__.filter_GT_,meta11467__$1));
});
cljs.core.async.__GT_t11466 = (function __GT_t11466(ch__$1,p__$1,filter_GT___$1,meta11467){return (new cljs.core.async.t11466(ch__$1,p__$1,filter_GT___$1,meta11467));
});
}
return (new cljs.core.async.t11466(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8256__auto___11543 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8257__auto__ = (function (){var switch__8182__auto__ = (function (state_11526){var state_val_11527 = (state_11526[1]);if((state_val_11527 === 1))
{var state_11526__$1 = state_11526;var statearr_11528_11544 = state_11526__$1;(statearr_11528_11544[2] = null);
(statearr_11528_11544[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11527 === 2))
{var state_11526__$1 = state_11526;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11526__$1,4,ch);
} else
{if((state_val_11527 === 3))
{var inst_11524 = (state_11526[2]);var state_11526__$1 = state_11526;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11526__$1,inst_11524);
} else
{if((state_val_11527 === 4))
{var inst_11508 = (state_11526[5]);var inst_11508__$1 = (state_11526[2]);var inst_11509 = (inst_11508__$1 == null);var state_11526__$1 = (function (){var statearr_11529 = state_11526;(statearr_11529[5] = inst_11508__$1);
return statearr_11529;
})();if(cljs.core.truth_(inst_11509))
{var statearr_11530_11545 = state_11526__$1;(statearr_11530_11545[1] = 5);
} else
{var statearr_11531_11546 = state_11526__$1;(statearr_11531_11546[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11527 === 5))
{var inst_11511 = cljs.core.async.close_BANG_.call(null,out);var state_11526__$1 = state_11526;var statearr_11532_11547 = state_11526__$1;(statearr_11532_11547[2] = inst_11511);
(statearr_11532_11547[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11527 === 6))
{var inst_11508 = (state_11526[5]);var inst_11513 = p.call(null,inst_11508);var state_11526__$1 = state_11526;if(cljs.core.truth_(inst_11513))
{var statearr_11533_11548 = state_11526__$1;(statearr_11533_11548[1] = 8);
} else
{var statearr_11534_11549 = state_11526__$1;(statearr_11534_11549[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11527 === 7))
{var inst_11522 = (state_11526[2]);var state_11526__$1 = state_11526;var statearr_11535_11550 = state_11526__$1;(statearr_11535_11550[2] = inst_11522);
(statearr_11535_11550[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11527 === 8))
{var inst_11508 = (state_11526[5]);var state_11526__$1 = state_11526;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11526__$1,11,out,inst_11508);
} else
{if((state_val_11527 === 9))
{var state_11526__$1 = state_11526;var statearr_11536_11551 = state_11526__$1;(statearr_11536_11551[2] = null);
(statearr_11536_11551[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11527 === 10))
{var inst_11519 = (state_11526[2]);var state_11526__$1 = (function (){var statearr_11537 = state_11526;(statearr_11537[6] = inst_11519);
return statearr_11537;
})();var statearr_11538_11552 = state_11526__$1;(statearr_11538_11552[2] = null);
(statearr_11538_11552[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11527 === 11))
{var inst_11516 = (state_11526[2]);var state_11526__$1 = state_11526;var statearr_11539_11553 = state_11526__$1;(statearr_11539_11553[2] = inst_11516);
(statearr_11539_11553[1] = 10);
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
});return ((function (switch__8182__auto__){
return (function() {
var state_machine__8183__auto__ = null;
var state_machine__8183__auto____0 = (function (){var statearr_11541 = (new Array(7));(statearr_11541[0] = state_machine__8183__auto__);
(statearr_11541[1] = 1);
return statearr_11541;
});
var state_machine__8183__auto____1 = (function (state_11526){while(true){
var result__8184__auto__ = switch__8182__auto__.call(null,state_11526);if(cljs.core.keyword_identical_QMARK_.call(null,result__8184__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8184__auto__;
}
break;
}
});
state_machine__8183__auto__ = function(state_11526){
switch(arguments.length){
case 0:
return state_machine__8183__auto____0.call(this);
case 1:
return state_machine__8183__auto____1.call(this,state_11526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8183__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8183__auto____0;
state_machine__8183__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8183__auto____1;
return state_machine__8183__auto__;
})()
;})(switch__8182__auto__))
})();var state__8258__auto__ = (function (){var statearr_11542 = f__8257__auto__.call(null);(statearr_11542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8256__auto___11543);
return statearr_11542;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8258__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__8256__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8257__auto__ = (function (){var switch__8182__auto__ = (function (state_11701){var state_val_11702 = (state_11701[1]);if((state_val_11702 === 1))
{var state_11701__$1 = state_11701;var statearr_11703_11736 = state_11701__$1;(statearr_11703_11736[2] = null);
(statearr_11703_11736[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11702 === 2))
{var state_11701__$1 = state_11701;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11701__$1,4,in$);
} else
{if((state_val_11702 === 3))
{var inst_11699 = (state_11701[2]);var state_11701__$1 = state_11701;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11701__$1,inst_11699);
} else
{if((state_val_11702 === 4))
{var inst_11647 = (state_11701[5]);var inst_11647__$1 = (state_11701[2]);var inst_11648 = (inst_11647__$1 == null);var state_11701__$1 = (function (){var statearr_11704 = state_11701;(statearr_11704[5] = inst_11647__$1);
return statearr_11704;
})();if(cljs.core.truth_(inst_11648))
{var statearr_11705_11737 = state_11701__$1;(statearr_11705_11737[1] = 5);
} else
{var statearr_11706_11738 = state_11701__$1;(statearr_11706_11738[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11702 === 5))
{var inst_11650 = cljs.core.async.close_BANG_.call(null,out);var state_11701__$1 = state_11701;var statearr_11707_11739 = state_11701__$1;(statearr_11707_11739[2] = inst_11650);
(statearr_11707_11739[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11702 === 6))
{var inst_11647 = (state_11701[5]);var inst_11652 = f.call(null,inst_11647);var inst_11657 = cljs.core.seq.call(null,inst_11652);var inst_11658 = inst_11657;var inst_11659 = null;var inst_11660 = 0;var inst_11661 = 0;var state_11701__$1 = (function (){var statearr_11708 = state_11701;(statearr_11708[6] = inst_11661);
(statearr_11708[7] = inst_11660);
(statearr_11708[8] = inst_11659);
(statearr_11708[9] = inst_11658);
return statearr_11708;
})();var statearr_11709_11740 = state_11701__$1;(statearr_11709_11740[2] = null);
(statearr_11709_11740[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11702 === 7))
{var inst_11697 = (state_11701[2]);var state_11701__$1 = state_11701;var statearr_11710_11741 = state_11701__$1;(statearr_11710_11741[2] = inst_11697);
(statearr_11710_11741[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11702 === 8))
{var inst_11661 = (state_11701[6]);var inst_11660 = (state_11701[7]);var inst_11663 = (inst_11661 < inst_11660);var inst_11664 = inst_11663;var state_11701__$1 = state_11701;if(cljs.core.truth_(inst_11664))
{var statearr_11711_11742 = state_11701__$1;(statearr_11711_11742[1] = 10);
} else
{var statearr_11712_11743 = state_11701__$1;(statearr_11712_11743[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11702 === 9))
{var inst_11694 = (state_11701[2]);var state_11701__$1 = (function (){var statearr_11713 = state_11701;(statearr_11713[10] = inst_11694);
return statearr_11713;
})();var statearr_11714_11744 = state_11701__$1;(statearr_11714_11744[2] = null);
(statearr_11714_11744[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11702 === 10))
{var inst_11661 = (state_11701[6]);var inst_11659 = (state_11701[8]);var inst_11666 = cljs.core._nth.call(null,inst_11659,inst_11661);var state_11701__$1 = state_11701;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11701__$1,13,out,inst_11666);
} else
{if((state_val_11702 === 11))
{var inst_11658 = (state_11701[9]);var inst_11672 = (state_11701[11]);var inst_11672__$1 = cljs.core.seq.call(null,inst_11658);var state_11701__$1 = (function (){var statearr_11718 = state_11701;(statearr_11718[11] = inst_11672__$1);
return statearr_11718;
})();if(inst_11672__$1)
{var statearr_11719_11745 = state_11701__$1;(statearr_11719_11745[1] = 14);
} else
{var statearr_11720_11746 = state_11701__$1;(statearr_11720_11746[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11702 === 12))
{var inst_11692 = (state_11701[2]);var state_11701__$1 = state_11701;var statearr_11721_11747 = state_11701__$1;(statearr_11721_11747[2] = inst_11692);
(statearr_11721_11747[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11702 === 13))
{var inst_11661 = (state_11701[6]);var inst_11660 = (state_11701[7]);var inst_11659 = (state_11701[8]);var inst_11658 = (state_11701[9]);var inst_11668 = (state_11701[2]);var inst_11669 = (inst_11661 + 1);var tmp11715 = inst_11660;var tmp11716 = inst_11659;var tmp11717 = inst_11658;var inst_11658__$1 = tmp11717;var inst_11659__$1 = tmp11716;var inst_11660__$1 = tmp11715;var inst_11661__$1 = inst_11669;var state_11701__$1 = (function (){var statearr_11722 = state_11701;(statearr_11722[6] = inst_11661__$1);
(statearr_11722[7] = inst_11660__$1);
(statearr_11722[8] = inst_11659__$1);
(statearr_11722[9] = inst_11658__$1);
(statearr_11722[12] = inst_11668);
return statearr_11722;
})();var statearr_11723_11748 = state_11701__$1;(statearr_11723_11748[2] = null);
(statearr_11723_11748[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11702 === 14))
{var inst_11672 = (state_11701[11]);var inst_11674 = cljs.core.chunked_seq_QMARK_.call(null,inst_11672);var state_11701__$1 = state_11701;if(inst_11674)
{var statearr_11724_11749 = state_11701__$1;(statearr_11724_11749[1] = 17);
} else
{var statearr_11725_11750 = state_11701__$1;(statearr_11725_11750[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11702 === 15))
{var state_11701__$1 = state_11701;var statearr_11726_11751 = state_11701__$1;(statearr_11726_11751[2] = null);
(statearr_11726_11751[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11702 === 16))
{var inst_11690 = (state_11701[2]);var state_11701__$1 = state_11701;var statearr_11727_11752 = state_11701__$1;(statearr_11727_11752[2] = inst_11690);
(statearr_11727_11752[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11702 === 17))
{var inst_11672 = (state_11701[11]);var inst_11676 = cljs.core.chunk_first.call(null,inst_11672);var inst_11677 = cljs.core.chunk_rest.call(null,inst_11672);var inst_11678 = cljs.core.count.call(null,inst_11676);var inst_11658 = inst_11677;var inst_11659 = inst_11676;var inst_11660 = inst_11678;var inst_11661 = 0;var state_11701__$1 = (function (){var statearr_11728 = state_11701;(statearr_11728[6] = inst_11661);
(statearr_11728[7] = inst_11660);
(statearr_11728[8] = inst_11659);
(statearr_11728[9] = inst_11658);
return statearr_11728;
})();var statearr_11729_11753 = state_11701__$1;(statearr_11729_11753[2] = null);
(statearr_11729_11753[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11702 === 18))
{var inst_11672 = (state_11701[11]);var inst_11681 = cljs.core.first.call(null,inst_11672);var state_11701__$1 = state_11701;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11701__$1,20,out,inst_11681);
} else
{if((state_val_11702 === 19))
{var inst_11687 = (state_11701[2]);var state_11701__$1 = state_11701;var statearr_11730_11754 = state_11701__$1;(statearr_11730_11754[2] = inst_11687);
(statearr_11730_11754[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11702 === 20))
{var inst_11672 = (state_11701[11]);var inst_11683 = (state_11701[2]);var inst_11684 = cljs.core.next.call(null,inst_11672);var inst_11658 = inst_11684;var inst_11659 = null;var inst_11660 = 0;var inst_11661 = 0;var state_11701__$1 = (function (){var statearr_11731 = state_11701;(statearr_11731[6] = inst_11661);
(statearr_11731[7] = inst_11660);
(statearr_11731[13] = inst_11683);
(statearr_11731[8] = inst_11659);
(statearr_11731[9] = inst_11658);
return statearr_11731;
})();var statearr_11732_11755 = state_11701__$1;(statearr_11732_11755[2] = null);
(statearr_11732_11755[1] = 8);
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
});return ((function (switch__8182__auto__){
return (function() {
var state_machine__8183__auto__ = null;
var state_machine__8183__auto____0 = (function (){var statearr_11734 = (new Array(14));(statearr_11734[0] = state_machine__8183__auto__);
(statearr_11734[1] = 1);
return statearr_11734;
});
var state_machine__8183__auto____1 = (function (state_11701){while(true){
var result__8184__auto__ = switch__8182__auto__.call(null,state_11701);if(cljs.core.keyword_identical_QMARK_.call(null,result__8184__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8184__auto__;
}
break;
}
});
state_machine__8183__auto__ = function(state_11701){
switch(arguments.length){
case 0:
return state_machine__8183__auto____0.call(this);
case 1:
return state_machine__8183__auto____1.call(this,state_11701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8183__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8183__auto____0;
state_machine__8183__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8183__auto____1;
return state_machine__8183__auto__;
})()
;})(switch__8182__auto__))
})();var state__8258__auto__ = (function (){var statearr_11735 = f__8257__auto__.call(null);(statearr_11735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8256__auto__);
return statearr_11735;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8258__auto__);
}));
return c__8256__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__8256__auto___11828 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8257__auto__ = (function (){var switch__8182__auto__ = (function (state_11811){var state_val_11812 = (state_11811[1]);if((state_val_11812 === 1))
{var state_11811__$1 = state_11811;var statearr_11813_11829 = state_11811__$1;(statearr_11813_11829[2] = null);
(statearr_11813_11829[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11812 === 2))
{var state_11811__$1 = state_11811;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11811__$1,4,from);
} else
{if((state_val_11812 === 3))
{var inst_11809 = (state_11811[2]);var state_11811__$1 = state_11811;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11811__$1,inst_11809);
} else
{if((state_val_11812 === 4))
{var inst_11794 = (state_11811[5]);var inst_11794__$1 = (state_11811[2]);var inst_11795 = (inst_11794__$1 == null);var state_11811__$1 = (function (){var statearr_11814 = state_11811;(statearr_11814[5] = inst_11794__$1);
return statearr_11814;
})();if(cljs.core.truth_(inst_11795))
{var statearr_11815_11830 = state_11811__$1;(statearr_11815_11830[1] = 5);
} else
{var statearr_11816_11831 = state_11811__$1;(statearr_11816_11831[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11812 === 5))
{var state_11811__$1 = state_11811;if(cljs.core.truth_(close_QMARK_))
{var statearr_11817_11832 = state_11811__$1;(statearr_11817_11832[1] = 8);
} else
{var statearr_11818_11833 = state_11811__$1;(statearr_11818_11833[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11812 === 6))
{var inst_11794 = (state_11811[5]);var state_11811__$1 = state_11811;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11811__$1,11,to,inst_11794);
} else
{if((state_val_11812 === 7))
{var inst_11807 = (state_11811[2]);var state_11811__$1 = state_11811;var statearr_11819_11834 = state_11811__$1;(statearr_11819_11834[2] = inst_11807);
(statearr_11819_11834[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11812 === 8))
{var inst_11798 = cljs.core.async.close_BANG_.call(null,to);var state_11811__$1 = state_11811;var statearr_11820_11835 = state_11811__$1;(statearr_11820_11835[2] = inst_11798);
(statearr_11820_11835[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11812 === 9))
{var state_11811__$1 = state_11811;var statearr_11821_11836 = state_11811__$1;(statearr_11821_11836[2] = null);
(statearr_11821_11836[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11812 === 10))
{var inst_11801 = (state_11811[2]);var state_11811__$1 = state_11811;var statearr_11822_11837 = state_11811__$1;(statearr_11822_11837[2] = inst_11801);
(statearr_11822_11837[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11812 === 11))
{var inst_11804 = (state_11811[2]);var state_11811__$1 = (function (){var statearr_11823 = state_11811;(statearr_11823[6] = inst_11804);
return statearr_11823;
})();var statearr_11824_11838 = state_11811__$1;(statearr_11824_11838[2] = null);
(statearr_11824_11838[1] = 2);
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
});return ((function (switch__8182__auto__){
return (function() {
var state_machine__8183__auto__ = null;
var state_machine__8183__auto____0 = (function (){var statearr_11826 = (new Array(7));(statearr_11826[0] = state_machine__8183__auto__);
(statearr_11826[1] = 1);
return statearr_11826;
});
var state_machine__8183__auto____1 = (function (state_11811){while(true){
var result__8184__auto__ = switch__8182__auto__.call(null,state_11811);if(cljs.core.keyword_identical_QMARK_.call(null,result__8184__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8184__auto__;
}
break;
}
});
state_machine__8183__auto__ = function(state_11811){
switch(arguments.length){
case 0:
return state_machine__8183__auto____0.call(this);
case 1:
return state_machine__8183__auto____1.call(this,state_11811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8183__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8183__auto____0;
state_machine__8183__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8183__auto____1;
return state_machine__8183__auto__;
})()
;})(switch__8182__auto__))
})();var state__8258__auto__ = (function (){var statearr_11827 = f__8257__auto__.call(null);(statearr_11827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8256__auto___11828);
return statearr_11827;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8258__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__8256__auto___11917 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8257__auto__ = (function (){var switch__8182__auto__ = (function (state_11899){var state_val_11900 = (state_11899[1]);if((state_val_11900 === 1))
{var state_11899__$1 = state_11899;var statearr_11901_11918 = state_11899__$1;(statearr_11901_11918[2] = null);
(statearr_11901_11918[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11900 === 2))
{var state_11899__$1 = state_11899;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11899__$1,4,ch);
} else
{if((state_val_11900 === 3))
{var inst_11897 = (state_11899[2]);var state_11899__$1 = state_11899;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11899__$1,inst_11897);
} else
{if((state_val_11900 === 4))
{var inst_11880 = (state_11899[5]);var inst_11880__$1 = (state_11899[2]);var inst_11881 = (inst_11880__$1 == null);var state_11899__$1 = (function (){var statearr_11902 = state_11899;(statearr_11902[5] = inst_11880__$1);
return statearr_11902;
})();if(cljs.core.truth_(inst_11881))
{var statearr_11903_11919 = state_11899__$1;(statearr_11903_11919[1] = 5);
} else
{var statearr_11904_11920 = state_11899__$1;(statearr_11904_11920[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11900 === 5))
{var inst_11883 = cljs.core.async.close_BANG_.call(null,tc);var inst_11884 = cljs.core.async.close_BANG_.call(null,fc);var state_11899__$1 = (function (){var statearr_11905 = state_11899;(statearr_11905[6] = inst_11883);
return statearr_11905;
})();var statearr_11906_11921 = state_11899__$1;(statearr_11906_11921[2] = inst_11884);
(statearr_11906_11921[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11900 === 6))
{var inst_11880 = (state_11899[5]);var inst_11886 = p.call(null,inst_11880);var state_11899__$1 = state_11899;if(cljs.core.truth_(inst_11886))
{var statearr_11907_11922 = state_11899__$1;(statearr_11907_11922[1] = 9);
} else
{var statearr_11908_11923 = state_11899__$1;(statearr_11908_11923[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11900 === 7))
{var inst_11895 = (state_11899[2]);var state_11899__$1 = state_11899;var statearr_11909_11924 = state_11899__$1;(statearr_11909_11924[2] = inst_11895);
(statearr_11909_11924[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11900 === 8))
{var inst_11892 = (state_11899[2]);var state_11899__$1 = (function (){var statearr_11910 = state_11899;(statearr_11910[7] = inst_11892);
return statearr_11910;
})();var statearr_11911_11925 = state_11899__$1;(statearr_11911_11925[2] = null);
(statearr_11911_11925[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11900 === 9))
{var state_11899__$1 = state_11899;var statearr_11912_11926 = state_11899__$1;(statearr_11912_11926[2] = tc);
(statearr_11912_11926[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11900 === 10))
{var state_11899__$1 = state_11899;var statearr_11913_11927 = state_11899__$1;(statearr_11913_11927[2] = fc);
(statearr_11913_11927[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11900 === 11))
{var inst_11880 = (state_11899[5]);var inst_11890 = (state_11899[2]);var state_11899__$1 = state_11899;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11899__$1,8,inst_11890,inst_11880);
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
});return ((function (switch__8182__auto__){
return (function() {
var state_machine__8183__auto__ = null;
var state_machine__8183__auto____0 = (function (){var statearr_11915 = (new Array(8));(statearr_11915[0] = state_machine__8183__auto__);
(statearr_11915[1] = 1);
return statearr_11915;
});
var state_machine__8183__auto____1 = (function (state_11899){while(true){
var result__8184__auto__ = switch__8182__auto__.call(null,state_11899);if(cljs.core.keyword_identical_QMARK_.call(null,result__8184__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8184__auto__;
}
break;
}
});
state_machine__8183__auto__ = function(state_11899){
switch(arguments.length){
case 0:
return state_machine__8183__auto____0.call(this);
case 1:
return state_machine__8183__auto____1.call(this,state_11899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8183__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8183__auto____0;
state_machine__8183__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8183__auto____1;
return state_machine__8183__auto__;
})()
;})(switch__8182__auto__))
})();var state__8258__auto__ = (function (){var statearr_11916 = f__8257__auto__.call(null);(statearr_11916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8256__auto___11917);
return statearr_11916;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8258__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__8256__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8257__auto__ = (function (){var switch__8182__auto__ = (function (state_11970){var state_val_11971 = (state_11970[1]);if((state_val_11971 === 7))
{var inst_11966 = (state_11970[2]);var state_11970__$1 = state_11970;var statearr_11972_11984 = state_11970__$1;(statearr_11972_11984[2] = inst_11966);
(statearr_11972_11984[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11971 === 6))
{var inst_11956 = (state_11970[5]);var inst_11959 = (state_11970[6]);var inst_11963 = f.call(null,inst_11956,inst_11959);var inst_11956__$1 = inst_11963;var state_11970__$1 = (function (){var statearr_11973 = state_11970;(statearr_11973[5] = inst_11956__$1);
return statearr_11973;
})();var statearr_11974_11985 = state_11970__$1;(statearr_11974_11985[2] = null);
(statearr_11974_11985[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11971 === 5))
{var inst_11956 = (state_11970[5]);var state_11970__$1 = state_11970;var statearr_11975_11986 = state_11970__$1;(statearr_11975_11986[2] = inst_11956);
(statearr_11975_11986[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11971 === 4))
{var inst_11959 = (state_11970[6]);var inst_11959__$1 = (state_11970[2]);var inst_11960 = (inst_11959__$1 == null);var state_11970__$1 = (function (){var statearr_11976 = state_11970;(statearr_11976[6] = inst_11959__$1);
return statearr_11976;
})();if(cljs.core.truth_(inst_11960))
{var statearr_11977_11987 = state_11970__$1;(statearr_11977_11987[1] = 5);
} else
{var statearr_11978_11988 = state_11970__$1;(statearr_11978_11988[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11971 === 3))
{var inst_11968 = (state_11970[2]);var state_11970__$1 = state_11970;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11970__$1,inst_11968);
} else
{if((state_val_11971 === 2))
{var state_11970__$1 = state_11970;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11970__$1,4,ch);
} else
{if((state_val_11971 === 1))
{var inst_11956 = init;var state_11970__$1 = (function (){var statearr_11979 = state_11970;(statearr_11979[5] = inst_11956);
return statearr_11979;
})();var statearr_11980_11989 = state_11970__$1;(statearr_11980_11989[2] = null);
(statearr_11980_11989[1] = 2);
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
});return ((function (switch__8182__auto__){
return (function() {
var state_machine__8183__auto__ = null;
var state_machine__8183__auto____0 = (function (){var statearr_11982 = (new Array(7));(statearr_11982[0] = state_machine__8183__auto__);
(statearr_11982[1] = 1);
return statearr_11982;
});
var state_machine__8183__auto____1 = (function (state_11970){while(true){
var result__8184__auto__ = switch__8182__auto__.call(null,state_11970);if(cljs.core.keyword_identical_QMARK_.call(null,result__8184__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8184__auto__;
}
break;
}
});
state_machine__8183__auto__ = function(state_11970){
switch(arguments.length){
case 0:
return state_machine__8183__auto____0.call(this);
case 1:
return state_machine__8183__auto____1.call(this,state_11970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8183__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8183__auto____0;
state_machine__8183__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8183__auto____1;
return state_machine__8183__auto__;
})()
;})(switch__8182__auto__))
})();var state__8258__auto__ = (function (){var statearr_11983 = f__8257__auto__.call(null);(statearr_11983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8256__auto__);
return statearr_11983;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8258__auto__);
}));
return c__8256__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__8256__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8257__auto__ = (function (){var switch__8182__auto__ = (function (state_12047){var state_val_12048 = (state_12047[1]);if((state_val_12048 === 1))
{var inst_12027 = cljs.core.seq.call(null,coll);var inst_12028 = inst_12027;var state_12047__$1 = (function (){var statearr_12049 = state_12047;(statearr_12049[5] = inst_12028);
return statearr_12049;
})();var statearr_12050_12064 = state_12047__$1;(statearr_12050_12064[2] = null);
(statearr_12050_12064[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12048 === 2))
{var inst_12028 = (state_12047[5]);var state_12047__$1 = state_12047;if(cljs.core.truth_(inst_12028))
{var statearr_12051_12065 = state_12047__$1;(statearr_12051_12065[1] = 4);
} else
{var statearr_12052_12066 = state_12047__$1;(statearr_12052_12066[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12048 === 3))
{var inst_12045 = (state_12047[2]);var state_12047__$1 = state_12047;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12047__$1,inst_12045);
} else
{if((state_val_12048 === 4))
{var inst_12028 = (state_12047[5]);var inst_12031 = cljs.core.first.call(null,inst_12028);var state_12047__$1 = state_12047;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12047__$1,7,ch,inst_12031);
} else
{if((state_val_12048 === 5))
{var state_12047__$1 = state_12047;if(cljs.core.truth_(close_QMARK_))
{var statearr_12053_12067 = state_12047__$1;(statearr_12053_12067[1] = 8);
} else
{var statearr_12054_12068 = state_12047__$1;(statearr_12054_12068[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12048 === 6))
{var inst_12043 = (state_12047[2]);var state_12047__$1 = state_12047;var statearr_12055_12069 = state_12047__$1;(statearr_12055_12069[2] = inst_12043);
(statearr_12055_12069[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12048 === 7))
{var inst_12028 = (state_12047[5]);var inst_12033 = (state_12047[2]);var inst_12034 = cljs.core.next.call(null,inst_12028);var inst_12028__$1 = inst_12034;var state_12047__$1 = (function (){var statearr_12056 = state_12047;(statearr_12056[5] = inst_12028__$1);
(statearr_12056[6] = inst_12033);
return statearr_12056;
})();var statearr_12057_12070 = state_12047__$1;(statearr_12057_12070[2] = null);
(statearr_12057_12070[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12048 === 8))
{var inst_12038 = cljs.core.async.close_BANG_.call(null,ch);var state_12047__$1 = state_12047;var statearr_12058_12071 = state_12047__$1;(statearr_12058_12071[2] = inst_12038);
(statearr_12058_12071[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12048 === 9))
{var state_12047__$1 = state_12047;var statearr_12059_12072 = state_12047__$1;(statearr_12059_12072[2] = null);
(statearr_12059_12072[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12048 === 10))
{var inst_12041 = (state_12047[2]);var state_12047__$1 = state_12047;var statearr_12060_12073 = state_12047__$1;(statearr_12060_12073[2] = inst_12041);
(statearr_12060_12073[1] = 6);
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
});return ((function (switch__8182__auto__){
return (function() {
var state_machine__8183__auto__ = null;
var state_machine__8183__auto____0 = (function (){var statearr_12062 = (new Array(7));(statearr_12062[0] = state_machine__8183__auto__);
(statearr_12062[1] = 1);
return statearr_12062;
});
var state_machine__8183__auto____1 = (function (state_12047){while(true){
var result__8184__auto__ = switch__8182__auto__.call(null,state_12047);if(cljs.core.keyword_identical_QMARK_.call(null,result__8184__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8184__auto__;
}
break;
}
});
state_machine__8183__auto__ = function(state_12047){
switch(arguments.length){
case 0:
return state_machine__8183__auto____0.call(this);
case 1:
return state_machine__8183__auto____1.call(this,state_12047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8183__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8183__auto____0;
state_machine__8183__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8183__auto____1;
return state_machine__8183__auto__;
})()
;})(switch__8182__auto__))
})();var state__8258__auto__ = (function (){var statearr_12063 = f__8257__auto__.call(null);(statearr_12063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8256__auto__);
return statearr_12063;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8258__auto__);
}));
return c__8256__auto__;
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
{var x__6832__auto__ = (((_ == null))?null:_);return (function (){var or__3943__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6832__auto__)]);if(or__3943__auto__)
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
{var x__6832__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6832__auto__)]);if(or__3943__auto__)
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
{var x__6832__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6832__auto__)]);if(or__3943__auto__)
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
{var x__6832__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6832__auto__)]);if(or__3943__auto__)
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12286 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12286');

/**
* @constructor
*/
cljs.core.async.t12286 = (function (cs,ch,mult,meta12287){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12287 = meta12287;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12286.cljs$lang$type = true;
cljs.core.async.t12286.cljs$lang$ctorStr = "cljs.core.async/t12286";
cljs.core.async.t12286.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6747__auto__,writer__6748__auto__,opt__6749__auto__){return cljs.core._write.call(null,writer__6748__auto__,"cljs.core.async/t12286");
});})(cs))
;
cljs.core.async.t12286.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12286.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12286.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12286.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12286.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12286.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
return self__.ch;
});})(cs))
;
cljs.core.async.t12286.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12288){var self__ = this;
return self__.meta12287;
});})(cs))
;
cljs.core.async.t12286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12288,meta12287__$1){var self__ = this;
return (new cljs.core.async.t12286(self__.cs,self__.ch,self__.mult,meta12287__$1));
});})(cs))
;
cljs.core.async.__GT_t12286 = ((function (cs){
return (function __GT_t12286(cs__$1,ch__$1,mult__$1,meta12287){return (new cljs.core.async.t12286(cs__$1,ch__$1,mult__$1,meta12287));
});})(cs))
;
}
return (new cljs.core.async.t12286(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__8256__auto___12498 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8257__auto__ = (function (){var switch__8182__auto__ = (function (state_12416){var state_val_12417 = (state_12416[1]);if((state_val_12417 === 32))
{try{var inst_12291 = (state_12416[5]);var inst_12367 = (state_12416[6]);var inst_12373 = cljs.core.async.put_BANG_.call(null,inst_12367,inst_12291,done);var state_12416__$1 = state_12416;var statearr_12420_12499 = state_12416__$1;(statearr_12420_12499[2] = inst_12373);
(statearr_12420_12499[1] = 30);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e12418){if((e12418 instanceof Object))
{var ex__8176__auto__ = e12418;var statearr_12419_12500 = state_12416;(statearr_12419_12500[1] = 31);
(statearr_12419_12500[2] = ex__8176__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12418;
} else
{return null;
}
}
}} else
{if((state_val_12417 === 1))
{var state_12416__$1 = state_12416;var statearr_12421_12501 = state_12416__$1;(statearr_12421_12501[2] = null);
(statearr_12421_12501[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12417 === 33))
{var inst_12379 = (state_12416[7]);var inst_12381 = cljs.core.chunked_seq_QMARK_.call(null,inst_12379);var state_12416__$1 = state_12416;if(inst_12381)
{var statearr_12422_12502 = state_12416__$1;(statearr_12422_12502[1] = 36);
} else
{var statearr_12423_12503 = state_12416__$1;(statearr_12423_12503[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12417 === 2))
{var state_12416__$1 = state_12416;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12416__$1,4,ch);
} else
{if((state_val_12417 === 34))
{var state_12416__$1 = state_12416;var statearr_12424_12504 = state_12416__$1;(statearr_12424_12504[2] = null);
(statearr_12424_12504[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12417 === 3))
{var inst_12414 = (state_12416[2]);var state_12416__$1 = state_12416;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12416__$1,inst_12414);
} else
{if((state_val_12417 === 35))
{var inst_12403 = (state_12416[2]);var state_12416__$1 = state_12416;var statearr_12425_12505 = state_12416__$1;(statearr_12425_12505[2] = inst_12403);
(statearr_12425_12505[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12417 === 4))
{var inst_12291 = (state_12416[5]);var inst_12291__$1 = (state_12416[2]);var inst_12292 = (inst_12291__$1 == null);var state_12416__$1 = (function (){var statearr_12426 = state_12416;(statearr_12426[5] = inst_12291__$1);
return statearr_12426;
})();if(cljs.core.truth_(inst_12292))
{var statearr_12427_12506 = state_12416__$1;(statearr_12427_12506[1] = 5);
} else
{var statearr_12428_12507 = state_12416__$1;(statearr_12428_12507[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12417 === 36))
{var inst_12379 = (state_12416[7]);var inst_12383 = cljs.core.chunk_first.call(null,inst_12379);var inst_12384 = cljs.core.chunk_rest.call(null,inst_12379);var inst_12385 = cljs.core.count.call(null,inst_12383);var inst_12359 = inst_12384;var inst_12360 = inst_12383;var inst_12361 = inst_12385;var inst_12362 = 0;var state_12416__$1 = (function (){var statearr_12429 = state_12416;(statearr_12429[8] = inst_12361);
(statearr_12429[9] = inst_12362);
(statearr_12429[10] = inst_12360);
(statearr_12429[11] = inst_12359);
return statearr_12429;
})();var statearr_12430_12508 = state_12416__$1;(statearr_12430_12508[2] = null);
(statearr_12430_12508[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12417 === 5))
{var inst_12298 = cljs.core.deref.call(null,cs);var inst_12299 = cljs.core.seq.call(null,inst_12298);var inst_12300 = inst_12299;var inst_12301 = null;var inst_12302 = 0;var inst_12303 = 0;var state_12416__$1 = (function (){var statearr_12431 = state_12416;(statearr_12431[12] = inst_12303);
(statearr_12431[13] = inst_12302);
(statearr_12431[14] = inst_12301);
(statearr_12431[15] = inst_12300);
return statearr_12431;
})();var statearr_12432_12509 = state_12416__$1;(statearr_12432_12509[2] = null);
(statearr_12432_12509[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12417 === 37))
{var inst_12379 = (state_12416[7]);var inst_12388 = cljs.core.first.call(null,inst_12379);var state_12416__$1 = (function (){var statearr_12433 = state_12416;(statearr_12433[16] = inst_12388);
return statearr_12433;
})();var statearr_12434_12510 = state_12416__$1;(statearr_12434_12510[2] = null);
(statearr_12434_12510[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12417 === 6))
{var inst_12350 = cljs.core.deref.call(null,cs);var inst_12351 = cljs.core.keys.call(null,inst_12350);var inst_12352 = cljs.core.count.call(null,inst_12351);var inst_12353 = cljs.core.reset_BANG_.call(null,dctr,inst_12352);var inst_12358 = cljs.core.seq.call(null,inst_12351);var inst_12359 = inst_12358;var inst_12360 = null;var inst_12361 = 0;var inst_12362 = 0;var state_12416__$1 = (function (){var statearr_12435 = state_12416;(statearr_12435[17] = inst_12353);
(statearr_12435[8] = inst_12361);
(statearr_12435[9] = inst_12362);
(statearr_12435[10] = inst_12360);
(statearr_12435[11] = inst_12359);
return statearr_12435;
})();var statearr_12436_12511 = state_12416__$1;(statearr_12436_12511[2] = null);
(statearr_12436_12511[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12417 === 38))
{var inst_12400 = (state_12416[2]);var state_12416__$1 = state_12416;var statearr_12437_12512 = state_12416__$1;(statearr_12437_12512[2] = inst_12400);
(statearr_12437_12512[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12417 === 7))
{var inst_12412 = (state_12416[2]);var state_12416__$1 = state_12416;var statearr_12438_12513 = state_12416__$1;(statearr_12438_12513[2] = inst_12412);
(statearr_12438_12513[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12417 === 39))
{var inst_12379 = (state_12416[7]);var inst_12396 = (state_12416[2]);var inst_12397 = cljs.core.next.call(null,inst_12379);var inst_12359 = inst_12397;var inst_12360 = null;var inst_12361 = 0;var inst_12362 = 0;var state_12416__$1 = (function (){var statearr_12439 = state_12416;(statearr_12439[18] = inst_12396);
(statearr_12439[8] = inst_12361);
(statearr_12439[9] = inst_12362);
(statearr_12439[10] = inst_12360);
(statearr_12439[11] = inst_12359);
return statearr_12439;
})();var statearr_12440_12514 = state_12416__$1;(statearr_12440_12514[2] = null);
(statearr_12440_12514[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12417 === 8))
{var inst_12303 = (state_12416[12]);var inst_12302 = (state_12416[13]);var inst_12305 = (inst_12303 < inst_12302);var inst_12306 = inst_12305;var state_12416__$1 = state_12416;if(cljs.core.truth_(inst_12306))
{var statearr_12441_12515 = state_12416__$1;(statearr_12441_12515[1] = 10);
} else
{var statearr_12442_12516 = state_12416__$1;(statearr_12442_12516[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12417 === 40))
{var inst_12388 = (state_12416[16]);var inst_12389 = (state_12416[2]);var inst_12390 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12391 = cljs.core.async.untap_STAR_.call(null,m,inst_12388);var state_12416__$1 = (function (){var statearr_12443 = state_12416;(statearr_12443[19] = inst_12390);
(statearr_12443[20] = inst_12389);
return statearr_12443;
})();var statearr_12444_12517 = state_12416__$1;(statearr_12444_12517[2] = inst_12391);
(statearr_12444_12517[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12417 === 9))
{var inst_12348 = (state_12416[2]);var state_12416__$1 = state_12416;var statearr_12445_12518 = state_12416__$1;(statearr_12445_12518[2] = inst_12348);
(statearr_12445_12518[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12417 === 41))
{try{var inst_12388 = (state_12416[16]);var inst_12291 = (state_12416[5]);var inst_12394 = cljs.core.async.put_BANG_.call(null,inst_12388,inst_12291,done);var state_12416__$1 = state_12416;var statearr_12448_12519 = state_12416__$1;(statearr_12448_12519[2] = inst_12394);
(statearr_12448_12519[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e12446){if((e12446 instanceof Object))
{var ex__8176__auto__ = e12446;var statearr_12447_12520 = state_12416;(statearr_12447_12520[1] = 40);
(statearr_12447_12520[2] = ex__8176__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12446;
} else
{return null;
}
}
}} else
{if((state_val_12417 === 10))
{var inst_12303 = (state_12416[12]);var inst_12301 = (state_12416[14]);var inst_12309 = cljs.core._nth.call(null,inst_12301,inst_12303);var inst_12310 = cljs.core.nth.call(null,inst_12309,0,null);var inst_12311 = cljs.core.nth.call(null,inst_12309,1,null);var state_12416__$1 = (function (){var statearr_12449 = state_12416;(statearr_12449[21] = inst_12310);
return statearr_12449;
})();if(cljs.core.truth_(inst_12311))
{var statearr_12450_12521 = state_12416__$1;(statearr_12450_12521[1] = 13);
} else
{var statearr_12451_12522 = state_12416__$1;(statearr_12451_12522[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12417 === 42))
{var inst_12409 = (state_12416[2]);var state_12416__$1 = (function (){var statearr_12452 = state_12416;(statearr_12452[22] = inst_12409);
return statearr_12452;
})();var statearr_12453_12523 = state_12416__$1;(statearr_12453_12523[2] = null);
(statearr_12453_12523[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12417 === 11))
{var inst_12300 = (state_12416[15]);var inst_12320 = (state_12416[23]);var inst_12320__$1 = cljs.core.seq.call(null,inst_12300);var state_12416__$1 = (function (){var statearr_12454 = state_12416;(statearr_12454[23] = inst_12320__$1);
return statearr_12454;
})();if(inst_12320__$1)
{var statearr_12455_12524 = state_12416__$1;(statearr_12455_12524[1] = 16);
} else
{var statearr_12456_12525 = state_12416__$1;(statearr_12456_12525[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12417 === 12))
{var inst_12346 = (state_12416[2]);var state_12416__$1 = state_12416;var statearr_12457_12526 = state_12416__$1;(statearr_12457_12526[2] = inst_12346);
(statearr_12457_12526[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12417 === 13))
{var inst_12310 = (state_12416[21]);var inst_12313 = cljs.core.async.close_BANG_.call(null,inst_12310);var state_12416__$1 = state_12416;var statearr_12461_12527 = state_12416__$1;(statearr_12461_12527[2] = inst_12313);
(statearr_12461_12527[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12417 === 14))
{var state_12416__$1 = state_12416;var statearr_12462_12528 = state_12416__$1;(statearr_12462_12528[2] = null);
(statearr_12462_12528[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12417 === 15))
{var inst_12303 = (state_12416[12]);var inst_12302 = (state_12416[13]);var inst_12301 = (state_12416[14]);var inst_12300 = (state_12416[15]);var inst_12316 = (state_12416[2]);var inst_12317 = (inst_12303 + 1);var tmp12458 = inst_12302;var tmp12459 = inst_12301;var tmp12460 = inst_12300;var inst_12300__$1 = tmp12460;var inst_12301__$1 = tmp12459;var inst_12302__$1 = tmp12458;var inst_12303__$1 = inst_12317;var state_12416__$1 = (function (){var statearr_12463 = state_12416;(statearr_12463[12] = inst_12303__$1);
(statearr_12463[13] = inst_12302__$1);
(statearr_12463[14] = inst_12301__$1);
(statearr_12463[15] = inst_12300__$1);
(statearr_12463[24] = inst_12316);
return statearr_12463;
})();var statearr_12464_12529 = state_12416__$1;(statearr_12464_12529[2] = null);
(statearr_12464_12529[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12417 === 16))
{var inst_12320 = (state_12416[23]);var inst_12322 = cljs.core.chunked_seq_QMARK_.call(null,inst_12320);var state_12416__$1 = state_12416;if(inst_12322)
{var statearr_12465_12530 = state_12416__$1;(statearr_12465_12530[1] = 19);
} else
{var statearr_12466_12531 = state_12416__$1;(statearr_12466_12531[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12417 === 17))
{var state_12416__$1 = state_12416;var statearr_12467_12532 = state_12416__$1;(statearr_12467_12532[2] = null);
(statearr_12467_12532[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12417 === 18))
{var inst_12344 = (state_12416[2]);var state_12416__$1 = state_12416;var statearr_12468_12533 = state_12416__$1;(statearr_12468_12533[2] = inst_12344);
(statearr_12468_12533[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12417 === 19))
{var inst_12320 = (state_12416[23]);var inst_12324 = cljs.core.chunk_first.call(null,inst_12320);var inst_12325 = cljs.core.chunk_rest.call(null,inst_12320);var inst_12326 = cljs.core.count.call(null,inst_12324);var inst_12300 = inst_12325;var inst_12301 = inst_12324;var inst_12302 = inst_12326;var inst_12303 = 0;var state_12416__$1 = (function (){var statearr_12469 = state_12416;(statearr_12469[12] = inst_12303);
(statearr_12469[13] = inst_12302);
(statearr_12469[14] = inst_12301);
(statearr_12469[15] = inst_12300);
return statearr_12469;
})();var statearr_12470_12534 = state_12416__$1;(statearr_12470_12534[2] = null);
(statearr_12470_12534[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12417 === 20))
{var inst_12320 = (state_12416[23]);var inst_12330 = cljs.core.first.call(null,inst_12320);var inst_12331 = cljs.core.nth.call(null,inst_12330,0,null);var inst_12332 = cljs.core.nth.call(null,inst_12330,1,null);var state_12416__$1 = (function (){var statearr_12471 = state_12416;(statearr_12471[25] = inst_12331);
return statearr_12471;
})();if(cljs.core.truth_(inst_12332))
{var statearr_12472_12535 = state_12416__$1;(statearr_12472_12535[1] = 22);
} else
{var statearr_12473_12536 = state_12416__$1;(statearr_12473_12536[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12417 === 21))
{var inst_12341 = (state_12416[2]);var state_12416__$1 = state_12416;var statearr_12474_12537 = state_12416__$1;(statearr_12474_12537[2] = inst_12341);
(statearr_12474_12537[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12417 === 22))
{var inst_12331 = (state_12416[25]);var inst_12334 = cljs.core.async.close_BANG_.call(null,inst_12331);var state_12416__$1 = state_12416;var statearr_12475_12538 = state_12416__$1;(statearr_12475_12538[2] = inst_12334);
(statearr_12475_12538[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12417 === 23))
{var state_12416__$1 = state_12416;var statearr_12476_12539 = state_12416__$1;(statearr_12476_12539[2] = null);
(statearr_12476_12539[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12417 === 24))
{var inst_12320 = (state_12416[23]);var inst_12337 = (state_12416[2]);var inst_12338 = cljs.core.next.call(null,inst_12320);var inst_12300 = inst_12338;var inst_12301 = null;var inst_12302 = 0;var inst_12303 = 0;var state_12416__$1 = (function (){var statearr_12477 = state_12416;(statearr_12477[12] = inst_12303);
(statearr_12477[13] = inst_12302);
(statearr_12477[26] = inst_12337);
(statearr_12477[14] = inst_12301);
(statearr_12477[15] = inst_12300);
return statearr_12477;
})();var statearr_12478_12540 = state_12416__$1;(statearr_12478_12540[2] = null);
(statearr_12478_12540[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12417 === 25))
{var inst_12361 = (state_12416[8]);var inst_12362 = (state_12416[9]);var inst_12364 = (inst_12362 < inst_12361);var inst_12365 = inst_12364;var state_12416__$1 = state_12416;if(cljs.core.truth_(inst_12365))
{var statearr_12479_12541 = state_12416__$1;(statearr_12479_12541[1] = 27);
} else
{var statearr_12480_12542 = state_12416__$1;(statearr_12480_12542[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12417 === 26))
{var inst_12407 = (state_12416[2]);var state_12416__$1 = (function (){var statearr_12481 = state_12416;(statearr_12481[27] = inst_12407);
return statearr_12481;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12416__$1,42,dchan);
} else
{if((state_val_12417 === 27))
{var inst_12362 = (state_12416[9]);var inst_12360 = (state_12416[10]);var inst_12367 = cljs.core._nth.call(null,inst_12360,inst_12362);var state_12416__$1 = (function (){var statearr_12482 = state_12416;(statearr_12482[6] = inst_12367);
return statearr_12482;
})();var statearr_12483_12543 = state_12416__$1;(statearr_12483_12543[2] = null);
(statearr_12483_12543[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12417 === 28))
{var inst_12379 = (state_12416[7]);var inst_12359 = (state_12416[11]);var inst_12379__$1 = cljs.core.seq.call(null,inst_12359);var state_12416__$1 = (function (){var statearr_12487 = state_12416;(statearr_12487[7] = inst_12379__$1);
return statearr_12487;
})();if(inst_12379__$1)
{var statearr_12488_12544 = state_12416__$1;(statearr_12488_12544[1] = 33);
} else
{var statearr_12489_12545 = state_12416__$1;(statearr_12489_12545[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12417 === 29))
{var inst_12405 = (state_12416[2]);var state_12416__$1 = state_12416;var statearr_12490_12546 = state_12416__$1;(statearr_12490_12546[2] = inst_12405);
(statearr_12490_12546[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12417 === 30))
{var inst_12361 = (state_12416[8]);var inst_12362 = (state_12416[9]);var inst_12360 = (state_12416[10]);var inst_12359 = (state_12416[11]);var inst_12375 = (state_12416[2]);var inst_12376 = (inst_12362 + 1);var tmp12484 = inst_12361;var tmp12485 = inst_12360;var tmp12486 = inst_12359;var inst_12359__$1 = tmp12486;var inst_12360__$1 = tmp12485;var inst_12361__$1 = tmp12484;var inst_12362__$1 = inst_12376;var state_12416__$1 = (function (){var statearr_12491 = state_12416;(statearr_12491[8] = inst_12361__$1);
(statearr_12491[9] = inst_12362__$1);
(statearr_12491[10] = inst_12360__$1);
(statearr_12491[28] = inst_12375);
(statearr_12491[11] = inst_12359__$1);
return statearr_12491;
})();var statearr_12492_12547 = state_12416__$1;(statearr_12492_12547[2] = null);
(statearr_12492_12547[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12417 === 31))
{var inst_12367 = (state_12416[6]);var inst_12368 = (state_12416[2]);var inst_12369 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12370 = cljs.core.async.untap_STAR_.call(null,m,inst_12367);var state_12416__$1 = (function (){var statearr_12493 = state_12416;(statearr_12493[29] = inst_12369);
(statearr_12493[30] = inst_12368);
return statearr_12493;
})();var statearr_12494_12548 = state_12416__$1;(statearr_12494_12548[2] = inst_12370);
(statearr_12494_12548[1] = 30);
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
});return ((function (switch__8182__auto__){
return (function() {
var state_machine__8183__auto__ = null;
var state_machine__8183__auto____0 = (function (){var statearr_12496 = (new Array(31));(statearr_12496[0] = state_machine__8183__auto__);
(statearr_12496[1] = 1);
return statearr_12496;
});
var state_machine__8183__auto____1 = (function (state_12416){while(true){
var result__8184__auto__ = switch__8182__auto__.call(null,state_12416);if(cljs.core.keyword_identical_QMARK_.call(null,result__8184__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8184__auto__;
}
break;
}
});
state_machine__8183__auto__ = function(state_12416){
switch(arguments.length){
case 0:
return state_machine__8183__auto____0.call(this);
case 1:
return state_machine__8183__auto____1.call(this,state_12416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8183__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8183__auto____0;
state_machine__8183__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8183__auto____1;
return state_machine__8183__auto__;
})()
;})(switch__8182__auto__))
})();var state__8258__auto__ = (function (){var statearr_12497 = f__8257__auto__.call(null);(statearr_12497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8256__auto___12498);
return statearr_12497;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8258__auto__);
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
{var x__6832__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6832__auto__)]);if(or__3943__auto__)
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
{var x__6832__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6832__auto__)]);if(or__3943__auto__)
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
{var x__6832__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6832__auto__)]);if(or__3943__auto__)
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
{var x__6832__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6832__auto__)]);if(or__3943__auto__)
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
{var x__6832__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6832__auto__)]);if(or__3943__auto__)
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
;var m = (function (){if(typeof cljs.core.async.t12669 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12669');

/**
* @constructor
*/
cljs.core.async.t12669 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta12670){
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
this.meta12670 = meta12670;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12669.cljs$lang$type = true;
cljs.core.async.t12669.cljs$lang$ctorStr = "cljs.core.async/t12669";
cljs.core.async.t12669.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6747__auto__,writer__6748__auto__,opt__6749__auto__){return cljs.core._write.call(null,writer__6748__auto__,"cljs.core.async/t12669");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12669.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12669.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12669.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12669.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12669.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12669.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12669.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12669.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12669.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12671){var self__ = this;
return self__.meta12670;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12671,meta12670__$1){var self__ = this;
return (new cljs.core.async.t12669(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta12670__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12669 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12669(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12670){return (new cljs.core.async.t12669(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12670));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12669(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__8256__auto___12789 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8257__auto__ = (function (){var switch__8182__auto__ = (function (state_12742){var state_val_12743 = (state_12742[1]);if((state_val_12743 === 1))
{var inst_12675 = (state_12742[5]);var inst_12675__$1 = calc_state.call(null);var inst_12676 = cljs.core.seq_QMARK_.call(null,inst_12675__$1);var state_12742__$1 = (function (){var statearr_12744 = state_12742;(statearr_12744[5] = inst_12675__$1);
return statearr_12744;
})();if(inst_12676)
{var statearr_12745_12790 = state_12742__$1;(statearr_12745_12790[1] = 2);
} else
{var statearr_12746_12791 = state_12742__$1;(statearr_12746_12791[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12743 === 2))
{var inst_12675 = (state_12742[5]);var inst_12678 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12675);var state_12742__$1 = state_12742;var statearr_12747_12792 = state_12742__$1;(statearr_12747_12792[2] = inst_12678);
(statearr_12747_12792[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12743 === 3))
{var inst_12675 = (state_12742[5]);var state_12742__$1 = state_12742;var statearr_12748_12793 = state_12742__$1;(statearr_12748_12793[2] = inst_12675);
(statearr_12748_12793[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12743 === 4))
{var inst_12675 = (state_12742[5]);var inst_12681 = (state_12742[2]);var inst_12682 = cljs.core.get.call(null,inst_12681,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12683 = cljs.core.get.call(null,inst_12681,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12684 = cljs.core.get.call(null,inst_12681,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12685 = inst_12675;var state_12742__$1 = (function (){var statearr_12749 = state_12742;(statearr_12749[6] = inst_12682);
(statearr_12749[7] = inst_12683);
(statearr_12749[8] = inst_12685);
(statearr_12749[9] = inst_12684);
return statearr_12749;
})();var statearr_12750_12794 = state_12742__$1;(statearr_12750_12794[2] = null);
(statearr_12750_12794[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12743 === 5))
{var inst_12685 = (state_12742[8]);var inst_12688 = cljs.core.seq_QMARK_.call(null,inst_12685);var state_12742__$1 = state_12742;if(inst_12688)
{var statearr_12751_12795 = state_12742__$1;(statearr_12751_12795[1] = 7);
} else
{var statearr_12752_12796 = state_12742__$1;(statearr_12752_12796[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12743 === 6))
{var inst_12740 = (state_12742[2]);var state_12742__$1 = state_12742;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12742__$1,inst_12740);
} else
{if((state_val_12743 === 7))
{var inst_12685 = (state_12742[8]);var inst_12690 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12685);var state_12742__$1 = state_12742;var statearr_12753_12797 = state_12742__$1;(statearr_12753_12797[2] = inst_12690);
(statearr_12753_12797[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12743 === 8))
{var inst_12685 = (state_12742[8]);var state_12742__$1 = state_12742;var statearr_12754_12798 = state_12742__$1;(statearr_12754_12798[2] = inst_12685);
(statearr_12754_12798[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12743 === 9))
{var inst_12693 = (state_12742[10]);var inst_12693__$1 = (state_12742[2]);var inst_12694 = cljs.core.get.call(null,inst_12693__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12695 = cljs.core.get.call(null,inst_12693__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12696 = cljs.core.get.call(null,inst_12693__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12742__$1 = (function (){var statearr_12755 = state_12742;(statearr_12755[11] = inst_12696);
(statearr_12755[12] = inst_12695);
(statearr_12755[10] = inst_12693__$1);
return statearr_12755;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12742__$1,10,inst_12694);
} else
{if((state_val_12743 === 10))
{var inst_12700 = (state_12742[13]);var inst_12702 = (state_12742[14]);var inst_12699 = (state_12742[2]);var inst_12700__$1 = cljs.core.nth.call(null,inst_12699,0,null);var inst_12701 = cljs.core.nth.call(null,inst_12699,1,null);var inst_12702__$1 = (inst_12700__$1 == null);var state_12742__$1 = (function (){var statearr_12756 = state_12742;(statearr_12756[13] = inst_12700__$1);
(statearr_12756[15] = inst_12701);
(statearr_12756[14] = inst_12702__$1);
return statearr_12756;
})();if(cljs.core.truth_(inst_12702__$1))
{var statearr_12757_12799 = state_12742__$1;(statearr_12757_12799[1] = 11);
} else
{var statearr_12758_12800 = state_12742__$1;(statearr_12758_12800[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12743 === 11))
{var inst_12702 = (state_12742[14]);var state_12742__$1 = state_12742;var statearr_12759_12801 = state_12742__$1;(statearr_12759_12801[2] = inst_12702);
(statearr_12759_12801[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12743 === 12))
{var inst_12701 = (state_12742[15]);var inst_12705 = cljs.core._EQ_.call(null,inst_12701,change);var state_12742__$1 = state_12742;var statearr_12760_12802 = state_12742__$1;(statearr_12760_12802[2] = inst_12705);
(statearr_12760_12802[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12743 === 13))
{var inst_12707 = (state_12742[2]);var state_12742__$1 = state_12742;if(cljs.core.truth_(inst_12707))
{var statearr_12761_12803 = state_12742__$1;(statearr_12761_12803[1] = 14);
} else
{var statearr_12762_12804 = state_12742__$1;(statearr_12762_12804[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12743 === 14))
{var inst_12700 = (state_12742[13]);var inst_12709 = (inst_12700 == null);var state_12742__$1 = state_12742;if(cljs.core.truth_(inst_12709))
{var statearr_12763_12805 = state_12742__$1;(statearr_12763_12805[1] = 17);
} else
{var statearr_12764_12806 = state_12742__$1;(statearr_12764_12806[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12743 === 15))
{var inst_12718 = (state_12742[16]);var inst_12701 = (state_12742[15]);var inst_12696 = (state_12742[11]);var inst_12718__$1 = inst_12696.call(null,inst_12701);var state_12742__$1 = (function (){var statearr_12765 = state_12742;(statearr_12765[16] = inst_12718__$1);
return statearr_12765;
})();if(cljs.core.truth_(inst_12718__$1))
{var statearr_12766_12807 = state_12742__$1;(statearr_12766_12807[1] = 20);
} else
{var statearr_12767_12808 = state_12742__$1;(statearr_12767_12808[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12743 === 16))
{var inst_12738 = (state_12742[2]);var state_12742__$1 = state_12742;var statearr_12768_12809 = state_12742__$1;(statearr_12768_12809[2] = inst_12738);
(statearr_12768_12809[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12743 === 17))
{var inst_12701 = (state_12742[15]);var inst_12711 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12701);var state_12742__$1 = state_12742;var statearr_12769_12810 = state_12742__$1;(statearr_12769_12810[2] = inst_12711);
(statearr_12769_12810[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12743 === 18))
{var state_12742__$1 = state_12742;var statearr_12770_12811 = state_12742__$1;(statearr_12770_12811[2] = null);
(statearr_12770_12811[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12743 === 19))
{var inst_12714 = (state_12742[2]);var inst_12715 = calc_state.call(null);var inst_12685 = inst_12715;var state_12742__$1 = (function (){var statearr_12771 = state_12742;(statearr_12771[17] = inst_12714);
(statearr_12771[8] = inst_12685);
return statearr_12771;
})();var statearr_12772_12812 = state_12742__$1;(statearr_12772_12812[2] = null);
(statearr_12772_12812[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12743 === 20))
{var inst_12718 = (state_12742[16]);var state_12742__$1 = state_12742;var statearr_12773_12813 = state_12742__$1;(statearr_12773_12813[2] = inst_12718);
(statearr_12773_12813[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12743 === 21))
{var inst_12721 = (state_12742[18]);var inst_12696 = (state_12742[11]);var inst_12721__$1 = cljs.core.empty_QMARK_.call(null,inst_12696);var state_12742__$1 = (function (){var statearr_12774 = state_12742;(statearr_12774[18] = inst_12721__$1);
return statearr_12774;
})();if(inst_12721__$1)
{var statearr_12775_12814 = state_12742__$1;(statearr_12775_12814[1] = 23);
} else
{var statearr_12776_12815 = state_12742__$1;(statearr_12776_12815[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12743 === 22))
{var inst_12729 = (state_12742[2]);var state_12742__$1 = state_12742;if(cljs.core.truth_(inst_12729))
{var statearr_12777_12816 = state_12742__$1;(statearr_12777_12816[1] = 26);
} else
{var statearr_12778_12817 = state_12742__$1;(statearr_12778_12817[1] = 27);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12743 === 23))
{var inst_12701 = (state_12742[15]);var inst_12695 = (state_12742[12]);var inst_12723 = inst_12695.call(null,inst_12701);var inst_12724 = cljs.core.not.call(null,inst_12723);var state_12742__$1 = state_12742;var statearr_12779_12818 = state_12742__$1;(statearr_12779_12818[2] = inst_12724);
(statearr_12779_12818[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12743 === 24))
{var inst_12721 = (state_12742[18]);var state_12742__$1 = state_12742;var statearr_12780_12819 = state_12742__$1;(statearr_12780_12819[2] = inst_12721);
(statearr_12780_12819[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12743 === 25))
{var inst_12727 = (state_12742[2]);var state_12742__$1 = state_12742;var statearr_12781_12820 = state_12742__$1;(statearr_12781_12820[2] = inst_12727);
(statearr_12781_12820[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12743 === 26))
{var inst_12700 = (state_12742[13]);var state_12742__$1 = state_12742;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12742__$1,29,out,inst_12700);
} else
{if((state_val_12743 === 27))
{var state_12742__$1 = state_12742;var statearr_12782_12821 = state_12742__$1;(statearr_12782_12821[2] = null);
(statearr_12782_12821[1] = 28);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12743 === 28))
{var inst_12693 = (state_12742[10]);var inst_12735 = (state_12742[2]);var inst_12685 = inst_12693;var state_12742__$1 = (function (){var statearr_12783 = state_12742;(statearr_12783[19] = inst_12735);
(statearr_12783[8] = inst_12685);
return statearr_12783;
})();var statearr_12784_12822 = state_12742__$1;(statearr_12784_12822[2] = null);
(statearr_12784_12822[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12743 === 29))
{var inst_12732 = (state_12742[2]);var state_12742__$1 = state_12742;var statearr_12785_12823 = state_12742__$1;(statearr_12785_12823[2] = inst_12732);
(statearr_12785_12823[1] = 28);
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
});return ((function (switch__8182__auto__){
return (function() {
var state_machine__8183__auto__ = null;
var state_machine__8183__auto____0 = (function (){var statearr_12787 = (new Array(20));(statearr_12787[0] = state_machine__8183__auto__);
(statearr_12787[1] = 1);
return statearr_12787;
});
var state_machine__8183__auto____1 = (function (state_12742){while(true){
var result__8184__auto__ = switch__8182__auto__.call(null,state_12742);if(cljs.core.keyword_identical_QMARK_.call(null,result__8184__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8184__auto__;
}
break;
}
});
state_machine__8183__auto__ = function(state_12742){
switch(arguments.length){
case 0:
return state_machine__8183__auto____0.call(this);
case 1:
return state_machine__8183__auto____1.call(this,state_12742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8183__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8183__auto____0;
state_machine__8183__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8183__auto____1;
return state_machine__8183__auto__;
})()
;})(switch__8182__auto__))
})();var state__8258__auto__ = (function (){var statearr_12788 = f__8257__auto__.call(null);(statearr_12788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8256__auto___12789);
return statearr_12788;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8258__auto__);
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
{var x__6832__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6832__auto__)]);if(or__3943__auto__)
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
{var x__6832__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6832__auto__)]);if(or__3943__auto__)
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
{var x__6832__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6832__auto__)]);if(or__3943__auto__)
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
{var x__6832__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6832__auto__)]);if(or__3943__auto__)
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
return (function (p1__12824_SHARP_){if(cljs.core.truth_(p1__12824_SHARP_.call(null,topic)))
{return p1__12824_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12824_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3943__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12948 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12948');

/**
* @constructor
*/
cljs.core.async.t12948 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12949){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12949 = meta12949;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12948.cljs$lang$type = true;
cljs.core.async.t12948.cljs$lang$ctorStr = "cljs.core.async/t12948";
cljs.core.async.t12948.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6747__auto__,writer__6748__auto__,opt__6749__auto__){return cljs.core._write.call(null,writer__6748__auto__,"cljs.core.async/t12948");
});})(mults,ensure_mult))
;
cljs.core.async.t12948.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12948.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12948.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12948.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12948.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12948.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12948.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12948.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12950){var self__ = this;
return self__.meta12949;
});})(mults,ensure_mult))
;
cljs.core.async.t12948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12950,meta12949__$1){var self__ = this;
return (new cljs.core.async.t12948(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12949__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12948 = ((function (mults,ensure_mult){
return (function __GT_t12948(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12949){return (new cljs.core.async.t12948(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12949));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12948(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__8256__auto___13071 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8257__auto__ = (function (){var switch__8182__auto__ = (function (state_13023){var state_val_13024 = (state_13023[1]);if((state_val_13024 === 1))
{var state_13023__$1 = state_13023;var statearr_13025_13072 = state_13023__$1;(statearr_13025_13072[2] = null);
(statearr_13025_13072[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13024 === 2))
{var state_13023__$1 = state_13023;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13023__$1,4,ch);
} else
{if((state_val_13024 === 3))
{var inst_13021 = (state_13023[2]);var state_13023__$1 = state_13023;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13023__$1,inst_13021);
} else
{if((state_val_13024 === 4))
{var inst_12953 = (state_13023[5]);var inst_12953__$1 = (state_13023[2]);var inst_12954 = (inst_12953__$1 == null);var state_13023__$1 = (function (){var statearr_13026 = state_13023;(statearr_13026[5] = inst_12953__$1);
return statearr_13026;
})();if(cljs.core.truth_(inst_12954))
{var statearr_13027_13073 = state_13023__$1;(statearr_13027_13073[1] = 5);
} else
{var statearr_13028_13074 = state_13023__$1;(statearr_13028_13074[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13024 === 5))
{var inst_12960 = cljs.core.deref.call(null,mults);var inst_12961 = cljs.core.vals.call(null,inst_12960);var inst_12962 = cljs.core.seq.call(null,inst_12961);var inst_12963 = inst_12962;var inst_12964 = null;var inst_12965 = 0;var inst_12966 = 0;var state_13023__$1 = (function (){var statearr_13029 = state_13023;(statearr_13029[6] = inst_12963);
(statearr_13029[7] = inst_12964);
(statearr_13029[8] = inst_12965);
(statearr_13029[9] = inst_12966);
return statearr_13029;
})();var statearr_13030_13075 = state_13023__$1;(statearr_13030_13075[2] = null);
(statearr_13030_13075[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13024 === 6))
{var inst_13003 = (state_13023[10]);var inst_13001 = (state_13023[11]);var inst_12953 = (state_13023[5]);var inst_13001__$1 = topic_fn.call(null,inst_12953);var inst_13002 = cljs.core.deref.call(null,mults);var inst_13003__$1 = cljs.core.get.call(null,inst_13002,inst_13001__$1);var state_13023__$1 = (function (){var statearr_13031 = state_13023;(statearr_13031[10] = inst_13003__$1);
(statearr_13031[11] = inst_13001__$1);
return statearr_13031;
})();if(cljs.core.truth_(inst_13003__$1))
{var statearr_13032_13076 = state_13023__$1;(statearr_13032_13076[1] = 19);
} else
{var statearr_13033_13077 = state_13023__$1;(statearr_13033_13077[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13024 === 7))
{var inst_13019 = (state_13023[2]);var state_13023__$1 = state_13023;var statearr_13034_13078 = state_13023__$1;(statearr_13034_13078[2] = inst_13019);
(statearr_13034_13078[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13024 === 8))
{var inst_12965 = (state_13023[8]);var inst_12966 = (state_13023[9]);var inst_12968 = (inst_12966 < inst_12965);var inst_12969 = inst_12968;var state_13023__$1 = state_13023;if(cljs.core.truth_(inst_12969))
{var statearr_13038_13079 = state_13023__$1;(statearr_13038_13079[1] = 10);
} else
{var statearr_13039_13080 = state_13023__$1;(statearr_13039_13080[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13024 === 9))
{var inst_12999 = (state_13023[2]);var state_13023__$1 = state_13023;var statearr_13040_13081 = state_13023__$1;(statearr_13040_13081[2] = inst_12999);
(statearr_13040_13081[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13024 === 10))
{var inst_12963 = (state_13023[6]);var inst_12964 = (state_13023[7]);var inst_12965 = (state_13023[8]);var inst_12966 = (state_13023[9]);var inst_12971 = cljs.core._nth.call(null,inst_12964,inst_12966);var inst_12972 = cljs.core.async.muxch_STAR_.call(null,inst_12971);var inst_12973 = cljs.core.async.close_BANG_.call(null,inst_12972);var inst_12974 = (inst_12966 + 1);var tmp13035 = inst_12963;var tmp13036 = inst_12964;var tmp13037 = inst_12965;var inst_12963__$1 = tmp13035;var inst_12964__$1 = tmp13036;var inst_12965__$1 = tmp13037;var inst_12966__$1 = inst_12974;var state_13023__$1 = (function (){var statearr_13041 = state_13023;(statearr_13041[6] = inst_12963__$1);
(statearr_13041[12] = inst_12973);
(statearr_13041[7] = inst_12964__$1);
(statearr_13041[8] = inst_12965__$1);
(statearr_13041[9] = inst_12966__$1);
return statearr_13041;
})();var statearr_13042_13082 = state_13023__$1;(statearr_13042_13082[2] = null);
(statearr_13042_13082[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13024 === 11))
{var inst_12977 = (state_13023[13]);var inst_12963 = (state_13023[6]);var inst_12977__$1 = cljs.core.seq.call(null,inst_12963);var state_13023__$1 = (function (){var statearr_13043 = state_13023;(statearr_13043[13] = inst_12977__$1);
return statearr_13043;
})();if(inst_12977__$1)
{var statearr_13044_13083 = state_13023__$1;(statearr_13044_13083[1] = 13);
} else
{var statearr_13045_13084 = state_13023__$1;(statearr_13045_13084[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13024 === 12))
{var inst_12997 = (state_13023[2]);var state_13023__$1 = state_13023;var statearr_13046_13085 = state_13023__$1;(statearr_13046_13085[2] = inst_12997);
(statearr_13046_13085[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13024 === 13))
{var inst_12977 = (state_13023[13]);var inst_12979 = cljs.core.chunked_seq_QMARK_.call(null,inst_12977);var state_13023__$1 = state_13023;if(inst_12979)
{var statearr_13047_13086 = state_13023__$1;(statearr_13047_13086[1] = 16);
} else
{var statearr_13048_13087 = state_13023__$1;(statearr_13048_13087[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13024 === 14))
{var state_13023__$1 = state_13023;var statearr_13049_13088 = state_13023__$1;(statearr_13049_13088[2] = null);
(statearr_13049_13088[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13024 === 15))
{var inst_12995 = (state_13023[2]);var state_13023__$1 = state_13023;var statearr_13050_13089 = state_13023__$1;(statearr_13050_13089[2] = inst_12995);
(statearr_13050_13089[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13024 === 16))
{var inst_12977 = (state_13023[13]);var inst_12981 = cljs.core.chunk_first.call(null,inst_12977);var inst_12982 = cljs.core.chunk_rest.call(null,inst_12977);var inst_12983 = cljs.core.count.call(null,inst_12981);var inst_12963 = inst_12982;var inst_12964 = inst_12981;var inst_12965 = inst_12983;var inst_12966 = 0;var state_13023__$1 = (function (){var statearr_13051 = state_13023;(statearr_13051[6] = inst_12963);
(statearr_13051[7] = inst_12964);
(statearr_13051[8] = inst_12965);
(statearr_13051[9] = inst_12966);
return statearr_13051;
})();var statearr_13052_13090 = state_13023__$1;(statearr_13052_13090[2] = null);
(statearr_13052_13090[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13024 === 17))
{var inst_12977 = (state_13023[13]);var inst_12986 = cljs.core.first.call(null,inst_12977);var inst_12987 = cljs.core.async.muxch_STAR_.call(null,inst_12986);var inst_12988 = cljs.core.async.close_BANG_.call(null,inst_12987);var inst_12989 = cljs.core.next.call(null,inst_12977);var inst_12963 = inst_12989;var inst_12964 = null;var inst_12965 = 0;var inst_12966 = 0;var state_13023__$1 = (function (){var statearr_13053 = state_13023;(statearr_13053[14] = inst_12988);
(statearr_13053[6] = inst_12963);
(statearr_13053[7] = inst_12964);
(statearr_13053[8] = inst_12965);
(statearr_13053[9] = inst_12966);
return statearr_13053;
})();var statearr_13054_13091 = state_13023__$1;(statearr_13054_13091[2] = null);
(statearr_13054_13091[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13024 === 18))
{var inst_12992 = (state_13023[2]);var state_13023__$1 = state_13023;var statearr_13055_13092 = state_13023__$1;(statearr_13055_13092[2] = inst_12992);
(statearr_13055_13092[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13024 === 19))
{var state_13023__$1 = state_13023;var statearr_13056_13093 = state_13023__$1;(statearr_13056_13093[2] = null);
(statearr_13056_13093[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13024 === 20))
{var state_13023__$1 = state_13023;var statearr_13057_13094 = state_13023__$1;(statearr_13057_13094[2] = null);
(statearr_13057_13094[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13024 === 21))
{var inst_13016 = (state_13023[2]);var state_13023__$1 = (function (){var statearr_13058 = state_13023;(statearr_13058[15] = inst_13016);
return statearr_13058;
})();var statearr_13059_13095 = state_13023__$1;(statearr_13059_13095[2] = null);
(statearr_13059_13095[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13024 === 22))
{var inst_13013 = (state_13023[2]);var state_13023__$1 = state_13023;var statearr_13060_13096 = state_13023__$1;(statearr_13060_13096[2] = inst_13013);
(statearr_13060_13096[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13024 === 23))
{var inst_13001 = (state_13023[11]);var inst_13005 = (state_13023[2]);var inst_13006 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13001);var state_13023__$1 = (function (){var statearr_13061 = state_13023;(statearr_13061[16] = inst_13005);
return statearr_13061;
})();var statearr_13062_13097 = state_13023__$1;(statearr_13062_13097[2] = inst_13006);
(statearr_13062_13097[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13024 === 24))
{try{var inst_13003 = (state_13023[10]);var inst_12953 = (state_13023[5]);var inst_13009 = cljs.core.async.muxch_STAR_.call(null,inst_13003);var state_13023__$1 = state_13023;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13023__$1,25,inst_13009,inst_12953);
}catch (e13063){if((e13063 instanceof Object))
{var ex__8176__auto__ = e13063;var statearr_13064_13098 = state_13023;(statearr_13064_13098[1] = 23);
(statearr_13064_13098[2] = ex__8176__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13063;
} else
{return null;
}
}
}} else
{if((state_val_13024 === 25))
{try{var inst_13011 = (state_13023[2]);var state_13023__$1 = state_13023;var statearr_13067_13099 = state_13023__$1;(statearr_13067_13099[2] = inst_13011);
(statearr_13067_13099[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e13065){if((e13065 instanceof Object))
{var ex__8176__auto__ = e13065;var statearr_13066_13100 = state_13023;(statearr_13066_13100[1] = 23);
(statearr_13066_13100[2] = ex__8176__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13065;
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
});return ((function (switch__8182__auto__){
return (function() {
var state_machine__8183__auto__ = null;
var state_machine__8183__auto____0 = (function (){var statearr_13069 = (new Array(17));(statearr_13069[0] = state_machine__8183__auto__);
(statearr_13069[1] = 1);
return statearr_13069;
});
var state_machine__8183__auto____1 = (function (state_13023){while(true){
var result__8184__auto__ = switch__8182__auto__.call(null,state_13023);if(cljs.core.keyword_identical_QMARK_.call(null,result__8184__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8184__auto__;
}
break;
}
});
state_machine__8183__auto__ = function(state_13023){
switch(arguments.length){
case 0:
return state_machine__8183__auto____0.call(this);
case 1:
return state_machine__8183__auto____1.call(this,state_13023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8183__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8183__auto____0;
state_machine__8183__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8183__auto____1;
return state_machine__8183__auto__;
})()
;})(switch__8182__auto__))
})();var state__8258__auto__ = (function (){var statearr_13070 = f__8257__auto__.call(null);(statearr_13070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8256__auto___13071);
return statearr_13070;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8258__auto__);
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
,cljs.core.range.call(null,cnt));var c__8256__auto___13231 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8257__auto__ = (function (){var switch__8182__auto__ = (function (state_13203){var state_val_13204 = (state_13203[1]);if((state_val_13204 === 1))
{var state_13203__$1 = state_13203;var statearr_13205_13232 = state_13203__$1;(statearr_13205_13232[2] = null);
(statearr_13205_13232[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13204 === 2))
{var inst_13167 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13168 = 0;var state_13203__$1 = (function (){var statearr_13206 = state_13203;(statearr_13206[5] = inst_13168);
(statearr_13206[6] = inst_13167);
return statearr_13206;
})();var statearr_13207_13233 = state_13203__$1;(statearr_13207_13233[2] = null);
(statearr_13207_13233[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13204 === 3))
{var inst_13201 = (state_13203[2]);var state_13203__$1 = state_13203;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13203__$1,inst_13201);
} else
{if((state_val_13204 === 4))
{var inst_13168 = (state_13203[5]);var inst_13170 = (inst_13168 < cnt);var state_13203__$1 = state_13203;if(cljs.core.truth_(inst_13170))
{var statearr_13208_13234 = state_13203__$1;(statearr_13208_13234[1] = 6);
} else
{var statearr_13209_13235 = state_13203__$1;(statearr_13209_13235[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13204 === 5))
{var inst_13187 = (state_13203[2]);var state_13203__$1 = (function (){var statearr_13210 = state_13203;(statearr_13210[7] = inst_13187);
return statearr_13210;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13203__$1,12,dchan);
} else
{if((state_val_13204 === 6))
{var state_13203__$1 = state_13203;var statearr_13211_13236 = state_13203__$1;(statearr_13211_13236[2] = null);
(statearr_13211_13236[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13204 === 7))
{var state_13203__$1 = state_13203;var statearr_13212_13237 = state_13203__$1;(statearr_13212_13237[2] = null);
(statearr_13212_13237[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13204 === 8))
{var inst_13185 = (state_13203[2]);var state_13203__$1 = state_13203;var statearr_13213_13238 = state_13203__$1;(statearr_13213_13238[2] = inst_13185);
(statearr_13213_13238[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13204 === 9))
{var inst_13168 = (state_13203[5]);var inst_13180 = (state_13203[2]);var inst_13181 = (inst_13168 + 1);var inst_13168__$1 = inst_13181;var state_13203__$1 = (function (){var statearr_13214 = state_13203;(statearr_13214[8] = inst_13180);
(statearr_13214[5] = inst_13168__$1);
return statearr_13214;
})();var statearr_13215_13239 = state_13203__$1;(statearr_13215_13239[2] = null);
(statearr_13215_13239[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13204 === 10))
{var inst_13172 = (state_13203[2]);var inst_13173 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13203__$1 = (function (){var statearr_13216 = state_13203;(statearr_13216[9] = inst_13172);
return statearr_13216;
})();var statearr_13217_13240 = state_13203__$1;(statearr_13217_13240[2] = inst_13173);
(statearr_13217_13240[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13204 === 11))
{try{var inst_13168 = (state_13203[5]);var inst_13176 = chs__$1.call(null,inst_13168);var inst_13177 = done.call(null,inst_13168);var inst_13178 = cljs.core.async.take_BANG_.call(null,inst_13176,inst_13177);var state_13203__$1 = state_13203;var statearr_13220_13241 = state_13203__$1;(statearr_13220_13241[2] = inst_13178);
(statearr_13220_13241[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e13218){if((e13218 instanceof Object))
{var ex__8176__auto__ = e13218;var statearr_13219_13242 = state_13203;(statearr_13219_13242[1] = 10);
(statearr_13219_13242[2] = ex__8176__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13218;
} else
{return null;
}
}
}} else
{if((state_val_13204 === 12))
{var inst_13189 = (state_13203[10]);var inst_13189__$1 = (state_13203[2]);var inst_13190 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13189__$1);var state_13203__$1 = (function (){var statearr_13221 = state_13203;(statearr_13221[10] = inst_13189__$1);
return statearr_13221;
})();if(cljs.core.truth_(inst_13190))
{var statearr_13222_13243 = state_13203__$1;(statearr_13222_13243[1] = 13);
} else
{var statearr_13223_13244 = state_13203__$1;(statearr_13223_13244[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13204 === 13))
{var inst_13192 = cljs.core.async.close_BANG_.call(null,out);var state_13203__$1 = state_13203;var statearr_13224_13245 = state_13203__$1;(statearr_13224_13245[2] = inst_13192);
(statearr_13224_13245[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13204 === 14))
{var inst_13189 = (state_13203[10]);var inst_13194 = cljs.core.apply.call(null,f,inst_13189);var state_13203__$1 = state_13203;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13203__$1,16,out,inst_13194);
} else
{if((state_val_13204 === 15))
{var inst_13199 = (state_13203[2]);var state_13203__$1 = state_13203;var statearr_13225_13246 = state_13203__$1;(statearr_13225_13246[2] = inst_13199);
(statearr_13225_13246[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13204 === 16))
{var inst_13196 = (state_13203[2]);var state_13203__$1 = (function (){var statearr_13226 = state_13203;(statearr_13226[11] = inst_13196);
return statearr_13226;
})();var statearr_13227_13247 = state_13203__$1;(statearr_13227_13247[2] = null);
(statearr_13227_13247[1] = 2);
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
});return ((function (switch__8182__auto__){
return (function() {
var state_machine__8183__auto__ = null;
var state_machine__8183__auto____0 = (function (){var statearr_13229 = (new Array(12));(statearr_13229[0] = state_machine__8183__auto__);
(statearr_13229[1] = 1);
return statearr_13229;
});
var state_machine__8183__auto____1 = (function (state_13203){while(true){
var result__8184__auto__ = switch__8182__auto__.call(null,state_13203);if(cljs.core.keyword_identical_QMARK_.call(null,result__8184__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8184__auto__;
}
break;
}
});
state_machine__8183__auto__ = function(state_13203){
switch(arguments.length){
case 0:
return state_machine__8183__auto____0.call(this);
case 1:
return state_machine__8183__auto____1.call(this,state_13203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8183__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8183__auto____0;
state_machine__8183__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8183__auto____1;
return state_machine__8183__auto__;
})()
;})(switch__8182__auto__))
})();var state__8258__auto__ = (function (){var statearr_13230 = f__8257__auto__.call(null);(statearr_13230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8256__auto___13231);
return statearr_13230;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8258__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8256__auto___13347 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8257__auto__ = (function (){var switch__8182__auto__ = (function (state_13327){var state_val_13328 = (state_13327[1]);if((state_val_13328 === 1))
{var inst_13298 = cljs.core.vec.call(null,chs);var inst_13299 = inst_13298;var state_13327__$1 = (function (){var statearr_13329 = state_13327;(statearr_13329[5] = inst_13299);
return statearr_13329;
})();var statearr_13330_13348 = state_13327__$1;(statearr_13330_13348[2] = null);
(statearr_13330_13348[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13328 === 2))
{var inst_13299 = (state_13327[5]);var inst_13301 = cljs.core.count.call(null,inst_13299);var inst_13302 = (inst_13301 > 0);var state_13327__$1 = state_13327;if(cljs.core.truth_(inst_13302))
{var statearr_13331_13349 = state_13327__$1;(statearr_13331_13349[1] = 4);
} else
{var statearr_13332_13350 = state_13327__$1;(statearr_13332_13350[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13328 === 3))
{var inst_13325 = (state_13327[2]);var state_13327__$1 = state_13327;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13327__$1,inst_13325);
} else
{if((state_val_13328 === 4))
{var inst_13299 = (state_13327[5]);var state_13327__$1 = state_13327;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13327__$1,7,inst_13299);
} else
{if((state_val_13328 === 5))
{var inst_13321 = cljs.core.async.close_BANG_.call(null,out);var state_13327__$1 = state_13327;var statearr_13333_13351 = state_13327__$1;(statearr_13333_13351[2] = inst_13321);
(statearr_13333_13351[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13328 === 6))
{var inst_13323 = (state_13327[2]);var state_13327__$1 = state_13327;var statearr_13334_13352 = state_13327__$1;(statearr_13334_13352[2] = inst_13323);
(statearr_13334_13352[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13328 === 7))
{var inst_13306 = (state_13327[6]);var inst_13307 = (state_13327[7]);var inst_13306__$1 = (state_13327[2]);var inst_13307__$1 = cljs.core.nth.call(null,inst_13306__$1,0,null);var inst_13308 = cljs.core.nth.call(null,inst_13306__$1,1,null);var inst_13309 = (inst_13307__$1 == null);var state_13327__$1 = (function (){var statearr_13335 = state_13327;(statearr_13335[6] = inst_13306__$1);
(statearr_13335[7] = inst_13307__$1);
(statearr_13335[8] = inst_13308);
return statearr_13335;
})();if(cljs.core.truth_(inst_13309))
{var statearr_13336_13353 = state_13327__$1;(statearr_13336_13353[1] = 8);
} else
{var statearr_13337_13354 = state_13327__$1;(statearr_13337_13354[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13328 === 8))
{var inst_13306 = (state_13327[6]);var inst_13307 = (state_13327[7]);var inst_13308 = (state_13327[8]);var inst_13299 = (state_13327[5]);var inst_13311 = (function (){var c = inst_13308;var v = inst_13307;var vec__13304 = inst_13306;var cs = inst_13299;return ((function (c,v,vec__13304,cs,inst_13306,inst_13307,inst_13308,inst_13299,state_val_13328){
return (function (p1__13248_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13248_SHARP_);
});
;})(c,v,vec__13304,cs,inst_13306,inst_13307,inst_13308,inst_13299,state_val_13328))
})();var inst_13312 = cljs.core.filterv.call(null,inst_13311,inst_13299);var inst_13299__$1 = inst_13312;var state_13327__$1 = (function (){var statearr_13338 = state_13327;(statearr_13338[5] = inst_13299__$1);
return statearr_13338;
})();var statearr_13339_13355 = state_13327__$1;(statearr_13339_13355[2] = null);
(statearr_13339_13355[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13328 === 9))
{var inst_13307 = (state_13327[7]);var state_13327__$1 = state_13327;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13327__$1,11,out,inst_13307);
} else
{if((state_val_13328 === 10))
{var inst_13319 = (state_13327[2]);var state_13327__$1 = state_13327;var statearr_13341_13356 = state_13327__$1;(statearr_13341_13356[2] = inst_13319);
(statearr_13341_13356[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13328 === 11))
{var inst_13299 = (state_13327[5]);var inst_13316 = (state_13327[2]);var tmp13340 = inst_13299;var inst_13299__$1 = tmp13340;var state_13327__$1 = (function (){var statearr_13342 = state_13327;(statearr_13342[9] = inst_13316);
(statearr_13342[5] = inst_13299__$1);
return statearr_13342;
})();var statearr_13343_13357 = state_13327__$1;(statearr_13343_13357[2] = null);
(statearr_13343_13357[1] = 2);
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
});return ((function (switch__8182__auto__){
return (function() {
var state_machine__8183__auto__ = null;
var state_machine__8183__auto____0 = (function (){var statearr_13345 = (new Array(10));(statearr_13345[0] = state_machine__8183__auto__);
(statearr_13345[1] = 1);
return statearr_13345;
});
var state_machine__8183__auto____1 = (function (state_13327){while(true){
var result__8184__auto__ = switch__8182__auto__.call(null,state_13327);if(cljs.core.keyword_identical_QMARK_.call(null,result__8184__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8184__auto__;
}
break;
}
});
state_machine__8183__auto__ = function(state_13327){
switch(arguments.length){
case 0:
return state_machine__8183__auto____0.call(this);
case 1:
return state_machine__8183__auto____1.call(this,state_13327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8183__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8183__auto____0;
state_machine__8183__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8183__auto____1;
return state_machine__8183__auto__;
})()
;})(switch__8182__auto__))
})();var state__8258__auto__ = (function (){var statearr_13346 = f__8257__auto__.call(null);(statearr_13346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8256__auto___13347);
return statearr_13346;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8258__auto__);
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
