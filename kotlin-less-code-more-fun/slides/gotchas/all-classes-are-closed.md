### All Classes are Closed

```kotlin
class Base(p: Int)

//This will not work
class Derived(p: Int) : Base(p) 
```

```kotlin
open class Base(p: Int)

class Derived(p: Int) : Base(p)
```

Note:
+ `open` in Kotlin is opposite of `final` in Java
+ Design and document for inheritance or else prohibit it.
    + Effective Java
+ Things are explicit in Kotlin
+ Exception: Abstract classes are open by default
+ Classes are also public by default