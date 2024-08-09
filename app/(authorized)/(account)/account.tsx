import { Button } from "@/components/Button";
import { Separator } from "@/components/Separator";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Href, router } from "expo-router";
import { Alert } from "react-native";

export default function Account() {

  const showAlert = (text: string, route: Href) => {
    Alert.alert('Logout', text, [
      { text:'Cancel', style: 'destructive' }, 
      { text: 'Ok', onPress: () => router.navigate(route) }
    ])
  }

  const handleLogout = () => {
    showAlert('Are you sure you want to log out and see the bug in the console?', '/(login)')
  }

  const handleLogoutToLogin2 = () => {
    showAlert('Are you sure you want to log out and NOT see the bug on the console?', '/(login)/login-page2')
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