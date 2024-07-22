import { Text, type TextProps, StyleSheet } from 'react-native';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText(props: ThemedTextProps) {
  return (
    <Text
      style={[
        styles.default,
        props.style,
      ]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    color: '#11181C',
    fontSize: 16,
    lineHeight: 24,
  },
});
