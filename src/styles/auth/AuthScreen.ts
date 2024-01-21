import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    scrollView:{
        height:'100%',
    },
    container: {
        paddingTop:35,
        backgroundColor:'#161a2b',
        width:'100%',
        height:'100%',
        paddingStart:25,
        paddingEnd:25,
    },
    titleText:{
        fontSize:33,
        fontWeight:'600',
        color:'#a78bfa'
    },
    paragraphText: {
        marginTop:15,
        fontSize:21,
        fontWeight:'600',
        color:'#fff'
    },
    imageContainer:{
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:50
    },
    image: {
        width:320,
        height:320,
        objectFit:'cover',
    },
    buttonsContainer:{
        paddingTop:40,
    },
    button1:{
        backgroundColor:'#eee',
        height:55,
        shadowColor: "#ffffff",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity:  0.22,
        shadowRadius: 9.22,
        elevation: 9,
        borderRadius:120
    },
    button1Text:{
        fontSize:16,
        fontWeight:'500',
        color:'#161a2b'
    },
    button2:{
        marginTop:20,
        height:55,
        borderRadius:120
    },
    button2Text:{
        fontSize:16,
        fontWeight:'500',
        color:'#fff'
    }
})

