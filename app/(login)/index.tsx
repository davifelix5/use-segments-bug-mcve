import { Button } from "@/components/Button";
import { Separator } from "@/components/Separator";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";

export default function LoginPage() {
  return (
    <ThemedView>
      <Separator />
      <ThemedText>To reproduce, sign in.</ThemedText>
      <Separator />
      <Link href={'/(authorized)/(home)'} asChild ><Button text="Sign in" /></Link>
      <Separator />
      <Link href={'/login-page2'} asChild><Button text="Login 2" /></Link>
    </ThemedView>
  )
}