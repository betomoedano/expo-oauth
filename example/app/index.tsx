import { View, Text } from "react-native";
import { useOauth, useSession } from "expo-oauth";

export default function Index() {
  const { oauth } = useOauth();
  const { data, status } = useSession();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{oauth?.user?.name}</Text>
      <Text>{status}</Text>
    </View>
  );
}