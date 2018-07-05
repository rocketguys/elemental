'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var blacklist = require('blacklist');
var classNames = require('classnames');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');

exports['default'] = createReactClass({
	displayName: 'FormLabel',
	propTypes: {
		className: PropTypes.string,
		htmlFor: PropTypes.string,
		id: PropTypes.string,
		style: PropTypes.object,
		verticalAlign: PropTypes.oneOf(['baseline', 'bottom', 'inherit', 'initial', 'middle', 'sub', 'super', 'text-bottom', 'text-top', 'top'])
	},
	render: function render() {
		// classes
		var className = classNames('FormLabel', this.props.className);
		// props
		var props = blacklist(this.props, 'htmlFor', 'id', 'className', 'style');
		// style
		var style = undefined;
		if (this.props.verticalAlign) {
			style = {
				verticalAlign: this.props.verticalAlign
			};
		}
		return React.createElement(
			'label',
			_extends({ className: className, htmlFor: this.props.htmlFor || this.props.id, style: style || this.props.style }, props),
			this.props.children
		);
	}
});
module.exports = exports['default'];