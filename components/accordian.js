import { useState } from "react"
import { View,Text,StyleSheet, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Accordiaon({item}){
     const[acActive,setAcActive]=useState(false)
    return(
        <View style={styles.container}>
            <Pressable style={styles.acHead} onPress={()=>setAcActive(!acActive)}>
                 <Text style={styles.acTitle}>{item?.label}</Text>
                  <Ionicons name={acActive?"remove":'add'} size={24}  color="white"/>
            </Pressable>
            {acActive &&
            <View style={styles.acbody}>
                <Text style={styles.acbTitle}>{item?.value}</Text>
            </View>
        }
        {
            item.line &&
            <View style={styles.borderContainer}>

            </View>
        }
        
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:"#2B2E31",
        padding:20,
        marginHorizontal:20,
    },
    
    acHead:{
        flexDirection:'row',
        justifyContent:"space-between",

    },
    acTitle:{
    color:"white",
    fontSize:18,
    width:200
    },
    acbody:{
        margin:20,
    },
    acbTitle:{
        color:'white',
        fontSize:16,
    },
    borderContainer:{
        borderBottomWidth:2,
        borderBottomColor:'#4d4d4d',
        marginTop:20,
    }

})