module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    rules: {
        //support missing 'import React' error
        "react/react-in-jsx-scope": "off",
        //allow jsx syntax in js file
        "react/jsx-filename-extension": [1, {extensions: [".ts", ".tsx"]}],
    }
}
