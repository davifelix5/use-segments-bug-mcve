import { StyleSheet, View, type ViewProps } from 'react-native';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  noPadding?: boolean;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {

  const paddingHorizontal = otherProps.noPadding ? 0 : 16;

  return (
    <View 
      style={[
        { paddingHorizontal }, 
        styles.default,
        style,
      ]} 
      {...otherProps}   
    />
  )
}

const styles = StyleSheet.create({
  default: {
    backgroundColor: '#fff', 
  },
})
