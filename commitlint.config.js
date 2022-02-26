module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'scope-case': [2, 'always', 'lower-case'],
        'subject-empty': [2, 'never'],
        'subject-full-stop': [2, 'never', '.'],
        'type-case': [2, 'always', 'lower-case'],
        'type-empty': [2, 'never'],
        'scope-enum': [2, 'always'],
    },
};
