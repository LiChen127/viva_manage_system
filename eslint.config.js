import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,vue}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  { files: ["**/*.vue"], languageOptions: { parserOptions: { parser: tseslint.parser } } },
  {
    rules: {
      // 分号
      "semi": "warn",
      // 禁止使用 console
      "no-console": "warn",
      // 禁止使用 debugger
      "no-debugger": "warn",
      // 禁止未使用的变量
      "no-unused-vars": "warn",
      // 禁止空语句
      "no-empty": "warn",
      // 禁止使用 var
      "no-var": "warn",
      // 单行js代码长度
      "max-len": ["warn", { code: 100 }],
      // 缩进
      "indent": ["warn", 2],
      // css缩进
      "css-indent-style": ["warn", 2],
      // html缩进
      "html-indent": ["warn", 2],
    },
  },
];

