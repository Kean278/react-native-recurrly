import "@/global.css";
import { Text, View } from "react-native";
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import {styled} from "nativewind";
import {Link} from "expo-router";
const  SafeAreaView = styled(RNSafeAreaView);


export default function App() {
  return (
      <SafeAreaView className="flex-1 bg-background p-5">

          <Text className="text-7xl font-bold">
              Home
          </Text>

          <Link href="/(auth)/sign-in" className="mt-4 font-sans-bold rounded bg-primary text-white p-4">Go to OnBoarding</Link>
          <Link href="/(auth)/sign-in" className="mt-4 font-sans-bold rounded">Go to Sign in</Link>
          <Link href="/(auth)/sign-in" className="mt-4 font-sans-bold rounded">Go to Sign up</Link>


      </SafeAreaView>
  );
}