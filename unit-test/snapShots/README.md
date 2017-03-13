#React unit test

#Install
```javascript
$ npm install --save-dev jest babel-jest babel-preset-es2015 babel-preset-react react-test-renderer

```
 - Add  test script in file package.json

```javascript
    //package.json
    "test": "./node_modules/jest/bin/jest.js"
```

 - Create file named ".babelrc"

```javascript
    //.babelrc
{
  "presets": ["es2015", "react"]
}
```

#Run
```
$ npm test
 PASS  ./Link.react.test.js
  ✓ Link changes the class when hovered (12ms)

Snapshot Summary
 › 3 snapshots written in 1 test suite.

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   3 added, 3 total
Time:        1.262s
Ran all test suites.

```

Reference:
(https://facebook.github.io/jest/docs/tutorial-react.html)[https://facebook.github.io/jest/docs/tutorial-react.html]
