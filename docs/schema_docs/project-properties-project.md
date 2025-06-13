# Untitled object in Wire Harness Project File Schema

```txt
undefined#/properties/project
```

Basic metadata about the project

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [project.schema.json\*](project.schema.json "open original schema") |

## project Type

`object` ([Details](project-properties-project.md))

# project Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                               |
| :-------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)               | `string` | Required | cannot be null | [Wire Harness Project File](project-properties-project-properties-name.md "undefined#/properties/project/properties/name")               |
| [version](#version)         | `string` | Required | cannot be null | [Wire Harness Project File](project-properties-project-properties-version.md "undefined#/properties/project/properties/version")         |
| [created](#created)         | `string` | Required | cannot be null | [Wire Harness Project File](project-properties-project-properties-created.md "undefined#/properties/project/properties/created")         |
| [author](#author)           | `string` | Optional | cannot be null | [Wire Harness Project File](project-properties-project-properties-author.md "undefined#/properties/project/properties/author")           |
| [description](#description) | `string` | Optional | cannot be null | [Wire Harness Project File](project-properties-project-properties-description.md "undefined#/properties/project/properties/description") |

## name

Name of the wire harness project

`name`

* is required

* Type: `string`

* cannot be null

* defined in: [Wire Harness Project File](project-properties-project-properties-name.md "undefined#/properties/project/properties/name")

### name Type

`string`

## version

Semantic version string (e.g., 1.0.0)

`version`

* is required

* Type: `string`

* cannot be null

* defined in: [Wire Harness Project File](project-properties-project-properties-version.md "undefined#/properties/project/properties/version")

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

* defined in: [Wire Harness Project File](project-properties-project-properties-created.md "undefined#/properties/project/properties/created")

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

* defined in: [Wire Harness Project File](project-properties-project-properties-author.md "undefined#/properties/project/properties/author")

### author Type

`string`

## description

Short text description of the project

`description`

* is optional

* Type: `string`

* cannot be null

* defined in: [Wire Harness Project File](project-properties-project-properties-description.md "undefined#/properties/project/properties/description")

### description Type

`string`
