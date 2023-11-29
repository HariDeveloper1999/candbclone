import { Image,View,StyleSheet,Text } from "react-native"

export default function ImageDataCard({data}){
    return(

        <View style={styles.card}>
            <View>
            <Image
            source={{uri:data.imageUrl}}
            style={styles.imageStyle}
            
            />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.cName}>{data.title}</Text>
            <Text style={styles.cSubTxt}>{`${data.odometer} | ${data.fuel} | ${data.transmission}`}</Text>
            <Text style={[styles.cName,styles.mt10]}>{data.price}</Text>
            <View style={styles.hrLine}/>
           <Text style={styles.address}>{data.dealer_location}</Text>
        </View>
      
   
            

        </View>
    )
}

const styles=StyleSheet.create({
    card:{
        backgroundColor:"#1B1F21",
        width:250,
        borderRadius:20,
        elevation: 20,
        shadowColor: '#52006A',
        height:300,
        marginHorizontal:10
    },
    imageStyle:{
        height:150,
        width:250,
        borderRadius:10

    },
    textContainer:{
        margin:10,
   
       
    },
    cName:{
        color:"#FFFFFF",
        fontSize:16,
    },
    cSubTxt:{
        color:'#c1c1c1',
        fontSize:12,
        marginTop:5
    },
    mt10:{
      marginTop:10,
    },
    hrLine:{
        borderBottomColor:"#707070",
        borderBottomWidth: 2,
        elevation:20,
        shadowColor:'#535966',
        marginTop:20,
       
    },
    address:{
        color:'#707070',
        fontSize:12,
        marginTop:10
    }
})

