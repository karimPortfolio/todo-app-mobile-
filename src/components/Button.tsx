import React from "react"
import { StyleProp, TextInput, TouchableOpacity, View, ViewStyle } from "react-native"
import { inputStyles } from "../styles/GlobalComp/input"
import { buttonStyles } from '../styles/GlobalComp/button';

interface ButtonProps {
    styles?: StyleProp<ViewStyle>,
    children: React.ReactNode,
    onPress?: () => void,
}

export const Button: React.FC<ButtonProps> = ({ 
    styles,
    children,
    onPress 
}, ...props) => {

    return(
        <View style={buttonStyles.container} >
            <TouchableOpacity
            style={[buttonStyles.button, styles]}
            onPress={onPress}
            {...props}
            >
                {children}
            </TouchableOpacity>
        </View>
    )
}

