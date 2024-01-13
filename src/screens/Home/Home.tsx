import React from "react";
import { SafeAreaView, View } from "react-native";
import TasksContainer from "./_components/TasksContainer";
import Typographie from "./_components/Typographie";
import { styles } from "../../styles/home/home";
import TasksAnalytics from "./_components/TasksAnalytics";
import SearchTask from "./_components/SearchTask";

const Home = () => {

    return(
        <SafeAreaView style={styles.container}>
            <Typographie />
            <TasksAnalytics />
            <SearchTask />
            <TasksContainer />
        </SafeAreaView>
    )
}

export default Home;
