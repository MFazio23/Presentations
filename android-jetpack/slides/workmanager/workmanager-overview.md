## WorkManager

<img src="img/background-task.png">

Note:
+ Runs deferrable, async tasks
+ Determines best way to run based on device API level and app state
    + If app's running, a new thread can run the task
    + If the app is _not_ running, a background task is scheduled
        + Could use `JobScheduler`, `Firebase JobDispatcher`, or `AlarmManager`
            + Depends on Device API level and included dependencies
+ Intended for tasks that need to run even if the app quits
    + Use `ThreadPools` for tasks that can be stopped when app closes