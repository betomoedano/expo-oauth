import type { StyleProp, ViewStyle } from 'react-native';

export type Oauth = {
  id: string;
  name: string;
  email: string;
  avatar: string;
};

export type OnLoadEventPayload = {
  url: string;
};

export type ExpoOauthModuleEvents = {
  onChange: (params: ChangeEventPayload) => void;
};

export type ChangeEventPayload = {
  value: string;
};

export type ExpoOauthViewProps = {
  url: string;
  onLoad: (event: { nativeEvent: OnLoadEventPayload }) => void;
  style?: StyleProp<ViewStyle>;
};
