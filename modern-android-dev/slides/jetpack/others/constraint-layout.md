## `ConstraintLayout`

<pre>
<code class="xml" data-trim data-noescape data-line-numbers=""><script type="text/template">
<TextView
    android:id="@+id/singlePlayerName"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:layout_marginEnd="8dp"
    android:text="@{vm.playerWithStats.player.fullName}"
    android:textSize="32sp"
    app:layout_constraintEnd_toStartOf=
        "@id/singlePlayerNumber"
    app:layout_constraintStart_toEndOf=
        "@id/singlePlayerTeamLogo"
    app:layout_constraintTop_toTopOf="parent"
    tools:text="Ulfric Gardisson" />
</script></code>
</pre>

Notes:
* Recommended approach
* Way less nesting
* Align items based on other components in the view