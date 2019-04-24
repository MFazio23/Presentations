### Data Classes
#### Component functions, destructuring declarations, `copy`

```
data class Person(val first: String, val last: String, var age: Int)
```
```
val hazel = Person(first = "Hazel", last = "Fazio", age = 4)
println(hazel) // Person(first=Hazel, last=Fazio, age=4) 

val (first, last, age) = hazel
println("$first $last, $age years old.") // Hazel Fazio, 4 years old.

val hazelNY = hazel.copy(age = 5) // Next year
println("${hazelNY.component1()} - ${hazelNY.component3()}") // Hazel - 5
```

Note:
+ `componentN()` functions in order of declaration (created automatically)
    + e.g. val first = person.component1(), val age = person.component3()
+ Destructuring Declarations
    + Helped by component functions
+ `copy()` can be used to create a new instance of the type
    + `person.copy(age = 34)`
+ String interpolation
     