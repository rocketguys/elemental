'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var React = require('react');
var PropTypes = require('prop-types');
var classNames = require('classnames');
var createReactClass = require('create-react-class');

var ALERT_TYPES = ['danger', 'error', // alias for danger
'info', 'primary', 'success', 'warning'];

exports['default'] = createReactClass({
	displayName: 'ElementalAlert',
	propTypes: {
		children: PropTypes.node.isRequired,
		className: PropTypes.string,
		type: PropTypes.oneOf(ALERT_TYPES).isRequired
	},
	render: function render() {
		var componentClass = classNames('Alert', 'Alert--' + this.props.type, this.props.className);

		return React.createElement(
			'div',
			{ className: componentClass },
			this.props.children
		);
	}
});
module.exports = exports['default'];