'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classnames = require('classnames');
var React = require('react');
var blacklist = require('blacklist');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');

exports['default'] = createReactClass({
	displayName: 'ModalHeader',
	propTypes: {
		children: PropTypes.node,
		className: PropTypes.string,
		onClose: PropTypes.func,
		showCloseButton: PropTypes.bool,
		text: PropTypes.string
	},
	handleClose: function handleClose() {
		document.body.style.overflow = '';
		this.props.onClose();
	},
	render: function render() {

		// elements
		var className = classnames('Modal__header', this.props.className);
		var close = this.props.showCloseButton ? React.createElement('button', { type: 'button', onClick: this.handleClose, className: 'Modal__header__close' }) : null;
		var text = this.props.text ? React.createElement(
			'h4',
			{ className: 'Modal__header__text' },
			this.props.text
		) : null;
		var props = blacklist(this.props, 'children', 'onClose', 'showCloseButton', 'text');

		return React.createElement(
			'div',
			_extends({}, props, { className: className }),
			close,
			text,
			this.props.children
		);
	}
});
module.exports = exports['default'];