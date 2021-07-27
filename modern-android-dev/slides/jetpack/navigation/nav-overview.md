# Navigation

<ul>
    <li class="fragment" data-fragment-index="0">Navigation Graph</li>
    <li class="fragment" data-fragment-index="1">`NavHost`</li>
    <li class="fragment" data-fragment-index="2">`NavController`</li>
</ul>

Notes:
* Nav Graph: XML file that contains all destinations and paths through the app
  * Destinations include activities, fragments, etc.
* NavHost: Empty container that displays destinations; usually fragments
* NavController: Manages swapping out content in the nav host
* All pushing towards a single Activity app