import React from "react";
import { Text, View } from "react-native";
import { Button } from '../../../components/Button';
import { Icon } from "../../../components/Icon";
import { styles } from "../../../styles/home/AddTaskBtn";

const AddTaskButton = ({navigation}) => {

    const navigateToCreateTaskScreen = () => {
        navigation.navigate('Create New Task');
    }

    return (
        <View style={styles.container} >
            <Button 
            styles={styles.button} 
            onPress={navigateToCreateTaskScreen}
            >
                <Icon
                name="plus"
                color="#fff"
                size={17}
                />
                <Text style={styles.text} >Add Task</Text>
            </Button>
        </View>
    )
}

export default AddTaskButton;
