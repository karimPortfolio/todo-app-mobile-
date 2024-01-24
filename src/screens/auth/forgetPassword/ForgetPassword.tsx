import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Typographie from "./_components/Typographie";
import FormBox from "./_components/FormBox";

const ForgetPassword = ({navigation}) => {

    return(
        <View style={styles.container}>
            <Typographie />
            <FormBox />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:60,
        paddingStart:25,
        paddingEnd:25,
        backgroundColor:'#fff',
        height:'100%'
    }
})

export default ForgetPassword;