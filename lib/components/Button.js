'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var React = require('react');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var blacklist = require('blacklist');
var createReactClass = require('create-react-class');

var BUTTON_SIZES = ['lg', 'sm', 'xs'];

var BUTTON_TYPES = ['default', 'default-primary', 'default-success', 'default-warning', 'default-danger', 'hollow-default', 'hollow-primary', 'hollow-success', 'hollow-warning', 'hollow-danger', 'primary', 'success', 'warning', 'danger', 'link', 'link-text', 'link-primary', 'link-success', 'link-warning', 'link-danger', 'link-cancel', 'link-delete'];

exports['default'] = createReactClass({
	displayName: 'Button',
	propTypes: {
		block: PropTypes.bool,
		className: PropTypes.string,
		component: PropTypes.element,
		href: PropTypes.string,
		isActive: PropTypes.bool,
		size: PropTypes.oneOf(BUTTON_SIZES),
		submit: PropTypes.bool,
		type: PropTypes.oneOf(BUTTON_TYPES)
	},
	getDefaultProps: function getDefaultProps() {
		return {
			type: 'default'
		};
	},
	render: function render() {
		// classes
		var componentClass = classNames('Button', 'Button--' + this.props.type, this.props.size ? 'Button--' + this.props.size : null, {
			'Button--block': this.props.block,
			'is-active': this.props.isActive
		}, this.props.className);

		// props
		var props = blacklist(this.props, 'block', 'isActive', 'type', 'size', 'component', 'className', 'submit');
		props.className = componentClass;

		if (this.props.component) {
			return React.cloneElement(this.props.component, props);
		}

		var tag = 'button';
		props.type = this.props.submit ? 'submit' : 'button';

		if (props.href) {
			tag = 'a';
			delete props.type;
		}

		return React.createElement(tag, props, this.props.children);
	}
});
module.exports = exports['default'];
