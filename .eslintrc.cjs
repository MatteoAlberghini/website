module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended'
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {parser: '@typescript-eslint/parser'}
		}
	],
	"rules": {
    "semi": ["error", "never"], /// give errors on semicolons
    "max-len": ["error", { "code": 150, "tabWidth": 2, "ignoreComments": true, "ignoreTrailingComments": true }], /// max length of single row
    "linebreak-style": "off", /// linux line endings toggle, remove if dev on linux
    "object-curly-newline": ["error", { /// error on inline objects 
      "ObjectExpression": { "multiline": true, "minProperties": 6 },
      "ObjectPattern": { "multiline": true, "minProperties": 6 },
      "ImportDeclaration": "never",
      "ExportDeclaration": { "multiline": true, "minProperties": 3 }
    }],
		'@typescript-eslint/no-inferrable-types': 0, /// remove not specifying a type when not needed
		'@typescript-eslint/typedef': [
      'error',
      {
        arrayDestructuring: true,
        arrowCallSignature: true,
        arrowParameter: true,
        callSignature: true,
        memberVariableDeclaration: true,
        parameter: true,
        propertyDeclaration: true,
        objectDestructuring: true,
        variableDeclaration: true,
        variableDeclarationIgnoreFunction: true,
      },
    ], /// always define types
	},
}
