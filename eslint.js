module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'import'],
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/typescript'],
    rules: {
        'import/order': ['error', { alphabetize: { order: 'asc' } }],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
    },
};
