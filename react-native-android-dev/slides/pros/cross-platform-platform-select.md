### Cross-Platform

```typescript
const topMargin = (Platform.OS === 'android') ? 24 : 40;
```

```typescript
const topMargin = Platform.select({
  ios: 40,
  android: 24,
});
```
<img src="img/margin-top.png" height="400">

Notes:
- It _does_ work pretty well with sharing code between platforms
  - Not always, but overall it's good, especially if you use libraries
