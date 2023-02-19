import React from 'react';
import {StyleSheet, Text, TextInput, View, ViewStyle} from 'react-native';

import {colors} from '../../../utils';

interface InputProps {
  textarea?: boolean;
  width?: number;
  height?: number;
  fontSize?: number;
  label?: string;
  placeholder?: string;
}

const Input = ({
  textarea,
  width,
  height,
  fontSize,
  label,
  placeholder,
}: InputProps) => {
  if (textarea) {
    return (
      <View style={styles.container}>
        <Text style={styles.label({fontSize})}>{label} : </Text>
        <TextInput
          style={styles.textarea({width, height, fontSize})}
          multiline
          numberOfLines={3}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label({fontSize})}>{label} : </Text>
      <TextInput
        style={styles.input({width, height, fontSize})}
        placeholder={placeholder}
      />
    </View>
  );
};

export default Input;

interface StyleSheetType {
  container: ViewStyle;
  label: any;
  input: any;
  textarea: any;
}

interface StyleProps {
  width?: number;
  height?: number;
  fontSize?: number;
}

const styles = StyleSheet.create<StyleSheetType>({
  container: {
    marginTop: 10,
  },
  label: ({fontSize}: StyleProps) => ({
    fontSize: fontSize ? fontSize : 18,
    fontFamily: 'PublicSans-Regular',
    color: colors.black,
  }),
  input: ({width, height, fontSize}: StyleProps) => ({
    fontSize: fontSize ? fontSize : 18,
    fontFamily: 'PublicSans-Regular',
    color: colors.black,
    width: width,
    height: height,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.border,
    paddingVertical: 5,
    paddingHorizontal: 10,
  }),
  textarea: ({fontSize}: StyleProps) => ({
    fontSize: fontSize ? fontSize : 18,
    fontFamily: 'PublicSans-Regular',
    color: colors.black,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.border,
    padding: 10,
    textAlignVertical: 'top',
  }),
});
