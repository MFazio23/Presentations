## Data Binding
```xml
<TextView
    android:id="@+id/week_header_text"
    android:text="@{viewModel.currentWeekHeader}"
    ... />
```
```xml
<com.google.android.material.floatingactionbutton.FloatingActionButton
    android:id="@+id/week_summary_fab"
    android:onClick="@{ () -> viewModel.onFabClicked() }"
    ... />
```
```xml
<TextView
    android:id="@+id/week_pace_text"
    android:text="@{@string/pace_this_week(viewModel.currentPaceHours)}"
    ... />
```
```xml
<CheckBox
    android:id="@+id/week_is_entered_into_system"
    android:checked="@={viewModel.enteredIntoSystem}"
    ... />
```


Note:
+ Can use most literals, operators, method calls, and more in binding statements
    + Access resources and formats (like strings) within expressions
    + Can even import types
+ Two-way binding using a `=`
    + Can add a converter if the value doesn't match what's displayed
    + Observable fires when the value changes on the UI
+ Can add Custom binding adapters if needed
