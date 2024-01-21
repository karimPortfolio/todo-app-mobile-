import React, { useContext } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { AuthManagementContext, Button } from "../../index";
import { GoogleLogo } from "../../index";
import { styles } from "../../../../styles/auth/signup/GoogleoAuthBtn";

const GoogleOAuthBtn = () => {

    const {loading} = useContext(AuthManagementContext);
    const {signinWithGoogle} = useContext(AuthManagementContext);

    return(
        <View style={styles.container} >
            <View style={styles.hrLineContainer}>
                <View style={styles.hrLine}></View>
                <Text>Or</Text>
                <View style={styles.hrLine}></View>
            </View>
            {
                loading ? (
                    <Button 
                    styles={styles.button}
                    onPress={signinWithGoogle}
                    disabled={loading}
                    >
                        <ActivityIndicator 
                        color='#fff'
                        />
                    </Button>
                ) : (
                    <Button 
                    styles={styles.button}
                    onPress={signinWithGoogle}>
                        <GoogleLogo />
                        <Text style={styles.buttonText}>Sign up with Google</Text>
                    </Button>
                )
            }
        </View>
    )
}


export default GoogleOAuthBtn;

