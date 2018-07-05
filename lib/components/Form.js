'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function Form(_ref) {
	var className = _ref.className;
	var component = _ref.component;
	var type = _ref.type;

	var props = _objectWithoutProperties(_ref, ['className', 'component', 'type']);

	var Component = component;
	props.className = (0, _classnames2['default'])('Form', 'Form--' + type, className);

	return _react2['default'].createElement(Component, props);
};

Form.propTypes = {
	component: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].func]),
	type: _propTypes2['default'].oneOf(['basic', 'horizontal', 'inline'])
};
Form.defaultProps = {
	component: 'form',
	type: 'basic'
};

exports['default'] = Form;
module.exports = exports['default'];