## Kotlin/JS + React

```kotlin
Row {
    attrs.baseline = RowPosition.xs
    attrs.center = RowPosition.xs
    Col {
        Input {
            attrs.size = "L"
            attrs.inputRef = inputRef
            attrs.label = "Task name"
        }
    }
    Col {
        Button {
            attrs.asDynamic().type = ButtonType.submit
            +"Add Todo"
        }
    }
}
```

Note:
- HTML DSL within JS