import { Dispatch, SetStateAction } from "react"

export type TasksType = {
    id: number,
    title: string,
    content: string,
    isCompleted: boolean
}[]

export interface TaskContext {
    tasks: TasksType,
    loading: boolean,
    title: string,
    setTitle: Dispatch<SetStateAction<string>>,
    content: string,
    setContent: Dispatch<SetStateAction<string>>,
    filteredTasks: TasksType,
    numTasks: number,
    numTasksCompleted: number,
    searchTask: (taskTitle: string) => void,
    createTask: (navigation: any) => void,
    completedTask: (id: number) => void,
    updateTask: (id: number, title: string, content: string, navigation: any) => void,
    deleteTask: (id: number) => void,
}


