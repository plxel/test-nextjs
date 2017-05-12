'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = exports.receiveRepository = exports.fetchRepository = exports.addCounter = exports.initCounter = exports.startClock = exports.reducer = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

require('isomorphic-fetch');

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