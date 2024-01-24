import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from '../../../../styles/auth/signin/Typographie';

const Typographie = () => {
    return (
        <View >
            <View style={styles.imageContainer}>
                <Image 
                style={styles.image}
                source={require('../../../../assets/icon.png')}
                />
            </View>
            <Text style={styles.titleText} >Forget password</Text>
            <Text style={styles.paragraphText} >Reset your password</Text>
        </View>
    )
}



export default Typographie;
