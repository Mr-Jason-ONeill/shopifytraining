/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 4558:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MinimogEvents": function() { return /* binding */ MinimogEvents; },
/* harmony export */   "MinimogTheme": function() { return /* binding */ MinimogTheme; },
/* harmony export */   "MinimogSettings": function() { return /* binding */ MinimogSettings; },
/* harmony export */   "MinimogStrings": function() { return /* binding */ MinimogStrings; },
/* harmony export */   "MinimogLibs": function() { return /* binding */ MinimogLibs; }
/* harmony export */ });
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8971);
/* harmony import */ var _libs_loadjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9280);
/* harmony import */ var _libs_loadjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_libs_loadjs__WEBPACK_IMPORTED_MODULE_0__);


window.MinimogEvents = window.MinimogEvents || new _utils_events__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z();
window._ThemeEvent = window.MinimogEvents;
window.MinimogLibs.loadjs = __loadjs;
const MinimogEvents = window.MinimogEvents;
const MinimogTheme = window.MinimogTheme || {};
const MinimogSettings = window.MinimogSettings || {};
const MinimogStrings = window.MinimogStrings || {};
const MinimogLibs = window.MinimogLibs || {};

/***/ }),

/***/ 9280:
/***/ (function() {

__loadjs = function () {
  var h = function () {},
      c = {},
      u = {},
      f = {};

  function o(e, n) {
    if (e) {
      var r = f[e];
      if (u[e] = n, r) for (; r.length;) r[0](e, n), r.splice(0, 1);
    }
  }

  function l(e, n) {
    e.call && (e = {
      success: e
    }), n.length ? (e.error || h)(n) : (e.success || h)(e);
  }

  function d(r, t, s, i) {
    var c,
        o,
        e = document,
        n = s.async,
        u = (s.numRetries || 0) + 1,
        f = s.before || h,
        l = r.replace(/[\?|#].*$/, ""),
        a = r.replace(/^(css|img)!/, "");
    i = i || 0, /(^css!|\.css$)/.test(l) ? ((o = e.createElement("link")).rel = "stylesheet", o.href = a, (c = "hideFocus" in o) && o.relList && (c = 0, o.rel = "preload", o.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(l) ? (o = e.createElement("img")).src = a : ((o = e.createElement("script")).src = r, o.async = void 0 === n || n), !(o.onload = o.onerror = o.onbeforeload = function (e) {
      var n = e.type[0];
      if (c) try {
        o.sheet.cssText.length || (n = "e");
      } catch (e) {
        18 != e.code && (n = "e");
      }

      if ("e" == n) {
        if ((i += 1) < u) return d(r, t, s, i);
      } else if ("preload" == o.rel && "style" == o.as) return o.rel = "stylesheet";

      t(r, n, e.defaultPrevented);
    }) !== f(r, o) && e.head.appendChild(o);
  }

  function r(e, n, r) {
    var t, s;

    if (n && n.trim && (t = n), s = (t ? r : n) || {}, t) {
      if (t in c) throw "LoadJS";
      c[t] = !0;
    }

    function i(n, r) {
      !function (e, t, n) {
        var r,
            s,
            i = (e = e.push ? e : [e]).length,
            c = i,
            o = [];

        for (r = function (e, n, r) {
          if ("e" == n && o.push(e), "b" == n) {
            if (!r) return;
            o.push(e);
          }

          --i || t(o);
        }, s = 0; s < c; s++) d(e[s], r, n);
      }(e, function (e) {
        l(s, e), n && l({
          success: n,
          error: r
        }, e), o(t, e);
      }, s);
    }

    if (s.returnPromise) return new Promise(i);
    i();
  }

  return r.ready = function (e, n) {
    return function (e, r) {
      e = e.push ? e : [e];
      var n,
          t,
          s,
          i = [],
          c = e.length,
          o = c;

      for (n = function (e, n) {
        n.length && i.push(e), --o || r(i);
      }; c--;) t = e[c], (s = u[t]) ? n(t, s) : (f[t] = f[t] || []).push(n);
    }(e, function (e) {
      l(n, e);
    }), r;
  }, r.done = function (e) {
    o(e, []);
  }, r.reset = function () {
    c = {}, u = {}, f = {};
  }, r.isDefined = function (e) {
    return e in c;
  }, r;
}();

/***/ }),

/***/ 6295:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mdn_polyfills_Node_prototype_append_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2422);
/* harmony import */ var mdn_polyfills_Node_prototype_append_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mdn_polyfills_Node_prototype_append_js__WEBPACK_IMPORTED_MODULE_0__);


class JSX {
  constructor() {
    this.component = this.component.bind(this);
    return this.component;
  }

  component(tagName, attrs) {
    for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      children[_key - 2] = arguments[_key];
    }

    if (typeof tagName === 'function') {
      // Override children
      return tagName({ ...attrs,
        children
      });
    }

    if (children) {
      children = children.filter(val => val !== null);
    }

    if (attrs) {
      if (attrs.class) {
        attrs.className = attrs.class;
      }

      delete attrs.children;
    } // Normal DOM node tagName


    function createWithAttrs(tagName, attrs) {
      attrs = attrs || {};
      let elem = document.createElement(tagName);

      try {
        elem = Object.assign(elem, attrs);
      } catch {
        const attrKeys = Object.keys(attrs);

        for (let i = 0; i < attrKeys.length; i++) {
          if (attrs[i] !== 'dataSet') {
            elem.setAttribute(attrKeys[i], attrs[attrKeys[i]]);
          }
        }
      }

      return elem;
    }

    let elem = tagName !== 'fragment' ? createWithAttrs(tagName, attrs) : document.createDocumentFragment(); // Evaluate SVG DOM node tagName
    // All svg inner tags: https://developer.mozilla.org/en-US/docs/Web/SVG/Element

    const svgInnerTags = ['svg', 'path', 'rect', 'text', 'circle', 'g'];

    if (svgInnerTags.indexOf(tagName) !== -1) {
      elem = document.createElementNS('http://www.w3.org/2000/svg', tagName);

      for (const key in attrs) {
        const attrName = key === 'className' ? 'class' : key;
        elem.setAttribute(attrName, attrs[key]);
      }
    } // Populate children to created DOM Node


    for (const child of children) {
      if (Array.isArray(child)) {
        elem.append(...child);
      } else {
        elem.append(child);
      }
    } // After elements are created


    if (attrs?.dataSet) {
      for (const key in attrs.dataSet) {
        if (Object.prototype.hasOwnProperty.call(attrs.dataSet, key)) {
          elem.dataset[key] = attrs.dataSet[key];
        }
      }
    }

    if (attrs && !window.__aleartedJSXData) {
      if (Object.keys(attrs).find(key => key.match(/^data-/))) {
        console.trace(`Your "${tagName}" component uses a data-* attribute! Use dataSet instead!!`);
        alert('Do not use data-* in your JSX component! Use dataSet instead!! - Check the console.trace for more info');
        window.__aleartedJSXData = true;
      }
    }

    if (attrs?.ref) {
      // Create a custom reference to DOM node
      if (typeof attrs.ref === 'function') {
        attrs.ref(elem);
      } else {
        attrs.ref = elem;
      }
    }

    if (attrs?.on) {
      Object.entries(attrs.on).forEach(_ref => {
        let [event, handler] = _ref;
        elem.addEventListener(event, handler);
      });
    } // Append style attributes to created DOM node


    if (attrs?.style) {
      Object.entries(attrs.style).forEach(_ref2 => {
        let [property, value] = _ref2;
        elem.style.setProperty(property, value);
      }); // Object.assign(elem.style, attrs.style);
    }

    return elem;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new JSX());

/***/ }),

/***/ 8971:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": function() { return /* binding */ addEventDelegate; },
/* harmony export */   "Z": function() { return /* binding */ Event; }
/* harmony export */ });
const addEventDelegate = _ref => {
  let {
    context = document.documentElement,
    event = 'click',
    selector,
    handler,
    capture = false
  } = _ref;

  const listener = function (e) {
    // loop parent nodes from the target to the delegation node
    for (let target = e.target; target && target !== this; target = target.parentNode) {
      if (target.matches(selector)) {
        handler.call(target, e, target);
        break;
      }
    }
  };

  context.addEventListener(event, listener, capture);
  return () => {
    context.removeEventListener(event, listener, capture);
  };
};
class Event {
  constructor() {
    this.events = {};
  }

  get evts() {
    return Object.keys(this.events);
  }

  subscribe(event, handler) {
    this.events[event] = this.events[event] || [];
    this.events[event].push(handler);
    return () => this.unSubscribe(event, handler);
  }

  unSubscribe(event, handler) {
    const handlers = this.events[event];

    if (handlers && Array.isArray(handlers)) {
      for (let i = 0; i < handlers.length; i++) {
        if (handlers[i] === handler) {
          handlers.splice(i, 1);
          break;
        }
      }
    }
  }

  emit(event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    console.groupCollapsed(`Event emitted: ${event}`);
    console.trace();
    console.groupEnd();
    (this.events[event] || []).forEach(handler => {
      handler(...args);
    });
  }

}

/***/ }),

/***/ 6662:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRequestDefaultConfigs": function() { return /* binding */ getRequestDefaultConfigs; },
/* harmony export */   "fetchJSON": function() { return /* binding */ fetchJSON; },
/* harmony export */   "fetchCache": function() { return /* binding */ fetchCache; },
/* harmony export */   "fetchSection": function() { return /* binding */ fetchSection; },
/* harmony export */   "fetchJsonCache": function() { return /* binding */ fetchJsonCache; }
/* harmony export */ });
/* provided dependency */ var createElement = __webpack_require__(6295)["default"];
const requestDefaultConfigs = {
  mode: 'same-origin',
  credentials: 'same-origin',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json'
  }
};
function getRequestDefaultConfigs() {
  return JSON.parse(JSON.stringify(requestDefaultConfigs));
}
const fetchJSON = function (url) {
  let config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getRequestDefaultConfigs();
  return fetch(url, config).then(function (response) {
    if (!response.ok) {
      throw response;
    }

    return response.json();
  });
};
const cache = new Map();
const fetchCache = function (url) {
  let config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getRequestDefaultConfigs();
  return new Promise((resolve, reject) => {
    let cached = cache.get(url);
    if (cached) return resolve(cached);
    fetch(url, config).then(res => {
      cached = res.text();
      cache.set(url, cached);
      resolve(cached);
    }).catch(reject);
  });
};
const sectionCache = new Map();
const fetchSection = function (sectionId) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const {
    url: _url,
    fromCache = false,
    params = {}
  } = options;
  return new Promise((resolve, reject) => {
    const url = new URL(_url || window.location.href);
    url.searchParams.set('section_id', sectionId);
    Object.entries(params).forEach(_ref => {
      let [k, v] = _ref;
      return url.searchParams.set(k, v);
    });

    if (fromCache) {
      const cached = sectionCache.get(url);
      if (cached) return resolve(cached);
    }

    fetch(url, getRequestDefaultConfigs()).then(res => {
      if (res.ok) return res.text();
      reject(`Failed to load section: ${sectionId}`);
    }).then(html => {
      const div = createElement("div", null);
      div.innerHTML = html;
      sectionCache.set(url, div);
      resolve(div);
    }).catch(reject);
  });
};
const cache2 = new Map();
const fetchJsonCache = function (url) {
  let config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : requestDefaultConfigs;
  return new Promise((resolve, reject) => {
    if (cache2.get(url)) {
      return resolve(cache2.get(url));
    }

    fetch(url, config).then(res => {
      if (res.ok) {
        const json = res.json();
        resolve(json);
        cache2.set(url, json);
        return json;
      } else {
        reject(res);
      }
    }).catch(reject);
  });
};

/***/ }),

/***/ 5118:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var MinimogTheme = __webpack_require__(4558)["MinimogTheme"];
/* provided dependency */ var MinimogEvents = __webpack_require__(4558)["MinimogEvents"];
/* provided dependency */ var MinimogStrings = __webpack_require__(4558)["MinimogStrings"];
const {
  getRequestDefaultConfigs
} = __webpack_require__(6662);

const Shopify = window.Shopify || {};
/**
 * Override the behavior of https://cdn.shopify.com/s/shopify/api.jquery.js
 */

/*

IMPORTANT:

Ajax requests that update Shopify's cart must be queued and sent synchronously to the server.
Meaning: you must wait for your 1st ajax callback to send your 2nd request, and then wait
for its callback to send your 3rd request, etc.

*/

/*

Override so that Shopify.formatMoney returns pretty
money values instead of cents.

*/
// Shopify.money_format = '${{amount}}';

/*

Events (override!)

Example override:
  ... add to your theme.liquid's script tag....

  Shopify.onItemAdded = function(line_item) {
    $('message').update('Added '+line_item.title + '...');
  }

*/

Shopify.onError = function (XMLHttpRequest, textStatus) {
  // Shopify returns a description of the error in XMLHttpRequest.responseText.
  // It is JSON.
  // Example: {"description":"The product 'Amelia - Small' is already sold out.","status":500,"message":"Cart Error"}
  var data = eval('(' + XMLHttpRequest.responseText + ')');

  if (data.message) {
    alert(data.message + '(' + data.status + '): ' + data.description);
  } else {
    alert('Error : ' + Shopify.fullMessagesFromErrors(data).join('; ') + '.');
  }
};

Shopify.fullMessagesFromErrors = function (errors) {
  var fullMessages = [];
  Array.from(errors).forEach(function (messages, attribute) {
    Array.from(messages).forEach(function (message, index) {
      fullMessages.push(attribute + ' ' + message);
    });
  });
  return fullMessages;
};

Shopify.onCartUpdate = async function (cart) {
  let open_drawer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  try {
    const {
      Cart
    } = MinimogTheme;

    if (Cart) {
      if (!cart) {
        await Cart.refreshCart();
        cart = Cart.cart;
      }

      if (open_drawer) {
        await Cart.renderNewCart();
        Cart.openCartDrawer();
      }

      MinimogEvents.emit('ON_CART_UPDATE', cart);
      console.info(`There are now ${cart.item_count} items in the cart. Should open drawer: ${open_drawer}`);
    }
  } catch (err) {
    console.error("Failed to trigger Shopify.onCartUpdate()", err);
  }
};

Shopify.onCartShippingRatesUpdate = function (rates, shipping_address) {
  var readable_address = '';
  if (shipping_address.zip) readable_address += shipping_address.zip + ', ';
  if (shipping_address.province) readable_address += shipping_address.province + ', ';
  readable_address += shipping_address.country;
  alert('There are ' + rates.length + ' shipping rates available for ' + readable_address + ', starting at ' + Shopify.formatMoney(rates[0].price) + '.');
};
/**
 * Shopify will override the fetch and XHR request for analytics so we will not override it.
 * Use the Shopify.onItemAdded instead.
 * @param line_item
 * @param open_drawer
 */


Shopify.onItemAdded = async function (line_item) {
  let open_drawer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  console.info(`New item added to cart: `, line_item, `Should open drawer: ${open_drawer}`);

  try {
    const {
      Cart
    } = MinimogTheme;
    MinimogEvents.emit('ON_ITEM_ADDED', line_item);

    if (Cart) {
      await Cart.refreshCart();

      if (open_drawer) {
        await Cart.renderNewCart();
        Cart.openCartDrawer();
        MinimogTheme.Notification.show({
          target: Cart.domNodes?.cartDrawerItems,
          method: 'prepend',
          type: 'success',
          message: MinimogStrings.itemAdded,
          delay: 400
        });
      }

      await Shopify.onCartUpdate(Cart.cart, false);
    }
  } catch (err) {
    console.error(`Failed to execute Shopify.onItemAdded()`, err);
  }
};

Shopify.onProduct = function (product) {
  alert('Received everything we ever wanted to know about ' + product.title);
};
/* Tools */

/*
Examples of call:
Shopify.formatMoney(600000, 'â‚¬{{amount_with_comma_separator}} EUR')
Shopify.formatMoney(600000, 'â‚¬{{amount}} EUR')
Shopify.formatMoney(600000, '${{amount_no_decimals}}')
Shopify.formatMoney(600000, '{{ shop.money_format }}') in a Liquid template!

In a Liquid template, you have access to a shop money formats with:
{{ shop.money_format }}
{{ shop.money_with_currency_format }}
{{ shop.money_without_currency_format }}
All these formats are editable on the Preferences page in your admin.
*/


Shopify.formatMoney = function (cents, format) {
  if (typeof cents == 'string') {
    cents = cents.replace('.', '');
  }

  var value = '';
  var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
  var formatString = format || this.money_format;

  function defaultOption(opt, def) {
    return typeof opt == 'undefined' ? def : opt;
  }

  function formatWithDelimiters(number, precision, thousands, decimal) {
    precision = defaultOption(precision, 2);
    thousands = defaultOption(thousands, ',');
    decimal = defaultOption(decimal, '.');

    if (isNaN(number) || number == null) {
      return 0;
    }

    number = (number / 100.0).toFixed(precision);
    var parts = number.split('.'),
        dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
        cents = parts[1] ? decimal + parts[1] : '';
    return dollars + cents;
  }

  switch (formatString.match(placeholderRegex)[1]) {
    case 'amount':
      value = formatWithDelimiters(cents, 2);
      break;

    case 'amount_no_decimals':
      value = formatWithDelimiters(cents, 0);
      break;

    case 'amount_with_comma_separator':
      value = formatWithDelimiters(cents, 2, '.', ',');
      break;

    case 'amount_no_decimals_with_comma_separator':
      value = formatWithDelimiters(cents, 0, '.', ',');
      break;
  }

  return formatString.replace(placeholderRegex, value);
};

Shopify.resizeImage = function (image, size) {
  try {
    if (size === 'original') {
      return image;
    } else {
      var matches = image.match(/(.*\/[\w\-_.]+)\.(\w{2,4})/);
      return matches[1] + '_' + size + '.' + matches[2];
    }
  } catch (e) {
    return image;
  }
};
/* Ajax API */
// -------------------------------------------------------------------------------------
// POST to cart/add.js returns the JSON of the line item associated with the added item.
// -------------------------------------------------------------------------------------


Shopify.addItem = function (variant_id, quantity, callback) {
  console.info('// TODO: Implement Shopify.addItem function!'); //  quantity = quantity || 1
  // let params = {
  //   type: 'POST',
  //   url: '/cart/add.js',
  //   data: 'quantity=' + quantity + '&id=' + variant_id,
  //   dataType: 'json',
  //   success: function (line_item) {
  //     if ((typeof callback) === 'function') {
  //       callback(line_item)
  //     } else {
  //       Shopify.onItemAdded(line_item)
  //     }
  //   },
  //   error: function (XMLHttpRequest, textStatus) {
  //     Shopify.onError(XMLHttpRequest, textStatus)
  //   }
  // }
  // jQuery.ajax(params)
}; // ---------------------------------------------------------
// POST to cart/add.js returns the JSON of the line item.
// ---------------------------------------------------------


Shopify.addItemFromForm = function (form_id, callback) {
  console.info('// TODO: Implement Shopify.addItemFromForm function!'); // var params = {
  //   type: 'POST',
  //   url: '/cart/add.js',
  //   data: jQuery('#' + form_id).serialize(),
  //   dataType: 'json',
  //   success: function (line_item) {
  //     if ((typeof callback) === 'function') {
  //       callback(line_item)
  //     } else {
  //       Shopify.onItemAdded(line_item)
  //     }
  //   },
  //   error: function (XMLHttpRequest, textStatus) {
  //     Shopify.onError(XMLHttpRequest, textStatus)
  //   }
  // }
  // jQuery.ajax(params)
}; // ---------------------------------------------------------
// GET cart.js returns the cart in JSON.
// ---------------------------------------------------------


Shopify.getCart = function (callback) {
  console.info('// TODO: Implement Shopify.getCart function!'); // jQuery.getJSON('/cart.js', function (cart, textStatus) {
  //   if ((typeof callback) === 'function') {
  //     callback(cart)
  //   } else {
  //     Shopify.onCartUpdate(cart)
  //   }
  // })
};

Shopify.pollForCartShippingRatesForDestination = function (shippingAddress, callback, errback) {
  console.info('// TODO: Implement Shopify.pollForCartShippingRatesForDestination function!'); // errback = errback || Shopify.onError
  // var poller = function () {
  //   jQuery.ajax('/cart/async_shipping_rates', {
  //     dataType: 'json',
  //     success: function (response, textStatus, xhr) {
  //       if (xhr.status === 200) {
  //         if ((typeof callback) == 'function') {
  //           callback(response.shipping_rates, shippingAddress)
  //         } else {
  //           Shopify.onCartShippingRatesUpdate(response.shipping_rates, shippingAddress)
  //         }
  //       } else {
  //         setTimeout(poller, 500)
  //       }
  //     },
  //     error: errback
  //   })
  // }
  //
  // return poller
};

Shopify.getCartShippingRatesForDestination = function (shippingAddress, callback, errback) {
  console.info('// TODO: Implement Shopify.getCartShippingRatesForDestination function!'); // errback = errback || Shopify.onError
  // var params = {
  //   type: 'POST',
  //   url: '/cart/prepare_shipping_rates',
  //   data: Shopify.param({'shipping_address': shippingAddress}),
  //   success: Shopify.pollForCartShippingRatesForDestination(shippingAddress, callback, errback),
  //   error: errback
  // }
  //
  // jQuery.ajax(params)
}; // ---------------------------------------------------------
// GET products/<product-handle>.js returns the product in JSON.
// ---------------------------------------------------------


Shopify.getProduct = function (handle, callback) {
  console.info('// TODO: Implement Shopify.getProduct function!'); // jQuery.getJSON('/products/' + handle + '.js', function (product, textStatus) {
  //   if ((typeof callback) === 'function') {
  //     callback(product)
  //   } else {
  //     Shopify.onProduct(product)
  //   }
  // })
}; // ---------------------------------------------------------
// POST to cart/change.js returns the cart in JSON.
// ---------------------------------------------------------


Shopify.changeItem = function (variant_id, quantity, callback) {
  console.info('// TODO: Implement Shopify.changeItem function!'); // var params = {
  //   type: 'POST',
  //   url: '/cart/change.js',
  //   data: 'quantity=' + quantity + '&id=' + variant_id,
  //   dataType: 'json',
  //   success: function (cart) {
  //     if ((typeof callback) === 'function') {
  //       callback(cart)
  //     } else {
  //       Shopify.onCartUpdate(cart)
  //     }
  //   },
  //   error: function (XMLHttpRequest, textStatus) {
  //     Shopify.onError(XMLHttpRequest, textStatus)
  //   }
  // }
  // jQuery.ajax(params)
}; // ---------------------------------------------------------
// POST to cart/change.js returns the cart in JSON.
// ---------------------------------------------------------


Shopify.removeItem = function (variant_id, callback) {
  console.info('// TODO: Implement Shopify.removeItem function!'); // var params = {
  //   type: 'POST',
  //   url: '/cart/change.js',
  //   data: 'quantity=0&id=' + variant_id,
  //   dataType: 'json',
  //   success: function (cart) {
  //     if ((typeof callback) === 'function') {
  //       callback(cart)
  //     } else {
  //       Shopify.onCartUpdate(cart)
  //     }
  //   },
  //   error: function (XMLHttpRequest, textStatus) {
  //     Shopify.onError(XMLHttpRequest, textStatus)
  //   }
  // }
  // jQuery.ajax(params)
}; // ---------------------------------------------------------
// POST to cart/clear.js returns the cart in JSON.
// It removes all the items in the cart, but does
// not clear the cart attributes nor the cart note.
// ---------------------------------------------------------


Shopify.clear = async function () {
  let removeAttributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  try {
    await Promise.all([await fetch('/cart/clear.js'), removeAttributes && (await fetch('/cart/update.js', { ...getRequestDefaultConfigs(),
      method: 'POST',
      body: JSON.stringify({
        attributes: {
          _foxCartDiscounts: null
        }
      })
    }))]);
  } catch (error) {
    console.error("Failed to clear cart. ", error);
  }
}; // ---------------------------------------------------------
// POST to cart/update.js returns the cart in JSON.
// ---------------------------------------------------------


Shopify.updateCartFromForm = function (form_id, callback) {
  console.info('// TODO: Implement Shopify.updateCartFromForm function!'); // var params = {
  //   type: 'POST',
  //   url: '/cart/update.js',
  //   data: jQuery('#' + form_id).serialize(),
  //   dataType: 'json',
  //   success: function (cart) {
  //     if ((typeof callback) === 'function') {
  //       callback(cart)
  //     } else {
  //       Shopify.onCartUpdate(cart)
  //     }
  //   },
  //   error: function (XMLHttpRequest, textStatus) {
  //     Shopify.onError(XMLHttpRequest, textStatus)
  //   }
  // }
  // jQuery.ajax(params)
}; // ---------------------------------------------------------
// POST to cart/update.js returns the cart in JSON.
// To clear a particular attribute, set its value to an empty string.
// Receives attributes as a hash or array. Look at comments below.
// ---------------------------------------------------------


Shopify.updateCartAttributes = function (attributes, callback) {
  console.info('// TODO: Implement Shopify.updateCartAttributes function!'); // var data = ''
  // // If attributes is an array of the form:
  // // [ { key: 'my key', value: 'my value' }, ... ]
  // if (jQuery.isArray(attributes)) {
  //   jQuery.each(attributes, function (indexInArray, valueOfElement) {
  //     var key = attributeToString(valueOfElement.key)
  //     if (key !== '') {
  //       data += 'attributes[' + key + ']=' + attributeToString(valueOfElement.value) + '&'
  //     }
  //   })
  // }
  //   // If attributes is a hash of the form:
  // // { 'my key' : 'my value', ... }
  // else if ((typeof attributes === 'object') && attributes !== null) {
  //   jQuery.each(attributes, function (key, value) {
  //     data += 'attributes[' + attributeToString(key) + ']=' + attributeToString(value) + '&'
  //   })
  // }
  // var params = {
  //   type: 'POST',
  //   url: '/cart/update.js',
  //   data: data,
  //   dataType: 'json',
  //   success: function (cart) {
  //     if ((typeof callback) === 'function') {
  //       callback(cart)
  //     } else {
  //       Shopify.onCartUpdate(cart)
  //     }
  //   },
  //   error: function (XMLHttpRequest, textStatus) {
  //     Shopify.onError(XMLHttpRequest, textStatus)
  //   }
  // }
  // jQuery.ajax(params)
}; // ---------------------------------------------------------
// POST to cart/update.js returns the cart in JSON.
// ---------------------------------------------------------


Shopify.updateCartNote = function (note, callback) {
  console.info('// TODO: Implement Shopify.updateCartNote function!'); // var params = {
  //   type: 'POST',
  //   url: '/cart/update.js',
  //   data: 'note=' + attributeToString(note),
  //   dataType: 'json',
  //   success: function (cart) {
  //     if ((typeof callback) === 'function') {
  //       callback(cart)
  //     } else {
  //       Shopify.onCartUpdate(cart)
  //     }
  //   },
  //   error: function (XMLHttpRequest, textStatus) {
  //     Shopify.onError(XMLHttpRequest, textStatus)
  //   }
  // }
  // jQuery.ajax(params)
};

/***/ }),

/***/ 9367:
/***/ (function(module) {

!function (t, e) {
   true ? module.exports = e() : 0;
}(this, function () {
  return (() => {
    "use strict";

    var t = {
      d: (e, o) => {
        for (var a in o) t.o(o, a) && !t.o(e, a) && Object.defineProperty(e, a, {
          enumerable: !0,
          get: o[a]
        });
      },
      o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
      r: t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(t, "__esModule", {
          value: !0
        });
      }
    },
        e = {};

    function o(t, e) {
      for (var o = 0; o < e.length; o++) {
        var a = e[o];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
      }
    }

    function a(t, e, a) {
      return e && o(t.prototype, e), a && o(t, a), Object.defineProperty(t, "prototype", {
        writable: !1
      }), t;
    }

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    function r(t, e, o) {
      return e in t ? Object.defineProperty(t, e, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = o, t;
    }

    t.r(e), t.d(e, {
      default: () => s
    });
    var i = {
      overlay: null,
      thickness: "3px",
      color: "gray",
      startDuration: 1e3,
      finishDuration: 300
    },
        s = a(function t() {
      var e = this,
          o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.body,
          a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      n(this, t), r(this, "setLoadingData", function () {
        var t = e.target,
            o = e.options,
            a = o.startDuration,
            n = o.finishDuration,
            r = o.thickness,
            i = o.color;
        t.style.setProperty("--al-thickness", " ".concat(r)), t.style.setProperty("--al-color", " ".concat(i)), t.style.setProperty("--al-start-duration", " ".concat(a, "ms")), t.style.setProperty("--al-finish-duration", " ".concat(n, "ms"));
      }), r(this, "start", function () {
        e.target.classList.add("al-loading-bar", "start", "loading"), e.overlay && e.overlay.classList.add("al-loading-overlay", "overlay-show");
      }), r(this, "finish", function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function () {},
            o = e.target,
            a = e.overlay,
            n = e.cleanUp,
            r = e.options.finishDuration,
            i = window.getComputedStyle(o, ":before").width;
        o.style.setProperty("--al-end-width", i), o.classList.add("loaded"), o.classList.remove("loading"), window.requestAnimationFrame(function () {
          o.classList.add("finished"), e.overlay && a.classList.remove("overlay-show");
        }), setTimeout(n, 2 * r), setTimeout(t, r);
      }), r(this, "cleanUp", function () {
        e.target.classList.remove("al-loading-bar", "start", "loaded", "finished"), e.overlay && e.overlay.classList.remove("al-loading-overlay");
      }), this.options = Object.assign({}, i, a), this.target = o, this.overlay = this.options.overlay, this.setLoadingData();
    });
    return e;
  })();
});

/***/ }),

/***/ 3578:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var QueryHandler = __webpack_require__(3745);

var each = (__webpack_require__(2178).each);
/**
 * Represents a single media query, manages it's state and registered handlers for this query
 *
 * @constructor
 * @param {string} query the media query string
 * @param {boolean} [isUnconditional=false] whether the media query should run regardless of whether the conditions are met. Primarily for helping older browsers deal with mobile-first design
 */


function MediaQuery(query, isUnconditional) {
  this.query = query;
  this.isUnconditional = isUnconditional;
  this.handlers = [];
  this.mql = window.matchMedia(query);
  var self = this;

  this.listener = function (mql) {
    // Chrome passes an MediaQueryListEvent object, while other browsers pass MediaQueryList directly
    self.mql = mql.currentTarget || mql;
    self.assess();
  };

  this.mql.addListener(this.listener);
}

MediaQuery.prototype = {
  constuctor: MediaQuery,

  /**
   * add a handler for this query, triggering if already active
   *
   * @param {object} handler
   * @param {function} handler.match callback for when query is activated
   * @param {function} [handler.unmatch] callback for when query is deactivated
   * @param {function} [handler.setup] callback for immediate execution when a query handler is registered
   * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?
   */
  addHandler: function (handler) {
    var qh = new QueryHandler(handler);
    this.handlers.push(qh);
    this.matches() && qh.on();
  },

  /**
   * removes the given handler from the collection, and calls it's destroy methods
   *
   * @param {object || function} handler the handler to remove
   */
  removeHandler: function (handler) {
    var handlers = this.handlers;
    each(handlers, function (h, i) {
      if (h.equals(handler)) {
        h.destroy();
        return !handlers.splice(i, 1); //remove from array and exit each early
      }
    });
  },

  /**
   * Determine whether the media query should be considered a match
   *
   * @return {Boolean} true if media query can be considered a match, false otherwise
   */
  matches: function () {
    return this.mql.matches || this.isUnconditional;
  },

  /**
   * Clears all handlers and unbinds events
   */
  clear: function () {
    each(this.handlers, function (handler) {
      handler.destroy();
    });
    this.mql.removeListener(this.listener);
    this.handlers.length = 0; //clear array
  },

  /*
      * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match
      */
  assess: function () {
    var action = this.matches() ? 'on' : 'off';
    each(this.handlers, function (handler) {
      handler[action]();
    });
  }
};
module.exports = MediaQuery;

/***/ }),

/***/ 6779:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var MediaQuery = __webpack_require__(3578);

var Util = __webpack_require__(2178);

var each = Util.each;
var isFunction = Util.isFunction;
var isArray = Util.isArray;
/**
 * Allows for registration of query handlers.
 * Manages the query handler's state and is responsible for wiring up browser events
 *
 * @constructor
 */

function MediaQueryDispatch() {
  if (!window.matchMedia) {
    throw new Error('matchMedia not present, legacy browsers require a polyfill');
  }

  this.queries = {};
  this.browserIsIncapable = !window.matchMedia('only all').matches;
}

MediaQueryDispatch.prototype = {
  constructor: MediaQueryDispatch,

  /**
   * Registers a handler for the given media query
   *
   * @param {string} q the media query
   * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers
   * @param {function} options.match fired when query matched
   * @param {function} [options.unmatch] fired when a query is no longer matched
   * @param {function} [options.setup] fired when handler first triggered
   * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched
   * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers
   */
  register: function (q, options, shouldDegrade) {
    var queries = this.queries,
        isUnconditional = shouldDegrade && this.browserIsIncapable;

    if (!queries[q]) {
      queries[q] = new MediaQuery(q, isUnconditional);
    } //normalise to object in an array


    if (isFunction(options)) {
      options = {
        match: options
      };
    }

    if (!isArray(options)) {
      options = [options];
    }

    each(options, function (handler) {
      if (isFunction(handler)) {
        handler = {
          match: handler
        };
      }

      queries[q].addHandler(handler);
    });
    return this;
  },

  /**
   * unregisters a query and all it's handlers, or a specific handler for a query
   *
   * @param {string} q the media query to target
   * @param {object || function} [handler] specific handler to unregister
   */
  unregister: function (q, handler) {
    var query = this.queries[q];

    if (query) {
      if (handler) {
        query.removeHandler(handler);
      } else {
        query.clear();
        delete this.queries[q];
      }
    }

    return this;
  }
};
module.exports = MediaQueryDispatch;

/***/ }),

/***/ 3745:
/***/ (function(module) {

/**
 * Delegate to handle a media query being matched and unmatched.
 *
 * @param {object} options
 * @param {function} options.match callback for when the media query is matched
 * @param {function} [options.unmatch] callback for when the media query is unmatched
 * @param {function} [options.setup] one-time callback triggered the first time a query is matched
 * @param {boolean} [options.deferSetup=false] should the setup callback be run immediately, rather than first time query is matched?
 * @constructor
 */
function QueryHandler(options) {
  this.options = options;
  !options.deferSetup && this.setup();
}

QueryHandler.prototype = {
  constructor: QueryHandler,

  /**
   * coordinates setup of the handler
   *
   * @function
   */
  setup: function () {
    if (this.options.setup) {
      this.options.setup();
    }

    this.initialised = true;
  },

  /**
   * coordinates setup and triggering of the handler
   *
   * @function
   */
  on: function () {
    !this.initialised && this.setup();
    this.options.match && this.options.match();
  },

  /**
   * coordinates the unmatch event for the handler
   *
   * @function
   */
  off: function () {
    this.options.unmatch && this.options.unmatch();
  },

  /**
   * called when a handler is to be destroyed.
   * delegates to the destroy or unmatch callbacks, depending on availability.
   *
   * @function
   */
  destroy: function () {
    this.options.destroy ? this.options.destroy() : this.off();
  },

  /**
   * determines equality by reference.
   * if object is supplied compare options, if function, compare match callback
   *
   * @function
   * @param {object || function} [target] the target for comparison
   */
  equals: function (target) {
    return this.options === target || this.options.match === target;
  }
};
module.exports = QueryHandler;

/***/ }),

/***/ 2178:
/***/ (function(module) {

/**
 * Helper function for iterating over a collection
 *
 * @param collection
 * @param fn
 */
function each(collection, fn) {
  var i = 0,
      length = collection.length,
      cont;

  for (i; i < length; i++) {
    cont = fn(collection[i], i);

    if (cont === false) {
      break; //allow early exit
    }
  }
}
/**
 * Helper function for determining whether target object is an array
 *
 * @param target the object under test
 * @return {Boolean} true if array, false otherwise
 */


function isArray(target) {
  return Object.prototype.toString.apply(target) === '[object Array]';
}
/**
 * Helper function for determining whether target object is a function
 *
 * @param target the object under test
 * @return {Boolean} true if function, false otherwise
 */


function isFunction(target) {
  return typeof target === 'function';
}

module.exports = {
  isFunction: isFunction,
  isArray: isArray,
  each: each
};

/***/ }),

/***/ 1179:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var MediaQueryDispatch = __webpack_require__(6779);

module.exports = new MediaQueryDispatch();

/***/ }),

/***/ 1339:
/***/ (function() {

Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), window.Element && !Element.prototype.closest && (Element.prototype.closest = function (e) {
  var t = this;

  do {
    if (t.matches(e)) return t;
    t = t.parentElement || t.parentNode;
  } while (null !== t && 1 === t.nodeType);

  return null;
});

/***/ }),

/***/ 2297:
/***/ (function() {

!function () {
  function t() {
    var e = Array.prototype.slice.call(arguments),
        r = document.createDocumentFragment();
    e.forEach(function (e) {
      var t = e instanceof Node;
      r.appendChild(t ? e : document.createTextNode(String(e)));
    }), this.parentNode.insertBefore(r, this.nextSibling);
  }

  [Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach(function (e) {
    e.hasOwnProperty("after") || Object.defineProperty(e, "after", {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: t
    });
  });
}();

/***/ }),

/***/ 2422:
/***/ (function() {

!function () {
  function t() {
    var e = Array.prototype.slice.call(arguments),
        n = document.createDocumentFragment();
    e.forEach(function (e) {
      var t = e instanceof Node;
      n.appendChild(t ? e : document.createTextNode(String(e)));
    }), this.appendChild(n);
  }

  [Element.prototype, Document.prototype, DocumentFragment.prototype].forEach(function (e) {
    e.hasOwnProperty("append") || Object.defineProperty(e, "append", {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: t
    });
  });
}();

/***/ }),

/***/ 598:
/***/ (function() {

!function () {
  function t() {
    var e = Array.prototype.slice.call(arguments),
        n = document.createDocumentFragment();
    e.forEach(function (e) {
      var t = e instanceof Node;
      n.appendChild(t ? e : document.createTextNode(String(e)));
    }), this.insertBefore(n, this.firstChild);
  }

  [Element.prototype, Document.prototype, DocumentFragment.prototype].forEach(function (e) {
    e.hasOwnProperty("prepend") || Object.defineProperty(e, "prepend", {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: t
    });
  });
}();

/***/ }),

/***/ 1713:
/***/ (function() {

!function () {
  var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  };

  function t() {
    var e,
        t = this.parentNode,
        o = arguments.length;
    if (t) for (o || t.removeChild(this); o--;) "object" !== (void 0 === (e = arguments[o]) ? "undefined" : r(e)) ? e = this.ownerDocument.createTextNode(e) : e.parentNode && e.parentNode.removeChild(e), o ? t.insertBefore(this.previousSibling, e) : t.replaceChild(e, this);
  }

  [Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach(function (e) {
    e.hasOwnProperty("replaceWith") || Object.defineProperty(e, "replaceWith", {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: t
    });
  });
}();

/***/ }),

/***/ 643:
/***/ (function(module) {

var COMPLETE = 'complete',
    CANCELED = 'canceled';

function raf(task) {
  if ('requestAnimationFrame' in window) {
    return window.requestAnimationFrame(task);
  }

  setTimeout(task, 16);
}

function setElementScroll(element, x, y) {
  Math.max(0, x);
  Math.max(0, y);

  if (element.self === element) {
    element.scrollTo(x, y);
  } else {
    element.scrollLeft = x;
    element.scrollTop = y;
  }
}

function getTargetScrollLocation(scrollSettings, parent) {
  var align = scrollSettings.align,
      target = scrollSettings.target,
      targetPosition = target.getBoundingClientRect(),
      parentPosition,
      x,
      y,
      differenceX,
      differenceY,
      targetWidth,
      targetHeight,
      leftAlign = align && align.left != null ? align.left : 0.5,
      topAlign = align && align.top != null ? align.top : 0.5,
      leftOffset = align && align.leftOffset != null ? align.leftOffset : 0,
      topOffset = align && align.topOffset != null ? align.topOffset : 0,
      leftScalar = leftAlign,
      topScalar = topAlign;

  if (scrollSettings.isWindow(parent)) {
    targetWidth = Math.min(targetPosition.width, parent.innerWidth);
    targetHeight = Math.min(targetPosition.height, parent.innerHeight);
    x = targetPosition.left + parent.pageXOffset - parent.innerWidth * leftScalar + targetWidth * leftScalar;
    y = targetPosition.top + parent.pageYOffset - parent.innerHeight * topScalar + targetHeight * topScalar;
    x -= leftOffset;
    y -= topOffset;
    x = scrollSettings.align.lockX ? parent.pageXOffset : x;
    y = scrollSettings.align.lockY ? parent.pageYOffset : y;
    differenceX = x - parent.pageXOffset;
    differenceY = y - parent.pageYOffset;
  } else {
    targetWidth = targetPosition.width;
    targetHeight = targetPosition.height;
    parentPosition = parent.getBoundingClientRect();
    var offsetLeft = targetPosition.left - (parentPosition.left - parent.scrollLeft);
    var offsetTop = targetPosition.top - (parentPosition.top - parent.scrollTop);
    x = offsetLeft + targetWidth * leftScalar - parent.clientWidth * leftScalar;
    y = offsetTop + targetHeight * topScalar - parent.clientHeight * topScalar;
    x -= leftOffset;
    y -= topOffset;
    x = Math.max(Math.min(x, parent.scrollWidth - parent.clientWidth), 0);
    y = Math.max(Math.min(y, parent.scrollHeight - parent.clientHeight), 0);
    x = scrollSettings.align.lockX ? parent.scrollLeft : x;
    y = scrollSettings.align.lockY ? parent.scrollTop : y;
    differenceX = x - parent.scrollLeft;
    differenceY = y - parent.scrollTop;
  }

  return {
    x: x,
    y: y,
    differenceX: differenceX,
    differenceY: differenceY
  };
}

function animate(parent) {
  var scrollSettings = parent._scrollSettings;

  if (!scrollSettings) {
    return;
  }

  var maxSynchronousAlignments = scrollSettings.maxSynchronousAlignments;
  var location = getTargetScrollLocation(scrollSettings, parent),
      time = Date.now() - scrollSettings.startTime,
      timeValue = Math.min(1 / scrollSettings.time * time, 1);

  if (scrollSettings.endIterations >= maxSynchronousAlignments) {
    setElementScroll(parent, location.x, location.y);
    parent._scrollSettings = null;
    return scrollSettings.end(COMPLETE);
  }

  var easeValue = 1 - scrollSettings.ease(timeValue);
  setElementScroll(parent, location.x - location.differenceX * easeValue, location.y - location.differenceY * easeValue);

  if (time >= scrollSettings.time) {
    scrollSettings.endIterations++; // Align ancestor synchronously

    scrollSettings.scrollAncestor && animate(scrollSettings.scrollAncestor);
    animate(parent);
    return;
  }

  raf(animate.bind(null, parent));
}

function defaultIsWindow(target) {
  return target.self === target;
}

function transitionScrollTo(target, parent, settings, scrollAncestor, callback) {
  var idle = !parent._scrollSettings,
      lastSettings = parent._scrollSettings,
      now = Date.now(),
      cancelHandler,
      passiveOptions = {
    passive: true
  };

  if (lastSettings) {
    lastSettings.end(CANCELED);
  }

  function end(endType) {
    parent._scrollSettings = null;

    if (parent.parentElement && parent.parentElement._scrollSettings) {
      parent.parentElement._scrollSettings.end(endType);
    }

    if (settings.debug) {
      console.log('Scrolling ended with type', endType, 'for', parent);
    }

    callback(endType);

    if (cancelHandler) {
      parent.removeEventListener('touchstart', cancelHandler, passiveOptions);
      parent.removeEventListener('wheel', cancelHandler, passiveOptions);
    }
  }

  var maxSynchronousAlignments = settings.maxSynchronousAlignments;

  if (maxSynchronousAlignments == null) {
    maxSynchronousAlignments = 3;
  }

  parent._scrollSettings = {
    startTime: now,
    endIterations: 0,
    target: target,
    time: settings.time,
    ease: settings.ease,
    align: settings.align,
    isWindow: settings.isWindow || defaultIsWindow,
    maxSynchronousAlignments: maxSynchronousAlignments,
    end: end,
    scrollAncestor
  };

  if (!('cancellable' in settings) || settings.cancellable) {
    cancelHandler = end.bind(null, CANCELED);
    parent.addEventListener('touchstart', cancelHandler, passiveOptions);
    parent.addEventListener('wheel', cancelHandler, passiveOptions);
  }

  if (idle) {
    animate(parent);
  }

  return cancelHandler;
}

function defaultIsScrollable(element) {
  return 'pageXOffset' in element || (element.scrollHeight !== element.clientHeight || element.scrollWidth !== element.clientWidth) && getComputedStyle(element).overflow !== 'hidden';
}

function defaultValidTarget() {
  return true;
}

function findParentElement(el) {
  if (el.assignedSlot) {
    return findParentElement(el.assignedSlot);
  }

  if (el.parentElement) {
    if (el.parentElement.tagName === 'BODY') {
      return el.parentElement.ownerDocument.defaultView || el.parentElement.ownerDocument.ownerWindow;
    }

    return el.parentElement;
  }

  if (el.getRootNode) {
    var parent = el.getRootNode();

    if (parent.nodeType === 11) {
      return parent.host;
    }
  }
}

module.exports = function (target, settings, callback) {
  if (!target) {
    return;
  }

  if (typeof settings === 'function') {
    callback = settings;
    settings = null;
  }

  if (!settings) {
    settings = {};
  }

  settings.time = isNaN(settings.time) ? 1000 : settings.time;

  settings.ease = settings.ease || function (v) {
    return 1 - Math.pow(1 - v, v / 2);
  };

  settings.align = settings.align || {};
  var parent = findParentElement(target),
      parents = 1;

  function done(endType) {
    parents--;

    if (!parents) {
      callback && callback(endType);
    }
  }

  var validTarget = settings.validTarget || defaultValidTarget;
  var isScrollable = settings.isScrollable;

  if (settings.debug) {
    console.log('About to scroll to', target);

    if (!parent) {
      console.error('Target did not have a parent, is it mounted in the DOM?');
    }
  }

  var scrollingElements = [];

  while (parent) {
    if (settings.debug) {
      console.log('Scrolling parent node', parent);
    }

    if (validTarget(parent, parents) && (isScrollable ? isScrollable(parent, defaultIsScrollable) : defaultIsScrollable(parent))) {
      parents++;
      scrollingElements.push(parent);
    }

    parent = findParentElement(parent);

    if (!parent) {
      done(COMPLETE);
      break;
    }
  }

  return scrollingElements.reduce((cancel, parent, index) => transitionScrollTo(target, parent, settings, scrollingElements[index + 1], done), null);
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

;// CONCATENATED MODULE: ./node_modules/@shopify/theme-sections/section.js
var SECTION_ID_ATTR = 'data-section-id';
function Section(container, properties) {
  this.container = validateContainerElement(container);
  this.id = container.getAttribute(SECTION_ID_ATTR);
  this.extensions = []; // eslint-disable-next-line es5/no-es6-static-methods

  Object.assign(this, validatePropertiesObject(properties));
  this.onLoad();
}
Section.prototype = {
  onLoad: Function.prototype,
  onUnload: Function.prototype,
  onSelect: Function.prototype,
  onDeselect: Function.prototype,
  onBlockSelect: Function.prototype,
  onBlockDeselect: Function.prototype,
  extend: function extend(extension) {
    this.extensions.push(extension); // Save original extension
    // eslint-disable-next-line es5/no-es6-static-methods

    var extensionClone = Object.assign({}, extension);
    delete extensionClone.init; // Remove init function before assigning extension properties
    // eslint-disable-next-line es5/no-es6-static-methods

    Object.assign(this, extensionClone);

    if (typeof extension.init === 'function') {
      extension.init.apply(this);
    }
  }
};

function validateContainerElement(container) {
  if (!(container instanceof Element)) {
    throw new TypeError('Theme Sections: Attempted to load section. The section container provided is not a DOM element.');
  }

  if (container.getAttribute(SECTION_ID_ATTR) === null) {
    throw new Error('Theme Sections: The section container provided does not have an id assigned to the ' + SECTION_ID_ATTR + ' attribute.');
  }

  return container;
}

function validatePropertiesObject(value) {
  if (typeof value !== 'undefined' && typeof value !== 'object' || value === null) {
    throw new TypeError('Theme Sections: The properties object provided is not a valid');
  }

  return value;
} // Object.assign() polyfill from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Polyfill


if (typeof Object.assign != 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, 'assign', {
    value: function assign(target) {
      // .length of function is 2
      'use strict';

      if (target == null) {
        // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) {
          // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }

      return to;
    },
    writable: true,
    configurable: true
  });
}
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-sections/theme-sections.js
/*
 * @shopify/theme-sections
 * -----------------------------------------------------------------------------
 *
 * A framework to provide structure to your Shopify sections and a load and unload
 * lifecycle. The lifecycle is automatically connected to theme editor events so
 * that your sections load and unload as the editor changes the content and
 * settings of your sections.
 */

var SECTION_TYPE_ATTR = 'data-section-type';
var theme_sections_SECTION_ID_ATTR = 'data-section-id';
window.Shopify = window.Shopify || {};
window.Shopify.theme = window.Shopify.theme || {};
window.Shopify.theme.sections = window.Shopify.theme.sections || {};
var registered = window.Shopify.theme.sections.registered = window.Shopify.theme.sections.registered || {};
var instances = window.Shopify.theme.sections.instances = window.Shopify.theme.sections.instances || [];
function register(type, properties) {
  if (typeof type !== 'string') {
    throw new TypeError('Theme Sections: The first argument for .register must be a string that specifies the type of the section being registered');
  }

  if (typeof registered[type] !== 'undefined') {
    throw new Error('Theme Sections: A section of type "' + type + '" has already been registered. You cannot register the same section type twice');
  }

  function TypedSection(container) {
    Section.call(this, container, properties);
  }

  TypedSection.constructor = Section;
  TypedSection.prototype = Object.create(Section.prototype);
  TypedSection.prototype.type = type;
  return registered[type] = TypedSection;
}
function unregister(types) {
  types = normalizeType(types);
  types.forEach(function (type) {
    delete registered[type];
  });
}
function load(types, containers) {
  types = normalizeType(types);

  if (typeof containers === 'undefined') {
    containers = document.querySelectorAll('[' + SECTION_TYPE_ATTR + ']');
  }

  containers = normalizeContainers(containers);
  types.forEach(function (type) {
    var TypedSection = registered[type];

    if (typeof TypedSection === 'undefined') {
      return;
    }

    containers = containers.filter(function (container) {
      // Filter from list of containers because container already has an instance loaded
      if (isInstance(container)) {
        return false;
      } // Filter from list of containers because container doesn't have data-section-type attribute


      if (container.getAttribute(SECTION_TYPE_ATTR) === null) {
        return false;
      } // Keep in list of containers because current type doesn't match


      if (container.getAttribute(SECTION_TYPE_ATTR) !== type) {
        return true;
      }

      instances.push(new TypedSection(container)); // Filter from list of containers because container now has an instance loaded

      return false;
    });
  });
}
function unload(selector) {
  var instancesToUnload = getInstances(selector);
  instancesToUnload.forEach(function (instance) {
    var index = instances.map(function (e) {
      return e.id;
    }).indexOf(instance.id);
    instances.splice(index, 1);
    instance.onUnload();
  });
}
function extend(selector, extension) {
  var instancesToExtend = getInstances(selector);
  instancesToExtend.forEach(function (instance) {
    instance.extend(extension);
  });
}
function getInstances(selector) {
  var filteredInstances = []; // Fetch first element if its an array

  if (NodeList.prototype.isPrototypeOf(selector) || Array.isArray(selector)) {
    var firstElement = selector[0];
  } // If selector element is DOM element


  if (selector instanceof Element || firstElement instanceof Element) {
    var containers = normalizeContainers(selector);
    containers.forEach(function (container) {
      filteredInstances = filteredInstances.concat(instances.filter(function (instance) {
        return instance.container === container;
      }));
    }); // If select is type string
  } else if (typeof selector === 'string' || typeof firstElement === 'string') {
    var types = normalizeType(selector);
    types.forEach(function (type) {
      filteredInstances = filteredInstances.concat(instances.filter(function (instance) {
        return instance.type === type;
      }));
    });
  }

  return filteredInstances;
}
function getInstanceById(id) {
  var instance;

  for (var i = 0; i < instances.length; i++) {
    if (instances[i].id === id) {
      instance = instances[i];
      break;
    }
  }

  return instance;
}
function isInstance(selector) {
  return getInstances(selector).length > 0;
}

function normalizeType(types) {
  // If '*' then fetch all registered section types
  if (types === '*') {
    types = Object.keys(registered); // If a single section type string is passed, put it in an array
  } else if (typeof types === 'string') {
    types = [types]; // If single section constructor is passed, transform to array with section
    // type string
  } else if (types.constructor === Section) {
    types = [types.prototype.type]; // If array of typed section constructors is passed, transform the array to
    // type strings
  } else if (Array.isArray(types) && types[0].constructor === Section) {
    types = types.map(function (TypedSection) {
      return TypedSection.prototype.type;
    });
  }

  types = types.map(function (type) {
    return type.toLowerCase();
  });
  return types;
}

function normalizeContainers(containers) {
  // Nodelist with entries
  if (NodeList.prototype.isPrototypeOf(containers) && containers.length > 0) {
    containers = Array.prototype.slice.call(containers); // Empty Nodelist
  } else if (NodeList.prototype.isPrototypeOf(containers) && containers.length === 0) {
    containers = []; // Handle null (document.querySelector() returns null with no match)
  } else if (containers === null) {
    containers = []; // Single DOM element
  } else if (!Array.isArray(containers) && containers instanceof Element) {
    containers = [containers];
  }

  return containers;
}

if (window.Shopify.designMode) {
  document.addEventListener('shopify:section:load', function (event) {
    var id = event.detail.sectionId;
    var container = event.target.querySelector('[' + theme_sections_SECTION_ID_ATTR + '="' + id + '"]');

    if (container !== null) {
      load(container.getAttribute(SECTION_TYPE_ATTR), container);
    }
  });
  document.addEventListener('shopify:section:unload', function (event) {
    var id = event.detail.sectionId;
    var container = event.target.querySelector('[' + theme_sections_SECTION_ID_ATTR + '="' + id + '"]');
    var instance = getInstances(container)[0];

    if (typeof instance === 'object') {
      unload(container);
    }
  });
  document.addEventListener('shopify:section:select', function (event) {
    var instance = getInstanceById(event.detail.sectionId);

    if (typeof instance === 'object') {
      instance.onSelect(event);
    }
  });
  document.addEventListener('shopify:section:deselect', function (event) {
    var instance = getInstanceById(event.detail.sectionId);

    if (typeof instance === 'object') {
      instance.onDeselect(event);
    }
  });
  document.addEventListener('shopify:block:select', function (event) {
    var instance = getInstanceById(event.detail.sectionId);

    if (typeof instance === 'object') {
      instance.onBlockSelect(event);
    }
  });
  document.addEventListener('shopify:block:deselect', function (event) {
    var instance = getInstanceById(event.detail.sectionId);

    if (typeof instance === 'object') {
      instance.onBlockDeselect(event);
    }
  });
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-predictive-search/src/validate.js
function validateQuery(query) {
  var error;

  if (query === null || query === undefined) {
    error = new TypeError("'query' is missing");
    error.type = "argument";
    throw error;
  }

  if (typeof query !== "string") {
    error = new TypeError("'query' is not a string");
    error.type = "argument";
    throw error;
  }
}
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-predictive-search/src/utilities/CustomError.js
function GenericError() {
  var error = Error.call(this);
  error.name = "Server error";
  error.message = "Something went wrong on the server";
  error.status = 500;
  return error;
}
function NotFoundError(status) {
  var error = Error.call(this);
  error.name = "Not found";
  error.message = "Not found";
  error.status = status;
  return error;
}
function ServerError() {
  var error = Error.call(this);
  error.name = "Server error";
  error.message = "Something went wrong on the server";
  error.status = 500;
  return error;
}
function ContentTypeError(status) {
  var error = Error.call(this);
  error.name = "Content-Type error";
  error.message = "Content-Type was not provided or is of wrong type";
  error.status = status;
  return error;
}
function JsonParseError(status) {
  var error = Error.call(this);
  error.name = "JSON parse error";
  error.message = "JSON syntax error";
  error.status = status;
  return error;
}
function ThrottledError(status, name, message, retryAfter) {
  var error = Error.call(this);
  error.name = name;
  error.message = message;
  error.status = status;
  error.retryAfter = retryAfter;
  return error;
}
function InvalidParameterError(status, name, message) {
  var error = Error.call(this);
  error.name = name;
  error.message = message;
  error.status = status;
  return error;
}
function ExpectationFailedError(status, name, message) {
  var error = Error.call(this);
  error.name = name;
  error.message = message;
  error.status = status;
  return error;
}
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-predictive-search/src/request.js

function request(searchPath, configParams, query, onSuccess, onError) {
  var xhr = new XMLHttpRequest();
  var route = searchPath + '/suggest.json';

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      var contentType = xhr.getResponseHeader("Content-Type");

      if (xhr.status >= 500) {
        onError(new ServerError());
        return;
      }

      if (xhr.status === 404) {
        onError(new NotFoundError(xhr.status));
        return;
      }

      if (typeof contentType !== "string" || contentType.toLowerCase().match("application/json") === null) {
        onError(new ContentTypeError(xhr.status));
        return;
      }

      if (xhr.status === 417) {
        try {
          var invalidParameterJson = JSON.parse(xhr.responseText);
          onError(new InvalidParameterError(xhr.status, invalidParameterJson.message, invalidParameterJson.description));
        } catch (error) {
          onError(new JsonParseError(xhr.status));
        }

        return;
      }

      if (xhr.status === 422) {
        try {
          var expectationFailedJson = JSON.parse(xhr.responseText);
          onError(new ExpectationFailedError(xhr.status, expectationFailedJson.message, expectationFailedJson.description));
        } catch (error) {
          onError(new JsonParseError(xhr.status));
        }

        return;
      }

      if (xhr.status === 429) {
        try {
          var throttledJson = JSON.parse(xhr.responseText);
          onError(new ThrottledError(xhr.status, throttledJson.message, throttledJson.description, xhr.getResponseHeader("Retry-After")));
        } catch (error) {
          onError(new JsonParseError(xhr.status));
        }

        return;
      }

      if (xhr.status === 200) {
        try {
          var res = JSON.parse(xhr.responseText);
          res.query = query;
          onSuccess(res);
        } catch (error) {
          onError(new JsonParseError(xhr.status));
        }

        return;
      }

      try {
        var genericErrorJson = JSON.parse(xhr.responseText);
        onError(new GenericError(xhr.status, genericErrorJson.message, genericErrorJson.description));
      } catch (error) {
        onError(new JsonParseError(xhr.status));
      }

      return;
    }
  };

  xhr.open("get", route + "?q=" + encodeURIComponent(query) + "&" + configParams);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send();
}
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-predictive-search/src/utilities/debounce.js
function debounce(func, wait) {
  var timeout = null;
  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      timeout = null;
      func.apply(context, args);
    }, wait || 0);
  };
}
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-predictive-search/src/utilities/Dispatcher.js
function Dispatcher() {
  this.events = {};
}

Dispatcher.prototype.on = function (eventName, callback) {
  var event = this.events[eventName];

  if (!event) {
    event = new DispatcherEvent(eventName);
    this.events[eventName] = event;
  }

  event.registerCallback(callback);
};

Dispatcher.prototype.off = function (eventName, callback) {
  var event = this.events[eventName];

  if (event && event.callbacks.indexOf(callback) > -1) {
    event.unregisterCallback(callback);

    if (event.callbacks.length === 0) {
      delete this.events[eventName];
    }
  }
};

Dispatcher.prototype.dispatch = function (eventName, payload) {
  var event = this.events[eventName];

  if (event) {
    event.fire(payload);
  }
};

function DispatcherEvent(eventName) {
  this.eventName = eventName;
  this.callbacks = [];
}

DispatcherEvent.prototype.registerCallback = function (callback) {
  this.callbacks.push(callback);
};

DispatcherEvent.prototype.unregisterCallback = function (callback) {
  var index = this.callbacks.indexOf(callback);

  if (index > -1) {
    this.callbacks.splice(index, 1);
  }
};

DispatcherEvent.prototype.fire = function (payload) {
  var callbacks = this.callbacks.slice(0);
  callbacks.forEach(function (callback) {
    callback(payload);
  });
};
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-predictive-search/src/utilities/Cache.js
function Cache(config) {
  this._store = {};
  this._keys = [];

  if (config && config.bucketSize) {
    this.bucketSize = config.bucketSize;
  } else {
    this.bucketSize = 20;
  }
}

Cache.prototype.set = function (key, value) {
  if (this.count() >= this.bucketSize) {
    var deleteKey = this._keys.splice(0, 1);

    this.delete(deleteKey);
  }

  this._keys.push(key);

  this._store[key] = value;
  return this._store;
};

Cache.prototype.get = function (key) {
  return this._store[key];
};

Cache.prototype.has = function (key) {
  return Boolean(this._store[key]);
};

Cache.prototype.count = function () {
  return Object.keys(this._store).length;
};

Cache.prototype.delete = function (key) {
  var exists = Boolean(this._store[key]);
  delete this._store[key];
  return exists && !this._store[key];
};
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-predictive-search/src/utilities/objectToQueryParams.js
function objectToQueryParams(obj, parentKey) {
  var output = "";
  parentKey = parentKey || null;
  Object.keys(obj).forEach(function (key) {
    var outputKey = key + "=";

    if (parentKey) {
      outputKey = parentKey + "[" + key + "]";
    }

    switch (trueTypeOf(obj[key])) {
      case "object":
        output += objectToQueryParams(obj[key], parentKey ? outputKey : key);
        break;

      case "array":
        output += outputKey + "=" + obj[key].join(",") + "&";
        break;

      default:
        if (parentKey) {
          outputKey += "=";
        }

        output += outputKey + encodeURIComponent(obj[key]) + "&";
        break;
    }
  });
  return output;
}

function trueTypeOf(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-predictive-search/src/theme-predictive-search.js



var DEBOUNCE_RATE = 10;
var requestDebounced = debounce(request, DEBOUNCE_RATE);
function PredictiveSearch(config) {
  if (!config) {
    throw new TypeError("No config object was specified");
  }

  var configParameters = config;
  this._retryAfter = null;
  this._currentQuery = null;
  this.dispatcher = new Dispatcher();
  this.cache = new Cache({
    bucketSize: 40
  });
  this.searchPath = configParameters.search_path || "/search";

  if (configParameters.search_path) {
    delete configParameters['search_path'];
  }

  this.configParams = objectToQueryParams(configParameters);
}
PredictiveSearch.SEARCH_PATH = "/search";
PredictiveSearch.TYPES = {
  PRODUCT: "product",
  PAGE: "page",
  ARTICLE: "article",
  COLLECTION: "collection"
};
PredictiveSearch.FIELDS = {
  AUTHOR: "author",
  BODY: "body",
  PRODUCT_TYPE: "product_type",
  TAG: "tag",
  TITLE: "title",
  VARIANTS_BARCODE: "variants.barcode",
  VARIANTS_SKU: "variants.sku",
  VARIANTS_TITLE: "variants.title",
  VENDOR: "vendor"
};
PredictiveSearch.UNAVAILABLE_PRODUCTS = {
  SHOW: "show",
  HIDE: "hide",
  LAST: "last"
};

PredictiveSearch.prototype.query = function query(query) {
  try {
    validateQuery(query);
  } catch (error) {
    this.dispatcher.dispatch("error", error);
    return;
  }

  if (query === "") {
    return this;
  }

  this._currentQuery = normalizeQuery(query);
  var cacheResult = this.cache.get(this._currentQuery);

  if (cacheResult) {
    this.dispatcher.dispatch("success", cacheResult);
    return this;
  }

  requestDebounced(this.searchPath, this.configParams, query, function (result) {
    this.cache.set(normalizeQuery(result.query), result);

    if (normalizeQuery(result.query) === this._currentQuery) {
      this._retryAfter = null;
      this.dispatcher.dispatch("success", result);
    }
  }.bind(this), function (error) {
    if (error.retryAfter) {
      this._retryAfter = error.retryAfter;
    }

    this.dispatcher.dispatch("error", error);
  }.bind(this));
  return this;
};

PredictiveSearch.prototype.on = function on(eventName, callback) {
  this.dispatcher.on(eventName, callback);
  return this;
};

PredictiveSearch.prototype.off = function on(eventName, callback) {
  this.dispatcher.off(eventName, callback);
  return this;
};

function normalizeQuery(query) {
  if (typeof query !== "string") {
    return null;
  }

  return query.trim().replace(" ", "-").toLowerCase();
}
// EXTERNAL MODULE: ./node_modules/scroll-into-view/scrollIntoView.js
var scrollIntoView = __webpack_require__(643);
var scrollIntoView_default = /*#__PURE__*/__webpack_require__.n(scrollIntoView);
// EXTERNAL MODULE: ./src/js/utilities/events.js
var events = __webpack_require__(8971);
;// CONCATENATED MODULE: ./src/js/utilities/load-assets.js
function loadJS(src) {
  let target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body;
  let async = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  let defer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return new Promise((resolve, reject) => {
    const doc = target.ownerDocument;
    const currScript = doc.querySelector(`script[src="${src}"]`);

    if (currScript) {
      if (currScript.dataset.loaded) return resolve(true);
      currScript.addEventListener("load", () => {
        currScript.dataset.loaded = true;
        resolve(true);
      });
      return;
    }

    const script = doc.createElement('script');
    script.src = src;
    script.async = async;
    script.defer = defer;
    script.addEventListener("load", () => {
      script.dataset.loaded = true;
      resolve(true);
    });
    script.onerror = reject;
    target.appendChild(script);
  });
}
function loadCSS(href) {
  let target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.head;
  return new Promise((resolve, reject) => {
    const doc = target.ownerDocument;
    const currLink = doc.querySelector(`link[href="${href}"]`);

    if (currLink) {
      if (currLink.dataset.loaded) return resolve(true);
      currLink.addEventListener("load", () => {
        currLink.dataset.loaded = true;
        resolve(true);
      });
      return;
    }

    const link = doc.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.addEventListener("load", () => {
      link.dataset.loaded = true;
      resolve(true);
    });
    link.onerror = reject;
    target.appendChild(link);
  });
}
const {
  themeScriptURLs,
  themeStyleURLs
} = window;
if (!themeScriptURLs || !themeStyleURLs) console.warn("Missing Assest URLs source");
const themeAssets = {
  'js': {
    urls: themeScriptURLs,
    load: loadJS
  },
  'css': {
    urls: themeStyleURLs,
    load: loadCSS
  }
};

function log(asset) {
  console.groupCollapsed('%c Asset loaded: ', '#f7a046', asset);
  console.trace();
  console.groupEnd();
}

function loadAssets(param) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  return new Promise((resolve, reject) => {
    const files = typeof param === "string" ? [param] : param;
    Promise.all(files.map(async file => {
      try {
        const [, name, type] = file.match(/(.*)\.(js|css)$/) || [, file, 'js'];
        const {
          urls: {
            [name]: {
              url
            }
          },
          load
        } = themeAssets[type];
        await load(url, ...rest);
        log(`${name}.${type}`);
      } catch (err) {
        console.warn(`Failed to load asset: ${file}.`, err);
      }
    })).then(resolve).catch(reject);
  });
}
;// CONCATENATED MODULE: ./src/js/utilities/localization.js
function initLocalization() {
  const switchers = document.querySelectorAll('[data-localization-select]');
  switchers && switchers.forEach(function (select) {
    select.addEventListener('change', function (e) {
      const value = e.target.value;
      const form = select.closest('[data-localization-form]');
      const input = form.querySelector('input[data-localization-input]');
      input && input.setAttribute('value', value);
      input && form.submit();
    });
  });
}
;// CONCATENATED MODULE: ./src/js/utilities/index.js
/* provided dependency */ var MinimogSettings = __webpack_require__(4558)["MinimogSettings"];
/* provided dependency */ var createElement = __webpack_require__(6295)["default"];






window.__getSectionInstanceByType = type => window.Shopify.theme.sections.instances.find(inst => inst.type === type);

function productFormCheck(form) {
  const fieldSelectors = '[data-theme-fields] [name][required]:not([hidden]):not([type="hidden"])';
  const requiredFields = form.querySelectorAll(fieldSelectors);
  const missingFields = [];
  requiredFields.forEach(field => {
    if (field.type === 'radio') {
      const raidoButtons = form.querySelectorAll(`input[name="${field.name}"]`);
      const selected = Array.from(raidoButtons).some(btn => btn.checked);

      if (!selected) {
        missingFields.push(field);
      }
    } else if (!field.value) {
      missingFields.push(field);
    }
  });
  return missingFields;
}
function utilities_queryDomNodes() {
  let selectors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  const domNodes = Object.entries(selectors).reduce((acc, _ref) => {
    let [name, selector] = _ref;
    const findOne = typeof selector === 'string';
    const queryMethod = findOne ? 'querySelector' : 'querySelectorAll';
    const sl = findOne ? selector : selector[0];
    acc[name] = context?.[queryMethod]?.(sl);

    if (!findOne && acc[name]) {
      acc[name] = [...acc[name]];
    }

    return acc;
  }, {});
  return domNodes;
}
const utilities_camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, $1 => `_${$1.toLowerCase()}`);
function animateReplace(oldNode, newNode) {
  if (!oldNode || !newNode) {
    return;
  }

  oldNode.classList.add('ar__old-node');
  newNode.classList.add('ar__new-node');
  oldNode.style.opacity = 0;
  oldNode.replaceWith(newNode);
  setTimeout(() => newNode.style.opacity = 1);
}
function createSearchLink(query) {
  const searchParams = new URLSearchParams({
    type: 'product',
    ['options[unavailable_products]']: 'last',
    ['options[prefix]']: 'last',
    q: query
  });
  return `${PredictiveSearch.SEARCH_PATH}?${searchParams.toString()}`;
}
function isInViewport(elem) {
  const rect = elem.getBoundingClientRect(); // NOTE: not accuracy in all cases but we only need this

  return rect.top > 0 && rect.top < (window.innerHeight || document.documentElement.clientHeight);
}

function loadStyles() {
  const {
    themeStyleURLs = {}
  } = window;
  Object.values(themeStyleURLs).forEach(style => {
    const {
      url,
      required,
      afterWindowLoaded
    } = style;

    if (url && required) {
      if (!afterWindowLoaded || window?.__sfWindowLoaded) {
        loadCSS(url);
      } else {
        window.addEventListener("load", () => loadCSS(url));
      }
    }
  });
}

function loadScripts() {
  const {
    themeScriptURLs = {}
  } = window;
  Object.values(themeScriptURLs).forEach(script => {
    const {
      url,
      required,
      afterWindowLoaded
    } = script;

    if (url && required) {
      if (!afterWindowLoaded || window?.__sfWindowLoaded) {
        loadJS(url);
      } else {
        window.addEventListener("load", () => loadJS(url));
      }
    }
  });
}

function addCustomerFormHandlers() {
  (0,events/* addEventDelegate */.X)({
    selector: '.sf-customer__forms',
    handler: (e, form) => {
      if (e.target.classList.contains('sf-customer__reset-password-btn')) {
        form.classList.add('show-recover-password-form');
        return;
      }

      if (e.target.classList.contains('sf-customer__cancel-reset')) {
        form.classList.remove('show-recover-password-form');
        return;
      }
    }
  });

  if (document.querySelector('.sf-customer__recover-form-posted')) {
    document.querySelector('.sf-customer__forms')?.classList?.add('show-recover-password-form');
  }
}

function getVideoURL(id, host) {
  if (host === 'youtube') {
    return `https://www.youtube.com/watch?v=${id}&gl=true`;
  }

  if (host === 'vimeo') {
    return `https://vimeo.com/${id}`;
  }

  return '';
}

function showCookieConsent() {
  const {
    show_cookie_consent
  } = MinimogSettings;
  const cookieAccepted = getCookie('cookieconsent_status');

  if (show_cookie_consent && !cookieAccepted) {
    loadAssets(['cookieConsent.css', 'cookieConsent.js']);
  }
}

function initTermsCheckbox() {
  (0,events/* addEventDelegate */.X)({
    selector: '.agree-terms [name="agree_terms"]',
    event: 'change',
    handler: (e, target) => {
      const button = target.closest('.agree-terms').nextElementSibling;

      if (button && button.hasAttributes('data-terms-action')) {
        if (target.checked) {
          button.removeAttribute('disabled');
        } else {
          button.setAttribute('disabled', true);
        }
      }
    }
  });
}

const scrollToTopTarget = document.querySelector('#scroll-to-top-target');
function scrollToTop(callback) {
  scrollIntoView_default()(scrollToTopTarget, callback);
}

function initScrollTop() {
  const scrollTopButton = document.querySelector('#scroll-to-top-button');

  if (scrollTopButton) {
    scrollTopButton.addEventListener('click', scrollToTop);
    window.addEventListener('scroll', function () {
      const method = window.scrollY > 100 ? 'add' : 'remove';
      scrollTopButton.classList[method]('opacity-100');
    });
  }
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}
function getCookie(cname) {
  var name = cname + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }

  return '';
}
function addRecentViewedProduct() {
  const cookies = getCookie('sf-recent-viewed-products');
  let products = cookies ? JSON.parse(cookies) : [];

  if (products.indexOf(MinimogSettings.productHandle) === -1) {
    products.unshift(MinimogSettings.productHandle);
    products = products.slice(0, 20);
    setCookie('sf-recent-viewed-products', JSON.stringify(products));
  }
}
const utilities_generateDomFromString = value => {
  const d = createElement("div", null);
  d.innerHTML = value;
  return d;
};
function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function updateParam(key, value) {
  var {
    location
  } = window;
  var baseUrl = [location.protocol, '//', location.host, location.pathname].join('');
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  if (urlParams.has(key)) {
    if (value !== '' && value !== 'undefined') {
      urlParams.set(key, value);
    }

    if (value === '' || value === 'undefined') {
      urlParams.delete(key);
    }
  } else {
    if (value) urlParams.append(key, value);
  }

  window.history.replaceState({}, "", baseUrl + '?' + urlParams.toString());
  return false;
}
function getParams() {
  let params = {};
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  for (const entry of urlParams.entries()) {
    params[entry[0]] = entry[1];
  }

  return params;
}

const setSwatchesOptions = () => {
  try {
    MinimogSettings._colorSwatches = [];
    MinimogSettings._imageSwatches = [];
    MinimogSettings.product_colors.split(',').filter(Boolean).forEach(colorSwatch => {
      const [key, value] = colorSwatch.split(':');

      MinimogSettings._colorSwatches.push({
        key: key.trim().toLowerCase(),
        value: value?.trim?.() || ''
      });
    });
    Object.keys(MinimogSettings).forEach(key => {
      if (key.includes('filter_color') && !key.includes('.png')) {
        if (MinimogSettings[`${key}.png`]) {
          MinimogSettings._imageSwatches.push({
            key: MinimogSettings[key].toLowerCase(),
            value: MinimogSettings[`${key}.png`]
          });
        }
      }
    });
  } catch (e) {
    console.error('Failed to convert color/image swatch structure!', e);
  }
};

const refreshProductReview = () => {
  if (typeof SMARTIFYAPPS !== 'undefined' && SMARTIFYAPPS.rv.installed) {
    SMARTIFYAPPS.rv.scmReviewsRate.actionCreateReviews();
  }

  if (typeof Yotpo !== 'undefined' && typeof Yotpo.API === 'function') {
    const yotpoApi = new Yotpo.API(yotpo);
    yotpoApi?.refreshWidgets();
  }
};
const utilities_formatUrl = (pageType, handle, query) => {
  let url;
  const {
    routes
  } = MinimogSettings;
  const root = routes.root.endsWith('/') ? '' : routes.root;
  url = `${root}/${pageType}/${handle}`;
  if (query) url += `?${query}`;
  return url;
};
function runHelpers() {
  try {
    loadScripts();
    loadStyles(); ////////////////////

    setSwatchesOptions();
    showCookieConsent();
    initTermsCheckbox();
    initLocalization();
    addCustomerFormHandlers();
    initScrollTop();
  } catch (err) {
    console.error('Failed to run helpers.', err);
  }
}
;// CONCATENATED MODULE: ./src/js/modules/mega-menu.js
/* provided dependency */ var MinimogTheme = __webpack_require__(4558)["MinimogTheme"];
/* provided dependency */ var MinimogLibs = __webpack_require__(4558)["MinimogLibs"];




class Megamenu {
  constructor(container) {
    _defineProperty(this, "selectors", {
      hamburgerButtons: ['.sf-menu-button'],
      menuWrapper: '.sf-menu-wrapper',
      menu: '.sf-menu-content',
      links: ['.sf-link'],
      userSection: '.sf-customer-section',
      desktopMenuItems: ['.sf-menu-item'],
      desktopSubMenus: '.sf-menu__desktop-sub-menu'
    });

    _defineProperty(this, "menuSelectors", {
      subMenu: '.sf-menu__desktop-sub-menu'
    });

    _defineProperty(this, "signInTabSelectors", {
      button: '.my-account-btn.signin',
      header: '.tab-header input.signin',
      content: '.tab-content.signin'
    });

    _defineProperty(this, "registerTabSelectors", {
      button: '.my-account-btn.register',
      header: '.tab-header input.register',
      content: '.tab-content.register'
    });

    _defineProperty(this, "activeDesktopMenuItem", null);

    _defineProperty(this, "sliders", {});

    _defineProperty(this, "closeDesktopSubmenu", menuItemIndex => {
      const menuItem = this.menuData[menuItemIndex];
      const {
        header
      } = menuItem;
      header?.classList?.remove('show-menu');
    });

    this.container = container;
    this.transitionDuration = 300;
    this.domNodes = utilities_queryDomNodes(this.selectors);
    this.menuData = [...this.domNodes.desktopMenuItems].map(item => {
      const header = item.closest('header');
      const menuNodes = utilities_queryDomNodes(this.menuSelectors, item);
      return {
        header,
        item,
        ...menuNodes,
        active: false
      };
    });

    if (this.domNodes.userSection) {
      this.accountTabs = {
        signin: utilities_queryDomNodes(this.signInTabSelectors, this.container),
        register: utilities_queryDomNodes(this.registerTabSelectors, this.container)
      };
      this.domNodes.closeBtn = this.domNodes.userSection.querySelector('.close-btn');
    }

    this.init();
    MinimogTheme = MinimogTheme || {};
    MinimogTheme.headerSliders = this.sliders;
  }

  init() {
    [...this.domNodes.hamburgerButtons].forEach(btn => {
      btn.addEventListener("click", () => {
        document.documentElement.classList.add('prevent-scroll');
        this.openMenu();
      });
    });
    this.domNodes.menuWrapper.addEventListener("click", e => {
      if (e.target === this.domNodes.menuWrapper) {
        this.closeMenu();
      }
    });
    this.initMobileMegaMenu();

    if (this.domNodes.userSection) {
      this.initUserSection();
    }

    this.initDesktopMegaMenu();
  }

  initDesktopMegaMenu() {
    [...this.menuData].forEach(menuItem => {
      const {
        item,
        subMenu
      } = menuItem;

      if (subMenu) {
        const productsBanner = subMenu.querySelector('.sf-mega-menu-products');

        if (productsBanner) {
          if (window?.__sfWindowLoaded) {
            menuItem.productsBannerSlider = this.initProductsBanner(productsBanner);
          } else {
            window.addEventListener("load", () => {
              menuItem.productsBannerSlider = this.initProductsBanner(productsBanner);
            });
          }
        }
      } // if (item?.classList?.contains('sf-menu-item--no-mega')) {
      //     const menuWrap = item.querySelector('.sf-menu__dropdown')
      //     let itemPos = item.getBoundingClientRect()
      //     let itemPosOb = {
      //         bottom: itemPos.bottom,
      //         left: itemPos.left,
      //         paddingBottom: window.getComputedStyle(item.firstElementChild, null).getPropertyValue('padding-bottom')
      //     }
      //     if(menuWrap) {
      //         menuWrap.style.bottom = -itemPosOb.bottom + itemPosOb.paddingBottom + 'px'
      //         menuWrap.style.left = itemPosOb.left + 'px'
      //         item?.addEventListener('mouseover', () => {
      //             itemPos = item.getBoundingClientRect()
      //             itemPosOb['bottom'] = itemPos.bottom
      //             itemPosOb['left'] = itemPos.left
      //             menuWrap.style.bottom = -itemPosOb.bottom + itemPosOb.paddingBottom + 'px'
      //             menuWrap.style.left = itemPosOb.left + 'px'
      //         })
      //     }
      // }

    });
  }

  initProductsBanner(banner) {
    const header = banner.closest('header');
    const menuItem = banner.closest('.sf-menu-item');
    const screenClass = `.${header?.dataset?.screen}` || '';
    const id = banner.dataset.id;
    const sliderContainer = document.querySelector(`.sf-slider-${id}`);
    const columns = sliderContainer.dataset.column;
    let slider;
    loadAssets(['swiper.css', 'swiper.js']).then(() => {
      slider = new MinimogLibs.Swiper(`${screenClass} .sf-slider-${id}`, {
        slidesPerView: 1,
        loop: false,
        autoplay: false,
        breakpoints: {
          1200: {
            slidesPerView: columns
          },
          992: {
            slidesPerView: columns >= 2 ? 2 : columns
          }
        }
      });
      this.sliders[menuItem.dataset.index] = slider;

      if (slider) {
        const prevBtn = document.querySelector(`#sf-slider-controls-${id} .sf-slider__controls-prev`);
        const nextBtn = document.querySelector(`#sf-slider-controls-${id} .sf-slider__controls-next`);
        prevBtn && prevBtn.addEventListener('click', () => slider.slidePrev());
        nextBtn && nextBtn.addEventListener('click', () => slider.slideNext());
      }
    });
  }

  initMobileMegaMenu() {
    [...this.domNodes.links].forEach(link => {
      const subLinks = link.querySelector('.sf-sub-links');
      const backBtn = link.querySelector('.back');

      if (subLinks) {
        (0,events/* addEventDelegate */.X)({
          context: link,
          selector: '[data-toggle-submenu]',
          handler: (e, target) => {
            e.preventDefault();
            const level = target.dataset.toggleSubmenu;
            console.log(level, 'level');
            const parentNode = e.target.parentNode;

            if (e.target.classList.contains('back') || parentNode.classList.contains('back')) {
              return;
            }

            this.openSubMenu(subLinks, level);
          }
        });
      }

      if (backBtn) {
        (0,events/* addEventDelegate */.X)({
          context: link,
          selector: '[data-toggle-submenu]',
          handler: (e, target) => {
            e.preventDefault();
            const level = target.dataset.toggleSubmenu;
            console.log(level, 'level');
            const parentNode = e.target.parentNode;

            if (e.target.classList.contains('back') || parentNode.classList.contains('back')) {
              return;
            }

            this.openSubMenu(subLinks, level);
          }
        });
        backBtn.addEventListener("click", e => {
          const level = e.target.dataset.level;
          this.closeSubMenu(subLinks, level);
        });
      }
    });
  }

  initUserSection() {
    document.body.appendChild(this.domNodes.userSection);
    let activeTab = this.accountTabs['signin'].content;
    Object.values(this.accountTabs).forEach(_ref => {
      let {
        button,
        header,
        content
      } = _ref;
      header.addEventListener('click', () => {
        activeTab.classList.add('hidden');
        content.classList.remove('hidden');
        activeTab = content;
      });
      button.addEventListener('click', () => {
        header.click();
        this.domNodes.userSection.classList.add('-translate-x-full');
        this.closeMenu();
      });
    });
    this.domNodes.closeBtn.addEventListener('click', () => {
      this.domNodes.userSection.classList.remove('-translate-x-full');
    });
  } //////////////// MOBILE MENU EVENTS


  openMenu() {
    const {
      menuWrapper
    } = this.domNodes;
    menuWrapper.style.setProperty('--window-inner-height', `${window.innerHeight}px`);
    menuWrapper.classList.remove('hidden');
    setTimeout(() => {
      menuWrapper.style.setProperty('--tw-bg-opacity', '0.3');
      menuWrapper.firstElementChild.classList.remove('-translate-x-full');
    });
  }

  closeMenu() {
    const {
      menuWrapper,
      menu
    } = this.domNodes;
    menuWrapper.style.setProperty('--tw-bg-opacity', '0');
    menuWrapper.firstElementChild.classList.add('-translate-x-full');
    setTimeout(() => {
      menuWrapper.classList.add('hidden');
      document.documentElement.classList.remove('prevent-scroll');
      menu.classList.remove('sf-sub-menu-open');
      menu.classList.remove('open-level-1', 'open-level-2'); // Close search
    }, this.transitionDuration);
  }

  openSubMenu(subLinks, level) {
    let openClass = `open-level-${level}`;
    subLinks.classList.add('flex');
    subLinks.classList.remove('hidden');
    this.domNodes.menu.classList.add(openClass);
    setTimeout(() => {
      this.domNodes.menu.classList.add('sf-sub-menu-open');
    }, this.transitionDuration);
  }

  closeSubMenu(subLinks, level) {
    let openClass = `open-level-${level}`;
    console.log(openClass, 'openClass');
    if (level === '1') this.domNodes.menu.classList.remove('sf-sub-menu-open');
    this.domNodes.menu.classList.remove(openClass);
    setTimeout(() => {
      subLinks.classList.add('hidden');
    }, this.transitionDuration);
  }

}
;// CONCATENATED MODULE: ./src/js/modules/siteNav.js
/* provided dependency */ var siteNav_MinimogTheme = __webpack_require__(4558)["MinimogTheme"];


class SiteNav {
  constructor(container) {
    _defineProperty(this, "selectors", {
      menuItems: ['.sf-nav .sf-menu-item'],
      dropdowns: ['.sf-menu__submenu'],
      subMenu: '.sf-menu__submenu',
      dropdownBg: '.sf-nav__bg',
      overlay: '.sf-header__overlay',
      swiper: '.swiper-container'
    });

    _defineProperty(this, "classes", {
      slideFromRight: 'slide-from-right',
      slideReveal: 'slide-reveal',
      active: 'sf-mega-active'
    });

    _defineProperty(this, "headerSticky", false);

    _defineProperty(this, "attachEvents", () => {
      this.domNodes.menuItems.forEach((menuItem, index) => {
        menuItem.addEventListener('mouseenter', evt => this.onMenuItemEnter(evt, index));
        menuItem.addEventListener('mouseleave', evt => this.onMenuItemLeave(evt, index));
      });
    });

    _defineProperty(this, "initDropdownSize", () => {
      this.container?.style.setProperty('--sf-dropdown-width', this.windowWidth());
      this.container?.style.setProperty('--sf-dropdown-height', this.windowHeight());
    });

    _defineProperty(this, "onMenuItemEnter", (evt, index) => {
      const {
        target
      } = evt;
      if (target.classList.contains('sf-menu-item--no-mega')) return;
      clearTimeout(this.timeoutLeave);
      this.activeIndex = Number(target.dataset?.index);
      this.headerSticky = this.container?.dataset.sticky === 'true';
      this.reInitSlider(target);
      this.visited ? this.container?.classList.remove(this.classes.slideReveal) : this.container?.classList.add(this.classes.slideReveal);
      this.visited = true;
      this.lastActiveIndex >= 0 && this.activeIndex >= 0 && (this.lastActiveIndex < this.activeIndex ? this.container?.classList.add(this.classes.slideFromRight) : this.lastActiveIndex > this.activeIndex && this.container?.classList.remove(this.classes.slideFromRight));
      this.getElementBoundingRect(target).then(rect => {
        if (rect) {
          this.container?.style.setProperty('--sf-dropdown-width', rect.width);
          this.container?.style.setProperty('--sf-dropdown-height', rect.height);
        }

        this.timeoutEnter = setTimeout(() => {
          if (this.activeIndex !== Number(target.dataset.index)) return;
          this.container?.classList.add(this.classes.active);
          target.closest('.sf-menu-item').classList.add('sf-menu-item--active');
        }, 120);
      });
    });

    _defineProperty(this, "onMenuItemLeave", (evt, index) => {
      // console.log(evt, 'leave')
      this.activeIndex = -1;
      this.lastActiveIndex = index;
      evt.target.closest('.sf-menu-item').classList.remove('sf-menu-item--active');
      this.timeoutLeave = setTimeout(() => {
        if (this.activeIndex === -1 || this.activeIndex < 0) {
          this.visited = false;
        }

        this.resetMegaMenu(evt.target);
      }, 80);
    });

    _defineProperty(this, "reInitSlider", menuItem => {
      const swiper = menuItem.querySelector(this.selectors.swiper);
      if (!swiper) return;
      const itemIndex = menuItem.dataset.index;
      const slider = siteNav_MinimogTheme?.headerSliders[itemIndex];
      slider?.update();
    });

    _defineProperty(this, "getElementBoundingRect", async element => {
      const subMenu = element.querySelector(this.selectors.subMenu);

      if (subMenu) {
        const rect = subMenu.getBoundingClientRect();
        return {
          width: rect.width,
          height: rect.height,
          left: rect.left,
          top: rect.top
        };
      }
    });

    _defineProperty(this, "resetMegaMenu", () => {
      this.activeIndex = -1;
      clearTimeout(this.timeoutEnter);
      this.container?.classList.remove(this.classes.active, this.classes.slideFromRight, this.classes.slideReveal, 'sf-header--bg-black', 'sf-header--bg-white');
    });

    _defineProperty(this, "windowWidth", () => {
      return window.innerWidth;
    });

    _defineProperty(this, "windowHeight", () => {
      return window.innerHeight;
    });

    _defineProperty(this, "destroy", () => {
      this.domNodes.menuItems.forEach((menuItem, index) => {
        menuItem.removeEventListener('mouseenter', evt => this.onMenuItemEnter(evt, index));
        menuItem.removeEventListener('mouseleave', evt => this.onMenuItemLeave(evt, index));
      });
    });

    if (!container) return;
    this.container = container;
    this.domNodes = utilities_queryDomNodes(this.selectors, this.container);
    this.activeIndex = -1;
    this.lastActiveIndex = -1;
    this.visited = false;
    this.timeoutEnter = null;
    this.timeoutLeave = null;
    this.attachEvents();
  }

}
;// CONCATENATED MODULE: ./src/js/utilities/select.js
function initCustomSelect(container) {
  let x, i, j, l, ll, selElmnt, a, b, c, ar, at;
  x = container.getElementsByClassName("sf__custom-select");
  l = x.length;

  if (x.length > 0) {
    for (i = 0; i < l; i++) {
      selElmnt = x[i].getElementsByTagName("select")[0];
      x[i].innerHTML = '';
      x[i].appendChild(selElmnt);
      ll = selElmnt.length;
      /*for each element, create a new DIV that will act as the selected item:*/

      a = document.createElement("DIV");
      a.setAttribute("class", "select-selected");
      at = document.createElement("SPAN");
      at.innerHTML = selElmnt.options[selElmnt.selectedIndex]?.innerHTML;
      x[i].appendChild(a);
      a.appendChild(at);
      ar = document.createElement("SPAN");
      ar.innerHTML = `<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"/></svg>`;
      ar.setAttribute("class", "select-arrow");
      a.appendChild(ar);
      /*for each element, create a new DIV that will contain the option list:*/

      b = document.createElement("DIV");
      b.setAttribute("class", "select-items select-hide");

      for (j = 0; j < ll; j++) {
        /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;

        if (selElmnt.options[j].getAttribute('selected')) {
          c.setAttribute("class", "same-as-selected");
        }

        c.addEventListener("click", function (e) {
          /*when an item is clicked, update the original select box,
          and the selected item:*/
          let y, i, k, s, h, sl, yl;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          sl = s.length;
          h = this.parentNode.previousSibling;

          for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              h.childNodes[0].innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName("same-as-selected");
              yl = y.length;

              for (k = 0; k < yl; k++) {
                y[k].removeAttribute("class");
              }

              this.setAttribute("class", "same-as-selected");
              break;
            }
          }

          s.dispatchEvent(new Event('change'));
          s.dispatchEvent(new Event('click'));
          h.click();
        });
        b.appendChild(c);
      }

      x[i].appendChild(b);
      a.addEventListener("click", function (e) {
        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
      });
    }
  }
}

function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x,
      y,
      i,
      xl,
      yl,
      arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;

  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }

  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/


document.addEventListener("click", closeAllSelect);
;// CONCATENATED MODULE: ./src/js/sections/header.js
/* provided dependency */ var header_MinimogTheme = __webpack_require__(4558)["MinimogTheme"];
/* provided dependency */ var header_MinimogSettings = __webpack_require__(4558)["MinimogSettings"];





register('header', {
  onLoad: function () {
    this.isDesignMode = this.container?.dataset?.designMode === 'true';
    this.selectors = {
      headers: ['header'],
      logos: ['.sf-logo'],
      topbar: '.sf-topbar',
      headerWrapper: '.header__wrapper',
      topbarClose: '.sf-topbar__close'
    };
    initCustomSelect(this.container);
    this.domNodes = utilities_queryDomNodes(this.selectors, this.container);
    this.innerWidth = window.innerWidth;
    this.offsetTop = this.domNodes.headerWrapper.offsetTop;
    this.headerHeight = this.domNodes.headerWrapper.offsetHeight;
    this.stickyEnabled = this.container?.dataset?.sticky === 'true' || false;
    this.classes = {
      scrollUp: 'scroll-up',
      scrollDown: 'scroll-down',
      stuck: 'stuck'
    };

    try {
      this.transparentHeader = this.domNodes?.headers?.[0]?.dataset?.transparent === 'true';
      this.initAddon();
      this.handleSticky();
      this.siteNav = new SiteNav(this.container);
      window?._shh?.();
      window?._smcp?.(); // this.container.style.opacity = 1

      window.__sfHeader = this;
      window.addEventListener('resize', () => {
        this.innerWidth = window.innerWidth;
      });

      if (this.transparentHeader && this.innerWidth > 1280) {
        this.domNodes.headerWrapper?.classList?.add('transparent-on-top');
      } else {
        this.domNodes.headerWrapper?.classList?.remove('transparent-on-top');
      }
    } catch (error) {
      console.error('Failed to init header section.', error);
    }
  },
  initAddon: function () {
    this.megamenu = new Megamenu(this.container);

    if (this.isDesignMode) {
      header_MinimogTheme = header_MinimogTheme || {};
      header_MinimogTheme?.Wishlist?.updateWishlistCount?.(); // MinimogTheme?.Currency?.queryDomNodes?.()
      // MinimogTheme?.Currency?.addEventToCurrenySwitchers?.()
      // MinimogTheme?.Search?.queryDomNodes?.()

      header_MinimogTheme?.Search?.init?.();
    }
  },
  handleSticky: function () {
    let extraSpace = header_MinimogSettings.template === 'product' ? 20 : 50;
    if (!this.stickyEnabled) return;
    let lastScroll = 0;

    if (this.offsetTop === 0) {
      this.container.classList.add(this.classes.stuck);
    }

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= this.offsetTop) {
        this.container.classList.remove(this.classes.scrollUp, this.classes.stuck);

        if (this.transparentHeader && this.innerWidth > 1279) {
          this.domNodes.headerWrapper?.classList?.add?.('transparent-on-top');
        }

        return;
      }

      this.container.classList.add(this.classes.stuck);

      if (currentScroll > this.headerHeight + extraSpace && currentScroll > lastScroll && !this.container.classList.contains(this.classes.scrollDown)) {
        this.container.classList.remove(this.classes.scrollUp);
        this.container.classList.add(this.classes.scrollDown);
      } else if (currentScroll < lastScroll && this.container.classList.contains(this.classes.scrollDown)) {
        this.container.classList.remove(this.classes.scrollDown);
        this.container.classList.add(this.classes.scrollUp);

        if (this.transparentHeader && this.innerWidth > 1279) {
          this.domNodes.headerWrapper?.classList?.remove?.('transparent-on-top');
        }
      }

      lastScroll = currentScroll;
    });
  },
  onUnload: function () {
    this.siteNav.destroy();
  }
});
;// CONCATENATED MODULE: ./src/js/utilities/debounce.js
function debounce_debounce(fn) {
  var _this = this;

  let wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  let t;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    clearTimeout(t);
    t = setTimeout(() => fn.apply(_this, args), wait);
  };
}
;// CONCATENATED MODULE: ./src/js/utilities/accordion.js




class Accordion {
  constructor(container) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.defaultOptions;

    _defineProperty(this, "defaultOptions", {
      presetContentHeight: false,
      duration: 300,
      callback: () => {}
    });

    _defineProperty(this, "selectors", {
      items: ['.sf__accordion-item'],
      buttons: ['.sf__accordion-button'],
      contents: ['.sf__accordion-content']
    });

    _defineProperty(this, "openClass", 'open');

    _defineProperty(this, "initClass", 'acc-initialized');

    _defineProperty(this, "removeEvents", null);

    _defineProperty(this, "destroy", () => {
      this.removeEvents();
      window.removeEventListener("resize", this.debouncedSetContentHeight);
    });

    _defineProperty(this, "setContentOpacity", () => {
      this.domNodes.contents.forEach(cont => cont.style.opacity = 1);
    });

    _defineProperty(this, "setItemOverflowState", () => {
      this.domNodes?.items?.forEach((item, index) => {
        let contents = this.domNodes?.contents?.[index];
        const method = item?.classList?.contains?.(this.openClass) ? 'remove' : 'add';
        contents?.classList?.[method]?.('overflow-hidden');
      });
    });

    _defineProperty(this, "setContentHeight", () => {
      this.domNodes = utilities_queryDomNodes(this.selectors, this.container);
      const {
        items,
        contents
      } = this.domNodes;
      items.forEach((item, index) => {
        if (item?.classList.contains(this.openClass)) {
          item?.style?.setProperty('--content-max-height', `auto`);
          const maxHeight = contents?.[index]?.scrollHeight;
          item?.style?.setProperty('--content-max-height', `${maxHeight}px`);
        } else {
          item?.style?.setProperty('--content-max-height', 0);
        }

        contents?.[index]?.classList?.add('max-height-set');
      });
      this.setItemOverflowState();
      this.setContentOpacity();
    });

    _defineProperty(this, "toggle", index => {
      const accItem = this.domNodes?.items?.[index];
      const accContent = this.domNodes?.contents?.[index];
      const isOpen = accItem?.classList?.contains(this.openClass);
      accItem?.classList?.toggle(this.openClass);
      const maxHeight = isOpen ? 0 : this.domNodes?.contents?.[index]?.scrollHeight;
      accItem?.style.setProperty('--content-max-height', `${maxHeight}px`);

      if (isOpen) {
        accContent?.classList?.add('overflow-hidden');
      } else {
        setTimeout(() => {
          accContent?.classList?.remove('overflow-hidden');
        }, 350);
      }
    });

    if (!container || container.classList.contains(this.initClass)) return;
    this.container = container;
    this.domNodes = utilities_queryDomNodes(this.selectors, this.container);
    this.options = Object.assign({}, this.defaultOptions, options);
    this.debouncedSetContentHeight = debounce_debounce(this.setContentHeight.bind(this), 300);
    this.init();
  }

  init() {
    this.container?.style?.setProperty('--duration', ` ${this.options.duration}ms`);
    this.removeEvents = (0,events/* addEventDelegate */.X)({
      context: this.container,
      selector: this.selectors.buttons[0],
      handler: (e, btn) => {
        btn.classList.add('pointer-events-none');
        const index = this.domNodes.buttons.indexOf(btn);
        this.toggle(index);
        setTimeout(() => {
          btn.classList.remove('pointer-events-none');
        }, 350);
      }
    });

    if (this.options.presetContentHeight) {
      window.requestAnimationFrame(this.setContentHeight);
    } else {
      this.setItemOverflowState();
      this.setContentOpacity();
    }

    window.addEventListener("resize", this.debouncedSetContentHeight);
    if (typeof this.options.callback === "function") this.options.callback();
    this.container.classList.add(this.initClass);
  }

}
// EXTERNAL MODULE: ./node_modules/enquire.js/src/index.js
var src = __webpack_require__(1179);
var src_default = /*#__PURE__*/__webpack_require__.n(src);
;// CONCATENATED MODULE: ./src/js/sections/footer.js




register('footer', {
  onLoad: function () {
    src_default().register("screen and (max-width: 767px)", {
      match: () => {
        const mobileAccordion = this?.container?.querySelector('.sf-footer__accordion');

        if (mobileAccordion) {
          this.acc = new Accordion(mobileAccordion, {
            presetContentHeight: true
          });
        }
      }
    });
    initCustomSelect(this.container);
  }
}); // load('footer')
;// CONCATENATED MODULE: ./src/js/sections/slider.js
/* provided dependency */ var slider_MinimogLibs = __webpack_require__(4558)["MinimogLibs"];



register('slider', {
  onLoad: function () {
    // Do something when a section instance is loaded
    this.autoplay = this.container.dataset.autoplay === 'true';
    this.autoplaySpeed = parseInt(this.container.dataset.autoplaySpeed);
    this.showArrows = this.container.dataset.enableArrows === 'true';
    this.showDots = this.container.dataset.enableDots === 'true';
    this.adaptHeight = this.container.dataset.slideHeight === 'adapt';
    this.lastVideo = null;
    this.lastActive = null;
    this.timeout = null;

    const _this = this;

    if (isInViewport(this.container)) {
      this._initSlider(_this);
    } else {
      if (window.__sfWindowLoaded) this._initSlider(_this);else window.addEventListener("load", () => this._initSlider(_this));
    } // window.addEventListener("resize", () => this._initSlider(_this))
    // if (this.adaptHeight) {
    //   this.setSlideshowHeight()
    // }

  },
  _initSlider: function (_this) {
    const selectors = {
      slideContent: '.sf__slide-content'
    };
    const paginationIcon = `<svg width="65px" height="65px" viewBox="0 0 72 72" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><circle class="time" stroke-width="5" fill="none" stroke-linecap="round" cx="33" cy="33" r="28"></circle></svg>`;
    loadAssets(['swiper.css', 'swiper.js']).then(() => {
      _this.slider = new slider_MinimogLibs.Swiper(`#sf-slider-${_this.id}`, {
        init: false,
        autoplay: _this.autoplay ? {
          delay: _this.autoplaySpeed * 1000,
          disableOnInteraction: true
        } : false,
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: false,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        speed: 1000,
        navigation: _this.showArrows ? {
          nextEl: _this.container.querySelector('.sf-slider__controls-next'),
          prevEl: _this.container.querySelector('.sf-slider__controls-prev')
        } : false,
        pagination: _this.showDots ? {
          el: _this.container.querySelector('.swiper-pagination'),
          clickable: true,
          bulletClass: 'sf__dot',
          bulletActiveClass: 'sf__dot-active',
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + paginationIcon + '</span>';
          }
        } : false,
        breakpoints: {
          992: {
            // allowTouchMove: false
            threshold: 2
          }
        }
      });
      _this.lastSlide = null;
      _this.currentSlide = null;
      _this.slider && _this.slider.on('slideChangeTransitionStart', () => {
        _this.lastSlide && _this.lastSlide.classList.remove('slide-in');
        _this.lastSlide && _this.lastSlide.classList.add('slide-out');
      });
      _this.slider && _this.slider.on('slideChangeTransitionEnd', _ref => {
        let {
          activeIndex,
          slides
        } = _ref;
        const currentSlide = slides[activeIndex];
        _this.currentSlide = currentSlide.querySelector(selectors.slideContent);
        _this.currentSlide && _this.currentSlide.classList.add('slide-in');
        _this.lastSlide && _this.lastSlide.classList.remove('slide-out', 'slide-in');
        _this.lastSlide = _this.currentSlide;
      });
      _this.slider && _this.slider.on('init', _this._handleChange.bind(this));
      _this.slider && _this.slider.on('slideChange', _this._handleChange.bind(this));

      _this.slider.init();
    }).catch(console.error);
  },
  _handleChange: function (swiper) {
    const {
      activeIndex,
      slides
    } = swiper;
    const slideType = slides[activeIndex]?.dataset.slideType;
    this.lastActive && this.slider.slideToLoop(this.lastActive);

    if (slideType === 'video_slide') {
      const video = slides[activeIndex].querySelector('video');

      if (video) {
        let playPromise = video.play();
        this.lastVideo && this.lastVideo.pause();

        if (playPromise !== undefined) {
          playPromise.then(() => {
            this.lastVideo = video;
          });
        }
      }
    } else {
      this.lastVideo && this.lastVideo.pause();
      this.lastVideo = null;
    }
  },
  setSlideshowHeight: function () {
    const minAspectRatio = this.container.dataset.minAspectRatio;
    const slideHeight = document.documentElement.offsetWidth / minAspectRatio + 'px';
    console.log(slideHeight, 'slideHeight');
  },
  // Shortcut function called when a section block is selected by the Theme Editor 'shopify:block:select' event.
  onBlockSelect: function (ev) {
    // if (this.adaptHeight) {
    //   this.setSlideshowHeight()
    // }
    // Do something when a section block is selected
    const block = ev.target;
    const index = Number(block.dataset.slide);
    this.lastActive = index;
    this.slider?.slideToLoop?.(index);
  }
});
;// CONCATENATED MODULE: ./src/js/modules/tabs.js



class Tabs {
  constructor(container) {
    let cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : () => {};

    _defineProperty(this, "selectors", {
      tabHeaders: ['.sf-tab-header'],
      tabContents: ['.sf-tab-content']
    });

    _defineProperty(this, "activeClass", 'active');

    _defineProperty(this, "currentActiveIndex", -1);

    _defineProperty(this, "currentTab", null);

    _defineProperty(this, "init", () => {
      (0,events/* addEventDelegate */.X)({
        context: this.container,
        selector: this.selectors.tabHeaders[0],
        handler: (e, tabHeader) => {
          e.preventDefault();
          const index = Number(tabHeader?.dataset?.index);
          this.setActiveTab(index);
          this.cb(tabHeader);
        }
      });
    });

    _defineProperty(this, "setActiveTab", tabIndex => {
      const {
        tabHeaders,
        tabContents
      } = this.domNodes;

      if (tabContents.length && tabIndex !== -1 && this.currentActiveIndex !== tabIndex) {
        const currHeader = tabHeaders?.[this.currentActiveIndex];
        const newHeader = tabHeaders?.[tabIndex];
        const newTab = tabContents?.[tabIndex];
        currHeader?.classList?.remove?.(this.activeClass);
        this.currentTab?.classList?.remove?.(this.activeClass, 'opacity-100');
        this.currentTab?.style?.removeProperty?.('opacity');
        newHeader?.classList?.add?.(this.activeClass);
        newTab?.classList?.add?.(this.activeClass);
        setTimeout(() => newTab.style.opacity = 1);
        this.currentActiveIndex = tabIndex;
        this.currentTab = newTab;
      }
    });

    this.container = container;
    this.cb = cb;
    this.domNodes = utilities_queryDomNodes(this.selectors, container);
    this.init();
    this.setActiveTab(0);
  }

}
;// CONCATENATED MODULE: ./src/js/sections/testimonials.js
/* provided dependency */ var testimonials_MinimogLibs = __webpack_require__(4558)["MinimogLibs"];




register('testimonials', {
  onLoad: function () {
    const {
      container
    } = this;
    const design = container?.dataset?.design;
    const containerType = container?.dataset?.container;
    const autorotate = container?.dataset?.autoplay === 'true';

    if (!design) {
      return console.warn("Failed to init Testimonials: design not found!!");
    }

    const slider = container.querySelector('.swiper-container');

    if (!slider) {
      container.classList.add('opacity-100');
      return;
    }

    const defaultSettings = {
      pagination: {
        el: this.container.querySelector('.swiper-pagination'),
        clickable: true
      },
      navigation: {
        nextEl: this.container.querySelector('.sf-slider__controls-next'),
        prevEl: this.container.querySelector('.sf-slider__controls-prev')
      },
      autoplay: autorotate ? {
        delay: 5000,
        pauseOnMouseEnter: false
      } : false,
      loop: true,
      slidesPerView: 1
    };
    let settings = {};
    let gutter = 400;

    switch (design) {
      case 'testimonials-1':
        settings = {
          centeredSlides: true,
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 20,
          speed: 300,
          slideToClickedSlide: true,
          loop: true,
          breakpoints: {
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
              speed: 1000
            },
            1280: {
              slidesPerView: 5,
              slidesPerGroup: 3,
              spaceBetween: 30
            },
            2560: {
              slidesPerView: 7,
              slidesPerGroup: 3
            }
          }
        };
        break;

      case 'testimonials-2':
        settings = {
          slidesPerView: 1,
          spaceBetween: 30,
          breakpoints: {
            768: {
              slidesPerView: 3,
              slidesPerGroup: 2
            }
          }
        };
        break;

      case 'testimonials-3':
        settings = {
          slidesPerView: 1,
          spaceBetween: 30,
          breakpoints: {
            768: {
              slidesPerView: containerType === 'w-full' ? 3 : 2
            }
          }
        };
        break;

      case 'testimonials-4':
        if (containerType === 'container-fluid') gutter = 200;
        if (containerType === 'container') gutter = 150;
        settings = {
          slidesPerView: 1,
          centeredSlides: true,
          slideToClickedSlide: true,
          breakpoints: {
            768: {
              spaceBetween: parseInt(gutter / 4),
              slidesPerView: 3
            },
            992: {
              spaceBetween: gutter / 2,
              slidesPerView: 3
            },
            1920: {
              spaceBetween: gutter,
              slidesPerView: 3
            }
          }
        };
        break;

      case 'testimonials-6':
        settings = {
          slidesPerView: 1,
          loop: true,
          breakpoints: {
            768: {
              slidesPerView: 2
            },
            1366: {
              slidesPerView: containerType === 'container' ? 2 : 3
            },
            1600: {
              slidesPerView: containerType === 'container' ? 2 : 4
            }
          }
        };
        break;

      case 'testimonials-5':
        settings = {
          fade: {
            crossFade: true
          }
        };
        break;
    } // Testimonials 5


    const images = container.querySelector('.sf-tabs');

    if (images) {
      this.imagesTab = new Tabs(images);
    }

    const initSlider = () => {
      loadAssets(['swiper.css', 'swiper.js']).then(() => {
        this.slider = new testimonials_MinimogLibs.Swiper(slider, { ...defaultSettings,
          ...settings
        });

        if (design === 'testimonials-4') {
          this.slider.on('activeIndexChange', swiper => {
            console.log(swiper, 'slide change');
            const {
              realIndex
            } = swiper;
            this.container.querySelector('.sf-slider-index').innerHTML = parseInt(realIndex) + 1;
          });
        }

        if (design === 'testimonials-5') {
          this.slider.on('slideChange', swiper => {
            const {
              realIndex
            } = swiper;
            this.imagesTab.setActiveTab(realIndex);
          });
        }
      });
    };

    if (isInViewport(this.container)) {
      initSlider();
    } else {
      if (window.__sfWindowLoaded) initSlider();else window.addEventListener("load", initSlider);
    }
  },
  onBlockSelect: function (ev) {
    // Do something when a section block is selected
    const block = ev.target;
    const index = Number(block.dataset.index);
    this?.slider?.slideToLoop?.(index);
  }
});
;// CONCATENATED MODULE: ./src/js/components/LazyImage.jsx
/* provided dependency */ var LazyImage_createElement = __webpack_require__(6295)["default"];
/* harmony default export */ function LazyImage(props) {
  const {
    src,
    alt,
    style = {},
    className = '',
    onLoad = () => {},
    onError = () => {}
  } = props;
  const image = LazyImage_createElement("img", {
    style: style,
    className: `transition-opacity opacity-0 ${className}`,
    src: src,
    alt: alt
  });
  image.addEventListener('load', imgLoaded);
  image.addEventListener('error', imgError);

  if (image.complete && image.naturalWidth) {
    imgLoaded();
  }

  function imgLoaded() {
    onLoad && onLoad();
    image.classList.add('opacity-100');
    image.removeEventListener('load', imgLoaded);
    image.removeEventListener('error', imgError);
  }

  function imgError(err) {
    console.error('Failed to load LazyImage. ', err, props);
    onError && onError();
    image.style.opacity = 0;
    image.removeEventListener('load', imgLoaded);
    image.removeEventListener('error', imgError);
  }

  return image;
}
;// CONCATENATED MODULE: ./src/js/components/InstagramImage.jsx
/* provided dependency */ var InstagramImage_createElement = __webpack_require__(6295)["default"];
// eslint-disable-next-line no-unused-vars

/* harmony default export */ function InstagramImage(_ref) {
  let {
    image
  } = _ref;
  return InstagramImage_createElement("div", {
    className: "sf-column"
  }, InstagramImage_createElement("a", {
    href: image.permalink,
    target: "_blank",
    className: "sf__insta-item block relative"
  }, InstagramImage_createElement("div", {
    className: "sf__insta-content absolute z-10 inset-0 flex items-center justify-center"
  }, InstagramImage_createElement("div", {
    class: "sf__insta-icon"
  }, InstagramImage_createElement("svg", {
    className: "w-10 h-10",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, InstagramImage_createElement("path", {
    fill: "currentColor",
    d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
  })))), InstagramImage_createElement("div", {
    className: "sf__insta-image",
    style: {
      "--aspect-ratio": "1/1"
    }
  }, InstagramImage_createElement(LazyImage, {
    src: image.media_url,
    alt: `instagram-image-${image.username}-${image.id}`
  })), InstagramImage_createElement("div", {
    className: "sf__item-bg"
  })));
}
;// CONCATENATED MODULE: ./src/js/modules/instagram.js
/* provided dependency */ var instagram_createElement = __webpack_require__(6295)["default"];

// eslint-disable-next-line no-unused-vars

class Instagram {
  constructor(container, accessToken) {
    let imagesCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;

    _defineProperty(this, "mediaAPI", 'https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username');

    this.container = container;
    this.imagesContainer = container.querySelector('.instagram-images');
    this.accessToken = accessToken;
    this.imagesCount = imagesCount;
    if (window.__sfWindowLoaded) this.init().catch(console.error);else window.addEventListener("load", () => this.init().catch(console.error));
  }

  async init() {
    const media = await fetchJsonCache(`${this.mediaAPI}&access_token=${this.accessToken}`, {
      cache: 'force-cache'
    });
    if (!media) return;

    if (media.error) {
      return console.error('Instagram error: ', media.error?.message);
    }

    media.data.filter(d => d.media_type === 'IMAGE' || d.media_type === 'CAROUSEL_ALBUM') // .reverse()
    .slice(0, this.imagesCount).forEach(image => {
      const imgNode = instagram_createElement(InstagramImage, {
        image: image
      });
      this.imagesContainer.appendChild(imgNode);
    });
  }

}
;// CONCATENATED MODULE: ./src/js/sections/instagram.js


register('instagram', {
  onLoad: function () {
    const {
      container
    } = this;
    const {
      accessToken,
      imagesCount
    } = container?.dataset;

    if (accessToken) {
      new Instagram(container, accessToken, imagesCount);
    } else {
      console.warn('Failed to init Instagram section! Missing Access Token');
    }
  }
});
;// CONCATENATED MODULE: ./src/js/modules/countdown-timer.js



class CountdownTimer {
  constructor(container, startTime, endTime) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _defineProperty(this, "times", ['day', 'hour', 'min', 'sec']);

    _defineProperty(this, "selectors", {
      day: '.countdown-timer-day',
      hour: '.countdown-timer-hour',
      min: '.countdown-timer-minute',
      sec: '.countdown-timer-sec'
    });

    _defineProperty(this, "DAY_IN_MS", 24 * 60 * 60 * 1000);

    _defineProperty(this, "HOUR_IN_MS", 60 * 60 * 1000);

    _defineProperty(this, "MIN_IN_MS", 60 * 1000);

    _defineProperty(this, "start", () => {
      this.timer = setInterval(() => {
        if (this.startTime > this.endTime) this.stop();else this.update();
      }, this.intervalTime);
      this.container.classList.add("opacity-100");
      this.container.classList.remove("opacity-0");
    });

    _defineProperty(this, "update", () => {
      const timeData = this.format(this.endTime - this.startTime);
      this.times.forEach(time => {
        if (this?.domNodes?.[time]) {
          this.domNodes[time].textContent = this.addZeroPrefix(timeData[time]);
        }
      });
      this.startTime += this.intervalTime;
    });

    _defineProperty(this, "stop", () => {
      clearInterval(this.timer);

      if (this.options.loop) {
        this.startTime = this.savedStartTime;
        this.start();
      } else {
        this.timer = null;
        this.options.callback();
      }
    });

    _defineProperty(this, "clear", () => {
      clearInterval(this.timer);
      this.timer = null;
      this.startTime = this.savedStartTime;
      this.times.forEach(time => {
        if (this?.domNodes?.[time]) {
          this.domNodes[time].textContent = "00";
        }
      });
    });

    _defineProperty(this, "addZeroPrefix", num => {
      if (this?.options?.addZeroPrefix && num < 10) {
        return `0${num}`;
      }

      return num.toString();
    });

    _defineProperty(this, "format", ms => {
      return {
        day: Math.floor(ms / this.DAY_IN_MS),
        hour: Math.floor(ms / this.HOUR_IN_MS) % 24,
        min: Math.floor(ms / this.MIN_IN_MS) % 60,
        sec: Math.floor(ms / 1000) % 60
      };
    });

    this.container = container;
    this.startTime = startTime;
    this.savedStartTime = startTime;
    this.endTime = endTime;
    this.options = Object.assign({}, {
      addZeroPrefix: true,
      loop: false,
      callback: () => {}
    }, options);
    this.intervalTime = 1000;
    this.timer = null;
    this.domNodes = utilities_queryDomNodes(this.selectors, container);
    this.start();
  }

}

/* harmony default export */ var countdown_timer = (CountdownTimer);
;// CONCATENATED MODULE: ./src/js/sections/countdown-timer.js


register('countdown-timer', {
  onLoad: function () {
    const cdContainer = this.container.querySelector('.countdown-timer-container');
    const time = cdContainer.dataset.time;
    const endTime = Date.parse(time.split(' ').join('T'));

    if (cdContainer && endTime) {
      new countdown_timer(cdContainer, Date.now(), endTime);
    }
  }
});
;// CONCATENATED MODULE: ./src/js/sections/banner-with-slider.js
/* provided dependency */ var banner_with_slider_MinimogLibs = __webpack_require__(4558)["MinimogLibs"];



register('banner-with-slider', {
  onLoad: function () {
    const {
      container
    } = this;
    this.lastActive = null;

    const initSlider = () => {
      const paginationIcon = `<svg width="65px" height="65px" viewBox="0 0 72 72" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><circle class="time" stroke-width="5" fill="none" stroke-linecap="round" cx="33" cy="33" r="28"></circle></svg>`;
      loadAssets(['swiper.css', 'swiper.js']).then(() => {
        const _this = this;

        this.slider = new banner_with_slider_MinimogLibs.Swiper(`.sf-slider-${this.id}`, {
          autoplay: container.dataset.autoplay === 'true' ? {
            delay: container.dataset.timeout,
            disableOnInteraction: true
          } : false,
          slidesPerView: 1,
          loop: true,
          fadeEffect: {
            crossFade: true
          },
          pagination: {
            el: this.container.querySelector('.swiper-pagination'),
            clickable: true,
            bulletClass: 'sf__dot',
            bulletActiveClass: 'sf__dot-active',
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + paginationIcon + '</span>';
            }
          },
          on: {
            init: function () {
              this.slideToLoop(_this.lastActive);
            }
          }
        });
      });
    };

    if (isInViewport(container)) {
      initSlider();
    } else {
      if (window.__sfWindowLoaded) initSlider();else window.addEventListener("load", initSlider);
    }
  },
  onBlockSelect: function (ev) {
    // Do something when a section block is selected
    const block = ev.target;
    const index = Number(block.dataset.slide);
    this.lastActive = index;
    this.slider?.slideToLoop?.(index);
  }
});
;// CONCATENATED MODULE: ./node_modules/@googlemaps/js-api-loader/dist/index.esm.js
// do not edit .js files directly - edit src/index.jst
var fastDeepEqual = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;
    var length, i, keys;

    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) if (!equal(a[i], b[i])) return false;

      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }

    return true;
  } // true if both NaN, false otherwise


  return a !== a && b !== b;
};
/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at.
 *
 *      Http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const DEFAULT_ID = "__googleMapsScriptId";
/**
 * The status of the [[Loader]].
 */

var LoaderStatus;

(function (LoaderStatus) {
  LoaderStatus[LoaderStatus["INITIALIZED"] = 0] = "INITIALIZED";
  LoaderStatus[LoaderStatus["LOADING"] = 1] = "LOADING";
  LoaderStatus[LoaderStatus["SUCCESS"] = 2] = "SUCCESS";
  LoaderStatus[LoaderStatus["FAILURE"] = 3] = "FAILURE";
})(LoaderStatus || (LoaderStatus = {}));
/**
 * [[Loader]] makes it easier to add Google Maps JavaScript API to your application
 * dynamically using
 * [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
 * It works by dynamically creating and appending a script node to the the
 * document head and wrapping the callback function so as to return a promise.
 *
 * ```
 * const loader = new Loader({
 *   apiKey: "",
 *   version: "weekly",
 *   libraries: ["places"]
 * });
 *
 * loader.load().then((google) => {
 *   const map = new google.maps.Map(...)
 * })
 * ```
 */


class Loader {
  /**
   * Creates an instance of Loader using [[LoaderOptions]]. No defaults are set
   * using this library, instead the defaults are set by the Google Maps
   * JavaScript API server.
   *
   * ```
   * const loader = Loader({apiKey, version: 'weekly', libraries: ['places']});
   * ```
   */
  constructor(_ref) {
    let {
      apiKey,
      channel,
      client,
      id = DEFAULT_ID,
      libraries = [],
      language,
      region,
      version,
      mapIds,
      nonce,
      retries = 3,
      url = "https://maps.googleapis.com/maps/api/js"
    } = _ref;
    this.CALLBACK = "__googleMapsCallback";
    this.callbacks = [];
    this.done = false;
    this.loading = false;
    this.errors = [];
    this.version = version;
    this.apiKey = apiKey;
    this.channel = channel;
    this.client = client;
    this.id = id || DEFAULT_ID; // Do not allow empty string

    this.libraries = libraries;
    this.language = language;
    this.region = region;
    this.mapIds = mapIds;
    this.nonce = nonce;
    this.retries = retries;
    this.url = url;

    if (Loader.instance) {
      if (!fastDeepEqual(this.options, Loader.instance.options)) {
        throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(Loader.instance.options)}`);
      }

      return Loader.instance;
    }

    Loader.instance = this;
  }

  get options() {
    return {
      version: this.version,
      apiKey: this.apiKey,
      channel: this.channel,
      client: this.client,
      id: this.id,
      libraries: this.libraries,
      language: this.language,
      region: this.region,
      mapIds: this.mapIds,
      nonce: this.nonce,
      url: this.url
    };
  }

  get status() {
    if (this.errors.length) {
      return LoaderStatus.FAILURE;
    }

    if (this.done) {
      return LoaderStatus.SUCCESS;
    }

    if (this.loading) {
      return LoaderStatus.LOADING;
    }

    return LoaderStatus.INITIALIZED;
  }

  get failed() {
    return this.done && !this.loading && this.errors.length >= this.retries + 1;
  }
  /**
   * CreateUrl returns the Google Maps JavaScript API script url given the [[LoaderOptions]].
   *
   * @ignore
   */


  createUrl() {
    let url = this.url;
    url += `?callback=${this.CALLBACK}`;

    if (this.apiKey) {
      url += `&key=${this.apiKey}`;
    }

    if (this.channel) {
      url += `&channel=${this.channel}`;
    }

    if (this.client) {
      url += `&client=${this.client}`;
    }

    if (this.libraries.length > 0) {
      url += `&libraries=${this.libraries.join(",")}`;
    }

    if (this.language) {
      url += `&language=${this.language}`;
    }

    if (this.region) {
      url += `&region=${this.region}`;
    }

    if (this.version) {
      url += `&v=${this.version}`;
    }

    if (this.mapIds) {
      url += `&map_ids=${this.mapIds.join(",")}`;
    }

    return url;
  }

  deleteScript() {
    const script = document.getElementById(this.id);

    if (script) {
      script.remove();
    }
  }
  /**
   * Load the Google Maps JavaScript API script and return a Promise.
   */


  load() {
    return this.loadPromise();
  }
  /**
   * Load the Google Maps JavaScript API script and return a Promise.
   *
   * @ignore
   */


  loadPromise() {
    return new Promise((resolve, reject) => {
      this.loadCallback(err => {
        if (!err) {
          resolve(window.google);
        } else {
          reject(err.error);
        }
      });
    });
  }
  /**
   * Load the Google Maps JavaScript API script with a callback.
   */


  loadCallback(fn) {
    this.callbacks.push(fn);
    this.execute();
  }
  /**
   * Set the script on document.
   */


  setScript() {
    if (document.getElementById(this.id)) {
      // TODO wrap onerror callback for cases where the script was loaded elsewhere
      this.callback();
      return;
    }

    const url = this.createUrl();
    const script = document.createElement("script");
    script.id = this.id;
    script.type = "text/javascript";
    script.src = url;
    script.onerror = this.loadErrorCallback.bind(this);
    script.defer = true;
    script.async = true;

    if (this.nonce) {
      script.nonce = this.nonce;
    }

    document.head.appendChild(script);
  }
  /**
   * Reset the loader state.
   */


  reset() {
    this.deleteScript();
    this.done = false;
    this.loading = false;
    this.errors = [];
    this.onerrorEvent = null;
  }

  resetIfRetryingFailed() {
    if (this.failed) {
      this.reset();
    }
  }

  loadErrorCallback(e) {
    this.errors.push(e);

    if (this.errors.length <= this.retries) {
      const delay = this.errors.length * Math.pow(2, this.errors.length);
      console.log(`Failed to load Google Maps script, retrying in ${delay} ms.`);
      setTimeout(() => {
        this.deleteScript();
        this.setScript();
      }, delay);
    } else {
      this.onerrorEvent = e;
      this.callback();
    }
  }

  setCallback() {
    window.__googleMapsCallback = this.callback.bind(this);
  }

  callback() {
    this.done = true;
    this.loading = false;
    this.callbacks.forEach(cb => {
      cb(this.onerrorEvent);
    });
    this.callbacks = [];
  }

  execute() {
    this.resetIfRetryingFailed();

    if (this.done) {
      this.callback();
    } else {
      // short circuit and warn if google.maps is already loaded
      if (window.google && window.google.maps && window.google.maps.version) {
        console.warn("Google Maps already loaded outside @googlemaps/js-api-loader." + "This may result in undesirable behavior as options and script parameters may not match.");
        this.callback();
        return;
      }

      if (this.loading) ;else {
        this.loading = true;
        this.setCallback();
        this.setScript();
      }
    }
  }

}


;// CONCATENATED MODULE: ./src/js/sections/google-maps.js


register('google-maps', {
  onLoad: function () {
    let mapElm = this.container.querySelector('#sf__map');
    const {
      mapX,
      mapY,
      mapZoom,
      mapTitle,
      key
    } = mapElm.dataset;
    console.log(mapElm);
    console.log(mapX, mapY, mapZoom, key);
    const loader = new Loader({
      apiKey: key,
      version: "weekly"
    });
    loader.load().then(() => {
      let mapOptions = {
        zoom: parseInt(mapZoom),
        center: new google.maps.LatLng(mapX, mapY),
        scrollwheel: false,
        styles: [{
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "color": "#e9e9e9"
          }, {
            "lightness": 17
          }]
        }, {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [{
            "color": "#f5f5f5"
          }, {
            "lightness": 20
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#ffffff"
          }, {
            "lightness": 17
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#ffffff"
          }, {
            "lightness": 29
          }, {
            "weight": 0.2
          }]
        }, {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [{
            "color": "#ffffff"
          }, {
            "lightness": 18
          }]
        }, {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [{
            "color": "#ffffff"
          }, {
            "lightness": 16
          }]
        }, {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [{
            "color": "#f5f5f5"
          }, {
            "lightness": 21
          }]
        }, {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [{
            "color": "#dedede"
          }, {
            "lightness": 21
          }]
        }, {
          "elementType": "labels.text.stroke",
          "stylers": [{
            "visibility": "on"
          }, {
            "color": "#ffffff"
          }, {
            "lightness": 16
          }]
        }, {
          "elementType": "labels.text.fill",
          "stylers": [{
            "saturation": 36
          }, {
            "color": "#333333"
          }, {
            "lightness": 40
          }]
        }, {
          "elementType": "labels.icon",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [{
            "color": "#f2f2f2"
          }, {
            "lightness": 19
          }]
        }, {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#fefefe"
          }, {
            "lightness": 20
          }]
        }, {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#fefefe"
          }, {
            "lightness": 17
          }, {
            "weight": 1.2
          }]
        }]
      };
      let map = new google.maps.Map(mapElm, mapOptions);
      new google.maps.Marker({
        position: new google.maps.LatLng(mapX, mapY),
        map: map,
        title: mapTitle
      });
    });
  }
}); // load('google-maps')
;// CONCATENATED MODULE: ./src/js/sections/video.js
/* provided dependency */ var video_MinimogLibs = __webpack_require__(4558)["MinimogLibs"];


register('video-section', {
  onLoad: function () {
    const initVideo = () => {
      loadAssets(['plyr.css', 'plyr.js']).then(() => {
        const videoWrapper = this.container.querySelector('.video-wrapper');
        const {
          videoRatio,
          autoplay,
          loop,
          muted
        } = this.container.dataset;
        const player = new video_MinimogLibs.Plyr(videoWrapper, {
          ratio: videoRatio,
          autoplay: autoplay === 'true',
          loop: {
            active: loop === 'true'
          },
          muted: muted === 'true'
        });
        player.on('ready', () => {
          if (player.config.autoplay === true) {
            player.play();
          }
        });
      }).catch(err => console.error("Failed to init video-section", err));
    };

    if (window.__sfWindowLoaded) initVideo();else window.addEventListener("load", initVideo);
  }
});
;// CONCATENATED MODULE: ./src/js/components/Spinner.jsx
/* provided dependency */ var Spinner_createElement = __webpack_require__(6295)["default"];
/* harmony default export */ function Spinner(_ref) {
  let {
    className = ''
  } = _ref;
  return Spinner_createElement("svg", {
    className: `animate-spin hidden w-[20px] h-[20px] ${className}`,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none"
  }, Spinner_createElement("circle", {
    className: "opacity-25",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    "stroke-width": "4"
  }), Spinner_createElement("path", {
    className: "opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  }));
}
;// CONCATENATED MODULE: ./src/js/sections/custom-content.js
/* provided dependency */ var custom_content_createElement = __webpack_require__(6295)["default"];
/* provided dependency */ var custom_content_MinimogSettings = __webpack_require__(4558)["MinimogSettings"];
/* provided dependency */ var custom_content_MinimogTheme = __webpack_require__(4558)["MinimogTheme"];
/* provided dependency */ var custom_content_MinimogLibs = __webpack_require__(4558)["MinimogLibs"];

 // eslint-disable-next-line no-unused-vars



register('custom-content', {
  onLoad: function () {
    this.selectors = {
      cdtContainer: ['.countdown-timer-container'],
      bundleError: '.product-bundles__error',
      productBundles: ['.product-bundles'],
      productVariantSelects: '.sf-product-variant-option-dropdown',
      totalPrice: '[data-total-price]',
      submitBundle: '[data-add-bundle]',
      errorWrapper: '.product-bundles__error'
    };
    this.domNodes = queryDomNodes(this.selectors, this.container);
    this.spinner = custom_content_createElement(Spinner, {
      className: "m-0.5"
    });
    this.initCountDown();
    this.initProductBundles();
    if (window.__sfWindowLoaded) this._initVideo(this.id);else window.addEventListener("load", () => this._initVideo(this.id));
  },
  initCountDown: function () {
    const countdowns = this.domNodes.cdtContainer;

    if (countdowns.length) {
      for (let countdown of countdowns) {
        const time = countdown.dataset.time;
        const endTime = Date.parse(time.split(' ').join('T'));

        if (endTime) {
          new countdown_timer(countdown, Date.now(), endTime);
        }
      }
    }
  },
  initProductBundles: function () {
    this.products = [];
    this.variants = [];
    this.domNodes.productBundles.length && this.domNodes.productBundles.map(bundle => {
      const products = bundle.querySelectorAll('.product-bundles__item');

      for (let product of products) {
        let variants = product.nextElementSibling.innerHTML;
        variants = JSON.parse(variants);
        this.variants.push(variants);
        this.products.push(product);
        addEventDelegate({
          context: product,
          event: 'change',
          selector: this.selectors.productVariantSelects,
          handler: e => this._handleChangePrice(e, product, variants)
        });
      }

      addEventDelegate({
        context: bundle,
        selector: this.selectors.submitBundle,
        handler: e => this._handleAddItems(e, bundle)
      });
    });
  },
  _handleChangePrice: function (evt, product, variants) {
    const regularPrice = product.querySelector('[data-regular-price]');
    const comparePrice = product.querySelector('[data-compare-price]');
    const savedPrice = product.querySelector('[data-saved-price]');
    const selectedVariant = evt.target.value;
    const variant = variants.find(v => v.id === parseInt(selectedVariant));
    regularPrice.innerHTML = formatMoney(variant.price, custom_content_MinimogSettings.money_format);
    regularPrice.dataset.price = variant.price;

    if (variant.compare_at_price && variant.compare_at_price > variant.price) {
      comparePrice.classList.remove('hidden');
      savedPrice.classList.remove('hidden');
      comparePrice.innerHTML = formatMoney(variant.compare_at_price, custom_content_MinimogSettings.money_format);
      savedPrice.innerHTML = formatMoney(variant.compare_at_price - variant.price, custom_content_MinimogSettings.money_format);
    } else {
      comparePrice.classList.add('hidden');
      savedPrice.classList.add('hidden');
    } // Calculate total price


    const selectedVariants = this.products.map(product => {
      let variants = product.nextElementSibling.innerHTML;
      variants = JSON.parse(variants);
      const select = product.querySelector('[name="id"]');
      return variants?.find?.(v => v?.id === Number(select?.value));
    }).filter(Boolean);
    const totalPrice = selectedVariants.reduce((s, v) => s + v.price, 0);
    const container = product.closest('.product-bundles');
    container.querySelector(this.selectors.totalPrice).innerHTML = formatMoney(totalPrice, custom_content_MinimogSettings.money_format);
  },
  _handleAddItems: function (e, bundle) {
    e.preventDefault();
    const inputIds = bundle.querySelectorAll('[name="id"]');
    const errorWrapper = bundle.querySelector(this.selectors.errorWrapper);
    const button = bundle.querySelector(this.selectors.submitBundle);
    const ids = [...inputIds].map(input => input.value);
    const data = {
      items: ids.map(id => ({
        id,
        quantity: 1
      }))
    };
    const config = getRequestDefaultConfigs();
    config.method = 'POST';
    config.body = JSON.stringify(data);

    this._toggleLoading(true, button);

    fetch('/cart/add.js', config).then(async res => {
      if (!res?.ok) {
        const err = await res.json();

        this._showError(err?.description || "Failed to add all items to cart!", errorWrapper);
      } else {
        const {
          items
        } = await res.json();
        const firstItem = items.shift();
        window.Shopify.onItemAdded(firstItem);
        items.forEach(itm => window.Shopify.onItemAdded(itm, false));
      }

      setTimeout(() => {
        this._toggleLoading(false, button);
      }, 300);
    }).catch(err => {
      this._showError(err?.toString?.(), errorWrapper);

      this._toggleLoading(false, button);
    });
  },
  _showError: function (err, errorWrapper) {
    custom_content_MinimogTheme.Notification.show({
      target: errorWrapper,
      method: 'appendChild',
      type: 'warning',
      message: err
    });
  },
  _toggleLoading: function (loading, button) {
    if (loading) {
      button.appendChild(this.spinner);
      button.classList.add('sf-spinner-loading');
    } else {
      this?.spinner?.remove();
      button.classList.remove('sf-spinner-loading');
    }
  },
  _initVideo: function (id) {
    const videoBlocks = this.container.querySelectorAll('[data-video-block]');

    if (videoBlocks.length) {
      loadAssets(['plyr.css', 'plyr.js']).then(() => {
        videoBlocks.forEach(vidBlock => {
          const {
            ratio,
            autoplay,
            loop,
            muted
          } = vidBlock.dataset;
          console.log(autoplay);
          const player = new custom_content_MinimogLibs.Plyr(vidBlock, {
            ratio,
            autoplay: autoplay === 'true',
            loop: {
              active: loop === 'true'
            },
            muted: muted === 'true'
          });
          player.on('ready', () => {
            if (player.config.autoplay === true) {
              player.play();
            }
          });
        });
      }).catch(err => console.error("Failed to init video-section", err));
    }
  }
});
;// CONCATENATED MODULE: ./src/js/utilities/section.js
/* provided dependency */ var section_MinimogLibs = __webpack_require__(4558)["MinimogLibs"];
/* provided dependency */ var section_MinimogTheme = __webpack_require__(4558)["MinimogTheme"];
/* provided dependency */ var section_MinimogSettings = __webpack_require__(4558)["MinimogSettings"];


function initSlider(_ref) {
  let {
    container,
    pagination,
    items = 4,
    slidesPerView = 2,
    slidesPerGroup = 2,
    slidesPerGroupMobile = 2,
    loop = false,
    showPagination = false,
    showNavigation = false,
    autoplay = false,
    speed = 300
  } = _ref;
  if (!container) return;
  const sliderContainer = container.querySelector('.swiper-container');
  if (!sliderContainer) return;
  const controlsContainer = container.querySelector('.sf-slider__controls');
  const prevButton = controlsContainer && controlsContainer.querySelector('.sf-slider__controls-prev');
  const nextButton = controlsContainer && controlsContainer.querySelector('.sf-slider__controls-next');
  const lgItems = items > 4 ? items - 1 : items;
  const mdItems = items > 4 ? items - 2 : items;
  const slideItemsLength = sliderContainer.querySelector('.swiper-wrapper').childElementCount;
  let slider;
  if (showPagination) sliderContainer.classList.add('swiper-container-show-pagination');
  if (showNavigation) sliderContainer.classList.add('swiper-container-show-nav');

  const _initSlider = () => {
    loadAssets(['swiper.css', 'swiper.js']).then(() => {
      slider = new section_MinimogLibs.Swiper(sliderContainer, {
        init: false,
        autoplay: autoplay ? {
          delay: 4000,
          disableOnInteraction: true
        } : false,
        slidesPerView: slidesPerView,
        slidesPerGroup: slidesPerGroup || slidesPerView,
        loop: loop,
        touchRatio: 1.5,
        speed: speed,
        simulateTouch: false,
        threshold: 2,
        pagination: showPagination ? pagination || {
          el: container.querySelector('.swiper-pagination'),
          clickable: true
        } : false,
        breakpoints: {
          280: {
            slidesPerView: slidesPerView,
            slidesPerGroup: slidesPerGroupMobile || slidesPerView
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 2
          },
          992: {
            slidesPerView: mdItems,
            slidesPerGroup: slidesPerGroup || mdItems
          },
          1200: {
            slidesPerView: lgItems,
            slidesPerGroup: slidesPerGroup || lgItems
          },
          1366: {
            slidesPerView: items,
            slidesPerGroup: slidesPerGroup || items
          }
        },
        on: {
          breakpoint: (swiper, breakpointParams) => {
            controlsContainer && handleControls(swiper, breakpointParams);
          },
          slideChange: swiper => {
            const {
              isBeginning,
              isEnd
            } = swiper;
            if (!loop && prevButton) prevButton.disabled = isBeginning;
            if (!loop && nextButton) nextButton.disabled = isEnd;
          }
        }
      });
      slider.on('init', () => {
        // Update prod form ids
        const forms = container.querySelectorAll('.swiper-slide form.shopify-product-form');
        forms.length && [...forms].forEach((form, ind) => {
          form.setAttribute('id', `${form.getAttribute('id')}__${ind}`);
        });
        setTimeout(() => {
          // Calculate controls position
          const firstItem = container.querySelector('.sf-image');

          if (firstItem && controlsContainer) {
            const itemHeight = firstItem.clientHeight;
            controlsContainer.style.setProperty('--offset-top', parseInt(itemHeight) / 2 + 'px');
          }
        }, 200); // Attach events for custom controls

        if (slider && showNavigation) {
          prevButton && prevButton.addEventListener('click', () => slider.slidePrev());
          nextButton && nextButton.addEventListener('click', () => slider.slideNext());
        }

        if (!loop && prevButton) prevButton.disabled = true; // MinimogTheme.Products.initProductForms({ context: container })
        // .then(() => {
        // })
        // .catch(console.error)

        section_MinimogTheme.CompareProduct?.setCompareButtonsState();
        section_MinimogTheme.Wishlist?.setWishlistButtonsState();
      }); // Init swiper

      slider.init();
    }).catch(console.error);
  };

  if (isInViewport(container)) {
    _initSlider();
  } else {
    if (window.__sfWindowLoaded) _initSlider();else window.addEventListener("load", _initSlider);
  }

  const handleControls = (swiper, breakpointParams) => {
    const {
      slidesPerView
    } = breakpointParams;

    if (slideItemsLength > slidesPerView) {
      controlsContainer.classList.remove('hidden');
      slider.allowTouchMove = true;
    } else {
      controlsContainer.classList.add('hidden');
      slider.allowTouchMove = false;
    }
  };
}
function fetchCountDown(collectionID) {
  const appURL = section_MinimogSettings.foxkitAppURL ? `https://${section_MinimogSettings.foxkitAppURL}` : '';
  return new Promise((resolve, reject) => {
    let requestUrl = `${appURL}/api/public/countdown?shop=${window.Shopify?.shop}&collectionIds=${collectionID}`;
    fetch(requestUrl).then(response => response.json()).then(resolve).catch(reject);
  });
}
;// CONCATENATED MODULE: ./src/js/components/SaleProgress.jsx
/* provided dependency */ var SaleProgress_createElement = __webpack_require__(6295)["default"];
/* provided dependency */ var MinimogStrings = __webpack_require__(4558)["MinimogStrings"];
function SaleProgress(_ref) {
  let {
    settings,
    productId,
    soldNumber
  } = _ref;
  const {
    total_quantity,
    sold_to,
    sold_from
  } = settings;
  let soldNumb; // const hour = new Date().getHours()

  if (soldNumber) {
    soldNumb = parseInt(soldNumber);
  } else {
    const hour = 4;
    const range = sold_to - sold_from;
    const timeRatio = hour / 24;
    const randomRatioById = (Number(productId.split('').pop()) + 1) / 10;
    let combinedRatio = timeRatio + randomRatioById;
    if (combinedRatio > 1) combinedRatio -= 1;
    const delta = Math.ceil(combinedRatio * range);
    soldNumb = sold_from + delta;
  }

  const availableNumb = total_quantity - soldNumb;
  const progress = soldNumb * 100 / total_quantity;
  return SaleProgress_createElement("div", {
    className: "pcard-sale",
    dataSet: {
      flashSale: ''
    }
  }, SaleProgress_createElement("div", {
    className: "pcard-sale__progress"
  }, SaleProgress_createElement("span", {
    dataSet: {
      saleProgress: ''
    },
    style: {
      width: progress + '%'
    }
  })), SaleProgress_createElement("div", {
    className: "pcard-sale__text flex justify-between mt-2"
  }, SaleProgress_createElement("div", null, SaleProgress_createElement("span", null, MinimogStrings.sold, ": "), SaleProgress_createElement("strong", {
    dataSet: {
      saleNumber: ''
    }
  }, soldNumb || 0)), SaleProgress_createElement("div", null, SaleProgress_createElement("span", null, MinimogStrings.available, ": "), SaleProgress_createElement("strong", {
    dataSet: {
      availableNumber: ''
    }
  }, availableNumb || 0))));
}
;// CONCATENATED MODULE: ./src/js/sections/featured-collection.js
/* provided dependency */ var featured_collection_createElement = __webpack_require__(6295)["default"];





register('featured-collection', {
  onLoad: function () {
    this.selectors = {
      loadMoreBtn: '[data-load-more]',
      productsContainer: '[data-products-container]',
      products: ['.sf__pcard'],
      soldNumber: ['[data-sold-number]'],
      availableNumber: ['[data-available-number]'],
      countDown: '[data-flashsale-countdown]'
    };
    this.domNodes = queryDomNodes(this.selectors, this.container); // MinimogTheme.Products.initProductForms().catch(console.error)

    const {
      container
    } = this;
    const buttonType = container.dataset.buttonType;
    const infiniteLoad = container.dataset.infiniteLoad;
    const enableSlider = container.dataset.enableSlider === 'true';
    const showPagination = container.dataset.showPagination === 'true';
    const showNavigation = container.dataset.showNavigation === 'true';
    const enableFlashsale = container.dataset.enableFlashsale === 'true';
    const enableCountdown = container.dataset.enableCountdown === 'true';
    const items = container.dataset.items;

    if (enableSlider) {
      initSlider({
        container: container,
        items: parseInt(items),
        showPagination: showPagination,
        showNavigation: showNavigation,
        slidesPerGroupMobile: 1,
        loop: true
      });
    }

    if (enableFlashsale) this.initFlashSale();
    this.canLoad = true;
    this.currentPage = 1;
    this.spinner = featured_collection_createElement(Spinner, null);
    this.enableCountdown = enableCountdown;
    if (infiniteLoad === 'true') this.initInfiniteLoad();
    if (buttonType === 'load' && this.domNodes.loadMoreBtn) this.initLoadMore();
  },
  initLoadMore: function () {
    const {
      container
    } = this;
    this.triggerLoad = false;
    this.totalPages = parseInt(container.dataset.totalPages);
    addEventDelegate({
      context: this.container,
      selector: this.selectors.loadMoreBtn,
      handler: e => {
        e.preventDefault();
        this.handleLoadMore();
      }
    });
  },
  initInfiniteLoad: function () {
    const maxPages = this.container.dataset.maxPages; // const handleIfLoad = debounce(this.handleLoadMore, 100)

    window.addEventListener('scroll', e => {
      this.canLoad = this.currentPage < parseInt(maxPages);
      if (!this.canLoad) return;

      if (this.container.offsetTop + this.container.clientHeight - window.innerHeight < window.scrollY && !this.triggerLoad) {
        this.triggerLoad = true;
        this.handleLoadMore();
      }
    });
  },
  handleLoadMore: function () {
    this.currentPage++;
    this.canLoad = this.currentPage < this.totalPages;
    this.toggleLoading(true);
    const url = this.container.dataset.url;
    const dataUrl = `${url}?page=${this.currentPage}&section_id=${this.id}`;
    fetchCache(dataUrl).then(html => {
      this.toggleLoading(false); // const dom = generateDomFromString(html)
      // const products = dom.querySelector(this.selectors.productsContainer)
      // if (products) {
      //   Array.from(products.childNodes).forEach(product => this.domNodes.productsContainer.appendChild(product))
      //   MinimogTheme.Products.initProductForms()
      // }

      this.triggerLoad = false;

      if (!this.canLoad) {
        this.domNodes.loadMoreBtn && this.domNodes.loadMoreBtn.classList.add('hidden');
      }
    });
  },
  toggleLoading: function (status) {
    if (!this.domNodes.loadMoreBtn) return;

    if (status) {
      this.domNodes.loadMoreBtn.appendChild(this.spinner);
      this.domNodes.loadMoreBtn.classList.add('sf-spinner-loading');
    } else {
      this?.spinner?.remove();
      this.domNodes.loadMoreBtn.classList.remove('sf-spinner-loading');
    }
  },
  initFlashSale: async function () {
    const collectionID = this.container.dataset.collectionId;
    const res = await fetchCountDown(collectionID);

    if (res.ok && res.payload && res.payload.length) {
      const {
        expires_date
      } = res.payload[0];
      this.expires_date = expires_date;
      this.domNodes.products.forEach(card => {
        const productForm = card.querySelector('.f-product-form');
        const content = card.querySelector('.sf__pcard-content');
        const soldNumber = card.dataset.soldNumber;
        const component = featured_collection_createElement(SaleProgress, {
          settings: res.payload[0],
          productId: productForm.dataset.productId,
          soldNumber: soldNumber
        });
        content.appendChild(component);
      });
      this.initCountDown();
    }
  },
  initCountDown: function () {
    const endTime = new Date(this.expires_date).getTime();
    this.countDownTimer = new countdown_timer(this.domNodes.countDown, Date.now(), endTime, {
      loop: true
    });
  }
});
;// CONCATENATED MODULE: ./src/js/sections/icon-box.js


register('icon-box', {
  onLoad: function () {
    const enableSlider = this.container.dataset.enableSlider === 'true';
    const items = this.container.dataset.items;

    if (enableSlider) {
      initSlider({
        container: this.container,
        items: parseInt(items),
        slidesPerGroupMobile: 1,
        slidesPerView: 1,
        slidesPerGroup: 1,
        showPagination: true,
        showNavigation: true
      });
    }
  }
});
;// CONCATENATED MODULE: ./src/js/sections/collection-list.js


register('collection-list', {
  onLoad: function () {
    const enableSlider = this.container.dataset.enableSlider === 'true';
    const items = this.container.dataset.items;
    const autoplay = this.container.dataset.autoplay === 'true';
    const autoplaySpeed = this.container.dataset.autoplaySpeed;
    const paginationIcon = `<svg width="65px" height="65px" viewBox="0 0 72 72" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><circle class="time" stroke-width="5" fill="none" stroke-linecap="round" cx="33" cy="33" r="28"></circle></svg>`;
    console.log(autoplay, 'autoplay');

    if (enableSlider) {
      initSlider({
        container: this.container,
        items: parseInt(items) + 1,
        loop: true,
        slidesPerGroup: 2,
        showNavigation: true,
        showPagination: true,
        slidesPerGroupMobile: 1,
        speed: 500,
        autoplay: autoplay ? {
          delay: parseInt(autoplaySpeed) * 1000
        } : false,
        pagination: {
          el: this.container.querySelector('.swiper-pagination'),
          clickable: true,
          bulletClass: 'sf__dot',
          bulletActiveClass: 'sf__dot-active',
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + paginationIcon + '</span>';
          }
        }
      });
    }
  }
});
;// CONCATENATED MODULE: ./src/js/sections/press.js
/* provided dependency */ var press_MinimogLibs = __webpack_require__(4558)["MinimogLibs"];



register('press', {
  onLoad: function () {
    this.prevSlideIndex = 0;

    const initSlider = () => {
      loadAssets(['swiper.css', 'swiper.js']).then(() => {
        const contentWrapper = this.container.querySelector('.press-content');
        const navWrapper = this.container.querySelector('.press-list .swiper-container');
        const autoplay = this.container.dataset.autoplay === 'true';
        this.items = parseInt(this.container.dataset.items);
        this.canLoop = window.innerWidth < 1300 ? this.items > 3 : this.items > 5;
        this.contentSlider = new press_MinimogLibs.Swiper(contentWrapper, {
          slidesPerView: 1,
          allowTouchMove: false,
          fadeEffect: {
            crossFade: true
          }
        });
        this.navSlider = new press_MinimogLibs.Swiper(navWrapper, {
          autoplay: autoplay ? {
            delay: 5000
          } : false,
          items: 1,
          speed: 500,
          loop: this.canLoop,
          centeredSlides: this.canLoop,
          pagination: {
            el: this.container.querySelector('.swiper-pagination'),
            clickable: true
          },
          slideToClickedSlide: true,
          breakpoints: {
            768: {
              slidesPerView: 3,
              navigation: false
            },
            1300: {
              slidesPerView: 5,
              navigation: false
            }
          },
          on: {
            init: function (swiper) {
              const firstSlide = swiper.slides[swiper.activeIndex];
              console.log(firstSlide, 'firstSlide');
              firstSlide && firstSlide.classList.add('press-logo--active');
            }
          }
        });
        !this.canLoop && this.navSlider.on('click', this._handleClick.bind(this));
        this.navSlider.on('slideChange', this._handleChange.bind(this));
      }).catch(console.error);
    };

    if (isInViewport(this.container)) {
      initSlider();
    } else {
      if (window.__sfWindowLoaded) initSlider();else window.addEventListener("load", initSlider);
    }
  },
  _handleChange: function (swiper) {
    console.log(swiper, 'swiper');
    const {
      realIndex,
      activeIndex,
      slides
    } = swiper || {};
    const prevSlide = this.container.querySelector('.press-logo--active[data-index="' + this.prevSlideIndex + '"]');
    const currentSlide = slides[activeIndex];
    currentSlide && currentSlide.classList.add('press-logo--active');
    prevSlide && prevSlide.classList.remove('press-logo--active'); // Change content slide

    this.contentSlider.slideTo(realIndex); // Set prev slide index

    this.prevSlideIndex = realIndex;
  },
  _handleClick: function (swiper) {
    console.log(swiper, 'swiper');
    const {
      clickedIndex,
      clickedSlide
    } = swiper || {};
    const prevSlide = this.container.querySelector('.press-logo--active[data-index="' + this.prevSlideIndex + '"]');
    clickedSlide && clickedSlide.classList.add('press-logo--active');
    prevSlide && prevSlide.classList.remove('press-logo--active'); // Change content slide

    this.contentSlider.slideTo(clickedIndex); // Set prev slide index

    this.prevSlideIndex = clickedIndex;
  },
  onBlockSelect: function (evt) {
    const block = evt.target;
    const index = Number(block.dataset.index);
    this?.contentSlider?.slideTo?.(index);
    this?.navSlider?.slideTo?.(index);
  }
});
;// CONCATENATED MODULE: ./src/js/sections/hero.js
/* provided dependency */ var hero_MinimogLibs = __webpack_require__(4558)["MinimogLibs"];



register('hero', {
  onLoad: function () {
    const bg = this.container.querySelector('.sf-hero__bg');
    if (!bg) return;

    if ('IntersectionObserver' in window) {
      this._initIntersectionObserver(bg);
    } else {
      this._initBackground(bg);
    }
  },
  _initIntersectionObserver: function (bg) {
    const _this = this;

    const rootMargin = '10px';
    const observer = new IntersectionObserver((entries, observer) => {
      if (!entries[0].isIntersecting) return;

      _this._initBackground(entries[0].target);
    }, {
      rootMargin
    });
    observer.observe(bg);
  },
  _initBackground: function (bg) {
    const src = bg.dataset.src;
    if (src) bg.style.backgroundImage = 'url(' + src + ')';
    const parallaxEnabled = this.container.dataset.parallax === 'true';

    if (parallaxEnabled && window.innerWidth > 767) {
      this._initParallax(bg); // if (isInViewport(bg)) {
      //   this._initParallax(bg)
      // } else {
      //   if (window.__sfWindowLoaded) this._initParallax(bg)
      //   else window.addEventListener("load", () => this._initParallax(bg))
      // }

    }
  },
  _initParallax: function (bg) {
    loadAssets('parallax.js').then(() => {
      new hero_MinimogLibs.simpleParallax(bg, {
        scale: 1.5
      });
    }).catch(console.error);
  }
});
;// CONCATENATED MODULE: ./src/js/sections/reviews-pages.js
/* provided dependency */ var reviews_pages_MinimogLibs = __webpack_require__(4558)["MinimogLibs"];


register('reviews-page', {
  onLoad: function () {
    let wrapper = this.container.querySelector('.sf__masonry-wrapper');
    loadAssets('tilt.js').then(() => {
      setTimeout(() => {
        this.msry = new reviews_pages_MinimogLibs.Masonry(wrapper, {
          itemSelector: '.sf__masonry-item',
          percentPosition: true
        });
        this.container.style.removeProperty('opacity');
      }, 300);
    }).catch(console.error);
  }
});
;// CONCATENATED MODULE: ./src/js/sections/faqs.js


register('page-faqs', {
  onLoad: function () {
    let accList = this.container.querySelectorAll('.sf__accordio-blocks');
    accList.forEach(item => {
      new Accordion(item, {
        presetContentHeight: true
      });
    });
  }
});
;// CONCATENATED MODULE: ./src/js/sections/featured-slider.js
/* provided dependency */ var featured_slider_MinimogLibs = __webpack_require__(4558)["MinimogLibs"];
/* provided dependency */ var featured_slider_MinimogTheme = __webpack_require__(4558)["MinimogTheme"];




register('featured-slider', {
  onLoad: function () {
    this.selectors = {
      sliderContainer: '.featured-slider__products',
      slideImages: ['featured-slider__img'],
      slideImagesContainer: '.featured-slider__images',
      sliderControls: '.sf-slider__controls',
      prevBtn: '.sf-slider__controls-prev',
      nextBtn: '.sf-slider__controls-next'
    };
    this.domNodes = utilities_queryDomNodes(this.selectors, this.container);

    const initSlider = () => {
      loadAssets(['swiper.css', 'swiper.js']).then(() => {
        const showNavigation = this.container.dataset.showNavigation === 'true';
        const showPagination = this.container.dataset.showPagination === 'true';
        const autoplay = this.container.dataset.autoplay === 'true';
        const timeout = this.container.dataset.timeout;
        this.slider = new featured_slider_MinimogLibs.Swiper(this.domNodes.sliderContainer, {
          speed: 400,
          loop: false,
          autoplay: autoplay ? {
            delay: parseInt(timeout),
            disableOnInteraction: false
          } : false,
          pagination: showPagination ? {
            el: this.container.querySelector('.swiper-pagination'),
            type: 'bullets',
            clickable: true
          } : false,
          on: {
            init: () => {
              if (showNavigation) {
                this.domNodes.prevBtn?.addEventListener('click', () => this.slider.slidePrev());
                this.domNodes.nextBtn?.addEventListener('click', () => this.slider.slideNext());
                this.domNodes.prevBtn.disabled = true;
              } // MinimogTheme.Products.initProductForms({ context: this.container })
              // Calculate controls position


              if (this.container.dataset.container === 'w-full') {
                const firstItem = this.domNodes.sliderContainer.querySelector('.sf-image');

                if (firstItem && this.domNodes.sliderControls) {
                  const itemHeight = firstItem.clientHeight;
                  const contentHeight = this.domNodes.sliderContainer.querySelector('.featured-slider__product-content')?.clientHeight;
                  this.domNodes.sliderControls.style.setProperty('--offset-top', parseInt(itemHeight) / 2 + parseInt(contentHeight) + 24 + 'px');
                }
              }
            }
          }
        }); // Sync 2 sliders

        this.imageSlider = new featured_slider_MinimogLibs.Swiper(this.domNodes.slideImagesContainer, {
          speed: 500,
          loop: false,
          effect: 'fade',
          fadeEffect: {
            crossFade: true
          }
        });
        this.slider.on('activeIndexChange', swiper => {
          const {
            activeIndex,
            isBeginning,
            isEnd
          } = swiper;
          this.imageSlider.slideTo(activeIndex);
          featured_slider_MinimogTheme.Products.initProductForms({
            context: this.container
          });

          if (showNavigation) {
            this.domNodes.prevBtn.disabled = isBeginning;
            this.domNodes.nextBtn.disabled = isEnd;
          }
        });
        this.imageSlider.on('activeIndexChange', swiper => {
          const {
            activeIndex
          } = swiper;
          this.slider.slideTo(activeIndex);
        });
      }).catch(console.error);
    };

    if (isInViewport(this.container)) {
      initSlider();
    } else {
      if (window.__sfWindowLoaded) initSlider();else window.addEventListener("load", initSlider);
    }
  }
});
;// CONCATENATED MODULE: ./src/js/sections/brand-list.js
/* provided dependency */ var brand_list_MinimogLibs = __webpack_require__(4558)["MinimogLibs"];



register('brand-list', {
  onLoad: function () {
    this.initMobile();
  },
  initMobile: function () {
    const enableSlider = this.container.dataset.enableSlider === 'true';
    if (!enableSlider) return;
    const wrapper = this.container.querySelector('[data-wrapper]');
    const mediaQuery = window.matchMedia('(max-width: 1024px)');

    const handleChange = e => {
      if (e.matches) {
        this.initSlider();
        wrapper.classList.add('swiper-wrapper');
      } else {
        this.slider && this.slider.destroy(true, true);
        wrapper.classList.remove('swiper-wrapper');
      }
    }; // Register event listener


    mediaQuery.addListener(handleChange); // Initial check

    handleChange(mediaQuery);
  },
  initSlider: function () {
    const autoplay = this.container.dataset.enableAutoplay === 'true';
    const autoplaySpeed = this.container.dataset.autoplaySpeed;
    const items = parseInt(this.container.dataset.items);

    const initSlider = () => {
      loadAssets(['swiper.css', 'swiper.js']).then(() => {
        this.slider = new brand_list_MinimogLibs.Swiper(this.container.querySelector('.swiper-container'), {
          slidesPerView: items,
          slidesPerGroup: items,
          autoplay: autoplay ? {
            delay: parseInt(autoplaySpeed) * 1000
          } : false,
          loop: true,
          navigation: {
            nextEl: this.container.querySelector('.swiper-button-next'),
            prevEl: this.container.querySelector('.swiper-button-prev')
          },
          pagination: {
            el: this.container.querySelector('.swiper-pagination'),
            clickable: true
          }
        });
      });
    };

    if (isInViewport(this.container)) {
      initSlider();
    } else {
      if (window.__sfWindowLoaded) initSlider();else window.addEventListener("load", initSlider);
    }
  }
});
;// CONCATENATED MODULE: ./src/js/sections/collapsible-tabs.js


register('sf-collapsible', {
  onLoad: function () {
    const accContainer = this.container.querySelector('.prod__accordion');
    this.acc = new Accordion(accContainer);
    this.container.classList.add('opacity-100');
  },
  onBlockSelect: function (ev) {
    const index = Number(ev?.target?.dataset?.index) || 0;

    if (this.acc) {
      const accItem = this.acc.domNodes.items[index];
      const isAccOpen = accItem?.classList?.contains?.('open');

      if (!isAccOpen) {
        this?.acc?.toggle(index);
      }
    }
  },
  onBlockDeselect: function (ev) {
    const index = Number(ev?.target?.dataset?.index) || 0;

    if (this.acc) {
      const accItem = this.acc.domNodes.items[index];
      const isAccOpen = accItem?.classList?.contains?.('open');

      if (isAccOpen) {
        this?.acc?.toggle(index);
      }
    }
  }
});
;// CONCATENATED MODULE: ./src/js/sections/featured-product.js


register('featured-product', {
  onLoad: function () {
    // MinimogTheme?.Products?.initProductForms?.({context: this.container})?.catch(console.error)
    const prodAccordions = this.container.querySelectorAll('.prod__accordion');
    prodAccordions.forEach(acc => new Accordion(acc));
  }
});
;// CONCATENATED MODULE: ./src/js/sections/collection.js
/* provided dependency */ var collection_MinimogTheme = __webpack_require__(4558)["MinimogTheme"];


register('collection-template', {
  onLoad: () => {
    loadAssets('collection.js').then(() => collection_MinimogTheme.Collection.init()).catch(console.error);
  }
});
;// CONCATENATED MODULE: ./src/js/sections/collection-header.js
/* provided dependency */ var collection_header_MinimogLibs = __webpack_require__(4558)["MinimogLibs"];


register('collection-header', {
  onLoad: function () {
    const parallaxEnabled = this.container.dataset.enableParallax === 'true';

    if (parallaxEnabled && window.innerWidth > 767) {
      const bg = this.container.querySelector('.collection-header__bg');
      loadAssets('parallax.js').then(() => {
        new collection_header_MinimogLibs.simpleParallax(bg, {
          scale: 1.1,
          customWrapper: '.collection-header'
        });
      });
    }
  }
});
;// CONCATENATED MODULE: ./src/js/sections/brand-header.js
/* provided dependency */ var brand_header_MinimogLibs = __webpack_require__(4558)["MinimogLibs"];


register('brand-header', {
  onLoad: function () {
    this.initGallery();
  },
  initGallery: function () {
    const slider = this.container.querySelector('.brand-header__gallery');
    const imagesCount = slider.querySelectorAll('.brand-header__gallery-img').length;

    if (imagesCount > 1) {
      loadAssets(['swiper.css', 'swiper.js']).then(() => {
        this.slider = new brand_header_MinimogLibs.Swiper(slider, {
          autoplay: {
            delay: 5000
          },
          slidesPerView: 1,
          loop: true,
          fadeEffect: {
            crossFade: true
          },
          pagination: {
            el: this.container.querySelector('.swiper-pagination'),
            clickable: true
          }
        });
      });
    }
  }
});
;// CONCATENATED MODULE: ./src/js/sections/product.js
/* provided dependency */ var product_MinimogTheme = __webpack_require__(4558)["MinimogTheme"];




register('product-page', {
  // Shortcut function called when a section is loaded via 'sections.load()' or by the Theme Editor 'shopify:section:load' event.
  onLoad: function () {
    this.acc = []; // MinimogTheme
    //   .Products
    //   .initProductForms({ context: this.container })
    //   .then(() => {
    //   })
    //   .catch(console.error)

    product_MinimogTheme.CompareProduct?.setCompareButtonsState?.();
    product_MinimogTheme.Wishlist?.setWishlistButtonsState?.();
    addRecentViewedProduct();
    product_MinimogTheme?.SizeChart?.init?.();
    product_MinimogTheme?.ProductCountdown?.init?.(); // MinimogTheme?.StickyATC?.init?.()

    product_MinimogTheme?.BoostSales?.init?.();
    product_MinimogTheme?.Sharing?.init?.();
    const prodAccordions = document.querySelectorAll('.prod__accordion');
    prodAccordions.forEach((acc, index) => {
      this.acc.push(new Accordion(acc));
      acc.dataset.index = index;
    });
    (0,events/* addEventDelegate */.X)({
      context: this.container,
      selector: (window.__minimog_review_selector || '') + '.prod__accordion .jdgm-widget-actions-wrapper, .prod__accordion .spr-summary-actions-newreview',
      handler: e => {
        const index = e.target.closest('.prod__accordion').dataset.index;
        setTimeout(() => {
          this.acc[Number(index)].setContentHeight();
        }, 300);
      },
      capture: true
    });
  }
});
;// CONCATENATED MODULE: ./src/js/sections/product-tabs.js
/* provided dependency */ var product_tabs_createElement = __webpack_require__(6295)["default"];
// eslint-disable-next-line no-unused-vars





register('product-tabs', {
  onLoad: function () {
    this.initTabs();
    this.initMobileSelect();
    this.selectors = {
      loadMoreBtn: '[data-load-more]',
      productsContainer: '[data-products-container]'
    };
    this.domNodes = queryDomNodes(this.selectors);
    this.tabSliders = [];
    initCustomSelect(this.container);
    const sliderEnabled = this.container.dataset.enableSlider === 'true';
    const buttonType = this.container.dataset.buttonType;
    const blocks = this.container.querySelectorAll('.sf-tab-content');

    if (sliderEnabled) {
      this.showPagination = this.container.dataset.showPagination === 'true';
      this.showNavigation = this.container.dataset.showNavigation === 'true';
      this.items = this.container.dataset.items;

      for (let block of blocks) {
        this.initSlider(block);
      }
    }

    if (!sliderEnabled && buttonType === 'load') {
      this.canLoad = true;
      this.currentPage = 1;
      this.spinner = product_tabs_createElement(Spinner, null);

      for (let block of blocks) {
        this.initLoadMore(block);
      }
    }
  },
  initTabs: function () {
    this.tabs = new Tabs(this?.container, target => {
      const tabId = target.getAttribute('href');
      const slider = this.container.querySelector(tabId + ' .swiper-container');
      console.log('switch tab', slider); // trigger update slider

      slider && slider.swiper.update();
    });
  },
  initSlider: function (sliderContainer) {
    initSlider({
      container: sliderContainer,
      items: parseInt(this.items),
      slidesPerGroup: 2,
      slidesPerGroupMobile: 2,
      showPagination: this.showPagination,
      showNavigation: this.showNavigation
    });
  },
  initMobileSelect: function () {
    this.select = this.container.querySelector('[data-tab-select]');
    this.select.addEventListener('change', () => {
      this.tabs.setActiveTab(parseInt(this.select.value));
      const slider = this.tabs?.currentTab?.querySelector('.swiper-container');
      slider && slider.swiper.update();
    });
  },
  initLoadMore: function (wrapper) {
    addEventDelegate({
      context: wrapper,
      selector: this.selectors.loadMoreBtn,
      handler: e => {
        e.preventDefault();
        this.handleLoadMore(wrapper);
      }
    });
  },
  handleLoadMore: function (wrapper) {
    const loadBtn = wrapper.querySelector(this.selectors.loadMoreBtn);
    const productsContainer = wrapper.querySelector(this.selectors.productsContainer);
    let currentPage = wrapper.dataset.page;
    currentPage = parseInt(currentPage);
    const totalPages = wrapper.dataset.totalPages;
    this.toggleLoading(loadBtn, true);
    const url = wrapper.dataset.url;
    const dataUrl = `${url}?page=${currentPage + 1}&section_id=${this.id}`;
    fetchCache(dataUrl).then(html => {
      currentPage++;
      wrapper.dataset.page = currentPage;
      this.toggleLoading(loadBtn, false);
      const dom = generateDomFromString(html);
      const products = dom.querySelector(this.selectors.productsContainer);

      if (products) {
        Array.from(products.childNodes).forEach(product => productsContainer.appendChild(product)); // MinimogTheme.Products.initProductForms({context: this.context})
      }

      if (currentPage >= parseInt(totalPages)) loadBtn && loadBtn.remove();
    });
  },
  toggleLoading: function (loadBtn, status) {
    if (!loadBtn) return;

    if (status) {
      loadBtn.appendChild(this.spinner);
      loadBtn.classList.add('sf-spinner-loading');
    } else {
      this?.spinner?.remove();
      loadBtn.classList.remove('sf-spinner-loading');
    }
  },
  onBlockSelect: function (evt) {
    const {
      index
    } = evt.target.dataset;
    this.tabs.setActiveTab(index);
  }
});
;// CONCATENATED MODULE: ./src/js/pages/product/product-list.js
/* provided dependency */ var product_list_createElement = __webpack_require__(6295)["default"];
/* provided dependency */ var product_list_MinimogTheme = __webpack_require__(4558)["MinimogTheme"];




class ProductList {
  constructor(container) {
    let productHandles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    _defineProperty(this, "selectors", {
      productList: '[data-product-list]',
      gridContainer: '[data-grid-container]'
    });

    _defineProperty(this, "swiper", void 0);

    _defineProperty(this, "currentScreen", void 0);

    _defineProperty(this, "init", async () => {
      const productNodes = {};
      await Promise.all(this.productHandles.map(async hdl => {
        const url = utilities_formatUrl('products', hdl, 'view=grid-card-item');
        const prodHTML = await fetchCache(url);
        const prodNode = product_list_createElement("div", {
          className: `swiper-slide ${this.enableSlider ? '' : 'pb-[30px]'}`
        });
        prodNode.innerHTML = prodHTML;

        if (prodNode.querySelector('[data-view="card"]')) {
          productNodes[hdl] = prodNode;
        }
      })); // Render in order

      const {
        productList,
        gridContainer
      } = this.domNodes;
      if (!this.enableSlider) productList.remove();
      this.productHandles.forEach(hdl => {
        const node = productNodes[hdl];

        if (node) {
          const productWrapper = this.enableSlider ? productList : gridContainer;
          productWrapper?.appendChild(node);
        }
      });
      product_list_MinimogTheme.CompareProduct?.setCompareButtonsState();
      product_list_MinimogTheme.Wishlist?.setWishlistButtonsState(); // MinimogTheme.Products.initProductForms({ context: this.container })
      // .then(() => {
      // })
      // .catch(console.error)

      this.initByScreenSize();
      this.container.classList.remove('hidden');
      window.addEventListener('resize', debounce_debounce(this.initByScreenSize, 300));
      refreshProductReview();
    });

    _defineProperty(this, "initByScreenSize", () => {
      const {
        productList,
        gridContainer
      } = this.domNodes;
      const screen = window.innerWidth > 767 ? 'desktop' : 'mobile';
      if (screen === this.currentScreen) return;
      this.currentScreen = screen;

      if (screen === 'desktop') {
        gridContainer?.classList.remove('sf__ms');
        productList?.classList.remove('sf__ms-wrapper');

        if (this.enableSlider && this.productHandles?.length > this.productsPerRow) {
          if (this.swiper) this.swiper.init();else {
            gridContainer?.classList.add('swiper-container');
            initSlider({
              container: this.container,
              items: this.productsPerRow,
              loop: true,
              slidesPerGroupMobile: 1,
              showNavigation: true,
              showPagination: false
            });
            this.swiper = gridContainer?.swiper;
          }
        }
      } else {
        if (this.swiper) this.swiper.destroy(false, true);
        gridContainer.classList.remove('swiper-container');
        gridContainer.classList.add('sf__ms');
        productList.classList.add('sf__ms-wrapper');
      }
    });

    if (!container || !productHandles.length) return;
    this.container = container;
    this.enableSlider = container.dataset.enableSlider === "true";
    this.productsToShow = Number(container.dataset.productsToShow) || 20;
    this.productsPerRow = Number(container.dataset.productsPerRow);
    this.productHandles = productHandles.slice(0, this.productsToShow);
    this.domNodes = queryDomNodes(this.selectors, container);
    this.init().catch(console.error);
  }

}
product_list_MinimogTheme.ProductList = ProductList;
;// CONCATENATED MODULE: ./src/js/sections/product-recommendations.js
/* provided dependency */ var product_recommendations_MinimogSettings = __webpack_require__(4558)["MinimogSettings"];
/* provided dependency */ var product_recommendations_MinimogTheme = __webpack_require__(4558)["MinimogTheme"];


register('product-recommendations', {
  onLoad: async function () {
    try {
      const recommendationURL = product_recommendations_MinimogSettings.routes.product_recommendations_url;
      const productId = product_recommendations_MinimogSettings.productId || product_recommendations_MinimogTheme.Cart.cart.items[0]?.product_id;

      if (productId) {
        const res = await fetchJSON(`${recommendationURL}.json?product_id=${productId}&limit=${this.container.dataset.productsToShow}`);
        const {
          products
        } = res || {};
        this.productHandles = products.map(_ref => {
          let {
            handle
          } = _ref;
          return handle;
        });
        this.productList = new ProductList(this.container, this.productHandles);
      }
    } catch (error) {
      console.error("Failed to init product-recommendations section!", error);
    }
  }
});
;// CONCATENATED MODULE: ./src/js/sections/foxkit-related-products.js

register('foxkit-related-products', {
  onLoad: function () {
    if (window?.FoxKit?.foxKitSettings?.productRecommendations) {
      window?.FoxKit?.initProductRecommendations?.();
    }
  }
});
;// CONCATENATED MODULE: ./src/js/sections/recently-viewed-products.js



register('recently-viewed', {
  onLoad() {
    let products = getCookie('sf-recent-viewed-products');
    if (!products) return;
    this.productHandles = Array.from(new Set(JSON.parse(products)));
    this.productList = new ProductList(this.container, this.productHandles);
  }

});
;// CONCATENATED MODULE: ./src/js/sections/blog-template.js


register('blog-template', {
  onLoad: function () {
    const container = this.container?.querySelector('.sf__aside-instagram');

    if (container) {
      const {
        accessToken,
        imagesCount
      } = container.dataset;

      if (accessToken) {
        new Instagram(container, accessToken, imagesCount);
      } else {
        console.warn('Failed to init Instagram section! Missing Access Token');
      }
    }
  }
});
;// CONCATENATED MODULE: ./src/js/sections/article-template.js


register('article-template', {
  onLoad: function () {
    const container = this.container?.querySelector('.sf__aside-instagram');

    if (container) {
      const {
        accessToken,
        imagesCount
      } = container.dataset;

      if (accessToken) {
        new Instagram(container, accessToken, imagesCount);
      } else {
        console.warn('Failed to init Instagram section! Missing Access Token');
      }
    }
  }
});
;// CONCATENATED MODULE: ./src/js/sections/index.js
 // Header + Footer


 // Home sections



















 // Collection page sections



 // import './foxkit-flashsale'
// Product page sections





 // Blog template section



function loadAllSections() {
  try {
    load('*');
  } catch (error) {
    console.error("Faied to load sections. ", error);
  }
}
// EXTERNAL MODULE: ./node_modules/animate-loading/dist/main.js
var main = __webpack_require__(9367);
var main_default = /*#__PURE__*/__webpack_require__.n(main);
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-addresses/loader.js
var query = "query countries($locale: SupportedLocale!) {" + "  countries(locale: $locale) {" + "    name" + "    code" + "    labels {" + "      address1" + "      address2" + "      city" + "      company" + "      country" + "      firstName" + "      lastName" + "      phone" + "      postalCode" + "      zone" + "    }" + "    formatting {" + "      edit" + "    }" + "    zones {" + "      name" + "      code" + "    }" + "  }" + "}";
var GRAPHQL_ENDPOINT = 'https://country-service.shopifycloud.com/graphql';
function loadCountries(locale) {
  var response = fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      query: query,
      operationName: 'countries',
      variables: {
        locale: toSupportedLocale(locale)
      }
    })
  });
  return response.then(function (res) {
    return res.json();
  }).then(function (countries) {
    return countries.data.countries;
  });
}
var DEFAULT_LOCALE = 'EN';
var SUPPORTED_LOCALES = ['DA', 'DE', 'EN', 'ES', 'FR', 'IT', 'JA', 'NL', 'PT', 'PT_BR'];
function toSupportedLocale(locale) {
  var supportedLocale = locale.replace(/-/, '_').toUpperCase();

  if (SUPPORTED_LOCALES.indexOf(supportedLocale) !== -1) {
    return supportedLocale;
  } else if (SUPPORTED_LOCALES.indexOf(supportedLocale.substring(0, 2)) !== -1) {
    return supportedLocale.substring(0, 2);
  } else {
    return DEFAULT_LOCALE;
  }
}
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-addresses/helpers.js
function mergeObjects() {
  var to = Object({});

  for (var index = 0; index < arguments.length; index++) {
    var nextSource = arguments[index];

    if (nextSource) {
      for (var nextKey in nextSource) {
        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
          to[nextKey] = nextSource[nextKey];
        }
      }
    }
  }

  return to;
}
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-addresses/addressForm.js


var FIELD_REGEXP = /({\w+})/g;
var LINE_DELIMITER = '_';
var INPUT_SELECTORS = {
  lastName: '[name="address[last_name]"]',
  firstName: '[name="address[first_name]"]',
  company: '[name="address[company]"]',
  address1: '[name="address[address1]"]',
  address2: '[name="address[address2]"]',
  country: '[name="address[country]"]',
  zone: '[name="address[province]"]',
  postalCode: '[name="address[zip]"]',
  city: '[name="address[city]"]',
  phone: '[name="address[phone]"]'
};
function AddressForm(rootEl, locale, options) {
  locale = locale || 'en';
  options = options || {
    inputSelectors: {}
  };
  var formElements = loadFormElements(rootEl, mergeObjects(INPUT_SELECTORS, options.inputSelectors));
  validateElements(formElements);
  return loadShippingCountries(options.shippingCountriesOnly).then(function (shippingCountryCodes) {
    return loadCountries(locale).then(function (countries) {
      init(rootEl, formElements, filterCountries(countries, shippingCountryCodes));
    });
  });
}
/**
 * Runs when countries have been loaded
 */

function init(rootEl, formElements, countries) {
  populateCountries(formElements, countries);
  var selectedCountry = formElements.country.input ? formElements.country.input.value : null;
  setEventListeners(rootEl, formElements, countries);
  handleCountryChange(rootEl, formElements, selectedCountry, countries);
}
/**
 * Handles when a country change: set labels, reorder fields, populate zones
 */


function handleCountryChange(rootEl, formElements, countryCode, countries) {
  var country = getCountry(countryCode, countries);
  setLabels(formElements, country);
  reorderFields(rootEl, formElements, country);
  populateZones(formElements, country);
}
/**
 * Sets up event listener for country change
 */


function setEventListeners(rootEl, formElements, countries) {
  formElements.country.input.addEventListener('change', function (event) {
    handleCountryChange(rootEl, formElements, event.target.value, countries);
  });
}
/**
 * Reorder fields in the DOM and add data-attribute to fields given a country
 */


function reorderFields(rootEl, formElements, country) {
  var formFormat = country.formatting.edit;
  var countryWrapper = formElements.country.wrapper;
  var afterCountry = false;
  getOrderedField(formFormat).forEach(function (row) {
    row.forEach(function (line) {
      formElements[line].wrapper.dataset.lineCount = row.length;

      if (!formElements[line].wrapper) {
        return;
      }

      if (line === 'country') {
        afterCountry = true;
        return;
      }

      if (afterCountry) {
        rootEl.append(formElements[line].wrapper);
      } else {
        rootEl.insertBefore(formElements[line].wrapper, countryWrapper);
      }
    });
  });
}
/**
 * Update labels for a given country
 */


function setLabels(formElements, country) {
  Object.keys(formElements).forEach(function (formElementName) {
    formElements[formElementName].labels.forEach(function (label) {
      label.textContent = country.labels[formElementName];
    });
  });
}
/**
 * Add right countries in the dropdown for a given country
 */


function populateCountries(formElements, countries) {
  var countrySelect = formElements.country.input;
  var duplicatedCountrySelect = countrySelect.cloneNode(true);
  countries.forEach(function (country) {
    var optionElement = document.createElement('option');
    optionElement.value = country.code;
    optionElement.textContent = country.name;
    duplicatedCountrySelect.appendChild(optionElement);
  });
  countrySelect.innerHTML = duplicatedCountrySelect.innerHTML;

  if (countrySelect.dataset.default) {
    countrySelect.value = countrySelect.dataset.default;
  }
}
/**
 * Add right zones in the dropdown for a given country
 */


function populateZones(formElements, country) {
  var zoneEl = formElements.zone;

  if (!zoneEl) {
    return;
  }

  if (country.zones.length === 0) {
    zoneEl.wrapper.dataset.ariaHidden = 'true';
    zoneEl.input.innerHTML = '';
    return;
  }

  zoneEl.wrapper.dataset.ariaHidden = 'false';
  var zoneSelect = zoneEl.input;
  var duplicatedZoneSelect = zoneSelect.cloneNode(true);
  duplicatedZoneSelect.innerHTML = '';
  country.zones.forEach(function (zone) {
    var optionElement = document.createElement('option');
    optionElement.value = zone.code;
    optionElement.textContent = zone.name;
    duplicatedZoneSelect.appendChild(optionElement);
  });
  zoneSelect.innerHTML = duplicatedZoneSelect.innerHTML;

  if (zoneSelect.dataset.default) {
    zoneSelect.value = zoneSelect.dataset.default;
  }
}
/**
 * Will throw if an input or a label is missing from the wrapper
 */


function validateElements(formElements) {
  Object.keys(formElements).forEach(function (elementKey) {
    var element = formElements[elementKey].input;
    var labels = formElements[elementKey].labels;

    if (!element) {
      return;
    }

    if (typeof element !== 'object') {
      throw new TypeError(formElements[elementKey] + ' is missing an input or select.');
    } else if (typeof labels !== 'object') {
      throw new TypeError(formElements[elementKey] + ' is missing a label.');
    }
  });
}
/**
 * Given an countryCode (eg. 'CA'), will return the data of that country
 */


function getCountry(countryCode, countries) {
  countryCode = countryCode || 'CA';
  return countries.filter(function (country) {
    return country.code === countryCode;
  })[0];
}
/**
 * Given a format (eg. "{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{country}{province}{zip}_{phone}")
 * will return an array of how the form needs to be formatted, eg.:
 * =>
 * [
 *   ['firstName', 'lastName'],
 *   ['company'],
 *   ['address1'],
 *   ['address2'],
 *   ['city'],
 *   ['country', 'province', 'zip'],
 *   ['phone']
 * ]
 */


function getOrderedField(format) {
  return format.split(LINE_DELIMITER).map(function (fields) {
    var result = fields.match(FIELD_REGEXP);

    if (!result) {
      return [];
    }

    return result.map(function (fieldName) {
      var newFieldName = fieldName.replace(/[{}]/g, '');

      switch (newFieldName) {
        case 'zip':
          return 'postalCode';

        case 'province':
          return 'zone';

        default:
          return newFieldName;
      }
    });
  });
}
/**
 * Given a rootEl where all `input`s, `select`s, and `labels` are nested, it
 * will returns all form elements (wrapper, input and labels) of the form.
 * See `FormElements` type for details
 */


function loadFormElements(rootEl, inputSelectors) {
  var elements = {};
  Object.keys(INPUT_SELECTORS).forEach(function (inputKey) {
    var input = rootEl.querySelector(inputSelectors[inputKey]);
    elements[inputKey] = input ? {
      wrapper: input.parentElement,
      input: input,
      labels: document.querySelectorAll('[for="' + input.id + '"]')
    } : {};
  });
  return elements;
}
/**
 * If shippingCountriesOnly is set to true, will return the list of countries the
 * shop ships to. Otherwise returns null.
 */


function loadShippingCountries(shippingCountriesOnly) {
  if (!shippingCountriesOnly) {
    // eslint-disable-next-line no-undef
    return Promise.resolve(null);
  }

  var response = fetch(location.origin + '/meta.json');
  return response.then(function (res) {
    return res.json();
  }).then(function (meta) {
    // If ships_to_countries has * in the list, it means the shop ships to
    // all countries
    return meta.ships_to_countries.indexOf('*') !== -1 ? null : meta.ships_to_countries;
  }).catch(function () {
    return null;
  });
}
/**
 * Only returns countries that are in includedCountryCodes
 * Returns all countries if no includedCountryCodes is passed
 */


function filterCountries(countries, includedCountryCodes) {
  if (!includedCountryCodes) {
    return countries;
  }

  return countries.filter(function (country) {
    return includedCountryCodes.indexOf(country.code) !== -1;
  });
}
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-addresses/theme-addresses.js


;// CONCATENATED MODULE: ./src/js/modules/cart.js
/* provided dependency */ var cart_MinimogSettings = __webpack_require__(4558)["MinimogSettings"];
/* provided dependency */ var cart_MinimogStrings = __webpack_require__(4558)["MinimogStrings"];
/* provided dependency */ var cart_MinimogTheme = __webpack_require__(4558)["MinimogTheme"];
/* provided dependency */ var MinimogEvents = __webpack_require__(4558)["MinimogEvents"];
/* provided dependency */ var cart_createElement = __webpack_require__(6295)["default"];




class Cart {
  constructor() {
    _defineProperty(this, "selectors", {
      cartIcon: '.sf-cart-icon',
      cartCounts: ['.sf-cart-count'],
      cartDrawer: '.scd__wrapper',
      cartDrawerContent: '.scd__content',
      cartDrawerFooter: '.scd__footer',
      cartDrawerClose: '.scd__close',
      cartDiscountCode: '[name="discount"]',
      cartDiscountCodeNoti: '[data-discount-noti]',
      cartDrawerItems: '.scd__items',
      cartCountDown: '.scd__countdown',
      cartCountDownMessage: "[data-countdown-message]",
      overlay: '.scd__overlay',
      addressForm: '[data-address="root"]',
      zipCode: '[name="address[zip]"]',
      province: '[name="address[province]"]',
      country: '[name="address[country]"]',
      shippingContent: '.scd__addon-message',
      cartNote: '[name="note"]',
      checkoutButton: '[name="checkout"]'
    });

    _defineProperty(this, "cartItemSelectors", {
      btn: '.scd-item__btn',
      qtyInput: '.scd-item__qty_input',
      remove: '.scd-item__remove'
    });

    _defineProperty(this, "cart", {});

    _defineProperty(this, "scrollHandlerAdded", false);

    _defineProperty(this, "countdownTimerStarted", false);

    _defineProperty(this, "openAddon", null);

    _defineProperty(this, "discountCodeKey", 'mn-discount-code');

    _defineProperty(this, "isCartPage", cart_MinimogSettings.templateName === 'cart');

    _defineProperty(this, "enableCartDrawer", cart_MinimogSettings.enable_cart_drawer);

    _defineProperty(this, "cartSection", this.isCartPage ? 'cart-template' : 'cart-drawer');

    _defineProperty(this, "rootUrl", window.Shopify.routes.root);

    _defineProperty(this, "fetchCartSection", async () => {
      return await fetchSection(this.cartSection);
    });

    _defineProperty(this, "initCartCountDown", () => {
      const {
        cartCountDown
      } = this.domNodes;

      if (cartCountDown) {
        const startTime = Date.now();
        const duration = Number(cartCountDown.dataset.countdownTime) || 5;
        const repeat = cartCountDown.dataset.repeat === 'true';
        const message = cartCountDown.dataset.timeoutMessage;
        const endTime = startTime + duration * 60 * 1000;
        this.countdownTimer = new countdown_timer(cartCountDown, startTime, endTime, {
          addZeroPrefix: false,
          loop: repeat,
          callback: () => {
            if (!repeat && message) {
              this.domNodes.cartCountDownMessage.innerHTML = message;
              cartCountDown.classList.add('time-out');
              cartCountDown.style.color = '#f44336';
            }
          }
        });
        this.countdownTimerStarted = true;
      }
    });

    _defineProperty(this, "addScrollHandler", () => {
      const cartItemsOffsetTop = this.domNodes?.cartDrawerItems?.offsetTop;
      const footerHeight = this.domNodes?.cartDrawerFooter?.offsetHeight;
      const cartItemsPaddingTop = '10px';
      this.domNodes?.cartDrawerItems?.style?.setProperty('--scd-items-max-height', `calc(100vh - ${cartItemsOffsetTop}px - ${footerHeight}px - ${cartItemsPaddingTop})`);
      this.scrollHandlerAdded = true;
    });

    _defineProperty(this, "getCartItemByKey", key => {
      const {
        items
      } = this.cart;

      if (Array.isArray(items)) {
        const item = items.find(_ref => {
          let {
            key: _key
          } = _ref;
          return _key === key;
        });
        if (item) return item;
      }
    });

    _defineProperty(this, "getCart", () => {
      return fetchJSON(this.rootUrl + 'cart.json');
    });

    _defineProperty(this, "changeCart", lineItem => {
      return fetchJSON(cart_MinimogSettings.routes.cart_change_url, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': `application/json`
        },
        method: 'POST',
        body: JSON.stringify(lineItem)
      });
    });

    _defineProperty(this, "updateCart", data => {
      return fetchJSON(cart_MinimogSettings.routes.cart_update_url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': `application/json`
        },
        body: JSON.stringify(data)
      });
    });

    _defineProperty(this, "changeItemQty", async lineItem => {
      const {
        not_enough_item_message,
        sold_out_items_message
      } = cart_MinimogStrings;

      try {
        const {
          id: key,
          quantity
        } = lineItem;
        this.loading.start();
        const newCart = await this.changeCart(lineItem);
        this.cart = newCart;
        const cartHTML = await this.fetchCartSection();
        this.loading.finish(() => {
          this.renderNewCart(cartHTML);
          window.Shopify.onCartUpdate(newCart, false);
          const newItem = newCart.items.find(_ref2 => {
            let {
              key: _key
            } = _ref2;
            return _key === key;
          });

          if (quantity > newItem?.quantity) {
            const {
              product_id
            } = newItem;
            const lineItems = newCart.items.filter(_ref3 => {
              let {
                product_id: pId
              } = _ref3;
              return pId === product_id;
            });

            if (lineItems.length === 1) {
              const lineItemNode = this.getLineItemNode(lineItem);
              cart_MinimogTheme.Notification.show({
                target: lineItemNode,
                type: 'warning',
                message: not_enough_item_message.replace('__inventory_quantity__', newItem.quantity)
              });
            }
          }
        });
      } catch (err) {
        this.loading.finish();

        if (err?.status === 422) {
          const lineItemNode = this.getLineItemNode(lineItem);

          if (lineItemNode) {
            cart_MinimogTheme.Notification.show({
              target: lineItemNode,
              type: 'warning',
              message: sold_out_items_message
            });
          }
        }

        console.warn("Failed to change item quantity: ", err);
      }
    });

    _defineProperty(this, "getLineItemNode", lineItem => {
      const {
        cartDrawerItems
      } = this.domNodes;
      let lineItemNode = cartDrawerItems.querySelector(`.scd-item[data-id="${lineItem.id}"]`);

      if (!lineItemNode) {
        lineItemNode = cartDrawerItems.querySelector(`.scd-item[data-index="${lineItem.line}"]`);
      }

      return lineItemNode;
    });

    _defineProperty(this, "renderNewCart", async cartHTML => {
      if (!cartHTML) {
        cartHTML = await this.fetchCartSection();
      }

      const newCartBody = cartHTML.querySelector('.scd__body');
      const newCartSummary = cartHTML.querySelector('.scd__summary');
      const currentCartBody = this.domNodes.cartDrawer.querySelector('.scd__body');
      const currentCartSummary = this.domNodes.cartDrawer.querySelector('.scd__summary');
      currentCartBody.replaceWith(newCartBody);
      currentCartSummary.replaceWith(newCartSummary);
      this.domNodes = queryDomNodes(this.selectors);
    });

    _defineProperty(this, "refreshCart", async () => {
      this.cart = await this.getCart();
    });

    _defineProperty(this, "updateCartCount", cart => {
      if (Number(cart.item_count) < 1) {
        this.container?.classList?.remove('cart-has-items');

        if (this.countdownTimer) {
          this.countdownTimer.clear();
          this.countdownTimerStarted = false;
        }

        document.body.classList.add('cart-empty');
      } else {
        this.container?.classList?.add('cart-has-items');
        document.body.classList.remove('cart-empty');

        if (!this.countdownTimerStarted && this.countdownTimer) {
          this.countdownTimer.start();
          this.countdownTimerStarted = true;
        }
      }

      [...this.domNodes.cartCounts].forEach(cartCount => {
        cartCount.textContent = cart.item_count;
      });
    });

    _defineProperty(this, "updateCartNote", () => {
      this.updateCart({
        note: this.domNodes.cartNote.value
      });
    });

    _defineProperty(this, "openCartDrawer", e => {
      if (this.isCartPage || !this.enableCartDrawer) return;
      e?.preventDefault?.();
      const {
        cartDrawer,
        cartDrawerContent
      } = this.domNodes;

      if (cartDrawer && cartDrawerContent) {
        if (window.innerWidth < 770) {
          document.documentElement.classList.add('prevent-scroll');
          cartDrawer.classList.add('mobile');
        }

        cartDrawer.classList.remove('hidden');
        requestAnimationFrame(() => {
          cartDrawer.style.setProperty('--tw-bg-opacity', '0.5');
          cartDrawerContent.classList.remove('translate-x-full');
          !this.scrollHandlerAdded && this.addScrollHandler();
        });
        MinimogEvents.emit('ON_OPEN_DRAWER_CART', this.cart);
      }
    });

    _defineProperty(this, "closeCartDrawer", () => {
      const {
        cartDrawer,
        cartDrawerContent
      } = this.domNodes;

      if (cartDrawer && cartDrawerContent) {
        cartDrawer?.style?.setProperty('--tw-bg-opacity', '0');
        cartDrawerContent?.classList.add('translate-x-full');
        setTimeout(() => {
          cartDrawer?.classList?.add('hidden');
          cartDrawer?.classList?.remove('mobile');
          document.documentElement.classList.remove('prevent-scroll');
          this.closeAddon();
        }, 300);
      }
    });

    _defineProperty(this, "initCartAddons", () => {
      addEventDelegate({
        selector: '.scd__footer-actions button',
        handler: (e, addonButton) => {
          e.preventDefault();

          if (this.isCartPage) {
            document.querySelector('.scd__addon.open')?.classList?.remove('open');
          }

          const {
            cartDrawer,
            overlay,
            addressForm,
            cartDiscountCodeNoti
          } = this.domNodes;
          const {
            open: addonTarget
          } = addonButton.dataset;
          const addonNode = cartDrawer.querySelector(`#scd-${addonTarget}`);
          addonButton.classList.add('active');
          addonNode?.classList.add('open');
          overlay?.classList.add('open');
          this.openAddon = addonNode;

          if (addonTarget === 'shipping') {
            AddressForm(addressForm, window.Shopify.locale);
          }

          if (addonTarget === 'coupon' && cartDiscountCodeNoti) {
            cartDiscountCodeNoti.style.display = 'none';
          }
        }
      });
      addEventDelegate({
        selector: '.btn-cancel',
        context: this.domNodes.cartDrawer,
        handler: this.closeAddon
      });
      addEventDelegate({
        selector: '.btn-calc',
        context: this.domNodes.cartDrawer,
        handler: this.calculateShipping
      });
      const {
        cartDiscountCode,
        cartDiscountCodeNoti
      } = this.domNodes;

      if (cartDiscountCode) {
        const code = localStorage.getItem(this.discountCodeKey);

        if (code) {
          cartDiscountCode.value = code;

          if (cartDiscountCodeNoti) {
            cartDiscountCodeNoti.style.display = 'inline';
          }
        }
      }

      this.saveAddonValue();
    });

    _defineProperty(this, "closeAddon", e => {
      e?.preventDefault?.();
      this.openAddon?.classList.remove('open');
      this.domNodes.overlay?.classList.remove('open');
      this.openAddon = null;
    });

    _defineProperty(this, "calculateShipping", e => {
      e.preventDefault();
      const zipCode = this.domNodes.zipCode.value?.trim();
      const country = this.domNodes.country.value;
      const province = this.domNodes.province.value;
      this.domNodes.shippingContent.classList.remove('error');
      this.domNodes.shippingContent.innerHTML = '';
      fetch(`${this.rootUrl}cart/shipping_rates.json?shipping_address%5Bzip%5D=${zipCode}&shipping_address%5Bcountry%5D=${country}&shipping_address%5Bprovince%5D=${province}`).then(res => res.json()).then(res => {
        if (res && res.shipping_rates) {
          const {
            shipping_rates
          } = res;
          const {
            shippingRatesResult,
            noShippingRate
          } = cart_MinimogStrings;

          if (shipping_rates.length > 0) {
            this.domNodes.shippingContent.appendChild(cart_createElement("p", {
              className: "mb-3 text-base"
            }, shippingRatesResult.replace('{{count}}', shipping_rates.length), ":"));
            shipping_rates.map(rate => {
              const rateNode = cart_createElement("span", null);
              rateNode.innerHTML = formatMoney(rate.price, cart_MinimogSettings.money_format);
              this.domNodes.shippingContent.appendChild(cart_createElement("p", null, rate.name, ": ", rateNode));
            });
          } else {
            this.domNodes.shippingContent.innerHTML = `<p>${noShippingRate}</p>`;
          }
        } else {
          Object.entries(res).map(error => {
            this.domNodes.shippingContent.classList.add(error[0]?.toLowerCase());
            console.log(error, 'error');
            const message = `${error[1][0]}`;
            this.domNodes.shippingContent.appendChild(cart_createElement("p", null, message));
          });
        }
      }).catch(console.error);
    });

    _defineProperty(this, "saveAddonValue", () => {
      if (this.domNodes.cartDiscountCode) {
        addEventDelegate({
          event: 'click',
          context: this.domNodes.cartDrawer,
          selector: '.btn-save',
          handler: (e, target) => {
            e.preventDefault();

            if (target?.dataset.action === 'coupon') {
              const code = this.domNodes.cartDiscountCode.value;
              localStorage.setItem(this.discountCodeKey, code);
              const {
                cartDiscountCodeNoti
              } = this.domNodes;

              if (code !== '' && cartDiscountCodeNoti) {
                cartDiscountCodeNoti.style.display = 'inline';
              }
            }

            if (target?.dataset.action === 'note') {
              this.updateCartNote();
            }

            this.closeAddon();
          }
        });
      }
    });

    this.getCart().then(cart => {
      this.cart = cart;

      if (this.isCartPage) {
        this.init();
      } else {
        this.fetchCartSection().then(drawer => {
          const cartDrawerContainer = document.querySelector('#cart-drawer-container');
          cartDrawerContainer.appendChild(drawer);
          this.init();
        }).catch(console.error);
      }
    }).catch(console.error);
  }

  init() {
    this.container = this.isCartPage ? document.documentElement : document.querySelector('section.sf-header');
    this.domNodes = queryDomNodes(this.selectors);
    const loadingTarget = this.domNodes.cartDrawerContent || document.body;
    this.loading = new (main_default())(loadingTarget, {
      overlay: loadingTarget
    });

    if (this.enableCartDrawer && !this.isCartPage) {
      addEventDelegate({
        selector: this.selectors.cartIcon,
        handler: this.openCartDrawer
      });
      addEventDelegate({
        selector: this.selectors.cartDrawerClose,
        handler: this.closeCartDrawer
      });
      addEventDelegate({
        selector: this.selectors.cartDrawer,
        handler: e => {
          if (e.target === this.domNodes.cartDrawer) {
            this.closeCartDrawer();
          }
        }
      });
    }

    addEventDelegate({
      context: this.domNodes.cartDrawer,
      selector: this.cartItemSelectors.btn,
      handler: (e, btn) => {
        e.preventDefault();
        const {
          qtyChange,
          id
        } = btn.dataset;
        const item = this.getCartItemByKey(id);

        if (item) {
          let {
            quantity
          } = item;
          quantity += qtyChange === 'dec' ? -1 : +1;
          this.changeItemQty({
            id,
            quantity
          });
        } else {
          console.warn(`Cart item to change quantity not found. Key: ${id}`);
        }
      }
    });
    addEventDelegate({
      context: this.domNodes.cartDrawer,
      event: 'change',
      selector: this.cartItemSelectors.qtyInput,
      handler: (e, input) => {
        e.preventDefault();
        const {
          id
        } = input.dataset;
        const quantity = Number(input.value);
        this.changeItemQty({
          id,
          quantity
        });
      }
    });
    addEventDelegate({
      context: this.domNodes.cartDrawer,
      selector: this.cartItemSelectors.remove,
      handler: (e, removeBtn) => {
        e.preventDefault();
        const {
          id
        } = removeBtn.dataset;
        const item = this.getCartItemByKey(id);

        if (item) {
          const index = this.cart.items.indexOf(item);
          this.changeItemQty({
            line: index + 1,
            quantity: 0
          });
        } else {
          console.warn(`Cart item to remove not found. Key: ${id}`);
        }
      }
    });
    addEventDelegate({
      selector: this.selectors.checkoutButton,
      handler: (e, button) => {
        button.classList.add('sf-spinner-loading');
      }
    });
    this.initCartCountDown();
    this.initCartAddons();
    MinimogEvents.subscribe?.('ON_CART_UPDATE', cart => {
      this.cart = cart;
      this.updateCartCount(cart);
    });
  }

}
cart_MinimogTheme.Cart = new Cart();
;// CONCATENATED MODULE: ./src/js/components/Notification.jsx
/* provided dependency */ var Notification_createElement = __webpack_require__(6295)["default"];
/* harmony default export */ function components_Notification(_ref) {
  let {
    type,
    message,
    onclick
  } = _ref;
  let icon;

  if (type === 'warning') {
    icon = Notification_createElement("svg", {
      class: "w-6 h-6",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, Notification_createElement("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    }));
  } else if (type === 'success') {
    icon = Notification_createElement("svg", {
      class: "w-6 h-6",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, Notification_createElement("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    }));
  }

  return Notification_createElement("div", {
    className: `notification ${type}`,
    onclick: onclick
  }, icon, Notification_createElement("div", {
    className: "ml-3"
  }, message));
}
;// CONCATENATED MODULE: ./src/js/modules/notification.js
/* provided dependency */ var notification_createElement = __webpack_require__(6295)["default"];
/* provided dependency */ var notification_MinimogTheme = __webpack_require__(4558)["MinimogTheme"];

// eslint-disable-next-line no-unused-vars

class Notification {
  constructor() {
    _defineProperty(this, "noti", null);

    _defineProperty(this, "removeTimeoutId", null);

    _defineProperty(this, "hideTimeoutId", null);

    _defineProperty(this, "transitionDuration", 300);

    _defineProperty(this, "show", _ref => {
      let {
        target,
        type,
        message,
        method = 'after',
        last = 3000,
        delay = 0,
        debug = false
      } = _ref;
      this.clearTimeout();
      this.removeNoti();
      setTimeout(() => {
        this.noti = notification_createElement(components_Notification, {
          type: type,
          message: message,
          onclick: this.handleClick
        });
        target?.[method](this.noti);
        requestAnimationFrame(() => this.noti.classList.add('show'));

        if (!debug) {
          this.hideTimeoutId = setTimeout(() => {
            this.noti.classList.add('hide');
            this.removeTimeoutId = setTimeout(this.removeNoti, this.transitionDuration * 2);
          }, last);
        }
      }, delay);
    });

    _defineProperty(this, "handleClick", () => {
      clearTimeout(this.removeTimeoutId);
      this.noti.classList.add('hide');
      setTimeout(this.removeNoti, this.transitionDuration * 2);
    });

    _defineProperty(this, "clearTimeout", () => {
      clearTimeout(this.removeTimeoutId);
      clearTimeout(this.hideTimeoutId);
    });

    _defineProperty(this, "removeNoti", () => {
      this?.noti?.remove();
    });
  }

}
notification_MinimogTheme.Notification = new Notification();
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-product/theme-product.js
/**
 * Returns a product JSON object when passed a product URL
 * @param {*} url
 */
function getProductJson(handle) {
  return fetch('/products/' + handle + '.js').then(function (response) {
    return response.json();
  });
}
/**
 * Find a match in the project JSON (using a ID number) and return the variant (as an Object)
 * @param {Object} product Product JSON object
 * @param {Number} value Accepts Number (e.g. 6908023078973)
 * @returns {Object} The variant object once a match has been successful. Otherwise null will be return
 */

function getVariantFromId(product, value) {
  _validateProductStructure(product);

  if (typeof value !== 'number') {
    throw new TypeError(value + ' is not a Number.');
  }

  var result = product.variants.filter(function (variant) {
    return variant.id === value;
  });
  return result[0] || null;
}
/**
 * Convert the Object (with 'name' and 'value' keys) into an Array of values, then find a match & return the variant (as an Object)
 * @param {Object} product Product JSON object
 * @param {Object} collection Object with 'name' and 'value' keys (e.g. [{ name: "Size", value: "36" }, { name: "Color", value: "Black" }])
 * @returns {Object || null} The variant object once a match has been successful. Otherwise null will be returned
 */

function getVariantFromSerializedArray(product, collection) {
  _validateProductStructure(product); // If value is an array of options


  var optionArray = _createOptionArrayFromOptionCollection(product, collection);

  return getVariantFromOptionArray(product, optionArray);
}
/**
 * Find a match in the project JSON (using Array with option values) and return the variant (as an Object)
 * @param {Object} product Product JSON object
 * @param {Array} options List of submitted values (e.g. ['36', 'Black'])
 * @returns {Object || null} The variant object once a match has been successful. Otherwise null will be returned
 */

function getVariantFromOptionArray(product, options) {
  _validateProductStructure(product);

  _validateOptionsArray(options);

  var result = product.variants.filter(function (variant) {
    return options.every(function (option, index) {
      return variant.options[index] === option;
    });
  });
  return result[0] || null;
}
/**
 * Creates an array of selected options from the object
 * Loops through the project.options and check if the "option name" exist (product.options.name) and matches the target
 * @param {Object} product Product JSON object
 * @param {Array} collection Array of object (e.g. [{ name: "Size", value: "36" }, { name: "Color", value: "Black" }])
 * @returns {Array} The result of the matched values. (e.g. ['36', 'Black'])
 */

function _createOptionArrayFromOptionCollection(product, collection) {
  _validateProductStructure(product);

  _validateSerializedArray(collection);

  var optionArray = [];
  collection.forEach(function (option) {
    for (var i = 0; i < product.options.length; i++) {
      if (product.options[i].name.toLowerCase() === option.name.toLowerCase()) {
        optionArray[i] = option.value;
        break;
      }
    }
  });
  return optionArray;
}
/**
 * Check if the product data is a valid JS object
 * Error will be thrown if type is invalid
 * @param {object} product Product JSON object
 */


function _validateProductStructure(product) {
  if (typeof product !== 'object') {
    throw new TypeError(product + ' is not an object.');
  }

  if (Object.keys(product).length === 0 && product.constructor === Object) {
    throw new Error(product + ' is empty.');
  }
}
/**
 * Validate the structure of the array
 * It must be formatted like jQuery's serializeArray()
 * @param {Array} collection Array of object [{ name: "Size", value: "36" }, { name: "Color", value: "Black" }]
 */


function _validateSerializedArray(collection) {
  if (!Array.isArray(collection)) {
    throw new TypeError(collection + ' is not an array.');
  }

  if (collection.length === 0) {
    return [];
  }

  if (collection[0].hasOwnProperty('name')) {
    if (typeof collection[0].name !== 'string') {
      throw new TypeError('Invalid value type passed for name of option ' + collection[0].name + '. Value should be string.');
    }
  } else {
    throw new Error(collection[0] + 'does not contain name key.');
  }
}
/**
 * Validate the structure of the array
 * It must be formatted as list of values
 * @param {Array} collection Array of object (e.g. ['36', 'Black'])
 */


function _validateOptionsArray(options) {
  if (Array.isArray(options) && typeof options[0] === 'object') {
    throw new Error(options + 'is not a valid array of options.');
  }
}
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-product-form/listeners.js
function Listeners() {
  this.entries = [];
}

Listeners.prototype.add = function (element, event, fn) {
  this.entries.push({
    element: element,
    event: event,
    fn: fn
  });
  element.addEventListener(event, fn);
};

Listeners.prototype.removeAll = function () {
  this.entries = this.entries.filter(function (listener) {
    listener.element.removeEventListener(listener.event, listener.fn);
    return false;
  });
};
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-product-form/theme-product-form.js


var selectors = {
  idInput: '[name="id"]',
  optionInput: '[name^="options"]',
  quantityInput: '[name="quantity"]',
  propertyInput: '[name^="properties"]'
}; // Public Methods
// -----------------------------------------------------------------------------

/**
 * Returns a URL with a variant ID query parameter. Useful for updating window.history
 * with a new URL based on the currently select product variant.
 * @param {string} url - The URL you wish to append the variant ID to
 * @param {number} id  - The variant ID you wish to append to the URL
 * @returns {string} - The new url which includes the variant ID query parameter
 */

function getUrlWithVariant(url, id) {
  if (/variant=/.test(url)) {
    return url.replace(/(variant=)[^&]+/, '$1' + id);
  } else if (/\?/.test(url)) {
    return url.concat('&variant=').concat(id);
  }

  return url.concat('?variant=').concat(id);
}
/**
 * Constructor class that creates a new instance of a product form controller.
 *
 * @param {Element} element - DOM element which is equal to the <form> node wrapping product form inputs
 * @param {Object} product - A product object
 * @param {Object} options - Optional options object
 * @param {Function} options.onOptionChange - Callback for whenever an option input changes
 * @param {Function} options.onQuantityChange - Callback for whenever an quantity input changes
 * @param {Function} options.onPropertyChange - Callback for whenever a property input changes
 * @param {Function} options.onFormSubmit - Callback for whenever the product form is submitted
 */

function ProductForm(element, product, options) {
  this.element = element;
  this.product = _validateProductObject(product);
  options = options || {};
  this._listeners = new Listeners();

  this._listeners.add(this.element, 'submit', this._onSubmit.bind(this, options));

  this.optionInputs = this._initInputs(selectors.optionInput, options.onOptionChange);
  this.quantityInputs = this._initInputs(selectors.quantityInput, options.onQuantityChange);
  this.propertyInputs = this._initInputs(selectors.propertyInput, options.onPropertyChange);
}
/**
 * Cleans up all event handlers that were assigned when the Product Form was constructed.
 * Useful for use when a section needs to be reloaded in the theme editor.
 */

ProductForm.prototype.destroy = function () {
  this._listeners.removeAll();
};
/**
 * Getter method which returns the array of currently selected option values
 *
 * @returns {Array} An array of option values
 */


ProductForm.prototype.options = function () {
  return _serializeOptionValues(this.optionInputs, function (item) {
    var regex = /(?:^(options\[))(.*?)(?:\])/;
    item.name = regex.exec(item.name)[2]; // Use just the value between 'options[' and ']'

    return item;
  });
};
/**
 * Getter method which returns the currently selected variant, or `null` if variant
 * doesn't exist.
 *
 * @returns {Object|null} Variant object
 */


ProductForm.prototype.variant = function () {
  return getVariantFromSerializedArray(this.product, this.options());
};
/**
 * Getter method which returns a collection of objects containing name and values
 * of property inputs
 *
 * @returns {Array} Collection of objects with name and value keys
 */


ProductForm.prototype.properties = function () {
  var properties = _serializePropertyValues(this.propertyInputs, function (propertyName) {
    var regex = /(?:^(properties\[))(.*?)(?:\])/;
    var name = regex.exec(propertyName)[2]; // Use just the value between 'properties[' and ']'

    return name;
  });

  return Object.entries(properties).length === 0 ? null : properties;
};
/**
 * Getter method which returns the current quantity or 1 if no quantity input is
 * included in the form
 *
 * @returns {Array} Collection of objects with name and value keys
 */


ProductForm.prototype.quantity = function () {
  return this.quantityInputs[0] ? Number.parseInt(this.quantityInputs[0].value, 10) : 1;
}; // Private Methods
// -----------------------------------------------------------------------------


ProductForm.prototype._setIdInputValue = function (value) {
  var idInputElement = this.element.querySelector(selectors.idInput);

  if (!idInputElement) {
    idInputElement = document.createElement('input');
    idInputElement.type = 'hidden';
    idInputElement.name = 'id';
    this.element.appendChild(idInputElement);
  }

  idInputElement.value = value.toString();
};

ProductForm.prototype._onSubmit = function (options, event) {
  event.dataset = this._getProductFormEventData();

  if (event.dataset.variant) {
    this._setIdInputValue(event.dataset.variant.id);
  }

  if (options.onFormSubmit) {
    options.onFormSubmit(event);
  }
};

ProductForm.prototype._onFormEvent = function (cb) {
  if (typeof cb === 'undefined') {
    return Function.prototype;
  }

  return function (event) {
    event.dataset = this._getProductFormEventData();
    cb(event);
  }.bind(this);
};

ProductForm.prototype._initInputs = function (selector, cb) {
  var elements = Array.prototype.slice.call(this.element.querySelectorAll(selector));
  return elements.map(function (element) {
    this._listeners.add(element, 'change', this._onFormEvent(cb));

    return element;
  }.bind(this));
};

ProductForm.prototype._getProductFormEventData = function () {
  return {
    options: this.options(),
    variant: this.variant(),
    properties: this.properties(),
    quantity: this.quantity()
  };
};

function _serializeOptionValues(inputs, transform) {
  return inputs.reduce(function (options, input) {
    if (input.checked || // If input is a checked (means type radio or checkbox)
    input.type !== 'radio' && input.type !== 'checkbox' // Or if its any other type of input
    ) {
      options.push(transform({
        name: input.name,
        value: input.value
      }));
    }

    return options;
  }, []);
}

function _serializePropertyValues(inputs, transform) {
  return inputs.reduce(function (properties, input) {
    if (input.checked || // If input is a checked (means type radio or checkbox)
    input.type !== 'radio' && input.type !== 'checkbox' // Or if its any other type of input
    ) {
      properties[transform(input.name)] = input.value;
    }

    return properties;
  }, {});
}

function _validateProductObject(product) {
  if (typeof product !== 'object') {
    throw new TypeError(product + ' is not an object.');
  }

  if (typeof product.variants[0].options === 'undefined') {
    throw new TypeError('Product object is invalid. Make sure you use the product object that is output from {{ product | json }} or from the http://[your-product-url].js route');
  }

  return product;
}
;// CONCATENATED MODULE: ./src/js/utilities/product-fns.js
/* provided dependency */ var product_fns_createElement = __webpack_require__(6295)["default"];
/* provided dependency */ var product_fns_MinimogTheme = __webpack_require__(4558)["MinimogTheme"];

const themeProducts = window._themeProducts || {};
const fetchProductByHandle = async handle => {
  const url = utilities_formatUrl('products', handle + '.js');
  const product = await fetchJsonCache(url).catch(console.error);

  if (product) {
    themeProducts[product.id] = product;
    return product;
  }

  return false;
};
const getProductData = async _ref => {
  let {
    productId,
    productHandle
  } = _ref;
  let productData = themeProducts[productId];

  if (!productData) {
    productData = await fetchProductByHandle(productHandle).catch(console.error);
  }

  if (productData) {
    productData.has_only_default_variant = productData?.has_only_default_variant || productHasOnlyDefaultVariant(productData?.options);
  }

  return Object.assign({}, productData);
};
const getProductJSON = async handle => {
  const url = formatUrl('products', handle, 'section_id=product-json');
  const html = await fetchCache(url);

  if (html && !/^<!doctype html>/.test(html)) {
    const node = product_fns_createElement("div", null);
    node.innerHTML = html;
    const productJSONNode = node.querySelector('script.product-json');

    if (productJSONNode) {
      const data = JSON.parse(productJSONNode.innerText);

      if (data) {
        const {
          dataset
        } = productJSONNode;
        Object.entries(dataset).forEach(_ref2 => {
          let [k, v] = _ref2;
          return data[camelCaseToSnakeCase(k)] = ['true', 'false'].indexOf(v) + 1 ? v === "true" : v;
        });
        const selectedVariantNode = node.querySelector('script.selected-variant-json');

        if (selectedVariantNode) {
          data.selected_variant = JSON.parse(selectedVariantNode.innerText);
        }

        const selectedOrFirstAvailableVariantNode = node.querySelector('script.selected-or-first-available-variant-json');

        if (selectedOrFirstAvailableVariantNode) {
          data.selected_or_first_available_variant = JSON.parse(selectedOrFirstAvailableVariantNode.innerText);
        }

        return data;
      }
    }
  }

  return null;
};
const getProductsJSON = async handles => {
  const productData = {};
  const promises = handles.map(async hdl => {
    productData[hdl] = await getProductJSON(hdl);
  });
  await Promise.all(promises);
  return handles.map(hdl => productData[hdl]);
};
const productHasOnlyDefaultVariant = prodOptions => {
  if (Array.isArray(prodOptions) && prodOptions.length === 1) {
    const firstOption = prodOptions[0];

    if (firstOption?.name === "Title" && firstOption?.values?.join() === "Default Title") {
      return true;
    }
  }

  return false;
};
const getProductInstances = query => {
  let fieldSearch = 'id';

  if (typeof query === "string") {
    fieldSearch = 'handle';
  }

  return product_fns_MinimogTheme.Products.productInstances.filter(pro => pro.productData?.[fieldSearch] === query);
};
window._getProductInstances = getProductInstances;
const isValidColor = color => {
  const otpNode = new Option();
  otpNode.style.color = color.replace(/\s/g, '').toLowerCase();
  return otpNode.style.color === color;
};
const getOptionValueFromOptionNode = optNode => {
  if (optNode.type === 'checkbox') {
    return optNode.value;
  }

  if (optNode.tagName === 'OPTION') {
    const select = optNode.closest('select');
    return select.value;
  }

  return optNode.innerText.trim();
};
;// CONCATENATED MODULE: ./src/js/data/product-slider.config.js
const commonConfigs = {
  loop: true
};
const configs = {
  'mobile': {
    autoHeight: true,
    loop: true
  },
  'quick-view': {
    autoHeight: true
  },
  'layout-4': {},
  'layout-5': {
    slidesPerView: 1,
    slidesPerGroup: 1,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 10
      }
    }
  },
  'layout-6': {},
  'layout-7': {
    slidesPerView: 3,
    speed: 500,
    centeredSlides: true
  }
};
function getProductSliderConfig(layout) {
  const conf = configs[layout] || configs['layout-4'];
  return Object.assign({}, commonConfigs, conf);
}
;// CONCATENATED MODULE: ./src/js/modules/product-helper.js
/* provided dependency */ var product_helper_MinimogLibs = __webpack_require__(4558)["MinimogLibs"];






class ProductHelper {
  // "galley" | "slider" | "featured-image"
  // 'sticky-atc' | 'card' | 'quick-view' | 'mobile' | 'product-template'
  constructor(_ref) {
    let {
      container,
      productData
    } = _ref;

    _defineProperty(this, "mediaMode", '');

    _defineProperty(this, "view", '');

    _defineProperty(this, "selectors", {
      form: 'form[data-product-id]',
      productSection: '[data-section-type="product-page"]',
      infoWrapper: '.sf-prod__info-wrapper',
      info: '.sf-prod__info',
      featuredImage: '.spc__main-img',
      mediaWrapper: '.sf-prod-media__wrapper',
      previewWrapper: '.sf-preview__wrapper',
      mediaDesktop: '.sf-product-media__desktop',
      mediaMobile: '.sf-product-media__mobile',
      slider: '.swiper-container',
      sliderPagination: '.swiper-pagination',
      sliderPrevEl: '.swiper-button-prev',
      sliderNextEl: '.swiper-button-next',
      navSlider: '.nav-swiper-container',
      navSliderMobile: '.nav-swiper-container-mobile',
      medias: ['.sf-prod-media-item'],
      mediaZoomIns: ['.sf-prod-media__zoom-in'],
      videos: ['.media-video']
    });

    _defineProperty(this, "currPlayer", void 0);

    _defineProperty(this, "mobileSlider", null);

    _defineProperty(this, "enableVideoAutoplay", false);

    _defineProperty(this, "enableImageZoom", true);

    _defineProperty(this, "init", async () => {
      switch (this.view) {
        case 'product-template':
          this.layout = this.container?.closest?.('div[data-section-type="product-page"]')?.dataset?.layout || 'layout-1';

          if (window.__sfWindowLoaded) {
            this.initLightbox();
            this.initPlyrs();
          } else {
            window.addEventListener("load", () => {
              this.initPlyrs();
              this.initLightbox();
            });
          }

          this.addEventToMainMedias();
          await this.initSlider();

          if (this.mediaMode !== 'slider') {
            this.mediaMode = 'gallery';
          }

          break;

        case 'featured-product':
          this.initSlider();
          break;

        case 'card':
          this.mediaMode = 'featured-image';
          break;

        case 'sticky-atc':
          this.mediaMode = 'featured-image';
          break;

        case 'quick-view':
          this.mediaMode = 'featured-image';
          this.initSlider();
          break;

        default:
          console.warn('Unknown product view: ', this, this.view);
          break;
      }
    });

    _defineProperty(this, "initPlyrs", () => {
      if (this.domNodes?.videos?.length) {
        loadAssets(['plyr.css', 'plyr.js']).then(() => {
          [...this.domNodes?.videos]?.forEach(vid => {
            const elm = vid?.classList?.contains('local-video') ? vid?.querySelector('video') : vid;
            const player = new product_helper_MinimogLibs.Plyr(elm);
            player.on('playing', () => {
              if (this?.currPlayer !== player) {
                this?.currPlayer?.pause?.();
                this.currPlayer = player;
              }
            });
            vid.plyr = player;

            if (this.enableVideoAutoplay) {
              const isOnDesktop = !!!elm.closest('.product-mb__media');

              if (isOnDesktop) {
                const nodeToObserve = elm.closest('.sf-prod-media-item');
                const observer = new IntersectionObserver(entries => {
                  entries.forEach(entry => {
                    if (entry.intersectionRatio === 1) {
                      this?.currPlayer?.pause?.();
                      player.play();
                      this.currPlayer = player;
                    } else {
                      player.pause();
                    }
                  });
                }, {
                  threshold: 1
                });
                observer.observe(nodeToObserve);
                player.on('pause', () => observer.unobserve(nodeToObserve));
              }
            }
          });
        }).catch(err => console.error("Failed to init Plyr", err));
      }
    });

    _defineProperty(this, "initLightbox", () => {
      if (!this.enableImageZoom) return;
      console.log('init lightbox');
      loadAssets(['glightbox.css', 'glightbox.js']).then(() => {
        const elements = this?.productData?.media?.map(media => {
          if (media.media_type === 'image') {
            return {
              href: media.src,
              type: 'image'
            };
          }

          if (media.media_type === 'external_video') {
            // TODO: fix Youtube video on lightbox
            const href = getVideoURL(media.external_id, media.host);
            return {
              href,
              type: 'video',
              source: media.host
            };
          }

          if (media.media_type === 'video') {
            const href = media?.sources?.[0]?.url;
            return {
              href,
              type: 'video'
            };
          }

          if (media.media_type === 'model') {
            const mediaElem = document.querySelector(`.media-model[data-media-id="${media.id}"]`)?.cloneNode(true);
            mediaElem.classList.remove('hidden');
            mediaElem.classList.add('model-in-lightbox');
            return {
              content: mediaElem,
              width: '80vw',
              height: '70vh'
            };
          }
        });
        this.lightbox = new product_helper_MinimogLibs.GLightbox({
          elements,
          openEffect: 'fade',
          closeEffect: 'fade',
          draggable: false,
          autofocusVideos: true
        }); // console.log('lightbox', this.lightbox)
        // TODO: fix video width https://github.com/biati-digital/glightbox/issues/203
      }).catch(err => console.error("Failed to init Glightbox", err));
    });

    _defineProperty(this, "initSlider", async () => {
      if (!this?.domNodes?.slider) return;
      this.mediaMode = 'slider';
      loadAssets(['swiper.css', 'swiper.js']).then(() => {
        const {
          view,
          domNodes: {
            slider,
            sliderPagination,
            navSlider,
            sliderNextEl: nextEl,
            sliderPrevEl: prevEl
          }
        } = this;
        const layout = view === 'product-template' ? this.layout : view;
        let initialSlide = 0;

        if (this.productData.initialVariant && this.productData.selected_variant) {
          initialSlide = this.productData.initialVariant.featured_media?.position - 1 || 0;
        }

        this.navSlider = navSlider ? new product_helper_MinimogLibs.Swiper(navSlider, {
          initialSlide,
          slidesPerView: 5,
          freeMode: true,
          spaceBetween: 10,
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
          direction: layout === 'layout-6' ? 'vertical' : 'horizontal',
          on: {
            init: () => navSlider.style.opacity = 1
          }
        }) : null;
        const thumbs = this.navSlider ? {
          thumbs: {
            swiper: this.navSlider
          }
        } : {};
        const config = Object.assign({}, getProductSliderConfig(layout), {
          initialSlide,
          autoHeight: true,
          navigation: {
            nextEl,
            prevEl
          },
          pagination: {
            el: sliderPagination,
            clickable: true,
            type: 'bullets'
          },
          ...thumbs,
          on: {
            init: () => {
              slider.style.opacity = 1;
              this.domNodes = utilities_queryDomNodes(this.selectors, this.container);
            }
          }
        });

        if (this.view === 'product-template') {
          src_default().register("screen and (max-width: 767px)", {
            match: this.initMobileSlider
          });
          src_default().register("screen and (min-width: 768px)", {
            match: () => this.slider = new product_helper_MinimogLibs.Swiper(slider, config)
          });
        } else {
          this.slider = new product_helper_MinimogLibs.Swiper(slider, config);
        }

        this.handleSlideChange();
      }).catch(err => console.error("Failed to init Slider", err));
    });

    _defineProperty(this, "initMobileSlider", () => {
      const {
        domNodes: {
          navSliderMobile
        }
      } = this;
      let initialSlide = 0;

      if (this.productData.initialVariant && this.productData.selected_variant) {
        initialSlide = this.productData.initialVariant.featured_media?.position - 1 || 0;
      }

      this.navSliderMobile = navSliderMobile ? new product_helper_MinimogLibs.Swiper(navSliderMobile, {
        initialSlide,
        slidesPerView: 3,
        spaceBetween: 10,
        // loop: true,
        // centeredSlides: true,
        // slideToClickedSlide: true,
        on: {
          init: () => navSliderMobile.style.opacity = 1
        }
      }) : null;
      const slider = this.domNodes.mediaMobile.querySelector(this.selectors.slider);
      this.mobileSlider = new product_helper_MinimogLibs.Swiper(slider, {
        initialSlide,
        autoHeight: true,
        // loop: true,
        pagination: {
          el: this.domNodes.mediaMobile.querySelector(this.selectors.sliderPagination),
          clickable: true,
          type: 'bullets'
        },
        thumbs: {
          swiper: this.navSliderMobile,
          autoScrollOffset: 1
        },
        on: {
          init: () => slider.style.opacity = 1
        }
      });
    });

    _defineProperty(this, "handleSlideChange", () => {
      console.log('old change slide');
      if (!this.slider) return;
      let draggable = true;
      let mediaType = '';
      let visibleSlides = [];
      const {
        previewWrapper
      } = this.domNodes;
      this.slider.on('slideChange', swiper => {
        try {
          // Change previewWrapper aspectRatio
          const {
            slides,
            activeIndex
          } = swiper;

          if (previewWrapper) {
            const aspectRatio = slides[activeIndex].dataset.aspectRatio || 1;
            const layout = this.view === 'product-template' ? this.layout : this.view;
            const scale = layout === 'layout-5' ? 2 : 1;
            previewWrapper.style.setProperty('--aspect-ratio', aspectRatio * scale);
          } // Play the video if existed, and pause the previous playing one


          this?.currPlayer?.pause?.();
          const currSlide = slides[activeIndex];

          if (currSlide && currSlide.dataset.mediaType === "video") {
            const player = currSlide.firstElementChild.plyr;

            if (player) {
              player.play();
              this.currPlayer = player;
            }
          } // Change touchMove state, for making the model inside slide draggable


          visibleSlides = [activeIndex];

          if (this.layout === 'layout-5' || this.layout === 'layout-7') {
            visibleSlides.push(activeIndex + 1);
          }

          for (let index of visibleSlides) {
            const currSlide = slides[index];
            mediaType = currSlide?.dataset?.mediaType;
            if (mediaType === 'model') break;
          }

          if (mediaType === 'model') {
            this.slider.allowTouchMove = false;
            draggable = false;
          } else {
            if (!draggable) this.slider.allowTouchMove = true;
            draggable = true;
          }
        } catch (error) {
          console.error("Failed to execute slideChange event.", error);
        }
      });
    });

    _defineProperty(this, "changeMediaByVariant", variant => {
      if (!variant) return;

      if (this.mediaMode === 'slider') {
        if (variant.featured_media) {
          const slideIndex = variant?.featured_media?.position || 0;

          if (this.slider && this.slider?.wrapperEl) {
            this?.slider?.slideToLoop?.(slideIndex - 1);
          }

          if (this.mobileSlider && this.mobileSlider?.wrapperEl) {
            this?.mobileSlider?.slideToLoop?.(slideIndex - 1);
          }
        }
      } else if (this.mediaMode === 'featured-image') {
        const src = variant?.featured_image?.src;
        const {
          featuredImage
        } = this.domNodes;
        const img = featuredImage?.querySelector('img');

        if (img && src) {
          img.src = src;
          img.removeAttribute('srcset');
          const method = this.productData?.initialVariant?.id === variant?.id ? 'add' : 'remove';
          featuredImage?.classList?.[method]?.('group-hover:opacity-0');
        }
      } else {// handle change image in gallery mode
      }
    });

    _defineProperty(this, "addEventToMainMedias", () => {
      (0,events/* addEventDelegate */.X)({
        selector: this.selectors.medias[0],
        context: this.container,
        handler: (e, media) => {
          const isImage = media.classList.contains('media-type-image');
          const isZoomButton = e?.target?.closest(this.selectors.mediaZoomIns[0]);

          if (isImage || isZoomButton) {
            const index = Number(media?.dataset?.index) || 0;
            this.currPlayer?.pause();
            this?.lightbox?.openAt(index);
          }
        }
      });
    });

    this.productData = productData;
    this.container = container;
    this.view = container?.dataset?.view || 'product-template';
    this.domNodes = utilities_queryDomNodes(this.selectors, this.container);
    this.enableVideoAutoplay = this.domNodes.form.dataset.enableVideoAutoplay === 'true';
    this.enableImageZoom = this.domNodes.form.dataset.enableImageZoom === 'true';
    this.init().catch(console.error);
  }

}
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-images/images.js
/**
 * Image Helper Functions
 * -----------------------------------------------------------------------------
 * https://github.com/Shopify/slate.git.
 *
 */

/**
 * Preloads an image in memory and uses the browsers cache to store it until needed.
 *
 * @param {Array} images - A list of image urls
 * @param {String} size - A shopify image size attribute
 */
function preload(images, size) {
  if (typeof images === 'string') {
    images = [images];
  }

  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    loadImage(getSizedImageUrl(image, size));
  }
}
/**
 * Loads and caches an image in the browsers cache.
 * @param {string} path - An image url
 */

function loadImage(path) {
  new Image().src = path;
}
/**
 * Find the Shopify image attribute size
 *
 * @param {string} src
 * @returns {null}
 */

function imageSize(src) {
  const match = src.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/);

  if (match) {
    return match[1];
  } else {
    return null;
  }
}
/**
 * Adds a Shopify size attribute to a URL
 *
 * @param src
 * @param size
 * @returns {*}
 */

function getSizedImageUrl(src, size) {
  if (size === null) {
    return src;
  }

  if (size === 'master') {
    return removeProtocol(src);
  }

  const match = src.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);

  if (match) {
    const prefix = src.split(match[0]);
    const suffix = match[0];
    return removeProtocol(`${prefix[0]}_${size}${suffix}`);
  } else {
    return null;
  }
}
function removeProtocol(path) {
  return path.replace(/http(s)?:/, '');
}
;// CONCATENATED MODULE: ./src/js/modules/product.js
/* provided dependency */ var product_MinimogSettings = __webpack_require__(4558)["MinimogSettings"];
/* provided dependency */ var modules_product_MinimogTheme = __webpack_require__(4558)["MinimogTheme"];
/* provided dependency */ var product_MinimogStrings = __webpack_require__(4558)["MinimogStrings"];
/* provided dependency */ var product_MinimogEvents = __webpack_require__(4558)["MinimogEvents"];








class Product {
  constructor(productForm) {
    let _options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _defineProperty(this, "selectors", {
      price: '.prod__price',
      comparePrice: '.prod__compare_price',
      error: '.prod__form-error',
      addToCart: '.add-to-cart',
      variantIdNode: '[name="id"]',
      optionNodes: ['.product-option-item'],
      optionLabels: ['[data-option-label]'],
      quantityInput: '.quantity-input__element[name="quantity"]',
      quantityBtns: ['.quantity-input__button'],
      variantDropdown: '.sf-product-variant-option-dropdown',
      dynamicCheckout: '.prod__dynamic_checkout',
      productSKU: '[data-variant-sku]',
      productAvailability: '[data-availability]',
      savingLabel: '.prod__tag-saving',
      savingAmount: '[data-saved-price]',
      unitPrice: '.price-unit-price',
      stockCountdown: '.prod__stock-countdown',
      soldOutBadge: '.prod__tag--soldout'
    });

    _defineProperty(this, "setData", () => {
      this.view = this.productBlock.dataset.view || 'product-template'; // 'sticky-atc' | 'card' | 'quick-view' | 'mobile' | 'product-template'

      this.hasCustomRequiredFields = !!this.productForm.querySelector('.product__custom-field [name][required]');
      this.hide_unavailable_product_options = product_MinimogSettings.hide_unavailable_product_options;
      this.activeOptionNodeByPosition = {};
      this.listeners = [];
    });

    _defineProperty(this, "init", async () => {
      this.productData = await getProductData(this.productForm.dataset);
      if (!this.productData?.variants) return;
      if (this.domNodes.dynamicCheckout) this.productData.enable_dynamic_checkout = true;
      this.initProductEvents();
      this.productHelper = new ProductHelper({
        container: this.productBlock,
        productData: this.productData
      });
      this.initProductVariant();
    });

    _defineProperty(this, "initProductVariant", () => {
      const {
        domNodes: {
          variantIdNode
        },
        productData,
        productData: {
          variants
        } = {}
      } = this;

      if (productData && variantIdNode) {
        let currentVariantId = Number(variantIdNode.value);

        if (!currentVariantId) {
          currentVariantId = productData.selected_or_first_available_variant?.id;
        }

        const currentVariant = variants.find(v => v.id === currentVariantId) || variants[0];
        this.productData.initialVariant = currentVariant;

        if (!this.productData.selected_variant && variantIdNode.dataset.selectedVariant) {
          this.productData.selected_variant = variants.find(v => v.id === Number(variantIdNode.dataset.selectedVariant));
        }

        if (currentVariant?.options) {
          if (this.view === "card") {
            this.updateOptionByVariant(currentVariant);
            this.updateProductCardSoldOutBadge(currentVariant);
          } else {
            this.updateBySelectedVariant(currentVariant);
          }
        }

        this.initOptions();
      }
    });

    _defineProperty(this, "initOptions", () => {
      const {
        _colorSwatches = [],
        _imageSwatches = []
      } = product_MinimogSettings;
      this.domNodes.optionNodes.forEach(optNode => {
        const {
          optionType,
          optionPosition,
          value: optionValue
        } = optNode?.dataset;
        const optionValueLowerCase = optionValue?.toLowerCase();
        const variantToShowSwatchImage = this.productData.variants.find(v => v[`option${optionPosition}`] === optionValue);
        const variantImage = variantToShowSwatchImage?.featured_image?.src ? getSizedImageUrl(variantToShowSwatchImage?.featured_image?.src, '150x') : '';
        const customImage = _imageSwatches.find(i => i.key === optionValueLowerCase)?.value;
        const customColor = _colorSwatches.find(c => c.key === optionValueLowerCase)?.value; // if (variantImage || customImage) optNode.classList.add('has-bg-img')

        switch (optionType) {
          case 'default':
            optNode.style.backgroundImage = `url(${customImage || variantImage || ''})`;
            break;

          case 'image':
            optNode.style.backgroundImage = `url(${variantImage || customImage || ''})`;
            break;

          case 'color':
            optNode.textContent = optionValueLowerCase;
            optNode.style.backgroundColor = customColor ? customColor : optionValueLowerCase;
            customImage && (optNode.style.backgroundImage = `url(${customImage})`);
            break;

          default:
            break;
        }
      });
    });

    _defineProperty(this, "initProductEvents", async () => {
      // this.domNodes.variantDropdown?.addEventListener('change', this.handleSelectVariant)
      this.listeners = [(0,events/* addEventDelegate */.X)({
        event: 'change',
        context: this.productForm,
        selector: this.selectors.variantDropdown,
        handler: this.handleSelectVariant
      }), (0,events/* addEventDelegate */.X)({
        context: this.productForm,
        selector: this.selectors.optionNodes[0],
        handler: this.handleSelectVariant
      }), (0,events/* addEventDelegate */.X)({
        context: this.productForm,
        selector: this.selectors.addToCart,
        handler: this.handleAddToCart
      }), (0,events/* addEventDelegate */.X)({
        context: this.productForm,
        selector: this.selectors.quantityBtns[0],
        handler: this.handleQtyBtnClick
      }), (0,events/* addEventDelegate */.X)({
        event: 'change',
        context: this.productForm,
        selector: this.selectors.quantityInput,
        handler: this.handleQtyInputChange
      })];
      const {
        dynamicCheckout
      } = this.domNodes;

      if (dynamicCheckout && this.hasCustomRequiredFields) {
        dynamicCheckout.addEventListener('click', e => {
          const missing = productFormCheck(this.productForm);

          if (missing.length > 0) {
            e.stopPropagation();
            modules_product_MinimogTheme.Notification.show({
              target: this.domNodes.error,
              method: 'appendChild',
              type: 'warning',
              message: product_MinimogStrings.requiredField,
              delay: 100
            });
            console.warn('Missing field(s): ', missing);
          }
        }, true);
      }
    });

    _defineProperty(this, "unsubscribeEvents", () => {
      this.listeners.forEach(unsubscribeFunc => unsubscribeFunc());
    });

    _defineProperty(this, "handleQtyInputChange", e => {
      product_MinimogEvents.emit(`${this.productData.id}__QUANTITY_CHANGE`, Number(e.target.value), this);
    });

    _defineProperty(this, "handleQtyBtnClick", (e, btn) => {
      const {
        quantitySelector
      } = btn.dataset;
      const {
        quantityInput
      } = this.domNodes;
      const currentQty = Number(quantityInput.value);
      let newQty = currentQty;

      if (quantitySelector === 'decrease') {
        newQty = currentQty > 1 ? currentQty - 1 : 1;
      } else {
        newQty = currentQty + 1;
      }

      quantityInput.value = newQty;
      product_MinimogEvents.emit(`${this.productData.id}__QUANTITY_CHANGE`, newQty, this);
    });

    _defineProperty(this, "getVariantFromActiveOptions", () => {
      const {
        productData,
        productData: {
          initialVariant
        },
        activeOptionNodeByPosition,
        productBlock
      } = this;
      let options;

      if (productBlock.dataset.view === 'card') {
        const initialVariantOptions = {
          1: initialVariant.option1,
          2: initialVariant.option2,
          3: initialVariant.option3
        };
        Object.values(activeOptionNodeByPosition).forEach(optNode => {
          const {
            optionPosition,
            value
          } = optNode.dataset;
          initialVariantOptions[optionPosition] = value;
        });
        options = Object.values(initialVariantOptions);
      } else {
        options = Object.values(activeOptionNodeByPosition).map(optNode => optNode.dataset.value);
      }

      options = options.filter(Boolean);
      let variant = getVariantFromOptionArray(productData, options);

      if (!variant && this.hide_unavailable_product_options) {
        options.pop();
        variant = getVariantFromOptionArray(productData, options);

        if (!variant) {
          options.pop();
          variant = getVariantFromOptionArray(productData, options);
        }
      }

      return variant;
    });

    _defineProperty(this, "handleSelectVariant", e => {
      let {
        target
      } = e;
      let newVariant;

      if (target.classList.contains('combined-variant')) {
        const variantId = Number(e?.target?.value);
        newVariant = this.productData?.variants?.find?.(v => v.id === variantId);
      } else {
        if (target.tagName === 'SELECT') {
          target = target.querySelectorAll('option')[target.selectedIndex];
        }

        if (!target.classList.contains('product-option-item')) {
          target = target.closest('.product-option-item');
          if (target) console.error("Unable to find option node!");
        }

        const {
          optionPosition
        } = target.dataset;
        const currActiveOptNode = this.activeOptionNodeByPosition[optionPosition];
        this.toggleOptionNodeActive(currActiveOptNode, false);
        this.toggleOptionNodeActive(target, true);
        newVariant = this.getVariantFromActiveOptions();
      }

      const {
        variantIdNode
      } = this.domNodes;

      if (variantIdNode) {
        variantIdNode.setAttribute('value', String(newVariant?.id));
        variantIdNode.value = String(newVariant?.id);
      }

      this.updateBySelectedVariant(newVariant);
    });

    _defineProperty(this, "hideSoldoutAndUnavailableOptions", variant => {
      if (this.view === "card") return;
      const {
        productData,
        productData: {
          variants,
          options: {
            length: maxOptions
          }
        },
        domNodes: {
          optionNodes
        }
      } = this;
      optionNodes.forEach(optNode => {
        const {
          optionPosition,
          value
        } = optNode.dataset;
        const optPos = Number(optionPosition);
        let matchVariants = [];

        if (optPos === maxOptions) {
          const optionsArray = Array.from(variant.options);
          optionsArray[maxOptions - 1] = value;
          matchVariants.push(getVariantFromOptionArray(productData, optionsArray));
        } else {
          matchVariants = variants.filter(v => v.options[optPos - 1] === value && v.options[optPos - 2] === variant[`option${optPos - 1}`]);
        }

        matchVariants = matchVariants.filter(Boolean);
        const isSelectOption = optNode.tagName === 'OPTION';
        console.log(isSelectOption, 'isSelectOption');
        const unavailableOptClass = this.hide_unavailable_product_options ? 'unavailable-opt' : '_';

        if (matchVariants.length) {
          optNode.classList.remove(unavailableOptClass);
          if (isSelectOption) optNode.removeAttribute('disabled');
          const isSoldout = matchVariants.every(v => v.available === false);
          const method = isSoldout ? 'add' : 'remove';
          optNode.classList[method]('soldout-opt');
        } else {
          optNode.classList.add(unavailableOptClass);
          if (isSelectOption) optNode.disabled = true;
        }
      });
    });

    _defineProperty(this, "updatePriceByVariant", variant => {
      console.log(variant, 'updatePriceByVariant');
      if (this.view === "card" && product_MinimogSettings.pcard_show_lowest_prices) return;
      const {
        comparePrice,
        price,
        savingAmount,
        savingLabel
      } = this.domNodes;

      if (variant) {
        const money_format = product_MinimogSettings.money_format;
        const priceText = formatMoney(variant.price, money_format);
        if (price) price.innerHTML = priceText;

        if (comparePrice) {
          if (variant.compare_at_price > variant.price) {
            const comparePriceText = formatMoney(variant.compare_at_price, money_format);
            comparePrice.innerHTML = comparePriceText;
            comparePrice.classList.remove('hidden');
          } else {
            comparePrice.classList.add('hidden');
          }
        }

        if (savingLabel && savingAmount) {
          if (variant.compare_at_price > variant.price) {
            savingLabel.classList.remove('hidden');
          } else {
            savingLabel.classList.add('hidden');
          }

          const saving = (variant.compare_at_price - variant.price) * 100 / variant.compare_at_price;
          console.log(saving, 'saving');
          savingAmount.textContent = Math.round(saving) + '%';
        }

        if (variant.unit_price_measurement) {
          this.domNodes.unitPrice?.classList.remove('hidden');
          const unitPrice = `<span data-unit-price>${formatMoney(variant.unit_price, product_MinimogSettings.money_format)}</span>/<span data-unit-price-base-unit>${this._getBaseUnit(variant)}</span>`;
          this.domNodes.unitPrice.innerHTML = unitPrice;
        } else {
          this.domNodes.unitPrice?.classList.add('hidden');
        }
      } else {
        if (savingLabel) savingLabel.classList.add('hidden');
      }
    });

    _defineProperty(this, "_getBaseUnit", variant => {
      return variant.unit_price_measurement.reference_value === 1 ? variant.unit_price_measurement.reference_unit : variant.unit_price_measurement.reference_value + variant.unit_price_measurement.reference_unit;
    });

    _defineProperty(this, "updateStockCountdownByVariant", variant => {
      const {
        stockCountdown
      } = this.domNodes;

      if (stockCountdown) {
        const method = !variant.available ? 'add' : 'remove';
        stockCountdown?.classList?.[method]?.('hidden');

        if (stockCountdown.dataset.countdownType === 'use_quantity') {
          const countdownNumber = stockCountdown.querySelector('[data-countdown-number]');

          if (countdownNumber) {
            countdownNumber.textContent = variant.inventory_quantity > 0 ? variant.inventory_quantity : variant.id.toString().split('')[13] - -1;
          }
        }
      }
    });

    _defineProperty(this, "updateSkuByVariant", variant => {
      if (variant.sku && this.domNodes?.productSKU) {
        this.domNodes.productSKU.innerText = variant.sku;
      }
    });

    _defineProperty(this, "updateAvailabilityByVariant", variant => {
      const {
        productAvailability
      } = this.domNodes;

      if (productAvailability) {
        const {
          inStock,
          outOfStock
        } = product_MinimogStrings;
        const method = !variant.available ? 'add' : 'remove';
        productAvailability.innerText = variant.available ? inStock : outOfStock;
        productAvailability.classList[method]('prod__availability--outofstock');
      }
    });

    _defineProperty(this, "updateOptionLabel", (position, value) => {
      const label = this.domNodes.optionLabels?.find?.(label => Number(label.dataset.labelPosition) === Number(position));
      if (label) label.textContent = value;
    });

    _defineProperty(this, "toggleOptionNodeActive", (optNode, active) => {
      if (!optNode) return;

      if (active) {
        const {
          optionPosition,
          value: optionValue
        } = optNode.dataset;
        this.activeOptionNodeByPosition[optionPosition] = optNode;
        this.updateOptionLabel(optionPosition, optionValue);

        switch (optNode.tagName) {
          case 'INPUT':
            optNode.checked = 'checked';
            optNode.dataset.selected = 'true';
            break;

          case 'OPTION':
            optNode.dataset.selected = 'true';
            const select = optNode.closest('select');
            if (select) select.value = optNode.value;
            break;

          case 'DIV':
            optNode.dataset.selected = 'true';

            if (['default', 'image', 'color'].includes(optNode.dataset.optionType)) {
              optNode.parentElement.classList.add('sf_variant-selected');
            }

            break;

          default:
            console.warn('Unable to activate option node', optNode);
            break;
        }
      } else {
        if (['default', 'image', 'color'].includes(optNode.dataset.optionType)) {
          optNode.parentElement.classList.remove('sf_variant-selected');
        } else {
          optNode.style.border = '';
        }

        optNode.checked = false;
        delete optNode.dataset.selected;
        const select = optNode.closest('select');
        if (select) select.value = '';
      }
    });

    _defineProperty(this, "updateBySelectedVariant", variant => {
      this.updateATCButtonByVariant(variant);

      if (variant) {
        if (variant.id !== this.productData.current_variant_id) {
          this.updateOptionByVariant(variant);
          this.updatePriceByVariant(variant);
          this.updateStockCountdownByVariant(variant);
          this.updateSkuByVariant(variant);
          this.updateAvailabilityByVariant(variant);
          this.updateBrowserHistory(variant);
          this.hideSoldoutAndUnavailableOptions(variant);
          this.updateProductCardSoldOutBadge(variant);
          this.productData.current_variant_id = variant.id;
          this.changeProductImage(variant);
        }
      }

      product_MinimogEvents.emit(`${this.productData.id}__VARIANT_CHANGE`, variant, this); // window?.DoublyGlobalCurrency?.convertAll?.($?.('[name=doubly-currencies]')?.val?.());
    });

    _defineProperty(this, "updateProductCardSoldOutBadge", variant => {
      if (this.view === "card" && this.domNodes.soldOutBadge) {
        this.domNodes.soldOutBadge.style.display = variant.available ? 'none' : 'flex';
      }
    });

    _defineProperty(this, "updateOptionByVariant", variant => {
      Object.values(this.activeOptionNodeByPosition).forEach(optNode => this.toggleOptionNodeActive(optNode, false));
      const {
        optionNodes
      } = this.domNodes;
      const {
        options = []
      } = variant || {};
      options.forEach((option, index) => {
        const optPosition = index + 1;
        optionNodes.forEach(optNode => {
          const _optPosition = Number(optNode.dataset.optionPosition);

          const _optValue = optNode.dataset.value;

          if (_optPosition === optPosition && option === _optValue) {
            this.toggleOptionNodeActive(optNode, true);
          }
        });
      });
    });

    _defineProperty(this, "updateATCButtonByVariant", variant => {
      const {
        soldOut,
        unavailable,
        addToCart: atcText
      } = product_MinimogStrings;
      const {
        addToCart,
        dynamicCheckout
      } = this.domNodes;
      const atcTextNode = addToCart?.querySelector?.('.atc-text');

      if (variant?.available) {
        addToCart?.classList?.remove?.('disabled');

        if (atcTextNode) {
          atcTextNode.innerText = addToCart.dataset.atcText || atcText;
        }

        dynamicCheckout?.classList?.remove?.('disabled');
      } else {
        addToCart?.classList?.add?.('disabled');

        if (atcTextNode) {
          if (typeof variant?.available === 'boolean') {
            atcTextNode.innerText = soldOut;
          } else {
            atcTextNode.innerText = unavailable;
          }
        }

        dynamicCheckout?.classList?.add?.('disabled');
      }
    });

    _defineProperty(this, "updateBrowserHistory", variant => {
      const enableHistoryState = this.productForm?.dataset?.enableHistoryState === 'true';
      const {
        has_only_default_variant,
        current_variant_id
      } = this.productData;

      if (variant && enableHistoryState && !has_only_default_variant && current_variant_id) {
        const url = getUrlWithVariant(window.location.href, variant.id);
        window.history.replaceState({
          path: url
        }, '', url);
      }
    });

    _defineProperty(this, "changeProductImage", variant => {
      this.productHelper?.changeMediaByVariant(variant);
    });

    _defineProperty(this, "handleAddToCart", async e => {
      const missing = productFormCheck(this.productForm);

      if (missing.length > 0) {
        console.warn('Missing field(s): ', missing);
        e?.preventDefault?.();
        return modules_product_MinimogTheme.Notification.show({
          target: this?.domNodes?.error,
          method: 'appendChild',
          type: 'warning',
          message: product_MinimogStrings.requiredField
        });
      }

      if (product_MinimogSettings.use_ajax_atc) {
        e?.preventDefault?.();
        this.toggleSpinner(true); // Some 3rd apps might override the default FormData, use this code to prevent it.

        let formData = new FormData(this.productForm);

        if (typeof formData._asNative === 'function') {
          formData = formData._asNative().fd;
        }

        const sourceEvent = formData.get('source_event') || 'product-form';
        this.cartAddFromForm(formData).then(r => r.json()).then(res => {
          if (res?.status === 422) {
            modules_product_MinimogTheme.Notification.show({
              target: this?.domNodes?.error,
              method: 'appendChild',
              type: 'warning',
              message: res?.description || "Unable to add item to cart!"
            });
          } else {
            res.source = sourceEvent;
            window.Shopify.onItemAdded(res);
          }

          setTimeout(() => this.toggleSpinner(false), 500);
        });
      }
    });

    _defineProperty(this, "cartAddFromForm", formData => {
      const config = getRequestDefaultConfigs();
      delete config.headers['Content-Type'];
      config.method = 'POST';
      config.body = formData;
      return fetch('/cart/add.js', config);
    });

    _defineProperty(this, "toggleSpinner", show => {
      const method = show ? 'add' : 'remove';
      this.productForm.classList[method]('adding');
    });

    _defineProperty(this, "serializeForm", formData => {
      let obj = {};

      for (var key of formData.keys()) {
        obj[key] = formData.get(key);
      }

      return obj;
    });

    if (productForm?.classList?.contains('initialized')) return;
    const {
      autoInit = true,
      saveInstanceToDOM = false
    } = _options;
    this.productForm = productForm;
    this.productBlock = productForm?.closest('.sf-prod__block');
    this.domNodes = utilities_queryDomNodes(this.selectors, this.productBlock);
    this.setData();
    if (saveInstanceToDOM) this.productForm._productInstane = this;
    if (autoInit) this.init().catch(console.error);
    this.productForm.classList.add('initialized');
    modules_product_MinimogTheme.Products?.productInstances?.push(this);
  }

}

class Products {
  constructor() {
    var _this = this;

    _defineProperty(this, "productInstances", []);

    _defineProperty(this, "initProductForms", async function () {
      let {
        context = document.documentElement,
        forceReInit = false
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (forceReInit) {
        _this.productInstances.forEach(prodInstance => prodInstance?.unsubscribeEvents());

        _this.productInstances = [];
      }

      ;
      [...context.querySelectorAll('form[data-product-id]')].forEach(form => {
        if (!form.classList.contains('initialized') || forceReInit) {
          new Product(form);
        }
      });
    });
  }

}

modules_product_MinimogTheme.Product = Product;
modules_product_MinimogTheme.Products = new Products();
;// CONCATENATED MODULE: ./src/js/components/SearchProductItem.jsx
/* provided dependency */ var SearchProductItem_MinimogSettings = __webpack_require__(4558)["MinimogSettings"];
/* provided dependency */ var SearchProductItem_createElement = __webpack_require__(6295)["default"];
/* provided dependency */ var SearchProductItem_MinimogStrings = __webpack_require__(4558)["MinimogStrings"];
// eslint-disable-next-line no-unused-vars

/* harmony default export */ function SearchProductItem(_ref) {
  let {
    product
  } = _ref;
  let aspectRatio = product.featured_image.aspect_ratio;

  if (SearchProductItem_MinimogSettings.pcard_image_ratio !== 'original') {
    aspectRatio = SearchProductItem_MinimogSettings.pcard_image_ratio;
  }

  const style = {
    '--aspect-ratio': aspectRatio
  };
  let comparePrice = null;

  if (Number(product.compare_at_price_min) > Number(product.price_min)) {
    comparePrice = SearchProductItem_createElement("span", {
      className: "sf-currency text-color-secondary text-sm line-through mr-2"
    });
    comparePrice.innerHTML = formatMoney(product.compare_at_price_min, SearchProductItem_MinimogSettings.money_format);
  }

  const price = SearchProductItem_createElement("span", {
    className: "sf-currency"
  });
  price.innerHTML = formatMoney(product.price_min, SearchProductItem_MinimogSettings.money_format);
  return SearchProductItem_createElement("a", {
    href: product.url,
    className: "mb-3 flex flex-col group",
    dataSet: {
      productId: product?.id
    }
  }, SearchProductItem_createElement("div", {
    className: "mb-3 w-full",
    style: style
  }, SearchProductItem_createElement(LazyImage, {
    src: product?.featured_image?.url,
    alt: product?.featured_image?.alt
  }), product.available ? null : SearchProductItem_createElement("span", {
    class: "flex prod__tag prod__tag--soldout"
  }, SearchProductItem_MinimogStrings.soldOut || 'Sold Out')), SearchProductItem_createElement("div", {
    className: "md:ml-0 w-full"
  }, SearchProductItem_createElement("p", {
    className: "font-medium group-hover:text-color-primary-darker"
  }, product.title), SearchProductItem_createElement("div", {
    className: "mt-1"
  }, SearchProductItem_createElement("span", {
    className: 'text-color-sale-price'
  }, comparePrice), SearchProductItem_createElement("span", {
    className: 'text-color-regular-price'
  }, price))));
}
;// CONCATENATED MODULE: ./src/js/modules/search.js
/* provided dependency */ var search_MinimogSettings = __webpack_require__(4558)["MinimogSettings"];
/* provided dependency */ var search_createElement = __webpack_require__(6295)["default"];
/* provided dependency */ var search_MinimogTheme = __webpack_require__(4558)["MinimogTheme"];

// eslint-disable-next-line no-unused-vars




class Search {
  constructor() {
    _defineProperty(this, "selectors", {
      container: '[data-search-container]',
      form: 'form',
      input: '[data-search-input]',
      submit: 'button[type="submit"]',
      loading: '[data-spinner]',
      clear: '[data-clear-search]',
      close: '[data-close-search]',
      moreResult: '[data-more-result]',
      resultContent: '[data-result]',
      popularSearches: '[data-popular-searches]',
      popularSearchItems: ['[data-ps-item]'],
      searchItemsWrapper: '[data-search-items-wrapper]',
      searchItems: ['[data-search-item]'],
      searchQuery: '[data-query]',
      searchMessage: '[data-message]'
    });

    _defineProperty(this, "searchInputs", []);

    _defineProperty(this, "transitionDuration", 300);

    _defineProperty(this, "currScreen", '');

    _defineProperty(this, "predictiveSearch", void 0);

    _defineProperty(this, "enablePredictiveSearch", true);

    _defineProperty(this, "init", () => {
      const searchPopup = document.querySelector('[data-search-popup]');
      if (!searchPopup) return;
      this.enablePredictiveSearch = searchPopup.dataset.enablePredictiveSearch === "true";
      this.domNodes = utilities_queryDomNodes(this.selectors, searchPopup);
      this.domNodes.searchPopup = searchPopup;
      document.body.appendChild(searchPopup);
      (0,events/* addEventDelegate */.X)({
        selector: '[data-open-search-popup]',
        handler: () => this.toggleSearchPopup(true)
      });
      const {
        input,
        submit,
        clear,
        close,
        form
      } = this.domNodes;

      if (this.enablePredictiveSearch) {
        this.initPredictiveSearch();
        input.addEventListener('input', () => {
          const query = input.value;

          if (query) {
            this.toggleSpinnerLoading(true);
            this.toggleClearSearch(true);
            this.predictiveSearch.query(query);
          } else {
            this.toggleSpinnerLoading(false);
            this.toggleClearSearch(false);
            this.toggleSearchContent(false);
            this.togglePopularSearches(true);
          }
        });
      }

      input?.addEventListener('keydown', e => {
        // ESC
        if (e.keyCode === 27) {
          this.toggleSearchPopup(false);
        }
      });
      submit.addEventListener('click', e => {
        e.preventDefault();

        if (input.value) {
          form.submit();
        }
      });
      clear.addEventListener('click', () => {
        clear.style.visibility = "hidden";
        input.value = "";
        input.focus();
        this.toggleSpinnerLoading(false);
        this.toggleSearchContent(false);
        this.togglePopularSearches(true);
      });
      close.addEventListener('click', e => {
        this.toggleSearchPopup(false);
      });
      searchPopup.addEventListener('click', e => {
        if (e.target === searchPopup) {
          this.toggleSearchPopup(false);
        }
      });
      this.setPopularSearchesLink();
    });

    _defineProperty(this, "setPopularSearchesLink", () => {
      const {
        popularSearchItems
      } = this.domNodes;
      popularSearchItems.forEach(itm => itm.href = createSearchLink(itm.dataset.psQuery));
    });

    _defineProperty(this, "toggleSpinnerLoading", show => {
      const {
        loading,
        submit
      } = this.domNodes;
      submit.style.visibility = show ? 'hidden' : 'visible';
      loading.style.visibility = show ? 'visible' : 'hidden';
    });

    _defineProperty(this, "togglePopularSearches", show => {
      const {
        popularSearches
      } = this.domNodes;
      popularSearches.style.display = show ? "" : "none";
    });

    _defineProperty(this, "toggleClearSearch", show => {
      const {
        clear
      } = this.domNodes;
      clear.style.visibility = show ? "visible" : "hidden";
    });

    _defineProperty(this, "toggleSearchContent", show => {
      const {
        resultContent
      } = this.domNodes;
      const method = show ? 'remove' : 'add';
      resultContent?.classList?.[method]('hidden');
    });

    _defineProperty(this, "initPredictiveSearch", () => {
      this.createPredictiveSearchInstance();
      this.predictiveSearch.on("success", suggestions => {
        try {
          const productSuggestions = suggestions?.resources?.results?.products ?? [];
          this.toggleSpinnerLoading(false);
          this.renderSearchQueryAndMessage(productSuggestions.length);
          this.togglePopularSearches(!productSuggestions.length);
          this.renderSearchResult(productSuggestions);
          this.toggleSearchContent(true);
        } catch (err) {
          console.error(err);
          throw err;
        }
      });
      this.predictiveSearch.on("error", console.error);
    });

    _defineProperty(this, "createPredictiveSearchInstance", () => {
      if (this.predictiveSearch) return;
      const {
        searchByTag,
        searchByBody,
        unavailableProductsOption
      } = this.domNodes.searchPopup.dataset || {};
      const fields = [PredictiveSearch.FIELDS.TITLE, PredictiveSearch.FIELDS.VENDOR, PredictiveSearch.FIELDS.PRODUCT_TYPE, PredictiveSearch.FIELDS.VARIANTS_TITLE, PredictiveSearch.FIELDS.VARIANTS_SKU];

      if (searchByTag === "true") {
        fields.push(PredictiveSearch.FIELDS.TAG);
      }

      if (searchByBody === "true") {
        fields.push(PredictiveSearch.FIELDS.BODY);
      }

      const {
        root
      } = search_MinimogSettings.routes;
      const search_path = root === '/' ? '/search' : root + '/search';
      this.predictiveSearch = new PredictiveSearch({
        search_path: search_path,
        resources: {
          type: [PredictiveSearch.TYPES.PRODUCT],
          limit: 10,
          options: {
            unavailable_products: PredictiveSearch.UNAVAILABLE_PRODUCTS[unavailableProductsOption],
            fields
          }
        }
      });
    });

    _defineProperty(this, "renderSearchQueryAndMessage", results => {
      const {
        input,
        searchQuery,
        moreResult,
        searchMessage
      } = this.domNodes;
      const query = input.value;
      const {
        resultsTitle
      } = searchMessage.dataset; // const _resultsOne = resultsOne.replace(/\"{{ terms }}\"/, "").trim()
      // const _resultsOther = resultsOther.replace(/\"{{ terms }}\"/, "").trim()
      // const msg = results === 1 ? _resultsOne : _resultsOther

      searchMessage.textContent = resultsTitle;
      searchQuery.textContent = query;

      if (results) {
        moreResult.parentElement.style.display = "";
        moreResult.href = createSearchLink(query);
      } else {
        searchMessage.textContent = searchMessage.dataset.noResults;
        moreResult.parentElement.style.display = "none";
      }
    });

    _defineProperty(this, "renderSearchResult", productSuggestions => {
      const {
        searchItems,
        searchItemsWrapper
      } = this.domNodes;
      searchItemsWrapper.style.display = productSuggestions.length ? '' : 'none';
      searchItems.forEach((item, ind) => {
        if (ind >= productSuggestions.length) {
          item.classList.add('hidden');
        } else {
          const newItem = search_createElement(SearchProductItem, {
            product: productSuggestions[ind]
          });
          const currItem = item.firstChild;

          if (!currItem) {
            item.appendChild(newItem);
          } else {
            if (Number(currItem?.dataset?.productId) !== productSuggestions[ind].id) {
              animateReplace(currItem, newItem);
            }
          }

          item.classList.remove('hidden');
        }
      });
    });

    _defineProperty(this, "toggleSearchPopup", show => {
      const {
        searchPopup,
        input,
        container
      } = this.domNodes;

      if (show) {
        searchPopup.classList.remove('invisible');
        searchPopup.classList.add('opacity-100');
        container.classList.add('md:translate-y-0');
        setTimeout(() => {
          container.classList.remove('duration-300');
        }, this.transitionDuration);
        input.focus(); // document.documentElement.classList.add('prevent-scroll')
      } else {
        container.classList.remove('md:translate-y-0');
        searchPopup.classList.remove('opacity-100');
        setTimeout(() => {
          searchPopup.classList.add('invisible');
          container.classList.add('duration-300');
        }, this.transitionDuration); // document.documentElement.classList.remove('prevent-scroll')
      }
    });

    this.init();
  }

}
search_MinimogTheme.Search = new Search();
;// CONCATENATED MODULE: ./src/js/pages/compare-product.js
/* provided dependency */ var compare_product_MinimogSettings = __webpack_require__(4558)["MinimogSettings"];
/* provided dependency */ var compare_product_createElement = __webpack_require__(6295)["default"];
/* provided dependency */ var compare_product_MinimogTheme = __webpack_require__(4558)["MinimogTheme"];

class CompareProduct {
  constructor() {
    _defineProperty(this, "storageKey", 'sf__compare-products');

    _defineProperty(this, "products", []);

    _defineProperty(this, "productNodes", {});

    _defineProperty(this, "pageTemplate", 'page.product-compare');

    _defineProperty(this, "addedClass", 'added-to-compare');

    _defineProperty(this, "selectors", {
      container: '.sf-prod-compare__container',
      noProducts: '.sf-prod-compare__no_products',
      wrapper: '.sf-prod-compare__wrapper',
      item: '.sf-prod-compare',
      compareButton: '.sf-prod-compare__button',
      compareText: '.sf-prod-compare__button-content',
      removeButton: '.sf-prod-compare__remove'
    });

    _defineProperty(this, "init", () => {
      if (compare_product_MinimogSettings.template === this.pageTemplate) {
        this.renderComparePage();
        this.addEventToRemoveButtons();
      } else {
        this.setCompareButtonsState();
        this.addEventToCompareButtons();
      }
    });

    _defineProperty(this, "saveToStorage", () => {
      this.products = Array.from(new Set(this.products));
      localStorage.setItem(this.storageKey, JSON.stringify(this.products));
    });

    _defineProperty(this, "setCompareButtonsState", () => {
      const buttons = document.querySelectorAll(this.selectors.compareButton);
      buttons.forEach(btn => {
        const prodHandle = btn?.dataset?.productHandle;

        if (this.products.indexOf(prodHandle) >= 0 && !btn?.classList?.contains(this.addedClass)) {
          this.toggleButtonState(btn, true);
        }
      });
    });

    _defineProperty(this, "addEventToCompareButtons", () => {
      addEventDelegate({
        selector: this.selectors.compareButton,
        handler: (e, btn) => {
          e.preventDefault();
          const productHandle = btn?.dataset?.productHandle;

          if (productHandle) {
            const active = !btn.classList.contains(this.addedClass);
            this.toggleButtonState(btn, active);
            document.querySelectorAll(this.selectors.compareButton).forEach(btnItem => {
              if (btnItem?.dataset?.productHandle === productHandle && btnItem !== btn) {
                const isAdded = !btnItem?.classList?.contains(this.addedClass);
                this.toggleButtonState(btnItem, isAdded);
              }
            });
          }
        }
      });
    });

    _defineProperty(this, "toggleButtonState", (btn, active) => {
      const productHandle = btn?.dataset?.productHandle;
      const compareText = btn.querySelector(this.selectors.compareText);

      if (active) {
        this.addToCompare(productHandle);
        btn.classList.add(this.addedClass);
      } else {
        this.removeFromCompare(productHandle);
        btn.classList.remove(this.addedClass);
      }

      if (compareText) {
        const temp = compareText?.dataset?.revertText;
        compareText.dataset.revertText = compareText.textContent;
        compareText.textContent = temp;
      }
    });

    _defineProperty(this, "addEventToRemoveButtons", () => {
      addEventDelegate({
        selector: this.selectors.removeButton,
        handler: (e, btn) => {
          e.preventDefault();
          const prod = btn?.closest(this.selectors.wrapper);
          prod?.remove();
          const productHandle = btn?.dataset?.productHandle;

          if (productHandle) {
            this.removeFromCompare(productHandle);

            if (!this.products.length) {
              this.showNoProductsMessage();
            }
          }
        }
      });
    });

    _defineProperty(this, "renderComparePage", async () => {
      const container = document.querySelector(this.selectors.container);

      if (container) {
        let noItemAvailable = true;

        if (this.products.length) {
          const promises = this.products.map(async hdl => {
            const prodHTML = await fetchCache(`/products/${hdl}?view=compare`);
            const item = compare_product_createElement("div", {
              className: `hidden ${this.selectors.wrapper.replace('.', '')}`
            });
            item.innerHTML = prodHTML;

            if (item.querySelector(this.selectors.item)) {
              noItemAvailable = false;
              this.productNodes[hdl] = item;
            }
          });
          await Promise.all(promises); // Render in order

          this.products.forEach(hdl => {
            const prodNode = this.productNodes[hdl];

            if (prodNode) {
              container.appendChild(prodNode);
              prodNode.classList.remove('hidden');
            }
          });
          compare_product_MinimogTheme.Products.initProductForms().catch(console.error);
        }

        if (noItemAvailable) {
          this.showNoProductsMessage();
        }

        container.classList.add('opacity-100');
      }
    });

    _defineProperty(this, "showNoProductsMessage", () => {
      const container = document.querySelector(this.selectors.container);
      const noProducts = document.querySelector(this.selectors.noProducts);
      container.classList.add('hidden');
      noProducts.classList.remove('hidden');
    });

    this.products = Array.from(new Set(Array.from(JSON.parse(localStorage.getItem(this.storageKey)) || [])));
    this.init();
  }

  addToCompare(handle) {
    if (handle && this.products.indexOf(handle) === -1) {
      this.products.push(handle);
      this.saveToStorage();
    }
  }

  removeFromCompare(handle) {
    this.products = this.products.filter(hdl => hdl !== handle);
    this.saveToStorage();
  }

}
compare_product_MinimogTheme.CompareProduct = new CompareProduct();
;// CONCATENATED MODULE: ./src/js/components/WishlistRemoveButton.jsx
/* provided dependency */ var WishlistRemoveButton_createElement = __webpack_require__(6295)["default"];
/* harmony default export */ function WishlistRemoveButton(_ref) {
  let {
    productHandle
  } = _ref;
  return WishlistRemoveButton_createElement("div", {
    className: "block md:hidden absolute z-10 right-5 top-5"
  }, WishlistRemoveButton_createElement("div", {
    className: "sf__tooltip-item sf-wishlist__remove",
    dataSet: {
      productHandle
    }
  }, WishlistRemoveButton_createElement("svg", {
    className: "w-5 h-5",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, WishlistRemoveButton_createElement("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  }))));
}
;// CONCATENATED MODULE: ./src/js/pages/wishlist.js
/* provided dependency */ var wishlist_createElement = __webpack_require__(6295)["default"];
/* provided dependency */ var wishlist_MinimogSettings = __webpack_require__(4558)["MinimogSettings"];
/* provided dependency */ var wishlist_MinimogTheme = __webpack_require__(4558)["MinimogTheme"];

// eslint-disable-next-line no-unused-vars


class Wishlist {
  constructor() {
    _defineProperty(this, "isWishlistPage", false);

    _defineProperty(this, "storageKey", 'sf__wishlist-products');

    _defineProperty(this, "products", []);

    _defineProperty(this, "productNodes", {});

    _defineProperty(this, "pageTemplate", 'page.wishlist');

    _defineProperty(this, "addedClass", 'added-to-wishlist');

    _defineProperty(this, "hasItemClass", 'wishlist-has-item');

    _defineProperty(this, "selectors", {
      container: '.sf-wishlist__container',
      noProducts: '.sf-wishlist__no_products',
      wrapper: '.sf-wishlist__wrapper',
      productCard: '.sf__pcard',
      wishlistButton: '.sf-wishlist__button',
      wishlistText: '.sf-wishlist__button-content',
      removeButton: '.sf-wishlist__remove',
      count: '.sf-wishlist-count'
    });

    _defineProperty(this, "init", async () => {
      if (this.isWishlistPage) {
        await this.renderWishlistPage();
        this.addEventToRemoveButtons();
      }

      this.setWishlistButtonsState();
      this.addEventToWishlistButtons();
      this.updateWishlistCount();
    });

    _defineProperty(this, "saveToStorage", () => {
      this.products = Array.from(new Set(this.products));
      localStorage.setItem(this.storageKey, JSON.stringify(this.products));
    });

    _defineProperty(this, "setWishlistButtonsState", () => {
      const buttons = document.querySelectorAll(this.selectors.wishlistButton);
      buttons.forEach(btn => {
        const prodHandle = btn?.dataset?.productHandle;

        if (this.products.indexOf(prodHandle) >= 0 && !btn?.classList?.contains(this.addedClass)) {
          this.toggleButtonState(btn, true);

          if (this.isWishlistPage) {
            btn.classList.remove(this.selectors.wishlistButton.replace('.', ''));
            btn.classList.add(this.selectors.removeButton.replace('.', ''));
          }
        }
      });
    });

    _defineProperty(this, "updateWishlistCount", () => {
      const size = this.products.length;
      const countElems = document.querySelectorAll(this.selectors.count);
      [...countElems].forEach(elem => {
        elem.textContent = size;
      });
      const method = size ? 'add' : 'remove';
      document.body.classList[method](this.hasItemClass);
    });

    _defineProperty(this, "addEventToWishlistButtons", () => {
      addEventDelegate({
        selector: this.selectors.wishlistButton,
        handler: (e, btn) => {
          e.preventDefault();
          const productHandle = btn?.dataset?.productHandle;

          if (productHandle) {
            const active = !btn.classList.contains(this.addedClass);
            this.toggleButtonState(btn, active);
            this.updateWishlistCount();
            document.querySelectorAll(this.selectors.wishlistButton).forEach(btnItem => {
              if (btnItem?.dataset?.productHandle === productHandle && btnItem !== btn) {
                const isAdded = !btnItem?.classList?.contains(this.addedClass);
                this.toggleButtonState(btnItem, isAdded);
              }
            });
          }
        }
      });
    });

    _defineProperty(this, "toggleButtonState", (btn, active) => {
      const productHandle = btn?.dataset?.productHandle;
      const wishlistText = btn.querySelector(this.selectors.wishlistText);

      if (active) {
        this.addToWishlist(productHandle);
        btn.classList.add(this.addedClass);
      } else {
        this.removeFromWishlist(productHandle);
        btn.classList.remove(this.addedClass);
      }

      if (wishlistText) {
        const temp = wishlistText?.dataset?.revertText;
        wishlistText.dataset.revertText = wishlistText.textContent;
        wishlistText.textContent = temp;
      }
    });

    _defineProperty(this, "addEventToRemoveButtons", () => {
      addEventDelegate({
        selector: this.selectors.removeButton,
        handler: (e, btn) => {
          e.preventDefault();
          const prod = btn?.closest(this.selectors.wrapper);
          prod?.remove();
          const productHandle = btn?.dataset?.productHandle;

          if (productHandle) {
            this.removeFromWishlist(productHandle);
            this.updateWishlistCount();

            if (!this.products.length) {
              this.showNoProductsMessage();
            }
          }
        }
      });
    });

    _defineProperty(this, "renderWishlistPage", async () => {
      const container = document.querySelector(this.selectors.container);

      if (container) {
        let noItemAvailable = true;

        if (this.products.length) {
          const promises = this.products.map(async hdl => {
            const url = utilities_formatUrl('products', hdl, 'view=grid-card-item');
            const prodHTML = await fetchCache(url);
            const item = wishlist_createElement("div", {
              className: `hidden relative ${this.selectors.wrapper.replace('.', '')}`
            });
            item.innerHTML = prodHTML;

            if (item.querySelector(this.selectors.productCard)) {
              noItemAvailable = false;
              item.appendChild(wishlist_createElement(WishlistRemoveButton, {
                productHandle: hdl
              }));
              this.productNodes[hdl] = item;
            }
          });
          await Promise.all(promises); // Render in order

          this.products.forEach(hdl => {
            const prod = this.productNodes[hdl];

            if (prod) {
              container.appendChild(prod);
              prod.classList.remove('hidden');
            }
          }); // MinimogTheme.Products.initProductForms().catch(console.error)
        }

        if (noItemAvailable) {
          this.showNoProductsMessage();
        } else {
          this.setWishlistButtonsState();
        }

        container.classList.add('opacity-100');
      }
    });

    _defineProperty(this, "showNoProductsMessage", () => {
      const container = document.querySelector(this.selectors.container);
      const noProducts = document.querySelector(this.selectors.noProducts);
      container.classList.add('hidden');
      noProducts.classList.remove('hidden');
    });

    this.products = Array.from(new Set(Array.from(JSON.parse(localStorage.getItem(this.storageKey)) || [])));
    this.isWishlistPage = wishlist_MinimogSettings.template === this.pageTemplate;
    this.init();
  }

  addToWishlist(handle) {
    if (handle && this.products.indexOf(handle) === -1) {
      this.products.push(handle);
      this.saveToStorage();
    }
  }

  removeFromWishlist(handle) {
    this.products = this.products.filter(hdl => hdl !== handle);
    this.saveToStorage();
  }

}
wishlist_MinimogTheme.Wishlist = new Wishlist();
;// CONCATENATED MODULE: ./src/js/utilities/dom-intersection-observer.js


if (!window.IntersectionObserver) {
  loadJS('https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver');
}

function handleBackgroundImageLazyload() {
  return addIntersectionObserver('sf-bg-lazy');
}
handleBackgroundImageLazyload();
async function addIntersectionObserver(classSelector) {
  let newClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  let lazyImages = [].slice.call(document.getElementsByClassName(classSelector));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.classList.remove(classSelector);
          newClass && lazyImage.classList.remove(newClass);
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });
    lazyImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  }
}
function observeElement(target, callback) {
  let option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  let observer = new IntersectionObserver(callback, option);
  observer.observe(target);
}
// EXTERNAL MODULE: ./node_modules/mdn-polyfills/Element.prototype.closest.js
var Element_prototype_closest = __webpack_require__(1339);
// EXTERNAL MODULE: ./node_modules/mdn-polyfills/Node.prototype.replaceWith.js
var Node_prototype_replaceWith = __webpack_require__(1713);
// EXTERNAL MODULE: ./node_modules/mdn-polyfills/Node.prototype.after.js
var Node_prototype_after = __webpack_require__(2297);
// EXTERNAL MODULE: ./node_modules/mdn-polyfills/Node.prototype.prepend.js
var Node_prototype_prepend = __webpack_require__(598);
;// CONCATENATED MODULE: ./src/js/utilities/polyfill.js




// EXTERNAL MODULE: ./src/js/utilities/shopify.js
var shopify = __webpack_require__(5118);
;// CONCATENATED MODULE: ./src/js/app.js












function initTheme() {
  runHelpers();
  loadAllSections(); // MinimogTheme.Products.initProductForms().catch(console.error)
}

initTheme();
}();
/******/ })()
;