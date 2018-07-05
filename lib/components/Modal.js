'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactTransitionGroup = require('react-transition-group');

var _blacklist = require('blacklist');

var _blacklist2 = _interopRequireDefault(_blacklist);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _constants = require('../constants');

var TransitionPortal = (0, _createReactClass2['default'])({
	displayName: 'TransitionPortal',
	componentDidMount: function componentDidMount() {
		if (!_constants.canUseDOM) return;
		var p = document.createElement('div');
		document.body.appendChild(p);
		this.portalElement = p;
		this.componentDidUpdate();
	},
	componentDidUpdate: function componentDidUpdate() {
		if (!_constants.canUseDOM) return;
		_reactDom2['default'].render(_react2['default'].createElement(
			_reactTransitionGroup.CSSTransitionGroup,
			this.props,
			this.props.children
		), this.portalElement);
	},
	componentWillUnmount: function componentWillUnmount() {
		if (!_constants.canUseDOM) return;
		document.body.removeChild(this.portalElement);
	},
	portalElement: null,
	render: function render() {
		return null;
	}
});

var Modal = (0, _createReactClass2['default'])({
	displayName: 'Modal',
	propTypes: {
		autoFocusFirstElement: _propTypes2['default'].bool,
		backdropClosesModal: _propTypes2['default'].bool,
		className: _propTypes2['default'].string,
		isOpen: _propTypes2['default'].bool,
		onCancel: _propTypes2['default'].func,
		width: _propTypes2['default'].oneOfType([_propTypes2['default'].oneOf(['small', 'medium', 'large']), _propTypes2['default'].number])
	},
	getDefaultProps: function getDefaultProps() {
		return {
			width: 'medium'
		};
	},
	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		if (!_constants.canUseDOM) return;

		var target = document.body;
		var scrollbarWidth = window.innerWidth - document.body.clientWidth; // 1.

		if (!this.props.isOpen && nextProps.isOpen) {
			// setTimeout(() => this.handleAccessibility());
			target.style.overflow = 'hidden';
			target.style.paddingRight = scrollbarWidth + 'px';
		} else if (this.props.isOpen && !nextProps.isOpen) {
			// setTimeout(() => this.removeAccessibilityHandlers());
			target.style.overflow = '';
			target.style.paddingRight = '';
		}
	},
	componentWillUnmount: function componentWillUnmount() {
		if (!_constants.canUseDOM) return;

		var target = document.body;
		target.style.overflow = '';
		target.style.paddingRight = '';
	},
	/*
 handleAccessibility () {
 	// Remember the element that was focused before we opened the modal
 	// so we can return focus to it once we close the modal.
 	this.focusedElementBeforeModalOpened = document.activeElement;
 		// We're using a transition to reveal the modal,
 	// so wait until the element is visible, before
 	// finding the first keyboard focusable element
 	// and passing focus to it, otherwise the browser
 	// might scroll the document to reveal the element
 	// receiving focus
 	if (this.props.autoFocusFirstElement) {
 		ally.when.visibleArea({
 			context: this.modalElement,
 			callback: function(context) {
 				// the modal is visible on screen, so find the first
 				// keyboard focusable element (giving any element with
 				// autoFocus attribute precendence). If the modal does
 				// not contain any keyboard focusabe elements, focus will
 				// be given to the modal itself.
 				var element = ally.query.firstTabbable({
 					context: context,
 					defaultToContext: true,
 				});
 				element.focus();
 			},
 		});
 	}
 		// Make sure that no element outside of the modal
 	// can be interacted with while the modal is visible.
 	this.disabledHandle = ally.maintain.disabled({
 		filter: this.modalElement,
 	});
 		// Make sure that no element outside of the modal
 	// is exposed via the Accessibility Tree, to prevent
 	// screen readers from navigating to content it shouldn't
 	// be seeing while the modal is open.
 	this.hiddenHandle = ally.maintain.hidden({
 		filter: this.modalElement,
 	});
 		// React to escape keys as mandated by ARIA Practices
 	this.keyHandle = ally.when.key({
 		escape: this.handleClose,
 	});
 },
 removeAccessibilityHandlers () {
 	// undo listening to keyboard
 	this.keyHandle && this.keyHandle.disengage();
 		// undo hiding elements outside of the modal
 	this.hiddenHandle && this.hiddenHandle.disengage();
 		// undo disabling elements outside of the modal
 	this.disabledHandle && this.disabledHandle.disengage();
 		// return focus to where it was before we opened the modal
 	this.focusedElementBeforeModalOpened && this.focusedElementBeforeModalOpened.focus();
 },
 handleModalClick (event) {
 	if (event.target.dataset.modal) this.handleClose();
 },
 */
	handleClose: function handleClose() {
		var _props = this.props;
		var backdropClosesModal = _props.backdropClosesModal;
		var onCancel = _props.onCancel;

		console.log('handleClose', backdropClosesModal);

		if (backdropClosesModal) onCancel();
	},
	handleDialogClick: function handleDialogClick(event) {
		event.stopPropagation();
	},
	renderDialog: function renderDialog() {
		var _this = this;

		var _props2 = this.props;
		var children = _props2.children;
		var isOpen = _props2.isOpen;
		var width = _props2.width;

		if (!isOpen) return;

		var style = width && !isNaN(width) ? { width: width + 20 } : null;
		var dialogClassname = (0, _classnames2['default'])('Modal-dialog', width && isNaN(width) ? 'Modal-dialog--' + width : null);

		return _react2['default'].createElement(
			'div',
			{ className: dialogClassname, style: style, onClick: this.handleDialogClick },
			_react2['default'].createElement(
				'div',
				{ ref: function (r) {
						return _this.modalElement = r;
					}, className: 'Modal-content' },
				children
			)
		);
	},
	renderBackdrop: function renderBackdrop() {
		var isOpen = this.props.isOpen;

		if (!isOpen) return;

		return _react2['default'].createElement('div', { className: 'Modal-backdrop' });
	},
	render: function render() {
		var className = (0, _classnames2['default'])('Modal', {
			'is-open': this.props.isOpen
		}, this.props.className);

		var props = (0, _blacklist2['default'])(this.props, 'backdropClosesModal', 'className', 'isOpen', 'onCancel');

		return _react2['default'].createElement(
			'div',
			null,
			_react2['default'].createElement(
				TransitionPortal,
				_extends({}, props, {
					className: className,
					'data-modal': 'true',
					onClick: this.handleClose,
					transitionEnterTimeout: 260,
					transitionLeaveTimeout: 140,
					transitionName: 'Modal-dialog'
				}),
				this.renderDialog()
			),
			_react2['default'].createElement(
				TransitionPortal,
				{
					transitionName: 'Modal-background',
					transitionEnterTimeout: 140,
					transitionLeaveTimeout: 240
				},
				this.renderBackdrop()
			)
		);
	}
});

// expose the children to the top level export
Modal.Body = require('./ModalBody');
Modal.Footer = require('./ModalFooter');
Modal.Header = require('./ModalHeader');

exports['default'] = Modal;
module.exports = exports['default'];