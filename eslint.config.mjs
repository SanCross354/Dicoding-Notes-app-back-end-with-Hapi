const globals = import("globals");

const path = import("path");
const { fileURLToPath } = import("url");
const { FlatCompat } = import("@eslint/eslintrc");
const pluginJs = import("@eslint/js");

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended });

module.exports = [
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.node } },
  ...compat.extends("airbnb-base"),
];
