import React, { createContext, useState, useEffect } from "react";
import type { TaskContext, TasksType } from "../../types/Tasks";


const defaultValue = {
    tasks: [],
    setTasks: (tasks: TasksType) => {},
    filteredTasks: [],
    numTasks: 0,
    numTasksCompleted: 0,
    setFilteredTasks: (filteredTasks: TasksType) => {},
    searchTask: (taskTitle: string) => {}
} as TaskContext

export const TasksContext = createContext(defaultValue);

export const Tasks = ({
    children
}:{
    children: React.ReactNode
}) => {

    const [tasks, setTasks] = useState<TasksType>([
        {id:1, title:'Learn React Native', content:'try to learn react native as soon as possible.', isCompleted:false},
        {id:2, title:'Build projects', content:'try to build projects to practice what you have learned.', isCompleted:false},
        {id:3, title:'Deploy your projects', content:'try to deploy your projects to github or host then in other host providers.', isCompleted:false},
        {id:4, title:'Build portfolio', content:'try to build your own portfolio website to showcase your projects.', isCompleted:false},
    ]);

    const [filteredTasks, setFilteredTasks] = useState<TasksType>(tasks);
    const [numTasks, setNumTasks] = useState<number>(0);
    const [numTasksCompleted, setNumTasksCompleted] = useState<number>(0);

    const searchTask = (taskTitle: string) => {
        const filterTasks = tasks.filter( task => {
            if (task.title.toLowerCase().includes(taskTitle.toLowerCase()))
            {
                return task;
            }
        });
        setFilteredTasks(filterTasks);
    }

    const calcNumTasksCompleted = () => {
        const numTasksCompl = tasks.filter( (task) => task.isCompleted ).length;
        return numTasksCompl;
    }

    useEffect( () => {
        setNumTasks(tasks.length);
        setNumTasksCompleted(calcNumTasksCompleted())
    },[tasks])

    const value = {
        tasks,
        setTasks,
        filteredTasks,
        setFilteredTasks,
        numTasks,
        numTasksCompleted,
        searchTask
    }

    return(
        <TasksContext.Provider value={value}>
            {children}
        </TasksContext.Provider>
    )
}

