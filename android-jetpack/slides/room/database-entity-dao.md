### `@Entity and @Dao`

```kotlin
@Entity
data class User(
    @PrimaryKey(autoGenerate = true) var uid: Int,
    @ColumnInfo(name = "first_name") @NonNull var firstName: String,
    @ColumnInfo(name = "last_name") var lastName: String?
)
```

```kotlin
@Dao
interface UserDao {
    @Query("SELECT * FROM user")
    fun getAll(): List<User>

    @Query("SELECT * FROM user WHERE first_name LIKE :first AND " +
           "last_name LIKE :last LIMIT 1")
    fun findByName(first: String, last: String): User

    @Insert
    fun insertAll(vararg users: User)

    @Delete
    fun delete(user: User)
}
```

Note:
+ `@Entity`
    + Table in a database
    + Requires a @PrimaryKey
    + Able to customize the name
        + Otherwise, named after class name
+ `@Dao`
    + Methods used to access the DB
    + Queries are verified at compile-time