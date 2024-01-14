import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container:{
        paddingTop:50,
        width:'100%',
        paddingLeft:25,
        paddingRight:25,
    },
    box:{
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center',
        flexDirection:'row',
        borderColor:'#7c3aed',
        borderRadius:6,
        borderWidth:1.5,
        padding:5
    },
    inputContainer:{
        width:'84%'
    },
    input: {
        height:50,
        width:'100%',
        borderColor:'transparent',
    },
    buttonContainer:{
        width:'16%'
    },
    button:{
        width:'100%',
        height:50,
        backgroundColor:'#7c3aed',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        gap:4
    },
    buttonText:{
        color:'#fff',
        fontSize:16
    }
})