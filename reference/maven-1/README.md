# Maven

Rewrite supports parsing, searching, and refactoring [Maven](https://maven.apache.org/) POMs. Rewrite emulates Maven's dependency resolution mechanism so the full, resolved dependency graph is available during searching and refactoring. The Rewrite Maven abstract syntax tree is layered on top of the Rewrite XML abstract syntax tree, so all XML search ard refactoring operations can also be used on Maven Poms.

