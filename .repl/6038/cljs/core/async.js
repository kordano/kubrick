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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11562 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11562');

/**
* @constructor
*/
cljs.core.async.t11562 = (function (f,fn_handler,meta11563){
this.f = f;
this.fn_handler = fn_handler;
this.meta11563 = meta11563;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11562.cljs$lang$type = true;
cljs.core.async.t11562.cljs$lang$ctorStr = "cljs.core.async/t11562";
cljs.core.async.t11562.cljs$lang$ctorPrWriter = (function (this__6812__auto__,writer__6813__auto__,opt__6814__auto__){return cljs.core._write.call(null,writer__6813__auto__,"cljs.core.async/t11562");
});
cljs.core.async.t11562.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11562.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return true;
});
cljs.core.async.t11562.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
return self__.f;
});
cljs.core.async.t11562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11564){var self__ = this;
return self__.meta11563;
});
cljs.core.async.t11562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11564,meta11563__$1){var self__ = this;
return (new cljs.core.async.t11562(self__.f,self__.fn_handler,meta11563__$1));
});
cljs.core.async.__GT_t11562 = (function __GT_t11562(f__$1,fn_handler__$1,meta11563){return (new cljs.core.async.t11562(f__$1,fn_handler__$1,meta11563));
});
}
return (new cljs.core.async.t11562(f,fn_handler,null));
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
{var val_11565 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11565);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_11565);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__7244__auto___11566 = n;var x_11567 = 0;while(true){
if((x_11567 < n__7244__auto___11566))
{(a[x_11567] = 0);
{
var G__11568 = (x_11567 + 1);
x_11567 = G__11568;
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
var G__11569 = (i + 1);
i = G__11569;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11573 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11573');

/**
* @constructor
*/
cljs.core.async.t11573 = (function (flag,alt_flag,meta11574){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11574 = meta11574;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11573.cljs$lang$type = true;
cljs.core.async.t11573.cljs$lang$ctorStr = "cljs.core.async/t11573";
cljs.core.async.t11573.cljs$lang$ctorPrWriter = (function (this__6812__auto__,writer__6813__auto__,opt__6814__auto__){return cljs.core._write.call(null,writer__6813__auto__,"cljs.core.async/t11573");
});
cljs.core.async.t11573.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11573.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t11573.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t11573.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11575){var self__ = this;
return self__.meta11574;
});
cljs.core.async.t11573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11575,meta11574__$1){var self__ = this;
return (new cljs.core.async.t11573(self__.flag,self__.alt_flag,meta11574__$1));
});
cljs.core.async.__GT_t11573 = (function __GT_t11573(flag__$1,alt_flag__$1,meta11574){return (new cljs.core.async.t11573(flag__$1,alt_flag__$1,meta11574));
});
}
return (new cljs.core.async.t11573(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11579 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11579');

/**
* @constructor
*/
cljs.core.async.t11579 = (function (cb,flag,alt_handler,meta11580){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11580 = meta11580;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11579.cljs$lang$type = true;
cljs.core.async.t11579.cljs$lang$ctorStr = "cljs.core.async/t11579";
cljs.core.async.t11579.cljs$lang$ctorPrWriter = (function (this__6812__auto__,writer__6813__auto__,opt__6814__auto__){return cljs.core._write.call(null,writer__6813__auto__,"cljs.core.async/t11579");
});
cljs.core.async.t11579.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11579.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11579.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11579.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11581){var self__ = this;
return self__.meta11580;
});
cljs.core.async.t11579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11581,meta11580__$1){var self__ = this;
return (new cljs.core.async.t11579(self__.cb,self__.flag,self__.alt_handler,meta11580__$1));
});
cljs.core.async.__GT_t11579 = (function __GT_t11579(cb__$1,flag__$1,alt_handler__$1,meta11580){return (new cljs.core.async.t11579(cb__$1,flag__$1,alt_handler__$1,meta11580));
});
}
return (new cljs.core.async.t11579(cb,flag,alt_handler,null));
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
return (function (p1__11582_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__11582_SHARP_,port], true));
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
var G__11583 = (i + 1);
i = G__11583;
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
var alts_BANG___delegate = function (ports,p__11584){var map__11586 = p__11584;var map__11586__$1 = ((cljs.core.seq_QMARK_.call(null,map__11586))?cljs.core.apply.call(null,cljs.core.hash_map,map__11586):map__11586);var opts = map__11586__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11584 = null;if (arguments.length > 1) {
  p__11584 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11584);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11587){
var ports = cljs.core.first(arglist__11587);
var p__11584 = cljs.core.rest(arglist__11587);
return alts_BANG___delegate(ports,p__11584);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11595 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11595');

/**
* @constructor
*/
cljs.core.async.t11595 = (function (ch,f,map_LT_,meta11596){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11596 = meta11596;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11595.cljs$lang$type = true;
cljs.core.async.t11595.cljs$lang$ctorStr = "cljs.core.async/t11595";
cljs.core.async.t11595.cljs$lang$ctorPrWriter = (function (this__6812__auto__,writer__6813__auto__,opt__6814__auto__){return cljs.core._write.call(null,writer__6813__auto__,"cljs.core.async/t11595");
});
cljs.core.async.t11595.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11595.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11595.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11595.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11598 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11598');

/**
* @constructor
*/
cljs.core.async.t11598 = (function (fn1,_,meta11596,ch,f,map_LT_,meta11599){
this.fn1 = fn1;
this._ = _;
this.meta11596 = meta11596;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11599 = meta11599;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11598.cljs$lang$type = true;
cljs.core.async.t11598.cljs$lang$ctorStr = "cljs.core.async/t11598";
cljs.core.async.t11598.cljs$lang$ctorPrWriter = (function (this__6812__auto__,writer__6813__auto__,opt__6814__auto__){return cljs.core._write.call(null,writer__6813__auto__,"cljs.core.async/t11598");
});
cljs.core.async.t11598.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11598.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$2){var self__ = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t11598.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$2){var self__ = this;
return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t11598.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$2){var self__ = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1){
return (function (p1__11588_SHARP_){return f1.call(null,(((p1__11588_SHARP_ == null))?null:self__.f.call(null,p1__11588_SHARP_)));
});
;})(f1))
});
cljs.core.async.t11598.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11600){var self__ = this;
return self__.meta11599;
});
cljs.core.async.t11598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11600,meta11599__$1){var self__ = this;
return (new cljs.core.async.t11598(self__.fn1,self__._,self__.meta11596,self__.ch,self__.f,self__.map_LT_,meta11599__$1));
});
cljs.core.async.__GT_t11598 = (function __GT_t11598(fn1__$1,___$1,meta11596__$1,ch__$2,f__$2,map_LT___$2,meta11599){return (new cljs.core.async.t11598(fn1__$1,___$1,meta11596__$1,ch__$2,f__$2,map_LT___$2,meta11599));
});
}
return (new cljs.core.async.t11598(fn1,_,self__.meta11596,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t11595.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11595.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11595.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11597){var self__ = this;
return self__.meta11596;
});
cljs.core.async.t11595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11597,meta11596__$1){var self__ = this;
return (new cljs.core.async.t11595(self__.ch,self__.f,self__.map_LT_,meta11596__$1));
});
cljs.core.async.__GT_t11595 = (function __GT_t11595(ch__$1,f__$1,map_LT___$1,meta11596){return (new cljs.core.async.t11595(ch__$1,f__$1,map_LT___$1,meta11596));
});
}
return (new cljs.core.async.t11595(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11604 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11604');

/**
* @constructor
*/
cljs.core.async.t11604 = (function (ch,f,map_GT_,meta11605){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11605 = meta11605;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11604.cljs$lang$type = true;
cljs.core.async.t11604.cljs$lang$ctorStr = "cljs.core.async/t11604";
cljs.core.async.t11604.cljs$lang$ctorPrWriter = (function (this__6812__auto__,writer__6813__auto__,opt__6814__auto__){return cljs.core._write.call(null,writer__6813__auto__,"cljs.core.async/t11604");
});
cljs.core.async.t11604.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11604.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11604.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11604.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11604.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11604.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11606){var self__ = this;
return self__.meta11605;
});
cljs.core.async.t11604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11606,meta11605__$1){var self__ = this;
return (new cljs.core.async.t11604(self__.ch,self__.f,self__.map_GT_,meta11605__$1));
});
cljs.core.async.__GT_t11604 = (function __GT_t11604(ch__$1,f__$1,map_GT___$1,meta11605){return (new cljs.core.async.t11604(ch__$1,f__$1,map_GT___$1,meta11605));
});
}
return (new cljs.core.async.t11604(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11610 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11610');

/**
* @constructor
*/
cljs.core.async.t11610 = (function (ch,p,filter_GT_,meta11611){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11611 = meta11611;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11610.cljs$lang$type = true;
cljs.core.async.t11610.cljs$lang$ctorStr = "cljs.core.async/t11610";
cljs.core.async.t11610.cljs$lang$ctorPrWriter = (function (this__6812__auto__,writer__6813__auto__,opt__6814__auto__){return cljs.core._write.call(null,writer__6813__auto__,"cljs.core.async/t11610");
});
cljs.core.async.t11610.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11610.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11610.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11610.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11610.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11610.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11610.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11612){var self__ = this;
return self__.meta11611;
});
cljs.core.async.t11610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11612,meta11611__$1){var self__ = this;
return (new cljs.core.async.t11610(self__.ch,self__.p,self__.filter_GT_,meta11611__$1));
});
cljs.core.async.__GT_t11610 = (function __GT_t11610(ch__$1,p__$1,filter_GT___$1,meta11611){return (new cljs.core.async.t11610(ch__$1,p__$1,filter_GT___$1,meta11611));
});
}
return (new cljs.core.async.t11610(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8232__auto___11687 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8233__auto__ = (function (){var switch__8140__auto__ = (function (state_11670){var state_val_11671 = (state_11670[1]);if((state_val_11671 === 1))
{var state_11670__$1 = state_11670;var statearr_11672_11688 = state_11670__$1;(statearr_11672_11688[2] = null);
(statearr_11672_11688[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11671 === 2))
{var state_11670__$1 = state_11670;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11670__$1,4,ch);
} else
{if((state_val_11671 === 3))
{var inst_11668 = (state_11670[2]);var state_11670__$1 = state_11670;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11670__$1,inst_11668);
} else
{if((state_val_11671 === 4))
{var inst_11652 = (state_11670[5]);var inst_11652__$1 = (state_11670[2]);var inst_11653 = (inst_11652__$1 == null);var state_11670__$1 = (function (){var statearr_11673 = state_11670;(statearr_11673[5] = inst_11652__$1);
return statearr_11673;
})();if(cljs.core.truth_(inst_11653))
{var statearr_11674_11689 = state_11670__$1;(statearr_11674_11689[1] = 5);
} else
{var statearr_11675_11690 = state_11670__$1;(statearr_11675_11690[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11671 === 5))
{var inst_11655 = cljs.core.async.close_BANG_.call(null,out);var state_11670__$1 = state_11670;var statearr_11676_11691 = state_11670__$1;(statearr_11676_11691[2] = inst_11655);
(statearr_11676_11691[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11671 === 6))
{var inst_11652 = (state_11670[5]);var inst_11657 = p.call(null,inst_11652);var state_11670__$1 = state_11670;if(cljs.core.truth_(inst_11657))
{var statearr_11677_11692 = state_11670__$1;(statearr_11677_11692[1] = 8);
} else
{var statearr_11678_11693 = state_11670__$1;(statearr_11678_11693[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11671 === 7))
{var inst_11666 = (state_11670[2]);var state_11670__$1 = state_11670;var statearr_11679_11694 = state_11670__$1;(statearr_11679_11694[2] = inst_11666);
(statearr_11679_11694[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11671 === 8))
{var inst_11652 = (state_11670[5]);var state_11670__$1 = state_11670;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11670__$1,11,out,inst_11652);
} else
{if((state_val_11671 === 9))
{var state_11670__$1 = state_11670;var statearr_11680_11695 = state_11670__$1;(statearr_11680_11695[2] = null);
(statearr_11680_11695[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11671 === 10))
{var inst_11663 = (state_11670[2]);var state_11670__$1 = (function (){var statearr_11681 = state_11670;(statearr_11681[6] = inst_11663);
return statearr_11681;
})();var statearr_11682_11696 = state_11670__$1;(statearr_11682_11696[2] = null);
(statearr_11682_11696[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11671 === 11))
{var inst_11660 = (state_11670[2]);var state_11670__$1 = state_11670;var statearr_11683_11697 = state_11670__$1;(statearr_11683_11697[2] = inst_11660);
(statearr_11683_11697[1] = 10);
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
});return ((function (switch__8140__auto__){
return (function() {
var state_machine__8141__auto__ = null;
var state_machine__8141__auto____0 = (function (){var statearr_11685 = (new Array(7));(statearr_11685[0] = state_machine__8141__auto__);
(statearr_11685[1] = 1);
return statearr_11685;
});
var state_machine__8141__auto____1 = (function (state_11670){while(true){
var result__8142__auto__ = switch__8140__auto__.call(null,state_11670);if(cljs.core.keyword_identical_QMARK_.call(null,result__8142__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8142__auto__;
}
break;
}
});
state_machine__8141__auto__ = function(state_11670){
switch(arguments.length){
case 0:
return state_machine__8141__auto____0.call(this);
case 1:
return state_machine__8141__auto____1.call(this,state_11670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8141__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8141__auto____0;
state_machine__8141__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8141__auto____1;
return state_machine__8141__auto__;
})()
;})(switch__8140__auto__))
})();var state__8234__auto__ = (function (){var statearr_11686 = f__8233__auto__.call(null);(statearr_11686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8232__auto___11687);
return statearr_11686;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8234__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__8232__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8233__auto__ = (function (){var switch__8140__auto__ = (function (state_11845){var state_val_11846 = (state_11845[1]);if((state_val_11846 === 1))
{var state_11845__$1 = state_11845;var statearr_11847_11880 = state_11845__$1;(statearr_11847_11880[2] = null);
(statearr_11847_11880[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11846 === 2))
{var state_11845__$1 = state_11845;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11845__$1,4,in$);
} else
{if((state_val_11846 === 3))
{var inst_11843 = (state_11845[2]);var state_11845__$1 = state_11845;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11845__$1,inst_11843);
} else
{if((state_val_11846 === 4))
{var inst_11791 = (state_11845[5]);var inst_11791__$1 = (state_11845[2]);var inst_11792 = (inst_11791__$1 == null);var state_11845__$1 = (function (){var statearr_11848 = state_11845;(statearr_11848[5] = inst_11791__$1);
return statearr_11848;
})();if(cljs.core.truth_(inst_11792))
{var statearr_11849_11881 = state_11845__$1;(statearr_11849_11881[1] = 5);
} else
{var statearr_11850_11882 = state_11845__$1;(statearr_11850_11882[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11846 === 5))
{var inst_11794 = cljs.core.async.close_BANG_.call(null,out);var state_11845__$1 = state_11845;var statearr_11851_11883 = state_11845__$1;(statearr_11851_11883[2] = inst_11794);
(statearr_11851_11883[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11846 === 6))
{var inst_11791 = (state_11845[5]);var inst_11796 = f.call(null,inst_11791);var inst_11801 = cljs.core.seq.call(null,inst_11796);var inst_11802 = inst_11801;var inst_11803 = null;var inst_11804 = 0;var inst_11805 = 0;var state_11845__$1 = (function (){var statearr_11852 = state_11845;(statearr_11852[6] = inst_11802);
(statearr_11852[7] = inst_11804);
(statearr_11852[8] = inst_11803);
(statearr_11852[9] = inst_11805);
return statearr_11852;
})();var statearr_11853_11884 = state_11845__$1;(statearr_11853_11884[2] = null);
(statearr_11853_11884[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11846 === 7))
{var inst_11841 = (state_11845[2]);var state_11845__$1 = state_11845;var statearr_11854_11885 = state_11845__$1;(statearr_11854_11885[2] = inst_11841);
(statearr_11854_11885[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11846 === 8))
{var inst_11804 = (state_11845[7]);var inst_11805 = (state_11845[9]);var inst_11807 = (inst_11805 < inst_11804);var inst_11808 = inst_11807;var state_11845__$1 = state_11845;if(cljs.core.truth_(inst_11808))
{var statearr_11855_11886 = state_11845__$1;(statearr_11855_11886[1] = 10);
} else
{var statearr_11856_11887 = state_11845__$1;(statearr_11856_11887[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11846 === 9))
{var inst_11838 = (state_11845[2]);var state_11845__$1 = (function (){var statearr_11857 = state_11845;(statearr_11857[10] = inst_11838);
return statearr_11857;
})();var statearr_11858_11888 = state_11845__$1;(statearr_11858_11888[2] = null);
(statearr_11858_11888[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11846 === 10))
{var inst_11803 = (state_11845[8]);var inst_11805 = (state_11845[9]);var inst_11810 = cljs.core._nth.call(null,inst_11803,inst_11805);var state_11845__$1 = state_11845;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11845__$1,13,out,inst_11810);
} else
{if((state_val_11846 === 11))
{var inst_11802 = (state_11845[6]);var inst_11816 = (state_11845[11]);var inst_11816__$1 = cljs.core.seq.call(null,inst_11802);var state_11845__$1 = (function (){var statearr_11862 = state_11845;(statearr_11862[11] = inst_11816__$1);
return statearr_11862;
})();if(inst_11816__$1)
{var statearr_11863_11889 = state_11845__$1;(statearr_11863_11889[1] = 14);
} else
{var statearr_11864_11890 = state_11845__$1;(statearr_11864_11890[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11846 === 12))
{var inst_11836 = (state_11845[2]);var state_11845__$1 = state_11845;var statearr_11865_11891 = state_11845__$1;(statearr_11865_11891[2] = inst_11836);
(statearr_11865_11891[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11846 === 13))
{var inst_11802 = (state_11845[6]);var inst_11804 = (state_11845[7]);var inst_11803 = (state_11845[8]);var inst_11805 = (state_11845[9]);var inst_11812 = (state_11845[2]);var inst_11813 = (inst_11805 + 1);var tmp11859 = inst_11802;var tmp11860 = inst_11804;var tmp11861 = inst_11803;var inst_11802__$1 = tmp11859;var inst_11803__$1 = tmp11861;var inst_11804__$1 = tmp11860;var inst_11805__$1 = inst_11813;var state_11845__$1 = (function (){var statearr_11866 = state_11845;(statearr_11866[6] = inst_11802__$1);
(statearr_11866[7] = inst_11804__$1);
(statearr_11866[8] = inst_11803__$1);
(statearr_11866[9] = inst_11805__$1);
(statearr_11866[12] = inst_11812);
return statearr_11866;
})();var statearr_11867_11892 = state_11845__$1;(statearr_11867_11892[2] = null);
(statearr_11867_11892[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11846 === 14))
{var inst_11816 = (state_11845[11]);var inst_11818 = cljs.core.chunked_seq_QMARK_.call(null,inst_11816);var state_11845__$1 = state_11845;if(inst_11818)
{var statearr_11868_11893 = state_11845__$1;(statearr_11868_11893[1] = 17);
} else
{var statearr_11869_11894 = state_11845__$1;(statearr_11869_11894[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11846 === 15))
{var state_11845__$1 = state_11845;var statearr_11870_11895 = state_11845__$1;(statearr_11870_11895[2] = null);
(statearr_11870_11895[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11846 === 16))
{var inst_11834 = (state_11845[2]);var state_11845__$1 = state_11845;var statearr_11871_11896 = state_11845__$1;(statearr_11871_11896[2] = inst_11834);
(statearr_11871_11896[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11846 === 17))
{var inst_11816 = (state_11845[11]);var inst_11820 = cljs.core.chunk_first.call(null,inst_11816);var inst_11821 = cljs.core.chunk_rest.call(null,inst_11816);var inst_11822 = cljs.core.count.call(null,inst_11820);var inst_11802 = inst_11821;var inst_11803 = inst_11820;var inst_11804 = inst_11822;var inst_11805 = 0;var state_11845__$1 = (function (){var statearr_11872 = state_11845;(statearr_11872[6] = inst_11802);
(statearr_11872[7] = inst_11804);
(statearr_11872[8] = inst_11803);
(statearr_11872[9] = inst_11805);
return statearr_11872;
})();var statearr_11873_11897 = state_11845__$1;(statearr_11873_11897[2] = null);
(statearr_11873_11897[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11846 === 18))
{var inst_11816 = (state_11845[11]);var inst_11825 = cljs.core.first.call(null,inst_11816);var state_11845__$1 = state_11845;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11845__$1,20,out,inst_11825);
} else
{if((state_val_11846 === 19))
{var inst_11831 = (state_11845[2]);var state_11845__$1 = state_11845;var statearr_11874_11898 = state_11845__$1;(statearr_11874_11898[2] = inst_11831);
(statearr_11874_11898[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11846 === 20))
{var inst_11816 = (state_11845[11]);var inst_11827 = (state_11845[2]);var inst_11828 = cljs.core.next.call(null,inst_11816);var inst_11802 = inst_11828;var inst_11803 = null;var inst_11804 = 0;var inst_11805 = 0;var state_11845__$1 = (function (){var statearr_11875 = state_11845;(statearr_11875[13] = inst_11827);
(statearr_11875[6] = inst_11802);
(statearr_11875[7] = inst_11804);
(statearr_11875[8] = inst_11803);
(statearr_11875[9] = inst_11805);
return statearr_11875;
})();var statearr_11876_11899 = state_11845__$1;(statearr_11876_11899[2] = null);
(statearr_11876_11899[1] = 8);
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
});return ((function (switch__8140__auto__){
return (function() {
var state_machine__8141__auto__ = null;
var state_machine__8141__auto____0 = (function (){var statearr_11878 = (new Array(14));(statearr_11878[0] = state_machine__8141__auto__);
(statearr_11878[1] = 1);
return statearr_11878;
});
var state_machine__8141__auto____1 = (function (state_11845){while(true){
var result__8142__auto__ = switch__8140__auto__.call(null,state_11845);if(cljs.core.keyword_identical_QMARK_.call(null,result__8142__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8142__auto__;
}
break;
}
});
state_machine__8141__auto__ = function(state_11845){
switch(arguments.length){
case 0:
return state_machine__8141__auto____0.call(this);
case 1:
return state_machine__8141__auto____1.call(this,state_11845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8141__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8141__auto____0;
state_machine__8141__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8141__auto____1;
return state_machine__8141__auto__;
})()
;})(switch__8140__auto__))
})();var state__8234__auto__ = (function (){var statearr_11879 = f__8233__auto__.call(null);(statearr_11879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8232__auto__);
return statearr_11879;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8234__auto__);
}));
return c__8232__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__8232__auto___11972 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8233__auto__ = (function (){var switch__8140__auto__ = (function (state_11955){var state_val_11956 = (state_11955[1]);if((state_val_11956 === 1))
{var state_11955__$1 = state_11955;var statearr_11957_11973 = state_11955__$1;(statearr_11957_11973[2] = null);
(statearr_11957_11973[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11956 === 2))
{var state_11955__$1 = state_11955;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11955__$1,4,from);
} else
{if((state_val_11956 === 3))
{var inst_11953 = (state_11955[2]);var state_11955__$1 = state_11955;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11955__$1,inst_11953);
} else
{if((state_val_11956 === 4))
{var inst_11938 = (state_11955[5]);var inst_11938__$1 = (state_11955[2]);var inst_11939 = (inst_11938__$1 == null);var state_11955__$1 = (function (){var statearr_11958 = state_11955;(statearr_11958[5] = inst_11938__$1);
return statearr_11958;
})();if(cljs.core.truth_(inst_11939))
{var statearr_11959_11974 = state_11955__$1;(statearr_11959_11974[1] = 5);
} else
{var statearr_11960_11975 = state_11955__$1;(statearr_11960_11975[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11956 === 5))
{var state_11955__$1 = state_11955;if(cljs.core.truth_(close_QMARK_))
{var statearr_11961_11976 = state_11955__$1;(statearr_11961_11976[1] = 8);
} else
{var statearr_11962_11977 = state_11955__$1;(statearr_11962_11977[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11956 === 6))
{var inst_11938 = (state_11955[5]);var state_11955__$1 = state_11955;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11955__$1,11,to,inst_11938);
} else
{if((state_val_11956 === 7))
{var inst_11951 = (state_11955[2]);var state_11955__$1 = state_11955;var statearr_11963_11978 = state_11955__$1;(statearr_11963_11978[2] = inst_11951);
(statearr_11963_11978[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11956 === 8))
{var inst_11942 = cljs.core.async.close_BANG_.call(null,to);var state_11955__$1 = state_11955;var statearr_11964_11979 = state_11955__$1;(statearr_11964_11979[2] = inst_11942);
(statearr_11964_11979[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11956 === 9))
{var state_11955__$1 = state_11955;var statearr_11965_11980 = state_11955__$1;(statearr_11965_11980[2] = null);
(statearr_11965_11980[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11956 === 10))
{var inst_11945 = (state_11955[2]);var state_11955__$1 = state_11955;var statearr_11966_11981 = state_11955__$1;(statearr_11966_11981[2] = inst_11945);
(statearr_11966_11981[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11956 === 11))
{var inst_11948 = (state_11955[2]);var state_11955__$1 = (function (){var statearr_11967 = state_11955;(statearr_11967[6] = inst_11948);
return statearr_11967;
})();var statearr_11968_11982 = state_11955__$1;(statearr_11968_11982[2] = null);
(statearr_11968_11982[1] = 2);
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
});return ((function (switch__8140__auto__){
return (function() {
var state_machine__8141__auto__ = null;
var state_machine__8141__auto____0 = (function (){var statearr_11970 = (new Array(7));(statearr_11970[0] = state_machine__8141__auto__);
(statearr_11970[1] = 1);
return statearr_11970;
});
var state_machine__8141__auto____1 = (function (state_11955){while(true){
var result__8142__auto__ = switch__8140__auto__.call(null,state_11955);if(cljs.core.keyword_identical_QMARK_.call(null,result__8142__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8142__auto__;
}
break;
}
});
state_machine__8141__auto__ = function(state_11955){
switch(arguments.length){
case 0:
return state_machine__8141__auto____0.call(this);
case 1:
return state_machine__8141__auto____1.call(this,state_11955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8141__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8141__auto____0;
state_machine__8141__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8141__auto____1;
return state_machine__8141__auto__;
})()
;})(switch__8140__auto__))
})();var state__8234__auto__ = (function (){var statearr_11971 = f__8233__auto__.call(null);(statearr_11971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8232__auto___11972);
return statearr_11971;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8234__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__8232__auto___12061 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8233__auto__ = (function (){var switch__8140__auto__ = (function (state_12043){var state_val_12044 = (state_12043[1]);if((state_val_12044 === 1))
{var state_12043__$1 = state_12043;var statearr_12045_12062 = state_12043__$1;(statearr_12045_12062[2] = null);
(statearr_12045_12062[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12044 === 2))
{var state_12043__$1 = state_12043;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12043__$1,4,ch);
} else
{if((state_val_12044 === 3))
{var inst_12041 = (state_12043[2]);var state_12043__$1 = state_12043;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12043__$1,inst_12041);
} else
{if((state_val_12044 === 4))
{var inst_12024 = (state_12043[5]);var inst_12024__$1 = (state_12043[2]);var inst_12025 = (inst_12024__$1 == null);var state_12043__$1 = (function (){var statearr_12046 = state_12043;(statearr_12046[5] = inst_12024__$1);
return statearr_12046;
})();if(cljs.core.truth_(inst_12025))
{var statearr_12047_12063 = state_12043__$1;(statearr_12047_12063[1] = 5);
} else
{var statearr_12048_12064 = state_12043__$1;(statearr_12048_12064[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12044 === 5))
{var inst_12027 = cljs.core.async.close_BANG_.call(null,tc);var inst_12028 = cljs.core.async.close_BANG_.call(null,fc);var state_12043__$1 = (function (){var statearr_12049 = state_12043;(statearr_12049[6] = inst_12027);
return statearr_12049;
})();var statearr_12050_12065 = state_12043__$1;(statearr_12050_12065[2] = inst_12028);
(statearr_12050_12065[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12044 === 6))
{var inst_12024 = (state_12043[5]);var inst_12030 = p.call(null,inst_12024);var state_12043__$1 = state_12043;if(cljs.core.truth_(inst_12030))
{var statearr_12051_12066 = state_12043__$1;(statearr_12051_12066[1] = 9);
} else
{var statearr_12052_12067 = state_12043__$1;(statearr_12052_12067[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12044 === 7))
{var inst_12039 = (state_12043[2]);var state_12043__$1 = state_12043;var statearr_12053_12068 = state_12043__$1;(statearr_12053_12068[2] = inst_12039);
(statearr_12053_12068[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12044 === 8))
{var inst_12036 = (state_12043[2]);var state_12043__$1 = (function (){var statearr_12054 = state_12043;(statearr_12054[7] = inst_12036);
return statearr_12054;
})();var statearr_12055_12069 = state_12043__$1;(statearr_12055_12069[2] = null);
(statearr_12055_12069[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12044 === 9))
{var state_12043__$1 = state_12043;var statearr_12056_12070 = state_12043__$1;(statearr_12056_12070[2] = tc);
(statearr_12056_12070[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12044 === 10))
{var state_12043__$1 = state_12043;var statearr_12057_12071 = state_12043__$1;(statearr_12057_12071[2] = fc);
(statearr_12057_12071[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12044 === 11))
{var inst_12024 = (state_12043[5]);var inst_12034 = (state_12043[2]);var state_12043__$1 = state_12043;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12043__$1,8,inst_12034,inst_12024);
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
});return ((function (switch__8140__auto__){
return (function() {
var state_machine__8141__auto__ = null;
var state_machine__8141__auto____0 = (function (){var statearr_12059 = (new Array(8));(statearr_12059[0] = state_machine__8141__auto__);
(statearr_12059[1] = 1);
return statearr_12059;
});
var state_machine__8141__auto____1 = (function (state_12043){while(true){
var result__8142__auto__ = switch__8140__auto__.call(null,state_12043);if(cljs.core.keyword_identical_QMARK_.call(null,result__8142__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8142__auto__;
}
break;
}
});
state_machine__8141__auto__ = function(state_12043){
switch(arguments.length){
case 0:
return state_machine__8141__auto____0.call(this);
case 1:
return state_machine__8141__auto____1.call(this,state_12043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8141__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8141__auto____0;
state_machine__8141__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8141__auto____1;
return state_machine__8141__auto__;
})()
;})(switch__8140__auto__))
})();var state__8234__auto__ = (function (){var statearr_12060 = f__8233__auto__.call(null);(statearr_12060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8232__auto___12061);
return statearr_12060;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8234__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__8232__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8233__auto__ = (function (){var switch__8140__auto__ = (function (state_12114){var state_val_12115 = (state_12114[1]);if((state_val_12115 === 7))
{var inst_12110 = (state_12114[2]);var state_12114__$1 = state_12114;var statearr_12116_12128 = state_12114__$1;(statearr_12116_12128[2] = inst_12110);
(statearr_12116_12128[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12115 === 6))
{var inst_12100 = (state_12114[5]);var inst_12103 = (state_12114[6]);var inst_12107 = f.call(null,inst_12100,inst_12103);var inst_12100__$1 = inst_12107;var state_12114__$1 = (function (){var statearr_12117 = state_12114;(statearr_12117[5] = inst_12100__$1);
return statearr_12117;
})();var statearr_12118_12129 = state_12114__$1;(statearr_12118_12129[2] = null);
(statearr_12118_12129[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12115 === 5))
{var inst_12100 = (state_12114[5]);var state_12114__$1 = state_12114;var statearr_12119_12130 = state_12114__$1;(statearr_12119_12130[2] = inst_12100);
(statearr_12119_12130[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12115 === 4))
{var inst_12103 = (state_12114[6]);var inst_12103__$1 = (state_12114[2]);var inst_12104 = (inst_12103__$1 == null);var state_12114__$1 = (function (){var statearr_12120 = state_12114;(statearr_12120[6] = inst_12103__$1);
return statearr_12120;
})();if(cljs.core.truth_(inst_12104))
{var statearr_12121_12131 = state_12114__$1;(statearr_12121_12131[1] = 5);
} else
{var statearr_12122_12132 = state_12114__$1;(statearr_12122_12132[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12115 === 3))
{var inst_12112 = (state_12114[2]);var state_12114__$1 = state_12114;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12114__$1,inst_12112);
} else
{if((state_val_12115 === 2))
{var state_12114__$1 = state_12114;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12114__$1,4,ch);
} else
{if((state_val_12115 === 1))
{var inst_12100 = init;var state_12114__$1 = (function (){var statearr_12123 = state_12114;(statearr_12123[5] = inst_12100);
return statearr_12123;
})();var statearr_12124_12133 = state_12114__$1;(statearr_12124_12133[2] = null);
(statearr_12124_12133[1] = 2);
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
});return ((function (switch__8140__auto__){
return (function() {
var state_machine__8141__auto__ = null;
var state_machine__8141__auto____0 = (function (){var statearr_12126 = (new Array(7));(statearr_12126[0] = state_machine__8141__auto__);
(statearr_12126[1] = 1);
return statearr_12126;
});
var state_machine__8141__auto____1 = (function (state_12114){while(true){
var result__8142__auto__ = switch__8140__auto__.call(null,state_12114);if(cljs.core.keyword_identical_QMARK_.call(null,result__8142__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8142__auto__;
}
break;
}
});
state_machine__8141__auto__ = function(state_12114){
switch(arguments.length){
case 0:
return state_machine__8141__auto____0.call(this);
case 1:
return state_machine__8141__auto____1.call(this,state_12114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8141__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8141__auto____0;
state_machine__8141__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8141__auto____1;
return state_machine__8141__auto__;
})()
;})(switch__8140__auto__))
})();var state__8234__auto__ = (function (){var statearr_12127 = f__8233__auto__.call(null);(statearr_12127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8232__auto__);
return statearr_12127;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8234__auto__);
}));
return c__8232__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__8232__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8233__auto__ = (function (){var switch__8140__auto__ = (function (state_12191){var state_val_12192 = (state_12191[1]);if((state_val_12192 === 1))
{var inst_12171 = cljs.core.seq.call(null,coll);var inst_12172 = inst_12171;var state_12191__$1 = (function (){var statearr_12193 = state_12191;(statearr_12193[5] = inst_12172);
return statearr_12193;
})();var statearr_12194_12208 = state_12191__$1;(statearr_12194_12208[2] = null);
(statearr_12194_12208[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12192 === 2))
{var inst_12172 = (state_12191[5]);var state_12191__$1 = state_12191;if(cljs.core.truth_(inst_12172))
{var statearr_12195_12209 = state_12191__$1;(statearr_12195_12209[1] = 4);
} else
{var statearr_12196_12210 = state_12191__$1;(statearr_12196_12210[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12192 === 3))
{var inst_12189 = (state_12191[2]);var state_12191__$1 = state_12191;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12191__$1,inst_12189);
} else
{if((state_val_12192 === 4))
{var inst_12172 = (state_12191[5]);var inst_12175 = cljs.core.first.call(null,inst_12172);var state_12191__$1 = state_12191;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12191__$1,7,ch,inst_12175);
} else
{if((state_val_12192 === 5))
{var state_12191__$1 = state_12191;if(cljs.core.truth_(close_QMARK_))
{var statearr_12197_12211 = state_12191__$1;(statearr_12197_12211[1] = 8);
} else
{var statearr_12198_12212 = state_12191__$1;(statearr_12198_12212[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12192 === 6))
{var inst_12187 = (state_12191[2]);var state_12191__$1 = state_12191;var statearr_12199_12213 = state_12191__$1;(statearr_12199_12213[2] = inst_12187);
(statearr_12199_12213[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12192 === 7))
{var inst_12172 = (state_12191[5]);var inst_12177 = (state_12191[2]);var inst_12178 = cljs.core.next.call(null,inst_12172);var inst_12172__$1 = inst_12178;var state_12191__$1 = (function (){var statearr_12200 = state_12191;(statearr_12200[6] = inst_12177);
(statearr_12200[5] = inst_12172__$1);
return statearr_12200;
})();var statearr_12201_12214 = state_12191__$1;(statearr_12201_12214[2] = null);
(statearr_12201_12214[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12192 === 8))
{var inst_12182 = cljs.core.async.close_BANG_.call(null,ch);var state_12191__$1 = state_12191;var statearr_12202_12215 = state_12191__$1;(statearr_12202_12215[2] = inst_12182);
(statearr_12202_12215[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12192 === 9))
{var state_12191__$1 = state_12191;var statearr_12203_12216 = state_12191__$1;(statearr_12203_12216[2] = null);
(statearr_12203_12216[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12192 === 10))
{var inst_12185 = (state_12191[2]);var state_12191__$1 = state_12191;var statearr_12204_12217 = state_12191__$1;(statearr_12204_12217[2] = inst_12185);
(statearr_12204_12217[1] = 6);
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
});return ((function (switch__8140__auto__){
return (function() {
var state_machine__8141__auto__ = null;
var state_machine__8141__auto____0 = (function (){var statearr_12206 = (new Array(7));(statearr_12206[0] = state_machine__8141__auto__);
(statearr_12206[1] = 1);
return statearr_12206;
});
var state_machine__8141__auto____1 = (function (state_12191){while(true){
var result__8142__auto__ = switch__8140__auto__.call(null,state_12191);if(cljs.core.keyword_identical_QMARK_.call(null,result__8142__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8142__auto__;
}
break;
}
});
state_machine__8141__auto__ = function(state_12191){
switch(arguments.length){
case 0:
return state_machine__8141__auto____0.call(this);
case 1:
return state_machine__8141__auto____1.call(this,state_12191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8141__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8141__auto____0;
state_machine__8141__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8141__auto____1;
return state_machine__8141__auto__;
})()
;})(switch__8140__auto__))
})();var state__8234__auto__ = (function (){var statearr_12207 = f__8233__auto__.call(null);(statearr_12207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8232__auto__);
return statearr_12207;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8234__auto__);
}));
return c__8232__auto__;
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
{var x__6940__auto__ = (((_ == null))?null:_);return (function (){var or__3943__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6940__auto__)]);if(or__3943__auto__)
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
{var x__6940__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6940__auto__)]);if(or__3943__auto__)
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
{var x__6940__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6940__auto__)]);if(or__3943__auto__)
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
{var x__6940__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6940__auto__)]);if(or__3943__auto__)
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12430 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12430');

/**
* @constructor
*/
cljs.core.async.t12430 = (function (cs,ch,mult,meta12431){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12431 = meta12431;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12430.cljs$lang$type = true;
cljs.core.async.t12430.cljs$lang$ctorStr = "cljs.core.async/t12430";
cljs.core.async.t12430.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6812__auto__,writer__6813__auto__,opt__6814__auto__){return cljs.core._write.call(null,writer__6813__auto__,"cljs.core.async/t12430");
});})(cs))
;
cljs.core.async.t12430.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12430.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12430.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12430.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12430.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12430.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
return self__.ch;
});})(cs))
;
cljs.core.async.t12430.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12432){var self__ = this;
return self__.meta12431;
});})(cs))
;
cljs.core.async.t12430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12432,meta12431__$1){var self__ = this;
return (new cljs.core.async.t12430(self__.cs,self__.ch,self__.mult,meta12431__$1));
});})(cs))
;
cljs.core.async.__GT_t12430 = ((function (cs){
return (function __GT_t12430(cs__$1,ch__$1,mult__$1,meta12431){return (new cljs.core.async.t12430(cs__$1,ch__$1,mult__$1,meta12431));
});})(cs))
;
}
return (new cljs.core.async.t12430(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__8232__auto___12642 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8233__auto__ = (function (){var switch__8140__auto__ = (function (state_12560){var state_val_12561 = (state_12560[1]);if((state_val_12561 === 32))
{try{var inst_12511 = (state_12560[5]);var inst_12435 = (state_12560[6]);var inst_12517 = cljs.core.async.put_BANG_.call(null,inst_12511,inst_12435,done);var state_12560__$1 = state_12560;var statearr_12564_12643 = state_12560__$1;(statearr_12564_12643[2] = inst_12517);
(statearr_12564_12643[1] = 30);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e12562){if((e12562 instanceof Object))
{var ex__8134__auto__ = e12562;var statearr_12563_12644 = state_12560;(statearr_12563_12644[1] = 31);
(statearr_12563_12644[2] = ex__8134__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12562;
} else
{return null;
}
}
}} else
{if((state_val_12561 === 1))
{var state_12560__$1 = state_12560;var statearr_12565_12645 = state_12560__$1;(statearr_12565_12645[2] = null);
(statearr_12565_12645[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12561 === 33))
{var inst_12523 = (state_12560[7]);var inst_12525 = cljs.core.chunked_seq_QMARK_.call(null,inst_12523);var state_12560__$1 = state_12560;if(inst_12525)
{var statearr_12566_12646 = state_12560__$1;(statearr_12566_12646[1] = 36);
} else
{var statearr_12567_12647 = state_12560__$1;(statearr_12567_12647[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12561 === 2))
{var state_12560__$1 = state_12560;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12560__$1,4,ch);
} else
{if((state_val_12561 === 34))
{var state_12560__$1 = state_12560;var statearr_12568_12648 = state_12560__$1;(statearr_12568_12648[2] = null);
(statearr_12568_12648[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12561 === 3))
{var inst_12558 = (state_12560[2]);var state_12560__$1 = state_12560;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12560__$1,inst_12558);
} else
{if((state_val_12561 === 35))
{var inst_12547 = (state_12560[2]);var state_12560__$1 = state_12560;var statearr_12569_12649 = state_12560__$1;(statearr_12569_12649[2] = inst_12547);
(statearr_12569_12649[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12561 === 4))
{var inst_12435 = (state_12560[6]);var inst_12435__$1 = (state_12560[2]);var inst_12436 = (inst_12435__$1 == null);var state_12560__$1 = (function (){var statearr_12570 = state_12560;(statearr_12570[6] = inst_12435__$1);
return statearr_12570;
})();if(cljs.core.truth_(inst_12436))
{var statearr_12571_12650 = state_12560__$1;(statearr_12571_12650[1] = 5);
} else
{var statearr_12572_12651 = state_12560__$1;(statearr_12572_12651[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12561 === 36))
{var inst_12523 = (state_12560[7]);var inst_12527 = cljs.core.chunk_first.call(null,inst_12523);var inst_12528 = cljs.core.chunk_rest.call(null,inst_12523);var inst_12529 = cljs.core.count.call(null,inst_12527);var inst_12503 = inst_12528;var inst_12504 = inst_12527;var inst_12505 = inst_12529;var inst_12506 = 0;var state_12560__$1 = (function (){var statearr_12573 = state_12560;(statearr_12573[8] = inst_12503);
(statearr_12573[9] = inst_12504);
(statearr_12573[10] = inst_12506);
(statearr_12573[11] = inst_12505);
return statearr_12573;
})();var statearr_12574_12652 = state_12560__$1;(statearr_12574_12652[2] = null);
(statearr_12574_12652[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12561 === 5))
{var inst_12442 = cljs.core.deref.call(null,cs);var inst_12443 = cljs.core.seq.call(null,inst_12442);var inst_12444 = inst_12443;var inst_12445 = null;var inst_12446 = 0;var inst_12447 = 0;var state_12560__$1 = (function (){var statearr_12575 = state_12560;(statearr_12575[12] = inst_12446);
(statearr_12575[13] = inst_12447);
(statearr_12575[14] = inst_12445);
(statearr_12575[15] = inst_12444);
return statearr_12575;
})();var statearr_12576_12653 = state_12560__$1;(statearr_12576_12653[2] = null);
(statearr_12576_12653[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12561 === 37))
{var inst_12523 = (state_12560[7]);var inst_12532 = cljs.core.first.call(null,inst_12523);var state_12560__$1 = (function (){var statearr_12577 = state_12560;(statearr_12577[16] = inst_12532);
return statearr_12577;
})();var statearr_12578_12654 = state_12560__$1;(statearr_12578_12654[2] = null);
(statearr_12578_12654[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12561 === 6))
{var inst_12494 = cljs.core.deref.call(null,cs);var inst_12495 = cljs.core.keys.call(null,inst_12494);var inst_12496 = cljs.core.count.call(null,inst_12495);var inst_12497 = cljs.core.reset_BANG_.call(null,dctr,inst_12496);var inst_12502 = cljs.core.seq.call(null,inst_12495);var inst_12503 = inst_12502;var inst_12504 = null;var inst_12505 = 0;var inst_12506 = 0;var state_12560__$1 = (function (){var statearr_12579 = state_12560;(statearr_12579[8] = inst_12503);
(statearr_12579[9] = inst_12504);
(statearr_12579[17] = inst_12497);
(statearr_12579[10] = inst_12506);
(statearr_12579[11] = inst_12505);
return statearr_12579;
})();var statearr_12580_12655 = state_12560__$1;(statearr_12580_12655[2] = null);
(statearr_12580_12655[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12561 === 38))
{var inst_12544 = (state_12560[2]);var state_12560__$1 = state_12560;var statearr_12581_12656 = state_12560__$1;(statearr_12581_12656[2] = inst_12544);
(statearr_12581_12656[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12561 === 7))
{var inst_12556 = (state_12560[2]);var state_12560__$1 = state_12560;var statearr_12582_12657 = state_12560__$1;(statearr_12582_12657[2] = inst_12556);
(statearr_12582_12657[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12561 === 39))
{var inst_12523 = (state_12560[7]);var inst_12540 = (state_12560[2]);var inst_12541 = cljs.core.next.call(null,inst_12523);var inst_12503 = inst_12541;var inst_12504 = null;var inst_12505 = 0;var inst_12506 = 0;var state_12560__$1 = (function (){var statearr_12583 = state_12560;(statearr_12583[18] = inst_12540);
(statearr_12583[8] = inst_12503);
(statearr_12583[9] = inst_12504);
(statearr_12583[10] = inst_12506);
(statearr_12583[11] = inst_12505);
return statearr_12583;
})();var statearr_12584_12658 = state_12560__$1;(statearr_12584_12658[2] = null);
(statearr_12584_12658[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12561 === 8))
{var inst_12446 = (state_12560[12]);var inst_12447 = (state_12560[13]);var inst_12449 = (inst_12447 < inst_12446);var inst_12450 = inst_12449;var state_12560__$1 = state_12560;if(cljs.core.truth_(inst_12450))
{var statearr_12585_12659 = state_12560__$1;(statearr_12585_12659[1] = 10);
} else
{var statearr_12586_12660 = state_12560__$1;(statearr_12586_12660[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12561 === 40))
{var inst_12532 = (state_12560[16]);var inst_12533 = (state_12560[2]);var inst_12534 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12535 = cljs.core.async.untap_STAR_.call(null,m,inst_12532);var state_12560__$1 = (function (){var statearr_12587 = state_12560;(statearr_12587[19] = inst_12534);
(statearr_12587[20] = inst_12533);
return statearr_12587;
})();var statearr_12588_12661 = state_12560__$1;(statearr_12588_12661[2] = inst_12535);
(statearr_12588_12661[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12561 === 9))
{var inst_12492 = (state_12560[2]);var state_12560__$1 = state_12560;var statearr_12589_12662 = state_12560__$1;(statearr_12589_12662[2] = inst_12492);
(statearr_12589_12662[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12561 === 41))
{try{var inst_12532 = (state_12560[16]);var inst_12435 = (state_12560[6]);var inst_12538 = cljs.core.async.put_BANG_.call(null,inst_12532,inst_12435,done);var state_12560__$1 = state_12560;var statearr_12592_12663 = state_12560__$1;(statearr_12592_12663[2] = inst_12538);
(statearr_12592_12663[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e12590){if((e12590 instanceof Object))
{var ex__8134__auto__ = e12590;var statearr_12591_12664 = state_12560;(statearr_12591_12664[1] = 40);
(statearr_12591_12664[2] = ex__8134__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12590;
} else
{return null;
}
}
}} else
{if((state_val_12561 === 10))
{var inst_12447 = (state_12560[13]);var inst_12445 = (state_12560[14]);var inst_12453 = cljs.core._nth.call(null,inst_12445,inst_12447);var inst_12454 = cljs.core.nth.call(null,inst_12453,0,null);var inst_12455 = cljs.core.nth.call(null,inst_12453,1,null);var state_12560__$1 = (function (){var statearr_12593 = state_12560;(statearr_12593[21] = inst_12454);
return statearr_12593;
})();if(cljs.core.truth_(inst_12455))
{var statearr_12594_12665 = state_12560__$1;(statearr_12594_12665[1] = 13);
} else
{var statearr_12595_12666 = state_12560__$1;(statearr_12595_12666[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12561 === 42))
{var inst_12553 = (state_12560[2]);var state_12560__$1 = (function (){var statearr_12596 = state_12560;(statearr_12596[22] = inst_12553);
return statearr_12596;
})();var statearr_12597_12667 = state_12560__$1;(statearr_12597_12667[2] = null);
(statearr_12597_12667[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12561 === 11))
{var inst_12464 = (state_12560[23]);var inst_12444 = (state_12560[15]);var inst_12464__$1 = cljs.core.seq.call(null,inst_12444);var state_12560__$1 = (function (){var statearr_12598 = state_12560;(statearr_12598[23] = inst_12464__$1);
return statearr_12598;
})();if(inst_12464__$1)
{var statearr_12599_12668 = state_12560__$1;(statearr_12599_12668[1] = 16);
} else
{var statearr_12600_12669 = state_12560__$1;(statearr_12600_12669[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12561 === 12))
{var inst_12490 = (state_12560[2]);var state_12560__$1 = state_12560;var statearr_12601_12670 = state_12560__$1;(statearr_12601_12670[2] = inst_12490);
(statearr_12601_12670[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12561 === 13))
{var inst_12454 = (state_12560[21]);var inst_12457 = cljs.core.async.close_BANG_.call(null,inst_12454);var state_12560__$1 = state_12560;var statearr_12605_12671 = state_12560__$1;(statearr_12605_12671[2] = inst_12457);
(statearr_12605_12671[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12561 === 14))
{var state_12560__$1 = state_12560;var statearr_12606_12672 = state_12560__$1;(statearr_12606_12672[2] = null);
(statearr_12606_12672[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12561 === 15))
{var inst_12446 = (state_12560[12]);var inst_12447 = (state_12560[13]);var inst_12445 = (state_12560[14]);var inst_12444 = (state_12560[15]);var inst_12460 = (state_12560[2]);var inst_12461 = (inst_12447 + 1);var tmp12602 = inst_12446;var tmp12603 = inst_12445;var tmp12604 = inst_12444;var inst_12444__$1 = tmp12604;var inst_12445__$1 = tmp12603;var inst_12446__$1 = tmp12602;var inst_12447__$1 = inst_12461;var state_12560__$1 = (function (){var statearr_12607 = state_12560;(statearr_12607[24] = inst_12460);
(statearr_12607[12] = inst_12446__$1);
(statearr_12607[13] = inst_12447__$1);
(statearr_12607[14] = inst_12445__$1);
(statearr_12607[15] = inst_12444__$1);
return statearr_12607;
})();var statearr_12608_12673 = state_12560__$1;(statearr_12608_12673[2] = null);
(statearr_12608_12673[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12561 === 16))
{var inst_12464 = (state_12560[23]);var inst_12466 = cljs.core.chunked_seq_QMARK_.call(null,inst_12464);var state_12560__$1 = state_12560;if(inst_12466)
{var statearr_12609_12674 = state_12560__$1;(statearr_12609_12674[1] = 19);
} else
{var statearr_12610_12675 = state_12560__$1;(statearr_12610_12675[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12561 === 17))
{var state_12560__$1 = state_12560;var statearr_12611_12676 = state_12560__$1;(statearr_12611_12676[2] = null);
(statearr_12611_12676[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12561 === 18))
{var inst_12488 = (state_12560[2]);var state_12560__$1 = state_12560;var statearr_12612_12677 = state_12560__$1;(statearr_12612_12677[2] = inst_12488);
(statearr_12612_12677[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12561 === 19))
{var inst_12464 = (state_12560[23]);var inst_12468 = cljs.core.chunk_first.call(null,inst_12464);var inst_12469 = cljs.core.chunk_rest.call(null,inst_12464);var inst_12470 = cljs.core.count.call(null,inst_12468);var inst_12444 = inst_12469;var inst_12445 = inst_12468;var inst_12446 = inst_12470;var inst_12447 = 0;var state_12560__$1 = (function (){var statearr_12613 = state_12560;(statearr_12613[12] = inst_12446);
(statearr_12613[13] = inst_12447);
(statearr_12613[14] = inst_12445);
(statearr_12613[15] = inst_12444);
return statearr_12613;
})();var statearr_12614_12678 = state_12560__$1;(statearr_12614_12678[2] = null);
(statearr_12614_12678[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12561 === 20))
{var inst_12464 = (state_12560[23]);var inst_12474 = cljs.core.first.call(null,inst_12464);var inst_12475 = cljs.core.nth.call(null,inst_12474,0,null);var inst_12476 = cljs.core.nth.call(null,inst_12474,1,null);var state_12560__$1 = (function (){var statearr_12615 = state_12560;(statearr_12615[25] = inst_12475);
return statearr_12615;
})();if(cljs.core.truth_(inst_12476))
{var statearr_12616_12679 = state_12560__$1;(statearr_12616_12679[1] = 22);
} else
{var statearr_12617_12680 = state_12560__$1;(statearr_12617_12680[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12561 === 21))
{var inst_12485 = (state_12560[2]);var state_12560__$1 = state_12560;var statearr_12618_12681 = state_12560__$1;(statearr_12618_12681[2] = inst_12485);
(statearr_12618_12681[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12561 === 22))
{var inst_12475 = (state_12560[25]);var inst_12478 = cljs.core.async.close_BANG_.call(null,inst_12475);var state_12560__$1 = state_12560;var statearr_12619_12682 = state_12560__$1;(statearr_12619_12682[2] = inst_12478);
(statearr_12619_12682[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12561 === 23))
{var state_12560__$1 = state_12560;var statearr_12620_12683 = state_12560__$1;(statearr_12620_12683[2] = null);
(statearr_12620_12683[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12561 === 24))
{var inst_12464 = (state_12560[23]);var inst_12481 = (state_12560[2]);var inst_12482 = cljs.core.next.call(null,inst_12464);var inst_12444 = inst_12482;var inst_12445 = null;var inst_12446 = 0;var inst_12447 = 0;var state_12560__$1 = (function (){var statearr_12621 = state_12560;(statearr_12621[12] = inst_12446);
(statearr_12621[13] = inst_12447);
(statearr_12621[26] = inst_12481);
(statearr_12621[14] = inst_12445);
(statearr_12621[15] = inst_12444);
return statearr_12621;
})();var statearr_12622_12684 = state_12560__$1;(statearr_12622_12684[2] = null);
(statearr_12622_12684[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12561 === 25))
{var inst_12506 = (state_12560[10]);var inst_12505 = (state_12560[11]);var inst_12508 = (inst_12506 < inst_12505);var inst_12509 = inst_12508;var state_12560__$1 = state_12560;if(cljs.core.truth_(inst_12509))
{var statearr_12623_12685 = state_12560__$1;(statearr_12623_12685[1] = 27);
} else
{var statearr_12624_12686 = state_12560__$1;(statearr_12624_12686[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12561 === 26))
{var inst_12551 = (state_12560[2]);var state_12560__$1 = (function (){var statearr_12625 = state_12560;(statearr_12625[27] = inst_12551);
return statearr_12625;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12560__$1,42,dchan);
} else
{if((state_val_12561 === 27))
{var inst_12504 = (state_12560[9]);var inst_12506 = (state_12560[10]);var inst_12511 = cljs.core._nth.call(null,inst_12504,inst_12506);var state_12560__$1 = (function (){var statearr_12626 = state_12560;(statearr_12626[5] = inst_12511);
return statearr_12626;
})();var statearr_12627_12687 = state_12560__$1;(statearr_12627_12687[2] = null);
(statearr_12627_12687[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12561 === 28))
{var inst_12503 = (state_12560[8]);var inst_12523 = (state_12560[7]);var inst_12523__$1 = cljs.core.seq.call(null,inst_12503);var state_12560__$1 = (function (){var statearr_12631 = state_12560;(statearr_12631[7] = inst_12523__$1);
return statearr_12631;
})();if(inst_12523__$1)
{var statearr_12632_12688 = state_12560__$1;(statearr_12632_12688[1] = 33);
} else
{var statearr_12633_12689 = state_12560__$1;(statearr_12633_12689[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12561 === 29))
{var inst_12549 = (state_12560[2]);var state_12560__$1 = state_12560;var statearr_12634_12690 = state_12560__$1;(statearr_12634_12690[2] = inst_12549);
(statearr_12634_12690[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12561 === 30))
{var inst_12503 = (state_12560[8]);var inst_12504 = (state_12560[9]);var inst_12506 = (state_12560[10]);var inst_12505 = (state_12560[11]);var inst_12519 = (state_12560[2]);var inst_12520 = (inst_12506 + 1);var tmp12628 = inst_12503;var tmp12629 = inst_12504;var tmp12630 = inst_12505;var inst_12503__$1 = tmp12628;var inst_12504__$1 = tmp12629;var inst_12505__$1 = tmp12630;var inst_12506__$1 = inst_12520;var state_12560__$1 = (function (){var statearr_12635 = state_12560;(statearr_12635[28] = inst_12519);
(statearr_12635[8] = inst_12503__$1);
(statearr_12635[9] = inst_12504__$1);
(statearr_12635[10] = inst_12506__$1);
(statearr_12635[11] = inst_12505__$1);
return statearr_12635;
})();var statearr_12636_12691 = state_12560__$1;(statearr_12636_12691[2] = null);
(statearr_12636_12691[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12561 === 31))
{var inst_12511 = (state_12560[5]);var inst_12512 = (state_12560[2]);var inst_12513 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12514 = cljs.core.async.untap_STAR_.call(null,m,inst_12511);var state_12560__$1 = (function (){var statearr_12637 = state_12560;(statearr_12637[29] = inst_12512);
(statearr_12637[30] = inst_12513);
return statearr_12637;
})();var statearr_12638_12692 = state_12560__$1;(statearr_12638_12692[2] = inst_12514);
(statearr_12638_12692[1] = 30);
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
});return ((function (switch__8140__auto__){
return (function() {
var state_machine__8141__auto__ = null;
var state_machine__8141__auto____0 = (function (){var statearr_12640 = (new Array(31));(statearr_12640[0] = state_machine__8141__auto__);
(statearr_12640[1] = 1);
return statearr_12640;
});
var state_machine__8141__auto____1 = (function (state_12560){while(true){
var result__8142__auto__ = switch__8140__auto__.call(null,state_12560);if(cljs.core.keyword_identical_QMARK_.call(null,result__8142__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8142__auto__;
}
break;
}
});
state_machine__8141__auto__ = function(state_12560){
switch(arguments.length){
case 0:
return state_machine__8141__auto____0.call(this);
case 1:
return state_machine__8141__auto____1.call(this,state_12560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8141__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8141__auto____0;
state_machine__8141__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8141__auto____1;
return state_machine__8141__auto__;
})()
;})(switch__8140__auto__))
})();var state__8234__auto__ = (function (){var statearr_12641 = f__8233__auto__.call(null);(statearr_12641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8232__auto___12642);
return statearr_12641;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8234__auto__);
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
{var x__6940__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6940__auto__)]);if(or__3943__auto__)
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
{var x__6940__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6940__auto__)]);if(or__3943__auto__)
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
{var x__6940__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6940__auto__)]);if(or__3943__auto__)
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
{var x__6940__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6940__auto__)]);if(or__3943__auto__)
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
{var x__6940__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6940__auto__)]);if(or__3943__auto__)
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
;var m = (function (){if(typeof cljs.core.async.t12813 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12813');

/**
* @constructor
*/
cljs.core.async.t12813 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta12814){
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
this.meta12814 = meta12814;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12813.cljs$lang$type = true;
cljs.core.async.t12813.cljs$lang$ctorStr = "cljs.core.async/t12813";
cljs.core.async.t12813.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6812__auto__,writer__6813__auto__,opt__6814__auto__){return cljs.core._write.call(null,writer__6813__auto__,"cljs.core.async/t12813");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12813.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12813.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12813.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12813.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12813.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12813.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12813.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12813.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12813.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12815){var self__ = this;
return self__.meta12814;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12815,meta12814__$1){var self__ = this;
return (new cljs.core.async.t12813(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta12814__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12813 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12813(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12814){return (new cljs.core.async.t12813(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12814));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12813(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__8232__auto___12933 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8233__auto__ = (function (){var switch__8140__auto__ = (function (state_12886){var state_val_12887 = (state_12886[1]);if((state_val_12887 === 1))
{var inst_12819 = (state_12886[5]);var inst_12819__$1 = calc_state.call(null);var inst_12820 = cljs.core.seq_QMARK_.call(null,inst_12819__$1);var state_12886__$1 = (function (){var statearr_12888 = state_12886;(statearr_12888[5] = inst_12819__$1);
return statearr_12888;
})();if(inst_12820)
{var statearr_12889_12934 = state_12886__$1;(statearr_12889_12934[1] = 2);
} else
{var statearr_12890_12935 = state_12886__$1;(statearr_12890_12935[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12887 === 2))
{var inst_12819 = (state_12886[5]);var inst_12822 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12819);var state_12886__$1 = state_12886;var statearr_12891_12936 = state_12886__$1;(statearr_12891_12936[2] = inst_12822);
(statearr_12891_12936[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12887 === 3))
{var inst_12819 = (state_12886[5]);var state_12886__$1 = state_12886;var statearr_12892_12937 = state_12886__$1;(statearr_12892_12937[2] = inst_12819);
(statearr_12892_12937[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12887 === 4))
{var inst_12819 = (state_12886[5]);var inst_12825 = (state_12886[2]);var inst_12826 = cljs.core.get.call(null,inst_12825,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12827 = cljs.core.get.call(null,inst_12825,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12828 = cljs.core.get.call(null,inst_12825,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12829 = inst_12819;var state_12886__$1 = (function (){var statearr_12893 = state_12886;(statearr_12893[6] = inst_12827);
(statearr_12893[7] = inst_12826);
(statearr_12893[8] = inst_12828);
(statearr_12893[9] = inst_12829);
return statearr_12893;
})();var statearr_12894_12938 = state_12886__$1;(statearr_12894_12938[2] = null);
(statearr_12894_12938[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12887 === 5))
{var inst_12829 = (state_12886[9]);var inst_12832 = cljs.core.seq_QMARK_.call(null,inst_12829);var state_12886__$1 = state_12886;if(inst_12832)
{var statearr_12895_12939 = state_12886__$1;(statearr_12895_12939[1] = 7);
} else
{var statearr_12896_12940 = state_12886__$1;(statearr_12896_12940[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12887 === 6))
{var inst_12884 = (state_12886[2]);var state_12886__$1 = state_12886;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12886__$1,inst_12884);
} else
{if((state_val_12887 === 7))
{var inst_12829 = (state_12886[9]);var inst_12834 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12829);var state_12886__$1 = state_12886;var statearr_12897_12941 = state_12886__$1;(statearr_12897_12941[2] = inst_12834);
(statearr_12897_12941[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12887 === 8))
{var inst_12829 = (state_12886[9]);var state_12886__$1 = state_12886;var statearr_12898_12942 = state_12886__$1;(statearr_12898_12942[2] = inst_12829);
(statearr_12898_12942[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12887 === 9))
{var inst_12837 = (state_12886[10]);var inst_12837__$1 = (state_12886[2]);var inst_12838 = cljs.core.get.call(null,inst_12837__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12839 = cljs.core.get.call(null,inst_12837__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12840 = cljs.core.get.call(null,inst_12837__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12886__$1 = (function (){var statearr_12899 = state_12886;(statearr_12899[10] = inst_12837__$1);
(statearr_12899[11] = inst_12839);
(statearr_12899[12] = inst_12840);
return statearr_12899;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12886__$1,10,inst_12838);
} else
{if((state_val_12887 === 10))
{var inst_12846 = (state_12886[13]);var inst_12844 = (state_12886[14]);var inst_12843 = (state_12886[2]);var inst_12844__$1 = cljs.core.nth.call(null,inst_12843,0,null);var inst_12845 = cljs.core.nth.call(null,inst_12843,1,null);var inst_12846__$1 = (inst_12844__$1 == null);var state_12886__$1 = (function (){var statearr_12900 = state_12886;(statearr_12900[13] = inst_12846__$1);
(statearr_12900[14] = inst_12844__$1);
(statearr_12900[15] = inst_12845);
return statearr_12900;
})();if(cljs.core.truth_(inst_12846__$1))
{var statearr_12901_12943 = state_12886__$1;(statearr_12901_12943[1] = 11);
} else
{var statearr_12902_12944 = state_12886__$1;(statearr_12902_12944[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12887 === 11))
{var inst_12846 = (state_12886[13]);var state_12886__$1 = state_12886;var statearr_12903_12945 = state_12886__$1;(statearr_12903_12945[2] = inst_12846);
(statearr_12903_12945[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12887 === 12))
{var inst_12845 = (state_12886[15]);var inst_12849 = cljs.core._EQ_.call(null,inst_12845,change);var state_12886__$1 = state_12886;var statearr_12904_12946 = state_12886__$1;(statearr_12904_12946[2] = inst_12849);
(statearr_12904_12946[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12887 === 13))
{var inst_12851 = (state_12886[2]);var state_12886__$1 = state_12886;if(cljs.core.truth_(inst_12851))
{var statearr_12905_12947 = state_12886__$1;(statearr_12905_12947[1] = 14);
} else
{var statearr_12906_12948 = state_12886__$1;(statearr_12906_12948[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12887 === 14))
{var inst_12844 = (state_12886[14]);var inst_12853 = (inst_12844 == null);var state_12886__$1 = state_12886;if(cljs.core.truth_(inst_12853))
{var statearr_12907_12949 = state_12886__$1;(statearr_12907_12949[1] = 17);
} else
{var statearr_12908_12950 = state_12886__$1;(statearr_12908_12950[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12887 === 15))
{var inst_12862 = (state_12886[16]);var inst_12845 = (state_12886[15]);var inst_12840 = (state_12886[12]);var inst_12862__$1 = inst_12840.call(null,inst_12845);var state_12886__$1 = (function (){var statearr_12909 = state_12886;(statearr_12909[16] = inst_12862__$1);
return statearr_12909;
})();if(cljs.core.truth_(inst_12862__$1))
{var statearr_12910_12951 = state_12886__$1;(statearr_12910_12951[1] = 20);
} else
{var statearr_12911_12952 = state_12886__$1;(statearr_12911_12952[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12887 === 16))
{var inst_12882 = (state_12886[2]);var state_12886__$1 = state_12886;var statearr_12912_12953 = state_12886__$1;(statearr_12912_12953[2] = inst_12882);
(statearr_12912_12953[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12887 === 17))
{var inst_12845 = (state_12886[15]);var inst_12855 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12845);var state_12886__$1 = state_12886;var statearr_12913_12954 = state_12886__$1;(statearr_12913_12954[2] = inst_12855);
(statearr_12913_12954[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12887 === 18))
{var state_12886__$1 = state_12886;var statearr_12914_12955 = state_12886__$1;(statearr_12914_12955[2] = null);
(statearr_12914_12955[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12887 === 19))
{var inst_12858 = (state_12886[2]);var inst_12859 = calc_state.call(null);var inst_12829 = inst_12859;var state_12886__$1 = (function (){var statearr_12915 = state_12886;(statearr_12915[17] = inst_12858);
(statearr_12915[9] = inst_12829);
return statearr_12915;
})();var statearr_12916_12956 = state_12886__$1;(statearr_12916_12956[2] = null);
(statearr_12916_12956[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12887 === 20))
{var inst_12862 = (state_12886[16]);var state_12886__$1 = state_12886;var statearr_12917_12957 = state_12886__$1;(statearr_12917_12957[2] = inst_12862);
(statearr_12917_12957[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12887 === 21))
{var inst_12865 = (state_12886[18]);var inst_12840 = (state_12886[12]);var inst_12865__$1 = cljs.core.empty_QMARK_.call(null,inst_12840);var state_12886__$1 = (function (){var statearr_12918 = state_12886;(statearr_12918[18] = inst_12865__$1);
return statearr_12918;
})();if(inst_12865__$1)
{var statearr_12919_12958 = state_12886__$1;(statearr_12919_12958[1] = 23);
} else
{var statearr_12920_12959 = state_12886__$1;(statearr_12920_12959[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12887 === 22))
{var inst_12873 = (state_12886[2]);var state_12886__$1 = state_12886;if(cljs.core.truth_(inst_12873))
{var statearr_12921_12960 = state_12886__$1;(statearr_12921_12960[1] = 26);
} else
{var statearr_12922_12961 = state_12886__$1;(statearr_12922_12961[1] = 27);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12887 === 23))
{var inst_12839 = (state_12886[11]);var inst_12845 = (state_12886[15]);var inst_12867 = inst_12839.call(null,inst_12845);var inst_12868 = cljs.core.not.call(null,inst_12867);var state_12886__$1 = state_12886;var statearr_12923_12962 = state_12886__$1;(statearr_12923_12962[2] = inst_12868);
(statearr_12923_12962[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12887 === 24))
{var inst_12865 = (state_12886[18]);var state_12886__$1 = state_12886;var statearr_12924_12963 = state_12886__$1;(statearr_12924_12963[2] = inst_12865);
(statearr_12924_12963[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12887 === 25))
{var inst_12871 = (state_12886[2]);var state_12886__$1 = state_12886;var statearr_12925_12964 = state_12886__$1;(statearr_12925_12964[2] = inst_12871);
(statearr_12925_12964[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12887 === 26))
{var inst_12844 = (state_12886[14]);var state_12886__$1 = state_12886;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12886__$1,29,out,inst_12844);
} else
{if((state_val_12887 === 27))
{var state_12886__$1 = state_12886;var statearr_12926_12965 = state_12886__$1;(statearr_12926_12965[2] = null);
(statearr_12926_12965[1] = 28);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12887 === 28))
{var inst_12837 = (state_12886[10]);var inst_12879 = (state_12886[2]);var inst_12829 = inst_12837;var state_12886__$1 = (function (){var statearr_12927 = state_12886;(statearr_12927[19] = inst_12879);
(statearr_12927[9] = inst_12829);
return statearr_12927;
})();var statearr_12928_12966 = state_12886__$1;(statearr_12928_12966[2] = null);
(statearr_12928_12966[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12887 === 29))
{var inst_12876 = (state_12886[2]);var state_12886__$1 = state_12886;var statearr_12929_12967 = state_12886__$1;(statearr_12929_12967[2] = inst_12876);
(statearr_12929_12967[1] = 28);
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
});return ((function (switch__8140__auto__){
return (function() {
var state_machine__8141__auto__ = null;
var state_machine__8141__auto____0 = (function (){var statearr_12931 = (new Array(20));(statearr_12931[0] = state_machine__8141__auto__);
(statearr_12931[1] = 1);
return statearr_12931;
});
var state_machine__8141__auto____1 = (function (state_12886){while(true){
var result__8142__auto__ = switch__8140__auto__.call(null,state_12886);if(cljs.core.keyword_identical_QMARK_.call(null,result__8142__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8142__auto__;
}
break;
}
});
state_machine__8141__auto__ = function(state_12886){
switch(arguments.length){
case 0:
return state_machine__8141__auto____0.call(this);
case 1:
return state_machine__8141__auto____1.call(this,state_12886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8141__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8141__auto____0;
state_machine__8141__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8141__auto____1;
return state_machine__8141__auto__;
})()
;})(switch__8140__auto__))
})();var state__8234__auto__ = (function (){var statearr_12932 = f__8233__auto__.call(null);(statearr_12932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8232__auto___12933);
return statearr_12932;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8234__auto__);
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
{var x__6940__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6940__auto__)]);if(or__3943__auto__)
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
{var x__6940__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6940__auto__)]);if(or__3943__auto__)
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
{var x__6940__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6940__auto__)]);if(or__3943__auto__)
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
{var x__6940__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6940__auto__)]);if(or__3943__auto__)
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
return (function (p1__12968_SHARP_){if(cljs.core.truth_(p1__12968_SHARP_.call(null,topic)))
{return p1__12968_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12968_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3943__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13092 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t13092');

/**
* @constructor
*/
cljs.core.async.t13092 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13093){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13093 = meta13093;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13092.cljs$lang$type = true;
cljs.core.async.t13092.cljs$lang$ctorStr = "cljs.core.async/t13092";
cljs.core.async.t13092.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6812__auto__,writer__6813__auto__,opt__6814__auto__){return cljs.core._write.call(null,writer__6813__auto__,"cljs.core.async/t13092");
});})(mults,ensure_mult))
;
cljs.core.async.t13092.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13092.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13092.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13092.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13092.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13092.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13092.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13092.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13094){var self__ = this;
return self__.meta13093;
});})(mults,ensure_mult))
;
cljs.core.async.t13092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13094,meta13093__$1){var self__ = this;
return (new cljs.core.async.t13092(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13093__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13092 = ((function (mults,ensure_mult){
return (function __GT_t13092(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13093){return (new cljs.core.async.t13092(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13093));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13092(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__8232__auto___13215 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8233__auto__ = (function (){var switch__8140__auto__ = (function (state_13167){var state_val_13168 = (state_13167[1]);if((state_val_13168 === 1))
{var state_13167__$1 = state_13167;var statearr_13169_13216 = state_13167__$1;(statearr_13169_13216[2] = null);
(statearr_13169_13216[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13168 === 2))
{var state_13167__$1 = state_13167;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13167__$1,4,ch);
} else
{if((state_val_13168 === 3))
{var inst_13165 = (state_13167[2]);var state_13167__$1 = state_13167;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13167__$1,inst_13165);
} else
{if((state_val_13168 === 4))
{var inst_13097 = (state_13167[5]);var inst_13097__$1 = (state_13167[2]);var inst_13098 = (inst_13097__$1 == null);var state_13167__$1 = (function (){var statearr_13170 = state_13167;(statearr_13170[5] = inst_13097__$1);
return statearr_13170;
})();if(cljs.core.truth_(inst_13098))
{var statearr_13171_13217 = state_13167__$1;(statearr_13171_13217[1] = 5);
} else
{var statearr_13172_13218 = state_13167__$1;(statearr_13172_13218[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13168 === 5))
{var inst_13104 = cljs.core.deref.call(null,mults);var inst_13105 = cljs.core.vals.call(null,inst_13104);var inst_13106 = cljs.core.seq.call(null,inst_13105);var inst_13107 = inst_13106;var inst_13108 = null;var inst_13109 = 0;var inst_13110 = 0;var state_13167__$1 = (function (){var statearr_13173 = state_13167;(statearr_13173[6] = inst_13110);
(statearr_13173[7] = inst_13107);
(statearr_13173[8] = inst_13108);
(statearr_13173[9] = inst_13109);
return statearr_13173;
})();var statearr_13174_13219 = state_13167__$1;(statearr_13174_13219[2] = null);
(statearr_13174_13219[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13168 === 6))
{var inst_13097 = (state_13167[5]);var inst_13147 = (state_13167[10]);var inst_13145 = (state_13167[11]);var inst_13145__$1 = topic_fn.call(null,inst_13097);var inst_13146 = cljs.core.deref.call(null,mults);var inst_13147__$1 = cljs.core.get.call(null,inst_13146,inst_13145__$1);var state_13167__$1 = (function (){var statearr_13175 = state_13167;(statearr_13175[10] = inst_13147__$1);
(statearr_13175[11] = inst_13145__$1);
return statearr_13175;
})();if(cljs.core.truth_(inst_13147__$1))
{var statearr_13176_13220 = state_13167__$1;(statearr_13176_13220[1] = 19);
} else
{var statearr_13177_13221 = state_13167__$1;(statearr_13177_13221[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13168 === 7))
{var inst_13163 = (state_13167[2]);var state_13167__$1 = state_13167;var statearr_13178_13222 = state_13167__$1;(statearr_13178_13222[2] = inst_13163);
(statearr_13178_13222[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13168 === 8))
{var inst_13110 = (state_13167[6]);var inst_13109 = (state_13167[9]);var inst_13112 = (inst_13110 < inst_13109);var inst_13113 = inst_13112;var state_13167__$1 = state_13167;if(cljs.core.truth_(inst_13113))
{var statearr_13182_13223 = state_13167__$1;(statearr_13182_13223[1] = 10);
} else
{var statearr_13183_13224 = state_13167__$1;(statearr_13183_13224[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13168 === 9))
{var inst_13143 = (state_13167[2]);var state_13167__$1 = state_13167;var statearr_13184_13225 = state_13167__$1;(statearr_13184_13225[2] = inst_13143);
(statearr_13184_13225[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13168 === 10))
{var inst_13110 = (state_13167[6]);var inst_13107 = (state_13167[7]);var inst_13108 = (state_13167[8]);var inst_13109 = (state_13167[9]);var inst_13115 = cljs.core._nth.call(null,inst_13108,inst_13110);var inst_13116 = cljs.core.async.muxch_STAR_.call(null,inst_13115);var inst_13117 = cljs.core.async.close_BANG_.call(null,inst_13116);var inst_13118 = (inst_13110 + 1);var tmp13179 = inst_13107;var tmp13180 = inst_13108;var tmp13181 = inst_13109;var inst_13107__$1 = tmp13179;var inst_13108__$1 = tmp13180;var inst_13109__$1 = tmp13181;var inst_13110__$1 = inst_13118;var state_13167__$1 = (function (){var statearr_13185 = state_13167;(statearr_13185[6] = inst_13110__$1);
(statearr_13185[12] = inst_13117);
(statearr_13185[7] = inst_13107__$1);
(statearr_13185[8] = inst_13108__$1);
(statearr_13185[9] = inst_13109__$1);
return statearr_13185;
})();var statearr_13186_13226 = state_13167__$1;(statearr_13186_13226[2] = null);
(statearr_13186_13226[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13168 === 11))
{var inst_13121 = (state_13167[13]);var inst_13107 = (state_13167[7]);var inst_13121__$1 = cljs.core.seq.call(null,inst_13107);var state_13167__$1 = (function (){var statearr_13187 = state_13167;(statearr_13187[13] = inst_13121__$1);
return statearr_13187;
})();if(inst_13121__$1)
{var statearr_13188_13227 = state_13167__$1;(statearr_13188_13227[1] = 13);
} else
{var statearr_13189_13228 = state_13167__$1;(statearr_13189_13228[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13168 === 12))
{var inst_13141 = (state_13167[2]);var state_13167__$1 = state_13167;var statearr_13190_13229 = state_13167__$1;(statearr_13190_13229[2] = inst_13141);
(statearr_13190_13229[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13168 === 13))
{var inst_13121 = (state_13167[13]);var inst_13123 = cljs.core.chunked_seq_QMARK_.call(null,inst_13121);var state_13167__$1 = state_13167;if(inst_13123)
{var statearr_13191_13230 = state_13167__$1;(statearr_13191_13230[1] = 16);
} else
{var statearr_13192_13231 = state_13167__$1;(statearr_13192_13231[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13168 === 14))
{var state_13167__$1 = state_13167;var statearr_13193_13232 = state_13167__$1;(statearr_13193_13232[2] = null);
(statearr_13193_13232[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13168 === 15))
{var inst_13139 = (state_13167[2]);var state_13167__$1 = state_13167;var statearr_13194_13233 = state_13167__$1;(statearr_13194_13233[2] = inst_13139);
(statearr_13194_13233[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13168 === 16))
{var inst_13121 = (state_13167[13]);var inst_13125 = cljs.core.chunk_first.call(null,inst_13121);var inst_13126 = cljs.core.chunk_rest.call(null,inst_13121);var inst_13127 = cljs.core.count.call(null,inst_13125);var inst_13107 = inst_13126;var inst_13108 = inst_13125;var inst_13109 = inst_13127;var inst_13110 = 0;var state_13167__$1 = (function (){var statearr_13195 = state_13167;(statearr_13195[6] = inst_13110);
(statearr_13195[7] = inst_13107);
(statearr_13195[8] = inst_13108);
(statearr_13195[9] = inst_13109);
return statearr_13195;
})();var statearr_13196_13234 = state_13167__$1;(statearr_13196_13234[2] = null);
(statearr_13196_13234[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13168 === 17))
{var inst_13121 = (state_13167[13]);var inst_13130 = cljs.core.first.call(null,inst_13121);var inst_13131 = cljs.core.async.muxch_STAR_.call(null,inst_13130);var inst_13132 = cljs.core.async.close_BANG_.call(null,inst_13131);var inst_13133 = cljs.core.next.call(null,inst_13121);var inst_13107 = inst_13133;var inst_13108 = null;var inst_13109 = 0;var inst_13110 = 0;var state_13167__$1 = (function (){var statearr_13197 = state_13167;(statearr_13197[6] = inst_13110);
(statearr_13197[7] = inst_13107);
(statearr_13197[8] = inst_13108);
(statearr_13197[9] = inst_13109);
(statearr_13197[14] = inst_13132);
return statearr_13197;
})();var statearr_13198_13235 = state_13167__$1;(statearr_13198_13235[2] = null);
(statearr_13198_13235[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13168 === 18))
{var inst_13136 = (state_13167[2]);var state_13167__$1 = state_13167;var statearr_13199_13236 = state_13167__$1;(statearr_13199_13236[2] = inst_13136);
(statearr_13199_13236[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13168 === 19))
{var state_13167__$1 = state_13167;var statearr_13200_13237 = state_13167__$1;(statearr_13200_13237[2] = null);
(statearr_13200_13237[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13168 === 20))
{var state_13167__$1 = state_13167;var statearr_13201_13238 = state_13167__$1;(statearr_13201_13238[2] = null);
(statearr_13201_13238[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13168 === 21))
{var inst_13160 = (state_13167[2]);var state_13167__$1 = (function (){var statearr_13202 = state_13167;(statearr_13202[15] = inst_13160);
return statearr_13202;
})();var statearr_13203_13239 = state_13167__$1;(statearr_13203_13239[2] = null);
(statearr_13203_13239[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13168 === 22))
{var inst_13157 = (state_13167[2]);var state_13167__$1 = state_13167;var statearr_13204_13240 = state_13167__$1;(statearr_13204_13240[2] = inst_13157);
(statearr_13204_13240[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13168 === 23))
{var inst_13145 = (state_13167[11]);var inst_13149 = (state_13167[2]);var inst_13150 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13145);var state_13167__$1 = (function (){var statearr_13205 = state_13167;(statearr_13205[16] = inst_13149);
return statearr_13205;
})();var statearr_13206_13241 = state_13167__$1;(statearr_13206_13241[2] = inst_13150);
(statearr_13206_13241[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13168 === 24))
{try{var inst_13097 = (state_13167[5]);var inst_13147 = (state_13167[10]);var inst_13153 = cljs.core.async.muxch_STAR_.call(null,inst_13147);var state_13167__$1 = state_13167;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13167__$1,25,inst_13153,inst_13097);
}catch (e13207){if((e13207 instanceof Object))
{var ex__8134__auto__ = e13207;var statearr_13208_13242 = state_13167;(statearr_13208_13242[1] = 23);
(statearr_13208_13242[2] = ex__8134__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13207;
} else
{return null;
}
}
}} else
{if((state_val_13168 === 25))
{try{var inst_13155 = (state_13167[2]);var state_13167__$1 = state_13167;var statearr_13211_13243 = state_13167__$1;(statearr_13211_13243[2] = inst_13155);
(statearr_13211_13243[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e13209){if((e13209 instanceof Object))
{var ex__8134__auto__ = e13209;var statearr_13210_13244 = state_13167;(statearr_13210_13244[1] = 23);
(statearr_13210_13244[2] = ex__8134__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13209;
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
});return ((function (switch__8140__auto__){
return (function() {
var state_machine__8141__auto__ = null;
var state_machine__8141__auto____0 = (function (){var statearr_13213 = (new Array(17));(statearr_13213[0] = state_machine__8141__auto__);
(statearr_13213[1] = 1);
return statearr_13213;
});
var state_machine__8141__auto____1 = (function (state_13167){while(true){
var result__8142__auto__ = switch__8140__auto__.call(null,state_13167);if(cljs.core.keyword_identical_QMARK_.call(null,result__8142__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8142__auto__;
}
break;
}
});
state_machine__8141__auto__ = function(state_13167){
switch(arguments.length){
case 0:
return state_machine__8141__auto____0.call(this);
case 1:
return state_machine__8141__auto____1.call(this,state_13167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8141__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8141__auto____0;
state_machine__8141__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8141__auto____1;
return state_machine__8141__auto__;
})()
;})(switch__8140__auto__))
})();var state__8234__auto__ = (function (){var statearr_13214 = f__8233__auto__.call(null);(statearr_13214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8232__auto___13215);
return statearr_13214;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8234__auto__);
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
,cljs.core.range.call(null,cnt));var c__8232__auto___13375 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8233__auto__ = (function (){var switch__8140__auto__ = (function (state_13347){var state_val_13348 = (state_13347[1]);if((state_val_13348 === 1))
{var state_13347__$1 = state_13347;var statearr_13349_13376 = state_13347__$1;(statearr_13349_13376[2] = null);
(statearr_13349_13376[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13348 === 2))
{var inst_13311 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13312 = 0;var state_13347__$1 = (function (){var statearr_13350 = state_13347;(statearr_13350[5] = inst_13312);
(statearr_13350[6] = inst_13311);
return statearr_13350;
})();var statearr_13351_13377 = state_13347__$1;(statearr_13351_13377[2] = null);
(statearr_13351_13377[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13348 === 3))
{var inst_13345 = (state_13347[2]);var state_13347__$1 = state_13347;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13347__$1,inst_13345);
} else
{if((state_val_13348 === 4))
{var inst_13312 = (state_13347[5]);var inst_13314 = (inst_13312 < cnt);var state_13347__$1 = state_13347;if(cljs.core.truth_(inst_13314))
{var statearr_13352_13378 = state_13347__$1;(statearr_13352_13378[1] = 6);
} else
{var statearr_13353_13379 = state_13347__$1;(statearr_13353_13379[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13348 === 5))
{var inst_13331 = (state_13347[2]);var state_13347__$1 = (function (){var statearr_13354 = state_13347;(statearr_13354[7] = inst_13331);
return statearr_13354;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13347__$1,12,dchan);
} else
{if((state_val_13348 === 6))
{var state_13347__$1 = state_13347;var statearr_13355_13380 = state_13347__$1;(statearr_13355_13380[2] = null);
(statearr_13355_13380[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13348 === 7))
{var state_13347__$1 = state_13347;var statearr_13356_13381 = state_13347__$1;(statearr_13356_13381[2] = null);
(statearr_13356_13381[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13348 === 8))
{var inst_13329 = (state_13347[2]);var state_13347__$1 = state_13347;var statearr_13357_13382 = state_13347__$1;(statearr_13357_13382[2] = inst_13329);
(statearr_13357_13382[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13348 === 9))
{var inst_13312 = (state_13347[5]);var inst_13324 = (state_13347[2]);var inst_13325 = (inst_13312 + 1);var inst_13312__$1 = inst_13325;var state_13347__$1 = (function (){var statearr_13358 = state_13347;(statearr_13358[8] = inst_13324);
(statearr_13358[5] = inst_13312__$1);
return statearr_13358;
})();var statearr_13359_13383 = state_13347__$1;(statearr_13359_13383[2] = null);
(statearr_13359_13383[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13348 === 10))
{var inst_13316 = (state_13347[2]);var inst_13317 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13347__$1 = (function (){var statearr_13360 = state_13347;(statearr_13360[9] = inst_13316);
return statearr_13360;
})();var statearr_13361_13384 = state_13347__$1;(statearr_13361_13384[2] = inst_13317);
(statearr_13361_13384[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13348 === 11))
{try{var inst_13312 = (state_13347[5]);var inst_13320 = chs__$1.call(null,inst_13312);var inst_13321 = done.call(null,inst_13312);var inst_13322 = cljs.core.async.take_BANG_.call(null,inst_13320,inst_13321);var state_13347__$1 = state_13347;var statearr_13364_13385 = state_13347__$1;(statearr_13364_13385[2] = inst_13322);
(statearr_13364_13385[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e13362){if((e13362 instanceof Object))
{var ex__8134__auto__ = e13362;var statearr_13363_13386 = state_13347;(statearr_13363_13386[1] = 10);
(statearr_13363_13386[2] = ex__8134__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13362;
} else
{return null;
}
}
}} else
{if((state_val_13348 === 12))
{var inst_13333 = (state_13347[10]);var inst_13333__$1 = (state_13347[2]);var inst_13334 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13333__$1);var state_13347__$1 = (function (){var statearr_13365 = state_13347;(statearr_13365[10] = inst_13333__$1);
return statearr_13365;
})();if(cljs.core.truth_(inst_13334))
{var statearr_13366_13387 = state_13347__$1;(statearr_13366_13387[1] = 13);
} else
{var statearr_13367_13388 = state_13347__$1;(statearr_13367_13388[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13348 === 13))
{var inst_13336 = cljs.core.async.close_BANG_.call(null,out);var state_13347__$1 = state_13347;var statearr_13368_13389 = state_13347__$1;(statearr_13368_13389[2] = inst_13336);
(statearr_13368_13389[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13348 === 14))
{var inst_13333 = (state_13347[10]);var inst_13338 = cljs.core.apply.call(null,f,inst_13333);var state_13347__$1 = state_13347;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13347__$1,16,out,inst_13338);
} else
{if((state_val_13348 === 15))
{var inst_13343 = (state_13347[2]);var state_13347__$1 = state_13347;var statearr_13369_13390 = state_13347__$1;(statearr_13369_13390[2] = inst_13343);
(statearr_13369_13390[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13348 === 16))
{var inst_13340 = (state_13347[2]);var state_13347__$1 = (function (){var statearr_13370 = state_13347;(statearr_13370[11] = inst_13340);
return statearr_13370;
})();var statearr_13371_13391 = state_13347__$1;(statearr_13371_13391[2] = null);
(statearr_13371_13391[1] = 2);
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
});return ((function (switch__8140__auto__){
return (function() {
var state_machine__8141__auto__ = null;
var state_machine__8141__auto____0 = (function (){var statearr_13373 = (new Array(12));(statearr_13373[0] = state_machine__8141__auto__);
(statearr_13373[1] = 1);
return statearr_13373;
});
var state_machine__8141__auto____1 = (function (state_13347){while(true){
var result__8142__auto__ = switch__8140__auto__.call(null,state_13347);if(cljs.core.keyword_identical_QMARK_.call(null,result__8142__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8142__auto__;
}
break;
}
});
state_machine__8141__auto__ = function(state_13347){
switch(arguments.length){
case 0:
return state_machine__8141__auto____0.call(this);
case 1:
return state_machine__8141__auto____1.call(this,state_13347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8141__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8141__auto____0;
state_machine__8141__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8141__auto____1;
return state_machine__8141__auto__;
})()
;})(switch__8140__auto__))
})();var state__8234__auto__ = (function (){var statearr_13374 = f__8233__auto__.call(null);(statearr_13374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8232__auto___13375);
return statearr_13374;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8234__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8232__auto___13491 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8233__auto__ = (function (){var switch__8140__auto__ = (function (state_13471){var state_val_13472 = (state_13471[1]);if((state_val_13472 === 1))
{var inst_13442 = cljs.core.vec.call(null,chs);var inst_13443 = inst_13442;var state_13471__$1 = (function (){var statearr_13473 = state_13471;(statearr_13473[5] = inst_13443);
return statearr_13473;
})();var statearr_13474_13492 = state_13471__$1;(statearr_13474_13492[2] = null);
(statearr_13474_13492[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13472 === 2))
{var inst_13443 = (state_13471[5]);var inst_13445 = cljs.core.count.call(null,inst_13443);var inst_13446 = (inst_13445 > 0);var state_13471__$1 = state_13471;if(cljs.core.truth_(inst_13446))
{var statearr_13475_13493 = state_13471__$1;(statearr_13475_13493[1] = 4);
} else
{var statearr_13476_13494 = state_13471__$1;(statearr_13476_13494[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13472 === 3))
{var inst_13469 = (state_13471[2]);var state_13471__$1 = state_13471;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13471__$1,inst_13469);
} else
{if((state_val_13472 === 4))
{var inst_13443 = (state_13471[5]);var state_13471__$1 = state_13471;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13471__$1,7,inst_13443);
} else
{if((state_val_13472 === 5))
{var inst_13465 = cljs.core.async.close_BANG_.call(null,out);var state_13471__$1 = state_13471;var statearr_13477_13495 = state_13471__$1;(statearr_13477_13495[2] = inst_13465);
(statearr_13477_13495[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13472 === 6))
{var inst_13467 = (state_13471[2]);var state_13471__$1 = state_13471;var statearr_13478_13496 = state_13471__$1;(statearr_13478_13496[2] = inst_13467);
(statearr_13478_13496[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13472 === 7))
{var inst_13450 = (state_13471[6]);var inst_13451 = (state_13471[7]);var inst_13450__$1 = (state_13471[2]);var inst_13451__$1 = cljs.core.nth.call(null,inst_13450__$1,0,null);var inst_13452 = cljs.core.nth.call(null,inst_13450__$1,1,null);var inst_13453 = (inst_13451__$1 == null);var state_13471__$1 = (function (){var statearr_13479 = state_13471;(statearr_13479[8] = inst_13452);
(statearr_13479[6] = inst_13450__$1);
(statearr_13479[7] = inst_13451__$1);
return statearr_13479;
})();if(cljs.core.truth_(inst_13453))
{var statearr_13480_13497 = state_13471__$1;(statearr_13480_13497[1] = 8);
} else
{var statearr_13481_13498 = state_13471__$1;(statearr_13481_13498[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13472 === 8))
{var inst_13443 = (state_13471[5]);var inst_13452 = (state_13471[8]);var inst_13450 = (state_13471[6]);var inst_13451 = (state_13471[7]);var inst_13455 = (function (){var c = inst_13452;var v = inst_13451;var vec__13448 = inst_13450;var cs = inst_13443;return ((function (c,v,vec__13448,cs,inst_13443,inst_13452,inst_13450,inst_13451,state_val_13472){
return (function (p1__13392_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13392_SHARP_);
});
;})(c,v,vec__13448,cs,inst_13443,inst_13452,inst_13450,inst_13451,state_val_13472))
})();var inst_13456 = cljs.core.filterv.call(null,inst_13455,inst_13443);var inst_13443__$1 = inst_13456;var state_13471__$1 = (function (){var statearr_13482 = state_13471;(statearr_13482[5] = inst_13443__$1);
return statearr_13482;
})();var statearr_13483_13499 = state_13471__$1;(statearr_13483_13499[2] = null);
(statearr_13483_13499[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13472 === 9))
{var inst_13451 = (state_13471[7]);var state_13471__$1 = state_13471;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13471__$1,11,out,inst_13451);
} else
{if((state_val_13472 === 10))
{var inst_13463 = (state_13471[2]);var state_13471__$1 = state_13471;var statearr_13485_13500 = state_13471__$1;(statearr_13485_13500[2] = inst_13463);
(statearr_13485_13500[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13472 === 11))
{var inst_13443 = (state_13471[5]);var inst_13460 = (state_13471[2]);var tmp13484 = inst_13443;var inst_13443__$1 = tmp13484;var state_13471__$1 = (function (){var statearr_13486 = state_13471;(statearr_13486[5] = inst_13443__$1);
(statearr_13486[9] = inst_13460);
return statearr_13486;
})();var statearr_13487_13501 = state_13471__$1;(statearr_13487_13501[2] = null);
(statearr_13487_13501[1] = 2);
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
});return ((function (switch__8140__auto__){
return (function() {
var state_machine__8141__auto__ = null;
var state_machine__8141__auto____0 = (function (){var statearr_13489 = (new Array(10));(statearr_13489[0] = state_machine__8141__auto__);
(statearr_13489[1] = 1);
return statearr_13489;
});
var state_machine__8141__auto____1 = (function (state_13471){while(true){
var result__8142__auto__ = switch__8140__auto__.call(null,state_13471);if(cljs.core.keyword_identical_QMARK_.call(null,result__8142__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8142__auto__;
}
break;
}
});
state_machine__8141__auto__ = function(state_13471){
switch(arguments.length){
case 0:
return state_machine__8141__auto____0.call(this);
case 1:
return state_machine__8141__auto____1.call(this,state_13471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8141__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8141__auto____0;
state_machine__8141__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8141__auto____1;
return state_machine__8141__auto__;
})()
;})(switch__8140__auto__))
})();var state__8234__auto__ = (function (){var statearr_13490 = f__8233__auto__.call(null);(statearr_13490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8232__auto___13491);
return statearr_13490;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8234__auto__);
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
