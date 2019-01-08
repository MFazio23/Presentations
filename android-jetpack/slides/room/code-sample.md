## `@Database and RoomDatabase`

```kotlin
@Database(entities = arrayOf(User::class), version = 1)
abstract class AppDatabase : RoomDatabase() {
    abstract fun userDao(): UserDao
}
```

```kotlin
val db = Room.databaseBuilder(
    applicationContext,
    AppDatabase::class.java, "database-name"
).build()
```

Note:
+ Database lists entities, views
+ Retrieve DAOs from Database
    + Abstract getter method for each `@Dao`