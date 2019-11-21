# Learn ESLint with [Linter Rules](https://github.com/google/eslint-config-google) for the [Google JS Style Guide](https://google.github.io/styleguide/jsguide.html)

## To Use this Repo as a Template

```bash
npm install
```

Now you can see your .js code get auto-annotated with underlines in your code editor.

You can now also run a check in command line:

```bash
npm run lint
```

## Secret Sauce (When Starting from Scratch)

```bash
npm install --save-dev eslint eslint-config-google
```

```bash
./node_modules/.bin/eslint --init
```

(Follow instructions.)

You should see .eslintrc.js and this inside it:

```js
  'extends': [
    'google',
  ],
```

## Bonus Special: Command Line Use

(Instead of only relying on editor.)

package.json

```json
  "scripts": {
    ...
    "lint": "eslint index.js" /* "eslint ./" if you want it for all .js files */
  },
```

Then in command line:

```bash
npm run lint
```

You should see a message that looks something like this:

```bash
# ...
/.../test-google-linter/index.js
  7:25  error  Missing semicolon  semi
# (and a bunch of other messages)
```

## Bonus Bonus: Auto-fix Problems

`npm run lint` will tell you what problems there are, but `eslint --fix <filename.js>` will perform fixes that can be automatically done on `index.js`:

```bash
eslint --fix index.js
```

## Yet Another Bonus: Auto-Run Stuff Upon File Edits

### If you install `nodemon`, you can do these cool things:

`nodemon -x 'npm run lint'` will auto-run the linter checks and print the results to the CLI every time you save index.js

`nodemon index.js` will auto-run the file every time you save index.js

`nodemon -x 'npm run lint; node index.js'` will do both of the above.

`nodemon -w index.js -x 'npm run lint; plato -r -d report index.js; node index.js; open report/index.html'` will auto-rerun all of the above, but also give you a report that includes [MI score](https://github.com/hchiam/learning-js/blob/master/README.md#get-code-maintainability-index-mi-score) (after you've run `npm install -g plato` once).

### To install `nodemon`, do this:

```bash
npm i -g nodemon # i = install; -g = globally
```

or

```bash
npm install --save-dev nodemon # <- this saves into dev dependencies
```

# References:

https://www.youtube.com/watch?v=qhuFviJn-es

https://eslint.org/docs/user-guide/command-line-interface
