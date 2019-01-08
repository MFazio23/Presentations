## `WorkManager and WorkInfo`

```kotlin
// Can also use PeriodicWorkRequest
val compressionWork = OneTimeWorkRequestBuilder<CompressWorker>().build()
WorkManager.getInstance().enqueue(compressionWork)
```

```kotlin
WorkManager.getInstance().getWorkInfoByIdLiveData(compressionWork.id)
    .observe(lifecycleOwner, Observer { workInfo ->
        // Do something with the status
        if (workInfo != null && workInfo.state.isFinished) {
            // ...
        }
    })
```

Note:
+ `WorkManager`: Enqueues/manages work requests
    + Pass `WorkRequest` to `WorkManager`
    + Scheduled in a way to not overload a device
+ `WorkInfo`: Info about a particular task
    + `WorkManager` has `LiveData` for each `WorkRequest` object