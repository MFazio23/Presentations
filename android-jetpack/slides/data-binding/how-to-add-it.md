## Enable Data Binding

```gradle
android {
    ...
    dataBinding {
        enabled = true
    }
}
```
<br />
```kotlin
val binding = FragmentWeekBinding.inflate(inflater, container, false)
binding.setLifecycleOwner(this)
binding.currentWeekViewModel = 
    ViewModelProviders.of(this).get(CurrentWeekViewModel::class.java)
```

Note:
+ Must configure data binding for modules that rely on libraries using data binding
+ Can be used on apps targeting API level 14 or higher (support library)
+ Can inflate UI from the generated binding class
+ Tie a view model to a binding object
    + Can also tie other objects