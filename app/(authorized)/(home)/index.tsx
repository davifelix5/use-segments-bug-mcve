import { Separator } from '@/components/Separator';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


export default function HomePage() {
  return (
    <ThemedView>
       <ThemedText>To reproduce the bug, go to the Account tab</ThemedText>
       <Separator />
       <ThemedText>To see the modal working, click the link bellow</ThemedText>
       <Separator />
    </ThemedView>
  );
}
