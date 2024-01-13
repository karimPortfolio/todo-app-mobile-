import React from "react"
import { StyleProp, View, ViewStyle } from "react-native"
import { cardStyles } from '../styles/GlobalComp/card';

interface CardProps {
    styles: StyleProp<ViewStyle>,
    children: React.ReactNode,
}

export const Card: React.FC<CardProps> = ({ styles, children }) => {
    return(
        <View style={[cardStyles.container, styles]}>
            {children}
        </View>
    )
}

export const CardHead: React.FC<CardProps> = ({ styles, children }) => {
    return(
        <View style={styles}>
            {children}
        </View>
    )
}

export const CardContent: React.FC<CardProps> = ({ styles, children }) => {
    return(
        <View style={styles}>
            {children}
        </View>
    )
}

export const CardFooter: React.FC<CardProps> = ({ styles, children }) => {
    return(
        <View style={styles}>
            {children}
        </View>
    )
}

