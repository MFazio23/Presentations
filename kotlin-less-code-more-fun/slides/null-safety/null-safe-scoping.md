### Null Safe Scoping

```
fun findTeam(city: String = "", nickname: String = ""): Team? {
    return this.teams.firstOrNull {
        team -> team?.city == city || team?.name == nickname
    }
}

findTeam(nickname = "Brewers")?.let {
    //This will only run if findTeam(...) returns a non-null value
}
```

Note:
+