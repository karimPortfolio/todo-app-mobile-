import React, { createContext, useState, useEffect } from "react";
import type { TaskContext, TasksType } from "../../types/Tasks";
import { PUBLIC_API_ENDPOINT_HOST } from '@env';


const defaultValue = {
    tasks: [],
    loading: false,
    title: '',
    setTitle: (title: string) => {},
    content:'',
    setContent: (content: string) => {},
    filteredTasks: [],
    numTasks: 0,
    numTasksCompleted: 0,
    searchTask: (taskTitle: string) => {},
    createTask: (navigation: any) => {},
    completedTask: (id: number) => {},
    updateTask: (id: number, title: string, content: string, navigation: any) => {},
    deleteTask: (id: number) => {},
} as TaskContext

export const TasksContext = createContext(defaultValue);

export const Tasks = ({
    children
}:{
    children: React.ReactNode
}) => {

    const [tasks, setTasks] = useState<TasksType>([]);

    const [loading, setLoading] = useState<boolean>(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [filteredTasks, setFilteredTasks] = useState<TasksType>(tasks);
    const [numTasks, setNumTasks] = useState<number>(0);
    const [numTasksCompleted, setNumTasksCompleted] = useState<number>(0);
    const [message, setMessage] = useState('');


    //get tasks from server using RESTFulAPI
    const fetchTasks = async () => {
        const url = `${PUBLIC_API_ENDPOINT_HOST}/tasks/1`;

        console.log(url);
        try
        {
            setLoading(true);
            const response = await fetch(url);
            const result = await response.json();
            if (result.type === 'failed' && result.message)
            {
                setMessage(result.message);
                alert(result.message);
            } 
            else if (result.type === 'success' && result.tasks)
            {
                setTasks(result.tasks);
            }
        }
        catch(err)
        {
            console.log(err);
        }
        finally
        {
            setLoading(false);
        }
    }

    //search and filter tasks
    const searchTask = (taskTitle: string) => {
        const filterTasks = tasks.filter( task => {
            if (task.title.toLowerCase().includes(taskTitle.toLowerCase()))
            {
                return task;
            }
        });
        setFilteredTasks(filterTasks);
    }

    //calc number of tasks completed
    const calcNumTasksCompleted = () => {
        const numTasksCompl = tasks.filter( (task) => task.isCompleted ).length;
        return numTasksCompl;
    }

    //handle creation of new task
    const createTask = (navigation: any) => {

        setLoading(true);
        setTimeout( async () => {
            
            const url = `${PUBLIC_API_ENDPOINT_HOST}/tasks/1/store`;

            try
            {
                const newTask = {
                    title:title,
                    content:content
                }
                const response = await fetch(url, {
                    method:'POST',
                    body: JSON.stringify(newTask),
                    headers:{
                        'Content-type':'application/json',
                    }
                })
                const result = await response.json();
                if (result.type === 'failed')
                {
                    setMessage(result.message);
                } 
                else if (result.type === 'success')
                {
                    setTasks(result.tasks);
                }
                alert(result.message);
            }
            catch (err)
            {
                console.log(err);
            }
            finally
            {
                setLoading(false);
                navigation.navigate('Home');
            }

        }, 3000);
        
    };

    //completed task
    const completedTask = async (id: number) => { 

        setLoading(true);
        const url = `${PUBLIC_API_ENDPOINT_HOST}/tasks/${id}/completed`;
        
        try
        {
            const response = await fetch(url, { method:'PUT'});
            const result = await response.json();
            if (result.type === 'failed' && result.message)
            {
                setMessage(result.message);
                console.log(result);
            } 
            else if (result.type === 'success' && result.tasks)
            {
                console.log(result);
                setTasks(result.tasks);
            }
            alert(result.message);

        }
        catch (err)
        {
            console.log(err);
        }
        finally
        {
            setLoading(false);
            fetchTasks();
        }
    }


    //update task
    const updateTask =  (id: number, title: string, content: string, navigation: any) => {

        setLoading(true);

        setTimeout( async () => {

            const url = `${PUBLIC_API_ENDPOINT_HOST}/tasks/${id}/update`;

            try
            {
    
                const task = {
                    title: title,
                    content: content,
                }
    
                const response = await fetch(url, {
                    method:'PUT',
                    body: JSON.stringify(task),
                    headers: {
                        'Content-type': 'application/json',
                    }
                });
                const result = await response.json();
    
                if (result.type === 'failed' && result.message)
                {
                    setMessage(result.message);
                    console.log(result);
                } 
                else if (result.type === 'success' && result.tasks)
                {
                    console.log(result);
                    setTasks(result.tasks);
                }

                alert(result.message);
                
            }
            catch (err)
            {
                console.log(err);
            }
            finally
            {
                setLoading(false);
                fetchTasks();
                navigation.navigate('Home');
            }
            

        },3000)
    }

    //delete task
    const deleteTask = async (id: number) => {

        const url = `${PUBLIC_API_ENDPOINT_HOST}/tasks/${id}/destroy`;

        try
        {

            const response = await fetch(url, {method:'DELETE'});
            const result = await response.json();

            if (result.type === 'failed' && result.message)
            {
                setMessage(result.message);
                console.log(result);
            } 
            else if (result.type === 'success' && result.tasks)
            {
                console.log(result);
                setTasks(result.tasks);
            }

            alert(result.message);
            
        }
        catch (err)
        {
            console.log(err);
        }
        finally
        {
            setLoading(false);
            fetchTasks();
        }

    }

    useEffect( () => {
        fetchTasks();
    },[]);

    useEffect( () => {
        setNumTasks(tasks.length);
        setNumTasksCompleted(calcNumTasksCompleted())
        setFilteredTasks(tasks);
    },[tasks])


    const value = {
        tasks,
        loading,
        title,
        setTitle,
        content,
        setContent,
        filteredTasks,
        numTasks,
        numTasksCompleted,
        searchTask,
        createTask,
        completedTask,
        updateTask,
        deleteTask
    }

    return(
        <TasksContext.Provider value={value}>
            {children}
        </TasksContext.Provider>
    )
}

