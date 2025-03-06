import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoOauthViewProps } from './ExpoOauth.types';

const NativeView: React.ComponentType<ExpoOauthViewProps> =
  requireNativeView('ExpoOauth');

export default function ExpoOauthView(props: ExpoOauthViewProps) {
  return <NativeView {...props} />;
}
