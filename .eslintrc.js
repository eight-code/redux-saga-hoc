module.exports = {
  "env": {
    "browser": true
  },
  "extends": [
    "airbnb",
  ],
  "rules": {
    "import/no-extraneous-dependencies": [
      "off"
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "no-underscore-dangle": [
      0
    ],
    "react/jsx-indent": [
      "error",
      2
    ],
    "react/jsx-indent-props": [
      "error",
      2
    ],
    "react/jsx-first-prop-new-line": [
      "error",
      "multiline"
    ],
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "jsx-quotes": [
      2,
      "prefer-single"
    ],
    "max-len": [
      "error",
      110
    ],
    "react/prefer-stateless-function": [
      1
    ],
    "react/no-unused-prop-types": [
      "off",
      {
        "skipShapeProps": true
      }
    ]
  }
};



