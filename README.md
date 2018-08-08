<p align="center" id="top">
	<a href="https://www.npmjs.com/package/init-editorconfig"><img src="https://cdn.abraham.gq/projects/init-editorconfig/logo.png"></a>
	<br>
	<br>
	<br>
	<a href="https://www.npmjs.com/package/init-editorconfig"><b>init-editorconfig</b></a>
	: Complex generator of <i>.editorconfig</i> 🐭
</p>

<p align="center">
	<!-- Travis CI -->
	<a href="https://travis-ci.org/abranhe/init-editorconfig"><img src="https://img.shields.io/travis/abranhe/init-editorconfig.svg?logo=travis" /></a>
	<!-- LICENSE -->
	<a href="https://github.com/abranhe/init-editorconfig/blob/master/LICENSE"><img src="https://img.shields.io/github/license/abranhe/init-editorconfig.svg" /></a>
	<!-- NPM Version -->
	<a href="https://www.npmjs.com/package/init-editorconfig"><img src="https://img.shields.io/npm/v/init-editorconfig.svg" /></a>
	<!-- @abranhe -->
	<a href="https://github.com/abranhe"><img src="https://abranhe.com/badge.svg"></a>
	<!-- Cash me -->
	<a href="https://cash.me/$abranhe"><img src="https://cdn.abraham.gq/badges/cash-me.svg"></a>
	<!-- Patreon -->
	<a href="https://www.patreon.com/abranhe"><img src="https://cdn.abraham.gq/badges/patreon.svg" /></a>
</p>

# See

- [Overview](#overview)
- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Related](#related)
- [Team](#team)
- [License](#license)

# Overview

**EditorConfig** helps developers define and maintain consistent coding styles between different editors and IDEs. The **EditorConfig** project consists of a file format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to defined styles. **EditorConfig** files are easily readable and they work nicely with version control systems.

Read more about at [EditorConfig.org](https://editorconfig.org/)

# Universal Properties

### `indent_style`

Indentation Style

The values are case insensitive. They will be lowercased by the core library.

**Possible Values**

- `tab`
- `space`


### `indent_size`

Indentation Size (in single-spaced characters)

The values are case insensitive. They will be lowercased by the core library.

**Possible Values**

- an integer
- `tab`

If `indent_size` equals to `tab`, the `indent_size` will be set to the tab size, which should be `tab_width` if `tab_width` is specified, or the tab size set by editor if `tab_width` is not specified.


### `tab_width`

Width of a single tabstop character

**Possible Values**

- a positive integer (defaults `indent_size` when `indent_size` is a number)

### `end_of_line`

Line ending file format (Unix, DOS, Mac)

**Possible Values**

- `lf`
- `crlf`
- `cr`

### `charset`

File character encoding

The values are case insensitive. They will be lowercased by the core library.

**Possible Values**

- `latin1`
- `utf-8`
- `utf-16be`
- `utf-16le`
- `utf-8-bom`

### `trim_trailing_whitespace`

Denotes whether whitespace is allowed at the end of lines

The values are case insensitive. They will be lowercased by the core library.

**Possible Values**

- `true`
- `false`

### `insert_final_newline`

Denotes whether file should end with a newline

The values are case insensitive. They will be lowercased by the core library.

**Possible Values**

- `true`
- `false`

### `max_line_length`

Forces hard line wrapping after the amount of characters specified. `off` to
turn off this feature (use the editor settings).

**Possible Values**

- positive integers
- `off`


# Install

```
$ npm install init-editorconfig
```

# Usage

```js
const editorconfig = require('init-editorconfig');

editorconfig.root(true);

editorconfig.also();
editorconfig.match('*');
editorconfig.property('end_of_line', 'lf');
editorconfig.property('insert_final_newline', 'true');

editorconfig.also();
editorconfig.match('*.{js,py}');
editorconfig.property('charset', 'utf-8');

editorconfig.also();
editorconfig.match('*.py');
editorconfig.property('indent_style', 'space');
editorconfig.property('indent_size', '4');

editorconfig.also();
editorconfig.match('Makefile');
editorconfig.property('indent_style', 'tab');

editorconfig.also();
editorconfig.match('[lib/**.js]');
editorconfig.property('indent_style', 'space');
editorconfig.property('indent_size', '2');

editorconfig.also();
editorconfig.match('{package.json,.travis.yml}');
editorconfig.property('indent_style', 'space');
editorconfig.property('indent_size', '2');
```

Result in `.editorconfig`:

```
# EditorConfig
# https://EditorConfig.org
#
# Build with init-editorconfig
# https://github.com/abranhe/init-editorconfig

root = true

[*]
end_of_line = lf
insert_final_newline = true

[*.{js,py}]
charset = utf-8

[*.py]
indent_style = space
indent_size = 4

[Makefile]
indent_style = tab

[[lib/**.js]]
indent_style = space
indent_size = 2

[{package.json,.travis.yml}]
indent_style = space
indent_size = 2
```

# API

**root(bool)**

> Special property that should be specified at the top of the file outside of any sections. Set to true to stop .editorconfig files search on current file.

**also()**

> Add some spaces to include other Properties

**match(WildcardPatterns)**

> Set special characters to be recognized for EditorConfig

**property(property, value)**

> Create a new property for EditorConfig

# Related

-  [init-gitignore](https://github.com/abranhe/init-gitignore): Because making git ignore files should be easier.
-  [init-pkg-json](https://github.com/abranhe/init-pkg-json): 📦 Complex generator of Package.json.
-  [init-pkg-json-cli](https://github.com/abranhe/init-pkg-json-cli): CLI for package.json generator 📦 .
-  [init-gitignore-cli](https://github.com/abranhe/init-gitignore-cli): CLI for init-gitignore
- [init-editorconfig-cli](https://github.com/abranhe/init-editorconfig-cli):  CLI for this module 🐭

# Team

|[![Carlos Abraham Logo](https://avatars3.githubusercontent.com/u/21347264?s=50&v=4)](https://19cah.com)|
| :-: |
| [Carlos Abraham](https://github.com/abranhe) |

# License

[MIT](https://github.com/abranhe/init-editorconfig/blob/master/LICENSE) License © [Carlos Abraham](https://github.com/abranhe/)

<p align="center">
	<a href="#top"><img src="https://cdn.abraham.gq/projects/init-editorconfig/logo.png" width="50"> top ↑</a>
</p>
