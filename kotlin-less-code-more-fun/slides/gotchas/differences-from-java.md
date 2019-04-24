### Java Has These, Kotlin Does Not

+ Ternary-operator (`a ? b : c`)
+ Checked exceptions
+ Primitive types that are not classes
+ Static members
+ Non-private fields

Note:
+ Checked exceptions lead to useless `try...catch` blocks
+ Instead of static members, use package-level functions
    + Also can use object declarations or companion objects
+ Use properties instead of fields
+ `if` works just fine
    + `val max = if (a < b) b else a`
