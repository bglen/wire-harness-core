# README

## Top-level Schemas

* [Wire Harness Project File](./project.md "Defines project-level configuration for a wire harness design") – `-`

* [Wire Harness Schematic File](./schematic.md "Defines all visual and logical components of a wire harness schematic, including canvas settings, object geometry, connectivity, and metadata") – `-`

## Other Schemas

### Objects

* [Untitled object in Wire Harness Project File](./project-properties-project.md "Basic metadata about the project") – `undefined#/properties/project`

* [Untitled object in Wire Harness Project File](./project-properties-settings.md "Canvas and design settings for the editor") – `undefined#/properties/settings`

* [Untitled object in Wire Harness Project File](./project-properties-files.md "References to data files used by the app") – `undefined#/properties/files`

* [Untitled object in Wire Harness Project File](./project-properties-metadata.md "Optional tags and revision history") – `undefined#/properties/metadata`

* [Untitled object in Wire Harness Project File](./project-properties-metadata-properties-revision_history-items.md) – `undefined#/properties/metadata/properties/revision_history/items`

* [Untitled object in Wire Harness Schematic File](./schematic-properties-schematic.md "Basic metadata about the schematic") – `undefined#/properties/schematic`

* [Untitled object in Wire Harness Schematic File](./schematic-properties-schematic-properties-canvas.md "Describes the virtual drawing space used in the schematic editor") – `undefined#/properties/schematic/properties/canvas`

* [Untitled object in Wire Harness Schematic File](./schematic-properties-objects-items.md) – `undefined#/properties/objects/items`

* [Untitled object in Wire Harness Schematic File](./schematic-properties-objects-items-properties-pins-items.md) – `undefined#/properties/objects/items/properties/pins/items`

* [Untitled object in Wire Harness Schematic File](./schematic-properties-nets-items.md) – `undefined#/properties/nets/items`

* [Untitled object in Wire Harness Schematic File](./schematic-properties-metadata.md "Optional metadata including creation date, author, and schematic notes") – `undefined#/properties/metadata`

### Arrays

* [Untitled array in Wire Harness Project File](./project-properties-metadata-properties-tags.md "Freeform tags for filtering or classification") – `undefined#/properties/metadata/properties/tags`

* [Untitled array in Wire Harness Project File](./project-properties-metadata-properties-revision_history.md "List of dated notes describing changes") – `undefined#/properties/metadata/properties/revision_history`

* [Untitled array in Wire Harness Schematic File](./schematic-properties-objects.md "List of all schematic elements including connectors, wires, labels, and symbols") – `undefined#/properties/objects`

* [Untitled array in Wire Harness Schematic File](./schematic-properties-objects-items-properties-points.md "List of (x, y) points defining the path of a wire") – `undefined#/properties/objects/items/properties/points`

* [Untitled array in Wire Harness Schematic File](./schematic-properties-objects-items-properties-points-items.md) – `undefined#/properties/objects/items/properties/points/items`

* [Untitled array in Wire Harness Schematic File](./schematic-properties-objects-items-properties-pins.md "List of pins for connector objects, each with a unique ID and name") – `undefined#/properties/objects/items/properties/pins`

* [Untitled array in Wire Harness Schematic File](./schematic-properties-nets.md "Explicit netlist definition linking pins by net name") – `undefined#/properties/nets`

* [Untitled array in Wire Harness Schematic File](./schematic-properties-nets-items-properties-nodes.md "List of pin IDs that belong to this net") – `undefined#/properties/nets/items/properties/nodes`

## Version Note

The schemas linked above follow the JSON Schema Spec version: `http://json-schema.org/draft-07/schema#`
