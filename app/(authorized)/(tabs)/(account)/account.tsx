import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';
import { Button } from '@/components/Button';
import { Separator } from '@/components/Separator';

export default function AccountPage1() {

  return (
    <ThemedView>
      <ThemedText>To reproduce the bug, navigate to the next page on the stack using the link bellow</ThemedText>
      <Separator />
      <Link href={'account-page2'} asChild><Button text="Account 2" /></Link>
    </ThemedView>
  );
}
