## expect/actual

```kotlin
// Shared
expect class DatabaseDriverFactory {
    fun createDriver(): SqlDriver
}
```

```kotlin
// Android
actual class DatabaseDriverFactory(private val ctx: Context) {
    actual fun createDriver(): SqlDriver =
        AndroidSqliteDriver(
            AppDatabase.Schema, ctx, "app-database.db"
        )
}
```


```kotlin
// iOS
actual class DatabaseDriverFactory {
    actual fun createDriver(): SqlDriver =
        NativeSqliteDriver(
            AppDatabase.Schema, "app-datbase.db"
        )
}
```

Note:
- Uses SQLDelite from Square