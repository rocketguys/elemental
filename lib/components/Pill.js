'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var React = require('react');
var blacklist = require('blacklist');
var classNames = require('classnames');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');

var ALERT_TYPES = ['danger', 'default', 'info', 'primary', 'success', 'warning', 'danger-inverted', 'default-inverted', 'info-inverted', 'primary-inverted', 'success-inverted', 'warning-inverted'];

exports['default'] = createReactClass({
	displayName: 'Pill',
	propTypes: {
		className: PropTypes.string,
		label: PropTypes.string.isRequired,
		onClear: PropTypes.func,
		onClick: PropTypes.func,
		type: PropTypes.oneOf(ALERT_TYPES)
	},
	getDefaultProps: function getDefaultProps() {
		return {
			type: 'default'
		};
	},
	renderClearButton: function renderClearButton() {
		if (!this.props.onClear) return null;
		return React.createElement(
			'button',
			{ type: 'button', onClick: this.props.onClear, className: 'Pill__clear' },
			'×'
		);
	},
	render: function render() {
		var componentClass = classNames('Pill', 'Pill--' + this.props.type, this.props.className);

		var props = blacklist(this.props, 'className', 'label', 'onClear', 'onClick', 'type');
		props.className = componentClass;

		return React.createElement(
			'div',
			props,
			React.createElement(
				'button',
				{ type: 'button', onClick: this.props.onClick, className: 'Pill__label' },
				this.props.label
			),
			this.renderClearButton()
		);
	}
});
module.exports = exports['default'];