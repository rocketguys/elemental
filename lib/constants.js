'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var _exports = {};

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

_exports.canUseDOM = canUseDOM;

// breakpoints
_exports.breakpoint = {
	xs: 480,
	sm: 768,
	md: 992,
	lg: 1200
};

// border radii
_exports.borderRadius = {
	xs: 2,
	sm: 4,
	md: 8,
	lg: 16,
	xl: 32
};

// color
_exports.color = {
	appDanger: '#d64242',
	appInfo: '#56cdfc',
	appPrimary: '#1385e5',
	appSuccess: '#34c240',
	appWarning: '#fa9f47',
	brandPrimary: '#31adb8'
};

// spacing
_exports.spacing = {
	xs: 5,
	sm: 10,
	md: 20,
	lg: 40,
	xl: 80
};

// widths
_exports.width = {
	container: 1170,
	gutter: 20
};

// fractions (for col widths)

function perc(n) {
	return n * 100 + '%';
}

function denominators(n) {
	for (var d = 2; d <= 20; d++) {
		if (n < d) {
			_exports.fractions[n + '/' + d] = perc(n / d);
		}
	}
}

_exports.fractions = {
	'1': '100%'
};

for (var numerator = 1; numerator <= 19; numerator++) {
	denominators(numerator);
}

exports.canUseDOM = canUseDOM;
exports['default'] = _exports;