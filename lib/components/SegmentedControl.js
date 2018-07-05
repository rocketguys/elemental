'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function SegmentedControl(_ref) {
	var className = _ref.className;
	var equalWidthSegments = _ref.equalWidthSegments;
	var onChange = _ref.onChange;
	var options = _ref.options;
	var type = _ref.type;
	var value = _ref.value;

	var props = _objectWithoutProperties(_ref, ['className', 'equalWidthSegments', 'onChange', 'options', 'type', 'value']);

	props.className = (0, _classnames2['default'])('SegmentedControl', 'SegmentedControl--' + type, {
		'SegmentedControl--equal-widths': equalWidthSegments
	}, className);

	return _react2['default'].createElement(
		'div',
		props,
		options.map(function (op) {

			var buttonClassName = (0, _classnames2['default'])('SegmentedControl__button', {
				'is-selected': op.value === value
			});

			return _react2['default'].createElement(
				'span',
				{ key: 'option-' + op.value, className: 'SegmentedControl__item' },
				_react2['default'].createElement(
					'button',
					{ type: 'button', onClick: function () {
							return onChange(op.value);
						}, className: buttonClassName },
					op.label
				)
			);
		})
	);
};

SegmentedControl.propTypes = {
	className: _propTypes2['default'].string,
	equalWidthSegments: _propTypes2['default'].bool,
	onChange: _propTypes2['default'].func.isRequired,
	options: _propTypes2['default'].array.isRequired,
	type: _propTypes2['default'].oneOf(['default', 'muted', 'danger', 'info', 'primary', 'success', 'warning']),
	value: _propTypes2['default'].oneOfType([_propTypes2['default'].bool, _propTypes2['default'].number, _propTypes2['default'].string])
};
SegmentedControl.defaultProps = {
	type: 'default'
};

exports['default'] = SegmentedControl;
module.exports = exports['default'];