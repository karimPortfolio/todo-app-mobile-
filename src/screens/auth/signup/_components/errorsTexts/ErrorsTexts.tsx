import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from '../../../index';
import { styles } from "./index";

const ErrorsTexts = ({result, field}) => {

    if (!result || result?.element !== field)
    {
        return null;
    }

    return(
        <View 
        style={result.element === 'all' ? styles.container2 : styles.container}
        >
            {
                result.element === 'all' ? (
                    <Icon 
                    name="exclamation-circle"
                    size={19}
                    color="#fff"
                    />
                ) : null
            }
            <Text 
            style={result.element === 'all' ? styles.text2 : styles.text}
            > 
                {result.message} 
            </Text>
        </View>
    )
}




export default ErrorsTexts;
