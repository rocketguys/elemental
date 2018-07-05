'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _blacklist = require('blacklist');

var _blacklist2 = _interopRequireDefault(_blacklist);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

exports['default'] = (0, _createReactClass2['default'])({
	displayName: 'ResponsiveText',
	propTypes: {
		hiddenLG: _propTypes2['default'].string,
		hiddenMD: _propTypes2['default'].string,
		hiddenSM: _propTypes2['default'].string,
		hiddenXS: _propTypes2['default'].string,
		visibleLG: _propTypes2['default'].string,
		visibleMD: _propTypes2['default'].string,
		visibleSM: _propTypes2['default'].string,
		visibleXS: _propTypes2['default'].string
	},
	getInitialState: function getInitialState() {
		return {
			windowWidth: typeof window !== 'undefined' ? window.innerWidth : 0
		};
	},
	componentDidMount: function componentDidMount() {
		if (typeof window !== 'undefined') window.addEventListener('resize', this.handleResize);
	},
	componentWillUnmount: function componentWillUnmount() {
		if (typeof window !== 'undefined') window.removeEventListener('resize', this.handleResize);
	},
	handleResize: function handleResize() {
		this.setState({
			windowWidth: typeof window !== 'undefined' ? window.innerWidth : 0
		});
	},
	render: function render() {
		var _props = this.props;
		var hiddenXS = _props.hiddenXS;
		var hiddenSM = _props.hiddenSM;
		var hiddenMD = _props.hiddenMD;
		var hiddenLG = _props.hiddenLG;
		var visibleXS = _props.visibleXS;
		var visibleSM = _props.visibleSM;
		var visibleMD = _props.visibleMD;
		var visibleLG = _props.visibleLG;
		var windowWidth = this.state.windowWidth;

		var text = undefined;

		// set widths / flex-basis
		if (windowWidth < _constants2['default'].breakpoint.xs) {
			text = visibleXS || hiddenSM || hiddenMD || hiddenLG;
		} else if (windowWidth < _constants2['default'].breakpoint.sm) {
			text = hiddenXS || visibleSM || hiddenMD || hiddenLG;
		} else if (windowWidth < _constants2['default'].breakpoint.md) {
			text = hiddenXS || hiddenSM || visibleMD || hiddenLG;
		} else {
			text = hiddenXS || hiddenSM || hiddenMD || visibleLG;
		}

		var props = (0, _blacklist2['default'])(this.props, {
			hiddenXS: true,
			hiddenSM: true,
			hiddenMD: true,
			hiddenLG: true,
			visibleXS: true,
			visibleSM: true,
			visibleMD: true,
			visibleLG: true
		});

		return _react2['default'].createElement(
			'span',
			props,
			text
		);
	}
});
module.exports = exports['default'];