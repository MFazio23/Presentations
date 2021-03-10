### Companion Objects

```
data class Team(val city: String, val name: String, val sport: Sport) {
    companion object {
        fun createBaseballTeam(city: String, name: String)
            = Team(city, name, Sport.Baseball)
    }
}
```

```
val brewers = Team.createBaseballTeam("Milwaukee", "Brewers")
```

Note:
+