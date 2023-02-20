import React, {useState} from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import {colors, responsiveHeight} from '../../../utils';

interface SelectProps {
  datas: string[];
  width?: number;
  height?: number;
  fontSize?: number;
  label?: string;
}

const Select = ({datas, width, height, label, fontSize}: SelectProps) => {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label({fontSize})}>{label} : </Text>
      <View style={styles.wrapperPicker}>
        <Picker
          selectedValue={selectedValue}
          style={styles.picker({width, height, fontSize})}
          onValueChange={itemValue => setSelectedValue(itemValue)}>
          <Picker.Item label="--Pilih--" value="" />
          {datas.map((item, idx) => (
            <Picker.Item label={item} value={item} key={idx} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default Select;

interface StyleSheetType {
  container: ViewStyle;
  label: any;
  picker: any;
  wrapperPicker: ViewStyle;
}

interface StyleProps {
  width?: number;
  height?: number;
  fontSize?: number;
}

const styles = StyleSheet.create<StyleSheetType>({
  container: {
    marginTop: 10,
    gap: 6,
  },
  label: ({fontSize}: StyleProps) => ({
    fontSize: fontSize ? fontSize : 18,
    fontFamily: 'PublicSans-Regular',
    color: colors.black,
  }),
  picker: ({width, height, fontSize}: StyleProps) => ({
    fontSize: fontSize ? fontSize : 18,
    fontFamily: 'PublicSans-Regular',
    color: colors.black,
    width: width,
    height: height ? height : responsiveHeight(46),
    marginTop: -10,
    marginBottom: 10,
  }),
  wrapperPicker: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 5,
  },
});
