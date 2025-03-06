import * as React from 'react';

import { ExpoOauthViewProps } from './ExpoOauth.types';

export default function ExpoOauthView(props: ExpoOauthViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
