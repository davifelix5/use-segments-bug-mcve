import { Button } from "@/components/Button";
import { Separator } from "@/components/Separator";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";

export default function LoginPage() {
  return (
    <ThemedView>
      <Link href={'/(tabs)/(home)'} asChild ><Button text="Sign in" /></Link>
      <Separator />
      <Link href={'/register'} asChild><Button text="Register" /></Link>
      <Separator />
      <Link href={'/login-page2'} asChild><Button text="Login 2" /></Link>
    </ThemedView>
  )
}