import React, { useContext, useState } from "react";
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import type { SignupFormBox } from "../../../../types/Auth";
import { Input } from '../../index';
import { Button } from '../../index';
import { styles } from "../../../../styles/auth/signup/Formbox";
import { AuthManagementContext } from "../../index";

const FormBox = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const {loading} = useContext(AuthManagementContext);
    const {signup} = useContext(AuthManagementContext);

    const inputs: SignupFormBox = [
        {id:1, value:name, changeFunction :(text: string) => setName(text) , style:styles.input, placeholder:'Full name', inputSecure:false },
        {id:2, value:email, changeFunction :(text: string) => setEmail(text) , style:styles.input, placeholder:'Email address', inputSecure:false },
        {id:3, value:password, changeFunction :(text: string) => setPassword(text) , style:styles.input, placeholder:'Password', inputSecure:true },
        {id:4, value:confirmPassword, changeFunction :(text: string) => setConfirmPassword(text) , style:styles.input, placeholder:'Confirm password', inputSecure:true },
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
            onPress={handleSignupBtnPress}
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
