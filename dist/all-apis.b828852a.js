// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"fG9zT":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 5000;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "f3e508fdb828852a";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"lhpGb":[function(require,module,exports,__globalThis) {
// Main JavaScript file for DevTools Conglomerate
// Responsive navigation toggle with accessibility and smooth transitions
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initNavToggle", ()=>initNavToggle);
// Dark mode toggle with persistence
parcelHelpers.export(exports, "initDarkMode", ()=>initDarkMode);
// Fade-in animation for sections
parcelHelpers.export(exports, "initFadeIn", ()=>initFadeIn);
// Form validation and search enhancements
parcelHelpers.export(exports, "initSearch", ()=>initSearch);
// XSS Scanner Demo
parcelHelpers.export(exports, "initXSSScannerDemo", ()=>initXSSScannerDemo);
// Search and Filter functionality for APIs
parcelHelpers.export(exports, "initAPISearchFilter", ()=>initAPISearchFilter);
// Initialize all features
parcelHelpers.export(exports, "init", ()=>init);
// Interactive API Playground functionality
parcelHelpers.export(exports, "initAPIPlayground", ()=>initAPIPlayground);
function initNavToggle() {
    const navToggle = document.createElement('button');
    navToggle.innerHTML = "\u2630";
    navToggle.className = 'md:hidden text-2xl p-2 focus:outline-none';
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-controls', 'nav-menu');
    navToggle.setAttribute('aria-label', 'Toggle navigation menu');
    const nav = document.querySelector('nav > div > div.flex.items-center.space-x-4');
    if (nav) {
        nav.id = 'nav-menu';
        nav.classList.add('transition-all', 'duration-300', 'ease-in-out');
        navToggle.addEventListener('click', ()=>{
            const isExpanded = nav.classList.contains('hidden');
            nav.classList.toggle('hidden');
            navToggle.setAttribute('aria-expanded', !isExpanded);
        });
        nav.parentNode.insertBefore(navToggle, nav);
        nav.classList.add('hidden', 'flex-col', 'space-y-2', 'md:flex', 'md:flex-row', 'md:space-x-4');
    }
}
function initDarkMode() {
    const darkToggle = document.createElement('button');
    darkToggle.textContent = "\uD83C\uDF19";
    darkToggle.className = 'ml-4 px-3 py-1 border rounded text-indigo-600 hover:bg-indigo-100 focus:outline-none';
    darkToggle.title = 'Toggle Dark Mode';
    darkToggle.setAttribute('aria-label', 'Toggle dark mode');
    darkToggle.addEventListener('click', ()=>{
        document.documentElement.classList.toggle('dark');
        if (document.documentElement.classList.contains('dark')) {
            darkToggle.textContent = "\u2600\uFE0F";
            localStorage.setItem('darkMode', 'enabled');
        } else {
            darkToggle.textContent = "\uD83C\uDF19";
            localStorage.setItem('darkMode', 'disabled');
        }
    });
    const navBar = document.querySelector('nav > div > div.flex.items-center.space-x-4');
    if (navBar) navBar.appendChild(darkToggle);
    // Load dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled' || window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
        darkToggle.textContent = "\u2600\uFE0F";
    }
}
function initFadeIn() {
    const sections = document.querySelectorAll('section, main, header, footer');
    sections.forEach((section)=>{
        section.classList.add('opacity-0', 'transition-opacity', 'duration-1000', 'ease-in-out');
    });
    setTimeout(()=>{
        sections.forEach((section)=>{
            section.classList.remove('opacity-0');
            section.classList.add('opacity-100');
        });
    }, 100);
}
function initSearch() {
    const searchInput = document.querySelector('input[placeholder="Search tools..."]');
    const searchButton = document.querySelector('button[type="submit"]') || document.querySelector('button').contains('Search');
    const apiCards = document.querySelectorAll('.grid > div');
    if (searchInput && apiCards.length > 0) {
        // Live filtering
        searchInput.addEventListener('input', (e)=>{
            const query = e.target.value.toLowerCase();
            apiCards.forEach((card)=>{
                const title = card.querySelector('h3').textContent.toLowerCase();
                const desc = card.querySelector('p').textContent.toLowerCase();
                if (title.includes(query) || desc.includes(query)) card.style.display = 'block';
                else card.style.display = 'none';
            });
        });
        // Form validation
        searchInput.addEventListener('blur', ()=>{
            if (searchInput.value.trim() === '') searchInput.setCustomValidity('Please enter a search term');
            else searchInput.setCustomValidity('');
        });
        // Search button functionality
        if (searchButton) searchButton.addEventListener('click', (e)=>{
            e.preventDefault();
            const query = searchInput.value.trim();
            if (query === '') {
                alert('Please enter a search term');
                searchInput.focus();
            } else alert(`Searching for: ${query}`);
        });
    }
}
function initXSSScannerDemo() {
    const scanBtn = document.getElementById('scan-xss');
    const inputTextarea = document.getElementById('xss-input');
    const outputTextarea = document.getElementById('xss-output');
    if (scanBtn && inputTextarea && outputTextarea) scanBtn.addEventListener('click', ()=>{
        const input = inputTextarea.value;
        const result = scanForXSS(input);
        outputTextarea.value = result ? 'Potential XSS detected!' : 'No XSS detected.';
    });
}
function scanForXSS(input) {
    // Simple XSS detection logic (for demo purposes)
    const xssPattern = /<script.*?>.*?<\/script.*?>|on\w+=["'].*?["']/gi;
    return xssPattern.test(input);
}
function initAPISearchFilter() {
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    const statusFilter = document.getElementById('status-filter');
    const clearFiltersBtn = document.getElementById('clear-filters');
    const resultsCount = document.getElementById('results-count');
    const apiCards = document.querySelectorAll('.grid > div');
    if (!searchInput || !categoryFilter || !statusFilter || !apiCards.length) return; // Elements not found, skip initialization
    // Define categories for each API card
    const apiCategories = {
        'SQL Injection Scanner': 'security',
        'SEO Meta Validator': 'security',
        'Code Complexity Analyzer': 'security',
        'Dependency Vulnerability Checker': 'security',
        'JSON-to-XML Converter': 'data',
        'YAML Validator Formatter': 'data',
        'CSV-to-JSON API': 'data',
        'Image Format Converter': 'data',
        'PDF Text Extractor': 'data',
        'Dockerfile Generator': 'devops',
        'Nginx Config Generator': 'devops',
        'Let\'s Encrypt Bot Simulator': 'devops',
        'Git Command Helper': 'devops',
        'UUID Generator': 'algorithm',
        'Password Strength API': 'algorithm',
        'Hash Generator': 'algorithm',
        'Unit Test Generator': 'algorithm',
        'Color Converter API': 'algorithm',
        'Fake User Generator': 'algorithm',
        'Test Data API': 'algorithm',
        'API Factory Orchestrator': 'algorithm'
    };
    // Filter function
    function filterAPIs() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const selectedCategory = categoryFilter.value;
        const selectedStatus = statusFilter.value;
        let visibleCount = 0;
        apiCards.forEach((card)=>{
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            const statusBadge = card.querySelector('span').textContent.toLowerCase().replace(/\s+/g, '-');
            const apiName = card.querySelector('h3').textContent.trim();
            const category = apiCategories[apiName] || '';
            // Check search term
            const matchesSearch = !searchTerm || title.includes(searchTerm) || description.includes(searchTerm) || apiName.toLowerCase().includes(searchTerm);
            // Check category
            const matchesCategory = !selectedCategory || category === selectedCategory;
            // Check status
            const matchesStatus = !selectedStatus || selectedStatus === 'in-progress' && statusBadge.includes('progress') || selectedStatus === 'completed' && statusBadge.includes('completed') || selectedStatus === 'planned' && statusBadge.includes('planned');
            // Show/hide card
            if (matchesSearch && matchesCategory && matchesStatus) {
                card.style.display = 'block';
                visibleCount++;
            } else card.style.display = 'none';
        });
        // Update results count
        const totalCount = apiCards.length;
        if (visibleCount === totalCount) resultsCount.textContent = `Showing all ${totalCount} APIs`;
        else resultsCount.textContent = `Showing ${visibleCount} of ${totalCount} APIs`;
    }
    // Clear filters function
    function clearFilters() {
        searchInput.value = '';
        categoryFilter.value = '';
        statusFilter.value = '';
        filterAPIs();
    }
    // Event listeners
    searchInput.addEventListener('input', filterAPIs);
    categoryFilter.addEventListener('change', filterAPIs);
    statusFilter.addEventListener('change', filterAPIs);
    clearFiltersBtn.addEventListener('click', clearFilters);
    // Initial filter call to set up results count
    filterAPIs();
}
function init() {
    initNavToggle();
    initDarkMode();
    initFadeIn();
    initSearch();
    initXSSScannerDemo();
    initAPISearchFilter();
    // Test dark mode compatibility for new elements
    const demoSection = document.getElementById('scan-xss');
    if (demoSection) {
        const observer = new MutationObserver(()=>{
            if (document.documentElement.classList.contains('dark')) demoSection.classList.add('dark');
            else demoSection.classList.remove('dark');
        });
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: [
                'class'
            ]
        });
    }
}
function initAPIPlayground() {
    const apiSelect = document.getElementById('api-select');
    const requestEditor = document.getElementById('request-editor');
    const sendRequestBtn = document.getElementById('send-request');
    const responseDisplay = document.getElementById('response-display');
    const responseStatus = document.getElementById('response-status');
    if (!apiSelect || !requestEditor || !sendRequestBtn || !responseDisplay || !responseStatus) return; // Elements not found, skip initialization
    // Extract API names from the page
    const apiCards = document.querySelectorAll('.grid > div h3');
    const apiNames = Array.from(apiCards).map((card)=>card.textContent.trim());
    // API examples data (dynamically generated based on extracted names)
    const apiExamples = {};
    // Define examples for each API type
    const exampleTemplates = {
        'SQL Injection Scanner': {
            endpoint: '/api/sql-injection-scan',
            method: 'POST',
            example: JSON.stringify({
                code: "SELECT * FROM users WHERE id = '1' OR '1'='1'"
            }, null, 2)
        },
        'SEO Meta Validator': {
            endpoint: '/api/seo-meta-validate',
            method: 'POST',
            example: JSON.stringify({
                html: "<html><head><title>My Page</title><meta name='description' content='Page description'></head></html>"
            }, null, 2)
        },
        'Code Complexity Analyzer': {
            endpoint: '/api/code-complexity',
            method: 'POST',
            example: JSON.stringify({
                code: "function factorial(n) { if (n <= 1) return 1; return n * factorial(n-1); }"
            }, null, 2)
        },
        'Dependency Vulnerability Checker': {
            endpoint: '/api/dependency-check',
            method: 'POST',
            example: JSON.stringify({
                dependencies: {
                    "express": "4.17.1",
                    "lodash": "4.17.20"
                }
            }, null, 2)
        },
        'JSON-to-XML Converter': {
            endpoint: '/api/json-to-xml',
            method: 'POST',
            example: JSON.stringify({
                name: "John",
                age: 30,
                city: "New York"
            }, null, 2)
        },
        'YAML Validator Formatter': {
            endpoint: '/api/yaml-validate',
            method: 'POST',
            example: JSON.stringify({
                yaml: "name: John\nage: 30\ncity: New York"
            }, null, 2)
        },
        'CSV-to-JSON API': {
            endpoint: '/api/csv-to-json',
            method: 'POST',
            example: JSON.stringify({
                csv: "name,age,city\nJohn,30,New York\nJane,25,London"
            }, null, 2)
        },
        'Image Format Converter': {
            endpoint: '/api/image-convert',
            method: 'POST',
            example: JSON.stringify({
                imageUrl: "https://example.com/image.jpg",
                targetFormat: "png"
            }, null, 2)
        },
        'PDF Text Extractor': {
            endpoint: '/api/pdf-extract',
            method: 'POST',
            example: JSON.stringify({
                pdfUrl: "https://example.com/document.pdf"
            }, null, 2)
        },
        'Dockerfile Generator': {
            endpoint: '/api/dockerfile-generate',
            method: 'POST',
            example: JSON.stringify({
                language: "nodejs",
                framework: "express",
                port: 3000
            }, null, 2)
        },
        'Nginx Config Generator': {
            endpoint: '/api/nginx-config',
            method: 'POST',
            example: JSON.stringify({
                domain: "example.com",
                port: 3000,
                ssl: true
            }, null, 2)
        },
        'Let\'s Encrypt Bot Simulator': {
            endpoint: '/api/letsencrypt-simulate',
            method: 'POST',
            example: JSON.stringify({
                domain: "example.com",
                email: "admin@example.com"
            }, null, 2)
        },
        'Git Command Helper': {
            endpoint: '/api/git-help',
            method: 'POST',
            example: JSON.stringify({
                command: "git rebase -i HEAD~3"
            }, null, 2)
        },
        'UUID Generator': {
            endpoint: '/api/uuid-generate',
            method: 'POST',
            example: JSON.stringify({
                count: 5
            }, null, 2)
        },
        'Password Strength API': {
            endpoint: '/api/password-strength',
            method: 'POST',
            example: JSON.stringify({
                password: "MySecurePassword123!"
            }, null, 2)
        },
        'Hash Generator': {
            endpoint: '/api/hash-generate',
            method: 'POST',
            example: JSON.stringify({
                text: "hello world",
                algorithm: "sha256"
            }, null, 2)
        },
        'Unit Test Generator': {
            endpoint: '/api/unit-test-generate',
            method: 'POST',
            example: JSON.stringify({
                function: "function add(a, b) { return a + b; }"
            }, null, 2)
        },
        'Color Converter API': {
            endpoint: '/api/color-convert',
            method: 'POST',
            example: JSON.stringify({
                color: "#FF0000",
                from: "hex",
                to: "rgb"
            }, null, 2)
        },
        'Fake User Generator': {
            endpoint: '/api/fake-user',
            method: 'POST',
            example: JSON.stringify({
                count: 3,
                locale: "en_US"
            }, null, 2)
        }
    };
    // Populate apiExamples with extracted API names
    apiNames.forEach((apiName)=>{
        if (exampleTemplates[apiName]) apiExamples[apiName] = exampleTemplates[apiName];
        else // Default example for APIs not in templates
        apiExamples[apiName] = {
            endpoint: `/api/${apiName.toLowerCase().replace(/\s+/g, '-')}`,
            method: 'POST',
            example: JSON.stringify({
                message: `Example request for ${apiName}`
            }, null, 2)
        };
    });
    // Populate API dropdown
    apiNames.forEach((apiName)=>{
        const option = document.createElement('option');
        option.value = apiName;
        option.textContent = apiName;
        apiSelect.appendChild(option);
    });
    // Handle API selection
    apiSelect.addEventListener('change', (e)=>{
        const selectedAPI = e.target.value;
        if (selectedAPI && apiExamples[selectedAPI]) requestEditor.value = apiExamples[selectedAPI].example;
        else requestEditor.value = '';
    });
    // Handle send request
    sendRequestBtn.addEventListener('click', async ()=>{
        const selectedAPI = apiSelect.value;
        if (!selectedAPI) {
            alert('Please select an API first.');
            return;
        }
        const requestBody = requestEditor.value.trim();
        if (!requestBody) {
            alert('Please enter a request body.');
            return;
        }
        // Disable button during request
        sendRequestBtn.disabled = true;
        sendRequestBtn.textContent = 'Sending...';
        responseStatus.textContent = 'Status: Sending request...';
        try {
            // Validate JSON
            JSON.parse(requestBody);
            // Simulate API call (since endpoints don't exist yet)
            const mockResponse = await simulateAPICall(selectedAPI, requestBody);
            responseDisplay.textContent = JSON.stringify(mockResponse, null, 2);
            responseStatus.textContent = 'Status: 200 OK (Mock Response)';
        } catch (error) {
            if (error instanceof SyntaxError) {
                responseDisplay.textContent = 'Error: Invalid JSON in request body';
                responseStatus.textContent = 'Status: 400 Bad Request';
            } else {
                responseDisplay.textContent = `Error: ${error.message}`;
                responseStatus.textContent = 'Status: 500 Internal Server Error';
            }
        } finally{
            // Re-enable button
            sendRequestBtn.disabled = false;
            sendRequestBtn.textContent = 'Send Request';
        }
    });
    // Mock API call simulation
    async function simulateAPICall(apiName, requestBody) {
        // Simulate network delay
        await new Promise((resolve)=>setTimeout(resolve, 1000 + Math.random() * 2000));
        const requestData = JSON.parse(requestBody);
        const apiConfig = apiExamples[apiName];
        // Generate mock responses based on API type
        switch(apiName){
            case 'SQL Injection Scanner':
                return {
                    vulnerable: Math.random() > 0.7,
                    issues: Math.random() > 0.7 ? [
                        'Potential SQL injection in user input'
                    ] : [],
                    recommendations: [
                        'Use prepared statements',
                        'Validate input data'
                    ]
                };
            case 'SEO Meta Validator':
                return {
                    score: Math.floor(Math.random() * 40) + 60,
                    issues: [
                        'Missing Open Graph tags',
                        'Title too short'
                    ],
                    suggestions: [
                        'Add meta description',
                        'Include structured data'
                    ]
                };
            case 'Code Complexity Analyzer':
                return {
                    complexity: Math.floor(Math.random() * 10) + 1,
                    maintainability: Math.floor(Math.random() * 40) + 60,
                    suggestions: [
                        'Break down into smaller functions',
                        'Reduce nesting'
                    ]
                };
            case 'Dependency Vulnerability Checker':
                return {
                    totalDependencies: Object.keys(requestData.dependencies || {}).length,
                    vulnerabilities: Math.floor(Math.random() * 3),
                    critical: Math.floor(Math.random() * 2),
                    recommendations: [
                        'Update to latest versions',
                        'Remove unused dependencies'
                    ]
                };
            case 'JSON-to-XML Converter':
                return {
                    xml: '<root><name>John</name><age>30</age><city>New York</city></root>',
                    converted: true
                };
            case 'YAML Validator Formatter':
                return {
                    valid: true,
                    formatted: "name: John\nage: 30\ncity: New York\n",
                    errors: []
                };
            case 'CSV-to-JSON API':
                return [
                    {
                        name: 'John',
                        age: 30,
                        city: 'New York'
                    },
                    {
                        name: 'Jane',
                        age: 25,
                        city: 'London'
                    }
                ];
            case 'Image Format Converter':
                return {
                    success: true,
                    convertedUrl: 'https://example.com/converted-image.png',
                    originalFormat: 'jpg',
                    targetFormat: 'png'
                };
            case 'PDF Text Extractor':
                return {
                    text: 'This is extracted text from the PDF document...',
                    pages: 5,
                    totalWords: 1250
                };
            case 'Dockerfile Generator':
                return {
                    dockerfile: 'FROM node:14\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nEXPOSE 3000\nCMD ["npm", "start"]',
                    generated: true
                };
            case 'Nginx Config Generator':
                return {
                    config: 'server {\n    listen 80;\n    server_name example.com;\n    location / {\n        proxy_pass http://localhost:3000;\n    }\n}',
                    generated: true
                };
            case 'Let\'s Encrypt Bot Simulator':
                return {
                    success: true,
                    certificate: '-----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE-----',
                    validUntil: '2024-12-31'
                };
            case 'Git Command Helper':
                return {
                    explanation: 'Interactive rebase allows you to modify commits in your history.',
                    steps: [
                        'Start interactive rebase',
                        'Choose operations for each commit',
                        'Save and exit'
                    ],
                    alternatives: [
                        'git reset --soft HEAD~3',
                        'git commit --amend'
                    ]
                };
            case 'UUID Generator':
                const uuids = [];
                for(let i = 0; i < (requestData.count || 1); i++)uuids.push('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                    const r = Math.random() * 16 | 0;
                    const v = c == 'x' ? r : r & 0x3 | 0x8;
                    return v.toString(16);
                }));
                return {
                    uuids
                };
            case 'Password Strength API':
                const strength = Math.floor(Math.random() * 40) + 60;
                return {
                    strength: strength,
                    score: strength >= 80 ? 'Strong' : strength >= 60 ? 'Medium' : 'Weak',
                    breached: Math.random() > 0.8,
                    suggestions: [
                        'Add special characters',
                        'Use longer password'
                    ]
                };
            case 'Hash Generator':
                const algorithms = {
                    md5: '5d41402abc4b2a76b9719d911017c592',
                    sha256: 'b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9'
                };
                return {
                    hash: algorithms[requestData.algorithm] || 'hashed_value_here',
                    algorithm: requestData.algorithm,
                    input: requestData.text
                };
            case 'Unit Test Generator':
                return {
                    tests: [
                        'describe("add function", () => {',
                        '  test("adds two numbers", () => {',
                        '    expect(add(2, 3)).toBe(5);',
                        '  });',
                        '});'
                    ],
                    generated: true
                };
            case 'Color Converter API':
                const conversions = {
                    hex: '#FF0000',
                    rgb: 'rgb(255, 0, 0)',
                    hsl: 'hsl(0, 100%, 50%)'
                };
                return {
                    original: requestData.color,
                    converted: conversions[requestData.to] || conversions.hex,
                    from: requestData.from,
                    to: requestData.to
                };
            case 'Fake User Generator':
                const users = [];
                for(let i = 0; i < (requestData.count || 1); i++)users.push({
                    id: i + 1,
                    name: `User ${i + 1}`,
                    email: `user${i + 1}@example.com`,
                    address: {
                        street: `123 Main St ${i + 1}`,
                        city: 'Anytown',
                        zipcode: '12345'
                    }
                });
                return {
                    users
                };
            default:
                return {
                    message: 'Mock response for ' + apiName
                };
        }
    }
}
// Auto-initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', ()=>{
    init();
    initAPIPlayground();
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["fG9zT","lhpGb"], "lhpGb", "parcelRequire051a", {})

//# sourceMappingURL=all-apis.b828852a.js.map
