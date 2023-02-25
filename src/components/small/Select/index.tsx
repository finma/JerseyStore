import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import {colors, responsiveHeight} from '../../../utils';

interface SelectProps {
  datas: string[];
  width?: number;
  height?: number;
  fontSize?: number;
  label?: string;
  selectedValue?: string;
  onValueChange?: (itemValue: string, itemIndex: number) => void;
}

const Select = ({
  datas,
  width,
  height,
  label,
  fontSize,
  selectedValue,
  onValueChange,
}: SelectProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label({fontSize})}>{label} : </Text>
      <View style={styles.wrapperPicker}>
        <Picker
          selectedValue={selectedValue}
          style={styles.picker({width, height, fontSize})}
          onValueChange={onValueChange}>
          <Picker.Item label="--Pilih--" value="" />
          {datas.map((item: any, idx) => {
            if (label === 'Provinsi') {
              return (
                <Picker.Item
                  label={item.province}
                  value={item.province_id}
                  key={item.province_id}
                />
              );
            } else if (label === 'Kota/Kabupaten') {
              return (
                <Picker.Item
                  label={`${item.type} ${item.city_name}`}
                  value={item.city_id}
                  key={item.city_id}
                />
              );
            }
            return <Picker.Item label={item} value={item} key={idx} />;
          })}
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
