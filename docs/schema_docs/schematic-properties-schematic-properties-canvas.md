# Untitled object in Wire Harness Schematic File Schema

```txt
undefined#/properties/schematic/properties/canvas
```

Describes the virtual drawing space used in the schematic editor.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [schematic.schema.json\*](schematic.schema.json "open original schema") |

## canvas Type

`object` ([Details](schematic-properties-schematic-properties-canvas.md))

# canvas Properties

| Property                 | Type      | Required | Nullable       | Defined by                                                                                                                                                                       |
| :----------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [grid\_size](#grid_size) | `integer` | Required | cannot be null | [Wire Harness Schematic File](schematic-properties-schematic-properties-canvas-properties-grid_size.md "undefined#/properties/schematic/properties/canvas/properties/grid_size") |
| [units](#units)          | `string`  | Required | cannot be null | [Wire Harness Schematic File](schematic-properties-schematic-properties-canvas-properties-units.md "undefined#/properties/schematic/properties/canvas/properties/units")         |

## grid\_size

Spacing for the editor's grid snapping, in selected units.

`grid_size`

* is required

* Type: `integer`

* cannot be null

* defined in: [Wire Harness Schematic File](schematic-properties-schematic-properties-canvas-properties-grid_size.md "undefined#/properties/schematic/properties/canvas/properties/grid_size")

### grid\_size Type

`integer`

### grid\_size Constraints

**minimum**: the value of this number must greater than or equal to: `1`

## units

Measurement units used throughout the schematic ('mm' or 'in').

`units`

* is required

* Type: `string`

* cannot be null

* defined in: [Wire Harness Schematic File](schematic-properties-schematic-properties-canvas-properties-units.md "undefined#/properties/schematic/properties/canvas/properties/units")

### units Type

`string`

### units Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value  | Explanation |
| :----- | :---------- |
| `"mm"` |             |
| `"in"` |             |
