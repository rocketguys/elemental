'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var React = require('react');
var classNames = require('classnames');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');

/*
	Based on: https://github.com/paramaggarwal/react-dropzone
*/

var Dropzone = createReactClass({
	propTypes: {
		className: PropTypes.string,
		label: PropTypes.string,
		labelActive: PropTypes.string,
		onDrop: PropTypes.func.isRequired
	},
	getDefaultProps: function getDefaultProps() {
		return {
			label: 'Drag Files Here',
			labelActive: 'Drop to Upload'
		};
	},
	getInitialState: function getInitialState() {
		return {
			isDragActive: false
		};
	},
	onDragLeave: function onDragLeave() {
		this.setState({
			isDragActive: false
		});
	},
	onDragOver: function onDragOver(e) {
		e.preventDefault();
		e.dataTransfer.dropEffect = 'copy';
		this.setState({
			isDragActive: true
		});
	},
	onDrop: function onDrop(e) {
		e.preventDefault();

		this.setState({
			isDragActive: false
		});

		var files;
		if (e.dataTransfer) {
			files = e.dataTransfer.files;
		} else if (e.target) {
			files = e.target.files;
		}

		if (this.props.onDrop) {
			files = Array.prototype.slice.call(files);
			this.props.onDrop(files);
		}
	},
	onClick: function onClick() {
		this.refs.fileInput.click();
	},
	render: function render() {
		var className = classNames('FileDragAndDrop', {
			active: this.state.isDragActive
		}, this.props.className);
		return React.createElement(
			'button',
			{ className: className, type: 'button', onClick: this.onClick, onDragLeave: this.onDragLeave, onDragOver: this.onDragOver, onDrop: this.onDrop },
			React.createElement('input', { style: { display: 'none' }, type: 'file', multiple: true, ref: 'fileInput', onChange: this.onDrop }),
			React.createElement(
				'div',
				{ className: 'FileDragAndDrop__label' },
				this.state.isDragActive ? this.props.labelActive : this.props.label
			),
			this.props.children
		);
	}
});

exports['default'] = Dropzone;
module.exports = exports['default'];