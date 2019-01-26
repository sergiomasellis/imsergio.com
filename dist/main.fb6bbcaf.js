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
},{"./..\\fonts\\phosphate-solid-02-webfont.woff2":[["phosphate-solid-02-webfont.7fd84bd5.woff2","fonts/phosphate-solid-02-webfont.woff2"],"fonts/phosphate-solid-02-webfont.woff2"],"./..\\fonts\\phosphate-solid-02-webfont.woff":[["phosphate-solid-02-webfont.5fc7823e.woff","fonts/phosphate-solid-02-webfont.woff"],"fonts/phosphate-solid-02-webfont.woff"],"_css_loader":"../../../../AppData/Roaming/nvm/v10.11.0/node_modules/parcel/src/builtins/css-loader.js"}],"js/main.js":[function(require,module,exports) {
"use strict";

require("../scss/main.scss");

(function () {
  var canvas = document.getElementById('canvas'),
      context = canvas.getContext('2d'),
      header = document.getElementById('logo'),
      lastName = document.getElementsByClassName('lastName'),
      mouse = {
    x: 0,
    y: 0
  },
      cursor = {
    x: canvas.width / 2,
    y: canvas.height / 2,
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
  },
      background = {
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
  },
      font = {
    x: 0,
    y: 0,
    origin: {
      x: -90,
      y: -90
    }
  }; // resize the canvas to fill browser window dynamically

  window.addEventListener('resize', resizeCanvas, false);

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    setup();
  }

  resizeCanvas();

  function lerp(a, b, t) {
    return (1 - t) * a + t * b;
  }

  function setup() {
    context.fillStyle = 'rgb(' + background.color.r + ',' + background.color.g + ',' + background.color.b + ')';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(cursor.x, cursor.y, cursor.width, 0, 2 * Math.PI);
    context.strokeStyle = '#ffffff';
    context.stroke();
    window.addEventListener('mousemove', function (_ref) {
      var clientX = _ref.clientX,
          clientY = _ref.clientY,
          target = _ref.target;
      // Set Mouse position on mouse move
      mouse.x = clientX;
      mouse.y = clientY; // Update to random color on mouse move

      var currentColor = background.pallete[Math.floor(Math.random() * background.pallete.length)];
      background.colorUpdate.r = currentColor.r;
      background.colorUpdate.g = currentColor.g;
      background.colorUpdate.b = currentColor.b;
      cursor.cursorTarget = target.id; // Set new deg for title rotation on mouse move
      // font.x = mouse.x - font.origin.x;
      // font.y = (mouse.y - font.origin.y);

      console.log(mouse.x, mouse.y); // font.y = font.origin.x / (((canvas.width / mouse.x) * 100) / 45);
      // font.x = font.origin.y / (((canvas.height / mouse.y) * 100) / 45);

      var center = {
        x: canvas.width / 2,
        y: canvas.height / 2
      };
      console.log(center);
      font.y = calculateHeaderRotation(mouse.x, 0, canvas.width, -30, 30);
      font.x = calculateHeaderRotation(mouse.y, 0, canvas.height, -30, 30); // if(font.x < 23) font.x * -1;
      // if(font.y < 23) font.y * -1;
    }, false); // Reset values when mouse leaves window

    window.addEventListener('mouseout', function () {
      font.x = 0;
      font.y = 0;
      cursor.cursorTarget = 'NotOnScreen';
    }, false);
    update();
  }

  function calculateHeaderRotation(x, in_min, in_max, out_min, out_max) {
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }

  function update() {
    // Rotate Header based on deg from mouse move
    var style = "translate(-50%, -50%) rotateX(" + font.x + "deg) rotateY(" + font.y + "deg)";
    header.style.transform = style;
    header.style.webkitTransform = style;
    header.style.mozTransform = style;
    header.style.msTransform = style;
    header.style.oTransform = style;
    background.color.r = lerp(background.color.r, background.colorUpdate.r, 0.01);
    background.color.g = lerp(background.color.g, background.colorUpdate.g, 0.01);
    background.color.b = lerp(background.color.b, background.colorUpdate.b, 0.01);
    context.fillStyle = 'rgb(' + background.color.r + ',' + background.color.g + ',' + background.color.b + ')';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    cursor.x = lerp(cursor.x, mouse.x, 0.05);
    cursor.y = lerp(cursor.y, mouse.y, 0.07);
    cursor.width = lerp(cursor.width, cursor.widthHover, 0.1);
    cursor.color.r = lerp(cursor.color.r, cursor.colorHover.r, 0.1);
    cursor.color.g = lerp(cursor.color.g, cursor.colorHover.g, 0.1);
    cursor.color.b = lerp(cursor.color.b, cursor.colorHover.b, 0.1);
    context.arc(cursor.x, cursor.y, cursor.width, 0, 2 * Math.PI);
    context.strokeStyle = 'rgb(' + cursor.color.r + ',' + cursor.color.g + ',' + cursor.color.b + ')'; // context.fillStyle = 'rgb('+ cursor.color.r +','+ cursor.color.g +','+ cursor.color.b +')';
    // context.fill();

    context.stroke(); // cursor.x > canvas.width/2

    if (cursor.cursorTarget == 'NotOnScreen') {
      cursor.widthHover = 0;
    } else if (cursor.cursorTarget != 'canvas') {
      cursor.widthHover = 50;
      cursor.colorHover = {
        r: 255,
        g: 255,
        b: 255
      };
    } else {
      cursor.widthHover = 20;
      cursor.colorHover = {
        r: 133,
        g: 30,
        b: 62
      };
    }

    window.requestAnimationFrame(update);
  }
})();
},{"../scss/main.scss":"scss/main.scss"}],"../../../../AppData/Roaming/nvm/v10.11.0/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59696" + '/');

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
},{}]},{},["../../../../AppData/Roaming/nvm/v10.11.0/node_modules/parcel/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.map