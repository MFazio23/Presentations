## Multidex

```gradle
android {
    defaultConfig {
        ...
        minSdkVersion 21 
        targetSdkVersion 28
        multiDexEnabled true
    }
    ...
}

// Required if your minSdkVersion is 20 or lower
dependencies {
  compile 'com.android.support:multidex:1.0.3'
}
```
Note:
+ App + referenced libraries exceed 64K methods (65,536 methods)