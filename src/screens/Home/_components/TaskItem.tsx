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
import { Icon } from '../../../components/Icon';



const TaskItem = ({
    task
}:{
    task: Task
}) => {
    return(
        <Card styles={[styles.card, task.id % 2 === 0 ? styles.cardBg2 : styles.cardBg1]}>
            <CardHead styles={styles.cardHead}>
                <Text 
                style={[styles.headText, task.id % 2 === 0 ? styles.textColor2 : styles.textColor1]}
                >
                    {task.title}
                </Text>
                <TouchableOpacity>
                    <Icon 
                    name='edit' 
                    size={20} 
                    color={task.id % 2 === 0 ? styles.textColor2.color : styles.textColor1.color} 
                    />
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
