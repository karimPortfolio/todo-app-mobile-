import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingStart:25,
        paddingEnd:25,
        position:'absolute',
        top:630,
        left:0,
        zIndex:1
    },
    button:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        gap:7,
        width:'80%',
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity:  0.23,
        shadowRadius: 11.78,
        elevation: 15
    },
    text:{
        color:'white',
        fontSize:16,
        fontWeight:'600'
    }
})

