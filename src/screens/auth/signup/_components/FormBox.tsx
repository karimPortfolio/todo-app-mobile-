import React, { useContext, useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import type { SignupFormBox } from "../../../../types/Auth";
import { Input } from '../../index';
import { Button } from '../../index';
import { styles } from "../../../../styles/auth/signup/Formbox";
import { AuthManagementContext } from "../../index";
import ErrorsTexts from "./errorsTexts/ErrorsTexts";

const FormBox = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const {result} = useContext(AuthManagementContext);
    const {loading} = useContext(AuthManagementContext);
    const {signup} = useContext(AuthManagementContext);

    //set all the inputs details in array of objects to loop
    const inputs: SignupFormBox = [
        {id:1, field:'name', value:name, changeFunction :(text: string) => setName(text) , style:styles.input, placeholder:'Full name', inputSecure:false },
        {id:2, field:'email', value:email, changeFunction :(text: string) => setEmail(text) , style:styles.input, placeholder:'Email address', inputSecure:false },
        {id:3, field:'password', value:password, changeFunction :(text: string) => setPassword(text) , style:styles.input, placeholder:'Password', inputSecure:true },
        {id:4, field:'passwordConfirm', value:confirmPassword, changeFunction :(text: string) => setConfirmPassword(text) , style:styles.input, placeholder:'Confirm password', inputSecure:true },
    ]

    const handleSignupBtnPress = () => {
        signup(name, email, password, confirmPassword);
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }


    return(
        <View style={styles.container} >

            <ErrorsTexts 
            result={result}
            field='all'
            />

            <FlatList 
            data={inputs}
            renderItem={ (item) => (
                <View>
                    <Input 
                    styles={item.item.style}
                    value={item.item.value}
                    onChangeText={ (text: string) => item.item.changeFunction(text) }
                    placeholder={item.item.placeholder}
                    placeholderColor="#94a3b8"
                    secureTextEntry={item.item.inputSecure}
                    />

                    <ErrorsTexts 
                    result={result}
                    field={item.item.field}
                    />
                </View>
            )}
            keyExtractor={ (item) => ''+item.id }
            />


            <Button 
            styles={styles.button} 
            onPress={handleSignupBtnPress}
            disabled={loading}
            >
                {
                    loading ? (
                        <ActivityIndicator
                        color="#fff"
                        />
                    ):(
                        <Text style={styles.buttonText} >Signup</Text>
                    )
                }
            </Button>

        </View>
    )
}



export default FormBox;
