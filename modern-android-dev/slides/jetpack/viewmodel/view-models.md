# Jetpack
### ViewModels

<ul>
    <li class="fragment spaced-item" data-fragment-index="0">Data Ownership</li>
    <li class="fragment spaced-item" data-fragment-index="1">Lifecycle-Aware</li>
    <li class="fragment spaced-item" data-fragment-index="2">Share Data</li>
</ul>

Notes:
+ ViewModels hold your data
+ Make async calls here
+ Lifecycle-aware, live past UI component recreation
    + Turn your phone, activity is recreated, ViewModel lives on with data
+ Use the same ViewModel in multiple Fragments