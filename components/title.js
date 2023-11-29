import { Text ,StyleSheet,View} from "react-native"
export default function Title({title}){
    return(
        <View style={styles.container}>
        <View style={styles.line}></View>
        <Text style={styles.titColor}>{title}</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flexDirection:"row",
        marginBottom:15
    },
    line:{
        borderLeftColor: "#F7E300",
        borderLeftWidth:5,
        borderRadius: 12,
        marginLeft:5,
        height:"110%"
        
    },
    titColor:{
        color:"#ffffff",
        fontSize:20,
        marginHorizontal:10,
       

    }
})