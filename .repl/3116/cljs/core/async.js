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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11403 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11403');

/**
* @constructor
*/
cljs.core.async.t11403 = (function (f,fn_handler,meta11404){
this.f = f;
this.fn_handler = fn_handler;
this.meta11404 = meta11404;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11403.cljs$lang$type = true;
cljs.core.async.t11403.cljs$lang$ctorStr = "cljs.core.async/t11403";
cljs.core.async.t11403.cljs$lang$ctorPrWriter = (function (this__6738__auto__,writer__6739__auto__,opt__6740__auto__){return cljs.core._write.call(null,writer__6739__auto__,"cljs.core.async/t11403");
});
cljs.core.async.t11403.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11403.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return true;
});
cljs.core.async.t11403.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
return self__.f;
});
cljs.core.async.t11403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11405){var self__ = this;
return self__.meta11404;
});
cljs.core.async.t11403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11405,meta11404__$1){var self__ = this;
return (new cljs.core.async.t11403(self__.f,self__.fn_handler,meta11404__$1));
});
cljs.core.async.__GT_t11403 = (function __GT_t11403(f__$1,fn_handler__$1,meta11404){return (new cljs.core.async.t11403(f__$1,fn_handler__$1,meta11404));
});
}
return (new cljs.core.async.t11403(f,fn_handler,null));
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
{var val_11406 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11406);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_11406);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__7078__auto___11407 = n;var x_11408 = 0;while(true){
if((x_11408 < n__7078__auto___11407))
{(a[x_11408] = 0);
{
var G__11409 = (x_11408 + 1);
x_11408 = G__11409;
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
var G__11410 = (i + 1);
i = G__11410;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11414 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11414');

/**
* @constructor
*/
cljs.core.async.t11414 = (function (flag,alt_flag,meta11415){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11415 = meta11415;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11414.cljs$lang$type = true;
cljs.core.async.t11414.cljs$lang$ctorStr = "cljs.core.async/t11414";
cljs.core.async.t11414.cljs$lang$ctorPrWriter = (function (this__6738__auto__,writer__6739__auto__,opt__6740__auto__){return cljs.core._write.call(null,writer__6739__auto__,"cljs.core.async/t11414");
});
cljs.core.async.t11414.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11414.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t11414.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t11414.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11416){var self__ = this;
return self__.meta11415;
});
cljs.core.async.t11414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11416,meta11415__$1){var self__ = this;
return (new cljs.core.async.t11414(self__.flag,self__.alt_flag,meta11415__$1));
});
cljs.core.async.__GT_t11414 = (function __GT_t11414(flag__$1,alt_flag__$1,meta11415){return (new cljs.core.async.t11414(flag__$1,alt_flag__$1,meta11415));
});
}
return (new cljs.core.async.t11414(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11420 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11420');

/**
* @constructor
*/
cljs.core.async.t11420 = (function (cb,flag,alt_handler,meta11421){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11421 = meta11421;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11420.cljs$lang$type = true;
cljs.core.async.t11420.cljs$lang$ctorStr = "cljs.core.async/t11420";
cljs.core.async.t11420.cljs$lang$ctorPrWriter = (function (this__6738__auto__,writer__6739__auto__,opt__6740__auto__){return cljs.core._write.call(null,writer__6739__auto__,"cljs.core.async/t11420");
});
cljs.core.async.t11420.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11420.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11420.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11420.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11422){var self__ = this;
return self__.meta11421;
});
cljs.core.async.t11420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11422,meta11421__$1){var self__ = this;
return (new cljs.core.async.t11420(self__.cb,self__.flag,self__.alt_handler,meta11421__$1));
});
cljs.core.async.__GT_t11420 = (function __GT_t11420(cb__$1,flag__$1,alt_handler__$1,meta11421){return (new cljs.core.async.t11420(cb__$1,flag__$1,alt_handler__$1,meta11421));
});
}
return (new cljs.core.async.t11420(cb,flag,alt_handler,null));
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
return (function (p1__11423_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__11423_SHARP_,port], true));
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
var G__11424 = (i + 1);
i = G__11424;
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
var alts_BANG___delegate = function (ports,p__11425){var map__11427 = p__11425;var map__11427__$1 = ((cljs.core.seq_QMARK_.call(null,map__11427))?cljs.core.apply.call(null,cljs.core.hash_map,map__11427):map__11427);var opts = map__11427__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11425 = null;if (arguments.length > 1) {
  p__11425 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11425);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11428){
var ports = cljs.core.first(arglist__11428);
var p__11425 = cljs.core.rest(arglist__11428);
return alts_BANG___delegate(ports,p__11425);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11436 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11436');

/**
* @constructor
*/
cljs.core.async.t11436 = (function (ch,f,map_LT_,meta11437){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11437 = meta11437;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11436.cljs$lang$type = true;
cljs.core.async.t11436.cljs$lang$ctorStr = "cljs.core.async/t11436";
cljs.core.async.t11436.cljs$lang$ctorPrWriter = (function (this__6738__auto__,writer__6739__auto__,opt__6740__auto__){return cljs.core._write.call(null,writer__6739__auto__,"cljs.core.async/t11436");
});
cljs.core.async.t11436.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11436.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11436.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11436.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11439 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11439');

/**
* @constructor
*/
cljs.core.async.t11439 = (function (fn1,_,meta11437,ch,f,map_LT_,meta11440){
this.fn1 = fn1;
this._ = _;
this.meta11437 = meta11437;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11440 = meta11440;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11439.cljs$lang$type = true;
cljs.core.async.t11439.cljs$lang$ctorStr = "cljs.core.async/t11439";
cljs.core.async.t11439.cljs$lang$ctorPrWriter = (function (this__6738__auto__,writer__6739__auto__,opt__6740__auto__){return cljs.core._write.call(null,writer__6739__auto__,"cljs.core.async/t11439");
});
cljs.core.async.t11439.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11439.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$2){var self__ = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t11439.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$2){var self__ = this;
return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t11439.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$2){var self__ = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1){
return (function (p1__11429_SHARP_){return f1.call(null,(((p1__11429_SHARP_ == null))?null:self__.f.call(null,p1__11429_SHARP_)));
});
;})(f1))
});
cljs.core.async.t11439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11441){var self__ = this;
return self__.meta11440;
});
cljs.core.async.t11439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11441,meta11440__$1){var self__ = this;
return (new cljs.core.async.t11439(self__.fn1,self__._,self__.meta11437,self__.ch,self__.f,self__.map_LT_,meta11440__$1));
});
cljs.core.async.__GT_t11439 = (function __GT_t11439(fn1__$1,___$1,meta11437__$1,ch__$2,f__$2,map_LT___$2,meta11440){return (new cljs.core.async.t11439(fn1__$1,___$1,meta11437__$1,ch__$2,f__$2,map_LT___$2,meta11440));
});
}
return (new cljs.core.async.t11439(fn1,_,self__.meta11437,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t11436.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11436.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11438){var self__ = this;
return self__.meta11437;
});
cljs.core.async.t11436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11438,meta11437__$1){var self__ = this;
return (new cljs.core.async.t11436(self__.ch,self__.f,self__.map_LT_,meta11437__$1));
});
cljs.core.async.__GT_t11436 = (function __GT_t11436(ch__$1,f__$1,map_LT___$1,meta11437){return (new cljs.core.async.t11436(ch__$1,f__$1,map_LT___$1,meta11437));
});
}
return (new cljs.core.async.t11436(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11445 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11445');

/**
* @constructor
*/
cljs.core.async.t11445 = (function (ch,f,map_GT_,meta11446){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11446 = meta11446;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11445.cljs$lang$type = true;
cljs.core.async.t11445.cljs$lang$ctorStr = "cljs.core.async/t11445";
cljs.core.async.t11445.cljs$lang$ctorPrWriter = (function (this__6738__auto__,writer__6739__auto__,opt__6740__auto__){return cljs.core._write.call(null,writer__6739__auto__,"cljs.core.async/t11445");
});
cljs.core.async.t11445.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11445.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11445.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11445.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11445.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11445.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11447){var self__ = this;
return self__.meta11446;
});
cljs.core.async.t11445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11447,meta11446__$1){var self__ = this;
return (new cljs.core.async.t11445(self__.ch,self__.f,self__.map_GT_,meta11446__$1));
});
cljs.core.async.__GT_t11445 = (function __GT_t11445(ch__$1,f__$1,map_GT___$1,meta11446){return (new cljs.core.async.t11445(ch__$1,f__$1,map_GT___$1,meta11446));
});
}
return (new cljs.core.async.t11445(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11451 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11451');

/**
* @constructor
*/
cljs.core.async.t11451 = (function (ch,p,filter_GT_,meta11452){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11452 = meta11452;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11451.cljs$lang$type = true;
cljs.core.async.t11451.cljs$lang$ctorStr = "cljs.core.async/t11451";
cljs.core.async.t11451.cljs$lang$ctorPrWriter = (function (this__6738__auto__,writer__6739__auto__,opt__6740__auto__){return cljs.core._write.call(null,writer__6739__auto__,"cljs.core.async/t11451");
});
cljs.core.async.t11451.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11451.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11451.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11451.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11451.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11451.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11453){var self__ = this;
return self__.meta11452;
});
cljs.core.async.t11451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11453,meta11452__$1){var self__ = this;
return (new cljs.core.async.t11451(self__.ch,self__.p,self__.filter_GT_,meta11452__$1));
});
cljs.core.async.__GT_t11451 = (function __GT_t11451(ch__$1,p__$1,filter_GT___$1,meta11452){return (new cljs.core.async.t11451(ch__$1,p__$1,filter_GT___$1,meta11452));
});
}
return (new cljs.core.async.t11451(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8266__auto___11528 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8267__auto__ = (function (){var switch__8208__auto__ = (function (state_11511){var state_val_11512 = (state_11511[1]);if((state_val_11512 === 1))
{var state_11511__$1 = state_11511;var statearr_11513_11529 = state_11511__$1;(statearr_11513_11529[2] = null);
(statearr_11513_11529[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11512 === 2))
{var state_11511__$1 = state_11511;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11511__$1,4,ch);
} else
{if((state_val_11512 === 3))
{var inst_11509 = (state_11511[2]);var state_11511__$1 = state_11511;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11511__$1,inst_11509);
} else
{if((state_val_11512 === 4))
{var inst_11493 = (state_11511[5]);var inst_11493__$1 = (state_11511[2]);var inst_11494 = (inst_11493__$1 == null);var state_11511__$1 = (function (){var statearr_11514 = state_11511;(statearr_11514[5] = inst_11493__$1);
return statearr_11514;
})();if(cljs.core.truth_(inst_11494))
{var statearr_11515_11530 = state_11511__$1;(statearr_11515_11530[1] = 5);
} else
{var statearr_11516_11531 = state_11511__$1;(statearr_11516_11531[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11512 === 5))
{var inst_11496 = cljs.core.async.close_BANG_.call(null,out);var state_11511__$1 = state_11511;var statearr_11517_11532 = state_11511__$1;(statearr_11517_11532[2] = inst_11496);
(statearr_11517_11532[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11512 === 6))
{var inst_11493 = (state_11511[5]);var inst_11498 = p.call(null,inst_11493);var state_11511__$1 = state_11511;if(cljs.core.truth_(inst_11498))
{var statearr_11518_11533 = state_11511__$1;(statearr_11518_11533[1] = 8);
} else
{var statearr_11519_11534 = state_11511__$1;(statearr_11519_11534[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11512 === 7))
{var inst_11507 = (state_11511[2]);var state_11511__$1 = state_11511;var statearr_11520_11535 = state_11511__$1;(statearr_11520_11535[2] = inst_11507);
(statearr_11520_11535[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11512 === 8))
{var inst_11493 = (state_11511[5]);var state_11511__$1 = state_11511;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11511__$1,11,out,inst_11493);
} else
{if((state_val_11512 === 9))
{var state_11511__$1 = state_11511;var statearr_11521_11536 = state_11511__$1;(statearr_11521_11536[2] = null);
(statearr_11521_11536[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11512 === 10))
{var inst_11504 = (state_11511[2]);var state_11511__$1 = (function (){var statearr_11522 = state_11511;(statearr_11522[6] = inst_11504);
return statearr_11522;
})();var statearr_11523_11537 = state_11511__$1;(statearr_11523_11537[2] = null);
(statearr_11523_11537[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11512 === 11))
{var inst_11501 = (state_11511[2]);var state_11511__$1 = state_11511;var statearr_11524_11538 = state_11511__$1;(statearr_11524_11538[2] = inst_11501);
(statearr_11524_11538[1] = 10);
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
});return ((function (switch__8208__auto__){
return (function() {
var state_machine__8209__auto__ = null;
var state_machine__8209__auto____0 = (function (){var statearr_11526 = (new Array(7));(statearr_11526[0] = state_machine__8209__auto__);
(statearr_11526[1] = 1);
return statearr_11526;
});
var state_machine__8209__auto____1 = (function (state_11511){while(true){
var result__8210__auto__ = switch__8208__auto__.call(null,state_11511);if(cljs.core.keyword_identical_QMARK_.call(null,result__8210__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8210__auto__;
}
break;
}
});
state_machine__8209__auto__ = function(state_11511){
switch(arguments.length){
case 0:
return state_machine__8209__auto____0.call(this);
case 1:
return state_machine__8209__auto____1.call(this,state_11511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8209__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8209__auto____0;
state_machine__8209__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8209__auto____1;
return state_machine__8209__auto__;
})()
;})(switch__8208__auto__))
})();var state__8268__auto__ = (function (){var statearr_11527 = f__8267__auto__.call(null);(statearr_11527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8266__auto___11528);
return statearr_11527;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8268__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__8266__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8267__auto__ = (function (){var switch__8208__auto__ = (function (state_11686){var state_val_11687 = (state_11686[1]);if((state_val_11687 === 1))
{var state_11686__$1 = state_11686;var statearr_11688_11721 = state_11686__$1;(statearr_11688_11721[2] = null);
(statearr_11688_11721[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11687 === 2))
{var state_11686__$1 = state_11686;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11686__$1,4,in$);
} else
{if((state_val_11687 === 3))
{var inst_11684 = (state_11686[2]);var state_11686__$1 = state_11686;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11686__$1,inst_11684);
} else
{if((state_val_11687 === 4))
{var inst_11632 = (state_11686[5]);var inst_11632__$1 = (state_11686[2]);var inst_11633 = (inst_11632__$1 == null);var state_11686__$1 = (function (){var statearr_11689 = state_11686;(statearr_11689[5] = inst_11632__$1);
return statearr_11689;
})();if(cljs.core.truth_(inst_11633))
{var statearr_11690_11722 = state_11686__$1;(statearr_11690_11722[1] = 5);
} else
{var statearr_11691_11723 = state_11686__$1;(statearr_11691_11723[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11687 === 5))
{var inst_11635 = cljs.core.async.close_BANG_.call(null,out);var state_11686__$1 = state_11686;var statearr_11692_11724 = state_11686__$1;(statearr_11692_11724[2] = inst_11635);
(statearr_11692_11724[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11687 === 6))
{var inst_11632 = (state_11686[5]);var inst_11637 = f.call(null,inst_11632);var inst_11642 = cljs.core.seq.call(null,inst_11637);var inst_11643 = inst_11642;var inst_11644 = null;var inst_11645 = 0;var inst_11646 = 0;var state_11686__$1 = (function (){var statearr_11693 = state_11686;(statearr_11693[6] = inst_11643);
(statearr_11693[7] = inst_11644);
(statearr_11693[8] = inst_11645);
(statearr_11693[9] = inst_11646);
return statearr_11693;
})();var statearr_11694_11725 = state_11686__$1;(statearr_11694_11725[2] = null);
(statearr_11694_11725[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11687 === 7))
{var inst_11682 = (state_11686[2]);var state_11686__$1 = state_11686;var statearr_11695_11726 = state_11686__$1;(statearr_11695_11726[2] = inst_11682);
(statearr_11695_11726[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11687 === 8))
{var inst_11645 = (state_11686[8]);var inst_11646 = (state_11686[9]);var inst_11648 = (inst_11646 < inst_11645);var inst_11649 = inst_11648;var state_11686__$1 = state_11686;if(cljs.core.truth_(inst_11649))
{var statearr_11696_11727 = state_11686__$1;(statearr_11696_11727[1] = 10);
} else
{var statearr_11697_11728 = state_11686__$1;(statearr_11697_11728[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11687 === 9))
{var inst_11679 = (state_11686[2]);var state_11686__$1 = (function (){var statearr_11698 = state_11686;(statearr_11698[10] = inst_11679);
return statearr_11698;
})();var statearr_11699_11729 = state_11686__$1;(statearr_11699_11729[2] = null);
(statearr_11699_11729[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11687 === 10))
{var inst_11644 = (state_11686[7]);var inst_11646 = (state_11686[9]);var inst_11651 = cljs.core._nth.call(null,inst_11644,inst_11646);var state_11686__$1 = state_11686;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11686__$1,13,out,inst_11651);
} else
{if((state_val_11687 === 11))
{var inst_11657 = (state_11686[11]);var inst_11643 = (state_11686[6]);var inst_11657__$1 = cljs.core.seq.call(null,inst_11643);var state_11686__$1 = (function (){var statearr_11703 = state_11686;(statearr_11703[11] = inst_11657__$1);
return statearr_11703;
})();if(inst_11657__$1)
{var statearr_11704_11730 = state_11686__$1;(statearr_11704_11730[1] = 14);
} else
{var statearr_11705_11731 = state_11686__$1;(statearr_11705_11731[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11687 === 12))
{var inst_11677 = (state_11686[2]);var state_11686__$1 = state_11686;var statearr_11706_11732 = state_11686__$1;(statearr_11706_11732[2] = inst_11677);
(statearr_11706_11732[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11687 === 13))
{var inst_11643 = (state_11686[6]);var inst_11644 = (state_11686[7]);var inst_11645 = (state_11686[8]);var inst_11646 = (state_11686[9]);var inst_11653 = (state_11686[2]);var inst_11654 = (inst_11646 + 1);var tmp11700 = inst_11643;var tmp11701 = inst_11644;var tmp11702 = inst_11645;var inst_11643__$1 = tmp11700;var inst_11644__$1 = tmp11701;var inst_11645__$1 = tmp11702;var inst_11646__$1 = inst_11654;var state_11686__$1 = (function (){var statearr_11707 = state_11686;(statearr_11707[6] = inst_11643__$1);
(statearr_11707[12] = inst_11653);
(statearr_11707[7] = inst_11644__$1);
(statearr_11707[8] = inst_11645__$1);
(statearr_11707[9] = inst_11646__$1);
return statearr_11707;
})();var statearr_11708_11733 = state_11686__$1;(statearr_11708_11733[2] = null);
(statearr_11708_11733[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11687 === 14))
{var inst_11657 = (state_11686[11]);var inst_11659 = cljs.core.chunked_seq_QMARK_.call(null,inst_11657);var state_11686__$1 = state_11686;if(inst_11659)
{var statearr_11709_11734 = state_11686__$1;(statearr_11709_11734[1] = 17);
} else
{var statearr_11710_11735 = state_11686__$1;(statearr_11710_11735[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11687 === 15))
{var state_11686__$1 = state_11686;var statearr_11711_11736 = state_11686__$1;(statearr_11711_11736[2] = null);
(statearr_11711_11736[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11687 === 16))
{var inst_11675 = (state_11686[2]);var state_11686__$1 = state_11686;var statearr_11712_11737 = state_11686__$1;(statearr_11712_11737[2] = inst_11675);
(statearr_11712_11737[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11687 === 17))
{var inst_11657 = (state_11686[11]);var inst_11661 = cljs.core.chunk_first.call(null,inst_11657);var inst_11662 = cljs.core.chunk_rest.call(null,inst_11657);var inst_11663 = cljs.core.count.call(null,inst_11661);var inst_11643 = inst_11662;var inst_11644 = inst_11661;var inst_11645 = inst_11663;var inst_11646 = 0;var state_11686__$1 = (function (){var statearr_11713 = state_11686;(statearr_11713[6] = inst_11643);
(statearr_11713[7] = inst_11644);
(statearr_11713[8] = inst_11645);
(statearr_11713[9] = inst_11646);
return statearr_11713;
})();var statearr_11714_11738 = state_11686__$1;(statearr_11714_11738[2] = null);
(statearr_11714_11738[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11687 === 18))
{var inst_11657 = (state_11686[11]);var inst_11666 = cljs.core.first.call(null,inst_11657);var state_11686__$1 = state_11686;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11686__$1,20,out,inst_11666);
} else
{if((state_val_11687 === 19))
{var inst_11672 = (state_11686[2]);var state_11686__$1 = state_11686;var statearr_11715_11739 = state_11686__$1;(statearr_11715_11739[2] = inst_11672);
(statearr_11715_11739[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11687 === 20))
{var inst_11657 = (state_11686[11]);var inst_11668 = (state_11686[2]);var inst_11669 = cljs.core.next.call(null,inst_11657);var inst_11643 = inst_11669;var inst_11644 = null;var inst_11645 = 0;var inst_11646 = 0;var state_11686__$1 = (function (){var statearr_11716 = state_11686;(statearr_11716[6] = inst_11643);
(statearr_11716[7] = inst_11644);
(statearr_11716[8] = inst_11645);
(statearr_11716[9] = inst_11646);
(statearr_11716[13] = inst_11668);
return statearr_11716;
})();var statearr_11717_11740 = state_11686__$1;(statearr_11717_11740[2] = null);
(statearr_11717_11740[1] = 8);
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
});return ((function (switch__8208__auto__){
return (function() {
var state_machine__8209__auto__ = null;
var state_machine__8209__auto____0 = (function (){var statearr_11719 = (new Array(14));(statearr_11719[0] = state_machine__8209__auto__);
(statearr_11719[1] = 1);
return statearr_11719;
});
var state_machine__8209__auto____1 = (function (state_11686){while(true){
var result__8210__auto__ = switch__8208__auto__.call(null,state_11686);if(cljs.core.keyword_identical_QMARK_.call(null,result__8210__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8210__auto__;
}
break;
}
});
state_machine__8209__auto__ = function(state_11686){
switch(arguments.length){
case 0:
return state_machine__8209__auto____0.call(this);
case 1:
return state_machine__8209__auto____1.call(this,state_11686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8209__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8209__auto____0;
state_machine__8209__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8209__auto____1;
return state_machine__8209__auto__;
})()
;})(switch__8208__auto__))
})();var state__8268__auto__ = (function (){var statearr_11720 = f__8267__auto__.call(null);(statearr_11720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8266__auto__);
return statearr_11720;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8268__auto__);
}));
return c__8266__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__8266__auto___11813 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8267__auto__ = (function (){var switch__8208__auto__ = (function (state_11796){var state_val_11797 = (state_11796[1]);if((state_val_11797 === 1))
{var state_11796__$1 = state_11796;var statearr_11798_11814 = state_11796__$1;(statearr_11798_11814[2] = null);
(statearr_11798_11814[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11797 === 2))
{var state_11796__$1 = state_11796;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11796__$1,4,from);
} else
{if((state_val_11797 === 3))
{var inst_11794 = (state_11796[2]);var state_11796__$1 = state_11796;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11796__$1,inst_11794);
} else
{if((state_val_11797 === 4))
{var inst_11779 = (state_11796[5]);var inst_11779__$1 = (state_11796[2]);var inst_11780 = (inst_11779__$1 == null);var state_11796__$1 = (function (){var statearr_11799 = state_11796;(statearr_11799[5] = inst_11779__$1);
return statearr_11799;
})();if(cljs.core.truth_(inst_11780))
{var statearr_11800_11815 = state_11796__$1;(statearr_11800_11815[1] = 5);
} else
{var statearr_11801_11816 = state_11796__$1;(statearr_11801_11816[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11797 === 5))
{var state_11796__$1 = state_11796;if(cljs.core.truth_(close_QMARK_))
{var statearr_11802_11817 = state_11796__$1;(statearr_11802_11817[1] = 8);
} else
{var statearr_11803_11818 = state_11796__$1;(statearr_11803_11818[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11797 === 6))
{var inst_11779 = (state_11796[5]);var state_11796__$1 = state_11796;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11796__$1,11,to,inst_11779);
} else
{if((state_val_11797 === 7))
{var inst_11792 = (state_11796[2]);var state_11796__$1 = state_11796;var statearr_11804_11819 = state_11796__$1;(statearr_11804_11819[2] = inst_11792);
(statearr_11804_11819[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11797 === 8))
{var inst_11783 = cljs.core.async.close_BANG_.call(null,to);var state_11796__$1 = state_11796;var statearr_11805_11820 = state_11796__$1;(statearr_11805_11820[2] = inst_11783);
(statearr_11805_11820[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11797 === 9))
{var state_11796__$1 = state_11796;var statearr_11806_11821 = state_11796__$1;(statearr_11806_11821[2] = null);
(statearr_11806_11821[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11797 === 10))
{var inst_11786 = (state_11796[2]);var state_11796__$1 = state_11796;var statearr_11807_11822 = state_11796__$1;(statearr_11807_11822[2] = inst_11786);
(statearr_11807_11822[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11797 === 11))
{var inst_11789 = (state_11796[2]);var state_11796__$1 = (function (){var statearr_11808 = state_11796;(statearr_11808[6] = inst_11789);
return statearr_11808;
})();var statearr_11809_11823 = state_11796__$1;(statearr_11809_11823[2] = null);
(statearr_11809_11823[1] = 2);
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
});return ((function (switch__8208__auto__){
return (function() {
var state_machine__8209__auto__ = null;
var state_machine__8209__auto____0 = (function (){var statearr_11811 = (new Array(7));(statearr_11811[0] = state_machine__8209__auto__);
(statearr_11811[1] = 1);
return statearr_11811;
});
var state_machine__8209__auto____1 = (function (state_11796){while(true){
var result__8210__auto__ = switch__8208__auto__.call(null,state_11796);if(cljs.core.keyword_identical_QMARK_.call(null,result__8210__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8210__auto__;
}
break;
}
});
state_machine__8209__auto__ = function(state_11796){
switch(arguments.length){
case 0:
return state_machine__8209__auto____0.call(this);
case 1:
return state_machine__8209__auto____1.call(this,state_11796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8209__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8209__auto____0;
state_machine__8209__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8209__auto____1;
return state_machine__8209__auto__;
})()
;})(switch__8208__auto__))
})();var state__8268__auto__ = (function (){var statearr_11812 = f__8267__auto__.call(null);(statearr_11812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8266__auto___11813);
return statearr_11812;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8268__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__8266__auto___11902 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8267__auto__ = (function (){var switch__8208__auto__ = (function (state_11884){var state_val_11885 = (state_11884[1]);if((state_val_11885 === 1))
{var state_11884__$1 = state_11884;var statearr_11886_11903 = state_11884__$1;(statearr_11886_11903[2] = null);
(statearr_11886_11903[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11885 === 2))
{var state_11884__$1 = state_11884;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11884__$1,4,ch);
} else
{if((state_val_11885 === 3))
{var inst_11882 = (state_11884[2]);var state_11884__$1 = state_11884;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11884__$1,inst_11882);
} else
{if((state_val_11885 === 4))
{var inst_11865 = (state_11884[5]);var inst_11865__$1 = (state_11884[2]);var inst_11866 = (inst_11865__$1 == null);var state_11884__$1 = (function (){var statearr_11887 = state_11884;(statearr_11887[5] = inst_11865__$1);
return statearr_11887;
})();if(cljs.core.truth_(inst_11866))
{var statearr_11888_11904 = state_11884__$1;(statearr_11888_11904[1] = 5);
} else
{var statearr_11889_11905 = state_11884__$1;(statearr_11889_11905[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11885 === 5))
{var inst_11868 = cljs.core.async.close_BANG_.call(null,tc);var inst_11869 = cljs.core.async.close_BANG_.call(null,fc);var state_11884__$1 = (function (){var statearr_11890 = state_11884;(statearr_11890[6] = inst_11868);
return statearr_11890;
})();var statearr_11891_11906 = state_11884__$1;(statearr_11891_11906[2] = inst_11869);
(statearr_11891_11906[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11885 === 6))
{var inst_11865 = (state_11884[5]);var inst_11871 = p.call(null,inst_11865);var state_11884__$1 = state_11884;if(cljs.core.truth_(inst_11871))
{var statearr_11892_11907 = state_11884__$1;(statearr_11892_11907[1] = 9);
} else
{var statearr_11893_11908 = state_11884__$1;(statearr_11893_11908[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11885 === 7))
{var inst_11880 = (state_11884[2]);var state_11884__$1 = state_11884;var statearr_11894_11909 = state_11884__$1;(statearr_11894_11909[2] = inst_11880);
(statearr_11894_11909[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11885 === 8))
{var inst_11877 = (state_11884[2]);var state_11884__$1 = (function (){var statearr_11895 = state_11884;(statearr_11895[7] = inst_11877);
return statearr_11895;
})();var statearr_11896_11910 = state_11884__$1;(statearr_11896_11910[2] = null);
(statearr_11896_11910[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11885 === 9))
{var state_11884__$1 = state_11884;var statearr_11897_11911 = state_11884__$1;(statearr_11897_11911[2] = tc);
(statearr_11897_11911[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11885 === 10))
{var state_11884__$1 = state_11884;var statearr_11898_11912 = state_11884__$1;(statearr_11898_11912[2] = fc);
(statearr_11898_11912[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11885 === 11))
{var inst_11865 = (state_11884[5]);var inst_11875 = (state_11884[2]);var state_11884__$1 = state_11884;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11884__$1,8,inst_11875,inst_11865);
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
});return ((function (switch__8208__auto__){
return (function() {
var state_machine__8209__auto__ = null;
var state_machine__8209__auto____0 = (function (){var statearr_11900 = (new Array(8));(statearr_11900[0] = state_machine__8209__auto__);
(statearr_11900[1] = 1);
return statearr_11900;
});
var state_machine__8209__auto____1 = (function (state_11884){while(true){
var result__8210__auto__ = switch__8208__auto__.call(null,state_11884);if(cljs.core.keyword_identical_QMARK_.call(null,result__8210__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8210__auto__;
}
break;
}
});
state_machine__8209__auto__ = function(state_11884){
switch(arguments.length){
case 0:
return state_machine__8209__auto____0.call(this);
case 1:
return state_machine__8209__auto____1.call(this,state_11884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8209__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8209__auto____0;
state_machine__8209__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8209__auto____1;
return state_machine__8209__auto__;
})()
;})(switch__8208__auto__))
})();var state__8268__auto__ = (function (){var statearr_11901 = f__8267__auto__.call(null);(statearr_11901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8266__auto___11902);
return statearr_11901;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8268__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__8266__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8267__auto__ = (function (){var switch__8208__auto__ = (function (state_11955){var state_val_11956 = (state_11955[1]);if((state_val_11956 === 7))
{var inst_11951 = (state_11955[2]);var state_11955__$1 = state_11955;var statearr_11957_11969 = state_11955__$1;(statearr_11957_11969[2] = inst_11951);
(statearr_11957_11969[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11956 === 6))
{var inst_11944 = (state_11955[5]);var inst_11941 = (state_11955[6]);var inst_11948 = f.call(null,inst_11941,inst_11944);var inst_11941__$1 = inst_11948;var state_11955__$1 = (function (){var statearr_11958 = state_11955;(statearr_11958[6] = inst_11941__$1);
return statearr_11958;
})();var statearr_11959_11970 = state_11955__$1;(statearr_11959_11970[2] = null);
(statearr_11959_11970[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11956 === 5))
{var inst_11941 = (state_11955[6]);var state_11955__$1 = state_11955;var statearr_11960_11971 = state_11955__$1;(statearr_11960_11971[2] = inst_11941);
(statearr_11960_11971[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11956 === 4))
{var inst_11944 = (state_11955[5]);var inst_11944__$1 = (state_11955[2]);var inst_11945 = (inst_11944__$1 == null);var state_11955__$1 = (function (){var statearr_11961 = state_11955;(statearr_11961[5] = inst_11944__$1);
return statearr_11961;
})();if(cljs.core.truth_(inst_11945))
{var statearr_11962_11972 = state_11955__$1;(statearr_11962_11972[1] = 5);
} else
{var statearr_11963_11973 = state_11955__$1;(statearr_11963_11973[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11956 === 3))
{var inst_11953 = (state_11955[2]);var state_11955__$1 = state_11955;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11955__$1,inst_11953);
} else
{if((state_val_11956 === 2))
{var state_11955__$1 = state_11955;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11955__$1,4,ch);
} else
{if((state_val_11956 === 1))
{var inst_11941 = init;var state_11955__$1 = (function (){var statearr_11964 = state_11955;(statearr_11964[6] = inst_11941);
return statearr_11964;
})();var statearr_11965_11974 = state_11955__$1;(statearr_11965_11974[2] = null);
(statearr_11965_11974[1] = 2);
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
});return ((function (switch__8208__auto__){
return (function() {
var state_machine__8209__auto__ = null;
var state_machine__8209__auto____0 = (function (){var statearr_11967 = (new Array(7));(statearr_11967[0] = state_machine__8209__auto__);
(statearr_11967[1] = 1);
return statearr_11967;
});
var state_machine__8209__auto____1 = (function (state_11955){while(true){
var result__8210__auto__ = switch__8208__auto__.call(null,state_11955);if(cljs.core.keyword_identical_QMARK_.call(null,result__8210__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8210__auto__;
}
break;
}
});
state_machine__8209__auto__ = function(state_11955){
switch(arguments.length){
case 0:
return state_machine__8209__auto____0.call(this);
case 1:
return state_machine__8209__auto____1.call(this,state_11955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8209__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8209__auto____0;
state_machine__8209__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8209__auto____1;
return state_machine__8209__auto__;
})()
;})(switch__8208__auto__))
})();var state__8268__auto__ = (function (){var statearr_11968 = f__8267__auto__.call(null);(statearr_11968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8266__auto__);
return statearr_11968;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8268__auto__);
}));
return c__8266__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__8266__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8267__auto__ = (function (){var switch__8208__auto__ = (function (state_12032){var state_val_12033 = (state_12032[1]);if((state_val_12033 === 1))
{var inst_12012 = cljs.core.seq.call(null,coll);var inst_12013 = inst_12012;var state_12032__$1 = (function (){var statearr_12034 = state_12032;(statearr_12034[5] = inst_12013);
return statearr_12034;
})();var statearr_12035_12049 = state_12032__$1;(statearr_12035_12049[2] = null);
(statearr_12035_12049[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12033 === 2))
{var inst_12013 = (state_12032[5]);var state_12032__$1 = state_12032;if(cljs.core.truth_(inst_12013))
{var statearr_12036_12050 = state_12032__$1;(statearr_12036_12050[1] = 4);
} else
{var statearr_12037_12051 = state_12032__$1;(statearr_12037_12051[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12033 === 3))
{var inst_12030 = (state_12032[2]);var state_12032__$1 = state_12032;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12032__$1,inst_12030);
} else
{if((state_val_12033 === 4))
{var inst_12013 = (state_12032[5]);var inst_12016 = cljs.core.first.call(null,inst_12013);var state_12032__$1 = state_12032;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12032__$1,7,ch,inst_12016);
} else
{if((state_val_12033 === 5))
{var state_12032__$1 = state_12032;if(cljs.core.truth_(close_QMARK_))
{var statearr_12038_12052 = state_12032__$1;(statearr_12038_12052[1] = 8);
} else
{var statearr_12039_12053 = state_12032__$1;(statearr_12039_12053[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12033 === 6))
{var inst_12028 = (state_12032[2]);var state_12032__$1 = state_12032;var statearr_12040_12054 = state_12032__$1;(statearr_12040_12054[2] = inst_12028);
(statearr_12040_12054[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12033 === 7))
{var inst_12013 = (state_12032[5]);var inst_12018 = (state_12032[2]);var inst_12019 = cljs.core.next.call(null,inst_12013);var inst_12013__$1 = inst_12019;var state_12032__$1 = (function (){var statearr_12041 = state_12032;(statearr_12041[6] = inst_12018);
(statearr_12041[5] = inst_12013__$1);
return statearr_12041;
})();var statearr_12042_12055 = state_12032__$1;(statearr_12042_12055[2] = null);
(statearr_12042_12055[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12033 === 8))
{var inst_12023 = cljs.core.async.close_BANG_.call(null,ch);var state_12032__$1 = state_12032;var statearr_12043_12056 = state_12032__$1;(statearr_12043_12056[2] = inst_12023);
(statearr_12043_12056[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12033 === 9))
{var state_12032__$1 = state_12032;var statearr_12044_12057 = state_12032__$1;(statearr_12044_12057[2] = null);
(statearr_12044_12057[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12033 === 10))
{var inst_12026 = (state_12032[2]);var state_12032__$1 = state_12032;var statearr_12045_12058 = state_12032__$1;(statearr_12045_12058[2] = inst_12026);
(statearr_12045_12058[1] = 6);
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
});return ((function (switch__8208__auto__){
return (function() {
var state_machine__8209__auto__ = null;
var state_machine__8209__auto____0 = (function (){var statearr_12047 = (new Array(7));(statearr_12047[0] = state_machine__8209__auto__);
(statearr_12047[1] = 1);
return statearr_12047;
});
var state_machine__8209__auto____1 = (function (state_12032){while(true){
var result__8210__auto__ = switch__8208__auto__.call(null,state_12032);if(cljs.core.keyword_identical_QMARK_.call(null,result__8210__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8210__auto__;
}
break;
}
});
state_machine__8209__auto__ = function(state_12032){
switch(arguments.length){
case 0:
return state_machine__8209__auto____0.call(this);
case 1:
return state_machine__8209__auto____1.call(this,state_12032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8209__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8209__auto____0;
state_machine__8209__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8209__auto____1;
return state_machine__8209__auto__;
})()
;})(switch__8208__auto__))
})();var state__8268__auto__ = (function (){var statearr_12048 = f__8267__auto__.call(null);(statearr_12048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8266__auto__);
return statearr_12048;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8268__auto__);
}));
return c__8266__auto__;
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
{var x__6809__auto__ = (((_ == null))?null:_);return (function (){var or__3943__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6809__auto__)]);if(or__3943__auto__)
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
{var x__6809__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6809__auto__)]);if(or__3943__auto__)
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
{var x__6809__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6809__auto__)]);if(or__3943__auto__)
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
{var x__6809__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6809__auto__)]);if(or__3943__auto__)
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12271 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12271');

/**
* @constructor
*/
cljs.core.async.t12271 = (function (cs,ch,mult,meta12272){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12272 = meta12272;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12271.cljs$lang$type = true;
cljs.core.async.t12271.cljs$lang$ctorStr = "cljs.core.async/t12271";
cljs.core.async.t12271.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6738__auto__,writer__6739__auto__,opt__6740__auto__){return cljs.core._write.call(null,writer__6739__auto__,"cljs.core.async/t12271");
});})(cs))
;
cljs.core.async.t12271.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12271.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12271.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12271.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12271.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12271.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
return self__.ch;
});})(cs))
;
cljs.core.async.t12271.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12273){var self__ = this;
return self__.meta12272;
});})(cs))
;
cljs.core.async.t12271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12273,meta12272__$1){var self__ = this;
return (new cljs.core.async.t12271(self__.cs,self__.ch,self__.mult,meta12272__$1));
});})(cs))
;
cljs.core.async.__GT_t12271 = ((function (cs){
return (function __GT_t12271(cs__$1,ch__$1,mult__$1,meta12272){return (new cljs.core.async.t12271(cs__$1,ch__$1,mult__$1,meta12272));
});})(cs))
;
}
return (new cljs.core.async.t12271(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__8266__auto___12483 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8267__auto__ = (function (){var switch__8208__auto__ = (function (state_12401){var state_val_12402 = (state_12401[1]);if((state_val_12402 === 32))
{try{var inst_12352 = (state_12401[5]);var inst_12276 = (state_12401[6]);var inst_12358 = cljs.core.async.put_BANG_.call(null,inst_12352,inst_12276,done);var state_12401__$1 = state_12401;var statearr_12405_12484 = state_12401__$1;(statearr_12405_12484[2] = inst_12358);
(statearr_12405_12484[1] = 30);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e12403){if((e12403 instanceof Object))
{var ex__8202__auto__ = e12403;var statearr_12404_12485 = state_12401;(statearr_12404_12485[1] = 31);
(statearr_12404_12485[2] = ex__8202__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12403;
} else
{return null;
}
}
}} else
{if((state_val_12402 === 1))
{var state_12401__$1 = state_12401;var statearr_12406_12486 = state_12401__$1;(statearr_12406_12486[2] = null);
(statearr_12406_12486[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12402 === 33))
{var inst_12364 = (state_12401[7]);var inst_12366 = cljs.core.chunked_seq_QMARK_.call(null,inst_12364);var state_12401__$1 = state_12401;if(inst_12366)
{var statearr_12407_12487 = state_12401__$1;(statearr_12407_12487[1] = 36);
} else
{var statearr_12408_12488 = state_12401__$1;(statearr_12408_12488[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12402 === 2))
{var state_12401__$1 = state_12401;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12401__$1,4,ch);
} else
{if((state_val_12402 === 34))
{var state_12401__$1 = state_12401;var statearr_12409_12489 = state_12401__$1;(statearr_12409_12489[2] = null);
(statearr_12409_12489[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12402 === 3))
{var inst_12399 = (state_12401[2]);var state_12401__$1 = state_12401;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12401__$1,inst_12399);
} else
{if((state_val_12402 === 35))
{var inst_12388 = (state_12401[2]);var state_12401__$1 = state_12401;var statearr_12410_12490 = state_12401__$1;(statearr_12410_12490[2] = inst_12388);
(statearr_12410_12490[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12402 === 4))
{var inst_12276 = (state_12401[6]);var inst_12276__$1 = (state_12401[2]);var inst_12277 = (inst_12276__$1 == null);var state_12401__$1 = (function (){var statearr_12411 = state_12401;(statearr_12411[6] = inst_12276__$1);
return statearr_12411;
})();if(cljs.core.truth_(inst_12277))
{var statearr_12412_12491 = state_12401__$1;(statearr_12412_12491[1] = 5);
} else
{var statearr_12413_12492 = state_12401__$1;(statearr_12413_12492[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12402 === 36))
{var inst_12364 = (state_12401[7]);var inst_12368 = cljs.core.chunk_first.call(null,inst_12364);var inst_12369 = cljs.core.chunk_rest.call(null,inst_12364);var inst_12370 = cljs.core.count.call(null,inst_12368);var inst_12344 = inst_12369;var inst_12345 = inst_12368;var inst_12346 = inst_12370;var inst_12347 = 0;var state_12401__$1 = (function (){var statearr_12414 = state_12401;(statearr_12414[8] = inst_12347);
(statearr_12414[9] = inst_12346);
(statearr_12414[10] = inst_12345);
(statearr_12414[11] = inst_12344);
return statearr_12414;
})();var statearr_12415_12493 = state_12401__$1;(statearr_12415_12493[2] = null);
(statearr_12415_12493[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12402 === 5))
{var inst_12283 = cljs.core.deref.call(null,cs);var inst_12284 = cljs.core.seq.call(null,inst_12283);var inst_12285 = inst_12284;var inst_12286 = null;var inst_12287 = 0;var inst_12288 = 0;var state_12401__$1 = (function (){var statearr_12416 = state_12401;(statearr_12416[12] = inst_12286);
(statearr_12416[13] = inst_12287);
(statearr_12416[14] = inst_12285);
(statearr_12416[15] = inst_12288);
return statearr_12416;
})();var statearr_12417_12494 = state_12401__$1;(statearr_12417_12494[2] = null);
(statearr_12417_12494[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12402 === 37))
{var inst_12364 = (state_12401[7]);var inst_12373 = cljs.core.first.call(null,inst_12364);var state_12401__$1 = (function (){var statearr_12418 = state_12401;(statearr_12418[16] = inst_12373);
return statearr_12418;
})();var statearr_12419_12495 = state_12401__$1;(statearr_12419_12495[2] = null);
(statearr_12419_12495[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12402 === 6))
{var inst_12335 = cljs.core.deref.call(null,cs);var inst_12336 = cljs.core.keys.call(null,inst_12335);var inst_12337 = cljs.core.count.call(null,inst_12336);var inst_12338 = cljs.core.reset_BANG_.call(null,dctr,inst_12337);var inst_12343 = cljs.core.seq.call(null,inst_12336);var inst_12344 = inst_12343;var inst_12345 = null;var inst_12346 = 0;var inst_12347 = 0;var state_12401__$1 = (function (){var statearr_12420 = state_12401;(statearr_12420[8] = inst_12347);
(statearr_12420[9] = inst_12346);
(statearr_12420[10] = inst_12345);
(statearr_12420[17] = inst_12338);
(statearr_12420[11] = inst_12344);
return statearr_12420;
})();var statearr_12421_12496 = state_12401__$1;(statearr_12421_12496[2] = null);
(statearr_12421_12496[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12402 === 38))
{var inst_12385 = (state_12401[2]);var state_12401__$1 = state_12401;var statearr_12422_12497 = state_12401__$1;(statearr_12422_12497[2] = inst_12385);
(statearr_12422_12497[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12402 === 7))
{var inst_12397 = (state_12401[2]);var state_12401__$1 = state_12401;var statearr_12423_12498 = state_12401__$1;(statearr_12423_12498[2] = inst_12397);
(statearr_12423_12498[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12402 === 39))
{var inst_12364 = (state_12401[7]);var inst_12381 = (state_12401[2]);var inst_12382 = cljs.core.next.call(null,inst_12364);var inst_12344 = inst_12382;var inst_12345 = null;var inst_12346 = 0;var inst_12347 = 0;var state_12401__$1 = (function (){var statearr_12424 = state_12401;(statearr_12424[8] = inst_12347);
(statearr_12424[18] = inst_12381);
(statearr_12424[9] = inst_12346);
(statearr_12424[10] = inst_12345);
(statearr_12424[11] = inst_12344);
return statearr_12424;
})();var statearr_12425_12499 = state_12401__$1;(statearr_12425_12499[2] = null);
(statearr_12425_12499[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12402 === 8))
{var inst_12287 = (state_12401[13]);var inst_12288 = (state_12401[15]);var inst_12290 = (inst_12288 < inst_12287);var inst_12291 = inst_12290;var state_12401__$1 = state_12401;if(cljs.core.truth_(inst_12291))
{var statearr_12426_12500 = state_12401__$1;(statearr_12426_12500[1] = 10);
} else
{var statearr_12427_12501 = state_12401__$1;(statearr_12427_12501[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12402 === 40))
{var inst_12373 = (state_12401[16]);var inst_12374 = (state_12401[2]);var inst_12375 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12376 = cljs.core.async.untap_STAR_.call(null,m,inst_12373);var state_12401__$1 = (function (){var statearr_12428 = state_12401;(statearr_12428[19] = inst_12374);
(statearr_12428[20] = inst_12375);
return statearr_12428;
})();var statearr_12429_12502 = state_12401__$1;(statearr_12429_12502[2] = inst_12376);
(statearr_12429_12502[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12402 === 9))
{var inst_12333 = (state_12401[2]);var state_12401__$1 = state_12401;var statearr_12430_12503 = state_12401__$1;(statearr_12430_12503[2] = inst_12333);
(statearr_12430_12503[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12402 === 41))
{try{var inst_12276 = (state_12401[6]);var inst_12373 = (state_12401[16]);var inst_12379 = cljs.core.async.put_BANG_.call(null,inst_12373,inst_12276,done);var state_12401__$1 = state_12401;var statearr_12433_12504 = state_12401__$1;(statearr_12433_12504[2] = inst_12379);
(statearr_12433_12504[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e12431){if((e12431 instanceof Object))
{var ex__8202__auto__ = e12431;var statearr_12432_12505 = state_12401;(statearr_12432_12505[1] = 40);
(statearr_12432_12505[2] = ex__8202__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12431;
} else
{return null;
}
}
}} else
{if((state_val_12402 === 10))
{var inst_12286 = (state_12401[12]);var inst_12288 = (state_12401[15]);var inst_12294 = cljs.core._nth.call(null,inst_12286,inst_12288);var inst_12295 = cljs.core.nth.call(null,inst_12294,0,null);var inst_12296 = cljs.core.nth.call(null,inst_12294,1,null);var state_12401__$1 = (function (){var statearr_12434 = state_12401;(statearr_12434[21] = inst_12295);
return statearr_12434;
})();if(cljs.core.truth_(inst_12296))
{var statearr_12435_12506 = state_12401__$1;(statearr_12435_12506[1] = 13);
} else
{var statearr_12436_12507 = state_12401__$1;(statearr_12436_12507[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12402 === 42))
{var inst_12394 = (state_12401[2]);var state_12401__$1 = (function (){var statearr_12437 = state_12401;(statearr_12437[22] = inst_12394);
return statearr_12437;
})();var statearr_12438_12508 = state_12401__$1;(statearr_12438_12508[2] = null);
(statearr_12438_12508[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12402 === 11))
{var inst_12305 = (state_12401[23]);var inst_12285 = (state_12401[14]);var inst_12305__$1 = cljs.core.seq.call(null,inst_12285);var state_12401__$1 = (function (){var statearr_12439 = state_12401;(statearr_12439[23] = inst_12305__$1);
return statearr_12439;
})();if(inst_12305__$1)
{var statearr_12440_12509 = state_12401__$1;(statearr_12440_12509[1] = 16);
} else
{var statearr_12441_12510 = state_12401__$1;(statearr_12441_12510[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12402 === 12))
{var inst_12331 = (state_12401[2]);var state_12401__$1 = state_12401;var statearr_12442_12511 = state_12401__$1;(statearr_12442_12511[2] = inst_12331);
(statearr_12442_12511[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12402 === 13))
{var inst_12295 = (state_12401[21]);var inst_12298 = cljs.core.async.close_BANG_.call(null,inst_12295);var state_12401__$1 = state_12401;var statearr_12446_12512 = state_12401__$1;(statearr_12446_12512[2] = inst_12298);
(statearr_12446_12512[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12402 === 14))
{var state_12401__$1 = state_12401;var statearr_12447_12513 = state_12401__$1;(statearr_12447_12513[2] = null);
(statearr_12447_12513[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12402 === 15))
{var inst_12286 = (state_12401[12]);var inst_12287 = (state_12401[13]);var inst_12285 = (state_12401[14]);var inst_12288 = (state_12401[15]);var inst_12301 = (state_12401[2]);var inst_12302 = (inst_12288 + 1);var tmp12443 = inst_12286;var tmp12444 = inst_12287;var tmp12445 = inst_12285;var inst_12285__$1 = tmp12445;var inst_12286__$1 = tmp12443;var inst_12287__$1 = tmp12444;var inst_12288__$1 = inst_12302;var state_12401__$1 = (function (){var statearr_12448 = state_12401;(statearr_12448[24] = inst_12301);
(statearr_12448[12] = inst_12286__$1);
(statearr_12448[13] = inst_12287__$1);
(statearr_12448[14] = inst_12285__$1);
(statearr_12448[15] = inst_12288__$1);
return statearr_12448;
})();var statearr_12449_12514 = state_12401__$1;(statearr_12449_12514[2] = null);
(statearr_12449_12514[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12402 === 16))
{var inst_12305 = (state_12401[23]);var inst_12307 = cljs.core.chunked_seq_QMARK_.call(null,inst_12305);var state_12401__$1 = state_12401;if(inst_12307)
{var statearr_12450_12515 = state_12401__$1;(statearr_12450_12515[1] = 19);
} else
{var statearr_12451_12516 = state_12401__$1;(statearr_12451_12516[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12402 === 17))
{var state_12401__$1 = state_12401;var statearr_12452_12517 = state_12401__$1;(statearr_12452_12517[2] = null);
(statearr_12452_12517[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12402 === 18))
{var inst_12329 = (state_12401[2]);var state_12401__$1 = state_12401;var statearr_12453_12518 = state_12401__$1;(statearr_12453_12518[2] = inst_12329);
(statearr_12453_12518[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12402 === 19))
{var inst_12305 = (state_12401[23]);var inst_12309 = cljs.core.chunk_first.call(null,inst_12305);var inst_12310 = cljs.core.chunk_rest.call(null,inst_12305);var inst_12311 = cljs.core.count.call(null,inst_12309);var inst_12285 = inst_12310;var inst_12286 = inst_12309;var inst_12287 = inst_12311;var inst_12288 = 0;var state_12401__$1 = (function (){var statearr_12454 = state_12401;(statearr_12454[12] = inst_12286);
(statearr_12454[13] = inst_12287);
(statearr_12454[14] = inst_12285);
(statearr_12454[15] = inst_12288);
return statearr_12454;
})();var statearr_12455_12519 = state_12401__$1;(statearr_12455_12519[2] = null);
(statearr_12455_12519[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12402 === 20))
{var inst_12305 = (state_12401[23]);var inst_12315 = cljs.core.first.call(null,inst_12305);var inst_12316 = cljs.core.nth.call(null,inst_12315,0,null);var inst_12317 = cljs.core.nth.call(null,inst_12315,1,null);var state_12401__$1 = (function (){var statearr_12456 = state_12401;(statearr_12456[25] = inst_12316);
return statearr_12456;
})();if(cljs.core.truth_(inst_12317))
{var statearr_12457_12520 = state_12401__$1;(statearr_12457_12520[1] = 22);
} else
{var statearr_12458_12521 = state_12401__$1;(statearr_12458_12521[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12402 === 21))
{var inst_12326 = (state_12401[2]);var state_12401__$1 = state_12401;var statearr_12459_12522 = state_12401__$1;(statearr_12459_12522[2] = inst_12326);
(statearr_12459_12522[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12402 === 22))
{var inst_12316 = (state_12401[25]);var inst_12319 = cljs.core.async.close_BANG_.call(null,inst_12316);var state_12401__$1 = state_12401;var statearr_12460_12523 = state_12401__$1;(statearr_12460_12523[2] = inst_12319);
(statearr_12460_12523[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12402 === 23))
{var state_12401__$1 = state_12401;var statearr_12461_12524 = state_12401__$1;(statearr_12461_12524[2] = null);
(statearr_12461_12524[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12402 === 24))
{var inst_12305 = (state_12401[23]);var inst_12322 = (state_12401[2]);var inst_12323 = cljs.core.next.call(null,inst_12305);var inst_12285 = inst_12323;var inst_12286 = null;var inst_12287 = 0;var inst_12288 = 0;var state_12401__$1 = (function (){var statearr_12462 = state_12401;(statearr_12462[12] = inst_12286);
(statearr_12462[13] = inst_12287);
(statearr_12462[14] = inst_12285);
(statearr_12462[26] = inst_12322);
(statearr_12462[15] = inst_12288);
return statearr_12462;
})();var statearr_12463_12525 = state_12401__$1;(statearr_12463_12525[2] = null);
(statearr_12463_12525[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12402 === 25))
{var inst_12347 = (state_12401[8]);var inst_12346 = (state_12401[9]);var inst_12349 = (inst_12347 < inst_12346);var inst_12350 = inst_12349;var state_12401__$1 = state_12401;if(cljs.core.truth_(inst_12350))
{var statearr_12464_12526 = state_12401__$1;(statearr_12464_12526[1] = 27);
} else
{var statearr_12465_12527 = state_12401__$1;(statearr_12465_12527[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12402 === 26))
{var inst_12392 = (state_12401[2]);var state_12401__$1 = (function (){var statearr_12466 = state_12401;(statearr_12466[27] = inst_12392);
return statearr_12466;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12401__$1,42,dchan);
} else
{if((state_val_12402 === 27))
{var inst_12347 = (state_12401[8]);var inst_12345 = (state_12401[10]);var inst_12352 = cljs.core._nth.call(null,inst_12345,inst_12347);var state_12401__$1 = (function (){var statearr_12467 = state_12401;(statearr_12467[5] = inst_12352);
return statearr_12467;
})();var statearr_12468_12528 = state_12401__$1;(statearr_12468_12528[2] = null);
(statearr_12468_12528[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12402 === 28))
{var inst_12344 = (state_12401[11]);var inst_12364 = (state_12401[7]);var inst_12364__$1 = cljs.core.seq.call(null,inst_12344);var state_12401__$1 = (function (){var statearr_12472 = state_12401;(statearr_12472[7] = inst_12364__$1);
return statearr_12472;
})();if(inst_12364__$1)
{var statearr_12473_12529 = state_12401__$1;(statearr_12473_12529[1] = 33);
} else
{var statearr_12474_12530 = state_12401__$1;(statearr_12474_12530[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12402 === 29))
{var inst_12390 = (state_12401[2]);var state_12401__$1 = state_12401;var statearr_12475_12531 = state_12401__$1;(statearr_12475_12531[2] = inst_12390);
(statearr_12475_12531[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12402 === 30))
{var inst_12347 = (state_12401[8]);var inst_12346 = (state_12401[9]);var inst_12345 = (state_12401[10]);var inst_12344 = (state_12401[11]);var inst_12360 = (state_12401[2]);var inst_12361 = (inst_12347 + 1);var tmp12469 = inst_12346;var tmp12470 = inst_12345;var tmp12471 = inst_12344;var inst_12344__$1 = tmp12471;var inst_12345__$1 = tmp12470;var inst_12346__$1 = tmp12469;var inst_12347__$1 = inst_12361;var state_12401__$1 = (function (){var statearr_12476 = state_12401;(statearr_12476[8] = inst_12347__$1);
(statearr_12476[9] = inst_12346__$1);
(statearr_12476[10] = inst_12345__$1);
(statearr_12476[11] = inst_12344__$1);
(statearr_12476[28] = inst_12360);
return statearr_12476;
})();var statearr_12477_12532 = state_12401__$1;(statearr_12477_12532[2] = null);
(statearr_12477_12532[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12402 === 31))
{var inst_12352 = (state_12401[5]);var inst_12353 = (state_12401[2]);var inst_12354 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12355 = cljs.core.async.untap_STAR_.call(null,m,inst_12352);var state_12401__$1 = (function (){var statearr_12478 = state_12401;(statearr_12478[29] = inst_12354);
(statearr_12478[30] = inst_12353);
return statearr_12478;
})();var statearr_12479_12533 = state_12401__$1;(statearr_12479_12533[2] = inst_12355);
(statearr_12479_12533[1] = 30);
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
});return ((function (switch__8208__auto__){
return (function() {
var state_machine__8209__auto__ = null;
var state_machine__8209__auto____0 = (function (){var statearr_12481 = (new Array(31));(statearr_12481[0] = state_machine__8209__auto__);
(statearr_12481[1] = 1);
return statearr_12481;
});
var state_machine__8209__auto____1 = (function (state_12401){while(true){
var result__8210__auto__ = switch__8208__auto__.call(null,state_12401);if(cljs.core.keyword_identical_QMARK_.call(null,result__8210__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8210__auto__;
}
break;
}
});
state_machine__8209__auto__ = function(state_12401){
switch(arguments.length){
case 0:
return state_machine__8209__auto____0.call(this);
case 1:
return state_machine__8209__auto____1.call(this,state_12401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8209__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8209__auto____0;
state_machine__8209__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8209__auto____1;
return state_machine__8209__auto__;
})()
;})(switch__8208__auto__))
})();var state__8268__auto__ = (function (){var statearr_12482 = f__8267__auto__.call(null);(statearr_12482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8266__auto___12483);
return statearr_12482;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8268__auto__);
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
{var x__6809__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6809__auto__)]);if(or__3943__auto__)
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
{var x__6809__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6809__auto__)]);if(or__3943__auto__)
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
{var x__6809__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6809__auto__)]);if(or__3943__auto__)
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
{var x__6809__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6809__auto__)]);if(or__3943__auto__)
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
{var x__6809__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6809__auto__)]);if(or__3943__auto__)
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
;var m = (function (){if(typeof cljs.core.async.t12654 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12654');

/**
* @constructor
*/
cljs.core.async.t12654 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta12655){
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
this.meta12655 = meta12655;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12654.cljs$lang$type = true;
cljs.core.async.t12654.cljs$lang$ctorStr = "cljs.core.async/t12654";
cljs.core.async.t12654.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6738__auto__,writer__6739__auto__,opt__6740__auto__){return cljs.core._write.call(null,writer__6739__auto__,"cljs.core.async/t12654");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12654.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12654.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12654.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12654.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12654.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12654.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12654.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12654.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12654.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12656){var self__ = this;
return self__.meta12655;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12656,meta12655__$1){var self__ = this;
return (new cljs.core.async.t12654(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta12655__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12654 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12654(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12655){return (new cljs.core.async.t12654(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12655));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12654(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__8266__auto___12774 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8267__auto__ = (function (){var switch__8208__auto__ = (function (state_12727){var state_val_12728 = (state_12727[1]);if((state_val_12728 === 1))
{var inst_12660 = (state_12727[5]);var inst_12660__$1 = calc_state.call(null);var inst_12661 = cljs.core.seq_QMARK_.call(null,inst_12660__$1);var state_12727__$1 = (function (){var statearr_12729 = state_12727;(statearr_12729[5] = inst_12660__$1);
return statearr_12729;
})();if(inst_12661)
{var statearr_12730_12775 = state_12727__$1;(statearr_12730_12775[1] = 2);
} else
{var statearr_12731_12776 = state_12727__$1;(statearr_12731_12776[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12728 === 2))
{var inst_12660 = (state_12727[5]);var inst_12663 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12660);var state_12727__$1 = state_12727;var statearr_12732_12777 = state_12727__$1;(statearr_12732_12777[2] = inst_12663);
(statearr_12732_12777[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12728 === 3))
{var inst_12660 = (state_12727[5]);var state_12727__$1 = state_12727;var statearr_12733_12778 = state_12727__$1;(statearr_12733_12778[2] = inst_12660);
(statearr_12733_12778[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12728 === 4))
{var inst_12660 = (state_12727[5]);var inst_12666 = (state_12727[2]);var inst_12667 = cljs.core.get.call(null,inst_12666,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12668 = cljs.core.get.call(null,inst_12666,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12669 = cljs.core.get.call(null,inst_12666,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12670 = inst_12660;var state_12727__$1 = (function (){var statearr_12734 = state_12727;(statearr_12734[6] = inst_12667);
(statearr_12734[7] = inst_12668);
(statearr_12734[8] = inst_12669);
(statearr_12734[9] = inst_12670);
return statearr_12734;
})();var statearr_12735_12779 = state_12727__$1;(statearr_12735_12779[2] = null);
(statearr_12735_12779[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12728 === 5))
{var inst_12670 = (state_12727[9]);var inst_12673 = cljs.core.seq_QMARK_.call(null,inst_12670);var state_12727__$1 = state_12727;if(inst_12673)
{var statearr_12736_12780 = state_12727__$1;(statearr_12736_12780[1] = 7);
} else
{var statearr_12737_12781 = state_12727__$1;(statearr_12737_12781[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12728 === 6))
{var inst_12725 = (state_12727[2]);var state_12727__$1 = state_12727;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12727__$1,inst_12725);
} else
{if((state_val_12728 === 7))
{var inst_12670 = (state_12727[9]);var inst_12675 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12670);var state_12727__$1 = state_12727;var statearr_12738_12782 = state_12727__$1;(statearr_12738_12782[2] = inst_12675);
(statearr_12738_12782[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12728 === 8))
{var inst_12670 = (state_12727[9]);var state_12727__$1 = state_12727;var statearr_12739_12783 = state_12727__$1;(statearr_12739_12783[2] = inst_12670);
(statearr_12739_12783[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12728 === 9))
{var inst_12678 = (state_12727[10]);var inst_12678__$1 = (state_12727[2]);var inst_12679 = cljs.core.get.call(null,inst_12678__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12680 = cljs.core.get.call(null,inst_12678__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12681 = cljs.core.get.call(null,inst_12678__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12727__$1 = (function (){var statearr_12740 = state_12727;(statearr_12740[11] = inst_12680);
(statearr_12740[12] = inst_12681);
(statearr_12740[10] = inst_12678__$1);
return statearr_12740;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12727__$1,10,inst_12679);
} else
{if((state_val_12728 === 10))
{var inst_12687 = (state_12727[13]);var inst_12685 = (state_12727[14]);var inst_12684 = (state_12727[2]);var inst_12685__$1 = cljs.core.nth.call(null,inst_12684,0,null);var inst_12686 = cljs.core.nth.call(null,inst_12684,1,null);var inst_12687__$1 = (inst_12685__$1 == null);var state_12727__$1 = (function (){var statearr_12741 = state_12727;(statearr_12741[13] = inst_12687__$1);
(statearr_12741[15] = inst_12686);
(statearr_12741[14] = inst_12685__$1);
return statearr_12741;
})();if(cljs.core.truth_(inst_12687__$1))
{var statearr_12742_12784 = state_12727__$1;(statearr_12742_12784[1] = 11);
} else
{var statearr_12743_12785 = state_12727__$1;(statearr_12743_12785[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12728 === 11))
{var inst_12687 = (state_12727[13]);var state_12727__$1 = state_12727;var statearr_12744_12786 = state_12727__$1;(statearr_12744_12786[2] = inst_12687);
(statearr_12744_12786[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12728 === 12))
{var inst_12686 = (state_12727[15]);var inst_12690 = cljs.core._EQ_.call(null,inst_12686,change);var state_12727__$1 = state_12727;var statearr_12745_12787 = state_12727__$1;(statearr_12745_12787[2] = inst_12690);
(statearr_12745_12787[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12728 === 13))
{var inst_12692 = (state_12727[2]);var state_12727__$1 = state_12727;if(cljs.core.truth_(inst_12692))
{var statearr_12746_12788 = state_12727__$1;(statearr_12746_12788[1] = 14);
} else
{var statearr_12747_12789 = state_12727__$1;(statearr_12747_12789[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12728 === 14))
{var inst_12685 = (state_12727[14]);var inst_12694 = (inst_12685 == null);var state_12727__$1 = state_12727;if(cljs.core.truth_(inst_12694))
{var statearr_12748_12790 = state_12727__$1;(statearr_12748_12790[1] = 17);
} else
{var statearr_12749_12791 = state_12727__$1;(statearr_12749_12791[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12728 === 15))
{var inst_12681 = (state_12727[12]);var inst_12703 = (state_12727[16]);var inst_12686 = (state_12727[15]);var inst_12703__$1 = inst_12681.call(null,inst_12686);var state_12727__$1 = (function (){var statearr_12750 = state_12727;(statearr_12750[16] = inst_12703__$1);
return statearr_12750;
})();if(cljs.core.truth_(inst_12703__$1))
{var statearr_12751_12792 = state_12727__$1;(statearr_12751_12792[1] = 20);
} else
{var statearr_12752_12793 = state_12727__$1;(statearr_12752_12793[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12728 === 16))
{var inst_12723 = (state_12727[2]);var state_12727__$1 = state_12727;var statearr_12753_12794 = state_12727__$1;(statearr_12753_12794[2] = inst_12723);
(statearr_12753_12794[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12728 === 17))
{var inst_12686 = (state_12727[15]);var inst_12696 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12686);var state_12727__$1 = state_12727;var statearr_12754_12795 = state_12727__$1;(statearr_12754_12795[2] = inst_12696);
(statearr_12754_12795[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12728 === 18))
{var state_12727__$1 = state_12727;var statearr_12755_12796 = state_12727__$1;(statearr_12755_12796[2] = null);
(statearr_12755_12796[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12728 === 19))
{var inst_12699 = (state_12727[2]);var inst_12700 = calc_state.call(null);var inst_12670 = inst_12700;var state_12727__$1 = (function (){var statearr_12756 = state_12727;(statearr_12756[9] = inst_12670);
(statearr_12756[17] = inst_12699);
return statearr_12756;
})();var statearr_12757_12797 = state_12727__$1;(statearr_12757_12797[2] = null);
(statearr_12757_12797[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12728 === 20))
{var inst_12703 = (state_12727[16]);var state_12727__$1 = state_12727;var statearr_12758_12798 = state_12727__$1;(statearr_12758_12798[2] = inst_12703);
(statearr_12758_12798[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12728 === 21))
{var inst_12681 = (state_12727[12]);var inst_12706 = (state_12727[18]);var inst_12706__$1 = cljs.core.empty_QMARK_.call(null,inst_12681);var state_12727__$1 = (function (){var statearr_12759 = state_12727;(statearr_12759[18] = inst_12706__$1);
return statearr_12759;
})();if(inst_12706__$1)
{var statearr_12760_12799 = state_12727__$1;(statearr_12760_12799[1] = 23);
} else
{var statearr_12761_12800 = state_12727__$1;(statearr_12761_12800[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12728 === 22))
{var inst_12714 = (state_12727[2]);var state_12727__$1 = state_12727;if(cljs.core.truth_(inst_12714))
{var statearr_12762_12801 = state_12727__$1;(statearr_12762_12801[1] = 26);
} else
{var statearr_12763_12802 = state_12727__$1;(statearr_12763_12802[1] = 27);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12728 === 23))
{var inst_12680 = (state_12727[11]);var inst_12686 = (state_12727[15]);var inst_12708 = inst_12680.call(null,inst_12686);var inst_12709 = cljs.core.not.call(null,inst_12708);var state_12727__$1 = state_12727;var statearr_12764_12803 = state_12727__$1;(statearr_12764_12803[2] = inst_12709);
(statearr_12764_12803[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12728 === 24))
{var inst_12706 = (state_12727[18]);var state_12727__$1 = state_12727;var statearr_12765_12804 = state_12727__$1;(statearr_12765_12804[2] = inst_12706);
(statearr_12765_12804[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12728 === 25))
{var inst_12712 = (state_12727[2]);var state_12727__$1 = state_12727;var statearr_12766_12805 = state_12727__$1;(statearr_12766_12805[2] = inst_12712);
(statearr_12766_12805[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12728 === 26))
{var inst_12685 = (state_12727[14]);var state_12727__$1 = state_12727;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12727__$1,29,out,inst_12685);
} else
{if((state_val_12728 === 27))
{var state_12727__$1 = state_12727;var statearr_12767_12806 = state_12727__$1;(statearr_12767_12806[2] = null);
(statearr_12767_12806[1] = 28);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12728 === 28))
{var inst_12678 = (state_12727[10]);var inst_12720 = (state_12727[2]);var inst_12670 = inst_12678;var state_12727__$1 = (function (){var statearr_12768 = state_12727;(statearr_12768[9] = inst_12670);
(statearr_12768[19] = inst_12720);
return statearr_12768;
})();var statearr_12769_12807 = state_12727__$1;(statearr_12769_12807[2] = null);
(statearr_12769_12807[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12728 === 29))
{var inst_12717 = (state_12727[2]);var state_12727__$1 = state_12727;var statearr_12770_12808 = state_12727__$1;(statearr_12770_12808[2] = inst_12717);
(statearr_12770_12808[1] = 28);
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
});return ((function (switch__8208__auto__){
return (function() {
var state_machine__8209__auto__ = null;
var state_machine__8209__auto____0 = (function (){var statearr_12772 = (new Array(20));(statearr_12772[0] = state_machine__8209__auto__);
(statearr_12772[1] = 1);
return statearr_12772;
});
var state_machine__8209__auto____1 = (function (state_12727){while(true){
var result__8210__auto__ = switch__8208__auto__.call(null,state_12727);if(cljs.core.keyword_identical_QMARK_.call(null,result__8210__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8210__auto__;
}
break;
}
});
state_machine__8209__auto__ = function(state_12727){
switch(arguments.length){
case 0:
return state_machine__8209__auto____0.call(this);
case 1:
return state_machine__8209__auto____1.call(this,state_12727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8209__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8209__auto____0;
state_machine__8209__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8209__auto____1;
return state_machine__8209__auto__;
})()
;})(switch__8208__auto__))
})();var state__8268__auto__ = (function (){var statearr_12773 = f__8267__auto__.call(null);(statearr_12773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8266__auto___12774);
return statearr_12773;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8268__auto__);
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
{var x__6809__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6809__auto__)]);if(or__3943__auto__)
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
{var x__6809__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6809__auto__)]);if(or__3943__auto__)
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
{var x__6809__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6809__auto__)]);if(or__3943__auto__)
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
{var x__6809__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6809__auto__)]);if(or__3943__auto__)
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
return (function (p1__12809_SHARP_){if(cljs.core.truth_(p1__12809_SHARP_.call(null,topic)))
{return p1__12809_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12809_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3943__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12933 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12933');

/**
* @constructor
*/
cljs.core.async.t12933 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12934){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12934 = meta12934;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12933.cljs$lang$type = true;
cljs.core.async.t12933.cljs$lang$ctorStr = "cljs.core.async/t12933";
cljs.core.async.t12933.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6738__auto__,writer__6739__auto__,opt__6740__auto__){return cljs.core._write.call(null,writer__6739__auto__,"cljs.core.async/t12933");
});})(mults,ensure_mult))
;
cljs.core.async.t12933.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12933.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12933.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12933.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12933.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12933.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12933.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12933.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12935){var self__ = this;
return self__.meta12934;
});})(mults,ensure_mult))
;
cljs.core.async.t12933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12935,meta12934__$1){var self__ = this;
return (new cljs.core.async.t12933(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12934__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12933 = ((function (mults,ensure_mult){
return (function __GT_t12933(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12934){return (new cljs.core.async.t12933(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12934));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12933(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__8266__auto___13056 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8267__auto__ = (function (){var switch__8208__auto__ = (function (state_13008){var state_val_13009 = (state_13008[1]);if((state_val_13009 === 1))
{var state_13008__$1 = state_13008;var statearr_13010_13057 = state_13008__$1;(statearr_13010_13057[2] = null);
(statearr_13010_13057[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13009 === 2))
{var state_13008__$1 = state_13008;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13008__$1,4,ch);
} else
{if((state_val_13009 === 3))
{var inst_13006 = (state_13008[2]);var state_13008__$1 = state_13008;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13008__$1,inst_13006);
} else
{if((state_val_13009 === 4))
{var inst_12938 = (state_13008[5]);var inst_12938__$1 = (state_13008[2]);var inst_12939 = (inst_12938__$1 == null);var state_13008__$1 = (function (){var statearr_13011 = state_13008;(statearr_13011[5] = inst_12938__$1);
return statearr_13011;
})();if(cljs.core.truth_(inst_12939))
{var statearr_13012_13058 = state_13008__$1;(statearr_13012_13058[1] = 5);
} else
{var statearr_13013_13059 = state_13008__$1;(statearr_13013_13059[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13009 === 5))
{var inst_12945 = cljs.core.deref.call(null,mults);var inst_12946 = cljs.core.vals.call(null,inst_12945);var inst_12947 = cljs.core.seq.call(null,inst_12946);var inst_12948 = inst_12947;var inst_12949 = null;var inst_12950 = 0;var inst_12951 = 0;var state_13008__$1 = (function (){var statearr_13014 = state_13008;(statearr_13014[6] = inst_12951);
(statearr_13014[7] = inst_12950);
(statearr_13014[8] = inst_12948);
(statearr_13014[9] = inst_12949);
return statearr_13014;
})();var statearr_13015_13060 = state_13008__$1;(statearr_13015_13060[2] = null);
(statearr_13015_13060[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13009 === 6))
{var inst_12986 = (state_13008[10]);var inst_12988 = (state_13008[11]);var inst_12938 = (state_13008[5]);var inst_12986__$1 = topic_fn.call(null,inst_12938);var inst_12987 = cljs.core.deref.call(null,mults);var inst_12988__$1 = cljs.core.get.call(null,inst_12987,inst_12986__$1);var state_13008__$1 = (function (){var statearr_13016 = state_13008;(statearr_13016[10] = inst_12986__$1);
(statearr_13016[11] = inst_12988__$1);
return statearr_13016;
})();if(cljs.core.truth_(inst_12988__$1))
{var statearr_13017_13061 = state_13008__$1;(statearr_13017_13061[1] = 19);
} else
{var statearr_13018_13062 = state_13008__$1;(statearr_13018_13062[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13009 === 7))
{var inst_13004 = (state_13008[2]);var state_13008__$1 = state_13008;var statearr_13019_13063 = state_13008__$1;(statearr_13019_13063[2] = inst_13004);
(statearr_13019_13063[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13009 === 8))
{var inst_12951 = (state_13008[6]);var inst_12950 = (state_13008[7]);var inst_12953 = (inst_12951 < inst_12950);var inst_12954 = inst_12953;var state_13008__$1 = state_13008;if(cljs.core.truth_(inst_12954))
{var statearr_13023_13064 = state_13008__$1;(statearr_13023_13064[1] = 10);
} else
{var statearr_13024_13065 = state_13008__$1;(statearr_13024_13065[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13009 === 9))
{var inst_12984 = (state_13008[2]);var state_13008__$1 = state_13008;var statearr_13025_13066 = state_13008__$1;(statearr_13025_13066[2] = inst_12984);
(statearr_13025_13066[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13009 === 10))
{var inst_12951 = (state_13008[6]);var inst_12950 = (state_13008[7]);var inst_12948 = (state_13008[8]);var inst_12949 = (state_13008[9]);var inst_12956 = cljs.core._nth.call(null,inst_12949,inst_12951);var inst_12957 = cljs.core.async.muxch_STAR_.call(null,inst_12956);var inst_12958 = cljs.core.async.close_BANG_.call(null,inst_12957);var inst_12959 = (inst_12951 + 1);var tmp13020 = inst_12950;var tmp13021 = inst_12948;var tmp13022 = inst_12949;var inst_12948__$1 = tmp13021;var inst_12949__$1 = tmp13022;var inst_12950__$1 = tmp13020;var inst_12951__$1 = inst_12959;var state_13008__$1 = (function (){var statearr_13026 = state_13008;(statearr_13026[12] = inst_12958);
(statearr_13026[6] = inst_12951__$1);
(statearr_13026[7] = inst_12950__$1);
(statearr_13026[8] = inst_12948__$1);
(statearr_13026[9] = inst_12949__$1);
return statearr_13026;
})();var statearr_13027_13067 = state_13008__$1;(statearr_13027_13067[2] = null);
(statearr_13027_13067[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13009 === 11))
{var inst_12948 = (state_13008[8]);var inst_12962 = (state_13008[13]);var inst_12962__$1 = cljs.core.seq.call(null,inst_12948);var state_13008__$1 = (function (){var statearr_13028 = state_13008;(statearr_13028[13] = inst_12962__$1);
return statearr_13028;
})();if(inst_12962__$1)
{var statearr_13029_13068 = state_13008__$1;(statearr_13029_13068[1] = 13);
} else
{var statearr_13030_13069 = state_13008__$1;(statearr_13030_13069[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13009 === 12))
{var inst_12982 = (state_13008[2]);var state_13008__$1 = state_13008;var statearr_13031_13070 = state_13008__$1;(statearr_13031_13070[2] = inst_12982);
(statearr_13031_13070[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13009 === 13))
{var inst_12962 = (state_13008[13]);var inst_12964 = cljs.core.chunked_seq_QMARK_.call(null,inst_12962);var state_13008__$1 = state_13008;if(inst_12964)
{var statearr_13032_13071 = state_13008__$1;(statearr_13032_13071[1] = 16);
} else
{var statearr_13033_13072 = state_13008__$1;(statearr_13033_13072[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13009 === 14))
{var state_13008__$1 = state_13008;var statearr_13034_13073 = state_13008__$1;(statearr_13034_13073[2] = null);
(statearr_13034_13073[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13009 === 15))
{var inst_12980 = (state_13008[2]);var state_13008__$1 = state_13008;var statearr_13035_13074 = state_13008__$1;(statearr_13035_13074[2] = inst_12980);
(statearr_13035_13074[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13009 === 16))
{var inst_12962 = (state_13008[13]);var inst_12966 = cljs.core.chunk_first.call(null,inst_12962);var inst_12967 = cljs.core.chunk_rest.call(null,inst_12962);var inst_12968 = cljs.core.count.call(null,inst_12966);var inst_12948 = inst_12967;var inst_12949 = inst_12966;var inst_12950 = inst_12968;var inst_12951 = 0;var state_13008__$1 = (function (){var statearr_13036 = state_13008;(statearr_13036[6] = inst_12951);
(statearr_13036[7] = inst_12950);
(statearr_13036[8] = inst_12948);
(statearr_13036[9] = inst_12949);
return statearr_13036;
})();var statearr_13037_13075 = state_13008__$1;(statearr_13037_13075[2] = null);
(statearr_13037_13075[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13009 === 17))
{var inst_12962 = (state_13008[13]);var inst_12971 = cljs.core.first.call(null,inst_12962);var inst_12972 = cljs.core.async.muxch_STAR_.call(null,inst_12971);var inst_12973 = cljs.core.async.close_BANG_.call(null,inst_12972);var inst_12974 = cljs.core.next.call(null,inst_12962);var inst_12948 = inst_12974;var inst_12949 = null;var inst_12950 = 0;var inst_12951 = 0;var state_13008__$1 = (function (){var statearr_13038 = state_13008;(statearr_13038[6] = inst_12951);
(statearr_13038[7] = inst_12950);
(statearr_13038[14] = inst_12973);
(statearr_13038[8] = inst_12948);
(statearr_13038[9] = inst_12949);
return statearr_13038;
})();var statearr_13039_13076 = state_13008__$1;(statearr_13039_13076[2] = null);
(statearr_13039_13076[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13009 === 18))
{var inst_12977 = (state_13008[2]);var state_13008__$1 = state_13008;var statearr_13040_13077 = state_13008__$1;(statearr_13040_13077[2] = inst_12977);
(statearr_13040_13077[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13009 === 19))
{var state_13008__$1 = state_13008;var statearr_13041_13078 = state_13008__$1;(statearr_13041_13078[2] = null);
(statearr_13041_13078[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13009 === 20))
{var state_13008__$1 = state_13008;var statearr_13042_13079 = state_13008__$1;(statearr_13042_13079[2] = null);
(statearr_13042_13079[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13009 === 21))
{var inst_13001 = (state_13008[2]);var state_13008__$1 = (function (){var statearr_13043 = state_13008;(statearr_13043[15] = inst_13001);
return statearr_13043;
})();var statearr_13044_13080 = state_13008__$1;(statearr_13044_13080[2] = null);
(statearr_13044_13080[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13009 === 22))
{var inst_12998 = (state_13008[2]);var state_13008__$1 = state_13008;var statearr_13045_13081 = state_13008__$1;(statearr_13045_13081[2] = inst_12998);
(statearr_13045_13081[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13009 === 23))
{var inst_12986 = (state_13008[10]);var inst_12990 = (state_13008[2]);var inst_12991 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12986);var state_13008__$1 = (function (){var statearr_13046 = state_13008;(statearr_13046[16] = inst_12990);
return statearr_13046;
})();var statearr_13047_13082 = state_13008__$1;(statearr_13047_13082[2] = inst_12991);
(statearr_13047_13082[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13009 === 24))
{try{var inst_12988 = (state_13008[11]);var inst_12938 = (state_13008[5]);var inst_12994 = cljs.core.async.muxch_STAR_.call(null,inst_12988);var state_13008__$1 = state_13008;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13008__$1,25,inst_12994,inst_12938);
}catch (e13048){if((e13048 instanceof Object))
{var ex__8202__auto__ = e13048;var statearr_13049_13083 = state_13008;(statearr_13049_13083[1] = 23);
(statearr_13049_13083[2] = ex__8202__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13048;
} else
{return null;
}
}
}} else
{if((state_val_13009 === 25))
{try{var inst_12996 = (state_13008[2]);var state_13008__$1 = state_13008;var statearr_13052_13084 = state_13008__$1;(statearr_13052_13084[2] = inst_12996);
(statearr_13052_13084[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e13050){if((e13050 instanceof Object))
{var ex__8202__auto__ = e13050;var statearr_13051_13085 = state_13008;(statearr_13051_13085[1] = 23);
(statearr_13051_13085[2] = ex__8202__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13050;
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
});return ((function (switch__8208__auto__){
return (function() {
var state_machine__8209__auto__ = null;
var state_machine__8209__auto____0 = (function (){var statearr_13054 = (new Array(17));(statearr_13054[0] = state_machine__8209__auto__);
(statearr_13054[1] = 1);
return statearr_13054;
});
var state_machine__8209__auto____1 = (function (state_13008){while(true){
var result__8210__auto__ = switch__8208__auto__.call(null,state_13008);if(cljs.core.keyword_identical_QMARK_.call(null,result__8210__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8210__auto__;
}
break;
}
});
state_machine__8209__auto__ = function(state_13008){
switch(arguments.length){
case 0:
return state_machine__8209__auto____0.call(this);
case 1:
return state_machine__8209__auto____1.call(this,state_13008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8209__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8209__auto____0;
state_machine__8209__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8209__auto____1;
return state_machine__8209__auto__;
})()
;})(switch__8208__auto__))
})();var state__8268__auto__ = (function (){var statearr_13055 = f__8267__auto__.call(null);(statearr_13055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8266__auto___13056);
return statearr_13055;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8268__auto__);
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
,cljs.core.range.call(null,cnt));var c__8266__auto___13216 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8267__auto__ = (function (){var switch__8208__auto__ = (function (state_13188){var state_val_13189 = (state_13188[1]);if((state_val_13189 === 1))
{var state_13188__$1 = state_13188;var statearr_13190_13217 = state_13188__$1;(statearr_13190_13217[2] = null);
(statearr_13190_13217[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13189 === 2))
{var inst_13152 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13153 = 0;var state_13188__$1 = (function (){var statearr_13191 = state_13188;(statearr_13191[5] = inst_13153);
(statearr_13191[6] = inst_13152);
return statearr_13191;
})();var statearr_13192_13218 = state_13188__$1;(statearr_13192_13218[2] = null);
(statearr_13192_13218[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13189 === 3))
{var inst_13186 = (state_13188[2]);var state_13188__$1 = state_13188;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13188__$1,inst_13186);
} else
{if((state_val_13189 === 4))
{var inst_13153 = (state_13188[5]);var inst_13155 = (inst_13153 < cnt);var state_13188__$1 = state_13188;if(cljs.core.truth_(inst_13155))
{var statearr_13193_13219 = state_13188__$1;(statearr_13193_13219[1] = 6);
} else
{var statearr_13194_13220 = state_13188__$1;(statearr_13194_13220[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13189 === 5))
{var inst_13172 = (state_13188[2]);var state_13188__$1 = (function (){var statearr_13195 = state_13188;(statearr_13195[7] = inst_13172);
return statearr_13195;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13188__$1,12,dchan);
} else
{if((state_val_13189 === 6))
{var state_13188__$1 = state_13188;var statearr_13196_13221 = state_13188__$1;(statearr_13196_13221[2] = null);
(statearr_13196_13221[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13189 === 7))
{var state_13188__$1 = state_13188;var statearr_13197_13222 = state_13188__$1;(statearr_13197_13222[2] = null);
(statearr_13197_13222[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13189 === 8))
{var inst_13170 = (state_13188[2]);var state_13188__$1 = state_13188;var statearr_13198_13223 = state_13188__$1;(statearr_13198_13223[2] = inst_13170);
(statearr_13198_13223[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13189 === 9))
{var inst_13153 = (state_13188[5]);var inst_13165 = (state_13188[2]);var inst_13166 = (inst_13153 + 1);var inst_13153__$1 = inst_13166;var state_13188__$1 = (function (){var statearr_13199 = state_13188;(statearr_13199[5] = inst_13153__$1);
(statearr_13199[8] = inst_13165);
return statearr_13199;
})();var statearr_13200_13224 = state_13188__$1;(statearr_13200_13224[2] = null);
(statearr_13200_13224[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13189 === 10))
{var inst_13157 = (state_13188[2]);var inst_13158 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13188__$1 = (function (){var statearr_13201 = state_13188;(statearr_13201[9] = inst_13157);
return statearr_13201;
})();var statearr_13202_13225 = state_13188__$1;(statearr_13202_13225[2] = inst_13158);
(statearr_13202_13225[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13189 === 11))
{try{var inst_13153 = (state_13188[5]);var inst_13161 = chs__$1.call(null,inst_13153);var inst_13162 = done.call(null,inst_13153);var inst_13163 = cljs.core.async.take_BANG_.call(null,inst_13161,inst_13162);var state_13188__$1 = state_13188;var statearr_13205_13226 = state_13188__$1;(statearr_13205_13226[2] = inst_13163);
(statearr_13205_13226[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e13203){if((e13203 instanceof Object))
{var ex__8202__auto__ = e13203;var statearr_13204_13227 = state_13188;(statearr_13204_13227[1] = 10);
(statearr_13204_13227[2] = ex__8202__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13203;
} else
{return null;
}
}
}} else
{if((state_val_13189 === 12))
{var inst_13174 = (state_13188[10]);var inst_13174__$1 = (state_13188[2]);var inst_13175 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13174__$1);var state_13188__$1 = (function (){var statearr_13206 = state_13188;(statearr_13206[10] = inst_13174__$1);
return statearr_13206;
})();if(cljs.core.truth_(inst_13175))
{var statearr_13207_13228 = state_13188__$1;(statearr_13207_13228[1] = 13);
} else
{var statearr_13208_13229 = state_13188__$1;(statearr_13208_13229[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13189 === 13))
{var inst_13177 = cljs.core.async.close_BANG_.call(null,out);var state_13188__$1 = state_13188;var statearr_13209_13230 = state_13188__$1;(statearr_13209_13230[2] = inst_13177);
(statearr_13209_13230[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13189 === 14))
{var inst_13174 = (state_13188[10]);var inst_13179 = cljs.core.apply.call(null,f,inst_13174);var state_13188__$1 = state_13188;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13188__$1,16,out,inst_13179);
} else
{if((state_val_13189 === 15))
{var inst_13184 = (state_13188[2]);var state_13188__$1 = state_13188;var statearr_13210_13231 = state_13188__$1;(statearr_13210_13231[2] = inst_13184);
(statearr_13210_13231[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13189 === 16))
{var inst_13181 = (state_13188[2]);var state_13188__$1 = (function (){var statearr_13211 = state_13188;(statearr_13211[11] = inst_13181);
return statearr_13211;
})();var statearr_13212_13232 = state_13188__$1;(statearr_13212_13232[2] = null);
(statearr_13212_13232[1] = 2);
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
});return ((function (switch__8208__auto__){
return (function() {
var state_machine__8209__auto__ = null;
var state_machine__8209__auto____0 = (function (){var statearr_13214 = (new Array(12));(statearr_13214[0] = state_machine__8209__auto__);
(statearr_13214[1] = 1);
return statearr_13214;
});
var state_machine__8209__auto____1 = (function (state_13188){while(true){
var result__8210__auto__ = switch__8208__auto__.call(null,state_13188);if(cljs.core.keyword_identical_QMARK_.call(null,result__8210__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8210__auto__;
}
break;
}
});
state_machine__8209__auto__ = function(state_13188){
switch(arguments.length){
case 0:
return state_machine__8209__auto____0.call(this);
case 1:
return state_machine__8209__auto____1.call(this,state_13188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8209__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8209__auto____0;
state_machine__8209__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8209__auto____1;
return state_machine__8209__auto__;
})()
;})(switch__8208__auto__))
})();var state__8268__auto__ = (function (){var statearr_13215 = f__8267__auto__.call(null);(statearr_13215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8266__auto___13216);
return statearr_13215;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8268__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8266__auto___13332 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8267__auto__ = (function (){var switch__8208__auto__ = (function (state_13312){var state_val_13313 = (state_13312[1]);if((state_val_13313 === 1))
{var inst_13283 = cljs.core.vec.call(null,chs);var inst_13284 = inst_13283;var state_13312__$1 = (function (){var statearr_13314 = state_13312;(statearr_13314[5] = inst_13284);
return statearr_13314;
})();var statearr_13315_13333 = state_13312__$1;(statearr_13315_13333[2] = null);
(statearr_13315_13333[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13313 === 2))
{var inst_13284 = (state_13312[5]);var inst_13286 = cljs.core.count.call(null,inst_13284);var inst_13287 = (inst_13286 > 0);var state_13312__$1 = state_13312;if(cljs.core.truth_(inst_13287))
{var statearr_13316_13334 = state_13312__$1;(statearr_13316_13334[1] = 4);
} else
{var statearr_13317_13335 = state_13312__$1;(statearr_13317_13335[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13313 === 3))
{var inst_13310 = (state_13312[2]);var state_13312__$1 = state_13312;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13312__$1,inst_13310);
} else
{if((state_val_13313 === 4))
{var inst_13284 = (state_13312[5]);var state_13312__$1 = state_13312;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13312__$1,7,inst_13284);
} else
{if((state_val_13313 === 5))
{var inst_13306 = cljs.core.async.close_BANG_.call(null,out);var state_13312__$1 = state_13312;var statearr_13318_13336 = state_13312__$1;(statearr_13318_13336[2] = inst_13306);
(statearr_13318_13336[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13313 === 6))
{var inst_13308 = (state_13312[2]);var state_13312__$1 = state_13312;var statearr_13319_13337 = state_13312__$1;(statearr_13319_13337[2] = inst_13308);
(statearr_13319_13337[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13313 === 7))
{var inst_13291 = (state_13312[6]);var inst_13292 = (state_13312[7]);var inst_13291__$1 = (state_13312[2]);var inst_13292__$1 = cljs.core.nth.call(null,inst_13291__$1,0,null);var inst_13293 = cljs.core.nth.call(null,inst_13291__$1,1,null);var inst_13294 = (inst_13292__$1 == null);var state_13312__$1 = (function (){var statearr_13320 = state_13312;(statearr_13320[6] = inst_13291__$1);
(statearr_13320[8] = inst_13293);
(statearr_13320[7] = inst_13292__$1);
return statearr_13320;
})();if(cljs.core.truth_(inst_13294))
{var statearr_13321_13338 = state_13312__$1;(statearr_13321_13338[1] = 8);
} else
{var statearr_13322_13339 = state_13312__$1;(statearr_13322_13339[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13313 === 8))
{var inst_13291 = (state_13312[6]);var inst_13284 = (state_13312[5]);var inst_13293 = (state_13312[8]);var inst_13292 = (state_13312[7]);var inst_13296 = (function (){var c = inst_13293;var v = inst_13292;var vec__13289 = inst_13291;var cs = inst_13284;return ((function (c,v,vec__13289,cs,inst_13291,inst_13284,inst_13293,inst_13292,state_val_13313){
return (function (p1__13233_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13233_SHARP_);
});
;})(c,v,vec__13289,cs,inst_13291,inst_13284,inst_13293,inst_13292,state_val_13313))
})();var inst_13297 = cljs.core.filterv.call(null,inst_13296,inst_13284);var inst_13284__$1 = inst_13297;var state_13312__$1 = (function (){var statearr_13323 = state_13312;(statearr_13323[5] = inst_13284__$1);
return statearr_13323;
})();var statearr_13324_13340 = state_13312__$1;(statearr_13324_13340[2] = null);
(statearr_13324_13340[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13313 === 9))
{var inst_13292 = (state_13312[7]);var state_13312__$1 = state_13312;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13312__$1,11,out,inst_13292);
} else
{if((state_val_13313 === 10))
{var inst_13304 = (state_13312[2]);var state_13312__$1 = state_13312;var statearr_13326_13341 = state_13312__$1;(statearr_13326_13341[2] = inst_13304);
(statearr_13326_13341[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13313 === 11))
{var inst_13284 = (state_13312[5]);var inst_13301 = (state_13312[2]);var tmp13325 = inst_13284;var inst_13284__$1 = tmp13325;var state_13312__$1 = (function (){var statearr_13327 = state_13312;(statearr_13327[5] = inst_13284__$1);
(statearr_13327[9] = inst_13301);
return statearr_13327;
})();var statearr_13328_13342 = state_13312__$1;(statearr_13328_13342[2] = null);
(statearr_13328_13342[1] = 2);
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
});return ((function (switch__8208__auto__){
return (function() {
var state_machine__8209__auto__ = null;
var state_machine__8209__auto____0 = (function (){var statearr_13330 = (new Array(10));(statearr_13330[0] = state_machine__8209__auto__);
(statearr_13330[1] = 1);
return statearr_13330;
});
var state_machine__8209__auto____1 = (function (state_13312){while(true){
var result__8210__auto__ = switch__8208__auto__.call(null,state_13312);if(cljs.core.keyword_identical_QMARK_.call(null,result__8210__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8210__auto__;
}
break;
}
});
state_machine__8209__auto__ = function(state_13312){
switch(arguments.length){
case 0:
return state_machine__8209__auto____0.call(this);
case 1:
return state_machine__8209__auto____1.call(this,state_13312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8209__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8209__auto____0;
state_machine__8209__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8209__auto____1;
return state_machine__8209__auto__;
})()
;})(switch__8208__auto__))
})();var state__8268__auto__ = (function (){var statearr_13331 = f__8267__auto__.call(null);(statearr_13331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8266__auto___13332);
return statearr_13331;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8268__auto__);
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
