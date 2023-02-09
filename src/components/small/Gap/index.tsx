import React from 'react';
import {View} from 'react-native';

interface GapProps {
  width?: number | string;
  height?: number | string;
}

const Gap = ({width, height}: GapProps) => {
  return <View style={{width, height}} />;
};

export default Gap;
