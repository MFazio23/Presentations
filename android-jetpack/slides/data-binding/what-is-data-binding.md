## Data Binding

```java
// Java
final TextView headerTextView = findViewById(R.id.week_header_text);
headerTextView.setText(viewModel.getCurrentWeekHeader());
```

```kotlin
// Kotlin
findViewById<TextView>(R.id.week_header_text).apply {
    text = viewModel.currentWeekHeader
}
```

```xml
<TextView
    android:id="@+id/week_header_text"
    android:layout_height="wrap_content"
    android:layout_width="0dp"
    android:text="@{currentWeekViewModel.currentWeekHeader}"
    ...
/>
```
Note:
+ Bind UI components in XML
+ Binding class is generated automatically
    + Layout name + `Binding`
    + `fragment_week.xml` -> `FragmentWeekBinding`