### Null Safe Scoping

```kotlin
private fun getSummary(team: Team?): String {
    return team?.let({ t -> "${t.city} ${t.name} (${t.sport})" }) ?: "N/A"
}
```
```kotlin
private fun getSummary(team: Team?): String {
    return team?.let { t -> "${t.city} ${t.name} (${t.sport})" } ?: "N/A"
}
```
```kotlin
private fun getSummary(team: Team?): String {
    return team?.let { "${it.city} ${it.name} (${it.sport})" } ?: "N/A"
}
```
```kotlin
private fun getSummary(team: Team?): String =
    team?.let { "${it.city} ${it.name} (${it.sport})" } ?: "N/A"
```

Note:
+