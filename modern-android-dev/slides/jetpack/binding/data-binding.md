# Data Binding

<pre>
<code class="xml" data-trim data-noescape data-line-numbers=""><script type="text/template">
<data>
    <import type="dev.mfazio.abl.teams.UITeam" />

    <variable
      name="vm"
      type="dev.mfazio.abl.players.SinglePlayerViewModel" />
</data>
</script></code>
</pre>

<pre>
<code class="xml" data-trim data-noescape data-line-numbers=""><script type="text/template">
  <TextView
    android:id="@+id/singlePlayerNumber"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:layout_marginEnd="8dp"
    android:text='@{"#" + vm.playerWithStats.player.number}'
    ...
    />
</script></code>
</pre>

```xml
app:slot="@{vm.slots[1]}"
```

Notes:
+ Data Binding
  + Binding expression syntax in XML
  + Wrap layout file in general `<layout>` tag
  + Add `<data>` tags
  + Write expression values for any attribute
  + Send custom attributes into other layout files via app namespace
    + Slot object into Slot layout file (`<include>`)