'use client'

import React from "react"

import {
    SafeAreaView,
    StyleSheet,
    Pressable,
    View,
    Text,
    ScrollView,
    TextInput,
    Button
  } from 'react-native';

  function ToDoList({tasks}) {
    return (
        <ScrollView>
            <Pressable>
              <View>
                  {tasks.map((task) => {
                    return (
                      <Text>{task}</Text>
                    )
                })}
              </View>
            </Pressable>
        </ScrollView>
    );
  }

  export default ToDoList