## Navigation

```kotlin
override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    val binding: ActivityMainBinding
        = DataBindingUtil.setContentView(this, R.layout.activity_main)

    this.navController
        = Navigation.findNavController(this, R.id.mainFragment)

    binding.bottomNav.setupWithNavController(this.navController)
}

```

Note:
+ setupWithNavController can be used on:
    + Bottom nav
    + Navigation drawer
+ Match the menu item IDs with the destination IDs