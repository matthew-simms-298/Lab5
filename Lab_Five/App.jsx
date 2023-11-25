'use-client'

import React from "react"
import { useState } from "react"
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Button,
  useColorScheme,
  View,
} from 'react-native';

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ])

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };

  return (
    <SafeAreaView>
      <View>
        <ToDoForm addTask = {addTask}/>
        <ToDoList tasks = {tasks}/>
      </View>
    </SafeAreaView>
  );
}

export default App;