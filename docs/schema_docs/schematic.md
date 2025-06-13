# Wire Harness Schematic File Schema

```txt
undefined
```

Defines all visual and logical components of a wire harness schematic, including canvas settings, object geometry, connectivity, and metadata.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [schematic.schema.json](schematic.schema.json "open original schema") |

## Wire Harness Schematic File Type

`object` ([Wire Harness Schematic File](schematic.md))

# Wire Harness Schematic File Properties

| Property                | Type     | Required | Nullable       | Defined by                                                                                         |
| :---------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------- |
| [schematic](#schematic) | `object` | Required | cannot be null | [Wire Harness Schematic File](schematic-properties-schematic.md "undefined#/properties/schematic") |
| [objects](#objects)     | `array`  | Required | cannot be null | [Wire Harness Schematic File](schematic-properties-objects.md "undefined#/properties/objects")     |
| [nets](#nets)           | `array`  | Optional | cannot be null | [Wire Harness Schematic File](schematic-properties-nets.md "undefined#/properties/nets")           |
| [metadata](#metadata)   | `object` | Optional | cannot be null | [Wire Harness Schematic File](schematic-properties-metadata.md "undefined#/properties/metadata")   |

## schematic

Basic metadata about the schematic

`schematic`

* is required

* Type: `object` ([Details](schematic-properties-schematic.md))

* cannot be null

* defined in: [Wire Harness Schematic File](schematic-properties-schematic.md "undefined#/properties/schematic")

### schematic Type

`object` ([Details](schematic-properties-schematic.md))

## objects

List of all schematic elements including connectors, wires, labels, and symbols.

`objects`

* is required

* Type: `object[]` ([Details](schematic-properties-objects-items.md))

* cannot be null

* defined in: [Wire Harness Schematic File](schematic-properties-objects.md "undefined#/properties/objects")

### objects Type

`object[]` ([Details](schematic-properties-objects-items.md))

## nets

Explicit netlist definition linking pins by net name. Optional if nets are inferred from geometry.

`nets`

* is optional

* Type: `object[]` ([Details](schematic-properties-nets-items.md))

* cannot be null

* defined in: [Wire Harness Schematic File](schematic-properties-nets.md "undefined#/properties/nets")

### nets Type

`object[]` ([Details](schematic-properties-nets-items.md))

## metadata

Optional metadata including creation date, author, and schematic notes.

`metadata`

* is optional

* Type: `object` ([Details](schematic-properties-metadata.md))

* cannot be null

* defined in: [Wire Harness Schematic File](schematic-properties-metadata.md "undefined#/properties/metadata")

### metadata Type

`object` ([Details](schematic-properties-metadata.md))
