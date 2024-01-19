import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "../../index";
import { GoogleLogo } from "../../index";
import { styles } from "../../../../styles/auth/signup/GoogleoAuthBtn";

const GoogleOAuthBtn = () => {

    return(
        <View style={styles.container} >
            <View style={styles.hrLineContainer}>
                <View style={styles.hrLine}></View>
                <Text>Or</Text>
                <View style={styles.hrLine}></View>
            </View>
            <Button styles={styles.button}>
                <GoogleLogo />
                <Text style={styles.buttonText}>Signup with Google</Text>
            </Button>
        </View>
    )
}


export default GoogleOAuthBtn;

