/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');
module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:storybook/recommended',
    'prettier',
    'plugin:tailwindcss/recommended',
  ],
  plugins: ['tailwindcss'],
  settings: {
    tailwindcss: {
      callees: ['cn'],
      config: 'tailwind.config.cjs',
    },
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
};
