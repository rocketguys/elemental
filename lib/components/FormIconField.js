'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var React = require('react');
var blacklist = require('blacklist');
var classNames = require('classnames');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');

var FormField = require('./FormField');
var Spinner = require('./Spinner');

var ICON_MAP = require('../Octicons').map;
var ICON_KEYS = require('../Octicons').keys;
var COLOR_VARIANTS = ['danger', 'default', 'primary', 'success', 'warning'];

exports['default'] = createReactClass({
	displayName: 'FormIconField',
	propTypes: {
		className: PropTypes.string,
		iconColor: PropTypes.oneOf(COLOR_VARIANTS),
		iconFill: PropTypes.oneOf(COLOR_VARIANTS),
		iconIsLoading: PropTypes.bool,
		iconKey: PropTypes.oneOf(ICON_KEYS).isRequired,
		iconPosition: PropTypes.oneOf(['left', 'right'])
	},
	getDefaultProps: function getDefaultProps() {
		return {
			iconPosition: 'left'
		};
	},
	render: function render() {
		// props
		var props = blacklist(this.props, 'children', 'iconPosition', 'iconKey', 'iconFill', 'iconColor', 'iconIsLoading');

		// classes
		var fieldClass = classNames('IconField', {
			'has-fill-icon': this.props.iconFill,
			'is-loading-icon': this.props.iconIsLoading
		}, this.props.iconFill ? 'field-context-' + this.props.iconFill : null, this.props.iconColor ? 'field-context-' + this.props.iconColor : null, this.props.iconPosition);

		var iconClass = classNames('IconField__icon', this.props.iconFill ? 'IconField__icon-fill--' + this.props.iconFill : null, this.props.iconColor ? 'IconField__icon-color--' + this.props.iconColor : null, ICON_MAP[this.props.iconKey].className);

		var icon = this.props.iconIsLoading ? React.createElement(Spinner, { size: 'sm' }) : React.createElement('span', { className: iconClass });

		var children = React.Children.toArray(his.props.children);
		var firstChild = children[0];
		var restChildren = children.slice(1);

		return React.createElement(
			FormField,
			props,
			React.createElement(
				'div',
				{ className: fieldClass },
				React.createElement(
					'div',
					{ className: fieldClass },
					firstChild,
					icon
				),
				restChildren
			)
		);
	}
});
module.exports = exports['default'];