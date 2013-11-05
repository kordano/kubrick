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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12338 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12338');

/**
* @constructor
*/
cljs.core.async.t12338 = (function (f,fn_handler,meta12339){
this.f = f;
this.fn_handler = fn_handler;
this.meta12339 = meta12339;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12338.cljs$lang$type = true;
cljs.core.async.t12338.cljs$lang$ctorStr = "cljs.core.async/t12338";
cljs.core.async.t12338.cljs$lang$ctorPrWriter = (function (this__7018__auto__,writer__7019__auto__,opt__7020__auto__){return cljs.core._write.call(null,writer__7019__auto__,"cljs.core.async/t12338");
});
cljs.core.async.t12338.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12338.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return true;
});
cljs.core.async.t12338.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
return self__.f;
});
cljs.core.async.t12338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12340){var self__ = this;
return self__.meta12339;
});
cljs.core.async.t12338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12340,meta12339__$1){var self__ = this;
return (new cljs.core.async.t12338(self__.f,self__.fn_handler,meta12339__$1));
});
cljs.core.async.__GT_t12338 = (function __GT_t12338(f__$1,fn_handler__$1,meta12339){return (new cljs.core.async.t12338(f__$1,fn_handler__$1,meta12339));
});
}
return (new cljs.core.async.t12338(f,fn_handler,null));
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
{var val_12341 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12341);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_12341);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__7295__auto___12342 = n;var x_12343 = 0;while(true){
if((x_12343 < n__7295__auto___12342))
{(a[x_12343] = 0);
{
var G__12344 = (x_12343 + 1);
x_12343 = G__12344;
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
var G__12345 = (i + 1);
i = G__12345;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12349 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12349');

/**
* @constructor
*/
cljs.core.async.t12349 = (function (flag,alt_flag,meta12350){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12350 = meta12350;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12349.cljs$lang$type = true;
cljs.core.async.t12349.cljs$lang$ctorStr = "cljs.core.async/t12349";
cljs.core.async.t12349.cljs$lang$ctorPrWriter = (function (this__7018__auto__,writer__7019__auto__,opt__7020__auto__){return cljs.core._write.call(null,writer__7019__auto__,"cljs.core.async/t12349");
});
cljs.core.async.t12349.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12349.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t12349.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t12349.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12351){var self__ = this;
return self__.meta12350;
});
cljs.core.async.t12349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12351,meta12350__$1){var self__ = this;
return (new cljs.core.async.t12349(self__.flag,self__.alt_flag,meta12350__$1));
});
cljs.core.async.__GT_t12349 = (function __GT_t12349(flag__$1,alt_flag__$1,meta12350){return (new cljs.core.async.t12349(flag__$1,alt_flag__$1,meta12350));
});
}
return (new cljs.core.async.t12349(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12355 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12355');

/**
* @constructor
*/
cljs.core.async.t12355 = (function (cb,flag,alt_handler,meta12356){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12356 = meta12356;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12355.cljs$lang$type = true;
cljs.core.async.t12355.cljs$lang$ctorStr = "cljs.core.async/t12355";
cljs.core.async.t12355.cljs$lang$ctorPrWriter = (function (this__7018__auto__,writer__7019__auto__,opt__7020__auto__){return cljs.core._write.call(null,writer__7019__auto__,"cljs.core.async/t12355");
});
cljs.core.async.t12355.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12355.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12355.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12357){var self__ = this;
return self__.meta12356;
});
cljs.core.async.t12355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12357,meta12356__$1){var self__ = this;
return (new cljs.core.async.t12355(self__.cb,self__.flag,self__.alt_handler,meta12356__$1));
});
cljs.core.async.__GT_t12355 = (function __GT_t12355(cb__$1,flag__$1,alt_handler__$1,meta12356){return (new cljs.core.async.t12355(cb__$1,flag__$1,alt_handler__$1,meta12356));
});
}
return (new cljs.core.async.t12355(cb,flag,alt_handler,null));
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
return (function (p1__12358_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__12358_SHARP_,port], true));
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
var G__12359 = (i + 1);
i = G__12359;
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
var alts_BANG___delegate = function (ports,p__12360){var map__12362 = p__12360;var map__12362__$1 = ((cljs.core.seq_QMARK_.call(null,map__12362))?cljs.core.apply.call(null,cljs.core.hash_map,map__12362):map__12362);var opts = map__12362__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__12360 = null;if (arguments.length > 1) {
  p__12360 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12360);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12363){
var ports = cljs.core.first(arglist__12363);
var p__12360 = cljs.core.rest(arglist__12363);
return alts_BANG___delegate(ports,p__12360);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t12371 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12371');

/**
* @constructor
*/
cljs.core.async.t12371 = (function (ch,f,map_LT_,meta12372){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12372 = meta12372;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12371.cljs$lang$type = true;
cljs.core.async.t12371.cljs$lang$ctorStr = "cljs.core.async/t12371";
cljs.core.async.t12371.cljs$lang$ctorPrWriter = (function (this__7018__auto__,writer__7019__auto__,opt__7020__auto__){return cljs.core._write.call(null,writer__7019__auto__,"cljs.core.async/t12371");
});
cljs.core.async.t12371.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12371.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t12371.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12371.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t12374 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12374');

/**
* @constructor
*/
cljs.core.async.t12374 = (function (fn1,_,meta12372,ch,f,map_LT_,meta12375){
this.fn1 = fn1;
this._ = _;
this.meta12372 = meta12372;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12375 = meta12375;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12374.cljs$lang$type = true;
cljs.core.async.t12374.cljs$lang$ctorStr = "cljs.core.async/t12374";
cljs.core.async.t12374.cljs$lang$ctorPrWriter = (function (this__7018__auto__,writer__7019__auto__,opt__7020__auto__){return cljs.core._write.call(null,writer__7019__auto__,"cljs.core.async/t12374");
});
cljs.core.async.t12374.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12374.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$2){var self__ = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t12374.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$2){var self__ = this;
return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t12374.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$2){var self__ = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1){
return (function (p1__12364_SHARP_){return f1.call(null,(((p1__12364_SHARP_ == null))?null:self__.f.call(null,p1__12364_SHARP_)));
});
;})(f1))
});
cljs.core.async.t12374.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12376){var self__ = this;
return self__.meta12375;
});
cljs.core.async.t12374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12376,meta12375__$1){var self__ = this;
return (new cljs.core.async.t12374(self__.fn1,self__._,self__.meta12372,self__.ch,self__.f,self__.map_LT_,meta12375__$1));
});
cljs.core.async.__GT_t12374 = (function __GT_t12374(fn1__$1,___$1,meta12372__$1,ch__$2,f__$2,map_LT___$2,meta12375){return (new cljs.core.async.t12374(fn1__$1,___$1,meta12372__$1,ch__$2,f__$2,map_LT___$2,meta12375));
});
}
return (new cljs.core.async.t12374(fn1,_,self__.meta12372,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t12371.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12371.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12373){var self__ = this;
return self__.meta12372;
});
cljs.core.async.t12371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12373,meta12372__$1){var self__ = this;
return (new cljs.core.async.t12371(self__.ch,self__.f,self__.map_LT_,meta12372__$1));
});
cljs.core.async.__GT_t12371 = (function __GT_t12371(ch__$1,f__$1,map_LT___$1,meta12372){return (new cljs.core.async.t12371(ch__$1,f__$1,map_LT___$1,meta12372));
});
}
return (new cljs.core.async.t12371(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t12380 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12380');

/**
* @constructor
*/
cljs.core.async.t12380 = (function (ch,f,map_GT_,meta12381){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta12381 = meta12381;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12380.cljs$lang$type = true;
cljs.core.async.t12380.cljs$lang$ctorStr = "cljs.core.async/t12380";
cljs.core.async.t12380.cljs$lang$ctorPrWriter = (function (this__7018__auto__,writer__7019__auto__,opt__7020__auto__){return cljs.core._write.call(null,writer__7019__auto__,"cljs.core.async/t12380");
});
cljs.core.async.t12380.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12380.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t12380.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12380.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12380.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12380.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12380.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12382){var self__ = this;
return self__.meta12381;
});
cljs.core.async.t12380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12382,meta12381__$1){var self__ = this;
return (new cljs.core.async.t12380(self__.ch,self__.f,self__.map_GT_,meta12381__$1));
});
cljs.core.async.__GT_t12380 = (function __GT_t12380(ch__$1,f__$1,map_GT___$1,meta12381){return (new cljs.core.async.t12380(ch__$1,f__$1,map_GT___$1,meta12381));
});
}
return (new cljs.core.async.t12380(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t12386 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12386');

/**
* @constructor
*/
cljs.core.async.t12386 = (function (ch,p,filter_GT_,meta12387){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta12387 = meta12387;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12386.cljs$lang$type = true;
cljs.core.async.t12386.cljs$lang$ctorStr = "cljs.core.async/t12386";
cljs.core.async.t12386.cljs$lang$ctorPrWriter = (function (this__7018__auto__,writer__7019__auto__,opt__7020__auto__){return cljs.core._write.call(null,writer__7019__auto__,"cljs.core.async/t12386");
});
cljs.core.async.t12386.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12386.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t12386.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12386.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12386.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12386.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12388){var self__ = this;
return self__.meta12387;
});
cljs.core.async.t12386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12388,meta12387__$1){var self__ = this;
return (new cljs.core.async.t12386(self__.ch,self__.p,self__.filter_GT_,meta12387__$1));
});
cljs.core.async.__GT_t12386 = (function __GT_t12386(ch__$1,p__$1,filter_GT___$1,meta12387){return (new cljs.core.async.t12386(ch__$1,p__$1,filter_GT___$1,meta12387));
});
}
return (new cljs.core.async.t12386(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8559__auto___12463 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8560__auto__ = (function (){var switch__8496__auto__ = (function (state_12446){var state_val_12447 = (state_12446[1]);if((state_val_12447 === 1))
{var state_12446__$1 = state_12446;var statearr_12448_12464 = state_12446__$1;(statearr_12448_12464[2] = null);
(statearr_12448_12464[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12447 === 2))
{var state_12446__$1 = state_12446;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12446__$1,4,ch);
} else
{if((state_val_12447 === 3))
{var inst_12444 = (state_12446[2]);var state_12446__$1 = state_12446;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12446__$1,inst_12444);
} else
{if((state_val_12447 === 4))
{var inst_12428 = (state_12446[5]);var inst_12428__$1 = (state_12446[2]);var inst_12429 = (inst_12428__$1 == null);var state_12446__$1 = (function (){var statearr_12449 = state_12446;(statearr_12449[5] = inst_12428__$1);
return statearr_12449;
})();if(cljs.core.truth_(inst_12429))
{var statearr_12450_12465 = state_12446__$1;(statearr_12450_12465[1] = 5);
} else
{var statearr_12451_12466 = state_12446__$1;(statearr_12451_12466[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12447 === 5))
{var inst_12431 = cljs.core.async.close_BANG_.call(null,out);var state_12446__$1 = state_12446;var statearr_12452_12467 = state_12446__$1;(statearr_12452_12467[2] = inst_12431);
(statearr_12452_12467[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12447 === 6))
{var inst_12428 = (state_12446[5]);var inst_12433 = p.call(null,inst_12428);var state_12446__$1 = state_12446;if(cljs.core.truth_(inst_12433))
{var statearr_12453_12468 = state_12446__$1;(statearr_12453_12468[1] = 8);
} else
{var statearr_12454_12469 = state_12446__$1;(statearr_12454_12469[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12447 === 7))
{var inst_12442 = (state_12446[2]);var state_12446__$1 = state_12446;var statearr_12455_12470 = state_12446__$1;(statearr_12455_12470[2] = inst_12442);
(statearr_12455_12470[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12447 === 8))
{var inst_12428 = (state_12446[5]);var state_12446__$1 = state_12446;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12446__$1,11,out,inst_12428);
} else
{if((state_val_12447 === 9))
{var state_12446__$1 = state_12446;var statearr_12456_12471 = state_12446__$1;(statearr_12456_12471[2] = null);
(statearr_12456_12471[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12447 === 10))
{var inst_12439 = (state_12446[2]);var state_12446__$1 = (function (){var statearr_12457 = state_12446;(statearr_12457[6] = inst_12439);
return statearr_12457;
})();var statearr_12458_12472 = state_12446__$1;(statearr_12458_12472[2] = null);
(statearr_12458_12472[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12447 === 11))
{var inst_12436 = (state_12446[2]);var state_12446__$1 = state_12446;var statearr_12459_12473 = state_12446__$1;(statearr_12459_12473[2] = inst_12436);
(statearr_12459_12473[1] = 10);
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
});return ((function (switch__8496__auto__){
return (function() {
var state_machine__8497__auto__ = null;
var state_machine__8497__auto____0 = (function (){var statearr_12461 = (new Array(7));(statearr_12461[0] = state_machine__8497__auto__);
(statearr_12461[1] = 1);
return statearr_12461;
});
var state_machine__8497__auto____1 = (function (state_12446){while(true){
var result__8498__auto__ = switch__8496__auto__.call(null,state_12446);if(cljs.core.keyword_identical_QMARK_.call(null,result__8498__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8498__auto__;
}
break;
}
});
state_machine__8497__auto__ = function(state_12446){
switch(arguments.length){
case 0:
return state_machine__8497__auto____0.call(this);
case 1:
return state_machine__8497__auto____1.call(this,state_12446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8497__auto____0;
state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8497__auto____1;
return state_machine__8497__auto__;
})()
;})(switch__8496__auto__))
})();var state__8561__auto__ = (function (){var statearr_12462 = f__8560__auto__.call(null);(statearr_12462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8559__auto___12463);
return statearr_12462;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8561__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__8559__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8560__auto__ = (function (){var switch__8496__auto__ = (function (state_12621){var state_val_12622 = (state_12621[1]);if((state_val_12622 === 1))
{var state_12621__$1 = state_12621;var statearr_12623_12656 = state_12621__$1;(statearr_12623_12656[2] = null);
(statearr_12623_12656[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12622 === 2))
{var state_12621__$1 = state_12621;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12621__$1,4,in$);
} else
{if((state_val_12622 === 3))
{var inst_12619 = (state_12621[2]);var state_12621__$1 = state_12621;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12621__$1,inst_12619);
} else
{if((state_val_12622 === 4))
{var inst_12567 = (state_12621[5]);var inst_12567__$1 = (state_12621[2]);var inst_12568 = (inst_12567__$1 == null);var state_12621__$1 = (function (){var statearr_12624 = state_12621;(statearr_12624[5] = inst_12567__$1);
return statearr_12624;
})();if(cljs.core.truth_(inst_12568))
{var statearr_12625_12657 = state_12621__$1;(statearr_12625_12657[1] = 5);
} else
{var statearr_12626_12658 = state_12621__$1;(statearr_12626_12658[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12622 === 5))
{var inst_12570 = cljs.core.async.close_BANG_.call(null,out);var state_12621__$1 = state_12621;var statearr_12627_12659 = state_12621__$1;(statearr_12627_12659[2] = inst_12570);
(statearr_12627_12659[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12622 === 6))
{var inst_12567 = (state_12621[5]);var inst_12572 = f.call(null,inst_12567);var inst_12577 = cljs.core.seq.call(null,inst_12572);var inst_12578 = inst_12577;var inst_12579 = null;var inst_12580 = 0;var inst_12581 = 0;var state_12621__$1 = (function (){var statearr_12628 = state_12621;(statearr_12628[6] = inst_12581);
(statearr_12628[7] = inst_12580);
(statearr_12628[8] = inst_12578);
(statearr_12628[9] = inst_12579);
return statearr_12628;
})();var statearr_12629_12660 = state_12621__$1;(statearr_12629_12660[2] = null);
(statearr_12629_12660[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12622 === 7))
{var inst_12617 = (state_12621[2]);var state_12621__$1 = state_12621;var statearr_12630_12661 = state_12621__$1;(statearr_12630_12661[2] = inst_12617);
(statearr_12630_12661[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12622 === 8))
{var inst_12581 = (state_12621[6]);var inst_12580 = (state_12621[7]);var inst_12583 = (inst_12581 < inst_12580);var inst_12584 = inst_12583;var state_12621__$1 = state_12621;if(cljs.core.truth_(inst_12584))
{var statearr_12631_12662 = state_12621__$1;(statearr_12631_12662[1] = 10);
} else
{var statearr_12632_12663 = state_12621__$1;(statearr_12632_12663[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12622 === 9))
{var inst_12614 = (state_12621[2]);var state_12621__$1 = (function (){var statearr_12633 = state_12621;(statearr_12633[10] = inst_12614);
return statearr_12633;
})();var statearr_12634_12664 = state_12621__$1;(statearr_12634_12664[2] = null);
(statearr_12634_12664[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12622 === 10))
{var inst_12581 = (state_12621[6]);var inst_12579 = (state_12621[9]);var inst_12586 = cljs.core._nth.call(null,inst_12579,inst_12581);var state_12621__$1 = state_12621;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12621__$1,13,out,inst_12586);
} else
{if((state_val_12622 === 11))
{var inst_12592 = (state_12621[11]);var inst_12578 = (state_12621[8]);var inst_12592__$1 = cljs.core.seq.call(null,inst_12578);var state_12621__$1 = (function (){var statearr_12638 = state_12621;(statearr_12638[11] = inst_12592__$1);
return statearr_12638;
})();if(inst_12592__$1)
{var statearr_12639_12665 = state_12621__$1;(statearr_12639_12665[1] = 14);
} else
{var statearr_12640_12666 = state_12621__$1;(statearr_12640_12666[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12622 === 12))
{var inst_12612 = (state_12621[2]);var state_12621__$1 = state_12621;var statearr_12641_12667 = state_12621__$1;(statearr_12641_12667[2] = inst_12612);
(statearr_12641_12667[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12622 === 13))
{var inst_12581 = (state_12621[6]);var inst_12580 = (state_12621[7]);var inst_12578 = (state_12621[8]);var inst_12579 = (state_12621[9]);var inst_12588 = (state_12621[2]);var inst_12589 = (inst_12581 + 1);var tmp12635 = inst_12580;var tmp12636 = inst_12578;var tmp12637 = inst_12579;var inst_12578__$1 = tmp12636;var inst_12579__$1 = tmp12637;var inst_12580__$1 = tmp12635;var inst_12581__$1 = inst_12589;var state_12621__$1 = (function (){var statearr_12642 = state_12621;(statearr_12642[6] = inst_12581__$1);
(statearr_12642[7] = inst_12580__$1);
(statearr_12642[8] = inst_12578__$1);
(statearr_12642[12] = inst_12588);
(statearr_12642[9] = inst_12579__$1);
return statearr_12642;
})();var statearr_12643_12668 = state_12621__$1;(statearr_12643_12668[2] = null);
(statearr_12643_12668[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12622 === 14))
{var inst_12592 = (state_12621[11]);var inst_12594 = cljs.core.chunked_seq_QMARK_.call(null,inst_12592);var state_12621__$1 = state_12621;if(inst_12594)
{var statearr_12644_12669 = state_12621__$1;(statearr_12644_12669[1] = 17);
} else
{var statearr_12645_12670 = state_12621__$1;(statearr_12645_12670[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12622 === 15))
{var state_12621__$1 = state_12621;var statearr_12646_12671 = state_12621__$1;(statearr_12646_12671[2] = null);
(statearr_12646_12671[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12622 === 16))
{var inst_12610 = (state_12621[2]);var state_12621__$1 = state_12621;var statearr_12647_12672 = state_12621__$1;(statearr_12647_12672[2] = inst_12610);
(statearr_12647_12672[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12622 === 17))
{var inst_12592 = (state_12621[11]);var inst_12596 = cljs.core.chunk_first.call(null,inst_12592);var inst_12597 = cljs.core.chunk_rest.call(null,inst_12592);var inst_12598 = cljs.core.count.call(null,inst_12596);var inst_12578 = inst_12597;var inst_12579 = inst_12596;var inst_12580 = inst_12598;var inst_12581 = 0;var state_12621__$1 = (function (){var statearr_12648 = state_12621;(statearr_12648[6] = inst_12581);
(statearr_12648[7] = inst_12580);
(statearr_12648[8] = inst_12578);
(statearr_12648[9] = inst_12579);
return statearr_12648;
})();var statearr_12649_12673 = state_12621__$1;(statearr_12649_12673[2] = null);
(statearr_12649_12673[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12622 === 18))
{var inst_12592 = (state_12621[11]);var inst_12601 = cljs.core.first.call(null,inst_12592);var state_12621__$1 = state_12621;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12621__$1,20,out,inst_12601);
} else
{if((state_val_12622 === 19))
{var inst_12607 = (state_12621[2]);var state_12621__$1 = state_12621;var statearr_12650_12674 = state_12621__$1;(statearr_12650_12674[2] = inst_12607);
(statearr_12650_12674[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12622 === 20))
{var inst_12592 = (state_12621[11]);var inst_12603 = (state_12621[2]);var inst_12604 = cljs.core.next.call(null,inst_12592);var inst_12578 = inst_12604;var inst_12579 = null;var inst_12580 = 0;var inst_12581 = 0;var state_12621__$1 = (function (){var statearr_12651 = state_12621;(statearr_12651[6] = inst_12581);
(statearr_12651[7] = inst_12580);
(statearr_12651[8] = inst_12578);
(statearr_12651[9] = inst_12579);
(statearr_12651[13] = inst_12603);
return statearr_12651;
})();var statearr_12652_12675 = state_12621__$1;(statearr_12652_12675[2] = null);
(statearr_12652_12675[1] = 8);
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
});return ((function (switch__8496__auto__){
return (function() {
var state_machine__8497__auto__ = null;
var state_machine__8497__auto____0 = (function (){var statearr_12654 = (new Array(14));(statearr_12654[0] = state_machine__8497__auto__);
(statearr_12654[1] = 1);
return statearr_12654;
});
var state_machine__8497__auto____1 = (function (state_12621){while(true){
var result__8498__auto__ = switch__8496__auto__.call(null,state_12621);if(cljs.core.keyword_identical_QMARK_.call(null,result__8498__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8498__auto__;
}
break;
}
});
state_machine__8497__auto__ = function(state_12621){
switch(arguments.length){
case 0:
return state_machine__8497__auto____0.call(this);
case 1:
return state_machine__8497__auto____1.call(this,state_12621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8497__auto____0;
state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8497__auto____1;
return state_machine__8497__auto__;
})()
;})(switch__8496__auto__))
})();var state__8561__auto__ = (function (){var statearr_12655 = f__8560__auto__.call(null);(statearr_12655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8559__auto__);
return statearr_12655;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8561__auto__);
}));
return c__8559__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__8559__auto___12748 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8560__auto__ = (function (){var switch__8496__auto__ = (function (state_12731){var state_val_12732 = (state_12731[1]);if((state_val_12732 === 1))
{var state_12731__$1 = state_12731;var statearr_12733_12749 = state_12731__$1;(statearr_12733_12749[2] = null);
(statearr_12733_12749[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12732 === 2))
{var state_12731__$1 = state_12731;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12731__$1,4,from);
} else
{if((state_val_12732 === 3))
{var inst_12729 = (state_12731[2]);var state_12731__$1 = state_12731;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12731__$1,inst_12729);
} else
{if((state_val_12732 === 4))
{var inst_12714 = (state_12731[5]);var inst_12714__$1 = (state_12731[2]);var inst_12715 = (inst_12714__$1 == null);var state_12731__$1 = (function (){var statearr_12734 = state_12731;(statearr_12734[5] = inst_12714__$1);
return statearr_12734;
})();if(cljs.core.truth_(inst_12715))
{var statearr_12735_12750 = state_12731__$1;(statearr_12735_12750[1] = 5);
} else
{var statearr_12736_12751 = state_12731__$1;(statearr_12736_12751[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12732 === 5))
{var state_12731__$1 = state_12731;if(cljs.core.truth_(close_QMARK_))
{var statearr_12737_12752 = state_12731__$1;(statearr_12737_12752[1] = 8);
} else
{var statearr_12738_12753 = state_12731__$1;(statearr_12738_12753[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12732 === 6))
{var inst_12714 = (state_12731[5]);var state_12731__$1 = state_12731;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12731__$1,11,to,inst_12714);
} else
{if((state_val_12732 === 7))
{var inst_12727 = (state_12731[2]);var state_12731__$1 = state_12731;var statearr_12739_12754 = state_12731__$1;(statearr_12739_12754[2] = inst_12727);
(statearr_12739_12754[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12732 === 8))
{var inst_12718 = cljs.core.async.close_BANG_.call(null,to);var state_12731__$1 = state_12731;var statearr_12740_12755 = state_12731__$1;(statearr_12740_12755[2] = inst_12718);
(statearr_12740_12755[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12732 === 9))
{var state_12731__$1 = state_12731;var statearr_12741_12756 = state_12731__$1;(statearr_12741_12756[2] = null);
(statearr_12741_12756[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12732 === 10))
{var inst_12721 = (state_12731[2]);var state_12731__$1 = state_12731;var statearr_12742_12757 = state_12731__$1;(statearr_12742_12757[2] = inst_12721);
(statearr_12742_12757[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12732 === 11))
{var inst_12724 = (state_12731[2]);var state_12731__$1 = (function (){var statearr_12743 = state_12731;(statearr_12743[6] = inst_12724);
return statearr_12743;
})();var statearr_12744_12758 = state_12731__$1;(statearr_12744_12758[2] = null);
(statearr_12744_12758[1] = 2);
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
});return ((function (switch__8496__auto__){
return (function() {
var state_machine__8497__auto__ = null;
var state_machine__8497__auto____0 = (function (){var statearr_12746 = (new Array(7));(statearr_12746[0] = state_machine__8497__auto__);
(statearr_12746[1] = 1);
return statearr_12746;
});
var state_machine__8497__auto____1 = (function (state_12731){while(true){
var result__8498__auto__ = switch__8496__auto__.call(null,state_12731);if(cljs.core.keyword_identical_QMARK_.call(null,result__8498__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8498__auto__;
}
break;
}
});
state_machine__8497__auto__ = function(state_12731){
switch(arguments.length){
case 0:
return state_machine__8497__auto____0.call(this);
case 1:
return state_machine__8497__auto____1.call(this,state_12731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8497__auto____0;
state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8497__auto____1;
return state_machine__8497__auto__;
})()
;})(switch__8496__auto__))
})();var state__8561__auto__ = (function (){var statearr_12747 = f__8560__auto__.call(null);(statearr_12747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8559__auto___12748);
return statearr_12747;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8561__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__8559__auto___12837 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8560__auto__ = (function (){var switch__8496__auto__ = (function (state_12819){var state_val_12820 = (state_12819[1]);if((state_val_12820 === 1))
{var state_12819__$1 = state_12819;var statearr_12821_12838 = state_12819__$1;(statearr_12821_12838[2] = null);
(statearr_12821_12838[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12820 === 2))
{var state_12819__$1 = state_12819;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12819__$1,4,ch);
} else
{if((state_val_12820 === 3))
{var inst_12817 = (state_12819[2]);var state_12819__$1 = state_12819;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12819__$1,inst_12817);
} else
{if((state_val_12820 === 4))
{var inst_12800 = (state_12819[5]);var inst_12800__$1 = (state_12819[2]);var inst_12801 = (inst_12800__$1 == null);var state_12819__$1 = (function (){var statearr_12822 = state_12819;(statearr_12822[5] = inst_12800__$1);
return statearr_12822;
})();if(cljs.core.truth_(inst_12801))
{var statearr_12823_12839 = state_12819__$1;(statearr_12823_12839[1] = 5);
} else
{var statearr_12824_12840 = state_12819__$1;(statearr_12824_12840[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12820 === 5))
{var inst_12803 = cljs.core.async.close_BANG_.call(null,tc);var inst_12804 = cljs.core.async.close_BANG_.call(null,fc);var state_12819__$1 = (function (){var statearr_12825 = state_12819;(statearr_12825[6] = inst_12803);
return statearr_12825;
})();var statearr_12826_12841 = state_12819__$1;(statearr_12826_12841[2] = inst_12804);
(statearr_12826_12841[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12820 === 6))
{var inst_12800 = (state_12819[5]);var inst_12806 = p.call(null,inst_12800);var state_12819__$1 = state_12819;if(cljs.core.truth_(inst_12806))
{var statearr_12827_12842 = state_12819__$1;(statearr_12827_12842[1] = 9);
} else
{var statearr_12828_12843 = state_12819__$1;(statearr_12828_12843[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12820 === 7))
{var inst_12815 = (state_12819[2]);var state_12819__$1 = state_12819;var statearr_12829_12844 = state_12819__$1;(statearr_12829_12844[2] = inst_12815);
(statearr_12829_12844[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12820 === 8))
{var inst_12812 = (state_12819[2]);var state_12819__$1 = (function (){var statearr_12830 = state_12819;(statearr_12830[7] = inst_12812);
return statearr_12830;
})();var statearr_12831_12845 = state_12819__$1;(statearr_12831_12845[2] = null);
(statearr_12831_12845[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12820 === 9))
{var state_12819__$1 = state_12819;var statearr_12832_12846 = state_12819__$1;(statearr_12832_12846[2] = tc);
(statearr_12832_12846[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12820 === 10))
{var state_12819__$1 = state_12819;var statearr_12833_12847 = state_12819__$1;(statearr_12833_12847[2] = fc);
(statearr_12833_12847[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12820 === 11))
{var inst_12800 = (state_12819[5]);var inst_12810 = (state_12819[2]);var state_12819__$1 = state_12819;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12819__$1,8,inst_12810,inst_12800);
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
});return ((function (switch__8496__auto__){
return (function() {
var state_machine__8497__auto__ = null;
var state_machine__8497__auto____0 = (function (){var statearr_12835 = (new Array(8));(statearr_12835[0] = state_machine__8497__auto__);
(statearr_12835[1] = 1);
return statearr_12835;
});
var state_machine__8497__auto____1 = (function (state_12819){while(true){
var result__8498__auto__ = switch__8496__auto__.call(null,state_12819);if(cljs.core.keyword_identical_QMARK_.call(null,result__8498__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8498__auto__;
}
break;
}
});
state_machine__8497__auto__ = function(state_12819){
switch(arguments.length){
case 0:
return state_machine__8497__auto____0.call(this);
case 1:
return state_machine__8497__auto____1.call(this,state_12819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8497__auto____0;
state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8497__auto____1;
return state_machine__8497__auto__;
})()
;})(switch__8496__auto__))
})();var state__8561__auto__ = (function (){var statearr_12836 = f__8560__auto__.call(null);(statearr_12836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8559__auto___12837);
return statearr_12836;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8561__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__8559__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8560__auto__ = (function (){var switch__8496__auto__ = (function (state_12890){var state_val_12891 = (state_12890[1]);if((state_val_12891 === 7))
{var inst_12886 = (state_12890[2]);var state_12890__$1 = state_12890;var statearr_12892_12904 = state_12890__$1;(statearr_12892_12904[2] = inst_12886);
(statearr_12892_12904[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12891 === 6))
{var inst_12879 = (state_12890[5]);var inst_12876 = (state_12890[6]);var inst_12883 = f.call(null,inst_12876,inst_12879);var inst_12876__$1 = inst_12883;var state_12890__$1 = (function (){var statearr_12893 = state_12890;(statearr_12893[6] = inst_12876__$1);
return statearr_12893;
})();var statearr_12894_12905 = state_12890__$1;(statearr_12894_12905[2] = null);
(statearr_12894_12905[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12891 === 5))
{var inst_12876 = (state_12890[6]);var state_12890__$1 = state_12890;var statearr_12895_12906 = state_12890__$1;(statearr_12895_12906[2] = inst_12876);
(statearr_12895_12906[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12891 === 4))
{var inst_12879 = (state_12890[5]);var inst_12879__$1 = (state_12890[2]);var inst_12880 = (inst_12879__$1 == null);var state_12890__$1 = (function (){var statearr_12896 = state_12890;(statearr_12896[5] = inst_12879__$1);
return statearr_12896;
})();if(cljs.core.truth_(inst_12880))
{var statearr_12897_12907 = state_12890__$1;(statearr_12897_12907[1] = 5);
} else
{var statearr_12898_12908 = state_12890__$1;(statearr_12898_12908[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12891 === 3))
{var inst_12888 = (state_12890[2]);var state_12890__$1 = state_12890;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12890__$1,inst_12888);
} else
{if((state_val_12891 === 2))
{var state_12890__$1 = state_12890;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12890__$1,4,ch);
} else
{if((state_val_12891 === 1))
{var inst_12876 = init;var state_12890__$1 = (function (){var statearr_12899 = state_12890;(statearr_12899[6] = inst_12876);
return statearr_12899;
})();var statearr_12900_12909 = state_12890__$1;(statearr_12900_12909[2] = null);
(statearr_12900_12909[1] = 2);
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
});return ((function (switch__8496__auto__){
return (function() {
var state_machine__8497__auto__ = null;
var state_machine__8497__auto____0 = (function (){var statearr_12902 = (new Array(7));(statearr_12902[0] = state_machine__8497__auto__);
(statearr_12902[1] = 1);
return statearr_12902;
});
var state_machine__8497__auto____1 = (function (state_12890){while(true){
var result__8498__auto__ = switch__8496__auto__.call(null,state_12890);if(cljs.core.keyword_identical_QMARK_.call(null,result__8498__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8498__auto__;
}
break;
}
});
state_machine__8497__auto__ = function(state_12890){
switch(arguments.length){
case 0:
return state_machine__8497__auto____0.call(this);
case 1:
return state_machine__8497__auto____1.call(this,state_12890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8497__auto____0;
state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8497__auto____1;
return state_machine__8497__auto__;
})()
;})(switch__8496__auto__))
})();var state__8561__auto__ = (function (){var statearr_12903 = f__8560__auto__.call(null);(statearr_12903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8559__auto__);
return statearr_12903;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8561__auto__);
}));
return c__8559__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__8559__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8560__auto__ = (function (){var switch__8496__auto__ = (function (state_12967){var state_val_12968 = (state_12967[1]);if((state_val_12968 === 1))
{var inst_12947 = cljs.core.seq.call(null,coll);var inst_12948 = inst_12947;var state_12967__$1 = (function (){var statearr_12969 = state_12967;(statearr_12969[5] = inst_12948);
return statearr_12969;
})();var statearr_12970_12984 = state_12967__$1;(statearr_12970_12984[2] = null);
(statearr_12970_12984[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12968 === 2))
{var inst_12948 = (state_12967[5]);var state_12967__$1 = state_12967;if(cljs.core.truth_(inst_12948))
{var statearr_12971_12985 = state_12967__$1;(statearr_12971_12985[1] = 4);
} else
{var statearr_12972_12986 = state_12967__$1;(statearr_12972_12986[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12968 === 3))
{var inst_12965 = (state_12967[2]);var state_12967__$1 = state_12967;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12967__$1,inst_12965);
} else
{if((state_val_12968 === 4))
{var inst_12948 = (state_12967[5]);var inst_12951 = cljs.core.first.call(null,inst_12948);var state_12967__$1 = state_12967;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12967__$1,7,ch,inst_12951);
} else
{if((state_val_12968 === 5))
{var state_12967__$1 = state_12967;if(cljs.core.truth_(close_QMARK_))
{var statearr_12973_12987 = state_12967__$1;(statearr_12973_12987[1] = 8);
} else
{var statearr_12974_12988 = state_12967__$1;(statearr_12974_12988[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12968 === 6))
{var inst_12963 = (state_12967[2]);var state_12967__$1 = state_12967;var statearr_12975_12989 = state_12967__$1;(statearr_12975_12989[2] = inst_12963);
(statearr_12975_12989[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12968 === 7))
{var inst_12948 = (state_12967[5]);var inst_12953 = (state_12967[2]);var inst_12954 = cljs.core.next.call(null,inst_12948);var inst_12948__$1 = inst_12954;var state_12967__$1 = (function (){var statearr_12976 = state_12967;(statearr_12976[5] = inst_12948__$1);
(statearr_12976[6] = inst_12953);
return statearr_12976;
})();var statearr_12977_12990 = state_12967__$1;(statearr_12977_12990[2] = null);
(statearr_12977_12990[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12968 === 8))
{var inst_12958 = cljs.core.async.close_BANG_.call(null,ch);var state_12967__$1 = state_12967;var statearr_12978_12991 = state_12967__$1;(statearr_12978_12991[2] = inst_12958);
(statearr_12978_12991[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12968 === 9))
{var state_12967__$1 = state_12967;var statearr_12979_12992 = state_12967__$1;(statearr_12979_12992[2] = null);
(statearr_12979_12992[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12968 === 10))
{var inst_12961 = (state_12967[2]);var state_12967__$1 = state_12967;var statearr_12980_12993 = state_12967__$1;(statearr_12980_12993[2] = inst_12961);
(statearr_12980_12993[1] = 6);
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
});return ((function (switch__8496__auto__){
return (function() {
var state_machine__8497__auto__ = null;
var state_machine__8497__auto____0 = (function (){var statearr_12982 = (new Array(7));(statearr_12982[0] = state_machine__8497__auto__);
(statearr_12982[1] = 1);
return statearr_12982;
});
var state_machine__8497__auto____1 = (function (state_12967){while(true){
var result__8498__auto__ = switch__8496__auto__.call(null,state_12967);if(cljs.core.keyword_identical_QMARK_.call(null,result__8498__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8498__auto__;
}
break;
}
});
state_machine__8497__auto__ = function(state_12967){
switch(arguments.length){
case 0:
return state_machine__8497__auto____0.call(this);
case 1:
return state_machine__8497__auto____1.call(this,state_12967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8497__auto____0;
state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8497__auto____1;
return state_machine__8497__auto__;
})()
;})(switch__8496__auto__))
})();var state__8561__auto__ = (function (){var statearr_12983 = f__8560__auto__.call(null);(statearr_12983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8559__auto__);
return statearr_12983;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8561__auto__);
}));
return c__8559__auto__;
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
{var x__7093__auto__ = (((_ == null))?null:_);return (function (){var or__3943__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7093__auto__)]);if(or__3943__auto__)
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
{var x__7093__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7093__auto__)]);if(or__3943__auto__)
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
{var x__7093__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7093__auto__)]);if(or__3943__auto__)
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
{var x__7093__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7093__auto__)]);if(or__3943__auto__)
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13206 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t13206');

/**
* @constructor
*/
cljs.core.async.t13206 = (function (cs,ch,mult,meta13207){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13207 = meta13207;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13206.cljs$lang$type = true;
cljs.core.async.t13206.cljs$lang$ctorStr = "cljs.core.async/t13206";
cljs.core.async.t13206.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7018__auto__,writer__7019__auto__,opt__7020__auto__){return cljs.core._write.call(null,writer__7019__auto__,"cljs.core.async/t13206");
});})(cs))
;
cljs.core.async.t13206.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13206.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13206.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13206.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13206.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13206.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
return self__.ch;
});})(cs))
;
cljs.core.async.t13206.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13208){var self__ = this;
return self__.meta13207;
});})(cs))
;
cljs.core.async.t13206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13208,meta13207__$1){var self__ = this;
return (new cljs.core.async.t13206(self__.cs,self__.ch,self__.mult,meta13207__$1));
});})(cs))
;
cljs.core.async.__GT_t13206 = ((function (cs){
return (function __GT_t13206(cs__$1,ch__$1,mult__$1,meta13207){return (new cljs.core.async.t13206(cs__$1,ch__$1,mult__$1,meta13207));
});})(cs))
;
}
return (new cljs.core.async.t13206(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__8559__auto___13418 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8560__auto__ = (function (){var switch__8496__auto__ = (function (state_13336){var state_val_13337 = (state_13336[1]);if((state_val_13337 === 32))
{try{var inst_13287 = (state_13336[5]);var inst_13211 = (state_13336[6]);var inst_13293 = cljs.core.async.put_BANG_.call(null,inst_13287,inst_13211,done);var state_13336__$1 = state_13336;var statearr_13340_13419 = state_13336__$1;(statearr_13340_13419[2] = inst_13293);
(statearr_13340_13419[1] = 30);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e13338){if((e13338 instanceof Object))
{var ex__8490__auto__ = e13338;var statearr_13339_13420 = state_13336;(statearr_13339_13420[1] = 31);
(statearr_13339_13420[2] = ex__8490__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13338;
} else
{return null;
}
}
}} else
{if((state_val_13337 === 1))
{var state_13336__$1 = state_13336;var statearr_13341_13421 = state_13336__$1;(statearr_13341_13421[2] = null);
(statearr_13341_13421[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13337 === 33))
{var inst_13299 = (state_13336[7]);var inst_13301 = cljs.core.chunked_seq_QMARK_.call(null,inst_13299);var state_13336__$1 = state_13336;if(inst_13301)
{var statearr_13342_13422 = state_13336__$1;(statearr_13342_13422[1] = 36);
} else
{var statearr_13343_13423 = state_13336__$1;(statearr_13343_13423[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13337 === 2))
{var state_13336__$1 = state_13336;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13336__$1,4,ch);
} else
{if((state_val_13337 === 34))
{var state_13336__$1 = state_13336;var statearr_13344_13424 = state_13336__$1;(statearr_13344_13424[2] = null);
(statearr_13344_13424[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13337 === 3))
{var inst_13334 = (state_13336[2]);var state_13336__$1 = state_13336;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13336__$1,inst_13334);
} else
{if((state_val_13337 === 35))
{var inst_13323 = (state_13336[2]);var state_13336__$1 = state_13336;var statearr_13345_13425 = state_13336__$1;(statearr_13345_13425[2] = inst_13323);
(statearr_13345_13425[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13337 === 4))
{var inst_13211 = (state_13336[6]);var inst_13211__$1 = (state_13336[2]);var inst_13212 = (inst_13211__$1 == null);var state_13336__$1 = (function (){var statearr_13346 = state_13336;(statearr_13346[6] = inst_13211__$1);
return statearr_13346;
})();if(cljs.core.truth_(inst_13212))
{var statearr_13347_13426 = state_13336__$1;(statearr_13347_13426[1] = 5);
} else
{var statearr_13348_13427 = state_13336__$1;(statearr_13348_13427[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13337 === 36))
{var inst_13299 = (state_13336[7]);var inst_13303 = cljs.core.chunk_first.call(null,inst_13299);var inst_13304 = cljs.core.chunk_rest.call(null,inst_13299);var inst_13305 = cljs.core.count.call(null,inst_13303);var inst_13279 = inst_13304;var inst_13280 = inst_13303;var inst_13281 = inst_13305;var inst_13282 = 0;var state_13336__$1 = (function (){var statearr_13349 = state_13336;(statearr_13349[8] = inst_13282);
(statearr_13349[9] = inst_13281);
(statearr_13349[10] = inst_13279);
(statearr_13349[11] = inst_13280);
return statearr_13349;
})();var statearr_13350_13428 = state_13336__$1;(statearr_13350_13428[2] = null);
(statearr_13350_13428[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13337 === 5))
{var inst_13218 = cljs.core.deref.call(null,cs);var inst_13219 = cljs.core.seq.call(null,inst_13218);var inst_13220 = inst_13219;var inst_13221 = null;var inst_13222 = 0;var inst_13223 = 0;var state_13336__$1 = (function (){var statearr_13351 = state_13336;(statearr_13351[12] = inst_13223);
(statearr_13351[13] = inst_13221);
(statearr_13351[14] = inst_13222);
(statearr_13351[15] = inst_13220);
return statearr_13351;
})();var statearr_13352_13429 = state_13336__$1;(statearr_13352_13429[2] = null);
(statearr_13352_13429[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13337 === 37))
{var inst_13299 = (state_13336[7]);var inst_13308 = cljs.core.first.call(null,inst_13299);var state_13336__$1 = (function (){var statearr_13353 = state_13336;(statearr_13353[16] = inst_13308);
return statearr_13353;
})();var statearr_13354_13430 = state_13336__$1;(statearr_13354_13430[2] = null);
(statearr_13354_13430[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13337 === 6))
{var inst_13270 = cljs.core.deref.call(null,cs);var inst_13271 = cljs.core.keys.call(null,inst_13270);var inst_13272 = cljs.core.count.call(null,inst_13271);var inst_13273 = cljs.core.reset_BANG_.call(null,dctr,inst_13272);var inst_13278 = cljs.core.seq.call(null,inst_13271);var inst_13279 = inst_13278;var inst_13280 = null;var inst_13281 = 0;var inst_13282 = 0;var state_13336__$1 = (function (){var statearr_13355 = state_13336;(statearr_13355[17] = inst_13273);
(statearr_13355[8] = inst_13282);
(statearr_13355[9] = inst_13281);
(statearr_13355[10] = inst_13279);
(statearr_13355[11] = inst_13280);
return statearr_13355;
})();var statearr_13356_13431 = state_13336__$1;(statearr_13356_13431[2] = null);
(statearr_13356_13431[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13337 === 38))
{var inst_13320 = (state_13336[2]);var state_13336__$1 = state_13336;var statearr_13357_13432 = state_13336__$1;(statearr_13357_13432[2] = inst_13320);
(statearr_13357_13432[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13337 === 7))
{var inst_13332 = (state_13336[2]);var state_13336__$1 = state_13336;var statearr_13358_13433 = state_13336__$1;(statearr_13358_13433[2] = inst_13332);
(statearr_13358_13433[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13337 === 39))
{var inst_13299 = (state_13336[7]);var inst_13316 = (state_13336[2]);var inst_13317 = cljs.core.next.call(null,inst_13299);var inst_13279 = inst_13317;var inst_13280 = null;var inst_13281 = 0;var inst_13282 = 0;var state_13336__$1 = (function (){var statearr_13359 = state_13336;(statearr_13359[18] = inst_13316);
(statearr_13359[8] = inst_13282);
(statearr_13359[9] = inst_13281);
(statearr_13359[10] = inst_13279);
(statearr_13359[11] = inst_13280);
return statearr_13359;
})();var statearr_13360_13434 = state_13336__$1;(statearr_13360_13434[2] = null);
(statearr_13360_13434[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13337 === 8))
{var inst_13223 = (state_13336[12]);var inst_13222 = (state_13336[14]);var inst_13225 = (inst_13223 < inst_13222);var inst_13226 = inst_13225;var state_13336__$1 = state_13336;if(cljs.core.truth_(inst_13226))
{var statearr_13361_13435 = state_13336__$1;(statearr_13361_13435[1] = 10);
} else
{var statearr_13362_13436 = state_13336__$1;(statearr_13362_13436[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13337 === 40))
{var inst_13308 = (state_13336[16]);var inst_13309 = (state_13336[2]);var inst_13310 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13311 = cljs.core.async.untap_STAR_.call(null,m,inst_13308);var state_13336__$1 = (function (){var statearr_13363 = state_13336;(statearr_13363[19] = inst_13310);
(statearr_13363[20] = inst_13309);
return statearr_13363;
})();var statearr_13364_13437 = state_13336__$1;(statearr_13364_13437[2] = inst_13311);
(statearr_13364_13437[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13337 === 9))
{var inst_13268 = (state_13336[2]);var state_13336__$1 = state_13336;var statearr_13365_13438 = state_13336__$1;(statearr_13365_13438[2] = inst_13268);
(statearr_13365_13438[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13337 === 41))
{try{var inst_13308 = (state_13336[16]);var inst_13211 = (state_13336[6]);var inst_13314 = cljs.core.async.put_BANG_.call(null,inst_13308,inst_13211,done);var state_13336__$1 = state_13336;var statearr_13368_13439 = state_13336__$1;(statearr_13368_13439[2] = inst_13314);
(statearr_13368_13439[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e13366){if((e13366 instanceof Object))
{var ex__8490__auto__ = e13366;var statearr_13367_13440 = state_13336;(statearr_13367_13440[1] = 40);
(statearr_13367_13440[2] = ex__8490__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13366;
} else
{return null;
}
}
}} else
{if((state_val_13337 === 10))
{var inst_13223 = (state_13336[12]);var inst_13221 = (state_13336[13]);var inst_13229 = cljs.core._nth.call(null,inst_13221,inst_13223);var inst_13230 = cljs.core.nth.call(null,inst_13229,0,null);var inst_13231 = cljs.core.nth.call(null,inst_13229,1,null);var state_13336__$1 = (function (){var statearr_13369 = state_13336;(statearr_13369[21] = inst_13230);
return statearr_13369;
})();if(cljs.core.truth_(inst_13231))
{var statearr_13370_13441 = state_13336__$1;(statearr_13370_13441[1] = 13);
} else
{var statearr_13371_13442 = state_13336__$1;(statearr_13371_13442[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13337 === 42))
{var inst_13329 = (state_13336[2]);var state_13336__$1 = (function (){var statearr_13372 = state_13336;(statearr_13372[22] = inst_13329);
return statearr_13372;
})();var statearr_13373_13443 = state_13336__$1;(statearr_13373_13443[2] = null);
(statearr_13373_13443[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13337 === 11))
{var inst_13240 = (state_13336[23]);var inst_13220 = (state_13336[15]);var inst_13240__$1 = cljs.core.seq.call(null,inst_13220);var state_13336__$1 = (function (){var statearr_13374 = state_13336;(statearr_13374[23] = inst_13240__$1);
return statearr_13374;
})();if(inst_13240__$1)
{var statearr_13375_13444 = state_13336__$1;(statearr_13375_13444[1] = 16);
} else
{var statearr_13376_13445 = state_13336__$1;(statearr_13376_13445[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13337 === 12))
{var inst_13266 = (state_13336[2]);var state_13336__$1 = state_13336;var statearr_13377_13446 = state_13336__$1;(statearr_13377_13446[2] = inst_13266);
(statearr_13377_13446[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13337 === 13))
{var inst_13230 = (state_13336[21]);var inst_13233 = cljs.core.async.close_BANG_.call(null,inst_13230);var state_13336__$1 = state_13336;var statearr_13381_13447 = state_13336__$1;(statearr_13381_13447[2] = inst_13233);
(statearr_13381_13447[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13337 === 14))
{var state_13336__$1 = state_13336;var statearr_13382_13448 = state_13336__$1;(statearr_13382_13448[2] = null);
(statearr_13382_13448[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13337 === 15))
{var inst_13223 = (state_13336[12]);var inst_13221 = (state_13336[13]);var inst_13222 = (state_13336[14]);var inst_13220 = (state_13336[15]);var inst_13236 = (state_13336[2]);var inst_13237 = (inst_13223 + 1);var tmp13378 = inst_13221;var tmp13379 = inst_13222;var tmp13380 = inst_13220;var inst_13220__$1 = tmp13380;var inst_13221__$1 = tmp13378;var inst_13222__$1 = tmp13379;var inst_13223__$1 = inst_13237;var state_13336__$1 = (function (){var statearr_13383 = state_13336;(statearr_13383[24] = inst_13236);
(statearr_13383[12] = inst_13223__$1);
(statearr_13383[13] = inst_13221__$1);
(statearr_13383[14] = inst_13222__$1);
(statearr_13383[15] = inst_13220__$1);
return statearr_13383;
})();var statearr_13384_13449 = state_13336__$1;(statearr_13384_13449[2] = null);
(statearr_13384_13449[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13337 === 16))
{var inst_13240 = (state_13336[23]);var inst_13242 = cljs.core.chunked_seq_QMARK_.call(null,inst_13240);var state_13336__$1 = state_13336;if(inst_13242)
{var statearr_13385_13450 = state_13336__$1;(statearr_13385_13450[1] = 19);
} else
{var statearr_13386_13451 = state_13336__$1;(statearr_13386_13451[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13337 === 17))
{var state_13336__$1 = state_13336;var statearr_13387_13452 = state_13336__$1;(statearr_13387_13452[2] = null);
(statearr_13387_13452[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13337 === 18))
{var inst_13264 = (state_13336[2]);var state_13336__$1 = state_13336;var statearr_13388_13453 = state_13336__$1;(statearr_13388_13453[2] = inst_13264);
(statearr_13388_13453[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13337 === 19))
{var inst_13240 = (state_13336[23]);var inst_13244 = cljs.core.chunk_first.call(null,inst_13240);var inst_13245 = cljs.core.chunk_rest.call(null,inst_13240);var inst_13246 = cljs.core.count.call(null,inst_13244);var inst_13220 = inst_13245;var inst_13221 = inst_13244;var inst_13222 = inst_13246;var inst_13223 = 0;var state_13336__$1 = (function (){var statearr_13389 = state_13336;(statearr_13389[12] = inst_13223);
(statearr_13389[13] = inst_13221);
(statearr_13389[14] = inst_13222);
(statearr_13389[15] = inst_13220);
return statearr_13389;
})();var statearr_13390_13454 = state_13336__$1;(statearr_13390_13454[2] = null);
(statearr_13390_13454[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13337 === 20))
{var inst_13240 = (state_13336[23]);var inst_13250 = cljs.core.first.call(null,inst_13240);var inst_13251 = cljs.core.nth.call(null,inst_13250,0,null);var inst_13252 = cljs.core.nth.call(null,inst_13250,1,null);var state_13336__$1 = (function (){var statearr_13391 = state_13336;(statearr_13391[25] = inst_13251);
return statearr_13391;
})();if(cljs.core.truth_(inst_13252))
{var statearr_13392_13455 = state_13336__$1;(statearr_13392_13455[1] = 22);
} else
{var statearr_13393_13456 = state_13336__$1;(statearr_13393_13456[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13337 === 21))
{var inst_13261 = (state_13336[2]);var state_13336__$1 = state_13336;var statearr_13394_13457 = state_13336__$1;(statearr_13394_13457[2] = inst_13261);
(statearr_13394_13457[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13337 === 22))
{var inst_13251 = (state_13336[25]);var inst_13254 = cljs.core.async.close_BANG_.call(null,inst_13251);var state_13336__$1 = state_13336;var statearr_13395_13458 = state_13336__$1;(statearr_13395_13458[2] = inst_13254);
(statearr_13395_13458[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13337 === 23))
{var state_13336__$1 = state_13336;var statearr_13396_13459 = state_13336__$1;(statearr_13396_13459[2] = null);
(statearr_13396_13459[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13337 === 24))
{var inst_13240 = (state_13336[23]);var inst_13257 = (state_13336[2]);var inst_13258 = cljs.core.next.call(null,inst_13240);var inst_13220 = inst_13258;var inst_13221 = null;var inst_13222 = 0;var inst_13223 = 0;var state_13336__$1 = (function (){var statearr_13397 = state_13336;(statearr_13397[12] = inst_13223);
(statearr_13397[13] = inst_13221);
(statearr_13397[14] = inst_13222);
(statearr_13397[15] = inst_13220);
(statearr_13397[26] = inst_13257);
return statearr_13397;
})();var statearr_13398_13460 = state_13336__$1;(statearr_13398_13460[2] = null);
(statearr_13398_13460[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13337 === 25))
{var inst_13282 = (state_13336[8]);var inst_13281 = (state_13336[9]);var inst_13284 = (inst_13282 < inst_13281);var inst_13285 = inst_13284;var state_13336__$1 = state_13336;if(cljs.core.truth_(inst_13285))
{var statearr_13399_13461 = state_13336__$1;(statearr_13399_13461[1] = 27);
} else
{var statearr_13400_13462 = state_13336__$1;(statearr_13400_13462[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13337 === 26))
{var inst_13327 = (state_13336[2]);var state_13336__$1 = (function (){var statearr_13401 = state_13336;(statearr_13401[27] = inst_13327);
return statearr_13401;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13336__$1,42,dchan);
} else
{if((state_val_13337 === 27))
{var inst_13282 = (state_13336[8]);var inst_13280 = (state_13336[11]);var inst_13287 = cljs.core._nth.call(null,inst_13280,inst_13282);var state_13336__$1 = (function (){var statearr_13402 = state_13336;(statearr_13402[5] = inst_13287);
return statearr_13402;
})();var statearr_13403_13463 = state_13336__$1;(statearr_13403_13463[2] = null);
(statearr_13403_13463[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13337 === 28))
{var inst_13279 = (state_13336[10]);var inst_13299 = (state_13336[7]);var inst_13299__$1 = cljs.core.seq.call(null,inst_13279);var state_13336__$1 = (function (){var statearr_13407 = state_13336;(statearr_13407[7] = inst_13299__$1);
return statearr_13407;
})();if(inst_13299__$1)
{var statearr_13408_13464 = state_13336__$1;(statearr_13408_13464[1] = 33);
} else
{var statearr_13409_13465 = state_13336__$1;(statearr_13409_13465[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13337 === 29))
{var inst_13325 = (state_13336[2]);var state_13336__$1 = state_13336;var statearr_13410_13466 = state_13336__$1;(statearr_13410_13466[2] = inst_13325);
(statearr_13410_13466[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13337 === 30))
{var inst_13282 = (state_13336[8]);var inst_13281 = (state_13336[9]);var inst_13279 = (state_13336[10]);var inst_13280 = (state_13336[11]);var inst_13295 = (state_13336[2]);var inst_13296 = (inst_13282 + 1);var tmp13404 = inst_13281;var tmp13405 = inst_13279;var tmp13406 = inst_13280;var inst_13279__$1 = tmp13405;var inst_13280__$1 = tmp13406;var inst_13281__$1 = tmp13404;var inst_13282__$1 = inst_13296;var state_13336__$1 = (function (){var statearr_13411 = state_13336;(statearr_13411[8] = inst_13282__$1);
(statearr_13411[9] = inst_13281__$1);
(statearr_13411[10] = inst_13279__$1);
(statearr_13411[11] = inst_13280__$1);
(statearr_13411[28] = inst_13295);
return statearr_13411;
})();var statearr_13412_13467 = state_13336__$1;(statearr_13412_13467[2] = null);
(statearr_13412_13467[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13337 === 31))
{var inst_13287 = (state_13336[5]);var inst_13288 = (state_13336[2]);var inst_13289 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13290 = cljs.core.async.untap_STAR_.call(null,m,inst_13287);var state_13336__$1 = (function (){var statearr_13413 = state_13336;(statearr_13413[29] = inst_13289);
(statearr_13413[30] = inst_13288);
return statearr_13413;
})();var statearr_13414_13468 = state_13336__$1;(statearr_13414_13468[2] = inst_13290);
(statearr_13414_13468[1] = 30);
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
});return ((function (switch__8496__auto__){
return (function() {
var state_machine__8497__auto__ = null;
var state_machine__8497__auto____0 = (function (){var statearr_13416 = (new Array(31));(statearr_13416[0] = state_machine__8497__auto__);
(statearr_13416[1] = 1);
return statearr_13416;
});
var state_machine__8497__auto____1 = (function (state_13336){while(true){
var result__8498__auto__ = switch__8496__auto__.call(null,state_13336);if(cljs.core.keyword_identical_QMARK_.call(null,result__8498__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8498__auto__;
}
break;
}
});
state_machine__8497__auto__ = function(state_13336){
switch(arguments.length){
case 0:
return state_machine__8497__auto____0.call(this);
case 1:
return state_machine__8497__auto____1.call(this,state_13336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8497__auto____0;
state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8497__auto____1;
return state_machine__8497__auto__;
})()
;})(switch__8496__auto__))
})();var state__8561__auto__ = (function (){var statearr_13417 = f__8560__auto__.call(null);(statearr_13417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8559__auto___13418);
return statearr_13417;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8561__auto__);
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
{var x__7093__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7093__auto__)]);if(or__3943__auto__)
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
{var x__7093__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7093__auto__)]);if(or__3943__auto__)
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
{var x__7093__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7093__auto__)]);if(or__3943__auto__)
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
{var x__7093__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7093__auto__)]);if(or__3943__auto__)
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
{var x__7093__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7093__auto__)]);if(or__3943__auto__)
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
;var m = (function (){if(typeof cljs.core.async.t13589 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t13589');

/**
* @constructor
*/
cljs.core.async.t13589 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta13590){
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
this.meta13590 = meta13590;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13589.cljs$lang$type = true;
cljs.core.async.t13589.cljs$lang$ctorStr = "cljs.core.async/t13589";
cljs.core.async.t13589.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7018__auto__,writer__7019__auto__,opt__7020__auto__){return cljs.core._write.call(null,writer__7019__auto__,"cljs.core.async/t13589");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13589.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13589.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13589.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13589.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13589.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13589.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13589.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13589.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13589.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13591){var self__ = this;
return self__.meta13590;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13589.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13591,meta13590__$1){var self__ = this;
return (new cljs.core.async.t13589(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta13590__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13589 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13589(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13590){return (new cljs.core.async.t13589(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13590));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13589(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__8559__auto___13709 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8560__auto__ = (function (){var switch__8496__auto__ = (function (state_13662){var state_val_13663 = (state_13662[1]);if((state_val_13663 === 1))
{var inst_13595 = (state_13662[5]);var inst_13595__$1 = calc_state.call(null);var inst_13596 = cljs.core.seq_QMARK_.call(null,inst_13595__$1);var state_13662__$1 = (function (){var statearr_13664 = state_13662;(statearr_13664[5] = inst_13595__$1);
return statearr_13664;
})();if(inst_13596)
{var statearr_13665_13710 = state_13662__$1;(statearr_13665_13710[1] = 2);
} else
{var statearr_13666_13711 = state_13662__$1;(statearr_13666_13711[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13663 === 2))
{var inst_13595 = (state_13662[5]);var inst_13598 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13595);var state_13662__$1 = state_13662;var statearr_13667_13712 = state_13662__$1;(statearr_13667_13712[2] = inst_13598);
(statearr_13667_13712[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13663 === 3))
{var inst_13595 = (state_13662[5]);var state_13662__$1 = state_13662;var statearr_13668_13713 = state_13662__$1;(statearr_13668_13713[2] = inst_13595);
(statearr_13668_13713[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13663 === 4))
{var inst_13595 = (state_13662[5]);var inst_13601 = (state_13662[2]);var inst_13602 = cljs.core.get.call(null,inst_13601,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13603 = cljs.core.get.call(null,inst_13601,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13604 = cljs.core.get.call(null,inst_13601,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_13605 = inst_13595;var state_13662__$1 = (function (){var statearr_13669 = state_13662;(statearr_13669[6] = inst_13605);
(statearr_13669[7] = inst_13602);
(statearr_13669[8] = inst_13603);
(statearr_13669[9] = inst_13604);
return statearr_13669;
})();var statearr_13670_13714 = state_13662__$1;(statearr_13670_13714[2] = null);
(statearr_13670_13714[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13663 === 5))
{var inst_13605 = (state_13662[6]);var inst_13608 = cljs.core.seq_QMARK_.call(null,inst_13605);var state_13662__$1 = state_13662;if(inst_13608)
{var statearr_13671_13715 = state_13662__$1;(statearr_13671_13715[1] = 7);
} else
{var statearr_13672_13716 = state_13662__$1;(statearr_13672_13716[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13663 === 6))
{var inst_13660 = (state_13662[2]);var state_13662__$1 = state_13662;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13662__$1,inst_13660);
} else
{if((state_val_13663 === 7))
{var inst_13605 = (state_13662[6]);var inst_13610 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13605);var state_13662__$1 = state_13662;var statearr_13673_13717 = state_13662__$1;(statearr_13673_13717[2] = inst_13610);
(statearr_13673_13717[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13663 === 8))
{var inst_13605 = (state_13662[6]);var state_13662__$1 = state_13662;var statearr_13674_13718 = state_13662__$1;(statearr_13674_13718[2] = inst_13605);
(statearr_13674_13718[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13663 === 9))
{var inst_13613 = (state_13662[10]);var inst_13613__$1 = (state_13662[2]);var inst_13614 = cljs.core.get.call(null,inst_13613__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13615 = cljs.core.get.call(null,inst_13613__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13616 = cljs.core.get.call(null,inst_13613__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_13662__$1 = (function (){var statearr_13675 = state_13662;(statearr_13675[11] = inst_13616);
(statearr_13675[10] = inst_13613__$1);
(statearr_13675[12] = inst_13615);
return statearr_13675;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13662__$1,10,inst_13614);
} else
{if((state_val_13663 === 10))
{var inst_13622 = (state_13662[13]);var inst_13620 = (state_13662[14]);var inst_13619 = (state_13662[2]);var inst_13620__$1 = cljs.core.nth.call(null,inst_13619,0,null);var inst_13621 = cljs.core.nth.call(null,inst_13619,1,null);var inst_13622__$1 = (inst_13620__$1 == null);var state_13662__$1 = (function (){var statearr_13676 = state_13662;(statearr_13676[13] = inst_13622__$1);
(statearr_13676[15] = inst_13621);
(statearr_13676[14] = inst_13620__$1);
return statearr_13676;
})();if(cljs.core.truth_(inst_13622__$1))
{var statearr_13677_13719 = state_13662__$1;(statearr_13677_13719[1] = 11);
} else
{var statearr_13678_13720 = state_13662__$1;(statearr_13678_13720[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13663 === 11))
{var inst_13622 = (state_13662[13]);var state_13662__$1 = state_13662;var statearr_13679_13721 = state_13662__$1;(statearr_13679_13721[2] = inst_13622);
(statearr_13679_13721[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13663 === 12))
{var inst_13621 = (state_13662[15]);var inst_13625 = cljs.core._EQ_.call(null,inst_13621,change);var state_13662__$1 = state_13662;var statearr_13680_13722 = state_13662__$1;(statearr_13680_13722[2] = inst_13625);
(statearr_13680_13722[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13663 === 13))
{var inst_13627 = (state_13662[2]);var state_13662__$1 = state_13662;if(cljs.core.truth_(inst_13627))
{var statearr_13681_13723 = state_13662__$1;(statearr_13681_13723[1] = 14);
} else
{var statearr_13682_13724 = state_13662__$1;(statearr_13682_13724[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13663 === 14))
{var inst_13620 = (state_13662[14]);var inst_13629 = (inst_13620 == null);var state_13662__$1 = state_13662;if(cljs.core.truth_(inst_13629))
{var statearr_13683_13725 = state_13662__$1;(statearr_13683_13725[1] = 17);
} else
{var statearr_13684_13726 = state_13662__$1;(statearr_13684_13726[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13663 === 15))
{var inst_13616 = (state_13662[11]);var inst_13621 = (state_13662[15]);var inst_13638 = (state_13662[16]);var inst_13638__$1 = inst_13616.call(null,inst_13621);var state_13662__$1 = (function (){var statearr_13685 = state_13662;(statearr_13685[16] = inst_13638__$1);
return statearr_13685;
})();if(cljs.core.truth_(inst_13638__$1))
{var statearr_13686_13727 = state_13662__$1;(statearr_13686_13727[1] = 20);
} else
{var statearr_13687_13728 = state_13662__$1;(statearr_13687_13728[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13663 === 16))
{var inst_13658 = (state_13662[2]);var state_13662__$1 = state_13662;var statearr_13688_13729 = state_13662__$1;(statearr_13688_13729[2] = inst_13658);
(statearr_13688_13729[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13663 === 17))
{var inst_13621 = (state_13662[15]);var inst_13631 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13621);var state_13662__$1 = state_13662;var statearr_13689_13730 = state_13662__$1;(statearr_13689_13730[2] = inst_13631);
(statearr_13689_13730[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13663 === 18))
{var state_13662__$1 = state_13662;var statearr_13690_13731 = state_13662__$1;(statearr_13690_13731[2] = null);
(statearr_13690_13731[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13663 === 19))
{var inst_13634 = (state_13662[2]);var inst_13635 = calc_state.call(null);var inst_13605 = inst_13635;var state_13662__$1 = (function (){var statearr_13691 = state_13662;(statearr_13691[6] = inst_13605);
(statearr_13691[17] = inst_13634);
return statearr_13691;
})();var statearr_13692_13732 = state_13662__$1;(statearr_13692_13732[2] = null);
(statearr_13692_13732[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13663 === 20))
{var inst_13638 = (state_13662[16]);var state_13662__$1 = state_13662;var statearr_13693_13733 = state_13662__$1;(statearr_13693_13733[2] = inst_13638);
(statearr_13693_13733[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13663 === 21))
{var inst_13641 = (state_13662[18]);var inst_13616 = (state_13662[11]);var inst_13641__$1 = cljs.core.empty_QMARK_.call(null,inst_13616);var state_13662__$1 = (function (){var statearr_13694 = state_13662;(statearr_13694[18] = inst_13641__$1);
return statearr_13694;
})();if(inst_13641__$1)
{var statearr_13695_13734 = state_13662__$1;(statearr_13695_13734[1] = 23);
} else
{var statearr_13696_13735 = state_13662__$1;(statearr_13696_13735[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13663 === 22))
{var inst_13649 = (state_13662[2]);var state_13662__$1 = state_13662;if(cljs.core.truth_(inst_13649))
{var statearr_13697_13736 = state_13662__$1;(statearr_13697_13736[1] = 26);
} else
{var statearr_13698_13737 = state_13662__$1;(statearr_13698_13737[1] = 27);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13663 === 23))
{var inst_13621 = (state_13662[15]);var inst_13615 = (state_13662[12]);var inst_13643 = inst_13615.call(null,inst_13621);var inst_13644 = cljs.core.not.call(null,inst_13643);var state_13662__$1 = state_13662;var statearr_13699_13738 = state_13662__$1;(statearr_13699_13738[2] = inst_13644);
(statearr_13699_13738[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13663 === 24))
{var inst_13641 = (state_13662[18]);var state_13662__$1 = state_13662;var statearr_13700_13739 = state_13662__$1;(statearr_13700_13739[2] = inst_13641);
(statearr_13700_13739[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13663 === 25))
{var inst_13647 = (state_13662[2]);var state_13662__$1 = state_13662;var statearr_13701_13740 = state_13662__$1;(statearr_13701_13740[2] = inst_13647);
(statearr_13701_13740[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13663 === 26))
{var inst_13620 = (state_13662[14]);var state_13662__$1 = state_13662;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13662__$1,29,out,inst_13620);
} else
{if((state_val_13663 === 27))
{var state_13662__$1 = state_13662;var statearr_13702_13741 = state_13662__$1;(statearr_13702_13741[2] = null);
(statearr_13702_13741[1] = 28);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13663 === 28))
{var inst_13613 = (state_13662[10]);var inst_13655 = (state_13662[2]);var inst_13605 = inst_13613;var state_13662__$1 = (function (){var statearr_13703 = state_13662;(statearr_13703[6] = inst_13605);
(statearr_13703[19] = inst_13655);
return statearr_13703;
})();var statearr_13704_13742 = state_13662__$1;(statearr_13704_13742[2] = null);
(statearr_13704_13742[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13663 === 29))
{var inst_13652 = (state_13662[2]);var state_13662__$1 = state_13662;var statearr_13705_13743 = state_13662__$1;(statearr_13705_13743[2] = inst_13652);
(statearr_13705_13743[1] = 28);
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
});return ((function (switch__8496__auto__){
return (function() {
var state_machine__8497__auto__ = null;
var state_machine__8497__auto____0 = (function (){var statearr_13707 = (new Array(20));(statearr_13707[0] = state_machine__8497__auto__);
(statearr_13707[1] = 1);
return statearr_13707;
});
var state_machine__8497__auto____1 = (function (state_13662){while(true){
var result__8498__auto__ = switch__8496__auto__.call(null,state_13662);if(cljs.core.keyword_identical_QMARK_.call(null,result__8498__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8498__auto__;
}
break;
}
});
state_machine__8497__auto__ = function(state_13662){
switch(arguments.length){
case 0:
return state_machine__8497__auto____0.call(this);
case 1:
return state_machine__8497__auto____1.call(this,state_13662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8497__auto____0;
state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8497__auto____1;
return state_machine__8497__auto__;
})()
;})(switch__8496__auto__))
})();var state__8561__auto__ = (function (){var statearr_13708 = f__8560__auto__.call(null);(statearr_13708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8559__auto___13709);
return statearr_13708;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8561__auto__);
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
{var x__7093__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7093__auto__)]);if(or__3943__auto__)
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
{var x__7093__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7093__auto__)]);if(or__3943__auto__)
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
{var x__7093__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7093__auto__)]);if(or__3943__auto__)
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
{var x__7093__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7093__auto__)]);if(or__3943__auto__)
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
return (function (p1__13744_SHARP_){if(cljs.core.truth_(p1__13744_SHARP_.call(null,topic)))
{return p1__13744_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13744_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3943__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13868 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t13868');

/**
* @constructor
*/
cljs.core.async.t13868 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13869){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13869 = meta13869;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13868.cljs$lang$type = true;
cljs.core.async.t13868.cljs$lang$ctorStr = "cljs.core.async/t13868";
cljs.core.async.t13868.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7018__auto__,writer__7019__auto__,opt__7020__auto__){return cljs.core._write.call(null,writer__7019__auto__,"cljs.core.async/t13868");
});})(mults,ensure_mult))
;
cljs.core.async.t13868.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13868.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13868.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13868.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13868.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13868.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13868.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13868.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13870){var self__ = this;
return self__.meta13869;
});})(mults,ensure_mult))
;
cljs.core.async.t13868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13870,meta13869__$1){var self__ = this;
return (new cljs.core.async.t13868(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13869__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13868 = ((function (mults,ensure_mult){
return (function __GT_t13868(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13869){return (new cljs.core.async.t13868(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13869));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13868(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__8559__auto___13991 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8560__auto__ = (function (){var switch__8496__auto__ = (function (state_13943){var state_val_13944 = (state_13943[1]);if((state_val_13944 === 1))
{var state_13943__$1 = state_13943;var statearr_13945_13992 = state_13943__$1;(statearr_13945_13992[2] = null);
(statearr_13945_13992[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13944 === 2))
{var state_13943__$1 = state_13943;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13943__$1,4,ch);
} else
{if((state_val_13944 === 3))
{var inst_13941 = (state_13943[2]);var state_13943__$1 = state_13943;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13943__$1,inst_13941);
} else
{if((state_val_13944 === 4))
{var inst_13873 = (state_13943[5]);var inst_13873__$1 = (state_13943[2]);var inst_13874 = (inst_13873__$1 == null);var state_13943__$1 = (function (){var statearr_13946 = state_13943;(statearr_13946[5] = inst_13873__$1);
return statearr_13946;
})();if(cljs.core.truth_(inst_13874))
{var statearr_13947_13993 = state_13943__$1;(statearr_13947_13993[1] = 5);
} else
{var statearr_13948_13994 = state_13943__$1;(statearr_13948_13994[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13944 === 5))
{var inst_13880 = cljs.core.deref.call(null,mults);var inst_13881 = cljs.core.vals.call(null,inst_13880);var inst_13882 = cljs.core.seq.call(null,inst_13881);var inst_13883 = inst_13882;var inst_13884 = null;var inst_13885 = 0;var inst_13886 = 0;var state_13943__$1 = (function (){var statearr_13949 = state_13943;(statearr_13949[6] = inst_13886);
(statearr_13949[7] = inst_13885);
(statearr_13949[8] = inst_13884);
(statearr_13949[9] = inst_13883);
return statearr_13949;
})();var statearr_13950_13995 = state_13943__$1;(statearr_13950_13995[2] = null);
(statearr_13950_13995[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13944 === 6))
{var inst_13873 = (state_13943[5]);var inst_13921 = (state_13943[10]);var inst_13923 = (state_13943[11]);var inst_13921__$1 = topic_fn.call(null,inst_13873);var inst_13922 = cljs.core.deref.call(null,mults);var inst_13923__$1 = cljs.core.get.call(null,inst_13922,inst_13921__$1);var state_13943__$1 = (function (){var statearr_13951 = state_13943;(statearr_13951[10] = inst_13921__$1);
(statearr_13951[11] = inst_13923__$1);
return statearr_13951;
})();if(cljs.core.truth_(inst_13923__$1))
{var statearr_13952_13996 = state_13943__$1;(statearr_13952_13996[1] = 19);
} else
{var statearr_13953_13997 = state_13943__$1;(statearr_13953_13997[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13944 === 7))
{var inst_13939 = (state_13943[2]);var state_13943__$1 = state_13943;var statearr_13954_13998 = state_13943__$1;(statearr_13954_13998[2] = inst_13939);
(statearr_13954_13998[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13944 === 8))
{var inst_13886 = (state_13943[6]);var inst_13885 = (state_13943[7]);var inst_13888 = (inst_13886 < inst_13885);var inst_13889 = inst_13888;var state_13943__$1 = state_13943;if(cljs.core.truth_(inst_13889))
{var statearr_13958_13999 = state_13943__$1;(statearr_13958_13999[1] = 10);
} else
{var statearr_13959_14000 = state_13943__$1;(statearr_13959_14000[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13944 === 9))
{var inst_13919 = (state_13943[2]);var state_13943__$1 = state_13943;var statearr_13960_14001 = state_13943__$1;(statearr_13960_14001[2] = inst_13919);
(statearr_13960_14001[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13944 === 10))
{var inst_13886 = (state_13943[6]);var inst_13885 = (state_13943[7]);var inst_13884 = (state_13943[8]);var inst_13883 = (state_13943[9]);var inst_13891 = cljs.core._nth.call(null,inst_13884,inst_13886);var inst_13892 = cljs.core.async.muxch_STAR_.call(null,inst_13891);var inst_13893 = cljs.core.async.close_BANG_.call(null,inst_13892);var inst_13894 = (inst_13886 + 1);var tmp13955 = inst_13885;var tmp13956 = inst_13884;var tmp13957 = inst_13883;var inst_13883__$1 = tmp13957;var inst_13884__$1 = tmp13956;var inst_13885__$1 = tmp13955;var inst_13886__$1 = inst_13894;var state_13943__$1 = (function (){var statearr_13961 = state_13943;(statearr_13961[6] = inst_13886__$1);
(statearr_13961[7] = inst_13885__$1);
(statearr_13961[8] = inst_13884__$1);
(statearr_13961[9] = inst_13883__$1);
(statearr_13961[12] = inst_13893);
return statearr_13961;
})();var statearr_13962_14002 = state_13943__$1;(statearr_13962_14002[2] = null);
(statearr_13962_14002[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13944 === 11))
{var inst_13883 = (state_13943[9]);var inst_13897 = (state_13943[13]);var inst_13897__$1 = cljs.core.seq.call(null,inst_13883);var state_13943__$1 = (function (){var statearr_13963 = state_13943;(statearr_13963[13] = inst_13897__$1);
return statearr_13963;
})();if(inst_13897__$1)
{var statearr_13964_14003 = state_13943__$1;(statearr_13964_14003[1] = 13);
} else
{var statearr_13965_14004 = state_13943__$1;(statearr_13965_14004[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13944 === 12))
{var inst_13917 = (state_13943[2]);var state_13943__$1 = state_13943;var statearr_13966_14005 = state_13943__$1;(statearr_13966_14005[2] = inst_13917);
(statearr_13966_14005[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13944 === 13))
{var inst_13897 = (state_13943[13]);var inst_13899 = cljs.core.chunked_seq_QMARK_.call(null,inst_13897);var state_13943__$1 = state_13943;if(inst_13899)
{var statearr_13967_14006 = state_13943__$1;(statearr_13967_14006[1] = 16);
} else
{var statearr_13968_14007 = state_13943__$1;(statearr_13968_14007[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13944 === 14))
{var state_13943__$1 = state_13943;var statearr_13969_14008 = state_13943__$1;(statearr_13969_14008[2] = null);
(statearr_13969_14008[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13944 === 15))
{var inst_13915 = (state_13943[2]);var state_13943__$1 = state_13943;var statearr_13970_14009 = state_13943__$1;(statearr_13970_14009[2] = inst_13915);
(statearr_13970_14009[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13944 === 16))
{var inst_13897 = (state_13943[13]);var inst_13901 = cljs.core.chunk_first.call(null,inst_13897);var inst_13902 = cljs.core.chunk_rest.call(null,inst_13897);var inst_13903 = cljs.core.count.call(null,inst_13901);var inst_13883 = inst_13902;var inst_13884 = inst_13901;var inst_13885 = inst_13903;var inst_13886 = 0;var state_13943__$1 = (function (){var statearr_13971 = state_13943;(statearr_13971[6] = inst_13886);
(statearr_13971[7] = inst_13885);
(statearr_13971[8] = inst_13884);
(statearr_13971[9] = inst_13883);
return statearr_13971;
})();var statearr_13972_14010 = state_13943__$1;(statearr_13972_14010[2] = null);
(statearr_13972_14010[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13944 === 17))
{var inst_13897 = (state_13943[13]);var inst_13906 = cljs.core.first.call(null,inst_13897);var inst_13907 = cljs.core.async.muxch_STAR_.call(null,inst_13906);var inst_13908 = cljs.core.async.close_BANG_.call(null,inst_13907);var inst_13909 = cljs.core.next.call(null,inst_13897);var inst_13883 = inst_13909;var inst_13884 = null;var inst_13885 = 0;var inst_13886 = 0;var state_13943__$1 = (function (){var statearr_13973 = state_13943;(statearr_13973[6] = inst_13886);
(statearr_13973[7] = inst_13885);
(statearr_13973[8] = inst_13884);
(statearr_13973[9] = inst_13883);
(statearr_13973[14] = inst_13908);
return statearr_13973;
})();var statearr_13974_14011 = state_13943__$1;(statearr_13974_14011[2] = null);
(statearr_13974_14011[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13944 === 18))
{var inst_13912 = (state_13943[2]);var state_13943__$1 = state_13943;var statearr_13975_14012 = state_13943__$1;(statearr_13975_14012[2] = inst_13912);
(statearr_13975_14012[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13944 === 19))
{var state_13943__$1 = state_13943;var statearr_13976_14013 = state_13943__$1;(statearr_13976_14013[2] = null);
(statearr_13976_14013[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13944 === 20))
{var state_13943__$1 = state_13943;var statearr_13977_14014 = state_13943__$1;(statearr_13977_14014[2] = null);
(statearr_13977_14014[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13944 === 21))
{var inst_13936 = (state_13943[2]);var state_13943__$1 = (function (){var statearr_13978 = state_13943;(statearr_13978[15] = inst_13936);
return statearr_13978;
})();var statearr_13979_14015 = state_13943__$1;(statearr_13979_14015[2] = null);
(statearr_13979_14015[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13944 === 22))
{var inst_13933 = (state_13943[2]);var state_13943__$1 = state_13943;var statearr_13980_14016 = state_13943__$1;(statearr_13980_14016[2] = inst_13933);
(statearr_13980_14016[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13944 === 23))
{var inst_13921 = (state_13943[10]);var inst_13925 = (state_13943[2]);var inst_13926 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13921);var state_13943__$1 = (function (){var statearr_13981 = state_13943;(statearr_13981[16] = inst_13925);
return statearr_13981;
})();var statearr_13982_14017 = state_13943__$1;(statearr_13982_14017[2] = inst_13926);
(statearr_13982_14017[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13944 === 24))
{try{var inst_13873 = (state_13943[5]);var inst_13923 = (state_13943[11]);var inst_13929 = cljs.core.async.muxch_STAR_.call(null,inst_13923);var state_13943__$1 = state_13943;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13943__$1,25,inst_13929,inst_13873);
}catch (e13983){if((e13983 instanceof Object))
{var ex__8490__auto__ = e13983;var statearr_13984_14018 = state_13943;(statearr_13984_14018[1] = 23);
(statearr_13984_14018[2] = ex__8490__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13983;
} else
{return null;
}
}
}} else
{if((state_val_13944 === 25))
{try{var inst_13931 = (state_13943[2]);var state_13943__$1 = state_13943;var statearr_13987_14019 = state_13943__$1;(statearr_13987_14019[2] = inst_13931);
(statearr_13987_14019[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e13985){if((e13985 instanceof Object))
{var ex__8490__auto__ = e13985;var statearr_13986_14020 = state_13943;(statearr_13986_14020[1] = 23);
(statearr_13986_14020[2] = ex__8490__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13985;
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
});return ((function (switch__8496__auto__){
return (function() {
var state_machine__8497__auto__ = null;
var state_machine__8497__auto____0 = (function (){var statearr_13989 = (new Array(17));(statearr_13989[0] = state_machine__8497__auto__);
(statearr_13989[1] = 1);
return statearr_13989;
});
var state_machine__8497__auto____1 = (function (state_13943){while(true){
var result__8498__auto__ = switch__8496__auto__.call(null,state_13943);if(cljs.core.keyword_identical_QMARK_.call(null,result__8498__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8498__auto__;
}
break;
}
});
state_machine__8497__auto__ = function(state_13943){
switch(arguments.length){
case 0:
return state_machine__8497__auto____0.call(this);
case 1:
return state_machine__8497__auto____1.call(this,state_13943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8497__auto____0;
state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8497__auto____1;
return state_machine__8497__auto__;
})()
;})(switch__8496__auto__))
})();var state__8561__auto__ = (function (){var statearr_13990 = f__8560__auto__.call(null);(statearr_13990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8559__auto___13991);
return statearr_13990;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8561__auto__);
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
,cljs.core.range.call(null,cnt));var c__8559__auto___14151 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8560__auto__ = (function (){var switch__8496__auto__ = (function (state_14123){var state_val_14124 = (state_14123[1]);if((state_val_14124 === 1))
{var state_14123__$1 = state_14123;var statearr_14125_14152 = state_14123__$1;(statearr_14125_14152[2] = null);
(statearr_14125_14152[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14124 === 2))
{var inst_14087 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14088 = 0;var state_14123__$1 = (function (){var statearr_14126 = state_14123;(statearr_14126[5] = inst_14088);
(statearr_14126[6] = inst_14087);
return statearr_14126;
})();var statearr_14127_14153 = state_14123__$1;(statearr_14127_14153[2] = null);
(statearr_14127_14153[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14124 === 3))
{var inst_14121 = (state_14123[2]);var state_14123__$1 = state_14123;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14123__$1,inst_14121);
} else
{if((state_val_14124 === 4))
{var inst_14088 = (state_14123[5]);var inst_14090 = (inst_14088 < cnt);var state_14123__$1 = state_14123;if(cljs.core.truth_(inst_14090))
{var statearr_14128_14154 = state_14123__$1;(statearr_14128_14154[1] = 6);
} else
{var statearr_14129_14155 = state_14123__$1;(statearr_14129_14155[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14124 === 5))
{var inst_14107 = (state_14123[2]);var state_14123__$1 = (function (){var statearr_14130 = state_14123;(statearr_14130[7] = inst_14107);
return statearr_14130;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14123__$1,12,dchan);
} else
{if((state_val_14124 === 6))
{var state_14123__$1 = state_14123;var statearr_14131_14156 = state_14123__$1;(statearr_14131_14156[2] = null);
(statearr_14131_14156[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14124 === 7))
{var state_14123__$1 = state_14123;var statearr_14132_14157 = state_14123__$1;(statearr_14132_14157[2] = null);
(statearr_14132_14157[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14124 === 8))
{var inst_14105 = (state_14123[2]);var state_14123__$1 = state_14123;var statearr_14133_14158 = state_14123__$1;(statearr_14133_14158[2] = inst_14105);
(statearr_14133_14158[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14124 === 9))
{var inst_14088 = (state_14123[5]);var inst_14100 = (state_14123[2]);var inst_14101 = (inst_14088 + 1);var inst_14088__$1 = inst_14101;var state_14123__$1 = (function (){var statearr_14134 = state_14123;(statearr_14134[5] = inst_14088__$1);
(statearr_14134[8] = inst_14100);
return statearr_14134;
})();var statearr_14135_14159 = state_14123__$1;(statearr_14135_14159[2] = null);
(statearr_14135_14159[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14124 === 10))
{var inst_14092 = (state_14123[2]);var inst_14093 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14123__$1 = (function (){var statearr_14136 = state_14123;(statearr_14136[9] = inst_14092);
return statearr_14136;
})();var statearr_14137_14160 = state_14123__$1;(statearr_14137_14160[2] = inst_14093);
(statearr_14137_14160[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14124 === 11))
{try{var inst_14088 = (state_14123[5]);var inst_14096 = chs__$1.call(null,inst_14088);var inst_14097 = done.call(null,inst_14088);var inst_14098 = cljs.core.async.take_BANG_.call(null,inst_14096,inst_14097);var state_14123__$1 = state_14123;var statearr_14140_14161 = state_14123__$1;(statearr_14140_14161[2] = inst_14098);
(statearr_14140_14161[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e14138){if((e14138 instanceof Object))
{var ex__8490__auto__ = e14138;var statearr_14139_14162 = state_14123;(statearr_14139_14162[1] = 10);
(statearr_14139_14162[2] = ex__8490__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14138;
} else
{return null;
}
}
}} else
{if((state_val_14124 === 12))
{var inst_14109 = (state_14123[10]);var inst_14109__$1 = (state_14123[2]);var inst_14110 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14109__$1);var state_14123__$1 = (function (){var statearr_14141 = state_14123;(statearr_14141[10] = inst_14109__$1);
return statearr_14141;
})();if(cljs.core.truth_(inst_14110))
{var statearr_14142_14163 = state_14123__$1;(statearr_14142_14163[1] = 13);
} else
{var statearr_14143_14164 = state_14123__$1;(statearr_14143_14164[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14124 === 13))
{var inst_14112 = cljs.core.async.close_BANG_.call(null,out);var state_14123__$1 = state_14123;var statearr_14144_14165 = state_14123__$1;(statearr_14144_14165[2] = inst_14112);
(statearr_14144_14165[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14124 === 14))
{var inst_14109 = (state_14123[10]);var inst_14114 = cljs.core.apply.call(null,f,inst_14109);var state_14123__$1 = state_14123;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14123__$1,16,out,inst_14114);
} else
{if((state_val_14124 === 15))
{var inst_14119 = (state_14123[2]);var state_14123__$1 = state_14123;var statearr_14145_14166 = state_14123__$1;(statearr_14145_14166[2] = inst_14119);
(statearr_14145_14166[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14124 === 16))
{var inst_14116 = (state_14123[2]);var state_14123__$1 = (function (){var statearr_14146 = state_14123;(statearr_14146[11] = inst_14116);
return statearr_14146;
})();var statearr_14147_14167 = state_14123__$1;(statearr_14147_14167[2] = null);
(statearr_14147_14167[1] = 2);
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
});return ((function (switch__8496__auto__){
return (function() {
var state_machine__8497__auto__ = null;
var state_machine__8497__auto____0 = (function (){var statearr_14149 = (new Array(12));(statearr_14149[0] = state_machine__8497__auto__);
(statearr_14149[1] = 1);
return statearr_14149;
});
var state_machine__8497__auto____1 = (function (state_14123){while(true){
var result__8498__auto__ = switch__8496__auto__.call(null,state_14123);if(cljs.core.keyword_identical_QMARK_.call(null,result__8498__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8498__auto__;
}
break;
}
});
state_machine__8497__auto__ = function(state_14123){
switch(arguments.length){
case 0:
return state_machine__8497__auto____0.call(this);
case 1:
return state_machine__8497__auto____1.call(this,state_14123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8497__auto____0;
state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8497__auto____1;
return state_machine__8497__auto__;
})()
;})(switch__8496__auto__))
})();var state__8561__auto__ = (function (){var statearr_14150 = f__8560__auto__.call(null);(statearr_14150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8559__auto___14151);
return statearr_14150;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8561__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8559__auto___14267 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8560__auto__ = (function (){var switch__8496__auto__ = (function (state_14247){var state_val_14248 = (state_14247[1]);if((state_val_14248 === 1))
{var inst_14218 = cljs.core.vec.call(null,chs);var inst_14219 = inst_14218;var state_14247__$1 = (function (){var statearr_14249 = state_14247;(statearr_14249[5] = inst_14219);
return statearr_14249;
})();var statearr_14250_14268 = state_14247__$1;(statearr_14250_14268[2] = null);
(statearr_14250_14268[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14248 === 2))
{var inst_14219 = (state_14247[5]);var inst_14221 = cljs.core.count.call(null,inst_14219);var inst_14222 = (inst_14221 > 0);var state_14247__$1 = state_14247;if(cljs.core.truth_(inst_14222))
{var statearr_14251_14269 = state_14247__$1;(statearr_14251_14269[1] = 4);
} else
{var statearr_14252_14270 = state_14247__$1;(statearr_14252_14270[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14248 === 3))
{var inst_14245 = (state_14247[2]);var state_14247__$1 = state_14247;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14247__$1,inst_14245);
} else
{if((state_val_14248 === 4))
{var inst_14219 = (state_14247[5]);var state_14247__$1 = state_14247;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14247__$1,7,inst_14219);
} else
{if((state_val_14248 === 5))
{var inst_14241 = cljs.core.async.close_BANG_.call(null,out);var state_14247__$1 = state_14247;var statearr_14253_14271 = state_14247__$1;(statearr_14253_14271[2] = inst_14241);
(statearr_14253_14271[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14248 === 6))
{var inst_14243 = (state_14247[2]);var state_14247__$1 = state_14247;var statearr_14254_14272 = state_14247__$1;(statearr_14254_14272[2] = inst_14243);
(statearr_14254_14272[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14248 === 7))
{var inst_14227 = (state_14247[6]);var inst_14226 = (state_14247[7]);var inst_14226__$1 = (state_14247[2]);var inst_14227__$1 = cljs.core.nth.call(null,inst_14226__$1,0,null);var inst_14228 = cljs.core.nth.call(null,inst_14226__$1,1,null);var inst_14229 = (inst_14227__$1 == null);var state_14247__$1 = (function (){var statearr_14255 = state_14247;(statearr_14255[8] = inst_14228);
(statearr_14255[6] = inst_14227__$1);
(statearr_14255[7] = inst_14226__$1);
return statearr_14255;
})();if(cljs.core.truth_(inst_14229))
{var statearr_14256_14273 = state_14247__$1;(statearr_14256_14273[1] = 8);
} else
{var statearr_14257_14274 = state_14247__$1;(statearr_14257_14274[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14248 === 8))
{var inst_14228 = (state_14247[8]);var inst_14227 = (state_14247[6]);var inst_14226 = (state_14247[7]);var inst_14219 = (state_14247[5]);var inst_14231 = (function (){var c = inst_14228;var v = inst_14227;var vec__14224 = inst_14226;var cs = inst_14219;return ((function (c,v,vec__14224,cs,inst_14228,inst_14227,inst_14226,inst_14219,state_val_14248){
return (function (p1__14168_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14168_SHARP_);
});
;})(c,v,vec__14224,cs,inst_14228,inst_14227,inst_14226,inst_14219,state_val_14248))
})();var inst_14232 = cljs.core.filterv.call(null,inst_14231,inst_14219);var inst_14219__$1 = inst_14232;var state_14247__$1 = (function (){var statearr_14258 = state_14247;(statearr_14258[5] = inst_14219__$1);
return statearr_14258;
})();var statearr_14259_14275 = state_14247__$1;(statearr_14259_14275[2] = null);
(statearr_14259_14275[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14248 === 9))
{var inst_14227 = (state_14247[6]);var state_14247__$1 = state_14247;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14247__$1,11,out,inst_14227);
} else
{if((state_val_14248 === 10))
{var inst_14239 = (state_14247[2]);var state_14247__$1 = state_14247;var statearr_14261_14276 = state_14247__$1;(statearr_14261_14276[2] = inst_14239);
(statearr_14261_14276[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14248 === 11))
{var inst_14219 = (state_14247[5]);var inst_14236 = (state_14247[2]);var tmp14260 = inst_14219;var inst_14219__$1 = tmp14260;var state_14247__$1 = (function (){var statearr_14262 = state_14247;(statearr_14262[9] = inst_14236);
(statearr_14262[5] = inst_14219__$1);
return statearr_14262;
})();var statearr_14263_14277 = state_14247__$1;(statearr_14263_14277[2] = null);
(statearr_14263_14277[1] = 2);
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
});return ((function (switch__8496__auto__){
return (function() {
var state_machine__8497__auto__ = null;
var state_machine__8497__auto____0 = (function (){var statearr_14265 = (new Array(10));(statearr_14265[0] = state_machine__8497__auto__);
(statearr_14265[1] = 1);
return statearr_14265;
});
var state_machine__8497__auto____1 = (function (state_14247){while(true){
var result__8498__auto__ = switch__8496__auto__.call(null,state_14247);if(cljs.core.keyword_identical_QMARK_.call(null,result__8498__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8498__auto__;
}
break;
}
});
state_machine__8497__auto__ = function(state_14247){
switch(arguments.length){
case 0:
return state_machine__8497__auto____0.call(this);
case 1:
return state_machine__8497__auto____1.call(this,state_14247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8497__auto____0;
state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8497__auto____1;
return state_machine__8497__auto__;
})()
;})(switch__8496__auto__))
})();var state__8561__auto__ = (function (){var statearr_14266 = f__8560__auto__.call(null);(statearr_14266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8559__auto___14267);
return statearr_14266;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8561__auto__);
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
