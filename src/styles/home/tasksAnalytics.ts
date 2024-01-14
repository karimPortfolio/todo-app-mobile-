import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container:{
        paddingTop:50,
        paddingLeft:25,
        paddingRight:25,
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center',
        flexDirection:'row',
        gap:10,
        width:'100%'
    },
    cardContainer:
    {
        width:'48.5%',
    },
    card1:{
        width:'100%',
        backgroundColor:'#ddd6fe',
    },
    card2:{
        width:'100%',
        backgroundColor:'#bae6fd'
    },
    cardHeader:
    {
        paddingBottom:15
    },
    headText:{
        fontSize:21,
        fontWeight:'600',
        color:'#7c3aed'
    },
    contentText:{
        fontSize:18,
        fontWeight:'700',
        color:'#1e293b'
    }
})