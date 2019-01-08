## `@DatabaseView`

```kotlin
@DatabaseView("SELECT user.id, user.name, user.departmentId," +
        "department.name AS departmentName FROM user " +
        "INNER JOIN department ON user.departmentId = department.id")
data class UserDetail(
    var id: Long,
    var name: String?,
    var departmentId: Long,
    var departmentName: String?
)
```

```kotlin
@Database(entities = arrayOf(User::class),
          views = arrayOf(UserDetail::class), version = 1)
abstract class AppDatabase : RoomDatabase() {
    abstract fun userDao(): UserDao
}
```

Note:
+ Add DB views to access particular queries
+ Access via `Database.views()`
+ Database version is used with migrations
    + Able to use `Migration` class to update DB without losing data
        + Specify SQL to execute for a migration
        + Runs in `Migration`'s `migrate(...)` method