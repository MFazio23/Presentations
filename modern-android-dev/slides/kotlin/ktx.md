# Kotlin
### KTX (Kotlin Extensions)

<pre>
    <code class="kotlin" data-trim data-noescape data-line-numbers="|1,5|">
    val user: LiveData<User> = liveData {
        // loadUser is a suspend function.
        val data = database.loadUser() 
        emit(data)
    }</code></pre>

<pre>
    <code class="kotlin" data-trim data-noescape data-line-numbers="|3|4,5">
    class PlayersFragment : Fragment() {
    
        val playerListArgs: PlayersFragmentArgs by navArgs()
        val playersListViewModel by
            activityViewModels<PlayerListViewModel>()
            
        ...
        
    }</code>
</pre>

Notes:
+ Kotlin extensions to Android libraries