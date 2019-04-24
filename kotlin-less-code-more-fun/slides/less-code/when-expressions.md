### `when` expressions

```kotlin
when (x) {
    1 -> print("x == 1")
    2 -> print("x == 2")
    else -> { // Note the block
        print("x is neither 1 nor 2")
    }
}
```

```kotlin
val result: String = when (x) {
    0, 1 -> "x == 0 or x == 1"
    else -> "otherwise"
}
```

```kotlin
when (x) {
    in 1..10 -> print("x is in the range")
    in validNumbers -> print("x is valid")
    !in 10..20 -> print("x is outside the range")
    else -> print("none of the above")
}
```

Note:
+ Replaces `switch`