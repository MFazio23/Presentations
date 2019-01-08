## `ViewModel`

```kotlin
class MyViewModel : ViewModel() {
    private lateinit var users: MutableLiveData<List<User>>

    fun getUsers(): LiveData<List<User>> {
        if (!::users.isInitialized) {
            users = MutableLiveData()
            loadUsers()
        }
        return users
    }

    private fun loadUsers() {
        // Do an asynchronous operation to fetch users.
    }
}
```
Note:
+ Sourcing data to your views
+ Extend the `ViewModel` abstract class
+ Generally used with `LiveData`
+ Keeps data logic out of UI layer (separation of concerns)
    + Easier to understand
    + Easier to test
+ ViewModels must never reference a view, lifecycle, or any class with an `Activity` context reference