import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../../../styles/home/typographie';
import { AuthManagementContext } from '../../../services/context/Auth';

const Typographie = () => {

    const {AUTH} = useContext(AuthManagementContext);
    const {user} = useContext(AuthManagementContext);
 
  return (
    <View style={styles.container}>
        <Text style={styles.firstText}>Hi {AUTH ? user?.name : null},</Text>
        <Text style={styles.text}>Let's check your Tasks</Text>
    </View>
  )
}

export default Typographie