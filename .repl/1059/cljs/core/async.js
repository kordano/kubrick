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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t25002 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t25002');

/**
* @constructor
*/
cljs.core.async.t25002 = (function (f,fn_handler,meta25003){
this.f = f;
this.fn_handler = fn_handler;
this.meta25003 = meta25003;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25002.cljs$lang$type = true;
cljs.core.async.t25002.cljs$lang$ctorStr = "cljs.core.async/t25002";
cljs.core.async.t25002.cljs$lang$ctorPrWriter = (function (this__19659__auto__,writer__19660__auto__,opt__19661__auto__){return cljs.core._write.call(null,writer__19660__auto__,"cljs.core.async/t25002");
});
cljs.core.async.t25002.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25002.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return true;
});
cljs.core.async.t25002.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
return self__.f;
});
cljs.core.async.t25002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25004){var self__ = this;
return self__.meta25003;
});
cljs.core.async.t25002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25004,meta25003__$1){var self__ = this;
return (new cljs.core.async.t25002(self__.f,self__.fn_handler,meta25003__$1));
});
cljs.core.async.__GT_t25002 = (function __GT_t25002(f__$1,fn_handler__$1,meta25003){return (new cljs.core.async.t25002(f__$1,fn_handler__$1,meta25003));
});
}
return (new cljs.core.async.t25002(f,fn_handler,null));
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
{var val_25005 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_25005);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_25005);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__19930__auto___25006 = n;var x_25007 = 0;while(true){
if((x_25007 < n__19930__auto___25006))
{(a[x_25007] = 0);
{
var G__25008 = (x_25007 + 1);
x_25007 = G__25008;
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
var G__25009 = (i + 1);
i = G__25009;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t25013 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t25013');

/**
* @constructor
*/
cljs.core.async.t25013 = (function (flag,alt_flag,meta25014){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta25014 = meta25014;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25013.cljs$lang$type = true;
cljs.core.async.t25013.cljs$lang$ctorStr = "cljs.core.async/t25013";
cljs.core.async.t25013.cljs$lang$ctorPrWriter = (function (this__19659__auto__,writer__19660__auto__,opt__19661__auto__){return cljs.core._write.call(null,writer__19660__auto__,"cljs.core.async/t25013");
});
cljs.core.async.t25013.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25013.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t25013.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t25013.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25015){var self__ = this;
return self__.meta25014;
});
cljs.core.async.t25013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25015,meta25014__$1){var self__ = this;
return (new cljs.core.async.t25013(self__.flag,self__.alt_flag,meta25014__$1));
});
cljs.core.async.__GT_t25013 = (function __GT_t25013(flag__$1,alt_flag__$1,meta25014){return (new cljs.core.async.t25013(flag__$1,alt_flag__$1,meta25014));
});
}
return (new cljs.core.async.t25013(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t25019 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t25019');

/**
* @constructor
*/
cljs.core.async.t25019 = (function (cb,flag,alt_handler,meta25020){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta25020 = meta25020;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25019.cljs$lang$type = true;
cljs.core.async.t25019.cljs$lang$ctorStr = "cljs.core.async/t25019";
cljs.core.async.t25019.cljs$lang$ctorPrWriter = (function (this__19659__auto__,writer__19660__auto__,opt__19661__auto__){return cljs.core._write.call(null,writer__19660__auto__,"cljs.core.async/t25019");
});
cljs.core.async.t25019.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25019.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t25019.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t25019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25021){var self__ = this;
return self__.meta25020;
});
cljs.core.async.t25019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25021,meta25020__$1){var self__ = this;
return (new cljs.core.async.t25019(self__.cb,self__.flag,self__.alt_handler,meta25020__$1));
});
cljs.core.async.__GT_t25019 = (function __GT_t25019(cb__$1,flag__$1,alt_handler__$1,meta25020){return (new cljs.core.async.t25019(cb__$1,flag__$1,alt_handler__$1,meta25020));
});
}
return (new cljs.core.async.t25019(cb,flag,alt_handler,null));
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
return (function (p1__25022_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__25022_SHARP_,port], true));
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
var G__25023 = (i + 1);
i = G__25023;
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
var alts_BANG___delegate = function (ports,p__25024){var map__25026 = p__25024;var map__25026__$1 = ((cljs.core.seq_QMARK_.call(null,map__25026))?cljs.core.apply.call(null,cljs.core.hash_map,map__25026):map__25026);var opts = map__25026__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__25024 = null;if (arguments.length > 1) {
  p__25024 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__25024);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__25027){
var ports = cljs.core.first(arglist__25027);
var p__25024 = cljs.core.rest(arglist__25027);
return alts_BANG___delegate(ports,p__25024);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t25035 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t25035');

/**
* @constructor
*/
cljs.core.async.t25035 = (function (ch,f,map_LT_,meta25036){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25036 = meta25036;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25035.cljs$lang$type = true;
cljs.core.async.t25035.cljs$lang$ctorStr = "cljs.core.async/t25035";
cljs.core.async.t25035.cljs$lang$ctorPrWriter = (function (this__19659__auto__,writer__19660__auto__,opt__19661__auto__){return cljs.core._write.call(null,writer__19660__auto__,"cljs.core.async/t25035");
});
cljs.core.async.t25035.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25035.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t25035.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25035.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t25038 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t25038');

/**
* @constructor
*/
cljs.core.async.t25038 = (function (fn1,_,meta25036,ch,f,map_LT_,meta25039){
this.fn1 = fn1;
this._ = _;
this.meta25036 = meta25036;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25039 = meta25039;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25038.cljs$lang$type = true;
cljs.core.async.t25038.cljs$lang$ctorStr = "cljs.core.async/t25038";
cljs.core.async.t25038.cljs$lang$ctorPrWriter = (function (this__19659__auto__,writer__19660__auto__,opt__19661__auto__){return cljs.core._write.call(null,writer__19660__auto__,"cljs.core.async/t25038");
});
cljs.core.async.t25038.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25038.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$2){var self__ = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t25038.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$2){var self__ = this;
return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t25038.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$2){var self__ = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1){
return (function (p1__25028_SHARP_){return f1.call(null,(((p1__25028_SHARP_ == null))?null:self__.f.call(null,p1__25028_SHARP_)));
});
;})(f1))
});
cljs.core.async.t25038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25040){var self__ = this;
return self__.meta25039;
});
cljs.core.async.t25038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25040,meta25039__$1){var self__ = this;
return (new cljs.core.async.t25038(self__.fn1,self__._,self__.meta25036,self__.ch,self__.f,self__.map_LT_,meta25039__$1));
});
cljs.core.async.__GT_t25038 = (function __GT_t25038(fn1__$1,___$1,meta25036__$1,ch__$2,f__$2,map_LT___$2,meta25039){return (new cljs.core.async.t25038(fn1__$1,___$1,meta25036__$1,ch__$2,f__$2,map_LT___$2,meta25039));
});
}
return (new cljs.core.async.t25038(fn1,_,self__.meta25036,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t25035.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25035.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25037){var self__ = this;
return self__.meta25036;
});
cljs.core.async.t25035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25037,meta25036__$1){var self__ = this;
return (new cljs.core.async.t25035(self__.ch,self__.f,self__.map_LT_,meta25036__$1));
});
cljs.core.async.__GT_t25035 = (function __GT_t25035(ch__$1,f__$1,map_LT___$1,meta25036){return (new cljs.core.async.t25035(ch__$1,f__$1,map_LT___$1,meta25036));
});
}
return (new cljs.core.async.t25035(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t25044 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t25044');

/**
* @constructor
*/
cljs.core.async.t25044 = (function (ch,f,map_GT_,meta25045){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25045 = meta25045;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25044.cljs$lang$type = true;
cljs.core.async.t25044.cljs$lang$ctorStr = "cljs.core.async/t25044";
cljs.core.async.t25044.cljs$lang$ctorPrWriter = (function (this__19659__auto__,writer__19660__auto__,opt__19661__auto__){return cljs.core._write.call(null,writer__19660__auto__,"cljs.core.async/t25044");
});
cljs.core.async.t25044.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25044.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t25044.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25044.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25044.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25044.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25044.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25046){var self__ = this;
return self__.meta25045;
});
cljs.core.async.t25044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25046,meta25045__$1){var self__ = this;
return (new cljs.core.async.t25044(self__.ch,self__.f,self__.map_GT_,meta25045__$1));
});
cljs.core.async.__GT_t25044 = (function __GT_t25044(ch__$1,f__$1,map_GT___$1,meta25045){return (new cljs.core.async.t25044(ch__$1,f__$1,map_GT___$1,meta25045));
});
}
return (new cljs.core.async.t25044(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t25050 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t25050');

/**
* @constructor
*/
cljs.core.async.t25050 = (function (ch,p,filter_GT_,meta25051){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25051 = meta25051;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25050.cljs$lang$type = true;
cljs.core.async.t25050.cljs$lang$ctorStr = "cljs.core.async/t25050";
cljs.core.async.t25050.cljs$lang$ctorPrWriter = (function (this__19659__auto__,writer__19660__auto__,opt__19661__auto__){return cljs.core._write.call(null,writer__19660__auto__,"cljs.core.async/t25050");
});
cljs.core.async.t25050.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25050.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t25050.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25050.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25050.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25050.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25050.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25052){var self__ = this;
return self__.meta25051;
});
cljs.core.async.t25050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25052,meta25051__$1){var self__ = this;
return (new cljs.core.async.t25050(self__.ch,self__.p,self__.filter_GT_,meta25051__$1));
});
cljs.core.async.__GT_t25050 = (function __GT_t25050(ch__$1,p__$1,filter_GT___$1,meta25051){return (new cljs.core.async.t25050(ch__$1,p__$1,filter_GT___$1,meta25051));
});
}
return (new cljs.core.async.t25050(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__21200__auto___25127 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__21201__auto__ = (function (){var switch__21137__auto__ = (function (state_25110){var state_val_25111 = (state_25110[1]);if((state_val_25111 === 1))
{var state_25110__$1 = state_25110;var statearr_25112_25128 = state_25110__$1;(statearr_25112_25128[2] = null);
(statearr_25112_25128[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25111 === 2))
{var state_25110__$1 = state_25110;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25110__$1,4,ch);
} else
{if((state_val_25111 === 3))
{var inst_25108 = (state_25110[2]);var state_25110__$1 = state_25110;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25110__$1,inst_25108);
} else
{if((state_val_25111 === 4))
{var inst_25092 = (state_25110[5]);var inst_25092__$1 = (state_25110[2]);var inst_25093 = (inst_25092__$1 == null);var state_25110__$1 = (function (){var statearr_25113 = state_25110;(statearr_25113[5] = inst_25092__$1);
return statearr_25113;
})();if(cljs.core.truth_(inst_25093))
{var statearr_25114_25129 = state_25110__$1;(statearr_25114_25129[1] = 5);
} else
{var statearr_25115_25130 = state_25110__$1;(statearr_25115_25130[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25111 === 5))
{var inst_25095 = cljs.core.async.close_BANG_.call(null,out);var state_25110__$1 = state_25110;var statearr_25116_25131 = state_25110__$1;(statearr_25116_25131[2] = inst_25095);
(statearr_25116_25131[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25111 === 6))
{var inst_25092 = (state_25110[5]);var inst_25097 = p.call(null,inst_25092);var state_25110__$1 = state_25110;if(cljs.core.truth_(inst_25097))
{var statearr_25117_25132 = state_25110__$1;(statearr_25117_25132[1] = 8);
} else
{var statearr_25118_25133 = state_25110__$1;(statearr_25118_25133[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25111 === 7))
{var inst_25106 = (state_25110[2]);var state_25110__$1 = state_25110;var statearr_25119_25134 = state_25110__$1;(statearr_25119_25134[2] = inst_25106);
(statearr_25119_25134[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25111 === 8))
{var inst_25092 = (state_25110[5]);var state_25110__$1 = state_25110;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25110__$1,11,out,inst_25092);
} else
{if((state_val_25111 === 9))
{var state_25110__$1 = state_25110;var statearr_25120_25135 = state_25110__$1;(statearr_25120_25135[2] = null);
(statearr_25120_25135[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25111 === 10))
{var inst_25103 = (state_25110[2]);var state_25110__$1 = (function (){var statearr_25121 = state_25110;(statearr_25121[6] = inst_25103);
return statearr_25121;
})();var statearr_25122_25136 = state_25110__$1;(statearr_25122_25136[2] = null);
(statearr_25122_25136[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25111 === 11))
{var inst_25100 = (state_25110[2]);var state_25110__$1 = state_25110;var statearr_25123_25137 = state_25110__$1;(statearr_25123_25137[2] = inst_25100);
(statearr_25123_25137[1] = 10);
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
});return ((function (switch__21137__auto__){
return (function() {
var state_machine__21138__auto__ = null;
var state_machine__21138__auto____0 = (function (){var statearr_25125 = (new Array(7));(statearr_25125[0] = state_machine__21138__auto__);
(statearr_25125[1] = 1);
return statearr_25125;
});
var state_machine__21138__auto____1 = (function (state_25110){while(true){
var result__21139__auto__ = switch__21137__auto__.call(null,state_25110);if(cljs.core.keyword_identical_QMARK_.call(null,result__21139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__21139__auto__;
}
break;
}
});
state_machine__21138__auto__ = function(state_25110){
switch(arguments.length){
case 0:
return state_machine__21138__auto____0.call(this);
case 1:
return state_machine__21138__auto____1.call(this,state_25110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__21138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__21138__auto____0;
state_machine__21138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__21138__auto____1;
return state_machine__21138__auto__;
})()
;})(switch__21137__auto__))
})();var state__21202__auto__ = (function (){var statearr_25126 = f__21201__auto__.call(null);(statearr_25126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21200__auto___25127);
return statearr_25126;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21202__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__21200__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__21201__auto__ = (function (){var switch__21137__auto__ = (function (state_25285){var state_val_25286 = (state_25285[1]);if((state_val_25286 === 1))
{var state_25285__$1 = state_25285;var statearr_25287_25320 = state_25285__$1;(statearr_25287_25320[2] = null);
(statearr_25287_25320[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25286 === 2))
{var state_25285__$1 = state_25285;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25285__$1,4,in$);
} else
{if((state_val_25286 === 3))
{var inst_25283 = (state_25285[2]);var state_25285__$1 = state_25285;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25285__$1,inst_25283);
} else
{if((state_val_25286 === 4))
{var inst_25231 = (state_25285[5]);var inst_25231__$1 = (state_25285[2]);var inst_25232 = (inst_25231__$1 == null);var state_25285__$1 = (function (){var statearr_25288 = state_25285;(statearr_25288[5] = inst_25231__$1);
return statearr_25288;
})();if(cljs.core.truth_(inst_25232))
{var statearr_25289_25321 = state_25285__$1;(statearr_25289_25321[1] = 5);
} else
{var statearr_25290_25322 = state_25285__$1;(statearr_25290_25322[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25286 === 5))
{var inst_25234 = cljs.core.async.close_BANG_.call(null,out);var state_25285__$1 = state_25285;var statearr_25291_25323 = state_25285__$1;(statearr_25291_25323[2] = inst_25234);
(statearr_25291_25323[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25286 === 6))
{var inst_25231 = (state_25285[5]);var inst_25236 = f.call(null,inst_25231);var inst_25241 = cljs.core.seq.call(null,inst_25236);var inst_25242 = inst_25241;var inst_25243 = null;var inst_25244 = 0;var inst_25245 = 0;var state_25285__$1 = (function (){var statearr_25292 = state_25285;(statearr_25292[6] = inst_25244);
(statearr_25292[7] = inst_25245);
(statearr_25292[8] = inst_25242);
(statearr_25292[9] = inst_25243);
return statearr_25292;
})();var statearr_25293_25324 = state_25285__$1;(statearr_25293_25324[2] = null);
(statearr_25293_25324[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25286 === 7))
{var inst_25281 = (state_25285[2]);var state_25285__$1 = state_25285;var statearr_25294_25325 = state_25285__$1;(statearr_25294_25325[2] = inst_25281);
(statearr_25294_25325[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25286 === 8))
{var inst_25244 = (state_25285[6]);var inst_25245 = (state_25285[7]);var inst_25247 = (inst_25245 < inst_25244);var inst_25248 = inst_25247;var state_25285__$1 = state_25285;if(cljs.core.truth_(inst_25248))
{var statearr_25295_25326 = state_25285__$1;(statearr_25295_25326[1] = 10);
} else
{var statearr_25296_25327 = state_25285__$1;(statearr_25296_25327[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25286 === 9))
{var inst_25278 = (state_25285[2]);var state_25285__$1 = (function (){var statearr_25297 = state_25285;(statearr_25297[10] = inst_25278);
return statearr_25297;
})();var statearr_25298_25328 = state_25285__$1;(statearr_25298_25328[2] = null);
(statearr_25298_25328[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25286 === 10))
{var inst_25245 = (state_25285[7]);var inst_25243 = (state_25285[9]);var inst_25250 = cljs.core._nth.call(null,inst_25243,inst_25245);var state_25285__$1 = state_25285;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25285__$1,13,out,inst_25250);
} else
{if((state_val_25286 === 11))
{var inst_25256 = (state_25285[11]);var inst_25242 = (state_25285[8]);var inst_25256__$1 = cljs.core.seq.call(null,inst_25242);var state_25285__$1 = (function (){var statearr_25302 = state_25285;(statearr_25302[11] = inst_25256__$1);
return statearr_25302;
})();if(inst_25256__$1)
{var statearr_25303_25329 = state_25285__$1;(statearr_25303_25329[1] = 14);
} else
{var statearr_25304_25330 = state_25285__$1;(statearr_25304_25330[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25286 === 12))
{var inst_25276 = (state_25285[2]);var state_25285__$1 = state_25285;var statearr_25305_25331 = state_25285__$1;(statearr_25305_25331[2] = inst_25276);
(statearr_25305_25331[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25286 === 13))
{var inst_25244 = (state_25285[6]);var inst_25245 = (state_25285[7]);var inst_25242 = (state_25285[8]);var inst_25243 = (state_25285[9]);var inst_25252 = (state_25285[2]);var inst_25253 = (inst_25245 + 1);var tmp25299 = inst_25244;var tmp25300 = inst_25242;var tmp25301 = inst_25243;var inst_25242__$1 = tmp25300;var inst_25243__$1 = tmp25301;var inst_25244__$1 = tmp25299;var inst_25245__$1 = inst_25253;var state_25285__$1 = (function (){var statearr_25306 = state_25285;(statearr_25306[12] = inst_25252);
(statearr_25306[6] = inst_25244__$1);
(statearr_25306[7] = inst_25245__$1);
(statearr_25306[8] = inst_25242__$1);
(statearr_25306[9] = inst_25243__$1);
return statearr_25306;
})();var statearr_25307_25332 = state_25285__$1;(statearr_25307_25332[2] = null);
(statearr_25307_25332[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25286 === 14))
{var inst_25256 = (state_25285[11]);var inst_25258 = cljs.core.chunked_seq_QMARK_.call(null,inst_25256);var state_25285__$1 = state_25285;if(inst_25258)
{var statearr_25308_25333 = state_25285__$1;(statearr_25308_25333[1] = 17);
} else
{var statearr_25309_25334 = state_25285__$1;(statearr_25309_25334[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25286 === 15))
{var state_25285__$1 = state_25285;var statearr_25310_25335 = state_25285__$1;(statearr_25310_25335[2] = null);
(statearr_25310_25335[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25286 === 16))
{var inst_25274 = (state_25285[2]);var state_25285__$1 = state_25285;var statearr_25311_25336 = state_25285__$1;(statearr_25311_25336[2] = inst_25274);
(statearr_25311_25336[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25286 === 17))
{var inst_25256 = (state_25285[11]);var inst_25260 = cljs.core.chunk_first.call(null,inst_25256);var inst_25261 = cljs.core.chunk_rest.call(null,inst_25256);var inst_25262 = cljs.core.count.call(null,inst_25260);var inst_25242 = inst_25261;var inst_25243 = inst_25260;var inst_25244 = inst_25262;var inst_25245 = 0;var state_25285__$1 = (function (){var statearr_25312 = state_25285;(statearr_25312[6] = inst_25244);
(statearr_25312[7] = inst_25245);
(statearr_25312[8] = inst_25242);
(statearr_25312[9] = inst_25243);
return statearr_25312;
})();var statearr_25313_25337 = state_25285__$1;(statearr_25313_25337[2] = null);
(statearr_25313_25337[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25286 === 18))
{var inst_25256 = (state_25285[11]);var inst_25265 = cljs.core.first.call(null,inst_25256);var state_25285__$1 = state_25285;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25285__$1,20,out,inst_25265);
} else
{if((state_val_25286 === 19))
{var inst_25271 = (state_25285[2]);var state_25285__$1 = state_25285;var statearr_25314_25338 = state_25285__$1;(statearr_25314_25338[2] = inst_25271);
(statearr_25314_25338[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25286 === 20))
{var inst_25256 = (state_25285[11]);var inst_25267 = (state_25285[2]);var inst_25268 = cljs.core.next.call(null,inst_25256);var inst_25242 = inst_25268;var inst_25243 = null;var inst_25244 = 0;var inst_25245 = 0;var state_25285__$1 = (function (){var statearr_25315 = state_25285;(statearr_25315[13] = inst_25267);
(statearr_25315[6] = inst_25244);
(statearr_25315[7] = inst_25245);
(statearr_25315[8] = inst_25242);
(statearr_25315[9] = inst_25243);
return statearr_25315;
})();var statearr_25316_25339 = state_25285__$1;(statearr_25316_25339[2] = null);
(statearr_25316_25339[1] = 8);
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
});return ((function (switch__21137__auto__){
return (function() {
var state_machine__21138__auto__ = null;
var state_machine__21138__auto____0 = (function (){var statearr_25318 = (new Array(14));(statearr_25318[0] = state_machine__21138__auto__);
(statearr_25318[1] = 1);
return statearr_25318;
});
var state_machine__21138__auto____1 = (function (state_25285){while(true){
var result__21139__auto__ = switch__21137__auto__.call(null,state_25285);if(cljs.core.keyword_identical_QMARK_.call(null,result__21139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__21139__auto__;
}
break;
}
});
state_machine__21138__auto__ = function(state_25285){
switch(arguments.length){
case 0:
return state_machine__21138__auto____0.call(this);
case 1:
return state_machine__21138__auto____1.call(this,state_25285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__21138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__21138__auto____0;
state_machine__21138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__21138__auto____1;
return state_machine__21138__auto__;
})()
;})(switch__21137__auto__))
})();var state__21202__auto__ = (function (){var statearr_25319 = f__21201__auto__.call(null);(statearr_25319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21200__auto__);
return statearr_25319;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21202__auto__);
}));
return c__21200__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__21200__auto___25412 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__21201__auto__ = (function (){var switch__21137__auto__ = (function (state_25395){var state_val_25396 = (state_25395[1]);if((state_val_25396 === 1))
{var state_25395__$1 = state_25395;var statearr_25397_25413 = state_25395__$1;(statearr_25397_25413[2] = null);
(statearr_25397_25413[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25396 === 2))
{var state_25395__$1 = state_25395;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25395__$1,4,from);
} else
{if((state_val_25396 === 3))
{var inst_25393 = (state_25395[2]);var state_25395__$1 = state_25395;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25395__$1,inst_25393);
} else
{if((state_val_25396 === 4))
{var inst_25378 = (state_25395[5]);var inst_25378__$1 = (state_25395[2]);var inst_25379 = (inst_25378__$1 == null);var state_25395__$1 = (function (){var statearr_25398 = state_25395;(statearr_25398[5] = inst_25378__$1);
return statearr_25398;
})();if(cljs.core.truth_(inst_25379))
{var statearr_25399_25414 = state_25395__$1;(statearr_25399_25414[1] = 5);
} else
{var statearr_25400_25415 = state_25395__$1;(statearr_25400_25415[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25396 === 5))
{var state_25395__$1 = state_25395;if(cljs.core.truth_(close_QMARK_))
{var statearr_25401_25416 = state_25395__$1;(statearr_25401_25416[1] = 8);
} else
{var statearr_25402_25417 = state_25395__$1;(statearr_25402_25417[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25396 === 6))
{var inst_25378 = (state_25395[5]);var state_25395__$1 = state_25395;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25395__$1,11,to,inst_25378);
} else
{if((state_val_25396 === 7))
{var inst_25391 = (state_25395[2]);var state_25395__$1 = state_25395;var statearr_25403_25418 = state_25395__$1;(statearr_25403_25418[2] = inst_25391);
(statearr_25403_25418[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25396 === 8))
{var inst_25382 = cljs.core.async.close_BANG_.call(null,to);var state_25395__$1 = state_25395;var statearr_25404_25419 = state_25395__$1;(statearr_25404_25419[2] = inst_25382);
(statearr_25404_25419[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25396 === 9))
{var state_25395__$1 = state_25395;var statearr_25405_25420 = state_25395__$1;(statearr_25405_25420[2] = null);
(statearr_25405_25420[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25396 === 10))
{var inst_25385 = (state_25395[2]);var state_25395__$1 = state_25395;var statearr_25406_25421 = state_25395__$1;(statearr_25406_25421[2] = inst_25385);
(statearr_25406_25421[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25396 === 11))
{var inst_25388 = (state_25395[2]);var state_25395__$1 = (function (){var statearr_25407 = state_25395;(statearr_25407[6] = inst_25388);
return statearr_25407;
})();var statearr_25408_25422 = state_25395__$1;(statearr_25408_25422[2] = null);
(statearr_25408_25422[1] = 2);
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
});return ((function (switch__21137__auto__){
return (function() {
var state_machine__21138__auto__ = null;
var state_machine__21138__auto____0 = (function (){var statearr_25410 = (new Array(7));(statearr_25410[0] = state_machine__21138__auto__);
(statearr_25410[1] = 1);
return statearr_25410;
});
var state_machine__21138__auto____1 = (function (state_25395){while(true){
var result__21139__auto__ = switch__21137__auto__.call(null,state_25395);if(cljs.core.keyword_identical_QMARK_.call(null,result__21139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__21139__auto__;
}
break;
}
});
state_machine__21138__auto__ = function(state_25395){
switch(arguments.length){
case 0:
return state_machine__21138__auto____0.call(this);
case 1:
return state_machine__21138__auto____1.call(this,state_25395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__21138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__21138__auto____0;
state_machine__21138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__21138__auto____1;
return state_machine__21138__auto__;
})()
;})(switch__21137__auto__))
})();var state__21202__auto__ = (function (){var statearr_25411 = f__21201__auto__.call(null);(statearr_25411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21200__auto___25412);
return statearr_25411;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21202__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__21200__auto___25501 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__21201__auto__ = (function (){var switch__21137__auto__ = (function (state_25483){var state_val_25484 = (state_25483[1]);if((state_val_25484 === 1))
{var state_25483__$1 = state_25483;var statearr_25485_25502 = state_25483__$1;(statearr_25485_25502[2] = null);
(statearr_25485_25502[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25484 === 2))
{var state_25483__$1 = state_25483;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25483__$1,4,ch);
} else
{if((state_val_25484 === 3))
{var inst_25481 = (state_25483[2]);var state_25483__$1 = state_25483;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25483__$1,inst_25481);
} else
{if((state_val_25484 === 4))
{var inst_25464 = (state_25483[5]);var inst_25464__$1 = (state_25483[2]);var inst_25465 = (inst_25464__$1 == null);var state_25483__$1 = (function (){var statearr_25486 = state_25483;(statearr_25486[5] = inst_25464__$1);
return statearr_25486;
})();if(cljs.core.truth_(inst_25465))
{var statearr_25487_25503 = state_25483__$1;(statearr_25487_25503[1] = 5);
} else
{var statearr_25488_25504 = state_25483__$1;(statearr_25488_25504[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25484 === 5))
{var inst_25467 = cljs.core.async.close_BANG_.call(null,tc);var inst_25468 = cljs.core.async.close_BANG_.call(null,fc);var state_25483__$1 = (function (){var statearr_25489 = state_25483;(statearr_25489[6] = inst_25467);
return statearr_25489;
})();var statearr_25490_25505 = state_25483__$1;(statearr_25490_25505[2] = inst_25468);
(statearr_25490_25505[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25484 === 6))
{var inst_25464 = (state_25483[5]);var inst_25470 = p.call(null,inst_25464);var state_25483__$1 = state_25483;if(cljs.core.truth_(inst_25470))
{var statearr_25491_25506 = state_25483__$1;(statearr_25491_25506[1] = 9);
} else
{var statearr_25492_25507 = state_25483__$1;(statearr_25492_25507[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25484 === 7))
{var inst_25479 = (state_25483[2]);var state_25483__$1 = state_25483;var statearr_25493_25508 = state_25483__$1;(statearr_25493_25508[2] = inst_25479);
(statearr_25493_25508[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25484 === 8))
{var inst_25476 = (state_25483[2]);var state_25483__$1 = (function (){var statearr_25494 = state_25483;(statearr_25494[7] = inst_25476);
return statearr_25494;
})();var statearr_25495_25509 = state_25483__$1;(statearr_25495_25509[2] = null);
(statearr_25495_25509[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25484 === 9))
{var state_25483__$1 = state_25483;var statearr_25496_25510 = state_25483__$1;(statearr_25496_25510[2] = tc);
(statearr_25496_25510[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25484 === 10))
{var state_25483__$1 = state_25483;var statearr_25497_25511 = state_25483__$1;(statearr_25497_25511[2] = fc);
(statearr_25497_25511[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25484 === 11))
{var inst_25464 = (state_25483[5]);var inst_25474 = (state_25483[2]);var state_25483__$1 = state_25483;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25483__$1,8,inst_25474,inst_25464);
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
});return ((function (switch__21137__auto__){
return (function() {
var state_machine__21138__auto__ = null;
var state_machine__21138__auto____0 = (function (){var statearr_25499 = (new Array(8));(statearr_25499[0] = state_machine__21138__auto__);
(statearr_25499[1] = 1);
return statearr_25499;
});
var state_machine__21138__auto____1 = (function (state_25483){while(true){
var result__21139__auto__ = switch__21137__auto__.call(null,state_25483);if(cljs.core.keyword_identical_QMARK_.call(null,result__21139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__21139__auto__;
}
break;
}
});
state_machine__21138__auto__ = function(state_25483){
switch(arguments.length){
case 0:
return state_machine__21138__auto____0.call(this);
case 1:
return state_machine__21138__auto____1.call(this,state_25483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__21138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__21138__auto____0;
state_machine__21138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__21138__auto____1;
return state_machine__21138__auto__;
})()
;})(switch__21137__auto__))
})();var state__21202__auto__ = (function (){var statearr_25500 = f__21201__auto__.call(null);(statearr_25500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21200__auto___25501);
return statearr_25500;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21202__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__21200__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__21201__auto__ = (function (){var switch__21137__auto__ = (function (state_25554){var state_val_25555 = (state_25554[1]);if((state_val_25555 === 7))
{var inst_25550 = (state_25554[2]);var state_25554__$1 = state_25554;var statearr_25556_25568 = state_25554__$1;(statearr_25556_25568[2] = inst_25550);
(statearr_25556_25568[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25555 === 6))
{var inst_25543 = (state_25554[5]);var inst_25540 = (state_25554[6]);var inst_25547 = f.call(null,inst_25540,inst_25543);var inst_25540__$1 = inst_25547;var state_25554__$1 = (function (){var statearr_25557 = state_25554;(statearr_25557[6] = inst_25540__$1);
return statearr_25557;
})();var statearr_25558_25569 = state_25554__$1;(statearr_25558_25569[2] = null);
(statearr_25558_25569[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25555 === 5))
{var inst_25540 = (state_25554[6]);var state_25554__$1 = state_25554;var statearr_25559_25570 = state_25554__$1;(statearr_25559_25570[2] = inst_25540);
(statearr_25559_25570[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25555 === 4))
{var inst_25543 = (state_25554[5]);var inst_25543__$1 = (state_25554[2]);var inst_25544 = (inst_25543__$1 == null);var state_25554__$1 = (function (){var statearr_25560 = state_25554;(statearr_25560[5] = inst_25543__$1);
return statearr_25560;
})();if(cljs.core.truth_(inst_25544))
{var statearr_25561_25571 = state_25554__$1;(statearr_25561_25571[1] = 5);
} else
{var statearr_25562_25572 = state_25554__$1;(statearr_25562_25572[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25555 === 3))
{var inst_25552 = (state_25554[2]);var state_25554__$1 = state_25554;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25554__$1,inst_25552);
} else
{if((state_val_25555 === 2))
{var state_25554__$1 = state_25554;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25554__$1,4,ch);
} else
{if((state_val_25555 === 1))
{var inst_25540 = init;var state_25554__$1 = (function (){var statearr_25563 = state_25554;(statearr_25563[6] = inst_25540);
return statearr_25563;
})();var statearr_25564_25573 = state_25554__$1;(statearr_25564_25573[2] = null);
(statearr_25564_25573[1] = 2);
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
});return ((function (switch__21137__auto__){
return (function() {
var state_machine__21138__auto__ = null;
var state_machine__21138__auto____0 = (function (){var statearr_25566 = (new Array(7));(statearr_25566[0] = state_machine__21138__auto__);
(statearr_25566[1] = 1);
return statearr_25566;
});
var state_machine__21138__auto____1 = (function (state_25554){while(true){
var result__21139__auto__ = switch__21137__auto__.call(null,state_25554);if(cljs.core.keyword_identical_QMARK_.call(null,result__21139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__21139__auto__;
}
break;
}
});
state_machine__21138__auto__ = function(state_25554){
switch(arguments.length){
case 0:
return state_machine__21138__auto____0.call(this);
case 1:
return state_machine__21138__auto____1.call(this,state_25554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__21138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__21138__auto____0;
state_machine__21138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__21138__auto____1;
return state_machine__21138__auto__;
})()
;})(switch__21137__auto__))
})();var state__21202__auto__ = (function (){var statearr_25567 = f__21201__auto__.call(null);(statearr_25567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21200__auto__);
return statearr_25567;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21202__auto__);
}));
return c__21200__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__21200__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__21201__auto__ = (function (){var switch__21137__auto__ = (function (state_25631){var state_val_25632 = (state_25631[1]);if((state_val_25632 === 1))
{var inst_25611 = cljs.core.seq.call(null,coll);var inst_25612 = inst_25611;var state_25631__$1 = (function (){var statearr_25633 = state_25631;(statearr_25633[5] = inst_25612);
return statearr_25633;
})();var statearr_25634_25648 = state_25631__$1;(statearr_25634_25648[2] = null);
(statearr_25634_25648[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25632 === 2))
{var inst_25612 = (state_25631[5]);var state_25631__$1 = state_25631;if(cljs.core.truth_(inst_25612))
{var statearr_25635_25649 = state_25631__$1;(statearr_25635_25649[1] = 4);
} else
{var statearr_25636_25650 = state_25631__$1;(statearr_25636_25650[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25632 === 3))
{var inst_25629 = (state_25631[2]);var state_25631__$1 = state_25631;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25631__$1,inst_25629);
} else
{if((state_val_25632 === 4))
{var inst_25612 = (state_25631[5]);var inst_25615 = cljs.core.first.call(null,inst_25612);var state_25631__$1 = state_25631;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25631__$1,7,ch,inst_25615);
} else
{if((state_val_25632 === 5))
{var state_25631__$1 = state_25631;if(cljs.core.truth_(close_QMARK_))
{var statearr_25637_25651 = state_25631__$1;(statearr_25637_25651[1] = 8);
} else
{var statearr_25638_25652 = state_25631__$1;(statearr_25638_25652[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25632 === 6))
{var inst_25627 = (state_25631[2]);var state_25631__$1 = state_25631;var statearr_25639_25653 = state_25631__$1;(statearr_25639_25653[2] = inst_25627);
(statearr_25639_25653[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25632 === 7))
{var inst_25612 = (state_25631[5]);var inst_25617 = (state_25631[2]);var inst_25618 = cljs.core.next.call(null,inst_25612);var inst_25612__$1 = inst_25618;var state_25631__$1 = (function (){var statearr_25640 = state_25631;(statearr_25640[5] = inst_25612__$1);
(statearr_25640[6] = inst_25617);
return statearr_25640;
})();var statearr_25641_25654 = state_25631__$1;(statearr_25641_25654[2] = null);
(statearr_25641_25654[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25632 === 8))
{var inst_25622 = cljs.core.async.close_BANG_.call(null,ch);var state_25631__$1 = state_25631;var statearr_25642_25655 = state_25631__$1;(statearr_25642_25655[2] = inst_25622);
(statearr_25642_25655[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25632 === 9))
{var state_25631__$1 = state_25631;var statearr_25643_25656 = state_25631__$1;(statearr_25643_25656[2] = null);
(statearr_25643_25656[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25632 === 10))
{var inst_25625 = (state_25631[2]);var state_25631__$1 = state_25631;var statearr_25644_25657 = state_25631__$1;(statearr_25644_25657[2] = inst_25625);
(statearr_25644_25657[1] = 6);
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
});return ((function (switch__21137__auto__){
return (function() {
var state_machine__21138__auto__ = null;
var state_machine__21138__auto____0 = (function (){var statearr_25646 = (new Array(7));(statearr_25646[0] = state_machine__21138__auto__);
(statearr_25646[1] = 1);
return statearr_25646;
});
var state_machine__21138__auto____1 = (function (state_25631){while(true){
var result__21139__auto__ = switch__21137__auto__.call(null,state_25631);if(cljs.core.keyword_identical_QMARK_.call(null,result__21139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__21139__auto__;
}
break;
}
});
state_machine__21138__auto__ = function(state_25631){
switch(arguments.length){
case 0:
return state_machine__21138__auto____0.call(this);
case 1:
return state_machine__21138__auto____1.call(this,state_25631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__21138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__21138__auto____0;
state_machine__21138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__21138__auto____1;
return state_machine__21138__auto__;
})()
;})(switch__21137__auto__))
})();var state__21202__auto__ = (function (){var statearr_25647 = f__21201__auto__.call(null);(statearr_25647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21200__auto__);
return statearr_25647;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21202__auto__);
}));
return c__21200__auto__;
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
{var x__19722__auto__ = (((_ == null))?null:_);return (function (){var or__3943__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19722__auto__)]);if(or__3943__auto__)
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
{var x__19722__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19722__auto__)]);if(or__3943__auto__)
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
{var x__19722__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19722__auto__)]);if(or__3943__auto__)
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
{var x__19722__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19722__auto__)]);if(or__3943__auto__)
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t25870 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t25870');

/**
* @constructor
*/
cljs.core.async.t25870 = (function (cs,ch,mult,meta25871){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25871 = meta25871;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25870.cljs$lang$type = true;
cljs.core.async.t25870.cljs$lang$ctorStr = "cljs.core.async/t25870";
cljs.core.async.t25870.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19659__auto__,writer__19660__auto__,opt__19661__auto__){return cljs.core._write.call(null,writer__19660__auto__,"cljs.core.async/t25870");
});})(cs))
;
cljs.core.async.t25870.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25870.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25870.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25870.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t25870.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25870.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
return self__.ch;
});})(cs))
;
cljs.core.async.t25870.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25872){var self__ = this;
return self__.meta25871;
});})(cs))
;
cljs.core.async.t25870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25872,meta25871__$1){var self__ = this;
return (new cljs.core.async.t25870(self__.cs,self__.ch,self__.mult,meta25871__$1));
});})(cs))
;
cljs.core.async.__GT_t25870 = ((function (cs){
return (function __GT_t25870(cs__$1,ch__$1,mult__$1,meta25871){return (new cljs.core.async.t25870(cs__$1,ch__$1,mult__$1,meta25871));
});})(cs))
;
}
return (new cljs.core.async.t25870(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__21200__auto___26082 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__21201__auto__ = (function (){var switch__21137__auto__ = (function (state_26000){var state_val_26001 = (state_26000[1]);if((state_val_26001 === 32))
{try{var inst_25875 = (state_26000[5]);var inst_25951 = (state_26000[6]);var inst_25957 = cljs.core.async.put_BANG_.call(null,inst_25951,inst_25875,done);var state_26000__$1 = state_26000;var statearr_26004_26083 = state_26000__$1;(statearr_26004_26083[2] = inst_25957);
(statearr_26004_26083[1] = 30);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e26002){if((e26002 instanceof Object))
{var ex__21131__auto__ = e26002;var statearr_26003_26084 = state_26000;(statearr_26003_26084[1] = 31);
(statearr_26003_26084[2] = ex__21131__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26002;
} else
{return null;
}
}
}} else
{if((state_val_26001 === 1))
{var state_26000__$1 = state_26000;var statearr_26005_26085 = state_26000__$1;(statearr_26005_26085[2] = null);
(statearr_26005_26085[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26001 === 33))
{var inst_25963 = (state_26000[7]);var inst_25965 = cljs.core.chunked_seq_QMARK_.call(null,inst_25963);var state_26000__$1 = state_26000;if(inst_25965)
{var statearr_26006_26086 = state_26000__$1;(statearr_26006_26086[1] = 36);
} else
{var statearr_26007_26087 = state_26000__$1;(statearr_26007_26087[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26001 === 2))
{var state_26000__$1 = state_26000;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26000__$1,4,ch);
} else
{if((state_val_26001 === 34))
{var state_26000__$1 = state_26000;var statearr_26008_26088 = state_26000__$1;(statearr_26008_26088[2] = null);
(statearr_26008_26088[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26001 === 3))
{var inst_25998 = (state_26000[2]);var state_26000__$1 = state_26000;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26000__$1,inst_25998);
} else
{if((state_val_26001 === 35))
{var inst_25987 = (state_26000[2]);var state_26000__$1 = state_26000;var statearr_26009_26089 = state_26000__$1;(statearr_26009_26089[2] = inst_25987);
(statearr_26009_26089[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26001 === 4))
{var inst_25875 = (state_26000[5]);var inst_25875__$1 = (state_26000[2]);var inst_25876 = (inst_25875__$1 == null);var state_26000__$1 = (function (){var statearr_26010 = state_26000;(statearr_26010[5] = inst_25875__$1);
return statearr_26010;
})();if(cljs.core.truth_(inst_25876))
{var statearr_26011_26090 = state_26000__$1;(statearr_26011_26090[1] = 5);
} else
{var statearr_26012_26091 = state_26000__$1;(statearr_26012_26091[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26001 === 36))
{var inst_25963 = (state_26000[7]);var inst_25967 = cljs.core.chunk_first.call(null,inst_25963);var inst_25968 = cljs.core.chunk_rest.call(null,inst_25963);var inst_25969 = cljs.core.count.call(null,inst_25967);var inst_25943 = inst_25968;var inst_25944 = inst_25967;var inst_25945 = inst_25969;var inst_25946 = 0;var state_26000__$1 = (function (){var statearr_26013 = state_26000;(statearr_26013[8] = inst_25943);
(statearr_26013[9] = inst_25944);
(statearr_26013[10] = inst_25945);
(statearr_26013[11] = inst_25946);
return statearr_26013;
})();var statearr_26014_26092 = state_26000__$1;(statearr_26014_26092[2] = null);
(statearr_26014_26092[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26001 === 5))
{var inst_25882 = cljs.core.deref.call(null,cs);var inst_25883 = cljs.core.seq.call(null,inst_25882);var inst_25884 = inst_25883;var inst_25885 = null;var inst_25886 = 0;var inst_25887 = 0;var state_26000__$1 = (function (){var statearr_26015 = state_26000;(statearr_26015[12] = inst_25887);
(statearr_26015[13] = inst_25886);
(statearr_26015[14] = inst_25885);
(statearr_26015[15] = inst_25884);
return statearr_26015;
})();var statearr_26016_26093 = state_26000__$1;(statearr_26016_26093[2] = null);
(statearr_26016_26093[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26001 === 37))
{var inst_25963 = (state_26000[7]);var inst_25972 = cljs.core.first.call(null,inst_25963);var state_26000__$1 = (function (){var statearr_26017 = state_26000;(statearr_26017[16] = inst_25972);
return statearr_26017;
})();var statearr_26018_26094 = state_26000__$1;(statearr_26018_26094[2] = null);
(statearr_26018_26094[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26001 === 6))
{var inst_25934 = cljs.core.deref.call(null,cs);var inst_25935 = cljs.core.keys.call(null,inst_25934);var inst_25936 = cljs.core.count.call(null,inst_25935);var inst_25937 = cljs.core.reset_BANG_.call(null,dctr,inst_25936);var inst_25942 = cljs.core.seq.call(null,inst_25935);var inst_25943 = inst_25942;var inst_25944 = null;var inst_25945 = 0;var inst_25946 = 0;var state_26000__$1 = (function (){var statearr_26019 = state_26000;(statearr_26019[17] = inst_25937);
(statearr_26019[8] = inst_25943);
(statearr_26019[9] = inst_25944);
(statearr_26019[10] = inst_25945);
(statearr_26019[11] = inst_25946);
return statearr_26019;
})();var statearr_26020_26095 = state_26000__$1;(statearr_26020_26095[2] = null);
(statearr_26020_26095[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26001 === 38))
{var inst_25984 = (state_26000[2]);var state_26000__$1 = state_26000;var statearr_26021_26096 = state_26000__$1;(statearr_26021_26096[2] = inst_25984);
(statearr_26021_26096[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26001 === 7))
{var inst_25996 = (state_26000[2]);var state_26000__$1 = state_26000;var statearr_26022_26097 = state_26000__$1;(statearr_26022_26097[2] = inst_25996);
(statearr_26022_26097[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26001 === 39))
{var inst_25963 = (state_26000[7]);var inst_25980 = (state_26000[2]);var inst_25981 = cljs.core.next.call(null,inst_25963);var inst_25943 = inst_25981;var inst_25944 = null;var inst_25945 = 0;var inst_25946 = 0;var state_26000__$1 = (function (){var statearr_26023 = state_26000;(statearr_26023[18] = inst_25980);
(statearr_26023[8] = inst_25943);
(statearr_26023[9] = inst_25944);
(statearr_26023[10] = inst_25945);
(statearr_26023[11] = inst_25946);
return statearr_26023;
})();var statearr_26024_26098 = state_26000__$1;(statearr_26024_26098[2] = null);
(statearr_26024_26098[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26001 === 8))
{var inst_25887 = (state_26000[12]);var inst_25886 = (state_26000[13]);var inst_25889 = (inst_25887 < inst_25886);var inst_25890 = inst_25889;var state_26000__$1 = state_26000;if(cljs.core.truth_(inst_25890))
{var statearr_26025_26099 = state_26000__$1;(statearr_26025_26099[1] = 10);
} else
{var statearr_26026_26100 = state_26000__$1;(statearr_26026_26100[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26001 === 40))
{var inst_25972 = (state_26000[16]);var inst_25973 = (state_26000[2]);var inst_25974 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_25975 = cljs.core.async.untap_STAR_.call(null,m,inst_25972);var state_26000__$1 = (function (){var statearr_26027 = state_26000;(statearr_26027[19] = inst_25974);
(statearr_26027[20] = inst_25973);
return statearr_26027;
})();var statearr_26028_26101 = state_26000__$1;(statearr_26028_26101[2] = inst_25975);
(statearr_26028_26101[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26001 === 9))
{var inst_25932 = (state_26000[2]);var state_26000__$1 = state_26000;var statearr_26029_26102 = state_26000__$1;(statearr_26029_26102[2] = inst_25932);
(statearr_26029_26102[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26001 === 41))
{try{var inst_25972 = (state_26000[16]);var inst_25875 = (state_26000[5]);var inst_25978 = cljs.core.async.put_BANG_.call(null,inst_25972,inst_25875,done);var state_26000__$1 = state_26000;var statearr_26032_26103 = state_26000__$1;(statearr_26032_26103[2] = inst_25978);
(statearr_26032_26103[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e26030){if((e26030 instanceof Object))
{var ex__21131__auto__ = e26030;var statearr_26031_26104 = state_26000;(statearr_26031_26104[1] = 40);
(statearr_26031_26104[2] = ex__21131__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26030;
} else
{return null;
}
}
}} else
{if((state_val_26001 === 10))
{var inst_25887 = (state_26000[12]);var inst_25885 = (state_26000[14]);var inst_25893 = cljs.core._nth.call(null,inst_25885,inst_25887);var inst_25894 = cljs.core.nth.call(null,inst_25893,0,null);var inst_25895 = cljs.core.nth.call(null,inst_25893,1,null);var state_26000__$1 = (function (){var statearr_26033 = state_26000;(statearr_26033[21] = inst_25894);
return statearr_26033;
})();if(cljs.core.truth_(inst_25895))
{var statearr_26034_26105 = state_26000__$1;(statearr_26034_26105[1] = 13);
} else
{var statearr_26035_26106 = state_26000__$1;(statearr_26035_26106[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26001 === 42))
{var inst_25993 = (state_26000[2]);var state_26000__$1 = (function (){var statearr_26036 = state_26000;(statearr_26036[22] = inst_25993);
return statearr_26036;
})();var statearr_26037_26107 = state_26000__$1;(statearr_26037_26107[2] = null);
(statearr_26037_26107[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26001 === 11))
{var inst_25904 = (state_26000[23]);var inst_25884 = (state_26000[15]);var inst_25904__$1 = cljs.core.seq.call(null,inst_25884);var state_26000__$1 = (function (){var statearr_26038 = state_26000;(statearr_26038[23] = inst_25904__$1);
return statearr_26038;
})();if(inst_25904__$1)
{var statearr_26039_26108 = state_26000__$1;(statearr_26039_26108[1] = 16);
} else
{var statearr_26040_26109 = state_26000__$1;(statearr_26040_26109[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26001 === 12))
{var inst_25930 = (state_26000[2]);var state_26000__$1 = state_26000;var statearr_26041_26110 = state_26000__$1;(statearr_26041_26110[2] = inst_25930);
(statearr_26041_26110[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26001 === 13))
{var inst_25894 = (state_26000[21]);var inst_25897 = cljs.core.async.close_BANG_.call(null,inst_25894);var state_26000__$1 = state_26000;var statearr_26045_26111 = state_26000__$1;(statearr_26045_26111[2] = inst_25897);
(statearr_26045_26111[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26001 === 14))
{var state_26000__$1 = state_26000;var statearr_26046_26112 = state_26000__$1;(statearr_26046_26112[2] = null);
(statearr_26046_26112[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26001 === 15))
{var inst_25887 = (state_26000[12]);var inst_25886 = (state_26000[13]);var inst_25885 = (state_26000[14]);var inst_25884 = (state_26000[15]);var inst_25900 = (state_26000[2]);var inst_25901 = (inst_25887 + 1);var tmp26042 = inst_25886;var tmp26043 = inst_25885;var tmp26044 = inst_25884;var inst_25884__$1 = tmp26044;var inst_25885__$1 = tmp26043;var inst_25886__$1 = tmp26042;var inst_25887__$1 = inst_25901;var state_26000__$1 = (function (){var statearr_26047 = state_26000;(statearr_26047[12] = inst_25887__$1);
(statearr_26047[13] = inst_25886__$1);
(statearr_26047[14] = inst_25885__$1);
(statearr_26047[15] = inst_25884__$1);
(statearr_26047[24] = inst_25900);
return statearr_26047;
})();var statearr_26048_26113 = state_26000__$1;(statearr_26048_26113[2] = null);
(statearr_26048_26113[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26001 === 16))
{var inst_25904 = (state_26000[23]);var inst_25906 = cljs.core.chunked_seq_QMARK_.call(null,inst_25904);var state_26000__$1 = state_26000;if(inst_25906)
{var statearr_26049_26114 = state_26000__$1;(statearr_26049_26114[1] = 19);
} else
{var statearr_26050_26115 = state_26000__$1;(statearr_26050_26115[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26001 === 17))
{var state_26000__$1 = state_26000;var statearr_26051_26116 = state_26000__$1;(statearr_26051_26116[2] = null);
(statearr_26051_26116[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26001 === 18))
{var inst_25928 = (state_26000[2]);var state_26000__$1 = state_26000;var statearr_26052_26117 = state_26000__$1;(statearr_26052_26117[2] = inst_25928);
(statearr_26052_26117[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26001 === 19))
{var inst_25904 = (state_26000[23]);var inst_25908 = cljs.core.chunk_first.call(null,inst_25904);var inst_25909 = cljs.core.chunk_rest.call(null,inst_25904);var inst_25910 = cljs.core.count.call(null,inst_25908);var inst_25884 = inst_25909;var inst_25885 = inst_25908;var inst_25886 = inst_25910;var inst_25887 = 0;var state_26000__$1 = (function (){var statearr_26053 = state_26000;(statearr_26053[12] = inst_25887);
(statearr_26053[13] = inst_25886);
(statearr_26053[14] = inst_25885);
(statearr_26053[15] = inst_25884);
return statearr_26053;
})();var statearr_26054_26118 = state_26000__$1;(statearr_26054_26118[2] = null);
(statearr_26054_26118[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26001 === 20))
{var inst_25904 = (state_26000[23]);var inst_25914 = cljs.core.first.call(null,inst_25904);var inst_25915 = cljs.core.nth.call(null,inst_25914,0,null);var inst_25916 = cljs.core.nth.call(null,inst_25914,1,null);var state_26000__$1 = (function (){var statearr_26055 = state_26000;(statearr_26055[25] = inst_25915);
return statearr_26055;
})();if(cljs.core.truth_(inst_25916))
{var statearr_26056_26119 = state_26000__$1;(statearr_26056_26119[1] = 22);
} else
{var statearr_26057_26120 = state_26000__$1;(statearr_26057_26120[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26001 === 21))
{var inst_25925 = (state_26000[2]);var state_26000__$1 = state_26000;var statearr_26058_26121 = state_26000__$1;(statearr_26058_26121[2] = inst_25925);
(statearr_26058_26121[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26001 === 22))
{var inst_25915 = (state_26000[25]);var inst_25918 = cljs.core.async.close_BANG_.call(null,inst_25915);var state_26000__$1 = state_26000;var statearr_26059_26122 = state_26000__$1;(statearr_26059_26122[2] = inst_25918);
(statearr_26059_26122[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26001 === 23))
{var state_26000__$1 = state_26000;var statearr_26060_26123 = state_26000__$1;(statearr_26060_26123[2] = null);
(statearr_26060_26123[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26001 === 24))
{var inst_25904 = (state_26000[23]);var inst_25921 = (state_26000[2]);var inst_25922 = cljs.core.next.call(null,inst_25904);var inst_25884 = inst_25922;var inst_25885 = null;var inst_25886 = 0;var inst_25887 = 0;var state_26000__$1 = (function (){var statearr_26061 = state_26000;(statearr_26061[26] = inst_25921);
(statearr_26061[12] = inst_25887);
(statearr_26061[13] = inst_25886);
(statearr_26061[14] = inst_25885);
(statearr_26061[15] = inst_25884);
return statearr_26061;
})();var statearr_26062_26124 = state_26000__$1;(statearr_26062_26124[2] = null);
(statearr_26062_26124[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26001 === 25))
{var inst_25945 = (state_26000[10]);var inst_25946 = (state_26000[11]);var inst_25948 = (inst_25946 < inst_25945);var inst_25949 = inst_25948;var state_26000__$1 = state_26000;if(cljs.core.truth_(inst_25949))
{var statearr_26063_26125 = state_26000__$1;(statearr_26063_26125[1] = 27);
} else
{var statearr_26064_26126 = state_26000__$1;(statearr_26064_26126[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26001 === 26))
{var inst_25991 = (state_26000[2]);var state_26000__$1 = (function (){var statearr_26065 = state_26000;(statearr_26065[27] = inst_25991);
return statearr_26065;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26000__$1,42,dchan);
} else
{if((state_val_26001 === 27))
{var inst_25944 = (state_26000[9]);var inst_25946 = (state_26000[11]);var inst_25951 = cljs.core._nth.call(null,inst_25944,inst_25946);var state_26000__$1 = (function (){var statearr_26066 = state_26000;(statearr_26066[6] = inst_25951);
return statearr_26066;
})();var statearr_26067_26127 = state_26000__$1;(statearr_26067_26127[2] = null);
(statearr_26067_26127[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26001 === 28))
{var inst_25963 = (state_26000[7]);var inst_25943 = (state_26000[8]);var inst_25963__$1 = cljs.core.seq.call(null,inst_25943);var state_26000__$1 = (function (){var statearr_26071 = state_26000;(statearr_26071[7] = inst_25963__$1);
return statearr_26071;
})();if(inst_25963__$1)
{var statearr_26072_26128 = state_26000__$1;(statearr_26072_26128[1] = 33);
} else
{var statearr_26073_26129 = state_26000__$1;(statearr_26073_26129[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26001 === 29))
{var inst_25989 = (state_26000[2]);var state_26000__$1 = state_26000;var statearr_26074_26130 = state_26000__$1;(statearr_26074_26130[2] = inst_25989);
(statearr_26074_26130[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26001 === 30))
{var inst_25943 = (state_26000[8]);var inst_25944 = (state_26000[9]);var inst_25945 = (state_26000[10]);var inst_25946 = (state_26000[11]);var inst_25959 = (state_26000[2]);var inst_25960 = (inst_25946 + 1);var tmp26068 = inst_25943;var tmp26069 = inst_25944;var tmp26070 = inst_25945;var inst_25943__$1 = tmp26068;var inst_25944__$1 = tmp26069;var inst_25945__$1 = tmp26070;var inst_25946__$1 = inst_25960;var state_26000__$1 = (function (){var statearr_26075 = state_26000;(statearr_26075[28] = inst_25959);
(statearr_26075[8] = inst_25943__$1);
(statearr_26075[9] = inst_25944__$1);
(statearr_26075[10] = inst_25945__$1);
(statearr_26075[11] = inst_25946__$1);
return statearr_26075;
})();var statearr_26076_26131 = state_26000__$1;(statearr_26076_26131[2] = null);
(statearr_26076_26131[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26001 === 31))
{var inst_25951 = (state_26000[6]);var inst_25952 = (state_26000[2]);var inst_25953 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_25954 = cljs.core.async.untap_STAR_.call(null,m,inst_25951);var state_26000__$1 = (function (){var statearr_26077 = state_26000;(statearr_26077[29] = inst_25953);
(statearr_26077[30] = inst_25952);
return statearr_26077;
})();var statearr_26078_26132 = state_26000__$1;(statearr_26078_26132[2] = inst_25954);
(statearr_26078_26132[1] = 30);
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
});return ((function (switch__21137__auto__){
return (function() {
var state_machine__21138__auto__ = null;
var state_machine__21138__auto____0 = (function (){var statearr_26080 = (new Array(31));(statearr_26080[0] = state_machine__21138__auto__);
(statearr_26080[1] = 1);
return statearr_26080;
});
var state_machine__21138__auto____1 = (function (state_26000){while(true){
var result__21139__auto__ = switch__21137__auto__.call(null,state_26000);if(cljs.core.keyword_identical_QMARK_.call(null,result__21139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__21139__auto__;
}
break;
}
});
state_machine__21138__auto__ = function(state_26000){
switch(arguments.length){
case 0:
return state_machine__21138__auto____0.call(this);
case 1:
return state_machine__21138__auto____1.call(this,state_26000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__21138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__21138__auto____0;
state_machine__21138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__21138__auto____1;
return state_machine__21138__auto__;
})()
;})(switch__21137__auto__))
})();var state__21202__auto__ = (function (){var statearr_26081 = f__21201__auto__.call(null);(statearr_26081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21200__auto___26082);
return statearr_26081;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21202__auto__);
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
{var x__19722__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19722__auto__)]);if(or__3943__auto__)
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
{var x__19722__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19722__auto__)]);if(or__3943__auto__)
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
{var x__19722__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19722__auto__)]);if(or__3943__auto__)
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
{var x__19722__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19722__auto__)]);if(or__3943__auto__)
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
{var x__19722__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19722__auto__)]);if(or__3943__auto__)
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
;var m = (function (){if(typeof cljs.core.async.t26253 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t26253');

/**
* @constructor
*/
cljs.core.async.t26253 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta26254){
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
this.meta26254 = meta26254;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26253.cljs$lang$type = true;
cljs.core.async.t26253.cljs$lang$ctorStr = "cljs.core.async/t26253";
cljs.core.async.t26253.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19659__auto__,writer__19660__auto__,opt__19661__auto__){return cljs.core._write.call(null,writer__19660__auto__,"cljs.core.async/t26253");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26253.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t26253.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26253.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26253.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26253.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26253.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26253.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26253.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26253.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26255){var self__ = this;
return self__.meta26254;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26255,meta26254__$1){var self__ = this;
return (new cljs.core.async.t26253(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta26254__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t26253 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t26253(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta26254){return (new cljs.core.async.t26253(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta26254));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t26253(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__21200__auto___26373 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__21201__auto__ = (function (){var switch__21137__auto__ = (function (state_26326){var state_val_26327 = (state_26326[1]);if((state_val_26327 === 1))
{var inst_26259 = (state_26326[5]);var inst_26259__$1 = calc_state.call(null);var inst_26260 = cljs.core.seq_QMARK_.call(null,inst_26259__$1);var state_26326__$1 = (function (){var statearr_26328 = state_26326;(statearr_26328[5] = inst_26259__$1);
return statearr_26328;
})();if(inst_26260)
{var statearr_26329_26374 = state_26326__$1;(statearr_26329_26374[1] = 2);
} else
{var statearr_26330_26375 = state_26326__$1;(statearr_26330_26375[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26327 === 2))
{var inst_26259 = (state_26326[5]);var inst_26262 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26259);var state_26326__$1 = state_26326;var statearr_26331_26376 = state_26326__$1;(statearr_26331_26376[2] = inst_26262);
(statearr_26331_26376[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26327 === 3))
{var inst_26259 = (state_26326[5]);var state_26326__$1 = state_26326;var statearr_26332_26377 = state_26326__$1;(statearr_26332_26377[2] = inst_26259);
(statearr_26332_26377[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26327 === 4))
{var inst_26259 = (state_26326[5]);var inst_26265 = (state_26326[2]);var inst_26266 = cljs.core.get.call(null,inst_26265,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_26267 = cljs.core.get.call(null,inst_26265,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_26268 = cljs.core.get.call(null,inst_26265,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_26269 = inst_26259;var state_26326__$1 = (function (){var statearr_26333 = state_26326;(statearr_26333[6] = inst_26267);
(statearr_26333[7] = inst_26268);
(statearr_26333[8] = inst_26266);
(statearr_26333[9] = inst_26269);
return statearr_26333;
})();var statearr_26334_26378 = state_26326__$1;(statearr_26334_26378[2] = null);
(statearr_26334_26378[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26327 === 5))
{var inst_26269 = (state_26326[9]);var inst_26272 = cljs.core.seq_QMARK_.call(null,inst_26269);var state_26326__$1 = state_26326;if(inst_26272)
{var statearr_26335_26379 = state_26326__$1;(statearr_26335_26379[1] = 7);
} else
{var statearr_26336_26380 = state_26326__$1;(statearr_26336_26380[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26327 === 6))
{var inst_26324 = (state_26326[2]);var state_26326__$1 = state_26326;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26326__$1,inst_26324);
} else
{if((state_val_26327 === 7))
{var inst_26269 = (state_26326[9]);var inst_26274 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26269);var state_26326__$1 = state_26326;var statearr_26337_26381 = state_26326__$1;(statearr_26337_26381[2] = inst_26274);
(statearr_26337_26381[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26327 === 8))
{var inst_26269 = (state_26326[9]);var state_26326__$1 = state_26326;var statearr_26338_26382 = state_26326__$1;(statearr_26338_26382[2] = inst_26269);
(statearr_26338_26382[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26327 === 9))
{var inst_26277 = (state_26326[10]);var inst_26277__$1 = (state_26326[2]);var inst_26278 = cljs.core.get.call(null,inst_26277__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_26279 = cljs.core.get.call(null,inst_26277__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_26280 = cljs.core.get.call(null,inst_26277__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_26326__$1 = (function (){var statearr_26339 = state_26326;(statearr_26339[11] = inst_26279);
(statearr_26339[12] = inst_26280);
(statearr_26339[10] = inst_26277__$1);
return statearr_26339;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_26326__$1,10,inst_26278);
} else
{if((state_val_26327 === 10))
{var inst_26284 = (state_26326[13]);var inst_26286 = (state_26326[14]);var inst_26283 = (state_26326[2]);var inst_26284__$1 = cljs.core.nth.call(null,inst_26283,0,null);var inst_26285 = cljs.core.nth.call(null,inst_26283,1,null);var inst_26286__$1 = (inst_26284__$1 == null);var state_26326__$1 = (function (){var statearr_26340 = state_26326;(statearr_26340[13] = inst_26284__$1);
(statearr_26340[14] = inst_26286__$1);
(statearr_26340[15] = inst_26285);
return statearr_26340;
})();if(cljs.core.truth_(inst_26286__$1))
{var statearr_26341_26383 = state_26326__$1;(statearr_26341_26383[1] = 11);
} else
{var statearr_26342_26384 = state_26326__$1;(statearr_26342_26384[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26327 === 11))
{var inst_26286 = (state_26326[14]);var state_26326__$1 = state_26326;var statearr_26343_26385 = state_26326__$1;(statearr_26343_26385[2] = inst_26286);
(statearr_26343_26385[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26327 === 12))
{var inst_26285 = (state_26326[15]);var inst_26289 = cljs.core._EQ_.call(null,inst_26285,change);var state_26326__$1 = state_26326;var statearr_26344_26386 = state_26326__$1;(statearr_26344_26386[2] = inst_26289);
(statearr_26344_26386[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26327 === 13))
{var inst_26291 = (state_26326[2]);var state_26326__$1 = state_26326;if(cljs.core.truth_(inst_26291))
{var statearr_26345_26387 = state_26326__$1;(statearr_26345_26387[1] = 14);
} else
{var statearr_26346_26388 = state_26326__$1;(statearr_26346_26388[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26327 === 14))
{var inst_26284 = (state_26326[13]);var inst_26293 = (inst_26284 == null);var state_26326__$1 = state_26326;if(cljs.core.truth_(inst_26293))
{var statearr_26347_26389 = state_26326__$1;(statearr_26347_26389[1] = 17);
} else
{var statearr_26348_26390 = state_26326__$1;(statearr_26348_26390[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26327 === 15))
{var inst_26280 = (state_26326[12]);var inst_26302 = (state_26326[16]);var inst_26285 = (state_26326[15]);var inst_26302__$1 = inst_26280.call(null,inst_26285);var state_26326__$1 = (function (){var statearr_26349 = state_26326;(statearr_26349[16] = inst_26302__$1);
return statearr_26349;
})();if(cljs.core.truth_(inst_26302__$1))
{var statearr_26350_26391 = state_26326__$1;(statearr_26350_26391[1] = 20);
} else
{var statearr_26351_26392 = state_26326__$1;(statearr_26351_26392[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26327 === 16))
{var inst_26322 = (state_26326[2]);var state_26326__$1 = state_26326;var statearr_26352_26393 = state_26326__$1;(statearr_26352_26393[2] = inst_26322);
(statearr_26352_26393[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26327 === 17))
{var inst_26285 = (state_26326[15]);var inst_26295 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26285);var state_26326__$1 = state_26326;var statearr_26353_26394 = state_26326__$1;(statearr_26353_26394[2] = inst_26295);
(statearr_26353_26394[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26327 === 18))
{var state_26326__$1 = state_26326;var statearr_26354_26395 = state_26326__$1;(statearr_26354_26395[2] = null);
(statearr_26354_26395[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26327 === 19))
{var inst_26298 = (state_26326[2]);var inst_26299 = calc_state.call(null);var inst_26269 = inst_26299;var state_26326__$1 = (function (){var statearr_26355 = state_26326;(statearr_26355[9] = inst_26269);
(statearr_26355[17] = inst_26298);
return statearr_26355;
})();var statearr_26356_26396 = state_26326__$1;(statearr_26356_26396[2] = null);
(statearr_26356_26396[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26327 === 20))
{var inst_26302 = (state_26326[16]);var state_26326__$1 = state_26326;var statearr_26357_26397 = state_26326__$1;(statearr_26357_26397[2] = inst_26302);
(statearr_26357_26397[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26327 === 21))
{var inst_26280 = (state_26326[12]);var inst_26305 = (state_26326[18]);var inst_26305__$1 = cljs.core.empty_QMARK_.call(null,inst_26280);var state_26326__$1 = (function (){var statearr_26358 = state_26326;(statearr_26358[18] = inst_26305__$1);
return statearr_26358;
})();if(inst_26305__$1)
{var statearr_26359_26398 = state_26326__$1;(statearr_26359_26398[1] = 23);
} else
{var statearr_26360_26399 = state_26326__$1;(statearr_26360_26399[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26327 === 22))
{var inst_26313 = (state_26326[2]);var state_26326__$1 = state_26326;if(cljs.core.truth_(inst_26313))
{var statearr_26361_26400 = state_26326__$1;(statearr_26361_26400[1] = 26);
} else
{var statearr_26362_26401 = state_26326__$1;(statearr_26362_26401[1] = 27);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26327 === 23))
{var inst_26279 = (state_26326[11]);var inst_26285 = (state_26326[15]);var inst_26307 = inst_26279.call(null,inst_26285);var inst_26308 = cljs.core.not.call(null,inst_26307);var state_26326__$1 = state_26326;var statearr_26363_26402 = state_26326__$1;(statearr_26363_26402[2] = inst_26308);
(statearr_26363_26402[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26327 === 24))
{var inst_26305 = (state_26326[18]);var state_26326__$1 = state_26326;var statearr_26364_26403 = state_26326__$1;(statearr_26364_26403[2] = inst_26305);
(statearr_26364_26403[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26327 === 25))
{var inst_26311 = (state_26326[2]);var state_26326__$1 = state_26326;var statearr_26365_26404 = state_26326__$1;(statearr_26365_26404[2] = inst_26311);
(statearr_26365_26404[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26327 === 26))
{var inst_26284 = (state_26326[13]);var state_26326__$1 = state_26326;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26326__$1,29,out,inst_26284);
} else
{if((state_val_26327 === 27))
{var state_26326__$1 = state_26326;var statearr_26366_26405 = state_26326__$1;(statearr_26366_26405[2] = null);
(statearr_26366_26405[1] = 28);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26327 === 28))
{var inst_26277 = (state_26326[10]);var inst_26319 = (state_26326[2]);var inst_26269 = inst_26277;var state_26326__$1 = (function (){var statearr_26367 = state_26326;(statearr_26367[9] = inst_26269);
(statearr_26367[19] = inst_26319);
return statearr_26367;
})();var statearr_26368_26406 = state_26326__$1;(statearr_26368_26406[2] = null);
(statearr_26368_26406[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26327 === 29))
{var inst_26316 = (state_26326[2]);var state_26326__$1 = state_26326;var statearr_26369_26407 = state_26326__$1;(statearr_26369_26407[2] = inst_26316);
(statearr_26369_26407[1] = 28);
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
});return ((function (switch__21137__auto__){
return (function() {
var state_machine__21138__auto__ = null;
var state_machine__21138__auto____0 = (function (){var statearr_26371 = (new Array(20));(statearr_26371[0] = state_machine__21138__auto__);
(statearr_26371[1] = 1);
return statearr_26371;
});
var state_machine__21138__auto____1 = (function (state_26326){while(true){
var result__21139__auto__ = switch__21137__auto__.call(null,state_26326);if(cljs.core.keyword_identical_QMARK_.call(null,result__21139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__21139__auto__;
}
break;
}
});
state_machine__21138__auto__ = function(state_26326){
switch(arguments.length){
case 0:
return state_machine__21138__auto____0.call(this);
case 1:
return state_machine__21138__auto____1.call(this,state_26326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__21138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__21138__auto____0;
state_machine__21138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__21138__auto____1;
return state_machine__21138__auto__;
})()
;})(switch__21137__auto__))
})();var state__21202__auto__ = (function (){var statearr_26372 = f__21201__auto__.call(null);(statearr_26372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21200__auto___26373);
return statearr_26372;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21202__auto__);
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
{var x__19722__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19722__auto__)]);if(or__3943__auto__)
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
{var x__19722__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19722__auto__)]);if(or__3943__auto__)
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
{var x__19722__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19722__auto__)]);if(or__3943__auto__)
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
{var x__19722__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19722__auto__)]);if(or__3943__auto__)
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
return (function (p1__26408_SHARP_){if(cljs.core.truth_(p1__26408_SHARP_.call(null,topic)))
{return p1__26408_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__26408_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3943__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t26532 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t26532');

/**
* @constructor
*/
cljs.core.async.t26532 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26533){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26533 = meta26533;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26532.cljs$lang$type = true;
cljs.core.async.t26532.cljs$lang$ctorStr = "cljs.core.async/t26532";
cljs.core.async.t26532.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19659__auto__,writer__19660__auto__,opt__19661__auto__){return cljs.core._write.call(null,writer__19660__auto__,"cljs.core.async/t26532");
});})(mults,ensure_mult))
;
cljs.core.async.t26532.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t26532.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t26532.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t26532.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t26532.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t26532.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26532.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t26532.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26534){var self__ = this;
return self__.meta26533;
});})(mults,ensure_mult))
;
cljs.core.async.t26532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26534,meta26533__$1){var self__ = this;
return (new cljs.core.async.t26532(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26533__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t26532 = ((function (mults,ensure_mult){
return (function __GT_t26532(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26533){return (new cljs.core.async.t26532(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26533));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t26532(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__21200__auto___26655 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__21201__auto__ = (function (){var switch__21137__auto__ = (function (state_26607){var state_val_26608 = (state_26607[1]);if((state_val_26608 === 1))
{var state_26607__$1 = state_26607;var statearr_26609_26656 = state_26607__$1;(statearr_26609_26656[2] = null);
(statearr_26609_26656[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26608 === 2))
{var state_26607__$1 = state_26607;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26607__$1,4,ch);
} else
{if((state_val_26608 === 3))
{var inst_26605 = (state_26607[2]);var state_26607__$1 = state_26607;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26607__$1,inst_26605);
} else
{if((state_val_26608 === 4))
{var inst_26537 = (state_26607[5]);var inst_26537__$1 = (state_26607[2]);var inst_26538 = (inst_26537__$1 == null);var state_26607__$1 = (function (){var statearr_26610 = state_26607;(statearr_26610[5] = inst_26537__$1);
return statearr_26610;
})();if(cljs.core.truth_(inst_26538))
{var statearr_26611_26657 = state_26607__$1;(statearr_26611_26657[1] = 5);
} else
{var statearr_26612_26658 = state_26607__$1;(statearr_26612_26658[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26608 === 5))
{var inst_26544 = cljs.core.deref.call(null,mults);var inst_26545 = cljs.core.vals.call(null,inst_26544);var inst_26546 = cljs.core.seq.call(null,inst_26545);var inst_26547 = inst_26546;var inst_26548 = null;var inst_26549 = 0;var inst_26550 = 0;var state_26607__$1 = (function (){var statearr_26613 = state_26607;(statearr_26613[6] = inst_26548);
(statearr_26613[7] = inst_26549);
(statearr_26613[8] = inst_26547);
(statearr_26613[9] = inst_26550);
return statearr_26613;
})();var statearr_26614_26659 = state_26607__$1;(statearr_26614_26659[2] = null);
(statearr_26614_26659[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26608 === 6))
{var inst_26587 = (state_26607[10]);var inst_26585 = (state_26607[11]);var inst_26537 = (state_26607[5]);var inst_26585__$1 = topic_fn.call(null,inst_26537);var inst_26586 = cljs.core.deref.call(null,mults);var inst_26587__$1 = cljs.core.get.call(null,inst_26586,inst_26585__$1);var state_26607__$1 = (function (){var statearr_26615 = state_26607;(statearr_26615[10] = inst_26587__$1);
(statearr_26615[11] = inst_26585__$1);
return statearr_26615;
})();if(cljs.core.truth_(inst_26587__$1))
{var statearr_26616_26660 = state_26607__$1;(statearr_26616_26660[1] = 19);
} else
{var statearr_26617_26661 = state_26607__$1;(statearr_26617_26661[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26608 === 7))
{var inst_26603 = (state_26607[2]);var state_26607__$1 = state_26607;var statearr_26618_26662 = state_26607__$1;(statearr_26618_26662[2] = inst_26603);
(statearr_26618_26662[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26608 === 8))
{var inst_26549 = (state_26607[7]);var inst_26550 = (state_26607[9]);var inst_26552 = (inst_26550 < inst_26549);var inst_26553 = inst_26552;var state_26607__$1 = state_26607;if(cljs.core.truth_(inst_26553))
{var statearr_26622_26663 = state_26607__$1;(statearr_26622_26663[1] = 10);
} else
{var statearr_26623_26664 = state_26607__$1;(statearr_26623_26664[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26608 === 9))
{var inst_26583 = (state_26607[2]);var state_26607__$1 = state_26607;var statearr_26624_26665 = state_26607__$1;(statearr_26624_26665[2] = inst_26583);
(statearr_26624_26665[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26608 === 10))
{var inst_26548 = (state_26607[6]);var inst_26549 = (state_26607[7]);var inst_26547 = (state_26607[8]);var inst_26550 = (state_26607[9]);var inst_26555 = cljs.core._nth.call(null,inst_26548,inst_26550);var inst_26556 = cljs.core.async.muxch_STAR_.call(null,inst_26555);var inst_26557 = cljs.core.async.close_BANG_.call(null,inst_26556);var inst_26558 = (inst_26550 + 1);var tmp26619 = inst_26548;var tmp26620 = inst_26549;var tmp26621 = inst_26547;var inst_26547__$1 = tmp26621;var inst_26548__$1 = tmp26619;var inst_26549__$1 = tmp26620;var inst_26550__$1 = inst_26558;var state_26607__$1 = (function (){var statearr_26625 = state_26607;(statearr_26625[6] = inst_26548__$1);
(statearr_26625[7] = inst_26549__$1);
(statearr_26625[12] = inst_26557);
(statearr_26625[8] = inst_26547__$1);
(statearr_26625[9] = inst_26550__$1);
return statearr_26625;
})();var statearr_26626_26666 = state_26607__$1;(statearr_26626_26666[2] = null);
(statearr_26626_26666[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26608 === 11))
{var inst_26547 = (state_26607[8]);var inst_26561 = (state_26607[13]);var inst_26561__$1 = cljs.core.seq.call(null,inst_26547);var state_26607__$1 = (function (){var statearr_26627 = state_26607;(statearr_26627[13] = inst_26561__$1);
return statearr_26627;
})();if(inst_26561__$1)
{var statearr_26628_26667 = state_26607__$1;(statearr_26628_26667[1] = 13);
} else
{var statearr_26629_26668 = state_26607__$1;(statearr_26629_26668[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26608 === 12))
{var inst_26581 = (state_26607[2]);var state_26607__$1 = state_26607;var statearr_26630_26669 = state_26607__$1;(statearr_26630_26669[2] = inst_26581);
(statearr_26630_26669[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26608 === 13))
{var inst_26561 = (state_26607[13]);var inst_26563 = cljs.core.chunked_seq_QMARK_.call(null,inst_26561);var state_26607__$1 = state_26607;if(inst_26563)
{var statearr_26631_26670 = state_26607__$1;(statearr_26631_26670[1] = 16);
} else
{var statearr_26632_26671 = state_26607__$1;(statearr_26632_26671[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26608 === 14))
{var state_26607__$1 = state_26607;var statearr_26633_26672 = state_26607__$1;(statearr_26633_26672[2] = null);
(statearr_26633_26672[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26608 === 15))
{var inst_26579 = (state_26607[2]);var state_26607__$1 = state_26607;var statearr_26634_26673 = state_26607__$1;(statearr_26634_26673[2] = inst_26579);
(statearr_26634_26673[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26608 === 16))
{var inst_26561 = (state_26607[13]);var inst_26565 = cljs.core.chunk_first.call(null,inst_26561);var inst_26566 = cljs.core.chunk_rest.call(null,inst_26561);var inst_26567 = cljs.core.count.call(null,inst_26565);var inst_26547 = inst_26566;var inst_26548 = inst_26565;var inst_26549 = inst_26567;var inst_26550 = 0;var state_26607__$1 = (function (){var statearr_26635 = state_26607;(statearr_26635[6] = inst_26548);
(statearr_26635[7] = inst_26549);
(statearr_26635[8] = inst_26547);
(statearr_26635[9] = inst_26550);
return statearr_26635;
})();var statearr_26636_26674 = state_26607__$1;(statearr_26636_26674[2] = null);
(statearr_26636_26674[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26608 === 17))
{var inst_26561 = (state_26607[13]);var inst_26570 = cljs.core.first.call(null,inst_26561);var inst_26571 = cljs.core.async.muxch_STAR_.call(null,inst_26570);var inst_26572 = cljs.core.async.close_BANG_.call(null,inst_26571);var inst_26573 = cljs.core.next.call(null,inst_26561);var inst_26547 = inst_26573;var inst_26548 = null;var inst_26549 = 0;var inst_26550 = 0;var state_26607__$1 = (function (){var statearr_26637 = state_26607;(statearr_26637[6] = inst_26548);
(statearr_26637[7] = inst_26549);
(statearr_26637[8] = inst_26547);
(statearr_26637[9] = inst_26550);
(statearr_26637[14] = inst_26572);
return statearr_26637;
})();var statearr_26638_26675 = state_26607__$1;(statearr_26638_26675[2] = null);
(statearr_26638_26675[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26608 === 18))
{var inst_26576 = (state_26607[2]);var state_26607__$1 = state_26607;var statearr_26639_26676 = state_26607__$1;(statearr_26639_26676[2] = inst_26576);
(statearr_26639_26676[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26608 === 19))
{var state_26607__$1 = state_26607;var statearr_26640_26677 = state_26607__$1;(statearr_26640_26677[2] = null);
(statearr_26640_26677[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26608 === 20))
{var state_26607__$1 = state_26607;var statearr_26641_26678 = state_26607__$1;(statearr_26641_26678[2] = null);
(statearr_26641_26678[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26608 === 21))
{var inst_26600 = (state_26607[2]);var state_26607__$1 = (function (){var statearr_26642 = state_26607;(statearr_26642[15] = inst_26600);
return statearr_26642;
})();var statearr_26643_26679 = state_26607__$1;(statearr_26643_26679[2] = null);
(statearr_26643_26679[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26608 === 22))
{var inst_26597 = (state_26607[2]);var state_26607__$1 = state_26607;var statearr_26644_26680 = state_26607__$1;(statearr_26644_26680[2] = inst_26597);
(statearr_26644_26680[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26608 === 23))
{var inst_26585 = (state_26607[11]);var inst_26589 = (state_26607[2]);var inst_26590 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26585);var state_26607__$1 = (function (){var statearr_26645 = state_26607;(statearr_26645[16] = inst_26589);
return statearr_26645;
})();var statearr_26646_26681 = state_26607__$1;(statearr_26646_26681[2] = inst_26590);
(statearr_26646_26681[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26608 === 24))
{try{var inst_26587 = (state_26607[10]);var inst_26537 = (state_26607[5]);var inst_26593 = cljs.core.async.muxch_STAR_.call(null,inst_26587);var state_26607__$1 = state_26607;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26607__$1,25,inst_26593,inst_26537);
}catch (e26647){if((e26647 instanceof Object))
{var ex__21131__auto__ = e26647;var statearr_26648_26682 = state_26607;(statearr_26648_26682[1] = 23);
(statearr_26648_26682[2] = ex__21131__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26647;
} else
{return null;
}
}
}} else
{if((state_val_26608 === 25))
{try{var inst_26595 = (state_26607[2]);var state_26607__$1 = state_26607;var statearr_26651_26683 = state_26607__$1;(statearr_26651_26683[2] = inst_26595);
(statearr_26651_26683[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e26649){if((e26649 instanceof Object))
{var ex__21131__auto__ = e26649;var statearr_26650_26684 = state_26607;(statearr_26650_26684[1] = 23);
(statearr_26650_26684[2] = ex__21131__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26649;
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
});return ((function (switch__21137__auto__){
return (function() {
var state_machine__21138__auto__ = null;
var state_machine__21138__auto____0 = (function (){var statearr_26653 = (new Array(17));(statearr_26653[0] = state_machine__21138__auto__);
(statearr_26653[1] = 1);
return statearr_26653;
});
var state_machine__21138__auto____1 = (function (state_26607){while(true){
var result__21139__auto__ = switch__21137__auto__.call(null,state_26607);if(cljs.core.keyword_identical_QMARK_.call(null,result__21139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__21139__auto__;
}
break;
}
});
state_machine__21138__auto__ = function(state_26607){
switch(arguments.length){
case 0:
return state_machine__21138__auto____0.call(this);
case 1:
return state_machine__21138__auto____1.call(this,state_26607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__21138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__21138__auto____0;
state_machine__21138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__21138__auto____1;
return state_machine__21138__auto__;
})()
;})(switch__21137__auto__))
})();var state__21202__auto__ = (function (){var statearr_26654 = f__21201__auto__.call(null);(statearr_26654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21200__auto___26655);
return statearr_26654;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21202__auto__);
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
,cljs.core.range.call(null,cnt));var c__21200__auto___26815 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__21201__auto__ = (function (){var switch__21137__auto__ = (function (state_26787){var state_val_26788 = (state_26787[1]);if((state_val_26788 === 1))
{var state_26787__$1 = state_26787;var statearr_26789_26816 = state_26787__$1;(statearr_26789_26816[2] = null);
(statearr_26789_26816[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26788 === 2))
{var inst_26751 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_26752 = 0;var state_26787__$1 = (function (){var statearr_26790 = state_26787;(statearr_26790[5] = inst_26751);
(statearr_26790[6] = inst_26752);
return statearr_26790;
})();var statearr_26791_26817 = state_26787__$1;(statearr_26791_26817[2] = null);
(statearr_26791_26817[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26788 === 3))
{var inst_26785 = (state_26787[2]);var state_26787__$1 = state_26787;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26787__$1,inst_26785);
} else
{if((state_val_26788 === 4))
{var inst_26752 = (state_26787[6]);var inst_26754 = (inst_26752 < cnt);var state_26787__$1 = state_26787;if(cljs.core.truth_(inst_26754))
{var statearr_26792_26818 = state_26787__$1;(statearr_26792_26818[1] = 6);
} else
{var statearr_26793_26819 = state_26787__$1;(statearr_26793_26819[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26788 === 5))
{var inst_26771 = (state_26787[2]);var state_26787__$1 = (function (){var statearr_26794 = state_26787;(statearr_26794[7] = inst_26771);
return statearr_26794;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26787__$1,12,dchan);
} else
{if((state_val_26788 === 6))
{var state_26787__$1 = state_26787;var statearr_26795_26820 = state_26787__$1;(statearr_26795_26820[2] = null);
(statearr_26795_26820[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26788 === 7))
{var state_26787__$1 = state_26787;var statearr_26796_26821 = state_26787__$1;(statearr_26796_26821[2] = null);
(statearr_26796_26821[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26788 === 8))
{var inst_26769 = (state_26787[2]);var state_26787__$1 = state_26787;var statearr_26797_26822 = state_26787__$1;(statearr_26797_26822[2] = inst_26769);
(statearr_26797_26822[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26788 === 9))
{var inst_26752 = (state_26787[6]);var inst_26764 = (state_26787[2]);var inst_26765 = (inst_26752 + 1);var inst_26752__$1 = inst_26765;var state_26787__$1 = (function (){var statearr_26798 = state_26787;(statearr_26798[6] = inst_26752__$1);
(statearr_26798[8] = inst_26764);
return statearr_26798;
})();var statearr_26799_26823 = state_26787__$1;(statearr_26799_26823[2] = null);
(statearr_26799_26823[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26788 === 10))
{var inst_26756 = (state_26787[2]);var inst_26757 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_26787__$1 = (function (){var statearr_26800 = state_26787;(statearr_26800[9] = inst_26756);
return statearr_26800;
})();var statearr_26801_26824 = state_26787__$1;(statearr_26801_26824[2] = inst_26757);
(statearr_26801_26824[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26788 === 11))
{try{var inst_26752 = (state_26787[6]);var inst_26760 = chs__$1.call(null,inst_26752);var inst_26761 = done.call(null,inst_26752);var inst_26762 = cljs.core.async.take_BANG_.call(null,inst_26760,inst_26761);var state_26787__$1 = state_26787;var statearr_26804_26825 = state_26787__$1;(statearr_26804_26825[2] = inst_26762);
(statearr_26804_26825[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e26802){if((e26802 instanceof Object))
{var ex__21131__auto__ = e26802;var statearr_26803_26826 = state_26787;(statearr_26803_26826[1] = 10);
(statearr_26803_26826[2] = ex__21131__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26802;
} else
{return null;
}
}
}} else
{if((state_val_26788 === 12))
{var inst_26773 = (state_26787[10]);var inst_26773__$1 = (state_26787[2]);var inst_26774 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26773__$1);var state_26787__$1 = (function (){var statearr_26805 = state_26787;(statearr_26805[10] = inst_26773__$1);
return statearr_26805;
})();if(cljs.core.truth_(inst_26774))
{var statearr_26806_26827 = state_26787__$1;(statearr_26806_26827[1] = 13);
} else
{var statearr_26807_26828 = state_26787__$1;(statearr_26807_26828[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26788 === 13))
{var inst_26776 = cljs.core.async.close_BANG_.call(null,out);var state_26787__$1 = state_26787;var statearr_26808_26829 = state_26787__$1;(statearr_26808_26829[2] = inst_26776);
(statearr_26808_26829[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26788 === 14))
{var inst_26773 = (state_26787[10]);var inst_26778 = cljs.core.apply.call(null,f,inst_26773);var state_26787__$1 = state_26787;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26787__$1,16,out,inst_26778);
} else
{if((state_val_26788 === 15))
{var inst_26783 = (state_26787[2]);var state_26787__$1 = state_26787;var statearr_26809_26830 = state_26787__$1;(statearr_26809_26830[2] = inst_26783);
(statearr_26809_26830[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26788 === 16))
{var inst_26780 = (state_26787[2]);var state_26787__$1 = (function (){var statearr_26810 = state_26787;(statearr_26810[11] = inst_26780);
return statearr_26810;
})();var statearr_26811_26831 = state_26787__$1;(statearr_26811_26831[2] = null);
(statearr_26811_26831[1] = 2);
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
});return ((function (switch__21137__auto__){
return (function() {
var state_machine__21138__auto__ = null;
var state_machine__21138__auto____0 = (function (){var statearr_26813 = (new Array(12));(statearr_26813[0] = state_machine__21138__auto__);
(statearr_26813[1] = 1);
return statearr_26813;
});
var state_machine__21138__auto____1 = (function (state_26787){while(true){
var result__21139__auto__ = switch__21137__auto__.call(null,state_26787);if(cljs.core.keyword_identical_QMARK_.call(null,result__21139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__21139__auto__;
}
break;
}
});
state_machine__21138__auto__ = function(state_26787){
switch(arguments.length){
case 0:
return state_machine__21138__auto____0.call(this);
case 1:
return state_machine__21138__auto____1.call(this,state_26787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__21138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__21138__auto____0;
state_machine__21138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__21138__auto____1;
return state_machine__21138__auto__;
})()
;})(switch__21137__auto__))
})();var state__21202__auto__ = (function (){var statearr_26814 = f__21201__auto__.call(null);(statearr_26814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21200__auto___26815);
return statearr_26814;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21202__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__21200__auto___26931 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__21201__auto__ = (function (){var switch__21137__auto__ = (function (state_26911){var state_val_26912 = (state_26911[1]);if((state_val_26912 === 1))
{var inst_26882 = cljs.core.vec.call(null,chs);var inst_26883 = inst_26882;var state_26911__$1 = (function (){var statearr_26913 = state_26911;(statearr_26913[5] = inst_26883);
return statearr_26913;
})();var statearr_26914_26932 = state_26911__$1;(statearr_26914_26932[2] = null);
(statearr_26914_26932[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26912 === 2))
{var inst_26883 = (state_26911[5]);var inst_26885 = cljs.core.count.call(null,inst_26883);var inst_26886 = (inst_26885 > 0);var state_26911__$1 = state_26911;if(cljs.core.truth_(inst_26886))
{var statearr_26915_26933 = state_26911__$1;(statearr_26915_26933[1] = 4);
} else
{var statearr_26916_26934 = state_26911__$1;(statearr_26916_26934[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26912 === 3))
{var inst_26909 = (state_26911[2]);var state_26911__$1 = state_26911;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26911__$1,inst_26909);
} else
{if((state_val_26912 === 4))
{var inst_26883 = (state_26911[5]);var state_26911__$1 = state_26911;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_26911__$1,7,inst_26883);
} else
{if((state_val_26912 === 5))
{var inst_26905 = cljs.core.async.close_BANG_.call(null,out);var state_26911__$1 = state_26911;var statearr_26917_26935 = state_26911__$1;(statearr_26917_26935[2] = inst_26905);
(statearr_26917_26935[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26912 === 6))
{var inst_26907 = (state_26911[2]);var state_26911__$1 = state_26911;var statearr_26918_26936 = state_26911__$1;(statearr_26918_26936[2] = inst_26907);
(statearr_26918_26936[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26912 === 7))
{var inst_26891 = (state_26911[6]);var inst_26890 = (state_26911[7]);var inst_26890__$1 = (state_26911[2]);var inst_26891__$1 = cljs.core.nth.call(null,inst_26890__$1,0,null);var inst_26892 = cljs.core.nth.call(null,inst_26890__$1,1,null);var inst_26893 = (inst_26891__$1 == null);var state_26911__$1 = (function (){var statearr_26919 = state_26911;(statearr_26919[8] = inst_26892);
(statearr_26919[6] = inst_26891__$1);
(statearr_26919[7] = inst_26890__$1);
return statearr_26919;
})();if(cljs.core.truth_(inst_26893))
{var statearr_26920_26937 = state_26911__$1;(statearr_26920_26937[1] = 8);
} else
{var statearr_26921_26938 = state_26911__$1;(statearr_26921_26938[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26912 === 8))
{var inst_26883 = (state_26911[5]);var inst_26892 = (state_26911[8]);var inst_26891 = (state_26911[6]);var inst_26890 = (state_26911[7]);var inst_26895 = (function (){var c = inst_26892;var v = inst_26891;var vec__26888 = inst_26890;var cs = inst_26883;return ((function (c,v,vec__26888,cs,inst_26883,inst_26892,inst_26891,inst_26890,state_val_26912){
return (function (p1__26832_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__26832_SHARP_);
});
;})(c,v,vec__26888,cs,inst_26883,inst_26892,inst_26891,inst_26890,state_val_26912))
})();var inst_26896 = cljs.core.filterv.call(null,inst_26895,inst_26883);var inst_26883__$1 = inst_26896;var state_26911__$1 = (function (){var statearr_26922 = state_26911;(statearr_26922[5] = inst_26883__$1);
return statearr_26922;
})();var statearr_26923_26939 = state_26911__$1;(statearr_26923_26939[2] = null);
(statearr_26923_26939[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26912 === 9))
{var inst_26891 = (state_26911[6]);var state_26911__$1 = state_26911;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26911__$1,11,out,inst_26891);
} else
{if((state_val_26912 === 10))
{var inst_26903 = (state_26911[2]);var state_26911__$1 = state_26911;var statearr_26925_26940 = state_26911__$1;(statearr_26925_26940[2] = inst_26903);
(statearr_26925_26940[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26912 === 11))
{var inst_26883 = (state_26911[5]);var inst_26900 = (state_26911[2]);var tmp26924 = inst_26883;var inst_26883__$1 = tmp26924;var state_26911__$1 = (function (){var statearr_26926 = state_26911;(statearr_26926[9] = inst_26900);
(statearr_26926[5] = inst_26883__$1);
return statearr_26926;
})();var statearr_26927_26941 = state_26911__$1;(statearr_26927_26941[2] = null);
(statearr_26927_26941[1] = 2);
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
});return ((function (switch__21137__auto__){
return (function() {
var state_machine__21138__auto__ = null;
var state_machine__21138__auto____0 = (function (){var statearr_26929 = (new Array(10));(statearr_26929[0] = state_machine__21138__auto__);
(statearr_26929[1] = 1);
return statearr_26929;
});
var state_machine__21138__auto____1 = (function (state_26911){while(true){
var result__21139__auto__ = switch__21137__auto__.call(null,state_26911);if(cljs.core.keyword_identical_QMARK_.call(null,result__21139__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__21139__auto__;
}
break;
}
});
state_machine__21138__auto__ = function(state_26911){
switch(arguments.length){
case 0:
return state_machine__21138__auto____0.call(this);
case 1:
return state_machine__21138__auto____1.call(this,state_26911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__21138__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__21138__auto____0;
state_machine__21138__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__21138__auto____1;
return state_machine__21138__auto__;
})()
;})(switch__21137__auto__))
})();var state__21202__auto__ = (function (){var statearr_26930 = f__21201__auto__.call(null);(statearr_26930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21200__auto___26931);
return statearr_26930;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21202__auto__);
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
