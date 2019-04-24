## Statically typed

```
val numbers: List<Int> = listOf(1, 4, 7, 10, 23)
```
```
enum class Sport {
    Baseball,
    Football,
    Soccer,
    Basketball
}

data class Team(val city: String, val teamName: String, val sport: Sport)

val team = Team("Milwaukee", "Brewers", Sport.Baseball)
```

Note:
+ Statically typed:
    + Know type of variable at compile time
        + Java
        + C, C++, C#
    + Kotlin uses type inference
        + Type system can figure the type out
        + Don't always have to specify
        + Will warn if not clear
+ Modern:
    + Concise code
    + Lots of features