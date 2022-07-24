## Ktor Client

```kotlin
private val httpClient = HttpClient {
    install(ContentNegotiation) {
        json(
            Json { ignoreUnknownKeys = true }
        )
    }
}
```

Note:
- Create a cross-platform client with same types as server
  - iOS and Android have platform-specific versions (OkHttp)