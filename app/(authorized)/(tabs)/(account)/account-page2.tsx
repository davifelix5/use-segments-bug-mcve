import { Button } from "@/components/Button";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { router } from "expo-router";
import { Alert } from "react-native";

export default function Account2() {

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to log out and see the bug in the console?', [{
      onPress: () => router.navigate('/(login)/')
    }])
  }

  const handleLogoutToLogin2 = () => {
    Alert.alert('Logout', 'Are you sure you want to log out and NOT see the bug on the console?', [{
      onPress: () => router.navigate('/(login)/login-page2')
    }])
  }

  return (
    <ThemedView>
      <ThemedText>Account 2</ThemedText>
      <Button text="Log out" onPress={handleLogout} />
      <Button text="Log out (to login-page2)" onPress={handleLogoutToLogin2} />
     </ThemedView>
  )
}