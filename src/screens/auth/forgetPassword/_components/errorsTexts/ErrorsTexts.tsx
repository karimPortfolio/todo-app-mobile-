import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from '../../../index';
import { styles } from "./index";

const ErrorsTexts = ({
    result
}: {
    result: {
        type?: string,
        message?: string
    }
}) => {

    if (!result)
    {
        return null;
    }

    return(
        <View 
        style={result.type === 'failed' ? 
                styles.container2 : 
                styles.successContainer 
            } 
        >
            <Icon 
            name="exclamation-circle"
            size={19}
            color="#fff"
            />

            <Text style={styles.text2} > 
                {result.message}
            </Text>
        </View>
    )
}




export default ErrorsTexts;
