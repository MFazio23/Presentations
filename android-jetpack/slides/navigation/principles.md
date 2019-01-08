## Navigation
#### Principles

+ Fixed start destination
+ Nav state should be a stack of destinations
+ Up button never exits the app
+ Up and back are identical in your app
+ Deep linking and navigating to a destination should have the same stack

Note:
+ One spot where the app starts from the launcher
    + Same screen the user sees before exiting the app when pressing back
+ Start destination at the bottom, interact with the top of the stack
+ Up button in the nav bar should _never_ exit the app
    + When entering with a deep link, should go to start destination
+ Up and system back button should be the same unless in the start destination
+ Up/back should be able to get the user back to the start destination
+ Deep linking removes an existing navigation stack
    + Replaced with the deep link's navigation stack