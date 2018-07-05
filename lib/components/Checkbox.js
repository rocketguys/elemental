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

var Checkbox = createReactClass({
	propTypes: {
		autoFocus: PropTypes.bool,
		className: PropTypes.string,
		disabled: PropTypes.bool,
		indeterminate: PropTypes.bool,
		inline: PropTypes.bool,
		innerRef: PropTypes.func,
		label: PropTypes.string,
		style: PropTypes.object,
		title: PropTypes.string
	},
	componentDidMount: function componentDidMount() {
		if (this.props.autoFocus) {
			this.target.focus();
		}
		this.setIndeterminate(this.props.indeterminate);
	},
	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		this.setIndeterminate(nextProps.indeterminate);
	},
	setIndeterminate: function setIndeterminate(value) {
		this.target.indeterminate = value;
	},
	getRef: function getRef(ref) {
		this.target = ref;

		if (this.props.innerRef) {
			this.props.innerRef(ref);
		}
	},
	render: function render() {
		var componentClass = classNames('Checkbox', {
			'Checkbox--disabled': this.props.disabled,
			'Checkbox--inline': this.props.inline
		}, this.props.className);
		var props = blacklist(this.props, 'className', 'label', 'style', 'title');
		return React.createElement(
			'label',
			{ className: componentClass, style: this.props.style, title: this.props.title },
			React.createElement('input', _extends({ ref: this.getRef, type: 'checkbox', className: 'Checkbox__input' }, props)),
			this.props.label && React.createElement(
				'span',
				{ className: 'Checkbox__label' },
				this.props.label
			)
		);
	}
});

exports['default'] = Checkbox;
module.exports = exports['default'];