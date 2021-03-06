# [`eslint`](https://github.com/hchiam/learning-eslint-google) and [`jest`](https://github.com/hchiam/learning-jest)

Just one of the things I'm learning. https://github.com/hchiam/learning

Once:

```bash
npm install
```

Then:

```bash
npm run lint # this runs: eslint *.js
npm run test
```

or for continuous watch and live re-run of [linting](https://github.com/hchiam/eslint-and-jest/blob/master/package.json#L8) and [unit tests](https://github.com/hchiam/eslint-and-jest/blob/master/package.json#L7):

```bash
nodemon -w index.js -x 'npm run fix; npm run lint; npm run test; node index.js;'
```

You can manually auto-fix as many linter errors as possible with `eslint --fix index.js`, or just:

```bash
npm run fix
```

## `yarn` version of the commands

`yarn` (or `yarn install`) and then:

```bash
yarn lint
yarn fix
yarn test
```

```bash
nodemon -w index.js -x 'yarn fix; yarn lint; yarn test; node index.js;'
```

Or just:

```bash
yarn auto-test
```

## Reminder of installations

```bash
touch package.json
npm install --save-dev eslint eslint-config-google
./node_modules/.bin/eslint --init
npm install --save-dev jest-cli
npm install -g nodemon
```
