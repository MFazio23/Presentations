# Testing

<pre>
<code class="kotlin" data-trim data-noescape data-line-numbers=""><script type="text/template">
@Before
fun initializeDatabaseAndDao() {
    this.database = Room.inMemoryDatabaseBuilder(
        ApplicationProvider.getApplicationContext(),
        PennyDropDatabase::class.java
    )
        .allowMainThreadQueries()
        .setTransactionExecutor(
            Executors.newSingleThreadExecutor()
        )
        .build()

    this.dao = this.database.pennyDropDao()
}

</script></code>
</pre>

Notes:
* Can test things like Room
* ApplicationProvider is from androidx.test