## `Worker and WorkRequest`

```kotlin
class CompressWorker(context : Context, params : WorkerParameters)
    : Worker(context, params) {
    override fun doWork(): Result {
        doWork()
        // Indicate success or failure with your return value:
        // Result.retry() tells WorkManager to try again
        // Result.failure() says not to try again.
        return Result.success()
    }
}
```

```kotlin
// Can also use PeriodicWorkRequest
val compressionWork = OneTimeWorkRequestBuilder<CompressWorker>().build()
WorkManager.getInstance().enqueue(compressionWork)
```

Note:
+ `Worker` specifies what task you need to perform.
    + WorkManager APIs include an abstract `Worker` class
        + Extend this class and perform the work there
+ `WorkRequest` is an individual task
    + Specifies which `Worker` should perform the task
    + Details can be added to `WorkRequests`
        + Circumstances when the request should run (`Constraints`)
    + Abstract class
        + Use `OneTimeWorkRequest` or `PeriodicWorkRequest`
        