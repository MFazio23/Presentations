### All Functions are Closed

```kotlin
open class Base {
    open fun openFun() {}
    open fun alsoOpenFun() {}
    fun notOpenFun() {}    
}
```
```kotlin
class Derived() : Base() {
    //Overridden methods are open by default
    override fun openFun() {}
    
    // This can no longer be overridden
    final override fun alsoOpenFun() {}
}
```

Note:
+