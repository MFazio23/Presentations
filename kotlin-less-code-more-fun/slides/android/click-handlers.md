### Kotlin on Android
#### OnClickHandlers

```java
// Java
loginButton.setOnClickListener(new View.OnClickListener() {
    public void onClick(View v) {
        logInUser();
    }
});
```

```kotlin
// Kotlin
loginButton.setOnClickListener {v -> logInUser() }

loginButton.setOnClickListener { logInUser() }
```

Note:
+