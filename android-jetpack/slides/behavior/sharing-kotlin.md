## Sharing

<pre class="stretch lang-kotlin hljs"><code data-trim>
private var mShareActionProvider: ShareActionProvider? = null
...

override fun onCreateOptionsMenu(menu: Menu): Boolean {
    menuInflater.inflate(R.menu.share_menu, menu)

    menu.findItem(R.id.menu_item_share).also { menuItem ->
        // Fetch and store ShareActionProvider
        mShareActionProvider = menuItem.actionProvider as? ShareActionProvider
    }

    // Return true to display menu
    return true
}

// Call to update the share intent
private fun setShareIntent(shareIntent: Intent) {
    mShareActionProvider?.setShareIntent(shareIntent)
}
</code></pre>


Note:
+ `ShareActionProvider`
    + Add it to the menu
    + Set up Share `Intent`