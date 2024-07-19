import { Button } from "@/components/Button";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";

export default function RegisterPage1() {
  return (
    <ThemedView>
      <ThemedText>Register page 1</ThemedText>
      <Link href={'/register/register-page2'} asChild><Button text="Register 2" /></Link>
    </ThemedView>
  )
}
