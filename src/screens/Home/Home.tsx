import React, { useContext, useEffect } from "react";
import { SafeAreaView, ScrollView, StatusBar, View } from "react-native";
import TasksContainer from "./_components/TasksContainer";
import Typographie from "./_components/Typographie";
import { styles } from "../../styles/home/home";
import TasksAnalytics from "./_components/TasksAnalytics";
import SearchTask from "./_components/SearchTask";
import { Tasks } from "../../services/context/Tasks";
import AddTaskButton from "./_components/AddTaskBtn";

const Home = ({navigation}) => {

    useEffect( () => {
        StatusBar.setBarStyle('dark-content');
    },[])

    return(
        <SafeAreaView style={styles.container}>
            <StatusBar />

            <ScrollView style={styles.scrollContainer}>
                <Typographie />
                <TasksAnalytics />
                <SearchTask />
                <TasksContainer
                navigation={navigation} 
                />
            </ScrollView>

            <AddTaskButton 
            navigation={navigation} 
            />

        </SafeAreaView>
    )
}

export default Home;
