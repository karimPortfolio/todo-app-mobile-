import React, { useContext, useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StatusBar } from "react-native";
import { Input } from '../../index';
import { Button } from '../../index';
import { styles } from "../../../../styles/auth/signup/Formbox";
import { AuthManagementContext } from "../../index";
import ErrorsTexts from "./errorsTexts/ErrorsTexts";


const FormBox = () => {

    const [email, setEmail] = useState('');

    const {result} = useContext(AuthManagementContext);
    const {loading} = useContext(AuthManagementContext);
    const {forgetPassword} = useContext(AuthManagementContext);

    const changeFunction = (text: string) => setEmail(text);

    const handleResetPasswordBtnPress = () => {
        forgetPassword(email);
        setEmail('');
    }

    useEffect( () => {
        StatusBar.setBarStyle('dark-content');
    },[]) 

    return(
        <View style={styles.container} >

            <StatusBar />

            <ErrorsTexts 
            result={result}
            />

            <Input 
            styles={styles.input}
            value={email}
            onChangeText={ (text: string) => changeFunction(text) }
            placeholder="Email address"
            placeholderColor="#94a3b8"
            />

            <Button 
            styles={styles.button} 
            onPress={handleResetPasswordBtnPress}
            disabled={loading}
            >
                {
                    loading ? (
                        <ActivityIndicator
                        color="#fff"
                        />
                    ):(
                        <Text style={styles.buttonText} >Reset password</Text>
                    )
                }
            </Button>

        </View>
    )
}



export default FormBox;
