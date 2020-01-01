# [`eslint`](https://github.com/hchiam/learning-eslint-google) and [`jest`](https://github.com/hchiam/learning-jest)

Once:

```bash
npm install
```

Then:

```bash
npm run lint
npm run test
```

or for continuous watch and live re-run of [linting](https://github.com/hchiam/eslint-and-jest/blob/master/package.json#L8) and [unit tests](https://github.com/hchiam/eslint-and-jest/blob/master/package.json#L7):

```bash
nodemon -w index.js -x 'npm run lint; npm run test; node index.js;'
```

You can also auto-fix as many linter errors as possible:

```bash
eslint --fix index.js
```

## Reminder of installations

```bash
touch package.json
npm install --save-dev eslint eslint-config-google
./node_modules/.bin/eslint --init
npm install --save-dev jest-cli
npm install -g nodemon
```
