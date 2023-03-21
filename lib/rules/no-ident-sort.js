const { isSortMethod } = require('../util');

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Warns on unsafe sort calls on an idenifier',
      recommended: false,
      url: null,
    },
    fixable: null,
    schema: [],
    messages: {
      'no-ident-sort': 'TODO',
    },
  },

  create(context) {
    return {
      CallExpression(node) {
        if (node.arguments.length > 0) return;

        if (node.callee.type === 'MemberExpression' && node.callee.object.type !== 'Super') {
          if (isSortMethod(node.callee.property)) {
            context.report({
              messageId: 'no-ident-sort',
              node,
            });
            return;
          }
        }
      },
    };
  },
};
