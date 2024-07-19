import { StyleSheet, Image, Platform, Alert } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';
import { Button } from '@/components/Button';

export default function AccountPage1() {

  return (
    <ThemedView>
      <ThemedText>Account Page 1</ThemedText>
      <Link href={'account-page2'} asChild><Button text="Account 2" /></Link>
      
    </ThemedView>
  );
}
