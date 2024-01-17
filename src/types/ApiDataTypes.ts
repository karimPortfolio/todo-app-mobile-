

export interface FetchTasks {
    data: {
        type?: string,
        message?: string,
        tasks?: {
            id: number
            title:string,
            content: string,
            isCompleted: boolean,
            createdAt: string,
            updatedAt: string
        }[]
    },
    load: boolean
}

export interface TasksData {
    type?: string,
    message?: string,
    tasks?: {
        id: number
        title:string,
        content: string,
        isCompleted: boolean,
        createdAt: string,
        updatedAt: string
    }[]
}



