### Native Modules

```typescript
import {NativeModules} from 'react-native';

const {TimberModule} = NativeModules;

export enum LogLevel {
    DEBUG = 'Debug',
    VERBOSE = 'Verbose',
    INFO = 'Info',
    ERROR = 'Error',
    WARN = 'Warn',
}

interface TimberInterface {
    log(level: LogLevel, message: string, tag?: string): void;
}

export default TimberModule as TimberInterface;
```


Notes:
- Reference the native modules by name in the JS/TS code
- Recommend creating a wrapper to make other calls cleaner
- No type safety between Native and JS layers (if you're using Typescript)
