'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');

var BlankSlate = createReactClass({
	displayName: 'BlankState',
	propTypes: {
		children: PropTypes.node.isRequired
	},
	render: function render() {
		return React.createElement('div', _extends({ className: 'BlankState' }, this.props));
	}
});

BlankSlate.Heading = createReactClass({
	displayName: 'BlankStateHeading',
	propTypes: {
		children: PropTypes.node.isRequired
	},
	render: function render() {
		return React.createElement('h2', _extends({ className: 'BlankState__heading' }, this.props));
	}
});

exports['default'] = BlankSlate;
module.exports = exports['default'];