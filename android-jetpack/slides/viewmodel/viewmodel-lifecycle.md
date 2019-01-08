## Lifecycle of a `ViewModel`

<img src="img/viewmodel-lifecycle.png" height=600/>

Note:
+ Lifecycle-aware; saves data through Activity/Fragment lifecycles
    + Re-creating UI doesn't lose data
    + Activities can always get the same `ViewModel` instance
        + ViewModels live until `onCleared()` is called