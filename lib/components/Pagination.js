'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var classNames = require('classnames');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');

var Page = createReactClass({
	displayName: 'Page',
	propTypes: {
		children: PropTypes.node,
		label: PropTypes.string,
		onSelect: PropTypes.func,
		page: PropTypes.number,
		selected: PropTypes.bool
	},
	onSelect: function onSelect() {
		this.props.onSelect(this.props.page);
	},
	render: function render() {
		var _props = this.props;
		var children = _props.children;
		var selected = _props.selected;

		var className = classNames('Pagination__list__item', {
			'is-selected': selected
		});
		return React.createElement(
			'button',
			{ className: className, onClick: this.onSelect },
			children
		);
	}
});

function range(props) {
	var currentPage = props.currentPage;
	var pageSize = props.pageSize;
	var total = props.total;

	if (!total) {
		return {};
	} else {
		var start = pageSize * (currentPage - 1) + 1;
		var end = Math.min(start + pageSize - 1, total);
		return { start: start, end: end };
	}
}

exports['default'] = createReactClass({
	displayName: 'Pagination',
	propTypes: {
		className: PropTypes.string,
		currentPage: PropTypes.number.isRequired,
		label: PropTypes.func,
		limit: PropTypes.number,
		onPageSelect: PropTypes.func,
		pageSize: PropTypes.number.isRequired,
		plural: PropTypes.string,
		singular: PropTypes.string,
		style: PropTypes.object,
		total: PropTypes.number.isRequired
	},
	renderCount: function renderCount() {
		var count = '';
		var _props2 = this.props;
		var currentPage = _props2.currentPage;
		var pageSize = _props2.pageSize;
		var plural = _props2.plural;
		var singular = _props2.singular;
		var total = _props2.total;
		var label = _props2.label;

		if (typeof label === 'function') {
			var params = _extends(range(this.props), { currentPage: currentPage, pageSize: pageSize, total: total });
			count = label(params);
		} else {
			if (!total) {
				count = 'No ' + (plural || 'records');
			} else if (total > pageSize) {
				var _range = range(this.props);

				var start = _range.start;
				var end = _range.end;

				count = 'Showing ' + start + ' to ' + end + ' of ' + total;
			} else {
				count = 'Showing ' + total;
				if (total > 1 && plural) {
					count += ' ' + plural;
				} else if (total === 1 && singular) {
					count += ' ' + singular;
				}
			}
		}
		return React.createElement(
			'div',
			{ className: 'Pagination__count' },
			count
		);
	},
	onPageSelect: function onPageSelect(page) {
		if (this.props.onPageSelect) {
			this.props.onPageSelect(page);
		}
	},
	renderPages: function renderPages() {
		if (this.props.total <= this.props.pageSize) return null;

		var pages = [];
		var _props3 = this.props;
		var currentPage = _props3.currentPage;
		var pageSize = _props3.pageSize;
		var total = _props3.total;
		var limit = _props3.limit;

		var totalPages = Math.ceil(total / pageSize);
		var minPage = 1;
		var maxPage = totalPages;

		if (limit && limit < totalPages) {
			var rightLimit = Math.floor(limit / 2);
			var leftLimit = rightLimit + limit % 2 - 1;
			minPage = currentPage - leftLimit;
			maxPage = currentPage + rightLimit;

			if (minPage < 1) {
				maxPage = limit;
				minPage = 1;
			}
			if (maxPage > totalPages) {
				minPage = totalPages - limit + 1;
				maxPage = totalPages;
			}
		}
		if (minPage > 1) {
			pages.push(React.createElement(
				Page,
				{ key: 'page_start', onSelect: this.onPageSelect, page: 1 },
				'...'
			));
		}
		for (var page = minPage; page <= maxPage; page++) {
			var selected = page === currentPage;
			/* eslint-disable no-loop-func */
			pages.push(React.createElement(
				Page,
				{ key: 'page_' + page, selected: selected, onSelect: this.onPageSelect, page: page },
				page
			));
			/* eslint-enable */
		}
		if (maxPage < totalPages) {
			pages.push(React.createElement(
				Page,
				{ key: 'page_end', onSelect: this.onPageSelect, page: totalPages },
				'...'
			));
		}
		return React.createElement(
			'div',
			{ className: 'Pagination__list' },
			pages
		);
	},
	render: function render() {
		var className = classNames('Pagination', this.props.className);
		return React.createElement(
			'div',
			{ className: className, style: this.props.style },
			this.renderCount(),
			this.renderPages()
		);
	}
});
module.exports = exports['default'];