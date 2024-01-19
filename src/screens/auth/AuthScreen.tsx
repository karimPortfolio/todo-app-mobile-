import React, { useContext } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Button } from '../../components/Button'
import { styles } from "../../styles/auth/AuthScreen";
import { AuthManagementContext } from '../../services/context/Auth';
import { TasksContext } from "../../services/context/Tasks";

const AuthScreen = ({navigation}) => {

    const {AUTH} = useContext(AuthManagementContext);
    const {fetchTasks} = useContext(TasksContext);

    const navigateToHomeScreen = async () => {
        await fetchTasks();
        navigation.navigate('Home');
    }

    const navigateToSigninScreen = () => {
        navigation.navigate('Signin');
    }
    

    return(
        <SafeAreaView style={{ backgroundColor:'#161a2b' }} >
            <View style={styles.container}>
                <Text style={styles.titleText} >Focus on what matter</Text>
                <Text style={styles.paragraphText} >Manage your daily tasks with us</Text>
                <View style={styles.imageContainer} >
                    <Image 
                    source={require('../../assets/authScreenImg.png')}
                    style={styles.image}
                    width={200}
                    height={200}
                    />
                </View>
                <View style={styles.buttonsContainer} >
                    <Button 
                    styles={styles.button1} 
                    onPress={navigateToHomeScreen}
                    >
                        <Text style={styles.button1Text} >Get Started</Text>
                    </Button>
                    {
                        !AUTH ? (
                            <Button 
                            styles={styles.button2} 
                            onPress={navigateToSigninScreen}
                            >
                                <Text style={styles.button2Text} >Sign in</Text>
                            </Button>
                        ): null
                    }
                </View>
            </View>
        </SafeAreaView>
    )
}


export default AuthScreen;

