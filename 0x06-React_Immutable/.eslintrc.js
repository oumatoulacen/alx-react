// simple config for es6
module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
    },
    extends: 'airbnb-base',
    rules: {
        'no-console': 0,
        'no-unused-vars': 1,
    },
    env: {
        node: true,
        es6: true,
    },
};
