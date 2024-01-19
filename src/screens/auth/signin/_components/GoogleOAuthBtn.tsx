import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AuthManagementContext, Button } from "../../index";
import { GoogleLogo } from "../../index";
import { styles } from "../../../../styles/auth/signin/GoogleoAuthBtn";

const GoogleOAuthBtn = () => {

    const {signinWithGoogle} = useContext(AuthManagementContext);

    return(
        <View style={styles.container} >
            <View style={styles.hrLineContainer}>
                <View style={styles.hrLine}></View>
                <Text>Or</Text>
                <View style={styles.hrLine}></View>
            </View>
            <Button 
            styles={styles.button}
            onPress={signinWithGoogle}>
                <GoogleLogo />
                <Text style={styles.buttonText}>Sign in with Google</Text>
            </Button>
        </View>
    )
}


export default GoogleOAuthBtn;

