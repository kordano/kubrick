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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12083 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12083');

/**
* @constructor
*/
cljs.core.async.t12083 = (function (f,fn_handler,meta12084){
this.f = f;
this.fn_handler = fn_handler;
this.meta12084 = meta12084;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12083.cljs$lang$type = true;
cljs.core.async.t12083.cljs$lang$ctorStr = "cljs.core.async/t12083";
cljs.core.async.t12083.cljs$lang$ctorPrWriter = (function (this__6772__auto__,writer__6773__auto__,opt__6774__auto__){return cljs.core._write.call(null,writer__6773__auto__,"cljs.core.async/t12083");
});
cljs.core.async.t12083.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12083.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return true;
});
cljs.core.async.t12083.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
return self__.f;
});
cljs.core.async.t12083.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12085){var self__ = this;
return self__.meta12084;
});
cljs.core.async.t12083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12085,meta12084__$1){var self__ = this;
return (new cljs.core.async.t12083(self__.f,self__.fn_handler,meta12084__$1));
});
cljs.core.async.__GT_t12083 = (function __GT_t12083(f__$1,fn_handler__$1,meta12084){return (new cljs.core.async.t12083(f__$1,fn_handler__$1,meta12084));
});
}
return (new cljs.core.async.t12083(f,fn_handler,null));
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
{var val_12086 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12086);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_12086);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__7049__auto___12087 = n;var x_12088 = 0;while(true){
if((x_12088 < n__7049__auto___12087))
{(a[x_12088] = 0);
{
var G__12089 = (x_12088 + 1);
x_12088 = G__12089;
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
var G__12090 = (i + 1);
i = G__12090;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12094 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12094');

/**
* @constructor
*/
cljs.core.async.t12094 = (function (flag,alt_flag,meta12095){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12095 = meta12095;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12094.cljs$lang$type = true;
cljs.core.async.t12094.cljs$lang$ctorStr = "cljs.core.async/t12094";
cljs.core.async.t12094.cljs$lang$ctorPrWriter = (function (this__6772__auto__,writer__6773__auto__,opt__6774__auto__){return cljs.core._write.call(null,writer__6773__auto__,"cljs.core.async/t12094");
});
cljs.core.async.t12094.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12094.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t12094.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t12094.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12096){var self__ = this;
return self__.meta12095;
});
cljs.core.async.t12094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12096,meta12095__$1){var self__ = this;
return (new cljs.core.async.t12094(self__.flag,self__.alt_flag,meta12095__$1));
});
cljs.core.async.__GT_t12094 = (function __GT_t12094(flag__$1,alt_flag__$1,meta12095){return (new cljs.core.async.t12094(flag__$1,alt_flag__$1,meta12095));
});
}
return (new cljs.core.async.t12094(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12100 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12100');

/**
* @constructor
*/
cljs.core.async.t12100 = (function (cb,flag,alt_handler,meta12101){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12101 = meta12101;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12100.cljs$lang$type = true;
cljs.core.async.t12100.cljs$lang$ctorStr = "cljs.core.async/t12100";
cljs.core.async.t12100.cljs$lang$ctorPrWriter = (function (this__6772__auto__,writer__6773__auto__,opt__6774__auto__){return cljs.core._write.call(null,writer__6773__auto__,"cljs.core.async/t12100");
});
cljs.core.async.t12100.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12100.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12100.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12100.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12102){var self__ = this;
return self__.meta12101;
});
cljs.core.async.t12100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12102,meta12101__$1){var self__ = this;
return (new cljs.core.async.t12100(self__.cb,self__.flag,self__.alt_handler,meta12101__$1));
});
cljs.core.async.__GT_t12100 = (function __GT_t12100(cb__$1,flag__$1,alt_handler__$1,meta12101){return (new cljs.core.async.t12100(cb__$1,flag__$1,alt_handler__$1,meta12101));
});
}
return (new cljs.core.async.t12100(cb,flag,alt_handler,null));
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
return (function (p1__12103_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__12103_SHARP_,port], true));
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
var G__12104 = (i + 1);
i = G__12104;
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
var alts_BANG___delegate = function (ports,p__12105){var map__12107 = p__12105;var map__12107__$1 = ((cljs.core.seq_QMARK_.call(null,map__12107))?cljs.core.apply.call(null,cljs.core.hash_map,map__12107):map__12107);var opts = map__12107__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__12105 = null;if (arguments.length > 1) {
  p__12105 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12105);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12108){
var ports = cljs.core.first(arglist__12108);
var p__12105 = cljs.core.rest(arglist__12108);
return alts_BANG___delegate(ports,p__12105);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t12116 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12116');

/**
* @constructor
*/
cljs.core.async.t12116 = (function (ch,f,map_LT_,meta12117){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12117 = meta12117;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12116.cljs$lang$type = true;
cljs.core.async.t12116.cljs$lang$ctorStr = "cljs.core.async/t12116";
cljs.core.async.t12116.cljs$lang$ctorPrWriter = (function (this__6772__auto__,writer__6773__auto__,opt__6774__auto__){return cljs.core._write.call(null,writer__6773__auto__,"cljs.core.async/t12116");
});
cljs.core.async.t12116.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12116.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t12116.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12116.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t12119 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12119');

/**
* @constructor
*/
cljs.core.async.t12119 = (function (fn1,_,meta12117,ch,f,map_LT_,meta12120){
this.fn1 = fn1;
this._ = _;
this.meta12117 = meta12117;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12120 = meta12120;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12119.cljs$lang$type = true;
cljs.core.async.t12119.cljs$lang$ctorStr = "cljs.core.async/t12119";
cljs.core.async.t12119.cljs$lang$ctorPrWriter = (function (this__6772__auto__,writer__6773__auto__,opt__6774__auto__){return cljs.core._write.call(null,writer__6773__auto__,"cljs.core.async/t12119");
});
cljs.core.async.t12119.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12119.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$2){var self__ = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t12119.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$2){var self__ = this;
return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t12119.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$2){var self__ = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1){
return (function (p1__12109_SHARP_){return f1.call(null,(((p1__12109_SHARP_ == null))?null:self__.f.call(null,p1__12109_SHARP_)));
});
;})(f1))
});
cljs.core.async.t12119.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12121){var self__ = this;
return self__.meta12120;
});
cljs.core.async.t12119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12121,meta12120__$1){var self__ = this;
return (new cljs.core.async.t12119(self__.fn1,self__._,self__.meta12117,self__.ch,self__.f,self__.map_LT_,meta12120__$1));
});
cljs.core.async.__GT_t12119 = (function __GT_t12119(fn1__$1,___$1,meta12117__$1,ch__$2,f__$2,map_LT___$2,meta12120){return (new cljs.core.async.t12119(fn1__$1,___$1,meta12117__$1,ch__$2,f__$2,map_LT___$2,meta12120));
});
}
return (new cljs.core.async.t12119(fn1,_,self__.meta12117,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t12116.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12116.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12118){var self__ = this;
return self__.meta12117;
});
cljs.core.async.t12116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12118,meta12117__$1){var self__ = this;
return (new cljs.core.async.t12116(self__.ch,self__.f,self__.map_LT_,meta12117__$1));
});
cljs.core.async.__GT_t12116 = (function __GT_t12116(ch__$1,f__$1,map_LT___$1,meta12117){return (new cljs.core.async.t12116(ch__$1,f__$1,map_LT___$1,meta12117));
});
}
return (new cljs.core.async.t12116(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t12125 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12125');

/**
* @constructor
*/
cljs.core.async.t12125 = (function (ch,f,map_GT_,meta12126){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta12126 = meta12126;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12125.cljs$lang$type = true;
cljs.core.async.t12125.cljs$lang$ctorStr = "cljs.core.async/t12125";
cljs.core.async.t12125.cljs$lang$ctorPrWriter = (function (this__6772__auto__,writer__6773__auto__,opt__6774__auto__){return cljs.core._write.call(null,writer__6773__auto__,"cljs.core.async/t12125");
});
cljs.core.async.t12125.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12125.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t12125.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12125.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12125.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12125.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12125.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12127){var self__ = this;
return self__.meta12126;
});
cljs.core.async.t12125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12127,meta12126__$1){var self__ = this;
return (new cljs.core.async.t12125(self__.ch,self__.f,self__.map_GT_,meta12126__$1));
});
cljs.core.async.__GT_t12125 = (function __GT_t12125(ch__$1,f__$1,map_GT___$1,meta12126){return (new cljs.core.async.t12125(ch__$1,f__$1,map_GT___$1,meta12126));
});
}
return (new cljs.core.async.t12125(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t12131 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12131');

/**
* @constructor
*/
cljs.core.async.t12131 = (function (ch,p,filter_GT_,meta12132){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta12132 = meta12132;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12131.cljs$lang$type = true;
cljs.core.async.t12131.cljs$lang$ctorStr = "cljs.core.async/t12131";
cljs.core.async.t12131.cljs$lang$ctorPrWriter = (function (this__6772__auto__,writer__6773__auto__,opt__6774__auto__){return cljs.core._write.call(null,writer__6773__auto__,"cljs.core.async/t12131");
});
cljs.core.async.t12131.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12131.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t12131.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12131.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12131.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12131.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12131.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12133){var self__ = this;
return self__.meta12132;
});
cljs.core.async.t12131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12133,meta12132__$1){var self__ = this;
return (new cljs.core.async.t12131(self__.ch,self__.p,self__.filter_GT_,meta12132__$1));
});
cljs.core.async.__GT_t12131 = (function __GT_t12131(ch__$1,p__$1,filter_GT___$1,meta12132){return (new cljs.core.async.t12131(ch__$1,p__$1,filter_GT___$1,meta12132));
});
}
return (new cljs.core.async.t12131(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8312__auto___12208 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8313__auto__ = (function (){var switch__8250__auto__ = (function (state_12191){var state_val_12192 = (state_12191[1]);if((state_val_12192 === 1))
{var state_12191__$1 = state_12191;var statearr_12193_12209 = state_12191__$1;(statearr_12193_12209[2] = null);
(statearr_12193_12209[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12192 === 2))
{var state_12191__$1 = state_12191;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12191__$1,4,ch);
} else
{if((state_val_12192 === 3))
{var inst_12189 = (state_12191[2]);var state_12191__$1 = state_12191;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12191__$1,inst_12189);
} else
{if((state_val_12192 === 4))
{var inst_12173 = (state_12191[5]);var inst_12173__$1 = (state_12191[2]);var inst_12174 = (inst_12173__$1 == null);var state_12191__$1 = (function (){var statearr_12194 = state_12191;(statearr_12194[5] = inst_12173__$1);
return statearr_12194;
})();if(cljs.core.truth_(inst_12174))
{var statearr_12195_12210 = state_12191__$1;(statearr_12195_12210[1] = 5);
} else
{var statearr_12196_12211 = state_12191__$1;(statearr_12196_12211[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12192 === 5))
{var inst_12176 = cljs.core.async.close_BANG_.call(null,out);var state_12191__$1 = state_12191;var statearr_12197_12212 = state_12191__$1;(statearr_12197_12212[2] = inst_12176);
(statearr_12197_12212[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12192 === 6))
{var inst_12173 = (state_12191[5]);var inst_12178 = p.call(null,inst_12173);var state_12191__$1 = state_12191;if(cljs.core.truth_(inst_12178))
{var statearr_12198_12213 = state_12191__$1;(statearr_12198_12213[1] = 8);
} else
{var statearr_12199_12214 = state_12191__$1;(statearr_12199_12214[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12192 === 7))
{var inst_12187 = (state_12191[2]);var state_12191__$1 = state_12191;var statearr_12200_12215 = state_12191__$1;(statearr_12200_12215[2] = inst_12187);
(statearr_12200_12215[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12192 === 8))
{var inst_12173 = (state_12191[5]);var state_12191__$1 = state_12191;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12191__$1,11,out,inst_12173);
} else
{if((state_val_12192 === 9))
{var state_12191__$1 = state_12191;var statearr_12201_12216 = state_12191__$1;(statearr_12201_12216[2] = null);
(statearr_12201_12216[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12192 === 10))
{var inst_12184 = (state_12191[2]);var state_12191__$1 = (function (){var statearr_12202 = state_12191;(statearr_12202[6] = inst_12184);
return statearr_12202;
})();var statearr_12203_12217 = state_12191__$1;(statearr_12203_12217[2] = null);
(statearr_12203_12217[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12192 === 11))
{var inst_12181 = (state_12191[2]);var state_12191__$1 = state_12191;var statearr_12204_12218 = state_12191__$1;(statearr_12204_12218[2] = inst_12181);
(statearr_12204_12218[1] = 10);
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
});return ((function (switch__8250__auto__){
return (function() {
var state_machine__8251__auto__ = null;
var state_machine__8251__auto____0 = (function (){var statearr_12206 = (new Array(7));(statearr_12206[0] = state_machine__8251__auto__);
(statearr_12206[1] = 1);
return statearr_12206;
});
var state_machine__8251__auto____1 = (function (state_12191){while(true){
var result__8252__auto__ = switch__8250__auto__.call(null,state_12191);if(cljs.core.keyword_identical_QMARK_.call(null,result__8252__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8252__auto__;
}
break;
}
});
state_machine__8251__auto__ = function(state_12191){
switch(arguments.length){
case 0:
return state_machine__8251__auto____0.call(this);
case 1:
return state_machine__8251__auto____1.call(this,state_12191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8251__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8251__auto____0;
state_machine__8251__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8251__auto____1;
return state_machine__8251__auto__;
})()
;})(switch__8250__auto__))
})();var state__8314__auto__ = (function (){var statearr_12207 = f__8313__auto__.call(null);(statearr_12207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8312__auto___12208);
return statearr_12207;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8314__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__8312__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8313__auto__ = (function (){var switch__8250__auto__ = (function (state_12366){var state_val_12367 = (state_12366[1]);if((state_val_12367 === 1))
{var state_12366__$1 = state_12366;var statearr_12368_12401 = state_12366__$1;(statearr_12368_12401[2] = null);
(statearr_12368_12401[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 2))
{var state_12366__$1 = state_12366;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12366__$1,4,in$);
} else
{if((state_val_12367 === 3))
{var inst_12364 = (state_12366[2]);var state_12366__$1 = state_12366;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12366__$1,inst_12364);
} else
{if((state_val_12367 === 4))
{var inst_12312 = (state_12366[5]);var inst_12312__$1 = (state_12366[2]);var inst_12313 = (inst_12312__$1 == null);var state_12366__$1 = (function (){var statearr_12369 = state_12366;(statearr_12369[5] = inst_12312__$1);
return statearr_12369;
})();if(cljs.core.truth_(inst_12313))
{var statearr_12370_12402 = state_12366__$1;(statearr_12370_12402[1] = 5);
} else
{var statearr_12371_12403 = state_12366__$1;(statearr_12371_12403[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 5))
{var inst_12315 = cljs.core.async.close_BANG_.call(null,out);var state_12366__$1 = state_12366;var statearr_12372_12404 = state_12366__$1;(statearr_12372_12404[2] = inst_12315);
(statearr_12372_12404[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 6))
{var inst_12312 = (state_12366[5]);var inst_12317 = f.call(null,inst_12312);var inst_12322 = cljs.core.seq.call(null,inst_12317);var inst_12323 = inst_12322;var inst_12324 = null;var inst_12325 = 0;var inst_12326 = 0;var state_12366__$1 = (function (){var statearr_12373 = state_12366;(statearr_12373[6] = inst_12325);
(statearr_12373[7] = inst_12326);
(statearr_12373[8] = inst_12324);
(statearr_12373[9] = inst_12323);
return statearr_12373;
})();var statearr_12374_12405 = state_12366__$1;(statearr_12374_12405[2] = null);
(statearr_12374_12405[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 7))
{var inst_12362 = (state_12366[2]);var state_12366__$1 = state_12366;var statearr_12375_12406 = state_12366__$1;(statearr_12375_12406[2] = inst_12362);
(statearr_12375_12406[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 8))
{var inst_12325 = (state_12366[6]);var inst_12326 = (state_12366[7]);var inst_12328 = (inst_12326 < inst_12325);var inst_12329 = inst_12328;var state_12366__$1 = state_12366;if(cljs.core.truth_(inst_12329))
{var statearr_12376_12407 = state_12366__$1;(statearr_12376_12407[1] = 10);
} else
{var statearr_12377_12408 = state_12366__$1;(statearr_12377_12408[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 9))
{var inst_12359 = (state_12366[2]);var state_12366__$1 = (function (){var statearr_12378 = state_12366;(statearr_12378[10] = inst_12359);
return statearr_12378;
})();var statearr_12379_12409 = state_12366__$1;(statearr_12379_12409[2] = null);
(statearr_12379_12409[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 10))
{var inst_12326 = (state_12366[7]);var inst_12324 = (state_12366[8]);var inst_12331 = cljs.core._nth.call(null,inst_12324,inst_12326);var state_12366__$1 = state_12366;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12366__$1,13,out,inst_12331);
} else
{if((state_val_12367 === 11))
{var inst_12337 = (state_12366[11]);var inst_12323 = (state_12366[9]);var inst_12337__$1 = cljs.core.seq.call(null,inst_12323);var state_12366__$1 = (function (){var statearr_12383 = state_12366;(statearr_12383[11] = inst_12337__$1);
return statearr_12383;
})();if(inst_12337__$1)
{var statearr_12384_12410 = state_12366__$1;(statearr_12384_12410[1] = 14);
} else
{var statearr_12385_12411 = state_12366__$1;(statearr_12385_12411[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 12))
{var inst_12357 = (state_12366[2]);var state_12366__$1 = state_12366;var statearr_12386_12412 = state_12366__$1;(statearr_12386_12412[2] = inst_12357);
(statearr_12386_12412[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 13))
{var inst_12325 = (state_12366[6]);var inst_12326 = (state_12366[7]);var inst_12324 = (state_12366[8]);var inst_12323 = (state_12366[9]);var inst_12333 = (state_12366[2]);var inst_12334 = (inst_12326 + 1);var tmp12380 = inst_12325;var tmp12381 = inst_12324;var tmp12382 = inst_12323;var inst_12323__$1 = tmp12382;var inst_12324__$1 = tmp12381;var inst_12325__$1 = tmp12380;var inst_12326__$1 = inst_12334;var state_12366__$1 = (function (){var statearr_12387 = state_12366;(statearr_12387[6] = inst_12325__$1);
(statearr_12387[7] = inst_12326__$1);
(statearr_12387[12] = inst_12333);
(statearr_12387[8] = inst_12324__$1);
(statearr_12387[9] = inst_12323__$1);
return statearr_12387;
})();var statearr_12388_12413 = state_12366__$1;(statearr_12388_12413[2] = null);
(statearr_12388_12413[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 14))
{var inst_12337 = (state_12366[11]);var inst_12339 = cljs.core.chunked_seq_QMARK_.call(null,inst_12337);var state_12366__$1 = state_12366;if(inst_12339)
{var statearr_12389_12414 = state_12366__$1;(statearr_12389_12414[1] = 17);
} else
{var statearr_12390_12415 = state_12366__$1;(statearr_12390_12415[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 15))
{var state_12366__$1 = state_12366;var statearr_12391_12416 = state_12366__$1;(statearr_12391_12416[2] = null);
(statearr_12391_12416[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 16))
{var inst_12355 = (state_12366[2]);var state_12366__$1 = state_12366;var statearr_12392_12417 = state_12366__$1;(statearr_12392_12417[2] = inst_12355);
(statearr_12392_12417[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 17))
{var inst_12337 = (state_12366[11]);var inst_12341 = cljs.core.chunk_first.call(null,inst_12337);var inst_12342 = cljs.core.chunk_rest.call(null,inst_12337);var inst_12343 = cljs.core.count.call(null,inst_12341);var inst_12323 = inst_12342;var inst_12324 = inst_12341;var inst_12325 = inst_12343;var inst_12326 = 0;var state_12366__$1 = (function (){var statearr_12393 = state_12366;(statearr_12393[6] = inst_12325);
(statearr_12393[7] = inst_12326);
(statearr_12393[8] = inst_12324);
(statearr_12393[9] = inst_12323);
return statearr_12393;
})();var statearr_12394_12418 = state_12366__$1;(statearr_12394_12418[2] = null);
(statearr_12394_12418[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 18))
{var inst_12337 = (state_12366[11]);var inst_12346 = cljs.core.first.call(null,inst_12337);var state_12366__$1 = state_12366;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12366__$1,20,out,inst_12346);
} else
{if((state_val_12367 === 19))
{var inst_12352 = (state_12366[2]);var state_12366__$1 = state_12366;var statearr_12395_12419 = state_12366__$1;(statearr_12395_12419[2] = inst_12352);
(statearr_12395_12419[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 20))
{var inst_12337 = (state_12366[11]);var inst_12348 = (state_12366[2]);var inst_12349 = cljs.core.next.call(null,inst_12337);var inst_12323 = inst_12349;var inst_12324 = null;var inst_12325 = 0;var inst_12326 = 0;var state_12366__$1 = (function (){var statearr_12396 = state_12366;(statearr_12396[13] = inst_12348);
(statearr_12396[6] = inst_12325);
(statearr_12396[7] = inst_12326);
(statearr_12396[8] = inst_12324);
(statearr_12396[9] = inst_12323);
return statearr_12396;
})();var statearr_12397_12420 = state_12366__$1;(statearr_12397_12420[2] = null);
(statearr_12397_12420[1] = 8);
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
});return ((function (switch__8250__auto__){
return (function() {
var state_machine__8251__auto__ = null;
var state_machine__8251__auto____0 = (function (){var statearr_12399 = (new Array(14));(statearr_12399[0] = state_machine__8251__auto__);
(statearr_12399[1] = 1);
return statearr_12399;
});
var state_machine__8251__auto____1 = (function (state_12366){while(true){
var result__8252__auto__ = switch__8250__auto__.call(null,state_12366);if(cljs.core.keyword_identical_QMARK_.call(null,result__8252__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8252__auto__;
}
break;
}
});
state_machine__8251__auto__ = function(state_12366){
switch(arguments.length){
case 0:
return state_machine__8251__auto____0.call(this);
case 1:
return state_machine__8251__auto____1.call(this,state_12366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8251__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8251__auto____0;
state_machine__8251__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8251__auto____1;
return state_machine__8251__auto__;
})()
;})(switch__8250__auto__))
})();var state__8314__auto__ = (function (){var statearr_12400 = f__8313__auto__.call(null);(statearr_12400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8312__auto__);
return statearr_12400;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8314__auto__);
}));
return c__8312__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__8312__auto___12493 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8313__auto__ = (function (){var switch__8250__auto__ = (function (state_12476){var state_val_12477 = (state_12476[1]);if((state_val_12477 === 1))
{var state_12476__$1 = state_12476;var statearr_12478_12494 = state_12476__$1;(statearr_12478_12494[2] = null);
(statearr_12478_12494[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12477 === 2))
{var state_12476__$1 = state_12476;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12476__$1,4,from);
} else
{if((state_val_12477 === 3))
{var inst_12474 = (state_12476[2]);var state_12476__$1 = state_12476;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12476__$1,inst_12474);
} else
{if((state_val_12477 === 4))
{var inst_12459 = (state_12476[5]);var inst_12459__$1 = (state_12476[2]);var inst_12460 = (inst_12459__$1 == null);var state_12476__$1 = (function (){var statearr_12479 = state_12476;(statearr_12479[5] = inst_12459__$1);
return statearr_12479;
})();if(cljs.core.truth_(inst_12460))
{var statearr_12480_12495 = state_12476__$1;(statearr_12480_12495[1] = 5);
} else
{var statearr_12481_12496 = state_12476__$1;(statearr_12481_12496[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12477 === 5))
{var state_12476__$1 = state_12476;if(cljs.core.truth_(close_QMARK_))
{var statearr_12482_12497 = state_12476__$1;(statearr_12482_12497[1] = 8);
} else
{var statearr_12483_12498 = state_12476__$1;(statearr_12483_12498[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12477 === 6))
{var inst_12459 = (state_12476[5]);var state_12476__$1 = state_12476;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12476__$1,11,to,inst_12459);
} else
{if((state_val_12477 === 7))
{var inst_12472 = (state_12476[2]);var state_12476__$1 = state_12476;var statearr_12484_12499 = state_12476__$1;(statearr_12484_12499[2] = inst_12472);
(statearr_12484_12499[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12477 === 8))
{var inst_12463 = cljs.core.async.close_BANG_.call(null,to);var state_12476__$1 = state_12476;var statearr_12485_12500 = state_12476__$1;(statearr_12485_12500[2] = inst_12463);
(statearr_12485_12500[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12477 === 9))
{var state_12476__$1 = state_12476;var statearr_12486_12501 = state_12476__$1;(statearr_12486_12501[2] = null);
(statearr_12486_12501[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12477 === 10))
{var inst_12466 = (state_12476[2]);var state_12476__$1 = state_12476;var statearr_12487_12502 = state_12476__$1;(statearr_12487_12502[2] = inst_12466);
(statearr_12487_12502[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12477 === 11))
{var inst_12469 = (state_12476[2]);var state_12476__$1 = (function (){var statearr_12488 = state_12476;(statearr_12488[6] = inst_12469);
return statearr_12488;
})();var statearr_12489_12503 = state_12476__$1;(statearr_12489_12503[2] = null);
(statearr_12489_12503[1] = 2);
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
});return ((function (switch__8250__auto__){
return (function() {
var state_machine__8251__auto__ = null;
var state_machine__8251__auto____0 = (function (){var statearr_12491 = (new Array(7));(statearr_12491[0] = state_machine__8251__auto__);
(statearr_12491[1] = 1);
return statearr_12491;
});
var state_machine__8251__auto____1 = (function (state_12476){while(true){
var result__8252__auto__ = switch__8250__auto__.call(null,state_12476);if(cljs.core.keyword_identical_QMARK_.call(null,result__8252__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8252__auto__;
}
break;
}
});
state_machine__8251__auto__ = function(state_12476){
switch(arguments.length){
case 0:
return state_machine__8251__auto____0.call(this);
case 1:
return state_machine__8251__auto____1.call(this,state_12476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8251__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8251__auto____0;
state_machine__8251__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8251__auto____1;
return state_machine__8251__auto__;
})()
;})(switch__8250__auto__))
})();var state__8314__auto__ = (function (){var statearr_12492 = f__8313__auto__.call(null);(statearr_12492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8312__auto___12493);
return statearr_12492;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8314__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__8312__auto___12582 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8313__auto__ = (function (){var switch__8250__auto__ = (function (state_12564){var state_val_12565 = (state_12564[1]);if((state_val_12565 === 1))
{var state_12564__$1 = state_12564;var statearr_12566_12583 = state_12564__$1;(statearr_12566_12583[2] = null);
(statearr_12566_12583[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12565 === 2))
{var state_12564__$1 = state_12564;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12564__$1,4,ch);
} else
{if((state_val_12565 === 3))
{var inst_12562 = (state_12564[2]);var state_12564__$1 = state_12564;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12564__$1,inst_12562);
} else
{if((state_val_12565 === 4))
{var inst_12545 = (state_12564[5]);var inst_12545__$1 = (state_12564[2]);var inst_12546 = (inst_12545__$1 == null);var state_12564__$1 = (function (){var statearr_12567 = state_12564;(statearr_12567[5] = inst_12545__$1);
return statearr_12567;
})();if(cljs.core.truth_(inst_12546))
{var statearr_12568_12584 = state_12564__$1;(statearr_12568_12584[1] = 5);
} else
{var statearr_12569_12585 = state_12564__$1;(statearr_12569_12585[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12565 === 5))
{var inst_12548 = cljs.core.async.close_BANG_.call(null,tc);var inst_12549 = cljs.core.async.close_BANG_.call(null,fc);var state_12564__$1 = (function (){var statearr_12570 = state_12564;(statearr_12570[6] = inst_12548);
return statearr_12570;
})();var statearr_12571_12586 = state_12564__$1;(statearr_12571_12586[2] = inst_12549);
(statearr_12571_12586[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12565 === 6))
{var inst_12545 = (state_12564[5]);var inst_12551 = p.call(null,inst_12545);var state_12564__$1 = state_12564;if(cljs.core.truth_(inst_12551))
{var statearr_12572_12587 = state_12564__$1;(statearr_12572_12587[1] = 9);
} else
{var statearr_12573_12588 = state_12564__$1;(statearr_12573_12588[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12565 === 7))
{var inst_12560 = (state_12564[2]);var state_12564__$1 = state_12564;var statearr_12574_12589 = state_12564__$1;(statearr_12574_12589[2] = inst_12560);
(statearr_12574_12589[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12565 === 8))
{var inst_12557 = (state_12564[2]);var state_12564__$1 = (function (){var statearr_12575 = state_12564;(statearr_12575[7] = inst_12557);
return statearr_12575;
})();var statearr_12576_12590 = state_12564__$1;(statearr_12576_12590[2] = null);
(statearr_12576_12590[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12565 === 9))
{var state_12564__$1 = state_12564;var statearr_12577_12591 = state_12564__$1;(statearr_12577_12591[2] = tc);
(statearr_12577_12591[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12565 === 10))
{var state_12564__$1 = state_12564;var statearr_12578_12592 = state_12564__$1;(statearr_12578_12592[2] = fc);
(statearr_12578_12592[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12565 === 11))
{var inst_12545 = (state_12564[5]);var inst_12555 = (state_12564[2]);var state_12564__$1 = state_12564;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12564__$1,8,inst_12555,inst_12545);
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
});return ((function (switch__8250__auto__){
return (function() {
var state_machine__8251__auto__ = null;
var state_machine__8251__auto____0 = (function (){var statearr_12580 = (new Array(8));(statearr_12580[0] = state_machine__8251__auto__);
(statearr_12580[1] = 1);
return statearr_12580;
});
var state_machine__8251__auto____1 = (function (state_12564){while(true){
var result__8252__auto__ = switch__8250__auto__.call(null,state_12564);if(cljs.core.keyword_identical_QMARK_.call(null,result__8252__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8252__auto__;
}
break;
}
});
state_machine__8251__auto__ = function(state_12564){
switch(arguments.length){
case 0:
return state_machine__8251__auto____0.call(this);
case 1:
return state_machine__8251__auto____1.call(this,state_12564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8251__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8251__auto____0;
state_machine__8251__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8251__auto____1;
return state_machine__8251__auto__;
})()
;})(switch__8250__auto__))
})();var state__8314__auto__ = (function (){var statearr_12581 = f__8313__auto__.call(null);(statearr_12581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8312__auto___12582);
return statearr_12581;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8314__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__8312__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8313__auto__ = (function (){var switch__8250__auto__ = (function (state_12635){var state_val_12636 = (state_12635[1]);if((state_val_12636 === 7))
{var inst_12631 = (state_12635[2]);var state_12635__$1 = state_12635;var statearr_12637_12649 = state_12635__$1;(statearr_12637_12649[2] = inst_12631);
(statearr_12637_12649[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12636 === 6))
{var inst_12624 = (state_12635[5]);var inst_12621 = (state_12635[6]);var inst_12628 = f.call(null,inst_12621,inst_12624);var inst_12621__$1 = inst_12628;var state_12635__$1 = (function (){var statearr_12638 = state_12635;(statearr_12638[6] = inst_12621__$1);
return statearr_12638;
})();var statearr_12639_12650 = state_12635__$1;(statearr_12639_12650[2] = null);
(statearr_12639_12650[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12636 === 5))
{var inst_12621 = (state_12635[6]);var state_12635__$1 = state_12635;var statearr_12640_12651 = state_12635__$1;(statearr_12640_12651[2] = inst_12621);
(statearr_12640_12651[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12636 === 4))
{var inst_12624 = (state_12635[5]);var inst_12624__$1 = (state_12635[2]);var inst_12625 = (inst_12624__$1 == null);var state_12635__$1 = (function (){var statearr_12641 = state_12635;(statearr_12641[5] = inst_12624__$1);
return statearr_12641;
})();if(cljs.core.truth_(inst_12625))
{var statearr_12642_12652 = state_12635__$1;(statearr_12642_12652[1] = 5);
} else
{var statearr_12643_12653 = state_12635__$1;(statearr_12643_12653[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12636 === 3))
{var inst_12633 = (state_12635[2]);var state_12635__$1 = state_12635;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12635__$1,inst_12633);
} else
{if((state_val_12636 === 2))
{var state_12635__$1 = state_12635;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12635__$1,4,ch);
} else
{if((state_val_12636 === 1))
{var inst_12621 = init;var state_12635__$1 = (function (){var statearr_12644 = state_12635;(statearr_12644[6] = inst_12621);
return statearr_12644;
})();var statearr_12645_12654 = state_12635__$1;(statearr_12645_12654[2] = null);
(statearr_12645_12654[1] = 2);
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
});return ((function (switch__8250__auto__){
return (function() {
var state_machine__8251__auto__ = null;
var state_machine__8251__auto____0 = (function (){var statearr_12647 = (new Array(7));(statearr_12647[0] = state_machine__8251__auto__);
(statearr_12647[1] = 1);
return statearr_12647;
});
var state_machine__8251__auto____1 = (function (state_12635){while(true){
var result__8252__auto__ = switch__8250__auto__.call(null,state_12635);if(cljs.core.keyword_identical_QMARK_.call(null,result__8252__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8252__auto__;
}
break;
}
});
state_machine__8251__auto__ = function(state_12635){
switch(arguments.length){
case 0:
return state_machine__8251__auto____0.call(this);
case 1:
return state_machine__8251__auto____1.call(this,state_12635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8251__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8251__auto____0;
state_machine__8251__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8251__auto____1;
return state_machine__8251__auto__;
})()
;})(switch__8250__auto__))
})();var state__8314__auto__ = (function (){var statearr_12648 = f__8313__auto__.call(null);(statearr_12648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8312__auto__);
return statearr_12648;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8314__auto__);
}));
return c__8312__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__8312__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8313__auto__ = (function (){var switch__8250__auto__ = (function (state_12712){var state_val_12713 = (state_12712[1]);if((state_val_12713 === 1))
{var inst_12692 = cljs.core.seq.call(null,coll);var inst_12693 = inst_12692;var state_12712__$1 = (function (){var statearr_12714 = state_12712;(statearr_12714[5] = inst_12693);
return statearr_12714;
})();var statearr_12715_12729 = state_12712__$1;(statearr_12715_12729[2] = null);
(statearr_12715_12729[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12713 === 2))
{var inst_12693 = (state_12712[5]);var state_12712__$1 = state_12712;if(cljs.core.truth_(inst_12693))
{var statearr_12716_12730 = state_12712__$1;(statearr_12716_12730[1] = 4);
} else
{var statearr_12717_12731 = state_12712__$1;(statearr_12717_12731[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12713 === 3))
{var inst_12710 = (state_12712[2]);var state_12712__$1 = state_12712;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12712__$1,inst_12710);
} else
{if((state_val_12713 === 4))
{var inst_12693 = (state_12712[5]);var inst_12696 = cljs.core.first.call(null,inst_12693);var state_12712__$1 = state_12712;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12712__$1,7,ch,inst_12696);
} else
{if((state_val_12713 === 5))
{var state_12712__$1 = state_12712;if(cljs.core.truth_(close_QMARK_))
{var statearr_12718_12732 = state_12712__$1;(statearr_12718_12732[1] = 8);
} else
{var statearr_12719_12733 = state_12712__$1;(statearr_12719_12733[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12713 === 6))
{var inst_12708 = (state_12712[2]);var state_12712__$1 = state_12712;var statearr_12720_12734 = state_12712__$1;(statearr_12720_12734[2] = inst_12708);
(statearr_12720_12734[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12713 === 7))
{var inst_12693 = (state_12712[5]);var inst_12698 = (state_12712[2]);var inst_12699 = cljs.core.next.call(null,inst_12693);var inst_12693__$1 = inst_12699;var state_12712__$1 = (function (){var statearr_12721 = state_12712;(statearr_12721[6] = inst_12698);
(statearr_12721[5] = inst_12693__$1);
return statearr_12721;
})();var statearr_12722_12735 = state_12712__$1;(statearr_12722_12735[2] = null);
(statearr_12722_12735[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12713 === 8))
{var inst_12703 = cljs.core.async.close_BANG_.call(null,ch);var state_12712__$1 = state_12712;var statearr_12723_12736 = state_12712__$1;(statearr_12723_12736[2] = inst_12703);
(statearr_12723_12736[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12713 === 9))
{var state_12712__$1 = state_12712;var statearr_12724_12737 = state_12712__$1;(statearr_12724_12737[2] = null);
(statearr_12724_12737[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12713 === 10))
{var inst_12706 = (state_12712[2]);var state_12712__$1 = state_12712;var statearr_12725_12738 = state_12712__$1;(statearr_12725_12738[2] = inst_12706);
(statearr_12725_12738[1] = 6);
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
});return ((function (switch__8250__auto__){
return (function() {
var state_machine__8251__auto__ = null;
var state_machine__8251__auto____0 = (function (){var statearr_12727 = (new Array(7));(statearr_12727[0] = state_machine__8251__auto__);
(statearr_12727[1] = 1);
return statearr_12727;
});
var state_machine__8251__auto____1 = (function (state_12712){while(true){
var result__8252__auto__ = switch__8250__auto__.call(null,state_12712);if(cljs.core.keyword_identical_QMARK_.call(null,result__8252__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8252__auto__;
}
break;
}
});
state_machine__8251__auto__ = function(state_12712){
switch(arguments.length){
case 0:
return state_machine__8251__auto____0.call(this);
case 1:
return state_machine__8251__auto____1.call(this,state_12712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8251__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8251__auto____0;
state_machine__8251__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8251__auto____1;
return state_machine__8251__auto__;
})()
;})(switch__8250__auto__))
})();var state__8314__auto__ = (function (){var statearr_12728 = f__8313__auto__.call(null);(statearr_12728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8312__auto__);
return statearr_12728;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8314__auto__);
}));
return c__8312__auto__;
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
{var x__6841__auto__ = (((_ == null))?null:_);return (function (){var or__3943__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6841__auto__)]);if(or__3943__auto__)
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
{var x__6841__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6841__auto__)]);if(or__3943__auto__)
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
{var x__6841__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6841__auto__)]);if(or__3943__auto__)
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
{var x__6841__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6841__auto__)]);if(or__3943__auto__)
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12951 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12951');

/**
* @constructor
*/
cljs.core.async.t12951 = (function (cs,ch,mult,meta12952){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12952 = meta12952;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12951.cljs$lang$type = true;
cljs.core.async.t12951.cljs$lang$ctorStr = "cljs.core.async/t12951";
cljs.core.async.t12951.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6772__auto__,writer__6773__auto__,opt__6774__auto__){return cljs.core._write.call(null,writer__6773__auto__,"cljs.core.async/t12951");
});})(cs))
;
cljs.core.async.t12951.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12951.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12951.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12951.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12951.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12951.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
return self__.ch;
});})(cs))
;
cljs.core.async.t12951.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12953){var self__ = this;
return self__.meta12952;
});})(cs))
;
cljs.core.async.t12951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12953,meta12952__$1){var self__ = this;
return (new cljs.core.async.t12951(self__.cs,self__.ch,self__.mult,meta12952__$1));
});})(cs))
;
cljs.core.async.__GT_t12951 = ((function (cs){
return (function __GT_t12951(cs__$1,ch__$1,mult__$1,meta12952){return (new cljs.core.async.t12951(cs__$1,ch__$1,mult__$1,meta12952));
});})(cs))
;
}
return (new cljs.core.async.t12951(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__8312__auto___13163 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8313__auto__ = (function (){var switch__8250__auto__ = (function (state_13081){var state_val_13082 = (state_13081[1]);if((state_val_13082 === 32))
{try{var inst_12956 = (state_13081[5]);var inst_13032 = (state_13081[6]);var inst_13038 = cljs.core.async.put_BANG_.call(null,inst_13032,inst_12956,done);var state_13081__$1 = state_13081;var statearr_13085_13164 = state_13081__$1;(statearr_13085_13164[2] = inst_13038);
(statearr_13085_13164[1] = 30);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e13083){if((e13083 instanceof Object))
{var ex__8244__auto__ = e13083;var statearr_13084_13165 = state_13081;(statearr_13084_13165[1] = 31);
(statearr_13084_13165[2] = ex__8244__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13083;
} else
{return null;
}
}
}} else
{if((state_val_13082 === 1))
{var state_13081__$1 = state_13081;var statearr_13086_13166 = state_13081__$1;(statearr_13086_13166[2] = null);
(statearr_13086_13166[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 33))
{var inst_13044 = (state_13081[7]);var inst_13046 = cljs.core.chunked_seq_QMARK_.call(null,inst_13044);var state_13081__$1 = state_13081;if(inst_13046)
{var statearr_13087_13167 = state_13081__$1;(statearr_13087_13167[1] = 36);
} else
{var statearr_13088_13168 = state_13081__$1;(statearr_13088_13168[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 2))
{var state_13081__$1 = state_13081;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13081__$1,4,ch);
} else
{if((state_val_13082 === 34))
{var state_13081__$1 = state_13081;var statearr_13089_13169 = state_13081__$1;(statearr_13089_13169[2] = null);
(statearr_13089_13169[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 3))
{var inst_13079 = (state_13081[2]);var state_13081__$1 = state_13081;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13081__$1,inst_13079);
} else
{if((state_val_13082 === 35))
{var inst_13068 = (state_13081[2]);var state_13081__$1 = state_13081;var statearr_13090_13170 = state_13081__$1;(statearr_13090_13170[2] = inst_13068);
(statearr_13090_13170[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 4))
{var inst_12956 = (state_13081[5]);var inst_12956__$1 = (state_13081[2]);var inst_12957 = (inst_12956__$1 == null);var state_13081__$1 = (function (){var statearr_13091 = state_13081;(statearr_13091[5] = inst_12956__$1);
return statearr_13091;
})();if(cljs.core.truth_(inst_12957))
{var statearr_13092_13171 = state_13081__$1;(statearr_13092_13171[1] = 5);
} else
{var statearr_13093_13172 = state_13081__$1;(statearr_13093_13172[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 36))
{var inst_13044 = (state_13081[7]);var inst_13048 = cljs.core.chunk_first.call(null,inst_13044);var inst_13049 = cljs.core.chunk_rest.call(null,inst_13044);var inst_13050 = cljs.core.count.call(null,inst_13048);var inst_13024 = inst_13049;var inst_13025 = inst_13048;var inst_13026 = inst_13050;var inst_13027 = 0;var state_13081__$1 = (function (){var statearr_13094 = state_13081;(statearr_13094[8] = inst_13027);
(statearr_13094[9] = inst_13026);
(statearr_13094[10] = inst_13025);
(statearr_13094[11] = inst_13024);
return statearr_13094;
})();var statearr_13095_13173 = state_13081__$1;(statearr_13095_13173[2] = null);
(statearr_13095_13173[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 5))
{var inst_12963 = cljs.core.deref.call(null,cs);var inst_12964 = cljs.core.seq.call(null,inst_12963);var inst_12965 = inst_12964;var inst_12966 = null;var inst_12967 = 0;var inst_12968 = 0;var state_13081__$1 = (function (){var statearr_13096 = state_13081;(statearr_13096[12] = inst_12968);
(statearr_13096[13] = inst_12967);
(statearr_13096[14] = inst_12965);
(statearr_13096[15] = inst_12966);
return statearr_13096;
})();var statearr_13097_13174 = state_13081__$1;(statearr_13097_13174[2] = null);
(statearr_13097_13174[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 37))
{var inst_13044 = (state_13081[7]);var inst_13053 = cljs.core.first.call(null,inst_13044);var state_13081__$1 = (function (){var statearr_13098 = state_13081;(statearr_13098[16] = inst_13053);
return statearr_13098;
})();var statearr_13099_13175 = state_13081__$1;(statearr_13099_13175[2] = null);
(statearr_13099_13175[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 6))
{var inst_13015 = cljs.core.deref.call(null,cs);var inst_13016 = cljs.core.keys.call(null,inst_13015);var inst_13017 = cljs.core.count.call(null,inst_13016);var inst_13018 = cljs.core.reset_BANG_.call(null,dctr,inst_13017);var inst_13023 = cljs.core.seq.call(null,inst_13016);var inst_13024 = inst_13023;var inst_13025 = null;var inst_13026 = 0;var inst_13027 = 0;var state_13081__$1 = (function (){var statearr_13100 = state_13081;(statearr_13100[17] = inst_13018);
(statearr_13100[8] = inst_13027);
(statearr_13100[9] = inst_13026);
(statearr_13100[10] = inst_13025);
(statearr_13100[11] = inst_13024);
return statearr_13100;
})();var statearr_13101_13176 = state_13081__$1;(statearr_13101_13176[2] = null);
(statearr_13101_13176[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 38))
{var inst_13065 = (state_13081[2]);var state_13081__$1 = state_13081;var statearr_13102_13177 = state_13081__$1;(statearr_13102_13177[2] = inst_13065);
(statearr_13102_13177[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 7))
{var inst_13077 = (state_13081[2]);var state_13081__$1 = state_13081;var statearr_13103_13178 = state_13081__$1;(statearr_13103_13178[2] = inst_13077);
(statearr_13103_13178[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 39))
{var inst_13044 = (state_13081[7]);var inst_13061 = (state_13081[2]);var inst_13062 = cljs.core.next.call(null,inst_13044);var inst_13024 = inst_13062;var inst_13025 = null;var inst_13026 = 0;var inst_13027 = 0;var state_13081__$1 = (function (){var statearr_13104 = state_13081;(statearr_13104[8] = inst_13027);
(statearr_13104[9] = inst_13026);
(statearr_13104[10] = inst_13025);
(statearr_13104[11] = inst_13024);
(statearr_13104[18] = inst_13061);
return statearr_13104;
})();var statearr_13105_13179 = state_13081__$1;(statearr_13105_13179[2] = null);
(statearr_13105_13179[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 8))
{var inst_12968 = (state_13081[12]);var inst_12967 = (state_13081[13]);var inst_12970 = (inst_12968 < inst_12967);var inst_12971 = inst_12970;var state_13081__$1 = state_13081;if(cljs.core.truth_(inst_12971))
{var statearr_13106_13180 = state_13081__$1;(statearr_13106_13180[1] = 10);
} else
{var statearr_13107_13181 = state_13081__$1;(statearr_13107_13181[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 40))
{var inst_13053 = (state_13081[16]);var inst_13054 = (state_13081[2]);var inst_13055 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13056 = cljs.core.async.untap_STAR_.call(null,m,inst_13053);var state_13081__$1 = (function (){var statearr_13108 = state_13081;(statearr_13108[19] = inst_13054);
(statearr_13108[20] = inst_13055);
return statearr_13108;
})();var statearr_13109_13182 = state_13081__$1;(statearr_13109_13182[2] = inst_13056);
(statearr_13109_13182[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 9))
{var inst_13013 = (state_13081[2]);var state_13081__$1 = state_13081;var statearr_13110_13183 = state_13081__$1;(statearr_13110_13183[2] = inst_13013);
(statearr_13110_13183[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 41))
{try{var inst_12956 = (state_13081[5]);var inst_13053 = (state_13081[16]);var inst_13059 = cljs.core.async.put_BANG_.call(null,inst_13053,inst_12956,done);var state_13081__$1 = state_13081;var statearr_13113_13184 = state_13081__$1;(statearr_13113_13184[2] = inst_13059);
(statearr_13113_13184[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e13111){if((e13111 instanceof Object))
{var ex__8244__auto__ = e13111;var statearr_13112_13185 = state_13081;(statearr_13112_13185[1] = 40);
(statearr_13112_13185[2] = ex__8244__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13111;
} else
{return null;
}
}
}} else
{if((state_val_13082 === 10))
{var inst_12968 = (state_13081[12]);var inst_12966 = (state_13081[15]);var inst_12974 = cljs.core._nth.call(null,inst_12966,inst_12968);var inst_12975 = cljs.core.nth.call(null,inst_12974,0,null);var inst_12976 = cljs.core.nth.call(null,inst_12974,1,null);var state_13081__$1 = (function (){var statearr_13114 = state_13081;(statearr_13114[21] = inst_12975);
return statearr_13114;
})();if(cljs.core.truth_(inst_12976))
{var statearr_13115_13186 = state_13081__$1;(statearr_13115_13186[1] = 13);
} else
{var statearr_13116_13187 = state_13081__$1;(statearr_13116_13187[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 42))
{var inst_13074 = (state_13081[2]);var state_13081__$1 = (function (){var statearr_13117 = state_13081;(statearr_13117[22] = inst_13074);
return statearr_13117;
})();var statearr_13118_13188 = state_13081__$1;(statearr_13118_13188[2] = null);
(statearr_13118_13188[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 11))
{var inst_12985 = (state_13081[23]);var inst_12965 = (state_13081[14]);var inst_12985__$1 = cljs.core.seq.call(null,inst_12965);var state_13081__$1 = (function (){var statearr_13119 = state_13081;(statearr_13119[23] = inst_12985__$1);
return statearr_13119;
})();if(inst_12985__$1)
{var statearr_13120_13189 = state_13081__$1;(statearr_13120_13189[1] = 16);
} else
{var statearr_13121_13190 = state_13081__$1;(statearr_13121_13190[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 12))
{var inst_13011 = (state_13081[2]);var state_13081__$1 = state_13081;var statearr_13122_13191 = state_13081__$1;(statearr_13122_13191[2] = inst_13011);
(statearr_13122_13191[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 13))
{var inst_12975 = (state_13081[21]);var inst_12978 = cljs.core.async.close_BANG_.call(null,inst_12975);var state_13081__$1 = state_13081;var statearr_13126_13192 = state_13081__$1;(statearr_13126_13192[2] = inst_12978);
(statearr_13126_13192[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 14))
{var state_13081__$1 = state_13081;var statearr_13127_13193 = state_13081__$1;(statearr_13127_13193[2] = null);
(statearr_13127_13193[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 15))
{var inst_12968 = (state_13081[12]);var inst_12967 = (state_13081[13]);var inst_12965 = (state_13081[14]);var inst_12966 = (state_13081[15]);var inst_12981 = (state_13081[2]);var inst_12982 = (inst_12968 + 1);var tmp13123 = inst_12967;var tmp13124 = inst_12965;var tmp13125 = inst_12966;var inst_12965__$1 = tmp13124;var inst_12966__$1 = tmp13125;var inst_12967__$1 = tmp13123;var inst_12968__$1 = inst_12982;var state_13081__$1 = (function (){var statearr_13128 = state_13081;(statearr_13128[12] = inst_12968__$1);
(statearr_13128[13] = inst_12967__$1);
(statearr_13128[24] = inst_12981);
(statearr_13128[14] = inst_12965__$1);
(statearr_13128[15] = inst_12966__$1);
return statearr_13128;
})();var statearr_13129_13194 = state_13081__$1;(statearr_13129_13194[2] = null);
(statearr_13129_13194[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 16))
{var inst_12985 = (state_13081[23]);var inst_12987 = cljs.core.chunked_seq_QMARK_.call(null,inst_12985);var state_13081__$1 = state_13081;if(inst_12987)
{var statearr_13130_13195 = state_13081__$1;(statearr_13130_13195[1] = 19);
} else
{var statearr_13131_13196 = state_13081__$1;(statearr_13131_13196[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 17))
{var state_13081__$1 = state_13081;var statearr_13132_13197 = state_13081__$1;(statearr_13132_13197[2] = null);
(statearr_13132_13197[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 18))
{var inst_13009 = (state_13081[2]);var state_13081__$1 = state_13081;var statearr_13133_13198 = state_13081__$1;(statearr_13133_13198[2] = inst_13009);
(statearr_13133_13198[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 19))
{var inst_12985 = (state_13081[23]);var inst_12989 = cljs.core.chunk_first.call(null,inst_12985);var inst_12990 = cljs.core.chunk_rest.call(null,inst_12985);var inst_12991 = cljs.core.count.call(null,inst_12989);var inst_12965 = inst_12990;var inst_12966 = inst_12989;var inst_12967 = inst_12991;var inst_12968 = 0;var state_13081__$1 = (function (){var statearr_13134 = state_13081;(statearr_13134[12] = inst_12968);
(statearr_13134[13] = inst_12967);
(statearr_13134[14] = inst_12965);
(statearr_13134[15] = inst_12966);
return statearr_13134;
})();var statearr_13135_13199 = state_13081__$1;(statearr_13135_13199[2] = null);
(statearr_13135_13199[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 20))
{var inst_12985 = (state_13081[23]);var inst_12995 = cljs.core.first.call(null,inst_12985);var inst_12996 = cljs.core.nth.call(null,inst_12995,0,null);var inst_12997 = cljs.core.nth.call(null,inst_12995,1,null);var state_13081__$1 = (function (){var statearr_13136 = state_13081;(statearr_13136[25] = inst_12996);
return statearr_13136;
})();if(cljs.core.truth_(inst_12997))
{var statearr_13137_13200 = state_13081__$1;(statearr_13137_13200[1] = 22);
} else
{var statearr_13138_13201 = state_13081__$1;(statearr_13138_13201[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 21))
{var inst_13006 = (state_13081[2]);var state_13081__$1 = state_13081;var statearr_13139_13202 = state_13081__$1;(statearr_13139_13202[2] = inst_13006);
(statearr_13139_13202[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 22))
{var inst_12996 = (state_13081[25]);var inst_12999 = cljs.core.async.close_BANG_.call(null,inst_12996);var state_13081__$1 = state_13081;var statearr_13140_13203 = state_13081__$1;(statearr_13140_13203[2] = inst_12999);
(statearr_13140_13203[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 23))
{var state_13081__$1 = state_13081;var statearr_13141_13204 = state_13081__$1;(statearr_13141_13204[2] = null);
(statearr_13141_13204[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 24))
{var inst_12985 = (state_13081[23]);var inst_13002 = (state_13081[2]);var inst_13003 = cljs.core.next.call(null,inst_12985);var inst_12965 = inst_13003;var inst_12966 = null;var inst_12967 = 0;var inst_12968 = 0;var state_13081__$1 = (function (){var statearr_13142 = state_13081;(statearr_13142[12] = inst_12968);
(statearr_13142[26] = inst_13002);
(statearr_13142[13] = inst_12967);
(statearr_13142[14] = inst_12965);
(statearr_13142[15] = inst_12966);
return statearr_13142;
})();var statearr_13143_13205 = state_13081__$1;(statearr_13143_13205[2] = null);
(statearr_13143_13205[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 25))
{var inst_13027 = (state_13081[8]);var inst_13026 = (state_13081[9]);var inst_13029 = (inst_13027 < inst_13026);var inst_13030 = inst_13029;var state_13081__$1 = state_13081;if(cljs.core.truth_(inst_13030))
{var statearr_13144_13206 = state_13081__$1;(statearr_13144_13206[1] = 27);
} else
{var statearr_13145_13207 = state_13081__$1;(statearr_13145_13207[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 26))
{var inst_13072 = (state_13081[2]);var state_13081__$1 = (function (){var statearr_13146 = state_13081;(statearr_13146[27] = inst_13072);
return statearr_13146;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13081__$1,42,dchan);
} else
{if((state_val_13082 === 27))
{var inst_13027 = (state_13081[8]);var inst_13025 = (state_13081[10]);var inst_13032 = cljs.core._nth.call(null,inst_13025,inst_13027);var state_13081__$1 = (function (){var statearr_13147 = state_13081;(statearr_13147[6] = inst_13032);
return statearr_13147;
})();var statearr_13148_13208 = state_13081__$1;(statearr_13148_13208[2] = null);
(statearr_13148_13208[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 28))
{var inst_13044 = (state_13081[7]);var inst_13024 = (state_13081[11]);var inst_13044__$1 = cljs.core.seq.call(null,inst_13024);var state_13081__$1 = (function (){var statearr_13152 = state_13081;(statearr_13152[7] = inst_13044__$1);
return statearr_13152;
})();if(inst_13044__$1)
{var statearr_13153_13209 = state_13081__$1;(statearr_13153_13209[1] = 33);
} else
{var statearr_13154_13210 = state_13081__$1;(statearr_13154_13210[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 29))
{var inst_13070 = (state_13081[2]);var state_13081__$1 = state_13081;var statearr_13155_13211 = state_13081__$1;(statearr_13155_13211[2] = inst_13070);
(statearr_13155_13211[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 30))
{var inst_13027 = (state_13081[8]);var inst_13026 = (state_13081[9]);var inst_13025 = (state_13081[10]);var inst_13024 = (state_13081[11]);var inst_13040 = (state_13081[2]);var inst_13041 = (inst_13027 + 1);var tmp13149 = inst_13026;var tmp13150 = inst_13025;var tmp13151 = inst_13024;var inst_13024__$1 = tmp13151;var inst_13025__$1 = tmp13150;var inst_13026__$1 = tmp13149;var inst_13027__$1 = inst_13041;var state_13081__$1 = (function (){var statearr_13156 = state_13081;(statearr_13156[28] = inst_13040);
(statearr_13156[8] = inst_13027__$1);
(statearr_13156[9] = inst_13026__$1);
(statearr_13156[10] = inst_13025__$1);
(statearr_13156[11] = inst_13024__$1);
return statearr_13156;
})();var statearr_13157_13212 = state_13081__$1;(statearr_13157_13212[2] = null);
(statearr_13157_13212[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13082 === 31))
{var inst_13032 = (state_13081[6]);var inst_13033 = (state_13081[2]);var inst_13034 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13035 = cljs.core.async.untap_STAR_.call(null,m,inst_13032);var state_13081__$1 = (function (){var statearr_13158 = state_13081;(statearr_13158[29] = inst_13034);
(statearr_13158[30] = inst_13033);
return statearr_13158;
})();var statearr_13159_13213 = state_13081__$1;(statearr_13159_13213[2] = inst_13035);
(statearr_13159_13213[1] = 30);
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
});return ((function (switch__8250__auto__){
return (function() {
var state_machine__8251__auto__ = null;
var state_machine__8251__auto____0 = (function (){var statearr_13161 = (new Array(31));(statearr_13161[0] = state_machine__8251__auto__);
(statearr_13161[1] = 1);
return statearr_13161;
});
var state_machine__8251__auto____1 = (function (state_13081){while(true){
var result__8252__auto__ = switch__8250__auto__.call(null,state_13081);if(cljs.core.keyword_identical_QMARK_.call(null,result__8252__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8252__auto__;
}
break;
}
});
state_machine__8251__auto__ = function(state_13081){
switch(arguments.length){
case 0:
return state_machine__8251__auto____0.call(this);
case 1:
return state_machine__8251__auto____1.call(this,state_13081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8251__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8251__auto____0;
state_machine__8251__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8251__auto____1;
return state_machine__8251__auto__;
})()
;})(switch__8250__auto__))
})();var state__8314__auto__ = (function (){var statearr_13162 = f__8313__auto__.call(null);(statearr_13162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8312__auto___13163);
return statearr_13162;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8314__auto__);
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
{var x__6841__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6841__auto__)]);if(or__3943__auto__)
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
{var x__6841__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6841__auto__)]);if(or__3943__auto__)
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
{var x__6841__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6841__auto__)]);if(or__3943__auto__)
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
{var x__6841__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6841__auto__)]);if(or__3943__auto__)
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
{var x__6841__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6841__auto__)]);if(or__3943__auto__)
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
;var m = (function (){if(typeof cljs.core.async.t13334 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t13334');

/**
* @constructor
*/
cljs.core.async.t13334 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta13335){
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
this.meta13335 = meta13335;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13334.cljs$lang$type = true;
cljs.core.async.t13334.cljs$lang$ctorStr = "cljs.core.async/t13334";
cljs.core.async.t13334.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6772__auto__,writer__6773__auto__,opt__6774__auto__){return cljs.core._write.call(null,writer__6773__auto__,"cljs.core.async/t13334");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13334.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13334.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13334.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13334.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13334.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13334.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13334.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13334.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13334.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13336){var self__ = this;
return self__.meta13335;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13336,meta13335__$1){var self__ = this;
return (new cljs.core.async.t13334(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta13335__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13334 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13334(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13335){return (new cljs.core.async.t13334(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13335));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13334(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__8312__auto___13454 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8313__auto__ = (function (){var switch__8250__auto__ = (function (state_13407){var state_val_13408 = (state_13407[1]);if((state_val_13408 === 1))
{var inst_13340 = (state_13407[5]);var inst_13340__$1 = calc_state.call(null);var inst_13341 = cljs.core.seq_QMARK_.call(null,inst_13340__$1);var state_13407__$1 = (function (){var statearr_13409 = state_13407;(statearr_13409[5] = inst_13340__$1);
return statearr_13409;
})();if(inst_13341)
{var statearr_13410_13455 = state_13407__$1;(statearr_13410_13455[1] = 2);
} else
{var statearr_13411_13456 = state_13407__$1;(statearr_13411_13456[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13408 === 2))
{var inst_13340 = (state_13407[5]);var inst_13343 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13340);var state_13407__$1 = state_13407;var statearr_13412_13457 = state_13407__$1;(statearr_13412_13457[2] = inst_13343);
(statearr_13412_13457[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13408 === 3))
{var inst_13340 = (state_13407[5]);var state_13407__$1 = state_13407;var statearr_13413_13458 = state_13407__$1;(statearr_13413_13458[2] = inst_13340);
(statearr_13413_13458[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13408 === 4))
{var inst_13340 = (state_13407[5]);var inst_13346 = (state_13407[2]);var inst_13347 = cljs.core.get.call(null,inst_13346,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13348 = cljs.core.get.call(null,inst_13346,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13349 = cljs.core.get.call(null,inst_13346,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_13350 = inst_13340;var state_13407__$1 = (function (){var statearr_13414 = state_13407;(statearr_13414[6] = inst_13350);
(statearr_13414[7] = inst_13348);
(statearr_13414[8] = inst_13349);
(statearr_13414[9] = inst_13347);
return statearr_13414;
})();var statearr_13415_13459 = state_13407__$1;(statearr_13415_13459[2] = null);
(statearr_13415_13459[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13408 === 5))
{var inst_13350 = (state_13407[6]);var inst_13353 = cljs.core.seq_QMARK_.call(null,inst_13350);var state_13407__$1 = state_13407;if(inst_13353)
{var statearr_13416_13460 = state_13407__$1;(statearr_13416_13460[1] = 7);
} else
{var statearr_13417_13461 = state_13407__$1;(statearr_13417_13461[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13408 === 6))
{var inst_13405 = (state_13407[2]);var state_13407__$1 = state_13407;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13407__$1,inst_13405);
} else
{if((state_val_13408 === 7))
{var inst_13350 = (state_13407[6]);var inst_13355 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13350);var state_13407__$1 = state_13407;var statearr_13418_13462 = state_13407__$1;(statearr_13418_13462[2] = inst_13355);
(statearr_13418_13462[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13408 === 8))
{var inst_13350 = (state_13407[6]);var state_13407__$1 = state_13407;var statearr_13419_13463 = state_13407__$1;(statearr_13419_13463[2] = inst_13350);
(statearr_13419_13463[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13408 === 9))
{var inst_13358 = (state_13407[10]);var inst_13358__$1 = (state_13407[2]);var inst_13359 = cljs.core.get.call(null,inst_13358__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13360 = cljs.core.get.call(null,inst_13358__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13361 = cljs.core.get.call(null,inst_13358__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_13407__$1 = (function (){var statearr_13420 = state_13407;(statearr_13420[10] = inst_13358__$1);
(statearr_13420[11] = inst_13361);
(statearr_13420[12] = inst_13360);
return statearr_13420;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13407__$1,10,inst_13359);
} else
{if((state_val_13408 === 10))
{var inst_13367 = (state_13407[13]);var inst_13365 = (state_13407[14]);var inst_13364 = (state_13407[2]);var inst_13365__$1 = cljs.core.nth.call(null,inst_13364,0,null);var inst_13366 = cljs.core.nth.call(null,inst_13364,1,null);var inst_13367__$1 = (inst_13365__$1 == null);var state_13407__$1 = (function (){var statearr_13421 = state_13407;(statearr_13421[13] = inst_13367__$1);
(statearr_13421[15] = inst_13366);
(statearr_13421[14] = inst_13365__$1);
return statearr_13421;
})();if(cljs.core.truth_(inst_13367__$1))
{var statearr_13422_13464 = state_13407__$1;(statearr_13422_13464[1] = 11);
} else
{var statearr_13423_13465 = state_13407__$1;(statearr_13423_13465[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13408 === 11))
{var inst_13367 = (state_13407[13]);var state_13407__$1 = state_13407;var statearr_13424_13466 = state_13407__$1;(statearr_13424_13466[2] = inst_13367);
(statearr_13424_13466[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13408 === 12))
{var inst_13366 = (state_13407[15]);var inst_13370 = cljs.core._EQ_.call(null,inst_13366,change);var state_13407__$1 = state_13407;var statearr_13425_13467 = state_13407__$1;(statearr_13425_13467[2] = inst_13370);
(statearr_13425_13467[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13408 === 13))
{var inst_13372 = (state_13407[2]);var state_13407__$1 = state_13407;if(cljs.core.truth_(inst_13372))
{var statearr_13426_13468 = state_13407__$1;(statearr_13426_13468[1] = 14);
} else
{var statearr_13427_13469 = state_13407__$1;(statearr_13427_13469[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13408 === 14))
{var inst_13365 = (state_13407[14]);var inst_13374 = (inst_13365 == null);var state_13407__$1 = state_13407;if(cljs.core.truth_(inst_13374))
{var statearr_13428_13470 = state_13407__$1;(statearr_13428_13470[1] = 17);
} else
{var statearr_13429_13471 = state_13407__$1;(statearr_13429_13471[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13408 === 15))
{var inst_13366 = (state_13407[15]);var inst_13361 = (state_13407[11]);var inst_13383 = (state_13407[16]);var inst_13383__$1 = inst_13361.call(null,inst_13366);var state_13407__$1 = (function (){var statearr_13430 = state_13407;(statearr_13430[16] = inst_13383__$1);
return statearr_13430;
})();if(cljs.core.truth_(inst_13383__$1))
{var statearr_13431_13472 = state_13407__$1;(statearr_13431_13472[1] = 20);
} else
{var statearr_13432_13473 = state_13407__$1;(statearr_13432_13473[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13408 === 16))
{var inst_13403 = (state_13407[2]);var state_13407__$1 = state_13407;var statearr_13433_13474 = state_13407__$1;(statearr_13433_13474[2] = inst_13403);
(statearr_13433_13474[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13408 === 17))
{var inst_13366 = (state_13407[15]);var inst_13376 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13366);var state_13407__$1 = state_13407;var statearr_13434_13475 = state_13407__$1;(statearr_13434_13475[2] = inst_13376);
(statearr_13434_13475[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13408 === 18))
{var state_13407__$1 = state_13407;var statearr_13435_13476 = state_13407__$1;(statearr_13435_13476[2] = null);
(statearr_13435_13476[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13408 === 19))
{var inst_13379 = (state_13407[2]);var inst_13380 = calc_state.call(null);var inst_13350 = inst_13380;var state_13407__$1 = (function (){var statearr_13436 = state_13407;(statearr_13436[6] = inst_13350);
(statearr_13436[17] = inst_13379);
return statearr_13436;
})();var statearr_13437_13477 = state_13407__$1;(statearr_13437_13477[2] = null);
(statearr_13437_13477[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13408 === 20))
{var inst_13383 = (state_13407[16]);var state_13407__$1 = state_13407;var statearr_13438_13478 = state_13407__$1;(statearr_13438_13478[2] = inst_13383);
(statearr_13438_13478[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13408 === 21))
{var inst_13361 = (state_13407[11]);var inst_13386 = (state_13407[18]);var inst_13386__$1 = cljs.core.empty_QMARK_.call(null,inst_13361);var state_13407__$1 = (function (){var statearr_13439 = state_13407;(statearr_13439[18] = inst_13386__$1);
return statearr_13439;
})();if(inst_13386__$1)
{var statearr_13440_13479 = state_13407__$1;(statearr_13440_13479[1] = 23);
} else
{var statearr_13441_13480 = state_13407__$1;(statearr_13441_13480[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13408 === 22))
{var inst_13394 = (state_13407[2]);var state_13407__$1 = state_13407;if(cljs.core.truth_(inst_13394))
{var statearr_13442_13481 = state_13407__$1;(statearr_13442_13481[1] = 26);
} else
{var statearr_13443_13482 = state_13407__$1;(statearr_13443_13482[1] = 27);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13408 === 23))
{var inst_13366 = (state_13407[15]);var inst_13360 = (state_13407[12]);var inst_13388 = inst_13360.call(null,inst_13366);var inst_13389 = cljs.core.not.call(null,inst_13388);var state_13407__$1 = state_13407;var statearr_13444_13483 = state_13407__$1;(statearr_13444_13483[2] = inst_13389);
(statearr_13444_13483[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13408 === 24))
{var inst_13386 = (state_13407[18]);var state_13407__$1 = state_13407;var statearr_13445_13484 = state_13407__$1;(statearr_13445_13484[2] = inst_13386);
(statearr_13445_13484[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13408 === 25))
{var inst_13392 = (state_13407[2]);var state_13407__$1 = state_13407;var statearr_13446_13485 = state_13407__$1;(statearr_13446_13485[2] = inst_13392);
(statearr_13446_13485[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13408 === 26))
{var inst_13365 = (state_13407[14]);var state_13407__$1 = state_13407;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13407__$1,29,out,inst_13365);
} else
{if((state_val_13408 === 27))
{var state_13407__$1 = state_13407;var statearr_13447_13486 = state_13407__$1;(statearr_13447_13486[2] = null);
(statearr_13447_13486[1] = 28);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13408 === 28))
{var inst_13358 = (state_13407[10]);var inst_13400 = (state_13407[2]);var inst_13350 = inst_13358;var state_13407__$1 = (function (){var statearr_13448 = state_13407;(statearr_13448[19] = inst_13400);
(statearr_13448[6] = inst_13350);
return statearr_13448;
})();var statearr_13449_13487 = state_13407__$1;(statearr_13449_13487[2] = null);
(statearr_13449_13487[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13408 === 29))
{var inst_13397 = (state_13407[2]);var state_13407__$1 = state_13407;var statearr_13450_13488 = state_13407__$1;(statearr_13450_13488[2] = inst_13397);
(statearr_13450_13488[1] = 28);
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
});return ((function (switch__8250__auto__){
return (function() {
var state_machine__8251__auto__ = null;
var state_machine__8251__auto____0 = (function (){var statearr_13452 = (new Array(20));(statearr_13452[0] = state_machine__8251__auto__);
(statearr_13452[1] = 1);
return statearr_13452;
});
var state_machine__8251__auto____1 = (function (state_13407){while(true){
var result__8252__auto__ = switch__8250__auto__.call(null,state_13407);if(cljs.core.keyword_identical_QMARK_.call(null,result__8252__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8252__auto__;
}
break;
}
});
state_machine__8251__auto__ = function(state_13407){
switch(arguments.length){
case 0:
return state_machine__8251__auto____0.call(this);
case 1:
return state_machine__8251__auto____1.call(this,state_13407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8251__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8251__auto____0;
state_machine__8251__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8251__auto____1;
return state_machine__8251__auto__;
})()
;})(switch__8250__auto__))
})();var state__8314__auto__ = (function (){var statearr_13453 = f__8313__auto__.call(null);(statearr_13453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8312__auto___13454);
return statearr_13453;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8314__auto__);
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
{var x__6841__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6841__auto__)]);if(or__3943__auto__)
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
{var x__6841__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6841__auto__)]);if(or__3943__auto__)
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
{var x__6841__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6841__auto__)]);if(or__3943__auto__)
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
{var x__6841__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6841__auto__)]);if(or__3943__auto__)
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
return (function (p1__13489_SHARP_){if(cljs.core.truth_(p1__13489_SHARP_.call(null,topic)))
{return p1__13489_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13489_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3943__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13613 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t13613');

/**
* @constructor
*/
cljs.core.async.t13613 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13614){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13614 = meta13614;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13613.cljs$lang$type = true;
cljs.core.async.t13613.cljs$lang$ctorStr = "cljs.core.async/t13613";
cljs.core.async.t13613.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6772__auto__,writer__6773__auto__,opt__6774__auto__){return cljs.core._write.call(null,writer__6773__auto__,"cljs.core.async/t13613");
});})(mults,ensure_mult))
;
cljs.core.async.t13613.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13613.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13613.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13613.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13613.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13613.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13613.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13613.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13615){var self__ = this;
return self__.meta13614;
});})(mults,ensure_mult))
;
cljs.core.async.t13613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13615,meta13614__$1){var self__ = this;
return (new cljs.core.async.t13613(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13614__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13613 = ((function (mults,ensure_mult){
return (function __GT_t13613(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13614){return (new cljs.core.async.t13613(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13614));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13613(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__8312__auto___13736 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8313__auto__ = (function (){var switch__8250__auto__ = (function (state_13688){var state_val_13689 = (state_13688[1]);if((state_val_13689 === 1))
{var state_13688__$1 = state_13688;var statearr_13690_13737 = state_13688__$1;(statearr_13690_13737[2] = null);
(statearr_13690_13737[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13689 === 2))
{var state_13688__$1 = state_13688;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13688__$1,4,ch);
} else
{if((state_val_13689 === 3))
{var inst_13686 = (state_13688[2]);var state_13688__$1 = state_13688;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13688__$1,inst_13686);
} else
{if((state_val_13689 === 4))
{var inst_13618 = (state_13688[5]);var inst_13618__$1 = (state_13688[2]);var inst_13619 = (inst_13618__$1 == null);var state_13688__$1 = (function (){var statearr_13691 = state_13688;(statearr_13691[5] = inst_13618__$1);
return statearr_13691;
})();if(cljs.core.truth_(inst_13619))
{var statearr_13692_13738 = state_13688__$1;(statearr_13692_13738[1] = 5);
} else
{var statearr_13693_13739 = state_13688__$1;(statearr_13693_13739[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13689 === 5))
{var inst_13625 = cljs.core.deref.call(null,mults);var inst_13626 = cljs.core.vals.call(null,inst_13625);var inst_13627 = cljs.core.seq.call(null,inst_13626);var inst_13628 = inst_13627;var inst_13629 = null;var inst_13630 = 0;var inst_13631 = 0;var state_13688__$1 = (function (){var statearr_13694 = state_13688;(statearr_13694[6] = inst_13631);
(statearr_13694[7] = inst_13630);
(statearr_13694[8] = inst_13628);
(statearr_13694[9] = inst_13629);
return statearr_13694;
})();var statearr_13695_13740 = state_13688__$1;(statearr_13695_13740[2] = null);
(statearr_13695_13740[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13689 === 6))
{var inst_13618 = (state_13688[5]);var inst_13668 = (state_13688[10]);var inst_13666 = (state_13688[11]);var inst_13666__$1 = topic_fn.call(null,inst_13618);var inst_13667 = cljs.core.deref.call(null,mults);var inst_13668__$1 = cljs.core.get.call(null,inst_13667,inst_13666__$1);var state_13688__$1 = (function (){var statearr_13696 = state_13688;(statearr_13696[10] = inst_13668__$1);
(statearr_13696[11] = inst_13666__$1);
return statearr_13696;
})();if(cljs.core.truth_(inst_13668__$1))
{var statearr_13697_13741 = state_13688__$1;(statearr_13697_13741[1] = 19);
} else
{var statearr_13698_13742 = state_13688__$1;(statearr_13698_13742[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13689 === 7))
{var inst_13684 = (state_13688[2]);var state_13688__$1 = state_13688;var statearr_13699_13743 = state_13688__$1;(statearr_13699_13743[2] = inst_13684);
(statearr_13699_13743[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13689 === 8))
{var inst_13631 = (state_13688[6]);var inst_13630 = (state_13688[7]);var inst_13633 = (inst_13631 < inst_13630);var inst_13634 = inst_13633;var state_13688__$1 = state_13688;if(cljs.core.truth_(inst_13634))
{var statearr_13703_13744 = state_13688__$1;(statearr_13703_13744[1] = 10);
} else
{var statearr_13704_13745 = state_13688__$1;(statearr_13704_13745[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13689 === 9))
{var inst_13664 = (state_13688[2]);var state_13688__$1 = state_13688;var statearr_13705_13746 = state_13688__$1;(statearr_13705_13746[2] = inst_13664);
(statearr_13705_13746[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13689 === 10))
{var inst_13631 = (state_13688[6]);var inst_13630 = (state_13688[7]);var inst_13628 = (state_13688[8]);var inst_13629 = (state_13688[9]);var inst_13636 = cljs.core._nth.call(null,inst_13629,inst_13631);var inst_13637 = cljs.core.async.muxch_STAR_.call(null,inst_13636);var inst_13638 = cljs.core.async.close_BANG_.call(null,inst_13637);var inst_13639 = (inst_13631 + 1);var tmp13700 = inst_13630;var tmp13701 = inst_13628;var tmp13702 = inst_13629;var inst_13628__$1 = tmp13701;var inst_13629__$1 = tmp13702;var inst_13630__$1 = tmp13700;var inst_13631__$1 = inst_13639;var state_13688__$1 = (function (){var statearr_13706 = state_13688;(statearr_13706[6] = inst_13631__$1);
(statearr_13706[7] = inst_13630__$1);
(statearr_13706[8] = inst_13628__$1);
(statearr_13706[9] = inst_13629__$1);
(statearr_13706[12] = inst_13638);
return statearr_13706;
})();var statearr_13707_13747 = state_13688__$1;(statearr_13707_13747[2] = null);
(statearr_13707_13747[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13689 === 11))
{var inst_13642 = (state_13688[13]);var inst_13628 = (state_13688[8]);var inst_13642__$1 = cljs.core.seq.call(null,inst_13628);var state_13688__$1 = (function (){var statearr_13708 = state_13688;(statearr_13708[13] = inst_13642__$1);
return statearr_13708;
})();if(inst_13642__$1)
{var statearr_13709_13748 = state_13688__$1;(statearr_13709_13748[1] = 13);
} else
{var statearr_13710_13749 = state_13688__$1;(statearr_13710_13749[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13689 === 12))
{var inst_13662 = (state_13688[2]);var state_13688__$1 = state_13688;var statearr_13711_13750 = state_13688__$1;(statearr_13711_13750[2] = inst_13662);
(statearr_13711_13750[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13689 === 13))
{var inst_13642 = (state_13688[13]);var inst_13644 = cljs.core.chunked_seq_QMARK_.call(null,inst_13642);var state_13688__$1 = state_13688;if(inst_13644)
{var statearr_13712_13751 = state_13688__$1;(statearr_13712_13751[1] = 16);
} else
{var statearr_13713_13752 = state_13688__$1;(statearr_13713_13752[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13689 === 14))
{var state_13688__$1 = state_13688;var statearr_13714_13753 = state_13688__$1;(statearr_13714_13753[2] = null);
(statearr_13714_13753[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13689 === 15))
{var inst_13660 = (state_13688[2]);var state_13688__$1 = state_13688;var statearr_13715_13754 = state_13688__$1;(statearr_13715_13754[2] = inst_13660);
(statearr_13715_13754[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13689 === 16))
{var inst_13642 = (state_13688[13]);var inst_13646 = cljs.core.chunk_first.call(null,inst_13642);var inst_13647 = cljs.core.chunk_rest.call(null,inst_13642);var inst_13648 = cljs.core.count.call(null,inst_13646);var inst_13628 = inst_13647;var inst_13629 = inst_13646;var inst_13630 = inst_13648;var inst_13631 = 0;var state_13688__$1 = (function (){var statearr_13716 = state_13688;(statearr_13716[6] = inst_13631);
(statearr_13716[7] = inst_13630);
(statearr_13716[8] = inst_13628);
(statearr_13716[9] = inst_13629);
return statearr_13716;
})();var statearr_13717_13755 = state_13688__$1;(statearr_13717_13755[2] = null);
(statearr_13717_13755[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13689 === 17))
{var inst_13642 = (state_13688[13]);var inst_13651 = cljs.core.first.call(null,inst_13642);var inst_13652 = cljs.core.async.muxch_STAR_.call(null,inst_13651);var inst_13653 = cljs.core.async.close_BANG_.call(null,inst_13652);var inst_13654 = cljs.core.next.call(null,inst_13642);var inst_13628 = inst_13654;var inst_13629 = null;var inst_13630 = 0;var inst_13631 = 0;var state_13688__$1 = (function (){var statearr_13718 = state_13688;(statearr_13718[6] = inst_13631);
(statearr_13718[7] = inst_13630);
(statearr_13718[8] = inst_13628);
(statearr_13718[9] = inst_13629);
(statearr_13718[14] = inst_13653);
return statearr_13718;
})();var statearr_13719_13756 = state_13688__$1;(statearr_13719_13756[2] = null);
(statearr_13719_13756[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13689 === 18))
{var inst_13657 = (state_13688[2]);var state_13688__$1 = state_13688;var statearr_13720_13757 = state_13688__$1;(statearr_13720_13757[2] = inst_13657);
(statearr_13720_13757[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13689 === 19))
{var state_13688__$1 = state_13688;var statearr_13721_13758 = state_13688__$1;(statearr_13721_13758[2] = null);
(statearr_13721_13758[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13689 === 20))
{var state_13688__$1 = state_13688;var statearr_13722_13759 = state_13688__$1;(statearr_13722_13759[2] = null);
(statearr_13722_13759[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13689 === 21))
{var inst_13681 = (state_13688[2]);var state_13688__$1 = (function (){var statearr_13723 = state_13688;(statearr_13723[15] = inst_13681);
return statearr_13723;
})();var statearr_13724_13760 = state_13688__$1;(statearr_13724_13760[2] = null);
(statearr_13724_13760[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13689 === 22))
{var inst_13678 = (state_13688[2]);var state_13688__$1 = state_13688;var statearr_13725_13761 = state_13688__$1;(statearr_13725_13761[2] = inst_13678);
(statearr_13725_13761[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13689 === 23))
{var inst_13666 = (state_13688[11]);var inst_13670 = (state_13688[2]);var inst_13671 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13666);var state_13688__$1 = (function (){var statearr_13726 = state_13688;(statearr_13726[16] = inst_13670);
return statearr_13726;
})();var statearr_13727_13762 = state_13688__$1;(statearr_13727_13762[2] = inst_13671);
(statearr_13727_13762[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13689 === 24))
{try{var inst_13618 = (state_13688[5]);var inst_13668 = (state_13688[10]);var inst_13674 = cljs.core.async.muxch_STAR_.call(null,inst_13668);var state_13688__$1 = state_13688;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13688__$1,25,inst_13674,inst_13618);
}catch (e13728){if((e13728 instanceof Object))
{var ex__8244__auto__ = e13728;var statearr_13729_13763 = state_13688;(statearr_13729_13763[1] = 23);
(statearr_13729_13763[2] = ex__8244__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13728;
} else
{return null;
}
}
}} else
{if((state_val_13689 === 25))
{try{var inst_13676 = (state_13688[2]);var state_13688__$1 = state_13688;var statearr_13732_13764 = state_13688__$1;(statearr_13732_13764[2] = inst_13676);
(statearr_13732_13764[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e13730){if((e13730 instanceof Object))
{var ex__8244__auto__ = e13730;var statearr_13731_13765 = state_13688;(statearr_13731_13765[1] = 23);
(statearr_13731_13765[2] = ex__8244__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13730;
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
});return ((function (switch__8250__auto__){
return (function() {
var state_machine__8251__auto__ = null;
var state_machine__8251__auto____0 = (function (){var statearr_13734 = (new Array(17));(statearr_13734[0] = state_machine__8251__auto__);
(statearr_13734[1] = 1);
return statearr_13734;
});
var state_machine__8251__auto____1 = (function (state_13688){while(true){
var result__8252__auto__ = switch__8250__auto__.call(null,state_13688);if(cljs.core.keyword_identical_QMARK_.call(null,result__8252__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8252__auto__;
}
break;
}
});
state_machine__8251__auto__ = function(state_13688){
switch(arguments.length){
case 0:
return state_machine__8251__auto____0.call(this);
case 1:
return state_machine__8251__auto____1.call(this,state_13688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8251__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8251__auto____0;
state_machine__8251__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8251__auto____1;
return state_machine__8251__auto__;
})()
;})(switch__8250__auto__))
})();var state__8314__auto__ = (function (){var statearr_13735 = f__8313__auto__.call(null);(statearr_13735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8312__auto___13736);
return statearr_13735;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8314__auto__);
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
,cljs.core.range.call(null,cnt));var c__8312__auto___13896 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8313__auto__ = (function (){var switch__8250__auto__ = (function (state_13868){var state_val_13869 = (state_13868[1]);if((state_val_13869 === 1))
{var state_13868__$1 = state_13868;var statearr_13870_13897 = state_13868__$1;(statearr_13870_13897[2] = null);
(statearr_13870_13897[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13869 === 2))
{var inst_13832 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13833 = 0;var state_13868__$1 = (function (){var statearr_13871 = state_13868;(statearr_13871[5] = inst_13832);
(statearr_13871[6] = inst_13833);
return statearr_13871;
})();var statearr_13872_13898 = state_13868__$1;(statearr_13872_13898[2] = null);
(statearr_13872_13898[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13869 === 3))
{var inst_13866 = (state_13868[2]);var state_13868__$1 = state_13868;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13868__$1,inst_13866);
} else
{if((state_val_13869 === 4))
{var inst_13833 = (state_13868[6]);var inst_13835 = (inst_13833 < cnt);var state_13868__$1 = state_13868;if(cljs.core.truth_(inst_13835))
{var statearr_13873_13899 = state_13868__$1;(statearr_13873_13899[1] = 6);
} else
{var statearr_13874_13900 = state_13868__$1;(statearr_13874_13900[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13869 === 5))
{var inst_13852 = (state_13868[2]);var state_13868__$1 = (function (){var statearr_13875 = state_13868;(statearr_13875[7] = inst_13852);
return statearr_13875;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13868__$1,12,dchan);
} else
{if((state_val_13869 === 6))
{var state_13868__$1 = state_13868;var statearr_13876_13901 = state_13868__$1;(statearr_13876_13901[2] = null);
(statearr_13876_13901[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13869 === 7))
{var state_13868__$1 = state_13868;var statearr_13877_13902 = state_13868__$1;(statearr_13877_13902[2] = null);
(statearr_13877_13902[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13869 === 8))
{var inst_13850 = (state_13868[2]);var state_13868__$1 = state_13868;var statearr_13878_13903 = state_13868__$1;(statearr_13878_13903[2] = inst_13850);
(statearr_13878_13903[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13869 === 9))
{var inst_13833 = (state_13868[6]);var inst_13845 = (state_13868[2]);var inst_13846 = (inst_13833 + 1);var inst_13833__$1 = inst_13846;var state_13868__$1 = (function (){var statearr_13879 = state_13868;(statearr_13879[6] = inst_13833__$1);
(statearr_13879[8] = inst_13845);
return statearr_13879;
})();var statearr_13880_13904 = state_13868__$1;(statearr_13880_13904[2] = null);
(statearr_13880_13904[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13869 === 10))
{var inst_13837 = (state_13868[2]);var inst_13838 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13868__$1 = (function (){var statearr_13881 = state_13868;(statearr_13881[9] = inst_13837);
return statearr_13881;
})();var statearr_13882_13905 = state_13868__$1;(statearr_13882_13905[2] = inst_13838);
(statearr_13882_13905[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13869 === 11))
{try{var inst_13833 = (state_13868[6]);var inst_13841 = chs__$1.call(null,inst_13833);var inst_13842 = done.call(null,inst_13833);var inst_13843 = cljs.core.async.take_BANG_.call(null,inst_13841,inst_13842);var state_13868__$1 = state_13868;var statearr_13885_13906 = state_13868__$1;(statearr_13885_13906[2] = inst_13843);
(statearr_13885_13906[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e13883){if((e13883 instanceof Object))
{var ex__8244__auto__ = e13883;var statearr_13884_13907 = state_13868;(statearr_13884_13907[1] = 10);
(statearr_13884_13907[2] = ex__8244__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13883;
} else
{return null;
}
}
}} else
{if((state_val_13869 === 12))
{var inst_13854 = (state_13868[10]);var inst_13854__$1 = (state_13868[2]);var inst_13855 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13854__$1);var state_13868__$1 = (function (){var statearr_13886 = state_13868;(statearr_13886[10] = inst_13854__$1);
return statearr_13886;
})();if(cljs.core.truth_(inst_13855))
{var statearr_13887_13908 = state_13868__$1;(statearr_13887_13908[1] = 13);
} else
{var statearr_13888_13909 = state_13868__$1;(statearr_13888_13909[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13869 === 13))
{var inst_13857 = cljs.core.async.close_BANG_.call(null,out);var state_13868__$1 = state_13868;var statearr_13889_13910 = state_13868__$1;(statearr_13889_13910[2] = inst_13857);
(statearr_13889_13910[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13869 === 14))
{var inst_13854 = (state_13868[10]);var inst_13859 = cljs.core.apply.call(null,f,inst_13854);var state_13868__$1 = state_13868;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13868__$1,16,out,inst_13859);
} else
{if((state_val_13869 === 15))
{var inst_13864 = (state_13868[2]);var state_13868__$1 = state_13868;var statearr_13890_13911 = state_13868__$1;(statearr_13890_13911[2] = inst_13864);
(statearr_13890_13911[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13869 === 16))
{var inst_13861 = (state_13868[2]);var state_13868__$1 = (function (){var statearr_13891 = state_13868;(statearr_13891[11] = inst_13861);
return statearr_13891;
})();var statearr_13892_13912 = state_13868__$1;(statearr_13892_13912[2] = null);
(statearr_13892_13912[1] = 2);
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
});return ((function (switch__8250__auto__){
return (function() {
var state_machine__8251__auto__ = null;
var state_machine__8251__auto____0 = (function (){var statearr_13894 = (new Array(12));(statearr_13894[0] = state_machine__8251__auto__);
(statearr_13894[1] = 1);
return statearr_13894;
});
var state_machine__8251__auto____1 = (function (state_13868){while(true){
var result__8252__auto__ = switch__8250__auto__.call(null,state_13868);if(cljs.core.keyword_identical_QMARK_.call(null,result__8252__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8252__auto__;
}
break;
}
});
state_machine__8251__auto__ = function(state_13868){
switch(arguments.length){
case 0:
return state_machine__8251__auto____0.call(this);
case 1:
return state_machine__8251__auto____1.call(this,state_13868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8251__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8251__auto____0;
state_machine__8251__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8251__auto____1;
return state_machine__8251__auto__;
})()
;})(switch__8250__auto__))
})();var state__8314__auto__ = (function (){var statearr_13895 = f__8313__auto__.call(null);(statearr_13895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8312__auto___13896);
return statearr_13895;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8314__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8312__auto___14012 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8313__auto__ = (function (){var switch__8250__auto__ = (function (state_13992){var state_val_13993 = (state_13992[1]);if((state_val_13993 === 1))
{var inst_13963 = cljs.core.vec.call(null,chs);var inst_13964 = inst_13963;var state_13992__$1 = (function (){var statearr_13994 = state_13992;(statearr_13994[5] = inst_13964);
return statearr_13994;
})();var statearr_13995_14013 = state_13992__$1;(statearr_13995_14013[2] = null);
(statearr_13995_14013[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13993 === 2))
{var inst_13964 = (state_13992[5]);var inst_13966 = cljs.core.count.call(null,inst_13964);var inst_13967 = (inst_13966 > 0);var state_13992__$1 = state_13992;if(cljs.core.truth_(inst_13967))
{var statearr_13996_14014 = state_13992__$1;(statearr_13996_14014[1] = 4);
} else
{var statearr_13997_14015 = state_13992__$1;(statearr_13997_14015[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13993 === 3))
{var inst_13990 = (state_13992[2]);var state_13992__$1 = state_13992;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13992__$1,inst_13990);
} else
{if((state_val_13993 === 4))
{var inst_13964 = (state_13992[5]);var state_13992__$1 = state_13992;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13992__$1,7,inst_13964);
} else
{if((state_val_13993 === 5))
{var inst_13986 = cljs.core.async.close_BANG_.call(null,out);var state_13992__$1 = state_13992;var statearr_13998_14016 = state_13992__$1;(statearr_13998_14016[2] = inst_13986);
(statearr_13998_14016[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13993 === 6))
{var inst_13988 = (state_13992[2]);var state_13992__$1 = state_13992;var statearr_13999_14017 = state_13992__$1;(statearr_13999_14017[2] = inst_13988);
(statearr_13999_14017[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13993 === 7))
{var inst_13972 = (state_13992[6]);var inst_13971 = (state_13992[7]);var inst_13971__$1 = (state_13992[2]);var inst_13972__$1 = cljs.core.nth.call(null,inst_13971__$1,0,null);var inst_13973 = cljs.core.nth.call(null,inst_13971__$1,1,null);var inst_13974 = (inst_13972__$1 == null);var state_13992__$1 = (function (){var statearr_14000 = state_13992;(statearr_14000[8] = inst_13973);
(statearr_14000[6] = inst_13972__$1);
(statearr_14000[7] = inst_13971__$1);
return statearr_14000;
})();if(cljs.core.truth_(inst_13974))
{var statearr_14001_14018 = state_13992__$1;(statearr_14001_14018[1] = 8);
} else
{var statearr_14002_14019 = state_13992__$1;(statearr_14002_14019[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13993 === 8))
{var inst_13964 = (state_13992[5]);var inst_13973 = (state_13992[8]);var inst_13972 = (state_13992[6]);var inst_13971 = (state_13992[7]);var inst_13976 = (function (){var c = inst_13973;var v = inst_13972;var vec__13969 = inst_13971;var cs = inst_13964;return ((function (c,v,vec__13969,cs,inst_13964,inst_13973,inst_13972,inst_13971,state_val_13993){
return (function (p1__13913_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13913_SHARP_);
});
;})(c,v,vec__13969,cs,inst_13964,inst_13973,inst_13972,inst_13971,state_val_13993))
})();var inst_13977 = cljs.core.filterv.call(null,inst_13976,inst_13964);var inst_13964__$1 = inst_13977;var state_13992__$1 = (function (){var statearr_14003 = state_13992;(statearr_14003[5] = inst_13964__$1);
return statearr_14003;
})();var statearr_14004_14020 = state_13992__$1;(statearr_14004_14020[2] = null);
(statearr_14004_14020[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13993 === 9))
{var inst_13972 = (state_13992[6]);var state_13992__$1 = state_13992;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13992__$1,11,out,inst_13972);
} else
{if((state_val_13993 === 10))
{var inst_13984 = (state_13992[2]);var state_13992__$1 = state_13992;var statearr_14006_14021 = state_13992__$1;(statearr_14006_14021[2] = inst_13984);
(statearr_14006_14021[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13993 === 11))
{var inst_13964 = (state_13992[5]);var inst_13981 = (state_13992[2]);var tmp14005 = inst_13964;var inst_13964__$1 = tmp14005;var state_13992__$1 = (function (){var statearr_14007 = state_13992;(statearr_14007[9] = inst_13981);
(statearr_14007[5] = inst_13964__$1);
return statearr_14007;
})();var statearr_14008_14022 = state_13992__$1;(statearr_14008_14022[2] = null);
(statearr_14008_14022[1] = 2);
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
});return ((function (switch__8250__auto__){
return (function() {
var state_machine__8251__auto__ = null;
var state_machine__8251__auto____0 = (function (){var statearr_14010 = (new Array(10));(statearr_14010[0] = state_machine__8251__auto__);
(statearr_14010[1] = 1);
return statearr_14010;
});
var state_machine__8251__auto____1 = (function (state_13992){while(true){
var result__8252__auto__ = switch__8250__auto__.call(null,state_13992);if(cljs.core.keyword_identical_QMARK_.call(null,result__8252__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8252__auto__;
}
break;
}
});
state_machine__8251__auto__ = function(state_13992){
switch(arguments.length){
case 0:
return state_machine__8251__auto____0.call(this);
case 1:
return state_machine__8251__auto____1.call(this,state_13992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8251__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8251__auto____0;
state_machine__8251__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8251__auto____1;
return state_machine__8251__auto__;
})()
;})(switch__8250__auto__))
})();var state__8314__auto__ = (function (){var statearr_14011 = f__8313__auto__.call(null);(statearr_14011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8312__auto___14012);
return statearr_14011;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8314__auto__);
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
