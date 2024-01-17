import React from "react";
import { Text, View } from "react-native";
import { styles } from '../../../styles/createTasks/typographie';


const Typographie = () => {


    return(
        <View style={styles.container} >
            <Text style={styles.titleText} >Create new task</Text>
            <Text style={styles.paragrapheText} >What is your next step</Text> 
        </View>
    )
}

export default Typographie;
