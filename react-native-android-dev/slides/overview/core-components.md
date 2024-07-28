#### React Native → Android → iOS
<div>
    <ul style="font-size: 32px;">
        <li><code>&lt;View&gt;</code> → <code>&lt;ViewGroup&gt;</code> → <code>&lt;UIView&gt;</code></li>
        <li><code>&lt;Text&gt;</code> → <code>&lt;TextView&gt;</code> → <code>&lt;UITextView&gt;</code></li>
        <li><code>&lt;Image&gt;</code> → <code>&lt;ImageView&gt;</code> → <code>&lt;UIImageView&gt;</code></li>
        <li><code>&lt;ScrollView&gt;</code> → <code>&lt;ScrollView&gt;</code> → <code>&lt;UIScrollView&gt;</code></li>
        <li><code>&lt;TextInput&gt;</code> → <code>&lt;EditText&gt;</code> → <code>&lt;UITextField&gt;</code></li>
    </ul>
</div>
<img src="img/diagram-ios-android-views.svg" style="margin-top: 0.5em;" height="300" />
Notes:
- View, Text, Image, ScrollView, TextInput
  - All have Android/iOS views under the hood
- FlatList/SectionList
  - Like RecyclerView
  - SectionList makes groupings easier
- Button
  - Not much here
  - “A basic button component that should render nicely on any platform. Supports a minimal level of customization.”
