import React, { useContext } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { AuthManagementContext } from '../../../../services/context/Auth';
import { navigationRef } from '../../../../services/RootNavigation';

const ForgetPasswordLink = () => {


    const handlePress = () => {
        navigationRef.navigate('ForgetPassword');
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity
            onPress={handlePress}
            >
                <Text style={styles.text}>Forget password?</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:25,
    },
    text:{
        color:'#7c3aed'
    }
})

export default ForgetPasswordLink;
