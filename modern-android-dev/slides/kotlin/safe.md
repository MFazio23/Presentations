# Kotlin
### Safe

<pre>
    <code class="kotlin" data-trim data-noescape data-line-numbers="|1|2|12">
        fun getFilterDateFromString(date: String? = null) = 
            date?.let { dateString ->
                val paddedDateString = 
                    if (dateString.length == 8) {
                        dateString + "00" 
                    } else {
                        dateString
                    }
                
                LocalDate.parse(paddedDateString, dateFormat)
                
            } ?: LocalDate.now()
    </code>
</pre>

Notes:
+ Avoid null pointer exceptions
+ Incoming parameters are explicitly marked as nullable
+ Use ?. to safely reference a nullable object
+ ?.let { ... } allows us to have a new, non-null version of our object
+ ?: (Elvis operator) allows for a fallback when an expression is null