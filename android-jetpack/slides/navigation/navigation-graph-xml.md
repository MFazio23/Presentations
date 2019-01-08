## `nav_graph.xml`

```xml
<?xml version="1.0" encoding="utf-8"?>
<navigation xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/nav_graph"
    app:startDestination="@id/weekFragment">

    <fragment
        android:id="@+id/weekFragment"
        android:name="org.faziodev.timetracker.WeekFragment"
        android:label="fragment_week"
        tools:layout="@layout/fragment_week" />
    <fragment
        android:id="@+id/dashboardFragment"
        android:name="org.faziodev.timetracker.DashboardFragment"
        android:label="fragment_dashboard"
        tools:layout="@layout/fragment_dashboard" />
    <fragment
        android:id="@+id/tasksFragment"
        android:name="org.faziodev.timetracker.TasksFragment"
        android:label="fragment_tasks"
        tools:layout="@layout/fragment_tasks" />
    <fragment
        android:id="@+id/settingsFragment"
        android:name="org.faziodev.timetracker.SettingsFragment"
        android:label="fragment_settings"
        tools:layout="@layout/fragment_settings" />
</navigation>
```

Note:
+ 