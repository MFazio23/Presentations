### Null Safety

```
var a: String = "abc"
a = null // compilation error
```

```
var b: String? = "abc"
b = null // ok
```

<br />

```
val l = a.length
```

```
val l = b.length // error: variable 'b' can be null
```

Note:
+ Nulls are checked at runtime