# Espresso

<pre>
<code class="kotlin" data-trim data-noescape data-line-numbers=""><script type="text/template">
@Test
fun testAddingNamedPlayers() {
    typeInPlayerName(R.id.mainPlayer, "Michael")
    typeInPlayerName(R.id.player2, "Emily")
    closeSoftKeyboard()

    onView(withId(R.id.buttonPlayGame)).perform(click())

    onView(withId(R.id.textCurrentPlayerName))
        .check(matches(withText("Michael")))

    onView(withId(R.id.textCurrentStandingsInfo)).check(
        matches(
            allOf(
                withText(containsString("Michael - 10 pennies")),
                withText(containsString("Emily - 10 pennies"))
            )
        )
    )
}
</script></code>
</pre>

Notes:
* UI tests
* Matchers are available