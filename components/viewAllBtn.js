import {View,StyleSheet,Text} from "react-native";

export default function ViewAllBtn({title,dyStyle}){
    return(
        
        <View style={styles.btnContainer}>
             <Text style={[styles.tiStyle,dyStyle]}>{title}</Text>
         </View>
    )
}

const styles=StyleSheet.create({
    
    btnContainer:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:10,
       
     

    },
    tiStyle:{
        backgroundColor:'#2B2E31',
        borderColor:'#53596680',
        borderWidth:1,
        borderRadius:50,
        width:150,
        padding:10,
        color:"#ffffff",
        textAlign:'center'
    }
})