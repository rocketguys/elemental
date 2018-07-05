'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var React = require('react');
var classNames = require('classnames');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');

var icons = require('../Octicons').map;
var validNames = require('../Octicons').keys;

var Glyph = createReactClass({
	displayName: 'Glyph',
	propTypes: {
		className: PropTypes.string,
		icon: PropTypes.oneOf(validNames),
		type: PropTypes.oneOf(['danger', 'default', 'muted', 'primary', 'success', 'warning'])
	},
	render: function render() {
		// classes
		var className = classNames('Glyph__icon', icons[this.props.icon].className, this.props.type ? 'IconField__icon-color--' + this.props.type : null, this.props.className);
		return React.createElement('i', { className: className });
	}
});

Glyph.names = validNames;

exports['default'] = Glyph;
module.exports = exports['default'];