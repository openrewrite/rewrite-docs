---
description: A brief explanation of a Quark.
---

# Quarks

A `Quark` in OpenRewrite serves as a representation of a file that cannot be parsed, either due to its large size or because it is a type we don't have a parser for (such as images or HTML files). Instead of disregarding such files, we capture their path and relevant metadata (but **not** the contents of these files). This allows you to move or delete these files in recipes.

If you are running a recipe that is not specifically looking for Quarks, you should never see a Quark.