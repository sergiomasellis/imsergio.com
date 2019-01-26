// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"../../../../AppData/Roaming/nvm/v10.11.0/node_modules/parcel/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../../AppData/Roaming/nvm/v10.11.0/node_modules/parcel/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../../AppData/Roaming/nvm/v10.11.0/node_modules/parcel/src/builtins/bundle-url.js"}],"scss/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\fonts\\phosphate-solid-02-webfont.woff2":[["phosphate-solid-02-webfont.7fd84bd5.woff2","fonts/phosphate-solid-02-webfont.woff2"],"fonts/phosphate-solid-02-webfont.woff2"],"./..\\fonts\\phosphate-solid-02-webfont.woff":[["phosphate-solid-02-webfont.5fc7823e.woff","fonts/phosphate-solid-02-webfont.woff"],"fonts/phosphate-solid-02-webfont.woff"],"_css_loader":"../../../../AppData/Roaming/nvm/v10.11.0/node_modules/parcel/src/builtins/css-loader.js"}],"js/HeaderAnimation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HeaderAnimation =
/*#__PURE__*/
function () {
  function HeaderAnimation() {
    _classCallCheck(this, HeaderAnimation);

    this.font = {
      x: 0,
      y: 0,
      origin: {
        x: -90,
        y: -90
      }
    };
    this.header = document.getElementById('logo');
  }

  _createClass(HeaderAnimation, [{
    key: "update",
    value: function update(mouseX, mouseY, canvasWidth, canvasHeight) {
      this.font.y = this.calculateRotation(mouseX, 0, canvasWidth, -30, 30);
      this.font.x = this.calculateRotation(mouseY, 0, canvasHeight, -30, 30); // Rotate Header based on deg from mouse move

      var style = "translate(-50%, -50%) rotateX(" + this.font.x + "deg) rotateY(" + this.font.y + "deg)";
      this.header.style.transform = style;
      this.header.style.webkitTransform = style;
      this.header.style.mozTransform = style;
      this.header.style.msTransform = style;
      this.header.style.oTransform = style;
    }
  }, {
    key: "rotate",
    value: function rotate(x, y) {
      this.font.x = x;
      this.font.y = y;
    }
  }, {
    key: "calculateRotation",
    value: function calculateRotation(x, in_min, in_max, out_min, out_max) {
      return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }
  }]);

  return HeaderAnimation;
}();

var _default = HeaderAnimation;
exports.default = _default;
},{}],"js/Utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Lerp = void 0;

var Lerp = function Lerp(a, b, t) {
  return (1 - t) * a + t * b;
};

exports.Lerp = Lerp;
},{}],"js/Main.js":[function(require,module,exports) {
"use strict";

require("../scss/main.scss");

var _HeaderAnimation = _interopRequireDefault(require("./HeaderAnimation"));

var _Utils = require("./Utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Main =
/*#__PURE__*/
function () {
  function Main() {
    _classCallCheck(this, Main);

    // define dom Elements
    this.canvas = document.getElementById('canvas');
    this.context = canvas.getContext('2d');
    this.lastName = document.getElementsByClassName('lastName');
    this.target = window; // Mouse related properties

    this.mouse = {
      x: 0,
      y: 0
    };
    this.cursor = {
      x: this.canvas.width / 2,
      y: this.canvas.height / 2,
      width: 20,
      widthHover: 0,
      color: {
        r: 0,
        g: 0,
        b: 0
      },
      colorHover: {
        r: 133,
        g: 30,
        b: 62
      },
      cursorTarget: 'canvas'
    }; // Home Page background

    this.background = {
      pallete: [{
        r: 5,
        g: 30,
        b: 62
      }, {
        r: 37,
        g: 30,
        b: 62
      }, {
        r: 69,
        g: 30,
        b: 62
      }, {
        r: 101,
        g: 30,
        b: 62
      }],
      color: {
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256)
      },
      colorUpdate: {
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256)
      }
    }; // init

    this.init();
    this.events();
  }

  _createClass(Main, [{
    key: "init",
    value: function init() {
      // Don't be rude say hi!
      console.log('Welcome to Imsergio.com'); // Setup default background color

      this.context.fillStyle = 'rgb(' + this.background.color.r + ',' + this.background.color.g + ',' + this.background.color.b + ')';
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.context.beginPath();
      this.context.arc(this.cursor.x, this.cursor.y, this.cursor.width, 0, 2 * Math.PI);
      this.context.strokeStyle = '#ffffff';
      this.context.stroke();
      this.headerAnimationClass = new _HeaderAnimation.default(); // Update Main Scene

      this.update();
    }
  }, {
    key: "events",
    value: function events() {
      this.target.addEventListener('resize', this.resizeCanvas.bind(this), false);
      this.target.addEventListener('mousemove', this.cursorMoved.bind(this), false);
      this.target.addEventListener('mouseout', this.cursorOut.bind(this), false);
    }
  }, {
    key: "resizeCanvas",
    value: function resizeCanvas() {
      this.canvas.width = this.target.innerWidth;
      this.canvas.height = this.target.innerHeight;
    }
  }, {
    key: "cursorMoved",
    value: function cursorMoved(_ref) {
      var clientX = _ref.clientX,
          clientY = _ref.clientY,
          target = _ref.target;
      // Set Mouse position on mouse move
      this.mouse.x = clientX;
      this.mouse.y = clientY; // Update to random color on mouse move

      var currentColor = this.background.pallete[Math.floor(Math.random() * this.background.pallete.length)];
      this.background.colorUpdate.r = currentColor.r;
      this.background.colorUpdate.g = currentColor.g;
      this.background.colorUpdate.b = currentColor.b; // Look at dom ID attrib to see whos being hovered

      this.cursor.cursorTarget = target.id; // Set new deg for title rotation on mouse move

      this.headerAnimationClass.update(this.mouse.x, this.mouse.y, this.canvas.width, this.canvas.height);
    }
  }, {
    key: "cursorOut",
    value: function cursorOut() {
      this.headerAnimationClass.rotate(0, 0);
      this.cursor.cursorTarget = 'NotOnScreen';
    }
  }, {
    key: "update",
    value: function update() {
      // Rotate Header based on deg from mouse move
      this.headerAnimationClass.update(this.mouse.x, this.mouse.y, this.canvas.width, this.canvas.height);
      this.background.color.r = (0, _Utils.Lerp)(this.background.color.r, this.background.colorUpdate.r, 0.01);
      this.background.color.g = (0, _Utils.Lerp)(this.background.color.g, this.background.colorUpdate.g, 0.01);
      this.background.color.b = (0, _Utils.Lerp)(this.background.color.b, this.background.colorUpdate.b, 0.01);
      this.context.fillStyle = 'rgb(' + this.background.color.r + ',' + this.background.color.g + ',' + this.background.color.b + ')';
      this.context.fillRect(0, 0, canvas.width, canvas.height);
      this.context.beginPath();
      this.cursor.x = (0, _Utils.Lerp)(this.cursor.x, this.mouse.x, 0.05);
      this.cursor.y = (0, _Utils.Lerp)(this.cursor.y, this.mouse.y, 0.07);
      this.cursor.width = (0, _Utils.Lerp)(this.cursor.width, this.cursor.widthHover, 0.1);
      this.cursor.color.r = (0, _Utils.Lerp)(this.cursor.color.r, this.cursor.colorHover.r, 0.1);
      this.cursor.color.g = (0, _Utils.Lerp)(this.cursor.color.g, this.cursor.colorHover.g, 0.1);
      this.cursor.color.b = (0, _Utils.Lerp)(this.cursor.color.b, this.cursor.colorHover.b, 0.1);
      this.context.arc(this.cursor.x, this.cursor.y, this.cursor.width, 0, 2 * Math.PI);
      this.context.strokeStyle = 'rgb(' + this.cursor.color.r + ',' + this.cursor.color.g + ',' + this.cursor.color.b + ')'; // this.context.fillStyle = 'rgb('+ this.cursor.color.r +','+ this.cursor.color.g +','+ this.cursor.color.b +')';
      // this.context.fill();

      this.context.stroke(); // cursor.x > canvas.width/2

      if (this.cursor.cursorTarget == 'NotOnScreen') {
        this.cursor.widthHover = 0;
      } else if (this.cursor.cursorTarget != 'canvas') {
        this.cursor.widthHover = 50;
        this.cursor.colorHover = {
          r: 255,
          g: 255,
          b: 255
        };
      } else {
        this.cursor.widthHover = 20;
        this.cursor.colorHover = {
          r: 133,
          g: 30,
          b: 62
        };
      }

      this.target.requestAnimationFrame(this.update.bind(this));
    }
  }]);

  return Main;
}();

window.imsergio = new Main();
},{"../scss/main.scss":"scss/main.scss","./HeaderAnimation":"js/HeaderAnimation.js","./Utils":"js/Utils.js"}],"../../../../AppData/Roaming/nvm/v10.11.0/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51653" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../AppData/Roaming/nvm/v10.11.0/node_modules/parcel/src/builtins/hmr-runtime.js","js/Main.js"], null)
//# sourceMappingURL=/Main.1cadf5b9.map