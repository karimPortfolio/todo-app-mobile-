import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Home from '../screens/Home/Home';
import Header from '../components/Header';
import CreateTask from '../screens/CreateTask/CreateTask';
import EditTask from '../screens/EditTask/EditTask';
import Signup from '../screens/auth/signup/Signup';
import AuthScreen from '../screens/auth/AuthScreen';
import { View } from 'react-native';
import { navigationRef } from '../services/RootNavigation';
import Signin from '../screens/auth/signin/Signin';


const Navigation = () => {

    const Stack = createNativeStackNavigator();

  return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator>

                <Stack.Screen 
                name='Auth Screen'
                component={AuthScreen}
                options={{ header: () => (<View></View>)}}
                />

                <Stack.Screen
                name='Home'
                component={Home}
                options={{ header: ({navigation}) => (
                    <Header navigation={navigation} />
                )}}
                />

                <Stack.Screen 
                name='Create New Task'
                component={CreateTask}
                />

                <Stack.Screen 
                name='Edit Task'
                component={EditTask}
                />


                <Stack.Screen 
                name='Signup'
                component={Signup}
                options={{ header: () => (<View></View>)}}
                />


                <Stack.Screen 
                name='Signin'
                component={Signin}
                options={{ header: () => (<View></View>)}}
                />

            </Stack.Navigator>
        </NavigationContainer>
  )
}

export default Navigation;
