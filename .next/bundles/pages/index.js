
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([6],{

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = exports.receiveRepository = exports.fetchRepository = exports.addCounter = exports.initCounter = exports.startClock = exports.reducer = undefined;

var _extends2 = __webpack_require__(93);

var _extends3 = _interopRequireDefault(_extends2);

var _redux = __webpack_require__(570);

var _reduxThunk = __webpack_require__(600);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

__webpack_require__(577);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = exports.reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { lastUpdate: 0, light: false, counter: 0, repository: {} };
  var action = arguments[1];

  switch (action.type) {
    case 'TICK':
      return (0, _extends3.default)({}, state, { lastUpdate: action.ts, light: !!action.light });
    case 'ADD_COUNTER':
      return (0, _extends3.default)({}, state, { counter: state.counter + 1 });
    case 'INIT_COUNTER':
      return (0, _extends3.default)({}, state, { counter: action.value });
    case 'RECEIVE_REPOSITORY':
      return (0, _extends3.default)({}, state, { repository: action.data });
    default:
      return state;
  }
};

var startClock = exports.startClock = function startClock() {
  return function (dispatch) {
    return setInterval(function () {
      return dispatch({ type: 'TICK', light: true, ts: Date.now() });
    }, 800);
  };
};

var initCounter = exports.initCounter = function initCounter(value) {
  return function (dispatch) {
    return dispatch({ type: 'INIT_COUNTER', value: value });
  };
};

var addCounter = exports.addCounter = function addCounter() {
  return function (dispatch) {
    return dispatch({ type: 'ADD_COUNTER' });
  };
};

var fetchRepository = exports.fetchRepository = function fetchRepository(repId) {
  return function (dispatch) {
    //return (dispatch) => {
    var url = 'http://5915b3cb5e17bd0011f6b89e.mockapi.io/api/reps/' + repId;

    fetch(url).then(function (response) {
      return response.json();
    }).then(function (json) {
      dispatch(receiveRepository(json));
    });
    // }
  };
};

var receiveRepository = exports.receiveRepository = function receiveRepository(data) {
  return function (dispatch) {
    return dispatch({ type: 'RECEIVE_REPOSITORY', data: data });
  };
};

var initStore = exports.initStore = function initStore(initialState) {
  return (0, _redux.createStore)(reducer, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\хлам\\next.js-master\\examples\\with-redux\\store.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\хлам\\next.js-master\\examples\\with-redux\\store.js"); } } })();

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(604);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\\u0445\u043B\u0430\u043C\\next.js-master\\examples\\with-redux\\components\\Clock.js';

exports.default = function (_ref) {
  var lastUpdate = _ref.lastUpdate,
      light = _ref.light;

  return _react2.default.createElement('div', { className: light ? 'light' : '', 'data-jsx': 2129652238,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, format(new Date(lastUpdate)), _react2.default.createElement(_style2.default, {
    styleId: 2129652238,
    css: 'div[data-jsx="2129652238"] {padding: 15px;display: inline-block;color: #82FA58;font: 50px menlo, monaco, monospace;background-color: #000;}.light[data-jsx="2129652238"] {background-color: #999;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXENsb2NrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlrQixBQUNMLDRCQUNXLGNBQ1Esc0JBQ1AsZUFDcUIsb0NBQ2IsdUJBQ3hCLENBRU8sK0JBQ2lCLHVCQUN4QiIsImZpbGUiOiJjb21wb25lbnRzXFxDbG9jay5qcyIsInNvdXJjZVJvb3QiOiJEOlxc0YXQu9Cw0LxcXG5leHQuanMtbWFzdGVyXFxleGFtcGxlc1xcd2l0aC1yZWR1eCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICh7IGxhc3RVcGRhdGUsIGxpZ2h0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17bGlnaHQgPyAnbGlnaHQnIDogJyd9PlxuICAgICAge2Zvcm1hdChuZXcgRGF0ZShsYXN0VXBkYXRlKSl9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgY29sb3I6ICM4MkZBNTg7XG4gICAgICAgICAgZm9udDogNTBweCBtZW5sbywgbW9uYWNvLCBtb25vc3BhY2U7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5saWdodCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IGZvcm1hdCA9IHQgPT4gYCR7cGFkKHQuZ2V0VVRDSG91cnMoKSl9OiR7cGFkKHQuZ2V0VVRDTWludXRlcygpKX06JHtwYWQodC5nZXRVVENTZWNvbmRzKCkpfWBcblxuY29uc3QgcGFkID0gbiA9PiBuIDwgMTAgPyBgMCR7bn1gIDogblxuIl19 */\n/*@ sourceURL=components\\Clock.js */'
  }));
};

var format = function format(t) {
  return pad(t.getUTCHours()) + ':' + pad(t.getUTCMinutes()) + ':' + pad(t.getUTCSeconds());
};

var pad = function pad(n) {
  return n < 10 ? '0' + n : n;
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\хлам\\next.js-master\\examples\\with-redux\\components\\Clock.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\хлам\\next.js-master\\examples\\with-redux\\components\\Clock.js"); } } })();

/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(560);

var _store = __webpack_require__(563);

var _index = __webpack_require__(81);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\\u0445\u043B\u0430\u043C\\next.js-master\\examples\\with-redux\\components\\Counter.js';
exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
})(function (_ref) {
  var counter = _ref.counter,
      repository = _ref.repository,
      dispatch = _ref.dispatch;

  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, 'Counter'), _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, 'Current: ', counter), _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, 'Repository:', _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, repository.full_name)), _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement('select', { value: repository.id, onChange: function onChange(e) {
      dispatch((0, _store.fetchRepository)(e.target.value));
      var href = window.location.origin + window.location.pathname + '?counter=' + counter + "&repId=" + e.target.value;
      var as = href;
      _index2.default.push(href, as);
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement('option', { value: '1', __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, 'First'), _react2.default.createElement('option', { value: '2', __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, 'Second'))), _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, _react2.default.createElement('button', { onClick: function onClick() {
      dispatch((0, _store.addCounter)());
      var href = window.location.origin + window.location.pathname + '?counter=' + (counter + 1) + "&repId=" + repository.id;
      var as = href;
      _index2.default.push(href, as);
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, 'Add')));
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\хлам\\next.js-master\\examples\\with-redux\\components\\Counter.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\хлам\\next.js-master\\examples\\with-redux\\components\\Counter.js"); } } })();

/***/ }),

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(587);

var _link2 = _interopRequireDefault(_link);

var _reactRedux = __webpack_require__(560);

var _Clock = __webpack_require__(588);

var _Clock2 = _interopRequireDefault(_Clock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\\u0445\u043B\u0430\u043C\\next.js-master\\examples\\with-redux\\components\\Page.js';
exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
})(function (_ref) {
  var title = _ref.title,
      linkTo = _ref.linkTo,
      lastUpdate = _ref.lastUpdate,
      light = _ref.light;

  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, title), _react2.default.createElement(_Clock2.default, { lastUpdate: lastUpdate, light: light, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement('nav', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_link2.default, { href: linkTo, __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, 'Navigate'))));
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\хлам\\next.js-master\\examples\\with-redux\\components\\Page.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\хлам\\next.js-master\\examples\\with-redux\\components\\Page.js"); } } })();

/***/ }),

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(64);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(46);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _store = __webpack_require__(563);

var _nextReduxWrapper = __webpack_require__(586);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _Page = __webpack_require__(590);

var _Page2 = _interopRequireDefault(_Page);

var _Counter = __webpack_require__(589);

var _Counter2 = _interopRequireDefault(_Counter);

__webpack_require__(577);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\\u0445\u043B\u0430\u043C\\next.js-master\\examples\\with-redux\\pages\\index.js?entry';


var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
  }

  (0, _createClass3.default)(Index, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.timer = this.props.dispatch((0, _store.startClock)());
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement(_Page2.default, { title: 'Index Page', linkTo: '/other', __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), _react2.default.createElement(_Counter2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
        var store = _ref.store,
            isServer = _ref.isServer,
            pathname = _ref.pathname,
            query = _ref.query;
        var url, res, json;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("index get initial props");
                console.log(query);
                url = 'http://5915b3cb5e17bd0011f6b89e.mockapi.io/api/reps/' + (query.repId || 1);
                _context.next = 5;
                return fetch(url);

              case 5:
                res = _context.sent;
                _context.next = 8;
                return res.json();

              case 8:
                json = _context.sent;

                store.dispatch({ type: 'RECEIVE_REPOSITORY', data: json });
                store.dispatch({ type: 'TICK', light: !isServer, ts: Date.now() });
                //if (query.counter)
                //  store.dispatch({ type: 'INIT_COUNTER', value : +query.counter || 0 });

                return _context.abrupt('return', { isServer: isServer });

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(_react2.default.Component);

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore)(Index);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\хлам\\next.js-master\\examples\\with-redux\\pages\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\хлам\\next.js-master\\examples\\with-redux\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(610);


/***/ })

},[611]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS5qcz8xN2ZhY2RmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2xvY2suanM/MTdmYWNkZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvdW50ZXIuanM/MTdmYWNkZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BhZ2UuanM/MTdmYWNkZiIsIndlYnBhY2s6Ly8vLi9wYWdlcz8xN2ZhY2RmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQjs7QUFDZjs7OztBQUVQOzs7O0FBQU8sSUFBTSw0QkFBVSxtQkFBbUY7TUFBQSw0RUFBMUUsRUFBRSxZQUFZLEdBQUcsT0FBTyxPQUFPLFNBQVUsR0FBRyxZQUE4QjtNQUFBLG1CQUN4Rzs7VUFBUSxPQUNOO1NBQWE7d0NBQVksU0FBTyxZQUFZLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUNoRTtTQUFvQjt3Q0FBWSxTQUFPLFNBQVUsTUFBTSxVQUN2RDtTQUFxQjt3Q0FBWSxTQUFPLFNBQVUsT0FDbEQ7U0FBMkI7d0NBQVcsU0FBTyxZQUFhLE9BQzFEO0FBQVM7YUFFWjs7QUFFRDs7QUFBTyxJQUFNLGtDQUFhO1NBQU0sb0JBQzlCO3VCQUFtQjthQUFNLFNBQVMsRUFBRSxNQUFNLFFBQVEsT0FBTyxNQUFNLElBQUksS0FBSztBQUFqRSxPQUNSO0FBRnlCO0FBSTFCOztBQUFPLElBQU0sb0NBQWMscUJBQUMsT0FBRDtTQUFXLG9CQUNwQztXQUFPLFNBQVMsRUFBRSxNQUFPLGdCQUFnQixPQUMxQztBQUYwQjtBQUkzQjs7QUFBTyxJQUFNLGtDQUFhO1NBQU0sb0JBQzlCO1dBQU8sU0FBUyxFQUFFLE1BQ25CO0FBRnlCO0FBSTFCOztBQUFPLElBQU0sNENBQWtCLHlCQUFDLE9BQUQ7U0FBVyxvQkFDeEM7QUFDRTtRQUFJLE1BQU0seURBRVY7O1VBQU0sS0FBSyxLQUFLO2FBQVksU0FBUztBQUFyQyxPQUNDLEtBQUssVUFBQyxNQUNM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O3dCQUFRLElBQ0o7c0JBQU0sMERBQTBELE1BQU0sU0FBUzs7dUJBQ2pFLE1BQU07O21CQUFsQjs7O3VCQUNhLElBQUk7O21CQUFqQjtnQ0FDTjs7c0JBQU0sU0FBUyxFQUFFLE1BQU0sc0JBQXNCLE1BQzdDO3NCQUFNLFNBQVMsRUFBRSxNQUFNLFFBQVEsT0FBTyxDQUFDLFVBQVUsSUFBSSxLQUNyRDtBQUNBOzs7aURBRU8sRUFBRSxVQUFGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBWlMsZ0JBaUNwQjs7a0JBQXlCLGtEQUFXLE8iLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuaydcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcbmV4cG9ydCBjb25zdCByZWR1Y2VyID0gKHN0YXRlID0geyBsYXN0VXBkYXRlOiAwLCBsaWdodDogZmFsc2UsIGNvdW50ZXIgOiAwLCByZXBvc2l0b3J5IDoge30gfSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdUSUNLJzogcmV0dXJuIHsgLi4uc3RhdGUsIGxhc3RVcGRhdGU6IGFjdGlvbi50cywgbGlnaHQ6ICEhYWN0aW9uLmxpZ2h0IH1cbiAgICBjYXNlICdBRERfQ09VTlRFUic6IHJldHVybiB7IC4uLnN0YXRlLCBjb3VudGVyIDogc3RhdGUuY291bnRlciArIDEgfVxuICAgIGNhc2UgJ0lOSVRfQ09VTlRFUic6IHJldHVybiB7IC4uLnN0YXRlLCBjb3VudGVyIDogYWN0aW9uLnZhbHVlIH1cbiAgICBjYXNlICdSRUNFSVZFX1JFUE9TSVRPUlknOiByZXR1cm4gey4uLnN0YXRlLCByZXBvc2l0b3J5IDogYWN0aW9uLmRhdGF9XG4gICAgZGVmYXVsdDogcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHN0YXJ0Q2xvY2sgPSAoKSA9PiBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiBzZXRJbnRlcnZhbCgoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdUSUNLJywgbGlnaHQ6IHRydWUsIHRzOiBEYXRlLm5vdygpIH0pLCA4MDApXG59XG5cbmV4cG9ydCBjb25zdCBpbml0Q291bnRlciA9ICh2YWx1ZSkgPT4gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlIDogJ0lOSVRfQ09VTlRFUicsIHZhbHVlIH0pXG59XG5cbmV4cG9ydCBjb25zdCBhZGRDb3VudGVyID0gKCkgPT4gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlIDogJ0FERF9DT1VOVEVSJyB9KVxufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hSZXBvc2l0b3J5ID0gKHJlcElkKSA9PiBkaXNwYXRjaCA9PiB7XG4gIC8vcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGxldCB1cmwgPSAnaHR0cDovLzU5MTViM2NiNWUxN2JkMDAxMWY2Yjg5ZS5tb2NrYXBpLmlvL2FwaS9yZXBzLycgKyByZXBJZDtcbiAgICBcbiAgICBmZXRjaCh1cmwpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICBkaXNwYXRjaChyZWNlaXZlUmVwb3NpdG9yeShqc29uKSlcbiAgICB9KVxuIC8vIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlY2VpdmVSZXBvc2l0b3J5ID0gKGRhdGEpID0+IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ1JFQ0VJVkVfUkVQT1NJVE9SWScsIGRhdGEgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRTdG9yZSA9IChpbml0aWFsU3RhdGUpID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSkpXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zdG9yZS5qcyIsImV4cG9ydCBkZWZhdWx0ICh7IGxhc3RVcGRhdGUsIGxpZ2h0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17bGlnaHQgPyAnbGlnaHQnIDogJyd9PlxuICAgICAge2Zvcm1hdChuZXcgRGF0ZShsYXN0VXBkYXRlKSl9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgY29sb3I6ICM4MkZBNTg7XG4gICAgICAgICAgZm9udDogNTBweCBtZW5sbywgbW9uYWNvLCBtb25vc3BhY2U7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5saWdodCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IGZvcm1hdCA9IHQgPT4gYCR7cGFkKHQuZ2V0VVRDSG91cnMoKSl9OiR7cGFkKHQuZ2V0VVRDTWludXRlcygpKX06JHtwYWQodC5nZXRVVENTZWNvbmRzKCkpfWBcblxuY29uc3QgcGFkID0gbiA9PiBuIDwgMTAgPyBgMCR7bn1gIDogblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9DbG9jay5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgYWRkQ291bnRlciwgZmV0Y2hSZXBvc2l0b3J5IH0gZnJvbSAnLi4vc3RvcmUnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZSA9PiBzdGF0ZSkoKHsgY291bnRlciwgcmVwb3NpdG9yeSwgZGlzcGF0Y2ggfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+Q291bnRlcjwvaDE+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIEN1cnJlbnQ6IHtjb3VudGVyfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICBSZXBvc2l0b3J5OlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtyZXBvc2l0b3J5LmZ1bGxfbmFtZX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxzZWxlY3QgdmFsdWU9e3JlcG9zaXRvcnkuaWR9IG9uQ2hhbmdlPXtcclxuICAgICAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKGZldGNoUmVwb3NpdG9yeShlLnRhcmdldC52YWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyAnP2NvdW50ZXI9JyArIChjb3VudGVyKSArIFwiJnJlcElkPVwiICsgZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcyA9IGhyZWZcclxuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKGhyZWYsIGFzKVxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5GaXJzdDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPlNlY29uZDwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGFkZENvdW50ZXIoKSkgXHJcbiAgICAgICAgICAgIGNvbnN0IGhyZWYgPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgJz9jb3VudGVyPScgKyAoY291bnRlciArIDEpICsgXCImcmVwSWQ9XCIgKyByZXBvc2l0b3J5LmlkO1xyXG4gICAgICAgICAgICBjb25zdCBhcyA9IGhyZWZcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goaHJlZiwgYXMpXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfX0+QWRkPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59KVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0NvdW50ZXIuanMiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgQ2xvY2sgZnJvbSAnLi9DbG9jaydcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZSA9PiBzdGF0ZSkoKHsgdGl0bGUsIGxpbmtUbywgbGFzdFVwZGF0ZSwgbGlnaHQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICA8Q2xvY2sgbGFzdFVwZGF0ZT17bGFzdFVwZGF0ZX0gbGlnaHQ9e2xpZ2h0fSAvPlxuICAgICAgPG5hdj5cbiAgICAgICAgPExpbmsgaHJlZj17bGlua1RvfT48YT5OYXZpZ2F0ZTwvYT48L0xpbms+XG4gICAgICA8L25hdj5cbiAgICA8L2Rpdj5cbiAgKVxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUGFnZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGluaXRTdG9yZSwgc3RhcnRDbG9jaywgcmVjZWl2ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9zdG9yZSdcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlJ1xuaW1wb3J0IENvdW50ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db3VudGVyJztcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoeyBzdG9yZSwgaXNTZXJ2ZXIsIHBhdGhuYW1lLCBxdWVyeSB9KSB7XG4gICAgY29uc29sZS5sb2coXCJpbmRleCBnZXQgaW5pdGlhbCBwcm9wc1wiKTtcbiAgICBjb25zb2xlLmxvZyhxdWVyeSk7XG4gICAgbGV0IHVybCA9ICdodHRwOi8vNTkxNWIzY2I1ZTE3YmQwMDExZjZiODllLm1vY2thcGkuaW8vYXBpL3JlcHMvJyArIChxdWVyeS5yZXBJZCB8fCAxKTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcbiAgICBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6ICdSRUNFSVZFX1JFUE9TSVRPUlknLCBkYXRhIDoganNvbiB9KVxuICAgIHN0b3JlLmRpc3BhdGNoKHsgdHlwZTogJ1RJQ0snLCBsaWdodDogIWlzU2VydmVyLCB0czogRGF0ZS5ub3coKSB9KTtcbiAgICAvL2lmIChxdWVyeS5jb3VudGVyKVxuICAgIC8vICBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6ICdJTklUX0NPVU5URVInLCB2YWx1ZSA6ICtxdWVyeS5jb3VudGVyIHx8IDAgfSk7XG5cbiAgICByZXR1cm4geyBpc1NlcnZlciAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIHRoaXMudGltZXIgPSB0aGlzLnByb3BzLmRpc3BhdGNoKHN0YXJ0Q2xvY2soKSlcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8UGFnZSB0aXRsZT0nSW5kZXggUGFnZScgbGlua1RvPScvb3RoZXInIC8+XG4gICAgICAgIDxDb3VudGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KGluaXRTdG9yZSkoSW5kZXgpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        