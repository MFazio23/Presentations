# 100% Java Interop

```kotlin
import io.reactivex.Flowable
import io.reactivex.schedulers.Schedulers

Flowable
    .fromCallable {
        Thread.sleep(1000) //  imitate expensive computation
        "Done"
    }
    .subscribeOn(Schedulers.io())
    .observeOn(Schedulers.single())
    .subscribe(::println, Throwable::printStackTrace)
```

Note:
+ Call existing Java libraries
+ Use Java classes
+ Can call Kotlin classes from Java
+ May need a bit of tweaking