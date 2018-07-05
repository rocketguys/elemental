'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var React = require('react');
var classNames = require('classnames');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');

exports['default'] = createReactClass({
	displayName: 'FormRow',
	propTypes: {
		className: PropTypes.string
	},
	render: function render() {
		var className = classNames('FormRow', this.props.className);

		return React.createElement(
			'div',
			{ className: className },
			this.props.children
		);
	}
});
module.exports = exports['default'];