### Collections are immutable

```kotlin
val teams: List<Team> = this.getBaseballTeams(this.allTeams)

val brewers: Team = Team("Milwaukee", "Brewers", Sport.Baseball)

teams.add(brewers) //add doesn't exist on List
```

```kotlin
val teams: MutableList<Team> = this.getBaseballTeams(this.allTeams)

val brewers: Team = Team("Milwaukee", "Brewers", Sport.Baseball)

teams.add(brewers) //Brewers added
```

```kotlin
val teams: List<Team> = listOf(brewers, reds, cubs)

val mutableTeams: MutableList<Team> = mutableListOf(brewers, reds, cubs)
```

Note:
+