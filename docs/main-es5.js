function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      {\n      user(login: \"sarthakgoenka\") {\n        pinnedItems(first: 6, types: [REPOSITORY]) {\n          totalCount\n          edges {\n            node {\n              ... on Repository {\n                name\n                description\n                forkCount\n                stargazers {\n                  totalCount\n                }\n                url\n                id\n                diskUsage\n\n                primaryLanguage {\n                  name\n                  color\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/animation/animate.component.ts":
  /*!************************************************!*\
    !*** ./src/app/animation/animate.component.ts ***!
    \************************************************/

  /*! exports provided: AnimateComponent */

  /***/
  function srcAppAnimationAnimateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimateComponent", function () {
      return AnimateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _attention_seekers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./attention-seekers */
    "./src/app/animation/attention-seekers/index.ts");
    /* harmony import */


    var _entrances__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./entrances */
    "./src/app/animation/entrances/index.ts");
    /* harmony import */


    var _exits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./exits */
    "./src/app/animation/exits/index.ts");
    /* harmony import */


    var _animate_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./animate.service */
    "./src/app/animation/animate.service.ts"); // Animations


    var _c0 = ["wmAnimate", ""];
    var _c1 = ["*"];

    var AnimateComponent = /*#__PURE__*/function () {
      function AnimateComponent(elm, scroll) {
        _classCallCheck(this, AnimateComponent);

        this.elm = elm;
        this.scroll = scroll;
        this.replay$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"](); // Animating properties

        this.animating = false;
        this.animated = false;
        this.disabled = false;
        /** Emits at the end of the animation */

        this.start = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Emits at the end of the animation */

        this.done = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.paused = false;
        this.threshold = 0;
        this.once = false;
      }

      _createClass(AnimateComponent, [{
        key: "animationStart",
        value: function animationStart() {
          this.animating = true;
          this.animated = false;
          this.start.emit();
        }
      }, {
        key: "animationDone",
        value: function animationDone() {
          this.animating = false;
          this.animated = true;
          this.done.emit();
        }
        /** When true, keeps the animation idle until the next replay triggers */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // Sets the idle state for the given animation
          this.trigger = this.idle; // Triggers the animation based on the input flags

          this.sub = this.replay$.pipe( // Waits the next round to re-trigger
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(0), // Triggers immediately when not paused
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(!this.paused), // Builds the AOS observable from the common service
          this.scroll.trigger(this.elm, this.threshold), // Prevents false visibility blinks due to the animation transformations
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (trigger) {
            return !_this.animating;
          }), // Stops after the first on trigger when 'once' is set
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(function (trigger) {
            return !trigger || !_this.once;
          }, true)).subscribe(function (trigger) {
            // Triggers the animation to play or to idle
            _this.trigger = trigger ? _this.play : _this.idle;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }, {
        key: "idle",
        get: function get() {
          return {
            value: "idle-".concat(this.animate)
          };
        }
      }, {
        key: "play",
        get: function get() {
          var params = {}; // Builds the params object, so, leaving to the default values when undefined

          if (!!this.timing) {
            params['timing'] = this.timing;
          }

          if (!!this.delay) {
            params['delay'] = this.delay;
          }

          return {
            value: this.animate,
            params: params
          };
        }
        /** Speeds up or slows down the animation */

      }, {
        key: "speed",
        set: function set(speed) {
          // Turns the requested speed into a valid timing
          this.timing = {
            slower: '3s',
            slow: '2s',
            normal: '1s',
            fast: '500ms',
            faster: '300ms'
          }[speed || 'normal'];
        }
        /** Delays the animation */

      }, {
        key: "postpone",
        set: function set(delay) {
          // Coerces the input into a number first
          var value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(delay, 0);

          if (value) {
            // Turns a valid number into a ms delay
            this.delay = "".concat(value, "ms");
          } else {
            // Test the string for a valid delay combination
            this.delay = /^\d+(?:ms|s)$/.test(delay) ? delay : '';
          }
        }
        /** Disables the animation */

      }, {
        key: "disableAnimation",
        set: function set(value) {
          this.disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        }
      }, {
        key: "pauseAnimation",
        set: function set(value) {
          this.paused = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        }
        /** When defined, triggers the animation on element scrolling in the viewport by the specified amount. Amount defaults to 50% when not specified */

      }, {
        key: "enableAOS",
        set: function set(value) {
          this.threshold = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(value, 0.5);
        }
        /** When true, triggers the animation on element scrolling in the viewport */

      }, {
        key: "aosOnce",
        set: function set(value) {
          this.once = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        }
        /** Replays the animation */

      }, {
        key: "replay",
        set: function set(replay) {
          // Re-triggers the animation again on request (skipping the very fist value)
          if (!!this.trigger && Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(replay)) {
            this.trigger = this.idle;
            this.replay$.next(true);
          }
        }
      }]);

      return AnimateComponent;
    }();

    AnimateComponent.ɵfac = function AnimateComponent_Factory(t) {
      return new (t || AnimateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_animate_service__WEBPACK_IMPORTED_MODULE_8__["AnimateService"]));
    };

    AnimateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AnimateComponent,
      selectors: [["", "wmAnimate", ""]],
      hostVars: 2,
      hostBindings: function AnimateComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcomponentHostSyntheticListener"]("@animate.start", function AnimateComponent_animation_animate_start_HostBindingHandler() {
            return ctx.animationStart();
          })("@animate.done", function AnimateComponent_animation_animate_done_HostBindingHandler() {
            return ctx.animationDone();
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵupdateSyntheticHostBinding"]("@animate", ctx.trigger)("@.disabled", ctx.disabled);
        }
      },
      inputs: {
        animate: ["wmAnimate", "animate"],
        speed: "speed",
        postpone: ["delay", "postpone"],
        disableAnimation: ["disabled", "disableAnimation"],
        pauseAnimation: ["paused", "pauseAnimation"],
        enableAOS: ["aos", "enableAOS"],
        aosOnce: ["once", "aosOnce"],
        replay: "replay"
      },
      outputs: {
        start: "start",
        done: "done"
      },
      attrs: _c0,
      ngContentSelectors: _c1,
      decls: 1,
      vars: 0,
      template: function AnimateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('animate', [].concat(_toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["beat"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["bounce"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["flip"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["headShake"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["heartBeat"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["jello"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["pulse"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["rubberBand"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["shake"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["swing"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["tada"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["wobble"]), _toConsumableArray(_entrances__WEBPACK_IMPORTED_MODULE_6__["bumpIn"]), _toConsumableArray(_entrances__WEBPACK_IMPORTED_MODULE_6__["bounceIn"]), _toConsumableArray(_entrances__WEBPACK_IMPORTED_MODULE_6__["fadeIn"]), _toConsumableArray(_entrances__WEBPACK_IMPORTED_MODULE_6__["flipIn"]), _toConsumableArray(_entrances__WEBPACK_IMPORTED_MODULE_6__["jackInTheBox"]), _toConsumableArray(_entrances__WEBPACK_IMPORTED_MODULE_6__["landing"]), _toConsumableArray(_entrances__WEBPACK_IMPORTED_MODULE_6__["rollIn"]), _toConsumableArray(_entrances__WEBPACK_IMPORTED_MODULE_6__["zoomIn"]), _toConsumableArray(_exits__WEBPACK_IMPORTED_MODULE_7__["bounceOut"]), _toConsumableArray(_exits__WEBPACK_IMPORTED_MODULE_7__["fadeOut"]), _toConsumableArray(_exits__WEBPACK_IMPORTED_MODULE_7__["hinge"]), _toConsumableArray(_exits__WEBPACK_IMPORTED_MODULE_7__["rollOut"]), _toConsumableArray(_exits__WEBPACK_IMPORTED_MODULE_7__["zoomOut"])))]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: '[wmAnimate]',
          template: '<ng-content></ng-content>',
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('animate', [].concat(_toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["beat"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["bounce"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["flip"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["headShake"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["heartBeat"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["jello"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["pulse"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["rubberBand"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["shake"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["swing"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["tada"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["wobble"]), _toConsumableArray(_entrances__WEBPACK_IMPORTED_MODULE_6__["bumpIn"]), _toConsumableArray(_entrances__WEBPACK_IMPORTED_MODULE_6__["bounceIn"]), _toConsumableArray(_entrances__WEBPACK_IMPORTED_MODULE_6__["fadeIn"]), _toConsumableArray(_entrances__WEBPACK_IMPORTED_MODULE_6__["flipIn"]), _toConsumableArray(_entrances__WEBPACK_IMPORTED_MODULE_6__["jackInTheBox"]), _toConsumableArray(_entrances__WEBPACK_IMPORTED_MODULE_6__["landing"]), _toConsumableArray(_entrances__WEBPACK_IMPORTED_MODULE_6__["rollIn"]), _toConsumableArray(_entrances__WEBPACK_IMPORTED_MODULE_6__["zoomIn"]), _toConsumableArray(_exits__WEBPACK_IMPORTED_MODULE_7__["bounceOut"]), _toConsumableArray(_exits__WEBPACK_IMPORTED_MODULE_7__["fadeOut"]), _toConsumableArray(_exits__WEBPACK_IMPORTED_MODULE_7__["hinge"]), _toConsumableArray(_exits__WEBPACK_IMPORTED_MODULE_7__["rollOut"]), _toConsumableArray(_exits__WEBPACK_IMPORTED_MODULE_7__["zoomOut"])))]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _animate_service__WEBPACK_IMPORTED_MODULE_8__["AnimateService"]
        }];
      }, {
        trigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['@animate']
        }],
        animate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['wmAnimate']
        }],
        speed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        postpone: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['delay']
        }],
        disableAnimation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['disabled']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['@.disabled']
        }],
        start: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        animationStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['@animate.start']
        }],
        done: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        animationDone: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['@animate.done']
        }],
        pauseAnimation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['paused']
        }],
        enableAOS: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['aos']
        }],
        aosOnce: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['once']
        }],
        replay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/animation/animate.directive.ts":
  /*!************************************************!*\
    !*** ./src/app/animation/animate.directive.ts ***!
    \************************************************/

  /*! exports provided: AnimateDirective */

  /***/
  function srcAppAnimationAnimateDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimateDirective", function () {
      return AnimateDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _animate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./animate.service */
    "./src/app/animation/animate.service.ts");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");

    var AnimateDirective = /*#__PURE__*/function (_animate_service__WEB) {
      _inherits(AnimateDirective, _animate_service__WEB);

      var _super = _createSuper(AnimateDirective);

      function AnimateDirective(elref, viewPort, scroll, zone) {
        var _this2;

        _classCallCheck(this, AnimateDirective);

        _this2 = _super.call(this, scroll, viewPort, zone);
        _this2.elref = elref;
        _this2.viewPort = viewPort;
        _this2.element = false;
        return _this2;
      }
      /** When true instructs the directive to use the element's bounding rect as the animation view */


      _createClass(AnimateDirective, [{
        key: "useElement",
        set: function set(value) {
          this.element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        } // Overrides the viewport with the element's client rect on request

      }, {
        key: "viewRect",
        get: function get() {
          // Selects between the viewport and the element
          var rt = this.element ? this.elref.nativeElement.getBoundingClientRect() : this.viewPort.getViewportRect(); // Applies optional offsets

          var top = rt.top + Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(this.top, 0);
          var left = rt.left + Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(this.left, 0);
          var bottom = rt.bottom + Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(this.bottom, 0);
          var right = rt.right + Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(this.right, 0); // Returns the resulting rect

          return {
            top: top,
            left: left,
            bottom: bottom,
            right: right,
            height: bottom - top,
            width: right - left
          };
        }
      }]);

      return AnimateDirective;
    }(_animate_service__WEBPACK_IMPORTED_MODULE_2__["AnimateService"]);

    AnimateDirective.ɵfac = function AnimateDirective_Factory(t) {
      return new (t || AnimateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
    };

    AnimateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: AnimateDirective,
      selectors: [["", "wmAnimateView", ""]],
      inputs: {
        useElement: "useElement",
        top: "top",
        left: "left",
        bottom: "bottom",
        right: "right"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([// Provides the AnimateDirective as the service, so, for the child component to trigger within a modified viewport
      {
        provide: _animate_service__WEBPACK_IMPORTED_MODULE_2__["AnimateService"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return AnimateDirective;
        })
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[wmAnimateView]',
          providers: [// Provides the AnimateDirective as the service, so, for the child component to trigger within a modified viewport
          {
            provide: _animate_service__WEBPACK_IMPORTED_MODULE_2__["AnimateService"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
              return AnimateDirective;
            })
          }]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ViewportRuler"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollDispatcher"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      }, {
        useElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        top: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        left: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        bottom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        right: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/animation/animate.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/animation/animate.module.ts ***!
    \*********************************************/

  /*! exports provided: AnimateModule */

  /***/
  function srcAppAnimationAnimateModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimateModule", function () {
      return AnimateModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _animate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./animate.component */
    "./src/app/animation/animate.component.ts");
    /* harmony import */


    var _animate_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./animate.directive */
    "./src/app/animation/animate.directive.ts");

    var AnimateModule = function AnimateModule() {
      _classCallCheck(this, AnimateModule);
    };

    AnimateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AnimateModule
    });
    AnimateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AnimateModule_Factory(t) {
        return new (t || AnimateModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AnimateModule, {
        declarations: [_animate_component__WEBPACK_IMPORTED_MODULE_3__["AnimateComponent"], _animate_directive__WEBPACK_IMPORTED_MODULE_4__["AnimateDirective"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"]],
        exports: [_animate_component__WEBPACK_IMPORTED_MODULE_3__["AnimateComponent"], _animate_directive__WEBPACK_IMPORTED_MODULE_4__["AnimateDirective"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"]],
          declarations: [_animate_component__WEBPACK_IMPORTED_MODULE_3__["AnimateComponent"], _animate_directive__WEBPACK_IMPORTED_MODULE_4__["AnimateDirective"]],
          exports: [_animate_component__WEBPACK_IMPORTED_MODULE_3__["AnimateComponent"], _animate_directive__WEBPACK_IMPORTED_MODULE_4__["AnimateDirective"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/animation/animate.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/animation/animate.service.ts ***!
    \**********************************************/

  /*! exports provided: runInZone, AnimateService */

  /***/
  function srcAppAnimationAnimateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "runInZone", function () {
      return runInZone;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimateService", function () {
      return AnimateService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /** Returns an observable mirroring the source while running within the given zone */


    function runInZone(zone) {
      return function (source) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
          return source.subscribe(function (value) {
            return zone.run(function () {
              return observer.next(value);
            });
          }, function (e) {
            return zone.run(function () {
              return observer.error(e);
            });
          }, function () {
            return zone.run(function () {
              return observer.complete();
            });
          });
        });
      };
    }

    var AnimateService = /*#__PURE__*/function () {
      function AnimateService(scroll, viewPort, zone) {
        var _this3 = this;

        _classCallCheck(this, AnimateService);

        this.scroll = scroll;
        this.viewPort = viewPort;
        this.zone = zone; // Tracks for viewport changes giving it 100ms time to accurately update for orientation changes

        this.view$ = viewPort.change(100).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
          return _this3.viewRect;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(20), // Makes all the component to share the same viewport values
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
      } // By default, use the viewport rectangle


      _createClass(AnimateService, [{
        key: "trigger",
        // Triggers the animation
        value: function trigger(elm, threshold) {
          var _this4 = this;

          // Waits until the zone is stable once, aka the render is complete so the element to measure is there
          return function (source) {
            return _this4.zone.onStable.pipe( // Waits just once
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])(), // Triggers the play and replay requests
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
              return source;
            }), // Triggers the while scrolling
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (trigger) {
              return threshold > 0 ? _this4.aos(elm, threshold) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(trigger);
            }));
          };
        } // Triggers the animation on scroll

      }, {
        key: "aos",
        value: function aos(elm, threshold) {
          var _this5 = this;

          // A variation based on IntersectionObserver can be conditionally implemented here.
          // Returns an AOS observable
          return this.scroll.ancestorScrolled(elm, 0).pipe( // Makes sure triggering the start no matter there's no scroll event hits yet
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(0), // Maps the scrolling to the element visibility value
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
            return _this5.visibility(elm);
          }), // Applies an hysteresys, so, to trigger the animation on based on the treshold while off on full invisibility
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(function (result, visiblility) {
            return visiblility >= threshold || result && visiblility > 0;
          }, false), // Distincts the resulting triggers
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), // Runs within the angular zone to trigger change detection back on
          runInZone(this.zone));
        } // Computes the element's visibility ratio against the viewport

      }, {
        key: "visibility",
        value: function visibility(elm) {
          // Resolves from the latest viewport
          return this.view$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (view) {
            // Gets the element's bounding rect
            var rect = elm && elm.nativeElement && elm.nativeElement.getBoundingClientRect();

            if (!rect) {
              return 0;
            } // Return 1.0 when the element is fully within the viewport


            if (rect.left > view.left - 1 && rect.top > view.top - 1 && rect.right < view.right + 1 && rect.bottom < view.bottom + 1) {
              return 1;
            } // Computes the intersection area otherwise


            var a = Math.round(rect.width * rect.height);
            var b = Math.max(0, Math.min(rect.right, view.right) - Math.max(rect.left, view.left));
            var c = Math.max(0, Math.min(rect.bottom, view.bottom) - Math.max(rect.top, view.top)); // Returns the amount of visible area

            return Math.round(b * c / a * 10) / 10;
          }));
        }
      }, {
        key: "viewRect",
        get: function get() {
          return this.viewPort.getViewportRect();
        }
      }]);

      return AnimateService;
    }();

    AnimateService.ɵfac = function AnimateService_Factory(t) {
      return new (t || AnimateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
    };

    AnimateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AnimateService,
      factory: AnimateService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollDispatcher"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ViewportRuler"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/animation/attention-seekers/beat.ts":
  /*!*****************************************************!*\
    !*** ./src/app/animation/attention-seekers/beat.ts ***!
    \*****************************************************/

  /*! exports provided: beat */

  /***/
  function srcAppAnimationAttentionSeekersBeatTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "beat", function () {
      return beat;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var beat = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => beat', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} cubic-bezier(.8, -0.6, 0.2, 1.5)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(0.8)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(1.5)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(1)'
    })]))], {
      params: {
        timing: '500ms',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/attention-seekers/bounce.ts":
  /*!*******************************************************!*\
    !*** ./src/app/animation/attention-seekers/bounce.ts ***!
    \*******************************************************/

  /*! exports provided: bounce */

  /***/
  function srcAppAnimationAttentionSeekersBounceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "bounce", function () {
      return bounce;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var bounce = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bounce', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transformOrigin: 'center bottom'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translate3d(0, 0, 0)',
      animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translate3d(0, 0, 0)',
      animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      offset: 0.2
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translate3d(0, -30px, 0)',
      animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
      offset: 0.4
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translate3d(0, -30px, 0)',
      animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06',
      offset: 0.43
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translate3d(0, 0, 0)',
      animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      offset: 0.53
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translate3d(0, -15px, 0)',
      animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
      offset: 0.7
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translate3d(0, 0, 0)',
      animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      offset: 0.8
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translate3d(0, -4px, 0)',
      offset: 0.9
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translate3d(0, 0, 0)',
      animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      offset: 1
    })]))], {
      params: {
        timing: '1s',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/attention-seekers/flip.ts":
  /*!*****************************************************!*\
    !*** ./src/app/animation/attention-seekers/flip.ts ***!
    \*****************************************************/

  /*! exports provided: flip */

  /***/
  function srcAppAnimationAttentionSeekersFlipTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "flip", function () {
      return flip;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var flip = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => flip', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      backfaceVisibility: 'visible'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)',
      animationTimingFunction: 'ease-out',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: ' perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)',
      animationTimingFunction: 'ease-out',
      offset: 0.4
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)',
      animationTimingFunction: 'ease-in',
      offset: 0.5
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
      animationTimingFunction: 'ease-in',
      offset: 0.8
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
      animationTimingFunction: 'ease-in',
      offset: 1
    })]))], {
      params: {
        timing: '1s',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/attention-seekers/head-shake.ts":
  /*!***********************************************************!*\
    !*** ./src/app/animation/attention-seekers/head-shake.ts ***!
    \***********************************************************/

  /*! exports provided: headShake */

  /***/
  function srcAppAnimationAttentionSeekersHeadShakeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "headShake", function () {
      return headShake;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var headShake = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => headShake', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(0)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(-6px) rotateY(-9deg)',
      offset: 0.065
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(5px) rotateY(7deg)',
      offset: 0.185
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(-3px) rotateY(-5deg)',
      offset: 0.315
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(2px) rotateY(3deg)',
      offset: 0.435
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(0)',
      offset: 0.5
    })]))], {
      params: {
        timing: '1s',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/attention-seekers/heart-beat.ts":
  /*!***********************************************************!*\
    !*** ./src/app/animation/attention-seekers/heart-beat.ts ***!
    \***********************************************************/

  /*! exports provided: heartBeat */

  /***/
  function srcAppAnimationAttentionSeekersHeartBeatTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "heartBeat", function () {
      return heartBeat;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var heartBeat = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => heartBeat', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(1)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(1.3)',
      offset: 0.14
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(1)',
      offset: 0.28
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(1.3)',
      offset: 0.42
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(1)',
      offset: 0.70
    })]))], {
      params: {
        timing: '1s',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/attention-seekers/index.ts":
  /*!******************************************************!*\
    !*** ./src/app/animation/attention-seekers/index.ts ***!
    \******************************************************/

  /*! exports provided: beat, bounce, headShake, heartBeat, pulse, rubberBand, shake, swing, wobble, jello, tada, flip */

  /***/
  function srcAppAnimationAttentionSeekersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _beat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./beat */
    "./src/app/animation/attention-seekers/beat.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "beat", function () {
      return _beat__WEBPACK_IMPORTED_MODULE_0__["beat"];
    });
    /* harmony import */


    var _bounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./bounce */
    "./src/app/animation/attention-seekers/bounce.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "bounce", function () {
      return _bounce__WEBPACK_IMPORTED_MODULE_1__["bounce"];
    });
    /* harmony import */


    var _head_shake__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./head-shake */
    "./src/app/animation/attention-seekers/head-shake.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "headShake", function () {
      return _head_shake__WEBPACK_IMPORTED_MODULE_2__["headShake"];
    });
    /* harmony import */


    var _heart_beat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./heart-beat */
    "./src/app/animation/attention-seekers/heart-beat.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "heartBeat", function () {
      return _heart_beat__WEBPACK_IMPORTED_MODULE_3__["heartBeat"];
    });
    /* harmony import */


    var _pulse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pulse */
    "./src/app/animation/attention-seekers/pulse.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "pulse", function () {
      return _pulse__WEBPACK_IMPORTED_MODULE_4__["pulse"];
    });
    /* harmony import */


    var _rubber_band__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./rubber-band */
    "./src/app/animation/attention-seekers/rubber-band.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "rubberBand", function () {
      return _rubber_band__WEBPACK_IMPORTED_MODULE_5__["rubberBand"];
    });
    /* harmony import */


    var _shake__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shake */
    "./src/app/animation/attention-seekers/shake.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "shake", function () {
      return _shake__WEBPACK_IMPORTED_MODULE_6__["shake"];
    });
    /* harmony import */


    var _swing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./swing */
    "./src/app/animation/attention-seekers/swing.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "swing", function () {
      return _swing__WEBPACK_IMPORTED_MODULE_7__["swing"];
    });
    /* harmony import */


    var _wobble__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./wobble */
    "./src/app/animation/attention-seekers/wobble.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "wobble", function () {
      return _wobble__WEBPACK_IMPORTED_MODULE_8__["wobble"];
    });
    /* harmony import */


    var _jello__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./jello */
    "./src/app/animation/attention-seekers/jello.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "jello", function () {
      return _jello__WEBPACK_IMPORTED_MODULE_9__["jello"];
    });
    /* harmony import */


    var _tada__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./tada */
    "./src/app/animation/attention-seekers/tada.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "tada", function () {
      return _tada__WEBPACK_IMPORTED_MODULE_10__["tada"];
    });
    /* harmony import */


    var _flip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./flip */
    "./src/app/animation/attention-seekers/flip.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "flip", function () {
      return _flip__WEBPACK_IMPORTED_MODULE_11__["flip"];
    });
    /***/

  },

  /***/
  "./src/app/animation/attention-seekers/jello.ts":
  /*!******************************************************!*\
    !*** ./src/app/animation/attention-seekers/jello.ts ***!
    \******************************************************/

  /*! exports provided: jello */

  /***/
  function srcAppAnimationAttentionSeekersJelloTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "jello", function () {
      return jello;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var jello = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => jello', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transformOrigin: 'center'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'skewX(0) skewY(0)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'skewX(0) skewY(0)',
      offset: 0.111
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'skewX(-12.5) skewY(-12.5)',
      offset: 0.222
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'skewX(6.25deg) skewY(6.25deg)',
      offset: 0.333
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'skewX(-3.125deg) skewY(-3.125deg)',
      offset: 0.444
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'skewX(1.5625deg) skewY(1.5625deg)',
      offset: 0.555
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'skewX(-0.78125deg) skewY(-0.78125deg)',
      offset: 0.666
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'skewX(0.390625deg) skewY(0.390625deg)',
      offset: 0.777
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)',
      offset: 0.888
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'skewX(0) skewY(0)',
      offset: 1
    })]))], {
      params: {
        timing: '1s',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/attention-seekers/pulse.ts":
  /*!******************************************************!*\
    !*** ./src/app/animation/attention-seekers/pulse.ts ***!
    \******************************************************/

  /*! exports provided: pulse */

  /***/
  function srcAppAnimationAttentionSeekersPulseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "pulse", function () {
      return pulse;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var pulse = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => pulse', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(1)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(1.05)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(1)'
    })]))], {
      params: {
        timing: '500ms',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/attention-seekers/rubber-band.ts":
  /*!************************************************************!*\
    !*** ./src/app/animation/attention-seekers/rubber-band.ts ***!
    \************************************************************/

  /*! exports provided: rubberBand */

  /***/
  function srcAppAnimationAttentionSeekersRubberBandTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "rubberBand", function () {
      return rubberBand;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var rubberBand = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => rubberBand', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale3d(1, 1, 1)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale3d(1.25, 0.75, 1)',
      offset: 0.3
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale3d(0.75, 1.25, 1)',
      offset: 0.4
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale3d(1.15, 0.85, 1)',
      offset: 0.5
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale3d(0.95, 1.05, 1)',
      offset: 0.65
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale3d(1.05, 0.95, 1)',
      offset: 0.75
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale3d(1, 1, 1)',
      offset: 1
    })]))], {
      params: {
        timing: '1s',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/attention-seekers/shake.ts":
  /*!******************************************************!*\
    !*** ./src/app/animation/attention-seekers/shake.ts ***!
    \******************************************************/

  /*! exports provided: shake */

  /***/
  function srcAppAnimationAttentionSeekersShakeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "shake", function () {
      return shake;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var shake = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => shake', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(0)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(-10px)',
      offset: 0.1
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(10px)',
      offset: 0.2
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(-10px)',
      offset: 0.3
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(10px)',
      offset: 0.4
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(-10px)',
      offset: 0.5
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(10px)',
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(-10px)',
      offset: 0.7
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(10px)',
      offset: 0.8
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(-10px)',
      offset: 0.9
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(0)',
      offset: 1
    })]))], {
      params: {
        timing: '1s',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/attention-seekers/swing.ts":
  /*!******************************************************!*\
    !*** ./src/app/animation/attention-seekers/swing.ts ***!
    \******************************************************/

  /*! exports provided: swing */

  /***/
  function srcAppAnimationAttentionSeekersSwingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "swing", function () {
      return swing;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var swing = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => swing', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transformOrigin: 'top center'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'rotate3d(0, 0, 1, 0deg)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'rotate3d(0, 0, 1, 15deg)',
      offset: 0.2
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'rotate3d(0, 0, 1, -10deg)',
      offset: 0.4
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'rotate3d(0, 0, 1, 5deg)',
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'rotate3d(0, 0, 1, -5deg)',
      offset: 0.8
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'rotate3d(0, 0, 1, 0deg)',
      offset: 1
    })]))], {
      params: {
        timing: '1s',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/attention-seekers/tada.ts":
  /*!*****************************************************!*\
    !*** ./src/app/animation/attention-seekers/tada.ts ***!
    \*****************************************************/

  /*! exports provided: tada */

  /***/
  function srcAppAnimationAttentionSeekersTadaTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tada", function () {
      return tada;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var tada = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => tada', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale3d(1, 1, 1)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)',
      offset: 0.1
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)',
      offset: 0.2
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
      offset: 0.3
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',
      offset: 0.4
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
      offset: 0.5
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
      offset: 0.7
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',
      offset: 0.8
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
      offset: 0.9
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale3d(1, 1, 1)',
      offset: 1
    })]))], {
      params: {
        timing: '1s',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/attention-seekers/wobble.ts":
  /*!*******************************************************!*\
    !*** ./src/app/animation/attention-seekers/wobble.ts ***!
    \*******************************************************/

  /*! exports provided: wobble */

  /***/
  function srcAppAnimationAttentionSeekersWobbleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "wobble", function () {
      return wobble;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var wobble = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => wobble', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(0)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(-25%) rotate3d(0, 0, 1, -5deg)',
      offset: 0.15
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(20%) rotate3d(0, 0, 1, 3deg)',
      offset: 0.3
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(-15%) rotate3d(0, 0, 1, -3deg)',
      offset: 0.45
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(10%) rotate3d(0, 0, 1, 2deg)',
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(-5%) rotate3d(0, 0, 1, -1deg)',
      offset: 0.75
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(0)',
      offset: 1
    })]))], {
      params: {
        timing: '1s',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/entrances/bounce-in.ts":
  /*!**************************************************!*\
    !*** ./src/app/animation/entrances/bounce-in.ts ***!
    \**************************************************/

  /*! exports provided: bounceIn */

  /***/
  function srcAppAnimationEntrancesBounceInTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "bounceIn", function () {
      return bounceIn;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var bounceIn = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-bounceIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-bounceInDown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-bounceInLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-bounceInUp', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-bounceInRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bounceIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} cubic-bezier(0.215, 0.61, 0.355, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'scale(0.3)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(1.1)',
      offset: 0.2
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(0.9)',
      offset: 0.4
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(1.03)',
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(0.97)',
      offset: 0.8
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(1)',
      offset: 1
    })])), {
      params: {
        timing: '750ms',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bounceInDown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} cubic-bezier(0.215, 0.61, 0.355, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'translateY(-100%)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'translateY(25px)',
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateY(-10px)',
      offset: 0.75
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateY(5px)',
      offset: 0.9
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'translateY(0)',
      offset: 1
    })])), {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bounceInLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} cubic-bezier(0.215, 0.61, 0.355, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'translateX(-100%)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'translateX(25px)',
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(-10px)',
      offset: 0.75
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(5px)',
      offset: 0.9
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'translateX(0)',
      offset: 1
    })])), {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bounceInUp', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} cubic-bezier(0.215, 0.61, 0.355, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'translateY(100%)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'translateY(-25px)',
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateY(10px)',
      offset: 0.75
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateY(-5px)',
      offset: 0.9
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'translateY(0)',
      offset: 1
    })])), {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bounceInRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} cubic-bezier(0.215, 0.61, 0.355, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'translateX(100%)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'translateX(-25px)',
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(10px)',
      offset: 0.75
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(-5px)',
      offset: 0.9
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'translateX(0)',
      offset: 1
    })])), {
      params: {
        timing: '1s',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/entrances/bump-in.ts":
  /*!************************************************!*\
    !*** ./src/app/animation/entrances/bump-in.ts ***!
    \************************************************/

  /*! exports provided: bumpIn */

  /***/
  function srcAppAnimationEntrancesBumpInTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "bumpIn", function () {
      return bumpIn;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var bumpIn = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-bumpIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bumpIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(0.5)',
      opacity: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("{{timing}} {{delay}} cubic-bezier(.8, -0.6, 0.2, 1.5)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(1)',
      opacity: 1
    }))], {
      params: {
        timing: '500ms',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/entrances/fade-in.ts":
  /*!************************************************!*\
    !*** ./src/app/animation/entrances/fade-in.ts ***!
    \************************************************/

  /*! exports provided: fadeIn */

  /***/
  function srcAppAnimationEntrancesFadeInTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeIn", function () {
      return fadeIn;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var fadeIn = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-fadeIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-fadeInRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-fadeInLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-fadeInUp', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-fadeInDown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => fadeIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'))], {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => fadeInRight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'translateX(-20px)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'))], {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => fadeInLeft', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'translateX(20px)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'))], {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => fadeInUp', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'translateY(20px)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'))], {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => fadeInDown', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'translateY(-20px)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'))], {
      params: {
        timing: '1s',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/entrances/flip-in.ts":
  /*!************************************************!*\
    !*** ./src/app/animation/entrances/flip-in.ts ***!
    \************************************************/

  /*! exports provided: flipIn */

  /***/
  function srcAppAnimationEntrancesFlipInTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "flipIn", function () {
      return flipIn;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var flipIn = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-flipInX', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-flipInY', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => flipInX', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      backfaceVisibility: 'visible'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',
      opacity: 0,
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: ' perspective(400px) rotate3d(1, 0, 0, -20deg)',
      opacity: 1,
      offset: 0.4
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)',
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)',
      offset: 0.8
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'perspective(400px) rotate3d(1, 0, 0, 0)',
      offset: 1
    })]))], {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => flipInY', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      backfaceVisibility: 'visible'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)',
      opacity: 0,
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: ' perspective(400px) rotate3d(0, 1, 0, -20deg)',
      opacity: 1,
      offset: 0.4
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)',
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)',
      offset: 0.8
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'perspective(400px) rotate3d(0, 1, 0, 0)',
      offset: 1
    })]))], {
      params: {
        timing: '1s',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/entrances/index.ts":
  /*!**********************************************!*\
    !*** ./src/app/animation/entrances/index.ts ***!
    \**********************************************/

  /*! exports provided: bumpIn, bounceIn, fadeIn, flipIn, jackInTheBox, landing, rollIn, zoomIn */

  /***/
  function srcAppAnimationEntrancesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _bump_in__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./bump-in */
    "./src/app/animation/entrances/bump-in.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "bumpIn", function () {
      return _bump_in__WEBPACK_IMPORTED_MODULE_0__["bumpIn"];
    });
    /* harmony import */


    var _bounce_in__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./bounce-in */
    "./src/app/animation/entrances/bounce-in.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "bounceIn", function () {
      return _bounce_in__WEBPACK_IMPORTED_MODULE_1__["bounceIn"];
    });
    /* harmony import */


    var _fade_in__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./fade-in */
    "./src/app/animation/entrances/fade-in.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "fadeIn", function () {
      return _fade_in__WEBPACK_IMPORTED_MODULE_2__["fadeIn"];
    });
    /* harmony import */


    var _flip_in__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./flip-in */
    "./src/app/animation/entrances/flip-in.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "flipIn", function () {
      return _flip_in__WEBPACK_IMPORTED_MODULE_3__["flipIn"];
    });
    /* harmony import */


    var _jack_in_the_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./jack-in-the-box */
    "./src/app/animation/entrances/jack-in-the-box.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "jackInTheBox", function () {
      return _jack_in_the_box__WEBPACK_IMPORTED_MODULE_4__["jackInTheBox"];
    });
    /* harmony import */


    var _landing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./landing */
    "./src/app/animation/entrances/landing.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "landing", function () {
      return _landing__WEBPACK_IMPORTED_MODULE_5__["landing"];
    });
    /* harmony import */


    var _roll_in__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./roll-in */
    "./src/app/animation/entrances/roll-in.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "rollIn", function () {
      return _roll_in__WEBPACK_IMPORTED_MODULE_6__["rollIn"];
    });
    /* harmony import */


    var _zoom_in__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./zoom-in */
    "./src/app/animation/entrances/zoom-in.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "zoomIn", function () {
      return _zoom_in__WEBPACK_IMPORTED_MODULE_7__["zoomIn"];
    });
    /***/

  },

  /***/
  "./src/app/animation/entrances/jack-in-the-box.ts":
  /*!********************************************************!*\
    !*** ./src/app/animation/entrances/jack-in-the-box.ts ***!
    \********************************************************/

  /*! exports provided: jackInTheBox */

  /***/
  function srcAppAnimationEntrancesJackInTheBoxTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "jackInTheBox", function () {
      return jackInTheBox;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var jackInTheBox = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-jackInTheBox', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => jackInTheBox', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(0.1) rotate(30deg)',
      transformOrigin: 'center bottom',
      opacity: 0,
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'rotate(-10deg)',
      opacity: 0.7,
      offset: 0.5
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'rotate(3deg)',
      offset: 0.7
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(1)',
      opacity: 1,
      offset: 1
    })]))], {
      params: {
        timing: '1s',
        delay: ''
      }
    })];
    /*@keyframes jackInTheBox {
      from {
        opacity: 0;
        transform: scale(0.1) rotate(30deg);
        transform-origin: center bottom;
      }
    
      50% {
        transform: rotate(-10deg);
      }
    
      70% {
        transform: rotate(3deg);
      }
    
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    
    .jackInTheBox {
      animation-name: jackInTheBox;
    }*/

    /***/
  },

  /***/
  "./src/app/animation/entrances/landing.ts":
  /*!************************************************!*\
    !*** ./src/app/animation/entrances/landing.ts ***!
    \************************************************/

  /*! exports provided: landing */

  /***/
  function srcAppAnimationEntrancesLandingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "landing", function () {
      return landing;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var landing = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-landing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => landing', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(1.2)',
      opacity: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'))], {
      params: {
        timing: '2s',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/entrances/roll-in.ts":
  /*!************************************************!*\
    !*** ./src/app/animation/entrances/roll-in.ts ***!
    \************************************************/

  /*! exports provided: rollIn */

  /***/
  function srcAppAnimationEntrancesRollInTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "rollIn", function () {
      return rollIn;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var rollIn = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-rollIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => rollIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(-100%) rotate3d(0, 0, 1, -120deg)',
      opacity: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("{{timing}} {{delay}} cubic-bezier(.8, -0.6, 0.2, 1.5)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(0)',
      opacity: 1
    }))], {
      params: {
        timing: '1s',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/entrances/zoom-in.ts":
  /*!************************************************!*\
    !*** ./src/app/animation/entrances/zoom-in.ts ***!
    \************************************************/

  /*! exports provided: zoomIn */

  /***/
  function srcAppAnimationEntrancesZoomInTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "zoomIn", function () {
      return zoomIn;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var zoomIn = [// Idle states
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-zoomIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-zoomInDown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-zoomInLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-zoomInUp', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-zoomInRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => zoomIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'scale(0.3)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(0.65)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(1)'
    })])), {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => zoomInDown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'scale(0.1) translateY(-1000px)',
      animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(0.475) translateY(60px)',
      animationTimingFunction: 'ubic-bezier(0.175, 0.885, 0.32, 1)',
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(1) translateY(0)',
      offset: 1
    })])), {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => zoomInLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'scale(0.1) translateX(-1000px)',
      animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(0.475) translateX(60px)',
      animationTimingFunction: 'ubic-bezier(0.175, 0.885, 0.32, 1)',
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(1) translateX(0)',
      offset: 1
    })])), {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => zoomInUp', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'scale(0.1) translateY(1000px)',
      animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(0.475) translateY(-60px)',
      animationTimingFunction: 'ubic-bezier(0.175, 0.885, 0.32, 1)',
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(1) translateY(0)',
      offset: 1
    })])), {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => zoomInRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'scale(0.1) translateX(1000px)',
      animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(0.475) translateX(-60px)',
      animationTimingFunction: 'ubic-bezier(0.175, 0.885, 0.32, 1)',
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(1) translateX(0)',
      offset: 1
    })])), {
      params: {
        timing: '1s',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/exits/bounce-out.ts":
  /*!***********************************************!*\
    !*** ./src/app/animation/exits/bounce-out.ts ***!
    \***********************************************/

  /*! exports provided: bounceOut */

  /***/
  function srcAppAnimationExitsBounceOutTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "bounceOut", function () {
      return bounceOut;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var bounceOut = [// Ending states
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('bounceOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('bounceOutDown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('bounceOutUp', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('bounceOutRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('bounceOutLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), // Transitions
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bounceOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(0.9)',
      offset: 0.2
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(1.1)',
      offset: 0.5
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(1.1)',
      offset: 0.55
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'scale(0.3)',
      offset: 1
    })]))], {
      params: {
        timing: '750ms',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bounceOutDown', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateY(10px)',
      offset: 0.2
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateY(-20px)',
      offset: 0.4
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateY(-20px)',
      offset: 0.45
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'translateY(2000px)',
      offset: 1
    })]))], {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bounceOutUp', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateY(-10px)',
      offset: 0.2
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateY(20px)',
      offset: 0.4
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateY(20px)',
      offset: 0.45
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'translateY(-2000px)',
      offset: 1
    })]))], {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bounceOutRight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(-20px)',
      offset: 0.2
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'translateX(2000px)',
      offset: 1
    })]))], {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bounceOutLeft', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(20px)',
      offset: 0.2
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'translateX(-2000px)',
      offset: 1
    })]))], {
      params: {
        timing: '1s',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/exits/fade-out.ts":
  /*!*********************************************!*\
    !*** ./src/app/animation/exits/fade-out.ts ***!
    \*********************************************/

  /*! exports provided: fadeOut */

  /***/
  function srcAppAnimationExitsFadeOutTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeOut", function () {
      return fadeOut;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var fadeOut = [// Ending states
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fadeOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fadeOutRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fadeOutLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fadeOutDown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fadeOutUp', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), // Transitions
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => fadeOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    }))], {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => fadeOutRight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'translateX(20px)'
    }))], {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => fadeOutLeft', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'translateX(-20px)'
    }))], {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => fadeOutDown', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'translateY(20px)'
    }))], {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => fadeOutUp', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'translateY(-20px)'
    }))], {
      params: {
        timing: '1s',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/exits/hinge.ts":
  /*!******************************************!*\
    !*** ./src/app/animation/exits/hinge.ts ***!
    \******************************************/

  /*! exports provided: hinge */

  /***/
  function srcAppAnimationExitsHingeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "hinge", function () {
      return hinge;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var hinge = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hinge', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => hinge', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transformOrigin: 'top left'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'rotate3d(0, 0, 1, 0',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'rotate3d(0, 0, 1, 80deg)',
      offset: 0.2
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'rotate3d(0, 0, 1, 60deg)',
      offset: 0.4
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'rotate3d(0, 0, 1, 80deg)',
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'rotate3d(0, 0, 1, 60deg)',
      offset: 0.8
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateY(700px)',
      offset: 1
    })]))], {
      params: {
        timing: '2s',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/exits/index.ts":
  /*!******************************************!*\
    !*** ./src/app/animation/exits/index.ts ***!
    \******************************************/

  /*! exports provided: bounceOut, fadeOut, hinge, rollOut, zoomOut */

  /***/
  function srcAppAnimationExitsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _bounce_out__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./bounce-out */
    "./src/app/animation/exits/bounce-out.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "bounceOut", function () {
      return _bounce_out__WEBPACK_IMPORTED_MODULE_0__["bounceOut"];
    });
    /* harmony import */


    var _fade_out__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./fade-out */
    "./src/app/animation/exits/fade-out.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "fadeOut", function () {
      return _fade_out__WEBPACK_IMPORTED_MODULE_1__["fadeOut"];
    });
    /* harmony import */


    var _hinge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./hinge */
    "./src/app/animation/exits/hinge.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "hinge", function () {
      return _hinge__WEBPACK_IMPORTED_MODULE_2__["hinge"];
    });
    /* harmony import */


    var _roll_out__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./roll-out */
    "./src/app/animation/exits/roll-out.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "rollOut", function () {
      return _roll_out__WEBPACK_IMPORTED_MODULE_3__["rollOut"];
    });
    /* harmony import */


    var _zoom_out__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./zoom-out */
    "./src/app/animation/exits/zoom-out.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "zoomOut", function () {
      return _zoom_out__WEBPACK_IMPORTED_MODULE_4__["zoomOut"];
    });
    /***/

  },

  /***/
  "./src/app/animation/exits/roll-out.ts":
  /*!*********************************************!*\
    !*** ./src/app/animation/exits/roll-out.ts ***!
    \*********************************************/

  /*! exports provided: rollOut */

  /***/
  function srcAppAnimationExitsRollOutTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "rollOut", function () {
      return rollOut;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var rollOut = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('rollOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => rollOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(0)',
      opacity: 1
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("{{timing}} {{delay}} cubic-bezier(.8, -0.6, 0.2, 1.5)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(100%) rotate3d(0, 0, 1, 120deg)',
      opacity: 0
    }))], {
      params: {
        timing: '1s',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/exits/zoom-out.ts":
  /*!*********************************************!*\
    !*** ./src/app/animation/exits/zoom-out.ts ***!
    \*********************************************/

  /*! exports provided: zoomOut */

  /***/
  function srcAppAnimationExitsZoomOutTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "zoomOut", function () {
      return zoomOut;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var zoomOut = [// Ending states
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('zoomOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('zoomOutDown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('zoomOutRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('zoomOutUp', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('zoomOutLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => zoomOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(1)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'scale(0.3)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'scale(0.3)'
    })])), {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => zoomOutDown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'scale(0.475) translateY(-60px)',
      animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(0.1) translateY(2000px)',
      transformOrigin: 'center bottom',
      animationTimingFunction: 'ubic-bezier(0.175, 0.885, 0.32, 1)',
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(1) translateY(0)',
      offset: 1
    })])), {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => zoomOutRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'scale(0.475) translateX(-42px)',
      animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(0.1) translateX(2000px)',
      transformOrigin: 'center bottom',
      animationTimingFunction: 'ubic-bezier(0.175, 0.885, 0.32, 1)',
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(1) translateX(0)',
      offset: 1
    })])), {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => zoomOutUp', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'scale(0.475) translateY(60px)',
      animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(0.1) translateY(-2000px)',
      transformOrigin: 'center bottom',
      animationTimingFunction: 'ubic-bezier(0.175, 0.885, 0.32, 1)',
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(1) translateY(0)',
      offset: 1
    })])), {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => zoomOutLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'scale(0.475) translateX(42px)',
      animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(0.1) translateX(-2000px)',
      transformOrigin: 'center bottom',
      animationTimingFunction: 'ubic-bezier(0.175, 0.885, 0.32, 1)',
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(1) translateX(0)',
      offset: 1
    })])), {
      params: {
        timing: '1s',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _greeting_greeting_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./greeting/greeting.component */
    "./src/app/greeting/greeting.component.ts");
    /* harmony import */


    var _skills_skills_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./skills/skills.component */
    "./src/app/skills/skills.component.ts");
    /* harmony import */


    var _education_education_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./education/education.component */
    "./src/app/education/education.component.ts");
    /* harmony import */


    var _skill_progress_skill_progress_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./skill-progress/skill-progress.component */
    "./src/app/skill-progress/skill-progress.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");
    /* harmony import */


    var _experience_experience_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./experience/experience.component */
    "./src/app/experience/experience.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _top_button_top_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./top-button/top-button.component */
    "./src/app/top-button/top-button.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'portfolio';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 12,
      vars: 0,
      consts: [["rel", "stylesheet", "href", "https://use.fontawesome.com/releases/v5.0.8/css/all.css", "integrity", "sha384-3AB7yXWz4OeoZcPbieVW64vVXEwADiYyAEhwilzWsLw+9FgqpyjjStpPnpBO8o8S", "crossorigin", "anonymous"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-greeting");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-skill-progress");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-experience");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-top-button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _greeting_greeting_component__WEBPACK_IMPORTED_MODULE_2__["GreetingComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_3__["SkillsComponent"], _education_education_component__WEBPACK_IMPORTED_MODULE_4__["EducationComponent"], _skill_progress_skill_progress_component__WEBPACK_IMPORTED_MODULE_5__["SkillProgressComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"], _experience_experience_component__WEBPACK_IMPORTED_MODULE_7__["ExperienceComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"], _top_button_top_button_component__WEBPACK_IMPORTED_MODULE_9__["TopButtonComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterOutlet"]],
      styles: ["app-projects[_ngcontent-%COMP%] {\n  animation: fade_up 2s;\n}\n\n\n\n@keyframes fade_down {\n  0% {\n    opacity: 0.01;\n    transform: translateY(-20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_up {\n  0% {\n    opacity: 0.01;\n    transform: translateY(20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_right {\n  0% {\n    opacity: 0.01;\n    transform: translateX(20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_left {\n  0% {\n    opacity: 0.01;\n    transform: translateX(-100px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UscUJBQUE7QUFBRjs7QUFHQSxlQUFBOztBQUNBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsNEJBQUE7SUFDQSxvSEFBQTtFQUFGO0VBR0E7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7SUFDQSxvSEFBQTtFQURGO0FBQ0Y7O0FBS0E7RUFDRTtJQUNFLGFBQUE7SUFDQSwyQkFBQTtJQUNBLG9IQUFBO0VBSEY7RUFNQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtJQUNBLG9IQUFBO0VBSkY7QUFDRjs7QUFPQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLDJCQUFBO0lBQ0Esb0hBQUE7RUFMRjtFQVFBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0lBQ0Esb0hBQUE7RUFORjtBQUNGOztBQVNBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsNkJBQUE7SUFDQSxvSEFBQTtFQVBGO0VBVUE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7SUFDQSxvSEFBQTtFQVJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuYXBwLXByb2plY3Rze1xyXG4gIGFuaW1hdGlvbjogZmFkZV91cCAycztcclxufVxyXG5cclxuLyogQW5pbWF0aW9ucyAqL1xyXG5Aa2V5ZnJhbWVzIGZhZGVfZG93biB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMC4wMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcclxuICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXHJcbiAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlX3VwIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwLjAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXHJcbiAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxyXG4gICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBmYWRlX3JpZ2h0IHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwLjAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXHJcbiAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxyXG4gICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBmYWRlX2xlZnQge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDAuMDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxyXG4gICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcclxuICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _greeting_greeting_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./greeting/greeting.component */
    "./src/app/greeting/greeting.component.ts");
    /* harmony import */


    var _button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./button/button.component */
    "./src/app/button/button.component.ts");
    /* harmony import */


    var _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./social-media/social-media.component */
    "./src/app/social-media/social-media.component.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _skills_skills_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./skills/skills.component */
    "./src/app/skills/skills.component.ts");
    /* harmony import */


    var _skills_software_skill_software_skill_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./skills/software-skill/software-skill.component */
    "./src/app/skills/software-skill/software-skill.component.ts");
    /* harmony import */


    var _skill_progress_skill_progress_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./skill-progress/skill-progress.component */
    "./src/app/skill-progress/skill-progress.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _top_button_top_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./top-button/top-button.component */
    "./src/app/top-button/top-button.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./timeline/timeline.component */
    "./src/app/timeline/timeline.component.ts");
    /* harmony import */


    var _experience_experience_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./experience/experience.component */
    "./src/app/experience/experience.component.ts");
    /* harmony import */


    var _experience_experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./experience/experience-card/experience-card.component */
    "./src/app/experience/experience-card/experience-card.component.ts");
    /* harmony import */


    var _projects_github_repo_card_github_repo_card_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./projects/github-repo-card/github-repo-card.component */
    "./src/app/projects/github-repo-card/github-repo-card.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");
    /* harmony import */


    var _education_education_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./education/education.component */
    "./src/app/education/education.component.ts");
    /* harmony import */


    var _projects_graphql_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./projects/graphql.module */
    "./src/app/projects/graphql.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _github_calendar_github_calendar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./github-calendar/github-calendar.component */
    "./src/app/github-calendar/github-calendar.component.ts");
    /* harmony import */


    var _animation_animate_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./animation/animate.module */
    "./src/app/animation/animate.module.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: Window,
        useValue: window
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"], _projects_graphql_module__WEBPACK_IMPORTED_MODULE_21__["GraphQLModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"], _animation_animate_module__WEBPACK_IMPORTED_MODULE_24__["AnimateModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _greeting_greeting_component__WEBPACK_IMPORTED_MODULE_5__["GreetingComponent"], _button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"], _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_7__["SocialMediaComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_9__["SkillsComponent"], _skills_software_skill_software_skill_component__WEBPACK_IMPORTED_MODULE_10__["SoftwareSkillComponent"], _skill_progress_skill_progress_component__WEBPACK_IMPORTED_MODULE_11__["SkillProgressComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _top_button_top_button_component__WEBPACK_IMPORTED_MODULE_13__["TopButtonComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_15__["TimelineComponent"], _experience_experience_component__WEBPACK_IMPORTED_MODULE_16__["ExperienceComponent"], _experience_experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_17__["ExperienceCardComponent"], _projects_github_repo_card_github_repo_card_component__WEBPACK_IMPORTED_MODULE_18__["GithubRepoCardComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_19__["ProjectsComponent"], _education_education_component__WEBPACK_IMPORTED_MODULE_20__["EducationComponent"], _github_calendar_github_calendar_component__WEBPACK_IMPORTED_MODULE_23__["GithubCalendarComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"], _projects_graphql_module__WEBPACK_IMPORTED_MODULE_21__["GraphQLModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"], _animation_animate_module__WEBPACK_IMPORTED_MODULE_24__["AnimateModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _greeting_greeting_component__WEBPACK_IMPORTED_MODULE_5__["GreetingComponent"], _button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"], _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_7__["SocialMediaComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_9__["SkillsComponent"], _skills_software_skill_software_skill_component__WEBPACK_IMPORTED_MODULE_10__["SoftwareSkillComponent"], _skill_progress_skill_progress_component__WEBPACK_IMPORTED_MODULE_11__["SkillProgressComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _top_button_top_button_component__WEBPACK_IMPORTED_MODULE_13__["TopButtonComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_15__["TimelineComponent"], _experience_experience_component__WEBPACK_IMPORTED_MODULE_16__["ExperienceComponent"], _experience_experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_17__["ExperienceCardComponent"], _projects_github_repo_card_github_repo_card_component__WEBPACK_IMPORTED_MODULE_18__["GithubRepoCardComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_19__["ProjectsComponent"], _education_education_component__WEBPACK_IMPORTED_MODULE_20__["EducationComponent"], _github_calendar_github_calendar_component__WEBPACK_IMPORTED_MODULE_23__["GithubCalendarComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"], _projects_graphql_module__WEBPACK_IMPORTED_MODULE_21__["GraphQLModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"], _animation_animate_module__WEBPACK_IMPORTED_MODULE_24__["AnimateModule"]],
          providers: [{
            provide: Window,
            useValue: window
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/button.service.ts":
  /*!***********************************!*\
    !*** ./src/app/button.service.ts ***!
    \***********************************/

  /*! exports provided: ButtonService */

  /***/
  function srcAppButtonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonService", function () {
      return ButtonService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ButtonService = /*#__PURE__*/function () {
      function ButtonService() {
        _classCallCheck(this, ButtonService);
      }

      _createClass(ButtonService, [{
        key: "getClassName",
        value: function getClassName() {
          return this.className;
        }
      }, {
        key: "getHref",
        value: function getHref() {
          return this.href;
        }
      }, {
        key: "getText",
        value: function getText() {
          return this.text;
        }
      }, {
        key: "setClassName",
        value: function setClassName(className) {
          this.className = className;
        }
      }, {
        key: "setHref",
        value: function setHref(href) {
          this.href = href;
        }
      }, {
        key: "setText",
        value: function setText(text) {
          this.text = text;
        }
      }]);

      return ButtonService;
    }();

    ButtonService.ɵfac = function ButtonService_Factory(t) {
      return new (t || ButtonService)();
    };

    ButtonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ButtonService,
      factory: ButtonService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/button/button.component.ts":
  /*!********************************************!*\
    !*** ./src/app/button/button.component.ts ***!
    \********************************************/

  /*! exports provided: ButtonComponent */

  /***/
  function srcAppButtonButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonComponent", function () {
      return ButtonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _button_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../button.service */
    "./src/app/button.service.ts");

    var ButtonComponent = /*#__PURE__*/function () {
      function ButtonComponent(buttonService) {
        _classCallCheck(this, ButtonComponent);

        this.buttonService = buttonService;
      }

      _createClass(ButtonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.className = this.buttonService.getClassName();
          this.text = this.buttonService.getText();
          this.href = this.buttonService.getHref();
        }
      }]);

      return ButtonComponent;
    }();

    ButtonComponent.ɵfac = function ButtonComponent_Factory(t) {
      return new (t || ButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_button_service__WEBPACK_IMPORTED_MODULE_1__["ButtonService"]));
    };

    ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ButtonComponent,
      selectors: [["app-button"]],
      decls: 2,
      vars: 0,
      template: function ButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "button works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".main-button[_ngcontent-%COMP%] {\n  background-color: #55198b;\n  border: solid 1px #55198b;\n  color: white;\n  font-weight: 700;\n  width: max-content;\n  padding: 13px 22px;\n  margin-right: 50px;\n  text-transform: uppercase;\n  border-radius: 6px;\n  text-align: center;\n  text-decoration: none;\n  display: block;\n  margin-top: 20px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out 0s;\n}\n\n.main-button[_ngcontent-%COMP%]:hover {\n  background-color: #ffffff;\n  color: black;\n  transition: all 0.3s ease 0s;\n  transform: translateY(-3px);\n}\n\n.project-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n\n\n@media (max-width: 768px) {\n  .main-button[_ngcontent-%COMP%] {\n    font-size: 15px;\n    padding: 12px 18px;\n    margin-right: 0px;\n  }\n}\n\n@media (max-width: 320px) {\n  .main-button[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUFDRjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUFFRjs7QUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBR0Y7O0FBQUEsZ0JBQUE7O0FBQ0E7RUFDRTtJQUNFLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0VBR0Y7QUFDRjs7QUFEQTtFQUNFO0lBQ0UsZUFBQTtFQUdGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTUxOThiO1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICM1NTE5OGI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gIHBhZGRpbmc6IDEzcHggMjJweDtcclxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dCAwcztcclxufVxyXG4ubWFpbi1idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZSAwcztcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbn1cclxuLnByb2plY3QtYnV0dG9ue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbn1cclxuLyogTWVkaWEgUXVlcnkgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLm1haW4tYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHBhZGRpbmc6IDEycHggMThweDtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAubWFpbi1idXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-button',
          templateUrl: './button.component.html',
          styleUrls: ['./button.component.scss']
        }]
      }], function () {
        return [{
          type: _button_service__WEBPACK_IMPORTED_MODULE_1__["ButtonService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _animation_animate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../animation/animate.component */
    "./src/app/animation/animate.component.ts");
    /* harmony import */


    var _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../social-media/social-media.component */
    "./src/app/social-media/social-media.component.ts");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);

        this.contactInfo = {
          title: "Contact Me ☎️",
          subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
          number: "+216-29325351",
          email_address: "aymen.chaabani@etudiant-fst.utm.tn"
        };
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)();
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 17,
      vars: 6,
      consts: [["id", "contact", "wmAnimate", "jackInTheBox", "aos", "", "speed", "normal", 1, "main", "contact-margin-top"], [1, "contact-div-main"], [1, "contact-header"], [1, "heading", "contact-title"], [1, "subTitle", "contact-subtitle"], [1, "contact-text-div"], [1, "contact-detail", 3, "href"], [1, "contact-detail-email", 3, "href"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-social-media");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contactInfo.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contactInfo.subtitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", "tel:" + ctx.contactInfo.number, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contactInfo.number);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", "mailto:" + ctx.contactInfo.email_address, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.contactInfo.email_address, "");
        }
      },
      directives: [_animation_animate_component__WEBPACK_IMPORTED_MODULE_1__["AnimateComponent"], _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_2__["SocialMediaComponent"]],
      styles: [".contact-div-main[_ngcontent-%COMP%] {\n  display: flex;\n  margin-left: 5%;\n}\n\n.subTitle[_ngcontent-%COMP%] {\n  color: #868e96;\n}\n\n.contact-div-main[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.contact-title[_ngcontent-%COMP%] {\n  font-size: 65px;\n  font-weight: 400;\n  margin-bottom: 2rem;\n  color: #868e96;\n}\n\n.contact-detail[_ngcontent-%COMP%], .contact-detail-email[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: 40px;\n  font-weight: 400;\n  color: #868e96;\n  text-decoration: none;\n}\n\n.contact-detail[_ngcontent-%COMP%]:hover, .contact-detail-email[_ngcontent-%COMP%]:hover {\n  color: black;\n  text-shadow: 2px 1px 2px #b5b5b5;\n  transition: all 0.3s;\n}\n\n.contact-subtitle[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n\n.contact-text-div[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\n.contact-margin-top[_ngcontent-%COMP%] {\n  margin-top: 4rem;\n}\n\n.contact-image[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  margin-left: 1.5rem;\n  margin-top: -4rem;\n}\n\n\n\n@media (max-width: 1380px), (max-width: 768px) {\n  .contact-title[_ngcontent-%COMP%] {\n    font-size: 56px;\n    font-weight: 400;\n    text-align: center;\n  }\n\n  .contact-title[_ngcontent-%COMP%] {\n    font-size: 40px;\n    text-align: center;\n  }\n\n  .contact-subtitle[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: normal;\n    text-align: center;\n  }\n\n  .contact-text-div[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-top: 1.5rem;\n  }\n\n  .contact-detail[_ngcontent-%COMP%], .contact-detail-email[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .contact-image-div[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFHQTtFQUNFLE9BQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUdBOztFQUVFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBQUY7O0FBR0E7O0VBRUUsWUFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBLGdCQUFBOztBQUNBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtFQUFGOztFQUdBO0lBQ0UsZUFBQTtJQUNBLGtCQUFBO0VBQUY7O0VBR0E7SUFDRSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFQUFGOztFQUdBO0lBQ0Usa0JBQUE7SUFDQSxrQkFBQTtFQUFGOztFQUdBOztJQUVFLGVBQUE7RUFBRjs7RUFHQTtJQUNFLGFBQUE7RUFBRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3QtZGl2LW1haW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcblxyXG4uc3ViVGl0bGUge1xyXG4gIGNvbG9yOiByZ2IoMTM0LCAxNDIsIDE1MCk7XHJcbn1cclxuXHJcblxyXG4uY29udGFjdC1kaXYtbWFpbiA+ICoge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5jb250YWN0LXRpdGxlIHtcclxuICBmb250LXNpemU6IDY1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIGNvbG9yOiAjODY4ZTk2O1xyXG59XHJcblxyXG4uY29udGFjdC1kZXRhaWwsXHJcbi5jb250YWN0LWRldGFpbC1lbWFpbCB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogIzg2OGU5NjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5jb250YWN0LWRldGFpbDpob3ZlcixcclxuLmNvbnRhY3QtZGV0YWlsLWVtYWlsOmhvdmVyIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAxcHggMnB4ICNiNWI1YjU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5jb250YWN0LXN1YnRpdGxlIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uY29udGFjdC10ZXh0LWRpdiB7XHJcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG59XHJcblxyXG4uY29udGFjdC1tYXJnaW4tdG9wIHtcclxuICBtYXJnaW4tdG9wOiA0cmVtO1xyXG59XHJcblxyXG4uY29udGFjdC1pbWFnZSB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogMS41cmVtO1xyXG4gIG1hcmdpbi10b3A6IC00cmVtO1xyXG59XHJcblxyXG4vKiBNZWRpYSBRdWVyeSAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogMTM4MHB4KSwgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuY29udGFjdC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDU2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3QtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3Qtc3VidGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5jb250YWN0LXRleHQtZGl2IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICB9XHJcblxyXG4gIC5jb250YWN0LWRldGFpbCxcclxuICAuY29udGFjdC1kZXRhaWwtZW1haWwge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3QtaW1hZ2UtZGl2IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/education/education.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/education/education.component.ts ***!
    \**************************************************/

  /*! exports provided: EducationComponent */

  /***/
  function srcAppEducationEducationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EducationComponent", function () {
      return EducationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _animation_animate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../animation/animate.component */
    "./src/app/animation/animate.component.ts");

    function EducationComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](i_r1.className1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](i_r1.className2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.duration);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.heading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.subtitle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.content);
      }
    }

    var EducationComponent = /*#__PURE__*/function () {
      function EducationComponent() {
        _classCallCheck(this, EducationComponent);

        this.timeline = [// {
        //   heading: "Infosys",
        //   duration: "Present",
        //   subtitle: "",
        //   content: "Upcoming Full stack develover at Infosys!",
        //   className1: "mar-left",
        //   className2: "prt_about_learnbox_right"
        // },
        {
          heading: "Computer Science & Engineering",
          duration: "2023",
          subtitle: "FST Manar University, Tunisia",
          content: "",
          className1: "",
          className2: ""
        }, {
          heading: "High school diploma",
          duration: "2019",
          subtitle: "Secondary Public School , jedaida-mannouba",
          content: "Successfully completed in 2019 .\n" + "",
          className1: "",
          className2: ""
        }];
      }

      _createClass(EducationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EducationComponent;
    }();

    EducationComponent.ɵfac = function EducationComponent_Factory(t) {
      return new (t || EducationComponent)();
    };

    EducationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EducationComponent,
      selectors: [["app-education"]],
      decls: 8,
      vars: 1,
      consts: [["id", "education", 1, "prt_about_edulearn_wrapper"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "prt_heading_wrapper"], [1, "prt_heading"], [1, "timeline-heading"], [1, "prt_about_learnsection"], ["wmAnimate", "landing", "aos", "", "speed", "normal", 4, "ngFor", "ngForOf"], ["wmAnimate", "landing", "aos", "", "speed", "normal"], [1, "prt_about_learnbox_year"], [1, "prt_about_learnbox_info"]],
      template: function EducationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Education \uD83D\uDCBB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EducationComponent_div_7_Template, 13, 8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.timeline);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _animation_animate_component__WEBPACK_IMPORTED_MODULE_2__["AnimateComponent"]],
      styles: [".prt_about_edulearn_wrapper[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  margin-top: 7rem;\n  margin-bottom: 7rem;\n}\n\n.timeline-heading[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 400;\n  color: #868e96;\n}\n\n.prt_heading_wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.prt_about_learnsection[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  z-index: 1;\n}\n\n.prt_heading[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n  position: relative;\n  transition: all 0.3s;\n}\n\n.prt_btn[_ngcontent-%COMP%], .prt_heading[_ngcontent-%COMP%] {\n  display: inline-block;\n  -webkit-transition: all 0.3s;\n  -moz-transition: all 0.3s;\n  -ms-transition: all 0.3s;\n  -o-transition: all 0.3s;\n}\n\n.prt_heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 40px;\n  position: relative;\n  width: auto;\n  padding-bottom: 15px;\n}\n\n.prt_heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .prt_heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 400;\n}\n\n.h1[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%], .h4[_ngcontent-%COMP%], .h5[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-weight: 400;\n  line-height: 1.1;\n  color: #ffffff;\n}\n\n.prt_heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: right;\n  width: auto;\n  background-color: #010101;\n  padding-left: 10px;\n  position: absolute;\n  right: 0;\n  bottom: -10px;\n  color: #6c63ff;\n}\n\n.prt_about_learnbox_info[_ngcontent-%COMP%] {\n  display: table-cell;\n  width: calc(100% - 200px);\n}\n\n.prt_about_learnbox_info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n  text-transform: capitalize;\n  margin-top: 0;\n  font-weight: 500;\n}\n\n.prt_about_learnbox_info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #000;\n  text-transform: capitalize;\n  margin-bottom: 10px;\n  color: #868e96;\n}\n\n.prt_about_learnbox_info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #868e96;\n}\n\n.prt_about_learnbox_right[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  margin-bottom: 30px;\n  position: relative;\n  transition: all 0.3s;\n}\n\n.prt_about_learnbox_left[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  margin-bottom: 30px;\n  text-align: right;\n  position: relative;\n  transition: all 0.3s;\n}\n\n.mar-left[_ngcontent-%COMP%] {\n  margin-left: 50%;\n  padding-left: 2rem;\n}\n\n@media (max-width: 768px) {\n  .mar-left[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n\n.mar-right[_ngcontent-%COMP%] {\n  margin-right: 50%;\n  padding-right: 2rem;\n}\n\n@media (max-width: 768px) {\n  .mar-right[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n\n.prt_about_learnbox_left[_ngcontent-%COMP%]   .prt_about_learnbox_year[_ngcontent-%COMP%] {\n  float: right;\n  padding-top: 30px;\n}\n\n.prt_about_learnbox_year[_ngcontent-%COMP%] {\n  display: table-cell;\n  width: 200px;\n  vertical-align: middle;\n}\n\n.prt_about_learnbox_left[_ngcontent-%COMP%]   .prt_about_learnbox_info[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.prt_about_learnbox_info[_ngcontent-%COMP%] {\n  display: table-cell;\n  width: calc(100% - 200px);\n}\n\n.prt_about_learnbox_year[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 60px;\n  margin: 0;\n  color: #a1bcd8;\n  font-weight: 500;\n}\n\n.prt_about_learnsection[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  background-color: #202020;\n  width: 2px;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  z-index: -1;\n}\n\n@media (max-width: 768px) {\n  .prt_about_learnsection[_ngcontent-%COMP%]:after {\n    width: 0;\n    visibility: hidden;\n  }\n}\n\n.prt_about_learnbox_left[_ngcontent-%COMP%]:after, .prt_about_learnbox_right[_ngcontent-%COMP%]:after {\n  content: \"\";\n  height: 15px;\n  top: 50%;\n  margin-top: -7px;\n}\n\n.prt_about_learnbox_right[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  margin-bottom: 30px;\n  position: relative;\n  transition: all 0.3s;\n}\n\n.prt_about_learnbox_right[_ngcontent-%COMP%]:after {\n  position: absolute;\n  background-color: #000;\n  width: 15px;\n  border-radius: 100%;\n  border: 0px solid #fff;\n  left: -41px;\n  transition: all 0.3s;\n  z-index: 100;\n}\n\n@media (max-width: 768px) {\n  .prt_about_learnbox_right[_ngcontent-%COMP%]:after {\n    visibility: hidden;\n  }\n}\n\n.prt_about_learnbox_left[_ngcontent-%COMP%], .prt_about_learnbox_right[_ngcontent-%COMP%]:hover:after {\n  -webkit-transition: all 0.3s;\n  -moz-transition: all 0.3s;\n  -ms-transition: all 0.3s;\n}\n\n.prt_about_learnbox_right[_ngcontent-%COMP%]:hover:after {\n  background-color: #fff;\n  border: 3px solid #6c63ff;\n  transition: all 0.3s;\n}\n\n.prt_about_learnbox_left[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  margin-bottom: 30px;\n  text-align: right;\n  position: relative;\n  transition: all 0.3s;\n}\n\n.prt_about_learnbox_left[_ngcontent-%COMP%]:after, .prt_about_learnbox_left[_ngcontent-%COMP%]:hover:after {\n  -webkit-transition: all 0.3s;\n  -moz-transition: all 0.3s;\n  -ms-transition: all 0.3s;\n}\n\n.prt_about_learnbox_left[_ngcontent-%COMP%]:after {\n  position: absolute;\n  background-color: #000;\n  width: 15px;\n  border-radius: 100%;\n  border: 0px solid #fff;\n  right: -39px;\n  transition: all 0.3s;\n  z-index: 100;\n}\n\n@media (max-width: 768px) {\n  .prt_about_learnbox_left[_ngcontent-%COMP%]:after {\n    visibility: hidden;\n  }\n}\n\n.prt_about_experiencebox[_ngcontent-%COMP%]:after, .prt_contact_details_box[_ngcontent-%COMP%]:after, .prt_couter_wrapper[_ngcontent-%COMP%]:after {\n  right: 0;\n  bottom: 0;\n  content: \"\";\n}\n\n.prt_about_learnbox_left[_ngcontent-%COMP%]:hover:after {\n  background-color: #fff;\n  border: 3px solid #6c63ff;\n  transition: all 0.3s;\n}\n\n.prt_about_learnbox_left[_ngcontent-%COMP%]:hover   .prt_about_learnbox_year[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .prt_about_learnbox_right[_ngcontent-%COMP%]:hover   .prt_about_learnbox_year[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #6c63ff;\n  transition: all 0.3s;\n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n}\n\n@media (max-width: 768px) {\n  .prt_about_learnbox_left[_ngcontent-%COMP%], .prt_about_learnbox_right[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #202020;\n    padding-bottom: 30px;\n  }\n}\n\n\n\n@keyframes fade_down {\n  0% {\n    opacity: 0.01;\n    transform: translateY(-20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_up {\n  0% {\n    opacity: 0.01;\n    transform: translateY(20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_right {\n  0% {\n    opacity: 0.01;\n    transform: translateX(20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_left {\n  0% {\n    opacity: 0.01;\n    transform: translateX(-100px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBS0E7RUFDRSxrQkFBQTtBQUZGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQURGOztBQXdCQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQXJCRjs7QUF1QkE7RUFDRSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0FBcEJGOztBQXNCQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQW5CRjs7QUFxQkE7RUFFRSxTQUFBO0VBQ0EsZ0JBQUE7QUFuQkY7O0FBc0JBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFuQkY7O0FBcUJBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBbEJGOztBQXFCQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUFsQkY7O0FBb0JBO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBakJGOztBQW1CQTtFQUNFLFdBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQWhCRjs7QUFrQkE7RUFDRSxTQUFBO0VBQ0EsY0FBQTtBQWZGOztBQWlCQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLG9CQUFBO0FBZEY7O0FBZ0JBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxvQkFBQTtBQWJGOztBQXFDQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFsQ0Y7O0FBbUNFO0VBSEY7SUFJSSxTQUFBO0VBaENGO0FBQ0Y7O0FBa0NBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQS9CRjs7QUFnQ0U7RUFIRjtJQUlJLFNBQUE7RUE3QkY7QUFDRjs7QUErQkE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUE1QkY7O0FBOEJBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUEzQkY7O0FBNkJBO0VBQ0UsV0FBQTtBQTFCRjs7QUE0QkE7RUFDRyxtQkFBQTtFQUNBLHlCQUFBO0FBekJIOztBQTJCQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBeEJGOztBQTZCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQTFCRjs7QUE0QkU7RUFaRjtJQWFRLFFBQUE7SUFDSixrQkFBQTtFQXpCRjtBQUNGOztBQTZCQTs7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBQTFCRjs7QUE2QkE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxvQkFBQTtBQTFCRjs7QUE2QkE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBRUEsb0JBQUE7RUFDQSxZQUFBO0FBMUJGOztBQTJCRTtFQVZGO0lBV0ksa0JBQUE7RUF4QkY7QUFDRjs7QUEyQkE7O0VBRUUsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0FBeEJGOztBQTJCQTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFFQSxvQkFBQTtBQXhCRjs7QUEyQkE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLG9CQUFBO0FBeEJGOztBQTJCQTs7RUFFRSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7QUF4QkY7O0FBMkJBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUVBLG9CQUFBO0VBQ0EsWUFBQTtBQXhCRjs7QUF5QkU7RUFWRjtJQVdJLGtCQUFBO0VBdEJGO0FBQ0Y7O0FBeUJBOzs7RUFHRSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUF0QkY7O0FBeUJBO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUVBLG9CQUFBO0FBdEJGOztBQXlCQTs7RUFFRSxjQUFBO0VBS0Esb0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLHlDQUFBO0VBQ0EsMEJBQUE7QUF0QkY7O0FBMEJBO0VBQ0U7SUFFRSxnQ0FBQTtJQUNBLG9CQUFBO0VBeEJGO0FBQ0Y7O0FBK0JBLGVBQUE7O0FBQ0E7RUFDRTtJQUNFLGFBQUE7SUFDQSw0QkFBQTtJQUNBLG9IQUFBO0VBN0JGO0VBZ0NBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0lBQ0Esb0hBQUE7RUE5QkY7QUFDRjs7QUFrQ0E7RUFDRTtJQUNFLGFBQUE7SUFDQSwyQkFBQTtJQUNBLG9IQUFBO0VBaENGO0VBbUNBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0lBQ0Esb0hBQUE7RUFqQ0Y7QUFDRjs7QUFvQ0E7RUFDRTtJQUNFLGFBQUE7SUFDQSwyQkFBQTtJQUNBLG9IQUFBO0VBbENGO0VBcUNBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0lBQ0Esb0hBQUE7RUFuQ0Y7QUFDRjs7QUFzQ0E7RUFDRTtJQUNFLGFBQUE7SUFDQSw2QkFBQTtJQUNBLG9IQUFBO0VBcENGO0VBdUNBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0lBQ0Esb0hBQUE7RUFyQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJ0X2Fib3V0X2VkdWxlYXJuX3dyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiA3cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDdyZW07XHJcbiAgLy9hbmltYXRpb246IGZhZGVfdXAgMnMgNHM7XHJcbn1cclxuLnRpbWVsaW5lLWhlYWRpbmd7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICM4NjhlOTY7XHJcbiAgXHJcbn1cclxuLy8jNmM2M2ZmXHJcbi8vIzg2OGU5NlxyXG4vLyMwYTUyZDZcclxuLnBydF9oZWFkaW5nX3dyYXBwZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucHJ0X2Fib3V0X2xlYXJuc2VjdGlvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgLy9cclxuICAvLyY6OmJlZm9yZXtcclxuICAvLyAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8vICBsZWZ0OiA1MCU7XHJcbiAgLy8gIHRvcDogMDtcclxuICAvLyAgY29udGVudDogJyAnO1xyXG4gIC8vICBkaXNwbGF5OiBibG9jaztcclxuICAvLyAgd2lkdGg6IHB4O1xyXG4gIC8vICBoZWlnaHQ6IDEwMCU7XHJcbiAgLy8gIG1hcmdpbi1sZWZ0OiAtM3B4O1xyXG4gIC8vICBiYWNrZ3JvdW5kOiByZ2IoODAsODAsODApO1xyXG4gIC8vICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoODAsODAsODAsMCkgMCUsIHJnYig4MCw4MCw4MCkgOCUsIHJnYig4MCw4MCw4MCkgOTIlLCByZ2JhKDgwLDgwLDgwLDApIDEwMCUpO1xyXG4gIC8vICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLHJnYmEoMzAsODcsMTUzLDEpKSwgY29sb3Itc3RvcCgxMDAlLHJnYmEoMTI1LDE4NSwyMzIsMSkpKTtcclxuICAvLyAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDgwLDgwLDgwLDApIDAlLCByZ2IoODAsODAsODApIDglLCByZ2IoODAsODAsODApIDkyJSwgcmdiYSg4MCw4MCw4MCwwKSAxMDAlKTtcclxuICAvLyAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSg4MCw4MCw4MCwwKSAwJSwgcmdiKDgwLDgwLDgwKSA4JSwgcmdiKDgwLDgwLDgwKSA5MiUsIHJnYmEoODAsODAsODAsMCkgMTAwJSk7XHJcbiAgLy8gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDgwLDgwLDgwLDApIDAlLCByZ2IoODAsODAsODApIDglLCByZ2IoODAsODAsODApIDkyJSwgcmdiYSg4MCw4MCw4MCwwKSAxMDAlKTtcclxuICAvLyAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSg4MCw4MCw4MCwwKSAwJSwgcmdiKDgwLDgwLDgwKSA4JSwgcmdiKDgwLDgwLDgwKSA5MiUsIHJnYmEoODAsODAsODAsMCkgMTAwJSk7XHJcbiAgLy9cclxuICAvLyAgei1pbmRleDogNTtcclxuICAvL31cclxufVxyXG5cclxuLnBydF9oZWFkaW5nIHtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG59XHJcbi5wcnRfYnRuLCAucHJ0X2hlYWRpbmcge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAuM3M7XHJcbn1cclxuLnBydF9oZWFkaW5nIGgxIHtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG59XHJcbi5wcnRfaGVhZGluZyBoMSwgLnBydF9oZWFkaW5nIHAge1xyXG4gIC8vdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLmgxLCAuaDIsIC5oMywgLmg0LCAuaDUsIC5oNiwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMS4xO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5wcnRfaGVhZGluZyBwIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB3aWR0aDogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwMTAxO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAtMTBweDtcclxuICBjb2xvcjogIzZjNjNmZjtcclxufVxyXG5cclxuLnBydF9hYm91dF9sZWFybmJveF9pbmZvIHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMDBweCk7XHJcbn1cclxuLnBydF9hYm91dF9sZWFybmJveF9pbmZvIGg0IHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5wcnRfYWJvdXRfbGVhcm5ib3hfaW5mbyBzcGFuIHtcclxuICBjb2xvcjogIzAwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGNvbG9yOiAjODY4ZTk2O1xyXG59XHJcbi5wcnRfYWJvdXRfbGVhcm5ib3hfaW5mbyBwIHtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6ICM4NjhlOTY7XHJcbn1cclxuLnBydF9hYm91dF9sZWFybmJveF9yaWdodCB7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG59XHJcbi5wcnRfYWJvdXRfbGVhcm5ib3hfbGVmdCB7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG5cclxuXHJcbn1cclxuLy8ucHJ0X2Fib3V0X2xlYXJuYm94X2xlZnQ6OmFmdGVyIHtcclxuLy8gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbi8vICB3aWR0aDogMTVweDtcclxuLy8gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbi8vICBib3JkZXI6IDNweCBzb2xpZCBvcmFuZ2VyZWQ7XHJcbi8vICByaWdodDogLTIycHg7XHJcbi8vICAtby10cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4vLyAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuLy99XHJcbi8vLnBydF9hYm91dF9sZWFybmJveF9yaWdodDo6YWZ0ZXIge1xyXG4vLyAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuLy8gIHdpZHRoOiAxNXB4O1xyXG4vLyAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuLy8gIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XHJcbi8vICBsZWZ0OiAtMjJweDtcclxuLy8gIC1vLXRyYW5zaXRpb246IGFsbCAuM3M7XHJcbi8vICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4vL31cclxuLm1hci1sZWZ0e1xyXG4gIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG4ubWFyLXJpZ2h0e1xyXG4gIG1hcmdpbi1yaWdodDogNTAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcbi5wcnRfYWJvdXRfbGVhcm5ib3hfbGVmdCAucHJ0X2Fib3V0X2xlYXJuYm94X3llYXIge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG4ucHJ0X2Fib3V0X2xlYXJuYm94X3llYXIge1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLnBydF9hYm91dF9sZWFybmJveF9sZWZ0IC5wcnRfYWJvdXRfbGVhcm5ib3hfaW5mbyB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLnBydF9hYm91dF9sZWFybmJveF9pbmZvIHtcclxuICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwMHB4KTtcclxuIH1cclxuLnBydF9hYm91dF9sZWFybmJveF95ZWFyIGgxIHtcclxuICBmb250LXNpemU6IDYwcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGNvbG9yOiAjYTFiY2Q4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcblxyXG5cclxuLnBydF9hYm91dF9sZWFybnNlY3Rpb246YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XHJcbiAgd2lkdGg6IDJweDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgei1pbmRleDogLTE7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIHdpZHRoOiAwO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4ucHJ0X2Fib3V0X2xlYXJuYm94X2xlZnQ6YWZ0ZXIsXHJcbi5wcnRfYWJvdXRfbGVhcm5ib3hfcmlnaHQ6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIHRvcDogNTAlO1xyXG4gIG1hcmdpbi10b3A6IC03cHhcclxufVxyXG5cclxuLnBydF9hYm91dF9sZWFybmJveF9yaWdodCB7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICB0cmFuc2l0aW9uOiBhbGwgLjNzXHJcbn1cclxuXHJcbi5wcnRfYWJvdXRfbGVhcm5ib3hfcmlnaHQ6YWZ0ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgYm9yZGVyOiAwcHggc29saWQgI2ZmZjtcclxuICBsZWZ0OiAtNDFweDtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxufVxyXG5cclxuLnBydF9hYm91dF9sZWFybmJveF9sZWZ0LFxyXG4ucHJ0X2Fib3V0X2xlYXJuYm94X3JpZ2h0OmhvdmVyOmFmdGVyIHtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgLjNzXHJcbn1cclxuXHJcbi5wcnRfYWJvdXRfbGVhcm5ib3hfcmlnaHQ6aG92ZXI6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgIzZjNjNmZjtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuM3NcclxufVxyXG5cclxuLnBydF9hYm91dF9sZWFybmJveF9sZWZ0IHtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuM3NcclxufVxyXG5cclxuLnBydF9hYm91dF9sZWFybmJveF9sZWZ0OmFmdGVyLFxyXG4ucHJ0X2Fib3V0X2xlYXJuYm94X2xlZnQ6aG92ZXI6YWZ0ZXIge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAuM3NcclxufVxyXG5cclxuLnBydF9hYm91dF9sZWFybmJveF9sZWZ0OmFmdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICB3aWR0aDogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIGJvcmRlcjogMHB4IHNvbGlkICNmZmY7XHJcbiAgcmlnaHQ6IC0zOXB4O1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG59XHJcblxyXG4ucHJ0X2Fib3V0X2V4cGVyaWVuY2Vib3g6YWZ0ZXIsXHJcbi5wcnRfY29udGFjdF9kZXRhaWxzX2JveDphZnRlcixcclxuLnBydF9jb3V0ZXJfd3JhcHBlcjphZnRlciB7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGNvbnRlbnQ6IFwiXCJcclxufVxyXG5cclxuLnBydF9hYm91dF9sZWFybmJveF9sZWZ0OmhvdmVyOmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICM2YzYzZmY7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICB0cmFuc2l0aW9uOiBhbGwgLjNzXHJcbn1cclxuXHJcbi5wcnRfYWJvdXRfbGVhcm5ib3hfbGVmdDpob3ZlciAucHJ0X2Fib3V0X2xlYXJuYm94X3llYXIgaDEsXHJcbi5wcnRfYWJvdXRfbGVhcm5ib3hfcmlnaHQ6aG92ZXIgLnBydF9hYm91dF9sZWFybmJveF95ZWFyIGgxIHtcclxuICBjb2xvcjogIzZjNjNmZjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAvKiAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7ICovXHJcbiAgLyogLW1vei1hbmltYXRpb24tZHVyYXRpb246IDJzOyAqL1xyXG4gIC8qIC1tcy1hbmltYXRpb24tZHVyYXRpb246IDJzOyAqL1xyXG4gIC8qIC1vLWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7ICovXHJcbiAgLyogYW5pbWF0aW9uLWR1cmF0aW9uOiAyczsgKi9cclxuICAvKiAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLjNzOyAqL1xyXG4gIC8qIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAuM3M7ICovXHJcbiAgLyogLW1zLWFuaW1hdGlvbi1kZWxheTogLjNzOyAqL1xyXG4gIC8qIC1vLWFuaW1hdGlvbi1kZWxheTogLjNzOyAqL1xyXG4gIC8qIGFuaW1hdGlvbi1kZWxheTogLjNzOyAqL1xyXG4gIC8qIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOyAqL1xyXG4gIC8qIGFuaW1hdGlvbi1uYW1lOiBwdWxzZSAqL1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnBydF9hYm91dF9sZWFybmJveF9sZWZ0LCAucHJ0X2Fib3V0X2xlYXJuYm94X3JpZ2h0IHtcclxuXHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzIwMjAyMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gIH1cclxufVxyXG4vL0BtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4vLyAgLm1haW4tYnV0dG9uIHtcclxuLy8gICAgZm9udC1zaXplOiAxMnB4O1xyXG4vLyAgfVxyXG4vL31cclxuLyogQW5pbWF0aW9ucyAqL1xyXG5Aa2V5ZnJhbWVzIGZhZGVfZG93biB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMC4wMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcclxuICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXHJcbiAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlX3VwIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwLjAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXHJcbiAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxyXG4gICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBmYWRlX3JpZ2h0IHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwLjAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXHJcbiAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxyXG4gICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBmYWRlX2xlZnQge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDAuMDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxyXG4gICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcclxuICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EducationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-education',
          templateUrl: './education.component.html',
          styleUrls: ['./education.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/experience/experience-card/experience-card.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/experience/experience-card/experience-card.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ExperienceCardComponent */

  /***/
  function srcAppExperienceExperienceCardExperienceCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExperienceCardComponent", function () {
      return ExperienceCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _animation_animate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../animation/animate.component */
    "./src/app/animation/animate.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ExperienceCardComponent_li_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var lis_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lis_r1);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        background: a0
      };
    };

    var ExperienceCardComponent = /*#__PURE__*/function () {
      function ExperienceCardComponent() {
        _classCallCheck(this, ExperienceCardComponent);
      } // angular.module('yourApp', ['ngColorThief'])


      _createClass(ExperienceCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExperienceCardComponent;
    }();

    ExperienceCardComponent.ɵfac = function ExperienceCardComponent_Factory(t) {
      return new (t || ExperienceCardComponent)();
    };

    ExperienceCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExperienceCardComponent,
      selectors: [["app-experience-card"]],
      inputs: {
        experience: "experience"
      },
      decls: 16,
      vars: 9,
      consts: [["wmAnimate", "bumpIn", "aos", "", "speed", "normal", 1, "experience-card"], [1, "experience-banner", 3, "ngStyle"], [1, "experience-blurred_div"], [1, "experience-div-company"], [1, "experience-text-company"], ["crossOrigin", "anonymous", 1, "experience-roundedimg", 3, "src"], [1, "experience-text-details"], [1, "experience-text-role"], [1, "experience-text-date"], [1, "subTitle", "experience-text-desc"], ["class", "subTitle", 4, "ngFor", "ngForOf"], [1, "subTitle"]],
      template: function ExperienceCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ExperienceCardComponent_li_15_Template, 2, 1, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.experience.color));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.experience.company);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.experience.companylogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.experience.role);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.experience.date);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.experience.desc);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experience.descBullets);
        }
      },
      directives: [_animation_animate_component__WEBPACK_IMPORTED_MODULE_1__["AnimateComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".experience-card[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: rgba(255, 255, 255, 0.582);\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 30px -15px;\n  border-radius: 10px;\n  border: 1px solid rgba(211, 211, 211, 0.397);\n}\n\n.experience-card[_ngcontent-%COMP%]:hover {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px -10px;\n}\n\n.experience-banner[_ngcontent-%COMP%] {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 150%;\n  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5));\n  border-radius: 10px 10px 0px 0px;\n  -moz-filter: blur(0px);\n  -o-filter: blur(0px);\n  -ms-filter: blur(0px);\n  filter: blur(0px);\n  height: 11rem;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n}\n\n.experience-blurred_div[_ngcontent-%COMP%] {\n  position: absolute;\n  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2));\n  -moz-filter: blur(5px);\n  -o-filter: blur(5px);\n  -ms-filter: blur(5px);\n  filter: blur(5px);\n  height: 11rem;\n  top: 0;\n  left: 0;\n  width: 100%;\n  border-radius: 10px 10px 0px 0px;\n}\n\n.experience-div-company[_ngcontent-%COMP%] {\n  position: absolute;\n  background: transparent;\n  height: 9rem;\n  top: 0;\n  left: 0;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.experience-text-company[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1.5rem;\n  margin: 0;\n  color: #fff;\n  font-size: 25px;\n  text-align: center;\n  font-weight: 700;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.experience-roundedimg[_ngcontent-%COMP%] {\n  position: absolute;\n  object-fit: cover;\n  left: 0;\n  right: 0;\n  top: 7rem;\n  margin-left: auto;\n  margin-right: auto;\n  width: 8rem;\n  height: 8rem;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);\n  border-radius: 50%;\n}\n\n.experience-text-role[_ngcontent-%COMP%] {\n  text-align: center;\n  color: black;\n  font-weight: 700;\n  font-size: 25px;\n  margin: 0px;\n  padding-top: 1.5rem;\n  line-height: normal;\n}\n\n.experience-text-date[_ngcontent-%COMP%] {\n  text-align: center;\n  color: black;\n  font-size: 20px;\n  margin: 0px;\n  padding-top: 1rem;\n  font-weight: 600;\n}\n\n.experience-text-desc[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1rem;\n  line-height: normal;\n}\n\n.subTitle[_ngcontent-%COMP%] {\n  color: #868e96;\n}\n\n.experience-text-details[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  margin-top: 2rem;\n}\n\n\n\n@media (max-width: 1380px) {\n  .experience-text-role[_ngcontent-%COMP%] {\n    padding-top: 0.5rem;\n    font-size: 22px;\n  }\n\n  .experience-text-company[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n\n  .experience-text-date[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  .experience-roundedimg[_ngcontent-%COMP%] {\n    width: 6.5rem;\n    height: 6.5rem;\n  }\n}\n\n@media (max-width: 768px) {\n  .experience-text-role[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n\n  .experience-text-company[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n\n  .experience-text-date[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  .experience-text-desc[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLWNhcmQvZXhwZXJpZW5jZS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGtEQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtBQUFGOztBQUdBO0VBQ0Usa0RBQUE7QUFBRjs7QUFHQTtFQUNFLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLG1FQUFBO0VBQ0EsZ0NBQUE7RUFFQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxtRUFBQTtFQUVBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQSxnQkFBQTs7QUFFQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxlQUFBO0VBQ0Y7O0VBQ0E7SUFDRSxlQUFBO0VBRUY7O0VBQUE7SUFDRSxlQUFBO0VBR0Y7O0VBREE7SUFDRSxhQUFBO0lBQ0EsY0FBQTtFQUlGO0FBQ0Y7O0FBREE7RUFDRTtJQUNFLGVBQUE7RUFHRjs7RUFEQTtJQUNFLGVBQUE7RUFJRjs7RUFGQTtJQUNFLGVBQUE7RUFLRjs7RUFIQTtJQUNFLGVBQUE7RUFNRjtBQUNGOztBQUhBO0VBQ0U7SUFBTyxVQUFBO0VBTVA7RUFMQTtJQUFPLFVBQUE7RUFRUDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLWNhcmQvZXhwZXJpZW5jZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5leHBlcmllbmNlLWNhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTgyKTtcclxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDEwcHggMzBweCAtMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjExLCAyMTEsIDIxMSwgMC4zOTcpO1xyXG59XHJcblxyXG4uZXhwZXJpZW5jZS1jYXJkOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDIwcHggMzBweCAtMTBweDtcclxufVxyXG5cclxuLmV4cGVyaWVuY2UtYmFubmVyIHtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDE1MCU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC43KSwgcmdiYSgwLCAwLCAwLCAwLjUpKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcclxuICAtd2Via2l0LWZpbHRlcjogYmx1cigwcHgpO1xyXG4gIC1tb3otZmlsdGVyOiBibHVyKDBweCk7XHJcbiAgLW8tZmlsdGVyOiBibHVyKDBweCk7XHJcbiAgLW1zLWZpbHRlcjogYmx1cigwcHgpO1xyXG4gIGZpbHRlcjogYmx1cigwcHgpO1xyXG4gIGhlaWdodDogMTFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5leHBlcmllbmNlLWJsdXJyZWRfZGl2IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC40KSwgcmdiYSgwLCAwLCAwLCAwLjIpKTtcclxuICAtd2Via2l0LWZpbHRlcjogYmx1cig1cHgpO1xyXG4gIC1tb3otZmlsdGVyOiBibHVyKDVweCk7XHJcbiAgLW8tZmlsdGVyOiBibHVyKDVweCk7XHJcbiAgLW1zLWZpbHRlcjogYmx1cig1cHgpO1xyXG4gIGZpbHRlcjogYmx1cig1cHgpO1xyXG4gIGhlaWdodDogMTFyZW07XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XHJcbn1cclxuXHJcbi5leHBlcmllbmNlLWRpdi1jb21wYW55IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgaGVpZ2h0OiA5cmVtO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmV4cGVyaWVuY2UtdGV4dC1jb21wYW55IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4uZXhwZXJpZW5jZS1yb3VuZGVkaW1nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDdyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiA4cmVtO1xyXG4gIGhlaWdodDogOHJlbTtcclxuICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5leHBlcmllbmNlLXRleHQtcm9sZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nLXRvcDogMS41cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5leHBlcmllbmNlLXRleHQtZGF0ZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmV4cGVyaWVuY2UtdGV4dC1kZXNjIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG59XHJcbi5zdWJUaXRsZSB7XHJcbiAgY29sb3I6ICM4NjhlOTY7XHJcbn1cclxuLmV4cGVyaWVuY2UtdGV4dC1kZXRhaWxzIHtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG5cclxuLyogTWVkaWEgUXVlcnkgKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMzgwcHgpIHtcclxuICAuZXhwZXJpZW5jZS10ZXh0LXJvbGUge1xyXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICB9XHJcbiAgLmV4cGVyaWVuY2UtdGV4dC1jb21wYW55IHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICB9XHJcbiAgLmV4cGVyaWVuY2UtdGV4dC1kYXRlIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgLmV4cGVyaWVuY2Utcm91bmRlZGltZyB7XHJcbiAgICB3aWR0aDogNi41cmVtO1xyXG4gICAgaGVpZ2h0OiA2LjVyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuZXhwZXJpZW5jZS10ZXh0LXJvbGUge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gIH1cclxuICAuZXhwZXJpZW5jZS10ZXh0LWNvbXBhbnkge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gIH1cclxuICAuZXhwZXJpZW5jZS10ZXh0LWRhdGUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICAuZXhwZXJpZW5jZS10ZXh0LWRlc2Mge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlaW4ge1xyXG4gIGZyb20geyBvcGFjaXR5OiAwOyB9XHJcbiAgdG8gICB7IG9wYWNpdHk6IDE7IH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-experience-card',
          templateUrl: './experience-card.component.html',
          styleUrls: ['./experience-card.component.scss']
        }]
      }], function () {
        return [];
      }, {
        experience: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/experience/experience.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/experience/experience.component.ts ***!
    \****************************************************/

  /*! exports provided: ExperienceComponent */

  /***/
  function srcAppExperienceExperienceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function () {
      return ExperienceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./experience-card/experience-card.component */
    "./src/app/experience/experience-card/experience-card.component.ts");

    function ExperienceComponent_div_0_app_experience_card_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-experience-card", 6);
      }

      if (rf & 2) {
        var card_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("experience", card_r2);
      }
    }

    function ExperienceComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Experiences");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExperienceComponent_div_0_app_experience_card_7_Template, 1, 1, "app-experience-card", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.workExperiences.experience);
      }
    }

    var ExperienceComponent = /*#__PURE__*/function () {
      function ExperienceComponent() {
        _classCallCheck(this, ExperienceComponent);

        this.workExperiences = {
          viewExperiences: true,
          experience: [{
            role: "internship",
            company: "Misfat",
            color: "#3781c2",
            companylogo: "https://play-lh.googleusercontent.com/lF9kXudbaWd9reQtOQ4tqv04JEstv5820LbmMs4JpX0ed27rU33rNcOudmBk-Qrjx08",
            date: "Jun 2022 – Aug 2022",
            desc: "I have completed 2 months internship in web developement"
          }]
        };
      }

      _createClass(ExperienceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExperienceComponent;
    }();

    ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) {
      return new (t || ExperienceComponent)();
    };

    ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExperienceComponent,
      selectors: [["app-experience"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], ["id", "experience"], ["id", "workExperience", 1, "experience-container"], [1, "experience-heading"], [1, "experience-cards-div"], [3, "experience", 4, "ngFor", "ngForOf"], [3, "experience"]],
      template: function ExperienceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExperienceComponent_div_0_Template, 8, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.workExperiences.viewExperiences);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_2__["ExperienceCardComponent"]],
      styles: [".experience-cards-div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));\n  gap: 1rem 1rem;\n}\n\n.experience-heading[_ngcontent-%COMP%] {\n  font-size: 56px;\n  font-weight: 400;\n  margin-bottom: 2rem;\n  color: #868e96;\n}\n\n.experience-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 90%;\n  padding: 20px 10px;\n  margin: 0px auto;\n  margin-top: 2rem;\n}\n\n.experience-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n\n\n@media (max-width: 1380px) {\n  .experience-heading[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n}\n\n@media (max-width: 768px) {\n  .experience-heading[_ngcontent-%COMP%] {\n    font-size: 30px;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUVBLDJEQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsT0FBQTtBQURGOztBQUlBLGdCQUFBOztBQUVBO0VBQ0U7SUFDRSxlQUFBO0VBRkY7QUFDRjs7QUFLQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGtCQUFBO0VBSEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHBlcmllbmNlLWNhcmRzLWRpdiB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICAvL2dyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsMWZyKTtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI5MHB4LCAxZnIpKTtcclxuICBnYXA6IDFyZW0gMXJlbTtcclxuICAvL2JhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxufVxyXG5cclxuLmV4cGVyaWVuY2UtaGVhZGluZyB7XHJcbiAgZm9udC1zaXplOiA1NnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICBjb2xvcjogIzg2OGU5NjtcclxufVxyXG5cclxuLmV4cGVyaWVuY2UtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG5cclxuLmV4cGVyaWVuY2UtY29udGFpbmVyPioge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi8qIE1lZGlhIFF1ZXJ5ICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTM4MHB4KSB7XHJcbiAgLmV4cGVyaWVuY2UtaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuZXhwZXJpZW5jZS1oZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-experience',
          templateUrl: './experience.component.html',
          styleUrls: ['./experience.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _animation_animate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../animation/animate.component */
    "./src/app/animation/animate.component.ts");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.state = 'normal';
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onAnimate",
        value: function onAnimate() {
          this.state = 'highlited';
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 1,
      vars: 0,
      consts: [["wmAnimate", "jackInTheBox", "speed", "normal", 1, "footer-div"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        }
      },
      directives: [_animation_animate_component__WEBPACK_IMPORTED_MODULE_2__["AnimateComponent"]],
      styles: [".footer-text[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #868e96;\n}\n\n.footer-div[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n\n\n@keyframes fade_down {\n  0% {\n    opacity: 0.01;\n    transform: translateY(-20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_up {\n  0% {\n    opacity: 0.01;\n    transform: translateY(20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_right {\n  0% {\n    opacity: 0.01;\n    transform: translateX(20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_left {\n  0% {\n    opacity: 0.01;\n    transform: translateX(-100px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFJQSxlQUFBOztBQUNBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsNEJBQUE7SUFDQSxvSEFBQTtFQURGO0VBSUE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7SUFDQSxvSEFBQTtFQUZGO0FBQ0Y7O0FBTUE7RUFDRTtJQUNFLGFBQUE7SUFDQSwyQkFBQTtJQUNBLG9IQUFBO0VBSkY7RUFPQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtJQUNBLG9IQUFBO0VBTEY7QUFDRjs7QUFRQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLDJCQUFBO0lBQ0Esb0hBQUE7RUFORjtFQVNBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0lBQ0Esb0hBQUE7RUFQRjtBQUNGOztBQVVBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsNkJBQUE7SUFDQSxvSEFBQTtFQVJGO0VBV0E7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7SUFDQSxvSEFBQTtFQVRGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci10ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICM4NjhlOTY7XHJcbn1cclxuXHJcbi5mb290ZXItZGl2IHtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIC8vYW5pbWF0aW9uOiBmYWRlX2xlZnQgMnM7XHJcblxyXG59XHJcblxyXG4vKiBBbmltYXRpb25zICovXHJcbkBrZXlmcmFtZXMgZmFkZV9kb3duIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwLjAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxyXG4gICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcclxuICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVfdXAge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDAuMDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcclxuICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXHJcbiAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGZhZGVfcmlnaHQge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDAuMDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcclxuICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXHJcbiAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGZhZGVfbGVmdCB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMC4wMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXHJcbiAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxyXG4gICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcclxuICB9XHJcbn1cclxuIl19 */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('divState', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          'background-color': 'red',
          transform: 'translateX(0)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('highlighted', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          'background-color': 'blue',
          transform: 'translateX(100px)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('normal <=> highlighted', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(300))])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('divState', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            'background-color': 'red',
            transform: 'translateX(0)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('highlighted', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            'background-color': 'blue',
            transform: 'translateX(100px)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('normal <=> highlighted', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(300))])]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/github-calendar/github-calendar.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/github-calendar/github-calendar.component.ts ***!
    \**************************************************************/

  /*! exports provided: GithubCalendarComponent */

  /***/
  function srcAppGithubCalendarGithubCalendarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GithubCalendarComponent", function () {
      return GithubCalendarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GithubCalendarComponent = /*#__PURE__*/function () {
      function GithubCalendarComponent() {
        _classCallCheck(this, GithubCalendarComponent);
      }

      _createClass(GithubCalendarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          GitHubCalendar(".calendar", "sarthakgoenka", {
            responsive: true,
            tooltips: true
          });
        }
      }]);

      return GithubCalendarComponent;
    }();

    GithubCalendarComponent.ɵfac = function GithubCalendarComponent_Factory(t) {
      return new (t || GithubCalendarComponent)();
    };

    GithubCalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GithubCalendarComponent,
      selectors: [["app-github-calendar"]],
      decls: 3,
      vars: 0,
      consts: [["rel", "stylesheet", "href", "https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css"], [1, "calendar"]],
      template: function GithubCalendarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading the data just for you.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dpdGh1Yi1jYWxlbmRhci9naXRodWItY2FsZW5kYXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GithubCalendarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-github-calendar',
          templateUrl: './github-calendar.component.html',
          styleUrls: ['./github-calendar.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/greeting/greeting.component.ts":
  /*!************************************************!*\
    !*** ./src/app/greeting/greeting.component.ts ***!
    \************************************************/

  /*! exports provided: GreetingComponent */

  /***/
  function srcAppGreetingGreetingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GreetingComponent", function () {
      return GreetingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _animation_animate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../animation/animate.component */
    "./src/app/animation/animate.component.ts");
    /* harmony import */


    var _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../social-media/social-media.component */
    "./src/app/social-media/social-media.component.ts");

    var GreetingComponent = /*#__PURE__*/function () {
      function GreetingComponent() {
        _classCallCheck(this, GreetingComponent);

        this.greeting = {
          username: "Chaabani Aymen",
          title: "Hi all, I'm Aymen",
          subTitle: "A passionate Software Engineering Student 🚀 having an experience of building Web applications with Spring boot / Angular and some other cool libraries and frameworks.",
          resumeLink: "https://drive.google.com/file/d/1Of18tMrSMlGbBiQ86jzuga1O1iHUZ9Pi/view?usp=sharing"
        };
      }

      _createClass(GreetingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GreetingComponent;
    }();

    GreetingComponent.ɵfac = function GreetingComponent_Factory(t) {
      return new (t || GreetingComponent)();
    };

    GreetingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GreetingComponent,
      selectors: [["app-greeting"]],
      decls: 20,
      vars: 3,
      consts: [["id", "greeting", 1, "greet-main"], ["wmAnimate", "fadeInUp", "aos", "", "speed", "normal", 1, "greeting-main"], [1, "greeting-text-div"], [1, "greeting-text"], [1, "wave-emoji"], [1, "greeting-text-p", "subTitle"], [1, "button-greeting-div"], ["href", "#contact", 1, "main-button"], ["target", "_blank", 1, "main-button", 3, "href"], [1, "greeting-image-div"], ["src", "./assets/images/Aymen3.png", "alt", "Aymen"]],
      template: function GreetingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\uD83D\uDC4B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-social-media");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Contact me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "See my resume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.greeting.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.greeting.subTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.greeting.resumeLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [_animation_animate_component__WEBPACK_IMPORTED_MODULE_1__["AnimateComponent"], _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_2__["SocialMediaComponent"]],
      styles: [".main[_ngcontent-%COMP%] {\n  width: 90%;\n  padding: 20px 10px;\n  margin: 0px auto;\n  margin-top: 4rem;\n}\n\n.greet-main[_ngcontent-%COMP%] {\n  width: 90%;\n  padding: 20px 10px;\n  margin: 0px auto;\n  margin-top: 2rem;\n}\n\n.gretting-main[_ngcontent-%COMP%] {\n  width: 90%;\n  padding: 20px 10px;\n  margin: 0px auto;\n}\n\n.greeting-main[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.greeting-main[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-bottom: 30px;\n}\n\n.button-greeting-div[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 20px;\n}\n\n.greeting-text[_ngcontent-%COMP%] {\n  font-size: 70px;\n  line-height: 1.1;\n  color: #868e96;\n  margin-top: 1rem;\n}\n\n.greeting-text-p[_ngcontent-%COMP%] {\n  font-size: 30px;\n  line-height: 40px;\n}\n\n.greeting-image-div[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  margin-left: 30%;\n  margin-top: 1%;\n  border-radius: 50%;\n}\n\n.wave-emoji[_ngcontent-%COMP%] {\n  animation-duration: 1.8s;\n  animation-iteration-count: infinite;\n  animation-name: wave;\n  display: inline-block;\n  transform-origin: 70% 70%;\n}\n\np[_ngcontent-%COMP%] {\n  display: block;\n  margin-block-start: 1em;\n  margin-block-end: 1em;\n  margin-inline-start: 0px;\n  margin-inline-end: 0px;\n}\n\n.subTitle[_ngcontent-%COMP%] {\n  color: #868e96;\n}\n\n@keyframes wave {\n  0% {\n    transform: rotate(0deg);\n  }\n  10% {\n    transform: rotate(-10deg);\n  }\n  20% {\n    transform: rotate(12deg);\n  }\n  30% {\n    transform: rotate(-10deg);\n  }\n  40% {\n    transform: rotate(9deg);\n  }\n  50% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n\n\n\n@media (max-width: 1380px) {\n  .greeting-text[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n\n  .greeting-text-p[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n\n@media (max-width: 768px) {\n  .button-greeting-div[_ngcontent-%COMP%] {\n    justify-content: space-around;\n  }\n\n  .greeting-text[_ngcontent-%COMP%] {\n    font-size: 30px;\n    text-align: center;\n  }\n\n  .greeting-text-p[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: normal;\n    text-align: center;\n  }\n\n  .greeting-main[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n.main-button[_ngcontent-%COMP%] {\n  background-color: #a72121;\n  border: solid 1px #a72121;\n  color: white;\n  font-weight: 700;\n  width: max-content;\n  padding: 13px 22px;\n  margin-right: 50px;\n  text-transform: uppercase;\n  border-radius: 6px;\n  text-align: center;\n  text-decoration: none;\n  display: block;\n  margin-top: 20px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out 0s;\n}\n\n.main-button[_ngcontent-%COMP%]:hover {\n  background-color: #ffffff;\n  color: black;\n  transition: all 0.3s ease 0s;\n  transform: translateY(-3px);\n}\n\n.project-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n.greeting-text-p[_ngcontent-%COMP%] {\n  font-size: 22px;\n  line-height: 40px;\n  margin-top: 3rem;\n  margin-bottom: 2rem;\n}\n\n\n\n@media (max-width: 768px) {\n  .main-button[_ngcontent-%COMP%] {\n    font-size: 15px;\n    padding: 12px 18px;\n    margin-right: 0px;\n  }\n\n  .greeting-text[_ngcontent-%COMP%] {\n    font-size: 35px;\n    font-weight: 700;\n  }\n}\n\n@media (max-width: 320px) {\n  .main-button[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n\n\n\n@keyframes fade_down {\n  0% {\n    opacity: 0.01;\n    transform: translateY(-20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_up {\n  0% {\n    opacity: 0.01;\n    transform: translateY(20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_right {\n  0% {\n    opacity: 0.01;\n    transform: translateX(20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_left {\n  0% {\n    opacity: 0.01;\n    transform: translateX(-100px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JlZXRpbmcvZ3JlZXRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBR0E7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtBQUFGOztBQUdBO0VBQ0UsT0FBQTtFQUNBLG1CQUFBO0FBQUY7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3QkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7QUFFRjs7QUFBQTtFQUNFLGNBQUE7QUFHRjs7QUFEQTtFQUNFO0lBQ0UsdUJBQUE7RUFJRjtFQUZBO0lBQ0UseUJBQUE7RUFJRjtFQUZBO0lBQ0Usd0JBQUE7RUFJRjtFQUZBO0lBQ0UseUJBQUE7RUFJRjtFQUZBO0lBQ0UsdUJBQUE7RUFJRjtFQUZBO0lBQ0UsdUJBQUE7RUFJRjtFQUZBO0lBQ0UsdUJBQUE7RUFJRjtBQUNGOztBQURBLGdCQUFBOztBQUNBO0VBQ0U7SUFDRSxlQUFBO0VBR0Y7O0VBREE7SUFDRSxlQUFBO0VBSUY7QUFDRjs7QUFGQTtFQUNFO0lBQ0UsNkJBQUE7RUFJRjs7RUFGQTtJQUNFLGVBQUE7SUFDQSxrQkFBQTtFQUtGOztFQUhBO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7RUFNRjs7RUFKQTtJQUNFLGNBQUE7RUFPRjtBQUNGOztBQUxBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtBQU9GOztBQUxBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQVFGOztBQU5BO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFTRjs7QUFQQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFVRjs7QUFQQSxnQkFBQTs7QUFPQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7RUFJRjs7RUFGQTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQUtGO0FBQ0Y7O0FBSEE7RUFDRTtJQUNFLGVBQUE7RUFLRjtBQUNGOztBQURBLGVBQUE7O0FBQ0E7RUFDRTtJQUNFLGFBQUE7SUFDQSw0QkFBQTtJQUNBLG9IQUFBO0VBR0Y7RUFBQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtJQUNBLG9IQUFBO0VBRUY7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLDJCQUFBO0lBQ0Esb0hBQUE7RUFBRjtFQUdBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0lBQ0Esb0hBQUE7RUFERjtBQUNGOztBQUlBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsMkJBQUE7SUFDQSxvSEFBQTtFQUZGO0VBS0E7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7SUFDQSxvSEFBQTtFQUhGO0FBQ0Y7O0FBTUE7RUFDRTtJQUNFLGFBQUE7SUFDQSw2QkFBQTtJQUNBLG9IQUFBO0VBSkY7RUFPQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtJQUNBLG9IQUFBO0VBTEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2dyZWV0aW5nL2dyZWV0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogNHJlbTtcclxufVxyXG4uZ3JlZXQtbWFpbiB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgbWFyZ2luOiAwcHggYXV0bztcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIC8vYW5pbWF0aW9uOiBmYWRlX3VwIDJzO1xyXG59XHJcblxyXG5cclxuLmdyZXR0aW5nLW1haW4ge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gIG1hcmdpbjogMHB4IGF1dG87XHJcbn1cclxuXHJcbi5ncmVldGluZy1tYWluIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZ3JlZXRpbmctbWFpbiA+ICoge1xyXG4gIGZsZXg6IDE7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4uYnV0dG9uLWdyZWV0aW5nLWRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uZ3JlZXRpbmctdGV4dCB7XHJcbiAgZm9udC1zaXplOiA3MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgY29sb3I6ICM4NjhlOTY7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuLmdyZWV0aW5nLXRleHQtcCB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uZ3JlZXRpbmctaW1hZ2UtZGl2ID4gaW1nIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cclxufVxyXG4ud2F2ZS1lbW9qaSB7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjhzO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiB3YXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiA3MCUgNzAlO1xyXG59XHJcbnAge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xyXG4gIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcclxuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XHJcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcclxufVxyXG4uc3ViVGl0bGUge1xyXG4gIGNvbG9yOiAjODY4ZTk2O1xyXG59XHJcbkBrZXlmcmFtZXMgd2F2ZSB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xyXG4gIH1cclxuICAyMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTJkZWcpO1xyXG4gIH1cclxuICAzMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcclxuICB9XHJcbiAgNDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDlkZWcpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBNZWRpYSBRdWVyeSAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogMTM4MHB4KSB7XHJcbiAgLmdyZWV0aW5nLXRleHQge1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gIH1cclxuICAuZ3JlZXRpbmctdGV4dC1wIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmJ1dHRvbi1ncmVldGluZy1kaXYge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgfVxyXG4gIC5ncmVldGluZy10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmdyZWV0aW5nLXRleHQtcCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuZ3JlZXRpbmctbWFpbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuLm1haW4tYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTcyMTIxO1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICNhNzIxMjE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gIHBhZGRpbmc6IDEzcHggMjJweDtcclxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dCAwcztcclxufVxyXG4ubWFpbi1idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZSAwcztcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbn1cclxuLnByb2plY3QtYnV0dG9ue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uZ3JlZXRpbmctdGV4dC1wIHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luLXRvcDogM3JlbTtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4vKiBNZWRpYSBRdWVyeSAqL1xyXG4vL0BtZWRpYSAobWF4LXdpZHRoOiAxMzgwcHgpIHtcclxuLy8gIC5ncmVldGluZy10ZXh0LXAge1xyXG4vLyAgICBmb250LXNpemU6IDIwcHg7XHJcbi8vICB9XHJcbi8vfVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLm1haW4tYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHBhZGRpbmc6IDEycHggMThweDtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gIH1cclxuICAuZ3JlZXRpbmctdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gIC5tYWluLWJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLyogQW5pbWF0aW9ucyAqL1xyXG5Aa2V5ZnJhbWVzIGZhZGVfZG93biB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMC4wMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcclxuICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXHJcbiAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlX3VwIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwLjAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXHJcbiAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxyXG4gICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBmYWRlX3JpZ2h0IHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwLjAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXHJcbiAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxyXG4gICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBmYWRlX2xlZnQge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDAuMDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxyXG4gICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcclxuICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GreetingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-greeting',
          templateUrl: './greeting.component.html',
          styleUrls: ['./greeting.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _animation_animate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../animation/animate.component */
    "./src/app/animation/animate.component.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        this.greeting = {
          username: "Chaabani Aymen",
          title: "Hi all, I'm Aymen",
          subTitle: "A passionate Software Engineering Student 🚀 having an experience of building Web applications with Spring boot / Angular and some other cool libraries and frameworks.",
          resumeLink: "https://drive.google.com/file/d/1uhYvxW1weVtr1oFQXr2XhXSkpdfwcEd7/view?usp=sharing"
        };
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 28,
      vars: 1,
      consts: [["wmAnimate", "landing", "aos", "", "speed", "normal", 1, "header"], ["href", "", 1, "logo"], [1, "grey-color"], [1, "logo-name"], ["type", "checkbox", "id", "menu-btn", 1, "menu-btn"], ["for", "menu-btn", 1, "menu-icon"], [1, "navicon"], [1, "menu"], ["href", "#skills"], ["href", "#education"], ["href", "#experience"], ["href", "#contact"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " <");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "/>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Experiences");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Contact Me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.greeting.username);
        }
      },
      directives: [_animation_animate_component__WEBPACK_IMPORTED_MODULE_2__["AnimateComponent"]],
      styles: ["p[_ngcontent-%COMP%] {\n  display: block;\n  margin-block-start: 1em;\n  margin-block-end: 1em;\n  margin-inline-start: 0px;\n  margin-inline-end: 0px;\n}\n.header[_ngcontent-%COMP%] {\n  max-width: 90%;\n  padding: 20px 10px;\n  margin: 0px auto;\n}\n.header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  overflow: hidden;\n  background-color: #fff;\n}\n.grey-color[_ngcontent-%COMP%] {\n  color: #868e96;\n}\n.header[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  padding: 20px 20px;\n  font-weight: 400;\n  color: black;\n  text-decoration: none;\n}\n.header[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f4f4f4;\n}\n.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  display: block;\n  float: left;\n  font-size: 1.5em;\n  text-decoration: none;\n  margin-top: 10px;\n  line-height: normal;\n}\n.header[_ngcontent-%COMP%]   .logo-name[_ngcontent-%COMP%] {\n  font-family: \"Agustina Regular\";\n  font-weight: bold;\n  font-variant-ligatures: no-common-ligatures;\n  -webkit-font-variant-ligatures: no-common-ligatures;\n  padding: 0 10px;\n  color: #a72121;\n}\n.header[_ngcontent-%COMP%]   .logo-name[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n\n.header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  clear: both;\n  border-radius: 20%;\n  max-height: 0;\n  transition: max-height 0.2s ease-out;\n}\n\n.header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  float: right;\n  padding: 28px 20px;\n  position: relative;\n  user-select: none;\n}\n.header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%] {\n  background: #333;\n  display: block;\n  height: 2px;\n  position: relative;\n  transition: background 0.2s ease-out;\n  width: 18px;\n}\n.header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%]:before, .header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%]:after {\n  background: #333;\n  content: \"\";\n  display: block;\n  height: 100%;\n  position: absolute;\n  transition: all 0.2s ease-out;\n  width: 100%;\n}\n.header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%]:before {\n  top: 5px;\n}\n.header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%]:after {\n  top: -5px;\n}\n\n.header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%] {\n  display: none;\n}\n.header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:checked    ~ .menu[_ngcontent-%COMP%] {\n  max-height: 370px;\n}\n.header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:checked    ~ .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:checked    ~ .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%]::before {\n  transform: rotate(-45deg);\n}\n.header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:checked    ~ .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%]::after {\n  transform: rotate(45deg);\n}\n.header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:checked    ~ .menu-icon[_ngcontent-%COMP%]:not(.steps)   .navicon[_ngcontent-%COMP%]:before, .header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:checked    ~ .menu-icon[_ngcontent-%COMP%]:not(.steps)   .navicon[_ngcontent-%COMP%]:after {\n  top: 0;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: red;\n}\n\n@media (min-width: 48em) {\n  .header[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    float: left;\n  }\n\n  .header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  .header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n    max-height: none;\n  }\n\n  .header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 960px) and (min-width: 768px) {\n  .header[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7QUFDRjtBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUVBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFDRjtBQUNBO0VBQ0UsY0FBQTtBQUVGO0FBQ0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUVGO0FBQ0E7O0VBRUUseUJBQUE7QUFFRjtBQUNBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUVGO0FBQUE7RUFDRSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkNBQUE7RUFDQSxtREFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBR0Y7QUFERTtFQUNFLFVBQUE7QUFHSjtBQUNBLFNBQUE7QUFFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtBQUNGO0FBRUEsY0FBQTtBQUVBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUFGO0FBR0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7QUFBRjtBQUdBOztFQUVFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUFBRjtBQUdBO0VBQ0UsUUFBQTtBQUFGO0FBR0E7RUFDRSxTQUFBO0FBQUY7QUFHQSxhQUFBO0FBRUE7RUFDRSxhQUFBO0FBREY7QUFJQTtFQUNFLGlCQUFBO0FBREY7QUFJQTtFQUNFLHVCQUFBO0FBREY7QUFJQTtFQUNFLHlCQUFBO0FBREY7QUFJQTtFQUNFLHdCQUFBO0FBREY7QUFJQTs7RUFFRSxNQUFBO0FBREY7QUFHQTtFQUNFLFVBQUE7QUFBRjtBQUVBLGlCQUFBO0FBRUE7RUFDRTtJQUNFLFdBQUE7RUFBRjs7RUFFQTtJQUNFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLDhCQUFBO0VBQ0Y7O0VBQ0E7SUFDRSxnQkFBQTtFQUVGOztFQUFBO0lBQ0UsYUFBQTtFQUdGO0FBQ0Y7QUFEQTtFQUNFO0lBQ0UsZUFBQTtFQUdGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogaGVhZGVyICovXHJcbnAge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xyXG4gIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcclxuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XHJcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gIG1hcmdpbjogMHB4IGF1dG87XHJcbn1cclxuXHJcbi5oZWFkZXIgdWwge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcbi5ncmV5LWNvbG9yIHtcclxuICBjb2xvcjogIzg2OGU5NjtcclxufVxyXG5cclxuLmhlYWRlciBsaSBhIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uaGVhZGVyIGxpIGE6aG92ZXIsXHJcbi5oZWFkZXIgLm1lbnUtYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG59XHJcblxyXG4uaGVhZGVyIC5sb2dvIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmbG9hdDogbGVmdDtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbn1cclxuLmhlYWRlciAubG9nby1uYW1lIHtcclxuICBmb250LWZhbWlseTogXCJBZ3VzdGluYSBSZWd1bGFyXCI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC12YXJpYW50LWxpZ2F0dXJlczogbm8tY29tbW9uLWxpZ2F0dXJlcztcclxuICAtd2Via2l0LWZvbnQtdmFyaWFudC1saWdhdHVyZXM6IG5vLWNvbW1vbi1saWdhdHVyZXM7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG4gIGNvbG9yOiAgI2E3MjEyMTtcclxuXHJcbiAgJjpob3ZlcntcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBtZW51ICovXHJcblxyXG4uaGVhZGVyIC5tZW51IHtcclxuICBjbGVhcjogYm90aDtcclxuICBib3JkZXItcmFkaXVzOiAyMCU7XHJcbiAgbWF4LWhlaWdodDogMDtcclxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMnMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi8qIG1lbnUgaWNvbiAqL1xyXG5cclxuLmhlYWRlciAubWVudS1pY29uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwYWRkaW5nOiAyOHB4IDIwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4uaGVhZGVyIC5tZW51LWljb24gLm5hdmljb24ge1xyXG4gIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlLW91dDtcclxuICB3aWR0aDogMThweDtcclxufVxyXG5cclxuLmhlYWRlciAubWVudS1pY29uIC5uYXZpY29uOmJlZm9yZSxcclxuLmhlYWRlciAubWVudS1pY29uIC5uYXZpY29uOmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmhlYWRlciAubWVudS1pY29uIC5uYXZpY29uOmJlZm9yZSB7XHJcbiAgdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5oZWFkZXIgLm1lbnUtaWNvbiAubmF2aWNvbjphZnRlciB7XHJcbiAgdG9wOiAtNXB4O1xyXG59XHJcblxyXG4vKiBtZW51IGJ0biAqL1xyXG5cclxuLmhlYWRlciAubWVudS1idG4ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5oZWFkZXIgLm1lbnUtYnRuOmNoZWNrZWQgfiAubWVudSB7XHJcbiAgbWF4LWhlaWdodDogMzcwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXIgLm1lbnUtYnRuOmNoZWNrZWQgfiAubWVudS1pY29uIC5uYXZpY29uIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmhlYWRlciAubWVudS1idG46Y2hlY2tlZCB+IC5tZW51LWljb24gLm5hdmljb246OmJlZm9yZSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxufVxyXG5cclxuLmhlYWRlciAubWVudS1idG46Y2hlY2tlZCB+IC5tZW51LWljb24gLm5hdmljb246OmFmdGVyIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuXHJcbi5oZWFkZXIgLm1lbnUtYnRuOmNoZWNrZWQgfiAubWVudS1pY29uOm5vdCguc3RlcHMpIC5uYXZpY29uOmJlZm9yZSxcclxuLmhlYWRlciAubWVudS1idG46Y2hlY2tlZCB+IC5tZW51LWljb246bm90KC5zdGVwcykgLm5hdmljb246YWZ0ZXIge1xyXG4gIHRvcDogMDtcclxufVxyXG4uc3VidGl0bGV7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4vKiA0OGVtID0gNzY4cHggKi9cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA0OGVtKSB7XHJcbiAgLmhlYWRlciBsaSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcbiAgLmhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgLmhlYWRlciAubWVudSB7XHJcbiAgICBtYXgtaGVpZ2h0OiBub25lO1xyXG4gIH1cclxuICAuaGVhZGVyIC5tZW51LWljb24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk2MHB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbn1cclxuIl19 */"],
      data: {
        animation: [// trigger('routerTransition', [
        //   transition('* <=> *', [
        //     query(':enter, :leave', style({ position: 'fixed', opacity: 1 })),
        //     group([
        //       query(':enter', [
        //         style({ opacity:0 }),
        //         animate('1000ms ease-in-out', style({ opacity:1 }))
        //       ]),
        //       query(':leave', [
        //         style({ opacity:1 }),
        //         animate('1000ms ease-in-out', style({ opacity:0 }))]),
        //     ])
        //   ])
        // ])
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadein', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 1,
          transform: 'translateX(0)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 0,
          transform: 'translateX(-100px)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(5000)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(5000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateX(100px)',
          opacity: 0
        }))])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss'],
          animations: [// trigger('routerTransition', [
          //   transition('* <=> *', [
          //     query(':enter, :leave', style({ position: 'fixed', opacity: 1 })),
          //     group([
          //       query(':enter', [
          //         style({ opacity:0 }),
          //         animate('1000ms ease-in-out', style({ opacity:1 }))
          //       ]),
          //       query(':leave', [
          //         style({ opacity:1 }),
          //         animate('1000ms ease-in-out', style({ opacity:0 }))]),
          //     ])
          //   ])
          // ])
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadein', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 1,
            transform: 'translateX(0)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0,
            transform: 'translateX(-100px)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(5000)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(5000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateX(100px)',
            opacity: 0
          }))])])]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/github-repo-card/github-repo-card.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/projects/github-repo-card/github-repo-card.component.ts ***!
    \*************************************************************************/

  /*! exports provided: GithubRepoCardComponent */

  /***/
  function srcAppProjectsGithubRepoCardGithubRepoCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GithubRepoCardComponent", function () {
      return GithubRepoCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _animation_animate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../animation/animate.component */
    "./src/app/animation/animate.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        backgroundColor: a0
      };
    };

    var GithubRepoCardComponent = /*#__PURE__*/function () {
      function GithubRepoCardComponent(window) {
        _classCallCheck(this, GithubRepoCardComponent);

        this.window = window;
      }

      _createClass(GithubRepoCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.github.node.url);
        }
      }, {
        key: "onCardClick",
        value: function onCardClick() {
          var win = window.open(this.github.node.url, "_blank");
          win.focus();
        }
      }]);

      return GithubRepoCardComponent;
    }();

    GithubRepoCardComponent.ɵfac = function GithubRepoCardComponent_Factory(t) {
      return new (t || GithubRepoCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Window));
    };

    GithubRepoCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GithubRepoCardComponent,
      selectors: [["app-github-repo-card"]],
      inputs: {
        github: "github",
        link: "link"
      },
      decls: 18,
      vars: 7,
      consts: [["wmAnimate", "bumpIn", "aos", "", "speed", "normal"], [1, "repo-card-div", 3, "click"], [1, "repo-name-div"], ["aria-hidden", "true", "height", "20", "role", "img", "viewBox", "0 0 12 16", "width", "14", 1, "repo-svg"], ["fill-rule", "evenodd", "d", "M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"], [1, "repo-name"], [1, "repo-description"], [1, "repo-stats"], [1, "repo-left-stat"], [1, "language-color", 3, "ngStyle"], [1, "repo-right-stat"]],
      template: function GithubRepoCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GithubRepoCardComponent_Template_div_click_1_listener() {
            return ctx.onCardClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.github.node.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.github.node.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.github.node.primaryLanguage.color));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.github.node.primaryLanguage.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.github.node.diskUsage, " KB");
        }
      },
      directives: [_animation_animate_component__WEBPACK_IMPORTED_MODULE_1__["AnimateComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]],
      styles: [".repo-card-div[_ngcontent-%COMP%] {\n  color: #586069;\n  background-color: white;\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 10px 30px -15px;\n  padding: 2rem;\n  cursor: pointer;\n}\n\n.repo-card-div[_ngcontent-%COMP%]:hover {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px -10px;\n}\n\n.repo-stats[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 13px;\n  color: #6a737d;\n}\n\n.repo-left-stat[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  display: flex;\n}\n\n.language-color[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background-color: blue;\n  margin-right: 0.25rem;\n  border-radius: 100%;\n}\n\n.JavaScript[_ngcontent-%COMP%] {\n  background-color: yellow;\n}\n\n.CSS[_ngcontent-%COMP%] {\n  background-color: rebeccapurple;\n}\n\n.HTML[_ngcontent-%COMP%] {\n  background-color: orangered;\n}\n\n.repo-left-stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-right: 0.75rem;\n}\n\n.repo-left-stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.repo-name-div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.repo-svg[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n  min-width: 16px;\n}\n\n.repo-name[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  color: #24292e;\n  margin-bottom: 0.75rem;\n  font-size: 25px;\n  font-weight: 700;\n  letter-spacing: -0.5px;\n  overflow: hidden;\n  margin: 0px;\n}\n\n.repo-star-svg[_ngcontent-%COMP%] {\n  margin-right: 0.3rem;\n}\n\n.repo-description[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvZ2l0aHViLXJlcG8tY2FyZC9naXRodWItcmVwby1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0RBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNBO0VBQ0Usa0RBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFFQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBRUY7O0FBQ0E7RUFFRSxZQUFBO0VBQ0EsYUFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFBQTtFQUNFLHdCQUFBO0FBR0Y7O0FBREE7RUFDRSwrQkFBQTtBQUlGOztBQUZBO0VBQ0UsMkJBQUE7QUFLRjs7QUFGQTtFQUNFLGFBQUE7RUFFQSxtQkFBQTtFQUNBLHFCQUFBO0FBS0Y7O0FBSEU7RUFDRSxTQUFBO0FBS0o7O0FBREE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFEQTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtBQUlGOztBQURBO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBSUY7O0FBREE7RUFDRSxvQkFBQTtBQUlGOztBQURBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtBQUlGIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvZ2l0aHViLXJlcG8tY2FyZC9naXRodWItcmVwby1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcG8tY2FyZC1kaXYge1xyXG4gIGNvbG9yOiByZ2IoODgsIDk2LCAxMDUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDEwcHggMzBweCAtMTVweDtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucmVwby1jYXJkLWRpdjpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAyMHB4IDMwcHggLTEwcHg7XHJcbn1cclxuXHJcbi5yZXBvLXN0YXRzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogcmdiKDEwNiwgMTE1LCAxMjUpO1xyXG59XHJcblxyXG4ucmVwby1sZWZ0LXN0YXQge1xyXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5sYW5ndWFnZS1jb2xvciB7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbn1cclxuLkphdmFTY3JpcHR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG59XHJcbi5DU1N7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmViZWNjYXB1cnBsZTtcclxufVxyXG4uSFRNTHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XHJcbn1cclxuXHJcbi5yZXBvLWxlZnQtc3RhdCBzcGFuIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNzVyZW07XHJcblxyXG4gICYgPiBwe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLnJlcG8tbmFtZS1kaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnJlcG8tc3ZnIHtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICBtaW4td2lkdGg6IDE2cHg7XHJcbn1cclxuXHJcbi5yZXBvLW5hbWUge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgY29sb3I6IHJnYigzNiwgNDEsIDQ2KTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLnJlcG8tc3Rhci1zdmcge1xyXG4gIG1hcmdpbi1yaWdodDogMC4zcmVtO1xyXG59XHJcblxyXG4ucmVwby1kZXNjcmlwdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMztcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GithubRepoCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-github-repo-card',
          templateUrl: './github-repo-card.component.html',
          styleUrls: ['./github-repo-card.component.scss']
        }]
      }], function () {
        return [{
          type: Window
        }];
      }, {
        github: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        link: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/projects/graphql.module.ts":
  /*!********************************************!*\
    !*** ./src/app/projects/graphql.module.ts ***!
    \********************************************/

  /*! exports provided: provideApollo, GraphQLModule */

  /***/
  function srcAppProjectsGraphqlModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "provideApollo", function () {
      return provideApollo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GraphQLModule", function () {
      return GraphQLModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
    /* harmony import */


    var apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! apollo-angular-link-http */
    "./node_modules/apollo-angular-link-http/__ivy_ngcc__/fesm2015/ngApolloLinkHttp.js");
    /* harmony import */


    var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! apollo-cache-inmemory */
    "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
    /* harmony import */


    var apollo_link_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! apollo-link-context */
    "./node_modules/apollo-link-context/lib/bundle.esm.js");
    /* harmony import */


    var apollo_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! apollo-link */
    "./node_modules/apollo-link/lib/bundle.esm.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var uri = 'https://api.github.com/graphql'; // <-- add the URL of the GraphQL server here

    function provideApollo(httpLink) {
      var basic = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_4__["setContext"])(function (operation, context) {
        return {
          headers: {
            Accept: 'charset=utf-8'
          }
        };
      });
      var token = ""; //Your github token here

      var auth = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_4__["setContext"])(function (operation, context) {
        return {
          headers: {
            Authorization: "Bearer ".concat(token)
          }
        };
      });
      var link = apollo_link__WEBPACK_IMPORTED_MODULE_5__["ApolloLink"].from([basic, auth, httpLink.create({
        uri: uri
      })]);
      var cache = new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["InMemoryCache"]();
      return {
        link: link,
        cache: cache
      };
    }

    var GraphQLModule = function GraphQLModule() {
      _classCallCheck(this, GraphQLModule);
    };

    GraphQLModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GraphQLModule
    });
    GraphQLModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function GraphQLModule_Factory(t) {
        return new (t || GraphQLModule)();
      },
      providers: [{
        provide: apollo_angular__WEBPACK_IMPORTED_MODULE_1__["APOLLO_OPTIONS"],
        useFactory: provideApollo,
        deps: [apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_2__["HttpLink"]]
      }],
      imports: [apollo_angular__WEBPACK_IMPORTED_MODULE_1__["ApolloModule"], apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_2__["HttpLinkModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GraphQLModule, {
        exports: [apollo_angular__WEBPACK_IMPORTED_MODULE_1__["ApolloModule"], apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_2__["HttpLinkModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraphQLModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [apollo_angular__WEBPACK_IMPORTED_MODULE_1__["ApolloModule"], apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_2__["HttpLinkModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]],
          providers: [{
            provide: apollo_angular__WEBPACK_IMPORTED_MODULE_1__["APOLLO_OPTIONS"],
            useFactory: provideApollo,
            deps: [apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_2__["HttpLink"]]
          }]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/projects.component.ts":
  /*!************************************************!*\
    !*** ./src/app/projects/projects.component.ts ***!
    \************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");

    var ProjectsComponent = /*#__PURE__*/function () {
      function ProjectsComponent(apollo) {
        _classCallCheck(this, ProjectsComponent);

        this.apollo = apollo;
        this.projects2 = [];
        this.projects3 = [{
          link: "https://github.com/sarthakgoenka/portfolio"
        }, {
          link: ""
        }, {
          link: "https://natours-8aa57.web.app/"
        }, {
          link: ""
        }, {
          link: "http://node-room-chat.herokuapp.com/"
        }, {
          link: "https://personal-doc.herokuapp.com/"
        }];
      }

      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.apollo.query({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a(_templateObject())
          }).subscribe(function (data) {
            _this6.projects2 = data.data.user.pinnedItems.edges; // console.log(this.projects2);
          });
        }
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
      return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]));
    };

    ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectsComponent,
      selectors: [["app-projects"]],
      decls: 0,
      vars: 0,
      template: function ProjectsComponent_Template(rf, ctx) {},
      styles: [".main[_ngcontent-%COMP%] {\n  width: 90%;\n  padding: 20px 10px;\n  margin: 0px auto;\n  margin-top: 4rem;\n}\n\n.github__chart[_ngcontent-%COMP%] {\n  margin: 3rem auto;\n  width: 80vw;\n}\n\n.project-title[_ngcontent-%COMP%] {\n  font-size: 52px;\n  font-weight: 400;\n  line-height: normal;\n  color: #868e96;\n}\n\n.startup-project-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n}\n\n.repo-cards-div-main[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  gap: 1rem 1rem;\n}\n\n.main-button[_ngcontent-%COMP%] {\n  background-color: #cf1212;\n  border: 1px solid #cf1212;\n  color: #fff;\n  font-weight: 700;\n  width: max-content;\n  padding: 13px 22px;\n  text-transform: uppercase;\n  border-radius: 6px;\n  text-align: center;\n  text-decoration: none;\n  display: block;\n  margin-top: 20px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out 0s;\n}\n\n.project-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n\n\n@media (max-width: 1380px) {\n  .project-title[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n}\n\n@media (max-width: 768px) {\n  .project-title[_ngcontent-%COMP%] {\n    font-size: 30px;\n    text-align: center;\n  }\n\n  .repo-cards-div-main[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLGNBQUE7QUFDRjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFHQSxrQkFBQTtFQUNBLGtCQUFBO0VBRUEseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUVBLG1DQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUFBLGdCQUFBOztBQUNBO0VBQ0U7SUFDRSxlQUFBO0VBR0Y7QUFDRjs7QUFEQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGtCQUFBO0VBR0Y7O0VBREE7SUFDRSwyREFBQTtFQUlGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcclxufVxyXG5cclxuLmdpdGh1Yl9fY2hhcnR7XHJcbiAgbWFyZ2luOiAzcmVtIGF1dG87XHJcbiAgd2lkdGg6IDgwdnc7XHJcblxyXG59XHJcbi5wcm9qZWN0LXRpdGxlIHtcclxuICBmb250LXNpemU6IDUycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIGNvbG9yOiAjODY4ZTk2O1xyXG59XHJcblxyXG4uc3RhcnR1cC1wcm9qZWN0LXRleHQgaW1ne1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5yZXBvLWNhcmRzLWRpdi1tYWluIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDAwcHgsIDFmcikpO1xyXG4gIGdhcDogMXJlbSAxcmVtO1xyXG59XHJcbi5tYWluLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmMTIxMjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2YxMjEyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgd2lkdGg6IC13ZWJraXQtbWF4LWNvbnRlbnQ7XHJcbiAgd2lkdGg6IC1tb3otbWF4LWNvbnRlbnQ7XHJcbiAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gIHBhZGRpbmc6IDEzcHggMjJweDtcclxuICAvL21hcmdpbi1yaWdodDogNTBweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQgMHM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dCAwcztcclxufVxyXG4ucHJvamVjdC1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4vKiBNZWRpYSBRdWVyeSAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogMTM4MHB4KSB7XHJcbiAgLnByb2plY3QtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAucHJvamVjdC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5yZXBvLWNhcmRzLWRpdi1tYWlue1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-projects',
          templateUrl: './projects.component.html',
          styleUrls: ['./projects.component.scss']
        }]
      }], function () {
        return [{
          type: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/skill-progress/skill-progress.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/skill-progress/skill-progress.component.ts ***!
    \************************************************************/

  /*! exports provided: SkillProgressComponent */

  /***/
  function srcAppSkillProgressSkillProgressComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillProgressComponent", function () {
      return SkillProgressComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _animation_animate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../animation/animate.component */
    "./src/app/animation/animate.component.ts");

    function SkillProgressComponent_div_0_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var exp_r2 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exp_r2.Stack);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r1.progressStyle(exp_r2.progressPercentage));
      }
    }

    function SkillProgressComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Proficiency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SkillProgressComponent_div_0_div_4_Template, 5, 3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.techStack.experience);
      }
    }

    var SkillProgressComponent = /*#__PURE__*/function () {
      function SkillProgressComponent() {
        _classCallCheck(this, SkillProgressComponent);

        this.techStack = {
          viewSkillBars: true,
          experience: [{
            Stack: "Backend",
            progressPercentage: "75%"
          }, {
            Stack: "Frontend",
            progressPercentage: "60%"
          }, {
            Stack: "Programming",
            progressPercentage: "60%"
          }, {
            Stack: "Docker",
            progressPercentage: "50%"
          }, {
            Stack: "jenkins/gitlab Ci",
            progressPercentage: "30%"
          }, {
            Stack: "Ansible/Terraform",
            progressPercentage: "30%"
          }]
        };
      }

      _createClass(SkillProgressComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "progressStyle",
        value: function progressStyle(percentage) {
          return {
            width: percentage
          };
        }
      }]);

      return SkillProgressComponent;
    }();

    SkillProgressComponent.ɵfac = function SkillProgressComponent_Factory(t) {
      return new (t || SkillProgressComponent)();
    };

    SkillProgressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SkillProgressComponent,
      selectors: [["app-skill-progress"]],
      decls: 1,
      vars: 1,
      consts: [["class", "skills-container", "wmAnimate", "fadeInUp", "aos", "", "speed", "normal", 4, "ngIf"], ["wmAnimate", "fadeInUp", "aos", "", "speed", "normal", 1, "skills-container"], [1, "skills-bar"], [1, "skills-heading"], ["class", "skill", 4, "ngFor", "ngForOf"], [1, "skills-image"], ["alt", "Skills", "src", "./assets/images/skill.svg"], [1, "skill"], [1, "meter"]],
      template: function SkillProgressComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SkillProgressComponent_div_0_Template, 7, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.techStack.viewSkillBars);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _animation_animate_component__WEBPACK_IMPORTED_MODULE_2__["AnimateComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: [".meter[_ngcontent-%COMP%] {\n  height: 20px;\n  position: relative;\n  background: #f3efef;\n  border-radius: 25px;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: #868e96;\n}\n\n.meter[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n  background-color: #a1bcd8;\n  position: relative;\n  overflow: hidden;\n}\n\n.skill[_ngcontent-%COMP%] {\n  line-height: 3.5vw;\n  color: #868e96;\n}\n\n.skills-bar[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 40%;\n}\n\n.skills-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 90%;\n  padding: 20px 10px;\n  margin: 0px auto;\n  margin-top: 2rem;\n}\n\n.skills-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-bottom: 30px;\n}\n\n.skills-image[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  margin-left: 80px;\n  max-width: 90%;\n  height: auto;\n}\n\n\n\n@media (max-width: 1456px) {\n  .skills-bar[_ngcontent-%COMP%] {\n    line-height: 4rem;\n    width: 100%;\n  }\n\n  .skills-image[_ngcontent-%COMP%] {\n    display: none;\n    order: 2;\n  }\n}\n\n@media (max-width: 768px) {\n  .skills-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .skills-bar[_ngcontent-%COMP%] {\n    line-height: 3rem;\n    margin: 20px;\n  }\n\n  .skills-image[_ngcontent-%COMP%] {\n    order: 2;\n  }\n}\n\n\n\n@keyframes fade_down {\n  0% {\n    opacity: 0.01;\n    transform: translateY(-40px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_up {\n  0% {\n    opacity: 0.01;\n    transform: translateY(40px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_right {\n  0% {\n    opacity: 0.01;\n    transform: translateX(40px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_left {\n  0% {\n    opacity: 0.01;\n    transform: translateX(-40px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGwtcHJvZ3Jlc3Mvc2tpbGwtcHJvZ3Jlc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUdBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFFRjs7QUFBQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFEQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQUlGOztBQURBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7QUFJRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBSUY7O0FBREE7RUFDRSxPQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFGQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFLRjs7QUFEQSxnQkFBQTs7QUFFQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxXQUFBO0VBR0Y7O0VBREE7SUFDRSxhQUFBO0lBQ0EsUUFBQTtFQUlGO0FBQ0Y7O0FBREE7RUFDRTtJQUNFLHNCQUFBO0VBR0Y7O0VBREE7SUFDRSxpQkFBQTtJQUNBLFlBQUE7RUFJRjs7RUFGQTtJQUVFLFFBQUE7RUFJRjtBQUNGOztBQUFBLGVBQUE7O0FBQ0E7RUFDRTtJQUNFLGFBQUE7SUFDQSw0QkFBQTtJQUNBLG9IQUFBO0VBRUY7RUFDQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtJQUNBLG9IQUFBO0VBQ0Y7QUFDRjs7QUFHQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLDJCQUFBO0lBQ0Esb0hBQUE7RUFERjtFQUlBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0lBQ0Esb0hBQUE7RUFGRjtBQUNGOztBQUtBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsMkJBQUE7SUFDQSxvSEFBQTtFQUhGO0VBTUE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7SUFDQSxvSEFBQTtFQUpGO0FBQ0Y7O0FBT0E7RUFDRTtJQUNFLGFBQUE7SUFDQSw0QkFBQTtJQUNBLG9IQUFBO0VBTEY7RUFRQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtJQUNBLG9IQUFBO0VBTkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NraWxsLXByb2dyZXNzL3NraWxsLXByb2dyZXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1ldGVyIHtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNDMsIDIzOSwgMjM5KTtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbn1cclxuaDF7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogIzg2OGU5NjtcclxufVxyXG4ubWV0ZXIgPiBzcGFuIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNnB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTFiY2Q4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5za2lsbHtcclxuICBsaW5lLWhlaWdodDogMy41dnc7XHJcbiAgY29sb3I6ICM4NjhlOTY7XHJcbn1cclxuXHJcbi5za2lsbHMtYmFye1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB3aWR0aDogNDAlO1xyXG4gIC8vYW5pbWF0aW9uOiBmYWRlX2xlZnQgMS41cyA2cztcclxufVxyXG4uc2tpbGxzLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogOTAlO1xyXG4gIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICBtYXJnaW46IDBweCBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuXHJcbi5za2lsbHMtY29udGFpbmVyID4gKiB7XHJcbiAgZmxleDogMTtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbi5za2lsbHMtaW1hZ2UgPiBpbWcge1xyXG4gIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG4gIG1heC13aWR0aDogOTAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICAvL2FuaW1hdGlvbjogZmFkZV9yaWdodCAxLjVzIDZzO1xyXG59XHJcblxyXG4vKiBNZWRpYSBRdWVyeSAqL1xyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NTZweCkge1xyXG4gIC5za2lsbHMtYmFyIHtcclxuICAgIGxpbmUtaGVpZ2h0OiA0cmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5za2lsbHMtaW1hZ2Uge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIG9yZGVyOiAyO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnNraWxscy1jb250YWluZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxyXG4gIH1cclxuICAuc2tpbGxzLWJhciB7XHJcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICB9XHJcbiAgLnNraWxscy1pbWFnZSB7XHJcbiAgICAvL2Rpc3BsYXk6IG5vbmU7XHJcbiAgICBvcmRlcjogMjtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKiBBbmltYXRpb25zICovXHJcbkBrZXlmcmFtZXMgZmFkZV9kb3duIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwLjAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00MHB4KTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxyXG4gICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcclxuICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVfdXAge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDAuMDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcclxuICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXHJcbiAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGZhZGVfcmlnaHQge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDAuMDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcclxuICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXHJcbiAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGZhZGVfbGVmdCB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMC4wMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcclxuICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXHJcbiAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillProgressComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-skill-progress',
          templateUrl: './skill-progress.component.html',
          styleUrls: ['./skill-progress.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/skills/skills.component.ts":
  /*!********************************************!*\
    !*** ./src/app/skills/skills.component.ts ***!
    \********************************************/

  /*! exports provided: SkillsComponent */

  /***/
  function srcAppSkillsSkillsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillsComponent", function () {
      return SkillsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _animation_animate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../animation/animate.component */
    "./src/app/animation/animate.component.ts");
    /* harmony import */


    var _software_skill_software_skill_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./software-skill/software-skill.component */
    "./src/app/skills/software-skill/software-skill.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SkillsComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skill_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r1);
      }
    }

    var SkillsComponent = /*#__PURE__*/function () {
      function SkillsComponent() {
        _classCallCheck(this, SkillsComponent);

        this.skillsSection = {
          title: "What I do💁‍♂️",
          subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
          skills: ["⚡ Develop highly interactive Front end / User Interfaces for your web applications", "⚡ Creating application backend in Spring boot", "⚡ Proficient in Terraform for infrastructure as code (IaC) automation", "⚡ Skilled in Ansible for configuration management and deployment automation", "⚡ Experienced in Docker for containerization of applications", "⚡ familiar with Jenkins and GitLab CI for continuous integration and continuous delivery (CI/CD)", "⚡ Skilled in Kubernetes for container orchestration", "⚡ Proficient in Git and GitHub/GitLab for version control and collaborative development"]
        };
      }

      _createClass(SkillsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SkillsComponent;
    }();

    SkillsComponent.ɵfac = function SkillsComponent_Factory(t) {
      return new (t || SkillsComponent)();
    };

    SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SkillsComponent,
      selectors: [["app-skills"]],
      decls: 11,
      vars: 3,
      consts: [["id", "skills", 1, "main"], [1, "skills-main-div"], ["wmAnimate", "fadeInRight", "aos", "", "speed", "normal", 1, "skills-image-div"], ["alt", "Sarthak Working", "src", "./assets/images/developerActivity.svg", 1, "skills-image-div"], ["wmAnimate", "fadeInLeft", "aos", "", "speed", "normal", 1, "skills-text-div"], [1, "skills-heading"], [1, "subTitle", "skills-text-subtitle"], [4, "ngFor", "ngForOf"], [1, "subTitle", "skills-text"]],
      template: function SkillsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-software-skill");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SkillsComponent_div_10_Template, 3, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.skillsSection.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.skillsSection.subTitle, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skillsSection.skills);
        }
      },
      directives: [_animation_animate_component__WEBPACK_IMPORTED_MODULE_1__["AnimateComponent"], _software_skill_software_skill_component__WEBPACK_IMPORTED_MODULE_2__["SoftwareSkillComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: [".subTitle[_ngcontent-%COMP%] {\n  color: #868e96;\n}\n\n.skills-main-div[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.skills-text-div[_ngcontent-%COMP%] {\n  margin-left: 50px;\n}\n\n.skills-main-div[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-bottom: 30px;\n}\n\n.skills-image-div[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n}\n\n.skills-heading[_ngcontent-%COMP%] {\n  font-size: 56px;\n  font-weight: 400;\n  color: #868e96;\n}\n\n\n\n@media (max-width: 1380px) {\n  .skills-heading[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n}\n\n@media (max-width: 768px) {\n  .skills-heading[_ngcontent-%COMP%] {\n    font-size: 30px;\n    text-align: center;\n  }\n\n  .greeting-text-p[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: normal;\n  }\n\n  .skills-main-div[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .skills-text-div[_ngcontent-%COMP%] {\n    margin-left: 0px;\n    margin: 20px;\n  }\n\n  .skills-text[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .skills-text-subtitle[_ngcontent-%COMP%] {\n    font-size: 16px;\n    text-align: center;\n  }\n\n  .skills-image-div[_ngcontent-%COMP%] {\n    \n    order: 2;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7QUFFRjs7QUFBQTtFQUNFLGlCQUFBO0FBR0Y7O0FBQUE7RUFDRSxPQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFBQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBR0Y7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBR0Y7O0FBQUEsZ0JBQUE7O0FBQ0E7RUFDRTtJQUNFLGVBQUE7RUFHRjtBQUNGOztBQURBO0VBQ0U7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7RUFHRjs7RUFEQTtJQUNFLGVBQUE7SUFDQSxtQkFBQTtFQUlGOztFQUZBO0lBQ0Usc0JBQUE7RUFLRjs7RUFIQTtJQUNFLGdCQUFBO0lBQ0EsWUFBQTtFQU1GOztFQUpBO0lBQ0UsZUFBQTtFQU9GOztFQUxBO0lBQ0UsZUFBQTtJQUNBLGtCQUFBO0VBUUY7O0VBTkE7SUFDRSxtQkFBQTtJQUNBLFFBQUE7RUFTRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWJUaXRsZSB7XHJcbiAgY29sb3I6ICM4NjhlOTY7XHJcbn1cclxuLnNraWxscy1tYWluLWRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4uc2tpbGxzLXRleHQtZGl2IHtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuLnNraWxscy1tYWluLWRpdiA+ICoge1xyXG4gIGZsZXg6IDE7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLnNraWxscy1pbWFnZS1kaXYgPiBpbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5za2lsbHMtaGVhZGluZyB7XHJcbiAgZm9udC1zaXplOiA1NnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICM4NjhlOTY7XHJcbn1cclxuXHJcbi8qIE1lZGlhIFF1ZXJ5ICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMzgwcHgpIHtcclxuICAuc2tpbGxzLWhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuc2tpbGxzLWhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuZ3JlZXRpbmctdGV4dC1wIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgfVxyXG4gIC5za2lsbHMtbWFpbi1kaXYge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxyXG4gIH1cclxuICAuc2tpbGxzLXRleHQtZGl2IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgfVxyXG4gIC5za2lsbHMtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIC5za2lsbHMtdGV4dC1zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5za2lsbHMtaW1hZ2UtZGl2IHtcclxuICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXHJcbiAgICBvcmRlcjogMjtcclxuICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-skills',
          templateUrl: './skills.component.html',
          styleUrls: ['./skills.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/skills/software-skill/software-skill.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/skills/software-skill/software-skill.component.ts ***!
    \*******************************************************************/

  /*! exports provided: SoftwareSkillComponent */

  /***/
  function srcAppSkillsSoftwareSkillSoftwareSkillComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SoftwareSkillComponent", function () {
      return SoftwareSkillComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SoftwareSkillComponent_li_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skills_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](skills_r1.fontAwesomeClassname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skills_r1.skillName);
      }
    }

    var SoftwareSkillComponent = /*#__PURE__*/function () {
      function SoftwareSkillComponent() {
        _classCallCheck(this, SoftwareSkillComponent);

        this.skillsSection = {
          softwareSkills: [{
            skillName: "html-5",
            fontAwesomeClassname: "fab fa-html5"
          }, {
            skillName: "css3",
            fontAwesomeClassname: "fab fa-css3-alt"
          }, {
            skillName: "Angular",
            fontAwesomeClassname: "fab fa-angular"
          }, {
            skillName: "npm",
            fontAwesomeClassname: "fab fa-npm"
          }, {
            skillName: "sql-database",
            fontAwesomeClassname: "fas fa-database"
          } // {
          //   skillName: "Tensorflow",
          //   fontAwesomeClassname: "logos-tensorflow"
          // },
          // {
          //   skillName: "Firebase",
          //   fontAwesomeClassname: "simple-icons:firebase"
          // }
          ]
        };
      }

      _createClass(SoftwareSkillComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SoftwareSkillComponent;
    }();

    SoftwareSkillComponent.ɵfac = function SoftwareSkillComponent_Factory(t) {
      return new (t || SoftwareSkillComponent)();
    };

    SoftwareSkillComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SoftwareSkillComponent,
      selectors: [["app-software-skill"]],
      decls: 4,
      vars: 1,
      consts: [[1, "software-skills-main-div"], [1, "dev-icons"], ["class", "software-skill-inline", 4, "ngFor", "ngForOf"], [1, "software-skill-inline"]],
      template: function SoftwareSkillComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SoftwareSkillComponent_li_3_Template, 4, 3, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skillsSection.softwareSkills);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: [".dev-icons[_ngcontent-%COMP%] {\n  padding-left: 0;\n  list-style: none;\n  font-size: 3rem;\n  margin-bottom: 0px;\n  margin-top: 0px;\n  text-align: center;\n}\n\n.software-skill-inline[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 20px;\n  margin-bottom: 20px;\n}\n\n.software-skill-inline[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  color: #868e96;\n}\n\n.software-skill-inline[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%]:hover {\n  color: #eb5b5b;\n}\n\n.software-skill-inline[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: #868e96;\n  font-size: 10px;\n}\n\n.software-skill-inline[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%]:hover    ~ p[_ngcontent-%COMP%] {\n  color: #eb5b5b;\n}\n\n.subTitle[_ngcontent-%COMP%] {\n  color: #868e96;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGxzL3NvZnR3YXJlLXNraWxsL3NvZnR3YXJlLXNraWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQUE7RUFDRSxjQUFBO0FBR0Y7O0FBREE7RUFDRSxjQUFBO0FBSUYiLCJmaWxlIjoic3JjL2FwcC9za2lsbHMvc29mdHdhcmUtc2tpbGwvc29mdHdhcmUtc2tpbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV2LWljb25zIHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zb2Z0d2FyZS1za2lsbC1pbmxpbmUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnNvZnR3YXJlLXNraWxsLWlubGluZSA+IGkge1xyXG4gIGNvbG9yOiAjODY4ZTk2O1xyXG59XHJcblxyXG4uc29mdHdhcmUtc2tpbGwtaW5saW5lID4gaTpob3ZlciB7XHJcbiAgY29sb3I6ICNlYjViNWI7XHJcbn1cclxuLnNvZnR3YXJlLXNraWxsLWlubGluZSA+IHAge1xyXG4gIGNvbG9yOiAjODY4ZTk2O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG4uc29mdHdhcmUtc2tpbGwtaW5saW5lID4gaTpob3ZlciB+IHB7XHJcbiAgY29sb3I6ICNlYjViNWI7XHJcbn1cclxuLnN1YlRpdGxlIHtcclxuICBjb2xvcjogIzg2OGU5NjtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SoftwareSkillComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-software-skill',
          templateUrl: './software-skill.component.html',
          styleUrls: ['./software-skill.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/social-media/social-media.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/social-media/social-media.component.ts ***!
    \********************************************************/

  /*! exports provided: SocialMediaComponent */

  /***/
  function srcAppSocialMediaSocialMediaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocialMediaComponent", function () {
      return SocialMediaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SocialMediaComponent = /*#__PURE__*/function () {
      function SocialMediaComponent() {
        _classCallCheck(this, SocialMediaComponent);

        this.socialMediaLinks = {
          github: "https://github.com/aymen065",
          linkedin: "https://www.linkedin.com/in/aymen-chaabani-0b9b12229/",
          gmail: "aymen.chaabani@etudiant-fst.utm.tn",
          instagram: "https://www.instagram.com/chaabani.aymeen/",
          facebook: "https://www.facebook.com/aymen.chaabani.94/"
        };
      }

      _createClass(SocialMediaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SocialMediaComponent;
    }();

    SocialMediaComponent.ɵfac = function SocialMediaComponent_Factory(t) {
      return new (t || SocialMediaComponent)();
    };

    SocialMediaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SocialMediaComponent,
      selectors: [["app-social-media"]],
      decls: 16,
      vars: 5,
      consts: [[1, "social-media-div"], ["target", "_blank", 1, "icon-button", "github", 3, "href"], [1, "fab", "fa-github"], ["target", "_blank", 1, "icon-button", "linkedin", 3, "href"], [1, "fab", "fa-linkedin-in"], ["target", "_blank", 1, "icon-button", "google", 3, "href"], [1, "fab", "fa-google"], ["target", "_blank", 1, "icon-button", "instagram", 3, "href"], [1, "fab", "fa-instagram"], ["target", "_blank", 1, "icon-button", "facebook", 3, "href"], [1, "fab", "fa-facebook-f"]],
      template: function SocialMediaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.socialMediaLinks.github, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.socialMediaLinks.linkedin, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", "mailto:" + ctx.socialMediaLinks.gmail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.socialMediaLinks.instagram, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.socialMediaLinks.facebook, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      styles: [".social-media-div[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n\n.icon-button[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.icon-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: white;\n  border-radius: 2.6rem;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 1.3rem;\n  height: 2.6rem;\n  line-height: 2.6rem;\n  margin: 0 5px;\n  position: relative;\n  text-align: center;\n  user-select: none;\n  width: 2.6rem;\n  margin-bottom: 10px;\n}\n\n.facebook[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: #3b5998;\n}\n\n.linkedin[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: #0e76a8;\n}\n\n.github[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: #333;\n}\n\n.gitlab[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: #fca326;\n}\n\n.google[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: #ea4335;\n}\n\n.twitter[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: #1da1f2;\n}\n\n.instagram[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: #c13584;\n}\n\n\n\n.twitter[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover, .google[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover, .gitlab[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover, .github[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover, .linkedin[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover, .facebook[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover, .instagram[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  background-color: black;\n  transition: 0.3s ease-in;\n}\n\n\n\n@media (max-width: 768px) {\n  .social-media-div[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29jaWFsLW1lZGlhL3NvY2lhbC1tZWRpYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBSUEsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUEscUJBQUE7O0FBQ0E7Ozs7Ozs7RUFPRSx1QkFBQTtFQUNBLHdCQUFBO0FBQ0Y7O0FBRUEsZ0JBQUE7O0FBQ0E7RUFDRTtJQUNFLGtCQUFBO0VBQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NvY2lhbC1tZWRpYS9zb2NpYWwtbWVkaWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc29jaWFsLW1lZGlhLWRpdiB7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuXHJcbi5pY29uLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmljb24tYnV0dG9uIGkge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAyLjZyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBoZWlnaHQ6IDIuNnJlbTtcclxuICBsaW5lLWhlaWdodDogMi42cmVtO1xyXG4gIG1hcmdpbjogMCA1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIHdpZHRoOiAyLjZyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmZhY2Vib29rIGkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XHJcbn1cclxuXHJcbi5saW5rZWRpbiBpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGU3NmE4O1xyXG59XHJcblxyXG4uZ2l0aHViIGkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5naXRsYWIgaSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjYTMyNjtcclxufVxyXG5cclxuLmdvb2dsZSBpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE0MzM1O1xyXG59XHJcblxyXG4udHdpdHRlciBpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWRhMWYyO1xyXG59XHJcblxyXG4uaW5zdGFncmFtIGkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMTM1ODQ7XHJcbn1cclxuXHJcbi8qIEhvdmVyIFRyYW5zaXRpb24gKi9cclxuLnR3aXR0ZXIgaTpob3ZlcixcclxuLmdvb2dsZSBpOmhvdmVyLFxyXG4uZ2l0bGFiIGk6aG92ZXIsXHJcbi5naXRodWIgaTpob3ZlcixcclxuLmxpbmtlZGluIGk6aG92ZXIsXHJcbi5mYWNlYm9vayBpOmhvdmVyLFxyXG4uaW5zdGFncmFtIGk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbjtcclxufVxyXG5cclxuLyogTWVkaWEgUXVlcnkgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnNvY2lhbC1tZWRpYS1kaXYge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialMediaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-social-media',
          templateUrl: './social-media.component.html',
          styleUrls: ['./social-media.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/timeline/timeline.component.ts":
  /*!************************************************!*\
    !*** ./src/app/timeline/timeline.component.ts ***!
    \************************************************/

  /*! exports provided: TimelineComponent */

  /***/
  function srcAppTimelineTimelineComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimelineComponent", function () {
      return TimelineComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TimelineComponent_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r1.className);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.heading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.duration);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.content);
      }
    }

    var TimelineComponent = /*#__PURE__*/function () {
      function TimelineComponent() {
        _classCallCheck(this, TimelineComponent);

        this.timeline = [{
          heading: "Infosys",
          duration: "current",
          content: "Upcoming Full stack develover at Infosys!",
          className: "direction-r"
        }, {
          heading: "B.Tech",
          duration: "2016 - 2020",
          content: "Successfully completed my B.tech in Computer science from GLA University, Mathura.",
          className: "direction-l"
        }, {
          heading: "Intermediate",
          duration: "2015-2016",
          content: "Successfully completed my intermediate studies in 2016 from Gyan Deep Sr. Secondary Public School, Shikohabad.\n" + "Major: PCM.",
          className: "direction-r"
        }, {
          heading: "High School",
          duration: "2013-2014",
          content: "Successfully completed my high school studies in 2014 from Georgions Academy, Shikohabad.",
          className: "direction-l"
        }];
      }

      _createClass(TimelineComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TimelineComponent;
    }();

    TimelineComponent.ɵfac = function TimelineComponent_Factory(t) {
      return new (t || TimelineComponent)();
    };

    TimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TimelineComponent,
      selectors: [["app-timeline"]],
      decls: 5,
      vars: 1,
      consts: [[1, "container"], [1, "timeline-heading"], [1, "timeline"], [4, "ngFor", "ngForOf"], [1, "flag-wrapper"], [1, "flag"], [1, "time-wrapper"], [1, "time"], [1, "desc"]],
      template: function TimelineComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TimelineComponent_li_4_Template, 10, 5, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.timeline);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: [".container[_ngcontent-%COMP%] {\n  font-family: inherit;\n  margin-top: 10rem;\n  margin-bottom: 10rem;\n}\n\n.timeline-heading[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 400;\n}\n\n.timeline[_ngcontent-%COMP%] {\n  position: relative;\n  width: 660px;\n  margin: 0 auto;\n  margin-top: 20px;\n  padding: 1em 0;\n  list-style-type: none;\n}\n\n.timeline[_ngcontent-%COMP%]:before {\n  position: absolute;\n  left: 50%;\n  top: 0;\n  content: \" \";\n  display: block;\n  width: 6px;\n  height: 100%;\n  margin-left: -3px;\n  background: #505050;\n  background: linear-gradient(to bottom, rgba(80, 80, 80, 0) 0%, #505050 8%, #505050 92%, rgba(80, 80, 80, 0) 100%);\n  z-index: 5;\n}\n\n.timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 1em 0;\n}\n\n.timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n}\n\n.direction-l[_ngcontent-%COMP%] {\n  position: relative;\n  width: 300px;\n  float: left;\n  text-align: right;\n}\n\n.direction-r[_ngcontent-%COMP%] {\n  position: relative;\n  width: 300px;\n  float: right;\n}\n\n.flag-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  text-align: center;\n}\n\n.flag[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline;\n  background: #f8f8f8;\n  padding: 6px 10px;\n  border-radius: 5px;\n  font-size: 2rem;\n  font-weight: 600;\n  text-align: left;\n}\n\n.direction-l[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%] {\n  box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);\n}\n\n.direction-r[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%] {\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);\n}\n\n.direction-l[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%]:before, .direction-r[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: 50%;\n  right: -40px;\n  content: \" \";\n  display: block;\n  width: 12px;\n  height: 12px;\n  margin-top: -10px;\n  background: #fff;\n  border-radius: 10px;\n  border: 4px solid #aaa5ff;\n  z-index: 10;\n}\n\n.direction-r[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%]:before {\n  left: -40px;\n}\n\n.direction-l[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: 100%;\n  top: 50%;\n  height: 0;\n  width: 0;\n  margin-top: -8px;\n  border: solid transparent;\n  border-left-color: #f8f8f8;\n  border-width: 8px;\n  pointer-events: none;\n}\n\n.direction-r[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  right: 100%;\n  top: 50%;\n  height: 0;\n  width: 0;\n  margin-top: -8px;\n  border: solid transparent;\n  border-right-color: #f8f8f8;\n  border-width: 8px;\n  pointer-events: none;\n}\n\n.time-wrapper[_ngcontent-%COMP%] {\n  display: inline;\n  line-height: 1em;\n  font-size: 0.66666em;\n  color: #55198b;\n  vertical-align: middle;\n}\n\n.direction-l[_ngcontent-%COMP%]   .time-wrapper[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.direction-r[_ngcontent-%COMP%]   .time-wrapper[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.time[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 6px;\n  background: #f8f8f8;\n  font-size: 10px;\n  font-weight: 400;\n}\n\n.desc[_ngcontent-%COMP%] {\n  margin: 1em 0.75em 0 0;\n  font-size: 0.77777em;\n  font-style: italic;\n  line-height: 1.5em;\n}\n\n.direction-r[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  margin: 1em 0 0 0.75em;\n}\n\n\n\n@media screen and (max-width: 660px) {\n  .timeline[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 4em 0 1em 0;\n  }\n\n  .timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 2em 0;\n  }\n\n  .direction-l[_ngcontent-%COMP%], .direction-r[_ngcontent-%COMP%] {\n    float: none;\n    width: 100%;\n    text-align: center;\n  }\n\n  .flag-wrapper[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .flag[_ngcontent-%COMP%] {\n    background: white;\n    z-index: 15;\n  }\n\n  .direction-l[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%]:before, .direction-r[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%]:before {\n    position: absolute;\n    top: -30px;\n    left: 50%;\n    content: \" \";\n    display: block;\n    width: 12px;\n    height: 12px;\n    margin-left: -9px;\n    background: #fff;\n    border-radius: 10px;\n    border: 4px solid #ff5050;\n    z-index: 10;\n  }\n\n  .direction-l[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%]:after, .direction-r[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%]:after {\n    content: \"\";\n    position: absolute;\n    left: 50%;\n    top: -8px;\n    height: 0;\n    width: 0;\n    margin-left: -8px;\n    border: solid transparent;\n    border-bottom-color: white;\n    border-width: 8px;\n    pointer-events: none;\n  }\n\n  .time-wrapper[_ngcontent-%COMP%] {\n    display: block;\n    position: relative;\n    margin: 4px 0 0 0;\n    z-index: 14;\n  }\n\n  .direction-l[_ngcontent-%COMP%]   .time-wrapper[_ngcontent-%COMP%] {\n    float: none;\n  }\n\n  .direction-r[_ngcontent-%COMP%]   .time-wrapper[_ngcontent-%COMP%] {\n    float: none;\n  }\n\n  .desc[_ngcontent-%COMP%] {\n    position: relative;\n    margin: 1em 0 0 0;\n    padding: 1em;\n    background: whitesmoke;\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);\n    z-index: 15;\n  }\n\n  .direction-l[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%], .direction-r[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n    position: relative;\n    margin: 1em 1em 0 1em;\n    padding: 1em;\n    z-index: 15;\n  }\n}\n\n@media screen and (min-width: 400px) {\n  .direction-l[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%], .direction-r[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n    margin: 1em 4em 0 4em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBTUEsaUhBQUE7RUFFQSxVQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUVBLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBRUEsZ0JBQUE7RUFDQSxnQkFBQTtBQUhGOztBQU1BO0VBR0UseUVBQUE7QUFIRjs7QUFNQTtFQUdFLHdFQUFBO0FBSEY7O0FBTUE7O0VBRUUsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFIRjs7QUFNQTtFQUNFLFdBQUE7QUFIRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBSEY7O0FBTUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUhGOztBQU1BO0VBQ0UsZUFBQTtFQUVBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFKRjs7QUFPQTtFQUNFLFdBQUE7QUFKRjs7QUFPQTtFQUNFLFlBQUE7QUFKRjs7QUFPQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUpGOztBQU9BO0VBQ0Usc0JBQUE7RUFFQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFMRjs7QUFRQTtFQUNFLHNCQUFBO0FBTEY7O0FBUUEsNkRBQUE7O0FBRUE7RUFFRTtJQUNFLFdBQUE7SUFDQSxvQkFBQTtFQVBGOztFQVVBO0lBQ0UsY0FBQTtFQVBGOztFQVVBOztJQUVFLFdBQUE7SUFDQSxXQUFBO0lBRUEsa0JBQUE7RUFSRjs7RUFXQTtJQUNFLGtCQUFBO0VBUkY7O0VBV0E7SUFDRSxpQkFBQTtJQUNBLFdBQUE7RUFSRjs7RUFXQTs7SUFFRSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxTQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLHlCQUFBO0lBQ0EsV0FBQTtFQVJGOztFQVdBOztJQUVFLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxTQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSxpQkFBQTtJQUNBLHlCQUFBO0lBQ0EsMEJBQUE7SUFDQSxpQkFBQTtJQUNBLG9CQUFBO0VBUkY7O0VBV0E7SUFDRSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLFdBQUE7RUFSRjs7RUFXQTtJQUNFLFdBQUE7RUFSRjs7RUFXQTtJQUNFLFdBQUE7RUFSRjs7RUFXQTtJQUNFLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxZQUFBO0lBQ0Esc0JBQUE7SUFHQSxzQ0FBQTtJQUVBLFdBQUE7RUFURjs7RUFZQTs7SUFFRSxrQkFBQTtJQUNBLHFCQUFBO0lBQ0EsWUFBQTtJQUVBLFdBQUE7RUFWRjtBQUNGOztBQWNBO0VBRUE7O0lBRUUscUJBQUE7RUFiQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbnRhaW5lcntcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBtYXJnaW4tdG9wOiAxMHJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHJlbTtcclxufVxyXG5cclxuLnRpbWVsaW5lLWhlYWRpbmd7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi50aW1lbGluZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA2NjBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDFlbSAwO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuLnRpbWVsaW5lOmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDA7XHJcbiAgY29udGVudDogJyAnO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA2cHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtM3B4O1xyXG4gIGJhY2tncm91bmQ6IHJnYig4MCw4MCw4MCk7XHJcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDgwLDgwLDgwLDApIDAlLCByZ2IoODAsODAsODApIDglLCByZ2IoODAsODAsODApIDkyJSwgcmdiYSg4MCw4MCw4MCwwKSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLHJnYmEoMzAsODcsMTUzLDEpKSwgY29sb3Itc3RvcCgxMDAlLHJnYmEoMTI1LDE4NSwyMzIsMSkpKTtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoODAsODAsODAsMCkgMCUsIHJnYig4MCw4MCw4MCkgOCUsIHJnYig4MCw4MCw4MCkgOTIlLCByZ2JhKDgwLDgwLDgwLDApIDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoODAsODAsODAsMCkgMCUsIHJnYig4MCw4MCw4MCkgOCUsIHJnYig4MCw4MCw4MCkgOTIlLCByZ2JhKDgwLDgwLDgwLDApIDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDgwLDgwLDgwLDApIDAlLCByZ2IoODAsODAsODApIDglLCByZ2IoODAsODAsODApIDkyJSwgcmdiYSg4MCw4MCw4MCwwKSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDgwLDgwLDgwLDApIDAlLCByZ2IoODAsODAsODApIDglLCByZ2IoODAsODAsODApIDkyJSwgcmdiYSg4MCw4MCw4MCwwKSAxMDAlKTtcclxuXHJcbiAgei1pbmRleDogNTtcclxufVxyXG5cclxuLnRpbWVsaW5lIGxpIHtcclxuICBwYWRkaW5nOiAxZW0gMDtcclxufVxyXG5cclxuLnRpbWVsaW5lIGxpOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMDtcclxuICBjbGVhcjogYm90aDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5kaXJlY3Rpb24tbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBmbG9hdDogbGVmdDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmRpcmVjdGlvbi1yIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmZsYWctd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZmxhZyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjQ4LDI0OCwyNDgpO1xyXG4gIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LXNpemU6IDJyZW07XHJcblxyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmRpcmVjdGlvbi1sIC5mbGFnIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggMXB4IDFweCByZ2JhKDAsMCwwLDAuMTUpLCAwIDAgMXB4IHJnYmEoMCwwLDAsMC4xNSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAtMXB4IDFweCAxcHggcmdiYSgwLDAsMCwwLjE1KSwgMCAwIDFweCByZ2JhKDAsMCwwLDAuMTUpO1xyXG4gIGJveC1zaGFkb3c6IC0xcHggMXB4IDFweCByZ2JhKDAsMCwwLDAuMTUpLCAwIDAgMXB4IHJnYmEoMCwwLDAsMC4xNSk7XHJcbn1cclxuXHJcbi5kaXJlY3Rpb24tciAuZmxhZyB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsMCwwLDAuMTUpLCAwIDAgMXB4IHJnYmEoMCwwLDAsMC4xNSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsMCwwLDAuMTUpLCAwIDAgMXB4IHJnYmEoMCwwLDAsMC4xNSk7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLDAsMCwwLjE1KSwgMCAwIDFweCByZ2JhKDAsMCwwLDAuMTUpO1xyXG59XHJcblxyXG4uZGlyZWN0aW9uLWwgLmZsYWc6YmVmb3JlLFxyXG4uZGlyZWN0aW9uLXIgLmZsYWc6YmVmb3JlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgcmlnaHQ6IC00MHB4O1xyXG4gIGNvbnRlbnQ6ICcgJztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTJweDtcclxuICBoZWlnaHQ6IDEycHg7XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjogNHB4IHNvbGlkICNhYWE1ZmY7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5kaXJlY3Rpb24tciAuZmxhZzpiZWZvcmUge1xyXG4gIGxlZnQ6IC00MHB4O1xyXG59XHJcblxyXG4uZGlyZWN0aW9uLWwgLmZsYWc6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDEwMCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHdpZHRoOiAwO1xyXG4gIG1hcmdpbi10b3A6IC04cHg7XHJcbiAgYm9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDI0OCwyNDgsMjQ4KTtcclxuICBib3JkZXItd2lkdGg6IDhweDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLmRpcmVjdGlvbi1yIC5mbGFnOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTAwJTtcclxuICB0b3A6IDUwJTtcclxuICBoZWlnaHQ6IDA7XHJcbiAgd2lkdGg6IDA7XHJcbiAgbWFyZ2luLXRvcDogLThweDtcclxuICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yaWdodC1jb2xvcjogcmdiKDI0OCwyNDgsMjQ4KTtcclxuICBib3JkZXItd2lkdGg6IDhweDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLnRpbWUtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG5cclxuICBsaW5lLWhlaWdodDogMWVtO1xyXG4gIGZvbnQtc2l6ZTogMC42NjY2NmVtO1xyXG4gIGNvbG9yOiAjNTUxOThiO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5kaXJlY3Rpb24tbCAudGltZS13cmFwcGVyIHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmRpcmVjdGlvbi1yIC50aW1lLXdyYXBwZXIge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnRpbWUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiA0cHggNnB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNDgsMjQ4LDI0OCk7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5kZXNjIHtcclxuICBtYXJnaW46IDFlbSAwLjc1ZW0gMCAwO1xyXG5cclxuICBmb250LXNpemU6IDAuNzc3NzdlbTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG59XHJcblxyXG4uZGlyZWN0aW9uLXIgLmRlc2Mge1xyXG4gIG1hcmdpbjogMWVtIDAgMCAwLjc1ZW07XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT0gVGltZWxpbmUgTWVkaWEgUXVlcmllcyA9PT09PT09PT09PT09PT09ICovXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NjBweCkge1xyXG5cclxuICAudGltZWxpbmUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA0ZW0gMCAxZW0gMDtcclxuICB9XHJcblxyXG4gIC50aW1lbGluZSBsaSB7XHJcbiAgICBwYWRkaW5nOiAyZW0gMDtcclxuICB9XHJcblxyXG4gIC5kaXJlY3Rpb24tbCxcclxuICAuZGlyZWN0aW9uLXIge1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuZmxhZy13cmFwcGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5mbGFnIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsMjU1LDI1NSk7XHJcbiAgICB6LWluZGV4OiAxNTtcclxuICB9XHJcblxyXG4gIC5kaXJlY3Rpb24tbCAuZmxhZzpiZWZvcmUsXHJcbiAgLmRpcmVjdGlvbi1yIC5mbGFnOmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0zMHB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgY29udGVudDogJyAnO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTJweDtcclxuICAgIGhlaWdodDogMTJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtOXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCByZ2IoMjU1LDgwLDgwKTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gIH1cclxuXHJcbiAgLmRpcmVjdGlvbi1sIC5mbGFnOmFmdGVyLFxyXG4gIC5kaXJlY3Rpb24tciAuZmxhZzphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiAtOHB4O1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLThweDtcclxuICAgIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2IoMjU1LDI1NSwyNTUpO1xyXG4gICAgYm9yZGVyLXdpZHRoOiA4cHg7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcblxyXG4gIC50aW1lLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDRweCAwIDAgMDtcclxuICAgIHotaW5kZXg6IDE0O1xyXG4gIH1cclxuXHJcbiAgLmRpcmVjdGlvbi1sIC50aW1lLXdyYXBwZXIge1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuZGlyZWN0aW9uLXIgLnRpbWUtd3JhcHBlciB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICB9XHJcblxyXG4gIC5kZXNjIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMWVtIDAgMCAwO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI0NSwyNDUsMjQ1KTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDAsMCwwLDAuMjApO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwwLDAsMC4yMCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwwLDAsMC4yMCk7XHJcblxyXG4gICAgei1pbmRleDogMTU7XHJcbiAgfVxyXG5cclxuICAuZGlyZWN0aW9uLWwgLmRlc2MsXHJcbiAgLmRpcmVjdGlvbi1yIC5kZXNjIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMWVtIDFlbSAwIDFlbTtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuXHJcbiAgICB6LWluZGV4OiAxNTtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MDBweCkge1xyXG5cclxuLmRpcmVjdGlvbi1sIC5kZXNjLFxyXG4uZGlyZWN0aW9uLXIgLmRlc2Mge1xyXG4gIG1hcmdpbjogMWVtIDRlbSAwIDRlbTtcclxufVxyXG5cclxufVxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-timeline',
          templateUrl: './timeline.component.html',
          styleUrls: ['./timeline.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/top-button/top-button.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/top-button/top-button.component.ts ***!
    \****************************************************/

  /*! exports provided: TopButtonComponent */

  /***/
  function srcAppTopButtonTopButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopButtonComponent", function () {
      return TopButtonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "show-scrollTop": a0
      };
    };

    var TopButtonComponent = /*#__PURE__*/function () {
      function TopButtonComponent(document) {
        _classCallCheck(this, TopButtonComponent);

        this.document = document;
      }

      _createClass(TopButtonComponent, [{
        key: "onWindowScroll",
        value: function onWindowScroll() {
          if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
            this.windowScrolled = true;
          } else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
            this.windowScrolled = false;
          }
        }
      }, {
        key: "scrollToTop",
        value: function scrollToTop() {
          (function smoothscroll() {
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

            if (currentScroll > 0) {
              window.requestAnimationFrame(smoothscroll);
              window.scrollTo(0, currentScroll - currentScroll / 8);
            }
          })();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TopButtonComponent;
    }();

    TopButtonComponent.ɵfac = function TopButtonComponent_Factory(t) {
      return new (t || TopButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
    };

    TopButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TopButtonComponent,
      selectors: [["app-top-button"]],
      hostBindings: function TopButtonComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function TopButtonComponent_scroll_HostBindingHandler() {
            return ctx.onWindowScroll();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 2,
      vars: 3,
      consts: [[1, "scroll-to-top", 3, "ngClass", "click"], ["aria-hidden", "true", 1, "fas", "fa-hand-point-up"]],
      template: function TopButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopButtonComponent_Template_button_click_0_listener() {
            return ctx.scrollToTop();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.windowScrolled));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: [".scroll-to-top[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: fixed;\n  bottom: 20px;\n  right: 30px;\n  z-index: 99;\n  border: none;\n  outline: none;\n  background-color: #d80303;\n  color: white;\n  cursor: pointer;\n  padding: 15px;\n  border-radius: 15px;\n  font-size: 25px;\n  transition: all 0.2s ease-in-out;\n}\n\n.show-scrollTop[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: all 0.2s ease-in-out;\n}\n\n.scroll-to-top[_ngcontent-%COMP%]:hover {\n  background-color: #000;\n  transition: all ease-in-out 0.2s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wLWJ1dHRvbi90b3AtYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFDQTtFQUNFLFVBQUE7RUFDQSxnQ0FBQTtBQUVGOztBQUNBO0VBQ0Usc0JBQUE7RUFDQSxnQ0FBQTtBQUVGIiwiZmlsZSI6InNyYy9hcHAvdG9wLWJ1dHRvbi90b3AtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbC10by10b3Age1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMjBweDtcclxuICByaWdodDogMzBweDtcclxuICB6LWluZGV4OiA5OTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDgwMzAzO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5zaG93LXNjcm9sbFRvcCB7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uc2Nyb2xsLXRvLXRvcDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC4ycztcclxufVxyXG5cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-top-button',
          templateUrl: './top-button.component.html',
          styleUrls: ['./top-button.component.scss']
        }]
      }], function () {
        return [{
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      }, {
        onWindowScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["window:scroll", []]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\HP\Desktop\projets-front\Angularfolio\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map