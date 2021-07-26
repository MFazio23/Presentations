# Kotlin
### Interoperable

```kotlin
// apiService is a generated Java Retrofit class

val apiResponse = apiService.getPlayers(
    page,
    state.config.pageSize,
    nameQuery,
    teamId
)

val players = apiResponse.convertToPlayers()
```

Notes:
+ Retrofit API call
  + Generated Java code
+ I had trouble finding a good example because I can't tell what's Java or Kotlin when using a library.