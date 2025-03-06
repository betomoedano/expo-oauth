import { NativeModule, requireNativeModule } from 'expo';

import { ExpoOauthModuleEvents } from './ExpoOauth.types';

declare class ExpoOauthModule extends NativeModule<ExpoOauthModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoOauthModule>('ExpoOauth');
