# Untitled object in Wire Harness Project File Schema

```txt
undefined#/properties/metadata
```

Optional tags and revision history

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [project.schema.json\*](project.schema.json "open original schema") |

## metadata Type

`object` ([Details](project-properties-metadata.md))

# metadata Properties

| Property                               | Type    | Required | Nullable       | Defined by                                                                                                                                           |
| :------------------------------------- | :------ | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| [tags](#tags)                          | `array` | Optional | cannot be null | [Wire Harness Project File](project-properties-metadata-properties-tags.md "undefined#/properties/metadata/properties/tags")                         |
| [revision\_history](#revision_history) | `array` | Optional | cannot be null | [Wire Harness Project File](project-properties-metadata-properties-revision_history.md "undefined#/properties/metadata/properties/revision_history") |

## tags

Freeform tags for filtering or classification

`tags`

* is optional

* Type: `string[]`

* cannot be null

* defined in: [Wire Harness Project File](project-properties-metadata-properties-tags.md "undefined#/properties/metadata/properties/tags")

### tags Type

`string[]`

## revision\_history

List of dated notes describing changes

`revision_history`

* is optional

* Type: `object[]` ([Details](project-properties-metadata-properties-revision_history-items.md))

* cannot be null

* defined in: [Wire Harness Project File](project-properties-metadata-properties-revision_history.md "undefined#/properties/metadata/properties/revision_history")

### revision\_history Type

`object[]` ([Details](project-properties-metadata-properties-revision_history-items.md))
