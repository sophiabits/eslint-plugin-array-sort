const { isSortMethod } = require('../util');

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Warns on unsafe inline array sorts',
      recommended: true,
      url: null,
    },
    fixable: null,
    schema: [],
    messages: {
      'no-inline-sort': '',
    },
  },

  create(context) {
    return {
      CallExpression(node) {
        if (node.arguments.length > 0) return;

        if (node.callee.object.type === 'ArrayExpression') {
          if (isSortMethod(node.callee.property)) {
            context.report({
              messageId: 'no-inline-sort',
              node,
            });
          }
        }
      },
    };
  },
};
