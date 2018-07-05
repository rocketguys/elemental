'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');

var _require = require('react-transition-group');

var CSSTransitionGroup = _require.CSSTransitionGroup;

var blacklist = require('blacklist');
var classNames = require('classnames');
var Button = require('./Button');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');

var ESC_KEYCODE = 27;
var NO_OP = function NO_OP() {
	return undefined;
};

exports['default'] = createReactClass({
	displayName: 'Dropdown',
	propTypes: {
		alignRight: PropTypes.bool,
		buttonHasDisclosureArrow: PropTypes.bool,
		buttonLabel: PropTypes.string,
		buttonSize: PropTypes.string,
		buttonType: PropTypes.string,
		children: PropTypes.element,
		className: PropTypes.string,
		isOpen: PropTypes.bool,
		items: PropTypes.array.isRequired,
		onSelect: PropTypes.func
	},
	getDefaultProps: function getDefaultProps() {
		return {
			buttonHasDisclosureArrow: true,
			onSelect: NO_OP
		};
	},
	getInitialState: function getInitialState() {
		return {
			isOpen: this.props.isOpen || false
		};
	},
	componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
		if (typeof window === 'undefined') return;
		if (nextState.isOpen) {
			window.addEventListener('keydown', this.handleKeyDown);
		} else {
			window.removeEventListener('keydown', this.handleKeyDown);
		}
	},
	openDropdown: function openDropdown() {
		this.setState({ isOpen: true });
	},
	closeDropdown: function closeDropdown() {
		this.setState({ isOpen: false });
	},
	handleKeyDown: function handleKeyDown(e) {
		if (e.keyCode === ESC_KEYCODE) {
			this.closeDropdown();
		}
	},
	renderChildren: function renderChildren() {
		var _this = this;

		return React.Children.map(this.props.children, function (child) {
			return React.cloneElement(child, {
				onClick: _this.state.isOpen ? _this.closeDropdown : _this.openDropdown,
				className: classNames(child.props.className, 'Dropdown-toggle')
			});
		});
	},
	renderButton: function renderButton() {
		var disclosureArrow = this.props.buttonHasDisclosureArrow ? React.createElement('span', { className: 'disclosure-arrow' }) : null;

		return React.createElement(
			Button,
			{ type: this.props.buttonType, size: this.props.buttonSize, onClick: this.state.isOpen ? this.closeDropdown : this.openDropdown, className: 'Dropdown-toggle' },
			this.props.buttonLabel,
			disclosureArrow
		);
	},
	onClick: function onClick(selectedItem) {
		this.setState({
			isOpen: !this.state.isOpen
		});
		this.props.onSelect(selectedItem);
	},
	renderDropdownMenu: function renderDropdownMenu() {
		var self = this;
		if (!this.state.isOpen) return null;

		var dropdownMenuItems = this.props.items.map(function (item, i) {
			var menuItem;
			if (item.type === 'header') {
				menuItem = React.createElement(
					'li',
					{ key: 'item-' + i, className: 'Dropdown-menu__header' },
					item.label
				);
			} else if (item.type === 'divider') {
				menuItem = React.createElement('li', { key: 'item-' + i, className: 'Dropdown-menu__divider' });
			} else {
				menuItem = React.createElement(
					'li',
					{ key: 'item-' + i, className: 'Dropdown-menu__item' },
					React.createElement(
						'span',
						{ className: 'Dropdown-menu__action', onClick: self.onClick.bind(self, item.value) },
						item.label
					)
				);
			}
			return menuItem;
		});

		return React.createElement(
			'ul',
			{ key: 'Dropdown-menu', className: 'Dropdown-menu', role: 'menu' },
			dropdownMenuItems
		);
	},
	renderDropdownMenuBackground: function renderDropdownMenuBackground() {
		if (!this.state.isOpen) return null;
		return React.createElement('div', { className: 'Dropdown-menu-backdrop', onClick: this.closeDropdown });
	},
	render: function render() {
		// classes
		var dropdownClass = classNames('Dropdown', {
			'is-open': this.state.isOpen,
			'align-right': this.props.alignRight
		}, this.props.className);

		// props
		var props = blacklist(this.props, 'alignRight', 'buttonHasDisclosureArrow', 'buttonLabel', 'buttonType', 'className', 'isOpen', 'items');

		return React.createElement(
			'span',
			_extends({ className: dropdownClass }, props),
			React.Children.count(this.props.children) ? this.renderChildren() : this.renderButton(),
			React.createElement(
				CSSTransitionGroup,
				{ transitionName: 'Dropdown-menu', transitionEnterTimeout: 100, transitionLeaveTimeout: 100 },
				this.renderDropdownMenu()
			),
			this.renderDropdownMenuBackground()
		);
	}
});
module.exports = exports['default'];