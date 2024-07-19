import { Button } from "@/components/Button";
import { Separator } from "@/components/Separator";
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
      <ThemedText>To see the bug happening, logout using the first button, segment log appears twice</ThemedText>
      <Separator />
      <ThemedText>To see the right behavior, logout using the second button, segment log appears once</ThemedText>
      <Separator />
      <ThemedText>PS: clear the console before logging out to better see the error</ThemedText>
      <Separator />
      <Button text="Log out" onPress={handleLogout} />
      <Separator />
      <Button text="Log out (to login-page2)" onPress={handleLogoutToLogin2} />
     </ThemedView>
  )
}