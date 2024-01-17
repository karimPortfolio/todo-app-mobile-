import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation/Navigation';
import { Tasks } from './services/context/Tasks';

export default function App() {
  return (
    <Tasks>
      <Navigation />
    </Tasks>
  );
}

