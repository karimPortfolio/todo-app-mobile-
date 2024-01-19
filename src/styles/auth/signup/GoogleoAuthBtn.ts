import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({
    container:{
        //marginTop:20,
    },
    button:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:7,
        height:55,
        backgroundColor:'#0f172a',
        borderRadius:500
    },
    buttonText:{
        color:'white',
        fontSize:16,
        fontWeight:'500'
    },
    hrLineContainer:{
        paddingTop:40,
        paddingBottom:40,
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:20
    },
    hrLine:{
        backgroundColor:'#0f172a',
        width:'40%',
        height:0.6
    },
    hrLineText:{
    }
})