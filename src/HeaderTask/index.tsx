import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

type Props = {
  name: string;
  count: number;
  textColor: string;
};
export default function Header({ name, textColor, count }: Props) {
  return (
    <View style={styles.containerAlert}>
      <Text style={{ ...styles.textHeaderListNew, color: textColor }}>
        {name}
      </Text>
      <View style={styles.alertView}>
        <Text style={styles.alert}>{count}</Text>
      </View>
    </View>
  );
}
