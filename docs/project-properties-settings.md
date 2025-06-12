# Untitled object in Wire Harness Project File Schema

```txt
undefined#/properties/settings
```

Canvas and design settings for the editor

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [project.schema.json\*](project.schema.json "open original schema") |

## settings Type

`object` ([Details](project-properties-settings.md))

# settings Properties

| Property                                  | Type      | Required | Nullable       | Defined by                                                                                                                                             |
| :---------------------------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| [units](#units)                           | `string`  | Optional | cannot be null | [Wire Harness Project File](project-properties-settings-properties-units.md "undefined#/properties/settings/properties/units")                         |
| [grid\_size](#grid_size)                  | `integer` | Optional | cannot be null | [Wire Harness Project File](project-properties-settings-properties-grid_size.md "undefined#/properties/settings/properties/grid_size")                 |
| [wire\_color\_scheme](#wire_color_scheme) | `string`  | Optional | cannot be null | [Wire Harness Project File](project-properties-settings-properties-wire_color_scheme.md "undefined#/properties/settings/properties/wire_color_scheme") |

## units

Units used for layout and spacing

`units`

* is optional

* Type: `string`

* cannot be null

* defined in: [Wire Harness Project File](project-properties-settings-properties-units.md "undefined#/properties/settings/properties/units")

### units Type

`string`

### units Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value  | Explanation |
| :----- | :---------- |
| `"mm"` |             |
| `"in"` |             |

## grid\_size

Grid size for snap-to-grid behavior

`grid_size`

* is optional

* Type: `integer`

* cannot be null

* defined in: [Wire Harness Project File](project-properties-settings-properties-grid_size.md "undefined#/properties/settings/properties/grid_size")

### grid\_size Type

`integer`

### grid\_size Constraints

**minimum**: the value of this number must greater than or equal to: `1`

## wire\_color\_scheme

Coloring scheme for wires (e.g., 'by\_signal\_type')

`wire_color_scheme`

* is optional

* Type: `string`

* cannot be null

* defined in: [Wire Harness Project File](project-properties-settings-properties-wire_color_scheme.md "undefined#/properties/settings/properties/wire_color_scheme")

### wire\_color\_scheme Type

`string`
