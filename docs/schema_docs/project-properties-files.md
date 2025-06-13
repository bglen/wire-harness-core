# Untitled object in Wire Harness Project File Schema

```txt
undefined#/properties/files
```

References to data files used by the app

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [project.schema.json\*](project.schema.json "open original schema") |

## files Type

`object` ([Details](project-properties-files.md))

# files Properties

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                       |
| :---------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| [schematic](#schematic) | `string` | Required | cannot be null | [Wire Harness Project File](project-properties-files-properties-schematic.md "undefined#/properties/files/properties/schematic") |
| [layout](#layout)       | `string` | Optional | cannot be null | [Wire Harness Project File](project-properties-files-properties-layout.md "undefined#/properties/files/properties/layout")       |
| [bom](#bom)             | `string` | Optional | cannot be null | [Wire Harness Project File](project-properties-files-properties-bom.md "undefined#/properties/files/properties/bom")             |

## schematic

Path to the schematic file (.wh\_sch or .json)

`schematic`

* is required

* Type: `string`

* cannot be null

* defined in: [Wire Harness Project File](project-properties-files-properties-schematic.md "undefined#/properties/files/properties/schematic")

### schematic Type

`string`

## layout

Optional 2D layout file

`layout`

* is optional

* Type: `string`

* cannot be null

* defined in: [Wire Harness Project File](project-properties-files-properties-layout.md "undefined#/properties/files/properties/layout")

### layout Type

`string`

## bom

Optional Bill of Materials file (e.g., CSV)

`bom`

* is optional

* Type: `string`

* cannot be null

* defined in: [Wire Harness Project File](project-properties-files-properties-bom.md "undefined#/properties/files/properties/bom")

### bom Type

`string`
