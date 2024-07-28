### Native Modules

```kotlin
class PrefsModule(reactContext: ReactApplicationContext) : 
    ReactContextBaseJavaModule(reactContext) {
  private val sharedPrefs = ...// Get prefs from reactContext

  @ReactMethod
  fun setValue(id: String, value: String) {
    with(sharedPrefs.edit()) {
      putString(id, value)
      apply()
    }
  }

  @ReactMethod
  fun getValue(id: String, promise: Promise) {
    promise.resolve(sharedPrefs.getString(id, ""))
  }
}
```

Notes:
- If you wanted to directly reach `SharedPreferences`, you could do something like this.
- Again, probably something that's already solved for you, but this is an example.
- All native module functions will be async
  - There's a flag to make them synchronous, don't use it
  - Either call something that can be run synchronously, or use a `Promise`
- `promise.resolve` comes back as a Promises that can be `await`ed in the JS side.
- I excluded the `getName()` function for space
