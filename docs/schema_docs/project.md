# Wire Harness Project File Schema

```txt
undefined
```

Defines project-level configuration for a wire harness design.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [project.schema.json](project.schema.json "open original schema") |

## Wire Harness Project File Type

`object` ([Wire Harness Project File](project.md))

# Wire Harness Project File Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                   |
| :-------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------- |
| [project](#project)   | `object` | Required | cannot be null | [Wire Harness Project File](project-properties-project.md "undefined#/properties/project")   |
| [settings](#settings) | `object` | Required | cannot be null | [Wire Harness Project File](project-properties-settings.md "undefined#/properties/settings") |
| [files](#files)       | `object` | Required | cannot be null | [Wire Harness Project File](project-properties-files.md "undefined#/properties/files")       |
| [metadata](#metadata) | `object` | Optional | cannot be null | [Wire Harness Project File](project-properties-metadata.md "undefined#/properties/metadata") |

## project

Basic metadata about the project

`project`

* is required

* Type: `object` ([Details](project-properties-project.md))

* cannot be null

* defined in: [Wire Harness Project File](project-properties-project.md "undefined#/properties/project")

### project Type

`object` ([Details](project-properties-project.md))

## settings

Canvas and design settings for the editor

`settings`

* is required

* Type: `object` ([Details](project-properties-settings.md))

* cannot be null

* defined in: [Wire Harness Project File](project-properties-settings.md "undefined#/properties/settings")

### settings Type

`object` ([Details](project-properties-settings.md))

## files

References to data files used by the app

`files`

* is required

* Type: `object` ([Details](project-properties-files.md))

* cannot be null

* defined in: [Wire Harness Project File](project-properties-files.md "undefined#/properties/files")

### files Type

`object` ([Details](project-properties-files.md))

## metadata

Optional tags and revision history

`metadata`

* is optional

* Type: `object` ([Details](project-properties-metadata.md))

* cannot be null

* defined in: [Wire Harness Project File](project-properties-metadata.md "undefined#/properties/metadata")

### metadata Type

`object` ([Details](project-properties-metadata.md))
