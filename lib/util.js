/**
 * @param {import('@types/estree').Expression | import('@types/estree').Super} propertyNode
 */
function isSortMethod(propertyNode) {
  if (propertyNode.type === 'Super') {
    return false;
  }

  return propertyNode.type === 'Identifier' && propertyNode.name === 'sort';
}

module.exports = { isSortMethod };
