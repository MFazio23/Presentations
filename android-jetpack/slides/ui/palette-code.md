## Palette

```kotlin
// Generate palette synchronously and return it
fun createPaletteSync(bitmap: Bitmap): Palette
    = Palette.from(bitmap).generate()

// Generate palette asynchronously and use it on a different
// thread using onGenerated()
fun createPaletteAsync(bitmap: Bitmap) {
    Palette.from(bitmap).generate { palette ->
        // Use generated instance
    }
}
```

Note:
+ Android support library 24.0.0 or greater
+ Extracts colors from images
+ Ex: Album art colors when playing a song