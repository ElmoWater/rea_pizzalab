import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import List  from "./components/List";
import {TodoListButton} from "./components/AddButton"




export default function App() {
  const [todos, setTodos] = useState<Array<Todo>>(['123','456']);
  const addTodo: AddTodo = (pizza) => {
    setTodos([...todos, pizza]);
  /*
  newTodo.trim() !== "" &&
  setTodos([...todos, { text: newTodo, complete: false }]);
  */
  console.log('add '+pizza);
  };
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <List item={todos} />
      <TodoListButton addTodo={addTodo}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
