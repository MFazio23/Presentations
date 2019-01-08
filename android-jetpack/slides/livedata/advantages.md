## LiveData
##### Advantages

+ Only updates components when active
+ No more manual lifecycle handling
+ Ensures your UI matches your data state
+ No memory leaks
+ No crashes due to stopped activities
+ Always up-to-date data
+ Proper configuration changes
+ Sharing resources

Note:
+ LiveData updates the UI when the data changes instead of the UI updating on each load
+ Bound to lifecycle objects
+ Observers clean up after themselves
+ No LiveData updating for inactive components
+ No need to manually handle lifecycle events
+ Updates are ready as soon as an UI component is ready
    + LiveData is updated, but it doesn't alert the UI until it's ready
+ On device rotate, for example, latest data is available without having to reload
+ Wrap LiveData to share around the app
+ Use LiveData with ViewModels