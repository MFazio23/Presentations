### Native Modules

```kotlin
class TimberModule(
  reactContext: ReactApplicationContext
) : ReactContextBaseJavaModule(reactContext) {

  override fun getName() = "TimberModule"

  @ReactMethod
  fun log(level: String, message: String, tag: String = "") {
    val logLevel = getLogLevelFromString(level)

    Timber.tag(tag).log(logLevel, message)
  }

  private fun getLogLevelFromString(level: String): Int {...}
}
```

Notes:
- You can do `console.log(...)` on the RN side, but if you want to integrate directly with Timber, here's how it could work
- Console logs from RN _will_ show up in Logcat
