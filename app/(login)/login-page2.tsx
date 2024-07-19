import { Button } from "@/components/Button";
import { Separator } from "@/components/Separator";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";

export default function LoginPage2() {
  return (
    <ThemedView>
      <ThemedText>Login page 2</ThemedText>
      <Separator />
      <Link href={'/(login)'} asChild><Button text="Back to login" /></Link>

    </ThemedView>
  )
}