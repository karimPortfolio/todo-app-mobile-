import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    titleText: {
        fontSize:32,
        fontWeight:'600',
        color:'#7c3aed'
    },
    paragraphText: {
        marginTop:11,
        fontSize:20,
        fontWeight:'600',
        //color:'#fff'
    },
    bottomTypoContainer:{
        width:'100%',
        paddingTop:20,
        paddingBottom:120,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        gap:3
    },
    bottomTypoText: {
        textAlign:'center',
        fontSize:16,
    },
    bottomTypoButton:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    bottomTypoLink: {
        color:'#7c3aed',
        textDecorationLine:'underline',
        fontSize:16,
    }
})
