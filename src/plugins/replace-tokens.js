import { visit } from "unist-util-visit";

function remarkTokenReplacer(options) {
  const replacements = options.replacements || {};

  const replaceTokens = (node) => {
    // test to see if any of the replacement tokens are in the node
    const hasToken = Object.keys(replacements).some((token) =>
      node.value.includes(token)
    );

    if (!hasToken) {
      return;
    } else {
      Object.entries(replacements).forEach(([token, value]) => {
        if (!node.value.includes(token)) {
          return;
        }
        const oldValue = String(node.value);
        node.value = node.value.replaceAll(new RegExp(token, "gs"), value);
      });
    }
  };

  return (tree) => {
    // print the tree to see what it looks like
    visit(tree, "text", replaceTokens);
    visit(tree, "code", replaceTokens);
  };
}

export default remarkTokenReplacer;
