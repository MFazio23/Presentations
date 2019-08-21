### Null Scenarios

+ throw NullPointerException();
+ Usage of the `!!` operator
+ Data inconsistency related to initialization
    + An uninitialized `this` available in a constructor and is used somewhere
    + A superclass constructor calls an open member whose implementation uses uninitialized state
+ Java interop
    + Access a null member reference of a platform type
    + Generic types with incorrect nullability
    + "Other issues" caused by external Java code


Note:
+ !! == Not-null assertion operator
    + Converts any value to a non-null type or throws an exception if null
    + "[!!] is for NPE-lovers"
    + "Hold my beer" operator
+ Incorrect nullability
    + Add null to MutableList<String> instead of MutableList<String?>