## Getting the same `ViewModel`

<pre class="stretch lang-kotlin hljs"><code data-trim>
class MasterFragment : Fragment() {
    private lateinit var model: SharedViewModel    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        model = activity?.run {
            ViewModelProviders.of(this).get(SharedViewModel::class.java)
        } ?: throw Exception("Invalid Activity")
    }
}

class DetailFragment : Fragment() {
    private lateinit var model: SharedViewModel
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        model = activity?.run {
            ViewModelProviders.of(this).get(SharedViewModel::class.java)
        } ?: throw Exception("Invalid Activity")
    }
}
</code></pre>

Note:
+