# Untitled object in Wire Harness Schematic File Schema

```txt
undefined#/properties/nets/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [schematic.schema.json\*](schematic.schema.json "open original schema") |

## items Type

`object` ([Details](schematic-properties-nets-items.md))

# items Properties

| Property        | Type     | Required | Nullable       | Defined by                                                                                                                             |
| :-------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)   | `string` | Required | cannot be null | [Wire Harness Schematic File](schematic-properties-nets-items-properties-name.md "undefined#/properties/nets/items/properties/name")   |
| [nodes](#nodes) | `array`  | Required | cannot be null | [Wire Harness Schematic File](schematic-properties-nets-items-properties-nodes.md "undefined#/properties/nets/items/properties/nodes") |

## name

Name of the net (e.g., 'CAN\_H').

`name`

* is required

* Type: `string`

* cannot be null

* defined in: [Wire Harness Schematic File](schematic-properties-nets-items-properties-name.md "undefined#/properties/nets/items/properties/name")

### name Type

`string`

## nodes

List of pin IDs that belong to this net.

`nodes`

* is required

* Type: `string[]`

* cannot be null

* defined in: [Wire Harness Schematic File](schematic-properties-nets-items-properties-nodes.md "undefined#/properties/nets/items/properties/nodes")

### nodes Type

`string[]`
