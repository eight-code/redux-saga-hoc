(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("redux-saga/effects"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "redux-saga/effects"], factory);
	else if(typeof exports === 'object')
		exports["reduxSagaHOC"] = factory(require("react"), require("redux-saga/effects"));
	else
		root["reduxSagaHOC"] = factory(root["react"], root["redux-saga/effects"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _effects = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	exports.default = function (WrappedComponent) {
	  var _class, _temp;

	  var sagas = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	  return _temp = _class = function (_Component) {
	    _inherits(SagaHOC, _Component);

	    function SagaHOC(props) {
	      _classCallCheck(this, SagaHOC);

	      var _this = _possibleConstructorReturn(this, (SagaHOC.__proto__ || Object.getPrototypeOf(SagaHOC)).call(this, props));

	      _this.createAbortableSaga = function (saga) {
	        if (true) {
	          return regeneratorRuntime.mark(function main() {
	            var sagaTask;
	            return regeneratorRuntime.wrap(function main$(_context) {
	              while (1) {
	                switch (_context.prev = _context.next) {
	                  case 0:
	                    _context.next = 2;
	                    return (0, _effects.fork)(saga);

	                  case 2:
	                    sagaTask = _context.sent;
	                    _context.next = 5;
	                    return (0, _effects.take)('CANCEL_SAGAS');

	                  case 5:
	                    _context.next = 7;
	                    return (0, _effects.cancel)(sagaTask);

	                  case 7:
	                  case 'end':
	                    return _context.stop();
	                }
	              }
	            }, main, this);
	          });
	        }
	        return saga;
	      };

	      _this.startSagas = function () {
	        (sagas instanceof Array ? sagas : [sagas]).map(_this.createAbortableSaga).forEach(function (saga) {
	          return _this.context.store.runSaga(saga);
	        });
	      };

	      _this.cancelSagas = function () {
	        _this.context.store.dispatch({
	          type: 'CANCEL_SAGAS'
	        });
	      };

	      _this.constructor.displayName = 'SagaHOC(' + WrappedComponent.name + ')';
	      return _this;
	    }

	    _createClass(SagaHOC, [{
	      key: 'componentDidMount',
	      value: function componentDidMount() {
	        this.startSagas();
	      }
	    }, {
	      key: 'componentWillUnmount',
	      value: function componentWillUnmount() {
	        this.cancelSagas();
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        return _react2.default.createElement(WrappedComponent, _extends({
	          cancelSagas: this.cancelSagas,
	          runLocalSaga: this.createAbortableSaga
	        }, this.props));
	      }
	    }]);

	    return SagaHOC;
	  }(_react.Component), _class.contextTypes = { store: _react2.default.PropTypes.object }, _temp;
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("redux-saga/effects");

/***/ }
/******/ ])
});
;