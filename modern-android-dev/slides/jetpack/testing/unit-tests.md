# Testing

<pre>
<code class="kotlin" data-trim data-noescape data-line-numbers=""><script type="text/template">
@Test
fun `Test nextPlayer() via pass() function`() {
    val currentPlayer = testPlayers.first { 
        it.playerName == "Emily"
    }
    val nextPlayer = testPlayers.first {
        it.playerName == "Hazel"
    }

    checkNextPlayer(currentPlayer, nextPlayer)
}

this.testPlayers = listOf(
    Player("Michael", true),
    Player("Emily", true),
    Player("Hazel", true),
    Player("Riverboat Ron", false, selectedAI = AI.basicAI[5])
)
</script></code>
</pre>

Notes:
* JUnit tests are available
* Can test any non-Android code in standard JUnit form