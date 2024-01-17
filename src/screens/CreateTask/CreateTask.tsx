import React from "react";
import { SafeAreaView } from "react-native";
import Typographie from "./_components/Typographie";
import { styles } from "../../styles/createTasks/createTask";
import Form from "./_components/Form";
import { Tasks } from "../../services/context/Tasks";


const CreateTask = ({navigation}) => {
    return(
        <SafeAreaView style={styles.container} >
            <Typographie />
            <Form navigation={navigation} />
        </SafeAreaView>
    )
}

export default CreateTask;


