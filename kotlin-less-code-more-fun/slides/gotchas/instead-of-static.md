### Instead of `static`

```
package org.faziodev.kotlin

// Package-level function
fun nullSafeToUpper(value: String?) : String {
    return value?.toUpperCase() ?: ""
}

// Object declaration
object TeamSource {
    fun myFunction() { ... }
}
```

```
// Import the package and call the method
val upper: String = nullSafeToUpper(brewers?.name)

// Reference the function similarly to a static method
TeamSource.myFunction()
```

Note:
+ Package-level functions
+ Object declarations
    + Work as singletons
+ Companion objects