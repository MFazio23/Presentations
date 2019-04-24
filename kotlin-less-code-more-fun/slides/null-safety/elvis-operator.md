### Elvis Operator

```java
// Java
public Sport getTeamSport(Team team) {
    if(team != null) {
        return team.getSport();
    }

    return Sport.Unknown;
}
```

```kotlin
// Kotlin
fun getTeamSport(team: Team?): Sport
    = if(team != null) team.sport else Sport.Unknown

fun getTeamSport(team: Team?): Sport = team?.sport ?: Sport.Unknown
```

Note:
+ Same as `??` in C#
+ "Null coalescing operator"