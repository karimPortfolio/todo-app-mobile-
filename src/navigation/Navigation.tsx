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


const screens = [
    {id:1, name:'Auth Screen', component:AuthScreen, options:{ header: () => (<View></View>)}},
    {id:2, name:'Home', component:Home, options:{ header: ({navigation}) => (<Header navigation={navigation} />)}},
    {id:3, name:'Create New Task', component:CreateTask, options:{}},
    {id:4, name:'Edit Task', component:EditTask, options:{}},
    {id:5, name:'Signup', component:Signup, options:{ header: () => (<View style={{ height:40,width:'100%', backgroundColor:'#fff' }}></View>)}},
    {id:6, name:'Signin', component:Signin, options:{ header: () => (<View></View>)}},
]

const Navigation = () => {

    const Stack = createNativeStackNavigator();

  return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator>

                {
                    screens.map( (screen) => (
                        <Stack.Screen
                        key={screen.id}
                        name={screen.name}
                        component={screen.component}
                        options={screen.options}
                        />
                    ))
                }

            </Stack.Navigator>
        </NavigationContainer>
  )
}

export default Navigation;
