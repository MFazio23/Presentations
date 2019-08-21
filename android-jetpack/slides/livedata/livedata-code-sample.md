## LiveData

```kotlin
class CurrentWeekViewModel : ViewModel() {
    val currentWeekHeader: MutableLiveData<String>
        = MutableLiveData<String>()
}
```

```kotlin
override fun onCreateView(inflater: LayoutInflater,
    container: ViewGroup?, state: Bundle?): View? {        
    val vm = ViewModelProviders
        .of(this)
        .get(CurrentWeekViewModel::class.java)
    
    val headerObserver = Observer<String> { newValue ->
        headerTextView.text = newValue
    }
        
    vm.currentWeekHeader.observe(this, headerObserver)
}
```

Note:
+ Store LiveData in ViewModels, not Activities/Fragments
+ `LiveData` can use `Transformations` to map data before sending to observers