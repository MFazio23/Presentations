### Smart Casts

```
// Java
private int calculateLength(Object o) {
    if(o instanceof String) {
        final String s = (String) o;
        return s.length();
    }
    return 0;
}
```

```
// C#
private int CalculateLength(object o) {
    if(o is string s) return s.Length;
    return 0;
}
```

```
// Kotlin
fun calculateLength(v: Any) : Int {
    if(v is String) return v.length //v is automatically cast to a String

    return 0
}
```

Note:
+