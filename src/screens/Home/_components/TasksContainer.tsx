import React, { useContext } from "react";
import { FlatList, View, Text } from "react-native";
import { TasksContext } from "../../../services/context/Tasks";
import type { Task } from "../../../types/TasksContainer";
import TaskItem from "./TaskItem";
import { styles } from "../../../styles/home/taskContainer";


const TasksContainer = ({navigation}) => {

    const {filteredTasks} = useContext(TasksContext);

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
            />
        </View>
    )
}

export default TasksContainer;
