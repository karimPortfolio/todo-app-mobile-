import React from "react"
import { StyleProp, TextInput, View, ViewStyle } from "react-native"
import { inputStyles } from "../styles/GlobalComp/input"

interface InputProps {
    styles?: StyleProp<ViewStyle>,
    value?: string,
    placeholder?:string,
    onChangeText?: (text: string) => void,
}

export const Input: React.FC<InputProps> = ({ 
    styles,
    value,
    placeholder,
    onChangeText 
}, ...props) => {

    return(
        <View style={inputStyles.container} >
            <TextInput
            style={[inputStyles.input, styles]}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor="#d1d5db"
            {...props}
            />
        </View>
    )
}

