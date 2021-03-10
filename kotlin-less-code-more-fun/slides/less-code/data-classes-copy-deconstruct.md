### Data Classes
#### Component functions, destructuring declarations, `copy(...)`

```
data class Person(val first: String, val last: String, var age: Int)
```
```
val hazel = Person(first = "Hazel", last = "Fazio", age = 5)
println(hazel) // Person(first=Hazel, last=Fazio, age=5) 

val (first, last, age) = hazel
println("$first $last, $age years old.") // Hazel Fazio, 5 years old.

val hazelNY = hazel.copy(first = "Hazel Mae") // Full name
hazelNY.age = 6 // Change her age
println("${hazelNY.name} - ${hazelNY.age}") // Hazel Mae - 6
```

Note:
+ `componentN()` functions in order of declaration (created automatically)
    + e.g. val first = person.component1(), val age = person.component3()
+ Destructuring Declarations
    + Helped by component functions
+ `copy()` can be used to create a new instance of the type
    + `person.copy(age = 34)`
+ String interpolation
     