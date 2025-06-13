# Untitled object in Wire Harness Schematic File Schema

```txt
undefined#/properties/objects/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [schematic.schema.json\*](schematic.schema.json "open original schema") |

## items Type

`object` ([Details](schematic-properties-objects-items.md))

# items Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                         |
| :-------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)             | `string` | Required | cannot be null | [Wire Harness Schematic File](schematic-properties-objects-items-properties-id.md "undefined#/properties/objects/items/properties/id")             |
| [type](#type)         | `string` | Required | cannot be null | [Wire Harness Schematic File](schematic-properties-objects-items-properties-type.md "undefined#/properties/objects/items/properties/type")         |
| [x](#x)               | `number` | Optional | cannot be null | [Wire Harness Schematic File](schematic-properties-objects-items-properties-x.md "undefined#/properties/objects/items/properties/x")               |
| [y](#y)               | `number` | Optional | cannot be null | [Wire Harness Schematic File](schematic-properties-objects-items-properties-y.md "undefined#/properties/objects/items/properties/y")               |
| [rotation](#rotation) | `number` | Optional | cannot be null | [Wire Harness Schematic File](schematic-properties-objects-items-properties-rotation.md "undefined#/properties/objects/items/properties/rotation") |
| [name](#name)         | `string` | Optional | cannot be null | [Wire Harness Schematic File](schematic-properties-objects-items-properties-name.md "undefined#/properties/objects/items/properties/name")         |
| [text](#text)         | `string` | Optional | cannot be null | [Wire Harness Schematic File](schematic-properties-objects-items-properties-text.md "undefined#/properties/objects/items/properties/text")         |
| [points](#points)     | `array`  | Optional | cannot be null | [Wire Harness Schematic File](schematic-properties-objects-items-properties-points.md "undefined#/properties/objects/items/properties/points")     |
| [net](#net)           | `string` | Optional | cannot be null | [Wire Harness Schematic File](schematic-properties-objects-items-properties-net.md "undefined#/properties/objects/items/properties/net")           |
| [pins](#pins)         | `array`  | Optional | cannot be null | [Wire Harness Schematic File](schematic-properties-objects-items-properties-pins.md "undefined#/properties/objects/items/properties/pins")         |

## id

Unique identifier for this object (must be globally unique).

`id`

* is required

* Type: `string`

* cannot be null

* defined in: [Wire Harness Schematic File](schematic-properties-objects-items-properties-id.md "undefined#/properties/objects/items/properties/id")

### id Type

`string`

## type

Type of schematic object: 'connector', 'wire', or 'label'.

`type`

* is required

* Type: `string`

* cannot be null

* defined in: [Wire Harness Schematic File](schematic-properties-objects-items-properties-type.md "undefined#/properties/objects/items/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value         | Explanation |
| :------------ | :---------- |
| `"connector"` |             |
| `"wire"`      |             |
| `"label"`     |             |

## x

X-coordinate of the object’s origin (for placement in the canvas).

`x`

* is optional

* Type: `number`

* cannot be null

* defined in: [Wire Harness Schematic File](schematic-properties-objects-items-properties-x.md "undefined#/properties/objects/items/properties/x")

### x Type

`number`

## y

Y-coordinate of the object’s origin (for placement in the canvas).

`y`

* is optional

* Type: `number`

* cannot be null

* defined in: [Wire Harness Schematic File](schematic-properties-objects-items-properties-y.md "undefined#/properties/objects/items/properties/y")

### y Type

`number`

## rotation

Rotation of the object in degrees, clockwise (optional).

`rotation`

* is optional

* Type: `number`

* cannot be null

* defined in: [Wire Harness Schematic File](schematic-properties-objects-items-properties-rotation.md "undefined#/properties/objects/items/properties/rotation")

### rotation Type

`number`

## name

Human-readable label for the connector or component.

`name`

* is optional

* Type: `string`

* cannot be null

* defined in: [Wire Harness Schematic File](schematic-properties-objects-items-properties-name.md "undefined#/properties/objects/items/properties/name")

### name Type

`string`

## text

For label objects, this is the text content shown on screen.

`text`

* is optional

* Type: `string`

* cannot be null

* defined in: [Wire Harness Schematic File](schematic-properties-objects-items-properties-text.md "undefined#/properties/objects/items/properties/text")

### text Type

`string`

## points

List of (x, y) points defining the path of a wire.

`points`

* is optional

* Type: an array where each item follows the corresponding schema in the following list:

  1. [Untitled number in Wire Harness Schematic File](schematic-properties-objects-items-properties-points-items-items-0.md "check type definition")

  2. [Untitled number in Wire Harness Schematic File](schematic-properties-objects-items-properties-points-items-items-1.md "check type definition")

* cannot be null

* defined in: [Wire Harness Schematic File](schematic-properties-objects-items-properties-points.md "undefined#/properties/objects/items/properties/points")

### points Type

an array where each item follows the corresponding schema in the following list:

1. [Untitled number in Wire Harness Schematic File](schematic-properties-objects-items-properties-points-items-items-0.md "check type definition")

2. [Untitled number in Wire Harness Schematic File](schematic-properties-objects-items-properties-points-items-items-1.md "check type definition")

## net

Name of the net this wire belongs to (optional, used for overrides or explicit tagging).

`net`

* is optional

* Type: `string`

* cannot be null

* defined in: [Wire Harness Schematic File](schematic-properties-objects-items-properties-net.md "undefined#/properties/objects/items/properties/net")

### net Type

`string`

## pins

List of pins for connector objects, each with a unique ID and name.

`pins`

* is optional

* Type: `object[]` ([Details](schematic-properties-objects-items-properties-pins-items.md))

* cannot be null

* defined in: [Wire Harness Schematic File](schematic-properties-objects-items-properties-pins.md "undefined#/properties/objects/items/properties/pins")

### pins Type

`object[]` ([Details](schematic-properties-objects-items-properties-pins-items.md))
