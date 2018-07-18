const React = require('react');
const blacklist = require('blacklist');
const classNames = require('classnames');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');

const FormField = require('./FormField');
const Spinner = require('./Spinner');

const ICON_MAP = require('../Octicons').map;
const ICON_KEYS = require('../Octicons').keys;
const COLOR_VARIANTS = ['danger', 'default', 'primary', 'success', 'warning'];

export default createReactClass({
	displayName: 'FormIconField',
	propTypes: {
		className: PropTypes.string,
		iconColor: PropTypes.oneOf(COLOR_VARIANTS),
		iconFill: PropTypes.oneOf(COLOR_VARIANTS),
		iconIsLoading: PropTypes.bool,
		iconKey: PropTypes.oneOf(ICON_KEYS).isRequired,
		iconPosition: PropTypes.oneOf(['left', 'right']),
	},
	getDefaultProps () {
		return {
			iconPosition: 'left',
		};
	},
	render () {
		// props
		var props = blacklist(this.props, 'children', 'iconPosition', 'iconKey', 'iconFill', 'iconColor', 'iconIsLoading');

		// classes
		var fieldClass = classNames('IconField', {
			'has-fill-icon': this.props.iconFill,
			'is-loading-icon': this.props.iconIsLoading,
		},
			(this.props.iconFill ? ('field-context-' + this.props.iconFill) : null),
			(this.props.iconColor ? ('field-context-' + this.props.iconColor) : null),
			this.props.iconPosition);

		var iconClass = classNames(
			'IconField__icon',
			(this.props.iconFill ? 'IconField__icon-fill--' + this.props.iconFill : null),
			(this.props.iconColor ? 'IconField__icon-color--' + this.props.iconColor : null),
			ICON_MAP[this.props.iconKey].className
		);

		var icon = this.props.iconIsLoading ? (
			<Spinner size="sm" />
		) : (
			<span className={iconClass} />
		);

		const children = React.Children.toArray(his.props.children)
		const firstChild = children[0]
		const restChildren = children.slice(1)

		return (
			<FormField {...props}>
				<div className={fieldClass}>
					<div className={fieldClass}>
						{ firstChild }
						{ icon }
					</div>
					{ restChildren }
				</div>
			</FormField>
		);
	},
});
