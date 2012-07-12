/** @license
 * Shifty <http://jeremyckahn.github.com/shifty/>
 * Description: A teeny tiny tweening engine in JavaScript. That's all it does.
 * Author: Jeremy Kahn - jeremyckahn@gmail.com
 * License: MIT
 * Version: 0.6.10 (Thu, 12 Jul 2012 02:17:52 GMT)
 */
(function(){var e;(function(t){function s(e,t){var n;for(n in e)e.hasOwnProperty(n)&&t(e,n)}function o(e,t){return s(t,function(t,n){e[n]=t[n]}),e}function u(e,t){return s(t,function(t,n){typeof e[n]=="undefined"&&(e[n]=t[n])}),e}function a(e,t,n){var r,s;s=(e-t.timestamp)/t.duration;for(r in n.current)n.current.hasOwnProperty(r)&&t.to.hasOwnProperty(r)&&(n.current[r]=f(t.originalState[r],t.to[r],i[t.easing[r]],s));return n.current}function f(e,t,n,r){return e+(t-e)*n(r)}function l(e,t){return setTimeout(e,1e3/t)}function c(e,t,n,r){var i;for(i=0;i<t[e].length;i++)t[e][i].apply(n,r)}function h(t,n,r){s(e.prototype.filter,function(e,i){e[i][t]&&e[i][t].apply(n,r)})}function p(e,t){var r=e.timestamp+e.duration,i=Math.min(n(),r),s=i>=r;t.isTweening&&(s||(t.loopId=l(function(){p(e,t)},e.owner.fps)),h("beforeTween",e.owner,[t.current,e.originalState,e.to,e.easing]),a(i,e,t),h("afterTween",e.owner,[t.current,e.originalState,e.to,e.easing]),e.hook.step&&c("step",e.hook,e.owner,[t.current]),e.step&&e.step.call(t.current,t.current)),(s||!t.isTweening)&&e.owner.stop(!0)}function d(e,t){var n;return n={},typeof t=="string"?s(e,function(e,r){n[r]=t}):s(e,function(e,i){n[i]||(n[i]=t[i]||r)}),n}var n,r="linear",i;n=function(){return+(new Date)},e=function(e){return e=e||{},this._hook={},this._tweenParams={owner:this,hook:this._hook,data:{}},this._state={},this._state.current=e.initialState||{},this.fps=e.fps||30,this.easing=e.easing||r,this.duration=e.duration||500,this},e.prototype.tween=function(e,t,r,i,s){var a,f,l;if(this._state.isTweening)return;return a=this,f=this._tweenParams,l=this._state,this._state.loopId=0,this._state.pausedAtTime=null,t?(f.to=t||{},f.duration=r||this.duration,f.callback=i,f.easing=s||this.easing,l.current=e||{}):(f.step=e.step,f.callback=e.callback,f.to=e.to||e.target||{},f.duration=e.duration||this.duration,f.easing=e.easing||this.easing,l.current=e.from||{}),f.timestamp=n(),u(l.current,f.to),u(f.to,l.current),f.easing=d(l.current,f.easing),f.originalState=o({},l.current),h("tweenCreated",f.owner,[l.current,f.originalState,f.to,f.easing]),l.isTweening=!0,this.resume(),e.start&&e.start(),this},e.prototype.to=function(t,n,r,i){return arguments.length===1?"to"in t?(t.from=this.get(),this.tween(t)):this.tween(this.get(),t):this.tween(this.get(),t,n,r,i),this},e.prototype.get=function(){return this._state.current},e.prototype.set=function(e){return this._state.current=e||{},this},e.prototype.stop=function(e){return clearTimeout(this._state.loopId),this._state.isTweening=!1,e&&(o(this._state.current,this._tweenParams.to),h("afterTweenEnd",this,[this._state.current,this._tweenParams.originalState,this._tweenParams.to,this._tweenParams.easing]),this._tweenParams.callback&&this._tweenParams.callback.call(this._state.current,this._state.current)),this},e.prototype.pause=function(){return clearTimeout(this._state.loopId),this._state.pausedAtTime=n(),this._state.isPaused=!0,this},e.prototype.resume=function(){var e;return e=this,this._state.isPaused&&(this._tweenParams.timestamp+=n()-this._state.pausedAtTime),p(e._tweenParams,e._state),this},e.prototype.hookAdd=function(e,t){this._hook.hasOwnProperty(e)||(this._hook[e]=[]),this._hook[e].push(t)},e.prototype.hookRemove=function(e,t){var n;if(!this._hook.hasOwnProperty(e))return;if(!t){this._hook[e]=[];return}for(n=this._hook[e].length;n>=0;n++)this._hook[e][n]===t&&this._hook[e].splice(n,1)},e.prototype.filter={},e.util={now:n,each:s,tweenProps:a,tweenProp:f,applyFilter:h,simpleCopy:o,weakCopy:u,composeEasingObject:d},i=e.prototype.formula={linear:function(e){return e}},typeof exports=="object"?module.exports=e:typeof define=="function"&&define.amd?define(function(){return e}):typeof t.Tweenable=="undefined"&&(t.Tweenable=e)})(this),function(){e.util.simpleCopy(e.prototype.formula,{easeInQuad:function(e){return Math.pow(e,2)},easeOutQuad:function(e){return-(Math.pow(e-1,2)-1)},easeInOutQuad:function(e){return(e/=.5)<1?.5*Math.pow(e,2):-0.5*((e-=2)*e-2)},easeInCubic:function(e){return Math.pow(e,3)},easeOutCubic:function(e){return Math.pow(e-1,3)+1},easeInOutCubic:function(e){return(e/=.5)<1?.5*Math.pow(e,3):.5*(Math.pow(e-2,3)+2)},easeInQuart:function(e){return Math.pow(e,4)},easeOutQuart:function(e){return-(Math.pow(e-1,4)-1)},easeInOutQuart:function(e){return(e/=.5)<1?.5*Math.pow(e,4):-0.5*((e-=2)*Math.pow(e,3)-2)},easeInQuint:function(e){return Math.pow(e,5)},easeOutQuint:function(e){return Math.pow(e-1,5)+1},easeInOutQuint:function(e){return(e/=.5)<1?.5*Math.pow(e,5):.5*(Math.pow(e-2,5)+2)},easeInSine:function(e){return-Math.cos(e*(Math.PI/2))+1},easeOutSine:function(e){return Math.sin(e*(Math.PI/2))},easeInOutSine:function(e){return-0.5*(Math.cos(Math.PI*e)-1)},easeInExpo:function(e){return e==0?0:Math.pow(2,10*(e-1))},easeOutExpo:function(e){return e==1?1:-Math.pow(2,-10*e)+1},easeInOutExpo:function(e){return e==0?0:e==1?1:(e/=.5)<1?.5*Math.pow(2,10*(e-1)):.5*(-Math.pow(2,-10*--e)+2)},easeInCirc:function(e){return-(Math.sqrt(1-e*e)-1)},easeOutCirc:function(e){return Math.sqrt(1-Math.pow(e-1,2))},easeInOutCirc:function(e){return(e/=.5)<1?-0.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)},easeOutBounce:function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},easeInBack:function(e){var t=1.70158;return e*e*((t+1)*e-t)},easeOutBack:function(e){var t=1.70158;return(e-=1)*e*((t+1)*e+t)+1},easeInOutBack:function(e){var t=1.70158;return(e/=.5)<1?.5*e*e*(((t*=1.525)+1)*e-t):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},elastic:function(e){return-1*Math.pow(4,-8*e)*Math.sin((e*6-1)*2*Math.PI/2)+1},swingFromTo:function(e){var t=1.70158;return(e/=.5)<1?.5*e*e*(((t*=1.525)+1)*e-t):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},swingFrom:function(e){var t=1.70158;return e*e*((t+1)*e-t)},swingTo:function(e){var t=1.70158;return(e-=1)*e*((t+1)*e+t)+1},bounce:function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},bouncePast:function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?2-(7.5625*(e-=1.5/2.75)*e+.75):e<2.5/2.75?2-(7.5625*(e-=2.25/2.75)*e+.9375):2-(7.5625*(e-=2.625/2.75)*e+.984375)},easeFromTo:function(e){return(e/=.5)<1?.5*Math.pow(e,4):-0.5*((e-=2)*Math.pow(e,3)-2)},easeFrom:function(e){return Math.pow(e,4)},easeTo:function(e){return Math.pow(e,.25)}})}(),function(){function t(t,n,r,i,s){return e.util.tweenProps(i,{originalState:t,to:r,timestamp:0,duration:1,easing:s},{current:n})}function n(t,n){var r=n;return typeof n=="string"&&(r={},e.util.each(t,function(e,t){r[t]=e[t]})),r}e.util.interpolate=function(n,r,i,s){var o,u,a;n&&n.from&&(r=n.to,i=n.position,s=n.easing,n=n.from),a=new e,a._tweenParams.easing=s||"linear",o=e.util.simpleCopy({},n);var f=e.util.composeEasingObject(n,a._tweenParams.easing);return e.util.applyFilter("tweenCreated",a,[o,n,r,f]),e.util.applyFilter("beforeTween",a,[o,n,r,f]),u=t(n,o,r,i,f),e.util.applyFilter("afterTween",a,[u,n,r,f]),u},e.prototype.interpolate=function(t,n,r){var i;return i=e.util.interpolate(this.get(),t,n,r),this.set(i),i}}(),function(e){function a(e,t){var n=e.length,r,i=[];for(r=0;r<n;r++)i.push("_"+t+"_"+r);return i}function f(e){var t=e.match(n);return t.length===1&&t.unshift(""),t.join(u)}function l(t){e.util.each(t,function(e,n){var r=e[n];typeof r=="string"&&r.match(o)&&(t[n]=c(r))})}function c(e){return v(o,e,h)}function h(e){var t=p(e);return"rgb("+t[0]+","+t[1]+","+t[2]+")"}function p(e){return e=e.replace(/#/,""),e.length===3&&(e=e.split(""),e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),[d(e.substr(0,2)),d(e.substr(2,2)),d(e.substr(4,2))]}function d(e){return parseInt(e,16)}function v(e,t,n){var r=t.match(e),i=t.replace(e,u);if(r){var s=r.length,o;for(var a=0;a<s;a++)o=r.shift(),i=i.replace(u,n(o))}return i}function m(e){return v(i,e,g)}function g(e){var t=e.match(r),n=t.length,i=e.match(s)[0];for(var o=0;o<n;o++)i+=parseInt(t[o],10)+",";return i=i.slice(0,-1)+")",i}function y(t){var n={};return e.util.each(t,function(e,t){var r=e[t];if(typeof r=="string"){var i=T(r);n[t]={formatString:f(r),chunkNames:a(i,t)}}}),n}function b(t,n){e.util.each(n,function(e,r){var i=t[r],s=T(i),o=s.length;for(var u=0;u<o;u++)t[n[r].chunkNames[u]]=+s[u];delete t[r]})}function w(t,n){e.util.each(n,function(e,r){var i=t[r],s=E(t,n[r].chunkNames),o=S(s,n[r].chunkNames);i=x(n[r].formatString,o),t[r]=m(i)})}function E(e,t){var n={},r,i=t.length;for(var s=0;s<i;s++)r=t[s],n[r]=e[r],delete e[r];return n}function S(e,t){var n=[],r=t.length;for(var i=0;i<r;i++)n.push(e[t[i]]);return n}function x(e,t){var n=e,r=t.length;for(var i=0;i<r;i++)n=n.replace(u,+t[i].toFixed(4));return n}function T(e){return e.match(r)}function N(t,n){e.util.each(n,function(e,n){var r=e[n],i=r.chunkNames,s=i.length,o=t[n].split(" "),u=o[o.length-1];for(var a=0;a<s;a++)t[i[a]]=o[a]||u;delete t[n]})}function C(t,n){e.util.each(n,function(e,n){var r=e[n],i=r.chunkNames,s=i.length,o="";for(var u=0;u<s;u++)o+=" "+t[i[u]],delete t[i[u]];o=o.substr(1),t[n]=o})}var t,n=/([^-0-9\.]+)/g,r=/[0-9.-]+/g,i=new RegExp("rgb\\("+r.source+",s*"+r.source+",s*"+r.source+"\\)","g"),s=/^.*\(/,o=/#([0-9]|[a-f]){3,6}/g,u="VAL";e.prototype.filter.token={tweenCreated:function(e,t,n,r){l(e),l(t),l(n),this._tokenData=y(e)},beforeTween:function(e,t,n,r){N(r,this._tokenData),b(e,this._tokenData),b(t,this._tokenData),b(n,this._tokenData)},afterTween:function(e,t,n,r){w(e,this._tokenData),w(t,this._tokenData),w(n,this._tokenData),C(r,this._tokenData)}}}(e)})()