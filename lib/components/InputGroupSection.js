'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var classNames = require('classnames');
var blacklist = require('blacklist');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');

exports['default'] = createReactClass({
	displayName: 'InputGroupSection',
	propTypes: {
		className: PropTypes.string,
		grow: PropTypes.bool
	},
	render: function render() {
		// classes
		var className = classNames('InputGroup_section', {
			'InputGroup_section--grow': this.props.grow
		}, this.props.className);
		var props = blacklist(this.props, 'grow');

		return React.createElement('div', _extends({}, props, { className: className }));
	}
});
module.exports = exports['default'];