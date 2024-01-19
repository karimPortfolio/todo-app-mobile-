import React from "react";
import { StyleSheet, View } from "react-native";
import Typographie, { BottomTypographie } from "./_components/Typographie";
import FormBox from "./_components/FormBox";
import GoogleOAuthBtn from "./_components/GoogleOAuthBtn";


const Signup = ({navigation}) => {

    return(
        <View style={styles.container} >
            <Typographie />
            <FormBox />
            <GoogleOAuthBtn />
            <BottomTypographie 
            navigation={navigation}
            />
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

export default Signup;
