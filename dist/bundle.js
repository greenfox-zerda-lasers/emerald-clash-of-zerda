/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(4)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../node_modules/css-loader/index.js?{\"url\":false}!./../node_modules/sass-loader/index.js!./main.scss", function() {
			var newContent = require("!!./../node_modules/css-loader/index.js?{\"url\":false}!./../node_modules/sass-loader/index.js!./main.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "\"data:image/svg+xml;charset=utf8,%3C?xml version='1.0' encoding='utf-8'?%3E %3C!-- Generator: Adobe Illustrator 21.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E %3Cstyle type='text/css'%3E .st0%7Bfill:%23E6E6E6;%7D .st1%7Bfill:%23CCCCCC;%7D .st2%7Bfill:%23F5F5F5;%7D .st3%7Bfill:%23242424;%7D .st4%7Bfill:%23CC803D;%7D .st5%7Bfill:%23B37035;%7D .st6%7Bfill:%23B36624;%7D %3C/style%3E %3Cpath class='st0' d='M386,276.2c-5.5-14.3-10-33.7-10-68.6H256H136c0,34.9-4.5,54.3-10,68.6c-5.5,14.3,11.2,26.6,22.9,35.6 C194.5,347,198.5,384,256,384s61.5-37,107.1-72.2C374.8,302.8,391.5,290.5,386,276.2z'/%3E %3Cpath class='st1' d='M386,276.2c-5.5-14.3-10-33.7-10-68.6h-12c0,34.9,4.5,54.3,10,68.6c5.5,14.3-11.2,26.6-22.9,35.6 c-44,33.9-49.3,69.5-101.1,72c1.9,0.1,3.9,0.2,6,0.2c57.5,0,61.5-37,107.1-72.2C374.8,302.8,391.5,290.5,386,276.2z'/%3E %3Ccircle class='st2' cx='299' cy='257' r='20'/%3E %3Ccircle class='st3' cx='299' cy='257' r='12'/%3E %3Ccircle class='st2' cx='211' cy='257' r='20'/%3E %3Ccircle class='st3' cx='211' cy='257' r='12'/%3E %3Cpath class='st4' d='M403.1,99c-1.9-1.9-4.5-3-7.1-3c-29.8,0-79.8,19.1-111.4,47.8c-8-4.8-17.8-7.8-28.6-7.8s-20.6,3-28.6,7.8 C195.8,115.1,145.8,96,116,96c-2.7,0-5.3,1.1-7.1,3c-1.9,1.9-2.9,4.5-2.9,7.2c0.5,23.6,11.4,52.2,21.1,77.4c3.2,8.4,6.3,28.5,8.9,36 c106-2,100,95,100,126.4h40.1c0-31.3-6-128.3,99.9-126.4v-12c2.6-7.5,5.7-15.6,8.9-24.1c9.7-25.2,20.6-53.8,21.1-77.4 C406,103.5,405,100.9,403.1,99z'/%3E %3Cg%3E %3Cpath class='st5' d='M280.4,147.6c1.4-1.3,2.9-2.5,4.4-3.8c-7.7-4.7-19-7.8-28.8-7.8c-2,0-4,0.1-6,0.3 C258.4,137.2,273.9,143.7,280.4,147.6z'/%3E %3Cpath class='st5' d='M403.1,99c-1.9-1.9-4.5-3-7.1-3c-2.8,0-5.8,0.2-8.9,0.5c1.5,0.5,2.9,1.3,4,2.5c1.9,1.9,2.9,4.5,2.9,7.2 c-0.5,23.6-11.4,52.2-21.1,77.4c-3.2,8.4-6.4,16.6-8.9,24.1v12c-105.9-1.9-99.9,95-99.9,126.4h12c0-31.3-6-128.3,99.9-126.4v-12 c2.6-7.5,5.7-15.6,8.9-24.1c9.7-25.2,20.6-53.8,21.1-77.4C406,103.5,405,100.9,403.1,99z'/%3E %3Cpath class='st5' d='M219.2,147.6c2.4-1.4,5.5-2.7,8.2-3.8C195.1,114.7,145.5,96,116,96c-1.1,0-2.1,0.2-3.1,0.5 C143,99.7,190.6,121.5,219.2,147.6z'/%3E %3C/g%3E %3Cpath class='st3' d='M256,376c-10-10-20-19-20-30c0-11,9-20,20-20c11,0,20,9,20,20C276,357,266,366,256,376z'/%3E %3Cg%3E %3Cpath class='st6' d='M386,116c-10,0-60,10-70,30c10,10,50,40,50,40C376,166,386,126,386,116z'/%3E %3Cpath class='st6' d='M126,116c10,0,60,10,70,30c-10,10-50,40-50,40C136,166,126,126,126,116z'/%3E %3C/g%3E %3C/svg%3E\""

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "*, input {\n  box-sizing: border-box;\n  margin: 0px;\n  padding: 0px;\n  font-family: Helvetica; }\n\nbody, html, main {\n  width: 100%;\n  height: 100%; }\n\n* {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box; }\n\n#troops {\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  flex-direction: column; }\n  #troops .title {\n    text-align: center;\n    color: pink; }\n  #troops .amount {\n    text-align: center; }\n  #troops .troopsContainer {\n    width: 90%;\n    margin-left: auto;\n    margin-right: auto;\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: row;\n    flex-wrap: wrap;\n    text-align: center; }\n    #troops .troopsContainer .troop {\n      width: 100px;\n      margin: 15px; }\n      #troops .troopsContainer .troop .imageHolder {\n        background-image: url(\"../img/fox_without_bg.svg\");\n        background-size: cover;\n        border: 1px solid black;\n        width: 100px;\n        height: 100px; }\n      #troops .troopsContainer .troop .troopData {\n        position: absolute;\n        width: 100px;\n        height: 50px;\n        background: white;\n        border: 1px solid black;\n        border-top: 0px solid black;\n        display: flex;\n        flex-direction: row;\n        flex-wrap: nowrap;\n        align-items: center; }\n        #troops .troopsContainer .troop .troopData .hp, #troops .troopsContainer .troop .troopData .attack, #troops .troopsContainer .troop .troopData .defense, #troops .troopsContainer .troop .troopData .level {\n          width: 25%; }\n\n#overview-site {\n  background-image: url(\"http://www.babaimage.com/images/download-wallpaper-1920x1080-minimalism-sky-clouds-sun-mountains.jpg\");\n  height: 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n  #overview-site .kingdom {\n    text-align: center;\n    color: white;\n    padding-bottom: 30px;\n    font-size: 3em; }\n  #overview-site .container {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    padding-left: 8%;\n    padding-right: 8%; }\n    #overview-site .container .column {\n      width: 30%;\n      background-color: rgba(240, 240, 240, 0.8);\n      border-radius: 10px;\n      padding: 15px;\n      padding-top: 20px;\n      padding-bottom: 20px;\n      display: flex;\n      flex-direction: column; }\n      #overview-site .container .column h1 {\n        padding-bottom: 40px;\n        text-align: center;\n        font-size: 2em; }\n      #overview-site .container .column .list {\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between; }\n        #overview-site .container .column .list .buildings-type {\n          width: 20%;\n          padding-bottom: 20%;\n          margin: 20px;\n          background-size: cover;\n          background-repeat: no-repeat;\n          background-position: center center; }\n    #overview-site .container .troops .name {\n      width: 60%;\n      font-weight: normal;\n      padding-top: 10%; }\n    #overview-site .container .troops .troops-num {\n      font-size: 60px;\n      text-align: center;\n      font-weight: bold; }\n    #overview-site .container .troops .troops-imageContainer {\n      display: flex;\n      flex-direction: row;\n      width: 100%;\n      flex-wrap: wrap; }\n      #overview-site .container .troops .troops-imageContainer .troops-image {\n        width: 20%;\n        padding-bottom: 20%;\n        margin: 10px;\n        background-image: url(\"http://image.flaticon.com/icons/svg/194/194638.svg\");\n        background-size: cover;\n        background-repeat: no-repeat;\n        background-position: center center; }\n\n#login-site {\n  width: 100%;\n  height: 100%;\n  padding-top: 20%;\n  background-size: cover;\n  background-image: url(\"img/fox2.gif\");\n  background-repeat: no-repeat;\n  background-position: center; }\n  #login-site .registration-button {\n    position: absolute;\n    top: 3%;\n    right: 3%;\n    padding: 8px;\n    padding-left: 10px;\n    padding-right: 10px;\n    border-radius: 3px;\n    border: 0px solid transparent;\n    background-color: black;\n    color: white; }\n  #login-site .login-window {\n    width: 20%;\n    margin: auto;\n    border-radius: 5px;\n    transform-origin: center center; }\n    #login-site .login-window input {\n      width: 100%;\n      display: block;\n      padding: 10px;\n      border: 0px solid white;\n      background-color: rgba(255, 255, 255, 0.9); }\n    #login-site .login-window #login-name {\n      border-bottom: 1px solid rgba(150, 150, 150, 0.7);\n      border-top-left-radius: 5px;\n      border-top-right-radius: 5px; }\n    #login-site .login-window #login-password {\n      border-bottom: 1px solid rgba(150, 150, 150, 0.7);\n      border-bottom-left-radius: 5px;\n      border-bottom-right-radius: 5px; }\n    #login-site .login-window #login-button {\n      margin-top: 10px;\n      border-radius: 5px;\n      background-color: black;\n      color: white;\n      font-weight: bold; }\n    #login-site .login-window #login-site input.ng-invalid.ng-touched {\n      /*background-color: rgba(255, 0, 0, .9);                       /* please replace it with a real color :) */\n      border: 2px solid #d36f35 !important; }\n\n#reg-site {\n  width: 100%;\n  height: 100%;\n  padding-top: 20%;\n  background-size: cover;\n  background-image: url(\"img/fox2.gif\");\n  background-repeat: no-repeat;\n  background-position: center; }\n  #reg-site .login-button {\n    position: absolute;\n    top: 3%;\n    right: 3%;\n    padding: 8px;\n    padding-left: 10px;\n    padding-right: 10px;\n    border-radius: 3px;\n    border: 0px solid transparent;\n    background-color: black;\n    color: white; }\n  #reg-site .reg-window {\n    width: 20%;\n    margin: auto;\n    border-radius: 5px;\n    transform-origin: center center; }\n    #reg-site .reg-window input {\n      width: 100%;\n      display: block;\n      padding: 10px;\n      border: 0px solid white;\n      background-color: rgba(255, 255, 255, 0.9); }\n    #reg-site .reg-window #reg-name {\n      border-bottom: 1px solid rgba(150, 150, 150, 0.7);\n      border-top-left-radius: 5px;\n      border-top-right-radius: 5px; }\n    #reg-site .reg-window #reg-kingdom {\n      border-bottom: 1px solid rgba(150, 150, 150, 0.7); }\n    #reg-site .reg-window #reg-password {\n      border-bottom: 1px solid rgba(150, 150, 150, 0.7);\n      border-bottom-left-radius: 5px;\n      border-bottom-right-radius: 5px; }\n    #reg-site .reg-window #reg-button {\n      margin-top: 10px;\n      border-radius: 5px;\n      background-color: black;\n      color: white;\n      font-weight: bold; }\n\n#menu-bar {\n  background-color: white;\n  height: 60px;\n  margin-bottom: 40px;\n  padding: 5px; }\n  #menu-bar .menu {\n    height: 50px;\n    list-style: none;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    flex-wrap: nowrap;\n    padding-right: 20px;\n    padding-left: 10px;\n    margin-right: 25px;\n    margin-left: 25px; }\n    #menu-bar .menu .menu-list {\n      width: 80%;\n      display: flex;\n      flex-direction: row;\n      justify-content: flex-start; }\n      #menu-bar .menu .menu-list .menu-elem {\n        list-style: none;\n        margin: 5px;\n        padding: 10px;\n        text-decoration: none;\n        background-color: black;\n        color: white; }\n    #menu-bar .menu .drop-down-menu .drop-down-menu-icon {\n      width: auto;\n      height: 50px; }\n      #menu-bar .menu .drop-down-menu .drop-down-menu-icon .drop-down-menu-username {\n        display: inline-block;\n        height: 50px;\n        width: auto;\n        padding: 5px;\n        padding-right: 10px;\n        vertical-align: top;\n        line-height: 40px; }\n      #menu-bar .menu .drop-down-menu .drop-down-menu-icon .drop-down-menu-avatar {\n        width: 50px;\n        height: 50px;\n        background-image: url(\"http://image.flaticon.com/icons/svg/194/194638.svg\");\n        background-size: cover;\n        background-position: center center;\n        display: inline-block; }\n    #menu-bar .menu .drop-down-menu .drop-down-menu-body {\n      position: absolute;\n      top: 60px;\n      right: 50px; }\n      #menu-bar .menu .drop-down-menu .drop-down-menu-body .drop-down-menu-row {\n        height: 40px;\n        width: 150px;\n        background-color: rgba(255, 255, 255, 0.8);\n        color: black;\n        padding: 12px;\n        list-style: none; }\n        #menu-bar .menu .drop-down-menu .drop-down-menu-body .drop-down-menu-row:first-child {\n          border-bottom: 1px solid white; }\n        #menu-bar .menu .drop-down-menu .drop-down-menu-body .drop-down-menu-row .drop-down-menu-link {\n          text-decoration: none;\n          color: black; }\n          #menu-bar .menu .drop-down-menu .drop-down-menu-body .drop-down-menu-row .drop-down-menu-link:hover {\n            color: purple; }\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var css = __webpack_require__(0)
var fox1 = __webpack_require__(1)


/***/ })
/******/ ]);