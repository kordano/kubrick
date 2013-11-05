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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12342 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12342');

/**
* @constructor
*/
cljs.core.async.t12342 = (function (f,fn_handler,meta12343){
this.f = f;
this.fn_handler = fn_handler;
this.meta12343 = meta12343;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12342.cljs$lang$type = true;
cljs.core.async.t12342.cljs$lang$ctorStr = "cljs.core.async/t12342";
cljs.core.async.t12342.cljs$lang$ctorPrWriter = (function (this__7014__auto__,writer__7015__auto__,opt__7016__auto__){return cljs.core._write.call(null,writer__7015__auto__,"cljs.core.async/t12342");
});
cljs.core.async.t12342.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12342.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return true;
});
cljs.core.async.t12342.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
return self__.f;
});
cljs.core.async.t12342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12344){var self__ = this;
return self__.meta12343;
});
cljs.core.async.t12342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12344,meta12343__$1){var self__ = this;
return (new cljs.core.async.t12342(self__.f,self__.fn_handler,meta12343__$1));
});
cljs.core.async.__GT_t12342 = (function __GT_t12342(f__$1,fn_handler__$1,meta12343){return (new cljs.core.async.t12342(f__$1,fn_handler__$1,meta12343));
});
}
return (new cljs.core.async.t12342(f,fn_handler,null));
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
{var val_12345 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12345);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_12345);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__7241__auto___12346 = n;var x_12347 = 0;while(true){
if((x_12347 < n__7241__auto___12346))
{(a[x_12347] = 0);
{
var G__12348 = (x_12347 + 1);
x_12347 = G__12348;
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
var G__12349 = (i + 1);
i = G__12349;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12353 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12353');

/**
* @constructor
*/
cljs.core.async.t12353 = (function (flag,alt_flag,meta12354){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12354 = meta12354;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12353.cljs$lang$type = true;
cljs.core.async.t12353.cljs$lang$ctorStr = "cljs.core.async/t12353";
cljs.core.async.t12353.cljs$lang$ctorPrWriter = (function (this__7014__auto__,writer__7015__auto__,opt__7016__auto__){return cljs.core._write.call(null,writer__7015__auto__,"cljs.core.async/t12353");
});
cljs.core.async.t12353.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12353.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t12353.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t12353.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12355){var self__ = this;
return self__.meta12354;
});
cljs.core.async.t12353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12355,meta12354__$1){var self__ = this;
return (new cljs.core.async.t12353(self__.flag,self__.alt_flag,meta12354__$1));
});
cljs.core.async.__GT_t12353 = (function __GT_t12353(flag__$1,alt_flag__$1,meta12354){return (new cljs.core.async.t12353(flag__$1,alt_flag__$1,meta12354));
});
}
return (new cljs.core.async.t12353(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12359 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12359');

/**
* @constructor
*/
cljs.core.async.t12359 = (function (cb,flag,alt_handler,meta12360){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12360 = meta12360;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12359.cljs$lang$type = true;
cljs.core.async.t12359.cljs$lang$ctorStr = "cljs.core.async/t12359";
cljs.core.async.t12359.cljs$lang$ctorPrWriter = (function (this__7014__auto__,writer__7015__auto__,opt__7016__auto__){return cljs.core._write.call(null,writer__7015__auto__,"cljs.core.async/t12359");
});
cljs.core.async.t12359.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12359.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12359.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12359.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12361){var self__ = this;
return self__.meta12360;
});
cljs.core.async.t12359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12361,meta12360__$1){var self__ = this;
return (new cljs.core.async.t12359(self__.cb,self__.flag,self__.alt_handler,meta12360__$1));
});
cljs.core.async.__GT_t12359 = (function __GT_t12359(cb__$1,flag__$1,alt_handler__$1,meta12360){return (new cljs.core.async.t12359(cb__$1,flag__$1,alt_handler__$1,meta12360));
});
}
return (new cljs.core.async.t12359(cb,flag,alt_handler,null));
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
return (function (p1__12362_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__12362_SHARP_,port], true));
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
var G__12363 = (i + 1);
i = G__12363;
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
var alts_BANG___delegate = function (ports,p__12364){var map__12366 = p__12364;var map__12366__$1 = ((cljs.core.seq_QMARK_.call(null,map__12366))?cljs.core.apply.call(null,cljs.core.hash_map,map__12366):map__12366);var opts = map__12366__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__12364 = null;if (arguments.length > 1) {
  p__12364 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12364);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12367){
var ports = cljs.core.first(arglist__12367);
var p__12364 = cljs.core.rest(arglist__12367);
return alts_BANG___delegate(ports,p__12364);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t12375 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12375');

/**
* @constructor
*/
cljs.core.async.t12375 = (function (ch,f,map_LT_,meta12376){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12376 = meta12376;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12375.cljs$lang$type = true;
cljs.core.async.t12375.cljs$lang$ctorStr = "cljs.core.async/t12375";
cljs.core.async.t12375.cljs$lang$ctorPrWriter = (function (this__7014__auto__,writer__7015__auto__,opt__7016__auto__){return cljs.core._write.call(null,writer__7015__auto__,"cljs.core.async/t12375");
});
cljs.core.async.t12375.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12375.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t12375.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12375.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t12378 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12378');

/**
* @constructor
*/
cljs.core.async.t12378 = (function (fn1,_,meta12376,ch,f,map_LT_,meta12379){
this.fn1 = fn1;
this._ = _;
this.meta12376 = meta12376;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12379 = meta12379;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12378.cljs$lang$type = true;
cljs.core.async.t12378.cljs$lang$ctorStr = "cljs.core.async/t12378";
cljs.core.async.t12378.cljs$lang$ctorPrWriter = (function (this__7014__auto__,writer__7015__auto__,opt__7016__auto__){return cljs.core._write.call(null,writer__7015__auto__,"cljs.core.async/t12378");
});
cljs.core.async.t12378.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12378.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$2){var self__ = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t12378.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$2){var self__ = this;
return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t12378.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$2){var self__ = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1){
return (function (p1__12368_SHARP_){return f1.call(null,(((p1__12368_SHARP_ == null))?null:self__.f.call(null,p1__12368_SHARP_)));
});
;})(f1))
});
cljs.core.async.t12378.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12380){var self__ = this;
return self__.meta12379;
});
cljs.core.async.t12378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12380,meta12379__$1){var self__ = this;
return (new cljs.core.async.t12378(self__.fn1,self__._,self__.meta12376,self__.ch,self__.f,self__.map_LT_,meta12379__$1));
});
cljs.core.async.__GT_t12378 = (function __GT_t12378(fn1__$1,___$1,meta12376__$1,ch__$2,f__$2,map_LT___$2,meta12379){return (new cljs.core.async.t12378(fn1__$1,___$1,meta12376__$1,ch__$2,f__$2,map_LT___$2,meta12379));
});
}
return (new cljs.core.async.t12378(fn1,_,self__.meta12376,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t12375.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12375.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12375.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12377){var self__ = this;
return self__.meta12376;
});
cljs.core.async.t12375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12377,meta12376__$1){var self__ = this;
return (new cljs.core.async.t12375(self__.ch,self__.f,self__.map_LT_,meta12376__$1));
});
cljs.core.async.__GT_t12375 = (function __GT_t12375(ch__$1,f__$1,map_LT___$1,meta12376){return (new cljs.core.async.t12375(ch__$1,f__$1,map_LT___$1,meta12376));
});
}
return (new cljs.core.async.t12375(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t12384 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12384');

/**
* @constructor
*/
cljs.core.async.t12384 = (function (ch,f,map_GT_,meta12385){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta12385 = meta12385;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12384.cljs$lang$type = true;
cljs.core.async.t12384.cljs$lang$ctorStr = "cljs.core.async/t12384";
cljs.core.async.t12384.cljs$lang$ctorPrWriter = (function (this__7014__auto__,writer__7015__auto__,opt__7016__auto__){return cljs.core._write.call(null,writer__7015__auto__,"cljs.core.async/t12384");
});
cljs.core.async.t12384.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12384.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t12384.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12384.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12384.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12384.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12384.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12386){var self__ = this;
return self__.meta12385;
});
cljs.core.async.t12384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12386,meta12385__$1){var self__ = this;
return (new cljs.core.async.t12384(self__.ch,self__.f,self__.map_GT_,meta12385__$1));
});
cljs.core.async.__GT_t12384 = (function __GT_t12384(ch__$1,f__$1,map_GT___$1,meta12385){return (new cljs.core.async.t12384(ch__$1,f__$1,map_GT___$1,meta12385));
});
}
return (new cljs.core.async.t12384(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t12390 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12390');

/**
* @constructor
*/
cljs.core.async.t12390 = (function (ch,p,filter_GT_,meta12391){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta12391 = meta12391;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12390.cljs$lang$type = true;
cljs.core.async.t12390.cljs$lang$ctorStr = "cljs.core.async/t12390";
cljs.core.async.t12390.cljs$lang$ctorPrWriter = (function (this__7014__auto__,writer__7015__auto__,opt__7016__auto__){return cljs.core._write.call(null,writer__7015__auto__,"cljs.core.async/t12390");
});
cljs.core.async.t12390.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12390.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t12390.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12390.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12390.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12390.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12392){var self__ = this;
return self__.meta12391;
});
cljs.core.async.t12390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12392,meta12391__$1){var self__ = this;
return (new cljs.core.async.t12390(self__.ch,self__.p,self__.filter_GT_,meta12391__$1));
});
cljs.core.async.__GT_t12390 = (function __GT_t12390(ch__$1,p__$1,filter_GT___$1,meta12391){return (new cljs.core.async.t12390(ch__$1,p__$1,filter_GT___$1,meta12391));
});
}
return (new cljs.core.async.t12390(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8583__auto___12467 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8584__auto__ = (function (){var switch__8508__auto__ = (function (state_12450){var state_val_12451 = (state_12450[1]);if((state_val_12451 === 1))
{var state_12450__$1 = state_12450;var statearr_12452_12468 = state_12450__$1;(statearr_12452_12468[2] = null);
(statearr_12452_12468[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12451 === 2))
{var state_12450__$1 = state_12450;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12450__$1,4,ch);
} else
{if((state_val_12451 === 3))
{var inst_12448 = (state_12450[2]);var state_12450__$1 = state_12450;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12450__$1,inst_12448);
} else
{if((state_val_12451 === 4))
{var inst_12432 = (state_12450[5]);var inst_12432__$1 = (state_12450[2]);var inst_12433 = (inst_12432__$1 == null);var state_12450__$1 = (function (){var statearr_12453 = state_12450;(statearr_12453[5] = inst_12432__$1);
return statearr_12453;
})();if(cljs.core.truth_(inst_12433))
{var statearr_12454_12469 = state_12450__$1;(statearr_12454_12469[1] = 5);
} else
{var statearr_12455_12470 = state_12450__$1;(statearr_12455_12470[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12451 === 5))
{var inst_12435 = cljs.core.async.close_BANG_.call(null,out);var state_12450__$1 = state_12450;var statearr_12456_12471 = state_12450__$1;(statearr_12456_12471[2] = inst_12435);
(statearr_12456_12471[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12451 === 6))
{var inst_12432 = (state_12450[5]);var inst_12437 = p.call(null,inst_12432);var state_12450__$1 = state_12450;if(cljs.core.truth_(inst_12437))
{var statearr_12457_12472 = state_12450__$1;(statearr_12457_12472[1] = 8);
} else
{var statearr_12458_12473 = state_12450__$1;(statearr_12458_12473[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12451 === 7))
{var inst_12446 = (state_12450[2]);var state_12450__$1 = state_12450;var statearr_12459_12474 = state_12450__$1;(statearr_12459_12474[2] = inst_12446);
(statearr_12459_12474[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12451 === 8))
{var inst_12432 = (state_12450[5]);var state_12450__$1 = state_12450;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12450__$1,11,out,inst_12432);
} else
{if((state_val_12451 === 9))
{var state_12450__$1 = state_12450;var statearr_12460_12475 = state_12450__$1;(statearr_12460_12475[2] = null);
(statearr_12460_12475[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12451 === 10))
{var inst_12443 = (state_12450[2]);var state_12450__$1 = (function (){var statearr_12461 = state_12450;(statearr_12461[6] = inst_12443);
return statearr_12461;
})();var statearr_12462_12476 = state_12450__$1;(statearr_12462_12476[2] = null);
(statearr_12462_12476[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12451 === 11))
{var inst_12440 = (state_12450[2]);var state_12450__$1 = state_12450;var statearr_12463_12477 = state_12450__$1;(statearr_12463_12477[2] = inst_12440);
(statearr_12463_12477[1] = 10);
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
});return ((function (switch__8508__auto__){
return (function() {
var state_machine__8509__auto__ = null;
var state_machine__8509__auto____0 = (function (){var statearr_12465 = (new Array(7));(statearr_12465[0] = state_machine__8509__auto__);
(statearr_12465[1] = 1);
return statearr_12465;
});
var state_machine__8509__auto____1 = (function (state_12450){while(true){
var result__8510__auto__ = switch__8508__auto__.call(null,state_12450);if(cljs.core.keyword_identical_QMARK_.call(null,result__8510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8510__auto__;
}
break;
}
});
state_machine__8509__auto__ = function(state_12450){
switch(arguments.length){
case 0:
return state_machine__8509__auto____0.call(this);
case 1:
return state_machine__8509__auto____1.call(this,state_12450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8509__auto____0;
state_machine__8509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8509__auto____1;
return state_machine__8509__auto__;
})()
;})(switch__8508__auto__))
})();var state__8585__auto__ = (function (){var statearr_12466 = f__8584__auto__.call(null);(statearr_12466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8583__auto___12467);
return statearr_12466;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8585__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__8583__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8584__auto__ = (function (){var switch__8508__auto__ = (function (state_12625){var state_val_12626 = (state_12625[1]);if((state_val_12626 === 1))
{var state_12625__$1 = state_12625;var statearr_12627_12660 = state_12625__$1;(statearr_12627_12660[2] = null);
(statearr_12627_12660[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12626 === 2))
{var state_12625__$1 = state_12625;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12625__$1,4,in$);
} else
{if((state_val_12626 === 3))
{var inst_12623 = (state_12625[2]);var state_12625__$1 = state_12625;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12625__$1,inst_12623);
} else
{if((state_val_12626 === 4))
{var inst_12571 = (state_12625[5]);var inst_12571__$1 = (state_12625[2]);var inst_12572 = (inst_12571__$1 == null);var state_12625__$1 = (function (){var statearr_12628 = state_12625;(statearr_12628[5] = inst_12571__$1);
return statearr_12628;
})();if(cljs.core.truth_(inst_12572))
{var statearr_12629_12661 = state_12625__$1;(statearr_12629_12661[1] = 5);
} else
{var statearr_12630_12662 = state_12625__$1;(statearr_12630_12662[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12626 === 5))
{var inst_12574 = cljs.core.async.close_BANG_.call(null,out);var state_12625__$1 = state_12625;var statearr_12631_12663 = state_12625__$1;(statearr_12631_12663[2] = inst_12574);
(statearr_12631_12663[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12626 === 6))
{var inst_12571 = (state_12625[5]);var inst_12576 = f.call(null,inst_12571);var inst_12581 = cljs.core.seq.call(null,inst_12576);var inst_12582 = inst_12581;var inst_12583 = null;var inst_12584 = 0;var inst_12585 = 0;var state_12625__$1 = (function (){var statearr_12632 = state_12625;(statearr_12632[6] = inst_12583);
(statearr_12632[7] = inst_12584);
(statearr_12632[8] = inst_12582);
(statearr_12632[9] = inst_12585);
return statearr_12632;
})();var statearr_12633_12664 = state_12625__$1;(statearr_12633_12664[2] = null);
(statearr_12633_12664[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12626 === 7))
{var inst_12621 = (state_12625[2]);var state_12625__$1 = state_12625;var statearr_12634_12665 = state_12625__$1;(statearr_12634_12665[2] = inst_12621);
(statearr_12634_12665[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12626 === 8))
{var inst_12584 = (state_12625[7]);var inst_12585 = (state_12625[9]);var inst_12587 = (inst_12585 < inst_12584);var inst_12588 = inst_12587;var state_12625__$1 = state_12625;if(cljs.core.truth_(inst_12588))
{var statearr_12635_12666 = state_12625__$1;(statearr_12635_12666[1] = 10);
} else
{var statearr_12636_12667 = state_12625__$1;(statearr_12636_12667[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12626 === 9))
{var inst_12618 = (state_12625[2]);var state_12625__$1 = (function (){var statearr_12637 = state_12625;(statearr_12637[10] = inst_12618);
return statearr_12637;
})();var statearr_12638_12668 = state_12625__$1;(statearr_12638_12668[2] = null);
(statearr_12638_12668[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12626 === 10))
{var inst_12583 = (state_12625[6]);var inst_12585 = (state_12625[9]);var inst_12590 = cljs.core._nth.call(null,inst_12583,inst_12585);var state_12625__$1 = state_12625;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12625__$1,13,out,inst_12590);
} else
{if((state_val_12626 === 11))
{var inst_12582 = (state_12625[8]);var inst_12596 = (state_12625[11]);var inst_12596__$1 = cljs.core.seq.call(null,inst_12582);var state_12625__$1 = (function (){var statearr_12642 = state_12625;(statearr_12642[11] = inst_12596__$1);
return statearr_12642;
})();if(inst_12596__$1)
{var statearr_12643_12669 = state_12625__$1;(statearr_12643_12669[1] = 14);
} else
{var statearr_12644_12670 = state_12625__$1;(statearr_12644_12670[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12626 === 12))
{var inst_12616 = (state_12625[2]);var state_12625__$1 = state_12625;var statearr_12645_12671 = state_12625__$1;(statearr_12645_12671[2] = inst_12616);
(statearr_12645_12671[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12626 === 13))
{var inst_12583 = (state_12625[6]);var inst_12584 = (state_12625[7]);var inst_12582 = (state_12625[8]);var inst_12585 = (state_12625[9]);var inst_12592 = (state_12625[2]);var inst_12593 = (inst_12585 + 1);var tmp12639 = inst_12583;var tmp12640 = inst_12584;var tmp12641 = inst_12582;var inst_12582__$1 = tmp12641;var inst_12583__$1 = tmp12639;var inst_12584__$1 = tmp12640;var inst_12585__$1 = inst_12593;var state_12625__$1 = (function (){var statearr_12646 = state_12625;(statearr_12646[6] = inst_12583__$1);
(statearr_12646[7] = inst_12584__$1);
(statearr_12646[8] = inst_12582__$1);
(statearr_12646[12] = inst_12592);
(statearr_12646[9] = inst_12585__$1);
return statearr_12646;
})();var statearr_12647_12672 = state_12625__$1;(statearr_12647_12672[2] = null);
(statearr_12647_12672[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12626 === 14))
{var inst_12596 = (state_12625[11]);var inst_12598 = cljs.core.chunked_seq_QMARK_.call(null,inst_12596);var state_12625__$1 = state_12625;if(inst_12598)
{var statearr_12648_12673 = state_12625__$1;(statearr_12648_12673[1] = 17);
} else
{var statearr_12649_12674 = state_12625__$1;(statearr_12649_12674[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12626 === 15))
{var state_12625__$1 = state_12625;var statearr_12650_12675 = state_12625__$1;(statearr_12650_12675[2] = null);
(statearr_12650_12675[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12626 === 16))
{var inst_12614 = (state_12625[2]);var state_12625__$1 = state_12625;var statearr_12651_12676 = state_12625__$1;(statearr_12651_12676[2] = inst_12614);
(statearr_12651_12676[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12626 === 17))
{var inst_12596 = (state_12625[11]);var inst_12600 = cljs.core.chunk_first.call(null,inst_12596);var inst_12601 = cljs.core.chunk_rest.call(null,inst_12596);var inst_12602 = cljs.core.count.call(null,inst_12600);var inst_12582 = inst_12601;var inst_12583 = inst_12600;var inst_12584 = inst_12602;var inst_12585 = 0;var state_12625__$1 = (function (){var statearr_12652 = state_12625;(statearr_12652[6] = inst_12583);
(statearr_12652[7] = inst_12584);
(statearr_12652[8] = inst_12582);
(statearr_12652[9] = inst_12585);
return statearr_12652;
})();var statearr_12653_12677 = state_12625__$1;(statearr_12653_12677[2] = null);
(statearr_12653_12677[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12626 === 18))
{var inst_12596 = (state_12625[11]);var inst_12605 = cljs.core.first.call(null,inst_12596);var state_12625__$1 = state_12625;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12625__$1,20,out,inst_12605);
} else
{if((state_val_12626 === 19))
{var inst_12611 = (state_12625[2]);var state_12625__$1 = state_12625;var statearr_12654_12678 = state_12625__$1;(statearr_12654_12678[2] = inst_12611);
(statearr_12654_12678[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12626 === 20))
{var inst_12596 = (state_12625[11]);var inst_12607 = (state_12625[2]);var inst_12608 = cljs.core.next.call(null,inst_12596);var inst_12582 = inst_12608;var inst_12583 = null;var inst_12584 = 0;var inst_12585 = 0;var state_12625__$1 = (function (){var statearr_12655 = state_12625;(statearr_12655[6] = inst_12583);
(statearr_12655[7] = inst_12584);
(statearr_12655[8] = inst_12582);
(statearr_12655[13] = inst_12607);
(statearr_12655[9] = inst_12585);
return statearr_12655;
})();var statearr_12656_12679 = state_12625__$1;(statearr_12656_12679[2] = null);
(statearr_12656_12679[1] = 8);
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
});return ((function (switch__8508__auto__){
return (function() {
var state_machine__8509__auto__ = null;
var state_machine__8509__auto____0 = (function (){var statearr_12658 = (new Array(14));(statearr_12658[0] = state_machine__8509__auto__);
(statearr_12658[1] = 1);
return statearr_12658;
});
var state_machine__8509__auto____1 = (function (state_12625){while(true){
var result__8510__auto__ = switch__8508__auto__.call(null,state_12625);if(cljs.core.keyword_identical_QMARK_.call(null,result__8510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8510__auto__;
}
break;
}
});
state_machine__8509__auto__ = function(state_12625){
switch(arguments.length){
case 0:
return state_machine__8509__auto____0.call(this);
case 1:
return state_machine__8509__auto____1.call(this,state_12625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8509__auto____0;
state_machine__8509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8509__auto____1;
return state_machine__8509__auto__;
})()
;})(switch__8508__auto__))
})();var state__8585__auto__ = (function (){var statearr_12659 = f__8584__auto__.call(null);(statearr_12659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8583__auto__);
return statearr_12659;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8585__auto__);
}));
return c__8583__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__8583__auto___12752 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8584__auto__ = (function (){var switch__8508__auto__ = (function (state_12735){var state_val_12736 = (state_12735[1]);if((state_val_12736 === 1))
{var state_12735__$1 = state_12735;var statearr_12737_12753 = state_12735__$1;(statearr_12737_12753[2] = null);
(statearr_12737_12753[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12736 === 2))
{var state_12735__$1 = state_12735;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12735__$1,4,from);
} else
{if((state_val_12736 === 3))
{var inst_12733 = (state_12735[2]);var state_12735__$1 = state_12735;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12735__$1,inst_12733);
} else
{if((state_val_12736 === 4))
{var inst_12718 = (state_12735[5]);var inst_12718__$1 = (state_12735[2]);var inst_12719 = (inst_12718__$1 == null);var state_12735__$1 = (function (){var statearr_12738 = state_12735;(statearr_12738[5] = inst_12718__$1);
return statearr_12738;
})();if(cljs.core.truth_(inst_12719))
{var statearr_12739_12754 = state_12735__$1;(statearr_12739_12754[1] = 5);
} else
{var statearr_12740_12755 = state_12735__$1;(statearr_12740_12755[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12736 === 5))
{var state_12735__$1 = state_12735;if(cljs.core.truth_(close_QMARK_))
{var statearr_12741_12756 = state_12735__$1;(statearr_12741_12756[1] = 8);
} else
{var statearr_12742_12757 = state_12735__$1;(statearr_12742_12757[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12736 === 6))
{var inst_12718 = (state_12735[5]);var state_12735__$1 = state_12735;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12735__$1,11,to,inst_12718);
} else
{if((state_val_12736 === 7))
{var inst_12731 = (state_12735[2]);var state_12735__$1 = state_12735;var statearr_12743_12758 = state_12735__$1;(statearr_12743_12758[2] = inst_12731);
(statearr_12743_12758[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12736 === 8))
{var inst_12722 = cljs.core.async.close_BANG_.call(null,to);var state_12735__$1 = state_12735;var statearr_12744_12759 = state_12735__$1;(statearr_12744_12759[2] = inst_12722);
(statearr_12744_12759[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12736 === 9))
{var state_12735__$1 = state_12735;var statearr_12745_12760 = state_12735__$1;(statearr_12745_12760[2] = null);
(statearr_12745_12760[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12736 === 10))
{var inst_12725 = (state_12735[2]);var state_12735__$1 = state_12735;var statearr_12746_12761 = state_12735__$1;(statearr_12746_12761[2] = inst_12725);
(statearr_12746_12761[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12736 === 11))
{var inst_12728 = (state_12735[2]);var state_12735__$1 = (function (){var statearr_12747 = state_12735;(statearr_12747[6] = inst_12728);
return statearr_12747;
})();var statearr_12748_12762 = state_12735__$1;(statearr_12748_12762[2] = null);
(statearr_12748_12762[1] = 2);
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
});return ((function (switch__8508__auto__){
return (function() {
var state_machine__8509__auto__ = null;
var state_machine__8509__auto____0 = (function (){var statearr_12750 = (new Array(7));(statearr_12750[0] = state_machine__8509__auto__);
(statearr_12750[1] = 1);
return statearr_12750;
});
var state_machine__8509__auto____1 = (function (state_12735){while(true){
var result__8510__auto__ = switch__8508__auto__.call(null,state_12735);if(cljs.core.keyword_identical_QMARK_.call(null,result__8510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8510__auto__;
}
break;
}
});
state_machine__8509__auto__ = function(state_12735){
switch(arguments.length){
case 0:
return state_machine__8509__auto____0.call(this);
case 1:
return state_machine__8509__auto____1.call(this,state_12735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8509__auto____0;
state_machine__8509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8509__auto____1;
return state_machine__8509__auto__;
})()
;})(switch__8508__auto__))
})();var state__8585__auto__ = (function (){var statearr_12751 = f__8584__auto__.call(null);(statearr_12751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8583__auto___12752);
return statearr_12751;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8585__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__8583__auto___12841 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8584__auto__ = (function (){var switch__8508__auto__ = (function (state_12823){var state_val_12824 = (state_12823[1]);if((state_val_12824 === 1))
{var state_12823__$1 = state_12823;var statearr_12825_12842 = state_12823__$1;(statearr_12825_12842[2] = null);
(statearr_12825_12842[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12824 === 2))
{var state_12823__$1 = state_12823;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12823__$1,4,ch);
} else
{if((state_val_12824 === 3))
{var inst_12821 = (state_12823[2]);var state_12823__$1 = state_12823;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12823__$1,inst_12821);
} else
{if((state_val_12824 === 4))
{var inst_12804 = (state_12823[5]);var inst_12804__$1 = (state_12823[2]);var inst_12805 = (inst_12804__$1 == null);var state_12823__$1 = (function (){var statearr_12826 = state_12823;(statearr_12826[5] = inst_12804__$1);
return statearr_12826;
})();if(cljs.core.truth_(inst_12805))
{var statearr_12827_12843 = state_12823__$1;(statearr_12827_12843[1] = 5);
} else
{var statearr_12828_12844 = state_12823__$1;(statearr_12828_12844[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12824 === 5))
{var inst_12807 = cljs.core.async.close_BANG_.call(null,tc);var inst_12808 = cljs.core.async.close_BANG_.call(null,fc);var state_12823__$1 = (function (){var statearr_12829 = state_12823;(statearr_12829[6] = inst_12807);
return statearr_12829;
})();var statearr_12830_12845 = state_12823__$1;(statearr_12830_12845[2] = inst_12808);
(statearr_12830_12845[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12824 === 6))
{var inst_12804 = (state_12823[5]);var inst_12810 = p.call(null,inst_12804);var state_12823__$1 = state_12823;if(cljs.core.truth_(inst_12810))
{var statearr_12831_12846 = state_12823__$1;(statearr_12831_12846[1] = 9);
} else
{var statearr_12832_12847 = state_12823__$1;(statearr_12832_12847[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12824 === 7))
{var inst_12819 = (state_12823[2]);var state_12823__$1 = state_12823;var statearr_12833_12848 = state_12823__$1;(statearr_12833_12848[2] = inst_12819);
(statearr_12833_12848[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12824 === 8))
{var inst_12816 = (state_12823[2]);var state_12823__$1 = (function (){var statearr_12834 = state_12823;(statearr_12834[7] = inst_12816);
return statearr_12834;
})();var statearr_12835_12849 = state_12823__$1;(statearr_12835_12849[2] = null);
(statearr_12835_12849[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12824 === 9))
{var state_12823__$1 = state_12823;var statearr_12836_12850 = state_12823__$1;(statearr_12836_12850[2] = tc);
(statearr_12836_12850[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12824 === 10))
{var state_12823__$1 = state_12823;var statearr_12837_12851 = state_12823__$1;(statearr_12837_12851[2] = fc);
(statearr_12837_12851[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12824 === 11))
{var inst_12804 = (state_12823[5]);var inst_12814 = (state_12823[2]);var state_12823__$1 = state_12823;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12823__$1,8,inst_12814,inst_12804);
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
});return ((function (switch__8508__auto__){
return (function() {
var state_machine__8509__auto__ = null;
var state_machine__8509__auto____0 = (function (){var statearr_12839 = (new Array(8));(statearr_12839[0] = state_machine__8509__auto__);
(statearr_12839[1] = 1);
return statearr_12839;
});
var state_machine__8509__auto____1 = (function (state_12823){while(true){
var result__8510__auto__ = switch__8508__auto__.call(null,state_12823);if(cljs.core.keyword_identical_QMARK_.call(null,result__8510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8510__auto__;
}
break;
}
});
state_machine__8509__auto__ = function(state_12823){
switch(arguments.length){
case 0:
return state_machine__8509__auto____0.call(this);
case 1:
return state_machine__8509__auto____1.call(this,state_12823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8509__auto____0;
state_machine__8509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8509__auto____1;
return state_machine__8509__auto__;
})()
;})(switch__8508__auto__))
})();var state__8585__auto__ = (function (){var statearr_12840 = f__8584__auto__.call(null);(statearr_12840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8583__auto___12841);
return statearr_12840;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8585__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__8583__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8584__auto__ = (function (){var switch__8508__auto__ = (function (state_12894){var state_val_12895 = (state_12894[1]);if((state_val_12895 === 7))
{var inst_12890 = (state_12894[2]);var state_12894__$1 = state_12894;var statearr_12896_12908 = state_12894__$1;(statearr_12896_12908[2] = inst_12890);
(statearr_12896_12908[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12895 === 6))
{var inst_12880 = (state_12894[5]);var inst_12883 = (state_12894[6]);var inst_12887 = f.call(null,inst_12880,inst_12883);var inst_12880__$1 = inst_12887;var state_12894__$1 = (function (){var statearr_12897 = state_12894;(statearr_12897[5] = inst_12880__$1);
return statearr_12897;
})();var statearr_12898_12909 = state_12894__$1;(statearr_12898_12909[2] = null);
(statearr_12898_12909[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12895 === 5))
{var inst_12880 = (state_12894[5]);var state_12894__$1 = state_12894;var statearr_12899_12910 = state_12894__$1;(statearr_12899_12910[2] = inst_12880);
(statearr_12899_12910[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12895 === 4))
{var inst_12883 = (state_12894[6]);var inst_12883__$1 = (state_12894[2]);var inst_12884 = (inst_12883__$1 == null);var state_12894__$1 = (function (){var statearr_12900 = state_12894;(statearr_12900[6] = inst_12883__$1);
return statearr_12900;
})();if(cljs.core.truth_(inst_12884))
{var statearr_12901_12911 = state_12894__$1;(statearr_12901_12911[1] = 5);
} else
{var statearr_12902_12912 = state_12894__$1;(statearr_12902_12912[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12895 === 3))
{var inst_12892 = (state_12894[2]);var state_12894__$1 = state_12894;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12894__$1,inst_12892);
} else
{if((state_val_12895 === 2))
{var state_12894__$1 = state_12894;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12894__$1,4,ch);
} else
{if((state_val_12895 === 1))
{var inst_12880 = init;var state_12894__$1 = (function (){var statearr_12903 = state_12894;(statearr_12903[5] = inst_12880);
return statearr_12903;
})();var statearr_12904_12913 = state_12894__$1;(statearr_12904_12913[2] = null);
(statearr_12904_12913[1] = 2);
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
});return ((function (switch__8508__auto__){
return (function() {
var state_machine__8509__auto__ = null;
var state_machine__8509__auto____0 = (function (){var statearr_12906 = (new Array(7));(statearr_12906[0] = state_machine__8509__auto__);
(statearr_12906[1] = 1);
return statearr_12906;
});
var state_machine__8509__auto____1 = (function (state_12894){while(true){
var result__8510__auto__ = switch__8508__auto__.call(null,state_12894);if(cljs.core.keyword_identical_QMARK_.call(null,result__8510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8510__auto__;
}
break;
}
});
state_machine__8509__auto__ = function(state_12894){
switch(arguments.length){
case 0:
return state_machine__8509__auto____0.call(this);
case 1:
return state_machine__8509__auto____1.call(this,state_12894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8509__auto____0;
state_machine__8509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8509__auto____1;
return state_machine__8509__auto__;
})()
;})(switch__8508__auto__))
})();var state__8585__auto__ = (function (){var statearr_12907 = f__8584__auto__.call(null);(statearr_12907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8583__auto__);
return statearr_12907;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8585__auto__);
}));
return c__8583__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__8583__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8584__auto__ = (function (){var switch__8508__auto__ = (function (state_12971){var state_val_12972 = (state_12971[1]);if((state_val_12972 === 1))
{var inst_12951 = cljs.core.seq.call(null,coll);var inst_12952 = inst_12951;var state_12971__$1 = (function (){var statearr_12973 = state_12971;(statearr_12973[5] = inst_12952);
return statearr_12973;
})();var statearr_12974_12988 = state_12971__$1;(statearr_12974_12988[2] = null);
(statearr_12974_12988[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12972 === 2))
{var inst_12952 = (state_12971[5]);var state_12971__$1 = state_12971;if(cljs.core.truth_(inst_12952))
{var statearr_12975_12989 = state_12971__$1;(statearr_12975_12989[1] = 4);
} else
{var statearr_12976_12990 = state_12971__$1;(statearr_12976_12990[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12972 === 3))
{var inst_12969 = (state_12971[2]);var state_12971__$1 = state_12971;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12971__$1,inst_12969);
} else
{if((state_val_12972 === 4))
{var inst_12952 = (state_12971[5]);var inst_12955 = cljs.core.first.call(null,inst_12952);var state_12971__$1 = state_12971;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12971__$1,7,ch,inst_12955);
} else
{if((state_val_12972 === 5))
{var state_12971__$1 = state_12971;if(cljs.core.truth_(close_QMARK_))
{var statearr_12977_12991 = state_12971__$1;(statearr_12977_12991[1] = 8);
} else
{var statearr_12978_12992 = state_12971__$1;(statearr_12978_12992[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12972 === 6))
{var inst_12967 = (state_12971[2]);var state_12971__$1 = state_12971;var statearr_12979_12993 = state_12971__$1;(statearr_12979_12993[2] = inst_12967);
(statearr_12979_12993[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12972 === 7))
{var inst_12952 = (state_12971[5]);var inst_12957 = (state_12971[2]);var inst_12958 = cljs.core.next.call(null,inst_12952);var inst_12952__$1 = inst_12958;var state_12971__$1 = (function (){var statearr_12980 = state_12971;(statearr_12980[6] = inst_12957);
(statearr_12980[5] = inst_12952__$1);
return statearr_12980;
})();var statearr_12981_12994 = state_12971__$1;(statearr_12981_12994[2] = null);
(statearr_12981_12994[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12972 === 8))
{var inst_12962 = cljs.core.async.close_BANG_.call(null,ch);var state_12971__$1 = state_12971;var statearr_12982_12995 = state_12971__$1;(statearr_12982_12995[2] = inst_12962);
(statearr_12982_12995[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12972 === 9))
{var state_12971__$1 = state_12971;var statearr_12983_12996 = state_12971__$1;(statearr_12983_12996[2] = null);
(statearr_12983_12996[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12972 === 10))
{var inst_12965 = (state_12971[2]);var state_12971__$1 = state_12971;var statearr_12984_12997 = state_12971__$1;(statearr_12984_12997[2] = inst_12965);
(statearr_12984_12997[1] = 6);
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
});return ((function (switch__8508__auto__){
return (function() {
var state_machine__8509__auto__ = null;
var state_machine__8509__auto____0 = (function (){var statearr_12986 = (new Array(7));(statearr_12986[0] = state_machine__8509__auto__);
(statearr_12986[1] = 1);
return statearr_12986;
});
var state_machine__8509__auto____1 = (function (state_12971){while(true){
var result__8510__auto__ = switch__8508__auto__.call(null,state_12971);if(cljs.core.keyword_identical_QMARK_.call(null,result__8510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8510__auto__;
}
break;
}
});
state_machine__8509__auto__ = function(state_12971){
switch(arguments.length){
case 0:
return state_machine__8509__auto____0.call(this);
case 1:
return state_machine__8509__auto____1.call(this,state_12971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8509__auto____0;
state_machine__8509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8509__auto____1;
return state_machine__8509__auto__;
})()
;})(switch__8508__auto__))
})();var state__8585__auto__ = (function (){var statearr_12987 = f__8584__auto__.call(null);(statearr_12987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8583__auto__);
return statearr_12987;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8585__auto__);
}));
return c__8583__auto__;
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
{var x__7073__auto__ = (((_ == null))?null:_);return (function (){var or__3943__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7073__auto__)]);if(or__3943__auto__)
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
{var x__7073__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7073__auto__)]);if(or__3943__auto__)
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
{var x__7073__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7073__auto__)]);if(or__3943__auto__)
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
{var x__7073__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7073__auto__)]);if(or__3943__auto__)
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13210 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t13210');

/**
* @constructor
*/
cljs.core.async.t13210 = (function (cs,ch,mult,meta13211){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13211 = meta13211;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13210.cljs$lang$type = true;
cljs.core.async.t13210.cljs$lang$ctorStr = "cljs.core.async/t13210";
cljs.core.async.t13210.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7014__auto__,writer__7015__auto__,opt__7016__auto__){return cljs.core._write.call(null,writer__7015__auto__,"cljs.core.async/t13210");
});})(cs))
;
cljs.core.async.t13210.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13210.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13210.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13210.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13210.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13210.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
return self__.ch;
});})(cs))
;
cljs.core.async.t13210.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13212){var self__ = this;
return self__.meta13211;
});})(cs))
;
cljs.core.async.t13210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13212,meta13211__$1){var self__ = this;
return (new cljs.core.async.t13210(self__.cs,self__.ch,self__.mult,meta13211__$1));
});})(cs))
;
cljs.core.async.__GT_t13210 = ((function (cs){
return (function __GT_t13210(cs__$1,ch__$1,mult__$1,meta13211){return (new cljs.core.async.t13210(cs__$1,ch__$1,mult__$1,meta13211));
});})(cs))
;
}
return (new cljs.core.async.t13210(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__8583__auto___13422 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8584__auto__ = (function (){var switch__8508__auto__ = (function (state_13340){var state_val_13341 = (state_13340[1]);if((state_val_13341 === 32))
{try{var inst_13291 = (state_13340[5]);var inst_13215 = (state_13340[6]);var inst_13297 = cljs.core.async.put_BANG_.call(null,inst_13291,inst_13215,done);var state_13340__$1 = state_13340;var statearr_13344_13423 = state_13340__$1;(statearr_13344_13423[2] = inst_13297);
(statearr_13344_13423[1] = 30);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e13342){if((e13342 instanceof Object))
{var ex__8502__auto__ = e13342;var statearr_13343_13424 = state_13340;(statearr_13343_13424[1] = 31);
(statearr_13343_13424[2] = ex__8502__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13342;
} else
{return null;
}
}
}} else
{if((state_val_13341 === 1))
{var state_13340__$1 = state_13340;var statearr_13345_13425 = state_13340__$1;(statearr_13345_13425[2] = null);
(statearr_13345_13425[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 33))
{var inst_13303 = (state_13340[7]);var inst_13305 = cljs.core.chunked_seq_QMARK_.call(null,inst_13303);var state_13340__$1 = state_13340;if(inst_13305)
{var statearr_13346_13426 = state_13340__$1;(statearr_13346_13426[1] = 36);
} else
{var statearr_13347_13427 = state_13340__$1;(statearr_13347_13427[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 2))
{var state_13340__$1 = state_13340;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13340__$1,4,ch);
} else
{if((state_val_13341 === 34))
{var state_13340__$1 = state_13340;var statearr_13348_13428 = state_13340__$1;(statearr_13348_13428[2] = null);
(statearr_13348_13428[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 3))
{var inst_13338 = (state_13340[2]);var state_13340__$1 = state_13340;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13340__$1,inst_13338);
} else
{if((state_val_13341 === 35))
{var inst_13327 = (state_13340[2]);var state_13340__$1 = state_13340;var statearr_13349_13429 = state_13340__$1;(statearr_13349_13429[2] = inst_13327);
(statearr_13349_13429[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 4))
{var inst_13215 = (state_13340[6]);var inst_13215__$1 = (state_13340[2]);var inst_13216 = (inst_13215__$1 == null);var state_13340__$1 = (function (){var statearr_13350 = state_13340;(statearr_13350[6] = inst_13215__$1);
return statearr_13350;
})();if(cljs.core.truth_(inst_13216))
{var statearr_13351_13430 = state_13340__$1;(statearr_13351_13430[1] = 5);
} else
{var statearr_13352_13431 = state_13340__$1;(statearr_13352_13431[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 36))
{var inst_13303 = (state_13340[7]);var inst_13307 = cljs.core.chunk_first.call(null,inst_13303);var inst_13308 = cljs.core.chunk_rest.call(null,inst_13303);var inst_13309 = cljs.core.count.call(null,inst_13307);var inst_13283 = inst_13308;var inst_13284 = inst_13307;var inst_13285 = inst_13309;var inst_13286 = 0;var state_13340__$1 = (function (){var statearr_13353 = state_13340;(statearr_13353[8] = inst_13285);
(statearr_13353[9] = inst_13286);
(statearr_13353[10] = inst_13284);
(statearr_13353[11] = inst_13283);
return statearr_13353;
})();var statearr_13354_13432 = state_13340__$1;(statearr_13354_13432[2] = null);
(statearr_13354_13432[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 5))
{var inst_13222 = cljs.core.deref.call(null,cs);var inst_13223 = cljs.core.seq.call(null,inst_13222);var inst_13224 = inst_13223;var inst_13225 = null;var inst_13226 = 0;var inst_13227 = 0;var state_13340__$1 = (function (){var statearr_13355 = state_13340;(statearr_13355[12] = inst_13227);
(statearr_13355[13] = inst_13226);
(statearr_13355[14] = inst_13225);
(statearr_13355[15] = inst_13224);
return statearr_13355;
})();var statearr_13356_13433 = state_13340__$1;(statearr_13356_13433[2] = null);
(statearr_13356_13433[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 37))
{var inst_13303 = (state_13340[7]);var inst_13312 = cljs.core.first.call(null,inst_13303);var state_13340__$1 = (function (){var statearr_13357 = state_13340;(statearr_13357[16] = inst_13312);
return statearr_13357;
})();var statearr_13358_13434 = state_13340__$1;(statearr_13358_13434[2] = null);
(statearr_13358_13434[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 6))
{var inst_13274 = cljs.core.deref.call(null,cs);var inst_13275 = cljs.core.keys.call(null,inst_13274);var inst_13276 = cljs.core.count.call(null,inst_13275);var inst_13277 = cljs.core.reset_BANG_.call(null,dctr,inst_13276);var inst_13282 = cljs.core.seq.call(null,inst_13275);var inst_13283 = inst_13282;var inst_13284 = null;var inst_13285 = 0;var inst_13286 = 0;var state_13340__$1 = (function (){var statearr_13359 = state_13340;(statearr_13359[17] = inst_13277);
(statearr_13359[8] = inst_13285);
(statearr_13359[9] = inst_13286);
(statearr_13359[10] = inst_13284);
(statearr_13359[11] = inst_13283);
return statearr_13359;
})();var statearr_13360_13435 = state_13340__$1;(statearr_13360_13435[2] = null);
(statearr_13360_13435[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 38))
{var inst_13324 = (state_13340[2]);var state_13340__$1 = state_13340;var statearr_13361_13436 = state_13340__$1;(statearr_13361_13436[2] = inst_13324);
(statearr_13361_13436[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 7))
{var inst_13336 = (state_13340[2]);var state_13340__$1 = state_13340;var statearr_13362_13437 = state_13340__$1;(statearr_13362_13437[2] = inst_13336);
(statearr_13362_13437[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 39))
{var inst_13303 = (state_13340[7]);var inst_13320 = (state_13340[2]);var inst_13321 = cljs.core.next.call(null,inst_13303);var inst_13283 = inst_13321;var inst_13284 = null;var inst_13285 = 0;var inst_13286 = 0;var state_13340__$1 = (function (){var statearr_13363 = state_13340;(statearr_13363[18] = inst_13320);
(statearr_13363[8] = inst_13285);
(statearr_13363[9] = inst_13286);
(statearr_13363[10] = inst_13284);
(statearr_13363[11] = inst_13283);
return statearr_13363;
})();var statearr_13364_13438 = state_13340__$1;(statearr_13364_13438[2] = null);
(statearr_13364_13438[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 8))
{var inst_13227 = (state_13340[12]);var inst_13226 = (state_13340[13]);var inst_13229 = (inst_13227 < inst_13226);var inst_13230 = inst_13229;var state_13340__$1 = state_13340;if(cljs.core.truth_(inst_13230))
{var statearr_13365_13439 = state_13340__$1;(statearr_13365_13439[1] = 10);
} else
{var statearr_13366_13440 = state_13340__$1;(statearr_13366_13440[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 40))
{var inst_13312 = (state_13340[16]);var inst_13313 = (state_13340[2]);var inst_13314 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13315 = cljs.core.async.untap_STAR_.call(null,m,inst_13312);var state_13340__$1 = (function (){var statearr_13367 = state_13340;(statearr_13367[19] = inst_13314);
(statearr_13367[20] = inst_13313);
return statearr_13367;
})();var statearr_13368_13441 = state_13340__$1;(statearr_13368_13441[2] = inst_13315);
(statearr_13368_13441[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 9))
{var inst_13272 = (state_13340[2]);var state_13340__$1 = state_13340;var statearr_13369_13442 = state_13340__$1;(statearr_13369_13442[2] = inst_13272);
(statearr_13369_13442[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 41))
{try{var inst_13312 = (state_13340[16]);var inst_13215 = (state_13340[6]);var inst_13318 = cljs.core.async.put_BANG_.call(null,inst_13312,inst_13215,done);var state_13340__$1 = state_13340;var statearr_13372_13443 = state_13340__$1;(statearr_13372_13443[2] = inst_13318);
(statearr_13372_13443[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e13370){if((e13370 instanceof Object))
{var ex__8502__auto__ = e13370;var statearr_13371_13444 = state_13340;(statearr_13371_13444[1] = 40);
(statearr_13371_13444[2] = ex__8502__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13370;
} else
{return null;
}
}
}} else
{if((state_val_13341 === 10))
{var inst_13227 = (state_13340[12]);var inst_13225 = (state_13340[14]);var inst_13233 = cljs.core._nth.call(null,inst_13225,inst_13227);var inst_13234 = cljs.core.nth.call(null,inst_13233,0,null);var inst_13235 = cljs.core.nth.call(null,inst_13233,1,null);var state_13340__$1 = (function (){var statearr_13373 = state_13340;(statearr_13373[21] = inst_13234);
return statearr_13373;
})();if(cljs.core.truth_(inst_13235))
{var statearr_13374_13445 = state_13340__$1;(statearr_13374_13445[1] = 13);
} else
{var statearr_13375_13446 = state_13340__$1;(statearr_13375_13446[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 42))
{var inst_13333 = (state_13340[2]);var state_13340__$1 = (function (){var statearr_13376 = state_13340;(statearr_13376[22] = inst_13333);
return statearr_13376;
})();var statearr_13377_13447 = state_13340__$1;(statearr_13377_13447[2] = null);
(statearr_13377_13447[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 11))
{var inst_13244 = (state_13340[23]);var inst_13224 = (state_13340[15]);var inst_13244__$1 = cljs.core.seq.call(null,inst_13224);var state_13340__$1 = (function (){var statearr_13378 = state_13340;(statearr_13378[23] = inst_13244__$1);
return statearr_13378;
})();if(inst_13244__$1)
{var statearr_13379_13448 = state_13340__$1;(statearr_13379_13448[1] = 16);
} else
{var statearr_13380_13449 = state_13340__$1;(statearr_13380_13449[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 12))
{var inst_13270 = (state_13340[2]);var state_13340__$1 = state_13340;var statearr_13381_13450 = state_13340__$1;(statearr_13381_13450[2] = inst_13270);
(statearr_13381_13450[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 13))
{var inst_13234 = (state_13340[21]);var inst_13237 = cljs.core.async.close_BANG_.call(null,inst_13234);var state_13340__$1 = state_13340;var statearr_13385_13451 = state_13340__$1;(statearr_13385_13451[2] = inst_13237);
(statearr_13385_13451[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 14))
{var state_13340__$1 = state_13340;var statearr_13386_13452 = state_13340__$1;(statearr_13386_13452[2] = null);
(statearr_13386_13452[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 15))
{var inst_13227 = (state_13340[12]);var inst_13226 = (state_13340[13]);var inst_13225 = (state_13340[14]);var inst_13224 = (state_13340[15]);var inst_13240 = (state_13340[2]);var inst_13241 = (inst_13227 + 1);var tmp13382 = inst_13226;var tmp13383 = inst_13225;var tmp13384 = inst_13224;var inst_13224__$1 = tmp13384;var inst_13225__$1 = tmp13383;var inst_13226__$1 = tmp13382;var inst_13227__$1 = inst_13241;var state_13340__$1 = (function (){var statearr_13387 = state_13340;(statearr_13387[12] = inst_13227__$1);
(statearr_13387[24] = inst_13240);
(statearr_13387[13] = inst_13226__$1);
(statearr_13387[14] = inst_13225__$1);
(statearr_13387[15] = inst_13224__$1);
return statearr_13387;
})();var statearr_13388_13453 = state_13340__$1;(statearr_13388_13453[2] = null);
(statearr_13388_13453[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 16))
{var inst_13244 = (state_13340[23]);var inst_13246 = cljs.core.chunked_seq_QMARK_.call(null,inst_13244);var state_13340__$1 = state_13340;if(inst_13246)
{var statearr_13389_13454 = state_13340__$1;(statearr_13389_13454[1] = 19);
} else
{var statearr_13390_13455 = state_13340__$1;(statearr_13390_13455[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 17))
{var state_13340__$1 = state_13340;var statearr_13391_13456 = state_13340__$1;(statearr_13391_13456[2] = null);
(statearr_13391_13456[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 18))
{var inst_13268 = (state_13340[2]);var state_13340__$1 = state_13340;var statearr_13392_13457 = state_13340__$1;(statearr_13392_13457[2] = inst_13268);
(statearr_13392_13457[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 19))
{var inst_13244 = (state_13340[23]);var inst_13248 = cljs.core.chunk_first.call(null,inst_13244);var inst_13249 = cljs.core.chunk_rest.call(null,inst_13244);var inst_13250 = cljs.core.count.call(null,inst_13248);var inst_13224 = inst_13249;var inst_13225 = inst_13248;var inst_13226 = inst_13250;var inst_13227 = 0;var state_13340__$1 = (function (){var statearr_13393 = state_13340;(statearr_13393[12] = inst_13227);
(statearr_13393[13] = inst_13226);
(statearr_13393[14] = inst_13225);
(statearr_13393[15] = inst_13224);
return statearr_13393;
})();var statearr_13394_13458 = state_13340__$1;(statearr_13394_13458[2] = null);
(statearr_13394_13458[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 20))
{var inst_13244 = (state_13340[23]);var inst_13254 = cljs.core.first.call(null,inst_13244);var inst_13255 = cljs.core.nth.call(null,inst_13254,0,null);var inst_13256 = cljs.core.nth.call(null,inst_13254,1,null);var state_13340__$1 = (function (){var statearr_13395 = state_13340;(statearr_13395[25] = inst_13255);
return statearr_13395;
})();if(cljs.core.truth_(inst_13256))
{var statearr_13396_13459 = state_13340__$1;(statearr_13396_13459[1] = 22);
} else
{var statearr_13397_13460 = state_13340__$1;(statearr_13397_13460[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 21))
{var inst_13265 = (state_13340[2]);var state_13340__$1 = state_13340;var statearr_13398_13461 = state_13340__$1;(statearr_13398_13461[2] = inst_13265);
(statearr_13398_13461[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 22))
{var inst_13255 = (state_13340[25]);var inst_13258 = cljs.core.async.close_BANG_.call(null,inst_13255);var state_13340__$1 = state_13340;var statearr_13399_13462 = state_13340__$1;(statearr_13399_13462[2] = inst_13258);
(statearr_13399_13462[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 23))
{var state_13340__$1 = state_13340;var statearr_13400_13463 = state_13340__$1;(statearr_13400_13463[2] = null);
(statearr_13400_13463[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 24))
{var inst_13244 = (state_13340[23]);var inst_13261 = (state_13340[2]);var inst_13262 = cljs.core.next.call(null,inst_13244);var inst_13224 = inst_13262;var inst_13225 = null;var inst_13226 = 0;var inst_13227 = 0;var state_13340__$1 = (function (){var statearr_13401 = state_13340;(statearr_13401[12] = inst_13227);
(statearr_13401[13] = inst_13226);
(statearr_13401[14] = inst_13225);
(statearr_13401[15] = inst_13224);
(statearr_13401[26] = inst_13261);
return statearr_13401;
})();var statearr_13402_13464 = state_13340__$1;(statearr_13402_13464[2] = null);
(statearr_13402_13464[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 25))
{var inst_13285 = (state_13340[8]);var inst_13286 = (state_13340[9]);var inst_13288 = (inst_13286 < inst_13285);var inst_13289 = inst_13288;var state_13340__$1 = state_13340;if(cljs.core.truth_(inst_13289))
{var statearr_13403_13465 = state_13340__$1;(statearr_13403_13465[1] = 27);
} else
{var statearr_13404_13466 = state_13340__$1;(statearr_13404_13466[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 26))
{var inst_13331 = (state_13340[2]);var state_13340__$1 = (function (){var statearr_13405 = state_13340;(statearr_13405[27] = inst_13331);
return statearr_13405;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13340__$1,42,dchan);
} else
{if((state_val_13341 === 27))
{var inst_13286 = (state_13340[9]);var inst_13284 = (state_13340[10]);var inst_13291 = cljs.core._nth.call(null,inst_13284,inst_13286);var state_13340__$1 = (function (){var statearr_13406 = state_13340;(statearr_13406[5] = inst_13291);
return statearr_13406;
})();var statearr_13407_13467 = state_13340__$1;(statearr_13407_13467[2] = null);
(statearr_13407_13467[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 28))
{var inst_13283 = (state_13340[11]);var inst_13303 = (state_13340[7]);var inst_13303__$1 = cljs.core.seq.call(null,inst_13283);var state_13340__$1 = (function (){var statearr_13411 = state_13340;(statearr_13411[7] = inst_13303__$1);
return statearr_13411;
})();if(inst_13303__$1)
{var statearr_13412_13468 = state_13340__$1;(statearr_13412_13468[1] = 33);
} else
{var statearr_13413_13469 = state_13340__$1;(statearr_13413_13469[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 29))
{var inst_13329 = (state_13340[2]);var state_13340__$1 = state_13340;var statearr_13414_13470 = state_13340__$1;(statearr_13414_13470[2] = inst_13329);
(statearr_13414_13470[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 30))
{var inst_13285 = (state_13340[8]);var inst_13286 = (state_13340[9]);var inst_13284 = (state_13340[10]);var inst_13283 = (state_13340[11]);var inst_13299 = (state_13340[2]);var inst_13300 = (inst_13286 + 1);var tmp13408 = inst_13285;var tmp13409 = inst_13284;var tmp13410 = inst_13283;var inst_13283__$1 = tmp13410;var inst_13284__$1 = tmp13409;var inst_13285__$1 = tmp13408;var inst_13286__$1 = inst_13300;var state_13340__$1 = (function (){var statearr_13415 = state_13340;(statearr_13415[8] = inst_13285__$1);
(statearr_13415[9] = inst_13286__$1);
(statearr_13415[10] = inst_13284__$1);
(statearr_13415[11] = inst_13283__$1);
(statearr_13415[28] = inst_13299);
return statearr_13415;
})();var statearr_13416_13471 = state_13340__$1;(statearr_13416_13471[2] = null);
(statearr_13416_13471[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 31))
{var inst_13291 = (state_13340[5]);var inst_13292 = (state_13340[2]);var inst_13293 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13294 = cljs.core.async.untap_STAR_.call(null,m,inst_13291);var state_13340__$1 = (function (){var statearr_13417 = state_13340;(statearr_13417[29] = inst_13293);
(statearr_13417[30] = inst_13292);
return statearr_13417;
})();var statearr_13418_13472 = state_13340__$1;(statearr_13418_13472[2] = inst_13294);
(statearr_13418_13472[1] = 30);
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
});return ((function (switch__8508__auto__){
return (function() {
var state_machine__8509__auto__ = null;
var state_machine__8509__auto____0 = (function (){var statearr_13420 = (new Array(31));(statearr_13420[0] = state_machine__8509__auto__);
(statearr_13420[1] = 1);
return statearr_13420;
});
var state_machine__8509__auto____1 = (function (state_13340){while(true){
var result__8510__auto__ = switch__8508__auto__.call(null,state_13340);if(cljs.core.keyword_identical_QMARK_.call(null,result__8510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8510__auto__;
}
break;
}
});
state_machine__8509__auto__ = function(state_13340){
switch(arguments.length){
case 0:
return state_machine__8509__auto____0.call(this);
case 1:
return state_machine__8509__auto____1.call(this,state_13340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8509__auto____0;
state_machine__8509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8509__auto____1;
return state_machine__8509__auto__;
})()
;})(switch__8508__auto__))
})();var state__8585__auto__ = (function (){var statearr_13421 = f__8584__auto__.call(null);(statearr_13421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8583__auto___13422);
return statearr_13421;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8585__auto__);
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
{var x__7073__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7073__auto__)]);if(or__3943__auto__)
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
{var x__7073__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7073__auto__)]);if(or__3943__auto__)
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
{var x__7073__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7073__auto__)]);if(or__3943__auto__)
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
{var x__7073__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7073__auto__)]);if(or__3943__auto__)
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
{var x__7073__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7073__auto__)]);if(or__3943__auto__)
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
;var m = (function (){if(typeof cljs.core.async.t13593 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t13593');

/**
* @constructor
*/
cljs.core.async.t13593 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta13594){
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
this.meta13594 = meta13594;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13593.cljs$lang$type = true;
cljs.core.async.t13593.cljs$lang$ctorStr = "cljs.core.async/t13593";
cljs.core.async.t13593.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7014__auto__,writer__7015__auto__,opt__7016__auto__){return cljs.core._write.call(null,writer__7015__auto__,"cljs.core.async/t13593");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13593.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13593.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13593.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13593.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13593.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13593.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13593.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13593.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13593.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13595){var self__ = this;
return self__.meta13594;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13595,meta13594__$1){var self__ = this;
return (new cljs.core.async.t13593(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta13594__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13593 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13593(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13594){return (new cljs.core.async.t13593(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13594));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13593(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__8583__auto___13713 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8584__auto__ = (function (){var switch__8508__auto__ = (function (state_13666){var state_val_13667 = (state_13666[1]);if((state_val_13667 === 1))
{var inst_13599 = (state_13666[5]);var inst_13599__$1 = calc_state.call(null);var inst_13600 = cljs.core.seq_QMARK_.call(null,inst_13599__$1);var state_13666__$1 = (function (){var statearr_13668 = state_13666;(statearr_13668[5] = inst_13599__$1);
return statearr_13668;
})();if(inst_13600)
{var statearr_13669_13714 = state_13666__$1;(statearr_13669_13714[1] = 2);
} else
{var statearr_13670_13715 = state_13666__$1;(statearr_13670_13715[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13667 === 2))
{var inst_13599 = (state_13666[5]);var inst_13602 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13599);var state_13666__$1 = state_13666;var statearr_13671_13716 = state_13666__$1;(statearr_13671_13716[2] = inst_13602);
(statearr_13671_13716[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13667 === 3))
{var inst_13599 = (state_13666[5]);var state_13666__$1 = state_13666;var statearr_13672_13717 = state_13666__$1;(statearr_13672_13717[2] = inst_13599);
(statearr_13672_13717[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13667 === 4))
{var inst_13599 = (state_13666[5]);var inst_13605 = (state_13666[2]);var inst_13606 = cljs.core.get.call(null,inst_13605,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13607 = cljs.core.get.call(null,inst_13605,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13608 = cljs.core.get.call(null,inst_13605,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_13609 = inst_13599;var state_13666__$1 = (function (){var statearr_13673 = state_13666;(statearr_13673[6] = inst_13606);
(statearr_13673[7] = inst_13608);
(statearr_13673[8] = inst_13607);
(statearr_13673[9] = inst_13609);
return statearr_13673;
})();var statearr_13674_13718 = state_13666__$1;(statearr_13674_13718[2] = null);
(statearr_13674_13718[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13667 === 5))
{var inst_13609 = (state_13666[9]);var inst_13612 = cljs.core.seq_QMARK_.call(null,inst_13609);var state_13666__$1 = state_13666;if(inst_13612)
{var statearr_13675_13719 = state_13666__$1;(statearr_13675_13719[1] = 7);
} else
{var statearr_13676_13720 = state_13666__$1;(statearr_13676_13720[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13667 === 6))
{var inst_13664 = (state_13666[2]);var state_13666__$1 = state_13666;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13666__$1,inst_13664);
} else
{if((state_val_13667 === 7))
{var inst_13609 = (state_13666[9]);var inst_13614 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13609);var state_13666__$1 = state_13666;var statearr_13677_13721 = state_13666__$1;(statearr_13677_13721[2] = inst_13614);
(statearr_13677_13721[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13667 === 8))
{var inst_13609 = (state_13666[9]);var state_13666__$1 = state_13666;var statearr_13678_13722 = state_13666__$1;(statearr_13678_13722[2] = inst_13609);
(statearr_13678_13722[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13667 === 9))
{var inst_13617 = (state_13666[10]);var inst_13617__$1 = (state_13666[2]);var inst_13618 = cljs.core.get.call(null,inst_13617__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13619 = cljs.core.get.call(null,inst_13617__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13620 = cljs.core.get.call(null,inst_13617__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_13666__$1 = (function (){var statearr_13679 = state_13666;(statearr_13679[10] = inst_13617__$1);
(statearr_13679[11] = inst_13619);
(statearr_13679[12] = inst_13620);
return statearr_13679;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13666__$1,10,inst_13618);
} else
{if((state_val_13667 === 10))
{var inst_13624 = (state_13666[13]);var inst_13626 = (state_13666[14]);var inst_13623 = (state_13666[2]);var inst_13624__$1 = cljs.core.nth.call(null,inst_13623,0,null);var inst_13625 = cljs.core.nth.call(null,inst_13623,1,null);var inst_13626__$1 = (inst_13624__$1 == null);var state_13666__$1 = (function (){var statearr_13680 = state_13666;(statearr_13680[13] = inst_13624__$1);
(statearr_13680[15] = inst_13625);
(statearr_13680[14] = inst_13626__$1);
return statearr_13680;
})();if(cljs.core.truth_(inst_13626__$1))
{var statearr_13681_13723 = state_13666__$1;(statearr_13681_13723[1] = 11);
} else
{var statearr_13682_13724 = state_13666__$1;(statearr_13682_13724[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13667 === 11))
{var inst_13626 = (state_13666[14]);var state_13666__$1 = state_13666;var statearr_13683_13725 = state_13666__$1;(statearr_13683_13725[2] = inst_13626);
(statearr_13683_13725[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13667 === 12))
{var inst_13625 = (state_13666[15]);var inst_13629 = cljs.core._EQ_.call(null,inst_13625,change);var state_13666__$1 = state_13666;var statearr_13684_13726 = state_13666__$1;(statearr_13684_13726[2] = inst_13629);
(statearr_13684_13726[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13667 === 13))
{var inst_13631 = (state_13666[2]);var state_13666__$1 = state_13666;if(cljs.core.truth_(inst_13631))
{var statearr_13685_13727 = state_13666__$1;(statearr_13685_13727[1] = 14);
} else
{var statearr_13686_13728 = state_13666__$1;(statearr_13686_13728[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13667 === 14))
{var inst_13624 = (state_13666[13]);var inst_13633 = (inst_13624 == null);var state_13666__$1 = state_13666;if(cljs.core.truth_(inst_13633))
{var statearr_13687_13729 = state_13666__$1;(statearr_13687_13729[1] = 17);
} else
{var statearr_13688_13730 = state_13666__$1;(statearr_13688_13730[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13667 === 15))
{var inst_13642 = (state_13666[16]);var inst_13625 = (state_13666[15]);var inst_13620 = (state_13666[12]);var inst_13642__$1 = inst_13620.call(null,inst_13625);var state_13666__$1 = (function (){var statearr_13689 = state_13666;(statearr_13689[16] = inst_13642__$1);
return statearr_13689;
})();if(cljs.core.truth_(inst_13642__$1))
{var statearr_13690_13731 = state_13666__$1;(statearr_13690_13731[1] = 20);
} else
{var statearr_13691_13732 = state_13666__$1;(statearr_13691_13732[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13667 === 16))
{var inst_13662 = (state_13666[2]);var state_13666__$1 = state_13666;var statearr_13692_13733 = state_13666__$1;(statearr_13692_13733[2] = inst_13662);
(statearr_13692_13733[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13667 === 17))
{var inst_13625 = (state_13666[15]);var inst_13635 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13625);var state_13666__$1 = state_13666;var statearr_13693_13734 = state_13666__$1;(statearr_13693_13734[2] = inst_13635);
(statearr_13693_13734[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13667 === 18))
{var state_13666__$1 = state_13666;var statearr_13694_13735 = state_13666__$1;(statearr_13694_13735[2] = null);
(statearr_13694_13735[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13667 === 19))
{var inst_13638 = (state_13666[2]);var inst_13639 = calc_state.call(null);var inst_13609 = inst_13639;var state_13666__$1 = (function (){var statearr_13695 = state_13666;(statearr_13695[9] = inst_13609);
(statearr_13695[17] = inst_13638);
return statearr_13695;
})();var statearr_13696_13736 = state_13666__$1;(statearr_13696_13736[2] = null);
(statearr_13696_13736[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13667 === 20))
{var inst_13642 = (state_13666[16]);var state_13666__$1 = state_13666;var statearr_13697_13737 = state_13666__$1;(statearr_13697_13737[2] = inst_13642);
(statearr_13697_13737[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13667 === 21))
{var inst_13620 = (state_13666[12]);var inst_13645 = (state_13666[18]);var inst_13645__$1 = cljs.core.empty_QMARK_.call(null,inst_13620);var state_13666__$1 = (function (){var statearr_13698 = state_13666;(statearr_13698[18] = inst_13645__$1);
return statearr_13698;
})();if(inst_13645__$1)
{var statearr_13699_13738 = state_13666__$1;(statearr_13699_13738[1] = 23);
} else
{var statearr_13700_13739 = state_13666__$1;(statearr_13700_13739[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13667 === 22))
{var inst_13653 = (state_13666[2]);var state_13666__$1 = state_13666;if(cljs.core.truth_(inst_13653))
{var statearr_13701_13740 = state_13666__$1;(statearr_13701_13740[1] = 26);
} else
{var statearr_13702_13741 = state_13666__$1;(statearr_13702_13741[1] = 27);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13667 === 23))
{var inst_13619 = (state_13666[11]);var inst_13625 = (state_13666[15]);var inst_13647 = inst_13619.call(null,inst_13625);var inst_13648 = cljs.core.not.call(null,inst_13647);var state_13666__$1 = state_13666;var statearr_13703_13742 = state_13666__$1;(statearr_13703_13742[2] = inst_13648);
(statearr_13703_13742[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13667 === 24))
{var inst_13645 = (state_13666[18]);var state_13666__$1 = state_13666;var statearr_13704_13743 = state_13666__$1;(statearr_13704_13743[2] = inst_13645);
(statearr_13704_13743[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13667 === 25))
{var inst_13651 = (state_13666[2]);var state_13666__$1 = state_13666;var statearr_13705_13744 = state_13666__$1;(statearr_13705_13744[2] = inst_13651);
(statearr_13705_13744[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13667 === 26))
{var inst_13624 = (state_13666[13]);var state_13666__$1 = state_13666;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13666__$1,29,out,inst_13624);
} else
{if((state_val_13667 === 27))
{var state_13666__$1 = state_13666;var statearr_13706_13745 = state_13666__$1;(statearr_13706_13745[2] = null);
(statearr_13706_13745[1] = 28);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13667 === 28))
{var inst_13617 = (state_13666[10]);var inst_13659 = (state_13666[2]);var inst_13609 = inst_13617;var state_13666__$1 = (function (){var statearr_13707 = state_13666;(statearr_13707[9] = inst_13609);
(statearr_13707[19] = inst_13659);
return statearr_13707;
})();var statearr_13708_13746 = state_13666__$1;(statearr_13708_13746[2] = null);
(statearr_13708_13746[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13667 === 29))
{var inst_13656 = (state_13666[2]);var state_13666__$1 = state_13666;var statearr_13709_13747 = state_13666__$1;(statearr_13709_13747[2] = inst_13656);
(statearr_13709_13747[1] = 28);
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
});return ((function (switch__8508__auto__){
return (function() {
var state_machine__8509__auto__ = null;
var state_machine__8509__auto____0 = (function (){var statearr_13711 = (new Array(20));(statearr_13711[0] = state_machine__8509__auto__);
(statearr_13711[1] = 1);
return statearr_13711;
});
var state_machine__8509__auto____1 = (function (state_13666){while(true){
var result__8510__auto__ = switch__8508__auto__.call(null,state_13666);if(cljs.core.keyword_identical_QMARK_.call(null,result__8510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8510__auto__;
}
break;
}
});
state_machine__8509__auto__ = function(state_13666){
switch(arguments.length){
case 0:
return state_machine__8509__auto____0.call(this);
case 1:
return state_machine__8509__auto____1.call(this,state_13666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8509__auto____0;
state_machine__8509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8509__auto____1;
return state_machine__8509__auto__;
})()
;})(switch__8508__auto__))
})();var state__8585__auto__ = (function (){var statearr_13712 = f__8584__auto__.call(null);(statearr_13712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8583__auto___13713);
return statearr_13712;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8585__auto__);
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
{var x__7073__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7073__auto__)]);if(or__3943__auto__)
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
{var x__7073__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7073__auto__)]);if(or__3943__auto__)
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
{var x__7073__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7073__auto__)]);if(or__3943__auto__)
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
{var x__7073__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7073__auto__)]);if(or__3943__auto__)
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
return (function (p1__13748_SHARP_){if(cljs.core.truth_(p1__13748_SHARP_.call(null,topic)))
{return p1__13748_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13748_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3943__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13872 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t13872');

/**
* @constructor
*/
cljs.core.async.t13872 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13873){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13873 = meta13873;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13872.cljs$lang$type = true;
cljs.core.async.t13872.cljs$lang$ctorStr = "cljs.core.async/t13872";
cljs.core.async.t13872.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7014__auto__,writer__7015__auto__,opt__7016__auto__){return cljs.core._write.call(null,writer__7015__auto__,"cljs.core.async/t13872");
});})(mults,ensure_mult))
;
cljs.core.async.t13872.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13872.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13872.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13872.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13872.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13872.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13872.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13872.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13874){var self__ = this;
return self__.meta13873;
});})(mults,ensure_mult))
;
cljs.core.async.t13872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13874,meta13873__$1){var self__ = this;
return (new cljs.core.async.t13872(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13873__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13872 = ((function (mults,ensure_mult){
return (function __GT_t13872(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13873){return (new cljs.core.async.t13872(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13873));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13872(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__8583__auto___13995 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8584__auto__ = (function (){var switch__8508__auto__ = (function (state_13947){var state_val_13948 = (state_13947[1]);if((state_val_13948 === 1))
{var state_13947__$1 = state_13947;var statearr_13949_13996 = state_13947__$1;(statearr_13949_13996[2] = null);
(statearr_13949_13996[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 2))
{var state_13947__$1 = state_13947;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13947__$1,4,ch);
} else
{if((state_val_13948 === 3))
{var inst_13945 = (state_13947[2]);var state_13947__$1 = state_13947;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13947__$1,inst_13945);
} else
{if((state_val_13948 === 4))
{var inst_13877 = (state_13947[5]);var inst_13877__$1 = (state_13947[2]);var inst_13878 = (inst_13877__$1 == null);var state_13947__$1 = (function (){var statearr_13950 = state_13947;(statearr_13950[5] = inst_13877__$1);
return statearr_13950;
})();if(cljs.core.truth_(inst_13878))
{var statearr_13951_13997 = state_13947__$1;(statearr_13951_13997[1] = 5);
} else
{var statearr_13952_13998 = state_13947__$1;(statearr_13952_13998[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 5))
{var inst_13884 = cljs.core.deref.call(null,mults);var inst_13885 = cljs.core.vals.call(null,inst_13884);var inst_13886 = cljs.core.seq.call(null,inst_13885);var inst_13887 = inst_13886;var inst_13888 = null;var inst_13889 = 0;var inst_13890 = 0;var state_13947__$1 = (function (){var statearr_13953 = state_13947;(statearr_13953[6] = inst_13890);
(statearr_13953[7] = inst_13887);
(statearr_13953[8] = inst_13888);
(statearr_13953[9] = inst_13889);
return statearr_13953;
})();var statearr_13954_13999 = state_13947__$1;(statearr_13954_13999[2] = null);
(statearr_13954_13999[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 6))
{var inst_13925 = (state_13947[10]);var inst_13927 = (state_13947[11]);var inst_13877 = (state_13947[5]);var inst_13925__$1 = topic_fn.call(null,inst_13877);var inst_13926 = cljs.core.deref.call(null,mults);var inst_13927__$1 = cljs.core.get.call(null,inst_13926,inst_13925__$1);var state_13947__$1 = (function (){var statearr_13955 = state_13947;(statearr_13955[10] = inst_13925__$1);
(statearr_13955[11] = inst_13927__$1);
return statearr_13955;
})();if(cljs.core.truth_(inst_13927__$1))
{var statearr_13956_14000 = state_13947__$1;(statearr_13956_14000[1] = 19);
} else
{var statearr_13957_14001 = state_13947__$1;(statearr_13957_14001[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 7))
{var inst_13943 = (state_13947[2]);var state_13947__$1 = state_13947;var statearr_13958_14002 = state_13947__$1;(statearr_13958_14002[2] = inst_13943);
(statearr_13958_14002[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 8))
{var inst_13890 = (state_13947[6]);var inst_13889 = (state_13947[9]);var inst_13892 = (inst_13890 < inst_13889);var inst_13893 = inst_13892;var state_13947__$1 = state_13947;if(cljs.core.truth_(inst_13893))
{var statearr_13962_14003 = state_13947__$1;(statearr_13962_14003[1] = 10);
} else
{var statearr_13963_14004 = state_13947__$1;(statearr_13963_14004[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 9))
{var inst_13923 = (state_13947[2]);var state_13947__$1 = state_13947;var statearr_13964_14005 = state_13947__$1;(statearr_13964_14005[2] = inst_13923);
(statearr_13964_14005[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 10))
{var inst_13890 = (state_13947[6]);var inst_13887 = (state_13947[7]);var inst_13888 = (state_13947[8]);var inst_13889 = (state_13947[9]);var inst_13895 = cljs.core._nth.call(null,inst_13888,inst_13890);var inst_13896 = cljs.core.async.muxch_STAR_.call(null,inst_13895);var inst_13897 = cljs.core.async.close_BANG_.call(null,inst_13896);var inst_13898 = (inst_13890 + 1);var tmp13959 = inst_13887;var tmp13960 = inst_13888;var tmp13961 = inst_13889;var inst_13887__$1 = tmp13959;var inst_13888__$1 = tmp13960;var inst_13889__$1 = tmp13961;var inst_13890__$1 = inst_13898;var state_13947__$1 = (function (){var statearr_13965 = state_13947;(statearr_13965[6] = inst_13890__$1);
(statearr_13965[12] = inst_13897);
(statearr_13965[7] = inst_13887__$1);
(statearr_13965[8] = inst_13888__$1);
(statearr_13965[9] = inst_13889__$1);
return statearr_13965;
})();var statearr_13966_14006 = state_13947__$1;(statearr_13966_14006[2] = null);
(statearr_13966_14006[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 11))
{var inst_13901 = (state_13947[13]);var inst_13887 = (state_13947[7]);var inst_13901__$1 = cljs.core.seq.call(null,inst_13887);var state_13947__$1 = (function (){var statearr_13967 = state_13947;(statearr_13967[13] = inst_13901__$1);
return statearr_13967;
})();if(inst_13901__$1)
{var statearr_13968_14007 = state_13947__$1;(statearr_13968_14007[1] = 13);
} else
{var statearr_13969_14008 = state_13947__$1;(statearr_13969_14008[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 12))
{var inst_13921 = (state_13947[2]);var state_13947__$1 = state_13947;var statearr_13970_14009 = state_13947__$1;(statearr_13970_14009[2] = inst_13921);
(statearr_13970_14009[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 13))
{var inst_13901 = (state_13947[13]);var inst_13903 = cljs.core.chunked_seq_QMARK_.call(null,inst_13901);var state_13947__$1 = state_13947;if(inst_13903)
{var statearr_13971_14010 = state_13947__$1;(statearr_13971_14010[1] = 16);
} else
{var statearr_13972_14011 = state_13947__$1;(statearr_13972_14011[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 14))
{var state_13947__$1 = state_13947;var statearr_13973_14012 = state_13947__$1;(statearr_13973_14012[2] = null);
(statearr_13973_14012[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 15))
{var inst_13919 = (state_13947[2]);var state_13947__$1 = state_13947;var statearr_13974_14013 = state_13947__$1;(statearr_13974_14013[2] = inst_13919);
(statearr_13974_14013[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 16))
{var inst_13901 = (state_13947[13]);var inst_13905 = cljs.core.chunk_first.call(null,inst_13901);var inst_13906 = cljs.core.chunk_rest.call(null,inst_13901);var inst_13907 = cljs.core.count.call(null,inst_13905);var inst_13887 = inst_13906;var inst_13888 = inst_13905;var inst_13889 = inst_13907;var inst_13890 = 0;var state_13947__$1 = (function (){var statearr_13975 = state_13947;(statearr_13975[6] = inst_13890);
(statearr_13975[7] = inst_13887);
(statearr_13975[8] = inst_13888);
(statearr_13975[9] = inst_13889);
return statearr_13975;
})();var statearr_13976_14014 = state_13947__$1;(statearr_13976_14014[2] = null);
(statearr_13976_14014[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 17))
{var inst_13901 = (state_13947[13]);var inst_13910 = cljs.core.first.call(null,inst_13901);var inst_13911 = cljs.core.async.muxch_STAR_.call(null,inst_13910);var inst_13912 = cljs.core.async.close_BANG_.call(null,inst_13911);var inst_13913 = cljs.core.next.call(null,inst_13901);var inst_13887 = inst_13913;var inst_13888 = null;var inst_13889 = 0;var inst_13890 = 0;var state_13947__$1 = (function (){var statearr_13977 = state_13947;(statearr_13977[14] = inst_13912);
(statearr_13977[6] = inst_13890);
(statearr_13977[7] = inst_13887);
(statearr_13977[8] = inst_13888);
(statearr_13977[9] = inst_13889);
return statearr_13977;
})();var statearr_13978_14015 = state_13947__$1;(statearr_13978_14015[2] = null);
(statearr_13978_14015[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 18))
{var inst_13916 = (state_13947[2]);var state_13947__$1 = state_13947;var statearr_13979_14016 = state_13947__$1;(statearr_13979_14016[2] = inst_13916);
(statearr_13979_14016[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 19))
{var state_13947__$1 = state_13947;var statearr_13980_14017 = state_13947__$1;(statearr_13980_14017[2] = null);
(statearr_13980_14017[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 20))
{var state_13947__$1 = state_13947;var statearr_13981_14018 = state_13947__$1;(statearr_13981_14018[2] = null);
(statearr_13981_14018[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 21))
{var inst_13940 = (state_13947[2]);var state_13947__$1 = (function (){var statearr_13982 = state_13947;(statearr_13982[15] = inst_13940);
return statearr_13982;
})();var statearr_13983_14019 = state_13947__$1;(statearr_13983_14019[2] = null);
(statearr_13983_14019[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 22))
{var inst_13937 = (state_13947[2]);var state_13947__$1 = state_13947;var statearr_13984_14020 = state_13947__$1;(statearr_13984_14020[2] = inst_13937);
(statearr_13984_14020[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 23))
{var inst_13925 = (state_13947[10]);var inst_13929 = (state_13947[2]);var inst_13930 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13925);var state_13947__$1 = (function (){var statearr_13985 = state_13947;(statearr_13985[16] = inst_13929);
return statearr_13985;
})();var statearr_13986_14021 = state_13947__$1;(statearr_13986_14021[2] = inst_13930);
(statearr_13986_14021[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 24))
{try{var inst_13927 = (state_13947[11]);var inst_13877 = (state_13947[5]);var inst_13933 = cljs.core.async.muxch_STAR_.call(null,inst_13927);var state_13947__$1 = state_13947;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13947__$1,25,inst_13933,inst_13877);
}catch (e13987){if((e13987 instanceof Object))
{var ex__8502__auto__ = e13987;var statearr_13988_14022 = state_13947;(statearr_13988_14022[1] = 23);
(statearr_13988_14022[2] = ex__8502__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13987;
} else
{return null;
}
}
}} else
{if((state_val_13948 === 25))
{try{var inst_13935 = (state_13947[2]);var state_13947__$1 = state_13947;var statearr_13991_14023 = state_13947__$1;(statearr_13991_14023[2] = inst_13935);
(statearr_13991_14023[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e13989){if((e13989 instanceof Object))
{var ex__8502__auto__ = e13989;var statearr_13990_14024 = state_13947;(statearr_13990_14024[1] = 23);
(statearr_13990_14024[2] = ex__8502__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13989;
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
});return ((function (switch__8508__auto__){
return (function() {
var state_machine__8509__auto__ = null;
var state_machine__8509__auto____0 = (function (){var statearr_13993 = (new Array(17));(statearr_13993[0] = state_machine__8509__auto__);
(statearr_13993[1] = 1);
return statearr_13993;
});
var state_machine__8509__auto____1 = (function (state_13947){while(true){
var result__8510__auto__ = switch__8508__auto__.call(null,state_13947);if(cljs.core.keyword_identical_QMARK_.call(null,result__8510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8510__auto__;
}
break;
}
});
state_machine__8509__auto__ = function(state_13947){
switch(arguments.length){
case 0:
return state_machine__8509__auto____0.call(this);
case 1:
return state_machine__8509__auto____1.call(this,state_13947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8509__auto____0;
state_machine__8509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8509__auto____1;
return state_machine__8509__auto__;
})()
;})(switch__8508__auto__))
})();var state__8585__auto__ = (function (){var statearr_13994 = f__8584__auto__.call(null);(statearr_13994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8583__auto___13995);
return statearr_13994;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8585__auto__);
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
,cljs.core.range.call(null,cnt));var c__8583__auto___14155 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8584__auto__ = (function (){var switch__8508__auto__ = (function (state_14127){var state_val_14128 = (state_14127[1]);if((state_val_14128 === 1))
{var state_14127__$1 = state_14127;var statearr_14129_14156 = state_14127__$1;(statearr_14129_14156[2] = null);
(statearr_14129_14156[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14128 === 2))
{var inst_14091 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14092 = 0;var state_14127__$1 = (function (){var statearr_14130 = state_14127;(statearr_14130[5] = inst_14091);
(statearr_14130[6] = inst_14092);
return statearr_14130;
})();var statearr_14131_14157 = state_14127__$1;(statearr_14131_14157[2] = null);
(statearr_14131_14157[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14128 === 3))
{var inst_14125 = (state_14127[2]);var state_14127__$1 = state_14127;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14127__$1,inst_14125);
} else
{if((state_val_14128 === 4))
{var inst_14092 = (state_14127[6]);var inst_14094 = (inst_14092 < cnt);var state_14127__$1 = state_14127;if(cljs.core.truth_(inst_14094))
{var statearr_14132_14158 = state_14127__$1;(statearr_14132_14158[1] = 6);
} else
{var statearr_14133_14159 = state_14127__$1;(statearr_14133_14159[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14128 === 5))
{var inst_14111 = (state_14127[2]);var state_14127__$1 = (function (){var statearr_14134 = state_14127;(statearr_14134[7] = inst_14111);
return statearr_14134;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14127__$1,12,dchan);
} else
{if((state_val_14128 === 6))
{var state_14127__$1 = state_14127;var statearr_14135_14160 = state_14127__$1;(statearr_14135_14160[2] = null);
(statearr_14135_14160[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14128 === 7))
{var state_14127__$1 = state_14127;var statearr_14136_14161 = state_14127__$1;(statearr_14136_14161[2] = null);
(statearr_14136_14161[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14128 === 8))
{var inst_14109 = (state_14127[2]);var state_14127__$1 = state_14127;var statearr_14137_14162 = state_14127__$1;(statearr_14137_14162[2] = inst_14109);
(statearr_14137_14162[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14128 === 9))
{var inst_14092 = (state_14127[6]);var inst_14104 = (state_14127[2]);var inst_14105 = (inst_14092 + 1);var inst_14092__$1 = inst_14105;var state_14127__$1 = (function (){var statearr_14138 = state_14127;(statearr_14138[6] = inst_14092__$1);
(statearr_14138[8] = inst_14104);
return statearr_14138;
})();var statearr_14139_14163 = state_14127__$1;(statearr_14139_14163[2] = null);
(statearr_14139_14163[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14128 === 10))
{var inst_14096 = (state_14127[2]);var inst_14097 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14127__$1 = (function (){var statearr_14140 = state_14127;(statearr_14140[9] = inst_14096);
return statearr_14140;
})();var statearr_14141_14164 = state_14127__$1;(statearr_14141_14164[2] = inst_14097);
(statearr_14141_14164[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14128 === 11))
{try{var inst_14092 = (state_14127[6]);var inst_14100 = chs__$1.call(null,inst_14092);var inst_14101 = done.call(null,inst_14092);var inst_14102 = cljs.core.async.take_BANG_.call(null,inst_14100,inst_14101);var state_14127__$1 = state_14127;var statearr_14144_14165 = state_14127__$1;(statearr_14144_14165[2] = inst_14102);
(statearr_14144_14165[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e14142){if((e14142 instanceof Object))
{var ex__8502__auto__ = e14142;var statearr_14143_14166 = state_14127;(statearr_14143_14166[1] = 10);
(statearr_14143_14166[2] = ex__8502__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14142;
} else
{return null;
}
}
}} else
{if((state_val_14128 === 12))
{var inst_14113 = (state_14127[10]);var inst_14113__$1 = (state_14127[2]);var inst_14114 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14113__$1);var state_14127__$1 = (function (){var statearr_14145 = state_14127;(statearr_14145[10] = inst_14113__$1);
return statearr_14145;
})();if(cljs.core.truth_(inst_14114))
{var statearr_14146_14167 = state_14127__$1;(statearr_14146_14167[1] = 13);
} else
{var statearr_14147_14168 = state_14127__$1;(statearr_14147_14168[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14128 === 13))
{var inst_14116 = cljs.core.async.close_BANG_.call(null,out);var state_14127__$1 = state_14127;var statearr_14148_14169 = state_14127__$1;(statearr_14148_14169[2] = inst_14116);
(statearr_14148_14169[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14128 === 14))
{var inst_14113 = (state_14127[10]);var inst_14118 = cljs.core.apply.call(null,f,inst_14113);var state_14127__$1 = state_14127;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14127__$1,16,out,inst_14118);
} else
{if((state_val_14128 === 15))
{var inst_14123 = (state_14127[2]);var state_14127__$1 = state_14127;var statearr_14149_14170 = state_14127__$1;(statearr_14149_14170[2] = inst_14123);
(statearr_14149_14170[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14128 === 16))
{var inst_14120 = (state_14127[2]);var state_14127__$1 = (function (){var statearr_14150 = state_14127;(statearr_14150[11] = inst_14120);
return statearr_14150;
})();var statearr_14151_14171 = state_14127__$1;(statearr_14151_14171[2] = null);
(statearr_14151_14171[1] = 2);
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
});return ((function (switch__8508__auto__){
return (function() {
var state_machine__8509__auto__ = null;
var state_machine__8509__auto____0 = (function (){var statearr_14153 = (new Array(12));(statearr_14153[0] = state_machine__8509__auto__);
(statearr_14153[1] = 1);
return statearr_14153;
});
var state_machine__8509__auto____1 = (function (state_14127){while(true){
var result__8510__auto__ = switch__8508__auto__.call(null,state_14127);if(cljs.core.keyword_identical_QMARK_.call(null,result__8510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8510__auto__;
}
break;
}
});
state_machine__8509__auto__ = function(state_14127){
switch(arguments.length){
case 0:
return state_machine__8509__auto____0.call(this);
case 1:
return state_machine__8509__auto____1.call(this,state_14127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8509__auto____0;
state_machine__8509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8509__auto____1;
return state_machine__8509__auto__;
})()
;})(switch__8508__auto__))
})();var state__8585__auto__ = (function (){var statearr_14154 = f__8584__auto__.call(null);(statearr_14154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8583__auto___14155);
return statearr_14154;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8585__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8583__auto___14271 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8584__auto__ = (function (){var switch__8508__auto__ = (function (state_14251){var state_val_14252 = (state_14251[1]);if((state_val_14252 === 1))
{var inst_14222 = cljs.core.vec.call(null,chs);var inst_14223 = inst_14222;var state_14251__$1 = (function (){var statearr_14253 = state_14251;(statearr_14253[5] = inst_14223);
return statearr_14253;
})();var statearr_14254_14272 = state_14251__$1;(statearr_14254_14272[2] = null);
(statearr_14254_14272[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14252 === 2))
{var inst_14223 = (state_14251[5]);var inst_14225 = cljs.core.count.call(null,inst_14223);var inst_14226 = (inst_14225 > 0);var state_14251__$1 = state_14251;if(cljs.core.truth_(inst_14226))
{var statearr_14255_14273 = state_14251__$1;(statearr_14255_14273[1] = 4);
} else
{var statearr_14256_14274 = state_14251__$1;(statearr_14256_14274[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14252 === 3))
{var inst_14249 = (state_14251[2]);var state_14251__$1 = state_14251;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14251__$1,inst_14249);
} else
{if((state_val_14252 === 4))
{var inst_14223 = (state_14251[5]);var state_14251__$1 = state_14251;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14251__$1,7,inst_14223);
} else
{if((state_val_14252 === 5))
{var inst_14245 = cljs.core.async.close_BANG_.call(null,out);var state_14251__$1 = state_14251;var statearr_14257_14275 = state_14251__$1;(statearr_14257_14275[2] = inst_14245);
(statearr_14257_14275[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14252 === 6))
{var inst_14247 = (state_14251[2]);var state_14251__$1 = state_14251;var statearr_14258_14276 = state_14251__$1;(statearr_14258_14276[2] = inst_14247);
(statearr_14258_14276[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14252 === 7))
{var inst_14231 = (state_14251[6]);var inst_14230 = (state_14251[7]);var inst_14230__$1 = (state_14251[2]);var inst_14231__$1 = cljs.core.nth.call(null,inst_14230__$1,0,null);var inst_14232 = cljs.core.nth.call(null,inst_14230__$1,1,null);var inst_14233 = (inst_14231__$1 == null);var state_14251__$1 = (function (){var statearr_14259 = state_14251;(statearr_14259[6] = inst_14231__$1);
(statearr_14259[8] = inst_14232);
(statearr_14259[7] = inst_14230__$1);
return statearr_14259;
})();if(cljs.core.truth_(inst_14233))
{var statearr_14260_14277 = state_14251__$1;(statearr_14260_14277[1] = 8);
} else
{var statearr_14261_14278 = state_14251__$1;(statearr_14261_14278[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14252 === 8))
{var inst_14223 = (state_14251[5]);var inst_14231 = (state_14251[6]);var inst_14232 = (state_14251[8]);var inst_14230 = (state_14251[7]);var inst_14235 = (function (){var c = inst_14232;var v = inst_14231;var vec__14228 = inst_14230;var cs = inst_14223;return ((function (c,v,vec__14228,cs,inst_14223,inst_14231,inst_14232,inst_14230,state_val_14252){
return (function (p1__14172_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14172_SHARP_);
});
;})(c,v,vec__14228,cs,inst_14223,inst_14231,inst_14232,inst_14230,state_val_14252))
})();var inst_14236 = cljs.core.filterv.call(null,inst_14235,inst_14223);var inst_14223__$1 = inst_14236;var state_14251__$1 = (function (){var statearr_14262 = state_14251;(statearr_14262[5] = inst_14223__$1);
return statearr_14262;
})();var statearr_14263_14279 = state_14251__$1;(statearr_14263_14279[2] = null);
(statearr_14263_14279[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14252 === 9))
{var inst_14231 = (state_14251[6]);var state_14251__$1 = state_14251;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14251__$1,11,out,inst_14231);
} else
{if((state_val_14252 === 10))
{var inst_14243 = (state_14251[2]);var state_14251__$1 = state_14251;var statearr_14265_14280 = state_14251__$1;(statearr_14265_14280[2] = inst_14243);
(statearr_14265_14280[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14252 === 11))
{var inst_14223 = (state_14251[5]);var inst_14240 = (state_14251[2]);var tmp14264 = inst_14223;var inst_14223__$1 = tmp14264;var state_14251__$1 = (function (){var statearr_14266 = state_14251;(statearr_14266[9] = inst_14240);
(statearr_14266[5] = inst_14223__$1);
return statearr_14266;
})();var statearr_14267_14281 = state_14251__$1;(statearr_14267_14281[2] = null);
(statearr_14267_14281[1] = 2);
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
});return ((function (switch__8508__auto__){
return (function() {
var state_machine__8509__auto__ = null;
var state_machine__8509__auto____0 = (function (){var statearr_14269 = (new Array(10));(statearr_14269[0] = state_machine__8509__auto__);
(statearr_14269[1] = 1);
return statearr_14269;
});
var state_machine__8509__auto____1 = (function (state_14251){while(true){
var result__8510__auto__ = switch__8508__auto__.call(null,state_14251);if(cljs.core.keyword_identical_QMARK_.call(null,result__8510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8510__auto__;
}
break;
}
});
state_machine__8509__auto__ = function(state_14251){
switch(arguments.length){
case 0:
return state_machine__8509__auto____0.call(this);
case 1:
return state_machine__8509__auto____1.call(this,state_14251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8509__auto____0;
state_machine__8509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8509__auto____1;
return state_machine__8509__auto__;
})()
;})(switch__8508__auto__))
})();var state__8585__auto__ = (function (){var statearr_14270 = f__8584__auto__.call(null);(statearr_14270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8583__auto___14271);
return statearr_14270;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8585__auto__);
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
