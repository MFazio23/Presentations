## Ktor Server

```kotlin
route("games") {
    get<GamesRequest> { request ->
        call.respond(
            getGames(request).map { game ->
                ScheduledGameApiModel
                    .fromScheduledGameDetail(game)
            }
        )
    }
}
```

Note:
- Share types between server and front-end
  - `ScheduledGameApiModel` can be used in both places