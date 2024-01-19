import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { styles } from '../../../../styles/auth/signup/Typographie';

const Typographie = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.titleText} >Sign up</Text>
            <Text style={styles.paragraphText} >Begin your journey with us</Text>
        </View>
    )
}

export const BottomTypographie = ({navigation}) => {

    const navigateToSigninScreen = () => {
        navigation.navigate('Signin');
    }

    return(
        <View style={styles.bottomTypoContainer}>
            <Text style={styles.bottomTypoText}>Already have an account?</Text>
            <TouchableOpacity
            style={styles.bottomTypoButton}
            onPress={navigateToSigninScreen} 
            >
                <Text style={styles.bottomTypoLink}>Sign in</Text>
            </TouchableOpacity>
        </View>
    )
}



export default Typographie;
