import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
	{ files: ["**/*.{js,mjs,cjs,ts}"] },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	{ ignores: ["**/public"] },
	{
		rules: {
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					args: "all",
					argsIgnorePattern: "^_",
				},
			],
			"@typescript-eslint/prefer-as-const": "error",
			"@typescript-eslint/no-explicit-any": "error",
			"no-console": "error",
		},
	},
];
