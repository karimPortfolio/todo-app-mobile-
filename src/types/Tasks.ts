import { Dispatch, SetStateAction } from "react"

export type TasksType = {
    id: number,
    title: string,
    content: string,
    isCompleted: boolean
}[]

export interface TaskContext {
    tasks: TasksType,
    setTasks: Dispatch<SetStateAction<TasksType>>,
    filteredTasks: TasksType,
    setFilteredTasks: Dispatch<SetStateAction<TasksType>>,
    numTasks: number,
    numTasksCompleted: number,
    searchTask: (taskTitle: string) => void,
}


