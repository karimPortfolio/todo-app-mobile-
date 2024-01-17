import { NavigationContainer } from '@react-navigation/native';
import { NativeStackView, createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Home from '../screens/Home/Home';
import Header from '../components/Header';
import CreateTask from '../screens/CreateTask/CreateTask';
import EditTask from '../screens/EditTask/EditTask';


const Navigation = () => {

    const Stack = createNativeStackNavigator();

  return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                name='Home'
                component={Home}
                options={{ header: () => (<Header />)}}
                />

                <Stack.Screen 
                name='Create New Task'
                component={CreateTask}
                />

                <Stack.Screen 
                name='Edit Task'
                component={EditTask}
                />

            </Stack.Navigator>
        </NavigationContainer>
  )
}

export default Navigation;
