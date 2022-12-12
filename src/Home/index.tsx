import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { COLORS } from '../colors';
import Header from '../HeaderTask';

const logo = require('../../assets/logo.png');

import { styles } from './styles';
import Task from '../Task';

type TaskType = {
  nameTask: string;
  done: boolean;
};

export default function Home() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [task, setTask] = useState('');

  function handleTaskAdd() {
    setTasks((prevState) => [...prevState, { done: false, nameTask: task }]);
    setTask('');
  }

  function handleRemoveTask(object: TaskType) {
    setTasks((prevState) => prevState.filter((task) => task !== object));
  }

  function handleCheckTask(object: TaskType) {
    setTasks((prevState) =>
      prevState.filter((task) => {
        if (task === object) {
          return (task.done = true);
        }
        return task;
      })
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.logo}>
          <Image source={logo} />
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicionar uma nova tarefa"
            placeholderTextColor={COLORS.GRAY_300}
            onChangeText={setTask}
            value={task}
          />
          <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
            <Ionicons
              name="add-circle-outline"
              size={24}
              color={COLORS.GRAY_100}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.headerList}>
        <Header
          count={tasks.filter((item) => item.done === false).length}
          textColor={COLORS.BLUE}
          name="Criadas"
        />
        <Header
          count={tasks.filter((item) => item.done === true).length}
          textColor={COLORS.PURPLE}
          name="Completadas"
        />
      </View>

      <View style={styles.line} />
      <FlatList
        keyExtractor={(item) => item.nameTask}
        data={tasks}
        style={{ paddingLeft: 24, paddingRight: 24 }}
        renderItem={({ item }) => (
          <Task
            nameTask={item.nameTask}
            done={item.done}
            onCheck={() => handleCheckTask(item)}
            onRemove={() => handleRemoveTask(item)}
          />
        )}
        ListEmptyComponent={() => (
          <View style={{ alignItems: 'center' }}>
            <Ionicons
              name="clipboard-outline"
              size={56}
              color={COLORS.GRAY_300}
            />
            <Text style={styles.emptyTextTitle}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.emptyTextSubTitle}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
    </View>
  );
}
