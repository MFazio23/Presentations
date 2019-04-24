### First-CLass Language on Android

<img src="img/android-and-kotlin.png" />

```
override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_main)
    setSupportActionBar(toolbar)
    ...

    view.SetOnClickListener { v -> handleClick(v) }
}
```

Note:
+ Official language on Android
+ Announced at Google I/O 2017 (May 2017)
+ Option to build apps in Kotlin right away
+ Only adds about 100K to the APK size