var drawChart = (function (exports) {
    'use strict';

    var n,l$1,u$1,t$1,o$2,r$1,f$1={},e$2=[],c$2=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s$1(n,l){for(var u in l)n[u]=l[u];return n}function a$2(n){var l=n.parentNode;l&&l.removeChild(n);}function h(l,u,i){var t,o,r,f={};for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return v$1(l,f,t,o,null)}function v$1(n,i,t,o,r){var f={type:n,props:i,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u$1:r};return null==r&&null!=l$1.vnode&&l$1.vnode(f),f}function p$1(n){return n.children}function d$1(n,l){this.props=n,this.context=l;}function _$1(n,l){if(null==l)return n.__?_$1(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?_$1(n):null}function k$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return k$1(n)}}function b$1(n){(!n.__d&&(n.__d=!0)&&t$1.push(n)&&!g$1.__r++||o$2!==l$1.debounceRendering)&&((o$2=l$1.debounceRendering)||setTimeout)(g$1);}function g$1(){for(var n;g$1.__r=t$1.length;)n=t$1.sort(function(n,l){return n.__v.__b-l.__v.__b}),t$1=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=s$1({},t)).__v=t.__v+1,j$1(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?_$1(t):o,t.__h),z$1(u,t),t.__e!=o&&k$1(t)));});}function w$1(n,l,u,i,t,o,r,c,s,a){var h,y,d,k,b,g,w,x=i&&i.__k||e$2,C=x.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(k=u.__k[h]=null==(k=l[h])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k||"bigint"==typeof k?v$1(null,k,null,null,k):Array.isArray(k)?v$1(p$1,{children:k},null,null,null):k.__b>0?v$1(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(d=x[h])||d&&k.key==d.key&&k.type===d.type)x[h]=void 0;else for(y=0;y<C;y++){if((d=x[y])&&k.key==d.key&&k.type===d.type){x[y]=void 0;break}d=null;}j$1(n,k,d=d||f$1,t,o,r,c,s,a),b=k.__e,(y=k.ref)&&d.ref!=y&&(w||(w=[]),d.ref&&w.push(d.ref,null,k),w.push(y,k.__c||b,k)),null!=b?(null==g&&(g=b),"function"==typeof k.type&&k.__k===d.__k?k.__d=s=m$2(k,s,n):s=A$1(n,k,d,x,b,s),"function"==typeof u.type&&(u.__d=s)):s&&d.__e==s&&s.parentNode!=n&&(s=_$1(d));}for(u.__e=g,h=C;h--;)null!=x[h]&&("function"==typeof u.type&&null!=x[h].__e&&x[h].__e==u.__d&&(u.__d=_$1(i,h+1)),N(x[h],x[h]));if(w)for(h=0;h<w.length;h++)M(w[h],w[++h],w[++h]);}function m$2(n,l,u){for(var i,t=n.__k,o=0;t&&o<t.length;o++)(i=t[o])&&(i.__=n,l="function"==typeof i.type?m$2(i,l,u):A$1(u,i,i,t,i.__e,l));return l}function A$1(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else {for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,o),r=o;}return void 0!==r?r:t.nextSibling}function C$1(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||H(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||H(n,o,l[o],u[o],i);}function $(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||c$2.test(l)?u:u+"px";}function H(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||$(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||$(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?T:I,o):n.removeEventListener(l,o?T:I,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l));}}function I(n){this.l[n.type+!1](l$1.event?l$1.event(n):n);}function T(n){this.l[n.type+!0](l$1.event?l$1.event(n):n);}function j$1(n,u,i,t,o,r,f,e,c){var a,h,v,y,_,k,b,g,m,x,A,C,$,H=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(a=l$1.__b)&&a(u);try{n:if("function"==typeof H){if(g=u.props,m=(a=H.contextType)&&t[a.__c],x=a?m?m.props.value:a.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in H&&H.prototype.render?u.__c=h=new H(g,x):(u.__c=h=new d$1(g,x),h.constructor=H,h.render=O),m&&m.sub(h),h.props=g,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=H.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=s$1({},h.__s)),s$1(h.__s,H.getDerivedStateFromProps(g,h.__s))),y=h.props,_=h.state,v)null==H.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(null==H.getDerivedStateFromProps&&g!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(g,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(g,h.__s,x)||u.__v===i.__v){h.props=g,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u);}),h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(g,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,_,k);});}if(h.context=x,h.props=g,h.__v=u,h.__P=n,A=l$1.__r,C=0,"prototype"in H&&H.prototype.render)h.state=h.__s,h.__d=!1,A&&A(u),a=h.render(h.props,h.state,h.context);else do{h.__d=!1,A&&A(u),a=h.render(h.props,h.state,h.context),h.state=h.__s;}while(h.__d&&++C<25);h.state=h.__s,null!=h.getChildContext&&(t=s$1(s$1({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,_)),$=null!=a&&a.type===p$1&&null==a.key?a.props.children:a,w$1(n,Array.isArray($)?$:[$],u,i,t,o,r,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1;}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L(i.__e,u,i,t,o,r,f,c);(a=l$1.diffed)&&a(u);}catch(n){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l$1.__e(n,u,i);}}function z$1(n,u){l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$1.__e(n,u.__v);}});}function L(l,u,i,t,o,r,e,c){var s,h,v,y=i.props,p=u.props,d=u.type,k=0;if("svg"===d&&(o=!0),null!=r)for(;k<r.length;k++)if((s=r[k])&&"setAttribute"in s==!!d&&(d?s.localName===d:3===s.nodeType)){l=s,r[k]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=o?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),r=null,c=!1;}if(null===d)y===p||c&&l.data===p||(l.data=p);else {if(r=r&&n.call(l.childNodes),h=(y=i.props||f$1).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=r)for(y={},k=0;k<l.attributes.length;k++)y[l.attributes[k].name]=l.attributes[k].value;(v||h)&&(v&&(h&&v.__html==h.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""));}if(C$1(l,p,y,o,c),v)u.__k=[];else if(k=u.props.children,w$1(l,Array.isArray(k)?k:[k],u,i,t,o&&"foreignObject"!==d,r,e,r?r[0]:i.__k&&_$1(i,0),c),null!=r)for(k=r.length;k--;)null!=r[k]&&a$2(r[k]);c||("value"in p&&void 0!==(k=p.value)&&(k!==l.value||"progress"===d&&!k||"option"===d&&k!==y.value)&&H(l,"value",k,y.value,!1),"checked"in p&&void 0!==(k=p.checked)&&k!==l.checked&&H(l,"checked",k,y.checked,!1));}return l}function M(n,u,i){try{"function"==typeof n?n(u):n.current=u;}catch(n){l$1.__e(n,i);}}function N(n,u,i){var t,o;if(l$1.unmount&&l$1.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(n){l$1.__e(n,u);}t.base=t.__P=null;}if(t=n.__k)for(o=0;o<t.length;o++)t[o]&&N(t[o],u,"function"!=typeof n.type);i||null==n.__e||a$2(n.__e),n.__e=n.__d=void 0;}function O(n,l,u){return this.constructor(n,u)}function P(u,i,t){var o,r,e;l$1.__&&l$1.__(u,i),r=(o="function"==typeof t)?null:t&&t.__k||i.__k,e=[],j$1(i,u=(!o&&t||i).__k=h(p$1,null,[u]),r||f$1,f$1,void 0!==i.ownerSVGElement,!o&&t?[t]:r?null:i.firstChild?n.call(i.childNodes):null,e,!o&&t?t:r?r.__e:i.firstChild,o),z$1(e,u);}function B$1(n,l){var u={__c:l="__cC"+r$1++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(b$1);},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n);};}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=e$2.slice,l$1={__e:function(n,l,u,i){for(var t,o,r;l=l.__;)if((t=l.__c)&&!t.__)try{if((o=t.constructor)&&null!=o.getDerivedStateFromError&&(t.setState(o.getDerivedStateFromError(n)),r=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(n,i||{}),r=t.__d),r)return t.__E=t}catch(l){n=l;}throw n}},u$1=0,d$1.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=s$1({},this.state),"function"==typeof n&&(n=n(s$1({},u),this.props)),n&&s$1(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),b$1(this));},d$1.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),b$1(this));},d$1.prototype.render=p$1,t$1=[],g$1.__r=0,r$1=0;

    var o$1=0;function e$1(_,e,n,t,f){var l,s,u={};for(s in e)"ref"==s?l=e[s]:u[s]=e[s];var a={type:_,props:u,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--o$1,__source:f,__self:t};if("function"==typeof _&&(l=_.defaultProps))for(s in l)void 0===u[s]&&(u[s]=l[s]);return l$1.vnode&&l$1.vnode(a),a}

    const LABELS = {
        renderedLength: "Rendered",
        gzipLength: "Gzip",
        brotliLength: "Brotli",
    };
    const getAvailableSizeOptions = (options) => {
        const availableSizeProperties = ["renderedLength"];
        if (options.gzip) {
            availableSizeProperties.push("gzipLength");
        }
        if (options.brotli) {
            availableSizeProperties.push("brotliLength");
        }
        return availableSizeProperties;
    };

    var t,u,r,o,i=0,c$1=[],f=[],e=l$1.__b,a$1=l$1.__r,v=l$1.diffed,l=l$1.__c,m$1=l$1.unmount;function p(t,r){l$1.__h&&l$1.__h(u,t,i||r),i=0;var o=u.__H||(u.__H={__:[],__h:[]});return t>=o.__.length&&o.__.push({__V:f}),o.__[t]}function y$2(n){return i=1,d(z,n)}function d(n,r,o){var i=p(t++,2);return i.t=n,i.__c||(i.__=[o?o(r):z(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}));}],i.__c=u),i.__}function _(r,o){var i=p(t++,3);!l$1.__s&&w(i.__H,o)&&(i.__=r,i.u=o,u.__H.__h.push(i));}function s(n){return i=5,F(function(){return {current:n}},[])}function F(n,u){var r=p(t++,7);return w(r.__H,u)?(r.__V=n(),r.u=u,r.__h=n,r.__V):r.__}function q(n){var r=u.context[n.__c],o=p(t++,9);return o.c=n,r?(null==o.__&&(o.__=!0,r.sub(u)),r.props.value):n.__}function b(){for(var t;t=c$1.shift();)if(t.__P)try{t.__H.__h.forEach(j),t.__H.__h.forEach(k),t.__H.__h=[];}catch(u){t.__H.__h=[],l$1.__e(u,t.__v);}}l$1.__b=function(n){u=null,e&&e(n);},l$1.__r=function(n){a$1&&a$1(n),t=0;var o=(u=n.__c).__H;o&&(r===u?(o.__h=[],u.__h=[],o.__.forEach(function(n){n.__V=f,n.u=void 0;})):(o.__h.forEach(j),o.__h.forEach(k),o.__h=[])),r=u;},l$1.diffed=function(t){v&&v(t);var i=t.__c;i&&i.__H&&(i.__H.__h.length&&(1!==c$1.push(i)&&o===l$1.requestAnimationFrame||((o=l$1.requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),g&&cancelAnimationFrame(t),setTimeout(n);},r=setTimeout(u,100);g&&(t=requestAnimationFrame(u));})(b)),i.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.__V!==f&&(n.__=n.__V),n.u=void 0,n.__V=f;})),r=u=null;},l$1.__c=function(t,u){u.some(function(t){try{t.__h.forEach(j),t.__h=t.__h.filter(function(n){return !n.__||k(n)});}catch(r){u.some(function(n){n.__h&&(n.__h=[]);}),u=[],l$1.__e(r,t.__v);}}),l&&l(t,u);},l$1.unmount=function(t){m$1&&m$1(t);var u,r=t.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{j(n);}catch(n){u=n;}}),u&&l$1.__e(u,r.__v));};var g="function"==typeof requestAnimationFrame;function j(n){var t=u,r=n.__c;"function"==typeof r&&(n.__c=void 0,r()),u=t;}function k(n){var t=u;n.__c=n.__(),u=t;}function w(n,t){return !n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function z(n,t){return "function"==typeof t?t(n):t}

    function ascending(a, b) {
      return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
    }

    function descending(a, b) {
      return a == null || b == null ? NaN
        : b < a ? -1
        : b > a ? 1
        : b >= a ? 0
        : NaN;
    }

    function bisector(f) {
      let compare1, compare2, delta;

      // If an accessor is specified, promote it to a comparator. In this case we
      // can test whether the search value is (self-) comparable. We can’t do this
      // for a comparator (except for specific, known comparators) because we can’t
      // tell if the comparator is symmetric, and an asymmetric comparator can’t be
      // used to test whether a single value is comparable.
      if (f.length !== 2) {
        compare1 = ascending;
        compare2 = (d, x) => ascending(f(d), x);
        delta = (d, x) => f(d) - x;
      } else {
        compare1 = f === ascending || f === descending ? f : zero$1;
        compare2 = f;
        delta = f;
      }

      function left(a, x, lo = 0, hi = a.length) {
        if (lo < hi) {
          if (compare1(x, x) !== 0) return hi;
          do {
            const mid = (lo + hi) >>> 1;
            if (compare2(a[mid], x) < 0) lo = mid + 1;
            else hi = mid;
          } while (lo < hi);
        }
        return lo;
      }

      function right(a, x, lo = 0, hi = a.length) {
        if (lo < hi) {
          if (compare1(x, x) !== 0) return hi;
          do {
            const mid = (lo + hi) >>> 1;
            if (compare2(a[mid], x) <= 0) lo = mid + 1;
            else hi = mid;
          } while (lo < hi);
        }
        return lo;
      }

      function center(a, x, lo = 0, hi = a.length) {
        const i = left(a, x, lo, hi - 1);
        return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
      }

      return {left, center, right};
    }

    function zero$1() {
      return 0;
    }

    function number$1(x) {
      return x === null ? NaN : +x;
    }

    const ascendingBisect = bisector(ascending);
    const bisectRight = ascendingBisect.right;
    bisector(number$1).center;

    var e10 = Math.sqrt(50),
        e5 = Math.sqrt(10),
        e2 = Math.sqrt(2);

    function ticks(start, stop, count) {
      var reverse,
          i = -1,
          n,
          ticks,
          step;

      stop = +stop, start = +start, count = +count;
      if (start === stop && count > 0) return [start];
      if (reverse = stop < start) n = start, start = stop, stop = n;
      if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

      if (step > 0) {
        let r0 = Math.round(start / step), r1 = Math.round(stop / step);
        if (r0 * step < start) ++r0;
        if (r1 * step > stop) --r1;
        ticks = new Array(n = r1 - r0 + 1);
        while (++i < n) ticks[i] = (r0 + i) * step;
      } else {
        step = -step;
        let r0 = Math.round(start * step), r1 = Math.round(stop * step);
        if (r0 / step < start) ++r0;
        if (r1 / step > stop) --r1;
        ticks = new Array(n = r1 - r0 + 1);
        while (++i < n) ticks[i] = (r0 + i) / step;
      }

      if (reverse) ticks.reverse();

      return ticks;
    }

    function tickIncrement(start, stop, count) {
      var step = (stop - start) / Math.max(0, count),
          power = Math.floor(Math.log(step) / Math.LN10),
          error = step / Math.pow(10, power);
      return power >= 0
          ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
          : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
    }

    function tickStep(start, stop, count) {
      var step0 = Math.abs(stop - start) / Math.max(0, count),
          step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
          error = step0 / step1;
      if (error >= e10) step1 *= 10;
      else if (error >= e5) step1 *= 5;
      else if (error >= e2) step1 *= 2;
      return stop < start ? -step1 : step1;
    }

    function max(values, valueof) {
      let max;
      if (valueof === undefined) {
        for (const value of values) {
          if (value != null
              && (max < value || (max === undefined && value >= value))) {
            max = value;
          }
        }
      } else {
        let index = -1;
        for (let value of values) {
          if ((value = valueof(value, ++index, values)) != null
              && (max < value || (max === undefined && value >= value))) {
            max = value;
          }
        }
      }
      return max;
    }

    function initRange(domain, range) {
      switch (arguments.length) {
        case 0: break;
        case 1: this.range(domain); break;
        default: this.range(range).domain(domain); break;
      }
      return this;
    }

    function initInterpolator(domain, interpolator) {
      switch (arguments.length) {
        case 0: break;
        case 1: {
          if (typeof domain === "function") this.interpolator(domain);
          else this.range(domain);
          break;
        }
        default: {
          this.domain(domain);
          if (typeof interpolator === "function") this.interpolator(interpolator);
          else this.range(interpolator);
          break;
        }
      }
      return this;
    }

    function define(constructor, factory, prototype) {
      constructor.prototype = factory.prototype = prototype;
      prototype.constructor = constructor;
    }

    function extend(parent, definition) {
      var prototype = Object.create(parent.prototype);
      for (var key in definition) prototype[key] = definition[key];
      return prototype;
    }

    function Color() {}

    var darker = 0.7;
    var brighter = 1 / darker;

    var reI = "\\s*([+-]?\\d+)\\s*",
        reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        reHex = /^#([0-9a-f]{3,8})$/,
        reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`),
        reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`),
        reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`),
        reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`),
        reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`),
        reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);

    var named = {
      aliceblue: 0xf0f8ff,
      antiquewhite: 0xfaebd7,
      aqua: 0x00ffff,
      aquamarine: 0x7fffd4,
      azure: 0xf0ffff,
      beige: 0xf5f5dc,
      bisque: 0xffe4c4,
      black: 0x000000,
      blanchedalmond: 0xffebcd,
      blue: 0x0000ff,
      blueviolet: 0x8a2be2,
      brown: 0xa52a2a,
      burlywood: 0xdeb887,
      cadetblue: 0x5f9ea0,
      chartreuse: 0x7fff00,
      chocolate: 0xd2691e,
      coral: 0xff7f50,
      cornflowerblue: 0x6495ed,
      cornsilk: 0xfff8dc,
      crimson: 0xdc143c,
      cyan: 0x00ffff,
      darkblue: 0x00008b,
      darkcyan: 0x008b8b,
      darkgoldenrod: 0xb8860b,
      darkgray: 0xa9a9a9,
      darkgreen: 0x006400,
      darkgrey: 0xa9a9a9,
      darkkhaki: 0xbdb76b,
      darkmagenta: 0x8b008b,
      darkolivegreen: 0x556b2f,
      darkorange: 0xff8c00,
      darkorchid: 0x9932cc,
      darkred: 0x8b0000,
      darksalmon: 0xe9967a,
      darkseagreen: 0x8fbc8f,
      darkslateblue: 0x483d8b,
      darkslategray: 0x2f4f4f,
      darkslategrey: 0x2f4f4f,
      darkturquoise: 0x00ced1,
      darkviolet: 0x9400d3,
      deeppink: 0xff1493,
      deepskyblue: 0x00bfff,
      dimgray: 0x696969,
      dimgrey: 0x696969,
      dodgerblue: 0x1e90ff,
      firebrick: 0xb22222,
      floralwhite: 0xfffaf0,
      forestgreen: 0x228b22,
      fuchsia: 0xff00ff,
      gainsboro: 0xdcdcdc,
      ghostwhite: 0xf8f8ff,
      gold: 0xffd700,
      goldenrod: 0xdaa520,
      gray: 0x808080,
      green: 0x008000,
      greenyellow: 0xadff2f,
      grey: 0x808080,
      honeydew: 0xf0fff0,
      hotpink: 0xff69b4,
      indianred: 0xcd5c5c,
      indigo: 0x4b0082,
      ivory: 0xfffff0,
      khaki: 0xf0e68c,
      lavender: 0xe6e6fa,
      lavenderblush: 0xfff0f5,
      lawngreen: 0x7cfc00,
      lemonchiffon: 0xfffacd,
      lightblue: 0xadd8e6,
      lightcoral: 0xf08080,
      lightcyan: 0xe0ffff,
      lightgoldenrodyellow: 0xfafad2,
      lightgray: 0xd3d3d3,
      lightgreen: 0x90ee90,
      lightgrey: 0xd3d3d3,
      lightpink: 0xffb6c1,
      lightsalmon: 0xffa07a,
      lightseagreen: 0x20b2aa,
      lightskyblue: 0x87cefa,
      lightslategray: 0x778899,
      lightslategrey: 0x778899,
      lightsteelblue: 0xb0c4de,
      lightyellow: 0xffffe0,
      lime: 0x00ff00,
      limegreen: 0x32cd32,
      linen: 0xfaf0e6,
      magenta: 0xff00ff,
      maroon: 0x800000,
      mediumaquamarine: 0x66cdaa,
      mediumblue: 0x0000cd,
      mediumorchid: 0xba55d3,
      mediumpurple: 0x9370db,
      mediumseagreen: 0x3cb371,
      mediumslateblue: 0x7b68ee,
      mediumspringgreen: 0x00fa9a,
      mediumturquoise: 0x48d1cc,
      mediumvioletred: 0xc71585,
      midnightblue: 0x191970,
      mintcream: 0xf5fffa,
      mistyrose: 0xffe4e1,
      moccasin: 0xffe4b5,
      navajowhite: 0xffdead,
      navy: 0x000080,
      oldlace: 0xfdf5e6,
      olive: 0x808000,
      olivedrab: 0x6b8e23,
      orange: 0xffa500,
      orangered: 0xff4500,
      orchid: 0xda70d6,
      palegoldenrod: 0xeee8aa,
      palegreen: 0x98fb98,
      paleturquoise: 0xafeeee,
      palevioletred: 0xdb7093,
      papayawhip: 0xffefd5,
      peachpuff: 0xffdab9,
      peru: 0xcd853f,
      pink: 0xffc0cb,
      plum: 0xdda0dd,
      powderblue: 0xb0e0e6,
      purple: 0x800080,
      rebeccapurple: 0x663399,
      red: 0xff0000,
      rosybrown: 0xbc8f8f,
      royalblue: 0x4169e1,
      saddlebrown: 0x8b4513,
      salmon: 0xfa8072,
      sandybrown: 0xf4a460,
      seagreen: 0x2e8b57,
      seashell: 0xfff5ee,
      sienna: 0xa0522d,
      silver: 0xc0c0c0,
      skyblue: 0x87ceeb,
      slateblue: 0x6a5acd,
      slategray: 0x708090,
      slategrey: 0x708090,
      snow: 0xfffafa,
      springgreen: 0x00ff7f,
      steelblue: 0x4682b4,
      tan: 0xd2b48c,
      teal: 0x008080,
      thistle: 0xd8bfd8,
      tomato: 0xff6347,
      turquoise: 0x40e0d0,
      violet: 0xee82ee,
      wheat: 0xf5deb3,
      white: 0xffffff,
      whitesmoke: 0xf5f5f5,
      yellow: 0xffff00,
      yellowgreen: 0x9acd32
    };

    define(Color, color, {
      copy(channels) {
        return Object.assign(new this.constructor, this, channels);
      },
      displayable() {
        return this.rgb().displayable();
      },
      hex: color_formatHex, // Deprecated! Use color.formatHex.
      formatHex: color_formatHex,
      formatHex8: color_formatHex8,
      formatHsl: color_formatHsl,
      formatRgb: color_formatRgb,
      toString: color_formatRgb
    });

    function color_formatHex() {
      return this.rgb().formatHex();
    }

    function color_formatHex8() {
      return this.rgb().formatHex8();
    }

    function color_formatHsl() {
      return hslConvert(this).formatHsl();
    }

    function color_formatRgb() {
      return this.rgb().formatRgb();
    }

    function color(format) {
      var m, l;
      format = (format + "").trim().toLowerCase();
      return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
          : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
          : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
          : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
          : null) // invalid hex
          : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
          : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
          : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
          : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
          : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
          : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
          : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
          : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
          : null;
    }

    function rgbn(n) {
      return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
    }

    function rgba(r, g, b, a) {
      if (a <= 0) r = g = b = NaN;
      return new Rgb(r, g, b, a);
    }

    function rgbConvert(o) {
      if (!(o instanceof Color)) o = color(o);
      if (!o) return new Rgb;
      o = o.rgb();
      return new Rgb(o.r, o.g, o.b, o.opacity);
    }

    function rgb$1(r, g, b, opacity) {
      return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
    }

    function Rgb(r, g, b, opacity) {
      this.r = +r;
      this.g = +g;
      this.b = +b;
      this.opacity = +opacity;
    }

    define(Rgb, rgb$1, extend(Color, {
      brighter(k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
      },
      darker(k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
      },
      rgb() {
        return this;
      },
      clamp() {
        return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
      },
      displayable() {
        return (-0.5 <= this.r && this.r < 255.5)
            && (-0.5 <= this.g && this.g < 255.5)
            && (-0.5 <= this.b && this.b < 255.5)
            && (0 <= this.opacity && this.opacity <= 1);
      },
      hex: rgb_formatHex, // Deprecated! Use color.formatHex.
      formatHex: rgb_formatHex,
      formatHex8: rgb_formatHex8,
      formatRgb: rgb_formatRgb,
      toString: rgb_formatRgb
    }));

    function rgb_formatHex() {
      return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
    }

    function rgb_formatHex8() {
      return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
    }

    function rgb_formatRgb() {
      const a = clampa(this.opacity);
      return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
    }

    function clampa(opacity) {
      return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
    }

    function clampi(value) {
      return Math.max(0, Math.min(255, Math.round(value) || 0));
    }

    function hex(value) {
      value = clampi(value);
      return (value < 16 ? "0" : "") + value.toString(16);
    }

    function hsla(h, s, l, a) {
      if (a <= 0) h = s = l = NaN;
      else if (l <= 0 || l >= 1) h = s = NaN;
      else if (s <= 0) h = NaN;
      return new Hsl(h, s, l, a);
    }

    function hslConvert(o) {
      if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
      if (!(o instanceof Color)) o = color(o);
      if (!o) return new Hsl;
      if (o instanceof Hsl) return o;
      o = o.rgb();
      var r = o.r / 255,
          g = o.g / 255,
          b = o.b / 255,
          min = Math.min(r, g, b),
          max = Math.max(r, g, b),
          h = NaN,
          s = max - min,
          l = (max + min) / 2;
      if (s) {
        if (r === max) h = (g - b) / s + (g < b) * 6;
        else if (g === max) h = (b - r) / s + 2;
        else h = (r - g) / s + 4;
        s /= l < 0.5 ? max + min : 2 - max - min;
        h *= 60;
      } else {
        s = l > 0 && l < 1 ? 0 : h;
      }
      return new Hsl(h, s, l, o.opacity);
    }

    function hsl(h, s, l, opacity) {
      return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
    }

    function Hsl(h, s, l, opacity) {
      this.h = +h;
      this.s = +s;
      this.l = +l;
      this.opacity = +opacity;
    }

    define(Hsl, hsl, extend(Color, {
      brighter(k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
      },
      darker(k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
      },
      rgb() {
        var h = this.h % 360 + (this.h < 0) * 360,
            s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
            l = this.l,
            m2 = l + (l < 0.5 ? l : 1 - l) * s,
            m1 = 2 * l - m2;
        return new Rgb(
          hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
          hsl2rgb(h, m1, m2),
          hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
          this.opacity
        );
      },
      clamp() {
        return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
      },
      displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s))
            && (0 <= this.l && this.l <= 1)
            && (0 <= this.opacity && this.opacity <= 1);
      },
      formatHsl() {
        const a = clampa(this.opacity);
        return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
      }
    }));

    function clamph(value) {
      value = (value || 0) % 360;
      return value < 0 ? value + 360 : value;
    }

    function clampt(value) {
      return Math.max(0, Math.min(1, value || 0));
    }

    /* From FvD 13.37, CSS Color Module Level 3 */
    function hsl2rgb(h, m1, m2) {
      return (h < 60 ? m1 + (m2 - m1) * h / 60
          : h < 180 ? m2
          : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
          : m1) * 255;
    }

    const radians = Math.PI / 180;
    const degrees = 180 / Math.PI;

    // https://observablehq.com/@mbostock/lab-and-rgb
    const K = 18,
        Xn = 0.96422,
        Yn = 1,
        Zn = 0.82521,
        t0$1 = 4 / 29,
        t1$1 = 6 / 29,
        t2 = 3 * t1$1 * t1$1,
        t3 = t1$1 * t1$1 * t1$1;

    function labConvert(o) {
      if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
      if (o instanceof Hcl) return hcl2lab(o);
      if (!(o instanceof Rgb)) o = rgbConvert(o);
      var r = rgb2lrgb(o.r),
          g = rgb2lrgb(o.g),
          b = rgb2lrgb(o.b),
          y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn), x, z;
      if (r === g && g === b) x = z = y; else {
        x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
        z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
      }
      return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
    }

    function lab(l, a, b, opacity) {
      return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
    }

    function Lab(l, a, b, opacity) {
      this.l = +l;
      this.a = +a;
      this.b = +b;
      this.opacity = +opacity;
    }

    define(Lab, lab, extend(Color, {
      brighter(k) {
        return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);
      },
      darker(k) {
        return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);
      },
      rgb() {
        var y = (this.l + 16) / 116,
            x = isNaN(this.a) ? y : y + this.a / 500,
            z = isNaN(this.b) ? y : y - this.b / 200;
        x = Xn * lab2xyz(x);
        y = Yn * lab2xyz(y);
        z = Zn * lab2xyz(z);
        return new Rgb(
          lrgb2rgb( 3.1338561 * x - 1.6168667 * y - 0.4906146 * z),
          lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z),
          lrgb2rgb( 0.0719453 * x - 0.2289914 * y + 1.4052427 * z),
          this.opacity
        );
      }
    }));

    function xyz2lab(t) {
      return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0$1;
    }

    function lab2xyz(t) {
      return t > t1$1 ? t * t * t : t2 * (t - t0$1);
    }

    function lrgb2rgb(x) {
      return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
    }

    function rgb2lrgb(x) {
      return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
    }

    function hclConvert(o) {
      if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
      if (!(o instanceof Lab)) o = labConvert(o);
      if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0 < o.l && o.l < 100 ? 0 : NaN, o.l, o.opacity);
      var h = Math.atan2(o.b, o.a) * degrees;
      return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
    }

    function hcl(h, c, l, opacity) {
      return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
    }

    function Hcl(h, c, l, opacity) {
      this.h = +h;
      this.c = +c;
      this.l = +l;
      this.opacity = +opacity;
    }

    function hcl2lab(o) {
      if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
      var h = o.h * radians;
      return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
    }

    define(Hcl, hcl, extend(Color, {
      brighter(k) {
        return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);
      },
      darker(k) {
        return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);
      },
      rgb() {
        return hcl2lab(this).rgb();
      }
    }));

    var A = -0.14861,
        B = +1.78277,
        C = -0.29227,
        D = -0.90649,
        E = +1.97294,
        ED = E * D,
        EB = E * B,
        BC_DA = B * C - D * A;

    function cubehelixConvert(o) {
      if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
      if (!(o instanceof Rgb)) o = rgbConvert(o);
      var r = o.r / 255,
          g = o.g / 255,
          b = o.b / 255,
          l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
          bl = b - l,
          k = (E * (g - l) - C * bl) / D,
          s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
          h = s ? Math.atan2(k, bl) * degrees - 120 : NaN;
      return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
    }

    function cubehelix$1(h, s, l, opacity) {
      return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
    }

    function Cubehelix(h, s, l, opacity) {
      this.h = +h;
      this.s = +s;
      this.l = +l;
      this.opacity = +opacity;
    }

    define(Cubehelix, cubehelix$1, extend(Color, {
      brighter(k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
      },
      darker(k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
      },
      rgb() {
        var h = isNaN(this.h) ? 0 : (this.h + 120) * radians,
            l = +this.l,
            a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
            cosh = Math.cos(h),
            sinh = Math.sin(h);
        return new Rgb(
          255 * (l + a * (A * cosh + B * sinh)),
          255 * (l + a * (C * cosh + D * sinh)),
          255 * (l + a * (E * cosh)),
          this.opacity
        );
      }
    }));

    var constant$1 = x => () => x;

    function linear(a, d) {
      return function(t) {
        return a + t * d;
      };
    }

    function exponential(a, b, y) {
      return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
        return Math.pow(a + t * b, y);
      };
    }

    function hue(a, b) {
      var d = b - a;
      return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant$1(isNaN(a) ? b : a);
    }

    function gamma(y) {
      return (y = +y) === 1 ? nogamma : function(a, b) {
        return b - a ? exponential(a, b, y) : constant$1(isNaN(a) ? b : a);
      };
    }

    function nogamma(a, b) {
      var d = b - a;
      return d ? linear(a, d) : constant$1(isNaN(a) ? b : a);
    }

    var rgb = (function rgbGamma(y) {
      var color = gamma(y);

      function rgb(start, end) {
        var r = color((start = rgb$1(start)).r, (end = rgb$1(end)).r),
            g = color(start.g, end.g),
            b = color(start.b, end.b),
            opacity = nogamma(start.opacity, end.opacity);
        return function(t) {
          start.r = r(t);
          start.g = g(t);
          start.b = b(t);
          start.opacity = opacity(t);
          return start + "";
        };
      }

      rgb.gamma = rgbGamma;

      return rgb;
    })(1);

    function numberArray(a, b) {
      if (!b) b = [];
      var n = a ? Math.min(b.length, a.length) : 0,
          c = b.slice(),
          i;
      return function(t) {
        for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
        return c;
      };
    }

    function isNumberArray(x) {
      return ArrayBuffer.isView(x) && !(x instanceof DataView);
    }

    function genericArray(a, b) {
      var nb = b ? b.length : 0,
          na = a ? Math.min(nb, a.length) : 0,
          x = new Array(na),
          c = new Array(nb),
          i;

      for (i = 0; i < na; ++i) x[i] = interpolate(a[i], b[i]);
      for (; i < nb; ++i) c[i] = b[i];

      return function(t) {
        for (i = 0; i < na; ++i) c[i] = x[i](t);
        return c;
      };
    }

    function date(a, b) {
      var d = new Date;
      return a = +a, b = +b, function(t) {
        return d.setTime(a * (1 - t) + b * t), d;
      };
    }

    function interpolateNumber(a, b) {
      return a = +a, b = +b, function(t) {
        return a * (1 - t) + b * t;
      };
    }

    function object(a, b) {
      var i = {},
          c = {},
          k;

      if (a === null || typeof a !== "object") a = {};
      if (b === null || typeof b !== "object") b = {};

      for (k in b) {
        if (k in a) {
          i[k] = interpolate(a[k], b[k]);
        } else {
          c[k] = b[k];
        }
      }

      return function(t) {
        for (k in i) c[k] = i[k](t);
        return c;
      };
    }

    var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        reB = new RegExp(reA.source, "g");

    function zero(b) {
      return function() {
        return b;
      };
    }

    function one(b) {
      return function(t) {
        return b(t) + "";
      };
    }

    function string(a, b) {
      var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
          am, // current match in a
          bm, // current match in b
          bs, // string preceding current number in b, if any
          i = -1, // index in s
          s = [], // string constants and placeholders
          q = []; // number interpolators

      // Coerce inputs to strings.
      a = a + "", b = b + "";

      // Interpolate pairs of numbers in a & b.
      while ((am = reA.exec(a))
          && (bm = reB.exec(b))) {
        if ((bs = bm.index) > bi) { // a string precedes the next number in b
          bs = b.slice(bi, bs);
          if (s[i]) s[i] += bs; // coalesce with previous string
          else s[++i] = bs;
        }
        if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
          if (s[i]) s[i] += bm; // coalesce with previous string
          else s[++i] = bm;
        } else { // interpolate non-matching numbers
          s[++i] = null;
          q.push({i: i, x: interpolateNumber(am, bm)});
        }
        bi = reB.lastIndex;
      }

      // Add remains of b.
      if (bi < b.length) {
        bs = b.slice(bi);
        if (s[i]) s[i] += bs; // coalesce with previous string
        else s[++i] = bs;
      }

      // Special optimization for only a single match.
      // Otherwise, interpolate each of the numbers and rejoin the string.
      return s.length < 2 ? (q[0]
          ? one(q[0].x)
          : zero(b))
          : (b = q.length, function(t) {
              for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
              return s.join("");
            });
    }

    function interpolate(a, b) {
      var t = typeof b, c;
      return b == null || t === "boolean" ? constant$1(b)
          : (t === "number" ? interpolateNumber
          : t === "string" ? ((c = color(b)) ? (b = c, rgb) : string)
          : b instanceof color ? rgb
          : b instanceof Date ? date
          : isNumberArray(b) ? numberArray
          : Array.isArray(b) ? genericArray
          : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object
          : interpolateNumber)(a, b);
    }

    function interpolateRound(a, b) {
      return a = +a, b = +b, function(t) {
        return Math.round(a * (1 - t) + b * t);
      };
    }

    var epsilon2 = 1e-12;

    function cosh(x) {
      return ((x = Math.exp(x)) + 1 / x) / 2;
    }

    function sinh(x) {
      return ((x = Math.exp(x)) - 1 / x) / 2;
    }

    function tanh(x) {
      return ((x = Math.exp(2 * x)) - 1) / (x + 1);
    }

    ((function zoomRho(rho, rho2, rho4) {

      // p0 = [ux0, uy0, w0]
      // p1 = [ux1, uy1, w1]
      function zoom(p0, p1) {
        var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
            ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
            dx = ux1 - ux0,
            dy = uy1 - uy0,
            d2 = dx * dx + dy * dy,
            i,
            S;

        // Special case for u0 ≅ u1.
        if (d2 < epsilon2) {
          S = Math.log(w1 / w0) / rho;
          i = function(t) {
            return [
              ux0 + t * dx,
              uy0 + t * dy,
              w0 * Math.exp(rho * t * S)
            ];
          };
        }

        // General case.
        else {
          var d1 = Math.sqrt(d2),
              b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
              b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
              r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
              r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
          S = (r1 - r0) / rho;
          i = function(t) {
            var s = t * S,
                coshr0 = cosh(r0),
                u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
            return [
              ux0 + u * dx,
              uy0 + u * dy,
              w0 * coshr0 / cosh(rho * s + r0)
            ];
          };
        }

        i.duration = S * 1000 * rho / Math.SQRT2;

        return i;
      }

      zoom.rho = function(_) {
        var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
        return zoomRho(_1, _2, _4);
      };

      return zoom;
    }))(Math.SQRT2, 2, 4);

    function cubehelix(hue) {
      return (function cubehelixGamma(y) {
        y = +y;

        function cubehelix(start, end) {
          var h = hue((start = cubehelix$1(start)).h, (end = cubehelix$1(end)).h),
              s = nogamma(start.s, end.s),
              l = nogamma(start.l, end.l),
              opacity = nogamma(start.opacity, end.opacity);
          return function(t) {
            start.h = h(t);
            start.s = s(t);
            start.l = l(Math.pow(t, y));
            start.opacity = opacity(t);
            return start + "";
          };
        }

        cubehelix.gamma = cubehelixGamma;

        return cubehelix;
      })(1);
    }

    cubehelix(hue);
    cubehelix(nogamma);

    function constants(x) {
      return function() {
        return x;
      };
    }

    function number(x) {
      return +x;
    }

    var unit = [0, 1];

    function identity$1(x) {
      return x;
    }

    function normalize(a, b) {
      return (b -= (a = +a))
          ? function(x) { return (x - a) / b; }
          : constants(isNaN(b) ? NaN : 0.5);
    }

    function clamper(a, b) {
      var t;
      if (a > b) t = a, a = b, b = t;
      return function(x) { return Math.max(a, Math.min(b, x)); };
    }

    // normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
    // interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
    function bimap(domain, range, interpolate) {
      var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
      if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
      else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
      return function(x) { return r0(d0(x)); };
    }

    function polymap(domain, range, interpolate) {
      var j = Math.min(domain.length, range.length) - 1,
          d = new Array(j),
          r = new Array(j),
          i = -1;

      // Reverse descending domains.
      if (domain[j] < domain[0]) {
        domain = domain.slice().reverse();
        range = range.slice().reverse();
      }

      while (++i < j) {
        d[i] = normalize(domain[i], domain[i + 1]);
        r[i] = interpolate(range[i], range[i + 1]);
      }

      return function(x) {
        var i = bisectRight(domain, x, 1, j) - 1;
        return r[i](d[i](x));
      };
    }

    function copy$1(source, target) {
      return target
          .domain(source.domain())
          .range(source.range())
          .interpolate(source.interpolate())
          .clamp(source.clamp())
          .unknown(source.unknown());
    }

    function transformer$1() {
      var domain = unit,
          range = unit,
          interpolate$1 = interpolate,
          transform,
          untransform,
          unknown,
          clamp = identity$1,
          piecewise,
          output,
          input;

      function rescale() {
        var n = Math.min(domain.length, range.length);
        if (clamp !== identity$1) clamp = clamper(domain[0], domain[n - 1]);
        piecewise = n > 2 ? polymap : bimap;
        output = input = null;
        return scale;
      }

      function scale(x) {
        return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate$1)))(transform(clamp(x)));
      }

      scale.invert = function(y) {
        return clamp(untransform((input || (input = piecewise(range, domain.map(transform), interpolateNumber)))(y)));
      };

      scale.domain = function(_) {
        return arguments.length ? (domain = Array.from(_, number), rescale()) : domain.slice();
      };

      scale.range = function(_) {
        return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
      };

      scale.rangeRound = function(_) {
        return range = Array.from(_), interpolate$1 = interpolateRound, rescale();
      };

      scale.clamp = function(_) {
        return arguments.length ? (clamp = _ ? true : identity$1, rescale()) : clamp !== identity$1;
      };

      scale.interpolate = function(_) {
        return arguments.length ? (interpolate$1 = _, rescale()) : interpolate$1;
      };

      scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
      };

      return function(t, u) {
        transform = t, untransform = u;
        return rescale();
      };
    }

    function formatDecimal(x) {
      return Math.abs(x = Math.round(x)) >= 1e21
          ? x.toLocaleString("en").replace(/,/g, "")
          : x.toString(10);
    }

    // Computes the decimal coefficient and exponent of the specified number x with
    // significant digits p, where x is positive and p is in [1, 21] or undefined.
    // For example, formatDecimalParts(1.23) returns ["123", 0].
    function formatDecimalParts(x, p) {
      if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
      var i, coefficient = x.slice(0, i);

      // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
      // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
      return [
        coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
        +x.slice(i + 1)
      ];
    }

    function exponent(x) {
      return x = formatDecimalParts(Math.abs(x)), x ? x[1] : NaN;
    }

    function formatGroup(grouping, thousands) {
      return function(value, width) {
        var i = value.length,
            t = [],
            j = 0,
            g = grouping[0],
            length = 0;

        while (i > 0 && g > 0) {
          if (length + g + 1 > width) g = Math.max(1, width - length);
          t.push(value.substring(i -= g, i + g));
          if ((length += g + 1) > width) break;
          g = grouping[j = (j + 1) % grouping.length];
        }

        return t.reverse().join(thousands);
      };
    }

    function formatNumerals(numerals) {
      return function(value) {
        return value.replace(/[0-9]/g, function(i) {
          return numerals[+i];
        });
      };
    }

    // [[fill]align][sign][symbol][0][width][,][.precision][~][type]
    var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function formatSpecifier(specifier) {
      if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
      var match;
      return new FormatSpecifier({
        fill: match[1],
        align: match[2],
        sign: match[3],
        symbol: match[4],
        zero: match[5],
        width: match[6],
        comma: match[7],
        precision: match[8] && match[8].slice(1),
        trim: match[9],
        type: match[10]
      });
    }

    formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

    function FormatSpecifier(specifier) {
      this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
      this.align = specifier.align === undefined ? ">" : specifier.align + "";
      this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
      this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
      this.zero = !!specifier.zero;
      this.width = specifier.width === undefined ? undefined : +specifier.width;
      this.comma = !!specifier.comma;
      this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
      this.trim = !!specifier.trim;
      this.type = specifier.type === undefined ? "" : specifier.type + "";
    }

    FormatSpecifier.prototype.toString = function() {
      return this.fill
          + this.align
          + this.sign
          + this.symbol
          + (this.zero ? "0" : "")
          + (this.width === undefined ? "" : Math.max(1, this.width | 0))
          + (this.comma ? "," : "")
          + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0))
          + (this.trim ? "~" : "")
          + this.type;
    };

    // Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
    function formatTrim(s) {
      out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
        switch (s[i]) {
          case ".": i0 = i1 = i; break;
          case "0": if (i0 === 0) i0 = i; i1 = i; break;
          default: if (!+s[i]) break out; if (i0 > 0) i0 = 0; break;
        }
      }
      return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
    }

    var prefixExponent;

    function formatPrefixAuto(x, p) {
      var d = formatDecimalParts(x, p);
      if (!d) return x + "";
      var coefficient = d[0],
          exponent = d[1],
          i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
          n = coefficient.length;
      return i === n ? coefficient
          : i > n ? coefficient + new Array(i - n + 1).join("0")
          : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
          : "0." + new Array(1 - i).join("0") + formatDecimalParts(x, Math.max(0, p + i - 1))[0]; // less than 1y!
    }

    function formatRounded(x, p) {
      var d = formatDecimalParts(x, p);
      if (!d) return x + "";
      var coefficient = d[0],
          exponent = d[1];
      return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
          : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
          : coefficient + new Array(exponent - coefficient.length + 2).join("0");
    }

    var formatTypes = {
      "%": (x, p) => (x * 100).toFixed(p),
      "b": (x) => Math.round(x).toString(2),
      "c": (x) => x + "",
      "d": formatDecimal,
      "e": (x, p) => x.toExponential(p),
      "f": (x, p) => x.toFixed(p),
      "g": (x, p) => x.toPrecision(p),
      "o": (x) => Math.round(x).toString(8),
      "p": (x, p) => formatRounded(x * 100, p),
      "r": formatRounded,
      "s": formatPrefixAuto,
      "X": (x) => Math.round(x).toString(16).toUpperCase(),
      "x": (x) => Math.round(x).toString(16)
    };

    function identity(x) {
      return x;
    }

    var map = Array.prototype.map,
        prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

    function formatLocale$1(locale) {
      var group = locale.grouping === undefined || locale.thousands === undefined ? identity : formatGroup(map.call(locale.grouping, Number), locale.thousands + ""),
          currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "",
          currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "",
          decimal = locale.decimal === undefined ? "." : locale.decimal + "",
          numerals = locale.numerals === undefined ? identity : formatNumerals(map.call(locale.numerals, String)),
          percent = locale.percent === undefined ? "%" : locale.percent + "",
          minus = locale.minus === undefined ? "−" : locale.minus + "",
          nan = locale.nan === undefined ? "NaN" : locale.nan + "";

      function newFormat(specifier) {
        specifier = formatSpecifier(specifier);

        var fill = specifier.fill,
            align = specifier.align,
            sign = specifier.sign,
            symbol = specifier.symbol,
            zero = specifier.zero,
            width = specifier.width,
            comma = specifier.comma,
            precision = specifier.precision,
            trim = specifier.trim,
            type = specifier.type;

        // The "n" type is an alias for ",g".
        if (type === "n") comma = true, type = "g";

        // The "" type, and any invalid type, is an alias for ".12~g".
        else if (!formatTypes[type]) precision === undefined && (precision = 12), trim = true, type = "g";

        // If zero fill is specified, padding goes after sign and before digits.
        if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

        // Compute the prefix and suffix.
        // For SI-prefix, the suffix is lazily computed.
        var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
            suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";

        // What format function should we use?
        // Is this an integer type?
        // Can this type generate exponential notation?
        var formatType = formatTypes[type],
            maybeSuffix = /[defgprs%]/.test(type);

        // Set the default precision if not specified,
        // or clamp the specified precision to the supported range.
        // For significant precision, it must be in [1, 21].
        // For fixed precision, it must be in [0, 20].
        precision = precision === undefined ? 6
            : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
            : Math.max(0, Math.min(20, precision));

        function format(value) {
          var valuePrefix = prefix,
              valueSuffix = suffix,
              i, n, c;

          if (type === "c") {
            valueSuffix = formatType(value) + valueSuffix;
            value = "";
          } else {
            value = +value;

            // Determine the sign. -0 is not less than 0, but 1 / -0 is!
            var valueNegative = value < 0 || 1 / value < 0;

            // Perform the initial formatting.
            value = isNaN(value) ? nan : formatType(Math.abs(value), precision);

            // Trim insignificant zeros.
            if (trim) value = formatTrim(value);

            // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.
            if (valueNegative && +value === 0 && sign !== "+") valueNegative = false;

            // Compute the prefix and suffix.
            valuePrefix = (valueNegative ? (sign === "(" ? sign : minus) : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
            valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

            // Break the formatted value into the integer “value” part that can be
            // grouped, and fractional or exponential “suffix” part that is not.
            if (maybeSuffix) {
              i = -1, n = value.length;
              while (++i < n) {
                if (c = value.charCodeAt(i), 48 > c || c > 57) {
                  valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
                  value = value.slice(0, i);
                  break;
                }
              }
            }
          }

          // If the fill character is not "0", grouping is applied before padding.
          if (comma && !zero) value = group(value, Infinity);

          // Compute the padding.
          var length = valuePrefix.length + value.length + valueSuffix.length,
              padding = length < width ? new Array(width - length + 1).join(fill) : "";

          // If the fill character is "0", grouping is applied after padding.
          if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

          // Reconstruct the final output based on the desired alignment.
          switch (align) {
            case "<": value = valuePrefix + value + valueSuffix + padding; break;
            case "=": value = valuePrefix + padding + value + valueSuffix; break;
            case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
            default: value = padding + valuePrefix + value + valueSuffix; break;
          }

          return numerals(value);
        }

        format.toString = function() {
          return specifier + "";
        };

        return format;
      }

      function formatPrefix(specifier, value) {
        var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)),
            e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3,
            k = Math.pow(10, -e),
            prefix = prefixes[8 + e / 3];
        return function(value) {
          return f(k * value) + prefix;
        };
      }

      return {
        format: newFormat,
        formatPrefix: formatPrefix
      };
    }

    var locale$1;
    var format;
    var formatPrefix;

    defaultLocale$1({
      thousands: ",",
      grouping: [3],
      currency: ["$", ""]
    });

    function defaultLocale$1(definition) {
      locale$1 = formatLocale$1(definition);
      format = locale$1.format;
      formatPrefix = locale$1.formatPrefix;
      return locale$1;
    }

    function precisionFixed(step) {
      return Math.max(0, -exponent(Math.abs(step)));
    }

    function precisionPrefix(step, value) {
      return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3 - exponent(Math.abs(step)));
    }

    function precisionRound(step, max) {
      step = Math.abs(step), max = Math.abs(max) - step;
      return Math.max(0, exponent(max) - exponent(step)) + 1;
    }

    function tickFormat(start, stop, count, specifier) {
      var step = tickStep(start, stop, count),
          precision;
      specifier = formatSpecifier(specifier == null ? ",f" : specifier);
      switch (specifier.type) {
        case "s": {
          var value = Math.max(Math.abs(start), Math.abs(stop));
          if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value))) specifier.precision = precision;
          return formatPrefix(specifier, value);
        }
        case "":
        case "e":
        case "g":
        case "p":
        case "r": {
          if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
          break;
        }
        case "f":
        case "%": {
          if (specifier.precision == null && !isNaN(precision = precisionFixed(step))) specifier.precision = precision - (specifier.type === "%") * 2;
          break;
        }
      }
      return format(specifier);
    }

    function linearish(scale) {
      var domain = scale.domain;

      scale.ticks = function(count) {
        var d = domain();
        return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
      };

      scale.tickFormat = function(count, specifier) {
        var d = domain();
        return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
      };

      scale.nice = function(count) {
        if (count == null) count = 10;

        var d = domain();
        var i0 = 0;
        var i1 = d.length - 1;
        var start = d[i0];
        var stop = d[i1];
        var prestep;
        var step;
        var maxIter = 10;

        if (stop < start) {
          step = start, start = stop, stop = step;
          step = i0, i0 = i1, i1 = step;
        }
        
        while (maxIter-- > 0) {
          step = tickIncrement(start, stop, count);
          if (step === prestep) {
            d[i0] = start;
            d[i1] = stop;
            return domain(d);
          } else if (step > 0) {
            start = Math.floor(start / step) * step;
            stop = Math.ceil(stop / step) * step;
          } else if (step < 0) {
            start = Math.ceil(start * step) / step;
            stop = Math.floor(stop * step) / step;
          } else {
            break;
          }
          prestep = step;
        }

        return scale;
      };

      return scale;
    }

    function transformPow(exponent) {
      return function(x) {
        return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
      };
    }

    function transformSqrt(x) {
      return x < 0 ? -Math.sqrt(-x) : Math.sqrt(x);
    }

    function transformSquare(x) {
      return x < 0 ? -x * x : x * x;
    }

    function powish(transform) {
      var scale = transform(identity$1, identity$1),
          exponent = 1;

      function rescale() {
        return exponent === 1 ? transform(identity$1, identity$1)
            : exponent === 0.5 ? transform(transformSqrt, transformSquare)
            : transform(transformPow(exponent), transformPow(1 / exponent));
      }

      scale.exponent = function(_) {
        return arguments.length ? (exponent = +_, rescale()) : exponent;
      };

      return linearish(scale);
    }

    function pow() {
      var scale = powish(transformer$1());

      scale.copy = function() {
        return copy$1(scale, pow()).exponent(scale.exponent());
      };

      initRange.apply(scale, arguments);

      return scale;
    }

    function sqrt() {
      return pow.apply(null, arguments).exponent(0.5);
    }

    var t0 = new Date,
        t1 = new Date;

    function newInterval(floori, offseti, count, field) {

      function interval(date) {
        return floori(date = arguments.length === 0 ? new Date : new Date(+date)), date;
      }

      interval.floor = function(date) {
        return floori(date = new Date(+date)), date;
      };

      interval.ceil = function(date) {
        return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
      };

      interval.round = function(date) {
        var d0 = interval(date),
            d1 = interval.ceil(date);
        return date - d0 < d1 - date ? d0 : d1;
      };

      interval.offset = function(date, step) {
        return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
      };

      interval.range = function(start, stop, step) {
        var range = [], previous;
        start = interval.ceil(start);
        step = step == null ? 1 : Math.floor(step);
        if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
        do range.push(previous = new Date(+start)), offseti(start, step), floori(start);
        while (previous < start && start < stop);
        return range;
      };

      interval.filter = function(test) {
        return newInterval(function(date) {
          if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
        }, function(date, step) {
          if (date >= date) {
            if (step < 0) while (++step <= 0) {
              while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty
            } else while (--step >= 0) {
              while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty
            }
          }
        });
      };

      if (count) {
        interval.count = function(start, end) {
          t0.setTime(+start), t1.setTime(+end);
          floori(t0), floori(t1);
          return Math.floor(count(t0, t1));
        };

        interval.every = function(step) {
          step = Math.floor(step);
          return !isFinite(step) || !(step > 0) ? null
              : !(step > 1) ? interval
              : interval.filter(field
                  ? function(d) { return field(d) % step === 0; }
                  : function(d) { return interval.count(0, d) % step === 0; });
        };
      }

      return interval;
    }

    var millisecond = newInterval(function() {
      // noop
    }, function(date, step) {
      date.setTime(+date + step);
    }, function(start, end) {
      return end - start;
    });

    // An optimized implementation for this simple case.
    millisecond.every = function(k) {
      k = Math.floor(k);
      if (!isFinite(k) || !(k > 0)) return null;
      if (!(k > 1)) return millisecond;
      return newInterval(function(date) {
        date.setTime(Math.floor(date / k) * k);
      }, function(date, step) {
        date.setTime(+date + step * k);
      }, function(start, end) {
        return (end - start) / k;
      });
    };
    millisecond.range;

    const durationSecond = 1000;
    const durationMinute = durationSecond * 60;
    const durationHour = durationMinute * 60;
    const durationDay = durationHour * 24;
    const durationWeek = durationDay * 7;

    var second = newInterval(function(date) {
      date.setTime(date - date.getMilliseconds());
    }, function(date, step) {
      date.setTime(+date + step * durationSecond);
    }, function(start, end) {
      return (end - start) / durationSecond;
    }, function(date) {
      return date.getUTCSeconds();
    });
    second.range;

    var minute = newInterval(function(date) {
      date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond);
    }, function(date, step) {
      date.setTime(+date + step * durationMinute);
    }, function(start, end) {
      return (end - start) / durationMinute;
    }, function(date) {
      return date.getMinutes();
    });
    minute.range;

    var hour = newInterval(function(date) {
      date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond - date.getMinutes() * durationMinute);
    }, function(date, step) {
      date.setTime(+date + step * durationHour);
    }, function(start, end) {
      return (end - start) / durationHour;
    }, function(date) {
      return date.getHours();
    });
    hour.range;

    var day = newInterval(
      date => date.setHours(0, 0, 0, 0),
      (date, step) => date.setDate(date.getDate() + step),
      (start, end) => (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay,
      date => date.getDate() - 1
    );
    day.range;

    function weekday(i) {
      return newInterval(function(date) {
        date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
        date.setHours(0, 0, 0, 0);
      }, function(date, step) {
        date.setDate(date.getDate() + step * 7);
      }, function(start, end) {
        return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationWeek;
      });
    }

    var sunday = weekday(0);
    var monday = weekday(1);
    var tuesday = weekday(2);
    var wednesday = weekday(3);
    var thursday = weekday(4);
    var friday = weekday(5);
    var saturday = weekday(6);

    sunday.range;
    monday.range;
    tuesday.range;
    wednesday.range;
    thursday.range;
    friday.range;
    saturday.range;

    var month = newInterval(function(date) {
      date.setDate(1);
      date.setHours(0, 0, 0, 0);
    }, function(date, step) {
      date.setMonth(date.getMonth() + step);
    }, function(start, end) {
      return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
    }, function(date) {
      return date.getMonth();
    });
    month.range;

    var year = newInterval(function(date) {
      date.setMonth(0, 1);
      date.setHours(0, 0, 0, 0);
    }, function(date, step) {
      date.setFullYear(date.getFullYear() + step);
    }, function(start, end) {
      return end.getFullYear() - start.getFullYear();
    }, function(date) {
      return date.getFullYear();
    });

    // An optimized implementation for this simple case.
    year.every = function(k) {
      return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function(date) {
        date.setFullYear(Math.floor(date.getFullYear() / k) * k);
        date.setMonth(0, 1);
        date.setHours(0, 0, 0, 0);
      }, function(date, step) {
        date.setFullYear(date.getFullYear() + step * k);
      });
    };
    year.range;

    var utcMinute = newInterval(function(date) {
      date.setUTCSeconds(0, 0);
    }, function(date, step) {
      date.setTime(+date + step * durationMinute);
    }, function(start, end) {
      return (end - start) / durationMinute;
    }, function(date) {
      return date.getUTCMinutes();
    });
    utcMinute.range;

    var utcHour = newInterval(function(date) {
      date.setUTCMinutes(0, 0, 0);
    }, function(date, step) {
      date.setTime(+date + step * durationHour);
    }, function(start, end) {
      return (end - start) / durationHour;
    }, function(date) {
      return date.getUTCHours();
    });
    utcHour.range;

    var utcDay = newInterval(function(date) {
      date.setUTCHours(0, 0, 0, 0);
    }, function(date, step) {
      date.setUTCDate(date.getUTCDate() + step);
    }, function(start, end) {
      return (end - start) / durationDay;
    }, function(date) {
      return date.getUTCDate() - 1;
    });
    utcDay.range;

    function utcWeekday(i) {
      return newInterval(function(date) {
        date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
        date.setUTCHours(0, 0, 0, 0);
      }, function(date, step) {
        date.setUTCDate(date.getUTCDate() + step * 7);
      }, function(start, end) {
        return (end - start) / durationWeek;
      });
    }

    var utcSunday = utcWeekday(0);
    var utcMonday = utcWeekday(1);
    var utcTuesday = utcWeekday(2);
    var utcWednesday = utcWeekday(3);
    var utcThursday = utcWeekday(4);
    var utcFriday = utcWeekday(5);
    var utcSaturday = utcWeekday(6);

    utcSunday.range;
    utcMonday.range;
    utcTuesday.range;
    utcWednesday.range;
    utcThursday.range;
    utcFriday.range;
    utcSaturday.range;

    var utcMonth = newInterval(function(date) {
      date.setUTCDate(1);
      date.setUTCHours(0, 0, 0, 0);
    }, function(date, step) {
      date.setUTCMonth(date.getUTCMonth() + step);
    }, function(start, end) {
      return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
    }, function(date) {
      return date.getUTCMonth();
    });
    utcMonth.range;

    var utcYear = newInterval(function(date) {
      date.setUTCMonth(0, 1);
      date.setUTCHours(0, 0, 0, 0);
    }, function(date, step) {
      date.setUTCFullYear(date.getUTCFullYear() + step);
    }, function(start, end) {
      return end.getUTCFullYear() - start.getUTCFullYear();
    }, function(date) {
      return date.getUTCFullYear();
    });

    // An optimized implementation for this simple case.
    utcYear.every = function(k) {
      return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function(date) {
        date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
        date.setUTCMonth(0, 1);
        date.setUTCHours(0, 0, 0, 0);
      }, function(date, step) {
        date.setUTCFullYear(date.getUTCFullYear() + step * k);
      });
    };
    utcYear.range;

    function localDate(d) {
      if (0 <= d.y && d.y < 100) {
        var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
        date.setFullYear(d.y);
        return date;
      }
      return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
    }

    function utcDate(d) {
      if (0 <= d.y && d.y < 100) {
        var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
        date.setUTCFullYear(d.y);
        return date;
      }
      return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
    }

    function newDate(y, m, d) {
      return {y: y, m: m, d: d, H: 0, M: 0, S: 0, L: 0};
    }

    function formatLocale(locale) {
      var locale_dateTime = locale.dateTime,
          locale_date = locale.date,
          locale_time = locale.time,
          locale_periods = locale.periods,
          locale_weekdays = locale.days,
          locale_shortWeekdays = locale.shortDays,
          locale_months = locale.months,
          locale_shortMonths = locale.shortMonths;

      var periodRe = formatRe(locale_periods),
          periodLookup = formatLookup(locale_periods),
          weekdayRe = formatRe(locale_weekdays),
          weekdayLookup = formatLookup(locale_weekdays),
          shortWeekdayRe = formatRe(locale_shortWeekdays),
          shortWeekdayLookup = formatLookup(locale_shortWeekdays),
          monthRe = formatRe(locale_months),
          monthLookup = formatLookup(locale_months),
          shortMonthRe = formatRe(locale_shortMonths),
          shortMonthLookup = formatLookup(locale_shortMonths);

      var formats = {
        "a": formatShortWeekday,
        "A": formatWeekday,
        "b": formatShortMonth,
        "B": formatMonth,
        "c": null,
        "d": formatDayOfMonth,
        "e": formatDayOfMonth,
        "f": formatMicroseconds,
        "g": formatYearISO,
        "G": formatFullYearISO,
        "H": formatHour24,
        "I": formatHour12,
        "j": formatDayOfYear,
        "L": formatMilliseconds,
        "m": formatMonthNumber,
        "M": formatMinutes,
        "p": formatPeriod,
        "q": formatQuarter,
        "Q": formatUnixTimestamp,
        "s": formatUnixTimestampSeconds,
        "S": formatSeconds,
        "u": formatWeekdayNumberMonday,
        "U": formatWeekNumberSunday,
        "V": formatWeekNumberISO,
        "w": formatWeekdayNumberSunday,
        "W": formatWeekNumberMonday,
        "x": null,
        "X": null,
        "y": formatYear,
        "Y": formatFullYear,
        "Z": formatZone,
        "%": formatLiteralPercent
      };

      var utcFormats = {
        "a": formatUTCShortWeekday,
        "A": formatUTCWeekday,
        "b": formatUTCShortMonth,
        "B": formatUTCMonth,
        "c": null,
        "d": formatUTCDayOfMonth,
        "e": formatUTCDayOfMonth,
        "f": formatUTCMicroseconds,
        "g": formatUTCYearISO,
        "G": formatUTCFullYearISO,
        "H": formatUTCHour24,
        "I": formatUTCHour12,
        "j": formatUTCDayOfYear,
        "L": formatUTCMilliseconds,
        "m": formatUTCMonthNumber,
        "M": formatUTCMinutes,
        "p": formatUTCPeriod,
        "q": formatUTCQuarter,
        "Q": formatUnixTimestamp,
        "s": formatUnixTimestampSeconds,
        "S": formatUTCSeconds,
        "u": formatUTCWeekdayNumberMonday,
        "U": formatUTCWeekNumberSunday,
        "V": formatUTCWeekNumberISO,
        "w": formatUTCWeekdayNumberSunday,
        "W": formatUTCWeekNumberMonday,
        "x": null,
        "X": null,
        "y": formatUTCYear,
        "Y": formatUTCFullYear,
        "Z": formatUTCZone,
        "%": formatLiteralPercent
      };

      var parses = {
        "a": parseShortWeekday,
        "A": parseWeekday,
        "b": parseShortMonth,
        "B": parseMonth,
        "c": parseLocaleDateTime,
        "d": parseDayOfMonth,
        "e": parseDayOfMonth,
        "f": parseMicroseconds,
        "g": parseYear,
        "G": parseFullYear,
        "H": parseHour24,
        "I": parseHour24,
        "j": parseDayOfYear,
        "L": parseMilliseconds,
        "m": parseMonthNumber,
        "M": parseMinutes,
        "p": parsePeriod,
        "q": parseQuarter,
        "Q": parseUnixTimestamp,
        "s": parseUnixTimestampSeconds,
        "S": parseSeconds,
        "u": parseWeekdayNumberMonday,
        "U": parseWeekNumberSunday,
        "V": parseWeekNumberISO,
        "w": parseWeekdayNumberSunday,
        "W": parseWeekNumberMonday,
        "x": parseLocaleDate,
        "X": parseLocaleTime,
        "y": parseYear,
        "Y": parseFullYear,
        "Z": parseZone,
        "%": parseLiteralPercent
      };

      // These recursive directive definitions must be deferred.
      formats.x = newFormat(locale_date, formats);
      formats.X = newFormat(locale_time, formats);
      formats.c = newFormat(locale_dateTime, formats);
      utcFormats.x = newFormat(locale_date, utcFormats);
      utcFormats.X = newFormat(locale_time, utcFormats);
      utcFormats.c = newFormat(locale_dateTime, utcFormats);

      function newFormat(specifier, formats) {
        return function(date) {
          var string = [],
              i = -1,
              j = 0,
              n = specifier.length,
              c,
              pad,
              format;

          if (!(date instanceof Date)) date = new Date(+date);

          while (++i < n) {
            if (specifier.charCodeAt(i) === 37) {
              string.push(specifier.slice(j, i));
              if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
              else pad = c === "e" ? " " : "0";
              if (format = formats[c]) c = format(date, pad);
              string.push(c);
              j = i + 1;
            }
          }

          string.push(specifier.slice(j, i));
          return string.join("");
        };
      }

      function newParse(specifier, Z) {
        return function(string) {
          var d = newDate(1900, undefined, 1),
              i = parseSpecifier(d, specifier, string += "", 0),
              week, day$1;
          if (i != string.length) return null;

          // If a UNIX timestamp is specified, return it.
          if ("Q" in d) return new Date(d.Q);
          if ("s" in d) return new Date(d.s * 1000 + ("L" in d ? d.L : 0));

          // If this is utcParse, never use the local timezone.
          if (Z && !("Z" in d)) d.Z = 0;

          // The am-pm flag is 0 for AM, and 1 for PM.
          if ("p" in d) d.H = d.H % 12 + d.p * 12;

          // If the month was not specified, inherit from the quarter.
          if (d.m === undefined) d.m = "q" in d ? d.q : 0;

          // Convert day-of-week and week-of-year to day-of-year.
          if ("V" in d) {
            if (d.V < 1 || d.V > 53) return null;
            if (!("w" in d)) d.w = 1;
            if ("Z" in d) {
              week = utcDate(newDate(d.y, 0, 1)), day$1 = week.getUTCDay();
              week = day$1 > 4 || day$1 === 0 ? utcMonday.ceil(week) : utcMonday(week);
              week = utcDay.offset(week, (d.V - 1) * 7);
              d.y = week.getUTCFullYear();
              d.m = week.getUTCMonth();
              d.d = week.getUTCDate() + (d.w + 6) % 7;
            } else {
              week = localDate(newDate(d.y, 0, 1)), day$1 = week.getDay();
              week = day$1 > 4 || day$1 === 0 ? monday.ceil(week) : monday(week);
              week = day.offset(week, (d.V - 1) * 7);
              d.y = week.getFullYear();
              d.m = week.getMonth();
              d.d = week.getDate() + (d.w + 6) % 7;
            }
          } else if ("W" in d || "U" in d) {
            if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
            day$1 = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
            d.m = 0;
            d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day$1 + 5) % 7 : d.w + d.U * 7 - (day$1 + 6) % 7;
          }

          // If a time zone is specified, all fields are interpreted as UTC and then
          // offset according to the specified time zone.
          if ("Z" in d) {
            d.H += d.Z / 100 | 0;
            d.M += d.Z % 100;
            return utcDate(d);
          }

          // Otherwise, all fields are in local time.
          return localDate(d);
        };
      }

      function parseSpecifier(d, specifier, string, j) {
        var i = 0,
            n = specifier.length,
            m = string.length,
            c,
            parse;

        while (i < n) {
          if (j >= m) return -1;
          c = specifier.charCodeAt(i++);
          if (c === 37) {
            c = specifier.charAt(i++);
            parse = parses[c in pads ? specifier.charAt(i++) : c];
            if (!parse || ((j = parse(d, string, j)) < 0)) return -1;
          } else if (c != string.charCodeAt(j++)) {
            return -1;
          }
        }

        return j;
      }

      function parsePeriod(d, string, i) {
        var n = periodRe.exec(string.slice(i));
        return n ? (d.p = periodLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
      }

      function parseShortWeekday(d, string, i) {
        var n = shortWeekdayRe.exec(string.slice(i));
        return n ? (d.w = shortWeekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
      }

      function parseWeekday(d, string, i) {
        var n = weekdayRe.exec(string.slice(i));
        return n ? (d.w = weekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
      }

      function parseShortMonth(d, string, i) {
        var n = shortMonthRe.exec(string.slice(i));
        return n ? (d.m = shortMonthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
      }

      function parseMonth(d, string, i) {
        var n = monthRe.exec(string.slice(i));
        return n ? (d.m = monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
      }

      function parseLocaleDateTime(d, string, i) {
        return parseSpecifier(d, locale_dateTime, string, i);
      }

      function parseLocaleDate(d, string, i) {
        return parseSpecifier(d, locale_date, string, i);
      }

      function parseLocaleTime(d, string, i) {
        return parseSpecifier(d, locale_time, string, i);
      }

      function formatShortWeekday(d) {
        return locale_shortWeekdays[d.getDay()];
      }

      function formatWeekday(d) {
        return locale_weekdays[d.getDay()];
      }

      function formatShortMonth(d) {
        return locale_shortMonths[d.getMonth()];
      }

      function formatMonth(d) {
        return locale_months[d.getMonth()];
      }

      function formatPeriod(d) {
        return locale_periods[+(d.getHours() >= 12)];
      }

      function formatQuarter(d) {
        return 1 + ~~(d.getMonth() / 3);
      }

      function formatUTCShortWeekday(d) {
        return locale_shortWeekdays[d.getUTCDay()];
      }

      function formatUTCWeekday(d) {
        return locale_weekdays[d.getUTCDay()];
      }

      function formatUTCShortMonth(d) {
        return locale_shortMonths[d.getUTCMonth()];
      }

      function formatUTCMonth(d) {
        return locale_months[d.getUTCMonth()];
      }

      function formatUTCPeriod(d) {
        return locale_periods[+(d.getUTCHours() >= 12)];
      }

      function formatUTCQuarter(d) {
        return 1 + ~~(d.getUTCMonth() / 3);
      }

      return {
        format: function(specifier) {
          var f = newFormat(specifier += "", formats);
          f.toString = function() { return specifier; };
          return f;
        },
        parse: function(specifier) {
          var p = newParse(specifier += "", false);
          p.toString = function() { return specifier; };
          return p;
        },
        utcFormat: function(specifier) {
          var f = newFormat(specifier += "", utcFormats);
          f.toString = function() { return specifier; };
          return f;
        },
        utcParse: function(specifier) {
          var p = newParse(specifier += "", true);
          p.toString = function() { return specifier; };
          return p;
        }
      };
    }

    var pads = {"-": "", "_": " ", "0": "0"},
        numberRe = /^\s*\d+/, // note: ignores next directive
        percentRe = /^%/,
        requoteRe = /[\\^$*+?|[\]().{}]/g;

    function pad(value, fill, width) {
      var sign = value < 0 ? "-" : "",
          string = (sign ? -value : value) + "",
          length = string.length;
      return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
    }

    function requote(s) {
      return s.replace(requoteRe, "\\$&");
    }

    function formatRe(names) {
      return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
    }

    function formatLookup(names) {
      return new Map(names.map((name, i) => [name.toLowerCase(), i]));
    }

    function parseWeekdayNumberSunday(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 1));
      return n ? (d.w = +n[0], i + n[0].length) : -1;
    }

    function parseWeekdayNumberMonday(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 1));
      return n ? (d.u = +n[0], i + n[0].length) : -1;
    }

    function parseWeekNumberSunday(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 2));
      return n ? (d.U = +n[0], i + n[0].length) : -1;
    }

    function parseWeekNumberISO(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 2));
      return n ? (d.V = +n[0], i + n[0].length) : -1;
    }

    function parseWeekNumberMonday(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 2));
      return n ? (d.W = +n[0], i + n[0].length) : -1;
    }

    function parseFullYear(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 4));
      return n ? (d.y = +n[0], i + n[0].length) : -1;
    }

    function parseYear(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 2));
      return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
    }

    function parseZone(d, string, i) {
      var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
      return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
    }

    function parseQuarter(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 1));
      return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
    }

    function parseMonthNumber(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 2));
      return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
    }

    function parseDayOfMonth(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 2));
      return n ? (d.d = +n[0], i + n[0].length) : -1;
    }

    function parseDayOfYear(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 3));
      return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
    }

    function parseHour24(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 2));
      return n ? (d.H = +n[0], i + n[0].length) : -1;
    }

    function parseMinutes(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 2));
      return n ? (d.M = +n[0], i + n[0].length) : -1;
    }

    function parseSeconds(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 2));
      return n ? (d.S = +n[0], i + n[0].length) : -1;
    }

    function parseMilliseconds(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 3));
      return n ? (d.L = +n[0], i + n[0].length) : -1;
    }

    function parseMicroseconds(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 6));
      return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
    }

    function parseLiteralPercent(d, string, i) {
      var n = percentRe.exec(string.slice(i, i + 1));
      return n ? i + n[0].length : -1;
    }

    function parseUnixTimestamp(d, string, i) {
      var n = numberRe.exec(string.slice(i));
      return n ? (d.Q = +n[0], i + n[0].length) : -1;
    }

    function parseUnixTimestampSeconds(d, string, i) {
      var n = numberRe.exec(string.slice(i));
      return n ? (d.s = +n[0], i + n[0].length) : -1;
    }

    function formatDayOfMonth(d, p) {
      return pad(d.getDate(), p, 2);
    }

    function formatHour24(d, p) {
      return pad(d.getHours(), p, 2);
    }

    function formatHour12(d, p) {
      return pad(d.getHours() % 12 || 12, p, 2);
    }

    function formatDayOfYear(d, p) {
      return pad(1 + day.count(year(d), d), p, 3);
    }

    function formatMilliseconds(d, p) {
      return pad(d.getMilliseconds(), p, 3);
    }

    function formatMicroseconds(d, p) {
      return formatMilliseconds(d, p) + "000";
    }

    function formatMonthNumber(d, p) {
      return pad(d.getMonth() + 1, p, 2);
    }

    function formatMinutes(d, p) {
      return pad(d.getMinutes(), p, 2);
    }

    function formatSeconds(d, p) {
      return pad(d.getSeconds(), p, 2);
    }

    function formatWeekdayNumberMonday(d) {
      var day = d.getDay();
      return day === 0 ? 7 : day;
    }

    function formatWeekNumberSunday(d, p) {
      return pad(sunday.count(year(d) - 1, d), p, 2);
    }

    function dISO(d) {
      var day = d.getDay();
      return (day >= 4 || day === 0) ? thursday(d) : thursday.ceil(d);
    }

    function formatWeekNumberISO(d, p) {
      d = dISO(d);
      return pad(thursday.count(year(d), d) + (year(d).getDay() === 4), p, 2);
    }

    function formatWeekdayNumberSunday(d) {
      return d.getDay();
    }

    function formatWeekNumberMonday(d, p) {
      return pad(monday.count(year(d) - 1, d), p, 2);
    }

    function formatYear(d, p) {
      return pad(d.getFullYear() % 100, p, 2);
    }

    function formatYearISO(d, p) {
      d = dISO(d);
      return pad(d.getFullYear() % 100, p, 2);
    }

    function formatFullYear(d, p) {
      return pad(d.getFullYear() % 10000, p, 4);
    }

    function formatFullYearISO(d, p) {
      var day = d.getDay();
      d = (day >= 4 || day === 0) ? thursday(d) : thursday.ceil(d);
      return pad(d.getFullYear() % 10000, p, 4);
    }

    function formatZone(d) {
      var z = d.getTimezoneOffset();
      return (z > 0 ? "-" : (z *= -1, "+"))
          + pad(z / 60 | 0, "0", 2)
          + pad(z % 60, "0", 2);
    }

    function formatUTCDayOfMonth(d, p) {
      return pad(d.getUTCDate(), p, 2);
    }

    function formatUTCHour24(d, p) {
      return pad(d.getUTCHours(), p, 2);
    }

    function formatUTCHour12(d, p) {
      return pad(d.getUTCHours() % 12 || 12, p, 2);
    }

    function formatUTCDayOfYear(d, p) {
      return pad(1 + utcDay.count(utcYear(d), d), p, 3);
    }

    function formatUTCMilliseconds(d, p) {
      return pad(d.getUTCMilliseconds(), p, 3);
    }

    function formatUTCMicroseconds(d, p) {
      return formatUTCMilliseconds(d, p) + "000";
    }

    function formatUTCMonthNumber(d, p) {
      return pad(d.getUTCMonth() + 1, p, 2);
    }

    function formatUTCMinutes(d, p) {
      return pad(d.getUTCMinutes(), p, 2);
    }

    function formatUTCSeconds(d, p) {
      return pad(d.getUTCSeconds(), p, 2);
    }

    function formatUTCWeekdayNumberMonday(d) {
      var dow = d.getUTCDay();
      return dow === 0 ? 7 : dow;
    }

    function formatUTCWeekNumberSunday(d, p) {
      return pad(utcSunday.count(utcYear(d) - 1, d), p, 2);
    }

    function UTCdISO(d) {
      var day = d.getUTCDay();
      return (day >= 4 || day === 0) ? utcThursday(d) : utcThursday.ceil(d);
    }

    function formatUTCWeekNumberISO(d, p) {
      d = UTCdISO(d);
      return pad(utcThursday.count(utcYear(d), d) + (utcYear(d).getUTCDay() === 4), p, 2);
    }

    function formatUTCWeekdayNumberSunday(d) {
      return d.getUTCDay();
    }

    function formatUTCWeekNumberMonday(d, p) {
      return pad(utcMonday.count(utcYear(d) - 1, d), p, 2);
    }

    function formatUTCYear(d, p) {
      return pad(d.getUTCFullYear() % 100, p, 2);
    }

    function formatUTCYearISO(d, p) {
      d = UTCdISO(d);
      return pad(d.getUTCFullYear() % 100, p, 2);
    }

    function formatUTCFullYear(d, p) {
      return pad(d.getUTCFullYear() % 10000, p, 4);
    }

    function formatUTCFullYearISO(d, p) {
      var day = d.getUTCDay();
      d = (day >= 4 || day === 0) ? utcThursday(d) : utcThursday.ceil(d);
      return pad(d.getUTCFullYear() % 10000, p, 4);
    }

    function formatUTCZone() {
      return "+0000";
    }

    function formatLiteralPercent() {
      return "%";
    }

    function formatUnixTimestamp(d) {
      return +d;
    }

    function formatUnixTimestampSeconds(d) {
      return Math.floor(+d / 1000);
    }

    var locale;
    var utcFormat;
    var utcParse;

    defaultLocale({
      dateTime: "%x, %X",
      date: "%-m/%-d/%Y",
      time: "%-I:%M:%S %p",
      periods: ["AM", "PM"],
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });

    function defaultLocale(definition) {
      locale = formatLocale(definition);
      locale.format;
      locale.parse;
      utcFormat = locale.utcFormat;
      utcParse = locale.utcParse;
      return locale;
    }

    var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";

    function formatIsoNative(date) {
      return date.toISOString();
    }

    Date.prototype.toISOString
        ? formatIsoNative
        : utcFormat(isoSpecifier);

    function parseIsoNative(string) {
      var date = new Date(string);
      return isNaN(date) ? null : date;
    }

    +new Date("2000-01-01T00:00:00.000Z")
        ? parseIsoNative
        : utcParse(isoSpecifier);

    function transformer() {
      var x0 = 0,
          x1 = 1,
          t0,
          t1,
          k10,
          transform,
          interpolator = identity$1,
          clamp = false,
          unknown;

      function scale(x) {
        return x == null || isNaN(x = +x) ? unknown : interpolator(k10 === 0 ? 0.5 : (x = (transform(x) - t0) * k10, clamp ? Math.max(0, Math.min(1, x)) : x));
      }

      scale.domain = function(_) {
        return arguments.length ? ([x0, x1] = _, t0 = transform(x0 = +x0), t1 = transform(x1 = +x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0), scale) : [x0, x1];
      };

      scale.clamp = function(_) {
        return arguments.length ? (clamp = !!_, scale) : clamp;
      };

      scale.interpolator = function(_) {
        return arguments.length ? (interpolator = _, scale) : interpolator;
      };

      function range(interpolate) {
        return function(_) {
          var r0, r1;
          return arguments.length ? ([r0, r1] = _, interpolator = interpolate(r0, r1), scale) : [interpolator(0), interpolator(1)];
        };
      }

      scale.range = range(interpolate);

      scale.rangeRound = range(interpolateRound);

      scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
      };

      return function(t) {
        transform = t, t0 = t(x0), t1 = t(x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0);
        return scale;
      };
    }

    function copy(source, target) {
      return target
          .domain(source.domain())
          .interpolator(source.interpolator())
          .clamp(source.clamp())
          .unknown(source.unknown());
    }

    function sequential() {
      var scale = linearish(transformer()(identity$1));

      scale.copy = function() {
        return copy(scale, sequential());
      };

      return initInterpolator.apply(scale, arguments);
    }

    function tree_add(d) {
      const x = +this._x.call(null, d),
          y = +this._y.call(null, d);
      return add(this.cover(x, y), x, y, d);
    }

    function add(tree, x, y, d) {
      if (isNaN(x) || isNaN(y)) return tree; // ignore invalid points

      var parent,
          node = tree._root,
          leaf = {data: d},
          x0 = tree._x0,
          y0 = tree._y0,
          x1 = tree._x1,
          y1 = tree._y1,
          xm,
          ym,
          xp,
          yp,
          right,
          bottom,
          i,
          j;

      // If the tree is empty, initialize the root as a leaf.
      if (!node) return tree._root = leaf, tree;

      // Find the existing leaf for the new point, or add it.
      while (node.length) {
        if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
        if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
        if (parent = node, !(node = node[i = bottom << 1 | right])) return parent[i] = leaf, tree;
      }

      // Is the new point is exactly coincident with the existing point?
      xp = +tree._x.call(null, node.data);
      yp = +tree._y.call(null, node.data);
      if (x === xp && y === yp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;

      // Otherwise, split the leaf node until the old and new point are separated.
      do {
        parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);
        if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
        if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
      } while ((i = bottom << 1 | right) === (j = (yp >= ym) << 1 | (xp >= xm)));
      return parent[j] = node, parent[i] = leaf, tree;
    }

    function addAll(data) {
      var d, i, n = data.length,
          x,
          y,
          xz = new Array(n),
          yz = new Array(n),
          x0 = Infinity,
          y0 = Infinity,
          x1 = -Infinity,
          y1 = -Infinity;

      // Compute the points and their extent.
      for (i = 0; i < n; ++i) {
        if (isNaN(x = +this._x.call(null, d = data[i])) || isNaN(y = +this._y.call(null, d))) continue;
        xz[i] = x;
        yz[i] = y;
        if (x < x0) x0 = x;
        if (x > x1) x1 = x;
        if (y < y0) y0 = y;
        if (y > y1) y1 = y;
      }

      // If there were no (valid) points, abort.
      if (x0 > x1 || y0 > y1) return this;

      // Expand the tree to cover the new points.
      this.cover(x0, y0).cover(x1, y1);

      // Add the new points.
      for (i = 0; i < n; ++i) {
        add(this, xz[i], yz[i], data[i]);
      }

      return this;
    }

    function tree_cover(x, y) {
      if (isNaN(x = +x) || isNaN(y = +y)) return this; // ignore invalid points

      var x0 = this._x0,
          y0 = this._y0,
          x1 = this._x1,
          y1 = this._y1;

      // If the quadtree has no extent, initialize them.
      // Integer extent are necessary so that if we later double the extent,
      // the existing quadrant boundaries don’t change due to floating point error!
      if (isNaN(x0)) {
        x1 = (x0 = Math.floor(x)) + 1;
        y1 = (y0 = Math.floor(y)) + 1;
      }

      // Otherwise, double repeatedly to cover.
      else {
        var z = x1 - x0 || 1,
            node = this._root,
            parent,
            i;

        while (x0 > x || x >= x1 || y0 > y || y >= y1) {
          i = (y < y0) << 1 | (x < x0);
          parent = new Array(4), parent[i] = node, node = parent, z *= 2;
          switch (i) {
            case 0: x1 = x0 + z, y1 = y0 + z; break;
            case 1: x0 = x1 - z, y1 = y0 + z; break;
            case 2: x1 = x0 + z, y0 = y1 - z; break;
            case 3: x0 = x1 - z, y0 = y1 - z; break;
          }
        }

        if (this._root && this._root.length) this._root = node;
      }

      this._x0 = x0;
      this._y0 = y0;
      this._x1 = x1;
      this._y1 = y1;
      return this;
    }

    function tree_data() {
      var data = [];
      this.visit(function(node) {
        if (!node.length) do data.push(node.data); while (node = node.next)
      });
      return data;
    }

    function tree_extent(_) {
      return arguments.length
          ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1])
          : isNaN(this._x0) ? undefined : [[this._x0, this._y0], [this._x1, this._y1]];
    }

    function Quad(node, x0, y0, x1, y1) {
      this.node = node;
      this.x0 = x0;
      this.y0 = y0;
      this.x1 = x1;
      this.y1 = y1;
    }

    function tree_find(x, y, radius) {
      var data,
          x0 = this._x0,
          y0 = this._y0,
          x1,
          y1,
          x2,
          y2,
          x3 = this._x1,
          y3 = this._y1,
          quads = [],
          node = this._root,
          q,
          i;

      if (node) quads.push(new Quad(node, x0, y0, x3, y3));
      if (radius == null) radius = Infinity;
      else {
        x0 = x - radius, y0 = y - radius;
        x3 = x + radius, y3 = y + radius;
        radius *= radius;
      }

      while (q = quads.pop()) {

        // Stop searching if this quadrant can’t contain a closer node.
        if (!(node = q.node)
            || (x1 = q.x0) > x3
            || (y1 = q.y0) > y3
            || (x2 = q.x1) < x0
            || (y2 = q.y1) < y0) continue;

        // Bisect the current quadrant.
        if (node.length) {
          var xm = (x1 + x2) / 2,
              ym = (y1 + y2) / 2;

          quads.push(
            new Quad(node[3], xm, ym, x2, y2),
            new Quad(node[2], x1, ym, xm, y2),
            new Quad(node[1], xm, y1, x2, ym),
            new Quad(node[0], x1, y1, xm, ym)
          );

          // Visit the closest quadrant first.
          if (i = (y >= ym) << 1 | (x >= xm)) {
            q = quads[quads.length - 1];
            quads[quads.length - 1] = quads[quads.length - 1 - i];
            quads[quads.length - 1 - i] = q;
          }
        }

        // Visit this point. (Visiting coincident points isn’t necessary!)
        else {
          var dx = x - +this._x.call(null, node.data),
              dy = y - +this._y.call(null, node.data),
              d2 = dx * dx + dy * dy;
          if (d2 < radius) {
            var d = Math.sqrt(radius = d2);
            x0 = x - d, y0 = y - d;
            x3 = x + d, y3 = y + d;
            data = node.data;
          }
        }
      }

      return data;
    }

    function tree_remove(d) {
      if (isNaN(x = +this._x.call(null, d)) || isNaN(y = +this._y.call(null, d))) return this; // ignore invalid points

      var parent,
          node = this._root,
          retainer,
          previous,
          next,
          x0 = this._x0,
          y0 = this._y0,
          x1 = this._x1,
          y1 = this._y1,
          x,
          y,
          xm,
          ym,
          right,
          bottom,
          i,
          j;

      // If the tree is empty, initialize the root as a leaf.
      if (!node) return this;

      // Find the leaf node for the point.
      // While descending, also retain the deepest parent with a non-removed sibling.
      if (node.length) while (true) {
        if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
        if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
        if (!(parent = node, node = node[i = bottom << 1 | right])) return this;
        if (!node.length) break;
        if (parent[(i + 1) & 3] || parent[(i + 2) & 3] || parent[(i + 3) & 3]) retainer = parent, j = i;
      }

      // Find the point to remove.
      while (node.data !== d) if (!(previous = node, node = node.next)) return this;
      if (next = node.next) delete node.next;

      // If there are multiple coincident points, remove just the point.
      if (previous) return (next ? previous.next = next : delete previous.next), this;

      // If this is the root point, remove it.
      if (!parent) return this._root = next, this;

      // Remove this leaf.
      next ? parent[i] = next : delete parent[i];

      // If the parent now contains exactly one leaf, collapse superfluous parents.
      if ((node = parent[0] || parent[1] || parent[2] || parent[3])
          && node === (parent[3] || parent[2] || parent[1] || parent[0])
          && !node.length) {
        if (retainer) retainer[j] = node;
        else this._root = node;
      }

      return this;
    }

    function removeAll(data) {
      for (var i = 0, n = data.length; i < n; ++i) this.remove(data[i]);
      return this;
    }

    function tree_root() {
      return this._root;
    }

    function tree_size() {
      var size = 0;
      this.visit(function(node) {
        if (!node.length) do ++size; while (node = node.next)
      });
      return size;
    }

    function tree_visit(callback) {
      var quads = [], q, node = this._root, child, x0, y0, x1, y1;
      if (node) quads.push(new Quad(node, this._x0, this._y0, this._x1, this._y1));
      while (q = quads.pop()) {
        if (!callback(node = q.node, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1) && node.length) {
          var xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
          if (child = node[3]) quads.push(new Quad(child, xm, ym, x1, y1));
          if (child = node[2]) quads.push(new Quad(child, x0, ym, xm, y1));
          if (child = node[1]) quads.push(new Quad(child, xm, y0, x1, ym));
          if (child = node[0]) quads.push(new Quad(child, x0, y0, xm, ym));
        }
      }
      return this;
    }

    function tree_visitAfter(callback) {
      var quads = [], next = [], q;
      if (this._root) quads.push(new Quad(this._root, this._x0, this._y0, this._x1, this._y1));
      while (q = quads.pop()) {
        var node = q.node;
        if (node.length) {
          var child, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1, xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
          if (child = node[0]) quads.push(new Quad(child, x0, y0, xm, ym));
          if (child = node[1]) quads.push(new Quad(child, xm, y0, x1, ym));
          if (child = node[2]) quads.push(new Quad(child, x0, ym, xm, y1));
          if (child = node[3]) quads.push(new Quad(child, xm, ym, x1, y1));
        }
        next.push(q);
      }
      while (q = next.pop()) {
        callback(q.node, q.x0, q.y0, q.x1, q.y1);
      }
      return this;
    }

    function defaultX(d) {
      return d[0];
    }

    function tree_x(_) {
      return arguments.length ? (this._x = _, this) : this._x;
    }

    function defaultY(d) {
      return d[1];
    }

    function tree_y(_) {
      return arguments.length ? (this._y = _, this) : this._y;
    }

    function quadtree(nodes, x, y) {
      var tree = new Quadtree(x == null ? defaultX : x, y == null ? defaultY : y, NaN, NaN, NaN, NaN);
      return nodes == null ? tree : tree.addAll(nodes);
    }

    function Quadtree(x, y, x0, y0, x1, y1) {
      this._x = x;
      this._y = y;
      this._x0 = x0;
      this._y0 = y0;
      this._x1 = x1;
      this._y1 = y1;
      this._root = undefined;
    }

    function leaf_copy(leaf) {
      var copy = {data: leaf.data}, next = copy;
      while (leaf = leaf.next) next = next.next = {data: leaf.data};
      return copy;
    }

    var treeProto = quadtree.prototype = Quadtree.prototype;

    treeProto.copy = function() {
      var copy = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
          node = this._root,
          nodes,
          child;

      if (!node) return copy;

      if (!node.length) return copy._root = leaf_copy(node), copy;

      nodes = [{source: node, target: copy._root = new Array(4)}];
      while (node = nodes.pop()) {
        for (var i = 0; i < 4; ++i) {
          if (child = node.source[i]) {
            if (child.length) nodes.push({source: child, target: node.target[i] = new Array(4)});
            else node.target[i] = leaf_copy(child);
          }
        }
      }

      return copy;
    };

    treeProto.add = tree_add;
    treeProto.addAll = addAll;
    treeProto.cover = tree_cover;
    treeProto.data = tree_data;
    treeProto.extent = tree_extent;
    treeProto.find = tree_find;
    treeProto.remove = tree_remove;
    treeProto.removeAll = removeAll;
    treeProto.root = tree_root;
    treeProto.size = tree_size;
    treeProto.visit = tree_visit;
    treeProto.visitAfter = tree_visitAfter;
    treeProto.x = tree_x;
    treeProto.y = tree_y;

    function constant(x) {
      return function() {
        return x;
      };
    }

    function jiggle(random) {
      return (random() - 0.5) * 1e-6;
    }

    function x$1(d) {
      return d.x + d.vx;
    }

    function y$1(d) {
      return d.y + d.vy;
    }

    function forceCollide(radius) {
      var nodes,
          radii,
          random,
          strength = 1,
          iterations = 1;

      if (typeof radius !== "function") radius = constant(radius == null ? 1 : +radius);

      function force() {
        var i, n = nodes.length,
            tree,
            node,
            xi,
            yi,
            ri,
            ri2;

        for (var k = 0; k < iterations; ++k) {
          tree = quadtree(nodes, x$1, y$1).visitAfter(prepare);
          for (i = 0; i < n; ++i) {
            node = nodes[i];
            ri = radii[node.index], ri2 = ri * ri;
            xi = node.x + node.vx;
            yi = node.y + node.vy;
            tree.visit(apply);
          }
        }

        function apply(quad, x0, y0, x1, y1) {
          var data = quad.data, rj = quad.r, r = ri + rj;
          if (data) {
            if (data.index > node.index) {
              var x = xi - data.x - data.vx,
                  y = yi - data.y - data.vy,
                  l = x * x + y * y;
              if (l < r * r) {
                if (x === 0) x = jiggle(random), l += x * x;
                if (y === 0) y = jiggle(random), l += y * y;
                l = (r - (l = Math.sqrt(l))) / l * strength;
                node.vx += (x *= l) * (r = (rj *= rj) / (ri2 + rj));
                node.vy += (y *= l) * r;
                data.vx -= x * (r = 1 - r);
                data.vy -= y * r;
              }
            }
            return;
          }
          return x0 > xi + r || x1 < xi - r || y0 > yi + r || y1 < yi - r;
        }
      }

      function prepare(quad) {
        if (quad.data) return quad.r = radii[quad.data.index];
        for (var i = quad.r = 0; i < 4; ++i) {
          if (quad[i] && quad[i].r > quad.r) {
            quad.r = quad[i].r;
          }
        }
      }

      function initialize() {
        if (!nodes) return;
        var i, n = nodes.length, node;
        radii = new Array(n);
        for (i = 0; i < n; ++i) node = nodes[i], radii[node.index] = +radius(node, i, nodes);
      }

      force.initialize = function(_nodes, _random) {
        nodes = _nodes;
        random = _random;
        initialize();
      };

      force.iterations = function(_) {
        return arguments.length ? (iterations = +_, force) : iterations;
      };

      force.strength = function(_) {
        return arguments.length ? (strength = +_, force) : strength;
      };

      force.radius = function(_) {
        return arguments.length ? (radius = typeof _ === "function" ? _ : constant(+_), initialize(), force) : radius;
      };

      return force;
    }

    function index(d) {
      return d.index;
    }

    function find(nodeById, nodeId) {
      var node = nodeById.get(nodeId);
      if (!node) throw new Error("node not found: " + nodeId);
      return node;
    }

    function forceLink(links) {
      var id = index,
          strength = defaultStrength,
          strengths,
          distance = constant(30),
          distances,
          nodes,
          count,
          bias,
          random,
          iterations = 1;

      if (links == null) links = [];

      function defaultStrength(link) {
        return 1 / Math.min(count[link.source.index], count[link.target.index]);
      }

      function force(alpha) {
        for (var k = 0, n = links.length; k < iterations; ++k) {
          for (var i = 0, link, source, target, x, y, l, b; i < n; ++i) {
            link = links[i], source = link.source, target = link.target;
            x = target.x + target.vx - source.x - source.vx || jiggle(random);
            y = target.y + target.vy - source.y - source.vy || jiggle(random);
            l = Math.sqrt(x * x + y * y);
            l = (l - distances[i]) / l * alpha * strengths[i];
            x *= l, y *= l;
            target.vx -= x * (b = bias[i]);
            target.vy -= y * b;
            source.vx += x * (b = 1 - b);
            source.vy += y * b;
          }
        }
      }

      function initialize() {
        if (!nodes) return;

        var i,
            n = nodes.length,
            m = links.length,
            nodeById = new Map(nodes.map((d, i) => [id(d, i, nodes), d])),
            link;

        for (i = 0, count = new Array(n); i < m; ++i) {
          link = links[i], link.index = i;
          if (typeof link.source !== "object") link.source = find(nodeById, link.source);
          if (typeof link.target !== "object") link.target = find(nodeById, link.target);
          count[link.source.index] = (count[link.source.index] || 0) + 1;
          count[link.target.index] = (count[link.target.index] || 0) + 1;
        }

        for (i = 0, bias = new Array(m); i < m; ++i) {
          link = links[i], bias[i] = count[link.source.index] / (count[link.source.index] + count[link.target.index]);
        }

        strengths = new Array(m), initializeStrength();
        distances = new Array(m), initializeDistance();
      }

      function initializeStrength() {
        if (!nodes) return;

        for (var i = 0, n = links.length; i < n; ++i) {
          strengths[i] = +strength(links[i], i, links);
        }
      }

      function initializeDistance() {
        if (!nodes) return;

        for (var i = 0, n = links.length; i < n; ++i) {
          distances[i] = +distance(links[i], i, links);
        }
      }

      force.initialize = function(_nodes, _random) {
        nodes = _nodes;
        random = _random;
        initialize();
      };

      force.links = function(_) {
        return arguments.length ? (links = _, initialize(), force) : links;
      };

      force.id = function(_) {
        return arguments.length ? (id = _, force) : id;
      };

      force.iterations = function(_) {
        return arguments.length ? (iterations = +_, force) : iterations;
      };

      force.strength = function(_) {
        return arguments.length ? (strength = typeof _ === "function" ? _ : constant(+_), initializeStrength(), force) : strength;
      };

      force.distance = function(_) {
        return arguments.length ? (distance = typeof _ === "function" ? _ : constant(+_), initializeDistance(), force) : distance;
      };

      return force;
    }

    var noop = {value: () => {}};

    function dispatch() {
      for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
        if (!(t = arguments[i] + "") || (t in _) || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
        _[t] = [];
      }
      return new Dispatch(_);
    }

    function Dispatch(_) {
      this._ = _;
    }

    function parseTypenames(typenames, types) {
      return typenames.trim().split(/^|\s+/).map(function(t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        return {type: t, name: name};
      });
    }

    Dispatch.prototype = dispatch.prototype = {
      constructor: Dispatch,
      on: function(typename, callback) {
        var _ = this._,
            T = parseTypenames(typename + "", _),
            t,
            i = -1,
            n = T.length;

        // If no callback was specified, return the callback of the given type and name.
        if (arguments.length < 2) {
          while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
          return;
        }

        // If a type was specified, set the callback for the given type and name.
        // Otherwise, if a null callback was specified, remove callbacks of the given name.
        if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
        while (++i < n) {
          if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
          else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
        }

        return this;
      },
      copy: function() {
        var copy = {}, _ = this._;
        for (var t in _) copy[t] = _[t].slice();
        return new Dispatch(copy);
      },
      call: function(type, that) {
        if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
      },
      apply: function(type, that, args) {
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
      }
    };

    function get(type, name) {
      for (var i = 0, n = type.length, c; i < n; ++i) {
        if ((c = type[i]).name === name) {
          return c.value;
        }
      }
    }

    function set(type, name, callback) {
      for (var i = 0, n = type.length; i < n; ++i) {
        if (type[i].name === name) {
          type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
          break;
        }
      }
      if (callback != null) type.push({name: name, value: callback});
      return type;
    }

    var frame = 0, // is an animation frame pending?
        timeout = 0, // is a timeout pending?
        interval = 0, // are any timers active?
        pokeDelay = 1000, // how frequently we check for clock skew
        taskHead,
        taskTail,
        clockLast = 0,
        clockNow = 0,
        clockSkew = 0,
        clock = typeof performance === "object" && performance.now ? performance : Date,
        setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

    function now() {
      return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
    }

    function clearNow() {
      clockNow = 0;
    }

    function Timer() {
      this._call =
      this._time =
      this._next = null;
    }

    Timer.prototype = timer.prototype = {
      constructor: Timer,
      restart: function(callback, delay, time) {
        if (typeof callback !== "function") throw new TypeError("callback is not a function");
        time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
        if (!this._next && taskTail !== this) {
          if (taskTail) taskTail._next = this;
          else taskHead = this;
          taskTail = this;
        }
        this._call = callback;
        this._time = time;
        sleep();
      },
      stop: function() {
        if (this._call) {
          this._call = null;
          this._time = Infinity;
          sleep();
        }
      }
    };

    function timer(callback, delay, time) {
      var t = new Timer;
      t.restart(callback, delay, time);
      return t;
    }

    function timerFlush() {
      now(); // Get the current time, if not already set.
      ++frame; // Pretend we’ve set an alarm, if we haven’t already.
      var t = taskHead, e;
      while (t) {
        if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);
        t = t._next;
      }
      --frame;
    }

    function wake() {
      clockNow = (clockLast = clock.now()) + clockSkew;
      frame = timeout = 0;
      try {
        timerFlush();
      } finally {
        frame = 0;
        nap();
        clockNow = 0;
      }
    }

    function poke() {
      var now = clock.now(), delay = now - clockLast;
      if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
    }

    function nap() {
      var t0, t1 = taskHead, t2, time = Infinity;
      while (t1) {
        if (t1._call) {
          if (time > t1._time) time = t1._time;
          t0 = t1, t1 = t1._next;
        } else {
          t2 = t1._next, t1._next = null;
          t1 = t0 ? t0._next = t2 : taskHead = t2;
        }
      }
      taskTail = t0;
      sleep(time);
    }

    function sleep(time) {
      if (frame) return; // Soonest alarm already set, or will be.
      if (timeout) timeout = clearTimeout(timeout);
      var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
      if (delay > 24) {
        if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
        if (interval) interval = clearInterval(interval);
      } else {
        if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
        frame = 1, setFrame(wake);
      }
    }

    // https://en.wikipedia.org/wiki/Linear_congruential_generator#Parameters_in_common_use
    const a = 1664525;
    const c = 1013904223;
    const m = 4294967296; // 2^32

    function lcg() {
      let s = 1;
      return () => (s = (a * s + c) % m) / m;
    }

    function x(d) {
      return d.x;
    }

    function y(d) {
      return d.y;
    }

    var initialRadius = 10,
        initialAngle = Math.PI * (3 - Math.sqrt(5));

    function forceSimulation(nodes) {
      var simulation,
          alpha = 1,
          alphaMin = 0.001,
          alphaDecay = 1 - Math.pow(alphaMin, 1 / 300),
          alphaTarget = 0,
          velocityDecay = 0.6,
          forces = new Map(),
          stepper = timer(step),
          event = dispatch("tick", "end"),
          random = lcg();

      if (nodes == null) nodes = [];

      function step() {
        tick();
        event.call("tick", simulation);
        if (alpha < alphaMin) {
          stepper.stop();
          event.call("end", simulation);
        }
      }

      function tick(iterations) {
        var i, n = nodes.length, node;

        if (iterations === undefined) iterations = 1;

        for (var k = 0; k < iterations; ++k) {
          alpha += (alphaTarget - alpha) * alphaDecay;

          forces.forEach(function(force) {
            force(alpha);
          });

          for (i = 0; i < n; ++i) {
            node = nodes[i];
            if (node.fx == null) node.x += node.vx *= velocityDecay;
            else node.x = node.fx, node.vx = 0;
            if (node.fy == null) node.y += node.vy *= velocityDecay;
            else node.y = node.fy, node.vy = 0;
          }
        }

        return simulation;
      }

      function initializeNodes() {
        for (var i = 0, n = nodes.length, node; i < n; ++i) {
          node = nodes[i], node.index = i;
          if (node.fx != null) node.x = node.fx;
          if (node.fy != null) node.y = node.fy;
          if (isNaN(node.x) || isNaN(node.y)) {
            var radius = initialRadius * Math.sqrt(0.5 + i), angle = i * initialAngle;
            node.x = radius * Math.cos(angle);
            node.y = radius * Math.sin(angle);
          }
          if (isNaN(node.vx) || isNaN(node.vy)) {
            node.vx = node.vy = 0;
          }
        }
      }

      function initializeForce(force) {
        if (force.initialize) force.initialize(nodes, random);
        return force;
      }

      initializeNodes();

      return simulation = {
        tick: tick,

        restart: function() {
          return stepper.restart(step), simulation;
        },

        stop: function() {
          return stepper.stop(), simulation;
        },

        nodes: function(_) {
          return arguments.length ? (nodes = _, initializeNodes(), forces.forEach(initializeForce), simulation) : nodes;
        },

        alpha: function(_) {
          return arguments.length ? (alpha = +_, simulation) : alpha;
        },

        alphaMin: function(_) {
          return arguments.length ? (alphaMin = +_, simulation) : alphaMin;
        },

        alphaDecay: function(_) {
          return arguments.length ? (alphaDecay = +_, simulation) : +alphaDecay;
        },

        alphaTarget: function(_) {
          return arguments.length ? (alphaTarget = +_, simulation) : alphaTarget;
        },

        velocityDecay: function(_) {
          return arguments.length ? (velocityDecay = 1 - _, simulation) : 1 - velocityDecay;
        },

        randomSource: function(_) {
          return arguments.length ? (random = _, forces.forEach(initializeForce), simulation) : random;
        },

        force: function(name, _) {
          return arguments.length > 1 ? ((_ == null ? forces.delete(name) : forces.set(name, initializeForce(_))), simulation) : forces.get(name);
        },

        find: function(x, y, radius) {
          var i = 0,
              n = nodes.length,
              dx,
              dy,
              d2,
              node,
              closest;

          if (radius == null) radius = Infinity;
          else radius *= radius;

          for (i = 0; i < n; ++i) {
            node = nodes[i];
            dx = x - node.x;
            dy = y - node.y;
            d2 = dx * dx + dy * dy;
            if (d2 < radius) closest = node, radius = d2;
          }

          return closest;
        },

        on: function(name, _) {
          return arguments.length > 1 ? (event.on(name, _), simulation) : event.on(name);
        }
      };
    }

    function forceManyBody() {
      var nodes,
          node,
          random,
          alpha,
          strength = constant(-30),
          strengths,
          distanceMin2 = 1,
          distanceMax2 = Infinity,
          theta2 = 0.81;

      function force(_) {
        var i, n = nodes.length, tree = quadtree(nodes, x, y).visitAfter(accumulate);
        for (alpha = _, i = 0; i < n; ++i) node = nodes[i], tree.visit(apply);
      }

      function initialize() {
        if (!nodes) return;
        var i, n = nodes.length, node;
        strengths = new Array(n);
        for (i = 0; i < n; ++i) node = nodes[i], strengths[node.index] = +strength(node, i, nodes);
      }

      function accumulate(quad) {
        var strength = 0, q, c, weight = 0, x, y, i;

        // For internal nodes, accumulate forces from child quadrants.
        if (quad.length) {
          for (x = y = i = 0; i < 4; ++i) {
            if ((q = quad[i]) && (c = Math.abs(q.value))) {
              strength += q.value, weight += c, x += c * q.x, y += c * q.y;
            }
          }
          quad.x = x / weight;
          quad.y = y / weight;
        }

        // For leaf nodes, accumulate forces from coincident quadrants.
        else {
          q = quad;
          q.x = q.data.x;
          q.y = q.data.y;
          do strength += strengths[q.data.index];
          while (q = q.next);
        }

        quad.value = strength;
      }

      function apply(quad, x1, _, x2) {
        if (!quad.value) return true;

        var x = quad.x - node.x,
            y = quad.y - node.y,
            w = x2 - x1,
            l = x * x + y * y;

        // Apply the Barnes-Hut approximation if possible.
        // Limit forces for very close nodes; randomize direction if coincident.
        if (w * w / theta2 < l) {
          if (l < distanceMax2) {
            if (x === 0) x = jiggle(random), l += x * x;
            if (y === 0) y = jiggle(random), l += y * y;
            if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
            node.vx += x * quad.value * alpha / l;
            node.vy += y * quad.value * alpha / l;
          }
          return true;
        }

        // Otherwise, process points directly.
        else if (quad.length || l >= distanceMax2) return;

        // Limit forces for very close nodes; randomize direction if coincident.
        if (quad.data !== node || quad.next) {
          if (x === 0) x = jiggle(random), l += x * x;
          if (y === 0) y = jiggle(random), l += y * y;
          if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
        }

        do if (quad.data !== node) {
          w = strengths[quad.data.index] * alpha / l;
          node.vx += x * w;
          node.vy += y * w;
        } while (quad = quad.next);
      }

      force.initialize = function(_nodes, _random) {
        nodes = _nodes;
        random = _random;
        initialize();
      };

      force.strength = function(_) {
        return arguments.length ? (strength = typeof _ === "function" ? _ : constant(+_), initialize(), force) : strength;
      };

      force.distanceMin = function(_) {
        return arguments.length ? (distanceMin2 = _ * _, force) : Math.sqrt(distanceMin2);
      };

      force.distanceMax = function(_) {
        return arguments.length ? (distanceMax2 = _ * _, force) : Math.sqrt(distanceMax2);
      };

      force.theta = function(_) {
        return arguments.length ? (theta2 = _ * _, force) : Math.sqrt(theta2);
      };

      return force;
    }

    function forceX(x) {
      var strength = constant(0.1),
          nodes,
          strengths,
          xz;

      if (typeof x !== "function") x = constant(x == null ? 0 : +x);

      function force(alpha) {
        for (var i = 0, n = nodes.length, node; i < n; ++i) {
          node = nodes[i], node.vx += (xz[i] - node.x) * strengths[i] * alpha;
        }
      }

      function initialize() {
        if (!nodes) return;
        var i, n = nodes.length;
        strengths = new Array(n);
        xz = new Array(n);
        for (i = 0; i < n; ++i) {
          strengths[i] = isNaN(xz[i] = +x(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
        }
      }

      force.initialize = function(_) {
        nodes = _;
        initialize();
      };

      force.strength = function(_) {
        return arguments.length ? (strength = typeof _ === "function" ? _ : constant(+_), initialize(), force) : strength;
      };

      force.x = function(_) {
        return arguments.length ? (x = typeof _ === "function" ? _ : constant(+_), initialize(), force) : x;
      };

      return force;
    }

    function forceY(y) {
      var strength = constant(0.1),
          nodes,
          strengths,
          yz;

      if (typeof y !== "function") y = constant(y == null ? 0 : +y);

      function force(alpha) {
        for (var i = 0, n = nodes.length, node; i < n; ++i) {
          node = nodes[i], node.vy += (yz[i] - node.y) * strengths[i] * alpha;
        }
      }

      function initialize() {
        if (!nodes) return;
        var i, n = nodes.length;
        strengths = new Array(n);
        yz = new Array(n);
        for (i = 0; i < n; ++i) {
          strengths[i] = isNaN(yz[i] = +y(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
        }
      }

      force.initialize = function(_) {
        nodes = _;
        initialize();
      };

      force.strength = function(_) {
        return arguments.length ? (strength = typeof _ === "function" ? _ : constant(+_), initialize(), force) : strength;
      };

      force.y = function(_) {
        return arguments.length ? (y = typeof _ === "function" ? _ : constant(+_), initialize(), force) : y;
      };

      return force;
    }

    const COLOR_BASE = "#cecece";

    const throttleFilter = (callback, limit) => {
        let waiting = false;
        return (val) => {
            if (!waiting) {
                callback(val);
                waiting = true;
                setTimeout(() => {
                    waiting = false;
                }, limit);
            }
        };
    };
    const useFilter = () => {
        const [includeFilter, setIncludeFilter] = y$2("");
        const [excludeFilter, setExcludeFilter] = y$2("");
        const setIncludeFilterTrottled = F(() => throttleFilter(setIncludeFilter, 200), []);
        const setExcludeFilterTrottled = F(() => throttleFilter(setExcludeFilter, 200), []);
        const isModuleIncluded = F(() => {
            if (includeFilter === "") {
                return () => true;
            }
            try {
                const re = new RegExp(includeFilter);
                return ({ id }) => re.test(id);
            }
            catch (err) {
                return () => false;
            }
        }, [includeFilter]);
        const isModuleExcluded = F(() => {
            if (excludeFilter === "") {
                return () => false;
            }
            try {
                const re = new RegExp(excludeFilter);
                return ({ id }) => re.test(id);
            }
            catch (err) {
                return () => false;
            }
        }, [excludeFilter]);
        const isDefaultInclude = includeFilter === "";
        const getModuleFilterMultiplier = F(() => {
            return (data) => {
                if (isDefaultInclude) {
                    return isModuleExcluded(data) ? 0 : 1;
                }
                return isModuleExcluded(data) && !isModuleIncluded(data) ? 0 : 1;
            };
        }, [isDefaultInclude, isModuleExcluded, isModuleIncluded]);
        return {
            getModuleFilterMultiplier,
            includeFilter,
            excludeFilter,
            setExcludeFilter: setExcludeFilterTrottled,
            setIncludeFilter: setIncludeFilterTrottled,
        };
    };

    const SideBar = ({ availableSizeProperties, sizeProperty, setSizeProperty, onExcludeChange, onIncludeChange, }) => {
        const [includeValue, setIncludeValue] = y$2("");
        const [excludeValue, setExcludeValue] = y$2("");
        const handleSizePropertyChange = (sizeProp) => () => {
            if (sizeProp !== sizeProperty) {
                setSizeProperty(sizeProp);
            }
        };
        const handleIncludeChange = (event) => {
            const value = event.currentTarget.value;
            setIncludeValue(value);
            onIncludeChange(value);
        };
        const handleExcludeChange = (event) => {
            const value = event.currentTarget.value;
            setExcludeValue(value);
            onExcludeChange(value);
        };
        return (e$1("aside", Object.assign({ className: "sidebar" }, { children: [e$1("div", Object.assign({ className: "size-selectors" }, { children: availableSizeProperties.length > 1 &&
                        availableSizeProperties.map((sizeProp) => {
                            const id = `selector-${sizeProp}`;
                            return (e$1("div", Object.assign({ className: "size-selector" }, { children: [e$1("input", { type: "radio", id: id, checked: sizeProp === sizeProperty, onChange: handleSizePropertyChange(sizeProp) }), e$1("label", Object.assign({ htmlFor: id }, { children: LABELS[sizeProp] }))] }), sizeProp));
                        }) })), e$1("div", Object.assign({ className: "module-filters" }, { children: [e$1("div", Object.assign({ className: "module-filter" }, { children: [e$1("label", Object.assign({ htmlFor: "module-filter-exclude" }, { children: "Exclude" })), e$1("input", { type: "text", id: "module-filter-exclude", value: excludeValue, onInput: handleExcludeChange, placeholder: "RegExp" })] })), e$1("div", Object.assign({ className: "module-filter" }, { children: [e$1("label", Object.assign({ htmlFor: "module-filter-include" }, { children: "Include" })), e$1("input", { type: "text", id: "module-filter-include", value: includeValue, onInput: handleIncludeChange, placeholder: "RegExp" })] }))] }))] })));
    };

    const Tooltip_marginX = 10;
    const Tooltip_marginY = 30;
    const Tooltip = ({ node, visible }) => {
        const { data } = q(StaticContext);
        const ref = s(null);
        const [style, setStyle] = y$2({});
        const content = F(() => {
            if (!node)
                return null;
            return (e$1(p$1, { children: [e$1("div", { children: node.id }), node.uid && (e$1("div", { children: [e$1("div", { children: [e$1("b", { children: "Imported By" }), ":"] }), data.nodeMetas[node.uid].importedBy.map(({ uid }) => {
                                const { id } = data.nodeMetas[uid];
                                return e$1("div", { children: id }, id);
                            })] }))] }));
        }, [data, node]);
        const updatePosition = (mouseCoords) => {
            if (!ref.current)
                return;
            const pos = {
                left: mouseCoords.x + Tooltip_marginX,
                top: mouseCoords.y + Tooltip_marginY,
            };
            const boundingRect = ref.current.getBoundingClientRect();
            if (pos.left + boundingRect.width > window.innerWidth) {
                // Shifting horizontally
                pos.left = window.innerWidth - boundingRect.width;
            }
            if (pos.top + boundingRect.height > window.innerHeight) {
                // Flipping vertically
                pos.top = mouseCoords.y - Tooltip_marginY - boundingRect.height;
            }
            setStyle(pos);
        };
        _(() => {
            const handleMouseMove = (event) => {
                updatePosition({
                    x: event.pageX,
                    y: event.pageY,
                });
            };
            document.addEventListener("mousemove", handleMouseMove, true);
            return () => {
                document.removeEventListener("mousemove", handleMouseMove, true);
            };
        }, []);
        return (e$1("div", Object.assign({ className: `tooltip ${visible ? "" : "tooltip-hidden"}`, ref: ref, style: style }, { children: content })));
    };

    class Transform {
        constructor(k, x, y) {
            this.k = k;
            this.x = x;
            this.y = y;
        }
        scaled(k) {
            return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
        }
        translated(x, y) {
            return x === 0 && y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
        }
        invertPoint(location) {
            return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
        }
        toString() {
            return "translate(" + String(this.x) + "," + String(this.y) + ") scale(" + String(this.k) + ")";
        }
    }
    const identityTransform = new Transform(1, 0, 0);

    const noEvent = (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
    };
    const translate = (transform, p0, p1) => {
        const x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
        return x === transform.x && y === transform.y ? transform : new Transform(transform.k, x, y);
    };
    const Network = ({ links, nodes, onNodeHover, onNodeDblClick, getColor, onCanvasClick, onNodeClick, }) => {
        const { width, height } = q(StaticContext);
        const [transform, setTransform] = y$2(identityTransform);
        const startPosRef = s();
        const [dragging, setDragging] = y$2(false);
        const handleMouseDown = (event) => {
            if (event.ctrlKey || event.button) {
                // context menu
                return;
            }
            noEvent(event);
            startPosRef.current = transform.invertPoint([event.clientX, event.clientY]);
            setDragging(true);
        };
        const handleMouseMove = (event) => {
            noEvent(event);
            if (!startPosRef.current || !dragging)
                return;
            setTransform(translate(transform, [event.clientX, event.clientY], startPosRef.current));
        };
        const handleMouseUp = (event) => {
            noEvent(event);
            if (!dragging)
                return;
            setDragging(false);
        };
        return (e$1("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: `${-width / 2} ${-height / 2} ${width} ${height}`, onMouseDown: handleMouseDown, onMouseMove: handleMouseMove, onMouseUp: handleMouseUp, onClick: onCanvasClick }, { children: e$1("g", Object.assign({ transform: transform.toString() }, { children: [e$1("g", Object.assign({ stroke: "#fff", "stroke-opacity": "0.9" }, { children: links.map((link) => {
                            return (e$1("line", { "stroke-width": "1", x1: link.source.x, y1: link.source.y, x2: link.target.x, y2: link.target.y }, `${link.source.uid} - ${link.target.uid}`));
                        }) })), e$1("g", Object.assign({ stroke: "#fff", "stroke-width": "1.5" }, { children: nodes.map((node) => {
                            return (e$1("circle", { r: node.radius, fill: getColor(node), cx: node.x, cy: node.y, onMouseOver: (evt) => {
                                    noEvent(evt);
                                    onNodeHover(node);
                                }, onClick: (evt) => {
                                    noEvent(evt);
                                    onNodeClick(node);
                                }, onDblClick: (evt) => {
                                    noEvent(evt);
                                    onNodeDblClick(node);
                                } }, node.uid));
                        }) }))] })) })));
    };

    const Chart = ({ links, nodes, onNodeExclude, getColor, onNodeSelect }) => {
        const [showTooltip, setShowTooltip] = y$2(false);
        const [tooltipNode, setTooltipNode] = y$2(undefined);
        _(() => {
            const handleMouseOut = () => {
                setShowTooltip(false);
            };
            document.addEventListener("mouseover", handleMouseOut);
            return () => {
                document.removeEventListener("mouseover", handleMouseOut);
            };
        }, []);
        return (e$1(p$1, { children: [e$1(Network, { links: links, nodes: nodes, onNodeHover: (node) => {
                        setTooltipNode(node);
                        setShowTooltip(true);
                    }, onNodeDblClick: onNodeExclude, onNodeClick: (node) => onNodeSelect(node.uid), onCanvasClick: () => {
                        onNodeSelect(undefined);
                    }, getColor: getColor }), e$1(Tooltip, { visible: showTooltip, node: tooltipNode })] }));
    };

    const createRainbowColor = (groups) => {
        const groupColor = new Map();
        const groupNames = Object.keys(groups);
        const colorScale = sequential([0, groupNames.length], (n) => hsl(360 * n, 0.3, 0.5));
        groupNames.forEach((c, id) => {
            groupColor.set(c, colorScale(id).toString());
        });
        const getBackgroundColor = (node) => {
            const colorStr = groupColor.get(node.group);
            const hslColor = hsl(colorStr);
            hslColor.l = node.renderedLength === 0 ? 0.9 : hslColor.l;
            return hslColor;
        };
        return (node) => {
            const backgroundColor = getBackgroundColor(node);
            return backgroundColor.toString();
        };
    };

    const Main = () => {
        const { nodes, data, width, height, nodeGroups, groupLayers, groups } = q(StaticContext);
        const sizeScale = F(() => {
            const maxLines = max(nodes, (d) => d.renderedLength);
            const size = sqrt().domain([1, maxLines]).range([5, 30]);
            return size;
        }, [nodes]);
        const getModuleColor = F(() => {
            return createRainbowColor(groups);
        }, [groups]);
        const [excludedNodes, setExcludedNodes] = y$2([]);
        const [selectedNode, setSelectedNode] = y$2();
        const { getModuleFilterMultiplier, setExcludeFilter, setIncludeFilter } = useFilter();
        const getColor = (node) => {
            if (selectedNode != null) {
                if (node.uid === selectedNode || data.nodeMetas[selectedNode].importedBy.some(({ uid }) => node.uid === uid)) {
                    return getModuleColor(node);
                }
                return COLOR_BASE;
            }
            else {
                return getModuleColor(node);
            }
        };
        const processedNodes = F(() => {
            const newNodes = [];
            for (const node of nodes) {
                //if (node.renderedLength === 0) continue;
                if (excludedNodes.includes(node.uid))
                    continue;
                const filterMultiplier = getModuleFilterMultiplier(node);
                if (filterMultiplier === 0)
                    continue;
                const nodeGroup = nodeGroups[node.uid];
                const layerIndex = groupLayers.findIndex((layer) => layer.includes(nodeGroup));
                const groupId = groupLayers[layerIndex].indexOf(nodeGroup);
                const groupsTotal = groupLayers[layerIndex].length;
                newNodes.push(Object.assign(Object.assign({}, node), { x: layerIndex * Math.cos((groupId / groupsTotal) * 2 * Math.PI) * 200, y: layerIndex * Math.sin((groupId / groupsTotal) * 2 * Math.PI) * 200, radius: sizeScale(node.renderedLength) }));
            }
            return newNodes;
        }, [excludedNodes, getModuleFilterMultiplier, groupLayers, nodeGroups, nodes, sizeScale]);
        const links = F(() => {
            const nodesCache = Object.fromEntries(processedNodes.map((d) => [d.uid, d]));
            return Object.entries(data.nodeMetas)
                .flatMap(([sourceUid, { imported }]) => {
                return imported.map(({ uid: targetUid }) => {
                    return {
                        source: nodesCache[sourceUid],
                        target: nodesCache[targetUid],
                        value: 1,
                    };
                });
            })
                .filter(({ source, target }) => {
                return source && target;
            });
        }, [data.nodeMetas, processedNodes]);
        const [animatedNodes, setAnimatedNodes] = y$2([]);
        _(() => {
            const simulation = forceSimulation()
                .force("collision", forceCollide().radius((node) => node.radius))
                .force("charge", forceManyBody().strength(-30))
                .force("link", forceLink(links)
                .strength((link) => {
                if (nodeGroups[link.source.uid] === nodeGroups[link.target.uid]) {
                    return 1;
                }
                else {
                    return 0.1;
                }
            })
                .iterations(2))
                .force("x", forceX(0))
                .force("y", forceY(0));
            simulation.on("tick", () => {
                setAnimatedNodes([...simulation.nodes()]);
            });
            simulation.nodes([...processedNodes]);
            // simulation.tick(1).stop();
            simulation.alphaMin(0.03).restart();
            return () => simulation.stop();
        }, [nodeGroups, height, links, processedNodes, width]);
        return (e$1(p$1, { children: [e$1(SideBar, { sizeProperty: "renderedLength", availableSizeProperties: ["renderedLength"], setSizeProperty: () => { }, onExcludeChange: setExcludeFilter, onIncludeChange: setIncludeFilter }), e$1(Chart, { nodes: animatedNodes, onNodeExclude: (node) => setExcludedNodes([...excludedNodes, node.uid]), links: links, getColor: getColor, onNodeSelect: (uid) => setSelectedNode(uid === selectedNode ? undefined : uid) })] }));
    };

    const NODE_MODULES = /.*(?:\/|\\\\)?node_modules(?:\/|\\\\)([^/\\]+)(?:\/|\\\\).+/;

    const StaticContext = B$1({});
    const createNodeInfo = (data, availableSizeProperties, uid) => {
        var _a, _b;
        const meta = data.nodeMetas[uid];
        const entries = Object.values(meta.moduleParts).map((partUid) => data.nodeParts[partUid]);
        const sizes = Object.fromEntries(availableSizeProperties.map((key) => [key, 0]));
        for (const renderInfo of entries) {
            for (const sizeKey of availableSizeProperties) {
                sizes[sizeKey] += (_a = renderInfo[sizeKey]) !== null && _a !== void 0 ? _a : 0;
            }
        }
        const match = NODE_MODULES.exec(meta.id);
        return Object.assign(Object.assign(Object.assign({ uid }, sizes), meta), { group: (_b = match === null || match === void 0 ? void 0 : match[1]) !== null && _b !== void 0 ? _b : "" });
    };
    const drawChart = (parentNode, data, width, height) => {
        var _a, _b;
        const availableSizeProperties = getAvailableSizeOptions(data.options);
        const nodeGroups = {};
        const groups = { "": 0 };
        let groupId = 1;
        const nodes = [];
        for (const uid of Object.keys(data.nodeMetas)) {
            const node = createNodeInfo(data, availableSizeProperties, uid);
            nodes.push(node);
            nodeGroups[uid] = node.group;
            groups[node.group] = (_a = groups[node.group]) !== null && _a !== void 0 ? _a : groupId++;
        }
        const groupLinks = { "": new Set() };
        for (const [sourceUid, { imported }] of Object.entries(data.nodeMetas)) {
            for (const { uid: targetUid } of imported) {
                const sourceGroup = nodeGroups[sourceUid];
                const targetGroup = nodeGroups[targetUid];
                if (!(sourceGroup in groupLinks)) {
                    groupLinks[sourceGroup] = new Set();
                }
                groupLinks[sourceGroup].add(targetGroup);
            }
        }
        const groupLayers = [[""]];
        const seen = new Set([""]);
        // eslint-disable-next-line no-constant-condition
        while (true) {
            const lastLayer = groupLayers[groupLayers.length - 1];
            const newLayer = new Set();
            for (const currentGroup of lastLayer) {
                for (const targetGroup of (_b = groupLinks[currentGroup]) !== null && _b !== void 0 ? _b : []) {
                    if (seen.has(targetGroup)) {
                        continue;
                    }
                    seen.add(targetGroup);
                    newLayer.add(targetGroup);
                }
            }
            if (newLayer.size === 0) {
                break;
            }
            groupLayers.push([...newLayer]);
        }
        P(e$1(StaticContext.Provider, Object.assign({ value: {
                data,
                width,
                height,
                nodes,
                nodeGroups,
                groups,
                groupLayers,
            } }, { children: e$1(Main, {}) })), parentNode);
    };

    exports.StaticContext = StaticContext;
    exports["default"] = drawChart;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({});
