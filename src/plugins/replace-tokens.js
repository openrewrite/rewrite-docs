import parse from "remark-parse";
import { unified } from "unified";
import { visit } from "unist-util-visit";

function remarkTokenReplacer(options) {
  const replacements = options.replacements || {};

  const replaceTokens = (node, index, parent) => {
    // Test to see if any of the replacement tokens are in the node
    const hasToken = Object.keys(replacements).some(
      (token) => node.value && node.value.includes(token)
    );

    if (!hasToken) return

    Object.entries(replacements).forEach(([token, value]) => {
      if (!node.value.includes(token)) {
        return;
      }

      // If the `token` ends with `_LINK`, then replace this node with a link node
      if (token.endsWith("_LINK")) {
        // Parse the replacement value, assumed to be markdown link
        const parsedMarkdown = unified().use(parse).parse(value);
        let replacementLink;

        visit(parsedMarkdown, "link", (node) => {
          replacementLink = node;
        });

        // If the entire text node is only the token, replace the entire node
        // Else if it is part of a larger text node, replace just the token
        if (node.value === token) {
          parent.children.splice(index, 1, replacementLink);
        } else {
          const [before, after] = node.value.split(token);
          const beforeNode = { type: "text", value: before };
          const afterNode = { type: "text", value: after };
          parent.children.splice(
            index,
            1,
            beforeNode,
            replacementLink,
            afterNode
          );
        }
      } else {
        node.value = node.value.replaceAll(new RegExp(token, "gs"), value);
      }
    });
  };

  // Used for replacing variables inside of links such as:
  // https://someplace.com/MY_VAR/something
  const replaceLink = (node) => {
    // Test to see if any of the replacement tokens are in the node
    const hasToken = Object.keys(replacements).some(
      (token) => node.url && node.url.includes(token)
    );

    if (!hasToken) return;

    Object.entries(replacements).forEach(([token, value]) => {
      if (!node.url.includes(token)) {
        return;
      }

      node.url = node.url.replaceAll(new RegExp(token, "gs"), value);
    });
  };

  return (tree) => {
    visit(tree, "text", replaceTokens);
    visit(tree, "code", replaceTokens);
    visit(tree, "inlineCode", replaceTokens);
    visit(tree, "link", replaceLink);
  };
}

export default remarkTokenReplacer;
