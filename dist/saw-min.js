/**
 * saw.js v0.0.16
 */
var saw=function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={exports:{},id:d,loaded:!1};return a[d].call(e.exports,e,e.exports,b),e.loaded=!0,e.exports}var c={};return b.m=a,b.c=c,b.p="",b(0)}([function(a,b,c){var d=c(1);a.exports=function(a){return new d(a)}},function(a,b,c){function d(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function e(a){return Array.prototype.slice.call(a)}function f(a){Array.isArray(a)?this._context=a.slice(0):a instanceof h?this._context=a.clone():this._context=a}function g(a){var b;return b=a.length>1?e(a):Array.isArray(a[0])?a[0]:[a[0]]}var h=c(2);f.prototype={match:function(a){var b=g(arguments),c=new f(this._context),d=this._contextToString(this._context);return b.some(function(a){var b=d.match(a);return b?(c._context=new h(b,a),!0):void(c._context="")}),c},item:function(a){var b=new f(this._context);return b._context instanceof h?b._context=b._context.item(a):Array.isArray(b._context)&&(b._context=b._context[a]||""),b},itemFromRight:function(a){var b=new f(this._context);if(b._context instanceof h||Array.isArray(b._context)){var c=b._context.length;a=c-1-a,a>=0&&(b=b.item(a))}return b},first:function(a){var b=new f(this._context);return b.item(0)},last:function(){var a=new f(this._context);return a.itemFromRight(0)},replace:function(a,b){var c=new f(this._context);return Array.isArray(c._context)?c._context=c._context.map(function(c){return c.replace(a,b)}):c._context=this._contextToString(this._context).replace(a,b),c},join:function(a){var b=new f(this._context);return Array.isArray(b._context)&&(b._context=b._context.join(a||"")),b},each:function(a,b){var c=new f(this._context),d=c.toArray();return d.forEach(function(c,e){c&&a.bind(b)(c,e,d)}),c},map:function(a,b){var c=new f(this._context),d=c.toArray();return c._context=d.map(function(c,e){return a.bind(b)(c,e,d)}),c},reduce:function(a,b){var c=new f(this._context),d=c.toArray();return c._context=String(d.reduce(function(c,d,e,f){return a.bind(b)(c,d,e,f)})),c},reverse:function(){var a=new f(this._context);if("string"==typeof a._context)a._context=a._context.split("").reverse().join("");else if(Array.isArray(a._context))a._context=a._context.reverse();else if(a._context instanceof h){var b=a.toArray();1===b.length?a._context=(b[0]||"").split("").reverse().join(""):a._context=a.toArray().reverse()}return a},lowerCase:function(a){return this.mapStringMethodAgainstContext("toLowerCase",a)},upperCase:function(a){return this.mapStringMethodAgainstContext("toUpperCase",a)},mapStringMethodAgainstContext:function(a,b){var c=new f(this._context),d=c.toArray();return c._context=d.map(function(b,c){return b?String(b)[a]():b}),c},filter:function(a,b){var c=new f(this._context),d=c.toArray();return c._context=d.filter(function(c,e){return a.bind(b)(c,e,d)}),c},remove:function(){var a=new f(this._context),b=a.toArray(),c=e(arguments);return b=b.map(function(a){return c.forEach(function(b){b="string"==typeof b?new RegExp(d(b),"g"):b,a=a.replace(b,"")}),a}),a._context=b,a},trim:function(){var a=new f(this._context),b=Array.isArray(a._context)?a._context:a.toArray(a._context);return a._context=b.map(function(a){return a?a.trim():a}),a},split:function(a){var b=new f(this._context);return b._context=b._contextToString(b._context).split(a),b},slice:function(a,b){var c=new f(this._context);return(c._context instanceof h||Array.isArray(c._context))&&(c._context=c._context.slice(a,b)),c},toString:function(){return this._contextToString(this._context)},toArray:function(){return Array.isArray(this._context)?e(this._context):this._context instanceof h?this._context.toArray():this.toBoolean()?[this._context]:[]},toNumber:function(){var a=this.toFloat();return isNaN(a)?0:a},toFloat:function(){var a=this.toString(),b=parseFloat(a,10);return isNaN(b)||a.length!=String(b).length?NaN:b},toInt:function(){var a=this.toString(),b=parseInt(a,10);return isNaN(b)||a.length!=String(b).length?NaN:b},toBoolean:function(){return!!this.toString()},toObject:function(){var a=g(arguments),b=this.toArray(),c={};return a.forEach(function(a,d){"undefined"!=typeof a&&"undefined"!=typeof b[d]&&(c[a]=b[d])}),c},indexOf:function(a){var b=(new f(this._context),this.indexesOf(a).shift());return"undefined"!=typeof b?b:-1},indexesOf:function(a){var b=(new f(this._context),[]);return Array.isArray(this._context)&&this._context.forEach(function(c,d){String(c).match(a)&&b.push(d)}),b},_contextToString:function(a){return"string"==typeof a?a:a instanceof h?a.toString():Array.isArray(a)?a.join(""):""}},a.exports=f},function(a,b,c){function d(a,b){return a?(this.match=b,b instanceof RegExp&&!b.global&&b.length>1?this.matches=a.slice(1):this.matches=a,void(this.length=this.matches.length)):null}d.prototype={item:function(a){var b;return 1===this.matches.length?b=this.matches[0]:this.matches.length>1&&(b=this.matches[this.match.global?a:a+1]),b||""},slice:function(a,b){var c=[];return 1===this.matches.length||this.match.global?c=this.matches.slice(a,b):this.matches.length>1&&(c=this.matches.slice(a+1,b)),c},toArray:function(a,b){var c=[];return 1===this.matches.length||this.match.global?c=this.matches.slice(0):this.matches.length>1&&(c=this.matches.slice(1)),c},toString:function(){var a="";return 1===this.matches.length?a=this.matches[0]:this.matches.forEach(function(b){b&&(a+=b)}),a},clone:function(){var a=new d(null);return a.match=this.match,a.matches=Array.prototype.slice.call(this.matches),a.length=this.length,a}},a.exports=d}]);