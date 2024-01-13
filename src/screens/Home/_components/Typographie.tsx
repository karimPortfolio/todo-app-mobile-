import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../../../styles/home/typographie';

const Typographie = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.firstText}>Hi Karim,</Text>
        <Text style={styles.text}>Let's check your Tasks</Text>
    </View>
  )
}

export default Typographie