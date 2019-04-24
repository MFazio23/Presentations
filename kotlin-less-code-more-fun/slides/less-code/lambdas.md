### Lambda Functions

<img src="img/lambda.png" height="250"/>

```
val sum = { x: Int, y: Int -> x + y }
```

```
val baseballTeams: List<Team> =
    teams.filter { team -> team.sport == Sport.Baseball}
```

```
strings
    .filter { it.length == 5 }
    .sortedBy { it }
    .map { it.toUpperCase() }
```

Note:
+