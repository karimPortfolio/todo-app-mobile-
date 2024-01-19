import React, { useContext } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { styles } from "../styles/GlobalComp/header";
import { AuthManagementContext } from '../services/context/Auth';
import { Icon } from "../components/Icon"

const Header = ({navigation}) => {

    // Auth providers
    const {AUTH} = useContext(AuthManagementContext);
    const {user} = useContext(AuthManagementContext);
    const {logout} = useContext(AuthManagementContext);

    const navigatetoAuthScreen = () => {
        navigation.navigate('Auth Screen');
    } 

    const userNameSplit = user ? user.name.split(' ') : null;
    const userName = userNameSplit ? userNameSplit[0][0]+userNameSplit[userNameSplit.length - 1][0] : null;

    return(
        <View style={styles.container}>
            {
                AUTH ? (
                    <View style={styles.avatar}>
                        <Text style={styles.avatarText}> {userName} </Text>
                    </View>
                ) : (
                    <TouchableOpacity
                    onPress={navigatetoAuthScreen}
                    >
                        <AntDesign name="user" size={25} />
                    </TouchableOpacity>
                )
            }
            <View>
                {
                    AUTH ? (
                        <TouchableOpacity
                        onPress={logout}
                        >
                            <Ionicons name="log-out-outline" size={27} />
                        </TouchableOpacity>
                    ) : null
                }
            </View>
        </View>
    )
}

export default Header;
