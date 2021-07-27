```kotlin
@HiltAndroidApp
```

```kotlin
@AndroidEntryPoint
```

```kotlin
@HiltViewModel
```

```kotlin
@HiltViewModel
class AccountInfoViewModel @Inject constructor (
    private val repository: AccountRepository,
    private val navManager: AccountNavManager,
    featureFlagManager: AccountFeatureFlagManager
) : BaseViewModel {
    ...
}
```

Notes:
* DI (Dependency Injection)
* HiltAndroidApp - required on `Application` class
* @AndroidEntryPoint - Activity/Fragment/Service/View
* Generates components to use