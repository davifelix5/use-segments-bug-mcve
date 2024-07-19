import { Button } from '@/components/Button';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';


export default function HomePage() {
  return (
    <ThemedView>
       <ThemedText>Home index</ThemedText>
       <Link href={'home-page2'} asChild><Button text="Home 2" /></Link>
    </ThemedView>
  );
}
