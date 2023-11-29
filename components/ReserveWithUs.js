import Card from "./card"
import Title from "./title"
import { Text ,StyleSheet,View} from "react-native"


export default function ReserveWithUs(){

    return(
        <>
        <Title title="Why Reserve With us"/>
        <Card>
            <View style={styles.conatiner}>
            <Text style={styles.tStyle}>Priority Car Block for 48 Hours</Text>
            <Text style={styles.tStyle}>Exclusive Access to Offers </Text>
            <Text style={styles.tStyle}>Free* 2-Year Mahindra Warranty</Text>
            <Text style={styles.tStyle}>Free RC* Transfer</Text>
            </View>

        </Card>
        </>
    )
}

const styles=StyleSheet.create({
    conatiner:{
        padding:20,
      
    },
    tStyle:{
      color:'white'
    }

})