### Null Safe Scoping

```kotlin
fun listTeams() {
    val brewers: Team? = Team("Milwaukee", "Brewers", Sport.Baseball)
    val rockies: Team? = Team("Colorado", "Rockies", Sport.Baseball)
    val devilRays: Team? = null

    println(this.getSummary(brewers))
    println(this.getSummary(rockies))
    println(this.getSummary(devilRays))
}
```
```kotlin
private fun getSummary(team: Team?): String {
    var fullName: String = "N/A"

    team?.let({t -> fullName = "${t.city} ${t.name} (${t.sport})"})

    return fullName
}
```

Note:
+