# Kotlin
### Concise ClickListeners

<pre data-fragment-index="0">
    <code class="java hljs" data-trim data-noescape>
        // Java
        button.setOnClickListener(
            new View.OnClickListener() {
                public void onClick(View v) {
                    addItemToDatabase();
                }
            }
        );
    </code>
</pre>
<pre data-fragment-index="1">
    <code class="kotlin hljs" data-trim data-noescape>
        // Kotlin
        button.setOnClickListener { view ->
            addItemToDatabase()
        }
    </code>
</pre>