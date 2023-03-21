const rule = require('../../../lib/rules/no-ident-sort'),
  RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester({
  parser: require('@typescript-eslint/parser'),
  parserOptions: {
    ecmaVersion: 6,
  },
});

ruleTester.run('no-ident-sort', rule, {
  valid: [
    {
      code: 'const x = [1,2,3]; x.sort((a, b) => a - b);',
    },
    {
      code: 'class X { constructor() { super.sort() } }',
    },
  ],

  invalid: [
    {
      code: 'const x = [1,2,3]; x.sort();',
      errors: [{ messageId: 'no-ident-sort' }],
    },
  ],
});
