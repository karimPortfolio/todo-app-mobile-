import React, { useContext } from "react";
import { View, Text } from 'react-native'
import { 
    Card,
    CardContent,
    CardHead 
} from "../../../components/Card";
import { styles } from "../../../styles/home/tasksAnalytics";
import { TasksContext } from "../../../services/context/Tasks";

const TasksAnalytics = () => {

    const {tasks, numTasks, numTasksCompleted} = useContext(TasksContext);

    return (
        <View style={styles.container} >
            <View style={styles.cardContainer}>
                <Card styles={styles.card1}>
                    <CardHead styles={styles.cardHeader}>
                        <Text style={[styles.headText, {color:'#7c3aed'}]}>Tasks</Text>
                    </CardHead>
                    <CardContent>
                        <Text style={styles.contentText} >{numTasks}</Text>
                    </CardContent>
                </Card>
            </View>

            <View style={styles.cardContainer}>
                <Card styles={styles.card2}>
                    <CardHead styles={styles.cardHeader}>
                        <Text style={[styles.headText, {color:'#0284c7'}]}>Completed</Text>
                    </CardHead>
                    <CardContent>
                        <Text style={styles.contentText}>{numTasksCompleted} / {numTasks}</Text>
                    </CardContent>
                </Card>
            </View>
        </View>
    )
}

export default TasksAnalytics;
