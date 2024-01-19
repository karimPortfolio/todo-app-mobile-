import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container:{
        marginTop:46,
        width:'100%',
        backgroundColor:'#fff',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        paddingStart:25,
        paddingEnd:25,
        paddingBottom:15
    },
    avatar: {
        borderRadius:500,
        width:35,
        height:35,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#7c3aed'
    },
    avatarText:{
        color:'#fff',
        fontSize:13,
        fontWeight:'500'
    }
})
