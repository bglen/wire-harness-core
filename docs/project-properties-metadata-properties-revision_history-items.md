# Untitled object in Wire Harness Project File Schema

```txt
undefined#/properties/metadata/properties/revision_history/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [project.schema.json\*](project.schema.json "open original schema") |

## items Type

`object` ([Details](project-properties-metadata-properties-revision_history-items.md))

# items Properties

| Property      | Type     | Required | Nullable       | Defined by                                                                                                                                                                                       |
| :------------ | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [date](#date) | `string` | Required | cannot be null | [Wire Harness Project File](project-properties-metadata-properties-revision_history-items-properties-date.md "undefined#/properties/metadata/properties/revision_history/items/properties/date") |
| [note](#note) | `string` | Required | cannot be null | [Wire Harness Project File](project-properties-metadata-properties-revision_history-items-properties-note.md "undefined#/properties/metadata/properties/revision_history/items/properties/note") |

## date

Date of the revision

`date`

* is required

* Type: `string`

* cannot be null

* defined in: [Wire Harness Project File](project-properties-metadata-properties-revision_history-items-properties-date.md "undefined#/properties/metadata/properties/revision_history/items/properties/date")

### date Type

`string`

### date Constraints

**date**: the string must be a date string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## note

Brief description of what changed

`note`

* is required

* Type: `string`

* cannot be null

* defined in: [Wire Harness Project File](project-properties-metadata-properties-revision_history-items-properties-note.md "undefined#/properties/metadata/properties/revision_history/items/properties/note")

### note Type

`string`
