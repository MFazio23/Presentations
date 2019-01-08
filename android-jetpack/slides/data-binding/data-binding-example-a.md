## Data Binding

```xml
<layout xmlns:android="http://schemas.android.com/apk/res/android"
        xmlns:app="http://schemas.android.com/apk/res-auto">
    <data>
        <variable
            name="currentWeekViewModel"
            type="org.faziodev.timetracker.viewmodels.CurrentWeekViewModel"
            />
    </data>
    <ConstraintLayout... /> <!-- UI layout's root element -->
</layout>
```

Note:
+ Add the `<data>` section with one or more `<variable>` tags