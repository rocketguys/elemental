'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var React = require('react');
var classNames = require('classnames');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');

exports['default'] = createReactClass({
	displayName: 'FormInput',
	propTypes: {
		autoFocus: PropTypes.bool,
		className: PropTypes.string,
		disabled: PropTypes.bool,
		href: PropTypes.string,
		id: PropTypes.string,
		innerRef: PropTypes.func,
		multiline: PropTypes.bool,
		name: PropTypes.string,
		noedit: PropTypes.bool,
		onChange: PropTypes.func,
		size: PropTypes.oneOf(['lg', 'sm', 'xs']),
		type: PropTypes.string,
		value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
	},

	getDefaultProps: function getDefaultProps() {
		return {
			type: 'text'
		};
	},

	componentDidMount: function componentDidMount() {
		if (this.props.autoFocus) {
			this.focus();
		}
	},

	focus: function focus() {
		this.input.focus();
	},

	select: function select() {
		this.input.select();
	},

	getRef: function getRef(ref) {
		this.input = ref;

		if (this.props.innerRef) {
			this.props.innerRef(ref);
		}
	},

	render: function render() {
		var _props = this.props;
		var noedit = _props.noedit;
		var multiline = _props.multiline;
		var size = _props.size;
		var className = _props.className;

		var rest = _objectWithoutProperties(_props, ['noedit', 'multiline', 'size', 'className']);

		// classes
		var newClassName = classNames({
			'FormInput-noedit': noedit,
			'FormInput-noedit--multiline': noedit && multiline,
			'FormInput': !noedit
		}, size ? 'FormInput--' + size : null, className);
		var props = _extends({}, rest, { className: newClassName });
		var Element = 'input';
		if (noedit && this.props.href) {
			Element = 'a';
			props.type = null;
			props.children = props.children || props.value;
		} else if (noedit) {
			Element = 'div';
			props.type = null;
			props.children = props.children || props.value;
		} else if (multiline) {
			Element = 'textarea';
		}

		return React.createElement(Element, _extends({ ref: this.getRef }, props));
	}
});
module.exports = exports['default'];