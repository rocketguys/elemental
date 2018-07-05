'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

exports['default'] = (0, _createReactClass2['default'])({
	displayName: 'Table',

	propTypes: {
		children: _propTypes2['default'].any,
		className: _propTypes2['default'].string
	},

	render: function render() {
		// classes
		var className = (0, _classnames2['default'])('Table', this.props.className);

		// render table element
		return _react2['default'].createElement('table', _extends({}, this.props, { className: className }));
	}
});
module.exports = exports['default'];