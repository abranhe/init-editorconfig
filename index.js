'use strict';
const fs = require('fs');

const buildFile = (data) => {
	fs.writeFile('.editorconfig', data, err => {
		if (err) {
			console.log(err);
		}
	});
};

let file = [`# EditorConfig
# https://EditorConfig.org
#
# Build with init-editorconfig
# https://github.com/abranhe/init-editorconfig
`];

let saveData = (data) => {
	file.push(data);
};

exports.property = (property, val) => {
	saveData(property + ' = ' + val + '\n');
};

exports.match = matching => {
	let m = [];
	m.push('[');
	m.push(matching);
	m.push(']');
	saveData(m.join('').toString() + '\n');
}

exports.root = bool => {
	saveData('root' + ' = ' + bool + '\n');
};

exports.also = () => {
	saveData('\n');
};

exports.build = () => {
	buildFile(file.join(''));
}

exports.getFile = () => {
		return file.join('');
}
