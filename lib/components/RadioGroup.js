'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var blacklist = require('blacklist');
var classNames = require('classnames');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');

exports['default'] = createReactClass({
	displayName: 'RadioGroup',
	propTypes: {
		alwaysValidate: PropTypes.bool,
		disabled: PropTypes.bool,
		className: PropTypes.string,
		inline: PropTypes.bool,
		label: PropTypes.string,
		onChange: PropTypes.func.isRequired,
		options: PropTypes.array.isRequired,
		required: PropTypes.bool,
		requiredMessage: PropTypes.string,
		value: PropTypes.string
	},
	getDefaultProps: function getDefaultProps() {
		return {
			requiredMessage: 'This field is required'
		};
	},
	getInitialState: function getInitialState() {
		return {
			isValid: true,
			validationIsActive: this.props.alwaysValidate,
			currentValue: this.props.value
		};
	},
	componentDidMount: function componentDidMount() {
		if (this.state.validationIsActive) {
			this.validateInput(this.props.value);
		}
	},
	componentWillReceiveProps: function componentWillReceiveProps(newProps) {
		if (this.state.validationIsActive) {
			if (newProps.value !== this.props.value && newProps.value !== this._lastChangeValue && !newProps.alwaysValidate) {
				// reset validation state if the value was changed outside the component
				return this.setState({
					isValid: true,
					validationIsActive: false
				});
			}
			this.validateInput(newProps.value);
		}
		if (newProps.value !== this.props.value) {
			this.setState({ currentValue: newProps.value });
		}
	},
	handleChange: function handleChange(e) {
		this._lastChangeValue = e.target.value;
		if (this.props.onChange) this.props.onChange(e.target.value);
	},
	handleBlur: function handleBlur() {
		if (!this.props.alwaysValidate) {
			this.setState({ validationIsActive: false });
		}
		this.validateInput(this.props.value);
	},
	validateInput: function validateInput(value) {
		var newState = {
			isValid: true
		};
		if (this.props.required && (!value || value && !value.length)) {
			newState.isValid = false;
		}
		if (!newState.isValid) {
			newState.validationIsActive = true;
		}
		this.setState(newState);
	},
	render: function render() {
		var self = this;

		// props
		var props = blacklist(this.props, 'alwaysValidate', 'label', 'onChange', 'options', 'required', 'requiredMessage', 'value', 'inline', 'disabled');

		// classes
		var componentClass = classNames('FormField', {
			'is-invalid': !this.state.isValid
		}, this.props.className);

		// validation message
		var validationMessage;
		if (!this.state.isValid) {
			validationMessage = React.createElement(
				'div',
				{ className: 'form-validation is-invalid' },
				this.props.requiredMessage
			);
		}

		// dynamic elements
		var componentLabel = this.props.label ? React.createElement(
			'label',
			{ className: 'FormLabel' },
			this.props.label
		) : null;

		// options
		var radios = this.props.options.map(function (radio, i) {
			var radioClass = classNames('Radio', {
				'Radio--disabled': self.props.disabled
			});
			return React.createElement(
				'label',
				{ key: 'radio-' + i, className: radioClass },
				React.createElement('input', { value: radio.value,
					checked: self.state.currentValue == radio.value ? true : false,
					type: 'radio',
					onChange: self.handleChange,
					onBlur: self.handleBlur,
					name: self.props.name,
					className: 'Radio__input',
					disabled: self.props.disabled }),
				React.createElement(
					'span',
					{ className: 'Radio__label' },
					radio.label
				)
			);
		});
		if (this.props.inline) {
			radios = React.createElement(
				'div',
				{ className: 'inline-controls' },
				radios
			);
		}

		return React.createElement(
			'div',
			_extends({ className: componentClass }, props),
			componentLabel,
			radios,
			validationMessage
		);
	}
});
module.exports = exports['default'];