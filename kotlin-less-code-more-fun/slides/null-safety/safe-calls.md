### Null Safety
#### Safe Calls

```
val brewers: Team? = Team("Milwaukee", "Brewers", Sport.Baseball)
val rockies: Team? = Team("Colorado", "Rockies", Sport.Baseball)
val devilRays: Team? = null

val baseballTeams = listOf(brewers, rockies, devilRays)
```

```
val nicknames: List<String> = baseballTeams.map {
    if (it != null) it.name else ""
}
```

```
val nicknames: List<String> = baseballTeams.map {
    it?.name ?: ""
}
```


Note:
+