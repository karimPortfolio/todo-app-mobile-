import React from "react";
import { View } from "react-native";
import { Input } from "../../../components/Input";
import { styles } from "../../../styles/home/searchTask";

const SearchTask = () => {
    return(
        <View style={styles.container} >
            <Input
            styles={styles.input}
            placeholder="Search for task"
            />
        </View>

    )
}

export default SearchTask;

