import React, { useContext } from "react";
import { FlatList, View, Text, ActivityIndicator } from "react-native";
import { TasksContext } from "../../../services/context/Tasks";
import type { Task } from "../../../types/TasksContainer";
import TaskItem from "./TaskItem";
import { styles } from "../../../styles/home/taskContainer";


const TasksContainer = ({navigation}) => {

    const {filteredTasks} = useContext(TasksContext);
    const {loading} = useContext(TasksContext);

    if (filteredTasks.length === 0) 
    {
        return (
            <View style={styles.notFoundContainer}>
                <Text style={styles.notFoundText} >No tasks found, Try to create one.</Text>
            </View>
        )
    }

    if (loading)
    {
        return(
            <View style={[styles.container, {paddingTop:90}]}>
                <ActivityIndicator
                color="#fff"
                />
            </View>
        )
    }

    return(
        <View style={styles.container}>

            <FlatList 
            style={styles.listContainer}
            data={filteredTasks}
            renderItem={ ({item}) => (
                <TaskItem 
                task={item} 
                navigation={navigation} 
                />
            )}
            keyExtractor={ (item: Task, index: number) => 'item'+item.id }
            inverted={true}
            />

        </View>
    )
}

export default TasksContainer;
