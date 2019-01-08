## Sharing
```xml
<menu xmlns:android="http://schemas.android.com/apk/res/android">
    <item
            android:id="@+id/menu_item_share"
            android:showAsAction="ifRoom"
            android:title="Share"
            android:actionProviderClass=
                "android.widget.ShareActionProvider" />
    ...
</menu>
```


Note:
+ `ShareActionProvider`
    + Add it to the menu
    + Set up Share `Intent`