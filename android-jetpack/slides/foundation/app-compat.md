## AppCompat
<br />
<img src="img/android-distributions.png" height=400>

Note:
+ More than 10% of devices still running a four+ year old OS
    + Graph from end of October
+ All moved to the AndroidX library
    + Existing versions still work
    + All new dev will be in AndroidX
    + Migration
        + Inside Android Studio: Refactor > Migrate
        + `android.useAndroidX=true`
        + `android.enableJetifier=true`
        + https://developer.android.com/jetpack/androidx/migrate
+ Target API level 28 (Android 9.0)