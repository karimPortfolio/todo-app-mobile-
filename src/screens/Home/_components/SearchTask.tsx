import React, { useContext, useState } from "react";
import { View, Text } from "react-native";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { styles } from "../../../styles/home/searchTask";
import FontAwsome from 'react-native-vector-icons/FontAwesome'
import { TasksContext } from "../../../services/context/Tasks";

const SearchTask = () => {

    const [searchValue, setSearchValue] = useState<string>('');
    const {searchTask} = useContext(TasksContext);

    const handleSearchChange = (text: string) => {
        setSearchValue(text);
    }

    return(
        <View style={styles.container} >
            <View style={styles.box} >
                <View style={styles.inputContainer}>
                    <Input
                    styles={styles.input}
                    value={searchValue}
                    placeholder="Search for task"
                    onChangeText={handleSearchChange}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                    styles={styles.button}
                    onPress={ () => searchTask(searchValue) }
                    >
                        <FontAwsome name="search" color='#fff' size={19} />
                    </Button>
                </View>
            </View>
        </View>

    )
}

export default SearchTask;

