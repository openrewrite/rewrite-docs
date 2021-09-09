# Dependency Version Selectors

Dependency management recipes, such as [Upgrade Maven Dependency Version](recipes/maven/upgradedependencyversion.md) or [Add Maven Dependency](recipes/maven/adddependency.md), accept version numbers as parameters. If you know the exact version number up front you can configure such recipes with it. But the desired version number isn't always knowable up front, or no single version number may be adequate when what is desired can't be known in advance, or might change over time. Dependency management recipes support a variety of version selectors to help express these more complex constraints. These patterns assume that version numbers generally conform to [Semantic Versioning](https://semver.org/). 

{% hint style="success" %}
Maven dependency management recipes use the same artifact repositories your maven build is configured to use.
{% endhint %}

## Supported Dependency Version Selectors 

### Latest Release Version

The version selector `latest.release` can be specified to mean the most recent release \(non-snapshot\) version that can be found.

| Version Selector | Available Versions | Selected Version |
| :--- | :--- | :--- |
| `latest.release` | 1.0.0, 2.0.0, 3.0.0-SNAPSHOT | 2.0.0 |

### Hyphenated Range 

The selector `X.Y.Z - A.B.C` specifies that versions between `X.Y.Z` and `A.B.C` can be selected. This is inclusive of `X.Y.Z`and `A.B.C` themselves. If multiple versions within the range are found, the latest is used. If not all digits are specified, then "0" is assumed for any omitted digits.

| Version Selector | Available Versions | Selected Version |
| :--- | :--- | :--- |
| `1.0.0-1.5.0` | 1.0.0, 1.5.0, 1.5.1 | 1.5.0 |
| `1-1.5` | 1.0.0, 1.5.0, 1.5.1 | 1.5.0 |

### XRange

Any of `X`, `x`, or `*` are interpreted as a wildcard and may be used instead of numeric values in the \[major, minor, patch\] tuple.

| Version Selector | Available Versions | Selected Version |
| :--- | :--- | :--- |
| `1.x.0` | 1.0.0, 1.1.0, 1.1.1, 2.0.0 | 1.1.0 |
| `1.x.x` | 1.0.0, 1.1.0, 1.1.1, 2.0.0 | 1.1.1 |
| `x.x.x` | 1.0.0, 1.1.0, 1.1.1, 2.0.0 | 2.0.0 |

### Tilde Range

Prefacing a version number with `~` invokes tilde range semantics. These allow patch-level changes if a minor version is specified in the selector. These allow minor-level changes if only the major version is specified. 

| Version Selector | Available Versions | Selected Version |
| :--- | :--- | :--- |
| `~1.0.0` | 1.0.0, 1.0.1, 1.1.0, 1.1.1, 2.0.0 | 1.0.1 |
| `~1.0` | 1.0.0, 1.0.1, 1.1.0, 1.1.1, 2.0.0 | 1.0.1 |
| `~1` | 1.0.0, 1.0.1, 1.1.0, 1.1.1, 2.0.0 | 1.1.1 |

### Caret Range

Prefacing a version number with `^` invokes caret range semantics. Selects the latest available version with the left-most, non-zero element in the \[major, minor, patch\] tuple. 

| Version Selector | Available Versions | Selected Version |
| :--- | :--- | :--- |
| `^1.0.0` | 1.0.0, 1.1.0, 1.1.1, 1.2.0, 2.0.0 | 1.2.0 |
| `^1.1.0` | 1.0.0, 1.1.0, 1.1.1, 1.2.0, 2.0.0 | 1.1.1 |
| `^0.2.0` | 0.1.0, 0.2.0, 0.2.1, 0.3.0 | `0.2.1` |

### Exact Version

Any version number which does not fit into one of the above categories is treated as an exact, literal version number.

| Version Selector | Available Versions | Selected Version |
| :--- | :--- | :--- |
| 1.0.0 | 0.9.0, 1.0.0, 1.1.1 | 1.1.1 |

## Version Patterns

Some libraries are published with variants differentiated by version number. For example, "1.0.0-jre" and "1.0.0-android". To differentiate between variants of these libraries dependency management recipes accept a "versionPattern" parameter that can be filled in accordingly. This parameter is an exact string and has no wildcard behavior. 

| Version Selector | Version Pattern | Available Versions | Selected Version |
| :--- | :--- | :--- | :--- |
| 1.0.0 | jre | 1.0.0-jre, 1.0.0-android | 1.0.0-jre |

