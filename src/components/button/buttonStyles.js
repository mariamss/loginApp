import { StyleSheet} from "react-native"
export default styles=StyleSheet.create({
    container:{
        width:120,
        height:30,
        backgroundColor:"#fff",
        borderRadius: 5,
        alignItems:"center",
        justifyContent:'center',
        marginTop:15,
        marginBottom:5
    },
    disabledButton: {
        backgroundColor:"#C0C0C0"
    },
    disabledText: {
        color:"#585858"
    },
    text: {
        fontWeight:"bold",
        fontSize:14
    }
})