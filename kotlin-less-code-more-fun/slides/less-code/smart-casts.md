### Smart Casts

```java
// Java
private int calculateLength(Object o) {
    if(o instanceof String) {
        final String s = (String) o;
        return s.length();
    }
    return 0;
}
```

```csharp
// C#
private int CalculateLength(object o) {
    if(o is string s) return s.Length;
    return 0;
}
```

```kotlin
// Kotlin
fun calculateLength(v: Any) : Int {
    //v is automatically cast to a String
    if(v is String) return v.length

    return 0
}
```

Note:
+