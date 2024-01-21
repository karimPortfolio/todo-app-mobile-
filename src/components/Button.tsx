import React from "react"
import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native"
import { inputStyles } from "../styles/GlobalComp/input"
import { buttonStyles } from '../styles/GlobalComp/button';

interface ButtonProps {
    styles?: StyleProp<ViewStyle>,
    children: React.ReactNode,
    disabled?: boolean,
    onPress?: () => void,
}

export const Button: React.FC<ButtonProps> = ({ 
    styles,
    children,
    onPress,
    disabled,
}, ...props) => {

    return(
        <View style={buttonStyles.container} >
            <TouchableOpacity
            style={[buttonStyles.button, styles]}
            onPress={onPress}
            disabled={disabled ? disabled : false}
            {...props}
            >
                {children}
            </TouchableOpacity>
        </View>
    )
}

