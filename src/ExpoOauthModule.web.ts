import { registerWebModule, NativeModule } from 'expo';

import { ExpoOauthModuleEvents } from './ExpoOauth.types';

class ExpoOauthModule extends NativeModule<ExpoOauthModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoOauthModule);
