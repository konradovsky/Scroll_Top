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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst createElementTools = {\n    addClass:(element, cssClass) => element.classList.add(cssClass),\n    addInput:(element, inputText) => element.textContent = inputText,\n    createElement: element => document.createElement(element),\n    renderElement: element => document.body.appendChild(element),\n    showElement: element => element.classList.remove(\"hidden\"),\n    hideElement: element => element.classList.add(\"hidden\"),\n    scrollToHeight: height => document.documentElement.scrollTop = height\n\n}\n\nconst buildElement = (elementType, initialClass, elementText, activation) => {\n    const element = createElementTools.createElement(elementType);\n    createElementTools.addClass(element, initialClass);\n    createElementTools.addInput(element, elementText);\n    createElementTools.hideElement(element);\n    createElementTools.renderElement(element);\n\n    element.addEventListener(\"click\", e => createElementTools.scrollToHeight(0));\n    window.addEventListener(\"scroll\", e => buttonVisibility(activation, element), false);\n\n    return element;\n}\n\nconst buttonVisibility = (activationHeight, element) => {\n    const heightFromTop = document.documentElement.scrollTop;\n\n    if(heightFromTop >= activationHeight){\n        createElementTools.showElement(element);\n    } else {\n        createElementTools.hideElement(element);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (buildElement);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JpcHQvY3JlYXRlRWxlbWVudC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NjcmlwdC9jcmVhdGVFbGVtZW50LmpzP2VlNjUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlRWxlbWVudFRvb2xzID0ge1xuICAgIGFkZENsYXNzOihlbGVtZW50LCBjc3NDbGFzcykgPT4gZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKSxcbiAgICBhZGRJbnB1dDooZWxlbWVudCwgaW5wdXRUZXh0KSA9PiBlbGVtZW50LnRleHRDb250ZW50ID0gaW5wdXRUZXh0LFxuICAgIGNyZWF0ZUVsZW1lbnQ6IGVsZW1lbnQgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KSxcbiAgICByZW5kZXJFbGVtZW50OiBlbGVtZW50ID0+IGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCksXG4gICAgc2hvd0VsZW1lbnQ6IGVsZW1lbnQgPT4gZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpLFxuICAgIGhpZGVFbGVtZW50OiBlbGVtZW50ID0+IGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKSxcbiAgICBzY3JvbGxUb0hlaWdodDogaGVpZ2h0ID0+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSBoZWlnaHRcblxufVxuXG5jb25zdCBidWlsZEVsZW1lbnQgPSAoZWxlbWVudFR5cGUsIGluaXRpYWxDbGFzcywgZWxlbWVudFRleHQsIGFjdGl2YXRpb24pID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlRWxlbWVudFRvb2xzLmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUpO1xuICAgIGNyZWF0ZUVsZW1lbnRUb29scy5hZGRDbGFzcyhlbGVtZW50LCBpbml0aWFsQ2xhc3MpO1xuICAgIGNyZWF0ZUVsZW1lbnRUb29scy5hZGRJbnB1dChlbGVtZW50LCBlbGVtZW50VGV4dCk7XG4gICAgY3JlYXRlRWxlbWVudFRvb2xzLmhpZGVFbGVtZW50KGVsZW1lbnQpO1xuICAgIGNyZWF0ZUVsZW1lbnRUb29scy5yZW5kZXJFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiBjcmVhdGVFbGVtZW50VG9vbHMuc2Nyb2xsVG9IZWlnaHQoMCkpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGUgPT4gYnV0dG9uVmlzaWJpbGl0eShhY3RpdmF0aW9uLCBlbGVtZW50KSwgZmFsc2UpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmNvbnN0IGJ1dHRvblZpc2liaWxpdHkgPSAoYWN0aXZhdGlvbkhlaWdodCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGhlaWdodEZyb21Ub3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXG4gICAgaWYoaGVpZ2h0RnJvbVRvcCA+PSBhY3RpdmF0aW9uSGVpZ2h0KXtcbiAgICAgICAgY3JlYXRlRWxlbWVudFRvb2xzLnNob3dFbGVtZW50KGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNyZWF0ZUVsZW1lbnRUb29scy5oaWRlRWxlbWVudChlbGVtZW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkRWxlbWVudDtcblxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./script/createElement.js\n");

/***/ }),

/***/ "./script/script.js":
/*!**************************!*\
  !*** ./script/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./script/createElement.js\");\n\n\n(function(){\n\n    // buildElement(\n    //    HTML tag: string,\n    //    added class: string, \n    //    text: string, \n    //    height: number\n    // )\n\n    const button = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"button\", \"scroll-button\", \"Scroll Up\", 100 );\n\n})();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JpcHQvc2NyaXB0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc2NyaXB0L3NjcmlwdC5qcz80N2JjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBidWlsZEVsZW1lbnQgZnJvbSAnLi9jcmVhdGVFbGVtZW50JztcblxuKGZ1bmN0aW9uKCl7XG5cbiAgICAvLyBidWlsZEVsZW1lbnQoXG4gICAgLy8gICAgSFRNTCB0YWc6IHN0cmluZyxcbiAgICAvLyAgICBhZGRlZCBjbGFzczogc3RyaW5nLCBcbiAgICAvLyAgICB0ZXh0OiBzdHJpbmcsIFxuICAgIC8vICAgIGhlaWdodDogbnVtYmVyXG4gICAgLy8gKVxuXG4gICAgY29uc3QgYnV0dG9uID0gYnVpbGRFbGVtZW50KFwiYnV0dG9uXCIsIFwic2Nyb2xsLWJ1dHRvblwiLCBcIlNjcm9sbCBVcFwiLCAxMDAgKTtcblxufSkoKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./script/script.js\n");

/***/ })

/******/ });