import { Button } from "@/components/Button";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";

export default function HomePage1() {
  return (
    <ThemedView>
      <ThemedText>Home page 2</ThemedText>
      <Link href={'/(modals)/modal1'} asChild><Button text="Modal 1" /></Link>
    </ThemedView>
  )
}