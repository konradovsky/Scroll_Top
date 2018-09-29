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
eval("__webpack_require__.r(__webpack_exports__);\n// Adding content and styles\nconst addClass = (element, cssClass) => element.classList.add(cssClass);\nconst addInput = (element, inputText) => element.textContent = inputText;\n\n// Create and render item\nconst createElement = element => document.createElement(element);\nconst renderElement = element => document.body.appendChild(element);\n\n// Visibility\nconst showElement = element => element.classList.remove(\"hidden\");\nconst hideElement = element => element.classList.add(\"hidden\");\n    \n// Animation for scroll\nconst scrollToHeight = height => document.documentElement.scrollTop = height;\n\nconst buttonVisibility = (activationHeight, element) => {\n    const heightFromTop = document.documentElement.scrollTop;\n    (heightFromTop >= activationHeight) ? showElement(element) : hideElement(element);\n}\n\nconst buildElement = (elementType, initialClass, elementText, activation) => {\n    const element = createElement(elementType);\n\n    addClass(element, initialClass);\n    addInput(element, elementText);\n    hideElement(element);\n    renderElement(element);\n\n    element.addEventListener(\"click\", () => scrollToHeight(0));\n    window.addEventListener(\"scroll\", () => buttonVisibility(activation, element));\n\n    return element;\n}\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (buildElement);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JpcHQvY3JlYXRlRWxlbWVudC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NjcmlwdC9jcmVhdGVFbGVtZW50LmpzP2VlNjUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQWRkaW5nIGNvbnRlbnQgYW5kIHN0eWxlc1xuY29uc3QgYWRkQ2xhc3MgPSAoZWxlbWVudCwgY3NzQ2xhc3MpID0+IGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XG5jb25zdCBhZGRJbnB1dCA9IChlbGVtZW50LCBpbnB1dFRleHQpID0+IGVsZW1lbnQudGV4dENvbnRlbnQgPSBpbnB1dFRleHQ7XG5cbi8vIENyZWF0ZSBhbmQgcmVuZGVyIGl0ZW1cbmNvbnN0IGNyZWF0ZUVsZW1lbnQgPSBlbGVtZW50ID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG5jb25zdCByZW5kZXJFbGVtZW50ID0gZWxlbWVudCA9PiBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4vLyBWaXNpYmlsaXR5XG5jb25zdCBzaG93RWxlbWVudCA9IGVsZW1lbnQgPT4gZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuY29uc3QgaGlkZUVsZW1lbnQgPSBlbGVtZW50ID0+IGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICBcbi8vIEFuaW1hdGlvbiBmb3Igc2Nyb2xsXG5jb25zdCBzY3JvbGxUb0hlaWdodCA9IGhlaWdodCA9PiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gaGVpZ2h0O1xuXG5jb25zdCBidXR0b25WaXNpYmlsaXR5ID0gKGFjdGl2YXRpb25IZWlnaHQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBoZWlnaHRGcm9tVG9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAoaGVpZ2h0RnJvbVRvcCA+PSBhY3RpdmF0aW9uSGVpZ2h0KSA/IHNob3dFbGVtZW50KGVsZW1lbnQpIDogaGlkZUVsZW1lbnQoZWxlbWVudCk7XG59XG5cbmNvbnN0IGJ1aWxkRWxlbWVudCA9IChlbGVtZW50VHlwZSwgaW5pdGlhbENsYXNzLCBlbGVtZW50VGV4dCwgYWN0aXZhdGlvbikgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlKTtcblxuICAgIGFkZENsYXNzKGVsZW1lbnQsIGluaXRpYWxDbGFzcyk7XG4gICAgYWRkSW5wdXQoZWxlbWVudCwgZWxlbWVudFRleHQpO1xuICAgIGhpZGVFbGVtZW50KGVsZW1lbnQpO1xuICAgIHJlbmRlckVsZW1lbnQoZWxlbWVudCk7XG5cbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBzY3JvbGxUb0hlaWdodCgwKSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4gYnV0dG9uVmlzaWJpbGl0eShhY3RpdmF0aW9uLCBlbGVtZW50KSk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkRWxlbWVudDtcblxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./script/createElement.js\n");

/***/ }),

/***/ "./script/script.js":
/*!**************************!*\
  !*** ./script/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./script/createElement.js\");\n\n\n(function(){\n\n    // buildElement(\n    //    HTML tag: string,\n    //    added class: string, \n    //    text: string, \n    //    height: number\n    // )\n    const button = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"button\", \"scroll-button\", \"Scroll Up\", 100 );\n\n})();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JpcHQvc2NyaXB0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc2NyaXB0L3NjcmlwdC5qcz80N2JjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBidWlsZEVsZW1lbnQgZnJvbSAnLi9jcmVhdGVFbGVtZW50JztcblxuKGZ1bmN0aW9uKCl7XG5cbiAgICAvLyBidWlsZEVsZW1lbnQoXG4gICAgLy8gICAgSFRNTCB0YWc6IHN0cmluZyxcbiAgICAvLyAgICBhZGRlZCBjbGFzczogc3RyaW5nLCBcbiAgICAvLyAgICB0ZXh0OiBzdHJpbmcsIFxuICAgIC8vICAgIGhlaWdodDogbnVtYmVyXG4gICAgLy8gKVxuICAgIGNvbnN0IGJ1dHRvbiA9IGJ1aWxkRWxlbWVudChcImJ1dHRvblwiLCBcInNjcm9sbC1idXR0b25cIiwgXCJTY3JvbGwgVXBcIiwgMTAwICk7XG5cbn0pKCk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./script/script.js\n");

/***/ })

/******/ });