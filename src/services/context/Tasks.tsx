import React, { createContext, useState, useEffect, useRef, useContext } from "react";
import type { TaskContext, TasksType } from '../index';
import { PUBLIC_API_ENDPOINT_HOST } from '@env';
import { useNavigation } from "@react-navigation/native";
import { navigationRef } from "../RootNavigation";
import { AuthManagementContext } from "./Auth";
import AsyncStorage from "@react-native-async-storage/async-storage";


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
    fetchTasks: () => {},
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

    const {AUTH} = useContext(AuthManagementContext);
    const {user} = useContext(AuthManagementContext);

    const navigation = navigationRef;


    //get tasks from server using RESTFulAPI
    const fetchTasks = async () => {

        try
        {
            const token = await AsyncStorage.getItem('token');
            let user: any = await AsyncStorage.getItem('profile');
            user = JSON.parse(user);

            if (!token || !user)
            {
                setTasks([]);
                return;
            }

            const url = `${PUBLIC_API_ENDPOINT_HOST}/tasks/${JSON.parse(user.id)}`;
            console.log(url+' '+'GET');

            if (token)
            {
                setLoading(true);
                const response = await fetch(url, {
                    headers:{
                        'Authorization': `Bearer ${JSON.parse(token)}`
                    }
                });
                const result = await response.json();
                if (result.type === 'failed' && result.message)
                {
                    setMessage(result.message);
                    alert(result.message);
                    if (response.status === 401)
                    {
                        navigation.navigate('Signup');
                    }
                    
                } 
                else if (result.type === 'success' && result.tasks)
                {
                    console.log(tasks);
                    setTasks(result.tasks);
                }
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
        setLoading(true);
        const filterTasks = tasks.filter( task => {
            if (task.title.toLowerCase().includes(taskTitle.toLowerCase()))
            {
                return task;
            }
        });
        setFilteredTasks(filterTasks);
        setTimeout( ()  => {
            setLoading(false);
        }, 200)
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
            
            if (AUTH && user)
            {
                const token = await AsyncStorage.getItem('token');
                const url = `${PUBLIC_API_ENDPOINT_HOST}/tasks/${user.id}/store`;
                console.log(url+' '+'POST');
                try
                {
                    if (token)
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
                                'Authorization':`Bearer ${JSON.parse(token)}`,
                            }
                        })
                        const result = await response.json();
                        if (result.type === 'failed')
                        {
                            setMessage(result.message);
                            if (response.status === 401)
                            {
                                navigation.navigate('Signin');
                            }
                        } 
                        else if (result.type === 'success')
                        {
                            setTasks(result.tasks);
                        }
                        alert(result.message);
                    }
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
            }
            else
            {
                setLoading(false);
                alert('Sign in first to continue');
                navigation.navigate('Signup');
            }

        }, 3000);
        
    };

    //completed task
    const completedTask = async (id: number) => { 

        setLoading(true);
        
        try
        {
            const url = `${PUBLIC_API_ENDPOINT_HOST}/tasks/${id}/completed`;
            console.log(url+' '+'PUT');

            const token = await AsyncStorage.getItem('token');
            if (token)
            {
                const response = await fetch(url, { 
                    method:'PUT',
                    headers:{
                        'Authorization': `Bearer ${JSON.parse(token)}`,
                    }
                });
                const result = await response.json();
                if (result.type === 'failed' && result.message)
                {
                    setMessage(result.message);
                    console.log(result);
                    if (response.status === 401)
                    {
                        navigation.navigate('Signin');
                    }
                } 
                else if (result.type === 'success' && result.tasks)
                {
                    console.log(result);
                    setTasks(result.tasks);
                }
                alert(result.message);
            }
            
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
            console.log(url+' '+'PUT');

            try
            {
                const token = await AsyncStorage.getItem('token');
                if (token)
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
                            'Authorization': `Bearer ${JSON.parse(token)}`,
                        }
                    });
                    const result = await response.json();
        
                    if (result.type === 'failed' && result.message)
                    {
                        setMessage(result.message);
                        console.log(result);
                        if (response.status === 401)
                        {
                            navigation.navigate('Signin');
                        }
                    } 
                    else if (result.type === 'success' && result.tasks)
                    {
                        console.log(result);
                        setTasks(result.tasks);
                    }
    
                    alert(result.message);
                }
                
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

        

        try
        {
            const url = `${PUBLIC_API_ENDPOINT_HOST}/tasks/${id}/destroy`;
            console.log(url+' '+'DELETE');

            const token = await AsyncStorage.getItem('token');
            if (token)
            {
                const response = await fetch(url, {
                    method:'DELETE',
                    headers:{
                        'Authorization': `Bearer ${JSON.parse(token)}`,
                    }
                });
                const result = await response.json();
    
                if (result.type === 'failed' && result.message)
                {
                    setMessage(result.message);
                    console.log(result);
                    if (response.status === 401)
                    {
                        navigation.navigate('Signin');
                    }
                } 
                else if (result.type === 'success' && result.tasks)
                {
                    console.log(result);
                    setTasks(result.tasks);
                }
    
                alert(result.message);
            }
            
            
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

    //render Tasks and wait until the async function done processing
    useEffect( () => {
        const fetchData = async () => {
            await fetchTasks();
        }
        fetchData();
    },[AUTH]);

    //re-render Tasks related information only if tasks state changes
    useEffect( () => {
        const relatedTasksMethods = () => {
            if (tasks)
            {
                setNumTasks(tasks.length);
                setNumTasksCompleted(calcNumTasksCompleted())
                setFilteredTasks(tasks);
            }
        }
        relatedTasksMethods();
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
        fetchTasks,
        searchTask,
        createTask,
        completedTask,
        updateTask,
        deleteTask,
    }

    return(
        <TasksContext.Provider value={value}>
            {children}
        </TasksContext.Provider>
    )
}

