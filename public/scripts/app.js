'use strict';

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('app.js is runing');

var template = ['aia', 'sia@hotmial.com', '@.com', 'k@yahho.com'].map(function (email) {
  return _react2.default.createElement(
    'p',
    null,
    'Is this ',
    email,
    ' an email? ',
    _validator2.default.isEmail(email)
  );
});

_reactDom2.default.render(template, document.getElementById('app'));
