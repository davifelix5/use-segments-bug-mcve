import { Button } from '@/components/Button';
import { Separator } from '@/components/Separator';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';


export default function HomePage() {
  return (
    <ThemedView>
       <ThemedText>To reproduce the bug, go to the Account tab</ThemedText>
       <Separator />
       <ThemedText>To see the modal working, go to Home 2 with the link bellow</ThemedText>
       <Separator />
       <Link href={'home-page2'} asChild><Button text="Home 2" /></Link>
    </ThemedView>
  );
}
