import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { styles } from '../../../../styles/auth/signin/Typographie';

const Typographie = () => {
    return (
        <View >
            <View style={styles.imageContainer}>
                <Image 
                style={styles.image}
                source={require('../../../../assets/icon.png')}
                />
            </View>
            <Text style={styles.titleText} >Sign in</Text>
            <Text style={styles.paragraphText} >Welcome back again</Text>
        </View>
    )
}


export const BottomTypographie = ({navigation}) => {

    const navigateToSignupScreen = () => {
        navigation.navigate('Signup');
    }

    return(
        <View style={styles.bottomTypoContainer}>
            <Text style={styles.bottomTypoText}>Don't have an account?</Text>
            <TouchableOpacity
            style={styles.bottomTypoButton}
            onPress={navigateToSignupScreen} 
            >
                <Text style={styles.bottomTypoLink}>Sign up</Text>
            </TouchableOpacity>
        </View>
    )
}


export default Typographie;
