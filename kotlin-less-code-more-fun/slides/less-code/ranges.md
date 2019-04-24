### Ranges

```
// Java
private boolean isInRange(int i) {
    return i >= 1 && i<= 10;
}
```

```
// Kotlin
fun isInRange(i: Int) : Boolean {
    return i in 1..10
}
```

```
// Kotlin
fun isInRange(i: Int) = i in 1..10
```

Note:
+ rangeTo()
    +
+ downTo()
+ reversed()
    + Last to first with negative step
+ step()
    + `(1..12 step 3).last == 10`
+ Single-expression function in last example