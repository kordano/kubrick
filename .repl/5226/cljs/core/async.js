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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12052 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12052');

/**
* @constructor
*/
cljs.core.async.t12052 = (function (f,fn_handler,meta12053){
this.f = f;
this.fn_handler = fn_handler;
this.meta12053 = meta12053;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12052.cljs$lang$type = true;
cljs.core.async.t12052.cljs$lang$ctorStr = "cljs.core.async/t12052";
cljs.core.async.t12052.cljs$lang$ctorPrWriter = (function (this__6741__auto__,writer__6742__auto__,opt__6743__auto__){return cljs.core._write.call(null,writer__6742__auto__,"cljs.core.async/t12052");
});
cljs.core.async.t12052.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12052.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return true;
});
cljs.core.async.t12052.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
return self__.f;
});
cljs.core.async.t12052.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12054){var self__ = this;
return self__.meta12053;
});
cljs.core.async.t12052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12054,meta12053__$1){var self__ = this;
return (new cljs.core.async.t12052(self__.f,self__.fn_handler,meta12053__$1));
});
cljs.core.async.__GT_t12052 = (function __GT_t12052(f__$1,fn_handler__$1,meta12053){return (new cljs.core.async.t12052(f__$1,fn_handler__$1,meta12053));
});
}
return (new cljs.core.async.t12052(f,fn_handler,null));
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
{var val_12055 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12055);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_12055);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__6981__auto___12056 = n;var x_12057 = 0;while(true){
if((x_12057 < n__6981__auto___12056))
{(a[x_12057] = 0);
{
var G__12058 = (x_12057 + 1);
x_12057 = G__12058;
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
var G__12059 = (i + 1);
i = G__12059;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12063 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12063');

/**
* @constructor
*/
cljs.core.async.t12063 = (function (flag,alt_flag,meta12064){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12064 = meta12064;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12063.cljs$lang$type = true;
cljs.core.async.t12063.cljs$lang$ctorStr = "cljs.core.async/t12063";
cljs.core.async.t12063.cljs$lang$ctorPrWriter = (function (this__6741__auto__,writer__6742__auto__,opt__6743__auto__){return cljs.core._write.call(null,writer__6742__auto__,"cljs.core.async/t12063");
});
cljs.core.async.t12063.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12063.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t12063.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t12063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12065){var self__ = this;
return self__.meta12064;
});
cljs.core.async.t12063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12065,meta12064__$1){var self__ = this;
return (new cljs.core.async.t12063(self__.flag,self__.alt_flag,meta12064__$1));
});
cljs.core.async.__GT_t12063 = (function __GT_t12063(flag__$1,alt_flag__$1,meta12064){return (new cljs.core.async.t12063(flag__$1,alt_flag__$1,meta12064));
});
}
return (new cljs.core.async.t12063(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12069 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12069');

/**
* @constructor
*/
cljs.core.async.t12069 = (function (cb,flag,alt_handler,meta12070){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12070 = meta12070;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12069.cljs$lang$type = true;
cljs.core.async.t12069.cljs$lang$ctorStr = "cljs.core.async/t12069";
cljs.core.async.t12069.cljs$lang$ctorPrWriter = (function (this__6741__auto__,writer__6742__auto__,opt__6743__auto__){return cljs.core._write.call(null,writer__6742__auto__,"cljs.core.async/t12069");
});
cljs.core.async.t12069.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12069.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12069.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12069.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12071){var self__ = this;
return self__.meta12070;
});
cljs.core.async.t12069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12071,meta12070__$1){var self__ = this;
return (new cljs.core.async.t12069(self__.cb,self__.flag,self__.alt_handler,meta12070__$1));
});
cljs.core.async.__GT_t12069 = (function __GT_t12069(cb__$1,flag__$1,alt_handler__$1,meta12070){return (new cljs.core.async.t12069(cb__$1,flag__$1,alt_handler__$1,meta12070));
});
}
return (new cljs.core.async.t12069(cb,flag,alt_handler,null));
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
return (function (p1__12072_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__12072_SHARP_,port], true));
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
var G__12073 = (i + 1);
i = G__12073;
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
var alts_BANG___delegate = function (ports,p__12074){var map__12076 = p__12074;var map__12076__$1 = ((cljs.core.seq_QMARK_.call(null,map__12076))?cljs.core.apply.call(null,cljs.core.hash_map,map__12076):map__12076);var opts = map__12076__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__12074 = null;if (arguments.length > 1) {
  p__12074 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12074);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12077){
var ports = cljs.core.first(arglist__12077);
var p__12074 = cljs.core.rest(arglist__12077);
return alts_BANG___delegate(ports,p__12074);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t12085 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12085');

/**
* @constructor
*/
cljs.core.async.t12085 = (function (ch,f,map_LT_,meta12086){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12086 = meta12086;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12085.cljs$lang$type = true;
cljs.core.async.t12085.cljs$lang$ctorStr = "cljs.core.async/t12085";
cljs.core.async.t12085.cljs$lang$ctorPrWriter = (function (this__6741__auto__,writer__6742__auto__,opt__6743__auto__){return cljs.core._write.call(null,writer__6742__auto__,"cljs.core.async/t12085");
});
cljs.core.async.t12085.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12085.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t12085.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12085.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t12088 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12088');

/**
* @constructor
*/
cljs.core.async.t12088 = (function (fn1,_,meta12086,ch,f,map_LT_,meta12089){
this.fn1 = fn1;
this._ = _;
this.meta12086 = meta12086;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12089 = meta12089;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12088.cljs$lang$type = true;
cljs.core.async.t12088.cljs$lang$ctorStr = "cljs.core.async/t12088";
cljs.core.async.t12088.cljs$lang$ctorPrWriter = (function (this__6741__auto__,writer__6742__auto__,opt__6743__auto__){return cljs.core._write.call(null,writer__6742__auto__,"cljs.core.async/t12088");
});
cljs.core.async.t12088.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12088.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$2){var self__ = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t12088.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$2){var self__ = this;
return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t12088.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$2){var self__ = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1){
return (function (p1__12078_SHARP_){return f1.call(null,(((p1__12078_SHARP_ == null))?null:self__.f.call(null,p1__12078_SHARP_)));
});
;})(f1))
});
cljs.core.async.t12088.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12090){var self__ = this;
return self__.meta12089;
});
cljs.core.async.t12088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12090,meta12089__$1){var self__ = this;
return (new cljs.core.async.t12088(self__.fn1,self__._,self__.meta12086,self__.ch,self__.f,self__.map_LT_,meta12089__$1));
});
cljs.core.async.__GT_t12088 = (function __GT_t12088(fn1__$1,___$1,meta12086__$1,ch__$2,f__$2,map_LT___$2,meta12089){return (new cljs.core.async.t12088(fn1__$1,___$1,meta12086__$1,ch__$2,f__$2,map_LT___$2,meta12089));
});
}
return (new cljs.core.async.t12088(fn1,_,self__.meta12086,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t12085.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12085.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12085.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12087){var self__ = this;
return self__.meta12086;
});
cljs.core.async.t12085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12087,meta12086__$1){var self__ = this;
return (new cljs.core.async.t12085(self__.ch,self__.f,self__.map_LT_,meta12086__$1));
});
cljs.core.async.__GT_t12085 = (function __GT_t12085(ch__$1,f__$1,map_LT___$1,meta12086){return (new cljs.core.async.t12085(ch__$1,f__$1,map_LT___$1,meta12086));
});
}
return (new cljs.core.async.t12085(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t12094 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12094');

/**
* @constructor
*/
cljs.core.async.t12094 = (function (ch,f,map_GT_,meta12095){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta12095 = meta12095;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12094.cljs$lang$type = true;
cljs.core.async.t12094.cljs$lang$ctorStr = "cljs.core.async/t12094";
cljs.core.async.t12094.cljs$lang$ctorPrWriter = (function (this__6741__auto__,writer__6742__auto__,opt__6743__auto__){return cljs.core._write.call(null,writer__6742__auto__,"cljs.core.async/t12094");
});
cljs.core.async.t12094.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12094.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t12094.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12094.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12094.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12094.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12094.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12096){var self__ = this;
return self__.meta12095;
});
cljs.core.async.t12094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12096,meta12095__$1){var self__ = this;
return (new cljs.core.async.t12094(self__.ch,self__.f,self__.map_GT_,meta12095__$1));
});
cljs.core.async.__GT_t12094 = (function __GT_t12094(ch__$1,f__$1,map_GT___$1,meta12095){return (new cljs.core.async.t12094(ch__$1,f__$1,map_GT___$1,meta12095));
});
}
return (new cljs.core.async.t12094(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t12100 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12100');

/**
* @constructor
*/
cljs.core.async.t12100 = (function (ch,p,filter_GT_,meta12101){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta12101 = meta12101;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12100.cljs$lang$type = true;
cljs.core.async.t12100.cljs$lang$ctorStr = "cljs.core.async/t12100";
cljs.core.async.t12100.cljs$lang$ctorPrWriter = (function (this__6741__auto__,writer__6742__auto__,opt__6743__auto__){return cljs.core._write.call(null,writer__6742__auto__,"cljs.core.async/t12100");
});
cljs.core.async.t12100.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12100.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t12100.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12100.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12100.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12100.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12100.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12102){var self__ = this;
return self__.meta12101;
});
cljs.core.async.t12100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12102,meta12101__$1){var self__ = this;
return (new cljs.core.async.t12100(self__.ch,self__.p,self__.filter_GT_,meta12101__$1));
});
cljs.core.async.__GT_t12100 = (function __GT_t12100(ch__$1,p__$1,filter_GT___$1,meta12101){return (new cljs.core.async.t12100(ch__$1,p__$1,filter_GT___$1,meta12101));
});
}
return (new cljs.core.async.t12100(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8284__auto___12177 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8285__auto__ = (function (){var switch__8222__auto__ = (function (state_12160){var state_val_12161 = (state_12160[1]);if((state_val_12161 === 1))
{var state_12160__$1 = state_12160;var statearr_12162_12178 = state_12160__$1;(statearr_12162_12178[2] = null);
(statearr_12162_12178[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12161 === 2))
{var state_12160__$1 = state_12160;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12160__$1,4,ch);
} else
{if((state_val_12161 === 3))
{var inst_12158 = (state_12160[2]);var state_12160__$1 = state_12160;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12160__$1,inst_12158);
} else
{if((state_val_12161 === 4))
{var inst_12142 = (state_12160[5]);var inst_12142__$1 = (state_12160[2]);var inst_12143 = (inst_12142__$1 == null);var state_12160__$1 = (function (){var statearr_12163 = state_12160;(statearr_12163[5] = inst_12142__$1);
return statearr_12163;
})();if(cljs.core.truth_(inst_12143))
{var statearr_12164_12179 = state_12160__$1;(statearr_12164_12179[1] = 5);
} else
{var statearr_12165_12180 = state_12160__$1;(statearr_12165_12180[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12161 === 5))
{var inst_12145 = cljs.core.async.close_BANG_.call(null,out);var state_12160__$1 = state_12160;var statearr_12166_12181 = state_12160__$1;(statearr_12166_12181[2] = inst_12145);
(statearr_12166_12181[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12161 === 6))
{var inst_12142 = (state_12160[5]);var inst_12147 = p.call(null,inst_12142);var state_12160__$1 = state_12160;if(cljs.core.truth_(inst_12147))
{var statearr_12167_12182 = state_12160__$1;(statearr_12167_12182[1] = 8);
} else
{var statearr_12168_12183 = state_12160__$1;(statearr_12168_12183[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12161 === 7))
{var inst_12156 = (state_12160[2]);var state_12160__$1 = state_12160;var statearr_12169_12184 = state_12160__$1;(statearr_12169_12184[2] = inst_12156);
(statearr_12169_12184[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12161 === 8))
{var inst_12142 = (state_12160[5]);var state_12160__$1 = state_12160;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12160__$1,11,out,inst_12142);
} else
{if((state_val_12161 === 9))
{var state_12160__$1 = state_12160;var statearr_12170_12185 = state_12160__$1;(statearr_12170_12185[2] = null);
(statearr_12170_12185[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12161 === 10))
{var inst_12153 = (state_12160[2]);var state_12160__$1 = (function (){var statearr_12171 = state_12160;(statearr_12171[6] = inst_12153);
return statearr_12171;
})();var statearr_12172_12186 = state_12160__$1;(statearr_12172_12186[2] = null);
(statearr_12172_12186[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12161 === 11))
{var inst_12150 = (state_12160[2]);var state_12160__$1 = state_12160;var statearr_12173_12187 = state_12160__$1;(statearr_12173_12187[2] = inst_12150);
(statearr_12173_12187[1] = 10);
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
});return ((function (switch__8222__auto__){
return (function() {
var state_machine__8223__auto__ = null;
var state_machine__8223__auto____0 = (function (){var statearr_12175 = (new Array(7));(statearr_12175[0] = state_machine__8223__auto__);
(statearr_12175[1] = 1);
return statearr_12175;
});
var state_machine__8223__auto____1 = (function (state_12160){while(true){
var result__8224__auto__ = switch__8222__auto__.call(null,state_12160);if(cljs.core.keyword_identical_QMARK_.call(null,result__8224__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8224__auto__;
}
break;
}
});
state_machine__8223__auto__ = function(state_12160){
switch(arguments.length){
case 0:
return state_machine__8223__auto____0.call(this);
case 1:
return state_machine__8223__auto____1.call(this,state_12160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8223__auto____0;
state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8223__auto____1;
return state_machine__8223__auto__;
})()
;})(switch__8222__auto__))
})();var state__8286__auto__ = (function (){var statearr_12176 = f__8285__auto__.call(null);(statearr_12176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8284__auto___12177);
return statearr_12176;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8286__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__8284__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8285__auto__ = (function (){var switch__8222__auto__ = (function (state_12335){var state_val_12336 = (state_12335[1]);if((state_val_12336 === 1))
{var state_12335__$1 = state_12335;var statearr_12337_12370 = state_12335__$1;(statearr_12337_12370[2] = null);
(statearr_12337_12370[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12336 === 2))
{var state_12335__$1 = state_12335;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12335__$1,4,in$);
} else
{if((state_val_12336 === 3))
{var inst_12333 = (state_12335[2]);var state_12335__$1 = state_12335;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12335__$1,inst_12333);
} else
{if((state_val_12336 === 4))
{var inst_12281 = (state_12335[5]);var inst_12281__$1 = (state_12335[2]);var inst_12282 = (inst_12281__$1 == null);var state_12335__$1 = (function (){var statearr_12338 = state_12335;(statearr_12338[5] = inst_12281__$1);
return statearr_12338;
})();if(cljs.core.truth_(inst_12282))
{var statearr_12339_12371 = state_12335__$1;(statearr_12339_12371[1] = 5);
} else
{var statearr_12340_12372 = state_12335__$1;(statearr_12340_12372[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12336 === 5))
{var inst_12284 = cljs.core.async.close_BANG_.call(null,out);var state_12335__$1 = state_12335;var statearr_12341_12373 = state_12335__$1;(statearr_12341_12373[2] = inst_12284);
(statearr_12341_12373[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12336 === 6))
{var inst_12281 = (state_12335[5]);var inst_12286 = f.call(null,inst_12281);var inst_12291 = cljs.core.seq.call(null,inst_12286);var inst_12292 = inst_12291;var inst_12293 = null;var inst_12294 = 0;var inst_12295 = 0;var state_12335__$1 = (function (){var statearr_12342 = state_12335;(statearr_12342[6] = inst_12295);
(statearr_12342[7] = inst_12292);
(statearr_12342[8] = inst_12294);
(statearr_12342[9] = inst_12293);
return statearr_12342;
})();var statearr_12343_12374 = state_12335__$1;(statearr_12343_12374[2] = null);
(statearr_12343_12374[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12336 === 7))
{var inst_12331 = (state_12335[2]);var state_12335__$1 = state_12335;var statearr_12344_12375 = state_12335__$1;(statearr_12344_12375[2] = inst_12331);
(statearr_12344_12375[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12336 === 8))
{var inst_12295 = (state_12335[6]);var inst_12294 = (state_12335[8]);var inst_12297 = (inst_12295 < inst_12294);var inst_12298 = inst_12297;var state_12335__$1 = state_12335;if(cljs.core.truth_(inst_12298))
{var statearr_12345_12376 = state_12335__$1;(statearr_12345_12376[1] = 10);
} else
{var statearr_12346_12377 = state_12335__$1;(statearr_12346_12377[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12336 === 9))
{var inst_12328 = (state_12335[2]);var state_12335__$1 = (function (){var statearr_12347 = state_12335;(statearr_12347[10] = inst_12328);
return statearr_12347;
})();var statearr_12348_12378 = state_12335__$1;(statearr_12348_12378[2] = null);
(statearr_12348_12378[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12336 === 10))
{var inst_12295 = (state_12335[6]);var inst_12293 = (state_12335[9]);var inst_12300 = cljs.core._nth.call(null,inst_12293,inst_12295);var state_12335__$1 = state_12335;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12335__$1,13,out,inst_12300);
} else
{if((state_val_12336 === 11))
{var inst_12306 = (state_12335[11]);var inst_12292 = (state_12335[7]);var inst_12306__$1 = cljs.core.seq.call(null,inst_12292);var state_12335__$1 = (function (){var statearr_12352 = state_12335;(statearr_12352[11] = inst_12306__$1);
return statearr_12352;
})();if(inst_12306__$1)
{var statearr_12353_12379 = state_12335__$1;(statearr_12353_12379[1] = 14);
} else
{var statearr_12354_12380 = state_12335__$1;(statearr_12354_12380[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12336 === 12))
{var inst_12326 = (state_12335[2]);var state_12335__$1 = state_12335;var statearr_12355_12381 = state_12335__$1;(statearr_12355_12381[2] = inst_12326);
(statearr_12355_12381[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12336 === 13))
{var inst_12295 = (state_12335[6]);var inst_12292 = (state_12335[7]);var inst_12294 = (state_12335[8]);var inst_12293 = (state_12335[9]);var inst_12302 = (state_12335[2]);var inst_12303 = (inst_12295 + 1);var tmp12349 = inst_12292;var tmp12350 = inst_12294;var tmp12351 = inst_12293;var inst_12292__$1 = tmp12349;var inst_12293__$1 = tmp12351;var inst_12294__$1 = tmp12350;var inst_12295__$1 = inst_12303;var state_12335__$1 = (function (){var statearr_12356 = state_12335;(statearr_12356[12] = inst_12302);
(statearr_12356[6] = inst_12295__$1);
(statearr_12356[7] = inst_12292__$1);
(statearr_12356[8] = inst_12294__$1);
(statearr_12356[9] = inst_12293__$1);
return statearr_12356;
})();var statearr_12357_12382 = state_12335__$1;(statearr_12357_12382[2] = null);
(statearr_12357_12382[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12336 === 14))
{var inst_12306 = (state_12335[11]);var inst_12308 = cljs.core.chunked_seq_QMARK_.call(null,inst_12306);var state_12335__$1 = state_12335;if(inst_12308)
{var statearr_12358_12383 = state_12335__$1;(statearr_12358_12383[1] = 17);
} else
{var statearr_12359_12384 = state_12335__$1;(statearr_12359_12384[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12336 === 15))
{var state_12335__$1 = state_12335;var statearr_12360_12385 = state_12335__$1;(statearr_12360_12385[2] = null);
(statearr_12360_12385[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12336 === 16))
{var inst_12324 = (state_12335[2]);var state_12335__$1 = state_12335;var statearr_12361_12386 = state_12335__$1;(statearr_12361_12386[2] = inst_12324);
(statearr_12361_12386[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12336 === 17))
{var inst_12306 = (state_12335[11]);var inst_12310 = cljs.core.chunk_first.call(null,inst_12306);var inst_12311 = cljs.core.chunk_rest.call(null,inst_12306);var inst_12312 = cljs.core.count.call(null,inst_12310);var inst_12292 = inst_12311;var inst_12293 = inst_12310;var inst_12294 = inst_12312;var inst_12295 = 0;var state_12335__$1 = (function (){var statearr_12362 = state_12335;(statearr_12362[6] = inst_12295);
(statearr_12362[7] = inst_12292);
(statearr_12362[8] = inst_12294);
(statearr_12362[9] = inst_12293);
return statearr_12362;
})();var statearr_12363_12387 = state_12335__$1;(statearr_12363_12387[2] = null);
(statearr_12363_12387[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12336 === 18))
{var inst_12306 = (state_12335[11]);var inst_12315 = cljs.core.first.call(null,inst_12306);var state_12335__$1 = state_12335;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12335__$1,20,out,inst_12315);
} else
{if((state_val_12336 === 19))
{var inst_12321 = (state_12335[2]);var state_12335__$1 = state_12335;var statearr_12364_12388 = state_12335__$1;(statearr_12364_12388[2] = inst_12321);
(statearr_12364_12388[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12336 === 20))
{var inst_12306 = (state_12335[11]);var inst_12317 = (state_12335[2]);var inst_12318 = cljs.core.next.call(null,inst_12306);var inst_12292 = inst_12318;var inst_12293 = null;var inst_12294 = 0;var inst_12295 = 0;var state_12335__$1 = (function (){var statearr_12365 = state_12335;(statearr_12365[6] = inst_12295);
(statearr_12365[7] = inst_12292);
(statearr_12365[8] = inst_12294);
(statearr_12365[13] = inst_12317);
(statearr_12365[9] = inst_12293);
return statearr_12365;
})();var statearr_12366_12389 = state_12335__$1;(statearr_12366_12389[2] = null);
(statearr_12366_12389[1] = 8);
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
});return ((function (switch__8222__auto__){
return (function() {
var state_machine__8223__auto__ = null;
var state_machine__8223__auto____0 = (function (){var statearr_12368 = (new Array(14));(statearr_12368[0] = state_machine__8223__auto__);
(statearr_12368[1] = 1);
return statearr_12368;
});
var state_machine__8223__auto____1 = (function (state_12335){while(true){
var result__8224__auto__ = switch__8222__auto__.call(null,state_12335);if(cljs.core.keyword_identical_QMARK_.call(null,result__8224__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8224__auto__;
}
break;
}
});
state_machine__8223__auto__ = function(state_12335){
switch(arguments.length){
case 0:
return state_machine__8223__auto____0.call(this);
case 1:
return state_machine__8223__auto____1.call(this,state_12335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8223__auto____0;
state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8223__auto____1;
return state_machine__8223__auto__;
})()
;})(switch__8222__auto__))
})();var state__8286__auto__ = (function (){var statearr_12369 = f__8285__auto__.call(null);(statearr_12369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8284__auto__);
return statearr_12369;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8286__auto__);
}));
return c__8284__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__8284__auto___12462 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8285__auto__ = (function (){var switch__8222__auto__ = (function (state_12445){var state_val_12446 = (state_12445[1]);if((state_val_12446 === 1))
{var state_12445__$1 = state_12445;var statearr_12447_12463 = state_12445__$1;(statearr_12447_12463[2] = null);
(statearr_12447_12463[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12446 === 2))
{var state_12445__$1 = state_12445;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12445__$1,4,from);
} else
{if((state_val_12446 === 3))
{var inst_12443 = (state_12445[2]);var state_12445__$1 = state_12445;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12445__$1,inst_12443);
} else
{if((state_val_12446 === 4))
{var inst_12428 = (state_12445[5]);var inst_12428__$1 = (state_12445[2]);var inst_12429 = (inst_12428__$1 == null);var state_12445__$1 = (function (){var statearr_12448 = state_12445;(statearr_12448[5] = inst_12428__$1);
return statearr_12448;
})();if(cljs.core.truth_(inst_12429))
{var statearr_12449_12464 = state_12445__$1;(statearr_12449_12464[1] = 5);
} else
{var statearr_12450_12465 = state_12445__$1;(statearr_12450_12465[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12446 === 5))
{var state_12445__$1 = state_12445;if(cljs.core.truth_(close_QMARK_))
{var statearr_12451_12466 = state_12445__$1;(statearr_12451_12466[1] = 8);
} else
{var statearr_12452_12467 = state_12445__$1;(statearr_12452_12467[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12446 === 6))
{var inst_12428 = (state_12445[5]);var state_12445__$1 = state_12445;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12445__$1,11,to,inst_12428);
} else
{if((state_val_12446 === 7))
{var inst_12441 = (state_12445[2]);var state_12445__$1 = state_12445;var statearr_12453_12468 = state_12445__$1;(statearr_12453_12468[2] = inst_12441);
(statearr_12453_12468[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12446 === 8))
{var inst_12432 = cljs.core.async.close_BANG_.call(null,to);var state_12445__$1 = state_12445;var statearr_12454_12469 = state_12445__$1;(statearr_12454_12469[2] = inst_12432);
(statearr_12454_12469[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12446 === 9))
{var state_12445__$1 = state_12445;var statearr_12455_12470 = state_12445__$1;(statearr_12455_12470[2] = null);
(statearr_12455_12470[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12446 === 10))
{var inst_12435 = (state_12445[2]);var state_12445__$1 = state_12445;var statearr_12456_12471 = state_12445__$1;(statearr_12456_12471[2] = inst_12435);
(statearr_12456_12471[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12446 === 11))
{var inst_12438 = (state_12445[2]);var state_12445__$1 = (function (){var statearr_12457 = state_12445;(statearr_12457[6] = inst_12438);
return statearr_12457;
})();var statearr_12458_12472 = state_12445__$1;(statearr_12458_12472[2] = null);
(statearr_12458_12472[1] = 2);
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
});return ((function (switch__8222__auto__){
return (function() {
var state_machine__8223__auto__ = null;
var state_machine__8223__auto____0 = (function (){var statearr_12460 = (new Array(7));(statearr_12460[0] = state_machine__8223__auto__);
(statearr_12460[1] = 1);
return statearr_12460;
});
var state_machine__8223__auto____1 = (function (state_12445){while(true){
var result__8224__auto__ = switch__8222__auto__.call(null,state_12445);if(cljs.core.keyword_identical_QMARK_.call(null,result__8224__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8224__auto__;
}
break;
}
});
state_machine__8223__auto__ = function(state_12445){
switch(arguments.length){
case 0:
return state_machine__8223__auto____0.call(this);
case 1:
return state_machine__8223__auto____1.call(this,state_12445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8223__auto____0;
state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8223__auto____1;
return state_machine__8223__auto__;
})()
;})(switch__8222__auto__))
})();var state__8286__auto__ = (function (){var statearr_12461 = f__8285__auto__.call(null);(statearr_12461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8284__auto___12462);
return statearr_12461;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8286__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__8284__auto___12551 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8285__auto__ = (function (){var switch__8222__auto__ = (function (state_12533){var state_val_12534 = (state_12533[1]);if((state_val_12534 === 1))
{var state_12533__$1 = state_12533;var statearr_12535_12552 = state_12533__$1;(statearr_12535_12552[2] = null);
(statearr_12535_12552[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12534 === 2))
{var state_12533__$1 = state_12533;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12533__$1,4,ch);
} else
{if((state_val_12534 === 3))
{var inst_12531 = (state_12533[2]);var state_12533__$1 = state_12533;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12533__$1,inst_12531);
} else
{if((state_val_12534 === 4))
{var inst_12514 = (state_12533[5]);var inst_12514__$1 = (state_12533[2]);var inst_12515 = (inst_12514__$1 == null);var state_12533__$1 = (function (){var statearr_12536 = state_12533;(statearr_12536[5] = inst_12514__$1);
return statearr_12536;
})();if(cljs.core.truth_(inst_12515))
{var statearr_12537_12553 = state_12533__$1;(statearr_12537_12553[1] = 5);
} else
{var statearr_12538_12554 = state_12533__$1;(statearr_12538_12554[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12534 === 5))
{var inst_12517 = cljs.core.async.close_BANG_.call(null,tc);var inst_12518 = cljs.core.async.close_BANG_.call(null,fc);var state_12533__$1 = (function (){var statearr_12539 = state_12533;(statearr_12539[6] = inst_12517);
return statearr_12539;
})();var statearr_12540_12555 = state_12533__$1;(statearr_12540_12555[2] = inst_12518);
(statearr_12540_12555[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12534 === 6))
{var inst_12514 = (state_12533[5]);var inst_12520 = p.call(null,inst_12514);var state_12533__$1 = state_12533;if(cljs.core.truth_(inst_12520))
{var statearr_12541_12556 = state_12533__$1;(statearr_12541_12556[1] = 9);
} else
{var statearr_12542_12557 = state_12533__$1;(statearr_12542_12557[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12534 === 7))
{var inst_12529 = (state_12533[2]);var state_12533__$1 = state_12533;var statearr_12543_12558 = state_12533__$1;(statearr_12543_12558[2] = inst_12529);
(statearr_12543_12558[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12534 === 8))
{var inst_12526 = (state_12533[2]);var state_12533__$1 = (function (){var statearr_12544 = state_12533;(statearr_12544[7] = inst_12526);
return statearr_12544;
})();var statearr_12545_12559 = state_12533__$1;(statearr_12545_12559[2] = null);
(statearr_12545_12559[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12534 === 9))
{var state_12533__$1 = state_12533;var statearr_12546_12560 = state_12533__$1;(statearr_12546_12560[2] = tc);
(statearr_12546_12560[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12534 === 10))
{var state_12533__$1 = state_12533;var statearr_12547_12561 = state_12533__$1;(statearr_12547_12561[2] = fc);
(statearr_12547_12561[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12534 === 11))
{var inst_12514 = (state_12533[5]);var inst_12524 = (state_12533[2]);var state_12533__$1 = state_12533;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12533__$1,8,inst_12524,inst_12514);
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
});return ((function (switch__8222__auto__){
return (function() {
var state_machine__8223__auto__ = null;
var state_machine__8223__auto____0 = (function (){var statearr_12549 = (new Array(8));(statearr_12549[0] = state_machine__8223__auto__);
(statearr_12549[1] = 1);
return statearr_12549;
});
var state_machine__8223__auto____1 = (function (state_12533){while(true){
var result__8224__auto__ = switch__8222__auto__.call(null,state_12533);if(cljs.core.keyword_identical_QMARK_.call(null,result__8224__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8224__auto__;
}
break;
}
});
state_machine__8223__auto__ = function(state_12533){
switch(arguments.length){
case 0:
return state_machine__8223__auto____0.call(this);
case 1:
return state_machine__8223__auto____1.call(this,state_12533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8223__auto____0;
state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8223__auto____1;
return state_machine__8223__auto__;
})()
;})(switch__8222__auto__))
})();var state__8286__auto__ = (function (){var statearr_12550 = f__8285__auto__.call(null);(statearr_12550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8284__auto___12551);
return statearr_12550;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8286__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__8284__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8285__auto__ = (function (){var switch__8222__auto__ = (function (state_12604){var state_val_12605 = (state_12604[1]);if((state_val_12605 === 7))
{var inst_12600 = (state_12604[2]);var state_12604__$1 = state_12604;var statearr_12606_12618 = state_12604__$1;(statearr_12606_12618[2] = inst_12600);
(statearr_12606_12618[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12605 === 6))
{var inst_12593 = (state_12604[5]);var inst_12590 = (state_12604[6]);var inst_12597 = f.call(null,inst_12590,inst_12593);var inst_12590__$1 = inst_12597;var state_12604__$1 = (function (){var statearr_12607 = state_12604;(statearr_12607[6] = inst_12590__$1);
return statearr_12607;
})();var statearr_12608_12619 = state_12604__$1;(statearr_12608_12619[2] = null);
(statearr_12608_12619[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12605 === 5))
{var inst_12590 = (state_12604[6]);var state_12604__$1 = state_12604;var statearr_12609_12620 = state_12604__$1;(statearr_12609_12620[2] = inst_12590);
(statearr_12609_12620[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12605 === 4))
{var inst_12593 = (state_12604[5]);var inst_12593__$1 = (state_12604[2]);var inst_12594 = (inst_12593__$1 == null);var state_12604__$1 = (function (){var statearr_12610 = state_12604;(statearr_12610[5] = inst_12593__$1);
return statearr_12610;
})();if(cljs.core.truth_(inst_12594))
{var statearr_12611_12621 = state_12604__$1;(statearr_12611_12621[1] = 5);
} else
{var statearr_12612_12622 = state_12604__$1;(statearr_12612_12622[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12605 === 3))
{var inst_12602 = (state_12604[2]);var state_12604__$1 = state_12604;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12604__$1,inst_12602);
} else
{if((state_val_12605 === 2))
{var state_12604__$1 = state_12604;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12604__$1,4,ch);
} else
{if((state_val_12605 === 1))
{var inst_12590 = init;var state_12604__$1 = (function (){var statearr_12613 = state_12604;(statearr_12613[6] = inst_12590);
return statearr_12613;
})();var statearr_12614_12623 = state_12604__$1;(statearr_12614_12623[2] = null);
(statearr_12614_12623[1] = 2);
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
});return ((function (switch__8222__auto__){
return (function() {
var state_machine__8223__auto__ = null;
var state_machine__8223__auto____0 = (function (){var statearr_12616 = (new Array(7));(statearr_12616[0] = state_machine__8223__auto__);
(statearr_12616[1] = 1);
return statearr_12616;
});
var state_machine__8223__auto____1 = (function (state_12604){while(true){
var result__8224__auto__ = switch__8222__auto__.call(null,state_12604);if(cljs.core.keyword_identical_QMARK_.call(null,result__8224__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8224__auto__;
}
break;
}
});
state_machine__8223__auto__ = function(state_12604){
switch(arguments.length){
case 0:
return state_machine__8223__auto____0.call(this);
case 1:
return state_machine__8223__auto____1.call(this,state_12604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8223__auto____0;
state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8223__auto____1;
return state_machine__8223__auto__;
})()
;})(switch__8222__auto__))
})();var state__8286__auto__ = (function (){var statearr_12617 = f__8285__auto__.call(null);(statearr_12617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8284__auto__);
return statearr_12617;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8286__auto__);
}));
return c__8284__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__8284__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8285__auto__ = (function (){var switch__8222__auto__ = (function (state_12681){var state_val_12682 = (state_12681[1]);if((state_val_12682 === 1))
{var inst_12661 = cljs.core.seq.call(null,coll);var inst_12662 = inst_12661;var state_12681__$1 = (function (){var statearr_12683 = state_12681;(statearr_12683[5] = inst_12662);
return statearr_12683;
})();var statearr_12684_12698 = state_12681__$1;(statearr_12684_12698[2] = null);
(statearr_12684_12698[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 2))
{var inst_12662 = (state_12681[5]);var state_12681__$1 = state_12681;if(cljs.core.truth_(inst_12662))
{var statearr_12685_12699 = state_12681__$1;(statearr_12685_12699[1] = 4);
} else
{var statearr_12686_12700 = state_12681__$1;(statearr_12686_12700[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 3))
{var inst_12679 = (state_12681[2]);var state_12681__$1 = state_12681;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12681__$1,inst_12679);
} else
{if((state_val_12682 === 4))
{var inst_12662 = (state_12681[5]);var inst_12665 = cljs.core.first.call(null,inst_12662);var state_12681__$1 = state_12681;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12681__$1,7,ch,inst_12665);
} else
{if((state_val_12682 === 5))
{var state_12681__$1 = state_12681;if(cljs.core.truth_(close_QMARK_))
{var statearr_12687_12701 = state_12681__$1;(statearr_12687_12701[1] = 8);
} else
{var statearr_12688_12702 = state_12681__$1;(statearr_12688_12702[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 6))
{var inst_12677 = (state_12681[2]);var state_12681__$1 = state_12681;var statearr_12689_12703 = state_12681__$1;(statearr_12689_12703[2] = inst_12677);
(statearr_12689_12703[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 7))
{var inst_12662 = (state_12681[5]);var inst_12667 = (state_12681[2]);var inst_12668 = cljs.core.next.call(null,inst_12662);var inst_12662__$1 = inst_12668;var state_12681__$1 = (function (){var statearr_12690 = state_12681;(statearr_12690[6] = inst_12667);
(statearr_12690[5] = inst_12662__$1);
return statearr_12690;
})();var statearr_12691_12704 = state_12681__$1;(statearr_12691_12704[2] = null);
(statearr_12691_12704[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 8))
{var inst_12672 = cljs.core.async.close_BANG_.call(null,ch);var state_12681__$1 = state_12681;var statearr_12692_12705 = state_12681__$1;(statearr_12692_12705[2] = inst_12672);
(statearr_12692_12705[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 9))
{var state_12681__$1 = state_12681;var statearr_12693_12706 = state_12681__$1;(statearr_12693_12706[2] = null);
(statearr_12693_12706[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 10))
{var inst_12675 = (state_12681[2]);var state_12681__$1 = state_12681;var statearr_12694_12707 = state_12681__$1;(statearr_12694_12707[2] = inst_12675);
(statearr_12694_12707[1] = 6);
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
});return ((function (switch__8222__auto__){
return (function() {
var state_machine__8223__auto__ = null;
var state_machine__8223__auto____0 = (function (){var statearr_12696 = (new Array(7));(statearr_12696[0] = state_machine__8223__auto__);
(statearr_12696[1] = 1);
return statearr_12696;
});
var state_machine__8223__auto____1 = (function (state_12681){while(true){
var result__8224__auto__ = switch__8222__auto__.call(null,state_12681);if(cljs.core.keyword_identical_QMARK_.call(null,result__8224__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8224__auto__;
}
break;
}
});
state_machine__8223__auto__ = function(state_12681){
switch(arguments.length){
case 0:
return state_machine__8223__auto____0.call(this);
case 1:
return state_machine__8223__auto____1.call(this,state_12681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8223__auto____0;
state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8223__auto____1;
return state_machine__8223__auto__;
})()
;})(switch__8222__auto__))
})();var state__8286__auto__ = (function (){var statearr_12697 = f__8285__auto__.call(null);(statearr_12697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8284__auto__);
return statearr_12697;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8286__auto__);
}));
return c__8284__auto__;
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
{var x__6807__auto__ = (((_ == null))?null:_);return (function (){var or__3943__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6807__auto__)]);if(or__3943__auto__)
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
{var x__6807__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6807__auto__)]);if(or__3943__auto__)
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
{var x__6807__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6807__auto__)]);if(or__3943__auto__)
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
{var x__6807__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6807__auto__)]);if(or__3943__auto__)
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12920 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12920');

/**
* @constructor
*/
cljs.core.async.t12920 = (function (cs,ch,mult,meta12921){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12921 = meta12921;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12920.cljs$lang$type = true;
cljs.core.async.t12920.cljs$lang$ctorStr = "cljs.core.async/t12920";
cljs.core.async.t12920.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6741__auto__,writer__6742__auto__,opt__6743__auto__){return cljs.core._write.call(null,writer__6742__auto__,"cljs.core.async/t12920");
});})(cs))
;
cljs.core.async.t12920.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12920.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12920.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12920.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12920.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12920.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
return self__.ch;
});})(cs))
;
cljs.core.async.t12920.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12922){var self__ = this;
return self__.meta12921;
});})(cs))
;
cljs.core.async.t12920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12922,meta12921__$1){var self__ = this;
return (new cljs.core.async.t12920(self__.cs,self__.ch,self__.mult,meta12921__$1));
});})(cs))
;
cljs.core.async.__GT_t12920 = ((function (cs){
return (function __GT_t12920(cs__$1,ch__$1,mult__$1,meta12921){return (new cljs.core.async.t12920(cs__$1,ch__$1,mult__$1,meta12921));
});})(cs))
;
}
return (new cljs.core.async.t12920(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__8284__auto___13132 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8285__auto__ = (function (){var switch__8222__auto__ = (function (state_13050){var state_val_13051 = (state_13050[1]);if((state_val_13051 === 32))
{try{var inst_13001 = (state_13050[5]);var inst_12925 = (state_13050[6]);var inst_13007 = cljs.core.async.put_BANG_.call(null,inst_13001,inst_12925,done);var state_13050__$1 = state_13050;var statearr_13054_13133 = state_13050__$1;(statearr_13054_13133[2] = inst_13007);
(statearr_13054_13133[1] = 30);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e13052){if((e13052 instanceof Object))
{var ex__8216__auto__ = e13052;var statearr_13053_13134 = state_13050;(statearr_13053_13134[1] = 31);
(statearr_13053_13134[2] = ex__8216__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13052;
} else
{return null;
}
}
}} else
{if((state_val_13051 === 1))
{var state_13050__$1 = state_13050;var statearr_13055_13135 = state_13050__$1;(statearr_13055_13135[2] = null);
(statearr_13055_13135[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13051 === 33))
{var inst_13013 = (state_13050[7]);var inst_13015 = cljs.core.chunked_seq_QMARK_.call(null,inst_13013);var state_13050__$1 = state_13050;if(inst_13015)
{var statearr_13056_13136 = state_13050__$1;(statearr_13056_13136[1] = 36);
} else
{var statearr_13057_13137 = state_13050__$1;(statearr_13057_13137[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13051 === 2))
{var state_13050__$1 = state_13050;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13050__$1,4,ch);
} else
{if((state_val_13051 === 34))
{var state_13050__$1 = state_13050;var statearr_13058_13138 = state_13050__$1;(statearr_13058_13138[2] = null);
(statearr_13058_13138[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13051 === 3))
{var inst_13048 = (state_13050[2]);var state_13050__$1 = state_13050;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13050__$1,inst_13048);
} else
{if((state_val_13051 === 35))
{var inst_13037 = (state_13050[2]);var state_13050__$1 = state_13050;var statearr_13059_13139 = state_13050__$1;(statearr_13059_13139[2] = inst_13037);
(statearr_13059_13139[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13051 === 4))
{var inst_12925 = (state_13050[6]);var inst_12925__$1 = (state_13050[2]);var inst_12926 = (inst_12925__$1 == null);var state_13050__$1 = (function (){var statearr_13060 = state_13050;(statearr_13060[6] = inst_12925__$1);
return statearr_13060;
})();if(cljs.core.truth_(inst_12926))
{var statearr_13061_13140 = state_13050__$1;(statearr_13061_13140[1] = 5);
} else
{var statearr_13062_13141 = state_13050__$1;(statearr_13062_13141[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13051 === 36))
{var inst_13013 = (state_13050[7]);var inst_13017 = cljs.core.chunk_first.call(null,inst_13013);var inst_13018 = cljs.core.chunk_rest.call(null,inst_13013);var inst_13019 = cljs.core.count.call(null,inst_13017);var inst_12993 = inst_13018;var inst_12994 = inst_13017;var inst_12995 = inst_13019;var inst_12996 = 0;var state_13050__$1 = (function (){var statearr_13063 = state_13050;(statearr_13063[8] = inst_12995);
(statearr_13063[9] = inst_12994);
(statearr_13063[10] = inst_12993);
(statearr_13063[11] = inst_12996);
return statearr_13063;
})();var statearr_13064_13142 = state_13050__$1;(statearr_13064_13142[2] = null);
(statearr_13064_13142[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13051 === 5))
{var inst_12932 = cljs.core.deref.call(null,cs);var inst_12933 = cljs.core.seq.call(null,inst_12932);var inst_12934 = inst_12933;var inst_12935 = null;var inst_12936 = 0;var inst_12937 = 0;var state_13050__$1 = (function (){var statearr_13065 = state_13050;(statearr_13065[12] = inst_12935);
(statearr_13065[13] = inst_12934);
(statearr_13065[14] = inst_12937);
(statearr_13065[15] = inst_12936);
return statearr_13065;
})();var statearr_13066_13143 = state_13050__$1;(statearr_13066_13143[2] = null);
(statearr_13066_13143[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13051 === 37))
{var inst_13013 = (state_13050[7]);var inst_13022 = cljs.core.first.call(null,inst_13013);var state_13050__$1 = (function (){var statearr_13067 = state_13050;(statearr_13067[16] = inst_13022);
return statearr_13067;
})();var statearr_13068_13144 = state_13050__$1;(statearr_13068_13144[2] = null);
(statearr_13068_13144[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13051 === 6))
{var inst_12984 = cljs.core.deref.call(null,cs);var inst_12985 = cljs.core.keys.call(null,inst_12984);var inst_12986 = cljs.core.count.call(null,inst_12985);var inst_12987 = cljs.core.reset_BANG_.call(null,dctr,inst_12986);var inst_12992 = cljs.core.seq.call(null,inst_12985);var inst_12993 = inst_12992;var inst_12994 = null;var inst_12995 = 0;var inst_12996 = 0;var state_13050__$1 = (function (){var statearr_13069 = state_13050;(statearr_13069[8] = inst_12995);
(statearr_13069[9] = inst_12994);
(statearr_13069[10] = inst_12993);
(statearr_13069[17] = inst_12987);
(statearr_13069[11] = inst_12996);
return statearr_13069;
})();var statearr_13070_13145 = state_13050__$1;(statearr_13070_13145[2] = null);
(statearr_13070_13145[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13051 === 38))
{var inst_13034 = (state_13050[2]);var state_13050__$1 = state_13050;var statearr_13071_13146 = state_13050__$1;(statearr_13071_13146[2] = inst_13034);
(statearr_13071_13146[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13051 === 7))
{var inst_13046 = (state_13050[2]);var state_13050__$1 = state_13050;var statearr_13072_13147 = state_13050__$1;(statearr_13072_13147[2] = inst_13046);
(statearr_13072_13147[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13051 === 39))
{var inst_13013 = (state_13050[7]);var inst_13030 = (state_13050[2]);var inst_13031 = cljs.core.next.call(null,inst_13013);var inst_12993 = inst_13031;var inst_12994 = null;var inst_12995 = 0;var inst_12996 = 0;var state_13050__$1 = (function (){var statearr_13073 = state_13050;(statearr_13073[8] = inst_12995);
(statearr_13073[9] = inst_12994);
(statearr_13073[10] = inst_12993);
(statearr_13073[18] = inst_13030);
(statearr_13073[11] = inst_12996);
return statearr_13073;
})();var statearr_13074_13148 = state_13050__$1;(statearr_13074_13148[2] = null);
(statearr_13074_13148[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13051 === 8))
{var inst_12937 = (state_13050[14]);var inst_12936 = (state_13050[15]);var inst_12939 = (inst_12937 < inst_12936);var inst_12940 = inst_12939;var state_13050__$1 = state_13050;if(cljs.core.truth_(inst_12940))
{var statearr_13075_13149 = state_13050__$1;(statearr_13075_13149[1] = 10);
} else
{var statearr_13076_13150 = state_13050__$1;(statearr_13076_13150[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13051 === 40))
{var inst_13022 = (state_13050[16]);var inst_13023 = (state_13050[2]);var inst_13024 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13025 = cljs.core.async.untap_STAR_.call(null,m,inst_13022);var state_13050__$1 = (function (){var statearr_13077 = state_13050;(statearr_13077[19] = inst_13023);
(statearr_13077[20] = inst_13024);
return statearr_13077;
})();var statearr_13078_13151 = state_13050__$1;(statearr_13078_13151[2] = inst_13025);
(statearr_13078_13151[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13051 === 9))
{var inst_12982 = (state_13050[2]);var state_13050__$1 = state_13050;var statearr_13079_13152 = state_13050__$1;(statearr_13079_13152[2] = inst_12982);
(statearr_13079_13152[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13051 === 41))
{try{var inst_12925 = (state_13050[6]);var inst_13022 = (state_13050[16]);var inst_13028 = cljs.core.async.put_BANG_.call(null,inst_13022,inst_12925,done);var state_13050__$1 = state_13050;var statearr_13082_13153 = state_13050__$1;(statearr_13082_13153[2] = inst_13028);
(statearr_13082_13153[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e13080){if((e13080 instanceof Object))
{var ex__8216__auto__ = e13080;var statearr_13081_13154 = state_13050;(statearr_13081_13154[1] = 40);
(statearr_13081_13154[2] = ex__8216__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13080;
} else
{return null;
}
}
}} else
{if((state_val_13051 === 10))
{var inst_12935 = (state_13050[12]);var inst_12937 = (state_13050[14]);var inst_12943 = cljs.core._nth.call(null,inst_12935,inst_12937);var inst_12944 = cljs.core.nth.call(null,inst_12943,0,null);var inst_12945 = cljs.core.nth.call(null,inst_12943,1,null);var state_13050__$1 = (function (){var statearr_13083 = state_13050;(statearr_13083[21] = inst_12944);
return statearr_13083;
})();if(cljs.core.truth_(inst_12945))
{var statearr_13084_13155 = state_13050__$1;(statearr_13084_13155[1] = 13);
} else
{var statearr_13085_13156 = state_13050__$1;(statearr_13085_13156[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13051 === 42))
{var inst_13043 = (state_13050[2]);var state_13050__$1 = (function (){var statearr_13086 = state_13050;(statearr_13086[22] = inst_13043);
return statearr_13086;
})();var statearr_13087_13157 = state_13050__$1;(statearr_13087_13157[2] = null);
(statearr_13087_13157[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13051 === 11))
{var inst_12934 = (state_13050[13]);var inst_12954 = (state_13050[23]);var inst_12954__$1 = cljs.core.seq.call(null,inst_12934);var state_13050__$1 = (function (){var statearr_13088 = state_13050;(statearr_13088[23] = inst_12954__$1);
return statearr_13088;
})();if(inst_12954__$1)
{var statearr_13089_13158 = state_13050__$1;(statearr_13089_13158[1] = 16);
} else
{var statearr_13090_13159 = state_13050__$1;(statearr_13090_13159[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13051 === 12))
{var inst_12980 = (state_13050[2]);var state_13050__$1 = state_13050;var statearr_13091_13160 = state_13050__$1;(statearr_13091_13160[2] = inst_12980);
(statearr_13091_13160[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13051 === 13))
{var inst_12944 = (state_13050[21]);var inst_12947 = cljs.core.async.close_BANG_.call(null,inst_12944);var state_13050__$1 = state_13050;var statearr_13095_13161 = state_13050__$1;(statearr_13095_13161[2] = inst_12947);
(statearr_13095_13161[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13051 === 14))
{var state_13050__$1 = state_13050;var statearr_13096_13162 = state_13050__$1;(statearr_13096_13162[2] = null);
(statearr_13096_13162[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13051 === 15))
{var inst_12935 = (state_13050[12]);var inst_12934 = (state_13050[13]);var inst_12937 = (state_13050[14]);var inst_12936 = (state_13050[15]);var inst_12950 = (state_13050[2]);var inst_12951 = (inst_12937 + 1);var tmp13092 = inst_12935;var tmp13093 = inst_12934;var tmp13094 = inst_12936;var inst_12934__$1 = tmp13093;var inst_12935__$1 = tmp13092;var inst_12936__$1 = tmp13094;var inst_12937__$1 = inst_12951;var state_13050__$1 = (function (){var statearr_13097 = state_13050;(statearr_13097[24] = inst_12950);
(statearr_13097[12] = inst_12935__$1);
(statearr_13097[13] = inst_12934__$1);
(statearr_13097[14] = inst_12937__$1);
(statearr_13097[15] = inst_12936__$1);
return statearr_13097;
})();var statearr_13098_13163 = state_13050__$1;(statearr_13098_13163[2] = null);
(statearr_13098_13163[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13051 === 16))
{var inst_12954 = (state_13050[23]);var inst_12956 = cljs.core.chunked_seq_QMARK_.call(null,inst_12954);var state_13050__$1 = state_13050;if(inst_12956)
{var statearr_13099_13164 = state_13050__$1;(statearr_13099_13164[1] = 19);
} else
{var statearr_13100_13165 = state_13050__$1;(statearr_13100_13165[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13051 === 17))
{var state_13050__$1 = state_13050;var statearr_13101_13166 = state_13050__$1;(statearr_13101_13166[2] = null);
(statearr_13101_13166[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13051 === 18))
{var inst_12978 = (state_13050[2]);var state_13050__$1 = state_13050;var statearr_13102_13167 = state_13050__$1;(statearr_13102_13167[2] = inst_12978);
(statearr_13102_13167[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13051 === 19))
{var inst_12954 = (state_13050[23]);var inst_12958 = cljs.core.chunk_first.call(null,inst_12954);var inst_12959 = cljs.core.chunk_rest.call(null,inst_12954);var inst_12960 = cljs.core.count.call(null,inst_12958);var inst_12934 = inst_12959;var inst_12935 = inst_12958;var inst_12936 = inst_12960;var inst_12937 = 0;var state_13050__$1 = (function (){var statearr_13103 = state_13050;(statearr_13103[12] = inst_12935);
(statearr_13103[13] = inst_12934);
(statearr_13103[14] = inst_12937);
(statearr_13103[15] = inst_12936);
return statearr_13103;
})();var statearr_13104_13168 = state_13050__$1;(statearr_13104_13168[2] = null);
(statearr_13104_13168[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13051 === 20))
{var inst_12954 = (state_13050[23]);var inst_12964 = cljs.core.first.call(null,inst_12954);var inst_12965 = cljs.core.nth.call(null,inst_12964,0,null);var inst_12966 = cljs.core.nth.call(null,inst_12964,1,null);var state_13050__$1 = (function (){var statearr_13105 = state_13050;(statearr_13105[25] = inst_12965);
return statearr_13105;
})();if(cljs.core.truth_(inst_12966))
{var statearr_13106_13169 = state_13050__$1;(statearr_13106_13169[1] = 22);
} else
{var statearr_13107_13170 = state_13050__$1;(statearr_13107_13170[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13051 === 21))
{var inst_12975 = (state_13050[2]);var state_13050__$1 = state_13050;var statearr_13108_13171 = state_13050__$1;(statearr_13108_13171[2] = inst_12975);
(statearr_13108_13171[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13051 === 22))
{var inst_12965 = (state_13050[25]);var inst_12968 = cljs.core.async.close_BANG_.call(null,inst_12965);var state_13050__$1 = state_13050;var statearr_13109_13172 = state_13050__$1;(statearr_13109_13172[2] = inst_12968);
(statearr_13109_13172[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13051 === 23))
{var state_13050__$1 = state_13050;var statearr_13110_13173 = state_13050__$1;(statearr_13110_13173[2] = null);
(statearr_13110_13173[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13051 === 24))
{var inst_12954 = (state_13050[23]);var inst_12971 = (state_13050[2]);var inst_12972 = cljs.core.next.call(null,inst_12954);var inst_12934 = inst_12972;var inst_12935 = null;var inst_12936 = 0;var inst_12937 = 0;var state_13050__$1 = (function (){var statearr_13111 = state_13050;(statearr_13111[12] = inst_12935);
(statearr_13111[13] = inst_12934);
(statearr_13111[14] = inst_12937);
(statearr_13111[15] = inst_12936);
(statearr_13111[26] = inst_12971);
return statearr_13111;
})();var statearr_13112_13174 = state_13050__$1;(statearr_13112_13174[2] = null);
(statearr_13112_13174[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13051 === 25))
{var inst_12995 = (state_13050[8]);var inst_12996 = (state_13050[11]);var inst_12998 = (inst_12996 < inst_12995);var inst_12999 = inst_12998;var state_13050__$1 = state_13050;if(cljs.core.truth_(inst_12999))
{var statearr_13113_13175 = state_13050__$1;(statearr_13113_13175[1] = 27);
} else
{var statearr_13114_13176 = state_13050__$1;(statearr_13114_13176[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13051 === 26))
{var inst_13041 = (state_13050[2]);var state_13050__$1 = (function (){var statearr_13115 = state_13050;(statearr_13115[27] = inst_13041);
return statearr_13115;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13050__$1,42,dchan);
} else
{if((state_val_13051 === 27))
{var inst_12994 = (state_13050[9]);var inst_12996 = (state_13050[11]);var inst_13001 = cljs.core._nth.call(null,inst_12994,inst_12996);var state_13050__$1 = (function (){var statearr_13116 = state_13050;(statearr_13116[5] = inst_13001);
return statearr_13116;
})();var statearr_13117_13177 = state_13050__$1;(statearr_13117_13177[2] = null);
(statearr_13117_13177[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13051 === 28))
{var inst_12993 = (state_13050[10]);var inst_13013 = (state_13050[7]);var inst_13013__$1 = cljs.core.seq.call(null,inst_12993);var state_13050__$1 = (function (){var statearr_13121 = state_13050;(statearr_13121[7] = inst_13013__$1);
return statearr_13121;
})();if(inst_13013__$1)
{var statearr_13122_13178 = state_13050__$1;(statearr_13122_13178[1] = 33);
} else
{var statearr_13123_13179 = state_13050__$1;(statearr_13123_13179[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13051 === 29))
{var inst_13039 = (state_13050[2]);var state_13050__$1 = state_13050;var statearr_13124_13180 = state_13050__$1;(statearr_13124_13180[2] = inst_13039);
(statearr_13124_13180[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13051 === 30))
{var inst_12995 = (state_13050[8]);var inst_12994 = (state_13050[9]);var inst_12993 = (state_13050[10]);var inst_12996 = (state_13050[11]);var inst_13009 = (state_13050[2]);var inst_13010 = (inst_12996 + 1);var tmp13118 = inst_12995;var tmp13119 = inst_12994;var tmp13120 = inst_12993;var inst_12993__$1 = tmp13120;var inst_12994__$1 = tmp13119;var inst_12995__$1 = tmp13118;var inst_12996__$1 = inst_13010;var state_13050__$1 = (function (){var statearr_13125 = state_13050;(statearr_13125[8] = inst_12995__$1);
(statearr_13125[9] = inst_12994__$1);
(statearr_13125[10] = inst_12993__$1);
(statearr_13125[11] = inst_12996__$1);
(statearr_13125[28] = inst_13009);
return statearr_13125;
})();var statearr_13126_13181 = state_13050__$1;(statearr_13126_13181[2] = null);
(statearr_13126_13181[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13051 === 31))
{var inst_13001 = (state_13050[5]);var inst_13002 = (state_13050[2]);var inst_13003 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13004 = cljs.core.async.untap_STAR_.call(null,m,inst_13001);var state_13050__$1 = (function (){var statearr_13127 = state_13050;(statearr_13127[29] = inst_13003);
(statearr_13127[30] = inst_13002);
return statearr_13127;
})();var statearr_13128_13182 = state_13050__$1;(statearr_13128_13182[2] = inst_13004);
(statearr_13128_13182[1] = 30);
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
});return ((function (switch__8222__auto__){
return (function() {
var state_machine__8223__auto__ = null;
var state_machine__8223__auto____0 = (function (){var statearr_13130 = (new Array(31));(statearr_13130[0] = state_machine__8223__auto__);
(statearr_13130[1] = 1);
return statearr_13130;
});
var state_machine__8223__auto____1 = (function (state_13050){while(true){
var result__8224__auto__ = switch__8222__auto__.call(null,state_13050);if(cljs.core.keyword_identical_QMARK_.call(null,result__8224__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8224__auto__;
}
break;
}
});
state_machine__8223__auto__ = function(state_13050){
switch(arguments.length){
case 0:
return state_machine__8223__auto____0.call(this);
case 1:
return state_machine__8223__auto____1.call(this,state_13050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8223__auto____0;
state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8223__auto____1;
return state_machine__8223__auto__;
})()
;})(switch__8222__auto__))
})();var state__8286__auto__ = (function (){var statearr_13131 = f__8285__auto__.call(null);(statearr_13131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8284__auto___13132);
return statearr_13131;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8286__auto__);
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
{var x__6807__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6807__auto__)]);if(or__3943__auto__)
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
{var x__6807__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6807__auto__)]);if(or__3943__auto__)
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
{var x__6807__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6807__auto__)]);if(or__3943__auto__)
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
{var x__6807__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6807__auto__)]);if(or__3943__auto__)
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
{var x__6807__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6807__auto__)]);if(or__3943__auto__)
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
;var m = (function (){if(typeof cljs.core.async.t13303 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t13303');

/**
* @constructor
*/
cljs.core.async.t13303 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta13304){
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
this.meta13304 = meta13304;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13303.cljs$lang$type = true;
cljs.core.async.t13303.cljs$lang$ctorStr = "cljs.core.async/t13303";
cljs.core.async.t13303.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6741__auto__,writer__6742__auto__,opt__6743__auto__){return cljs.core._write.call(null,writer__6742__auto__,"cljs.core.async/t13303");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13303.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13303.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13303.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13303.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13303.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13303.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13303.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13303.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13303.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13305){var self__ = this;
return self__.meta13304;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13305,meta13304__$1){var self__ = this;
return (new cljs.core.async.t13303(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta13304__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13303 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13303(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13304){return (new cljs.core.async.t13303(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13304));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13303(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__8284__auto___13423 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8285__auto__ = (function (){var switch__8222__auto__ = (function (state_13376){var state_val_13377 = (state_13376[1]);if((state_val_13377 === 1))
{var inst_13309 = (state_13376[5]);var inst_13309__$1 = calc_state.call(null);var inst_13310 = cljs.core.seq_QMARK_.call(null,inst_13309__$1);var state_13376__$1 = (function (){var statearr_13378 = state_13376;(statearr_13378[5] = inst_13309__$1);
return statearr_13378;
})();if(inst_13310)
{var statearr_13379_13424 = state_13376__$1;(statearr_13379_13424[1] = 2);
} else
{var statearr_13380_13425 = state_13376__$1;(statearr_13380_13425[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13377 === 2))
{var inst_13309 = (state_13376[5]);var inst_13312 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13309);var state_13376__$1 = state_13376;var statearr_13381_13426 = state_13376__$1;(statearr_13381_13426[2] = inst_13312);
(statearr_13381_13426[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13377 === 3))
{var inst_13309 = (state_13376[5]);var state_13376__$1 = state_13376;var statearr_13382_13427 = state_13376__$1;(statearr_13382_13427[2] = inst_13309);
(statearr_13382_13427[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13377 === 4))
{var inst_13309 = (state_13376[5]);var inst_13315 = (state_13376[2]);var inst_13316 = cljs.core.get.call(null,inst_13315,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13317 = cljs.core.get.call(null,inst_13315,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13318 = cljs.core.get.call(null,inst_13315,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_13319 = inst_13309;var state_13376__$1 = (function (){var statearr_13383 = state_13376;(statearr_13383[6] = inst_13316);
(statearr_13383[7] = inst_13317);
(statearr_13383[8] = inst_13318);
(statearr_13383[9] = inst_13319);
return statearr_13383;
})();var statearr_13384_13428 = state_13376__$1;(statearr_13384_13428[2] = null);
(statearr_13384_13428[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13377 === 5))
{var inst_13319 = (state_13376[9]);var inst_13322 = cljs.core.seq_QMARK_.call(null,inst_13319);var state_13376__$1 = state_13376;if(inst_13322)
{var statearr_13385_13429 = state_13376__$1;(statearr_13385_13429[1] = 7);
} else
{var statearr_13386_13430 = state_13376__$1;(statearr_13386_13430[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13377 === 6))
{var inst_13374 = (state_13376[2]);var state_13376__$1 = state_13376;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13376__$1,inst_13374);
} else
{if((state_val_13377 === 7))
{var inst_13319 = (state_13376[9]);var inst_13324 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13319);var state_13376__$1 = state_13376;var statearr_13387_13431 = state_13376__$1;(statearr_13387_13431[2] = inst_13324);
(statearr_13387_13431[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13377 === 8))
{var inst_13319 = (state_13376[9]);var state_13376__$1 = state_13376;var statearr_13388_13432 = state_13376__$1;(statearr_13388_13432[2] = inst_13319);
(statearr_13388_13432[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13377 === 9))
{var inst_13327 = (state_13376[10]);var inst_13327__$1 = (state_13376[2]);var inst_13328 = cljs.core.get.call(null,inst_13327__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13329 = cljs.core.get.call(null,inst_13327__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13330 = cljs.core.get.call(null,inst_13327__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_13376__$1 = (function (){var statearr_13389 = state_13376;(statearr_13389[11] = inst_13330);
(statearr_13389[10] = inst_13327__$1);
(statearr_13389[12] = inst_13329);
return statearr_13389;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13376__$1,10,inst_13328);
} else
{if((state_val_13377 === 10))
{var inst_13336 = (state_13376[13]);var inst_13334 = (state_13376[14]);var inst_13333 = (state_13376[2]);var inst_13334__$1 = cljs.core.nth.call(null,inst_13333,0,null);var inst_13335 = cljs.core.nth.call(null,inst_13333,1,null);var inst_13336__$1 = (inst_13334__$1 == null);var state_13376__$1 = (function (){var statearr_13390 = state_13376;(statearr_13390[13] = inst_13336__$1);
(statearr_13390[15] = inst_13335);
(statearr_13390[14] = inst_13334__$1);
return statearr_13390;
})();if(cljs.core.truth_(inst_13336__$1))
{var statearr_13391_13433 = state_13376__$1;(statearr_13391_13433[1] = 11);
} else
{var statearr_13392_13434 = state_13376__$1;(statearr_13392_13434[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13377 === 11))
{var inst_13336 = (state_13376[13]);var state_13376__$1 = state_13376;var statearr_13393_13435 = state_13376__$1;(statearr_13393_13435[2] = inst_13336);
(statearr_13393_13435[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13377 === 12))
{var inst_13335 = (state_13376[15]);var inst_13339 = cljs.core._EQ_.call(null,inst_13335,change);var state_13376__$1 = state_13376;var statearr_13394_13436 = state_13376__$1;(statearr_13394_13436[2] = inst_13339);
(statearr_13394_13436[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13377 === 13))
{var inst_13341 = (state_13376[2]);var state_13376__$1 = state_13376;if(cljs.core.truth_(inst_13341))
{var statearr_13395_13437 = state_13376__$1;(statearr_13395_13437[1] = 14);
} else
{var statearr_13396_13438 = state_13376__$1;(statearr_13396_13438[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13377 === 14))
{var inst_13334 = (state_13376[14]);var inst_13343 = (inst_13334 == null);var state_13376__$1 = state_13376;if(cljs.core.truth_(inst_13343))
{var statearr_13397_13439 = state_13376__$1;(statearr_13397_13439[1] = 17);
} else
{var statearr_13398_13440 = state_13376__$1;(statearr_13398_13440[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13377 === 15))
{var inst_13352 = (state_13376[16]);var inst_13330 = (state_13376[11]);var inst_13335 = (state_13376[15]);var inst_13352__$1 = inst_13330.call(null,inst_13335);var state_13376__$1 = (function (){var statearr_13399 = state_13376;(statearr_13399[16] = inst_13352__$1);
return statearr_13399;
})();if(cljs.core.truth_(inst_13352__$1))
{var statearr_13400_13441 = state_13376__$1;(statearr_13400_13441[1] = 20);
} else
{var statearr_13401_13442 = state_13376__$1;(statearr_13401_13442[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13377 === 16))
{var inst_13372 = (state_13376[2]);var state_13376__$1 = state_13376;var statearr_13402_13443 = state_13376__$1;(statearr_13402_13443[2] = inst_13372);
(statearr_13402_13443[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13377 === 17))
{var inst_13335 = (state_13376[15]);var inst_13345 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13335);var state_13376__$1 = state_13376;var statearr_13403_13444 = state_13376__$1;(statearr_13403_13444[2] = inst_13345);
(statearr_13403_13444[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13377 === 18))
{var state_13376__$1 = state_13376;var statearr_13404_13445 = state_13376__$1;(statearr_13404_13445[2] = null);
(statearr_13404_13445[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13377 === 19))
{var inst_13348 = (state_13376[2]);var inst_13349 = calc_state.call(null);var inst_13319 = inst_13349;var state_13376__$1 = (function (){var statearr_13405 = state_13376;(statearr_13405[17] = inst_13348);
(statearr_13405[9] = inst_13319);
return statearr_13405;
})();var statearr_13406_13446 = state_13376__$1;(statearr_13406_13446[2] = null);
(statearr_13406_13446[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13377 === 20))
{var inst_13352 = (state_13376[16]);var state_13376__$1 = state_13376;var statearr_13407_13447 = state_13376__$1;(statearr_13407_13447[2] = inst_13352);
(statearr_13407_13447[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13377 === 21))
{var inst_13355 = (state_13376[18]);var inst_13330 = (state_13376[11]);var inst_13355__$1 = cljs.core.empty_QMARK_.call(null,inst_13330);var state_13376__$1 = (function (){var statearr_13408 = state_13376;(statearr_13408[18] = inst_13355__$1);
return statearr_13408;
})();if(inst_13355__$1)
{var statearr_13409_13448 = state_13376__$1;(statearr_13409_13448[1] = 23);
} else
{var statearr_13410_13449 = state_13376__$1;(statearr_13410_13449[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13377 === 22))
{var inst_13363 = (state_13376[2]);var state_13376__$1 = state_13376;if(cljs.core.truth_(inst_13363))
{var statearr_13411_13450 = state_13376__$1;(statearr_13411_13450[1] = 26);
} else
{var statearr_13412_13451 = state_13376__$1;(statearr_13412_13451[1] = 27);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13377 === 23))
{var inst_13335 = (state_13376[15]);var inst_13329 = (state_13376[12]);var inst_13357 = inst_13329.call(null,inst_13335);var inst_13358 = cljs.core.not.call(null,inst_13357);var state_13376__$1 = state_13376;var statearr_13413_13452 = state_13376__$1;(statearr_13413_13452[2] = inst_13358);
(statearr_13413_13452[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13377 === 24))
{var inst_13355 = (state_13376[18]);var state_13376__$1 = state_13376;var statearr_13414_13453 = state_13376__$1;(statearr_13414_13453[2] = inst_13355);
(statearr_13414_13453[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13377 === 25))
{var inst_13361 = (state_13376[2]);var state_13376__$1 = state_13376;var statearr_13415_13454 = state_13376__$1;(statearr_13415_13454[2] = inst_13361);
(statearr_13415_13454[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13377 === 26))
{var inst_13334 = (state_13376[14]);var state_13376__$1 = state_13376;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13376__$1,29,out,inst_13334);
} else
{if((state_val_13377 === 27))
{var state_13376__$1 = state_13376;var statearr_13416_13455 = state_13376__$1;(statearr_13416_13455[2] = null);
(statearr_13416_13455[1] = 28);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13377 === 28))
{var inst_13327 = (state_13376[10]);var inst_13369 = (state_13376[2]);var inst_13319 = inst_13327;var state_13376__$1 = (function (){var statearr_13417 = state_13376;(statearr_13417[19] = inst_13369);
(statearr_13417[9] = inst_13319);
return statearr_13417;
})();var statearr_13418_13456 = state_13376__$1;(statearr_13418_13456[2] = null);
(statearr_13418_13456[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13377 === 29))
{var inst_13366 = (state_13376[2]);var state_13376__$1 = state_13376;var statearr_13419_13457 = state_13376__$1;(statearr_13419_13457[2] = inst_13366);
(statearr_13419_13457[1] = 28);
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
});return ((function (switch__8222__auto__){
return (function() {
var state_machine__8223__auto__ = null;
var state_machine__8223__auto____0 = (function (){var statearr_13421 = (new Array(20));(statearr_13421[0] = state_machine__8223__auto__);
(statearr_13421[1] = 1);
return statearr_13421;
});
var state_machine__8223__auto____1 = (function (state_13376){while(true){
var result__8224__auto__ = switch__8222__auto__.call(null,state_13376);if(cljs.core.keyword_identical_QMARK_.call(null,result__8224__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8224__auto__;
}
break;
}
});
state_machine__8223__auto__ = function(state_13376){
switch(arguments.length){
case 0:
return state_machine__8223__auto____0.call(this);
case 1:
return state_machine__8223__auto____1.call(this,state_13376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8223__auto____0;
state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8223__auto____1;
return state_machine__8223__auto__;
})()
;})(switch__8222__auto__))
})();var state__8286__auto__ = (function (){var statearr_13422 = f__8285__auto__.call(null);(statearr_13422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8284__auto___13423);
return statearr_13422;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8286__auto__);
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
{var x__6807__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6807__auto__)]);if(or__3943__auto__)
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
{var x__6807__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6807__auto__)]);if(or__3943__auto__)
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
{var x__6807__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6807__auto__)]);if(or__3943__auto__)
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
{var x__6807__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6807__auto__)]);if(or__3943__auto__)
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
return (function (p1__13458_SHARP_){if(cljs.core.truth_(p1__13458_SHARP_.call(null,topic)))
{return p1__13458_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13458_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3943__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13582 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t13582');

/**
* @constructor
*/
cljs.core.async.t13582 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13583){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13583 = meta13583;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13582.cljs$lang$type = true;
cljs.core.async.t13582.cljs$lang$ctorStr = "cljs.core.async/t13582";
cljs.core.async.t13582.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6741__auto__,writer__6742__auto__,opt__6743__auto__){return cljs.core._write.call(null,writer__6742__auto__,"cljs.core.async/t13582");
});})(mults,ensure_mult))
;
cljs.core.async.t13582.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13582.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13582.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13582.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13582.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13582.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13582.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13582.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13584){var self__ = this;
return self__.meta13583;
});})(mults,ensure_mult))
;
cljs.core.async.t13582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13584,meta13583__$1){var self__ = this;
return (new cljs.core.async.t13582(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13583__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13582 = ((function (mults,ensure_mult){
return (function __GT_t13582(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13583){return (new cljs.core.async.t13582(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13583));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13582(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__8284__auto___13705 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8285__auto__ = (function (){var switch__8222__auto__ = (function (state_13657){var state_val_13658 = (state_13657[1]);if((state_val_13658 === 1))
{var state_13657__$1 = state_13657;var statearr_13659_13706 = state_13657__$1;(statearr_13659_13706[2] = null);
(statearr_13659_13706[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13658 === 2))
{var state_13657__$1 = state_13657;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13657__$1,4,ch);
} else
{if((state_val_13658 === 3))
{var inst_13655 = (state_13657[2]);var state_13657__$1 = state_13657;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13657__$1,inst_13655);
} else
{if((state_val_13658 === 4))
{var inst_13587 = (state_13657[5]);var inst_13587__$1 = (state_13657[2]);var inst_13588 = (inst_13587__$1 == null);var state_13657__$1 = (function (){var statearr_13660 = state_13657;(statearr_13660[5] = inst_13587__$1);
return statearr_13660;
})();if(cljs.core.truth_(inst_13588))
{var statearr_13661_13707 = state_13657__$1;(statearr_13661_13707[1] = 5);
} else
{var statearr_13662_13708 = state_13657__$1;(statearr_13662_13708[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13658 === 5))
{var inst_13594 = cljs.core.deref.call(null,mults);var inst_13595 = cljs.core.vals.call(null,inst_13594);var inst_13596 = cljs.core.seq.call(null,inst_13595);var inst_13597 = inst_13596;var inst_13598 = null;var inst_13599 = 0;var inst_13600 = 0;var state_13657__$1 = (function (){var statearr_13663 = state_13657;(statearr_13663[6] = inst_13600);
(statearr_13663[7] = inst_13599);
(statearr_13663[8] = inst_13598);
(statearr_13663[9] = inst_13597);
return statearr_13663;
})();var statearr_13664_13709 = state_13657__$1;(statearr_13664_13709[2] = null);
(statearr_13664_13709[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13658 === 6))
{var inst_13635 = (state_13657[10]);var inst_13637 = (state_13657[11]);var inst_13587 = (state_13657[5]);var inst_13635__$1 = topic_fn.call(null,inst_13587);var inst_13636 = cljs.core.deref.call(null,mults);var inst_13637__$1 = cljs.core.get.call(null,inst_13636,inst_13635__$1);var state_13657__$1 = (function (){var statearr_13665 = state_13657;(statearr_13665[10] = inst_13635__$1);
(statearr_13665[11] = inst_13637__$1);
return statearr_13665;
})();if(cljs.core.truth_(inst_13637__$1))
{var statearr_13666_13710 = state_13657__$1;(statearr_13666_13710[1] = 19);
} else
{var statearr_13667_13711 = state_13657__$1;(statearr_13667_13711[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13658 === 7))
{var inst_13653 = (state_13657[2]);var state_13657__$1 = state_13657;var statearr_13668_13712 = state_13657__$1;(statearr_13668_13712[2] = inst_13653);
(statearr_13668_13712[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13658 === 8))
{var inst_13600 = (state_13657[6]);var inst_13599 = (state_13657[7]);var inst_13602 = (inst_13600 < inst_13599);var inst_13603 = inst_13602;var state_13657__$1 = state_13657;if(cljs.core.truth_(inst_13603))
{var statearr_13672_13713 = state_13657__$1;(statearr_13672_13713[1] = 10);
} else
{var statearr_13673_13714 = state_13657__$1;(statearr_13673_13714[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13658 === 9))
{var inst_13633 = (state_13657[2]);var state_13657__$1 = state_13657;var statearr_13674_13715 = state_13657__$1;(statearr_13674_13715[2] = inst_13633);
(statearr_13674_13715[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13658 === 10))
{var inst_13600 = (state_13657[6]);var inst_13599 = (state_13657[7]);var inst_13598 = (state_13657[8]);var inst_13597 = (state_13657[9]);var inst_13605 = cljs.core._nth.call(null,inst_13598,inst_13600);var inst_13606 = cljs.core.async.muxch_STAR_.call(null,inst_13605);var inst_13607 = cljs.core.async.close_BANG_.call(null,inst_13606);var inst_13608 = (inst_13600 + 1);var tmp13669 = inst_13599;var tmp13670 = inst_13598;var tmp13671 = inst_13597;var inst_13597__$1 = tmp13671;var inst_13598__$1 = tmp13670;var inst_13599__$1 = tmp13669;var inst_13600__$1 = inst_13608;var state_13657__$1 = (function (){var statearr_13675 = state_13657;(statearr_13675[12] = inst_13607);
(statearr_13675[6] = inst_13600__$1);
(statearr_13675[7] = inst_13599__$1);
(statearr_13675[8] = inst_13598__$1);
(statearr_13675[9] = inst_13597__$1);
return statearr_13675;
})();var statearr_13676_13716 = state_13657__$1;(statearr_13676_13716[2] = null);
(statearr_13676_13716[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13658 === 11))
{var inst_13597 = (state_13657[9]);var inst_13611 = (state_13657[13]);var inst_13611__$1 = cljs.core.seq.call(null,inst_13597);var state_13657__$1 = (function (){var statearr_13677 = state_13657;(statearr_13677[13] = inst_13611__$1);
return statearr_13677;
})();if(inst_13611__$1)
{var statearr_13678_13717 = state_13657__$1;(statearr_13678_13717[1] = 13);
} else
{var statearr_13679_13718 = state_13657__$1;(statearr_13679_13718[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13658 === 12))
{var inst_13631 = (state_13657[2]);var state_13657__$1 = state_13657;var statearr_13680_13719 = state_13657__$1;(statearr_13680_13719[2] = inst_13631);
(statearr_13680_13719[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13658 === 13))
{var inst_13611 = (state_13657[13]);var inst_13613 = cljs.core.chunked_seq_QMARK_.call(null,inst_13611);var state_13657__$1 = state_13657;if(inst_13613)
{var statearr_13681_13720 = state_13657__$1;(statearr_13681_13720[1] = 16);
} else
{var statearr_13682_13721 = state_13657__$1;(statearr_13682_13721[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13658 === 14))
{var state_13657__$1 = state_13657;var statearr_13683_13722 = state_13657__$1;(statearr_13683_13722[2] = null);
(statearr_13683_13722[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13658 === 15))
{var inst_13629 = (state_13657[2]);var state_13657__$1 = state_13657;var statearr_13684_13723 = state_13657__$1;(statearr_13684_13723[2] = inst_13629);
(statearr_13684_13723[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13658 === 16))
{var inst_13611 = (state_13657[13]);var inst_13615 = cljs.core.chunk_first.call(null,inst_13611);var inst_13616 = cljs.core.chunk_rest.call(null,inst_13611);var inst_13617 = cljs.core.count.call(null,inst_13615);var inst_13597 = inst_13616;var inst_13598 = inst_13615;var inst_13599 = inst_13617;var inst_13600 = 0;var state_13657__$1 = (function (){var statearr_13685 = state_13657;(statearr_13685[6] = inst_13600);
(statearr_13685[7] = inst_13599);
(statearr_13685[8] = inst_13598);
(statearr_13685[9] = inst_13597);
return statearr_13685;
})();var statearr_13686_13724 = state_13657__$1;(statearr_13686_13724[2] = null);
(statearr_13686_13724[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13658 === 17))
{var inst_13611 = (state_13657[13]);var inst_13620 = cljs.core.first.call(null,inst_13611);var inst_13621 = cljs.core.async.muxch_STAR_.call(null,inst_13620);var inst_13622 = cljs.core.async.close_BANG_.call(null,inst_13621);var inst_13623 = cljs.core.next.call(null,inst_13611);var inst_13597 = inst_13623;var inst_13598 = null;var inst_13599 = 0;var inst_13600 = 0;var state_13657__$1 = (function (){var statearr_13687 = state_13657;(statearr_13687[6] = inst_13600);
(statearr_13687[7] = inst_13599);
(statearr_13687[8] = inst_13598);
(statearr_13687[9] = inst_13597);
(statearr_13687[14] = inst_13622);
return statearr_13687;
})();var statearr_13688_13725 = state_13657__$1;(statearr_13688_13725[2] = null);
(statearr_13688_13725[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13658 === 18))
{var inst_13626 = (state_13657[2]);var state_13657__$1 = state_13657;var statearr_13689_13726 = state_13657__$1;(statearr_13689_13726[2] = inst_13626);
(statearr_13689_13726[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13658 === 19))
{var state_13657__$1 = state_13657;var statearr_13690_13727 = state_13657__$1;(statearr_13690_13727[2] = null);
(statearr_13690_13727[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13658 === 20))
{var state_13657__$1 = state_13657;var statearr_13691_13728 = state_13657__$1;(statearr_13691_13728[2] = null);
(statearr_13691_13728[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13658 === 21))
{var inst_13650 = (state_13657[2]);var state_13657__$1 = (function (){var statearr_13692 = state_13657;(statearr_13692[15] = inst_13650);
return statearr_13692;
})();var statearr_13693_13729 = state_13657__$1;(statearr_13693_13729[2] = null);
(statearr_13693_13729[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13658 === 22))
{var inst_13647 = (state_13657[2]);var state_13657__$1 = state_13657;var statearr_13694_13730 = state_13657__$1;(statearr_13694_13730[2] = inst_13647);
(statearr_13694_13730[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13658 === 23))
{var inst_13635 = (state_13657[10]);var inst_13639 = (state_13657[2]);var inst_13640 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13635);var state_13657__$1 = (function (){var statearr_13695 = state_13657;(statearr_13695[16] = inst_13639);
return statearr_13695;
})();var statearr_13696_13731 = state_13657__$1;(statearr_13696_13731[2] = inst_13640);
(statearr_13696_13731[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13658 === 24))
{try{var inst_13637 = (state_13657[11]);var inst_13587 = (state_13657[5]);var inst_13643 = cljs.core.async.muxch_STAR_.call(null,inst_13637);var state_13657__$1 = state_13657;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13657__$1,25,inst_13643,inst_13587);
}catch (e13697){if((e13697 instanceof Object))
{var ex__8216__auto__ = e13697;var statearr_13698_13732 = state_13657;(statearr_13698_13732[1] = 23);
(statearr_13698_13732[2] = ex__8216__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13697;
} else
{return null;
}
}
}} else
{if((state_val_13658 === 25))
{try{var inst_13645 = (state_13657[2]);var state_13657__$1 = state_13657;var statearr_13701_13733 = state_13657__$1;(statearr_13701_13733[2] = inst_13645);
(statearr_13701_13733[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e13699){if((e13699 instanceof Object))
{var ex__8216__auto__ = e13699;var statearr_13700_13734 = state_13657;(statearr_13700_13734[1] = 23);
(statearr_13700_13734[2] = ex__8216__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13699;
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
});return ((function (switch__8222__auto__){
return (function() {
var state_machine__8223__auto__ = null;
var state_machine__8223__auto____0 = (function (){var statearr_13703 = (new Array(17));(statearr_13703[0] = state_machine__8223__auto__);
(statearr_13703[1] = 1);
return statearr_13703;
});
var state_machine__8223__auto____1 = (function (state_13657){while(true){
var result__8224__auto__ = switch__8222__auto__.call(null,state_13657);if(cljs.core.keyword_identical_QMARK_.call(null,result__8224__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8224__auto__;
}
break;
}
});
state_machine__8223__auto__ = function(state_13657){
switch(arguments.length){
case 0:
return state_machine__8223__auto____0.call(this);
case 1:
return state_machine__8223__auto____1.call(this,state_13657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8223__auto____0;
state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8223__auto____1;
return state_machine__8223__auto__;
})()
;})(switch__8222__auto__))
})();var state__8286__auto__ = (function (){var statearr_13704 = f__8285__auto__.call(null);(statearr_13704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8284__auto___13705);
return statearr_13704;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8286__auto__);
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
,cljs.core.range.call(null,cnt));var c__8284__auto___13865 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8285__auto__ = (function (){var switch__8222__auto__ = (function (state_13837){var state_val_13838 = (state_13837[1]);if((state_val_13838 === 1))
{var state_13837__$1 = state_13837;var statearr_13839_13866 = state_13837__$1;(statearr_13839_13866[2] = null);
(statearr_13839_13866[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13838 === 2))
{var inst_13801 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13802 = 0;var state_13837__$1 = (function (){var statearr_13840 = state_13837;(statearr_13840[5] = inst_13801);
(statearr_13840[6] = inst_13802);
return statearr_13840;
})();var statearr_13841_13867 = state_13837__$1;(statearr_13841_13867[2] = null);
(statearr_13841_13867[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13838 === 3))
{var inst_13835 = (state_13837[2]);var state_13837__$1 = state_13837;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13837__$1,inst_13835);
} else
{if((state_val_13838 === 4))
{var inst_13802 = (state_13837[6]);var inst_13804 = (inst_13802 < cnt);var state_13837__$1 = state_13837;if(cljs.core.truth_(inst_13804))
{var statearr_13842_13868 = state_13837__$1;(statearr_13842_13868[1] = 6);
} else
{var statearr_13843_13869 = state_13837__$1;(statearr_13843_13869[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13838 === 5))
{var inst_13821 = (state_13837[2]);var state_13837__$1 = (function (){var statearr_13844 = state_13837;(statearr_13844[7] = inst_13821);
return statearr_13844;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13837__$1,12,dchan);
} else
{if((state_val_13838 === 6))
{var state_13837__$1 = state_13837;var statearr_13845_13870 = state_13837__$1;(statearr_13845_13870[2] = null);
(statearr_13845_13870[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13838 === 7))
{var state_13837__$1 = state_13837;var statearr_13846_13871 = state_13837__$1;(statearr_13846_13871[2] = null);
(statearr_13846_13871[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13838 === 8))
{var inst_13819 = (state_13837[2]);var state_13837__$1 = state_13837;var statearr_13847_13872 = state_13837__$1;(statearr_13847_13872[2] = inst_13819);
(statearr_13847_13872[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13838 === 9))
{var inst_13802 = (state_13837[6]);var inst_13814 = (state_13837[2]);var inst_13815 = (inst_13802 + 1);var inst_13802__$1 = inst_13815;var state_13837__$1 = (function (){var statearr_13848 = state_13837;(statearr_13848[8] = inst_13814);
(statearr_13848[6] = inst_13802__$1);
return statearr_13848;
})();var statearr_13849_13873 = state_13837__$1;(statearr_13849_13873[2] = null);
(statearr_13849_13873[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13838 === 10))
{var inst_13806 = (state_13837[2]);var inst_13807 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13837__$1 = (function (){var statearr_13850 = state_13837;(statearr_13850[9] = inst_13806);
return statearr_13850;
})();var statearr_13851_13874 = state_13837__$1;(statearr_13851_13874[2] = inst_13807);
(statearr_13851_13874[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13838 === 11))
{try{var inst_13802 = (state_13837[6]);var inst_13810 = chs__$1.call(null,inst_13802);var inst_13811 = done.call(null,inst_13802);var inst_13812 = cljs.core.async.take_BANG_.call(null,inst_13810,inst_13811);var state_13837__$1 = state_13837;var statearr_13854_13875 = state_13837__$1;(statearr_13854_13875[2] = inst_13812);
(statearr_13854_13875[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e13852){if((e13852 instanceof Object))
{var ex__8216__auto__ = e13852;var statearr_13853_13876 = state_13837;(statearr_13853_13876[1] = 10);
(statearr_13853_13876[2] = ex__8216__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13852;
} else
{return null;
}
}
}} else
{if((state_val_13838 === 12))
{var inst_13823 = (state_13837[10]);var inst_13823__$1 = (state_13837[2]);var inst_13824 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13823__$1);var state_13837__$1 = (function (){var statearr_13855 = state_13837;(statearr_13855[10] = inst_13823__$1);
return statearr_13855;
})();if(cljs.core.truth_(inst_13824))
{var statearr_13856_13877 = state_13837__$1;(statearr_13856_13877[1] = 13);
} else
{var statearr_13857_13878 = state_13837__$1;(statearr_13857_13878[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13838 === 13))
{var inst_13826 = cljs.core.async.close_BANG_.call(null,out);var state_13837__$1 = state_13837;var statearr_13858_13879 = state_13837__$1;(statearr_13858_13879[2] = inst_13826);
(statearr_13858_13879[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13838 === 14))
{var inst_13823 = (state_13837[10]);var inst_13828 = cljs.core.apply.call(null,f,inst_13823);var state_13837__$1 = state_13837;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13837__$1,16,out,inst_13828);
} else
{if((state_val_13838 === 15))
{var inst_13833 = (state_13837[2]);var state_13837__$1 = state_13837;var statearr_13859_13880 = state_13837__$1;(statearr_13859_13880[2] = inst_13833);
(statearr_13859_13880[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13838 === 16))
{var inst_13830 = (state_13837[2]);var state_13837__$1 = (function (){var statearr_13860 = state_13837;(statearr_13860[11] = inst_13830);
return statearr_13860;
})();var statearr_13861_13881 = state_13837__$1;(statearr_13861_13881[2] = null);
(statearr_13861_13881[1] = 2);
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
});return ((function (switch__8222__auto__){
return (function() {
var state_machine__8223__auto__ = null;
var state_machine__8223__auto____0 = (function (){var statearr_13863 = (new Array(12));(statearr_13863[0] = state_machine__8223__auto__);
(statearr_13863[1] = 1);
return statearr_13863;
});
var state_machine__8223__auto____1 = (function (state_13837){while(true){
var result__8224__auto__ = switch__8222__auto__.call(null,state_13837);if(cljs.core.keyword_identical_QMARK_.call(null,result__8224__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8224__auto__;
}
break;
}
});
state_machine__8223__auto__ = function(state_13837){
switch(arguments.length){
case 0:
return state_machine__8223__auto____0.call(this);
case 1:
return state_machine__8223__auto____1.call(this,state_13837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8223__auto____0;
state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8223__auto____1;
return state_machine__8223__auto__;
})()
;})(switch__8222__auto__))
})();var state__8286__auto__ = (function (){var statearr_13864 = f__8285__auto__.call(null);(statearr_13864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8284__auto___13865);
return statearr_13864;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8286__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8284__auto___13981 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8285__auto__ = (function (){var switch__8222__auto__ = (function (state_13961){var state_val_13962 = (state_13961[1]);if((state_val_13962 === 1))
{var inst_13932 = cljs.core.vec.call(null,chs);var inst_13933 = inst_13932;var state_13961__$1 = (function (){var statearr_13963 = state_13961;(statearr_13963[5] = inst_13933);
return statearr_13963;
})();var statearr_13964_13982 = state_13961__$1;(statearr_13964_13982[2] = null);
(statearr_13964_13982[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13962 === 2))
{var inst_13933 = (state_13961[5]);var inst_13935 = cljs.core.count.call(null,inst_13933);var inst_13936 = (inst_13935 > 0);var state_13961__$1 = state_13961;if(cljs.core.truth_(inst_13936))
{var statearr_13965_13983 = state_13961__$1;(statearr_13965_13983[1] = 4);
} else
{var statearr_13966_13984 = state_13961__$1;(statearr_13966_13984[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13962 === 3))
{var inst_13959 = (state_13961[2]);var state_13961__$1 = state_13961;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13961__$1,inst_13959);
} else
{if((state_val_13962 === 4))
{var inst_13933 = (state_13961[5]);var state_13961__$1 = state_13961;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13961__$1,7,inst_13933);
} else
{if((state_val_13962 === 5))
{var inst_13955 = cljs.core.async.close_BANG_.call(null,out);var state_13961__$1 = state_13961;var statearr_13967_13985 = state_13961__$1;(statearr_13967_13985[2] = inst_13955);
(statearr_13967_13985[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13962 === 6))
{var inst_13957 = (state_13961[2]);var state_13961__$1 = state_13961;var statearr_13968_13986 = state_13961__$1;(statearr_13968_13986[2] = inst_13957);
(statearr_13968_13986[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13962 === 7))
{var inst_13941 = (state_13961[6]);var inst_13940 = (state_13961[7]);var inst_13940__$1 = (state_13961[2]);var inst_13941__$1 = cljs.core.nth.call(null,inst_13940__$1,0,null);var inst_13942 = cljs.core.nth.call(null,inst_13940__$1,1,null);var inst_13943 = (inst_13941__$1 == null);var state_13961__$1 = (function (){var statearr_13969 = state_13961;(statearr_13969[8] = inst_13942);
(statearr_13969[6] = inst_13941__$1);
(statearr_13969[7] = inst_13940__$1);
return statearr_13969;
})();if(cljs.core.truth_(inst_13943))
{var statearr_13970_13987 = state_13961__$1;(statearr_13970_13987[1] = 8);
} else
{var statearr_13971_13988 = state_13961__$1;(statearr_13971_13988[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13962 === 8))
{var inst_13942 = (state_13961[8]);var inst_13941 = (state_13961[6]);var inst_13940 = (state_13961[7]);var inst_13933 = (state_13961[5]);var inst_13945 = (function (){var c = inst_13942;var v = inst_13941;var vec__13938 = inst_13940;var cs = inst_13933;return ((function (c,v,vec__13938,cs,inst_13942,inst_13941,inst_13940,inst_13933,state_val_13962){
return (function (p1__13882_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13882_SHARP_);
});
;})(c,v,vec__13938,cs,inst_13942,inst_13941,inst_13940,inst_13933,state_val_13962))
})();var inst_13946 = cljs.core.filterv.call(null,inst_13945,inst_13933);var inst_13933__$1 = inst_13946;var state_13961__$1 = (function (){var statearr_13972 = state_13961;(statearr_13972[5] = inst_13933__$1);
return statearr_13972;
})();var statearr_13973_13989 = state_13961__$1;(statearr_13973_13989[2] = null);
(statearr_13973_13989[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13962 === 9))
{var inst_13941 = (state_13961[6]);var state_13961__$1 = state_13961;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13961__$1,11,out,inst_13941);
} else
{if((state_val_13962 === 10))
{var inst_13953 = (state_13961[2]);var state_13961__$1 = state_13961;var statearr_13975_13990 = state_13961__$1;(statearr_13975_13990[2] = inst_13953);
(statearr_13975_13990[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13962 === 11))
{var inst_13933 = (state_13961[5]);var inst_13950 = (state_13961[2]);var tmp13974 = inst_13933;var inst_13933__$1 = tmp13974;var state_13961__$1 = (function (){var statearr_13976 = state_13961;(statearr_13976[9] = inst_13950);
(statearr_13976[5] = inst_13933__$1);
return statearr_13976;
})();var statearr_13977_13991 = state_13961__$1;(statearr_13977_13991[2] = null);
(statearr_13977_13991[1] = 2);
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
});return ((function (switch__8222__auto__){
return (function() {
var state_machine__8223__auto__ = null;
var state_machine__8223__auto____0 = (function (){var statearr_13979 = (new Array(10));(statearr_13979[0] = state_machine__8223__auto__);
(statearr_13979[1] = 1);
return statearr_13979;
});
var state_machine__8223__auto____1 = (function (state_13961){while(true){
var result__8224__auto__ = switch__8222__auto__.call(null,state_13961);if(cljs.core.keyword_identical_QMARK_.call(null,result__8224__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8224__auto__;
}
break;
}
});
state_machine__8223__auto__ = function(state_13961){
switch(arguments.length){
case 0:
return state_machine__8223__auto____0.call(this);
case 1:
return state_machine__8223__auto____1.call(this,state_13961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8223__auto____0;
state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8223__auto____1;
return state_machine__8223__auto__;
})()
;})(switch__8222__auto__))
})();var state__8286__auto__ = (function (){var statearr_13980 = f__8285__auto__.call(null);(statearr_13980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8284__auto___13981);
return statearr_13980;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8286__auto__);
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
