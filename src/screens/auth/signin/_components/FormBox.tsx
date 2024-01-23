import React, { useContext, useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import type { SignupFormBox } from "../../../../types/Auth";
import { Input } from '../../index';
import { Button } from '../../index';
import { styles } from "../../../../styles/auth/signin/Formbox";
import { AuthManagementContext } from "../../index";
import ErrorsTexts from "./errorsTexts/ErrorsTexts";




const FormBox = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {message} = useContext(AuthManagementContext);
    const {loading} = useContext(AuthManagementContext);
    const {signin} = useContext(AuthManagementContext);

    const inputs: SignupFormBox = [
        {id:1, value:email, changeFunction :(text: string) => setEmail(text) , style:styles.input, placeholder:'Email address', inputSecure:false },
        {id:2, value:password, changeFunction :(text: string) => setPassword(text) , style:styles.input, placeholder:'Password', inputSecure:true },
    ]

    const handleSigninBtnPress = () => {
        signin(email, password);
        setEmail('');
        setPassword('');
    }


    return(
        <View style={styles.container} >

            <ErrorsTexts 
            message={message}
            />

            <FlatList 
            data={inputs}
            renderItem={ (item) => (

                    <Input 
                    styles={item.item.style}
                    value={item.item.value}
                    onChangeText={ (text: string) => item.item.changeFunction(text) }
                    placeholder={item.item.placeholder}
                    placeholderColor="#94a3b8"
                    secureTextEntry={item.item.inputSecure}
                    />

            )}
            keyExtractor={ (item) => ''+item.id }
            />

            <Button 
            styles={styles.button} 
            onPress={handleSigninBtnPress}
            disabled={loading}
            >
                {
                    loading ? (
                        <ActivityIndicator
                        color="#fff"
                        />
                    ):(
                        <Text style={styles.buttonText} >Sign in</Text>
                    )
                }
            </Button>

        </View>
    )
}



export default FormBox;
