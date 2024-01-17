import React from "react";
import { Text, View } from "react-native";
import { styles } from '../../../styles/createTasks/typographie';


const Typographie = ({taskTitle}) => {


    return(
        <View style={styles.container} >
            <Text style={styles.titleText} >Edit task</Text>
            <Text style={styles.paragrapheText} > {taskTitle} </Text> 
        </View>
    )
}

export default Typographie;
