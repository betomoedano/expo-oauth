import { View, Text } from "react-native";
import { useOauth } from "expo-oauth";

export default function Index() {
  const { oauth } = useOauth();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{oauth?.name}</Text>
    </View>
  );
}