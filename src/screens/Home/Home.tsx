import React, { useContext } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import TasksContainer from "./_components/TasksContainer";
import Typographie from "./_components/Typographie";
import { styles } from "../../styles/home/home";
import TasksAnalytics from "./_components/TasksAnalytics";
import SearchTask from "./_components/SearchTask";
import { Tasks } from "../../services/context/Tasks";

const Home = () => {

    return(
        <Tasks>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollContainer}>
                    <Typographie />
                    <TasksAnalytics />
                    <SearchTask />
                    <TasksContainer />
                </ScrollView>
            </SafeAreaView>
        </Tasks>
    )
}

export default Home;
