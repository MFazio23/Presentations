### Lambda Functions

<img src="img/lambda.png" height="250"/>

```kotlin
val sum = { x: Int, y: Int -> x + y }
```

```kotlin
val baseballTeams: List<Team> =
    teams.filter { team -> team.sport == Sport.Baseball}
```

```kotlin
strings
    .filter { it.length == 5 }
    .sortedBy { it }
    .map { it.toUpperCase() }
```

Note:
+