'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _blacklist = require('blacklist');

var _blacklist2 = _interopRequireDefault(_blacklist);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

exports['default'] = (0, _createReactClass2['default'])({
	displayName: 'Row',
	propTypes: {
		children: _propTypes2['default'].node.isRequired,
		className: _propTypes2['default'].string,
		gutter: _propTypes2['default'].number,
		style: _propTypes2['default'].object
	},
	getDefaultProps: function getDefaultProps() {
		return {
			gutter: _constants2['default'].width.gutter
		};
	},
	render: function render() {
		var gutter = this.props.gutter;

		var rowStyle = {
			display: 'flex',
			flexWrap: 'wrap',
			msFlexWrap: 'wrap',
			WebkitFlexWrap: 'wrap',
			marginLeft: gutter / -2,
			marginRight: gutter / -2
		};
		var className = (0, _classnames2['default'])('Row', this.props.className);
		var props = (0, _blacklist2['default'])(this.props, 'className', 'gutter', 'style');

		return _react2['default'].createElement('div', _extends({}, props, { style: _extends(rowStyle, this.props.style), className: className }));
	}
});
module.exports = exports['default'];