import { Button } from "@/components/Button";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";

export default function LoginPage() {
  return (
    <ThemedView>
      <Link href={'/(tabs)/(home)'} asChild ><Button text="Sign in" /></Link>
      <Link href={'/register'} asChild><Button text="Register" /></Link>
      <Link href={'/login-page2'} asChild><Button text="Login 2" /></Link>
    </ThemedView>
  )
}