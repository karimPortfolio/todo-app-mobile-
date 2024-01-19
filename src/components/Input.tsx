import React from "react"
import { InputAccessoryViewProps, StyleProp, TextInput, View, ViewStyle } from "react-native"
import { inputStyles } from "../styles/GlobalComp/input"

interface InputProps {
    styles?: StyleProp<ViewStyle>,
    value?: string,
    placeholder?:string,
    placeholderColor?:string,
    secureTextEntry?: boolean,
    onChangeText?: (text: string) => void,
}

export const Input: React.FC<InputProps> = ({ 
    styles,
    value,
    placeholder,
    placeholderColor,
    secureTextEntry,
    onChangeText 
}, ...props) => {

    return(
        <View style={inputStyles.container} >
            <TextInput
            style={[inputStyles.input, styles]}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={placeholderColor ? placeholderColor : '#d1d5db'}
            secureTextEntry={secureTextEntry ? secureTextEntry : false}
            {...props}
            />
        </View>
    )
}

