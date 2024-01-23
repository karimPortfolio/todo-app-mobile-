import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from '../../../index';
import { styles } from "./index";

const ErrorsTexts = ({message}) => {

    if (!message)
    {
        return null;
    }

    return(
        <View style={styles.container2} >
            <Icon 
            name="exclamation-circle"
            size={19}
            color="#fff"
            />

            <Text style={styles.text2} > 
                {message}
            </Text>
        </View>
    )
}




export default ErrorsTexts;
