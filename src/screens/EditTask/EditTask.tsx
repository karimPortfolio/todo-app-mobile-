import React from "react";
import { SafeAreaView } from "react-native";
import Typographie from "./_components/Typographie";
import Form from "./_components/Form";
import { styles } from "../../styles/createTasks/createTask";
import { Tasks } from "../../services/context/Tasks";


const EditTask = ({navigation, route}) => {

    const task = route.params ? route.params.task : null;

    return(
        <SafeAreaView style={styles.container} >
            <Typographie taskTitle={task.title} />
            <Form 
            navigation={navigation} 
            task={task}
            />
        </SafeAreaView>
    )
}

export default EditTask;


