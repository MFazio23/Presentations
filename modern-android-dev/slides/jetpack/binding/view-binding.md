# View Binding

<pre>
<code class="kotlin" data-trim data-noescape data-line-numbers="|1,6|2-5"><script type="text/template">
binding.playerSearchBox.setEndIconOnClickListener {
    binding.playerSearchBoxText.text?.let { text ->
        text.clear()
        searchPlayers()
    }
}
</script></code>
</pre>

Notes:
+ View Binding 
    + Generates binding classes to allow for type-safe component references
    + Good replacement for `findViewById()` calls