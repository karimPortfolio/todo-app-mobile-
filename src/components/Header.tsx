import React from "react";
import { View } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwsome from 'react-native-vector-icons/FontAwesome'
import { styles } from "../styles/GlobalComp/header";

const Header = () => {
    return(
        <View style={styles.container}>
            <View>
                <AntDesign name="user" size={25} />
            </View>
            <View>
                <FontAwsome name="bell-o" size={20} />
            </View>
        </View>
    )
}

export default Header;
