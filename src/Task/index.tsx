import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS } from '../colors';
import { styles } from './styles';

type Props = {
  nameTask: string;
  done: boolean;
  onRemove: () => void;
  onCheck: () => void;
};

export default function Task({ nameTask, done, onRemove, onCheck }: Props) {
  return (
    <View
      style={{
        width: '100%',
        padding: 10,
        backgroundColor: COLORS.GRAY_500,
        marginBottom: 8,
        borderRadius: 8,
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      <TouchableOpacity onPress={onCheck}>
        <Ionicons
          name={done ? 'checkmark-circle-outline' : 'ellipse-outline'}
          size={24}
          color={done ? COLORS.PURPLE : COLORS.BLUE}
        />
      </TouchableOpacity>

      <Text
        style={{
          color: done ? COLORS.GRAY_300 : COLORS.GRAY_100,
          marginLeft: 5,
          marginRight: 5,
          flex: 1,
          textDecorationLine: done ? 'line-through' : 'none',
        }}
      >
        {nameTask}
      </Text>
      <TouchableOpacity onPress={onRemove}>
        <Ionicons name="trash-outline" size={24} color={COLORS.GRAY_300} />
      </TouchableOpacity>
    </View>
  );
}
