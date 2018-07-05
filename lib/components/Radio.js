'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var blacklist = require('blacklist');
var classNames = require('classnames');
var React = require('react');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');

var Radio = createReactClass({
	propTypes: {
		className: PropTypes.string,
		disabled: PropTypes.bool,
		inline: PropTypes.bool,
		innerRef: PropTypes.func,
		label: PropTypes.string
	},
	getRef: function getRef(ref) {
		this.target = ref;

		if (this.props.innerRef) {
			this.props.innerRef(ref);
		}
	},
	render: function render() {
		var componentClass = classNames('Radio', {
			'Radio--disabled': this.props.disabled,
			'Radio--inline': this.props.inline
		}, this.props.className);
		var props = blacklist(this.props, 'className', 'label');

		return React.createElement(
			'label',
			{ className: componentClass },
			React.createElement('input', _extends({ ref: this.getRef, type: 'radio', className: 'Radio__input' }, props)),
			this.props.label && React.createElement(
				'span',
				{ className: 'Radio__label' },
				this.props.label
			)
		);
	}
});

exports['default'] = Radio;
module.exports = exports['default'];