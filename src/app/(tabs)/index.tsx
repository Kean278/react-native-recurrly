import "@/global.css";
import { Text, View } from "react-native";
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import {styled} from "nativewind";
const  SafeAreaView = styled(RNSafeAreaView);


export default function App() {
  return (
      <SafeAreaView className="flex-1 bg-background p-5">
        <Text className="text-xl font-bold text-success">
            Welcome to the app!!!
        </Text>

      </SafeAreaView>
  );
}