'use-client'

import React from "react"
import { useState } from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';

import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

import {
  SafeAreaView,
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

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <SafeAreaView>
        <View>
          <ToDoForm addTask = {addTask}/>
          <ToDoList tasks = {tasks}/>
        </View>
      </SafeAreaView>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;