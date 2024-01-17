import React, { useContext, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Input } from '../../../components/Input'
import { Button } from '../../../components/Button'
import { styles } from "../../../styles/createTasks/form";
import { TasksContext } from "../../../services/context/Tasks";


const Form = ({navigation}) => {

    const {title, setTitle} =  useContext(TasksContext);
    const {content, setContent} =  useContext(TasksContext);

    const {createTask} = useContext(TasksContext);
    const {loading} = useContext(TasksContext);

    const handleTitleChange = (text: string) => {
        setTitle(text);
    }

    const handleContentChange = (text: string) => {
        setContent(text);
    }

    return (
        <View style={styles.container} >

            <Input 
            placeholder="Enter task title"
            value={title}
            onChangeText={handleTitleChange}
            styles={styles.input}
            />

            <Input 
            placeholder="Enter task description"
            value={content}
            onChangeText={handleContentChange}
            styles={styles.input}
            />

            <Button 
            styles={styles.button}
            onPress={ () => createTask(navigation) }
            >
                {loading ? (
                    <ActivityIndicator
                    color="#fff"
                    />
                ) : (
                    <Text style={styles.buttonText} >Create task</Text>
                )}
            </Button>
        </View>
    )
}

export default Form;