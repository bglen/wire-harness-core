# Untitled object in Wire Harness Schematic File Schema

```txt
undefined#/properties/schematic
```

Basic metadata about the schematic

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [schematic.schema.json\*](schematic.schema.json "open original schema") |

## schematic Type

`object` ([Details](schematic-properties-schematic.md))

# schematic Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                       |
| :-------------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)               | `string` | Required | cannot be null | [Wire Harness Schematic File](schematic-properties-schematic-properties-name.md "undefined#/properties/schematic/properties/name")               |
| [version](#version)         | `string` | Required | cannot be null | [Wire Harness Schematic File](schematic-properties-schematic-properties-version.md "undefined#/properties/schematic/properties/version")         |
| [created](#created)         | `string` | Required | cannot be null | [Wire Harness Schematic File](schematic-properties-schematic-properties-created.md "undefined#/properties/schematic/properties/created")         |
| [author](#author)           | `string` | Optional | cannot be null | [Wire Harness Schematic File](schematic-properties-schematic-properties-author.md "undefined#/properties/schematic/properties/author")           |
| [description](#description) | `string` | Optional | cannot be null | [Wire Harness Schematic File](schematic-properties-schematic-properties-description.md "undefined#/properties/schematic/properties/description") |
| [canvas](#canvas)           | `object` | Required | cannot be null | [Wire Harness Schematic File](schematic-properties-schematic-properties-canvas.md "undefined#/properties/schematic/properties/canvas")           |

## name

Name of the schematic

`name`

* is required

* Type: `string`

* cannot be null

* defined in: [Wire Harness Schematic File](schematic-properties-schematic-properties-name.md "undefined#/properties/schematic/properties/name")

### name Type

`string`

## version

Semantic version string (e.g., 1.0.0)

`version`

* is required

* Type: `string`

* cannot be null

* defined in: [Wire Harness Schematic File](schematic-properties-schematic-properties-version.md "undefined#/properties/schematic/properties/version")

### version Type

`string`

### version Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^\d+\.\d+\.\d+$
```

[try pattern](https://regexr.com/?expression=%5E%5Cd%2B%5C.%5Cd%2B%5C.%5Cd%2B%24 "try regular expression with regexr.com")

## created

Date the project was created (ISO 8601)

`created`

* is required

* Type: `string`

* cannot be null

* defined in: [Wire Harness Schematic File](schematic-properties-schematic-properties-created.md "undefined#/properties/schematic/properties/created")

### created Type

`string`

### created Constraints

**date**: the string must be a date string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## author

Name of the author or designer

`author`

* is optional

* Type: `string`

* cannot be null

* defined in: [Wire Harness Schematic File](schematic-properties-schematic-properties-author.md "undefined#/properties/schematic/properties/author")

### author Type

`string`

## description

Short text description of the schematic

`description`

* is optional

* Type: `string`

* cannot be null

* defined in: [Wire Harness Schematic File](schematic-properties-schematic-properties-description.md "undefined#/properties/schematic/properties/description")

### description Type

`string`

## canvas

Describes the virtual drawing space used in the schematic editor.

`canvas`

* is required

* Type: `object` ([Details](schematic-properties-schematic-properties-canvas.md))

* cannot be null

* defined in: [Wire Harness Schematic File](schematic-properties-schematic-properties-canvas.md "undefined#/properties/schematic/properties/canvas")

### canvas Type

`object` ([Details](schematic-properties-schematic-properties-canvas.md))
