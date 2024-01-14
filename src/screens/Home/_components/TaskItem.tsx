import React from 'react';
import { 
    Card,
    CardContent,
    CardFooter,
    CardHead 
} from '../../../components/Card';
import { Task } from '../../../types/TasksContainer';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../../../styles/home/taskItem';
import FontAwsome from 'react-native-vector-icons/FontAwesome'



const TaskItem = ({
    task
}:{
    task: Task
}) => {
    return(
        <Card styles={styles.card}>
            <CardHead styles={styles.cardHead}>
                <Text style={styles.headText}>{task.title}</Text>
                <TouchableOpacity>
                    <FontAwsome name='edit' size={20} color='#7c3aed' />
                </TouchableOpacity>
            </CardHead>
            <CardContent>
                <Text style={styles.contentText}>{task.content}</Text>
            </CardContent>
            <CardFooter children>
                
            </CardFooter>
        </Card>
    )
}


export default TaskItem;
