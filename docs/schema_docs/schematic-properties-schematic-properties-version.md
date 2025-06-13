# Untitled string in Wire Harness Schematic File Schema

```txt
undefined#/properties/schematic/properties/version
```

Semantic version string (e.g., 1.0.0)

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                              |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [schematic.schema.json\*](schematic.schema.json "open original schema") |

## version Type

`string`

## version Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^\d+\.\d+\.\d+$
```

[try pattern](https://regexr.com/?expression=%5E%5Cd%2B%5C.%5Cd%2B%5C.%5Cd%2B%24 "try regular expression with regexr.com")
