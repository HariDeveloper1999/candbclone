import { StyleSheet,View,Text } from "react-native"


export default function Card({children}){

    return(
        <View style={styles.cardContainer}>
          {children}
        </View>
    )

}

const styles=StyleSheet.create({
    cardContainer:{
        
   backgroundColor:'#2B2E31',
    borderRadius:15,
    margin:20
        
    }

})