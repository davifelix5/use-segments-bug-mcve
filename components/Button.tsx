import { TouchableOpacity, TouchableOpacityProps } from "react-native-gesture-handler"
import { ThemedView } from "./ThemedView"
import { ThemedText } from "./ThemedText"
import React from "react"

interface ButtonProps extends TouchableOpacityProps {
  text: string;
}

export const Button = React.forwardRef<TouchableOpacity, ButtonProps>((props, ref) => {

  const { text } = props;

  return (
    <TouchableOpacity {...props} ref={ref}>
        <ThemedView style={{ padding: 8, backgroundColor: 'cyan' }}>
          <ThemedText>{text}</ThemedText>
        </ThemedView>
      </TouchableOpacity>
  )
})