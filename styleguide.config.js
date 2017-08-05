'use strict';

const path = require('path');

module.exports = {
	require: [
		path.join(__dirname, 'src/index.css'),
	],
	sections: [
		{
			name: 'Introduction',
			content: 'src/documentation/introduction.md'
		},
		{
			name: 'Documentation',
			sections: [
				{
					name: 'Installation',
					content: 'src/documentation/installation.md'
				},
				{
					name: 'Configuration',
					content: 'src/documentation/configuration.md'
				}
			]
		},
		{
			name: 'UI Components',
			content: 'src/documentation/ui.md',
			components: 'src/components/ui/**/*/*.js'
		}
	],

	template: 'src/documentation/styleguide.html',
	theme: {
		fontFamily: {
			base: '"Ubuntu", sans-serif',
		},
	},
	showUsage: false,
};
