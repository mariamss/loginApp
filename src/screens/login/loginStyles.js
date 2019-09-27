import {StyleSheet} from "react-native";

export default  styles=StyleSheet.create({
    backgroundImage: {
        width:"100%",
        height:"100%",
        resizeMode:"contain"
    },
    formContainer:{
        width:"100%",
        height: "100%",
        alignItems:"center",
        justifyContent:"center",
        paddingBottom:100
    },
    textContainer:{
        marginVertical:10
    },
    textStyle:{
        color:"#fff",
        fontSize: 11,
    },
    underlinedText:{
        textDecorationLine:"underline"
    },
    errorMessage : {
        color:"#a52a2a",
        fontSize:12
    }
})