### Kotlin on Android
#### anko

+ Anko Commons
+ Anko Layouts
+ Anko SQLite
+ Anko Coroutines

```kotlin
verticalLayout {
    val name = editText()
    button("Say Hello") {
        onClick { toast("Hello, ${name.text}!") }
    }
}
```

https://github.com/Kotlin/anko

Note:
+ Speed up Android dev
+ Anko Commons
    + Intents
    + Dialogs/toasts
    + Logging
    + Resources/Dimensions
+ Anko Layouts
    + DSL (Domain-specific language) for Android layouts
+ Anko SQLite
    + Simplifies working with SQLite DBs
+ Anko Coroutines
    + Helps with Kotlin coroutines (async calls)