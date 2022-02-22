module.exports = {
    root: true,
    // Specifies the ESLint parser
    parser: '@typescript-eslint/parser',
    parserOptions: {
        // Allows for the parsing of modern ECMAScript features
        ecmaVersion: 2020,
        // Allows for the use of imports
        sourceType: 'module',
        ecmaFeatures: {
            // Allows for the parsing of JSX
            jsx: true,
        },
    },
    settings: {
        react: {
            // Tells eslint-plugin-react to automatically detect the version of React to use
            version: 'detect',
        },
    },
    plugins: ['@typescript-eslint', 'eslint-plugin-import'],
    extends: [
        // default lib for RN
        '@react-native-community',
        'eslint:recommended',
        // Uses the recommended rules from @eslint-plugin-react
        'plugin:react/recommended',
        // Uses the recommended rules from @typescript-eslint/eslint-plugin
        'plugin:@typescript-eslint/recommended',
        // Uses prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'prettier',
        // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
        'plugin:prettier/recommended',
    ],
    rules: {
        '@typescript-eslint/no-inferrable-types': 0,
        '@typescript-eslint/ban-ts-comment': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-explicit-any': 'error',
        'no-shadow': 0,
        // 'import/newline-after-import': ['warn', { count: 1 }],
        'sort-imports': [
            'warn',
            {
                ignoreCase: false,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['all', 'single', 'multiple', 'none'],
                allowSeparatedGroups: true,
            },
        ],
        'import/order': [
            'warn',
            {
                groups: ['builtin', 'external', 'internal', 'sibling', 'index', 'parent', 'unknown', 'type', 'object'],
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'builtin',
                        position: 'before',
                    },
                    {
                        pattern: 'react-native',
                        group: 'builtin',
                    },
                    {
                        pattern: 'react**',
                        group: 'external',
                    },
                    {
                        pattern: '@react**',
                        group: 'external',
                    },
                    {
                        pattern: 'react-native**',
                        group: 'external',
                    },
                    {
                        pattern: '_app/**',
                        group: 'internal',
                        position: 'after',
                    },
                    {
                        pattern: '_hooks/**',
                        group: 'parent',
                        position: 'before',
                    },
                    {
                        pattern: '_constants/**',
                        group: 'object',
                        position: 'before',
                    },
                    {
                        pattern: '_types/**',
                        group: 'type',
                    },
                    {
                        pattern: '_assets/**',
                        group: 'object',
                        position: 'after',
                    },
                ],
                pathGroupsExcludedImportTypes: ['react'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'desc' /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
                    caseInsensitive: true /* ignore case. Options: [true, false] */,
                },
            },
        ],
    },
    globals: {
        __DEV__: true,
    },
};
