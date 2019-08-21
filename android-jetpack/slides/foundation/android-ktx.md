## Android KTX
```kotlin
// Kotlin
view.viewTreeObserver.addOnPreDrawListener(
    object : ViewTreeObserver.OnPreDrawListener {
        override fun onPreDraw(): Boolean {
            viewTreeObserver.removeOnPreDrawListener(this)
            actionToBeTriggered()
            return true
        }
    }
)
```

<br />

```kotlin
// Kotlin + Android KTX
view.doOnPreDraw {
     actionToBeTriggered()
}
```

Note:
+ Kotlin Extensions
+ Add `google()` repository
+ Add `'androidx.core:core-ktx:1.0.0'` dependency
+ Extensions for:
    + Animation
    + SQLite interaction (but use Room instead)
    + Fragment transactions (but use Navigation instead)
    + Many, many more