### Data Classes

```
// Java
public class Person {
    private final String first;
    private final String last;
    private int age;

    public Person(String first, String last, int age) {
        this.first = first;
        this.last = last;
        this.age = age;
    }

    public String getFirst() {
        return first;
    }

    public String getLast() {
        return last;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
```

```
// Kotlin
data class Person(val first: String, val last: String, var age: Int)
```

Note:
+ Compiler automatically creates:
    + `equals()` and `hashCode()`
    + `toString()` -> `Person(first=Michael, last=Fazio, age=33)`
    + `componentN()` functions in order of declaration
        + e.g. val first = person.component1(), val age = person.component3()
+ Cannot be `abstract`, `open`, `sealed`, or `inner`
     