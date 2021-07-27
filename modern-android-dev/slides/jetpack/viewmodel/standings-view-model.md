# ViewModels

<pre>
    <code class="kotlin" data-trim data-noescape data-line-numbers="|1,2|5,6|10-16|"><script type="text/template">
class StandingsViewModel(val application: Application) :
  AndroidViewModel(application) {
  
  private val repo: BaseballRepository  
  val standings: LiveData<List<UITeamStanding>>
  val errorMessage = MutableLiveData("")
  
  // Initialization logic
  
  fun refreshStandings() {
    viewModelScope.launch {
      repo.updateStandings().getErrorMessage(
        getApplication()
      )?.let { message -> errorMessage.value = message }
    }
  }
}</script></code>
</pre>

Notes:
+ This is the view model that runs the Standings screen for the ABL app
+ ViewModel and AndroidViewModel (which allows access to the application)
    + Do _not_ hold a reference to an Activity/Fragment in a ViewModel, breaks lifecycle
+ LiveData automatically updates UI components if they're active
    + Will update automatically when DB is updated
+ Refresh in the backend will display in front end automatically