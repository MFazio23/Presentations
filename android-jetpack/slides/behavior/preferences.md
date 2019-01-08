## Preferences

```xml
<androidx.preference.PreferenceScreen
    xmlns:app="http://schemas.android.com/apk/res-auto">

    <SwitchPreferenceCompat
        app:key="notifications"
        app:title="Enable message notifications"/>

    <Preference
        app:key="feedback"
        app:title="Send feedback"
        app:summary="Report technical issues or suggest new features"/>

</androidx.preference.PreferenceScreen>
```

```kotlin
class MySettingsFragment : PreferenceFragmentCompat() {
    override fun onCreatePreferences(bundle: Bundle, rootKey: String) {
        setPreferencesFromResource(R.xml.preferences, rootKey)
    }
}
```

Note:
+ Create interactive settings screens
+ AndroidX Preference Library
    + Manages UI and storage interaction for you
    + Create preference hierarchy in XML (or code)
    + Inflate inside a `PreferenceFragment`
    + Add to any Activity as you would a normal fragment