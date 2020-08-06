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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/Console/main.js":
/*!********************************!*\
  !*** ./src/js/Console/main.js ***!
  \********************************/
/*! exports provided: Console */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Console\", function() { return Console; });\nclass Console {\n  serverData(content) {\n    console.log(\"%c\" + \"[SERVER]: \", \"color:\" + \"DodgerBlue\", content);\n  }\n\n  error(content) {\n    console.log(\"%c\" + \"[ERROR]: \", \"color:\" + \"Red\", content);\n  }\n\n  socket(content) {\n    console.log(\"%c\" + \"[SOCKET]: \", \"color:\" + \"Orange\", content);\n  }\n\n  data(content) {\n    console.log(\"%c\" + \"[File]: \", \"color:\" + \"Green\", content);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/js/Console/main.js?");

/***/ }),

/***/ "./src/js/Editor/Controller/main.js":
/*!******************************************!*\
  !*** ./src/js/Editor/Controller/main.js ***!
  \******************************************/
/*! exports provided: Controller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Controller\", function() { return Controller; });\n/* harmony import */ var _Neuron_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.././Neuron/main.js */ \"./src/js/Neuron/main.js\");\n\nclass Controller {\n  constructor(canvas) {\n    this.mouse = {\n      x: 0,\n      y: 0,\n      clicking: false,\n      cursorType: \"default\",\n      updateCursor: () => {\n        document.body.style.cursor = this.mouse.cursorType;\n      },\n\n      set cursor(type) {\n        console.log(\"s\");\n        this.cursorType = type;\n        this.updateCursor();\n      },\n\n      get cursor() {\n        return this.cursorType;\n      }\n\n    };\n    this.checkKeys = [];\n    this.keysObject = {};\n    this.canvas = canvas.c;\n    this.boundingRect = canvas.c.getBoundingClientRect();\n    this.init();\n  }\n\n  convertKeyCodeToString(keycode) {\n    return String.fromCharCode(96 <= keycode && key <= 105 ? keycode - 48 : keycode);\n  }\n\n  addKey(key) {\n    this.keysObject[this.convertKeyCodeToString(key)] = false;\n    this.checkKeys.push(key);\n  }\n\n  checkClicking() {\n    document.addEventListener(\"mousedown\", e => {\n      this.mouse.clicking = true;\n      this.mouse.x = e.clientX - this.boundingRect.left;\n      this.mouse.y = e.clientY - this.boundingRect.top;\n    }), document.addEventListener(\"mouseup\", e => {\n      this.mouse.clicking = false;\n      this.mouse.x = e.clientX - this.boundingRect.left;\n      this.mouse.y = e.clientY - this.boundingRect.top;\n    });\n  }\n\n  keys() {\n    document.addEventListener(\"keydown\", e => {\n      this.checkKeys.forEach(key => {\n        this.keysObject[this.convertKeyCodeToString(key)] = e.keyCode == key;\n      });\n    }), document.addEventListener(\"keyup\", e => {\n      this.checkKeys.forEach(key => {\n        this.keysObject[this.convertKeyCodeToString(key)] = e.keyCode == key ? false : true;\n      });\n    });\n  }\n\n  mouseMove() {\n    document.addEventListener(\"mousemove\", e => {\n      this.mouse.x = e.clientX - this.boundingRect.left;\n      this.mouse.y = e.clientY - this.boundingRect.top;\n    });\n  }\n\n  init() {\n    _Neuron_main_js__WEBPACK_IMPORTED_MODULE_0__[\"CNS\"].on(\"resize\", () => {\n      this.boundingRect = this.canvas.getBoundingClientRect();\n    });\n    this.checkClicking();\n    this.keys();\n    this.mouseMove();\n  }\n\n}\n\n//# sourceURL=webpack:///./src/js/Editor/Controller/main.js?");

/***/ }),

/***/ "./src/js/Editor/Shape/Rect.js":
/*!*************************************!*\
  !*** ./src/js/Editor/Shape/Rect.js ***!
  \*************************************/
/*! exports provided: Rect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Rect\", function() { return Rect; });\n/* harmony import */ var _libs_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/utils.js */ \"./src/js/Editor/libs/utils.js\");\n\nclass Rect {\n  constructor(param = false) {\n    this.x = param.x || 0;\n    this.y = param.y || 0;\n    this.fill = param.fill || true;\n    this.stroke = param.fill || false;\n    this.uuid = Math.random();\n    this.w = param.w || 100;\n    this.h = param.h || 100;\n    this.globalAlpha = param.globalAlpha || 1;\n    this.fillStyle = param.fillStyle || \"#000\";\n    this.strokeStyle = param.strokeStyle || \"#000\";\n    this.selected = false;\n    this.hovered = false;\n    this.hoveredColor = \"#59c275\";\n    this.clickedColor = \"#f03278\";\n    this.strechPoints = [];\n  }\n\n  checkMouse(mouse) {\n    if (_libs_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"utils\"].mouseCollidsRect(this, mouse.x, mouse.y)) {\n      if (mouse.clicking) {\n        this.selected = true;\n        mouse.cursor = \"move\";\n        return this;\n      } else {\n        this.hovered = true;\n        mouse.cursor = \"pointer\";\n        return null;\n      }\n    } else if (mouse.cursor !== \"default\") {\n      this.hovered = false;\n      mouse.cursor = \"default\";\n      return null;\n    } else {\n      this.hovered = false;\n      return null;\n    }\n  }\n\n  addStrechPoints() {}\n\n  updateCtx(ctx) {\n    ctx.save();\n    ctx.globalAlpha = this.globalAlpha;\n    ctx.fillStyle = this.fillStyle;\n    ctx.strokeStyle = this.strokeStyle;\n  }\n\n  hoveredStroke(ctx) {\n    this.updateCtx(ctx);\n    ctx.strokeStyle = this.hoveredColor;\n    ctx.lineWidth = 6;\n    ctx.strokeRect(this.x, this.y, this.w, this.h);\n    ctx.restore();\n  }\n\n  clickedStroke(ctx) {\n    this.updateCtx(ctx);\n    ctx.strokeStyle = this.clickedColor;\n    ctx.lineWidth = 6;\n    ctx.strokeRect(this.x, this.y, this.w, this.h);\n    ctx.restore();\n  }\n\n  render(ctx) {\n    this.hovered && this.hoveredStroke(ctx);\n    this.selected && this.clickedStroke(ctx);\n    this.updateCtx(ctx);\n    ctx.beginPath();\n    ctx.rect(this.x, this.y, this.w, this.h);\n    this.fill && ctx.fill();\n    this.stroke && ctx.stroke();\n    ctx.closePath();\n    ctx.restore();\n  }\n\n}\n\n//# sourceURL=webpack:///./src/js/Editor/Shape/Rect.js?");

/***/ }),

/***/ "./src/js/Editor/Shape/main.js":
/*!*************************************!*\
  !*** ./src/js/Editor/Shape/main.js ***!
  \*************************************/
/*! exports provided: Rect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Rect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rect.js */ \"./src/js/Editor/Shape/Rect.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Rect\", function() { return _Rect_js__WEBPACK_IMPORTED_MODULE_0__[\"Rect\"]; });\n\n\n\n//# sourceURL=webpack:///./src/js/Editor/Shape/main.js?");

/***/ }),

/***/ "./src/js/Editor/libs/utils.js":
/*!*************************************!*\
  !*** ./src/js/Editor/libs/utils.js ***!
  \*************************************/
/*! exports provided: utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"utils\", function() { return utils; });\nconst utils = {\n  mouseCollidsRect: (rect, x, y) => {\n    console.log(x, y);\n    let isCollision = false;\n    let left = rect.x,\n        right = rect.x + rect.w;\n    let top = rect.y,\n        bottom = rect.y + rect.h;\n\n    if (right >= x && left <= x && bottom >= y && top <= y) {\n      isCollision = rect;\n    }\n\n    return isCollision;\n  }\n};\n\n\n//# sourceURL=webpack:///./src/js/Editor/libs/utils.js?");

/***/ }),

/***/ "./src/js/Editor/main.js":
/*!*******************************!*\
  !*** ./src/js/Editor/main.js ***!
  \*******************************/
/*! exports provided: Editor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Editor\", function() { return Editor; });\n/* harmony import */ var _Renderer_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Renderer/main.js */ \"./src/js/Renderer/main.js\");\n/* harmony import */ var _Shape_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Shape/main.js */ \"./src/js/Editor/Shape/main.js\");\n/* harmony import */ var _Controller_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Controller/main.js */ \"./src/js/Editor/Controller/main.js\");\n\n\n\nconst renderer = new _Renderer_main_js__WEBPACK_IMPORTED_MODULE_0__[\"Renderer\"]({\n  w: 500,\n  h: 500\n});\n\n(async () => {\n  await renderer._init_();\n})();\n\nclass Editor {\n  constructor() {\n    this.renderer = renderer;\n    this.ctx = this.renderer.ctx;\n    this.canvas = this.renderer.canvas;\n    this.canvasColor = \"#fff\";\n    this.helper = this.renderer.helper;\n    this.updateInterval = null;\n    this.controller = new _Controller_main_js__WEBPACK_IMPORTED_MODULE_2__[\"Controller\"](this.canvas);\n    this.shapes = [];\n    this.keyCodes = [\"r\", \"c\", \"t\"];\n    this.init();\n    this.addRect();\n    this.selectedObject = null;\n  } //gui methods\n\n\n  addRect() {\n    this.shapes.push(new _Shape_main_js__WEBPACK_IMPORTED_MODULE_1__[\"Rect\"]({\n      x: 50,\n      y: 50,\n      w: 200,\n      h: 200,\n      fillStyle: \"#12f5as\",\n      strokeStyle: \"#000\",\n      globalAlpha: 0.5\n    }));\n  } //editor logic\n\n\n  checkMouseOver() {\n    this.shapes.forEach(shape => {\n      this.selectedObject = shape.checkMouse(this.controller.mouse);\n    });\n    this.shapes.every(shape => !shape.hovered) && this.controller.mouse.clicking && this.shapes.forEach(shape => {\n      shape.hovered = false;\n      this.controller.mouse.cursor = \"default\";\n      shape.selected = false;\n    });\n  } //drawing logic\n\n\n  clearCanvas() {\n    this.helper.clearAll();\n  }\n\n  renderBackground() {\n    let ctx = this.ctx;\n    ctx.save();\n    ctx.fillStyle = this.canvasColor;\n    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n    ctx.restore();\n  }\n\n  renderShapes() {\n    this.shapes.forEach(shape => {\n      shape.render(this.ctx);\n    });\n  } //private methods\n\n\n  _init() {\n    this._initRendering();\n\n    this._initKeys();\n\n    this._initUpdate();\n  }\n\n  _initRendering() {\n    window.requestAnimationFrame(this._initRendering.bind(this));\n    this.clearCanvas();\n    this.renderBackground();\n    this.renderShapes();\n  }\n\n  _initKeys() {\n    this.keyCodes.forEach(code => {\n      this.controller.addKey(code);\n    });\n  }\n\n  _initUpdate() {\n    this.updateInterval = setInterval(() => {\n      this.checkMouseOver();\n    });\n  }\n\n  init() {\n    this._init();\n  }\n\n}\n\n//# sourceURL=webpack:///./src/js/Editor/main.js?");

/***/ }),

/***/ "./src/js/Neuron/main.js":
/*!*******************************!*\
  !*** ./src/js/Neuron/main.js ***!
  \*******************************/
/*! exports provided: CNS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CNS\", function() { return CNS; });\nconst CNS = {\n  called: [],\n  emit: (name, msg = undefined) => {\n    if (typeof msg == \"undefined\") {\n      CNS.called.push(name);\n    }\n  },\n  on: (name, cb) => {\n    setInterval(() => {\n      if (CNS.called.includes(name)) {\n        cb();\n        CNS.called.splice(CNS.called.indexOf(name), 1);\n      }\n    }, 10);\n  }\n};\n\n//# sourceURL=webpack:///./src/js/Neuron/main.js?");

/***/ }),

/***/ "./src/js/Renderer/Canvas.js":
/*!***********************************!*\
  !*** ./src/js/Renderer/Canvas.js ***!
  \***********************************/
/*! exports provided: Canvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Canvas\", function() { return Canvas; });\n/* harmony import */ var _Neuron_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .././Neuron/main.js */ \"./src/js/Neuron/main.js\");\n\nclass Canvas {\n  constructor(dom, max) {\n    this.dom = typeof dom == \"undefined\" ? 1 : dom;\n    this.c = document.createElement(\"canvas\");\n    this.ctx = this.c.getContext(\"2d\");\n    this.widthI = max.maxw;\n    this.heightI = max.maxh;\n  }\n\n  _init_() {\n    if (this.dom == 1) {\n      document.body.insertBefore(this.c, document.body.firstChild);\n    } else {\n      this.dom.insertBefore(this.c, this.dom.firstChild);\n    }\n\n    this.c.width = this.widthI;\n    this.c.height = this.heightI;\n  }\n\n  update() {\n    this.c.width = this.widthI;\n    this.c.height = this.heightI;\n  }\n\n  set width(a) {\n    _Neuron_main_js__WEBPACK_IMPORTED_MODULE_0__[\"CNS\"].emit(\"resize\");\n    this.widthI = a;\n    this.update();\n  }\n\n  set height(a) {\n    _Neuron_main_js__WEBPACK_IMPORTED_MODULE_0__[\"CNS\"].emit(\"resize\");\n    this.heightI = a;\n    this.update();\n  }\n\n  get width() {\n    return this.widthI;\n  }\n\n  get height() {\n    return this.heightI;\n  }\n\n}\n\n//# sourceURL=webpack:///./src/js/Renderer/Canvas.js?");

/***/ }),

/***/ "./src/js/Renderer/DrawingHelpers.js":
/*!*******************************************!*\
  !*** ./src/js/Renderer/DrawingHelpers.js ***!
  \*******************************************/
/*! exports provided: Helper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Helper\", function() { return Helper; });\n/* harmony import */ var _Console_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Console/main.js */ \"./src/js/Console/main.js\");\n\nconst con = new _Console_main_js__WEBPACK_IMPORTED_MODULE_0__[\"Console\"]();\n/**\r\n * Draws a rounded rectangle using the current state of the canvas.\r\n * If you omit the last three params, it will draw a rectangle\r\n * outline with a 5 pixel border radius\r\n * @param {CanvasRenderingContext2D} ctx\r\n * @param {Number} x The top left x coordinate\r\n * @param {Number} y The top left y coordinate\r\n * @param {Number} width The width of the rectangle\r\n * @param {Number} height The height of the rectangle\r\n * @param {Number} [radius = 5] The corner radius; It can also be an object\r\n *                 to specify different radii for corners\r\n * @param {Number} [radius.tl = 0] Top left\r\n * @param {Number} [radius.tr = 0] Top right\r\n * @param {Number} [radius.br = 0] Bottom right\r\n * @param {Number} [radius.bl = 0] Bottom left\r\n * @param {Boolean} [fill = false] Whether to fill the rectangle.\r\n * @param {Boolean} [stroke = true] Whether to stroke the rectangle.\r\n */\n\nfunction roundRect(ctx, x, y, width, height, radius) {\n  if (typeof radius === \"undefined\") {\n    radius = 5;\n  }\n\n  if (typeof radius === \"number\") {\n    radius = {\n      tl: radius,\n      tr: radius,\n      br: radius,\n      bl: radius\n    };\n  } else {\n    var defaultRadius = {\n      tl: 0,\n      tr: 0,\n      br: 0,\n      bl: 0\n    };\n\n    for (var side in defaultRadius) {\n      radius[side] = radius[side] || defaultRadius[side];\n    }\n  }\n\n  ctx.beginPath();\n  ctx.moveTo(x + radius.tl, y);\n  ctx.lineTo(x + width - radius.tr, y);\n  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);\n  ctx.lineTo(x + width, y + height - radius.br);\n  ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);\n  ctx.lineTo(x + radius.bl, y + height);\n  ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);\n  ctx.lineTo(x, y + radius.tl);\n  ctx.quadraticCurveTo(x, y, x + radius.tl, y);\n  ctx.closePath();\n  ctx.fill();\n  ctx.stroke();\n}\n\nclass Helper {\n  constructor(c) {\n    this.c = c;\n    this.fill = \"black\";\n    this.stroke = \"black\";\n  }\n\n  clearAll() {\n    let ctx = this.c.c.getContext(\"2d\");\n    ctx.clearRect(0, 0, this.c.width, this.c.height);\n  }\n\n  scale(ap, ap1) {\n    let ctx = this.c.c.getContext(\"2d\");\n    ctx.scale(ap, ap1);\n  }\n\n  drawSquare(obj) {\n    let ctx = this.c.c.getContext(\"2d\");\n    ctx.beginPath();\n    ctx.rect(obj.x, obj.y, obj.w, obj.h);\n    ctx.fill();\n    ctx.stroke();\n    ctx.closePath();\n  }\n\n  drawCircle(obj) {\n    let ctx = this.c.c.getContext(\"2d\");\n    ctx.beginPath();\n    ctx.globalAlpha = obj.ga;\n    ctx.arc(obj.x, obj.y, obj.r, 0, 2 * Math.PI);\n    ctx.fill();\n    ctx.closePath();\n  }\n\n  fill(color) {\n    this.fill = typeof color == \"string\" ? color : \"black\";\n  }\n\n  stroke(color) {\n    this.stroke = typeof color == \"string\" ? color : \"black\";\n  }\n\n  roundRect(ctx, x, y, width, height, radius) {\n    roundRect(ctx, x, y, width, height, radius);\n  }\n\n  resizeSet(max) {\n    window.onresize = () => {\n      this.c.width = max.maxw;\n      this.c.height = max.maxh;\n      con.data(\"Resized!\");\n    };\n  }\n\n  drawGrid(cam, w, h) {\n    let ap = 1;\n    let ctx = this.c.getContext(\"2d\"),\n        step = 40 * cam.zoom;\n    ctx.beginPath();\n    ctx.strokeStyle = \"#787878\";\n    ctx.lineJoin = \"miter\";\n    ctx.lineWidth = 3 * cam.zoom;\n    ctx.shadowBlur = 0;\n    ctx.globalAlpha = 0.5;\n\n    for (let x = 0 - cam.x - w; x <= w; x += step) {\n      ctx.moveTo(x, 0);\n      ctx.lineTo(x, h);\n    }\n\n    for (let y = 0 - cam.y - h; y <= h; y += step) {\n      ctx.moveTo(0, y);\n      ctx.lineTo(w, y);\n    }\n\n    ctx.stroke();\n  }\n\n}\n\n//# sourceURL=webpack:///./src/js/Renderer/DrawingHelpers.js?");

/***/ }),

/***/ "./src/js/Renderer/main.js":
/*!*********************************!*\
  !*** ./src/js/Renderer/main.js ***!
  \*********************************/
/*! exports provided: Renderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Renderer\", function() { return Renderer; });\n/* harmony import */ var _Canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas.js */ \"./src/js/Renderer/Canvas.js\");\n/* harmony import */ var _DrawingHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DrawingHelpers.js */ \"./src/js/Renderer/DrawingHelpers.js\");\n/* harmony import */ var _Console_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Console/main.js */ \"./src/js/Console/main.js\");\n\n\n\nconst con = new _Console_main_js__WEBPACK_IMPORTED_MODULE_2__[\"Console\"]();\nclass Renderer {\n  constructor(max) {\n    this.ctx = 0;\n    this.canvas = 0;\n    this.helper = 0;\n    this.maxw = max.w;\n    this.maxh = max.h;\n  }\n\n  _init_(dom) {\n    return new Promise((resolve, reject) => {\n      try {\n        let canvas = new _Canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"Canvas\"](dom, this);\n\n        canvas._init_();\n\n        const ctx = canvas.ctx;\n        let drawingHelper = new _DrawingHelpers_js__WEBPACK_IMPORTED_MODULE_1__[\"Helper\"](canvas);\n        canvas.c.classList.add(\"game\");\n        drawingHelper.resizeSet(this);\n        this.ctx = ctx;\n        this.canvas = canvas;\n        this.helper = drawingHelper;\n        con.data(\"Set data in renderer\");\n        resolve();\n      } catch (e) {\n        reject(e);\n      }\n    });\n  }\n\n}\n\n//# sourceURL=webpack:///./src/js/Renderer/main.js?");

/***/ }),

/***/ "./src/js/main.jsx":
/*!*************************!*\
  !*** ./src/js/main.jsx ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Editor_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editor/main.js */ \"./src/js/Editor/main.js\");\n/* harmony import */ var _Console_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Console/main.js */ \"./src/js/Console/main.js\");\n\n\nconst con = new _Console_main_js__WEBPACK_IMPORTED_MODULE_1__[\"Console\"]();\nconst editor = new _Editor_main_js__WEBPACK_IMPORTED_MODULE_0__[\"Editor\"]();\n\n//# sourceURL=webpack:///./src/js/main.jsx?");

/***/ })

/******/ });