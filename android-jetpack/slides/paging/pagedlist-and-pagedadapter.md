## `PagedList and PagedAdapter`

```kotlin
// The Int type argument corresponds to a PositionalDataSource object.
val myConcertDataSource : DataSource.Factory<Int, Concert> =
       concertDao.concertsByDate()

val concertList = LivePagedListBuilder(
    myConcertDataSource, /* page size */ 20).build()
```

```kotlin
private val adapter = ConcertAdapter()
private lateinit var viewModel: ConcertViewModel

override fun onCreate(savedInstanceState: Bundle?) {
    viewModel
        = ViewModelProviders.of(this).get(ConcertViewModel::class.java)
    viewModel.concertList.observe(
        this,
        Observer { adapter.submitList(it) }
    )
}
```

Note:
+ `PagedList`
    + Loads an up-to-date snapshot of your data
    + Loaded from `DataSource`
    + `LivePagedListBuilder` returns `LiveData<PagedList>` 
+ `PagedListAdapter`
    + Sends data to a `RecyclerView`
+ Can fetch data from server, DB, or both
    + Network calls suggest using Retrofit (from Square)
    + DB calls should use Room