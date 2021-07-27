# Coroutines

<pre>
<code class="kotlin" data-trim data-noescape data-line-numbers=""><script type="text/template">
fun refreshStandings() {
    viewModelScope.launch {
        repo.updateStandings()
    }
}
</script></code>
</pre>

<pre>
<code class="kotlin" data-trim data-noescape data-line-numbers=""><script type="text/template">
suspend fun updateStandings() {
    val standingsResult = safeApiRequest {
        apiService.getStandings()
    }

    baseballDao.updateStandings(
        standingsResult.result.convertToTeamStandings(
            baseballDao.getCurrentStandings()
        )
    )
    
}
</script></code>
</pre>

Notes:
* Coroutines
* Async calls in applications
* ViewScopes
* `baseballDao.updateStandings()` is also a `suspend` function