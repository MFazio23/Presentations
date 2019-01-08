## LiveData

```java
public class CurrentWeekViewModel extends ViewModel {
    private MutableLiveData<String> currentWeekHeader;    
    public MutableLiveData<String> getCurrentWeekHeader() {
        if(currentWeekHeader == null)
        currentWeekHeader = new MutableLiveData<String>();
        
        return currentWeekHeader;
    }
}
```

```java
final CurrentWeekViewModel vm
    = ViewModelProviders.of(this).get(CurrentWeekViewModel::class);

final Observer<String> headerObserver = new Observer<String>() {
    @Override
    public void onChanged(@Nullable final String newValue) {
        headerTextView.setText(newValue);
    }
};
    
vm.getCurrentWeekHeader().observe(this, headerObserver);
```

Note:
+ Lifecycle-aware observable
+ LiveData
    + Create instance with `get...` and `set...`
    + Create observer
    + Attach observer to `LiveData`
    + Just use bindings?