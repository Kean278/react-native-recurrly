import "@/global.css";
import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function App() {
  return (
      <View className="flex-1 items-center justify-center bg-green-50">
        <Text className="font-bold text-success">
          Welcome to a!
        </Text>
          <Link href="/onboarding" className="mt-4 rounded bg-primary text-white p-4" >
            Go to OnBoarding
          </Link>
          <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary text-white p-4" >
              Sing OUT
          </Link>

      </View>
  );
}