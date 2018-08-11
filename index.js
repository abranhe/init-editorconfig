'use strict';
const fs = require('fs');

const editorconfig = [];

editorconfig.push(`# EditorConfig
# https://EditorConfig.org
#
# Build with init-editorconfig
# https://github.com/abranhe/init-editorconfig
`);

const createEditorConfig = () => {
	fs.writeFile('.editorconfig', editorconfig.join(''), err => {
		if (err) {
			console.log(err);
		}
	});
};

exports.match = matching => {
	editorconfig.push('[');
	editorconfig.push(matching);
	editorconfig.push(']');
	createEditorConfig();
};

exports.property = Object.prototype.prop = (property, val) => {
	editorconfig.push('\n' + property + ' = ' + val);
	createEditorConfig();
};

Object.prototype.also = () => {
	editorconfig.push('\n\n');
	createEditorConfig();
};

exports.root = bool => {
	editorconfig.prop('root', bool);
	createEditorConfig();
};
