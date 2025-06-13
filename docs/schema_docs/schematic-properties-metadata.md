# Untitled object in Wire Harness Schematic File Schema

```txt
undefined#/properties/metadata
```

Optional metadata including creation date, author, and schematic notes.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [schematic.schema.json\*](schematic.schema.json "open original schema") |

## metadata Type

`object` ([Details](schematic-properties-metadata.md))

# metadata Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                     |
| :-------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| [created](#created)         | `string` | Optional | cannot be null | [Wire Harness Schematic File](schematic-properties-metadata-properties-created.md "undefined#/properties/metadata/properties/created")         |
| [author](#author)           | `string` | Optional | cannot be null | [Wire Harness Schematic File](schematic-properties-metadata-properties-author.md "undefined#/properties/metadata/properties/author")           |
| [description](#description) | `string` | Optional | cannot be null | [Wire Harness Schematic File](schematic-properties-metadata-properties-description.md "undefined#/properties/metadata/properties/description") |

## created

Date the schematic was created (ISO format).

`created`

* is optional

* Type: `string`

* cannot be null

* defined in: [Wire Harness Schematic File](schematic-properties-metadata-properties-created.md "undefined#/properties/metadata/properties/created")

### created Type

`string`

### created Constraints

**date**: the string must be a date string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## author

Name of the person or organization who authored the schematic.

`author`

* is optional

* Type: `string`

* cannot be null

* defined in: [Wire Harness Schematic File](schematic-properties-metadata-properties-author.md "undefined#/properties/metadata/properties/author")

### author Type

`string`

## description

One-line summary of the schematic’s purpose or context.

`description`

* is optional

* Type: `string`

* cannot be null

* defined in: [Wire Harness Schematic File](schematic-properties-metadata-properties-description.md "undefined#/properties/metadata/properties/description")

### description Type

`string`
