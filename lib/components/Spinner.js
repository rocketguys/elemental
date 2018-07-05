'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var React = require('react');
var classNames = require('classnames');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');

exports['default'] = createReactClass({
	displayName: 'Spinner',
	propTypes: {
		className: PropTypes.string,
		size: PropTypes.oneOf(['sm', 'md', 'lg']),
		type: PropTypes.oneOf(['default', 'primary', 'inverted'])
	},
	getDefaultProps: function getDefaultProps() {
		return {
			type: 'default',
			size: 'sm'
		};
	},
	render: function render() {
		var componentClass = classNames('Spinner', 'Spinner--' + this.props.type, 'Spinner--' + this.props.size, this.props.className);

		return React.createElement(
			'div',
			{ className: componentClass },
			React.createElement('span', { className: 'Spinner_dot Spinner_dot--first' }),
			React.createElement('span', { className: 'Spinner_dot Spinner_dot--second' }),
			React.createElement('span', { className: 'Spinner_dot Spinner_dot--third' })
		);
	}
});
module.exports = exports['default'];