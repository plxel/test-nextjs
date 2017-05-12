'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _store = require('../store');

var _index = require('next\\dist\\lib\\router\\index.js');

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