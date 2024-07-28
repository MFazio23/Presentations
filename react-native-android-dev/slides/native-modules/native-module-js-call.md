### Native Modules

```typescript
import {NativeModules} from 'react-native';

const {PrefsModule} = NativeModules;

interface PrefsInterface {
    getValue(id: string): Promise<string>;
    setValue(id: string, value: string): void;
}

export default PrefsModule as PrefsInterface;
```

```typescript
import {PrefsModule} from './modules/PrefsModule';

const currentValue = await PrefsModule.getValue('valueId');

PrefsModule.setValue('valueId', 'newValue');
```

Notes:
- 
