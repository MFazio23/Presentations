### Traversing Maps

```java
// Java
public void printTeams(Map<String, Team> teamMap) {
    for(Map.Entry<String, Team> entry : teamMap.entrySet()) {
        System.out.println(entry.getKey() + " - " + entry.getValue());
    }
}
```

```
// Kotlin
fun printTeams(teamMap: Map<String, Team>) {
    for ((key, value) in teamMap) {
        println("$key - $value")
    }
}
```

Note:
+ Deconstructed declaration of the entry