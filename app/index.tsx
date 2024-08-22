import { Text, View } from "react-native";
import { Link } from 'expo-router';

export default function Index() {

  const welcome_message = "Welcome to Daniel's app.";

  return (
    <View
      style={{
        
      }}
    >
      <Text>{welcome_message}</Text>
      <Link href={"/profile" as any}>
        <Text style={{ color: 'blue' }}>View Profile</Text>
      </Link>
    </View>
  );
}
