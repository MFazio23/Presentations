# Navigation

<pre>
<code class="xml" data-trim data-noescape data-line-numbers=""><script type="text/template">
<action
    android:id="@+id/actionGoToTeam"
    app:destination="@id/singleTeamFragment">
    <argument
        android:name="teamId"
        app:argType="string" />
    <argument
        android:name="teamName"
        app:argType="string" />
</action>
</script></code>
</pre>

<pre>
<code class="kotlin" data-trim data-noescape data-line-numbers=""><script type="text/template">
binding.clickListener = View.OnClickListener { view ->
    val action = NavGraphDirections.actionGoToTeam(
        standingsTeamItem.uiTeamStanding.teamId,
        standingsTeamItem.uiTeamStanding.teamName
    )
    view.findNavController().navigate(action)
}
</script></code>
</pre>

Notes:
* Safe args
* Team Standings -> Single Team
* 