import React, { useContext, useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Input } from '../../../components/Input'
import { Button } from '../../../components/Button'
import { styles } from "../../../styles/createTasks/form";
import { TasksContext } from "../../../services/context/Tasks";


const Form = ({navigation, task}) => {

    const [title, setTitle] =  useState(task.title);
    const [content, setContent] =  useState(task.content);

    const {loading} = useContext(TasksContext);
    const {updateTask} = useContext(TasksContext);

    const handleTitleChange = (text: string) => {
        setTitle(text);
    }

    const handleContentChange = (text: string) => {
        setContent(text);
    }

    const handlePress = async () => {
        await updateTask(task.id, title, content, navigation);
        setTitle('');
        setContent('');
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
            onPress={handlePress}
            >
                {loading ? (
                    <ActivityIndicator
                    color="#fff"
                    />
                ) : (
                    <Text style={styles.buttonText} >Edit task</Text>
                )}
            </Button>
        </View>
    )
}

export default Form;