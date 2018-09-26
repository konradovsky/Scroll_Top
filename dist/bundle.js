/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./script/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./script/createElement.js":
/*!*********************************!*\
  !*** ./script/createElement.js ***!
  \*********************************/
/*! exports provided: addClass, addInput, createElement, renderElement, showElement, hideElement, scrollToHeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addClass\", function() { return addClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addInput\", function() { return addInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderElement\", function() { return renderElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showElement\", function() { return showElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hideElement\", function() { return hideElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scrollToHeight\", function() { return scrollToHeight; });\nconst addClass = (element, cssClass) => element.classList.add(cssClass);\nconst addInput = (element, inputText) => element.textContent = inputText;\nconst createElement = element => document.createElement(element);\nconst renderElement =  element => document.body.appendChild(element);\nconst showElement = element => element.classList.remove(\"hidden\");\nconst hideElement = element => element.classList.add(\"hidden\");\nconst scrollToHeight = height => document.documentElement.scrollTop = height;\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JpcHQvY3JlYXRlRWxlbWVudC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NjcmlwdC9jcmVhdGVFbGVtZW50LmpzP2VlNjUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYWRkQ2xhc3MgPSAoZWxlbWVudCwgY3NzQ2xhc3MpID0+IGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XG5jb25zdCBhZGRJbnB1dCA9IChlbGVtZW50LCBpbnB1dFRleHQpID0+IGVsZW1lbnQudGV4dENvbnRlbnQgPSBpbnB1dFRleHQ7XG5jb25zdCBjcmVhdGVFbGVtZW50ID0gZWxlbWVudCA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuY29uc3QgcmVuZGVyRWxlbWVudCA9ICBlbGVtZW50ID0+IGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5jb25zdCBzaG93RWxlbWVudCA9IGVsZW1lbnQgPT4gZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuY29uc3QgaGlkZUVsZW1lbnQgPSBlbGVtZW50ID0+IGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbmNvbnN0IHNjcm9sbFRvSGVpZ2h0ID0gaGVpZ2h0ID0+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSBoZWlnaHQ7XG5cbmV4cG9ydCB7XG4gICAgYWRkQ2xhc3MsXG4gICAgYWRkSW5wdXQsXG4gICAgY3JlYXRlRWxlbWVudCxcbiAgICByZW5kZXJFbGVtZW50LFxuICAgIHNob3dFbGVtZW50LFxuICAgIGhpZGVFbGVtZW50LFxuICAgIHNjcm9sbFRvSGVpZ2h0XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./script/createElement.js\n");

/***/ }),

/***/ "./script/script.js":
/*!**************************!*\
  !*** ./script/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./script/createElement.js\");\n\n\n(function(){\n\n    const buildElement = (elementType, initialClass, elementText) => {\n\n        const element = _createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](elementType);\n        _createElement__WEBPACK_IMPORTED_MODULE_0__[\"addClass\"](element, initialClass);\n        _createElement__WEBPACK_IMPORTED_MODULE_0__[\"addInput\"](element, elementText);\n        _createElement__WEBPACK_IMPORTED_MODULE_0__[\"hideElement\"](element);\n        _createElement__WEBPACK_IMPORTED_MODULE_0__[\"renderElement\"](element);\n\n        return element;\n    }\n\n    const buttonVisibility = (activationHeight, element) => {\n\n        const heightFromTop = document.documentElement.scrollTop;\n\n        if(heightFromTop >= activationHeight){\n            _createElement__WEBPACK_IMPORTED_MODULE_0__[\"showElement\"](element);\n        } else {\n            _createElement__WEBPACK_IMPORTED_MODULE_0__[\"hideElement\"](element);\n        }\n    }\n\n    const button = buildElement(\"button\", \"scroll-button\", \"Scroll Up\" );\n\n    button.addEventListener(\"click\", e => _createElement__WEBPACK_IMPORTED_MODULE_0__[\"scrollToHeight\"](0));\n    window.addEventListener(\"scroll\", e => buttonVisibility(100, button), false);\n\n})();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JpcHQvc2NyaXB0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc2NyaXB0L3NjcmlwdC5qcz80N2JjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNyZWF0ZSBmcm9tICcuL2NyZWF0ZUVsZW1lbnQnO1xuXG4oZnVuY3Rpb24oKXtcblxuICAgIGNvbnN0IGJ1aWxkRWxlbWVudCA9IChlbGVtZW50VHlwZSwgaW5pdGlhbENsYXNzLCBlbGVtZW50VGV4dCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGUuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSk7XG4gICAgICAgIGNyZWF0ZS5hZGRDbGFzcyhlbGVtZW50LCBpbml0aWFsQ2xhc3MpO1xuICAgICAgICBjcmVhdGUuYWRkSW5wdXQoZWxlbWVudCwgZWxlbWVudFRleHQpO1xuICAgICAgICBjcmVhdGUuaGlkZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgIGNyZWF0ZS5yZW5kZXJFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGJ1dHRvblZpc2liaWxpdHkgPSAoYWN0aXZhdGlvbkhlaWdodCwgZWxlbWVudCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGhlaWdodEZyb21Ub3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXG4gICAgICAgIGlmKGhlaWdodEZyb21Ub3AgPj0gYWN0aXZhdGlvbkhlaWdodCl7XG4gICAgICAgICAgICBjcmVhdGUuc2hvd0VsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjcmVhdGUuaGlkZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBidXR0b24gPSBidWlsZEVsZW1lbnQoXCJidXR0b25cIiwgXCJzY3JvbGwtYnV0dG9uXCIsIFwiU2Nyb2xsIFVwXCIgKTtcblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiBjcmVhdGUuc2Nyb2xsVG9IZWlnaHQoMCkpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGUgPT4gYnV0dG9uVmlzaWJpbGl0eSgxMDAsIGJ1dHRvbiksIGZhbHNlKTtcblxufSkoKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./script/script.js\n");

/***/ })

/******/ });