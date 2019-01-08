## `android.arch.lifecycle`

+ `Lifecycle`: Contains `Event` and `State`
+ `LifecycleOwner`: Contains `getLifecycle()`
+ `LifecycleObserver`: Supports `@OnLifecycleEvent(...)` annotation
<br />
<br />
```kotlin
if (lifecycle.currentState.isAtLeast(Lifecycle.State.STARTED)) {
    // do something
}
```

Note:
+ `Lifecycle`:
    + `State`: Current state, like `CREATED`
    + `Event`: Change in state, like `ON_START`
+ Using a `LifecycleObserver` moves logic out of an Activity's `OnStart(...)`, etc methods
+ `LifecycleOwner`
    + Interface with one method, `getLifecycle()`
    + Fragments/Activities implement `LifecycleOwner` starting with Support Library 26.1.0
+ `LifecycleObserver`:
    + `@OnLifecycleEvent(Lifecycle.Event.ON_RESUME)`
    + `@OnLifecycleEvent(Lifecycle.Event.ON_PAUSE)`
    + Observer can be added to a `LifecycleOwner`
        + `lifecycle.addObserver(lifeCycleObserver)`
+ Able to do this manually, but usually just want to go with lifecycle-aware components
    + `ViewModel`
    + `LiveData`