# Room

<pre>
    <code class="kotlin" data-trim data-noescape data-line-numbers=""><script type="text/template">
@Dao
abstract class BaseballDao {
    @Insert
    abstract suspend fun insertStandings(
        standings: List<TeamStanding>
    )

    @Update
    abstract suspend fun updateStandings(
        standings: List<TeamStanding>
    )

    @Query("SELECT * FROM standings")
    abstract fun getStandings():
        LiveData<List<TeamStanding>>

    ...
}
    </script></code>
</pre>


Notes:
* DAO
* Built-in C(R)UD commands