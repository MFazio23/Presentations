### Reusable components

```typescript jsx
function Section(
    {children, title}: SectionProps
): React.JSX.Element {
    return (
        <View style={styles.sectionContainer}>
            <Text style={...}>
                {title}
            </Text>
            <Text style={...}>
                {children}
            </Text>
        </View>

    );
}
```

```html
<Section title="Learn More">
    Read the docs to discover what to do next:
</Section>
```

Notes:
- One block of code, both platforms
- It's standard React in most ways
- Create reusable components to have in your app
