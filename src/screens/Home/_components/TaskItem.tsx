import React, { useContext } from 'react';
import { 
    Card,
    CardContent,
    CardFooter,
    CardHead 
} from '../../../components/Card';
import { Task } from '../../../types/TasksContainer';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../../styles/home/taskItem';
import { Icon } from '../../../components/Icon';
import { TasksContext } from '../../../services/context/Tasks';



const TaskItem = ({
    task,
    navigation
}:{
    task: Task,
    navigation: any
}) => {

    const {completedTask} = useContext(TasksContext);
    const {deleteTask} = useContext(TasksContext);

    const navigateToEditScreen = (task: Task) => {
        navigation.navigate('Edit Task', {task:task});
    }

    return(
        <Card styles={[styles.card, task.id % 2 === 0 ? styles.cardBg1 : styles.cardBg2]}>
            <CardHead styles={styles.cardHead}>
                <Text 
                style={[styles.headText, task.id % 2 === 0 ? styles.textColor1 : styles.textColor2]}
                >
                    {task.title}
                </Text>
                <TouchableOpacity
                onPress={ () => navigateToEditScreen(task) }
                >
                    <Icon 
                    name='edit' 
                    size={20} 
                    color={task.id % 2 === 0 ? styles.textColor1.color : styles.textColor2.color} 
                    />
                </TouchableOpacity>
            </CardHead>

            <CardContent>
                <Text style={styles.contentText}>{task.content}</Text>
            </CardContent>

            <CardFooter styles={styles.cardFooter} >
                <View style={styles.cardFooterContainer} >
                    <TouchableOpacity
                    style={[styles.button, task.id % 2 === 0 ? styles.buttonBgType1 : styles.buttonBgType2]}
                    onPress={ () => completedTask(task.id) }
                    >
                        <Icon 
                        name='check' 
                        size={20} 
                        color={task.id % 2 === 0 ? styles.textColor1.color : styles.textColor2.color} 
                        />
                    </TouchableOpacity>
    
                    <TouchableOpacity
                    style={[styles.button, task.id % 2 === 0 ? styles.buttonBgType1 : styles.buttonBgType2]}
                    onPress={ () => deleteTask(task.id) }
                    >
                        <Icon 
                        name='trash' 
                        size={20} 
                        color={task.id % 2 === 0 ? styles.textColor1.color : styles.textColor2.color} 
                        />
                    </TouchableOpacity>
                </View>

                {
                    task.isCompleted ? (
                        <View >
                            <View 
                            style={[styles.badge, task.id % 2 === 0 ? styles.buttonBgType1 : styles.buttonBgType2]} 
                            >
                                <Text style={[styles.badgeText, task.id % 2 === 0 ? styles.textColor1 : styles.textColor2]} >Completed</Text>
                            </View>
                        </View>
                    ) : null
                }
            </CardFooter>
        </Card>
    )
}


export default TaskItem;
