const rule = require('../../../lib/rules/no-inline-sort'),
  RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester({
  parser: require('@typescript-eslint/parser'),
  parserOptions: {
    ecmaVersion: 6,
  },
});

ruleTester.run('no-inline-sort', rule, {
  valid: [
    {
      code: '[1,2,3].sort((a, b) => a - b)',
    },
  ],

  invalid: [
    {
      code: '[1,2,3].sort()',
      errors: [{ messageId: 'no-inline-sort' }],
    },
  ],
});
